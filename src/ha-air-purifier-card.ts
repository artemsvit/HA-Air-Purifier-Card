import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { HomeAssistant, hasConfigOrEntityChanged } from 'custom-card-helpers';
import { mdiPower, mdiSpeedometer, mdiWaterPercent, mdiThermometer, mdiFilterOutline } from '@mdi/js';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@material/mwc-switch';
import './editor';

console.info(
  '%c XIAOMI-AIR-PURIFIER-CARD %c 1.0.0 ',
  'color: white; background: #555555; font-weight: 700;',
  'color: white; background: #000000; font-weight: 700;',
);

interface Config {
  entity: string;
  name?: string;
  show_name?: boolean;
  show_state?: boolean;
  show_toolbar?: boolean;
}

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'ha-air-purifier-card',
  name: 'Xiaomi Air Purifier Card',
  description: 'A card for Xiaomi Air Purifier',
});

@customElement('ha-air-purifier-card')
export class HaAirPurifierCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property({ attribute: false }) private config!: Config;
  @state() private stateObj: any;

  protected shouldUpdate(changedProps: Map<string, unknown>): boolean {
    return hasConfigOrEntityChanged(this, changedProps, false);
  }

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

  private _handleLightToggle() {
    const lightEntity = this.getEntityId('light', 'switch_status');
    this.hass.callService('light', 'toggle', {
      entity_id: lightEntity,
    });
  }

  private _getEntityState(type: string, suffix: string, defaultValue: any = null): any {
    const entityId = this.getEntityId(type, suffix);
    const entity = this.hass.states[entityId];
    return entity ? entity.state : defaultValue;
  }

  private _getFilterLife(): number {
    return Number(this._getEntityState('sensor', 'filter_life_level', 100));
  }

  private _getPM25(): number {
    return Number(this._getEntityState('sensor', 'pm25', 0));
  }

  private _getHumidity(): number {
    return Number(this._getEntityState('sensor', 'relative_humidity', 0));
  }

  private _getTemperature(): number {
    return Number(this._getEntityState('sensor', 'temperature', 0));
  }

  private _getLightState(): boolean {
    return this._getEntityState('light', 'switch_status', 'off') === 'on';
  }

  private _getMotorSpeed(): number {
    return Number(this._getEntityState('sensor', 'motor_speed', 0));
  }

  private _computePM25Color(value: number): string {
    if (value <= 12) return 'var(--success-color, #4CAF50)';
    if (value <= 35) return 'var(--warning-color, #FF9800)';
    return 'var(--error-color, #F44336)';
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
            <div class="power-button ${isOn ? 'on' : ''}" @click=${this._handlePowerClick}>
              <ha-svg-icon .path=${mdiPower}></ha-svg-icon>
            </div>
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
              ${['High', 'Medium', 'Low'].map(speed => html`
                <button
                  class="speed-button ${this.stateObj.attributes.preset_mode === speed ? 'active' : ''}"
                  ?disabled=${!isOn}
                  @click=${() => this._handleSpeedClick(speed)}
                >${speed}</button>
              `)}
            </div>
          </div>

          <div class="control-group">
            <div class="control-group-title">Settings</div>
            <div class="control-row ${!isOn ? 'disabled' : ''} ${lightOn ? 'light-on' : ''}" id="light-control">
              <div class="control-label">
                <ha-svg-icon .path=${mdiPower}></ha-svg-icon>
                <span>Indicator Light</span>
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
              <ha-svg-icon .path=${mdiFilterOutline}></ha-svg-icon>
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
        --mdc-theme-primary: var(--primary-color);
        --mdc-switch-selected-track-color: var(--primary-color);
        --mdc-switch-selected-handle-color: var(--primary-color);
        --mdc-switch-unselected-track-color: var(--disabled-text-color);
        --mdc-switch-unselected-handle-color: var(--disabled-text-color);
        --transition-duration: 0.25s;
        --card-radius: 12px;
      }

      ha-card {
        height: 100%;
        padding: 16px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
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
        margin-bottom: 24px;
      }

      .name {
        font-size: 24px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .power-button {
        --mdc-icon-size: 24px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--secondary-background-color);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all var(--transition-duration) ease;
      }

      .power-button.on {
        background: var(--primary-color);
        color: white;
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
        position: relative;
        transition: all var(--transition-duration) ease;
      }

      .pm25-value {
        font-size: 32px;
        font-weight: bold;
        color: var(--primary-text-color);
      }

      .pm25-label {
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }

      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .pm25-container.running .pm25-circle::before {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        border-radius: 50%;
        border: 4px solid transparent;
        border-top-color: currentColor;
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

      .speed-button {
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: var(--card-radius);
        padding: 8px;
        color: var(--primary-text-color);
        cursor: pointer;
        transition: all var(--transition-duration) ease;
      }

      .speed-button.active {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: white;
      }

      .speed-button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .control-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        border-radius: var(--card-radius);
        background: var(--card-background-color);
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
        background: var(--card-background-color);
        border-radius: var(--card-radius);
        transition: opacity var(--transition-duration) ease;
      }

      .info-item.disabled {
        opacity: 0.5;
      }

      .info-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin: 8px 0 4px;
      }

      .info-value {
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      ha-svg-icon {
        width: 24px;
        height: 24px;
        color: var(--secondary-text-color);
      }
    `;
  }
}
