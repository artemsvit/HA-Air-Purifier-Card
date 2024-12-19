function t(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(o=t[l])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(i,t,s)},l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t;var a;const h=window,c=h.trustedTypes,d=c?c.emptyScript:"",u=h.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v},_="finalized";class $ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=f){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var g;$[_]=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:$}),(null!==(a=h.reactiveElementVersions)&&void 0!==a?a:h.reactiveElementVersions=[]).push("1.6.3");const m=window,A=m.trustedTypes,y=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,b="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,C="?"+w,x=`<${C}>`,S=document,E=()=>S.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,M="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,P=/>/g,T=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,z=/"/g,O=/^(?:script|style|textarea|title)$/i,L=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),j=new WeakMap,B=S.createTreeWalker(S,129,null,!1);function I(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==y?y.createHTML(e):e}class D{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[a,h]=((t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=N;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,a=r.exec(i),null!==a);)c=r.lastIndex,r===N?"!--"===a[1]?r=V:void 0!==a[1]?r=P:void 0!==a[2]?(O.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=T):void 0!==a[3]&&(r=T):r===T?">"===a[0]?(r=null!=o?o:N,h=-1):void 0===a[1]?h=-2:(h=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?T:'"'===a[3]?z:U):r===z||r===U?r=T:r===V||r===P?r=N:(r=T,o=void 0);const d=r===T&&t[e+1].startsWith("/>")?" ":"";n+=r===N?i+x:h>=0?(s.push(l),i.slice(0,h)+b+i.slice(h)+w+d):i+w+(-2===h?(s.push(void 0),e):d)}return[I(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]})(t,e);if(this.el=D.createElement(a,i),B.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=B.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(b)||e.startsWith(w)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+b).split(w),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?X:"@"===e[1]?G:F})}else l.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(O.test(s.tagName)){const t=s.textContent.split(w),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],E()),B.nextNode(),l.push({type:2,index:++o});s.append(t[e],E())}}}else if(8===s.nodeType)if(s.data===C)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(w,t+1));)l.push({type:7,index:o}),t+=w.length-1}o++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,s){var o,n,r,l;if(e===L)return e;let a=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const h=H(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Co)&&void 0!==r?r:l._$Co=[])[s]=a:i._$Cl=a),void 0!==a&&(e=W(t,a._$AS(t,e.values),a,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);B.currentNode=o;let n=B.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new q(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new Q(n,this,t)),this._$AV.push(e),a=s[++l]}r!==(null==a?void 0:a.index)&&(n=B.nextNode(),r++)}return B.currentNode=S,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,s){var o;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),H(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>k(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==R&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(S.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=D.createElement(I(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new Z(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new D(t)),e}T(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new q(this.k(E()),this.k(E()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,i,s,o){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=W(this,t,e,0),n=!H(t)||t!==this._$AH&&t!==L,n&&(this._$AH=t);else{const s=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=W(this,s[i+r],e,r),l===L&&(l=this._$AH[r]),n||(n=!H(l)||l!==this._$AH[r]),l===R?t=R:t!==R&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!s&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}}const J=A?A.emptyScript:"";class X extends F{constructor(){super(...arguments),this.type=4}j(t){t&&t!==R?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class G extends F{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:R)===L)return;const s=this._$AH,o=t===R&&s!==R||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==R&&(s===R||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const Y=m.litHtmlPolyfillSupport;var tt;null==Y||Y(D,q),(null!==(g=m.litHtmlVersions)&&void 0!==g?g:m.litHtmlVersions=[]).push("2.8.0");const et=window,it=et.trustedTypes,st=it?it.createPolicy("lit-html",{createHTML:t=>t}):void 0,ot="$lit$",nt=`lit$${(Math.random()+"").slice(9)}$`,rt="?"+nt,lt=`<${rt}>`,at=document,ht=()=>at.createComment(""),ct=t=>null===t||"object"!=typeof t&&"function"!=typeof t,dt=Array.isArray,ut="[ \t\n\f\r]",pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,ft=/>/g,_t=RegExp(`>|${ut}(?:([^\\s"'>=/]+)(${ut}*=${ut}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),$t=/'/g,gt=/"/g,mt=/^(?:script|style|textarea|title)$/i,At=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),yt=Symbol.for("lit-noChange"),bt=Symbol.for("lit-nothing"),wt=new WeakMap,Ct=at.createTreeWalker(at,129,null,!1);function xt(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==st?st.createHTML(e):e}const St=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=pt;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,c=0;for(;c<i.length&&(r.lastIndex=c,a=r.exec(i),null!==a);)c=r.lastIndex,r===pt?"!--"===a[1]?r=vt:void 0!==a[1]?r=ft:void 0!==a[2]?(mt.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=_t):void 0!==a[3]&&(r=_t):r===_t?">"===a[0]?(r=null!=o?o:pt,h=-1):void 0===a[1]?h=-2:(h=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?_t:'"'===a[3]?gt:$t):r===gt||r===$t?r=_t:r===vt||r===ft?r=pt:(r=_t,o=void 0);const d=r===_t&&t[e+1].startsWith("/>")?" ":"";n+=r===pt?i+lt:h>=0?(s.push(l),i.slice(0,h)+ot+i.slice(h)+nt+d):i+nt+(-2===h?(s.push(void 0),e):d)}return[xt(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class Et{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[a,h]=St(t,e);if(this.el=Et.createElement(a,i),Ct.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=Ct.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(ot)||e.startsWith(nt)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+ot).split(nt),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?Vt:"?"===e[1]?Tt:"@"===e[1]?Ut:Nt})}else l.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(mt.test(s.tagName)){const t=s.textContent.split(nt),e=t.length-1;if(e>0){s.textContent=it?it.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],ht()),Ct.nextNode(),l.push({type:2,index:++o});s.append(t[e],ht())}}}else if(8===s.nodeType)if(s.data===rt)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(nt,t+1));)l.push({type:7,index:o}),t+=nt.length-1}o++}}static createElement(t,e){const i=at.createElement("template");return i.innerHTML=t,i}}function Ht(t,e,i=t,s){var o,n,r,l;if(e===yt)return e;let a=void 0!==s?null===(o=i._$Co)||void 0===o?void 0:o[s]:i._$Cl;const h=ct(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Co)&&void 0!==r?r:l._$Co=[])[s]=a:i._$Cl=a),void 0!==a&&(e=Ht(t,a._$AS(t,e.values),a,s)),e}class kt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:at).importNode(i,!0);Ct.currentNode=o;let n=Ct.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new Mt(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new zt(n,this,t)),this._$AV.push(e),a=s[++l]}r!==(null==a?void 0:a.index)&&(n=Ct.nextNode(),r++)}return Ct.currentNode=at,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Mt{constructor(t,e,i,s){var o;this.type=2,this._$AH=bt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ht(this,t,e),ct(t)?t===bt||null==t||""===t?(this._$AH!==bt&&this._$AR(),this._$AH=bt):t!==this._$AH&&t!==yt&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>dt(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==bt&&ct(this._$AH)?this._$AA.nextSibling.data=t:this.$(at.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Et.createElement(xt(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new kt(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=wt.get(t.strings);return void 0===e&&wt.set(t.strings,e=new Et(t)),e}T(t){dt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Mt(this.k(ht()),this.k(ht()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Nt{constructor(t,e,i,s,o){this.type=1,this._$AH=bt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=bt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=Ht(this,t,e,0),n=!ct(t)||t!==this._$AH&&t!==yt,n&&(this._$AH=t);else{const s=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=Ht(this,s[i+r],e,r),l===yt&&(l=this._$AH[r]),n||(n=!ct(l)||l!==this._$AH[r]),l===bt?t=bt:t!==bt&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!s&&this.j(t)}j(t){t===bt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Vt extends Nt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===bt?void 0:t}}const Pt=it?it.emptyScript:"";class Tt extends Nt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==bt?this.element.setAttribute(this.name,Pt):this.element.removeAttribute(this.name)}}class Ut extends Nt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Ht(this,t,e,0))&&void 0!==i?i:bt)===yt)return;const s=this._$AH,o=t===bt&&s!==bt||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==bt&&(s===bt||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class zt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ht(this,t)}}const Ot=et.litHtmlPolyfillSupport;null==Ot||Ot(Et,Mt),(null!==(tt=et.litHtmlVersions)&&void 0!==tt?tt:et.litHtmlVersions=[]).push("2.8.0");var Lt,Rt;class jt extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new Mt(e.insertBefore(ht(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return yt}}jt.finalized=!0,jt._$litElement$=!0,null===(Lt=globalThis.litElementHydrateSupport)||void 0===Lt||Lt.call(globalThis,{LitElement:jt});const Bt=globalThis.litElementPolyfillSupport;null==Bt||Bt({LitElement:jt}),(null!==(Rt=globalThis.litElementVersions)&&void 0!==Rt?Rt:globalThis.litElementVersions=[]).push("3.3.3");const It=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e),Dt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Wt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Dt(t,e)}var Zt,qt,Ft;null===(Zt=window.HTMLSlotElement)||void 0===Zt||Zt.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(qt||(qt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Ft||(Ft={}));let Kt=class extends jt{setConfig(t){this._config=Object.assign({show_animation:!0,show_speed:!0,show_humidity:!0,show_temperature:!0,show_filter_life:!0,show_light_control:!0,show_child_lock:!0,show_buzzer:!0},t)}_valueChanged(t){const e=t.detail.value,i=Object.assign(Object.assign({},this._config),e),s=new CustomEvent("config-changed",{detail:{config:i},bubbles:!0,composed:!0});this.dispatchEvent(s)}render(){var t,e,i,s,o,n,r,l;if(!this.hass||!this._config)return At``;const a=Object.keys(this.hass.states).filter((t=>"fan."===t.substr(0,4)));return At`
      <div class="card-config">
        <div class="basic-config">
          <ha-textfield
            label="Name"
            .value=${this._config.name||""}
            .configValue=${"name"}
            @input=${this._valueChanged}
          ></ha-textfield>
          
          <ha-select
            label="Entity"
            .value=${this._config.entity}
            .configValue=${"entity"}
            @selected=${this._valueChanged}
            required
          >
            ${a.map((t=>At`<mwc-list-item .value=${t}>${t}</mwc-list-item>`))}
          </ha-select>
        </div>

        <div class="section-title">Display Options</div>
        <div class="display-options">
          <ha-formfield label="Show Animation">
            <ha-switch
              .checked=${null===(t=this._config.show_animation)||void 0===t||t}
              .configValue=${"show_animation"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Speed">
            <ha-switch
              .checked=${null===(e=this._config.show_speed)||void 0===e||e}
              .configValue=${"show_speed"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Humidity">
            <ha-switch
              .checked=${null===(i=this._config.show_humidity)||void 0===i||i}
              .configValue=${"show_humidity"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Temperature">
            <ha-switch
              .checked=${null===(s=this._config.show_temperature)||void 0===s||s}
              .configValue=${"show_temperature"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Filter Life">
            <ha-switch
              .checked=${null!==(o=this._config.show_filter_life)&&void 0!==o&&o}
              .configValue=${"show_filter_life"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>

        <div class="section-title">Control Options</div>
        <div class="control-options">
          <ha-formfield label="Show Light Control">
            <ha-switch
              .checked=${null!==(n=this._config.show_light_control)&&void 0!==n&&n}
              .configValue=${"show_light_control"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Child Lock">
            <ha-switch
              .checked=${null!==(r=this._config.show_child_lock)&&void 0!==r&&r}
              .configValue=${"show_child_lock"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>

          <ha-formfield label="Show Buzzer">
            <ha-switch
              .checked=${null!==(l=this._config.show_buzzer)&&void 0!==l&&l}
              .configValue=${"show_buzzer"}
              @change=${this._valueChanged}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>
    `}static get styles(){return r`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;
      }

      .basic-config {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .section-title {
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-text-color);
        margin-top: 8px;
      }

      .display-options,
      .control-options {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 8px;
      }

      ha-textfield {
        width: 100%;
      }

      ha-select {
        width: 100%;
      }

      ha-formfield {
        padding: 8px;
      }
    `}};t([Wt({attribute:!1})],Kt.prototype,"hass",void 0),t([Wt({attribute:!1})],Kt.prototype,"_config",void 0),Kt=t([It("ha-air-purifier-card-editor")],Kt),window.customCards=window.customCards||[],window.customCards.push({type:"ha-air-purifier-card",name:"Xiaomi Air Purifier Card",description:"A beautiful card for Xiaomi Air Purifier MB3"});const Jt={Auto:"Auto",Sleep:"Sleep",Favorite:"Favorite",None:"None"},Xt={Silent:{name:"Silent",percentage:25,rpm:"300-400"},Low:{name:"Low",percentage:50,rpm:"400-500"},Medium:{name:"Medium",percentage:75,rpm:"500-600"},High:{name:"High",percentage:100,rpm:"600-800"}};let Gt=class extends jt{static getConfigElement(){return document.createElement("ha-air-purifier-card-editor")}static getStubConfig(){return{type:"custom:ha-air-purifier-card",entity:"fan.xiaomi_air_purifier",show_animation:!0,show_speed:!0,show_humidity:!0,show_temperature:!0,show_filter_life:!0,show_light_control:!0,show_child_lock:!0,show_buzzer:!0}}setConfig(t){if(!t.entity||"fan"!==t.entity.split(".")[0])throw new Error("Specify an entity from within the fan domain.");this.config=Object.assign({show_animation:!0,show_speed:!0,show_humidity:!0,show_temperature:!0,show_filter_life:!0,show_light_control:!0,show_child_lock:!0,show_buzzer:!0},t)}shouldUpdate(t){return function(t,e,i){if(e.has("config")||i)return!0;if(t.config.entity){var s=e.get("hass");return!s||s.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}_handlePowerClick(){if(!this.hass||!this.config)return;const t=this.hass.states[this.config.entity];t&&this.hass.callService("fan","on"===t.state?"turn_off":"turn_on",{entity_id:this.config.entity})}_handleSpeedClick(t){this.hass&&this.config&&this.hass.callService("fan","set_percentage",{entity_id:this.config.entity,percentage:Xt[t].percentage})}_handleModeChange(t){if(!this.hass||!this.config)return;const e=t.target.value;e&&this.hass.callService("fan","set_preset_mode",{entity_id:this.config.entity,preset_mode:e})}_handleChildLockToggle(){if(!this.hass||!this.config)return;const t=this.config.entity.replace("fan","switch").replace("air_purifier","child_lock"),e=this.hass.states[t];e&&this.hass.callService("switch","on"===e.state?"turn_off":"turn_on",{entity_id:t})}_handleLightToggle(){if(!this.hass||!this.config)return;const t=this.config.entity.replace("fan","light").replace("air_purifier","led"),e=this.hass.states[t];e&&this.hass.callService("light","on"===e.state?"turn_off":"turn_on",{entity_id:t})}_handleBuzzerToggle(){if(!this.hass||!this.config)return;const t=this.config.entity.replace("fan","switch").replace("air_purifier","buzzer"),e=this.hass.states[t];e&&this.hass.callService("switch","on"===e.state?"turn_off":"turn_on",{entity_id:t})}render(){var t;if(!this.config||!this.hass)return At``;const e=this.hass.states[this.config.entity];if(!e)return At`
        <ha-card>
          <div class="not-found">
            Entity not found: ${this.config.entity}
          </div>
        </ha-card>
      `;const i=this.config.name||e.attributes.friendly_name,s=e.state,o=this.config.entity.split(".")[1],n=this.hass.states[`sensor.${o.replace("air_purifier","pm25")}`],r=this.hass.states[`sensor.${o.replace("air_purifier","motor_speed")}`],l=this.hass.states[`sensor.${o.replace("air_purifier","relative_humidity")}`],a=this.hass.states[`sensor.${o.replace("air_purifier","temperature")}`],h=this.hass.states[`sensor.${o.replace("air_purifier","filter_life_level")}`],c=this.hass.states[`light.${o.replace("air_purifier","led")}`],d=this.hass.states[`switch.${o.replace("air_purifier","child_lock")}`],u=this.hass.states[`switch.${o.replace("air_purifier","buzzer")}`],p=Number(null==n?void 0:n.state)||0,v=(null==r?void 0:r.state)||"0",f=(null==l?void 0:l.state)||"0",_=(null==a?void 0:a.state)||"0",$=(null==h?void 0:h.state)||"0",g="on"===(null==c?void 0:c.state),m="on"===(null==d?void 0:d.state),A="on"===(null==u?void 0:u.state),y=e.attributes.percentage||0,b=(null===(t=Object.entries(Xt).find((([t,e])=>y<=e.percentage)))||void 0===t?void 0:t[0])||"High",w=e.attributes.preset_mode||"none",C=(x=p)<=12?"var(--success-color, #43a047)":x<=35.4||x<=55.4?"var(--warning-color, #ffa600)":"var(--error-color, #db4437)";var x;return At`
      <ha-card>
        <div class="card-header">
          <div class="name">${i}</div>
          <ha-icon-button
            .path=${"M16.56,5.44L15.11,6.89C16.84,7.94 18,9.83 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12C6,9.83 7.16,7.94 8.88,6.88L7.44,5.44C5.36,6.88 4,9.28 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12C20,9.28 18.64,6.88 16.56,5.44M13,3H11V13H13"}
            @click=${this._handlePowerClick}
            ?disabled=${!e}
            class="power-button ${"on"===s?"active":""}"
          ></ha-icon-button>
        </div>

        <div class="content">
          <div class="pm25-section">
            <div class="pm25-circle ${"on"===s?"active":""}" style="--pm25-color: ${C}">
              ${this.config.show_animation&&"on"===s?At`
                <div class="pm25-animation"></div>
              `:""}
              <div class="value ${"on"!==s?"disabled":""}">${p}</div>
              <div class="label ${"on"!==s?"disabled":""}">PM2.5</div>
            </div>
          </div>

          ${"on"===s?At`
            <div class="mode-select">
              <ha-select
                .label=${"Mode"}
                .value=${w}
                @selected=${this._handleModeChange}
                fixedMenuPosition
                naturalMenuWidth
              >
                ${Object.entries(Jt).map((([t,e])=>At`
                  <mwc-list-item .value=${e}>${t}</mwc-list-item>
                `))}
              </ha-select>
            </div>

            <div class="speed-buttons">
              ${Object.entries(Xt).map((([t,e])=>At`
                <mwc-button 
                  .label=${e.name}
                  ?raised=${b===t}
                  @click=${()=>this._handleSpeedClick(t)}
                  class="speed-button ${b===t?"active":""}"
                >
                  <ha-svg-icon .path=${"M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z"} slot="icon"></ha-svg-icon>
                </mwc-button>
              `))}
            </div>

            <div class="info-grid">
              ${this.config.show_temperature?At`
                <div class="info-item">
                  <ha-svg-icon .path=${"M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z"}></ha-svg-icon>
                  <div class="info-text">
                    <span class="info-value">${_}°C</span>
                    <span class="info-label">Temperature</span>
                  </div>
                </div>
              `:""}
              
              ${this.config.show_humidity?At`
                <div class="info-item">
                  <ha-svg-icon .path=${"M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z"}></ha-svg-icon>
                  <div class="info-text">
                    <span class="info-value">${f}%</span>
                    <span class="info-label">Humidity</span>
                  </div>
                </div>
              `:""}
              
              ${this.config.show_speed?At`
                <div class="info-item">
                  <ha-svg-icon .path=${"M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5A8,8 0 0,0 4,13C4,15.21 4.89,17.21 6.34,18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.32,20.45 4.93,20.07V20.07C3.12,18.26 2,15.76 2,13A10,10 0 0,1 12,3M22,13C22,15.76 20.88,18.26 19.07,20.07V20.07C18.68,20.45 18.05,20.45 17.66,20.06C17.27,19.67 17.27,19.04 17.66,18.65V18.65C19.11,17.2 20,15.21 20,13C20,12 19.81,11 19.46,10.1L20.67,8C21.5,9.5 22,11.18 22,13Z"}></ha-svg-icon>
                  <div class="info-text">
                    <span class="info-value">${v}</span>
                    <span class="info-label">RPM</span>
                  </div>
                </div>
              `:""}
              
              ${this.config.show_filter_life?At`
                <div class="info-item">
                  <ha-svg-icon .path=${"M19,18.31V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V16.3C4.54,16.12 3.95,16 3,16A1,1 0 0,1 2,15A1,1 0 0,1 3,14C3.82,14 4.47,14.08 5,14.21V12.3C4.54,12.12 3.95,12 3,12A1,1 0 0,1 2,11A1,1 0 0,1 3,10C3.82,10 4.47,10.08 5,10.21V8.3C4.54,8.12 3.95,8 3,8A1,1 0 0,1 2,7A1,1 0 0,1 3,6C3.82,6 4.47,6.08 5,6.21V4A2,2 0 0,1 7,2H17A2,2 0 0,1 19,4V6.16C20.78,6.47 21.54,7.13 21.71,7.29C22.1,7.68 22.1,8.32 21.71,8.71C21.32,9.1 20.8,9.09 20.29,8.71V8.71C20.29,8.71 19.25,8 17,8C15.74,8 14.91,8.41 13.95,8.9C12.91,9.41 11.74,10 10,10C9.64,10 9.31,10 9,9.96V7.95C9.3,8 9.63,8 10,8C11.26,8 12.09,7.59 13.05,7.11C14.09,6.59 15.27,6 17,6V4H7V20H17V18C18.5,18 18.97,18.29 19,18.31M17,10C15.27,10 14.09,10.59 13.05,11.11C12.09,11.59 11.26,12 10,12C9.63,12 9.3,12 9,11.95V13.96C9.31,14 9.64,14 10,14C11.74,14 12.91,13.41 13.95,12.9C14.91,12.42 15.74,12 17,12C19.25,12 20.29,12.71 20.29,12.71V12.71C20.8,13.1 21.32,13.1 21.71,12.71C22.1,12.32 22.1,11.69 21.71,11.29C21.5,11.08 20.25,10 17,10M17,14C15.27,14 14.09,14.59 13.05,15.11C12.09,15.59 11.26,16 10,16C9.63,16 9.3,16 9,15.95V17.96C9.31,18 9.64,18 10,18C11.74,18 12.91,17.41 13.95,16.9C14.91,16.42 15.74,16 17,16C19.25,16 20.29,16.71 20.29,16.71V16.71C20.8,17.1 21.32,17.1 21.71,16.71C22.1,16.32 22.1,15.69 21.71,15.29C21.5,15.08 20.25,14 17,14Z"}></ha-svg-icon>
                  <div class="info-text">
                    <span class="info-value">${$}%</span>
                    <span class="info-label">Filter Life</span>
                  </div>
                </div>
              `:""}
            </div>

            <div class="control-buttons">
              ${this.config.show_child_lock?At`
                <mwc-button 
                  .label=${"Child Lock"}
                  ?raised=${m}
                  @click=${this._handleChildLockToggle}
                  class="control-button ${m?"active":""}"
                >
                  <ha-svg-icon .path=${"M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"} slot="icon"></ha-svg-icon>
                </mwc-button>
              `:""}

              ${this.config.show_light_control?At`
                <mwc-button 
                  .label=${"LED"}
                  ?raised=${g}
                  @click=${this._handleLightToggle}
                  class="control-button ${g?"active":""}"
                >
                  <ha-svg-icon .path=${"M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z"} slot="icon"></ha-svg-icon>
                </mwc-button>
              `:""}

              ${this.config.show_buzzer?At`
                <mwc-button 
                  .label=${"Buzzer"}
                  ?raised=${A}
                  @click=${this._handleBuzzerToggle}
                  class="control-button ${A?"active":""}"
                >
                  <ha-icon icon="mdi:volume-high" slot="icon"></ha-icon>
                </mwc-button>
              `:""}
            </div>
          `:""}
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
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--secondary-background-color);
      }

      .name {
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .power-button {
        --mdc-icon-button-size: 48px;
        color: var(--primary-text-color);
      }

      .power-button.active {
        color: var(--primary-color);
      }

      .content {
        padding: 16px;
      }

      .pm25-section {
        text-align: center;
        margin-bottom: 24px;
      }

      .pm25-circle {
        position: relative;
        width: 140px;
        height: 140px;
        margin: 0 auto;
        border-radius: 50%;
        background: var(--secondary-background-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
        font-size: 36px;
        font-weight: bold;
        color: var(--pm25-color);
      }

      .value.disabled {
        color: var(--disabled-text-color);
      }

      .label {
        font-size: 14px;
        color: var(--secondary-text-color);
      }

      .label.disabled {
        color: var(--disabled-text-color);
      }

      .mode-select {
        margin: 0 16px 16px;
      }

      ha-select {
        width: 100%;
        --mdc-select-fill-color: var(--secondary-background-color);
        --mdc-theme-primary: var(--primary-color);
        --mdc-select-ink-color: var(--primary-text-color);
        --mdc-select-dropdown-icon-color: var(--primary-text-color);
        --mdc-select-hover-line-color: var(--primary-color);
      }

      .speed-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 0 16px 16px;
      }

      .speed-button {
        flex: 1;
        min-width: 80px;
        --mdc-theme-primary: var(--primary-color);
        --mdc-theme-on-primary: var(--text-primary-color);
      }

      .speed-button.active {
        background-color: var(--primary-color);
        color: var(--text-primary-color);
      }

      .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 16px;
        margin: 0 16px 16px;
        padding: 16px;
        background: var(--secondary-background-color);
        border-radius: var(--ha-card-border-radius, 12px);
      }

      .info-item {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .info-text {
        display: flex;
        flex-direction: column;
      }

      .info-value {
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-text-color);
        line-height: 1.2;
      }

      .info-label {
        font-size: 12px;
        color: var(--secondary-text-color);
      }

      .control-buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        margin: 0 16px;
      }

      .control-button {
        --mdc-theme-primary: var(--primary-color);
        --mdc-theme-on-primary: var(--text-primary-color);
      }

      .control-button.active {
        background-color: var(--primary-color);
        color: var(--text-primary-color);
      }

      .not-found {
        padding: 16px;
        text-align: center;
        color: var(--error-color);
      }
    `}};t([Wt({attribute:!1})],Gt.prototype,"hass",void 0),t([Wt({attribute:!1})],Gt.prototype,"config",void 0),Gt=t([It("ha-air-purifier-card")],Gt);export{Gt as HaAirPurifierCard};
