import { css } from 'lit';

export const styles = css`
  :host {
    display: flex;
    flex-direction: column;
    --mdc-icon-size: 24px;
  }

  ha-card {
    flex-direction: column;
    flex: 1;
    padding: 12px;
    position: relative;
    overflow: hidden;
  }

  .content {
    flex: 1;
    width: 100%;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .header .name {
    font-size: 1.2em;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .header state-badge {
    flex: 0 0 40px;
  }

  .preview {
    background: var(--primary-color);
    cursor: pointer;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
  }

  .preview.working {
    background: var(--state-fan-active-color);
  }

  .preview:hover {
    opacity: 0.9;
  }

  .preview.compact {
    max-height: 100px;
  }

  .metrics {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 12px;
    padding: 8px;
    border-radius: 4px;
    background: var(--card-background-color);
  }

  .metrics .metric {
    flex: 1 1 33%;
    min-width: 100px;
    text-align: center;
    margin: 8px 0;
  }

  .metrics .value {
    font-size: 1.4em;
    font-weight: bold;
    line-height: 1.2;
  }

  .metrics .unit {
    font-size: 0.8em;
    opacity: 0.75;
  }

  .metrics .subtitle {
    font-size: 0.8em;
    opacity: 0.75;
  }

  .controls {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 12px;
  }

  .control-button {
    --mdc-icon-button-size: 44px;
    margin: 6px;
  }

  .control-button.active {
    color: var(--primary-color);
  }

  .speed-slider {
    width: 100%;
    margin-top: 12px;
  }

  .shortcuts {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 12px;
  }

  .shortcut {
    min-width: 50px;
    text-align: center;
    cursor: pointer;
    padding: 8px;
    border-radius: 4px;
  }

  .shortcut:hover {
    background: var(--secondary-background-color);
  }

  .shortcut .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    margin-bottom: 4px;
  }

  .shortcut .label {
    font-size: 0.8em;
  }
`;

export default styles;
