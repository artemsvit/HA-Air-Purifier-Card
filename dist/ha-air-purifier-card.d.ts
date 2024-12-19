import { LitElement } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import './editor';
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
export declare class HaAirPurifierCard extends LitElement {
    hass: HomeAssistant;
    private config;
    static getConfigElement(): HTMLElement;
    static getStubConfig(): object;
    setConfig(config: Config): void;
    protected shouldUpdate(changedProps: Map<string, unknown>): boolean;
    private _handlePowerClick;
    private _handleSpeedClick;
    private _handleModeChange;
    private _handleLightToggle;
    protected render(): import("lit").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
export {};
