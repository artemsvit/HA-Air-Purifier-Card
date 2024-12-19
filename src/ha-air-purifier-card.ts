import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant, hasConfigOrEntityChanged } from 'custom-card-helpers';
import { mdiPower, mdiLightbulb, mdiFan, mdiSpeedometer, mdiWaterPercent, mdiThermometer, mdiAirFilter, mdiLockOutline } from '@mdi/js';
import './editor';

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'ha-air-purifier-card',
  name: 'Xiaomi Air Purifier Card',
  description: 'A beautiful card for Xiaomi Air Purifier MB3',
});

interface Config {
  type: string;
  entity: string;
  name?: string;
  show_animation?: boolean;
  show_speed?: boolean;
  show_humidity?: boolean;
  show_temperature?: boolean;
  show_filter_life?: boolean;
  show_light_control?: boolean;
  show_child_lock?: boolean;
  show_buzzer?: boolean;
}

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
  @property({ attribute: false }) private config!: Config;

  public static getConfigElement() {
    return document.createElement('ha-air-purifier-card-editor');
  }

  public static getStubConfig(): object {
    return {
      type: 'custom:ha-air-purifier-card',
      entity: 'fan.xiaomi_air_purifier',
      show_animation: true,
      show_speed: true,
      show_humidity: true,
      show_temperature: true,
      show_filter_life: true,
      show_light_control: true,
      show_child_lock: true,
      show_buzzer: true,
    };
  }

  public setConfig(config: Config): void {
    if (!config.entity || config.entity.split('.')[0] !== 'fan') {
      throw new Error('Specify an entity from within the fan domain.');
    }
    this.config = {
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

  protected shouldUpdate(changedProps: Map<string, unknown>): boolean {
    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  private _handlePowerClick(): void {
    if (!this.hass || !this.config) return;
    
    const fanEntity = this.hass.states[this.config.entity];
    if (!fanEntity) return;

    this.hass.callService('fan', fanEntity.state === 'on' ? 'turn_off' : 'turn_on', {
      entity_id: this.config.entity,
    });
  }

  private _handleSpeedClick(speed: keyof typeof SPEED_LEVELS): void {
    if (!this.hass || !this.config) return;

    this.hass.callService('fan', 'set_percentage', {
      entity_id: this.config.entity,
      percentage: SPEED_LEVELS[speed].percentage,
    });
  }

  private _handleModeClick(mode: keyof typeof PRESET_MODES): void {
    if (!this.hass || !this.config) return;

    this.hass.callService('fan', 'set_preset_mode', {
      entity_id: this.config.entity,
      preset_mode: PRESET_MODES[mode],
    });
  }

  private _handleChildLockToggle(): void {
    if (!this.hass || !this.config) return;

    const entityId = this.config.entity.replace('fan', 'switch').replace('air_purifier', 'child_lock');
    const lockEntity = this.hass.states[entityId];
    
    if (lockEntity) {
      this.hass.callService('switch', lockEntity.state === 'on' ? 'turn_off' : 'turn_on', {
        entity_id: entityId,
      });
    }
  }

  private _handleLightToggle(): void {
    if (!this.hass || !this.config) return;

    const entityId = this.config.entity.replace('fan', 'light').replace('air_purifier', 'led');
    const lightEntity = this.hass.states[entityId];
    
    if (lightEntity) {
      this.hass.callService('light', lightEntity.state === 'on' ? 'turn_off' : 'turn_on', {
        entity_id: entityId,
      });
    }
  }

  private _handleBuzzerToggle(): void {
    if (!this.hass || !this.config) return;

    const entityId = this.config.entity.replace('fan', 'switch').replace('air_purifier', 'buzzer');
    const buzzerEntity = this.hass.states[entityId];
    
    if (buzzerEntity) {
      this.hass.callService('switch', buzzerEntity.state === 'on' ? 'turn_off' : 'turn_on', {
        entity_id: entityId,
      });
    }
  }

  protected render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    const fanEntity = this.hass.states[this.config.entity];
    if (!fanEntity) {
      return html`
        <ha-card>
          <div class="not-found">
            Entity not found: ${this.config.entity}
          </div>
        </ha-card>
      `;
    }

    const name = this.config.name || fanEntity.attributes.friendly_name;
    const state = fanEntity.state;
    const baseId = this.config.entity.split('.')[1];
    
    const pm25Entity = this.hass.states[`sensor.${baseId.replace('air_purifier', 'pm25')}`];
    const motorSpeedEntity = this.hass.states[`sensor.${baseId.replace('air_purifier', 'motor_speed')}`];
    const humidityEntity = this.hass.states[`sensor.${baseId.replace('air_purifier', 'relative_humidity')}`];
    const temperatureEntity = this.hass.states[`sensor.${baseId.replace('air_purifier', 'temperature')}`];
    const filterLifeEntity = this.hass.states[`sensor.${baseId.replace('air_purifier', 'filter_life_level')}`];
    const lightEntity = this.hass.states[`light.${baseId.replace('air_purifier', 'led')}`];
    const childLockEntity = this.hass.states[`switch.${baseId.replace('air_purifier', 'child_lock')}`];
    const buzzerEntity = this.hass.states[`switch.${baseId.replace('air_purifier', 'buzzer')}`];

    const pm25 = Number(pm25Entity?.state) || 0;
    const motorSpeed = motorSpeedEntity?.state || '0';
    const humidity = humidityEntity?.state || '0';
    const temperature = temperatureEntity?.state || '0';
    const filterLife = filterLifeEntity?.state || '0';
    const isLightOn = lightEntity?.state === 'on';
    const isChildLocked = childLockEntity?.state === 'on';
    const isBuzzerOn = buzzerEntity?.state === 'on';

    const currentSpeed = fanEntity.attributes.percentage || 0;
    const speedLevel = Object.entries(SPEED_LEVELS).find(
      ([_, value]) => currentSpeed <= value.percentage
    )?.[0] || 'High';

    const currentMode = fanEntity.attributes.preset_mode || 'none';
    const pm25Color = getPM25Color(pm25);

    return html`
      <ha-card>
        <div class="card-header">
          <div class="name">${name}</div>
          <ha-icon-button
            .path=${mdiPower}
            @click=${this._handlePowerClick}
            ?disabled=${!fanEntity}
            class="power-button ${state === 'on' ? 'active' : ''}"
          ></ha-icon-button>
        </div>

        <div class="content">
          <div class="pm25-section">
            <div class="pm25-circle ${state === 'on' ? 'active' : ''}" style="--pm25-color: ${pm25Color}">
              ${this.config.show_animation && state === 'on' ? html`
                <div class="pm25-animation"></div>
              ` : ''}
              <div class="value ${state !== 'on' ? 'disabled' : ''}">${pm25}</div>
              <div class="label ${state !== 'on' ? 'disabled' : ''}">PM2.5</div>
            </div>
          </div>

          ${state === 'on' ? html`
            <div class="mode-buttons">
              ${Object.entries(PRESET_MODES).map(([mode, value]) => html`
                <ha-button-toggle
                  .label=${mode}
                  ?active=${currentMode.toLowerCase() === value.toLowerCase()}
                  @click=${() => this._handleModeClick(mode as keyof typeof PRESET_MODES)}
                  class="mode-button"
                >
                  <span class="mode-label">${mode}</span>
                </ha-button-toggle>
              `)}
            </div>

            <div class="speed-buttons">
              ${Object.entries(SPEED_LEVELS).map(([speed, data]) => html`
                <ha-button-toggle
                  .label=${speed}
                  ?active=${speedLevel === speed}
                  @click=${() => this._handleSpeedClick(speed as keyof typeof SPEED_LEVELS)}
                  class="speed-button"
                >
                  <ha-svg-icon .path=${mdiFan}></ha-svg-icon>
                  <span class="speed-label">${data.name}</span>
                </ha-button-toggle>
              `)}
            </div>

            <div class="info-grid">
              ${this.config.show_temperature ? html`
                <div class="info-item">
                  <ha-svg-icon .path=${mdiThermometer}></ha-svg-icon>
                  <span class="info-value">${temperature}°C</span>
                  <span class="info-label">Temperature</span>
                </div>
              ` : ''}
              
              ${this.config.show_humidity ? html`
                <div class="info-item">
                  <ha-svg-icon .path=${mdiWaterPercent}></ha-svg-icon>
                  <span class="info-value">${humidity}%</span>
                  <span class="info-label">Humidity</span>
                </div>
              ` : ''}
              
              ${this.config.show_speed ? html`
                <div class="info-item">
                  <ha-svg-icon .path=${mdiSpeedometer}></ha-svg-icon>
                  <span class="info-value">${motorSpeed}</span>
                  <span class="info-label">RPM</span>
                </div>
              ` : ''}
              
              ${this.config.show_filter_life ? html`
                <div class="info-item">
                  <ha-svg-icon .path=${mdiAirFilter}></ha-svg-icon>
                  <span class="info-value">${filterLife}%</span>
                  <span class="info-label">Filter Life</span>
                </div>
              ` : ''}
            </div>

            <div class="control-buttons">
              ${this.config.show_child_lock ? html`
                <ha-button-toggle
                  .label=${'Child Lock'}
                  ?active=${isChildLocked}
                  @click=${this._handleChildLockToggle}
                  class="control-button"
                >
                  <ha-svg-icon .path=${mdiLockOutline}></ha-svg-icon>
                </ha-button-toggle>
              ` : ''}

              ${this.config.show_light_control ? html`
                <ha-button-toggle
                  .label=${'LED'}
                  ?active=${isLightOn}
                  @click=${this._handleLightToggle}
                  class="control-button"
                >
                  <ha-svg-icon .path=${mdiLightbulb}></ha-svg-icon>
                </ha-button-toggle>
              ` : ''}

              ${this.config.show_buzzer ? html`
                <ha-button-toggle
                  .label=${'Buzzer'}
                  ?active=${isBuzzerOn}
                  @click=${this._handleBuzzerToggle}
                  class="control-button"
                >
                  <ha-icon icon="mdi:volume-high"></ha-icon>
                </ha-button-toggle>
              ` : ''}
            </div>
          ` : ''}
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return css`
      :host {
        --card-radius: var(--ha-card-border-radius, 12px);
        --control-radius: 8px;
        --transition-duration: 0.2s;
      }

      ha-card {
        overflow: hidden;
        padding: 0;
      }

      .card-header {
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--secondary-background-color);
      }

      .name {
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .power-button {
        --mdc-icon-button-size: 48px;
        color: var(--primary-text-color);
      }

      .power-button.active {
        color: var(--primary-color);
      }

      .content {
        padding: 16px;
      }

      .pm25-section {
        text-align: center;
        margin-bottom: 24px;
      }

      .pm25-circle {
        position: relative;
        width: 140px;
        height: 140px;
        margin: 0 auto;
        border-radius: 50%;
        background: var(--secondary-background-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .pm25-animation {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 2px solid transparent;
        border-top-color: var(--pm25-color);
        animation: rotate 2s linear infinite;
      }

      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .value {
        font-size: 36px;
        font-weight: bold;
        color: var(--pm25-color);
      }

      .value.disabled {
        color: var(--disabled-text-color);
      }

      .label {
        font-size: 14px;
        color: var(--secondary-text-color);
      }

      .label.disabled {
        color: var(--disabled-text-color);
      }

      .mode-buttons {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
        margin-bottom: 16px;
        padding: 0 8px;
      }

      .mode-button {
        --ha-button-toggle-color: var(--primary-text-color);
        --ha-button-toggle-background: var(--secondary-background-color);
        --ha-button-toggle-active-color: var(--text-primary-color);
        --ha-button-toggle-active-background: var(--primary-color);
        min-height: 48px;
        width: 100%;
        border-radius: var(--control-radius);
        font-size: 14px;
      }

      .speed-buttons {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 8px;
        margin-bottom: 16px;
        padding: 0 8px;
      }

      .speed-button {
        --ha-button-toggle-color: var(--primary-text-color);
        --ha-button-toggle-background: var(--secondary-background-color);
        --ha-button-toggle-active-color: var(--text-primary-color);
        --ha-button-toggle-active-background: var(--primary-color);
        min-height: 48px;
        width: 100%;
        border-radius: var(--control-radius);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;
      }

      .speed-label {
        font-size: 12px;
      }

      .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 16px;
        margin-bottom: 16px;
        padding: 16px;
        background: var(--secondary-background-color);
        border-radius: var(--control-radius);
      }

      .info-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 4px;
      }

      .info-value {
        font-size: 20px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .info-label {
        font-size: 12px;
        color: var(--secondary-text-color);
      }

      .control-buttons {
        display: flex;
        justify-content: center;
        gap: 16px;
        padding: 0 8px;
      }

      .control-button {
        --ha-button-toggle-color: var(--secondary-text-color);
        --ha-button-toggle-background: var(--secondary-background-color);
        --ha-button-toggle-active-color: var(--text-primary-color);
        --ha-button-toggle-active-background: var(--primary-color);
        min-width: 48px;
        min-height: 48px;
        border-radius: var(--control-radius);
      }

      .not-found {
        padding: 16px;
        text-align: center;
        color: var(--error-color);
      }
    `;
  }
}
