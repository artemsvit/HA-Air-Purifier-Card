# Xiaomi Air Purifier Card

A beautiful and feature-rich Lovelace card for Xiaomi Air Purifier MB3 in Home Assistant.

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

### HACS (Recommended)

1. Make sure you have [HACS](https://hacs.xyz) installed in your Home Assistant
2. Add this repository as a custom repository in HACS:
   - Click on HACS in the sidebar
   - Click on "Frontend"
   - Click the three dots in the top right corner
   - Select "Custom repositories"
   - Add `https://github.com/artemsvit/HA-Air-Purifier-Card` as repository
   - Select "Lovelace" as category
3. Click "Install"
4. Restart Home Assistant

### Manual Installation

1. Download `ha-air-purifier-card.js` from the [latest release](https://github.com/artemsvit/HA-Air-Purifier-Card/releases)
2. Copy it to your `config/www` directory
3. Add the resource in your Lovelace configuration:
   ```yaml
   resources:
     - url: /local/ha-air-purifier-card.js
       type: module
   ```
4. Restart Home Assistant

## Usage

Add the card to your dashboard:

```yaml
type: custom:ha-air-purifier-card
entity: fan.xiaomi_air_purifier
name: Air Purifier
show:
  name: true
  state: true
  temperature: true
  humidity: true
  speed: true
  filter_life: false
  light: false
  child_lock: false
  buzzer: false
```

## Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | string | **Required** | Entity ID of your air purifier |
| name | string | *Entity name* | Name to display |
| show.name | boolean | true | Show name |
| show.state | boolean | true | Show state |
| show.temperature | boolean | true | Show temperature |
| show.humidity | boolean | true | Show humidity |
| show.speed | boolean | true | Show speed control |
| show.filter_life | boolean | false | Show filter life |
| show.light | boolean | false | Show light control |
| show.child_lock | boolean | false | Show child lock |
| show.buzzer | boolean | false | Show buzzer control |
| compact_view | boolean | false | Use compact view |

## Support

- [Report a bug](https://github.com/artemsvit/HA-Air-Purifier-Card/issues)
- [Request a feature](https://github.com/artemsvit/HA-Air-Purifier-Card/issues)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
