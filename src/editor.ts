import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';

@customElement('ha-air-purifier-card-editor')
export class HaAirPurifierCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) private _config!: any;

  public setConfig(config: any): void {
    this._config = {
      show: {
        name: true,
        state: true,
        temperature: true,
        humidity: true,
        speed: true,
        filter_life: false,
        light: false,
        child_lock: false,
        buzzer: false,
      },
      ...config,
    };
  }

  private _valueChanged(ev: CustomEvent): void {
    if (!this._config || !this.hass) return;

    const target = ev.target as any;
    if (!target.configValue) return;

    const value = target.checked !== undefined ? target.checked : target.value;
    const configValue = target.configValue;

    if (configValue.includes('.')) {
      const [section, key] = configValue.split('.');
      this._config = {
        ...this._config,
        [section]: {
          ...this._config[section],
          [key]: value,
        },
      };
    } else {
      this._config = {
        ...this._config,
        [configValue]: value,
      };
    }

    const event = new CustomEvent('config-changed', {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  protected render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    const entities = Object.keys(this.hass.states).filter(
      (eid) => eid.substr(0, 4) === 'fan.'
    );

    return html`
      <div class="card-config">
        <div class="section">
          <div class="row">
            <ha-textfield
              label="Name"
              .value=${this._config.name || ''}
              .configValue=${'name'}
              @input=${this._valueChanged}
            ></ha-textfield>
          </div>

          <div class="row">
            <ha-select
              label="Entity"
              .value=${this._config.entity}
              .configValue=${'entity'}
              @selected=${this._valueChanged}
              required
            >
              ${entities.map((entity) => html`
                <mwc-list-item .value=${entity}>${entity}</mwc-list-item>
              `)}
            </ha-select>
          </div>
        </div>

        <div class="section">
          <div class="row">
            <span class="section-header">Display Options</span>
          </div>

          <div class="row">
            <ha-formfield label="Show Name">
              <ha-switch
                .checked=${this._config.show?.name !== false}
                .configValue=${'show.name'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield label="Show State Animation">
              <ha-switch
                .checked=${this._config.show?.state !== false}
                .configValue=${'show.state'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield label="Show Temperature">
              <ha-switch
                .checked=${this._config.show?.temperature !== false}
                .configValue=${'show.temperature'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield label="Show Humidity">
              <ha-switch
                .checked=${this._config.show?.humidity !== false}
                .configValue=${'show.humidity'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield label="Show Speed">
              <ha-switch
                .checked=${this._config.show?.speed !== false}
                .configValue=${'show.speed'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield label="Show Filter Life">
              <ha-switch
                .checked=${this._config.show?.filter_life === true}
                .configValue=${'show.filter_life'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>
        </div>

        <div class="section">
          <div class="row">
            <span class="section-header">Control Options</span>
          </div>

          <div class="row">
            <ha-formfield label="Show Light Control">
              <ha-switch
                .checked=${this._config.show?.light === true}
                .configValue=${'show.light'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield label="Show Child Lock">
              <ha-switch
                .checked=${this._config.show?.child_lock === true}
                .configValue=${'show.child_lock'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield label="Show Buzzer">
              <ha-switch
                .checked=${this._config.show?.buzzer === true}
                .configValue=${'show.buzzer'}
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
      }

      .section {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .section-header {
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-text-color);
        border-bottom: 1px solid var(--divider-color);
        padding-bottom: 8px;
      }

      .row {
        display: flex;
        align-items: center;
        padding: 0 16px;
      }

      ha-textfield {
        width: 100%;
      }

      ha-select {
        width: 100%;
      }

      ha-formfield {
        width: 100%;
        --mdc-typography-body2-font-size: 14px;
      }
    `;
  }
}
