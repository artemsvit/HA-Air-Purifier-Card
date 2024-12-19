import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';

@customElement('ha-air-purifier-card-editor')
export class HaAirPurifierCardEditor extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @property({ attribute: false }) private _config?: any;

  public setConfig(config: any): void {
    this._config = config;
  }

  override protected render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    const entities = Object.keys(this.hass.states).filter(eid => eid.substr(0, 4) === 'fan.');

    return html`
      <div class="card-config">
        <div class="option">
          <ha-select
            label="Entity (Required)"
            .value=${this._config.entity}
            @selected=${this._valueChanged}
            @closed=${(ev: Event) => ev.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
          >
            ${entities.map(entity => html`
              <mwc-list-item .value=${entity}>${entity}</mwc-list-item>
            `)}
          </ha-select>
        </div>

        <div class="option">
          <ha-textfield
            label="Name (Optional)"
            .value=${this._config.name || ''}
            .configValue=${'name'}
            @input=${this._valueChanged}
          ></ha-textfield>
        </div>

        <div class="option">
          <ha-formfield label="Show Name">
            <ha-switch
              .checked=${this._config.show_name !== false}
              .configValue=${'show_name'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="option">
          <ha-formfield label="Show State">
            <ha-switch
              .checked=${this._config.show_state !== false}
              .configValue=${'show_state'}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="option">
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
    if (target.configValue) {
      if (target.value === '') {
        const tmpConfig = { ...this._config };
        delete tmpConfig[target.configValue];
        this._config = tmpConfig;
      } else {
        this._config = {
          ...this._config,
          [target.configValue]: target.checked !== undefined ? target.checked : target.value,
        };
      }
    }
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this._config } }));
  }

  override static get styles() {
    return css`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: 12px;
      }
      ha-select {
        width: 100%;
      }
    `;
  }
}
