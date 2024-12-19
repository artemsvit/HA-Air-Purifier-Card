import { LitElement } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import './editor';
interface Config {
    type: string;
    entity: string;
    name?: string;
    show_name?: boolean;
    show_state?: boolean;
    show_toolbar?: boolean;
}
export declare class HaAirPurifierCard extends LitElement {
    hass: HomeAssistant;
    private config;
    static getConfigElement(): HTMLElement;
    static getStubConfig(): object;
    setConfig(config: Config): void;
    protected shouldUpdate(changedProps: Map<string, unknown>): boolean;
    private _handlePowerClick;
    private _handleLightClick;
    protected render(): import("lit").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
export {};
