import { LitElement } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import type { AirPurifierCardConfig } from './ha-air-purifier-card';
export declare class AirPurifierCardEditor extends LitElement {
    hass: HomeAssistant;
    private _config;
    setConfig(config: AirPurifierCardConfig): void;
    private _valueChanged;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
