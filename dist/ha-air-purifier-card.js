function t(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class o{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t;var l;const h=window,c=h.trustedTypes,d=c?c.emptyScript:"",u=h.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),$={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v},_="finalized";class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||$}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=$){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var g;f[_]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:f}),(null!==(l=h.reactiveElementVersions)&&void 0!==l?l:h.reactiveElementVersions=[]).push("1.6.3");const m=window,A=m.trustedTypes,y=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,b="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,x="?"+w,C=`<${x}>`,S=document,E=()=>S.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,N="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,T=/>/g,U=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,R=/"/g,L=/^(?:script|style|textarea|title)$/i,j=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),I=new WeakMap,V=S.createTreeWalker(S,129,null,!1);function B(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==y?y.createHTML(e):e}class D{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,h]=((t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=P;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===P?"!--"===l[1]?r=k:void 0!==l[1]?r=T:void 0!==l[2]?(L.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=U):void 0!==l[3]&&(r=U):r===U?">"===l[0]?(r=null!=n?n:P,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?U:'"'===l[3]?R:O):r===R||r===O?r=U:r===k||r===T?r=P:(r=U,n=void 0);const d=r===U&&t[e+1].startsWith("/>")?" ":"";o+=r===P?i+C:h>=0?(s.push(a),i.slice(0,h)+b+i.slice(h)+w+d):i+w+(-2===h?(s.push(void 0),e):d)}return[B(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]})(t,e);if(this.el=D.createElement(l,i),V.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=V.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(b)||e.startsWith(w)){const i=h[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+b).split(w),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?X:"@"===e[1]?G:F})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(L.test(s.tagName)){const t=s.textContent.split(w),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],E()),V.nextNode(),a.push({type:2,index:++n});s.append(t[e],E())}}}else if(8===s.nodeType)if(s.data===x)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(w,t+1));)a.push({type:7,index:n}),t+=w.length-1}n++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,s){var n,o,r,a;if(e===j)return e;let l=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const h=H(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);V.currentNode=n;let o=V.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new q(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new Q(o,this,t)),this._$AV.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=V.nextNode(),r++)}return V.currentNode=S,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,s){var n;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),H(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>M(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=D.createElement(B(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new Z(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new D(t)),e}T(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new q(this.k(E()),this.k(E()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,i,s,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=W(this,t,e,0),o=!H(t)||t!==this._$AH&&t!==j,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=W(this,s[i+r],e,r),a===j&&(a=this._$AH[r]),o||(o=!H(a)||a!==this._$AH[r]),a===z?t=z:t!==z&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}const J=A?A.emptyScript:"";class X extends F{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class G extends F{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:z)===j)return;const s=this._$AH,n=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==z&&(s===z||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const Y=m.litHtmlPolyfillSupport;var tt;null==Y||Y(D,q),(null!==(g=m.litHtmlVersions)&&void 0!==g?g:m.litHtmlVersions=[]).push("2.8.0");const et=window,it=et.trustedTypes,st=it?it.createPolicy("lit-html",{createHTML:t=>t}):void 0,nt="$lit$",ot=`lit$${(Math.random()+"").slice(9)}$`,rt="?"+ot,at=`<${rt}>`,lt=document,ht=()=>lt.createComment(""),ct=t=>null===t||"object"!=typeof t&&"function"!=typeof t,dt=Array.isArray,ut="[ \t\n\f\r]",pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,$t=/>/g,_t=RegExp(`>|${ut}(?:([^\\s"'>=/]+)(${ut}*=${ut}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ft=/'/g,gt=/"/g,mt=/^(?:script|style|textarea|title)$/i,At=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),yt=Symbol.for("lit-noChange"),bt=Symbol.for("lit-nothing"),wt=new WeakMap,xt=lt.createTreeWalker(lt,129,null,!1);function Ct(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==st?st.createHTML(e):e}const St=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=pt;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===pt?"!--"===l[1]?r=vt:void 0!==l[1]?r=$t:void 0!==l[2]?(mt.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=_t):void 0!==l[3]&&(r=_t):r===_t?">"===l[0]?(r=null!=n?n:pt,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?_t:'"'===l[3]?gt:ft):r===gt||r===ft?r=_t:r===vt||r===$t?r=pt:(r=_t,n=void 0);const d=r===_t&&t[e+1].startsWith("/>")?" ":"";o+=r===pt?i+at:h>=0?(s.push(a),i.slice(0,h)+nt+i.slice(h)+ot+d):i+ot+(-2===h?(s.push(void 0),e):d)}return[Ct(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class Et{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,h]=St(t,e);if(this.el=Et.createElement(l,i),xt.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=xt.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(nt)||e.startsWith(ot)){const i=h[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+nt).split(ot),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?kt:"?"===e[1]?Ut:"@"===e[1]?Ot:Pt})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(mt.test(s.tagName)){const t=s.textContent.split(ot),e=t.length-1;if(e>0){s.textContent=it?it.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],ht()),xt.nextNode(),a.push({type:2,index:++n});s.append(t[e],ht())}}}else if(8===s.nodeType)if(s.data===rt)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(ot,t+1));)a.push({type:7,index:n}),t+=ot.length-1}n++}}static createElement(t,e){const i=lt.createElement("template");return i.innerHTML=t,i}}function Ht(t,e,i=t,s){var n,o,r,a;if(e===yt)return e;let l=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const h=ct(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=Ht(t,l._$AS(t,e.values),l,s)),e}class Mt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:lt).importNode(i,!0);xt.currentNode=n;let o=xt.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new Nt(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new Rt(o,this,t)),this._$AV.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=xt.nextNode(),r++)}return xt.currentNode=lt,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Nt{constructor(t,e,i,s){var n;this.type=2,this._$AH=bt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ht(this,t,e),ct(t)?t===bt||null==t||""===t?(this._$AH!==bt&&this._$AR(),this._$AH=bt):t!==this._$AH&&t!==yt&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>dt(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==bt&&ct(this._$AH)?this._$AA.nextSibling.data=t:this.$(lt.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Et.createElement(Ct(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new Mt(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=wt.get(t.strings);return void 0===e&&wt.set(t.strings,e=new Et(t)),e}T(t){dt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Nt(this.k(ht()),this.k(ht()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Pt{constructor(t,e,i,s,n){this.type=1,this._$AH=bt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=bt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=Ht(this,t,e,0),o=!ct(t)||t!==this._$AH&&t!==yt,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=Ht(this,s[i+r],e,r),a===yt&&(a=this._$AH[r]),o||(o=!ct(a)||a!==this._$AH[r]),a===bt?t=bt:t!==bt&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===bt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class kt extends Pt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===bt?void 0:t}}const Tt=it?it.emptyScript:"";class Ut extends Pt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==bt?this.element.setAttribute(this.name,Tt):this.element.removeAttribute(this.name)}}class Ot extends Pt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Ht(this,t,e,0))&&void 0!==i?i:bt)===yt)return;const s=this._$AH,n=t===bt&&s!==bt||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==bt&&(s===bt||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ht(this,t)}}const Lt=et.litHtmlPolyfillSupport;null==Lt||Lt(Et,Nt),(null!==(tt=et.litHtmlVersions)&&void 0!==tt?tt:et.litHtmlVersions=[]).push("2.8.0");var jt,zt;class It extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new Nt(e.insertBefore(ht(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return yt}}It.finalized=!0,It._$litElement$=!0,null===(jt=globalThis.litElementHydrateSupport)||void 0===jt||jt.call(globalThis,{LitElement:It});const Vt=globalThis.litElementPolyfillSupport;null==Vt||Vt({LitElement:It}),(null!==(zt=globalThis.litElementVersions)&&void 0!==zt?zt:globalThis.litElementVersions=[]).push("3.3.3");const Bt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),Dt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Wt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Dt(t,e)}var Zt,qt,Ft;null===(Zt=window.HTMLSlotElement)||void 0===Zt||Zt.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(qt||(qt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Ft||(Ft={}));var Kt=function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n};var Jt="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z";let Xt=class extends It{constructor(){super(...arguments),this._configChanged=!1}setConfig(t){this._config=t}_valueChanged(t){var e;if(!this._config||!this.hass)return;const i=t.target;if(!i)return;const s=i.value||(null===(e=t.detail)||void 0===e?void 0:e.value)||i.checked;if(this._config[i.configValue]!==s)if(""===s){const t=Object.assign({},this._config);delete t[i.configValue],Kt(this,"config-changed",{config:t})}else{const t=Object.assign(Object.assign({},this._config),{[i.configValue]:s});this._configChanged=!0,Kt(this,"config-changed",{config:t})}}render(){return this.hass&&this._config?(Object.keys(this.hass.states).filter((t=>"fan"===t.split(".")[0]&&t.includes("zhimi_mb3"))),At`
      <ha-form
        .schema=${[{name:"entity",required:!0,selector:{entity:{domain:"fan",filter:t=>t.includes("zhimi_mb3")}}},{name:"name",selector:{text:{}}},{name:"show_animation",selector:{boolean:{}}},{name:"show_speed",selector:{boolean:{}}},{name:"show_humidity",selector:{boolean:{}}},{name:"show_temperature",selector:{boolean:{}}},{name:"show_filter_life",selector:{boolean:{}}},{name:"show_light_control",selector:{boolean:{}}}]}
        .data=${this._config}
        .hass=${this.hass}
        .computeLabel=${t=>{switch(t.name){case"entity":return"Air Purifier Entity (Required)";case"name":return"Card Name (Optional)";case"show_animation":return"Show PM2.5 Animation";case"show_speed":return"Show Speed";case"show_humidity":return"Show Humidity";case"show_temperature":return"Show Temperature";case"show_filter_life":return"Show Filter Life";case"show_light_control":return"Show Light Control";default:return t.name}}}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `):At``}static get styles(){return r`
      ha-form {
        display: block;
        padding: var(--ha-form-spacing, 16px);
      }
    `}};t([Wt({attribute:!1})],Xt.prototype,"hass",void 0),t([Wt({type:Object})],Xt.prototype,"_config",void 0),t([Wt({type:Boolean})],Xt.prototype,"_configChanged",void 0),Xt=t([Bt("ha-air-purifier-card-editor")],Xt),window.customCards=window.customCards||[],window.customCards.push({type:"ha-air-purifier-card",name:"Xiaomi Air Purifier Card",description:"A beautiful card for Xiaomi Air Purifier"});let Gt=class extends It{static getConfigElement(){return document.createElement("ha-air-purifier-card-editor")}static getStubConfig(){return{type:"custom:ha-air-purifier-card",entity:"fan.zhimi_mb3_7bb1_air_purifier"}}setConfig(t){if(!t.entity||"fan"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the fan domain.");this.config=t}shouldUpdate(t){return function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var s=e.get("hass");return!s||s.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}_handlePowerClick(){if(!this.hass||!this.config)return;const t=this.hass.states[this.config.entity];t&&this.hass.callService("fan","on"===t.state?"turn_off":"turn_on",{entity_id:this.config.entity})}_handleSpeedClick(t){if(!this.hass||!this.config)return;const e="High"===t?100:"Medium"===t?50:10;this.hass.callService("fan","set_percentage",{entity_id:this.config.entity,percentage:e})}_handleModeChange(t){if(!this.hass||!this.config)return;const e=t.detail.value;this.hass.callService("fan","set_preset_mode",{entity_id:this.config.entity,preset_mode:e})}_handleLightToggle(){if(!this.hass||!this.config)return;const t=this.config.entity.replace("fan","light").replace("air_purifier","switch_status"),e=this.hass.states[t];this.hass.callService("light","on"===e.state?"turn_off":"turn_on",{entity_id:t})}render(){if(!this.config||!this.hass)return At``;const t=this.hass.states[this.config.entity];if(!t)return At`
        <ha-card>
          <div class="not-found">
            Entity not found: ${this.config.entity}
          </div>
        </ha-card>
      `;const e=this.config.name||t.attributes.friendly_name,i=t.state,s=this.config.entity.split(".")[1],n=this.hass.states[`sensor.${s.replace("air_purifier","pm25")}`],o=this.hass.states[`sensor.${s.replace("air_purifier","motor_speed")}`],r=this.hass.states[`sensor.${s.replace("air_purifier","relative_humidity")}`],a=this.hass.states[`sensor.${s.replace("air_purifier","temperature")}`],l=this.hass.states[`sensor.${s.replace("air_purifier","filter_life_level")}`],h=this.hass.states[`light.${s.replace("air_purifier","switch_status")}`],c=(null==n?void 0:n.state)||"0",d=(null==o?void 0:o.state)||"0",u=(null==r?void 0:r.state)||"0",p=(null==a?void 0:a.state)||"0",v=(null==l?void 0:l.state)||"0",$="on"===(null==h?void 0:h.state),_=t.attributes.percentage||0,f=_>=90?"High":_>=45?"Medium":"Low";return At`
      <ha-card>
        <div class="card-header">
          <div class="name">${e}</div>
          <ha-icon-button
            .path=${"M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13"}
            @click=${this._handlePowerClick}
            ?disabled=${!t}
            class="power-button ${"on"===i?"active":""}"
          ></ha-icon-button>
        </div>

        <div class="content">
          <div class="pm25-section">
            <div class="pm25-circle ${"on"===i?"active":""}">
              ${!1!==this.config.show_animation?At`
                <div class="pm25-animation"></div>
              `:""}
              <div class="value">${c}</div>
              <div class="label">PM2.5</div>
            </div>
          </div>

          <div class="controls-section">
            <div class="control-group">
              <div class="group-title">Fan Speed</div>
              <div class="speed-buttons">
                ${["Low","Medium","High"].map((t=>At`
                  <ha-button
                    .outlined=${f!==t}
                    .disabled=${"on"!==i}
                    @click=${()=>this._handleSpeedClick(t)}
                    class="${f===t?"active":""}"
                  >
                    <ha-svg-icon .path=${Jt}></ha-svg-icon>
                    ${t}
                  </ha-button>
                `))}
              </div>
            </div>

            <div class="control-group">
              <div class="group-title">Mode</div>
              <ha-select
                .value=${t.attributes.preset_mode||"none"}
                @selected=${this._handleModeChange}
                .disabled=${"on"!==i}
                fixedMenuPosition
                naturalMenuWidth
              >
                ${["none","auto","sleep","favorite"].map((t=>At`
                  <ha-list-item .value=${t}>
                    ${t.charAt(0).toUpperCase()+t.slice(1)}
                  </ha-list-item>
                `))}
              </ha-select>
            </div>

            <div class="status-section">
              ${!1!==this.config.show_speed?At`
                <ha-statistic-badge
                  .value=${d}
                  .description=${"Fan Speed"}
                  .icon=${Jt}
                  unit="RPM"
                ></ha-statistic-badge>
              `:""}
              
              ${!1!==this.config.show_humidity?At`
                <ha-statistic-badge
                  .value=${u}
                  .description=${"Humidity"}
                  unit="%"
                ></ha-statistic-badge>
              `:""}
              
              ${!1!==this.config.show_temperature?At`
                <ha-statistic-badge
                  .value=${p}
                  .description=${"Temperature"}
                  unit="°C"
                ></ha-statistic-badge>
              `:""}
              
              ${!1!==this.config.show_filter_life?At`
                <ha-statistic-badge
                  .value=${v}
                  .description=${"Filter Life"}
                  unit="%"
                ></ha-statistic-badge>
              `:""}
            </div>

            ${!1!==this.config.show_light_control?At`
              <div class="control-group">
                <ha-button-toggle
                  .label=${"Indicator Light"}
                  .value=${$}
                  @change=${this._handleLightToggle}
                  .disabled=${"on"!==i}
                >
                  <ha-svg-icon .path=${"M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z"}></ha-svg-icon>
                </ha-button-toggle>
              </div>
            `:""}
          </div>
        </div>
      </ha-card>
    `}static get styles(){return r`
      :host {
        --ha-card-border-radius: var(--ha-card-border-radius, 12px);
        --ha-card-box-shadow: var(--ha-card-box-shadow, none);
        --mdc-icon-size: 24px;
      }

      ha-card {
        height: 100%;
        overflow: hidden;
        padding: 0;
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 16px;
        background: var(--ha-card-background, var(--card-background-color));
      }

      .name {
        font-size: var(--ha-card-header-font-size, 24px);
        font-weight: var(--ha-card-header-font-weight, normal);
        color: var(--ha-card-header-color, var(--primary-text-color));
      }

      .power-button {
        color: var(--primary-text-color);
      }

      .power-button.active {
        color: var(--primary-color);
      }

      .content {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .pm25-section {
        display: flex;
        justify-content: center;
        padding: 16px 0;
      }

      .pm25-circle {
        position: relative;
        width: 140px;
        height: 140px;
        border-radius: 50%;
        background: var(--ha-card-background, var(--card-background-color));
        border: 2px solid var(--divider-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: border-color 0.2s ease-in-out;
      }

      .pm25-circle.active {
        border-color: var(--primary-color);
      }

      .pm25-animation {
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border-radius: 50%;
        border: 2px solid transparent;
        border-top-color: var(--primary-color);
        animation: rotate 2s linear infinite;
      }

      .value {
        font-size: 36px;
        font-weight: bold;
        color: var(--primary-text-color);
      }

      .label {
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-top: 8px;
      }

      .controls-section {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .control-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .group-title {
        font-size: 14px;
        font-weight: 500;
        color: var(--secondary-text-color);
      }

      .speed-buttons {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
      }

      ha-button {
        width: 100%;
      }

      ha-button.active {
        --mdc-theme-primary: var(--primary-color);
      }

      ha-select {
        width: 100%;
      }

      .status-section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 8px;
        padding: 8px 0;
      }

      ha-statistic-badge {
        --ha-statistic-badge-size: 100%;
        --ha-statistic-badge-justify-content: flex-start;
      }

      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .not-found {
        padding: 16px;
        text-align: center;
        color: var(--error-color);
      }
    `}};t([Wt({attribute:!1})],Gt.prototype,"hass",void 0),t([Wt({attribute:!1})],Gt.prototype,"config",void 0),Gt=t([Bt("ha-air-purifier-card")],Gt);export{Gt as HaAirPurifierCard};
