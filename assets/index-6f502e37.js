(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Ui(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function ji(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=he(r)?Ol(r):ji(r);if(i)for(const a in i)t[a]=i[a]}return t}else{if(he(e))return e;if(oe(e))return e}}const Tl=/;(?![^(]*\))/g,El=/:([^]+)/,Al=/\/\*.*?\*\//gs;function Ol(e){const t={};return e.replace(Al,"").split(Tl).forEach(n=>{if(n){const r=n.split(El);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ot(e){let t="";if(he(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const r=Ot(e[n]);r&&(t+=r+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const kl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Il=Ui(kl);function Ms(e){return!!e||e===""}const Zn=e=>he(e)?e:e==null?"":$(e)||oe(e)&&(e.toString===Ds||!W(e.toString))?JSON.stringify(e,Rs,2):String(e),Rs=(e,t)=>t&&t.__v_isRef?Rs(e,t.value):en(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Ls(t)?{[`Set(${t.size})`]:[...t.values()]}:oe(t)&&!$(t)&&!Us(t)?String(t):t,se={},Qt=[],Ge=()=>{},Cl=()=>!1,Pl=/^on[^a-z]/,Pr=e=>Pl.test(e),zi=e=>e.startsWith("onUpdate:"),Ce=Object.assign,Hi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Sl=Object.prototype.hasOwnProperty,V=(e,t)=>Sl.call(e,t),$=Array.isArray,en=e=>Sr(e)==="[object Map]",Ls=e=>Sr(e)==="[object Set]",W=e=>typeof e=="function",he=e=>typeof e=="string",Yi=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",Fs=e=>oe(e)&&W(e.then)&&W(e.catch),Ds=Object.prototype.toString,Sr=e=>Ds.call(e),Nl=e=>Sr(e).slice(8,-1),Us=e=>Sr(e)==="[object Object]",$i=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hr=Ui(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Nr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ml=/-(\w)/g,st=Nr(e=>e.replace(Ml,(t,n)=>n?n.toUpperCase():"")),Rl=/\B([A-Z])/g,fn=Nr(e=>e.replace(Rl,"-$1").toLowerCase()),Mr=Nr(e=>e.charAt(0).toUpperCase()+e.slice(1)),ti=Nr(e=>e?`on${Mr(e)}`:""),On=(e,t)=>!Object.is(e,t),ni=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},_r=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ll=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Na;const Fl=()=>Na||(Na=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let We;class Dl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=We,!t&&We&&(this.index=(We.scopes||(We.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=We;try{return We=this,t()}finally{We=n}}}on(){We=this}off(){We=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Ul(e,t=We){t&&t.active&&t.effects.push(e)}function jl(){return We}const Wi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},js=e=>(e.w&Ct)>0,zs=e=>(e.n&Ct)>0,zl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ct},Hl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];js(i)&&!zs(i)?i.delete(e):t[n++]=i,i.w&=~Ct,i.n&=~Ct}t.length=n}},di=new WeakMap;let yn=0,Ct=1;const mi=30;let Be;const $t=Symbol(""),hi=Symbol("");class Bi{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ul(this,r)}run(){if(!this.active)return this.fn();let t=Be,n=kt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Be,Be=this,kt=!0,Ct=1<<++yn,yn<=mi?zl(this):Ma(this),this.fn()}finally{yn<=mi&&Hl(this),Ct=1<<--yn,Be=this.parent,kt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Be===this?this.deferStop=!0:this.active&&(Ma(this),this.onStop&&this.onStop(),this.active=!1)}}function Ma(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let kt=!0;const Hs=[];function cn(){Hs.push(kt),kt=!1}function un(){const e=Hs.pop();kt=e===void 0?!0:e}function Re(e,t,n){if(kt&&Be){let r=di.get(e);r||di.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Wi()),Ys(i)}}function Ys(e,t){let n=!1;yn<=mi?zs(e)||(e.n|=Ct,n=!js(e)):n=!e.has(Be),n&&(e.add(Be),Be.deps.push(e))}function mt(e,t,n,r,i,a){const s=di.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&$(e)){const c=Number(r);s.forEach((m,p)=>{(p==="length"||p>=c)&&o.push(m)})}else switch(n!==void 0&&o.push(s.get(n)),t){case"add":$(e)?$i(n)&&o.push(s.get("length")):(o.push(s.get($t)),en(e)&&o.push(s.get(hi)));break;case"delete":$(e)||(o.push(s.get($t)),en(e)&&o.push(s.get(hi)));break;case"set":en(e)&&o.push(s.get($t));break}if(o.length===1)o[0]&&pi(o[0]);else{const c=[];for(const m of o)m&&c.push(...m);pi(Wi(c))}}function pi(e,t){const n=$(e)?e:[...e];for(const r of n)r.computed&&Ra(r);for(const r of n)r.computed||Ra(r)}function Ra(e,t){(e!==Be||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Yl=Ui("__proto__,__v_isRef,__isVue"),$s=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Yi)),$l=Xi(),Wl=Xi(!1,!0),Bl=Xi(!0),La=Xl();function Xl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Q(this);for(let a=0,s=this.length;a<s;a++)Re(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(Q)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){cn();const r=Q(this)[t].apply(this,n);return un(),r}}),e}function Kl(e){const t=Q(this);return Re(t,"has",e),t.hasOwnProperty(e)}function Xi(e=!1,t=!1){return function(r,i,a){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&a===(e?t?cf:qs:t?Ks:Xs).get(r))return r;const s=$(r);if(!e){if(s&&V(La,i))return Reflect.get(La,i,a);if(i==="hasOwnProperty")return Kl}const o=Reflect.get(r,i,a);return(Yi(i)?$s.has(i):Yl(i))||(e||Re(r,"get",i),t)?o:Ee(o)?s&&$i(i)?o:o.value:oe(o)?e?Vs(o):Vi(o):o}}const ql=Ws(),Vl=Ws(!0);function Ws(e=!1){return function(n,r,i,a){let s=n[r];if(an(s)&&Ee(s)&&!Ee(i))return!1;if(!e&&(!wr(i)&&!an(i)&&(s=Q(s),i=Q(i)),!$(n)&&Ee(s)&&!Ee(i)))return s.value=i,!0;const o=$(n)&&$i(r)?Number(r)<n.length:V(n,r),c=Reflect.set(n,r,i,a);return n===Q(a)&&(o?On(i,s)&&mt(n,"set",r,i):mt(n,"add",r,i)),c}}function Gl(e,t){const n=V(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&mt(e,"delete",t,void 0),r}function Jl(e,t){const n=Reflect.has(e,t);return(!Yi(t)||!$s.has(t))&&Re(e,"has",t),n}function Zl(e){return Re(e,"iterate",$(e)?"length":$t),Reflect.ownKeys(e)}const Bs={get:$l,set:ql,deleteProperty:Gl,has:Jl,ownKeys:Zl},Ql={get:Bl,set(e,t){return!0},deleteProperty(e,t){return!0}},ef=Ce({},Bs,{get:Wl,set:Vl}),Ki=e=>e,Rr=e=>Reflect.getPrototypeOf(e);function Qn(e,t,n=!1,r=!1){e=e.__v_raw;const i=Q(e),a=Q(t);n||(t!==a&&Re(i,"get",t),Re(i,"get",a));const{has:s}=Rr(i),o=r?Ki:n?Ji:kn;if(s.call(i,t))return o(e.get(t));if(s.call(i,a))return o(e.get(a));e!==i&&e.get(t)}function er(e,t=!1){const n=this.__v_raw,r=Q(n),i=Q(e);return t||(e!==i&&Re(r,"has",e),Re(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function tr(e,t=!1){return e=e.__v_raw,!t&&Re(Q(e),"iterate",$t),Reflect.get(e,"size",e)}function Fa(e){e=Q(e);const t=Q(this);return Rr(t).has.call(t,e)||(t.add(e),mt(t,"add",e,e)),this}function Da(e,t){t=Q(t);const n=Q(this),{has:r,get:i}=Rr(n);let a=r.call(n,e);a||(e=Q(e),a=r.call(n,e));const s=i.call(n,e);return n.set(e,t),a?On(t,s)&&mt(n,"set",e,t):mt(n,"add",e,t),this}function Ua(e){const t=Q(this),{has:n,get:r}=Rr(t);let i=n.call(t,e);i||(e=Q(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&mt(t,"delete",e,void 0),a}function ja(){const e=Q(this),t=e.size!==0,n=e.clear();return t&&mt(e,"clear",void 0,void 0),n}function nr(e,t){return function(r,i){const a=this,s=a.__v_raw,o=Q(s),c=t?Ki:e?Ji:kn;return!e&&Re(o,"iterate",$t),s.forEach((m,p)=>r.call(i,c(m),c(p),a))}}function rr(e,t,n){return function(...r){const i=this.__v_raw,a=Q(i),s=en(a),o=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,m=i[e](...r),p=n?Ki:t?Ji:kn;return!t&&Re(a,"iterate",c?hi:$t),{next(){const{value:g,done:w}=m.next();return w?{value:g,done:w}:{value:o?[p(g[0]),p(g[1])]:p(g),done:w}},[Symbol.iterator](){return this}}}}function wt(e){return function(...t){return e==="delete"?!1:this}}function tf(){const e={get(a){return Qn(this,a)},get size(){return tr(this)},has:er,add:Fa,set:Da,delete:Ua,clear:ja,forEach:nr(!1,!1)},t={get(a){return Qn(this,a,!1,!0)},get size(){return tr(this)},has:er,add:Fa,set:Da,delete:Ua,clear:ja,forEach:nr(!1,!0)},n={get(a){return Qn(this,a,!0)},get size(){return tr(this,!0)},has(a){return er.call(this,a,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:nr(!0,!1)},r={get(a){return Qn(this,a,!0,!0)},get size(){return tr(this,!0)},has(a){return er.call(this,a,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:nr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=rr(a,!1,!1),n[a]=rr(a,!0,!1),t[a]=rr(a,!1,!0),r[a]=rr(a,!0,!0)}),[e,n,t,r]}const[nf,rf,af,sf]=tf();function qi(e,t){const n=t?e?sf:af:e?rf:nf;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(V(n,i)&&i in r?n:r,i,a)}const of={get:qi(!1,!1)},lf={get:qi(!1,!0)},ff={get:qi(!0,!1)},Xs=new WeakMap,Ks=new WeakMap,qs=new WeakMap,cf=new WeakMap;function uf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function df(e){return e.__v_skip||!Object.isExtensible(e)?0:uf(Nl(e))}function Vi(e){return an(e)?e:Gi(e,!1,Bs,of,Xs)}function mf(e){return Gi(e,!1,ef,lf,Ks)}function Vs(e){return Gi(e,!0,Ql,ff,qs)}function Gi(e,t,n,r,i){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const s=df(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return i.set(e,o),o}function tn(e){return an(e)?tn(e.__v_raw):!!(e&&e.__v_isReactive)}function an(e){return!!(e&&e.__v_isReadonly)}function wr(e){return!!(e&&e.__v_isShallow)}function Gs(e){return tn(e)||an(e)}function Q(e){const t=e&&e.__v_raw;return t?Q(t):e}function Js(e){return _r(e,"__v_skip",!0),e}const kn=e=>oe(e)?Vi(e):e,Ji=e=>oe(e)?Vs(e):e;function Zs(e){kt&&Be&&(e=Q(e),Ys(e.dep||(e.dep=Wi())))}function Qs(e,t){e=Q(e);const n=e.dep;n&&pi(n)}function Ee(e){return!!(e&&e.__v_isRef===!0)}function Tt(e){return hf(e,!1)}function hf(e,t){return Ee(e)?e:new pf(e,t)}class pf{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Q(t),this._value=n?t:kn(t)}get value(){return Zs(this),this._value}set value(t){const n=this.__v_isShallow||wr(t)||an(t);t=n?t:Q(t),On(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:kn(t),Qs(this))}}function vf(e){return Ee(e)?e.value:e}const gf={get:(e,t,n)=>vf(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ee(i)&&!Ee(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function eo(e){return tn(e)?e:new Proxy(e,gf)}var to;class bf{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[to]=!1,this._dirty=!0,this.effect=new Bi(t,()=>{this._dirty||(this._dirty=!0,Qs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=Q(this);return Zs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}to="__v_isReadonly";function yf(e,t,n=!1){let r,i;const a=W(e);return a?(r=e,i=Ge):(r=e.get,i=e.set),new bf(r,i,a||!i,n)}function It(e,t,n,r){let i;try{i=r?e(...r):e()}catch(a){Lr(a,t,n)}return i}function Je(e,t,n,r){if(W(e)){const a=It(e,t,n,r);return a&&Fs(a)&&a.catch(s=>{Lr(s,t,n)}),a}const i=[];for(let a=0;a<e.length;a++)i.push(Je(e[a],t,n,r));return i}function Lr(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const s=t.proxy,o=n;for(;a;){const m=a.ec;if(m){for(let p=0;p<m.length;p++)if(m[p](e,s,o)===!1)return}a=a.parent}const c=t.appContext.config.errorHandler;if(c){It(c,null,10,[e,s,o]);return}}xf(e,n,i,r)}function xf(e,t,n,r=!0){console.error(e)}let In=!1,vi=!1;const Te=[];let it=0;const nn=[];let dt=null,jt=0;const no=Promise.resolve();let Zi=null;function _f(e){const t=Zi||no;return e?t.then(this?e.bind(this):e):t}function wf(e){let t=it+1,n=Te.length;for(;t<n;){const r=t+n>>>1;Cn(Te[r])<e?t=r+1:n=r}return t}function Qi(e){(!Te.length||!Te.includes(e,In&&e.allowRecurse?it+1:it))&&(e.id==null?Te.push(e):Te.splice(wf(e.id),0,e),ro())}function ro(){!In&&!vi&&(vi=!0,Zi=no.then(ao))}function Tf(e){const t=Te.indexOf(e);t>it&&Te.splice(t,1)}function Ef(e){$(e)?nn.push(...e):(!dt||!dt.includes(e,e.allowRecurse?jt+1:jt))&&nn.push(e),ro()}function za(e,t=In?it+1:0){for(;t<Te.length;t++){const n=Te[t];n&&n.pre&&(Te.splice(t,1),t--,n())}}function io(e){if(nn.length){const t=[...new Set(nn)];if(nn.length=0,dt){dt.push(...t);return}for(dt=t,dt.sort((n,r)=>Cn(n)-Cn(r)),jt=0;jt<dt.length;jt++)dt[jt]();dt=null,jt=0}}const Cn=e=>e.id==null?1/0:e.id,Af=(e,t)=>{const n=Cn(e)-Cn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ao(e){vi=!1,In=!0,Te.sort(Af);const t=Ge;try{for(it=0;it<Te.length;it++){const n=Te[it];n&&n.active!==!1&&It(n,null,14)}}finally{it=0,Te.length=0,io(),In=!1,Zi=null,(Te.length||nn.length)&&ao()}}function Of(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||se;let i=n;const a=t.startsWith("update:"),s=a&&t.slice(7);if(s&&s in r){const p=`${s==="modelValue"?"model":s}Modifiers`,{number:g,trim:w}=r[p]||se;w&&(i=n.map(k=>he(k)?k.trim():k)),g&&(i=n.map(Ll))}let o,c=r[o=ti(t)]||r[o=ti(st(t))];!c&&a&&(c=r[o=ti(fn(t))]),c&&Je(c,e,6,i);const m=r[o+"Once"];if(m){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Je(m,e,6,i)}}function so(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let s={},o=!1;if(!W(e)){const c=m=>{const p=so(m,t,!0);p&&(o=!0,Ce(s,p))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!a&&!o?(oe(e)&&r.set(e,null),null):($(a)?a.forEach(c=>s[c]=null):Ce(s,a),oe(e)&&r.set(e,s),s)}function Fr(e,t){return!e||!Pr(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,fn(t))||V(e,t))}let Ke=null,Dr=null;function Tr(e){const t=Ke;return Ke=e,Dr=e&&e.type.__scopeId||null,t}function kf(e){Dr=e}function If(){Dr=null}function Cf(e,t=Ke,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Va(-1);const a=Tr(t);let s;try{s=e(...i)}finally{Tr(a),r._d&&Va(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function ri(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[s],slots:o,attrs:c,emit:m,render:p,renderCache:g,data:w,setupState:k,ctx:H,inheritAttrs:L}=e;let K,I;const S=Tr(e);try{if(n.shapeFlag&4){const P=i||r;K=rt(p.call(P,P,g,a,k,w,H)),I=c}else{const P=t;K=rt(P.length>1?P(a,{attrs:c,slots:o,emit:m}):P(a,null)),I=t.props?c:Pf(c)}}catch(P){wn.length=0,Lr(P,e,1),K=Me(Pn)}let E=K;if(I&&L!==!1){const P=Object.keys(I),{shapeFlag:U}=E;P.length&&U&7&&(s&&P.some(zi)&&(I=Sf(I,s)),E=sn(E,I))}return n.dirs&&(E=sn(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),K=E,Tr(S),K}const Pf=e=>{let t;for(const n in e)(n==="class"||n==="style"||Pr(n))&&((t||(t={}))[n]=e[n]);return t},Sf=(e,t)=>{const n={};for(const r in e)(!zi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Nf(e,t,n){const{props:r,children:i,component:a}=e,{props:s,children:o,patchFlag:c}=t,m=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ha(r,s,m):!!s;if(c&8){const p=t.dynamicProps;for(let g=0;g<p.length;g++){const w=p[g];if(s[w]!==r[w]&&!Fr(m,w))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?Ha(r,s,m):!0:!!s;return!1}function Ha(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!Fr(n,a))return!0}return!1}function Mf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Rf=e=>e.__isSuspense;function Lf(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):Ef(e)}function Ff(e,t){if(me){let n=me.provides;const r=me.parent&&me.parent.provides;r===n&&(n=me.provides=Object.create(r)),n[e]=t}}function pr(e,t,n=!1){const r=me||Ke;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&W(t)?t.call(r.proxy):t}}const ir={};function vr(e,t,n){return oo(e,t,n)}function oo(e,t,{immediate:n,deep:r,flush:i,onTrack:a,onTrigger:s}=se){const o=jl()===(me==null?void 0:me.scope)?me:null;let c,m=!1,p=!1;if(Ee(e)?(c=()=>e.value,m=wr(e)):tn(e)?(c=()=>e,r=!0):$(e)?(p=!0,m=e.some(E=>tn(E)||wr(E)),c=()=>e.map(E=>{if(Ee(E))return E.value;if(tn(E))return Gt(E);if(W(E))return It(E,o,2)})):W(e)?t?c=()=>It(e,o,2):c=()=>{if(!(o&&o.isUnmounted))return g&&g(),Je(e,o,3,[w])}:c=Ge,t&&r){const E=c;c=()=>Gt(E())}let g,w=E=>{g=I.onStop=()=>{It(E,o,4)}},k;if(Nn)if(w=Ge,t?n&&Je(t,o,3,[c(),p?[]:void 0,w]):c(),i==="sync"){const E=Pc();k=E.__watcherHandles||(E.__watcherHandles=[])}else return Ge;let H=p?new Array(e.length).fill(ir):ir;const L=()=>{if(I.active)if(t){const E=I.run();(r||m||(p?E.some((P,U)=>On(P,H[U])):On(E,H)))&&(g&&g(),Je(t,o,3,[E,H===ir?void 0:p&&H[0]===ir?[]:H,w]),H=E)}else I.run()};L.allowRecurse=!!t;let K;i==="sync"?K=L:i==="post"?K=()=>Ne(L,o&&o.suspense):(L.pre=!0,o&&(L.id=o.uid),K=()=>Qi(L));const I=new Bi(c,K);t?n?L():H=I.run():i==="post"?Ne(I.run.bind(I),o&&o.suspense):I.run();const S=()=>{I.stop(),o&&o.scope&&Hi(o.scope.effects,I)};return k&&k.push(S),S}function Df(e,t,n){const r=this.proxy,i=he(e)?e.includes(".")?lo(r,e):()=>r[e]:e.bind(r,r);let a;W(t)?a=t:(a=t.handler,n=t);const s=me;on(this);const o=oo(i,a.bind(r),n);return s?on(s):Wt(),o}function lo(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Gt(e,t){if(!oe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ee(e))Gt(e.value,t);else if($(e))for(let n=0;n<e.length;n++)Gt(e[n],t);else if(Ls(e)||en(e))e.forEach(n=>{Gt(n,t)});else if(Us(e))for(const n in e)Gt(e[n],t);return e}function ea(e){return W(e)?{setup:e,name:e.name}:e}const gr=e=>!!e.type.__asyncLoader,fo=e=>e.type.__isKeepAlive;function Uf(e,t){co(e,"a",t)}function jf(e,t){co(e,"da",t)}function co(e,t,n=me){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Ur(t,r,n),n){let i=n.parent;for(;i&&i.parent;)fo(i.parent.vnode)&&zf(r,t,n,i),i=i.parent}}function zf(e,t,n,r){const i=Ur(t,e,r,!0);ho(()=>{Hi(r[t],i)},n)}function Ur(e,t,n=me,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;cn(),on(n);const o=Je(t,n,e,s);return Wt(),un(),o});return r?i.unshift(a):i.push(a),a}}const gt=e=>(t,n=me)=>(!Nn||e==="sp")&&Ur(e,(...r)=>t(...r),n),Hf=gt("bm"),uo=gt("m"),Yf=gt("bu"),$f=gt("u"),mo=gt("bum"),ho=gt("um"),Wf=gt("sp"),Bf=gt("rtg"),Xf=gt("rtc");function Kf(e,t=me){Ur("ec",e,t)}function Ft(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let s=0;s<i.length;s++){const o=i[s];a&&(o.oldValue=a[s].value);let c=o.dir[r];c&&(cn(),Je(c,n,8,[e.el,o,e,t]),un())}}const po="components";function qf(e,t){return Gf(po,e,!0,t)||e}const Vf=Symbol();function Gf(e,t,n=!0,r=!1){const i=Ke||me;if(i){const a=i.type;if(e===po){const o=kc(a,!1);if(o&&(o===t||o===st(t)||o===Mr(st(t))))return a}const s=Ya(i[e]||a[e],t)||Ya(i.appContext[e],t);return!s&&r?a:s}}function Ya(e,t){return e&&(e[t]||e[st(t)]||e[Mr(st(t))])}function gn(e,t,n,r){let i;const a=n&&n[r];if($(e)||he(e)){i=new Array(e.length);for(let s=0,o=e.length;s<o;s++)i[s]=t(e[s],s,void 0,a&&a[s])}else if(typeof e=="number"){i=new Array(e);for(let s=0;s<e;s++)i[s]=t(s+1,s,void 0,a&&a[s])}else if(oe(e))if(e[Symbol.iterator])i=Array.from(e,(s,o)=>t(s,o,void 0,a&&a[o]));else{const s=Object.keys(e);i=new Array(s.length);for(let o=0,c=s.length;o<c;o++){const m=s[o];i[o]=t(e[m],m,o,a&&a[o])}}else i=[];return n&&(n[r]=i),i}const gi=e=>e?Oo(e)?ia(e)||e.proxy:gi(e.parent):null,_n=Ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>gi(e.parent),$root:e=>gi(e.root),$emit:e=>e.emit,$options:e=>ta(e),$forceUpdate:e=>e.f||(e.f=()=>Qi(e.update)),$nextTick:e=>e.n||(e.n=_f.bind(e.proxy)),$watch:e=>Df.bind(e)}),ii=(e,t)=>e!==se&&!e.__isScriptSetup&&V(e,t),Jf={get({_:e},t){const{ctx:n,setupState:r,data:i,props:a,accessCache:s,type:o,appContext:c}=e;let m;if(t[0]!=="$"){const k=s[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(ii(r,t))return s[t]=1,r[t];if(i!==se&&V(i,t))return s[t]=2,i[t];if((m=e.propsOptions[0])&&V(m,t))return s[t]=3,a[t];if(n!==se&&V(n,t))return s[t]=4,n[t];bi&&(s[t]=0)}}const p=_n[t];let g,w;if(p)return t==="$attrs"&&Re(e,"get",t),p(e);if((g=o.__cssModules)&&(g=g[t]))return g;if(n!==se&&V(n,t))return s[t]=4,n[t];if(w=c.config.globalProperties,V(w,t))return w[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return ii(i,t)?(i[t]=n,!0):r!==se&&V(r,t)?(r[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},s){let o;return!!n[s]||e!==se&&V(e,s)||ii(t,s)||(o=a[0])&&V(o,s)||V(r,s)||V(_n,s)||V(i.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let bi=!0;function Zf(e){const t=ta(e),n=e.proxy,r=e.ctx;bi=!1,t.beforeCreate&&$a(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:s,watch:o,provide:c,inject:m,created:p,beforeMount:g,mounted:w,beforeUpdate:k,updated:H,activated:L,deactivated:K,beforeDestroy:I,beforeUnmount:S,destroyed:E,unmounted:P,render:U,renderTracked:G,renderTriggered:J,errorCaptured:fe,serverPrefetch:ce,expose:q,inheritAttrs:be,components:ot,directives:Mt,filters:yt}=t;if(m&&Qf(m,r,null,e.appContext.config.unwrapInjectedRef),s)for(const re in s){const te=s[re];W(te)&&(r[re]=te.bind(n))}if(i){const re=i.call(n,n);oe(re)&&(e.data=Vi(re))}if(bi=!0,a)for(const re in a){const te=a[re],Ze=W(te)?te.bind(n,n):W(te.get)?te.get.bind(n,n):Ge,Kt=!W(te)&&W(te.set)?te.set.bind(n):Ge,lt=je({get:Ze,set:Kt});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>lt.value,set:we=>lt.value=we})}if(o)for(const re in o)vo(o[re],r,n,re);if(c){const re=W(c)?c.call(n):c;Reflect.ownKeys(re).forEach(te=>{Ff(te,re[te])})}p&&$a(p,e,"c");function ye(re,te){$(te)?te.forEach(Ze=>re(Ze.bind(n))):te&&re(te.bind(n))}if(ye(Hf,g),ye(uo,w),ye(Yf,k),ye($f,H),ye(Uf,L),ye(jf,K),ye(Kf,fe),ye(Xf,G),ye(Bf,J),ye(mo,S),ye(ho,P),ye(Wf,ce),$(q))if(q.length){const re=e.exposed||(e.exposed={});q.forEach(te=>{Object.defineProperty(re,te,{get:()=>n[te],set:Ze=>n[te]=Ze})})}else e.exposed||(e.exposed={});U&&e.render===Ge&&(e.render=U),be!=null&&(e.inheritAttrs=be),ot&&(e.components=ot),Mt&&(e.directives=Mt)}function Qf(e,t,n=Ge,r=!1){$(e)&&(e=yi(e));for(const i in e){const a=e[i];let s;oe(a)?"default"in a?s=pr(a.from||i,a.default,!0):s=pr(a.from||i):s=pr(a),Ee(s)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function $a(e,t,n){Je($(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function vo(e,t,n,r){const i=r.includes(".")?lo(n,r):()=>n[r];if(he(e)){const a=t[e];W(a)&&vr(i,a)}else if(W(e))vr(i,e.bind(n));else if(oe(e))if($(e))e.forEach(a=>vo(a,t,n,r));else{const a=W(e.handler)?e.handler.bind(n):t[e.handler];W(a)&&vr(i,a,e)}}function ta(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:s}}=e.appContext,o=a.get(t);let c;return o?c=o:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(m=>Er(c,m,s,!0)),Er(c,t,s)),oe(t)&&a.set(t,c),c}function Er(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&Er(e,a,n,!0),i&&i.forEach(s=>Er(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=ec[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const ec={data:Wa,props:Ut,emits:Ut,methods:Ut,computed:Ut,beforeCreate:ke,created:ke,beforeMount:ke,mounted:ke,beforeUpdate:ke,updated:ke,beforeDestroy:ke,beforeUnmount:ke,destroyed:ke,unmounted:ke,activated:ke,deactivated:ke,errorCaptured:ke,serverPrefetch:ke,components:Ut,directives:Ut,watch:nc,provide:Wa,inject:tc};function Wa(e,t){return t?e?function(){return Ce(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function tc(e,t){return Ut(yi(e),yi(t))}function yi(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ke(e,t){return e?[...new Set([].concat(e,t))]:t}function Ut(e,t){return e?Ce(Ce(Object.create(null),e),t):t}function nc(e,t){if(!e)return t;if(!t)return e;const n=Ce(Object.create(null),e);for(const r in t)n[r]=ke(e[r],t[r]);return n}function rc(e,t,n,r=!1){const i={},a={};_r(a,zr,1),e.propsDefaults=Object.create(null),go(e,t,i,a);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);n?e.props=r?i:mf(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function ic(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:s}}=e,o=Q(i),[c]=e.propsOptions;let m=!1;if((r||s>0)&&!(s&16)){if(s&8){const p=e.vnode.dynamicProps;for(let g=0;g<p.length;g++){let w=p[g];if(Fr(e.emitsOptions,w))continue;const k=t[w];if(c)if(V(a,w))k!==a[w]&&(a[w]=k,m=!0);else{const H=st(w);i[H]=xi(c,o,H,k,e,!1)}else k!==a[w]&&(a[w]=k,m=!0)}}}else{go(e,t,i,a)&&(m=!0);let p;for(const g in o)(!t||!V(t,g)&&((p=fn(g))===g||!V(t,p)))&&(c?n&&(n[g]!==void 0||n[p]!==void 0)&&(i[g]=xi(c,o,g,void 0,e,!0)):delete i[g]);if(a!==o)for(const g in a)(!t||!V(t,g))&&(delete a[g],m=!0)}m&&mt(e,"set","$attrs")}function go(e,t,n,r){const[i,a]=e.propsOptions;let s=!1,o;if(t)for(let c in t){if(hr(c))continue;const m=t[c];let p;i&&V(i,p=st(c))?!a||!a.includes(p)?n[p]=m:(o||(o={}))[p]=m:Fr(e.emitsOptions,c)||(!(c in r)||m!==r[c])&&(r[c]=m,s=!0)}if(a){const c=Q(n),m=o||se;for(let p=0;p<a.length;p++){const g=a[p];n[g]=xi(i,c,g,m[g],e,!V(m,g))}}return s}function xi(e,t,n,r,i,a){const s=e[n];if(s!=null){const o=V(s,"default");if(o&&r===void 0){const c=s.default;if(s.type!==Function&&W(c)){const{propsDefaults:m}=i;n in m?r=m[n]:(on(i),r=m[n]=c.call(null,t),Wt())}else r=c}s[0]&&(a&&!o?r=!1:s[1]&&(r===""||r===fn(n))&&(r=!0))}return r}function bo(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,s={},o=[];let c=!1;if(!W(e)){const p=g=>{c=!0;const[w,k]=bo(g,t,!0);Ce(s,w),k&&o.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!a&&!c)return oe(e)&&r.set(e,Qt),Qt;if($(a))for(let p=0;p<a.length;p++){const g=st(a[p]);Ba(g)&&(s[g]=se)}else if(a)for(const p in a){const g=st(p);if(Ba(g)){const w=a[p],k=s[g]=$(w)||W(w)?{type:w}:Object.assign({},w);if(k){const H=qa(Boolean,k.type),L=qa(String,k.type);k[0]=H>-1,k[1]=L<0||H<L,(H>-1||V(k,"default"))&&o.push(g)}}}const m=[s,o];return oe(e)&&r.set(e,m),m}function Ba(e){return e[0]!=="$"}function Xa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ka(e,t){return Xa(e)===Xa(t)}function qa(e,t){return $(t)?t.findIndex(n=>Ka(n,e)):W(t)&&Ka(t,e)?0:-1}const yo=e=>e[0]==="_"||e==="$stable",na=e=>$(e)?e.map(rt):[rt(e)],ac=(e,t,n)=>{if(t._n)return t;const r=Cf((...i)=>na(t(...i)),n);return r._c=!1,r},xo=(e,t,n)=>{const r=e._ctx;for(const i in e){if(yo(i))continue;const a=e[i];if(W(a))t[i]=ac(i,a,r);else if(a!=null){const s=na(a);t[i]=()=>s}}},_o=(e,t)=>{const n=na(t);e.slots.default=()=>n},sc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Q(t),_r(t,"_",n)):xo(t,e.slots={})}else e.slots={},t&&_o(e,t);_r(e.slots,zr,1)},oc=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,s=se;if(r.shapeFlag&32){const o=t._;o?n&&o===1?a=!1:(Ce(i,t),!n&&o===1&&delete i._):(a=!t.$stable,xo(t,i)),s=t}else t&&(_o(e,t),s={default:1});if(a)for(const o in i)!yo(o)&&!(o in s)&&delete i[o]};function wo(){return{app:null,config:{isNativeTag:Cl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lc=0;function fc(e,t){return function(r,i=null){W(r)||(r=Object.assign({},r)),i!=null&&!oe(i)&&(i=null);const a=wo(),s=new Set;let o=!1;const c=a.app={_uid:lc++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:Sc,get config(){return a.config},set config(m){},use(m,...p){return s.has(m)||(m&&W(m.install)?(s.add(m),m.install(c,...p)):W(m)&&(s.add(m),m(c,...p))),c},mixin(m){return a.mixins.includes(m)||a.mixins.push(m),c},component(m,p){return p?(a.components[m]=p,c):a.components[m]},directive(m,p){return p?(a.directives[m]=p,c):a.directives[m]},mount(m,p,g){if(!o){const w=Me(r,i);return w.appContext=a,p&&t?t(w,m):e(w,m,g),o=!0,c._container=m,m.__vue_app__=c,ia(w.component)||w.component.proxy}},unmount(){o&&(e(null,c._container),delete c._container.__vue_app__)},provide(m,p){return a.provides[m]=p,c}};return c}}function _i(e,t,n,r,i=!1){if($(e)){e.forEach((w,k)=>_i(w,t&&($(t)?t[k]:t),n,r,i));return}if(gr(r)&&!i)return;const a=r.shapeFlag&4?ia(r.component)||r.component.proxy:r.el,s=i?null:a,{i:o,r:c}=e,m=t&&t.r,p=o.refs===se?o.refs={}:o.refs,g=o.setupState;if(m!=null&&m!==c&&(he(m)?(p[m]=null,V(g,m)&&(g[m]=null)):Ee(m)&&(m.value=null)),W(c))It(c,o,12,[s,p]);else{const w=he(c),k=Ee(c);if(w||k){const H=()=>{if(e.f){const L=w?V(g,c)?g[c]:p[c]:c.value;i?$(L)&&Hi(L,a):$(L)?L.includes(a)||L.push(a):w?(p[c]=[a],V(g,c)&&(g[c]=p[c])):(c.value=[a],e.k&&(p[e.k]=c.value))}else w?(p[c]=s,V(g,c)&&(g[c]=s)):k&&(c.value=s,e.k&&(p[e.k]=s))};s?(H.id=-1,Ne(H,n)):H()}}}const Ne=Lf;function cc(e){return uc(e)}function uc(e,t){const n=Fl();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:s,createText:o,createComment:c,setText:m,setElementText:p,parentNode:g,nextSibling:w,setScopeId:k=Ge,insertStaticContent:H}=e,L=(d,h,b,_=null,y=null,A=null,N=!1,O=null,C=!!h.dynamicChildren)=>{if(d===h)return;d&&!bn(d,h)&&(_=de(d),we(d,y,A,!0),d=null),h.patchFlag===-2&&(C=!1,h.dynamicChildren=null);const{type:x,ref:j,shapeFlag:F}=h;switch(x){case jr:K(d,h,b,_);break;case Pn:I(d,h,b,_);break;case ai:d==null&&S(h,b,_,N);break;case Ie:ot(d,h,b,_,y,A,N,O,C);break;default:F&1?U(d,h,b,_,y,A,N,O,C):F&6?Mt(d,h,b,_,y,A,N,O,C):(F&64||F&128)&&x.process(d,h,b,_,y,A,N,O,C,ne)}j!=null&&y&&_i(j,d&&d.ref,A,h||d,!h)},K=(d,h,b,_)=>{if(d==null)r(h.el=o(h.children),b,_);else{const y=h.el=d.el;h.children!==d.children&&m(y,h.children)}},I=(d,h,b,_)=>{d==null?r(h.el=c(h.children||""),b,_):h.el=d.el},S=(d,h,b,_)=>{[d.el,d.anchor]=H(d.children,h,b,_,d.el,d.anchor)},E=({el:d,anchor:h},b,_)=>{let y;for(;d&&d!==h;)y=w(d),r(d,b,_),d=y;r(h,b,_)},P=({el:d,anchor:h})=>{let b;for(;d&&d!==h;)b=w(d),i(d),d=b;i(h)},U=(d,h,b,_,y,A,N,O,C)=>{N=N||h.type==="svg",d==null?G(h,b,_,y,A,N,O,C):ce(d,h,y,A,N,O,C)},G=(d,h,b,_,y,A,N,O)=>{let C,x;const{type:j,props:F,shapeFlag:z,transition:Y,dirs:B}=d;if(C=d.el=s(d.type,A,F&&F.is,F),z&8?p(C,d.children):z&16&&fe(d.children,C,null,_,y,A&&j!=="foreignObject",N,O),B&&Ft(d,null,_,"created"),J(C,d,d.scopeId,N,_),F){for(const Z in F)Z!=="value"&&!hr(Z)&&a(C,Z,null,F[Z],A,d.children,_,y,ze);"value"in F&&a(C,"value",null,F.value),(x=F.onVnodeBeforeMount)&&nt(x,_,d)}B&&Ft(d,null,_,"beforeMount");const ee=(!y||y&&!y.pendingBranch)&&Y&&!Y.persisted;ee&&Y.beforeEnter(C),r(C,h,b),((x=F&&F.onVnodeMounted)||ee||B)&&Ne(()=>{x&&nt(x,_,d),ee&&Y.enter(C),B&&Ft(d,null,_,"mounted")},y)},J=(d,h,b,_,y)=>{if(b&&k(d,b),_)for(let A=0;A<_.length;A++)k(d,_[A]);if(y){let A=y.subTree;if(h===A){const N=y.vnode;J(d,N,N.scopeId,N.slotScopeIds,y.parent)}}},fe=(d,h,b,_,y,A,N,O,C=0)=>{for(let x=C;x<d.length;x++){const j=d[x]=O?At(d[x]):rt(d[x]);L(null,j,h,b,_,y,A,N,O)}},ce=(d,h,b,_,y,A,N)=>{const O=h.el=d.el;let{patchFlag:C,dynamicChildren:x,dirs:j}=h;C|=d.patchFlag&16;const F=d.props||se,z=h.props||se;let Y;b&&Dt(b,!1),(Y=z.onVnodeBeforeUpdate)&&nt(Y,b,h,d),j&&Ft(h,d,b,"beforeUpdate"),b&&Dt(b,!0);const B=y&&h.type!=="foreignObject";if(x?q(d.dynamicChildren,x,O,b,_,B,A):N||te(d,h,O,null,b,_,B,A,!1),C>0){if(C&16)be(O,h,F,z,b,_,y);else if(C&2&&F.class!==z.class&&a(O,"class",null,z.class,y),C&4&&a(O,"style",F.style,z.style,y),C&8){const ee=h.dynamicProps;for(let Z=0;Z<ee.length;Z++){const le=ee[Z],Pe=F[le],He=z[le];(He!==Pe||le==="value")&&a(O,le,Pe,He,y,d.children,b,_,ze)}}C&1&&d.children!==h.children&&p(O,h.children)}else!N&&x==null&&be(O,h,F,z,b,_,y);((Y=z.onVnodeUpdated)||j)&&Ne(()=>{Y&&nt(Y,b,h,d),j&&Ft(h,d,b,"updated")},_)},q=(d,h,b,_,y,A,N)=>{for(let O=0;O<h.length;O++){const C=d[O],x=h[O],j=C.el&&(C.type===Ie||!bn(C,x)||C.shapeFlag&70)?g(C.el):b;L(C,x,j,null,_,y,A,N,!0)}},be=(d,h,b,_,y,A,N)=>{if(b!==_){if(b!==se)for(const O in b)!hr(O)&&!(O in _)&&a(d,O,b[O],null,N,h.children,y,A,ze);for(const O in _){if(hr(O))continue;const C=_[O],x=b[O];C!==x&&O!=="value"&&a(d,O,x,C,N,h.children,y,A,ze)}"value"in _&&a(d,"value",b.value,_.value)}},ot=(d,h,b,_,y,A,N,O,C)=>{const x=h.el=d?d.el:o(""),j=h.anchor=d?d.anchor:o("");let{patchFlag:F,dynamicChildren:z,slotScopeIds:Y}=h;Y&&(O=O?O.concat(Y):Y),d==null?(r(x,b,_),r(j,b,_),fe(h.children,b,j,y,A,N,O,C)):F>0&&F&64&&z&&d.dynamicChildren?(q(d.dynamicChildren,z,b,y,A,N,O),(h.key!=null||y&&h===y.subTree)&&To(d,h,!0)):te(d,h,b,j,y,A,N,O,C)},Mt=(d,h,b,_,y,A,N,O,C)=>{h.slotScopeIds=O,d==null?h.shapeFlag&512?y.ctx.activate(h,b,_,N,C):yt(h,b,_,y,A,N,C):Hn(d,h,C)},yt=(d,h,b,_,y,A,N)=>{const O=d.component=wc(d,_,y);if(fo(d)&&(O.ctx.renderer=ne),Tc(O),O.asyncDep){if(y&&y.registerDep(O,ye),!d.el){const C=O.subTree=Me(Pn);I(null,C,h,b)}return}ye(O,d,h,b,y,A,N)},Hn=(d,h,b)=>{const _=h.component=d.component;if(Nf(d,h,b))if(_.asyncDep&&!_.asyncResolved){re(_,h,b);return}else _.next=h,Tf(_.update),_.update();else h.el=d.el,_.vnode=h},ye=(d,h,b,_,y,A,N)=>{const O=()=>{if(d.isMounted){let{next:j,bu:F,u:z,parent:Y,vnode:B}=d,ee=j,Z;Dt(d,!1),j?(j.el=B.el,re(d,j,N)):j=B,F&&ni(F),(Z=j.props&&j.props.onVnodeBeforeUpdate)&&nt(Z,Y,j,B),Dt(d,!0);const le=ri(d),Pe=d.subTree;d.subTree=le,L(Pe,le,g(Pe.el),de(Pe),d,y,A),j.el=le.el,ee===null&&Mf(d,le.el),z&&Ne(z,y),(Z=j.props&&j.props.onVnodeUpdated)&&Ne(()=>nt(Z,Y,j,B),y)}else{let j;const{el:F,props:z}=h,{bm:Y,m:B,parent:ee}=d,Z=gr(h);if(Dt(d,!1),Y&&ni(Y),!Z&&(j=z&&z.onVnodeBeforeMount)&&nt(j,ee,h),Dt(d,!0),F&&xt){const le=()=>{d.subTree=ri(d),xt(F,d.subTree,d,y,null)};Z?h.type.__asyncLoader().then(()=>!d.isUnmounted&&le()):le()}else{const le=d.subTree=ri(d);L(null,le,b,_,d,y,A),h.el=le.el}if(B&&Ne(B,y),!Z&&(j=z&&z.onVnodeMounted)){const le=h;Ne(()=>nt(j,ee,le),y)}(h.shapeFlag&256||ee&&gr(ee.vnode)&&ee.vnode.shapeFlag&256)&&d.a&&Ne(d.a,y),d.isMounted=!0,h=b=_=null}},C=d.effect=new Bi(O,()=>Qi(x),d.scope),x=d.update=()=>C.run();x.id=d.uid,Dt(d,!0),x()},re=(d,h,b)=>{h.component=d;const _=d.vnode.props;d.vnode=h,d.next=null,ic(d,h.props,_,b),oc(d,h.children,b),cn(),za(),un()},te=(d,h,b,_,y,A,N,O,C=!1)=>{const x=d&&d.children,j=d?d.shapeFlag:0,F=h.children,{patchFlag:z,shapeFlag:Y}=h;if(z>0){if(z&128){Kt(x,F,b,_,y,A,N,O,C);return}else if(z&256){Ze(x,F,b,_,y,A,N,O,C);return}}Y&8?(j&16&&ze(x,y,A),F!==x&&p(b,F)):j&16?Y&16?Kt(x,F,b,_,y,A,N,O,C):ze(x,y,A,!0):(j&8&&p(b,""),Y&16&&fe(F,b,_,y,A,N,O,C))},Ze=(d,h,b,_,y,A,N,O,C)=>{d=d||Qt,h=h||Qt;const x=d.length,j=h.length,F=Math.min(x,j);let z;for(z=0;z<F;z++){const Y=h[z]=C?At(h[z]):rt(h[z]);L(d[z],Y,b,null,y,A,N,O,C)}x>j?ze(d,y,A,!0,!1,F):fe(h,b,_,y,A,N,O,C,F)},Kt=(d,h,b,_,y,A,N,O,C)=>{let x=0;const j=h.length;let F=d.length-1,z=j-1;for(;x<=F&&x<=z;){const Y=d[x],B=h[x]=C?At(h[x]):rt(h[x]);if(bn(Y,B))L(Y,B,b,null,y,A,N,O,C);else break;x++}for(;x<=F&&x<=z;){const Y=d[F],B=h[z]=C?At(h[z]):rt(h[z]);if(bn(Y,B))L(Y,B,b,null,y,A,N,O,C);else break;F--,z--}if(x>F){if(x<=z){const Y=z+1,B=Y<j?h[Y].el:_;for(;x<=z;)L(null,h[x]=C?At(h[x]):rt(h[x]),b,B,y,A,N,O,C),x++}}else if(x>z)for(;x<=F;)we(d[x],y,A,!0),x++;else{const Y=x,B=x,ee=new Map;for(x=B;x<=z;x++){const Ae=h[x]=C?At(h[x]):rt(h[x]);Ae.key!=null&&ee.set(Ae.key,x)}let Z,le=0;const Pe=z-B+1;let He=!1,qt=0;const Rt=new Array(Pe);for(x=0;x<Pe;x++)Rt[x]=0;for(x=Y;x<=F;x++){const Ae=d[x];if(le>=Pe){we(Ae,y,A,!0);continue}let Fe;if(Ae.key!=null)Fe=ee.get(Ae.key);else for(Z=B;Z<=z;Z++)if(Rt[Z-B]===0&&bn(Ae,h[Z])){Fe=Z;break}Fe===void 0?we(Ae,y,A,!0):(Rt[Fe-B]=x+1,Fe>=qt?qt=Fe:He=!0,L(Ae,h[Fe],b,null,y,A,N,O,C),le++)}const $n=He?dc(Rt):Qt;for(Z=$n.length-1,x=Pe-1;x>=0;x--){const Ae=B+x,Fe=h[Ae],Wn=Ae+1<j?h[Ae+1].el:_;Rt[x]===0?L(null,Fe,b,Wn,y,A,N,O,C):He&&(Z<0||x!==$n[Z]?lt(Fe,b,Wn,2):Z--)}}},lt=(d,h,b,_,y=null)=>{const{el:A,type:N,transition:O,children:C,shapeFlag:x}=d;if(x&6){lt(d.component.subTree,h,b,_);return}if(x&128){d.suspense.move(h,b,_);return}if(x&64){N.move(d,h,b,ne);return}if(N===Ie){r(A,h,b);for(let F=0;F<C.length;F++)lt(C[F],h,b,_);r(d.anchor,h,b);return}if(N===ai){E(d,h,b);return}if(_!==2&&x&1&&O)if(_===0)O.beforeEnter(A),r(A,h,b),Ne(()=>O.enter(A),y);else{const{leave:F,delayLeave:z,afterLeave:Y}=O,B=()=>r(A,h,b),ee=()=>{F(A,()=>{B(),Y&&Y()})};z?z(A,B,ee):ee()}else r(A,h,b)},we=(d,h,b,_=!1,y=!1)=>{const{type:A,props:N,ref:O,children:C,dynamicChildren:x,shapeFlag:j,patchFlag:F,dirs:z}=d;if(O!=null&&_i(O,null,b,d,!0),j&256){h.ctx.deactivate(d);return}const Y=j&1&&z,B=!gr(d);let ee;if(B&&(ee=N&&N.onVnodeBeforeUnmount)&&nt(ee,h,d),j&6)Br(d.component,b,_);else{if(j&128){d.suspense.unmount(b,_);return}Y&&Ft(d,null,h,"beforeUnmount"),j&64?d.type.remove(d,h,b,y,ne,_):x&&(A!==Ie||F>0&&F&64)?ze(x,h,b,!1,!0):(A===Ie&&F&384||!y&&j&16)&&ze(C,h,b),_&&Yn(d)}(B&&(ee=N&&N.onVnodeUnmounted)||Y)&&Ne(()=>{ee&&nt(ee,h,d),Y&&Ft(d,null,h,"unmounted")},b)},Yn=d=>{const{type:h,el:b,anchor:_,transition:y}=d;if(h===Ie){mn(b,_);return}if(h===ai){P(d);return}const A=()=>{i(b),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(d.shapeFlag&1&&y&&!y.persisted){const{leave:N,delayLeave:O}=y,C=()=>N(b,A);O?O(d.el,A,C):C()}else A()},mn=(d,h)=>{let b;for(;d!==h;)b=w(d),i(d),d=b;i(h)},Br=(d,h,b)=>{const{bum:_,scope:y,update:A,subTree:N,um:O}=d;_&&ni(_),y.stop(),A&&(A.active=!1,we(N,d,h,b)),O&&Ne(O,h),Ne(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},ze=(d,h,b,_=!1,y=!1,A=0)=>{for(let N=A;N<d.length;N++)we(d[N],h,b,_,y)},de=d=>d.shapeFlag&6?de(d.component.subTree):d.shapeFlag&128?d.suspense.next():w(d.anchor||d.el),Qe=(d,h,b)=>{d==null?h._vnode&&we(h._vnode,null,null,!0):L(h._vnode||null,d,h,null,null,null,b),za(),io(),h._vnode=d},ne={p:L,um:we,m:lt,r:Yn,mt:yt,mc:fe,pc:te,pbc:q,n:de,o:e};let ve,xt;return t&&([ve,xt]=t(ne)),{render:Qe,hydrate:ve,createApp:fc(Qe,ve)}}function Dt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function To(e,t,n=!1){const r=e.children,i=t.children;if($(r)&&$(i))for(let a=0;a<r.length;a++){const s=r[a];let o=i[a];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[a]=At(i[a]),o.el=s.el),n||To(s,o)),o.type===jr&&(o.el=s.el)}}function dc(e){const t=e.slice(),n=[0];let r,i,a,s,o;const c=e.length;for(r=0;r<c;r++){const m=e[r];if(m!==0){if(i=n[n.length-1],e[i]<m){t[r]=i,n.push(r);continue}for(a=0,s=n.length-1;a<s;)o=a+s>>1,e[n[o]]<m?a=o+1:s=o;m<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,s=n[a-1];a-- >0;)n[a]=s,s=t[s];return n}const mc=e=>e.__isTeleport,Ie=Symbol(void 0),jr=Symbol(void 0),Pn=Symbol(void 0),ai=Symbol(void 0),wn=[];let qe=null;function Ue(e=!1){wn.push(qe=e?null:[])}function hc(){wn.pop(),qe=wn[wn.length-1]||null}let Sn=1;function Va(e){Sn+=e}function Eo(e){return e.dynamicChildren=Sn>0?qe||Qt:null,hc(),Sn>0&&qe&&qe.push(e),e}function $e(e,t,n,r,i,a){return Eo(_e(e,t,n,r,i,a,!0))}function pc(e,t,n,r,i){return Eo(Me(e,t,n,r,i,!0))}function wi(e){return e?e.__v_isVNode===!0:!1}function bn(e,t){return e.type===t.type&&e.key===t.key}const zr="__vInternal",Ao=({key:e})=>e??null,br=({ref:e,ref_key:t,ref_for:n})=>e!=null?he(e)||Ee(e)||W(e)?{i:Ke,r:e,k:t,f:!!n}:e:null;function _e(e,t=null,n=null,r=0,i=null,a=e===Ie?0:1,s=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ao(t),ref:t&&br(t),scopeId:Dr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ke};return o?(ra(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=he(n)?8:16),Sn>0&&!s&&qe&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&qe.push(c),c}const Me=vc;function vc(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Vf)&&(e=Pn),wi(e)){const o=sn(e,t,!0);return n&&ra(o,n),Sn>0&&!a&&qe&&(o.shapeFlag&6?qe[qe.indexOf(e)]=o:qe.push(o)),o.patchFlag|=-2,o}if(Ic(e)&&(e=e.__vccOpts),t){t=gc(t);let{class:o,style:c}=t;o&&!he(o)&&(t.class=Ot(o)),oe(c)&&(Gs(c)&&!$(c)&&(c=Ce({},c)),t.style=ji(c))}const s=he(e)?1:Rf(e)?128:mc(e)?64:oe(e)?4:W(e)?2:0;return _e(e,t,n,r,i,s,a,!0)}function gc(e){return e?Gs(e)||zr in e?Ce({},e):e:null}function sn(e,t,n=!1){const{props:r,ref:i,patchFlag:a,children:s}=e,o=t?yc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Ao(o),ref:t&&t.ref?n&&i?$(i)?i.concat(br(t)):[i,br(t)]:br(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ie?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sn(e.ssContent),ssFallback:e.ssFallback&&sn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function bc(e=" ",t=0){return Me(jr,null,e,t)}function rt(e){return e==null||typeof e=="boolean"?Me(Pn):$(e)?Me(Ie,null,e.slice()):typeof e=="object"?At(e):Me(jr,null,String(e))}function At(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:sn(e)}function ra(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),ra(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(zr in t)?t._ctx=Ke:i===3&&Ke&&(Ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:Ke},n=32):(t=String(t),r&64?(n=16,t=[bc(t)]):n=8);e.children=t,e.shapeFlag|=n}function yc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Ot([t.class,r.class]));else if(i==="style")t.style=ji([t.style,r.style]);else if(Pr(i)){const a=t[i],s=r[i];s&&a!==s&&!($(a)&&a.includes(s))&&(t[i]=a?[].concat(a,s):s)}else i!==""&&(t[i]=r[i])}return t}function nt(e,t,n,r=null){Je(e,t,7,[n,r])}const xc=wo();let _c=0;function wc(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||xc,a={uid:_c++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Dl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bo(r,i),emitsOptions:so(r,i),emit:null,emitted:null,propsDefaults:se,inheritAttrs:r.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Of.bind(null,a),e.ce&&e.ce(a),a}let me=null;const on=e=>{me=e,e.scope.on()},Wt=()=>{me&&me.scope.off(),me=null};function Oo(e){return e.vnode.shapeFlag&4}let Nn=!1;function Tc(e,t=!1){Nn=t;const{props:n,children:r}=e.vnode,i=Oo(e);rc(e,n,i,t),sc(e,r);const a=i?Ec(e,t):void 0;return Nn=!1,a}function Ec(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Js(new Proxy(e.ctx,Jf));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Oc(e):null;on(e),cn();const a=It(r,e,0,[e.props,i]);if(un(),Wt(),Fs(a)){if(a.then(Wt,Wt),t)return a.then(s=>{Ga(e,s,t)}).catch(s=>{Lr(s,e,0)});e.asyncDep=a}else Ga(e,a,t)}else ko(e,t)}function Ga(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=eo(t)),ko(e,n)}let Ja;function ko(e,t,n){const r=e.type;if(!e.render){if(!t&&Ja&&!r.render){const i=r.template||ta(e).template;if(i){const{isCustomElement:a,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:c}=r,m=Ce(Ce({isCustomElement:a,delimiters:o},s),c);r.render=Ja(i,m)}}e.render=r.render||Ge}on(e),cn(),Zf(e),un(),Wt()}function Ac(e){return new Proxy(e.attrs,{get(t,n){return Re(e,"get","$attrs"),t[n]}})}function Oc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Ac(e))},slots:e.slots,emit:e.emit,expose:t}}function ia(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(eo(Js(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in _n)return _n[n](e)},has(t,n){return n in t||n in _n}}))}function kc(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function Ic(e){return W(e)&&"__vccOpts"in e}const je=(e,t)=>yf(e,t,Nn);function Io(e,t,n){const r=arguments.length;return r===2?oe(t)&&!$(t)?wi(t)?Me(e,null,[t]):Me(e,t):Me(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&wi(n)&&(n=[n]),Me(e,t,n))}const Cc=Symbol(""),Pc=()=>pr(Cc),Sc="3.2.47",Nc="http://www.w3.org/2000/svg",zt=typeof document<"u"?document:null,Za=zt&&zt.createElement("template"),Mc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?zt.createElementNS(Nc,e):zt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>zt.createTextNode(e),createComment:e=>zt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>zt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const s=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Za.innerHTML=r?`<svg>${e}</svg>`:e;const o=Za.content;if(r){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Rc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Lc(e,t,n){const r=e.style,i=he(n);if(n&&!i){if(t&&!he(t))for(const a in t)n[a]==null&&Ti(r,a,"");for(const a in n)Ti(r,a,n[a])}else{const a=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=a)}}const Qa=/\s*!important$/;function Ti(e,t,n){if($(n))n.forEach(r=>Ti(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Fc(e,t);Qa.test(n)?e.setProperty(fn(r),n.replace(Qa,""),"important"):e[r]=n}}const es=["Webkit","Moz","ms"],si={};function Fc(e,t){const n=si[t];if(n)return n;let r=st(t);if(r!=="filter"&&r in e)return si[t]=r;r=Mr(r);for(let i=0;i<es.length;i++){const a=es[i]+r;if(a in e)return si[t]=a}return t}const ts="http://www.w3.org/1999/xlink";function Dc(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ts,t.slice(6,t.length)):e.setAttributeNS(ts,t,n);else{const a=Il(t);n==null||a&&!Ms(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function Uc(e,t,n,r,i,a,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,i,a),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let o=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ms(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(t)}function jc(e,t,n,r){e.addEventListener(t,n,r)}function zc(e,t,n,r){e.removeEventListener(t,n,r)}function Hc(e,t,n,r,i=null){const a=e._vei||(e._vei={}),s=a[t];if(r&&s)s.value=r;else{const[o,c]=Yc(t);if(r){const m=a[t]=Bc(r,i);jc(e,o,m,c)}else s&&(zc(e,o,s,c),a[t]=void 0)}}const ns=/(?:Once|Passive|Capture)$/;function Yc(e){let t;if(ns.test(e)){t={};let r;for(;r=e.match(ns);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):fn(e.slice(2)),t]}let oi=0;const $c=Promise.resolve(),Wc=()=>oi||($c.then(()=>oi=0),oi=Date.now());function Bc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Je(Xc(r,n.value),t,5,[r])};return n.value=e,n.attached=Wc(),n}function Xc(e,t){if($(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const rs=/^on[a-z]/,Kc=(e,t,n,r,i=!1,a,s,o,c)=>{t==="class"?Rc(e,r,i):t==="style"?Lc(e,n,r):Pr(t)?zi(t)||Hc(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qc(e,t,r,i))?Uc(e,t,r,a,s,o,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Dc(e,t,r,i))};function qc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&rs.test(t)&&W(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||rs.test(t)&&he(n)?!1:t in e}const Vc=Ce({patchProp:Kc},Mc);let is;function Gc(){return is||(is=cc(Vc))}const Jc=(...e)=>{const t=Gc().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Zc(r);if(!i)return;const a=t._component;!W(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function Zc(e){return he(e)?document.querySelector(e):e}var Ei={},Qc={get exports(){return Ei},set exports(e){Ei=e}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(e){(function(t,n,r,i){var a=["","webkit","Moz","MS","ms","o"],s=n.createElement("div"),o="function",c=Math.round,m=Math.abs,p=Date.now;function g(l,f,u){return setTimeout(E(l,u),f)}function w(l,f,u){return Array.isArray(l)?(k(l,u[f],u),!0):!1}function k(l,f,u){var v;if(l)if(l.forEach)l.forEach(f,u);else if(l.length!==i)for(v=0;v<l.length;)f.call(u,l[v],v,l),v++;else for(v in l)l.hasOwnProperty(v)&&f.call(u,l[v],v,l)}function H(l,f,u){var v="DEPRECATED METHOD: "+f+`
`+u+` AT 
`;return function(){var T=new Error("get-stack-trace"),M=T&&T.stack?T.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",X=t.console&&(t.console.warn||t.console.log);return X&&X.call(t.console,v,M),l.apply(this,arguments)}}var L;typeof Object.assign!="function"?L=function(f){if(f===i||f===null)throw new TypeError("Cannot convert undefined or null to object");for(var u=Object(f),v=1;v<arguments.length;v++){var T=arguments[v];if(T!==i&&T!==null)for(var M in T)T.hasOwnProperty(M)&&(u[M]=T[M])}return u}:L=Object.assign;var K=H(function(f,u,v){for(var T=Object.keys(u),M=0;M<T.length;)(!v||v&&f[T[M]]===i)&&(f[T[M]]=u[T[M]]),M++;return f},"extend","Use `assign`."),I=H(function(f,u){return K(f,u,!0)},"merge","Use `assign`.");function S(l,f,u){var v=f.prototype,T;T=l.prototype=Object.create(v),T.constructor=l,T._super=v,u&&L(T,u)}function E(l,f){return function(){return l.apply(f,arguments)}}function P(l,f){return typeof l==o?l.apply(f&&f[0]||i,f):l}function U(l,f){return l===i?f:l}function G(l,f,u){k(q(f),function(v){l.addEventListener(v,u,!1)})}function J(l,f,u){k(q(f),function(v){l.removeEventListener(v,u,!1)})}function fe(l,f){for(;l;){if(l==f)return!0;l=l.parentNode}return!1}function ce(l,f){return l.indexOf(f)>-1}function q(l){return l.trim().split(/\s+/g)}function be(l,f,u){if(l.indexOf&&!u)return l.indexOf(f);for(var v=0;v<l.length;){if(u&&l[v][u]==f||!u&&l[v]===f)return v;v++}return-1}function ot(l){return Array.prototype.slice.call(l,0)}function Mt(l,f,u){for(var v=[],T=[],M=0;M<l.length;){var X=f?l[M][f]:l[M];be(T,X)<0&&v.push(l[M]),T[M]=X,M++}return u&&(f?v=v.sort(function(xe,Oe){return xe[f]>Oe[f]}):v=v.sort()),v}function yt(l,f){for(var u,v,T=f[0].toUpperCase()+f.slice(1),M=0;M<a.length;){if(u=a[M],v=u?u+T:f,v in l)return v;M++}return i}var Hn=1;function ye(){return Hn++}function re(l){var f=l.ownerDocument||l;return f.defaultView||f.parentWindow||t}var te=/mobile|tablet|ip(ad|hone|od)|android/i,Ze="ontouchstart"in t,Kt=yt(t,"PointerEvent")!==i,lt=Ze&&te.test(navigator.userAgent),we="touch",Yn="pen",mn="mouse",Br="kinect",ze=25,de=1,Qe=2,ne=4,ve=8,xt=1,d=2,h=4,b=8,_=16,y=d|h,A=b|_,N=y|A,O=["x","y"],C=["clientX","clientY"];function x(l,f){var u=this;this.manager=l,this.callback=f,this.element=l.element,this.target=l.options.inputTarget,this.domHandler=function(v){P(l.options.enable,[l])&&u.handler(v)},this.init()}x.prototype={handler:function(){},init:function(){this.evEl&&G(this.element,this.evEl,this.domHandler),this.evTarget&&G(this.target,this.evTarget,this.domHandler),this.evWin&&G(re(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&J(this.element,this.evEl,this.domHandler),this.evTarget&&J(this.target,this.evTarget,this.domHandler),this.evWin&&J(re(this.element),this.evWin,this.domHandler)}};function j(l){var f,u=l.options.inputClass;return u?f=u:Kt?f=Xr:lt?f=Xn:Ze?f=Kr:f=Bn,new f(l,F)}function F(l,f,u){var v=u.pointers.length,T=u.changedPointers.length,M=f&de&&v-T===0,X=f&(ne|ve)&&v-T===0;u.isFirst=!!M,u.isFinal=!!X,M&&(l.session={}),u.eventType=f,z(l,u),l.emit("hammer.input",u),l.recognize(u),l.session.prevInput=u}function z(l,f){var u=l.session,v=f.pointers,T=v.length;u.firstInput||(u.firstInput=ee(f)),T>1&&!u.firstMultiple?u.firstMultiple=ee(f):T===1&&(u.firstMultiple=!1);var M=u.firstInput,X=u.firstMultiple,ge=X?X.center:M.center,xe=f.center=Z(v);f.timeStamp=p(),f.deltaTime=f.timeStamp-M.timeStamp,f.angle=qt(ge,xe),f.distance=He(ge,xe),Y(u,f),f.offsetDirection=Pe(f.deltaX,f.deltaY);var Oe=le(f.deltaTime,f.deltaX,f.deltaY);f.overallVelocityX=Oe.x,f.overallVelocityY=Oe.y,f.overallVelocity=m(Oe.x)>m(Oe.y)?Oe.x:Oe.y,f.scale=X?$n(X.pointers,v):1,f.rotation=X?Rt(X.pointers,v):0,f.maxPointers=u.prevInput?f.pointers.length>u.prevInput.maxPointers?f.pointers.length:u.prevInput.maxPointers:f.pointers.length,B(u,f);var tt=l.element;fe(f.srcEvent.target,tt)&&(tt=f.srcEvent.target),f.target=tt}function Y(l,f){var u=f.center,v=l.offsetDelta||{},T=l.prevDelta||{},M=l.prevInput||{};(f.eventType===de||M.eventType===ne)&&(T=l.prevDelta={x:M.deltaX||0,y:M.deltaY||0},v=l.offsetDelta={x:u.x,y:u.y}),f.deltaX=T.x+(u.x-v.x),f.deltaY=T.y+(u.y-v.y)}function B(l,f){var u=l.lastInterval||f,v=f.timeStamp-u.timeStamp,T,M,X,ge;if(f.eventType!=ve&&(v>ze||u.velocity===i)){var xe=f.deltaX-u.deltaX,Oe=f.deltaY-u.deltaY,tt=le(v,xe,Oe);M=tt.x,X=tt.y,T=m(tt.x)>m(tt.y)?tt.x:tt.y,ge=Pe(xe,Oe),l.lastInterval=f}else T=u.velocity,M=u.velocityX,X=u.velocityY,ge=u.direction;f.velocity=T,f.velocityX=M,f.velocityY=X,f.direction=ge}function ee(l){for(var f=[],u=0;u<l.pointers.length;)f[u]={clientX:c(l.pointers[u].clientX),clientY:c(l.pointers[u].clientY)},u++;return{timeStamp:p(),pointers:f,center:Z(f),deltaX:l.deltaX,deltaY:l.deltaY}}function Z(l){var f=l.length;if(f===1)return{x:c(l[0].clientX),y:c(l[0].clientY)};for(var u=0,v=0,T=0;T<f;)u+=l[T].clientX,v+=l[T].clientY,T++;return{x:c(u/f),y:c(v/f)}}function le(l,f,u){return{x:f/l||0,y:u/l||0}}function Pe(l,f){return l===f?xt:m(l)>=m(f)?l<0?d:h:f<0?b:_}function He(l,f,u){u||(u=O);var v=f[u[0]]-l[u[0]],T=f[u[1]]-l[u[1]];return Math.sqrt(v*v+T*T)}function qt(l,f,u){u||(u=O);var v=f[u[0]]-l[u[0]],T=f[u[1]]-l[u[1]];return Math.atan2(T,v)*180/Math.PI}function Rt(l,f){return qt(f[1],f[0],C)+qt(l[1],l[0],C)}function $n(l,f){return He(f[0],f[1],C)/He(l[0],l[1],C)}var Ae={mousedown:de,mousemove:Qe,mouseup:ne},Fe="mousedown",Wn="mousemove mouseup";function Bn(){this.evEl=Fe,this.evWin=Wn,this.pressed=!1,x.apply(this,arguments)}S(Bn,x,{handler:function(f){var u=Ae[f.type];u&de&&f.button===0&&(this.pressed=!0),u&Qe&&f.which!==1&&(u=ne),this.pressed&&(u&ne&&(this.pressed=!1),this.callback(this.manager,u,{pointers:[f],changedPointers:[f],pointerType:mn,srcEvent:f}))}});var sl={pointerdown:de,pointermove:Qe,pointerup:ne,pointercancel:ve,pointerout:ve},ol={2:we,3:Yn,4:mn,5:Br},ya="pointerdown",xa="pointermove pointerup pointercancel";t.MSPointerEvent&&!t.PointerEvent&&(ya="MSPointerDown",xa="MSPointerMove MSPointerUp MSPointerCancel");function Xr(){this.evEl=ya,this.evWin=xa,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}S(Xr,x,{handler:function(f){var u=this.store,v=!1,T=f.type.toLowerCase().replace("ms",""),M=sl[T],X=ol[f.pointerType]||f.pointerType,ge=X==we,xe=be(u,f.pointerId,"pointerId");M&de&&(f.button===0||ge)?xe<0&&(u.push(f),xe=u.length-1):M&(ne|ve)&&(v=!0),!(xe<0)&&(u[xe]=f,this.callback(this.manager,M,{pointers:u,changedPointers:[f],pointerType:X,srcEvent:f}),v&&u.splice(xe,1))}});var ll={touchstart:de,touchmove:Qe,touchend:ne,touchcancel:ve},fl="touchstart",cl="touchstart touchmove touchend touchcancel";function _a(){this.evTarget=fl,this.evWin=cl,this.started=!1,x.apply(this,arguments)}S(_a,x,{handler:function(f){var u=ll[f.type];if(u===de&&(this.started=!0),!!this.started){var v=ul.call(this,f,u);u&(ne|ve)&&v[0].length-v[1].length===0&&(this.started=!1),this.callback(this.manager,u,{pointers:v[0],changedPointers:v[1],pointerType:we,srcEvent:f})}}});function ul(l,f){var u=ot(l.touches),v=ot(l.changedTouches);return f&(ne|ve)&&(u=Mt(u.concat(v),"identifier",!0)),[u,v]}var dl={touchstart:de,touchmove:Qe,touchend:ne,touchcancel:ve},ml="touchstart touchmove touchend touchcancel";function Xn(){this.evTarget=ml,this.targetIds={},x.apply(this,arguments)}S(Xn,x,{handler:function(f){var u=dl[f.type],v=hl.call(this,f,u);v&&this.callback(this.manager,u,{pointers:v[0],changedPointers:v[1],pointerType:we,srcEvent:f})}});function hl(l,f){var u=ot(l.touches),v=this.targetIds;if(f&(de|Qe)&&u.length===1)return v[u[0].identifier]=!0,[u,u];var T,M,X=ot(l.changedTouches),ge=[],xe=this.target;if(M=u.filter(function(Oe){return fe(Oe.target,xe)}),f===de)for(T=0;T<M.length;)v[M[T].identifier]=!0,T++;for(T=0;T<X.length;)v[X[T].identifier]&&ge.push(X[T]),f&(ne|ve)&&delete v[X[T].identifier],T++;if(ge.length)return[Mt(M.concat(ge),"identifier",!0),ge]}var pl=2500,wa=25;function Kr(){x.apply(this,arguments);var l=E(this.handler,this);this.touch=new Xn(this.manager,l),this.mouse=new Bn(this.manager,l),this.primaryTouch=null,this.lastTouches=[]}S(Kr,x,{handler:function(f,u,v){var T=v.pointerType==we,M=v.pointerType==mn;if(!(M&&v.sourceCapabilities&&v.sourceCapabilities.firesTouchEvents)){if(T)vl.call(this,u,v);else if(M&&gl.call(this,v))return;this.callback(f,u,v)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function vl(l,f){l&de?(this.primaryTouch=f.changedPointers[0].identifier,Ta.call(this,f)):l&(ne|ve)&&Ta.call(this,f)}function Ta(l){var f=l.changedPointers[0];if(f.identifier===this.primaryTouch){var u={x:f.clientX,y:f.clientY};this.lastTouches.push(u);var v=this.lastTouches,T=function(){var M=v.indexOf(u);M>-1&&v.splice(M,1)};setTimeout(T,pl)}}function gl(l){for(var f=l.srcEvent.clientX,u=l.srcEvent.clientY,v=0;v<this.lastTouches.length;v++){var T=this.lastTouches[v],M=Math.abs(f-T.x),X=Math.abs(u-T.y);if(M<=wa&&X<=wa)return!0}return!1}var Ea=yt(s.style,"touchAction"),Aa=Ea!==i,Oa="compute",ka="auto",qr="manipulation",Lt="none",hn="pan-x",pn="pan-y",Kn=yl();function Vr(l,f){this.manager=l,this.set(f)}Vr.prototype={set:function(l){l==Oa&&(l=this.compute()),Aa&&this.manager.element.style&&Kn[l]&&(this.manager.element.style[Ea]=l),this.actions=l.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var l=[];return k(this.manager.recognizers,function(f){P(f.options.enable,[f])&&(l=l.concat(f.getTouchAction()))}),bl(l.join(" "))},preventDefaults:function(l){var f=l.srcEvent,u=l.offsetDirection;if(this.manager.session.prevented){f.preventDefault();return}var v=this.actions,T=ce(v,Lt)&&!Kn[Lt],M=ce(v,pn)&&!Kn[pn],X=ce(v,hn)&&!Kn[hn];if(T){var ge=l.pointers.length===1,xe=l.distance<2,Oe=l.deltaTime<250;if(ge&&xe&&Oe)return}if(!(X&&M)&&(T||M&&u&y||X&&u&A))return this.preventSrc(f)},preventSrc:function(l){this.manager.session.prevented=!0,l.preventDefault()}};function bl(l){if(ce(l,Lt))return Lt;var f=ce(l,hn),u=ce(l,pn);return f&&u?Lt:f||u?f?hn:pn:ce(l,qr)?qr:ka}function yl(){if(!Aa)return!1;var l={},f=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(u){l[u]=f?t.CSS.supports("touch-action",u):!0}),l}var qn=1,De=2,Vt=4,_t=8,ft=_t,vn=16,et=32;function ct(l){this.options=L({},this.defaults,l||{}),this.id=ye(),this.manager=null,this.options.enable=U(this.options.enable,!0),this.state=qn,this.simultaneous={},this.requireFail=[]}ct.prototype={defaults:{},set:function(l){return L(this.options,l),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(l){if(w(l,"recognizeWith",this))return this;var f=this.simultaneous;return l=Vn(l,this),f[l.id]||(f[l.id]=l,l.recognizeWith(this)),this},dropRecognizeWith:function(l){return w(l,"dropRecognizeWith",this)?this:(l=Vn(l,this),delete this.simultaneous[l.id],this)},requireFailure:function(l){if(w(l,"requireFailure",this))return this;var f=this.requireFail;return l=Vn(l,this),be(f,l)===-1&&(f.push(l),l.requireFailure(this)),this},dropRequireFailure:function(l){if(w(l,"dropRequireFailure",this))return this;l=Vn(l,this);var f=be(this.requireFail,l);return f>-1&&this.requireFail.splice(f,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(l){return!!this.simultaneous[l.id]},emit:function(l){var f=this,u=this.state;function v(T){f.manager.emit(T,l)}u<_t&&v(f.options.event+Ia(u)),v(f.options.event),l.additionalEvent&&v(l.additionalEvent),u>=_t&&v(f.options.event+Ia(u))},tryEmit:function(l){if(this.canEmit())return this.emit(l);this.state=et},canEmit:function(){for(var l=0;l<this.requireFail.length;){if(!(this.requireFail[l].state&(et|qn)))return!1;l++}return!0},recognize:function(l){var f=L({},l);if(!P(this.options.enable,[this,f])){this.reset(),this.state=et;return}this.state&(ft|vn|et)&&(this.state=qn),this.state=this.process(f),this.state&(De|Vt|_t|vn)&&this.tryEmit(f)},process:function(l){},getTouchAction:function(){},reset:function(){}};function Ia(l){return l&vn?"cancel":l&_t?"end":l&Vt?"move":l&De?"start":""}function Ca(l){return l==_?"down":l==b?"up":l==d?"left":l==h?"right":""}function Vn(l,f){var u=f.manager;return u?u.get(l):l}function Ye(){ct.apply(this,arguments)}S(Ye,ct,{defaults:{pointers:1},attrTest:function(l){var f=this.options.pointers;return f===0||l.pointers.length===f},process:function(l){var f=this.state,u=l.eventType,v=f&(De|Vt),T=this.attrTest(l);return v&&(u&ve||!T)?f|vn:v||T?u&ne?f|_t:f&De?f|Vt:De:et}});function Gn(){Ye.apply(this,arguments),this.pX=null,this.pY=null}S(Gn,Ye,{defaults:{event:"pan",threshold:10,pointers:1,direction:N},getTouchAction:function(){var l=this.options.direction,f=[];return l&y&&f.push(pn),l&A&&f.push(hn),f},directionTest:function(l){var f=this.options,u=!0,v=l.distance,T=l.direction,M=l.deltaX,X=l.deltaY;return T&f.direction||(f.direction&y?(T=M===0?xt:M<0?d:h,u=M!=this.pX,v=Math.abs(l.deltaX)):(T=X===0?xt:X<0?b:_,u=X!=this.pY,v=Math.abs(l.deltaY))),l.direction=T,u&&v>f.threshold&&T&f.direction},attrTest:function(l){return Ye.prototype.attrTest.call(this,l)&&(this.state&De||!(this.state&De)&&this.directionTest(l))},emit:function(l){this.pX=l.deltaX,this.pY=l.deltaY;var f=Ca(l.direction);f&&(l.additionalEvent=this.options.event+f),this._super.emit.call(this,l)}});function Gr(){Ye.apply(this,arguments)}S(Gr,Ye,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Lt]},attrTest:function(l){return this._super.attrTest.call(this,l)&&(Math.abs(l.scale-1)>this.options.threshold||this.state&De)},emit:function(l){if(l.scale!==1){var f=l.scale<1?"in":"out";l.additionalEvent=this.options.event+f}this._super.emit.call(this,l)}});function Jr(){ct.apply(this,arguments),this._timer=null,this._input=null}S(Jr,ct,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[ka]},process:function(l){var f=this.options,u=l.pointers.length===f.pointers,v=l.distance<f.threshold,T=l.deltaTime>f.time;if(this._input=l,!v||!u||l.eventType&(ne|ve)&&!T)this.reset();else if(l.eventType&de)this.reset(),this._timer=g(function(){this.state=ft,this.tryEmit()},f.time,this);else if(l.eventType&ne)return ft;return et},reset:function(){clearTimeout(this._timer)},emit:function(l){this.state===ft&&(l&&l.eventType&ne?this.manager.emit(this.options.event+"up",l):(this._input.timeStamp=p(),this.manager.emit(this.options.event,this._input)))}});function Zr(){Ye.apply(this,arguments)}S(Zr,Ye,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Lt]},attrTest:function(l){return this._super.attrTest.call(this,l)&&(Math.abs(l.rotation)>this.options.threshold||this.state&De)}});function Qr(){Ye.apply(this,arguments)}S(Qr,Ye,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:y|A,pointers:1},getTouchAction:function(){return Gn.prototype.getTouchAction.call(this)},attrTest:function(l){var f=this.options.direction,u;return f&(y|A)?u=l.overallVelocity:f&y?u=l.overallVelocityX:f&A&&(u=l.overallVelocityY),this._super.attrTest.call(this,l)&&f&l.offsetDirection&&l.distance>this.options.threshold&&l.maxPointers==this.options.pointers&&m(u)>this.options.velocity&&l.eventType&ne},emit:function(l){var f=Ca(l.offsetDirection);f&&this.manager.emit(this.options.event+f,l),this.manager.emit(this.options.event,l)}});function Jn(){ct.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}S(Jn,ct,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[qr]},process:function(l){var f=this.options,u=l.pointers.length===f.pointers,v=l.distance<f.threshold,T=l.deltaTime<f.time;if(this.reset(),l.eventType&de&&this.count===0)return this.failTimeout();if(v&&T&&u){if(l.eventType!=ne)return this.failTimeout();var M=this.pTime?l.timeStamp-this.pTime<f.interval:!0,X=!this.pCenter||He(this.pCenter,l.center)<f.posThreshold;this.pTime=l.timeStamp,this.pCenter=l.center,!X||!M?this.count=1:this.count+=1,this._input=l;var ge=this.count%f.taps;if(ge===0)return this.hasRequireFailures()?(this._timer=g(function(){this.state=ft,this.tryEmit()},f.interval,this),De):ft}return et},failTimeout:function(){return this._timer=g(function(){this.state=et},this.options.interval,this),et},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ft&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function ut(l,f){return f=f||{},f.recognizers=U(f.recognizers,ut.defaults.preset),new ei(l,f)}ut.VERSION="2.0.7",ut.defaults={domEvents:!1,touchAction:Oa,enable:!0,inputTarget:null,inputClass:null,preset:[[Zr,{enable:!1}],[Gr,{enable:!1},["rotate"]],[Qr,{direction:y}],[Gn,{direction:y},["swipe"]],[Jn],[Jn,{event:"doubletap",taps:2},["tap"]],[Jr]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var xl=1,Pa=2;function ei(l,f){this.options=L({},ut.defaults,f||{}),this.options.inputTarget=this.options.inputTarget||l,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=l,this.input=j(this),this.touchAction=new Vr(this,this.options.touchAction),Sa(this,!0),k(this.options.recognizers,function(u){var v=this.add(new u[0](u[1]));u[2]&&v.recognizeWith(u[2]),u[3]&&v.requireFailure(u[3])},this)}ei.prototype={set:function(l){return L(this.options,l),l.touchAction&&this.touchAction.update(),l.inputTarget&&(this.input.destroy(),this.input.target=l.inputTarget,this.input.init()),this},stop:function(l){this.session.stopped=l?Pa:xl},recognize:function(l){var f=this.session;if(!f.stopped){this.touchAction.preventDefaults(l);var u,v=this.recognizers,T=f.curRecognizer;(!T||T&&T.state&ft)&&(T=f.curRecognizer=null);for(var M=0;M<v.length;)u=v[M],f.stopped!==Pa&&(!T||u==T||u.canRecognizeWith(T))?u.recognize(l):u.reset(),!T&&u.state&(De|Vt|_t)&&(T=f.curRecognizer=u),M++}},get:function(l){if(l instanceof ct)return l;for(var f=this.recognizers,u=0;u<f.length;u++)if(f[u].options.event==l)return f[u];return null},add:function(l){if(w(l,"add",this))return this;var f=this.get(l.options.event);return f&&this.remove(f),this.recognizers.push(l),l.manager=this,this.touchAction.update(),l},remove:function(l){if(w(l,"remove",this))return this;if(l=this.get(l),l){var f=this.recognizers,u=be(f,l);u!==-1&&(f.splice(u,1),this.touchAction.update())}return this},on:function(l,f){if(l!==i&&f!==i){var u=this.handlers;return k(q(l),function(v){u[v]=u[v]||[],u[v].push(f)}),this}},off:function(l,f){if(l!==i){var u=this.handlers;return k(q(l),function(v){f?u[v]&&u[v].splice(be(u[v],f),1):delete u[v]}),this}},emit:function(l,f){this.options.domEvents&&_l(l,f);var u=this.handlers[l]&&this.handlers[l].slice();if(!(!u||!u.length)){f.type=l,f.preventDefault=function(){f.srcEvent.preventDefault()};for(var v=0;v<u.length;)u[v](f),v++}},destroy:function(){this.element&&Sa(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function Sa(l,f){var u=l.element;if(u.style){var v;k(l.options.cssProps,function(T,M){v=yt(u.style,M),f?(l.oldCssProps[v]=u.style[v],u.style[v]=T):u.style[v]=l.oldCssProps[v]||""}),f||(l.oldCssProps={})}}function _l(l,f){var u=n.createEvent("Event");u.initEvent(l,!0,!0),u.gesture=f,f.target.dispatchEvent(u)}L(ut,{INPUT_START:de,INPUT_MOVE:Qe,INPUT_END:ne,INPUT_CANCEL:ve,STATE_POSSIBLE:qn,STATE_BEGAN:De,STATE_CHANGED:Vt,STATE_ENDED:_t,STATE_RECOGNIZED:ft,STATE_CANCELLED:vn,STATE_FAILED:et,DIRECTION_NONE:xt,DIRECTION_LEFT:d,DIRECTION_RIGHT:h,DIRECTION_UP:b,DIRECTION_DOWN:_,DIRECTION_HORIZONTAL:y,DIRECTION_VERTICAL:A,DIRECTION_ALL:N,Manager:ei,Input:x,TouchAction:Vr,TouchInput:Xn,MouseInput:Bn,PointerEventInput:Xr,TouchMouseInput:Kr,SingleTouchInput:_a,Recognizer:ct,AttrRecognizer:Ye,Tap:Jn,Pan:Gn,Swipe:Qr,Pinch:Gr,Rotate:Zr,Press:Jr,on:G,off:J,each:k,merge:I,extend:K,assign:L,inherit:S,bindFn:E,prefixed:yt});var wl=typeof t<"u"?t:typeof self<"u"?self:{};wl.Hammer=ut,typeof i=="function"&&i.amd?i(function(){return ut}):e.exports?e.exports=ut:t[r]=ut})(window,document,"Hammer")})(Qc);const as=Ei,eu="/wordle/assets/click-96dc3fd0.mp3";const tu=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},nu={setup(){const e={topRow:["Q","W","E","R","T","Y","U","I","O","P"],middleRow:["A","S","D","F","G","H","J","K","L"],bottomRow:["Z","X","C","V","B","N","M"]},t=[{letters:[" "," "," "," "," "],color:["empty","empty","empty","empty","empty"],isValidInput:!0},{letters:[" "," "," "," "," "],color:["empty","empty","empty","empty","empty"],isValidInput:!0},{letters:[" "," "," "," "," "],color:["empty","empty","empty","empty","empty"],isValidInput:!0},{letters:[" "," "," "," "," "],color:["empty","empty","empty","empty","empty"],isValidInput:!0},{letters:[" "," "," "," "," "],color:["empty","empty","empty","empty","empty"],isValidInput:!0}],n=Tt(JSON.parse(JSON.stringify(t))),r=Tt([]),i=Tt(0),a=Tt(0),s=Tt({}),o=Tt(""),c=Tt(0),m=Tt(0),p=new Audio(eu);p.preload="auto";const g=E=>{E.currentTime=0,E.play()};function w(E){const P=n.value[i.value],U=P.letters.every(G=>G!==" ");if(E==="BACKSPACE"){a.value!==0&&(a.value--,P.letters[a.value]=" ",P.color[a.value]="empty");return}if(a.value<=4&&E!=="ENTER"){P.letters[a.value]=E,P.color[a.value]="pending",a.value++,g(p);return}if(E==="ENTER"&&!U){P.isValidInput=!1,setTimeout(()=>{P.isValidInput=!0},400),L("Not enough letters");return}if(E==="ENTER"&&U&&!r.value.includes(P.letters.join("").toLowerCase())){P.isValidInput=!1,setTimeout(()=>{P.isValidInput=!0},400),L("Not in word list");return}if(E==="ENTER"&&U){document.removeEventListener("keydown",H);const G=o.value.split(""),J={};G.map(q=>{J[q]?J[q]+=1:J[q]=1});for(let q=0;q<G.length;q++){const be=P.letters[q];be===G[q]&&(J[be]===1?delete J[be]:J[be]--)}let fe=0;const ce=setInterval(()=>{const q=P.letters[fe];q===G[fe]?(P.color[fe]="flip right-place",s.value[q]="key-right-place"):q in J?(J[q]===1?delete J[q]:J[q]--,P.color[fe]="flip wrong-place",s.value[q]!=="key-right-place"&&(s.value[q]="key-wrong-place")):(P.color[fe]="flip not-exist",s.value[q]!=="key-right-place"&&s.value[q]!=="key-wrong-place"&&(s.value[q]="key-not-exist")),fe++,fe===5&&(clearInterval(ce),i.value++,a.value=0,o.value===P.letters.join("")?setTimeout(()=>{I("win")},500):i.value===5?setTimeout(()=>{I("lose")},500):document.addEventListener("keydown",H))},300)}}function k(E){w(E)}function H(E){const P=E.key.toUpperCase();(e.topRow.includes(P)||e.middleRow.includes(P)||e.bottomRow.includes(P))&&w(P),(P==="BACKSPACE"||P==="ENTER")&&w(P)}function L(E,P=1500){const U=document.createElement("div");U.innerText=E,U.style.position="absolute",U.style.top="30%",U.style.left="50%",U.style.transform="translate(-50%, -50%)",U.style.backgroundColor="rgba(0, 0, 0, 0.8)",U.style.color="white",U.style.padding="10px",U.style.borderRadius="5px",U.style.zIndex="9999",U.style.userSelect="none",document.body.appendChild(U),U.addEventListener("click",()=>{U.style.animation="fade-out 0.4s",U.addEventListener("animationend",()=>{U.remove()})}),setTimeout(()=>{U.style.animation="fade-out 0.4s",U.addEventListener("animationend",()=>{U.remove()})},P)}function K(){fetch("./words.txt").then(E=>E.text()).then(E=>{let P=E.replace(/\r/g,"").split(`
`);const U=Math.floor(Math.random()*P.length);o.value=P[U].toUpperCase(),console.log(o.value)})}function I(E){let P;c.value++,E==="win"?(m.value++,P=`You win! You've won ${m.value} out of ${c.value} games! (${(m.value/c.value*100).toFixed(2)}%)`):P=`The word was: ${o.value}! You've won ${m.value} out of ${c.value} games! (${(m.value/c.value*100).toFixed(2)}%)`,L(P,3e3),setTimeout(()=>{n.value=JSON.parse(JSON.stringify(t)),s.value={},i.value=0,a.value=0,K(),document.addEventListener("keydown",H)},4e3)}return uo(async()=>{K(),fetch("./dictionary.txt").then(G=>G.text()).then(G=>{r.value=G.replace(/\r/g,"").split(`
`)}),document.addEventListener("keydown",H);const E=document.querySelector("body"),P=new as.Manager(E),U=new as.Tap({event:"doubletap",taps:2});P.add(U),P.on("doubletap",G=>{G.preventDefault()})}),mo(()=>{document.removeEventListener("keydown",H)}),{solution:o,dictionary:r,keyboard:e,keyboardColors:s,gameRows:n,handleKeyDown:H,handleClick:k,played:c,won:m,alert:E=>window.alert(E)}},components:{Fragment:Ie}},Co=e=>(kf("data-v-d921f826"),e=e(),If(),e),ru={class:"max-h-full min-h-full flex flex-col justify-center items-center"},iu={class:"-mt-16 lg:mt-0 mx-auto flex justify-between w-[80%] max-w-[80%] sm:max-w-lg md:max-w-xl px-4 sm:px-8 bg-gray-700 py-4 rounded-xl bg-opacity-60"},au=Co(()=>_e("h1",{class:"text-2xl sm:text-3xl md:text-4xl tracking-widest"},"WORDLE",-1)),su={class:"flex flex-col items-center"},ou={class:"flex flex-col my-10"},lu={class:"flex flex-row"},fu={class:"flex flex-col bg-gray-700 bg-opacity-50 rounded-2xl py-4 px-2 sm:px-6"},cu={class:"flex flex-row justify-center"},uu=["onClick"],du={class:"flex flex-row justify-center"},mu=["onClick"],hu={class:"flex flex-row justify-center"},pu=Co(()=>_e("svg",{xmlns:`http
            ://www.w3.org/2000/svg`,height:"20",viewBox:"0 0 24 24",width:"36"},[_e("path",{fill:"white",d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"})],-1)),vu=[pu],gu=["onClick"];function bu(e,t,n,r,i,a){const s=qf("font-awesome-icon");return Ue(),$e("div",ru,[_e("div",iu,[_e("button",{onClick:t[0]||(t[0]=o=>r.alert("the cake is a lie"))},[Me(s,{icon:"fa-solid fa-circle-question",class:"text-xl lg:text-2xl"})]),au,_e("button",{onClick:t[1]||(t[1]=o=>r.alert("42"))},[Me(s,{icon:"fa-solid fa-gear",class:"text-xl lg:text-2xl"})])]),_e("div",su,[_e("div",ou,[(Ue(!0),$e(Ie,null,gn(r.gameRows,(o,c)=>(Ue(),$e("div",{key:c,class:Ot([{jiggle:!o.isValidInput},"flex flex-row justify-between items-center select-none"])},[_e("div",lu,[(Ue(!0),$e(Ie,null,gn(o.letters,(m,p)=>(Ue(),$e("div",{key:p,class:Ot([o.color[p],"flex justify-center items-center text-xl sm:text-2xl m-1 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-sm font-bold"])},Zn(m),3))),128))])],2))),128))])]),_e("div",fu,[_e("div",cu,[(Ue(!0),$e(Ie,null,gn(r.keyboard.topRow,o=>(Ue(),$e("button",{key:o,class:Ot([r.keyboardColors[o],"keyboard-key m-[3px] p-1.5 py-2.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline"]),onClick:c=>r.handleClick(o)},Zn(o),11,uu))),128))]),_e("div",du,[(Ue(!0),$e(Ie,null,gn(r.keyboard.middleRow,o=>(Ue(),$e("button",{key:o,class:Ot([r.keyboardColors[o],"keyboard-key m-[3px] p-1.5 py-2.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline"]),onClick:c=>r.handleClick(o)},Zn(o),11,mu))),128))]),_e("div",hu,[_e("button",{class:"keyboard-key m-[3px] p-1.5 py-2.5 px-1.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline",onClick:t[2]||(t[2]=o=>r.handleClick("BACKSPACE"))},vu),(Ue(!0),$e(Ie,null,gn(r.keyboard.bottomRow,o=>(Ue(),$e("button",{key:o,class:Ot([r.keyboardColors[o],"keyboard-key m-[3px] p-1.5 py-2.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline"]),onClick:c=>r.handleClick(o)},Zn(o),11,gu))),128)),_e("button",{class:"keyboard-key m-[3px] p-1.5 py-2.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline",onClick:t[3]||(t[3]=o=>r.handleClick("ENTER"))}," ENTER ")])])])}const yu=tu(nu,[["render",bu],["__scopeId","data-v-d921f826"]]),xu={__name:"App",setup(e){return(t,n)=>(Ue(),pc(yu))}};function ss(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ss(Object(n),!0).forEach(function(r){pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ss(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ar(e){return Ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ar(e)}function _u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function os(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function wu(e,t,n){return t&&os(e.prototype,t),n&&os(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function aa(e,t){return Eu(e)||Ou(e,t)||Po(e,t)||Iu()}function Un(e){return Tu(e)||Au(e)||Po(e)||ku()}function Tu(e){if(Array.isArray(e))return Ai(e)}function Eu(e){if(Array.isArray(e))return e}function Au(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ou(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,s,o;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(c){a=!0,o=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw o}}return r}}function Po(e,t){if(e){if(typeof e=="string")return Ai(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ai(e,t)}}function Ai(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ku(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Iu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ls=function(){},sa={},So={},No=null,Mo={mark:ls,measure:ls};try{typeof window<"u"&&(sa=window),typeof document<"u"&&(So=document),typeof MutationObserver<"u"&&(No=MutationObserver),typeof performance<"u"&&(Mo=performance)}catch{}var Cu=sa.navigator||{},fs=Cu.userAgent,cs=fs===void 0?"":fs,Pt=sa,ae=So,us=No,ar=Mo;Pt.document;var bt=!!ae.documentElement&&!!ae.head&&typeof ae.addEventListener=="function"&&typeof ae.createElement=="function",Ro=~cs.indexOf("MSIE")||~cs.indexOf("Trident/"),sr,or,lr,fr,cr,ht="___FONT_AWESOME___",Oi=16,Lo="fa",Fo="svg-inline--fa",Bt="data-fa-i2svg",ki="data-fa-pseudo-element",Pu="data-fa-pseudo-element-pending",oa="data-prefix",la="data-icon",ds="fontawesome-i2svg",Su="async",Nu=["HTML","HEAD","STYLE","SCRIPT"],Do=function(){try{return!0}catch{return!1}}(),ie="classic",ue="sharp",fa=[ie,ue];function jn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ie]}})}var Mn=jn((sr={},pe(sr,ie,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),pe(sr,ue,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),sr)),Rn=jn((or={},pe(or,ie,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),pe(or,ue,{solid:"fass",regular:"fasr"}),or)),Ln=jn((lr={},pe(lr,ie,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),pe(lr,ue,{fass:"fa-solid",fasr:"fa-regular"}),lr)),Mu=jn((fr={},pe(fr,ie,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),pe(fr,ue,{"fa-solid":"fass","fa-regular":"fasr"}),fr)),Ru=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Uo="fa-layers-text",Lu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Fu=jn((cr={},pe(cr,ie,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),pe(cr,ue,{900:"fass",400:"fasr"}),cr)),jo=[1,2,3,4,5,6,7,8,9,10],Du=jo.concat([11,12,13,14,15,16,17,18,19,20]),Uu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ht={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Fn=new Set;Object.keys(Rn[ie]).map(Fn.add.bind(Fn));Object.keys(Rn[ue]).map(Fn.add.bind(Fn));var ju=[].concat(fa,Un(Fn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ht.GROUP,Ht.SWAP_OPACITY,Ht.PRIMARY,Ht.SECONDARY]).concat(jo.map(function(e){return"".concat(e,"x")})).concat(Du.map(function(e){return"w-".concat(e)})),Tn=Pt.FontAwesomeConfig||{};function zu(e){var t=ae.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Hu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ae&&typeof ae.querySelector=="function"){var Yu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Yu.forEach(function(e){var t=aa(e,2),n=t[0],r=t[1],i=Hu(zu(n));i!=null&&(Tn[r]=i)})}var zo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Lo,replacementClass:Fo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Tn.familyPrefix&&(Tn.cssPrefix=Tn.familyPrefix);var ln=R(R({},zo),Tn);ln.autoReplaceSvg||(ln.observeMutations=!1);var D={};Object.keys(zo).forEach(function(e){Object.defineProperty(D,e,{enumerable:!0,set:function(n){ln[e]=n,En.forEach(function(r){return r(D)})},get:function(){return ln[e]}})});Object.defineProperty(D,"familyPrefix",{enumerable:!0,set:function(t){ln.cssPrefix=t,En.forEach(function(n){return n(D)})},get:function(){return ln.cssPrefix}});Pt.FontAwesomeConfig=D;var En=[];function $u(e){return En.push(e),function(){En.splice(En.indexOf(e),1)}}var Et=Oi,at={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Wu(e){if(!(!e||!bt)){var t=ae.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ae.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],s=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=a)}return ae.head.insertBefore(t,r),e}}var Bu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Dn(){for(var e=12,t="";e-- >0;)t+=Bu[Math.random()*62|0];return t}function dn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ca(e){return e.classList?dn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ho(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ho(e[n]),'" ')},"").trim()}function Hr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ua(e){return e.size!==at.size||e.x!==at.x||e.y!==at.y||e.rotate!==at.rotate||e.flipX||e.flipY}function Ku(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(a," ").concat(s," ").concat(o)},m={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:m}}function qu(e){var t=e.transform,n=e.width,r=n===void 0?Oi:n,i=e.height,a=i===void 0?Oi:i,s=e.startCentered,o=s===void 0?!1:s,c="";return o&&Ro?c+="translate(".concat(t.x/Et-r/2,"em, ").concat(t.y/Et-a/2,"em) "):o?c+="translate(calc(-50% + ".concat(t.x/Et,"em), calc(-50% + ").concat(t.y/Et,"em)) "):c+="translate(".concat(t.x/Et,"em, ").concat(t.y/Et,"em) "),c+="scale(".concat(t.size/Et*(t.flipX?-1:1),", ").concat(t.size/Et*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var Vu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Yo(){var e=Lo,t=Fo,n=D.cssPrefix,r=D.replacementClass,i=Vu;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return i}var ms=!1;function li(){D.autoAddCss&&!ms&&(Wu(Yo()),ms=!0)}var Gu={mixout:function(){return{dom:{css:Yo,insertCss:li}}},hooks:function(){return{beforeDOMElementCreation:function(){li()},beforeI2svg:function(){li()}}}},pt=Pt||{};pt[ht]||(pt[ht]={});pt[ht].styles||(pt[ht].styles={});pt[ht].hooks||(pt[ht].hooks={});pt[ht].shims||(pt[ht].shims=[]);var Ve=pt[ht],$o=[],Ju=function e(){ae.removeEventListener("DOMContentLoaded",e),Or=1,$o.map(function(t){return t()})},Or=!1;bt&&(Or=(ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ae.readyState),Or||ae.addEventListener("DOMContentLoaded",Ju));function Zu(e){bt&&(Or?setTimeout(e,0):$o.push(e))}function zn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Ho(e):"<".concat(t," ").concat(Xu(r),">").concat(a.map(zn).join(""),"</").concat(t,">")}function hs(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Qu=function(t,n){return function(r,i,a,s){return t.call(n,r,i,a,s)}},fi=function(t,n,r,i){var a=Object.keys(t),s=a.length,o=i!==void 0?Qu(n,i):n,c,m,p;for(r===void 0?(c=1,p=t[a[0]]):(c=0,p=r);c<s;c++)m=a[c],p=o(p,t[m],m,t);return p};function ed(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Ii(e){var t=ed(e);return t.length===1?t[0].toString(16):null}function td(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function ps(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ci(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=ps(t);typeof Ve.hooks.addPack=="function"&&!i?Ve.hooks.addPack(e,ps(t)):Ve.styles[e]=R(R({},Ve.styles[e]||{}),a),e==="fas"&&Ci("fa",t)}var ur,dr,mr,Jt=Ve.styles,nd=Ve.shims,rd=(ur={},pe(ur,ie,Object.values(Ln[ie])),pe(ur,ue,Object.values(Ln[ue])),ur),da=null,Wo={},Bo={},Xo={},Ko={},qo={},id=(dr={},pe(dr,ie,Object.keys(Mn[ie])),pe(dr,ue,Object.keys(Mn[ue])),dr);function ad(e){return~ju.indexOf(e)}function sd(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!ad(i)?i:null}var Vo=function(){var t=function(a){return fi(Jt,function(s,o,c){return s[c]=fi(o,a,{}),s},{})};Wo=t(function(i,a,s){if(a[3]&&(i[a[3]]=s),a[2]){var o=a[2].filter(function(c){return typeof c=="number"});o.forEach(function(c){i[c.toString(16)]=s})}return i}),Bo=t(function(i,a,s){if(i[s]=s,a[2]){var o=a[2].filter(function(c){return typeof c=="string"});o.forEach(function(c){i[c]=s})}return i}),qo=t(function(i,a,s){var o=a[2];return i[s]=s,o.forEach(function(c){i[c]=s}),i});var n="far"in Jt||D.autoFetchSvg,r=fi(nd,function(i,a){var s=a[0],o=a[1],c=a[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(i.names[s]={prefix:o,iconName:c}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:o,iconName:c}),i},{names:{},unicodes:{}});Xo=r.names,Ko=r.unicodes,da=Yr(D.styleDefault,{family:D.familyDefault})};$u(function(e){da=Yr(e.styleDefault,{family:D.familyDefault})});Vo();function ma(e,t){return(Wo[e]||{})[t]}function od(e,t){return(Bo[e]||{})[t]}function Yt(e,t){return(qo[e]||{})[t]}function Go(e){return Xo[e]||{prefix:null,iconName:null}}function ld(e){var t=Ko[e],n=ma("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function St(){return da}var ha=function(){return{prefix:null,iconName:null,rest:[]}};function Yr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ie:n,i=Mn[r][e],a=Rn[r][e]||Rn[r][i],s=e in Ve.styles?e:null;return a||s||null}var vs=(mr={},pe(mr,ie,Object.keys(Ln[ie])),pe(mr,ue,Object.keys(Ln[ue])),mr);function $r(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},pe(t,ie,"".concat(D.cssPrefix,"-").concat(ie)),pe(t,ue,"".concat(D.cssPrefix,"-").concat(ue)),t),s=null,o=ie;(e.includes(a[ie])||e.some(function(m){return vs[ie].includes(m)}))&&(o=ie),(e.includes(a[ue])||e.some(function(m){return vs[ue].includes(m)}))&&(o=ue);var c=e.reduce(function(m,p){var g=sd(D.cssPrefix,p);if(Jt[p]?(p=rd[o].includes(p)?Mu[o][p]:p,s=p,m.prefix=p):id[o].indexOf(p)>-1?(s=p,m.prefix=Yr(p,{family:o})):g?m.iconName=g:p!==D.replacementClass&&p!==a[ie]&&p!==a[ue]&&m.rest.push(p),!i&&m.prefix&&m.iconName){var w=s==="fa"?Go(m.iconName):{},k=Yt(m.prefix,m.iconName);w.prefix&&(s=null),m.iconName=w.iconName||k||m.iconName,m.prefix=w.prefix||m.prefix,m.prefix==="far"&&!Jt.far&&Jt.fas&&!D.autoFetchSvg&&(m.prefix="fas")}return m},ha());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&o===ue&&(Jt.fass||D.autoFetchSvg)&&(c.prefix="fass",c.iconName=Yt(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||s==="fa")&&(c.prefix=St()||"fas"),c}var fd=function(){function e(){_u(this,e),this.definitions={}}return wu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=R(R({},n.definitions[o]||{}),s[o]),Ci(o,s[o]);var c=Ln[ie][o];c&&Ci(c,s[o]),Vo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var s=i[a],o=s.prefix,c=s.iconName,m=s.icon,p=m[2];n[o]||(n[o]={}),p.length>0&&p.forEach(function(g){typeof g=="string"&&(n[o][g]=m)}),n[o][c]=m}),n}}]),e}(),gs=[],Zt={},rn={},cd=Object.keys(rn);function ud(e,t){var n=t.mixoutsTo;return gs=e,Zt={},Object.keys(rn).forEach(function(r){cd.indexOf(r)===-1&&delete rn[r]}),gs.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),Ar(i[s])==="object"&&Object.keys(i[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(s){Zt[s]||(Zt[s]=[]),Zt[s].push(a[s])})}r.provides&&r.provides(rn)}),n}function Pi(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Zt[e]||[];return a.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function Xt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Zt[e]||[];i.forEach(function(a){a.apply(null,n)})}function vt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return rn[e]?rn[e].apply(null,t):void 0}function Si(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||St();if(t)return t=Yt(n,t)||t,hs(Jo.definitions,n,t)||hs(Ve.styles,n,t)}var Jo=new fd,dd=function(){D.autoReplaceSvg=!1,D.observeMutations=!1,Xt("noAuto")},md={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return bt?(Xt("beforeI2svg",t),vt("pseudoElements2svg",t),vt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;D.autoReplaceSvg===!1&&(D.autoReplaceSvg=!0),D.observeMutations=!0,Zu(function(){pd({autoReplaceSvgRoot:n}),Xt("watch",t)})}},hd={icon:function(t){if(t===null)return null;if(Ar(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Yt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Yr(t[0]);return{prefix:r,iconName:Yt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(D.cssPrefix,"-"))>-1||t.match(Ru))){var i=$r(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||St(),iconName:Yt(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=St();return{prefix:a,iconName:Yt(a,t)||t}}}},Le={noAuto:dd,config:D,dom:md,parse:hd,library:Jo,findIconDefinition:Si,toHtml:zn},pd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ae:n;(Object.keys(Ve.styles).length>0||D.autoFetchSvg)&&bt&&D.autoReplaceSvg&&Le.dom.i2svg({node:r})};function Wr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return zn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(bt){var r=ae.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function vd(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,s=e.transform;if(ua(s)&&n.found&&!r.found){var o=n.width,c=n.height,m={x:o/c/2,y:.5};i.style=Hr(R(R({},a),{},{"transform-origin":"".concat(m.x+s.x/16,"em ").concat(m.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function gd(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,s=a===!0?"".concat(t,"-").concat(D.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},i),{},{id:s}),children:r}]}]}function pa(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,s=e.transform,o=e.symbol,c=e.title,m=e.maskId,p=e.titleId,g=e.extra,w=e.watchable,k=w===void 0?!1:w,H=r.found?r:n,L=H.width,K=H.height,I=i==="fak",S=[D.replacementClass,a?"".concat(D.cssPrefix,"-").concat(a):""].filter(function(ce){return g.classes.indexOf(ce)===-1}).filter(function(ce){return ce!==""||!!ce}).concat(g.classes).join(" "),E={children:[],attributes:R(R({},g.attributes),{},{"data-prefix":i,"data-icon":a,class:S,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(K)})},P=I&&!~g.classes.indexOf("fa-fw")?{width:"".concat(L/K*16*.0625,"em")}:{};k&&(E.attributes[Bt]=""),c&&(E.children.push({tag:"title",attributes:{id:E.attributes["aria-labelledby"]||"title-".concat(p||Dn())},children:[c]}),delete E.attributes.title);var U=R(R({},E),{},{prefix:i,iconName:a,main:n,mask:r,maskId:m,transform:s,symbol:o,styles:R(R({},P),g.styles)}),G=r.found&&n.found?vt("generateAbstractMask",U)||{children:[],attributes:{}}:vt("generateAbstractIcon",U)||{children:[],attributes:{}},J=G.children,fe=G.attributes;return U.children=J,U.attributes=fe,o?gd(U):vd(U)}function bs(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,s=e.extra,o=e.watchable,c=o===void 0?!1:o,m=R(R(R({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")});c&&(m[Bt]="");var p=R({},s.styles);ua(i)&&(p.transform=qu({transform:i,startCentered:!0,width:n,height:r}),p["-webkit-transform"]=p.transform);var g=Hr(p);g.length>0&&(m.style=g);var w=[];return w.push({tag:"span",attributes:m,children:[t]}),a&&w.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),w}function bd(e){var t=e.content,n=e.title,r=e.extra,i=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Hr(r.styles);a.length>0&&(i.style=a);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var ci=Ve.styles;function Ni(e){var t=e[0],n=e[1],r=e.slice(4),i=aa(r,1),a=i[0],s=null;return Array.isArray(a)?s={tag:"g",attributes:{class:"".concat(D.cssPrefix,"-").concat(Ht.GROUP)},children:[{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(Ht.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(Ht.PRIMARY),fill:"currentColor",d:a[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:s}}var yd={found:!1,width:512,height:512};function xd(e,t){!Do&&!D.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Mi(e,t){var n=t;return t==="fa"&&D.styleDefault!==null&&(t=St()),new Promise(function(r,i){if(vt("missingIconAbstract"),n==="fa"){var a=Go(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&ci[t]&&ci[t][e]){var s=ci[t][e];return r(Ni(s))}xd(e,t),r(R(R({},yd),{},{icon:D.showMissingIcons&&e?vt("missingIconAbstract")||{}:{}}))})}var ys=function(){},Ri=D.measurePerformance&&ar&&ar.mark&&ar.measure?ar:{mark:ys,measure:ys},xn='FA "6.3.0"',_d=function(t){return Ri.mark("".concat(xn," ").concat(t," begins")),function(){return Zo(t)}},Zo=function(t){Ri.mark("".concat(xn," ").concat(t," ends")),Ri.measure("".concat(xn," ").concat(t),"".concat(xn," ").concat(t," begins"),"".concat(xn," ").concat(t," ends"))},va={begin:_d,end:Zo},yr=function(){};function xs(e){var t=e.getAttribute?e.getAttribute(Bt):null;return typeof t=="string"}function wd(e){var t=e.getAttribute?e.getAttribute(oa):null,n=e.getAttribute?e.getAttribute(la):null;return t&&n}function Td(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(D.replacementClass)}function Ed(){if(D.autoReplaceSvg===!0)return xr.replace;var e=xr[D.autoReplaceSvg];return e||xr.replace}function Ad(e){return ae.createElementNS("http://www.w3.org/2000/svg",e)}function Od(e){return ae.createElement(e)}function Qo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ad:Od:n;if(typeof e=="string")return ae.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var a=e.children||[];return a.forEach(function(s){i.appendChild(Qo(s,{ceFn:r}))}),i}function kd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var xr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Qo(i),n)}),n.getAttribute(Bt)===null&&D.keepOriginalSource){var r=ae.createComment(kd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ca(n).indexOf(D.replacementClass))return xr.replace(t);var i=new RegExp("".concat(D.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(o,c){return c===D.replacementClass||c.match(i)?o.toSvg.push(c):o.toNode.push(c),o},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var s=r.map(function(o){return zn(o)}).join(`
