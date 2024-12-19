import{LitElement as i,html as e,css as t}from"lit";import{property as o,state as a,customElement as n}from"lit/decorators.js";import{fireEvent as s,hasConfigOrEntityChanged as c}from"custom-card-helpers";import{mdiPower as r,mdiFan as l,mdiLightbulb as h,mdiLockOutline as d,mdiVolumeHigh as f,mdiThermometer as u,mdiWaterPercent as g,mdiAirFilter as p}from"@mdi/js";function v(i,e,t,o){var a,n=arguments.length,s=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(i,e,t,o);else for(var c=i.length-1;c>=0;c--)(a=i[c])&&(s=(n<3?a(s):n>3?a(e,t,s):a(e,t))||s);return n>3&&s&&Object.defineProperty(e,t,s),s}"function"==typeof SuppressedError&&SuppressedError;let m=class extends i{setConfig(i){this._config=i}_valueChanged(i){const e=i.target;if(!e)return;const t=e.value,o=e.configValue;if(o){if(o.includes(".")){const[i,a]=o.split(".");this._config=Object.assign(Object.assign({},this._config),{[i]:Object.assign(Object.assign({},this._config[i]||{}),{[a]:e.hasAttribute("checked")?e.checked:t})})}else this._config=Object.assign(Object.assign({},this._config),{[o]:e.hasAttribute("checked")?e.checked:t});s(this,"config-changed",{config:this._config})}}render(){var i,t,o,a,n,s,c,r,l;if(!this.hass||!this._config)return e``;const h=Object.keys(this.hass.states).filter((i=>"fan"===i.split(".")[0]));return e`
      <div class="card-config">
        <div class="values">
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

          <div class="row">
            <ha-textfield
              label="Name"
              .value=${this._config.name||""}
              .configValue=${"name"}
              @input=${this._valueChanged}
            ></ha-textfield>
          </div>

          <div class="row">
            <div class="checkbox-group">
              <ha-formfield label="Show Name">
                <ha-switch
                  .checked=${!1!==(null===(i=this._config.show)||void 0===i?void 0:i.name)}
                  .configValue=${"show.name"}
                  @change=${this._valueChanged}
                ></ha-switch>
              </ha-formfield>

              <ha-formfield label="Show State">
                <ha-switch
                  .checked=${!1!==(null===(t=this._config.show)||void 0===t?void 0:t.state)}
                  .configValue=${"show.state"}
                  @change=${this._valueChanged}
                ></ha-switch>
              </ha-formfield>

              <ha-formfield label="Show Temperature">
                <ha-switch
                  .checked=${!1!==(null===(o=this._config.show)||void 0===o?void 0:o.temperature)}
                  .configValue=${"show.temperature"}
                  @change=${this._valueChanged}
                ></ha-switch>
              </ha-formfield>

              <ha-formfield label="Show Humidity">
                <ha-switch
                  .checked=${!1!==(null===(a=this._config.show)||void 0===a?void 0:a.humidity)}
                  .configValue=${"show.humidity"}
                  @change=${this._valueChanged}
                ></ha-switch>
              </ha-formfield>

              <ha-formfield label="Show Speed">
                <ha-switch
                  .checked=${!1!==(null===(n=this._config.show)||void 0===n?void 0:n.speed)}
                  .configValue=${"show.speed"}
                  @change=${this._valueChanged}
                ></ha-switch>
              </ha-formfield>

              <ha-formfield label="Show Filter Life">
                <ha-switch
                  .checked=${!1!==(null===(s=this._config.show)||void 0===s?void 0:s.filter_life)}
                  .configValue=${"show.filter_life"}
                  @change=${this._valueChanged}
                ></ha-switch>
              </ha-formfield>

              <ha-formfield label="Show Light">
                <ha-switch
                  .checked=${!1!==(null===(c=this._config.show)||void 0===c?void 0:c.light)}
                  .configValue=${"show.light"}
                  @change=${this._valueChanged}
                ></ha-switch>
              </ha-formfield>

              <ha-formfield label="Show Child Lock">
                <ha-switch
                  .checked=${!1!==(null===(r=this._config.show)||void 0===r?void 0:r.child_lock)}
                  .configValue=${"show.child_lock"}
                  @change=${this._valueChanged}
                ></ha-switch>
              </ha-formfield>

              <ha-formfield label="Show Buzzer">
                <ha-switch
                  .checked=${!1!==(null===(l=this._config.show)||void 0===l?void 0:l.buzzer)}
                  .configValue=${"show.buzzer"}
                  @change=${this._valueChanged}
                ></ha-switch>
              </ha-formfield>
            </div>
          </div>
        </div>
      </div>
    `}static get styles(){return t`
      .values {
        padding: 16px;
      }
      .row {
        margin-bottom: 16px;
      }
      .checkbox-group {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 8px;
      }
      ha-select {
        width: 100%;
      }
      ha-textfield {
        width: 100%;
      }
    `}};v([o({attribute:!1})],m.prototype,"hass",void 0),v([a()],m.prototype,"_config",void 0),m=v([n("air-purifier-card-editor")],m);var _=Object.freeze({__proto__:null,get AirPurifierCardEditor(){return m}});console.info("%c AIR-PURIFIER-CARD %c 1.0.3 ","color: white; background: #555555; font-weight: 700;","color: white; background: #00ff00; font-weight: 700;"),window.customCards=window.customCards||[],window.customCards.push({type:"air-purifier-card",name:"Xiaomi Air Purifier Card",description:"A beautiful card for Xiaomi Air Purifier MB3"});const b={show:{name:!0,state:!0,temperature:!0,humidity:!0,speed:!0,filter_life:!1,light:!1,child_lock:!1,buzzer:!1}},w=["Auto","Sleep","Favorite","None"],$={Silent:{name:"Silent",percentage:25,rpm:"300-400"},Low:{name:"Low",percentage:50,rpm:"400-500"},Medium:{name:"Medium",percentage:75,rpm:"500-600"},High:{name:"High",percentage:100,rpm:"600-800"}};let y=class extends i{static async getConfigElement(){return await Promise.resolve().then((function(){return _})),document.createElement("air-purifier-card-editor")}static getStubConfig(){return{entity:"fan.xiaomi_air_purifier",show:{name:!0,state:!0,temperature:!0,humidity:!0,speed:!0,filter_life:!1,light:!1,child_lock:!1,buzzer:!1}}}getCardSize(){return 3}setConfig(i){if(!i.entity||"fan"!==i.entity.split(".")[0])throw new Error("Specify an entity from within the fan domain.");this._config=Object.assign(Object.assign(Object.assign({},b),i),{show:Object.assign(Object.assign({},b.show),i.show||{})})}shouldUpdate(i){return!!i.has("_config")||c(this,i,!1)}_handlePowerClick(){if(!this.hass||!this._config)return;const i=this.hass.states[this._config.entity];i&&this.hass.callService("fan","on"===i.state?"turn_off":"turn_on",{entity_id:this._config.entity})}_handleSpeedClick(i){this.hass&&this._config&&this.hass.callService("fan","set_percentage",{entity_id:this._config.entity,percentage:$[i].percentage})}_handleModeChange(i){if(!this.hass||!this._config)return;const e=i.target.value;e&&this.hass.callService("fan","set_preset_mode",{entity_id:this._config.entity,preset_mode:e})}_handleChildLockToggle(){if(!this.hass||!this._config)return;const i=this._config.entity.replace("fan","switch").replace("air_purifier","child_lock"),e=this.hass.states[i];e&&this.hass.callService("switch","on"===e.state?"turn_off":"turn_on",{entity_id:i})}_handleLightToggle(){if(!this.hass||!this._config)return;const i=this._config.entity.replace("fan","light").replace("air_purifier","led"),e=this.hass.states[i];e&&this.hass.callService("light","on"===e.state?"turn_off":"turn_on",{entity_id:i})}_handleBuzzerToggle(){if(!this.hass||!this._config)return;const i=this._config.entity.replace("fan","switch").replace("air_purifier","buzzer"),e=this.hass.states[i];e&&this.hass.callService("switch","on"===e.state?"turn_off":"turn_on",{entity_id:i})}_getSpeedLevel(i){var e;return(null===(e=Object.entries($).find((([e,t])=>i<=t.percentage)))||void 0===e?void 0:e[0])||"High"}render(){var i,t,o,a,n,s,c,v;if(!this.hass||!this._config)return e``;const m=this.hass.states[this._config.entity];if(!m)return e`
        <hui-warning>
          Entity not found: ${this._config.entity}
        </hui-warning>
      `;const _=this._config.name||m.attributes.friendly_name||"",b=m.state,y=m.attributes.temperature||0,x=m.attributes.humidity||0,k=m.attributes.motor_speed||0,C=m.attributes.filter_life_remaining||0,z=m.attributes.pm25||0,S=m.attributes.preset_mode||"none",j=this._getSpeedLevel(k),O="on"===m.attributes.child_lock,L="on"===m.attributes.led,P="on"===m.attributes.buzzer;return e`
      <ha-card
        class="air-purifier-card ${"on"===b?"active":""}"
        .header=${!1!==(null===(i=this._config.show)||void 0===i?void 0:i.name)?_:void 0}
      >
        <div class="content">
          <div class="circle-container">
            <div class="circle">
              <div class="circle-info">
                <span class="pm25-value">${z}</span>
                <span class="pm25-label">PM2.5</span>
              </div>
              ${"on"===b&&!1!==(null===(t=this._config.show)||void 0===t?void 0:t.state)?e`
                <div class="circle-animation"></div>
              `:""}
            </div>
          </div>

          ${"on"===b?e`
            <div class="controls">
              <div class="mode-select">
                <ha-select
                  .value=${S}
                  @change=${this._handleModeChange}
                  class="mode-dropdown"
                >
                  ${w.map((i=>e`
                    <mwc-list-item .value=${i}>${i}</mwc-list-item>
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

                ${Object.entries($).map((([i,t])=>e`
                  <ha-icon-button
                    class="action-button ${j===i?"active":""}"
                    .path=${l}
                    @click=${()=>this._handleSpeedClick(i)}
                    .label=${t.name}
                  ></ha-icon-button>
                `))}

                ${!1!==(null===(o=this._config.show)||void 0===o?void 0:o.light)?e`
                  <ha-icon-button
                    class="action-button ${L?"active":""}"
                    .path=${h}
                    @click=${this._handleLightToggle}
                    .label=${"Light"}
                  ></ha-icon-button>
                `:""}

                ${!1!==(null===(a=this._config.show)||void 0===a?void 0:a.child_lock)?e`
                  <ha-icon-button
                    class="action-button ${O?"active":""}"
                    .path=${d}
                    @click=${this._handleChildLockToggle}
                    .label=${"Child Lock"}
                  ></ha-icon-button>
                `:""}

                ${!1!==(null===(n=this._config.show)||void 0===n?void 0:n.buzzer)?e`
                  <ha-icon-button
                    class="action-button ${P?"active":""}"
                    .path=${f}
                    @click=${this._handleBuzzerToggle}
                    .label=${"Buzzer"}
                  ></ha-icon-button>
                `:""}
              </div>

              <div class="info-row">
                ${!1!==(null===(s=this._config.show)||void 0===s?void 0:s.temperature)?e`
                  <div class="info-item">
                    <ha-svg-icon .path=${u}></ha-svg-icon>
                    <span>${y}°C</span>
                  </div>
                `:""}

                ${!1!==(null===(c=this._config.show)||void 0===c?void 0:c.humidity)?e`
                  <div class="info-item">
                    <ha-svg-icon .path=${g}></ha-svg-icon>
                    <span>${x}%</span>
                  </div>
                `:""}

                ${!1!==(null===(v=this._config.show)||void 0===v?void 0:v.filter_life)?e`
                  <div class="info-item">
                    <ha-svg-icon .path=${p}></ha-svg-icon>
                    <span>${C}%</span>
                  </div>
                `:""}
              </div>
            </div>
          `:e`
            <div class="power-button">
              <ha-icon-button
                class="action-button"
                .path=${r}
                @click=${this._handlePowerClick}
                .label=${"Power"}
              ></ha-icon-button>
            </div>
          `}
        </div>
      </ha-card>
    `}static get styles(){return t`
      :host {
        --circle-size: 120px;
        --circle-background-color: var(--card-background-color, #fff);
        --circle-color: var(--primary-color, #03a9f4);
        --circle-border-color: var(--divider-color, #e0e0e0);
      }

      .air-purifier-card {
        padding: 16px;
      }

      .content {
        padding: 16px;
      }

      .circle-container {
        display: flex;
        justify-content: center;
        margin-bottom: 16px;
      }

      .circle {
        position: relative;
        width: var(--circle-size);
        height: var(--circle-size);
        border-radius: 50%;
        background: var(--circle-background-color);
        border: 2px solid var(--circle-border-color);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .circle-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        z-index: 1;
      }

      .pm25-value {
        font-size: 24px;
        font-weight: bold;
        line-height: 1.2;
      }

      .pm25-label {
        font-size: 12px;
        opacity: 0.8;
      }

      .circle-animation {
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border: 2px solid var(--circle-color);
        border-radius: 50%;
        border-left-color: transparent;
        border-right-color: transparent;
        animation: rotate 2s linear infinite;
      }

      @keyframes rotate {
        100% {
          transform: rotate(360deg);
        }
      }

      .controls {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .mode-select {
        width: 100%;
      }

      .mode-dropdown {
        width: 100%;
      }

      .button-row {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 8px;
      }

      .action-button {
        --mdc-icon-button-size: 42px;
        color: var(--secondary-text-color);
      }

      .action-button.active {
        color: var(--primary-color);
      }

      .info-row {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 16px;
      }

      .info-item {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .power-button {
        display: flex;
        justify-content: center;
        margin-top: 16px;
      }

      ha-icon-button {
        position: relative;
      }

      ha-icon-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50%;
        background: currentColor;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
      }

      ha-icon-button:hover::before {
        opacity: 0.1;
      }

      ha-icon-button:active::before {
        opacity: 0.2;
      }
    `}};v([o({attribute:!1})],y.prototype,"hass",void 0),v([a()],y.prototype,"_config",void 0),y=v([n("air-purifier-card")],y);export{y as AirPurifierCard};
//# sourceMappingURL=ha-air-purifier-card.js.map
