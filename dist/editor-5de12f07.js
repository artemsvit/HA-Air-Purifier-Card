import{_ as e,e as a,s as i,i as n,x as t}from"./ha-air-purifier-card-c3cee0ac.js";var s,c;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(s||(s={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(c||(c={}));let o=class extends i{setConfig(e){if(!e||!e.entity)throw new Error("Please specify an entity")}static get styles(){return n`
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
    `}render(){return t`
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
      </div>
    `}_valueChanged(e){if(!this.config||!this.hass)return;const a=e.target;if(this.config[a.configValue]===a.value)return;!function(e,a,i,n){n=n||{},i=null==i?{}:i;var t=new Event(a,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});t.detail=i,e.dispatchEvent(t)}(this,"config-changed",{config:Object.assign(Object.assign({},this.config),{[a.configValue]:a.value})})}};o=e([a("air-purifier-card-editor")],o);export{o as AirPurifierCardEditor};
