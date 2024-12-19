import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { mdiPower, mdiSpeedometer, mdiWaterPercent, mdiThermometer, mdiFilterOutline } from '@mdi/js';
import './editor';

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'ha-air-purifier-card',
  name: 'Xiaomi Air Purifier Card',
  description: 'A card for Xiaomi Air Purifier',
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
  @state() private config!: Config;

  public static getConfigElement() {
    return document.createElement('ha-air-purifier-card-editor');
  }

  public static getStubConfig(): object {
    return {
      type: 'custom:ha-air-purifier-card',
      entity: 'fan.xiaomi_air_purifier',
      name: 'Air Purifier',
    };
  }

  public setConfig(config: Config): void {
    if (!config.entity || config.entity.split('.')[0] !== 'fan') {
      throw new Error('Specify an entity from within the fan domain.');
    }

    this.config = {
      name: 'Air Purifier',
      show_name: true,
      show_state: true,
      show_toolbar: true,
      ...config,
    };
  }

  override protected shouldUpdate(changedProps: Map<string, unknown>): boolean {
    if (!this.config) {
      return false;
    }

    return true;
  }

  private _handlePowerClick(): void {
    this.hass.callService('fan', 'toggle', {
      entity_id: this.config.entity,
    });
  }

  private _handleLightClick(): void {
    this.hass.callService('light', 'toggle', {
      entity_id: this.config.entity.replace('fan', 'light'),
    });
  }

  override protected render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    const stateObj = this.hass.states[this.config.entity];

    if (!stateObj) {
      return html`
        <ha-card>
          <div class="warning">
            Entity not available: ${this.config.entity}
          </div>
        </ha-card>
      `;
    }

    const name = this.config.name || stateObj.attributes.friendly_name;
    const state = stateObj.state;
    const speed = stateObj.attributes.speed || 'off';
    const humidity = stateObj.attributes.humidity || 0;
    const temperature = stateObj.attributes.temperature || 0;
    const filterLife = stateObj.attributes.filter_life_remaining || 0;
    const aqi = stateObj.attributes.aqi || 0;

    return html`
      <ha-card>
        <div class="card-content">
          ${this.config.show_name ? html`
            <div class="name">
              ${name}
            </div>
          ` : ''}
          
          <div class="state">
            <div class="state-icon" @click=${this._handlePowerClick}>
              <ha-icon
                class="${state === 'on' ? 'active' : ''}"
                .icon=${mdiPower}
              ></ha-icon>
            </div>
            
            ${this.config.show_state ? html`
              <div class="state-info">
                <div class="aqi ${state === 'on' ? 'active' : ''}">
                  ${aqi}
                  <span class="unit">AQI</span>
                </div>
              </div>
            ` : ''}
          </div>

          ${this.config.show_toolbar ? html`
            <div class="toolbar">
              <div class="info-item">
                <ha-icon .path=${mdiSpeedometer}></ha-icon>
                <span>${speed}</span>
              </div>
              <div class="info-item">
                <ha-icon .path=${mdiWaterPercent}></ha-icon>
                <span>${humidity}%</span>
              </div>
              <div class="info-item">
                <ha-icon .path=${mdiThermometer}></ha-icon>
                <span>${temperature}°C</span>
              </div>
              <div class="info-item">
                <ha-icon .path=${mdiFilterOutline}></ha-icon>
                <span>${filterLife}%</span>
              </div>
            </div>
          ` : ''}
        </div>
      </ha-card>
    `;
  }

  override static get styles() {
    return css`
      :host {
        --mdc-icon-size: 24px;
      }
      ha-card {
        height: 100%;
        padding: 16px;
        display: flex;
        flex-direction: column;
      }
      .card-content {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .warning {
        display: block;
        color: black;
        background-color: #fce588;
        padding: 8px;
      }
      .name {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 16px;
      }
      .state {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
      }
      .state-icon {
        cursor: pointer;
        margin-right: 16px;
      }
      .state-icon ha-icon {
        width: 48px;
        height: 48px;
        transition: color 0.3s ease-in-out;
      }
      .state-icon ha-icon.active {
        color: var(--primary-color);
      }
      .state-info {
        text-align: center;
      }
      .aqi {
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 1.2;
        transition: color 0.3s ease-in-out;
      }
      .aqi.active {
        color: var(--primary-color);
      }
      .unit {
        font-size: 1rem;
        font-weight: 400;
        opacity: 0.8;
      }
      .toolbar {
        display: flex;
        justify-content: space-between;
        padding-top: 16px;
        border-top: 1px solid var(--divider-color);
      }
      .info-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 0;
      }
      .info-item ha-icon {
        margin-bottom: 4px;
        color: var(--secondary-text-color);
      }
      .info-item span {
        font-size: 0.9rem;
        color: var(--primary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `;
  }
}
