import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant, hasConfigOrEntityChanged } from 'custom-card-helpers';
import { mdiPower, mdiLightbulb, mdiFan, mdiSpeedometer, mdiWaterPercent, mdiThermometer, mdiAirFilter, mdiLockOutline, mdiVolumeHigh } from '@mdi/js';
import './editor';

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'ha-air-purifier-card',
  name: 'Xiaomi Air Purifier Card',
  description: 'A beautiful card for Xiaomi Air Purifier MB3',
});

interface AirPurifierCardConfig extends LovelaceCardConfig {
  type: string;
  entity: string;
  name?: string;
  theme?: string;
  show?: {
    name?: boolean;
    state?: boolean;
    temperature?: boolean;
    humidity?: boolean;
    speed?: boolean;
    filter_life?: boolean;
    light?: boolean;
    child_lock?: boolean;
    buzzer?: boolean;
  };
}

const DEFAULT_CONFIG: Partial<AirPurifierCardConfig> = {
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
};

const PRESET_MODES = {
  Auto: 'Auto',
  Sleep: 'Sleep',
  Favorite: 'Favorite',
  None: 'None'
} as const;

const SPEED_LEVELS = {
  Silent: { name: 'Silent', percentage: 25, rpm: '300-400' },
  Low: { name: 'Low', percentage: 50, rpm: '400-500' },
  Medium: { name: 'Medium', percentage: 75, rpm: '500-600' },
  High: { name: 'High', percentage: 100, rpm: '600-800' }
} as const;

function getPM25Color(value: number): string {
  if (value <= 12) return 'var(--success-color, #43a047)';
  if (value <= 35.4) return 'var(--warning-color, #ffa600)';
  if (value <= 55.4) return 'var(--warning-color, #ffa600)';
  if (value <= 150.4) return 'var(--error-color, #db4437)';
  if (value <= 250.4) return 'var(--error-color, #db4437)';
  return 'var(--error-color, #db4437)';
}

