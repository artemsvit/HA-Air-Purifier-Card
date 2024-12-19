import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant } from 'custom-card-helpers';
import { mdiPower, mdiSpeedometer, mdiWaterPercent, mdiThermometer } from '@mdi/js';
import './editor';

interface Config {
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
  @state() private stateObj: any;

  setConfig(config: Config) {
    if (!config.entity || config.entity.split('.')[0] !== 'fan') {
      throw new Error('Specify an entity from within the fan domain.');
    }
    this.config = config;
  }

  getCardSize() {
    return 3;
  }

  private getEntityId(type: string, suffix: string): string {
    const baseEntity = this.config.entity.split('.')[1];
    return `${type}.${baseEntity}_${suffix}`;
  }

  private _handlePowerClick() {
    this.hass.callService('fan', 'toggle', {
      entity_id: this.config.entity,
    });
  }

  private _handleSpeedClick(speed: string) {
    if (!this.stateObj.attributes.preset_modes?.includes(speed)) return;
    
    this.hass.callService('fan', 'set_preset_mode', {
      entity_id: this.config.entity,
      preset_mode: speed,
    });
  }

  private _handleLightToggle(e: CustomEvent) {
    const lightEntity = this.getEntityId('light', 'switch_status');
    this.hass.callService('light', 'toggle', {
      entity_id: lightEntity,
    });
  }

  private _getFavoriteLevel(): number {
    const favLevelEntity = this.getEntityId('number', 'favorite_fan_level');
    const entity = this.hass.states[favLevelEntity];
    return entity ? Number(entity.state) : 0;
  }

  private _getFilterLife(): number {
    const filterLifeEntity = this.getEntityId('sensor', 'filter_life_level');
    const entity = this.hass.states[filterLifeEntity];
    return entity ? Number(entity.state) : 100;
  }

  private _getPM25(): number {
    const pm25Entity = this.getEntityId('sensor', 'pm25');
    const entity = this.hass.states[pm25Entity];
    return entity ? Number(entity.state) : 0;
  }

  private _getHumidity(): number {
    const humidityEntity = this.getEntityId('sensor', 'relative_humidity');
    const entity = this.hass.states[humidityEntity];
    return entity ? Number(entity.state) : 0;
  }

  private _getTemperature(): number {
    const tempEntity = this.getEntityId('sensor', 'temperature');
    const entity = this.hass.states[tempEntity];
    return entity ? Number(entity.state) : 0;
  }

  private _getLightState(): boolean {
    const lightEntity = this.getEntityId('light', 'switch_status');
    const entity = this.hass.states[lightEntity];
    return entity ? entity.state === 'on' : false;
  }

  private _getMotorSpeed(): number {
    const motorSpeedEntity = this.getEntityId('sensor', 'motor_speed');
    const entity = this.hass.states[motorSpeedEntity];
    return entity ? Number(entity.state) : 0;
  }

  private _computePM25Color(value: number): string {
    if (value <= 12) return 'var(--success-color)';
    if (value <= 35) return 'var(--warning-color)';
    return 'var(--error-color)';
  }

  protected render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    this.stateObj = this.hass.states[this.config.entity];
    if (!this.stateObj) {
      return html`
        <ha-card>
          <div class="not-found">
            Entity not found: ${this.config.entity}
          </div>
        </ha-card>
      `;
    }

    const pm25 = this._getPM25();
    const isOn = this.stateObj.state === 'on';
    const lightOn = this._getLightState();

    return html`
      <ha-card>
        <div class="content">
          <div class="power-row">
            <div class="name">
              ${this.config.name || this.stateObj.attributes.friendly_name}
            </div>
            <mwc-icon-button
              class="power-button ${isOn ? 'on' : ''}"
              @click=${this._handlePowerClick}
            >
              <ha-svg-icon .path=${mdiPower}></ha-svg-icon>
            </mwc-icon-button>
          </div>

          <div class="pm25-container ${isOn ? 'running' : ''}">
            <div class="pm25-circle" style="color: ${this._computePM25Color(pm25)}">
              <span class="pm25-value">${pm25}</span>
              <span class="pm25-label">PM2.5</span>
            </div>
          </div>

          <div class="control-group">
            <div class="control-group-title">Fan Speed</div>
            <div class="speed-buttons">
              <mwc-button
                class="${this.stateObj.attributes.preset_mode === 'High' ? 'active' : ''}"
                ?disabled=${!isOn}
                @click=${() => this._handleSpeedClick('High')}
              >High</mwc-button>
              <mwc-button
                class="${this.stateObj.attributes.preset_mode === 'Medium' ? 'active' : ''}"
                ?disabled=${!isOn}
                @click=${() => this._handleSpeedClick('Medium')}
              >Medium</mwc-button>
              <mwc-button
                class="${this.stateObj.attributes.preset_mode === 'Low' ? 'active' : ''}"
                ?disabled=${!isOn}
                @click=${() => this._handleSpeedClick('Low')}
              >Low</mwc-button>
            </div>
          </div>

          <div class="control-group">
            <div class="control-group-title">Settings</div>
            <div class="control-row ${!isOn ? 'disabled' : ''} ${lightOn ? 'light-on' : ''}" id="light-control">
              <div class="control-label">
                <mwc-icon>lightbulb</mwc-icon>
                Indicator Light
              </div>
              <mwc-switch
                ?checked=${lightOn}
                ?disabled=${!isOn}
                @change=${this._handleLightToggle}
              ></mwc-switch>
            </div>
          </div>

          <div class="info-grid">
            <div class="info-item ${!isOn ? 'disabled' : ''}">
              <ha-svg-icon .path=${mdiSpeedometer}></ha-svg-icon>
              <div class="info-label">Motor Speed</div>
              <div class="info-value">${this._getMotorSpeed()} RPM</div>
            </div>
            <div class="info-item ${!isOn ? 'disabled' : ''}">
              <ha-svg-icon .path=${mdiWaterPercent}></ha-svg-icon>
              <div class="info-label">Humidity</div>
              <div class="info-value">${this._getHumidity()}%</div>
            </div>
            <div class="info-item ${!isOn ? 'disabled' : ''}">
              <ha-svg-icon .path=${mdiThermometer}></ha-svg-icon>
              <div class="info-label">Temperature</div>
              <div class="info-value">${this._getTemperature()}°C</div>
            </div>
            <div class="info-item ${!isOn ? 'disabled' : ''}">
              <mwc-icon>filter_alt</mwc-icon>
              <div class="info-label">Filter Life</div>
              <div class="info-value">${this._getFilterLife()}%</div>
            </div>
          </div>
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return css`
      :host {
        --transition-duration: 0.25s;
        --card-radius: 12px;
      }

