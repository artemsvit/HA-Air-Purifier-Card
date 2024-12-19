import { LitElement } from 'lit';
import { HomeAssistant, LovelaceCardEditor } from 'custom-card-helpers';
import { AirPurifierCardConfig } from './types';
export declare class AirPurifierCardEditor extends LitElement implements LovelaceCardEditor {
    hass: HomeAssistant;
    private _config;
    private _helpers?;
    private _initialized;
    setConfig(config: AirPurifierCardConfig): void;
    protected shouldUpdate(): boolean;
    private loadCardHelpers;
    private _initialize;
    private _valueChanged;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
