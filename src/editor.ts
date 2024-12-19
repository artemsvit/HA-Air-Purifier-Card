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
        <div class="config-row">
          <ha-entity-picker
            .label="Air Purifier Entity (Required)"
            .hass=${this.hass}
            .value=${this._config.entity}
            .configValue=${'entity'}
            .includeDomains=${['fan']}
            .entityFilter=${(entityId: string) => entityId.startsWith('fan.zhimi_mb3_')}
            @value-changed=${this._valueChanged}
            required
          ></ha-entity-picker>
        </div>

        <div class="config-row">
          <ha-textfield
            label="Card Name (Optional)"
            .value=${this._config.name || ''}
            .configValue=${'name'}
            @input=${this._valueChanged}
          ></ha-textfield>
        </div>

        <div class="config-row">
          <ha-formfield label="Show PM2.5 Animation">
            <ha-switch
              .checked=${this._config.show_animation !== false}
              .configValue=${'show_animation'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="config-row">
          <ha-formfield label="Show Speed">
            <ha-switch
              .checked=${this._config.show_speed !== false}
              .configValue=${'show_speed'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="config-row">
          <ha-formfield label="Show Humidity">
            <ha-switch
              .checked=${this._config.show_humidity !== false}
              .configValue=${'show_humidity'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="config-row">
          <ha-formfield label="Show Temperature">
            <ha-switch
              .checked=${this._config.show_temperature !== false}
              .configValue=${'show_temperature'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="config-row">
          <ha-formfield label="Show Filter Life">
            <ha-switch
              .checked=${this._config.show_filter_life !== false}
              .configValue=${'show_filter_life'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="config-row">
          <ha-formfield label="Show Light Control">
            <ha-switch
              .checked=${this._config.show_light_control !== false}
              .configValue=${'show_light_control'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>
    `;
  }

  static get styles() {
    return css`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;
      }

      .config-row {
        display: flex;
        align-items: center;
      }

      ha-entity-picker,
      ha-textfield {
        width: 100%;
      }

      ha-formfield {
        display: flex;
        height: 48px;
        align-items: center;
        --mdc-typography-body2-font-size: 14px;
      }

      ha-switch {
        --mdc-theme-secondary: var(--primary-color);
      }
    `;
  }
}
