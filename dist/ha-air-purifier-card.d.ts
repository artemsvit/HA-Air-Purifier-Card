import { LitElement, CSSResultGroup } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { AirPurifierCardConfig } from './types';
export declare class AirPurifierCard extends LitElement {
    hass: HomeAssistant;
    private config;
    private requestInProgress;
    static get styles(): CSSResultGroup;
    static getStubConfig(): object;
    setConfig(config: Partial<AirPurifierCardConfig>): void;
    protected shouldUpdate(changedProps: Map<string, unknown>): boolean;
    private handleSpeedChange;
    private handleModeChange;
    private handlePowerClick;
    private handleControlClick;
    private callService;
    private get entity();
    private get currentSpeedLevel();
    private get currentPresetMode();
    protected render(): import("lit-html").TemplateResult<1>;
}
