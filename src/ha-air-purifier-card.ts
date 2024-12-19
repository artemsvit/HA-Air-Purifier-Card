import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant, hasConfigOrEntityChanged } from 'custom-card-helpers';
import { mdiPower, mdiLightbulb, mdiFan } from '@mdi/js';
import './editor';

// Register the card
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

function getPM25Color(value: number): string {
  if (value <= PM25_THRESHOLDS.GOOD) return 'var(--success-color, #43a047)';
  if (value <= PM25_THRESHOLDS.MODERATE) return 'var(--warning-color, #ffa600)';
  if (value <= PM25_THRESHOLDS.UNHEALTHY_SENSITIVE) return 'var(--warning-color, #ffa600)';
  if (value <= PM25_THRESHOLDS.UNHEALTHY) return 'var(--error-color, #db4437)';
  if (value <= PM25_THRESHOLDS.VERY_UNHEALTHY) return 'var(--error-color, #db4437)';
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

    const speedMappings = {
      'Silent': 25,
      'Low': 50,
      'Medium': 75,
      'High': 100
    };

    this.hass.callService('fan', 'set_percentage', {
      entity_id: this.config.entity,
      percentage: speedMappings[speed],
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
    const speedLabel = currentSpeed >= 90 ? 'High' : currentSpeed >= 75 ? 'Medium' : currentSpeed >= 50 ? 'Low' : 'Silent';
    const pm25Color = getPM25Color(pm25);
    const currentMode = fanEntity.attributes.preset_mode || PRESET_MODES.None;

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

          <div class="controls">
            ${state === 'on' ? html`
              <div class="speed-control">
                <ha-button-toggle-group>
                  ${['Silent', 'Low', 'Medium', 'High'].map(speed => html`
                    <ha-button-toggle
                      .selected=${speedLabel === speed}
                      @click=${() => this._handleSpeedClick(speed)}
                      class="speed-button ${speedLabel === speed ? 'active' : ''}"
                    >
                      <div class="button-content">
                        <ha-svg-icon .path=${mdiFan}></ha-svg-icon>
                        <span class="button-text">${speed}</span>
                      </div>
                    </ha-button-toggle>
                  `)}
                </ha-button-toggle-group>
              </div>

              <div class="control-group">
                <div class="control-group-title">Mode</div>
                <ha-select
                  .value=${currentMode}
                  @change=${this._handleModeChange}
                  class="mode-select"
                >
                  ${Object.entries(PRESET_MODES).map(([key, value]) => html`
                    <ha-list-item .value=${value}>
                      ${value}
                    </ha-list-item>
                  `)}
                </ha-select>
              </div>

              ${this.config.show_speed || this.config.show_humidity || this.config.show_temperature || this.config.show_filter_life ? html`
                <div class="status-section">
                  ${this.config.show_speed ? html`
                    <ha-statistic-badge
                      .value=${motorSpeed}
                      .description=${'Fan Speed'}
                      .icon=${mdiFan}
                      unit="RPM"
                    ></ha-statistic-badge>
                  ` : ''}
                  
                  ${this.config.show_humidity ? html`
                    <ha-statistic-badge
                      .value=${humidity}
                      .description=${'Humidity'}
                      unit="%"
                    ></ha-statistic-badge>
                  ` : ''}
                  
                  ${this.config.show_temperature ? html`
                    <ha-statistic-badge
                      .value=${temperature}
                      .description=${'Temperature'}
                      unit="°C"
                    ></ha-statistic-badge>
                  ` : ''}
                  
                  ${this.config.show_filter_life ? html`
                    <ha-statistic-badge
                      .value=${filterLife}
                      .description=${'Filter Life'}
                      unit="%"
                    ></ha-statistic-badge>
                  ` : ''}
                </div>
              ` : ''}

              ${this.config.show_light_control && lightEntity ? html`
                <div class="control-group">
                  <ha-button-toggle
                    .label=${'Indicator Light'}
                    .pressed=${isLightOn}
                    @click=${this._handleLightToggle}
                  >
                    <ha-svg-icon .path=${mdiLightbulb}></ha-svg-icon>
                  </ha-button-toggle>
                </div>
              ` : ''}
            ` : ''}
          </div>
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
        padding: 16px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
        border-bottom: 1px solid var(--divider-color);
      }

      .name {
        font-size: 18px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .power-button {
        --mdc-icon-button-size: 48px;
        color: var(--primary-text-color);
        transition: color var(--transition-duration) ease;
      }

      .power-button.active {
        color: var(--primary-color);
      }

      .power-button[disabled] {
        color: var(--disabled-text-color);
      }

      .content {
        padding: 20px;
      }

      .pm25-section {
        padding: 32px 0;
        text-align: center;
      }

      .pm25-circle {
        position: relative;
        width: 160px;
        height: 160px;
        margin: 0 auto;
        border-radius: 50%;
        background: var(--secondary-background-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: opacity var(--transition-duration) ease;
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
        font-size: 42px;
        font-weight: 500;
        color: var(--pm25-color);
        margin-bottom: 4px;
        transition: color var(--transition-duration) ease;
      }

      .value.disabled {
        color: var(--disabled-text-color) !important;
      }

      .label {
        font-size: 14px;
        color: var(--secondary-text-color);
        transition: color var(--transition-duration) ease;
      }

      .label.disabled {
        color: var(--disabled-text-color);
      }

      .controls {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      .control-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .control-group-title {
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-left: 4px;
      }

      .speed-control {
        display: flex;
        justify-content: center;
        padding: 16px;
        background: var(--ha-card-background, var(--card-background-color));
        border-top: 1px solid var(--divider-color);
      }

      ha-button-toggle-group {
        --mdc-theme-primary: var(--primary-color);
        display: flex;
        width: 100%;
        justify-content: space-between;
        gap: 8px;
      }

      .speed-button {
        flex: 1;
        --ha-button-toggle-padding: 12px;
        --mdc-theme-primary: var(--primary-color);
        border-radius: var(--control-radius, 12px);
      }

      .speed-button.active {
        background-color: var(--primary-color);
        color: var(--text-primary-color, white);
      }

      .button-content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }

      .button-text {
        font-size: 14px;
        font-weight: 500;
      }

      .mode-select {
        width: 100%;
        --mdc-select-fill-color: var(--secondary-background-color);
        --mdc-select-ink-color: var(--primary-text-color);
        --mdc-select-label-ink-color: var(--secondary-text-color);
        --mdc-select-dropdown-icon-color: var(--secondary-text-color);
        --mdc-select-focused-dropdown-icon-color: var(--primary-color);
        --mdc-select-outlined-idle-border-color: var(--divider-color);
        --mdc-select-outlined-hover-border-color: var(--secondary-text-color);
      }

      .status-section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 8px;
      }

      ha-statistic-badge {
        --ha-statistic-badge-size: 100%;
        --ha-statistic-badge-justify-content: flex-start;
      }

      .not-found {
        padding: 16px;
        text-align: center;
        color: var(--error-color);
      }
    `;
  }
}
