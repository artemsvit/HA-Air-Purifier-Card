function t(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t;var l;const h=window,c=h.trustedTypes,d=c?c.emptyScript:"",p=h.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:v},g="finalized";class $ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty(g))return!1;this[g]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=f){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:u).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:u;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var _;$[g]=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:$}),(null!==(l=h.reactiveElementVersions)&&void 0!==l?l:h.reactiveElementVersions=[]).push("1.6.3");const m=window,y=m.trustedTypes,A=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,b="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,x="?"+w,S=`<${x}>`,C=document,E=()=>C.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,N="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,T=/>/g,U=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,R=/"/g,L=/^(?:script|style|textarea|title)$/i,V=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),z=new WeakMap,I=C.createTreeWalker(C,129,null,!1);function B(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}class D{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,h]=((t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=P;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===P?"!--"===l[1]?r=M:void 0!==l[1]?r=T:void 0!==l[2]?(L.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=U):void 0!==l[3]&&(r=U):r===U?">"===l[0]?(r=null!=o?o:P,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?U:'"'===l[3]?R:O):r===R||r===O?r=U:r===M||r===T?r=P:(r=U,o=void 0);const d=r===U&&t[e+1].startsWith("/>")?" ":"";n+=r===P?i+S:h>=0?(s.push(a),i.slice(0,h)+b+i.slice(h)+w+d):i+w+(-2===h?(s.push(void 0),e):d)}return[B(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]})(t,e);if(this.el=D.createElement(l,i),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=I.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(b)||e.startsWith(w)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+b).split(w),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?X:"@"===e[1]?G:F})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(L.test(s.tagName)){const t=s.textContent.split(w),e=t.length-1;if(e>0){s.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],E()),I.nextNode(),a.push({type:2,index:++o});s.append(t[e],E())}}}else if(8===s.nodeType)if(s.data===x)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(w,t+1));)a.push({type:7,index:o}),t+=w.length-1}o++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,s){var o,n,r,a;if(e===V)return e;let l=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const h=H(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(i,!0);I.currentNode=o;let n=I.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new q(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new Q(n,this,t)),this._$AV.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(n=I.nextNode(),r++)}return I.currentNode=C,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,s){var o;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),H(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>k(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==j&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=D.createElement(B(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new Z(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new D(t)),e}T(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new q(this.k(E()),this.k(E()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,i,s,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=W(this,t,e,0),n=!H(t)||t!==this._$AH&&t!==V,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=W(this,s[i+r],e,r),a===V&&(a=this._$AH[r]),n||(n=!H(a)||a!==this._$AH[r]),a===j?t=j:t!==j&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}const J=y?y.emptyScript:"";class X extends F{constructor(){super(...arguments),this.type=4}j(t){t&&t!==j?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class G extends F{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:j)===V)return;const s=this._$AH,o=t===j&&s!==j||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==j&&(s===j||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const Y=m.litHtmlPolyfillSupport;var tt;null==Y||Y(D,q),(null!==(_=m.litHtmlVersions)&&void 0!==_?_:m.litHtmlVersions=[]).push("2.8.0");const et=window,it=et.trustedTypes,st=it?it.createPolicy("lit-html",{createHTML:t=>t}):void 0,ot="$lit$",nt=`lit$${(Math.random()+"").slice(9)}$`,rt="?"+nt,at=`<${rt}>`,lt=document,ht=()=>lt.createComment(""),ct=t=>null===t||"object"!=typeof t&&"function"!=typeof t,dt=Array.isArray,pt="[ \t\n\f\r]",ut=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,ft=/>/g,gt=RegExp(`>|${pt}(?:([^\\s"'>=/]+)(${pt}*=${pt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),$t=/'/g,_t=/"/g,mt=/^(?:script|style|textarea|title)$/i,yt=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),At=Symbol.for("lit-noChange"),bt=Symbol.for("lit-nothing"),wt=new WeakMap,xt=lt.createTreeWalker(lt,129,null,!1);function St(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==st?st.createHTML(e):e}const Ct=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=ut;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===ut?"!--"===l[1]?r=vt:void 0!==l[1]?r=ft:void 0!==l[2]?(mt.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=gt):void 0!==l[3]&&(r=gt):r===gt?">"===l[0]?(r=null!=o?o:ut,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?gt:'"'===l[3]?_t:$t):r===_t||r===$t?r=gt:r===vt||r===ft?r=ut:(r=gt,o=void 0);const d=r===gt&&t[e+1].startsWith("/>")?" ":"";n+=r===ut?i+at:h>=0?(s.push(a),i.slice(0,h)+ot+i.slice(h)+nt+d):i+nt+(-2===h?(s.push(void 0),e):d)}return[St(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class Et{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,h]=Ct(t,e);if(this.el=Et.createElement(l,i),xt.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=xt.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(ot)||e.startsWith(nt)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+ot).split(nt),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?Mt:"?"===e[1]?Ut:"@"===e[1]?Ot:Pt})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(mt.test(s.tagName)){const t=s.textContent.split(nt),e=t.length-1;if(e>0){s.textContent=it?it.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],ht()),xt.nextNode(),a.push({type:2,index:++o});s.append(t[e],ht())}}}else if(8===s.nodeType)if(s.data===rt)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(nt,t+1));)a.push({type:7,index:o}),t+=nt.length-1}o++}}static createElement(t,e){const i=lt.createElement("template");return i.innerHTML=t,i}}function Ht(t,e,i=t,s){var o,n,r,a;if(e===At)return e;let l=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const h=ct(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=Ht(t,l._$AS(t,e.values),l,s)),e}class kt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:lt).importNode(i,!0);xt.currentNode=o;let n=xt.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new Nt(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new Rt(n,this,t)),this._$AV.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(n=xt.nextNode(),r++)}return xt.currentNode=lt,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Nt{constructor(t,e,i,s){var o;this.type=2,this._$AH=bt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ht(this,t,e),ct(t)?t===bt||null==t||""===t?(this._$AH!==bt&&this._$AR(),this._$AH=bt):t!==this._$AH&&t!==At&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>dt(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==bt&&ct(this._$AH)?this._$AA.nextSibling.data=t:this.$(lt.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Et.createElement(St(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new kt(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=wt.get(t.strings);return void 0===e&&wt.set(t.strings,e=new Et(t)),e}T(t){dt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Nt(this.k(ht()),this.k(ht()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Pt{constructor(t,e,i,s,o){this.type=1,this._$AH=bt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=bt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=Ht(this,t,e,0),n=!ct(t)||t!==this._$AH&&t!==At,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=Ht(this,s[i+r],e,r),a===At&&(a=this._$AH[r]),n||(n=!ct(a)||a!==this._$AH[r]),a===bt?t=bt:t!==bt&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===bt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Mt extends Pt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===bt?void 0:t}}const Tt=it?it.emptyScript:"";class Ut extends Pt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==bt?this.element.setAttribute(this.name,Tt):this.element.removeAttribute(this.name)}}class Ot extends Pt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Ht(this,t,e,0))&&void 0!==i?i:bt)===At)return;const s=this._$AH,o=t===bt&&s!==bt||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==bt&&(s===bt||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ht(this,t)}}const Lt=et.litHtmlPolyfillSupport;null==Lt||Lt(Et,Nt),(null!==(tt=et.litHtmlVersions)&&void 0!==tt?tt:et.litHtmlVersions=[]).push("2.8.0");var Vt,jt;class zt extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new Nt(e.insertBefore(ht(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return At}}zt.finalized=!0,zt._$litElement$=!0,null===(Vt=globalThis.litElementHydrateSupport)||void 0===Vt||Vt.call(globalThis,{LitElement:zt});const It=globalThis.litElementPolyfillSupport;null==It||It({LitElement:zt}),(null!==(jt=globalThis.litElementVersions)&&void 0!==jt?jt:globalThis.litElementVersions=[]).push("3.3.3");const Bt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),Dt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Wt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Dt(t,e)}var Zt,qt,Ft;null===(Zt=window.HTMLSlotElement)||void 0===Zt||Zt.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(qt||(qt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Ft||(Ft={}));var Kt=function(t,e,i,s){s=s||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return o.detail=i,t.dispatchEvent(o),o};let Jt=class extends zt{setConfig(t){this._config=t}_valueChanged(t){var e;if(!this._config||!this.hass)return;const i=t.target;if(!i)return;const s=i.value||(null===(e=t.detail)||void 0===e?void 0:e.value)||i.checked;if(""===s){const t=Object.assign({},this._config);delete t[i.configValue],Kt(this,"config-changed",{config:t})}else{const t=Object.assign(Object.assign({},this._config),{[i.configValue]:s});Kt(this,"config-changed",{config:t})}}render(){return this.hass&&this._config?yt`
      <div class="card-config">
        <div class="values">
          <ha-entity-picker
            .hass=${this.hass}
            .label=${"Air Purifier Entity (Required)"}
            .value=${this._config.entity}
            .configValue=${"entity"}
            .includeDomains=${["fan"]}
            .entityFilter=${t=>t.includes("zhimi_mb3")}
            @value-changed=${this._valueChanged}
            allow-custom-entity
          ></ha-entity-picker>
        </div>

        <div class="values">
          <ha-textfield
            label="Card Name (Optional)"
            .value=${this._config.name||""}
            .configValue=${"name"}
            @input=${this._valueChanged}
          ></ha-textfield>
        </div>

        <div class="switches">
          <div class="switch-wrapper">
            <ha-formfield label="Show PM2.5 Animation">
              <ha-switch
                .checked=${!1!==this._config.show_animation}
                .configValue=${"show_animation"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="switch-wrapper">
            <ha-formfield label="Show Speed">
              <ha-switch
                .checked=${!1!==this._config.show_speed}
                .configValue=${"show_speed"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="switch-wrapper">
            <ha-formfield label="Show Humidity">
              <ha-switch
                .checked=${!1!==this._config.show_humidity}
                .configValue=${"show_humidity"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="switch-wrapper">
            <ha-formfield label="Show Temperature">
              <ha-switch
                .checked=${!1!==this._config.show_temperature}
                .configValue=${"show_temperature"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="switch-wrapper">
            <ha-formfield label="Show Filter Life">
              <ha-switch
                .checked=${!1!==this._config.show_filter_life}
                .configValue=${"show_filter_life"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>

          <div class="switch-wrapper">
            <ha-formfield label="Show Light Control">
              <ha-switch
                .checked=${!1!==this._config.show_light_control}
                .configValue=${"show_light_control"}
                @change=${this._valueChanged}
              ></ha-switch>
            </ha-formfield>
          </div>
        </div>
      </div>
    `:yt``}static get styles(){return r`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 16px;
      }

      .values {
        display: grid;
        gap: 16px;
      }

      ha-textfield {
        width: 100%;
      }

      .switches {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .switch-wrapper {
        display: flex;
        align-items: center;
      }

      ha-formfield {
        padding: 8px;
        color: var(--primary-text-color);
      }

      ha-switch {
        --mdc-theme-secondary: var(--primary-color);
      }
    `}};t([Wt({attribute:!1})],Jt.prototype,"hass",void 0),t([Wt({type:Object})],Jt.prototype,"_config",void 0),Jt=t([Bt("ha-air-purifier-card-editor")],Jt),window.customCards=window.customCards||[],window.customCards.push({type:"ha-air-purifier-card",name:"Xiaomi Air Purifier Card",description:"A beautiful card for Xiaomi Air Purifier"});let Xt=class extends zt{static getConfigElement(){return document.createElement("ha-air-purifier-card-editor")}static getStubConfig(){return{type:"custom:ha-air-purifier-card",entity:"fan.zhimi_mb3_7bb1_air_purifier"}}setConfig(t){if(!t.entity||"fan"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the fan domain.");this.config=t}shouldUpdate(t){return function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var s=e.get("hass");return!s||s.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}_handlePowerClick(){if(!this.hass||!this.config)return;const t=this.hass.states[this.config.entity];t&&this.hass.callService("fan","on"===t.state?"turn_off":"turn_on",{entity_id:this.config.entity})}_handleSpeedClick(t){if(!this.hass||!this.config)return;const e="High"===t?100:"Medium"===t?50:10;this.hass.callService("fan","set_percentage",{entity_id:this.config.entity,percentage:e})}_handleModeChange(t){if(!this.hass||!this.config)return;const e=t.detail.value.toLowerCase();this.hass.callService("fan","set_preset_mode",{entity_id:this.config.entity,preset_mode:e})}_handleLightToggle(t){if(!this.hass||!this.config)return;const e=this.config.entity.replace("fan","light").replace("air_purifier","switch_status");this.hass.callService("light",t.detail.checked?"turn_on":"turn_off",{entity_id:e})}render(){if(!this.config||!this.hass)return yt``;const t=this.hass.states[this.config.entity];if(!t)return yt`
        <ha-card>
          <div class="warning">
            Entity not found: ${this.config.entity}
          </div>
        </ha-card>
      `;const e=this.config.name||t.attributes.friendly_name,i=t.state,s=this.config.entity.split(".")[1],o=this.hass.states[`sensor.${s.replace("air_purifier","pm25")}`],n=this.hass.states[`sensor.${s.replace("air_purifier","motor_speed")}`],r=this.hass.states[`sensor.${s.replace("air_purifier","relative_humidity")}`],a=this.hass.states[`sensor.${s.replace("air_purifier","temperature")}`],l=this.hass.states[`sensor.${s.replace("air_purifier","filter_life_level")}`],h=this.hass.states[`light.${s.replace("air_purifier","switch_status")}`],c=(null==o?void 0:o.state)||"0",d=(null==n?void 0:n.state)||"0",p=(null==r?void 0:r.state)||"0",u=(null==a?void 0:a.state)||"0",v=(null==l?void 0:l.state)||"0",f="on"===(null==h?void 0:h.state),g=t.attributes.percentage||0,$=g>=90?"High":g>=45?"Medium":"Low";return yt`
      <ha-card>
        <div class="card-header">
          <div class="card-title">${e}</div>
          <mwc-icon-button
            class="power-button"
            @click=${this._handlePowerClick}
            ?disabled=${!t}
          >
            <ha-svg-icon .path=${"M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13"}></ha-svg-icon>
          </mwc-icon-button>
        </div>

        <div class="pm25-display ${"on"===i?"running":""}">
          <div class="pm25-circle ${"on"!==i?"disabled":""}">
            ${!1!==this.config.show_animation?yt`
              <div class="pm25-animation"></div>
            `:""}
            <div class="pm25-value ${"on"!==i?"disabled":""}">${c}</div>
            <div class="pm25-label ${"on"!==i?"disabled":""}">PM2.5</div>
          </div>
        </div>

        <div class="controls">
          <div class="control-group">
            <div class="control-group-title">Mode</div>
            <div class="speed-buttons">
              ${["Low","Medium","High"].map((t=>yt`
                <mwc-button
                  class="${$===t?"active":""}"
                  ?disabled=${"on"!==i}
                  @click=${()=>this._handleSpeedClick(t)}
                >
                  ${t}
                </mwc-button>
              `))}
            </div>
            <div class="mode-select">
              <select
                @change=${this._handleModeChange}
                .value=${t.attributes.preset_mode||"none"}
                ?disabled=${"on"!==i}
              >
                <option value="none">None</option>
                <option value="auto">Auto</option>
                <option value="sleep">Sleep</option>
                <option value="favorite">Favorite</option>
              </select>
            </div>
          </div>

          <div class="control-group">
            <div class="control-group-title">Status</div>
            <div class="info-grid">
              ${!1!==this.config.show_speed?yt`
                <div class="info-item">
                  <span class="info-label">Speed</span>
                  <span class="info-value">${d} RPM</span>
                </div>
              `:""}
              ${!1!==this.config.show_humidity?yt`
                <div class="info-item">
                  <span class="info-label">Humidity</span>
                  <span class="info-value">${p}%</span>
                </div>
              `:""}
              ${!1!==this.config.show_temperature?yt`
                <div class="info-item">
                  <span class="info-label">Temperature</span>
                  <span class="info-value">${u}°C</span>
                </div>
              `:""}
              ${!1!==this.config.show_filter_life?yt`
                <div class="info-item">
                  <span class="info-label">Filter Life</span>
                  <span class="info-value">${v}%</span>
                </div>
              `:""}
            </div>
          </div>

          ${!1!==this.config.show_light_control?yt`
            <div class="control-group">
              <div class="control-row light-on">
                <mwc-formfield label="Indicator Light">
                  <div class="light-control">
                    <ha-svg-icon .path=${"M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z"} class="light-icon ${f?"on":""}"></ha-svg-icon>
                    <mwc-switch
                      ?checked=${f}
                      @change=${this._handleLightToggle}
                      ?disabled=${"on"!==i}
                    ></mwc-switch>
                  </div>
                </mwc-formfield>
              </div>
            </div>
          `:""}
        </div>
      </ha-card>
    `}static get styles(){return r`
      :host {
        --mdc-icon-button-size: 48px;
        --mdc-icon-size: 24px;
        --mdc-theme-primary: var(--primary-color, #03a9f4);
        --rgb-primary-color: var(--rgb-primary-color, 3, 169, 244);
        --dark-primary-color: var(--dark-primary-color, #0288d1);
        --light-on-color: var(--light-on-color, #fdd835);
        --rgb-light-on-color: var(--rgb-light-on-color, 253, 216, 53);
        --card-radius: var(--card-radius, 12px);
        --control-radius: var(--control-radius, 8px);
        --transition-duration: var(--transition-duration, 0.2s);
      }

      ha-card {
        background: var(--card-background-color);
        border-radius: var(--card-radius);
        box-shadow: var(--ha-card-box-shadow, none);
        color: var(--primary-text-color);
        overflow: hidden;
      }

      .warning {
        display: block;
        color: var(--error-color);
        padding: 16px;
      }

      .card-header {
        padding: 16px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid var(--divider-color);
        background: var(--secondary-background-color);
      }

      .card-title {
        font-size: 18px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .power-button {
        color: var(--primary-color);
        transition: color var(--transition-duration) ease;
      }

      .power-button[disabled] {
        color: var(--disabled-text-color);
      }

      .pm25-display {
        position: relative;
        padding: 32px 0;
        text-align: center;
      }

      .pm25-circle {
        position: relative;
        width: 160px;
        height: 160px;
        margin: 0 auto;
        border-radius: 50%;
        background: var(--secondary-background-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: opacity var(--transition-duration) ease;
      }

      .pm25-circle.disabled {
        opacity: 0.5;
      }

      .pm25-animation {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 2px solid transparent;
        animation: rotate 2s linear infinite;
        display: none;
      }

      .running .pm25-animation {
        display: block;
        border-top-color: var(--primary-color);
      }

      .pm25-value {
        font-size: 42px;
        font-weight: 500;
        margin-bottom: 4px;
        transition: all var(--transition-duration) ease;
      }

      .pm25-value.disabled {
        color: var(--disabled-text-color) !important;
      }

      .pm25-label {
        font-size: 14px;
        color: var(--secondary-text-color);
        transition: color var(--transition-duration) ease;
        padding-top: 16px;
      }

      .pm25-label.disabled {
        color: var(--disabled-text-color);
      }

      .controls {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      .control-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .control-group-title {
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-left: 4px;
      }

      .speed-buttons {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        margin-bottom: 16px;
      }

      .speed-buttons mwc-button {
        --mdc-theme-primary: var(--primary-color);
        width: 100%;
      }

      .speed-buttons mwc-button.active {
        background-color: var(--primary-color);
        color: white;
      }

      .mode-select {
        width: 100%;
      }

      .mode-select select {
        width: 100%;
        padding: 12px;
        border-radius: var(--control-radius);
        background: var(--secondary-background-color);
        border: 1px solid var(--divider-color);
        color: var(--primary-text-color);
        font-size: 14px;
        outline: none;
        cursor: pointer;
      }

      .mode-select select:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .info-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }

      .info-item {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .info-label {
        font-size: 12px;
        color: var(--secondary-text-color);
      }

      .info-value {
        font-size: 16px;
        color: var(--primary-text-color);
      }

      .control-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px;
        border-radius: var(--control-radius);
        background: var(--secondary-background-color);
      }

      .light-control {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .light-icon {
        color: var(--secondary-text-color);
        transition: color var(--transition-duration) ease;
      }

      .light-icon.on {
        color: var(--light-on-color);
      }

      .control-row.light-on mwc-switch {
        --mdc-theme-primary: var(--light-on-color);
        --mdc-switch-selected-track-color: rgba(var(--rgb-light-on-color), 0.3);
        --mdc-switch-selected-handle-color: var(--light-on-color);
      }

      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}};t([Wt({attribute:!1})],Xt.prototype,"hass",void 0),t([Wt({attribute:!1})],Xt.prototype,"config",void 0),Xt=t([Bt("ha-air-purifier-card")],Xt);export{Xt as HaAirPurifierCard};
