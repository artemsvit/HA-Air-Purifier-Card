import{css as e,LitElement as t,html as i}from"lit";import{property as r,state as o,customElement as n}from"lit/decorators.js";import{hasConfigOrEntityChanged as s}from"custom-card-helpers";function a(e,t,i,r){var o,n=arguments.length,s=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,i,s):o(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s}"function"==typeof SuppressedError&&SuppressedError;const c=e`
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
`;var l={name:"Air Purifier Card",description:"A beautiful card for Xiaomi Air Purifier MB3",version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},d={invalid_config:"Invalid card configuration",missing_entity:"Entity is required",invalid_entity:"Entity must be from the fan domain"},h={on:"On",off:"Off",unavailable:"Unavailable",unknown:"Unknown"},u={auto:"Auto",sleep:"Sleep",favorite:"Favorite",none:"None"},p={silent:"Silent",low:"Low",medium:"Medium",high:"High"},m={temperature:"Temperature",humidity:"Humidity",filter_life:"Filter Life",pm25:"PM2.5",motor_speed:"Motor Speed"},f={power:"Power",light:"Light",child_lock:"Child Lock",buzzer:"Buzzer"},v={entity:"Entity",name:"Name",show_name:"Show Name",show_state:"Show State Animation",show_temperature:"Show Temperature",show_humidity:"Show Humidity",show_speed:"Show Speed",show_filter_life:"Show Filter Life",show_light:"Show Light Control",show_child_lock:"Show Child Lock",show_buzzer:"Show Buzzer",compact_view:"Compact View"},g={common:l,error:d,state:h,mode:u,speed:p,stats:m,controls:f,editor:v};const w={en:Object.freeze({__proto__:null,common:l,controls:f,default:g,editor:v,error:d,mode:u,speed:p,state:h,stats:m})},y="en";function b(e,t){return t.reduce(((e,t)=>{if(e&&"object"==typeof e&&t in e)return e[t]}),e)}function _(e,t,i){const r=(localStorage.getItem("selectedLanguage")||navigator.language.split("-")[0]||y).replace(/['"]+/g,"").replace("-","_"),o=e.split(".");let n="";try{n=b(w[r]||w[y],o)||e}catch(t){n=b(w[y],o)||e}return n}const $={Silent:{name:"Silent",percentage:25,rpm:"300-400"},Low:{name:"Low",percentage:50,rpm:"400-500"},Medium:{name:"Medium",percentage:75,rpm:"500-600"},High:{name:"High",percentage:100,rpm:"600-800"}},x=["Auto","Sleep","Favorite","None"],k={show:{name:!0,state:!0,temperature:!0,humidity:!0,speed:!0,filter_life:!1,light:!1,child_lock:!1,buzzer:!1},compact_view:!1,stats:[],shortcuts:[]};console.info("%c AIR-PURIFIER-CARD %c 1.0.0 ","color: white; background: #4CAF50; font-weight: 700;","color: #4CAF50; background: white; font-weight: 700;"),window.customCards=window.customCards||[],window.customCards.push({type:"ha-air-purifier-card",name:"Xiaomi Air Purifier Card",description:"A beautiful card for Xiaomi Air Purifier MB3"});let S=class extends t{constructor(){super(...arguments),this.requestInProgress=!1}static get styles(){return c}static getStubConfig(){return{entity:"fan.xiaomi_air_purifier",show:{name:!0,state:!0,temperature:!0,humidity:!0,speed:!0,filter_life:!1,light:!1,child_lock:!1,buzzer:!1}}}setConfig(e){this.config=function(e){var t,i,r,o,n,s,a,c,l,d,h,u;if(!e)throw new Error(_("error.invalid_config"));if(!e.entity)throw new Error(_("error.missing_entity"));if("fan"!==e.entity.split(".")[0])throw new Error(_("error.invalid_entity"));const p={name:null===(t=e.show_name)||void 0===t||t,state:null===(i=e.show_animation)||void 0===i||i,temperature:null===(r=e.show_temperature)||void 0===r||r,humidity:null===(o=e.show_humidity)||void 0===o||o,speed:null===(n=e.show_speed)||void 0===n||n,filter_life:null!==(s=e.show_filter_life)&&void 0!==s&&s,light:null!==(a=e.show_light_control)&&void 0!==a&&a,child_lock:null!==(c=e.show_child_lock)&&void 0!==c&&c,buzzer:null!==(l=e.show_buzzer)&&void 0!==l&&l};return{type:"custom:ha-air-purifier-card",entity:e.entity,name:e.name,show:p,compact_view:null!==(d=e.compact_view)&&void 0!==d?d:k.compact_view,stats:null!==(h=e.stats)&&void 0!==h?h:k.stats,shortcuts:null!==(u=e.shortcuts)&&void 0!==u?u:k.shortcuts}}(e)}shouldUpdate(e){return s(this,e,!1)}handleSpeedChange(e){const t=e.target.value;this.callService("fan.set_percentage",{percentage:t})}handleModeChange(e){this.callService("fan.set_preset_mode",{preset_mode:e})}handlePowerClick(){const e="on"===this.entity.state?"off":"on";this.callService(`fan.turn_${e}`,{})}handleControlClick(e,t){const i=`xiaomi_miio.fan_set_${e}`,r=t?{[e]:t}:{};this.callService(i,r)}async callService(e,t={}){if(!this.requestInProgress){this.requestInProgress=!0;try{await this.hass.callService(e.split(".")[0],e.split(".")[1],Object.assign({entity_id:this.config.entity},t))}catch(e){console.error("Error calling service:",e)}finally{this.requestInProgress=!1}}}get entity(){return this.hass.states[this.config.entity]}get currentSpeedLevel(){const e=this.entity.attributes.percentage||0;return Object.values($).find((t=>e<=t.percentage))}get currentPresetMode(){return this.entity.attributes.preset_mode||"None"}render(){var e;if(!this.config||!this.hass||!this.entity)return i``;const{show:t={},compact_view:r=!1}=this.config,o="on"===this.entity.state;return i`
      <ha-card>
        <div class="content">
          ${t.name?i`
            <div class="header">
              <div class="name">${this.config.name||this.entity.attributes.friendly_name}</div>
              <state-badge
                .hass=${this.hass}
                .stateObj=${this.entity}
                .overrideIcon=${o?"mdi:fan":"mdi:fan-off"}
              ></state-badge>
            </div>
          `:""}

          <div class="preview ${o?"working":""} ${r?"compact":""}">
            <!-- Add preview content here -->
          </div>

          ${t.speed?i`
            <div class="speed-slider">
              <ha-slider
                .min=${0}
                .max=${100}
                .step=${1}
                .value=${this.entity.attributes.percentage||0}
                .disabled=${!o}
                @change=${this.handleSpeedChange}
              ></ha-slider>
              <div class="speed-level">
                ${(null===(e=this.currentSpeedLevel)||void 0===e?void 0:e.name)||_("speed.none")}
              </div>
            </div>
          `:""}

          <div class="metrics">
            ${t.temperature?i`
              <div class="metric">
                <div class="value">
                  ${this.entity.attributes.temperature||0}
                  <span class="unit">°C</span>
                </div>
                <div class="subtitle">${_("stats.temperature")}</div>
              </div>
            `:""}

            ${t.humidity?i`
              <div class="metric">
                <div class="value">
                  ${this.entity.attributes.humidity||0}
                  <span class="unit">%</span>
                </div>
                <div class="subtitle">${_("stats.humidity")}</div>
              </div>
            `:""}

            ${t.filter_life?i`
              <div class="metric">
                <div class="value">
                  ${this.entity.attributes.filter_life_remaining||0}
                  <span class="unit">%</span>
                </div>
                <div class="subtitle">${_("stats.filter_life")}</div>
              </div>
            `:""}
          </div>

          <div class="controls">
            <ha-icon-button
              class="control-button ${o?"active":""}"
              .path=${o?"mdi:power":"mdi:power-off"}
              @click=${this.handlePowerClick}
            ></ha-icon-button>

            ${t.light?i`
              <ha-icon-button
                class="control-button ${"on"===this.entity.attributes.led?"active":""}"
                .path=${"mdi:lightbulb"}
                @click=${()=>this.handleControlClick("led","on"===this.entity.attributes.led?"off":"on")}
              ></ha-icon-button>
            `:""}

            ${t.child_lock?i`
              <ha-icon-button
                class="control-button ${"on"===this.entity.attributes.child_lock?"active":""}"
                .path=${"mdi:lock"}
                @click=${()=>this.handleControlClick("child_lock","on"===this.entity.attributes.child_lock?"off":"on")}
              ></ha-icon-button>
            `:""}

            ${t.buzzer?i`
              <ha-icon-button
                class="control-button ${"on"===this.entity.attributes.buzzer?"active":""}"
                .path=${"mdi:volume-high"}
                @click=${()=>this.handleControlClick("buzzer","on"===this.entity.attributes.buzzer?"off":"on")}
              ></ha-icon-button>
            `:""}
          </div>

          <div class="shortcuts">
            ${x.map((e=>i`
              <div
                class="shortcut ${this.currentPresetMode===e?"active":""}"
                @click=${()=>this.handleModeChange(e)}
              >
                <div class="icon">
                  <ha-icon .icon=${`mdi:${e.toLowerCase()}`}></ha-icon>
                </div>
                <div class="label">${_(`mode.${e.toLowerCase()}`)}</div>
              </div>
            `))}
          </div>
        </div>
      </ha-card>
    `}};a([r({attribute:!1})],S.prototype,"hass",void 0),a([o()],S.prototype,"config",void 0),a([o()],S.prototype,"requestInProgress",void 0),S=a([n("ha-air-purifier-card")],S);export{S as AirPurifierCard};
//# sourceMappingURL=ha-air-purifier-card.js.map
