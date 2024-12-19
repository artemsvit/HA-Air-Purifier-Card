import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant, fireEvent, hasConfigOrEntityChanged } from 'custom-card-helpers';
import { mdiPower, mdiSpeedometer, mdiWaterPercent, mdiThermometer, mdiFilterOutline } from '@mdi/js';
import './editor';

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'ha-air-purifier-card',
  name: 'Xiaomi Air Purifier Card',
  description: 'A beautiful card for Xiaomi Air Purifier',
});

console.info(
  '%c XIAOMI-AIR-PURIFIER-CARD %c 1.0.3 ',
  'color: white; background: #555555; font-weight: 700;',
  'color: white; background: #000000; font-weight: 700;',
);

interface Config {
  type: string;
  entity: string;
  name?: string;
  show_name?: boolean;
  show_state?: boolean;
  show_toolbar?: boolean;
}

@customElement('ha-air-purifier-card')
export class HaAirPurifierCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) private config!: Config;

  public static getConfigElement() {
    return document.createElement('ha-air-purifier-card-editor');
  }

  public static getStubConfig(): object {
    return {
      type: 'custom:ha-air-purifier-card',
      entity: 'fan.xiaomi_air_purifier',
      name: 'Air Purifier',
      show_name: true,
      show_state: true,
      show_toolbar: true,
    };
  }

  public setConfig(config: Config): void {
    if (!config.entity || config.entity.split('.')[0] !== 'fan') {
      throw new Error('Specify an entity from within the fan domain.');
    }

    this.config = {
      show_name: true,
      show_state: true,
      show_toolbar: true,
      ...config,
    };
  }

  protected shouldUpdate(changedProps: Map<string, unknown>): boolean {
    return hasConfigOrEntityChanged(this, changedProps);
  }

  private _handleAction(e: MouseEvent): void {
    if (this.hass && this.config) {
      const entity = this.hass.states[this.config.entity];
      const service = entity.state === 'on' ? 'turn_off' : 'turn_on';

      this.hass.callService('fan', service, {
        entity_id: this.config.entity,
      });
    }
  }

  private _handleSpeedChange(speed: string): void {
    if (this.hass && this.config) {
      this.hass.callService('fan', 'set_preset_mode', {
        entity_id: this.config.entity,
        preset_mode: speed.toLowerCase(),
      });
    }
  }

  private _handleLightToggle(e: CustomEvent): void {
    if (this.hass && this.config) {
      const entity = this.hass.states[this.config.entity];
      const lightEntity = `light.${entity.entity_id.split('.')[1]}_light`;
      
      this.hass.callService('light', e.detail.checked ? 'turn_on' : 'turn_off', {
        entity_id: lightEntity,
      });
    }
  }

  protected render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    const entity = this.hass.states[this.config.entity];
    if (!entity) {
      return html`
        <ha-card>
          <div class="warning">
            Entity not found: ${this.config.entity}
          </div>
        </ha-card>
      `;
    }

    const name = this.config.name || entity.attributes.friendly_name;
    const state = entity.state;
    const pm25 = entity.attributes.pm25 || 0;
    const speed = entity.attributes.preset_mode || 'Off';
    const humidity = entity.attributes.humidity || 0;
    const temperature = entity.attributes.temperature || 0;
    const filterLife = entity.attributes.filter_life_remaining || 0;

    return html`
      <ha-card>
        <div class="card-content">
          ${this.config.show_name ? html`
            <div class="card-header">
              <div class="name">${name}</div>
              ${this.config.show_state ? html`
                <div class="state">${state}</div>
              ` : ''}
            </div>
          ` : ''}

          <div class="pm25-display ${state === 'on' ? 'active' : ''}">
            <div class="pm25-value">${pm25}</div>
            <div class="pm25-unit">PM2.5</div>
          </div>

          <div class="controls">
            <mwc-button
              class="power-button ${state === 'on' ? 'on' : ''}"
              @click=${this._handleAction}
            >
              <ha-svg-icon path=${mdiPower}></ha-svg-icon>
            </mwc-button>

            <div class="speed-buttons">
              ${['Silent', 'Auto', 'Favorite'].map(mode => html`
                <mwc-button
                  class="${speed.toLowerCase() === mode.toLowerCase() ? 'active' : ''}"
                  @click=${() => this._handleSpeedChange(mode)}
                >
                  ${mode}
                </mwc-button>
              `)}
            </div>

            <div class="info-items">
              <div class="info-item">
                <ha-svg-icon path=${mdiSpeedometer}></ha-svg-icon>
                <span>${speed}</span>
              </div>
              <div class="info-item">
                <ha-svg-icon path=${mdiWaterPercent}></ha-svg-icon>
                <span>${humidity}%</span>
              </div>
              <div class="info-item">
                <ha-svg-icon path=${mdiThermometer}></ha-svg-icon>
                <span>${temperature}°C</span>
              </div>
              <div class="info-item">
                <ha-svg-icon path=${mdiFilterOutline}></ha-svg-icon>
                <span>${filterLife}%</span>
              </div>
            </div>

            ${this.config.show_toolbar ? html`
              <div class="toolbar">
                <mwc-formfield label="Indicator Light">
                  <mwc-switch
                    @change=${this._handleLightToggle}
                    .checked=${this.hass.states[`light.${entity.entity_id.split('.')[1]}_light`]?.state === 'on'}
                  ></mwc-switch>
                </mwc-formfield>
              </div>
            ` : ''}
          </div>
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return css`
      :host {
        --mdc-theme-primary: var(--primary-color);
        --mdc-switch-selected-track-color: rgba(var(--rgb-primary-color), 0.25);
        --mdc-switch-selected-handle-color: var(--primary-color);
        --mdc-switch-unselected-track-color: rgba(var(--rgb-primary-color), 0.05);
        --mdc-switch-unselected-handle-color: var(--primary-color);
        --mdc-theme-surface: var(--card-background-color);
        --mdc-theme-on-surface: var(--primary-text-color);
        --mdc-typography-button-font-size: 14px;
        --mdc-typography-button-font-weight: 500;
        --mdc-typography-button-letter-spacing: 0.1em;
      }

      ha-card {
        background: var(--card-background-color);
        border-radius: var(--card-radius, 12px);
        box-shadow: var(--ha-card-box-shadow, none);
        color: var(--primary-text-color);
        padding: 16px;
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }

      .name {
        font-size: 24px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .state {
        font-size: 14px;
        color: var(--secondary-text-color);
        text-transform: capitalize;
      }

      .pm25-display {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 24px 0;
        padding: 24px;
        border-radius: var(--control-radius, 12px);
        background: var(--secondary-background-color);
        transition: all 0.3s ease;
      }

      .pm25-display.active {
        animation: glow 1.5s ease-in-out infinite alternate;
      }

      .pm25-value {
        font-size: 48px;
        font-weight: 500;
        color: var(--primary-color);
      }

      .pm25-unit {
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }

      .controls {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .power-button {
        --mdc-theme-primary: var(--primary-color);
        width: 100%;
      }

      .power-button.on {
        background-color: var(--primary-color);
        color: white;
      }

      .speed-buttons {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
      }

      .speed-buttons mwc-button {
        --mdc-theme-primary: var(--primary-color);
        width: 100%;
      }

      .speed-buttons mwc-button.active {
        background-color: var(--primary-color);
        color: white;
      }

      .info-items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        margin-top: 16px;
      }

      .info-item {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--secondary-text-color);
      }

      .toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;
        padding-top: 16px;
        border-top: 1px solid var(--divider-color);
      }

      .warning {
        display: block;
        color: var(--error-color);
        padding: 16px;
      }

      @keyframes glow {
        from {
          box-shadow: 0 0 5px var(--primary-color),
                      0 0 10px var(--primary-color),
                      0 0 15px var(--primary-color);
        }
        to {
          box-shadow: 0 0 10px var(--primary-color),
                      0 0 20px var(--primary-color),
                      0 0 30px var(--primary-color);
        }
      }
    `;
  }
}
