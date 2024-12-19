var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};function e(e,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}var i=function(){return i=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var o in e=arguments[i])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};function r(t,e,i,r){var o,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(a<3?o(n):a>3?o(e,i,n):o(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}function o(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],r=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const a=window,n=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),c=new WeakMap;let d=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=c.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&c.set(e,t))}return t}toString(){return this.cssText}};const l=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new d(i,t,s)},p=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new d("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var u;const h=window,m=h.trustedTypes,f=m?m.emptyScript:"",v=h.reactiveElementPolyfillSupport,b={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),y={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:g},_="finalized";let x=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const r=this._$Ep(i,e);void 0!==r&&(this._$Ev.set(r,i),t.push(r))})),t}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const o=this[t];this[e]=r,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||y}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(p(t))}else void 0!==t&&e.push(p(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{n?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),r=a.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=y){var r;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const a=(void 0!==(null===(r=i.converter)||void 0===r?void 0:r.toAttribute)?i.converter:b).toAttribute(e,i.type);this._$El=t,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$El=null}}_$AK(t,e){var i;const r=this.constructor,o=r._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=r.getPropertyOptions(o),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:b;this._$El=o,this[o]=a.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var w;x[_]=!0,x.elementProperties=new Map,x.elementStyles=[],x.shadowRootOptions={mode:"open"},null==v||v({ReactiveElement:x}),(null!==(u=h.reactiveElementVersions)&&void 0!==u?u:h.reactiveElementVersions=[]).push("1.6.3");const $=window,A=$.trustedTypes,k=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,S="?"+E,R=`<${S}>`,H=document,P=()=>H.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,O="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,M=/>/g,F=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,N=/"/g,U=/^(?:script|style|textarea|title)$/i,B=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),j=new WeakMap,G=H.createTreeWalker(H,129,null,!1);function X(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}let q=class t{constructor({strings:e,_$litType$:i},r){let o;this.parts=[];let a=0,n=0;const s=e.length-1,c=this.parts,[d,l]=((t,e)=>{const i=t.length-1,r=[];let o,a=2===e?"<svg>":"",n=I;for(let e=0;e<i;e++){const i=t[e];let s,c,d=-1,l=0;for(;l<i.length&&(n.lastIndex=l,c=n.exec(i),null!==c);)l=n.lastIndex,n===I?"!--"===c[1]?n=D:void 0!==c[1]?n=M:void 0!==c[2]?(U.test(c[2])&&(o=RegExp("</"+c[2],"g")),n=F):void 0!==c[3]&&(n=F):n===F?">"===c[0]?(n=null!=o?o:I,d=-1):void 0===c[1]?d=-2:(d=n.lastIndex-c[2].length,s=c[1],n=void 0===c[3]?F:'"'===c[3]?N:L):n===N||n===L?n=F:n===D||n===M?n=I:(n=F,o=void 0);const p=n===F&&t[e+1].startsWith("/>")?" ":"";a+=n===I?i+R:d>=0?(r.push(s),i.slice(0,d)+C+i.slice(d)+E+p):i+E+(-2===d?(r.push(void 0),e):p)}return[X(t,a+(t[i]||"<?>")+(2===e?"</svg>":"")),r]})(e,i);if(this.el=t.createElement(d,r),G.currentNode=this.el.content,2===i){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=G.nextNode())&&c.length<s;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith(C)||e.startsWith(E)){const i=l[n++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+C).split(E),e=/([.?@])?(.*)/.exec(i);c.push({type:1,index:a,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?tt:"@"===e[1]?et:K})}else c.push({type:6,index:a})}for(const e of t)o.removeAttribute(e)}if(U.test(o.tagName)){const t=o.textContent.split(E),e=t.length-1;if(e>0){o.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],P()),G.nextNode(),c.push({type:2,index:++a});o.append(t[e],P())}}}else if(8===o.nodeType)if(o.data===S)c.push({type:2,index:a});else{let t=-1;for(;-1!==(t=o.data.indexOf(E,t+1));)c.push({type:7,index:a}),t+=E.length-1}a++}}static createElement(t,e){const i=H.createElement("template");return i.innerHTML=t,i}};function W(t,e,i=t,r){var o,a,n,s;if(e===B)return e;let c=void 0!==r?null===(o=i._$Co)||void 0===o?void 0:o[r]:i._$Cl;const d=T(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==d&&(null===(a=null==c?void 0:c._$AO)||void 0===a||a.call(c,!1),void 0===d?c=void 0:(c=new d(t),c._$AT(t,i,r)),void 0!==r?(null!==(n=(s=i)._$Co)&&void 0!==n?n:s._$Co=[])[r]=c:i._$Cl=c),void 0!==c&&(e=W(t,c._$AS(t,e.values),c,r)),e}let Z=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:r}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:H).importNode(i,!0);G.currentNode=o;let a=G.nextNode(),n=0,s=0,c=r[0];for(;void 0!==c;){if(n===c.index){let e;2===c.type?e=new Y(a,a.nextSibling,this,t):1===c.type?e=new c.ctor(a,c.name,c.strings,this,t):6===c.type&&(e=new it(a,this,t)),this._$AV.push(e),c=r[++s]}n!==(null==c?void 0:c.index)&&(a=G.nextNode(),n++)}return G.currentNode=H,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Y=class t{constructor(t,e,i,r){var o;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cp=null===(o=null==r?void 0:r.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),T(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>z(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==V&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(H.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:r}=t,o="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=q.createElement(X(r.h,r.h[0]),this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new Z(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new q(t)),e}T(e){z(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,o=0;for(const a of e)o===i.length?i.push(r=new t(this.k(P()),this.k(P()),this,this.options)):r=i[o],r._$AI(a),o++;o<i.length&&(this._$AR(r&&r._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}},K=class{constructor(t,e,i,r,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const o=this.strings;let a=!1;if(void 0===o)t=W(this,t,e,0),a=!T(t)||t!==this._$AH&&t!==B,a&&(this._$AH=t);else{const r=t;let n,s;for(t=o[0],n=0;n<o.length-1;n++)s=W(this,r[i+n],e,n),s===B&&(s=this._$AH[n]),a||(a=!T(s)||s!==this._$AH[n]),s===V?t=V:t!==V&&(t+=(null!=s?s:"")+o[n+1]),this._$AH[n]=s}a&&!r&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}},J=class extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}};const Q=A?A.emptyScript:"";let tt=class extends K{constructor(){super(...arguments),this.type=4}j(t){t&&t!==V?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}},et=class extends K{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:V)===B)return;const r=this._$AH,o=t===V&&r!==V||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,a=t!==V&&(r===V||o);o&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}},it=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}};const rt=$.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ot;null==rt||rt(q,Y),(null!==(w=$.litHtmlVersions)&&void 0!==w?w:$.litHtmlVersions=[]).push("2.8.0");const at=window,nt=at.trustedTypes,st=nt?nt.createPolicy("lit-html",{createHTML:t=>t}):void 0,ct="$lit$",dt=`lit$${(Math.random()+"").slice(9)}$`,lt="?"+dt,pt=`<${lt}>`,ut=document,ht=()=>ut.createComment(""),mt=t=>null===t||"object"!=typeof t&&"function"!=typeof t,ft=Array.isArray,vt="[ \t\n\f\r]",bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gt=/-->/g,yt=/>/g,_t=RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),xt=/'/g,wt=/"/g,$t=/^(?:script|style|textarea|title)$/i,At=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),kt=Symbol.for("lit-noChange"),Ct=Symbol.for("lit-nothing"),Et=new WeakMap,St=ut.createTreeWalker(ut,129,null,!1);function Rt(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==st?st.createHTML(e):e}const Ht=(t,e)=>{const i=t.length-1,r=[];let o,a=2===e?"<svg>":"",n=bt;for(let e=0;e<i;e++){const i=t[e];let s,c,d=-1,l=0;for(;l<i.length&&(n.lastIndex=l,c=n.exec(i),null!==c);)l=n.lastIndex,n===bt?"!--"===c[1]?n=gt:void 0!==c[1]?n=yt:void 0!==c[2]?($t.test(c[2])&&(o=RegExp("</"+c[2],"g")),n=_t):void 0!==c[3]&&(n=_t):n===_t?">"===c[0]?(n=null!=o?o:bt,d=-1):void 0===c[1]?d=-2:(d=n.lastIndex-c[2].length,s=c[1],n=void 0===c[3]?_t:'"'===c[3]?wt:xt):n===wt||n===xt?n=_t:n===gt||n===yt?n=bt:(n=_t,o=void 0);const p=n===_t&&t[e+1].startsWith("/>")?" ":"";a+=n===bt?i+pt:d>=0?(r.push(s),i.slice(0,d)+ct+i.slice(d)+dt+p):i+dt+(-2===d?(r.push(void 0),e):p)}return[Rt(t,a+(t[i]||"<?>")+(2===e?"</svg>":"")),r]};class Pt{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,a=0;const n=t.length-1,s=this.parts,[c,d]=Ht(t,e);if(this.el=Pt.createElement(c,i),St.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=St.nextNode())&&s.length<n;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith(ct)||e.startsWith(dt)){const i=d[a++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+ct).split(dt),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?Dt:"?"===e[1]?Ft:"@"===e[1]?Lt:It})}else s.push({type:6,index:o})}for(const e of t)r.removeAttribute(e)}if($t.test(r.tagName)){const t=r.textContent.split(dt),e=t.length-1;if(e>0){r.textContent=nt?nt.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],ht()),St.nextNode(),s.push({type:2,index:++o});r.append(t[e],ht())}}}else if(8===r.nodeType)if(r.data===lt)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(dt,t+1));)s.push({type:7,index:o}),t+=dt.length-1}o++}}static createElement(t,e){const i=ut.createElement("template");return i.innerHTML=t,i}}function Tt(t,e,i=t,r){var o,a,n,s;if(e===kt)return e;let c=void 0!==r?null===(o=i._$Co)||void 0===o?void 0:o[r]:i._$Cl;const d=mt(e)?void 0:e._$litDirective$;return(null==c?void 0:c.constructor)!==d&&(null===(a=null==c?void 0:c._$AO)||void 0===a||a.call(c,!1),void 0===d?c=void 0:(c=new d(t),c._$AT(t,i,r)),void 0!==r?(null!==(n=(s=i)._$Co)&&void 0!==n?n:s._$Co=[])[r]=c:i._$Cl=c),void 0!==c&&(e=Tt(t,c._$AS(t,e.values),c,r)),e}class zt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:r}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:ut).importNode(i,!0);St.currentNode=o;let a=St.nextNode(),n=0,s=0,c=r[0];for(;void 0!==c;){if(n===c.index){let e;2===c.type?e=new Ot(a,a.nextSibling,this,t):1===c.type?e=new c.ctor(a,c.name,c.strings,this,t):6===c.type&&(e=new Nt(a,this,t)),this._$AV.push(e),c=r[++s]}n!==(null==c?void 0:c.index)&&(a=St.nextNode(),n++)}return St.currentNode=ut,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Ot{constructor(t,e,i,r){var o;this.type=2,this._$AH=Ct,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cp=null===(o=null==r?void 0:r.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Tt(this,t,e),mt(t)?t===Ct||null==t||""===t?(this._$AH!==Ct&&this._$AR(),this._$AH=Ct):t!==this._$AH&&t!==kt&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>ft(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Ct&&mt(this._$AH)?this._$AA.nextSibling.data=t:this.$(ut.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:r}=t,o="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=Pt.createElement(Rt(r.h,r.h[0]),this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new zt(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=Et.get(t.strings);return void 0===e&&Et.set(t.strings,e=new Pt(t)),e}T(t){ft(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new Ot(this.k(ht()),this.k(ht()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class It{constructor(t,e,i,r,o){this.type=1,this._$AH=Ct,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Ct}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const o=this.strings;let a=!1;if(void 0===o)t=Tt(this,t,e,0),a=!mt(t)||t!==this._$AH&&t!==kt,a&&(this._$AH=t);else{const r=t;let n,s;for(t=o[0],n=0;n<o.length-1;n++)s=Tt(this,r[i+n],e,n),s===kt&&(s=this._$AH[n]),a||(a=!mt(s)||s!==this._$AH[n]),s===Ct?t=Ct:t!==Ct&&(t+=(null!=s?s:"")+o[n+1]),this._$AH[n]=s}a&&!r&&this.j(t)}j(t){t===Ct?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Dt extends It{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Ct?void 0:t}}const Mt=nt?nt.emptyScript:"";class Ft extends It{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Ct?this.element.setAttribute(this.name,Mt):this.element.removeAttribute(this.name)}}class Lt extends It{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Tt(this,t,e,0))&&void 0!==i?i:Ct)===kt)return;const r=this._$AH,o=t===Ct&&r!==Ct||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,a=t!==Ct&&(r===Ct||o);o&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Tt(this,t)}}const Ut=at.litHtmlPolyfillSupport;null==Ut||Ut(Pt,Ot),(null!==(ot=at.litHtmlVersions)&&void 0!==ot?ot:at.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Bt,Vt;class jt extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var r,o;const a=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let n=a._$litPart$;if(void 0===n){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;a._$litPart$=n=new Ot(e.insertBefore(ht(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return kt}}jt.finalized=!0,jt._$litElement$=!0,null===(Bt=globalThis.litElementHydrateSupport)||void 0===Bt||Bt.call(globalThis,{LitElement:jt});const Gt=globalThis.litElementPolyfillSupport;null==Gt||Gt({LitElement:jt}),(null!==(Vt=globalThis.litElementVersions)&&void 0!==Vt?Vt:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,qt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Wt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):qt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function Zt(t){return Wt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=({finisher:t,descriptor:e})=>(i,r)=>{var o;if(void 0===r){const r=null!==(o=i.originalKey)&&void 0!==o?o:i.key,a=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(i.key)}:{...i,key:r};return null!=t&&(a.finisher=function(e){t(e,r)}),a}{const o=i.constructor;void 0!==e&&Object.defineProperty(i,r,e(r)),null==t||t(o,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function Kt(t){return Yt({finisher:(e,i)=>{Object.assign(e.prototype[i],t)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Jt(t,e){return Yt({descriptor:e=>{const i={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};return i}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qt(t){return Yt({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var te,ee,ie;null===(te=window.HTMLSlotElement)||void 0===te||te.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ee||(ee={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(ie||(ie={}));var re="M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const oe=l`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let ae=class extends jt{render(){return At`<span><slot></slot></span>`}};ae.styles=[oe],ae=r([Xt("mwc-icon")],ae);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ne=()=>{},se={get passive(){return!1}};document.addEventListener("x",ne,se),document.removeEventListener("x",ne);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ce extends jt{click(){if(this.mdcRoot)return this.mdcRoot.focus(),void this.mdcRoot.click();super.click()}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var de=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),le={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},pe={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},ue={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var he=["touchstart","pointerdown","mousedown","keydown"],me=["touchend","pointerup","mouseup","contextmenu"],fe=[],ve=function(t){function r(e){var o=t.call(this,i(i({},r.defaultAdapter),e))||this;return o.activationAnimationHasEnded=!1,o.activationTimer=0,o.fgDeactivationRemovalTimer=0,o.fgScale="0",o.frame={width:0,height:0},o.initialSize=0,o.layoutFrame=0,o.maxRadius=0,o.unboundedCoords={left:0,top:0},o.activationState=o.defaultActivationState(),o.activationTimerCallback=function(){o.activationAnimationHasEnded=!0,o.runDeactivationUXLogicIfReady()},o.activateHandler=function(t){o.activateImpl(t)},o.deactivateHandler=function(){o.deactivateImpl()},o.focusHandler=function(){o.handleFocus()},o.blurHandler=function(){o.handleBlur()},o.resizeHandler=function(){o.layout()},o}return e(r,t),Object.defineProperty(r,"cssClasses",{get:function(){return le},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return pe},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return ue},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),r.prototype.init=function(){var t=this,e=this.supportsPressRipple();if(this.registerRootHandlers(e),e){var i=r.cssClasses,o=i.ROOT,a=i.UNBOUNDED;requestAnimationFrame((function(){t.adapter.addClass(o),t.adapter.isUnbounded()&&(t.adapter.addClass(a),t.layoutInternal())}))}},r.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(r.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(r.cssClasses.FG_DEACTIVATION));var e=r.cssClasses,i=e.ROOT,o=e.UNBOUNDED;requestAnimationFrame((function(){t.adapter.removeClass(i),t.adapter.removeClass(o),t.removeCssVars()}))}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},r.prototype.activate=function(t){this.activateImpl(t)},r.prototype.deactivate=function(){this.deactivateImpl()},r.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame((function(){t.layoutInternal(),t.layoutFrame=0}))},r.prototype.setUnbounded=function(t){var e=r.cssClasses.UNBOUNDED;t?this.adapter.addClass(e):this.adapter.removeClass(e)},r.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter.addClass(r.cssClasses.BG_FOCUSED)}))},r.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter.removeClass(r.cssClasses.BG_FOCUSED)}))},r.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},r.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},r.prototype.registerRootHandlers=function(t){var e,i;if(t){try{for(var r=o(he),a=r.next();!a.done;a=r.next()){var n=a.value;this.adapter.registerInteractionHandler(n,this.activateHandler)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(i=r.return)&&i.call(r)}finally{if(e)throw e.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},r.prototype.registerDeactivationHandlers=function(t){var e,i;if("keydown"===t.type)this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=o(me),a=r.next();!a.done;a=r.next()){var n=a.value;this.adapter.registerDocumentInteractionHandler(n,this.deactivateHandler)}}catch(t){e={error:t}}finally{try{a&&!a.done&&(i=r.return)&&i.call(r)}finally{if(e)throw e.error}}},r.prototype.deregisterRootHandlers=function(){var t,e;try{for(var i=o(he),r=i.next();!r.done;r=i.next()){var a=r.value;this.adapter.deregisterInteractionHandler(a,this.activateHandler)}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},r.prototype.deregisterDeactivationHandlers=function(){var t,e;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=o(me),r=i.next();!r.done;r=i.next()){var a=r.value;this.adapter.deregisterDocumentInteractionHandler(a,this.deactivateHandler)}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}},r.prototype.removeCssVars=function(){var t=this,e=r.strings;Object.keys(e).forEach((function(i){0===i.indexOf("VAR_")&&t.adapter.updateCssVariable(e[i],null)}))},r.prototype.activateImpl=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var r=this.previousActivationEvent;if(!(r&&void 0!==t&&r.type!==t.type))i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&fe.length>0&&fe.some((function(t){return e.adapter.containsEventTarget(t)}))?this.resetActivationState():(void 0!==t&&(fe.push(t.target),this.registerDeactivationHandlers(t)),i.wasElementMadeActive=this.checkElementMadeActive(t),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame((function(){fe=[],i.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(i.wasElementMadeActive=e.checkElementMadeActive(t),i.wasElementMadeActive&&e.animateActivation()),i.wasElementMadeActive||(e.activationState=e.defaultActivationState())})))}}},r.prototype.checkElementMadeActive=function(t){return void 0===t||"keydown"!==t.type||this.adapter.isSurfaceActive()},r.prototype.animateActivation=function(){var t=this,e=r.strings,i=e.VAR_FG_TRANSLATE_START,o=e.VAR_FG_TRANSLATE_END,a=r.cssClasses,n=a.FG_DEACTIVATION,s=a.FG_ACTIVATION,c=r.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var d="",l="";if(!this.adapter.isUnbounded()){var p=this.getFgTranslationCoordinates(),u=p.startPoint,h=p.endPoint;d=u.x+"px, "+u.y+"px",l=h.x+"px, "+h.y+"px"}this.adapter.updateCssVariable(i,d),this.adapter.updateCssVariable(o,l),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(n),this.adapter.computeBoundingRect(),this.adapter.addClass(s),this.activationTimer=setTimeout((function(){t.activationTimerCallback()}),c)},r.prototype.getFgTranslationCoordinates=function(){var t,e=this.activationState,i=e.activationEvent;return t=e.wasActivatedByPointer?function(t,e,i){if(!t)return{x:0,y:0};var r,o,a=e.x,n=e.y,s=a+i.left,c=n+i.top;if("touchstart"===t.type){var d=t;r=d.changedTouches[0].pageX-s,o=d.changedTouches[0].pageY-c}else{var l=t;r=l.pageX-s,o=l.pageY-c}return{x:r,y:o}}(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame.width/2,y:this.frame.height/2},{startPoint:t={x:t.x-this.initialSize/2,y:t.y-this.initialSize/2},endPoint:{x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2}}},r.prototype.runDeactivationUXLogicIfReady=function(){var t=this,e=r.cssClasses.FG_DEACTIVATION,i=this.activationState,o=i.hasDeactivationUXRun,a=i.isActivated;(o||!a)&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(e),this.fgDeactivationRemovalTimer=setTimeout((function(){t.adapter.removeClass(e)}),ue.FG_DEACTIVATION_MS))},r.prototype.rmBoundedActivationClasses=function(){var t=r.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},r.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout((function(){return t.previousActivationEvent=void 0}),r.numbers.TAP_DELAY_MS)},r.prototype.deactivateImpl=function(){var t=this,e=this.activationState;if(e.isActivated){var r=i({},e);e.isProgrammatic?(requestAnimationFrame((function(){t.animateDeactivation(r)})),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame((function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(r),t.resetActivationState()})))}},r.prototype.animateDeactivation=function(t){var e=t.wasActivatedByPointer,i=t.wasElementMadeActive;(e||i)&&this.runDeactivationUXLogicIfReady()},r.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var e=Math.max(this.frame.height,this.frame.width);this.maxRadius=this.adapter.isUnbounded()?e:Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2))+r.numbers.PADDING;var i=Math.floor(e*r.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&i%2!=0?this.initialSize=i-1:this.initialSize=i,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},r.prototype.updateLayoutCssVars=function(){var t=r.strings,e=t.VAR_FG_SIZE,i=t.VAR_LEFT,o=t.VAR_TOP,a=t.VAR_FG_SCALE;this.adapter.updateCssVariable(e,this.initialSize+"px"),this.adapter.updateCssVariable(a,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(o,this.unboundedCoords.top+"px"))},r}(de);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const be=1,ge=t=>(...e)=>({_$litDirective$:t,values:e});let ye=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=ge(class extends ye{constructor(t){var e;if(super(t),t.type!==be||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,r;if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.nt)||void 0===i?void 0:i.has(t))&&this.it.add(t);return this.render(e)}const o=t.element.classList;this.it.forEach((t=>{t in e||(o.remove(t),this.it.delete(t))}));for(const t in e){const i=!!e[t];i===this.it.has(t)||(null===(r=this.nt)||void 0===r?void 0:r.has(t))||(i?(o.add(t),this.it.add(t)):(o.remove(t),this.it.delete(t)))}return B}}),xe="important",we=" !"+xe,$e=ge(class extends ye{constructor(t){var e;if(super(t),t.type!==be||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ht){this.ht=new Set;for(const t in e)this.ht.add(t);return this.render(e)}this.ht.forEach((t=>{null==e[t]&&(this.ht.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const r=e[t];if(null!=r){this.ht.add(t);const e="string"==typeof r&&r.endsWith(we);t.includes("-")||e?i.setProperty(t,e?r.slice(0,-11):r,e?xe:""):i[t]=r}}return B}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ae extends ce{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.internalUseStateLayerCustomProperties=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=ve}get isActive(){return t=this.parentElement||this,e=":active",(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var t,e}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(t,e)=>{switch(t){case"--mdc-ripple-fg-scale":this.fgScale=e;break;case"--mdc-ripple-fg-size":this.fgSize=e;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=e;break;case"--mdc-ripple-fg-translate-start":this.translateStart=e;break;case"--mdc-ripple-left":this.leftPos=e;break;case"--mdc-ripple-top":this.topPos=e}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(t){this.waitForFoundation((()=>{this.mdcFoundation.activate(t)}))}endPress(){this.waitForFoundation((()=>{this.mdcFoundation.deactivate()}))}startFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleFocus()}))}endFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleBlur()}))}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(t){this.mdcFoundation?t():this.updateComplete.then(t)}update(t){t.has("disabled")&&this.disabled&&this.endHover(),super.update(t)}render(){const t=this.activated&&(this.primary||!this.accent),e=this.selected&&(this.primary||!this.accent),i={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":t,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":e,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-surface--internal-use-state-layer-custom-properties":this.internalUseStateLayerCustomProperties};return At`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${_e(i)}"
          style="${$e({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}r([Jt(".mdc-ripple-surface")],Ae.prototype,"mdcRoot",void 0),r([Wt({type:Boolean})],Ae.prototype,"primary",void 0),r([Wt({type:Boolean})],Ae.prototype,"accent",void 0),r([Wt({type:Boolean})],Ae.prototype,"unbounded",void 0),r([Wt({type:Boolean})],Ae.prototype,"disabled",void 0),r([Wt({type:Boolean})],Ae.prototype,"activated",void 0),r([Wt({type:Boolean})],Ae.prototype,"selected",void 0),r([Wt({type:Boolean})],Ae.prototype,"internalUseStateLayerCustomProperties",void 0),r([Zt()],Ae.prototype,"hovering",void 0),r([Zt()],Ae.prototype,"bgFocused",void 0),r([Zt()],Ae.prototype,"fgActivation",void 0),r([Zt()],Ae.prototype,"fgDeactivation",void 0),r([Zt()],Ae.prototype,"fgScale",void 0),r([Zt()],Ae.prototype,"fgSize",void 0),r([Zt()],Ae.prototype,"translateStart",void 0),r([Zt()],Ae.prototype,"translateEnd",void 0),r([Zt()],Ae.prototype,"leftPos",void 0),r([Zt()],Ae.prototype,"topPos",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ke=l`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Ce=class extends Ae{};function Ee(t,e,i){if(void 0!==e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
return function(t,e,i){const r=t.constructor;if(!i){const t=`__${e}`;if(!(i=r.getPropertyDescriptor(e,t)))throw new Error("@ariaProperty must be used after a @property decorator")}const o=i;let a="";if(!o.set)throw new Error(`@ariaProperty requires a setter for ${e}`);if(t.dispatchWizEvent)return i;const n={configurable:!0,enumerable:!0,set(t){if(""===a){const t=r.getPropertyOptions(e);a="string"==typeof t.attribute?t.attribute:e}this.hasAttribute(a)&&this.removeAttribute(a),o.set.call(this,t)}};return o.get&&(n.get=function(){return o.get.call(this)}),n}(t,e,i);throw new Error("@ariaProperty only supports TypeScript Decorators")}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */Ce.styles=[ke],Ce=r([Xt("mwc-ripple")],Ce);class Se{constructor(t){this.startPress=e=>{t().then((t=>{t&&t.startPress(e)}))},this.endPress=()=>{t().then((t=>{t&&t.endPress()}))},this.startFocus=()=>{t().then((t=>{t&&t.startFocus()}))},this.endFocus=()=>{t().then((t=>{t&&t.endFocus()}))},this.startHover=()=>{t().then((t=>{t&&t.startHover()}))},this.endHover=()=>{t().then((t=>{t&&t.endHover()}))}}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=t=>null!=t?t:V
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;class He extends jt{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.fullwidth=!1,this.icon="",this.label="",this.expandContent=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new Se((()=>(this.shouldRenderRipple=!0,this.ripple)))}renderOverlay(){return At``}renderRipple(){const t=this.raised||this.unelevated;return this.shouldRenderRipple?At`<mwc-ripple class="ripple" .primary="${!t}" .disabled="${this.disabled}"></mwc-ripple>`:""}focus(){const t=this.buttonElement;t&&(this.rippleHandlers.startFocus(),t.focus())}blur(){const t=this.buttonElement;t&&(this.rippleHandlers.endFocus(),t.blur())}getRenderClasses(){return{"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense}}render(){return At`
      <button
          id="button"
          class="mdc-button ${_e(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}"
          aria-haspopup="${Re(this.ariaHasPopup)}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon&&!this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${_e({flex:this.expandContent})}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon&&this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
      </button>`}renderIcon(){return At`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`}handleRippleActivate(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}He.shadowRootOptions={mode:"open",delegatesFocus:!0},r([Ee,Wt({type:String,attribute:"aria-haspopup"})],He.prototype,"ariaHasPopup",void 0),r([Wt({type:Boolean,reflect:!0})],He.prototype,"raised",void 0),r([Wt({type:Boolean,reflect:!0})],He.prototype,"unelevated",void 0),r([Wt({type:Boolean,reflect:!0})],He.prototype,"outlined",void 0),r([Wt({type:Boolean})],He.prototype,"dense",void 0),r([Wt({type:Boolean,reflect:!0})],He.prototype,"disabled",void 0),r([Wt({type:Boolean,attribute:"trailingicon"})],He.prototype,"trailingIcon",void 0),r([Wt({type:Boolean,reflect:!0})],He.prototype,"fullwidth",void 0),r([Wt({type:String})],He.prototype,"icon",void 0),r([Wt({type:String})],He.prototype,"label",void 0),r([Wt({type:Boolean})],He.prototype,"expandContent",void 0),r([Jt("#button")],He.prototype,"buttonElement",void 0),r([Qt("mwc-ripple")],He.prototype,"ripple",void 0),r([Zt()],He.prototype,"shouldRenderRipple",void 0),r([Kt({passive:!0})],He.prototype,"handleRippleActivate",null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Pe=l`.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{display:none}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + 4px );width:calc( 100% + 4px );display:block}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{border-color:CanvasText}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Te=class extends He{};Te.styles=[Pe],Te=r([Xt("mwc-button")],Te);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ze extends jt{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.shouldRenderRipple=!1,this.rippleHandlers=new Se((()=>(this.shouldRenderRipple=!0,this.ripple)))}renderRipple(){return this.shouldRenderRipple?At`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}focus(){const t=this.buttonElement;t&&(this.rippleHandlers.startFocus(),t.focus())}blur(){const t=this.buttonElement;t&&(this.rippleHandlers.endFocus(),t.blur())}render(){return At`<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel||this.icon}"
        aria-haspopup="${Re(this.ariaHasPopup)}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    ${this.icon?At`<i class="material-icons">${this.icon}</i>`:""}
    <span
      ><slot></slot
    ></span>
  </button>`}handleRippleMouseDown(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleTouchStart(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}r([Wt({type:Boolean,reflect:!0})],ze.prototype,"disabled",void 0),r([Wt({type:String})],ze.prototype,"icon",void 0),r([Ee,Wt({type:String,attribute:"aria-label"})],ze.prototype,"ariaLabel",void 0),r([Ee,Wt({type:String,attribute:"aria-haspopup"})],ze.prototype,"ariaHasPopup",void 0),r([Jt("button")],ze.prototype,"buttonElement",void 0),r([Qt("mwc-ripple")],ze.prototype,"ripple",void 0),r([Zt()],ze.prototype,"shouldRenderRipple",void 0),r([Kt({passive:!0})],ze.prototype,"handleRippleMouseDown",null),r([Kt({passive:!0})],ze.prototype,"handleRippleTouchStart",null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Oe=l`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:48px;max-width:48px}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Ie=class extends ze{};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
