import { LitElement } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
export declare class HaAirPurifierCardEditor extends LitElement {
    hass: HomeAssistant;
    private _config;
    private _configChanged;
    setConfig(config: any): void;
    private _valueChanged;
    protected render(): import("lit").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
