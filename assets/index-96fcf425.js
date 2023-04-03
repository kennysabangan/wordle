(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Yr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function Wr(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ae(r)?fs(r):Wr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ae(e))return e;if(G(e))return e}}const os=/;(?![^(]*\))/g,ss=/:([^]+)/,ls=/\/\*.*?\*\//gs;function fs(e){const t={};return e.replace(ls,"").split(os).forEach(n=>{if(n){const r=n.split(ss);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Qe(e){let t="";if(ae(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const r=Qe(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const cs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",us=Yr(cs);function Si(e){return!!e||e===""}const dn=e=>ae(e)?e:e==null?"":j(e)||G(e)&&(e.toString===Fi||!D(e.toString))?JSON.stringify(e,Ni,2):String(e),Ni=(e,t)=>t&&t.__v_isRef?Ni(e,t.value):At(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Mi(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!j(t)&&!Li(t)?String(t):t,J={},kt=[],Te=()=>{},ds=()=>!1,ms=/^on[^a-z]/,Yn=e=>ms.test(e),Kr=e=>e.startsWith("onUpdate:"),de=Object.assign,qr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ps=Object.prototype.hasOwnProperty,U=(e,t)=>ps.call(e,t),j=Array.isArray,At=e=>Wn(e)==="[object Map]",Mi=e=>Wn(e)==="[object Set]",D=e=>typeof e=="function",ae=e=>typeof e=="string",Xr=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",Ri=e=>G(e)&&D(e.then)&&D(e.catch),Fi=Object.prototype.toString,Wn=e=>Fi.call(e),hs=e=>Wn(e).slice(8,-1),Li=e=>Wn(e)==="[object Object]",Vr=e=>ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Pn=Yr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},gs=/-(\w)/g,ze=Kn(e=>e.replace(gs,(t,n)=>n?n.toUpperCase():"")),vs=/\B([A-Z])/g,Nt=Kn(e=>e.replace(vs,"-$1").toLowerCase()),qn=Kn(e=>e.charAt(0).toUpperCase()+e.slice(1)),lr=Kn(e=>e?`on${qn(e)}`:""),Kt=(e,t)=>!Object.is(e,t),fr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Fn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},bs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Sa;const ys=()=>Sa||(Sa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ae;class xs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ae,!t&&Ae&&(this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ae;try{return Ae=this,t()}finally{Ae=n}}}on(){Ae=this}off(){Ae=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ws(e,t=Ae){t&&t.active&&t.effects.push(e)}function _s(){return Ae}const Jr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ji=e=>(e.w&tt)>0,Di=e=>(e.n&tt)>0,ks=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=tt},As=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];ji(a)&&!Di(a)?a.delete(e):t[n++]=a,a.w&=~tt,a.n&=~tt}t.length=n}},yr=new WeakMap;let zt=0,tt=1;const xr=30;let Oe;const pt=Symbol(""),wr=Symbol("");class Gr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ws(this,r)}run(){if(!this.active)return this.fn();let t=Oe,n=Ze;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Oe,Oe=this,Ze=!0,tt=1<<++zt,zt<=xr?ks(this):Na(this),this.fn()}finally{zt<=xr&&As(this),tt=1<<--zt,Oe=this.parent,Ze=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Oe===this?this.deferStop=!0:this.active&&(Na(this),this.onStop&&this.onStop(),this.active=!1)}}function Na(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ze=!0;const zi=[];function Mt(){zi.push(Ze),Ze=!1}function Rt(){const e=zi.pop();Ze=e===void 0?!0:e}function ve(e,t,n){if(Ze&&Oe){let r=yr.get(e);r||yr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Jr()),$i(a)}}function $i(e,t){let n=!1;zt<=xr?Di(e)||(e.n|=tt,n=!ji(e)):n=!e.has(Oe),n&&(e.add(Oe),Oe.deps.push(e))}function Be(e,t,n,r,a,i){const o=yr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&j(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":j(e)?Vr(n)&&s.push(o.get("length")):(s.push(o.get(pt)),At(e)&&s.push(o.get(wr)));break;case"delete":j(e)||(s.push(o.get(pt)),At(e)&&s.push(o.get(wr)));break;case"set":At(e)&&s.push(o.get(pt));break}if(s.length===1)s[0]&&_r(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);_r(Jr(l))}}function _r(e,t){const n=j(e)?e:[...e];for(const r of n)r.computed&&Ma(r);for(const r of n)r.computed||Ma(r)}function Ma(e,t){(e!==Oe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Os=Yr("__proto__,__v_isRef,__isVue"),Ui=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Xr)),Es=Qr(),Cs=Qr(!1,!0),Ps=Qr(!0),Ra=Is();function Is(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)ve(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Mt();const r=B(this)[t].apply(this,n);return Rt(),r}}),e}function Ts(e){const t=B(this);return ve(t,"has",e),t.hasOwnProperty(e)}function Qr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ks:Ki:t?Wi:Yi).get(r))return r;const o=j(r);if(!e){if(o&&U(Ra,a))return Reflect.get(Ra,a,i);if(a==="hasOwnProperty")return Ts}const s=Reflect.get(r,a,i);return(Xr(a)?Ui.has(a):Os(a))||(e||ve(r,"get",a),t)?s:le(s)?o&&Vr(a)?s:s.value:G(s)?e?qi(s):ta(s):s}}const Ss=Bi(),Ns=Bi(!0);function Bi(e=!1){return function(n,r,a,i){let o=n[r];if(Pt(o)&&le(o)&&!le(a))return!1;if(!e&&(!Ln(a)&&!Pt(a)&&(o=B(o),a=B(a)),!j(n)&&le(o)&&!le(a)))return o.value=a,!0;const s=j(n)&&Vr(r)?Number(r)<n.length:U(n,r),l=Reflect.set(n,r,a,i);return n===B(i)&&(s?Kt(a,o)&&Be(n,"set",r,a):Be(n,"add",r,a)),l}}function Ms(e,t){const n=U(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Be(e,"delete",t,void 0),r}function Rs(e,t){const n=Reflect.has(e,t);return(!Xr(t)||!Ui.has(t))&&ve(e,"has",t),n}function Fs(e){return ve(e,"iterate",j(e)?"length":pt),Reflect.ownKeys(e)}const Hi={get:Es,set:Ss,deleteProperty:Ms,has:Rs,ownKeys:Fs},Ls={get:Ps,set(e,t){return!0},deleteProperty(e,t){return!0}},js=de({},Hi,{get:Cs,set:Ns}),Zr=e=>e,Xn=e=>Reflect.getPrototypeOf(e);function mn(e,t,n=!1,r=!1){e=e.__v_raw;const a=B(e),i=B(t);n||(t!==i&&ve(a,"get",t),ve(a,"get",i));const{has:o}=Xn(a),s=r?Zr:n?ra:qt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function pn(e,t=!1){const n=this.__v_raw,r=B(n),a=B(e);return t||(e!==a&&ve(r,"has",e),ve(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function hn(e,t=!1){return e=e.__v_raw,!t&&ve(B(e),"iterate",pt),Reflect.get(e,"size",e)}function Fa(e){e=B(e);const t=B(this);return Xn(t).has.call(t,e)||(t.add(e),Be(t,"add",e,e)),this}function La(e,t){t=B(t);const n=B(this),{has:r,get:a}=Xn(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Kt(t,o)&&Be(n,"set",e,t):Be(n,"add",e,t),this}function ja(e){const t=B(this),{has:n,get:r}=Xn(t);let a=n.call(t,e);a||(e=B(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Be(t,"delete",e,void 0),i}function Da(){const e=B(this),t=e.size!==0,n=e.clear();return t&&Be(e,"clear",void 0,void 0),n}function gn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=t?Zr:e?ra:qt;return!e&&ve(s,"iterate",pt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function vn(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),o=At(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?Zr:t?ra:qt;return!t&&ve(i,"iterate",l?wr:pt),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Xe(e){return function(...t){return e==="delete"?!1:this}}function Ds(){const e={get(i){return mn(this,i)},get size(){return hn(this)},has:pn,add:Fa,set:La,delete:ja,clear:Da,forEach:gn(!1,!1)},t={get(i){return mn(this,i,!1,!0)},get size(){return hn(this)},has:pn,add:Fa,set:La,delete:ja,clear:Da,forEach:gn(!1,!0)},n={get(i){return mn(this,i,!0)},get size(){return hn(this,!0)},has(i){return pn.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:gn(!0,!1)},r={get(i){return mn(this,i,!0,!0)},get size(){return hn(this,!0)},has(i){return pn.call(this,i,!0)},add:Xe("add"),set:Xe("set"),delete:Xe("delete"),clear:Xe("clear"),forEach:gn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=vn(i,!1,!1),n[i]=vn(i,!0,!1),t[i]=vn(i,!1,!0),r[i]=vn(i,!0,!0)}),[e,n,t,r]}const[zs,$s,Us,Bs]=Ds();function ea(e,t){const n=t?e?Bs:Us:e?$s:zs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const Hs={get:ea(!1,!1)},Ys={get:ea(!1,!0)},Ws={get:ea(!0,!1)},Yi=new WeakMap,Wi=new WeakMap,Ki=new WeakMap,Ks=new WeakMap;function qs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xs(e){return e.__v_skip||!Object.isExtensible(e)?0:qs(hs(e))}function ta(e){return Pt(e)?e:na(e,!1,Hi,Hs,Yi)}function Vs(e){return na(e,!1,js,Ys,Wi)}function qi(e){return na(e,!0,Ls,Ws,Ki)}function na(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Xs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Ot(e){return Pt(e)?Ot(e.__v_raw):!!(e&&e.__v_isReactive)}function Pt(e){return!!(e&&e.__v_isReadonly)}function Ln(e){return!!(e&&e.__v_isShallow)}function Xi(e){return Ot(e)||Pt(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function Vi(e){return Fn(e,"__v_skip",!0),e}const qt=e=>G(e)?ta(e):e,ra=e=>G(e)?qi(e):e;function Ji(e){Ze&&Oe&&(e=B(e),$i(e.dep||(e.dep=Jr())))}function Gi(e,t){e=B(e);const n=e.dep;n&&_r(n)}function le(e){return!!(e&&e.__v_isRef===!0)}function Ve(e){return Js(e,!1)}function Js(e,t){return le(e)?e:new Gs(e,t)}class Gs{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:B(t),this._value=n?t:qt(t)}get value(){return Ji(this),this._value}set value(t){const n=this.__v_isShallow||Ln(t)||Pt(t);t=n?t:B(t),Kt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:qt(t),Gi(this))}}function Qs(e){return le(e)?e.value:e}const Zs={get:(e,t,n)=>Qs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return le(a)&&!le(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Qi(e){return Ot(e)?e:new Proxy(e,Zs)}var Zi;class el{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Zi]=!1,this._dirty=!0,this.effect=new Gr(t,()=>{this._dirty||(this._dirty=!0,Gi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=B(this);return Ji(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Zi="__v_isReadonly";function tl(e,t,n=!1){let r,a;const i=D(e);return i?(r=e,a=Te):(r=e.get,a=e.set),new el(r,a,i||!a,n)}function et(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Vn(i,t,n)}return a}function Se(e,t,n,r){if(D(e)){const i=et(e,t,n,r);return i&&Ri(i)&&i.catch(o=>{Vn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Se(e[i],t,n,r));return a}function Vn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){et(l,null,10,[e,o,s]);return}}nl(e,n,a,r)}function nl(e,t,n,r=!0){console.error(e)}let Xt=!1,kr=!1;const se=[];let je=0;const Et=[];let Ue=null,ct=0;const eo=Promise.resolve();let aa=null;function rl(e){const t=aa||eo;return e?t.then(this?e.bind(this):e):t}function al(e){let t=je+1,n=se.length;for(;t<n;){const r=t+n>>>1;Vt(se[r])<e?t=r+1:n=r}return t}function ia(e){(!se.length||!se.includes(e,Xt&&e.allowRecurse?je+1:je))&&(e.id==null?se.push(e):se.splice(al(e.id),0,e),to())}function to(){!Xt&&!kr&&(kr=!0,aa=eo.then(ro))}function il(e){const t=se.indexOf(e);t>je&&se.splice(t,1)}function ol(e){j(e)?Et.push(...e):(!Ue||!Ue.includes(e,e.allowRecurse?ct+1:ct))&&Et.push(e),to()}function za(e,t=Xt?je+1:0){for(;t<se.length;t++){const n=se[t];n&&n.pre&&(se.splice(t,1),t--,n())}}function no(e){if(Et.length){const t=[...new Set(Et)];if(Et.length=0,Ue){Ue.push(...t);return}for(Ue=t,Ue.sort((n,r)=>Vt(n)-Vt(r)),ct=0;ct<Ue.length;ct++)Ue[ct]();Ue=null,ct=0}}const Vt=e=>e.id==null?1/0:e.id,sl=(e,t)=>{const n=Vt(e)-Vt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ro(e){kr=!1,Xt=!0,se.sort(sl);const t=Te;try{for(je=0;je<se.length;je++){const n=se[je];n&&n.active!==!1&&et(n,null,14)}}finally{je=0,se.length=0,no(),Xt=!1,aa=null,(se.length||Et.length)&&ro()}}function ll(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||J;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||J;v&&(a=n.map(A=>ae(A)?A.trim():A)),m&&(a=n.map(bs))}let s,l=r[s=lr(t)]||r[s=lr(ze(t))];!l&&i&&(l=r[s=lr(Nt(t))]),l&&Se(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Se(c,e,6,a)}}function ao(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!D(e)){const l=c=>{const d=ao(c,t,!0);d&&(s=!0,de(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(G(e)&&r.set(e,null),null):(j(i)?i.forEach(l=>o[l]=null):de(o,i),G(e)&&r.set(e,o),o)}function Jn(e,t){return!e||!Yn(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,Nt(t))||U(e,t))}let Ce=null,Gn=null;function jn(e){const t=Ce;return Ce=e,Gn=e&&e.type.__scopeId||null,t}function fl(e){Gn=e}function cl(){Gn=null}function ul(e,t=Ce,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Xa(-1);const i=jn(t);let o;try{o=e(...a)}finally{jn(i),r._d&&Xa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function cr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:A,ctx:F,inheritAttrs:S}=e;let $,_;const P=jn(e);try{if(n.shapeFlag&4){const O=a||r;$=Le(d.call(O,O,m,i,A,v,F)),_=l}else{const O=t;$=Le(O.length>1?O(i,{attrs:l,slots:s,emit:c}):O(i,null)),_=t.props?l:dl(l)}}catch(O){Bt.length=0,Vn(O,e,1),$=ge(Jt)}let y=$;if(_&&S!==!1){const O=Object.keys(_),{shapeFlag:N}=y;O.length&&N&7&&(o&&O.some(Kr)&&(_=ml(_,o)),y=It(y,_))}return n.dirs&&(y=It(y),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),$=y,jn(P),$}const dl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Yn(n))&&((t||(t={}))[n]=e[n]);return t},ml=(e,t)=>{const n={};for(const r in e)(!Kr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function pl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?$a(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Jn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?$a(r,o,c):!0:!!o;return!1}function $a(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Jn(n,i))return!0}return!1}function hl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const gl=e=>e.__isSuspense;function vl(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):ol(e)}function bl(e,t){if(ne){let n=ne.provides;const r=ne.parent&&ne.parent.provides;r===n&&(n=ne.provides=Object.create(r)),n[e]=t}}function In(e,t,n=!1){const r=ne||Ce;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&D(t)?t.call(r.proxy):t}}const bn={};function Tn(e,t,n){return io(e,t,n)}function io(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=J){const s=_s()===(ne==null?void 0:ne.scope)?ne:null;let l,c=!1,d=!1;if(le(e)?(l=()=>e.value,c=Ln(e)):Ot(e)?(l=()=>e,r=!0):j(e)?(d=!0,c=e.some(y=>Ot(y)||Ln(y)),l=()=>e.map(y=>{if(le(y))return y.value;if(Ot(y))return xt(y);if(D(y))return et(y,s,2)})):D(e)?t?l=()=>et(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Se(e,s,3,[v])}:l=Te,t&&r){const y=l;l=()=>xt(y())}let m,v=y=>{m=_.onStop=()=>{et(y,s,4)}},A;if(Qt)if(v=Te,t?n&&Se(t,s,3,[l(),d?[]:void 0,v]):l(),a==="sync"){const y=mf();A=y.__watcherHandles||(y.__watcherHandles=[])}else return Te;let F=d?new Array(e.length).fill(bn):bn;const S=()=>{if(_.active)if(t){const y=_.run();(r||c||(d?y.some((O,N)=>Kt(O,F[N])):Kt(y,F)))&&(m&&m(),Se(t,s,3,[y,F===bn?void 0:d&&F[0]===bn?[]:F,v]),F=y)}else _.run()};S.allowRecurse=!!t;let $;a==="sync"?$=S:a==="post"?$=()=>he(S,s&&s.suspense):(S.pre=!0,s&&(S.id=s.uid),$=()=>ia(S));const _=new Gr(l,$);t?n?S():F=_.run():a==="post"?he(_.run.bind(_),s&&s.suspense):_.run();const P=()=>{_.stop(),s&&s.scope&&qr(s.scope.effects,_)};return A&&A.push(P),P}function yl(e,t,n){const r=this.proxy,a=ae(e)?e.includes(".")?oo(r,e):()=>r[e]:e.bind(r,r);let i;D(t)?i=t:(i=t.handler,n=t);const o=ne;Tt(this);const s=io(a,i.bind(r),n);return o?Tt(o):ht(),s}function oo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function xt(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),le(e))xt(e.value,t);else if(j(e))for(let n=0;n<e.length;n++)xt(e[n],t);else if(Mi(e)||At(e))e.forEach(n=>{xt(n,t)});else if(Li(e))for(const n in e)xt(e[n],t);return e}function oa(e){return D(e)?{setup:e,name:e.name}:e}const Sn=e=>!!e.type.__asyncLoader,so=e=>e.type.__isKeepAlive;function xl(e,t){lo(e,"a",t)}function wl(e,t){lo(e,"da",t)}function lo(e,t,n=ne){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Qn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)so(a.parent.vnode)&&_l(r,t,n,a),a=a.parent}}function _l(e,t,n,r){const a=Qn(t,e,r,!0);uo(()=>{qr(r[t],a)},n)}function Qn(e,t,n=ne,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Mt(),Tt(n);const s=Se(t,n,e,o);return ht(),Rt(),s});return r?a.unshift(i):a.push(i),i}}const Ke=e=>(t,n=ne)=>(!Qt||e==="sp")&&Qn(e,(...r)=>t(...r),n),kl=Ke("bm"),fo=Ke("m"),Al=Ke("bu"),Ol=Ke("u"),co=Ke("bum"),uo=Ke("um"),El=Ke("sp"),Cl=Ke("rtg"),Pl=Ke("rtc");function Il(e,t=ne){Qn("ec",e,t)}function st(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Mt(),Se(l,n,8,[e.el,s,e,t]),Rt())}}const mo="components";function Tl(e,t){return Nl(mo,e,!0,t)||e}const Sl=Symbol();function Nl(e,t,n=!0,r=!1){const a=Ce||ne;if(a){const i=a.type;if(e===mo){const s=cf(i,!1);if(s&&(s===t||s===ze(t)||s===qn(ze(t))))return i}const o=Ua(a[e]||i[e],t)||Ua(a.appContext[e],t);return!o&&r?i:o}}function Ua(e,t){return e&&(e[t]||e[ze(t)]||e[qn(ze(t))])}function jt(e,t,n,r){let a;const i=n&&n[r];if(j(e)||ae(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(G(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Ar=e=>e?Ao(e)?ca(e)||e.proxy:Ar(e.parent):null,Ut=de(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ar(e.parent),$root:e=>Ar(e.root),$emit:e=>e.emit,$options:e=>sa(e),$forceUpdate:e=>e.f||(e.f=()=>ia(e.update)),$nextTick:e=>e.n||(e.n=rl.bind(e.proxy)),$watch:e=>yl.bind(e)}),ur=(e,t)=>e!==J&&!e.__isScriptSetup&&U(e,t),Ml={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(ur(r,t))return o[t]=1,r[t];if(a!==J&&U(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&U(c,t))return o[t]=3,i[t];if(n!==J&&U(n,t))return o[t]=4,n[t];Or&&(o[t]=0)}}const d=Ut[t];let m,v;if(d)return t==="$attrs"&&ve(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==J&&U(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,U(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return ur(a,t)?(a[t]=n,!0):r!==J&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==J&&U(e,o)||ur(t,o)||(s=i[0])&&U(s,o)||U(r,o)||U(Ut,o)||U(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Or=!0;function Rl(e){const t=sa(e),n=e.proxy,r=e.ctx;Or=!1,t.beforeCreate&&Ba(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:A,updated:F,activated:S,deactivated:$,beforeDestroy:_,beforeUnmount:P,destroyed:y,unmounted:O,render:N,renderTracked:ee,renderTriggered:W,errorCaptured:re,serverPrefetch:me,expose:H,inheritAttrs:Ne,components:ln,directives:fn,filters:ir}=t;if(c&&Fl(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Q in o){const K=o[Q];D(K)&&(r[Q]=K.bind(n))}if(a){const Q=a.call(n,n);G(Q)&&(e.data=ta(Q))}if(Or=!0,i)for(const Q in i){const K=i[Q],it=D(K)?K.bind(n,n):D(K.get)?K.get.bind(n,n):Te,cn=!D(K)&&D(K.set)?K.set.bind(n):Te,ot=we({get:it,set:cn});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>ot.value,set:Me=>ot.value=Me})}if(s)for(const Q in s)po(s[Q],r,n,Q);if(l){const Q=D(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(K=>{bl(K,Q[K])})}d&&Ba(d,e,"c");function fe(Q,K){j(K)?K.forEach(it=>Q(it.bind(n))):K&&Q(K.bind(n))}if(fe(kl,m),fe(fo,v),fe(Al,A),fe(Ol,F),fe(xl,S),fe(wl,$),fe(Il,re),fe(Pl,ee),fe(Cl,W),fe(co,P),fe(uo,O),fe(El,me),j(H))if(H.length){const Q=e.exposed||(e.exposed={});H.forEach(K=>{Object.defineProperty(Q,K,{get:()=>n[K],set:it=>n[K]=it})})}else e.exposed||(e.exposed={});N&&e.render===Te&&(e.render=N),Ne!=null&&(e.inheritAttrs=Ne),ln&&(e.components=ln),fn&&(e.directives=fn)}function Fl(e,t,n=Te,r=!1){j(e)&&(e=Er(e));for(const a in e){const i=e[a];let o;G(i)?"default"in i?o=In(i.from||a,i.default,!0):o=In(i.from||a):o=In(i),le(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ba(e,t,n){Se(j(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function po(e,t,n,r){const a=r.includes(".")?oo(n,r):()=>n[r];if(ae(e)){const i=t[e];D(i)&&Tn(a,i)}else if(D(e))Tn(a,e.bind(n));else if(G(e))if(j(e))e.forEach(i=>po(i,t,n,r));else{const i=D(e.handler)?e.handler.bind(n):t[e.handler];D(i)&&Tn(a,i,e)}}function sa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Dn(l,c,o,!0)),Dn(l,t,o)),G(t)&&i.set(t,l),l}function Dn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Dn(e,i,n,!0),a&&a.forEach(o=>Dn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Ll[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Ll={data:Ha,props:ft,emits:ft,methods:ft,computed:ft,beforeCreate:ce,created:ce,beforeMount:ce,mounted:ce,beforeUpdate:ce,updated:ce,beforeDestroy:ce,beforeUnmount:ce,destroyed:ce,unmounted:ce,activated:ce,deactivated:ce,errorCaptured:ce,serverPrefetch:ce,components:ft,directives:ft,watch:Dl,provide:Ha,inject:jl};function Ha(e,t){return t?e?function(){return de(D(e)?e.call(this,this):e,D(t)?t.call(this,this):t)}:t:e}function jl(e,t){return ft(Er(e),Er(t))}function Er(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ce(e,t){return e?[...new Set([].concat(e,t))]:t}function ft(e,t){return e?de(de(Object.create(null),e),t):t}function Dl(e,t){if(!e)return t;if(!t)return e;const n=de(Object.create(null),e);for(const r in t)n[r]=ce(e[r],t[r]);return n}function zl(e,t,n,r=!1){const a={},i={};Fn(i,er,1),e.propsDefaults=Object.create(null),ho(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Vs(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function $l(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=B(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Jn(e.emitsOptions,v))continue;const A=t[v];if(l)if(U(i,v))A!==i[v]&&(i[v]=A,c=!0);else{const F=ze(v);a[F]=Cr(l,s,F,A,e,!1)}else A!==i[v]&&(i[v]=A,c=!0)}}}else{ho(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!U(t,m)&&((d=Nt(m))===m||!U(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Cr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!U(t,m))&&(delete i[m],c=!0)}c&&Be(e,"set","$attrs")}function ho(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Pn(l))continue;const c=t[l];let d;a&&U(a,d=ze(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Jn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=B(n),c=s||J;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Cr(a,l,m,c[m],e,!U(c,m))}}return o}function Cr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&D(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Tt(a),r=c[n]=l.call(null,t),ht())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Nt(n))&&(r=!0))}return r}function go(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!D(e)){const d=m=>{l=!0;const[v,A]=go(m,t,!0);de(o,v),A&&s.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return G(e)&&r.set(e,kt),kt;if(j(i))for(let d=0;d<i.length;d++){const m=ze(i[d]);Ya(m)&&(o[m]=J)}else if(i)for(const d in i){const m=ze(d);if(Ya(m)){const v=i[d],A=o[m]=j(v)||D(v)?{type:v}:Object.assign({},v);if(A){const F=qa(Boolean,A.type),S=qa(String,A.type);A[0]=F>-1,A[1]=S<0||F<S,(F>-1||U(A,"default"))&&s.push(m)}}}const c=[o,s];return G(e)&&r.set(e,c),c}function Ya(e){return e[0]!=="$"}function Wa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ka(e,t){return Wa(e)===Wa(t)}function qa(e,t){return j(t)?t.findIndex(n=>Ka(n,e)):D(t)&&Ka(t,e)?0:-1}const vo=e=>e[0]==="_"||e==="$stable",la=e=>j(e)?e.map(Le):[Le(e)],Ul=(e,t,n)=>{if(t._n)return t;const r=ul((...a)=>la(t(...a)),n);return r._c=!1,r},bo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(vo(a))continue;const i=e[a];if(D(i))t[a]=Ul(a,i,r);else if(i!=null){const o=la(i);t[a]=()=>o}}},yo=(e,t)=>{const n=la(t);e.slots.default=()=>n},Bl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),Fn(t,"_",n)):bo(t,e.slots={})}else e.slots={},t&&yo(e,t);Fn(e.slots,er,1)},Hl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=J;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(de(a,t),!n&&s===1&&delete a._):(i=!t.$stable,bo(t,a)),o=t}else t&&(yo(e,t),o={default:1});if(i)for(const s in a)!vo(s)&&!(s in o)&&delete a[s]};function xo(){return{app:null,config:{isNativeTag:ds,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yl=0;function Wl(e,t){return function(r,a=null){D(r)||(r=Object.assign({},r)),a!=null&&!G(a)&&(a=null);const i=xo(),o=new Set;let s=!1;const l=i.app={_uid:Yl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:pf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&D(c.install)?(o.add(c),c.install(l,...d)):D(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=ge(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,ca(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function Pr(e,t,n,r,a=!1){if(j(e)){e.forEach((v,A)=>Pr(v,t&&(j(t)?t[A]:t),n,r,a));return}if(Sn(r)&&!a)return;const i=r.shapeFlag&4?ca(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===J?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ae(c)?(d[c]=null,U(m,c)&&(m[c]=null)):le(c)&&(c.value=null)),D(l))et(l,s,12,[o,d]);else{const v=ae(l),A=le(l);if(v||A){const F=()=>{if(e.f){const S=v?U(m,l)?m[l]:d[l]:l.value;a?j(S)&&qr(S,i):j(S)?S.includes(i)||S.push(i):v?(d[l]=[i],U(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,U(m,l)&&(m[l]=o)):A&&(l.value=o,e.k&&(d[e.k]=o))};o?(F.id=-1,he(F,n)):F()}}}const he=vl;function Kl(e){return ql(e)}function ql(e,t){const n=ys();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:A=Te,insertStaticContent:F}=e,S=(f,u,p,g=null,h=null,w=null,E=!1,x=null,k=!!u.dynamicChildren)=>{if(f===u)return;f&&!Dt(f,u)&&(g=un(f),Me(f,h,w,!0),f=null),u.patchFlag===-2&&(k=!1,u.dynamicChildren=null);const{type:b,ref:M,shapeFlag:I}=u;switch(b){case Zn:$(f,u,p,g);break;case Jt:_(f,u,p,g);break;case dr:f==null&&P(u,p,g,E);break;case ue:ln(f,u,p,g,h,w,E,x,k);break;default:I&1?N(f,u,p,g,h,w,E,x,k):I&6?fn(f,u,p,g,h,w,E,x,k):(I&64||I&128)&&b.process(f,u,p,g,h,w,E,x,k,bt)}M!=null&&h&&Pr(M,f&&f.ref,w,u||f,!u)},$=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},_=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},P=(f,u,p,g)=>{[f.el,f.anchor]=F(f.children,u,p,g,f.el,f.anchor)},y=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},O=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},N=(f,u,p,g,h,w,E,x,k)=>{E=E||u.type==="svg",f==null?ee(u,p,g,h,w,E,x,k):me(f,u,h,w,E,x,k)},ee=(f,u,p,g,h,w,E,x)=>{let k,b;const{type:M,props:I,shapeFlag:R,transition:L,dirs:z}=f;if(k=f.el=o(f.type,w,I&&I.is,I),R&8?d(k,f.children):R&16&&re(f.children,k,null,g,h,w&&M!=="foreignObject",E,x),z&&st(f,null,g,"created"),W(k,f,f.scopeId,E,g),I){for(const Y in I)Y!=="value"&&!Pn(Y)&&i(k,Y,null,I[Y],w,f.children,g,h,$e);"value"in I&&i(k,"value",null,I.value),(b=I.onVnodeBeforeMount)&&Fe(b,g,f)}z&&st(f,null,g,"beforeMount");const q=(!h||h&&!h.pendingBranch)&&L&&!L.persisted;q&&L.beforeEnter(k),r(k,u,p),((b=I&&I.onVnodeMounted)||q||z)&&he(()=>{b&&Fe(b,g,f),q&&L.enter(k),z&&st(f,null,g,"mounted")},h)},W=(f,u,p,g,h)=>{if(p&&A(f,p),g)for(let w=0;w<g.length;w++)A(f,g[w]);if(h){let w=h.subTree;if(u===w){const E=h.vnode;W(f,E,E.scopeId,E.slotScopeIds,h.parent)}}},re=(f,u,p,g,h,w,E,x,k=0)=>{for(let b=k;b<f.length;b++){const M=f[b]=x?Ge(f[b]):Le(f[b]);S(null,M,u,p,g,h,w,E,x)}},me=(f,u,p,g,h,w,E)=>{const x=u.el=f.el;let{patchFlag:k,dynamicChildren:b,dirs:M}=u;k|=f.patchFlag&16;const I=f.props||J,R=u.props||J;let L;p&&lt(p,!1),(L=R.onVnodeBeforeUpdate)&&Fe(L,p,u,f),M&&st(u,f,p,"beforeUpdate"),p&&lt(p,!0);const z=h&&u.type!=="foreignObject";if(b?H(f.dynamicChildren,b,x,p,g,z,w):E||K(f,u,x,null,p,g,z,w,!1),k>0){if(k&16)Ne(x,u,I,R,p,g,h);else if(k&2&&I.class!==R.class&&i(x,"class",null,R.class,h),k&4&&i(x,"style",I.style,R.style,h),k&8){const q=u.dynamicProps;for(let Y=0;Y<q.length;Y++){const te=q[Y],_e=I[te],yt=R[te];(yt!==_e||te==="value")&&i(x,te,_e,yt,h,f.children,p,g,$e)}}k&1&&f.children!==u.children&&d(x,u.children)}else!E&&b==null&&Ne(x,u,I,R,p,g,h);((L=R.onVnodeUpdated)||M)&&he(()=>{L&&Fe(L,p,u,f),M&&st(u,f,p,"updated")},g)},H=(f,u,p,g,h,w,E)=>{for(let x=0;x<u.length;x++){const k=f[x],b=u[x],M=k.el&&(k.type===ue||!Dt(k,b)||k.shapeFlag&70)?m(k.el):p;S(k,b,M,null,g,h,w,E,!0)}},Ne=(f,u,p,g,h,w,E)=>{if(p!==g){if(p!==J)for(const x in p)!Pn(x)&&!(x in g)&&i(f,x,p[x],null,E,u.children,h,w,$e);for(const x in g){if(Pn(x))continue;const k=g[x],b=p[x];k!==b&&x!=="value"&&i(f,x,b,k,E,u.children,h,w,$e)}"value"in g&&i(f,"value",p.value,g.value)}},ln=(f,u,p,g,h,w,E,x,k)=>{const b=u.el=f?f.el:s(""),M=u.anchor=f?f.anchor:s("");let{patchFlag:I,dynamicChildren:R,slotScopeIds:L}=u;L&&(x=x?x.concat(L):L),f==null?(r(b,p,g),r(M,p,g),re(u.children,p,M,h,w,E,x,k)):I>0&&I&64&&R&&f.dynamicChildren?(H(f.dynamicChildren,R,p,h,w,E,x),(u.key!=null||h&&u===h.subTree)&&wo(f,u,!0)):K(f,u,p,M,h,w,E,x,k)},fn=(f,u,p,g,h,w,E,x,k)=>{u.slotScopeIds=x,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,E,k):ir(u,p,g,h,w,E,k):Oa(f,u,k)},ir=(f,u,p,g,h,w,E)=>{const x=f.component=af(f,g,h);if(so(f)&&(x.ctx.renderer=bt),of(x),x.asyncDep){if(h&&h.registerDep(x,fe),!f.el){const k=x.subTree=ge(Jt);_(null,k,u,p)}return}fe(x,f,u,p,h,w,E)},Oa=(f,u,p)=>{const g=u.component=f.component;if(pl(f,u,p))if(g.asyncDep&&!g.asyncResolved){Q(g,u,p);return}else g.next=u,il(g.update),g.update();else u.el=f.el,g.vnode=u},fe=(f,u,p,g,h,w,E)=>{const x=()=>{if(f.isMounted){let{next:M,bu:I,u:R,parent:L,vnode:z}=f,q=M,Y;lt(f,!1),M?(M.el=z.el,Q(f,M,E)):M=z,I&&fr(I),(Y=M.props&&M.props.onVnodeBeforeUpdate)&&Fe(Y,L,M,z),lt(f,!0);const te=cr(f),_e=f.subTree;f.subTree=te,S(_e,te,m(_e.el),un(_e),f,h,w),M.el=te.el,q===null&&hl(f,te.el),R&&he(R,h),(Y=M.props&&M.props.onVnodeUpdated)&&he(()=>Fe(Y,L,M,z),h)}else{let M;const{el:I,props:R}=u,{bm:L,m:z,parent:q}=f,Y=Sn(u);if(lt(f,!1),L&&fr(L),!Y&&(M=R&&R.onVnodeBeforeMount)&&Fe(M,q,u),lt(f,!0),I&&sr){const te=()=>{f.subTree=cr(f),sr(I,f.subTree,f,h,null)};Y?u.type.__asyncLoader().then(()=>!f.isUnmounted&&te()):te()}else{const te=f.subTree=cr(f);S(null,te,p,g,f,h,w),u.el=te.el}if(z&&he(z,h),!Y&&(M=R&&R.onVnodeMounted)){const te=u;he(()=>Fe(M,q,te),h)}(u.shapeFlag&256||q&&Sn(q.vnode)&&q.vnode.shapeFlag&256)&&f.a&&he(f.a,h),f.isMounted=!0,u=p=g=null}},k=f.effect=new Gr(x,()=>ia(b),f.scope),b=f.update=()=>k.run();b.id=f.uid,lt(f,!0),b()},Q=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,$l(f,u.props,g,p),Hl(f,u.children,p),Mt(),za(),Rt()},K=(f,u,p,g,h,w,E,x,k=!1)=>{const b=f&&f.children,M=f?f.shapeFlag:0,I=u.children,{patchFlag:R,shapeFlag:L}=u;if(R>0){if(R&128){cn(b,I,p,g,h,w,E,x,k);return}else if(R&256){it(b,I,p,g,h,w,E,x,k);return}}L&8?(M&16&&$e(b,h,w),I!==b&&d(p,I)):M&16?L&16?cn(b,I,p,g,h,w,E,x,k):$e(b,h,w,!0):(M&8&&d(p,""),L&16&&re(I,p,g,h,w,E,x,k))},it=(f,u,p,g,h,w,E,x,k)=>{f=f||kt,u=u||kt;const b=f.length,M=u.length,I=Math.min(b,M);let R;for(R=0;R<I;R++){const L=u[R]=k?Ge(u[R]):Le(u[R]);S(f[R],L,p,null,h,w,E,x,k)}b>M?$e(f,h,w,!0,!1,I):re(u,p,g,h,w,E,x,k,I)},cn=(f,u,p,g,h,w,E,x,k)=>{let b=0;const M=u.length;let I=f.length-1,R=M-1;for(;b<=I&&b<=R;){const L=f[b],z=u[b]=k?Ge(u[b]):Le(u[b]);if(Dt(L,z))S(L,z,p,null,h,w,E,x,k);else break;b++}for(;b<=I&&b<=R;){const L=f[I],z=u[R]=k?Ge(u[R]):Le(u[R]);if(Dt(L,z))S(L,z,p,null,h,w,E,x,k);else break;I--,R--}if(b>I){if(b<=R){const L=R+1,z=L<M?u[L].el:g;for(;b<=R;)S(null,u[b]=k?Ge(u[b]):Le(u[b]),p,z,h,w,E,x,k),b++}}else if(b>R)for(;b<=I;)Me(f[b],h,w,!0),b++;else{const L=b,z=b,q=new Map;for(b=z;b<=R;b++){const be=u[b]=k?Ge(u[b]):Le(u[b]);be.key!=null&&q.set(be.key,b)}let Y,te=0;const _e=R-z+1;let yt=!1,Pa=0;const Lt=new Array(_e);for(b=0;b<_e;b++)Lt[b]=0;for(b=L;b<=I;b++){const be=f[b];if(te>=_e){Me(be,h,w,!0);continue}let Re;if(be.key!=null)Re=q.get(be.key);else for(Y=z;Y<=R;Y++)if(Lt[Y-z]===0&&Dt(be,u[Y])){Re=Y;break}Re===void 0?Me(be,h,w,!0):(Lt[Re-z]=b+1,Re>=Pa?Pa=Re:yt=!0,S(be,u[Re],p,null,h,w,E,x,k),te++)}const Ia=yt?Xl(Lt):kt;for(Y=Ia.length-1,b=_e-1;b>=0;b--){const be=z+b,Re=u[be],Ta=be+1<M?u[be+1].el:g;Lt[b]===0?S(null,Re,p,Ta,h,w,E,x,k):yt&&(Y<0||b!==Ia[Y]?ot(Re,p,Ta,2):Y--)}}},ot=(f,u,p,g,h=null)=>{const{el:w,type:E,transition:x,children:k,shapeFlag:b}=f;if(b&6){ot(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){E.move(f,u,p,bt);return}if(E===ue){r(w,u,p);for(let I=0;I<k.length;I++)ot(k[I],u,p,g);r(f.anchor,u,p);return}if(E===dr){y(f,u,p);return}if(g!==2&&b&1&&x)if(g===0)x.beforeEnter(w),r(w,u,p),he(()=>x.enter(w),h);else{const{leave:I,delayLeave:R,afterLeave:L}=x,z=()=>r(w,u,p),q=()=>{I(w,()=>{z(),L&&L()})};R?R(w,z,q):q()}else r(w,u,p)},Me=(f,u,p,g=!1,h=!1)=>{const{type:w,props:E,ref:x,children:k,dynamicChildren:b,shapeFlag:M,patchFlag:I,dirs:R}=f;if(x!=null&&Pr(x,null,p,f,!0),M&256){u.ctx.deactivate(f);return}const L=M&1&&R,z=!Sn(f);let q;if(z&&(q=E&&E.onVnodeBeforeUnmount)&&Fe(q,u,f),M&6)is(f.component,p,g);else{if(M&128){f.suspense.unmount(p,g);return}L&&st(f,null,u,"beforeUnmount"),M&64?f.type.remove(f,u,p,h,bt,g):b&&(w!==ue||I>0&&I&64)?$e(b,u,p,!1,!0):(w===ue&&I&384||!h&&M&16)&&$e(k,u,p),g&&Ea(f)}(z&&(q=E&&E.onVnodeUnmounted)||L)&&he(()=>{q&&Fe(q,u,f),L&&st(f,null,u,"unmounted")},p)},Ea=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===ue){as(p,g);return}if(u===dr){O(f);return}const w=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:E,delayLeave:x}=h,k=()=>E(p,w);x?x(f.el,w,k):k()}else w()},as=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},is=(f,u,p)=>{const{bum:g,scope:h,update:w,subTree:E,um:x}=f;g&&fr(g),h.stop(),w&&(w.active=!1,Me(E,f,u,p)),x&&he(x,u),he(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},$e=(f,u,p,g=!1,h=!1,w=0)=>{for(let E=w;E<f.length;E++)Me(f[E],u,p,g,h)},un=f=>f.shapeFlag&6?un(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ca=(f,u,p)=>{f==null?u._vnode&&Me(u._vnode,null,null,!0):S(u._vnode||null,f,u,null,null,null,p),za(),no(),u._vnode=f},bt={p:S,um:Me,m:ot,r:Ea,mt:ir,mc:re,pc:K,pbc:H,n:un,o:e};let or,sr;return t&&([or,sr]=t(bt)),{render:Ca,hydrate:or,createApp:Wl(Ca,or)}}function lt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function wo(e,t,n=!1){const r=e.children,a=t.children;if(j(r)&&j(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ge(a[i]),s.el=o.el),n||wo(o,s)),s.type===Zn&&(s.el=o.el)}}function Xl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Vl=e=>e.__isTeleport,ue=Symbol(void 0),Zn=Symbol(void 0),Jt=Symbol(void 0),dr=Symbol(void 0),Bt=[];let Pe=null;function xe(e=!1){Bt.push(Pe=e?null:[])}function Jl(){Bt.pop(),Pe=Bt[Bt.length-1]||null}let Gt=1;function Xa(e){Gt+=e}function _o(e){return e.dynamicChildren=Gt>0?Pe||kt:null,Jl(),Gt>0&&Pe&&Pe.push(e),e}function ke(e,t,n,r,a,i){return _o(oe(e,t,n,r,a,i,!0))}function Gl(e,t,n,r,a){return _o(ge(e,t,n,r,a,!0))}function Ir(e){return e?e.__v_isVNode===!0:!1}function Dt(e,t){return e.type===t.type&&e.key===t.key}const er="__vInternal",ko=({key:e})=>e??null,Nn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ae(e)||le(e)||D(e)?{i:Ce,r:e,k:t,f:!!n}:e:null;function oe(e,t=null,n=null,r=0,a=null,i=e===ue?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ko(t),ref:t&&Nn(t),scopeId:Gn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ce};return s?(fa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ae(n)?8:16),Gt>0&&!o&&Pe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Pe.push(l),l}const ge=Ql;function Ql(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Sl)&&(e=Jt),Ir(e)){const s=It(e,t,!0);return n&&fa(s,n),Gt>0&&!i&&Pe&&(s.shapeFlag&6?Pe[Pe.indexOf(e)]=s:Pe.push(s)),s.patchFlag|=-2,s}if(uf(e)&&(e=e.__vccOpts),t){t=Zl(t);let{class:s,style:l}=t;s&&!ae(s)&&(t.class=Qe(s)),G(l)&&(Xi(l)&&!j(l)&&(l=de({},l)),t.style=Wr(l))}const o=ae(e)?1:gl(e)?128:Vl(e)?64:G(e)?4:D(e)?2:0;return oe(e,t,n,r,a,o,i,!0)}function Zl(e){return e?Xi(e)||er in e?de({},e):e:null}function It(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?tf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ko(s),ref:t&&t.ref?n&&a?j(a)?a.concat(Nn(t)):[a,Nn(t)]:Nn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ue?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&It(e.ssContent),ssFallback:e.ssFallback&&It(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ef(e=" ",t=0){return ge(Zn,null,e,t)}function Le(e){return e==null||typeof e=="boolean"?ge(Jt):j(e)?ge(ue,null,e.slice()):typeof e=="object"?Ge(e):ge(Zn,null,String(e))}function Ge(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:It(e)}function fa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),fa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(er in t)?t._ctx=Ce:a===3&&Ce&&(Ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else D(t)?(t={default:t,_ctx:Ce},n=32):(t=String(t),r&64?(n=16,t=[ef(t)]):n=8);e.children=t,e.shapeFlag|=n}function tf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Qe([t.class,r.class]));else if(a==="style")t.style=Wr([t.style,r.style]);else if(Yn(a)){const i=t[a],o=r[a];o&&i!==o&&!(j(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Fe(e,t,n,r=null){Se(e,t,7,[n,r])}const nf=xo();let rf=0;function af(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||nf,i={uid:rf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new xs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:go(r,a),emitsOptions:ao(r,a),emit:null,emitted:null,propsDefaults:J,inheritAttrs:r.inheritAttrs,ctx:J,data:J,props:J,attrs:J,slots:J,refs:J,setupState:J,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ll.bind(null,i),e.ce&&e.ce(i),i}let ne=null;const Tt=e=>{ne=e,e.scope.on()},ht=()=>{ne&&ne.scope.off(),ne=null};function Ao(e){return e.vnode.shapeFlag&4}let Qt=!1;function of(e,t=!1){Qt=t;const{props:n,children:r}=e.vnode,a=Ao(e);zl(e,n,a,t),Bl(e,r);const i=a?sf(e,t):void 0;return Qt=!1,i}function sf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Vi(new Proxy(e.ctx,Ml));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?ff(e):null;Tt(e),Mt();const i=et(r,e,0,[e.props,a]);if(Rt(),ht(),Ri(i)){if(i.then(ht,ht),t)return i.then(o=>{Va(e,o,t)}).catch(o=>{Vn(o,e,0)});e.asyncDep=i}else Va(e,i,t)}else Oo(e,t)}function Va(e,t,n){D(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=Qi(t)),Oo(e,n)}let Ja;function Oo(e,t,n){const r=e.type;if(!e.render){if(!t&&Ja&&!r.render){const a=r.template||sa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=de(de({isCustomElement:i,delimiters:s},o),l);r.render=Ja(a,c)}}e.render=r.render||Te}Tt(e),Mt(),Rl(e),Rt(),ht()}function lf(e){return new Proxy(e.attrs,{get(t,n){return ve(e,"get","$attrs"),t[n]}})}function ff(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=lf(e))},slots:e.slots,emit:e.emit,expose:t}}function ca(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Qi(Vi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ut)return Ut[n](e)},has(t,n){return n in t||n in Ut}}))}function cf(e,t=!0){return D(e)?e.displayName||e.name:e.name||t&&e.__name}function uf(e){return D(e)&&"__vccOpts"in e}const we=(e,t)=>tl(e,t,Qt);function Eo(e,t,n){const r=arguments.length;return r===2?G(t)&&!j(t)?Ir(t)?ge(e,null,[t]):ge(e,t):ge(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ir(n)&&(n=[n]),ge(e,t,n))}const df=Symbol(""),mf=()=>In(df),pf="3.2.47",hf="http://www.w3.org/2000/svg",ut=typeof document<"u"?document:null,Ga=ut&&ut.createElement("template"),gf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ut.createElementNS(hf,e):ut.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ut.createTextNode(e),createComment:e=>ut.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ut.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ga.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ga.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function vf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function bf(e,t,n){const r=e.style,a=ae(n);if(n&&!a){if(t&&!ae(t))for(const i in t)n[i]==null&&Tr(r,i,"");for(const i in n)Tr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Qa=/\s*!important$/;function Tr(e,t,n){if(j(n))n.forEach(r=>Tr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=yf(e,t);Qa.test(n)?e.setProperty(Nt(r),n.replace(Qa,""),"important"):e[r]=n}}const Za=["Webkit","Moz","ms"],mr={};function yf(e,t){const n=mr[t];if(n)return n;let r=ze(t);if(r!=="filter"&&r in e)return mr[t]=r;r=qn(r);for(let a=0;a<Za.length;a++){const i=Za[a]+r;if(i in e)return mr[t]=i}return t}const ei="http://www.w3.org/1999/xlink";function xf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ei,t.slice(6,t.length)):e.setAttributeNS(ei,t,n);else{const i=us(t);n==null||i&&!Si(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function wf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Si(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function _f(e,t,n,r){e.addEventListener(t,n,r)}function kf(e,t,n,r){e.removeEventListener(t,n,r)}function Af(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Of(t);if(r){const c=i[t]=Pf(r,a);_f(e,s,c,l)}else o&&(kf(e,s,o,l),i[t]=void 0)}}const ti=/(?:Once|Passive|Capture)$/;function Of(e){let t;if(ti.test(e)){t={};let r;for(;r=e.match(ti);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Nt(e.slice(2)),t]}let pr=0;const Ef=Promise.resolve(),Cf=()=>pr||(Ef.then(()=>pr=0),pr=Date.now());function Pf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Se(If(r,n.value),t,5,[r])};return n.value=e,n.attached=Cf(),n}function If(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ni=/^on[a-z]/,Tf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?vf(e,r,a):t==="style"?bf(e,n,r):Yn(t)?Kr(t)||Af(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Sf(e,t,r,a))?wf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),xf(e,t,r,a))};function Sf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ni.test(t)&&D(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ni.test(t)&&ae(n)?!1:t in e}const Nf=de({patchProp:Tf},gf);let ri;function Mf(){return ri||(ri=Kl(Nf))}const Rf=(...e)=>{const t=Mf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Ff(r);if(!a)return;const i=t._component;!D(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Ff(e){return ae(e)?document.querySelector(e):e}const Lf="/wordle/assets/click-96dc3fd0.mp3";const jf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Df={setup(){const e={topRow:["Q","W","E","R","T","Y","U","I","O","P"],middleRow:["A","S","D","F","G","H","J","K","L"],bottomRow:["Z","X","C","V","B","N","M"]},t=[{letters:[" "," "," "," "," "],color:["empty","empty","empty","empty","empty"],isValidInput:!0},{letters:[" "," "," "," "," "],color:["empty","empty","empty","empty","empty"],isValidInput:!0},{letters:[" "," "," "," "," "],color:["empty","empty","empty","empty","empty"],isValidInput:!0},{letters:[" "," "," "," "," "],color:["empty","empty","empty","empty","empty"],isValidInput:!0},{letters:[" "," "," "," "," "],color:["empty","empty","empty","empty","empty"],isValidInput:!0}],n=Ve(JSON.parse(JSON.stringify(t))),r=Ve([]),a=Ve(0),i=Ve(0),o=Ve({}),s=Ve(""),l=Ve(0),c=Ve(0),d=new Audio(Lf);d.preload="auto";const m=y=>{y.currentTime=0,y.play()};function v(y){const O=n.value[a.value],N=O.letters.every(ee=>ee!==" ");if(y==="BACKSPACE"){i.value!==0&&(i.value--,O.letters[i.value]=" ",O.color[i.value]="empty");return}if(i.value<=4&&y!=="ENTER"){O.letters[i.value]=y,O.color[i.value]="pending",i.value++,m(d);return}if(y==="ENTER"&&!N){O.isValidInput=!1,setTimeout(()=>{O.isValidInput=!0},400),S("Not enough letters");return}if(y==="ENTER"&&N&&!r.value.includes(O.letters.join("").toLowerCase())){O.isValidInput=!1,setTimeout(()=>{O.isValidInput=!0},400),S("Not in word list");return}if(y==="ENTER"&&N){document.removeEventListener("keydown",F);const ee=s.value.split(""),W={};ee.map(H=>{W[H]?W[H]+=1:W[H]=1});for(let H=0;H<ee.length;H++){const Ne=O.letters[H];Ne===ee[H]&&(W[Ne]===1?delete W[Ne]:W[Ne]--)}let re=0;const me=setInterval(()=>{const H=O.letters[re];H===ee[re]?(O.color[re]="flip right-place",o.value[H]="key-right-place"):H in W?(W[H]===1?delete W[H]:W[H]--,O.color[re]="flip wrong-place",o.value[H]!=="key-right-place"&&(o.value[H]="key-wrong-place")):(O.color[re]="flip not-exist",o.value[H]!=="key-right-place"&&o.value[H]!=="key-wrong-place"&&(o.value[H]="key-not-exist")),re++,re===5&&(clearInterval(me),a.value++,i.value=0,s.value===O.letters.join("")?setTimeout(()=>{_("win")},500):a.value===5?setTimeout(()=>{_("lose")},500):document.addEventListener("keydown",F))},300)}}function A(y){v(y)}function F(y){const O=y.key.toUpperCase();(e.topRow.includes(O)||e.middleRow.includes(O)||e.bottomRow.includes(O))&&v(O),(O==="BACKSPACE"||O==="ENTER")&&v(O)}function S(y,O=1500){const N=document.createElement("div");N.innerText=y,N.style.position="absolute",N.style.top="30%",N.style.left="50%",N.style.transform="translate(-50%, -50%)",N.style.backgroundColor="rgba(0, 0, 0, 0.8)",N.style.color="white",N.style.padding="10px",N.style.borderRadius="5px",N.style.zIndex="9999",N.style.userSelect="none",document.body.appendChild(N),N.addEventListener("click",()=>{N.style.animation="fade-out 0.4s",N.addEventListener("animationend",()=>{N.remove()})}),setTimeout(()=>{N.style.animation="fade-out 0.4s",N.addEventListener("animationend",()=>{N.remove()})},O)}function $(){fetch("./words.txt").then(y=>y.text()).then(y=>{let O=y.replace(/\r/g,"").split(`
`);const N=Math.floor(Math.random()*O.length);s.value=O[N].toUpperCase(),console.log(s.value)})}function _(y){let O;l.value++,y==="win"?(c.value++,O=`You win! You've won ${c.value} out of ${l.value} games! (${(c.value/l.value*100).toFixed(2)}%)`):O=`The word was: ${s.value}! You've won ${c.value} out of ${l.value} games! (${(c.value/l.value*100).toFixed(2)}%)`,S(O,3e3),setTimeout(()=>{n.value=JSON.parse(JSON.stringify(t)),o.value={},a.value=0,i.value=0,$(),document.addEventListener("keydown",F)},4e3)}return fo(async()=>{$(),fetch("./dictionary.txt").then(y=>y.text()).then(y=>{r.value=y.replace(/\r/g,"").split(`
`)}),document.addEventListener("keydown",F)}),co(()=>{document.removeEventListener("keydown",F)}),{solution:s,dictionary:r,keyboard:e,keyboardColors:o,gameRows:n,handleKeyDown:F,handleClick:A,played:l,won:c,alert:y=>window.alert(y)}},components:{Fragment:ue}},Co=e=>(fl("data-v-f10b8a64"),e=e(),cl(),e),zf={class:"min-h-screen flex flex-col justify-center items-center"},$f={class:"mx-auto flex justify-between w-[80%] max-w-[80%] sm:max-w-lg md:max-w-xl px-4 sm:px-8 bg-gray-700 py-4 rounded-xl bg-opacity-60"},Uf=Co(()=>oe("h1",{class:"text-2xl sm:text-3xl md:text-4xl tracking-widest"},"WORDLE",-1)),Bf={class:"flex flex-col items-center"},Hf={class:"flex flex-col my-10"},Yf={class:"flex flex-row"},Wf={class:"flex flex-col bg-gray-700 bg-opacity-50 rounded-2xl py-4 px-2 sm:px-6"},Kf={class:"flex flex-row justify-center"},qf=["onClick"],Xf={class:"flex flex-row justify-center"},Vf=["onClick"],Jf={class:"flex flex-row justify-center"},Gf=Co(()=>oe("svg",{xmlns:`http
            ://www.w3.org/2000/svg`,height:"20",viewBox:"0 0 24 24",width:"36"},[oe("path",{fill:"white",d:"M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"})],-1)),Qf=[Gf],Zf=["onClick"];function ec(e,t,n,r,a,i){const o=Tl("font-awesome-icon");return xe(),ke("div",zf,[oe("div",$f,[oe("button",{onClick:t[0]||(t[0]=s=>r.alert("the cake is a lie"))},[ge(o,{icon:"fa-solid fa-circle-question",class:"text-xl lg:text-2xl"})]),Uf,oe("button",{onClick:t[1]||(t[1]=s=>r.alert("42"))},[ge(o,{icon:"fa-solid fa-gear",class:"text-xl lg:text-2xl"})])]),oe("div",Bf,[oe("div",Hf,[(xe(!0),ke(ue,null,jt(r.gameRows,(s,l)=>(xe(),ke("div",{key:l,class:Qe([{jiggle:!s.isValidInput},"flex flex-row justify-between items-center select-none"])},[oe("div",Yf,[(xe(!0),ke(ue,null,jt(s.letters,(c,d)=>(xe(),ke("div",{key:d,class:Qe([s.color[d],"flex justify-center items-center text-xl sm:text-2xl m-1 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-sm font-bold"])},dn(c),3))),128))])],2))),128))])]),oe("div",Wf,[oe("div",Kf,[(xe(!0),ke(ue,null,jt(r.keyboard.topRow,s=>(xe(),ke("button",{key:s,class:Qe([r.keyboardColors[s],"keyboard-key m-[3px] p-1.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline"]),onClick:l=>r.handleClick(s)},dn(s),11,qf))),128))]),oe("div",Xf,[(xe(!0),ke(ue,null,jt(r.keyboard.middleRow,s=>(xe(),ke("button",{key:s,class:Qe([r.keyboardColors[s],"keyboard-key m-[3px] p-1.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline"]),onClick:l=>r.handleClick(s)},dn(s),11,Vf))),128))]),oe("div",Jf,[oe("button",{class:"keyboard-key m-[3px] p-1.5 px-1.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline",onClick:t[2]||(t[2]=s=>r.handleClick("BACKSPACE"))},Qf),(xe(!0),ke(ue,null,jt(r.keyboard.bottomRow,s=>(xe(),ke("button",{key:s,class:Qe([r.keyboardColors[s],"keyboard-key m-[3px] p-1.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline"]),onClick:l=>r.handleClick(s)},dn(s),11,Zf))),128)),oe("button",{class:"keyboard-key m-[3px] p-1.5 px-2.5 sm:p-4 sm:py-2.5 sm:m-[4px] text-xs sm:text-base focus:outline-none focus:shadow-outline",onClick:t[3]||(t[3]=s=>r.handleClick("ENTER"))}," ENTER ")])])])}const tc=jf(Df,[["render",ec],["__scopeId","data-v-f10b8a64"]]),nc={__name:"App",setup(e){return(t,n)=>(xe(),Gl(tc))}};function ai(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ai(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ai(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function zn(e){return zn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},zn(e)}function rc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ii(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ac(e,t,n){return t&&ii(e.prototype,t),n&&ii(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ua(e,t){return oc(e)||lc(e,t)||Po(e,t)||cc()}function an(e){return ic(e)||sc(e)||Po(e)||fc()}function ic(e){if(Array.isArray(e))return Sr(e)}function oc(e){if(Array.isArray(e))return e}function sc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function lc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Po(e,t){if(e){if(typeof e=="string")return Sr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sr(e,t)}}function Sr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function fc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var oi=function(){},da={},Io={},To=null,So={mark:oi,measure:oi};try{typeof window<"u"&&(da=window),typeof document<"u"&&(Io=document),typeof MutationObserver<"u"&&(To=MutationObserver),typeof performance<"u"&&(So=performance)}catch{}var uc=da.navigator||{},si=uc.userAgent,li=si===void 0?"":si,nt=da,V=Io,fi=To,yn=So;nt.document;var qe=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",No=~li.indexOf("MSIE")||~li.indexOf("Trident/"),xn,wn,_n,kn,An,He="___FONT_AWESOME___",Nr=16,Mo="fa",Ro="svg-inline--fa",gt="data-fa-i2svg",Mr="data-fa-pseudo-element",dc="data-fa-pseudo-element-pending",ma="data-prefix",pa="data-icon",ci="fontawesome-i2svg",mc="async",pc=["HTML","HEAD","STYLE","SCRIPT"],Fo=function(){try{return!0}catch{return!1}}(),X="classic",Z="sharp",ha=[X,Z];function on(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var Zt=on((xn={},ie(xn,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ie(xn,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),xn)),en=on((wn={},ie(wn,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ie(wn,Z,{solid:"fass",regular:"fasr"}),wn)),tn=on((_n={},ie(_n,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ie(_n,Z,{fass:"fa-solid",fasr:"fa-regular"}),_n)),hc=on((kn={},ie(kn,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ie(kn,Z,{"fa-solid":"fass","fa-regular":"fasr"}),kn)),gc=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Lo="fa-layers-text",vc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,bc=on((An={},ie(An,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ie(An,Z,{900:"fass",400:"fasr"}),An)),jo=[1,2,3,4,5,6,7,8,9,10],yc=jo.concat([11,12,13,14,15,16,17,18,19,20]),xc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],dt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},nn=new Set;Object.keys(en[X]).map(nn.add.bind(nn));Object.keys(en[Z]).map(nn.add.bind(nn));var wc=[].concat(ha,an(nn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",dt.GROUP,dt.SWAP_OPACITY,dt.PRIMARY,dt.SECONDARY]).concat(jo.map(function(e){return"".concat(e,"x")})).concat(yc.map(function(e){return"w-".concat(e)})),Ht=nt.FontAwesomeConfig||{};function _c(e){var t=V.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function kc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(V&&typeof V.querySelector=="function"){var Ac=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ac.forEach(function(e){var t=ua(e,2),n=t[0],r=t[1],a=kc(_c(n));a!=null&&(Ht[r]=a)})}var Do={styleDefault:"solid",familyDefault:"classic",cssPrefix:Mo,replacementClass:Ro,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ht.familyPrefix&&(Ht.cssPrefix=Ht.familyPrefix);var St=C(C({},Do),Ht);St.autoReplaceSvg||(St.observeMutations=!1);var T={};Object.keys(Do).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){St[e]=n,Yt.forEach(function(r){return r(T)})},get:function(){return St[e]}})});Object.defineProperty(T,"familyPrefix",{enumerable:!0,set:function(t){St.cssPrefix=t,Yt.forEach(function(n){return n(T)})},get:function(){return St.cssPrefix}});nt.FontAwesomeConfig=T;var Yt=[];function Oc(e){return Yt.push(e),function(){Yt.splice(Yt.indexOf(e),1)}}var Je=Nr,De={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ec(e){if(!(!e||!qe)){var t=V.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=V.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return V.head.insertBefore(t,r),e}}var Cc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function rn(){for(var e=12,t="";e-- >0;)t+=Cc[Math.random()*62|0];return t}function Ft(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ga(e){return e.classList?Ft(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function zo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Pc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(zo(e[n]),'" ')},"").trim()}function tr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function va(e){return e.size!==De.size||e.x!==De.x||e.y!==De.y||e.rotate!==De.rotate||e.flipX||e.flipY}function Ic(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Tc(e){var t=e.transform,n=e.width,r=n===void 0?Nr:n,a=e.height,i=a===void 0?Nr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&No?l+="translate(".concat(t.x/Je-r/2,"em, ").concat(t.y/Je-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Je,"em), calc(-50% + ").concat(t.y/Je,"em)) "):l+="translate(".concat(t.x/Je,"em, ").concat(t.y/Je,"em) "),l+="scale(".concat(t.size/Je*(t.flipX?-1:1),", ").concat(t.size/Je*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Sc=`:root, :host {
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
}`;function $o(){var e=Mo,t=Ro,n=T.cssPrefix,r=T.replacementClass,a=Sc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ui=!1;function hr(){T.autoAddCss&&!ui&&(Ec($o()),ui=!0)}var Nc={mixout:function(){return{dom:{css:$o,insertCss:hr}}},hooks:function(){return{beforeDOMElementCreation:function(){hr()},beforeI2svg:function(){hr()}}}},Ye=nt||{};Ye[He]||(Ye[He]={});Ye[He].styles||(Ye[He].styles={});Ye[He].hooks||(Ye[He].hooks={});Ye[He].shims||(Ye[He].shims=[]);var Ie=Ye[He],Uo=[],Mc=function e(){V.removeEventListener("DOMContentLoaded",e),$n=1,Uo.map(function(t){return t()})},$n=!1;qe&&($n=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),$n||V.addEventListener("DOMContentLoaded",Mc));function Rc(e){qe&&($n?setTimeout(e,0):Uo.push(e))}function sn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?zo(e):"<".concat(t," ").concat(Pc(r),">").concat(i.map(sn).join(""),"</").concat(t,">")}function di(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Fc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},gr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Fc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Lc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Rr(e){var t=Lc(e);return t.length===1?t[0].toString(16):null}function jc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function mi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Fr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=mi(t);typeof Ie.hooks.addPack=="function"&&!a?Ie.hooks.addPack(e,mi(t)):Ie.styles[e]=C(C({},Ie.styles[e]||{}),i),e==="fas"&&Fr("fa",t)}var On,En,Cn,wt=Ie.styles,Dc=Ie.shims,zc=(On={},ie(On,X,Object.values(tn[X])),ie(On,Z,Object.values(tn[Z])),On),ba=null,Bo={},Ho={},Yo={},Wo={},Ko={},$c=(En={},ie(En,X,Object.keys(Zt[X])),ie(En,Z,Object.keys(Zt[Z])),En);function Uc(e){return~wc.indexOf(e)}function Bc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Uc(a)?a:null}var qo=function(){var t=function(i){return gr(wt,function(o,s,l){return o[l]=gr(s,i,{}),o},{})};Bo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ho=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Ko=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in wt||T.autoFetchSvg,r=gr(Dc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Yo=r.names,Wo=r.unicodes,ba=nr(T.styleDefault,{family:T.familyDefault})};Oc(function(e){ba=nr(e.styleDefault,{family:T.familyDefault})});qo();function ya(e,t){return(Bo[e]||{})[t]}function Hc(e,t){return(Ho[e]||{})[t]}function mt(e,t){return(Ko[e]||{})[t]}function Xo(e){return Yo[e]||{prefix:null,iconName:null}}function Yc(e){var t=Wo[e],n=ya("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function rt(){return ba}var xa=function(){return{prefix:null,iconName:null,rest:[]}};function nr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=Zt[r][e],i=en[r][e]||en[r][a],o=e in Ie.styles?e:null;return i||o||null}var pi=(Cn={},ie(Cn,X,Object.keys(tn[X])),ie(Cn,Z,Object.keys(tn[Z])),Cn);function rr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ie(t,X,"".concat(T.cssPrefix,"-").concat(X)),ie(t,Z,"".concat(T.cssPrefix,"-").concat(Z)),t),o=null,s=X;(e.includes(i[X])||e.some(function(c){return pi[X].includes(c)}))&&(s=X),(e.includes(i[Z])||e.some(function(c){return pi[Z].includes(c)}))&&(s=Z);var l=e.reduce(function(c,d){var m=Bc(T.cssPrefix,d);if(wt[d]?(d=zc[s].includes(d)?hc[s][d]:d,o=d,c.prefix=d):$c[s].indexOf(d)>-1?(o=d,c.prefix=nr(d,{family:s})):m?c.iconName=m:d!==T.replacementClass&&d!==i[X]&&d!==i[Z]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?Xo(c.iconName):{},A=mt(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||A||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!wt.far&&wt.fas&&!T.autoFetchSvg&&(c.prefix="fas")}return c},xa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(wt.fass||T.autoFetchSvg)&&(l.prefix="fass",l.iconName=mt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=rt()||"fas"),l}var Wc=function(){function e(){rc(this,e),this.definitions={}}return ac(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=C(C({},n.definitions[s]||{}),o[s]),Fr(s,o[s]);var l=tn[X][s];l&&Fr(l,o[s]),qo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),hi=[],_t={},Ct={},Kc=Object.keys(Ct);function qc(e,t){var n=t.mixoutsTo;return hi=e,_t={},Object.keys(Ct).forEach(function(r){Kc.indexOf(r)===-1&&delete Ct[r]}),hi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),zn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){_t[o]||(_t[o]=[]),_t[o].push(i[o])})}r.provides&&r.provides(Ct)}),n}function Lr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=_t[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function vt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=_t[e]||[];a.forEach(function(i){i.apply(null,n)})}function We(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ct[e]?Ct[e].apply(null,t):void 0}function jr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||rt();if(t)return t=mt(n,t)||t,di(Vo.definitions,n,t)||di(Ie.styles,n,t)}var Vo=new Wc,Xc=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,vt("noAuto")},Vc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return qe?(vt("beforeI2svg",t),We("pseudoElements2svg",t),We("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,Rc(function(){Gc({autoReplaceSvgRoot:n}),vt("watch",t)})}},Jc={icon:function(t){if(t===null)return null;if(zn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:mt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=nr(t[0]);return{prefix:r,iconName:mt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.cssPrefix,"-"))>-1||t.match(gc))){var a=rr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||rt(),iconName:mt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=rt();return{prefix:i,iconName:mt(i,t)||t}}}},ye={noAuto:Xc,config:T,dom:Vc,parse:Jc,library:Vo,findIconDefinition:jr,toHtml:sn},Gc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?V:n;(Object.keys(Ie.styles).length>0||T.autoFetchSvg)&&qe&&T.autoReplaceSvg&&ye.dom.i2svg({node:r})};function ar(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return sn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(qe){var r=V.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Qc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(va(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=tr(C(C({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Zc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},a),{},{id:o}),children:r}]}]}function wa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,A=v===void 0?!1:v,F=r.found?r:n,S=F.width,$=F.height,_=a==="fak",P=[T.replacementClass,i?"".concat(T.cssPrefix,"-").concat(i):""].filter(function(me){return m.classes.indexOf(me)===-1}).filter(function(me){return me!==""||!!me}).concat(m.classes).join(" "),y={children:[],attributes:C(C({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:P,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat($)})},O=_&&!~m.classes.indexOf("fa-fw")?{width:"".concat(S/$*16*.0625,"em")}:{};A&&(y.attributes[gt]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(d||rn())},children:[l]}),delete y.attributes.title);var N=C(C({},y),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:C(C({},O),m.styles)}),ee=r.found&&n.found?We("generateAbstractMask",N)||{children:[],attributes:{}}:We("generateAbstractIcon",N)||{children:[],attributes:{}},W=ee.children,re=ee.attributes;return N.children=W,N.attributes=re,s?Zc(N):Qc(N)}function gi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=C(C(C({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[gt]="");var d=C({},o.styles);va(a)&&(d.transform=Tc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=tr(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function eu(e){var t=e.content,n=e.title,r=e.extra,a=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=tr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var vr=Ie.styles;function Dr(e){var t=e[0],n=e[1],r=e.slice(4),a=ua(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.cssPrefix,"-").concat(dt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(dt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.cssPrefix,"-").concat(dt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var tu={found:!1,width:512,height:512};function nu(e,t){!Fo&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function zr(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=rt()),new Promise(function(r,a){if(We("missingIconAbstract"),n==="fa"){var i=Xo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&vr[t]&&vr[t][e]){var o=vr[t][e];return r(Dr(o))}nu(e,t),r(C(C({},tu),{},{icon:T.showMissingIcons&&e?We("missingIconAbstract")||{}:{}}))})}var vi=function(){},$r=T.measurePerformance&&yn&&yn.mark&&yn.measure?yn:{mark:vi,measure:vi},$t='FA "6.3.0"',ru=function(t){return $r.mark("".concat($t," ").concat(t," begins")),function(){return Jo(t)}},Jo=function(t){$r.mark("".concat($t," ").concat(t," ends")),$r.measure("".concat($t," ").concat(t),"".concat($t," ").concat(t," begins"),"".concat($t," ").concat(t," ends"))},_a={begin:ru,end:Jo},Mn=function(){};function bi(e){var t=e.getAttribute?e.getAttribute(gt):null;return typeof t=="string"}function au(e){var t=e.getAttribute?e.getAttribute(ma):null,n=e.getAttribute?e.getAttribute(pa):null;return t&&n}function iu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function ou(){if(T.autoReplaceSvg===!0)return Rn.replace;var e=Rn[T.autoReplaceSvg];return e||Rn.replace}function su(e){return V.createElementNS("http://www.w3.org/2000/svg",e)}function lu(e){return V.createElement(e)}function Go(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?su:lu:n;if(typeof e=="string")return V.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Go(o,{ceFn:r}))}),a}function fu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Rn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Go(a),n)}),n.getAttribute(gt)===null&&T.keepOriginalSource){var r=V.createComment(fu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ga(n).indexOf(T.replacementClass))return Rn.replace(t);var a=new RegExp("".concat(T.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return sn(s)}).join(`
`);n.setAttribute(gt,""),n.innerHTML=o}};function yi(e){e()}function Qo(e,t){var n=typeof t=="function"?t:Mn;if(e.length===0)n();else{var r=yi;T.mutateApproach===mc&&(r=nt.requestAnimationFrame||yi),r(function(){var a=ou(),i=_a.begin("mutate");e.map(a),i(),n()})}}var ka=!1;function Zo(){ka=!0}function Ur(){ka=!1}var Un=null;function xi(e){if(fi&&T.observeMutations){var t=e.treeCallback,n=t===void 0?Mn:t,r=e.nodeCallback,a=r===void 0?Mn:r,i=e.pseudoElementsCallback,o=i===void 0?Mn:i,s=e.observeMutationsRoot,l=s===void 0?V:s;Un=new fi(function(c){if(!ka){var d=rt();Ft(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!bi(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&bi(m.target)&&~xc.indexOf(m.attributeName))if(m.attributeName==="class"&&au(m.target)){var v=rr(ga(m.target)),A=v.prefix,F=v.iconName;m.target.setAttribute(ma,A||d),F&&m.target.setAttribute(pa,F)}else iu(m.target)&&a(m.target)})}}),qe&&Un.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function cu(){Un&&Un.disconnect()}function uu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function du(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=rr(ga(e));return a.prefix||(a.prefix=rt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Hc(a.prefix,e.innerText)||ya(a.prefix,Rr(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function mu(e){var t=Ft(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||rn()):(t["aria-hidden"]="true",t.focusable="false")),t}function pu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:De,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=du(e),r=n.iconName,a=n.prefix,i=n.rest,o=mu(e),s=Lr("parseNodeAttributes",{},e),l=t.styleParser?uu(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:De,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var hu=Ie.styles;function es(e){var t=T.autoReplaceSvg==="nest"?wi(e,{styleParser:!1}):wi(e);return~t.extra.classes.indexOf(Lo)?We("generateLayersText",e,t):We("generateSvgReplacementMutation",e,t)}var at=new Set;ha.map(function(e){at.add("fa-".concat(e))});Object.keys(Zt[X]).map(at.add.bind(at));Object.keys(Zt[Z]).map(at.add.bind(at));at=an(at);function _i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!qe)return Promise.resolve();var n=V.documentElement.classList,r=function(m){return n.add("".concat(ci,"-").concat(m))},a=function(m){return n.remove("".concat(ci,"-").concat(m))},i=T.autoFetchSvg?at:ha.map(function(d){return"fa-".concat(d)}).concat(Object.keys(hu));i.includes("fa")||i.push("fa");var o=[".".concat(Lo,":not([").concat(gt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(gt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ft(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=_a.begin("onTree"),c=s.reduce(function(d,m){try{var v=es(m);v&&d.push(v)}catch(A){Fo||A.name==="MissingIcon"&&console.error(A)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){Qo(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function gu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;es(e).then(function(n){n&&Qo([n],t)})}function vu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:jr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:jr(a||{})),e(r,C(C({},n),{},{mask:a}))}}var bu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?De:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,A=n.titleId,F=A===void 0?null:A,S=n.classes,$=S===void 0?[]:S,_=n.attributes,P=_===void 0?{}:_,y=n.styles,O=y===void 0?{}:y;if(t){var N=t.prefix,ee=t.iconName,W=t.icon;return ar(C({type:"icon"},t),function(){return vt("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(v?P["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(F||rn()):(P["aria-hidden"]="true",P.focusable="false")),wa({icons:{main:Dr(W),mask:l?Dr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:ee,transform:C(C({},De),a),symbol:o,title:v,maskId:d,titleId:F,extra:{attributes:P,styles:O,classes:$}})})}},yu={mixout:function(){return{icon:vu(bu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=_i,n.nodeCallback=gu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?V:r,i=n.callback,o=i===void 0?function(){}:i;return _i(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(A,F){Promise.all([zr(a,s),d.iconName?zr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var $=ua(S,2),_=$[0],P=$[1];A([n,wa({icons:{main:_,mask:P},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=tr(s);l.length>0&&(a.style=l);var c;return va(o)&&(c=We("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},xu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return ar({type:"layer"},function(){vt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.cssPrefix,"-layers")].concat(an(i)).join(" ")},children:o}]})}}}},wu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return ar({type:"counter",content:n},function(){return vt("beforeDOMElementCreation",{content:n,params:r}),eu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(T.cssPrefix,"-layers-counter")].concat(an(s))}})})}}}},_u={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?De:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,A=v===void 0?{}:v;return ar({type:"text",content:n},function(){return vt("beforeDOMElementCreation",{content:n,params:r}),gi({content:n,transform:C(C({},De),i),title:s,extra:{attributes:m,styles:A,classes:["".concat(T.cssPrefix,"-layers-text")].concat(an(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(No){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,gi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},ku=new RegExp('"',"ug"),ki=[1105920,1112319];function Au(e){var t=e.replace(ku,""),n=jc(t,0),r=n>=ki[0]&&n<=ki[1],a=t.length===2?t[0]===t[1]:!1;return{value:Rr(a?t[0]:t),isSecondary:r||a}}function Ai(e,t){var n="".concat(dc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ft(e.children),o=i.filter(function(W){return W.getAttribute(Mr)===t})[0],s=nt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(vc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Z:X,A=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?en[v][l[2].toLowerCase()]:bc[v][c],F=Au(m),S=F.value,$=F.isSecondary,_=l[0].startsWith("FontAwesome"),P=ya(A,S),y=P;if(_){var O=Yc(S);O.iconName&&O.prefix&&(P=O.iconName,A=O.prefix)}if(P&&!$&&(!o||o.getAttribute(ma)!==A||o.getAttribute(pa)!==y)){e.setAttribute(n,y),o&&e.removeChild(o);var N=pu(),ee=N.extra;ee.attributes[Mr]=t,zr(P,A).then(function(W){var re=wa(C(C({},N),{},{icons:{main:W,mask:xa()},prefix:A,iconName:y,extra:ee,watchable:!0})),me=V.createElement("svg");t==="::before"?e.insertBefore(me,e.firstChild):e.appendChild(me),me.outerHTML=re.map(function(H){return sn(H)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ou(e){return Promise.all([Ai(e,"::before"),Ai(e,"::after")])}function Eu(e){return e.parentNode!==document.head&&!~pc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Mr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Oi(e){if(qe)return new Promise(function(t,n){var r=Ft(e.querySelectorAll("*")).filter(Eu).map(Ou),a=_a.begin("searchPseudoElements");Zo(),Promise.all(r).then(function(){a(),Ur(),t()}).catch(function(){a(),Ur(),n()})})}var Cu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Oi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?V:r;T.searchPseudoElements&&Oi(a)}}},Ei=!1,Pu={mixout:function(){return{dom:{unwatch:function(){Zo(),Ei=!0}}}},hooks:function(){return{bootstrap:function(){xi(Lr("mutationObserverCallbacks",{}))},noAuto:function(){cu()},watch:function(n){var r=n.observeMutationsRoot;Ei?Ur():xi(Lr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ci=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Iu={mixout:function(){return{parse:{transform:function(n){return Ci(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ci(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},A={outer:s,inner:m,path:v};return{tag:"g",attributes:C({},A.outer),children:[{tag:"g",attributes:C({},A.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),A.path)}]}]}}}},br={x:0,y:0,width:"100%",height:"100%"};function Pi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Tu(e){return e.tag==="g"?e.children:[e]}var Su={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?rr(a.split(" ").map(function(o){return o.trim()})):xa();return i.prefix||(i.prefix=rt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,A=Ic({transform:l,containerWidth:m,iconWidth:c}),F={tag:"rect",attributes:C(C({},br),{},{fill:"white"})},S=d.children?{children:d.children.map(Pi)}:{},$={tag:"g",attributes:C({},A.inner),children:[Pi(C({tag:d.tag,attributes:C(C({},d.attributes),A.path)},S))]},_={tag:"g",attributes:C({},A.outer),children:[$]},P="mask-".concat(s||rn()),y="clip-".concat(s||rn()),O={tag:"mask",attributes:C(C({},br),{},{id:P,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,_]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Tu(v)},O]};return r.push(N,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(P,")")},br)}),{children:r,attributes:a}}}},Nu={provides:function(t){var n=!1;nt.matchMedia&&(n=nt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:C(C({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:C(C({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:C(C({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Mu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Ru=[Nc,yu,xu,wu,_u,Cu,Pu,Iu,Su,Nu,Mu];qc(Ru,{mixoutsTo:ye});ye.noAuto;var ts=ye.config,Fu=ye.library;ye.dom;var Bn=ye.parse;ye.findIconDefinition;ye.toHtml;var Lu=ye.icon;ye.layer;var ju=ye.text;ye.counter;function Ii(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ii(Object(n),!0).forEach(function(r){pe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ii(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Hn(e){return Hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hn(e)}function pe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Du(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function zu(e,t){if(e==null)return{};var n=Du(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Br(e){return $u(e)||Uu(e)||Bu(e)||Hu()}function $u(e){if(Array.isArray(e))return Hr(e)}function Uu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Bu(e,t){if(e){if(typeof e=="string")return Hr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hr(e,t)}}function Hr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Hu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ns={exports:{}};(function(e){(function(t){var n=function(_,P,y){if(!c(P)||m(P)||v(P)||A(P)||l(P))return P;var O,N=0,ee=0;if(d(P))for(O=[],ee=P.length;N<ee;N++)O.push(n(_,P[N],y));else{O={};for(var W in P)Object.prototype.hasOwnProperty.call(P,W)&&(O[_(W,y)]=n(_,P[W],y))}return O},r=function(_,P){P=P||{};var y=P.separator||"_",O=P.split||/(?=[A-Z])/;return _.split(O).join(y)},a=function(_){return F(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(P,y){return y?y.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},i=function(_){var P=a(_);return P.substr(0,1).toUpperCase()+P.substr(1)},o=function(_,P){return r(_,P).toLowerCase()},s=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},d=function(_){return s.call(_)=="[object Array]"},m=function(_){return s.call(_)=="[object Date]"},v=function(_){return s.call(_)=="[object RegExp]"},A=function(_){return s.call(_)=="[object Boolean]"},F=function(_){return _=_-0,_===_},S=function(_,P){var y=P&&"process"in P?P.process:P;return typeof y!="function"?_:function(O,N){return y(O,_,N)}},$={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(_,P){return n(S(a,P),_)},decamelizeKeys:function(_,P){return n(S(o,P),_,P)},pascalizeKeys:function(_,P){return n(S(i,P),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=$:t.humps=$})(Yu)})(ns);var Wu=ns.exports,Ku=["class","style"];function qu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Wu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Xu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Aa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Aa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Xu(d);break;case"style":l.style=qu(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=zu(n,Ku);return Eo(e.tag,Ee(Ee(Ee({},t),{},{class:a.class,style:Ee(Ee({},a.style),o)},a.attrs),s),r)}var rs=!1;try{rs=!0}catch{}function Vu(){if(!rs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Wt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?pe({},e,t):{}}function Ju(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},pe(t,"fa-".concat(e.size),e.size!==null),pe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),pe(t,"fa-pull-".concat(e.pull),e.pull!==null),pe(t,"fa-swap-opacity",e.swapOpacity),pe(t,"fa-bounce",e.bounce),pe(t,"fa-shake",e.shake),pe(t,"fa-beat",e.beat),pe(t,"fa-fade",e.fade),pe(t,"fa-beat-fade",e.beatFade),pe(t,"fa-flash",e.flash),pe(t,"fa-spin-pulse",e.spinPulse),pe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ti(e){if(e&&Hn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Bn.icon)return Bn.icon(e);if(e===null)return null;if(Hn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Gu=oa({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=we(function(){return Ti(t.icon)}),i=we(function(){return Wt("classes",Ju(t))}),o=we(function(){return Wt("transform",typeof t.transform=="string"?Bn.transform(t.transform):t.transform)}),s=we(function(){return Wt("mask",Ti(t.mask))}),l=we(function(){return Lu(a.value,Ee(Ee(Ee(Ee({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Tn(l,function(d){if(!d)return Vu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=we(function(){return l.value?Aa(l.value.abstract[0],{},r):null});return function(){return c.value}}});oa({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=ts.familyPrefix,i=we(function(){return["".concat(a,"-layers")].concat(Br(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Eo("div",{class:i.value},r.default?r.default():[])}}});oa({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=ts.familyPrefix,i=we(function(){return Wt("classes",[].concat(Br(t.counter?["".concat(a,"-layers-counter")]:[]),Br(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=we(function(){return Wt("transform",typeof t.transform=="string"?Bn.transform(t.transform):t.transform)}),s=we(function(){var c=ju(t.value.toString(),Ee(Ee({},o.value),i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=we(function(){return Aa(s.value,{},r)});return function(){return l.value}}});var Qu={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},Zu={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M481.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-30.9 28.1c-7.7 7.1-11.4 17.5-10.9 27.9c.1 2.9 .2 5.8 .2 8.8s-.1 5.9-.2 8.8c-.5 10.5 3.1 20.9 10.9 27.9l30.9 28.1c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-39.7-12.6c-10-3.2-20.8-1.1-29.7 4.6c-4.9 3.1-9.9 6.1-15.1 8.7c-9.3 4.8-16.5 13.2-18.8 23.4l-8.9 40.7c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-8.9-40.7c-2.2-10.2-9.5-18.6-18.8-23.4c-5.2-2.7-10.2-5.6-15.1-8.7c-8.8-5.7-19.7-7.8-29.7-4.6L69.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l30.9-28.1c7.7-7.1 11.4-17.5 10.9-27.9c-.1-2.9-.2-5.8-.2-8.8s.1-5.9 .2-8.8c.5-10.5-3.1-20.9-10.9-27.9L8.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l39.7 12.6c10 3.2 20.8 1.1 29.7-4.6c4.9-3.1 9.9-6.1 15.1-8.7c9.3-4.8 16.5-13.2 18.8-23.4l8.9-40.7c2-9.1 9-16.3 18.2-17.8C213.3 1.2 227.5 0 242 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l8.9 40.7c2.2 10.2 9.4 18.6 18.8 23.4c5.2 2.7 10.2 5.6 15.1 8.7c8.8 5.7 19.7 7.7 29.7 4.6l39.7-12.6c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM242 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]};Fu.add(Zu,Qu);Rf(nc).component("font-awesome-icon",Gu).mount("#app");