@customElement('ha-air-purifier-card')
export class HaAirPurifierCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) private _config!: AirPurifierCardConfig;

  public static getConfigElement() {
    return document.createElement('ha-air-purifier-card-editor');
  }

  public static getStubConfig(): object {
    return {
      type: 'custom:ha-air-purifier-card',
      entity: 'fan.xiaomi_air_purifier',
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
    };
  }

  public setConfig(config: AirPurifierCardConfig): void {
    if (!config.entity || config.entity.split('.')[0] !== 'fan') {
      throw new Error('Specify an entity from within the fan domain.');
    }

    this._config = {
      ...DEFAULT_CONFIG,
      ...config,
      show: {
        ...DEFAULT_CONFIG.show,
        ...(config.show || {}),
      },
    };
  }

  protected shouldUpdate(changedProps: Map<string, unknown>): boolean {
    if (changedProps.has('_config')) {
      return true;
    }

    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  private _handlePowerClick(): void {
    if (!this.hass || !this._config) return;
    
    const fanEntity = this.hass.states[this._config.entity];
    if (!fanEntity) return;

    this.hass.callService('fan', fanEntity.state === 'on' ? 'turn_off' : 'turn_on', {
      entity_id: this._config.entity,
    });
  }

  private _handleSpeedClick(speed: keyof typeof SPEED_LEVELS): void {
    if (!this.hass || !this._config) return;

    this.hass.callService('fan', 'set_percentage', {
      entity_id: this._config.entity,
      percentage: SPEED_LEVELS[speed].percentage,
    });
  }

  private _handleModeChange(ev: CustomEvent): void {
    if (!this.hass || !this._config) return;

    const mode = (ev.target as any).value;
    if (!mode) return;

    this.hass.callService('fan', 'set_preset_mode', {
      entity_id: this._config.entity,
      preset_mode: mode,
    });
  }

  private _handleChildLockToggle(): void {
    if (!this.hass || !this._config) return;

    const entityId = this._config.entity.replace('fan', 'switch').replace('air_purifier', 'child_lock');
    const lockEntity = this.hass.states[entityId];
    
    if (lockEntity) {
      this.hass.callService('switch', lockEntity.state === 'on' ? 'turn_off' : 'turn_on', {
        entity_id: entityId,
      });
    }
  }

  private _handleLightToggle(): void {
    if (!this.hass || !this._config) return;

    const entityId = this._config.entity.replace('fan', 'light').replace('air_purifier', 'led');
    const lightEntity = this.hass.states[entityId];
    
    if (lightEntity) {
      this.hass.callService('light', lightEntity.state === 'on' ? 'turn_off' : 'turn_on', {
        entity_id: entityId,
      });
    }
  }

  private _handleBuzzerToggle(): void {
    if (!this.hass || !this._config) return;

    const entityId = this._config.entity.replace('fan', 'switch').replace('air_purifier', 'buzzer');
    const buzzerEntity = this.hass.states[entityId];
    
    if (buzzerEntity) {
      this.hass.callService('switch', buzzerEntity.state === 'on' ? 'turn_off' : 'turn_on', {
        entity_id: entityId,
      });
    }
  }

  private _getSpeedLevel(motorSpeed: number): string {
    const speedLevel = Object.entries(SPEED_LEVELS).find(
      ([_, value]) => motorSpeed <= value.percentage
    )?.[0] || 'High';
    return speedLevel;
  }

  protected render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    const stateObj = this.hass.states[this._config.entity];

    if (!stateObj) {
      return html`
        <hui-warning>
          Entity not found: ${this._config.entity}
        </hui-warning>
      `;
    }

    const name = this._config.name || stateObj.attributes.friendly_name || '';
    const state = stateObj.state;
    const temperature = stateObj.attributes.temperature || 0;
    const humidity = stateObj.attributes.humidity || 0;
    const motorSpeed = stateObj.attributes.motor_speed || 0;
    const filterLife = stateObj.attributes.filter_life_remaining || 0;
    const pm25 = stateObj.attributes.pm25 || 0;
    const currentMode = stateObj.attributes.preset_mode || 'none';
    const speedLevel = this._getSpeedLevel(motorSpeed);
    const isChildLocked = stateObj.attributes.child_lock === 'on';
    const isLightOn = stateObj.attributes.led === 'on';
    const isBuzzerOn = stateObj.attributes.buzzer === 'on';

    return html`
      <ha-card
        class="air-purifier-card ${state === 'on' ? 'active' : ''}"
        .header=${this._config.show?.name !== false ? name : undefined}
      >
        <div class="content">
          <div class="circle-container">
            <div class="circle">
              <div class="circle-info">
                <span class="pm25-value">${pm25}</span>
                <span class="pm25-label">PM2.5</span>
              </div>
              ${state === 'on' && this._config.show?.state !== false ? html`
                <div class="circle-animation"></div>
              ` : ''}
            </div>
          </div>

          ${state === 'on' ? html`
            <div class="controls">
              <div class="mode-select">
                <ha-select
                  .value=${currentMode}
                  @selected=${this._handleModeChange}
                  class="mode-dropdown"
                >
                  ${Object.entries(PRESET_MODES).map(([mode, value]) => html`
                    <mwc-list-item .value=${value}>${mode}</mwc-list-item>
                  `)}
                </ha-select>
              </div>

              <div class="button-row">
                <ha-icon-button
                  class="action-button"
                  .path=${mdiPower}
                  @click=${this._handlePowerClick}
                  .label=${'Power'}
                ></ha-icon-button>

                ${Object.entries(SPEED_LEVELS).map(([speed, data]) => html`
                  <ha-icon-button
                    class="action-button ${speedLevel === speed ? 'active' : ''}"
                    .path=${mdiFan}
                    @click=${() => this._handleSpeedClick(speed as keyof typeof SPEED_LEVELS)}
                    .label=${data.name}
                  ></ha-icon-button>
                `)}

                ${this._config.show?.light !== false ? html`
                  <ha-icon-button
                    class="action-button ${isLightOn ? 'active' : ''}"
                    .path=${mdiLightbulb}
                    @click=${this._handleLightToggle}
                    .label=${'Light'}
                  ></ha-icon-button>
                ` : ''}

                ${this._config.show?.child_lock !== false ? html`
                  <ha-icon-button
                    class="action-button ${isChildLocked ? 'active' : ''}"
                    .path=${mdiLockOutline}
                    @click=${this._handleChildLockToggle}
                    .label=${'Child Lock'}
                  ></ha-icon-button>
                ` : ''}

                ${this._config.show?.buzzer !== false ? html`
                  <ha-icon-button
                    class="action-button ${isBuzzerOn ? 'active' : ''}"
                    .path=${mdiVolumeHigh}
                    @click=${this._handleBuzzerToggle}
                    .label=${'Buzzer'}
                  ></ha-icon-button>
                ` : ''}
              </div>

              <div class="info-row">
                ${this._config.show?.temperature !== false ? html`
                  <div class="info-item">
                    <ha-svg-icon .path=${mdiThermometer}></ha-svg-icon>
                    <span>${temperature}°C</span>
                  </div>
                ` : ''}

                ${this._config.show?.humidity !== false ? html`
                  <div class="info-item">
                    <ha-svg-icon .path=${mdiWaterPercent}></ha-svg-icon>
                    <span>${humidity}%</span>
                  </div>
                ` : ''}

                ${this._config.show?.speed !== false ? html`
                  <div class="info-item">
                    <ha-svg-icon .path=${mdiFan}></ha-svg-icon>
                    <span>${motorSpeed} RPM</span>
                  </div>
                ` : ''}

                ${this._config.show?.filter_life !== false ? html`
                  <div class="info-item">
                    <ha-svg-icon .path=${mdiAirFilter}></ha-svg-icon>
                    <span>${filterLife}%</span>
                  </div>
                ` : ''}
              </div>
            </div>
          ` : ''}
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return css`
      :host {
        --circle-size: 150px;
        --circle-background: rgba(var(--rgb-primary-color), 0.1);
        --circle-active-background: rgba(var(--rgb-primary-color), 0.2);
        --button-active-background: rgba(var(--rgb-primary-color), 0.2);
        --circle-border-size: 4px;
      }

      .air-purifier-card {
        background: var(--ha-card-background, var(--card-background-color, white));
        border-radius: var(--ha-card-border-radius, 12px);
        box-shadow: var(--ha-card-box-shadow, none);
        color: var(--primary-text-color);
        padding: 16px;
        width: 100%;
      }

      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .circle-container {
        position: relative;
        width: var(--circle-size);
        height: var(--circle-size);
        margin: 16px 0;
      }

      .circle {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: var(--circle-background);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .active .circle {
        background: var(--circle-active-background);
      }

      .circle-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1;
      }

      .pm25-value {
        font-size: 2.5em;
        font-weight: bold;
        line-height: 1;
      }

      .pm25-label {
        font-size: 0.9em;
        opacity: 0.8;
        margin-top: 4px;
      }

      .circle-animation {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: var(--circle-border-size) solid var(--primary-color);
        border-radius: 50%;
        animation: rotate 2s linear infinite;
      }

      .controls {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .mode-select {
        width: 100%;
      }

      .mode-dropdown {
        width: 100%;
        --mdc-theme-primary: var(--primary-color);
        --mdc-select-fill-color: var(--secondary-background-color);
        border-radius: var(--ha-card-border-radius, 12px);
      }

      .button-row {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 8px;
        padding: 8px;
        background: var(--secondary-background-color);
        border-radius: var(--ha-card-border-radius, 12px);
      }

      .action-button {
        --mdc-icon-button-size: 48px;
        color: var(--primary-text-color);
        transition: background-color 0.2s;
        border-radius: 50%;
      }

      .action-button.active {
        background: var(--button-active-background);
        color: var(--primary-color);
      }

      .info-row {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 16px;
        width: 100%;
        padding: 8px;
        background: var(--secondary-background-color);
        border-radius: var(--ha-card-border-radius, 12px);
      }

      .info-item {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--primary-text-color);
      }

      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `;
  }
}
