import{LitElement as i,html as e,css as t}from"lit";import{property as a,customElement as o}from"lit/decorators.js";import{hasConfigOrEntityChanged as s}from"custom-card-helpers";import{mdiPower as r,mdiFan as n,mdiLightbulb as c,mdiLockOutline as l,mdiVolumeHigh as h,mdiThermometer as d,mdiWaterPercent as f,mdiAirFilter as u}from"@mdi/js";function g(i,e,t,a){var o,s=arguments.length,r=s<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(i,e,t,a);else for(var n=i.length-1;n>=0;n--)(o=i[n])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r}"function"==typeof SuppressedError&&SuppressedError;let p=class extends i{setConfig(i){this._config=Object.assign({show:{name:!0,state:!0,temperature:!0,humidity:!0,speed:!0,filter_life:!1,light:!1,child_lock:!1,buzzer:!1}},i)}_valueChanged(i){if(!this._config||!this.hass)return;const e=i.target;if(!e.configValue)return;const t=void 0!==e.checked?e.checked:e.value,a=e.configValue;if(a.includes(".")){const[i,e]=a.split(".");this._config=Object.assign(Object.assign({},this._config),{[i]:Object.assign(Object.assign({},this._config[i]),{[e]:t})})}else this._config=Object.assign(Object.assign({},this._config),{[a]:t});const o=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(o)}render(){var i,t,a,o,s,r,n,c,l;if(!this.hass||!this._config)return e``;const h=Object.keys(this.hass.states).filter((i=>"fan."===i.substr(0,4)));return e`
      <div class="card-config">
        <div class="section">
          <div class="row">
            <ha-textfield
              label="Name"
              .value=${this._config.name||""}
              .configValue=${"name"}
              @input=${this._valueChanged}
            ></ha-textfield>
          </div>

          <div class="row">
            <ha-select
              label="Entity"
              .value=${this._config.entity}
              .configValue=${"entity"}
              @change=${this._valueChanged}
              required
            >
              ${h.map((i=>e`
                <mwc-list-item .value=${i}>${i}</mwc-list-item>
              `))}
            </ha-select>
          </div>
        </div>

        <div class="section">
          <div class="row">
            <span class="section-header">Display Options</span>
          </div>

          <div class="row">
            <ha-formfield label="Show Name">
              <ha-switch
                .checked=${!1!==(null===(i=this._config.show)||void 0===i?void 0:i.name)}
                .configValue=${"show.name"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield label="Show State Animation">
              <ha-switch
                .checked=${!1!==(null===(t=this._config.show)||void 0===t?void 0:t.state)}
                .configValue=${"show.state"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield label="Show Temperature">
              <ha-switch
                .checked=${!1!==(null===(a=this._config.show)||void 0===a?void 0:a.temperature)}
                .configValue=${"show.temperature"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield label="Show Humidity">
              <ha-switch
                .checked=${!1!==(null===(o=this._config.show)||void 0===o?void 0:o.humidity)}
                .configValue=${"show.humidity"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield label="Show Speed">
              <ha-switch
                .checked=${!1!==(null===(s=this._config.show)||void 0===s?void 0:s.speed)}
                .configValue=${"show.speed"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield label="Show Filter Life">
              <ha-switch
                .checked=${!0===(null===(r=this._config.show)||void 0===r?void 0:r.filter_life)}
                .configValue=${"show.filter_life"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>
        </div>

        <div class="section">
          <div class="row">
            <span class="section-header">Control Options</span>
          </div>

          <div class="row">
            <ha-formfield label="Show Light Control">
              <ha-switch
                .checked=${!0===(null===(n=this._config.show)||void 0===n?void 0:n.light)}
                .configValue=${"show.light"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield label="Show Child Lock">
              <ha-switch
                .checked=${!0===(null===(c=this._config.show)||void 0===c?void 0:c.child_lock)}
                .configValue=${"show.child_lock"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield label="Show Buzzer">
              <ha-switch
                .checked=${!0===(null===(l=this._config.show)||void 0===l?void 0:l.buzzer)}
                .configValue=${"show.buzzer"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>
        </div>
      </div>
    `}static get styles(){return t`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      .section {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .section-header {
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-text-color);
        border-bottom: 1px solid var(--divider-color);
        padding-bottom: 8px;
      }

      .row {
        display: flex;
        align-items: center;
        padding: 0 16px;
      }

      ha-textfield {
        width: 100%;
      }

      ha-select {
        width: 100%;
      }

      ha-formfield {
        width: 100%;
        --mdc-typography-body2-font-size: 14px;
      }
    `}};g([a({attribute:!1})],p.prototype,"hass",void 0),g([a({attribute:!1})],p.prototype,"_config",void 0),p=g([o("ha-air-purifier-card-editor")],p),window.customCards=window.customCards||[],window.customCards.push({type:"ha-air-purifier-card",name:"Xiaomi Air Purifier Card",description:"A beautiful card for Xiaomi Air Purifier MB3"});const v={show:{name:!0,state:!0,temperature:!0,humidity:!0,speed:!0,filter_life:!1,light:!1,child_lock:!1,buzzer:!1}},m={Auto:"Auto",Sleep:"Sleep",Favorite:"Favorite",None:"None"},b={Silent:{name:"Silent",percentage:25,rpm:"300-400"},Low:{name:"Low",percentage:50,rpm:"400-500"},Medium:{name:"Medium",percentage:75,rpm:"500-600"},High:{name:"High",percentage:100,rpm:"600-800"}};let w=class extends i{static getConfigElement(){return document.createElement("ha-air-purifier-card-editor")}static getStubConfig(){return{type:"custom:ha-air-purifier-card",entity:"fan.xiaomi_air_purifier",show:{name:!0,state:!0,temperature:!0,humidity:!0,speed:!0,filter_life:!1,light:!1,child_lock:!1,buzzer:!1}}}setConfig(i){if(!i.entity||"fan"!==i.entity.split(".")[0])throw new Error("Specify an entity from within the fan domain.");this._config=Object.assign(Object.assign(Object.assign({},v),i),{show:Object.assign(Object.assign({},v.show),i.show||{})})}shouldUpdate(i){return!!i.has("_config")||s(this,i,!1)}_handlePowerClick(){if(!this.hass||!this._config)return;const i=this.hass.states[this._config.entity];i&&this.hass.callService("fan","on"===i.state?"turn_off":"turn_on",{entity_id:this._config.entity})}_handleSpeedClick(i){this.hass&&this._config&&this.hass.callService("fan","set_percentage",{entity_id:this._config.entity,percentage:b[i].percentage})}_handleModeChange(i){if(!this.hass||!this._config)return;const e=i.target.value;e&&this.hass.callService("fan","set_preset_mode",{entity_id:this._config.entity,preset_mode:e})}_handleChildLockToggle(){if(!this.hass||!this._config)return;const i=this._config.entity.replace("fan","switch").replace("air_purifier","child_lock"),e=this.hass.states[i];e&&this.hass.callService("switch","on"===e.state?"turn_off":"turn_on",{entity_id:i})}_handleLightToggle(){if(!this.hass||!this._config)return;const i=this._config.entity.replace("fan","light").replace("air_purifier","led"),e=this.hass.states[i];e&&this.hass.callService("light","on"===e.state?"turn_off":"turn_on",{entity_id:i})}_handleBuzzerToggle(){if(!this.hass||!this._config)return;const i=this._config.entity.replace("fan","switch").replace("air_purifier","buzzer"),e=this.hass.states[i];e&&this.hass.callService("switch","on"===e.state?"turn_off":"turn_on",{entity_id:i})}_getSpeedLevel(i){var e;return(null===(e=Object.entries(b).find((([e,t])=>i<=t.percentage)))||void 0===e?void 0:e[0])||"High"}render(){var i,t,a,o,s,g,p,v,w;if(!this.hass||!this._config)return e``;const _=this.hass.states[this._config.entity];if(!_)return e`
        <hui-warning>
          Entity not found: ${this._config.entity}
        </hui-warning>
      `;const $=this._config.name||_.attributes.friendly_name||"",y=_.state,x=_.attributes.temperature||0,k=_.attributes.humidity||0,z=_.attributes.motor_speed||0,C=_.attributes.filter_life_remaining||0,S=_.attributes.pm25||0,j=_.attributes.preset_mode||"none",O=this._getSpeedLevel(z),L="on"===_.attributes.child_lock,V="on"===_.attributes.led,E="on"===_.attributes.buzzer;return e`
      <ha-card
        class="air-purifier-card ${"on"===y?"active":""}"
        .header=${!1!==(null===(i=this._config.show)||void 0===i?void 0:i.name)?$:void 0}
      >
        <div class="content">
          <div class="circle-container">
            <div class="circle">
              <div class="circle-info">
                <span class="pm25-value">${S}</span>
                <span class="pm25-label">PM2.5</span>
              </div>
              ${"on"===y&&!1!==(null===(t=this._config.show)||void 0===t?void 0:t.state)?e`
                <div class="circle-animation"></div>
              `:""}
            </div>
          </div>

          ${"on"===y?e`
            <div class="controls">
              <div class="mode-select">
                <ha-select
                  .value=${j}
                  @selected=${this._handleModeChange}
                  class="mode-dropdown"
                >
                  ${Object.entries(m).map((([i,t])=>e`
                    <mwc-list-item .value=${t}>${i}</mwc-list-item>
                  `))}
                </ha-select>
              </div>

              <div class="button-row">
                <ha-icon-button
                  class="action-button"
                  .path=${r}
                  @click=${this._handlePowerClick}
                  .label=${"Power"}
                ></ha-icon-button>

                ${Object.entries(b).map((([i,t])=>e`
                  <ha-icon-button
                    class="action-button ${O===i?"active":""}"
                    .path=${n}
                    @click=${()=>this._handleSpeedClick(i)}
                    .label=${t.name}
                  ></ha-icon-button>
                `))}

                ${!1!==(null===(a=this._config.show)||void 0===a?void 0:a.light)?e`
                  <ha-icon-button
                    class="action-button ${V?"active":""}"
                    .path=${c}
                    @click=${this._handleLightToggle}
                    .label=${"Light"}
                  ></ha-icon-button>
                `:""}

                ${!1!==(null===(o=this._config.show)||void 0===o?void 0:o.child_lock)?e`
                  <ha-icon-button
                    class="action-button ${L?"active":""}"
                    .path=${l}
                    @click=${this._handleChildLockToggle}
                    .label=${"Child Lock"}
                  ></ha-icon-button>
                `:""}

                ${!1!==(null===(s=this._config.show)||void 0===s?void 0:s.buzzer)?e`
                  <ha-icon-button
                    class="action-button ${E?"active":""}"
                    .path=${h}
                    @click=${this._handleBuzzerToggle}
                    .label=${"Buzzer"}
                  ></ha-icon-button>
                `:""}
              </div>

              <div class="info-row">
                ${!1!==(null===(g=this._config.show)||void 0===g?void 0:g.temperature)?e`
                  <div class="info-item">
                    <ha-svg-icon .path=${d}></ha-svg-icon>
                    <span>${x}°C</span>
                  </div>
                `:""}

                ${!1!==(null===(p=this._config.show)||void 0===p?void 0:p.humidity)?e`
                  <div class="info-item">
                    <ha-svg-icon .path=${f}></ha-svg-icon>
                    <span>${k}%</span>
                  </div>
                `:""}

                ${!1!==(null===(v=this._config.show)||void 0===v?void 0:v.speed)?e`
                  <div class="info-item">
                    <ha-svg-icon .path=${n}></ha-svg-icon>
                    <span>${z} RPM</span>
                  </div>
                `:""}

                ${!1!==(null===(w=this._config.show)||void 0===w?void 0:w.filter_life)?e`
                  <div class="info-item">
                    <ha-svg-icon .path=${u}></ha-svg-icon>
                    <span>${C}%</span>
                  </div>
                `:""}
              </div>
            </div>
          `:""}
        </div>
      </ha-card>
    `}static get styles(){return t`
      :host {
        --circle-size: 150px;
        --circle-background: rgba(var(--rgb-primary-color), 0.1);
        --circle-active-background: rgba(var(--rgb-primary-color), 0.2);
        --button-active-background: rgba(var(--rgb-primary-color), 0.2);
        --circle-border-size: 4px;
      }

      .air-purifier-card {
        background: var(--ha-card-background, var(--card-background-color, white));
        border-radius: var(--ha-card-border-radius, 12px);
        box-shadow: var(--ha-card-box-shadow, none);
        color: var(--primary-text-color);
        padding: 16px;
        width: 100%;
      }

      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .circle-container {
        position: relative;
        width: var(--circle-size);
        height: var(--circle-size);
        margin: 16px 0;
      }

      .circle {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: var(--circle-background);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .active .circle {
        background: var(--circle-active-background);
      }

      .circle-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1;
      }

      .pm25-value {
        font-size: 2.5em;
        font-weight: bold;
        line-height: 1;
      }

      .pm25-label {
        font-size: 0.9em;
        opacity: 0.8;
        margin-top: 4px;
      }

      .circle-animation {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: var(--circle-border-size) solid var(--primary-color);
        border-radius: 50%;
        animation: rotate 2s linear infinite;
      }

      .controls {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .mode-select {
        width: 100%;
      }

      .mode-dropdown {
        width: 100%;
        --mdc-theme-primary: var(--primary-color);
        --mdc-select-fill-color: var(--secondary-background-color);
        border-radius: var(--ha-card-border-radius, 12px);
      }

      .button-row {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 8px;
        padding: 8px;
        background: var(--secondary-background-color);
        border-radius: var(--ha-card-border-radius, 12px);
      }

      .action-button {
        --mdc-icon-button-size: 48px;
        color: var(--primary-text-color);
        transition: background-color 0.2s;
        border-radius: 50%;
      }

      .action-button.active {
        background: var(--button-active-background);
        color: var(--primary-color);
      }

      .info-row {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 16px;
        width: 100%;
        padding: 8px;
        background: var(--secondary-background-color);
        border-radius: var(--ha-card-border-radius, 12px);
      }

      .info-item {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--primary-text-color);
      }

      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `}};g([a({attribute:!1})],w.prototype,"hass",void 0),g([a({attribute:!1})],w.prototype,"_config",void 0),w=g([o("ha-air-purifier-card")],w);export{w as HaAirPurifierCard};
//# sourceMappingURL=ha-air-purifier-card.js.map
