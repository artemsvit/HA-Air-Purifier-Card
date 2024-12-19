import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, fireEvent } from 'custom-card-helpers';
import type { AirPurifierCardConfig } from './ha-air-purifier-card';

interface ExtendedHTMLElement extends HTMLElement {
  configValue?: string;
}

@customElement('air-purifier-card-editor')
export class AirPurifierCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: AirPurifierCardConfig;

  public setConfig(config: AirPurifierCardConfig): void {
    this._config = config;
  }

  private _valueChanged(ev: CustomEvent): void {
    const target = ev.target as ExtendedHTMLElement;
    if (!target) return;

    const value = (target as any).value;
    const configValue = target.configValue;
    if (!configValue) return;

    if (configValue.includes('.')) {
      const [object, key] = configValue.split('.');
      this._config = {
        ...this._config,
        [object]: {
          ...(this._config[object as keyof AirPurifierCardConfig] || {}),
          [key]: target.hasAttribute('checked') ? (target as any).checked : value,
        },
      };
    } else {
      this._config = {
        ...this._config,
        [configValue]: target.hasAttribute('checked') ? (target as any).checked : value,
      };
    }

    fireEvent(this, 'config-changed', { config: this._config });
  }

  protected override render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    const entities = Object.keys(this.hass.states).filter(
      (eid) => eid.split('.')[0] === 'fan'
    );

    return html`
      <div class="card-config">
        <div class="values">
          <div class="row">
            <ha-select
              label="Entity"
              .value=${this._config.entity}
              .configValue=${'entity'}
              @change=${this._valueChanged}
              required
            >
              ${entities.map((entity) => html`
                <mwc-list-item .value=${entity}>${entity}</mwc-list-item>
              `)}
            </ha-select>
          </div>

          <div class="row">
            <ha-textfield
              label="Name"
              .value=${this._config.name || ''}
              .configValue=${'name'}
              @input=${this._valueChanged}
            ></ha-textfield>
          </div>

          <div class="row">
            <div class="checkbox-group">
              <ha-formfield label="Show Name">
                <ha-switch
                  .checked=${this._config.show?.name !== false}
                  .configValue=${'show.name'}
                  @change=${this._valueChanged}
                ></ha-switch>
              </ha-formfield>

              <ha-formfield label="Show State">
                <ha-switch
                  .checked=${this._config.show?.state !== false}
                  .configValue=${'show.state'}
                  @change=${this._valueChanged}
                ></ha-switch>
              </ha-formfield>

              <ha-formfield label="Show Temperature">
                <ha-switch
                  .checked=${this._config.show?.temperature !== false}
                  .configValue=${'show.temperature'}
                  @change=${this._valueChanged}
                ></ha-switch>
              </ha-formfield>

              <ha-formfield label="Show Humidity">
                <ha-switch
                  .checked=${this._config.show?.humidity !== false}
                  .configValue=${'show.humidity'}
                  @change=${this._valueChanged}
                ></ha-switch>
              </ha-formfield>

              <ha-formfield label="Show Speed">
                <ha-switch
                  .checked=${this._config.show?.speed !== false}
                  .configValue=${'show.speed'}
                  @change=${this._valueChanged}
                ></ha-switch>
              </ha-formfield>

              <ha-formfield label="Show Filter Life">
                <ha-switch
                  .checked=${this._config.show?.filter_life !== false}
                  .configValue=${'show.filter_life'}
                  @change=${this._valueChanged}
                ></ha-switch>
              </ha-formfield>

              <ha-formfield label="Show Light">
                <ha-switch
                  .checked=${this._config.show?.light !== false}
                  .configValue=${'show.light'}
                  @change=${this._valueChanged}
                ></ha-switch>
              </ha-formfield>

              <ha-formfield label="Show Child Lock">
                <ha-switch
                  .checked=${this._config.show?.child_lock !== false}
                  .configValue=${'show.child_lock'}
                  @change=${this._valueChanged}
                ></ha-switch>
              </ha-formfield>

              <ha-formfield label="Show Buzzer">
                <ha-switch
                  .checked=${this._config.show?.buzzer !== false}
                  .configValue=${'show.buzzer'}
                  @change=${this._valueChanged}
                ></ha-switch>
              </ha-formfield>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static override get styles() {
    return css`
      .values {
        padding: 16px;
      }
      .row {
        margin-bottom: 16px;
      }
      .checkbox-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 8px;
      }
      ha-select {
        width: 100%;
      }
      ha-textfield {
        width: 100%;
      }
    `;
  }
}