      ha-card {
        overflow: hidden;
        height: 100%;
        padding: 16px;
        display: flex;
        flex-direction: column;
      }

      .not-found {
        padding: 8px;
        font-style: italic;
      }

      .content {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .power-row {
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

      .power-button {
        --mdc-icon-button-size: 42px;
        color: var(--disabled-text-color);
      }

      .power-button.on {
        color: var(--primary-color);
      }

      .pm25-container {
        position: relative;
        padding: 32px 0;
        text-align: center;
      }

      .pm25-circle {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 4px solid currentColor;
        transition: border-color var(--transition-duration) ease;
      }

      .pm25-value {
        font-size: 32px;
        font-weight: bold;
        color: var(--primary-text-color);
      }

      .pm25-label {
        font-size: 14px;
        color: var(--secondary-text-color);
      }

      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .pm25-circle::before {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        border-radius: 50%;
        border: 4px solid transparent;
        border-top-color: currentColor;
        opacity: 0;
        transition: opacity var(--transition-duration) ease;
      }

      .pm25-container.running .pm25-circle::before {
        opacity: 0.3;
        animation: rotate 2s linear infinite;
      }

      .control-group {
        margin: 16px 0;
      }

      .control-group-title {
        font-size: 14px;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin-bottom: 8px;
      }

      .speed-buttons {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
      }

      mwc-button {
        --mdc-theme-primary: var(--primary-text-color);
        --mdc-theme-on-primary: var(--primary-text-color);
        border-radius: var(--card-radius);
        border: 1px solid var(--divider-color);
      }

      mwc-button.active {
        --mdc-theme-primary: var(--primary-color);
        border-color: var(--primary-color);
      }

      .control-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        border-radius: var(--card-radius);
        transition: opacity var(--transition-duration) ease;
      }

      .control-row.disabled {
        opacity: 0.5;
        pointer-events: none;
      }

      .control-label {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--primary-text-color);
        font-size: 14px;
      }

      .control-label mwc-icon {
        color: var(--secondary-text-color);
        --mdc-icon-size: 20px;
        transition: color var(--transition-duration) ease;
      }

      .control-row.light-on:not(.disabled) .control-label mwc-icon {
        color: var(--light-on-color, #fdd835);
      }

      mwc-switch {
        --mdc-theme-primary: var(--primary-color);
        --mdc-switch-selected-track-color: rgba(var(--rgb-primary-color), 0.3);
        --mdc-switch-selected-handle-color: var(--primary-color);
        --mdc-switch-unselected-track-color: rgba(var(--primary-text-color), 0.2);
        --mdc-switch-unselected-handle-color: var(--primary-text-color);
        --mdc-switch-disabled-track-color: rgba(var(--disabled-text-color), 0.2);
        --mdc-switch-disabled-handle-color: var(--disabled-text-color);
      }

      .control-row.light-on mwc-switch {
        --mdc-theme-primary: var(--light-on-color, #fdd835);
        --mdc-switch-selected-track-color: rgba(253, 216, 53, 0.3);
        --mdc-switch-selected-handle-color: var(--light-on-color, #fdd835);
      }

      .info-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        margin-top: 16px;
      }

      .info-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 16px;
        background: var(--secondary-background-color);
        border-radius: var(--card-radius);
        transition: opacity var(--transition-duration) ease;
      }

      .info-item.disabled {
        opacity: 0.5;
      }

      .info-item ha-svg-icon,
      .info-item mwc-icon {
        color: var(--primary-color);
        --mdc-icon-size: 24px;
      }

      .info-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin: 4px 0;
      }

      .info-value {
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-text-color);
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ha-air-purifier-card': HaAirPurifierCard;
  }
}
