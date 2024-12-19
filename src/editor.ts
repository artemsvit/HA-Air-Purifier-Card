import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';

@customElement('ha-air-purifier-card-editor')
export class HaAirPurifierCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) private _config!: any;

  public setConfig(config: any): void {
    this._config = config;
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
        selector: {
          entity: {
            domain: 'fan',
            include_entities: fanEntities,
          },
        },
      },
      { name: 'name', selector: { text: {} } },
      { name: 'show_animation', selector: { boolean: {} } },
      { name: 'show_speed', selector: { boolean: {} } },
      { name: 'show_humidity', selector: { boolean: {} } },
      { name: 'show_temperature', selector: { boolean: {} } },
      { name: 'show_filter_life', selector: { boolean: {} } },
      { name: 'show_light_control', selector: { boolean: {} } },
    ];

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${schema}
        .computeLabel=${(schema: any) => {
          const key = schema.name;
          const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
          return key === 'entity' 
            ? 'Entity' 
            : key === 'name'
            ? 'Name (Optional)'
            : key.startsWith('show_')
            ? `Show ${capitalize(key.replace('show_', '').replace('_', ' '))}`
            : capitalize(key.replace('_', ' '));
        }}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  static get styles() {
    return css`
      ha-form {
        display: block;
        padding: 16px;
      }
    `;
  }
}
