import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, fireEvent, LovelaceCardEditor } from 'custom-card-helpers';
import { AirPurifierCardConfig } from './types';
import { localize } from './localize';

if (!customElements.get('ha-air-purifier-card-editor')) {
  @customElement('ha-air-purifier-card-editor')
  export class AirPurifierCardEditor extends LitElement implements LovelaceCardEditor {
    @property({ attribute: false }) public hass!: HomeAssistant;
    @state() private _config!: AirPurifierCardConfig;
    @state() private _helpers?: any;
    private _initialized = false;

    public setConfig(config: AirPurifierCardConfig): void {
      this._config = config;

      this.loadCardHelpers();
    }

    protected override shouldUpdate(): boolean {
      if (!this._initialized) {
        this._initialize();
      }

      return true;
    }

    private async loadCardHelpers(): Promise<void> {
      this._helpers = await (window as any).loadCardHelpers();
    }

    private _initialize(): void {
      if (this.hass === undefined) return;
      if (this._config === undefined) return;
      if (this._helpers === undefined) return;

      this._initialized = true;
    }

    private _valueChanged(ev: CustomEvent): void {
      const target = ev.target as any;
      const configValue = target.configValue as keyof AirPurifierCardConfig;

      if (!configValue) {
        return;
      }

      const newConfig = {
        ...this._config,
        [configValue]: target.value,
      };

      if (configValue === 'show') {
        const show = target.checked
          ? { ...this._config.show, [target.id]: true }
          : { ...this._config.show, [target.id]: false };
        newConfig.show = show;
      }

      fireEvent(this, 'config-changed', { config: newConfig });
    }

    protected override render() {
      if (!this.hass || !this._config) {
        return html``;
      }

      const entities = Object.keys(this.hass.states).filter(
        (eid) => eid.split('.')[0] === 'fan',
      );

      return html`
        <div class="card-config">
          <div class="row">
            <ha-select
              .label=${localize('editor.entity')}
              .value=${this._config.entity}
              .configValue=${'entity'}
              @selected=${this._valueChanged}
              @closed=${(ev: Event) => ev.stopPropagation()}
              .required=${true}
            >
              ${entities.map((entity) => {
                return html`
                  <mwc-list-item .value=${entity}>
                    ${entity}
                  </mwc-list-item>
                `;
              })}
            </ha-select>
          </div>

          <div class="row">
            <ha-textfield
              .label=${localize('editor.name')}
              .value=${this._config.name || ''}
              .configValue=${'name'}
              @input=${this._valueChanged}
            ></ha-textfield>
          </div>

          <div class="row">
            <ha-formfield .label=${localize('editor.show_name')}>
              <ha-switch
                .id=${'name'}
                .checked=${this._config.show?.name !== false}
                .configValue=${'show'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield .label=${localize('editor.show_state')}>
              <ha-switch
                .id=${'state'}
                .checked=${this._config.show?.state !== false}
                .configValue=${'show'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield .label=${localize('editor.show_temperature')}>
              <ha-switch
                .id=${'temperature'}
                .checked=${this._config.show?.temperature !== false}
                .configValue=${'show'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield .label=${localize('editor.show_humidity')}>
              <ha-switch
                .id=${'humidity'}
                .checked=${this._config.show?.humidity !== false}
                .configValue=${'show'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield .label=${localize('editor.show_speed')}>
              <ha-switch
                .id=${'speed'}
                .checked=${this._config.show?.speed !== false}
                .configValue=${'show'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield .label=${localize('editor.show_filter_life')}>
              <ha-switch
                .id=${'filter_life'}
                .checked=${this._config.show?.filter_life === true}
                .configValue=${'show'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield .label=${localize('editor.show_light')}>
              <ha-switch
                .id=${'light'}
                .checked=${this._config.show?.light === true}
                .configValue=${'show'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield .label=${localize('editor.show_child_lock')}>
              <ha-switch
                .id=${'child_lock'}
                .checked=${this._config.show?.child_lock === true}
                .configValue=${'show'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield .label=${localize('editor.show_buzzer')}>
              <ha-switch
                .id=${'buzzer'}
                .checked=${this._config.show?.buzzer === true}
                .configValue=${'show'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield .label=${localize('editor.compact_view')}>
              <ha-switch
                .checked=${this._config.compact_view === true}
                .configValue=${'compact_view'}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>
        </div>
      `;
    }

    static override get styles() {
      return css`
        .card-config {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .row {
          display: flex;
          align-items: center;
          padding: 8px 0;
        }

        ha-select,
        ha-textfield {
          width: 100%;
        }

        ha-formfield {
          padding-right: 16px;
          width: 100%;
        }
      `;
    }
  }
}
