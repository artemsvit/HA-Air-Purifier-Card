import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant, hasConfigOrEntityChanged } from 'custom-card-helpers';
import { mdiPower, mdiLightbulb, mdiFan } from '@mdi/js';
import './editor';

// This puts your card into the UI card picker dialog
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'ha-air-purifier-card',
  name: 'Xiaomi Air Purifier Card',
  description: 'A beautiful card for Xiaomi Air Purifier',
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
}

// PM2.5 thresholds based on WHO standards
const PM25_THRESHOLDS = {
  GOOD: 12,
  MODERATE: 35.4,
  UNHEALTHY_SENSITIVE: 55.4,
  UNHEALTHY: 150.4,
  VERY_UNHEALTHY: 250.4,
  HAZARDOUS: 500.4,
};

const PRESET_MODES = {
  None: 'None',
  Auto: 'Auto',
  Sleep: 'Sleep',
  Favorite: 'Favorite'
} as const;

type PresetMode = keyof typeof PRESET_MODES;

function getPM25Color(value: number): string {
  if (value <= PM25_THRESHOLDS.GOOD) return 'var(--success-color, #4CAF50)';
  if (value <= PM25_THRESHOLDS.MODERATE) return 'var(--warning-color, #FF9800)';
  if (value <= PM25_THRESHOLDS.UNHEALTHY_SENSITIVE) return 'var(--warning-color, #FF9800)';
  if (value <= PM25_THRESHOLDS.UNHEALTHY) return 'var(--error-color, #F44336)';
  if (value <= PM25_THRESHOLDS.VERY_UNHEALTHY) return 'var(--error-color, #F44336)';
  return 'var(--error-color, #F44336)';
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
      entity: 'fan.zhimi_mb3_7bb1_air_purifier',
      show_animation: true,
      show_speed: true,
      show_humidity: true,
      show_temperature: true,
      show_filter_life: true,
      show_light_control: true,
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

  private _handleSpeedClick(speed: string): void {
    if (!this.hass || !this.config) return;

    const percentage = speed === 'High' ? 100 : speed === 'Medium' ? 50 : 10;
    
    this.hass.callService('fan', 'set_percentage', {
      entity_id: this.config.entity,
      percentage: percentage,
    });
  }

  private _handleModeChange(e: CustomEvent): void {
    if (!this.hass || !this.config) return;

    const mode = (e.target as any).value;
    if (!mode || mode === PRESET_MODES.None) return;

    this.hass.callService('fan', 'set_preset_mode', {
      entity_id: this.config.entity,
      preset_mode: mode,
    });
  }

  private _handleLightToggle(): void {
    if (!this.hass || !this.config) return;

    const entityId = this.config.entity.replace('fan', 'light').replace('air_purifier', 'switch_status');
    const lightEntity = this.hass.states[entityId];
    
    if (lightEntity) {
      this.hass.callService('light', lightEntity.state === 'on' ? 'turn_off' : 'turn_on', {
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
    const lightEntity = this.hass.states[`light.${baseId.replace('air_purifier', 'switch_status')}`];

    const pm25 = Number(pm25Entity?.state) || 0;
    const motorSpeed = motorSpeedEntity?.state || '0';
    const humidity = humidityEntity?.state || '0';
    const temperature = temperatureEntity?.state || '0';
    const filterLife = filterLifeEntity?.state || '0';
    const isLightOn = lightEntity?.state === 'on';

    const currentSpeed = fanEntity.attributes.percentage || 0;
    const speedLabel = currentSpeed >= 90 ? 'High' : currentSpeed >= 45 ? 'Medium' : 'Low';
    const pm25Color = getPM25Color(pm25);
    const currentMode = fanEntity.attributes.preset_mode || PRESET_MODES.None;

    // Debug information
    console.log('Fan Entity:', {
      state,
      attributes: fanEntity.attributes,
      currentMode,
      availableModes: fanEntity.attributes.preset_modes,
    });

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
              ${this.config.show_animation ? html`
                <div class="pm25-animation ${state === 'on' ? 'active' : ''}"></div>
              ` : ''}
              <div class="value">${pm25}</div>
              <div class="label">PM2.5</div>
            </div>
          </div>

          <div class="controls-section">
            ${state === 'on' ? html`
              <div class="control-group">
                <div class="group-title">Fan Speed</div>
                <div class="speed-buttons">
                  ${['Low', 'Medium', 'High'].map(speed => html`
                    <ha-button
                      .outlined=${speedLabel !== speed}
                      @click=${() => this._handleSpeedClick(speed)}
                      class="speed-button ${speedLabel === speed ? 'active' : ''}"
                    >
                      <div class="button-content">
                        <ha-svg-icon .path=${mdiFan}></ha-svg-icon>
                        <span>${speed}</span>
                      </div>
                    </ha-button>
                  `)}
                </div>
              </div>

              <div class="control-group">
                <div class="group-title">Mode</div>
                <ha-select
                  .value=${currentMode}
                  @change=${this._handleModeChange}
                  fixedMenuPosition
                  naturalMenuWidth
                >
                  ${Object.entries(PRESET_MODES).map(([key, value]) => html`
                    <ha-list-item .value=${value}>
                      ${value}
                    </ha-list-item>
                  `)}
                </ha-select>
              </div>
            ` : ''}

            <div class="status-section">
              ${this.config.show_speed !== false ? html`
                <ha-statistic-badge
                  .value=${motorSpeed}
                  .description=${'Fan Speed'}
                  .icon=${mdiFan}
                  unit="RPM"
                ></ha-statistic-badge>
              ` : ''}
              
              ${this.config.show_humidity !== false ? html`
                <ha-statistic-badge
                  .value=${humidity}
                  .description=${'Humidity'}
                  unit="%"
                ></ha-statistic-badge>
              ` : ''}
              
              ${this.config.show_temperature !== false ? html`
                <ha-statistic-badge
                  .value=${temperature}
                  .description=${'Temperature'}
                  unit="°C"
                ></ha-statistic-badge>
              ` : ''}
              
              ${this.config.show_filter_life !== false ? html`
                <ha-statistic-badge
                  .value=${filterLife}
                  .description=${'Filter Life'}
                  unit="%"
                ></ha-statistic-badge>
              ` : ''}
            </div>

            ${this.config.show_light_control !== false && lightEntity ? html`
              <div class="control-group">
                <ha-button-toggle
                  .label=${'Indicator Light'}
                  .pressed=${isLightOn}
                  @click=${this._handleLightToggle}
                  .disabled=${state !== 'on'}
                >
                  <ha-svg-icon .path=${mdiLightbulb}></ha-svg-icon>
                </ha-button-toggle>
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
        --ha-card-border-radius: var(--ha-card-border-radius, 12px);
        --ha-card-box-shadow: var(--ha-card-box-shadow, none);
        --mdc-icon-size: 24px;
        --pm25-color: var(--primary-color);
      }

      ha-card {
        height: 100%;
        overflow: hidden;
        padding: 0;
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 16px;
        background: var(--ha-card-background, var(--card-background-color));
      }

      .name {
        font-size: var(--ha-card-header-font-size, 24px);
        font-weight: var(--ha-card-header-font-weight, normal);
        color: var(--ha-card-header-color, var(--primary-text-color));
      }

      .power-button {
        color: var(--primary-text-color);
      }

      .power-button.active {
        color: var(--primary-color);
      }

      .content {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .pm25-section {
        display: flex;
        justify-content: center;
        padding: 16px 0;
      }

      .pm25-circle {
        position: relative;
        width: 140px;
        height: 140px;
        border-radius: 50%;
        background: var(--ha-card-background, var(--card-background-color));
        border: 2px solid var(--divider-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: border-color 0.2s ease-in-out;
      }

      .pm25-circle.active {
        border-color: var(--pm25-color);
      }

      .pm25-animation {
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border-radius: 50%;
        border: 2px solid transparent;
        border-top-color: var(--pm25-color);
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
      }

      .pm25-animation.active {
        opacity: 1;
        animation: rotate 2s linear infinite;
      }

      .value {
        font-size: 36px;
        font-weight: bold;
        color: var(--pm25-color);
      }

      .label {
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-top: 8px;
      }

      .controls-section {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .control-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .group-title {
        font-size: 14px;
        font-weight: 500;
        color: var(--secondary-text-color);
      }

      .speed-buttons {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
      }

      .speed-button {
        width: 100%;
        --mdc-theme-primary: var(--primary-color);
      }

      .speed-button.active {
        background-color: var(--primary-color);
        color: var(--text-primary-color, white);
      }

      .button-content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;
      }

      ha-button {
        width: 100%;
      }

      ha-button.active {
        --mdc-theme-primary: var(--primary-color);
      }

      ha-select {
        width: 100%;
      }

      .status-section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 8px;
        padding: 8px 0;
      }

      ha-statistic-badge {
        --ha-statistic-badge-size: 100%;
        --ha-statistic-badge-justify-content: flex-start;
      }

      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .not-found {
        padding: 16px;
        text-align: center;
        color: var(--error-color);
      }
    `;
  }
}