`);n.setAttribute(Bt,""),n.innerHTML=s}};function _s(e){e()}function el(e,t){var n=typeof t=="function"?t:yr;if(e.length===0)n();else{var r=_s;D.mutateApproach===Su&&(r=Pt.requestAnimationFrame||_s),r(function(){var i=Ed(),a=va.begin("mutate");e.map(i),a(),n()})}}var ga=!1;function tl(){ga=!0}function Li(){ga=!1}var kr=null;function ws(e){if(us&&D.observeMutations){var t=e.treeCallback,n=t===void 0?yr:t,r=e.nodeCallback,i=r===void 0?yr:r,a=e.pseudoElementsCallback,s=a===void 0?yr:a,o=e.observeMutationsRoot,c=o===void 0?ae:o;kr=new us(function(m){if(!ga){var p=St();dn(m).forEach(function(g){if(g.type==="childList"&&g.addedNodes.length>0&&!xs(g.addedNodes[0])&&(D.searchPseudoElements&&s(g.target),n(g.target)),g.type==="attributes"&&g.target.parentNode&&D.searchPseudoElements&&s(g.target.parentNode),g.type==="attributes"&&xs(g.target)&&~Uu.indexOf(g.attributeName))if(g.attributeName==="class"&&wd(g.target)){var w=$r(ca(g.target)),k=w.prefix,H=w.iconName;g.target.setAttribute(oa,k||p),H&&g.target.setAttribute(la,H)}else Td(g.target)&&i(g.target)})}}),bt&&kr.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Id(){kr&&kr.disconnect()}function Cd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),s=a[0],o=a.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function Pd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=$r(ca(e));return i.prefix||(i.prefix=St()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=od(i.prefix,e.innerText)||ma(i.prefix,Ii(e.innerText))),!i.iconName&&D.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Sd(e){var t=dn(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return D.autoA11y&&(n?t["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(r||Dn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Nd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:at,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ts(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Pd(e),r=n.iconName,i=n.prefix,a=n.rest,s=Sd(e),o=Pi("parseNodeAttributes",{},e),c=t.styleParser?Cd(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:at,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:c,attributes:s}},o)}var Md=Ve.styles;function nl(e){var t=D.autoReplaceSvg==="nest"?Ts(e,{styleParser:!1}):Ts(e);return~t.extra.classes.indexOf(Uo)?vt("generateLayersText",e,t):vt("generateSvgReplacementMutation",e,t)}var Nt=new Set;fa.map(function(e){Nt.add("fa-".concat(e))});Object.keys(Mn[ie]).map(Nt.add.bind(Nt));Object.keys(Mn[ue]).map(Nt.add.bind(Nt));Nt=Un(Nt);function Es(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!bt)return Promise.resolve();var n=ae.documentElement.classList,r=function(g){return n.add("".concat(ds,"-").concat(g))},i=function(g){return n.remove("".concat(ds,"-").concat(g))},a=D.autoFetchSvg?Nt:fa.map(function(p){return"fa-".concat(p)}).concat(Object.keys(Md));a.includes("fa")||a.push("fa");var s=[".".concat(Uo,":not([").concat(Bt,"])")].concat(a.map(function(p){return".".concat(p,":not([").concat(Bt,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=dn(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),i("complete");else return Promise.resolve();var c=va.begin("onTree"),m=o.reduce(function(p,g){try{var w=nl(g);w&&p.push(w)}catch(k){Do||k.name==="MissingIcon"&&console.error(k)}return p},[]);return new Promise(function(p,g){Promise.all(m).then(function(w){el(w,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),c(),p()})}).catch(function(w){c(),g(w)})})}function Rd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;nl(e).then(function(n){n&&el([n],t)})}function Ld(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Si(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Si(i||{})),e(r,R(R({},n),{},{mask:i}))}}var Fd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?at:r,a=n.symbol,s=a===void 0?!1:a,o=n.mask,c=o===void 0?null:o,m=n.maskId,p=m===void 0?null:m,g=n.title,w=g===void 0?null:g,k=n.titleId,H=k===void 0?null:k,L=n.classes,K=L===void 0?[]:L,I=n.attributes,S=I===void 0?{}:I,E=n.styles,P=E===void 0?{}:E;if(t){var U=t.prefix,G=t.iconName,J=t.icon;return Wr(R({type:"icon"},t),function(){return Xt("beforeDOMElementCreation",{iconDefinition:t,params:n}),D.autoA11y&&(w?S["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(H||Dn()):(S["aria-hidden"]="true",S.focusable="false")),pa({icons:{main:Ni(J),mask:c?Ni(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:G,transform:R(R({},at),i),symbol:s,title:w,maskId:p,titleId:H,extra:{attributes:S,styles:P,classes:K}})})}},Dd={mixout:function(){return{icon:Ld(Fd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Es,n.nodeCallback=Rd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ae:r,a=n.callback,s=a===void 0?function(){}:a;return Es(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,s=r.titleId,o=r.prefix,c=r.transform,m=r.symbol,p=r.mask,g=r.maskId,w=r.extra;return new Promise(function(k,H){Promise.all([Mi(i,o),p.iconName?Mi(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(L){var K=aa(L,2),I=K[0],S=K[1];k([n,pa({icons:{main:I,mask:S},prefix:o,iconName:i,transform:c,symbol:m,maskId:g,title:a,titleId:s,extra:w,watchable:!0})])}).catch(H)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,s=n.transform,o=n.styles,c=Hr(o);c.length>0&&(i.style=c);var m;return ua(s)&&(m=vt("generateAbstractTransformGrouping",{main:a,transform:s,containerWidth:a.width,iconWidth:a.width})),r.push(m||a.icon),{children:r,attributes:i}}}},Ud={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Wr({type:"layer"},function(){Xt("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(c){s=s.concat(c.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(D.cssPrefix,"-layers")].concat(Un(a)).join(" ")},children:s}]})}}}},jd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,s=r.classes,o=s===void 0?[]:s,c=r.attributes,m=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return Wr({type:"counter",content:n},function(){return Xt("beforeDOMElementCreation",{content:n,params:r}),bd({content:n.toString(),title:a,extra:{attributes:m,styles:g,classes:["".concat(D.cssPrefix,"-layers-counter")].concat(Un(o))}})})}}}},zd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?at:i,s=r.title,o=s===void 0?null:s,c=r.classes,m=c===void 0?[]:c,p=r.attributes,g=p===void 0?{}:p,w=r.styles,k=w===void 0?{}:w;return Wr({type:"text",content:n},function(){return Xt("beforeDOMElementCreation",{content:n,params:r}),bs({content:n,transform:R(R({},at),a),title:o,extra:{attributes:g,styles:k,classes:["".concat(D.cssPrefix,"-layers-text")].concat(Un(m))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,s=r.extra,o=null,c=null;if(Ro){var m=parseInt(getComputedStyle(n).fontSize,10),p=n.getBoundingClientRect();o=p.width/m,c=p.height/m}return D.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,bs({content:n.innerHTML,width:o,height:c,transform:a,title:i,extra:s,watchable:!0})])}}},Hd=new RegExp('"',"ug"),As=[1105920,1112319];function Yd(e){var t=e.replace(Hd,""),n=td(t,0),r=n>=As[0]&&n<=As[1],i=t.length===2?t[0]===t[1]:!1;return{value:Ii(i?t[0]:t),isSecondary:r||i}}function Os(e,t){var n="".concat(Pu).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=dn(e.children),s=a.filter(function(J){return J.getAttribute(ki)===t})[0],o=Pt.getComputedStyle(e,t),c=o.getPropertyValue("font-family").match(Lu),m=o.getPropertyValue("font-weight"),p=o.getPropertyValue("content");if(s&&!c)return e.removeChild(s),r();if(c&&p!=="none"&&p!==""){var g=o.getPropertyValue("content"),w=~["Sharp"].indexOf(c[2])?ue:ie,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Rn[w][c[2].toLowerCase()]:Fu[w][m],H=Yd(g),L=H.value,K=H.isSecondary,I=c[0].startsWith("FontAwesome"),S=ma(k,L),E=S;if(I){var P=ld(L);P.iconName&&P.prefix&&(S=P.iconName,k=P.prefix)}if(S&&!K&&(!s||s.getAttribute(oa)!==k||s.getAttribute(la)!==E)){e.setAttribute(n,E),s&&e.removeChild(s);var U=Nd(),G=U.extra;G.attributes[ki]=t,Mi(S,k).then(function(J){var fe=pa(R(R({},U),{},{icons:{main:J,mask:ha()},prefix:k,iconName:E,extra:G,watchable:!0})),ce=ae.createElement("svg");t==="::before"?e.insertBefore(ce,e.firstChild):e.appendChild(ce),ce.outerHTML=fe.map(function(q){return zn(q)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function $d(e){return Promise.all([Os(e,"::before"),Os(e,"::after")])}function Wd(e){return e.parentNode!==document.head&&!~Nu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ki)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ks(e){if(bt)return new Promise(function(t,n){var r=dn(e.querySelectorAll("*")).filter(Wd).map($d),i=va.begin("searchPseudoElements");tl(),Promise.all(r).then(function(){i(),Li(),t()}).catch(function(){i(),Li(),n()})})}var Bd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ks,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ae:r;D.searchPseudoElements&&ks(i)}}},Is=!1,Xd={mixout:function(){return{dom:{unwatch:function(){tl(),Is=!0}}}},hooks:function(){return{bootstrap:function(){ws(Pi("mutationObserverCallbacks",{}))},noAuto:function(){Id()},watch:function(n){var r=n.observeMutationsRoot;Is?Li():ws(Pi("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Cs=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),s=a[0],o=a.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},Kd={mixout:function(){return{parse:{transform:function(n){return Cs(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Cs(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(a/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),m="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),p="rotate(".concat(i.rotate," 0 0)"),g={transform:"".concat(c," ").concat(m," ").concat(p)},w={transform:"translate(".concat(s/2*-1," -256)")},k={outer:o,inner:g,path:w};return{tag:"g",attributes:R({},k.outer),children:[{tag:"g",attributes:R({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),k.path)}]}]}}}},ui={x:0,y:0,width:"100%",height:"100%"};function Ps(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function qd(e){return e.tag==="g"?e.children:[e]}var Vd={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?$r(i.split(" ").map(function(s){return s.trim()})):ha();return a.prefix||(a.prefix=St()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,s=n.mask,o=n.maskId,c=n.transform,m=a.width,p=a.icon,g=s.width,w=s.icon,k=Ku({transform:c,containerWidth:g,iconWidth:m}),H={tag:"rect",attributes:R(R({},ui),{},{fill:"white"})},L=p.children?{children:p.children.map(Ps)}:{},K={tag:"g",attributes:R({},k.inner),children:[Ps(R({tag:p.tag,attributes:R(R({},p.attributes),k.path)},L))]},I={tag:"g",attributes:R({},k.outer),children:[K]},S="mask-".concat(o||Dn()),E="clip-".concat(o||Dn()),P={tag:"mask",attributes:R(R({},ui),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[H,I]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:qd(w)},P]};return r.push(U,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(S,")")},ui)}),{children:r,attributes:i}}}},Gd={provides:function(t){var n=!1;Pt.matchMedia&&(n=Pt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=R(R({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:R(R({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:R(R({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:R(R({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Jd={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},Zd=[Gu,Dd,Ud,jd,zd,Bd,Xd,Kd,Vd,Gd,Jd];ud(Zd,{mixoutsTo:Le});Le.noAuto;var rl=Le.config,Qd=Le.library;Le.dom;var Ir=Le.parse;Le.findIconDefinition;Le.toHtml;var em=Le.icon;Le.layer;var tm=Le.text;Le.counter;function Ss(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ss(Object(n),!0).forEach(function(r){Se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ss(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Cr(e){return Cr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cr(e)}function Se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function rm(e,t){if(e==null)return{};var n=nm(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Fi(e){return im(e)||am(e)||sm(e)||om()}function im(e){if(Array.isArray(e))return Di(e)}function am(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sm(e,t){if(e){if(typeof e=="string")return Di(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Di(e,t)}}function Di(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function om(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var lm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},il={exports:{}};(function(e){(function(t){var n=function(I,S,E){if(!m(S)||g(S)||w(S)||k(S)||c(S))return S;var P,U=0,G=0;if(p(S))for(P=[],G=S.length;U<G;U++)P.push(n(I,S[U],E));else{P={};for(var J in S)Object.prototype.hasOwnProperty.call(S,J)&&(P[I(J,E)]=n(I,S[J],E))}return P},r=function(I,S){S=S||{};var E=S.separator||"_",P=S.split||/(?=[A-Z])/;return I.split(P).join(E)},i=function(I){return H(I)?I:(I=I.replace(/[\-_\s]+(.)?/g,function(S,E){return E?E.toUpperCase():""}),I.substr(0,1).toLowerCase()+I.substr(1))},a=function(I){var S=i(I);return S.substr(0,1).toUpperCase()+S.substr(1)},s=function(I,S){return r(I,S).toLowerCase()},o=Object.prototype.toString,c=function(I){return typeof I=="function"},m=function(I){return I===Object(I)},p=function(I){return o.call(I)=="[object Array]"},g=function(I){return o.call(I)=="[object Date]"},w=function(I){return o.call(I)=="[object RegExp]"},k=function(I){return o.call(I)=="[object Boolean]"},H=function(I){return I=I-0,I===I},L=function(I,S){var E=S&&"process"in S?S.process:S;return typeof E!="function"?I:function(P,U){return E(P,I,U)}},K={camelize:i,decamelize:s,pascalize:a,depascalize:s,camelizeKeys:function(I,S){return n(L(i,S),I)},decamelizeKeys:function(I,S){return n(L(s,S),I,S)},pascalizeKeys:function(I,S){return n(L(a,S),I)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=K:t.humps=K})(lm)})(il);var fm=il.exports,cm=["class","style"];function um(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=fm.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function dm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ba(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return ba(c)}),i=Object.keys(e.attributes||{}).reduce(function(c,m){var p=e.attributes[m];switch(m){case"class":c.class=dm(p);break;case"style":c.style=um(p);break;default:c.attrs[m]=p}return c},{attrs:{},class:{},style:{}});n.class;var a=n.style,s=a===void 0?{}:a,o=rm(n,cm);return Io(e.tag,Xe(Xe(Xe({},t),{},{class:i.class,style:Xe(Xe({},i.style),s)},i.attrs),o),r)}var al=!1;try{al=!0}catch{}function mm(){if(!al&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function An(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Se({},e,t):{}}function hm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Se(t,"fa-".concat(e.size),e.size!==null),Se(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Se(t,"fa-pull-".concat(e.pull),e.pull!==null),Se(t,"fa-swap-opacity",e.swapOpacity),Se(t,"fa-bounce",e.bounce),Se(t,"fa-shake",e.shake),Se(t,"fa-beat",e.beat),Se(t,"fa-fade",e.fade),Se(t,"fa-beat-fade",e.beatFade),Se(t,"fa-flash",e.flash),Se(t,"fa-spin-pulse",e.spinPulse),Se(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ns(e){if(e&&Cr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ir.icon)return Ir.icon(e);if(e===null)return null;if(Cr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var pm=ea({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=je(function(){return Ns(t.icon)}),a=je(function(){return An("classes",hm(t))}),s=je(function(){return An("transform",typeof t.transform=="string"?Ir.transform(t.transform):t.transform)}),o=je(function(){return An("mask",Ns(t.mask))}),c=je(function(){return em(i.value,Xe(Xe(Xe(Xe({},a.value),s.value),o.value),{},{symbol:t.symbol,title:t.title}))});vr(c,function(p){if(!p)return mm("Could not find one or more icon(s)",i.value,o.value)},{immediate:!0});var m=je(function(){return c.value?ba(c.value.abstract[0],{},r):null});return function(){return m.value}}});ea({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,i=rl.familyPrefix,a=je(function(){return["".concat(i,"-layers")].concat(Fi(t.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return Io("div",{class:a.value},r.default?r.default():[])}}});ea({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,i=rl.familyPrefix,a=je(function(){return An("classes",[].concat(Fi(t.counter?["".concat(i,"-layers-counter")]:[]),Fi(t.position?["".concat(i,"-layers-").concat(t.position)]:[])))}),s=je(function(){return An("transform",typeof t.transform=="string"?Ir.transform(t.transform):t.transform)}),o=je(function(){var m=tm(t.value.toString(),Xe(Xe({},s.value),a.value)),p=m.abstract;return t.counter&&(p[0].attributes.class=p[0].attributes.class.replace("fa-layers-text","")),p[0]}),c=je(function(){return ba(o.value,{},r)});return function(){return c.value}}});var vm={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},gm={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M481.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-30.9 28.1c-7.7 7.1-11.4 17.5-10.9 27.9c.1 2.9 .2 5.8 .2 8.8s-.1 5.9-.2 8.8c-.5 10.5 3.1 20.9 10.9 27.9l30.9 28.1c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-39.7-12.6c-10-3.2-20.8-1.1-29.7 4.6c-4.9 3.1-9.9 6.1-15.1 8.7c-9.3 4.8-16.5 13.2-18.8 23.4l-8.9 40.7c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-8.9-40.7c-2.2-10.2-9.5-18.6-18.8-23.4c-5.2-2.7-10.2-5.6-15.1-8.7c-8.8-5.7-19.7-7.8-29.7-4.6L69.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l30.9-28.1c7.7-7.1 11.4-17.5 10.9-27.9c-.1-2.9-.2-5.8-.2-8.8s.1-5.9 .2-8.8c.5-10.5-3.1-20.9-10.9-27.9L8.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l39.7 12.6c10 3.2 20.8 1.1 29.7-4.6c4.9-3.1 9.9-6.1 15.1-8.7c9.3-4.8 16.5-13.2 18.8-23.4l8.9-40.7c2-9.1 9-16.3 18.2-17.8C213.3 1.2 227.5 0 242 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l8.9 40.7c2.2 10.2 9.4 18.6 18.8 23.4c5.2 2.7 10.2 5.6 15.1 8.7c8.8 5.7 19.7 7.7 29.7 4.6l39.7-12.6c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM242 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]};Qd.add(gm,vm);Jc(xu).component("font-awesome-icon",pm).mount("#app");
