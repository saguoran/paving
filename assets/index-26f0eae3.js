(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const Ze=(e,t)=>e===t,te=Symbol("solid-proxy"),ne={equals:Ze};let et=Ue;const j=1,se=2,Ne={owned:null,cleanups:null,context:null,owner:null};var y=null;let ue=null,m=null,A=null,N=null,ie=0;function Te(e,t){const n=m,s=y,r=e.length===0,i=r?Ne:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},l=r?e:()=>e(()=>_(()=>le(i)));y=i,m=null;try{return k(l,!0)}finally{m=n,y=s}}function K(e,t){t=t?Object.assign({},ne,t):ne;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.value)),qe(n,r));return[Ie.bind(n),s]}function S(e,t,n){const s=Be(e,t,!1,j);oe(s)}function $(e,t,n){n=n?Object.assign({},ne,n):ne;const s=Be(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,oe(s),Ie.bind(s)}function _(e){if(m===null)return e();const t=m;m=null;try{return e()}finally{m=t}}function Re(e,t,n){const s=Array.isArray(e);let r,i=n&&n.defer;return l=>{let o;if(s){o=Array(e.length);for(let f=0;f<e.length;f++)o[f]=e[f]()}else o=e();if(i){i=!1;return}const a=_(()=>t(o,r,l));return r=o,a}}function je(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function Z(){return y}function tt(e,t){const n=y,s=m;y=e,m=null;try{return k(t,!0)}catch(r){ve(r)}finally{y=n,m=s}}function nt(e){const t=m,n=y;return Promise.resolve().then(()=>{m=t,y=n;let s;return k(e,!1),m=y=null,s?s.done:void 0})}function ke(e,t){const n=Symbol("context");return{id:n,Provider:it(n),defaultValue:e}}function we(e){let t;return(t=Fe(y,e.id))!==void 0?t:e.defaultValue}function be(e){const t=$(e),n=$(()=>ge(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function Ie(){if(this.sources&&this.state)if(this.state===j)oe(this);else{const e=A;A=null,k(()=>re(this),!1),A=e}if(m){const e=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(e)):(m.sources=[this],m.sourceSlots=[e]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function qe(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&k(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],l=ue&&ue.running;l&&ue.disposed.has(i),(l?!i.tState:!i.state)&&(i.pure?A.push(i):N.push(i),i.observers&&De(i)),l||(i.state=j)}if(A.length>1e6)throw A=[],new Error},!1)),t}function oe(e){if(!e.fn)return;le(e);const t=y,n=m,s=ie;m=y=e,st(e,e.value,s),m=n,y=t}function st(e,t,n){let s;try{s=e.fn(t)}catch(r){return e.pure&&(e.state=j,e.owned&&e.owned.forEach(le),e.owned=null),e.updatedAt=n+1,ve(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?qe(e,s):e.value=s,e.updatedAt=n)}function Be(e,t,n,s=j,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:null,pure:n};return y===null||y!==Ne&&(y.owned?y.owned.push(i):y.owned=[i]),i}function Me(e){if(e.state===0)return;if(e.state===se)return re(e);if(e.suspense&&_(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ie);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===j)oe(e);else if(e.state===se){const s=A;A=null,k(()=>re(e,t[0]),!1),A=s}}function k(e,t){if(A)return e();let n=!1;t||(A=[]),N?n=!0:N=[],ie++;try{const s=e();return rt(n),s}catch(s){n||(N=null),A=null,ve(s)}}function rt(e){if(A&&(Ue(A),A=null),e)return;const t=N;N=null,t.length&&k(()=>et(t),!1)}function Ue(e){for(let t=0;t<e.length;t++)Me(e[t])}function re(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const r=s.state;r===j?s!==t&&(!s.updatedAt||s.updatedAt<ie)&&Me(s):r===se&&re(s,t)}}}function De(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=se,n.pure?A.push(n):N.push(n),n.observers&&De(n))}}function le(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),l=n.observerSlots.pop();s<r.length&&(i.sourceSlots[l]=s,r[s]=i,n.observerSlots[s]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)le(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ve(e){throw e}function Fe(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Fe(e.owner,t):void 0}function ge(e){if(typeof e=="function"&&!e.length)return ge(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=ge(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function it(e,t){return function(s){let r;return S(()=>r=_(()=>(y.context={[e]:s.value},be(()=>s.children))),void 0),r}}function h(e,t){return _(()=>e(t||{}))}function X(){return!0}const me={get(e,t,n){return t===te?n:e.get(t)},has(e,t){return t===te?!0:e.has(t)},set:X,deleteProperty:X,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:X,deleteProperty:X}},ownKeys(e){return e.keys()}};function fe(e){return(e=typeof e=="function"?e():e)?e:{}}function pe(...e){let t=!1;for(let s=0;s<e.length;s++){const r=e[s];t=t||!!r&&te in r,e[s]=typeof r=="function"?(t=!0,$(r)):r}if(t)return new Proxy({get(s){for(let r=e.length-1;r>=0;r--){const i=fe(e[r])[s];if(i!==void 0)return i}},has(s){for(let r=e.length-1;r>=0;r--)if(s in fe(e[r]))return!0;return!1},keys(){const s=[];for(let r=0;r<e.length;r++)s.push(...Object.keys(fe(e[r])));return[...new Set(s)]}},me);const n={};for(let s=e.length-1;s>=0;s--)if(e[s]){const r=Object.getOwnPropertyDescriptors(e[s]);for(const i in r)i in n||Object.defineProperty(n,i,{enumerable:!0,get(){for(let l=e.length-1;l>=0;l--){const o=(e[l]||{})[i];if(o!==void 0)return o}}})}return n}function ot(e,...t){const n=new Set(t.flat());if(te in e){const r=t.map(i=>new Proxy({get(l){return i.includes(l)?e[l]:void 0},has(l){return i.includes(l)&&l in e},keys(){return i.filter(l=>l in e)}},me));return r.push(new Proxy({get(i){return n.has(i)?void 0:e[i]},has(i){return n.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!n.has(i))}},me)),r}const s=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(s).filter(r=>!n.has(r))),t.map(r=>{const i={};for(let l=0;l<r.length;l++){const o=r[l];o in e&&Object.defineProperty(i,o,s[o]?s[o]:{get(){return e[o]},set(){return!0},enumerable:!0})}return i})}const lt=e=>`Stale read from <${e}>.`;function $e(e){const t=e.keyed,n=$(()=>e.when,void 0,{equals:(s,r)=>t?s===r:!s==!r});return $(()=>{const s=n();if(s){const r=e.children;return typeof r=="function"&&r.length>0?_(()=>r(t?s:()=>{if(!_(n))throw lt("Show");return e.when})):r}return e.fallback},void 0,void 0)}const at=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],ct=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...at]),ut=new Set(["innerHTML","textContent","innerText","children"]),ft=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),dt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function ht(e,t){const n=dt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const gt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),mt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function pt(e,t,n){let s=n.length,r=t.length,i=s,l=0,o=0,a=t[r-1].nextSibling,f=null;for(;l<r||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===l){const c=i<s?o?n[o-1].nextSibling:n[i-o]:a;for(;o<i;)e.insertBefore(n[o++],c)}else if(i===o)for(;l<r;)(!f||!f.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[r-1]){const c=t[--r].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],c),t[r]=n[i]}else{if(!f){f=new Map;let u=o;for(;u<i;)f.set(n[u],u++)}const c=f.get(t[l]);if(c!=null)if(o<c&&c<i){let u=l,d=1,w;for(;++u<r&&u<i&&!((w=f.get(t[u]))==null||w!==c+d);)d++;if(d>c-o){const v=t[l];for(;o<c;)e.insertBefore(n[o++],v)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const Pe="_$DX_DELEGATE";function yt(e,t,n,s={}){let r;return Te(i=>{r=i,t===document?e():C(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function P(e,t,n){let s;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},i=t?()=>(s||(s=r())).cloneNode(!0):()=>_(()=>document.importNode(s||(s=r()),!0));return i.cloneNode=i,i}function Ke(e,t=window.document){const n=t[Pe]||(t[Pe]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,Pt))}}function R(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function wt(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function bt(e,t){t==null?e.removeAttribute("class"):e.className=t}function vt(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n)}function $t(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let i,l;for(i=0,l=r.length;i<l;i++){const o=r[i];!o||o==="undefined"||t[o]||(Se(e,o,!1),delete n[o])}for(i=0,l=s.length;i<l;i++){const o=s[i],a=!!t[o];!o||o==="undefined"||n[o]===a||!a||(Se(e,o,!0),n[o]=a)}return n}function We(e,t,n){if(!t)return n?R(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let r,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)r=t[i],r!==n[i]&&(s.setProperty(i,r),n[i]=r);return n}function Ct(e,t={},n,s){const r={};return s||S(()=>r.children=M(e,t.children,r.children)),S(()=>t.ref&&t.ref(e)),S(()=>xt(e,t,n,!0,r,!0)),r}function C(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return M(e,t,s,n);S(r=>M(e,t(),r,n),s)}function xt(e,t,n,s,r={},i=!1){t||(t={});for(const l in r)if(!(l in t)){if(l==="children")continue;r[l]=_e(e,l,null,r[l],n,i)}for(const l in t){if(l==="children"){s||M(e,t.children);continue}const o=t[l];r[l]=_e(e,l,o,r[l],n,i)}}function At(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Se(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,i=s.length;r<i;r++)e.classList.toggle(s[r],n)}function _e(e,t,n,s,r,i){let l,o,a,f,c;if(t==="style")return We(e,n,s);if(t==="classList")return $t(e,n,s);if(n===s)return s;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);s&&e.removeEventListener(u,s),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);s&&e.removeEventListener(u,s,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),d=gt.has(u);if(!d&&s){const w=Array.isArray(s)?s[0]:s;e.removeEventListener(u,w)}(d||n)&&(vt(e,u,n,d),d&&Ke([u]))}else if(t.slice(0,5)==="attr:")R(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(a=ut.has(t))||!r&&((f=ht(t,e.tagName))||(o=ct.has(t)))||(l=e.nodeName.includes("-")))c&&(t=t.slice(5),o=!0),t==="class"||t==="className"?bt(e,n):l&&!o&&!a?e[At(t)]=n:e[f||t]=n;else{const u=r&&t.indexOf(":")>-1&&mt[t.split(":")[0]];u?wt(e,u,t,n):R(e,ft[t]||t,n)}return n}function Pt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function M(e,t,n,s,r){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=B(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=B(e,n,s);else{if(i==="function")return S(()=>{let o=t();for(;typeof o=="function";)o=o();n=M(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],a=n&&Array.isArray(n);if(ye(o,t,n,r))return S(()=>n=M(e,o,n,s,!0)),()=>n;if(o.length===0){if(n=B(e,n,s),l)return n}else a?n.length===0?Ee(e,o,s):pt(e,n,o):(n&&B(e),Ee(e,o));n=o}else if(t instanceof Node){if(Array.isArray(n)){if(l)return n=B(e,n,s,t);B(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function ye(e,t,n,s){let r=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],a=n&&n[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))r=ye(e,o,a)||r;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();r=ye(e,Array.isArray(o)?o:[o],Array.isArray(a)?a:[a])||r}else e.push(o),r=!0;else{const f=String(o);a&&a.nodeType===3?(a.data=f,e.push(a)):e.push(document.createTextNode(f))}}return r}function Ee(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function B(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(r!==o){const a=o.parentNode===e;!i&&!l?a?e.replaceChild(r,o):e.insertBefore(r,n):a&&o.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}const St=!1;function _t(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Et([e,t],n,s){return[n?()=>n(e()):e,s?r=>t(s(r)):t]}function Ot(e){try{return document.querySelector(e)}catch{return null}}function Lt(e,t){const n=Ot(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Nt(e,t,n,s){let r=!1;const i=o=>typeof o=="string"?{value:o}:o,l=Et(K(i(e()),{equals:(o,a)=>o.value===a.value}),void 0,o=>(!r&&t(o),o));return n&&je(n((o=e())=>{r=!0,l[1](i(o)),r=!1})),{signal:l,utils:s}}function Tt(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:K({value:""})};return e}function Rt(){return Nt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:s})=>{t?window.history.replaceState(s,"",e):window.history.pushState(s,"",e),Lt(window.location.hash.slice(1),n)},e=>_t(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function jt(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,i){if(n)return!(n=!1);const l={to:r,options:i,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const o of e)o.listener({...l,from:o.location,retry:a=>{a&&(n=!0),o.navigate(r,i)}});return!l.defaultPrevented}return{subscribe:t,confirm:s}}const kt=/^(?:[a-z0-9]+:)?\/\//i,It=/^\/+|(\/)\/+$/g;function T(e,t=!1){const n=e.replace(It,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function ee(e,t,n){if(kt.test(t))return;const s=T(e),r=n&&T(n);let i="";return!r||t.startsWith("/")?i=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?i=s+r:i=r,(i||"/")+T(t,!i)}function qt(e,t){if(e==null)throw new Error(t);return e}function Ge(e,t){return T(e).replace(/\/*(\*.*)?$/g,"")+T(t)}function Bt(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function Mt(e,t,n){const[s,r]=e.split("/*",2),i=s.split("/").filter(Boolean),l=i.length;return o=>{const a=o.split("/").filter(Boolean),f=a.length-l;if(f<0||f>0&&r===void 0&&!t)return null;const c={path:l?"":"/",params:{}},u=d=>n===void 0?void 0:n[d];for(let d=0;d<l;d++){const w=i[d],v=a[d],p=w[0]===":",L=p?w.slice(1):w;if(p&&de(v,u(L)))c.params[L]=v;else if(p||!de(v,w))return null;c.path+=`/${v}`}if(r){const d=f?a.slice(-f).join("/"):"";if(de(d,u(r)))c.params[r]=d;else return null}return c}}function de(e,t){const n=s=>s.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Ut(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,i)=>r+(i.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function He(e){const t=new Map,n=Z();return new Proxy({},{get(s,r){return t.has(r)||tt(n,()=>t.set(r,$(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Ve(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return Ve(s).reduce((i,l)=>[...i,...r.map(o=>o+l)],[])}const Dt=100,Ye=ke(),ae=ke(),ce=()=>qt(we(Ye),"Make sure your app is wrapped in a <Router />");let W;const Ce=()=>W||we(ae)||ce().base,Ft=e=>{const t=Ce();return $(()=>t.resolvePath(e()))},Kt=e=>{const t=ce();return $(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Wt=()=>ce().location;function Gt(e,t="",n){const{component:s,data:r,children:i}=e,l=!i||Array.isArray(i)&&!i.length,o={key:e,element:s?()=>h(s,{}):()=>{const{element:a}=e;return a===void 0&&n?h(n,{}):a},preload:e.component?s.preload:e.preload,data:r};return Xe(e.path).reduce((a,f)=>{for(const c of Ve(f)){const u=Ge(t,c),d=l?u:u.split("/*",1)[0];a.push({...o,originalPath:c,pattern:d,matcher:Mt(d,!l,e.matchFilters)})}return a},[])}function Ht(e,t=0){return{routes:e,score:Ut(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const i=e[r],l=i.matcher(n);if(!l)return null;s.unshift({...l,route:i})}return s}}}function Xe(e){return Array.isArray(e)?e:[e]}function Je(e,t="",n,s=[],r=[]){const i=Xe(e);for(let l=0,o=i.length;l<o;l++){const a=i[l];if(a&&typeof a=="object"&&a.hasOwnProperty("path")){const f=Gt(a,t,n);for(const c of f){s.push(c);const u=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!u)Je(a.children,c.pattern,n,s,r);else{const d=Ht([...s],r.length);r.push(d)}s.pop()}}}return s.length?r:r.sort((l,o)=>o.score-l.score)}function Vt(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function Yt(e,t){const n=new URL("http://sar"),s=$(a=>{const f=e();try{return new URL(f,n)}catch{return console.error(`Invalid path ${f}`),a}},n,{equals:(a,f)=>a.href===f.href}),r=$(()=>s().pathname),i=$(()=>s().search,!0),l=$(()=>s().hash),o=$(()=>"");return{get pathname(){return r()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return o()},query:He(Re(i,()=>Bt(s())))}}function Xt(e,t="",n,s){const{signal:[r,i],utils:l={}}=Tt(e),o=l.parsePath||(b=>b),a=l.renderPath||(b=>b),f=l.beforeLeave||jt(),c=ee("",t),u=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!r().value&&i({value:c,replace:!0,scroll:!1});const[d,w]=K(!1),v=async b=>{w(!0);try{await nt(b)}finally{w(!1)}},[p,L]=K(r().value),[I,G]=K(r().state),H=Yt(p,I),U=[],q={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(b){return ee(c,b)}};if(n)try{W=q,q.data=n({data:void 0,params:{},location:H,navigate:Ae(q)})}finally{W=void 0}function xe(b,g,x){_(()=>{if(typeof g=="number"){g&&(l.go?f.confirm(g,x)&&l.go(g):console.warn("Router integration does not support relative routing"));return}const{replace:V,resolve:Y,scroll:E,state:D}={replace:!1,resolve:!0,scroll:!0,...x},O=Y?b.resolvePath(g):ee("",g);if(O===void 0)throw new Error(`Path '${g}' is not a routable path`);if(U.length>=Dt)throw new Error("Too many redirects");const F=p();if((O!==F||D!==I())&&!St){if(f.confirm(O,x)){const Qe=U.push({value:F,replace:V,scroll:E,state:I()});v(()=>{L(O),G(D)}).then(()=>{U.length===Qe&&ze({value:O,state:D})})}}})}function Ae(b){return b=b||we(ae)||q,(g,x)=>xe(b,g,x)}function ze(b){const g=U[0];g&&((b.value!==g.value||b.state!==g.state)&&i({...b,replace:g.replace,scroll:g.scroll}),U.length=0)}S(()=>{const{value:b,state:g}=r();_(()=>{b!==p()&&v(()=>{L(b),G(g)})})});{let b=function(g){if(g.defaultPrevented||g.button!==0||g.metaKey||g.altKey||g.ctrlKey||g.shiftKey)return;const x=g.composedPath().find(F=>F instanceof Node&&F.nodeName.toUpperCase()==="A");if(!x||!x.hasAttribute("link"))return;const V=x.href;if(x.target||!V&&!x.hasAttribute("state"))return;const Y=(x.getAttribute("rel")||"").split(/\s+/);if(x.hasAttribute("download")||Y&&Y.includes("external"))return;const E=new URL(V);if(E.origin!==window.location.origin||c&&E.pathname&&!E.pathname.toLowerCase().startsWith(c.toLowerCase()))return;const D=o(E.pathname+E.search+E.hash),O=x.getAttribute("state");g.preventDefault(),xe(q,D,{resolve:!1,replace:x.hasAttribute("replace"),scroll:!x.hasAttribute("noscroll"),state:O&&JSON.parse(O)})};var Cn=b;Ke(["click"]),document.addEventListener("click",b),je(()=>document.removeEventListener("click",b))}return{base:q,out:u,location:H,isRouting:d,renderPath:a,parsePath:o,navigatorFactory:Ae,beforeLeave:f}}function Jt(e,t,n,s,r){const{base:i,location:l,navigatorFactory:o}=e,{pattern:a,element:f,preload:c,data:u}=s().route,d=$(()=>s().path);c&&c();const w={parent:t,pattern:a,get child(){return n()},path:d,params:r,data:t.data,outlet:f,resolvePath(v){return ee(i.path(),v,d())}};if(u)try{W=w,w.data=u({data:t.data,params:r,location:l,navigate:o(w)})}finally{W=void 0}return w}const zt=P("<a link>"),Qt=e=>{const{source:t,url:n,base:s,data:r,out:i}=e,l=t||Rt(),o=Xt(l,s,r);return h(Ye.Provider,{value:o,get children(){return e.children}})},Zt=e=>{const t=ce(),n=Ce(),s=be(()=>e.children),r=$(()=>Je(s(),Ge(n.pattern,e.base||""),en)),i=$(()=>Vt(r(),t.location.pathname)),l=He(()=>{const c=i(),u={};for(let d=0;d<c.length;d++)Object.assign(u,c[d].params);return u});t.out&&t.out.matches.push(i().map(({route:c,path:u,params:d})=>({originalPath:c.originalPath,pattern:c.pattern,path:u,params:d})));const o=[];let a;const f=$(Re(i,(c,u,d)=>{let w=u&&c.length===u.length;const v=[];for(let p=0,L=c.length;p<L;p++){const I=u&&u[p],G=c[p];d&&I&&G.route.key===I.route.key?v[p]=d[p]:(w=!1,o[p]&&o[p](),Te(H=>{o[p]=H,v[p]=Jt(t,v[p-1]||n,()=>f()[p+1],()=>i()[p],l)}))}return o.splice(c.length).forEach(p=>p()),d&&w?d:(a=v[0],v)}));return h($e,{get when(){return f()&&a},keyed:!0,children:c=>h(ae.Provider,{value:c,get children(){return c.outlet()}})})},J=e=>{const t=be(()=>e.children);return pe(e,{get children(){return t()}})},en=()=>{const e=Ce();return h($e,{get when(){return e.child},keyed:!0,children:t=>h(ae.Provider,{value:t,get children(){return t.outlet()}})})};function z(e){e=pe({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=ot(e,["href","state","class","activeClass","inactiveClass","end"]),n=Ft(()=>e.href),s=Kt(n),r=Wt(),i=$(()=>{const l=n();if(l===void 0)return!1;const o=T(l.split(/[?#]/,1)[0]).toLowerCase(),a=T(r.pathname).toLowerCase();return e.end?o===a:a.startsWith(o)});return(()=>{const l=zt();return Ct(l,pe(t,{get href(){return s()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i(),[e.activeClass]:i(),...t.classList}},get["aria-current"](){return i()?"page":void 0}}),!1,!1),l})()}const Oe="/paving/assets/gundam-fe844e20.png",tn=P('<div class="card"><div class="card-image"><figure class="image is-4by3"><img alt="Placeholder image"></figure></div><div class="card-content"><div class="content"><p class="title is-4"></p><p class="subtitle is-6">');function he(e){return(()=>{const t=tn(),n=t.firstChild,s=n.firstChild,r=s.firstChild,i=n.nextSibling,l=i.firstChild,o=l.firstChild,a=o.nextSibling;return C(o,()=>e.title),C(a,()=>e.subtitle),S(()=>R(r,"src",e.img)),t})()}const nn="/paving/assets/42-fa26a145.jpeg",sn="/paving/assets/0-7da5e87b.jpeg",rn="/paving/assets/1-03130e2b.jpeg",on="/paving/assets/2-370fbd13.jpeg",ln="/paving/assets/3-039062b4.jpeg",an="/paving/assets/4-d5074e78.jpeg",cn="/paving/assets/5-4b83b2c4.jpeg",un=P('<figure class="image is-square mt-2"><img>'),fn=P('<div class="box"><p class="subtitle my-1"></p><p>');function Q(e){return(()=>{const t=fn(),n=t.firstChild,s=n.nextSibling;return C(n,()=>e.title),C(s,()=>e.content),C(t,h($e,{get when(){return e.img},get children(){const r=un(),i=r.firstChild;return S(()=>R(i,"src",e.img)),r}}),null),t})()}const dn=P('<section class="hero is-primary is-medium"><div class="hero-body"><div><p class="title is-2">Paving the Way to Success: Choose Gundam for Your Next Project<br>Pave the Way to a Beautiful Home: Our Expert Paving Services Can Transform Your Property'),hn=P('<section class="section pt-3 pb-0"><h3 class="title is-3">Services</h3><div class="columns"><div class="column"></div><div class="column"></div><div class="column">'),gn=P('<section class="section pt-3"><h3 class="title is-3">Top-quality Pavers</h3><div class="tile is-ancestor"><div class="tile is-vertical is-8"><div class="tile"><div class="tile is-parent"><article class="tile is-child"></article></div><div class="tile is-parent is-vertical"><article class="tile is-child"></article><article class="tile is-child"></article></div></div></div><div class="tile is-parent"><article class="tile is-child">');function Le(e){const t={"background-size":"contain","background-repeat":"no-repeat",background:`url(${nn}) center center`};return console.log(t),[(()=>{const n=dn();return S(s=>We(n,t,s)),n})(),(()=>{const n=hn(),s=n.firstChild,r=s.nextSibling,i=r.firstChild,l=i.nextSibling,o=l.nextSibling;return C(i,h(he,{title:"Paving and Asphalt Services",subtitle:"We offer paving services including new construction, resurfacing, and repairs.",img:sn})),C(l,h(he,{title:"Excavation and Site Development",subtitle:"We offer excavation services for new construction projects, grading, and drainage solutions.",img:rn})),C(o,h(he,{title:"Technology Consulting",subtitle:"Our technology consulting services include market analysis, product development, and go-to-market strategy.",img:on})),n})(),(()=>{const n=gn(),s=n.firstChild,r=s.nextSibling,i=r.firstChild,l=i.firstChild,o=l.firstChild,a=o.firstChild,f=o.nextSibling,c=f.firstChild,u=c.nextSibling,d=i.nextSibling,w=d.firstChild;return C(a,h(Q,{title:"Low Maintenance",content:"Pavers are low maintenance and easy to clean, making them a cost-effective and practical choice for any property owner.",img:cn})),C(c,h(Q,{title:"Durability",content:" Pavers are extremely durable and can withstand heavy foot traffic and harsh weather conditions without cracking or fading."})),C(u,h(Q,{title:"Versatility",content:"Pavers come in a wide range of sizes, shapes, and colors, allowing for endless design possibilities to match any style or taste.",img:ln})),C(w,h(Q,{title:"Environmentally Friendly",content:"Pavers are eco-friendly as they allow water to filter into the ground, reducing runoff and contributing to a healthier environment.",img:an})),n})()]}const mn=P('<img width="28" height="28">'),pn=P('<span class="title is-4 ml-1">One General Construction'),yn=P('<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation"><div class="navbar-brand"></div><div class="navbar-menu is-active"><div class="navbar-end"><a class="navbar-item" href="tel:6477401168"><button class="button is-primary is-outlined">Call Us At 6477401168'),wn=P('<footer class="footer px-3 py-3"><article class="is-flex is-justify-content-start is-align-items-center"><figure class=""><p class="image is-64x64"><img></p></figure><h3 class="title is-3 mx-2">One General Construction</h3></article><div class="content"><p class="pt-3">Welcome to <strong>One General Construction</strong>, where we are passionate about providing our customers with the highest quality products and services in the technology industry. Our team of engineers and developers is constantly pushing the boundaries of innovation, and we are dedicated to helping our clients stay ahead of the curve.</p><div class="icon-text"><span class="icon has-text-success"><ion-icon name="mail-outline"></ion-icon></span><span>gundam@gundam.com</span></div><div class="icon-text"><span class="icon has-text-success"><ion-icon name="call-outline"></ion-icon></span><span>6477401168</span></div><div class="icon-text"><span class="icon has-text-success"><ion-icon name="location-outline"></ion-icon></span><a href="https://www.google.com/maps?q=1750+Finch+Ave+E,+North+York,+ON+M2J+2X5"><span>47 Thorncliffe Park Dr, East York, ON M4H 1J5</span></a><iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%201%20Grafton%2047%20Thorncliffe%20Park%20Dr,%20East%20York,%20ON%20M4H%201J5Street+(One%20General%20Construction)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe></div></div><p>COPYRIGHT &copy; 2023 One General Construction<br>All content, trade names and/or trade dress, trademarks, artwork and associated imagery are trademarks and/or copyright material of their respective owners. All rights reserved. ',!0,!1),bn=P("<div>services"),vn=P("<div>about");function $n(){return[(()=>{const e=yn(),t=e.firstChild,n=t.nextSibling,s=n.firstChild,r=s.firstChild;return C(t,h(z,{class:"navbar-item",href:"/",get children(){return[(()=>{const i=mn();return R(i,"src",Oe),i})(),pn()]}})),C(s,h(z,{class:"navbar-item",href:"/services",children:"Services"}),r),C(s,h(z,{class:"navbar-item",href:"/about",children:"About Us"}),r),C(s,h(z,{class:"navbar-item",href:"/contact",children:"Contact Us"}),r),e})(),h(Zt,{get children(){return[h(J,{path:"/",component:()=>h(Le,{heading:"this is home"})}),h(J,{path:"/paving",component:()=>h(Le,{heading:"this is home"})}),h(J,{path:"/services",component:()=>bn()}),h(J,{path:"/about",component:()=>vn()})]}}),(()=>{const e=wn(),t=e.firstChild,n=t.firstChild,s=n.firstChild,r=s.firstChild,i=t.nextSibling,l=i.firstChild,o=l.nextSibling,a=o.firstChild,f=a.firstChild,c=o.nextSibling,u=c.firstChild,d=u.firstChild,w=c.nextSibling,v=w.firstChild,p=v.firstChild;return R(r,"src",Oe),f._$owner=Z(),d._$owner=Z(),p._$owner=Z(),e})()]}yt(()=>h(Qt,{get children(){return h($n,{})}}),document.getElementById("root"));
