import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant, fireEvent } from 'custom-card-helpers';

@customElement('ha-air-purifier-card-editor')
export class HaAirPurifierCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ type: Object }) private _config!: any;
  @property({ type: Boolean }) private _configChanged = false;

  public setConfig(config: any): void {
    this._config = config;
  }

  private _valueChanged(ev: CustomEvent): void {
    if (!this._config || !this.hass) return;

    const target = ev.target as any;
    if (!target) return;

    const value = target.value || ev.detail?.value || target.checked;

    if (this._config[target.configValue] === value) {
      return;
    }

    if (value === '') {
      const newConfig = { ...this._config };
      delete newConfig[target.configValue];
      fireEvent(this, 'config-changed', { config: newConfig });
    } else {
      const newConfig = {
        ...this._config,
        [target.configValue]: value,
      };
      this._configChanged = true;
      fireEvent(this, 'config-changed', { config: newConfig });
    }
  }

  protected render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    const entities = Object.keys(this.hass.states).filter(
      eid => eid.split('.')[0] === 'fan' && eid.includes('zhimi_mb3')
    );

    return html`
      <ha-form
        .schema=${[
          { 
            name: "entity",
            required: true,
            selector: {
              entity: {
                domain: "fan",
                filter: (entity: string) => entity.includes('zhimi_mb3'),
              }
            }
          },
          {
            name: "name",
            selector: { text: {} }
          },
          {
            name: "show_animation",
            selector: { boolean: {} }
          },
          {
            name: "show_speed",
            selector: { boolean: {} }
          },
          {
            name: "show_humidity",
            selector: { boolean: {} }
          },
          {
            name: "show_temperature",
            selector: { boolean: {} }
          },
          {
            name: "show_filter_life",
            selector: { boolean: {} }
          },
          {
            name: "show_light_control",
            selector: { boolean: {} }
          }
        ]}
        .data=${this._config}
        .hass=${this.hass}
        .computeLabel=${(schema: any) => {
          switch (schema.name) {
            case "entity":
              return "Air Purifier Entity (Required)";
            case "name":
              return "Card Name (Optional)";
            case "show_animation":
              return "Show PM2.5 Animation";
            case "show_speed":
              return "Show Speed";
            case "show_humidity":
              return "Show Humidity";
            case "show_temperature":
              return "Show Temperature";
            case "show_filter_life":
              return "Show Filter Life";
            case "show_light_control":
              return "Show Light Control";
            default:
              return schema.name;
          }
        }}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  static get styles() {
    return css`
      ha-form {
        display: block;
        padding: var(--ha-form-spacing, 16px);
      }
    `;
  }
}
