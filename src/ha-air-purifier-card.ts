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
    };
  }

  public setConfig(config: Config): void {
    if (!config.entity || config.entity.split('.')[0] !== 'fan') {
      throw new Error('Specify an entity from within the fan domain.');
    }
    this.config = config;
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

    const mode = e.detail.value;
    this.hass.callService('fan', 'set_preset_mode', {
      entity_id: this.config.entity,
      preset_mode: mode,
    });
  }

  private _handleLightToggle(): void {
    if (!this.hass || !this.config) return;

    const entityId = this.config.entity.replace('fan', 'light').replace('air_purifier', 'switch_status');
    const lightEntity = this.hass.states[entityId];
    
    this.hass.callService('light', lightEntity.state === 'on' ? 'turn_off' : 'turn_on', {
      entity_id: entityId,
    });
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

    const pm25 = pm25Entity?.state || '0';
    const motorSpeed = motorSpeedEntity?.state || '0';
    const humidity = humidityEntity?.state || '0';
    const temperature = temperatureEntity?.state || '0';
    const filterLife = filterLifeEntity?.state || '0';
    const isLightOn = lightEntity?.state === 'on';

    const currentSpeed = fanEntity.attributes.percentage || 0;
    const speedLabel = currentSpeed >= 90 ? 'High' : currentSpeed >= 45 ? 'Medium' : 'Low';

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
            <div class="pm25-circle ${state === 'on' ? 'active' : ''}">
              ${this.config.show_animation !== false ? html`
                <div class="pm25-animation"></div>
              ` : ''}
              <div class="value">${pm25}</div>
              <div class="label">PM2.5</div>
            </div>
          </div>

          <div class="controls-section">
            <div class="control-group">
              <div class="group-title">Fan Speed</div>
              <div class="speed-buttons">
                ${['Low', 'Medium', 'High'].map(speed => html`
                  <ha-button
                    .outlined=${speedLabel !== speed}
                    .disabled=${state !== 'on'}
                    @click=${() => this._handleSpeedClick(speed)}
                    class="${speedLabel === speed ? 'active' : ''}"
                  >
                    <ha-svg-icon .path=${mdiFan}></ha-svg-icon>
                    ${speed}
                  </ha-button>
                `)}
              </div>
            </div>

            <div class="control-group">
              <div class="group-title">Mode</div>
              <ha-select
                .value=${fanEntity.attributes.preset_mode || 'none'}
                @selected=${this._handleModeChange}
                .disabled=${state !== 'on'}
                fixedMenuPosition
                naturalMenuWidth
              >
                ${['none', 'auto', 'sleep', 'favorite'].map(mode => html`
                  <ha-list-item .value=${mode}>
                    ${mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </ha-list-item>
                `)}
              </ha-select>
            </div>

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

            ${this.config.show_light_control !== false ? html`
              <div class="control-group">
                <ha-button-toggle
                  .label=${'Indicator Light'}
                  .value=${isLightOn}
                  @change=${this._handleLightToggle}
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
        border-color: var(--primary-color);
      }

      .pm25-animation {
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border-radius: 50%;
        border: 2px solid transparent;
        border-top-color: var(--primary-color);
        animation: rotate 2s linear infinite;
      }

      .value {
        font-size: 36px;
        font-weight: bold;
        color: var(--primary-text-color);
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