var De,Me;Ie.styles=[Oe],Ie=r([Xt("mwc-icon-button")],Ie);const Fe=null!==(Me=null===(De=window.ShadyDOM)||void 0===De?void 0:De.inUse)&&void 0!==Me&&Me;class Le extends ce{constructor(){super(...arguments),this.disabled=!1,this.containingForm=null,this.formDataListener=t=>{this.disabled||this.setFormData(t.formData)}}findFormElement(){if(!this.shadowRoot||Fe)return null;const t=this.getRootNode().querySelectorAll("form");for(const e of Array.from(t))if(e.contains(this))return e;return null}connectedCallback(){var t;super.connectedCallback(),this.containingForm=this.findFormElement(),null===(t=this.containingForm)||void 0===t||t.addEventListener("formdata",this.formDataListener)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.containingForm)||void 0===t||t.removeEventListener("formdata",this.formDataListener),this.containingForm=null}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",(t=>{this.dispatchEvent(new Event("change",t))}))}}
/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function Ne(t,e,r){var a=function(t,e){var r=new Map;Ue.has(t)||Ue.set(t,{isEnabled:!0,getObservers:function(t){var e=r.get(t)||[];return r.has(t)||r.set(t,e),e},installedProperties:new Set});var a=Ue.get(t);if(a.installedProperties.has(e))return a;var n=function(t,e){var i,r=t;for(;r&&!(i=Object.getOwnPropertyDescriptor(r,e));)r=Object.getPrototypeOf(r);return i}(t,e)||{configurable:!0,enumerable:!0,value:t[e],writable:!0},s=i({},n),c=n.get,d=n.set;if("value"in n){delete s.value,delete s.writable;var l=n.value;c=function(){return l},n.writable&&(d=function(t){l=t})}c&&(s.get=function(){return c.call(this)});d&&(s.set=function(t){var i,r,n=c?c.call(this):t;if(d.call(this,t),a.isEnabled&&(!c||t!==n))try{for(var s=o(a.getObservers(e)),l=s.next();!l.done;l=s.next()){(0,l.value)(t,n)}}catch(t){i={error:t}}finally{try{l&&!l.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}});return a.installedProperties.add(e),Object.defineProperty(t,e,s),a}(t,e),n=a.getObservers(e);return n.push(r),function(){n.splice(n.indexOf(r),1)}}Le.shadowRootOptions={mode:"open",delegatesFocus:!0},r([Wt({type:Boolean})],Le.prototype,"disabled",void 0);var Ue=new WeakMap;
/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Be,Ve,je=function(t){function i(e){var i=t.call(this,e)||this;return i.unobserves=new Set,i}return e(i,t),i.prototype.destroy=function(){t.prototype.destroy.call(this),this.unobserve()},i.prototype.observe=function(t,e){var i,r,a=this,n=[];try{for(var s=o(Object.keys(e)),c=s.next();!c.done;c=s.next()){var d=c.value,l=e[d].bind(this);n.push(this.observeProperty(t,d,l))}}catch(t){i={error:t}}finally{try{c&&!c.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}var p=function(){var t,e;try{for(var i=o(n),r=i.next();!r.done;r=i.next()){(0,r.value)()}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}a.unobserves.delete(p)};return this.unobserves.add(p),p},i.prototype.observeProperty=function(t,e,i){return Ne(t,e,i)},i.prototype.setObserversEnabled=function(t,e){!function(t,e){var i=Ue.get(t);i&&(i.isEnabled=e)}(t,e)},i.prototype.unobserve=function(){var t,e;try{for(var i=o(function(t,e,i){if(i||2===arguments.length)for(var r,o=0,a=e.length;o<a;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}([],function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var r,o,a=i.call(t),n=[];try{for(;(void 0===e||e-- >0)&&!(r=a.next()).done;)n.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(i=a.return)&&i.call(a)}finally{if(o)throw o.error}}return n}(this.unobserves))),r=i.next();!r.done;r=i.next()){(0,r.value)()}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}},i}(de);
/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */!function(t){t.PROCESSING="mdc-switch--processing",t.SELECTED="mdc-switch--selected",t.UNSELECTED="mdc-switch--unselected"}(Be||(Be={})),function(t){t.RIPPLE=".mdc-switch__ripple"}(Ve||(Ve={}));
/**
 * @license
 * Copyright 2021 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ge=function(t){function i(e){var i=t.call(this,e)||this;return i.handleClick=i.handleClick.bind(i),i}return e(i,t),i.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},i.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},i.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},i}(je);!function(t){function i(){return null!==t&&t.apply(this,arguments)||this}e(i,t),i.prototype.init=function(){t.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},i.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(Be.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(Be.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},i.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},i.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,Be.PROCESSING)},i.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,Be.SELECTED),this.toggleClass(!this.adapter.state.selected,Be.UNSELECTED)},i.prototype.toggleClass=function(t,e){t?this.adapter.addClass(e):this.adapter.removeClass(e)}}(Ge);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Xe extends Le{constructor(){super(...arguments),this.processing=!1,this.selected=!1,this.ariaLabel="",this.ariaLabelledBy="",this.shouldRenderRipple=!1,this.rippleHandlers=new Se((()=>(this.shouldRenderRipple=!0,this.ripple))),this.name="",this.value="on",this.mdcFoundationClass=Ge}setFormData(t){this.name&&this.selected&&t.append(this.name,this.value)}click(){var t,e;this.disabled||(null===(t=this.mdcRoot)||void 0===t||t.focus(),null===(e=this.mdcRoot)||void 0===e||e.click())}render(){return At`
      <button
        type="button"
        class="mdc-switch ${_e(this.getRenderClasses())}"
        role="switch"
        aria-checked="${this.selected}"
        aria-label="${Re(this.ariaLabel||void 0)}"
        aria-labelledby="${Re(this.ariaLabelledBy||void 0)}"
        .disabled=${this.disabled}
        @click=${this.handleClick}
        @focus="${this.handleFocus}"
        @blur="${this.handleBlur}"
        @pointerdown="${this.handlePointerDown}"
        @pointerup="${this.handlePointerUp}"
        @pointerenter="${this.handlePointerEnter}"
        @pointerleave="${this.handlePointerLeave}"
      >
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__handle-track">
          ${this.renderHandle()}
        </div>
      </button>

      <input
        type="checkbox"
        aria-hidden="true"
        name="${this.name}"
        .checked=${this.selected}
        .value=${this.value}
      >
    `}getRenderClasses(){return{"mdc-switch--processing":this.processing,"mdc-switch--selected":this.selected,"mdc-switch--unselected":!this.selected}}renderHandle(){return At`
      <div class="mdc-switch__handle">
        ${this.renderShadow()}
        ${this.renderRipple()}
        <div class="mdc-switch__icons">
          ${this.renderOnIcon()}
          ${this.renderOffIcon()}
        </div>
      </div>
    `}renderShadow(){return At`
      <div class="mdc-switch__shadow">
        <div class="mdc-elevation-overlay"></div>
      </div>
    `}renderRipple(){return this.shouldRenderRipple?At`
        <div class="mdc-switch__ripple">
          <mwc-ripple
            internalUseStateLayerCustomProperties
            .disabled="${this.disabled}"
            unbounded>
          </mwc-ripple>
        </div>
      `:At``}renderOnIcon(){return At`
      <svg class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">
        <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
      </svg>
    `}renderOffIcon(){return At`
      <svg class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">
        <path d="M20 13H4v-2h16v2z" />
      </svg>
    `}handleClick(){var t;null===(t=this.mdcFoundation)||void 0===t||t.handleClick()}handleFocus(){this.rippleHandlers.startFocus()}handleBlur(){this.rippleHandlers.endFocus()}handlePointerDown(t){t.target.setPointerCapture(t.pointerId),this.rippleHandlers.startPress(t)}handlePointerUp(){this.rippleHandlers.endPress()}handlePointerEnter(){this.rippleHandlers.startHover()}handlePointerLeave(){this.rippleHandlers.endHover()}createAdapter(){return{state:this}}}r([Wt({type:Boolean})],Xe.prototype,"processing",void 0),r([Wt({type:Boolean})],Xe.prototype,"selected",void 0),r([Ee,Wt({type:String,attribute:"aria-label"})],Xe.prototype,"ariaLabel",void 0),r([Ee,Wt({type:String,attribute:"aria-labelledby"})],Xe.prototype,"ariaLabelledBy",void 0),r([Qt("mwc-ripple")],Xe.prototype,"ripple",void 0),r([Zt()],Xe.prototype,"shouldRenderRipple",void 0),r([Wt({type:String,reflect:!0})],Xe.prototype,"name",void 0),r([Wt({type:String})],Xe.prototype,"value",void 0),r([Jt("input")],Xe.prototype,"formElement",void 0),r([Jt(".mdc-switch")],Xe.prototype,"mdcRoot",void 0),r([Kt({passive:!0})],Xe.prototype,"handlePointerDown",null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const qe=l`.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative}.mdc-switch:disabled{cursor:default;pointer-events:none}.mdc-switch__track{overflow:hidden;position:relative;width:100%}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%}@media screen and (forced-colors: active){.mdc-switch__track::before,.mdc-switch__track::after{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(-100%)}[dir=rtl] .mdc-switch__track::after,.mdc-switch__track[dir=rtl]::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track[dir=rtl]::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0)}[dir=rtl] .mdc-switch__handle-track,.mdc-switch__handle-track[dir=rtl]{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,.mdc-switch--selected .mdc-switch__handle-track[dir=rtl]{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto}[dir=rtl] .mdc-switch__handle,.mdc-switch__handle[dir=rtl]{left:auto;right:0}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media screen and (forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1}.mdc-switch:disabled .mdc-switch__ripple{display:none}.mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-flex;outline:none}input{display:none}.mdc-switch{width:36px;width:var(--mdc-switch-track-width, 36px)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after{background:#6200ee;background:var(--mdc-switch-selected-handle-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:#310077;background:var(--mdc-switch-selected-hover-handle-color, #310077)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:#310077;background:var(--mdc-switch-selected-focus-handle-color, #310077)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:#310077;background:var(--mdc-switch-selected-pressed-handle-color, #310077)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after{background:#424242;background:var(--mdc-switch-disabled-selected-handle-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:#616161;background:var(--mdc-switch-unselected-handle-color, #616161)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-hover-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-focus-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-pressed-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after{background:#424242;background:var(--mdc-switch-disabled-unselected-handle-color, #424242)}.mdc-switch .mdc-switch__handle::before{background:#fff;background:var(--mdc-switch-handle-surface-color, var(--mdc-theme-surface, #fff))}.mdc-switch:enabled .mdc-switch__shadow{--mdc-elevation-box-shadow-for-gss:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-switch-handle-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-switch:disabled .mdc-switch__shadow{--mdc-elevation-box-shadow-for-gss:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-switch-disabled-handle-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-switch .mdc-switch__focus-ring-wrapper,.mdc-switch .mdc-switch__handle{height:20px;height:var(--mdc-switch-handle-height, 20px)}.mdc-switch:disabled .mdc-switch__handle::after{opacity:0.38;opacity:var(--mdc-switch-disabled-handle-opacity, 0.38)}.mdc-switch .mdc-switch__handle{border-radius:10px;border-radius:var(--mdc-switch-handle-shape, 10px)}.mdc-switch .mdc-switch__handle{width:20px;width:var(--mdc-switch-handle-width, 20px)}.mdc-switch .mdc-switch__handle-track{width:calc(100% - 20px);width:calc(100% - var(--mdc-switch-handle-width, 20px))}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:0.38;opacity:var(--mdc-switch-disabled-selected-icon-opacity, 0.38)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:0.38;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 0.38)}.mdc-switch.mdc-switch--selected .mdc-switch__icon{width:18px;width:var(--mdc-switch-selected-icon-size, 18px);height:18px;height:var(--mdc-switch-selected-icon-size, 18px)}.mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:18px;width:var(--mdc-switch-unselected-icon-size, 18px);height:18px;height:var(--mdc-switch-unselected-icon-size, 18px)}.mdc-switch .mdc-switch__ripple{height:48px;height:var(--mdc-switch-state-layer-size, 48px);width:48px;width:var(--mdc-switch-state-layer-size, 48px)}.mdc-switch .mdc-switch__track{height:14px;height:var(--mdc-switch-track-height, 14px)}.mdc-switch:disabled .mdc-switch__track{opacity:0.12;opacity:var(--mdc-switch-disabled-track-opacity, 0.12)}.mdc-switch:enabled .mdc-switch__track::after{background:#d7bbff;background:var(--mdc-switch-selected-track-color, #d7bbff)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:#d7bbff;background:var(--mdc-switch-selected-hover-track-color, #d7bbff)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:#d7bbff;background:var(--mdc-switch-selected-focus-track-color, #d7bbff)}.mdc-switch:enabled:active .mdc-switch__track::after{background:#d7bbff;background:var(--mdc-switch-selected-pressed-track-color, #d7bbff)}.mdc-switch:disabled .mdc-switch__track::after{background:#424242;background:var(--mdc-switch-disabled-selected-track-color, #424242)}.mdc-switch:enabled .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-track-color, #e0e0e0)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-hover-track-color, #e0e0e0)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-focus-track-color, #e0e0e0)}.mdc-switch:enabled:active .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-pressed-track-color, #e0e0e0)}.mdc-switch:disabled .mdc-switch__track::before{background:#424242;background:var(--mdc-switch-disabled-unselected-track-color, #424242)}.mdc-switch .mdc-switch__track{border-radius:7px;border-radius:var(--mdc-switch-track-shape, 7px)}.mdc-switch.mdc-switch--selected{--mdc-ripple-focus-state-layer-color:var(--mdc-switch-selected-focus-state-layer-color, var(--mdc-theme-primary, #6200ee));--mdc-ripple-focus-state-layer-opacity:var(--mdc-switch-selected-focus-state-layer-opacity, 0.12);--mdc-ripple-hover-state-layer-color:var(--mdc-switch-selected-hover-state-layer-color, var(--mdc-theme-primary, #6200ee));--mdc-ripple-hover-state-layer-opacity:var(--mdc-switch-selected-hover-state-layer-opacity, 0.04);--mdc-ripple-pressed-state-layer-color:var(--mdc-switch-selected-pressed-state-layer-color, var(--mdc-theme-primary, #6200ee));--mdc-ripple-pressed-state-layer-opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active){--mdc-ripple-hover-state-layer-color:var(--mdc-switch-selected-focus-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--selected:enabled:active{--mdc-ripple-hover-state-layer-color:var(--mdc-switch-selected-pressed-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--unselected{--mdc-ripple-focus-state-layer-color:var(--mdc-switch-unselected-focus-state-layer-color, #424242);--mdc-ripple-focus-state-layer-opacity:var(--mdc-switch-unselected-focus-state-layer-opacity, 0.12);--mdc-ripple-hover-state-layer-color:var(--mdc-switch-unselected-hover-state-layer-color, #424242);--mdc-ripple-hover-state-layer-opacity:var(--mdc-switch-unselected-hover-state-layer-opacity, 0.04);--mdc-ripple-pressed-state-layer-color:var(--mdc-switch-unselected-pressed-state-layer-color, #424242);--mdc-ripple-pressed-state-layer-opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active){--mdc-ripple-hover-state-layer-color:var(--mdc-switch-unselected-focus-state-layer-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled:active{--mdc-ripple-hover-state-layer-color:var(--mdc-switch-unselected-pressed-state-layer-color, #424242)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-switch:disabled .mdc-switch__handle::after{opacity:1;opacity:var(--mdc-switch-disabled-handle-opacity, 1)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-selected-icon-color, ButtonText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-selected-icon-color, GrayText)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-unselected-icon-color, ButtonText)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-unselected-icon-color, GrayText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-selected-icon-opacity, 1)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 1)}.mdc-switch:disabled .mdc-switch__track{opacity:1;opacity:var(--mdc-switch-disabled-track-opacity, 1)}}`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let We=class extends Xe{};We.styles=[qe],We=r([Xt("mwc-switch")],We);let Ze=class extends jt{setConfig(t){this._config=t}render(){return this.hass&&this._config?At`
      <div class="card-config">
        <div class="side-by-side">
          <ha-entity-picker
            .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (Required)"
            .hass=${this.hass}
            .value=${this._config.entity}
            .configValue=${"entity"}
            .includeDomains=${["fan"]}
            @value-changed=${this._valueChanged}
            allow-custom-entity
          ></ha-entity-picker>
        </div>
        <div class="side-by-side">
          <paper-input
            label="Name (Optional)"
            .value=${this._config.name}
            .configValue=${"name"}
            @value-changed=${this._valueChanged}
          ></paper-input>
        </div>
      </div>
    `:At``}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;if(e.configValue)if(""===e.value){const t=Object.assign({},this._config);delete t[e.configValue],this._config=t}else this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value});!function(t,e,i,r){r=r||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});o.detail=i,t.dispatchEvent(o)}(this,"config-changed",{config:this._config})}static get styles(){return l`
      .side-by-side {
        display: flex;
        flex-flow: row wrap;
        margin-bottom: 8px;
      }
      .side-by-side > * {
        flex: 1;
        padding-right: 4px;
      }
      .side-by-side > *:last-child {
        flex: 1;
        padding-right: 0;
      }
      .card-config {
        padding: 16px;
      }
    `}};r([Wt({attribute:!1})],Ze.prototype,"hass",void 0),r([Zt()],Ze.prototype,"_config",void 0),r([Zt()],Ze.prototype,"_helpers",void 0),Ze=r([Xt("ha-air-purifier-card-editor")],Ze),console.info("%c XIAOMI-AIR-PURIFIER-CARD %c 1.0.0 ","color: white; background: #555555; font-weight: 700;","color: white; background: #000000; font-weight: 700;"),window.customCards=window.customCards||[],window.customCards.push({type:"ha-air-purifier-card",name:"Xiaomi Air Purifier Card",description:"A card for Xiaomi Air Purifier"});let Ye=class extends jt{shouldUpdate(t){return function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var r=e.get("hass");return!r||r.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}setConfig(t){if(!t.entity||"fan"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the fan domain.");this.config=t}getCardSize(){return 3}getEntityId(t,e){return`${t}.${this.config.entity.split(".")[1]}_${e}`}_handlePowerClick(){this.hass.callService("fan","toggle",{entity_id:this.config.entity})}_handleSpeedClick(t){var e;(null===(e=this.stateObj.attributes.preset_modes)||void 0===e?void 0:e.includes(t))&&this.hass.callService("fan","set_preset_mode",{entity_id:this.config.entity,preset_mode:t})}_handleLightToggle(){const t=this.getEntityId("light","switch_status");this.hass.callService("light","toggle",{entity_id:t})}_getEntityState(t,e,i=null){const r=this.getEntityId(t,e),o=this.hass.states[r];return o?o.state:i}_getFilterLife(){return Number(this._getEntityState("sensor","filter_life_level",100))}_getPM25(){return Number(this._getEntityState("sensor","pm25",0))}_getHumidity(){return Number(this._getEntityState("sensor","relative_humidity",0))}_getTemperature(){return Number(this._getEntityState("sensor","temperature",0))}_getLightState(){return"on"===this._getEntityState("light","switch_status","off")}_getMotorSpeed(){return Number(this._getEntityState("sensor","motor_speed",0))}_computePM25Color(t){return t<=12?"var(--success-color, #4CAF50)":t<=35?"var(--warning-color, #FF9800)":"var(--error-color, #F44336)"}render(){if(!this.config||!this.hass)return At``;if(this.stateObj=this.hass.states[this.config.entity],!this.stateObj)return At`
        <ha-card>
          <div class="not-found">
            Entity not found: ${this.config.entity}
          </div>
        </ha-card>
      `;const t=this._getPM25(),e="on"===this.stateObj.state,i=this._getLightState();return At`
      <ha-card>
        <div class="content">
          <div class="power-row">
            <div class="name">
              ${this.config.name||this.stateObj.attributes.friendly_name}
            </div>
            <div class="power-button ${e?"on":""}" @click=${this._handlePowerClick}>
              <ha-svg-icon .path=${re}></ha-svg-icon>
            </div>
          </div>

          <div class="pm25-container ${e?"running":""}">
            <div class="pm25-circle" style="color: ${this._computePM25Color(t)}">
              <span class="pm25-value">${t}</span>
              <span class="pm25-label">PM2.5</span>
            </div>
          </div>

          <div class="control-group">
            <div class="control-group-title">Fan Speed</div>
            <div class="speed-buttons">
              ${["High","Medium","Low"].map((t=>At`
                <button
                  class="speed-button ${this.stateObj.attributes.preset_mode===t?"active":""}"
                  ?disabled=${!e}
                  @click=${()=>this._handleSpeedClick(t)}
                >${t}</button>
              `))}
            </div>
          </div>

          <div class="control-group">
            <div class="control-group-title">Settings</div>
            <div class="control-row ${e?"":"disabled"} ${i?"light-on":""}" id="light-control">
              <div class="control-label">
                <ha-svg-icon .path=${re}></ha-svg-icon>
                <span>Indicator Light</span>
              </div>
              <mwc-switch
                ?checked=${i}
                ?disabled=${!e}
                @change=${this._handleLightToggle}
              ></mwc-switch>
            </div>
          </div>

          <div class="info-grid">
            <div class="info-item ${e?"":"disabled"}">
              <ha-svg-icon .path=${"M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5A8,8 0 0,0 4,13C4,15.21 4.89,17.21 6.34,18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.32,20.45 4.93,20.07V20.07C3.12,18.26 2,15.76 2,13A10,10 0 0,1 12,3M22,13C22,15.76 20.88,18.26 19.07,20.07V20.07C18.68,20.45 18.05,20.45 17.66,20.06C17.27,19.67 17.27,19.04 17.66,18.65V18.65C19.11,17.2 20,15.21 20,13C20,12 19.81,11 19.46,10.1L20.67,8C21.5,9.5 22,11.18 22,13Z"}></ha-svg-icon>
              <div class="info-label">Motor Speed</div>
              <div class="info-value">${this._getMotorSpeed()} RPM</div>
            </div>
            <div class="info-item ${e?"":"disabled"}">
              <ha-svg-icon .path=${"M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z"}></ha-svg-icon>
              <div class="info-label">Humidity</div>
              <div class="info-value">${this._getHumidity()}%</div>
            </div>
            <div class="info-item ${e?"":"disabled"}">
              <ha-svg-icon .path=${"M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z"}></ha-svg-icon>
              <div class="info-label">Temperature</div>
              <div class="info-value">${this._getTemperature()}°C</div>
            </div>
            <div class="info-item ${e?"":"disabled"}">
              <ha-svg-icon .path=${"M15,19.88C15.04,20.18 14.94,20.5 14.71,20.71C14.32,21.1 13.69,21.1 13.3,20.71L9.29,16.7C9.06,16.47 8.96,16.16 9,15.87V10.75L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L15,10.75V19.88M7.04,5L11,10.06V15.58L13,17.58V10.05L16.96,5H7.04Z"}></ha-svg-icon>
              <div class="info-label">Filter Life</div>
              <div class="info-value">${this._getFilterLife()}%</div>
            </div>
          </div>
        </div>
      </ha-card>
    `}static get styles(){return l`
      :host {
        --mdc-theme-primary: var(--primary-color);
        --mdc-switch-selected-track-color: var(--primary-color);
        --mdc-switch-selected-handle-color: var(--primary-color);
        --mdc-switch-unselected-track-color: var(--disabled-text-color);
        --mdc-switch-unselected-handle-color: var(--disabled-text-color);
        --transition-duration: 0.25s;
        --card-radius: 12px;
      }

      ha-card {
        height: 100%;
        padding: 16px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
      }

      .content {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .power-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
      }

      .name {
        font-size: 24px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .power-button {
        --mdc-icon-size: 24px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--secondary-background-color);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all var(--transition-duration) ease;
      }

      .power-button.on {
        background: var(--primary-color);
        color: white;
      }

      .pm25-container {
        position: relative;
        padding: 32px 0;
        text-align: center;
      }

      .pm25-circle {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 4px solid currentColor;
        position: relative;
        transition: all var(--transition-duration) ease;
      }

      .pm25-value {
        font-size: 32px;
        font-weight: bold;
        color: var(--primary-text-color);
      }

      .pm25-label {
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }

      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .pm25-container.running .pm25-circle::before {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        border-radius: 50%;
        border: 4px solid transparent;
        border-top-color: currentColor;
        animation: rotate 2s linear infinite;
      }

      .control-group {
        margin: 16px 0;
      }

      .control-group-title {
        font-size: 14px;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin-bottom: 8px;
      }

      .speed-buttons {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
      }

      .speed-button {
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: var(--card-radius);
        padding: 8px;
        color: var(--primary-text-color);
        cursor: pointer;
        transition: all var(--transition-duration) ease;
      }

      .speed-button.active {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: white;
      }

      .speed-button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .control-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
        border-radius: var(--card-radius);
        background: var(--card-background-color);
        transition: opacity var(--transition-duration) ease;
      }

      .control-row.disabled {
        opacity: 0.5;
        pointer-events: none;
      }

      .control-label {
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--primary-text-color);
      }

      .info-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        margin-top: 16px;
      }

      .info-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 16px;
        background: var(--card-background-color);
        border-radius: var(--card-radius);
        transition: opacity var(--transition-duration) ease;
      }

      .info-item.disabled {
        opacity: 0.5;
      }

      .info-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin: 8px 0 4px;
      }

      .info-value {
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      ha-svg-icon {
        width: 24px;
        height: 24px;
        color: var(--secondary-text-color);
      }
    `}};r([Wt({attribute:!1})],Ye.prototype,"hass",void 0),r([Wt({attribute:!1})],Ye.prototype,"config",void 0),r([Zt()],Ye.prototype,"stateObj",void 0),Ye=r([Xt("ha-air-purifier-card")],Ye);export{Ye as HaAirPurifierCard};
