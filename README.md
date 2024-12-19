# Home Assistant Xiaomi Air Purifier Card

A custom card for Home Assistant that provides a beautiful and functional interface for Xiaomi Air Purifiers.

![Preview](preview.png)

## Features

- Beautiful, modern UI with animations
- Real-time PM2.5 display with color indicators
- Fan speed controls (High/Medium/Low)
- Indicator light toggle
- Display of:
  - Motor Speed (RPM)
  - Humidity
  - Temperature
  - Filter Life

## Installation

### HACS (Recommended)

1. Open HACS
2. Go to "Frontend" section
3. Click the menu in the upper right corner
4. Select "Custom repositories"
5. Add `https://github.com/artemsvit/HA-Air-Purifier-Card.git` as a new custom repository
6. Select "Lovelace" as the category
7. Click "Add"
8. Find "Xiaomi Air Purifier Card" in the Frontend section and install it

### Manual Installation

1. Download the latest release from the [releases page](https://github.com/artemsvit/HA-Air-Purifier-Card/releases)
2. Copy `ha-air-purifier-card.js` to your `config/www` directory
3. Add the following to your `configuration.yaml`:

```yaml
lovelace:
  resources:
    - url: /local/ha-air-purifier-card.js
      type: module
```

## Usage

Add the card to your dashboard:

```yaml
type: custom:ha-air-purifier-card
entity: fan.zhimi_mb3_7bb1_air_purifier
name: Air Purifier # Optional
```

The card will automatically find and use the following entities based on your air purifier entity:

- Power: `switch.zhimi_mb3_7bb1_switch_status`
- Indicator Light: `light.zhimi_mb3_7bb1_switch_status`
- PM2.5: `sensor.zhimi_mb3_7bb1_pm25`
- Motor Speed: `sensor.zhimi_mb3_7bb1_motor_speed`
- Humidity: `sensor.zhimi_mb3_7bb1_relative_humidity`
- Temperature: `sensor.zhimi_mb3_7bb1_temperature`
- Filter Life: `sensor.zhimi_mb3_7bb1_filter_life_level`

## Development

1. Clone this repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm start
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
