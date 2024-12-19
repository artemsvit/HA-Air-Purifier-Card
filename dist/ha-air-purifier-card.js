function t(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t;var l;const h=window,c=h.trustedTypes,d=c?c.emptyScript:"",u=h.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),_={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v},$="finalized";class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_}static finalize(){if(this.hasOwnProperty($))return!1;this[$]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=_){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var g;f[$]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:f}),(null!==(l=h.reactiveElementVersions)&&void 0!==l?l:h.reactiveElementVersions=[]).push("1.6.3");const m=window,A=m.trustedTypes,y=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,b="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,x="?"+w,C=`<${x}>`,E=document,S=()=>E.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,M="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,k=/-->/g,U=/>/g,T=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,R=/"/g,j=/^(?:script|style|textarea|title)$/i,L=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),I=new WeakMap,D=E.createTreeWalker(E,129,null,!1);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==y?y.createHTML(e):e}class B{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,h]=((t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=P;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===P?"!--"===l[1]?r=k:void 0!==l[1]?r=U:void 0!==l[2]?(j.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=T):void 0!==l[3]&&(r=T):r===T?">"===l[0]?(r=null!=o?o:P,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?T:'"'===l[3]?R:O):r===R||r===O?r=T:r===k||r===U?r=P:(r=T,o=void 0);const d=r===T&&t[e+1].startsWith("/>")?" ":"";n+=r===P?i+C:h>=0?(s.push(a),i.slice(0,h)+b+i.slice(h)+w+d):i+w+(-2===h?(s.push(void 0),e):d)}return[V(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]})(t,e);if(this.el=B.createElement(l,i),D.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=D.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(b)||e.startsWith(w)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+b).split(w),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?X:"@"===e[1]?G:F})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(j.test(s.tagName)){const t=s.textContent.split(w),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],S()),D.nextNode(),a.push({type:2,index:++o});s.append(t[e],S())}}}else if(8===s.nodeType)if(s.data===x)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(w,t+1));)a.push({type:7,index:o}),t+=w.length-1}o++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,s){var o,n,r,a;if(e===L)return e;let l=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const h=H(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,s)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:E).importNode(i,!0);D.currentNode=o;let n=D.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new Z(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new Q(n,this,t)),this._$AV.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(n=D.nextNode(),r++)}return D.currentNode=E,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{constructor(t,e,i,s){var o;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),H(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>N(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=B.createElement(V(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new q(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new B(t)),e}T(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Z(this.k(S()),this.k(S()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,i,s,o){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=W(this,t,e,0),n=!H(t)||t!==this._$AH&&t!==L,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=W(this,s[i+r],e,r),a===L&&(a=this._$AH[r]),n||(n=!H(a)||a!==this._$AH[r]),a===z?t=z:t!==z&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}const J=A?A.emptyScript:"";class X extends F{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class G extends F{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:z)===L)return;const s=this._$AH,o=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==z&&(s===z||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const Y=m.litHtmlPolyfillSupport;var tt;null==Y||Y(B,Z),(null!==(g=m.litHtmlVersions)&&void 0!==g?g:m.litHtmlVersions=[]).push("2.8.0");const et=window,it=et.trustedTypes,st=it?it.createPolicy("lit-html",{createHTML:t=>t}):void 0,ot="$lit$",nt=`lit$${(Math.random()+"").slice(9)}$`,rt="?"+nt,at=`<${rt}>`,lt=document,ht=()=>lt.createComment(""),ct=t=>null===t||"object"!=typeof t&&"function"!=typeof t,dt=Array.isArray,ut="[ \t\n\f\r]",pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,_t=/>/g,$t=RegExp(`>|${ut}(?:([^\\s"'>=/]+)(${ut}*=${ut}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ft=/'/g,gt=/"/g,mt=/^(?:script|style|textarea|title)$/i,At=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),yt=Symbol.for("lit-noChange"),bt=Symbol.for("lit-nothing"),wt=new WeakMap,xt=lt.createTreeWalker(lt,129,null,!1);function Ct(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==st?st.createHTML(e):e}const Et=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=pt;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===pt?"!--"===l[1]?r=vt:void 0!==l[1]?r=_t:void 0!==l[2]?(mt.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=$t):void 0!==l[3]&&(r=$t):r===$t?">"===l[0]?(r=null!=o?o:pt,h=-1):void 0===l[1]?h=-2:(h=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?$t:'"'===l[3]?gt:ft):r===gt||r===ft?r=$t:r===vt||r===_t?r=pt:(r=$t,o=void 0);const d=r===$t&&t[e+1].startsWith("/>")?" ":"";n+=r===pt?i+at:h>=0?(s.push(a),i.slice(0,h)+ot+i.slice(h)+nt+d):i+nt+(-2===h?(s.push(void 0),e):d)}return[Ct(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class St{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,h]=Et(t,e);if(this.el=St.createElement(l,i),xt.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=xt.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(ot)||e.startsWith(nt)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+ot).split(nt),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?kt:"?"===e[1]?Tt:"@"===e[1]?Ot:Pt})}else a.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(mt.test(s.tagName)){const t=s.textContent.split(nt),e=t.length-1;if(e>0){s.textContent=it?it.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],ht()),xt.nextNode(),a.push({type:2,index:++o});s.append(t[e],ht())}}}else if(8===s.nodeType)if(s.data===rt)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(nt,t+1));)a.push({type:7,index:o}),t+=nt.length-1}o++}}static createElement(t,e){const i=lt.createElement("template");return i.innerHTML=t,i}}function Ht(t,e,i=t,s){var o,n,r,a;if(e===yt)return e;let l=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const h=ct(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=Ht(t,l._$AS(t,e.values),l,s)),e}class Nt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:lt).importNode(i,!0);xt.currentNode=o;let n=xt.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new Mt(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new Rt(n,this,t)),this._$AV.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(n=xt.nextNode(),r++)}return xt.currentNode=lt,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Mt{constructor(t,e,i,s){var o;this.type=2,this._$AH=bt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ht(this,t,e),ct(t)?t===bt||null==t||""===t?(this._$AH!==bt&&this._$AR(),this._$AH=bt):t!==this._$AH&&t!==yt&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>dt(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==bt&&ct(this._$AH)?this._$AA.nextSibling.data=t:this.$(lt.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=St.createElement(Ct(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new Nt(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=wt.get(t.strings);return void 0===e&&wt.set(t.strings,e=new St(t)),e}T(t){dt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Mt(this.k(ht()),this.k(ht()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Pt{constructor(t,e,i,s,o){this.type=1,this._$AH=bt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=bt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=Ht(this,t,e,0),n=!ct(t)||t!==this._$AH&&t!==yt,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=Ht(this,s[i+r],e,r),a===yt&&(a=this._$AH[r]),n||(n=!ct(a)||a!==this._$AH[r]),a===bt?t=bt:t!==bt&&(t+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===bt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class kt extends Pt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===bt?void 0:t}}const Ut=it?it.emptyScript:"";class Tt extends Pt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==bt?this.element.setAttribute(this.name,Ut):this.element.removeAttribute(this.name)}}class Ot extends Pt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Ht(this,t,e,0))&&void 0!==i?i:bt)===yt)return;const s=this._$AH,o=t===bt&&s!==bt||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==bt&&(s===bt||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ht(this,t)}}const jt=et.litHtmlPolyfillSupport;null==jt||jt(St,Mt),(null!==(tt=et.litHtmlVersions)&&void 0!==tt?tt:et.litHtmlVersions=[]).push("2.8.0");var Lt,zt;class It extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new Mt(e.insertBefore(ht(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return yt}}It.finalized=!0,It._$litElement$=!0,null===(Lt=globalThis.litElementHydrateSupport)||void 0===Lt||Lt.call(globalThis,{LitElement:It});const Dt=globalThis.litElementPolyfillSupport;null==Dt||Dt({LitElement:It}),(null!==(zt=globalThis.litElementVersions)&&void 0!==zt?zt:globalThis.litElementVersions=[]).push("3.3.3");const Vt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),Bt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Wt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Bt(t,e)}var qt,Zt,Ft;null===(qt=window.HTMLSlotElement)||void 0===qt||qt.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Zt||(Zt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Ft||(Ft={}));var Kt="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z";let Jt=class extends It{setConfig(t){this._config=Object.assign({show_animation:!0,show_speed:!0,show_humidity:!0,show_temperature:!0,show_filter_life:!0,show_light_control:!0},t)}_valueChanged(t){const e=t.detail.value,i=Object.assign(Object.assign({},this._config),e),s=new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0});this.dispatchEvent(s)}render(){if(!this.hass||!this._config)return At``;const t=[{name:"entity",required:!0,selector:{entity:{domain:"fan",include_entities:Object.keys(this.hass.states).filter((t=>t.startsWith("fan."))).filter((t=>"air_purifier"===this.hass.states[t].attributes.device_class||t.includes("air_purifier")||t.includes("purifier")))}}},{name:"name",required:!1,selector:{text:{}}},{name:"show_animation",required:!1,default:!0,description:"Show rotating animation around PM2.5 value when device is on",selector:{boolean:{}}},{name:"show_speed",required:!1,default:!0,description:"Display fan speed in RPM",selector:{boolean:{}}},{name:"show_humidity",required:!1,default:!0,description:"Display current relative humidity",selector:{boolean:{}}},{name:"show_temperature",required:!1,default:!0,description:"Display current temperature",selector:{boolean:{}}},{name:"show_filter_life",required:!1,default:!0,description:"Display remaining filter life percentage",selector:{boolean:{}}},{name:"show_light_control",required:!1,default:!0,description:"Show button to control the indicator light",selector:{boolean:{}}}];return At`
      <div class="card-config">
        <ha-form
          .hass=${this.hass}
          .data=${this._config}
          .schema=${t}
          .computeLabel=${t=>{const e=t.name,i=t=>t.charAt(0).toUpperCase()+t.slice(1);return"entity"===e?"Air Purifier Entity":"name"===e?"Card Name (Optional)":e.startsWith("show_")?`Show ${i(e.replace("show_","").replace("_"," "))}`:i(e.replace("_"," "))}}
          @value-changed=${this._valueChanged}
        ></ha-form>
      </div>
    `}static get styles(){return r`
      .card-config {
        padding: 16px;
      }
      ha-form {
        display: block;
      }
    `}};t([Wt({attribute:!1})],Jt.prototype,"hass",void 0),t([Wt({attribute:!1})],Jt.prototype,"_config",void 0),Jt=t([Vt("ha-air-purifier-card-editor")],Jt),window.customCards=window.customCards||[],window.customCards.push({type:"ha-air-purifier-card",name:"Xiaomi Air Purifier Card",description:"A beautiful card for Xiaomi Air Purifier"});const Xt=12,Gt=35.4,Qt=55.4,Yt={None:"None",Auto:"Auto",Sleep:"Sleep",Favorite:"Favorite"};let te=class extends It{static getConfigElement(){return document.createElement("ha-air-purifier-card-editor")}static getStubConfig(){return{type:"custom:ha-air-purifier-card",entity:"fan.xiaomi_air_purifier",show_animation:!0,show_speed:!0,show_humidity:!0,show_temperature:!0,show_filter_life:!0,show_light_control:!0}}setConfig(t){if(!t.entity||"fan"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the fan domain.");this.config=Object.assign({show_animation:!0,show_speed:!0,show_humidity:!0,show_temperature:!0,show_filter_life:!0,show_light_control:!0},t)}shouldUpdate(t){return function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var s=e.get("hass");return!s||s.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}_handlePowerClick(){if(!this.hass||!this.config)return;const t=this.hass.states[this.config.entity];t&&this.hass.callService("fan","on"===t.state?"turn_off":"turn_on",{entity_id:this.config.entity})}_handleSpeedClick(t){if(!this.hass||!this.config)return;const e="High"===t?100:"Medium"===t?50:10;this.hass.callService("fan","set_percentage",{entity_id:this.config.entity,percentage:e})}_handleModeChange(t){if(!this.hass||!this.config)return;const e=t.target.value;e&&e!==Yt.None&&this.hass.callService("fan","set_preset_mode",{entity_id:this.config.entity,preset_mode:e})}_handleLightToggle(){if(!this.hass||!this.config)return;const t=this.config.entity.replace("fan","light").replace("air_purifier","switch_status"),e=this.hass.states[t];e&&this.hass.callService("light","on"===e.state?"turn_off":"turn_on",{entity_id:t})}render(){if(!this.config||!this.hass)return At``;const t=this.hass.states[this.config.entity];if(!t)return At`
        <ha-card>
          <div class="not-found">
            Entity not found: ${this.config.entity}
          </div>
        </ha-card>
      `;const e=this.config.name||t.attributes.friendly_name,i=t.state,s=this.config.entity.split(".")[1],o=this.hass.states[`sensor.${s.replace("air_purifier","pm25")}`],n=this.hass.states[`sensor.${s.replace("air_purifier","motor_speed")}`],r=this.hass.states[`sensor.${s.replace("air_purifier","relative_humidity")}`],a=this.hass.states[`sensor.${s.replace("air_purifier","temperature")}`],l=this.hass.states[`sensor.${s.replace("air_purifier","filter_life_level")}`],h=this.hass.states[`light.${s.replace("air_purifier","switch_status")}`],c=Number(null==o?void 0:o.state)||0,d=(null==n?void 0:n.state)||"0",u=(null==r?void 0:r.state)||"0",p=(null==a?void 0:a.state)||"0",v=(null==l?void 0:l.state)||"0",_="on"===(null==h?void 0:h.state),$=t.attributes.percentage||0,f=$>=90?"High":$>=45?"Medium":"Low",g=(m=c)<=Xt?"var(--success-color, #43a047)":m<=Gt||m<=Qt?"var(--warning-color, #ffa600)":"var(--error-color, #db4437)";var m;const A=t.attributes.preset_mode||Yt.None;return At`
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
            <div class="pm25-circle ${"on"===i?"active":""}" style="--pm25-color: ${g}">
              ${this.config.show_animation&&"on"===i?At`
                <div class="pm25-animation"></div>
              `:""}
              <div class="value ${"on"!==i?"disabled":""}">${c}</div>
              <div class="label ${"on"!==i?"disabled":""}">PM2.5</div>
            </div>
          </div>

          <div class="controls">
            ${"on"===i?At`
              <div class="control-group">
                <div class="control-group-title">Fan Speed</div>
                <div class="speed-buttons">
                  ${["Low","Medium","High"].map((t=>At`
                    <ha-button
                      .raised=${f===t}
                      @click=${()=>this._handleSpeedClick(t)}
                      class="speed-button ${f===t?"active":""}"
                    >
                      <div class="button-content">
                        <ha-svg-icon .path=${Kt}></ha-svg-icon>
                        <span class="button-text">${t}</span>
                      </div>
                    </ha-button>
                  `))}
                </div>
              </div>

              <div class="control-group">
                <div class="control-group-title">Mode</div>
                <ha-select
                  .value=${A}
                  @change=${this._handleModeChange}
                  class="mode-select"
                >
                  ${Object.entries(Yt).map((([t,e])=>At`
                    <ha-list-item .value=${e}>
                      ${e}
                    </ha-list-item>
                  `))}
                </ha-select>
              </div>

              ${this.config.show_speed||this.config.show_humidity||this.config.show_temperature||this.config.show_filter_life?At`
                <div class="status-section">
                  ${this.config.show_speed?At`
                    <ha-statistic-badge
                      .value=${d}
                      .description=${"Fan Speed"}
                      .icon=${Kt}
                      unit="RPM"
                    ></ha-statistic-badge>
                  `:""}
                  
                  ${this.config.show_humidity?At`
                    <ha-statistic-badge
                      .value=${u}
                      .description=${"Humidity"}
                      unit="%"
                    ></ha-statistic-badge>
                  `:""}
                  
                  ${this.config.show_temperature?At`
                    <ha-statistic-badge
                      .value=${p}
                      .description=${"Temperature"}
                      unit="°C"
                    ></ha-statistic-badge>
                  `:""}
                  
                  ${this.config.show_filter_life?At`
                    <ha-statistic-badge
                      .value=${v}
                      .description=${"Filter Life"}
                      unit="%"
                    ></ha-statistic-badge>
                  `:""}
                </div>
              `:""}

              ${this.config.show_light_control&&h?At`
                <div class="control-group">
                  <ha-button-toggle
                    .label=${"Indicator Light"}
                    .pressed=${_}
                    @click=${this._handleLightToggle}
                  >
                    <ha-svg-icon .path=${"M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z"}></ha-svg-icon>
                  </ha-button-toggle>
                </div>
              `:""}
            `:""}
          </div>
        </div>
      </ha-card>
    `}static get styles(){return r`
      :host {
        --card-radius: var(--ha-card-border-radius, 12px);
        --control-radius: 8px;
        --transition-duration: 0.2s;
      }

      ha-card {
        overflow: hidden;
        padding: 0;
      }

      .card-header {
        padding: 16px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
        border-bottom: 1px solid var(--divider-color);
      }

      .name {
        font-size: 18px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .power-button {
        --mdc-icon-button-size: 48px;
        color: var(--primary-text-color);
        transition: color var(--transition-duration) ease;
      }

      .power-button.active {
        color: var(--primary-color);
      }

      .power-button[disabled] {
        color: var(--disabled-text-color);
      }

      .content {
        padding: 20px;
      }

      .pm25-section {
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

      .pm25-animation {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 2px solid transparent;
        border-top-color: var(--pm25-color);
        animation: rotate 2s linear infinite;
      }

      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .value {
        font-size: 42px;
        font-weight: 500;
        color: var(--pm25-color);
        margin-bottom: 4px;
        transition: color var(--transition-duration) ease;
      }

      .value.disabled {
        color: var(--disabled-text-color) !important;
      }

      .label {
        font-size: 14px;
        color: var(--secondary-text-color);
        transition: color var(--transition-duration) ease;
      }

      .label.disabled {
        color: var(--disabled-text-color);
      }

      .controls {
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
      }

      .speed-button {
        --mdc-theme-primary: var(--primary-color);
        width: 100%;
      }

      .speed-button.active {
        background-color: var(--primary-color);
        color: var(--text-primary-color, white);
      }

      .button-content {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .button-text {
        margin-left: 16px;
      }

      .mode-select {
        width: 100%;
        --mdc-select-fill-color: var(--secondary-background-color);
        --mdc-select-ink-color: var(--primary-text-color);
        --mdc-select-label-ink-color: var(--secondary-text-color);
        --mdc-select-dropdown-icon-color: var(--secondary-text-color);
        --mdc-select-focused-dropdown-icon-color: var(--primary-color);
        --mdc-select-outlined-idle-border-color: var(--divider-color);
        --mdc-select-outlined-hover-border-color: var(--secondary-text-color);
      }

      .status-section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 8px;
      }

      ha-statistic-badge {
        --ha-statistic-badge-size: 100%;
        --ha-statistic-badge-justify-content: flex-start;
      }

      .not-found {
        padding: 16px;
        text-align: center;
        color: var(--error-color);
      }
    `}};t([Wt({attribute:!1})],te.prototype,"hass",void 0),t([Wt({attribute:!1})],te.prototype,"config",void 0),te=t([Vt("ha-air-purifier-card")],te);export{te as HaAirPurifierCard};
