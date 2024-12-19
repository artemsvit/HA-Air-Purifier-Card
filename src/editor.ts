import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant, fireEvent } from 'custom-card-helpers';

@customElement('ha-air-purifier-card-editor')
export class HaAirPurifierCardEditor extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @property({ attribute: false }) private _config?: any;

  public setConfig(config: any): void {
    this._config = config;
  }

  protected render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    const entities = Object.keys(this.hass.states).filter(eid => eid.substr(0, 4) === 'fan.');

    return html`
      <div class="card-config">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this._config.entity}
          .configValue=${'entity'}
          .label=${'Entity (Required)'}
          .includeDomains=${['fan']}
          @value-changed=${this._valueChanged}
        ></ha-entity-picker>

        <ha-textfield
          label="Name (Optional)"
          .value=${this._config.name || ''}
          .configValue=${'name'}
          @input=${this._valueChanged}
        ></ha-textfield>

        <div class="switches">
          <ha-formfield label="Show Name">
            <ha-switch
              .checked=${this._config.show_name !== false}
              .configValue=${'show_name'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show State">
            <ha-switch
              .checked=${this._config.show_state !== false}
              .configValue=${'show_state'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Toolbar">
            <ha-switch
              .checked=${this._config.show_toolbar !== false}
              .configValue=${'show_toolbar'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>
    `;
  }

  private _valueChanged(ev: CustomEvent): void {
    if (!this._config || !this.hass) {
      return;
    }

    const target = ev.target as any;
    const value = target.value || ev.detail?.value || target.checked;
    const configValue = target.configValue;

    if (this._config[configValue] === value) {
      return;
    }

    const newConfig = {
      ...this._config,
      [configValue]: value,
    };

    fireEvent(this, 'config-changed', { config: newConfig });
  }

  static get styles() {
    return css`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .switches {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      ha-switch {
        --mdc-theme-secondary: var(--primary-color);
      }
    `;
  }
}
