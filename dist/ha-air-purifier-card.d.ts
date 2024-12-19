import { LitElement } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import '@material/mwc-switch';
import './editor';
interface Config {
    entity: string;
    name?: string;
    show_name?: boolean;
    show_state?: boolean;
    show_toolbar?: boolean;
}
export declare class HaAirPurifierCard extends LitElement {
    hass: HomeAssistant;
    private config;
    private stateObj;
    protected shouldUpdate(changedProps: Map<string, unknown>): boolean;
    setConfig(config: Config): void;
    getCardSize(): number;
    private getEntityId;
    private _handlePowerClick;
    private _handleSpeedClick;
    private _handleLightToggle;
    private _getEntityState;
    private _getFilterLife;
    private _getPM25;
    private _getHumidity;
    private _getTemperature;
    private _getLightState;
    private _getMotorSpeed;
    private _computePM25Color;
    protected render(): import("lit").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
export {};
