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

    const entities = Object.keys(this.hass.states).filter(
      (eid) => eid.substr(0, 4) === 'fan.'
    );

    return html`
      <div class="card-config">
        <div class="basic-config">
          <ha-textfield
            label="Name"
            .value=${this._config.name || ''}
            .configValue=${'name'}
            @input=${this._valueChanged}
          ></ha-textfield>
          
          <ha-select
            label="Entity"
            .value=${this._config.entity}
            .configValue=${'entity'}
            @selected=${this._valueChanged}
            required
          >
            ${entities.map((entity) => {
              return html`<mwc-list-item .value=${entity}>${entity}</mwc-list-item>`;
            })}
          </ha-select>
        </div>

        <div class="section-title">Display Options</div>
        <div class="display-options">
          <ha-formfield label="Show Animation">
            <ha-switch
              .checked=${this._config.show_animation ?? true}
              .configValue=${'show_animation'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Speed">
            <ha-switch
              .checked=${this._config.show_speed ?? true}
              .configValue=${'show_speed'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Humidity">
            <ha-switch
              .checked=${this._config.show_humidity ?? true}
              .configValue=${'show_humidity'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Temperature">
            <ha-switch
              .checked=${this._config.show_temperature ?? true}
              .configValue=${'show_temperature'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Filter Life">
            <ha-switch
              .checked=${this._config.show_filter_life ?? false}
              .configValue=${'show_filter_life'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="section-title">Control Options</div>
        <div class="control-options">
          <ha-formfield label="Show Light Control">
            <ha-switch
              .checked=${this._config.show_light_control ?? false}
              .configValue=${'show_light_control'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Child Lock">
            <ha-switch
              .checked=${this._config.show_child_lock ?? false}
              .configValue=${'show_child_lock'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Buzzer">
            <ha-switch
              .checked=${this._config.show_buzzer ?? false}
              .configValue=${'show_buzzer'}
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

      .basic-config {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .section-title {
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-text-color);
        margin-top: 8px;
      }

      .display-options,
      .control-options {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 8px;
      }

      ha-textfield {
        width: 100%;
      }

      ha-select {
        width: 100%;
      }

      ha-formfield {
        padding: 8px;
      }
    `;
  }
}
