import { LitElement } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import './editor';
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
export declare class HaAirPurifierCard extends LitElement {
    hass: HomeAssistant;
    private _config;
    static getConfigElement(): HTMLElement;
    static getStubConfig(): object;
    setConfig(config: AirPurifierCardConfig): void;
    protected shouldUpdate(changedProps: Map<string, unknown>): boolean;
    private _handlePowerClick;
    private _handleSpeedClick;
    private _handleModeChange;
    private _handleChildLockToggle;
    private _handleLightToggle;
    private _handleBuzzerToggle;
    private _getSpeedLevel;
    protected render(): import("lit").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
export {};
