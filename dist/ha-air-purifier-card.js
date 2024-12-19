function t(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class o{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t;var l;const h=window,c=h.trustedTypes,d=c?c.emptyScript:"",u=h.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v},_="finalized";class $ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=f){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var g;$[_]=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:$}),(null!==(l=h.reactiveElementVersions)&&void 0!==l?l:h.reactiveElementVersions=[]).push("1.6.3");const m=window,A=m.trustedTypes,y=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,b="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,C="?"+w,x=`<${C}>`,S=document,E=()=>S.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,M="[ \t\n\f\r]",V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,P=/>/g,T=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,O=/"/g,U=/^(?:script|style|textarea|title)$/i,L=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),j=new WeakMap,B=S.createTreeWalker(S,129,null,!1);function I(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==y?y.createHTML(e):e}class D{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,h]=((t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=V;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===V?"!--"===l[1]?r=N:void 0!==l[1]?r=P:void 0!==l[2]?(U.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=T):void 0!==l[3]&&(r=T):r===T?">"===l[0]?(r=null!=n?n:V,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?T:'"'===l[3]?O:z):r===O||r===z?r=T:r===N||r===P?r=V:(r=T,n=void 0);const d=r===T&&t[e+1].startsWith("/>")?" ":"";o+=r===V?i+x:h>=0?(s.push(a),i.slice(0,h)+b+i.slice(h)+w+d):i+w+(-2===h?(s.push(void 0),e):d)}return[I(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]})(t,e);if(this.el=D.createElement(l,i),B.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=B.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(b)||e.startsWith(w)){const i=h[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+b).split(w),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?X:"@"===e[1]?G:F})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(U.test(s.tagName)){const t=s.textContent.split(w),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],E()),B.nextNode(),a.push({type:2,index:++n});s.append(t[e],E())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(w,t+1));)a.push({type:7,index:n}),t+=w.length-1}n++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,s){var n,o,r,a;if(e===L)return e;let l=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const h=H(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);B.currentNode=n;let o=B.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new q(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new Q(o,this,t)),this._$AV.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=B.nextNode(),r++)}return B.currentNode=S,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,s){var n;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),H(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>k(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==R&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=D.createElement(I(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new Z(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new D(t)),e}T(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new q(this.k(E()),this.k(E()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,i,s,n){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=W(this,t,e,0),o=!H(t)||t!==this._$AH&&t!==L,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=W(this,s[i+r],e,r),a===L&&(a=this._$AH[r]),o||(o=!H(a)||a!==this._$AH[r]),a===R?t=R:t!==R&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}}const J=A?A.emptyScript:"";class X extends F{constructor(){super(...arguments),this.type=4}j(t){t&&t!==R?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class G extends F{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:R)===L)return;const s=this._$AH,n=t===R&&s!==R||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==R&&(s===R||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const Y=m.litHtmlPolyfillSupport;var tt;null==Y||Y(D,q),(null!==(g=m.litHtmlVersions)&&void 0!==g?g:m.litHtmlVersions=[]).push("2.8.0");const et=window,it=et.trustedTypes,st=it?it.createPolicy("lit-html",{createHTML:t=>t}):void 0,nt="$lit$",ot=`lit$${(Math.random()+"").slice(9)}$`,rt="?"+ot,at=`<${rt}>`,lt=document,ht=()=>lt.createComment(""),ct=t=>null===t||"object"!=typeof t&&"function"!=typeof t,dt=Array.isArray,ut="[ \t\n\f\r]",pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,ft=/>/g,_t=RegExp(`>|${ut}(?:([^\\s"'>=/]+)(${ut}*=${ut}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),$t=/'/g,gt=/"/g,mt=/^(?:script|style|textarea|title)$/i,At=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),yt=Symbol.for("lit-noChange"),bt=Symbol.for("lit-nothing"),wt=new WeakMap,Ct=lt.createTreeWalker(lt,129,null,!1);function xt(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==st?st.createHTML(e):e}const St=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=pt;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===pt?"!--"===l[1]?r=vt:void 0!==l[1]?r=ft:void 0!==l[2]?(mt.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=_t):void 0!==l[3]&&(r=_t):r===_t?">"===l[0]?(r=null!=n?n:pt,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?_t:'"'===l[3]?gt:$t):r===gt||r===$t?r=_t:r===vt||r===ft?r=pt:(r=_t,n=void 0);const d=r===_t&&t[e+1].startsWith("/>")?" ":"";o+=r===pt?i+at:h>=0?(s.push(a),i.slice(0,h)+nt+i.slice(h)+ot+d):i+ot+(-2===h?(s.push(void 0),e):d)}return[xt(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class Et{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,h]=St(t,e);if(this.el=Et.createElement(l,i),Ct.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=Ct.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(nt)||e.startsWith(ot)){const i=h[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+nt).split(ot),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?Nt:"?"===e[1]?Tt:"@"===e[1]?zt:Vt})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(mt.test(s.tagName)){const t=s.textContent.split(ot),e=t.length-1;if(e>0){s.textContent=it?it.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],ht()),Ct.nextNode(),a.push({type:2,index:++n});s.append(t[e],ht())}}}else if(8===s.nodeType)if(s.data===rt)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(ot,t+1));)a.push({type:7,index:n}),t+=ot.length-1}n++}}static createElement(t,e){const i=lt.createElement("template");return i.innerHTML=t,i}}function Ht(t,e,i=t,s){var n,o,r,a;if(e===yt)return e;let l=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const h=ct(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=Ht(t,l._$AS(t,e.values),l,s)),e}class kt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:lt).importNode(i,!0);Ct.currentNode=n;let o=Ct.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new Mt(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new Ot(o,this,t)),this._$AV.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=Ct.nextNode(),r++)}return Ct.currentNode=lt,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Mt{constructor(t,e,i,s){var n;this.type=2,this._$AH=bt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ht(this,t,e),ct(t)?t===bt||null==t||""===t?(this._$AH!==bt&&this._$AR(),this._$AH=bt):t!==this._$AH&&t!==yt&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>dt(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==bt&&ct(this._$AH)?this._$AA.nextSibling.data=t:this.$(lt.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Et.createElement(xt(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new kt(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=wt.get(t.strings);return void 0===e&&wt.set(t.strings,e=new Et(t)),e}T(t){dt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Mt(this.k(ht()),this.k(ht()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Vt{constructor(t,e,i,s,n){this.type=1,this._$AH=bt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=bt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=Ht(this,t,e,0),o=!ct(t)||t!==this._$AH&&t!==yt,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=Ht(this,s[i+r],e,r),a===yt&&(a=this._$AH[r]),o||(o=!ct(a)||a!==this._$AH[r]),a===bt?t=bt:t!==bt&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===bt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Nt extends Vt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===bt?void 0:t}}const Pt=it?it.emptyScript:"";class Tt extends Vt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==bt?this.element.setAttribute(this.name,Pt):this.element.removeAttribute(this.name)}}class zt extends Vt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Ht(this,t,e,0))&&void 0!==i?i:bt)===yt)return;const s=this._$AH,n=t===bt&&s!==bt||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==bt&&(s===bt||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ht(this,t)}}const Ut=et.litHtmlPolyfillSupport;null==Ut||Ut(Et,Mt),(null!==(tt=et.litHtmlVersions)&&void 0!==tt?tt:et.litHtmlVersions=[]).push("2.8.0");var Lt,Rt;class jt extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new Mt(e.insertBefore(ht(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return yt}}jt.finalized=!0,jt._$litElement$=!0,null===(Lt=globalThis.litElementHydrateSupport)||void 0===Lt||Lt.call(globalThis,{LitElement:jt});const Bt=globalThis.litElementPolyfillSupport;null==Bt||Bt({LitElement:jt}),(null!==(Rt=globalThis.litElementVersions)&&void 0!==Rt?Rt:globalThis.litElementVersions=[]).push("3.3.3");const It=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),Dt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Wt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Dt(t,e)}var Zt,qt,Ft;null===(Zt=window.HTMLSlotElement)||void 0===Zt||Zt.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(qt||(qt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Ft||(Ft={}));var Kt="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z";let Jt=class extends jt{setConfig(t){this._config=Object.assign({show:{name:!0,state:!0,temperature:!0,humidity:!0,speed:!0,filter_life:!1,light:!1,child_lock:!1,buzzer:!1}},t)}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;if(!e.configValue)return;const i=void 0!==e.checked?e.checked:e.value,s=e.configValue;if(s.includes(".")){const[t,e]=s.split(".");this._config=Object.assign(Object.assign({},this._config),{[t]:Object.assign(Object.assign({},this._config[t]),{[e]:i})})}else this._config=Object.assign(Object.assign({},this._config),{[s]:i});const n=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(n)}render(){var t,e,i,s,n,o,r,a,l;if(!this.hass||!this._config)return At``;const h=Object.keys(this.hass.states).filter((t=>"fan."===t.substr(0,4)));return At`
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
              @selected=${this._valueChanged}
              required
            >
              ${h.map((t=>At`
                <mwc-list-item .value=${t}>${t}</mwc-list-item>
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
                .checked=${!1!==(null===(t=this._config.show)||void 0===t?void 0:t.name)}
                .configValue=${"show.name"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield label="Show State Animation">
              <ha-switch
                .checked=${!1!==(null===(e=this._config.show)||void 0===e?void 0:e.state)}
                .configValue=${"show.state"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield label="Show Temperature">
              <ha-switch
                .checked=${!1!==(null===(i=this._config.show)||void 0===i?void 0:i.temperature)}
                .configValue=${"show.temperature"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield label="Show Humidity">
              <ha-switch
                .checked=${!1!==(null===(s=this._config.show)||void 0===s?void 0:s.humidity)}
                .configValue=${"show.humidity"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield label="Show Speed">
              <ha-switch
                .checked=${!1!==(null===(n=this._config.show)||void 0===n?void 0:n.speed)}
                .configValue=${"show.speed"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield label="Show Filter Life">
              <ha-switch
                .checked=${!0===(null===(o=this._config.show)||void 0===o?void 0:o.filter_life)}
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
                .checked=${!0===(null===(r=this._config.show)||void 0===r?void 0:r.light)}
                .configValue=${"show.light"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="row">
            <ha-formfield label="Show Child Lock">
              <ha-switch
                .checked=${!0===(null===(a=this._config.show)||void 0===a?void 0:a.child_lock)}
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
    `}static get styles(){return r`
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
    `}};t([Wt({attribute:!1})],Jt.prototype,"hass",void 0),t([Wt({attribute:!1})],Jt.prototype,"_config",void 0),Jt=t([It("ha-air-purifier-card-editor")],Jt),window.customCards=window.customCards||[],window.customCards.push({type:"ha-air-purifier-card",name:"Xiaomi Air Purifier Card",description:"A beautiful card for Xiaomi Air Purifier MB3"});const Xt={show:{name:!0,state:!0,temperature:!0,humidity:!0,speed:!0,filter_life:!1,light:!1,child_lock:!1,buzzer:!1}},Gt={Auto:"Auto",Sleep:"Sleep",Favorite:"Favorite",None:"None"},Qt={Silent:{name:"Silent",percentage:25,rpm:"300-400"},Low:{name:"Low",percentage:50,rpm:"400-500"},Medium:{name:"Medium",percentage:75,rpm:"500-600"},High:{name:"High",percentage:100,rpm:"600-800"}};let Yt=class extends jt{static getConfigElement(){return document.createElement("ha-air-purifier-card-editor")}static getStubConfig(){return{type:"custom:ha-air-purifier-card",entity:"fan.xiaomi_air_purifier",show:{name:!0,state:!0,temperature:!0,humidity:!0,speed:!0,filter_life:!1,light:!1,child_lock:!1,buzzer:!1}}}setConfig(t){if(!t.entity||"fan"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the fan domain.");this._config=Object.assign({show:Xt.show},t)}shouldUpdate(t){return function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var s=e.get("hass");return!s||s.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}_handlePowerClick(){if(!this.hass||!this._config)return;const t=this.hass.states[this._config.entity];t&&this.hass.callService("fan","on"===t.state?"turn_off":"turn_on",{entity_id:this._config.entity})}_handleSpeedClick(t){this.hass&&this._config&&this.hass.callService("fan","set_percentage",{entity_id:this._config.entity,percentage:Qt[t].percentage})}_handleModeChange(t){if(!this.hass||!this._config)return;const e=t.target.value;e&&this.hass.callService("fan","set_preset_mode",{entity_id:this._config.entity,preset_mode:e})}_handleChildLockToggle(){if(!this.hass||!this._config)return;const t=this._config.entity.replace("fan","switch").replace("air_purifier","child_lock"),e=this.hass.states[t];e&&this.hass.callService("switch","on"===e.state?"turn_off":"turn_on",{entity_id:t})}_handleLightToggle(){if(!this.hass||!this._config)return;const t=this._config.entity.replace("fan","light").replace("air_purifier","led"),e=this.hass.states[t];e&&this.hass.callService("light","on"===e.state?"turn_off":"turn_on",{entity_id:t})}_handleBuzzerToggle(){if(!this.hass||!this._config)return;const t=this._config.entity.replace("fan","switch").replace("air_purifier","buzzer"),e=this.hass.states[t];e&&this.hass.callService("switch","on"===e.state?"turn_off":"turn_on",{entity_id:t})}_getSpeedLevel(t){var e;return(null===(e=Object.entries(Qt).find((([e,i])=>t<=i.percentage)))||void 0===e?void 0:e[0])||"High"}render(){var t,e,i,s,n,o,r,a,l;if(!this.hass||!this._config)return At``;const h=this.hass.states[this._config.entity];if(!h)return At`
        <hui-warning>
          Entity not found: ${this._config.entity}
        </hui-warning>
      `;const c=this._config.name||h.attributes.friendly_name||"",d=h.state,u=h.attributes.temperature||0,p=h.attributes.humidity||0,v=h.attributes.motor_speed||0,f=h.attributes.filter_life_remaining||0,_=h.attributes.pm25||0,$=h.attributes.preset_mode||"none",g=this._getSpeedLevel(v),m="on"===h.attributes.child_lock,A="on"===h.attributes.led,y="on"===h.attributes.buzzer;return At`
      <ha-card
        class="air-purifier-card ${"on"===d?"active":""}"
        .header=${!1!==(null===(t=this._config.show)||void 0===t?void 0:t.name)?c:void 0}
      >
        <div class="content">
          <div class="circle-container">
            <div class="circle">
              <div class="circle-info">
                <span class="pm25-value">${_}</span>
                <span class="pm25-label">PM2.5</span>
              </div>
              ${"on"===d&&!1!==(null===(e=this._config.show)||void 0===e?void 0:e.state)?At`
                <div class="circle-animation"></div>
              `:""}
            </div>
          </div>

          ${"on"===d?At`
            <div class="controls">
              <div class="mode-select">
                <ha-select
                  .value=${$}
                  @selected=${this._handleModeChange}
                  class="mode-dropdown"
                >
                  ${Object.entries(Gt).map((([t,e])=>At`
                    <mwc-list-item .value=${e}>${t}</mwc-list-item>
                  `))}
                </ha-select>
              </div>

              <div class="button-row">
                <ha-icon-button
                  class="action-button"
                  .path=${"M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13"}
                  @click=${this._handlePowerClick}
                  .label=${"Power"}
                ></ha-icon-button>

                ${Object.entries(Qt).map((([t,e])=>At`
                  <ha-icon-button
                    class="action-button ${g===t?"active":""}"
                    .path=${Kt}
                    @click=${()=>this._handleSpeedClick(t)}
                    .label=${e.name}
                  ></ha-icon-button>
                `))}

                ${!1!==(null===(i=this._config.show)||void 0===i?void 0:i.light)?At`
                  <ha-icon-button
                    class="action-button ${A?"active":""}"
                    .path=${"M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z"}
                    @click=${this._handleLightToggle}
                    .label=${"Light"}
                  ></ha-icon-button>
                `:""}

                ${!1!==(null===(s=this._config.show)||void 0===s?void 0:s.child_lock)?At`
                  <ha-icon-button
                    class="action-button ${m?"active":""}"
                    .path=${"M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"}
                    @click=${this._handleChildLockToggle}
                    .label=${"Child Lock"}
                  ></ha-icon-button>
                `:""}

                ${!1!==(null===(n=this._config.show)||void 0===n?void 0:n.buzzer)?At`
                  <ha-icon-button
                    class="action-button ${y?"active":""}"
                    .path=${"M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"}
                    @click=${this._handleBuzzerToggle}
                    .label=${"Buzzer"}
                  ></ha-icon-button>
                `:""}
              </div>

              <div class="info-row">
                ${!1!==(null===(o=this._config.show)||void 0===o?void 0:o.temperature)?At`
                  <div class="info-item">
                    <ha-svg-icon .path=${"M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z"}></ha-svg-icon>
                    <span>${u}°C</span>
                  </div>
                `:""}

                ${!1!==(null===(r=this._config.show)||void 0===r?void 0:r.humidity)?At`
                  <div class="info-item">
                    <ha-svg-icon .path=${"M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z"}></ha-svg-icon>
                    <span>${p}%</span>
                  </div>
                `:""}

                ${!1!==(null===(a=this._config.show)||void 0===a?void 0:a.speed)?At`
                  <div class="info-item">
                    <ha-svg-icon .path=${Kt}></ha-svg-icon>
                    <span>${v} RPM</span>
                  </div>
                `:""}

                ${!1!==(null===(l=this._config.show)||void 0===l?void 0:l.filter_life)?At`
                  <div class="info-item">
                    <ha-svg-icon .path=${"M19,18.31V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V16.3C4.54,16.12 3.95,16 3,16A1,1 0 0,1 2,15A1,1 0 0,1 3,14C3.82,14 4.47,14.08 5,14.21V12.3C4.54,12.12 3.95,12 3,12A1,1 0 0,1 2,11A1,1 0 0,1 3,10C3.82,10 4.47,10.08 5,10.21V8.3C4.54,8.12 3.95,8 3,8A1,1 0 0,1 2,7A1,1 0 0,1 3,6C3.82,6 4.47,6.08 5,6.21V4A2,2 0 0,1 7,2H17A2,2 0 0,1 19,4V6.16C20.78,6.47 21.54,7.13 21.71,7.29C22.1,7.68 22.1,8.32 21.71,8.71C21.32,9.1 20.8,9.09 20.29,8.71V8.71C20.29,8.71 19.25,8 17,8C15.74,8 14.91,8.41 13.95,8.9C12.91,9.41 11.74,10 10,10C9.64,10 9.31,10 9,9.96V7.95C9.3,8 9.63,8 10,8C11.26,8 12.09,7.59 13.05,7.11C14.09,6.59 15.27,6 17,6V4H7V20H17V18C18.5,18 18.97,18.29 19,18.31M17,10C15.27,10 14.09,10.59 13.05,11.11C12.09,11.59 11.26,12 10,12C9.63,12 9.3,12 9,11.95V13.96C9.31,14 9.64,14 10,14C11.74,14 12.91,13.41 13.95,12.9C14.91,12.42 15.74,12 17,12C19.25,12 20.29,12.71 20.29,12.71V12.71C20.8,13.1 21.32,13.1 21.71,12.71C22.1,12.32 22.1,11.69 21.71,11.29C21.5,11.08 20.25,10 17,10M17,14C15.27,14 14.09,14.59 13.05,15.11C12.09,15.59 11.26,16 10,16C9.63,16 9.3,16 9,15.95V17.96C9.31,18 9.64,18 10,18C11.74,18 12.91,17.41 13.95,16.9C14.91,16.42 15.74,16 17,16C19.25,16 20.29,16.71 20.29,16.71V16.71C20.8,17.1 21.32,17.1 21.71,16.71C22.1,16.32 22.1,15.69 21.71,15.29C21.5,15.08 20.25,14 17,14Z"}></ha-svg-icon>
                    <span>${f}%</span>
                  </div>
                `:""}
              </div>
            </div>
          `:""}
        </div>
      </ha-card>
    `}static get styles(){return r`
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
    `}};t([Wt({attribute:!1})],Yt.prototype,"hass",void 0),t([Wt({attribute:!1})],Yt.prototype,"_config",void 0),Yt=t([It("ha-air-purifier-card")],Yt);export{Yt as HaAirPurifierCard};
