import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';

@customElement('ha-air-purifier-card-editor')
export class HaAirPurifierCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) private _config!: any;

  public setConfig(config: any): void {
    this._config = {
      show_animation: true,
      show_speed: true,
      show_humidity: true,
      show_temperature: true,
      show_filter_life: true,
      show_light_control: true,
      show_child_lock: true,
      show_buzzer: true,
      ...config,
    };
  }

  private _valueChanged(ev: CustomEvent): void {
    const config = ev.detail.value;
    const newConfig = {
      ...this._config,
      ...config,
    };
    const event = new CustomEvent('config-changed', {
      detail: { config: newConfig },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  protected render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    const fanEntities = Object.keys(this.hass.states)
      .filter(entityId => entityId.startsWith('fan.'))
      .filter(entityId => {
        const state = this.hass.states[entityId];
        return state.attributes.device_class === 'air_purifier' || 
               entityId.includes('air_purifier') ||
               entityId.includes('purifier');
      });

    const schema = [
      {
        name: 'entity',
        required: true,
        selector: {
          entity: {
            domain: 'fan',
            include_entities: fanEntities,
          },
        },
      },
      {
        name: 'name',
        required: false,
        selector: { text: {} }
      },
      {
        name: 'show_animation',
        required: false,
        default: true,
        description: 'Show rotating animation around PM2.5 value when device is on',
        selector: { boolean: {} }
      },
      {
        name: 'show_speed',
        required: false,
        default: true,
        description: 'Display fan speed in RPM',
        selector: { boolean: {} }
      },
      {
        name: 'show_humidity',
        required: false,
        default: true,
        description: 'Display current relative humidity',
        selector: { boolean: {} }
      },
      {
        name: 'show_temperature',
        required: false,
        default: true,
        description: 'Display current temperature',
        selector: { boolean: {} }
      },
      {
        name: 'show_filter_life',
        required: false,
        default: true,
        description: 'Display remaining filter life percentage',
        selector: { boolean: {} }
      },
      {
        name: 'show_light_control',
        required: false,
        default: true,
        description: 'Show button to control the indicator light',
        selector: { boolean: {} }
      },
      {
        name: 'show_child_lock',
        required: false,
        default: true,
        description: 'Show button to control the child lock',
        selector: { boolean: {} }
      },
      {
        name: 'show_buzzer',
        required: false,
        default: true,
        description: 'Show button to control the buzzer',
        selector: { boolean: {} }
      },
    ];

    return html`
      <div class="card-config">
        <ha-form
          .hass=${this.hass}
          .data=${this._config}
          .schema=${schema}
          .computeLabel=${(schema: any) => {
            const key = schema.name;
            const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
            return key === 'entity' 
              ? 'Air Purifier Entity' 
              : key === 'name'
              ? 'Card Name (Optional)'
              : key.startsWith('show_')
              ? `Show ${capitalize(key.replace('show_', '').replace('_', ' '))}`
              : capitalize(key.replace('_', ' '));
          }}
          @value-changed=${this._valueChanged}
        ></ha-form>
      </div>
    `;
  }

  static get styles() {
    return css`
      .card-config {
        padding: 16px;
      }
      ha-form {
        display: block;
      }
    `;
  }
}
