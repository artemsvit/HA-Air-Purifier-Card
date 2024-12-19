import { AirPurifierCardConfig, SpeedLevels } from './types';
export declare const SPEED_LEVELS: SpeedLevels;
export declare const PRESET_MODES: readonly ["Auto", "Sleep", "Favorite", "None"];
export declare const DEFAULT_CONFIG: Required<Pick<AirPurifierCardConfig, 'show' | 'compact_view' | 'stats' | 'shortcuts'>>;
export declare function buildConfig(config: Partial<AirPurifierCardConfig>): AirPurifierCardConfig;
