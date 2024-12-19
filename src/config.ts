import { AirPurifierCardConfig, SpeedLevels } from './types';
import { localize } from './localize';

export const SPEED_LEVELS: SpeedLevels = {
  Silent: { name: 'Silent', percentage: 25, rpm: '300-400' },
  Low: { name: 'Low', percentage: 50, rpm: '400-500' },
  Medium: { name: 'Medium', percentage: 75, rpm: '500-600' },
  High: { name: 'High', percentage: 100, rpm: '600-800' }
} as const;

export const PRESET_MODES = ['Auto', 'Sleep', 'Favorite', 'None'] as const;

export const DEFAULT_CONFIG: Required<Pick<AirPurifierCardConfig, 'show' | 'compact_view' | 'stats' | 'shortcuts'>> = {
  show: {
    name: true,
    state: true,
    temperature: true,
    humidity: true,
    speed: true,
    filter_life: false,
    light: false,
    child_lock: false,
    buzzer: false,
  },
  compact_view: false,
  stats: [],
  shortcuts: [],
};

export function buildConfig(
  config: Partial<AirPurifierCardConfig>,
): AirPurifierCardConfig {
  if (!config) {
    throw new Error(localize('error.invalid_config'));
  }

  if (!config.entity) {
    throw new Error(localize('error.missing_entity'));
  }

  if (config.entity.split('.')[0] !== 'fan') {
    throw new Error(localize('error.invalid_entity'));
  }

  // Convert old config format to new format
  const show = {
    name: config.show_name ?? true,
    state: config.show_animation ?? true,
    temperature: config.show_temperature ?? true,
    humidity: config.show_humidity ?? true,
    speed: config.show_speed ?? true,
    filter_life: config.show_filter_life ?? false,
    light: config.show_light_control ?? false,
    child_lock: config.show_child_lock ?? false,
    buzzer: config.show_buzzer ?? false,
  };

  return {
    type: 'custom:ha-air-purifier-card',
    entity: config.entity,
    name: config.name,
    show,
    compact_view: config.compact_view ?? DEFAULT_CONFIG.compact_view,
    stats: config.stats ?? DEFAULT_CONFIG.stats,
    shortcuts: config.shortcuts ?? DEFAULT_CONFIG.shortcuts,
  };
}
