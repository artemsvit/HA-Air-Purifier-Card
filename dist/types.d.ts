import { HassEntityAttributeBase, HassEntityBase, HassServiceTarget } from 'home-assistant-js-websocket';
import { LovelaceCardConfig } from 'custom-card-helpers';
export * from 'home-assistant-js-websocket';
export type AirPurifierState = 'on' | 'off' | 'unavailable' | 'unknown';
export interface AirPurifierAttributes extends HassEntityAttributeBase {
    preset_mode?: string;
    preset_modes?: string[];
    percentage?: number;
    percentage_step?: number;
    supported_features?: number;
    use_time?: number;
    temperature?: number;
    humidity?: number;
    pm25?: number;
    filter_life_remaining?: number;
    motor_speed?: number;
    child_lock?: 'on' | 'off';
    led?: 'on' | 'off';
    buzzer?: 'on' | 'off';
    friendly_name?: string;
}
export interface AirPurifierEntity extends HassEntityBase {
    attributes: AirPurifierAttributes;
    state: AirPurifierState;
}
export interface AirPurifierCardStat {
    entity_id?: string;
    attribute?: string;
    value_template?: string;
    unit?: string;
    subtitle?: string;
}
export interface AirPurifierCardShortcut {
    name?: string;
    icon?: string;
    service?: string;
    service_data?: Record<string, unknown>;
    target?: HassServiceTarget;
    percentage?: number;
    preset_mode?: string;
}
export interface AirPurifierCardConfig extends LovelaceCardConfig {
    entity: string;
    name?: string;
    theme?: string;
    compact_view?: boolean;
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
    show_name?: boolean;
    show_animation?: boolean;
    show_temperature?: boolean;
    show_humidity?: boolean;
    show_speed?: boolean;
    show_filter_life?: boolean;
    show_light_control?: boolean;
    show_child_lock?: boolean;
    show_buzzer?: boolean;
    stats?: AirPurifierCardStat[];
    shortcuts?: AirPurifierCardShortcut[];
}
export interface SpeedLevel {
    name: string;
    percentage: number;
    rpm: string;
}
export type SpeedLevels = Record<string, SpeedLevel>;
export type PresetMode = 'Auto' | 'Sleep' | 'Favorite' | 'None';
