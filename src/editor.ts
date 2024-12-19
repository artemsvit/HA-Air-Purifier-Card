import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant, fireEvent } from 'custom-card-helpers';

@customElement('ha-air-purifier-card-editor')
export class HaAirPurifierCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ type: Object }) private _config!: any;

  public setConfig(config: any): void {
    this._config = config;
  }

  private _valueChanged(ev: CustomEvent): void {
    if (!this._config || !this.hass) return;

    const target = ev.target as any;
    if (!target) return;

    const value = target.value || ev.detail?.value || target.checked;

    if (value === '') {
      const newConfig = { ...this._config };
      delete newConfig[target.configValue];
      fireEvent(this, 'config-changed', { config: newConfig });
    } else {
      const newConfig = {
        ...this._config,
        [target.configValue]: value,
      };
      fireEvent(this, 'config-changed', { config: newConfig });
    }
  }

  protected render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    return html`
      <div class="card-config">
        <div class="values">
          <ha-entity-picker
            .hass=${this.hass}
            .label=${"Air Purifier Entity (Required)"}
            .value=${this._config.entity}
            .configValue=${"entity"}
            .includeDomains=${["fan"]}
            .entityFilter=${(entityId: string) => entityId.includes('zhimi_mb3')}
            @value-changed=${this._valueChanged}
            allow-custom-entity
          ></ha-entity-picker>
        </div>

        <div class="values">
          <ha-textfield
            label="Card Name (Optional)"
            .value=${this._config.name || ''}
            .configValue=${'name'}
            @input=${this._valueChanged}
          ></ha-textfield>
        </div>

        <div class="switches">
          <div class="switch-wrapper">
            <ha-formfield label="Show PM2.5 Animation">
              <ha-switch
                .checked=${this._config.show_animation !== false}
                .configValue=${'show_animation'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="switch-wrapper">
            <ha-formfield label="Show Speed">
              <ha-switch
                .checked=${this._config.show_speed !== false}
                .configValue=${'show_speed'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="switch-wrapper">
            <ha-formfield label="Show Humidity">
              <ha-switch
                .checked=${this._config.show_humidity !== false}
                .configValue=${'show_humidity'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="switch-wrapper">
            <ha-formfield label="Show Temperature">
              <ha-switch
                .checked=${this._config.show_temperature !== false}
                .configValue=${'show_temperature'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="switch-wrapper">
            <ha-formfield label="Show Filter Life">
              <ha-switch
                .checked=${this._config.show_filter_life !== false}
                .configValue=${'show_filter_life'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="switch-wrapper">
            <ha-formfield label="Show Light Control">
              <ha-switch
                .checked=${this._config.show_light_control !== false}
                .configValue=${'show_light_control'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 16px;
      }

      .values {
        display: grid;
        gap: 16px;
      }

      ha-textfield {
        width: 100%;
      }

      .switches {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .switch-wrapper {
        display: flex;
        align-items: center;
      }

      ha-formfield {
        padding: 8px;
        color: var(--primary-text-color);
      }

      ha-switch {
        --mdc-theme-secondary: var(--primary-color);
      }
    `;
  }
}
