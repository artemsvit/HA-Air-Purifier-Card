import { LitElement } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
export declare class HaAirPurifierCardEditor extends LitElement {
    hass: HomeAssistant;
    private _config?;
    private _helpers?;
    setConfig(config: any): void;
    protected render(): import("lit").TemplateResult<1>;
    private _valueChanged;
    static get styles(): import("lit").CSSResult;
}
