function t(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(i,t,s)},l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t;var a;const h=window,c=h.trustedTypes,d=c?c.emptyScript:"",u=h.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v},$="finalized";class _ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty($))return!1;this[$]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=f){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var g;_[$]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:_}),(null!==(a=h.reactiveElementVersions)&&void 0!==a?a:h.reactiveElementVersions=[]).push("1.6.3");const m=window,y=m.trustedTypes,A=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,b="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,x="?"+w,E=`<${x}>`,S=document,C=()=>S.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,N="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,M=/>/g,U=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,R=/"/g,L=/^(?:script|style|textarea|title)$/i,j=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),V=new WeakMap,I=S.createTreeWalker(S,129,null,!1);function B(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}class D{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[a,h]=((t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=P;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,a=r.exec(i),null!==a);)c=r.lastIndex,r===P?"!--"===a[1]?r=T:void 0!==a[1]?r=M:void 0!==a[2]?(L.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=U):void 0!==a[3]&&(r=U):r===U?">"===a[0]?(r=null!=o?o:P,h=-1):void 0===a[1]?h=-2:(h=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?U:'"'===a[3]?R:O):r===R||r===O?r=U:r===T||r===M?r=P:(r=U,o=void 0);const d=r===U&&t[e+1].startsWith("/>")?" ":"";n+=r===P?i+E:h>=0?(s.push(l),i.slice(0,h)+b+i.slice(h)+w+d):i+w+(-2===h?(s.push(void 0),e):d)}return[B(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]})(t,e);if(this.el=D.createElement(a,i),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=I.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(b)||e.startsWith(w)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+b).split(w),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?X:"@"===e[1]?G:Z})}else l.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(L.test(s.tagName)){const t=s.textContent.split(w),e=t.length-1;if(e>0){s.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],C()),I.nextNode(),l.push({type:2,index:++o});s.append(t[e],C())}}}else if(8===s.nodeType)if(s.data===x)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(w,t+1));)l.push({type:7,index:o}),t+=w.length-1}o++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,s){var o,n,r,l;if(e===j)return e;let a=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const h=H(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Co)&&void 0!==r?r:l._$Co=[])[s]=a:i._$Cl=a),void 0!==a&&(e=W(t,a._$AS(t,e.values),a,s)),e}class q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);I.currentNode=o;let n=I.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new F(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new Q(n,this,t)),this._$AV.push(e),a=s[++l]}r!==(null==a?void 0:a.index)&&(n=I.nextNode(),r++)}return I.currentNode=S,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class F{constructor(t,e,i,s){var o;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),H(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>k(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=D.createElement(B(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new q(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new D(t)),e}T(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new F(this.k(C()),this.k(C()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Z{constructor(t,e,i,s,o){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=W(this,t,e,0),n=!H(t)||t!==this._$AH&&t!==j,n&&(this._$AH=t);else{const s=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=W(this,s[i+r],e,r),l===j&&(l=this._$AH[r]),n||(n=!H(l)||l!==this._$AH[r]),l===z?t=z:t!==z&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!s&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}const J=y?y.emptyScript:"";class X extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class G extends Z{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:z)===j)return;const s=this._$AH,o=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==z&&(s===z||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const Y=m.litHtmlPolyfillSupport;var tt;null==Y||Y(D,F),(null!==(g=m.litHtmlVersions)&&void 0!==g?g:m.litHtmlVersions=[]).push("2.8.0");const et=window,it=et.trustedTypes,st=it?it.createPolicy("lit-html",{createHTML:t=>t}):void 0,ot="$lit$",nt=`lit$${(Math.random()+"").slice(9)}$`,rt="?"+nt,lt=`<${rt}>`,at=document,ht=()=>at.createComment(""),ct=t=>null===t||"object"!=typeof t&&"function"!=typeof t,dt=Array.isArray,ut="[ \t\n\f\r]",pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,ft=/>/g,$t=RegExp(`>|${ut}(?:([^\\s"'>=/]+)(${ut}*=${ut}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),_t=/'/g,gt=/"/g,mt=/^(?:script|style|textarea|title)$/i,yt=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),At=Symbol.for("lit-noChange"),bt=Symbol.for("lit-nothing"),wt=new WeakMap,xt=at.createTreeWalker(at,129,null,!1);function Et(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==st?st.createHTML(e):e}const St=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=pt;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,a=r.exec(i),null!==a);)c=r.lastIndex,r===pt?"!--"===a[1]?r=vt:void 0!==a[1]?r=ft:void 0!==a[2]?(mt.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=$t):void 0!==a[3]&&(r=$t):r===$t?">"===a[0]?(r=null!=o?o:pt,h=-1):void 0===a[1]?h=-2:(h=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?$t:'"'===a[3]?gt:_t):r===gt||r===_t?r=$t:r===vt||r===ft?r=pt:(r=$t,o=void 0);const d=r===$t&&t[e+1].startsWith("/>")?" ":"";n+=r===pt?i+lt:h>=0?(s.push(l),i.slice(0,h)+ot+i.slice(h)+nt+d):i+nt+(-2===h?(s.push(void 0),e):d)}return[Et(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class Ct{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[a,h]=St(t,e);if(this.el=Ct.createElement(a,i),xt.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=xt.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(ot)||e.startsWith(nt)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+ot).split(nt),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?Tt:"?"===e[1]?Ut:"@"===e[1]?Ot:Pt})}else l.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(mt.test(s.tagName)){const t=s.textContent.split(nt),e=t.length-1;if(e>0){s.textContent=it?it.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],ht()),xt.nextNode(),l.push({type:2,index:++o});s.append(t[e],ht())}}}else if(8===s.nodeType)if(s.data===rt)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(nt,t+1));)l.push({type:7,index:o}),t+=nt.length-1}o++}}static createElement(t,e){const i=at.createElement("template");return i.innerHTML=t,i}}function Ht(t,e,i=t,s){var o,n,r,l;if(e===At)return e;let a=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const h=ct(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Co)&&void 0!==r?r:l._$Co=[])[s]=a:i._$Cl=a),void 0!==a&&(e=Ht(t,a._$AS(t,e.values),a,s)),e}class kt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:at).importNode(i,!0);xt.currentNode=o;let n=xt.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Nt(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new Rt(n,this,t)),this._$AV.push(e),a=s[++l]}r!==(null==a?void 0:a.index)&&(n=xt.nextNode(),r++)}return xt.currentNode=at,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Nt{constructor(t,e,i,s){var o;this.type=2,this._$AH=bt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ht(this,t,e),ct(t)?t===bt||null==t||""===t?(this._$AH!==bt&&this._$AR(),this._$AH=bt):t!==this._$AH&&t!==At&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>dt(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==bt&&ct(this._$AH)?this._$AA.nextSibling.data=t:this.$(at.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Ct.createElement(Et(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new kt(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=wt.get(t.strings);return void 0===e&&wt.set(t.strings,e=new Ct(t)),e}T(t){dt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Nt(this.k(ht()),this.k(ht()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Pt{constructor(t,e,i,s,o){this.type=1,this._$AH=bt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=bt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=Ht(this,t,e,0),n=!ct(t)||t!==this._$AH&&t!==At,n&&(this._$AH=t);else{const s=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=Ht(this,s[i+r],e,r),l===At&&(l=this._$AH[r]),n||(n=!ct(l)||l!==this._$AH[r]),l===bt?t=bt:t!==bt&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!s&&this.j(t)}j(t){t===bt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Tt extends Pt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===bt?void 0:t}}const Mt=it?it.emptyScript:"";class Ut extends Pt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==bt?this.element.setAttribute(this.name,Mt):this.element.removeAttribute(this.name)}}class Ot extends Pt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Ht(this,t,e,0))&&void 0!==i?i:bt)===At)return;const s=this._$AH,o=t===bt&&s!==bt||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==bt&&(s===bt||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ht(this,t)}}const Lt=et.litHtmlPolyfillSupport;null==Lt||Lt(Ct,Nt),(null!==(tt=et.litHtmlVersions)&&void 0!==tt?tt:et.litHtmlVersions=[]).push("2.8.0");var jt,zt;class Vt extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new Nt(e.insertBefore(ht(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return At}}Vt.finalized=!0,Vt._$litElement$=!0,null===(jt=globalThis.litElementHydrateSupport)||void 0===jt||jt.call(globalThis,{LitElement:Vt});const It=globalThis.litElementPolyfillSupport;null==It||It({LitElement:Vt}),(null!==(zt=globalThis.litElementVersions)&&void 0!==zt?zt:globalThis.litElementVersions=[]).push("3.3.3");const Bt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),Dt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Wt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Dt(t,e)}var qt,Ft,Zt;null===(qt=window.HTMLSlotElement)||void 0===qt||qt.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Ft||(Ft={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Zt||(Zt={}));var Kt=function(t,e,i,s){s=s||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return o.detail=i,t.dispatchEvent(o),o};let Jt=class extends Vt{setConfig(t){this._config=t}_valueChanged(t){var e;if(!this._config||!this.hass)return;const i=t.target;if(!i)return;const s=i.value||(null===(e=t.detail)||void 0===e?void 0:e.value)||i.checked;if(""===s){const t=Object.assign({},this._config);delete t[i.configValue],Kt(this,"config-changed",{config:t})}else{const t=Object.assign(Object.assign({},this._config),{[i.configValue]:s});Kt(this,"config-changed",{config:t})}}render(){return this.hass&&this._config?yt`
      <div class="card-config">
        <div class="config-row">
          <ha-entity-picker
            .label="Air Purifier Entity (Required)"
            .hass=${this.hass}
            .value=${this._config.entity}
            .configValue=${"entity"}
            .includeDomains=${["fan"]}
            .entityFilter=${t=>t.startsWith("fan.zhimi_mb3_")}
            @value-changed=${this._valueChanged}
            required
          ></ha-entity-picker>
        </div>

        <div class="config-row">
          <ha-textfield
            label="Card Name (Optional)"
            .value=${this._config.name||""}
            .configValue=${"name"}
            @input=${this._valueChanged}
          ></ha-textfield>
        </div>

        <div class="config-row">
          <ha-formfield label="Show PM2.5 Animation">
            <ha-switch
              .checked=${!1!==this._config.show_animation}
              .configValue=${"show_animation"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="config-row">
          <ha-formfield label="Show Speed">
            <ha-switch
              .checked=${!1!==this._config.show_speed}
              .configValue=${"show_speed"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="config-row">
          <ha-formfield label="Show Humidity">
            <ha-switch
              .checked=${!1!==this._config.show_humidity}
              .configValue=${"show_humidity"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="config-row">
          <ha-formfield label="Show Temperature">
            <ha-switch
              .checked=${!1!==this._config.show_temperature}
              .configValue=${"show_temperature"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="config-row">
          <ha-formfield label="Show Filter Life">
            <ha-switch
              .checked=${!1!==this._config.show_filter_life}
              .configValue=${"show_filter_life"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="config-row">
          <ha-formfield label="Show Light Control">
            <ha-switch
              .checked=${!1!==this._config.show_light_control}
              .configValue=${"show_light_control"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>
    `:yt``}static get styles(){return r`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;
      }

      .config-row {
        display: flex;
        align-items: center;
      }

      ha-entity-picker,
      ha-textfield {
        width: 100%;
      }

      ha-formfield {
        display: flex;
        height: 48px;
        align-items: center;
        --mdc-typography-body2-font-size: 14px;
      }

      ha-switch {
        --mdc-theme-secondary: var(--primary-color);
      }
    `}};t([Wt({attribute:!1})],Jt.prototype,"hass",void 0),t([Wt({type:Object})],Jt.prototype,"_config",void 0),Jt=t([Bt("ha-air-purifier-card-editor")],Jt),window.customCards=window.customCards||[],window.customCards.push({type:"ha-air-purifier-card",name:"Xiaomi Air Purifier Card",description:"A beautiful card for Xiaomi Air Purifier"});let Xt=class extends Vt{static getConfigElement(){return document.createElement("ha-air-purifier-card-editor")}static getStubConfig(){return{type:"custom:ha-air-purifier-card",entity:"fan.zhimi_mb3_7bb1_air_purifier"}}setConfig(t){if(!t.entity||"fan"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the fan domain.");this.config=t}shouldUpdate(t){return function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var s=e.get("hass");return!s||s.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}_handlePowerClick(){if(!this.hass||!this.config)return;const t=this.hass.states[this.config.entity];t&&this.hass.callService("fan","on"===t.state?"turn_off":"turn_on",{entity_id:this.config.entity})}_handleModeChange(t){if(!this.hass||!this.config)return;const e=t.detail.value.toLowerCase();this.hass.callService("fan","set_preset_mode",{entity_id:this.config.entity,preset_mode:e})}_handleLightToggle(t){if(!this.hass||!this.config)return;const e=this.config.entity.replace("fan","light").replace("air_purifier","switch_status");this.hass.callService("light",t.detail.checked?"turn_on":"turn_off",{entity_id:e})}render(){if(!this.config||!this.hass)return yt``;const t=this.hass.states[this.config.entity];if(!t)return yt`
        <ha-card>
          <div class="warning">
            Entity not found: ${this.config.entity}
          </div>
        </ha-card>
      `;const e=this.config.name||t.attributes.friendly_name,i=t.state,s=this.config.entity.split(".")[1],o=this.hass.states[`sensor.${s.replace("air_purifier","pm25")}`],n=this.hass.states[`sensor.${s.replace("air_purifier","motor_speed")}`],r=this.hass.states[`sensor.${s.replace("air_purifier","relative_humidity")}`],l=this.hass.states[`sensor.${s.replace("air_purifier","temperature")}`],a=this.hass.states[`sensor.${s.replace("air_purifier","filter_life_level")}`],h=this.hass.states[`light.${s.replace("air_purifier","switch_status")}`],c=(null==o?void 0:o.state)||"0",d=(null==n?void 0:n.state)||"0",u=(null==r?void 0:r.state)||"0",p=(null==l?void 0:l.state)||"0",v=(null==a?void 0:a.state)||"0",f="on"===(null==h?void 0:h.state);return yt`
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
            <mwc-select
              class="mode-select"
              @selected=${this._handleModeChange}
              .value=${t.attributes.preset_mode||"none"}
              ?disabled=${"on"!==i}
            >
              <mwc-list-item value="none">None</mwc-list-item>
              <mwc-list-item value="auto">Auto</mwc-list-item>
              <mwc-list-item value="sleep">Sleep</mwc-list-item>
              <mwc-list-item value="favorite">Favorite</mwc-list-item>
            </mwc-select>
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
                  <span class="info-value">${u}%</span>
                </div>
              `:""}
              ${!1!==this.config.show_temperature?yt`
                <div class="info-item">
                  <span class="info-label">Temperature</span>
                  <span class="info-value">${p}°C</span>
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
                  <mwc-switch
                    ?checked=${f}
                    @change=${this._handleLightToggle}
                    ?disabled=${"on"!==i}
                  ></mwc-switch>
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
        --mdc-theme-primary: var(--primary-color);
        --mdc-select-fill-color: var(--secondary-background-color);
        --mdc-select-ink-color: var(--primary-text-color);
        --mdc-select-label-ink-color: var(--secondary-text-color);
        --mdc-select-dropdown-icon-color: var(--secondary-text-color);
        --mdc-select-focused-dropdown-icon-color: var(--primary-color);
        --mdc-select-outlined-idle-border-color: var(--divider-color);
        --mdc-select-outlined-hover-border-color: var(--secondary-text-color);
      }

      ha-card {
        background: var(--card-background-color);
        border-radius: var(--card-radius, 12px);
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
        transition: color var(--transition-duration, 0.2s) ease;
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
        transition: opacity var(--transition-duration, 0.2s) ease;
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
        transition: all var(--transition-duration, 0.2s) ease;
      }

      .pm25-value.disabled {
        color: var(--disabled-text-color) !important;
      }

      .pm25-label {
        font-size: 14px;
        color: var(--secondary-text-color);
        transition: color var(--transition-duration, 0.2s) ease;
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

      .mode-select {
        width: 100%;
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
        border-radius: var(--control-radius, 8px);
        background: var(--secondary-background-color);
      }

      .control-row.light-on mwc-switch {
        --mdc-theme-primary: var(--light-on-color, #fdd835);
        --mdc-switch-selected-track-color: rgba(var(--rgb-light-on-color, 253, 216, 53), 0.3);
        --mdc-switch-selected-handle-color: var(--light-on-color, #fdd835);
      }

      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}};t([Wt({attribute:!1})],Xt.prototype,"hass",void 0),t([Wt({attribute:!1})],Xt.prototype,"config",void 0),Xt=t([Bt("ha-air-purifier-card")],Xt);export{Xt as HaAirPurifierCard};
