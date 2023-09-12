(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const Ze=(e,t)=>e===t,te=Symbol("solid-proxy"),ne={equals:Ze};let et=Fe;const D=1,se=2,Te={owned:null,cleanups:null,context:null,owner:null};var p=null;let ue=null,g=null,x=null,I=null,ie=0;function Ne(e,t){const n=g,s=p,r=e.length===0,i=r?Te:{owned:null,cleanups:null,context:null,owner:t===void 0?s:t},l=r?e:()=>e(()=>E(()=>le(i)));p=i,g=null;try{return B(l,!0)}finally{g=n,p=s}}function W(e,t){t=t?Object.assign({},ne,t):ne;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.value)),qe(n,r));return[Ie.bind(n),s]}function P(e,t,n){const s=De(e,t,!1,D);oe(s)}function $(e,t,n){n=n?Object.assign({},ne,n):ne;const s=De(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,oe(s),Ie.bind(s)}function E(e){if(g===null)return e();const t=g;g=null;try{return e()}finally{g=t}}function Re(e,t,n){const s=Array.isArray(e);let r,i=n&&n.defer;return l=>{let o;if(s){o=Array(e.length);for(let f=0;f<e.length;f++)o[f]=e[f]()}else o=e();if(i){i=!1;return}const a=E(()=>t(o,r,l));return r=o,a}}function je(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function Z(){return p}function tt(e,t){const n=p,s=g;p=e,g=null;try{return B(t,!0)}catch(r){$e(r)}finally{p=n,g=s}}function nt(e){const t=g,n=p;return Promise.resolve().then(()=>{g=t,p=n;let s;return B(e,!1),g=p=null,s?s.done:void 0})}function ke(e,t){const n=Symbol("context");return{id:n,Provider:it(n),defaultValue:e}}function be(e){let t;return(t=Ue(p,e.id))!==void 0?t:e.defaultValue}function ve(e){const t=$(e),n=$(()=>ge(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}function Ie(){if(this.sources&&this.state)if(this.state===D)oe(this);else{const e=x;x=null,B(()=>re(this),!1),x=e}if(g){const e=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(e)):(g.sources=[this],g.sourceSlots=[e]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function qe(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&B(()=>{for(let r=0;r<e.observers.length;r+=1){const i=e.observers[r],l=ue&&ue.running;l&&ue.disposed.has(i),(l?!i.tState:!i.state)&&(i.pure?x.push(i):I.push(i),i.observers&&Me(i)),l||(i.state=D)}if(x.length>1e6)throw x=[],new Error},!1)),t}function oe(e){if(!e.fn)return;le(e);const t=p,n=g,s=ie;g=p=e,st(e,e.value,s),g=n,p=t}function st(e,t,n){let s;try{s=e.fn(t)}catch(r){return e.pure&&(e.state=D,e.owned&&e.owned.forEach(le),e.owned=null),e.updatedAt=n+1,$e(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?qe(e,s):e.value=s,e.updatedAt=n)}function De(e,t,n,s=D,r){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:null,pure:n};return p===null||p!==Te&&(p.owned?p.owned.push(i):p.owned=[i]),i}function Be(e){if(e.state===0)return;if(e.state===se)return re(e);if(e.suspense&&E(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ie);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===D)oe(e);else if(e.state===se){const s=x;x=null,B(()=>re(e,t[0]),!1),x=s}}function B(e,t){if(x)return e();let n=!1;t||(x=[]),I?n=!0:I=[],ie++;try{const s=e();return rt(n),s}catch(s){n||(I=null),x=null,$e(s)}}function rt(e){if(x&&(Fe(x),x=null),e)return;const t=I;I=null,t.length&&B(()=>et(t),!1)}function Fe(e){for(let t=0;t<e.length;t++)Be(e[t])}function re(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const r=s.state;r===D?s!==t&&(!s.updatedAt||s.updatedAt<ie)&&Be(s):r===se&&re(s,t)}}}function Me(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=se,n.pure?x.push(n):I.push(n),n.observers&&Me(n))}}function le(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const i=r.pop(),l=n.observerSlots.pop();s<r.length&&(i.sourceSlots[l]=s,r[s]=i,n.observerSlots[s]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)le(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function $e(e){throw e}function Ue(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Ue(e.owner,t):void 0}function ge(e){if(typeof e=="function"&&!e.length)return ge(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=ge(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function it(e,t){return function(s){let r;return P(()=>r=E(()=>(p.context={[e]:s.value},ve(()=>s.children))),void 0),r}}function b(e,t){return E(()=>e(t||{}))}function Y(){return!0}const me={get(e,t,n){return t===te?n:e.get(t)},has(e,t){return t===te?!0:e.has(t)},set:Y,deleteProperty:Y,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Y,deleteProperty:Y}},ownKeys(e){return e.keys()}};function fe(e){return(e=typeof e=="function"?e():e)?e:{}}function pe(...e){let t=!1;for(let s=0;s<e.length;s++){const r=e[s];t=t||!!r&&te in r,e[s]=typeof r=="function"?(t=!0,$(r)):r}if(t)return new Proxy({get(s){for(let r=e.length-1;r>=0;r--){const i=fe(e[r])[s];if(i!==void 0)return i}},has(s){for(let r=e.length-1;r>=0;r--)if(s in fe(e[r]))return!0;return!1},keys(){const s=[];for(let r=0;r<e.length;r++)s.push(...Object.keys(fe(e[r])));return[...new Set(s)]}},me);const n={};for(let s=e.length-1;s>=0;s--)if(e[s]){const r=Object.getOwnPropertyDescriptors(e[s]);for(const i in r)i in n||Object.defineProperty(n,i,{enumerable:!0,get(){for(let l=e.length-1;l>=0;l--){const o=(e[l]||{})[i];if(o!==void 0)return o}}})}return n}function ot(e,...t){const n=new Set(t.length>1?t.flat():t[0]);if(te in e){const r=t.map(i=>new Proxy({get(l){return i.includes(l)?e[l]:void 0},has(l){return i.includes(l)&&l in e},keys(){return i.filter(l=>l in e)}},me));return r.push(new Proxy({get(i){return n.has(i)?void 0:e[i]},has(i){return n.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!n.has(i))}},me)),r}const s=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(s).filter(r=>!n.has(r))),t.map(r=>{const i={};for(let l=0;l<r.length;l++){const o=r[l];o in e&&Object.defineProperty(i,o,s[o]?s[o]:{get(){return e[o]},set(){return!0},enumerable:!0})}return i})}const lt=e=>`Stale read from <${e}>.`;function _e(e){const t=e.keyed,n=$(()=>e.when,void 0,{equals:(s,r)=>t?s===r:!s==!r});return $(()=>{const s=n();if(s){const r=e.children;return typeof r=="function"&&r.length>0?E(()=>r(t?s:()=>{if(!E(n))throw lt("Show");return e.when})):r}return e.fallback},void 0,void 0)}const at=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],ct=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...at]),ut=new Set(["innerHTML","textContent","innerText","children"]),ft=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),dt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function ht(e,t){const n=dt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const gt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),mt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function pt(e,t,n){let s=n.length,r=t.length,i=s,l=0,o=0,a=t[r-1].nextSibling,f=null;for(;l<r||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[r-1]===n[i-1];)r--,i--;if(r===l){const c=i<s?o?n[o-1].nextSibling:n[i-o]:a;for(;o<i;)e.insertBefore(n[o++],c)}else if(i===o)for(;l<r;)(!f||!f.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[r-1]){const c=t[--r].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],c),t[r]=n[i]}else{if(!f){f=new Map;let u=o;for(;u<i;)f.set(n[u],u++)}const c=f.get(t[l]);if(c!=null)if(o<c&&c<i){let u=l,d=1,y;for(;++u<r&&u<i&&!((y=f.get(t[u]))==null||y!==c+d);)d++;if(d>c-o){const v=t[l];for(;o<c;)e.insertBefore(n[o++],v)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const Se="_$DX_DELEGATE";function yt(e,t,n,s={}){let r;return Ne(i=>{r=i,t===document?e():C(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function S(e,t,n){let s;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},i=t?()=>(s||(s=r())).cloneNode(!0):()=>E(()=>document.importNode(s||(s=r()),!0));return i.cloneNode=i,i}function Ke(e,t=window.document){const n=t[Se]||(t[Se]=new Set);for(let s=0,r=e.length;s<r;s++){const i=e[s];n.has(i)||(n.add(i),t.addEventListener(i,At))}}function R(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function wt(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function bt(e,t){t==null?e.removeAttribute("class"):e.className=t}function vt(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=i=>r.call(e,n[1],i))}else e.addEventListener(t,n)}function $t(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let i,l;for(i=0,l=r.length;i<l;i++){const o=r[i];!o||o==="undefined"||t[o]||(Ae(e,o,!1),delete n[o])}for(i=0,l=s.length;i<l;i++){const o=s[i],a=!!t[o];!o||o==="undefined"||n[o]===a||!a||(Ae(e,o,!0),n[o]=a)}return n}function _t(e,t,n){if(!t)return n?R(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let r,i;for(i in n)t[i]==null&&s.removeProperty(i),delete n[i];for(i in t)r=t[i],r!==n[i]&&(s.setProperty(i,r),n[i]=r);return n}function xt(e,t={},n,s){const r={};return s||P(()=>r.children=U(e,t.children,r.children)),P(()=>t.ref&&t.ref(e)),P(()=>Ct(e,t,n,!0,r,!0)),r}function C(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return U(e,t,s,n);P(r=>U(e,t(),r,n),s)}function Ct(e,t,n,s,r={},i=!1){t||(t={});for(const l in r)if(!(l in t)){if(l==="children")continue;r[l]=Pe(e,l,null,r[l],n,i)}for(const l in t){if(l==="children"){s||U(e,t.children);continue}const o=t[l];r[l]=Pe(e,l,o,r[l],n,i)}}function St(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Ae(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,i=s.length;r<i;r++)e.classList.toggle(s[r],n)}function Pe(e,t,n,s,r,i){let l,o,a,f,c;if(t==="style")return _t(e,n,s);if(t==="classList")return $t(e,n,s);if(n===s)return s;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);s&&e.removeEventListener(u,s),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);s&&e.removeEventListener(u,s,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),d=gt.has(u);if(!d&&s){const y=Array.isArray(s)?s[0]:s;e.removeEventListener(u,y)}(d||n)&&(vt(e,u,n,d),d&&Ke([u]))}else if(t.slice(0,5)==="attr:")R(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(a=ut.has(t))||!r&&((f=ht(t,e.tagName))||(o=ct.has(t)))||(l=e.nodeName.includes("-")))c&&(t=t.slice(5),o=!0),t==="class"||t==="className"?bt(e,n):l&&!o&&!a?e[St(t)]=n:e[f||t]=n;else{const u=r&&t.indexOf(":")>-1&&mt[t.split(":")[0]];u?wt(e,u,t,n):R(e,ft[t]||t,n)}return n}function At(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function U(e,t,n,s,r){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=M(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=M(e,n,s);else{if(i==="function")return P(()=>{let o=t();for(;typeof o=="function";)o=o();n=U(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],a=n&&Array.isArray(n);if(ye(o,t,n,r))return P(()=>n=U(e,o,n,s,!0)),()=>n;if(o.length===0){if(n=M(e,n,s),l)return n}else a?n.length===0?Ee(e,o,s):pt(e,n,o):(n&&M(e),Ee(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=M(e,n,s,t);M(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function ye(e,t,n,s){let r=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],a=n&&n[i],f;if(!(o==null||o===!0||o===!1))if((f=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))r=ye(e,o,a)||r;else if(f==="function")if(s){for(;typeof o=="function";)o=o();r=ye(e,Array.isArray(o)?o:[o],Array.isArray(a)?a:[a])||r}else e.push(o),r=!0;else{const c=String(o);a&&a.nodeType===3&&a.data===c?e.push(a):e.push(document.createTextNode(c))}}return r}function Ee(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function M(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(r!==o){const a=o.parentNode===e;!i&&!l?a?e.replaceChild(r,o):e.insertBefore(r,n):a&&o.remove()}else i=!0}}else e.insertBefore(r,n);return[r]}const Pt=!1;function Et(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Ot([e,t],n,s){return[n?()=>n(e()):e,s?r=>t(s(r)):t]}function Lt(e){try{return document.querySelector(e)}catch{return null}}function Tt(e,t){const n=Lt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Nt(e,t,n,s){let r=!1;const i=o=>typeof o=="string"?{value:o}:o,l=Ot(W(i(e()),{equals:(o,a)=>o.value===a.value}),void 0,o=>(!r&&t(o),o));return n&&je(n((o=e())=>{r=!0,l[1](i(o)),r=!1})),{signal:l,utils:s}}function Rt(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:W({value:""})};return e}function jt(){return Nt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:s})=>{t?window.history.replaceState(s,"",e):window.history.pushState(s,"",e),Tt(window.location.hash.slice(1),n)},e=>Et(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function kt(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,i){if(n)return!(n=!1);const l={to:r,options:i,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const o of e)o.listener({...l,from:o.location,retry:a=>{a&&(n=!0),o.navigate(r,i)}});return!l.defaultPrevented}return{subscribe:t,confirm:s}}const It=/^(?:[a-z0-9]+:)?\/\//i,qt=/^\/+|(\/)\/+$/g;function q(e,t=!1){const n=e.replace(qt,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function ee(e,t,n){if(It.test(t))return;const s=q(e),r=n&&q(n);let i="";return!r||t.startsWith("/")?i=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?i=s+r:i=r,(i||"/")+q(t,!i)}function Dt(e,t){if(e==null)throw new Error(t);return e}function Ge(e,t){return q(e).replace(/\/*(\*.*)?$/g,"")+q(t)}function Bt(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function Ft(e,t,n){const[s,r]=e.split("/*",2),i=s.split("/").filter(Boolean),l=i.length;return o=>{const a=o.split("/").filter(Boolean),f=a.length-l;if(f<0||f>0&&r===void 0&&!t)return null;const c={path:l?"":"/",params:{}},u=d=>n===void 0?void 0:n[d];for(let d=0;d<l;d++){const y=i[d],v=a[d],m=y[0]===":",A=m?y.slice(1):y;if(m&&de(v,u(A)))c.params[A]=v;else if(m||!de(v,y))return null;c.path+=`/${v}`}if(r){const d=f?a.slice(-f).join("/"):"";if(de(d,u(r)))c.params[r]=d;else return null}return c}}function de(e,t){const n=s=>s.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Mt(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,i)=>r+(i.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function We(e){const t=new Map,n=Z();return new Proxy({},{get(s,r){return t.has(r)||tt(n,()=>t.set(r,$(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function He(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return He(s).reduce((i,l)=>[...i,...r.map(o=>o+l)],[])}const Ut=100,Ve=ke(),ae=ke(),ce=()=>Dt(be(Ve),"Make sure your app is wrapped in a <Router />");let H;const xe=()=>H||be(ae)||ce().base,Kt=e=>{const t=xe();return $(()=>t.resolvePath(e()))},Gt=e=>{const t=ce();return $(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Wt=()=>ce().location;function Ht(e,t="",n){const{component:s,data:r,children:i}=e,l=!i||Array.isArray(i)&&!i.length,o={key:e,element:s?()=>b(s,{}):()=>{const{element:a}=e;return a===void 0&&n?b(n,{}):a},preload:e.component?s.preload:e.preload,data:r};return Xe(e.path).reduce((a,f)=>{for(const c of He(f)){const u=Ge(t,c),d=l?u:u.split("/*",1)[0];a.push({...o,originalPath:c,pattern:d,matcher:Ft(d,!l,e.matchFilters)})}return a},[])}function Vt(e,t=0){return{routes:e,score:Mt(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const i=e[r],l=i.matcher(n);if(!l)return null;s.unshift({...l,route:i})}return s}}}function Xe(e){return Array.isArray(e)?e:[e]}function Je(e,t="",n,s=[],r=[]){const i=Xe(e);for(let l=0,o=i.length;l<o;l++){const a=i[l];if(a&&typeof a=="object"&&a.hasOwnProperty("path")){const f=Ht(a,t,n);for(const c of f){s.push(c);const u=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!u)Je(a.children,c.pattern,n,s,r);else{const d=Vt([...s],r.length);r.push(d)}s.pop()}}}return s.length?r:r.sort((l,o)=>o.score-l.score)}function Xt(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function Jt(e,t){const n=new URL("http://sar"),s=$(a=>{const f=e();try{return new URL(f,n)}catch{return console.error(`Invalid path ${f}`),a}},n,{equals:(a,f)=>a.href===f.href}),r=$(()=>s().pathname),i=$(()=>s().search,!0),l=$(()=>s().hash),o=$(()=>"");return{get pathname(){return r()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return o()},query:We(Re(i,()=>Bt(s())))}}function Yt(e,t="",n,s){const{signal:[r,i],utils:l={}}=Rt(e),o=l.parsePath||(w=>w),a=l.renderPath||(w=>w),f=l.beforeLeave||kt(),c=ee("",t),u=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!r().value&&i({value:c,replace:!0,scroll:!1});const[d,y]=W(!1),v=async w=>{y(!0);try{await nt(w)}finally{y(!1)}},[m,A]=W(r().value),[O,F]=W(r().state),j=Jt(m,O),k=[],L={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(w){return ee(c,w)}};if(n)try{H=L,L.data=n({data:void 0,params:{},location:j,navigate:Ce(L)})}finally{H=void 0}function V(w,h,_){E(()=>{if(typeof h=="number"){h&&(l.go?f.confirm(h,_)&&l.go(h):console.warn("Router integration does not support relative routing"));return}const{replace:X,resolve:J,scroll:T,state:K}={replace:!1,resolve:!0,scroll:!0,..._},N=J?w.resolvePath(h):ee("",h);if(N===void 0)throw new Error(`Path '${h}' is not a routable path`);if(k.length>=Ut)throw new Error("Too many redirects");const G=m();if((N!==G||K!==O())&&!Pt){if(f.confirm(N,_)){const Qe=k.push({value:G,replace:X,scroll:T,state:O()});v(()=>{A(N),F(K)}).then(()=>{k.length===Qe&&ze({value:N,state:K})})}}})}function Ce(w){return w=w||be(ae)||L,(h,_)=>V(w,h,_)}function ze(w){const h=k[0];h&&((w.value!==h.value||w.state!==h.state)&&i({...w,replace:h.replace,scroll:h.scroll}),k.length=0)}P(()=>{const{value:w,state:h}=r();E(()=>{w!==m()&&v(()=>{A(w),F(h)})})});{let w=function(h){if(h.defaultPrevented||h.button!==0||h.metaKey||h.altKey||h.ctrlKey||h.shiftKey)return;const _=h.composedPath().find(G=>G instanceof Node&&G.nodeName.toUpperCase()==="A");if(!_||!_.hasAttribute("link"))return;const X=_.href;if(_.target||!X&&!_.hasAttribute("state"))return;const J=(_.getAttribute("rel")||"").split(/\s+/);if(_.hasAttribute("download")||J&&J.includes("external"))return;const T=new URL(X);if(T.origin!==window.location.origin||c&&T.pathname&&!T.pathname.toLowerCase().startsWith(c.toLowerCase()))return;const K=o(T.pathname+T.search+T.hash),N=_.getAttribute("state");h.preventDefault(),V(L,K,{resolve:!1,replace:_.hasAttribute("replace"),scroll:!_.hasAttribute("noscroll"),state:N&&JSON.parse(N)})};var Sn=w;Ke(["click"]),document.addEventListener("click",w),je(()=>document.removeEventListener("click",w))}return{base:L,out:u,location:j,isRouting:d,renderPath:a,parsePath:o,navigatorFactory:Ce,beforeLeave:f}}function zt(e,t,n,s,r){const{base:i,location:l,navigatorFactory:o}=e,{pattern:a,element:f,preload:c,data:u}=s().route,d=$(()=>s().path);c&&c();const y={parent:t,pattern:a,get child(){return n()},path:d,params:r,data:t.data,outlet:f,resolvePath(v){return ee(i.path(),v,d())}};if(u)try{H=y,y.data=u({data:t.data,params:r,location:l,navigate:o(y)})}finally{H=void 0}return y}const Qt=S("<a link>"),Zt=e=>{const{source:t,url:n,base:s,data:r,out:i}=e,l=t||jt(),o=Yt(l,s,r);return b(Ve.Provider,{value:o,get children(){return e.children}})},en=e=>{const t=ce(),n=xe(),s=ve(()=>e.children),r=$(()=>Je(s(),Ge(n.pattern,e.base||""),Ye)),i=$(()=>Xt(r(),t.location.pathname)),l=We(()=>{const c=i(),u={};for(let d=0;d<c.length;d++)Object.assign(u,c[d].params);return u});t.out&&t.out.matches.push(i().map(({route:c,path:u,params:d})=>({originalPath:c.originalPath,pattern:c.pattern,path:u,params:d})));const o=[];let a;const f=$(Re(i,(c,u,d)=>{let y=u&&c.length===u.length;const v=[];for(let m=0,A=c.length;m<A;m++){const O=u&&u[m],F=c[m];d&&O&&F.route.key===O.route.key?v[m]=d[m]:(y=!1,o[m]&&o[m](),Ne(j=>{o[m]=j,v[m]=zt(t,v[m-1]||n,()=>f()[m+1],()=>i()[m],l)}))}return o.splice(c.length).forEach(m=>m()),d&&y?d:(a=v[0],v)}));return b(_e,{get when(){return f()&&a},keyed:!0,children:c=>b(ae.Provider,{value:c,get children(){return c.outlet()}})})},z=e=>{const t=ve(()=>e.children);return pe(e,{get children(){return t()}})},Ye=()=>{const e=xe();return b(_e,{get when(){return e.child},keyed:!0,children:t=>b(ae.Provider,{value:t,get children(){return t.outlet()}})})};function Oe(e){e=pe({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=ot(e,["href","state","class","activeClass","inactiveClass","end"]),n=Kt(()=>e.href),s=Gt(n),r=Wt(),i=$(()=>{const l=n();if(l===void 0)return!1;const o=q(l.split(/[?#]/,1)[0]).toLowerCase(),a=q(r.pathname).toLowerCase();return e.end?o===a:a.startsWith(o)});return(()=>{const l=Qt();return xt(l,pe(t,{get href(){return s()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i(),[e.activeClass]:i(),...t.classList}},get["aria-current"](){return i()?"page":void 0}}),!1,!1),l})()}const tn="/assets/31-a35a6f10.jpeg",nn="/assets/3-039062b4.jpeg",sn="/assets/4-d5074e78.jpeg",rn="/assets/5-4b83b2c4.jpeg",on=S('<figure class="image is-square mt-2"><img>'),ln=S('<div class="box"><p class="subtitle my-1"></p><p>');function Q(e){return(()=>{const t=ln(),n=t.firstChild,s=n.nextSibling;return C(n,()=>e.title),C(s,()=>e.content),C(t,b(_e,{get when(){return e.img},get children(){const r=on(),i=r.firstChild;return P(()=>R(i,"src",e.img)),r}}),null),t})()}const an="/assets/28-ad786fa0.jpeg",cn=S('<main><section><div class="hero "><img><div class="max-width-1200 flex-center flex-direction_column width-height_100"><div class="opacity-background"><h1>Our team of experts provides top-quality interlocking solutions that are tailored to your specific needs, ensuring long-lasting beauty and functionality for your outdoor spaces.</h1><address><a href="tel:647-740-1168" title="phone: 647-740-1168">Call Us At <i>647-740-1168</i></a></address></div></div></div></section><section class="background-color_1 color_1 height_100svh-h1"><div class="max-width-1200"><h1 class="text-transform_uppercase pt_1">Twitter</h1><div class="max-width-600 flex-center flex-direction_column "><div class="twitter-container"><a class="twitter-timeline" href="https://twitter.com/HoDaRaKe" data-tweet-limit="3" data-chrome="nofooter noborders noheader" data-height="800">Tweets by HoDaRaKe</a></div><p class="flex-center"><a href="https://twitter.com/HoDaRaKe" target="_blank" class="flex-center button_1">Follow Us</a></p></div></div></section><section class="section pt-3 flow"><h3 class="title is-3">Top-quality Pavers</h3><div class="tile is-ancestor"><div class="tile is-vertical is-8"><div class="tile"><div class="tile is-parent"><article class="tile is-child"></article></div><div class="tile is-parent is-vertical"><article class="tile is-child"></article><article class="tile is-child"></article></div></div></div><div class="tile is-parent"><article class="tile is-child">');function un(e){const t={background:` url(${tn}) center center`};return console.log(t),(()=>{const n=cn(),s=n.firstChild,r=s.firstChild,i=r.firstChild;i.nextSibling.firstChild.firstChild.nextSibling.firstChild;const c=s.nextSibling,u=c.nextSibling,d=u.firstChild,y=d.nextSibling,v=y.firstChild,m=v.firstChild,A=m.firstChild,O=A.firstChild,F=A.nextSibling,j=F.firstChild,k=j.nextSibling,L=v.nextSibling,V=L.firstChild;return R(i,"src",an),C(O,b(Q,{title:"Low Maintenance",content:"Pavers are low maintenance and easy to clean, making them a cost-effective and practical choice for any property owner.",img:rn})),C(j,b(Q,{title:"Durability",content:" Pavers are extremely durable and can withstand heavy foot traffic and harsh weather conditions without cracking or fading."})),C(k,b(Q,{title:"Versatility",content:"Pavers come in a wide range of sizes, shapes, and colors, allowing for endless design possibilities to match any style or taste.",img:nn})),C(V,b(Q,{title:"Environmentally Friendly",content:"Pavers are eco-friendly as they allow water to filter into the ground, reducing runoff and contributing to a healthier environment.",img:sn})),n})()}const fn="/assets/20-87f9a1db.jpeg",dn="/assets/1-03130e2b.jpeg",hn="/assets/47-13fbdb97.jpeg",gn=S('<div class="card"><div class="card-image"><figure class="image is-4by3"><img alt="Placeholder image"></figure></div><div class="card-content"><div class="content"><p class="title is-4"></p><p class="subtitle is-6">');function he(e){return(()=>{const t=gn(),n=t.firstChild,s=n.firstChild,r=s.firstChild,i=n.nextSibling,l=i.firstChild,o=l.firstChild,a=o.nextSibling;return C(o,()=>e.title),C(a,()=>e.subtitle),P(()=>R(r,"src",e.img)),t})()}const mn=S('<section class="section pt-3 pb-0"><h3 class="title is-3">Services</h3><div class="columns"><div class="column"></div><div class="column"></div><div class="column">');function pn(e){return console.log("Service"),(()=>{const t=mn(),n=t.firstChild,s=n.nextSibling,r=s.firstChild,i=r.nextSibling,l=i.nextSibling;return C(r,b(he,{title:"Paving Services",subtitle:"We provide paving services for new construction, as well as resurfacing and repairs, to ensure your surfaces are always in top shape.",img:fn})),C(i,b(he,{title:"Excavation and Site Development",subtitle:"We offer a range of excavation services, including new construction projects, grading, and drainage solutions, to ensure your project is completed to the highest standards.",img:dn})),C(l,b(he,{title:"Flagstone Interlocking",subtitle:"We are dedicated to providing high-quality Flagstone Interlocking services that will enhance the aesthetic and functionality of your outdoor living spaces, with custom designs and installations that are tailored to your vision.",img:hn})),t})()}const Le="/assets/logo-3650748d.png",yn=S("<img>"),wn=S('<div><p class="site-title">One General Construction</p><p class="site-description">Flagstone, Interlock, Landscaping, Power Wash'),bn=S('<div class="shadow-box"><nav role="navigation" class="max-width-1200" aria-label="main navigation"><ul><li> '),vn=S('<footer><article class="flex-center pt_1"><figure><p><img></p></figure><h1 class="pl_1">One General Construction</h1></article><div class="max-width-1200"><p>Welcome to <strong>One General Construction</strong>, where we are passionate about providing our customers with the highest quality products and services in the technology industry. Our team of engineers and developers is constantly pushing the boundaries of innovation, and we are dedicated to helping our clients stay ahead of the curve.</p><address><div class="flex-start column-gap_1"><ion-icon name="mail-outline"></ion-icon><a href="mailto:OneGeneralConstruction@gmail.com" title="OneGeneralConstruction@gmail.com"><i>OneGeneralConstruction@gmail.com</i></a></div><div class="flex-start column-gap_1"><ion-icon name="call-outline"></ion-icon><a href="tel:6477401168" title="phone: 6477401168"><i>6477401168</i></a></div><div class="flex-start column-gap_1"><ion-icon name="location-outline"></ion-icon><a href="https://www.google.com/maps?q=1750+Finch+Ave+E,+North+York,+ON+M2J+2X5"><span>47 Thorncliffe Park Dr, East York, ON M4H 1J5</span></a></div></address></div><iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%201%20Grafton%2047%20Thorncliffe%20Park%20Dr,%20East%20York,%20ON%20M4H%201J5Street+(One%20General%20Construction)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe><p class="max-width-1200">All content, trade names and/or trade dress, trademarks, artwork and associated imagery are trademarks and/or copyright material of their respective owners. All rights reserved. <br>&copy; 2023 One General Construction',!0,!1),$n=S('<div class="scroll-container"><a href="#top">🔝<br>To Top');function _n(){return[(()=>{const e=bn(),t=e.firstChild,n=t.firstChild,s=n.firstChild;return s.firstChild,C(t,b(Oe,{href:we,get children(){return[(()=>{const r=yn();return R(r,"src",Le),r})(),wn()]}}),n),C(s,b(Oe,{href:we+"about",className:"text-transform_uppercase",children:"Gallery"}),null),e})(),b(Ye,{}),(()=>{const e=vn(),t=e.firstChild,n=t.firstChild,s=n.firstChild,r=s.firstChild,i=t.nextSibling,l=i.firstChild,o=l.nextSibling,a=o.firstChild,f=a.firstChild;f.nextSibling;const c=a.nextSibling,u=c.firstChild;u.nextSibling;const d=c.nextSibling,y=d.firstChild;return R(r,"src",Le),f._$owner=Z(),u._$owner=Z(),y._$owner=Z(),e})(),$n()]}const xn=S("<div>about"),we="/";function Cn(){return b(Zt,{get children(){return b(en,{get children(){return b(z,{path:we,component:_n,get children(){return[b(z,{path:"/",component:un}),b(z,{path:"/services",component:pn}),b(z,{path:"/about",component:()=>xn()})]}})}})}})}yt(()=>Cn,document.getElementById("root"));