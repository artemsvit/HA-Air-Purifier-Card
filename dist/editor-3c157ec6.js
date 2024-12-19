import{_ as e,n as a,e as i,s as o,i as t,x as s}from"./ha-air-purifier-card-9575ceac.js";var n,c;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(n||(n={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(c||(c={}));let l=class extends o{setConfig(e){this.config=e}static get styles(){return t`
      .form {
        display: flex;
        flex-direction: column;
      }
      .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px 0;
      }
    `}render(){return this.hass?s`
      <div class="form">
        <div class="row">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this.config.entity}
            .configValue=${"entity"}
            domain-filter="fan"
            @value-changed=${this._valueChanged}
            allow-custom-entity
          ></ha-entity-picker>
        </div>

        <div class="row">
          <ha-formfield .label=${"Show Name"}>
            <ha-switch
              .checked=${!1!==this.config.show_name}
              .configValue=${"show_name"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="row">
          <ha-formfield .label=${"Show Toolbar"}>
            <ha-switch
              .checked=${!1!==this.config.show_toolbar}
              .configValue=${"show_toolbar"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>
    `:s``}_valueChanged(e){var a;if(!this.config||!this.hass)return;const i=e.target;if(this.config[i.configValue]===i.value)return;!function(e,a,i,o){o=o||{},i=null==i?{}:i;var t=new Event(a,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});t.detail=i,e.dispatchEvent(t)}(this,"config-changed",{config:Object.assign(Object.assign({},this.config),{[i.configValue]:null!==(a=i.checked)&&void 0!==a?a:i.value})})}};e([a({attribute:!1})],l.prototype,"hass",void 0),e([a({attribute:!1})],l.prototype,"config",void 0),l=e([i("air-purifier-card-editor")],l);export{l as AirPurifierCardEditor};
