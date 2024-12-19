import { LitElement, html, CSSResultGroup } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import {
  HomeAssistant,
  hasConfigOrEntityChanged,
  fireEvent,
} from 'custom-card-helpers';
import { styles } from './styles';
import { buildConfig, SPEED_LEVELS, PRESET_MODES } from './config';
import { localize } from './localize';
import {
  AirPurifierCardConfig,
  AirPurifierEntity,
  SpeedLevel,
  PresetMode,
} from './types';

console.info(
  '%c AIR-PURIFIER-CARD %c 1.0.0 ',
  'color: white; background: #4CAF50; font-weight: 700;',
  'color: #4CAF50; background: white; font-weight: 700;',
);

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'ha-air-purifier-card',
  name: 'Xiaomi Air Purifier Card',
  description: 'A beautiful card for Xiaomi Air Purifier MB3',
});

@customElement('ha-air-purifier-card')
export class AirPurifierCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;

  @state() private config!: AirPurifierCardConfig;
  @state() private requestInProgress = false;

  public static override get styles(): CSSResultGroup {
    return styles;
  }

  public static getStubConfig(): object {
    return {
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

  public setConfig(config: Partial<AirPurifierCardConfig>): void {
    this.config = buildConfig(config);
  }

  protected override shouldUpdate(changedProps: Map<string, unknown>): boolean {
    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  private handleSpeedChange(e: CustomEvent): void {
    const value = (e.target as any).value as number;
    this.callService('fan.set_percentage', { percentage: value });
  }

  private handleModeChange(mode: PresetMode): void {
    this.callService('fan.set_preset_mode', { preset_mode: mode });
  }

  private handlePowerClick(): void {
    const newState = this.entity.state === 'on' ? 'off' : 'on';
    this.callService(`fan.turn_${newState}`, {});
  }

  private handleControlClick(control: string, value?: string): void {
    const service = `xiaomi_miio.fan_set_${control}`;
    const data = value ? { [control]: value } : {};
    this.callService(service, data);
  }

  private async callService(service: string, data: Record<string, any> = {}): Promise<void> {
    if (this.requestInProgress) return;

    this.requestInProgress = true;
    try {
      await this.hass.callService(service.split('.')[0], service.split('.')[1], {
        entity_id: this.config.entity,
        ...data,
      });
    } catch (err) {
      console.error('Error calling service:', err);
    } finally {
      this.requestInProgress = false;
    }
  }

  private get entity(): AirPurifierEntity {
    return this.hass.states[this.config.entity] as AirPurifierEntity;
  }

  private get currentSpeedLevel(): SpeedLevel | undefined {
    const percentage = this.entity.attributes.percentage || 0;
    return Object.values(SPEED_LEVELS).find(
      level => percentage <= level.percentage,
    );
  }

  private get currentPresetMode(): PresetMode {
    return (this.entity.attributes.preset_mode as PresetMode) || 'None';
  }

  protected override render() {
    if (!this.config || !this.hass || !this.entity) {
      return html``;
    }

    const { show = {}, compact_view = false } = this.config;
    const working = this.entity.state === 'on';

    return html`
      <ha-card>
        <div class="content">
          ${show.name ? html`
            <div class="header">
              <div class="name">${this.config.name || this.entity.attributes.friendly_name}</div>
              <state-badge
                .hass=${this.hass}
                .stateObj=${this.entity}
                .overrideIcon=${working ? 'mdi:fan' : 'mdi:fan-off'}
              ></state-badge>
            </div>
          ` : ''}

          <div class="preview ${working ? 'working' : ''} ${compact_view ? 'compact' : ''}">
            <!-- Add preview content here -->
          </div>

          ${show.speed ? html`
            <div class="speed-slider">
              <ha-slider
                .min=${0}
                .max=${100}
                .step=${1}
                .value=${this.entity.attributes.percentage || 0}
                .disabled=${!working}
                @change=${this.handleSpeedChange}
              ></ha-slider>
              <div class="speed-level">
                ${this.currentSpeedLevel?.name || localize('speed.none')}
              </div>
            </div>
          ` : ''}

          <div class="metrics">
            ${show.temperature ? html`
              <div class="metric">
                <div class="value">
                  ${this.entity.attributes.temperature || 0}
                  <span class="unit">°C</span>
                </div>
                <div class="subtitle">${localize('stats.temperature')}</div>
              </div>
            ` : ''}

            ${show.humidity ? html`
              <div class="metric">
                <div class="value">
                  ${this.entity.attributes.humidity || 0}
                  <span class="unit">%</span>
                </div>
                <div class="subtitle">${localize('stats.humidity')}</div>
              </div>
            ` : ''}

            ${show.filter_life ? html`
              <div class="metric">
                <div class="value">
                  ${this.entity.attributes.filter_life_remaining || 0}
                  <span class="unit">%</span>
                </div>
                <div class="subtitle">${localize('stats.filter_life')}</div>
              </div>
            ` : ''}
          </div>

          <div class="controls">
            <ha-icon-button
              class="control-button ${working ? 'active' : ''}"
              .path=${working ? 'mdi:power' : 'mdi:power-off'}
              @click=${this.handlePowerClick}
            ></ha-icon-button>

            ${show.light ? html`
              <ha-icon-button
                class="control-button ${this.entity.attributes.led === 'on' ? 'active' : ''}"
                .path=${'mdi:lightbulb'}
                @click=${() => this.handleControlClick('led', this.entity.attributes.led === 'on' ? 'off' : 'on')}
              ></ha-icon-button>
            ` : ''}

            ${show.child_lock ? html`
              <ha-icon-button
                class="control-button ${this.entity.attributes.child_lock === 'on' ? 'active' : ''}"
                .path=${'mdi:lock'}
                @click=${() => this.handleControlClick('child_lock', this.entity.attributes.child_lock === 'on' ? 'off' : 'on')}
              ></ha-icon-button>
            ` : ''}

            ${show.buzzer ? html`
              <ha-icon-button
                class="control-button ${this.entity.attributes.buzzer === 'on' ? 'active' : ''}"
                .path=${'mdi:volume-high'}
                @click=${() => this.handleControlClick('buzzer', this.entity.attributes.buzzer === 'on' ? 'off' : 'on')}
              ></ha-icon-button>
            ` : ''}
          </div>

          <div class="shortcuts">
            ${PRESET_MODES.map(mode => html`
              <div
                class="shortcut ${this.currentPresetMode === mode ? 'active' : ''}"
                @click=${() => this.handleModeChange(mode)}
              >
                <div class="icon">
                  <ha-icon .icon=${`mdi:${mode.toLowerCase()}`}></ha-icon>
                </div>
                <div class="label">${localize(`mode.${mode.toLowerCase()}`)}</div>
              </div>
            `)}
          </div>
        </div>
      </ha-card>
    `;
  }
}
