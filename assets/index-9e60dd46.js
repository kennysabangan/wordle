(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function ji(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function zi(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=me(r)?kl(r):zi(r);if(i)for(const a in i)t[a]=i[a]}return t}else{if(me(e))return e;if(ae(e))return e}}const El=/;(?![^(]*\))/g,Al=/:([^]+)/,Ol=/\/\*.*?\*\//gs;function kl(e){const t={};return e.replace(Ol,"").split(El).forEach(n=>{if(n){const r=n.split(Al);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ot(e){let t="";if(me(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const r=Ot(e[n]);r&&(t+=r+" ")}else if(ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Il="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pl=ji(Il);function Rs(e){return!!e||e===""}const Zn=e=>me(e)?e:e==null?"":$(e)||ae(e)&&(e.toString===Us||!W(e.toString))?JSON.stringify(e,Ls,2):String(e),Ls=(e,t)=>t&&t.__v_isRef?Ls(e,t.value):en(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Fs(t)?{[`Set(${t.size})`]:[...t.values()]}:ae(t)&&!$(t)&&!js(t)?String(t):t,ie={},Qt=[],Ge=()=>{},Cl=()=>!1,Sl=/^on[^a-z]/,Cr=e=>Sl.test(e),Hi=e=>e.startsWith("onUpdate:"),Oe=Object.assign,Yi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Nl=Object.prototype.hasOwnProperty,V=(e,t)=>Nl.call(e,t),$=Array.isArray,en=e=>Sr(e)==="[object Map]",Fs=e=>Sr(e)==="[object Set]",W=e=>typeof e=="function",me=e=>typeof e=="string",$i=e=>typeof e=="symbol",ae=e=>e!==null&&typeof e=="object",Ds=e=>ae(e)&&W(e.then)&&W(e.catch),Us=Object.prototype.toString,Sr=e=>Us.call(e),Ml=e=>Sr(e).slice(8,-1),js=e=>Sr(e)==="[object Object]",Wi=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hr=ji(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Nr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Rl=/-(\w)/g,st=Nr(e=>e.replace(Rl,(t,n)=>n?n.toUpperCase():"")),Ll=/\B([A-Z])/g,fn=Nr(e=>e.replace(Ll,"-$1").toLowerCase()),Mr=Nr(e=>e.charAt(0).toUpperCase()+e.slice(1)),ti=Nr(e=>e?`on${Mr(e)}`:""),On=(e,t)=>!Object.is(e,t),ni=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},_r=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Fl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ma;const Dl=()=>Ma||(Ma=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let We;class Ul{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=We,!t&&We&&(this.index=(We.scopes||(We.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=We;try{return We=this,t()}finally{We=n}}}on(){We=this}off(){We=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function jl(e,t=We){t&&t.active&&t.effects.push(e)}function zl(){return We}const Bi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},zs=e=>(e.w&Pt)>0,Hs=e=>(e.n&Pt)>0,Hl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Pt},Yl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];zs(i)&&!Hs(i)?i.delete(e):t[n++]=i,i.w&=~Pt,i.n&=~Pt}t.length=n}},mi=new WeakMap;let yn=0,Pt=1;const hi=30;let Be;const $t=Symbol(""),pi=Symbol("");class Xi{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,jl(this,r)}run(){if(!this.active)return this.fn();let t=Be,n=kt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Be,Be=this,kt=!0,Pt=1<<++yn,yn<=hi?Hl(this):Ra(this),this.fn()}finally{yn<=hi&&Yl(this),Pt=1<<--yn,Be=this.parent,kt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Be===this?this.deferStop=!0:this.active&&(Ra(this),this.onStop&&this.onStop(),this.active=!1)}}function Ra(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let kt=!0;const Ys=[];function cn(){Ys.push(kt),kt=!1}function un(){const e=Ys.pop();kt=e===void 0?!0:e}function Me(e,t,n){if(kt&&Be){let r=mi.get(e);r||mi.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Bi()),$s(i)}}function $s(e,t){let n=!1;yn<=hi?Hs(e)||(e.n|=Pt,n=!zs(e)):n=!e.has(Be),n&&(e.add(Be),Be.deps.push(e))}function mt(e,t,n,r,i,a){const s=mi.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&$(e)){const c=Number(r);s.forEach((m,p)=>{(p==="length"||p>=c)&&o.push(m)})}else switch(n!==void 0&&o.push(s.get(n)),t){case"add":$(e)?Wi(n)&&o.push(s.get("length")):(o.push(s.get($t)),en(e)&&o.push(s.get(pi)));break;case"delete":$(e)||(o.push(s.get($t)),en(e)&&o.push(s.get(pi)));break;case"set":en(e)&&o.push(s.get($t));break}if(o.length===1)o[0]&&vi(o[0]);else{const c=[];for(const m of o)m&&c.push(...m);vi(Bi(c))}}function vi(e,t){const n=$(e)?e:[...e];for(const r of n)r.computed&&La(r);for(const r of n)r.computed||La(r)}function La(e,t){(e!==Be||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const $l=ji("__proto__,__v_isRef,__isVue"),Ws=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($i)),Wl=Ki(),Bl=Ki(!1,!0),Xl=Ki(!0),Fa=Kl();function Kl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=J(this);for(let a=0,s=this.length;a<s;a++)Me(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(J)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){cn();const r=J(this)[t].apply(this,n);return un(),r}}),e}function ql(e){const t=J(this);return Me(t,"has",e),t.hasOwnProperty(e)}function Ki(e=!1,t=!1){return function(r,i,a){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&a===(e?t?uf:Vs:t?qs:Ks).get(r))return r;const s=$(r);if(!e){if(s&&V(Fa,i))return Reflect.get(Fa,i,a);if(i==="hasOwnProperty")return ql}const o=Reflect.get(r,i,a);return($i(i)?Ws.has(i):$l(i))||(e||Me(r,"get",i),t)?o:we(o)?s&&Wi(i)?o:o.value:ae(o)?e?Gs(o):Gi(o):o}}const Vl=Bs(),Gl=Bs(!0);function Bs(e=!1){return function(n,r,i,a){let s=n[r];if(an(s)&&we(s)&&!we(i))return!1;if(!e&&(!wr(i)&&!an(i)&&(s=J(s),i=J(i)),!$(n)&&we(s)&&!we(i)))return s.value=i,!0;const o=$(n)&&Wi(r)?Number(r)<n.length:V(n,r),c=Reflect.set(n,r,i,a);return n===J(a)&&(o?On(i,s)&&mt(n,"set",r,i):mt(n,"add",r,i)),c}}function Jl(e,t){const n=V(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&mt(e,"delete",t,void 0),r}function Zl(e,t){const n=Reflect.has(e,t);return(!$i(t)||!Ws.has(t))&&Me(e,"has",t),n}function Ql(e){return Me(e,"iterate",$(e)?"length":$t),Reflect.ownKeys(e)}const Xs={get:Wl,set:Vl,deleteProperty:Jl,has:Zl,ownKeys:Ql},ef={get:Xl,set(e,t){return!0},deleteProperty(e,t){return!0}},tf=Oe({},Xs,{get:Bl,set:Gl}),qi=e=>e,Rr=e=>Reflect.getPrototypeOf(e);function Qn(e,t,n=!1,r=!1){e=e.__v_raw;const i=J(e),a=J(t);n||(t!==a&&Me(i,"get",t),Me(i,"get",a));const{has:s}=Rr(i),o=r?qi:n?Zi:kn;if(s.call(i,t))return o(e.get(t));if(s.call(i,a))return o(e.get(a));e!==i&&e.get(t)}function er(e,t=!1){const n=this.__v_raw,r=J(n),i=J(e);return t||(e!==i&&Me(r,"has",e),Me(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function tr(e,t=!1){return e=e.__v_raw,!t&&Me(J(e),"iterate",$t),Reflect.get(e,"size",e)}function Da(e){e=J(e);const t=J(this);return Rr(t).has.call(t,e)||(t.add(e),mt(t,"add",e,e)),this}function Ua(e,t){t=J(t);const n=J(this),{has:r,get:i}=Rr(n);let a=r.call(n,e);a||(e=J(e),a=r.call(n,e));const s=i.call(n,e);return n.set(e,t),a?On(t,s)&&mt(n,"set",e,t):mt(n,"add",e,t),this}function ja(e){const t=J(this),{has:n,get:r}=Rr(t);let i=n.call(t,e);i||(e=J(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&mt(t,"delete",e,void 0),a}function za(){const e=J(this),t=e.size!==0,n=e.clear();return t&&mt(e,"clear",void 0,void 0),n}function nr(e,t){return function(r,i){const a=this,s=a.__v_raw,o=J(s),c=t?qi:e?Zi:kn;return!e&&Me(o,"iterate",$t),s.forEach((m,p)=>r.call(i,c(m),c(p),a))}}function rr(e,t,n){return function(...r){const i=this.__v_raw,a=J(i),s=en(a),o=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,m=i[e](...r),p=n?qi:t?Zi:kn;return!t&&Me(a,"iterate",c?pi:$t),{next(){const{value:g,done:E}=m.next();return E?{value:g,done:E}:{value:o?[p(g[0]),p(g[1])]:p(g),done:E}},[Symbol.iterator](){return this}}}}function wt(e){return function(...t){return e==="delete"?!1:this}}function nf(){const e={get(a){return Qn(this,a)},get size(){return tr(this)},has:er,add:Da,set:Ua,delete:ja,clear:za,forEach:nr(!1,!1)},t={get(a){return Qn(this,a,!1,!0)},get size(){return tr(this)},has:er,add:Da,set:Ua,delete:ja,clear:za,forEach:nr(!1,!0)},n={get(a){return Qn(this,a,!0)},get size(){return tr(this,!0)},has(a){return er.call(this,a,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:nr(!0,!1)},r={get(a){return Qn(this,a,!0,!0)},get size(){return tr(this,!0)},has(a){return er.call(this,a,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:nr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=rr(a,!1,!1),n[a]=rr(a,!0,!1),t[a]=rr(a,!1,!0),r[a]=rr(a,!0,!0)}),[e,n,t,r]}const[rf,af,sf,of]=nf();function Vi(e,t){const n=t?e?of:sf:e?af:rf;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(V(n,i)&&i in r?n:r,i,a)}const lf={get:Vi(!1,!1)},ff={get:Vi(!1,!0)},cf={get:Vi(!0,!1)},Ks=new WeakMap,qs=new WeakMap,Vs=new WeakMap,uf=new WeakMap;function df(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mf(e){return e.__v_skip||!Object.isExtensible(e)?0:df(Ml(e))}function Gi(e){return an(e)?e:Ji(e,!1,Xs,lf,Ks)}function hf(e){return Ji(e,!1,tf,ff,qs)}function Gs(e){return Ji(e,!0,ef,cf,Vs)}function Ji(e,t,n,r,i){if(!ae(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const s=mf(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return i.set(e,o),o}function tn(e){return an(e)?tn(e.__v_raw):!!(e&&e.__v_isReactive)}function an(e){return!!(e&&e.__v_isReadonly)}function wr(e){return!!(e&&e.__v_isShallow)}function Js(e){return tn(e)||an(e)}function J(e){const t=e&&e.__v_raw;return t?J(t):e}function Zs(e){return _r(e,"__v_skip",!0),e}const kn=e=>ae(e)?Gi(e):e,Zi=e=>ae(e)?Gs(e):e;function Qs(e){kt&&Be&&(e=J(e),$s(e.dep||(e.dep=Bi())))}function eo(e,t){e=J(e);const n=e.dep;n&&vi(n)}function we(e){return!!(e&&e.__v_isRef===!0)}function Tt(e){return pf(e,!1)}function pf(e,t){return we(e)?e:new vf(e,t)}class vf{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:J(t),this._value=n?t:kn(t)}get value(){return Qs(this),this._value}set value(t){const n=this.__v_isShallow||wr(t)||an(t);t=n?t:J(t),On(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:kn(t),eo(this))}}function gf(e){return we(e)?e.value:e}const bf={get:(e,t,n)=>gf(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return we(i)&&!we(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function to(e){return tn(e)?e:new Proxy(e,bf)}var no;class yf{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[no]=!1,this._dirty=!0,this.effect=new Xi(t,()=>{this._dirty||(this._dirty=!0,eo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=J(this);return Qs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}no="__v_isReadonly";function xf(e,t,n=!1){let r,i;const a=W(e);return a?(r=e,i=Ge):(r=e.get,i=e.set),new yf(r,i,a||!i,n)}function It(e,t,n,r){let i;try{i=r?e(...r):e()}catch(a){Lr(a,t,n)}return i}function Je(e,t,n,r){if(W(e)){const a=It(e,t,n,r);return a&&Ds(a)&&a.catch(s=>{Lr(s,t,n)}),a}const i=[];for(let a=0;a<e.length;a++)i.push(Je(e[a],t,n,r));return i}function Lr(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const s=t.proxy,o=n;for(;a;){const m=a.ec;if(m){for(let p=0;p<m.length;p++)if(m[p](e,s,o)===!1)return}a=a.parent}const c=t.appContext.config.errorHandler;if(c){It(c,null,10,[e,s,o]);return}}_f(e,n,i,r)}function _f(e,t,n,r=!0){console.error(e)}let In=!1,gi=!1;const _e=[];let it=0;const nn=[];let dt=null,jt=0;const ro=Promise.resolve();let Qi=null;function wf(e){const t=Qi||ro;return e?t.then(this?e.bind(this):e):t}function Tf(e){let t=it+1,n=_e.length;for(;t<n;){const r=t+n>>>1;Pn(_e[r])<e?t=r+1:n=r}return t}function ea(e){(!_e.length||!_e.includes(e,In&&e.allowRecurse?it+1:it))&&(e.id==null?_e.push(e):_e.splice(Tf(e.id),0,e),io())}function io(){!In&&!gi&&(gi=!0,Qi=ro.then(so))}function Ef(e){const t=_e.indexOf(e);t>it&&_e.splice(t,1)}function Af(e){$(e)?nn.push(...e):(!dt||!dt.includes(e,e.allowRecurse?jt+1:jt))&&nn.push(e),io()}function Ha(e,t=In?it+1:0){for(;t<_e.length;t++){const n=_e[t];n&&n.pre&&(_e.splice(t,1),t--,n())}}function ao(e){if(nn.length){const t=[...new Set(nn)];if(nn.length=0,dt){dt.push(...t);return}for(dt=t,dt.sort((n,r)=>Pn(n)-Pn(r)),jt=0;jt<dt.length;jt++)dt[jt]();dt=null,jt=0}}const Pn=e=>e.id==null?1/0:e.id,Of=(e,t)=>{const n=Pn(e)-Pn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function so(e){gi=!1,In=!0,_e.sort(Of);const t=Ge;try{for(it=0;it<_e.length;it++){const n=_e[it];n&&n.active!==!1&&It(n,null,14)}}finally{it=0,_e.length=0,ao(),In=!1,Qi=null,(_e.length||nn.length)&&so()}}function kf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ie;let i=n;const a=t.startsWith("update:"),s=a&&t.slice(7);if(s&&s in r){const p=`${s==="modelValue"?"model":s}Modifiers`,{number:g,trim:E}=r[p]||ie;E&&(i=n.map(k=>me(k)?k.trim():k)),g&&(i=n.map(Fl))}let o,c=r[o=ti(t)]||r[o=ti(st(t))];!c&&a&&(c=r[o=ti(fn(t))]),c&&Je(c,e,6,i);const m=r[o+"Once"];if(m){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Je(m,e,6,i)}}function oo(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let s={},o=!1;if(!W(e)){const c=m=>{const p=oo(m,t,!0);p&&(o=!0,Oe(s,p))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!a&&!o?(ae(e)&&r.set(e,null),null):($(a)?a.forEach(c=>s[c]=null):Oe(s,a),ae(e)&&r.set(e,s),s)}function Fr(e,t){return!e||!Cr(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,fn(t))||V(e,t))}let Ke=null,Dr=null;function Tr(e){const t=Ke;return Ke=e,Dr=e&&e.type.__scopeId||null,t}function If(e){Dr=e}function Pf(){Dr=null}function Cf(e,t=Ke,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Ga(-1);const a=Tr(t);let s;try{s=e(...i)}finally{Tr(a),r._d&&Ga(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function ri(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[s],slots:o,attrs:c,emit:m,render:p,renderCache:g,data:E,setupState:k,ctx:z,inheritAttrs:R}=e;let q,_;const x=Tr(e);try{if(n.shapeFlag&4){const F=i||r;q=rt(p.call(F,F,g,a,k,E,z)),_=c}else{const F=t;q=rt(F.length>1?F(a,{attrs:c,slots:o,emit:m}):F(a,null)),_=t.props?c:Sf(c)}}catch(F){wn.length=0,Lr(F,e,1),q=Ne(Cn)}let C=q;if(_&&R!==!1){const F=Object.keys(_),{shapeFlag:B}=C;F.length&&B&7&&(s&&F.some(Hi)&&(_=Nf(_,s)),C=sn(C,_))}return n.dirs&&(C=sn(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),q=C,Tr(x),q}const Sf=e=>{let t;for(const n in e)(n==="class"||n==="style"||Cr(n))&&((t||(t={}))[n]=e[n]);return t},Nf=(e,t)=>{const n={};for(const r in e)(!Hi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Mf(e,t,n){const{props:r,children:i,component:a}=e,{props:s,children:o,patchFlag:c}=t,m=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ya(r,s,m):!!s;if(c&8){const p=t.dynamicProps;for(let g=0;g<p.length;g++){const E=p[g];if(s[E]!==r[E]&&!Fr(m,E))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?Ya(r,s,m):!0:!!s;return!1}function Ya(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!Fr(n,a))return!0}return!1}function Rf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Lf=e=>e.__isSuspense;function Ff(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):Af(e)}function Df(e,t){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[e]=t}}function pr(e,t,n=!1){const r=ue||Ke;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&W(t)?t.call(r.proxy):t}}const ir={};function vr(e,t,n){return lo(e,t,n)}function lo(e,t,{immediate:n,deep:r,flush:i,onTrack:a,onTrigger:s}=ie){const o=zl()===(ue==null?void 0:ue.scope)?ue:null;let c,m=!1,p=!1;if(we(e)?(c=()=>e.value,m=wr(e)):tn(e)?(c=()=>e,r=!0):$(e)?(p=!0,m=e.some(C=>tn(C)||wr(C)),c=()=>e.map(C=>{if(we(C))return C.value;if(tn(C))return Gt(C);if(W(C))return It(C,o,2)})):W(e)?t?c=()=>It(e,o,2):c=()=>{if(!(o&&o.isUnmounted))return g&&g(),Je(e,o,3,[E])}:c=Ge,t&&r){const C=c;c=()=>Gt(C())}let g,E=C=>{g=_.onStop=()=>{It(C,o,4)}},k;if(Nn)if(E=Ge,t?n&&Je(t,o,3,[c(),p?[]:void 0,E]):c(),i==="sync"){const C=Sc();k=C.__watcherHandles||(C.__watcherHandles=[])}else return Ge;let z=p?new Array(e.length).fill(ir):ir;const R=()=>{if(_.active)if(t){const C=_.run();(r||m||(p?C.some((F,B)=>On(F,z[B])):On(C,z)))&&(g&&g(),Je(t,o,3,[C,z===ir?void 0:p&&z[0]===ir?[]:z,E]),z=C)}else _.run()};R.allowRecurse=!!t;let q;i==="sync"?q=R:i==="post"?q=()=>Ce(R,o&&o.suspense):(R.pre=!0,o&&(R.id=o.uid),q=()=>ea(R));const _=new Xi(c,q);t?n?R():z=_.run():i==="post"?Ce(_.run.bind(_),o&&o.suspense):_.run();const x=()=>{_.stop(),o&&o.scope&&Yi(o.scope.effects,_)};return k&&k.push(x),x}function Uf(e,t,n){const r=this.proxy,i=me(e)?e.includes(".")?fo(r,e):()=>r[e]:e.bind(r,r);let a;W(t)?a=t:(a=t.handler,n=t);const s=ue;on(this);const o=lo(i,a.bind(r),n);return s?on(s):Wt(),o}function fo(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Gt(e,t){if(!ae(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),we(e))Gt(e.value,t);else if($(e))for(let n=0;n<e.length;n++)Gt(e[n],t);else if(Fs(e)||en(e))e.forEach(n=>{Gt(n,t)});else if(js(e))for(const n in e)Gt(e[n],t);return e}function ta(e){return W(e)?{setup:e,name:e.name}:e}const gr=e=>!!e.type.__asyncLoader,co=e=>e.type.__isKeepAlive;function jf(e,t){uo(e,"a",t)}function zf(e,t){uo(e,"da",t)}function uo(e,t,n=ue){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Ur(t,r,n),n){let i=n.parent;for(;i&&i.parent;)co(i.parent.vnode)&&Hf(r,t,n,i),i=i.parent}}function Hf(e,t,n,r){const i=Ur(t,e,r,!0);po(()=>{Yi(r[t],i)},n)}function Ur(e,t,n=ue,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;cn(),on(n);const o=Je(t,n,e,s);return Wt(),un(),o});return r?i.unshift(a):i.push(a),a}}const gt=e=>(t,n=ue)=>(!Nn||e==="sp")&&Ur(e,(...r)=>t(...r),n),Yf=gt("bm"),mo=gt("m"),$f=gt("bu"),Wf=gt("u"),ho=gt("bum"),po=gt("um"),Bf=gt("sp"),Xf=gt("rtg"),Kf=gt("rtc");function qf(e,t=ue){Ur("ec",e,t)}function Ft(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let s=0;s<i.length;s++){const o=i[s];a&&(o.oldValue=a[s].value);let c=o.dir[r];c&&(cn(),Je(c,n,8,[e.el,o,e,t]),un())}}const vo="components";function Vf(e,t){return Jf(vo,e,!0,t)||e}const Gf=Symbol();function Jf(e,t,n=!0,r=!1){const i=Ke||ue;if(i){const a=i.type;if(e===vo){const o=Ic(a,!1);if(o&&(o===t||o===st(t)||o===Mr(st(t))))return a}const s=$a(i[e]||a[e],t)||$a(i.appContext[e],t);return!s&&r?a:s}}function $a(e,t){return e&&(e[t]||e[st(t)]||e[Mr(st(t))])}function gn(e,t,n,r){let i;const a=n&&n[r];if($(e)||me(e)){i=new Array(e.length);for(let s=0,o=e.length;s<o;s++)i[s]=t(e[s],s,void 0,a&&a[s])}else if(typeof e=="number"){i=new Array(e);for(let s=0;s<e;s++)i[s]=t(s+1,s,void 0,a&&a[s])}else if(ae(e))if(e[Symbol.iterator])i=Array.from(e,(s,o)=>t(s,o,void 0,a&&a[o]));else{const s=Object.keys(e);i=new Array(s.length);for(let o=0,c=s.length;o<c;o++){const m=s[o];i[o]=t(e[m],m,o,a&&a[o])}}else i=[];return n&&(n[r]=i),i}const bi=e=>e?ko(e)?aa(e)||e.proxy:bi(e.parent):null,_n=Oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>bi(e.parent),$root:e=>bi(e.root),$emit:e=>e.emit,$options:e=>na(e),$forceUpdate:e=>e.f||(e.f=()=>ea(e.update)),$nextTick:e=>e.n||(e.n=wf.bind(e.proxy)),$watch:e=>Uf.bind(e)}),ii=(e,t)=>e!==ie&&!e.__isScriptSetup&&V(e,t),Zf={get({_:e},t){const{ctx:n,setupState:r,data:i,props:a,accessCache:s,type:o,appContext:c}=e;let m;if(t[0]!=="$"){const k=s[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(ii(r,t))return s[t]=1,r[t];if(i!==ie&&V(i,t))return s[t]=2,i[t];if((m=e.propsOptions[0])&&V(m,t))return s[t]=3,a[t];if(n!==ie&&V(n,t))return s[t]=4,n[t];yi&&(s[t]=0)}}const p=_n[t];let g,E;if(p)return t==="$attrs"&&Me(e,"get",t),p(e);if((g=o.__cssModules)&&(g=g[t]))return g;if(n!==ie&&V(n,t))return s[t]=4,n[t];if(E=c.config.globalProperties,V(E,t))return E[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return ii(i,t)?(i[t]=n,!0):r!==ie&&V(r,t)?(r[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},s){let o;return!!n[s]||e!==ie&&V(e,s)||ii(t,s)||(o=a[0])&&V(o,s)||V(r,s)||V(_n,s)||V(i.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let yi=!0;function Qf(e){const t=na(e),n=e.proxy,r=e.ctx;yi=!1,t.beforeCreate&&Wa(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:s,watch:o,provide:c,inject:m,created:p,beforeMount:g,mounted:E,beforeUpdate:k,updated:z,activated:R,deactivated:q,beforeDestroy:_,beforeUnmount:x,destroyed:C,unmounted:F,render:B,renderTracked:le,renderTriggered:Y,errorCaptured:de,serverPrefetch:fe,expose:ke,inheritAttrs:Le,components:ot,directives:Mt,filters:yt}=t;if(m&&ec(m,r,null,e.appContext.config.unwrapInjectedRef),s)for(const te in s){const Q=s[te];W(Q)&&(r[te]=Q.bind(n))}if(i){const te=i.call(n,n);ae(te)&&(e.data=Gi(te))}if(yi=!0,a)for(const te in a){const Q=a[te],Ze=W(Q)?Q.bind(n,n):W(Q.get)?Q.get.bind(n,n):Ge,Kt=!W(Q)&&W(Q.set)?Q.set.bind(n):Ge,lt=je({get:Ze,set:Kt});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>lt.value,set:xe=>lt.value=xe})}if(o)for(const te in o)go(o[te],r,n,te);if(c){const te=W(c)?c.call(n):c;Reflect.ownKeys(te).forEach(Q=>{Df(Q,te[Q])})}p&&Wa(p,e,"c");function ge(te,Q){$(Q)?Q.forEach(Ze=>te(Ze.bind(n))):Q&&te(Q.bind(n))}if(ge(Yf,g),ge(mo,E),ge($f,k),ge(Wf,z),ge(jf,R),ge(zf,q),ge(qf,de),ge(Kf,le),ge(Xf,Y),ge(ho,x),ge(po,F),ge(Bf,fe),$(ke))if(ke.length){const te=e.exposed||(e.exposed={});ke.forEach(Q=>{Object.defineProperty(te,Q,{get:()=>n[Q],set:Ze=>n[Q]=Ze})})}else e.exposed||(e.exposed={});B&&e.render===Ge&&(e.render=B),Le!=null&&(e.inheritAttrs=Le),ot&&(e.components=ot),Mt&&(e.directives=Mt)}function ec(e,t,n=Ge,r=!1){$(e)&&(e=xi(e));for(const i in e){const a=e[i];let s;ae(a)?"default"in a?s=pr(a.from||i,a.default,!0):s=pr(a.from||i):s=pr(a),we(s)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function Wa(e,t,n){Je($(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function go(e,t,n,r){const i=r.includes(".")?fo(n,r):()=>n[r];if(me(e)){const a=t[e];W(a)&&vr(i,a)}else if(W(e))vr(i,e.bind(n));else if(ae(e))if($(e))e.forEach(a=>go(a,t,n,r));else{const a=W(e.handler)?e.handler.bind(n):t[e.handler];W(a)&&vr(i,a,e)}}function na(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:s}}=e.appContext,o=a.get(t);let c;return o?c=o:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(m=>Er(c,m,s,!0)),Er(c,t,s)),ae(t)&&a.set(t,c),c}function Er(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&Er(e,a,n,!0),i&&i.forEach(s=>Er(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=tc[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const tc={data:Ba,props:Ut,emits:Ut,methods:Ut,computed:Ut,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:Ut,directives:Ut,watch:rc,provide:Ba,inject:nc};function Ba(e,t){return t?e?function(){return Oe(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function nc(e,t){return Ut(xi(e),xi(t))}function xi(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ae(e,t){return e?[...new Set([].concat(e,t))]:t}function Ut(e,t){return e?Oe(Oe(Object.create(null),e),t):t}function rc(e,t){if(!e)return t;if(!t)return e;const n=Oe(Object.create(null),e);for(const r in t)n[r]=Ae(e[r],t[r]);return n}function ic(e,t,n,r=!1){const i={},a={};_r(a,zr,1),e.propsDefaults=Object.create(null),bo(e,t,i,a);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);n?e.props=r?i:hf(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function ac(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:s}}=e,o=J(i),[c]=e.propsOptions;let m=!1;if((r||s>0)&&!(s&16)){if(s&8){const p=e.vnode.dynamicProps;for(let g=0;g<p.length;g++){let E=p[g];if(Fr(e.emitsOptions,E))continue;const k=t[E];if(c)if(V(a,E))k!==a[E]&&(a[E]=k,m=!0);else{const z=st(E);i[z]=_i(c,o,z,k,e,!1)}else k!==a[E]&&(a[E]=k,m=!0)}}}else{bo(e,t,i,a)&&(m=!0);let p;for(const g in o)(!t||!V(t,g)&&((p=fn(g))===g||!V(t,p)))&&(c?n&&(n[g]!==void 0||n[p]!==void 0)&&(i[g]=_i(c,o,g,void 0,e,!0)):delete i[g]);if(a!==o)for(const g in a)(!t||!V(t,g))&&(delete a[g],m=!0)}m&&mt(e,"set","$attrs")}function bo(e,t,n,r){const[i,a]=e.propsOptions;let s=!1,o;if(t)for(let c in t){if(hr(c))continue;const m=t[c];let p;i&&V(i,p=st(c))?!a||!a.includes(p)?n[p]=m:(o||(o={}))[p]=m:Fr(e.emitsOptions,c)||(!(c in r)||m!==r[c])&&(r[c]=m,s=!0)}if(a){const c=J(n),m=o||ie;for(let p=0;p<a.length;p++){const g=a[p];n[g]=_i(i,c,g,m[g],e,!V(m,g))}}return s}function _i(e,t,n,r,i,a){const s=e[n];if(s!=null){const o=V(s,"default");if(o&&r===void 0){const c=s.default;if(s.type!==Function&&W(c)){const{propsDefaults:m}=i;n in m?r=m[n]:(on(i),r=m[n]=c.call(null,t),Wt())}else r=c}s[0]&&(a&&!o?r=!1:s[1]&&(r===""||r===fn(n))&&(r=!0))}return r}function yo(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,s={},o=[];let c=!1;if(!W(e)){const p=g=>{c=!0;const[E,k]=yo(g,t,!0);Oe(s,E),k&&o.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!a&&!c)return ae(e)&&r.set(e,Qt),Qt;if($(a))for(let p=0;p<a.length;p++){const g=st(a[p]);Xa(g)&&(s[g]=ie)}else if(a)for(const p in a){const g=st(p);if(Xa(g)){const E=a[p],k=s[g]=$(E)||W(E)?{type:E}:Object.assign({},E);if(k){const z=Va(Boolean,k.type),R=Va(String,k.type);k[0]=z>-1,k[1]=R<0||z<R,(z>-1||V(k,"default"))&&o.push(g)}}}const m=[s,o];return ae(e)&&r.set(e,m),m}function Xa(e){return e[0]!=="$"}function Ka(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function qa(e,t){return Ka(e)===Ka(t)}function Va(e,t){return $(t)?t.findIndex(n=>qa(n,e)):W(t)&&qa(t,e)?0:-1}const xo=e=>e[0]==="_"||e==="$stable",ra=e=>$(e)?e.map(rt):[rt(e)],sc=(e,t,n)=>{if(t._n)return t;const r=Cf((...i)=>ra(t(...i)),n);return r._c=!1,r},_o=(e,t,n)=>{const r=e._ctx;for(const i in e){if(xo(i))continue;const a=e[i];if(W(a))t[i]=sc(i,a,r);else if(a!=null){const s=ra(a);t[i]=()=>s}}},wo=(e,t)=>{const n=ra(t);e.slots.default=()=>n},oc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=J(t),_r(t,"_",n)):_o(t,e.slots={})}else e.slots={},t&&wo(e,t);_r(e.slots,zr,1)},lc=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,s=ie;if(r.shapeFlag&32){const o=t._;o?n&&o===1?a=!1:(Oe(i,t),!n&&o===1&&delete i._):(a=!t.$stable,_o(t,i)),s=t}else t&&(wo(e,t),s={default:1});if(a)for(const o in i)!xo(o)&&!(o in s)&&delete i[o]};function To(){return{app:null,config:{isNativeTag:Cl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fc=0;function cc(e,t){return function(r,i=null){W(r)||(r=Object.assign({},r)),i!=null&&!ae(i)&&(i=null);const a=To(),s=new Set;let o=!1;const c=a.app={_uid:fc++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:Nc,get config(){return a.config},set config(m){},use(m,...p){return s.has(m)||(m&&W(m.install)?(s.add(m),m.install(c,...p)):W(m)&&(s.add(m),m(c,...p))),c},mixin(m){return a.mixins.includes(m)||a.mixins.push(m),c},component(m,p){return p?(a.components[m]=p,c):a.components[m]},directive(m,p){return p?(a.directives[m]=p,c):a.directives[m]},mount(m,p,g){if(!o){const E=Ne(r,i);return E.appContext=a,p&&t?t(E,m):e(E,m,g),o=!0,c._container=m,m.__vue_app__=c,aa(E.component)||E.component.proxy}},unmount(){o&&(e(null,c._container),delete c._container.__vue_app__)},provide(m,p){return a.provides[m]=p,c}};return c}}function wi(e,t,n,r,i=!1){if($(e)){e.forEach((E,k)=>wi(E,t&&($(t)?t[k]:t),n,r,i));return}if(gr(r)&&!i)return;const a=r.shapeFlag&4?aa(r.component)||r.component.proxy:r.el,s=i?null:a,{i:o,r:c}=e,m=t&&t.r,p=o.refs===ie?o.refs={}:o.refs,g=o.setupState;if(m!=null&&m!==c&&(me(m)?(p[m]=null,V(g,m)&&(g[m]=null)):we(m)&&(m.value=null)),W(c))It(c,o,12,[s,p]);else{const E=me(c),k=we(c);if(E||k){const z=()=>{if(e.f){const R=E?V(g,c)?g[c]:p[c]:c.value;i?$(R)&&Yi(R,a):$(R)?R.includes(a)||R.push(a):E?(p[c]=[a],V(g,c)&&(g[c]=p[c])):(c.value=[a],e.k&&(p[e.k]=c.value))}else E?(p[c]=s,V(g,c)&&(g[c]=s)):k&&(c.value=s,e.k&&(p[e.k]=s))};s?(z.id=-1,Ce(z,n)):z()}}}const Ce=Ff;function uc(e){return dc(e)}function dc(e,t){const n=Dl();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:s,createText:o,createComment:c,setText:m,setElementText:p,parentNode:g,nextSibling:E,setScopeId:k=Ge,insertStaticContent:z}=e,R=(d,h,b,T=null,y=null,O=null,S=!1,I=null,P=!!h.dynamicChildren)=>{if(d===h)return;d&&!bn(d,h)&&(T=ce(d),xe(d,y,O,!0),d=null),h.patchFlag===-2&&(P=!1,h.dynamicChildren=null);const{type:w,ref:U,shapeFlag:L}=h;switch(w){case jr:q(d,h,b,T);break;case Cn:_(d,h,b,T);break;case ai:d==null&&x(h,b,T,S);break;case Se:ot(d,h,b,T,y,O,S,I,P);break;default:L&1?B(d,h,b,T,y,O,S,I,P):L&6?Mt(d,h,b,T,y,O,S,I,P):(L&64||L&128)&&w.process(d,h,b,T,y,O,S,I,P,ee)}U!=null&&y&&wi(U,d&&d.ref,O,h||d,!h)},q=(d,h,b,T)=>{if(d==null)r(h.el=o(h.children),b,T);else{const y=h.el=d.el;h.children!==d.children&&m(y,h.children)}},_=(d,h,b,T)=>{d==null?r(h.el=c(h.children||""),b,T):h.el=d.el},x=(d,h,b,T)=>{[d.el,d.anchor]=z(d.children,h,b,T,d.el,d.anchor)},C=({el:d,anchor:h},b,T)=>{let y;for(;d&&d!==h;)y=E(d),r(d,b,T),d=y;r(h,b,T)},F=({el:d,anchor:h})=>{let b;for(;d&&d!==h;)b=E(d),i(d),d=b;i(h)},B=(d,h,b,T,y,O,S,I,P)=>{S=S||h.type==="svg",d==null?le(h,b,T,y,O,S,I,P):fe(d,h,y,O,S,I,P)},le=(d,h,b,T,y,O,S,I)=>{let P,w;const{type:U,props:L,shapeFlag:j,transition:H,dirs:X}=d;if(P=d.el=s(d.type,O,L&&L.is,L),j&8?p(P,d.children):j&16&&de(d.children,P,null,T,y,O&&U!=="foreignObject",S,I),X&&Ft(d,null,T,"created"),Y(P,d,d.scopeId,S,T),L){for(const G in L)G!=="value"&&!hr(G)&&a(P,G,null,L[G],O,d.children,T,y,ze);"value"in L&&a(P,"value",null,L.value),(w=L.onVnodeBeforeMount)&&nt(w,T,d)}X&&Ft(d,null,T,"beforeMount");const Z=(!y||y&&!y.pendingBranch)&&H&&!H.persisted;Z&&H.beforeEnter(P),r(P,h,b),((w=L&&L.onVnodeMounted)||Z||X)&&Ce(()=>{w&&nt(w,T,d),Z&&H.enter(P),X&&Ft(d,null,T,"mounted")},y)},Y=(d,h,b,T,y)=>{if(b&&k(d,b),T)for(let O=0;O<T.length;O++)k(d,T[O]);if(y){let O=y.subTree;if(h===O){const S=y.vnode;Y(d,S,S.scopeId,S.slotScopeIds,y.parent)}}},de=(d,h,b,T,y,O,S,I,P=0)=>{for(let w=P;w<d.length;w++){const U=d[w]=I?At(d[w]):rt(d[w]);R(null,U,h,b,T,y,O,S,I)}},fe=(d,h,b,T,y,O,S)=>{const I=h.el=d.el;let{patchFlag:P,dynamicChildren:w,dirs:U}=h;P|=d.patchFlag&16;const L=d.props||ie,j=h.props||ie;let H;b&&Dt(b,!1),(H=j.onVnodeBeforeUpdate)&&nt(H,b,h,d),U&&Ft(h,d,b,"beforeUpdate"),b&&Dt(b,!0);const X=y&&h.type!=="foreignObject";if(w?ke(d.dynamicChildren,w,I,b,T,X,O):S||Q(d,h,I,null,b,T,X,O,!1),P>0){if(P&16)Le(I,h,L,j,b,T,y);else if(P&2&&L.class!==j.class&&a(I,"class",null,j.class,y),P&4&&a(I,"style",L.style,j.style,y),P&8){const Z=h.dynamicProps;for(let G=0;G<Z.length;G++){const se=Z[G],Ie=L[se],He=j[se];(He!==Ie||se==="value")&&a(I,se,Ie,He,y,d.children,b,T,ze)}}P&1&&d.children!==h.children&&p(I,h.children)}else!S&&w==null&&Le(I,h,L,j,b,T,y);((H=j.onVnodeUpdated)||U)&&Ce(()=>{H&&nt(H,b,h,d),U&&Ft(h,d,b,"updated")},T)},ke=(d,h,b,T,y,O,S)=>{for(let I=0;I<h.length;I++){const P=d[I],w=h[I],U=P.el&&(P.type===Se||!bn(P,w)||P.shapeFlag&70)?g(P.el):b;R(P,w,U,null,T,y,O,S,!0)}},Le=(d,h,b,T,y,O,S)=>{if(b!==T){if(b!==ie)for(const I in b)!hr(I)&&!(I in T)&&a(d,I,b[I],null,S,h.children,y,O,ze);for(const I in T){if(hr(I))continue;const P=T[I],w=b[I];P!==w&&I!=="value"&&a(d,I,w,P,S,h.children,y,O,ze)}"value"in T&&a(d,"value",b.value,T.value)}},ot=(d,h,b,T,y,O,S,I,P)=>{const w=h.el=d?d.el:o(""),U=h.anchor=d?d.anchor:o("");let{patchFlag:L,dynamicChildren:j,slotScopeIds:H}=h;H&&(I=I?I.concat(H):H),d==null?(r(w,b,T),r(U,b,T),de(h.children,b,U,y,O,S,I,P)):L>0&&L&64&&j&&d.dynamicChildren?(ke(d.dynamicChildren,j,b,y,O,S,I),(h.key!=null||y&&h===y.subTree)&&Eo(d,h,!0)):Q(d,h,b,U,y,O,S,I,P)},Mt=(d,h,b,T,y,O,S,I,P)=>{h.slotScopeIds=I,d==null?h.shapeFlag&512?y.ctx.activate(h,b,T,S,P):yt(h,b,T,y,O,S,P):Hn(d,h,P)},yt=(d,h,b,T,y,O,S)=>{const I=d.component=Tc(d,T,y);if(co(d)&&(I.ctx.renderer=ee),Ec(I),I.asyncDep){if(y&&y.registerDep(I,ge),!d.el){const P=I.subTree=Ne(Cn);_(null,P,h,b)}return}ge(I,d,h,b,y,O,S)},Hn=(d,h,b)=>{const T=h.component=d.component;if(Mf(d,h,b))if(T.asyncDep&&!T.asyncResolved){te(T,h,b);return}else T.next=h,Ef(T.update),T.update();else h.el=d.el,T.vnode=h},ge=(d,h,b,T,y,O,S)=>{const I=()=>{if(d.isMounted){let{next:U,bu:L,u:j,parent:H,vnode:X}=d,Z=U,G;Dt(d,!1),U?(U.el=X.el,te(d,U,S)):U=X,L&&ni(L),(G=U.props&&U.props.onVnodeBeforeUpdate)&&nt(G,H,U,X),Dt(d,!0);const se=ri(d),Ie=d.subTree;d.subTree=se,R(Ie,se,g(Ie.el),ce(Ie),d,y,O),U.el=se.el,Z===null&&Rf(d,se.el),j&&Ce(j,y),(G=U.props&&U.props.onVnodeUpdated)&&Ce(()=>nt(G,H,U,X),y)}else{let U;const{el:L,props:j}=h,{bm:H,m:X,parent:Z}=d,G=gr(h);if(Dt(d,!1),H&&ni(H),!G&&(U=j&&j.onVnodeBeforeMount)&&nt(U,Z,h),Dt(d,!0),L&&xt){const se=()=>{d.subTree=ri(d),xt(L,d.subTree,d,y,null)};G?h.type.__asyncLoader().then(()=>!d.isUnmounted&&se()):se()}else{const se=d.subTree=ri(d);R(null,se,b,T,d,y,O),h.el=se.el}if(X&&Ce(X,y),!G&&(U=j&&j.onVnodeMounted)){const se=h;Ce(()=>nt(U,Z,se),y)}(h.shapeFlag&256||Z&&gr(Z.vnode)&&Z.vnode.shapeFlag&256)&&d.a&&Ce(d.a,y),d.isMounted=!0,h=b=T=null}},P=d.effect=new Xi(I,()=>ea(w),d.scope),w=d.update=()=>P.run();w.id=d.uid,Dt(d,!0),w()},te=(d,h,b)=>{h.component=d;const T=d.vnode.props;d.vnode=h,d.next=null,ac(d,h.props,T,b),lc(d,h.children,b),cn(),Ha(),un()},Q=(d,h,b,T,y,O,S,I,P=!1)=>{const w=d&&d.children,U=d?d.shapeFlag:0,L=h.children,{patchFlag:j,shapeFlag:H}=h;if(j>0){if(j&128){Kt(w,L,b,T,y,O,S,I,P);return}else if(j&256){Ze(w,L,b,T,y,O,S,I,P);return}}H&8?(U&16&&ze(w,y,O),L!==w&&p(b,L)):U&16?H&16?Kt(w,L,b,T,y,O,S,I,P):ze(w,y,O,!0):(U&8&&p(b,""),H&16&&de(L,b,T,y,O,S,I,P))},Ze=(d,h,b,T,y,O,S,I,P)=>{d=d||Qt,h=h||Qt;const w=d.length,U=h.length,L=Math.min(w,U);let j;for(j=0;j<L;j++){const H=h[j]=P?At(h[j]):rt(h[j]);R(d[j],H,b,null,y,O,S,I,P)}w>U?ze(d,y,O,!0,!1,L):de(h,b,T,y,O,S,I,P,L)},Kt=(d,h,b,T,y,O,S,I,P)=>{let w=0;const U=h.length;let L=d.length-1,j=U-1;for(;w<=L&&w<=j;){const H=d[w],X=h[w]=P?At(h[w]):rt(h[w]);if(bn(H,X))R(H,X,b,null,y,O,S,I,P);else break;w++}for(;w<=L&&w<=j;){const H=d[L],X=h[j]=P?At(h[j]):rt(h[j]);if(bn(H,X))R(H,X,b,null,y,O,S,I,P);else break;L--,j--}if(w>L){if(w<=j){const H=j+1,X=H<U?h[H].el:T;for(;w<=j;)R(null,h[w]=P?At(h[w]):rt(h[w]),b,X,y,O,S,I,P),w++}}else if(w>j)for(;w<=L;)xe(d[w],y,O,!0),w++;else{const H=w,X=w,Z=new Map;for(w=X;w<=j;w++){const Te=h[w]=P?At(h[w]):rt(h[w]);Te.key!=null&&Z.set(Te.key,w)}let G,se=0;const Ie=j-X+1;let He=!1,qt=0;const Rt=new Array(Ie);for(w=0;w<Ie;w++)Rt[w]=0;for(w=H;w<=L;w++){const Te=d[w];if(se>=Ie){xe(Te,y,O,!0);continue}let Fe;if(Te.key!=null)Fe=Z.get(Te.key);else for(G=X;G<=j;G++)if(Rt[G-X]===0&&bn(Te,h[G])){Fe=G;break}Fe===void 0?xe(Te,y,O,!0):(Rt[Fe-X]=w+1,Fe>=qt?qt=Fe:He=!0,R(Te,h[Fe],b,null,y,O,S,I,P),se++)}const $n=He?mc(Rt):Qt;for(G=$n.length-1,w=Ie-1;w>=0;w--){const Te=X+w,Fe=h[Te],Wn=Te+1<U?h[Te+1].el:T;Rt[w]===0?R(null,Fe,b,Wn,y,O,S,I,P):He&&(G<0||w!==$n[G]?lt(Fe,b,Wn,2):G--)}}},lt=(d,h,b,T,y=null)=>{const{el:O,type:S,transition:I,children:P,shapeFlag:w}=d;if(w&6){lt(d.component.subTree,h,b,T);return}if(w&128){d.suspense.move(h,b,T);return}if(w&64){S.move(d,h,b,ee);return}if(S===Se){r(O,h,b);for(let L=0;L<P.length;L++)lt(P[L],h,b,T);r(d.anchor,h,b);return}if(S===ai){C(d,h,b);return}if(T!==2&&w&1&&I)if(T===0)I.beforeEnter(O),r(O,h,b),Ce(()=>I.enter(O),y);else{const{leave:L,delayLeave:j,afterLeave:H}=I,X=()=>r(O,h,b),Z=()=>{L(O,()=>{X(),H&&H()})};j?j(O,X,Z):Z()}else r(O,h,b)},xe=(d,h,b,T=!1,y=!1)=>{const{type:O,props:S,ref:I,children:P,dynamicChildren:w,shapeFlag:U,patchFlag:L,dirs:j}=d;if(I!=null&&wi(I,null,b,d,!0),U&256){h.ctx.deactivate(d);return}const H=U&1&&j,X=!gr(d);let Z;if(X&&(Z=S&&S.onVnodeBeforeUnmount)&&nt(Z,h,d),U&6)Br(d.component,b,T);else{if(U&128){d.suspense.unmount(b,T);return}H&&Ft(d,null,h,"beforeUnmount"),U&64?d.type.remove(d,h,b,y,ee,T):w&&(O!==Se||L>0&&L&64)?ze(w,h,b,!1,!0):(O===Se&&L&384||!y&&U&16)&&ze(P,h,b),T&&Yn(d)}(X&&(Z=S&&S.onVnodeUnmounted)||H)&&Ce(()=>{Z&&nt(Z,h,d),H&&Ft(d,null,h,"unmounted")},b)},Yn=d=>{const{type:h,el:b,anchor:T,transition:y}=d;if(h===Se){mn(b,T);return}if(h===ai){F(d);return}const O=()=>{i(b),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(d.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:I}=y,P=()=>S(b,O);I?I(d.el,O,P):P()}else O()},mn=(d,h)=>{let b;for(;d!==h;)b=E(d),i(d),d=b;i(h)},Br=(d,h,b)=>{const{bum:T,scope:y,update:O,subTree:S,um:I}=d;T&&ni(T),y.stop(),O&&(O.active=!1,xe(S,d,h,b)),I&&Ce(I,h),Ce(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},ze=(d,h,b,T=!1,y=!1,O=0)=>{for(let S=O;S<d.length;S++)xe(d[S],h,b,T,y)},ce=d=>d.shapeFlag&6?ce(d.component.subTree):d.shapeFlag&128?d.suspense.next():E(d.anchor||d.el),Qe=(d,h,b)=>{d==null?h._vnode&&xe(h._vnode,null,null,!0):R(h._vnode||null,d,h,null,null,null,b),Ha(),ao(),h._vnode=d},ee={p:R,um:xe,m:lt,r:Yn,mt:yt,mc:de,pc:Q,pbc:ke,n:ce,o:e};let pe,xt;return t&&([pe,xt]=t(ee)),{render:Qe,hydrate:pe,createApp:cc(Qe,pe)}}function Dt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Eo(e,t,n=!1){const r=e.children,i=t.children;if($(r)&&$(i))for(let a=0;a<r.length;a++){const s=r[a];let o=i[a];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[a]=At(i[a]),o.el=s.el),n||Eo(s,o)),o.type===jr&&(o.el=s.el)}}function mc(e){const t=e.slice(),n=[0];let r,i,a,s,o;const c=e.length;for(r=0;r<c;r++){const m=e[r];if(m!==0){if(i=n[n.length-1],e[i]<m){t[r]=i,n.push(r);continue}for(a=0,s=n.length-1;a<s;)o=a+s>>1,e[n[o]]<m?a=o+1:s=o;m<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,s=n[a-1];a-- >0;)n[a]=s,s=t[s];return n}const hc=e=>e.__isTeleport,Se=Symbol(void 0),jr=Symbol(void 0),Cn=Symbol(void 0),ai=Symbol(void 0),wn=[];let qe=null;function Ue(e=!1){wn.push(qe=e?null:[])}function pc(){wn.pop(),qe=wn[wn.length-1]||null}let Sn=1;function Ga(e){Sn+=e}function Ao(e){return e.dynamicChildren=Sn>0?qe||Qt:null,pc(),Sn>0&&qe&&qe.push(e),e}function $e(e,t,n,r,i,a){return Ao(ye(e,t,n,r,i,a,!0))}function vc(e,t,n,r,i){return Ao(Ne(e,t,n,r,i,!0))}function Ti(e){return e?e.__v_isVNode===!0:!1}function bn(e,t){return e.type===t.type&&e.key===t.key}const zr="__vInternal",Oo=({key:e})=>e??null,br=({ref:e,ref_key:t,ref_for:n})=>e!=null?me(e)||we(e)||W(e)?{i:Ke,r:e,k:t,f:!!n}:e:null;function ye(e,t=null,n=null,r=0,i=null,a=e===Se?0:1,s=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Oo(t),ref:t&&br(t),scopeId:Dr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ke};return o?(ia(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=me(n)?8:16),Sn>0&&!s&&qe&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&qe.push(c),c}const Ne=gc;function gc(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Gf)&&(e=Cn),Ti(e)){const o=sn(e,t,!0);return n&&ia(o,n),Sn>0&&!a&&qe&&(o.shapeFlag&6?qe[qe.indexOf(e)]=o:qe.push(o)),o.patchFlag|=-2,o}if(Pc(e)&&(e=e.__vccOpts),t){t=bc(t);let{class:o,style:c}=t;o&&!me(o)&&(t.class=Ot(o)),ae(c)&&(Js(c)&&!$(c)&&(c=Oe({},c)),t.style=zi(c))}const s=me(e)?1:Lf(e)?128:hc(e)?64:ae(e)?4:W(e)?2:0;return ye(e,t,n,r,i,s,a,!0)}function bc(e){return e?Js(e)||zr in e?Oe({},e):e:null}function sn(e,t,n=!1){const{props:r,ref:i,patchFlag:a,children:s}=e,o=t?xc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Oo(o),ref:t&&t.ref?n&&i?$(i)?i.concat(br(t)):[i,br(t)]:br(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Se?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sn(e.ssContent),ssFallback:e.ssFallback&&sn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function yc(e=" ",t=0){return Ne(jr,null,e,t)}function rt(e){return e==null||typeof e=="boolean"?Ne(Cn):$(e)?Ne(Se,null,e.slice()):typeof e=="object"?At(e):Ne(jr,null,String(e))}function At(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:sn(e)}function ia(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),ia(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(zr in t)?t._ctx=Ke:i===3&&Ke&&(Ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:Ke},n=32):(t=String(t),r&64?(n=16,t=[yc(t)]):n=8);e.children=t,e.shapeFlag|=n}function xc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Ot([t.class,r.class]));else if(i==="style")t.style=zi([t.style,r.style]);else if(Cr(i)){const a=t[i],s=r[i];s&&a!==s&&!($(a)&&a.includes(s))&&(t[i]=a?[].concat(a,s):s)}else i!==""&&(t[i]=r[i])}return t}function nt(e,t,n,r=null){Je(e,t,7,[n,r])}const _c=To();let wc=0;function Tc(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||_c,a={uid:wc++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ul(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yo(r,i),emitsOptions:oo(r,i),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=kf.bind(null,a),e.ce&&e.ce(a),a}let ue=null;const on=e=>{ue=e,e.scope.on()},Wt=()=>{ue&&ue.scope.off(),ue=null};function ko(e){return e.vnode.shapeFlag&4}let Nn=!1;function Ec(e,t=!1){Nn=t;const{props:n,children:r}=e.vnode,i=ko(e);ic(e,n,i,t),oc(e,r);const a=i?Ac(e,t):void 0;return Nn=!1,a}function Ac(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Zs(new Proxy(e.ctx,Zf));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?kc(e):null;on(e),cn();const a=It(r,e,0,[e.props,i]);if(un(),Wt(),Ds(a)){if(a.then(Wt,Wt),t)return a.then(s=>{Ja(e,s,t)}).catch(s=>{Lr(s,e,0)});e.asyncDep=a}else Ja(e,a,t)}else Io(e,t)}function Ja(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ae(t)&&(e.setupState=to(t)),Io(e,n)}let Za;function Io(e,t,n){const r=e.type;if(!e.render){if(!t&&Za&&!r.render){const i=r.template||na(e).template;if(i){const{isCustomElement:a,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:c}=r,m=Oe(Oe({isCustomElement:a,delimiters:o},s),c);r.render=Za(i,m)}}e.render=r.render||Ge}on(e),cn(),Qf(e),un(),Wt()}function Oc(e){return new Proxy(e.attrs,{get(t,n){return Me(e,"get","$attrs"),t[n]}})}function kc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Oc(e))},slots:e.slots,emit:e.emit,expose:t}}function aa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(to(Zs(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in _n)return _n[n](e)},has(t,n){return n in t||n in _n}}))}function Ic(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function Pc(e){return W(e)&&"__vccOpts"in e}const je=(e,t)=>xf(e,t,Nn);function Po(e,t,n){const r=arguments.length;return r===2?ae(t)&&!$(t)?Ti(t)?Ne(e,null,[t]):Ne(e,t):Ne(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ti(n)&&(n=[n]),Ne(e,t,n))}const Cc=Symbol(""),Sc=()=>pr(Cc),Nc="3.2.47",Mc="http://www.w3.org/2000/svg",zt=typeof document<"u"?document:null,Qa=zt&&zt.createElement("template"),Rc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?zt.createElementNS(Mc,e):zt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>zt.createTextNode(e),createComment:e=>zt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>zt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const s=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Qa.innerHTML=r?`<svg>${e}</svg>`:e;const o=Qa.content;if(r){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Lc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Fc(e,t,n){const r=e.style,i=me(n);if(n&&!i){if(t&&!me(t))for(const a in t)n[a]==null&&Ei(r,a,"");for(const a in n)Ei(r,a,n[a])}else{const a=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=a)}}const es=/\s*!important$/;function Ei(e,t,n){if($(n))n.forEach(r=>Ei(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Dc(e,t);es.test(n)?e.setProperty(fn(r),n.replace(es,""),"important"):e[r]=n}}const ts=["Webkit","Moz","ms"],si={};function Dc(e,t){const n=si[t];if(n)return n;let r=st(t);if(r!=="filter"&&r in e)return si[t]=r;r=Mr(r);for(let i=0;i<ts.length;i++){const a=ts[i]+r;if(a in e)return si[t]=a}return t}const ns="http://www.w3.org/1999/xlink";function Uc(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ns,t.slice(6,t.length)):e.setAttributeNS(ns,t,n);else{const a=Pl(t);n==null||a&&!Rs(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function jc(e,t,n,r,i,a,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,i,a),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let o=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Rs(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(t)}function zc(e,t,n,r){e.addEventListener(t,n,r)}function Hc(e,t,n,r){e.removeEventListener(t,n,r)}function Yc(e,t,n,r,i=null){const a=e._vei||(e._vei={}),s=a[t];if(r&&s)s.value=r;else{const[o,c]=$c(t);if(r){const m=a[t]=Xc(r,i);zc(e,o,m,c)}else s&&(Hc(e,o,s,c),a[t]=void 0)}}const rs=/(?:Once|Passive|Capture)$/;function $c(e){let t;if(rs.test(e)){t={};let r;for(;r=e.match(rs);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):fn(e.slice(2)),t]}let oi=0;const Wc=Promise.resolve(),Bc=()=>oi||(Wc.then(()=>oi=0),oi=Date.now());function Xc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Je(Kc(r,n.value),t,5,[r])};return n.value=e,n.attached=Bc(),n}function Kc(e,t){if($(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const is=/^on[a-z]/,qc=(e,t,n,r,i=!1,a,s,o,c)=>{t==="class"?Lc(e,r,i):t==="style"?Fc(e,n,r):Cr(t)?Hi(t)||Yc(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Vc(e,t,r,i))?jc(e,t,r,a,s,o,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Uc(e,t,r,i))};function Vc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&is.test(t)&&W(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||is.test(t)&&me(n)?!1:t in e}const Gc=Oe({patchProp:qc},Rc);let as;function Jc(){return as||(as=uc(Gc))}const Zc=(...e)=>{const t=Jc().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Qc(r);if(!i)return;const a=t._component;!W(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function Qc(e){return me(e)?document.querySelector(e):e}var Ai={},eu={get exports(){return Ai},set exports(e){Ai=e}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(e){(function(t,n,r,i){var a=["","webkit","Moz","MS","ms","o"],s=n.createElement("div"),o="function",c=Math.round,m=Math.abs,p=Date.now;function g(l,f,u){return setTimeout(C(l,u),f)}function E(l,f,u){return Array.isArray(l)?(k(l,u[f],u),!0):!1}function k(l,f,u){var v;if(l)if(l.forEach)l.forEach(f,u);else if(l.length!==i)for(v=0;v<l.length;)f.call(u,l[v],v,l),v++;else for(v in l)l.hasOwnProperty(v)&&f.call(u,l[v],v,l)}function z(l,f,u){var v="DEPRECATED METHOD: "+f+`
`+u+` AT 
`;return function(){var A=new Error("get-stack-trace"),N=A&&A.stack?A.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",K=t.console&&(t.console.warn||t.console.log);return K&&K.call(t.console,v,N),l.apply(this,arguments)}}var R;typeof Object.assign!="function"?R=function(f){if(f===i||f===null)throw new TypeError("Cannot convert undefined or null to object");for(var u=Object(f),v=1;v<arguments.length;v++){var A=arguments[v];if(A!==i&&A!==null)for(var N in A)A.hasOwnProperty(N)&&(u[N]=A[N])}return u}:R=Object.assign;var q=z(function(f,u,v){for(var A=Object.keys(u),N=0;N<A.length;)(!v||v&&f[A[N]]===i)&&(f[A[N]]=u[A[N]]),N++;return f},"extend","Use `assign`."),_=z(function(f,u){return q(f,u,!0)},"merge","Use `assign`.");function x(l,f,u){var v=f.prototype,A;A=l.prototype=Object.create(v),A.constructor=l,A._super=v,u&&R(A,u)}function C(l,f){return function(){return l.apply(f,arguments)}}function F(l,f){return typeof l==o?l.apply(f&&f[0]||i,f):l}function B(l,f){return l===i?f:l}function le(l,f,u){k(ke(f),function(v){l.addEventListener(v,u,!1)})}function Y(l,f,u){k(ke(f),function(v){l.removeEventListener(v,u,!1)})}function de(l,f){for(;l;){if(l==f)return!0;l=l.parentNode}return!1}function fe(l,f){return l.indexOf(f)>-1}function ke(l){return l.trim().split(/\s+/g)}function Le(l,f,u){if(l.indexOf&&!u)return l.indexOf(f);for(var v=0;v<l.length;){if(u&&l[v][u]==f||!u&&l[v]===f)return v;v++}return-1}function ot(l){return Array.prototype.slice.call(l,0)}function Mt(l,f,u){for(var v=[],A=[],N=0;N<l.length;){var K=f?l[N][f]:l[N];Le(A,K)<0&&v.push(l[N]),A[N]=K,N++}return u&&(f?v=v.sort(function(be,Ee){return be[f]>Ee[f]}):v=v.sort()),v}function yt(l,f){for(var u,v,A=f[0].toUpperCase()+f.slice(1),N=0;N<a.length;){if(u=a[N],v=u?u+A:f,v in l)return v;N++}return i}var Hn=1;function ge(){return Hn++}function te(l){var f=l.ownerDocument||l;return f.defaultView||f.parentWindow||t}var Q=/mobile|tablet|ip(ad|hone|od)|android/i,Ze="ontouchstart"in t,Kt=yt(t,"PointerEvent")!==i,lt=Ze&&Q.test(navigator.userAgent),xe="touch",Yn="pen",mn="mouse",Br="kinect",ze=25,ce=1,Qe=2,ee=4,pe=8,xt=1,d=2,h=4,b=8,T=16,y=d|h,O=b|T,S=y|O,I=["x","y"],P=["clientX","clientY"];function w(l,f){var u=this;this.manager=l,this.callback=f,this.element=l.element,this.target=l.options.inputTarget,this.domHandler=function(v){F(l.options.enable,[l])&&u.handler(v)},this.init()}w.prototype={handler:function(){},init:function(){this.evEl&&le(this.element,this.evEl,this.domHandler),this.evTarget&&le(this.target,this.evTarget,this.domHandler),this.evWin&&le(te(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&Y(this.element,this.evEl,this.domHandler),this.evTarget&&Y(this.target,this.evTarget,this.domHandler),this.evWin&&Y(te(this.element),this.evWin,this.domHandler)}};function U(l){var f,u=l.options.inputClass;return u?f=u:Kt?f=Xr:lt?f=Xn:Ze?f=Kr:f=Bn,new f(l,L)}function L(l,f,u){var v=u.pointers.length,A=u.changedPointers.length,N=f&ce&&v-A===0,K=f&(ee|pe)&&v-A===0;u.isFirst=!!N,u.isFinal=!!K,N&&(l.session={}),u.eventType=f,j(l,u),l.emit("hammer.input",u),l.recognize(u),l.session.prevInput=u}function j(l,f){var u=l.session,v=f.pointers,A=v.length;u.firstInput||(u.firstInput=Z(f)),A>1&&!u.firstMultiple?u.firstMultiple=Z(f):A===1&&(u.firstMultiple=!1);var N=u.firstInput,K=u.firstMultiple,ve=K?K.center:N.center,be=f.center=G(v);f.timeStamp=p(),f.deltaTime=f.timeStamp-N.timeStamp,f.angle=qt(ve,be),f.distance=He(ve,be),H(u,f),f.offsetDirection=Ie(f.deltaX,f.deltaY);var Ee=se(f.deltaTime,f.deltaX,f.deltaY);f.overallVelocityX=Ee.x,f.overallVelocityY=Ee.y,f.overallVelocity=m(Ee.x)>m(Ee.y)?Ee.x:Ee.y,f.scale=K?$n(K.pointers,v):1,f.rotation=K?Rt(K.pointers,v):0,f.maxPointers=u.prevInput?f.pointers.length>u.prevInput.maxPointers?f.pointers.length:u.prevInput.maxPointers:f.pointers.length,X(u,f);var tt=l.element;de(f.srcEvent.target,tt)&&(tt=f.srcEvent.target),f.target=tt}function H(l,f){var u=f.center,v=l.offsetDelta||{},A=l.prevDelta||{},N=l.prevInput||{};(f.eventType===ce||N.eventType===ee)&&(A=l.prevDelta={x:N.deltaX||0,y:N.deltaY||0},v=l.offsetDelta={x:u.x,y:u.y}),f.deltaX=A.x+(u.x-v.x),f.deltaY=A.y+(u.y-v.y)}function X(l,f){var u=l.lastInterval||f,v=f.timeStamp-u.timeStamp,A,N,K,ve;if(f.eventType!=pe&&(v>ze||u.velocity===i)){var be=f.deltaX-u.deltaX,Ee=f.deltaY-u.deltaY,tt=se(v,be,Ee);N=tt.x,K=tt.y,A=m(tt.x)>m(tt.y)?tt.x:tt.y,ve=Ie(be,Ee),l.lastInterval=f}else A=u.velocity,N=u.velocityX,K=u.velocityY,ve=u.direction;f.velocity=A,f.velocityX=N,f.velocityY=K,f.direction=ve}function Z(l){for(var f=[],u=0;u<l.pointers.length;)f[u]={clientX:c(l.pointers[u].clientX),clientY:c(l.pointers[u].clientY)},u++;return{timeStamp:p(),pointers:f,center:G(f),deltaX:l.deltaX,deltaY:l.deltaY}}function G(l){var f=l.length;if(f===1)return{x:c(l[0].clientX),y:c(l[0].clientY)};for(var u=0,v=0,A=0;A<f;)u+=l[A].clientX,v+=l[A].clientY,A++;return{x:c(u/f),y:c(v/f)}}function se(l,f,u){return{x:f/l||0,y:u/l||0}}function Ie(l,f){return l===f?xt:m(l)>=m(f)?l<0?d:h:f<0?b:T}function He(l,f,u){u||(u=I);var v=f[u[0]]-l[u[0]],A=f[u[1]]-l[u[1]];return Math.sqrt(v*v+A*A)}function qt(l,f,u){u||(u=I);var v=f[u[0]]-l[u[0]],A=f[u[1]]-l[u[1]];return Math.atan2(A,v)*180/Math.PI}function Rt(l,f){return qt(f[1],f[0],P)+qt(l[1],l[0],P)}function $n(l,f){return He(f[0],f[1],P)/He(l[0],l[1],P)}var Te={mousedown:ce,mousemove:Qe,mouseup:ee},Fe="mousedown",Wn="mousemove mouseup";function Bn(){this.evEl=Fe,this.evWin=Wn,this.pressed=!1,w.apply(this,arguments)}x(Bn,w,{handler:function(f){var u=Te[f.type];u&ce&&f.button===0&&(this.pressed=!0),u&Qe&&f.which!==1&&(u=ee),this.pressed&&(u&ee&&(this.pressed=!1),this.callback(this.manager,u,{pointers:[f],changedPointers:[f],pointerType:mn,srcEvent:f}))}});var ol={pointerdown:ce,pointermove:Qe,pointerup:ee,pointercancel:pe,pointerout:pe},ll={2:xe,3:Yn,4:mn,5:Br},xa="pointerdown",_a="pointermove pointerup pointercancel";t.MSPointerEvent&&!t.PointerEvent&&(xa="MSPointerDown",_a="MSPointerMove MSPointerUp MSPointerCancel");function Xr(){this.evEl=xa,this.evWin=_a,w.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}x(Xr,w,{handler:function(f){var u=this.store,v=!1,A=f.type.toLowerCase().replace("ms",""),N=ol[A],K=ll[f.pointerType]||f.pointerType,ve=K==xe,be=Le(u,f.pointerId,"pointerId");N&ce&&(f.button===0||ve)?be<0&&(u.push(f),be=u.length-1):N&(ee|pe)&&(v=!0),!(be<0)&&(u[be]=f,this.callback(this.manager,N,{pointers:u,changedPointers:[f],pointerType:K,srcEvent:f}),v&&u.splice(be,1))}});var fl={touchstart:ce,touchmove:Qe,touchend:ee,touchcancel:pe},cl="touchstart",ul="touchstart touchmove touchend touchcancel";function wa(){this.evTarget=cl,this.evWin=ul,this.started=!1,w.apply(this,arguments)}x(wa,w,{handler:function(f){var u=fl[f.type];if(u===ce&&(this.started=!0),!!this.started){var v=dl.call(this,f,u);u&(ee|pe)&&v[0].length-v[1].length===0&&(this.started=!1),this.callback(this.manager,u,{pointers:v[0],changedPointers:v[1],pointerType:xe,srcEvent:f})}}});function dl(l,f){var u=ot(l.touches),v=ot(l.changedTouches);return f&(ee|pe)&&(u=Mt(u.concat(v),"identifier",!0)),[u,v]}var ml={touchstart:ce,touchmove:Qe,touchend:ee,touchcancel:pe},hl="touchstart touchmove touchend touchcancel";function Xn(){this.evTarget=hl,this.targetIds={},w.apply(this,arguments)}x(Xn,w,{handler:function(f){var u=ml[f.type],v=pl.call(this,f,u);v&&this.callback(this.manager,u,{pointers:v[0],changedPointers:v[1],pointerType:xe,srcEvent:f})}});function pl(l,f){var u=ot(l.touches),v=this.targetIds;if(f&(ce|Qe)&&u.length===1)return v[u[0].identifier]=!0,[u,u];var A,N,K=ot(l.changedTouches),ve=[],be=this.target;if(N=u.filter(function(Ee){return de(Ee.target,be)}),f===ce)for(A=0;A<N.length;)v[N[A].identifier]=!0,A++;for(A=0;A<K.length;)v[K[A].identifier]&&ve.push(K[A]),f&(ee|pe)&&delete v[K[A].identifier],A++;if(ve.length)return[Mt(N.concat(ve),"identifier",!0),ve]}var vl=2500,Ta=25;function Kr(){w.apply(this,arguments);var l=C(this.handler,this);this.touch=new Xn(this.manager,l),this.mouse=new Bn(this.manager,l),this.primaryTouch=null,this.lastTouches=[]}x(Kr,w,{handler:function(f,u,v){var A=v.pointerType==xe,N=v.pointerType==mn;if(!(N&&v.sourceCapabilities&&v.sourceCapabilities.firesTouchEvents)){if(A)gl.call(this,u,v);else if(N&&bl.call(this,v))return;this.callback(f,u,v)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function gl(l,f){l&ce?(this.primaryTouch=f.changedPointers[0].identifier,Ea.call(this,f)):l&(ee|pe)&&Ea.call(this,f)}function Ea(l){var f=l.changedPointers[0];if(f.identifier===this.primaryTouch){var u={x:f.clientX,y:f.clientY};this.lastTouches.push(u);var v=this.lastTouches,A=function(){var N=v.indexOf(u);N>-1&&v.splice(N,1)};setTimeout(A,vl)}}function bl(l){for(var f=l.srcEvent.clientX,u=l.srcEvent.clientY,v=0;v<this.lastTouches.length;v++){var A=this.lastTouches[v],N=Math.abs(f-A.x),K=Math.abs(u-A.y);if(N<=Ta&&K<=Ta)return!0}return!1}var Aa=yt(s.style,"touchAction"),Oa=Aa!==i,ka="compute",Ia="auto",qr="manipulation",Lt="none",hn="pan-x",pn="pan-y",Kn=xl();function Vr(l,f){this.manager=l,this.set(f)}Vr.prototype={set:function(l){l==ka&&(l=this.compute()),Oa&&this.manager.element.style&&Kn[l]&&(this.manager.element.style[Aa]=l),this.actions=l.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var l=[];return k(this.manager.recognizers,function(f){F(f.options.enable,[f])&&(l=l.concat(f.getTouchAction()))}),yl(l.join(" "))},preventDefaults:function(l){var f=l.srcEvent,u=l.offsetDirection;if(this.manager.session.prevented){f.preventDefault();return}var v=this.actions,A=fe(v,Lt)&&!Kn[Lt],N=fe(v,pn)&&!Kn[pn],K=fe(v,hn)&&!Kn[hn];if(A){var ve=l.pointers.length===1,be=l.distance<2,Ee=l.deltaTime<250;if(ve&&be&&Ee)return}if(!(K&&N)&&(A||N&&u&y||K&&u&O))return this.preventSrc(f)},preventSrc:function(l){this.manager.session.prevented=!0,l.preventDefault()}};function yl(l){if(fe(l,Lt))return Lt;var f=fe(l,hn),u=fe(l,pn);return f&&u?Lt:f||u?f?hn:pn:fe(l,qr)?qr:Ia}function xl(){if(!Oa)return!1;var l={},f=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(u){l[u]=f?t.CSS.supports("touch-action",u):!0}),l}var qn=1,De=2,Vt=4,_t=8,ft=_t,vn=16,et=32;function ct(l){this.options=R({},this.defaults,l||{}),this.id=ge(),this.manager=null,this.options.enable=B(this.options.enable,!0),this.state=qn,this.simultaneous={},this.requireFail=[]}ct.prototype={defaults:{},set:function(l){return R(this.options,l),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(l){if(E(l,"recognizeWith",this))return this;var f=this.simultaneous;return l=Vn(l,this),f[l.id]||(f[l.id]=l,l.recognizeWith(this)),this},dropRecognizeWith:function(l){return E(l,"dropRecognizeWith",this)?this:(l=Vn(l,this),delete this.simultaneous[l.id],this)},requireFailure:function(l){if(E(l,"requireFailure",this))return this;var f=this.requireFail;return l=Vn(l,this),Le(f,l)===-1&&(f.push(l),l.requireFailure(this)),this},dropRequireFailure:function(l){if(E(l,"dropRequireFailure",this))return this;l=Vn(l,this);var f=Le(this.requireFail,l);return f>-1&&this.requireFail.splice(f,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(l){return!!this.simultaneous[l.id]},emit:function(l){var f=this,u=this.state;function v(A){f.manager.emit(A,l)}u<_t&&v(f.options.event+Pa(u)),v(f.options.event),l.additionalEvent&&v(l.additionalEvent),u>=_t&&v(f.options.event+Pa(u))},tryEmit:function(l){if(this.canEmit())return this.emit(l);this.state=et},canEmit:function(){for(var l=0;l<this.requireFail.length;){if(!(this.requireFail[l].state&(et|qn)))return!1;l++}return!0},recognize:function(l){var f=R({},l);if(!F(this.options.enable,[this,f])){this.reset(),this.state=et;return}this.state&(ft|vn|et)&&(this.state=qn),this.state=this.process(f),this.state&(De|Vt|_t|vn)&&this.tryEmit(f)},process:function(l){},getTouchAction:function(){},reset:function(){}};function Pa(l){return l&vn?"cancel":l&_t?"end":l&Vt?"move":l&De?"start":""}function Ca(l){return l==T?"down":l==b?"up":l==d?"left":l==h?"right":""}function Vn(l,f){var u=f.manager;return u?u.get(l):l}function Ye(){ct.apply(this,arguments)}x(Ye,ct,{defaults:{pointers:1},attrTest:function(l){var f=this.options.pointers;return f===0||l.pointers.length===f},process:function(l){var f=this.state,u=l.eventType,v=f&(De|Vt),A=this.attrTest(l);return v&&(u&pe||!A)?f|vn:v||A?u&ee?f|_t:f&De?f|Vt:De:et}});function Gn(){Ye.apply(this,arguments),this.pX=null,this.pY=null}x(Gn,Ye,{defaults:{event:"pan",threshold:10,pointers:1,direction:S},getTouchAction:function(){var l=this.options.direction,f=[];return l&y&&f.push(pn),l&O&&f.push(hn),f},directionTest:function(l){var f=this.options,u=!0,v=l.distance,A=l.direction,N=l.deltaX,K=l.deltaY;return A&f.direction||(f.direction&y?(A=N===0?xt:N<0?d:h,u=N!=this.pX,v=Math.abs(l.deltaX)):(A=K===0?xt:K<0?b:T,u=K!=this.pY,v=Math.abs(l.deltaY))),l.direction=A,u&&v>f.threshold&&A&f.direction},attrTest:function(l){return Ye.prototype.attrTest.call(this,l)&&(this.state&De||!(this.state&De)&&this.directionTest(l))},emit:function(l){this.pX=l.deltaX,this.pY=l.deltaY;var f=Ca(l.direction);f&&(l.additionalEvent=this.options.event+f),this._super.emit.call(this,l)}});function Gr(){Ye.apply(this,arguments)}x(Gr,Ye,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Lt]},attrTest:function(l){return this._super.attrTest.call(this,l)&&(Math.abs(l.scale-1)>this.options.threshold||this.state&De)},emit:function(l){if(l.scale!==1){var f=l.scale<1?"in":"out";l.additionalEvent=this.options.event+f}this._super.emit.call(this,l)}});function Jr(){ct.apply(this,arguments),this._timer=null,this._input=null}x(Jr,ct,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Ia]},process:function(l){var f=this.options,u=l.pointers.length===f.pointers,v=l.distance<f.threshold,A=l.deltaTime>f.time;if(this._input=l,!v||!u||l.eventType&(ee|pe)&&!A)this.reset();else if(l.eventType&ce)this.reset(),this._timer=g(function(){this.state=ft,this.tryEmit()},f.time,this);else if(l.eventType&ee)return ft;return et},reset:function(){clearTimeout(this._timer)},emit:function(l){this.state===ft&&(l&&l.eventType&ee?this.manager.emit(this.options.event+"up",l):(this._input.timeStamp=p(),this.manager.emit(this.options.event,this._input)))}});function Zr(){Ye.apply(this,arguments)}x(Zr,Ye,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Lt]},attrTest:function(l){return this._super.attrTest.call(this,l)&&(Math.abs(l.rotation)>this.options.threshold||this.state&De)}});function Qr(){Ye.apply(this,arguments)}x(Qr,Ye,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:y|O,pointers:1},getTouchAction:function(){return Gn.prototype.getTouchAction.call(this)},attrTest:function(l){var f=this.options.direction,u;return f&(y|O)?u=l.overallVelocity:f&y?u=l.overallVelocityX:f&O&&(u=l.overallVelocityY),this._super.attrTest.call(this,l)&&f&l.offsetDirection&&l.distance>this.options.threshold&&l.maxPointers==this.options.pointers&&m(u)>this.options.velocity&&l.eventType&ee},emit:function(l){var f=Ca(l.offsetDirection);f&&this.manager.emit(this.options.event+f,l),this.manager.emit(this.options.event,l)}});function Jn(){ct.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}x(Jn,ct,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[qr]},process:function(l){var f=this.options,u=l.pointers.length===f.pointers,v=l.distance<f.threshold,A=l.deltaTime<f.time;if(this.reset(),l.eventType&ce&&this.count===0)return this.failTimeout();if(v&&A&&u){if(l.eventType!=ee)return this.failTimeout();var N=this.pTime?l.timeStamp-this.pTime<f.interval:!0,K=!this.pCenter||He(this.pCenter,l.center)<f.posThreshold;this.pTime=l.timeStamp,this.pCenter=l.center,!K||!N?this.count=1:this.count+=1,this._input=l;var ve=this.count%f.taps;if(ve===0)return this.hasRequireFailures()?(this._timer=g(function(){this.state=ft,this.tryEmit()},f.interval,this),De):ft}return et},failTimeout:function(){return this._timer=g(function(){this.state=et},this.options.interval,this),et},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ft&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function ut(l,f){return f=f||{},f.recognizers=B(f.recognizers,ut.defaults.preset),new ei(l,f)}ut.VERSION="2.0.7",ut.defaults={domEvents:!1,touchAction:ka,enable:!0,inputTarget:null,inputClass:null,preset:[[Zr,{enable:!1}],[Gr,{enable:!1},["rotate"]],[Qr,{direction:y}],[Gn,{direction:y},["swipe"]],[Jn],[Jn,{event:"doubletap",taps:2},["tap"]],[Jr]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var _l=1,Sa=2;function ei(l,f){this.options=R({},ut.defaults,f||{}),this.options.inputTarget=this.options.inputTarget||l,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=l,this.input=U(this),this.touchAction=new Vr(this,this.options.touchAction),Na(this,!0),k(this.options.recognizers,function(u){var v=this.add(new u[0](u[1]));u[2]&&v.recognizeWith(u[2]),u[3]&&v.requireFailure(u[3])},this)}ei.prototype={set:function(l){return R(this.options,l),l.touchAction&&this.touchAction.update(),l.inputTarget&&(this.input.destroy(),this.input.target=l.inputTarget,this.input.init()),this},stop:function(l){this.session.stopped=l?Sa:_l},recognize:function(l){var f=this.session;if(!f.stopped){this.touchAction.preventDefaults(l);var u,v=this.recognizers,A=f.curRecognizer;(!A||A&&A.state&ft)&&(A=f.curRecognizer=null);for(var N=0;N<v.length;)u=v[N],f.stopped!==Sa&&(!A||u==A||u.canRecognizeWith(A))?u.recognize(l):u.reset(),!A&&u.state&(De|Vt|_t)&&(A=f.curRecognizer=u),N++}},get:function(l){if(l instanceof ct)return l;for(var f=this.recognizers,u=0;u<f.length;u++)if(f[u].options.event==l)return f[u];return null},add:function(l){if(E(l,"add",this))return this;var f=this.get(l.options.event);return f&&this.remove(f),this.recognizers.push(l),l.manager=this,this.touchAction.update(),l},remove:function(l){if(E(l,"remove",this))return this;if(l=this.get(l),l){var f=this.recognizers,u=Le(f,l);u!==-1&&(f.splice(u,1),this.touchAction.update())}return this},on:function(l,f){if(l!==i&&f!==i){var u=this.handlers;return k(ke(l),function(v){u[v]=u[v]||[],u[v].push(f)}),this}},off:function(l,f){if(l!==i){var u=this.handlers;return k(ke(l),function(v){f?u[v]&&u[v].splice(Le(u[v],f),1):delete u[v]}),this}},emit:function(l,f){this.options.domEvents&&wl(l,f);var u=this.handlers[l]&&this.handlers[l].slice();if(!(!u||!u.length)){f.type=l,f.preventDefault=function(){f.srcEvent.preventDefault()};for(var v=0;v<u.length;)u[v](f),v++}},destroy:function(){this.element&&Na(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function Na(l,f){var u=l.element;if(u.style){var v;k(l.options.cssProps,function(A,N){v=yt(u.style,N),f?(l.oldCssProps[v]=u.style[v],u.style[v]=A):u.style[v]=l.oldCssProps[v]||""}),f||(l.oldCssProps={})}}function wl(l,f){var u=n.createEvent("Event");u.initEvent(l,!0,!0),u.gesture=f,f.target.dispatchEvent(u)}R(ut,{INPUT_START:ce,INPUT_MOVE:Qe,INPUT_END:ee,INPUT_CANCEL:pe,STATE_POSSIBLE:qn,STATE_BEGAN:De,STATE_CHANGED:Vt,STATE_ENDED:_t,STATE_RECOGNIZED:ft,STATE_CANCELLED:vn,STATE_FAILED:et,DIRECTION_NONE:xt,DIRECTION_LEFT:d,DIRECTION_RIGHT:h,DIRECTION_UP:b,DIRECTION_DOWN:T,DIRECTION_HORIZONTAL:y,DIRECTION_VERTICAL:O,DIRECTION_ALL:S,Manager:ei,Input:w,TouchAction:Vr,TouchInput:Xn,MouseInput:Bn,PointerEventInput:Xr,TouchMouseInput:Kr,SingleTouchInput:wa,Recognizer:ct,AttrRecognizer:Ye,Tap:Jn,Pan:Gn,Swipe:Qr,Pinch:Gr,Rotate:Zr,Press:Jr,on:le,off:Y,each:k,merge:_,extend:q,assign:R,inherit:x,bindFn:C,prefixed:yt});var Tl=typeof t<"u"?t:typeof self<"u"?self:{};Tl.Hammer=ut,typeof i=="function"&&i.amd?i(function(){return ut}):e.exports?e.exports=ut:t[r]=ut})(window,document,"Hammer")})(eu);const ss=Ai;function li(e,t=1500){const n=document.createElement("div");n.innerText=e,n.style.position="absolute",n.style.top="30%",n.style.left="50%",n.style.transform="translate(-50%, -50%)",n.style.backgroundColor="rgba(0, 0, 0, 0.8)",n.style.color="white",n.style.padding="10px",n.style.borderRadius="5px",n.style.zIndex="9999",n.style.userSelect="none",document.body.appendChild(n),n.addEventListener("click",()=>{n.style.animation="fade-out 0.4s",n.addEventListener("animationend",()=>{n.remove()})}),setTimeout(()=>{n.style.animation="fade-out 0.4s",n.addEventListener("animationend",()=>{n.remove()})},t)}const tu=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},nu={setup(){const e={topRow:["Q","W","E","R","T","Y","U","I","O","P"],middleRow:["A","S","D","F","G","H","J","K","L"],bottomRow:["Z","X","C","V","B","N","M"]},t=[{letters:[" "," "," "," "," "],color:["empty","empty","empty","empty","empty"],isValidInput:!0},{letters:[" "," "," "," "," "],color:["empty","empty","empty","empty","empty"],isValidInput:!0},{letters:[" "," "," "," "," "],color:["empty","empty","empty","empty","empty"],isValidInput:!0},{letters:[" "," "," "," "," "],color:["empty","empty","empty","empty","empty"],isValidInput:!0},{letters:[" "," "," "," "," "],color:["empty","empty","empty","empty","empty"],isValidInput:!0}],n=Tt(JSON.parse(JSON.stringify(t))),r=Tt([]),i=Tt(0),a=Tt(0),s=Tt({}),o=Tt(""),c=Tt(0),m=Tt(0);function p(_){const x=n.value[i.value],C=x.letters.every(F=>F!==" ");if(_==="BACKSPACE"){a.value!==0&&(a.value--,x.letters[a.value]=" ",x.color[a.value]="empty");return}if(a.value<=4&&_!=="ENTER"){x.letters[a.value]=_,x.color[a.value]="pending",a.value++;return}if(_==="ENTER"&&!C){x.isValidInput=!1,setTimeout(()=>{x.isValidInput=!0},400),li("Not enough letters");return}if(_==="ENTER"&&C&&!r.value.includes(x.letters.join("").toLowerCase())){x.isValidInput=!1,setTimeout(()=>{x.isValidInput=!0},400),li("Not in word list");return}_==="ENTER"&&C&&E(x)}function g(_){return new Promise(x=>{document.removeEventListener("keydown",k);const C=o.value.split(""),F={};C.map(Y=>{F[Y]?F[Y]+=1:F[Y]=1});for(let Y=0;Y<C.length;Y++){const de=_.letters[Y];de===C[Y]&&(F[de]===1?delete F[de]:F[de]--)}let B=0;const le=setInterval(()=>{const Y=_.letters[B];Y===C[B]?(_.color[B]="flip right-place",s.value[Y]="key-right-place"):Y in F?(F[Y]===1?delete F[Y]:F[Y]--,_.color[B]="flip wrong-place",s.value[Y]!=="key-right-place"&&(s.value[Y]="key-wrong-place")):(_.color[B]="flip not-exist",s.value[Y]!=="key-right-place"&&s.value[Y]!=="key-wrong-place"&&(s.value[Y]="key-not-exist")),B++,B===5&&(clearInterval(le),x())},300)})}async function E(_,x,C){await g(_),o.value===_.letters.join("")?setTimeout(()=>{R("win")},500):i.value===4?setTimeout(()=>{R("lose")},500):setTimeout(()=>{i.value++,a.value=0,document.addEventListener("keydown",k)},500)}function k(_){const x=_.key.toUpperCase();(e.topRow.includes(x)||e.middleRow.includes(x)||e.bottomRow.includes(x))&&p(x),(x==="BACKSPACE"||x==="ENTER")&&p(x)}function z(){fetch("./words.txt").then(_=>_.text()).then(_=>{let x=_.replace(/\r/g,"").split(`
`);const C=Math.floor(Math.random()*x.length);o.value=x[C].toUpperCase(),console.log(o.value)})}function R(_){let x;c.value++,_==="win"?(m.value++,x=`You win! You've won ${m.value} out of ${c.value} games! (${(m.value/c.value*100).toFixed(2)}%)`):x=`The word was: ${o.value}! You've won ${m.value} out of ${c.value} games! (${(m.value/c.value*100).toFixed(2)}%)`,li(x,3e3),setTimeout(()=>{n.value=JSON.parse(JSON.stringify(t)),s.value={},i.value=0,a.value=0,z(),document.addEventListener("keydown",k)},4e3)}return mo(async()=>{z(),fetch("./dictionary.txt").then(F=>F.text()).then(F=>{r.value=F.replace(/\r/g,"").split(`
`)}),document.addEventListener("keydown",k);const _=document.querySelector("body"),x=new ss.Manager(_),C=new ss.Tap({event:"doubletap",taps:2});x.add(C),x.on("doubletap",F=>{F.preventDefault()})}),ho(()=>{document.removeEventListener("keydown",k)}),{solution:o,dictionary:r,keyboard:e,keyboardColors:s,gameRows:n,handleKeyDown:k,played:c,won:m,alert:_=>window.alert(_)}}},Co=e=>(If("data-v-dd46b895"),e=e(),Pf(),e),ru={class:"max-h-full min-h-full flex flex-col justify-center items-center"},iu={class:"-mt-12 lg:mt-0 mx-auto flex justify-between w-[80%] max-w-[80%] sm:max-w-lg md:max-w-xl px-4 sm:px-8 bg-gray-700 py-4 rounded-xl bg-opacity-60"},au=Co(()=>ye("h1",{class:"text-2xl sm:text-3xl md:text-4xl tracking-widest"},"WORDLE",-1)),su={class:"flex flex-col items-center"},ou={class:"flex flex-col my-10"},lu={class:"flex flex-row"},fu={class:"flex flex-col bg-gray-700 bg-opacity-50 rounded-2xl py-4 px-2 sm:px-6"},cu={class:"flex flex-row justify-center"},uu=["onClick"],du={class:"flex flex-row justify-center"},mu=["onClick"],hu={class:"flex flex-row justify-center"},pu=Co(()=>ye("svg",{xmlns:`http
            ://www.w3.org/2000/svg`,height:"20",viewBox:"0 0 24 24",width:"36"},[ye("path",{fill:"white",d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"})],-1)),vu=[pu],gu=["onClick"];function bu(e,t,n,r,i,a){const s=Vf("font-awesome-icon");return Ue(),$e("div",ru,[ye("div",iu,[ye("button",{onClick:t[0]||(t[0]=o=>r.alert("the cake is a lie"))},[Ne(s,{icon:"fa-solid fa-circle-question",class:"text-xl lg:text-2xl"})]),au,ye("button",{onClick:t[1]||(t[1]=o=>r.alert("42"))},[Ne(s,{icon:"fa-solid fa-gear",class:"text-xl lg:text-2xl"})])]),ye("div",su,[ye("div",ou,[(Ue(!0),$e(Se,null,gn(r.gameRows,(o,c)=>(Ue(),$e("div",{key:c,class:Ot([{jiggle:!o.isValidInput},"flex flex-row justify-between items-center select-none"])},[ye("div",lu,[(Ue(!0),$e(Se,null,gn(o.letters,(m,p)=>(Ue(),$e("div",{key:p,class:Ot([o.color[p],"flex justify-center items-center text-xl sm:text-2xl m-1 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-sm font-bold"])},Zn(m),3))),128))])],2))),128))])]),ye("div",fu,[ye("div",cu,[(Ue(!0),$e(Se,null,gn(r.keyboard.topRow,o=>(Ue(),$e("button",{key:o,class:Ot([r.keyboardColors[o],"keyboard-key m-[3px] p-1.5 py-2.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline"]),onClick:c=>e.game(o)},Zn(o),11,uu))),128))]),ye("div",du,[(Ue(!0),$e(Se,null,gn(r.keyboard.middleRow,o=>(Ue(),$e("button",{key:o,class:Ot([r.keyboardColors[o],"keyboard-key m-[3px] p-1.5 py-2.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline"]),onClick:c=>e.game(o)},Zn(o),11,mu))),128))]),ye("div",hu,[ye("button",{class:"keyboard-key m-[3px] p-1.5 py-2.5 px-1.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline",onClick:t[2]||(t[2]=o=>e.game("BACKSPACE"))},vu),(Ue(!0),$e(Se,null,gn(r.keyboard.bottomRow,o=>(Ue(),$e("button",{key:o,class:Ot([r.keyboardColors[o],"keyboard-key m-[3px] p-1.5 py-2.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline"]),onClick:c=>e.game(o)},Zn(o),11,gu))),128)),ye("button",{class:"keyboard-key m-[3px] p-1.5 py-2.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline",onClick:t[3]||(t[3]=o=>e.game("ENTER"))}," ENTER ")])])])}const yu=tu(nu,[["render",bu],["__scopeId","data-v-dd46b895"]]),xu={__name:"App",setup(e){return(t,n)=>(Ue(),vc(yu))}};function os(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?os(Object(n),!0).forEach(function(r){he(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):os(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ar(e){return Ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ar(e)}function _u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ls(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function wu(e,t,n){return t&&ls(e.prototype,t),n&&ls(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sa(e,t){return Eu(e)||Ou(e,t)||So(e,t)||Iu()}function Un(e){return Tu(e)||Au(e)||So(e)||ku()}function Tu(e){if(Array.isArray(e))return Oi(e)}function Eu(e){if(Array.isArray(e))return e}function Au(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ou(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,s,o;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(c){a=!0,o=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw o}}return r}}function So(e,t){if(e){if(typeof e=="string")return Oi(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Oi(e,t)}}function Oi(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ku(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Iu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var fs=function(){},oa={},No={},Mo=null,Ro={mark:fs,measure:fs};try{typeof window<"u"&&(oa=window),typeof document<"u"&&(No=document),typeof MutationObserver<"u"&&(Mo=MutationObserver),typeof performance<"u"&&(Ro=performance)}catch{}var Pu=oa.navigator||{},cs=Pu.userAgent,us=cs===void 0?"":cs,Ct=oa,re=No,ds=Mo,ar=Ro;Ct.document;var bt=!!re.documentElement&&!!re.head&&typeof re.addEventListener=="function"&&typeof re.createElement=="function",Lo=~us.indexOf("MSIE")||~us.indexOf("Trident/"),sr,or,lr,fr,cr,ht="___FONT_AWESOME___",ki=16,Fo="fa",Do="svg-inline--fa",Bt="data-fa-i2svg",Ii="data-fa-pseudo-element",Cu="data-fa-pseudo-element-pending",la="data-prefix",fa="data-icon",ms="fontawesome-i2svg",Su="async",Nu=["HTML","HEAD","STYLE","SCRIPT"],Uo=function(){try{return!0}catch{return!1}}(),ne="classic",oe="sharp",ca=[ne,oe];function jn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ne]}})}var Mn=jn((sr={},he(sr,ne,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),he(sr,oe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),sr)),Rn=jn((or={},he(or,ne,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),he(or,oe,{solid:"fass",regular:"fasr"}),or)),Ln=jn((lr={},he(lr,ne,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),he(lr,oe,{fass:"fa-solid",fasr:"fa-regular"}),lr)),Mu=jn((fr={},he(fr,ne,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),he(fr,oe,{"fa-solid":"fass","fa-regular":"fasr"}),fr)),Ru=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,jo="fa-layers-text",Lu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Fu=jn((cr={},he(cr,ne,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),he(cr,oe,{900:"fass",400:"fasr"}),cr)),zo=[1,2,3,4,5,6,7,8,9,10],Du=zo.concat([11,12,13,14,15,16,17,18,19,20]),Uu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ht={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Fn=new Set;Object.keys(Rn[ne]).map(Fn.add.bind(Fn));Object.keys(Rn[oe]).map(Fn.add.bind(Fn));var ju=[].concat(ca,Un(Fn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ht.GROUP,Ht.SWAP_OPACITY,Ht.PRIMARY,Ht.SECONDARY]).concat(zo.map(function(e){return"".concat(e,"x")})).concat(Du.map(function(e){return"w-".concat(e)})),Tn=Ct.FontAwesomeConfig||{};function zu(e){var t=re.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Hu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(re&&typeof re.querySelector=="function"){var Yu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Yu.forEach(function(e){var t=sa(e,2),n=t[0],r=t[1],i=Hu(zu(n));i!=null&&(Tn[r]=i)})}var Ho={styleDefault:"solid",familyDefault:"classic",cssPrefix:Fo,replacementClass:Do,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Tn.familyPrefix&&(Tn.cssPrefix=Tn.familyPrefix);var ln=M(M({},Ho),Tn);ln.autoReplaceSvg||(ln.observeMutations=!1);var D={};Object.keys(Ho).forEach(function(e){Object.defineProperty(D,e,{enumerable:!0,set:function(n){ln[e]=n,En.forEach(function(r){return r(D)})},get:function(){return ln[e]}})});Object.defineProperty(D,"familyPrefix",{enumerable:!0,set:function(t){ln.cssPrefix=t,En.forEach(function(n){return n(D)})},get:function(){return ln.cssPrefix}});Ct.FontAwesomeConfig=D;var En=[];function $u(e){return En.push(e),function(){En.splice(En.indexOf(e),1)}}var Et=ki,at={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Wu(e){if(!(!e||!bt)){var t=re.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=re.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],s=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=a)}return re.head.insertBefore(t,r),e}}var Bu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Dn(){for(var e=12,t="";e-- >0;)t+=Bu[Math.random()*62|0];return t}function dn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ua(e){return e.classList?dn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Yo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Yo(e[n]),'" ')},"").trim()}function Hr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function da(e){return e.size!==at.size||e.x!==at.x||e.y!==at.y||e.rotate!==at.rotate||e.flipX||e.flipY}function Ku(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(a," ").concat(s," ").concat(o)},m={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:m}}function qu(e){var t=e.transform,n=e.width,r=n===void 0?ki:n,i=e.height,a=i===void 0?ki:i,s=e.startCentered,o=s===void 0?!1:s,c="";return o&&Lo?c+="translate(".concat(t.x/Et-r/2,"em, ").concat(t.y/Et-a/2,"em) "):o?c+="translate(calc(-50% + ".concat(t.x/Et,"em), calc(-50% + ").concat(t.y/Et,"em)) "):c+="translate(".concat(t.x/Et,"em, ").concat(t.y/Et,"em) "),c+="scale(".concat(t.size/Et*(t.flipX?-1:1),", ").concat(t.size/Et*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var Vu=`:root, :host {
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
}`;function $o(){var e=Fo,t=Do,n=D.cssPrefix,r=D.replacementClass,i=Vu;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return i}var hs=!1;function fi(){D.autoAddCss&&!hs&&(Wu($o()),hs=!0)}var Gu={mixout:function(){return{dom:{css:$o,insertCss:fi}}},hooks:function(){return{beforeDOMElementCreation:function(){fi()},beforeI2svg:function(){fi()}}}},pt=Ct||{};pt[ht]||(pt[ht]={});pt[ht].styles||(pt[ht].styles={});pt[ht].hooks||(pt[ht].hooks={});pt[ht].shims||(pt[ht].shims=[]);var Ve=pt[ht],Wo=[],Ju=function e(){re.removeEventListener("DOMContentLoaded",e),Or=1,Wo.map(function(t){return t()})},Or=!1;bt&&(Or=(re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(re.readyState),Or||re.addEventListener("DOMContentLoaded",Ju));function Zu(e){bt&&(Or?setTimeout(e,0):Wo.push(e))}function zn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Yo(e):"<".concat(t," ").concat(Xu(r),">").concat(a.map(zn).join(""),"</").concat(t,">")}function ps(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Qu=function(t,n){return function(r,i,a,s){return t.call(n,r,i,a,s)}},ci=function(t,n,r,i){var a=Object.keys(t),s=a.length,o=i!==void 0?Qu(n,i):n,c,m,p;for(r===void 0?(c=1,p=t[a[0]]):(c=0,p=r);c<s;c++)m=a[c],p=o(p,t[m],m,t);return p};function ed(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Pi(e){var t=ed(e);return t.length===1?t[0].toString(16):null}function td(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function vs(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ci(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=vs(t);typeof Ve.hooks.addPack=="function"&&!i?Ve.hooks.addPack(e,vs(t)):Ve.styles[e]=M(M({},Ve.styles[e]||{}),a),e==="fas"&&Ci("fa",t)}var ur,dr,mr,Jt=Ve.styles,nd=Ve.shims,rd=(ur={},he(ur,ne,Object.values(Ln[ne])),he(ur,oe,Object.values(Ln[oe])),ur),ma=null,Bo={},Xo={},Ko={},qo={},Vo={},id=(dr={},he(dr,ne,Object.keys(Mn[ne])),he(dr,oe,Object.keys(Mn[oe])),dr);function ad(e){return~ju.indexOf(e)}function sd(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!ad(i)?i:null}var Go=function(){var t=function(a){return ci(Jt,function(s,o,c){return s[c]=ci(o,a,{}),s},{})};Bo=t(function(i,a,s){if(a[3]&&(i[a[3]]=s),a[2]){var o=a[2].filter(function(c){return typeof c=="number"});o.forEach(function(c){i[c.toString(16)]=s})}return i}),Xo=t(function(i,a,s){if(i[s]=s,a[2]){var o=a[2].filter(function(c){return typeof c=="string"});o.forEach(function(c){i[c]=s})}return i}),Vo=t(function(i,a,s){var o=a[2];return i[s]=s,o.forEach(function(c){i[c]=s}),i});var n="far"in Jt||D.autoFetchSvg,r=ci(nd,function(i,a){var s=a[0],o=a[1],c=a[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(i.names[s]={prefix:o,iconName:c}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:o,iconName:c}),i},{names:{},unicodes:{}});Ko=r.names,qo=r.unicodes,ma=Yr(D.styleDefault,{family:D.familyDefault})};$u(function(e){ma=Yr(e.styleDefault,{family:D.familyDefault})});Go();function ha(e,t){return(Bo[e]||{})[t]}function od(e,t){return(Xo[e]||{})[t]}function Yt(e,t){return(Vo[e]||{})[t]}function Jo(e){return Ko[e]||{prefix:null,iconName:null}}function ld(e){var t=qo[e],n=ha("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function St(){return ma}var pa=function(){return{prefix:null,iconName:null,rest:[]}};function Yr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ne:n,i=Mn[r][e],a=Rn[r][e]||Rn[r][i],s=e in Ve.styles?e:null;return a||s||null}var gs=(mr={},he(mr,ne,Object.keys(Ln[ne])),he(mr,oe,Object.keys(Ln[oe])),mr);function $r(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},he(t,ne,"".concat(D.cssPrefix,"-").concat(ne)),he(t,oe,"".concat(D.cssPrefix,"-").concat(oe)),t),s=null,o=ne;(e.includes(a[ne])||e.some(function(m){return gs[ne].includes(m)}))&&(o=ne),(e.includes(a[oe])||e.some(function(m){return gs[oe].includes(m)}))&&(o=oe);var c=e.reduce(function(m,p){var g=sd(D.cssPrefix,p);if(Jt[p]?(p=rd[o].includes(p)?Mu[o][p]:p,s=p,m.prefix=p):id[o].indexOf(p)>-1?(s=p,m.prefix=Yr(p,{family:o})):g?m.iconName=g:p!==D.replacementClass&&p!==a[ne]&&p!==a[oe]&&m.rest.push(p),!i&&m.prefix&&m.iconName){var E=s==="fa"?Jo(m.iconName):{},k=Yt(m.prefix,m.iconName);E.prefix&&(s=null),m.iconName=E.iconName||k||m.iconName,m.prefix=E.prefix||m.prefix,m.prefix==="far"&&!Jt.far&&Jt.fas&&!D.autoFetchSvg&&(m.prefix="fas")}return m},pa());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&o===oe&&(Jt.fass||D.autoFetchSvg)&&(c.prefix="fass",c.iconName=Yt(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||s==="fa")&&(c.prefix=St()||"fas"),c}var fd=function(){function e(){_u(this,e),this.definitions={}}return wu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=M(M({},n.definitions[o]||{}),s[o]),Ci(o,s[o]);var c=Ln[ne][o];c&&Ci(c,s[o]),Go()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var s=i[a],o=s.prefix,c=s.iconName,m=s.icon,p=m[2];n[o]||(n[o]={}),p.length>0&&p.forEach(function(g){typeof g=="string"&&(n[o][g]=m)}),n[o][c]=m}),n}}]),e}(),bs=[],Zt={},rn={},cd=Object.keys(rn);function ud(e,t){var n=t.mixoutsTo;return bs=e,Zt={},Object.keys(rn).forEach(function(r){cd.indexOf(r)===-1&&delete rn[r]}),bs.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),Ar(i[s])==="object"&&Object.keys(i[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(s){Zt[s]||(Zt[s]=[]),Zt[s].push(a[s])})}r.provides&&r.provides(rn)}),n}function Si(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Zt[e]||[];return a.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function Xt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Zt[e]||[];i.forEach(function(a){a.apply(null,n)})}function vt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return rn[e]?rn[e].apply(null,t):void 0}function Ni(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||St();if(t)return t=Yt(n,t)||t,ps(Zo.definitions,n,t)||ps(Ve.styles,n,t)}var Zo=new fd,dd=function(){D.autoReplaceSvg=!1,D.observeMutations=!1,Xt("noAuto")},md={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return bt?(Xt("beforeI2svg",t),vt("pseudoElements2svg",t),vt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;D.autoReplaceSvg===!1&&(D.autoReplaceSvg=!0),D.observeMutations=!0,Zu(function(){pd({autoReplaceSvgRoot:n}),Xt("watch",t)})}},hd={icon:function(t){if(t===null)return null;if(Ar(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Yt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Yr(t[0]);return{prefix:r,iconName:Yt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(D.cssPrefix,"-"))>-1||t.match(Ru))){var i=$r(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||St(),iconName:Yt(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=St();return{prefix:a,iconName:Yt(a,t)||t}}}},Re={noAuto:dd,config:D,dom:md,parse:hd,library:Zo,findIconDefinition:Ni,toHtml:zn},pd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?re:n;(Object.keys(Ve.styles).length>0||D.autoFetchSvg)&&bt&&D.autoReplaceSvg&&Re.dom.i2svg({node:r})};function Wr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return zn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(bt){var r=re.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function vd(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,s=e.transform;if(da(s)&&n.found&&!r.found){var o=n.width,c=n.height,m={x:o/c/2,y:.5};i.style=Hr(M(M({},a),{},{"transform-origin":"".concat(m.x+s.x/16,"em ").concat(m.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function gd(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,s=a===!0?"".concat(t,"-").concat(D.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:s}),children:r}]}]}function va(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,s=e.transform,o=e.symbol,c=e.title,m=e.maskId,p=e.titleId,g=e.extra,E=e.watchable,k=E===void 0?!1:E,z=r.found?r:n,R=z.width,q=z.height,_=i==="fak",x=[D.replacementClass,a?"".concat(D.cssPrefix,"-").concat(a):""].filter(function(fe){return g.classes.indexOf(fe)===-1}).filter(function(fe){return fe!==""||!!fe}).concat(g.classes).join(" "),C={children:[],attributes:M(M({},g.attributes),{},{"data-prefix":i,"data-icon":a,class:x,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(q)})},F=_&&!~g.classes.indexOf("fa-fw")?{width:"".concat(R/q*16*.0625,"em")}:{};k&&(C.attributes[Bt]=""),c&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(p||Dn())},children:[c]}),delete C.attributes.title);var B=M(M({},C),{},{prefix:i,iconName:a,main:n,mask:r,maskId:m,transform:s,symbol:o,styles:M(M({},F),g.styles)}),le=r.found&&n.found?vt("generateAbstractMask",B)||{children:[],attributes:{}}:vt("generateAbstractIcon",B)||{children:[],attributes:{}},Y=le.children,de=le.attributes;return B.children=Y,B.attributes=de,o?gd(B):vd(B)}function ys(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,s=e.extra,o=e.watchable,c=o===void 0?!1:o,m=M(M(M({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")});c&&(m[Bt]="");var p=M({},s.styles);da(i)&&(p.transform=qu({transform:i,startCentered:!0,width:n,height:r}),p["-webkit-transform"]=p.transform);var g=Hr(p);g.length>0&&(m.style=g);var E=[];return E.push({tag:"span",attributes:m,children:[t]}),a&&E.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),E}function bd(e){var t=e.content,n=e.title,r=e.extra,i=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Hr(r.styles);a.length>0&&(i.style=a);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var ui=Ve.styles;function Mi(e){var t=e[0],n=e[1],r=e.slice(4),i=sa(r,1),a=i[0],s=null;return Array.isArray(a)?s={tag:"g",attributes:{class:"".concat(D.cssPrefix,"-").concat(Ht.GROUP)},children:[{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(Ht.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(Ht.PRIMARY),fill:"currentColor",d:a[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:s}}var yd={found:!1,width:512,height:512};function xd(e,t){!Uo&&!D.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ri(e,t){var n=t;return t==="fa"&&D.styleDefault!==null&&(t=St()),new Promise(function(r,i){if(vt("missingIconAbstract"),n==="fa"){var a=Jo(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&ui[t]&&ui[t][e]){var s=ui[t][e];return r(Mi(s))}xd(e,t),r(M(M({},yd),{},{icon:D.showMissingIcons&&e?vt("missingIconAbstract")||{}:{}}))})}var xs=function(){},Li=D.measurePerformance&&ar&&ar.mark&&ar.measure?ar:{mark:xs,measure:xs},xn='FA "6.3.0"',_d=function(t){return Li.mark("".concat(xn," ").concat(t," begins")),function(){return Qo(t)}},Qo=function(t){Li.mark("".concat(xn," ").concat(t," ends")),Li.measure("".concat(xn," ").concat(t),"".concat(xn," ").concat(t," begins"),"".concat(xn," ").concat(t," ends"))},ga={begin:_d,end:Qo},yr=function(){};function _s(e){var t=e.getAttribute?e.getAttribute(Bt):null;return typeof t=="string"}function wd(e){var t=e.getAttribute?e.getAttribute(la):null,n=e.getAttribute?e.getAttribute(fa):null;return t&&n}function Td(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(D.replacementClass)}function Ed(){if(D.autoReplaceSvg===!0)return xr.replace;var e=xr[D.autoReplaceSvg];return e||xr.replace}function Ad(e){return re.createElementNS("http://www.w3.org/2000/svg",e)}function Od(e){return re.createElement(e)}function el(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ad:Od:n;if(typeof e=="string")return re.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var a=e.children||[];return a.forEach(function(s){i.appendChild(el(s,{ceFn:r}))}),i}function kd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var xr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(el(i),n)}),n.getAttribute(Bt)===null&&D.keepOriginalSource){var r=re.createComment(kd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ua(n).indexOf(D.replacementClass))return xr.replace(t);var i=new RegExp("".concat(D.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(o,c){return c===D.replacementClass||c.match(i)?o.toSvg.push(c):o.toNode.push(c),o},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var s=r.map(function(o){return zn(o)}).join(`
`);n.setAttribute(Bt,""),n.innerHTML=s}};function ws(e){e()}function tl(e,t){var n=typeof t=="function"?t:yr;if(e.length===0)n();else{var r=ws;D.mutateApproach===Su&&(r=Ct.requestAnimationFrame||ws),r(function(){var i=Ed(),a=ga.begin("mutate");e.map(i),a(),n()})}}var ba=!1;function nl(){ba=!0}function Fi(){ba=!1}var kr=null;function Ts(e){if(ds&&D.observeMutations){var t=e.treeCallback,n=t===void 0?yr:t,r=e.nodeCallback,i=r===void 0?yr:r,a=e.pseudoElementsCallback,s=a===void 0?yr:a,o=e.observeMutationsRoot,c=o===void 0?re:o;kr=new ds(function(m){if(!ba){var p=St();dn(m).forEach(function(g){if(g.type==="childList"&&g.addedNodes.length>0&&!_s(g.addedNodes[0])&&(D.searchPseudoElements&&s(g.target),n(g.target)),g.type==="attributes"&&g.target.parentNode&&D.searchPseudoElements&&s(g.target.parentNode),g.type==="attributes"&&_s(g.target)&&~Uu.indexOf(g.attributeName))if(g.attributeName==="class"&&wd(g.target)){var E=$r(ua(g.target)),k=E.prefix,z=E.iconName;g.target.setAttribute(la,k||p),z&&g.target.setAttribute(fa,z)}else Td(g.target)&&i(g.target)})}}),bt&&kr.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Id(){kr&&kr.disconnect()}function Pd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),s=a[0],o=a.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function Cd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=$r(ua(e));return i.prefix||(i.prefix=St()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=od(i.prefix,e.innerText)||ha(i.prefix,Pi(e.innerText))),!i.iconName&&D.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Sd(e){var t=dn(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return D.autoA11y&&(n?t["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(r||Dn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Nd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:at,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Es(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Cd(e),r=n.iconName,i=n.prefix,a=n.rest,s=Sd(e),o=Si("parseNodeAttributes",{},e),c=t.styleParser?Pd(e):[];return M({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:at,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:c,attributes:s}},o)}var Md=Ve.styles;function rl(e){var t=D.autoReplaceSvg==="nest"?Es(e,{styleParser:!1}):Es(e);return~t.extra.classes.indexOf(jo)?vt("generateLayersText",e,t):vt("generateSvgReplacementMutation",e,t)}var Nt=new Set;ca.map(function(e){Nt.add("fa-".concat(e))});Object.keys(Mn[ne]).map(Nt.add.bind(Nt));Object.keys(Mn[oe]).map(Nt.add.bind(Nt));Nt=Un(Nt);function As(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!bt)return Promise.resolve();var n=re.documentElement.classList,r=function(g){return n.add("".concat(ms,"-").concat(g))},i=function(g){return n.remove("".concat(ms,"-").concat(g))},a=D.autoFetchSvg?Nt:ca.map(function(p){return"fa-".concat(p)}).concat(Object.keys(Md));a.includes("fa")||a.push("fa");var s=[".".concat(jo,":not([").concat(Bt,"])")].concat(a.map(function(p){return".".concat(p,":not([").concat(Bt,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=dn(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),i("complete");else return Promise.resolve();var c=ga.begin("onTree"),m=o.reduce(function(p,g){try{var E=rl(g);E&&p.push(E)}catch(k){Uo||k.name==="MissingIcon"&&console.error(k)}return p},[]);return new Promise(function(p,g){Promise.all(m).then(function(E){tl(E,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),c(),p()})}).catch(function(E){c(),g(E)})})}function Rd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;rl(e).then(function(n){n&&tl([n],t)})}function Ld(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ni(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Ni(i||{})),e(r,M(M({},n),{},{mask:i}))}}var Fd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?at:r,a=n.symbol,s=a===void 0?!1:a,o=n.mask,c=o===void 0?null:o,m=n.maskId,p=m===void 0?null:m,g=n.title,E=g===void 0?null:g,k=n.titleId,z=k===void 0?null:k,R=n.classes,q=R===void 0?[]:R,_=n.attributes,x=_===void 0?{}:_,C=n.styles,F=C===void 0?{}:C;if(t){var B=t.prefix,le=t.iconName,Y=t.icon;return Wr(M({type:"icon"},t),function(){return Xt("beforeDOMElementCreation",{iconDefinition:t,params:n}),D.autoA11y&&(E?x["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(z||Dn()):(x["aria-hidden"]="true",x.focusable="false")),va({icons:{main:Mi(Y),mask:c?Mi(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:le,transform:M(M({},at),i),symbol:s,title:E,maskId:p,titleId:z,extra:{attributes:x,styles:F,classes:q}})})}},Dd={mixout:function(){return{icon:Ld(Fd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=As,n.nodeCallback=Rd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?re:r,a=n.callback,s=a===void 0?function(){}:a;return As(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,s=r.titleId,o=r.prefix,c=r.transform,m=r.symbol,p=r.mask,g=r.maskId,E=r.extra;return new Promise(function(k,z){Promise.all([Ri(i,o),p.iconName?Ri(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var q=sa(R,2),_=q[0],x=q[1];k([n,va({icons:{main:_,mask:x},prefix:o,iconName:i,transform:c,symbol:m,maskId:g,title:a,titleId:s,extra:E,watchable:!0})])}).catch(z)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,s=n.transform,o=n.styles,c=Hr(o);c.length>0&&(i.style=c);var m;return da(s)&&(m=vt("generateAbstractTransformGrouping",{main:a,transform:s,containerWidth:a.width,iconWidth:a.width})),r.push(m||a.icon),{children:r,attributes:i}}}},Ud={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Wr({type:"layer"},function(){Xt("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(c){s=s.concat(c.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(D.cssPrefix,"-layers")].concat(Un(a)).join(" ")},children:s}]})}}}},jd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,s=r.classes,o=s===void 0?[]:s,c=r.attributes,m=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return Wr({type:"counter",content:n},function(){return Xt("beforeDOMElementCreation",{content:n,params:r}),bd({content:n.toString(),title:a,extra:{attributes:m,styles:g,classes:["".concat(D.cssPrefix,"-layers-counter")].concat(Un(o))}})})}}}},zd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?at:i,s=r.title,o=s===void 0?null:s,c=r.classes,m=c===void 0?[]:c,p=r.attributes,g=p===void 0?{}:p,E=r.styles,k=E===void 0?{}:E;return Wr({type:"text",content:n},function(){return Xt("beforeDOMElementCreation",{content:n,params:r}),ys({content:n,transform:M(M({},at),a),title:o,extra:{attributes:g,styles:k,classes:["".concat(D.cssPrefix,"-layers-text")].concat(Un(m))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,s=r.extra,o=null,c=null;if(Lo){var m=parseInt(getComputedStyle(n).fontSize,10),p=n.getBoundingClientRect();o=p.width/m,c=p.height/m}return D.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,ys({content:n.innerHTML,width:o,height:c,transform:a,title:i,extra:s,watchable:!0})])}}},Hd=new RegExp('"',"ug"),Os=[1105920,1112319];function Yd(e){var t=e.replace(Hd,""),n=td(t,0),r=n>=Os[0]&&n<=Os[1],i=t.length===2?t[0]===t[1]:!1;return{value:Pi(i?t[0]:t),isSecondary:r||i}}function ks(e,t){var n="".concat(Cu).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=dn(e.children),s=a.filter(function(Y){return Y.getAttribute(Ii)===t})[0],o=Ct.getComputedStyle(e,t),c=o.getPropertyValue("font-family").match(Lu),m=o.getPropertyValue("font-weight"),p=o.getPropertyValue("content");if(s&&!c)return e.removeChild(s),r();if(c&&p!=="none"&&p!==""){var g=o.getPropertyValue("content"),E=~["Sharp"].indexOf(c[2])?oe:ne,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Rn[E][c[2].toLowerCase()]:Fu[E][m],z=Yd(g),R=z.value,q=z.isSecondary,_=c[0].startsWith("FontAwesome"),x=ha(k,R),C=x;if(_){var F=ld(R);F.iconName&&F.prefix&&(x=F.iconName,k=F.prefix)}if(x&&!q&&(!s||s.getAttribute(la)!==k||s.getAttribute(fa)!==C)){e.setAttribute(n,C),s&&e.removeChild(s);var B=Nd(),le=B.extra;le.attributes[Ii]=t,Ri(x,k).then(function(Y){var de=va(M(M({},B),{},{icons:{main:Y,mask:pa()},prefix:k,iconName:C,extra:le,watchable:!0})),fe=re.createElement("svg");t==="::before"?e.insertBefore(fe,e.firstChild):e.appendChild(fe),fe.outerHTML=de.map(function(ke){return zn(ke)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function $d(e){return Promise.all([ks(e,"::before"),ks(e,"::after")])}function Wd(e){return e.parentNode!==document.head&&!~Nu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ii)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Is(e){if(bt)return new Promise(function(t,n){var r=dn(e.querySelectorAll("*")).filter(Wd).map($d),i=ga.begin("searchPseudoElements");nl(),Promise.all(r).then(function(){i(),Fi(),t()}).catch(function(){i(),Fi(),n()})})}var Bd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Is,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?re:r;D.searchPseudoElements&&Is(i)}}},Ps=!1,Xd={mixout:function(){return{dom:{unwatch:function(){nl(),Ps=!0}}}},hooks:function(){return{bootstrap:function(){Ts(Si("mutationObserverCallbacks",{}))},noAuto:function(){Id()},watch:function(n){var r=n.observeMutationsRoot;Ps?Fi():Ts(Si("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Cs=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),s=a[0],o=a.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},Kd={mixout:function(){return{parse:{transform:function(n){return Cs(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Cs(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(a/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),m="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),p="rotate(".concat(i.rotate," 0 0)"),g={transform:"".concat(c," ").concat(m," ").concat(p)},E={transform:"translate(".concat(s/2*-1," -256)")},k={outer:o,inner:g,path:E};return{tag:"g",attributes:M({},k.outer),children:[{tag:"g",attributes:M({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),k.path)}]}]}}}},di={x:0,y:0,width:"100%",height:"100%"};function Ss(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function qd(e){return e.tag==="g"?e.children:[e]}var Vd={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?$r(i.split(" ").map(function(s){return s.trim()})):pa();return a.prefix||(a.prefix=St()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,s=n.mask,o=n.maskId,c=n.transform,m=a.width,p=a.icon,g=s.width,E=s.icon,k=Ku({transform:c,containerWidth:g,iconWidth:m}),z={tag:"rect",attributes:M(M({},di),{},{fill:"white"})},R=p.children?{children:p.children.map(Ss)}:{},q={tag:"g",attributes:M({},k.inner),children:[Ss(M({tag:p.tag,attributes:M(M({},p.attributes),k.path)},R))]},_={tag:"g",attributes:M({},k.outer),children:[q]},x="mask-".concat(o||Dn()),C="clip-".concat(o||Dn()),F={tag:"mask",attributes:M(M({},di),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[z,_]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:qd(E)},F]};return r.push(B,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(x,")")},di)}),{children:r,attributes:i}}}},Gd={provides:function(t){var n=!1;Ct.matchMedia&&(n=Ct.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=M(M({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:M(M({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Jd={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},Zd=[Gu,Dd,Ud,jd,zd,Bd,Xd,Kd,Vd,Gd,Jd];ud(Zd,{mixoutsTo:Re});Re.noAuto;var il=Re.config,Qd=Re.library;Re.dom;var Ir=Re.parse;Re.findIconDefinition;Re.toHtml;var em=Re.icon;Re.layer;var tm=Re.text;Re.counter;function Ns(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ns(Object(n),!0).forEach(function(r){Pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ns(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Pr(e){return Pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pr(e)}function Pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function rm(e,t){if(e==null)return{};var n=nm(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Di(e){return im(e)||am(e)||sm(e)||om()}function im(e){if(Array.isArray(e))return Ui(e)}function am(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sm(e,t){if(e){if(typeof e=="string")return Ui(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ui(e,t)}}function Ui(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function om(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var lm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},al={exports:{}};(function(e){(function(t){var n=function(_,x,C){if(!m(x)||g(x)||E(x)||k(x)||c(x))return x;var F,B=0,le=0;if(p(x))for(F=[],le=x.length;B<le;B++)F.push(n(_,x[B],C));else{F={};for(var Y in x)Object.prototype.hasOwnProperty.call(x,Y)&&(F[_(Y,C)]=n(_,x[Y],C))}return F},r=function(_,x){x=x||{};var C=x.separator||"_",F=x.split||/(?=[A-Z])/;return _.split(F).join(C)},i=function(_){return z(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(x,C){return C?C.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},a=function(_){var x=i(_);return x.substr(0,1).toUpperCase()+x.substr(1)},s=function(_,x){return r(_,x).toLowerCase()},o=Object.prototype.toString,c=function(_){return typeof _=="function"},m=function(_){return _===Object(_)},p=function(_){return o.call(_)=="[object Array]"},g=function(_){return o.call(_)=="[object Date]"},E=function(_){return o.call(_)=="[object RegExp]"},k=function(_){return o.call(_)=="[object Boolean]"},z=function(_){return _=_-0,_===_},R=function(_,x){var C=x&&"process"in x?x.process:x;return typeof C!="function"?_:function(F,B){return C(F,_,B)}},q={camelize:i,decamelize:s,pascalize:a,depascalize:s,camelizeKeys:function(_,x){return n(R(i,x),_)},decamelizeKeys:function(_,x){return n(R(s,x),_,x)},pascalizeKeys:function(_,x){return n(R(a,x),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=q:t.humps=q})(lm)})(al);var fm=al.exports,cm=["class","style"];function um(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=fm.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function dm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ya(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return ya(c)}),i=Object.keys(e.attributes||{}).reduce(function(c,m){var p=e.attributes[m];switch(m){case"class":c.class=dm(p);break;case"style":c.style=um(p);break;default:c.attrs[m]=p}return c},{attrs:{},class:{},style:{}});n.class;var a=n.style,s=a===void 0?{}:a,o=rm(n,cm);return Po(e.tag,Xe(Xe(Xe({},t),{},{class:i.class,style:Xe(Xe({},i.style),s)},i.attrs),o),r)}var sl=!1;try{sl=!0}catch{}function mm(){if(!sl&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function An(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Pe({},e,t):{}}function hm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Pe(t,"fa-".concat(e.size),e.size!==null),Pe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Pe(t,"fa-pull-".concat(e.pull),e.pull!==null),Pe(t,"fa-swap-opacity",e.swapOpacity),Pe(t,"fa-bounce",e.bounce),Pe(t,"fa-shake",e.shake),Pe(t,"fa-beat",e.beat),Pe(t,"fa-fade",e.fade),Pe(t,"fa-beat-fade",e.beatFade),Pe(t,"fa-flash",e.flash),Pe(t,"fa-spin-pulse",e.spinPulse),Pe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ms(e){if(e&&Pr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ir.icon)return Ir.icon(e);if(e===null)return null;if(Pr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var pm=ta({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=je(function(){return Ms(t.icon)}),a=je(function(){return An("classes",hm(t))}),s=je(function(){return An("transform",typeof t.transform=="string"?Ir.transform(t.transform):t.transform)}),o=je(function(){return An("mask",Ms(t.mask))}),c=je(function(){return em(i.value,Xe(Xe(Xe(Xe({},a.value),s.value),o.value),{},{symbol:t.symbol,title:t.title}))});vr(c,function(p){if(!p)return mm("Could not find one or more icon(s)",i.value,o.value)},{immediate:!0});var m=je(function(){return c.value?ya(c.value.abstract[0],{},r):null});return function(){return m.value}}});ta({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,i=il.familyPrefix,a=je(function(){return["".concat(i,"-layers")].concat(Di(t.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return Po("div",{class:a.value},r.default?r.default():[])}}});ta({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,i=il.familyPrefix,a=je(function(){return An("classes",[].concat(Di(t.counter?["".concat(i,"-layers-counter")]:[]),Di(t.position?["".concat(i,"-layers-").concat(t.position)]:[])))}),s=je(function(){return An("transform",typeof t.transform=="string"?Ir.transform(t.transform):t.transform)}),o=je(function(){var m=tm(t.value.toString(),Xe(Xe({},s.value),a.value)),p=m.abstract;return t.counter&&(p[0].attributes.class=p[0].attributes.class.replace("fa-layers-text","")),p[0]}),c=je(function(){return ya(o.value,{},r)});return function(){return c.value}}});var vm={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},gm={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M481.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-30.9 28.1c-7.7 7.1-11.4 17.5-10.9 27.9c.1 2.9 .2 5.8 .2 8.8s-.1 5.9-.2 8.8c-.5 10.5 3.1 20.9 10.9 27.9l30.9 28.1c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-39.7-12.6c-10-3.2-20.8-1.1-29.7 4.6c-4.9 3.1-9.9 6.1-15.1 8.7c-9.3 4.8-16.5 13.2-18.8 23.4l-8.9 40.7c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-8.9-40.7c-2.2-10.2-9.5-18.6-18.8-23.4c-5.2-2.7-10.2-5.6-15.1-8.7c-8.8-5.7-19.7-7.8-29.7-4.6L69.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l30.9-28.1c7.7-7.1 11.4-17.5 10.9-27.9c-.1-2.9-.2-5.8-.2-8.8s.1-5.9 .2-8.8c.5-10.5-3.1-20.9-10.9-27.9L8.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l39.7 12.6c10 3.2 20.8 1.1 29.7-4.6c4.9-3.1 9.9-6.1 15.1-8.7c9.3-4.8 16.5-13.2 18.8-23.4l8.9-40.7c2-9.1 9-16.3 18.2-17.8C213.3 1.2 227.5 0 242 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l8.9 40.7c2.2 10.2 9.4 18.6 18.8 23.4c5.2 2.7 10.2 5.6 15.1 8.7c8.8 5.7 19.7 7.7 29.7 4.6l39.7-12.6c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM242 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]};Qd.add(gm,vm);Zc(xu).component("font-awesome-icon",pm).mount("#app");
