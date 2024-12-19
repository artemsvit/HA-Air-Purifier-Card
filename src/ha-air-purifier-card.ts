import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant, hasConfigOrEntityChanged } from 'custom-card-helpers';
import { mdiPower } from '@mdi/js';
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

  private _handleModeChange(e: CustomEvent): void {
    if (!this.hass || !this.config) return;

    const mode = e.detail.value.toLowerCase();
    this.hass.callService('fan', 'set_preset_mode', {
      entity_id: this.config.entity,
      preset_mode: mode,
    });
  }

  private _handleLightToggle(e: CustomEvent): void {
    if (!this.hass || !this.config) return;

    const entityId = this.config.entity.replace('fan', 'light').replace('air_purifier', 'switch_status');
    
    this.hass.callService('light', e.detail.checked ? 'turn_on' : 'turn_off', {
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
          <div class="warning">
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

    return html`
      <ha-card>
        <div class="card-header">
          <div class="card-title">${name}</div>
          <mwc-icon-button
            class="power-button"
            @click=${this._handlePowerClick}
            ?disabled=${!fanEntity}
          >
            <ha-svg-icon .path=${mdiPower}></ha-svg-icon>
          </mwc-icon-button>
        </div>

        <div class="pm25-display ${state === 'on' ? 'running' : ''}">
          <div class="pm25-circle ${state !== 'on' ? 'disabled' : ''}">
            ${this.config.show_animation !== false ? html`
              <div class="pm25-animation"></div>
            ` : ''}
            <div class="pm25-value ${state !== 'on' ? 'disabled' : ''}">${pm25}</div>
            <div class="pm25-label ${state !== 'on' ? 'disabled' : ''}">PM2.5</div>
          </div>
        </div>

        <div class="controls">
          <div class="control-group">
            <div class="control-group-title">Mode</div>
            <mwc-select
              class="mode-select"
              @selected=${this._handleModeChange}
              .value=${fanEntity.attributes.preset_mode || 'none'}
              ?disabled=${state !== 'on'}
            >
              <mwc-list-item value="none">None</mwc-list-item>
              <mwc-list-item value="auto">Auto</mwc-list-item>
              <mwc-list-item value="sleep">Sleep</mwc-list-item>
              <mwc-list-item value="favorite">Favorite</mwc-list-item>
            </mwc-select>
          </div>

          <div class="control-group">
            <div class="control-group-title">Status</div>
            <div class="info-grid">
              ${this.config.show_speed !== false ? html`
                <div class="info-item">
                  <span class="info-label">Speed</span>
                  <span class="info-value">${motorSpeed} RPM</span>
                </div>
              ` : ''}
              ${this.config.show_humidity !== false ? html`
                <div class="info-item">
                  <span class="info-label">Humidity</span>
                  <span class="info-value">${humidity}%</span>
                </div>
              ` : ''}
              ${this.config.show_temperature !== false ? html`
                <div class="info-item">
                  <span class="info-label">Temperature</span>
                  <span class="info-value">${temperature}°C</span>
                </div>
              ` : ''}
              ${this.config.show_filter_life !== false ? html`
                <div class="info-item">
                  <span class="info-label">Filter Life</span>
                  <span class="info-value">${filterLife}%</span>
                </div>
              ` : ''}
            </div>
          </div>

          ${this.config.show_light_control !== false ? html`
            <div class="control-group">
              <div class="control-row light-on">
                <mwc-formfield label="Indicator Light">
                  <mwc-switch
                    ?checked=${isLightOn}
                    @change=${this._handleLightToggle}
                    ?disabled=${state !== 'on'}
                  ></mwc-switch>
                </mwc-formfield>
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
        --mdc-icon-button-size: 48px;
        --mdc-icon-size: 24px;
        --mdc-theme-primary: var(--primary-color);
        --mdc-select-fill-color: var(--secondary-background-color);
        --mdc-select-ink-color: var(--primary-text-color);
        --mdc-select-label-ink-color: var(--secondary-text-color);
        --mdc-select-dropdown-icon-color: var(--secondary-text-color);
        --mdc-select-focused-dropdown-icon-color: var(--primary-color);
        --mdc-select-outlined-idle-border-color: var(--divider-color);
        --mdc-select-outlined-hover-border-color: var(--secondary-text-color);
      }

      ha-card {
        background: var(--card-background-color);
        border-radius: var(--card-radius, 12px);
        box-shadow: var(--ha-card-box-shadow, none);
        color: var(--primary-text-color);
        overflow: hidden;
      }

      .warning {
        display: block;
        color: var(--error-color);
        padding: 16px;
      }

      .card-header {
        padding: 16px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid var(--divider-color);
        background: var(--secondary-background-color);
      }

      .card-title {
        font-size: 18px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .power-button {
        color: var(--primary-color);
        transition: color var(--transition-duration, 0.2s) ease;
      }

      .power-button[disabled] {
        color: var(--disabled-text-color);
      }

      .pm25-display {
        position: relative;
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
        transition: opacity var(--transition-duration, 0.2s) ease;
      }

      .pm25-circle.disabled {
        opacity: 0.5;
      }

      .pm25-animation {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 2px solid transparent;
        animation: rotate 2s linear infinite;
        display: none;
      }

      .running .pm25-animation {
        display: block;
        border-top-color: var(--primary-color);
      }

      .pm25-value {
        font-size: 42px;
        font-weight: 500;
        margin-bottom: 4px;
        transition: all var(--transition-duration, 0.2s) ease;
      }

      .pm25-value.disabled {
        color: var(--disabled-text-color) !important;
      }

      .pm25-label {
        font-size: 14px;
        color: var(--secondary-text-color);
        transition: color var(--transition-duration, 0.2s) ease;
      }

      .pm25-label.disabled {
        color: var(--disabled-text-color);
      }

      .controls {
        padding: 20px;
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

      .mode-select {
        width: 100%;
      }

      .info-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }

      .info-item {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .info-label {
        font-size: 12px;
        color: var(--secondary-text-color);
      }

      .info-value {
        font-size: 16px;
        color: var(--primary-text-color);
      }

      .control-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px;
        border-radius: var(--control-radius, 8px);
        background: var(--secondary-background-color);
      }

      .control-row.light-on mwc-switch {
        --mdc-theme-primary: var(--light-on-color, #fdd835);
        --mdc-switch-selected-track-color: rgba(var(--rgb-light-on-color, 253, 216, 53), 0.3);
        --mdc-switch-selected-handle-color: var(--light-on-color, #fdd835);
      }

      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `;
  }
}
