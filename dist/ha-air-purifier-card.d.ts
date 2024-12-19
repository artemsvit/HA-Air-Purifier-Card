import { LitElement } from 'lit';
import { HomeAssistant, LovelaceCardEditor, LovelaceCard, LovelaceCardConfig } from 'custom-card-helpers';
import './editor';
export interface AirPurifierCardConfig extends LovelaceCardConfig {
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
export declare class AirPurifierCard extends LitElement implements LovelaceCard {
    hass: HomeAssistant;
    private _config;
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): object;
    getCardSize(): number;
    setConfig(config: AirPurifierCardConfig): void;
    protected shouldUpdate(changedProps: Map<string, unknown>): boolean;
    private _handlePowerClick;
    private _handleSpeedClick;
    private _handleModeChange;
    private _handleChildLockToggle;
    private _handleLightToggle;
    private _handleBuzzerToggle;
    private _getSpeedLevel;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
