(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function _0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gd={exports:{}},Vl={},md={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ji=Symbol.for("react.element"),j0=Symbol.for("react.portal"),C0=Symbol.for("react.fragment"),N0=Symbol.for("react.strict_mode"),E0=Symbol.for("react.profiler"),M0=Symbol.for("react.provider"),L0=Symbol.for("react.context"),I0=Symbol.for("react.forward_ref"),z0=Symbol.for("react.suspense"),D0=Symbol.for("react.memo"),A0=Symbol.for("react.lazy"),wc=Symbol.iterator;function T0(e){return e===null||typeof e!="object"?null:(e=wc&&e[wc]||e["@@iterator"],typeof e=="function"?e:null)}var yd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$d=Object.assign,wd={};function _r(e,n,t){this.props=e,this.context=n,this.refs=wd,this.updater=t||yd}_r.prototype.isReactComponent={};_r.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};_r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vd(){}vd.prototype=_r.prototype;function ta(e,n,t){this.props=e,this.context=n,this.refs=wd,this.updater=t||yd}var ra=ta.prototype=new vd;ra.constructor=ta;$d(ra,_r.prototype);ra.isPureReactComponent=!0;var vc=Array.isArray,xd=Object.prototype.hasOwnProperty,ia={current:null},kd={key:!0,ref:!0,__self:!0,__source:!0};function bd(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)xd.call(n,r)&&!kd.hasOwnProperty(r)&&(i[r]=n[r]);var s=arguments.length-2;if(s===1)i.children=t;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ji,type:e,key:l,ref:o,props:i,_owner:ia.current}}function P0(e,n){return{$$typeof:ji,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function la(e){return typeof e=="object"&&e!==null&&e.$$typeof===ji}function B0(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var xc=/\/+/g;function $o(e,n){return typeof e=="object"&&e!==null&&e.key!=null?B0(""+e.key):n.toString(36)}function rl(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ji:case j0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+$o(o,0):r,vc(i)?(t="",e!=null&&(t=e.replace(xc,"$&/")+"/"),rl(i,n,t,"",function(u){return u})):i!=null&&(la(i)&&(i=P0(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xc,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",vc(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+$o(l,s);o+=rl(l,n,t,a,i)}else if(a=T0(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+$o(l,s++),o+=rl(l,n,t,a,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Di(e,n,t){if(e==null)return e;var r=[],i=0;return rl(e,r,"","",function(l){return n.call(t,l,i++)}),r}function R0(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ye={current:null},il={transition:null},F0={ReactCurrentDispatcher:Ye,ReactCurrentBatchConfig:il,ReactCurrentOwner:ia};function Sd(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Di,forEach:function(e,n,t){Di(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Di(e,function(){n++}),n},toArray:function(e){return Di(e,function(n){return n})||[]},only:function(e){if(!la(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ee.Component=_r;ee.Fragment=C0;ee.Profiler=E0;ee.PureComponent=ta;ee.StrictMode=N0;ee.Suspense=z0;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F0;ee.act=Sd;ee.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$d({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=ia.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)xd.call(n,a)&&!kd.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ji,type:e.type,key:i,ref:l,props:r,_owner:o}};ee.createContext=function(e){return e={$$typeof:L0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:M0,_context:e},e.Consumer=e};ee.createElement=bd;ee.createFactory=function(e){var n=bd.bind(null,e);return n.type=e,n};ee.createRef=function(){return{current:null}};ee.forwardRef=function(e){return{$$typeof:I0,render:e}};ee.isValidElement=la;ee.lazy=function(e){return{$$typeof:A0,_payload:{_status:-1,_result:e},_init:R0}};ee.memo=function(e,n){return{$$typeof:D0,type:e,compare:n===void 0?null:n}};ee.startTransition=function(e){var n=il.transition;il.transition={};try{e()}finally{il.transition=n}};ee.unstable_act=Sd;ee.useCallback=function(e,n){return Ye.current.useCallback(e,n)};ee.useContext=function(e){return Ye.current.useContext(e)};ee.useDebugValue=function(){};ee.useDeferredValue=function(e){return Ye.current.useDeferredValue(e)};ee.useEffect=function(e,n){return Ye.current.useEffect(e,n)};ee.useId=function(){return Ye.current.useId()};ee.useImperativeHandle=function(e,n,t){return Ye.current.useImperativeHandle(e,n,t)};ee.useInsertionEffect=function(e,n){return Ye.current.useInsertionEffect(e,n)};ee.useLayoutEffect=function(e,n){return Ye.current.useLayoutEffect(e,n)};ee.useMemo=function(e,n){return Ye.current.useMemo(e,n)};ee.useReducer=function(e,n,t){return Ye.current.useReducer(e,n,t)};ee.useRef=function(e){return Ye.current.useRef(e)};ee.useState=function(e){return Ye.current.useState(e)};ee.useSyncExternalStore=function(e,n,t){return Ye.current.useSyncExternalStore(e,n,t)};ee.useTransition=function(){return Ye.current.useTransition()};ee.version="18.3.1";md.exports=ee;var v=md.exports;const O0=_0(v);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0=v,U0=Symbol.for("react.element"),V0=Symbol.for("react.fragment"),H0=Object.prototype.hasOwnProperty,Z0=G0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q0={key:!0,ref:!0,__self:!0,__source:!0};function _d(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)H0.call(n,r)&&!Q0.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:U0,type:e,key:l,ref:o,props:i,_owner:Z0.current}}Vl.Fragment=V0;Vl.jsx=_d;Vl.jsxs=_d;gd.exports=Vl;var c=gd.exports,jd={exports:{}},pn={},Cd={exports:{}},Nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(L,A){var U=L.length;L.push(A);e:for(;0<U;){var Y=U-1>>>1,ce=L[Y];if(0<i(ce,A))L[Y]=A,L[U]=ce,U=Y;else break e}}function t(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var A=L[0],U=L.pop();if(U!==A){L[0]=U;e:for(var Y=0,ce=L.length,Sn=ce>>>1;Y<Sn;){var Je=2*(Y+1)-1,Ce=L[Je],Z=Je+1,V=L[Z];if(0>i(Ce,U))Z<ce&&0>i(V,Ce)?(L[Y]=V,L[Z]=U,Y=Z):(L[Y]=Ce,L[Je]=U,Y=Je);else if(Z<ce&&0>i(V,U))L[Y]=V,L[Z]=U,Y=Z;else break e}}return A}function i(L,A){var U=L.sortIndex-A.sortIndex;return U!==0?U:L.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],u=[],f=1,h=null,p=3,y=!1,k=!1,b=!1,R=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $(L){for(var A=t(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=L)r(u),A.sortIndex=A.expirationTime,n(a,A);else break;A=t(u)}}function w(L){if(b=!1,$(L),!k)if(t(a)!==null)k=!0,me(x);else{var A=t(u);A!==null&&ue(w,A.startTime-L)}}function x(L,A){k=!1,b&&(b=!1,m(_),_=-1),y=!0;var U=p;try{for($(A),h=t(a);h!==null&&(!(h.expirationTime>A)||L&&!z());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,p=h.priorityLevel;var ce=Y(h.expirationTime<=A);A=e.unstable_now(),typeof ce=="function"?h.callback=ce:h===t(a)&&r(a),$(A)}else r(a);h=t(a)}if(h!==null)var Sn=!0;else{var Je=t(u);Je!==null&&ue(w,Je.startTime-A),Sn=!1}return Sn}finally{h=null,p=U,y=!1}}var N=!1,E=null,_=-1,D=5,C=-1;function z(){return!(e.unstable_now()-C<D)}function F(){if(E!==null){var L=e.unstable_now();C=L;var A=!0;try{A=E(!0,L)}finally{A?W():(N=!1,E=null)}}else N=!1}var W;if(typeof g=="function")W=function(){g(F)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,re=Q.port2;Q.port1.onmessage=F,W=function(){re.postMessage(null)}}else W=function(){R(F,0)};function me(L){E=L,N||(N=!0,W())}function ue(L,A){_=R(function(){L(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){k||y||(k=!0,me(x))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(L){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var U=p;p=A;try{return L()}finally{p=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,A){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var U=p;p=L;try{return A()}finally{p=U}},e.unstable_scheduleCallback=function(L,A,U){var Y=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?Y+U:Y):U=Y,L){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=U+ce,L={id:f++,callback:A,priorityLevel:L,startTime:U,expirationTime:ce,sortIndex:-1},U>Y?(L.sortIndex=U,n(u,L),t(a)===null&&L===t(u)&&(b?(m(_),_=-1):b=!0,ue(w,U-Y))):(L.sortIndex=ce,n(a,L),k||y||(k=!0,me(x))),L},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(L){var A=p;return function(){var U=p;p=A;try{return L.apply(this,arguments)}finally{p=U}}}})(Nd);Cd.exports=Nd;var W0=Cd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0=v,hn=W0;function M(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ed=new Set,ai={};function Ft(e,n){mr(e,n),mr(e+"Capture",n)}function mr(e,n){for(ai[e]=n,e=0;e<n.length;e++)Ed.add(n[e])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yo=Object.prototype.hasOwnProperty,K0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kc={},bc={};function Y0(e){return Yo.call(bc,e)?!0:Yo.call(kc,e)?!1:K0.test(e)?bc[e]=!0:(kc[e]=!0,!1)}function X0(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function J0(e,n,t,r){if(n===null||typeof n>"u"||X0(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Xe(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Fe[n]=new Xe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function sa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(oa,sa);Fe[n]=new Xe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(oa,sa);Fe[n]=new Xe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(oa,sa);Fe[n]=new Xe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function aa(e,n,t,r){var i=Fe.hasOwnProperty(n)?Fe[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(J0(n,t,i,r)&&(t=null),r||i===null?Y0(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Kn=q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ai=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),qt=Symbol.for("react.fragment"),ca=Symbol.for("react.strict_mode"),Xo=Symbol.for("react.profiler"),Md=Symbol.for("react.provider"),Ld=Symbol.for("react.context"),ua=Symbol.for("react.forward_ref"),Jo=Symbol.for("react.suspense"),es=Symbol.for("react.suspense_list"),da=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),Id=Symbol.for("react.offscreen"),Sc=Symbol.iterator;function zr(e){return e===null||typeof e!="object"?null:(e=Sc&&e[Sc]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,wo;function Vr(e){if(wo===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);wo=n&&n[1]||""}return`
`+wo+e}var vo=!1;function xo(e,n){if(!e||vo)return"";vo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{vo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Vr(e):""}function ep(e){switch(e.tag){case 5:return Vr(e.type);case 16:return Vr("Lazy");case 13:return Vr("Suspense");case 19:return Vr("SuspenseList");case 0:case 2:case 15:return e=xo(e.type,!1),e;case 11:return e=xo(e.type.render,!1),e;case 1:return e=xo(e.type,!0),e;default:return""}}function ns(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qt:return"Fragment";case Wt:return"Portal";case Xo:return"Profiler";case ca:return"StrictMode";case Jo:return"Suspense";case es:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ld:return(e.displayName||"Context")+".Consumer";case Md:return(e._context.displayName||"Context")+".Provider";case ua:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case da:return n=e.displayName||null,n!==null?n:ns(e.type)||"Memo";case et:n=e._payload,e=e._init;try{return ns(e(n))}catch{}}return null}function np(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ns(n);case 8:return n===ca?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tp(e){var n=zd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ti(e){e._valueTracker||(e._valueTracker=tp(e))}function Dd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=zd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function gl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ts(e,n){var t=n.checked;return xe({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function _c(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=yt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ad(e,n){n=n.checked,n!=null&&aa(e,"checked",n,!1)}function rs(e,n){Ad(e,n);var t=yt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?is(e,n.type,t):n.hasOwnProperty("defaultValue")&&is(e,n.type,yt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function jc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function is(e,n,t){(n!=="number"||gl(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Hr=Array.isArray;function sr(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+yt(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function ls(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(M(91));return xe({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(M(92));if(Hr(t)){if(1<t.length)throw Error(M(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:yt(t)}}function Td(e,n){var t=yt(n.value),r=yt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Nc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Pd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function os(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Pd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pi,Bd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Pi=Pi||document.createElement("div"),Pi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ci(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rp=["Webkit","ms","Moz","O"];Object.keys(Xr).forEach(function(e){rp.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Xr[n]=Xr[e]})});function Rd(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Xr.hasOwnProperty(e)&&Xr[e]?(""+n).trim():n+"px"}function Fd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Rd(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var ip=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ss(e,n){if(n){if(ip[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(M(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(M(61))}if(n.style!=null&&typeof n.style!="object")throw Error(M(62))}}function as(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cs=null;function fa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var us=null,ar=null,cr=null;function Ec(e){if(e=Ei(e)){if(typeof us!="function")throw Error(M(280));var n=e.stateNode;n&&(n=ql(n),us(e.stateNode,e.type,n))}}function Od(e){ar?cr?cr.push(e):cr=[e]:ar=e}function Gd(){if(ar){var e=ar,n=cr;if(cr=ar=null,Ec(e),n)for(e=0;e<n.length;e++)Ec(n[e])}}function Ud(e,n){return e(n)}function Vd(){}var ko=!1;function Hd(e,n,t){if(ko)return e(n,t);ko=!0;try{return Ud(e,n,t)}finally{ko=!1,(ar!==null||cr!==null)&&(Vd(),Gd())}}function ui(e,n){var t=e.stateNode;if(t===null)return null;var r=ql(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(M(231,n,typeof t));return t}var ds=!1;if(Zn)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){ds=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{ds=!1}function lp(e,n,t,r,i,l,o,s,a){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(f){this.onError(f)}}var Jr=!1,ml=null,yl=!1,fs=null,op={onError:function(e){Jr=!0,ml=e}};function sp(e,n,t,r,i,l,o,s,a){Jr=!1,ml=null,lp.apply(op,arguments)}function ap(e,n,t,r,i,l,o,s,a){if(sp.apply(this,arguments),Jr){if(Jr){var u=ml;Jr=!1,ml=null}else throw Error(M(198));yl||(yl=!0,fs=u)}}function Ot(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Zd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Mc(e){if(Ot(e)!==e)throw Error(M(188))}function cp(e){var n=e.alternate;if(!n){if(n=Ot(e),n===null)throw Error(M(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Mc(i),e;if(l===r)return Mc(i),n;l=l.sibling}throw Error(M(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===t){o=!0,t=i,r=l;break}if(s===r){o=!0,r=i,t=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===t){o=!0,t=l,r=i;break}if(s===r){o=!0,r=l,t=i;break}s=s.sibling}if(!o)throw Error(M(189))}}if(t.alternate!==r)throw Error(M(190))}if(t.tag!==3)throw Error(M(188));return t.stateNode.current===t?e:n}function Qd(e){return e=cp(e),e!==null?Wd(e):null}function Wd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Wd(e);if(n!==null)return n;e=e.sibling}return null}var qd=hn.unstable_scheduleCallback,Lc=hn.unstable_cancelCallback,up=hn.unstable_shouldYield,dp=hn.unstable_requestPaint,Se=hn.unstable_now,fp=hn.unstable_getCurrentPriorityLevel,ha=hn.unstable_ImmediatePriority,Kd=hn.unstable_UserBlockingPriority,$l=hn.unstable_NormalPriority,hp=hn.unstable_LowPriority,Yd=hn.unstable_IdlePriority,Hl=null,Pn=null;function pp(e){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(Hl,e,void 0,(e.current.flags&128)===128)}catch{}}var Mn=Math.clz32?Math.clz32:yp,gp=Math.log,mp=Math.LN2;function yp(e){return e>>>=0,e===0?32:31-(gp(e)/mp|0)|0}var Bi=64,Ri=4194304;function Zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wl(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~i;s!==0?r=Zr(s):(l&=o,l!==0&&(r=Zr(l)))}else o=t&~i,o!==0?r=Zr(o):l!==0&&(r=Zr(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Mn(n),i=1<<t,r|=e[t],n&=~i;return r}function $p(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wp(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Mn(l),s=1<<o,a=i[o];a===-1?(!(s&t)||s&r)&&(i[o]=$p(s,n)):a<=n&&(e.expiredLanes|=s),l&=~s}}function hs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xd(){var e=Bi;return Bi<<=1,!(Bi&4194240)&&(Bi=64),e}function bo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ci(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Mn(n),e[n]=t}function vp(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Mn(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function pa(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Mn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var ae=0;function Jd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ef,ga,nf,tf,rf,ps=!1,Fi=[],at=null,ct=null,ut=null,di=new Map,fi=new Map,rt=[],xp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ic(e,n){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":di.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":fi.delete(n.pointerId)}}function Ar(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=Ei(n),n!==null&&ga(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function kp(e,n,t,r,i){switch(n){case"focusin":return at=Ar(at,e,n,t,r,i),!0;case"dragenter":return ct=Ar(ct,e,n,t,r,i),!0;case"mouseover":return ut=Ar(ut,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return di.set(l,Ar(di.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,fi.set(l,Ar(fi.get(l)||null,e,n,t,r,i)),!0}return!1}function lf(e){var n=Et(e.target);if(n!==null){var t=Ot(n);if(t!==null){if(n=t.tag,n===13){if(n=Zd(t),n!==null){e.blockedOn=n,rf(e.priority,function(){nf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ll(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=gs(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);cs=r,t.target.dispatchEvent(r),cs=null}else return n=Ei(t),n!==null&&ga(n),e.blockedOn=t,!1;n.shift()}return!0}function zc(e,n,t){ll(e)&&t.delete(n)}function bp(){ps=!1,at!==null&&ll(at)&&(at=null),ct!==null&&ll(ct)&&(ct=null),ut!==null&&ll(ut)&&(ut=null),di.forEach(zc),fi.forEach(zc)}function Tr(e,n){e.blockedOn===n&&(e.blockedOn=null,ps||(ps=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,bp)))}function hi(e){function n(i){return Tr(i,e)}if(0<Fi.length){Tr(Fi[0],e);for(var t=1;t<Fi.length;t++){var r=Fi[t];r.blockedOn===e&&(r.blockedOn=null)}}for(at!==null&&Tr(at,e),ct!==null&&Tr(ct,e),ut!==null&&Tr(ut,e),di.forEach(n),fi.forEach(n),t=0;t<rt.length;t++)r=rt[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(t=rt[0],t.blockedOn===null);)lf(t),t.blockedOn===null&&rt.shift()}var ur=Kn.ReactCurrentBatchConfig,vl=!0;function Sp(e,n,t,r){var i=ae,l=ur.transition;ur.transition=null;try{ae=1,ma(e,n,t,r)}finally{ae=i,ur.transition=l}}function _p(e,n,t,r){var i=ae,l=ur.transition;ur.transition=null;try{ae=4,ma(e,n,t,r)}finally{ae=i,ur.transition=l}}function ma(e,n,t,r){if(vl){var i=gs(e,n,t,r);if(i===null)zo(e,n,r,xl,t),Ic(e,r);else if(kp(i,e,n,t,r))r.stopPropagation();else if(Ic(e,r),n&4&&-1<xp.indexOf(e)){for(;i!==null;){var l=Ei(i);if(l!==null&&ef(l),l=gs(e,n,t,r),l===null&&zo(e,n,r,xl,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else zo(e,n,r,null,t)}}var xl=null;function gs(e,n,t,r){if(xl=null,e=fa(r),e=Et(e),e!==null)if(n=Ot(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Zd(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return xl=e,null}function of(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fp()){case ha:return 1;case Kd:return 4;case $l:case hp:return 16;case Yd:return 536870912;default:return 16}default:return 16}}var lt=null,ya=null,ol=null;function sf(){if(ol)return ol;var e,n=ya,t=n.length,r,i="value"in lt?lt.value:lt.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return ol=i.slice(e,1<r?1-r:void 0)}function sl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Oi(){return!0}function Dc(){return!1}function gn(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Oi:Dc,this.isPropagationStopped=Dc,this}return xe(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),n}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$a=gn(jr),Ni=xe({},jr,{view:0,detail:0}),jp=gn(Ni),So,_o,Pr,Zl=xe({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(So=e.screenX-Pr.screenX,_o=e.screenY-Pr.screenY):_o=So=0,Pr=e),So)},movementY:function(e){return"movementY"in e?e.movementY:_o}}),Ac=gn(Zl),Cp=xe({},Zl,{dataTransfer:0}),Np=gn(Cp),Ep=xe({},Ni,{relatedTarget:0}),jo=gn(Ep),Mp=xe({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),Lp=gn(Mp),Ip=xe({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zp=gn(Ip),Dp=xe({},jr,{data:0}),Tc=gn(Dp),Ap={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Pp[e])?!!n[e]:!1}function wa(){return Bp}var Rp=xe({},Ni,{key:function(e){if(e.key){var n=Ap[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wa,charCode:function(e){return e.type==="keypress"?sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fp=gn(Rp),Op=xe({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pc=gn(Op),Gp=xe({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wa}),Up=gn(Gp),Vp=xe({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hp=gn(Vp),Zp=xe({},Zl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qp=gn(Zp),Wp=[9,13,27,32],va=Zn&&"CompositionEvent"in window,ei=null;Zn&&"documentMode"in document&&(ei=document.documentMode);var qp=Zn&&"TextEvent"in window&&!ei,af=Zn&&(!va||ei&&8<ei&&11>=ei),Bc=" ",Rc=!1;function cf(e,n){switch(e){case"keyup":return Wp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kt=!1;function Kp(e,n){switch(e){case"compositionend":return uf(n);case"keypress":return n.which!==32?null:(Rc=!0,Bc);case"textInput":return e=n.data,e===Bc&&Rc?null:e;default:return null}}function Yp(e,n){if(Kt)return e==="compositionend"||!va&&cf(e,n)?(e=sf(),ol=ya=lt=null,Kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return af&&n.locale!=="ko"?null:n.data;default:return null}}var Xp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Xp[e.type]:n==="textarea"}function df(e,n,t,r){Od(r),n=kl(n,"onChange"),0<n.length&&(t=new $a("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var ni=null,pi=null;function Jp(e){kf(e,0)}function Ql(e){var n=Jt(e);if(Dd(n))return e}function eg(e,n){if(e==="change")return n}var ff=!1;if(Zn){var Co;if(Zn){var No="oninput"in document;if(!No){var Oc=document.createElement("div");Oc.setAttribute("oninput","return;"),No=typeof Oc.oninput=="function"}Co=No}else Co=!1;ff=Co&&(!document.documentMode||9<document.documentMode)}function Gc(){ni&&(ni.detachEvent("onpropertychange",hf),pi=ni=null)}function hf(e){if(e.propertyName==="value"&&Ql(pi)){var n=[];df(n,pi,e,fa(e)),Hd(Jp,n)}}function ng(e,n,t){e==="focusin"?(Gc(),ni=n,pi=t,ni.attachEvent("onpropertychange",hf)):e==="focusout"&&Gc()}function tg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ql(pi)}function rg(e,n){if(e==="click")return Ql(n)}function ig(e,n){if(e==="input"||e==="change")return Ql(n)}function lg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var In=typeof Object.is=="function"?Object.is:lg;function gi(e,n){if(In(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Yo.call(n,i)||!In(e[i],n[i]))return!1}return!0}function Uc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vc(e,n){var t=Uc(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Uc(t)}}function pf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?pf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function gf(){for(var e=window,n=gl();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=gl(e.document)}return n}function xa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function og(e){var n=gf(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&pf(t.ownerDocument.documentElement,t)){if(r!==null&&xa(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Vc(t,l);var o=Vc(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sg=Zn&&"documentMode"in document&&11>=document.documentMode,Yt=null,ms=null,ti=null,ys=!1;function Hc(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ys||Yt==null||Yt!==gl(r)||(r=Yt,"selectionStart"in r&&xa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ti&&gi(ti,r)||(ti=r,r=kl(ms,"onSelect"),0<r.length&&(n=new $a("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Yt)))}function Gi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Xt={animationend:Gi("Animation","AnimationEnd"),animationiteration:Gi("Animation","AnimationIteration"),animationstart:Gi("Animation","AnimationStart"),transitionend:Gi("Transition","TransitionEnd")},Eo={},mf={};Zn&&(mf=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function Wl(e){if(Eo[e])return Eo[e];if(!Xt[e])return e;var n=Xt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in mf)return Eo[e]=n[t];return e}var yf=Wl("animationend"),$f=Wl("animationiteration"),wf=Wl("animationstart"),vf=Wl("transitionend"),xf=new Map,Zc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,n){xf.set(e,n),Ft(n,[e])}for(var Mo=0;Mo<Zc.length;Mo++){var Lo=Zc[Mo],ag=Lo.toLowerCase(),cg=Lo[0].toUpperCase()+Lo.slice(1);xt(ag,"on"+cg)}xt(yf,"onAnimationEnd");xt($f,"onAnimationIteration");xt(wf,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(vf,"onTransitionEnd");mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ug=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));function Qc(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,ap(r,n,void 0,e),e.currentTarget=null}function kf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==l&&i.isPropagationStopped())break e;Qc(i,s,u),l=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,u=s.currentTarget,s=s.listener,a!==l&&i.isPropagationStopped())break e;Qc(i,s,u),l=a}}}if(yl)throw e=fs,yl=!1,fs=null,e}function fe(e,n){var t=n[ks];t===void 0&&(t=n[ks]=new Set);var r=e+"__bubble";t.has(r)||(bf(n,e,2,!1),t.add(r))}function Io(e,n,t){var r=0;n&&(r|=4),bf(t,e,r,n)}var Ui="_reactListening"+Math.random().toString(36).slice(2);function mi(e){if(!e[Ui]){e[Ui]=!0,Ed.forEach(function(t){t!=="selectionchange"&&(ug.has(t)||Io(t,!1,e),Io(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ui]||(n[Ui]=!0,Io("selectionchange",!1,n))}}function bf(e,n,t,r){switch(of(n)){case 1:var i=Sp;break;case 4:i=_p;break;default:i=ma}t=i.bind(null,n,t,e),i=void 0,!ds||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function zo(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Et(s),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}s=s.parentNode}}r=r.return}Hd(function(){var u=l,f=fa(t),h=[];e:{var p=xf.get(e);if(p!==void 0){var y=$a,k=e;switch(e){case"keypress":if(sl(t)===0)break e;case"keydown":case"keyup":y=Fp;break;case"focusin":k="focus",y=jo;break;case"focusout":k="blur",y=jo;break;case"beforeblur":case"afterblur":y=jo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ac;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Np;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Up;break;case yf:case $f:case wf:y=Lp;break;case vf:y=Hp;break;case"scroll":y=jp;break;case"wheel":y=Qp;break;case"copy":case"cut":case"paste":y=zp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Pc}var b=(n&4)!==0,R=!b&&e==="scroll",m=b?p!==null?p+"Capture":null:p;b=[];for(var g=u,$;g!==null;){$=g;var w=$.stateNode;if($.tag===5&&w!==null&&($=w,m!==null&&(w=ui(g,m),w!=null&&b.push(yi(g,w,$)))),R)break;g=g.return}0<b.length&&(p=new y(p,k,null,t,f),h.push({event:p,listeners:b}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&t!==cs&&(k=t.relatedTarget||t.fromElement)&&(Et(k)||k[Qn]))break e;if((y||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,y?(k=t.relatedTarget||t.toElement,y=u,k=k?Et(k):null,k!==null&&(R=Ot(k),k!==R||k.tag!==5&&k.tag!==6)&&(k=null)):(y=null,k=u),y!==k)){if(b=Ac,w="onMouseLeave",m="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(b=Pc,w="onPointerLeave",m="onPointerEnter",g="pointer"),R=y==null?p:Jt(y),$=k==null?p:Jt(k),p=new b(w,g+"leave",y,t,f),p.target=R,p.relatedTarget=$,w=null,Et(f)===u&&(b=new b(m,g+"enter",k,t,f),b.target=$,b.relatedTarget=R,w=b),R=w,y&&k)n:{for(b=y,m=k,g=0,$=b;$;$=Ht($))g++;for($=0,w=m;w;w=Ht(w))$++;for(;0<g-$;)b=Ht(b),g--;for(;0<$-g;)m=Ht(m),$--;for(;g--;){if(b===m||m!==null&&b===m.alternate)break n;b=Ht(b),m=Ht(m)}b=null}else b=null;y!==null&&Wc(h,p,y,b,!1),k!==null&&R!==null&&Wc(h,R,k,b,!0)}}e:{if(p=u?Jt(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var x=eg;else if(Fc(p))if(ff)x=ig;else{x=tg;var N=ng}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(x=rg);if(x&&(x=x(e,u))){df(h,x,t,f);break e}N&&N(e,p,u),e==="focusout"&&(N=p._wrapperState)&&N.controlled&&p.type==="number"&&is(p,"number",p.value)}switch(N=u?Jt(u):window,e){case"focusin":(Fc(N)||N.contentEditable==="true")&&(Yt=N,ms=u,ti=null);break;case"focusout":ti=ms=Yt=null;break;case"mousedown":ys=!0;break;case"contextmenu":case"mouseup":case"dragend":ys=!1,Hc(h,t,f);break;case"selectionchange":if(sg)break;case"keydown":case"keyup":Hc(h,t,f)}var E;if(va)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Kt?cf(e,t)&&(_="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(af&&t.locale!=="ko"&&(Kt||_!=="onCompositionStart"?_==="onCompositionEnd"&&Kt&&(E=sf()):(lt=f,ya="value"in lt?lt.value:lt.textContent,Kt=!0)),N=kl(u,_),0<N.length&&(_=new Tc(_,e,null,t,f),h.push({event:_,listeners:N}),E?_.data=E:(E=uf(t),E!==null&&(_.data=E)))),(E=qp?Kp(e,t):Yp(e,t))&&(u=kl(u,"onBeforeInput"),0<u.length&&(f=new Tc("onBeforeInput","beforeinput",null,t,f),h.push({event:f,listeners:u}),f.data=E))}kf(h,n)})}function yi(e,n,t){return{instance:e,listener:n,currentTarget:t}}function kl(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=ui(e,t),l!=null&&r.unshift(yi(e,l,i)),l=ui(e,n),l!=null&&r.push(yi(e,l,i))),e=e.return}return r}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wc(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var s=t,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,i?(a=ui(t,l),a!=null&&o.unshift(yi(t,a,s))):i||(a=ui(t,l),a!=null&&o.push(yi(t,a,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var dg=/\r\n?/g,fg=/\u0000|\uFFFD/g;function qc(e){return(typeof e=="string"?e:""+e).replace(dg,`
`).replace(fg,"")}function Vi(e,n,t){if(n=qc(n),qc(e)!==n&&t)throw Error(M(425))}function bl(){}var $s=null,ws=null;function vs(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xs=typeof setTimeout=="function"?setTimeout:void 0,hg=typeof clearTimeout=="function"?clearTimeout:void 0,Kc=typeof Promise=="function"?Promise:void 0,pg=typeof queueMicrotask=="function"?queueMicrotask:typeof Kc<"u"?function(e){return Kc.resolve(null).then(e).catch(gg)}:xs;function gg(e){setTimeout(function(){throw e})}function Do(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),hi(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);hi(n)}function dt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Yc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Cr=Math.random().toString(36).slice(2),Tn="__reactFiber$"+Cr,$i="__reactProps$"+Cr,Qn="__reactContainer$"+Cr,ks="__reactEvents$"+Cr,mg="__reactListeners$"+Cr,yg="__reactHandles$"+Cr;function Et(e){var n=e[Tn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Qn]||t[Tn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Yc(e);e!==null;){if(t=e[Tn])return t;e=Yc(e)}return n}e=t,t=e.parentNode}return null}function Ei(e){return e=e[Tn]||e[Qn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function ql(e){return e[$i]||null}var bs=[],er=-1;function kt(e){return{current:e}}function pe(e){0>er||(e.current=bs[er],bs[er]=null,er--)}function de(e,n){er++,bs[er]=e.current,e.current=n}var $t={},Ze=kt($t),ln=kt(!1),At=$t;function yr(e,n){var t=e.type.contextTypes;if(!t)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function on(e){return e=e.childContextTypes,e!=null}function Sl(){pe(ln),pe(Ze)}function Xc(e,n,t){if(Ze.current!==$t)throw Error(M(168));de(Ze,n),de(ln,t)}function Sf(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(M(108,np(e)||"Unknown",i));return xe({},t,r)}function _l(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,At=Ze.current,de(Ze,e),de(ln,ln.current),!0}function Jc(e,n,t){var r=e.stateNode;if(!r)throw Error(M(169));t?(e=Sf(e,n,At),r.__reactInternalMemoizedMergedChildContext=e,pe(ln),pe(Ze),de(Ze,e)):pe(ln),de(ln,t)}var On=null,Kl=!1,Ao=!1;function _f(e){On===null?On=[e]:On.push(e)}function $g(e){Kl=!0,_f(e)}function bt(){if(!Ao&&On!==null){Ao=!0;var e=0,n=ae;try{var t=On;for(ae=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}On=null,Kl=!1}catch(i){throw On!==null&&(On=On.slice(e+1)),qd(ha,bt),i}finally{ae=n,Ao=!1}}return null}var nr=[],tr=0,jl=null,Cl=0,$n=[],wn=0,Tt=null,Gn=1,Un="";function jt(e,n){nr[tr++]=Cl,nr[tr++]=jl,jl=e,Cl=n}function jf(e,n,t){$n[wn++]=Gn,$n[wn++]=Un,$n[wn++]=Tt,Tt=e;var r=Gn;e=Un;var i=32-Mn(r)-1;r&=~(1<<i),t+=1;var l=32-Mn(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gn=1<<32-Mn(n)+i|t<<i|r,Un=l+e}else Gn=1<<l|t<<i|r,Un=e}function ka(e){e.return!==null&&(jt(e,1),jf(e,1,0))}function ba(e){for(;e===jl;)jl=nr[--tr],nr[tr]=null,Cl=nr[--tr],nr[tr]=null;for(;e===Tt;)Tt=$n[--wn],$n[wn]=null,Un=$n[--wn],$n[wn]=null,Gn=$n[--wn],$n[wn]=null}var fn=null,dn=null,ge=!1,En=null;function Cf(e,n){var t=vn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function eu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,fn=e,dn=dt(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,fn=e,dn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Tt!==null?{id:Gn,overflow:Un}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=vn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,fn=e,dn=null,!0):!1;default:return!1}}function Ss(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _s(e){if(ge){var n=dn;if(n){var t=n;if(!eu(e,n)){if(Ss(e))throw Error(M(418));n=dt(t.nextSibling);var r=fn;n&&eu(e,n)?Cf(r,t):(e.flags=e.flags&-4097|2,ge=!1,fn=e)}}else{if(Ss(e))throw Error(M(418));e.flags=e.flags&-4097|2,ge=!1,fn=e}}}function nu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;fn=e}function Hi(e){if(e!==fn)return!1;if(!ge)return nu(e),ge=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!vs(e.type,e.memoizedProps)),n&&(n=dn)){if(Ss(e))throw Nf(),Error(M(418));for(;n;)Cf(e,n),n=dt(n.nextSibling)}if(nu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){dn=dt(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}dn=null}}else dn=fn?dt(e.stateNode.nextSibling):null;return!0}function Nf(){for(var e=dn;e;)e=dt(e.nextSibling)}function $r(){dn=fn=null,ge=!1}function Sa(e){En===null?En=[e]:En.push(e)}var wg=Kn.ReactCurrentBatchConfig;function Br(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(M(309));var r=t.stateNode}if(!r)throw Error(M(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(M(284));if(!t._owner)throw Error(M(290,e))}return e}function Zi(e,n){throw e=Object.prototype.toString.call(n),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function tu(e){var n=e._init;return n(e._payload)}function Ef(e){function n(m,g){if(e){var $=m.deletions;$===null?(m.deletions=[g],m.flags|=16):$.push(g)}}function t(m,g){if(!e)return null;for(;g!==null;)n(m,g),g=g.sibling;return null}function r(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function i(m,g){return m=gt(m,g),m.index=0,m.sibling=null,m}function l(m,g,$){return m.index=$,e?($=m.alternate,$!==null?($=$.index,$<g?(m.flags|=2,g):$):(m.flags|=2,g)):(m.flags|=1048576,g)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,g,$,w){return g===null||g.tag!==6?(g=Go($,m.mode,w),g.return=m,g):(g=i(g,$),g.return=m,g)}function a(m,g,$,w){var x=$.type;return x===qt?f(m,g,$.props.children,w,$.key):g!==null&&(g.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===et&&tu(x)===g.type)?(w=i(g,$.props),w.ref=Br(m,g,$),w.return=m,w):(w=pl($.type,$.key,$.props,null,m.mode,w),w.ref=Br(m,g,$),w.return=m,w)}function u(m,g,$,w){return g===null||g.tag!==4||g.stateNode.containerInfo!==$.containerInfo||g.stateNode.implementation!==$.implementation?(g=Uo($,m.mode,w),g.return=m,g):(g=i(g,$.children||[]),g.return=m,g)}function f(m,g,$,w,x){return g===null||g.tag!==7?(g=Dt($,m.mode,w,x),g.return=m,g):(g=i(g,$),g.return=m,g)}function h(m,g,$){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Go(""+g,m.mode,$),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ai:return $=pl(g.type,g.key,g.props,null,m.mode,$),$.ref=Br(m,null,g),$.return=m,$;case Wt:return g=Uo(g,m.mode,$),g.return=m,g;case et:var w=g._init;return h(m,w(g._payload),$)}if(Hr(g)||zr(g))return g=Dt(g,m.mode,$,null),g.return=m,g;Zi(m,g)}return null}function p(m,g,$,w){var x=g!==null?g.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return x!==null?null:s(m,g,""+$,w);if(typeof $=="object"&&$!==null){switch($.$$typeof){case Ai:return $.key===x?a(m,g,$,w):null;case Wt:return $.key===x?u(m,g,$,w):null;case et:return x=$._init,p(m,g,x($._payload),w)}if(Hr($)||zr($))return x!==null?null:f(m,g,$,w,null);Zi(m,$)}return null}function y(m,g,$,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get($)||null,s(g,m,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ai:return m=m.get(w.key===null?$:w.key)||null,a(g,m,w,x);case Wt:return m=m.get(w.key===null?$:w.key)||null,u(g,m,w,x);case et:var N=w._init;return y(m,g,$,N(w._payload),x)}if(Hr(w)||zr(w))return m=m.get($)||null,f(g,m,w,x,null);Zi(g,w)}return null}function k(m,g,$,w){for(var x=null,N=null,E=g,_=g=0,D=null;E!==null&&_<$.length;_++){E.index>_?(D=E,E=null):D=E.sibling;var C=p(m,E,$[_],w);if(C===null){E===null&&(E=D);break}e&&E&&C.alternate===null&&n(m,E),g=l(C,g,_),N===null?x=C:N.sibling=C,N=C,E=D}if(_===$.length)return t(m,E),ge&&jt(m,_),x;if(E===null){for(;_<$.length;_++)E=h(m,$[_],w),E!==null&&(g=l(E,g,_),N===null?x=E:N.sibling=E,N=E);return ge&&jt(m,_),x}for(E=r(m,E);_<$.length;_++)D=y(E,m,_,$[_],w),D!==null&&(e&&D.alternate!==null&&E.delete(D.key===null?_:D.key),g=l(D,g,_),N===null?x=D:N.sibling=D,N=D);return e&&E.forEach(function(z){return n(m,z)}),ge&&jt(m,_),x}function b(m,g,$,w){var x=zr($);if(typeof x!="function")throw Error(M(150));if($=x.call($),$==null)throw Error(M(151));for(var N=x=null,E=g,_=g=0,D=null,C=$.next();E!==null&&!C.done;_++,C=$.next()){E.index>_?(D=E,E=null):D=E.sibling;var z=p(m,E,C.value,w);if(z===null){E===null&&(E=D);break}e&&E&&z.alternate===null&&n(m,E),g=l(z,g,_),N===null?x=z:N.sibling=z,N=z,E=D}if(C.done)return t(m,E),ge&&jt(m,_),x;if(E===null){for(;!C.done;_++,C=$.next())C=h(m,C.value,w),C!==null&&(g=l(C,g,_),N===null?x=C:N.sibling=C,N=C);return ge&&jt(m,_),x}for(E=r(m,E);!C.done;_++,C=$.next())C=y(E,m,_,C.value,w),C!==null&&(e&&C.alternate!==null&&E.delete(C.key===null?_:C.key),g=l(C,g,_),N===null?x=C:N.sibling=C,N=C);return e&&E.forEach(function(F){return n(m,F)}),ge&&jt(m,_),x}function R(m,g,$,w){if(typeof $=="object"&&$!==null&&$.type===qt&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case Ai:e:{for(var x=$.key,N=g;N!==null;){if(N.key===x){if(x=$.type,x===qt){if(N.tag===7){t(m,N.sibling),g=i(N,$.props.children),g.return=m,m=g;break e}}else if(N.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===et&&tu(x)===N.type){t(m,N.sibling),g=i(N,$.props),g.ref=Br(m,N,$),g.return=m,m=g;break e}t(m,N);break}else n(m,N);N=N.sibling}$.type===qt?(g=Dt($.props.children,m.mode,w,$.key),g.return=m,m=g):(w=pl($.type,$.key,$.props,null,m.mode,w),w.ref=Br(m,g,$),w.return=m,m=w)}return o(m);case Wt:e:{for(N=$.key;g!==null;){if(g.key===N)if(g.tag===4&&g.stateNode.containerInfo===$.containerInfo&&g.stateNode.implementation===$.implementation){t(m,g.sibling),g=i(g,$.children||[]),g.return=m,m=g;break e}else{t(m,g);break}else n(m,g);g=g.sibling}g=Uo($,m.mode,w),g.return=m,m=g}return o(m);case et:return N=$._init,R(m,g,N($._payload),w)}if(Hr($))return k(m,g,$,w);if(zr($))return b(m,g,$,w);Zi(m,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,g!==null&&g.tag===6?(t(m,g.sibling),g=i(g,$),g.return=m,m=g):(t(m,g),g=Go($,m.mode,w),g.return=m,m=g),o(m)):t(m,g)}return R}var wr=Ef(!0),Mf=Ef(!1),Nl=kt(null),El=null,rr=null,_a=null;function ja(){_a=rr=El=null}function Ca(e){var n=Nl.current;pe(Nl),e._currentValue=n}function js(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function dr(e,n){El=e,_a=rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(rn=!0),e.firstContext=null)}function kn(e){var n=e._currentValue;if(_a!==e)if(e={context:e,memoizedValue:n,next:null},rr===null){if(El===null)throw Error(M(308));rr=e,El.dependencies={lanes:0,firstContext:e}}else rr=rr.next=e;return n}var Mt=null;function Na(e){Mt===null?Mt=[e]:Mt.push(e)}function Lf(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Na(n)):(t.next=i.next,i.next=t),n.interleaved=t,Wn(e,r)}function Wn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var nt=!1;function Ea(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function If(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function ft(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Wn(e,t)}return i=r.interleaved,i===null?(n.next=n,Na(r)):(n.next=i.next,i.next=n),r.interleaved=n,Wn(e,t)}function al(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,pa(e,t)}}function ru(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ml(e,n,t,r){var i=e.updateQueue;nt=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,u=a.next;a.next=null,o===null?l=u:o.next=u,o=a;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==o&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=a))}if(l!==null){var h=i.baseState;o=0,f=u=a=null,s=l;do{var p=s.lane,y=s.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,b=s;switch(p=n,y=t,b.tag){case 1:if(k=b.payload,typeof k=="function"){h=k.call(y,h,p);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=b.payload,p=typeof k=="function"?k.call(y,h,p):k,p==null)break e;h=xe({},h,p);break e;case 2:nt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else y={eventTime:y,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=y,a=h):f=f.next=y,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(f===null&&(a=h),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=f,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);Bt|=o,e.lanes=o,e.memoizedState=h}}function iu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Mi={},Bn=kt(Mi),wi=kt(Mi),vi=kt(Mi);function Lt(e){if(e===Mi)throw Error(M(174));return e}function Ma(e,n){switch(de(vi,n),de(wi,e),de(Bn,Mi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:os(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=os(n,e)}pe(Bn),de(Bn,n)}function vr(){pe(Bn),pe(wi),pe(vi)}function zf(e){Lt(vi.current);var n=Lt(Bn.current),t=os(n,e.type);n!==t&&(de(wi,e),de(Bn,t))}function La(e){wi.current===e&&(pe(Bn),pe(wi))}var we=kt(0);function Ll(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var To=[];function Ia(){for(var e=0;e<To.length;e++)To[e]._workInProgressVersionPrimary=null;To.length=0}var cl=Kn.ReactCurrentDispatcher,Po=Kn.ReactCurrentBatchConfig,Pt=0,ve=null,Ne=null,Ie=null,Il=!1,ri=!1,xi=0,vg=0;function Ue(){throw Error(M(321))}function za(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!In(e[t],n[t]))return!1;return!0}function Da(e,n,t,r,i,l){if(Pt=l,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,cl.current=e===null||e.memoizedState===null?Sg:_g,e=t(r,i),ri){l=0;do{if(ri=!1,xi=0,25<=l)throw Error(M(301));l+=1,Ie=Ne=null,n.updateQueue=null,cl.current=jg,e=t(r,i)}while(ri)}if(cl.current=zl,n=Ne!==null&&Ne.next!==null,Pt=0,Ie=Ne=ve=null,Il=!1,n)throw Error(M(300));return e}function Aa(){var e=xi!==0;return xi=0,e}function An(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?ve.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function bn(){if(Ne===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=Ie===null?ve.memoizedState:Ie.next;if(n!==null)Ie=n,Ne=e;else{if(e===null)throw Error(M(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ie===null?ve.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function ki(e,n){return typeof n=="function"?n(e):n}function Bo(e){var n=bn(),t=n.queue;if(t===null)throw Error(M(311));t.lastRenderedReducer=e;var r=Ne,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,a=null,u=l;do{var f=u.lane;if((Pt&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=h,o=r):a=a.next=h,ve.lanes|=f,Bt|=f}u=u.next}while(u!==null&&u!==l);a===null?o=r:a.next=s,In(r,n.memoizedState)||(rn=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,ve.lanes|=l,Bt|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ro(e){var n=bn(),t=n.queue;if(t===null)throw Error(M(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);In(l,n.memoizedState)||(rn=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Df(){}function Af(e,n){var t=ve,r=bn(),i=n(),l=!In(r.memoizedState,i);if(l&&(r.memoizedState=i,rn=!0),r=r.queue,Ta(Bf.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||Ie!==null&&Ie.memoizedState.tag&1){if(t.flags|=2048,bi(9,Pf.bind(null,t,r,i,n),void 0,null),ze===null)throw Error(M(349));Pt&30||Tf(t,n,i)}return i}function Tf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Pf(e,n,t,r){n.value=t,n.getSnapshot=r,Rf(n)&&Ff(e)}function Bf(e,n,t){return t(function(){Rf(n)&&Ff(e)})}function Rf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!In(e,t)}catch{return!0}}function Ff(e){var n=Wn(e,1);n!==null&&Ln(n,e,1,-1)}function lu(e){var n=An();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},n.queue=e,e=e.dispatch=bg.bind(null,ve,e),[n.memoizedState,e]}function bi(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Of(){return bn().memoizedState}function ul(e,n,t,r){var i=An();ve.flags|=e,i.memoizedState=bi(1|n,t,void 0,r===void 0?null:r)}function Yl(e,n,t,r){var i=bn();r=r===void 0?null:r;var l=void 0;if(Ne!==null){var o=Ne.memoizedState;if(l=o.destroy,r!==null&&za(r,o.deps)){i.memoizedState=bi(n,t,l,r);return}}ve.flags|=e,i.memoizedState=bi(1|n,t,l,r)}function ou(e,n){return ul(8390656,8,e,n)}function Ta(e,n){return Yl(2048,8,e,n)}function Gf(e,n){return Yl(4,2,e,n)}function Uf(e,n){return Yl(4,4,e,n)}function Vf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Hf(e,n,t){return t=t!=null?t.concat([e]):null,Yl(4,4,Vf.bind(null,n,e),t)}function Pa(){}function Zf(e,n){var t=bn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&za(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Qf(e,n){var t=bn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&za(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Wf(e,n,t){return Pt&21?(In(t,n)||(t=Xd(),ve.lanes|=t,Bt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,rn=!0),e.memoizedState=t)}function xg(e,n){var t=ae;ae=t!==0&&4>t?t:4,e(!0);var r=Po.transition;Po.transition={};try{e(!1),n()}finally{ae=t,Po.transition=r}}function qf(){return bn().memoizedState}function kg(e,n,t){var r=pt(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Kf(e))Yf(n,t);else if(t=Lf(e,n,t,r),t!==null){var i=Ke();Ln(t,e,r,i),Xf(t,n,r)}}function bg(e,n,t){var r=pt(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Kf(e))Yf(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,s=l(o,t);if(i.hasEagerState=!0,i.eagerState=s,In(s,o)){var a=n.interleaved;a===null?(i.next=i,Na(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=Lf(e,n,i,r),t!==null&&(i=Ke(),Ln(t,e,r,i),Xf(t,n,r))}}function Kf(e){var n=e.alternate;return e===ve||n!==null&&n===ve}function Yf(e,n){ri=Il=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Xf(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,pa(e,t)}}var zl={readContext:kn,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},Sg={readContext:kn,useCallback:function(e,n){return An().memoizedState=[e,n===void 0?null:n],e},useContext:kn,useEffect:ou,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ul(4194308,4,Vf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ul(4194308,4,e,n)},useInsertionEffect:function(e,n){return ul(4,2,e,n)},useMemo:function(e,n){var t=An();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=An();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=kg.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var n=An();return e={current:e},n.memoizedState=e},useState:lu,useDebugValue:Pa,useDeferredValue:function(e){return An().memoizedState=e},useTransition:function(){var e=lu(!1),n=e[0];return e=xg.bind(null,e[1]),An().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ve,i=An();if(ge){if(t===void 0)throw Error(M(407));t=t()}else{if(t=n(),ze===null)throw Error(M(349));Pt&30||Tf(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,ou(Bf.bind(null,r,l,e),[e]),r.flags|=2048,bi(9,Pf.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=An(),n=ze.identifierPrefix;if(ge){var t=Un,r=Gn;t=(r&~(1<<32-Mn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=xi++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=vg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},_g={readContext:kn,useCallback:Zf,useContext:kn,useEffect:Ta,useImperativeHandle:Hf,useInsertionEffect:Gf,useLayoutEffect:Uf,useMemo:Qf,useReducer:Bo,useRef:Of,useState:function(){return Bo(ki)},useDebugValue:Pa,useDeferredValue:function(e){var n=bn();return Wf(n,Ne.memoizedState,e)},useTransition:function(){var e=Bo(ki)[0],n=bn().memoizedState;return[e,n]},useMutableSource:Df,useSyncExternalStore:Af,useId:qf,unstable_isNewReconciler:!1},jg={readContext:kn,useCallback:Zf,useContext:kn,useEffect:Ta,useImperativeHandle:Hf,useInsertionEffect:Gf,useLayoutEffect:Uf,useMemo:Qf,useReducer:Ro,useRef:Of,useState:function(){return Ro(ki)},useDebugValue:Pa,useDeferredValue:function(e){var n=bn();return Ne===null?n.memoizedState=e:Wf(n,Ne.memoizedState,e)},useTransition:function(){var e=Ro(ki)[0],n=bn().memoizedState;return[e,n]},useMutableSource:Df,useSyncExternalStore:Af,useId:qf,unstable_isNewReconciler:!1};function Cn(e,n){if(e&&e.defaultProps){n=xe({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Cs(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:xe({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Xl={isMounted:function(e){return(e=e._reactInternals)?Ot(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ke(),i=pt(e),l=Vn(r,i);l.payload=n,t!=null&&(l.callback=t),n=ft(e,l,i),n!==null&&(Ln(n,e,i,r),al(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ke(),i=pt(e),l=Vn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=ft(e,l,i),n!==null&&(Ln(n,e,i,r),al(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ke(),r=pt(e),i=Vn(t,r);i.tag=2,n!=null&&(i.callback=n),n=ft(e,i,r),n!==null&&(Ln(n,e,r,t),al(n,e,r))}};function su(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!gi(t,r)||!gi(i,l):!0}function Jf(e,n,t){var r=!1,i=$t,l=n.contextType;return typeof l=="object"&&l!==null?l=kn(l):(i=on(n)?At:Ze.current,r=n.contextTypes,l=(r=r!=null)?yr(e,i):$t),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Xl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function au(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Xl.enqueueReplaceState(n,n.state,null)}function Ns(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Ea(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=kn(l):(l=on(n)?At:Ze.current,i.context=yr(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Cs(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Xl.enqueueReplaceState(i,i.state,null),Ml(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function xr(e,n){try{var t="",r=n;do t+=ep(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function Fo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Es(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Cg=typeof WeakMap=="function"?WeakMap:Map;function eh(e,n,t){t=Vn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Al||(Al=!0,Rs=r),Es(e,n)},t}function nh(e,n,t){t=Vn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Es(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Es(e,n),typeof r!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function cu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Cg;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Og.bind(null,e,n,t),n.then(e,e))}function uu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function du(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Vn(-1,1),n.tag=2,ft(t,n,1))),t.lanes|=1),e)}var Ng=Kn.ReactCurrentOwner,rn=!1;function We(e,n,t,r){n.child=e===null?Mf(n,null,t,r):wr(n,e.child,t,r)}function fu(e,n,t,r,i){t=t.render;var l=n.ref;return dr(n,i),r=Da(e,n,t,r,l,i),t=Aa(),e!==null&&!rn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,qn(e,n,i)):(ge&&t&&ka(n),n.flags|=1,We(e,n,r,i),n.child)}function hu(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!Ha(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,th(e,n,l,r,i)):(e=pl(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:gi,t(o,r)&&e.ref===n.ref)return qn(e,n,i)}return n.flags|=1,e=gt(l,r),e.ref=n.ref,e.return=n,n.child=e}function th(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(gi(l,r)&&e.ref===n.ref)if(rn=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(rn=!0);else return n.lanes=e.lanes,qn(e,n,i)}return Ms(e,n,t,r,i)}function rh(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(lr,un),un|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,de(lr,un),un|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,de(lr,un),un|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,de(lr,un),un|=r;return We(e,n,i,t),n.child}function ih(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ms(e,n,t,r,i){var l=on(t)?At:Ze.current;return l=yr(n,l),dr(n,i),t=Da(e,n,t,r,l,i),r=Aa(),e!==null&&!rn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,qn(e,n,i)):(ge&&r&&ka(n),n.flags|=1,We(e,n,t,i),n.child)}function pu(e,n,t,r,i){if(on(t)){var l=!0;_l(n)}else l=!1;if(dr(n,i),n.stateNode===null)dl(e,n),Jf(n,t,r),Ns(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var a=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=kn(u):(u=on(t)?At:Ze.current,u=yr(n,u));var f=t.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==u)&&au(n,o,r,u),nt=!1;var p=n.memoizedState;o.state=p,Ml(n,r,o,i),a=n.memoizedState,s!==r||p!==a||ln.current||nt?(typeof f=="function"&&(Cs(n,t,f,r),a=n.memoizedState),(s=nt||su(n,t,s,r,p,a,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,If(e,n),s=n.memoizedProps,u=n.type===n.elementType?s:Cn(n.type,s),o.props=u,h=n.pendingProps,p=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=kn(a):(a=on(t)?At:Ze.current,a=yr(n,a));var y=t.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||p!==a)&&au(n,o,r,a),nt=!1,p=n.memoizedState,o.state=p,Ml(n,r,o,i);var k=n.memoizedState;s!==h||p!==k||ln.current||nt?(typeof y=="function"&&(Cs(n,t,y,r),k=n.memoizedState),(u=nt||su(n,t,u,r,p,k,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=k),o.props=r,o.state=k,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return Ls(e,n,t,r,l,i)}function Ls(e,n,t,r,i,l){ih(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Jc(n,t,!1),qn(e,n,l);r=n.stateNode,Ng.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=wr(n,e.child,null,l),n.child=wr(n,null,s,l)):We(e,n,s,l),n.memoizedState=r.state,i&&Jc(n,t,!0),n.child}function lh(e){var n=e.stateNode;n.pendingContext?Xc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Xc(e,n.context,!1),Ma(e,n.containerInfo)}function gu(e,n,t,r,i){return $r(),Sa(i),n.flags|=256,We(e,n,t,r),n.child}var Is={dehydrated:null,treeContext:null,retryLane:0};function zs(e){return{baseLanes:e,cachePool:null,transitions:null}}function oh(e,n,t){var r=n.pendingProps,i=we.current,l=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),de(we,i&1),e===null)return _s(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=no(o,r,0,null),e=Dt(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=zs(t),n.memoizedState=Is,e):Ba(n,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Eg(e,n,o,r,s,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=gt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=gt(s,l):(l=Dt(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?zs(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=Is,r}return l=e.child,e=l.sibling,r=gt(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ba(e,n){return n=no({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Qi(e,n,t,r){return r!==null&&Sa(r),wr(n,e.child,null,t),e=Ba(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Eg(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=Fo(Error(M(422))),Qi(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=no({mode:"visible",children:r.children},i,0,null),l=Dt(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&wr(n,e.child,null,o),n.child.memoizedState=zs(o),n.memoizedState=Is,l);if(!(n.mode&1))return Qi(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(M(419)),r=Fo(l,r,void 0),Qi(e,n,o,r)}if(s=(o&e.childLanes)!==0,rn||s){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Wn(e,i),Ln(r,e,i,-1))}return Va(),r=Fo(Error(M(421))),Qi(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Gg.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,dn=dt(i.nextSibling),fn=n,ge=!0,En=null,e!==null&&($n[wn++]=Gn,$n[wn++]=Un,$n[wn++]=Tt,Gn=e.id,Un=e.overflow,Tt=n),n=Ba(n,r.children),n.flags|=4096,n)}function mu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),js(e.return,n,t)}function Oo(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function sh(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(We(e,n,r.children,t),r=we.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mu(e,t,n);else if(e.tag===19)mu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(we,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Ll(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Oo(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Ll(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Oo(n,!0,t,null,l);break;case"together":Oo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function dl(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function qn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Bt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(M(153));if(n.child!==null){for(e=n.child,t=gt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=gt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Mg(e,n,t){switch(n.tag){case 3:lh(n),$r();break;case 5:zf(n);break;case 1:on(n.type)&&_l(n);break;case 4:Ma(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;de(Nl,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(de(we,we.current&1),n.flags|=128,null):t&n.child.childLanes?oh(e,n,t):(de(we,we.current&1),e=qn(e,n,t),e!==null?e.sibling:null);de(we,we.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return sh(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(we,we.current),r)break;return null;case 22:case 23:return n.lanes=0,rh(e,n,t)}return qn(e,n,t)}var ah,Ds,ch,uh;ah=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ds=function(){};ch=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Lt(Bn.current);var l=null;switch(t){case"input":i=ts(e,i),r=ts(e,r),l=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),l=[];break;case"textarea":i=ls(e,i),r=ls(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=bl)}ss(t,r);var o;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ai.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var a=r[u];if(s=i?.[u],r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(l||(l=[]),l.push(u,t)),t=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ai.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&fe("scroll",e),l||s===a||(l=[])):(l=l||[]).push(u,a))}t&&(l=l||[]).push("style",t);var u=l;(n.updateQueue=u)&&(n.flags|=4)}};uh=function(e,n,t,r){t!==r&&(n.flags|=4)};function Rr(e,n){if(!ge)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ve(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Lg(e,n,t){var r=n.pendingProps;switch(ba(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return on(n.type)&&Sl(),Ve(n),null;case 3:return r=n.stateNode,vr(),pe(ln),pe(Ze),Ia(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Hi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,En!==null&&(Gs(En),En=null))),Ds(e,n),Ve(n),null;case 5:La(n);var i=Lt(vi.current);if(t=n.type,e!==null&&n.stateNode!=null)ch(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(M(166));return Ve(n),null}if(e=Lt(Bn.current),Hi(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Tn]=n,r[$i]=l,e=(n.mode&1)!==0,t){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<Qr.length;i++)fe(Qr[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":_c(r,l),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},fe("invalid",r);break;case"textarea":Cc(r,l),fe("invalid",r)}ss(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Vi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Vi(r.textContent,s,e),i=["children",""+s]):ai.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&fe("scroll",r)}switch(t){case"input":Ti(r),jc(r,l,!0);break;case"textarea":Ti(r),Nc(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=bl)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pd(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Tn]=n,e[$i]=r,ah(e,n,!1,!1),n.stateNode=e;e:{switch(o=as(t,r),t){case"dialog":fe("cancel",e),fe("close",e),i=r;break;case"iframe":case"object":case"embed":fe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Qr.length;i++)fe(Qr[i],e);i=r;break;case"source":fe("error",e),i=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),i=r;break;case"details":fe("toggle",e),i=r;break;case"input":_c(e,r),i=ts(e,r),fe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),fe("invalid",e);break;case"textarea":Cc(e,r),i=ls(e,r),fe("invalid",e);break;default:i=r}ss(t,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?Fd(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Bd(e,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&ci(e,a):typeof a=="number"&&ci(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ai.hasOwnProperty(l)?a!=null&&l==="onScroll"&&fe("scroll",e):a!=null&&aa(e,l,a,o))}switch(t){case"input":Ti(e),jc(e,r,!1);break;case"textarea":Ti(e),Nc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?sr(e,!!r.multiple,l,!1):r.defaultValue!=null&&sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=bl)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ve(n),null;case 6:if(e&&n.stateNode!=null)uh(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(M(166));if(t=Lt(vi.current),Lt(Bn.current),Hi(n)){if(r=n.stateNode,t=n.memoizedProps,r[Tn]=n,(l=r.nodeValue!==t)&&(e=fn,e!==null))switch(e.tag){case 3:Vi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vi(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Tn]=n,n.stateNode=r}return Ve(n),null;case 13:if(pe(we),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&dn!==null&&n.mode&1&&!(n.flags&128))Nf(),$r(),n.flags|=98560,l=!1;else if(l=Hi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(M(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(M(317));l[Tn]=n}else $r(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ve(n),l=!1}else En!==null&&(Gs(En),En=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||we.current&1?Ee===0&&(Ee=3):Va())),n.updateQueue!==null&&(n.flags|=4),Ve(n),null);case 4:return vr(),Ds(e,n),e===null&&mi(n.stateNode.containerInfo),Ve(n),null;case 10:return Ca(n.type._context),Ve(n),null;case 17:return on(n.type)&&Sl(),Ve(n),null;case 19:if(pe(we),l=n.memoizedState,l===null)return Ve(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)Rr(l,!1);else{if(Ee!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Ll(e),o!==null){for(n.flags|=128,Rr(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return de(we,we.current&1|2),n.child}e=e.sibling}l.tail!==null&&Se()>kr&&(n.flags|=128,r=!0,Rr(l,!1),n.lanes=4194304)}else{if(!r)if(e=Ll(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Rr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!ge)return Ve(n),null}else 2*Se()-l.renderingStartTime>kr&&t!==1073741824&&(n.flags|=128,r=!0,Rr(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Se(),n.sibling=null,t=we.current,de(we,r?t&1|2:t&1),n):(Ve(n),null);case 22:case 23:return Ua(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?un&1073741824&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),null;case 24:return null;case 25:return null}throw Error(M(156,n.tag))}function Ig(e,n){switch(ba(n),n.tag){case 1:return on(n.type)&&Sl(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return vr(),pe(ln),pe(Ze),Ia(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return La(n),null;case 13:if(pe(we),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(M(340));$r()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return pe(we),null;case 4:return vr(),null;case 10:return Ca(n.type._context),null;case 22:case 23:return Ua(),null;case 24:return null;default:return null}}var Wi=!1,He=!1,zg=typeof WeakSet=="function"?WeakSet:Set,T=null;function ir(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ke(e,n,r)}else t.current=null}function As(e,n,t){try{t()}catch(r){ke(e,n,r)}}var yu=!1;function Dg(e,n){if($s=vl,e=gf(),xa(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,s=-1,a=-1,u=0,f=0,h=e,p=null;n:for(;;){for(var y;h!==t||i!==0&&h.nodeType!==3||(s=o+i),h!==l||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)p=h,h=y;for(;;){if(h===e)break n;if(p===t&&++u===i&&(s=o),p===l&&++f===r&&(a=o),(y=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=y}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(ws={focusedElem:e,selectionRange:t},vl=!1,T=n;T!==null;)if(n=T,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,T=e;else for(;T!==null;){n=T;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var b=k.memoizedProps,R=k.memoizedState,m=n.stateNode,g=m.getSnapshotBeforeUpdate(n.elementType===n.type?b:Cn(n.type,b),R);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var $=n.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(w){ke(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,T=e;break}T=n.return}return k=yu,yu=!1,k}function ii(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&As(n,t,l)}i=i.next}while(i!==r)}}function Jl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ts(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function dh(e){var n=e.alternate;n!==null&&(e.alternate=null,dh(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Tn],delete n[$i],delete n[ks],delete n[mg],delete n[yg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fh(e){return e.tag===5||e.tag===3||e.tag===4}function $u(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ps(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=bl));else if(r!==4&&(e=e.child,e!==null))for(Ps(e,n,t),e=e.sibling;e!==null;)Ps(e,n,t),e=e.sibling}function Bs(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bs(e,n,t),e=e.sibling;e!==null;)Bs(e,n,t),e=e.sibling}var Te=null,Nn=!1;function Yn(e,n,t){for(t=t.child;t!==null;)hh(e,n,t),t=t.sibling}function hh(e,n,t){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(Hl,t)}catch{}switch(t.tag){case 5:He||ir(t,n);case 6:var r=Te,i=Nn;Te=null,Yn(e,n,t),Te=r,Nn=i,Te!==null&&(Nn?(e=Te,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Te.removeChild(t.stateNode));break;case 18:Te!==null&&(Nn?(e=Te,t=t.stateNode,e.nodeType===8?Do(e.parentNode,t):e.nodeType===1&&Do(e,t),hi(e)):Do(Te,t.stateNode));break;case 4:r=Te,i=Nn,Te=t.stateNode.containerInfo,Nn=!0,Yn(e,n,t),Te=r,Nn=i;break;case 0:case 11:case 14:case 15:if(!He&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&As(t,n,o),i=i.next}while(i!==r)}Yn(e,n,t);break;case 1:if(!He&&(ir(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){ke(t,n,s)}Yn(e,n,t);break;case 21:Yn(e,n,t);break;case 22:t.mode&1?(He=(r=He)||t.memoizedState!==null,Yn(e,n,t),He=r):Yn(e,n,t);break;default:Yn(e,n,t)}}function wu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new zg),n.forEach(function(r){var i=Ug.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function jn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:Te=s.stateNode,Nn=!1;break e;case 3:Te=s.stateNode.containerInfo,Nn=!0;break e;case 4:Te=s.stateNode.containerInfo,Nn=!0;break e}s=s.return}if(Te===null)throw Error(M(160));hh(l,o,i),Te=null,Nn=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ke(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ph(n,e),n=n.sibling}function ph(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jn(n,e),zn(e),r&4){try{ii(3,e,e.return),Jl(3,e)}catch(b){ke(e,e.return,b)}try{ii(5,e,e.return)}catch(b){ke(e,e.return,b)}}break;case 1:jn(n,e),zn(e),r&512&&t!==null&&ir(t,t.return);break;case 5:if(jn(n,e),zn(e),r&512&&t!==null&&ir(t,t.return),e.flags&32){var i=e.stateNode;try{ci(i,"")}catch(b){ke(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Ad(i,l),as(s,o);var u=as(s,l);for(o=0;o<a.length;o+=2){var f=a[o],h=a[o+1];f==="style"?Fd(i,h):f==="dangerouslySetInnerHTML"?Bd(i,h):f==="children"?ci(i,h):aa(i,f,h,u)}switch(s){case"input":rs(i,l);break;case"textarea":Td(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?sr(i,!!l.multiple,y,!1):p!==!!l.multiple&&(l.defaultValue!=null?sr(i,!!l.multiple,l.defaultValue,!0):sr(i,!!l.multiple,l.multiple?[]:"",!1))}i[$i]=l}catch(b){ke(e,e.return,b)}}break;case 6:if(jn(n,e),zn(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(b){ke(e,e.return,b)}}break;case 3:if(jn(n,e),zn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{hi(n.containerInfo)}catch(b){ke(e,e.return,b)}break;case 4:jn(n,e),zn(e);break;case 13:jn(n,e),zn(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Oa=Se())),r&4&&wu(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(He=(u=He)||f,jn(n,e),He=u):jn(n,e),zn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(T=e,f=e.child;f!==null;){for(h=T=f;T!==null;){switch(p=T,y=p.child,p.tag){case 0:case 11:case 14:case 15:ii(4,p,p.return);break;case 1:ir(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(b){ke(r,t,b)}}break;case 5:ir(p,p.return);break;case 22:if(p.memoizedState!==null){xu(h);continue}}y!==null?(y.return=p,T=y):xu(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,u?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Rd("display",o))}catch(b){ke(e,e.return,b)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(b){ke(e,e.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:jn(n,e),zn(e),r&4&&wu(e);break;case 21:break;default:jn(n,e),zn(e)}}function zn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(fh(t)){var r=t;break e}t=t.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ci(i,""),r.flags&=-33);var l=$u(e);Bs(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=$u(e);Ps(e,s,o);break;default:throw Error(M(161))}}catch(a){ke(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ag(e,n,t){T=e,gh(e)}function gh(e,n,t){for(var r=(e.mode&1)!==0;T!==null;){var i=T,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Wi;if(!o){var s=i.alternate,a=s!==null&&s.memoizedState!==null||He;s=Wi;var u=He;if(Wi=o,(He=a)&&!u)for(T=i;T!==null;)o=T,a=o.child,o.tag===22&&o.memoizedState!==null?ku(i):a!==null?(a.return=o,T=a):ku(i);for(;l!==null;)T=l,gh(l),l=l.sibling;T=i,Wi=s,He=u}vu(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,T=l):vu(e)}}function vu(e){for(;T!==null;){var n=T;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:He||Jl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!He)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Cn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&iu(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}iu(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&hi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}He||n.flags&512&&Ts(n)}catch(p){ke(n,n.return,p)}}if(n===e){T=null;break}if(t=n.sibling,t!==null){t.return=n.return,T=t;break}T=n.return}}function xu(e){for(;T!==null;){var n=T;if(n===e){T=null;break}var t=n.sibling;if(t!==null){t.return=n.return,T=t;break}T=n.return}}function ku(e){for(;T!==null;){var n=T;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Jl(4,n)}catch(a){ke(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){ke(n,i,a)}}var l=n.return;try{Ts(n)}catch(a){ke(n,l,a)}break;case 5:var o=n.return;try{Ts(n)}catch(a){ke(n,o,a)}}}catch(a){ke(n,n.return,a)}if(n===e){T=null;break}var s=n.sibling;if(s!==null){s.return=n.return,T=s;break}T=n.return}}var Tg=Math.ceil,Dl=Kn.ReactCurrentDispatcher,Ra=Kn.ReactCurrentOwner,xn=Kn.ReactCurrentBatchConfig,le=0,ze=null,je=null,Re=0,un=0,lr=kt(0),Ee=0,Si=null,Bt=0,eo=0,Fa=0,li=null,en=null,Oa=0,kr=1/0,Fn=null,Al=!1,Rs=null,ht=null,qi=!1,ot=null,Tl=0,oi=0,Fs=null,fl=-1,hl=0;function Ke(){return le&6?Se():fl!==-1?fl:fl=Se()}function pt(e){return e.mode&1?le&2&&Re!==0?Re&-Re:wg.transition!==null?(hl===0&&(hl=Xd()),hl):(e=ae,e!==0||(e=window.event,e=e===void 0?16:of(e.type)),e):1}function Ln(e,n,t,r){if(50<oi)throw oi=0,Fs=null,Error(M(185));Ci(e,t,r),(!(le&2)||e!==ze)&&(e===ze&&(!(le&2)&&(eo|=t),Ee===4&&it(e,Re)),sn(e,r),t===1&&le===0&&!(n.mode&1)&&(kr=Se()+500,Kl&&bt()))}function sn(e,n){var t=e.callbackNode;wp(e,n);var r=wl(e,e===ze?Re:0);if(r===0)t!==null&&Lc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Lc(t),n===1)e.tag===0?$g(bu.bind(null,e)):_f(bu.bind(null,e)),pg(function(){!(le&6)&&bt()}),t=null;else{switch(Jd(r)){case 1:t=ha;break;case 4:t=Kd;break;case 16:t=$l;break;case 536870912:t=Yd;break;default:t=$l}t=bh(t,mh.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function mh(e,n){if(fl=-1,hl=0,le&6)throw Error(M(327));var t=e.callbackNode;if(fr()&&e.callbackNode!==t)return null;var r=wl(e,e===ze?Re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Pl(e,r);else{n=r;var i=le;le|=2;var l=$h();(ze!==e||Re!==n)&&(Fn=null,kr=Se()+500,zt(e,n));do try{Rg();break}catch(s){yh(e,s)}while(!0);ja(),Dl.current=l,le=i,je!==null?n=0:(ze=null,Re=0,n=Ee)}if(n!==0){if(n===2&&(i=hs(e),i!==0&&(r=i,n=Os(e,i))),n===1)throw t=Si,zt(e,0),it(e,r),sn(e,Se()),t;if(n===6)it(e,r);else{if(i=e.current.alternate,!(r&30)&&!Pg(i)&&(n=Pl(e,r),n===2&&(l=hs(e),l!==0&&(r=l,n=Os(e,l))),n===1))throw t=Si,zt(e,0),it(e,r),sn(e,Se()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(M(345));case 2:Ct(e,en,Fn);break;case 3:if(it(e,r),(r&130023424)===r&&(n=Oa+500-Se(),10<n)){if(wl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xs(Ct.bind(null,e,en,Fn),n);break}Ct(e,en,Fn);break;case 4:if(it(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-Mn(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tg(r/1960))-r,10<r){e.timeoutHandle=xs(Ct.bind(null,e,en,Fn),r);break}Ct(e,en,Fn);break;case 5:Ct(e,en,Fn);break;default:throw Error(M(329))}}}return sn(e,Se()),e.callbackNode===t?mh.bind(null,e):null}function Os(e,n){var t=li;return e.current.memoizedState.isDehydrated&&(zt(e,n).flags|=256),e=Pl(e,n),e!==2&&(n=en,en=t,n!==null&&Gs(n)),e}function Gs(e){en===null?en=e:en.push.apply(en,e)}function Pg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!In(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function it(e,n){for(n&=~Fa,n&=~eo,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Mn(n),r=1<<t;e[t]=-1,n&=~r}}function bu(e){if(le&6)throw Error(M(327));fr();var n=wl(e,0);if(!(n&1))return sn(e,Se()),null;var t=Pl(e,n);if(e.tag!==0&&t===2){var r=hs(e);r!==0&&(n=r,t=Os(e,r))}if(t===1)throw t=Si,zt(e,0),it(e,n),sn(e,Se()),t;if(t===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Ct(e,en,Fn),sn(e,Se()),null}function Ga(e,n){var t=le;le|=1;try{return e(n)}finally{le=t,le===0&&(kr=Se()+500,Kl&&bt())}}function Rt(e){ot!==null&&ot.tag===0&&!(le&6)&&fr();var n=le;le|=1;var t=xn.transition,r=ae;try{if(xn.transition=null,ae=1,e)return e()}finally{ae=r,xn.transition=t,le=n,!(le&6)&&bt()}}function Ua(){un=lr.current,pe(lr)}function zt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,hg(t)),je!==null)for(t=je.return;t!==null;){var r=t;switch(ba(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Sl();break;case 3:vr(),pe(ln),pe(Ze),Ia();break;case 5:La(r);break;case 4:vr();break;case 13:pe(we);break;case 19:pe(we);break;case 10:Ca(r.type._context);break;case 22:case 23:Ua()}t=t.return}if(ze=e,je=e=gt(e.current,null),Re=un=n,Ee=0,Si=null,Fa=eo=Bt=0,en=li=null,Mt!==null){for(n=0;n<Mt.length;n++)if(t=Mt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}Mt=null}return e}function yh(e,n){do{var t=je;try{if(ja(),cl.current=zl,Il){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Il=!1}if(Pt=0,Ie=Ne=ve=null,ri=!1,xi=0,Ra.current=null,t===null||t.return===null){Ee=1,Si=n,je=null;break}e:{var l=e,o=t.return,s=t,a=n;if(n=Re,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=s,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=uu(o);if(y!==null){y.flags&=-257,du(y,o,s,l,n),y.mode&1&&cu(l,u,n),n=y,a=u;var k=n.updateQueue;if(k===null){var b=new Set;b.add(a),n.updateQueue=b}else k.add(a);break e}else{if(!(n&1)){cu(l,u,n),Va();break e}a=Error(M(426))}}else if(ge&&s.mode&1){var R=uu(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),du(R,o,s,l,n),Sa(xr(a,s));break e}}l=a=xr(a,s),Ee!==4&&(Ee=2),li===null?li=[l]:li.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var m=eh(l,a,n);ru(l,m);break e;case 1:s=a;var g=l.type,$=l.stateNode;if(!(l.flags&128)&&(typeof g.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(ht===null||!ht.has($)))){l.flags|=65536,n&=-n,l.lanes|=n;var w=nh(l,s,n);ru(l,w);break e}}l=l.return}while(l!==null)}vh(t)}catch(x){n=x,je===t&&t!==null&&(je=t=t.return);continue}break}while(!0)}function $h(){var e=Dl.current;return Dl.current=zl,e===null?zl:e}function Va(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),ze===null||!(Bt&268435455)&&!(eo&268435455)||it(ze,Re)}function Pl(e,n){var t=le;le|=2;var r=$h();(ze!==e||Re!==n)&&(Fn=null,zt(e,n));do try{Bg();break}catch(i){yh(e,i)}while(!0);if(ja(),le=t,Dl.current=r,je!==null)throw Error(M(261));return ze=null,Re=0,Ee}function Bg(){for(;je!==null;)wh(je)}function Rg(){for(;je!==null&&!up();)wh(je)}function wh(e){var n=kh(e.alternate,e,un);e.memoizedProps=e.pendingProps,n===null?vh(e):je=n,Ra.current=null}function vh(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Ig(t,n),t!==null){t.flags&=32767,je=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,je=null;return}}else if(t=Lg(t,n,un),t!==null){je=t;return}if(n=n.sibling,n!==null){je=n;return}je=n=e}while(n!==null);Ee===0&&(Ee=5)}function Ct(e,n,t){var r=ae,i=xn.transition;try{xn.transition=null,ae=1,Fg(e,n,t,r)}finally{xn.transition=i,ae=r}return null}function Fg(e,n,t,r){do fr();while(ot!==null);if(le&6)throw Error(M(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(vp(e,l),e===ze&&(je=ze=null,Re=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||qi||(qi=!0,bh($l,function(){return fr(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=xn.transition,xn.transition=null;var o=ae;ae=1;var s=le;le|=4,Ra.current=null,Dg(e,t),ph(t,e),og(ws),vl=!!$s,ws=$s=null,e.current=t,Ag(t),dp(),le=s,ae=o,xn.transition=l}else e.current=t;if(qi&&(qi=!1,ot=e,Tl=i),l=e.pendingLanes,l===0&&(ht=null),pp(t.stateNode),sn(e,Se()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Al)throw Al=!1,e=Rs,Rs=null,e;return Tl&1&&e.tag!==0&&fr(),l=e.pendingLanes,l&1?e===Fs?oi++:(oi=0,Fs=e):oi=0,bt(),null}function fr(){if(ot!==null){var e=Jd(Tl),n=xn.transition,t=ae;try{if(xn.transition=null,ae=16>e?16:e,ot===null)var r=!1;else{if(e=ot,ot=null,Tl=0,le&6)throw Error(M(331));var i=le;for(le|=4,T=e.current;T!==null;){var l=T,o=l.child;if(T.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(T=u;T!==null;){var f=T;switch(f.tag){case 0:case 11:case 15:ii(8,f,l)}var h=f.child;if(h!==null)h.return=f,T=h;else for(;T!==null;){f=T;var p=f.sibling,y=f.return;if(dh(f),f===u){T=null;break}if(p!==null){p.return=y,T=p;break}T=y}}}var k=l.alternate;if(k!==null){var b=k.child;if(b!==null){k.child=null;do{var R=b.sibling;b.sibling=null,b=R}while(b!==null)}}T=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,T=o;else e:for(;T!==null;){if(l=T,l.flags&2048)switch(l.tag){case 0:case 11:case 15:ii(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,T=m;break e}T=l.return}}var g=e.current;for(T=g;T!==null;){o=T;var $=o.child;if(o.subtreeFlags&2064&&$!==null)$.return=o,T=$;else e:for(o=g;T!==null;){if(s=T,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Jl(9,s)}}catch(x){ke(s,s.return,x)}if(s===o){T=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,T=w;break e}T=s.return}}if(le=i,bt(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(Hl,e)}catch{}r=!0}return r}finally{ae=t,xn.transition=n}}return!1}function Su(e,n,t){n=xr(t,n),n=eh(e,n,1),e=ft(e,n,1),n=Ke(),e!==null&&(Ci(e,1,n),sn(e,n))}function ke(e,n,t){if(e.tag===3)Su(e,e,t);else for(;n!==null;){if(n.tag===3){Su(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ht===null||!ht.has(r))){e=xr(t,e),e=nh(n,e,1),n=ft(n,e,1),e=Ke(),n!==null&&(Ci(n,1,e),sn(n,e));break}}n=n.return}}function Og(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ke(),e.pingedLanes|=e.suspendedLanes&t,ze===e&&(Re&t)===t&&(Ee===4||Ee===3&&(Re&130023424)===Re&&500>Se()-Oa?zt(e,0):Fa|=t),sn(e,n)}function xh(e,n){n===0&&(e.mode&1?(n=Ri,Ri<<=1,!(Ri&130023424)&&(Ri=4194304)):n=1);var t=Ke();e=Wn(e,n),e!==null&&(Ci(e,n,t),sn(e,t))}function Gg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),xh(e,t)}function Ug(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(n),xh(e,t)}var kh;kh=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ln.current)rn=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return rn=!1,Mg(e,n,t);rn=!!(e.flags&131072)}else rn=!1,ge&&n.flags&1048576&&jf(n,Cl,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;dl(e,n),e=n.pendingProps;var i=yr(n,Ze.current);dr(n,t),i=Da(null,n,r,e,i,t);var l=Aa();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,on(r)?(l=!0,_l(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ea(n),i.updater=Xl,n.stateNode=i,i._reactInternals=n,Ns(n,r,e,t),n=Ls(null,n,r,!0,l,t)):(n.tag=0,ge&&l&&ka(n),We(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(dl(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Hg(r),e=Cn(r,e),i){case 0:n=Ms(null,n,r,e,t);break e;case 1:n=pu(null,n,r,e,t);break e;case 11:n=fu(null,n,r,e,t);break e;case 14:n=hu(null,n,r,Cn(r.type,e),t);break e}throw Error(M(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Cn(r,i),Ms(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Cn(r,i),pu(e,n,r,i,t);case 3:e:{if(lh(n),e===null)throw Error(M(387));r=n.pendingProps,l=n.memoizedState,i=l.element,If(e,n),Ml(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=xr(Error(M(423)),n),n=gu(e,n,r,t,i);break e}else if(r!==i){i=xr(Error(M(424)),n),n=gu(e,n,r,t,i);break e}else for(dn=dt(n.stateNode.containerInfo.firstChild),fn=n,ge=!0,En=null,t=Mf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if($r(),r===i){n=qn(e,n,t);break e}We(e,n,r,t)}n=n.child}return n;case 5:return zf(n),e===null&&_s(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,vs(r,i)?o=null:l!==null&&vs(r,l)&&(n.flags|=32),ih(e,n),We(e,n,o,t),n.child;case 6:return e===null&&_s(n),null;case 13:return oh(e,n,t);case 4:return Ma(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=wr(n,null,r,t):We(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Cn(r,i),fu(e,n,r,i,t);case 7:return We(e,n,n.pendingProps,t),n.child;case 8:return We(e,n,n.pendingProps.children,t),n.child;case 12:return We(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,de(Nl,r._currentValue),r._currentValue=o,l!==null)if(In(l.value,o)){if(l.children===i.children&&!ln.current){n=qn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Vn(-1,t&-t),a.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),js(l.return,t,n),s.lanes|=t;break}a=a.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(M(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),js(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}We(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,dr(n,t),i=kn(i),r=r(i),n.flags|=1,We(e,n,r,t),n.child;case 14:return r=n.type,i=Cn(r,n.pendingProps),i=Cn(r.type,i),hu(e,n,r,i,t);case 15:return th(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:Cn(r,i),dl(e,n),n.tag=1,on(r)?(e=!0,_l(n)):e=!1,dr(n,t),Jf(n,r,i),Ns(n,r,i,t),Ls(null,n,r,!0,e,t);case 19:return sh(e,n,t);case 22:return rh(e,n,t)}throw Error(M(156,n.tag))};function bh(e,n){return qd(e,n)}function Vg(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(e,n,t,r){return new Vg(e,n,t,r)}function Ha(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hg(e){if(typeof e=="function")return Ha(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ua)return 11;if(e===da)return 14}return 2}function gt(e,n){var t=e.alternate;return t===null?(t=vn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function pl(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")Ha(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case qt:return Dt(t.children,i,l,n);case ca:o=8,i|=8;break;case Xo:return e=vn(12,t,n,i|2),e.elementType=Xo,e.lanes=l,e;case Jo:return e=vn(13,t,n,i),e.elementType=Jo,e.lanes=l,e;case es:return e=vn(19,t,n,i),e.elementType=es,e.lanes=l,e;case Id:return no(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Md:o=10;break e;case Ld:o=9;break e;case ua:o=11;break e;case da:o=14;break e;case et:o=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return n=vn(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function Dt(e,n,t,r){return e=vn(7,e,r,n),e.lanes=t,e}function no(e,n,t,r){return e=vn(22,e,r,n),e.elementType=Id,e.lanes=t,e.stateNode={isHidden:!1},e}function Go(e,n,t){return e=vn(6,e,null,n),e.lanes=t,e}function Uo(e,n,t){return n=vn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Zg(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bo(0),this.expirationTimes=bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Za(e,n,t,r,i,l,o,s,a){return e=new Zg(e,n,t,s,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=vn(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ea(l),e}function Qg(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Sh(e){if(!e)return $t;e=e._reactInternals;e:{if(Ot(e)!==e||e.tag!==1)throw Error(M(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(on(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(M(171))}if(e.tag===1){var t=e.type;if(on(t))return Sf(e,t,n)}return n}function _h(e,n,t,r,i,l,o,s,a){return e=Za(t,r,!0,e,i,l,o,s,a),e.context=Sh(null),t=e.current,r=Ke(),i=pt(t),l=Vn(r,i),l.callback=n??null,ft(t,l,i),e.current.lanes=i,Ci(e,i,r),sn(e,r),e}function to(e,n,t,r){var i=n.current,l=Ke(),o=pt(i);return t=Sh(t),n.context===null?n.context=t:n.pendingContext=t,n=Vn(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=ft(i,n,o),e!==null&&(Ln(e,i,o,l),al(e,i,o)),o}function Bl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function _u(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Qa(e,n){_u(e,n),(e=e.alternate)&&_u(e,n)}function Wg(){return null}var jh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wa(e){this._internalRoot=e}ro.prototype.render=Wa.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(M(409));to(e,n,null,null)};ro.prototype.unmount=Wa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Rt(function(){to(null,e,null,null)}),n[Qn]=null}};function ro(e){this._internalRoot=e}ro.prototype.unstable_scheduleHydration=function(e){if(e){var n=tf();e={blockedOn:null,target:e,priority:n};for(var t=0;t<rt.length&&n!==0&&n<rt[t].priority;t++);rt.splice(t,0,e),t===0&&lf(e)}};function qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ju(){}function qg(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var u=Bl(o);l.call(u)}}var o=_h(n,r,e,0,null,!1,!1,"",ju);return e._reactRootContainer=o,e[Qn]=o.current,mi(e.nodeType===8?e.parentNode:e),Rt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=Bl(a);s.call(u)}}var a=Za(e,0,!1,null,null,!1,!1,"",ju);return e._reactRootContainer=a,e[Qn]=a.current,mi(e.nodeType===8?e.parentNode:e),Rt(function(){to(n,a,t,r)}),a}function lo(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var a=Bl(o);s.call(a)}}to(n,o,e,i)}else o=qg(t,n,e,i,r);return Bl(o)}ef=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Zr(n.pendingLanes);t!==0&&(pa(n,t|1),sn(n,Se()),!(le&6)&&(kr=Se()+500,bt()))}break;case 13:Rt(function(){var r=Wn(e,1);if(r!==null){var i=Ke();Ln(r,e,1,i)}}),Qa(e,1)}};ga=function(e){if(e.tag===13){var n=Wn(e,134217728);if(n!==null){var t=Ke();Ln(n,e,134217728,t)}Qa(e,134217728)}};nf=function(e){if(e.tag===13){var n=pt(e),t=Wn(e,n);if(t!==null){var r=Ke();Ln(t,e,n,r)}Qa(e,n)}};tf=function(){return ae};rf=function(e,n){var t=ae;try{return ae=e,n()}finally{ae=t}};us=function(e,n,t){switch(n){case"input":if(rs(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=ql(r);if(!i)throw Error(M(90));Dd(r),rs(r,i)}}}break;case"textarea":Td(e,t);break;case"select":n=t.value,n!=null&&sr(e,!!t.multiple,n,!1)}};Ud=Ga;Vd=Rt;var Kg={usingClientEntryPoint:!1,Events:[Ei,Jt,ql,Od,Gd,Ga]},Fr={findFiberByHostInstance:Et,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yg={bundleType:Fr.bundleType,version:Fr.version,rendererPackageName:Fr.rendererPackageName,rendererConfig:Fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qd(e),e===null?null:e.stateNode},findFiberByHostInstance:Fr.findFiberByHostInstance||Wg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ki.isDisabled&&Ki.supportsFiber)try{Hl=Ki.inject(Yg),Pn=Ki}catch{}}pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kg;pn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qa(n))throw Error(M(200));return Qg(e,n,null,t)};pn.createRoot=function(e,n){if(!qa(e))throw Error(M(299));var t=!1,r="",i=jh;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Za(e,1,!1,null,null,t,!1,r,i),e[Qn]=n.current,mi(e.nodeType===8?e.parentNode:e),new Wa(n)};pn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=Qd(n),e=e===null?null:e.stateNode,e};pn.flushSync=function(e){return Rt(e)};pn.hydrate=function(e,n,t){if(!io(n))throw Error(M(200));return lo(null,e,n,!0,t)};pn.hydrateRoot=function(e,n,t){if(!qa(e))throw Error(M(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=jh;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=_h(n,null,e,1,t??null,i,!1,l,o),e[Qn]=n.current,mi(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new ro(n)};pn.render=function(e,n,t){if(!io(n))throw Error(M(200));return lo(null,e,n,!1,t)};pn.unmountComponentAtNode=function(e){if(!io(e))throw Error(M(40));return e._reactRootContainer?(Rt(function(){lo(null,null,e,!1,function(){e._reactRootContainer=null,e[Qn]=null})}),!0):!1};pn.unstable_batchedUpdates=Ga;pn.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!io(t))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return lo(e,n,t,!1,r)};pn.version="18.3.1-next-f1338f8080-20240426";function Ch(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ch)}catch(e){console.error(e)}}Ch(),jd.exports=pn;var Xg=jd.exports,Nh,Cu=Xg;Nh=Cu.createRoot,Cu.hydrateRoot;const Eh="hasukgo.device.v1",Jg="hasukgo",br="meta",Us="deviceId";function Mh(){try{if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();if(typeof crypto<"u"&&typeof crypto.getRandomValues=="function"){const e=crypto.getRandomValues(new Uint8Array(16));e[6]=e[6]&15|64,e[8]=e[8]&63|128;const n=[...e].map(t=>t.toString(16).padStart(2,"0")).join("");return`${n.slice(0,8)}-${n.slice(8,12)}-${n.slice(12,16)}-${n.slice(16,20)}-${n.slice(20)}`}}catch{}return`fb-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function Lh(e){const n=e.replace(/[^a-f0-9]/gi,"").toUpperCase(),t=n.slice(0,4)||"0000",r=n.slice(4,8)||"0000";return`HSG-${t}-${r}`}function em(){try{return localStorage.getItem(Eh)}catch{return null}}function Ih(e){try{return localStorage.setItem(Eh,e),!0}catch{return!1}}function Ka(){return new Promise(e=>{try{if(typeof indexedDB>"u")return e(null);const n=indexedDB.open(Jg,1);n.onupgradeneeded=()=>{const t=n.result;t.objectStoreNames.contains(br)||t.createObjectStore(br)},n.onsuccess=()=>e(n.result),n.onerror=()=>e(null),setTimeout(()=>e(null),1500)}catch{e(null)}})}function nm(e,n){return new Promise(t=>{try{const i=e.transaction(br,"readonly").objectStore(br).get(n);i.onsuccess=()=>t(i.result??null),i.onerror=()=>t(null)}catch{t(null)}})}function Ya(e,n,t){return new Promise(r=>{try{const i=e.transaction(br,"readwrite");i.objectStore(br).put(t,n),i.oncomplete=()=>r(!0),i.onerror=()=>r(!1),i.onabort=()=>r(!1)}catch{r(!1)}})}function zh(){if(typeof navigator>"u")return"알 수 없음";const e=navigator.userAgent,n=typeof globalThis.Capacitor<"u",t=/Android/i.test(e)?"Android":/iPhone|iPad|iPod/i.test(e)?"iOS":/Windows/i.test(e)?"Windows":/Mac OS X/i.test(e)?"macOS":"기타";if(n)return`${t} 앱`;const r=/KAKAOTALK/i.test(e)?" · 카카오톡 인앱":/Line\//i.test(e)?" · 라인 인앱":/Instagram|FBAN|FBAV/i.test(e)?" · SNS 인앱":"";return`${t} 웹${r}`}let or=null;async function tm(){if(or)return or;const e=em(),n=await Ka(),t=n?await nm(n,Us):null;let r=e??t??null,i=!1;r||(r=Mh(),i=!0);const l=Ih(r);let o=!1;return n&&(o=await Ya(n,Us,r)),or={id:r,shortCode:Lh(r),platform:zh(),fresh:i,ephemeral:!l&&!o},or}async function rm(e){const n=e??Mh();Ih(n);const t=await Ka();return t&&await Ya(t,Us,n),or={id:n,shortCode:Lh(n),platform:zh(),fresh:!0,ephemeral:!1},or}async function im(){let e=!1;try{const r="__hasukgo_probe__";localStorage.setItem(r,"1"),e=localStorage.getItem(r)==="1",localStorage.removeItem(r)}catch{e=!1}const n=await Ka();let t=!1;return n&&(t=await Ya(n,"__probe__","1")),{localStorage:e,indexedDb:t}}const nn=120,tn=180,Xa=[{id:"classic",name:"전통",tint:null,tintAmount:0,ink:"#12100e",red:"#d8402f",gold:"#e8b53c",white:"#f4ece0",paperTop:"#fbf4e6",paperBottom:"#efe2ca"},{id:"moonlit",name:"달밤",tint:"#1b2b4a",tintAmount:.55,ink:"#0a0e18",red:"#e05a6b",gold:"#cfe0ff",white:"#eaf1ff",paperTop:"#dfe8f7",paperBottom:"#c3d2e8"},{id:"hanji",name:"한지",tint:"#d8c9a8",tintAmount:.62,ink:"#4a3a28",red:"#c2584a",gold:"#b89050",white:"#fdf8ec",paperTop:"#fdf8ec",paperBottom:"#f0e4cc"},{id:"gilt",name:"금박",tint:"#2a2010",tintAmount:.5,ink:"#1a1408",red:"#e0483a",gold:"#ffd66b",white:"#fff6da",paperTop:"#3a2e18",paperBottom:"#241c0e"}],Li=Xa[0];function Dh(e){return Xa.find(n=>n.id===e)??Li}let be=Li.ink,_e=Li.white;function si(e,n,t){const r=h=>[parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)],[i,l,o]=r(e),[s,a,u]=r(n),f=(h,p)=>Math.round(h*(1-t)+p*t).toString(16).padStart(2,"0");return`#${f(i,s)}${f(l,a)}${f(o,u)}`}function It(e,n){const t=/^#?([0-9a-f]{6})$/i.exec(e);if(!t)return e;const r=parseInt(t[1],16),i=n>0?255:0,l=Math.abs(n);return`#${[r>>16&255,r>>8&255,r&255].map(o=>Math.round(o+(i-o)*l).toString(16).padStart(2,"0")).join("")}`}let oe="#e02b1d",J="#f2c21c";const Nt="#1766c8",lm="#2a9d4a",Wr="#ef7a20",om={1:"#f3e2b8",2:"#e6b8c8",3:"#f0c2c8",4:"#b9c6d2",5:"#bfd6c2",6:"#e8c4b4",7:"#efd0a8",8:"#b6c8e0",9:"#f0dca4",10:"#f0c49a",11:"#cdc2e0",12:"#b8c2c8",0:"#f2e0b0"};let Ah="";const ne=12,ie=12,$e=96,Be=152;function P(e,n){const r=n?n??be:`url(#ik${Ah})`;return`<path d="${e}" fill="${r}"/><path d="${e}" fill="#ffffff" opacity="0.07" transform="translate(0 -1.6)"/>`}function Nu(e,n,t,r){const i=ie+Be;let l=P(`M${e-n/2} ${i} L${e-n*.1} ${t+6} L${e} ${t} L${e+n*.1} ${t+6} L${e+n/2} ${i} Z`);return r&&(l+=P(`M${e} ${t-12} l${n*.34} ${n*.3} l-${n*.34} ${n*.16} l-${n*.34} -${n*.16} Z`,r)),l}function Le(e,n,t,r,i){let l="";for(let o=0;o<5;o+=1){const s=o/5*Math.PI*2-Math.PI/2,a=e+Math.cos(s)*t*.58,u=n+Math.sin(s)*t*.58;l+=`<circle cx="${a.toFixed(1)}" cy="${u.toFixed(1)}" r="${(t*.5).toFixed(1)}" fill="${r}"/>`,l+=`<path d="M${e.toFixed(1)} ${n.toFixed(1)} L${a.toFixed(1)} ${u.toFixed(1)}" stroke="${It(r,-.3)}" stroke-width="${(t*.1).toFixed(2)}" opacity="0.55"/>`}l+=`<circle cx="${e}" cy="${n}" r="${(t*.3).toFixed(1)}" fill="${It(i,-.2)}"/>`,l+=`<circle cx="${e}" cy="${n}" r="${(t*.21).toFixed(1)}" fill="${i}"/>`;for(let o=0;o<5;o+=1){const s=o/5*Math.PI*2;l+=`<circle cx="${(e+Math.cos(s)*t*.2).toFixed(1)}" cy="${(n+Math.sin(s)*t*.2).toFixed(1)}" r="${(t*.055).toFixed(2)}" fill="${be}" opacity="0.6"/>`}return l}function Dn(e,n,t,r,i){return`<ellipse cx="${e}" cy="${n}" rx="${t}" ry="${r}" fill="${i??be}"/>`}function sm(e){const n=ie+Be;switch(e){case 1:return Nu(38,54,34,J)+Nu(84,46,58,J);case 2:return`
        ${P(`M${ne+4} ${n} C30 118 34 78 30 ${ie+10} L44 ${ie+10} C48 80 44 120 ${ne+20} ${n} Z`)}
        ${P("M38 62 C58 52 80 36 96 26 L102 38 C84 50 62 66 44 76 Z")}
        ${P("M40 100 C58 98 76 104 92 114 L88 124 C72 116 56 110 40 112 Z")}
        ${Le(98,30,15,oe,be)}
        ${Le(60,60,13,oe,be)}
        ${Le(92,118,12,oe,be)}`;case 3:return`
        <rect x="${ne}" y="${ie}" width="${$e}" height="44" fill="${oe}"/>
        ${[0,1,2,3].map(t=>`<rect x="${ne+8+t*23}" y="${ie}" width="11" height="44" fill="${_e}" opacity="0.92"/>`).join("")}
        <rect x="${ne}" y="${ie}" width="${$e}" height="44" fill="none" stroke="${be}" stroke-width="2.4"/>
        <rect x="${ne}" y="${ie+44}" width="${$e}" height="5" fill="${be}"/>
        ${P(`M${ne+16} ${ie+49} l9 0 l0 15 l-9 0 Z`)}
        ${P(`M${ne+$e-25} ${ie+49} l9 0 l0 15 l-9 0 Z`)}
        ${P("M56 146 C54 124 58 106 56 92 L68 92 C70 108 66 126 68 146 Z")}
        ${Le(38,86,15,oe,J)}
        ${Le(84,84,15,oe,J)}
        ${Le(61,112,16,oe,J)}
        ${Le(98,116,12,oe,J)}
        ${Le(26,120,12,oe,J)}`;case 4:return[0,1,2].map(t=>{const r=30+t*26;let i=P(`M${r} ${ie+8} q6 60 -2 ${Be-20} l6 0 q4 -66 -2 -130 Z`);for(let l=0;l<6;l+=1){const o=ie+22+l*19;i+=Dn(r-9,o,7.5,4.5)+Dn(r+11,o+8,7.5,4.5)}return i}).join("");case 5:return`
        ${P("M36 146 Q22 96 34 44 L44 46 Q34 98 46 146 Z")}
        ${P("M60 146 Q58 92 66 40 L76 44 Q68 96 70 146 Z")}
        ${P("M86 146 Q96 98 92 54 L100 58 Q102 102 96 146 Z")}
        ${Le(56,52,14,Nt,J)}
        ${Le(84,86,12,Nt,J)}`;case 6:return`
        ${Dn(34,104,24,16)}
        ${Dn(88,110,22,15)}
        ${Dn(62,128,26,14)}
        ${Le(58,62,26,oe,J)}
        ${Le(92,96,17,oe,J)}`;case 7:{let t=P(`M57 ${n} C55 132 56 124 58 118 L67 118 C69 124 70 132 68 ${n} Z`);for(let r=0;r<5;r+=1){const i=(r-2)/2,l=62+i*36,o=104-Math.abs(i)*6,s=i*34;t+=`<g transform="rotate(${s.toFixed(1)} ${l} ${o})">`;for(let a=0;a<4;a+=1){const u=o-12-a*15;t+=Dn(l-8,u,8.5,4.6,oe)+Dn(l+8,u-6,8.5,4.6,oe)}t+=`<rect x="${(l-1.6).toFixed(1)}" y="${(o-62).toFixed(1)}" width="3.2" height="62" fill="${It(oe,-.45)}"/></g>`}return t}case 8:return P(`M${ne} ${n} C${ne+6} ${n-62} 36 ${n-74} 60 ${n-74} C84 ${n-74} ${ne+$e-6} ${n-62} ${ne+$e} ${n} Z`);case 9:return`
        ${Dn(32,112,24,15)}
        ${Dn(90,118,22,14)}
        ${Dn(62,134,26,12)}
        ${Le(56,60,22,Wr,J)}
        ${Le(92,90,16,Wr,J)}
        ${Le(28,74,14,Wr,J)}`;case 10:return`
        ${P("M60 146 Q58 116 60 96 L68 96 Q70 118 68 146 Z")}
        ${Vo(60,74,30,Wr)}
        ${Vo(28,106,20,oe)}
        ${Vo(94,100,20,oe)}`;case 11:return`
        ${P(`M${ne} ${n} Q20 100 ${ne+6} 76 Q54 78 60 ${n} Z`)}
        ${P(`M${ne+$e} ${n} Q100 100 ${ne+$e-6} 76 Q66 78 60 ${n} Z`)}
        ${P("M60 118 Q44 80 60 44 Q76 80 60 118 Z")}
        ${Le(60,34,16,Nt,J)}
        ${Le(36,46,11,Nt,J)}
        ${Le(86,46,11,Nt,J)}`;default:return`
        <rect x="${ne}" y="${ie}" width="${$e}" height="${Be}" fill="${be}"/>
        ${P(`M${ne+6} ${ie} q14 48 4 ${Be} l10 0 q10 -56 -4 ${-Be} Z`,_e)}
        ${[0,1,2].map(t=>P(`M${ne+14+t*4} ${ie+30+t*16} q-12 32 -${14+t*4} ${58-t*10} l7 3 q10 -30 ${16+t*4} -${58-t*10} Z`,_e)).join("")}`}}function Vo(e,n,t,r){return`<path d="M${e} ${n-t} l${t*.3} ${t*.42} l${t*.62} -${t*.2} l-${t*.22} ${t*.52} l${t*.52} ${t*.1} l-${t*.46} ${t*.4} l${t*.2} ${t*.44} l-${t*.68} -${t*.16} l-${t*.18} ${t*.5} l-${t*.18} -${t*.5} l-${t*.68} ${t*.16} l${t*.2} -${t*.44} l-${t*.46} -${t*.4} l${t*.52} -${t*.1} l-${t*.22} -${t*.52} l${t*.62} ${t*.2} Z" fill="${r}"/>`}function am(e){switch(e){case 1:return`
        <circle cx="88" cy="38" r="23" fill="${oe}"/>
        <g stroke="${be}" stroke-width="2.4" stroke-linejoin="round">
          <path d="M22 132 Q38 84 72 90 Q88 94 84 110 Q60 130 26 128 Z" fill="${_e}"/>
          <path d="M72 90 Q62 58 82 46 Q94 42 96 54 Q92 74 84 92 Z" fill="${_e}"/>
          <path d="M92 44 l16 -6 l-10 15 Z" fill="${oe}"/>
          <path d="M38 128 l-4 22 l8 0 l3 -21 Z" fill="${_e}"/>
          <path d="M56 130 l-2 22 l8 0 l1 -21 Z" fill="${_e}"/>
        </g>
        <path d="M84 40 q8 -9 16 -6" stroke="${oe}" stroke-width="5" fill="none" stroke-linecap="round"/>
        <circle cx="88" cy="52" r="3" fill="${be}"/>`;case 3:return`
        <rect x="${ne}" y="${ie+4}" width="${$e}" height="58" fill="${oe}"/>
        <path d="M${ne+4} ${ie+34} q13 -17 26 0 q13 17 26 0 q13 -17 26 0 q9 12 14 3"
              stroke="${be}" stroke-width="6" fill="none" stroke-linecap="round"/>
        <rect x="${ne}" y="${ie+62}" width="${$e}" height="11" fill="${be}"/>
        ${P(`M${ne+12} ${ie+73} l0 26 l10 0 l0 -26 Z`)}
        ${P(`M${ne+$e-22} ${ie+73} l0 26 l10 0 l0 -26 Z`)}`;case 8:return`<circle cx="60" cy="54" r="27" fill="${_e}" stroke="${be}" stroke-width="2"/>`;case 11:return`
        ${P("M30 124 Q46 82 80 88 Q96 92 90 108 Q66 126 32 122 Z",oe)}
        ${P("M80 88 Q76 62 94 54 Q104 52 104 62 Q98 78 90 90 Z",oe)}
        ${P("M100 52 l12 -6 l-6 14 Z",J)}
        ${P("M36 120 Q22 134 26 148 l10 -4 Q36 132 44 124 Z",oe)}
        <circle cx="98" cy="60" r="2.6" fill="${be}"/>`;default:return`
        ${P("M22 64 Q60 30 98 64 Q60 50 22 64 Z",oe)}
        <rect x="57" y="62" width="5" height="28" fill="${_e}"/>
        ${P("M44 92 Q60 82 76 92 L82 146 L38 146 Z",_e)}
        <circle cx="60" cy="82" r="11" fill="${_e}"/>
        ${P("M50 76 Q60 66 70 76 Q60 72 50 76 Z")}`}}function cm(e){const n=e.month;if(e.isGodori){const t=n===2?lm:n===4?J:Wr;return`
      ${P("M28 100 Q52 74 82 88 Q96 96 88 108 Q60 124 30 112 Z",t)}
      ${P("M82 88 Q78 70 92 64 Q100 62 100 70 Q96 82 88 92 Z",t)}
      ${P("M96 62 l12 -5 l-7 12 Z",oe)}
      <circle cx="92" cy="72" r="2.6" fill="${be}"/>
      ${P("M36 112 Q54 126 78 114 Q60 132 34 120 Z")}`}switch(n){case 5:return`
        ${P("M14 92 Q60 62 106 92 L106 104 Q60 76 14 104 Z",J)}
        ${P("M26 100 l0 40 l9 0 l0 -38 Z",J)}
        ${P("M85 100 l0 40 l9 0 l0 -38 Z",J)}`;case 6:return`
        ${P("M48 72 Q24 48 18 74 Q14 96 46 88 Z",J)}
        ${P("M52 72 Q76 48 82 74 Q86 96 54 88 Z",J)}
        ${P("M48 64 l4 34 l-4 0 Z")}
        ${P("M88 116 Q72 100 68 118 Q66 132 88 128 Z",J)}
        ${P("M92 116 Q108 100 112 118 Q114 132 92 128 Z",J)}`;case 7:return`
        ${P("M22 112 Q34 84 62 82 Q94 80 100 104 Q102 128 66 130 Q28 132 22 112 Z",J)}
        ${P("M22 106 l-12 -8 l10 18 Z",J)}
        ${P("M34 128 l-3 18 l8 0 l2 -17 Z",J)}
        ${P("M60 130 l-2 16 l8 0 l1 -16 Z",J)}
        ${P("M88 126 l2 18 l8 -2 l-3 -17 Z",J)}
        <circle cx="36" cy="102" r="3" fill="${be}"/>`;case 9:return`
        ${P("M30 66 L90 66 L80 100 Q60 112 40 100 Z",oe)}
        ${P("M36 72 L84 72 L78 90 Q60 100 42 90 Z",_e)}
        <rect x="55" y="110" width="10" height="16" fill="${oe}"/>
        ${P("M38 126 L82 126 L82 136 L38 136 Z",Nt)}
        <text x="60" y="88" font-size="15" text-anchor="middle" fill="${be}" font-family="serif" font-weight="bold">壽</text>`;case 10:return`
        ${P("M30 116 Q44 88 70 88 Q98 88 102 110 Q104 132 70 134 Q34 136 30 116 Z",J)}
        ${P("M34 106 Q20 92 24 74 Q34 78 42 94 Z",J)}
        ${P("M24 74 l-9 -14 l3 -3 l10 13 Z")}
        ${P("M26 72 l9 -13 l4 3 l-9 12 Z")}
        <circle cx="28" cy="92" r="3" fill="${be}"/>
        ${P("M44 134 l-3 14 l8 0 l2 -13 Z",J)}
        ${P("M88 132 l3 16 l8 -2 l-3 -14 Z",J)}`;default:return`
        ${P("M24 84 Q56 64 88 92 Q58 116 24 84 Z",_e)}
        ${P("M88 92 l20 14 l-26 2 Z",_e)}
        <circle cx="42" cy="86" r="2.6" fill="${be}"/>`}}function um(e){const n=e==="cheong"?Nt:e==="bi"?"#9aa1a8":oe,t=e==="hong"?"홍단":e==="cheong"?"청단":"";return`
    <g transform="rotate(-24 60 79)">
      <rect x="16" y="58" width="88" height="42" fill="${n}"/>
      <rect x="16" y="58" width="88" height="4" fill="${_e}" opacity="0.35"/>
      ${t?`<text x="60" y="87" font-size="19" text-anchor="middle" fill="${_e}" font-family="serif" font-weight="bold" letter-spacing="1">${t}</text>`:""}
    </g>`}function dm(){return`
    <rect x="${ne+$e-30}" y="${ie+Be-34}" width="28" height="32" rx="3" fill="${oe}"/>
    <text x="${ne+$e-16}" y="${ie+Be-11}" font-size="21" text-anchor="middle" fill="${_e}" font-family="serif" font-weight="bold">光</text>`}function Eu(e){return e.isBonus?`
      <rect x="${ne+6}" y="${ie+40}" width="${$e-12}" height="56" fill="${J}"/>
      <text x="60" y="${ie+80}" font-size="30" text-anchor="middle" fill="${be}" font-family="serif" font-weight="bold">${e.piValue}피</text>`:(e.piValue??1)>=2?`
      <rect x="${ne+10}" y="${ie+Be-34}" width="${$e-20}" height="28" fill="${oe}"/>
      <text x="60" y="${ie+Be-13}" font-size="19" text-anchor="middle" fill="${_e}" font-family="serif" font-weight="bold">쌍피</text>`:""}function fm(e,n,t){const r=n.tint?si(n.red,n.tint,n.tintAmount*.7):n.red;let i=si(n.paperTop,om[e]??"#ffffff",.08);return n.tint&&(i=si(i,n.tint,n.tintAmount*.5)),`
  <defs>
    <clipPath id="cl${t}"><rect x="${ne}" y="${ie}" width="${$e}" height="${Be}"/></clipPath>
    <filter id="gr${t}" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>
  <defs>
    <linearGradient id="bd${t}" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0%" stop-color="${It(r,.18)}"/>
      <stop offset="52%" stop-color="${r}"/>
      <stop offset="100%" stop-color="${It(r,-.22)}"/>
    </linearGradient>
  </defs>
  <defs>
    <linearGradient id="ik${t}" x1="0" y1="0" x2="0.25" y2="1">
      <stop offset="0%" stop-color="${It(n.ink,.2)}"/>
      <stop offset="45%" stop-color="${n.ink}"/>
      <stop offset="100%" stop-color="${It(n.ink,-.35)}"/>
    </linearGradient>
    <radialGradient id="vg${t}" cx="0.5" cy="0.42" r="0.78">
      <stop offset="55%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#4a2a10" stop-opacity="0.2"/>
    </radialGradient>
    <linearGradient id="gl${t}" x1="0" y1="0" x2="0.55" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.3"/>
      <stop offset="34%" stop-color="#ffffff" stop-opacity="0.06"/>
      <stop offset="62%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#2a1608" stop-opacity="0.16"/>
    </linearGradient>
  </defs>
  <rect width="${nn}" height="${tn}" rx="9" fill="url(#bd${t})"/>
  <rect x="2" y="2" width="${nn-4}" height="${tn-4}" rx="7.5" fill="none"
        stroke="#ffffff" stroke-width="1.2" opacity="0.22"/>
  <!-- 종이가 테두리보다 살짝 눌려 들어간 느낌 -->
  <rect x="${ne-2.5}" y="${ie-2.5}" width="${$e+5}" height="${Be+5}" rx="1.5"
        fill="${n.ink}" opacity="0.55"/>
  <rect x="${ne-1}" y="${ie-1}" width="${$e+2}" height="${Be+2}" rx="1"
        fill="none" stroke="#ffffff" stroke-width="0.9" opacity="0.18"/>
  <rect x="${ne}" y="${ie}" width="${$e}" height="${Be}" fill="${i}"/>
  <rect x="${ne}" y="${ie}" width="${$e}" height="${Be}" fill="url(#vg${t})"/>
  <rect x="${ne}" y="${ie}" width="${$e}" height="${Be}" fill="none" stroke="${n.ink}"
        stroke-width="1.1" opacity="0.35"/>`}function hm(e,n){const t=n?.width??nn,r=n?.height??tn,i=Dh(n?.skin??Li.id);be=i.ink,_e=i.white,oe=i.red,J=i.gold;const l=`${e.id}-${i.id}`.replace(/[^a-zA-Z0-9-]/g,"");Ah=l;const o=e.month===0?"보너스":`${e.month}`;let s="";return e.isBonus?s=Eu(e):(s=sm(e.month),e.kind==="gwang"?s+=am(e.month)+dm():e.kind==="yeol"?s+=cm(e):e.kind==="tti"&&e.tti?s+=um(e.tti):s+=Eu(e)),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${nn} ${tn}" width="${t}" height="${r}" role="img" aria-label="${e.name}">
  ${fm(e.month,i,l)}
  <g clip-path="url(#cl${l})">${s}</g>
  <text x="${nn/2}" y="${tn-3.5}" font-size="14" font-weight="700" text-anchor="middle" fill="${_e}"
        font-family="sans-serif" opacity="0.95">${o}</text>
  <rect x="${ne}" y="${ie}" width="${$e}" height="${Be}" filter="url(#gr${l})" opacity="0.085"
        style="mix-blend-mode:multiply"/>
  <rect width="${nn}" height="${tn}" rx="9" filter="url(#gr${l})" opacity="0.045" style="mix-blend-mode:multiply"/>
  <rect width="${nn}" height="${tn}" rx="9" fill="url(#gl${l})" style="pointer-events:none"/>
  <rect x="0.75" y="0.75" width="${nn-1.5}" height="${tn-1.5}" rx="9" fill="none" stroke="${i.ink}"
        stroke-width="1.5" opacity="0.45"/>
</svg>`}function Rl(e,n){return`data:image/svg+xml;utf8,${encodeURIComponent(hm(e,n))}`}function pm(e){const n=e?.width??nn,t=e?.height??tn,r=Dh(e?.skin??Li.id),i=r.tint?si("#7a2b24",r.tint,r.tintAmount*.8):"#7a2b24",l=r.tint?si("#8f342b",r.tint,r.tintAmount*.8):"#8f342b";return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${nn} ${tn}" width="${n}" height="${t}" role="img" aria-label="뒷면">
  <rect width="${nn}" height="${tn}" rx="10" fill="${i}"/>
  <rect x="7" y="7" width="${nn-14}" height="${tn-14}" rx="7" fill="${l}" stroke="${r.gold}" stroke-width="2.5"/>
  <circle cx="${nn/2}" cy="${tn/2}" r="30" fill="none" stroke="${r.gold}" stroke-width="3"/>
  <circle cx="${nn/2}" cy="${tn/2}" r="18" fill="none" stroke="${r.gold}" stroke-width="2"/>
  <path d="M60 60 v60 M30 90 h60" stroke="${r.gold}" stroke-width="2" opacity="0.6"/>
</svg>`}function gm(e){return`data:image/svg+xml;utf8,${encodeURIComponent(pm(e))}`}const Mu=[{id:"maru",name:"밤의 마루",vars:{}},{id:"daylight",name:"툇마루 한낮",vars:{"--wood-dark":"#6b5640","--wood":"#8a7157","--wood-light":"#a68d6f","--paper":"#fff8ec","--paper-dim":"#e6dbc8","--lamp":"#ffcf6b","--lamp-dim":"#c9a25a"}},{id:"snow",name:"첫눈 오는 밤",vars:{"--wood-dark":"#1b2233","--wood":"#333f57","--wood-light":"#4c5b78","--paper":"#eef4ff","--paper-dim":"#c2cddf","--lamp":"#a8d0ff","--lamp-dim":"#6f8fb8","--accent":"#5c7fd0"}},{id:"lantern",name:"등불",vars:{"--wood-dark":"#2b1508","--wood":"#5c2f12","--wood-light":"#7d4520","--paper":"#ffeccd","--paper-dim":"#dfbf95","--lamp":"#ffb347","--lamp-dim":"#c97a2a","--accent":"#d4552f"}}];function Ja(e){return Mu.find(n=>n.id===e)??Mu[0]}const Qt=[{id:"cards:hanji",kind:"cards",name:"한지 화패",desc:"누런 한지에 찍어낸 듯한 담백한 패",price:1200},{id:"cards:moonlit",kind:"cards",name:"달밤 화패",desc:"달빛에 담근 푸른 패. 밤에 치기 좋다",price:2200},{id:"cards:gilt",kind:"cards",name:"금박 화패",desc:"어두운 바탕에 금빛. 하숙집에선 과하다는 평",price:3800},{id:"theme:daylight",kind:"theme",name:"툇마루 한낮",desc:"해 드는 대낮의 나무 빛깔로 바꾼다",price:900},{id:"theme:snow",kind:"theme",name:"첫눈 오는 밤",desc:"창밖에 눈이 오는 듯한 푸른 밤",price:1800},{id:"theme:lantern",kind:"theme",name:"등불",desc:"전등 하나만 켜둔 진한 주황빛",price:2800}],mm=Qt.reduce((e,n)=>e+n.price,0);function Xn(e){return e.id.split(":")[1]}function ym(e){return Xa.find(n=>n.id===e)?.name??e}const $m=[{id:"jieun",order:1,name:"지은",nickname:"막내",age:22,job:"사진영상학과 1학년",room:"201호",season:"spring",personality:["사랑스러움","애교","장난기"],styleLabel:"아직 규칙을 외우는 중. 뭘 낼지 모르겠으면 그냥 낸다",backstory:"이 집 막내. 언니들 틈에서 제일 먼저 마루에 나와 앉아 있다.",style:{weights:{pi:1.1},mistakeScale:1.15,greedScale:1.1,inferenceScale:.8,aggressionScale:.7,stopScoreDelta:1},unlock:[],rate:3,reward:{base:26,perStage:5},lines:{matchStart:{low:["어, 안녕! 나 지은. 옆방 살아.","규칙은... 어제 외웠어. 아마도.","살살 해줘. 진짜로."],mid:["오늘은 좀 늘었어. 기대해도 돼.","어제 혼자 연습했다? 마루에서.","자, 앉아 앉아. 방석 여기."],high:["오늘도 같이 칠 거지? 기다렸는데.","네 자리 맡아뒀어. 여기 앉아.","지면 야식. 이기면... 도 야식."]},go:{low:["어어, 고? 고! 맞나? 고!","이거 고 하는 거 맞지? 맞겠지.","몰라, 일단 고!"],mid:["고. 이번엔 계산하고 하는 거야.","여기서 멈추면 아쉽잖아. 고!","손이 좋아. 고 할래."],high:["고. 너 표정 보니까 더 가도 될 것 같아.","고! 놀라는 얼굴 보고 싶어서.","고 할게. 조금만 더 같이 있자는 뜻이야."]},stop:{low:["스톱! 더 가면 나 무너져.","여기서 멈출래. 심장이 쿵쾅거려.","스톱... 맞지? 스톱!"],mid:["스톱. 욕심내다 뻑 나는 거 봤거든.","딱 여기. 오늘은 여기까지가 좋아.","스톱할게. 다음 판이 더 재밌을 거야."],high:["스톱. 오래 끌면 네가 지루해할까 봐.","여기서 스톱. 대신 한 판 더 하자.","스톱! 이겼다 이겼다."]},ppeok:{low:["으악 뻑! 이거 왜 이래!","아 진짜... 방금 건 못 본 걸로.","뻑이다... 나 이거 제일 싫어."],mid:["뻑. 괜찮아, 어차피 내가 가져올 거야.","묶였네. 저거 내 거야 나중에.","뻑 났다. 표정 관리 중."],high:["뻑! 봤지? 너 웃었어 지금.","아 뻑... 웃지 마 좀.","뻑 났는데 왜 기분이 나쁘지 않지."]},sseulVictim:{low:["어? 바닥이 비었어. 그래도 되는 거야?","다 가져갔어... 방금 뭐 한 거야?","잠깐만, 다시 설명해줘."],mid:["쓸었네. 그거 배워야겠다.","아, 그렇게 하는 거구나. 메모.","잘한다 진짜. 얄밉게."],high:["또 쓸어? 나 이제 안 놀라.","멋있어서 봐준다. 이번만.","쓸 때 표정 좀 짓지 마, 심장에 안 좋아."]},win:{low:["이겼다! 나 이겼어! 진짜로?","어... 이긴 거 맞지? 맞지?","와 처음이야 이런 거."],mid:["이겼다! 연습한 보람 있네.","봤지? 나 늘었다니까.","오늘은 내가 설거지 면제야."],high:["이겼다! 근데 네가 봐준 거 아니지?","이겼어. 상으로 내일 편의점 같이 가자.","내가 이겼으니까 오늘 야식은 내가 살게. 이상하지?"]},lose:{low:["졌다... 그래도 재밌었어.","아 아까워! 다음엔 안 져.","한 판만 더, 응? 한 판만."],mid:["졌네. 근데 이번엔 꽤 근접했지?","분하다. 분한데 또 하고 싶다.","다음 판에 두고 보자."],high:["졌지만 기분은 안 나빠. 이상하지.","또 졌네. 너랑 하면 왜 자꾸 지지.","졌으니까 벌칙. 내일도 같이 쳐줘."]},affection:{low:["저기, 이따 마루에 나올 거야?","어... 물어볼 게 있었는데. 아 맞다 그거.","괜찮으면 잠깐 얘기할래?"],mid:["있잖아, 나 요즘 밤이 기다려져.","너랑 있으면 시간이 왜 이렇게 빨라?","이거 너 주려고 사 왔어. 별거 아니야."],high:["나 사실 하고 싶은 말이 있는데.","맞고 말고도 같이 하고 싶은 거 많아.","오늘은 승부 말고 그냥 얘기하자."]},hints:["나 요즘 피만 모아. 진짜야. 눈치 좀 챙겨.","바닥에 광 놔두면 내가 가져간다? 알려주는 거야.","힌트 줄게. 나 계산 못 해. 오래 끌면 네가 이겨."]},events:[{stage:1,scriptId:"jieun_01",title:"마루에 먼저 나와 있는 사람",hasChoice:!1},{stage:2,scriptId:"jieun_02",title:"막내의 규칙 세 가지",hasChoice:!1},{stage:3,scriptId:"jieun_03",title:"카메라를 들고 다니는 이유",hasChoice:!1},{stage:4,scriptId:"jieun_04",title:"잘 찍는다는 말",hasChoice:!0},{stage:5,scriptId:"jieun_05",title:"첫 과제 촬영",hasChoice:!0},{stage:6,scriptId:"jieun_06",title:"언니들 몰래",hasChoice:!0},{stage:7,scriptId:"jieun_07",title:"필름 한 통",hasChoice:!1},{stage:8,scriptId:"jieun_08",title:"전시 전날",hasChoice:!1},{stage:9,scriptId:"jieun_09",title:"벽에 걸린 사진",hasChoice:!1},{stage:10,scriptId:"jieun_10",title:"마지막 한 장",hasChoice:!0}],look:{hair:"#6b4630",hairStyle:"bob",skin:"#f7d9c4",outfits:["#f4a7b9","#ffd9a0","#fff3e0"],accent:"#e8657f",prop:"스케치북",face:"round",eyes:"round",bangs:"straight",build:"petite",accessory:"hairpin",wear:["hoodie","tee","dress"],propArt:"sketchbook"}},{id:"sua",order:2,name:"수아",nickname:"요리",age:21,job:"조리학과 2학년",room:"202호",season:"spring",personality:["상냥함","다정함","살뜰함"],styleLabel:"피부터 쌓는다. 화려하진 않은데 정신 차리면 피박",backstory:"부엌이 넓은 집을 찾아 왔다. 밤마다 뭔가를 굽는다.",style:{weights:{pi:1.7,tti:.9,gwang:.85},mistakeScale:.95,greedScale:.9,inferenceScale:1.05,aggressionScale:.8,stopScoreDelta:0},unlock:[],rate:4,reward:{base:28,perStage:5},lines:{matchStart:{low:["부엌 정리 끝났어. 한 판 하자.","손 씻고 와. 기름 묻은 손으로 패 만지지 말고.","앉아. 국 데워놨으니까 지면 그거 먹고 가."],mid:["오늘 반찬 잘 됐어. 이기면 하나 더 줄게.","자, 시작하자. 불 다 껐어.","오늘은 좀 길게 갈 생각이야."],high:["네 몫 덜어놨어. 치우면서 먹어.","기다렸어. 앉아.","오늘은 네가 좋아하는 거 했어. 판 끝나고."]},go:{low:["고.","고. 아직 멀었어.","고 할게. 피가 모자라."],mid:["고. 피 다섯 장만 더.","고. 재료 다 못 모았거든.","고. 여기서 끊으면 맛이 안 나."],high:["고. 오늘은 좀 욕심내 볼래.","고. 너랑 더 하고 싶어서라고 하면 웃을래?","고. 이유는 나중에 말해줄게."]},stop:{low:["스톱. 이 정도면 충분해.","스톱. 간 맞았어.","스톱."],mid:["스톱. 더 끓이면 졸아.","여기서 딱. 욕심은 요리도 맞고도 망쳐.","스톱할게. 피박은 확인했고."],high:["스톱. 얼른 끝내고 야식 먹자.","스톱. 오늘은 빨리 끝내고 얘기하고 싶어.","스톱. 대신 설거지는 네가."]},ppeok:{low:["뻑.","묶였네. 상관없어.","뻑이야. 저건 내가 다시 가져올 거고."],mid:["뻑. 냄비 뚜껑 닫아둔 셈 치자.","뻑 났어. 기다리면 돼.","저거 내 거야. 손대지 마."],high:["뻑. 너 지금 웃었지.","뻑 났는데 네가 좋아하네. 얄밉다.","뻑. 그래도 네 앞이라 다행이야."]},sseulVictim:{low:["쓸었네. 잘하네.","바닥 깨끗하다. 부엌도 그렇게 해줘.","인정. 잘했어."],mid:["쓸 줄도 알고. 언제 배웠어?","아까워라. 저거 내 피였는데.","좋아, 다음 판에 돌려받을게."],high:["또 쓸어. 진짜 얄미워.","그거 하지 마. 심장 내려앉아.","잘하는 거 알겠으니까 그만 좀 웃어."]},win:{low:["내가 이겼어. 국 식기 전에 먹어.","이겼네. 설거지는 네 담당.","수고했어. 다음엔 더 잘하겠지."],mid:["이겼다. 오늘 저녁은 내가 정한다.","봤지? 피가 무서운 거야.","이겼어. 상은 네가 주는 거로."],high:["이겼는데 왜 미안하지.","이겼으니까 소원 하나. 내일도 여기 앉아.","이겼다. 근데 오늘은 안 기쁘네. 네가 아쉬워해서."]},lose:{low:["졌네. 잘 쳤어.","인정할게. 오늘은 네가 나았어.","다음엔 안 봐줘."],mid:["졌다. 분한데 밥은 차려줄게.","너 요즘 늘었어. 인정.","한 판 더 하면 결과 다를 텐데."],high:["졌어. 근데 네가 이기는 것도 나쁘지 않네.","졌으니까 오늘은 내가 설거지. 같이 하자.","졌다. 이렇게 지는 건 처음이야."]},affection:{low:["이따 주방 쪽으로 와. 남은 거 있어.","잠깐 손 좀 빌릴 수 있을까.","물어볼 게 있는데, 지금 괜찮아?"],mid:["요리는 혼자 먹으면 맛이 없더라.","네 입맛 이제 대충 알 것 같아.","밥 먹을 사람이 있다는 게 좋아졌어."],high:["나 원래 남 챙기는 사람 아니야. 너 빼고.","이건 네 거야. 다른 사람 주려고 만든 거 아니야.","오늘은 내 얘기 좀 할게. 들어줄래?"]},hints:["나 피 모아. 피만 봐. 그거 하나만 막아도 반은 이겨.","쌍피 바닥에 놓지 마. 나 그거 주우려고 기다려.","내가 스톱 안 하면 피가 모자란 거야. 계산해봐."]},events:[{stage:1,scriptId:"sua_01",title:"부엌에서 나는 냄새",hasChoice:!1},{stage:2,scriptId:"sua_02",title:"설거지 당번표",hasChoice:!1},{stage:3,scriptId:"sua_03",title:"실패한 시폰 케이크",hasChoice:!1},{stage:4,scriptId:"sua_04",title:"단맛을 못 느끼는 날",hasChoice:!0},{stage:5,scriptId:"sua_05",title:"시장 가는 길",hasChoice:!0},{stage:6,scriptId:"sua_06",title:"레시피 노트",hasChoice:!0},{stage:7,scriptId:"sua_07",title:"손을 데었다",hasChoice:!1},{stage:8,scriptId:"sua_08",title:"실기 시험 전날",hasChoice:!1},{stage:9,scriptId:"sua_09",title:"맛을 본 사람",hasChoice:!1},{stage:10,scriptId:"sua_10",title:"마지막 접시",hasChoice:!0}],look:{hair:"#2f2723",hairStyle:"ponytail",skin:"#f3d3b8",outfits:["#a8d5b5","#d7e8c4","#fdf6e3"],accent:"#3e8e5a",prop:"앞치마",face:"oval",eyes:"droopy",bangs:"side",build:"average",accessory:"band",wear:["apron","shirt","hanbok"],propArt:"ladle"}},{id:"nayeon",order:3,name:"나연",nickname:"문학",age:22,job:"문예창작과 2학년",room:"203호",season:"spring",personality:["조용함","차분함","속깊음"],styleLabel:"띠만 본다. 홍단 청단 나오면 눈빛이 달라진다",backstory:"조용한 방이 필요했다. 밤에만 글이 써진다고 한다.",style:{weights:{tti:1.8,hongdan:1.4,cheongdan:1.4,chodan:1.2,pi:.8},mistakeScale:.95,greedScale:1.1,inferenceScale:1,aggressionScale:.9,stopScoreDelta:1},unlock:[],rate:5,reward:{base:31,perStage:6},lines:{matchStart:{low:["아. 너구나. 앉아.","지금 몇 시야? ...뭐, 상관없나.","작업 막혔어. 딴짓하기 딱 좋네."],mid:["왔네. 커피 식었는데 마실래?","오늘은 좀 칠 만해. 앉아.","새벽에 제일 잘 보이거든, 패가."],high:["기다렸어. 밤이 길어서.","네 소리 나면 작업 손이 멈춰. 큰일이야.","앉아. 불 좀 줄일게."]},go:{low:["고.","고. 아직 색이 안 찼어.","고. 두 장 더."],mid:["고. 홍단이 보여.","고. 여기서 멈추면 그림이 미완성이야.","고. 나 이거 완성할 거야."],high:["고. 오늘 밤은 길게 쓰고 싶어.","고. 너 놀라는 거 보려고.","고. 이유 물어보지 마."]},stop:{low:["스톱.","됐어. 스톱.","여기까지. 스톱."],mid:["스톱. 색 다 채웠어.","스톱. 더 칠하면 탁해져.","스톱. 완성은 멈출 때 정해지는 거야."],high:["스톱. 얼른 끝내고 딴 얘기 하자.","스톱. 오늘은 너랑 할 얘기가 있어서.","스톱. 미안, 급해졌어."]},ppeok:{low:["뻑.","...묶였네.","저거 내 거였는데."],mid:["뻑. 밑칠 다시 하는 셈 치지.","괜찮아. 저 색은 내가 회수해.","뻑 났다고 그림이 끝나는 건 아니야."],high:["뻑. 웃지 마.","뻑이야. 너 지금 신났지.","뻑. 그래도 네 앞이라 덜 억울하다."]},sseulVictim:{low:["쓸었네.","바닥이 하얘졌어. 캔버스 같다.","잘했어. 인정."],mid:["아깝다. 저기 청단 있었는데.","손 빠르네. 그거 좋은 거야.","다음엔 안 남겨둘게."],high:["또 쓸어. 너 그거 일부러 하지.","그만 좀 잘해. 집중 안 돼.","쓸 때 표정이 제일 좋아. 그건 인정."]},win:{low:["끝. 잘 자.","내가 이겼어. 나 작업하러 갈게.","수고. 다음엔 좀 더 버텨봐."],mid:["이겼다. 오늘 색 잘 나왔어.","띠 모으는 거 무섭지? 이제 알겠지.","이겼으니까 옥상 조명 내가 쓸게."],high:["이겼는데 아쉽네. 판이 끝나서.","이겼어. 근데 안 갈래. 좀 더 있자.","내가 이겼으니 소원. 내일도 새벽에 나와."]},lose:{low:["졌네. 잘 치더라.","...다시 해.","그림이나 그리러 가야겠다."],mid:["졌다. 오늘 네 손이 좋았어.","인정. 근데 다음은 아니야.","지고 나니까 오히려 잠이 깼어."],high:["졌어. 근데 계속 생각날 것 같아, 이 판.","졌다. 너한테 지는 건 왜 덜 분하지.","졌으니까 벌칙. 내 작업 구경하고 가."]},affection:{low:["이거 봐줄래? 아니다, 됐어.","옥상 갈 건데. 같이 갈 사람 없나 해서.","작업 얘기 지루하지 않아?"],mid:["네가 보면 그림이 좀 달라 보여.","요즘 그림에 사람이 들어가. 처음이야.","밤에 누가 있으면 이렇게 다르구나."],high:["이거 너 그린 거야. 보지 마. ...봐도 돼.","나 원래 사람 안 그려.","오늘은 작업 안 할래. 너랑 있을래."]},hints:["나 띠만 봐. 홍단 청단 그거만.","띠 바닥에 놓지 마. 그거 먹으려고 기다리는 거야.","내가 길게 끄는 건 단이 하나 모자라서야."]},events:[{stage:1,scriptId:"nayeon_01",title:"새벽 세 시의 타자 소리",hasChoice:!1},{stage:2,scriptId:"nayeon_02",title:"문장을 고르는 사람",hasChoice:!1},{stage:3,scriptId:"nayeon_03",title:"첫 독자",hasChoice:!1},{stage:4,scriptId:"nayeon_04",title:"안 써지는 밤",hasChoice:!0},{stage:5,scriptId:"nayeon_05",title:"서점까지 걸어서",hasChoice:!0},{stage:6,scriptId:"nayeon_06",title:"이름을 빌려드릴게요",hasChoice:!0},{stage:7,scriptId:"nayeon_07",title:"합평회",hasChoice:!1},{stage:8,scriptId:"nayeon_08",title:"투고 마감 전날",hasChoice:!1},{stage:9,scriptId:"nayeon_09",title:"실린 이야기",hasChoice:!1},{stage:10,scriptId:"nayeon_10",title:"마지막 문장",hasChoice:!0}],look:{hair:"#1f1b2e",hairStyle:"long",skin:"#efd2bd",outfits:["#5b6b8c","#3d4359","#c9c3e0"],accent:"#7a6fd8",prop:"물감 묻은 소매",face:"slim",eyes:"sleepy",bangs:"curtain",build:"tall",accessory:"none",wear:["smock","hoodie","coat"],propArt:"brush"}},{id:"ria",order:4,name:"리아",nickname:"러닝",age:21,job:"스포츠과학과 1학년",room:"204호",season:"spring",personality:["활발함","솔직함","직진"],styleLabel:"손이 먼저 나간다. 생각하기 전에 내고, 피를 쓸어간다",backstory:"새벽에 뛰려고 들어왔다. 기숙사는 다섯 시에 문이 안 열린다.",style:{weights:{pi:1.6,tti:.9,yeol:.9,gwang:.8},mistakeScale:1.2,greedScale:1.3,inferenceScale:.85,aggressionScale:1.3,stopScoreDelta:2},unlock:[{tenantId:"sua",stage:5}],rate:6,reward:{base:33,perStage:6},lines:{matchStart:{low:["한 판만요! 삼 분이면 끝나요.","저 지금 뛰고 와서 손이 뜨거워요.","빨리 해요. 저 여섯 시에 또 나가야 돼요."],mid:["오늘도 한 판 해요. 이제 규칙 다 외웠어요.","제가 요즘 좀 늘었거든요?","준비운동 끝났어요. 시작해요."],high:["같이 뛰는 건 싫다면서 이건 왜 매일 해요?","오늘은 좀 오래 해요. 지면 억울하니까.","앉아 있는 게 이렇게 재밌을 줄 몰랐어요."]},go:{low:["고! 아직 안 끝났어요.","고. 여기서 멈추면 재미없잖아요.","고요. 더 가요."],mid:["고. 숨 아직 안 찼어요.","고. 저 원래 끝까지 가는 사람이에요.","고! 더 벌어요."],high:["고. 판 끝나면 올라가야 되잖아요.","고. 조금만 더 있어요.","고요. 오늘은 좀 길게 가고 싶어요."]},stop:{low:["스톱. 저 시간 없어요.","여기서 끊을게요.","스톱이요. 다음에 또 해요."],mid:["스톱. 이 정도면 됐어요.","욕심부리다 놓치는 거 봤거든요.","스톱할게요. 깔끔하게."],high:["스톱. 오래 끌면 선배가 피곤하잖아요.","여기까지. 내일 또 하면 되죠.","스톱이요. 내일도 있으니까."]},ppeok:{low:["어? 이게 왜 이렇게 돼요?","뻑이요? 아 진짜.","제가 또 뭘 잘못한 거예요?"],mid:["뻑. 알고도 밟았어요.","아 이거 알면서 냈는데.","뻑이네요. 빨리 낸 값이죠."],high:["뻑. 급하게 낸 제 탓이에요.","웃지 마세요. 저도 알아요.","뻑이요. 이럴 때 좀 잡아주면 안 돼요?"]},sseulVictim:{low:["어어, 제 피 다 가져가요?","그거 제 거였는데요!","아 진짜 너무하시네요."],mid:["쓸었네요. 깔끔하시다.","제 피 돌려주세요.","이건 좀 아픈데요."],high:["쓸어가면서 웃지 마세요.","다음 판에 그대로 돌려받을 거예요.","제 거 가져간 만큼 내일 같이 뛰어요."]},win:{low:["이겼다! 저 이겼어요!","어? 제가 이겼어요?","와 오늘 될 것 같더라니."],mid:["이겼어요. 봤죠?","제가 늘었다니까요.","오늘 컨디션 좋아요."],high:["이겼어요. 근데 왜 안 아쉬워하세요.","봐주신 거 아니죠?","이겼는데 왜 제가 더 기분 좋지."]},lose:{low:["졌다. 한 판 더요!","에이. 다시 해요.","졌어요. 인정."],mid:["졌네요. 다음엔 안 져요.","아깝다. 진짜 아깝다.","한 판만 더 해요. 네?"],high:["졌는데 왜 웃음이 나지.","져도 괜찮네요. 이상하다.","다음 판은 제가 이길 거예요. 진짜로."]},affection:{low:["저 원래 낯 안 가려요.","선배는 말 좀 느리게 해요.","여기 사람 사는 것 같아서 좋아요."],mid:["같이 뛰자고는 안 할게요. 밤에 이거나 해요.","저 요즘 알람 안 맞춰도 깨요.","이 시간이 제일 좋아요."],high:["저 달리기보다 이게 더 좋아졌어요.","새벽에 나갈 때 마루 불 켜놓고 가요. 선배 보라고.","숨차는 게 달려서인 줄 알았어요."]},hints:["저 피만 봐요. 피 바닥에 두면 다 가져가요.","제가 빨리 내는 건 계산을 안 해서예요. 천천히 생각하세요.","저 고를 자주 질러요. 기다렸다가 뒤집으세요."]},events:[{stage:1,scriptId:"ria_01",title:"새벽 다섯 시의 발소리",hasChoice:!1},{stage:2,scriptId:"ria_02",title:"기숙사 문은 여섯 시에 열린다",hasChoice:!1},{stage:3,scriptId:"ria_03",title:"페이스 조절",hasChoice:!0},{stage:4,scriptId:"ria_04",title:"무릎",hasChoice:!0},{stage:5,scriptId:"ria_05",title:"같이 뛸래요?",hasChoice:!0},{stage:6,scriptId:"ria_06",title:"기록이 안 줄어요",hasChoice:!0},{stage:7,scriptId:"ria_07",title:"비 오는 날의 러닝머신",hasChoice:!1},{stage:8,scriptId:"ria_08",title:"대회 전날",hasChoice:!0},{stage:9,scriptId:"ria_09",title:"완주",hasChoice:!1},{stage:10,scriptId:"ria_10",title:"결승선",hasChoice:!0}],look:{hair:"#3a2a20",hairStyle:"ponytail",skin:"#f4d9c6",outfits:["#9fd8c0","#e8f2ec","#d8e6dd"],accent:"#5fc39a",prop:"물병",face:"round",eyes:"round",bangs:"wispy",build:"average",accessory:"band",wear:["hoodie","jersey","tee"],propArt:"tape"}},{id:"hana",order:5,name:"하나",nickname:"분위기",age:22,job:"실용무용과 2학년",room:"301호",season:"summer",personality:["밝음","활발함","러블리"],styleLabel:"7점만 넘으면 무조건 고. 멈추는 법을 배운 적이 없다",backstory:"연습실보다 마루가 편하다고 한다. 음악만 있으면 어디서든 춘다.",style:{weights:{gwang:1.2,yeol:1.2,godori:1.3},mistakeScale:.9,greedScale:1.8,inferenceScale:.95,aggressionScale:1.5,stopScoreDelta:4},unlock:[{tenantId:"jieun",stage:5}],rate:7,reward:{base:36,perStage:6},lines:{matchStart:{low:["왔어? 몸 풀었어?","승부는 승부야. 봐주는 거 없어.","자, 시작하자. 시간 아까워."],mid:["오늘 컨디션 좋아. 너도 그래야 할 텐데.","훈련 끝나고 바로 왔어. 앉아.","이번엔 오래 갈 각오해."],high:["너랑 하는 게 제일 재밌어. 진짜로.","오늘 하루 종일 이 시간만 기다렸어.","자, 붙자. 살살은 안 해."]},go:{low:["고!","당연히 고지. 왜 물어봐?","고! 여기서 멈추는 건 지는 거야."],mid:["고! 아직 반도 안 왔어.","고. 멈추는 법 안 배웠거든.","고! 더 가자!"],high:["고! 네가 따라오는 게 재밌어서.","고! 오늘 밤 안 끝낼 거야.","고. 이렇게 해야 네가 진심으로 붙잖아."]},stop:{low:["...스톱. 억울한데 스톱.","여기서 끊는다. 다음 판 각오해.","스톱. 오늘은 여기까지만."],mid:["스톱. 이겼으면 됐어.","스톱! 깔끔하게 끝내자.","스톱. 더 가면 욕심이야. 이번만."],high:["스톱. 얼른 끝내고 같이 걷자.","스톱. 오늘은 빨리 끝내고 싶었어.","스톱! 대신 내일 또 하는 거다."]},ppeok:{low:["아 뻑! 짜증나!","뻑? 뻑이라고?","이런 거 진짜 싫어."],mid:["뻑. 괜찮아, 뒤집으면 돼.","묶였네. 근데 나 저거 회수할 거야.","뻑 한 번에 안 무너져."],high:["아 뻑! 야, 웃지 마!","뻑 났다고 좋아하지 마라 진짜.","뻑. 근데 네가 웃으니까 봐준다."]},sseulVictim:{low:["뭐야, 다 가져갔어?","야. 그거 좀 심하지 않아?","쓸었네. 인정은 한다."],mid:["잘하네. 열받게.","좋아, 그게 실력이면 인정.","다음엔 안 당해."],high:["또 쓸어? 너 나 놀리지.","그거 멋있는 거 알고 하는 거지.","쓸 때마다 심박수 올라가. 운동보다 심해."]},win:{low:["이겼다! 역시.","수고. 다음엔 더 붙어보자.","이겼어. 기분 좋다."],mid:["이겼다! 오늘 컨디션 최고!","봤지? 고는 이렇게 하는 거야.","이겼으니까 옥상 내 거."],high:["이겼다! 근데 너 왜 안 분해해?","이겼어. 상으로 내일 같이 뛰자. 새벽에.","이겼는데 네가 웃으니까 이긴 것 같지가 않네."]},lose:{low:["졌네. 깔끔하게 인정.","분하다! 다시!","잘 쳤어. 다음은 내 차례야."],mid:["졌다. 근데 재밌었어.","역시 너랑 해야 재밌지.","한 판 더! 아직 안 끝났어."],high:["졌어. 근데 하나도 안 억울해. 이상하지.","너한테 지는 건 왜 기분이 괜찮지.","졌으니까 벌칙 받을게. 뭐든지."]},affection:{low:["야, 너 내일 시간 있어? 아니 그냥 물어본 거야.","운동 같이 할 사람 구하는데.","뭐 마실래? 사 온 김에."],mid:["너 은근히 끈질겨. 그거 좋은 뜻이야.","같이 뛰면 기록이 잘 나와. 신기하지.","요즘 훈련보다 이 시간이 더 기다려져."],high:["나 원래 말 돌리는 거 못 해.","좋아하는 건 좋아한다고 말하는 성격이야.","오늘은 승부 말고 다른 얘기 하자."]},hints:["나 7점만 넘으면 무조건 고야. 그거 이용해.","고박 노려. 내가 멈추질 않으니까.","광이랑 열끗만 봐. 피는 신경 안 써."]},events:[{stage:1,scriptId:"hana_01",title:"마루에서 춤추는 사람",hasChoice:!1},{stage:2,scriptId:"hana_02",title:"음악 소리 좀 줄여",hasChoice:!1},{stage:3,scriptId:"hana_03",title:"거울이 없는 연습",hasChoice:!1},{stage:4,scriptId:"hana_04",title:"발목",hasChoice:!0},{stage:5,scriptId:"hana_05",title:"축제 무대 구경",hasChoice:!0},{stage:6,scriptId:"hana_06",title:"안무가 안 나와요",hasChoice:!0},{stage:7,scriptId:"hana_07",title:"박수 없는 리허설",hasChoice:!1},{stage:8,scriptId:"hana_08",title:"공연 전날",hasChoice:!1},{stage:9,scriptId:"hana_09",title:"객석에서 보기",hasChoice:!1},{stage:10,scriptId:"hana_10",title:"마지막 박자",hasChoice:!0}],look:{hair:"#3a2b1f",hairStyle:"short",skin:"#e8c09b",outfits:["#3f7fd0","#e2e8f0","#f5a623"],accent:"#2d6ac9",prop:"손목 테이핑",face:"round",eyes:"sharp",bangs:"wispy",build:"tall",accessory:"none",wear:["jersey","tee","dress"],propArt:"tape"}},{id:"seoyeon",order:6,name:"서연",nickname:"반장",age:22,job:"행정학과 2학년",room:"302호",season:"summer",personality:["똑부러짐","책임감","단정함"],styleLabel:"기대값으로 친다. 스톱 타이밍이 소름 돋게 정확하다",backstory:"하숙집 반장. 당번표와 공과금 장부를 혼자 쥐고 있다.",style:{weights:{pi:1.2,tti:1.1,gwang:1.1},mistakeScale:.8,greedScale:.6,inferenceScale:1.25,aggressionScale:.7,stopScoreDelta:-2},unlock:[{tenantId:"sua",stage:5}],rate:9,reward:{base:41,perStage:7},lines:{matchStart:{low:["오늘 자소서 세 개 썼어. 머리 좀 식히자.","한 판만. 딱 한 판.","앉아. 시간은 내가 정할게."],mid:["오늘은 좀 오래 해도 돼. 서류 다 냈거든.","너랑 하면 머리가 비워져서 좋아.","자, 시작하자."],high:["하루 종일 이 시간 계산하면서 버텼어.","오늘은 아무 생각 없이 치고 싶어.","앉아. 커피 내려놨어."]},go:{low:["고. 기대값이 아직 플러스야.","고 할게. 계산해봤어.","고."],mid:["고. 상대 피가 다섯 장이거든.","고. 여기서 끊는 게 손해야.","고. 숫자가 그렇게 말해."],high:["고. 오늘은 숫자 말고 기분으로.","고. 판이 끝나는 게 싫어서.","고. 이런 건 처음이야."]},stop:{low:["스톱.","스톱. 여기가 최적이야.","스톱. 더 가면 기대값이 음수야."],mid:["스톱. 정확히 여기.","스톱. 미안한데 계산이 끝났어.","여기서 끊는 게 맞아. 스톱."],high:["스톱. 대신 한 판 더 하자.","스톱. 오늘은 얘기가 더 하고 싶어서.","스톱. 계산은 내일부터 할게."]},ppeok:{low:["뻑. 변수 발생.","뻑이네. 확률상 있을 수 있는 일이야.","예상 범위 안이야."],mid:["뻑. 12% 확률이었는데 걸렸네.","괜찮아. 회수 계획 있어.","변수는 계산에 넣어뒀어."],high:["뻑. 너 앞에서만 이래.","이상하다. 너랑 할 때만 확률이 안 맞아.","뻑. 웃지 마. 계산 흔들려."]},sseulVictim:{low:["쓸었네. 기대값 밖이야.","인정. 잘 봤어.","그건 못 막았다."],mid:["아깝다. 그거 내 계획이었는데.","좋은 수였어. 진심으로.","메모해둘게. 다음엔 안 당해."],high:["또 쓸어. 내 계산이 자꾸 틀려.","너 때문에 통계가 망가져.","잘한다. 얄밉게 잘해."]},win:{low:["이겼어. 오늘 운이 좋았네.","수고했어. 잘 자.","이겼다. 다시 자소서 쓰러 가야지."],mid:["이겼다. 오늘은 좀 기분 좋네.","계산대로야. 기분은 계산 밖이지만.","이겼으니까 오늘은 일찍 잘래."],high:["이겼는데 아쉽다. 판이 끝나서.","이겼어. 근데 안 갈래. 좀 더 있자.","이겼으니까 소원 하나 들어줘. 내일도 나와줘."]},lose:{low:["졌네. 변수는 늘 있으니까.","잘 쳤어. 인정.","다음엔 계산 더 정확히 할게."],mid:["졌다. 근데 기분은 안 나빠.","네가 나보다 잘 봤어. 인정할게.","지는 것도 데이터야."],high:["졌어. 근데 오늘 제일 즐거웠어.","너한테 지면 왜 손해 같지가 않지.","졌으니까 오늘은 네 말 들을게."]},affection:{low:["나 요즘 계획이 다 틀어져. 왜인지 모르겠어.","잠깐 앉아도 돼? 머리가 복잡해서.","이거 남는 거야. 먹어."],mid:["계획에 없던 시간이 제일 좋더라.","너랑 있으면 조급한 게 좀 가라앉아.","나 사실 하루에 이 시간이 제일 기다려져."],high:["내 인생 계획표에 너가 들어왔어.","계산 안 하고 말하는 거 처음이야.","오늘은 아무것도 재지 말고 얘기하자."]},hints:["나는 7점 되면 거의 스톱이야. 그거 계산해.","내가 고를 하면 네 피가 모자란 거야. 확인해봐.","길게 끌면 내가 유리해. 빨리 끝내."]},events:[{stage:1,scriptId:"seoyeon_01",title:"반장이 부르는 회의",hasChoice:!1},{stage:2,scriptId:"seoyeon_02",title:"당번표는 왜 지켜야 하나",hasChoice:!1},{stage:3,scriptId:"seoyeon_03",title:"공과금 고지서",hasChoice:!1},{stage:4,scriptId:"seoyeon_04",title:"완벽하지 않은 날",hasChoice:!0},{stage:5,scriptId:"seoyeon_05",title:"서류 떼러 가는 길",hasChoice:!0},{stage:6,scriptId:"seoyeon_06",title:"대신 맡아줄게요",hasChoice:!0},{stage:7,scriptId:"seoyeon_07",title:"아무도 안 지킨 주",hasChoice:!1},{stage:8,scriptId:"seoyeon_08",title:"발표 전날",hasChoice:!1},{stage:9,scriptId:"seoyeon_09",title:"장부를 넘기던 손",hasChoice:!1},{stage:10,scriptId:"seoyeon_10",title:"마지막 회의",hasChoice:!0}],look:{hair:"#463229",hairStyle:"bun",skin:"#f2d5bd",outfits:["#5c6370","#d8dde6","#9aa5b1"],accent:"#4c6ef5",prop:"안경",face:"oval",eyes:"narrow",bangs:"side",build:"average",accessory:"glasses",wear:["blouse","suit","knit"],propArt:"notebook"}},{id:"rubi",order:7,name:"루비",nickname:"게이머",age:21,job:"게임공학과 1학년",room:"205호",season:"summer",personality:["사랑스러움","장난기","승부욕"],styleLabel:"박자대로 낸다. 띠를 차곡차곡 모아 단을 만든다",backstory:"밤새 게임해도 뭐라 하지 않는 집을 찾아 왔다.",style:{weights:{tti:1.7,hongdan:1.4,cheongdan:1.3,chodan:1.3,pi:.9,gwang:.9},mistakeScale:1,greedScale:1,inferenceScale:1.05,aggressionScale:.9,stopScoreDelta:0},unlock:[{tenantId:"hana",stage:5}],rate:11,reward:{base:46,perStage:8},lines:{matchStart:{low:["안녕하세요. 저 노래하는 루비이에요.","한 판 해요. 저 이거 처음이에요.","시끄러웠으면 미리 죄송해요."],mid:["오늘도 한 곡, 아니 한 판 해요.","합주 끝나고 오는 길이에요.","손 풀고 왔어요. 시작해요."],high:["오늘은 이기고 노래 들려드릴게요.","이 시간 기다렸어요.","먼저 와 계셨네요. 좋다."]},go:{low:["고. 아직 한 소절 남았어요.","고요.","고. 여기서 끊으면 어색해요."],mid:["고. 단 하나만 더 맞추면 돼요.","고. 후렴 전에 멈추는 노래 봤어요?","고. 조금만 더."],high:["고. 끝내기 아까워서요.","고. 오늘은 길게 가요.","고. 아직 하고 싶은 말이 남았어요."]},stop:{low:["스톱. 여기가 끝이에요.","스톱할게요.","여기서 마칠게요."],mid:["스톱. 끝은 깔끔해야 돼요.","여운 남기고 끊는 게 좋아요.","스톱. 딱 여기."],high:["스톱. 오늘은 여기까지가 예뻐요.","여기서 멈추는 게 제일 좋아요.","스톱. 다음 소절은 내일 해요."]},ppeok:{low:["어, 이거 뻑이에요?","박자 놓쳤다.","아 틀렸어요."],mid:["뻑. 한 박자 빨랐네요.","음정은 맞는데 박자가 틀렸어요.","뻑이요. 다시 세어볼게요."],high:["뻑. 선배 보느라 놓쳤어요.","박자 놓친 거 처음이에요. 진짜로.","뻑이네요. 웃지 마세요."]},sseulVictim:{low:["다 가져가셨어요...","제 띠 어디 갔어요?","아 이건 좀."],mid:["쓸렸네요. 잘하시네요.","모아둔 거 한 번에 가시네요.","다시 모으면 돼요."],high:["쓸어가셔도 돼요. 대신 노래 들어주세요.","제 거 가져가신 만큼 오래 앉아 계세요.","괜찮아요. 또 모으면 되니까."]},win:{low:["이겼어요! 저 이겨본 거 처음이에요.","어떡해 이겼다.","이게 되네요?"],mid:["이겼어요. 오늘 소리도 잘 나오더라니.","기분 좋다.","이겼으니까 한 곡 불러도 돼요?"],high:["이겼어요. 오늘 노래는 선배 거예요.","이기면 들려주기로 했잖아요.","이겼는데 왜 이렇게 떨리지."]},lose:{low:["졌어요. 그래도 재밌었어요.","아쉽다.","다음엔 잘할게요."],mid:["졌네요. 연습이 부족했어요.","한 판 더 하고 싶은데.","져도 기분은 안 나빠요."],high:["졌는데 왜 안 아쉽지.","져서 더 오래 앉아 있게 됐네요. 잘됐다.","다음엔 안 져요. 들어주세요."]},affection:{low:["밤에 소리 나면 말해주세요. 줄일게요.","여기 벽이 두꺼워서 좋아요.","이 집 조용해서 오히려 노래가 잘 돼요."],mid:["제 노래 처음 끝까지 들은 사람이에요.","합주실보다 여기가 편해요.","요즘 가사가 잘 써져요. 왜인지 알아요?"],high:["다음 곡은 이 마루 얘기예요.","무대에서보다 여기서 부를 때가 좋아요.","선배 앞에서 부를 때만 목이 안 떨려요."]},hints:["저 띠만 모아요. 홍단 청단 초단 나오면 먼저 가져가세요.","제가 단 하나 남았을 때 고를 질러요. 그때 끊으면 돼요.","띠 아닌 건 잘 안 봐요. 광이랑 열끗은 편하게 가져가세요."]},events:[{stage:1,scriptId:"rubi_01",title:"새벽까지 켜진 모니터",hasChoice:!1},{stage:2,scriptId:"rubi_02",title:"헤드폰을 벗는 시간",hasChoice:!1},{stage:3,scriptId:"rubi_03",title:"팀원이 나갔다",hasChoice:!1},{stage:4,scriptId:"rubi_04",title:"승률이 떨어진다",hasChoice:!0},{stage:5,scriptId:"rubi_05",title:"피시방 원정",hasChoice:!0},{stage:6,scriptId:"rubi_06",title:"한 판만 더",hasChoice:!0},{stage:7,scriptId:"rubi_07",title:"연패",hasChoice:!1},{stage:8,scriptId:"rubi_08",title:"대회 예선 전날",hasChoice:!1},{stage:9,scriptId:"rubi_09",title:"관전석",hasChoice:!1},{stage:10,scriptId:"rubi_10",title:"마지막 한 판",hasChoice:!0}],look:{hair:"#5a3a24",hairStyle:"wave",skin:"#f5dccb",outfits:["#f2d67a","#fff3cf","#e8c95e"],accent:"#ffb347",prop:"마이크",face:"oval",eyes:"round",bangs:"curtain",build:"average",accessory:"ribbon",wear:["knit","cardigan","dress"],propArt:"script"}},{id:"chaea",order:8,name:"채아",nickname:"반항",age:22,job:"사진학과 2학년",room:"303호",season:"summer",personality:["무뚝뚝함","속깊음","시크함"],styleLabel:"광만 쫓는다. 비광까지 끌어모아 5광을 노린다",backstory:"밤에 걸어 다니며 사진을 찍는다. 말은 거의 하지 않는다.",style:{weights:{gwang:2,yeol:1.1,pi:.7,tti:.85},mistakeScale:1,greedScale:1.4,inferenceScale:1,aggressionScale:1,stopScoreDelta:3},unlock:[{tenantId:"nayeon",stage:5}],rate:13,reward:{base:50,perStage:9},lines:{matchStart:{low:["오늘 구름 없어. 좋은 밤이야.","옥상 갔다 왔어. 손이 차가워.","앉아. 별 보러 가기 전에 한 판."],mid:["오늘 목성 보여. 이따 같이 볼래?","밤이 길어서 좋아.","자, 시작하자. 달이 밝네."],high:["네 생각하면서 별 봤어. 이상하지.","오늘은 판 끝나고 옥상 가자.","기다렸어. 밤이 아까워서."]},go:{low:["고. 아직 별이 모자라.","고.","고. 세 개로는 부족해."],mid:["고. 다섯 개 다 모을 거야.","고. 여기서 멈추면 별자리가 안 돼.","고. 나 욕심 많아."],high:["고. 밤이 더 길었으면 해서.","고. 너랑 더 있고 싶어서 그래.","고. 별은 기다리는 사람한테만 보여."]},stop:{low:["스톱.","됐어. 스톱.","스톱. 오늘은 여기까지."],mid:["스톱. 별자리 완성됐어.","스톱. 구름이 오네.","스톱. 딱 좋은 때야."],high:["스톱. 옥상 가자. 지금.","스톱. 오늘 밤은 다른 데 쓰고 싶어.","스톱. 보여주고 싶은 게 있어."]},ppeok:{low:["뻑. 구름 꼈네.","가려졌어. 기다리면 돼.","뻑."],mid:["뻑. 구름은 지나가는 거야.","괜찮아. 별은 안 사라져.","저거 내가 회수해."],high:["뻑. 너 지금 별처럼 웃었어.","뻑인데 왜 기분이 좋지.","가렸네. 그래도 네가 보여."]},sseulVictim:{low:["다 가져갔네. 하늘이 비었어.","쓸었구나.","잘했어."],mid:["아깝다. 저기 광 있었는데.","손이 빠르네. 유성처럼.","인정. 다음엔 안 놔둘게."],high:["또 쓸어. 너 유성우야?","그거 하지 마. 마음이 텅 비어.","멋있었어. 분한데 멋있었어."]},win:{low:["이겼다. 별 보러 갈게.","끝. 잘 자.","이겼어. 오늘 하늘 맑더라."],mid:["이겼다. 광 다 모았어.","봤지? 이게 오광이야.","이겼으니까 옥상 자리 내 거."],high:["이겼는데 왜 안 기쁘지. 판이 끝나서 그런가.","이겼어. 상으로 옥상 같이 가자.","이겼다. 오늘 별보다 네가 더."]},lose:{low:["졌네. 구름이 많았어.","잘 쳤어.","다음 밤에 또 하자."],mid:["졌다. 광이 하나 모자랐어.","아깝다. 진짜 아까워.","한 판 더 하면 다를 텐데."],high:["졌는데 이상하게 좋아.","너한테 지는 밤도 나쁘지 않네.","졌으니까 소원 들어줄게. 말해."]},affection:{low:["옥상 올라갈 건데. 혼자 가긴 좀 그래서.","이거 망원경 렌즈야. 만져볼래?","밤에 안 자는 사람 반가워."],mid:["누구랑 같이 보는 하늘은 다르더라.","혼자 보던 별인데 이제 네 생각이 나.","옥상 자리 하나 비워뒀어. 네 자리야."],high:["나 사실 별 얘기 들어주는 사람 처음이야.","오늘은 하늘 말고 너 볼래.","이 밤이 안 끝났으면 좋겠어."]},hints:["나 광만 봐. 광 바닥에 놓지 마.","비광도 주워. 나한테는 다섯 번째 별이야.","내가 오래 끄는 건 광이 모자라서야. 광박 노려."]},events:[{stage:1,scriptId:"chaea_01",title:"새벽에 나가는 사람",hasChoice:!1},{stage:2,scriptId:"chaea_02",title:"말을 안 하는 건 아니야",hasChoice:!1},{stage:3,scriptId:"chaea_03",title:"필름 카메라",hasChoice:!1},{stage:4,scriptId:"chaea_04",title:"현상에 실패한 밤",hasChoice:!0},{stage:5,scriptId:"chaea_05",title:"야간 산책",hasChoice:!0},{stage:6,scriptId:"chaea_06",title:"너는 찍지 마",hasChoice:!0},{stage:7,scriptId:"chaea_07",title:"사진이 안 나온다",hasChoice:!1},{stage:8,scriptId:"chaea_08",title:"공모전 마감 전날",hasChoice:!1},{stage:9,scriptId:"chaea_09",title:"한 장만 남기고",hasChoice:!1},{stage:10,scriptId:"chaea_10",title:"마지막 셔터",hasChoice:!0}],look:{hair:"#20304a",hairStyle:"wave",skin:"#f0d6c4",outfits:["#2c3e6b","#6b7fb5","#dfe7f5"],accent:"#ffd766",prop:"망원경",face:"slim",eyes:"droopy",bangs:"curtain",build:"petite",accessory:"starpin",wear:["knit","coat","dress"],propArt:"telescope"}},{id:"yerin",order:9,name:"예린",nickname:"힐링",age:22,job:"사회복지학과 2학년",room:"304호",season:"autumn",personality:["다정함","따뜻함","포용력"],styleLabel:"박은 절대 안 쓴다. 손해 나는 수를 두지 않는다",backstory:"남 챙기는 게 버릇이다. 정작 제 얘기는 잘 안 한다.",style:{weights:{pi:1.35,gwang:1.15,yeol:1.15,tti:1.15},mistakeScale:.7,greedScale:.75,inferenceScale:1.3,aggressionScale:.85,stopScoreDelta:-1},unlock:[{tenantId:"hana",stage:5}],rate:15,reward:{base:55,perStage:10},lines:{matchStart:{low:["퇴근했어. 딱 한 시간만.","정산 끝냈어. 이제 이걸 정산할 차례네.","앉으세요. 아, 편하게 해도 돼."],mid:["오늘 야근 없어. 길게 갈 수 있어.","장부 덮고 왔어. 시작하자.","오늘은 좀 이길 것 같은데."],high:["퇴근길 내내 이 생각만 했어.","오늘은 야근 안 했어. 너 때문에.","앉아. 차 내렸어."]},go:{low:["고. 손실 없어.","고 하겠습니다. 아, 반말 반말.","고."],mid:["고. 리스크 확인했어.","고. 최악의 경우도 감당 가능해.","고. 숫자상 문제없어."],high:["고. 이번엔 리스크 좀 져볼래.","고. 이런 거 나답지 않은데.","고. 안 끝냈으면 해서."]},stop:{low:["스톱.","스톱. 여기가 손익분기점이야.","스톱하겠습니다."],mid:["스톱. 광박 확인했고, 마무리할게.","여기서 끊는 게 최선이야. 스톱.","스톱. 회수 완료."],high:["스톱. 대신 차 한 잔 더.","스톱. 오늘은 얘기가 더 좋아서.","스톱. 미안, 급하게 끝냈어."]},ppeok:{low:["뻑. 대손 처리하죠.","뻑이네요. 아, 뻑이네.","장부에 적어둘게."],mid:["뻑. 미수금이라고 생각할게.","회수 가능한 채권이야. 걱정 마.","뻑. 계획엔 있었어."],high:["뻑. 너 앞에서만 이래 진짜.","이상해. 계산이 자꾸 어긋나.","뻑. 웃지 마, 더 틀려."]},sseulVictim:{low:["전액 회수당했네요.","쓸었구나. 잘했어.","깔끔하네. 인정."],mid:["아, 그건 예상 못 했어.","손실 확정. 인정할게.","좋은 수였어. 배웠어."],high:["또 쓸어. 내 장부가 엉망이야.","너 때문에 손익이 안 맞아.","잘하는 거 알겠으니까 그만 좀."]},win:{low:["이겼어요. 아, 이겼어.","수고했어. 잘 자.","정산 끝. 내일 또 출근이네."],mid:["이겼다. 오늘은 흑자야.","박은 안 썼어. 그게 내 원칙이거든.","이겼으니까 세탁기 우선권 내 거."],high:["이겼는데 아쉬워. 벌써 끝나서.","이겼어. 근데 안 일어날래.","이겼으니까 소원. 내일도 기다려줘."]},lose:{low:["졌네요. 아, 졌네.","잘 쳤어. 인정.","다음엔 더 꼼꼼히 볼게."],mid:["졌다. 근데 깔끔하게 졌어.","네가 더 잘 봤어.","재밌었어. 정말로."],high:["졌는데 손해 본 기분이 아니야.","너한테 지는 건 계산에 안 넣었었네.","졌으니까 오늘은 네 말 들을게."]},affection:{low:["저기, 존댓말 아직 어색해? 나는 좀 어색해.","퇴근하고 오면 불 켜져 있는 게 좋더라.","이거 회사에서 받은 건데 남아서."],mid:["나 사실 여기 오면 숨이 좀 쉬어져.","숫자 말고 사람 얘기 하는 게 오랜만이야.","너랑 있으면 퇴근한 기분이 들어."],high:["내 인생에서 계산 안 되는 게 딱 하나 생겼어.","원칙을 깨고 싶어진 건 처음이야.","오늘은 장부 안 볼래. 너만 볼래."]},hints:["나는 박을 절대 안 당해. 그러니까 정공법으로 와.","내가 스톱을 빨리 하는 편이야. 초반에 점수를 벌어.","리스크 없는 수만 둬서 느려. 속도로 눌러."]},events:[{stage:1,scriptId:"yerin_01",title:"괜찮냐고 먼저 묻는 사람",hasChoice:!1},{stage:2,scriptId:"yerin_02",title:"따뜻한 걸 먹이는 버릇",hasChoice:!1},{stage:3,scriptId:"yerin_03",title:"누구한테 기대요?",hasChoice:!1},{stage:4,scriptId:"yerin_04",title:"혼자 우는 밤",hasChoice:!0},{stage:5,scriptId:"yerin_05",title:"봉사 나가는 날",hasChoice:!0},{stage:6,scriptId:"yerin_06",title:"오늘은 제가 챙길게요",hasChoice:!0},{stage:7,scriptId:"yerin_07",title:"다 받아주다 지친 날",hasChoice:!1},{stage:8,scriptId:"yerin_08",title:"실습 평가 전날",hasChoice:!1},{stage:9,scriptId:"yerin_09",title:"기댄 자리",hasChoice:!1},{stage:10,scriptId:"yerin_10",title:"마지막 한마디",hasChoice:!0}],look:{hair:"#33261d",hairStyle:"long",skin:"#f4d8c2",outfits:["#7b8794","#cbd2d9","#b6786a"],accent:"#8b5e3c",prop:"서류 가방",face:"oval",eyes:"sharp",bangs:"side",build:"average",accessory:"earring",wear:["suit","blouse","dress"],propArt:"bag"}},{id:"harin",order:10,name:"하린",nickname:"공대",age:23,job:"기계공학과 4학년",room:"206호",season:"autumn",personality:["똑똑함","엉뚱함","톡톡튐"],styleLabel:"남은 패를 센다. 내가 뭘 들고 있는지 계산해서 막는다",backstory:"졸업설계 때문에 밤을 샌다. 도면 펼 책상이 큰 방이 필요했다.",style:{weights:{gwang:1.2,yeol:1.2,tti:1.1,pi:1},mistakeScale:.75,greedScale:.9,inferenceScale:1.35,aggressionScale:1.1,stopScoreDelta:-1},unlock:[{tenantId:"chaea",stage:5}],rate:18,reward:{base:63,perStage:11},lines:{matchStart:{low:["한 판 하자. 나 하린. 206호.","도면 그만 보고 싶어서 내려왔어.","앉아. 금방 끝내줄게."],mid:["오늘은 몇 수 앞까지 보이는지 보자.","너 패 돌아가는 거 이제 좀 알겠어.","시작하자. 계산 끝났어."],high:["오늘은 계산 안 하고 그냥 둘래.","너랑 두면 이상하게 수가 안 세져.","내려오길 잘했다."]},go:{low:["고. 아직 변수가 남았어.","고.","고. 계산상 이게 맞아."],mid:["고. 네 손에 뭐 있는지 대충 알거든.","고. 확률이 나한테 있어.","고. 여기서 접는 건 손해야."],high:["고. 계산은 안 했어. 그냥 더 있고 싶어서.","고. 오늘은 좀 비효율적으로 갈래.","고. 이유는 묻지 마."]},stop:{low:["스톱. 기대값이 꺾였어.","여기가 최적이야.","스톱. 더 가면 손해."],mid:["스톱. 숫자가 그만하래.","여기서 끊는 게 정답이야.","스톱. 미련 없어."],high:["스톱. 너 피곤해 보여서.","여기까지 하자. 내일 또 있잖아.","스톱. 오늘은 숫자 말고 네 얼굴 봤어."]},ppeok:{low:["뻑. 변수를 하나 빠뜨렸네.","계산 밖이야.","이건 못 봤어."],mid:["뻑. 확률 낮은 쪽이 나왔어.","이래서 설계는 여유를 둬야 해.","뻑이네. 인정."],high:["뻑. 너 보느라 한 줄 빠뜨렸어.","웃지 마. 나도 틀릴 때 있어.","뻑. 이번 건 진짜 몰랐어."]},sseulVictim:{low:["쓸어갔네. 분포가 이상하다.","그건 예상 못 했어.","다음엔 막을게."],mid:["쓸. 네가 그걸 들고 있을 확률은 낮았는데.","설계가 틀렸네.","좋아. 데이터 하나 늘었어."],high:["쓸어가면서 그렇게 웃으면 반칙이야.","기록해둘게. 복수용으로.","괜찮아. 어차피 야식 네가 사잖아."]},win:{low:["이겼다. 계산대로.","예상 범위 안이야.","이겼네."],mid:["이겼어. 세 수 전에 정해진 거야.","너 패턴이 있어. 알려줄까?","이겼다. 오늘 머리 잘 돌아가네."],high:["이겼는데 별로 안 기쁘네. 이상하다.","이겼으니까 야식 사줄게.","이겼어. 근데 판 끝나는 게 아쉽다."]},lose:{low:["졌어. 어디서 틀렸지.","다시 계산해볼게.","졌네. 분하다."],mid:["졌어. 네가 나보다 한 수 앞섰어.","인정. 오늘은 네가 맞았어.","복기하자. 어디서 갈렸는지."],high:["졌는데 기분이 나쁘지가 않아. 왜지.","너한테 지는 건 좀 괜찮네.","졌으니까 오늘 야식은 내가 살게."]},affection:{low:["나 밤에 도면 펴놔도 되지?","이 집 책상이 커서 왔어.","말 시켜도 돼. 어차피 집중 안 돼."],mid:["졸업설계 주제 바꿨어. 하숙집으로.","네 방 창문 크기 재도 돼?","혼자 밤새우는 것보다 낫다."],high:["설계 모형에 마루를 넣었어. 방석 열 개까지.","도면에 사람 그려 넣은 거 처음이야.","밤새우는 이유가 도면이 아니게 됐어."]},hints:["나 계산 잘해. 같은 월 세 장 이상 있으면 흔들어서 흔들어.","내가 안 내는 월이 있으면 그건 너 노리는 거야.","나 스톱이 빨라. 점수 빨리 올려서 먼저 끊어."]},events:[{stage:1,scriptId:"harin_01",title:"206호는 불이 안 꺼진다",hasChoice:!1},{stage:2,scriptId:"harin_02",title:"도면 위의 밥그릇",hasChoice:!1},{stage:3,scriptId:"harin_03",title:"야식 원정대",hasChoice:!0},{stage:4,scriptId:"harin_04",title:"설계 반려",hasChoice:!0},{stage:5,scriptId:"harin_05",title:"모형 만들기",hasChoice:!0},{stage:6,scriptId:"harin_06",title:"치수 재도 돼?",hasChoice:!0},{stage:7,scriptId:"harin_07",title:"밤샘 사흘째",hasChoice:!1},{stage:8,scriptId:"harin_08",title:"최종 심사 전날",hasChoice:!0},{stage:9,scriptId:"harin_09",title:"모형 속 마루",hasChoice:!1},{stage:10,scriptId:"harin_10",title:"사람이 사는 집",hasChoice:!0}],look:{hair:"#2e2432",hairStyle:"bun",skin:"#f2d8c8",outfits:["#b39ddb","#ede7f6","#9575cd"],accent:"#7e57c2",prop:"샤프",face:"oval",eyes:"sharp",bangs:"wispy",build:"tall",accessory:"hairpin",wear:["hoodie","shirt","coat"],propArt:"notebook"}},{id:"sora",order:11,name:"소라",nickname:"패션",age:22,job:"의상디자인과 2학년",room:"305호",season:"autumn",personality:["도도함","시크함","화려함"],styleLabel:"표정과 대사로 흔든다. 고를 외쳐도 진짜인지 알 수 없다",backstory:"옷을 만든다. 비싸 보이는 것과 좋은 것은 다르다고 말한다.",style:{weights:{tti:1.25,yeol:1.2,godori:1.2,pi:1.05},mistakeScale:.85,greedScale:1.45,inferenceScale:1.15,aggressionScale:1.25,stopScoreDelta:2},unlock:[{tenantId:"seoyeon",stage:5}],rate:21,reward:{base:70,perStage:12},lines:{matchStart:{low:["등장. 오늘의 상대역, 잘 부탁해.","대본 외우다 왔어. 머리 좀 식히자.","자, 1막 시작."],mid:["오늘 내 연기 잘 봐. 어디까지가 진짜일까?","무대 조명은 없지만 분위기는 내야지.","시작하자. 관객은 없지만."],high:["오늘은 연기 안 할게. 진짜로.","너한테는 안 통하더라, 내 연기.","앉아. 오늘 대사는 다 진심이야."]},go:{low:["고! ...일까?","고. 표정 읽지 마.","고야. 놀랐어?"],mid:["고. 근데 내가 진짜 좋은 패일까?","고! 이 대사 연습 많이 했어.","고. 너 지금 흔들렸지."],high:["고. 이번엔 진심이야. 진짜로.","고. 네 앞에선 연기가 안 돼.","고. 판 끝나는 게 싫어서."]},stop:{low:["스톱. 막 내립니다.","스톱! 커튼콜.","여기서 끊을게. 스톱."],mid:["스톱. 좋은 장면은 짧아야 해.","스톱. 여운을 남기는 게 연기야.","스톱. 다음 막을 기대해."],high:["스톱. 대사 말고 그냥 얘기하고 싶어.","스톱. 오늘은 무대 밖에 있고 싶어.","스톱. 연기 그만할래."]},ppeok:{low:["뻑! 이건 대본에 없었는데.","애드리브 들어갑니다.","뻑이네. 연출 실수."],mid:["뻑. 이것도 연기라고 해줄래?","묶였네. 2막에서 회수할게.","뻑. 이 표정 어때? 자연스러워?"],high:["뻑. 지금 표정은 진짜야.","야, 웃지 마. 연기 무너져.","뻑. 네 앞에서만 이래."]},sseulVictim:{low:["무대를 통째로 가져갔네.","쓸었어. 주연 자리 뺏겼다.","인정. 좋은 씬이었어."],mid:["아깝다. 저기 내 소품 있었는데.","그 장면 잘 나왔어. 인정.","다음 막엔 안 뺏겨."],high:["또 쓸어? 너 진짜 주연 하지.","그거 멋있는 거 알고 하는 거지?","심장 떨어지는 줄. 연기 아니야."]},win:{low:["막 내립니다. 박수는?","이겼어. 오늘 공연 끝.","수고했어, 상대역."],mid:["이겼다! 이번 막은 내 거야.","연기 좀 했지? 어디까지 속았어?","이겼으니까 욕실 순번 내 거."],high:["이겼는데 커튼콜이 안 즐겁네.","이겼어. 근데 안 나갈래. 무대에 더 있고 싶어.","이겼으니까 소원. 내일도 내 관객 해줘."]},lose:{low:["졌네. 오늘은 네가 주연.","잘 쳤어. 인정.","2막을 기대해."],mid:["졌다. 근데 좋은 장면이었어.","너 연기 안 하는데 왜 못 읽겠지.","다음 공연에서 보자."],high:["졌어. 근데 하나도 안 억울해.","너한테 지는 건 대본에 있었나 봐.","졌으니까 오늘 대사는 네가 정해."]},affection:{low:["대사 좀 받아줄래? 상대역이 없어서.","나 혼자 연습하면 이상하거든.","관객 한 명만 있어도 다르더라."],mid:["너 볼 때는 연기가 잘 안 돼.","무대 밖의 나도 봐주는 사람은 처음이야.","박수 안 쳐도 돼. 그냥 있어줘."],high:["나 사실 무대 내려오면 되게 조용해.","연기 말고 진짜 나를 보여준 적이 없었어.","오늘은 대본 없이 말할게."]},hints:["내 고는 반은 뻥이야. 점수 세어보면 알아.","표정 보지 마. 바닥을 봐.","내가 흔들 때는 진짜 좋은 패일 때가 적어."]},events:[{stage:1,scriptId:"sora_01",title:"복도에 걸린 옷",hasChoice:!1},{stage:2,scriptId:"sora_02",title:"싼 옷을 입지 않는 이유",hasChoice:!1},{stage:3,scriptId:"sora_03",title:"시침핀",hasChoice:!1},{stage:4,scriptId:"sora_04",title:"맞지 않는 치수",hasChoice:!0},{stage:5,scriptId:"sora_05",title:"원단 시장",hasChoice:!0},{stage:6,scriptId:"sora_06",title:"한 벌만 만들어줘",hasChoice:!0},{stage:7,scriptId:"sora_07",title:"런웨이에서 넘어졌다",hasChoice:!1},{stage:8,scriptId:"sora_08",title:"졸업 패션쇼 전날",hasChoice:!1},{stage:9,scriptId:"sora_09",title:"무대 뒤",hasChoice:!1},{stage:10,scriptId:"sora_10",title:"마지막 한 벌",hasChoice:!0}],look:{hair:"#5a2230",hairStyle:"wave",skin:"#f6d9c6",outfits:["#b23a55","#f0c6d0","#2b2b3a"],accent:"#d94f6e",prop:"대본",face:"oval",eyes:"round",bangs:"split",build:"average",accessory:"earring",wear:["dress","cardigan","hanbok"],propArt:"script"}},{id:"dabin",order:12,name:"다빈",nickname:"여신",age:22,job:"유아교육과 2학년",room:"307호",season:"autumn",personality:["조용함","다정함","청순함"],styleLabel:"위험하면 일찍 접는다. 작게, 여러 번 이긴다",backstory:"실습 유치원이 가까워서 왔다고 했지만, 사실은 혼자가 무서웠다.",style:{weights:{pi:1.2,tti:1.1,yeol:1,gwang:.9},mistakeScale:.85,greedScale:.45,inferenceScale:1.2,aggressionScale:.6,stopScoreDelta:-3},unlock:[{tenantId:"yerin",stage:5}],rate:25,reward:{base:80,perStage:13},lines:{matchStart:{low:["아, 안녕하세요... 다빈이에요.","한 판... 해도 될까요?","저 잘 못해요. 미리 말씀드려요."],mid:["오늘도 한 판 해요. 기다렸어요.","이 시간이 제일 편해요.","천천히 해요. 급할 것 없잖아요."],high:["오늘도 같이 있어주실 거죠?","먼저 와 계셨네요. 좋다.","한 판 해요. 오래 걸려도 괜찮아요."]},go:{low:["고... 해도 될까요?","고요. 조금만 더.","고... 무섭지만 해볼게요."],mid:["고. 오늘은 용기 내볼래요.","고요. 여기서 접으면 아쉬워서.","고. 한 번만 더."],high:["고. 판 끝나면 올라가야 하잖아요.","고요. 조금만 더 있고 싶어요.","고. 오늘은 안 무서워요."]},stop:{low:["스톱이요. 무서워서요.","여기서 멈출게요.","스톱... 죄송해요."],mid:["스톱. 욕심 안 부릴래요.","이 정도면 충분해요.","스톱할게요. 작게 이기는 게 좋아요."],high:["스톱. 늦으면 안 되잖아요.","여기까지 해요. 내일도 있으니까.","스톱이요. 오늘은 안 아쉬워요."]},ppeok:{low:["어떡해, 뻑이에요?","제가 또 잘못했어요...","죄송해요. 이거 어떻게 해요."],mid:["뻑이네요. 조심한다고 했는데.","아... 이건 예상 못 했어요.","뻑. 괜찮아요, 아직 안 끝났으니까."],high:["뻑. 웃지 마세요, 부끄러워요.","이럴 때 좀 알려주시지.","뻑이요. 그래도 오늘은 안 울어요."]},sseulVictim:{low:["아... 다 가져가시는구나.","제 피...","괜찮아요. 괜찮아요."],mid:["쓸렸네요. 잘하시네요.","이럴 줄 알았으면 일찍 접을걸.","다시 모으면 되죠."],high:["쓸어가셔도 돼요. 대신 더 오래 앉아 계세요.","제 거 가져가신 거 기억할 거예요.","괜찮아요. 같이 있는 게 더 좋으니까."]},win:{low:["어? 제가 이겼어요?","이겼다... 진짜요?","이겨도 되는 건가요?"],mid:["이겼어요. 조심한 보람이 있네요.","작게 이겼어요. 그게 제 방식이에요.","이겼다. 기분 좋아요."],high:["이겼어요. 근데 하나도 안 기뻐요, 끝나니까.","이겼으니까 한 판 더 해요. 네?","이겼는데 왜 아쉽지."]},lose:{low:["졌어요. 그럴 줄 알았어요.","역시 저는 안 되나 봐요.","졌네요. 죄송해요."],mid:["졌어요. 그래도 재밌었어요.","다음엔 조금 더 버텨볼게요.","졌지만 괜찮아요."],high:["졌어요. 근데 하나도 안 분해요.","지는 것도 나쁘지 않네요.","져도 같이 있었으니까 됐어요."]},affection:{low:["밤에 복도 불 좀 켜두면 안 될까요.","저 사실 혼자 있는 거 무서워해요.","여기 사람 소리 나서 좋아요."],mid:["아이들한테 이 집 얘기 했어요.","요즘 복도 불 없어도 괜찮아요.","마루에 불 켜져 있으면 안심이 돼요."],high:["무서운 게 없어졌어요. 이유는 아시죠.","다락 창문에서 마루 불빛이 보여요. 그거 보고 자요.","혼자가 무서웠던 게 아니었나 봐요."]},hints:["저 겁이 많아서 빨리 접어요. 점수 천천히 올려도 돼요.","제가 고를 안 하니까 길게 끌면 유리해요.","저는 피를 모아요. 쌍피 먼저 가져가세요."]},events:[{stage:1,scriptId:"dabin_01",title:"삼층 끝 방에 불이 켜졌다",hasChoice:!1},{stage:2,scriptId:"dabin_02",title:"복도 등",hasChoice:!1},{stage:3,scriptId:"dabin_03",title:"유치원 실습",hasChoice:!0},{stage:4,scriptId:"dabin_04",title:"아이가 그린 집",hasChoice:!0},{stage:5,scriptId:"dabin_05",title:"무서운 밤",hasChoice:!0},{stage:6,scriptId:"dabin_06",title:"그림책 읽어주기",hasChoice:!0},{stage:7,scriptId:"dabin_07",title:"가을 운동회",hasChoice:!1},{stage:8,scriptId:"dabin_08",title:"실습 마지막 날",hasChoice:!0},{stage:9,scriptId:"dabin_09",title:"다락 창문",hasChoice:!1},{stage:10,scriptId:"dabin_10",title:"불빛",hasChoice:!0}],look:{hair:"#4a3324",hairStyle:"bun",skin:"#f7e0cf",outfits:["#fbf3e4","#f0e2c8","#e8d5b0"],accent:"#a8d5ba",prop:"그림책",face:"round",eyes:"droopy",bangs:"split",build:"petite",accessory:"none",wear:["knit","cardigan","dress"],propArt:"sketchbook"}},{id:"gain",order:13,name:"가인",nickname:"안경",age:23,job:"문헌정보학과 4학년",room:"306호",season:"autumn",personality:["차분함","똑부러짐","지적임"],styleLabel:"네 손패를 읽는다. 흔들기와 폭탄을 서슴없이 쓴다",backstory:"도서관에서 살다시피 한다. 일정표 없이는 하루가 안 굴러간다.",style:{weights:{gwang:1.25,tti:1.2,yeol:1.2,pi:1.1},mistakeScale:.6,greedScale:1.15,inferenceScale:1.4,aggressionScale:1.6,stopScoreDelta:0},unlock:[{tenantId:"chaea",stage:5}],rate:29,reward:{base:89,perStage:15},lines:{matchStart:{low:["오랜만이네, 후배. 앉아.","채점 끝났어. 이제 널 채점할 차례야.","손 좀 보자. 아, 패 말고 손."],mid:["오늘은 네가 뭘 노리는지 맞혀볼게.","앉아. 커피는 내가 샀어.","슬슬 시작할까."],high:["기다렸어. 오늘 좀 늦었네.","선배 노릇 그만하고 싶어지는 밤이야.","앉아. 오늘은 봐줄 생각 없어."]},go:{low:["고.","고 할게. 네 손에 뭐 있는지 알거든.","고. 여유 있어."],mid:["고. 너 방금 망설였지.","고. 네 손에 8월 남았잖아.","고. 아직 안 끝났어."],high:["고. 오늘 밤이 짧아서.","고. 이 판이 끝나면 네가 갈 거잖아.","고. 선배 욕심이라고 해두자."]},stop:{low:["스톱. 정리하자.","여기까지. 스톱.","스톱. 충분해."],mid:["스톱. 네 다음 수가 보여서.","스톱. 더 가면 네가 뒤집어.","스톱. 깔끔한 게 좋아."],high:["스톱. 오늘은 얘기가 하고 싶어서.","스톱. 판보다 네가 궁금해.","스톱. 선배가 먼저 접을게."]},ppeok:{low:["뻑. 그럴 수도 있지.","묶였네. 오래 안 갈 거야.","뻑."],mid:["뻑. 네가 저거 못 먹을 걸 아니까 괜찮아.","회수는 내 몫이지.","뻑. 계산에 있었어."],high:["뻑. 너 앞에서 체면 다 깎이네.","웃지 마. 선배 체면이 있지.","뻑. 오늘 왜 이러지 진짜."]},sseulVictim:{low:["쓸었네. 제법이야.","잘했어, 후배.","인정. 그건 좋은 수였어."],mid:["언제 이렇게 늘었어?","가르친 적 없는데 잘하네.","다음엔 안 놔둘게."],high:["또 쓸어. 이제 내가 배워야겠네.","너한테 쓸릴 줄이야.","잘한다. 얄미울 만큼."]},win:{low:["이겼다. 잘 배웠지?","수고했어. 다음엔 더 붙어봐.","끝. 들어가서 자."],mid:["이겼다. 아직 선배야.","흔들기 맛 좀 봤지?","이겼으니까 내일 조교실 커피는 네가."],high:["이겼는데 아쉽네. 벌써 끝이라서.","이겼어. 근데 안 보낼래.","이겼으니까 소원. 선배 말고 이름으로 불러봐."]},lose:{low:["졌네. 잘 쳤어.","인정. 오늘은 네가 나았어.","다음엔 안 봐줘."],mid:["졌다. 후배한테 지는 날도 오네.","네 수를 못 읽었어. 드문 일이야.","재밌었어. 정말로."],high:["졌어. 근데 하나도 안 분해.","너한테 지는 건 왜 이렇게 기분이 좋지.","졌으니까 오늘은 네가 선배 해."]},affection:{low:["후배, 시간 좀 있어? 아니 그냥.","조교실 커피가 남아서 가져왔어.","요즘 어때. 진짜로 묻는 거야."],mid:["선배 소리 들으면 거리감이 생기더라.","너랑 얘기하면 나이 생각이 안 나.","가끔은 나도 기대고 싶어."],high:["나 선배 노릇 그만하고 싶어졌어.","이름으로 불러줄래? 가인라고.","오늘은 후배 말고 그냥 너랑 있고 싶어."]},hints:["나는 네 손패를 세고 있어. 낸 패를 섞어.","내가 흔들면 진짜야. 그때는 빨리 끝내.","폭탄 맞기 싫으면 같은 월 세 장 안 남기게 유도해."]},events:[{stage:1,scriptId:"gain_01",title:"도서관이 닫는 시간",hasChoice:!1},{stage:2,scriptId:"gain_02",title:"일정표에 없는 시간",hasChoice:!1},{stage:3,scriptId:"gain_03",title:"연체된 책",hasChoice:!1},{stage:4,scriptId:"gain_04",title:"계획이 무너진 날",hasChoice:!0},{stage:5,scriptId:"gain_05",title:"서고 정리",hasChoice:!0},{stage:6,scriptId:"gain_06",title:"오늘은 계획 없이",hasChoice:!0},{stage:7,scriptId:"gain_07",title:"아무것도 못 읽은 주",hasChoice:!1},{stage:8,scriptId:"gain_08",title:"임용 시험 전날",hasChoice:!1},{stage:9,scriptId:"gain_09",title:"대출 기록",hasChoice:!1},{stage:10,scriptId:"gain_10",title:"마지막 대출",hasChoice:!0}],look:{hair:"#241c17",hairStyle:"braid",skin:"#f1d4bb",outfits:["#8c6f4e","#d8c3a5","#4a3f35"],accent:"#b07d3f",prop:"머그컵",face:"round",eyes:"droopy",bangs:"side",build:"average",accessory:"hairpin",wear:["cardigan","knit","hanbok"],propArt:"mug"}},{id:"minji",order:14,name:"민지",nickname:"옆집",age:22,job:"간호학과 2학년",room:"308호",season:"winter",personality:["다정함","배려심","따뜻함"],styleLabel:"상대를 본다. 내가 뭘 노리는지 먼저 알아챈다",backstory:"옆방 선배. 실습 끝나고 돌아오면 늘 마루에 불이 켜져 있었다.",style:{weights:{yeol:1.3,godori:1.5,tti:1.1,pi:1,gwang:1},mistakeScale:.65,greedScale:.7,inferenceScale:1.45,aggressionScale:.9,stopScoreDelta:-2},unlock:[{tenantId:"sora",stage:5}],rate:32,reward:{base:97,perStage:16},lines:{matchStart:{low:["한 판 할래요? 저 방금 실습 끝났어요.","안 자고 뭐 해요. 앉아요.","새벽에 깨어 있는 사람끼리 해요."],mid:["오늘도 하네요. 이 시간에.","얼굴 보니까 오늘 잘 안 풀렸죠.","앉아요. 한 판만."],high:["기다렸어요. 오늘 좀 늦었네요.","이 시간이 하루 중에 제일 좋아요.","한 판 해요. 얘기는 그다음에."]},go:{low:["고.","고요. 아직 볼 게 남았어요.","고. 지금 접기엔 일러요."],mid:["고. 당신 손에 뭐가 없는지 알겠거든요.","고. 아직 안 위험해요.","고요."],high:["고. 판이 길어야 오래 앉아 있잖아요.","고. 오늘은 안 재고 갈래요.","고요. 이유는 알 거예요."]},stop:{low:["스톱. 여기가 끝이에요.","스톱할게요.","더 가면 위험해요."],mid:["스톱. 당신이 뒤집을 패를 들고 있어요.","여기서 끊는 게 맞아요.","스톱. 욕심은 사고로 이어져요."],high:["스톱. 당신 피곤해 보여요.","오늘은 여기까지. 좀 자요.","스톱이요. 내일도 여기 있을 거니까."]},ppeok:{low:["뻑이네요.","이건 못 읽었어요.","뻑. 드물게 틀렸네요."],mid:["뻑. 당신이 그걸 들고 있을 줄은.","읽었는데도 낼 게 없었어요.","뻑이요. 어쩔 수 없었어요."],high:["뻑. 당신 보느라 놓쳤어요.","이런 실수 잘 안 하는데.","뻑. 오늘은 좀 흐트러졌네요."]},sseulVictim:{low:["쓸었네요.","그건 예상했어요. 못 막았을 뿐이에요.","잘하시네요."],mid:["쓸. 제가 흘린 거예요.","알면서 내줬어요. 다음을 위해서.","괜찮아요. 판은 길어요."],high:["쓸어가는 얼굴이 제일 좋네요.","그거 가져가려고 기다린 거 다 알아요.","괜찮아요. 그거 보려고 흘렸어요."]},win:{low:["이겼어요.","이겼네요. 운도 있었어요.","끝났어요."],mid:["이겼어요. 세 수 전부터 보였어요.","당신 패는 읽기 쉬워요.","이겼어요. 오늘은 여기까지."],high:["이겼는데 왜 아쉽죠.","이겼으니까 좀 더 앉아 있어요.","이겼어요. 근데 끝내기 싫네요."]},lose:{low:["졌어요. 인정할게요.","제가 못 읽었네요.","졌어요. 다음엔 안 그래요."],mid:["졌어요. 오늘은 당신이 안 읽혔어요.","이럴 때가 있어야 재밌죠.","졌네요. 기분 나쁘진 않아요."],high:["졌어요. 일부러는 아니에요. 진짜로.","당신한테 지는 건 괜찮아요.","졌는데 왜 웃고 있지."]},affection:{low:["새벽에 불 켜져 있어서 들어왔어요.","저 말수 적은 거 신경 쓰지 마세요.","여기 조용해서 좋아요."],mid:["당신 피곤할 때 표정이 있어요. 알아요?","오늘은 물 한 잔 떠다 놨어요.","저 원래 사람 잘 안 봐요. 이상하네요."],high:["실습 끝나고 돌아올 데가 생겼어요.","새벽에 불 켜두는 사람이 저만이 아니라서 좋아요.","읽히는 건 저도 마찬가지였나 봐요."]},hints:["저 추론이 세요. 같은 월 두 장 들고 있으면 안 내는 게 나아요.","제가 안 내는 월은 당신이 노리는 월이에요.","저 고도리를 모아요. 새 나오면 먼저 가져가세요."]},events:[{stage:1,scriptId:"minji_01",title:"새벽 세 시의 불빛",hasChoice:!1},{stage:2,scriptId:"minji_02",title:"물 한 잔",hasChoice:!1},{stage:3,scriptId:"minji_03",title:"야간 실습",hasChoice:!0},{stage:4,scriptId:"minji_04",title:"손이 떨리는 날",hasChoice:!0},{stage:5,scriptId:"minji_05",title:"환자 이야기",hasChoice:!0},{stage:6,scriptId:"minji_06",title:"국가고시 D-100",hasChoice:!0},{stage:7,scriptId:"minji_07",title:"잠 못 드는 밤",hasChoice:!1},{stage:8,scriptId:"minji_08",title:"면접 전날",hasChoice:!0},{stage:9,scriptId:"minji_09",title:"첫 출근",hasChoice:!1},{stage:10,scriptId:"minji_10",title:"돌아올 데",hasChoice:!0}],look:{hair:"#241c18",hairStyle:"straight",skin:"#f3dbc9",outfits:["#b8cbe8","#eaf1fb","#8fa9cc"],accent:"#6f93c9",prop:"차트",face:"oval",eyes:"narrow",bangs:"side",build:"average",accessory:"earring",wear:["knit","blouse","coat"],propArt:"mug"}},{id:"arin",order:15,name:"아린",nickname:"우아",age:23,job:"미술사학과 4학년",room:"별채",season:"winter",personality:["우아함","여유로움","고혹적임"],styleLabel:"판 전체가 보인다. 그리고 네 습관까지 기억한다",backstory:"별채에 산다. 이 집에서 제일 오래된 사람이고, 제일 말이 적다.",style:{weights:{gwang:1.3,yeol:1.3,tti:1.3,pi:1.3,godori:1.2},mistakeScale:.3,greedScale:1,inferenceScale:1.5,aggressionScale:1.3,stopScoreDelta:-1},unlock:[{tenantId:"yerin",stage:5},{tenantId:"sora",stage:5},{tenantId:"gain",stage:5}],rate:35,reward:{base:104,perStage:17},lines:{matchStart:{low:["앉아.","이 마루에서 삼십 년 동안 판이 돌았어.","네 차례가 올 줄 알았어."],mid:["오늘은 네가 먼저 내.","많이 늘었네. 누가 가르쳤어?","겨울 판은 길어. 각오해."],high:["기다렸어. 오래.","이 판이 끝나면 할 얘기가 있어.","앉아. 마지막 겨울이야."]},go:{low:["고.","고. 아직이야.","고. 서두르지 마."],mid:["고. 네 손에 뭐가 남았는지 알아.","고. 여기서 끝내면 아무것도 안 남아.","고."],high:["고. 이 밤을 늘리고 싶어서.","고. 끝나는 게 두려운 건 처음이야.","고. 이유는 다 알잖아."]},stop:{low:["스톱.","여기까지.","스톱. 충분해."],mid:["스톱. 네가 뒤집기 전에.","스톱. 다음 판이 더 중요해.","스톱."],high:["스톱. 이제 얘기하자.","스톱. 판은 끝나도 밤은 안 끝나.","스톱. 미안, 급해졌어."]},ppeok:{low:["뻑.","...묶였군.","괜찮아."],mid:["뻑. 삼십 년 만에 처음 같은데.","저건 회수해.","뻑. 드문 일이야."],high:["뻑. 너 앞에서만 이래.","이상하지. 손이 떨렸어.","뻑. 웃어도 돼."]},sseulVictim:{low:["쓸었군.","...제법이야.","잘했어."],mid:["그 수는 못 봤어. 오랜만이야.","너한테 배울 게 생겼네.","다음엔 안 놔둬."],high:["또 쓸어. 내가 지는 게 이렇게 반가울 줄이야.","너는 매번 나를 놀라게 해.","잘했어. 진심으로."]},win:{low:["끝났어. 들어가서 자.","아직 멀었어.","이겼다. 다시 와."],mid:["이겼어. 근데 예전보다 어려웠어.","네가 강해졌다는 뜻이야.","이겼으니 오늘은 여기까지."],high:["이겼는데 하나도 안 기뻐.","이겼어. 그런데 가지 마.","이겼으니 소원 하나. 내일도 와줘."]},lose:{low:["졌군. ...오랜만이야.","잘했어. 진심으로.","다시 해."],mid:["졌다. 삼십 년 만에 처음이야, 이런 기분.","네가 이 판을 가져갔어.","이 마루의 다음 차례는 너야."],high:["졌어. 그리고 기뻐. 이상하지.","누군가한테 지고 싶었던 건 처음이야.","이제 나도 이 집을 떠날 수 있겠네."]},affection:{low:["이 집에 대해 얼마나 알아?","삼십 년이면 긴 시간이야.","네 할머니가 처음 이 마루를 깔던 날을 기억해."],mid:["나는 여기서 계속 누군가를 기다렸어.","겨울은 늘 혼자 났어. 올해는 다르네.","이 집이 나한테 뭐였는지 이제 알 것 같아."],high:["나는 이기려고 여기 있었던 게 아니야.","이 판을 끝내줄 사람을 기다렸어.","오늘 밤이 마지막이어도 괜찮아. 네가 있으니까."]},hints:["네 최근 스무 판을 기억해. 습관을 바꿔.","나는 남은 패를 다 세. 안 보이는 수를 둬.","정공법으로는 안 돼. 흔들기든 폭탄이든 써."]},events:[{stage:1,scriptId:"arin_01",title:"별채에 불이 켜진다",hasChoice:!1},{stage:2,scriptId:"arin_02",title:"서두르지 않는 사람",hasChoice:!1},{stage:3,scriptId:"arin_03",title:"찻물 끓는 소리",hasChoice:!1},{stage:4,scriptId:"arin_04",title:"기다리는 데 익숙한 사람",hasChoice:!0},{stage:5,scriptId:"arin_05",title:"야경 보러 가는 길",hasChoice:!0},{stage:6,scriptId:"arin_06",title:"오래된 그림 이야기",hasChoice:!0},{stage:7,scriptId:"arin_07",title:"아무도 오지 않은 밤",hasChoice:!1},{stage:8,scriptId:"arin_08",title:"졸업 논문 전날",hasChoice:!1},{stage:9,scriptId:"arin_09",title:"천천히 온 사람",hasChoice:!1},{stage:10,scriptId:"arin_10",title:"마지막 잔",hasChoice:!0}],look:{hair:"#15161c",hairStyle:"long",skin:"#ecd8cb",outfits:["#2b2f3a","#6d7280","#c8ccd6"],accent:"#9aa7c7",prop:"낡은 화투갑",face:"slim",eyes:"narrow",bangs:"curtain",build:"tall",accessory:"none",wear:["coat","knit","hanbok"],propArt:"hwatu"}}],wm={tenants:$m},vm={gwang:1,yeol:1,tti:1,pi:1,godori:1,hongdan:1,cheongdan:1,chodan:1},xm=10;function km(e,n,t=xm){const r=t>1?(e-1)/(t-1):0,i=(n-1)/9,l=Math.min(1,.5*r+.5*i);return{mistakeRate:.7*Math.pow(1-l,.7),inference:l,greed:.8-.68*l,stopScore:Math.round(11-4*l),patternLearning:Math.max(0,(l-.8)*5),aggression:.2+.5*l,weights:{...vm}}}function bm(e,n){return{...e,...n,weights:{...e.weights,...n.weights??{}}}}const Sm=wm,qe=Sm.tenants;function qr(e){const n=qe.find(t=>t.id===e);if(!n)throw new Error(`unknown tenant: ${e}`);return n}function ec(e){return e<=30?"low":e<=70?"mid":"high"}const _m=.55,Lu=e=>1+((e??1)-1)*_m;function jm(e,n){const t=km(e.order,n,qe.length),r=e.style;return bm(t,{mistakeRate:Yi(t.mistakeRate*Lu(r.mistakeScale)),inference:Yi(t.inference*Lu(r.inferenceScale)),greed:Yi(t.greed*(r.greedScale??1)),aggression:Yi(t.aggression*(r.aggressionScale??1)),stopScore:Math.max(7,t.stopScore+(r.stopScoreDelta??0)),weights:r.weights})}function Yi(e){return Math.max(0,Math.min(1,e))}function Th(e,n){return e.reward.base+e.reward.perStage*(n-1)}function Ph(e){return e.rate*10}function hr(e,n){return e.unlock.length===0?!0:e.unlock.every(t=>(n[t.tenantId]??0)>=t.stage)}function Iu(e){return e.unlock.length===0?"처음부터 승부 가능":e.unlock.map(n=>`${qr(n.tenantId).name} ${n.stage}단계 클리어`).join(" + ")}const Cm=`# 아린 (우아) - 겨울 / 15번 하숙생

=== arin_01 | 별채에 불이 켜진다
@bg annex night
@bgm winter
@outfit 0
* 마당 끝 별채에는 밤마다 불이 켜졌다. 반년 동안 한 번도 물어보지 못했다.
* 그날은 문이 열려 있었다.
아린 [기본] 들어와요. 문 열어둔 건 그 뜻이에요.
* 방 안에는 낮은 상 하나와 찻주전자가 있었다. 그리고 오래된 그림이 벽에 걸려 있었다.
아린 [기본] 아린이에요. 별채에 살아요.
나 [놀람] ...반년 동안 한 번도 못 뵀는데요.
아린 [웃음] 봤어요. 매일 밤 마루에 불 켜는 거.
나 [기본] 저는 못 봤는데요.
아린 [기본] 나는 늦게 나오고 일찍 들어가니까요.
* 아린은 잔을 두 개 꺼냈다.
아린 [기본] 서두르지 말아요. 좋은 시간은 천천히 즐겨야 하니까.
아린 [기본] 앉아요. 첫 판은 내가 져 줄게요.
@affection 10
@end

=== arin_02 | 서두르지 않는 사람
@bg annex night
@bgm winter
* 아린은 패를 낼 때 한 번도 서두르지 않았다.
나 [기본] 생각이 기시네요.
아린 [웃음] 생각하는 게 아니에요. 그냥 기다리는 거예요.
나 [놀람] 뭘 기다려요?
아린 [기본] 좋은 패는 급할 때 안 와요. 급하지 않을 때 와요.
* 그날 아린은 마지막 세 판을 내리 이겼다.
나 [기본] 져 준다면서요.
아린 [웃음] 첫 판만요. 첫 판은 인사잖아요.
나 [웃음] 그런 인사가 어딨어요.
아린 [기본] 이 집에 있어요. 삼십 년째요.
나 [놀람] ...삼십 년이요?
아린 [기본] 그 얘기는 천천히요.
@affection 10
@end

=== arin_03 | 찻물 끓는 소리
@bg annex night
@bgm winter
* 아린은 물이 끓는 동안 아무 말도 하지 않았다.
나 [기본] 조용하네요.
아린 [기본] 물 끓는 소리 듣는 거예요.
나 [놀람] 그걸 듣는 사람이 있어요?
아린 [웃음] 있어요. 소리가 세 번 바뀌어요.
* 정말로 소리가 세 번 바뀌었다.
아린 [기본] 처음엔 바닥에서 나고, 그다음엔 전체에서 나고, 마지막엔 잦아들어요.
아린 [기본] 잦아들 때가 제일 좋은 때예요.
나 [기본] 그때 따르는 거예요?
아린 [기본] 네. 그보다 이르면 떫고, 늦으면 밍밍해요.
아린 [부끄러움] ...혼자 들을 땐 몰랐는데, 설명하려니까 길어지네요.
@affection 10
@end

=== arin_04 | 기다리는 데 익숙한 사람
@bg annex night
@bgm sad
@outfit 0
* 아린은 오래된 장부를 무릎에 올려두고 있었다.
나 [기본] 그거 할머니 거예요?
아린 [기본] 네. 내가 들어온 날부터 적혀 있어요.
* 장부 첫 장에 「아린, 별채」라고 적혀 있었다. 날짜는 삼십 년 전이었다.
나 [놀람] 삼십 년 전이면...
아린 [웃음] 그 아린은 내가 아니에요. 우리 어머니예요.
나 [기본] 그럼...
아린 [기본] 나는 열아홉에 들어왔어요. 어머니 방을 물려받았죠.
@choice
- 어머니 얘기 해주실래요? | +15 | A
- 안 물어볼게요 | +15 | B
@label A
나 [기본] 어머니 얘기 해주실래요?
아린 [기본] 일찍 가셨어요. 내가 열일곱일 때.
아린 [기본] 할머니가 그러셨어요. 「그 방은 비워둘 테니 언제든 오라」고요.
나 [기본] 그래서 오신 거예요?
아린 [부끄러움] 이 년 걸렸어요. 그 말 믿는 데에요.
@goto END
@label B
나 [기본] 안 물어볼게요.
아린 [놀람] ...
아린 [웃음] 다들 물어보던데요.
나 [기본] 말하고 싶어지면 하실 거잖아요.
아린 [기본] ...그럼 지금 할게요. 물어보지 않으니까 하고 싶어지네요.
아린 [기본] 어머니가 여기 계셨어요. 할머니가 방을 비워두셨고요.
@label END
* 아린은 장부를 덮었다.
아린 [기본] 나는 기다리는 데 익숙해요. 기다려 준 사람이 있었으니까요.
@affection 15
@end

=== arin_05 | 야경 보러 가는 길
@bg rooftop night
@bgm winter
@outfit 1
* 아린이 처음으로 별채 밖으로 나왔다. 옥상으로 올라가자고 했다.
아린 [기본] 여기서 보면 읍내 불빛이 다 보여요.
나 [놀람] 자주 올라오세요?
아린 [기본] 일 년에 몇 번요. 좋은 건 자주 하면 안 좋아져요.
@choice
- 오늘은 왜 올라오셨어요? | +20 | A
- 그럼 저도 아껴서 올게요 | +20 | B
@label A
나 [기본] 오늘은 왜 올라오셨어요?
아린 [웃음] 물어볼 줄 알았어요.
아린 [기본] 혼자 보는 게 아까워졌거든요.
나 [놀람] ...
아린 [부끄러움] 그게 제일 위험한 마음이에요. 나한테는요.
@goto END
@label B
나 [기본] 그럼 저도 아껴서 올게요.
아린 [놀람] 아껴요?
나 [기본] 네. 아린 씨 올라올 때만요.
아린 [기본] ...그럼 내가 자주 올라오게 되잖아요.
나 [웃음] 그건 제 알 바 아니고요.
아린 [부끄러움] ...말을 참 얄밉게 하네요.
@label END
* 두 사람은 한 시간을 말없이 불빛을 봤다.
@affection 20
@end

=== arin_06 | 오래된 그림 이야기
@bg annex night
@bgm winter
* 벽에 걸린 그림 앞에서 아린이 멈춰 섰다.
아린 [기본] 이거 미술사 전공한 이유예요.
나 [기본] 유명한 그림이에요?
아린 [웃음] 아니요. 어머니가 그린 거예요.
* 서툰 붓질로 그려진 집 그림이었다. 이 집이었다.
아린 [기본] 잘 그린 그림은 아니에요. 근데 삼십 년 동안 안 뗐어요.
@choice
- 잘 그린 것 같은데요 | +20 | A
- 왜 안 떼셨어요? | +20 | B
@label A
나 [기본] 잘 그린 것 같은데요.
아린 [놀람] 어디가요?
나 [기본] 마루에 불이 켜져 있잖아요. 그것만 색이 진해요.
아린 [기본] ...
아린 [부끄러움] 삼십 년 동안 아무도 그 얘긴 안 했어요.
@goto END
@label B
나 [기본] 왜 안 떼셨어요?
아린 [기본] 떼면 이 방이 그냥 방이 되니까요.
나 [기본] 지금은요?
아린 [기본] 지금은 누가 살았던 방이에요. 그게 달라요.
아린 [부끄러움] ...오래 혼자 있으면 이런 걸 따지게 돼요.
@label END
@affection 20
@end

=== arin_07 | 아무도 오지 않은 밤
@bg annex night
@bgm sad
* 그날 별채의 문은 열려 있었는데, 아무도 오지 않았다.
* 늦게 들러 보니 아린이 식은 찻잔 두 개를 앞에 두고 있었다.
아린 [웃음] 늦었네요.
나 [기본] 기다리셨어요?
아린 [기본] 아니요. 그냥 문을 열어둔 거예요.
* 잔 하나는 손도 대지 않은 채였다.
나 [기본] ...기다리신 거 맞잖아요.
아린 [놀람] ...
아린 [기본] 기다린다고 말하면 안 되는 줄 알았어요.
나 [기본] 왜요?
아린 [기본] 기다린다고 하면, 안 오는 날에 내가 더 초라해지잖아요.
나 [기본] 안 오는 날엔 제가 늦은 거예요. 아린 씨 탓이 아니고요.
아린 [부끄러움] ...그 말 삼십 년 만에 들었어요.
@affection 15
@end

=== arin_08 | 졸업 논문 전날
@bg annex night
@bgm tense
@outfit 1
* 논문 제출 전날, 아린은 평소처럼 천천히 차를 우렸다.
나 [놀람] 안 급하세요?
아린 [웃음] 급해요. 근데 급하게 해서 좋았던 적이 없어요.
* 논문 주제는 「기다림의 그림」이었다.
나 [기본] 주제가...
아린 [기본] 네. 그림이 아니라 그림 앞에 서 있던 사람들 얘기예요.
아린 [기본] 사백 년 전 사람도, 삼십 년 전 사람도 똑같이 서 있었대요.
나 [기본] 뭘 기다렸는데요?
아린 [기본] 그건 아무도 안 적어놨어요. 그래서 내가 적으려고요.
아린 [부끄러움] ...내가 뭘 기다렸는지도 이제 알 것 같고요.
@affection 20
@end

=== arin_09 | 천천히 온 사람
@bg yard evening
@bgm warm
* 논문이 통과됐다. 아린은 마당에서 그 소식을 전했다.
아린 [웃음] 통과했어요. 심사위원이 한 분 우셨대요.
나 [놀람] 논문 심사에서요?
아린 [기본] 마지막 장 때문이래요.
* 아린은 논문 마지막 장을 보여줬다. 감사의 말이었다.
아린 [기본] 「삼십 년 동안 이 방을 비워두신 분께」라고 적었어요.
나 [기본] 할머니요.
아린 [기본] 네. 그리고 한 줄 더 있어요.
* 그 아래에는 이렇게 적혀 있었다. 「그리고 반년 동안 마루에 불을 켜둔 사람에게」
나 [놀람] ...
아린 [부끄러움] 이건 심사위원이 안 울었어요. 내가 울었죠.
@affection 15
@end

=== arin_10 | 마지막 잔
@bg annex night
@bgm confess
@outfit 2
* 열 번째 판이 끝났다. 아린은 물을 올리고 소리를 들었다.
아린 [기본] 세 번째 소리예요. 지금이 제일 좋은 때요.
@cg arin_ending
* 아린은 잔 두 개에 차를 따랐다. 처음으로 두 잔 다 따뜻했다.
아린 [기본] 나는 기다리는 게 익숙한 사람이라고 했죠.
아린 [기본] 사실은 익숙한 게 아니라, 그것밖에 할 줄 몰랐던 거예요.
* 아린은 오래된 장부를 펼쳤다. 마지막 장이었다.
아린 [기본] 할머니가 마지막에 적으신 게 있어요.
* 장부 끝에 이렇게 적혀 있었다. 「별채 사람에게 먼저 말 거는 아이가 오면, 그 아이한테 집을 줘도 된다」
아린 [놀람] 이거 나한테 하신 말씀인 줄 알았어요. 반년 전까지는요.
아린 [기본] 근데 아니었어요. 나는 기다리는 쪽이었고, 먼저 온 건 당신이었어요.
아린 [기본] 좋아해요.
아린 [웃음] 급하게 말하지 않으려고 반년을 기다렸어요. 이건 서두른 게 아니에요.
아린 [부끄러움] 이겨서 하는 말도 아니에요. 오늘은 일부러 졌으니까요.
@choice
- 일부러 진 거였어요? | +20 | A
- 앞으로는 기다리지 마세요 | +20 | B
@label A
나 [기본] 일부러 진 거였어요?
아린 [웃음] 첫 판은 인사라고 했죠. 마지막 판은 대답이에요.
나 [기본] 무슨 대답이요?
아린 [부끄러움] 져도 괜찮은 사람이라는 뜻이에요.
@goto END
@label B
나 [기본] 앞으로는 기다리지 마세요. 제가 올게요.
아린 [놀람] ...그럼 내가 할 게 없어지는데요.
나 [기본] 문 열어두시면 되죠. 그건 계속 하세요.
아린 [부끄러움] ...그 정도는 남겨주네요.
@label END
@bgm warm
아린 [웃음] 그럼 오늘은 세 번째 소리에 맞춰 따를게요. 두 잔 다요.
* 그날 밤 별채와 마루에 동시에 불이 켜져 있었다.
@affection 20
@point 300
@end
`,Nm=`# 채아 (반항) - 여름 / 8번 하숙생

=== chaea_01 | 새벽에 나가는 사람
@bg yard night
@bgm summer
@outfit 0
* 새벽 한 시. 마당 문이 조용히 열리는 소리가 났다.
* 목에 카메라를 건 사람이 어둠 속에 서 있었다.
채아 [기본] 놀랐어? 미안.
나 [놀람] 이 시간에 나가요?
채아 [기본] 응.
* 그게 대답의 전부였다.
나 [기본] ...어디 가는지 물어봐도 돼요?
채아 [기본] 그냥 걸어. 찍을 게 있으면 찍고.
* 잠깐 침묵이 있었다.
채아 [기본] 303호 채아. 사진학과.
나 [기본] 저는 여기 주인집 사람이에요.
채아 [기본] 알아. 밤마다 마루에 불 켜놓는 사람.
나 [놀람] 그걸 어떻게...
채아 [기본] 나갈 때마다 보이니까.
* 채아는 문을 나서다 잠깐 멈췄다.
채아 [기본] ...늦게 들어올 거야. 불 꺼도 돼.
@affection 10
@end

=== chaea_02 | 말을 안 하는 건 아니야
@bg maru night
@bgm summer
* 채아가 마루에 앉아 패를 골랐다. 십 분 동안 여섯 마디를 했다.
나 [기본] 말 많이 안 하시네요.
채아 [기본] 말 안 하는 거 아니야. 할 말이 없는 거지.
나 [기본] 그게 그거 아니에요?
채아 [기본] 달라.
* 채아는 패를 내고 잠깐 생각했다.
채아 [기본] 할 말 없는데 말하는 사람들이 제일 피곤해.
나 [웃음] 저도 그런 편인데요.
채아 [기본] 아니. 넌 안 그래.
나 [놀람] 어떻게 알아요?
채아 [기본] 말 안 해도 안 어색하잖아. 그런 사람 드물어.
@affection 10
@end

=== chaea_03 | 필름 카메라
@bg room night
@bgm summer
* 채아의 방에는 카메라가 네 대 있었다. 전부 필름이었다.
나 [기본] 디지털은 안 써요?
채아 [기본] 써. 근데 재미없어.
나 [기본] 왜요?
채아 [기본] 바로 보이잖아. 바로 보이면 다시 찍게 되고, 다시 찍으면 처음 게 없어져.
* 채아는 필름통을 하나 굴렸다.
채아 [기본] 이건 며칠 기다려야 보여. 그동안은 뭘 찍었는지도 잊어버려.
나 [기본] 그게 좋아요?
채아 [기본] 응. 잊었다가 다시 보면, 그때 내가 뭘 보고 있었는지 알게 돼.
채아 [부끄러움] ...말이 길었네.
@affection 10
@end

=== chaea_04 | 현상에 실패한 밤
@bg room night
@bgm sad
@outfit 0
* 채아가 암실 가방을 든 채 방문 앞에 서 있었다. 필름이 전부 투명했다.
채아 [기본] 약품 온도를 잘못 맞췄어. 세 통 날렸어.
나 [놀람] 세 통이요?
채아 [기본] 반년 치야.
* 채아는 그 말을 하고도 표정이 거의 바뀌지 않았다.
나 [기본] ...화 안 나요?
채아 [기본] 나. 근데 화내면 더 아까워져.
@choice
- 화내도 괜찮아요 | +15 | A
- 뭐가 찍혀 있었어요? | +15 | B
@label A
나 [기본] 화내도 괜찮아요. 여기선 아무도 안 봐요.
채아 [놀람] ...
채아 [기본] 화내는 법을 잘 몰라. 어릴 때부터 안 했더니.
나 [기본] 그럼 그냥 앉아 있어요. 그것도 화내는 거예요.
채아 [부끄러움] ...그럼 좀 앉아 있을게.
@goto END
@label B
나 [기본] 뭐가 찍혀 있었어요?
채아 [기본] 밤에 걸어 다니면서 찍은 거. 골목, 간판, 그런 거.
나 [기본] 또요?
채아 [기본] ...이 집. 마당에서 마루 쪽으로.
나 [놀람] 그것도 날아간 거예요?
채아 [기본] 응. 그게 제일 아까워.
@label END
* 그날 채아는 마루에 두 시간 앉아 있었다. 말은 거의 안 했다.
@affection 15
@end

=== chaea_05 | 야간 산책
@bg street night
@bgm summer
@outfit 1
* 채아가 현관에서 신발을 신다가 뒤를 돌아봤다.
채아 [기본] ...같이 갈래?
나 [놀람] 저요?
채아 [기본] 안 가도 돼. 그냥 물어본 거야.
@choice
- 갈게요 | +20 | A
- 방해 안 될까요? | +20 | B
@label A
나 [기본] 갈게요.
채아 [놀람] 이유 안 물어봐?
나 [기본] 물어보면 안 데려갈 것 같아서요.
채아 [부끄러움] ...눈치 빠르네.
@goto END
@label B
나 [기본] 방해 안 될까요? 사진 찍는 데요.
채아 [기본] 방해되면 안 물어봤어.
나 [기본] ...그렇네요.
채아 [기본] 나 혼자 걷는 거 십 년 했어. 오늘은 좀 다르게 걸어보려고.
@label END
* 두 사람은 두 시간을 걸었다. 채아는 열한 번 셔터를 눌렀다.
채아 [기본] 오늘은 간판을 안 찍었어.
나 [기본] 그럼 뭘 찍었어요?
채아 [부끄러움] ...나중에 현상되면 알려줄게.
@affection 20
@end

=== chaea_06 | 너는 찍지 마
@bg maru night
@bgm summer
* 채아가 카메라를 들었다가 내렸다. 몇 번을 반복했다.
나 [기본] 찍고 싶으면 찍어요.
채아 [기본] 안 찍어.
나 [놀람] 왜요?
채아 [기본] 찍으면 남잖아.
@choice
- 남으면 안 돼요? | +20 | A
- 그럼 제가 찍을게요 | +20 | B
@label A
나 [기본] 남으면 안 돼요?
채아 [기본] 남으면... 나중에 없어졌을 때 더 아파.
나 [놀람] 없어질 거라고 생각해요?
채아 [기본] 다 없어졌어. 지금까지는.
나 [기본] 그럼 이번엔 안 없어지게 하면 되죠.
채아 [부끄러움] ...그런 말은 아무나 못 해.
@goto END
@label B
나 [기본] 그럼 제가 찍을게요. 채아 씨를요.
채아 [놀람] 뭐?
나 [기본] 남는 게 무서우면, 남기는 건 제가 하면 되잖아요.
채아 [기본] ...말도 안 되는 소리야.
* 그래도 채아는 카메라를 건넸다.
채아 [부끄러움] 한 장만. 못 찍어도 뭐라 안 할게.
@label END
@affection 20
@end

=== chaea_07 | 사진이 안 나온다
@bg room night
@bgm sad
* 공모전 출품작을 고르는데 채아가 손을 멈췄다.
채아 [기본] 백 장 중에 한 장도 못 고르겠어.
나 [기본] 다 별로예요?
채아 [기본] 아니. 다 남의 사진 같아.
* 채아는 인화지를 바닥에 늘어놓았다.
채아 [기본] 남들이 좋다고 할 만한 걸 찍었어. 그래서 내 게 아니야.
나 [기본] 채아 씨 사진은 어떤 거예요?
채아 [기본] ...몰라. 그게 문제야.
* 인화지 사이에 한 장이 섞여 있었다. 밤에 불 켜진 마루였다.
나 [기본] 이건요?
채아 [놀람] 그건 출품용 아니야.
나 [기본] 왜요?
채아 [부끄러움] ...너무 내 거라서.
@affection 15
@end

=== chaea_08 | 공모전 마감 전날
@bg maru night
@bgm tense
@outfit 1
* 마감 전날, 채아는 인화지 두 장을 두고 고민했다.
채아 [기본] 잘 찍은 거랑, 내 거랑.
나 [기본] 뭐가 다른데요?
채아 [기본] 잘 찍은 건 남이 좋아할 거고, 내 건 나만 좋아할 거야.
* 채아는 두 장을 나란히 놓았다.
채아 [기본] 떨어지면 일 년 기다려야 돼.
나 [기본] 붙으면요?
채아 [기본] 붙으면... 그 사진이 내 이름으로 계속 남아.
나 [기본] 그럼 남기고 싶은 걸 내야죠.
채아 [놀람] ...
채아 [기본] 그렇게 간단한 거였나.
채아 [부끄러움] 나 원래 이런 거 남한테 안 물어봐. 오늘은 물어보고 싶었어.
@affection 20
@end

=== chaea_09 | 한 장만 남기고
@bg campus evening
@bgm warm
* 전시장 벽에 채아의 사진이 한 장 걸렸다. 입선이었다.
* 걸린 것은 밤의 마루 사진이었다.
채아 [기본] 사람들이 왜 이걸 찍었냐고 물어.
나 [기본] 뭐라고 했어요?
채아 [기본] 「집이라서」라고 했어.
* 채아는 벽 앞에 서서 한참 사진을 봤다.
채아 [기본] 나 집이라는 말 안 써. 안 써본 지 오래됐어.
나 [놀람] ...
채아 [부끄러움] 오늘 처음 썼어. 사람들 앞에서.
채아 [기본] 그러고 나니까 진짜가 된 것 같아.
@affection 15
@end

=== chaea_10 | 마지막 셔터
@bg maru night
@bgm confess
@outfit 2
* 열 번째 판이 끝났다. 채아는 봉투를 하나 들고 있었다.
채아 [기본] 현상 나왔어. 그때 같이 걸었던 밤 거.
@cg chaea_ending
* 봉투에서 나온 사진은 전부 한 사람이었다. 뒷모습, 옆모습, 걷는 모습.
채아 [기본] 간판을 안 찍었다고 했잖아.
나 [놀람] 이걸 찍고 있었어요?
채아 [기본] 응. 열한 장 전부.
* 채아는 사진을 한 장씩 넘겼다.
채아 [기본] 나 남는 게 무섭다고 했지. 없어지면 더 아프니까.
채아 [부끄러움] 근데 그날은 그냥 찍었어. 무서운데도 찍었어.
채아 [기본] 그게 무슨 뜻인지 너도 알 거야.
채아 [기본] 좋아해.
채아 [웃음] 말 길게 안 할게. 나 원래 말 안 하는 사람이잖아.
@choice
- 안 없어질게요 | +20 | A
- 이번엔 제가 한 장 찍을게요 | +20 | B
@label A
나 [기본] 안 없어질게요.
채아 [놀람] ...그런 약속 하는 거 아니야.
나 [기본] 알아요. 그래도 해요.
채아 [부끄러움] ...진짜 못됐다.
@goto END
@label B
나 [기본] 이번엔 제가 한 장 찍을게요. 채아 씨를요.
채아 [기본] 저번에 한 장 찍었잖아.
나 [기본] 그건 못 찍었잖아요. 흔들렸고요.
채아 [웃음] ...그건 인정.
채아 [부끄러움] 그럼 오늘은 잘 찍어. 이건 남길 거니까.
@label END
@bgm warm
채아 [기본] 다음엔 밤에 같이 나가자. 혼자 걷는 거 십 년 했는데, 이제 안 할래.
* 그날 필름 한 통이 새로 걸렸다.
@affection 20
@point 300
@end
`,Em=`# 세계관 / 프롤로그 / 계절 전환 / 히든 엔딩
# 형식 설명은 README 의 "시나리오 스크립트 작성법" 참고

=== world | 이 집에 대하여
@bg beach morning
@bgm title
* 버스가 하루 여섯 번 서는 바닷가 마을이다.
* 정류장에서 언덕을 오 분쯤 오르면, 잔디 언덕 위에 집이 한 채 서 있다.
* 바다 쪽 벽이 통째로 유리인, 방 열다섯 개짜리 이층 별장이다.
* 여름이면 이 앞에 외지 차가 줄을 섰다고 한다. 「얼마면 파시겠냐」고.
@bg yard evening
* 그런데 대문에는 삼십 년 된 나무 간판이 손으로 깎여 걸려 있다. 「하숙」.
* 할머니는 이 좋은 집을 혼자 쓰지 않았다. 방을 하나씩 내줬다.
* 대학생, 갓 취직한 사람, 한 계절만 머물다 간 사람.
* 방이 비는 날이 거의 없었다고 한다.
* 다만 말년에는 이층 뒤쪽 복도와 삼층 끝 두 방을 닫아두셨다.
* 「혼자 관리하기에는 벅차서」라고만 하셨다.
* 왜 하숙이냐고 물으면 늘 같은 대답이었다.
* 「집이 크면 사람이 있어야 해. 안 그러면 집이 먼저 늙는다.」
* 나는 방학마다 이 집에 맡겨졌다. 마루에서 밥을 먹고, 마루에서 잠들었다.
@bg maru night
@bgm sad
* 할머니가 돌아가신 건 지난봄이다.
* 집은 나에게 남았다. 방 열다섯 개짜리 별장이, 혼자 사는 사람 앞으로.
* 반년 동안 이 집에서 나는 소리라고는 내 발소리와, 유리에 부딪는 바람뿐이었다.
@bgm none
* 그런데 마루에는 아직 방석이 열 개 깔려 있다. 닫아둔 방 수만큼 모자란 채로.
* 할머니는 매일 저녁 그걸 펴두고 주무셨다. 손님이 없는 날에도.
@bgm title
* 그리고 마당 끝 별채에는, 밤마다 불이 켜진다.
* 나는 아직 그 방에 누가 사는지 모른다.
@end

=== prologue | 다시 하숙을 놓는 밤
@bg room evening
@bgm spring
* 삼월. 책상 위에 고지서가 쌓였다.
* 재산세, 유리창 열두 장 교체 견적, 보일러, 기름값.
* 좋은 집은 가만히 있어도 돈을 먹는다는 걸 반년 만에 배웠다.
* 집을 팔라는 전화가 두 번 왔다. 값도 나쁘지 않았다. 두 번 다 끊었다.
@bg maru evening
* 마루를 쓸다가 방석 밑에서 할머니의 공책을 찾았다.
* 하숙 장부였다. 삼십 년 치 이름이 빼곡했다.
* 마지막 장에는 이름 대신 이렇게 적혀 있었다.
* 「하숙을 놓는 법 — 하나. 방은 깨끗이. 둘. 밥은 같이. 셋. 밤에는 마루에서 한 판.」
나 [기본] ...한 판이요?
* 공책 옆에는 손때 묻은 화투갑이 놓여 있었다.
@bgm none
* 나는 그날 밤 하숙 광고를 올렸다.
@bgm spring
@bg yard evening
* 보름 뒤, 짐가방을 끌고 언덕을 올라오는 사람이 보였다.
지은 [놀람] 여기 맞죠? 하숙집.
나 [기본] 아, 네. 맞아요.
지은 [웃음] 다행이다. 버스 놓쳐서 걸어왔어요.
지은 [기본] 나 지은. 201호로 신청한 사람.
나 방은 치워놨어요.
지은 [삐짐] 존댓말 하지 마. 나 너보다 한 살 많은데 그러면 더 어색해.
@bg maru night
* 짐을 올려놓고 내려오니, 지은이 마루에 앉아 방석을 만지고 있었다.
지은 [놀람] 집 진짜 좋다. 여기 하숙 맞아?
나 [기본] 할머니가 그렇게 해놓고 가셔서.
지은 [기본] 근데 이 방석은 왜 이렇게 많아?
나 [기본] 할머니가 펴두시던 거예요. ...펴두던 거야.
지은 [놀람] 아.
* 지은은 잠깐 말이 없다가, 방석 하나를 내 쪽으로 밀었다.
지은 [웃음] 그럼 오늘부터 내가 한 개 쓸게.
* 그리고 옆에 놓인 화투갑을 집어 들었다.
지은 [기본] 이건 쳐도 돼?
나 [놀람] 칠 줄 알아?
지은 [웃음] 어제 외웠어.
나 [기본] ...나는 오늘 외웠는데.
지은 [웃음] 비슷하네. 앉아.
@sfx card_shuffle
* 그렇게 첫 판이 시작됐다.
* 이 마루에서 백 판을 치게 될 거라고는, 그날의 나는 상상도 못 했다.
@affection 5
@end

=== season_summer | 여름이 왔다
@bg yard evening
@bgm summer
* 마당의 나무가 짙어지고, 바다 냄새가 집 안까지 들어왔다.
* 방이 다섯 개 찼다. 삼층에도 불이 켜지기 시작했다.
수아 [기본] 삼층 애들 슬슬 내려올 거야. 마루 소리가 위까지 들리거든.
나 내려오면 좋죠.
수아 [웃음] 좋다고만 할 일은 아니야.
나 왜요.
수아 [기본] 걔들은 봐주는 법을 몰라.
@end

=== season_autumn | 가을이 왔다
@bg beach evening
@bgm autumn
* 바닷바람이 차가워지고, 마루에는 전기장판이 깔렸다.
* 밤이 길어지자 판도 길어졌다. 새벽 두 시에 패 섞는 소리가 났다.
* 할머니 공책을 다시 펼쳤다. 가을 칸에 한 줄이 적혀 있었다.
* 「가을에는 다들 늦게까지 앉아 있는다. 말리지 말 것.」
나 [기본] ...삼십 년 동안 말려본 사람이 없었구나.
@end

=== season_winter | 겨울이 왔다
@bg yard night
@bgm winter
* 첫눈이 온 날, 별채에 불이 켜졌다.
* 마당 끝, 반년 동안 한 번도 열린 적 없다고 생각했던 그 방이었다.
* 공책 맨 앞장을 다시 봤다. 입주 순서대로 적힌 이름 중 첫 줄에 이렇게 있었다.
* 「별채 · 아린 · 퇴실일 —」
* 퇴실일 칸만 삼십 년째 비어 있었다.
@bgm none
* 별채의 창에는 불빛이 오래 켜져 있었다.
@end

=== hidden_ending | 마루의 단체 사진
@bg maru night
@bgm warm
* 겨울이 끝나갈 무렵, 마루에 열다섯 개의 방석이 둥글게 깔렸다.
* 닫혀 있던 이층 뒤쪽과 삼층 끝 방이 다 열린 건 그해가 처음이었다.
지은 [웃음] 다 모인 거 맞지? 한 명도 안 빠졌지?
수아 [기본] 국 식어. 빨리 앉아.
나연 [기본] 조명 이쪽이 나아. 옮겨.
리아 [웃음] 저 방석 더 가져올게요! 다섯 개 모자라요.
하나 [웃음] 야, 사진은 찍고 붙자. 붙고 나면 표정 관리 안 돼.
서연 [기본] 계산해봤는데, 열다섯 명이 다 붙으면 백다섯 판이야.
루비 [웃음] 그럼 제가 배경음악 할게요. 백다섯 곡은 좀 무린가.
채아 [웃음] 그럼 오늘 밤은 안 끝나겠네. 좋아.
하린 [기본] 방석 간격 좀 맞추자. 원이 찌그러졌어.
다빈 [부끄러움] 저... 가운데는 좀 부담스러운데요.
민지 [기본] 다들 물 한 잔씩은 떠다 놨어요. 밤 길어질 테니까.
예린 [기본] 그 전에 정산부터. 포인트 장부 가져올게.
소라 [웃음] 자, 다들. 카메라 여기. 1막 시작합니다.
가인 [웃음] 후배, 가운데 앉아. 오늘 주인공은 너야.
나 [부끄러움] 왜 제가요.
아린 [기본] 이 마루에서 백 판을 친 사람이 너니까.
* 아린은 낡은 화투갑을 마루 한가운데 놓았다.
아린 [웃음] 삼십 년 동안 이 집에서 제일 오래 앉아 있었던 게 나였는데.
아린 [기본] 이제 아니네.
@sfx camera
@cg ending_group
* 셔터가 눌렸다.
* 사진 속에서 열 사람이 각자 다른 표정으로 웃고 있었고, 그 가운데 내가 있었다.
가인 [웃음] 이 사진, 마루에 걸자.
나 [기본] 할머니 사진 옆에요?
가인 [기본] 응. 나란히.
@bgm none
* 언젠가 삼십 년 뒤에 누가 이 사진을 볼 것이다.
* 그때도 이 마루에 방석이 깔려 있으면 좋겠다고 생각했다.
* 하숙집의 밤은 아직 한참 남아 있었다.
@point 1000
@end
`,Mm=`# 다빈 (다락) - 가을 / 12번 하숙생

=== dabin_01 | 삼층 끝 방에 불이 켜졌다
@bg hallway night
@bgm autumn
@outfit 0
* 오랫동안 비어 있던 307호에 불이 켜졌다.
* 복도를 지나는데 문 앞에 짐가방이 그대로 서 있었다.
다빈 [놀람] 아, 안녕하세요...
나 [기본] 짐 안 푸세요?
다빈 [기본] 푸는 중이었는데... 복도가 어두워서요.
* 다빈은 문 밖으로 한 발짝도 나오지 않은 채 말했다.
다빈 [부끄러움] 저 사실 어두운 데를 좀 무서워해요.
나 [기본] 복도 등 스위치가 계단 쪽에 있어요. 켜드릴게요.
* 불이 들어오자 다빈은 그제야 가방을 밖으로 끌어냈다.
다빈 [기본] 307호 다빈이에요. 아동학과 삼학년이요.
다빈 [기본] 근처 유치원에 실습 나가요. 그래서 여기로 왔어요.
나 [기본] 밤에 무서우면 마루로 내려오세요. 저 늦게까지 있어요.
다빈 [놀람] ...진짜요?
* 그날 밤 다빈은 정말로 내려왔다. 그리고 한 판을 두고 갔다.
@affection 10
@end

=== dabin_02 | 복도 등
@bg hallway night
@bgm autumn
* 다음 날부터 삼층 복도 등이 밤새 켜져 있었다.
다빈 [부끄러움] 저 때문이죠. 죄송해요. 전기세...
나 [기본] 할머니도 그렇게 하셨대요.
다빈 [놀람] 할머니도요?
나 [기본] 「밤에 오는 사람이 있으니까」라고요.
* 다빈은 잠깐 아무 말도 하지 않았다.
다빈 [기본] 저 어릴 때 집에 아무도 없는 시간이 길었어요.
다빈 [기본] 그때 제일 무서운 게 불 꺼진 현관이었어요.
나 [기본] 그럼 안 끄면 되죠.
다빈 [부끄러움] ...그렇게 간단한 거였네요.
* 그날 다빈은 칠 점에서 스톱을 불렀다.
나 [놀람] 더 갈 수 있었는데요.
다빈 [기본] 저는 안전한 게 좋아요.
@affection 10
@end

=== dabin_03 | 유치원 실습
@bg street morning
@bgm autumn
* 아침에 다빈이 현관에서 안절부절못하고 있었다.
다빈 [기본] 오늘 처음으로 혼자 수업해요. 스물세 명이요.
나 [기본] 떨려요?
다빈 [기본] 네. 어젯밤에 한숨도 못 잤어요.
* 다빈의 가방에는 손으로 만든 그림카드가 잔뜩 들어 있었다.
@choice
- 그거 다 직접 만드셨어요? | +15 | A
- 아이들은 잘하는 사람보다 좋아하는 사람을 알아봐요 | +15 | B
@label A
나 [기본] 그거 다 직접 만드셨어요?
다빈 [부끄러움] 네... 사흘 걸렸어요. 손이 느려서.
나 [기본] 사흘 걸려서 만든 걸 아이들이 모를 리가 없어요.
다빈 [놀람] ...그럴까요?
나 [기본] 저도 알겠는데요.
@goto END
@label B
나 [기본] 아이들은 잘하는 사람보다 좋아하는 사람을 알아봐요.
다빈 [놀람] 그런가요.
나 [기본] 다빈 씨 그림카드 만들 때 표정 봤어요. 그거면 돼요.
다빈 [부끄러움] ...보고 계셨어요?
@label END
* 그날 저녁 다빈은 돌아와서 한참 웃었다.
다빈 [웃음] 한 명도 안 울었어요! 한 명도요!
@affection 15
@end

=== dabin_04 | 아이가 그린 집
@bg maru evening
@bgm autumn
* 다빈이 아이들이 그린 그림을 마루에 펼쳐놓고 있었다.
다빈 [웃음] 「우리 선생님 집」 그리기를 했는데요.
* 그중 한 장에는 창문이 아주 많은 집이 그려져 있었다.
다빈 [기본] 제가 여기 얘기를 했거든요. 방이 열다섯 개인 집이라고.
나 [놀람] 아이들이 믿어요?
다빈 [웃음] 안 믿었어요. 그래서 창문을 다 세어서 그렸대요. 열다섯 개.
* 그림 아래쪽에 노란 네모가 하나 크게 칠해져 있었다.
나 [기본] 이건 뭐예요?
다빈 [부끄러움] 마루요. 제가 밤에 불 켜져 있는 데가 있다고 했거든요.
@choice
- 이 그림 마루에 붙여놔도 돼요? | +15 | A
- 아이들한테 뭐라고 설명했어요? | +15 | B
@label A
나 [기본] 이 그림 마루에 붙여놔도 돼요?
다빈 [놀람] 여기에요? 애들 그림인데.
나 [기본] 이 집 그린 거잖아요. 집에 걸어야죠.
다빈 [부끄러움] ...그럼 제가 붙일게요. 잘 보이는 데로요.
@goto END
@label B
나 [기본] 아이들한테 뭐라고 설명했어요?
다빈 [부끄러움] 「밤에 무서울 때 보는 불」이라고 했어요.
나 [놀람] 애들이 알아들어요?
다빈 [웃음] 다 알아들었어요. 애들도 밤은 무서우니까요.
@label END
@affection 15
@end

=== dabin_05 | 무서운 밤
@bg room night
@bgm sad
@outfit 1
* 새벽에 계단에서 소리가 났다. 다빈이 담요를 안고 서 있었다.
다빈 [놀람] 아... 죄송해요. 내려가려던 건 아닌데.
나 [기본] 무서웠어요?
다빈 [기본] 오늘 정전이 잠깐 났어요. 이 분쯤.
다빈 [부끄러움] 이 분인데 못 견디겠더라고요. 스물두 살이나 먹고.
@choice
- 이 분이면 충분히 무서워요 | +20 | A
- 그럼 마루에서 같이 있어요 | +20 | B
@label A
나 [기본] 이 분이면 충분히 무서워요.
다빈 [놀람] 안 웃겨요?
나 [기본] 안 웃겨요. 무서운 데 시간이 무슨 상관이에요.
다빈 [부끄러움] ...그 말 되게 오래 듣고 싶었나 봐요.
@goto END
@label B
나 [기본] 그럼 마루에서 같이 있어요. 어차피 안 자니까.
다빈 [놀람] 폐 끼치는 거 아니에요?
나 [기본] 방이 열다섯 개인데 사람 하나 더 앉는 게 폐가 되겠어요.
다빈 [부끄러움] ...고맙습니다.
@label END
* 그날 두 사람은 해가 뜰 때까지 마루에 앉아 있었다.
다빈 [웃음] 아침에 보니까 하나도 안 무섭네요.
@affection 20
@end

=== dabin_06 | 그림책 읽어주기
@bg maru night
@bgm autumn
* 다빈이 그림책을 소리 내어 읽고 있었다. 내일 수업 연습이라고 했다.
다빈 [부끄러움] 혼자 읽으면 어색해서요. 들어주실래요?
* 다빈은 목소리를 여러 개로 바꿔가며 읽었다. 아까와 다른 사람 같았다.
나 [놀람] 아이들 앞에서도 이렇게 해요?
다빈 [웃음] 네. 이상하죠.
나 [기본] 이상한 게 아니라, 그때만 안 무서워 보여요.
다빈 [놀람] ...
다빈 [기본] 아이들 앞에서는 제가 어른이어야 하니까요.
다빈 [부끄러움] 여기 오면 다시 무서워해도 되는 사람이 돼요. 그게 편해요.
@choice
- 여기선 계속 그래도 돼요 | +15 | A
- 그럼 저한테도 읽어주세요 | +15 | B
@label A
나 [기본] 여기선 계속 그래도 돼요.
다빈 [놀람] 어른 노릇 안 해도요?
나 [기본] 하루에 한 군데쯤은 있어야죠.
다빈 [부끄러움] ...그 한 군데가 여기라서 다행이에요.
@goto END
@label B
나 [기본] 그럼 저한테도 읽어주세요. 매일요.
다빈 [놀람] 매일이요? 애들 책인데.
나 [기본] 상관없어요. 목소리 좋으니까.
다빈 [부끄러움] ...그런 말 하면 목이 잠겨요.
@label END
* 그날 다빈은 그림책을 끝까지 읽고 한 판을 두고 올라갔다.
@affection 15
@end

=== dabin_07 | 가을 운동회
@bg yard evening
@bgm autumn
* 유치원 운동회가 끝나고 다빈이 흙투성이로 돌아왔다.
다빈 [웃음] 저 오늘 달리기 꼴등 했어요. 애들한테 졌어요.
나 [웃음] 일부러 져준 거 아니고요?
다빈 [삐짐] 진짜로 졌어요! 저 원래 느려요.
* 다빈은 무릎에 붙인 반창고를 가리켰다.
다빈 [기본] 넘어졌는데, 애들이 다 와서 일으켜줬어요.
다빈 [부끄러움] 저 그때 좀 울 뻔했어요.
나 [기본] 왜요?
다빈 [기본] 넘어졌을 때 누가 와주는 게... 처음이어서요.
* 다빈은 웃으면서 말했지만 목소리가 조금 흔들렸다.
나 [기본] 여기서도 넘어지면 갈게요.
다빈 [부끄러움] ...그런 말 하면 진짜로 넘어져 볼까 봐요.
@affection 15
@end

=== dabin_08 | 실습 마지막 날
@bg maru night
@bgm tense
@outfit 1
* 실습 마지막 날을 앞두고 다빈은 잠을 못 잤다.
다빈 [기본] 내일이 마지막이에요. 인사하고 나와야 해요.
나 [기본] 아쉽겠어요.
다빈 [기본] 아쉬운 것보다... 애들이 울까 봐 무서워요.
다빈 [부끄러움] 저 우는 거 보면 같이 울거든요.
@choice
- 울어도 되죠 | +20 | A
- 마지막이 아니라고 말해주세요 | +20 | B
@label A
나 [기본] 울어도 되죠.
다빈 [놀람] 선생님인데요?
나 [기본] 선생님도 사람이에요. 애들이 그거 배우면 좋은 거죠.
다빈 [부끄러움] ...그렇게 생각해본 적 없어요.
@goto END
@label B
나 [기본] 마지막이 아니라고 말해주세요. 놀러 오겠다고요.
다빈 [기본] 그래도 돼요?
나 [기본] 지키면 되죠. 제가 같이 갈게요.
다빈 [부끄러움] ...같이요?
@label END
다빈 [웃음] 오늘은 잘 수 있을 것 같아요.
@affection 20
@end

=== dabin_09 | 다락 창문
@bg room night
@bgm warm
* 다빈이 307호로 올라오라고 했다. 처음 들어가 본 방이었다.
다빈 [부끄러움] 보여드릴 게 있어서요.
* 다락방 창문은 마당이 아니라 안쪽 마루 지붕 쪽으로 나 있었다.
다빈 [기본] 여기서 밤에 내려다보면요.
* 창문 아래로 마루의 불빛이 정확히 보였다.
다빈 [기본] 이거 보고 자요. 매일요.
나 [놀람] 매일이요?
다빈 [부끄러움] 처음 이사 온 날부터요. 불 꺼진 날이 하루도 없었어요.
다빈 [기본] 그거 알고 나니까 무서운 게 없어지더라고요.
* 다빈은 창문을 닫고 웃었다.
다빈 [웃음] 이제 복도 등 꺼도 될 것 같아요.
@affection 15
@end

=== dabin_10 | 불빛
@bg maru night
@bgm confess
@outfit 2
* 열 번째 판이 끝났다. 다빈은 처음으로 고를 세 번 불렀다.
나 [놀람] 다빈 씨가 삼고를요?
다빈 [부끄러움] 오늘은 판이 안 끝났으면 해서요.
@cg dabin_ending
* 다빈은 가방에서 그림 한 장을 꺼냈다. 아이가 그린 창문 많은 집이었다.
다빈 [기본] 이거 애들이 마지막 날에 준 거예요.
* 그림 뒷면에 다빈의 글씨로 한 줄이 적혀 있었다.
다빈 [기본] 「노란 네모는 마루입니다」
다빈 [부끄러움] 애들한테 설명해주려고 적어놨는데, 결국 못 줬어요.
나 [기본] 왜요.
다빈 [기본] 제 거로 하고 싶어져서요.
* 다빈은 그림을 두 손으로 들고 있었다.
다빈 [기본] 저 여기 오기 전에는 밤이 제일 긴 시간이었어요.
다빈 [기본] 이제는 제일 짧아요. 마루에 앉아 있으면 금방 아침이 돼요.
다빈 [부끄러움] 저 좋아해요. 선배.
다빈 [기본] 무서울 때 옆에 있어줘서가 아니에요.
다빈 [기본] 무서워해도 된다고 해준 사람이 처음이라서 그래요.
@choice
- 계속 무서워해도 돼요 | +20 | A
- 다락에서 안 봐도 되게 할게요 | +20 | B
@label A
나 [기본] 계속 무서워해도 돼요.
다빈 [놀람] 안 고쳐도 돼요?
나 [기본] 고칠 게 아니라 같이 있으면 되는 거죠.
다빈 [부끄러움] ...그 말 들으려고 열 판을 둔 것 같아요.
@goto END
@label B
나 [기본] 다락에서 안 봐도 되게 할게요.
다빈 [놀람] 무슨 말이에요?
나 [기본] 창문으로 내려다보지 말고, 그냥 내려오면 되잖아요.
다빈 [부끄러움] ...그래도 돼요?
@label END
@bgm warm
다빈 [웃음] 그럼 오늘은 창문 닫고 내려올게요.
* 그날 밤 삼층 복도 등은 꺼져 있었다. 대신 마루 불이 늦게까지 켜져 있었다.
@affection 20
@point 300
@end
`,Lm=`# 가인 (안경) - 가을 / 13번 하숙생

=== gain_01 | 도서관이 닫는 시간
@bg maru night
@bgm autumn
@outfit 0
* 밤 열한 시, 현관이 열리고 책을 다섯 권 안은 사람이 들어왔다.
가인 [기본] 아, 아직 안 주무시네요.
나 [놀람] 그거 다 들고 오셨어요?
가인 [기본] 도서관이 열 시에 닫아서요. 남은 건 들고 와야죠.
* 안경 너머로 눈이 좀 피곤해 보였다.
가인 [기본] 306호 가인이에요. 문헌정보학과 사학년이고요.
나 [기본] 사서 되시려고요?
가인 [기본] 네. 그래서 도서관에 살아요.
나 [웃음] 사는 건 여긴데요.
가인 [놀람] ...
가인 [부끄러움] 그러네요. 말을 잘못했어요.
* 가인은 책을 마루 한쪽에 가지런히 놓았다.
가인 [기본] 공부도 좋지만… 가끔은 같이 쉬어가요. 오늘이 그 가끔이면 좋겠네요.
@affection 10
@end

=== gain_02 | 일정표에 없는 시간
@bg maru night
@bgm autumn
* 가인은 손바닥만 한 수첩을 늘 들고 다녔다.
나 [기본] 그거 일정표예요?
가인 [기본] 네. 삼십 분 단위로요.
나 [놀람] 삼십 분이요?
가인 [기본] 그렇게 안 하면 하루가 그냥 없어져요.
* 가인은 수첩을 펼쳐 보였다. 오늘 칸이 빼곡했다.
나 [기본] 지금은 무슨 시간이에요?
가인 [부끄러움] ...비어 있어요.
나 [웃음] 비어 있는 칸도 있네요.
가인 [기본] 비어 있는 게 아니라, 아직 안 적은 거예요.
나 [기본] 뭐라고 적을 건데요?
가인 [부끄러움] ...나중에 적을게요.
@affection 10
@end

=== gain_03 | 연체된 책
@bg room night
@bgm autumn
* 가인의 책상에 반납 알림 문자가 떠 있었다.
가인 [기본] 연체됐어요. 사흘.
나 [기본] 사서 되실 분이요?
가인 [삐짐] 그러니까 더 창피해요.
* 가인은 책 한 권을 들고 있었다. 소설이었다.
나 [기본] 공부 책은 아니네요.
가인 [부끄러움] 네. 그래서 못 반납했어요.
나 [놀람] 왜요?
가인 [기본] 다 안 읽었는데, 다 읽으면 끝나잖아요.
나 [웃음] 그게 무슨 이유예요.
가인 [기본] 저도 알아요. 근데 좋은 건 아껴 읽게 돼요.
가인 [부끄러움] ...이런 거 남한테 말한 적 없어요.
@affection 10
@end

=== gain_04 | 계획이 무너진 날
@bg room night
@bgm sad
@outfit 0
* 가인의 수첩에 오늘 칸이 통째로 비어 있었다.
가인 [기본] 오늘 아무것도 못 했어요.
나 [기본] 무슨 일 있었어요?
가인 [기본] 아무 일도 없었어요. 그냥 못 했어요.
* 가인은 수첩을 덮었다.
가인 [기본] 이런 날이 제일 무서워요. 이유가 없으니까 대책도 없어요.
@choice
- 이유 없는 날도 있어요 | +15 | A
- 내일 칸에 「쉼」이라고 적으세요 | +15 | B
@label A
나 [기본] 이유 없는 날도 있어요.
가인 [기본] 그럼 내일도 그럴 수 있잖아요.
나 [기본] 그럼 내일도 그러는 거죠.
가인 [놀람] ...그렇게 간단하게요?
나 [기본] 안 간단하니까 그렇게 말하는 거예요.
가인 [부끄러움] ...무슨 말인지 알 것 같아요.
@goto END
@label B
나 [기본] 내일 칸에 「쉼」이라고 적으세요. 미리요.
가인 [놀람] 쉬는 걸 적어요?
나 [기본] 네. 그럼 쉬어도 계획대로인 거잖아요.
가인 [기본] ...그건 반칙 같은데요.
나 [웃음] 반칙이라도 오늘 칸이 안 비잖아요.
가인 [부끄러움] ...적어볼게요.
@label END
* 그날 수첩에 「쉼」이라는 글씨가 처음 적혔다.
@affection 15
@end

=== gain_05 | 서고 정리
@bg campus evening
@bgm autumn
@outfit 1
* 가인이 실습으로 도서관 서고 정리를 맡았다.
가인 [기본] 삼천 권이에요. 혼자 해요.
나 [놀람] 언제까지요?
가인 [기본] 이번 주요. 안 될 것 같아요.
@choice
- 도우러 갈게요 | +20 | A
- 안 되면 안 된다고 말해요 | +20 | B
@label A
나 [기본] 도우러 갈게요.
가인 [기본] 분류법을 아셔야 하는데요.
나 [기본] 가르쳐주면 되죠.
가인 [놀람] 가르치는 데도 시간이 걸려요.
나 [기본] 그 시간은 계산에 넣으셨어요?
가인 [부끄러움] ...안 넣었네요.
* 그날 두 사람은 사백 권을 옮겼다.
@goto END
@label B
나 [기본] 안 되면 안 된다고 말해요.
가인 [놀람] 실습인데요.
나 [기본] 삼천 권을 혼자 시키는 게 이상한 거예요.
가인 [기본] ...그렇게 생각해본 적이 없어요.
나 [기본] 말해보세요. 안 되면 그때 제가 도울게요.
가인 [부끄러움] ...말해볼게요.
* 다음 날 실습생이 두 명 더 배정됐다.
@label END
@affection 20
@end

=== gain_06 | 오늘은 계획 없이
@bg street evening
@bgm autumn
* 가인이 처음으로 수첩 없이 나왔다.
가인 [부끄러움] 두고 왔어요. 일부러요.
나 [놀람] 괜찮아요?
가인 [기본] 안 괜찮아요. 손이 허전해요.
@choice
- 그럼 오늘은 제가 정할게요 | +20 | A
- 발길 닿는 대로 가봐요 | +20 | B
@label A
나 [기본] 그럼 오늘은 제가 정할게요.
가인 [기본] 어디 가는데요?
나 [기본] 안 알려드릴게요.
가인 [놀람] 그게 제일 싫은 건데요.
나 [웃음] 알아요.
가인 [삐짐] ...그래도 따라갈게요.
* 그날 두 사람은 카페 세 군데를 갔다. 전부 가인이 가보고 싶던 곳이었다.
가인 [놀람] 이거 어떻게 알았어요?
나 [기본] 수첩 뒤에 적혀 있던데요.
@goto END
@label B
나 [기본] 발길 닿는 대로 가봐요.
가인 [기본] 그러다 아무 데도 못 가면요?
나 [기본] 그럼 못 간 거죠.
가인 [기본] ...그게 되나요.
* 두 사람은 두 시간 걷다가 결국 집 근처 편의점에 앉았다.
가인 [웃음] 아무 데도 못 갔네요.
나 [기본] 재미없었어요?
가인 [부끄러움] ...아니요. 그게 이상해요.
@label END
@affection 20
@end

=== gain_07 | 아무것도 못 읽은 주
@bg room night
@bgm sad
* 일주일 동안 가인은 책을 한 권도 못 읽었다.
가인 [기본] 글자가 안 들어와요.
나 [기본] 피곤해서요?
가인 [기본] 아니요. 무서워서요.
* 가인은 안경을 벗어 닦았다.
가인 [기본] 시험이 두 달 남았는데, 읽어야 할 게 아직 산더미예요.
가인 [기본] 근데 펼치면 「이걸 다 못 읽으면 어떡하지」부터 생각나요.
가인 [삐짐] 그러다 보면 한 쪽도 못 넘겨요.
나 [기본] 한 쪽만 읽어봐요.
가인 [놀람] 한 쪽이요?
나 [기본] 네. 오늘은 한 쪽만요.
가인 [기본] ...그걸로 뭐가 돼요.
나 [기본] 한 쪽은 되죠. 오늘 영이 아니라 하나가 되고요.
* 그날 가인은 열두 쪽을 읽었다.
@affection 15
@end

=== gain_08 | 임용 시험 전날
@bg maru night
@bgm tense
@outfit 1
* 시험 전날, 가인은 수첩을 펼쳐 놓고 아무것도 적지 않았다.
가인 [기본] 내일 칸이 비어 있어요.
나 [기본] 시험 있잖아요.
가인 [기본] 적으면 진짜가 되는 것 같아서요.
* 가인은 펜을 들었다 놓았다.
가인 [기본] 사 년을 준비했는데 하루에 끝나요.
가인 [부끄러움] 떨어지면 사 년이 없어지는 건가 싶어요.
나 [기본] 안 없어져요.
가인 [놀람] ...
나 [기본] 사 년 동안 읽은 건 어디 안 가요. 시험이 그걸 가져가진 못해요.
가인 [기본] ...그렇게 생각해본 적 없어요.
* 가인은 내일 칸에 한 줄을 적었다. 「시험. 그리고 돌아오기.」
@affection 20
@end

=== gain_09 | 대출 기록
@bg maru evening
@bgm warm
* 시험이 끝나고 가인이 도서관에서 뭔가를 들고 왔다.
가인 [웃음] 제 대출 기록이요. 사 년치를 뽑아봤어요.
* 종이 여러 장에 책 제목이 빼곡했다.
가인 [기본] 팔백 권쯤 돼요.
나 [놀람] 다 읽었어요?
가인 [웃음] 아니요. 절반은 반쯤 읽다 반납했어요.
* 가인은 맨 아래쪽을 가리켰다.
가인 [기본] 이건 아직 반납 안 한 거예요.
나 [기본] 그 소설이요?
가인 [부끄러움] 네. 아직도 안 끝냈어요.
가인 [기본] 끝내기가 싫어서요. 아직도요.
@affection 15
@end

=== gain_10 | 마지막 대출
@bg maru night
@bgm confess
@outfit 2
* 열 번째 판이 끝났다. 가인은 수첩과 책 한 권을 나란히 놓았다.
가인 [기본] 오늘 다 읽었어요. 그 소설이요.
@cg gain_ending
* 가인은 책을 덮고 한참 가만히 있었다.
가인 [기본] 좋은 건 아껴 읽게 된다고 했잖아요.
가인 [기본] 근데 아끼다 보면 영영 안 끝나더라고요.
* 가인은 수첩을 펼쳤다. 지난 몇 달치가 보였다.
가인 [기본] 여기 「쉼」이라고 적힌 칸들 보이세요?
나 [기본] 네.
가인 [부끄러움] 전부 마루에 앉아 있던 시간이에요. 하나도 안 빼고요.
가인 [기본] 계획에 없던 시간이 계획표에서 제일 많아졌어요.
가인 [기본] 좋아해요.
가인 [웃음] 아끼다가 못 말할까 봐 오늘 말해요.
@choice
- 저도 계획에 없었어요 | +20 | A
- 다음 책은 같이 읽어요 | +20 | B
@label A
나 [기본] 저도 계획에 없었어요.
가인 [놀람] 계획 세우세요?
나 [기본] 아니요. 그래서 더 그래요.
가인 [웃음] ...그건 계획이 있는 사람만 할 수 있는 말인데요.
나 [기본] 그럼 오늘부터 세울게요. 「쉼」 칸부터요.
가인 [부끄러움] ...그럼 제 칸이랑 겹치는데.
@goto END
@label B
나 [기본] 다음 책은 같이 읽어요. 그럼 안 아껴도 되잖아요.
가인 [놀람] 같이 읽으면 왜 안 아껴요?
나 [기본] 끝나도 얘기할 사람이 남으니까요.
가인 [기본] ...
가인 [부끄러움] 그런 이유는 책에서도 못 봤어요.
@label END
@bgm warm
가인 [웃음] 그럼 내일 칸에 적을게요. 「같이 읽기」로요.
* 그날 밤 반납 알림 문자는 오지 않았다.
@affection 20
@point 300
@end
`,Im=`# 하나 (분위기) - 여름 / 5번 하숙생

=== hana_01 | 마루에서 춤추는 사람
@bg maru night
@bgm summer
@outfit 0
* 마루에서 쿵, 쿵 하는 소리가 났다. 음악은 들리지 않았다.
하나 [놀람] 어! 죄송해요, 시끄러웠죠?
나 [기본] 음악도 없이 춤춰요?
하나 [웃음] 이어폰 꽂고 있었어요. 소리는 제 발에서 나는 거예요.
* 하나는 이어폰을 빼고 웃었다.
하나 [기본] 301호 하나요. 실용무용과예요.
나 [기본] 연습실 안 가고요?
하나 [기본] 연습실은 열 시에 닫아요. 저는 열 시부터가 시작이고요.
나 [웃음] 그래서 마루예요?
하나 [웃음] 마루가 제일 넓잖아요. 그리고 바닥이 좋아요.
* 하나는 방석을 두 개 깔고 앉았다. 묻지도 않고.
하나 [웃음] 오빠~ 오늘도 같이 한 판 할래요? 아, 처음이지. 오늘부터 같이요.
@affection 10
@end

=== hana_02 | 음악 소리 좀 줄여
@bg maru night
@bgm summer
* 다음 날 밤, 마루에 쪽지가 붙어 있었다. 「열두 시 넘으면 조용히」
하나 [삐짐] 서연 언니예요. 반장 노릇 하느라 바빠요.
나 [기본] 틀린 말은 아닌데요.
하나 [기본] 알아요. 그래서 더 얄미워요.
* 하나는 쪽지를 떼지 않고 그 밑에 한 줄을 적었다. 「알겠습니다 반장님」
나 [웃음] 그렇게 적으면 더 혼나요.
하나 [웃음] 혼나는 건 괜찮아요. 무시당하는 게 싫지.
나 [놀람] ...
하나 [기본] 저 사실 시끄러운 거 좋아서 그러는 거 아니에요.
하나 [부끄러움] 조용하면 사람이 없는 것 같잖아요.
@affection 10
@end

=== hana_03 | 거울이 없는 연습
@bg maru night
@bgm summer
* 하나가 마루 유리창에 제 모습을 비춰 보며 팔을 들었다.
나 [기본] 거울 대신이에요?
하나 [기본] 네. 근데 잘 안 보여요.
나 [기본] 연습실 가면 거울 있잖아요.
하나 [기본] 거울 보면 자꾸 제 얼굴을 봐요. 동작이 아니라.
* 하나는 팔을 내리고 유리창에서 물러났다.
하나 [기본] 무대에서는 거울이 없잖아요. 그때가 제일 무서워요.
나 [놀람] 무대가 무서워요? 하나 씨가요?
하나 [웃음] 분위기 메이커는 원래 제일 많이 떨어요. 아무도 안 믿지만요.
* 그날 하나는 유리창을 등지고 춤췄다.
하나 [웃음] 이게 낫네요. 봐주는 사람이 있으면 거울이 필요 없어요.
@affection 10
@end

=== hana_04 | 발목
@bg room night
@bgm sad
@outfit 0
* 하나가 발목에 붕대를 감고 마루에 앉아 있었다.
나 [놀람] 어쩌다가요.
하나 [웃음] 점프 착지를 잘못했어요. 별거 아니에요.
나 [기본] 별거 아닌 사람이 붕대를 그렇게 감아요?
하나 [기본] ...이 주래요. 공연이 삼 주 남았는데.
* 하나는 웃는 얼굴을 유지하려다 실패했다.
하나 [삐짐] 웃는 것도 힘드네요.
@choice
- 안 웃어도 돼요 | +15 | A
- 삼 주면 나아요 | +15 | B
@label A
나 [기본] 안 웃어도 돼요.
하나 [놀람] 분위기 안 좋아지잖아요.
나 [기본] 지금 분위기 좋게 할 사람은 하나 씨가 아니에요.
하나 [기본] ...
하나 [부끄러움] 그 말 처음 들어봐요.
@goto END
@label B
나 [기본] 삼 주면 나아요. 이 주 쉬고 일 주 연습하면 되죠.
하나 [기본] 일 주로 되는 안무가 아니에요.
나 [기본] 그럼 안무를 바꾸면 되죠.
하나 [놀람] ...바꿔도 되는 거였나.
@label END
* 그날 하나는 앉아서 손동작만 연습했다.
@affection 15
@end

=== hana_05 | 축제 무대 구경
@bg festival night
@bgm summer
@outfit 1
* 학교 축제 무대에 하나 대신 다른 팀이 올라갔다.
하나 [기본] 원래 제 자리였어요. 저기.
나 [기본] 안 보고 가도 돼요.
하나 [기본] 봐야죠. 안 보면 더 신경 쓰여요.
@choice
- 그럼 제일 앞에서 봐요 | +20 | A
- 끝나면 맛있는 거 먹으러 가요 | +20 | B
@label A
나 [기본] 그럼 제일 앞에서 봐요.
하나 [놀람] 앞에서요? 더 아플 텐데.
나 [기본] 어차피 아플 거면 똑바로 보는 게 나아요.
* 하나는 무대 앞에서 끝까지 봤다. 박수도 쳤다.
하나 [기본] ...잘하더라고요. 인정.
@goto END
@label B
나 [기본] 끝나면 맛있는 거 먹으러 가요.
하나 [웃음] 그걸로 넘어갈 줄 알아요?
나 [기본] 네.
하나 [삐짐] ...넘어가네요. 치사해요.
@label END
* 돌아오는 길에 하나는 아무 말도 하지 않다가, 집 앞에서 한 마디 했다.
하나 [부끄러움] 다음엔 제가 저기 서 있을게요. 보러 와줘요.
@affection 20
@end

=== hana_06 | 안무가 안 나와요
@bg maru night
@bgm summer
* 하나가 마루에 앉아 음악만 반복해서 듣고 있었다.
하나 [기본] 사십 번째 듣고 있어요. 안무가 안 나와요.
나 [기본] 발목 때문에요?
하나 [기본] 그건 나았어요. 머리가 안 돌아가는 거예요.
* 하나는 이어폰 한 쪽을 내밀었다.
하나 [기본] 들어볼래요? 뭐가 떠오르는지.
@choice
- 저는 춤 몰라요 | +20 | A
- 한 번 들어볼게요 | +20 | B
@label A
나 [기본] 저는 춤 몰라요.
하나 [웃음] 그래서 물어보는 거예요. 아는 사람은 다 비슷하게 말해요.
나 [기본] ...그럼요. 이 부분에서 멈추면 좋겠는데요.
하나 [놀람] 멈춰요?
나 [기본] 계속 움직이니까 어디를 봐야 할지 모르겠어요.
하나 [기본] ...그거네요. 쉬는 데가 없었어요.
@goto END
@label B
나 [기본] 한 번 들어볼게요.
* 삼 분짜리 곡이 끝나고, 나는 한 마디를 했다.
나 [기본] 마지막에 조용해지는 데가 있네요.
하나 [놀람] 거기서 제일 크게 움직이려고 했는데요.
나 [기본] 조용한데 크게 움직이면 안 어울리지 않아요?
하나 [기본] ...반대로 해볼게요.
@label END
* 그날 새벽, 마루에서 쿵 소리가 다시 났다.
@affection 20
@end

=== hana_07 | 박수 없는 리허설
@bg campus night
@bgm sad
* 리허설이 끝난 빈 강당에서 하나가 혼자 서 있었다.
하나 [기본] 아무도 안 쳐요. 리허설이니까 당연한데요.
나 [기본] 그래도 허전해요?
하나 [기본] 허전한 정도가 아니에요. 무서워요.
* 하나는 객석 쪽을 오래 봤다.
하나 [기본] 저는 반응이 있어야 움직여지는 사람이에요.
하나 [삐짐] 그게 제 약점이에요. 혼자서는 못 춰요.
나 [기본] 그럼 혼자 안 추면 되죠.
하나 [놀람] 무대는 혼자 서는 건데요.
나 [기본] 객석에 한 명만 있으면 혼자가 아니잖아요.
하나 [부끄러움] ...한 명은 확보된 건가요.
나 [기본] 네. 확보됐어요.
@affection 15
@end

=== hana_08 | 공연 전날
@bg maru night
@bgm tense
@outfit 1
* 공연 전날 밤, 하나는 마루에 앉아 아무것도 하지 않았다.
나 [기본] 연습 안 해요?
하나 [기본] 오늘 하면 내일 다리가 안 움직여요.
* 하나는 손으로 무릎을 톡톡 두드렸다.
하나 [기본] 내일 실수하면 어떡하죠.
나 [기본] 하면 하는 거죠.
하나 [삐짐] 위로를 그렇게 해요?
나 [기본] 실수 안 한다고 해봤자 안 믿잖아요.
하나 [놀람] ...
하나 [웃음] 맞아요. 안 믿어요.
나 [기본] 대신 실수해도 박수는 칠게요. 그건 확실해요.
하나 [부끄러움] ...그게 훨씬 나은 위로네요.
@affection 20
@end

=== hana_09 | 객석에서 보기
@bg festival night
@bgm warm
* 공연 당일. 객석 세 번째 줄에서 하나의 무대를 봤다.
* 곡 중간, 조용해지는 부분에서 하나는 정말로 멈춰 섰다.
* 그 순간 객석이 조용해졌다. 그리고 다시 움직였을 때 박수가 터졌다.
하나 [웃음] 봤어요? 멈추는 거요.
나 [기본] 봤어요. 그게 제일 좋았어요.
하나 [부끄러움] 그거 오빠가 알려준 거잖아요.
나 [놀람] 저는 춤 모른다니까요.
하나 [웃음] 알아요. 근데 그래서 맞았어요.
* 하나는 땀에 젖은 채로 웃었다.
하나 [기본] 무대에서 세 번째 줄 봤어요. 계속 거기만 봤어요.
@affection 15
@end

=== hana_10 | 마지막 박자
@bg maru night
@bgm confess
@outfit 2
* 열 번째 판이 끝났다. 하나는 이겼는데도 소리를 지르지 않았다.
나 [놀람] 오늘은 조용하네요.
하나 [부끄러움] 오늘은 시끄럽고 싶지 않아서요.
@cg hana_ending
* 하나는 이어폰 한 쪽을 내밀었다. 공연에서 쓴 그 곡이었다.
하나 [기본] 이 곡, 마지막 박자가 하나 비어 있어요.
나 [기본] 비어 있어요?
하나 [기본] 네. 아무도 안 채워요. 그냥 끝나요.
* 하나는 손가락으로 박자를 셌다. 하나, 둘, 셋, 그리고 멈췄다.
하나 [기본] 저 원래 조용한 게 무섭다고 했잖아요.
하나 [부끄러움] 근데 이 집 와서는 조용해도 안 무서워요.
하나 [기본] 조용한데 사람이 있으니까요.
하나 [기본] 저 좋아해요.
하나 [웃음] 이겨서 하는 말 아니에요. 진 날에도 하려고 했어요.
하나 [부끄러움] 분위기 메이커가 분위기 못 띄우고 이러고 있네요.
@choice
- 오늘은 제가 띄울게요 | +20 | A
- 마지막 박자는 제가 채울게요 | +20 | B
@label A
나 [기본] 오늘은 제가 띄울게요.
하나 [놀람] 오빠가요? 어떻게요?
나 [기본] 박수 치면 되죠. 실수해도 친다고 했잖아요.
하나 [부끄러움] ...지금 실수한 거 맞는데.
@goto END
@label B
나 [기본] 마지막 박자는 제가 채울게요.
하나 [놀람] 그거 비워두는 게 안무인데요.
나 [기본] 그럼 안무를 바꾸면 되죠. 하나 씨가 가르쳐줬잖아요.
하나 [부끄러움] ...제 말을 그렇게 쓰면 반칙이에요.
@label END
@bgm warm
하나 [웃음] 그럼 다음 무대도 세 번째 줄이에요. 비워둘게요.
* 그날 밤 마루에서는 쿵 소리가 나지 않았다. 대신 오래 앉아 있었다.
@affection 20
@point 300
@end
`,zm=`# 하린 (설계실) - 여름 / 10번 하숙생

=== harin_01 | 206호는 불이 안 꺼진다
@bg hallway night
@bgm autumn
@outfit 0
* 새벽 두 시. 206호 문틈으로만 불빛이 새어 나왔다.
* 문이 열려 있길래 들여다봤더니, 바닥 가득 도면이 펼쳐져 있었다.
하린 [기본] 밟지 마.
나 [놀람] 아, 죄송합니다.
하린 [기본] 아니, 거기 말고. 네 왼발.
* 왼발 밑에 A1 용지가 한 장 깔려 있었다.
하린 [삐짐] 그거 세 시간짜리야.
나 [놀람] ...정말 죄송합니다.
* 하린은 도면을 털어보더니 별일 아니라는 듯 옆으로 밀었다.
하린 [기본] 됐어. 어차피 반려될 거였어.
하린 [기본] 206호 하린. 건축공학과 사학년. 졸업설계 중이야.
나 [기본] 방을 크게 쓰시네요.
하린 [웃음] 이 방 보고 들어온 거야. 책상이 이 미터거든.
하린 [기본] 앉아. 머리 식힐 겸 한 판 하자.
@affection 10
@end

=== harin_02 | 도면 위의 밥그릇
@bg maru night
@bgm autumn
* 하린은 패를 내기 전에 항상 삼 초쯤 눈을 굴렸다. 무언가를 세는 눈이었다.
나 [놀람] 뭘 세는 거예요?
하린 [기본] 남은 패. 여덟월이 두 장 남았고, 그중 하나는 네 손에 있어.
나 [놀람] ...어떻게 알아요?
하린 [기본] 네가 아까 여덟월 안 먹었잖아. 먹을 수 있었는데.
* 정말로 내 손에는 팔월이 있었다.
나 [기본] 무섭네요.
하린 [웃음] 무서워할 거 없어. 계산은 틀릴 때가 있거든.
* 하린은 그날 밥그릇을 도면 위에 올려놓고 먹었다.
나 [놀람] 도면 위에서 드셔도 돼요?
하린 [기본] 반려된 거야. 이제 식탁보야.
@affection 10
@end

=== harin_03 | 야식 원정대
@bg cvs night
@bgm autumn
* 새벽 세 시, 하린이 문을 두드렸다.
하린 [기본] 배고파. 나가자.
나 [놀람] 지금요?
하린 [기본] 지금 아니면 언제 먹어. 아침에 먹으면 아침밥이야.
* 편의점까지는 걸어서 십이 분이었다.
하린 [기본] 정확히는 십일 분 사십 초. 재봤어.
나 [웃음] 그런 것도 재세요?
하린 [기본] 나는 다 재. 직업병이야.
@choice
- 오늘은 재지 말고 그냥 걸어요 | +15 | A
- 그럼 돌아가는 길도 재봐요 | +15 | B
@label A
나 [기본] 오늘은 재지 말고 그냥 걸어요.
하린 [놀람] 왜?
나 [기본] 밤에 걷는 건 재는 게 아니잖아요.
하린 [기본] ...그건 좀 새로운 접근이네.
* 그날 돌아오는 길은 십오 분이 걸렸다. 하린은 시간을 재지 않았다.
@goto END
@label B
나 [기본] 그럼 돌아가는 길도 재봐요.
하린 [웃음] 좋아. 같은 길인데 다르게 나오면 그게 데이터야.
* 돌아오는 길은 십오 분이었다.
하린 [놀람] 삼 분이 어디서 늘었지.
나 [기본] 얘기하느라 느려진 거죠.
하린 [기본] ...그것도 변수로 넣어야겠네.
@label END
@affection 15
@end

=== harin_04 | 설계 반려
@bg room night
@bgm sad
* 도면이 방 가득 뒤집혀 있었다. 하린은 벽에 기대 앉아 있었다.
하린 [기본] 세 번째 반려야.
나 [기본] 이유가 뭐래요?
하린 [기본] 「사람이 살 것 같지 않다」래.
* 하린은 웃었는데, 웃는 얼굴이 아니었다.
하린 [기본] 구조는 완벽해. 동선도 최적이고. 채광도 계산했어.
하린 [삐짐] 근데 사람이 살 것 같지 않대. 그게 무슨 말이야.
나 [기본] ...
하린 [기본] 나 사람 사는 거 몰라서 그런가 봐.
@choice
- 이 집을 재보면 되잖아요 | +15 | A
- 여기서 며칠 살아보세요 | +15 | B
@label A
나 [기본] 이 집을 재보면 되잖아요. 사람이 살고 있으니까.
하린 [놀람] 이 집을?
나 [기본] 서른 년 동안 방이 안 비었대요. 그럼 답이 여기 있는 거죠.
하린 [기본] ...그건 생각 못 했네.
@goto END
@label B
나 [기본] 여기서 며칠 살아보세요. 방에서 말고, 마루에서요.
하린 [삐짐] 나 여기 사는데?
나 [기본] 방에만 있잖아요. 그건 사는 게 아니라 작업하는 거죠.
하린 [놀람] ...반박을 못 하겠네.
@label END
* 그날 하린은 처음으로 계산을 틀렸다. 뻑을 세 번 밟았다.
하린 [기본] 오늘은 머리가 안 돌아가네.
@affection 15
@end

=== harin_05 | 모형 만들기
@bg maru night
@bgm autumn
@outfit 1
* 하린이 마루에 골판지와 칼을 펼쳐놓고 모형을 만들고 있었다.
나 [놀람] 이거 이 집이에요?
하린 [기본] 응. 주제 바꿨어. 하숙집으로.
* 정말로 마루와 방 열다섯 개가 축척대로 잘려 있었다.
하린 [기본] 근데 또 막혔어. 방은 다 만들었는데 허전해.
@choice
- 방석을 놓아보세요 | +20 | A
- 불을 켜보세요 | +20 | B
@label A
나 [기본] 방석을 놓아보세요. 마루에.
하린 [놀람] 방석?
나 [기본] 할머니가 매일 열 개를 펴두셨대요. 손님이 없는 날에도요.
* 하린은 한참 말이 없더니 골판지를 아주 작게 잘라 열 개를 놓았다.
하린 [기본] ...이제 사람이 살 것 같다.
@goto END
@label B
나 [기본] 불을 켜보세요.
하린 [놀람] 모형에?
나 [기본] 마루만요. 밤에 그것만 켜져 있잖아요.
* 하린은 전선을 따와 아주 작은 전구를 마루 자리에 넣었다.
하린 [기본] ...이거네. 이게 없었던 거네.
@label END
하린 [웃음] 너 은근히 쓸모 있다.
@affection 20
@end

=== harin_06 | 치수 재도 돼?
@bg room evening
@bgm autumn
* 하린이 줄자를 들고 내 방 앞에 서 있었다.
하린 [기본] 네 방 창문 재도 돼?
나 [놀람] 왜요?
하린 [기본] 모형에 넣으려고. 방마다 창문 크기가 다르더라.
* 하린은 창틀과 문턱과 천장 높이를 쟀다. 그리고 수첩에 옮겨 적었다.
하린 [기본] 이 집 이상해. 방마다 창문 방향이 달라.
나 [기본] 할머니가 「아침 해를 보고 싶은 사람이랑 바다를 보고 싶은 사람은 다르다」고 하셨대요.
하린 [놀람] ...그걸 방마다 다르게 했다고?
하린 [기본] 그건 효율이 아닌데.
나 [기본] 효율은 아니죠.
@choice
- 효율이 전부는 아니니까요 | +15 | A
- 어느 방이 제일 마음에 들어요? | +15 | B
@label A
나 [기본] 효율이 전부는 아니니까요.
하린 [삐짐] 공대생 앞에서 할 말은 아닌데.
나 [웃음] 그래서 반려당하신 거 아니에요?
하린 [놀람] ...야.
하린 [기본] ...맞는 말이라서 더 얄밉다.
@goto END
@label B
나 [기본] 어느 방이 제일 마음에 들어요?
하린 [기본] 206호. 책상 크잖아.
나 [기본] 창문은요?
하린 [기본] ...창문은 마루 쪽으로 나 있어. 밤에 불 켜지면 보여.
하린 [부끄러움] 그게 마음에 들었나 봐.
@label END
하린 [기본] ...근데 그게 맞는 것 같네.
@affection 15
@end

=== harin_07 | 밤샘 사흘째
@bg room night
@bgm tense
* 사흘째 206호 불이 꺼지지 않았다. 하린은 책상에 엎드려 있었다.
나 [기본] 좀 자요.
하린 [기본] 두 시간만 더.
나 [기본] 그 말 어제도 했어요.
하린 [삐짐] ...
* 하린의 손이 떨리고 있었다. 커피를 여섯 잔 마셨다고 했다.
나 [기본] 지금 이 상태로 그으면 내일 다시 그어야 돼요.
하린 [놀람] ...그건 맞는 말이네.
하린 [기본] 너 나보다 계산 잘한다.
나 [기본] 계산이 아니라 그냥 보면 알아요.
* 하린은 처음으로 도면을 덮고 마루로 내려왔다.
하린 [기본] 한 판만 하고 잘게. 한 판만.
* 하린은 그 한 판 중간에 잠들었다.
@affection 15
@end

=== harin_08 | 최종 심사 전날
@bg maru night
@bgm tense
@outfit 1
* 심사 전날, 하린은 모형을 마루에 놓고 오래 들여다봤다.
하린 [기본] 내일 떨어지면 졸업 한 학기 미뤄야 돼.
나 [기본] 안 떨어질 거예요.
하린 [삐짐] 그거 근거 없는 말이잖아.
나 [기본] 네. 근거 없어요.
하린 [놀람] ...솔직하네.
@choice
- 근거는 없는데 확신은 있어요 | +20 | A
- 떨어져도 이 집은 그대로예요 | +20 | B
@label A
나 [기본] 근거는 없는데 확신은 있어요.
하린 [기본] 그건 계산이 아니야.
나 [기본] 네. 그냥 믿는 거예요.
하린 [부끄러움] ...나 그런 거 받아본 적 없는데.
@goto END
@label B
나 [기본] 떨어져도 이 집은 그대로예요.
하린 [놀람] 무슨 말이야.
나 [기본] 심사가 이 집을 없애는 건 아니니까요. 돌아올 데는 있어요.
하린 [부끄러움] ...너 진짜 반칙이다.
@label END
하린 [웃음] 알았어. 오늘은 일찍 잘게.
@affection 20
@end

=== harin_09 | 모형 속 마루
@bg campus evening
@bgm warm
* 심사가 끝나고 하린이 전화를 걸어왔다.
하린 [웃음] 통과.
나 [기본] 뭐라고 하셨대요?
하린 [기본] 「이 집은 사람이 살고 있다」고 했어.
* 하린은 잠깐 말을 멈췄다.
하린 [기본] 교수님이 마루의 전구를 한참 보시더라.
하린 [기본] 그게 뭐냐고 물으시길래, 밤에 켜두는 불이라고 했어.
하린 [기본] 그랬더니 그러시더라. 「이게 이 설계의 전부네」
하린 [부끄러움] ...네 아이디어였잖아.
나 [기본] 아니요. 하린 씨가 켠 거죠.
하린 [웃음] 오늘 야식 내가 산다. 나와.
@affection 15
@end

=== harin_10 | 사람이 사는 집
@bg maru night
@bgm confess
@outfit 2
* 열 번째 판이 끝났다. 하린은 계산을 하지 않고 던지듯 냈다.
나 [놀람] 오늘은 안 세네요.
하린 [기본] 오늘은 안 셀래.
@cg harin_ending
* 하린은 졸업 모형을 마루에 올려놓았다. 전구는 켜져 있었다.
하린 [기본] 이거 학교에 안 내고 가져왔어.
나 [놀람] 내야 되는 거 아니에요?
하린 [웃음] 사본 냈어. 원본은 여기 거야.
* 하린은 모형 마루에 놓인 작은 골판지 조각들을 가리켰다.
하린 [기본] 방석 열 개. 그날 네가 말한 대로.
하린 [기본] 근데 만들면서 하나를 더 놨어.
나 [기본] 열한 개요?
하린 [부끄러움] 응. 이유는 알잖아.
하린 [기본] 나 사람 사는 거 모른다고 했잖아. 진짜 몰랐어.
하린 [기본] 구조랑 동선이랑 채광은 아는데, 그게 왜 집이 되는지를 몰랐어.
하린 [부끄러움] 근데 여기 오고 나서 알았어. 사람이 기다리면 집이 되더라.
하린 [기본] 나 너 좋아해.
하린 [웃음] 계산해서 나온 결론이 아니야. 세 번 다시 세봤는데 답이 안 나왔어.
@choice
- 계산 안 되는 것도 있죠 | +20 | A
- 열한 번째 방석은 제 자리예요 | +20 | B
@label A
나 [기본] 계산 안 되는 것도 있죠.
하린 [삐짐] 그건 공대생한테 제일 기분 나쁜 말이야.
나 [웃음] 지금은요?
하린 [부끄러움] ...지금은 좀 괜찮네.
@goto END
@label B
나 [기본] 열한 번째 방석은 제 자리예요.
하린 [놀람] 자기 자리인 거 알고 있었어?
나 [기본] 열 개는 할머니가 펴두신 거고, 하나가 늘었으면 그건 하린 씨가 놓은 거죠.
하린 [부끄러움] ...너 진짜 계산 잘한다.
@label END
@bgm warm
하린 [웃음] 이제 도면 안 봐도 되니까, 밤에 뭐 하지?
나 [기본] 야식 먹으러 가면 되죠. 십일 분 사십 초 걸려요.
하린 [웃음] 그거 아직도 기억하고 있어?
@affection 20
@point 300
@end
`,Dm=`# 지은 (막내) - 봄 / 1번 하숙생

=== jieun_01 | 마루에 먼저 나와 있는 사람
@bg maru night
@bgm spring
@outfit 0
* 밤 열한 시. 마루에 불이 켜져 있고, 방석 하나에 사람이 앉아 있었다.
지은 [놀람] 어! 주인집 분이세요?
나 [기본] 네. 여기 사는 사람이에요.
지은 [웃음] 저 201호 지은이요. 오늘 들어왔어요.
* 짐은 아직 복도에 반쯤 나와 있었다.
나 [기본] 짐부터 푸시지.
지은 [기본] 풀다가 마루 보고 나왔어요. 불 켜져 있길래.
지은 [부끄러움] 저 제일 어리죠? 그래도 제일 먼저 나와 앉을 거예요.
나 [놀람] 그게 무슨 자랑이에요.
지은 [웃음] 자랑 맞아요. 언니들은 다들 늦게 들어오거든요.
* 지은은 화투 상자를 이미 꺼내 놓고 있었다.
지은 [웃음] 한 판 해요. 저 규칙은 어제 외웠어요. 아마도.
@affection 10
@end

=== jieun_02 | 막내의 규칙 세 가지
@bg maru night
@bgm spring
지은 [기본] 제가 막내 규칙을 정했어요.
나 [기본] 막내가 규칙을 정해요?
지은 [웃음] 막내니까 정할 수 있는 거예요. 지키는 건 저니까.
지은 [기본] 하나, 마루 불은 제가 켜요. 둘, 제가 제일 먼저 앉아요.
나 [기본] 셋은요?
지은 [부끄러움] 셋은... 아직 안 정했어요.
* 그날 지은은 뻑을 두 번 밟고도 웃었다.
지은 [웃음] 셋은 이걸로 할래요. 지더라도 끝까지 앉아 있기.
나 [웃음] 그건 규칙이 아니라 고집인데요.
지은 [삐짐] 막내는 고집도 규칙이에요.
@affection 10
@end

=== jieun_03 | 카메라를 들고 다니는 이유
@bg yard evening
@bgm spring
* 지은은 늘 작은 카메라를 목에 걸고 다녔다.
나 [기본] 그거 무겁지 않아요?
지은 [기본] 무거워요. 근데 안 들고 나가면 꼭 찍을 게 생겨요.
* 지은은 마당 끝 감나무를 한 장 찍었다.
지은 [기본] 저 고등학교 때 전학을 네 번 갔어요.
나 [놀람] 네 번이요?
지은 [기본] 그때마다 사진을 찍었어요. 나중에 보려고요.
지은 [부끄러움] 근데 지금 보면 다 풍경만 있어요. 사람이 없어요.
나 [기본] 왜요?
지은 [기본] 같이 찍자고 말할 사람이 없었거든요.
* 지은은 카메라를 내리고 마루 쪽을 봤다.
지은 [웃음] 여기서는 좀 달라질 것 같아요.
@affection 10
@end

=== jieun_04 | 잘 찍는다는 말
@bg room night
@bgm sad
@outfit 0
* 지은이 노트북을 덮고 한참 앉아 있었다.
나 [기본] 과제 잘 안 돼요?
지은 [기본] 교수님이 제 사진 보고 그러셨어요. "잘 찍네."
나 [놀람] 칭찬 아니에요?
지은 [삐짐] 그 뒤에 "그런데 왜 찍었는지는 모르겠네" 하셨어요.
* 지은은 무릎을 끌어안았다.
지은 [기본] 저 사실 왜 찍는지 몰라요. 그냥 안 찍으면 불안해서요.
@choice
- 불안해서 찍는 것도 이유예요 | +15 | A
- 그럼 이유가 생길 때까지 찍으면 되죠 | +15 | B
@label A
나 [기본] 불안해서 찍는 것도 이유예요.
지은 [놀람] 그게 이유가 돼요?
나 [기본] 되죠. 남기고 싶은 게 있으니까 불안한 거잖아요.
지은 [부끄러움] ...그렇게 말해준 사람 처음이에요.
@goto END
@label B
나 [기본] 그럼 이유가 생길 때까지 찍으면 되죠.
지은 [기본] 그동안은요?
나 [기본] 그동안은 그냥 찍는 거고요. 저도 이유 없이 사는데요.
지은 [웃음] ...그건 좀 위로가 되네요.
@label END
* 그날 지은은 처음으로 사람을 찍었다. 마루에 앉은 사람을.
@affection 15
@end

=== jieun_05 | 첫 과제 촬영
@bg street evening
@bgm spring
@outfit 1
* 첫 촬영 과제 날, 지은은 현관에서 발을 동동 굴렀다.
지은 [기본] 모델이 펑크 냈어요. 오늘 안에 찍어야 되는데.
나 [놀람] 지금이 여섯 시인데요.
지은 [삐짐] 알아요. 그래서 발을 구르고 있잖아요.
@choice
- 제가 서 있을게요 | +20 | A
- 언니들한테 물어봐요 | +20 | B
@label A
나 [기본] 제가 서 있을게요. 잘은 못 서지만요.
지은 [놀람] 진짜요?
나 [기본] 서 있기만 하면 되죠?
지은 [웃음] 서 있기만 하면 돼요. 근데 웃으면 더 좋고요.
* 그날 지은은 필름 한 통을 다 썼다. 전부 한 사람이었다.
@goto END
@label B
나 [기본] 언니들한테 물어봐요. 다섯 명은 있을걸요.
지은 [기본] 언니들은 안 돼요.
나 [놀람] 왜요?
지은 [부끄러움] 언니들이 서면 제가 안 보이잖아요.
나 [웃음] 그건 또 무슨 논리예요.
지은 [삐짐] 막내 논리요.
* 결국 그날 모델은 주인집 사람이 됐다.
@label END
지은 [웃음] 고마워요. 이건 진짜 갚을게요.
@affection 20
@end

=== jieun_06 | 언니들 몰래
@bg kitchen night
@bgm spring
* 새벽 한 시, 부엌에 불이 켜져 있었다. 지은이 라면을 끓이고 있었다.
지은 [놀람] 어! 쉿.
나 [기본] 왜요.
지은 [부끄러움] 수아 언니가 밤에 라면 끓이면 잔소리해요.
* 냄비에서 김이 올라왔다.
나 [웃음] 한 개 끓이면서 왜 두 개 꺼냈어요.
지은 [부끄러움] ...혹시 누가 올까 봐요.
@choice
- 그럼 제 몫이네요 | +20 | A
- 누가 올 줄 알았어요? | +20 | B
@label A
나 [기본] 그럼 제 몫이네요.
지은 [웃음] 네. 원래부터 두 개였어요.
나 [기본] 원래부터요?
지은 [부끄러움] 어제도 두 개 꺼냈다가 그냥 넣었어요.
@goto END
@label B
나 [기본] 누가 올 줄 알았어요?
지은 [부끄러움] ...매일 이 시간에 마루 불이 꺼지잖아요. 그때 나와요.
나 [놀람] 그걸 세고 있었어요?
지은 [삐짐] 세, 센 거 아니에요. 그냥 알게 된 거예요.
@label END
* 그날 라면은 둘이 나눠 먹었고, 다음 날 수아에게 들켰다.
@affection 20
@end

=== jieun_07 | 필름 한 통
@bg room night
@bgm sad
* 지은이 현상소에서 돌아와 봉투를 든 채 방문 앞에 서 있었다.
나 [기본] 잘 나왔어요?
지은 [기본] 한 통이 통째로 날아갔어요. 빛이 들어갔대요.
* 지은은 봉투를 열지도 않았다.
지은 [기본] 그 통에 과제도 있었고, 마당도 있었고...
지은 [부끄러움] 그날 마루에서 찍은 것도 있었어요.
나 [놀람] 그것도요?
지은 [삐짐] 제일 아까운 건 그거예요.
* 지은은 봉투를 옆에 내려놓고 패를 돌렸다.
지은 [기본] 오늘은 안 찍을래요. 어차피 또 날아갈지도 모르잖아요.
나 [기본] 그럼 오늘 건 제가 기억할게요.
지은 [놀람] ...네?
나 [기본] 필름 말고요. 그냥 기억해 둔다고요.
지은 [부끄러움] ...그런 건 어디서 배웠어요.
@affection 15
@end

=== jieun_08 | 전시 전날
@bg maru night
@bgm tense
@outfit 1
* 학과 전시 전날, 지은은 인화지를 마루에 펼쳐 놓고 골랐다.
지은 [기본] 세 장만 걸 수 있어요. 근데 열 장이 남았어요.
나 [기본] 제일 마음에 드는 걸로 하면 되죠.
지은 [삐짐] 그게 제일 어려워요.
* 인화지 중에 한 장이 마루 사진이었다.
지은 [부끄러움] 이건 뺄까 싶어요. 너무 개인적이라서요.
나 [기본] 개인적인 게 왜 문제예요.
지은 [기본] 사람들이 왜 찍었냐고 물으면 대답을 못 하잖아요.
나 [기본] 이제 대답할 수 있잖아요.
지은 [놀람] ...
지은 [부끄러움] 그럼 걸게요. 대신 안 물어보면 좋겠어요.
@affection 20
@end

=== jieun_09 | 벽에 걸린 사진
@bg campus evening
@bgm warm
* 전시장 한쪽 벽에 지은의 사진 세 장이 걸렸다.
* 가운데 걸린 것은 마루 사진이었다. 밤에 불이 켜진 마루, 방석 열다섯 개.
지은 [부끄러움] 사람들이 제일 오래 본 게 저거래요.
나 [놀람] 제목이 뭐예요?
지은 [기본] 「기다리는 자리」요.
* 지은은 벽을 보며 한참 말이 없었다.
지은 [기본] 교수님이 이번엔 안 물어보셨어요. 왜 찍었냐고.
나 [기본] 그럼 잘 찍은 거네요.
지은 [웃음] 그런가 봐요.
지은 [부끄러움] 근데 물어보셨으면 대답할 수 있었어요. 이번엔.
@affection 15
@end

=== jieun_10 | 마지막 한 장
@bg maru night
@bgm confess
@outfit 2
* 열 번째 판이 끝났다. 지은은 이기고도 자리에서 일어나지 않았다.
나 [기본] 안 자요?
지은 [부끄러움] 오늘은 좀 더 앉아 있을래요.
@cg jieun_ending
* 지은은 봉투에서 사진 한 장을 꺼냈다. 날아간 줄 알았던 필름의 한 장이었다.
지은 [기본] 한 장만 살았대요. 현상소에서 나중에 연락이 왔어요.
* 사진에는 마루에 앉은 사람이 찍혀 있었다. 첫날 밤의 그 자리였다.
지은 [부끄러움] 저 처음에 풍경만 찍는다고 했잖아요. 사람이 없다고.
지은 [기본] 여기 와서 사람을 찍기 시작했어요. 근데 한 명만 찍혀요.
나 [놀람] ...
지은 [기본] 저 좋아해요.
지은 [웃음] 이겨서 하는 말 아니에요. 오늘 이겼지만요.
지은 [부끄러움] 막내라서 제일 먼저 나와 앉았던 게 아니에요. 먼저 보고 싶어서였어요.
@choice
- 그럼 계속 먼저 나와 있어요 | +20 | A
- 다음엔 같이 찍혀요 | +20 | B
@label A
나 [기본] 그럼 계속 먼저 나와 있어요. 저도 나올게요.
지은 [놀람] 매일이요?
나 [기본] 매일이요. 규칙 셋으로 하죠.
지은 [부끄러움] ...그건 제가 정하는 건데.
@goto END
@label B
나 [기본] 다음엔 같이 찍혀요. 한 명만 나오면 심심하잖아요.
지은 [놀람] 같이요? 그럼 누가 찍어요?
나 [기본] 타이머 있잖아요.
지은 [웃음] ...그거 생각도 못 했어요.
@label END
@bgm warm
지은 [웃음] 그럼 오늘 한 장 더 찍을래요. 마지막 말고 첫 장으로요.
* 그날 밤 마루에서 셔터 소리가 한 번 났다.
@affection 20
@point 300
@end
`,Am=`# 민지 (밤번) - 가을 / 14번 하숙생

=== minji_01 | 새벽 세 시의 불빛
@bg maru night
@bgm winter
@outfit 0
* 새벽 세 시. 현관문이 아주 조용히 열렸다.
* 실습복 위에 코트만 걸친 사람이 신발을 벗고 있었다.
민지 [기본] 안 자고 뭐 해요.
나 [놀람] 그건 제가 할 말인데요.
민지 [기본] 저는 일하고 온 거고요.
* 민지는 308호라고 했다. 간호학과 사학년, 야간 실습 중이라고.
민지 [기본] 여기로 온 이유가 있어요.
나 [기본] 뭔데요.
민지 [기본] 새벽 세 시에 불 켜진 집이 여기밖에 없었어요.
* 민지는 코트를 벗어 걸고 마루에 앉았다.
민지 [기본] 매일 지나다니면서 봤어요. 저 집은 누가 안 자나 했죠.
나 [웃음] 접니다.
민지 [웃음] 알아요. 이제.
민지 [기본] 한 판 해요. 저 이 시간엔 잠이 안 와요.
@affection 10
@end

=== minji_02 | 물 한 잔
@bg kitchen night
@bgm winter
* 다음 날 마루에 앉으니 물 한 잔이 놓여 있었다.
민지 [기본] 마셔요. 밤에 물 안 마시면 다음 날 머리 아파요.
나 [놀람] 이런 것도 봐요?
민지 [기본] 직업이에요.
* 민지는 패를 내면서도 내 쪽을 한 번씩 봤다. 패가 아니라 얼굴을.
나 [기본] 왜 자꾸 보세요.
민지 [기본] 오늘 잘 안 풀렸죠.
나 [놀람] ...어떻게 알아요.
민지 [기본] 눈썹이요. 안 풀린 날은 눈썹 사이가 좁아져요.
* 그 말이 맞았다. 그날은 온종일 일이 꼬였다.
민지 [기본] 사람 얼굴 보는 게 일이라서요. 미안해요.
나 [기본] 미안할 일은 아니죠.
민지 [웃음] 그럼 다행이고요.
@affection 10
@end

=== minji_03 | 야간 실습
@bg maru night
@bgm winter
* 민지가 평소보다 두 시간 늦게 들어왔다.
민지 [기본] 오늘은 좀 길었어요.
나 [기본] 무슨 일 있었어요?
민지 [기본] ...있었어요.
* 민지는 그 이상 말하지 않았다. 대신 패를 돌렸다.
@choice
- 안 물어볼게요 | +15 | A
- 말하고 싶으면 들을게요 | +15 | B
@label A
나 [기본] 안 물어볼게요.
민지 [놀람] ...
민지 [기본] 보통은 다 물어보던데.
나 [기본] 말 안 하는 것도 이유가 있으니까요.
민지 [기본] ...고마워요. 그게 제일 편해요.
@goto END
@label B
나 [기본] 말하고 싶으면 들을게요. 안 하고 싶으면 안 해도 되고요.
민지 [기본] 그 두 번째가 중요하네요.
나 [기본] 네. 그게 중요하죠.
민지 [웃음] ...선택지를 주는 사람은 오랜만이에요.
@label END
* 그날 민지는 평소보다 오래 앉아 있었다. 말은 거의 하지 않았다.
@affection 15
@end

=== minji_04 | 손이 떨리는 날
@bg room night
@bgm sad
* 민지가 마루에서 주사기 연습 키트를 꺼내놓고 있었다.
민지 [기본] 오늘 처음으로 사람한테 놨어요.
나 [기본] 잘됐어요?
민지 [기본] 잘됐어요. 근데 손이 떨렸어요.
* 민지는 자기 손을 펴보였다. 지금도 아주 조금 떨리고 있었다.
민지 [기본] 환자분이 그걸 봤어요. 그리고 웃으시더라고요.
민지 [기본] 「처음이시구나」 하고요.
나 [기본] 뭐라고 하셨어요?
민지 [기본] 아무 말도 못 했어요. 죄송하다고만 했어요.
* 민지는 키트를 접었다.
민지 [기본] 사람 아프게 하는 일을 배우는 게 이렇게 어려운 줄 몰랐어요.
나 [기본] 안 떨리게 되면 그건 그것대로 무섭겠네요.
@choice
- 떨리는 게 잘못은 아니에요 | +15 | A
- 그 환자분은 왜 웃으셨을까요 | +15 | B
@label A
나 [기본] 떨리는 게 잘못은 아니에요.
민지 [기본] 환자 입장에서는 잘못이죠.
나 [기본] 환자분은 안 그러셨잖아요. 웃으셨다면서요.
민지 [놀람] ...
@goto END
@label B
나 [기본] 그 환자분은 왜 웃으셨을까요.
민지 [기본] 글쎄요. 서툰 게 우스워서겠죠.
나 [기본] 아니면 무서워하는 사람을 알아본 걸 수도 있고요.
민지 [놀람] ...그렇게는 생각 안 해봤어요.
@label END
민지 [놀람] ...
민지 [기본] 그 말 오래 생각할 것 같아요.
@affection 15
@end

=== minji_05 | 환자 이야기
@bg maru night
@bgm winter
@outfit 1
* 민지가 처음으로 먼저 말을 꺼냈다.
민지 [기본] 요 며칠 계속 생각나는 분이 있어요.
민지 [기본] 밤마다 못 주무시는 분인데, 제가 회진 돌면 꼭 깨어 계셨어요.
민지 [기본] 그분이 저한테 물으셨어요. 「밤에 안 자면 뭐 해요?」
@choice
- 뭐라고 답하셨어요? | +20 | A
- 그분한테는 밤이 길겠네요 | +20 | B
@label A
나 [기본] 뭐라고 답하셨어요?
민지 [부끄러움] 「집에 가서 화투 쳐요」 했어요.
나 [놀람] 진짜요?
민지 [웃음] 그랬더니 웃으시더라고요. 사흘 만에 처음 웃으셨대요.
민지 [기본] 그 얘기 하려고 오늘 기다렸어요.
@goto END
@label B
나 [기본] 그분한테는 밤이 길겠네요.
민지 [놀람] ...그렇게 말한 사람은 처음이에요.
민지 [기본] 다들 「잠이 안 오시냐」고만 물어요.
민지 [부끄러움] 밤이 길다는 걸 아는 사람이 있으니까 좀 낫네요.
@label END
민지 [웃음] 오늘은 이겨야겠어요. 기분 좋게 자려면.
@affection 20
@end

=== minji_06 | 국가고시 D-100
@bg room night
@bgm tense
* 달력에 빨간 동그라미가 쳐져 있었다.
민지 [기본] 백 일 남았어요.
나 [기본] 공부는요?
민지 [기본] 하고 있죠. 근데 실습이랑 같이 하니까 하루가 모자라요.
* 민지의 책상에는 문제집이 세 권 펼쳐져 있었다.
민지 [기본] 이 시험 떨어지면 일 년이에요.
나 [기본] 그럼 마루 안 내려와도 돼요. 공부하세요.
민지 [놀람] ...쫓아내는 거예요?
나 [기본] 아니요. 부담 갖지 말라고요.
민지 [기본] 부담 아니에요.
민지 [부끄러움] 여기 앉아 있는 삼십 분이 제일 잘 쉬는 시간이에요.
민지 [기본] 그거 빼면 하루가 더 길어져요.
@choice
- 그럼 삼십 분은 비워둘게요 | +15 | A
- 공부는 여기서 해도 돼요 | +15 | B
@label A
나 [기본] 그럼 삼십 분은 비워둘게요. 매일.
민지 [놀람] 매일이요?
나 [기본] 어차피 안 자잖아요, 저도.
민지 [부끄러움] ...그 삼십 분 때문에 백 일을 버틸 것 같네요.
@goto END
@label B
나 [기본] 공부는 여기서 해도 돼요. 마루 넓어요.
민지 [기본] 소리 나면 방해될 텐데요.
나 [기본] 소리 나는 게 낫죠. 이 집은 원래 그래요.
민지 [웃음] ...그 말 할머니한테 배웠죠.
@label END
@affection 15
@end

=== minji_07 | 잠 못 드는 밤
@bg hallway night
@bgm sad
* 새벽 네 시, 복도에서 민지와 마주쳤다. 둘 다 잠이 안 온 밤이었다.
민지 [기본] 오늘은 마루에 안 계시길래.
나 [기본] 올라가려다 못 자고 있었어요.
민지 [기본] 무슨 일 있어요?
* 이번에는 내가 말하지 않았다. 민지는 더 묻지 않았다.
민지 [기본] 앉아요. 여기 계단도 앉을 만해요.
* 두 사람은 계단에 나란히 앉았다.
민지 [기본] 저 환자분들한테 항상 하는 말이 있어요.
민지 [기본] 「안 주무셔도 돼요. 누워만 계세요.」
민지 [기본] 자라고 하면 더 못 자거든요.
나 [기본] 지금 저한테 하는 말이죠.
민지 [웃음] 네.
* 그날 아침 해가 뜰 때까지 두 사람은 계단에 앉아 있었다.
@affection 15
@end

=== minji_08 | 면접 전날
@bg maru night
@bgm tense
@outfit 1
* 시험이 끝나고, 민지는 병원 면접을 앞두고 있었다.
민지 [기본] 내일 면접이에요. 세 군데 중에 한 군데.
나 [기본] 어디로 가고 싶어요?
민지 [기본] ...그게 문제예요. 제일 좋은 데가 여기서 두 시간이에요.
* 민지는 처음으로 패를 오래 들고 있었다.
민지 [기본] 두 시간이면 여기서 못 살아요.
@choice
- 좋은 데로 가세요 | +20 | A
- 두 시간이면 못 오는 거리는 아니에요 | +20 | B
@label A
나 [기본] 좋은 데로 가세요.
민지 [놀람] ...그렇게 쉽게 말해요?
나 [기본] 쉽게 말한 거 아니에요. 세 번 생각하고 말한 거예요.
민지 [기본] ...
민지 [부끄러움] 그럼 세 번째 생각은 뭐였어요?
나 [기본] 그래도 오면 좋겠다는 거요.
@goto END
@label B
나 [기본] 두 시간이면 못 오는 거리는 아니에요.
민지 [기본] 매일은 못 와요.
나 [기본] 매일 안 와도 돼요. 불은 켜놓을 테니까.
민지 [부끄러움] ...그런 말 하면 결정을 못 하잖아요.
@label END
민지 [웃음] 오늘은 일찍 잘게요. 처음으로요.
@affection 20
@end

=== minji_09 | 첫 출근
@bg station morning
@bgm warm
* 민지는 가까운 병원을 골랐다. 버스로 이십 분 거리였다.
나 [놀람] 두 시간짜리 안 가시고요?
민지 [기본] 갔으면 좋았을 수도 있죠.
민지 [기본] 근데 제가 왜 그 집을 골랐는지 생각해봤어요.
나 [기본] 왜요?
민지 [기본] 새벽 세 시에 불 켜진 집이라서요.
민지 [부끄러움] 그 이유가 아직 안 없어졌더라고요.
* 민지는 첫 출근 가방을 고쳐 멨다.
민지 [기본] 오늘부터 삼교대예요. 밤번이 제일 많아요.
민지 [웃음] 그러니까 불은 계속 켜두세요.
@affection 15
@end

=== minji_10 | 돌아올 데
@bg maru night
@bgm confess
@outfit 2
* 열 번째 판이 끝났다. 민지는 이길 수 있는 자리에서 스톱을 불렀다.
나 [놀람] 고 하면 더 벌었을 텐데요.
민지 [기본] 알아요. 세 수 전부터 보였어요.
@cg nayun_ending
* 민지는 가방에서 수첩을 꺼냈다. 실습 때 쓰던 인계장이었다.
민지 [기본] 이거 환자 상태 적는 거예요. 매일 밤 적어요.
* 맨 뒷장에는 환자 이름이 아니라 다른 것이 적혀 있었다.
민지 [기본] 「03:10 귀가. 마루 점등 확인.」
민지 [부끄러움] 반년 치예요. 하루도 안 빠졌어요.
나 [놀람] 이걸 매일...
민지 [기본] 저 사람 상태 보는 게 일이잖아요.
민지 [기본] 근데 제 상태를 봐주는 사람은 없었어요. 여기 오기 전까지는요.
민지 [기본] 눈썹 사이가 좁아졌다고 말해주는 사람이 필요했나 봐요.
민지 [부끄러움] 저 좋아해요.
민지 [기본] 이겨서 하는 말이면 오늘 스톱 안 했어요.
민지 [기본] 새벽 세 시에 켜져 있던 불이라서 그래요. 그게 전부예요.
@choice
- 밤번인 날에도 켜둘게요 | +20 | A
- 이제 제 상태도 봐주세요 | +20 | B
@label A
나 [기본] 밤번인 날에도 켜둘게요.
민지 [놀람] 삼교대라 불규칙해요.
나 [기본] 그럼 그냥 계속 켜두면 되죠.
민지 [부끄러움] ...전기세 많이 나와요.
나 [웃음] 할머니도 그렇게 하셨대요.
@goto END
@label B
나 [기본] 이제 제 상태도 봐주세요.
민지 [놀람] 이미 보고 있었는데요.
나 [기본] 그럼 말도 해주세요. 속으로만 말고요.
민지 [부끄러움] ...그건 좀 어려운데.
나 [기본] 반년치 적어놨잖아요. 읽어주면 되죠.
@label END
@bgm warm
민지 [웃음] 그럼 오늘 인계 시작할게요. 「환자 상태 양호」.
* 그날 밤 마루의 불은 끝내 꺼지지 않았다. 두 사람 다 거기 있었기 때문이다.
@affection 20
@point 300
@end
`,Tm=`# 나연 (문학) - 봄 / 3번 하숙생

=== nayeon_01 | 새벽 세 시의 타자 소리
@bg hallway night
@bgm spring
@outfit 0
* 새벽 세 시. 203호에서 아주 느린 타자 소리가 났다. 쳤다가, 오래 멈췄다가.
* 문이 조금 열려 있어 안을 들여다봤다.
나연 [놀람] ...누구세요.
나 [기본] 주인집 사람이에요. 소리 때문에 온 건 아니고요.
나연 [기본] 시끄러웠으면 말해주세요. 손으로 쓸게요.
나 [기본] 안 시끄러웠어요. 너무 느려서요.
나연 [놀람] ...느린 건 티가 나나요.
나 [웃음] 한 줄 치고 삼십 초 쉬면 티가 나죠.
나연 [부끄러움] 한 문장에 삼십 분 걸릴 때도 있어요.
* 나연은 203호, 문예창작과라고 했다. 밤에만 글이 써진다고.
나연 [기본] 낮에는 머리가 너무 깨어 있어서 안 돼요.
나연 [기본] ...한 판 하실래요? 어차피 오늘 문장은 글렀어요.
@affection 10
@end

=== nayeon_02 | 문장을 고르는 사람
@bg maru night
@bgm spring
* 나연은 패를 낼 때도 한참 들여다봤다.
나 [기본] 고민 많이 하시네요.
나연 [기본] 뭘 낼지보다 뭘 안 낼지를 정하는 거예요.
나 [놀람] 그게 달라요?
나연 [기본] 글도 그래요. 쓸 말을 고르는 게 아니라 뺄 말을 고르는 거예요.
* 나연은 결국 제일 작은 패를 냈다.
나연 [기본] 제일 안 아쉬운 걸 먼저 버려요.
나 [기본] 그럼 마지막에 남는 건 뭐예요?
나연 [부끄러움] ...제일 버리기 싫은 거요.
나 [웃음] 그게 뭔지는 안 알려주시고요.
나연 [기본] 아직 안 정했어요.
@affection 10
@end

=== nayeon_03 | 첫 독자
@bg room night
@bgm spring
* 나연이 인쇄한 종이 뭉치를 들고 마루로 내려왔다.
나연 [부끄러움] 이거... 읽어주실래요?
나 [놀람] 저요? 저 문학 잘 몰라요.
나연 [기본] 그래서요. 아는 사람은 평가를 하고, 모르는 사람은 그냥 읽어요.
* 열 쪽쯤 되는 짧은 소설이었다.
나 [기본] 다 읽었어요.
나연 [기본] 어땠어요.
나 [기본] 마지막 줄에서 숨을 한 번 쉬게 되더라고요.
나연 [놀람] ...
나연 [부끄러움] 그 줄 쓰는 데 나흘 걸렸어요.
나연 [기본] 첫 독자가 거기서 멈췄으면, 잘 쓴 거예요.
@affection 10
@end

=== nayeon_04 | 안 써지는 밤
@bg room night
@bgm sad
@outfit 0
* 사흘째 203호의 타자 소리가 나지 않았다.
나 [기본] 안 써져요?
나연 [기본] 한 글자도요.
* 화면에는 제목만 있고 아래가 비어 있었다.
나연 [기본] 쓸 말이 없는 게 아니에요. 쓸 자격이 없는 것 같아서요.
나 [놀람] 자격이요?
나연 [기본] 제가 겪지도 않은 걸 쓰고 있잖아요. 그게 거짓말 같아서요.
@choice
- 겪은 것만 쓰면 한 권도 못 써요 | +15 | A
- 그럼 겪은 걸 쓰면 되죠 | +15 | B
@label A
나 [기본] 겪은 것만 쓰면 한 권도 못 써요.
나연 [기본] 그건 아는데요.
나 [기본] 아는데 왜 멈춰 있어요.
나연 [부끄러움] ...누가 그렇게 말해주길 기다렸나 봐요.
@goto END
@label B
나 [기본] 그럼 겪은 걸 쓰면 되죠.
나연 [삐짐] 제 삶은 재미없어요.
나 [기본] 새벽 세 시에 삼십 분 동안 한 문장 쓰는 사람이요?
나연 [놀람] ...
나연 [부끄러움] 그건 좀 재미있나요.
@label END
* 그날 밤 타자 소리가 다시 났다. 여전히 느렸다.
@affection 15
@end

=== nayeon_05 | 서점까지 걸어서
@bg street evening
@bgm spring
@outfit 1
* 나연이 현관에서 신발을 신고 있었다.
나연 [기본] 서점 가요. 버스로 두 정거장인데 걸어갈 거예요.
나 [놀람] 왜 걸어가요?
나연 [기본] 걸으면 문장이 생겨요. 버스에서는 안 생기고요.
@choice
- 그럼 저도 걸을게요 | +20 | A
- 문장이 생기면 방해 안 할게요 | +20 | B
@label A
나 [기본] 그럼 저도 걸을게요.
나연 [기본] 말은 별로 안 할 거예요.
나 [기본] 저도 말 많은 편 아니에요.
* 삼십 분을 걷는 동안 두 사람은 여덟 마디를 나눴다.
나연 [부끄러움] ...오늘 문장 많이 생겼어요.
@goto END
@label B
나 [기본] 문장이 생기면 방해 안 할게요. 뒤에서 걸을게요.
나연 [놀람] 뒤에서요?
나 [기본] 옆에서 걸으면 말을 걸고 싶어지잖아요.
나연 [부끄러움] ...옆에서 걸어도 돼요.
@label END
* 서점에서 나연은 아무것도 사지 않고 두 시간을 있었다.
나연 [웃음] 사면 읽어야 하잖아요. 안 사면 계속 궁금하고요.
@affection 20
@end

=== nayeon_06 | 이름을 빌려드릴게요
@bg maru night
@bgm spring
* 나연이 원고를 고치다가 손을 멈췄다.
나연 [기본] 등장인물 이름이 안 정해져요.
나 [기본] 아무거나 쓰면 안 돼요?
나연 [기본] 이름이 정해지면 그 사람이 움직이기 시작해요. 그래서 함부로 못 지어요.
@choice
- 제 이름 쓰실래요? | +20 | A
- 이 집 사람들 이름은 어때요 | +20 | B
@label A
나 [기본] 제 이름 쓰실래요?
나연 [놀람] ...그래도 돼요?
나 [기본] 대신 나쁜 사람으로는 쓰지 마세요.
나연 [웃음] 그건 약속 못 해요. 인물은 제 맘대로 안 움직여요.
나연 [부끄러움] ...그래도 마지막엔 잘 되게 할게요.
@goto END
@label B
나 [기본] 이 집 사람들 이름은 어때요. 열다섯 명이나 있잖아요.
나연 [기본] 그건 안 돼요.
나 [놀람] 왜요?
나연 [부끄러움] 아는 사람 이름을 쓰면, 쓰면서 그 사람을 생각하게 되거든요.
나 [기본] 그게 나쁜 거예요?
나연 [기본] ...아니요. 그게 무서운 거예요.
@label END
@affection 20
@end

=== nayeon_07 | 합평회
@bg campus evening
@bgm sad
* 나연이 합평회에서 돌아와 마루에 앉았다. 원고가 빨간 줄투성이였다.
나연 [기본] 「감정이 과하다」래요.
나 [기본] 그게 무슨 뜻이에요?
나연 [기본] 너무 솔직하게 썼다는 뜻이에요. 돌려 말한 거죠.
* 나연은 원고를 뒤집어 놓았다.
나연 [기본] 겪은 걸 쓰라고 해서 썼는데, 그러니까 과하대요.
나연 [삐짐] 어느 장단에 맞추라는 건지 모르겠어요.
나 [기본] 저는 그 원고 좋았는데요.
나연 [놀람] 읽으셨어요?
나 [부끄러움] 마루에 두고 가셨길래요. 죄송해요.
나연 [기본] ...아니요. 그게 오늘 들은 말 중에 제일 나아요.
@affection 15
@end

=== nayeon_08 | 투고 마감 전날
@bg room night
@bgm tense
@outfit 1
* 신인상 마감 전날, 나연은 원고를 열었다 닫았다 했다.
나연 [기본] 보낼까 말까 삼십 번째예요.
나 [기본] 왜 망설여요.
나연 [기본] 보내면 끝이잖아요. 고칠 수 없어요.
* 나연은 마우스에 손을 올린 채 가만히 있었다.
나연 [부끄러움] 떨어지는 것보다, 더 고칠 수 있었는데 안 했다는 게 무서워요.
나 [기본] 그건 백 번을 고쳐도 똑같을 거예요.
나연 [놀람] ...
나 [기본] 그 마지막 줄, 나흘 걸렸다면서요. 그거면 충분해요.
나연 [기본] ...기억하고 계셨네요.
* 나연은 보내기를 눌렀다. 그리고 한참 화면을 봤다.
@affection 20
@end

=== nayeon_09 | 실린 이야기
@bg maru evening
@bgm warm
* 얇은 계간지 한 권이 마루에 놓여 있었다.
나연 [부끄러움] 가작이요. 대상은 아니고요.
나 [놀람] 실린 거잖아요.
나연 [기본] 네. 실렸어요.
* 나연은 책장을 넘겨 제 이름이 인쇄된 쪽을 보여줬다.
나연 [기본] 심사평에 「과하지 않게 솔직하다」고 적혀 있어요.
나 [웃음] 저번엔 과하다더니요.
나연 [웃음] 사람이 바뀌면 말도 바뀌더라고요.
* 나연은 작가 소개란을 가리켰다. 한 줄이 적혀 있었다.
나연 [부끄러움] 「밤에 불이 켜진 집에서 씁니다」라고 적었어요.
@affection 15
@end

=== nayeon_10 | 마지막 문장
@bg maru night
@bgm confess
@outfit 2
* 열 번째 판이 끝났다. 나연은 원고 한 장을 들고 있었다.
나연 [기본] 새로 쓰는 거예요. 아직 아무한테도 안 보여줬어요.
@cg nayeon_ending
* 종이에는 짧은 글이 한 편 적혀 있었다. 주인공의 이름은 비어 있었다.
나연 [기본] 이름을 못 정했어요. 정하면 그 사람이 움직이기 시작하니까요.
나연 [부끄러움] 근데 이번엔 움직이는 게 무서워서 못 정한 게 아니에요.
나 [기본] 그럼요?
나연 [기본] 정하면 제가 어떤 마음인지 들킬 것 같아서요.
* 나연은 마지막 문장을 소리 내어 읽었다.
나연 [기본] 「그 집에는 밤마다 불이 켜져 있었고, 나는 그 불을 보려고 매번 늦게 들어갔다.」
나연 [부끄러움] 저 좋아해요.
나연 [기본] 쓸 자격이 없다고 했던 거 기억해요? 이건 겪은 거예요.
나연 [기본] 그러니까 거짓말이 아니에요.
@choice
- 이름은 제가 정해도 돼요? | +20 | A
- 그 문장이 제일 좋네요 | +20 | B
@label A
나 [기본] 이름은 제가 정해도 돼요?
나연 [놀람] 그건 작가 권한인데요.
나 [기본] 첫 독자 권한도 있잖아요.
나연 [부끄러움] ...그런 건 없어요. 근데 오늘은 있는 걸로 할게요.
@goto END
@label B
나 [기본] 그 문장이 제일 좋네요.
나연 [기본] 나흘 안 걸렸어요. 이건 한 번에 나왔어요.
나 [놀람] 삼십 분이 아니라요?
나연 [부끄러움] ...겪은 건 빨리 써지더라고요.
@label END
@bgm warm
나연 [웃음] 그럼 오늘은 늦게 안 들어가도 되겠네요. 이미 여기 있으니까.
* 그날 밤 203호의 타자 소리는 들리지 않았다.
@affection 20
@point 300
@end
`,Pm=`# 리아 (새벽) - 봄 / 4번 하숙생

=== ria_01 | 새벽 다섯 시의 발소리
@bg hallway night
@bgm spring
@outfit 0
* 새벽에 복도에서 발소리가 났다. 규칙적이고, 아주 가벼웠다.
* 문을 열자 운동화 끈을 묶는 사람이 있었다.
리아 [놀람] 어! 깨셨어요? 죄송해요.
나 [기본] 지금 다섯 시인데요.
리아 [웃음] 네. 나가려고요.
나 [놀람] 이 시간에요?
리아 [기본] 여섯 시에 나가면 해가 뜨잖아요. 그럼 사람이 많아요.
* 리아는 일어서면서 이름을 말했다. 204호, 리아.
리아 [기본] 저 여기 오늘 들어왔어요. 인사 못 드렸죠.
나 [기본] 기숙사 안 쓰고요?
리아 [삐짐] 기숙사는 다섯 시에 문을 안 열어줘요. 그게 말이 돼요?
* 그게 이사 온 이유의 전부라고 했다.
리아 [웃음] 아, 주인집 분이시구나. 그럼 한 판 해요. 삼 분이면 끝나죠?
나 [놀람] 삼 분이요?
리아 [웃음] 저 뭐든 빨리 해요.
@affection 10
@end

=== ria_02 | 기숙사 문은 여섯 시에 열린다
@bg maru night
@bgm spring
* 리아는 패를 세 장씩 집어 던지듯 냈다.
나 [놀람] 너무 빨리 내는 거 아니에요?
리아 [기본] 고민한다고 좋은 패가 나와요?
나 [기본] 보통은 그렇죠.
리아 [삐짐] ...그런가.
* 그러더니 다음 판에는 정말로 삼 초쯤 생각했다. 그리고 똑같이 던졌다.
나 [웃음] 생각한 거 맞아요?
리아 [웃음] 했어요! 했는데 답이 똑같았어요.
* 결국 그날은 리아가 졌다.
리아 [기본] 근데 이거 재밌네요.
리아 [웃음] 달리기랑 비슷해요. 시작하면 끝까지 가야 되잖아요.
나 [기본] 고스톱은 중간에 멈출 수 있어요. 스톱이라고.
리아 [놀람] 아. 그런 게 있었어요?
@affection 10
@end

=== ria_03 | 페이스 조절
@bg yard morning
@bgm spring
* 아침에 마당에서 리아가 무릎을 짚고 숨을 골랐다.
리아 [기본] 오늘 이십 분 만에 십 킬로 뛰려다가 팔 킬로에서 멈췄어요.
나 [기본] 무리한 거 아니에요?
리아 [삐짐] 무리 아니에요. 그냥... 페이스를 못 잡은 거예요.
* 리아는 늘 처음부터 전력으로 뛰고, 끝에 가서 걷는다고 했다.
리아 [기본] 코치 선생님이 그랬어요. 너는 스톱을 모른다고.
나 [놀람] 고스톱에서도 그러시던데요.
리아 [놀람] ...어?
@choice
- 한 판 쉬어가는 것도 실력이에요 | +15 | A
- 끝까지 가는 게 리아 씨답죠 | +15 | B
@label A
나 [기본] 한 판 쉬어가는 것도 실력이에요.
리아 [삐짐] 그거 코치 선생님이랑 똑같은 말이에요.
나 [웃음] 두 사람이 같은 말 하면 맞는 말일 확률이 높죠.
리아 [기본] ...생각해볼게요. 생각만.
@goto END
@label B
나 [기본] 끝까지 가는 게 리아 씨답죠.
리아 [웃음] 그쵸? 저도 그렇게 생각해요.
나 [기본] 대신 다음 날 못 뛰잖아요.
리아 [삐짐] 그건 또 그러네.
@label END
* 그날 저녁 리아는 처음으로 스톱을 불렀다. 칠 점에서.
리아 [기본] 이거 은근히 어렵네요. 멈추는 거.
@affection 15
@end

=== ria_04 | 무릎
@bg room night
@bgm sad
* 리아가 사흘째 새벽에 나가지 않았다.
나 [기본] 오늘도 안 뛰어요?
리아 [기본] 네.
* 짧은 대답이었다. 리아한테서 짧은 대답이 나오는 건 처음이었다.
나 [놀람] 무릎이에요?
리아 [기본] ...어떻게 알았어요.
* 리아는 무릎에 얼음팩을 올려두고 있었다.
리아 [기본] 작년에도 한 번 이랬어요. 두 달 쉬었고요.
리아 [삐짐] 그때 기록이 다 날아갔어요.
나 [기본] 지금은 어때요.
리아 [기본] 지금은... 쉬면 낫는대요. 근데 쉬는 게 제일 어려워요.
@choice
- 쉬는 것도 훈련이에요 | +15 | A
- 그럼 앉아서 할 수 있는 걸 해요 | +15 | B
@label A
나 [기본] 쉬는 것도 훈련이에요.
리아 [삐짐] 그건 안 쉬는 사람들이 하는 말이에요.
나 [기본] 저는 매일 쉬는데요.
리아 [웃음] ...아, 그건 설득력 있네요.
@goto END
@label B
나 [기본] 그럼 앉아서 할 수 있는 걸 해요.
리아 [놀람] 앉아서요?
나 [기본] 마루에 방석 있잖아요. 무릎 안 쓰는 거로.
리아 [웃음] ...그거 좋은데요.
@label END
* 그날 밤 리아는 마루로 내려왔다. 무릎에 얼음팩을 올린 채로.
리아 [웃음] 이건 앉아서 하는 거니까 괜찮죠?
@affection 15
@end

=== ria_05 | 같이 뛸래요?
@bg yard morning
@bgm spring
@outfit 1
* 무릎이 나은 날 아침, 리아가 현관에서 기다리고 있었다.
리아 [웃음] 오늘부터 다시 뛰어요. 같이 갈래요?
나 [놀람] 저는 오 분도 못 뛰어요.
리아 [웃음] 알아요. 그래서 물어본 거예요.
@choice
- 오 분만 따라가볼게요 | +20 | A
- 마당에서 기다릴게요 | +20 | B
@label A
나 [기본] 오 분만 따라가볼게요.
리아 [놀람] 진짜요?
* 정확히 사 분 삼십 초 만에 나는 멈췄다.
리아 [웃음] 기록 좋은데요? 삼십 초 남기고 포기한 건 처음 봐요.
나 [삐짐] 칭찬 맞아요?
리아 [웃음] 칭찬이에요. 진짜로.
@goto END
@label B
나 [기본] 마당에서 기다릴게요.
리아 [기본] 그럼 재미없잖아요.
나 [기본] 돌아왔을 때 사람이 있는 거랑 없는 거는 다르죠.
리아 [놀람] ...
리아 [부끄러움] 그건 좀, 반칙인데요.
@label END
* 그날부터 리아는 나갈 때 마루 쪽을 한 번 보고 나갔다.
리아 [웃음] 다녀올게요.
@affection 20
@end

=== ria_06 | 기록이 안 줄어요
@bg street evening
@bgm spring
* 저녁에 편의점 앞에서 리아를 만났다. 음료수를 두 개 들고 있었다.
리아 [기본] 한 개는 선배 거예요.
나 [기본] 오늘 기록은요.
리아 [삐짐] 똑같아요. 두 달째 똑같아요.
* 리아는 초 단위로 적어둔 수첩을 보여줬다. 정말로 거의 같은 숫자였다.
리아 [기본] 열심히 하는데 안 줄어요. 이런 건 처음이에요.
나 [기본] 고스톱도 그래요. 어느 순간부터 안 늘어요.
리아 [놀람] 그럼 어떡해요?
나 [기본] 다른 걸 배우죠. 저는 그때 스톱을 배웠어요.
리아 [기본] ...또 스톱이네.
@choice
- 중간에 한 번 늦춰보세요 | +15 | A
- 기록 말고 다른 걸 적어보세요 | +15 | B
@label A
나 [기본] 중간에 한 번 늦춰보세요. 삼 킬로쯤에서요.
리아 [놀람] 늦추면 기록이 더 느려지죠.
나 [기본] 마지막에 더 빨라질 수도 있고요.
리아 [기본] ...해본 적은 없네요.
@goto END
@label B
나 [기본] 기록 말고 다른 걸 적어보세요.
리아 [놀람] 뭘요?
나 [기본] 그날 뭘 봤는지요. 숫자만 적으면 숫자만 보여요.
리아 [기본] ...수첩이 아깝긴 했어요.
@label END
리아 [웃음] 알았어요. 이번엔 진짜 생각해볼게요.
@affection 15
@end

=== ria_07 | 비 오는 날의 러닝머신
@bg annex night
@bgm spring
* 비가 사흘 내렸다. 리아는 별채 창고에서 먼지 쌓인 러닝머신을 찾아냈다.
리아 [웃음] 이거 돌아가요! 할머니 거였나 봐요.
나 [기본] 십 년은 넘었을 거예요.
* 리아는 삼십 분을 뛰고 내려왔다. 기계는 계속 삐걱거렸다.
리아 [기본] 이상하네요. 밖에서 뛰는 거랑 다르게 하나도 안 재밌어요.
나 [기본] 왜요?
리아 [기본] 풍경이 안 바뀌잖아요. 아무리 뛰어도 제자리예요.
* 리아는 수건으로 얼굴을 닦으며 웃었다.
리아 [웃음] 근데 여기서 뛰면 마루가 보여요. 그건 좋아요.
나 [놀람] 마루가요?
리아 [부끄러움] ...아무것도 아니에요. 한 판 해요.
@affection 15
@end

=== ria_08 | 대회 전날
@bg maru night
@bgm tense
@outfit 1
* 대회 전날 밤, 리아는 잠이 오지 않는다며 마루로 내려왔다.
리아 [기본] 내일 오천 미터 뛰어요.
나 [기본] 긴장돼요?
리아 [기본] 아니요. 긴장은 안 돼요.
리아 [삐짐] 근데 무서워요. 그게 다른 거래요.
* 리아는 처음으로 패를 오래 들여다봤다.
리아 [기본] 만약에 또 무릎이 아프면 어떡하죠.
@choice
- 그럼 그때 멈추면 돼요 | +20 | A
- 아프면 제가 데리러 갈게요 | +20 | B
@label A
나 [기본] 그럼 그때 멈추면 돼요.
리아 [놀람] 대회 중간에요?
나 [기본] 네. 스톱은 지는 게 아니에요.
리아 [기본] ...이제 그 말 좀 알 것 같아요.
@goto END
@label B
나 [기본] 아프면 제가 데리러 갈게요.
리아 [놀람] 거기 두 시간 걸려요.
나 [기본] 두 시간 걸려서 가면 되죠.
리아 [부끄러움] ...진짜 그러면 반칙이라니까요.
@label END
리아 [웃음] 오늘은 일찍 잘래요. 고마워요.
@affection 20
@end

=== ria_09 | 완주
@bg station evening
@bgm warm
* 대회가 끝나고 리아는 기차역에서 전화를 걸어왔다.
리아 [웃음] 완주했어요!
나 [기본] 기록은요?
리아 [웃음] 자기 최고 기록이요. 이십 초 줄었어요.
나 [놀람] 두 달 동안 안 줄던 게요?
리아 [기본] 중간에 한 번 늦췄거든요. 삼 킬로 지점에서.
리아 [웃음] 그랬더니 마지막에 더 빨라졌어요. 진짜 신기해요.
* 리아는 잠깐 말을 멈췄다.
리아 [부끄러움] 그 생각 누가 알려줬는지 아세요?
나 [기본] ...
리아 [웃음] 오늘 늦게 들어가요. 기다려줄 거죠?
@affection 15
@end

=== ria_10 | 결승선
@bg yard morning
@bgm confess
@outfit 2
* 열 번째 판이 끝났다. 리아는 이번에도 고를 부르지 않았다.
나 [놀람] 리아 씨가 스톱을 하네요.
리아 [기본] 저 이제 스톱 잘해요.
@cg sea_ending
* 리아는 수첩을 꺼내 마지막 장을 펼쳤다. 기록이 아니라 문장이 적혀 있었다.
리아 [기본] 「오늘도 마루에 불이 켜져 있었다.」
리아 [부끄러움] 두 달 전부터 기록 말고 이걸 적고 있었어요.
나 [놀람] 매일이요?
리아 [기본] 매일이요. 불 안 켜져 있던 날은 하루도 없었어요.
리아 [기본] 저 달리는 거 좋아해요. 근데 달리는 건 혼자 하는 거잖아요.
리아 [부끄러움] 돌아올 데가 있으니까 더 멀리 갈 수 있더라고요.
리아 [기본] 저 좋아해요. 선배.
리아 [웃음] 이겨서 말하는 것도 아니고, 져서 말하는 것도 아니에요.
리아 [기본] 매일 새벽에 불 켜놓고 기다려준 사람이라서 그래요.
@choice
- 결승선에서 기다릴게요 | +20 | A
- 다음엔 진짜 끝까지 따라갈게요 | +20 | B
@label A
나 [기본] 그럼 결승선에서 기다릴게요.
리아 [놀람] 두 시간 걸린다니까요.
나 [기본] 두 시간 걸려서 가면 된다고 했잖아요.
리아 [부끄러움] ...기억하고 있었네요.
@goto END
@label B
나 [기본] 다음엔 진짜 끝까지 따라갈게요.
리아 [웃음] 오 분도 못 뛰면서요?
나 [기본] 페이스 조절하면 되죠. 배웠어요.
리아 [부끄러움] ...그거 제가 알려준 건데.
@label END
@bgm warm
리아 [웃음] 그럼 내일 다섯 시예요. 늦지 마세요.
* 다음 날 새벽, 마루의 불은 꺼져 있었다. 두 사람 다 밖에 있었기 때문이다.
@affection 20
@point 300
@end
`,Bm=`# 루비 (게이머) - 여름 / 7번 하숙생

=== rubi_01 | 새벽까지 켜진 모니터
@bg hallway night
@bgm summer
@outfit 0
* 새벽 두 시. 205호 문틈으로 파란 불빛이 새어 나왔다.
* 문을 두드리자 헤드폰을 한 쪽만 걸친 사람이 나왔다.
루비 [놀람] 어! 시끄러웠어요? 저 소리 다 헤드폰으로 듣는데.
나 [기본] 안 시끄러웠어요. 불빛이 복도까지 와서요.
루비 [웃음] 아, 모니터 두 대라서요.
* 방 안에는 분홍색 물건이 지나치게 많았다.
루비 [기본] 205호 루비요. 게임공학과 1학년이에요.
나 [기본] 새벽까지 게임해요?
루비 [기본] 게임도 하고 만들기도 해요. 둘 다 밤에 잘돼요.
루비 [부끄러움] 전에 살던 데선 새벽에 불 켜놓는다고 뭐라 했거든요.
나 [기본] 여기선 아무도 안 그래요. 저도 안 자니까.
루비 [웃음] 그럼 오늘은 저랑 같이 이길래요? 이거 말고 저거요.
* 루비가 가리킨 건 마루의 화투 상자였다.
@affection 10
@end

=== rubi_02 | 헤드폰을 벗는 시간
@bg maru night
@bgm summer
* 루비는 마루에 앉을 때만 헤드폰을 목에 걸었다.
나 [기본] 여기선 안 껴요?
루비 [기본] 여기선 들을 게 있잖아요.
나 [놀람] 뭐가요?
루비 [웃음] 사람 소리요.
* 루비는 패를 빠르게 냈다. 손이 익숙했다.
나 [기본] 처음이라면서 빠르네요.
루비 [웃음] 저 게임은 다 빨리 배워요. 규칙 있는 건 다 게임이거든요.
나 [기본] 고스톱도 게임이에요?
루비 [기본] 당연하죠. 다만 이건 상대 얼굴이 보여서 좀 달라요.
루비 [부끄러움] ...그게 좋아요. 화면에선 얼굴이 안 보이잖아요.
@affection 10
@end

=== rubi_03 | 팀원이 나갔다
@bg room night
@bgm summer
* 루비가 헤드폰을 책상에 던져 놓고 있었다.
루비 [삐짐] 팀원 하나가 나갔어요. 대회 두 달 남았는데.
나 [기본] 이유는요?
루비 [기본] 제가 너무 몰아붙인대요.
* 루비는 의자를 빙 돌렸다.
루비 [기본] 잘하고 싶어서 그런 건데. 그게 몰아붙이는 거예요?
나 [기본] 받는 사람이 그렇게 느끼면 그런 거죠.
루비 [놀람] ...솔직하시네요.
나 [기본] 위로해 드릴까요?
루비 [기본] 아니요. 그게 나아요. 다들 편만 들어주거든요.
루비 [부끄러움] 편들어주는 말은 하나도 안 남아요.
@affection 10
@end

=== rubi_04 | 승률이 떨어진다
@bg room night
@bgm sad
@outfit 0
* 루비가 화면에 뜬 숫자를 오래 보고 있었다. 승률 그래프가 내려가고 있었다.
루비 [기본] 열두 판 연속 졌어요.
나 [기본] 그럴 때도 있죠.
루비 [삐짐] 저는 그럴 때가 없었어요. 지금까지는요.
* 루비는 마우스를 놓고 무릎을 끌어안았다.
루비 [기본] 제가 잘하는 게 이거 하나인데, 이것도 안 되면 뭐가 남죠.
@choice
- 하나가 안 되는 날이 있는 거예요 | +15 | A
- 잘하는 게 하나뿐이 아닌데요 | +15 | B
@label A
나 [기본] 하나가 안 되는 날이 있는 거예요.
루비 [기본] 열두 판인데요.
나 [기본] 열두 판이 인생은 아니잖아요.
루비 [놀람] ...
루비 [부끄러움] 그 말 화면에선 아무도 안 해줘요.
@goto END
@label B
나 [기본] 잘하는 게 하나뿐이 아닌데요.
루비 [삐짐] 뭐가 또 있어요?
나 [기본] 밤에 사람 붙잡고 얘기 시키는 거요. 그거 잘하시던데요.
루비 [놀람] 그건 잘하는 게 아니라 민폐인데요.
나 [웃음] 저는 안 민폐였어요.
루비 [부끄러움] ...치사해요.
@label END
* 그날 루비는 컴퓨터를 끄고 마루로 내려왔다.
@affection 15
@end

=== rubi_05 | 피시방 원정
@bg street evening
@bgm summer
@outfit 1
* 루비가 현관에서 헤드폰을 챙기고 있었다.
루비 [기본] 피시방 가요. 집 컴퓨터가 맛이 갔어요.
나 [놀람] 고치면 되잖아요.
루비 [삐짐] 고치는 데 사흘 걸린대요. 사흘이요.
@choice
- 같이 갈게요 | +20 | A
- 제 컴퓨터 쓸래요? | +20 | B
@label A
나 [기본] 같이 갈게요.
루비 [놀람] 게임 할 줄 알아요?
나 [기본] 아니요. 옆에서 구경만 할게요.
루비 [기본] 구경은 재미없어요.
나 [기본] 그럼 옆자리에서 아무거나 할게요.
루비 [웃음] ...그러면 좀 낫겠네요.
* 그날 루비는 옆자리를 자꾸 돌아봤다.
@goto END
@label B
나 [기본] 제 컴퓨터 쓸래요? 느리긴 한데요.
루비 [놀람] 그럼 오빠는요?
나 [기본] 저는 안 써요. 원래 잘 안 켜요.
루비 [기본] ...그럼 사흘 동안 제가 쓸게요.
루비 [부끄러움] 대신 옆에 있어야 돼요. 혼자 남의 방에서 게임하는 거 이상하잖아요.
@label END
@affection 20
@end

=== rubi_06 | 한 판만 더
@bg maru night
@bgm summer
* 새벽 네 시. 루비가 여덟 번째로 같은 말을 했다.
루비 [웃음] 한 판만 더요.
나 [기본] 아까도 그랬어요.
루비 [기본] 이번엔 진짜예요.
* 창밖이 희끄무레해지고 있었다.
나 [기본] 해 뜨는데요.
루비 [삐짐] 해는 매일 뜨잖아요.
@choice
- 그럼 한 판만 더 해요 | +20 | A
- 오늘은 여기까지 해요 | +20 | B
@label A
나 [기본] 그럼 한 판만 더 해요. 진짜 마지막으로요.
루비 [웃음] 역시!
* 그 한 판은 두 시간이 걸렸다. 루비가 자꾸 말을 걸어서였다.
루비 [부끄러움] ...저 사실 한 판 더 하고 싶었던 게 아니에요.
나 [기본] 알아요.
루비 [놀람] 알면서 해줬어요?
@goto END
@label B
나 [기본] 오늘은 여기까지 해요.
루비 [삐짐] 왜요.
나 [기본] 내일도 할 거니까요.
루비 [놀람] ...내일도요?
나 [기본] 내일도, 모레도요.
루비 [부끄러움] ...그럼 오늘은 참을게요.
@label END
@affection 20
@end

=== rubi_07 | 연패
@bg room night
@bgm sad
* 대회 예선이 다가오는데 팀 연습 성적이 계속 나빴다.
루비 [기본] 오늘도 졌어요. 제 탓이에요.
나 [기본] 왜 루비 씨 탓이에요.
루비 [기본] 제가 캐리해야 하는 자리예요. 제가 못 하면 지는 거예요.
* 루비는 헤드폰을 만지작거렸다.
루비 [기본] 팀원들이 아무 말도 안 해요. 그게 더 무서워요.
나 [기본] 뭐라고 해주면 좋겠어요?
루비 [놀람] ...
루비 [부끄러움] 「괜찮다」 말고요. 그건 이미 많이 들었어요.
나 [기본] 그럼 「내일 또 하자」는요?
루비 [기본] ...그건 안 들어봤어요.
나 [기본] 내일 또 하죠.
루비 [부끄러움] ...네.
@affection 15
@end

=== rubi_08 | 대회 예선 전날
@bg maru night
@bgm tense
@outfit 1
* 예선 전날, 루비는 마루에 앉아 헤드폰을 목에 걸고 있었다.
루비 [기본] 연습 안 해요. 오늘 하면 손이 굳어요.
나 [기본] 긴장돼요?
루비 [기본] 긴장은 안 되는데, 지는 게 무서워요.
* 루비는 화투 패를 손가락으로 만지작거렸다.
루비 [기본] 지면 제가 잘하는 게 하나도 없는 사람이 되잖아요.
나 [기본] 그때 제가 뭐라고 했죠.
루비 [놀람] ...열두 판이 인생은 아니라고요.
나 [기본] 내일도 한 판이에요.
루비 [부끄러움] ...대회인데요.
나 [기본] 그래도 한 판이에요. 끝나면 돌아올 데 있고요.
루비 [웃음] ...그 말이 제일 세네요.
@affection 20
@end

=== rubi_09 | 관전석
@bg campus evening
@bgm warm
* 예선 당일. 관전석에서 루비의 경기를 봤다.
* 루비는 마지막 세트에서 한 번 크게 실수했다. 그리고 다음 라운드를 이겼다.
루비 [웃음] 봤어요? 저 망하고 나서 이겼어요.
나 [기본] 봤어요.
루비 [기본] 전 같았으면 거기서 무너졌어요.
* 루비는 헤드폰을 벗고 관전석 쪽을 가리켰다.
루비 [부끄러움] 실수하고 나서 여기를 봤거든요. 사람이 있더라고요.
나 [놀람] 그게 보여요?
루비 [웃음] 안 보여요. 근데 있는 건 알았어요.
* 본선 진출이 확정됐다. 루비는 트로피 대신 사람 쪽으로 뛰어왔다.
@affection 15
@end

=== rubi_10 | 마지막 한 판
@bg maru night
@bgm confess
@outfit 2
* 열 번째 판이 끝났다. 루비는 지고도 웃고 있었다.
나 [놀람] 졌는데 왜 웃어요.
루비 [웃음] 오늘은 이기려고 한 게 아니라서요.
@cg rubi_ending
* 루비는 헤드폰을 벗어 마루에 내려놓았다.
루비 [기본] 저 이거 거의 안 벗어요. 벗으면 소리가 너무 많이 들려서요.
루비 [기본] 사람들 말소리, 웃는 소리, 그런 게 다 들리면 정신이 없거든요.
루비 [부끄러움] 근데 이 집에서는 벗고 있어요. 매일요.
나 [기본] 왜요?
루비 [기본] 들어도 괜찮은 소리만 나서요.
* 루비는 화투 패를 한 장 집었다가 도로 놓았다.
루비 [기본] 「한 판만 더」 했던 거요. 그거 게임이 하고 싶어서가 아니었어요.
루비 [부끄러움] 판이 끝나면 올라가야 되잖아요.
루비 [기본] 저 좋아해요.
루비 [웃음] 이겨서 하는 말이면 오늘 졌으니까 안 했겠죠.
@choice
- 그럼 한 판만 더 해요 | +20 | A
- 이제 안 올라가도 돼요 | +20 | B
@label A
나 [기본] 그럼 한 판만 더 해요.
루비 [놀람] ...그 말 지금 하면 반칙인데요.
나 [기본] 루비 씨가 여덟 번 했잖아요.
루비 [부끄러움] 여덟 번 다 같은 마음이었어요.
@goto END
@label B
나 [기본] 이제 안 올라가도 돼요. 늦게까지 있어도 되고요.
루비 [놀람] 진짜요?
나 [기본] 네. 마루 불 안 끌게요.
루비 [부끄러움] ...그럼 헤드폰 안 가져올게요. 아예요.
@label END
@bgm warm
루비 [웃음] 그럼 다음 판은 제가 이길 거예요. 예고하고 이기는 게 제일 멋있거든요.
* 그날 새벽 205호의 모니터는 꺼져 있었다.
@affection 20
@point 300
@end
`,Rm=`# 서연 (반장) - 여름 / 6번 하숙생

=== seoyeon_01 | 반장이 부르는 회의
@bg maru night
@bgm summer
@outfit 0
* 마루에 사람이 앉아 종이를 펼쳐 놓고 있었다. 자와 형광펜까지 있었다.
서연 [기본] 주인집 분이시죠. 앉으세요. 회의 있습니다.
나 [놀람] 오늘 처음 뵙는데요.
서연 [기본] 그래서 회의예요. 302호 서연이고, 반장 맡았습니다.
나 [기본] 반장은 누가 뽑았어요?
서연 [기본] 아무도 안 뽑았어요. 그래서 제가 했어요.
* 종이에는 당번표와 공과금 분담표가 이미 그려져 있었다.
나 [놀람] 하루 만에 이걸 다요?
서연 [기본] 정해두지 않으면 나중에 싸워요. 싸우고 나면 못 돌아와요.
서연 [부끄러움] ...전에 살던 데가 그랬어요.
서연 [기본] 그럼 첫 안건. 주인집도 당번에 넣을지요.
나 [웃음] 그건 회의 안 해도 되죠. 넣어요.
서연 [놀람] ...가결입니다.
@affection 10
@end

=== seoyeon_02 | 당번표는 왜 지켜야 하나
@bg kitchen night
@bgm summer
* 서연이 싱크대 앞에서 팔짱을 끼고 있었다.
서연 [기본] 어제 당번이 안 했어요.
나 [기본] 누군데요?
서연 [기본] 말 안 할 거예요. 말하면 그 사람 탓이 되니까.
나 [놀람] 그럼 어떻게 하려고요?
서연 [기본] 제가 하고, 표에 표시만 해둘 거예요.
* 서연은 설거지를 시작했다. 소매를 걷는 동작이 익숙했다.
나 [기본] 그렇게 하면 서연 씨만 손해인데요.
서연 [기본] 손해 안 봐요. 표가 쌓이면 사람들이 알아서 봐요.
서연 [부끄러움] ...대신 시간이 오래 걸려요.
나 [기본] 오늘은 둘이 하면 반으로 줄겠네요.
서연 [놀람] ...그건 계산에 없었어요.
@affection 10
@end

=== seoyeon_03 | 공과금 고지서
@bg maru night
@bgm summer
* 서연이 고지서를 펼쳐 놓고 계산기를 두드렸다.
서연 [기본] 이번 달 전기세가 많이 나왔어요.
나 [기본] 복도 등 때문일 거예요. 밤새 켜두거든요.
서연 [기본] 알아요. 다빈 씨 때문이죠.
나 [놀람] 그것도 알아요?
서연 [기본] 반장인데요.
* 서연은 계산기를 내려놓았다.
서연 [기본] 그래서 복도 등은 분담에서 뺐어요. 공용으로 처리할 거예요.
나 [기본] 그럼 전체가 조금씩 더 내는 건데요.
서연 [기본] 네. 대신 아무도 미안하지 않아요.
서연 [부끄러움] ...이런 건 회의에 안 올릴 거예요. 알면 오히려 불편해하니까.
@affection 10
@end

=== seoyeon_04 | 완벽하지 않은 날
@bg room night
@bgm sad
@outfit 0
* 서연의 방에 불이 켜져 있었다. 책상 위 일정표에 빨간 줄이 여러 개였다.
서연 [기본] 오늘 세 개 못 했어요.
나 [기본] 열 개 중에 세 개요?
서연 [기본] 열두 개 중에 세 개요. 그래도 세 개예요.
* 서연은 일정표를 덮으려다 말았다.
서연 [기본] 저 이거 못 넘겨요. 세 개 남은 채로 자면 잠이 안 와요.
@choice
- 오늘은 넘기고 자요 | +15 | A
- 세 개 중에 하나만 하죠 | +15 | B
@label A
나 [기본] 오늘은 넘기고 자요.
서연 [삐짐] 그게 되면 이러고 있겠어요?
나 [기본] 그럼 제가 대신 못 한 걸로 해드릴게요.
서연 [놀람] 그게 무슨 말이에요.
나 [기본] 열두 개 중에 세 개는 제 몫이었다고 치자고요.
서연 [부끄러움] ...말도 안 되는 소린데 왜 좀 편해지죠.
@goto END
@label B
나 [기본] 세 개 중에 하나만 하죠. 나머지는 내일 몫으로 하고요.
서연 [기본] 그럼 내일이 열다섯 개가 돼요.
나 [기본] 내일 서연 씨는 오늘보다 나을 거예요. 오늘 하나 했으니까.
서연 [놀람] ...그 계산은 처음 들어요.
@label END
* 그날 서연은 하나만 하고 불을 껐다.
@affection 15
@end

=== seoyeon_05 | 서류 떼러 가는 길
@bg street morning
@bgm summer
@outfit 1
* 아침에 서연이 현관에서 서류 봉투를 세 번 확인하고 있었다.
서연 [기본] 주민센터 가요. 이 집 서류도 같이 뗄 거예요.
나 [놀람] 그건 제가 해야 하는 건데요.
서연 [기본] 알아요. 근데 제가 가는 길이니까요.
@choice
- 그럼 같이 가요 | +20 | A
- 제 건 제가 뗄게요 | +20 | B
@label A
나 [기본] 그럼 같이 가요.
서연 [기본] 두 명이 갈 일은 아닌데요.
나 [기본] 효율은 떨어져도 덜 심심하죠.
서연 [놀람] ...그런 이유로 움직여본 적이 없어요.
* 돌아오는 길에 서연은 처음으로 일 얘기가 아닌 말을 했다.
@goto END
@label B
나 [기본] 제 건 제가 뗄게요. 그게 맞아요.
서연 [기본] 번거롭잖아요.
나 [기본] 서연 씨가 다 하면 편한데, 그럼 서연 씨만 힘들어요.
서연 [놀람] ...
서연 [부끄러움] 그 말 해주는 사람이 없었어요. 지금까지.
@label END
* 주민센터 앞 벤치에서 서연은 십 분쯤 그냥 앉아 있었다.
서연 [기본] 이렇게 아무것도 안 하고 앉아 있는 거, 오랜만이에요.
@affection 20
@end

=== seoyeon_06 | 대신 맡아줄게요
@bg maru night
@bgm summer
* 서연이 감기에 걸렸는데도 당번표를 들고 나왔다.
나 [기본] 그거 두고 들어가요.
서연 [기본] 오늘 제 차례예요.
나 [기본] 제가 할게요.
서연 [기본] 그럼 표가 어긋나요.
@choice
- 표에 제 이름을 적으면 되죠 | +20 | A
- 어긋나도 괜찮아요 | +20 | B
@label A
나 [기본] 표에 제 이름을 적으면 되죠.
서연 [놀람] ...그렇게 간단한 거였나.
나 [기본] 네. 반장님이 표를 고치면 되는 거잖아요.
서연 [부끄러움] 고쳐도 되는 줄 몰랐어요. 제가 만든 건데.
@goto END
@label B
나 [기본] 어긋나도 괜찮아요.
서연 [삐짐] 안 괜찮아요. 한 번 어긋나면 다 무너져요.
나 [기본] 안 무너져요. 서연 씨가 있잖아요.
서연 [놀람] ...
서연 [부끄러움] 그건 반칙이에요. 그렇게 말하면 아무 말도 못 하잖아요.
@label END
* 그날 서연은 약을 먹고 일찍 잤다. 표에는 다른 이름이 적혔다.
@affection 20
@end

=== seoyeon_07 | 아무도 안 지킨 주
@bg maru night
@bgm sad
* 일주일 내내 당번표가 비어 있었다. 시험 기간이었다.
서연 [기본] 한 명도 안 했어요.
나 [기본] 시험 기간이잖아요.
서연 [기본] 알아요. 그래서 더 아무 말도 못 하겠어요.
* 서연은 표를 들여다보다가 접었다.
서연 [기본] 제가 만든 게 아무 소용이 없었던 것 같아요.
나 [기본] 일주일 비었다고 그렇게 돼요?
서연 [삐짐] 일주일이 아니라, 필요 없을 때는 아무도 안 본다는 거예요.
서연 [부끄러움] 저도 그런 것 같아서요. 필요할 때만 찾는 사람.
나 [기본] 지금 저는 필요해서 여기 앉아 있는 게 아닌데요.
서연 [놀람] ...
* 그날 서연은 표를 다시 펴서 벽에 붙였다.
@affection 15
@end

=== seoyeon_08 | 발표 전날
@bg maru night
@bgm tense
@outfit 1
* 학과 발표 전날, 서연은 자료를 열두 번 확인했다.
서연 [기본] 열세 번째 볼 거예요.
나 [기본] 열두 번 봤으면 됐어요.
서연 [기본] 열두 번 봐서 오타를 세 개 찾았어요. 열세 번째에 하나 더 있을 수도 있고요.
나 [기본] 있으면요?
서연 [기본] ...있으면 제가 못 본 거죠.
* 서연의 손이 미세하게 떨리고 있었다.
나 [기본] 내일 오타 하나 나오면 어떻게 돼요?
서연 [놀람] 그건... 아무 일도 안 나요.
나 [기본] 그럼 됐네요.
서연 [부끄러움] ...말로는 아는데 몸이 안 믿어요.
나 [기본] 그럼 오늘은 몸을 재워요. 머리는 이미 알고 있으니까.
@affection 20
@end

=== seoyeon_09 | 장부를 넘기던 손
@bg maru evening
@bgm warm
* 발표가 끝나고 서연이 돌아왔다. 손에 오래된 공책이 있었다.
서연 [기본] 창고에서 찾았어요. 할머니 장부예요.
* 공책에는 삼십 년치 당번표와 공과금이 손글씨로 적혀 있었다.
서연 [놀람] 저랑 똑같이 하셨네요. 표까지 그리시고.
나 [기본] 그러게요.
서연 [기본] 근데 다른 게 하나 있어요.
* 서연은 장부 한쪽을 가리켰다. 이름 옆에 작은 글씨가 적혀 있었다.
서연 [기본] 「이 아이는 이번 주 시험이라 뺐음」
서연 [부끄러움] 할머니는 표를 지키신 게 아니라 사람을 보신 거예요.
나 [기본] 서연 씨도 그러잖아요. 복도 등 뺐을 때요.
서연 [놀람] ...그걸 기억하고 있었어요?
@affection 15
@end

=== seoyeon_10 | 마지막 회의
@bg maru night
@bgm confess
@outfit 2
* 열 번째 판이 끝나고 서연이 종이 한 장을 꺼냈다.
서연 [기본] 안건이 하나 있어요. 참석자는 두 명이고요.
@cg seoyeon_ending
* 종이에는 당번표가 아니라 짧은 글이 적혀 있었다.
서연 [기본] 제가 반장을 자처한 이유요.
서연 [기본] 전에 살던 데서 사람들이 싸우고 흩어졌어요. 저는 아무 말도 못 했고요.
서연 [부끄러움] 그래서 여기서는 먼저 표를 그렸어요. 싸울 일을 미리 없애려고요.
나 [기본] 그래서 지켜졌어요?
서연 [기본] 아니요. 사람들은 표대로 안 살아요.
서연 [웃음] 근데 이 집은 안 흩어졌어요. 표 때문이 아니고요.
서연 [기본] 매일 마루에 불이 켜져 있어서였어요.
서연 [부끄러움] 저 좋아해요.
서연 [기본] 이건 회의 안건이 아니에요. 가결도 부결도 필요 없어요.
서연 [기본] 그냥 말하는 거예요. 열두 번 고쳐 쓰고 열세 번째에 그냥 말하기로 했어요.
@choice
- 가결입니다 | +20 | A
- 표에 제 이름 적어주세요 | +20 | B
@label A
나 [기본] 가결입니다.
서연 [놀람] 안건이 아니라니까요.
나 [기본] 그래도 가결이에요. 반장님 방식대로 하자면요.
서연 [부끄러움] ...그럼 회의록에 남겨야 하는데.
나 [웃음] 남기세요.
@goto END
@label B
나 [기본] 표에 제 이름 적어주세요. 매일 칸으로요.
서연 [놀람] 매일 하는 당번은 없어요.
나 [기본] 그럼 만들면 되죠. 「마루 불 켜기」로요.
서연 [부끄러움] ...그건 제가 하고 싶었던 건데.
나 [기본] 그럼 둘 다 적어요.
@label END
@bgm warm
서연 [웃음] 그럼 오늘 회의는 여기까지. 다음 회의는 내일 같은 시간이요.
* 다음 날 표에는 새 칸이 하나 늘어 있었다. 이름이 둘 적혀 있었다.
@affection 20
@point 300
@end
`,Fm=`# 소라 (패션) - 가을 / 11번 하숙생

=== sora_01 | 복도에 걸린 옷
@bg hallway evening
@bgm autumn
@outfit 0
* 삼층 복도에 옷걸이가 줄줄이 걸려 있었다. 전부 만들다 만 옷이었다.
소라 [기본] 지나갈 때 건드리지 마.
나 [놀람] 아, 네.
소라 [기본] 305호 소라. 의상디자인과.
* 소라는 시침핀을 입에 물고 있다가 뺐다.
나 [기본] 방에 두면 안 돼요?
소라 [기본] 방은 좁아. 복도가 길어서 실루엣이 보여.
나 [기본] 실루엣이요?
소라 [기본] 옷은 가까이서 보면 다 그럴싸해. 멀리서 봐야 진짜가 보여.
* 소라는 옷 한 벌을 손등으로 툭 쳤다. 천이 흔들렸다.
소라 [기본] 이건 별로야. 내일 뜯을 거야.
나 [놀람] 잘 만들어진 것 같은데요.
소라 [기본] 잘 만든 거랑 좋은 건 달라.
@affection 10
@end

=== sora_02 | 싼 옷을 입지 않는 이유
@bg maru night
@bgm autumn
* 소라는 마루에 앉을 때도 옷매무새를 한 번 정리했다.
나 [기본] 집에서도 그렇게 입어요?
소라 [기본] 응.
나 [기본] 안 불편해요?
소라 [기본] 불편해. 근데 편한 옷 입으면 하루가 편해져.
나 [놀람] 그게 나쁜 거예요?
소라 [기본] 편해지면 그날은 아무것도 안 하게 돼.
* 소라는 패를 냈다. 손톱까지 정리돼 있었다.
소라 [기본] 난 나한테 안 져주려고 이러는 거야.
나 [기본] 힘들겠네요.
소라 [놀람] ...그렇게 말한 사람 처음이야.
소라 [기본] 다들 멋있다고만 해.
@affection 10
@end

=== sora_03 | 시침핀
@bg room night
@bgm autumn
* 소라의 손가락에 반창고가 세 개 붙어 있었다.
나 [기본] 또 찔렸어요?
소라 [기본] 매일 찔려. 장갑 끼면 감이 안 와.
* 소라는 마네킹에 천을 대고 핀을 꽂았다.
소라 [기본] 이 천은 한 마에 오만 원이야. 잘못 자르면 끝이야.
나 [놀람] 그럼 연습은 어디다 해요?
소라 [기본] 광목에 해. 근데 광목이랑 이건 떨어지는 게 달라.
소라 [기본] 결국 비싼 걸로 한 번은 해봐야 돼.
나 [기본] 무섭겠어요.
소라 [기본] 무서워. 근데 무서운 데서 실력이 늘어.
소라 [부끄러움] ...이런 얘기 남한테 잘 안 해.
@affection 10
@end

=== sora_04 | 맞지 않는 치수
@bg room night
@bgm sad
@outfit 0
* 소라가 완성된 옷을 마네킹에서 벗겨 바닥에 내려놓았다.
소라 [기본] 치수를 잘못 쟀어. 어깨가 이 센티 좁아.
나 [기본] 고치면 되잖아요.
소라 [기본] 고치면 선이 죽어. 처음부터 다시야.
* 소라는 무릎을 안고 앉았다. 처음 보는 모습이었다.
소라 [기본] 삼 주 걸렸어. 삼 주가 이 센티 때문에.
@choice
- 이 센티는 소라 씨만 알아요 | +15 | A
- 그럼 다시 만들면 되죠 | +15 | B
@label A
나 [기본] 이 센티는 소라 씨만 알아요.
소라 [기본] 내가 아니까 문제야.
나 [기본] 그게 소라 씨를 좋은 디자이너로 만드는 거고요.
소라 [놀람] ...
소라 [부끄러움] 위로를 그렇게 하는 사람은 또 처음이네.
@goto END
@label B
나 [기본] 그럼 다시 만들면 되죠. 삼 주 더요.
소라 [삐짐] 쉽게 말하네.
나 [기본] 쉽게 말한 거 아니에요. 소라 씨는 할 거잖아요.
소라 [기본] ...할 거야. 당연히.
소라 [부끄러움] 그걸 알아주는 것도 처음이고.
@label END
* 그날 밤 복도에 천이 새로 걸렸다.
@affection 15
@end

=== sora_05 | 원단 시장
@bg street morning
@bgm autumn
@outfit 1
* 새벽 여섯 시, 소라가 큰 가방을 메고 현관에 서 있었다.
소라 [기본] 동대문 가. 좋은 건 아침에 다 나가.
나 [놀람] 이 시간에요?
소라 [기본] 응. 혼자 가는 게 편해.
@choice
- 그럼 짐꾼으로 갈게요 | +20 | A
- 혼자 가는 게 편하면 혼자 가세요 | +20 | B
@label A
나 [기본] 그럼 짐꾼으로 갈게요.
소라 [놀람] 짐꾼?
나 [기본] 원단 무겁잖아요. 고르는 건 소라 씨가 하고요.
소라 [기본] ...역할을 정해주네.
소라 [부끄러움] 그럼 거절할 이유가 없잖아.
@goto END
@label B
나 [기본] 혼자 가는 게 편하면 혼자 가세요.
소라 [놀람] ...
소라 [삐짐] 그렇게 순순히 물러나면 어떡해.
나 [웃음] 같이 가자고 할 줄 알았어요?
소라 [부끄러움] ...아니. 근데 좀 서운하네.
나 [기본] 그럼 갈게요.
@label END
* 시장에서 소라는 원단을 마흔 번쯤 만졌다. 산 건 두 마였다.
소라 [기본] 오늘은 눈만 사러 온 거야. 이런 날도 필요해.
@affection 20
@end

=== sora_06 | 한 벌만 만들어줘
@bg maru night
@bgm autumn
* 소라가 줄자를 들고 마루에 나왔다.
소라 [기본] 어깨 좀 재도 돼?
나 [놀람] 저를요?
소라 [기본] 남자 옷은 안 해봤어. 연습용이야.
@choice
- 연습용이면 해드릴게요 | +20 | A
- 연습용 말고 진짜로 만들어주세요 | +20 | B
@label A
나 [기본] 연습용이면 해드릴게요.
소라 [기본] 고마워. 금방 끝나.
* 줄자를 대는 동안 소라는 아무 말도 하지 않았다.
소라 [부끄러움] ...어깨가 생각보다 넓네.
나 [웃음] 칭찬이죠?
소라 [삐짐] 치수야.
@goto END
@label B
나 [기본] 연습용 말고 진짜로 만들어주세요.
소라 [놀람] 진짜는 비싸.
나 [기본] 그럼 값을 치를게요.
소라 [기본] 돈 말고.
나 [기본] 그럼 뭘로요?
소라 [부끄러움] ...입고 나갈 때마다 어디 갔는지 말해줘.
@label END
* 그날 복도에 새 옷걸이가 하나 늘었다. 치수가 적힌 쪽지가 붙어 있었다.
@affection 20
@end

=== sora_07 | 런웨이에서 넘어졌다
@bg campus night
@bgm sad
* 학과 내부 품평회에서 모델이 소라의 옷을 입고 넘어졌다.
소라 [기본] 밑단이 길었어. 내 잘못이야.
나 [기본] 모델이 넘어진 건데요.
소라 [기본] 넘어지게 만든 건 옷이야.
* 소라는 옷을 접어 가방에 넣었다.
소라 [기본] 사람들이 웃었어. 옷을 보고 웃은 게 아니라 넘어진 걸 보고 웃었지.
소라 [삐짐] 근데 나는 옷이 웃음거리가 된 것 같았어.
나 [기본] 그 옷 다시 볼 수 있어요?
소라 [놀람] 왜?
나 [기본] 넘어진 거 말고 옷을 보려고요.
* 소라는 한참 망설이다 가방에서 옷을 꺼냈다.
나 [기본] 어깨선이 예쁜데요.
소라 [부끄러움] ...그거 삼 주 걸린 거야.
@affection 15
@end

=== sora_08 | 졸업 패션쇼 전날
@bg maru night
@bgm tense
@outfit 1
* 쇼 전날, 소라는 마루에 옷 다섯 벌을 늘어놓았다.
소라 [기본] 세 벌만 올릴 수 있어.
나 [기본] 어떤 게 제일 좋아요?
소라 [기본] 그걸 못 고르겠어서 물어보는 거야.
* 소라는 옷을 하나씩 들었다 놓았다.
소라 [기본] 사람들이 좋아할 건 이거야. 근데 내가 좋아하는 건 저거고.
나 [기본] 저번에 그랬잖아요. 잘 만든 거랑 좋은 건 다르다고.
소라 [놀람] ...
소라 [기본] 내 말을 나한테 돌려주네.
나 [기본] 네. 소라 씨가 맞는 말을 했으니까요.
소라 [부끄러움] ...그럼 내가 좋아하는 걸로 할게.
@affection 20
@end

=== sora_09 | 무대 뒤
@bg festival night
@bgm warm
* 쇼가 끝나고 무대 뒤에서 소라를 만났다.
* 소라의 옷 세 벌이 다 올라갔고, 아무도 넘어지지 않았다.
소라 [웃음] 밑단 다 다시 쟀어. 세 번씩.
나 [기본] 반응 좋던데요.
소라 [기본] 교수님이 그러셨어. 「멀리서 봐도 선이 산다」고.
* 소라는 무대 쪽을 돌아봤다.
소라 [기본] 나 옷을 복도에 거는 이유가 그거야. 멀리서 봐야 진짜가 보여서.
소라 [부끄러움] 근데 요즘은 다른 이유도 있어.
나 [놀람] 뭔데요?
소라 [기본] 지나가면서 누가 봐주니까.
@affection 15
@end

=== sora_10 | 마지막 한 벌
@bg maru night
@bgm confess
@outfit 2
* 열 번째 판이 끝났다. 소라는 옷 한 벌을 들고 왔다.
소라 [기본] 연습용이라고 했던 거.
@cg sora_ending
* 완성된 코트였다. 연습용이라기엔 너무 잘 만들어져 있었다.
나 [놀람] 이거 광목 아닌데요.
소라 [기본] 응. 한 마에 오만 원짜리로 했어.
나 [기본] 연습용이라면서요.
소라 [부끄러움] ...거짓말했어.
* 소라는 코트 안쪽을 뒤집어 보였다. 작은 라벨이 달려 있었다.
소라 [기본] 라벨 다는 건 진짜로 만든 옷에만 해.
소라 [기본] 나 무서운 데서 실력이 는다고 했잖아. 그게 천 얘기만은 아니었어.
소라 [기본] 좋아해.
소라 [웃음] 도도한 척하는 거 그만할게. 삼 주째 그만두고 싶었어.
소라 [부끄러움] 이 옷 삼 주 걸렸거든.
@choice
- 입고 나갈 때마다 말할게요 | +20 | A
- 멀리서 봐도 좋은데요 | +20 | B
@label A
나 [기본] 입고 나갈 때마다 말할게요. 어디 갔는지요.
소라 [놀람] ...그거 기억하고 있었어?
나 [기본] 값을 치르기로 했잖아요.
소라 [부끄러움] ...그럼 매일 나가야겠네.
@goto END
@label B
나 [기본] 멀리서 봐도 좋은데요.
소라 [기본] 그건 옷 얘기야, 내 얘기야?
나 [기본] 둘 다요.
소라 [놀람] ...
소라 [부끄러움] 그런 말은 반칙이라고 했잖아.
나 [웃음] 그런 말 한 적 없는데요.
@label END
@bgm warm
소라 [웃음] 그럼 복도 옷 이제 안 뜯을게. 봐주는 사람 있으니까.
* 그날 이후 삼층 복도의 옷걸이는 줄지 않았다.
@affection 20
@point 300
@end
`,Om=`# 수아 (요리) - 봄 / 2번 하숙생

=== sua_01 | 부엌에서 나는 냄새
@bg kitchen night
@bgm spring
@outfit 0
* 밤 열 시, 부엌에서 버터 냄새가 났다.
수아 [놀람] 아, 깨셨어요? 냄새 때문이죠.
나 [기본] 아니요. 원래 안 자요.
수아 [웃음] 그럼 다행이다. 곧 나와요.
* 오븐에서 스콘이 부풀어 오르고 있었다.
수아 [기본] 202호 수아예요. 조리학과요.
나 [기본] 부엌 보고 들어오신 거죠.
수아 [놀람] 어떻게 아셨어요?
나 [기본] 다들 그래요. 방보다 부엌을 먼저 보고 가요.
수아 [웃음] 맞아요. 여기 오븐이 진짜 좋아요.
* 수아는 접시 두 개를 꺼냈다. 묻지도 않고.
수아 [기본] 맛있는 거 먹으면 기분이 좋아지잖아요. 앉으세요.
@affection 10
@end

=== sua_02 | 설거지 당번표
@bg kitchen night
@bgm spring
* 벽에 붙은 당번표에 수아 이름이 유난히 많았다.
나 [기본] 이거 왜 다 수아 씨예요?
수아 [웃음] 제가 어질렀으니까 제가 하는 게 맞죠.
나 [기본] 다른 사람이 어지른 날도 있는데요.
수아 [기본] 그날은 제가 뭘 만들었을 거예요. 그러니까 반은 제 탓이에요.
나 [놀람] 그런 계산이 어딨어요.
수아 [부끄러움] ...그럼 좀 나눠 주실래요?
나 [기본] 나눠 달라고 말하면 되잖아요.
수아 [웃음] 그 말이 제일 어려워요.
* 그날 당번표에 이름이 하나 더 늘었다.
@affection 10
@end

=== sua_03 | 실패한 시폰 케이크
@bg kitchen evening
@bgm spring
* 부엌에 주저앉은 수아 앞에 납작하게 꺼진 케이크가 있었다.
수아 [삐짐] 세 번째예요.
나 [기본] 뭐가 문제래요?
수아 [기본] 몰라요. 그래서 더 화나요.
* 수아는 꺼진 케이크를 한 조각 잘라 입에 넣었다.
수아 [기본] 맛은 괜찮아요. 모양만 이래요.
나 [기본] 그럼 된 거 아니에요?
수아 [놀람] 시험은 모양도 봐요.
나 [기본] 지금은 시험이 아니잖아요.
수아 [부끄러움] ...그러네요.
* 그날 꺼진 시폰은 둘이 다 먹었다.
수아 [웃음] 실패한 건 같이 먹으면 덜 아까워요.
@affection 10
@end

=== sua_04 | 단맛을 못 느끼는 날
@bg kitchen night
@bgm sad
@outfit 0
* 수아가 설탕을 세 번 넣고 세 번 다 맛을 봤다.
수아 [기본] 오늘 단맛이 안 느껴져요.
나 [놀람] 그런 날도 있어요?
수아 [기본] 있어요. 피곤하면 혀가 먼저 안 돼요.
* 수아는 숟가락을 내려놓았다.
수아 [기본] 이럴 땐 만들면 안 되는데, 안 만들면 더 불안해요.
@choice
- 오늘은 제가 맛을 볼게요 | +15 | A
- 그럼 오늘은 쉬어요 | +15 | B
@label A
나 [기본] 오늘은 제가 맛을 볼게요.
수아 [놀람] 기준이 없잖아요.
나 [기본] 맛있으면 맛있다고 할게요. 그거면 되죠.
수아 [웃음] ...그게 제일 정확한 기준이네요.
@goto END
@label B
나 [기본] 그럼 오늘은 쉬어요. 내일 혀가 돌아오면 하고요.
수아 [기본] 쉬면 내일 두 배로 해야 돼요.
나 [기본] 그럼 내일 두 배로 하죠. 오늘은 쉬고요.
수아 [부끄러움] ...말은 쉽게 하시네.
@label END
* 그날 부엌 불은 일찍 꺼졌다. 대신 마루 불이 늦게까지 켜져 있었다.
@affection 15
@end

=== sua_05 | 시장 가는 길
@bg street morning
@bgm spring
@outfit 1
* 토요일 아침, 수아가 장바구니를 두 개 들고 있었다.
수아 [기본] 하나는 무거워요. 하나는 가벼워요.
나 [놀람] 그걸 왜 저한테 말해요?
수아 [부끄러움] ...같이 가자는 말을 못 해서요.
@choice
- 무거운 거 주세요 | +20 | A
- 그럼 같이 가요 | +20 | B
@label A
나 [기본] 무거운 거 주세요.
수아 [놀람] 아직 아무것도 안 샀는데요.
나 [기본] 그럼 돌아올 때 주세요.
수아 [웃음] ...그 말 하려고 두 개 들고 나왔어요.
@goto END
@label B
나 [기본] 그럼 같이 가요. 그 말 하려던 거 아니에요?
수아 [부끄러움] 어떻게 알았어요.
나 [기본] 장바구니가 두 개잖아요.
수아 [웃음] ...들켰네.
@label END
* 시장에서 수아는 상인들과 전부 인사를 했다. 이름까지 알고 있었다.
수아 [웃음] 여기 오래 다녔거든요. 이 집 할머니랑도 같이 왔었대요.
나 [놀람] 할머니를 아세요?
수아 [기본] 뵌 적은 없어요. 근데 아주머니들이 다 기억하시더라고요.
@affection 20
@end

=== sua_06 | 레시피 노트
@bg room night
@bgm spring
* 수아의 책상에 손으로 쓴 노트가 여러 권 쌓여 있었다.
수아 [기본] 만든 거 전부 적어놔요. 실패한 것도요.
나 [기본] 실패한 것도요?
수아 [기본] 그게 더 중요해요. 왜 망했는지 적어두면 다음엔 안 망하니까.
* 노트 맨 뒤에 이름이 적힌 쪽이 있었다.
나 [놀람] 이건 뭐예요?
수아 [부끄러움] 아, 그건...
@choice
- 안 볼게요 | +20 | A
- 제 이름이 있는데요 | +20 | B
@label A
나 [기본] 안 볼게요.
수아 [놀람] 봐도 되는데요.
나 [기본] 지금 표정이 보지 말라는 표정인데요.
수아 [부끄러움] ...나중에 보여드릴게요. 다 채우면요.
@goto END
@label B
나 [기본] 제 이름이 있는데요.
수아 [부끄러움] 그건... 누가 뭘 잘 먹는지 적어두는 쪽이에요.
나 [기본] 저는 뭐라고 적혀 있어요?
수아 [삐짐] 「단 거 잘 먹음. 안 남김」이요.
나 [웃음] 칭찬이죠?
수아 [웃음] 요리하는 사람한테는 최고의 칭찬이에요.
@label END
@affection 20
@end

=== sua_07 | 손을 데었다
@bg kitchen night
@bgm sad
* 수아가 왼손을 찬물에 대고 있었다.
나 [놀람] 어쩌다가요.
수아 [기본] 팬 손잡이를 맨손으로 잡았어요. 급해서요.
* 손등이 붉게 부어 있었다.
나 [기본] 왜 급했어요.
수아 [기본] ...누가 늦게 들어오길래, 따뜻할 때 주려고요.
나 [놀람] ...
수아 [부끄러움] 별거 아니에요. 자주 그래요.
나 [기본] 자주 그러면 안 되죠.
수아 [기본] 그래도 식은 걸 주는 것보단 나아요.
* 그날 저녁은 식은 채로 먹었다. 대신 오래 앉아 있었다.
나 [기본] 식은 것도 괜찮아요. 같이 먹으면요.
수아 [부끄러움] ...그 말 노트에 적어둘게요.
@affection 15
@end

=== sua_08 | 실기 시험 전날
@bg kitchen night
@bgm tense
@outfit 1
* 시험 전날, 수아는 같은 요리를 네 번 만들었다.
수아 [기본] 네 번째가 제일 못 됐어요.
나 [기본] 그만하고 자요.
수아 [삐짐] 잘될 때까지 할 거예요.
나 [기본] 손이 떨리는데요.
수아 [놀람] ...
* 수아는 팬을 내려놓고 한참 서 있었다.
수아 [기본] 저 사실 잘하고 싶은 게 아니에요.
나 [기본] 그럼요?
수아 [부끄러움] 못한다는 말을 안 듣고 싶은 거예요. 그게 더 무서워요.
나 [기본] 내일 누가 뭐라고 하든, 돌아올 부엌은 여기예요.
수아 [부끄러움] ...그 말이 제일 듣고 싶었나 봐요.
@affection 20
@end

=== sua_09 | 맛을 본 사람
@bg campus evening
@bgm warm
* 시험이 끝나고 수아가 돌아왔다. 손에 남은 접시를 들고 있었다.
수아 [웃음] A 받았어요.
나 [놀람] 네 번째가 제일 못 됐다면서요.
수아 [기본] 다섯 번째를 했거든요. 새벽에요.
수아 [부끄러움] 자라고 하신 다음에요.
나 [웃음] 말을 안 들으시네.
수아 [웃음] 대신 손은 안 데었어요.
* 수아는 남은 접시를 내밀었다.
수아 [기본] 이거 시험 때 만든 거예요. 한 조각 남겼어요.
나 [기본] 왜 남겼어요.
수아 [부끄러움] 맛을 봐줘야 끝나는 것 같아서요. 요즘은.
@affection 15
@end

=== sua_10 | 마지막 접시
@bg kitchen night
@bgm confess
@outfit 2
* 열 번째 판이 끝나고, 수아는 부엌으로 가더니 접시를 하나 들고 왔다.
수아 [부끄러움] 이건 시험용도 아니고 연습용도 아니에요.
@cg sua_ending
* 접시에는 작은 케이크가 하나 있었다. 모양이 완벽하지 않았다.
수아 [기본] 시폰이에요. 열 번째 만에 성공했어요.
나 [놀람] 그때 세 번 실패했던 거요?
수아 [기본] 네. 그 뒤로 일곱 번 더 했어요.
* 수아는 노트를 꺼내 마지막 쪽을 펼쳤다. 실패한 이유가 아홉 줄 적혀 있었다.
수아 [기본] 아홉 번째까지는 왜 망했는지 적었어요.
수아 [부끄러움] 열 번째 줄에는 다른 게 적혀 있어요.
* 마지막 줄에는 이렇게 적혀 있었다. 「오늘은 같이 먹을 사람이 있었다.」
수아 [기본] 저 좋아해요.
수아 [웃음] 이긴 날이라 하는 말도 아니고, 케이크가 잘돼서도 아니에요.
수아 [기본] 식은 것도 괜찮다고 해준 사람이라서 그래요.
@choice
- 이건 식기 전에 먹을게요 | +20 | A
- 다음엔 실패한 것도 같이 먹어요 | +20 | B
@label A
나 [기본] 이건 식기 전에 먹을게요.
수아 [놀람] 급하게 안 드셔도 돼요.
나 [기본] 급한 게 아니라, 따뜻할 때가 제일 맛있잖아요.
수아 [부끄러움] ...그 말 하려고 열 번 만든 거예요.
@goto END
@label B
나 [기본] 다음엔 실패한 것도 같이 먹어요.
수아 [웃음] 실패한 건 맛없어요.
나 [기본] 덜 아까우면 되죠. 수아 씨가 그랬잖아요.
수아 [부끄러움] ...제가 한 말을 왜 기억하고 있어요.
@label END
@bgm warm
수아 [웃음] 그럼 접시 두 개 꺼낼게요. 이제 안 숨기고요.
* 그날부터 당번표에 이름이 늘 두 개씩 적혔다.
@affection 20
@point 300
@end
`,Gm=`# 예린 (힐링) - 가을 / 9번 하숙생

=== yerin_01 | 괜찮냐고 먼저 묻는 사람
@bg maru night
@bgm autumn
@outfit 0
* 마루에 앉자마자 누군가 따뜻한 컵을 내밀었다.
예린 [웃음] 괜찮아요? 얼굴이 좀 피곤해 보여서요.
나 [놀람] 처음 뵙는데요.
예린 [웃음] 그래도 보이는 건 보이잖아요.
* 컵에는 보리차가 들어 있었다. 알맞게 식어 있었다.
예린 [기본] 304호 예린이요. 사회복지학과예요.
나 [기본] 그래서 남 챙기는 게 버릇이세요?
예린 [기본] 순서가 반대예요. 챙기는 게 버릇이라 그 과에 갔어요.
나 [웃음] 그럼 여기서도 그러시겠네요.
예린 [웃음] 그럴 거예요. 미리 사과할게요.
* 예린은 방석을 하나 더 끌어다 놓았다.
예린 [기본] 힘들면 언제든 여기 와서 쉬어도 돼요. 제가 있잖아요.
@affection 10
@end

=== yerin_02 | 따뜻한 걸 먹이는 버릇
@bg kitchen night
@bgm autumn
* 예린이 냄비에 물을 올리고 있었다. 밤 열두 시였다.
나 [기본] 뭐 만들어요?
예린 [기본] 국물요. 누가 늦게 들어오면 주려고요.
나 [놀람] 누가 오는지도 모르고요?
예린 [웃음] 누구든 오면 주면 되죠.
* 냄비는 늘 두 사람 분이었다.
나 [기본] 매일 이렇게 해요?
예린 [기본] 매일은 아니고요. 아무도 안 오는 날도 있어요.
나 [기본] 그런 날은요?
예린 [부끄러움] ...제가 두 그릇 먹어요.
나 [웃음] 그건 좀 슬픈데요.
예린 [웃음] 그렇죠? 그래서 오늘은 다행이에요.
@affection 10
@end

=== yerin_03 | 누구한테 기대요?
@bg maru night
@bgm autumn
* 예린이 다른 하숙생의 고민을 한 시간 들어주고 돌아왔다.
나 [기본] 오늘도 상담소네요.
예린 [웃음] 상담은 아니고요. 그냥 들어주는 거예요.
나 [기본] 예린 씨는 누구한테 얘기해요?
예린 [놀람] ...
예린 [웃음] 저는 얘기할 게 별로 없어요.
나 [기본] 그럴 리가 있나요.
예린 [기본] 있어요. 제 얘기 하면 상대가 부담스러워하거든요.
나 [기본] 저는 안 부담스러운데요.
예린 [부끄러움] ...그건 아직 안 해봐서 그래요.
@affection 10
@end

=== yerin_04 | 혼자 우는 밤
@bg hallway night
@bgm sad
@outfit 0
* 새벽에 복도에서 소리가 났다. 예린이 계단에 앉아 있었다.
* 눈이 부어 있었지만, 나를 보자마자 웃었다.
예린 [웃음] 아, 안 주무셨어요?
나 [기본] 울었어요?
예린 [웃음] 아니요. 하품했어요.
* 그 말을 하면서도 손등으로 눈을 닦았다.
@choice
- 웃지 않아도 돼요 | +15 | A
- 옆에 앉을게요 | +15 | B
@label A
나 [기본] 웃지 않아도 돼요.
예린 [놀람] ...
예린 [기본] 웃는 게 편해요. 그래야 상대가 안 불편하니까.
나 [기본] 지금 불편한 사람은 예린 씨잖아요.
예린 [부끄러움] ...그 말 하는 사람 처음이에요.
@goto END
@label B
나 [기본] 옆에 앉을게요. 아무것도 안 물어볼게요.
예린 [놀람] 안 물어보세요?
나 [기본] 네. 얘기하고 싶어지면 그때 하세요.
* 십 분쯤 뒤에 예린이 먼저 입을 열었다.
예린 [기본] 오늘 실습 나간 데서... 제가 아무것도 못 해드렸어요.
@label END
* 그날 예린은 처음으로 제 얘기를 했다. 삼십 분쯤이었다.
@affection 15
@end

=== yerin_05 | 봉사 나가는 날
@bg street morning
@bgm autumn
@outfit 1
* 토요일 아침, 예린이 짐을 챙기고 있었다.
예린 [기본] 복지관 가요. 한 달에 두 번요.
나 [기본] 혼자 가세요?
예린 [웃음] 네. 다들 주말엔 쉬고 싶어 하니까요.
@choice
- 같이 갈게요 | +20 | A
- 저녁에 마중 나갈게요 | +20 | B
@label A
나 [기본] 같이 갈게요.
예린 [놀람] 힘들어요. 하루 종일이에요.
나 [기본] 예린 씨도 하루 종일 하잖아요.
예린 [기본] 저는 익숙하니까요.
나 [기본] 익숙한 거랑 안 힘든 건 다르죠.
예린 [부끄러움] ...그 말 자주 하시네요. 제가 할 말인데.
@goto END
@label B
나 [기본] 저녁에 마중 나갈게요.
예린 [놀람] 그럴 필요 없어요. 버스 있어요.
나 [기본] 필요해서 가는 게 아니에요.
예린 [기본] 그럼요?
나 [기본] 돌아올 때 누가 있으면 좋잖아요. 예린 씨가 늘 하는 거요.
예린 [부끄러움] ...제가 받아본 적은 없는 거네요.
@label END
* 그날 저녁, 복지관 앞 정류장에서 예린은 한참 서 있다가 웃었다.
@affection 20
@end

=== yerin_06 | 오늘은 제가 챙길게요
@bg kitchen night
@bgm autumn
* 예린이 감기에 걸렸다. 그런데도 냄비를 올리려 했다.
나 [기본] 그거 내려놔요.
예린 [웃음] 괜찮아요. 이 정도는요.
나 [기본] 오늘은 제가 할게요.
예린 [놀람] 할 줄 아세요?
나 [기본] 물 끓이는 건 할 줄 알아요.
@choice
- 앉아서 참견만 하세요 | +20 | A
- 오늘은 예린 씨가 받는 날이에요 | +20 | B
@label A
나 [기본] 앉아서 참견만 하세요.
예린 [웃음] 참견은 잘해요.
* 실제로 예린은 열일곱 번 참견했다.
예린 [부끄러움] ...근데 앉아서 보는 것도 나쁘지 않네요.
@goto END
@label B
나 [기본] 오늘은 예린 씨가 받는 날이에요.
예린 [기본] 그런 날이 어딨어요.
나 [기본] 오늘부터 있어요. 한 달에 두 번씩요.
예린 [놀람] ...복지관 가는 날처럼요?
나 [기본] 네. 그날은 예린 씨가 받는 날로 하죠.
예린 [부끄러움] ...그건 좀 반칙인데.
@label END
* 그날 국물은 좀 싱거웠다. 예린은 두 그릇을 먹었다.
@affection 20
@end

=== yerin_07 | 다 받아주다 지친 날
@bg room night
@bgm sad
* 예린의 방문이 닫혀 있었다. 사흘째였다.
나 [기본] 괜찮아요?
예린 [기본] ...오늘은 아무 말도 하기 싫어요.
* 문 너머에서 목소리만 들렸다.
예린 [기본] 다들 저한테 얘기하고 가요. 그러고 나면 가벼워져서 가요.
예린 [기본] 근데 그거 다 어디로 가는지 아세요? 저한테 쌓여요.
나 [기본] ...
예린 [기본] 제가 좋아서 하는 거니까 누구 탓도 아니에요. 그게 더 힘들어요.
나 [기본] 오늘은 아무 말 안 할게요. 대신 여기 있을게요.
예린 [놀람] 문 앞에요?
나 [기본] 네. 열고 싶어지면 여세요.
* 한 시간쯤 뒤에 문이 열렸다.
예린 [부끄러움] ...기다리는 사람 처음 봐요.
@affection 15
@end

=== yerin_08 | 실습 평가 전날
@bg maru night
@bgm tense
@outfit 1
* 실습 평가 전날, 예린은 서류를 넘기다 말고 손을 멈췄다.
예린 [기본] 내일 평가 받아요. 제가 한 게 잘한 건지 아닌지요.
나 [기본] 잘했을 거예요.
예린 [기본] 그게 문제예요. 다들 그렇게만 말해줘요.
* 예린은 서류를 덮었다.
예린 [기본] 저 사실 잘 못 했을 수도 있어요. 근데 아무도 그렇게 말 안 해줘요.
예린 [삐짐] 잘했다는 말만 들으면, 진짜 잘한 건지 알 수가 없잖아요.
나 [기본] 그럼 제가 물어볼게요. 뭐가 제일 아쉬웠어요?
예린 [놀람] ...
예린 [기본] 할머니 한 분이 계셨는데, 끝까지 말을 안 하셨어요.
예린 [기본] 제가 너무 많이 물어봐서 그런 것 같아요.
나 [기본] 그럼 내일은 덜 물어보면 되죠.
예린 [부끄러움] ...이런 대화가 제일 필요했어요.
@affection 20
@end

=== yerin_09 | 기댄 자리
@bg maru evening
@bgm warm
* 평가가 끝나고 예린이 돌아왔다. 표정이 가벼웠다.
예린 [웃음] 그 할머니가 오늘 말씀하셨어요.
나 [놀람] 뭐라고요?
예린 [기본] 「자네는 자꾸 물어봐서 귀찮았는데, 안 물어보니까 서운하구먼」요.
나 [웃음] 그거 칭찬이네요.
예린 [웃음] 저도 그렇게 들었어요.
* 예린은 마루에 앉아 벽에 기댔다.
예린 [기본] 저 여기 앉으면 늘 이쪽에 앉았거든요. 문 쪽에요.
나 [기본] 왜요?
예린 [부끄러움] 누가 들어오면 먼저 보려고요.
예린 [기본] 오늘은 안쪽에 앉을래요. 기대는 자리로요.
@affection 15
@end

=== yerin_10 | 마지막 한마디
@bg maru night
@bgm confess
@outfit 2
* 열 번째 판이 끝났다. 예린은 이기고도 먼저 컵을 내밀었다.
나 [웃음] 이긴 사람이 왜 챙겨요.
예린 [웃음] 버릇이라니까요.
@cg yerin_ending
* 예린은 작은 수첩을 꺼냈다. 실습 기록장 같았다.
예린 [기본] 이거 제가 만난 사람들 적어두는 거예요.
* 수첩에는 이름과 그날의 한마디가 빼곡히 적혀 있었다.
예린 [기본] 전부 제가 들어준 말이에요. 백 명쯤 돼요.
예린 [부끄러움] 근데 맨 뒷장에 한 사람만 다르게 적혀 있어요.
* 뒷장에는 이렇게 적혀 있었다. 「이 사람은 나한테 물어본 사람」
예린 [기본] 저 남한테 기대는 법을 몰랐어요. 배운 적이 없어서요.
예린 [기본] 여기 와서 처음 배웠어요. 기대도 안 무너지더라고요.
예린 [기본] 좋아해요.
예린 [웃음] 힘들 때 와서 쉬라고 했잖아요. 그 말 제가 하고 싶어요, 이번엔.
예린 [부끄러움] 힘들면 저한테 와요. 저도 갈게요.
@choice
- 오늘은 제가 챙길게요 | +20 | A
- 그 수첩에 제 자리 하나 더 주세요 | +20 | B
@label A
나 [기본] 오늘은 제가 챙길게요.
예린 [놀람] 이긴 건 저인데요.
나 [기본] 이긴 사람이 쉬어야죠.
예린 [부끄러움] ...그 논리 어디서 배웠어요.
나 [웃음] 예린 씨한테요.
@goto END
@label B
나 [기본] 그 수첩에 제 자리 하나 더 주세요.
예린 [기본] 이미 있는데요.
나 [기본] 「들어준 사람」 말고, 「같이 있는 사람」으로요.
예린 [놀람] ...
예린 [부끄러움] 그런 칸은 만든 적이 없어요. 오늘 만들게요.
@label END
@bgm warm
예린 [웃음] 그럼 오늘 국물은 두 그릇 안 먹어도 되겠네요.
* 그날 냄비에는 정확히 두 사람 분이 있었고, 둘 다 비었다.
@affection 20
@point 300
@end
`,zu=["normal","smile","sulk","surprise","shy","serious","win","lose"],Um={기본:"normal",웃음:"smile",삐짐:"sulk",놀람:"surprise",부끄러움:"shy",진지:"serious",승리:"win",패배:"lose"},Vm=["maru","kitchen","hallway","rooftop","yard","cvs","campus","street","room","annex","festival","station","beach"],Hm=["morning","evening","night"],Zm=["title","spring","summer","autumn","winter","warm","tense","sad","confess","none"],Qm=/^([^\s\[\]]+)\s*(?:\[([^\]]+)\])?\s+(.+)$/;function Wm(e,n="<script>"){const t=[],r=[];let i=null,l=n;const o=e.split(/\r?\n/),s=(u,f)=>{r.push({sceneId:l,line:u,message:f})},a=u=>{i&&(u.kind==="label"&&(i.labels[u.name]=i.steps.length),i.steps.push(u))};for(let u=0;u<o.length;u++){const f=u+1,h=o[u].trim();if(!h||h.startsWith("#"))continue;if(h.startsWith("===")){const m=h.replace(/^=+/,"").trim(),[g,$]=m.split("|").map(w=>w.trim());if(!g){s(f,"씬 id 가 없습니다");continue}l=g,i={id:g,title:$??g,tenantId:g.includes("_")?g.split("_")[0]:null,steps:[],labels:{}},t.push(i);continue}if(!i){s(f,"씬 헤더(=== id | 제목) 보다 먼저 나온 줄입니다");continue}if(h.startsWith("*")){const m=h.slice(1).trim();m?a({kind:"narrate",text:m}):s(f,"빈 나레이션");continue}if(h.startsWith("-")){const m=i.steps[i.steps.length-1];if(!m||m.kind!=="choice"){s(f,"@choice 없이 선택지가 나왔습니다");continue}const g=qm(h.slice(1).trim());g?m.options.push(g):s(f,`선택지 형식 오류: ${h}`);continue}if(h.startsWith("@")){const[m,...g]=h.slice(1).split(/\s+/),$=g.join(" ").trim();switch(m){case"bg":{const[w,x]=g;if(!Vm.includes(w)){s(f,`알 수 없는 배경: ${w}`);break}const N=x??"night";if(!Hm.includes(N)){s(f,`알 수 없는 시간대: ${x}`);break}a({kind:"bg",bg:w,time:N});break}case"bgm":{if(!Zm.includes($)){s(f,`알 수 없는 BGM: ${$}`);break}a({kind:"bgm",bgm:$});break}case"sfx":$?a({kind:"sfx",sfx:$}):s(f,"sfx 이름이 없습니다");break;case"cg":$?a({kind:"cg",cg:$}):s(f,"cg 이름이 없습니다");break;case"outfit":{const w=Number($);[0,1,2].includes(w)?a({kind:"outfit",index:w}):s(f,`의상 번호는 0~2: ${$}`);break}case"affection":{const w=Number($);Number.isNaN(w)?s(f,`호감도 값 오류: ${$}`):a({kind:"affection",delta:w});break}case"point":{const w=Number($);Number.isNaN(w)?s(f,`포인트 값 오류: ${$}`):a({kind:"point",delta:w});break}case"choice":a({kind:"choice",options:[]});break;case"label":$?a({kind:"label",name:$}):s(f,"라벨 이름이 없습니다");break;case"goto":$?a({kind:"goto",name:$}):s(f,"goto 대상이 없습니다");break;case"end":a({kind:"end"});break;default:s(f,`알 수 없는 지시어: @${m}`)}continue}const p=Qm.exec(h);if(!p){s(f,`해석할 수 없는 줄: ${h}`);continue}const[,y,k,b]=p;let R="normal";if(k){const m=Um[k.trim()];m?R=m:s(f,`알 수 없는 표정: ${k}`)}a({kind:"say",speaker:y,expression:R,text:b})}for(const u of t){for(const f of u.steps)if(f.kind==="goto"&&!(f.name in u.labels)&&r.push({sceneId:u.id,line:0,message:`없는 라벨로 goto: ${f.name}`}),f.kind==="choice"){f.options.length<2&&r.push({sceneId:u.id,line:0,message:"선택지가 2개 미만입니다"});for(const h of f.options)h.goto&&!(h.goto in u.labels)&&r.push({sceneId:u.id,line:0,message:`없는 라벨로 선택지 이동: ${h.goto}`})}u.steps.some(f=>f.kind==="end")||r.push({sceneId:u.id,line:0,message:"@end 가 없습니다"})}return{scenes:t,issues:r}}function qm(e){const n=e.split("|").map(l=>l.trim());if(n.length<2)return null;const t=n[0];if(!t)return null;const r=Number(n[1]);if(Number.isNaN(r))return null;const i=n[2]?n[2]:null;return{text:t,affection:r,goto:i}}function Km(e){return oo({scene:e,pc:0,view:{bg:"maru",time:"night",bgm:"none",cg:null,outfit:0,speaker:null,expression:"normal",text:"",choices:null,affectionDelta:0,pointDelta:0,sfx:null,done:!1}})}function oo(e){const n={...e.view,sfx:null};if(n.choices)return{...e,view:n};let t=e.pc;const{steps:r,labels:i}=e.scene;let l=0;for(;t<r.length;){if(l++>1e4){n.done=!0;break}const o=r[t];switch(t++,o.kind){case"bg":n.bg=o.bg,n.time=o.time;break;case"bgm":n.bgm=o.bgm;break;case"sfx":n.sfx=o.sfx;break;case"cg":n.cg=o.cg;break;case"outfit":n.outfit=o.index;break;case"affection":n.affectionDelta+=o.delta;break;case"point":n.pointDelta+=o.delta;break;case"label":break;case"goto":{const s=i[o.name];if(s===void 0)return n.done=!0,{...e,pc:r.length,view:n};t=s;break}case"choice":return n.choices=o.options,{...e,pc:t,view:n};case"say":return n.speaker=o.speaker,n.expression=o.expression,n.text=o.text,{...e,pc:t,view:n};case"narrate":return n.speaker=null,n.expression="normal",n.text=o.text,{...e,pc:t,view:n};case"end":return n.done=!0,n.choices=null,{...e,pc:r.length,view:n}}}return n.done=!0,{...e,pc:t,view:n}}function Bh(e,n){const t=e.view.choices;if(!t||n<0||n>=t.length)return e;const r=t[n],i={...e.view,choices:null,affectionDelta:e.view.affectionDelta+r.affection};let l=e.pc;if(r.goto){const o=e.scene.labels[r.goto];o!==void 0&&(l=o)}return oo({...e,pc:l,view:i})}function Ym(e,n=0){let t=e,r=0;for(;!t.view.done&&r++<2e3;)if(t.view.choices){const i=Math.min(n,t.view.choices.length-1);t=Bh(t,i)}else t=oo(t);return t}const Xm=Object.assign({"../data/scripts/arin.txt":Cm,"../data/scripts/chaea.txt":Nm,"../data/scripts/common.txt":Em,"../data/scripts/dabin.txt":Mm,"../data/scripts/gain.txt":Lm,"../data/scripts/hana.txt":Im,"../data/scripts/harin.txt":zm,"../data/scripts/jieun.txt":Dm,"../data/scripts/minji.txt":Am,"../data/scripts/nayeon.txt":Tm,"../data/scripts/ria.txt":Pm,"../data/scripts/rubi.txt":Bm,"../data/scripts/seoyeon.txt":Rm,"../data/scripts/sora.txt":Fm,"../data/scripts/sua.txt":Om,"../data/scripts/yerin.txt":Gm}),Vs={},Du=[];for(const[e,n]of Object.entries(Xm)){const{scenes:t,issues:r}=Wm(n,e);Du.push(...r);for(const i of t)Vs[i.id]&&Du.push({sceneId:i.id,line:0,message:`중복된 씬 id (${e})`}),Vs[i.id]=i}const Jm=Vs;function Ho(e){return Jm[e]??null}const nc="hasukgo.save.v1",Rh=1,e1={rules:{},allRoutes:!0,bgmVolume:.5,sfxVolume:.7,textSpeed:25};function _i(){const e={};for(const n of qe)e[n.id]={affection:0,clearedStage:0,wins:0,losses:0,dating:!1};return{version:Rh,deviceId:"",savedAt:0,points:300,tenants:e,seenScenes:[],unlockedCG:[],recentGames:[],settings:{...e1},owned:[],equipped:{cards:"classic",theme:"maru"},stats:{totalGames:0,wins:0,losses:0,bestScore:0,pointsWon:0,pointsLost:0,biggestPot:0}}}function Fh(){try{const e=localStorage.getItem(nc);if(!e)return _i();const n=JSON.parse(e);return Fl(n)}catch{return _i()}}function tc(e){const n={...e,savedAt:Date.now()};try{localStorage.setItem(nc,JSON.stringify(n))}catch{}t1(n)}const n1="hasukgo",wt="meta",rc="save";function ic(){return new Promise(e=>{try{if(typeof indexedDB>"u")return e(null);const n=indexedDB.open(n1,1);n.onupgradeneeded=()=>{const t=n.result;t.objectStoreNames.contains(wt)||t.createObjectStore(wt)},n.onsuccess=()=>e(n.result),n.onerror=()=>e(null),setTimeout(()=>e(null),1500)}catch{e(null)}})}async function t1(e){const n=await ic();if(n)try{n.transaction(wt,"readwrite").objectStore(wt).put(JSON.stringify(e),rc)}catch{}}async function r1(){const e=await ic();return e?new Promise(n=>{try{const r=e.transaction(wt,"readonly").objectStore(wt).get(rc);r.onsuccess=()=>{try{n(r.result?JSON.parse(r.result):null)}catch{n(null)}},r.onerror=()=>n(null)}catch{n(null)}}):null}async function i1(){const e=Fh(),n=await r1();if(!n)return{data:e,recovered:!1};if(e.stats.totalGames===0&&e.savedAt===0&&n.stats.totalGames>0){const r=Fl(n);return tc(r),{data:r,recovered:!0}}return(n.savedAt??0)>(e.savedAt??0)?{data:Fl(n),recovered:!1}:{data:e,recovered:!1}}function Au(e){const n=Fl(e);return tc(n),n}function l1(){try{localStorage.removeItem(nc)}catch{}return(async()=>{const e=await ic();if(e)try{e.transaction(wt,"readwrite").objectStore(wt).delete(rc)}catch{}})(),_i()}function Fl(e){const n=_i(),t={...n,...e,version:Rh,tenants:{...n.tenants,...e.tenants??{}},settings:{...n.settings,...e.settings??{}},stats:{...n.stats,...e.stats??{}},seenScenes:e.seenScenes??[],unlockedCG:e.unlockedCG??[],recentGames:e.recentGames??[],deviceId:e.deviceId??"",savedAt:e.savedAt??0,owned:e.owned??[],equipped:{...n.equipped,...e.equipped??{}}};for(const r of Object.keys(t.tenants))qe.some(i=>i.id===r)||delete t.tenants[r];return t}function Oh(e){const n={};for(const[t,r]of Object.entries(e.tenants))n[t]=r.clearedStage;return n}function o1(e){const n=e.slice(-20);if(n.length===0)return{goRate:.3,preference:{gwang:.25,yeol:.25,tti:.25,pi:.25},samples:0};const t=n.filter(l=>l.playerWentGo).length/n.length,r={gwang:0,yeol:0,tti:0,pi:0};for(const l of n)r[l.focus]++;const i=n.length;return{goRate:t,preference:{gwang:r.gwang/i,yeol:r.yeol/i,tti:r.tti/i,pi:r.pi/i},samples:n.length}}function s1(e,n,t){const r=e.tenants[n.tenantId];if(!r)return e;const i={...e,tenants:{...e.tenants},recentGames:[...e.recentGames,n].slice(-20),stats:{...e.stats}},l={...r};return i.stats.totalGames++,i.points=Math.max(0,i.points+n.payout),n.payout>0?(i.stats.pointsWon+=n.payout,i.stats.biggestPot=Math.max(i.stats.biggestPot,n.payout)):i.stats.pointsLost+=-n.payout,n.won?(i.stats.wins++,l.wins++,n.stage===l.clearedStage+1&&(l.clearedStage=n.stage,l.affection=Math.min(100,l.affection+10),i.points+=t.reward,n.stage===10&&(l.dating=!0))):(i.stats.losses++,l.losses++),i.stats.bestScore=Math.max(i.stats.bestScore,n.score),i.tenants[n.tenantId]=l,i}function a1(e,n,t){const r=e.seenScenes.includes(n)?e.seenScenes:[...e.seenScenes,n],i=t&&!e.unlockedCG.includes(t)?[...e.unlockedCG,t]:e.unlockedCG;return{...e,seenScenes:r,unlockedCG:i}}function c1(){return Math.min(...qe.map(e=>e.rate*10))}function Gh(e){return e.points<c1()}const Uh=100,lc=.7;function u1(e){if(e.draw)return 0;const n=e.settlementTotal*e.rate;return e.won?Math.round(n):-Math.round(n*lc)}function d1(e){return Gh(e)?{...e,points:e.points+Uh}:e}function f1(e){return qe.every(n=>(e.tenants[n.id]?.clearedStage??0)>=10)}const d=120,I=46,S=118,_t=168,he=196,Pe=360,st=21;function Vh(e){return Math.max(0,Math.min(255,Math.round(e)))}function q(e,n){const t=/^#?([0-9a-f]{6})$/i.exec(e.trim());if(!t)return e;const r=parseInt(t[1],16),i=r>>16&255,l=r>>8&255,o=r&255,s=n>0?255:0,a=Math.abs(n);return`#${[i,l,o].map(f=>Vh(f+(s-f)*a)).map(f=>f.toString(16).padStart(2,"0")).join("")}`}function h1(e,n,t){const r=h=>{const p=/^#?([0-9a-f]{6})$/i.exec(h.trim()),y=p?parseInt(p[1],16):0;return[y>>16&255,y>>8&255,y&255]},[i,l,o]=r(e),[s,a,u]=r(n);return`#${[i+(s-i)*t,l+(a-l)*t,o+(u-o)*t].map(h=>Vh(h).toString(16).padStart(2,"0")).join("")}`}function p1(e){return h1(q(e.hair,.32),e.accent,.32)}let Zo=0;function Hs(){return Zo=(Zo+1)%1e6,`p${Zo.toString(36)}`}const g1={normal:{eye:"open",brow:0,browTilt:0,mouth:"flat",blush:.08,sweat:!1,tear:!1,tilt:0},smile:{eye:"arc",brow:-1,browTilt:-1,mouth:"smile",blush:.3,sweat:!1,tear:!1,tilt:-2},sulk:{eye:"half",brow:2,browTilt:3,mouth:"pout",blush:.2,sweat:!1,tear:!1,tilt:3},surprise:{eye:"wide",brow:-5,browTilt:-2,mouth:"open",blush:.05,sweat:!0,tear:!1,tilt:-1},shy:{eye:"closed",brow:-2,browTilt:2,mouth:"small",blush:.95,sweat:!1,tear:!1,tilt:4},serious:{eye:"open",brow:3,browTilt:-4,mouth:"flat",blush:0,sweat:!1,tear:!1,tilt:0},win:{eye:"arc",brow:-2,browTilt:-2,mouth:"wide",blush:.4,sweat:!1,tear:!1,tilt:-3},lose:{eye:"half",brow:4,browTilt:5,mouth:"wave",blush:.15,sweat:!0,tear:!0,tilt:2}},Hh={normal:"기본",smile:"웃음",sulk:"삐짐",surprise:"놀람",shy:"부끄러움",serious:"진지",win:"승리",lose:"패배"},m1={round:{rx:41,cheek:21,jaw:20},oval:{rx:38,cheek:16,jaw:15},slim:{rx:35,cheek:12,jaw:11}},y1={petite:52,average:58,tall:64},$1={round:{h:12,tilt:0,iris:.95,lid:3.4},sharp:{h:10,tilt:-3.6,iris:.86,lid:3.8},droopy:{h:10.5,tilt:3.2,iris:.92,lid:3.2},narrow:{h:7.6,tilt:-1.6,iris:.82,lid:3.4},sleepy:{h:8.6,tilt:1.2,iris:.86,lid:4.2}},Zt="#2a2018";function Tu(e,n,t,r,i){const l=e,o=d+l*st,s=11.5,a=n.eye==="wide"?t.h*1.32:n.eye==="half"?t.h*.52:t.h,u=t.tilt;if(n.eye==="closed"||n.eye==="arc"){const R=n.eye==="arc"?-1:1,m=t.tilt<0?`<path d="M${o+l*(s+1)} ${S-3} l${l*5} -4" stroke="${Zt}" stroke-width="2.6" stroke-linecap="round"/>`:"";return`
      <path d="M${o-l*s} ${S+1} q${l*s} ${R*9} ${l*s*2} ${u*.5}"
            stroke="${Zt}" stroke-width="3.2" fill="none" stroke-linecap="round"/>
      ${m}`}const f=`${o-l*s} ${S+1.5}`,h=`${o+l*s} ${S+u}`,p=`M${f} Q${o} ${S-a} ${h} Q${o} ${S+a*.74} ${f} Z`,y=a*t.iris*.82,k=S-a*.06+(n.eye==="half"?-1:0),b=t.tilt<-2?`<path d="M${o+l*(s-1)} ${S+u-1} l${l*6} -5" stroke="${Zt}" stroke-width="2.8" stroke-linecap="round"/>`:"";return`
    <clipPath id="${i}"><path d="${p}"/></clipPath>
    <path d="${p}" fill="#fdfbf7"/>
    <g clip-path="url(#${i})">
      <circle cx="${o}" cy="${k}" r="${y.toFixed(1)}" fill="${q(r,-.45)}"/>
      <circle cx="${o}" cy="${(k+y*.14).toFixed(1)}" r="${(y*.8).toFixed(1)}" fill="${r}"/>
      <circle cx="${o}" cy="${(k+y*.28).toFixed(1)}" r="${(y*.42).toFixed(1)}" fill="#1a1410"/>
      <circle cx="${(o-l*y*.34).toFixed(1)}" cy="${(k-y*.42).toFixed(1)}" r="${(y*.3).toFixed(1)}" fill="#ffffff"/>
      <circle cx="${(o+l*y*.36).toFixed(1)}" cy="${(k+y*.5).toFixed(1)}" r="${(y*.16).toFixed(1)}" fill="#ffffff" opacity="0.75"/>
      <path d="${p}" fill="none" stroke="${Zt}" stroke-width="${t.lid*2}" opacity="0.0"/>
    </g>
    <path d="M${f} Q${o} ${S-a} ${h}" stroke="${Zt}" stroke-width="${t.lid}" fill="none" stroke-linecap="round"/>
    <path d="M${o} ${S+a*.66} Q${o+l*s*.7} ${S+a*.5} ${h}"
          stroke="${Zt}" stroke-width="1.5" fill="none" opacity="0.5" stroke-linecap="round"/>
    ${b}`}function w1(e,n,t){const r=$1[n];return Tu(-1,e,r,t,Hs())+Tu(1,e,r,t,Hs())}function v1(e,n){const t=S-19+e.brow,r=e.browTilt,i=17,l=o=>`<path d="M${d+o*st-o*i*.55} ${t+r} q${o*i*.5} -5 ${o*i} ${-r*.45}"
                  stroke="${n}" stroke-width="3.4" fill="none" stroke-linecap="round"/>`;return l(-1)+l(1)}function x1(e){const n=S+34,t="#a85a56",r="#8c3f41";switch(e.mouth){case"smile":return`<path d="M${d-9} ${n-1} q9 8 18 0" stroke="${t}" stroke-width="2.8" fill="none" stroke-linecap="round"/>`;case"wide":return`<path d="M${d-11} ${n-2} q11 14 22 0 q-11 4 -22 0z" fill="${r}"/>
              <path d="M${d-8} ${n-1} q8 4 16 0" fill="#ffffff" opacity="0.85"/>`;case"pout":return`<path d="M${d-7} ${n+3} q7 -7 14 0" stroke="${t}" stroke-width="2.8" fill="none" stroke-linecap="round"/>`;case"open":return`<ellipse cx="${d}" cy="${n+2}" rx="6" ry="8.5" fill="${r}"/>
              <ellipse cx="${d}" cy="${n+5}" rx="3.4" ry="4" fill="#c4726e" opacity="0.8"/>`;case"small":return`<path d="M${d-4} ${n} q4 4.5 8 0" stroke="${t}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;case"wave":return`<path d="M${d-10} ${n} q5 -5.5 10 0 q5 5.5 10 0" stroke="${t}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;default:return`<path d="M${d-6} ${n} q6 2.5 12 0" stroke="${t}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`}}function k1(e,n){const t=e.hair,r=q(t,-.3),i=52;switch(e.hairStyle){case"long":return`<path d="M${d-i} ${S-20}
                       C${d-i-12} ${S+90} ${d-n-6} 260 ${d-n-10} ${Pe}
                       L${d+n+10} ${Pe}
                       C${d+n+6} 260 ${d+i+12} ${S+90} ${d+i} ${S-20} Z" fill="${r}"/>`;case"wave":return`<path d="M${d-i} ${S-20}
                       C${d-i-16} ${S+80} ${d-n-10} 250 ${d-n-14} ${Pe}
                       q14 -16 26 0 q14 -18 26 0 q12 -16 24 0 q14 -18 26 0 q12 -16 26 0
                       C${d+n+10} 250 ${d+i+16} ${S+80} ${d+i} ${S-20} Z" fill="${r}"/>`;case"braid":return`<path d="M${d-i} ${S-20} C${d-i-6} ${S+60} ${d-48} 220 ${d-44} 250
                       L${d+44} 250 C${d+48} 220 ${d+i+6} ${S+60} ${d+i} ${S-20} Z" fill="${r}"/>
              <g transform="translate(${d+38} ${S+34}) rotate(10)">
                ${[0,1,2,3,4].map(l=>{const o=l*25,s=14-l*1.2;return`<ellipse cx="0" cy="${o}" rx="${s.toFixed(1)}" ry="16" fill="${l%2?q(t,.1):q(t,-.14)}"/>
                            <path d="M${-s.toFixed(1)} ${o+12} q${s.toFixed(1)} -9 ${(s*2).toFixed(1)} 0"
                                  stroke="${q(t,-.45)}" stroke-width="1.8" fill="none" opacity="0.8"/>`}).join("")}
                <path d="M0 ${4*25+14} l-7 15 h14z" fill="${q(t,-.5)}"/>
                <rect x="-9" y="${4*25+10}" width="18" height="6" rx="3" fill="${e.accent}"/>
              </g>`;case"ponytail":return`<path d="M${d-46} ${S-20} C${d-50} ${S+40} ${d-44} 200 ${d-40} 214
                       L${d+40} 214 C${d+44} 200 ${d+50} ${S+40} ${d+46} ${S-20} Z" fill="${r}"/>
              <path d="M${d+40} ${S-26} C${d+86} ${S+4} ${d+82} ${S+90} ${d+56} ${S+150}
                       C${d+74} ${S+80} ${d+70} ${S+20} ${d+34} ${S+4} Z" fill="${t}"/>`;case"bun":return`<path d="M${d-44} ${S-20} C${d-46} ${S+20} ${d-42} 170 ${d-38} 182
                       L${d+38} 182 C${d+42} 170 ${d+46} ${S+20} ${d+44} ${S-20} Z" fill="${r}"/>
              <circle cx="${d}" cy="${I-22}" r="20" fill="${t}"/>
              <circle cx="${d}" cy="${I-22}" r="20" fill="none" stroke="${r}" stroke-width="2"/>
              <path d="M${d-14} ${I-28} q14 -10 28 0" stroke="${q(t,.3)}" stroke-width="3" fill="none" opacity="0.5"/>`;case"bob":return`<path d="M${d-48} ${S-20} C${d-54} ${S+30} ${d-48} ${S+52} ${d-40} ${S+62}
                       L${d+40} ${S+62} C${d+48} ${S+52} ${d+54} ${S+30} ${d+48} ${S-20} Z" fill="${r}"/>`;default:return`<path d="M${d-44} ${S-24} C${d-48} ${S+6} ${d-44} ${S+18} ${d-38} ${S+24}
                       L${d+38} ${S+24} C${d+44} ${S+18} ${d+48} ${S+6} ${d+44} ${S-24} Z" fill="${r}"/>`}}function b1(e,n){const t=e.hair,r=q(t,.32);return`
    <path d="M${d-n-3} ${S-4}
             C${d-n-5} ${I-8} ${d-n*.66} ${I-16} ${d} ${I-16}
             C${d+n*.66} ${I-16} ${d+n+5} ${I-8} ${d+n+3} ${S-4}
             C${d+n} ${S-30} ${d+n*.5} ${S-40} ${d} ${S-40}
             C${d-n*.5} ${S-40} ${d-n} ${S-30} ${d-n-3} ${S-4} Z" fill="${t}"/>
    <path d="M${d-n*.8} ${I+2} C${d-n*.4} ${I-14} ${d+n*.1} ${I-15} ${d+n*.42} ${I-5}
             C${d+n*.1} ${I-9} ${d-n*.4} ${I-7} ${d-n*.8} ${I+8} Z"
          fill="${r}" opacity="0.3"/>`}function S1(e,n,t){const r=n.hair,i=q(r,.26),l=S-26;switch(e){case"straight":return`<path d="M${d-t-2} ${S-4} C${d-t} ${I-8} ${d-20} ${I-16} ${d} ${I-16}
                       C${d+20} ${I-16} ${d+t} ${I-8} ${d+t+2} ${S-4}
                       C${d+t-4} ${l+2} ${d+20} ${l-4} ${d} ${l-2}
                       C${d-20} ${l-4} ${d-t+4} ${l+2} ${d-t-2} ${S-4} Z" fill="${r}"/>
              <path d="M${d-22} ${I-4} q20 -8 40 2 q-20 -2 -40 -2z" fill="${i}" opacity="0.5"/>`;case"split":return`<path d="M${d-t-2} ${S-2} C${d-t} ${I-8} ${d-18} ${I-16} ${d} ${I-16}
                       C${d+18} ${I-16} ${d+t} ${I-8} ${d+t+2} ${S-2}
                       C${d+t-6} ${l+6} ${d+22} ${l-2} ${d+7} ${I+6}
                       C${d+3} ${I+22} ${d-3} ${I+22} ${d-7} ${I+6}
                       C${d-22} ${l-2} ${d-t+6} ${l+6} ${d-t-2} ${S-2} Z" fill="${r}"/>
              <path d="M${d-26} ${I} q22 -9 44 0 q-22 -1 -44 0z" fill="${i}" opacity="0.45"/>`;case"side":return`<path d="M${d-t-2} ${S+2} C${d-t} ${I-8} ${d-18} ${I-16} ${d} ${I-16}
                       C${d+20} ${I-16} ${d+t} ${I-8} ${d+t+2} ${S+2}
                       C${d+t-8} ${l-6} ${d+10} ${l+8} ${d-14} ${l+4}
                       C${d-26} ${l+2} ${d-t+2} ${l+10} ${d-t-2} ${S+2} Z" fill="${r}"/>
              <path d="M${d-18} ${I-2} C${d+4} ${I-10} ${d+24} ${I+2} ${d+30} ${I+18}
                       C${d+20} ${I+4} ${d+2} ${I+2} ${d-18} ${I+6} Z" fill="${i}" opacity="0.5"/>`;case"curtain":return`<path d="M${d-t-2} ${S+4} C${d-t} ${I-8} ${d-18} ${I-16} ${d} ${I-16}
                       C${d+18} ${I-16} ${d+t} ${I-8} ${d+t+2} ${S+4}
                       C${d+t-2} ${l+14} ${d+26} ${l+4} ${d+14} ${I+2}
                       C${d+8} ${I-6} ${d-8} ${I-6} ${d-14} ${I+2}
                       C${d-26} ${l+4} ${d-t+2} ${l+14} ${d-t-2} ${S+4} Z" fill="${r}"/>
              <path d="M${d-30} ${I+2} C${d-18} ${I-10} ${d+18} ${I-10} ${d+30} ${I+2}
                       C${d+16} ${I-4} ${d-16} ${I-4} ${d-30} ${I+2} Z" fill="${i}" opacity="0.5"/>`;default:{const s=(2*t+4)/6;let a="";for(let u=0;u<6;u+=1)a+=` l${-s.toFixed(1)} ${u%2===0?-16:16}`;return`<path d="M${d-t-2} ${S-14} C${d-t} ${I-12} ${d-18} ${I-20} ${d} ${I-20}
                       C${d+18} ${I-20} ${d+t} ${I-12} ${d+t+2} ${S-14}${a} Z" fill="${r}"/>
              <path d="M${d-16} ${I-8} l12 -9 l7 11 z" fill="${i}" opacity="0.5"/>`}}}function _1(e,n){const t=e.hair,r=q(t,-.14),l=["long","wave","braid","ponytail"].includes(e.hairStyle)?104:e.hairStyle==="bob"?56:26,o=s=>`<path d="M${d+s*(n+1)} ${S-26}
              C${d+s*(n+6)} ${S+l*.35} ${d+s*(n+2)} ${S+l*.8} ${d+s*(n-4)} ${S+l}
              C${d+s*(n-1)} ${S+l*.7} ${d+s*(n-4)} ${S+6} ${d+s*(n-7)} ${S-22} Z"
            fill="${r}"/>`;return o(-1)+o(1)}function j1(e,n,t){const r=n.accent;switch(e){case"glasses":{const i=q(r,-.55),l=o=>`<rect x="${d+o*st-15}" y="${S-12}" width="30" height="23" rx="8"
               fill="#dff0ff" fill-opacity="0.16" stroke="${i}" stroke-width="2.4"/>`;return`${l(-1)}${l(1)}
              <path d="M${d-6} ${S-5} q6 -3 12 0" stroke="${i}" stroke-width="2.4" fill="none"/>
              <path d="M${d-st-15} ${S-6} l-6 -3 M${d+st+15} ${S-6} l6 -3"
                    stroke="${i}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
              <path d="M${d-st-11} ${S-8} l9 -2 l-11 9z" fill="#ffffff" opacity="0.3"/>`}case"hairpin":return`<g transform="translate(${d-t+4} ${I+2}) rotate(-18)">
                <rect x="-11" y="-3" width="22" height="6" rx="3" fill="${r}"/>
                <circle cx="-11" cy="0" r="3.4" fill="${q(r,.35)}"/>
              </g>`;case"starpin":return`<g transform="translate(${d+t-6} ${I}) rotate(12)">
                <path d="M0 -9 L2.6 -2.8 L9 -2.8 L3.8 1.2 L5.8 8 L0 4 L-5.8 8 L-3.8 1.2 L-9 -2.8 L-2.6 -2.8 Z" fill="${r}"/>
                <circle cx="0" cy="0" r="2" fill="#fff" opacity="0.7"/>
              </g>`;case"ribbon":return`<g transform="translate(${d+t-10} ${I-4})">
                <path d="M0 0 l-13 -7 v14 z" fill="${r}"/>
                <path d="M0 0 l13 -7 v14 z" fill="${r}"/>
                <circle cx="0" cy="0" r="4" fill="${q(r,-.2)}"/>
              </g>`;case"earring":return`<g fill="${r}">
                <circle cx="${d-t-1}" cy="${S+12}" r="3"/>
                <circle cx="${d+t+1}" cy="${S+12}" r="3"/>
                <path d="M${d+t+1} ${S+14} v7" stroke="${r}" stroke-width="1.6"/>
                <circle cx="${d+t+1}" cy="${S+23}" r="3.2"/>
              </g>`;case"band":return`<path d="M${d-t-4} ${S-14} C${d-t} ${I-14} ${d+t} ${I-14} ${d+t+4} ${S-14}"
                    stroke="${r}" stroke-width="6" fill="none" stroke-linecap="round"/>`;default:return""}}function C1(e){const n=he-16;return`M${d-18} ${n}
          C${d-46} ${n+4} ${d-e} ${n+16} ${d-e} ${n+46}
          C${d-e} ${n+86} ${d-e*.74} 302 ${d-e*.86} ${Pe}
          L${d+e*.86} ${Pe}
          C${d+e*.74} 302 ${d+e} ${n+86} ${d+e} ${n+46}
          C${d+e} ${n+16} ${d+46} ${n+4} ${d+18} ${n} Z`}function N1(e,n,t){const r=e-5,i=o=>`<path d="M${d+o*(r-6)} ${he+8} C${d+o*(r+6)} ${he+50} ${d+o*(r+3)} ${he+84} ${d+o*(r-2)} ${he+108}"
           stroke="${n}" stroke-width="27" fill="none" stroke-linecap="round"/>`,l=o=>`<circle cx="${d+o*(r-2)}" cy="${he+118}" r="11.5" fill="${t}"/>
     <circle cx="${d+o*(r-2)}" cy="${he+118}" r="11.5" fill="${q(t,-.12)}" opacity="0.35"/>`;return i(-1)+i(1)+l(-1)+l(1)}function E1(e,n,t,r,i){const l=he-16,o=q(n,-.22),s=q(n,.2),a=`M${d-17} ${l+1} L${d} ${l+26} L${d+17} ${l+1}`;switch(e){case"hoodie":return`
        <path d="M${d-34} ${l+2} C${d-40} ${l+30} ${d-22} ${l+40} ${d} ${l+40}
                 C${d+22} ${l+40} ${d+40} ${l+30} ${d+34} ${l+2}
                 C${d+20} ${l-10} ${d-20} ${l-10} ${d-34} ${l+2} Z" fill="${o}"/>
        <path d="M${d-24} ${l+8} q24 22 48 0" stroke="${q(n,-.4)}" stroke-width="2" fill="none" opacity="0.6"/>
        <path d="M${d-8} ${l+26} v34" stroke="#f5efe4" stroke-width="3.4" stroke-linecap="round"/>
        <path d="M${d+8} ${l+24} v30" stroke="#f5efe4" stroke-width="3.4" stroke-linecap="round"/>
        <path d="M${d-30} ${l+96} h60" stroke="${o}" stroke-width="2.4" opacity="0.7"/>`;case"tee":return`
        <path d="M${d-19} ${l+2} q19 20 38 0" stroke="${o}" stroke-width="4" fill="none"/>
        <path d="M${d-i+8} ${he+52} q12 8 22 2" stroke="${o}" stroke-width="3" fill="none"/>
        <path d="M${d+i-8} ${he+52} q-12 8 -22 2" stroke="${o}" stroke-width="3" fill="none"/>
        <circle cx="${d}" cy="${l+74}" r="15" fill="none" stroke="${t}" stroke-width="3" opacity="0.75"/>`;case"shirt":return`
        <path d="${a}" stroke="none" fill="${q(r,-.05)}"/>
        <path d="M${d-17} ${l} l-13 12 l19 12 l11 -20z" fill="#f6f1e6"/>
        <path d="M${d+17} ${l} l13 12 l-19 12 l-11 -20z" fill="#f6f1e6"/>
        <path d="M${d} ${l+24} v${Pe-l-24}" stroke="${o}" stroke-width="2.2"/>
        ${[40,70,100,130].map(u=>`<circle cx="${d}" cy="${l+u}" r="2.6" fill="${s}"/>`).join("")}`;case"apron":return`
        <path d="M${d-17} ${l} l-13 12 l19 12 l11 -20z" fill="#f6f1e6"/>
        <path d="M${d+17} ${l} l13 12 l-19 12 l-11 -20z" fill="#f6f1e6"/>
        <path d="M${d-26} ${l+30} h52 l8 ${Pe-l-30} h-68z" fill="${s}"/>
        <path d="M${d-26} ${l+30} l-4 -18 M${d+26} ${l+30} l4 -18"
              stroke="${s}" stroke-width="7" stroke-linecap="round"/>
        <path d="M${d-34} ${l+104} h68" stroke="${t}" stroke-width="8"/>
        <path d="M${d+22} ${l+108} q14 10 8 26" stroke="${t}" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M${d-16} ${l+120} h32 v26 h-32z" fill="${q(s,-.1)}" opacity="0.8"/>`;case"smock":return`
        <path d="${a}" fill="${q(r,-.05)}"/>
        <path d="${a}" stroke="${o}" stroke-width="3.5" fill="none"/>
        <path d="M${d-i+4} ${he+60} q14 10 26 2" stroke="${o}" stroke-width="6" fill="none"/>
        <path d="M${d+i-4} ${he+60} q-14 10 -26 2" stroke="${o}" stroke-width="6" fill="none"/>
        ${[[d-26,l+62,5,t],[d+18,l+86,4,q(t,.3)],[d+30,l+48,3,"#e4d7a8"],[d-12,l+116,6,q(t,-.25)],[d+8,l+140,3.5,t]].map(([u,f,h,p])=>`<circle cx="${u}" cy="${f}" r="${h}" fill="${p}" opacity="0.75"/>`).join("")}`;case"jersey":return`
        <path d="M${d-18} ${l+2} q18 8 36 0 v10 q-18 8 -36 0z" fill="${o}"/>
        <path d="M${d} ${l+12} v${Pe-l-12}" stroke="${q(n,-.45)}" stroke-width="3"/>
        <path d="M${d-i+2} ${he+14} C${d-i+10} ${he+56} ${d-i+8} ${he+86} ${d-i+4} ${he+104}"
              stroke="${t}" stroke-width="5" fill="none"/>
        <path d="M${d+i-2} ${he+14} C${d+i-10} ${he+56} ${d+i-8} ${he+86} ${d+i-4} ${he+104}"
              stroke="${t}" stroke-width="5" fill="none"/>
        <path d="M${d-34} ${l+40} h22" stroke="#ffffff" stroke-width="3.4" opacity="0.85"/>`;case"blouse":return`
        <path d="M${d-20} ${l+2} q20 24 40 0 q-4 16 -20 16 q-16 0 -20 -16z" fill="#f8f3e9"/>
        <path d="M${d-20} ${l+2} q20 24 40 0" stroke="${o}" stroke-width="2.6" fill="none"/>
        <g transform="translate(${d} ${l+22})">
          <path d="M0 0 l-12 -6 v12 z" fill="${t}"/>
          <path d="M0 0 l12 -6 v12 z" fill="${t}"/>
          <circle r="3.6" fill="${q(t,-.25)}"/>
        </g>
        ${[60,92,124].map(u=>`<circle cx="${d}" cy="${l+u}" r="2.4" fill="${s}"/>`).join("")}`;case"knit":return`
        <path d="M${d-22} ${l-4} q22 26 44 0 v14 q-22 22 -44 0z" fill="${s}"/>
        ${[0,1,2,3,4,5].map(u=>`<path d="M${d-22+u*9} ${l-2} q3 12 0 24" stroke="${o}" stroke-width="1.6" fill="none" opacity="0.6"/>`).join("")}
        <path d="M${d-12} ${l+46} q12 18 0 36 q-12 18 0 36" stroke="${o}" stroke-width="2.4" fill="none" opacity="0.5"/>
        <path d="M${d+12} ${l+46} q-12 18 0 36 q12 18 0 36" stroke="${o}" stroke-width="2.4" fill="none" opacity="0.5"/>
        <path d="M${d-i+4} ${he+96} q14 10 26 2" stroke="${o}" stroke-width="6" fill="none"/>
        <path d="M${d+i-4} ${he+96} q-14 10 -26 2" stroke="${o}" stroke-width="6" fill="none"/>`;case"suit":{const u=q(n,-.3);return`
        <path d="M${d-16} ${l} L${d} ${l+30} L${d+16} ${l} L${d+12} ${l+88} L${d-12} ${l+88} Z" fill="#f6f1e6"/>
        <path d="M${d-23} ${l-2} L${d-3} ${l+38} L${d-29} ${l+80} L${d-41} ${l+18} Z" fill="${u}"/>
        <path d="M${d+23} ${l-2} L${d+3} ${l+38} L${d+29} ${l+80} L${d+41} ${l+18} Z" fill="${u}"/>
        <path d="M${d-23} ${l-2} L${d-3} ${l+38} M${d+23} ${l-2} L${d+3} ${l+38}"
              stroke="${s}" stroke-width="2"/>
        <g transform="translate(${d} ${l+26})">
          <path d="M0 0 l-12 -7 v14 z" fill="${t}"/>
          <path d="M0 0 l12 -7 v14 z" fill="${t}"/>
          <circle r="3.6" fill="${q(t,-.3)}"/>
        </g>
        <circle cx="${d-1}" cy="${l+104}" r="3" fill="${s}"/>`}case"dress":return`
        <path d="M${d-24} ${l+4} q24 22 48 0 v8 q-24 20 -48 0z" fill="${s}"/>
        <path d="M${d-24} ${l+4} q24 22 48 0" stroke="${o}" stroke-width="2.4" fill="none"/>
        <path d="M${d-i*.92} ${l+104} h${i*1.84}" stroke="${t}" stroke-width="9"/>
        <path d="M${d-i*.9} ${l+120} q${i*.9} 12 ${i*1.8} 0" stroke="${s}" stroke-width="2.4" fill="none" opacity="0.7"/>
        <g transform="translate(${d+26} ${l+108})">
          <path d="M0 0 l-11 -6 v12 z" fill="${q(t,.25)}"/>
          <path d="M0 0 l11 -6 v12 z" fill="${q(t,.25)}"/>
        </g>`;case"cardigan":return`
        <path d="M${d-20} ${l+2} L${d} ${l+30} L${d+20} ${l+2} L${d+16} ${Pe} L${d-16} ${Pe} Z" fill="#efe6d6"/>
        <path d="M${d-20} ${l+2} L${d-2} ${l+34} L${d-10} ${Pe} L${d-30} ${Pe} Z" fill="${o}"/>
        <path d="M${d+20} ${l+2} L${d+2} ${l+34} L${d+10} ${Pe} L${d+30} ${Pe} Z" fill="${o}"/>
        ${[52,84,116,148].map(u=>`<circle cx="${d-14}" cy="${l+u}" r="2.8" fill="${t}"/>`).join("")}
        <path d="M${d-i+4} ${he+100} q14 10 26 2" stroke="${o}" stroke-width="6" fill="none"/>
        <path d="M${d+i-4} ${he+100} q-14 10 -26 2" stroke="${o}" stroke-width="6" fill="none"/>`;case"coat":return`
        <path d="M${d-18} ${l+2} L${d} ${l+30} L${d+18} ${l+2}" fill="${q(r,-.08)}"/>
        <path d="M${d-26} ${l-4} L${d-2} ${l+36} L${d-34} ${l+84} L${d-46} ${l+16} Z" fill="${s}"/>
        <path d="M${d+26} ${l-4} L${d+2} ${l+36} L${d+34} ${l+84} L${d+46} ${l+16} Z" fill="${s}"/>
        <path d="M${d} ${l+36} v${Pe-l-36}" stroke="${q(n,-.4)}" stroke-width="2.2"/>
        <path d="M${d-i*.94} ${l+110} h${i*1.88}" stroke="${q(n,-.38)}" stroke-width="10"/>
        <rect x="${d-9}" y="${l+104}" width="18" height="16" rx="3" fill="${t}"/>
        ${[[d-13,l+62],[d+13,l+62],[d-13,l+88],[d+13,l+88]].map(([u,f])=>`<circle cx="${u}" cy="${f}" r="3.2" fill="${q(n,-.45)}"/>`).join("")}`;default:return`
        <path d="M${d-30} ${l+4} L${d} ${l+40} L${d+30} ${l+4}
                 L${d+34} ${l+14} L${d} ${l+54} L${d-34} ${l+14} Z" fill="#fbf6ec"/>
        <path d="M${d-30} ${l+4} L${d} ${l+40} L${d+30} ${l+4}" stroke="${o}" stroke-width="2" fill="none"/>
        <path d="M${d-34} ${l+14} L${d} ${l+54} L${d+20} ${l+32} L${d+26} ${l+62} L${d-30} ${l+62} Z" fill="${n}"/>
        <path d="M${d-i} ${l+70} q${i} 16 ${i*2} 0" stroke="${t}" stroke-width="9" fill="none"/>
        <g transform="translate(${d+10} ${l+60})">
          <path d="M0 0 l-14 -8 v16 z" fill="${t}"/>
          <path d="M0 0 l14 -8 v16 z" fill="${t}"/>
          <path d="M-3 6 C-8 40 -4 70 -9 ${Pe-l-60}" stroke="${t}" stroke-width="7" fill="none" stroke-linecap="round"/>
          <path d="M6 6 C12 44 8 76 14 ${Pe-l-60}" stroke="${q(t,.18)}" stroke-width="7" fill="none" stroke-linecap="round"/>
        </g>`}}function M1(e,n,t){const r=n.accent,i=d-(t-5)+2,l=he+118,o=a=>a.replace(/fill="[^"]*"/g,'fill="#f4ecdc"').replace(/stroke="[^"]*"/g,'stroke="#f4ecdc"'),s=a=>`<g transform="translate(${i} ${l}) scale(1.18)" stroke-linejoin="round">
       <g stroke="#f4ecdc" stroke-width="5" opacity="0.9">${o(a)}</g>
       ${a}
     </g>`;switch(e){case"sketchbook":return s(`<rect x="-16" y="-26" width="34" height="46" rx="3" fill="#f4ecdb" stroke="#c9b894" stroke-width="2"/>
                 <path d="M-16 -18 h34" stroke="#c9b894" stroke-width="2"/>
                 ${[0,1,2,3].map(a=>`<circle cx="${-11+a*9}" cy="-22" r="2" fill="#9c8b6c"/>`).join("")}
                 <path d="M-9 -6 q10 -8 20 2 M-9 4 h20" stroke="${r}" stroke-width="2" fill="none" opacity="0.8"/>`);case"ladle":return s(`<path d="M2 -34 v40" stroke="#c6cbd2" stroke-width="5" stroke-linecap="round"/>
                 <path d="M-10 6 a12 10 0 0 0 24 0 z" fill="#dde2e8" stroke="#a8b0ba" stroke-width="2"/>`);case"brush":return s(`<path d="M6 -36 L-2 10" stroke="#b98c4e" stroke-width="5" stroke-linecap="round"/>
                 <path d="M-3 8 l-5 16 l10 2 z" fill="${r}"/>
                 <path d="M4 -8 h4" stroke="#8a6a3a" stroke-width="3"/>`);case"tape":return s(`<g transform="translate(0 -16)">
                   <path d="M-12 -2 q12 -7 24 0 v6 q-12 7 -24 0z" fill="#f6f2e8"/>
                   <path d="M-12 8 q12 -7 24 0 v6 q-12 7 -24 0z" fill="#f6f2e8"/>
                 </g>`);case"notebook":return s(`<rect x="-15" y="-22" width="31" height="40" rx="3" fill="#3d4757"/>
                 <rect x="-11" y="-18" width="23" height="32" rx="2" fill="#f3efe4"/>
                 ${[0,1,2].map(a=>`<path d="M-7 ${-9+a*9} h15" stroke="#b7b0a0" stroke-width="2"/>`).join("")}
                 <path d="M14 -22 v40" stroke="${r}" stroke-width="3"/>`);case"telescope":return s(`<g transform="rotate(-28)">
                   <rect x="-22" y="-7" width="40" height="15" rx="7" fill="#33405c"/>
                   <rect x="14" y="-9" width="14" height="19" rx="6" fill="#4a5a7d"/>
                   <circle cx="28" cy="0" r="6" fill="${r}"/>
                   <path d="M-18 -3 h30" stroke="#6b7da6" stroke-width="2" opacity="0.8"/>
                 </g>`);case"bag":return s(`<path d="M-4 -14 a14 12 0 0 1 22 0" stroke="#6b5136" stroke-width="3.5" fill="none"/>
                 <rect x="-14" y="-14" width="42" height="34" rx="4" fill="#7c5c3c" stroke="#5a4028" stroke-width="2"/>
                 <path d="M-14 -4 h42" stroke="#5a4028" stroke-width="2.4"/>
                 <rect x="3" y="-8" width="8" height="8" rx="2" fill="${r}"/>`);case"script":return s(`<g transform="rotate(-9)">
                   <rect x="-15" y="-26" width="32" height="44" rx="2" fill="#f7f2e4" stroke="#cbbfa3" stroke-width="2"/>
                   ${[0,1,2,3,4].map(a=>`<path d="M-9 ${-18+a*8} h${a%2?14:20}" stroke="#a89c82" stroke-width="2"/>`).join("")}
                   <path d="M-15 -26 l32 0" stroke="${r}" stroke-width="3"/>
                 </g>`);case"mug":return s(`<path d="M-13 -14 h26 v24 a13 13 0 0 1 -26 0 z" fill="#e8ddc8" stroke="#b8a888" stroke-width="2"/>
                 <path d="M13 -6 a9 9 0 0 1 0 16" stroke="#b8a888" stroke-width="3.5" fill="none"/>
                 <ellipse cx="0" cy="-14" rx="13" ry="4.5" fill="${q(r,.1)}"/>
                 <path d="M-5 -24 q4 -6 0 -11 M5 -24 q4 -6 0 -11" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.4"/>`);case"hwatu":return s(`<g transform="rotate(-8)">
                   <rect x="-14" y="-22" width="28" height="40" rx="3" fill="#2a2119" stroke="#6b5a3e" stroke-width="2"/>
                   <rect x="-9" y="-16" width="18" height="28" rx="2" fill="#7a2a22"/>
                   <circle cx="0" cy="-2" r="6" fill="#d8b24a"/>
                   <path d="M-14 6 h28" stroke="#6b5a3e" stroke-width="2"/>
                 </g>`);default:return""}}function L1(e){const{tenant:n,expression:t,outfit:r}=e,i=e.width??240,l=e.height??360,o=n.look,s=g1[t],a=m1[o.face],u=a.rx,f=y1[o.build]??65,h=o.skin,p=q(h,-.16),y=o.outfits[r],k=o.wear[r],b=Hs(),R=`M${d-u} ${S-14}
    C${d-u} ${I+2} ${d-u*.6} ${I-2} ${d} ${I-2}
    C${d+u*.6} ${I-2} ${d+u} ${I+2} ${d+u} ${S-14}
    C${d+u} ${S+a.jaw} ${d+a.cheek} ${_t-7} ${d} ${_t}
    C${d-a.cheek} ${_t-7} ${d-u} ${S+a.jaw} ${d-u} ${S-14} Z`,m=s.blush>0?`<ellipse cx="${d-27}" cy="${S+16}" rx="12" ry="6.5" fill="#ff8496" opacity="${(s.blush*.5).toFixed(2)}"/>
         <ellipse cx="${d+27}" cy="${S+16}" rx="12" ry="6.5" fill="#ff8496" opacity="${(s.blush*.5).toFixed(2)}"/>`:"",g=s.sweat?`<path d="M${d+u-6} ${I+16} q8 12 0 17 q-8 -5 0 -17z" fill="#8ecbff" opacity="0.92"/>`:"",$=s.tear?`<path d="M${d-st-6} ${S+6} q-3 14 1 22" stroke="#8ecbff" stroke-width="3.2" fill="none" stroke-linecap="round"/>
       <circle cx="${d-st-5}" cy="${S+30}" r="3.2" fill="#8ecbff" opacity="0.9"/>`:"";return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 360" width="${i}" height="${l}" role="img" aria-label="${n.name} ${Hh[t]}">
  <defs>
    <radialGradient id="${b}s" cx="0.4" cy="0.32" r="0.75">
      <stop offset="0" stop-color="${q(h,.1)}"/>
      <stop offset="1" stop-color="${p}"/>
    </radialGradient>
    <linearGradient id="${b}c" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${q(y,.12)}"/>
      <stop offset="1" stop-color="${q(y,-.18)}"/>
    </linearGradient>
  </defs>

  ${k1(o,f)}

  <g>
    ${N1(f,q(y,-.2),h)}
    <path d="${C1(f)}" fill="url(#${b}c)"/>
    <path d="M${d-13} ${_t-12} h26 v30 h-26z" fill="${h}"/>
    <path d="M${d-13} ${_t-12} h26 v13 q-13 8 -26 0z" fill="${p}" opacity="0.55"/>
    ${E1(k,y,o.accent,h,f)}
  </g>

  <g transform="rotate(${s.tilt} ${d} ${_t})">
    <clipPath id="${b}f"><path d="${R}"/></clipPath>
    <path d="${R}" fill="url(#${b}s)"/>
    <ellipse cx="${d-u+1}" cy="${S+2}" rx="5" ry="8" fill="${q(h,-.06)}"/>
    <ellipse cx="${d+u-1}" cy="${S+2}" rx="5" ry="8" fill="${q(h,-.06)}"/>
    <g clip-path="url(#${b}f)">
      <ellipse cx="${d}" cy="${S-34}" rx="${u+6}" ry="20" fill="${p}" opacity="0.3"/>
      <ellipse cx="${d}" cy="${_t+16}" rx="${a.cheek+6}" ry="12" fill="${p}" opacity="0.22"/>
    </g>
    ${_1(o,u)}
    ${b1(o,u)}
    ${S1(o.bangs,o,u)}
    ${v1(s,q(o.hair,-.25))}
    ${w1(s,o.eyes,p1(o))}
    <path d="M${d-3} ${S+19} q3.5 3.5 7 0" stroke="${q(h,-.32)}" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.75"/>
    ${m}
    ${x1(s)}
    ${j1(o.accessory,o,u)}
    ${g}
    ${$}
  </g>

  ${M1(o.propArt,o,f)}
</svg>`}function Zs(e){return`data:image/svg+xml;utf8,${encodeURIComponent(L1(e))}`}const I1={maru:"하숙집 마루",kitchen:"부엌",hallway:"복도 / 방 앞",rooftop:"옥상",yard:"마당 / 대문",cvs:"동네 편의점 앞",campus:"캠퍼스 벤치",street:"골목길",room:"내 방",annex:"별채",festival:"가을 축제",station:"지하철역 앞",beach:"집 앞 바닷가"},z1={morning:{sky:["#cfe6f7","#fbe6d0"],ground:"#cbb89a",wall:"#efe3d0",wood:"#c9a16b",light:"#fff3d6",haze:.12},evening:{sky:["#f7c08a","#e0798a"],ground:"#9c8467",wall:"#e2cbb2",wood:"#b58553",light:"#ffd9a0",haze:.18},night:{sky:["#1b2440","#2f3a5c"],ground:"#3b3428",wall:"#4a4237",wood:"#6b4f33",light:"#ffd98a",haze:.34}},H=720,se=1280;function D1(e){return`
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${e.sky[0]}"/>
      <stop offset="100%" stop-color="${e.sky[1]}"/>
    </linearGradient>
    <radialGradient id="lamp" cx="50%" cy="20%" r="60%">
      <stop offset="0%" stop-color="${e.light}" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="${e.light}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${H}" height="${se}" fill="url(#sky)"/>`}function Qs(e){if(e!=="night")return"";let n="";for(let t=0;t<40;t++){const r=t*137%H+7,i=t*61%380+20,l=t%3*.6+.8;n+=`<circle cx="${r}" cy="${i}" r="${l}" fill="#fff" opacity="${.3+t%5*.12}"/>`}return n}function G(e,n){const t=/^#?([0-9a-f]{6})$/i.exec(e);if(!t)return e;const r=parseInt(t[1],16),i=n>0?255:0,l=Math.abs(n);return`#${[r>>16&255,r>>8&255,r&255].map(s=>Math.round(s+(i-s)*l)).map(s=>s.toString(16).padStart(2,"0")).join("")}`}function Or(e,n,t){const r=f=>{const h=/^#?([0-9a-f]{6})$/i.exec(f),p=h?parseInt(h[1],16):0;return[p>>16&255,p>>8&255,p&255]},[i,l,o]=r(e),[s,a,u]=r(n);return`#${[i+(s-i)*t,l+(a-l)*t,o+(u-o)*t].map(f=>Math.max(0,Math.min(255,Math.round(f))).toString(16).padStart(2,"0")).join("")}`}const Zh={morning:{zenith:"#5d9fd6",horizonSky:"#dbeaf4",sun:"#fff6de",sunGlow:.5,seaFar:"#4b86b4",seaNear:"#2f6c99",grassTop:"#9cb85e",grassBottom:"#5d7c33",sand:"#ddcaa8",wallLight:"#f2f0ec",wallDark:"#3f434b",deck:"#9c7550",glassA:"#cfe0ec",glassB:"#48606f",shadow:.28,haze:"#cfe0ef",hazeAmt:.1},evening:{zenith:"#6b5a8e",horizonSky:"#ffb877",sun:"#ffd9a0",sunGlow:.85,seaFar:"#6b7fa0",seaNear:"#2f4059",grassTop:"#a08f4e",grassBottom:"#4e5530",sand:"#c9a97f",wallLight:"#efdcc6",wallDark:"#3b3740",deck:"#8a5f3c",glassA:"#f0c79a",glassB:"#4a3f48",shadow:.4,haze:"#f0b988",hazeAmt:.16},night:{zenith:"#0b1224",horizonSky:"#20304c",sun:"#dce7ff",sunGlow:.35,seaFar:"#14213a",seaNear:"#0a1122",grassTop:"#2b3a2c",grassBottom:"#131d18",sand:"#3a3a3c",wallLight:"#9aa2b0",wallDark:"#1b1e25",deck:"#4a3826",glassA:"#39506b",glassB:"#141b28",shadow:.5,haze:"#0e1526",hazeAmt:.2}};function A1(e){return`
  <defs>
    <linearGradient id="vsky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${e.zenith}"/>
      <stop offset="62%" stop-color="${Or(e.zenith,e.horizonSky,.55)}"/>
      <stop offset="100%" stop-color="${e.horizonSky}"/>
    </linearGradient>
    <linearGradient id="vsea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${Or(e.seaFar,e.horizonSky,.35)}"/>
      <stop offset="18%" stop-color="${e.seaFar}"/>
      <stop offset="100%" stop-color="${e.seaNear}"/>
    </linearGradient>
    <linearGradient id="vgrass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${Or(e.grassTop,e.horizonSky,.28)}"/>
      <stop offset="22%" stop-color="${e.grassTop}"/>
      <stop offset="100%" stop-color="${e.grassBottom}"/>
    </linearGradient>
    <linearGradient id="vsand" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${Or(e.sand,e.horizonSky,.25)}"/>
      <stop offset="100%" stop-color="${G(e.sand,-.28)}"/>
    </linearGradient>
    <linearGradient id="vwall" x1="0" y1="0" x2="1" y2="0.3">
      <stop offset="0%" stop-color="${G(e.wallLight,.06)}"/>
      <stop offset="70%" stop-color="${e.wallLight}"/>
      <stop offset="100%" stop-color="${G(e.wallLight,-.16)}"/>
    </linearGradient>
    <linearGradient id="vwalld" x1="0" y1="0" x2="1" y2="0.3">
      <stop offset="0%" stop-color="${G(e.wallDark,.14)}"/>
      <stop offset="100%" stop-color="${G(e.wallDark,-.25)}"/>
    </linearGradient>
    <linearGradient id="vglass" x1="0.1" y1="0" x2="0.9" y2="1">
      <stop offset="0%" stop-color="${e.glassA}"/>
      <stop offset="45%" stop-color="${Or(e.glassA,e.glassB,.7)}"/>
      <stop offset="100%" stop-color="${e.glassB}"/>
    </linearGradient>
    <linearGradient id="vlit" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fff0cc"/>
      <stop offset="55%" stop-color="#ffd489"/>
      <stop offset="100%" stop-color="#d99a45"/>
    </linearGradient>
    <linearGradient id="vdeck" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${G(e.deck,.18)}"/>
      <stop offset="100%" stop-color="${G(e.deck,-.25)}"/>
    </linearGradient>
    <radialGradient id="vsun" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${e.sun}" stop-opacity="0.95"/>
      <stop offset="40%" stop-color="${e.sun}" stop-opacity="0.32"/>
      <stop offset="100%" stop-color="${e.sun}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vwarm" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffd18a" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#ffd18a" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vvig" cx="50%" cy="46%" r="72%">
      <stop offset="58%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="${(e.hazeAmt+.24).toFixed(2)}"/>
    </radialGradient>
    <filter id="vblur"><feGaussianBlur stdDeviation="14"/></filter>
    <filter id="vblur2"><feGaussianBlur stdDeviation="34"/></filter>
    <filter id="vsoft"><feGaussianBlur stdDeviation="5"/></filter>
    <filter id="vgrain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
    <filter id="vblade" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="turbulence" baseFrequency="0.014 0.16" numOctaves="2" seed="5" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
    <filter id="vstucco" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="2" seed="11" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>`}function Qh(e,n){return e==="evening"?{x:104,y:n-52}:{x:545,y:205}}function pr(e,n,t){const{x:r,y:i}=Qh(n,t),l=n==="night"?34:46;let o=`<rect width="${H}" height="${t+4}" fill="url(#vsky)"/>`;n==="night"&&(o+=Qs(n)),o+=`
    <circle cx="${r}" cy="${i}" r="${l*5}" fill="url(#vsun)" opacity="${e.sunGlow}"/>
    <circle cx="${r}" cy="${i}" r="${l}" fill="${e.sun}" opacity="${n==="night"?.92:.82}"/>`,n==="night"&&(o+=`<circle cx="${r-11}" cy="${i-7}" r="7" fill="#b9c6de" opacity="0.4"/>
            <circle cx="${r+9}" cy="${i+10}" r="5" fill="#b9c6de" opacity="0.3"/>`);const s=n==="night"?"#2b3852":n==="evening"?"#ffd9b0":"#ffffff",a=(u,f,h,p,y)=>`<ellipse cx="${u}" cy="${f}" rx="${h}" ry="${p}" fill="${s}" opacity="${y}" filter="url(#vblur)"/>`;return o+=a(180,150,150,34,.5)+a(300,178,120,26,.32)+a(590,118,130,30,.4)+a(90,252,110,22,.28)+a(430,t-108,215,24,n==="evening"?.5:.26),o}function gr(e,n,t,r){const i=r-t,l=n==="night"?"#cfe0ff":n==="evening"?"#ffd9a8":"#ffffff",{x:o}=Qh(n,t);let s=`<rect x="0" y="${t}" width="${H}" height="${i}" fill="url(#vsea)"/>
             <rect x="0" y="${t-2}" width="${H}" height="5" fill="${e.sun}" opacity="0.5" filter="url(#vsoft)"/>`;s+='<g filter="url(#vsoft)">';for(let a=0;a<22;a+=1){const u=a/21,f=t+8+u*(i-10),h=16+u*u*150,p=o-h/2+Math.sin(a*2.7)*(8+u*40);s+=`<rect x="${p.toFixed(0)}" y="${f.toFixed(0)}" width="${h.toFixed(0)}" height="${(2+u*4).toFixed(0)}" rx="2" fill="${l}" opacity="${(.34-u*.2).toFixed(2)}"/>`}s+='</g><g filter="url(#vsoft)">';for(let a=0;a<18;a+=1){const u=a/17,f=t+14+u*(i-16),h=a*191%(H-160)+30,p=40+a%5*46+u*60;s+=`<rect x="${h}" y="${f.toFixed(0)}" width="${p.toFixed(0)}" height="${(1.5+u*2.5).toFixed(1)}" rx="1" fill="${l}" opacity="${(.05+a%3*.035).toFixed(2)}"/>`}return s+"</g>"}function Pu(e,n){let t="";for(let r=0;r<90;r+=1){const i=r*83%H,l=se-10-r*37%150,o=26+r*13%40,s=(r%5-2)*7;t+=`<path d="M${i} ${l} q${s/2} ${-o/2} ${s} ${-o}" stroke="${G(e.grassBottom,r%3===0?.3:-.2)}" stroke-width="3" fill="none" stroke-linecap="round"/>`}return`
    <path d="M0 ${n+42} C180 ${n-28} 520 ${n-12} ${H} ${n+48} L${H} ${se} L0 ${se} Z" fill="url(#vgrass)"/>
    <ellipse cx="170" cy="${n+150}" rx="280" ry="90" fill="${G(e.grassBottom,-.35)}" opacity="0.4" filter="url(#vblur2)"/>
    <ellipse cx="610" cy="${n+230}" rx="260" ry="100" fill="${G(e.grassBottom,-.3)}" opacity="0.35" filter="url(#vblur2)"/>
    <ellipse cx="380" cy="${n+96}" rx="320" ry="60" fill="${G(e.grassTop,.25)}" opacity="0.28" filter="url(#vblur2)"/>
    <rect x="0" y="${n-40}" width="${H}" height="${se-n+40}" filter="url(#vblade)" opacity="0.28"
          style="mix-blend-mode:overlay"/>
    <g opacity="0.72" filter="url(#vsoft)">${t}</g>`}function T1(e){let n=`<path d="M0 ${e} C200 ${e-18} 520 ${e+14} ${H} ${e-8} L${H} ${se} L0 ${se} Z" fill="url(#vsand)"/>`;return n+=`<path d="M0 ${e+6} C200 ${e-12} 520 ${e+20} ${H} ${e-2} L${H} ${e+46} C520 ${e+64} 200 ${e+32} 0 ${e+50} Z" fill="#ffffff" opacity="0.38" filter="url(#vsoft)"/>`,n+=`<path d="M0 ${e+74} C200 ${e+56} 520 ${e+88} ${H} ${e+66}" stroke="#ffffff"
                stroke-width="4" fill="none" opacity="0.2"/>`,n+=`<rect x="0" y="${e-20}" width="${H}" height="${se-e+20}" filter="url(#vgrain)" opacity="0.1"
                style="mix-blend-mode:overlay"/>`,n}function Kr(e,n,t,r,i,l=2){const o=i==="night",s=o?"#0d0f13":"#2f333a";let a=`<rect x="${e}" y="${n}" width="${t}" height="${r}" fill="${o?"url(#vlit)":"url(#vglass)"}"/>`;o?a+=`<rect x="${e}" y="${(n+r*.62).toFixed(0)}" width="${t}" height="${(r*.38).toFixed(0)}" fill="#ffe6b0" opacity="0.3"/>
            <rect x="${(e+t*.14).toFixed(0)}" y="${(n+r*.56).toFixed(0)}" width="${(t*.28).toFixed(0)}" height="${(r*.44).toFixed(0)}" fill="#8a5f2c" opacity="0.28"/>`:a+=`<path d="M${e} ${n+r} L${(e+t*.62).toFixed(0)} ${n} L${e+t} ${n} L${(e+t*.38).toFixed(0)} ${n+r} Z" fill="#ffffff" opacity="0.15"/>`;for(let u=1;u<l;u+=1)a+=`<rect x="${(e+t/l*u-2).toFixed(0)}" y="${n}" width="4" height="${r}" fill="${s}" opacity="0.9"/>`;return a+=`<rect x="${e}" y="${n}" width="${t}" height="${r}" fill="none" stroke="${s}" stroke-width="5"/>`,a}function oc(e,n,t,r){let i=`<rect x="${e}" y="${n}" width="${t}" height="${r}" fill="url(#vdeck)"/>`;for(let l=1;l<26;l+=1){const o=e+t/26*l;i+=`<path d="M${o.toFixed(0)} ${n} L${(o+(o-H/2)*.1).toFixed(0)} ${n+r}" stroke="#00000055" stroke-width="2"/>`}return i+`<rect x="${e}" y="${n}" width="${t}" height="4" fill="#ffffff" opacity="0.12"/>`}function Bu(e,n){const t=n==="night",r=t?"#0b0d11":"#23262c",i=t?"#15181e":"#33373e",l=(o,s,a,u,f)=>`<rect x="${o}" y="${s}" width="${a}" height="5" fill="${i}"/>`+[...Array(u).keys()].map(h=>`<rect x="${o+4+h*((a-8)/(u-1))}" y="${s}" width="3" height="${f}" fill="${i}" opacity="0.85"/>`).join("")+`<rect x="${o}" y="${s+f-4}" width="${a}" height="4" fill="${i}"/>`;return`
  <ellipse cx="400" cy="808" rx="330" ry="40" fill="#000000" opacity="${e.shadow}" filter="url(#vblur)"/>

  <!-- 오른쪽 짙은 동 -->
  <path d="M400 556 L520 430 L642 556 L642 800 L400 800 Z" fill="url(#vwalld)"/>
  <path d="M392 562 L520 424 L650 562 L642 574 L520 446 L400 574 Z" fill="${r}"/>
  <path d="M400 574 L520 446 L642 574 L642 596 L520 470 L400 596 Z" fill="#000000" opacity="0.3"/>
  <rect x="400" y="756" width="242" height="44" fill="#000000" opacity="0.26"/>
  <rect x="470" y="470" width="100" height="60" fill="${t?"url(#vlit)":"url(#vglass)"}" stroke="${r}" stroke-width="5"/>
  ${Kr(430,594,182,202,n,3)}

  <!-- 굴뚝 -->
  <rect x="592" y="386" width="34" height="78" fill="${G(e.wallLight,-.08)}"/>
  <rect x="587" y="380" width="44" height="12" rx="3" fill="${r}"/>

  <!-- 왼쪽 흰 동. 살짝 왼쪽에서 본 각도라 측면과 지붕 뒷면이 보인다 -->
  <path d="M302 346 L250 378 L124 524 L176 486 Z" fill="${G(r,.14)}"/>
  <path d="M124 524 L176 486 L176 800 L124 816 Z" fill="${G(e.wallLight,-.46)}"/>
  <path d="M124 524 L176 486 L176 512 L124 550 Z" fill="#000000" opacity="0.3"/>
  <path d="M176 486 L302 352 L428 486 L428 800 L176 800 Z" fill="url(#vwall)"/>
  <rect x="176" y="486" width="252" height="314" filter="url(#vstucco)" opacity="0.13" style="mix-blend-mode:overlay"/>
  <path d="M168 492 L302 346 L436 492 L428 504 L302 368 L176 504 Z" fill="${r}"/>
  <path d="M176 504 L302 368 L428 504 L428 528 L302 394 L176 528 Z" fill="#000000" opacity="0.28"/>
  <rect x="176" y="756" width="252" height="44" fill="#000000" opacity="0.22"/>
  <rect x="277" y="402" width="50" height="46" fill="${t?"url(#vlit)":"url(#vglass)"}" stroke="${r}" stroke-width="4"/>
  ${Kr(200,522,86,76,n,2)}
  ${Kr(318,522,86,76,n,2)}
  ${l(190,600,224,8,38)}
  ${Kr(196,654,208,146,n,3)}
  <rect x="352" y="692" width="56" height="108" fill="${G(e.wallDark,t?.12:0)}" stroke="${r}" stroke-width="4"/>
  <circle cx="362" cy="748" r="4" fill="${t?"#ffd89a":"#c8b48a"}"/>

  <!-- 오른쪽 외부 철제 계단 -->
  <path d="M642 800 L706 800 L706 610 L642 610 Z" fill="${i}" opacity="0.45"/>
  ${[...Array(9).keys()].map(o=>`<rect x="644" y="${618+o*20}" width="60" height="6" fill="${i}"/>`).join("")}
  <path d="M646 806 L702 606 M702 806 L702 602" stroke="${i}" stroke-width="6" fill="none"/>

  <!-- 데크 + 난간 + 데크 밑 옹벽 -->
  ${oc(96,800,528,58)}
  <rect x="96" y="856" width="528" height="78" fill="${G(e.deck,-.44)}"/>
  ${[...Array(22).keys()].map(o=>`<rect x="${98+o*24}" y="856" width="2" height="78" fill="#00000044"/>`).join("")}
  ${l(96,760,528,18,42)}

  ${t?`<ellipse cx="300" cy="702" rx="255" ry="148" fill="url(#vwarm)"/>
         <ellipse cx="520" cy="690" rx="200" ry="130" fill="url(#vwarm)"/>
         <ellipse cx="360" cy="832" rx="300" ry="58" fill="#ffca7a" opacity="0.13" filter="url(#vblur)"/>`:""}`}function mt(e,n){return`
    <rect x="0" y="${n-120}" width="${H}" height="240" fill="${e.haze}" opacity="${e.hazeAmt}"
          filter="url(#vblur2)"/>
    <rect width="${H}" height="${se}" filter="url(#vgrain)" opacity="0.055" style="mix-blend-mode:overlay"/>
    <rect width="${H}" height="${se}" fill="url(#vvig)"/>`}const P1=new Set(["yard","beach","maru","annex","kitchen","hallway","room","rooftop"]),B1=["vsky","vsea","vgrass","vsand","vwall","vwalld","vglass","vlit","vdeck","vsun","vwarm","vvig","vblur","vblur2","vsoft","vgrain","vblade","vstucco","vwin","vfloor"];let Qo=0;function R1(e){Qo=(Qo+1)%1e6;const n=Qo.toString(36);let t=e;for(const r of B1)t=t.split(`id="${r}"`).join(`id="${r}${n}"`),t=t.split(`url(#${r})`).join(`url(#${r}${n})`);return t}const Ol={top:214,bottom:700,left:112,right:608};function so(e,n){return n?e==="night"?{wall:"#6a6448",wallLit:"#8a8058",ceil:"#4e4a38",floor:"#8e8a80",floorDark:"#5d5a52",trim:"#8a6a3c",glow:.9}:e==="evening"?{wall:"#c4b483",wallLit:"#e0cd96",ceil:"#b0a279",floor:"#ded6c6",floorDark:"#a89f8d",trim:"#a9793f",glow:.5}:{wall:"#cfc49a",wallLit:"#e6dcb4",ceil:"#ded6bb",floor:"#ece7db",floorDark:"#c2bcae",trim:"#b08b52",glow:.18}:e==="night"?{wall:"#4b4b50",wallLit:"#6a6a70",ceil:"#3a3a3f",floor:"#6b4f30",floorDark:"#44311d",trim:"#2a2a2e",glow:.9}:e==="evening"?{wall:"#e0d5c6",wallLit:"#f2e2cc",ceil:"#cfc5b8",floor:"#c08f55",floorDark:"#8d6437",trim:"#5a5550",glow:.45}:{wall:"#ece7df",wallLit:"#faf7f2",ceil:"#f2eee8",floor:"#c99a63",floorDark:"#9a7345",trim:"#6b6660",glow:.14}}function ao(e,n){const{top:t,bottom:r,left:i,right:l}=Ol;let o=`
    <rect width="${H}" height="${se}" fill="${e.wall}"/>
    <!-- 천장 -->
    <path d="M0 0 L${H} 0 L${l} ${t} L${i} ${t} Z" fill="${e.ceil}"/>
    <!-- 옆벽 -->
    <path d="M0 0 L${i} ${t} L${i} ${r} L0 ${se} Z" fill="${G(e.wall,-.16)}"/>
    <path d="M${H} 0 L${l} ${t} L${l} ${r} L${H} ${se} Z" fill="${G(e.wall,-.24)}"/>
    <!-- 뒷벽 -->
    <rect x="${i}" y="${t}" width="${l-i}" height="${r-t}" fill="${e.wall}"/>
    <rect x="${i}" y="${t}" width="${l-i}" height="${r-t}" filter="url(#vstucco)"
          opacity="0.13" style="mix-blend-mode:overlay"/>
    <!-- 바닥 -->
    <path d="M${i} ${r} L${l} ${r} L${H+200} ${se} L-200 ${se} Z" fill="${e.floor}"/>`;if(n==="oak"){for(let s=0;s<=14;s+=1){const a=i+(l-i)/14*s,u=-200+(H+400)/14*s;o+=`<path d="M${a.toFixed(0)} ${r} L${u.toFixed(0)} ${se}" stroke="${e.floorDark}" stroke-width="2" opacity="0.5"/>`}for(let s=1;s<=5;s+=1){const a=r+s*s*22;a<se&&(o+=`<path d="M0 ${a.toFixed(0)} h${H}" stroke="${e.floorDark}" stroke-width="1.5" opacity="0.22"/>`)}}else{for(let s=0;s<=10;s+=1){const a=i+(l-i)/10*s,u=-200+(H+400)/10*s;o+=`<path d="M${a.toFixed(0)} ${r} L${u.toFixed(0)} ${se}" stroke="${e.floorDark}" stroke-width="2" opacity="0.35"/>`}for(let s=1;s<=6;s+=1){const a=r+s*s*17;a<se&&(o+=`<path d="M0 ${a.toFixed(0)} h${H}" stroke="${e.floorDark}" stroke-width="2" opacity="0.3"/>`)}}return o+=`<rect x="0" y="${r}" width="${H}" height="${se-r}" fill="${e.floorDark}" opacity="0.2"
                filter="url(#vblur2)"/>`,o+=`<path d="M${i} ${r-10} h${l-i} v10 h-${l-i} Z" fill="${G(e.wall,-.3)}" opacity="0.6"/>`,o}function F1(e,n){const t=n==="night"||n==="evening",r=t?"#fff0d0":"#ffffff";let i="";for(const l of[70,128])i+=`<rect x="${140+(l-70)*.5}" y="${l}" width="${440-(l-70)}" height="5" rx="2" fill="${r}"
                  opacity="${t?.95:.5}"/>`,t&&(i+=`<rect x="${130+(l-70)*.5}" y="${l-10}" width="${460-(l-70)}" height="26" rx="10" fill="${r}"
                          opacity="0.2" filter="url(#vsoft)"/>`);i+=`<rect x="96" y="176" width="300" height="4" fill="${e.trim}" opacity="0.8"/>`;for(const l of[140,220,300])i+=`<rect x="${l}" y="172" width="14" height="22" rx="4" fill="${e.trim}"/>`,t&&(i+=`<path d="M${l+7} 194 L${l-50} ${Ol.bottom} L${l+64} ${Ol.bottom} Z" fill="${r}" opacity="0.13" filter="url(#vsoft)"/>`);return i}function Wh(e,n,t,r){const i=r==="night"||r==="evening";return`
    <rect x="${e-2}" y="0" width="4" height="${n-t}" fill="#3a3129"/>
    <path d="M${e-t} ${n} a${t} ${t*.92} 0 0 1 ${t*2} 0 Z" fill="${i?"#e8bd72":"#c9a877"}"/>
    ${[-.6,-.2,.2,.6].map(l=>`<path d="M${e+t*l} ${n} q${-t*l*.3} ${-t*.75} 0 ${-t*.92}" stroke="#00000033" stroke-width="2" fill="none"/>`).join("")}
    <ellipse cx="${e}" cy="${n}" rx="${t}" ry="4" fill="${i?"#fff0c8":"#d8cdb8"}"/>
    ${i?`<ellipse cx="${e}" cy="${n+90}" rx="${t*2.4}" ry="${t*1.9}" fill="url(#vwarm)"/>`:""}`}function qh(e,n,t,r,i){return`<path d="M${360-n} ${e} L${360+n} ${e} L${360+t} ${e+r} L${360-t} ${e+r} Z" fill="${i}"/>`}function O1(e,n,t,r){const i=r==="night"?"#4e4c49":r==="evening"?"#9c968c":"#a9a49c",l=G(i,.14);return`
    <ellipse cx="${e+t/2}" cy="${n+96}" rx="${t*.6}" ry="22" fill="#000" opacity="0.28" filter="url(#vsoft)"/>
    <rect x="${e}" y="${n}" width="${t}" height="56" rx="14" fill="${G(i,-.2)}"/>
    <rect x="${e+8}" y="${n+46}" width="${t-16}" height="48" rx="12" fill="${l}"/>
    <rect x="${e+8}" y="${n+46}" width="${t-16}" height="8" rx="4" fill="#ffffff" opacity="0.12"/>
    <rect x="${e-12}" y="${n+16}" width="30" height="80" rx="12" fill="${i}"/>
    <rect x="${e+t-18}" y="${n+16}" width="30" height="80" rx="12" fill="${G(i,-.3)}"/>
    ${[.2,.46,.72].map(o=>`<rect x="${(e+t*o).toFixed(0)}" y="${n+4}" width="44" height="42" rx="12" fill="${G(i,.16)}" transform="rotate(-6 ${(e+t*o+22).toFixed(0)} ${n+25})"/>`).join("")}`}function G1(e,n,t){const r=t==="night"?"#6b4a28":"#a9763c",i=t==="night"?"#5a3e22":"#8a5c2e",l=(o,s,a)=>`
    <g transform="translate(${o} ${s}) scale(${a})">
      <ellipse cx="0" cy="8" rx="44" ry="14" fill="#000" opacity="0.25" filter="url(#vsoft)"/>
      <path d="M-40 -6 q40 -22 80 0 q-40 16 -80 0z" fill="${i}"/>
      <path d="M-34 -8 q34 -60 68 0 q-34 -30 -68 0z" fill="${G(i,-.18)}"/>
      <path d="M-30 4 l-8 44 M30 4 l8 44 M-14 8 l-4 44 M14 8 l4 44" stroke="${G(i,-.25)}" stroke-width="7" stroke-linecap="round"/>
    </g>`;return`
    ${l(e-96,n-46,.82)}${l(e+4,n-46,.82)}${l(e+104,n-46,.82)}
    <ellipse cx="${e}" cy="${n+96}" rx="235" ry="34" fill="#000" opacity="0.3" filter="url(#vblur)"/>
    <path d="M${e-232} ${n+4} q232 -22 464 0 l-6 28 q-226 20 -452 0z" fill="${r}"/>
    <path d="M${e-232} ${n+4} q232 -22 464 0 l-4 10 q-228 -16 -456 0z" fill="${G(r,.2)}"/>
    <rect x="${e-176}" y="${n+30}" width="20" height="74" rx="6" fill="${G(r,-.25)}"/>
    <rect x="${e+156}" y="${n+30}" width="20" height="74" rx="6" fill="${G(r,-.25)}"/>
    ${l(e-120,n+132,1.06)}${l(e+120,n+132,1.06)}`}function U1(e,n,t,r,i,l){const o=t/2,s=`M${e-o} ${n} L${e-o} ${n-r+o} A${o} ${o} 0 0 1 ${e+o} ${n-r+o} L${e+o} ${n} Z`;return`
    <path d="${s}" fill="${l}"/>
    <path d="${s}" fill="none" stroke="${G(i.wall,-.2)}" stroke-width="14"/>
    <path d="M${e-o+10} ${n} L${e-o+10} ${n-r+o} A${o-10} ${o-10} 0 0 1 ${e+o-10} ${n-r+o}" fill="none" stroke="#000000" stroke-width="16" opacity="0.18"/>`}function Gr(e,n,t,r,i,l){let o=`<rect x="${e}" y="${n}" width="${t}" height="${r}" rx="4" fill="${i}"/>`;for(let s=1;s<l;s+=1)o+=`<rect x="${(e+t/l*s-1.5).toFixed(0)}" y="${n+4}" width="3" height="${r-8}" fill="#00000030"/>`;for(let s=0;s<l;s+=1)o+=`<rect x="${(e+t/l*(s+.5)-16).toFixed(0)}" y="${n+r-16}" width="32" height="4" rx="2" fill="#00000044"/>`;return o+`<rect x="${e}" y="${n}" width="${t}" height="5" fill="#ffffff" opacity="0.14"/>`}function V1(e,n){const t=so(n,!1),r=n==="night"||n==="evening",i=392,l={x:130,y:248,w:460,h:442};return`
    <defs><clipPath id="vwin"><rect x="${l.x}" y="${l.y}" width="${l.w}" height="${l.h}"/></clipPath></defs>
    ${ao(t,"oak")}
    <!-- 뒷벽을 통째로 뚫은 슬라이딩 통유리 -->
    <g clip-path="url(#vwin)">
      ${pr(e,n,i)}
      ${gr(e,n,i,640)}
      <rect x="${l.x}" y="612" width="${l.w}" height="${l.y+l.h-612}" fill="${G(e.deck,-.1)}"/>
      <rect x="${l.x}" y="600" width="${l.w}" height="6" fill="${t.trim}" opacity="0.8"/>
      ${[...Array(9).keys()].map(o=>`<rect x="${l.x+18+o*52}" y="600" width="4" height="30" fill="${t.trim}" opacity="0.7"/>`).join("")}
    </g>
    <path d="M${l.x} ${l.y+l.h} L${l.x+250} ${l.y} L${l.x+360} ${l.y} L${l.x+110} ${l.y+l.h} Z" fill="#ffffff" opacity="0.08"/>
    ${[0,1,2,3].map(o=>`<rect x="${l.x+l.w/4*o-4}" y="${l.y}" width="9" height="${l.h}" fill="${t.trim}"/>`).join("")}
    <rect x="${l.x}" y="${l.y}" width="${l.w}" height="${l.h}" fill="none" stroke="${t.trim}" stroke-width="12"/>

    ${F1(t,n)}
    <!-- 벽등 -->
    <circle cx="656" cy="404" r="26" fill="none" stroke="${t.trim}" stroke-width="7"/>
    <circle cx="656" cy="404" r="11" fill="${r?"#ffe7b4":"#d9d3c8"}"/>
    ${r?'<ellipse cx="656" cy="404" rx="120" ry="150" fill="url(#vwarm)"/>':""}

    <!--
      가구 배치. 화면 아래 28% 는 대화창이 덮으므로 소파·의자는 중간 높이에 두고,
      방석은 대화창 위로 살짝 걸치게 놓는다.
    -->
    ${qh(742,270,430,470,n==="night"?"#857f72":"#efe9dd")}
    ${O1(0,684,330,n)}
    <!-- 오른쪽 라운지 체어와 오토만 -->
    <ellipse cx="596" cy="812" rx="86" ry="24" fill="#000" opacity="0.3" filter="url(#vsoft)"/>
    <path d="M534 800 q62 -16 124 0 l-8 22 q-54 14 -110 0z" fill="${n==="night"?"#8d8a7c":"#f4efe3"}"/>
    <path d="M540 800 q-12 -78 34 -96 q48 -14 64 8 q-46 16 -50 88z" fill="${n==="night"?"#a29e8e":"#fbf7ee"}"/>
    <ellipse cx="674" cy="838" rx="52" ry="16" fill="${n==="night"?"#6b5a3a":"#c8a06a"}"/>

    <ellipse cx="360" cy="1004" rx="112" ry="34" fill="#000" opacity="0.3" filter="url(#vsoft)"/>
    <ellipse cx="360" cy="982" rx="108" ry="32" fill="${n==="night"?"#6b4a28":"#9c6a38"}"/>
    <ellipse cx="360" cy="968" rx="108" ry="32" fill="${n==="night"?"#8a6136":"#c08a4c"}"/>
    <ellipse cx="342" cy="962" rx="36" ry="11" fill="#3f6bb5" opacity="0.85"/>

    <ellipse cx="180" cy="906" rx="108" ry="36" fill="#000" opacity="0.32" filter="url(#vsoft)"/>
    <ellipse cx="178" cy="898" rx="106" ry="34" fill="#8d3a33"/>
    <ellipse cx="178" cy="890" rx="106" ry="34" fill="#b5493f"/>
    <ellipse cx="540" cy="1070" rx="120" ry="40" fill="#000" opacity="0.32" filter="url(#vsoft)"/>
    <ellipse cx="538" cy="1062" rx="118" ry="38" fill="#31538c"/>
    <ellipse cx="538" cy="1054" rx="118" ry="38" fill="#3f6bb5"/>

    ${r?'<ellipse cx="360" cy="880" rx="360" ry="220" fill="url(#vwarm)" opacity="0.4"/>':""}
    ${mt(e,i)}`}function H1(e,n){const t=so(n,!0),r=n==="night"||n==="evening",i=n==="night"?"#6b4a28":"#a9763c",l=n==="night"?"#b6b0a2":"#f0ebe0";return`
    ${ao(t,"tile")}
    <!-- 상부장과 열린 선반 -->
    ${Gr(132,268,176,118,l,2)}
    ${Gr(316,268,100,118,i,1)}
    <rect x="440" y="296" width="150" height="7" rx="3" fill="${i}"/>
    <rect x="440" y="360" width="150" height="7" rx="3" fill="${i}"/>
    ${[458,492,526,558].map((o,s)=>`<rect x="${o}" y="${s%2?268:262}" width="20" height="${s%2?28:34}" rx="4" fill="${["#c9d6cc","#d8cbb4","#b9c4d2","#cdbfa6"][s]}"/>`).join("")}
    <path d="M572 316 q22 -34 44 -6 q-16 30 -44 6z" fill="#5d7c43"/>
    <path d="M596 316 q30 -22 40 10 q-26 16 -40 -10z" fill="#4e6b39"/>
    <!-- 창 -->
    <rect x="440" y="392" width="150" height="86" fill="${r?G(e.seaNear,.2):"#cfe0ec"}" stroke="${t.trim}" stroke-width="7"/>
    <rect x="512" y="392" width="6" height="86" fill="${t.trim}"/>
    <!-- 하부장 + 상판 -->
    <rect x="128" y="486" width="466" height="16" rx="4" fill="${G(l,.06)}"/>
    ${Gr(132,502,190,186,l,3)}
    ${Gr(330,502,126,186,i,2)}
    ${Gr(464,502,126,186,l,2)}
    <rect x="152" y="470" width="86" height="18" rx="4" fill="#2f3338"/>
    <!-- 가전 -->
    <rect x="476" y="416" width="104" height="62" rx="6" fill="#3a3d42"/>
    <rect x="486" y="426" width="62" height="42" rx="4" fill="${r?"#6b5a3a":"#7d8288"}"/>
    <rect x="344" y="432" width="42" height="46" rx="5" fill="#57534c"/>
    <circle cx="365" cy="452" r="10" fill="#8f9aa3"/>
    ${Wh(240,300,44,n)}
    ${G1(368,800,n)}
    ${r?'<ellipse cx="360" cy="700" rx="380" ry="300" fill="url(#vwarm)" opacity="0.65"/>':""}
    ${mt(e,300)}`}function Z1(e,n){const t=so(n,!0),r=n==="night"||n==="evening",i=G(t.wall,r?.22:-.1);return`
    ${ao(t,"tile")}
    <!-- 아치 너머 방 -->
    ${U1(360,Ol.bottom,216,330,t,i)}
    <rect x="286" y="560" width="148" height="140" fill="${G(i,-.12)}"/>
    <rect x="300" y="470" width="58" height="76" rx="4" fill="${r?"#8a7a4a":"#bcd2c4"}"/>
    <path d="M388 556 q22 -40 46 -8 q-18 34 -46 8z" fill="#4e6b39"/>
    <!-- 왼쪽 플라스터 벽난로 -->
    <rect x="104" y="386" width="152" height="24" rx="6" fill="${G(t.wall,.16)}"/>
    <rect x="116" y="410" width="128" height="290" fill="${G(t.wall,.1)}"/>
    <path d="M140 700 L140 530 A40 40 0 0 1 220 530 L220 700 Z" fill="${G(t.wall,-.55)}"/>
    ${[[158,636],[182,636],[206,636],[170,614],[194,614]].map(([l,o])=>`<ellipse cx="${l}" cy="${o}" rx="11" ry="11" fill="#7a5a34"/>`).join("")}
    <rect x="128" y="330" width="106" height="58" rx="4" fill="${G(t.wall,.24)}"/>
    <!-- 오른쪽 콘솔 -->
    <rect x="436" y="556" width="176" height="144" fill="${G(t.trim,-.1)}"/>
    <rect x="430" y="546" width="188" height="14" rx="4" fill="${G(t.trim,.18)}"/>
    <path d="M486 546 l-14 -62 h60 l-14 62z" fill="${r?"#ffe6b0":"#e6dfd0"}"/>
    <rect x="510" y="512" width="46" height="34" rx="4" fill="#8d3a33"/>
    ${Wh(196,264,52,n)}
    ${qh(880,200,300,380,n==="night"?"#6a6252":"#ece4d2")}
    ${r?'<ellipse cx="300" cy="640" rx="360" ry="300" fill="url(#vwarm)" opacity="0.6"/>':""}
    ${mt(e,300)}`}function Q1(e,n){const t=so(n,!0),r=n==="night"||n==="evening",i=380;return`
    <defs><clipPath id="vwin"><rect x="152" y="268" width="228" height="292"/></clipPath></defs>
    ${ao(t,"oak")}
    <g clip-path="url(#vwin)">
      ${pr(e,n,i)}
      ${gr(e,n,i,560)}
    </g>
    <rect x="152" y="268" width="228" height="292" fill="none" stroke="${t.trim}" stroke-width="12"/>
    <rect x="262" y="268" width="8" height="292" fill="${t.trim}"/>
    <rect x="152" y="410" width="228" height="7" fill="${t.trim}"/>
    <!-- 커튼 -->
    <path d="M132 250 q18 160 0 320 h44 q-16 -160 0 -320z" fill="${G(t.wall,.2)}"/>
    <path d="M400 250 q-18 160 0 320 h-44 q16 -160 0 -320z" fill="${G(t.wall,.2)}"/>
    <!-- 책상 -->
    <rect x="430" y="536" width="176" height="14" rx="4" fill="${t.trim}"/>
    <rect x="442" y="550" width="12" height="150" fill="${G(t.trim,-.2)}"/>
    <rect x="582" y="550" width="12" height="150" fill="${G(t.trim,-.2)}"/>
    <rect x="452" y="486" width="76" height="50" rx="4" fill="#2f3338"/>
    <path d="M556 536 l-10 -44 h40 l-10 44z" fill="${r?"#ffe6b0":"#e6dfd0"}"/>
    <!-- 침대 -->
    <ellipse cx="330" cy="1092" rx="330" ry="52" fill="#000" opacity="0.3" filter="url(#vblur)"/>
    <rect x="60" y="836" width="540" height="40" rx="10" fill="${G(t.trim,-.1)}"/>
    <rect x="40" y="876" width="580" height="180" rx="16" fill="${n==="night"?"#6d6a5e":"#efe9db"}"/>
    <rect x="40" y="876" width="580" height="46" rx="16" fill="${n==="night"?"#82806f":"#fbf7ee"}"/>
    <rect x="90" y="800" width="180" height="70" rx="16" fill="${n==="night"?"#8d8a79":"#fdfaf3"}"/>
    <rect x="300" y="806" width="160" height="64" rx="16" fill="${n==="night"?"#7f7c6c":"#f4efe3"}"/>
    ${r?'<ellipse cx="520" cy="560" rx="260" ry="220" fill="url(#vwarm)" opacity="0.7"/>':""}
    ${mt(e,i)}`}function W1(e,n){const t=n==="night"||n==="evening",r=430,i=n==="night"?"#15181e":"#33373e";return`
    ${pr(e,n,r)}
    ${gr(e,n,r,790)}
    <!-- 난간 -->
    <rect x="0" y="690" width="${H}" height="6" fill="${i}"/>
    ${[...Array(13).keys()].map(l=>`<rect x="${12+l*56}" y="690" width="5" height="96" fill="${i}" opacity="0.9"/>`).join("")}
    <rect x="0" y="780" width="${H}" height="6" fill="${i}"/>
    ${oc(0,786,H,120)}
    <path d="M0 906 L${H} 906 L${H} ${se} L0 ${se} Z" fill="${G(e.deck,-.12)}"/>
    ${[...Array(15).keys()].map(l=>`<path d="M${l*52} 906 L${(l*52-H/2)*1.5+H/2} ${se}" stroke="#00000055" stroke-width="3"/>`).join("")}
    <!-- 라운지 의자 둘과 낮은 테이블 -->
    <ellipse cx="180" cy="1076" rx="130" ry="34" fill="#000" opacity="0.3" filter="url(#vsoft)"/>
    <path d="M70 1060 q110 -26 220 0 l-10 34 q-100 22 -200 0z" fill="${n==="night"?"#6d6a5e":"#efe9db"}"/>
    <path d="M78 1060 q-16 -96 40 -120 q60 -18 84 10 q-60 22 -66 110z" fill="${n==="night"?"#82806f":"#fbf7ee"}"/>
    <ellipse cx="560" cy="1090" rx="120" ry="32" fill="#000" opacity="0.3" filter="url(#vsoft)"/>
    <path d="M456 1074 q104 -24 208 0 l-10 32 q-94 20 -188 0z" fill="${n==="night"?"#6d6a5e":"#efe9db"}"/>
    <path d="M464 1074 q-14 -92 38 -114 q58 -16 80 10 q-58 20 -62 104z" fill="${n==="night"?"#82806f":"#fbf7ee"}"/>
    <ellipse cx="370" cy="1016" rx="66" ry="20" fill="${n==="night"?"#6b4a28":"#9c6a38"}"/>
    <ellipse cx="370" cy="1004" rx="66" ry="20" fill="${n==="night"?"#8a6136":"#c08a4c"}"/>
    <!-- 스트링 라이트 -->
    <path d="M-10 604 q360 96 740 -20" stroke="${i}" stroke-width="3" fill="none" opacity="0.8"/>
    ${[...Array(10).keys()].map(l=>{const o=20+l*76,s=620+Math.sin(l/9*Math.PI)*44-l/9*30;return`<circle cx="${o}" cy="${s.toFixed(0)}" r="9" fill="${t?"#ffe7b4":"#ded7c6"}"/>${t?`<circle cx="${o}" cy="${s.toFixed(0)}" r="26" fill="#ffd18a" opacity="0.28" filter="url(#vsoft)"/>`:""}`}).join("")}
    ${mt(e,r)}`}function q1(e,n,t){switch(e){case"yard":return`
        ${pr(n,t,600)}
        ${gr(n,t,600,900)}
        ${Bu(n,t)}
        ${Pu(n,900)}
        <rect x="286" y="742" width="120" height="34" rx="4" fill="${G(n.deck,-.3)}"/>
        <text x="346" y="766" font-size="21" text-anchor="middle" fill="#f0e2c8" font-family="serif"
              letter-spacing="3">하숙</text>
        ${mt(n,600)}`;case"beach":{const i=G(n.grassBottom,t==="night"?-.1:.05);return`
        ${pr(n,t,470)}
        ${gr(n,t,470,812)}
        <!-- 왼쪽 방파제와 등대 -->
        <rect x="0" y="556" width="250" height="16" rx="5" fill="${G(n.wallDark,.16)}" opacity="0.9"/>
        <rect x="236" y="502" width="24" height="62" fill="${G(n.wallLight,-.06)}"/>
        <rect x="233" y="486" width="30" height="18" rx="4" fill="#b8402f"/>
        <circle cx="248" cy="495" r="6" fill="${n.sun}" opacity="${t==="night"?.95:.6}"/>
        <!-- 오른쪽 언덕과 그 위의 집 -->
        <path d="M418 742 C486 664 560 646 640 656 L${H} 668 L${H} 812 L418 812 Z" fill="${i}"/>
        <g transform="translate(452 450) scale(0.3)" opacity="0.96">${Bu(n,t)}</g>
        <rect x="400" y="470" width="${H-400}" height="300" fill="${n.haze}" opacity="${(n.hazeAmt*1.6).toFixed(2)}" filter="url(#vblur2)"/>
        ${T1(812)}
        ${mt(n,470)}`}case"maru":return V1(n,t);case"kitchen":return H1(n,t);case"hallway":return Z1(n,t);case"room":return Q1(n,t);case"rooftop":return W1(n,t);default:{const i=t==="night",l=i?"#0b0d11":"#23262c";return`
        ${pr(n,t,520)}
        ${gr(n,t,520,796)}
        <ellipse cx="372" cy="792" rx="250" ry="34" fill="#000000" opacity="${n.shadow}" filter="url(#vblur)"/>
        <path d="M190 552 L372 404 L554 552 L554 790 L190 790 Z" fill="url(#vwalld)"/>
        <path d="M180 558 L372 396 L564 558 L554 570 L372 420 L190 570 Z" fill="${l}"/>
        <rect x="190" y="552" width="364" height="238" filter="url(#vstucco)" opacity="0.12" style="mix-blend-mode:overlay"/>
        ${Kr(244,606,176,146,t,2)}
        <rect x="452" y="640" width="62" height="150" fill="${G(n.wallDark,i?.12:0)}" stroke="${l}" stroke-width="4"/>
        <circle cx="462" cy="716" r="4" fill="${i?"#ffd89a":"#c8b48a"}"/>
        ${oc(152,790,440,44)}
        <rect x="152" y="832" width="440" height="52" fill="${G(n.deck,-.44)}"/>
        ${i?'<ellipse cx="332" cy="690" rx="240" ry="150" fill="url(#vwarm)"/>':""}
        ${Pu(n,872)}
        ${mt(n,520)}`}}}function Ru(e,n,t){switch(e){case"yard":case"beach":case"maru":case"annex":case"kitchen":case"hallway":case"room":case"rooftop":return q1(e,Zh[t],t);case"cvs":return`
        <rect x="0" y="760" width="${H}" height="${se-760}" fill="#6b6b6b"/>
        <rect x="60" y="340" width="600" height="430" fill="#f2f4f5"/>
        <rect x="60" y="340" width="600" height="70" fill="#3a9b5c"/>
        <rect x="60" y="410" width="600" height="18" fill="#2f7fbd"/>
        <rect x="110" y="470" width="220" height="280" fill="#cfe4f2" opacity="0.8"/>
        <rect x="390" y="470" width="220" height="280" fill="#cfe4f2" opacity="0.8"/>
        <rect x="150" y="500" width="140" height="18" fill="#e3736b"/>
        <rect x="150" y="540" width="140" height="18" fill="#e3b96b"/>
        <rect x="240" y="800" width="240" height="14" rx="6" fill="#8a8a8a"/>
        <rect x="256" y="814" width="14" height="60" fill="#8a8a8a"/>
        <rect x="450" y="814" width="14" height="60" fill="#8a8a8a"/>`;case"campus":return`
        <rect x="0" y="700" width="${H}" height="${se-700}" fill="#5d7a4a"/>
        <rect x="0" y="380" width="${H}" height="330" fill="#8a9c76" opacity="0.5"/>
        <rect x="80" y="300" width="200" height="400" fill="${n.wall}" opacity="0.9"/>
        <rect x="440" y="340" width="200" height="360" fill="${n.wall}" opacity="0.9"/>
        <circle cx="360" cy="520" r="130" fill="#7a4f2a" opacity="0.15"/>
        <circle cx="360" cy="480" r="120" fill="#c9793a" opacity="0.85"/>
        <rect x="350" y="560" width="22" height="150" fill="#5b4330"/>
        <rect x="200" y="840" width="320" height="18" rx="6" fill="${n.wood}"/>
        <rect x="200" y="858" width="320" height="14" rx="4" fill="${n.wood}" opacity="0.8"/>
        <rect x="214" y="872" width="14" height="60" fill="#5a5a5a"/>
        <rect x="492" y="872" width="14" height="60" fill="#5a5a5a"/>`;case"street":return`
        ${Qs(t)}
        <rect x="0" y="780" width="${H}" height="${se-780}" fill="#55524c"/>
        <rect x="0" y="360" width="280" height="430" fill="${n.wall}"/>
        <rect x="440" y="320" width="280" height="470" fill="${n.wall}" opacity="0.92"/>
        <rect x="60" y="440" width="70" height="90" fill="#cfe4f2" opacity="0.7"/>
        <rect x="170" y="440" width="70" height="90" fill="#cfe4f2" opacity="0.5"/>
        <rect x="500" y="420" width="70" height="90" fill="#cfe4f2" opacity="0.7"/>
        <rect x="352" y="420" width="16" height="360" fill="#3f3f3f"/>
        <circle cx="360" cy="410" r="30" fill="${n.light}" opacity="0.95"/>
        <ellipse cx="360" cy="470" rx="200" ry="150" fill="url(#lamp)"/>`;case"festival":return`
        ${Qs(t)}
        <rect x="0" y="780" width="${H}" height="${se-780}" fill="#4a4a48"/>
        <path d="M40 300 q160 60 320 0 q160 -60 320 0" stroke="#e8c15a" stroke-width="5" fill="none"/>
        <circle cx="120" cy="322" r="14" fill="#ff8f6b"/>
        <circle cx="240" cy="336" r="14" fill="#ffd36b"/>
        <circle cx="360" cy="330" r="14" fill="#8fd3a0"/>
        <circle cx="480" cy="312" r="14" fill="#8fb6f0"/>
        <circle cx="600" cy="296" r="14" fill="#e08fd0"/>
        <rect x="80" y="480" width="240" height="300" fill="#c65b4e"/>
        <path d="M60 480 h280 l-20 -50 h-240z" fill="#f0e2c8"/>
        <rect x="400" y="520" width="240" height="260" fill="#4e7cc6"/>
        <path d="M380 520 h280 l-20 -50 h-240z" fill="#f0e2c8"/>`;case"station":return`
        <rect x="0" y="800" width="${H}" height="${se-800}" fill="#59575a"/>
        <rect x="0" y="300" width="${H}" height="500" fill="${n.wall}" opacity="0.9"/>
        <rect x="200" y="420" width="320" height="380" rx="8" fill="#2f3a44"/>
        <rect x="230" y="450" width="260" height="60" rx="6" fill="#2f7fbd"/>
        <text x="360" y="494" font-size="34" text-anchor="middle" fill="#ffffff" font-family="sans-serif">역</text>
        <path d="M240 540 h240 M240 600 h240 M240 660 h240" stroke="#59646e" stroke-width="10"/>
        <rect x="60" y="640" width="14" height="160" fill="#3f3f3f"/>
        <circle cx="67" cy="630" r="24" fill="${n.light}" opacity="0.9"/>
        <rect x="646" y="640" width="14" height="160" fill="#3f3f3f"/>
        <circle cx="653" cy="630" r="24" fill="${n.light}" opacity="0.9"/>`}}function K1(e,n){const t=z1[n],r=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${H} ${se}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${I1[e]} ${n}">`;return P1.has(e)?R1(`${r}
  ${A1(Zh[n])}
  ${Ru(e,t,n)}
</svg>`):`${r}
  ${D1(t)}
  ${Ru(e,t,n)}
  <rect width="${H}" height="${se}" fill="#0a0d18" opacity="${t.haze}"/>
</svg>`}function Y1(e,n){return`data:image/svg+xml;utf8,${encodeURIComponent(K1(e,n))}`}const Kh=new Set(["arin.webp","arin_face.webp","arin_face_lose.webp","arin_face_serious.webp","arin_face_smile.webp","arin_face_sulk.webp","arin_face_surprise.webp","arin_face_win.webp","arin_lose.webp","arin_serious.webp","arin_smile.webp","arin_sulk.webp","arin_surprise.webp","arin_win.webp","chaea.webp","chaea_face.webp","chaea_face_lose.webp","chaea_face_serious.webp","chaea_face_smile.webp","chaea_face_sulk.webp","chaea_face_surprise.webp","chaea_face_win.webp","chaea_lose.webp","chaea_serious.webp","chaea_smile.webp","chaea_sulk.webp","chaea_surprise.webp","chaea_win.webp","dabin.webp","dabin_face.webp","dabin_face_lose.webp","dabin_face_serious.webp","dabin_face_smile.webp","dabin_face_sulk.webp","dabin_face_surprise.webp","dabin_face_win.webp","dabin_lose.webp","dabin_serious.webp","dabin_smile.webp","dabin_sulk.webp","dabin_surprise.webp","dabin_win.webp","gain.webp","gain_face.webp","gain_face_lose.webp","gain_face_serious.webp","gain_face_smile.webp","gain_face_sulk.webp","gain_face_surprise.webp","gain_face_win.webp","gain_lose.webp","gain_serious.webp","gain_smile.webp","gain_sulk.webp","gain_surprise.webp","gain_win.webp","hana.webp","hana_face.webp","hana_face_lose.webp","hana_face_serious.webp","hana_face_smile.webp","hana_face_sulk.webp","hana_face_surprise.webp","hana_face_win.webp","hana_lose.webp","hana_serious.webp","hana_smile.webp","hana_sulk.webp","hana_surprise.webp","hana_win.webp","harin.webp","harin_face.webp","harin_face_lose.webp","harin_face_serious.webp","harin_face_smile.webp","harin_face_sulk.webp","harin_face_surprise.webp","harin_face_win.webp","harin_lose.webp","harin_serious.webp","harin_smile.webp","harin_sulk.webp","harin_surprise.webp","harin_win.webp","jieun.webp","jieun_face.webp","jieun_face_lose.webp","jieun_face_serious.webp","jieun_face_smile.webp","jieun_face_sulk.webp","jieun_face_surprise.webp","jieun_face_win.webp","jieun_lose.webp","jieun_serious.webp","jieun_smile.webp","jieun_sulk.webp","jieun_surprise.webp","jieun_win.webp","minji.webp","minji_face.webp","minji_face_lose.webp","minji_face_serious.webp","minji_face_smile.webp","minji_face_sulk.webp","minji_face_surprise.webp","minji_face_win.webp","minji_lose.webp","minji_serious.webp","minji_smile.webp","minji_sulk.webp","minji_surprise.webp","minji_win.webp","nayeon.webp","nayeon_face.webp","nayeon_face_lose.webp","nayeon_face_serious.webp","nayeon_face_smile.webp","nayeon_face_sulk.webp","nayeon_face_surprise.webp","nayeon_face_win.webp","nayeon_lose.webp","nayeon_serious.webp","nayeon_smile.webp","nayeon_sulk.webp","nayeon_surprise.webp","nayeon_win.webp","ria.webp","ria_face.webp","ria_face_lose.webp","ria_face_serious.webp","ria_face_smile.webp","ria_face_sulk.webp","ria_face_surprise.webp","ria_face_win.webp","ria_lose.webp","ria_serious.webp","ria_smile.webp","ria_sulk.webp","ria_surprise.webp","ria_win.webp","rubi.webp","rubi_face.webp","rubi_face_lose.webp","rubi_face_serious.webp","rubi_face_smile.webp","rubi_face_sulk.webp","rubi_face_surprise.webp","rubi_face_win.webp","rubi_lose.webp","rubi_serious.webp","rubi_smile.webp","rubi_sulk.webp","rubi_surprise.webp","rubi_win.webp","seoyeon.webp","seoyeon_face.webp","seoyeon_face_lose.webp","seoyeon_face_serious.webp","seoyeon_face_smile.webp","seoyeon_face_sulk.webp","seoyeon_face_surprise.webp","seoyeon_face_win.webp","seoyeon_lose.webp","seoyeon_serious.webp","seoyeon_smile.webp","seoyeon_sulk.webp","seoyeon_surprise.webp","seoyeon_win.webp","sora.webp","sora_face.webp","sora_face_lose.webp","sora_face_serious.webp","sora_face_smile.webp","sora_face_sulk.webp","sora_face_surprise.webp","sora_face_win.webp","sora_lose.webp","sora_serious.webp","sora_smile.webp","sora_sulk.webp","sora_surprise.webp","sora_win.webp","sua.webp","sua_face.webp","sua_face_lose.webp","sua_face_serious.webp","sua_face_smile.webp","sua_face_sulk.webp","sua_face_surprise.webp","sua_face_win.webp","sua_lose.webp","sua_serious.webp","sua_smile.webp","sua_sulk.webp","sua_surprise.webp","sua_win.webp","yerin.webp","yerin_face.webp","yerin_face_lose.webp","yerin_face_serious.webp","yerin_face_smile.webp","yerin_face_sulk.webp","yerin_face_surprise.webp","yerin_face_win.webp","yerin_lose.webp","yerin_serious.webp","yerin_smile.webp","yerin_sulk.webp","yerin_surprise.webp","yerin_win.webp"]),X1=new Set(["title.webp"]),J1="./";function Yh(e,n){return`${J1}art/${e}/${n}`}const e2={smile:["smile"],win:["win","smile"],shy:["shy","smile"],surprise:["surprise"],lose:["lose","surprise"],sulk:["sulk","surprise"],serious:["serious"]},Ws={nayeon:["normal","surprise","lose"],hana:["normal","lose","sulk"],sora:["normal","surprise","lose"]},Fu="serious";function Ou(e,n){return Ws[e]?.includes(n)??!1}function sc(e,n,t){const r=e,i=n==="face"?"_face":"",s=[...[...t&&t!=="normal"?e2[t]??[t]:[],"normal",...Ws[r]?[Fu]:[]].filter(a=>!Ou(r,a)).map(a=>a==="normal"?`${r}${i}.webp`:`${r}${i}_${a}.webp`),n==="face"&&!Ou(r,"normal")?`${r}.webp`:null,n==="face"&&Ws[r]?`${r}_${Fu}.webp`:null].filter(a=>a!==null);for(const a of s)if(Kh.has(a))return Yh("char",a);return null}function n2(e){return Kh.has(`${e}.webp`)}function t2(e){const n=`${e}.webp`;return X1.has(n)?Yh("key",n):null}let co="classic";function r2(e){co=e}function ac({className:e=""}){return c.jsxs("div",{className:`glogo ${e}`,children:[c.jsxs("svg",{className:"glogo-house",viewBox:"0 0 40 34","aria-hidden":"true",children:[c.jsx("path",{d:"M20 2 L38 15 L34 15 L34 32 L6 32 L6 15 L2 15 Z",fill:"#f2c341",stroke:"#3a1206",strokeWidth:"2.6",strokeLinejoin:"round"}),c.jsx("rect",{x:"14",y:"19",width:"12",height:"13",fill:"#b8321f",stroke:"#3a1206",strokeWidth:"2"})]}),c.jsx("span",{className:"glogo-a","data-text":"하숙생",children:"하숙생"}),c.jsx("span",{className:"glogo-b","data-text":"맞고",children:"맞고"}),c.jsxs("svg",{className:"glogo-seal",viewBox:"0 0 26 26","aria-hidden":"true",children:[c.jsx("rect",{x:"1.5",y:"1.5",width:"23",height:"23",rx:"3",fill:"#c9301f",stroke:"#3a1206",strokeWidth:"2.4"}),c.jsx("text",{x:"13",y:"19",fontSize:"15",textAnchor:"middle",fill:"#ffe9c0",fontFamily:"serif",fontWeight:"bold",children:"光"})]})]})}function qs(e){return Rl(e,{skin:co})}function Hn({tenant:e,expression:n="normal",outfit:t=0,shot:r="full",className:i,style:l}){const o=Zs({tenant:e,expression:n,outfit:t}),s=sc(e.id,r,n);return c.jsx("img",{className:`${i??""} ${s?"is-photo":"is-drawn"}`.trim(),style:l,src:s??o,alt:`${e.name} (${n})`,onError:a=>{const u=a.currentTarget;u.src!==o&&(u.src=o)},draggable:!1})}function Ii({bg:e,time:n}){return c.jsx("div",{className:"bg-layer",style:{backgroundImage:`url("${Y1(e,n)}")`}})}function Xi({card:e,small:n,selectable:t,chosen:r,zone:i,hidden:l,onClick:o}){const s=["card",n?"sm":"",t?"selectable":"",r?"chosen":""].filter(Boolean).join(" ");return c.jsx("img",{className:s,"data-cid":e.id,"data-zone":i??"field","data-month":e.month,style:l?{visibility:"hidden"}:void 0,src:Rl(e,{skin:co}),alt:e.name,onClick:t?o:void 0,draggable:!1})}function Wo({small:e}){return c.jsx("img",{className:`card ${e?"sm":""}`,src:gm({skin:co}),alt:"뒷면",draggable:!1})}function Gu({value:e,max:n,kind:t}){const r=Math.max(0,Math.min(100,e/n*100));return c.jsx("div",{className:`meter ${t??""}`,children:c.jsx("i",{style:{width:`${r}%`}})})}function Uu({on:e,onToggle:n}){return c.jsx("button",{className:`switch ${e?"on":""}`,onClick:n,"aria-pressed":e,children:c.jsx("i",{})})}function i2(){const e=new Date().getHours();return e<11?"morning":e<18?"evening":"night"}const Xh={spring:"봄",summer:"여름",autumn:"가을",winter:"겨울"},l2=[["matchStart","승부 시작"],["go","고"],["stop","스톱"],["ppeok","뻑"],["sseulVictim","쓸 당함"],["win","승리"],["lose","패배"],["affection","호감 이벤트"]];function o2({data:e,onBack:n}){const[t,r]=v.useState("profile"),[i,l]=v.useState(qe[0]),o=e.tenants[i.id],s=(o?.clearedStage??0)>0||(o?.wins??0)>0;return c.jsx("div",{className:"screen",style:{background:"var(--wood-dark)"},children:c.jsxs("div",{className:"layer",children:[c.jsxs("div",{className:"topbar",children:[c.jsx("button",{className:"iconbtn",onClick:n,"aria-label":"뒤로",children:"←"}),c.jsx("h1",{children:"도감"})]}),c.jsxs("div",{className:"tabs",children:[c.jsx("button",{className:t==="profile"?"active":"",onClick:()=>r("profile"),children:"프로필"}),c.jsx("button",{className:t==="cg"?"active":"",onClick:()=>r("cg"),children:"CG"}),c.jsx("button",{className:t==="lines"?"active":"",onClick:()=>r("lines"),children:"대사"})]}),c.jsx("div",{style:{display:"flex",gap:6,overflowX:"auto",padding:"8px 12px"},children:qe.map(a=>c.jsx("button",{className:"btn",style:{padding:"6px 10px",fontSize:12,flex:"0 0 auto",filter:i.id===a.id?"none":"brightness(0.7)"},onClick:()=>l(a),children:a.name},a.id))}),c.jsxs("div",{className:"panel",children:[t==="profile"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"section",style:{display:"flex",gap:12},children:[c.jsx(Hn,{tenant:i,expression:"normal",outfit:0,style:{width:96}}),c.jsxs("div",{style:{flex:1,fontSize:13,lineHeight:1.7},children:[c.jsxs("div",{style:{fontSize:18,fontWeight:800},children:[i.name," ",c.jsxs("small",{style:{fontSize:12},children:["“",i.nickname,"”"]})]}),c.jsxs("div",{style:{color:"var(--paper-dim)"},children:[i.age,"세 · ",i.job,c.jsx("br",{}),i.room," · ",Xh[i.season],c.jsx("br",{}),i.personality.join(" / ")]})]})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"이 집에 온 이유"}),c.jsx("div",{style:{fontSize:13,lineHeight:1.7,color:"var(--paper)"},children:i.backstory})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"맞고 스타일"}),c.jsx("div",{style:{fontSize:13,lineHeight:1.6},children:i.styleLabel}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"전적"}),c.jsxs("span",{children:[o?.wins??0,"승 ",o?.losses??0,"패"]})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"호감도"}),c.jsxs("span",{children:[o?.affection??0," / 100"]})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"클리어 단계"}),c.jsxs("span",{children:[o?.clearedStage??0," / 10"]})]})]}),c.jsxs("div",{className:"section",children:[c.jsxs("h3",{children:["표정 ",zu.length,"종"]}),c.jsx("div",{className:"expr-grid",children:zu.map(a=>c.jsxs("figure",{children:[c.jsx("img",{src:Zs({tenant:i,expression:a,outfit:0}),alt:a}),c.jsx("figcaption",{children:Hh[a]})]},a))})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"의상 3종"}),c.jsx("div",{className:"expr-grid",style:{gridTemplateColumns:"repeat(3, 1fr)"},children:[0,1,2].map(a=>c.jsxs("figure",{children:[c.jsx("img",{src:Zs({tenant:i,expression:"smile",outfit:a}),alt:`의상 ${a}`}),c.jsx("figcaption",{children:["평상복","외출복","특별 이벤트복"][a]})]},a))})]})]}),t==="cg"&&c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"해금 CG"}),c.jsxs("div",{className:"cg-grid",children:[qe.map(a=>{const u=`${a.id}_ending`,f=e.unlockedCG.includes(u);return c.jsx("div",{className:`cg-cell ${f?"unlocked":""}`,children:f?c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:800,fontSize:13},children:a.name}),c.jsx("div",{style:{fontSize:10,opacity:.75,marginTop:4},children:a.events[9].title})]}):c.jsx("span",{children:"🔒 10단계 클리어"})},a.id)}),c.jsx("div",{className:`cg-cell ${e.unlockedCG.includes("ending_group")?"unlocked":""}`,children:e.unlockedCG.includes("ending_group")?c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:800,fontSize:13},children:"마루의 단체 사진"}),c.jsx("div",{style:{fontSize:10,opacity:.75,marginTop:4},children:"히든 엔딩"})]}):c.jsx("span",{children:"🔒 전원 10단계"})})]})]}),t==="lines"&&c.jsxs(c.Fragment,{children:[!s&&c.jsxs("div",{className:"empty",children:[i.name,"와(과) 아직 승부한 적이 없습니다.",c.jsx("br",{}),"한 판 이상 치르면 대사가 열립니다."]}),s&&l2.map(([a,u])=>c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:u}),["low","mid","high"].map(f=>{const h=f==="low"||f==="mid"&&(o?.affection??0)>30||f==="high"&&(o?.affection??0)>70;return c.jsxs("div",{style:{marginBottom:8},children:[c.jsx("div",{style:{fontSize:11,color:"var(--lamp-dim)",marginBottom:3},children:{low:"호감 0~30",mid:"호감 31~70",high:"호감 71~100"}[f]}),h?i.lines[a][f].map((p,y)=>c.jsxs("div",{style:{fontSize:12.5,lineHeight:1.6,opacity:.9},children:["· ",p]},y)):c.jsx("div",{style:{fontSize:12,color:"var(--paper-dim)"},children:"🔒 호감도가 더 필요합니다"})]},f)})]},a))]})]})]})})}const Vu={affection:0,clearedStage:0,dating:!1};function s2({data:e,onPick:n,onGallery:t,onShop:r,onSettings:i,onHidden:l,onAllowance:o,allClearedFlag:s}){const a=Oh(e),u=i2(),f=v.useMemo(()=>{const N=qe.filter(E=>hr(E,a));return(N.find(E=>(e.tenants[E.id]?.clearedStage??0)<10)??N[0]??qe[0]).id},[]),[h,p]=v.useState(f),y=qe.find(N=>N.id===h)??qe[0],k=e.tenants[y.id]??Vu,b=hr(y,a),R=k.clearedStage>=10,m=Math.min(10,k.clearedStage+1),g=Ph(y),$=e.points>=g,w=ec(k.affection),x=v.useMemo(()=>{const N=y.lines.matchStart[w];return N[(y.order+k.clearedStage)%N.length]},[y,w,k.clearedStage]);return c.jsxs("div",{className:"screen",children:[c.jsx(Ii,{bg:"maru",time:u}),c.jsxs("div",{className:"layer lobby",children:[c.jsxs("div",{className:"rail",children:[c.jsx(ac,{className:"rail-logo"}),c.jsxs("span",{className:"purse",children:[c.jsx("i",{"aria-hidden":"true",children:"🪙"}),e.points.toLocaleString()]}),c.jsx("button",{className:"iconbtn",onClick:r,"aria-label":"상점",children:"🏮"}),c.jsx("button",{className:"iconbtn",onClick:t,"aria-label":"도감",children:"📖"}),c.jsx("button",{className:"iconbtn",onClick:i,"aria-label":"설정",children:"⚙"})]}),Gh(e)&&c.jsxs("div",{className:"hint-box",children:["포인트가 모자라 승부를 걸 수 없습니다. 포인트는 승부로만 버는 터라 이대로는 진행이 막힙니다.",c.jsxs("button",{className:"btn primary wide",style:{marginTop:10,fontSize:14},onClick:o,children:["할머니 비상금 봉투 찾기 (+",Uh,"P)"]})]}),s&&c.jsxs("div",{className:"hint-box",style:{cursor:"pointer"},onClick:l,children:["전원 10단계 클리어! ",c.jsx("strong",{children:"마루의 단체 사진"}),"을 보러 가기 ▸"]}),c.jsxs("div",{className:"stage-wrap",children:[c.jsxs("div",{className:"bubble",children:[c.jsxs("span",{className:"bubble-who",children:["♡ ",y.name]}),b?x:Iu(y)]},y.id),c.jsx(Hn,{className:`stage-face ${b?"":"locked"}`,tenant:y,expression:b&&R?"smile":"normal",outfit:R?2:0}),c.jsxs("div",{className:"plate",children:[c.jsxs("div",{className:"plate-name",children:[y.name,c.jsx("span",{className:"badge season",children:Xh[y.season]}),k.dating&&c.jsx("span",{className:"badge",children:"연애중"})]}),c.jsxs("div",{className:"plate-sub",children:[y.nickname," · ",y.age,"세 · ",y.job," · ",y.room]}),c.jsx("div",{className:"plate-style",children:y.styleLabel}),b?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"meter-row",children:[c.jsx("span",{style:{width:30},children:"호감"}),c.jsx(Gu,{value:k.affection,max:100}),c.jsx("span",{style:{width:34,textAlign:"right"},children:k.affection})]}),c.jsxs("div",{className:"meter-row",children:[c.jsx("span",{style:{width:30},children:"단계"}),c.jsx(Gu,{value:k.clearedStage,max:10,kind:"stage"}),c.jsxs("span",{style:{width:34,textAlign:"right"},children:[k.clearedStage,"/10"]})]}),c.jsx("div",{className:"plate-terms",children:R?c.jsx(c.Fragment,{children:"모든 단계 클리어 · 커플 모드로 다시 승부"}):c.jsxs(c.Fragment,{children:[c.jsxs("b",{children:[m,"단계"]})," · 점당 ",c.jsxs("b",{className:"lamp",children:[y.rate,"P"]})," · 클리어 보너스"," ",c.jsxs("b",{className:"lamp",children:[Th(y,m),"P"]}),c.jsx("span",{className:`stake ${$?"":"short"}`,children:$?`최소 ${g.toLocaleString()}P 필요`:`${g.toLocaleString()}P 부족`})]})})]}):c.jsx("div",{className:"plate-terms",children:c.jsxs("span",{className:"short",children:["🔒 ",Iu(y)]})})]})]}),c.jsx("button",{className:"btn gold wide sit",disabled:!b,onClick:()=>b&&n(y),children:R?"한 판 더 두기":`${m}단계 · 한 판 두기`}),c.jsx("div",{className:"roster",role:"tablist","aria-label":"하숙생",children:qe.map(N=>{const E=e.tenants[N.id]??Vu,_=hr(N,a);return c.jsxs("button",{role:"tab","aria-selected":N.id===h,className:`chip ${N.id===h?"on":""} ${_?"":"locked"}`,onClick:()=>p(N.id),children:[c.jsxs("span",{className:"chip-shot",children:[c.jsx(Hn,{tenant:N,shot:"face",expression:"normal",outfit:E.clearedStage>=10?2:0}),!_&&c.jsx("i",{className:"chip-lock",children:"🔒"}),_&&c.jsxs("em",{className:"chip-stage",children:[E.clearedStage,"/10"]})]}),c.jsx("b",{children:_?`♡ ${N.name}`:"???"}),c.jsx("small",{children:_?N.nickname:"잠김"})]},N.id)})})]})]})}const Hu={1:"송학",2:"매조",3:"벚꽃",4:"흑싸리",5:"난초",6:"모란",7:"홍싸리",8:"공산",9:"국화",10:"단풍",11:"오동",12:"비"},a2={1:[{kind:"gwang",name:"송학 광"},{kind:"tti",tti:"hong",name:"송학 홍단"},{kind:"pi",piValue:1,name:"송학 피"},{kind:"pi",piValue:1,name:"송학 피"}],2:[{kind:"yeol",isGodori:!0,name:"매조 휘파람새"},{kind:"tti",tti:"hong",name:"매조 홍단"},{kind:"pi",piValue:1,name:"매조 피"},{kind:"pi",piValue:1,name:"매조 피"}],3:[{kind:"gwang",name:"벚꽃 광"},{kind:"tti",tti:"hong",name:"벚꽃 홍단"},{kind:"pi",piValue:1,name:"벚꽃 피"},{kind:"pi",piValue:1,name:"벚꽃 피"}],4:[{kind:"yeol",isGodori:!0,name:"흑싸리 두견새"},{kind:"tti",tti:"cho",name:"흑싸리 초단"},{kind:"pi",piValue:1,name:"흑싸리 피"},{kind:"pi",piValue:1,name:"흑싸리 피"}],5:[{kind:"yeol",name:"난초 다리"},{kind:"tti",tti:"cho",name:"난초 초단"},{kind:"pi",piValue:1,name:"난초 피"},{kind:"pi",piValue:1,name:"난초 피"}],6:[{kind:"yeol",name:"모란 나비"},{kind:"tti",tti:"cheong",name:"모란 청단"},{kind:"pi",piValue:1,name:"모란 피"},{kind:"pi",piValue:1,name:"모란 피"}],7:[{kind:"yeol",name:"홍싸리 멧돼지"},{kind:"tti",tti:"cho",name:"홍싸리 초단"},{kind:"pi",piValue:1,name:"홍싸리 피"},{kind:"pi",piValue:1,name:"홍싸리 피"}],8:[{kind:"gwang",name:"공산 광"},{kind:"yeol",isGodori:!0,name:"공산 기러기"},{kind:"pi",piValue:1,name:"공산 피"},{kind:"pi",piValue:1,name:"공산 피"}],9:[{kind:"yeol",isGukjin:!0,name:"국화 국진"},{kind:"tti",tti:"cheong",name:"국화 청단"},{kind:"pi",piValue:1,name:"국화 피"},{kind:"pi",piValue:1,name:"국화 피"}],10:[{kind:"yeol",name:"단풍 사슴"},{kind:"tti",tti:"cheong",name:"단풍 청단"},{kind:"pi",piValue:1,name:"단풍 피"},{kind:"pi",piValue:1,name:"단풍 피"}],11:[{kind:"gwang",name:"오동 광"},{kind:"pi",piValue:2,name:"오동 쌍피"},{kind:"pi",piValue:1,name:"오동 피"},{kind:"pi",piValue:1,name:"오동 피"}],12:[{kind:"gwang",isBiGwang:!0,name:"비광"},{kind:"yeol",name:"비 제비"},{kind:"tti",tti:"bi",name:"비띠"},{kind:"pi",piValue:2,name:"비 쌍피"}]};function Jh(){const e=[];for(let n=1;n<=12;n++)a2[n].forEach((t,r)=>{e.push({id:`m${n}-${r}`,month:n,kind:t.kind,tti:t.tti,isBiGwang:t.isBiGwang,isGodori:t.isGodori,isGukjin:t.isGukjin,piValue:t.piValue,name:t.name})});return e}function c2(e){const n=[];for(let t=0;t<e.bonusPiCount;t++)n.push({id:`bonus-${t}`,month:0,kind:"pi",piValue:e.bonusPiValue,isBonus:!0,name:`보너스 ${e.bonusPiValue}피`});return n}function u2(e){return[...Jh(),...c2(e)]}function e0(e,n){const t={gwang:[],yeol:[],tti:[],pi:[]};for(const r of e){if(r.isGukjin&&n){t.pi.push(r);continue}switch(r.kind){case"gwang":t.gwang.push(r);break;case"yeol":t.yeol.push(r);break;case"tti":t.tti.push(r);break;case"pi":t.pi.push(r);break}}return t}function n0(e,n){return e.reduce((t,r)=>r.isGukjin?t+(n?2:0):t+(r.piValue??1),0)}function d2(e,n){const t=e.length;return t>=5?{score:15,label:"오광"}:t===4?{score:4,label:"사광"}:t===3?e.some(i=>i.isBiGwang)&&n.biGwangPenalty?{score:2,label:"비삼광"}:{score:3,label:"삼광"}:{score:0,label:null}}function f2(e,n){const t=[];let r=0;const i=e.filter(a=>a.tti==="hong").length,l=e.filter(a=>a.tti==="cheong").length,o=e.filter(a=>a.tti==="cho").length;i>=3&&(r+=3,t.push("홍단")),l>=3&&(r+=3,t.push("청단")),o>=3&&(r+=3,t.push("초단"));const s=e.length;return n.ttiScoring==="standard"?s>=5&&(r+=s-4,t.push(`띠 ${s}장`)):s>=5&&(r+=5+(s-5),t.push(`띠 ${s}장`)),{score:r,labels:t}}function h2(e){const n=[];let t=0;e.filter(l=>l.isGodori).length>=3&&(t+=5,n.push("고도리"));const i=e.length;return i>=5&&(t+=i-4,n.push(`열끗 ${i}장`)),{score:t,labels:n}}function p2(e,n){const t=n0(e,n);return{score:t>=10?t-9:0,count:t}}function g2(e){const n=new Map;for(const t of e)t.month!==0&&n.set(t.month,(n.get(t.month)??0)+1);for(const[t,r]of n)if(r>=4)return t;return null}function t0(e){const n=new Map;for(const t of e)t.month!==0&&n.set(t.month,(n.get(t.month)??0)+1);return[...n.entries()].filter(([,t])=>t===3).map(([t])=>t)}function vt(e,n){const t=n.gukjinOption&&e.gukjinUse==="ssangpi",r=e0([...e.captured.gwang,...e.captured.yeol,...e.captured.tti,...e.captured.pi],t),i=d2(r.gwang,n),l=f2(r.tti,n),o=h2(r.yeol),s=p2(r.pi,t),a=i.score+l.score+o.score+s.score;return{gwangScore:i.score,gwangLabel:i.label,ttiScore:l.score,ttiLabels:l.labels,yeolScore:o.score,yeolLabels:o.labels,piScore:s.score,piCount:s.count,base:a,chongtong:null}}function m2(e,n,t,r=1){const i=e[n],l=e[n===0?1:0],o=vt(i,t);vt(l,t);const s=[];let a=0,u=1;const f=i.goCount;f>=1&&(a+=1),f>=2&&(a+=1),f>=1&&s.push(`${f}고`),t.goMultiplierFrom3&&f>=3&&(u*=Math.pow(2,f-2),s.push(`고 배수 x${Math.pow(2,f-2)}`));let h=o.base+a;const p=t.gukjinOption&&l.gukjinUse==="ssangpi",y=n0(e0([...l.captured.pi],p).pi,p);return t.piBak&&o.piScore>0&&y<=t.piBakThreshold&&(u*=2,s.push("피박")),t.gwangBak&&o.gwangScore>0&&l.captured.gwang.length===0&&(u*=2,s.push("광박")),t.mengBak&&i.captured.yeol.length>=t.mengBakYeolThreshold&&l.captured.yeol.length===0&&(u*=2,s.push("멍박")),t.heundeulgi&&i.shaken.length>0&&(u*=Math.pow(2,i.shaken.length),s.push(`흔들기 x${Math.pow(2,i.shaken.length)}`)),t.bomb&&i.bombCount>0&&(u*=Math.pow(2,i.bombCount),s.push(`폭탄 x${Math.pow(2,i.bombCount)}`)),t.goBak&&l.goCount>0&&(u*=2,s.push("고박")),r>1&&(u*=r,s.push(`나가리 x${r}`)),h=h*u,{winner:n,breakdown:o,base:o.base,goCount:f,goBonus:a,multiplier:u,reasons:s,total:h}}function y2(e,n,t,r=1){return{winner:e,breakdown:null,base:10,goCount:0,goBonus:0,multiplier:r,reasons:[`총통 (${n}월)`],total:10*r}}function r0(){return{winner:null,breakdown:null,base:0,goCount:0,goBonus:0,multiplier:1,reasons:["나가리"],total:0}}const Ji=e=>e==="pile-me"||e==="pile-opp";function $2(e){return[...e].sort((n,t)=>{const r=n.forcedWait??1/0,i=t.forcedWait??1/0;return r!==i?r-i:n.fromX-t.fromX})}const el=300,Zu=660,w2=280,v2=110,Qu=650,Wu=200,qu=1200,nl=2e3,qo=.45,Ku=.66,x2=1280;function tl(e,n=0){return 40+Math.round(e/5)+n}const k2=900,b2=.5;function i0(e,n,t=!0){return e+n*b2*(t?1:-1)}function l0(e,n){return n<=e}const S2=0,_2=2,j2=4,C2=6;function Ur(e,n,t=60){const r=e.closest(".fslot")??e,i=r.style.zIndex;r.style.zIndex=String(t);const l=()=>{r.style.zIndex=i};n.addEventListener("finish",l),n.addEventListener("cancel",l)}function N2(e){const n=new Map;return e.querySelectorAll("[data-cid]").forEach(t=>{const r=t.dataset.cid;r&&(n.has(r)||n.set(r,{rect:t.getBoundingClientRect(),el:t,zone:t.dataset.zone??"field"}))}),n}const E2=220;function M2(e,n,t=!0,r,i){const l=v.useRef(null),o=v.useRef(new Map),s=v.useRef(0),a=v.useCallback((u,f)=>{o.current.set(u,f)},[]);return v.useLayoutEffect(()=>{const u=e.current;if(!u)return;const f=N2(u),h=l.current;if(l.current=new Map([...f].map(([_,D])=>[_,{rect:D.rect,zone:D.zone}])),!h||!t||typeof u.animate!="function")return;const p=u.querySelector("[data-deck]")?.getBoundingClientRect()??null,y=u.getBoundingClientRect(),k=[...f.keys()].some(_=>!o.current.has(_)&&!h.has(_)),b=new Map,R=new Map;for(const[_,D]of f){if(o.current.has(_)||h.has(_)||!Ji(D.zone))continue;const C=D.el.dataset.month;for(const[z,F]of f){if(z===_||F.zone!==D.zone||F.el.dataset.month!==C)continue;const W=h.get(z);if(!(!W||W.zone!=="field")){b.set(_,W.rect),R.set(z,nl*Ku);break}}}let m=0,g=0;const $=(_,D)=>{g=Math.max(g,_+D)},w=[],x=[];for(const[_,{rect:D,el:C,zone:z}]of f){const F=o.current.get(_);o.current.delete(_);const W=F?{rect:F,zone:"field"}:h.get(_),Q=W?.rect??p;if(!Q||D.width===0)continue;const re=Q.left-D.left,me=Q.top-D.top,ue=Q.width/D.width,L=!W;if(!(L||W.zone!==z)){if(Math.abs(re)<3&&Math.abs(me)<3)continue;C.animate([{transform:`translate(${re.toFixed(1)}px, ${me.toFixed(1)}px)`},{transform:"none"}],{duration:200,easing:"cubic-bezier(.3,0,.2,1)",fill:"backwards"}),$(0,200);continue}if(Math.abs(re)<2&&Math.abs(me)<2&&Math.abs(ue-1)<.03)continue;const U=`translate(${re.toFixed(1)}px, ${me.toFixed(1)}px) scale(${ue.toFixed(3)})`;if(L){const Sn=y.left+y.width/2-D.width/2-D.left,Je=y.top+y.height*.34-D.height/2-D.top,Ce=`translate(${Sn.toFixed(1)}px, ${Je.toFixed(1)}px)`,Z=b.get(_);if(Z){const ye=Z.left+Z.width/2-D.width/2,Qe=l0(ye,D.left),Oe=i0(ye,D.width,Qe)-D.left,Ge=Z.top+Z.height/2-D.height/2-D.top,an=`translate(${Oe.toFixed(1)}px, ${Ge.toFixed(1)}px)`,_n=C.animate([{transform:`${U} rotateY(90deg)`,offset:0,easing:"cubic-bezier(.25,.9,.3,1)"},{transform:`${Ce} scale(2.05) rotateY(66deg)`,offset:.18},{transform:`${Ce} scale(2.2) rotateY(0deg)`,offset:.3,easing:"linear"},{transform:`${Ce} scale(2.15)`,offset:.36,easing:"cubic-bezier(.75,0,.9,.55)"},{transform:`${an} scale(1.1) rotate(3deg)`,offset:qo},{transform:`${an} scale(1) rotate(0deg)`,offset:qo+.06,easing:"ease-out"},{transform:`${an} scale(1)`,offset:Ku,easing:"cubic-bezier(.45,0,.2,1)"},{transform:"none",offset:1}],{duration:nl,fill:"backwards"});Ur(C,_n,k2),i?.(Z,nl*qo),$(0,nl);continue}const V=C.animate([{transform:`${U} rotateY(90deg)`,offset:0,easing:"cubic-bezier(.25,.9,.3,1)"},{transform:`${Ce} scale(2.05) rotateY(66deg)`,offset:.3},{transform:`${Ce} scale(2.2) rotateY(0deg)`,offset:.5,easing:"linear"},{transform:`${Ce} translateY(-5px) scale(2.15)`,offset:.7,easing:"cubic-bezier(.6,0,.9,.5)"},{transform:"none",offset:1,easing:"cubic-bezier(.3,1.35,.45,1)"}],{duration:qu,fill:"backwards"});Ur(C,V,tl(0,C2)),$(0,qu);continue}if(Ji(z)&&W&&Ji(W.zone)&&W.zone!==z){w.push({el:C,dx:re,dy:me,sc:ue});continue}if(Ji(z)){x.push({el:C,start:U,dx:re,dy:me,sc:ue,fromX:Q.left,forcedWait:R.get(_)});continue}const Y=L?0:re>0?-14:14,ce=C.animate([{transform:`${U} rotate(${Y}deg)${L?" rotateY(88deg)":""}`,offset:0,easing:"cubic-bezier(.22,.9,.3,1)"},{transform:`translate(0,0) scale(1.09) rotate(${Y*.18}deg)`,offset:.72},{transform:"none",offset:1,easing:"cubic-bezier(.3,1.6,.4,1)"}],{duration:L?el+60:el,fill:"backwards"});Ur(C,ce,tl(0,S2)),$(0,L?el+60:el)}const N=$2(x.map(_=>({forcedWait:_.forcedWait,fromX:_.fromX,card:_}))),E=k?x2:w2;if(N.forEach(({card:_},D)=>{const C=_.forcedWait??E+m*v2;_.forcedWait===void 0?m+=1:m=Math.max(m,D+1);const{start:z,dx:F,dy:W,sc:Q,el:re}=_,me=re.animate([{transform:z,offset:0},{transform:`${z} scale(1.24)`,offset:.1,easing:"ease-out"},{transform:`${z} scale(1.12)`,offset:.22,easing:"cubic-bezier(.5,0,.5,1)"},{transform:`translate(${(F*.22).toFixed(1)}px, ${(W*.22).toFixed(1)}px) scale(${(Q*.55+.45).toFixed(3)})`,offset:.62,easing:"cubic-bezier(.4,0,.5,1)"},{transform:"none",offset:1,easing:"cubic-bezier(.45,0,.2,1)"}],{duration:Zu,delay:C,fill:"backwards"});Ur(re,me,tl(C,_2)),$(C,Zu)}),w.length){const _=g+Wu;w.forEach((D,C)=>{const z=`translate(${D.dx.toFixed(1)}px, ${D.dy.toFixed(1)}px) scale(${D.sc.toFixed(3)})`,F=D.el.animate([{transform:z,offset:0},{transform:`${z} scale(1.9) rotate(-10deg)`,offset:.2,easing:"cubic-bezier(.2,.9,.3,1)"},{transform:`translate(${(D.dx*.45).toFixed(1)}px, ${(D.dy*.45-34).toFixed(1)}px) scale(2)`,offset:.5,easing:"cubic-bezier(.5,0,.4,1)"},{transform:"scale(1.5)",offset:.78,easing:"cubic-bezier(.4,0,.2,1)"},{transform:"none",offset:1}],{duration:Qu,delay:_+C*180,fill:"backwards"});Ur(D.el,F,tl(_+C*Wu,j2)),$(_+C*180,Qu)})}if(g>0){const _=g+E2;s.current=performance.now()+_,r?.(_)}},n),{setOrigin:a,busyUntil:s}}function o0(e){let n=e>>>0;const t=()=>{n|=0,n=n+1831565813|0;let i=Math.imul(n^n>>>15,1|n);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return{next:t,int:i=>Math.floor(t()*i),pick:i=>i[Math.floor(t()*i.length)],shuffle:i=>{const l=[...i];for(let o=l.length-1;o>0;o--){const s=Math.floor(t()*(o+1));[l[o],l[s]]=[l[s],l[o]]}return l}}}function L2(){return(Date.now()^Math.floor(Math.random()*4294967295))>>>0}const s0={ttiScoring:"standard",ttadakSameMonth:!0,biGwangPenalty:!0,goMultiplierFrom3:!0,piBak:!0,gwangBak:!0,mengBak:!0,goBak:!0,heundeulgi:!0,bomb:!0,chongtong:!0,nagariDouble:!0,bonusPiCount:2,bonusPiValue:2,gukjinOption:!0,minScoreToStop:7,mengBakYeolThreshold:7,piBakThreshold:5},a0=e=>e===0?1:0;function c0(e,n){const t=a0(n);e.players[t].hand.length>0?e.turn=t:e.players[n].hand.length>0?e.turn=n:e.turn=t,e.phase="awaitPlay",e.turnCtx=null}function Yu(){return{hand:[],captured:{gwang:[],yeol:[],tti:[],pi:[]},goCount:0,shaken:[],bombCount:0,gukjinUse:"yeol",scoreAtLastGo:0}}function Xu(e){return{...e,hand:[...e.hand],captured:{gwang:[...e.captured.gwang],yeol:[...e.captured.yeol],tti:[...e.captured.tti],pi:[...e.captured.pi]},shaken:[...e.shaken]}}function Nr(e){return{...e,deck:[...e.deck],field:[...e.field],players:[Xu(e.players[0]),Xu(e.players[1])],events:[...e.events],ppeokPiles:{...e.ppeokPiles},turnCtx:e.turnCtx?{...e.turnCtx}:null,log:[...e.log]}}function u0(e,n){for(const t of n){if(t.isGukjin){e.captured.yeol.push(t);continue}switch(t.kind){case"gwang":e.captured.gwang.push(t);break;case"yeol":e.captured.yeol.push(t);break;case"tti":e.captured.tti.push(t);break;case"pi":e.captured.pi.push(t);break}}}function Sr(e,n,t){const r=e.players[a0(n)];if(r.captured.pi.length===0){e.log.push(`P${n} ${t} (상대 피 없음)`);return}const l=[...r.captured.pi].sort((o,s)=>(o.piValue??1)-(s.piValue??1))[0];r.captured.pi=r.captured.pi.filter(o=>o.id!==l.id),e.players[n].captured.pi.push(l),e.events.push({type:"steal",player:n,detail:t}),e.log.push(`P${n} ${t} -> 피 1장 상납`)}function I2(e){const n={...s0,...e?.rules??{}},t=o0(e?.seed??12345);let r=t.shuffle(u2(n));const i=(u,f)=>{const h=[],p=[];for(;h.length<u&&r.length>0;){const y=r.shift();if(f&&y.isBonus){p.push(y);continue}h.push(y)}return p.length&&(r=t.shuffle([...r,...p])),h},l=i(10,!1),o=i(10,!1),s=i(8,!0),a={rules:n,deck:r,field:s,players:[Yu(),Yu()],turn:e?.firstPlayer??0,phase:"awaitPlay",events:[],ppeokPiles:{},pendingChoice:null,turnCtx:null,settlement:null,roundMultiplier:e?.roundMultiplier??1,turnCount:0,log:[]};if(a.players[0].hand=l,a.players[1].hand=o,n.chongtong)for(const u of[0,1]){const f=g2(a.players[u].hand);if(f!==null)return a.phase="ended",a.settlement=y2(u,f,n,a.roundMultiplier),a.events.push({type:"chongtong",player:u,detail:`${f}월`}),a.log.push(`P${u} 총통 (${f}월)`),a}return a}function Ks(e,n){return e.rules.heundeulgi?t0(e.players[n].hand).filter(t=>!e.players[n].shaken.includes(t)):[]}function Ju(e,n,t){if(!Ks(e,n).includes(t))return e;const r=Nr(e);return r.players[n].shaken.push(t),r.events.push({type:"heundeulgi",player:n,detail:`${t}월`}),r.log.push(`P${n} 흔들기 (${t}월)`),r}function cc(e,n){return e.rules.bomb?t0(e.players[n].hand).filter(t=>e.field.some(r=>r.month===t)):[]}function Ys(e,n){return n===0?[]:e.field.filter(t=>t.month===n)}function ed(e,n,t=!1){if(e.phase!=="awaitPlay")return e;const r=Nr(e),i=r.turn,l=r.players[i],o=l.hand.findIndex(h=>h.id===n);if(o<0)return e;const s=l.hand[o];r.events=[];const a={player:i,playedCard:s,bombCards:[],playedWentToField:!1,fromHandCapture:[],flipCard:null,fromFlipCapture:[],ppeok:!1,bonusFlips:[],stage:"hand"};if(r.turnCtx=a,r.turnCount++,t&&r.rules.bomb&&cc(r,i).includes(s.month)){const h=l.hand.filter(y=>y.month===s.month);l.hand=l.hand.filter(y=>y.month!==s.month),a.playedCard=h[0],a.bombCards=h.slice(1),l.bombCount++,r.events.push({type:"bomb",player:i,detail:`${s.month}월`}),r.log.push(`P${i} 폭탄 (${s.month}월)`);const p=r.field.filter(y=>y.month===s.month);return r.field=r.field.filter(y=>y.month!==s.month),a.fromHandCapture=[...h,...p],delete r.ppeokPiles[s.month],Sr(r,i,"폭탄"),Yr(r)}if(l.hand.splice(o,1),s.isBonus){const h=[s];let p=r.deck.shift();for(;p?.isBonus;)h.push(p),p=r.deck.shift();return p&&l.hand.push(p),a.bonusFlips=h,r.events.push({type:"bonus",player:i,detail:`${h.length}장`}),r.log.push(`P${i} 보너스패 ${h.length}장`),l.hand.length===0||r.deck.length===0?tt(r):(u0(l,h),r.turnCtx=null,r.phase="awaitPlay",r.turn=i,r)}const u=Ys(r,s.month);if(u.length===0)return r.field.push(s),a.playedWentToField=!0,Yr(r);if(u.length===1)return r.field=r.field.filter(h=>h.id!==u[0].id),a.fromHandCapture=[s,u[0]],Yr(r);if(u.length===2)return r.phase="awaitChoice",r.pendingChoice={played:s,candidates:u,source:"hand"},r;r.field=r.field.filter(h=>h.month!==s.month),a.fromHandCapture=[s,...u];const f=r.ppeokPiles[s.month];return f!==void 0&&(delete r.ppeokPiles[s.month],Sr(r,i,f===i?"자뻑 회수":"뻑 회수")),Yr(r)}function nd(e,n){if(e.phase!=="awaitChoice"||!e.pendingChoice||!e.turnCtx)return e;const t=Nr(e),r=t.pendingChoice,i=r.candidates.find(l=>l.id===n)??r.candidates[0];return t.field=t.field.filter(l=>l.id!==i.id),t.pendingChoice=null,t.phase="awaitPlay",r.source==="hand"?(t.turnCtx.fromHandCapture=[r.played,i],Yr(t)):(t.turnCtx.fromFlipCapture=[r.played,i],tt(t))}function Yr(e){const n=e.turnCtx;n.stage="flip";const t=n.player;let r;for(;r=e.deck.shift(),!!r;){if(r.isBonus){n.bonusFlips.push(r);continue}break}if(!r)return n.flipCard=null,tt(e);const i=r;if(n.flipCard=i,n.fromHandCapture.length===2&&n.fromHandCapture[0].month===i.month&&n.bombCards.length===0&&e.field.every(s=>s.month!==i.month)){e.field.push(...n.fromHandCapture,i),n.fromHandCapture=[],n.ppeok=!0;const s=e.ppeokPiles[i.month];return e.ppeokPiles[i.month]=t,e.events.push({type:s===t?"jappeok":"ppeok",player:t,detail:`${i.month}월`}),e.log.push(`P${t} ${s===t?"자뻑":"뻑"} (${i.month}월)`),tt(e)}if(n.playedWentToField&&n.playedCard&&n.playedCard.month===i.month){const s=e.field.filter(a=>a.month===i.month);return e.field=e.field.filter(a=>a.month!==i.month),n.fromFlipCapture=[i,...s],n.playedWentToField=!1,e.events.push({type:"jjok",player:t,detail:`${i.month}월`}),e.log.push(`P${t} 쪽 (${i.month}월)`),Sr(e,t,"쪽"),tt(e)}const l=e.field.filter(s=>s.month===i.month);if(l.length===0)return e.field.push(i),tt(e);if(l.length===1)return e.field=e.field.filter(s=>s.id!==l[0].id),n.fromFlipCapture=[i,l[0]],tt(e);if(l.length===2)return e.phase="awaitChoice",e.pendingChoice={played:i,candidates:l,source:"deck"},e;e.field=e.field.filter(s=>s.month!==i.month),n.fromFlipCapture=[i,...l];const o=e.ppeokPiles[i.month];return o!==void 0&&(delete e.ppeokPiles[i.month],Sr(e,t,o===t?"자뻑 회수":"뻑 회수")),tt(e)}function tt(e){const n=e.turnCtx,t=n.player,r=e.players[t],i=[...n.fromHandCapture,...n.fromFlipCapture,...n.bonusFlips];u0(r,i);const l=n.fromHandCapture.length>=2&&n.fromFlipCapture.length>=2,o=l&&n.fromHandCapture[0].month===n.fromFlipCapture[0].month;if(n.bombCards.length===0&&l&&(!e.rules.ttadakSameMonth||o)){const h=n.fromHandCapture[0].month,p=n.fromHandCapture.length+n.fromFlipCapture.length;e.events.push({type:"ttadak",player:t,detail:o?`${h}월 ${p}장을 한 턴에`:`${p}장을 한 턴에`}),e.log.push(`P${t} 따닥`),Sr(e,t,"따닥")}e.field.length===0&&i.length>0&&(e.events.push({type:"sseul",player:t}),e.log.push(`P${t} 쓸`),Sr(e,t,"쓸")),n.stage="done";const a=vt(r,e.rules),u=a.base>=e.rules.minScoreToStop&&a.base>r.scoreAtLastGo,f=e.players[0].hand.length===0&&e.players[1].hand.length===0;return u?(e.phase="awaitGoStop",e):f||e.deck.length===0?(e.phase="ended",e.settlement=r0(),e.events.push({type:"nagari",player:t}),e.log.push("나가리"),e):(c0(e,t),e)}function td(e){if(e.phase!=="awaitGoStop")return e;const n=Nr(e),t=n.turn,r=n.players[t];return r.goCount++,r.scoreAtLastGo=vt(r,n.rules).base,n.events.push({type:"go",player:t,detail:`${r.goCount}고`}),n.log.push(`P${t} ${r.goCount}고`),n.players[0].hand.length===0&&n.players[1].hand.length===0||n.deck.length===0?(n.phase="ended",n.settlement=r0(),n.log.push("나가리 (고 후 패 소진)"),n):(c0(n,t),n)}function rd(e){if(e.phase!=="awaitGoStop")return e;const n=Nr(e),t=n.turn;return n.phase="ended",n.settlement=m2(n.players,t,n.rules,n.roundMultiplier),n.events.push({type:"stop",player:t}),n.log.push(`P${t} 스톱 -> ${n.settlement.total}점`),n}function id(e,n,t){const r=Nr(e);return r.players[n].gukjinUse=t,r}function d0(e,n){return vt(e.players[n],e.rules).base}const Gl={goRate:.3,preference:{gwang:.25,yeol:.25,tti:.25,pi:.25},samples:0};function z2(e,n){const t=n.weights;if(e.kind==="gwang")return(e.isBiGwang?7:10)*t.gwang;if(e.isGukjin)return 4.5*Math.max(t.yeol,t.pi);if(e.kind==="yeol")return(e.isGodori?5.5*t.godori:3)*t.yeol;if(e.kind==="tti"){const r=e.tti==="hong"?t.hongdan:e.tti==="cheong"?t.cheongdan:e.tti==="cho"?t.chodan:.6;return 3.5*t.tti*r}return(e.piValue??1)*1.2*t.pi}function cn(e,n,t,r){const i=e.players[n].captured;let l=z2(t,r);if(t.kind==="gwang"){const o=i.gwang.length;o===2&&(l+=12),o>=3&&(l+=8)}if(t.isGodori&&i.yeol.filter(s=>s.isGodori).length===2&&(l+=10),t.kind==="tti"&&t.tti&&t.tti!=="bi"){const o=i.tti.filter(s=>s.tti===t.tti).length;o===2?l+=9:o===1&&(l+=2)}return t.kind==="pi"&&i.pi.reduce((s,a)=>s+(a.piValue??1),0)>=8&&(l+=3*(t.piValue??1)),t.kind==="yeol"&&i.yeol.length>=4&&(l+=3),l}function D2(e,n,t,r){const i=r.inference;if(i<=0)return 0;const l=cn(e,n,t,r),o=f0(e,n===0?1:0),s=Xs(e,n===0?1:0,t.month),a=o===0?0:s/o*e.players[n].hand.length;return l*i*Math.min(1,a)*.8}function ld(e,n,t,r=Gl){const i=e.turn,l=i===0?1:0,o=e.players[i].hand;if(o.length===0)return{cardId:"",bomb:!1,score:0};if(t.next()<n.mistakeRate)return{cardId:t.pick(o).id,bomb:!1,score:0};const s=n.aggression>.45?cc(e,i):[],a=f0(e,i);let u={cardId:o[0].id,bomb:!1,score:-1/0};for(const f of o){const h=Ys(e,f.month);let p=0;if(h.length===0){p-=D2(e,l,f,n),p-=cn(e,i,f,n)*.25;const y=Xs(e,i,f.month);p+=y/Math.max(1,a)*3*n.inference}else if(h.length===1){p+=cn(e,i,f,n)+cn(e,i,h[0],n),p+=cn(e,l,h[0],n)*n.inference*.5;const y=Xs(e,i,f.month),k=e.deck.length===0?0:Math.min(1,y/Math.max(1,a));p-=k*2.5*n.inference}else{const y=[...h].sort((k,b)=>cn(e,i,b,n)-cn(e,i,k,n));p+=cn(e,i,f,n)+cn(e,i,y[0],n),p+=cn(e,l,y[0],n)*n.inference*.5,h.length>=3&&(p+=8)}n.patternLearning>0&&(p-=A2(f,r)*n.patternLearning*4),p>u.score&&(u={cardId:f.id,bomb:!1,score:p})}for(const f of s){const p=Ys(e,f).reduce((y,k)=>y+cn(e,i,k,n),0)+10*n.aggression;p>u.score&&(u={cardId:e.players[i].hand.find(k=>k.month===f).id,bomb:!0,score:p})}return u}function f0(e,n){const t=n===0?1:0;return e.deck.length+e.players[t].hand.length}function Xs(e,n,t){if(t===0)return 0;const r=e.players[n].hand.filter(i=>i.month===t).length+e.field.filter(i=>i.month===t).length+[...e.players[0].captured.gwang,...e.players[0].captured.yeol,...e.players[0].captured.tti,...e.players[0].captured.pi,...e.players[1].captured.gwang,...e.players[1].captured.yeol,...e.players[1].captured.tti,...e.players[1].captured.pi].filter(i=>i.month===t).length;return Math.max(0,4-r)}function A2(e,n){if(n.samples<3)return 0;const t=n.preference;return e.kind==="gwang"?t.gwang:e.kind==="yeol"?t.yeol:e.kind==="tti"?t.tti:t.pi}function od(e,n,t){const r=e.pendingChoice?.candidates??[];if(r.length===0)return"";if(t.next()<n.mistakeRate)return t.pick(r).id;const i=e.turn;return[...r].sort((l,o)=>cn(e,i,o,n)-cn(e,i,l,n))[0].id}function T2(e,n,t,r=Gl){const i=e.turn,l=i===0?1:0,o=d0(e,i),s=vt(e.players[l],e.rules).base,a=e.players[i].hand.length;if(t.next()<n.mistakeRate)return{action:t.next()<n.greed?"go":"stop",confidence:.2};if(a<=1)return{action:"stop",confidence:.85};if(o>=n.stopScore)return{action:"stop",confidence:.9};const u=Math.min(4.5,.6+a*.5)*(.7+.7*n.greed),f=e.players[l].hand.length,h=Math.max(0,e.rules.minScoreToStop-s),p=e.players[l].captured,y=p.pi.reduce((w,x)=>w+(x.piValue??1),0);let k=0;p.gwang.length>=2&&(k+=.16),p.yeol.filter(w=>w.isGodori).length>=2&&(k+=.1);for(const w of["hong","cheong","cho"])p.tti.filter(x=>x.tti===w).length>=2&&(k+=.1);y>=8&&(k+=.12);const R=P2(.06+f/10*Math.max(0,1-h/9)*1.1+k)*(o*(e.rules.goBak?2:1)+3),m=(r.goRate-.3)*n.patternLearning,g=u-R*n.inference+m;return{action:g>0?"go":"stop",confidence:Math.min(1,Math.abs(g)/3)}}function P2(e){return Math.max(0,Math.min(1,e))}function B2(e,n){const t=e.turn,r=e.players[t].captured,i=r.yeol.length,l=r.pi.reduce((a,u)=>a+(u.piValue??1),0),o=i>=5?1+(i-5):0,s=l+2>=10?l+2-9:0;return s>o?"ssangpi":o>s?"yeol":n.weights.pi>=n.weights.yeol?"ssangpi":"yeol"}const Ae=0,yn=1,Js=1550,sd=420,R2={jjok:"낸 패가 깔리자마자 뒤집은 패가 같은 월 — 둘 다 가져갑니다",ttadak:"같은 월 네 장을 한 턴에 — 상대 피 한 장을 받습니다",ppeok:"세 장이 묶여 바닥에 남습니다. 나중에 먹는 사람이 임자",jappeok:"내가 깔아둔 뻑을 내가 또 만들었습니다",sseul:"바닥을 싹 비웠습니다 — 상대 피 한 장을 받습니다",bomb:"같은 월을 한 번에 몰아냈습니다",chongtong:"한 월 네 장이 처음부터 손에 있었습니다"},F2={jjok:"쪽!",ttadak:"따닥!",ppeok:"뻑!",jappeok:"자뻑!",sseul:"쓸!",bomb:"폭탄!",heundeulgi:"흔들기!",chongtong:"총통!",go:"고!",stop:"스톱!"},O2=new Set(["ppeok","jappeok","jjok","ttadak","sseul"]),G2=980,U2={low:["이건 제가 가져갈게요.","어, 이거 제 거죠?","가져갑니다."],mid:["이건 놓칠 수 없죠.","아, 이거 기다렸어요.","잘 들어왔네요."],high:["이거 가져가도 안 삐질 거죠?","오늘은 제가 좀 잘되네요.","봤어요? 방금."]},V2={low:["어! 이거 큰 거 아니에요?","이게 오네요.","와, 이건 좋은데요."],mid:["이건 진짜 큰 거예요.","미안해요, 이건 못 양보해요.","오늘 이거 하나로 끝날지도."],high:["이건 자랑해도 되죠?","놀란 표정 좀 보여줘요.","이건 제가 가져갈게요. 나중에 갚을게요."]},H2={low:["아, 그건 제가 보고 있었는데.","그거 가져가시네요.","음..."],mid:["그건 좀 아픈데요.","아까워라. 그거 노리고 있었어요.","다음 판에 돌려받을 거예요."],high:["그거 알고 가져간 거죠?","치사해요. 그거 제 거였는데.","그렇게 가져가면 삐질 거예요."]},Z2={low:["어... 그건 큰 건데.","그걸 가져가시는구나.","아."],mid:["그건 진짜 아파요.","거기서 그게 나오다니.","한 판 뒤집혔네요."],high:["그건 좀 너무해요.","그거 가져갈 줄 알았으면 안 뒀죠.","오늘은 제가 지겠네요."]};function ad(e){const n=e.captured;return{total:n.gwang.length+n.yeol.length+n.tti.length+n.pi.length,big:n.gwang.length+n.yeol.length}}function Q2(e,n){for(const t of e){if(t.type==="ppeok"||t.type==="jappeok")return t.player===n?"sulk":"smile";if(t.type==="sseul"||t.type==="ttadak"||t.type==="jjok")return t.player===n?"smile":"surprise";if(t.type==="bomb"||t.type==="heundeulgi")return t.player===n?"serious":"surprise"}return"normal"}function Rn(e,n){return e[Math.floor(n()*e.length)]??e[0]}function W2(e){const{tenant:n,stage:t,affection:r,losingStreak:i}=e,l=ec(r),o=v.useMemo(()=>jm(n,t),[n,t]),s=v.useMemo(()=>e.seed??L2(),[e.seed]),a=v.useRef(o0(s^2654435769)),u=v.useCallback(()=>a.current.next(),[]),[f,h]=v.useState(()=>I2({rules:e.rules,seed:s,firstPlayer:Ae})),[p,y]=v.useState(()=>Rn(n.lines.matchStart[l],Math.random)),[k,b]=v.useState("normal"),[R,m]=v.useState(null),[g,$]=v.useState(null),[w,x]=v.useState(null),N=v.useRef(0),[E,_]=v.useState(!1),[D,C]=v.useState(!1),z=v.useRef(0),F=v.useRef([]),W=e.profile??Gl,Q=v.useCallback((Z,V)=>{const ye=window.setTimeout(Z,V);F.current.push(ye)},[]);v.useEffect(()=>()=>{F.current.forEach(clearTimeout),F.current=[]},[]);const re=v.useCallback((Z,V,ye)=>{z.current++,m({key:z.current,text:Z,by:V,detail:ye})},[]),me=v.useRef({me:{total:0,big:0},ai:{total:0,big:0}}),ue=v.useCallback(Z=>{const V=Z.events,ye={me:ad(Z.players[Ae]),ai:ad(Z.players[yn])},Qe=me.current,Oe=ye.ai.total-Qe.ai.total,Ge=ye.me.total-Qe.me.total,an=ye.ai.big>Qe.ai.big,_n=ye.me.big>Qe.me.big;me.current=ye;const Er=Q2(V,yn);Er!=="normal"?b(Er):Oe>0?(b(an?"win":"smile"),y(Rn(an?V2[l]:U2[l],u))):Ge>0?(b(_n?"lose":"sulk"),y(Rn(_n?Z2[l]:H2[l],u))):b("normal");for(const Me of V){const Mr=F2[Me.type];if(Mr){const Lr=()=>re(Mr,Me.player,Me.detail??R2[Me.type]);O2.has(Me.type)?Q(Lr,G2):Lr();break}}const mn=V.find(Me=>(Me.type==="ppeok"||Me.type==="jappeok")&&Me.player===yn),uo=V.find(Me=>Me.type==="sseul"&&Me.player===Ae);mn?y(Rn(n.lines.ppeok[l],u)):uo&&y(Rn(n.lines.sseulVictim[l],u))},[re,Q,u,n,l]);v.useEffect(()=>{me.current={me:{total:0,big:0},ai:{total:0,big:0}}},[s]);const L=v.useCallback(Z=>{const V=e.busyUntil?.current??0;return Math.max(Z,V-performance.now()+Z*.35)},[e.busyUntil]);v.useEffect(()=>{if(!(f.phase==="awaitGoStop"&&f.turn===Ae)){C(!1);return}C(!1);const V=window.setTimeout(()=>C(!0),L(260));return()=>window.clearTimeout(V)},[f,L]),v.useEffect(()=>{if(f.phase==="ended")return;if(!(f.turn===yn)){_(!1);return}if(_(!0),f.phase==="awaitPlay"){Q(()=>{let V=f;const ye=Ks(V,yn);ye.length>0&&u()<o.aggression&&(V=Ju(V,yn,ye[0]),re("흔들기!",yn)),V=id(V,yn,B2(V,o));const Qe=ld(V,o,a.current,W);if(!Qe.cardId)return;const Oe=V.players[yn].hand.find(Ge=>Ge.id===Qe.cardId);Oe&&(N.current+=1,x({key:N.current,card:Oe,bomb:Qe.bomb}),Q(()=>{const Ge=ed(V,Qe.cardId,Qe.bomb);ue(Ge),x(null),h(Ge)},Js))},L(sd));return}if(f.phase==="awaitChoice"){Q(()=>{const V=nd(f,od(f,o,a.current));ue(V),h(V)},L(sd));return}f.phase==="awaitGoStop"&&Q(()=>{const V=T2(f,o,a.current,W),ye=V.action==="go"?n.lines.go[l]:n.lines.stop[l],Qe=Rn(ye,u);$({action:V.action,line:Qe}),b(V.action==="go"?"serious":"win"),Q(()=>{$(null);const Oe=V.action==="go"?td(f):rd(f);re(V.action==="go"?"고!":"스톱!",yn),h(Oe)},1600)},L(500))},[f,o,W,n,l,Q,ue,re,u,L]),v.useEffect(()=>{if(f.phase!=="ended"||!f.settlement)return;const Z=f.settlement.winner;Z===yn?(y(Rn(n.lines.win[l],u)),b("win")):Z===Ae?(y(Rn(n.lines.lose[l],u)),b("lose")):(y("나가리네. 다시 하자."),b("normal"))},[f.phase,f.settlement,n,l,u]);const A=v.useCallback((Z,V=!1)=>{if(f.turn!==Ae||f.phase!=="awaitPlay")return;const ye=ed(f,Z,V);ue(ye),h(ye)},[f,ue]),U=v.useCallback(Z=>{if(f.phase!=="awaitChoice"||f.turn!==Ae)return;const V=nd(f,Z);ue(V),h(V)},[f,ue]),Y=v.useCallback(Z=>{f.phase!=="awaitGoStop"||f.turn!==Ae||(re(Z==="go"?"고!":"스톱!",Ae),h(Z==="go"?td(f):rd(f)))},[f,re]),ce=v.useCallback(Z=>{h(Ju(f,Ae,Z)),re("흔들기!",Ae)},[f,re]),Sn=v.useCallback(Z=>h(id(f,Ae,Z)),[f]),Je={state:f,line:p,expression:k,shout:R,askGoStop:f.phase==="awaitGoStop"&&f.turn===Ae&&D,aiGoStop:g,hint:i>=3?Rn(n.lines.hints,()=>.5):null,aiThrow:w,myScore:d0(f,Ae),oppScore:vt(f.players[yn],f.rules).base,busy:E},Ce=v.useCallback(()=>{if(!(f.turn!==Ae&&f.phase!=="awaitGoStop")){if(f.phase==="awaitPlay"){const Z=ld(f,o,a.current,Gl);Z.cardId&&A(Z.cardId,Z.bomb);return}if(f.phase==="awaitChoice"){U(od(f,o,a.current));return}f.phase==="awaitGoStop"&&Y("stop")}},[f,o,A,U,Y]);return{view:Je,play:A,choose:U,goStop:Y,shake:ce,setGukjin:Sn,autoMove:Ce,shakeable:Ks(f,Ae),bombable:cc(f,Ae)}}const Jn=0,q2=980,Ko=25e3,cd=100,K2=700,Y2=900;function X2(e,n){return n.length>e.length?q2:0}const J2=1;function ey(e){const n=[["gwang",e.gwang.length*3],["yeol",e.yeol.length],["tti",e.tti.length],["pi",e.pi.length*.6]];return n.sort((t,r)=>r[1]-t[1]),n[0][0]}function ud({captured:e,side:n,flying:t,stagedId:r}){const i=[["광",e.gwang],["띠",e.tti],["열",e.yeol],["피",e.pi]],l=i.reduce((u,[,f])=>u+f.length,0),[o,s]=v.useState(0),a=v.useRef(l);return v.useEffect(()=>{l>a.current&&s(u=>u+1),a.current=l},[l]),c.jsxs("div",{className:`piles ${o?"got":""} ${t?"flying":""}`,children:[c.jsxs("div",{className:"piles-head",children:[n,c.jsx("b",{children:l},o)]}),i.map(([u,f])=>c.jsxs("div",{className:`pile ${f.length===0?"pile-empty":""}`,children:[c.jsx("span",{className:"pile-label",children:u}),c.jsx("div",{className:"pile-cards",children:f.map((h,p)=>c.jsx("img",{className:"pile-card","data-cid":h.id,"data-zone":n==="내 것"?"pile-me":"pile-opp","data-month":h.month,style:{marginLeft:p===0?0:"var(--pile-overlap)",visibility:h.id===r?"hidden":void 0},src:qs(h),alt:h.name,draggable:!1},h.id))}),f.length>0&&c.jsx("span",{className:"pile-n",children:f.length})]},u))]})}function ny({tenant:e,stage:n,affection:t,rules:r,profile:i,losingStreak:l,points:o,onFinish:s,onQuit:a}){const[u,f]=v.useState(!1),h=v.useRef(0),p=v.useRef(0),{view:y,play:k,choose:b,goStop:R,shake:m,shakeable:g,bombable:$,autoMove:w}=W2({tenant:e,stage:n,affection:t,rules:r,profile:i,losingStreak:l,busyUntil:p}),x=y.state,N=x.players[Jn],E=x.players[J2],[_,D]=v.useState(null),[C,z]=v.useState(!1),[F,W]=v.useState(null),[Q,re]=v.useState(0),me=v.useRef(x.deck.length),ue=v.useRef(null),L=M2(ue,[x.field,x.players,x.deck.length],x.phase!=="ended",j=>{p.current=performance.now()+j,f(!0),window.clearTimeout(h.current),h.current=window.setTimeout(()=>f(!1),j)},(j,O)=>{window.setTimeout(()=>{ce({key:Date.now(),x:j.left+j.width/2,y:j.top+j.height/2,w:j.width,h:j.height}),re(te=>te+1)},O)});v.useEffect(()=>()=>window.clearTimeout(h.current),[]);const[A,U]=v.useState(null),[Y,ce]=v.useState(null),Sn=v.useRef(null),Je=v.useRef(null),[Ce,Z]=v.useState(0),[V,ye]=v.useState(null);v.useEffect(()=>{if(x.phase==="ended"){const j=window.setTimeout(()=>z(!0),900);return()=>window.clearTimeout(j)}},[x.phase]),v.useEffect(()=>{x.deck.length<me.current&&re(j=>j+1),me.current=x.deck.length},[x.deck.length]),v.useEffect(()=>{if(Q===0)return;const j=window.setTimeout(()=>re(0),420);return()=>window.clearTimeout(j)},[Q]);const Oe=x.turn===Jn&&!y.busy&&x.phase==="awaitPlay"&&!u&&!A,Ge=x.turn===Jn&&x.phase==="awaitChoice",an=Ge?x.pendingChoice:null,_n=Oe||Ge||y.askGoStop,Er=sc(e.id,"full",Ce?"surprise":y.expression),[mn,uo]=v.useState(!1),[Me,Mr]=v.useState(Ko),Lr=`${x.phase}-${x.turn}-${N.hand.length}-${x.field.length}`;v.useEffect(()=>{Mr(Ko)},[Lr]),v.useEffect(()=>{if(!_n||mn)return;const j=window.setInterval(()=>Mr(O=>Math.max(0,O-cd)),cd);return()=>window.clearInterval(j)},[_n,mn,Lr]),v.useEffect(()=>{if(!_n||!mn&&Me>0)return;const j=window.setTimeout(w,mn?K2:0);return()=>window.clearTimeout(j)},[_n,mn,Me,w]);const uc=j=>{const O=ue.current;if(!O)return null;const te=x.field.find(X=>X.month===j.month);if(te){const X=O.querySelector(`[data-cid="${te.id}"]`);if(X){const De=X.getBoundingClientRect(),Ut=O.querySelector(".board-mycap")?.getBoundingClientRect(),Vt=l0(De.left,Ut?.left??De.left);return new DOMRect(i0(De.left,De.width,Vt),De.top,De.width,De.height)}}const K=O.querySelector(".felt");if(!K)return null;const B=K.getBoundingClientRect();return new DOMRect(B.left+B.width/2-24,B.top+B.height*.62,48,72)},dc=(j,O)=>{const B=ue.current?.querySelector(`.board-hand [data-cid="${j.id}"]`)?.getBoundingClientRect(),X=uc(j);if(!B||!X){k(j.id,O);return}U({card:j,from:B,to:X,bomb:O})},g0=j=>{if(!(!Oe||A)){if($.includes(j.month)){_===j.id?(dc(j,!0),D(null)):D(j.id);return}dc(j,!1),D(null)}};v.useEffect(()=>{if(!A)return;const j=Sn.current,O=ue.current;if(!j||!O){k(A.card.id,A.bomb),U(null);return}const te=O.getBoundingClientRect(),{from:K,to:B}=A,X=te.left+te.width/2-K.width/2-K.left,De=te.top+te.height*.36-K.height/2-K.top,Ut=B.left+B.width/2-K.width/2-K.left,Vt=B.top+B.height/2-K.height/2-K.top,ho=B.width/K.width,po=j.animate([{transform:"translate(0,0) scale(1) rotate(0deg)",offset:0,easing:"cubic-bezier(.2,.9,.25,1)"},{transform:`translate(${X}px, ${De}px) scale(2.5) rotate(-7deg)`,offset:.42},{transform:`translate(${X}px, ${De-6}px) scale(2.45) rotate(-5deg)`,offset:.6,easing:"cubic-bezier(.7,0,.9,.6)"},{transform:`translate(${Ut}px, ${Vt}px) scale(${(ho*1.06).toFixed(3)}) rotate(2deg)`,offset:1}],{duration:560,fill:"forwards"}),go=window.setTimeout(()=>{ce({key:Date.now(),x:B.left+B.width/2,y:B.top+B.height/2,w:B.width,h:B.height}),re(yo=>yo+1),L.setOrigin(A.card.id,B),k(A.card.id,A.bomb)},545),mo=window.setTimeout(()=>U(null),610);return()=>{window.clearTimeout(go),window.clearTimeout(mo),po.cancel()}},[A]),v.useEffect(()=>{if(!Y)return;const j=window.setTimeout(()=>ce(null),620);return()=>window.clearTimeout(j)},[Y]),v.useEffect(()=>{const j=y.aiThrow;if(!j)return;const O=Je.current,te=ue.current;if(!O||!te)return;const K=te.querySelectorAll(".opp-hand .ohand-slot"),B=(K[K.length-1]??te.querySelector(".opp-hand"))?.getBoundingClientRect(),X=uc(j.card);if(!B||!X||B.width===0)return;const De=te.getBoundingClientRect(),Ut=De.left+De.width/2-B.width/2-B.left,Vt=De.top+De.height*.36-B.height/2-B.top,ho=X.left+X.width/2-B.width/2-B.left,po=X.top+X.height/2-B.height/2-B.top;O.style.left=`${B.left}px`,O.style.top=`${B.top}px`,O.style.width=`${B.width}px`,O.style.height=`${B.height}px`;const go=O.animate([{transform:"translate(0,0) scale(1) rotateY(180deg)",offset:0,easing:"cubic-bezier(.2,.9,.25,1)"},{transform:`translate(${Ut}px, ${Vt}px) scale(2.4) rotateY(0deg) rotate(6deg)`,offset:.46},{transform:`translate(${Ut}px, ${Vt-6}px) scale(2.35) rotate(4deg)`,offset:.66,easing:"cubic-bezier(.7,0,.9,.6)"},{transform:`translate(${ho}px, ${po}px) scale(${(X.width/B.width*1.06).toFixed(3)}) rotate(-2deg)`,offset:1}],{duration:Js,fill:"forwards"}),mo=window.setTimeout(()=>{ce({key:Date.now(),x:X.left+X.width/2,y:X.top+X.height/2,w:X.width,h:X.height}),re(yo=>yo+1),L.setOrigin(j.card.id,X)},Js-20);return()=>{window.clearTimeout(mo),go.cancel()}},[y.aiThrow?.key]),v.useEffect(()=>{!y.shout||y.shout.by!==Jn||["쪽!","따닥!","쓸!","폭탄!","총통!"].includes(y.shout.text)&&Z(j=>j+1)},[y.shout?.key]),v.useEffect(()=>{if(!Ce)return;const j=window.setTimeout(()=>Z(0),1100);return()=>window.clearTimeout(j)},[Ce]),v.useEffect(()=>{const j=y.shout;if(!j||j.by!==Jn)return;const te={"쪽!":["쪽이지롱~","쪽! 한 장 내놔.","어? 쪽이네?"],"따닥!":["따닥이지롱~","따닥! 미안~","네 장 다 내 거."],"쓸!":["싹 쓸었다!","바닥이 비었네~","쓸! 하나 더 받을게."],"폭탄!":["폭탄이다!","한 번에 간다."],"총통!":["총통!","시작부터 네 장이야."]}[j.text];te&&ye({key:j.key,text:te[Math.floor(Math.random()*te.length)]})},[y.shout?.key]),v.useEffect(()=>{if(!V)return;const j=window.setTimeout(()=>ye(null),2600);return()=>window.clearTimeout(j)},[V]);const fc=14,St=fc/2,hc=v.useMemo(()=>{const j=Math.floor(St/2),O=[];for(let K=0;K<St;K+=1){const B=j+Math.ceil(K/2)*(K%2===0?1:0),X=K===0?j:K%2===1?j-Math.ceil(K/2):B;X>=0&&X<St&&!O.includes(X)&&O.push(X)}for(let K=0;K<St;K+=1)O.includes(K)||O.push(K);const te=[];for(const K of O)te.push(K),te.push(St+K);return te},[]),m0=v.useRef(new Map),pc=v.useMemo(()=>{const j=new Map;for(const B of x.field){const X=j.get(B.month);X?X.push(B):j.set(B.month,[B])}const O=m0.current;for(const B of[...O.keys()])j.has(B)||O.delete(B);const te=new Set(O.values());for(const B of j.keys()){if(O.has(B))continue;const X=hc.find(De=>!te.has(De))??0;O.set(B,X),te.add(X)}const K=Array.from({length:fc},()=>null);for(const[B,X]of j)K[O.get(B)]={month:B,cards:X};return K},[x.field,hc]),y0=x.field.length<=8?1:x.field.length<=10?.86:x.field.length<=12?.74:x.field.length<=16?.62:.52,$0=pc.slice(0,St),w0=pc.slice(St),gc=y.myScore*e.rate,v0=Math.round(y.oppScore*e.rate*lc),fo=v.useMemo(()=>x.settlement?{won:x.settlement.winner===Jn,draw:x.settlement.winner===null,settlement:x.settlement,playerWentGo:N.goCount>0,focus:ey(N.captured),score:x.settlement.winner===Jn?x.settlement.total:0,settlementTotal:x.settlement.total}:null,[x.settlement,N]),Ir=Object.keys(x.ppeokPiles).sort().join(","),[Gt,x0]=v.useState(Ir);v.useEffect(()=>{if(Gt===Ir)return;const j=window.setTimeout(()=>x0(Ir),X2(Gt,Ir));return()=>window.clearTimeout(j)},[Ir,Gt]);const k0=v.useMemo(()=>new Set(Gt?Gt.split(",").map(Number):[]),[Gt]),[zi,mc]=v.useState(null),yc=v.useRef(new Set);v.useLayoutEffect(()=>{const O=[...N.captured.pi,...E.captured.pi].filter(K=>K.isBonus).find(K=>!yc.current.has(K.id));if(!O)return;yc.current.add(O.id),mc(O);const te=window.setTimeout(()=>mc(null),Y2);return()=>window.clearTimeout(te)},[N.captured.pi,E.captured.pi]);const $c=(j,O)=>j?b0(j):c.jsx("div",{className:"fslot-empty"},`empty-${O}`),b0=j=>{const O=k0.has(j.month);return c.jsxs("div",{className:`fstack ${O?"ppeok":""}`,children:[j.cards.map((te,K)=>{const B=Ge&&x.pendingChoice?.candidates.some(X=>X.id===te.id);return c.jsx("div",{className:`fslot ${B?"candidate":""} ${F===te.month?"match":""}`,style:{marginLeft:K===0?0:O?"var(--ppeok-overlap)":"var(--stack-overlap)",zIndex:K},children:c.jsx(Xi,{card:te,zone:"field",selectable:!!B,onClick:()=>B&&b(te.id)})},te.id)}),O&&c.jsxs("span",{className:"fstack-tag",children:["뻑 ",j.cards.length,"장"]})]},j.month)},S0=v.useMemo(()=>{const j=vt(x.players[Jn],x.rules),O=[];return j.gwangScore>0&&O.push({label:"광",score:j.gwangScore,note:j.gwangLabel??void 0}),j.ttiScore>0&&O.push({label:"띠",score:j.ttiScore,note:j.ttiLabels.join(" · ")||void 0}),j.yeolScore>0&&O.push({label:"열",score:j.yeolScore,note:j.yeolLabels.join(" · ")||void 0}),j.piScore>0&&O.push({label:"피",score:j.piScore,note:`${j.piCount}장`}),O},[x]);return c.jsxs("div",{className:"screen match-screen",children:[c.jsx(Ii,{bg:"maru",time:"night"}),c.jsxs("div",{className:"layer board",ref:ue,children:[c.jsxs("div",{className:`board-opp ${Ce?"startled":""} ${n2(e.id)?"has-photo":""}`,style:{"--opp-art":Er?`url("${Er}")`:void 0},children:[c.jsx(Hn,{tenant:e,expression:Ce?"surprise":y.expression,outfit:n>=10?2:0}),Ce>0&&c.jsx("span",{className:"startle-mark",children:"!"}),c.jsxs("div",{className:"chip-body",children:[c.jsxs("div",{className:"chip-name",children:[e.name,E.goCount>0&&c.jsxs("span",{className:"badge",children:[E.goCount,"고"]})]}),c.jsxs("div",{className:"chip-score",children:[y.oppScore,c.jsx("small",{children:"점"})]})]}),c.jsx("button",{className:"iconbtn quit",onClick:a,"aria-label":"나가기",children:"✕"}),c.jsx("div",{className:"speech",children:y.line})]}),c.jsx("div",{className:"board-oppcap",children:c.jsx(ud,{captured:E.captured,side:"상대",flying:u,stagedId:zi?.id})}),c.jsxs("div",{className:"board-field",children:[c.jsxs("div",{className:"opp-hand","aria-label":`${e.name}의 남은 패 ${E.hand.length}장`,children:[E.hand.map((j,O)=>c.jsx("div",{className:"ohand-slot",style:{marginLeft:O===0?0:"var(--ohand-overlap)"},children:c.jsx(Wo,{small:!0})},j.id)),c.jsx("span",{className:"ohand-n",children:E.hand.length})]}),c.jsxs("div",{className:`felt ${Q?"slam":""} ${Ge?"choosing":""}`,style:{"--field-scale":y0},children:[c.jsxs("span",{className:"stake",children:["점당 ",e.rate,"P"]}),c.jsx("div",{className:"field-row",children:$0.map($c)}),c.jsxs("div",{className:"field-mid",children:[an&&c.jsxs("div",{className:"pending",children:[c.jsx(Xi,{card:an.played}),c.jsx("span",{className:"pending-tag",children:an.source==="deck"?"뒤집은 패":"낸 패"})]}),zi&&c.jsxs("div",{className:"pending bonus",children:[c.jsx(Xi,{card:zi}),c.jsx("span",{className:"pending-tag",children:"보너스"})]}),c.jsxs("div",{className:"deck","data-deck":"",children:[c.jsx(Wo,{}),c.jsx("span",{className:"deck-n",children:x.deck.length})]}),c.jsx("div",{className:"deck-label",children:"남은 패"})]}),c.jsx("div",{className:"field-row",children:w0.map($c)})]}),Ge&&c.jsxs("div",{className:"felt-notice",children:[an?`${Hu[an.played.month]}(${an.played.month}월)이 바닥에 두 장입니다. `:"같은 월이 두 장입니다. ",c.jsx("b",{children:"빛나는 패"})," 중에서 가져올 것을 고르세요."]}),y.hint&&!Ge&&c.jsxs("div",{className:"felt-notice hint",children:[e.name,": “",y.hint,"”"]})]}),c.jsx("div",{className:"board-mycap",children:c.jsx(ud,{captured:N.captured,side:"내 것",flying:u,stagedId:zi?.id})}),c.jsxs("div",{className:"board-side",children:[c.jsxs("div",{className:"pcard opp",children:[c.jsxs("div",{className:"pcard-head",children:[c.jsx("span",{className:"pcard-name",children:e.name}),E.goCount>0&&c.jsxs("span",{className:"badge",children:[E.goCount,"고"]})]}),c.jsxs("div",{className:"pcard-score",children:[y.oppScore,c.jsx("small",{children:"점"})]}),c.jsxs("div",{className:"pcard-sub",children:["손패 ",E.hand.length,"장"]})]}),c.jsxs("div",{className:"pcard me",children:[c.jsxs("div",{className:"pcard-head",children:[c.jsx("span",{className:"pcard-name",children:"나"}),N.goCount>0&&c.jsxs("span",{className:"badge",children:[N.goCount,"고"]})]}),c.jsxs("div",{className:"pcard-score",children:[y.myScore,c.jsx("small",{children:"점"})]}),c.jsxs("div",{className:"pcard-sub",children:[o.toLocaleString()," P"]})]}),c.jsxs("div",{className:"scorebox",children:[c.jsxs("div",{className:"scorebox-row",children:[c.jsx("b",{children:y.myScore}),c.jsx("small",{children:"점"}),c.jsx("span",{className:"x",children:"×"}),c.jsx("b",{children:e.rate}),c.jsx("small",{children:"P"})]}),c.jsxs("div",{className:"scorebox-eq",children:["= ",c.jsxs("strong",{children:[gc.toLocaleString(),"P"]})]}),c.jsxs("div",{className:"scorebox-risk",children:["지면 ",c.jsxs("span",{children:["-",v0.toLocaleString(),"P"]})]})]}),c.jsxs("div",{className:"turnrow",children:[c.jsx("div",{className:"turnline",children:_&&$.includes(N.hand.find(j=>j.id===_)?.month??0)?"한 번 더 누르면 폭탄":u||A?"":Oe?"낼 패를 고르세요":y.busy?`${e.name}의 차례…`:Ge?"가져올 패를 고르세요":""}),g.length>0&&Oe&&c.jsxs("button",{className:"btn shake",onClick:()=>m(g[0]),children:["흔들기 ",Hu[g[0]]??g[0]]}),c.jsxs("div",{className:`turnclock ${_n&&!mn?"on":""} ${Me<=5e3?"hurry":""}`,children:[c.jsx("i",{style:{width:`${Math.round(Me/Ko*100)}%`}}),c.jsx("span",{children:_n&&!mn?`${Math.ceil(Me/1e3)}초`:"—"})]}),c.jsxs("button",{className:`btn autobtn ${mn?"on":""}`,onClick:()=>uo(j=>!j),"aria-pressed":mn,children:["자동치기 ",mn?"켬":"끔"]})]})]}),c.jsxs("div",{className:"board-hand",style:{"--hand-n":N.hand.length},children:[N.hand.map(j=>c.jsx("div",{className:"hand-slot",onPointerDown:()=>Oe&&W(j.month),onPointerEnter:()=>Oe&&W(j.month),onPointerLeave:()=>W(null),onPointerUp:()=>W(null),children:c.jsx(Xi,{card:j,zone:"hand",selectable:Oe,chosen:_===j.id,hidden:A?.card.id===j.id,onClick:()=>g0(j)})},j.id)),N.hand.length===0&&c.jsx(Wo,{small:!0})]}),A&&c.jsx("img",{ref:Sn,className:"hero-card",src:qs(A.card),alt:A.card.name,style:{left:A.from.left,top:A.from.top,width:A.from.width,height:A.from.height},draggable:!1}),c.jsx("img",{ref:Je,className:"hero-card ai",style:{display:y.aiThrow?"block":"none"},src:y.aiThrow?qs(y.aiThrow.card):void 0,alt:"",draggable:!1}),Y&&c.jsxs("span",{className:"impact",style:{left:Y.x,top:Y.y},children:[c.jsx("i",{}),c.jsx("i",{}),c.jsx("b",{style:{width:Y.w,height:Y.h,marginLeft:-Y.w/2,marginTop:-Y.h/2}})]},Y.key),V&&c.jsx("div",{className:"taunt",children:V.text},V.key),y.shout&&c.jsxs("div",{className:"shout",children:[c.jsx("span",{children:y.shout.text}),y.shout.detail&&c.jsx("em",{className:"shout-note",children:y.shout.detail})]},y.shout.key),y.askGoStop&&c.jsxs("div",{className:"gostop-overlay",children:[c.jsx(Hn,{tenant:e,expression:"serious",outfit:n>=10?2:0}),c.jsxs("div",{className:"gostop-line",children:[y.myScore,"점입니다. 더 가시겠어요?",c.jsx("div",{className:"gostop-tally",children:S0.map(j=>c.jsxs("span",{children:[c.jsx("em",{children:j.label}),c.jsx("b",{children:j.score}),c.jsx("small",{children:"점"}),j.note&&c.jsx("i",{children:j.note})]},j.label))}),c.jsxs("strong",{style:{color:"var(--ok)",fontSize:18},children:["지금 스톱하면 +",gc.toLocaleString(),"P"]}),c.jsx("br",{}),c.jsxs("span",{style:{color:"var(--paper-dim)",fontSize:13},children:["고를 하면 점수가 오르지만, 상대가 이기면 고박으로 두 배를 물어줍니다. 점당 ",e.rate,"P 라 크게 뒤집히면 그만큼 나갑니다."]})]}),c.jsxs("div",{className:"gostop-btns",children:[c.jsx("button",{className:"btn gold go",onClick:()=>R("go"),children:"고"}),c.jsx("button",{className:"btn stop",onClick:()=>R("stop"),children:"스톱"})]})]}),y.aiGoStop&&c.jsxs("div",{className:"gostop-overlay",children:[c.jsx(Hn,{tenant:e,expression:y.aiGoStop.action==="go"?"serious":"win",outfit:n>=10?2:0}),c.jsxs("div",{className:"gostop-line",children:[c.jsx("strong",{style:{color:"var(--lamp)"},children:e.name}),c.jsx("br",{}),y.aiGoStop.line]})]}),C&&fo&&c.jsx(ty,{tenant:e,outcome:fo,onNext:()=>s(fo)})]})]})}function ty({tenant:e,outcome:n,onNext:t}){const r=n.settlement,i=r?.breakdown,l=e.rate;return c.jsxs("div",{className:"result",children:[c.jsx("h2",{style:{color:n.won?"var(--lamp)":n.draw?"var(--paper-dim)":"var(--accent)"},children:n.draw?"나가리":n.won?"승리":"패배"}),r&&c.jsxs("div",{className:"total",children:[r.total,"점"]}),i&&c.jsxs("div",{className:"result-rows",children:[i.gwangScore>0&&c.jsxs("div",{children:[c.jsx("span",{children:i.gwangLabel}),c.jsxs("span",{children:[i.gwangScore,"점"]})]}),i.ttiScore>0&&c.jsxs("div",{children:[c.jsx("span",{children:i.ttiLabels.join(" · ")}),c.jsxs("span",{children:[i.ttiScore,"점"]})]}),i.yeolScore>0&&c.jsxs("div",{children:[c.jsx("span",{children:i.yeolLabels.join(" · ")}),c.jsxs("span",{children:[i.yeolScore,"점"]})]}),i.piScore>0&&c.jsxs("div",{children:[c.jsxs("span",{children:["피 ",i.piCount,"장"]}),c.jsxs("span",{children:[i.piScore,"점"]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"기본"}),c.jsxs("span",{children:[r?.base,"점"]})]}),r&&r.goBonus>0&&c.jsxs("div",{children:[c.jsx("span",{children:"고 가산"}),c.jsxs("span",{children:["+",r.goBonus]})]}),r&&r.multiplier>1&&c.jsxs("div",{children:[c.jsx("span",{children:"배수"}),c.jsxs("span",{children:["x",r.multiplier]})]})]}),r&&c.jsx("div",{style:{fontSize:20,fontWeight:900,color:n.won?"var(--ok)":n.draw?"var(--paper-dim)":"var(--accent)"},children:n.draw?"판돈 없음":n.won?`+${(r.total*l).toLocaleString()}P`:`-${Math.round(r.total*l*lc).toLocaleString()}P`}),r&&r.reasons.length>0&&c.jsx("div",{className:"reasons",children:r.reasons.map((o,s)=>c.jsx("span",{children:o},s))}),c.jsx("div",{style:{display:"flex",gap:10,alignItems:"center",marginTop:6},children:c.jsx(Hn,{tenant:e,expression:n.won?"lose":"win",outfit:0,style:{height:90}})}),c.jsx("button",{className:"btn primary wide",style:{maxWidth:260},onClick:t,children:"계속"})]})}function dd({scene:e,tenant:n,textSpeed:t,onDone:r,canSkip:i=!0}){const[l,o]=v.useState(()=>Km(e)),[s,a]=v.useState(""),[u,f]=v.useState(!1),h=v.useRef(null),p=l.view;v.useEffect(()=>{if(h.current&&window.clearInterval(h.current),t<=0){a(p.text),f(!1);return}a(""),f(!0);let m=0;return h.current=window.setInterval(()=>{m++,a(p.text.slice(0,m)),m>=p.text.length&&(h.current&&window.clearInterval(h.current),f(!1))},t),()=>{h.current&&window.clearInterval(h.current)}},[p.text,t]);const y=v.useCallback(()=>{const m=Ym(l);r({affectionDelta:m.view.affectionDelta,pointDelta:m.view.pointDelta,cg:m.view.cg})},[l,r]),k=v.useCallback(()=>{if(u){h.current&&window.clearInterval(h.current),a(p.text),f(!1);return}if(!p.choices){if(p.done){r({affectionDelta:p.affectionDelta,pointDelta:p.pointDelta,cg:p.cg});return}o(oo(l))}},[u,p,l,r]);v.useEffect(()=>{p.done&&!p.text&&r({affectionDelta:p.affectionDelta,pointDelta:p.pointDelta,cg:p.cg})},[p,r]);const b=n!==null&&p.speaker===n.name,R=n&&!p.cg?sc(n.id,"full",b?p.expression:"normal"):null;return c.jsxs("div",{className:`screen novel-screen ${R?"photo":""}`,onClick:k,children:[c.jsx(Ii,{bg:p.bg,time:p.time}),c.jsxs("div",{className:"layer",children:[c.jsxs("div",{className:"topbar",onClick:m=>m.stopPropagation(),children:[c.jsx("h1",{children:e.title}),i&&c.jsx("button",{className:"btn ghost",style:{padding:"6px 12px",fontSize:13},onClick:y,children:"건너뛰기"})]}),c.jsxs("div",{className:"vn-stage",children:[n&&!p.cg&&c.jsx(Hn,{className:"vn-portrait",tenant:n,expression:b?p.expression:"normal",outfit:p.outfit}),p.cg&&c.jsx("div",{className:"vn-cg",children:c.jsx("div",{className:"vn-cg-inner",children:c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:13,opacity:.8,marginBottom:8},children:"엔딩 CG"}),c.jsx("div",{style:{fontSize:17,fontWeight:800},children:e.title}),c.jsx("div",{style:{fontSize:11,opacity:.6,marginTop:10},children:p.cg})]})})})]}),c.jsxs("div",{className:"vn-box",onClick:m=>m.stopPropagation(),children:[p.speaker&&c.jsx("div",{className:"vn-speaker",children:p.speaker}),c.jsx("div",{className:"vn-text",onClick:k,children:s}),p.choices?c.jsx("div",{className:"vn-choices",children:p.choices.map((m,g)=>c.jsx("button",{className:"btn wide",onClick:()=>o(Bh(l,g)),children:m.text},g))}):c.jsx("div",{className:"vn-hint",onClick:k,children:p.done?"탭하여 계속 ▸":"탭 ▾"})]})]})]})}const h0="hasukgo.adult.v1";function ry(){try{return localStorage.getItem(h0)==="1"}catch{return!1}}function iy(){try{localStorage.setItem(h0,"1")}catch{}}function ly({onEnter:e}){return c.jsxs("div",{className:"screen",children:[c.jsx(Ii,{bg:"maru",time:"night"}),c.jsx("div",{className:"title-vignette"}),c.jsxs("div",{className:"layer gate-layer",children:[c.jsx(ac,{className:"gate-logo"}),c.jsx("div",{className:"gate-badge",children:"청소년 이용불가"}),c.jsxs("div",{className:"gate-box",children:[c.jsx("p",{children:"이 게임은 만 18세 이상만 이용할 수 있습니다."}),c.jsxs("ul",{children:[c.jsx("li",{children:"등장인물은 전원 성인(22~29세)이며, 인물 일러스트에 선정적 표현이 있습니다."}),c.jsxs("li",{children:["화투(고스톱)를 소재로 하지만 판돈은 ",c.jsx("b",{children:"하숙집 포인트"}),"입니다 — 현금 결제·환전 기능이 전혀 없습니다."]})]})]}),c.jsx("button",{className:"btn gold wide",onClick:()=>{iy(),e()},children:"만 18세 이상입니다 · 들어가기"}),c.jsx("a",{className:"gate-out",href:"https://www.google.com",rel:"noreferrer",children:"나가기"})]})]})}const ea="HSG1",p0="HSG0";function fd(e){let n="";for(const t of e)n+=String.fromCharCode(t);return btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function oy(e){const n=e.replace(/-/g,"+").replace(/_/g,"/"),t=n.length%4?"=".repeat(4-n.length%4):"",r=atob(n+t),i=new Uint8Array(r.length);for(let l=0;l<r.length;l++)i[l]=r.charCodeAt(l);return i}function na(e){let n=2166136261;for(let t=0;t<e.length;t++)n^=e.charCodeAt(t),n=Math.imul(n,16777619)>>>0;return n.toString(36).toUpperCase().padStart(7,"0")}async function sy(e){try{if(typeof CompressionStream>"u")return null;const n=new CompressionStream("deflate-raw"),t=new TextEncoder().encode(e),r=new Blob([t.buffer]).stream().pipeThrough(n);return new Uint8Array(await new Response(r).arrayBuffer())}catch{return null}}async function ay(e){try{if(typeof DecompressionStream>"u")return null;const n=new DecompressionStream("deflate-raw"),t=new Blob([e.buffer]).stream().pipeThrough(n);return new TextDecoder().decode(await new Response(t).arrayBuffer())}catch{return null}}function Ul(e){const n=Object.values(e.tenants).filter(i=>i.clearedStage>0).length,t=Object.values(e.tenants).reduce((i,l)=>i+l.clearedStage,0),r=Object.values(e.tenants).filter(i=>i.dating).length;return`${n}명 진행 · 총 ${t}단계 · 연애 ${r}명 · ${e.points.toLocaleString()}P · ${e.stats.totalGames}판`}async function cy(e,n){const t={meta:{deviceId:n,createdAt:new Date().toISOString(),summary:Ul(e)},save:e},r=JSON.stringify(t),i=await sy(r);if(i){const o=fd(i);return`${ea}.${o}.${na(o)}`}const l=fd(new TextEncoder().encode(r));return`${p0}.${l}.${na(l)}`}async function uy(e){const n=e.trim().replace(/\s+/g,"");if(!n)return{ok:!1,reason:"코드가 비어 있습니다."};const t=n.split(".");if(t.length!==3)return{ok:!1,reason:"코드 형식이 올바르지 않습니다. 앞뒤가 잘리지 않았는지 확인해 주세요."};const[r,i,l]=t;if(r!==ea&&r!==p0)return{ok:!1,reason:"하숙생 맞고 백업 코드가 아닙니다."};if(na(i)!==l)return{ok:!1,reason:"코드가 손상됐습니다. 복사할 때 일부가 빠졌을 수 있습니다."};let o=null;try{const f=oy(i);o=r===ea?await ay(f):new TextDecoder().decode(f)}catch{return{ok:!1,reason:"코드를 읽을 수 없습니다."}}if(!o)return{ok:!1,reason:"이 브라우저에서는 압축된 코드를 풀 수 없습니다. 최신 브라우저에서 시도해 주세요."};let s;try{s=JSON.parse(o)}catch{return{ok:!1,reason:"코드 내용이 올바르지 않습니다."}}if(!s?.save?.tenants||typeof s.save.points!="number")return{ok:!1,reason:"저장 데이터가 들어 있지 않습니다."};const a=_i(),u={...a,...s.save,tenants:{...a.tenants,...s.save.tenants},settings:{...a.settings,...s.save.settings??{}},stats:{...a.stats,...s.save.stats??{}}};return{ok:!0,backup:{meta:s.meta??{deviceId:"(알 수 없음)",createdAt:"",summary:Ul(u)},save:u}}}function dy(e){const n=new Date().toISOString().slice(0,16).replace(/[:T]/g,""),t=new Blob([e],{type:"text/plain;charset=utf-8"}),r=URL.createObjectURL(t),i=document.createElement("a");i.href=r,i.download=`하숙생맞고-백업-${n}.txt`,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}async function fy(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}try{const n=document.createElement("textarea");n.value=e,n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return n.remove(),t}catch{return!1}}function hy({data:e,device:n,onRestore:t}){const[r,i]=v.useState(""),[l,o]=v.useState(""),[s,a]=v.useState(null),[u,f]=v.useState(null),[h,p]=v.useState(null),[y,k]=v.useState(!1);v.useEffect(()=>{im().then(p)},[]);const b=v.useCallback(async()=>{const E=await cy(e,n?.id??"");return i(E),k(!0),E},[e,n]),R=v.useCallback(async()=>{const E=r||await b(),_=await fy(E);a(_?{kind:"ok",text:"백업 코드를 복사했습니다. 메모장이나 메신저에 붙여넣어 보관하세요."}:{kind:"warn",text:"복사가 막혔습니다. 아래 코드를 길게 눌러 직접 복사해 주세요."})},[r,b]),m=v.useCallback(async()=>{const E=r||await b();dy(E),a({kind:"ok",text:"백업 파일을 저장했습니다."})},[r,b]),g=v.useCallback(async()=>{a(null);const E=await uy(l);if(!E.ok){f(null),a({kind:"err",text:E.reason});return}f(E.backup)},[l]),$=v.useCallback(async()=>{if(!u)return;const E=Au(u.save),_=await rm(u.save.deviceId||void 0),D=Au({...E,deviceId:_.id});t(D),f(null),o(""),a({kind:"ok",text:"진행도를 복원했습니다."})},[u,t]),w=v.useCallback(E=>{const _=E.target.files?.[0];if(!_)return;const D=new FileReader;D.onload=()=>o(String(D.result??"")),D.readAsText(_),E.target.value=""},[]),x=h&&!h.localStorage&&!h.indexedDb,N=h&&(!h.localStorage||!h.indexedDb)&&!x;return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"이 기기"}),c.jsxs("div",{className:"row",children:[c.jsxs("div",{children:["기기 코드",c.jsx("small",{children:"브라우저마다 따로 발급되는 무작위 번호입니다. 전화번호·기기 일련번호 같은 개인정보는 쓰지도, 보내지도 않습니다."})]}),c.jsx("code",{style:{fontSize:13,color:"var(--lamp)",whiteSpace:"nowrap"},children:n?.shortCode??"…"})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"실행 환경"}),c.jsx("span",{children:n?.platform??"…"})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"저장 상태"}),c.jsx("span",{style:{color:x?"var(--accent)":N?"var(--warn)":"var(--ok)"},children:h?x?"저장 불가":N?"일부만 사용 가능":"정상":"확인 중…"})]}),x&&c.jsx("div",{className:"hint-box",style:{margin:"8px 0 0"},children:"이 브라우저에서는 저장이 막혀 있습니다(사생활 보호 모드일 수 있습니다). 지금 진행한 내용은 창을 닫으면 사라집니다. 일반 창에서 열어 주세요."}),n?.ephemeral&&!x&&c.jsx("div",{className:"hint-box",style:{margin:"8px 0 0"},children:"기기 코드를 저장하지 못했습니다. 새로고침하면 새 기기로 인식될 수 있으니 아래에서 백업 코드를 받아 두세요."})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"진행도 백업"}),c.jsxs("div",{style:{fontSize:12,color:"var(--paper-dim)",lineHeight:1.6,marginBottom:10},children:["지금 진행도: ",c.jsx("b",{style:{color:"var(--paper)"},children:Ul(e)}),c.jsx("br",{}),"백업 코드 하나면 브라우저 데이터를 지웠거나 폰을 바꿔도 그대로 이어서 할 수 있습니다.",c.jsx("br",{}),c.jsx("b",{style:{color:"var(--warn)"},children:"아이폰 사파리"}),"는 홈 화면에 추가하지 않은 사이트의 저장 데이터를 일정 기간 뒤 지웁니다. 웹으로 오래 즐기실 거면 홈 화면에 추가하거나 백업 코드를 받아 두세요."]}),c.jsxs("div",{style:{display:"flex",gap:8},children:[c.jsx("button",{className:"btn primary",style:{flex:1,fontSize:13},onClick:R,children:"코드 복사"}),c.jsx("button",{className:"btn",style:{flex:1,fontSize:13},onClick:m,children:"파일로 저장"})]}),y&&r&&c.jsx("textarea",{readOnly:!0,value:r,onFocus:E=>E.currentTarget.select(),style:{width:"100%",height:76,marginTop:8,fontSize:10.5,lineHeight:1.4,background:"rgba(0,0,0,0.45)",color:"var(--paper-dim)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:8,padding:8,fontFamily:"monospace",userSelect:"text",WebkitUserSelect:"text"}})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"진행도 복원"}),c.jsx("div",{style:{fontSize:12,color:"var(--paper-dim)",lineHeight:1.6,marginBottom:8},children:"다른 기기에서 받은 백업 코드를 붙여넣으세요. 현재 진행도는 덮어써집니다."}),c.jsx("textarea",{value:l,onChange:E=>o(E.target.value),placeholder:"HSG1.로 시작하는 백업 코드를 붙여넣으세요",style:{width:"100%",height:68,fontSize:11,background:"rgba(0,0,0,0.45)",color:"var(--paper)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:8,padding:8,fontFamily:"monospace",userSelect:"text",WebkitUserSelect:"text"}}),c.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[c.jsx("button",{className:"btn",style:{flex:1,fontSize:13},onClick:g,disabled:!l.trim(),children:"코드 확인"}),c.jsxs("label",{className:"btn",style:{flex:1,fontSize:13,textAlign:"center"},children:["파일 선택",c.jsx("input",{type:"file",accept:".txt,text/plain",onChange:w,style:{display:"none"}})]})]}),u&&c.jsxs("div",{style:{marginTop:10,padding:10,borderRadius:10,background:"rgba(63,138,82,0.15)",border:"1px solid rgba(63,138,82,0.5)",fontSize:12,lineHeight:1.6},children:[c.jsx("b",{style:{color:"var(--ok)"},children:"읽을 수 있는 백업입니다."}),c.jsx("br",{}),"불러올 내용: ",u.meta.summary,c.jsx("br",{}),u.meta.createdAt&&c.jsxs("span",{style:{color:"var(--paper-dim)"},children:["만든 날짜: ",new Date(u.meta.createdAt).toLocaleString("ko-KR")]}),c.jsxs("div",{style:{marginTop:8,color:"var(--warn)"},children:["지금 진행도(",Ul(e),")는 사라집니다."]}),c.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[c.jsx("button",{className:"btn primary",style:{flex:1,fontSize:13},onClick:$,children:"덮어쓰고 복원"}),c.jsx("button",{className:"btn ghost",style:{flex:1,fontSize:13},onClick:()=>f(null),children:"취소"})]})]}),s&&c.jsx("div",{style:{marginTop:10,fontSize:12,lineHeight:1.5,color:s.kind==="ok"?"var(--ok)":s.kind==="warn"?"var(--warn)":"var(--accent)"},children:s.text})]})]})}const py=[{key:"biGwangPenalty",label:"비삼광 2점",desc:"3광에 비광이 끼면 3점 대신 2점"},{key:"goMultiplierFrom3",label:"3고부터 배수",desc:"고 1·2회는 가산, 3회부터 2배씩"},{key:"piBak",label:"피박",desc:"상대 피가 기준 이하일 때 2배"},{key:"gwangBak",label:"광박",desc:"상대 광이 없을 때 2배"},{key:"mengBak",label:"멍박",desc:"상대 열끗이 없을 때 2배"},{key:"goBak",label:"고박",desc:"고를 외친 쪽이 지면 2배 부담"},{key:"heundeulgi",label:"흔들기",desc:"같은 월 3장 선언 시 2배"},{key:"bomb",label:"폭탄",desc:"같은 월 3장을 한 번에 투하"},{key:"chongtong",label:"총통",desc:"같은 월 4장이면 즉시 승리"},{key:"nagariDouble",label:"나가리 2배",desc:"나가리 다음 판은 2배"},{key:"gukjinOption",label:"국진 선택",desc:"국진을 열끗/쌍피 중 골라 쓴다"}];function gy({data:e,device:n,onChange:t,onReset:r,onBack:i}){const l={...s0,...e.settings.rules},o=(a,u)=>{t({...e,settings:{...e.settings,rules:{...e.settings.rules,[a]:u}}})},s=(a,u)=>{t({...e,settings:{...e.settings,[a]:u}})};return c.jsx("div",{className:"screen",style:{background:"var(--wood-dark)"},children:c.jsxs("div",{className:"layer",children:[c.jsxs("div",{className:"topbar",children:[c.jsx("button",{className:"iconbtn",onClick:i,"aria-label":"뒤로",children:"←"}),c.jsx("h1",{children:"설정"})]}),c.jsxs("div",{className:"panel",children:[c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"점수 해석"}),c.jsx("div",{className:"row",children:c.jsxs("div",{children:["띠 점수 방식",c.jsx("small",{children:"기획서 표기(5장 5점)와 한국 온라인 맞고 표준(5장 1점)이 달라 둘 다 넣었습니다. 홍/청/초단 3점은 두 방식 모두 동일합니다."})]})}),c.jsxs("div",{style:{display:"flex",gap:8,marginTop:6},children:[c.jsx("button",{className:`btn ${l.ttiScoring==="standard"?"primary":"ghost"}`,style:{flex:1,fontSize:13},onClick:()=>o("ttiScoring","standard"),children:"표준 (5장 1점)"}),c.jsx("button",{className:`btn ${l.ttiScoring==="specSheet"?"primary":"ghost"}`,style:{flex:1,fontSize:13},onClick:()=>o("ttiScoring","specSheet"),children:"기획서 (5장 5점)"})]})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"규칙 옵션"}),py.map(a=>c.jsxs("div",{className:"row",children:[c.jsxs("div",{children:[a.label,c.jsx("small",{children:a.desc})]}),c.jsx(Uu,{on:l[a.key],onToggle:()=>o(a.key,!l[a.key])})]},a.key)),c.jsxs("div",{className:"row",children:[c.jsxs("div",{children:["보너스 쌍피",c.jsx("small",{children:"덱에 섞는 보너스패 장수 (0~3)"})]}),c.jsx("div",{style:{display:"flex",gap:4},children:[0,1,2,3].map(a=>c.jsx("button",{className:`btn ${l.bonusPiCount===a?"primary":"ghost"}`,style:{padding:"6px 11px",fontSize:13},onClick:()=>o("bonusPiCount",a),children:a},a))})]}),c.jsxs("div",{className:"row",children:[c.jsxs("div",{children:["스톱 최소 점수",c.jsx("small",{children:"이 점수 이상이어야 고/스톱을 고를 수 있습니다"})]}),c.jsx("div",{style:{display:"flex",gap:4},children:[3,5,7].map(a=>c.jsx("button",{className:`btn ${l.minScoreToStop===a?"primary":"ghost"}`,style:{padding:"6px 11px",fontSize:13},onClick:()=>o("minScoreToStop",a),children:a},a))})]})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"진행"}),c.jsxs("div",{className:"row",children:[c.jsxs("div",{children:["전원 공략 가능 모드",c.jsx("small",{children:"끄면 한 명과 연애를 시작한 뒤 다른 하숙생의 이벤트는 친구 루트로 분기합니다. 켜면 전원 공략 가능합니다."})]}),c.jsx(Uu,{on:e.settings.allRoutes,onToggle:()=>s("allRoutes",!e.settings.allRoutes)})]}),c.jsxs("div",{className:"row",children:[c.jsxs("div",{children:["글자 속도",c.jsx("small",{children:"0에 가까울수록 빠릅니다"})]}),c.jsx("div",{style:{display:"flex",gap:4},children:[[0,"즉시"],[15,"빠름"],[25,"보통"],[45,"느림"]].map(([a,u])=>c.jsx("button",{className:`btn ${e.settings.textSpeed===a?"primary":"ghost"}`,style:{padding:"6px 9px",fontSize:12},onClick:()=>s("textSpeed",a),children:u},a))})]})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"기록"}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"총 대국"}),c.jsxs("span",{children:[e.stats.totalGames,"판"]})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"전적"}),c.jsxs("span",{children:[e.stats.wins,"승 ",e.stats.losses,"패"]})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"최고 점수"}),c.jsxs("span",{children:[e.stats.bestScore,"점"]})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"보유 포인트"}),c.jsxs("span",{children:[e.points.toLocaleString()," P"]})]})]}),c.jsx(hy,{data:e,device:n,onRestore:t}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"데이터"}),c.jsxs("div",{className:"row",children:[c.jsxs("div",{children:["처음부터 다시",c.jsx("small",{children:"진행도·호감도·포인트·도감이 모두 지워집니다"})]}),c.jsx("button",{className:"btn",style:{background:"linear-gradient(180deg,#9c3c2c,#6f2a1e)"},onClick:()=>{confirm("정말 모든 진행을 지우시겠습니까? 되돌릴 수 없습니다.")&&r()},children:"초기화"})]})]}),c.jsx("div",{style:{textAlign:"center",fontSize:11,color:"var(--paper-dim)",padding:"8px 0 24px"},children:"하숙생 맞고 · 판돈은 하숙집 포인트이며 현금 환전 기능이 없습니다."})]})]})})}const hd=(()=>{const e=Jh();return["송학 광","매조 홍단","공산 광"].map(n=>e.find(t=>t.name===n))})();function my({data:e,onChange:n,onBack:t}){const[r,i]=v.useState(null),l=h=>e.owned.includes(h.id),o=h=>h.kind==="cards"?e.equipped.cards===Xn(h):e.equipped.theme===Xn(h),s=h=>{if(!l(h)){if(e.points<h.price){i(`${(h.price-e.points).toLocaleString()}P 가 모자랍니다.`);return}n({...e,points:e.points-h.price,owned:[...e.owned,h.id],equipped:h.kind==="cards"?{...e.equipped,cards:Xn(h)}:{...e.equipped,theme:Xn(h)}}),i(`${h.name} 을(를) 들였습니다. 바로 적용했어요.`)}},a=(h,p)=>{n({...e,equipped:{...e.equipped,[h]:p}}),i(null)},u=Qt.filter(l).length,f=Qt.filter(l).reduce((h,p)=>h+p.price,0);return c.jsx("div",{className:"screen",style:{background:"var(--wood-dark)"},children:c.jsxs("div",{className:"layer",children:[c.jsxs("div",{className:"topbar",children:[c.jsx("button",{className:"iconbtn",onClick:t,"aria-label":"뒤로",children:"←"}),c.jsx("h1",{children:"상점"}),c.jsxs("span",{className:"points",children:[e.points.toLocaleString()," P"]})]}),c.jsxs("div",{className:"panel",children:[c.jsx("div",{className:"section",children:c.jsxs("div",{style:{fontSize:12.5,color:"var(--paper-dim)",lineHeight:1.65},children:["승부에 유리해지는 물건은 팔지 않습니다. 판돈으로 딴 포인트는 겉모습에만 씁니다.",c.jsx("br",{}),"보유 ",u,"/",Qt.length,"종 · 쓴 포인트 ",f.toLocaleString(),"P /"," ",mm.toLocaleString(),"P"]})}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"화패"}),c.jsx("div",{style:{display:"flex",gap:5,justifyContent:"center",marginBottom:12},children:hd.map(h=>c.jsx("img",{src:Rl(h,{skin:e.equipped.cards}),alt:h.name,style:{width:54,borderRadius:5,boxShadow:"0 3px 8px rgba(0,0,0,.5)"}},h.id))}),c.jsxs("div",{style:{textAlign:"center",fontSize:12,color:"var(--lamp)",marginBottom:10},children:["지금: ",ym(e.equipped.cards)]}),Qt.filter(h=>h.kind==="cards").map(h=>c.jsx(pd,{item:h,owned:l(h),equipped:o(h),points:e.points,onBuy:()=>s(h),onEquip:()=>a("cards",Xn(h)),preview:c.jsx("img",{src:Rl(hd[0],{skin:Xn(h)}),alt:"",style:{width:38,borderRadius:4}})},h.id)),e.equipped.cards!=="classic"&&c.jsx("button",{className:"btn ghost wide",style:{marginTop:8,fontSize:13},onClick:()=>a("cards","classic"),children:"기본 화패(전통)로 되돌리기"})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"마루 테마"}),c.jsxs("div",{style:{fontSize:12,color:"var(--lamp)",marginBottom:10},children:["지금: ",Ja(e.equipped.theme).name]}),Qt.filter(h=>h.kind==="theme").map(h=>c.jsx(pd,{item:h,owned:l(h),equipped:o(h),points:e.points,onBuy:()=>s(h),onEquip:()=>a("theme",Xn(h)),preview:c.jsx(yy,{id:Xn(h)})},h.id)),e.equipped.theme!=="maru"&&c.jsx("button",{className:"btn ghost wide",style:{marginTop:8,fontSize:13},onClick:()=>a("theme","maru"),children:"기본 테마(밤의 마루)로 되돌리기"})]}),r&&c.jsx("div",{className:"hint-box",style:{margin:"0 0 14px"},children:r})]})]})})}function yy({id:e}){const n=Ja(e),t=n.vars["--wood-dark"]??"#2a1f18",r=n.vars["--lamp"]??"#ffd98a",i=n.vars["--wood"]??"#4a3628";return c.jsx("div",{style:{width:38,height:38,borderRadius:8,background:`linear-gradient(140deg, ${t}, ${i})`,border:`2px solid ${r}`,flex:"0 0 auto"}})}function pd({item:e,owned:n,equipped:t,points:r,onBuy:i,onEquip:l,preview:o}){const s=r>=e.price;return c.jsxs("div",{className:"row",style:{alignItems:"center",gap:10},children:[o,c.jsxs("div",{style:{flex:1,minWidth:0},children:[e.name,c.jsx("small",{children:e.desc})]}),n?t?c.jsx("span",{style:{fontSize:12,color:"var(--ok)",fontWeight:700,flex:"0 0 auto"},children:"사용 중"}):c.jsx("button",{className:"btn",style:{padding:"7px 12px",fontSize:12.5},onClick:l,children:"적용"}):c.jsxs("button",{className:`btn ${s?"primary":""}`,style:{padding:"7px 12px",fontSize:12.5,flex:"0 0 auto"},onClick:i,disabled:!s,children:[e.price.toLocaleString(),"P"]})]})}function $y(e,n,t){const r=ec(n),i=e.lines.matchStart[r],l=i[Math.floor(Math.random()*i.length)];return{id:`__prematch_${e.id}_${t}`,title:`${e.name} · ${t}단계`,tenantId:e.id,steps:[{kind:"bg",bg:"maru",time:"night"},{kind:"narrate",text:`마루에 방석 두 개가 깔렸다. ${t}번째 판이다.`},{kind:"say",speaker:e.name,expression:"smile",text:l},{kind:"end"}],labels:{}}}function wy(){const[e,n]=v.useState(()=>Fh()),[t,r]=v.useState(null),[i,l]=v.useState(!1),[o,s]=v.useState(!1),[a,u]=v.useState({name:"title"}),[f,h]=v.useState(()=>ry()),[p,y]=v.useState({}),[k,b]=v.useState(null);v.useEffect(()=>{let C=!0;return(async()=>{const[z,F]=await Promise.all([tm(),i1()]);C&&(r(z),l(F.recovered),n(W=>{const Q=F.data.savedAt>=W.savedAt?F.data:W;return Q.deviceId===z.id?Q:{...Q,deviceId:z.id}}),s(!0))})(),()=>{C=!1}},[]),v.useEffect(()=>{r2(e.equipped.cards);const C=Ja(e.equipped.theme),z=document.documentElement;for(const F of["--wood-dark","--wood","--wood-light","--paper","--paper-dim","--lamp","--lamp-dim","--accent"])z.style.removeProperty(F);for(const[F,W]of Object.entries(C.vars))z.style.setProperty(F,W)},[e.equipped.cards,e.equipped.theme]),v.useEffect(()=>{o&&tc(e)},[e,o]),v.useEffect(()=>{},[]);const R=v.useMemo(()=>o1(e.recentGames),[e.recentGames]),m=v.useMemo(()=>f1(e),[e]),g=v.useCallback(()=>u({name:"home"}),[]),$=v.useCallback(C=>{const z=Oh(C),F=[{id:"world",when:!0},{id:"prologue",when:!0},{id:"season_summer",when:hr(qr("hana"),z)},{id:"season_autumn",when:hr(qr("yerin"),z)},{id:"season_winter",when:hr(qr("arin"),z)}];for(const W of F){if(!W.when||C.seenScenes.includes(W.id))continue;const Q=Ho(W.id);if(Q)return Q}return null},[]),w=v.useCallback(C=>{const z=$(C);u(z?{name:"novel",scene:z,tenant:z.id==="prologue"?qr("jieun"):null,after:"home"}:{name:"home"})},[$]),x=v.useCallback(()=>w(e),[w,e]),N=v.useCallback(C=>{const z=e.tenants[C.id],F=Ph(C);if(e.points<F){alert(`${C.name}와(과) 붙으려면 ${F.toLocaleString()}P 는 들고 있어야 합니다.
점당 ${C.rate}P 라 크게 지면 그만큼 물어줘야 하거든요.`);return}const W=Math.min(10,(z?.clearedStage??0)+1);u({name:"preMatch",tenant:C,stage:W})},[e]),E=v.useCallback((C,z,F)=>{const W=F.won?Th(C,z):0,Q=u1({won:F.won,draw:F.draw,settlementTotal:F.settlementTotal,rate:C.rate}),re=s1(e,{tenantId:C.id,stage:z,won:F.won,payout:Q,playerWentGo:F.playerWentGo,focus:F.focus,score:F.score},{reward:W});n(re),y(ue=>({...ue,[C.id]:F.won?0:(ue[C.id]??0)+1}));const me=re.tenants[C.id].clearedStage;F.won&&me===z?b({tenant:C,stage:z}):g()},[e,g]);v.useEffect(()=>{if(!k)return;const{tenant:C,stage:z}=k,F=C.events.find(Q=>Q.stage===z),W=F?Ho(F.scriptId):null;if(b(null),!W){g();return}u({name:"novel",scene:W,tenant:C,after:"home"})},[k,g]);const _=v.useCallback((C,z,F,W)=>{let Q=a1(e,C.id,F.cg);if(Q={...Q,points:Math.max(0,Q.points+F.pointDelta)},z&&F.affectionDelta!==0&&Q.tenants[z.id]&&(Q={...Q,tenants:{...Q.tenants,[z.id]:{...Q.tenants[z.id],affection:Math.max(0,Math.min(100,Q.tenants[z.id].affection+F.affectionDelta))}}}),n(Q),W==="match"&&z){const re=Q.tenants[z.id],me=Math.min(10,(re?.clearedStage??0)+1);u({name:"match",tenant:z,stage:me})}else w(Q)},[e,w]);if(!f)return c.jsx("div",{className:"app",children:c.jsx(ly,{onEnter:()=>h(!0)})});const D=t2("title");if(a.name==="title")return c.jsx("div",{className:"app",children:c.jsxs("div",{className:"screen title-screen",children:[c.jsx(Ii,{bg:"maru",time:"night"}),c.jsx("div",{className:"title-vignette"}),c.jsxs("div",{className:"layer title-layer",children:[D?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"title-key-bed",style:{backgroundImage:`url("${D}")`}}),c.jsx("img",{className:"title-key",src:D,alt:"하숙생 맞고",draggable:!1})]}):c.jsxs(c.Fragment,{children:[c.jsx(ac,{className:"title-logo"}),c.jsx("div",{className:"title-sub",children:"밤마다 마루에서, 열 번의 승부"}),c.jsx("div",{className:"title-cast",children:qe.slice(0,7).map((C,z)=>c.jsx(Hn,{tenant:C,expression:"smile",className:"title-face",style:{zIndex:z===3?9:8-Math.abs(3-z)}},C.id))})]}),c.jsxs("div",{className:"title-menu",children:[c.jsxs("button",{className:"btn primary wide gold",onClick:x,children:["▶ ",e.stats.totalGames>0?"이어하기":"게임 시작"]}),c.jsxs("div",{className:"title-subrow",children:[c.jsx("button",{className:"btn wide",onClick:()=>u({name:"gallery"}),children:"📖 도감"}),c.jsx("button",{className:"btn wide",onClick:()=>u({name:"settings"}),children:"⚙ 설정"})]})]})]})]})});if(a.name==="novel")return c.jsx("div",{className:"app wide",children:c.jsx(dd,{scene:a.scene,tenant:a.tenant,textSpeed:e.settings.textSpeed,onDone:C=>_(a.scene,a.tenant,C,a.after)},a.scene.id)});if(a.name==="preMatch"){const C=e.tenants[a.tenant.id],z=$y(a.tenant,C?.affection??0,a.stage);return c.jsx("div",{className:"app wide",children:c.jsx(dd,{scene:z,tenant:a.tenant,textSpeed:e.settings.textSpeed,onDone:()=>u({name:"match",tenant:a.tenant,stage:a.stage})},z.id)})}if(a.name==="match"){const C=e.tenants[a.tenant.id];return c.jsx("div",{className:"app wide",children:c.jsx(ny,{tenant:a.tenant,stage:a.stage,affection:C?.affection??0,rules:e.settings.rules,profile:R,losingStreak:p[a.tenant.id]??0,points:e.points,onFinish:z=>E(a.tenant,a.stage,z),onQuit:g},`${a.tenant.id}-${a.stage}-${e.stats.totalGames}`)})}return a.name==="shop"?c.jsx("div",{className:"app",children:c.jsx(my,{data:e,onChange:n,onBack:()=>u(e.stats.totalGames>0?{name:"home"}:{name:"title"})})}):a.name==="gallery"?c.jsx("div",{className:"app",children:c.jsx(o2,{data:e,onBack:()=>u(e.stats.totalGames>0?{name:"home"}:{name:"title"})})}):a.name==="settings"?c.jsx("div",{className:"app",children:c.jsx(gy,{data:e,device:t,onChange:n,onReset:()=>{n(l1()),u({name:"title"})},onBack:()=>u(e.stats.totalGames>0?{name:"home"}:{name:"title"})})}):c.jsxs("div",{className:"app",children:[i&&c.jsxs("div",{className:"hint-box",style:{position:"absolute",top:60,left:12,right:12,zIndex:20,cursor:"pointer"},onClick:()=>l(!1),children:["브라우저 저장소가 비워져 있어 ",c.jsx("b",{children:"백업 사본에서 진행도를 되살렸습니다."})," 설정 → 진행도 백업에서 코드를 받아 두시면 더 안전합니다. (탭하여 닫기)"]}),c.jsx(s2,{data:e,onPick:N,onGallery:()=>u({name:"gallery"}),onShop:()=>u({name:"shop"}),onSettings:()=>u({name:"settings"}),onAllowance:()=>n(C=>d1(C)),allClearedFlag:m,onHidden:()=>{const C=Ho("hidden_ending");C&&u({name:"novel",scene:C,tenant:null,after:"home"})}})]})}function vy(){let e=-1;const n=()=>{const t=Math.round(window.visualViewport?.height??window.innerHeight);t===e||t<=0||(e=t,document.documentElement.style.setProperty("--app-h",`${t}px`))};if(n(),typeof ResizeObserver<"u"){const t=document.createElement("div");t.setAttribute("aria-hidden","true"),t.style.cssText="position:fixed;inset:0;pointer-events:none;visibility:hidden;z-index:-1",document.body.appendChild(t),new ResizeObserver(n).observe(t)}window.addEventListener("resize",n,{passive:!0}),window.addEventListener("orientationchange",()=>setTimeout(n,200),{passive:!0}),window.visualViewport?.addEventListener("resize",n,{passive:!0}),window.visualViewport?.addEventListener("scroll",n,{passive:!0}),window.setInterval(n,500)}function xy(){let e=0;document.addEventListener("touchstart",n=>{e=n.touches[0]?.clientY??0},{passive:!0}),document.addEventListener("touchmove",n=>{if(n.touches.length>1||(n.touches[0]?.clientY??0)-e<=0)return;let i=n.target;for(;i&&i!==document.body;){const l=getComputedStyle(i);if(/(auto|scroll)/.test(l.overflowY)&&i.scrollHeight>i.clientHeight&&i.scrollTop>0)return;i=i.parentElement}n.cancelable&&n.preventDefault()},{passive:!1})}function ky(){let e=0;document.addEventListener("touchend",n=>{const t=Date.now();t-e<320&&n.cancelable&&n.preventDefault(),e=t},{passive:!1}),document.addEventListener("gesturestart",n=>n.preventDefault())}function by(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{const e="./";navigator.serviceWorker.register(`${e}sw.js`,{scope:e}).catch(()=>{})})}function Sy(){const e=typeof navigator<"u"?navigator.userAgent:"",n=typeof window<"u"&&window.matchMedia?.("(display-mode: standalone)").matches||navigator.standalone===!0;return{inAppBrowser:/KAKAOTALK|Line\/|FBAN|FBAV|Instagram|NAVER|DaumApps/i.test(e),standalone:!!n,isIOS:/iPhone|iPad|iPod/i.test(e),isAndroid:/Android/i.test(e),landscape:typeof window<"u"&&window.innerWidth>window.innerHeight}}function _y(){vy(),xy(),ky(),by();const e=Sy();return document.documentElement.dataset.inapp=String(e.inAppBrowser),document.documentElement.dataset.standalone=String(e.standalone),e}_y();Nh(document.getElementById("root")).render(c.jsx(O0.StrictMode,{children:c.jsx(wy,{})}));
