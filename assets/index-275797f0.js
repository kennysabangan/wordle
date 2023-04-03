(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function Ui(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function ji(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=me(r)?Ol(r):ji(r);if(i)for(const a in i)t[a]=i[a]}return t}else{if(me(e))return e;if(oe(e))return e}}const Tl=/;(?![^(]*\))/g,El=/:([^]+)/,Al=/\/\*.*?\*\//gs;function Ol(e){const t={};return e.replace(Al,"").split(Tl).forEach(n=>{if(n){const r=n.split(El);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ot(e){let t="";if(me(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const r=Ot(e[n]);r&&(t+=r+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const kl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Il=Ui(kl);function Ms(e){return!!e||e===""}const Zn=e=>me(e)?e:e==null?"":$(e)||oe(e)&&(e.toString===Ds||!W(e.toString))?JSON.stringify(e,Rs,2):String(e),Rs=(e,t)=>t&&t.__v_isRef?Rs(e,t.value):en(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Ls(t)?{[`Set(${t.size})`]:[...t.values()]}:oe(t)&&!$(t)&&!Us(t)?String(t):t,se={},Qt=[],Ge=()=>{},Cl=()=>!1,Pl=/^on[^a-z]/,Pr=e=>Pl.test(e),zi=e=>e.startsWith("onUpdate:"),ke=Object.assign,Hi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Sl=Object.prototype.hasOwnProperty,V=(e,t)=>Sl.call(e,t),$=Array.isArray,en=e=>Sr(e)==="[object Map]",Ls=e=>Sr(e)==="[object Set]",W=e=>typeof e=="function",me=e=>typeof e=="string",Yi=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",Fs=e=>oe(e)&&W(e.then)&&W(e.catch),Ds=Object.prototype.toString,Sr=e=>Ds.call(e),Nl=e=>Sr(e).slice(8,-1),Us=e=>Sr(e)==="[object Object]",$i=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hr=Ui(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Nr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ml=/-(\w)/g,st=Nr(e=>e.replace(Ml,(t,n)=>n?n.toUpperCase():"")),Rl=/\B([A-Z])/g,fn=Nr(e=>e.replace(Rl,"-$1").toLowerCase()),Mr=Nr(e=>e.charAt(0).toUpperCase()+e.slice(1)),ti=Nr(e=>e?`on${Mr(e)}`:""),On=(e,t)=>!Object.is(e,t),ni=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},_r=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ll=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Na;const Fl=()=>Na||(Na=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let We;class Dl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=We,!t&&We&&(this.index=(We.scopes||(We.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=We;try{return We=this,t()}finally{We=n}}}on(){We=this}off(){We=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Ul(e,t=We){t&&t.active&&t.effects.push(e)}function jl(){return We}const Wi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},js=e=>(e.w&Ct)>0,zs=e=>(e.n&Ct)>0,zl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ct},Hl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];js(i)&&!zs(i)?i.delete(e):t[n++]=i,i.w&=~Ct,i.n&=~Ct}t.length=n}},di=new WeakMap;let yn=0,Ct=1;const mi=30;let Be;const $t=Symbol(""),hi=Symbol("");class Bi{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ul(this,r)}run(){if(!this.active)return this.fn();let t=Be,n=kt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Be,Be=this,kt=!0,Ct=1<<++yn,yn<=mi?zl(this):Ma(this),this.fn()}finally{yn<=mi&&Hl(this),Ct=1<<--yn,Be=this.parent,kt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Be===this?this.deferStop=!0:this.active&&(Ma(this),this.onStop&&this.onStop(),this.active=!1)}}function Ma(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let kt=!0;const Hs=[];function cn(){Hs.push(kt),kt=!1}function un(){const e=Hs.pop();kt=e===void 0?!0:e}function Me(e,t,n){if(kt&&Be){let r=di.get(e);r||di.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Wi()),Ys(i)}}function Ys(e,t){let n=!1;yn<=mi?zs(e)||(e.n|=Ct,n=!js(e)):n=!e.has(Be),n&&(e.add(Be),Be.deps.push(e))}function mt(e,t,n,r,i,a){const s=di.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&$(e)){const c=Number(r);s.forEach((m,p)=>{(p==="length"||p>=c)&&o.push(m)})}else switch(n!==void 0&&o.push(s.get(n)),t){case"add":$(e)?$i(n)&&o.push(s.get("length")):(o.push(s.get($t)),en(e)&&o.push(s.get(hi)));break;case"delete":$(e)||(o.push(s.get($t)),en(e)&&o.push(s.get(hi)));break;case"set":en(e)&&o.push(s.get($t));break}if(o.length===1)o[0]&&pi(o[0]);else{const c=[];for(const m of o)m&&c.push(...m);pi(Wi(c))}}function pi(e,t){const n=$(e)?e:[...e];for(const r of n)r.computed&&Ra(r);for(const r of n)r.computed||Ra(r)}function Ra(e,t){(e!==Be||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Yl=Ui("__proto__,__v_isRef,__isVue"),$s=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Yi)),$l=Xi(),Wl=Xi(!1,!0),Bl=Xi(!0),La=Xl();function Xl(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=J(this);for(let a=0,s=this.length;a<s;a++)Me(r,"get",a+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(J)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){cn();const r=J(this)[t].apply(this,n);return un(),r}}),e}function Kl(e){const t=J(this);return Me(t,"has",e),t.hasOwnProperty(e)}function Xi(e=!1,t=!1){return function(r,i,a){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&a===(e?t?cf:qs:t?Ks:Xs).get(r))return r;const s=$(r);if(!e){if(s&&V(La,i))return Reflect.get(La,i,a);if(i==="hasOwnProperty")return Kl}const o=Reflect.get(r,i,a);return(Yi(i)?$s.has(i):Yl(i))||(e||Me(r,"get",i),t)?o:we(o)?s&&$i(i)?o:o.value:oe(o)?e?Vs(o):Vi(o):o}}const ql=Ws(),Vl=Ws(!0);function Ws(e=!1){return function(n,r,i,a){let s=n[r];if(an(s)&&we(s)&&!we(i))return!1;if(!e&&(!wr(i)&&!an(i)&&(s=J(s),i=J(i)),!$(n)&&we(s)&&!we(i)))return s.value=i,!0;const o=$(n)&&$i(r)?Number(r)<n.length:V(n,r),c=Reflect.set(n,r,i,a);return n===J(a)&&(o?On(i,s)&&mt(n,"set",r,i):mt(n,"add",r,i)),c}}function Gl(e,t){const n=V(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&mt(e,"delete",t,void 0),r}function Jl(e,t){const n=Reflect.has(e,t);return(!Yi(t)||!$s.has(t))&&Me(e,"has",t),n}function Zl(e){return Me(e,"iterate",$(e)?"length":$t),Reflect.ownKeys(e)}const Bs={get:$l,set:ql,deleteProperty:Gl,has:Jl,ownKeys:Zl},Ql={get:Bl,set(e,t){return!0},deleteProperty(e,t){return!0}},ef=ke({},Bs,{get:Wl,set:Vl}),Ki=e=>e,Rr=e=>Reflect.getPrototypeOf(e);function Qn(e,t,n=!1,r=!1){e=e.__v_raw;const i=J(e),a=J(t);n||(t!==a&&Me(i,"get",t),Me(i,"get",a));const{has:s}=Rr(i),o=r?Ki:n?Ji:kn;if(s.call(i,t))return o(e.get(t));if(s.call(i,a))return o(e.get(a));e!==i&&e.get(t)}function er(e,t=!1){const n=this.__v_raw,r=J(n),i=J(e);return t||(e!==i&&Me(r,"has",e),Me(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function tr(e,t=!1){return e=e.__v_raw,!t&&Me(J(e),"iterate",$t),Reflect.get(e,"size",e)}function Fa(e){e=J(e);const t=J(this);return Rr(t).has.call(t,e)||(t.add(e),mt(t,"add",e,e)),this}function Da(e,t){t=J(t);const n=J(this),{has:r,get:i}=Rr(n);let a=r.call(n,e);a||(e=J(e),a=r.call(n,e));const s=i.call(n,e);return n.set(e,t),a?On(t,s)&&mt(n,"set",e,t):mt(n,"add",e,t),this}function Ua(e){const t=J(this),{has:n,get:r}=Rr(t);let i=n.call(t,e);i||(e=J(e),i=n.call(t,e)),r&&r.call(t,e);const a=t.delete(e);return i&&mt(t,"delete",e,void 0),a}function ja(){const e=J(this),t=e.size!==0,n=e.clear();return t&&mt(e,"clear",void 0,void 0),n}function nr(e,t){return function(r,i){const a=this,s=a.__v_raw,o=J(s),c=t?Ki:e?Ji:kn;return!e&&Me(o,"iterate",$t),s.forEach((m,p)=>r.call(i,c(m),c(p),a))}}function rr(e,t,n){return function(...r){const i=this.__v_raw,a=J(i),s=en(a),o=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,m=i[e](...r),p=n?Ki:t?Ji:kn;return!t&&Me(a,"iterate",c?hi:$t),{next(){const{value:g,done:_}=m.next();return _?{value:g,done:_}:{value:o?[p(g[0]),p(g[1])]:p(g),done:_}},[Symbol.iterator](){return this}}}}function wt(e){return function(...t){return e==="delete"?!1:this}}function tf(){const e={get(a){return Qn(this,a)},get size(){return tr(this)},has:er,add:Fa,set:Da,delete:Ua,clear:ja,forEach:nr(!1,!1)},t={get(a){return Qn(this,a,!1,!0)},get size(){return tr(this)},has:er,add:Fa,set:Da,delete:Ua,clear:ja,forEach:nr(!1,!0)},n={get(a){return Qn(this,a,!0)},get size(){return tr(this,!0)},has(a){return er.call(this,a,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:nr(!0,!1)},r={get(a){return Qn(this,a,!0,!0)},get size(){return tr(this,!0)},has(a){return er.call(this,a,!0)},add:wt("add"),set:wt("set"),delete:wt("delete"),clear:wt("clear"),forEach:nr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=rr(a,!1,!1),n[a]=rr(a,!0,!1),t[a]=rr(a,!1,!0),r[a]=rr(a,!0,!0)}),[e,n,t,r]}const[nf,rf,af,sf]=tf();function qi(e,t){const n=t?e?sf:af:e?rf:nf;return(r,i,a)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(V(n,i)&&i in r?n:r,i,a)}const of={get:qi(!1,!1)},lf={get:qi(!1,!0)},ff={get:qi(!0,!1)},Xs=new WeakMap,Ks=new WeakMap,qs=new WeakMap,cf=new WeakMap;function uf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function df(e){return e.__v_skip||!Object.isExtensible(e)?0:uf(Nl(e))}function Vi(e){return an(e)?e:Gi(e,!1,Bs,of,Xs)}function mf(e){return Gi(e,!1,ef,lf,Ks)}function Vs(e){return Gi(e,!0,Ql,ff,qs)}function Gi(e,t,n,r,i){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const a=i.get(e);if(a)return a;const s=df(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return i.set(e,o),o}function tn(e){return an(e)?tn(e.__v_raw):!!(e&&e.__v_isReactive)}function an(e){return!!(e&&e.__v_isReadonly)}function wr(e){return!!(e&&e.__v_isShallow)}function Gs(e){return tn(e)||an(e)}function J(e){const t=e&&e.__v_raw;return t?J(t):e}function Js(e){return _r(e,"__v_skip",!0),e}const kn=e=>oe(e)?Vi(e):e,Ji=e=>oe(e)?Vs(e):e;function Zs(e){kt&&Be&&(e=J(e),Ys(e.dep||(e.dep=Wi())))}function Qs(e,t){e=J(e);const n=e.dep;n&&pi(n)}function we(e){return!!(e&&e.__v_isRef===!0)}function Tt(e){return hf(e,!1)}function hf(e,t){return we(e)?e:new pf(e,t)}class pf{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:J(t),this._value=n?t:kn(t)}get value(){return Zs(this),this._value}set value(t){const n=this.__v_isShallow||wr(t)||an(t);t=n?t:J(t),On(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:kn(t),Qs(this))}}function vf(e){return we(e)?e.value:e}const gf={get:(e,t,n)=>vf(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return we(i)&&!we(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function eo(e){return tn(e)?e:new Proxy(e,gf)}var to;class bf{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[to]=!1,this._dirty=!0,this.effect=new Bi(t,()=>{this._dirty||(this._dirty=!0,Qs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=J(this);return Zs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}to="__v_isReadonly";function yf(e,t,n=!1){let r,i;const a=W(e);return a?(r=e,i=Ge):(r=e.get,i=e.set),new bf(r,i,a||!i,n)}function It(e,t,n,r){let i;try{i=r?e(...r):e()}catch(a){Lr(a,t,n)}return i}function Je(e,t,n,r){if(W(e)){const a=It(e,t,n,r);return a&&Fs(a)&&a.catch(s=>{Lr(s,t,n)}),a}const i=[];for(let a=0;a<e.length;a++)i.push(Je(e[a],t,n,r));return i}function Lr(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let a=t.parent;const s=t.proxy,o=n;for(;a;){const m=a.ec;if(m){for(let p=0;p<m.length;p++)if(m[p](e,s,o)===!1)return}a=a.parent}const c=t.appContext.config.errorHandler;if(c){It(c,null,10,[e,s,o]);return}}xf(e,n,i,r)}function xf(e,t,n,r=!0){console.error(e)}let In=!1,vi=!1;const _e=[];let it=0;const nn=[];let dt=null,jt=0;const no=Promise.resolve();let Zi=null;function _f(e){const t=Zi||no;return e?t.then(this?e.bind(this):e):t}function wf(e){let t=it+1,n=_e.length;for(;t<n;){const r=t+n>>>1;Cn(_e[r])<e?t=r+1:n=r}return t}function Qi(e){(!_e.length||!_e.includes(e,In&&e.allowRecurse?it+1:it))&&(e.id==null?_e.push(e):_e.splice(wf(e.id),0,e),ro())}function ro(){!In&&!vi&&(vi=!0,Zi=no.then(ao))}function Tf(e){const t=_e.indexOf(e);t>it&&_e.splice(t,1)}function Ef(e){$(e)?nn.push(...e):(!dt||!dt.includes(e,e.allowRecurse?jt+1:jt))&&nn.push(e),ro()}function za(e,t=In?it+1:0){for(;t<_e.length;t++){const n=_e[t];n&&n.pre&&(_e.splice(t,1),t--,n())}}function io(e){if(nn.length){const t=[...new Set(nn)];if(nn.length=0,dt){dt.push(...t);return}for(dt=t,dt.sort((n,r)=>Cn(n)-Cn(r)),jt=0;jt<dt.length;jt++)dt[jt]();dt=null,jt=0}}const Cn=e=>e.id==null?1/0:e.id,Af=(e,t)=>{const n=Cn(e)-Cn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ao(e){vi=!1,In=!0,_e.sort(Af);const t=Ge;try{for(it=0;it<_e.length;it++){const n=_e[it];n&&n.active!==!1&&It(n,null,14)}}finally{it=0,_e.length=0,io(),In=!1,Zi=null,(_e.length||nn.length)&&ao()}}function Of(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||se;let i=n;const a=t.startsWith("update:"),s=a&&t.slice(7);if(s&&s in r){const p=`${s==="modelValue"?"model":s}Modifiers`,{number:g,trim:_}=r[p]||se;_&&(i=n.map(C=>me(C)?C.trim():C)),g&&(i=n.map(Ll))}let o,c=r[o=ti(t)]||r[o=ti(st(t))];!c&&a&&(c=r[o=ti(fn(t))]),c&&Je(c,e,6,i);const m=r[o+"Once"];if(m){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Je(m,e,6,i)}}function so(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const a=e.emits;let s={},o=!1;if(!W(e)){const c=m=>{const p=so(m,t,!0);p&&(o=!0,ke(s,p))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!a&&!o?(oe(e)&&r.set(e,null),null):($(a)?a.forEach(c=>s[c]=null):ke(s,a),oe(e)&&r.set(e,s),s)}function Fr(e,t){return!e||!Pr(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,fn(t))||V(e,t))}let Ke=null,Dr=null;function Tr(e){const t=Ke;return Ke=e,Dr=e&&e.type.__scopeId||null,t}function kf(e){Dr=e}function If(){Dr=null}function Cf(e,t=Ke,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Va(-1);const a=Tr(t);let s;try{s=e(...i)}finally{Tr(a),r._d&&Va(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function ri(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:a,propsOptions:[s],slots:o,attrs:c,emit:m,render:p,renderCache:g,data:_,setupState:C,ctx:z,inheritAttrs:R}=e;let q,E;const y=Tr(e);try{if(n.shapeFlag&4){const D=i||r;q=rt(p.call(D,D,g,a,C,_,z)),E=c}else{const D=t;q=rt(D.length>1?D(a,{attrs:c,slots:o,emit:m}):D(a,null)),E=t.props?c:Pf(c)}}catch(D){wn.length=0,Lr(D,e,1),q=Ne(Pn)}let O=q;if(E&&R!==!1){const D=Object.keys(E),{shapeFlag:Y}=O;D.length&&Y&7&&(s&&D.some(zi)&&(E=Sf(E,s)),O=sn(O,E))}return n.dirs&&(O=sn(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),q=O,Tr(y),q}const Pf=e=>{let t;for(const n in e)(n==="class"||n==="style"||Pr(n))&&((t||(t={}))[n]=e[n]);return t},Sf=(e,t)=>{const n={};for(const r in e)(!zi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Nf(e,t,n){const{props:r,children:i,component:a}=e,{props:s,children:o,patchFlag:c}=t,m=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ha(r,s,m):!!s;if(c&8){const p=t.dynamicProps;for(let g=0;g<p.length;g++){const _=p[g];if(s[_]!==r[_]&&!Fr(m,_))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?Ha(r,s,m):!0:!!s;return!1}function Ha(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const a=r[i];if(t[a]!==e[a]&&!Fr(n,a))return!0}return!1}function Mf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Rf=e=>e.__isSuspense;function Lf(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):Ef(e)}function Ff(e,t){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[e]=t}}function pr(e,t,n=!1){const r=de||Ke;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&W(t)?t.call(r.proxy):t}}const ir={};function vr(e,t,n){return oo(e,t,n)}function oo(e,t,{immediate:n,deep:r,flush:i,onTrack:a,onTrigger:s}=se){const o=jl()===(de==null?void 0:de.scope)?de:null;let c,m=!1,p=!1;if(we(e)?(c=()=>e.value,m=wr(e)):tn(e)?(c=()=>e,r=!0):$(e)?(p=!0,m=e.some(O=>tn(O)||wr(O)),c=()=>e.map(O=>{if(we(O))return O.value;if(tn(O))return Gt(O);if(W(O))return It(O,o,2)})):W(e)?t?c=()=>It(e,o,2):c=()=>{if(!(o&&o.isUnmounted))return g&&g(),Je(e,o,3,[_])}:c=Ge,t&&r){const O=c;c=()=>Gt(O())}let g,_=O=>{g=E.onStop=()=>{It(O,o,4)}},C;if(Nn)if(_=Ge,t?n&&Je(t,o,3,[c(),p?[]:void 0,_]):c(),i==="sync"){const O=Pc();C=O.__watcherHandles||(O.__watcherHandles=[])}else return Ge;let z=p?new Array(e.length).fill(ir):ir;const R=()=>{if(E.active)if(t){const O=E.run();(r||m||(p?O.some((D,Y)=>On(D,z[Y])):On(O,z)))&&(g&&g(),Je(t,o,3,[O,z===ir?void 0:p&&z[0]===ir?[]:z,_]),z=O)}else E.run()};R.allowRecurse=!!t;let q;i==="sync"?q=R:i==="post"?q=()=>Se(R,o&&o.suspense):(R.pre=!0,o&&(R.id=o.uid),q=()=>Qi(R));const E=new Bi(c,q);t?n?R():z=E.run():i==="post"?Se(E.run.bind(E),o&&o.suspense):E.run();const y=()=>{E.stop(),o&&o.scope&&Hi(o.scope.effects,E)};return C&&C.push(y),y}function Df(e,t,n){const r=this.proxy,i=me(e)?e.includes(".")?lo(r,e):()=>r[e]:e.bind(r,r);let a;W(t)?a=t:(a=t.handler,n=t);const s=de;on(this);const o=oo(i,a.bind(r),n);return s?on(s):Wt(),o}function lo(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Gt(e,t){if(!oe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),we(e))Gt(e.value,t);else if($(e))for(let n=0;n<e.length;n++)Gt(e[n],t);else if(Ls(e)||en(e))e.forEach(n=>{Gt(n,t)});else if(Us(e))for(const n in e)Gt(e[n],t);return e}function ea(e){return W(e)?{setup:e,name:e.name}:e}const gr=e=>!!e.type.__asyncLoader,fo=e=>e.type.__isKeepAlive;function Uf(e,t){co(e,"a",t)}function jf(e,t){co(e,"da",t)}function co(e,t,n=de){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Ur(t,r,n),n){let i=n.parent;for(;i&&i.parent;)fo(i.parent.vnode)&&zf(r,t,n,i),i=i.parent}}function zf(e,t,n,r){const i=Ur(t,e,r,!0);ho(()=>{Hi(r[t],i)},n)}function Ur(e,t,n=de,r=!1){if(n){const i=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;cn(),on(n);const o=Je(t,n,e,s);return Wt(),un(),o});return r?i.unshift(a):i.push(a),a}}const gt=e=>(t,n=de)=>(!Nn||e==="sp")&&Ur(e,(...r)=>t(...r),n),Hf=gt("bm"),uo=gt("m"),Yf=gt("bu"),$f=gt("u"),mo=gt("bum"),ho=gt("um"),Wf=gt("sp"),Bf=gt("rtg"),Xf=gt("rtc");function Kf(e,t=de){Ur("ec",e,t)}function Ft(e,t,n,r){const i=e.dirs,a=t&&t.dirs;for(let s=0;s<i.length;s++){const o=i[s];a&&(o.oldValue=a[s].value);let c=o.dir[r];c&&(cn(),Je(c,n,8,[e.el,o,e,t]),un())}}const po="components";function qf(e,t){return Gf(po,e,!0,t)||e}const Vf=Symbol();function Gf(e,t,n=!0,r=!1){const i=Ke||de;if(i){const a=i.type;if(e===po){const o=kc(a,!1);if(o&&(o===t||o===st(t)||o===Mr(st(t))))return a}const s=Ya(i[e]||a[e],t)||Ya(i.appContext[e],t);return!s&&r?a:s}}function Ya(e,t){return e&&(e[t]||e[st(t)]||e[Mr(st(t))])}function gn(e,t,n,r){let i;const a=n&&n[r];if($(e)||me(e)){i=new Array(e.length);for(let s=0,o=e.length;s<o;s++)i[s]=t(e[s],s,void 0,a&&a[s])}else if(typeof e=="number"){i=new Array(e);for(let s=0;s<e;s++)i[s]=t(s+1,s,void 0,a&&a[s])}else if(oe(e))if(e[Symbol.iterator])i=Array.from(e,(s,o)=>t(s,o,void 0,a&&a[o]));else{const s=Object.keys(e);i=new Array(s.length);for(let o=0,c=s.length;o<c;o++){const m=s[o];i[o]=t(e[m],m,o,a&&a[o])}}else i=[];return n&&(n[r]=i),i}const gi=e=>e?Oo(e)?ia(e)||e.proxy:gi(e.parent):null,_n=ke(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>gi(e.parent),$root:e=>gi(e.root),$emit:e=>e.emit,$options:e=>ta(e),$forceUpdate:e=>e.f||(e.f=()=>Qi(e.update)),$nextTick:e=>e.n||(e.n=_f.bind(e.proxy)),$watch:e=>Df.bind(e)}),ii=(e,t)=>e!==se&&!e.__isScriptSetup&&V(e,t),Jf={get({_:e},t){const{ctx:n,setupState:r,data:i,props:a,accessCache:s,type:o,appContext:c}=e;let m;if(t[0]!=="$"){const C=s[t];if(C!==void 0)switch(C){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else{if(ii(r,t))return s[t]=1,r[t];if(i!==se&&V(i,t))return s[t]=2,i[t];if((m=e.propsOptions[0])&&V(m,t))return s[t]=3,a[t];if(n!==se&&V(n,t))return s[t]=4,n[t];bi&&(s[t]=0)}}const p=_n[t];let g,_;if(p)return t==="$attrs"&&Me(e,"get",t),p(e);if((g=o.__cssModules)&&(g=g[t]))return g;if(n!==se&&V(n,t))return s[t]=4,n[t];if(_=c.config.globalProperties,V(_,t))return _[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:a}=e;return ii(i,t)?(i[t]=n,!0):r!==se&&V(r,t)?(r[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:a}},s){let o;return!!n[s]||e!==se&&V(e,s)||ii(t,s)||(o=a[0])&&V(o,s)||V(r,s)||V(_n,s)||V(i.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let bi=!0;function Zf(e){const t=ta(e),n=e.proxy,r=e.ctx;bi=!1,t.beforeCreate&&$a(t.beforeCreate,e,"bc");const{data:i,computed:a,methods:s,watch:o,provide:c,inject:m,created:p,beforeMount:g,mounted:_,beforeUpdate:C,updated:z,activated:R,deactivated:q,beforeDestroy:E,beforeUnmount:y,destroyed:O,unmounted:D,render:Y,renderTracked:ee,renderTriggered:le,errorCaptured:K,serverPrefetch:ne,expose:Ie,inheritAttrs:Le,components:ot,directives:Mt,filters:yt}=t;if(m&&Qf(m,r,null,e.appContext.config.unwrapInjectedRef),s)for(const re in s){const Q=s[re];W(Q)&&(r[re]=Q.bind(n))}if(i){const re=i.call(n,n);oe(re)&&(e.data=Vi(re))}if(bi=!0,a)for(const re in a){const Q=a[re],Ze=W(Q)?Q.bind(n,n):W(Q.get)?Q.get.bind(n,n):Ge,Kt=!W(Q)&&W(Q.set)?Q.set.bind(n):Ge,lt=je({get:Ze,set:Kt});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>lt.value,set:xe=>lt.value=xe})}if(o)for(const re in o)vo(o[re],r,n,re);if(c){const re=W(c)?c.call(n):c;Reflect.ownKeys(re).forEach(Q=>{Ff(Q,re[Q])})}p&&$a(p,e,"c");function ge(re,Q){$(Q)?Q.forEach(Ze=>re(Ze.bind(n))):Q&&re(Q.bind(n))}if(ge(Hf,g),ge(uo,_),ge(Yf,C),ge($f,z),ge(Uf,R),ge(jf,q),ge(Kf,K),ge(Xf,ee),ge(Bf,le),ge(mo,y),ge(ho,D),ge(Wf,ne),$(Ie))if(Ie.length){const re=e.exposed||(e.exposed={});Ie.forEach(Q=>{Object.defineProperty(re,Q,{get:()=>n[Q],set:Ze=>n[Q]=Ze})})}else e.exposed||(e.exposed={});Y&&e.render===Ge&&(e.render=Y),Le!=null&&(e.inheritAttrs=Le),ot&&(e.components=ot),Mt&&(e.directives=Mt)}function Qf(e,t,n=Ge,r=!1){$(e)&&(e=yi(e));for(const i in e){const a=e[i];let s;oe(a)?"default"in a?s=pr(a.from||i,a.default,!0):s=pr(a.from||i):s=pr(a),we(s)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function $a(e,t,n){Je($(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function vo(e,t,n,r){const i=r.includes(".")?lo(n,r):()=>n[r];if(me(e)){const a=t[e];W(a)&&vr(i,a)}else if(W(e))vr(i,e.bind(n));else if(oe(e))if($(e))e.forEach(a=>vo(a,t,n,r));else{const a=W(e.handler)?e.handler.bind(n):t[e.handler];W(a)&&vr(i,a,e)}}function ta(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:s}}=e.appContext,o=a.get(t);let c;return o?c=o:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(m=>Er(c,m,s,!0)),Er(c,t,s)),oe(t)&&a.set(t,c),c}function Er(e,t,n,r=!1){const{mixins:i,extends:a}=t;a&&Er(e,a,n,!0),i&&i.forEach(s=>Er(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=ec[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const ec={data:Wa,props:Ut,emits:Ut,methods:Ut,computed:Ut,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:Ut,directives:Ut,watch:nc,provide:Wa,inject:tc};function Wa(e,t){return t?e?function(){return ke(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function tc(e,t){return Ut(yi(e),yi(t))}function yi(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ae(e,t){return e?[...new Set([].concat(e,t))]:t}function Ut(e,t){return e?ke(ke(Object.create(null),e),t):t}function nc(e,t){if(!e)return t;if(!t)return e;const n=ke(Object.create(null),e);for(const r in t)n[r]=Ae(e[r],t[r]);return n}function rc(e,t,n,r=!1){const i={},a={};_r(a,zr,1),e.propsDefaults=Object.create(null),go(e,t,i,a);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);n?e.props=r?i:mf(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function ic(e,t,n,r){const{props:i,attrs:a,vnode:{patchFlag:s}}=e,o=J(i),[c]=e.propsOptions;let m=!1;if((r||s>0)&&!(s&16)){if(s&8){const p=e.vnode.dynamicProps;for(let g=0;g<p.length;g++){let _=p[g];if(Fr(e.emitsOptions,_))continue;const C=t[_];if(c)if(V(a,_))C!==a[_]&&(a[_]=C,m=!0);else{const z=st(_);i[z]=xi(c,o,z,C,e,!1)}else C!==a[_]&&(a[_]=C,m=!0)}}}else{go(e,t,i,a)&&(m=!0);let p;for(const g in o)(!t||!V(t,g)&&((p=fn(g))===g||!V(t,p)))&&(c?n&&(n[g]!==void 0||n[p]!==void 0)&&(i[g]=xi(c,o,g,void 0,e,!0)):delete i[g]);if(a!==o)for(const g in a)(!t||!V(t,g))&&(delete a[g],m=!0)}m&&mt(e,"set","$attrs")}function go(e,t,n,r){const[i,a]=e.propsOptions;let s=!1,o;if(t)for(let c in t){if(hr(c))continue;const m=t[c];let p;i&&V(i,p=st(c))?!a||!a.includes(p)?n[p]=m:(o||(o={}))[p]=m:Fr(e.emitsOptions,c)||(!(c in r)||m!==r[c])&&(r[c]=m,s=!0)}if(a){const c=J(n),m=o||se;for(let p=0;p<a.length;p++){const g=a[p];n[g]=xi(i,c,g,m[g],e,!V(m,g))}}return s}function xi(e,t,n,r,i,a){const s=e[n];if(s!=null){const o=V(s,"default");if(o&&r===void 0){const c=s.default;if(s.type!==Function&&W(c)){const{propsDefaults:m}=i;n in m?r=m[n]:(on(i),r=m[n]=c.call(null,t),Wt())}else r=c}s[0]&&(a&&!o?r=!1:s[1]&&(r===""||r===fn(n))&&(r=!0))}return r}function bo(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const a=e.props,s={},o=[];let c=!1;if(!W(e)){const p=g=>{c=!0;const[_,C]=bo(g,t,!0);ke(s,_),C&&o.push(...C)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!a&&!c)return oe(e)&&r.set(e,Qt),Qt;if($(a))for(let p=0;p<a.length;p++){const g=st(a[p]);Ba(g)&&(s[g]=se)}else if(a)for(const p in a){const g=st(p);if(Ba(g)){const _=a[p],C=s[g]=$(_)||W(_)?{type:_}:Object.assign({},_);if(C){const z=qa(Boolean,C.type),R=qa(String,C.type);C[0]=z>-1,C[1]=R<0||z<R,(z>-1||V(C,"default"))&&o.push(g)}}}const m=[s,o];return oe(e)&&r.set(e,m),m}function Ba(e){return e[0]!=="$"}function Xa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ka(e,t){return Xa(e)===Xa(t)}function qa(e,t){return $(t)?t.findIndex(n=>Ka(n,e)):W(t)&&Ka(t,e)?0:-1}const yo=e=>e[0]==="_"||e==="$stable",na=e=>$(e)?e.map(rt):[rt(e)],ac=(e,t,n)=>{if(t._n)return t;const r=Cf((...i)=>na(t(...i)),n);return r._c=!1,r},xo=(e,t,n)=>{const r=e._ctx;for(const i in e){if(yo(i))continue;const a=e[i];if(W(a))t[i]=ac(i,a,r);else if(a!=null){const s=na(a);t[i]=()=>s}}},_o=(e,t)=>{const n=na(t);e.slots.default=()=>n},sc=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=J(t),_r(t,"_",n)):xo(t,e.slots={})}else e.slots={},t&&_o(e,t);_r(e.slots,zr,1)},oc=(e,t,n)=>{const{vnode:r,slots:i}=e;let a=!0,s=se;if(r.shapeFlag&32){const o=t._;o?n&&o===1?a=!1:(ke(i,t),!n&&o===1&&delete i._):(a=!t.$stable,xo(t,i)),s=t}else t&&(_o(e,t),s={default:1});if(a)for(const o in i)!yo(o)&&!(o in s)&&delete i[o]};function wo(){return{app:null,config:{isNativeTag:Cl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lc=0;function fc(e,t){return function(r,i=null){W(r)||(r=Object.assign({},r)),i!=null&&!oe(i)&&(i=null);const a=wo(),s=new Set;let o=!1;const c=a.app={_uid:lc++,_component:r,_props:i,_container:null,_context:a,_instance:null,version:Sc,get config(){return a.config},set config(m){},use(m,...p){return s.has(m)||(m&&W(m.install)?(s.add(m),m.install(c,...p)):W(m)&&(s.add(m),m(c,...p))),c},mixin(m){return a.mixins.includes(m)||a.mixins.push(m),c},component(m,p){return p?(a.components[m]=p,c):a.components[m]},directive(m,p){return p?(a.directives[m]=p,c):a.directives[m]},mount(m,p,g){if(!o){const _=Ne(r,i);return _.appContext=a,p&&t?t(_,m):e(_,m,g),o=!0,c._container=m,m.__vue_app__=c,ia(_.component)||_.component.proxy}},unmount(){o&&(e(null,c._container),delete c._container.__vue_app__)},provide(m,p){return a.provides[m]=p,c}};return c}}function _i(e,t,n,r,i=!1){if($(e)){e.forEach((_,C)=>_i(_,t&&($(t)?t[C]:t),n,r,i));return}if(gr(r)&&!i)return;const a=r.shapeFlag&4?ia(r.component)||r.component.proxy:r.el,s=i?null:a,{i:o,r:c}=e,m=t&&t.r,p=o.refs===se?o.refs={}:o.refs,g=o.setupState;if(m!=null&&m!==c&&(me(m)?(p[m]=null,V(g,m)&&(g[m]=null)):we(m)&&(m.value=null)),W(c))It(c,o,12,[s,p]);else{const _=me(c),C=we(c);if(_||C){const z=()=>{if(e.f){const R=_?V(g,c)?g[c]:p[c]:c.value;i?$(R)&&Hi(R,a):$(R)?R.includes(a)||R.push(a):_?(p[c]=[a],V(g,c)&&(g[c]=p[c])):(c.value=[a],e.k&&(p[e.k]=c.value))}else _?(p[c]=s,V(g,c)&&(g[c]=s)):C&&(c.value=s,e.k&&(p[e.k]=s))};s?(z.id=-1,Se(z,n)):z()}}}const Se=Lf;function cc(e){return uc(e)}function uc(e,t){const n=Fl();n.__VUE__=!0;const{insert:r,remove:i,patchProp:a,createElement:s,createText:o,createComment:c,setText:m,setElementText:p,parentNode:g,nextSibling:_,setScopeId:C=Ge,insertStaticContent:z}=e,R=(d,h,b,T=null,x=null,k=null,S=!1,I=null,P=!!h.dynamicChildren)=>{if(d===h)return;d&&!bn(d,h)&&(T=ue(d),xe(d,x,k,!0),d=null),h.patchFlag===-2&&(P=!1,h.dynamicChildren=null);const{type:w,ref:U,shapeFlag:L}=h;switch(w){case jr:q(d,h,b,T);break;case Pn:E(d,h,b,T);break;case ai:d==null&&y(h,b,T,S);break;case Oe:ot(d,h,b,T,x,k,S,I,P);break;default:L&1?Y(d,h,b,T,x,k,S,I,P):L&6?Mt(d,h,b,T,x,k,S,I,P):(L&64||L&128)&&w.process(d,h,b,T,x,k,S,I,P,te)}U!=null&&x&&_i(U,d&&d.ref,k,h||d,!h)},q=(d,h,b,T)=>{if(d==null)r(h.el=o(h.children),b,T);else{const x=h.el=d.el;h.children!==d.children&&m(x,h.children)}},E=(d,h,b,T)=>{d==null?r(h.el=c(h.children||""),b,T):h.el=d.el},y=(d,h,b,T)=>{[d.el,d.anchor]=z(d.children,h,b,T,d.el,d.anchor)},O=({el:d,anchor:h},b,T)=>{let x;for(;d&&d!==h;)x=_(d),r(d,b,T),d=x;r(h,b,T)},D=({el:d,anchor:h})=>{let b;for(;d&&d!==h;)b=_(d),i(d),d=b;i(h)},Y=(d,h,b,T,x,k,S,I,P)=>{S=S||h.type==="svg",d==null?ee(h,b,T,x,k,S,I,P):ne(d,h,x,k,S,I,P)},ee=(d,h,b,T,x,k,S,I)=>{let P,w;const{type:U,props:L,shapeFlag:j,transition:H,dirs:B}=d;if(P=d.el=s(d.type,k,L&&L.is,L),j&8?p(P,d.children):j&16&&K(d.children,P,null,T,x,k&&U!=="foreignObject",S,I),B&&Ft(d,null,T,"created"),le(P,d,d.scopeId,S,T),L){for(const G in L)G!=="value"&&!hr(G)&&a(P,G,null,L[G],k,d.children,T,x,ze);"value"in L&&a(P,"value",null,L.value),(w=L.onVnodeBeforeMount)&&nt(w,T,d)}B&&Ft(d,null,T,"beforeMount");const Z=(!x||x&&!x.pendingBranch)&&H&&!H.persisted;Z&&H.beforeEnter(P),r(P,h,b),((w=L&&L.onVnodeMounted)||Z||B)&&Se(()=>{w&&nt(w,T,d),Z&&H.enter(P),B&&Ft(d,null,T,"mounted")},x)},le=(d,h,b,T,x)=>{if(b&&C(d,b),T)for(let k=0;k<T.length;k++)C(d,T[k]);if(x){let k=x.subTree;if(h===k){const S=x.vnode;le(d,S,S.scopeId,S.slotScopeIds,x.parent)}}},K=(d,h,b,T,x,k,S,I,P=0)=>{for(let w=P;w<d.length;w++){const U=d[w]=I?At(d[w]):rt(d[w]);R(null,U,h,b,T,x,k,S,I)}},ne=(d,h,b,T,x,k,S)=>{const I=h.el=d.el;let{patchFlag:P,dynamicChildren:w,dirs:U}=h;P|=d.patchFlag&16;const L=d.props||se,j=h.props||se;let H;b&&Dt(b,!1),(H=j.onVnodeBeforeUpdate)&&nt(H,b,h,d),U&&Ft(h,d,b,"beforeUpdate"),b&&Dt(b,!0);const B=x&&h.type!=="foreignObject";if(w?Ie(d.dynamicChildren,w,I,b,T,B,k):S||Q(d,h,I,null,b,T,B,k,!1),P>0){if(P&16)Le(I,h,L,j,b,T,x);else if(P&2&&L.class!==j.class&&a(I,"class",null,j.class,x),P&4&&a(I,"style",L.style,j.style,x),P&8){const Z=h.dynamicProps;for(let G=0;G<Z.length;G++){const fe=Z[G],Ce=L[fe],He=j[fe];(He!==Ce||fe==="value")&&a(I,fe,Ce,He,x,d.children,b,T,ze)}}P&1&&d.children!==h.children&&p(I,h.children)}else!S&&w==null&&Le(I,h,L,j,b,T,x);((H=j.onVnodeUpdated)||U)&&Se(()=>{H&&nt(H,b,h,d),U&&Ft(h,d,b,"updated")},T)},Ie=(d,h,b,T,x,k,S)=>{for(let I=0;I<h.length;I++){const P=d[I],w=h[I],U=P.el&&(P.type===Oe||!bn(P,w)||P.shapeFlag&70)?g(P.el):b;R(P,w,U,null,T,x,k,S,!0)}},Le=(d,h,b,T,x,k,S)=>{if(b!==T){if(b!==se)for(const I in b)!hr(I)&&!(I in T)&&a(d,I,b[I],null,S,h.children,x,k,ze);for(const I in T){if(hr(I))continue;const P=T[I],w=b[I];P!==w&&I!=="value"&&a(d,I,w,P,S,h.children,x,k,ze)}"value"in T&&a(d,"value",b.value,T.value)}},ot=(d,h,b,T,x,k,S,I,P)=>{const w=h.el=d?d.el:o(""),U=h.anchor=d?d.anchor:o("");let{patchFlag:L,dynamicChildren:j,slotScopeIds:H}=h;H&&(I=I?I.concat(H):H),d==null?(r(w,b,T),r(U,b,T),K(h.children,b,U,x,k,S,I,P)):L>0&&L&64&&j&&d.dynamicChildren?(Ie(d.dynamicChildren,j,b,x,k,S,I),(h.key!=null||x&&h===x.subTree)&&To(d,h,!0)):Q(d,h,b,U,x,k,S,I,P)},Mt=(d,h,b,T,x,k,S,I,P)=>{h.slotScopeIds=I,d==null?h.shapeFlag&512?x.ctx.activate(h,b,T,S,P):yt(h,b,T,x,k,S,P):Hn(d,h,P)},yt=(d,h,b,T,x,k,S)=>{const I=d.component=wc(d,T,x);if(fo(d)&&(I.ctx.renderer=te),Tc(I),I.asyncDep){if(x&&x.registerDep(I,ge),!d.el){const P=I.subTree=Ne(Pn);E(null,P,h,b)}return}ge(I,d,h,b,x,k,S)},Hn=(d,h,b)=>{const T=h.component=d.component;if(Nf(d,h,b))if(T.asyncDep&&!T.asyncResolved){re(T,h,b);return}else T.next=h,Tf(T.update),T.update();else h.el=d.el,T.vnode=h},ge=(d,h,b,T,x,k,S)=>{const I=()=>{if(d.isMounted){let{next:U,bu:L,u:j,parent:H,vnode:B}=d,Z=U,G;Dt(d,!1),U?(U.el=B.el,re(d,U,S)):U=B,L&&ni(L),(G=U.props&&U.props.onVnodeBeforeUpdate)&&nt(G,H,U,B),Dt(d,!0);const fe=ri(d),Ce=d.subTree;d.subTree=fe,R(Ce,fe,g(Ce.el),ue(Ce),d,x,k),U.el=fe.el,Z===null&&Mf(d,fe.el),j&&Se(j,x),(G=U.props&&U.props.onVnodeUpdated)&&Se(()=>nt(G,H,U,B),x)}else{let U;const{el:L,props:j}=h,{bm:H,m:B,parent:Z}=d,G=gr(h);if(Dt(d,!1),H&&ni(H),!G&&(U=j&&j.onVnodeBeforeMount)&&nt(U,Z,h),Dt(d,!0),L&&xt){const fe=()=>{d.subTree=ri(d),xt(L,d.subTree,d,x,null)};G?h.type.__asyncLoader().then(()=>!d.isUnmounted&&fe()):fe()}else{const fe=d.subTree=ri(d);R(null,fe,b,T,d,x,k),h.el=fe.el}if(B&&Se(B,x),!G&&(U=j&&j.onVnodeMounted)){const fe=h;Se(()=>nt(U,Z,fe),x)}(h.shapeFlag&256||Z&&gr(Z.vnode)&&Z.vnode.shapeFlag&256)&&d.a&&Se(d.a,x),d.isMounted=!0,h=b=T=null}},P=d.effect=new Bi(I,()=>Qi(w),d.scope),w=d.update=()=>P.run();w.id=d.uid,Dt(d,!0),w()},re=(d,h,b)=>{h.component=d;const T=d.vnode.props;d.vnode=h,d.next=null,ic(d,h.props,T,b),oc(d,h.children,b),cn(),za(),un()},Q=(d,h,b,T,x,k,S,I,P=!1)=>{const w=d&&d.children,U=d?d.shapeFlag:0,L=h.children,{patchFlag:j,shapeFlag:H}=h;if(j>0){if(j&128){Kt(w,L,b,T,x,k,S,I,P);return}else if(j&256){Ze(w,L,b,T,x,k,S,I,P);return}}H&8?(U&16&&ze(w,x,k),L!==w&&p(b,L)):U&16?H&16?Kt(w,L,b,T,x,k,S,I,P):ze(w,x,k,!0):(U&8&&p(b,""),H&16&&K(L,b,T,x,k,S,I,P))},Ze=(d,h,b,T,x,k,S,I,P)=>{d=d||Qt,h=h||Qt;const w=d.length,U=h.length,L=Math.min(w,U);let j;for(j=0;j<L;j++){const H=h[j]=P?At(h[j]):rt(h[j]);R(d[j],H,b,null,x,k,S,I,P)}w>U?ze(d,x,k,!0,!1,L):K(h,b,T,x,k,S,I,P,L)},Kt=(d,h,b,T,x,k,S,I,P)=>{let w=0;const U=h.length;let L=d.length-1,j=U-1;for(;w<=L&&w<=j;){const H=d[w],B=h[w]=P?At(h[w]):rt(h[w]);if(bn(H,B))R(H,B,b,null,x,k,S,I,P);else break;w++}for(;w<=L&&w<=j;){const H=d[L],B=h[j]=P?At(h[j]):rt(h[j]);if(bn(H,B))R(H,B,b,null,x,k,S,I,P);else break;L--,j--}if(w>L){if(w<=j){const H=j+1,B=H<U?h[H].el:T;for(;w<=j;)R(null,h[w]=P?At(h[w]):rt(h[w]),b,B,x,k,S,I,P),w++}}else if(w>j)for(;w<=L;)xe(d[w],x,k,!0),w++;else{const H=w,B=w,Z=new Map;for(w=B;w<=j;w++){const Te=h[w]=P?At(h[w]):rt(h[w]);Te.key!=null&&Z.set(Te.key,w)}let G,fe=0;const Ce=j-B+1;let He=!1,qt=0;const Rt=new Array(Ce);for(w=0;w<Ce;w++)Rt[w]=0;for(w=H;w<=L;w++){const Te=d[w];if(fe>=Ce){xe(Te,x,k,!0);continue}let Fe;if(Te.key!=null)Fe=Z.get(Te.key);else for(G=B;G<=j;G++)if(Rt[G-B]===0&&bn(Te,h[G])){Fe=G;break}Fe===void 0?xe(Te,x,k,!0):(Rt[Fe-B]=w+1,Fe>=qt?qt=Fe:He=!0,R(Te,h[Fe],b,null,x,k,S,I,P),fe++)}const $n=He?dc(Rt):Qt;for(G=$n.length-1,w=Ce-1;w>=0;w--){const Te=B+w,Fe=h[Te],Wn=Te+1<U?h[Te+1].el:T;Rt[w]===0?R(null,Fe,b,Wn,x,k,S,I,P):He&&(G<0||w!==$n[G]?lt(Fe,b,Wn,2):G--)}}},lt=(d,h,b,T,x=null)=>{const{el:k,type:S,transition:I,children:P,shapeFlag:w}=d;if(w&6){lt(d.component.subTree,h,b,T);return}if(w&128){d.suspense.move(h,b,T);return}if(w&64){S.move(d,h,b,te);return}if(S===Oe){r(k,h,b);for(let L=0;L<P.length;L++)lt(P[L],h,b,T);r(d.anchor,h,b);return}if(S===ai){O(d,h,b);return}if(T!==2&&w&1&&I)if(T===0)I.beforeEnter(k),r(k,h,b),Se(()=>I.enter(k),x);else{const{leave:L,delayLeave:j,afterLeave:H}=I,B=()=>r(k,h,b),Z=()=>{L(k,()=>{B(),H&&H()})};j?j(k,B,Z):Z()}else r(k,h,b)},xe=(d,h,b,T=!1,x=!1)=>{const{type:k,props:S,ref:I,children:P,dynamicChildren:w,shapeFlag:U,patchFlag:L,dirs:j}=d;if(I!=null&&_i(I,null,b,d,!0),U&256){h.ctx.deactivate(d);return}const H=U&1&&j,B=!gr(d);let Z;if(B&&(Z=S&&S.onVnodeBeforeUnmount)&&nt(Z,h,d),U&6)Br(d.component,b,T);else{if(U&128){d.suspense.unmount(b,T);return}H&&Ft(d,null,h,"beforeUnmount"),U&64?d.type.remove(d,h,b,x,te,T):w&&(k!==Oe||L>0&&L&64)?ze(w,h,b,!1,!0):(k===Oe&&L&384||!x&&U&16)&&ze(P,h,b),T&&Yn(d)}(B&&(Z=S&&S.onVnodeUnmounted)||H)&&Se(()=>{Z&&nt(Z,h,d),H&&Ft(d,null,h,"unmounted")},b)},Yn=d=>{const{type:h,el:b,anchor:T,transition:x}=d;if(h===Oe){mn(b,T);return}if(h===ai){D(d);return}const k=()=>{i(b),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(d.shapeFlag&1&&x&&!x.persisted){const{leave:S,delayLeave:I}=x,P=()=>S(b,k);I?I(d.el,k,P):P()}else k()},mn=(d,h)=>{let b;for(;d!==h;)b=_(d),i(d),d=b;i(h)},Br=(d,h,b)=>{const{bum:T,scope:x,update:k,subTree:S,um:I}=d;T&&ni(T),x.stop(),k&&(k.active=!1,xe(S,d,h,b)),I&&Se(I,h),Se(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},ze=(d,h,b,T=!1,x=!1,k=0)=>{for(let S=k;S<d.length;S++)xe(d[S],h,b,T,x)},ue=d=>d.shapeFlag&6?ue(d.component.subTree):d.shapeFlag&128?d.suspense.next():_(d.anchor||d.el),Qe=(d,h,b)=>{d==null?h._vnode&&xe(h._vnode,null,null,!0):R(h._vnode||null,d,h,null,null,null,b),za(),io(),h._vnode=d},te={p:R,um:xe,m:lt,r:Yn,mt:yt,mc:K,pc:Q,pbc:Ie,n:ue,o:e};let pe,xt;return t&&([pe,xt]=t(te)),{render:Qe,hydrate:pe,createApp:fc(Qe,pe)}}function Dt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function To(e,t,n=!1){const r=e.children,i=t.children;if($(r)&&$(i))for(let a=0;a<r.length;a++){const s=r[a];let o=i[a];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[a]=At(i[a]),o.el=s.el),n||To(s,o)),o.type===jr&&(o.el=s.el)}}function dc(e){const t=e.slice(),n=[0];let r,i,a,s,o;const c=e.length;for(r=0;r<c;r++){const m=e[r];if(m!==0){if(i=n[n.length-1],e[i]<m){t[r]=i,n.push(r);continue}for(a=0,s=n.length-1;a<s;)o=a+s>>1,e[n[o]]<m?a=o+1:s=o;m<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,s=n[a-1];a-- >0;)n[a]=s,s=t[s];return n}const mc=e=>e.__isTeleport,Oe=Symbol(void 0),jr=Symbol(void 0),Pn=Symbol(void 0),ai=Symbol(void 0),wn=[];let qe=null;function Ue(e=!1){wn.push(qe=e?null:[])}function hc(){wn.pop(),qe=wn[wn.length-1]||null}let Sn=1;function Va(e){Sn+=e}function Eo(e){return e.dynamicChildren=Sn>0?qe||Qt:null,hc(),Sn>0&&qe&&qe.push(e),e}function $e(e,t,n,r,i,a){return Eo(ye(e,t,n,r,i,a,!0))}function pc(e,t,n,r,i){return Eo(Ne(e,t,n,r,i,!0))}function wi(e){return e?e.__v_isVNode===!0:!1}function bn(e,t){return e.type===t.type&&e.key===t.key}const zr="__vInternal",Ao=({key:e})=>e??null,br=({ref:e,ref_key:t,ref_for:n})=>e!=null?me(e)||we(e)||W(e)?{i:Ke,r:e,k:t,f:!!n}:e:null;function ye(e,t=null,n=null,r=0,i=null,a=e===Oe?0:1,s=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ao(t),ref:t&&br(t),scopeId:Dr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ke};return o?(ra(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=me(n)?8:16),Sn>0&&!s&&qe&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&qe.push(c),c}const Ne=vc;function vc(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Vf)&&(e=Pn),wi(e)){const o=sn(e,t,!0);return n&&ra(o,n),Sn>0&&!a&&qe&&(o.shapeFlag&6?qe[qe.indexOf(e)]=o:qe.push(o)),o.patchFlag|=-2,o}if(Ic(e)&&(e=e.__vccOpts),t){t=gc(t);let{class:o,style:c}=t;o&&!me(o)&&(t.class=Ot(o)),oe(c)&&(Gs(c)&&!$(c)&&(c=ke({},c)),t.style=ji(c))}const s=me(e)?1:Rf(e)?128:mc(e)?64:oe(e)?4:W(e)?2:0;return ye(e,t,n,r,i,s,a,!0)}function gc(e){return e?Gs(e)||zr in e?ke({},e):e:null}function sn(e,t,n=!1){const{props:r,ref:i,patchFlag:a,children:s}=e,o=t?yc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Ao(o),ref:t&&t.ref?n&&i?$(i)?i.concat(br(t)):[i,br(t)]:br(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Oe?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sn(e.ssContent),ssFallback:e.ssFallback&&sn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function bc(e=" ",t=0){return Ne(jr,null,e,t)}function rt(e){return e==null||typeof e=="boolean"?Ne(Pn):$(e)?Ne(Oe,null,e.slice()):typeof e=="object"?At(e):Ne(jr,null,String(e))}function At(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:sn(e)}function ra(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),ra(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(zr in t)?t._ctx=Ke:i===3&&Ke&&(Ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else W(t)?(t={default:t,_ctx:Ke},n=32):(t=String(t),r&64?(n=16,t=[bc(t)]):n=8);e.children=t,e.shapeFlag|=n}function yc(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Ot([t.class,r.class]));else if(i==="style")t.style=ji([t.style,r.style]);else if(Pr(i)){const a=t[i],s=r[i];s&&a!==s&&!($(a)&&a.includes(s))&&(t[i]=a?[].concat(a,s):s)}else i!==""&&(t[i]=r[i])}return t}function nt(e,t,n,r=null){Je(e,t,7,[n,r])}const xc=wo();let _c=0;function wc(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||xc,a={uid:_c++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Dl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bo(r,i),emitsOptions:so(r,i),emit:null,emitted:null,propsDefaults:se,inheritAttrs:r.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=Of.bind(null,a),e.ce&&e.ce(a),a}let de=null;const on=e=>{de=e,e.scope.on()},Wt=()=>{de&&de.scope.off(),de=null};function Oo(e){return e.vnode.shapeFlag&4}let Nn=!1;function Tc(e,t=!1){Nn=t;const{props:n,children:r}=e.vnode,i=Oo(e);rc(e,n,i,t),sc(e,r);const a=i?Ec(e,t):void 0;return Nn=!1,a}function Ec(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Js(new Proxy(e.ctx,Jf));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Oc(e):null;on(e),cn();const a=It(r,e,0,[e.props,i]);if(un(),Wt(),Fs(a)){if(a.then(Wt,Wt),t)return a.then(s=>{Ga(e,s,t)}).catch(s=>{Lr(s,e,0)});e.asyncDep=a}else Ga(e,a,t)}else ko(e,t)}function Ga(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=eo(t)),ko(e,n)}let Ja;function ko(e,t,n){const r=e.type;if(!e.render){if(!t&&Ja&&!r.render){const i=r.template||ta(e).template;if(i){const{isCustomElement:a,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:c}=r,m=ke(ke({isCustomElement:a,delimiters:o},s),c);r.render=Ja(i,m)}}e.render=r.render||Ge}on(e),cn(),Zf(e),un(),Wt()}function Ac(e){return new Proxy(e.attrs,{get(t,n){return Me(e,"get","$attrs"),t[n]}})}function Oc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Ac(e))},slots:e.slots,emit:e.emit,expose:t}}function ia(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(eo(Js(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in _n)return _n[n](e)},has(t,n){return n in t||n in _n}}))}function kc(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function Ic(e){return W(e)&&"__vccOpts"in e}const je=(e,t)=>yf(e,t,Nn);function Io(e,t,n){const r=arguments.length;return r===2?oe(t)&&!$(t)?wi(t)?Ne(e,null,[t]):Ne(e,t):Ne(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&wi(n)&&(n=[n]),Ne(e,t,n))}const Cc=Symbol(""),Pc=()=>pr(Cc),Sc="3.2.47",Nc="http://www.w3.org/2000/svg",zt=typeof document<"u"?document:null,Za=zt&&zt.createElement("template"),Mc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?zt.createElementNS(Nc,e):zt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>zt.createTextNode(e),createComment:e=>zt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>zt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,a){const s=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Za.innerHTML=r?`<svg>${e}</svg>`:e;const o=Za.content;if(r){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Rc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Lc(e,t,n){const r=e.style,i=me(n);if(n&&!i){if(t&&!me(t))for(const a in t)n[a]==null&&Ti(r,a,"");for(const a in n)Ti(r,a,n[a])}else{const a=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=a)}}const Qa=/\s*!important$/;function Ti(e,t,n){if($(n))n.forEach(r=>Ti(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Fc(e,t);Qa.test(n)?e.setProperty(fn(r),n.replace(Qa,""),"important"):e[r]=n}}const es=["Webkit","Moz","ms"],si={};function Fc(e,t){const n=si[t];if(n)return n;let r=st(t);if(r!=="filter"&&r in e)return si[t]=r;r=Mr(r);for(let i=0;i<es.length;i++){const a=es[i]+r;if(a in e)return si[t]=a}return t}const ts="http://www.w3.org/1999/xlink";function Dc(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ts,t.slice(6,t.length)):e.setAttributeNS(ts,t,n);else{const a=Il(t);n==null||a&&!Ms(n)?e.removeAttribute(t):e.setAttribute(t,a?"":n)}}function Uc(e,t,n,r,i,a,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,i,a),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let o=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ms(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(t)}function jc(e,t,n,r){e.addEventListener(t,n,r)}function zc(e,t,n,r){e.removeEventListener(t,n,r)}function Hc(e,t,n,r,i=null){const a=e._vei||(e._vei={}),s=a[t];if(r&&s)s.value=r;else{const[o,c]=Yc(t);if(r){const m=a[t]=Bc(r,i);jc(e,o,m,c)}else s&&(zc(e,o,s,c),a[t]=void 0)}}const ns=/(?:Once|Passive|Capture)$/;function Yc(e){let t;if(ns.test(e)){t={};let r;for(;r=e.match(ns);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):fn(e.slice(2)),t]}let oi=0;const $c=Promise.resolve(),Wc=()=>oi||($c.then(()=>oi=0),oi=Date.now());function Bc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Je(Xc(r,n.value),t,5,[r])};return n.value=e,n.attached=Wc(),n}function Xc(e,t){if($(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const rs=/^on[a-z]/,Kc=(e,t,n,r,i=!1,a,s,o,c)=>{t==="class"?Rc(e,r,i):t==="style"?Lc(e,n,r):Pr(t)?zi(t)||Hc(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qc(e,t,r,i))?Uc(e,t,r,a,s,o,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Dc(e,t,r,i))};function qc(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&rs.test(t)&&W(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||rs.test(t)&&me(n)?!1:t in e}const Vc=ke({patchProp:Kc},Mc);let is;function Gc(){return is||(is=cc(Vc))}const Jc=(...e)=>{const t=Gc().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Zc(r);if(!i)return;const a=t._component;!W(a)&&!a.render&&!a.template&&(a.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function Zc(e){return me(e)?document.querySelector(e):e}var Ei={},Qc={get exports(){return Ei},set exports(e){Ei=e}};/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */(function(e){(function(t,n,r,i){var a=["","webkit","Moz","MS","ms","o"],s=n.createElement("div"),o="function",c=Math.round,m=Math.abs,p=Date.now;function g(l,f,u){return setTimeout(O(l,u),f)}function _(l,f,u){return Array.isArray(l)?(C(l,u[f],u),!0):!1}function C(l,f,u){var v;if(l)if(l.forEach)l.forEach(f,u);else if(l.length!==i)for(v=0;v<l.length;)f.call(u,l[v],v,l),v++;else for(v in l)l.hasOwnProperty(v)&&f.call(u,l[v],v,l)}function z(l,f,u){var v="DEPRECATED METHOD: "+f+`
`+u+` AT 
`;return function(){var A=new Error("get-stack-trace"),N=A&&A.stack?A.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",X=t.console&&(t.console.warn||t.console.log);return X&&X.call(t.console,v,N),l.apply(this,arguments)}}var R;typeof Object.assign!="function"?R=function(f){if(f===i||f===null)throw new TypeError("Cannot convert undefined or null to object");for(var u=Object(f),v=1;v<arguments.length;v++){var A=arguments[v];if(A!==i&&A!==null)for(var N in A)A.hasOwnProperty(N)&&(u[N]=A[N])}return u}:R=Object.assign;var q=z(function(f,u,v){for(var A=Object.keys(u),N=0;N<A.length;)(!v||v&&f[A[N]]===i)&&(f[A[N]]=u[A[N]]),N++;return f},"extend","Use `assign`."),E=z(function(f,u){return q(f,u,!0)},"merge","Use `assign`.");function y(l,f,u){var v=f.prototype,A;A=l.prototype=Object.create(v),A.constructor=l,A._super=v,u&&R(A,u)}function O(l,f){return function(){return l.apply(f,arguments)}}function D(l,f){return typeof l==o?l.apply(f&&f[0]||i,f):l}function Y(l,f){return l===i?f:l}function ee(l,f,u){C(Ie(f),function(v){l.addEventListener(v,u,!1)})}function le(l,f,u){C(Ie(f),function(v){l.removeEventListener(v,u,!1)})}function K(l,f){for(;l;){if(l==f)return!0;l=l.parentNode}return!1}function ne(l,f){return l.indexOf(f)>-1}function Ie(l){return l.trim().split(/\s+/g)}function Le(l,f,u){if(l.indexOf&&!u)return l.indexOf(f);for(var v=0;v<l.length;){if(u&&l[v][u]==f||!u&&l[v]===f)return v;v++}return-1}function ot(l){return Array.prototype.slice.call(l,0)}function Mt(l,f,u){for(var v=[],A=[],N=0;N<l.length;){var X=f?l[N][f]:l[N];Le(A,X)<0&&v.push(l[N]),A[N]=X,N++}return u&&(f?v=v.sort(function(be,Ee){return be[f]>Ee[f]}):v=v.sort()),v}function yt(l,f){for(var u,v,A=f[0].toUpperCase()+f.slice(1),N=0;N<a.length;){if(u=a[N],v=u?u+A:f,v in l)return v;N++}return i}var Hn=1;function ge(){return Hn++}function re(l){var f=l.ownerDocument||l;return f.defaultView||f.parentWindow||t}var Q=/mobile|tablet|ip(ad|hone|od)|android/i,Ze="ontouchstart"in t,Kt=yt(t,"PointerEvent")!==i,lt=Ze&&Q.test(navigator.userAgent),xe="touch",Yn="pen",mn="mouse",Br="kinect",ze=25,ue=1,Qe=2,te=4,pe=8,xt=1,d=2,h=4,b=8,T=16,x=d|h,k=b|T,S=x|k,I=["x","y"],P=["clientX","clientY"];function w(l,f){var u=this;this.manager=l,this.callback=f,this.element=l.element,this.target=l.options.inputTarget,this.domHandler=function(v){D(l.options.enable,[l])&&u.handler(v)},this.init()}w.prototype={handler:function(){},init:function(){this.evEl&&ee(this.element,this.evEl,this.domHandler),this.evTarget&&ee(this.target,this.evTarget,this.domHandler),this.evWin&&ee(re(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&le(this.element,this.evEl,this.domHandler),this.evTarget&&le(this.target,this.evTarget,this.domHandler),this.evWin&&le(re(this.element),this.evWin,this.domHandler)}};function U(l){var f,u=l.options.inputClass;return u?f=u:Kt?f=Xr:lt?f=Xn:Ze?f=Kr:f=Bn,new f(l,L)}function L(l,f,u){var v=u.pointers.length,A=u.changedPointers.length,N=f&ue&&v-A===0,X=f&(te|pe)&&v-A===0;u.isFirst=!!N,u.isFinal=!!X,N&&(l.session={}),u.eventType=f,j(l,u),l.emit("hammer.input",u),l.recognize(u),l.session.prevInput=u}function j(l,f){var u=l.session,v=f.pointers,A=v.length;u.firstInput||(u.firstInput=Z(f)),A>1&&!u.firstMultiple?u.firstMultiple=Z(f):A===1&&(u.firstMultiple=!1);var N=u.firstInput,X=u.firstMultiple,ve=X?X.center:N.center,be=f.center=G(v);f.timeStamp=p(),f.deltaTime=f.timeStamp-N.timeStamp,f.angle=qt(ve,be),f.distance=He(ve,be),H(u,f),f.offsetDirection=Ce(f.deltaX,f.deltaY);var Ee=fe(f.deltaTime,f.deltaX,f.deltaY);f.overallVelocityX=Ee.x,f.overallVelocityY=Ee.y,f.overallVelocity=m(Ee.x)>m(Ee.y)?Ee.x:Ee.y,f.scale=X?$n(X.pointers,v):1,f.rotation=X?Rt(X.pointers,v):0,f.maxPointers=u.prevInput?f.pointers.length>u.prevInput.maxPointers?f.pointers.length:u.prevInput.maxPointers:f.pointers.length,B(u,f);var tt=l.element;K(f.srcEvent.target,tt)&&(tt=f.srcEvent.target),f.target=tt}function H(l,f){var u=f.center,v=l.offsetDelta||{},A=l.prevDelta||{},N=l.prevInput||{};(f.eventType===ue||N.eventType===te)&&(A=l.prevDelta={x:N.deltaX||0,y:N.deltaY||0},v=l.offsetDelta={x:u.x,y:u.y}),f.deltaX=A.x+(u.x-v.x),f.deltaY=A.y+(u.y-v.y)}function B(l,f){var u=l.lastInterval||f,v=f.timeStamp-u.timeStamp,A,N,X,ve;if(f.eventType!=pe&&(v>ze||u.velocity===i)){var be=f.deltaX-u.deltaX,Ee=f.deltaY-u.deltaY,tt=fe(v,be,Ee);N=tt.x,X=tt.y,A=m(tt.x)>m(tt.y)?tt.x:tt.y,ve=Ce(be,Ee),l.lastInterval=f}else A=u.velocity,N=u.velocityX,X=u.velocityY,ve=u.direction;f.velocity=A,f.velocityX=N,f.velocityY=X,f.direction=ve}function Z(l){for(var f=[],u=0;u<l.pointers.length;)f[u]={clientX:c(l.pointers[u].clientX),clientY:c(l.pointers[u].clientY)},u++;return{timeStamp:p(),pointers:f,center:G(f),deltaX:l.deltaX,deltaY:l.deltaY}}function G(l){var f=l.length;if(f===1)return{x:c(l[0].clientX),y:c(l[0].clientY)};for(var u=0,v=0,A=0;A<f;)u+=l[A].clientX,v+=l[A].clientY,A++;return{x:c(u/f),y:c(v/f)}}function fe(l,f,u){return{x:f/l||0,y:u/l||0}}function Ce(l,f){return l===f?xt:m(l)>=m(f)?l<0?d:h:f<0?b:T}function He(l,f,u){u||(u=I);var v=f[u[0]]-l[u[0]],A=f[u[1]]-l[u[1]];return Math.sqrt(v*v+A*A)}function qt(l,f,u){u||(u=I);var v=f[u[0]]-l[u[0]],A=f[u[1]]-l[u[1]];return Math.atan2(A,v)*180/Math.PI}function Rt(l,f){return qt(f[1],f[0],P)+qt(l[1],l[0],P)}function $n(l,f){return He(f[0],f[1],P)/He(l[0],l[1],P)}var Te={mousedown:ue,mousemove:Qe,mouseup:te},Fe="mousedown",Wn="mousemove mouseup";function Bn(){this.evEl=Fe,this.evWin=Wn,this.pressed=!1,w.apply(this,arguments)}y(Bn,w,{handler:function(f){var u=Te[f.type];u&ue&&f.button===0&&(this.pressed=!0),u&Qe&&f.which!==1&&(u=te),this.pressed&&(u&te&&(this.pressed=!1),this.callback(this.manager,u,{pointers:[f],changedPointers:[f],pointerType:mn,srcEvent:f}))}});var sl={pointerdown:ue,pointermove:Qe,pointerup:te,pointercancel:pe,pointerout:pe},ol={2:xe,3:Yn,4:mn,5:Br},ya="pointerdown",xa="pointermove pointerup pointercancel";t.MSPointerEvent&&!t.PointerEvent&&(ya="MSPointerDown",xa="MSPointerMove MSPointerUp MSPointerCancel");function Xr(){this.evEl=ya,this.evWin=xa,w.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}y(Xr,w,{handler:function(f){var u=this.store,v=!1,A=f.type.toLowerCase().replace("ms",""),N=sl[A],X=ol[f.pointerType]||f.pointerType,ve=X==xe,be=Le(u,f.pointerId,"pointerId");N&ue&&(f.button===0||ve)?be<0&&(u.push(f),be=u.length-1):N&(te|pe)&&(v=!0),!(be<0)&&(u[be]=f,this.callback(this.manager,N,{pointers:u,changedPointers:[f],pointerType:X,srcEvent:f}),v&&u.splice(be,1))}});var ll={touchstart:ue,touchmove:Qe,touchend:te,touchcancel:pe},fl="touchstart",cl="touchstart touchmove touchend touchcancel";function _a(){this.evTarget=fl,this.evWin=cl,this.started=!1,w.apply(this,arguments)}y(_a,w,{handler:function(f){var u=ll[f.type];if(u===ue&&(this.started=!0),!!this.started){var v=ul.call(this,f,u);u&(te|pe)&&v[0].length-v[1].length===0&&(this.started=!1),this.callback(this.manager,u,{pointers:v[0],changedPointers:v[1],pointerType:xe,srcEvent:f})}}});function ul(l,f){var u=ot(l.touches),v=ot(l.changedTouches);return f&(te|pe)&&(u=Mt(u.concat(v),"identifier",!0)),[u,v]}var dl={touchstart:ue,touchmove:Qe,touchend:te,touchcancel:pe},ml="touchstart touchmove touchend touchcancel";function Xn(){this.evTarget=ml,this.targetIds={},w.apply(this,arguments)}y(Xn,w,{handler:function(f){var u=dl[f.type],v=hl.call(this,f,u);v&&this.callback(this.manager,u,{pointers:v[0],changedPointers:v[1],pointerType:xe,srcEvent:f})}});function hl(l,f){var u=ot(l.touches),v=this.targetIds;if(f&(ue|Qe)&&u.length===1)return v[u[0].identifier]=!0,[u,u];var A,N,X=ot(l.changedTouches),ve=[],be=this.target;if(N=u.filter(function(Ee){return K(Ee.target,be)}),f===ue)for(A=0;A<N.length;)v[N[A].identifier]=!0,A++;for(A=0;A<X.length;)v[X[A].identifier]&&ve.push(X[A]),f&(te|pe)&&delete v[X[A].identifier],A++;if(ve.length)return[Mt(N.concat(ve),"identifier",!0),ve]}var pl=2500,wa=25;function Kr(){w.apply(this,arguments);var l=O(this.handler,this);this.touch=new Xn(this.manager,l),this.mouse=new Bn(this.manager,l),this.primaryTouch=null,this.lastTouches=[]}y(Kr,w,{handler:function(f,u,v){var A=v.pointerType==xe,N=v.pointerType==mn;if(!(N&&v.sourceCapabilities&&v.sourceCapabilities.firesTouchEvents)){if(A)vl.call(this,u,v);else if(N&&gl.call(this,v))return;this.callback(f,u,v)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});function vl(l,f){l&ue?(this.primaryTouch=f.changedPointers[0].identifier,Ta.call(this,f)):l&(te|pe)&&Ta.call(this,f)}function Ta(l){var f=l.changedPointers[0];if(f.identifier===this.primaryTouch){var u={x:f.clientX,y:f.clientY};this.lastTouches.push(u);var v=this.lastTouches,A=function(){var N=v.indexOf(u);N>-1&&v.splice(N,1)};setTimeout(A,pl)}}function gl(l){for(var f=l.srcEvent.clientX,u=l.srcEvent.clientY,v=0;v<this.lastTouches.length;v++){var A=this.lastTouches[v],N=Math.abs(f-A.x),X=Math.abs(u-A.y);if(N<=wa&&X<=wa)return!0}return!1}var Ea=yt(s.style,"touchAction"),Aa=Ea!==i,Oa="compute",ka="auto",qr="manipulation",Lt="none",hn="pan-x",pn="pan-y",Kn=yl();function Vr(l,f){this.manager=l,this.set(f)}Vr.prototype={set:function(l){l==Oa&&(l=this.compute()),Aa&&this.manager.element.style&&Kn[l]&&(this.manager.element.style[Ea]=l),this.actions=l.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var l=[];return C(this.manager.recognizers,function(f){D(f.options.enable,[f])&&(l=l.concat(f.getTouchAction()))}),bl(l.join(" "))},preventDefaults:function(l){var f=l.srcEvent,u=l.offsetDirection;if(this.manager.session.prevented){f.preventDefault();return}var v=this.actions,A=ne(v,Lt)&&!Kn[Lt],N=ne(v,pn)&&!Kn[pn],X=ne(v,hn)&&!Kn[hn];if(A){var ve=l.pointers.length===1,be=l.distance<2,Ee=l.deltaTime<250;if(ve&&be&&Ee)return}if(!(X&&N)&&(A||N&&u&x||X&&u&k))return this.preventSrc(f)},preventSrc:function(l){this.manager.session.prevented=!0,l.preventDefault()}};function bl(l){if(ne(l,Lt))return Lt;var f=ne(l,hn),u=ne(l,pn);return f&&u?Lt:f||u?f?hn:pn:ne(l,qr)?qr:ka}function yl(){if(!Aa)return!1;var l={},f=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(u){l[u]=f?t.CSS.supports("touch-action",u):!0}),l}var qn=1,De=2,Vt=4,_t=8,ft=_t,vn=16,et=32;function ct(l){this.options=R({},this.defaults,l||{}),this.id=ge(),this.manager=null,this.options.enable=Y(this.options.enable,!0),this.state=qn,this.simultaneous={},this.requireFail=[]}ct.prototype={defaults:{},set:function(l){return R(this.options,l),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(l){if(_(l,"recognizeWith",this))return this;var f=this.simultaneous;return l=Vn(l,this),f[l.id]||(f[l.id]=l,l.recognizeWith(this)),this},dropRecognizeWith:function(l){return _(l,"dropRecognizeWith",this)?this:(l=Vn(l,this),delete this.simultaneous[l.id],this)},requireFailure:function(l){if(_(l,"requireFailure",this))return this;var f=this.requireFail;return l=Vn(l,this),Le(f,l)===-1&&(f.push(l),l.requireFailure(this)),this},dropRequireFailure:function(l){if(_(l,"dropRequireFailure",this))return this;l=Vn(l,this);var f=Le(this.requireFail,l);return f>-1&&this.requireFail.splice(f,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(l){return!!this.simultaneous[l.id]},emit:function(l){var f=this,u=this.state;function v(A){f.manager.emit(A,l)}u<_t&&v(f.options.event+Ia(u)),v(f.options.event),l.additionalEvent&&v(l.additionalEvent),u>=_t&&v(f.options.event+Ia(u))},tryEmit:function(l){if(this.canEmit())return this.emit(l);this.state=et},canEmit:function(){for(var l=0;l<this.requireFail.length;){if(!(this.requireFail[l].state&(et|qn)))return!1;l++}return!0},recognize:function(l){var f=R({},l);if(!D(this.options.enable,[this,f])){this.reset(),this.state=et;return}this.state&(ft|vn|et)&&(this.state=qn),this.state=this.process(f),this.state&(De|Vt|_t|vn)&&this.tryEmit(f)},process:function(l){},getTouchAction:function(){},reset:function(){}};function Ia(l){return l&vn?"cancel":l&_t?"end":l&Vt?"move":l&De?"start":""}function Ca(l){return l==T?"down":l==b?"up":l==d?"left":l==h?"right":""}function Vn(l,f){var u=f.manager;return u?u.get(l):l}function Ye(){ct.apply(this,arguments)}y(Ye,ct,{defaults:{pointers:1},attrTest:function(l){var f=this.options.pointers;return f===0||l.pointers.length===f},process:function(l){var f=this.state,u=l.eventType,v=f&(De|Vt),A=this.attrTest(l);return v&&(u&pe||!A)?f|vn:v||A?u&te?f|_t:f&De?f|Vt:De:et}});function Gn(){Ye.apply(this,arguments),this.pX=null,this.pY=null}y(Gn,Ye,{defaults:{event:"pan",threshold:10,pointers:1,direction:S},getTouchAction:function(){var l=this.options.direction,f=[];return l&x&&f.push(pn),l&k&&f.push(hn),f},directionTest:function(l){var f=this.options,u=!0,v=l.distance,A=l.direction,N=l.deltaX,X=l.deltaY;return A&f.direction||(f.direction&x?(A=N===0?xt:N<0?d:h,u=N!=this.pX,v=Math.abs(l.deltaX)):(A=X===0?xt:X<0?b:T,u=X!=this.pY,v=Math.abs(l.deltaY))),l.direction=A,u&&v>f.threshold&&A&f.direction},attrTest:function(l){return Ye.prototype.attrTest.call(this,l)&&(this.state&De||!(this.state&De)&&this.directionTest(l))},emit:function(l){this.pX=l.deltaX,this.pY=l.deltaY;var f=Ca(l.direction);f&&(l.additionalEvent=this.options.event+f),this._super.emit.call(this,l)}});function Gr(){Ye.apply(this,arguments)}y(Gr,Ye,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Lt]},attrTest:function(l){return this._super.attrTest.call(this,l)&&(Math.abs(l.scale-1)>this.options.threshold||this.state&De)},emit:function(l){if(l.scale!==1){var f=l.scale<1?"in":"out";l.additionalEvent=this.options.event+f}this._super.emit.call(this,l)}});function Jr(){ct.apply(this,arguments),this._timer=null,this._input=null}y(Jr,ct,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[ka]},process:function(l){var f=this.options,u=l.pointers.length===f.pointers,v=l.distance<f.threshold,A=l.deltaTime>f.time;if(this._input=l,!v||!u||l.eventType&(te|pe)&&!A)this.reset();else if(l.eventType&ue)this.reset(),this._timer=g(function(){this.state=ft,this.tryEmit()},f.time,this);else if(l.eventType&te)return ft;return et},reset:function(){clearTimeout(this._timer)},emit:function(l){this.state===ft&&(l&&l.eventType&te?this.manager.emit(this.options.event+"up",l):(this._input.timeStamp=p(),this.manager.emit(this.options.event,this._input)))}});function Zr(){Ye.apply(this,arguments)}y(Zr,Ye,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Lt]},attrTest:function(l){return this._super.attrTest.call(this,l)&&(Math.abs(l.rotation)>this.options.threshold||this.state&De)}});function Qr(){Ye.apply(this,arguments)}y(Qr,Ye,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:x|k,pointers:1},getTouchAction:function(){return Gn.prototype.getTouchAction.call(this)},attrTest:function(l){var f=this.options.direction,u;return f&(x|k)?u=l.overallVelocity:f&x?u=l.overallVelocityX:f&k&&(u=l.overallVelocityY),this._super.attrTest.call(this,l)&&f&l.offsetDirection&&l.distance>this.options.threshold&&l.maxPointers==this.options.pointers&&m(u)>this.options.velocity&&l.eventType&te},emit:function(l){var f=Ca(l.offsetDirection);f&&this.manager.emit(this.options.event+f,l),this.manager.emit(this.options.event,l)}});function Jn(){ct.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}y(Jn,ct,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[qr]},process:function(l){var f=this.options,u=l.pointers.length===f.pointers,v=l.distance<f.threshold,A=l.deltaTime<f.time;if(this.reset(),l.eventType&ue&&this.count===0)return this.failTimeout();if(v&&A&&u){if(l.eventType!=te)return this.failTimeout();var N=this.pTime?l.timeStamp-this.pTime<f.interval:!0,X=!this.pCenter||He(this.pCenter,l.center)<f.posThreshold;this.pTime=l.timeStamp,this.pCenter=l.center,!X||!N?this.count=1:this.count+=1,this._input=l;var ve=this.count%f.taps;if(ve===0)return this.hasRequireFailures()?(this._timer=g(function(){this.state=ft,this.tryEmit()},f.interval,this),De):ft}return et},failTimeout:function(){return this._timer=g(function(){this.state=et},this.options.interval,this),et},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ft&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function ut(l,f){return f=f||{},f.recognizers=Y(f.recognizers,ut.defaults.preset),new ei(l,f)}ut.VERSION="2.0.7",ut.defaults={domEvents:!1,touchAction:Oa,enable:!0,inputTarget:null,inputClass:null,preset:[[Zr,{enable:!1}],[Gr,{enable:!1},["rotate"]],[Qr,{direction:x}],[Gn,{direction:x},["swipe"]],[Jn],[Jn,{event:"doubletap",taps:2},["tap"]],[Jr]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var xl=1,Pa=2;function ei(l,f){this.options=R({},ut.defaults,f||{}),this.options.inputTarget=this.options.inputTarget||l,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=l,this.input=U(this),this.touchAction=new Vr(this,this.options.touchAction),Sa(this,!0),C(this.options.recognizers,function(u){var v=this.add(new u[0](u[1]));u[2]&&v.recognizeWith(u[2]),u[3]&&v.requireFailure(u[3])},this)}ei.prototype={set:function(l){return R(this.options,l),l.touchAction&&this.touchAction.update(),l.inputTarget&&(this.input.destroy(),this.input.target=l.inputTarget,this.input.init()),this},stop:function(l){this.session.stopped=l?Pa:xl},recognize:function(l){var f=this.session;if(!f.stopped){this.touchAction.preventDefaults(l);var u,v=this.recognizers,A=f.curRecognizer;(!A||A&&A.state&ft)&&(A=f.curRecognizer=null);for(var N=0;N<v.length;)u=v[N],f.stopped!==Pa&&(!A||u==A||u.canRecognizeWith(A))?u.recognize(l):u.reset(),!A&&u.state&(De|Vt|_t)&&(A=f.curRecognizer=u),N++}},get:function(l){if(l instanceof ct)return l;for(var f=this.recognizers,u=0;u<f.length;u++)if(f[u].options.event==l)return f[u];return null},add:function(l){if(_(l,"add",this))return this;var f=this.get(l.options.event);return f&&this.remove(f),this.recognizers.push(l),l.manager=this,this.touchAction.update(),l},remove:function(l){if(_(l,"remove",this))return this;if(l=this.get(l),l){var f=this.recognizers,u=Le(f,l);u!==-1&&(f.splice(u,1),this.touchAction.update())}return this},on:function(l,f){if(l!==i&&f!==i){var u=this.handlers;return C(Ie(l),function(v){u[v]=u[v]||[],u[v].push(f)}),this}},off:function(l,f){if(l!==i){var u=this.handlers;return C(Ie(l),function(v){f?u[v]&&u[v].splice(Le(u[v],f),1):delete u[v]}),this}},emit:function(l,f){this.options.domEvents&&_l(l,f);var u=this.handlers[l]&&this.handlers[l].slice();if(!(!u||!u.length)){f.type=l,f.preventDefault=function(){f.srcEvent.preventDefault()};for(var v=0;v<u.length;)u[v](f),v++}},destroy:function(){this.element&&Sa(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function Sa(l,f){var u=l.element;if(u.style){var v;C(l.options.cssProps,function(A,N){v=yt(u.style,N),f?(l.oldCssProps[v]=u.style[v],u.style[v]=A):u.style[v]=l.oldCssProps[v]||""}),f||(l.oldCssProps={})}}function _l(l,f){var u=n.createEvent("Event");u.initEvent(l,!0,!0),u.gesture=f,f.target.dispatchEvent(u)}R(ut,{INPUT_START:ue,INPUT_MOVE:Qe,INPUT_END:te,INPUT_CANCEL:pe,STATE_POSSIBLE:qn,STATE_BEGAN:De,STATE_CHANGED:Vt,STATE_ENDED:_t,STATE_RECOGNIZED:ft,STATE_CANCELLED:vn,STATE_FAILED:et,DIRECTION_NONE:xt,DIRECTION_LEFT:d,DIRECTION_RIGHT:h,DIRECTION_UP:b,DIRECTION_DOWN:T,DIRECTION_HORIZONTAL:x,DIRECTION_VERTICAL:k,DIRECTION_ALL:S,Manager:ei,Input:w,TouchAction:Vr,TouchInput:Xn,MouseInput:Bn,PointerEventInput:Xr,TouchMouseInput:Kr,SingleTouchInput:_a,Recognizer:ct,AttrRecognizer:Ye,Tap:Jn,Pan:Gn,Swipe:Qr,Pinch:Gr,Rotate:Zr,Press:Jr,on:ee,off:le,each:C,merge:E,extend:q,assign:R,inherit:y,bindFn:O,prefixed:yt});var wl=typeof t<"u"?t:typeof self<"u"?self:{};wl.Hammer=ut,typeof i=="function"&&i.amd?i(function(){return ut}):e.exports?e.exports=ut:t[r]=ut})(window,document,"Hammer")})(Qc);const as=Ei;const eu=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},tu={setup(){const e={topRow:["Q","W","E","R","T","Y","U","I","O","P"],middleRow:["A","S","D","F","G","H","J","K","L"],bottomRow:["Z","X","C","V","B","N","M"]},t=[{letters:[" "," "," "," "," "],color:["empty","empty","empty","empty","empty"],isValidInput:!0},{letters:[" "," "," "," "," "],color:["empty","empty","empty","empty","empty"],isValidInput:!0},{letters:[" "," "," "," "," "],color:["empty","empty","empty","empty","empty"],isValidInput:!0},{letters:[" "," "," "," "," "],color:["empty","empty","empty","empty","empty"],isValidInput:!0},{letters:[" "," "," "," "," "],color:["empty","empty","empty","empty","empty"],isValidInput:!0}],n=Tt(JSON.parse(JSON.stringify(t))),r=Tt([]),i=Tt(0),a=Tt(0),s=Tt({}),o=Tt(""),c=Tt(0),m=Tt(0);function p(E){const y=n.value[i.value],O=y.letters.every(D=>D!==" ");if(E==="BACKSPACE"){a.value!==0&&(a.value--,y.letters[a.value]=" ",y.color[a.value]="empty");return}if(a.value<=4&&E!=="ENTER"){y.letters[a.value]=E,y.color[a.value]="pending",a.value++;return}if(E==="ENTER"&&!O){y.isValidInput=!1,setTimeout(()=>{y.isValidInput=!0},400),C("Not enough letters");return}if(E==="ENTER"&&O&&!r.value.includes(y.letters.join("").toLowerCase())){y.isValidInput=!1,setTimeout(()=>{y.isValidInput=!0},400),C("Not in word list");return}if(E==="ENTER"&&O){document.removeEventListener("keydown",_);const D=o.value.split(""),Y={};D.map(K=>{Y[K]?Y[K]+=1:Y[K]=1});for(let K=0;K<D.length;K++){const ne=y.letters[K];ne===D[K]&&(Y[ne]===1?delete Y[ne]:Y[ne]--)}let ee=0;const le=setInterval(()=>{const K=y.letters[ee];K===D[ee]?(y.color[ee]="flip right-place",s.value[K]="key-right-place"):K in Y?(Y[K]===1?delete Y[K]:Y[K]--,y.color[ee]="flip wrong-place",s.value[K]!=="key-right-place"&&(s.value[K]="key-wrong-place")):(y.color[ee]="flip not-exist",s.value[K]!=="key-right-place"&&s.value[K]!=="key-wrong-place"&&(s.value[K]="key-not-exist")),ee++,ee===5&&(clearInterval(le),i.value++,a.value=0,o.value===y.letters.join("")?setTimeout(()=>{R("win")},500):i.value===5?setTimeout(()=>{R("lose")},500):document.addEventListener("keydown",_))},300)}}function g(E){p(E)}function _(E){const y=E.key.toUpperCase();(e.topRow.includes(y)||e.middleRow.includes(y)||e.bottomRow.includes(y))&&p(y),(y==="BACKSPACE"||y==="ENTER")&&p(y)}function C(E,y=1500){const O=document.createElement("div");O.innerText=E,O.style.position="absolute",O.style.top="30%",O.style.left="50%",O.style.transform="translate(-50%, -50%)",O.style.backgroundColor="rgba(0, 0, 0, 0.8)",O.style.color="white",O.style.padding="10px",O.style.borderRadius="5px",O.style.zIndex="9999",O.style.userSelect="none",document.body.appendChild(O),O.addEventListener("click",()=>{O.style.animation="fade-out 0.4s",O.addEventListener("animationend",()=>{O.remove()})}),setTimeout(()=>{O.style.animation="fade-out 0.4s",O.addEventListener("animationend",()=>{O.remove()})},y)}function z(){fetch("./words.txt").then(E=>E.text()).then(E=>{let y=E.replace(/\r/g,"").split(`
`);const O=Math.floor(Math.random()*y.length);o.value=y[O].toUpperCase(),console.log(o.value)})}function R(E){let y;c.value++,E==="win"?(m.value++,y=`You win! You've won ${m.value} out of ${c.value} games! (${(m.value/c.value*100).toFixed(2)}%)`):y=`The word was: ${o.value}! You've won ${m.value} out of ${c.value} games! (${(m.value/c.value*100).toFixed(2)}%)`,C(y,3e3),setTimeout(()=>{n.value=JSON.parse(JSON.stringify(t)),s.value={},i.value=0,a.value=0,z(),document.addEventListener("keydown",_)},4e3)}return uo(async()=>{z(),fetch("./dictionary.txt").then(D=>D.text()).then(D=>{r.value=D.replace(/\r/g,"").split(`
`)}),document.addEventListener("keydown",_);const E=document.querySelector("body"),y=new as.Manager(E),O=new as.Tap({event:"doubletap",taps:2});y.add(O),y.on("doubletap",D=>{D.preventDefault()})}),mo(()=>{document.removeEventListener("keydown",_)}),{solution:o,dictionary:r,keyboard:e,keyboardColors:s,gameRows:n,handleKeyDown:_,handleClick:g,played:c,won:m,alert:E=>window.alert(E)}},components:{Fragment:Oe}},Co=e=>(kf("data-v-e6946559"),e=e(),If(),e),nu={class:"max-h-full min-h-full flex flex-col justify-center items-center"},ru={class:"-mt-12 lg:mt-0 mx-auto flex justify-between w-[80%] max-w-[80%] sm:max-w-lg md:max-w-xl px-4 sm:px-8 bg-gray-700 py-4 rounded-xl bg-opacity-60"},iu=Co(()=>ye("h1",{class:"text-2xl sm:text-3xl md:text-4xl tracking-widest"},"WORDLE",-1)),au={class:"flex flex-col items-center"},su={class:"flex flex-col my-10"},ou={class:"flex flex-row"},lu={class:"flex flex-col bg-gray-700 bg-opacity-50 rounded-2xl py-4 px-2 sm:px-6"},fu={class:"flex flex-row justify-center"},cu=["onClick"],uu={class:"flex flex-row justify-center"},du=["onClick"],mu={class:"flex flex-row justify-center"},hu=Co(()=>ye("svg",{xmlns:`http
            ://www.w3.org/2000/svg`,height:"20",viewBox:"0 0 24 24",width:"36"},[ye("path",{fill:"white",d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"})],-1)),pu=[hu],vu=["onClick"];function gu(e,t,n,r,i,a){const s=qf("font-awesome-icon");return Ue(),$e("div",nu,[ye("div",ru,[ye("button",{onClick:t[0]||(t[0]=o=>r.alert("the cake is a lie"))},[Ne(s,{icon:"fa-solid fa-circle-question",class:"text-xl lg:text-2xl"})]),iu,ye("button",{onClick:t[1]||(t[1]=o=>r.alert("42"))},[Ne(s,{icon:"fa-solid fa-gear",class:"text-xl lg:text-2xl"})])]),ye("div",au,[ye("div",su,[(Ue(!0),$e(Oe,null,gn(r.gameRows,(o,c)=>(Ue(),$e("div",{key:c,class:Ot([{jiggle:!o.isValidInput},"flex flex-row justify-between items-center select-none"])},[ye("div",ou,[(Ue(!0),$e(Oe,null,gn(o.letters,(m,p)=>(Ue(),$e("div",{key:p,class:Ot([o.color[p],"flex justify-center items-center text-xl sm:text-2xl m-1 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-sm font-bold"])},Zn(m),3))),128))])],2))),128))])]),ye("div",lu,[ye("div",fu,[(Ue(!0),$e(Oe,null,gn(r.keyboard.topRow,o=>(Ue(),$e("button",{key:o,class:Ot([r.keyboardColors[o],"keyboard-key m-[3px] p-1.5 py-2.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline"]),onClick:c=>r.handleClick(o)},Zn(o),11,cu))),128))]),ye("div",uu,[(Ue(!0),$e(Oe,null,gn(r.keyboard.middleRow,o=>(Ue(),$e("button",{key:o,class:Ot([r.keyboardColors[o],"keyboard-key m-[3px] p-1.5 py-2.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline"]),onClick:c=>r.handleClick(o)},Zn(o),11,du))),128))]),ye("div",mu,[ye("button",{class:"keyboard-key m-[3px] p-1.5 py-2.5 px-1.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline",onClick:t[2]||(t[2]=o=>r.handleClick("BACKSPACE"))},pu),(Ue(!0),$e(Oe,null,gn(r.keyboard.bottomRow,o=>(Ue(),$e("button",{key:o,class:Ot([r.keyboardColors[o],"keyboard-key m-[3px] p-1.5 py-2.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline"]),onClick:c=>r.handleClick(o)},Zn(o),11,vu))),128)),ye("button",{class:"keyboard-key m-[3px] p-1.5 py-2.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline",onClick:t[3]||(t[3]=o=>r.handleClick("ENTER"))}," ENTER ")])])])}const bu=eu(tu,[["render",gu],["__scopeId","data-v-e6946559"]]),yu={__name:"App",setup(e){return(t,n)=>(Ue(),pc(bu))}};function ss(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ss(Object(n),!0).forEach(function(r){he(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ss(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ar(e){return Ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ar(e)}function xu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function os(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _u(e,t,n){return t&&os(e.prototype,t),n&&os(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function aa(e,t){return Tu(e)||Au(e,t)||Po(e,t)||ku()}function Un(e){return wu(e)||Eu(e)||Po(e)||Ou()}function wu(e){if(Array.isArray(e))return Ai(e)}function Tu(e){if(Array.isArray(e))return e}function Eu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Au(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,a=!1,s,o;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(c){a=!0,o=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(a)throw o}}return r}}function Po(e,t){if(e){if(typeof e=="string")return Ai(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ai(e,t)}}function Ai(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ou(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ku(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ls=function(){},sa={},So={},No=null,Mo={mark:ls,measure:ls};try{typeof window<"u"&&(sa=window),typeof document<"u"&&(So=document),typeof MutationObserver<"u"&&(No=MutationObserver),typeof performance<"u"&&(Mo=performance)}catch{}var Iu=sa.navigator||{},fs=Iu.userAgent,cs=fs===void 0?"":fs,Pt=sa,ae=So,us=No,ar=Mo;Pt.document;var bt=!!ae.documentElement&&!!ae.head&&typeof ae.addEventListener=="function"&&typeof ae.createElement=="function",Ro=~cs.indexOf("MSIE")||~cs.indexOf("Trident/"),sr,or,lr,fr,cr,ht="___FONT_AWESOME___",Oi=16,Lo="fa",Fo="svg-inline--fa",Bt="data-fa-i2svg",ki="data-fa-pseudo-element",Cu="data-fa-pseudo-element-pending",oa="data-prefix",la="data-icon",ds="fontawesome-i2svg",Pu="async",Su=["HTML","HEAD","STYLE","SCRIPT"],Do=function(){try{return!0}catch{return!1}}(),ie="classic",ce="sharp",fa=[ie,ce];function jn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ie]}})}var Mn=jn((sr={},he(sr,ie,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),he(sr,ce,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),sr)),Rn=jn((or={},he(or,ie,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),he(or,ce,{solid:"fass",regular:"fasr"}),or)),Ln=jn((lr={},he(lr,ie,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),he(lr,ce,{fass:"fa-solid",fasr:"fa-regular"}),lr)),Nu=jn((fr={},he(fr,ie,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),he(fr,ce,{"fa-solid":"fass","fa-regular":"fasr"}),fr)),Mu=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Uo="fa-layers-text",Ru=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Lu=jn((cr={},he(cr,ie,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),he(cr,ce,{900:"fass",400:"fasr"}),cr)),jo=[1,2,3,4,5,6,7,8,9,10],Fu=jo.concat([11,12,13,14,15,16,17,18,19,20]),Du=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ht={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Fn=new Set;Object.keys(Rn[ie]).map(Fn.add.bind(Fn));Object.keys(Rn[ce]).map(Fn.add.bind(Fn));var Uu=[].concat(fa,Un(Fn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ht.GROUP,Ht.SWAP_OPACITY,Ht.PRIMARY,Ht.SECONDARY]).concat(jo.map(function(e){return"".concat(e,"x")})).concat(Fu.map(function(e){return"w-".concat(e)})),Tn=Pt.FontAwesomeConfig||{};function ju(e){var t=ae.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function zu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ae&&typeof ae.querySelector=="function"){var Hu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Hu.forEach(function(e){var t=aa(e,2),n=t[0],r=t[1],i=zu(ju(n));i!=null&&(Tn[r]=i)})}var zo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Lo,replacementClass:Fo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Tn.familyPrefix&&(Tn.cssPrefix=Tn.familyPrefix);var ln=M(M({},zo),Tn);ln.autoReplaceSvg||(ln.observeMutations=!1);var F={};Object.keys(zo).forEach(function(e){Object.defineProperty(F,e,{enumerable:!0,set:function(n){ln[e]=n,En.forEach(function(r){return r(F)})},get:function(){return ln[e]}})});Object.defineProperty(F,"familyPrefix",{enumerable:!0,set:function(t){ln.cssPrefix=t,En.forEach(function(n){return n(F)})},get:function(){return ln.cssPrefix}});Pt.FontAwesomeConfig=F;var En=[];function Yu(e){return En.push(e),function(){En.splice(En.indexOf(e),1)}}var Et=Oi,at={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $u(e){if(!(!e||!bt)){var t=ae.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ae.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],s=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=a)}return ae.head.insertBefore(t,r),e}}var Wu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Dn(){for(var e=12,t="";e-- >0;)t+=Wu[Math.random()*62|0];return t}function dn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ca(e){return e.classList?dn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ho(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Bu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ho(e[n]),'" ')},"").trim()}function Hr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ua(e){return e.size!==at.size||e.x!==at.x||e.y!==at.y||e.rotate!==at.rotate||e.flipX||e.flipY}function Xu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(a," ").concat(s," ").concat(o)},m={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:m}}function Ku(e){var t=e.transform,n=e.width,r=n===void 0?Oi:n,i=e.height,a=i===void 0?Oi:i,s=e.startCentered,o=s===void 0?!1:s,c="";return o&&Ro?c+="translate(".concat(t.x/Et-r/2,"em, ").concat(t.y/Et-a/2,"em) "):o?c+="translate(calc(-50% + ".concat(t.x/Et,"em), calc(-50% + ").concat(t.y/Et,"em)) "):c+="translate(".concat(t.x/Et,"em, ").concat(t.y/Et,"em) "),c+="scale(".concat(t.size/Et*(t.flipX?-1:1),", ").concat(t.size/Et*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var qu=`:root, :host {
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
}`;function Yo(){var e=Lo,t=Fo,n=F.cssPrefix,r=F.replacementClass,i=qu;if(n!==e||r!==t){var a=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");i=i.replace(a,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return i}var ms=!1;function li(){F.autoAddCss&&!ms&&($u(Yo()),ms=!0)}var Vu={mixout:function(){return{dom:{css:Yo,insertCss:li}}},hooks:function(){return{beforeDOMElementCreation:function(){li()},beforeI2svg:function(){li()}}}},pt=Pt||{};pt[ht]||(pt[ht]={});pt[ht].styles||(pt[ht].styles={});pt[ht].hooks||(pt[ht].hooks={});pt[ht].shims||(pt[ht].shims=[]);var Ve=pt[ht],$o=[],Gu=function e(){ae.removeEventListener("DOMContentLoaded",e),Or=1,$o.map(function(t){return t()})},Or=!1;bt&&(Or=(ae.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ae.readyState),Or||ae.addEventListener("DOMContentLoaded",Gu));function Ju(e){bt&&(Or?setTimeout(e,0):$o.push(e))}function zn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e=="string"?Ho(e):"<".concat(t," ").concat(Bu(r),">").concat(a.map(zn).join(""),"</").concat(t,">")}function hs(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Zu=function(t,n){return function(r,i,a,s){return t.call(n,r,i,a,s)}},fi=function(t,n,r,i){var a=Object.keys(t),s=a.length,o=i!==void 0?Zu(n,i):n,c,m,p;for(r===void 0?(c=1,p=t[a[0]]):(c=0,p=r);c<s;c++)m=a[c],p=o(p,t[m],m,t);return p};function Qu(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var a=e.charCodeAt(n++);(a&64512)==56320?t.push(((i&1023)<<10)+(a&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Ii(e){var t=Qu(e);return t.length===1?t[0].toString(16):null}function ed(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function ps(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ci(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,a=ps(t);typeof Ve.hooks.addPack=="function"&&!i?Ve.hooks.addPack(e,ps(t)):Ve.styles[e]=M(M({},Ve.styles[e]||{}),a),e==="fas"&&Ci("fa",t)}var ur,dr,mr,Jt=Ve.styles,td=Ve.shims,nd=(ur={},he(ur,ie,Object.values(Ln[ie])),he(ur,ce,Object.values(Ln[ce])),ur),da=null,Wo={},Bo={},Xo={},Ko={},qo={},rd=(dr={},he(dr,ie,Object.keys(Mn[ie])),he(dr,ce,Object.keys(Mn[ce])),dr);function id(e){return~Uu.indexOf(e)}function ad(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!id(i)?i:null}var Vo=function(){var t=function(a){return fi(Jt,function(s,o,c){return s[c]=fi(o,a,{}),s},{})};Wo=t(function(i,a,s){if(a[3]&&(i[a[3]]=s),a[2]){var o=a[2].filter(function(c){return typeof c=="number"});o.forEach(function(c){i[c.toString(16)]=s})}return i}),Bo=t(function(i,a,s){if(i[s]=s,a[2]){var o=a[2].filter(function(c){return typeof c=="string"});o.forEach(function(c){i[c]=s})}return i}),qo=t(function(i,a,s){var o=a[2];return i[s]=s,o.forEach(function(c){i[c]=s}),i});var n="far"in Jt||F.autoFetchSvg,r=fi(td,function(i,a){var s=a[0],o=a[1],c=a[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(i.names[s]={prefix:o,iconName:c}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:o,iconName:c}),i},{names:{},unicodes:{}});Xo=r.names,Ko=r.unicodes,da=Yr(F.styleDefault,{family:F.familyDefault})};Yu(function(e){da=Yr(e.styleDefault,{family:F.familyDefault})});Vo();function ma(e,t){return(Wo[e]||{})[t]}function sd(e,t){return(Bo[e]||{})[t]}function Yt(e,t){return(qo[e]||{})[t]}function Go(e){return Xo[e]||{prefix:null,iconName:null}}function od(e){var t=Ko[e],n=ma("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function St(){return da}var ha=function(){return{prefix:null,iconName:null,rest:[]}};function Yr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ie:n,i=Mn[r][e],a=Rn[r][e]||Rn[r][i],s=e in Ve.styles?e:null;return a||s||null}var vs=(mr={},he(mr,ie,Object.keys(Ln[ie])),he(mr,ce,Object.keys(Ln[ce])),mr);function $r(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,a=(t={},he(t,ie,"".concat(F.cssPrefix,"-").concat(ie)),he(t,ce,"".concat(F.cssPrefix,"-").concat(ce)),t),s=null,o=ie;(e.includes(a[ie])||e.some(function(m){return vs[ie].includes(m)}))&&(o=ie),(e.includes(a[ce])||e.some(function(m){return vs[ce].includes(m)}))&&(o=ce);var c=e.reduce(function(m,p){var g=ad(F.cssPrefix,p);if(Jt[p]?(p=nd[o].includes(p)?Nu[o][p]:p,s=p,m.prefix=p):rd[o].indexOf(p)>-1?(s=p,m.prefix=Yr(p,{family:o})):g?m.iconName=g:p!==F.replacementClass&&p!==a[ie]&&p!==a[ce]&&m.rest.push(p),!i&&m.prefix&&m.iconName){var _=s==="fa"?Go(m.iconName):{},C=Yt(m.prefix,m.iconName);_.prefix&&(s=null),m.iconName=_.iconName||C||m.iconName,m.prefix=_.prefix||m.prefix,m.prefix==="far"&&!Jt.far&&Jt.fas&&!F.autoFetchSvg&&(m.prefix="fas")}return m},ha());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&o===ce&&(Jt.fass||F.autoFetchSvg)&&(c.prefix="fass",c.iconName=Yt(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||s==="fa")&&(c.prefix=St()||"fas"),c}var ld=function(){function e(){xu(this,e),this.definitions={}}return _u(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=M(M({},n.definitions[o]||{}),s[o]),Ci(o,s[o]);var c=Ln[ie][o];c&&Ci(c,s[o]),Vo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(a){var s=i[a],o=s.prefix,c=s.iconName,m=s.icon,p=m[2];n[o]||(n[o]={}),p.length>0&&p.forEach(function(g){typeof g=="string"&&(n[o][g]=m)}),n[o][c]=m}),n}}]),e}(),gs=[],Zt={},rn={},fd=Object.keys(rn);function cd(e,t){var n=t.mixoutsTo;return gs=e,Zt={},Object.keys(rn).forEach(function(r){fd.indexOf(r)===-1&&delete rn[r]}),gs.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),Ar(i[s])==="object"&&Object.keys(i[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=i[s][o]})}),r.hooks){var a=r.hooks();Object.keys(a).forEach(function(s){Zt[s]||(Zt[s]=[]),Zt[s].push(a[s])})}r.provides&&r.provides(rn)}),n}function Pi(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a=Zt[e]||[];return a.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function Xt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Zt[e]||[];i.forEach(function(a){a.apply(null,n)})}function vt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return rn[e]?rn[e].apply(null,t):void 0}function Si(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||St();if(t)return t=Yt(n,t)||t,hs(Jo.definitions,n,t)||hs(Ve.styles,n,t)}var Jo=new ld,ud=function(){F.autoReplaceSvg=!1,F.observeMutations=!1,Xt("noAuto")},dd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return bt?(Xt("beforeI2svg",t),vt("pseudoElements2svg",t),vt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;F.autoReplaceSvg===!1&&(F.autoReplaceSvg=!0),F.observeMutations=!0,Ju(function(){hd({autoReplaceSvgRoot:n}),Xt("watch",t)})}},md={icon:function(t){if(t===null)return null;if(Ar(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Yt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Yr(t[0]);return{prefix:r,iconName:Yt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(F.cssPrefix,"-"))>-1||t.match(Mu))){var i=$r(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||St(),iconName:Yt(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var a=St();return{prefix:a,iconName:Yt(a,t)||t}}}},Re={noAuto:ud,config:F,dom:dd,parse:md,library:Jo,findIconDefinition:Si,toHtml:zn},hd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ae:n;(Object.keys(Ve.styles).length>0||F.autoFetchSvg)&&bt&&F.autoReplaceSvg&&Re.dom.i2svg({node:r})};function Wr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return zn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(bt){var r=ae.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function pd(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,s=e.transform;if(ua(s)&&n.found&&!r.found){var o=n.width,c=n.height,m={x:o/c/2,y:.5};i.style=Hr(M(M({},a),{},{"transform-origin":"".concat(m.x+s.x/16,"em ").concat(m.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function vd(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,s=a===!0?"".concat(t,"-").concat(F.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:s}),children:r}]}]}function pa(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,s=e.transform,o=e.symbol,c=e.title,m=e.maskId,p=e.titleId,g=e.extra,_=e.watchable,C=_===void 0?!1:_,z=r.found?r:n,R=z.width,q=z.height,E=i==="fak",y=[F.replacementClass,a?"".concat(F.cssPrefix,"-").concat(a):""].filter(function(ne){return g.classes.indexOf(ne)===-1}).filter(function(ne){return ne!==""||!!ne}).concat(g.classes).join(" "),O={children:[],attributes:M(M({},g.attributes),{},{"data-prefix":i,"data-icon":a,class:y,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(R," ").concat(q)})},D=E&&!~g.classes.indexOf("fa-fw")?{width:"".concat(R/q*16*.0625,"em")}:{};C&&(O.attributes[Bt]=""),c&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(p||Dn())},children:[c]}),delete O.attributes.title);var Y=M(M({},O),{},{prefix:i,iconName:a,main:n,mask:r,maskId:m,transform:s,symbol:o,styles:M(M({},D),g.styles)}),ee=r.found&&n.found?vt("generateAbstractMask",Y)||{children:[],attributes:{}}:vt("generateAbstractIcon",Y)||{children:[],attributes:{}},le=ee.children,K=ee.attributes;return Y.children=le,Y.attributes=K,o?vd(Y):pd(Y)}function bs(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.title,s=e.extra,o=e.watchable,c=o===void 0?!1:o,m=M(M(M({},s.attributes),a?{title:a}:{}),{},{class:s.classes.join(" ")});c&&(m[Bt]="");var p=M({},s.styles);ua(i)&&(p.transform=Ku({transform:i,startCentered:!0,width:n,height:r}),p["-webkit-transform"]=p.transform);var g=Hr(p);g.length>0&&(m.style=g);var _=[];return _.push({tag:"span",attributes:m,children:[t]}),a&&_.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),_}function gd(e){var t=e.content,n=e.title,r=e.extra,i=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),a=Hr(r.styles);a.length>0&&(i.style=a);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var ci=Ve.styles;function Ni(e){var t=e[0],n=e[1],r=e.slice(4),i=aa(r,1),a=i[0],s=null;return Array.isArray(a)?s={tag:"g",attributes:{class:"".concat(F.cssPrefix,"-").concat(Ht.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Ht.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(F.cssPrefix,"-").concat(Ht.PRIMARY),fill:"currentColor",d:a[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:s}}var bd={found:!1,width:512,height:512};function yd(e,t){!Do&&!F.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Mi(e,t){var n=t;return t==="fa"&&F.styleDefault!==null&&(t=St()),new Promise(function(r,i){if(vt("missingIconAbstract"),n==="fa"){var a=Go(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&ci[t]&&ci[t][e]){var s=ci[t][e];return r(Ni(s))}yd(e,t),r(M(M({},bd),{},{icon:F.showMissingIcons&&e?vt("missingIconAbstract")||{}:{}}))})}var ys=function(){},Ri=F.measurePerformance&&ar&&ar.mark&&ar.measure?ar:{mark:ys,measure:ys},xn='FA "6.3.0"',xd=function(t){return Ri.mark("".concat(xn," ").concat(t," begins")),function(){return Zo(t)}},Zo=function(t){Ri.mark("".concat(xn," ").concat(t," ends")),Ri.measure("".concat(xn," ").concat(t),"".concat(xn," ").concat(t," begins"),"".concat(xn," ").concat(t," ends"))},va={begin:xd,end:Zo},yr=function(){};function xs(e){var t=e.getAttribute?e.getAttribute(Bt):null;return typeof t=="string"}function _d(e){var t=e.getAttribute?e.getAttribute(oa):null,n=e.getAttribute?e.getAttribute(la):null;return t&&n}function wd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(F.replacementClass)}function Td(){if(F.autoReplaceSvg===!0)return xr.replace;var e=xr[F.autoReplaceSvg];return e||xr.replace}function Ed(e){return ae.createElementNS("http://www.w3.org/2000/svg",e)}function Ad(e){return ae.createElement(e)}function Qo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Ed:Ad:n;if(typeof e=="string")return ae.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var a=e.children||[];return a.forEach(function(s){i.appendChild(Qo(s,{ceFn:r}))}),i}function Od(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var xr={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Qo(i),n)}),n.getAttribute(Bt)===null&&F.keepOriginalSource){var r=ae.createComment(Od(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ca(n).indexOf(F.replacementClass))return xr.replace(t);var i=new RegExp("".concat(F.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var a=r[0].attributes.class.split(" ").reduce(function(o,c){return c===F.replacementClass||c.match(i)?o.toSvg.push(c):o.toNode.push(c),o},{toNode:[],toSvg:[]});r[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var s=r.map(function(o){return zn(o)}).join(`
`);n.setAttribute(Bt,""),n.innerHTML=s}};function _s(e){e()}function el(e,t){var n=typeof t=="function"?t:yr;if(e.length===0)n();else{var r=_s;F.mutateApproach===Pu&&(r=Pt.requestAnimationFrame||_s),r(function(){var i=Td(),a=va.begin("mutate");e.map(i),a(),n()})}}var ga=!1;function tl(){ga=!0}function Li(){ga=!1}var kr=null;function ws(e){if(us&&F.observeMutations){var t=e.treeCallback,n=t===void 0?yr:t,r=e.nodeCallback,i=r===void 0?yr:r,a=e.pseudoElementsCallback,s=a===void 0?yr:a,o=e.observeMutationsRoot,c=o===void 0?ae:o;kr=new us(function(m){if(!ga){var p=St();dn(m).forEach(function(g){if(g.type==="childList"&&g.addedNodes.length>0&&!xs(g.addedNodes[0])&&(F.searchPseudoElements&&s(g.target),n(g.target)),g.type==="attributes"&&g.target.parentNode&&F.searchPseudoElements&&s(g.target.parentNode),g.type==="attributes"&&xs(g.target)&&~Du.indexOf(g.attributeName))if(g.attributeName==="class"&&_d(g.target)){var _=$r(ca(g.target)),C=_.prefix,z=_.iconName;g.target.setAttribute(oa,C||p),z&&g.target.setAttribute(la,z)}else wd(g.target)&&i(g.target)})}}),bt&&kr.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function kd(){kr&&kr.disconnect()}function Id(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var a=i.split(":"),s=a[0],o=a.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function Cd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=$r(ca(e));return i.prefix||(i.prefix=St()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=sd(i.prefix,e.innerText)||ma(i.prefix,Ii(e.innerText))),!i.iconName&&F.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Pd(e){var t=dn(e.attributes).reduce(function(i,a){return i.name!=="class"&&i.name!=="style"&&(i[a.name]=a.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return F.autoA11y&&(n?t["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(r||Dn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Sd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:at,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ts(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Cd(e),r=n.iconName,i=n.prefix,a=n.rest,s=Pd(e),o=Pi("parseNodeAttributes",{},e),c=t.styleParser?Id(e):[];return M({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:at,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:c,attributes:s}},o)}var Nd=Ve.styles;function nl(e){var t=F.autoReplaceSvg==="nest"?Ts(e,{styleParser:!1}):Ts(e);return~t.extra.classes.indexOf(Uo)?vt("generateLayersText",e,t):vt("generateSvgReplacementMutation",e,t)}var Nt=new Set;fa.map(function(e){Nt.add("fa-".concat(e))});Object.keys(Mn[ie]).map(Nt.add.bind(Nt));Object.keys(Mn[ce]).map(Nt.add.bind(Nt));Nt=Un(Nt);function Es(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!bt)return Promise.resolve();var n=ae.documentElement.classList,r=function(g){return n.add("".concat(ds,"-").concat(g))},i=function(g){return n.remove("".concat(ds,"-").concat(g))},a=F.autoFetchSvg?Nt:fa.map(function(p){return"fa-".concat(p)}).concat(Object.keys(Nd));a.includes("fa")||a.push("fa");var s=[".".concat(Uo,":not([").concat(Bt,"])")].concat(a.map(function(p){return".".concat(p,":not([").concat(Bt,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=dn(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),i("complete");else return Promise.resolve();var c=va.begin("onTree"),m=o.reduce(function(p,g){try{var _=nl(g);_&&p.push(_)}catch(C){Do||C.name==="MissingIcon"&&console.error(C)}return p},[]);return new Promise(function(p,g){Promise.all(m).then(function(_){el(_,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),c(),p()})}).catch(function(_){c(),g(_)})})}function Md(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;nl(e).then(function(n){n&&el([n],t)})}function Rd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Si(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Si(i||{})),e(r,M(M({},n),{},{mask:i}))}}var Ld=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?at:r,a=n.symbol,s=a===void 0?!1:a,o=n.mask,c=o===void 0?null:o,m=n.maskId,p=m===void 0?null:m,g=n.title,_=g===void 0?null:g,C=n.titleId,z=C===void 0?null:C,R=n.classes,q=R===void 0?[]:R,E=n.attributes,y=E===void 0?{}:E,O=n.styles,D=O===void 0?{}:O;if(t){var Y=t.prefix,ee=t.iconName,le=t.icon;return Wr(M({type:"icon"},t),function(){return Xt("beforeDOMElementCreation",{iconDefinition:t,params:n}),F.autoA11y&&(_?y["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(z||Dn()):(y["aria-hidden"]="true",y.focusable="false")),pa({icons:{main:Ni(le),mask:c?Ni(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:ee,transform:M(M({},at),i),symbol:s,title:_,maskId:p,titleId:z,extra:{attributes:y,styles:D,classes:q}})})}},Fd={mixout:function(){return{icon:Rd(Ld)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Es,n.nodeCallback=Md,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ae:r,a=n.callback,s=a===void 0?function(){}:a;return Es(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,a=r.title,s=r.titleId,o=r.prefix,c=r.transform,m=r.symbol,p=r.mask,g=r.maskId,_=r.extra;return new Promise(function(C,z){Promise.all([Mi(i,o),p.iconName?Mi(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(R){var q=aa(R,2),E=q[0],y=q[1];C([n,pa({icons:{main:E,mask:y},prefix:o,iconName:i,transform:c,symbol:m,maskId:g,title:a,titleId:s,extra:_,watchable:!0})])}).catch(z)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,a=n.main,s=n.transform,o=n.styles,c=Hr(o);c.length>0&&(i.style=c);var m;return ua(s)&&(m=vt("generateAbstractTransformGrouping",{main:a,transform:s,containerWidth:a.width,iconWidth:a.width})),r.push(m||a.icon),{children:r,attributes:i}}}},Dd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,a=i===void 0?[]:i;return Wr({type:"layer"},function(){Xt("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(c){s=s.concat(c.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(F.cssPrefix,"-layers")].concat(Un(a)).join(" ")},children:s}]})}}}},Ud={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,a=i===void 0?null:i,s=r.classes,o=s===void 0?[]:s,c=r.attributes,m=c===void 0?{}:c,p=r.styles,g=p===void 0?{}:p;return Wr({type:"counter",content:n},function(){return Xt("beforeDOMElementCreation",{content:n,params:r}),gd({content:n.toString(),title:a,extra:{attributes:m,styles:g,classes:["".concat(F.cssPrefix,"-layers-counter")].concat(Un(o))}})})}}}},jd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,a=i===void 0?at:i,s=r.title,o=s===void 0?null:s,c=r.classes,m=c===void 0?[]:c,p=r.attributes,g=p===void 0?{}:p,_=r.styles,C=_===void 0?{}:_;return Wr({type:"text",content:n},function(){return Xt("beforeDOMElementCreation",{content:n,params:r}),bs({content:n,transform:M(M({},at),a),title:o,extra:{attributes:g,styles:C,classes:["".concat(F.cssPrefix,"-layers-text")].concat(Un(m))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,a=r.transform,s=r.extra,o=null,c=null;if(Ro){var m=parseInt(getComputedStyle(n).fontSize,10),p=n.getBoundingClientRect();o=p.width/m,c=p.height/m}return F.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,bs({content:n.innerHTML,width:o,height:c,transform:a,title:i,extra:s,watchable:!0})])}}},zd=new RegExp('"',"ug"),As=[1105920,1112319];function Hd(e){var t=e.replace(zd,""),n=ed(t,0),r=n>=As[0]&&n<=As[1],i=t.length===2?t[0]===t[1]:!1;return{value:Ii(i?t[0]:t),isSecondary:r||i}}function Os(e,t){var n="".concat(Cu).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=dn(e.children),s=a.filter(function(le){return le.getAttribute(ki)===t})[0],o=Pt.getComputedStyle(e,t),c=o.getPropertyValue("font-family").match(Ru),m=o.getPropertyValue("font-weight"),p=o.getPropertyValue("content");if(s&&!c)return e.removeChild(s),r();if(c&&p!=="none"&&p!==""){var g=o.getPropertyValue("content"),_=~["Sharp"].indexOf(c[2])?ce:ie,C=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Rn[_][c[2].toLowerCase()]:Lu[_][m],z=Hd(g),R=z.value,q=z.isSecondary,E=c[0].startsWith("FontAwesome"),y=ma(C,R),O=y;if(E){var D=od(R);D.iconName&&D.prefix&&(y=D.iconName,C=D.prefix)}if(y&&!q&&(!s||s.getAttribute(oa)!==C||s.getAttribute(la)!==O)){e.setAttribute(n,O),s&&e.removeChild(s);var Y=Sd(),ee=Y.extra;ee.attributes[ki]=t,Mi(y,C).then(function(le){var K=pa(M(M({},Y),{},{icons:{main:le,mask:ha()},prefix:C,iconName:O,extra:ee,watchable:!0})),ne=ae.createElement("svg");t==="::before"?e.insertBefore(ne,e.firstChild):e.appendChild(ne),ne.outerHTML=K.map(function(Ie){return zn(Ie)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Yd(e){return Promise.all([Os(e,"::before"),Os(e,"::after")])}function $d(e){return e.parentNode!==document.head&&!~Su.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ki)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ks(e){if(bt)return new Promise(function(t,n){var r=dn(e.querySelectorAll("*")).filter($d).map(Yd),i=va.begin("searchPseudoElements");tl(),Promise.all(r).then(function(){i(),Li(),t()}).catch(function(){i(),Li(),n()})})}var Wd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ks,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ae:r;F.searchPseudoElements&&ks(i)}}},Is=!1,Bd={mixout:function(){return{dom:{unwatch:function(){tl(),Is=!0}}}},hooks:function(){return{bootstrap:function(){ws(Pi("mutationObserverCallbacks",{}))},noAuto:function(){kd()},watch:function(n){var r=n.observeMutationsRoot;Is?Li():ws(Pi("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Cs=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var a=i.toLowerCase().split("-"),s=a[0],o=a.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},Xd={mixout:function(){return{parse:{transform:function(n){return Cs(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Cs(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,a=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(a/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),m="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),p="rotate(".concat(i.rotate," 0 0)"),g={transform:"".concat(c," ").concat(m," ").concat(p)},_={transform:"translate(".concat(s/2*-1," -256)")},C={outer:o,inner:g,path:_};return{tag:"g",attributes:M({},C.outer),children:[{tag:"g",attributes:M({},C.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),C.path)}]}]}}}},ui={x:0,y:0,width:"100%",height:"100%"};function Ps(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Kd(e){return e.tag==="g"?e.children:[e]}var qd={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),a=i?$r(i.split(" ").map(function(s){return s.trim()})):ha();return a.prefix||(a.prefix=St()),n.mask=a,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,a=n.main,s=n.mask,o=n.maskId,c=n.transform,m=a.width,p=a.icon,g=s.width,_=s.icon,C=Xu({transform:c,containerWidth:g,iconWidth:m}),z={tag:"rect",attributes:M(M({},ui),{},{fill:"white"})},R=p.children?{children:p.children.map(Ps)}:{},q={tag:"g",attributes:M({},C.inner),children:[Ps(M({tag:p.tag,attributes:M(M({},p.attributes),C.path)},R))]},E={tag:"g",attributes:M({},C.outer),children:[q]},y="mask-".concat(o||Dn()),O="clip-".concat(o||Dn()),D={tag:"mask",attributes:M(M({},ui),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[z,E]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:Kd(_)},D]};return r.push(Y,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(y,")")},ui)}),{children:r,attributes:i}}}},Vd={provides:function(t){var n=!1;Pt.matchMedia&&(n=Pt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=M(M({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:M(M({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Gd={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),a=i===null?!1:i===""?!0:i;return n.symbol=a,n}}}},Jd=[Vu,Fd,Dd,Ud,jd,Wd,Bd,Xd,qd,Vd,Gd];cd(Jd,{mixoutsTo:Re});Re.noAuto;var rl=Re.config,Zd=Re.library;Re.dom;var Ir=Re.parse;Re.findIconDefinition;Re.toHtml;var Qd=Re.icon;Re.layer;var em=Re.text;Re.counter;function Ss(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ss(Object(n),!0).forEach(function(r){Pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ss(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Cr(e){return Cr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cr(e)}function Pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function nm(e,t){if(e==null)return{};var n=tm(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Fi(e){return rm(e)||im(e)||am(e)||sm()}function rm(e){if(Array.isArray(e))return Di(e)}function im(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function am(e,t){if(e){if(typeof e=="string")return Di(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Di(e,t)}}function Di(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function sm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var om=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},il={exports:{}};(function(e){(function(t){var n=function(E,y,O){if(!m(y)||g(y)||_(y)||C(y)||c(y))return y;var D,Y=0,ee=0;if(p(y))for(D=[],ee=y.length;Y<ee;Y++)D.push(n(E,y[Y],O));else{D={};for(var le in y)Object.prototype.hasOwnProperty.call(y,le)&&(D[E(le,O)]=n(E,y[le],O))}return D},r=function(E,y){y=y||{};var O=y.separator||"_",D=y.split||/(?=[A-Z])/;return E.split(D).join(O)},i=function(E){return z(E)?E:(E=E.replace(/[\-_\s]+(.)?/g,function(y,O){return O?O.toUpperCase():""}),E.substr(0,1).toLowerCase()+E.substr(1))},a=function(E){var y=i(E);return y.substr(0,1).toUpperCase()+y.substr(1)},s=function(E,y){return r(E,y).toLowerCase()},o=Object.prototype.toString,c=function(E){return typeof E=="function"},m=function(E){return E===Object(E)},p=function(E){return o.call(E)=="[object Array]"},g=function(E){return o.call(E)=="[object Date]"},_=function(E){return o.call(E)=="[object RegExp]"},C=function(E){return o.call(E)=="[object Boolean]"},z=function(E){return E=E-0,E===E},R=function(E,y){var O=y&&"process"in y?y.process:y;return typeof O!="function"?E:function(D,Y){return O(D,E,Y)}},q={camelize:i,decamelize:s,pascalize:a,depascalize:s,camelizeKeys:function(E,y){return n(R(i,y),E)},decamelizeKeys:function(E,y){return n(R(s,y),E,y)},pascalizeKeys:function(E,y){return n(R(a,y),E)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=q:t.humps=q})(om)})(il);var lm=il.exports,fm=["class","style"];function cm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=lm.camelize(n.slice(0,r)),a=n.slice(r+1).trim();return t[i]=a,t},{})}function um(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ba(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return ba(c)}),i=Object.keys(e.attributes||{}).reduce(function(c,m){var p=e.attributes[m];switch(m){case"class":c.class=um(p);break;case"style":c.style=cm(p);break;default:c.attrs[m]=p}return c},{attrs:{},class:{},style:{}});n.class;var a=n.style,s=a===void 0?{}:a,o=nm(n,fm);return Io(e.tag,Xe(Xe(Xe({},t),{},{class:i.class,style:Xe(Xe({},i.style),s)},i.attrs),o),r)}var al=!1;try{al=!0}catch{}function dm(){if(!al&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function An(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Pe({},e,t):{}}function mm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Pe(t,"fa-".concat(e.size),e.size!==null),Pe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Pe(t,"fa-pull-".concat(e.pull),e.pull!==null),Pe(t,"fa-swap-opacity",e.swapOpacity),Pe(t,"fa-bounce",e.bounce),Pe(t,"fa-shake",e.shake),Pe(t,"fa-beat",e.beat),Pe(t,"fa-fade",e.fade),Pe(t,"fa-beat-fade",e.beatFade),Pe(t,"fa-flash",e.flash),Pe(t,"fa-spin-pulse",e.spinPulse),Pe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ns(e){if(e&&Cr(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ir.icon)return Ir.icon(e);if(e===null)return null;if(Cr(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var hm=ea({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=je(function(){return Ns(t.icon)}),a=je(function(){return An("classes",mm(t))}),s=je(function(){return An("transform",typeof t.transform=="string"?Ir.transform(t.transform):t.transform)}),o=je(function(){return An("mask",Ns(t.mask))}),c=je(function(){return Qd(i.value,Xe(Xe(Xe(Xe({},a.value),s.value),o.value),{},{symbol:t.symbol,title:t.title}))});vr(c,function(p){if(!p)return dm("Could not find one or more icon(s)",i.value,o.value)},{immediate:!0});var m=je(function(){return c.value?ba(c.value.abstract[0],{},r):null});return function(){return m.value}}});ea({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,i=rl.familyPrefix,a=je(function(){return["".concat(i,"-layers")].concat(Fi(t.fixedWidth?["".concat(i,"-fw")]:[]))});return function(){return Io("div",{class:a.value},r.default?r.default():[])}}});ea({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,i=rl.familyPrefix,a=je(function(){return An("classes",[].concat(Fi(t.counter?["".concat(i,"-layers-counter")]:[]),Fi(t.position?["".concat(i,"-layers-").concat(t.position)]:[])))}),s=je(function(){return An("transform",typeof t.transform=="string"?Ir.transform(t.transform):t.transform)}),o=je(function(){var m=em(t.value.toString(),Xe(Xe({},s.value),a.value)),p=m.abstract;return t.counter&&(p[0].attributes.class=p[0].attributes.class.replace("fa-layers-text","")),p[0]}),c=je(function(){return ba(o.value,{},r)});return function(){return c.value}}});var pm={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},vm={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M481.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-30.9 28.1c-7.7 7.1-11.4 17.5-10.9 27.9c.1 2.9 .2 5.8 .2 8.8s-.1 5.9-.2 8.8c-.5 10.5 3.1 20.9 10.9 27.9l30.9 28.1c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-39.7-12.6c-10-3.2-20.8-1.1-29.7 4.6c-4.9 3.1-9.9 6.1-15.1 8.7c-9.3 4.8-16.5 13.2-18.8 23.4l-8.9 40.7c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-8.9-40.7c-2.2-10.2-9.5-18.6-18.8-23.4c-5.2-2.7-10.2-5.6-15.1-8.7c-8.8-5.7-19.7-7.8-29.7-4.6L69.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l30.9-28.1c7.7-7.1 11.4-17.5 10.9-27.9c-.1-2.9-.2-5.8-.2-8.8s.1-5.9 .2-8.8c.5-10.5-3.1-20.9-10.9-27.9L8.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l39.7 12.6c10 3.2 20.8 1.1 29.7-4.6c4.9-3.1 9.9-6.1 15.1-8.7c9.3-4.8 16.5-13.2 18.8-23.4l8.9-40.7c2-9.1 9-16.3 18.2-17.8C213.3 1.2 227.5 0 242 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l8.9 40.7c2.2 10.2 9.4 18.6 18.8 23.4c5.2 2.7 10.2 5.6 15.1 8.7c8.8 5.7 19.7 7.7 29.7 4.6l39.7-12.6c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM242 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]};Zd.add(vm,pm);Jc(yu).component("font-awesome-icon",hm).mount("#app");
