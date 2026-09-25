(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function Ih(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Au={exports:{}},El={},Bu={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fi=Symbol.for("react.element"),Ah=Symbol.for("react.portal"),Bh=Symbol.for("react.fragment"),Fh=Symbol.for("react.strict_mode"),Rh=Symbol.for("react.profiler"),Oh=Symbol.for("react.provider"),Uh=Symbol.for("react.context"),Gh=Symbol.for("react.forward_ref"),Vh=Symbol.for("react.suspense"),Qh=Symbol.for("react.memo"),Hh=Symbol.for("react.lazy"),Ya=Symbol.iterator;function Zh(e){return e===null||typeof e!="object"?null:(e=Ya&&e[Ya]||e["@@iterator"],typeof e=="function"?e:null)}var Fu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ru=Object.assign,Ou={};function hr(e,n,t){this.props=e,this.context=n,this.refs=Ou,this.updater=t||Fu}hr.prototype.isReactComponent={};hr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};hr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Uu(){}Uu.prototype=hr.prototype;function Fs(e,n,t){this.props=e,this.context=n,this.refs=Ou,this.updater=t||Fu}var Rs=Fs.prototype=new Uu;Rs.constructor=Fs;Ru(Rs,hr.prototype);Rs.isPureReactComponent=!0;var Xa=Array.isArray,Gu=Object.prototype.hasOwnProperty,Os={current:null},Vu={key:!0,ref:!0,__self:!0,__source:!0};function Qu(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)Gu.call(n,r)&&!Vu.hasOwnProperty(r)&&(i[r]=n[r]);var s=arguments.length-2;if(s===1)i.children=t;else if(1<s){for(var a=Array(s),f=0;f<s;f++)a[f]=arguments[f+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:fi,type:e,key:l,ref:o,props:i,_owner:Os.current}}function qh(e,n){return{$$typeof:fi,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Us(e){return typeof e=="object"&&e!==null&&e.$$typeof===fi}function Wh(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ja=/\/+/g;function ro(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Wh(""+e.key):n.toString(36)}function Oi(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case fi:case Ah:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ro(o,0):r,Xa(i)?(t="",e!=null&&(t=e.replace(Ja,"$&/")+"/"),Oi(i,n,t,"",function(f){return f})):i!=null&&(Us(i)&&(i=qh(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ja,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",Xa(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+ro(l,s);o+=Oi(l,n,t,a,i)}else if(a=Zh(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+ro(l,s++),o+=Oi(l,n,t,a,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function vi(e,n,t){if(e==null)return e;var r=[],i=0;return Oi(e,r,"","",function(l){return n.call(t,l,i++)}),r}function Kh(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},Ui={transition:null},Yh={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Ui,ReactCurrentOwner:Os};function Hu(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:vi,forEach:function(e,n,t){vi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return vi(e,function(){n++}),n},toArray:function(e){return vi(e,function(n){return n})||[]},only:function(e){if(!Us(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=hr;Z.Fragment=Bh;Z.Profiler=Rh;Z.PureComponent=Fs;Z.StrictMode=Fh;Z.Suspense=Vh;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yh;Z.act=Hu;Z.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ru({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=Os.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)Gu.call(n,a)&&!Vu.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var f=0;f<a;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:fi,type:e.type,key:i,ref:l,props:r,_owner:o}};Z.createContext=function(e){return e={$$typeof:Uh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Oh,_context:e},e.Consumer=e};Z.createElement=Qu;Z.createFactory=function(e){var n=Qu.bind(null,e);return n.type=e,n};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:Gh,render:e}};Z.isValidElement=Us;Z.lazy=function(e){return{$$typeof:Hh,_payload:{_status:-1,_result:e},_init:Kh}};Z.memo=function(e,n){return{$$typeof:Qh,type:e,compare:n===void 0?null:n}};Z.startTransition=function(e){var n=Ui.transition;Ui.transition={};try{e()}finally{Ui.transition=n}};Z.unstable_act=Hu;Z.useCallback=function(e,n){return Ve.current.useCallback(e,n)};Z.useContext=function(e){return Ve.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};Z.useEffect=function(e,n){return Ve.current.useEffect(e,n)};Z.useId=function(){return Ve.current.useId()};Z.useImperativeHandle=function(e,n,t){return Ve.current.useImperativeHandle(e,n,t)};Z.useInsertionEffect=function(e,n){return Ve.current.useInsertionEffect(e,n)};Z.useLayoutEffect=function(e,n){return Ve.current.useLayoutEffect(e,n)};Z.useMemo=function(e,n){return Ve.current.useMemo(e,n)};Z.useReducer=function(e,n,t){return Ve.current.useReducer(e,n,t)};Z.useRef=function(e){return Ve.current.useRef(e)};Z.useState=function(e){return Ve.current.useState(e)};Z.useSyncExternalStore=function(e,n,t){return Ve.current.useSyncExternalStore(e,n,t)};Z.useTransition=function(){return Ve.current.useTransition()};Z.version="18.3.1";Bu.exports=Z;var C=Bu.exports;const Xh=Ih(C);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh=C,e0=Symbol.for("react.element"),n0=Symbol.for("react.fragment"),t0=Object.prototype.hasOwnProperty,r0=Jh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i0={key:!0,ref:!0,__self:!0,__source:!0};function Zu(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)t0.call(n,r)&&!i0.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:e0,type:e,key:l,ref:o,props:i,_owner:r0.current}}El.Fragment=n0;El.jsx=Zu;El.jsxs=Zu;Au.exports=El;var c=Au.exports,qu={exports:{}},sn={},Wu={exports:{}},Ku={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,R){var I=E.length;E.push(R);e:for(;0<I;){var W=I-1>>>1,B=E[W];if(0<i(B,R))E[W]=R,E[I]=B,I=W;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var R=E[0],I=E.pop();if(I!==R){E[0]=I;e:for(var W=0,B=E.length,O=B>>>1;W<O;){var re=2*(W+1)-1,Ce=E[re],K=re+1,we=E[K];if(0>i(Ce,I))K<B&&0>i(we,Ce)?(E[W]=we,E[K]=I,W=K):(E[W]=Ce,E[re]=I,W=re);else if(K<B&&0>i(we,I))E[W]=we,E[K]=I,W=K;else break e}}return R}function i(E,R){var I=E.sortIndex-R.sortIndex;return I!==0?I:E.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],f=[],d=1,h=null,p=3,$=!1,S=!1,j=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(E){for(var R=t(f);R!==null;){if(R.callback===null)r(f);else if(R.startTime<=E)r(f),R.sortIndex=R.expirationTime,n(a,R);else break;R=t(f)}}function v(E){if(j=!1,y(E),!S)if(t(a)!==null)S=!0,Xe(k);else{var R=t(f);R!==null&&Oe(v,R.startTime-E)}}function k(E,R){S=!1,j&&(j=!1,m(x),x=-1),$=!0;var I=p;try{for(y(R),h=t(a);h!==null&&(!(h.expirationTime>R)||E&&!G());){var W=h.callback;if(typeof W=="function"){h.callback=null,p=h.priorityLevel;var B=W(h.expirationTime<=R);R=e.unstable_now(),typeof B=="function"?h.callback=B:h===t(a)&&r(a),y(R)}else r(a);h=t(a)}if(h!==null)var O=!0;else{var re=t(f);re!==null&&Oe(v,re.startTime-R),O=!1}return O}finally{h=null,p=I,$=!1}}var _=!1,w=null,x=-1,L=5,z=-1;function G(){return!(e.unstable_now()-z<L)}function X(){if(w!==null){var E=e.unstable_now();z=E;var R=!0;try{R=w(!0,E)}finally{R?J():(_=!1,w=null)}}else _=!1}var J;if(typeof g=="function")J=function(){g(X)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,De=de.port2;de.port1.onmessage=X,J=function(){De.postMessage(null)}}else J=function(){T(X,0)};function Xe(E){w=E,_||(_=!0,J())}function Oe(E,R){x=T(function(){E(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){S||$||(S=!0,Xe(k))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var R=3;break;default:R=p}var I=p;p=R;try{return E()}finally{p=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,R){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var I=p;p=E;try{return R()}finally{p=I}},e.unstable_scheduleCallback=function(E,R,I){var W=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?W+I:W):I=W,E){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=I+B,E={id:d++,callback:R,priorityLevel:E,startTime:I,expirationTime:B,sortIndex:-1},I>W?(E.sortIndex=I,n(f,E),t(a)===null&&E===t(f)&&(j?(m(x),x=-1):j=!0,Oe(v,I-W))):(E.sortIndex=B,n(a,E),S||$||(S=!0,Xe(k))),E},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(E){var R=p;return function(){var I=p;p=R;try{return E.apply(this,arguments)}finally{p=I}}}})(Ku);Wu.exports=Ku;var l0=Wu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0=C,on=l0;function N(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yu=new Set,Zr={};function Et(e,n){ir(e,n),ir(e+"Capture",n)}function ir(e,n){for(Zr[e]=n,e=0;e<n.length;e++)Yu.add(n[e])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Io=Object.prototype.hasOwnProperty,s0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ec={},nc={};function a0(e){return Io.call(nc,e)?!0:Io.call(ec,e)?!1:s0.test(e)?nc[e]=!0:(ec[e]=!0,!1)}function c0(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function u0(e,n,t,r){if(n===null||typeof n>"u"||c0(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Qe(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new Qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Te[n]=new Qe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new Qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new Qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new Qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new Qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new Qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new Qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new Qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gs=/[\-:]([a-z])/g;function Vs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Gs,Vs);Te[n]=new Qe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Gs,Vs);Te[n]=new Qe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Gs,Vs);Te[n]=new Qe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new Qe(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new Qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qs(e,n,t,r){var i=Te.hasOwnProperty(n)?Te[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(u0(n,t,i,r)&&(t=null),r||i===null?a0(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Fn=o0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wi=Symbol.for("react.element"),At=Symbol.for("react.portal"),Bt=Symbol.for("react.fragment"),Hs=Symbol.for("react.strict_mode"),Ao=Symbol.for("react.profiler"),Xu=Symbol.for("react.provider"),Ju=Symbol.for("react.context"),Zs=Symbol.for("react.forward_ref"),Bo=Symbol.for("react.suspense"),Fo=Symbol.for("react.suspense_list"),qs=Symbol.for("react.memo"),Un=Symbol.for("react.lazy"),ef=Symbol.for("react.offscreen"),tc=Symbol.iterator;function yr(e){return e===null||typeof e!="object"?null:(e=tc&&e[tc]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,io;function Nr(e){if(io===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);io=n&&n[1]||""}return`
`+io+e}var lo=!1;function oo(e,n){if(!e||lo)return"";lo=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(f){var r=f}Reflect.construct(e,[],n)}else{try{n.call()}catch(f){r=f}e.call(n.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{lo=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Nr(e):""}function f0(e){switch(e.tag){case 5:return Nr(e.type);case 16:return Nr("Lazy");case 13:return Nr("Suspense");case 19:return Nr("SuspenseList");case 0:case 2:case 15:return e=oo(e.type,!1),e;case 11:return e=oo(e.type.render,!1),e;case 1:return e=oo(e.type,!0),e;default:return""}}function Ro(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bt:return"Fragment";case At:return"Portal";case Ao:return"Profiler";case Hs:return"StrictMode";case Bo:return"Suspense";case Fo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ju:return(e.displayName||"Context")+".Consumer";case Xu:return(e._context.displayName||"Context")+".Provider";case Zs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qs:return n=e.displayName||null,n!==null?n:Ro(e.type)||"Memo";case Un:n=e._payload,e=e._init;try{return Ro(e(n))}catch{}}return null}function d0(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ro(n);case 8:return n===Hs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ot(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nf(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function h0(e){var n=nf(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xi(e){e._valueTracker||(e._valueTracker=h0(e))}function tf(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=nf(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function el(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oo(e,n){var t=n.checked;return me({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function rc(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=ot(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function rf(e,n){n=n.checked,n!=null&&Qs(e,"checked",n,!1)}function Uo(e,n){rf(e,n);var t=ot(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Go(e,n.type,t):n.hasOwnProperty("defaultValue")&&Go(e,n.type,ot(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ic(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Go(e,n,t){(n!=="number"||el(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Er=Array.isArray;function Kt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+ot(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Vo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(N(91));return me({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(N(92));if(Er(t)){if(1<t.length)throw Error(N(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ot(t)}}function lf(e,n){var t=ot(n.value),r=ot(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function oc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function of(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?of(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ki,sf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ki=ki||document.createElement("div"),ki.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ki.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function qr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},p0=["Webkit","ms","Moz","O"];Object.keys(Ir).forEach(function(e){p0.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ir[n]=Ir[e]})});function af(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ir.hasOwnProperty(e)&&Ir[e]?(""+n).trim():n+"px"}function cf(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=af(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var g0=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ho(e,n){if(n){if(g0[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(N(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(N(61))}if(n.style!=null&&typeof n.style!="object")throw Error(N(62))}}function Zo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qo=null;function Ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wo=null,Yt=null,Xt=null;function sc(e){if(e=pi(e)){if(typeof Wo!="function")throw Error(N(280));var n=e.stateNode;n&&(n=Tl(n),Wo(e.stateNode,e.type,n))}}function uf(e){Yt?Xt?Xt.push(e):Xt=[e]:Yt=e}function ff(){if(Yt){var e=Yt,n=Xt;if(Xt=Yt=null,sc(e),n)for(e=0;e<n.length;e++)sc(n[e])}}function df(e,n){return e(n)}function hf(){}var so=!1;function pf(e,n,t){if(so)return e(n,t);so=!0;try{return df(e,n,t)}finally{so=!1,(Yt!==null||Xt!==null)&&(hf(),ff())}}function Wr(e,n){var t=e.stateNode;if(t===null)return null;var r=Tl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(N(231,n,typeof t));return t}var Ko=!1;if(Dn)try{var $r={};Object.defineProperty($r,"passive",{get:function(){Ko=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{Ko=!1}function m0(e,n,t,r,i,l,o,s,a){var f=Array.prototype.slice.call(arguments,3);try{n.apply(t,f)}catch(d){this.onError(d)}}var Ar=!1,nl=null,tl=!1,Yo=null,y0={onError:function(e){Ar=!0,nl=e}};function $0(e,n,t,r,i,l,o,s,a){Ar=!1,nl=null,m0.apply(y0,arguments)}function v0(e,n,t,r,i,l,o,s,a){if($0.apply(this,arguments),Ar){if(Ar){var f=nl;Ar=!1,nl=null}else throw Error(N(198));tl||(tl=!0,Yo=f)}}function Mt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function gf(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ac(e){if(Mt(e)!==e)throw Error(N(188))}function w0(e){var n=e.alternate;if(!n){if(n=Mt(e),n===null)throw Error(N(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return ac(i),e;if(l===r)return ac(i),n;l=l.sibling}throw Error(N(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===t){o=!0,t=i,r=l;break}if(s===r){o=!0,r=i,t=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===t){o=!0,t=l,r=i;break}if(s===r){o=!0,r=l,t=i;break}s=s.sibling}if(!o)throw Error(N(189))}}if(t.alternate!==r)throw Error(N(190))}if(t.tag!==3)throw Error(N(188));return t.stateNode.current===t?e:n}function mf(e){return e=w0(e),e!==null?yf(e):null}function yf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=yf(e);if(n!==null)return n;e=e.sibling}return null}var $f=on.unstable_scheduleCallback,cc=on.unstable_cancelCallback,x0=on.unstable_shouldYield,k0=on.unstable_requestPaint,$e=on.unstable_now,S0=on.unstable_getCurrentPriorityLevel,Ks=on.unstable_ImmediatePriority,vf=on.unstable_UserBlockingPriority,rl=on.unstable_NormalPriority,b0=on.unstable_LowPriority,wf=on.unstable_IdlePriority,Ml=null,_n=null;function C0(e){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(Ml,e,void 0,(e.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:N0,j0=Math.log,_0=Math.LN2;function N0(e){return e>>>=0,e===0?32:31-(j0(e)/_0|0)|0}var Si=64,bi=4194304;function Mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function il(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~i;s!==0?r=Mr(s):(l&=o,l!==0&&(r=Mr(l)))}else o=t&~i,o!==0?r=Mr(o):l!==0&&(r=Mr(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-wn(n),i=1<<t,r|=e[t],n&=~i;return r}function E0(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function M0(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-wn(l),s=1<<o,a=i[o];a===-1?(!(s&t)||s&r)&&(i[o]=E0(s,n)):a<=n&&(e.expiredLanes|=s),l&=~s}}function Xo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xf(){var e=Si;return Si<<=1,!(Si&4194240)&&(Si=64),e}function ao(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function di(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-wn(n),e[n]=t}function L0(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-wn(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function Ys(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-wn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var ie=0;function kf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Sf,Xs,bf,Cf,jf,Jo=!1,Ci=[],Kn=null,Yn=null,Xn=null,Kr=new Map,Yr=new Map,Qn=[],z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uc(e,n){switch(e){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":Kr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yr.delete(n.pointerId)}}function vr(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=pi(n),n!==null&&Xs(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function P0(e,n,t,r,i){switch(n){case"focusin":return Kn=vr(Kn,e,n,t,r,i),!0;case"dragenter":return Yn=vr(Yn,e,n,t,r,i),!0;case"mouseover":return Xn=vr(Xn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Kr.set(l,vr(Kr.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Yr.set(l,vr(Yr.get(l)||null,e,n,t,r,i)),!0}return!1}function _f(e){var n=vt(e.target);if(n!==null){var t=Mt(n);if(t!==null){if(n=t.tag,n===13){if(n=gf(t),n!==null){e.blockedOn=n,jf(e.priority,function(){bf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=es(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);qo=r,t.target.dispatchEvent(r),qo=null}else return n=pi(t),n!==null&&Xs(n),e.blockedOn=t,!1;n.shift()}return!0}function fc(e,n,t){Gi(e)&&t.delete(n)}function T0(){Jo=!1,Kn!==null&&Gi(Kn)&&(Kn=null),Yn!==null&&Gi(Yn)&&(Yn=null),Xn!==null&&Gi(Xn)&&(Xn=null),Kr.forEach(fc),Yr.forEach(fc)}function wr(e,n){e.blockedOn===n&&(e.blockedOn=null,Jo||(Jo=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,T0)))}function Xr(e){function n(i){return wr(i,e)}if(0<Ci.length){wr(Ci[0],e);for(var t=1;t<Ci.length;t++){var r=Ci[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Kn!==null&&wr(Kn,e),Yn!==null&&wr(Yn,e),Xn!==null&&wr(Xn,e),Kr.forEach(n),Yr.forEach(n),t=0;t<Qn.length;t++)r=Qn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Qn.length&&(t=Qn[0],t.blockedOn===null);)_f(t),t.blockedOn===null&&Qn.shift()}var Jt=Fn.ReactCurrentBatchConfig,ll=!0;function D0(e,n,t,r){var i=ie,l=Jt.transition;Jt.transition=null;try{ie=1,Js(e,n,t,r)}finally{ie=i,Jt.transition=l}}function I0(e,n,t,r){var i=ie,l=Jt.transition;Jt.transition=null;try{ie=4,Js(e,n,t,r)}finally{ie=i,Jt.transition=l}}function Js(e,n,t,r){if(ll){var i=es(e,n,t,r);if(i===null)vo(e,n,r,ol,t),uc(e,r);else if(P0(i,e,n,t,r))r.stopPropagation();else if(uc(e,r),n&4&&-1<z0.indexOf(e)){for(;i!==null;){var l=pi(i);if(l!==null&&Sf(l),l=es(e,n,t,r),l===null&&vo(e,n,r,ol,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else vo(e,n,r,null,t)}}var ol=null;function es(e,n,t,r){if(ol=null,e=Ws(r),e=vt(e),e!==null)if(n=Mt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=gf(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ol=e,null}function Nf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S0()){case Ks:return 1;case vf:return 4;case rl:case b0:return 16;case wf:return 536870912;default:return 16}default:return 16}}var Zn=null,ea=null,Vi=null;function Ef(){if(Vi)return Vi;var e,n=ea,t=n.length,r,i="value"in Zn?Zn.value:Zn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return Vi=i.slice(e,1<r?1-r:void 0)}function Qi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ji(){return!0}function dc(){return!1}function an(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ji:dc,this.isPropagationStopped=dc,this}return me(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),n}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},na=an(pr),hi=me({},pr,{view:0,detail:0}),A0=an(hi),co,uo,xr,Ll=me({},hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ta,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xr&&(xr&&e.type==="mousemove"?(co=e.screenX-xr.screenX,uo=e.screenY-xr.screenY):uo=co=0,xr=e),co)},movementY:function(e){return"movementY"in e?e.movementY:uo}}),hc=an(Ll),B0=me({},Ll,{dataTransfer:0}),F0=an(B0),R0=me({},hi,{relatedTarget:0}),fo=an(R0),O0=me({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),U0=an(O0),G0=me({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),V0=an(G0),Q0=me({},pr,{data:0}),pc=an(Q0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=q0[e])?!!n[e]:!1}function ta(){return W0}var K0=me({},hi,{key:function(e){if(e.key){var n=H0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Z0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ta,charCode:function(e){return e.type==="keypress"?Qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Y0=an(K0),X0=me({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gc=an(X0),J0=me({},hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ta}),ep=an(J0),np=me({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tp=an(np),rp=me({},Ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ip=an(rp),lp=[9,13,27,32],ra=Dn&&"CompositionEvent"in window,Br=null;Dn&&"documentMode"in document&&(Br=document.documentMode);var op=Dn&&"TextEvent"in window&&!Br,Mf=Dn&&(!ra||Br&&8<Br&&11>=Br),mc=" ",yc=!1;function Lf(e,n){switch(e){case"keyup":return lp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function sp(e,n){switch(e){case"compositionend":return zf(n);case"keypress":return n.which!==32?null:(yc=!0,mc);case"textInput":return e=n.data,e===mc&&yc?null:e;default:return null}}function ap(e,n){if(Ft)return e==="compositionend"||!ra&&Lf(e,n)?(e=Ef(),Vi=ea=Zn=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Mf&&n.locale!=="ko"?null:n.data;default:return null}}var cp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $c(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!cp[e.type]:n==="textarea"}function Pf(e,n,t,r){uf(r),n=sl(n,"onChange"),0<n.length&&(t=new na("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Fr=null,Jr=null;function up(e){Vf(e,0)}function zl(e){var n=Ut(e);if(tf(n))return e}function fp(e,n){if(e==="change")return n}var Tf=!1;if(Dn){var ho;if(Dn){var po="oninput"in document;if(!po){var vc=document.createElement("div");vc.setAttribute("oninput","return;"),po=typeof vc.oninput=="function"}ho=po}else ho=!1;Tf=ho&&(!document.documentMode||9<document.documentMode)}function wc(){Fr&&(Fr.detachEvent("onpropertychange",Df),Jr=Fr=null)}function Df(e){if(e.propertyName==="value"&&zl(Jr)){var n=[];Pf(n,Jr,e,Ws(e)),pf(up,n)}}function dp(e,n,t){e==="focusin"?(wc(),Fr=n,Jr=t,Fr.attachEvent("onpropertychange",Df)):e==="focusout"&&wc()}function hp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zl(Jr)}function pp(e,n){if(e==="click")return zl(n)}function gp(e,n){if(e==="input"||e==="change")return zl(n)}function mp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:mp;function ei(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Io.call(n,i)||!kn(e[i],n[i]))return!1}return!0}function xc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kc(e,n){var t=xc(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=xc(t)}}function If(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?If(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Af(){for(var e=window,n=el();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=el(e.document)}return n}function ia(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function yp(e){var n=Af(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&If(t.ownerDocument.documentElement,t)){if(r!==null&&ia(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=kc(t,l);var o=kc(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $p=Dn&&"documentMode"in document&&11>=document.documentMode,Rt=null,ns=null,Rr=null,ts=!1;function Sc(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ts||Rt==null||Rt!==el(r)||(r=Rt,"selectionStart"in r&&ia(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&ei(Rr,r)||(Rr=r,r=sl(ns,"onSelect"),0<r.length&&(n=new na("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Rt)))}function _i(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ot={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionend:_i("Transition","TransitionEnd")},go={},Bf={};Dn&&(Bf=document.createElement("div").style,"AnimationEvent"in window||(delete Ot.animationend.animation,delete Ot.animationiteration.animation,delete Ot.animationstart.animation),"TransitionEvent"in window||delete Ot.transitionend.transition);function Pl(e){if(go[e])return go[e];if(!Ot[e])return e;var n=Ot[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Bf)return go[e]=n[t];return e}var Ff=Pl("animationend"),Rf=Pl("animationiteration"),Of=Pl("animationstart"),Uf=Pl("transitionend"),Gf=new Map,bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ut(e,n){Gf.set(e,n),Et(n,[e])}for(var mo=0;mo<bc.length;mo++){var yo=bc[mo],vp=yo.toLowerCase(),wp=yo[0].toUpperCase()+yo.slice(1);ut(vp,"on"+wp)}ut(Ff,"onAnimationEnd");ut(Rf,"onAnimationIteration");ut(Of,"onAnimationStart");ut("dblclick","onDoubleClick");ut("focusin","onFocus");ut("focusout","onBlur");ut(Uf,"onTransitionEnd");ir("onMouseEnter",["mouseout","mouseover"]);ir("onMouseLeave",["mouseout","mouseover"]);ir("onPointerEnter",["pointerout","pointerover"]);ir("onPointerLeave",["pointerout","pointerover"]);Et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Et("onBeforeInput",["compositionend","keypress","textInput","paste"]);Et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Cc(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,v0(r,n,void 0,e),e.currentTarget=null}function Vf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,f=s.currentTarget;if(s=s.listener,a!==l&&i.isPropagationStopped())break e;Cc(i,s,f),l=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,f=s.currentTarget,s=s.listener,a!==l&&i.isPropagationStopped())break e;Cc(i,s,f),l=a}}}if(tl)throw e=Yo,tl=!1,Yo=null,e}function ce(e,n){var t=n[ss];t===void 0&&(t=n[ss]=new Set);var r=e+"__bubble";t.has(r)||(Qf(n,e,2,!1),t.add(r))}function $o(e,n,t){var r=0;n&&(r|=4),Qf(t,e,r,n)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function ni(e){if(!e[Ni]){e[Ni]=!0,Yu.forEach(function(t){t!=="selectionchange"&&(xp.has(t)||$o(t,!1,e),$o(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ni]||(n[Ni]=!0,$o("selectionchange",!1,n))}}function Qf(e,n,t,r){switch(Nf(n)){case 1:var i=D0;break;case 4:i=I0;break;default:i=Js}t=i.bind(null,n,t,e),i=void 0,!Ko||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function vo(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;s!==null;){if(o=vt(s),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}s=s.parentNode}}r=r.return}pf(function(){var f=l,d=Ws(t),h=[];e:{var p=Gf.get(e);if(p!==void 0){var $=na,S=e;switch(e){case"keypress":if(Qi(t)===0)break e;case"keydown":case"keyup":$=Y0;break;case"focusin":S="focus",$=fo;break;case"focusout":S="blur",$=fo;break;case"beforeblur":case"afterblur":$=fo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=F0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=ep;break;case Ff:case Rf:case Of:$=U0;break;case Uf:$=tp;break;case"scroll":$=A0;break;case"wheel":$=ip;break;case"copy":case"cut":case"paste":$=V0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=gc}var j=(n&4)!==0,T=!j&&e==="scroll",m=j?p!==null?p+"Capture":null:p;j=[];for(var g=f,y;g!==null;){y=g;var v=y.stateNode;if(y.tag===5&&v!==null&&(y=v,m!==null&&(v=Wr(g,m),v!=null&&j.push(ti(g,v,y)))),T)break;g=g.return}0<j.length&&(p=new $(p,S,null,t,d),h.push({event:p,listeners:j}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",p&&t!==qo&&(S=t.relatedTarget||t.fromElement)&&(vt(S)||S[In]))break e;if(($||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,$?(S=t.relatedTarget||t.toElement,$=f,S=S?vt(S):null,S!==null&&(T=Mt(S),S!==T||S.tag!==5&&S.tag!==6)&&(S=null)):($=null,S=f),$!==S)){if(j=hc,v="onMouseLeave",m="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(j=gc,v="onPointerLeave",m="onPointerEnter",g="pointer"),T=$==null?p:Ut($),y=S==null?p:Ut(S),p=new j(v,g+"leave",$,t,d),p.target=T,p.relatedTarget=y,v=null,vt(d)===f&&(j=new j(m,g+"enter",S,t,d),j.target=y,j.relatedTarget=T,v=j),T=v,$&&S)n:{for(j=$,m=S,g=0,y=j;y;y=Tt(y))g++;for(y=0,v=m;v;v=Tt(v))y++;for(;0<g-y;)j=Tt(j),g--;for(;0<y-g;)m=Tt(m),y--;for(;g--;){if(j===m||m!==null&&j===m.alternate)break n;j=Tt(j),m=Tt(m)}j=null}else j=null;$!==null&&jc(h,p,$,j,!1),S!==null&&T!==null&&jc(h,T,S,j,!0)}}e:{if(p=f?Ut(f):window,$=p.nodeName&&p.nodeName.toLowerCase(),$==="select"||$==="input"&&p.type==="file")var k=fp;else if($c(p))if(Tf)k=gp;else{k=hp;var _=dp}else($=p.nodeName)&&$.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=pp);if(k&&(k=k(e,f))){Pf(h,k,t,d);break e}_&&_(e,p,f),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&Go(p,"number",p.value)}switch(_=f?Ut(f):window,e){case"focusin":($c(_)||_.contentEditable==="true")&&(Rt=_,ns=f,Rr=null);break;case"focusout":Rr=ns=Rt=null;break;case"mousedown":ts=!0;break;case"contextmenu":case"mouseup":case"dragend":ts=!1,Sc(h,t,d);break;case"selectionchange":if($p)break;case"keydown":case"keyup":Sc(h,t,d)}var w;if(ra)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Ft?Lf(e,t)&&(x="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(x="onCompositionStart");x&&(Mf&&t.locale!=="ko"&&(Ft||x!=="onCompositionStart"?x==="onCompositionEnd"&&Ft&&(w=Ef()):(Zn=d,ea="value"in Zn?Zn.value:Zn.textContent,Ft=!0)),_=sl(f,x),0<_.length&&(x=new pc(x,e,null,t,d),h.push({event:x,listeners:_}),w?x.data=w:(w=zf(t),w!==null&&(x.data=w)))),(w=op?sp(e,t):ap(e,t))&&(f=sl(f,"onBeforeInput"),0<f.length&&(d=new pc("onBeforeInput","beforeinput",null,t,d),h.push({event:d,listeners:f}),d.data=w))}Vf(h,n)})}function ti(e,n,t){return{instance:e,listener:n,currentTarget:t}}function sl(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Wr(e,t),l!=null&&r.unshift(ti(e,l,i)),l=Wr(e,n),l!=null&&r.push(ti(e,l,i))),e=e.return}return r}function Tt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jc(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var s=t,a=s.alternate,f=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&f!==null&&(s=f,i?(a=Wr(t,l),a!=null&&o.unshift(ti(t,a,s))):i||(a=Wr(t,l),a!=null&&o.push(ti(t,a,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var kp=/\r\n?/g,Sp=/\u0000|\uFFFD/g;function _c(e){return(typeof e=="string"?e:""+e).replace(kp,`
`).replace(Sp,"")}function Ei(e,n,t){if(n=_c(n),_c(e)!==n&&t)throw Error(N(425))}function al(){}var rs=null,is=null;function ls(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var os=typeof setTimeout=="function"?setTimeout:void 0,bp=typeof clearTimeout=="function"?clearTimeout:void 0,Nc=typeof Promise=="function"?Promise:void 0,Cp=typeof queueMicrotask=="function"?queueMicrotask:typeof Nc<"u"?function(e){return Nc.resolve(null).then(e).catch(jp)}:os;function jp(e){setTimeout(function(){throw e})}function wo(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Xr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Xr(n)}function Jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ec(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var gr=Math.random().toString(36).slice(2),jn="__reactFiber$"+gr,ri="__reactProps$"+gr,In="__reactContainer$"+gr,ss="__reactEvents$"+gr,_p="__reactListeners$"+gr,Np="__reactHandles$"+gr;function vt(e){var n=e[jn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[In]||t[jn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ec(e);e!==null;){if(t=e[jn])return t;e=Ec(e)}return n}e=t,t=e.parentNode}return null}function pi(e){return e=e[jn]||e[In],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Tl(e){return e[ri]||null}var as=[],Gt=-1;function ft(e){return{current:e}}function fe(e){0>Gt||(e.current=as[Gt],as[Gt]=null,Gt--)}function ae(e,n){Gt++,as[Gt]=e.current,e.current=n}var st={},Re=ft(st),We=ft(!1),bt=st;function lr(e,n){var t=e.type.contextTypes;if(!t)return st;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(e){return e=e.childContextTypes,e!=null}function cl(){fe(We),fe(Re)}function Mc(e,n,t){if(Re.current!==st)throw Error(N(168));ae(Re,n),ae(We,t)}function Hf(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(N(108,d0(e)||"Unknown",i));return me({},t,r)}function ul(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||st,bt=Re.current,ae(Re,e),ae(We,We.current),!0}function Lc(e,n,t){var r=e.stateNode;if(!r)throw Error(N(169));t?(e=Hf(e,n,bt),r.__reactInternalMemoizedMergedChildContext=e,fe(We),fe(Re),ae(Re,e)):fe(We),ae(We,t)}var Ln=null,Dl=!1,xo=!1;function Zf(e){Ln===null?Ln=[e]:Ln.push(e)}function Ep(e){Dl=!0,Zf(e)}function dt(){if(!xo&&Ln!==null){xo=!0;var e=0,n=ie;try{var t=Ln;for(ie=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ln=null,Dl=!1}catch(i){throw Ln!==null&&(Ln=Ln.slice(e+1)),$f(Ks,dt),i}finally{ie=n,xo=!1}}return null}var Vt=[],Qt=0,fl=null,dl=0,cn=[],un=0,Ct=null,zn=1,Pn="";function yt(e,n){Vt[Qt++]=dl,Vt[Qt++]=fl,fl=e,dl=n}function qf(e,n,t){cn[un++]=zn,cn[un++]=Pn,cn[un++]=Ct,Ct=e;var r=zn;e=Pn;var i=32-wn(r)-1;r&=~(1<<i),t+=1;var l=32-wn(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,zn=1<<32-wn(n)+i|t<<i|r,Pn=l+e}else zn=1<<l|t<<i|r,Pn=e}function la(e){e.return!==null&&(yt(e,1),qf(e,1,0))}function oa(e){for(;e===fl;)fl=Vt[--Qt],Vt[Qt]=null,dl=Vt[--Qt],Vt[Qt]=null;for(;e===Ct;)Ct=cn[--un],cn[un]=null,Pn=cn[--un],cn[un]=null,zn=cn[--un],cn[un]=null}var ln=null,rn=null,he=!1,vn=null;function Wf(e,n){var t=fn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function zc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ln=e,rn=Jn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ln=e,rn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Ct!==null?{id:zn,overflow:Pn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=fn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ln=e,rn=null,!0):!1;default:return!1}}function cs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function us(e){if(he){var n=rn;if(n){var t=n;if(!zc(e,n)){if(cs(e))throw Error(N(418));n=Jn(t.nextSibling);var r=ln;n&&zc(e,n)?Wf(r,t):(e.flags=e.flags&-4097|2,he=!1,ln=e)}}else{if(cs(e))throw Error(N(418));e.flags=e.flags&-4097|2,he=!1,ln=e}}}function Pc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ln=e}function Mi(e){if(e!==ln)return!1;if(!he)return Pc(e),he=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ls(e.type,e.memoizedProps)),n&&(n=rn)){if(cs(e))throw Kf(),Error(N(418));for(;n;)Wf(e,n),n=Jn(n.nextSibling)}if(Pc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){rn=Jn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}rn=null}}else rn=ln?Jn(e.stateNode.nextSibling):null;return!0}function Kf(){for(var e=rn;e;)e=Jn(e.nextSibling)}function or(){rn=ln=null,he=!1}function sa(e){vn===null?vn=[e]:vn.push(e)}var Mp=Fn.ReactCurrentBatchConfig;function kr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(N(309));var r=t.stateNode}if(!r)throw Error(N(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(N(284));if(!t._owner)throw Error(N(290,e))}return e}function Li(e,n){throw e=Object.prototype.toString.call(n),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Tc(e){var n=e._init;return n(e._payload)}function Yf(e){function n(m,g){if(e){var y=m.deletions;y===null?(m.deletions=[g],m.flags|=16):y.push(g)}}function t(m,g){if(!e)return null;for(;g!==null;)n(m,g),g=g.sibling;return null}function r(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function i(m,g){return m=rt(m,g),m.index=0,m.sibling=null,m}function l(m,g,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<g?(m.flags|=2,g):y):(m.flags|=2,g)):(m.flags|=1048576,g)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,g,y,v){return g===null||g.tag!==6?(g=No(y,m.mode,v),g.return=m,g):(g=i(g,y),g.return=m,g)}function a(m,g,y,v){var k=y.type;return k===Bt?d(m,g,y.props.children,v,y.key):g!==null&&(g.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Un&&Tc(k)===g.type)?(v=i(g,y.props),v.ref=kr(m,g,y),v.return=m,v):(v=Xi(y.type,y.key,y.props,null,m.mode,v),v.ref=kr(m,g,y),v.return=m,v)}function f(m,g,y,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Eo(y,m.mode,v),g.return=m,g):(g=i(g,y.children||[]),g.return=m,g)}function d(m,g,y,v,k){return g===null||g.tag!==7?(g=St(y,m.mode,v,k),g.return=m,g):(g=i(g,y),g.return=m,g)}function h(m,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=No(""+g,m.mode,y),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case wi:return y=Xi(g.type,g.key,g.props,null,m.mode,y),y.ref=kr(m,null,g),y.return=m,y;case At:return g=Eo(g,m.mode,y),g.return=m,g;case Un:var v=g._init;return h(m,v(g._payload),y)}if(Er(g)||yr(g))return g=St(g,m.mode,y,null),g.return=m,g;Li(m,g)}return null}function p(m,g,y,v){var k=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return k!==null?null:s(m,g,""+y,v);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case wi:return y.key===k?a(m,g,y,v):null;case At:return y.key===k?f(m,g,y,v):null;case Un:return k=y._init,p(m,g,k(y._payload),v)}if(Er(y)||yr(y))return k!==null?null:d(m,g,y,v,null);Li(m,y)}return null}function $(m,g,y,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(y)||null,s(g,m,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wi:return m=m.get(v.key===null?y:v.key)||null,a(g,m,v,k);case At:return m=m.get(v.key===null?y:v.key)||null,f(g,m,v,k);case Un:var _=v._init;return $(m,g,y,_(v._payload),k)}if(Er(v)||yr(v))return m=m.get(y)||null,d(g,m,v,k,null);Li(g,v)}return null}function S(m,g,y,v){for(var k=null,_=null,w=g,x=g=0,L=null;w!==null&&x<y.length;x++){w.index>x?(L=w,w=null):L=w.sibling;var z=p(m,w,y[x],v);if(z===null){w===null&&(w=L);break}e&&w&&z.alternate===null&&n(m,w),g=l(z,g,x),_===null?k=z:_.sibling=z,_=z,w=L}if(x===y.length)return t(m,w),he&&yt(m,x),k;if(w===null){for(;x<y.length;x++)w=h(m,y[x],v),w!==null&&(g=l(w,g,x),_===null?k=w:_.sibling=w,_=w);return he&&yt(m,x),k}for(w=r(m,w);x<y.length;x++)L=$(w,m,x,y[x],v),L!==null&&(e&&L.alternate!==null&&w.delete(L.key===null?x:L.key),g=l(L,g,x),_===null?k=L:_.sibling=L,_=L);return e&&w.forEach(function(G){return n(m,G)}),he&&yt(m,x),k}function j(m,g,y,v){var k=yr(y);if(typeof k!="function")throw Error(N(150));if(y=k.call(y),y==null)throw Error(N(151));for(var _=k=null,w=g,x=g=0,L=null,z=y.next();w!==null&&!z.done;x++,z=y.next()){w.index>x?(L=w,w=null):L=w.sibling;var G=p(m,w,z.value,v);if(G===null){w===null&&(w=L);break}e&&w&&G.alternate===null&&n(m,w),g=l(G,g,x),_===null?k=G:_.sibling=G,_=G,w=L}if(z.done)return t(m,w),he&&yt(m,x),k;if(w===null){for(;!z.done;x++,z=y.next())z=h(m,z.value,v),z!==null&&(g=l(z,g,x),_===null?k=z:_.sibling=z,_=z);return he&&yt(m,x),k}for(w=r(m,w);!z.done;x++,z=y.next())z=$(w,m,x,z.value,v),z!==null&&(e&&z.alternate!==null&&w.delete(z.key===null?x:z.key),g=l(z,g,x),_===null?k=z:_.sibling=z,_=z);return e&&w.forEach(function(X){return n(m,X)}),he&&yt(m,x),k}function T(m,g,y,v){if(typeof y=="object"&&y!==null&&y.type===Bt&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case wi:e:{for(var k=y.key,_=g;_!==null;){if(_.key===k){if(k=y.type,k===Bt){if(_.tag===7){t(m,_.sibling),g=i(_,y.props.children),g.return=m,m=g;break e}}else if(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Un&&Tc(k)===_.type){t(m,_.sibling),g=i(_,y.props),g.ref=kr(m,_,y),g.return=m,m=g;break e}t(m,_);break}else n(m,_);_=_.sibling}y.type===Bt?(g=St(y.props.children,m.mode,v,y.key),g.return=m,m=g):(v=Xi(y.type,y.key,y.props,null,m.mode,v),v.ref=kr(m,g,y),v.return=m,m=v)}return o(m);case At:e:{for(_=y.key;g!==null;){if(g.key===_)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){t(m,g.sibling),g=i(g,y.children||[]),g.return=m,m=g;break e}else{t(m,g);break}else n(m,g);g=g.sibling}g=Eo(y,m.mode,v),g.return=m,m=g}return o(m);case Un:return _=y._init,T(m,g,_(y._payload),v)}if(Er(y))return S(m,g,y,v);if(yr(y))return j(m,g,y,v);Li(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(t(m,g.sibling),g=i(g,y),g.return=m,m=g):(t(m,g),g=No(y,m.mode,v),g.return=m,m=g),o(m)):t(m,g)}return T}var sr=Yf(!0),Xf=Yf(!1),hl=ft(null),pl=null,Ht=null,aa=null;function ca(){aa=Ht=pl=null}function ua(e){var n=hl.current;fe(hl),e._currentValue=n}function fs(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function er(e,n){pl=e,aa=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(qe=!0),e.firstContext=null)}function hn(e){var n=e._currentValue;if(aa!==e)if(e={context:e,memoizedValue:n,next:null},Ht===null){if(pl===null)throw Error(N(308));Ht=e,pl.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return n}var wt=null;function fa(e){wt===null?wt=[e]:wt.push(e)}function Jf(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,fa(n)):(t.next=i.next,i.next=t),n.interleaved=t,An(e,r)}function An(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Gn=!1;function da(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ed(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function et(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,An(e,t)}return i=r.interleaved,i===null?(n.next=n,fa(r)):(n.next=i.next,i.next=n),r.interleaved=n,An(e,t)}function Hi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ys(e,t)}}function Dc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function gl(e,n,t,r){var i=e.updateQueue;Gn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,f=a.next;a.next=null,o===null?l=f:o.next=f,o=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=f:s.next=f,d.lastBaseUpdate=a))}if(l!==null){var h=i.baseState;o=0,d=f=a=null,s=l;do{var p=s.lane,$=s.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:$,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var S=e,j=s;switch(p=n,$=t,j.tag){case 1:if(S=j.payload,typeof S=="function"){h=S.call($,h,p);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=j.payload,p=typeof S=="function"?S.call($,h,p):S,p==null)break e;h=me({},h,p);break e;case 2:Gn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else $={eventTime:$,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(f=d=$,a=h):d=d.next=$,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(a=h),i.baseState=a,i.firstBaseUpdate=f,i.lastBaseUpdate=d,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);_t|=o,e.lanes=o,e.memoizedState=h}}function Ic(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var gi={},Nn=ft(gi),ii=ft(gi),li=ft(gi);function xt(e){if(e===gi)throw Error(N(174));return e}function ha(e,n){switch(ae(li,n),ae(ii,e),ae(Nn,gi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Qo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Qo(n,e)}fe(Nn),ae(Nn,n)}function ar(){fe(Nn),fe(ii),fe(li)}function nd(e){xt(li.current);var n=xt(Nn.current),t=Qo(n,e.type);n!==t&&(ae(ii,e),ae(Nn,t))}function pa(e){ii.current===e&&(fe(Nn),fe(ii))}var pe=ft(0);function ml(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ko=[];function ga(){for(var e=0;e<ko.length;e++)ko[e]._workInProgressVersionPrimary=null;ko.length=0}var Zi=Fn.ReactCurrentDispatcher,So=Fn.ReactCurrentBatchConfig,jt=0,ge=null,ke=null,je=null,yl=!1,Or=!1,oi=0,Lp=0;function Ie(){throw Error(N(321))}function ma(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!kn(e[t],n[t]))return!1;return!0}function ya(e,n,t,r,i,l){if(jt=l,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Zi.current=e===null||e.memoizedState===null?Dp:Ip,e=t(r,i),Or){l=0;do{if(Or=!1,oi=0,25<=l)throw Error(N(301));l+=1,je=ke=null,n.updateQueue=null,Zi.current=Ap,e=t(r,i)}while(Or)}if(Zi.current=$l,n=ke!==null&&ke.next!==null,jt=0,je=ke=ge=null,yl=!1,n)throw Error(N(300));return e}function $a(){var e=oi!==0;return oi=0,e}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?ge.memoizedState=je=e:je=je.next=e,je}function pn(){if(ke===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=je===null?ge.memoizedState:je.next;if(n!==null)je=n,ke=e;else{if(e===null)throw Error(N(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},je===null?ge.memoizedState=je=e:je=je.next=e}return je}function si(e,n){return typeof n=="function"?n(e):n}function bo(e){var n=pn(),t=n.queue;if(t===null)throw Error(N(311));t.lastRenderedReducer=e;var r=ke,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,a=null,f=l;do{var d=f.lane;if((jt&d)===d)a!==null&&(a=a.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var h={lane:d,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};a===null?(s=a=h,o=r):a=a.next=h,ge.lanes|=d,_t|=d}f=f.next}while(f!==null&&f!==l);a===null?o=r:a.next=s,kn(r,n.memoizedState)||(qe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,ge.lanes|=l,_t|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Co(e){var n=pn(),t=n.queue;if(t===null)throw Error(N(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);kn(l,n.memoizedState)||(qe=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function td(){}function rd(e,n){var t=ge,r=pn(),i=n(),l=!kn(r.memoizedState,i);if(l&&(r.memoizedState=i,qe=!0),r=r.queue,va(od.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||je!==null&&je.memoizedState.tag&1){if(t.flags|=2048,ai(9,ld.bind(null,t,r,i,n),void 0,null),_e===null)throw Error(N(349));jt&30||id(t,n,i)}return i}function id(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ge.updateQueue,n===null?(n={lastEffect:null,stores:null},ge.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ld(e,n,t,r){n.value=t,n.getSnapshot=r,sd(n)&&ad(e)}function od(e,n,t){return t(function(){sd(n)&&ad(e)})}function sd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!kn(e,t)}catch{return!0}}function ad(e){var n=An(e,1);n!==null&&xn(n,e,1,-1)}function Ac(e){var n=Cn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:e},n.queue=e,e=e.dispatch=Tp.bind(null,ge,e),[n.memoizedState,e]}function ai(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ge.updateQueue,n===null?(n={lastEffect:null,stores:null},ge.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function cd(){return pn().memoizedState}function qi(e,n,t,r){var i=Cn();ge.flags|=e,i.memoizedState=ai(1|n,t,void 0,r===void 0?null:r)}function Il(e,n,t,r){var i=pn();r=r===void 0?null:r;var l=void 0;if(ke!==null){var o=ke.memoizedState;if(l=o.destroy,r!==null&&ma(r,o.deps)){i.memoizedState=ai(n,t,l,r);return}}ge.flags|=e,i.memoizedState=ai(1|n,t,l,r)}function Bc(e,n){return qi(8390656,8,e,n)}function va(e,n){return Il(2048,8,e,n)}function ud(e,n){return Il(4,2,e,n)}function fd(e,n){return Il(4,4,e,n)}function dd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function hd(e,n,t){return t=t!=null?t.concat([e]):null,Il(4,4,dd.bind(null,n,e),t)}function wa(){}function pd(e,n){var t=pn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ma(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function gd(e,n){var t=pn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ma(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function md(e,n,t){return jt&21?(kn(t,n)||(t=xf(),ge.lanes|=t,_t|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,qe=!0),e.memoizedState=t)}function zp(e,n){var t=ie;ie=t!==0&&4>t?t:4,e(!0);var r=So.transition;So.transition={};try{e(!1),n()}finally{ie=t,So.transition=r}}function yd(){return pn().memoizedState}function Pp(e,n,t){var r=tt(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},$d(e))vd(n,t);else if(t=Jf(e,n,t,r),t!==null){var i=Ge();xn(t,e,r,i),wd(t,n,r)}}function Tp(e,n,t){var r=tt(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if($d(e))vd(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,s=l(o,t);if(i.hasEagerState=!0,i.eagerState=s,kn(s,o)){var a=n.interleaved;a===null?(i.next=i,fa(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=Jf(e,n,i,r),t!==null&&(i=Ge(),xn(t,e,r,i),wd(t,n,r))}}function $d(e){var n=e.alternate;return e===ge||n!==null&&n===ge}function vd(e,n){Or=yl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function wd(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Ys(e,t)}}var $l={readContext:hn,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},Dp={readContext:hn,useCallback:function(e,n){return Cn().memoizedState=[e,n===void 0?null:n],e},useContext:hn,useEffect:Bc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,qi(4194308,4,dd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return qi(4194308,4,e,n)},useInsertionEffect:function(e,n){return qi(4,2,e,n)},useMemo:function(e,n){var t=Cn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Cn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Pp.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var n=Cn();return e={current:e},n.memoizedState=e},useState:Ac,useDebugValue:wa,useDeferredValue:function(e){return Cn().memoizedState=e},useTransition:function(){var e=Ac(!1),n=e[0];return e=zp.bind(null,e[1]),Cn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ge,i=Cn();if(he){if(t===void 0)throw Error(N(407));t=t()}else{if(t=n(),_e===null)throw Error(N(349));jt&30||id(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Bc(od.bind(null,r,l,e),[e]),r.flags|=2048,ai(9,ld.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Cn(),n=_e.identifierPrefix;if(he){var t=Pn,r=zn;t=(r&~(1<<32-wn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=oi++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Lp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Ip={readContext:hn,useCallback:pd,useContext:hn,useEffect:va,useImperativeHandle:hd,useInsertionEffect:ud,useLayoutEffect:fd,useMemo:gd,useReducer:bo,useRef:cd,useState:function(){return bo(si)},useDebugValue:wa,useDeferredValue:function(e){var n=pn();return md(n,ke.memoizedState,e)},useTransition:function(){var e=bo(si)[0],n=pn().memoizedState;return[e,n]},useMutableSource:td,useSyncExternalStore:rd,useId:yd,unstable_isNewReconciler:!1},Ap={readContext:hn,useCallback:pd,useContext:hn,useEffect:va,useImperativeHandle:hd,useInsertionEffect:ud,useLayoutEffect:fd,useMemo:gd,useReducer:Co,useRef:cd,useState:function(){return Co(si)},useDebugValue:wa,useDeferredValue:function(e){var n=pn();return ke===null?n.memoizedState=e:md(n,ke.memoizedState,e)},useTransition:function(){var e=Co(si)[0],n=pn().memoizedState;return[e,n]},useMutableSource:td,useSyncExternalStore:rd,useId:yd,unstable_isNewReconciler:!1};function yn(e,n){if(e&&e.defaultProps){n=me({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ds(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:me({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Al={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Ge(),i=tt(e),l=Tn(r,i);l.payload=n,t!=null&&(l.callback=t),n=et(e,l,i),n!==null&&(xn(n,e,i,r),Hi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Ge(),i=tt(e),l=Tn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=et(e,l,i),n!==null&&(xn(n,e,i,r),Hi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ge(),r=tt(e),i=Tn(t,r);i.tag=2,n!=null&&(i.callback=n),n=et(e,i,r),n!==null&&(xn(n,e,r,t),Hi(n,e,r))}};function Fc(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!ei(t,r)||!ei(i,l):!0}function xd(e,n,t){var r=!1,i=st,l=n.contextType;return typeof l=="object"&&l!==null?l=hn(l):(i=Ke(n)?bt:Re.current,r=n.contextTypes,l=(r=r!=null)?lr(e,i):st),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Al,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function Rc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Al.enqueueReplaceState(n,n.state,null)}function hs(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},da(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=hn(l):(l=Ke(n)?bt:Re.current,i.context=lr(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(ds(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Al.enqueueReplaceState(i,i.state,null),gl(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function cr(e,n){try{var t="",r=n;do t+=f0(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function jo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function ps(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Bp=typeof WeakMap=="function"?WeakMap:Map;function kd(e,n,t){t=Tn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){wl||(wl=!0,bs=r),ps(e,n)},t}function Sd(e,n,t){t=Tn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){ps(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){ps(e,n),typeof r!="function"&&(nt===null?nt=new Set([this]):nt.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Oc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Bp;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Xp.bind(null,e,n,t),n.then(e,e))}function Uc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Gc(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Tn(-1,1),n.tag=2,et(t,n,1))),t.lanes|=1),e)}var Fp=Fn.ReactCurrentOwner,qe=!1;function Ue(e,n,t,r){n.child=e===null?Xf(n,null,t,r):sr(n,e.child,t,r)}function Vc(e,n,t,r,i){t=t.render;var l=n.ref;return er(n,i),r=ya(e,n,t,r,l,i),t=$a(),e!==null&&!qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Bn(e,n,i)):(he&&t&&la(n),n.flags|=1,Ue(e,n,r,i),n.child)}function Qc(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!Na(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,bd(e,n,l,r,i)):(e=Xi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:ei,t(o,r)&&e.ref===n.ref)return Bn(e,n,i)}return n.flags|=1,e=rt(l,r),e.ref=n.ref,e.return=n,n.child=e}function bd(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(ei(l,r)&&e.ref===n.ref)if(qe=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(qe=!0);else return n.lanes=e.lanes,Bn(e,n,i)}return gs(e,n,t,r,i)}function Cd(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(qt,en),en|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ae(qt,en),en|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,ae(qt,en),en|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,ae(qt,en),en|=r;return Ue(e,n,i,t),n.child}function jd(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function gs(e,n,t,r,i){var l=Ke(t)?bt:Re.current;return l=lr(n,l),er(n,i),t=ya(e,n,t,r,l,i),r=$a(),e!==null&&!qe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Bn(e,n,i)):(he&&r&&la(n),n.flags|=1,Ue(e,n,t,i),n.child)}function Hc(e,n,t,r,i){if(Ke(t)){var l=!0;ul(n)}else l=!1;if(er(n,i),n.stateNode===null)Wi(e,n),xd(n,t,r),hs(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var a=o.context,f=t.contextType;typeof f=="object"&&f!==null?f=hn(f):(f=Ke(t)?bt:Re.current,f=lr(n,f));var d=t.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==f)&&Rc(n,o,r,f),Gn=!1;var p=n.memoizedState;o.state=p,gl(n,r,o,i),a=n.memoizedState,s!==r||p!==a||We.current||Gn?(typeof d=="function"&&(ds(n,t,d,r),a=n.memoizedState),(s=Gn||Fc(n,t,s,r,p,a,f))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=f,r=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,ed(e,n),s=n.memoizedProps,f=n.type===n.elementType?s:yn(n.type,s),o.props=f,h=n.pendingProps,p=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=hn(a):(a=Ke(t)?bt:Re.current,a=lr(n,a));var $=t.getDerivedStateFromProps;(d=typeof $=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||p!==a)&&Rc(n,o,r,a),Gn=!1,p=n.memoizedState,o.state=p,gl(n,r,o,i);var S=n.memoizedState;s!==h||p!==S||We.current||Gn?(typeof $=="function"&&(ds(n,t,$,r),S=n.memoizedState),(f=Gn||Fc(n,t,f,r,p,S,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=S),o.props=r,o.state=S,o.context=a,r=f):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return ms(e,n,t,r,l,i)}function ms(e,n,t,r,i,l){jd(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Lc(n,t,!1),Bn(e,n,l);r=n.stateNode,Fp.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=sr(n,e.child,null,l),n.child=sr(n,null,s,l)):Ue(e,n,s,l),n.memoizedState=r.state,i&&Lc(n,t,!0),n.child}function _d(e){var n=e.stateNode;n.pendingContext?Mc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Mc(e,n.context,!1),ha(e,n.containerInfo)}function Zc(e,n,t,r,i){return or(),sa(i),n.flags|=256,Ue(e,n,t,r),n.child}var ys={dehydrated:null,treeContext:null,retryLane:0};function $s(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nd(e,n,t){var r=n.pendingProps,i=pe.current,l=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ae(pe,i&1),e===null)return us(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Rl(o,r,0,null),e=St(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=$s(t),n.memoizedState=ys,e):xa(n,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Rp(e,n,o,r,s,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=rt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=rt(s,l):(l=St(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?$s(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=ys,r}return l=e.child,e=l.sibling,r=rt(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function xa(e,n){return n=Rl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function zi(e,n,t,r){return r!==null&&sa(r),sr(n,e.child,null,t),e=xa(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Rp(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=jo(Error(N(422))),zi(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Rl({mode:"visible",children:r.children},i,0,null),l=St(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&sr(n,e.child,null,o),n.child.memoizedState=$s(o),n.memoizedState=ys,l);if(!(n.mode&1))return zi(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(N(419)),r=jo(l,r,void 0),zi(e,n,o,r)}if(s=(o&e.childLanes)!==0,qe||s){if(r=_e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,An(e,i),xn(r,e,i,-1))}return _a(),r=jo(Error(N(421))),zi(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Jp.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,rn=Jn(i.nextSibling),ln=n,he=!0,vn=null,e!==null&&(cn[un++]=zn,cn[un++]=Pn,cn[un++]=Ct,zn=e.id,Pn=e.overflow,Ct=n),n=xa(n,r.children),n.flags|=4096,n)}function qc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),fs(e.return,n,t)}function _o(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function Ed(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(Ue(e,n,r.children,t),r=pe.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qc(e,t,n);else if(e.tag===19)qc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(pe,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&ml(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),_o(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&ml(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}_o(n,!0,t,null,l);break;case"together":_o(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Wi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Bn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),_t|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(N(153));if(n.child!==null){for(e=n.child,t=rt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=rt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Op(e,n,t){switch(n.tag){case 3:_d(n),or();break;case 5:nd(n);break;case 1:Ke(n.type)&&ul(n);break;case 4:ha(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;ae(hl,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ae(pe,pe.current&1),n.flags|=128,null):t&n.child.childLanes?Nd(e,n,t):(ae(pe,pe.current&1),e=Bn(e,n,t),e!==null?e.sibling:null);ae(pe,pe.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Ed(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(pe,pe.current),r)break;return null;case 22:case 23:return n.lanes=0,Cd(e,n,t)}return Bn(e,n,t)}var Md,vs,Ld,zd;Md=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};vs=function(){};Ld=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,xt(Nn.current);var l=null;switch(t){case"input":i=Oo(e,i),r=Oo(e,r),l=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),l=[];break;case"textarea":i=Vo(e,i),r=Vo(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=al)}Ho(t,r);var o;t=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var s=i[f];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Zr.hasOwnProperty(f)?l||(l=[]):(l=l||[]).push(f,null));for(f in r){var a=r[f];if(s=i?.[f],r.hasOwnProperty(f)&&a!==s&&(a!=null||s!=null))if(f==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(l||(l=[]),l.push(f,t)),t=a;else f==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(f,a)):f==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(f,""+a):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Zr.hasOwnProperty(f)?(a!=null&&f==="onScroll"&&ce("scroll",e),l||s===a||(l=[])):(l=l||[]).push(f,a))}t&&(l=l||[]).push("style",t);var f=l;(n.updateQueue=f)&&(n.flags|=4)}};zd=function(e,n,t,r){t!==r&&(n.flags|=4)};function Sr(e,n){if(!he)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Up(e,n,t){var r=n.pendingProps;switch(oa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(n),null;case 1:return Ke(n.type)&&cl(),Ae(n),null;case 3:return r=n.stateNode,ar(),fe(We),fe(Re),ga(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Mi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,vn!==null&&(_s(vn),vn=null))),vs(e,n),Ae(n),null;case 5:pa(n);var i=xt(li.current);if(t=n.type,e!==null&&n.stateNode!=null)Ld(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(N(166));return Ae(n),null}if(e=xt(Nn.current),Mi(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[jn]=n,r[ri]=l,e=(n.mode&1)!==0,t){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<Lr.length;i++)ce(Lr[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":rc(r,l),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},ce("invalid",r);break;case"textarea":lc(r,l),ce("invalid",r)}Ho(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Ei(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Ei(r.textContent,s,e),i=["children",""+s]):Zr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&ce("scroll",r)}switch(t){case"input":xi(r),ic(r,l,!0);break;case"textarea":xi(r),oc(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=al)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=of(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[jn]=n,e[ri]=r,Md(e,n,!1,!1),n.stateNode=e;e:{switch(o=Zo(t,r),t){case"dialog":ce("cancel",e),ce("close",e),i=r;break;case"iframe":case"object":case"embed":ce("load",e),i=r;break;case"video":case"audio":for(i=0;i<Lr.length;i++)ce(Lr[i],e);i=r;break;case"source":ce("error",e),i=r;break;case"img":case"image":case"link":ce("error",e),ce("load",e),i=r;break;case"details":ce("toggle",e),i=r;break;case"input":rc(e,r),i=Oo(e,r),ce("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),ce("invalid",e);break;case"textarea":lc(e,r),i=Vo(e,r),ce("invalid",e);break;default:i=r}Ho(t,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?cf(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&sf(e,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&qr(e,a):typeof a=="number"&&qr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Zr.hasOwnProperty(l)?a!=null&&l==="onScroll"&&ce("scroll",e):a!=null&&Qs(e,l,a,o))}switch(t){case"input":xi(e),ic(e,r,!1);break;case"textarea":xi(e),oc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ot(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Kt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=al)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Ae(n),null;case 6:if(e&&n.stateNode!=null)zd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(N(166));if(t=xt(li.current),xt(Nn.current),Mi(n)){if(r=n.stateNode,t=n.memoizedProps,r[jn]=n,(l=r.nodeValue!==t)&&(e=ln,e!==null))switch(e.tag){case 3:Ei(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ei(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[jn]=n,n.stateNode=r}return Ae(n),null;case 13:if(fe(pe),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&rn!==null&&n.mode&1&&!(n.flags&128))Kf(),or(),n.flags|=98560,l=!1;else if(l=Mi(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(N(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(N(317));l[jn]=n}else or(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ae(n),l=!1}else vn!==null&&(_s(vn),vn=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||pe.current&1?be===0&&(be=3):_a())),n.updateQueue!==null&&(n.flags|=4),Ae(n),null);case 4:return ar(),vs(e,n),e===null&&ni(n.stateNode.containerInfo),Ae(n),null;case 10:return ua(n.type._context),Ae(n),null;case 17:return Ke(n.type)&&cl(),Ae(n),null;case 19:if(fe(pe),l=n.memoizedState,l===null)return Ae(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)Sr(l,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=ml(e),o!==null){for(n.flags|=128,Sr(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ae(pe,pe.current&1|2),n.child}e=e.sibling}l.tail!==null&&$e()>ur&&(n.flags|=128,r=!0,Sr(l,!1),n.lanes=4194304)}else{if(!r)if(e=ml(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Sr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!he)return Ae(n),null}else 2*$e()-l.renderingStartTime>ur&&t!==1073741824&&(n.flags|=128,r=!0,Sr(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=$e(),n.sibling=null,t=pe.current,ae(pe,r?t&1|2:t&1),n):(Ae(n),null);case 22:case 23:return ja(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?en&1073741824&&(Ae(n),n.subtreeFlags&6&&(n.flags|=8192)):Ae(n),null;case 24:return null;case 25:return null}throw Error(N(156,n.tag))}function Gp(e,n){switch(oa(n),n.tag){case 1:return Ke(n.type)&&cl(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ar(),fe(We),fe(Re),ga(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return pa(n),null;case 13:if(fe(pe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(N(340));or()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return fe(pe),null;case 4:return ar(),null;case 10:return ua(n.type._context),null;case 22:case 23:return ja(),null;case 24:return null;default:return null}}var Pi=!1,Be=!1,Vp=typeof WeakSet=="function"?WeakSet:Set,D=null;function Zt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ye(e,n,r)}else t.current=null}function ws(e,n,t){try{t()}catch(r){ye(e,n,r)}}var Wc=!1;function Qp(e,n){if(rs=ll,e=Af(),ia(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,s=-1,a=-1,f=0,d=0,h=e,p=null;n:for(;;){for(var $;h!==t||i!==0&&h.nodeType!==3||(s=o+i),h!==l||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),($=h.firstChild)!==null;)p=h,h=$;for(;;){if(h===e)break n;if(p===t&&++f===i&&(s=o),p===l&&++d===r&&(a=o),($=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=$}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(is={focusedElem:e,selectionRange:t},ll=!1,D=n;D!==null;)if(n=D,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,D=e;else for(;D!==null;){n=D;try{var S=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var j=S.memoizedProps,T=S.memoizedState,m=n.stateNode,g=m.getSnapshotBeforeUpdate(n.elementType===n.type?j:yn(n.type,j),T);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(v){ye(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,D=e;break}D=n.return}return S=Wc,Wc=!1,S}function Ur(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ws(n,t,l)}i=i.next}while(i!==r)}}function Bl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function xs(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Pd(e){var n=e.alternate;n!==null&&(e.alternate=null,Pd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[jn],delete n[ri],delete n[ss],delete n[_p],delete n[Np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Td(e){return e.tag===5||e.tag===3||e.tag===4}function Kc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Td(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ks(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=al));else if(r!==4&&(e=e.child,e!==null))for(ks(e,n,t),e=e.sibling;e!==null;)ks(e,n,t),e=e.sibling}function Ss(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ss(e,n,t),e=e.sibling;e!==null;)Ss(e,n,t),e=e.sibling}var Ee=null,$n=!1;function Rn(e,n,t){for(t=t.child;t!==null;)Dd(e,n,t),t=t.sibling}function Dd(e,n,t){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(Ml,t)}catch{}switch(t.tag){case 5:Be||Zt(t,n);case 6:var r=Ee,i=$n;Ee=null,Rn(e,n,t),Ee=r,$n=i,Ee!==null&&($n?(e=Ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ee.removeChild(t.stateNode));break;case 18:Ee!==null&&($n?(e=Ee,t=t.stateNode,e.nodeType===8?wo(e.parentNode,t):e.nodeType===1&&wo(e,t),Xr(e)):wo(Ee,t.stateNode));break;case 4:r=Ee,i=$n,Ee=t.stateNode.containerInfo,$n=!0,Rn(e,n,t),Ee=r,$n=i;break;case 0:case 11:case 14:case 15:if(!Be&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&ws(t,n,o),i=i.next}while(i!==r)}Rn(e,n,t);break;case 1:if(!Be&&(Zt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){ye(t,n,s)}Rn(e,n,t);break;case 21:Rn(e,n,t);break;case 22:t.mode&1?(Be=(r=Be)||t.memoizedState!==null,Rn(e,n,t),Be=r):Rn(e,n,t);break;default:Rn(e,n,t)}}function Yc(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Vp),n.forEach(function(r){var i=eg.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function gn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:Ee=s.stateNode,$n=!1;break e;case 3:Ee=s.stateNode.containerInfo,$n=!0;break e;case 4:Ee=s.stateNode.containerInfo,$n=!0;break e}s=s.return}if(Ee===null)throw Error(N(160));Dd(l,o,i),Ee=null,$n=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(f){ye(i,n,f)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Id(n,e),n=n.sibling}function Id(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gn(n,e),Sn(e),r&4){try{Ur(3,e,e.return),Bl(3,e)}catch(j){ye(e,e.return,j)}try{Ur(5,e,e.return)}catch(j){ye(e,e.return,j)}}break;case 1:gn(n,e),Sn(e),r&512&&t!==null&&Zt(t,t.return);break;case 5:if(gn(n,e),Sn(e),r&512&&t!==null&&Zt(t,t.return),e.flags&32){var i=e.stateNode;try{qr(i,"")}catch(j){ye(e,e.return,j)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&rf(i,l),Zo(s,o);var f=Zo(s,l);for(o=0;o<a.length;o+=2){var d=a[o],h=a[o+1];d==="style"?cf(i,h):d==="dangerouslySetInnerHTML"?sf(i,h):d==="children"?qr(i,h):Qs(i,d,h,f)}switch(s){case"input":Uo(i,l);break;case"textarea":lf(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var $=l.value;$!=null?Kt(i,!!l.multiple,$,!1):p!==!!l.multiple&&(l.defaultValue!=null?Kt(i,!!l.multiple,l.defaultValue,!0):Kt(i,!!l.multiple,l.multiple?[]:"",!1))}i[ri]=l}catch(j){ye(e,e.return,j)}}break;case 6:if(gn(n,e),Sn(e),r&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(j){ye(e,e.return,j)}}break;case 3:if(gn(n,e),Sn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Xr(n.containerInfo)}catch(j){ye(e,e.return,j)}break;case 4:gn(n,e),Sn(e);break;case 13:gn(n,e),Sn(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(ba=$e())),r&4&&Yc(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(Be=(f=Be)||d,gn(n,e),Be=f):gn(n,e),Sn(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!d&&e.mode&1)for(D=e,d=e.child;d!==null;){for(h=D=d;D!==null;){switch(p=D,$=p.child,p.tag){case 0:case 11:case 14:case 15:Ur(4,p,p.return);break;case 1:Zt(p,p.return);var S=p.stateNode;if(typeof S.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,S.props=n.memoizedProps,S.state=n.memoizedState,S.componentWillUnmount()}catch(j){ye(r,t,j)}}break;case 5:Zt(p,p.return);break;case 22:if(p.memoizedState!==null){Jc(h);continue}}$!==null?($.return=p,D=$):Jc(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,f?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=af("display",o))}catch(j){ye(e,e.return,j)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=f?"":h.memoizedProps}catch(j){ye(e,e.return,j)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:gn(n,e),Sn(e),r&4&&Yc(e);break;case 21:break;default:gn(n,e),Sn(e)}}function Sn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Td(t)){var r=t;break e}t=t.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qr(i,""),r.flags&=-33);var l=Kc(e);Ss(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Kc(e);ks(e,s,o);break;default:throw Error(N(161))}}catch(a){ye(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Hp(e,n,t){D=e,Ad(e)}function Ad(e,n,t){for(var r=(e.mode&1)!==0;D!==null;){var i=D,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Pi;if(!o){var s=i.alternate,a=s!==null&&s.memoizedState!==null||Be;s=Pi;var f=Be;if(Pi=o,(Be=a)&&!f)for(D=i;D!==null;)o=D,a=o.child,o.tag===22&&o.memoizedState!==null?eu(i):a!==null?(a.return=o,D=a):eu(i);for(;l!==null;)D=l,Ad(l),l=l.sibling;D=i,Pi=s,Be=f}Xc(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,D=l):Xc(e)}}function Xc(e){for(;D!==null;){var n=D;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Be||Bl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Be)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:yn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Ic(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ic(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var f=n.alternate;if(f!==null){var d=f.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Xr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Be||n.flags&512&&xs(n)}catch(p){ye(n,n.return,p)}}if(n===e){D=null;break}if(t=n.sibling,t!==null){t.return=n.return,D=t;break}D=n.return}}function Jc(e){for(;D!==null;){var n=D;if(n===e){D=null;break}var t=n.sibling;if(t!==null){t.return=n.return,D=t;break}D=n.return}}function eu(e){for(;D!==null;){var n=D;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Bl(4,n)}catch(a){ye(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){ye(n,i,a)}}var l=n.return;try{xs(n)}catch(a){ye(n,l,a)}break;case 5:var o=n.return;try{xs(n)}catch(a){ye(n,o,a)}}}catch(a){ye(n,n.return,a)}if(n===e){D=null;break}var s=n.sibling;if(s!==null){s.return=n.return,D=s;break}D=n.return}}var Zp=Math.ceil,vl=Fn.ReactCurrentDispatcher,ka=Fn.ReactCurrentOwner,dn=Fn.ReactCurrentBatchConfig,q=0,_e=null,ve=null,Pe=0,en=0,qt=ft(0),be=0,ci=null,_t=0,Fl=0,Sa=0,Gr=null,Ze=null,ba=0,ur=1/0,Mn=null,wl=!1,bs=null,nt=null,Ti=!1,qn=null,xl=0,Vr=0,Cs=null,Ki=-1,Yi=0;function Ge(){return q&6?$e():Ki!==-1?Ki:Ki=$e()}function tt(e){return e.mode&1?q&2&&Pe!==0?Pe&-Pe:Mp.transition!==null?(Yi===0&&(Yi=xf()),Yi):(e=ie,e!==0||(e=window.event,e=e===void 0?16:Nf(e.type)),e):1}function xn(e,n,t,r){if(50<Vr)throw Vr=0,Cs=null,Error(N(185));di(e,t,r),(!(q&2)||e!==_e)&&(e===_e&&(!(q&2)&&(Fl|=t),be===4&&Hn(e,Pe)),Ye(e,r),t===1&&q===0&&!(n.mode&1)&&(ur=$e()+500,Dl&&dt()))}function Ye(e,n){var t=e.callbackNode;M0(e,n);var r=il(e,e===_e?Pe:0);if(r===0)t!==null&&cc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&cc(t),n===1)e.tag===0?Ep(nu.bind(null,e)):Zf(nu.bind(null,e)),Cp(function(){!(q&6)&&dt()}),t=null;else{switch(kf(r)){case 1:t=Ks;break;case 4:t=vf;break;case 16:t=rl;break;case 536870912:t=wf;break;default:t=rl}t=Qd(t,Bd.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Bd(e,n){if(Ki=-1,Yi=0,q&6)throw Error(N(327));var t=e.callbackNode;if(nr()&&e.callbackNode!==t)return null;var r=il(e,e===_e?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=kl(e,r);else{n=r;var i=q;q|=2;var l=Rd();(_e!==e||Pe!==n)&&(Mn=null,ur=$e()+500,kt(e,n));do try{Kp();break}catch(s){Fd(e,s)}while(!0);ca(),vl.current=l,q=i,ve!==null?n=0:(_e=null,Pe=0,n=be)}if(n!==0){if(n===2&&(i=Xo(e),i!==0&&(r=i,n=js(e,i))),n===1)throw t=ci,kt(e,0),Hn(e,r),Ye(e,$e()),t;if(n===6)Hn(e,r);else{if(i=e.current.alternate,!(r&30)&&!qp(i)&&(n=kl(e,r),n===2&&(l=Xo(e),l!==0&&(r=l,n=js(e,l))),n===1))throw t=ci,kt(e,0),Hn(e,r),Ye(e,$e()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(N(345));case 2:$t(e,Ze,Mn);break;case 3:if(Hn(e,r),(r&130023424)===r&&(n=ba+500-$e(),10<n)){if(il(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=os($t.bind(null,e,Ze,Mn),n);break}$t(e,Ze,Mn);break;case 4:if(Hn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-wn(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Zp(r/1960))-r,10<r){e.timeoutHandle=os($t.bind(null,e,Ze,Mn),r);break}$t(e,Ze,Mn);break;case 5:$t(e,Ze,Mn);break;default:throw Error(N(329))}}}return Ye(e,$e()),e.callbackNode===t?Bd.bind(null,e):null}function js(e,n){var t=Gr;return e.current.memoizedState.isDehydrated&&(kt(e,n).flags|=256),e=kl(e,n),e!==2&&(n=Ze,Ze=t,n!==null&&_s(n)),e}function _s(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function qp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!kn(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Hn(e,n){for(n&=~Sa,n&=~Fl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-wn(n),r=1<<t;e[t]=-1,n&=~r}}function nu(e){if(q&6)throw Error(N(327));nr();var n=il(e,0);if(!(n&1))return Ye(e,$e()),null;var t=kl(e,n);if(e.tag!==0&&t===2){var r=Xo(e);r!==0&&(n=r,t=js(e,r))}if(t===1)throw t=ci,kt(e,0),Hn(e,n),Ye(e,$e()),t;if(t===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,$t(e,Ze,Mn),Ye(e,$e()),null}function Ca(e,n){var t=q;q|=1;try{return e(n)}finally{q=t,q===0&&(ur=$e()+500,Dl&&dt())}}function Nt(e){qn!==null&&qn.tag===0&&!(q&6)&&nr();var n=q;q|=1;var t=dn.transition,r=ie;try{if(dn.transition=null,ie=1,e)return e()}finally{ie=r,dn.transition=t,q=n,!(q&6)&&dt()}}function ja(){en=qt.current,fe(qt)}function kt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,bp(t)),ve!==null)for(t=ve.return;t!==null;){var r=t;switch(oa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&cl();break;case 3:ar(),fe(We),fe(Re),ga();break;case 5:pa(r);break;case 4:ar();break;case 13:fe(pe);break;case 19:fe(pe);break;case 10:ua(r.type._context);break;case 22:case 23:ja()}t=t.return}if(_e=e,ve=e=rt(e.current,null),Pe=en=n,be=0,ci=null,Sa=Fl=_t=0,Ze=Gr=null,wt!==null){for(n=0;n<wt.length;n++)if(t=wt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}wt=null}return e}function Fd(e,n){do{var t=ve;try{if(ca(),Zi.current=$l,yl){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}yl=!1}if(jt=0,je=ke=ge=null,Or=!1,oi=0,ka.current=null,t===null||t.return===null){be=1,ci=n,ve=null;break}e:{var l=e,o=t.return,s=t,a=n;if(n=Pe,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var f=a,d=s,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var $=Uc(o);if($!==null){$.flags&=-257,Gc($,o,s,l,n),$.mode&1&&Oc(l,f,n),n=$,a=f;var S=n.updateQueue;if(S===null){var j=new Set;j.add(a),n.updateQueue=j}else S.add(a);break e}else{if(!(n&1)){Oc(l,f,n),_a();break e}a=Error(N(426))}}else if(he&&s.mode&1){var T=Uc(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Gc(T,o,s,l,n),sa(cr(a,s));break e}}l=a=cr(a,s),be!==4&&(be=2),Gr===null?Gr=[l]:Gr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var m=kd(l,a,n);Dc(l,m);break e;case 1:s=a;var g=l.type,y=l.stateNode;if(!(l.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(nt===null||!nt.has(y)))){l.flags|=65536,n&=-n,l.lanes|=n;var v=Sd(l,s,n);Dc(l,v);break e}}l=l.return}while(l!==null)}Ud(t)}catch(k){n=k,ve===t&&t!==null&&(ve=t=t.return);continue}break}while(!0)}function Rd(){var e=vl.current;return vl.current=$l,e===null?$l:e}function _a(){(be===0||be===3||be===2)&&(be=4),_e===null||!(_t&268435455)&&!(Fl&268435455)||Hn(_e,Pe)}function kl(e,n){var t=q;q|=2;var r=Rd();(_e!==e||Pe!==n)&&(Mn=null,kt(e,n));do try{Wp();break}catch(i){Fd(e,i)}while(!0);if(ca(),q=t,vl.current=r,ve!==null)throw Error(N(261));return _e=null,Pe=0,be}function Wp(){for(;ve!==null;)Od(ve)}function Kp(){for(;ve!==null&&!x0();)Od(ve)}function Od(e){var n=Vd(e.alternate,e,en);e.memoizedProps=e.pendingProps,n===null?Ud(e):ve=n,ka.current=null}function Ud(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Gp(t,n),t!==null){t.flags&=32767,ve=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,ve=null;return}}else if(t=Up(t,n,en),t!==null){ve=t;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);be===0&&(be=5)}function $t(e,n,t){var r=ie,i=dn.transition;try{dn.transition=null,ie=1,Yp(e,n,t,r)}finally{dn.transition=i,ie=r}return null}function Yp(e,n,t,r){do nr();while(qn!==null);if(q&6)throw Error(N(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(L0(e,l),e===_e&&(ve=_e=null,Pe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ti||(Ti=!0,Qd(rl,function(){return nr(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=dn.transition,dn.transition=null;var o=ie;ie=1;var s=q;q|=4,ka.current=null,Qp(e,t),Id(t,e),yp(is),ll=!!rs,is=rs=null,e.current=t,Hp(t),k0(),q=s,ie=o,dn.transition=l}else e.current=t;if(Ti&&(Ti=!1,qn=e,xl=i),l=e.pendingLanes,l===0&&(nt=null),C0(t.stateNode),Ye(e,$e()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(wl)throw wl=!1,e=bs,bs=null,e;return xl&1&&e.tag!==0&&nr(),l=e.pendingLanes,l&1?e===Cs?Vr++:(Vr=0,Cs=e):Vr=0,dt(),null}function nr(){if(qn!==null){var e=kf(xl),n=dn.transition,t=ie;try{if(dn.transition=null,ie=16>e?16:e,qn===null)var r=!1;else{if(e=qn,qn=null,xl=0,q&6)throw Error(N(331));var i=q;for(q|=4,D=e.current;D!==null;){var l=D,o=l.child;if(D.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var f=s[a];for(D=f;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:Ur(8,d,l)}var h=d.child;if(h!==null)h.return=d,D=h;else for(;D!==null;){d=D;var p=d.sibling,$=d.return;if(Pd(d),d===f){D=null;break}if(p!==null){p.return=$,D=p;break}D=$}}}var S=l.alternate;if(S!==null){var j=S.child;if(j!==null){S.child=null;do{var T=j.sibling;j.sibling=null,j=T}while(j!==null)}}D=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,D=o;else e:for(;D!==null;){if(l=D,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Ur(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,D=m;break e}D=l.return}}var g=e.current;for(D=g;D!==null;){o=D;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,D=y;else e:for(o=g;D!==null;){if(s=D,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Bl(9,s)}}catch(k){ye(s,s.return,k)}if(s===o){D=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,D=v;break e}D=s.return}}if(q=i,dt(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(Ml,e)}catch{}r=!0}return r}finally{ie=t,dn.transition=n}}return!1}function tu(e,n,t){n=cr(t,n),n=kd(e,n,1),e=et(e,n,1),n=Ge(),e!==null&&(di(e,1,n),Ye(e,n))}function ye(e,n,t){if(e.tag===3)tu(e,e,t);else for(;n!==null;){if(n.tag===3){tu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nt===null||!nt.has(r))){e=cr(t,e),e=Sd(n,e,1),n=et(n,e,1),e=Ge(),n!==null&&(di(n,1,e),Ye(n,e));break}}n=n.return}}function Xp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Ge(),e.pingedLanes|=e.suspendedLanes&t,_e===e&&(Pe&t)===t&&(be===4||be===3&&(Pe&130023424)===Pe&&500>$e()-ba?kt(e,0):Sa|=t),Ye(e,n)}function Gd(e,n){n===0&&(e.mode&1?(n=bi,bi<<=1,!(bi&130023424)&&(bi=4194304)):n=1);var t=Ge();e=An(e,n),e!==null&&(di(e,n,t),Ye(e,t))}function Jp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Gd(e,t)}function eg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(n),Gd(e,t)}var Vd;Vd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||We.current)qe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return qe=!1,Op(e,n,t);qe=!!(e.flags&131072)}else qe=!1,he&&n.flags&1048576&&qf(n,dl,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Wi(e,n),e=n.pendingProps;var i=lr(n,Re.current);er(n,t),i=ya(null,n,r,e,i,t);var l=$a();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ke(r)?(l=!0,ul(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,da(n),i.updater=Al,n.stateNode=i,i._reactInternals=n,hs(n,r,e,t),n=ms(null,n,r,!0,l,t)):(n.tag=0,he&&l&&la(n),Ue(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Wi(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=tg(r),e=yn(r,e),i){case 0:n=gs(null,n,r,e,t);break e;case 1:n=Hc(null,n,r,e,t);break e;case 11:n=Vc(null,n,r,e,t);break e;case 14:n=Qc(null,n,r,yn(r.type,e),t);break e}throw Error(N(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:yn(r,i),gs(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:yn(r,i),Hc(e,n,r,i,t);case 3:e:{if(_d(n),e===null)throw Error(N(387));r=n.pendingProps,l=n.memoizedState,i=l.element,ed(e,n),gl(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=cr(Error(N(423)),n),n=Zc(e,n,r,t,i);break e}else if(r!==i){i=cr(Error(N(424)),n),n=Zc(e,n,r,t,i);break e}else for(rn=Jn(n.stateNode.containerInfo.firstChild),ln=n,he=!0,vn=null,t=Xf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(or(),r===i){n=Bn(e,n,t);break e}Ue(e,n,r,t)}n=n.child}return n;case 5:return nd(n),e===null&&us(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,ls(r,i)?o=null:l!==null&&ls(r,l)&&(n.flags|=32),jd(e,n),Ue(e,n,o,t),n.child;case 6:return e===null&&us(n),null;case 13:return Nd(e,n,t);case 4:return ha(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=sr(n,null,r,t):Ue(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:yn(r,i),Vc(e,n,r,i,t);case 7:return Ue(e,n,n.pendingProps,t),n.child;case 8:return Ue(e,n,n.pendingProps.children,t),n.child;case 12:return Ue(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,ae(hl,r._currentValue),r._currentValue=o,l!==null)if(kn(l.value,o)){if(l.children===i.children&&!We.current){n=Bn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Tn(-1,t&-t),a.tag=2;var f=l.updateQueue;if(f!==null){f=f.shared;var d=f.pending;d===null?a.next=a:(a.next=d.next,d.next=a),f.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),fs(l.return,t,n),s.lanes|=t;break}a=a.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(N(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),fs(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}Ue(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,er(n,t),i=hn(i),r=r(i),n.flags|=1,Ue(e,n,r,t),n.child;case 14:return r=n.type,i=yn(r,n.pendingProps),i=yn(r.type,i),Qc(e,n,r,i,t);case 15:return bd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:yn(r,i),Wi(e,n),n.tag=1,Ke(r)?(e=!0,ul(n)):e=!1,er(n,t),xd(n,r,i),hs(n,r,i,t),ms(null,n,r,!0,e,t);case 19:return Ed(e,n,t);case 22:return Cd(e,n,t)}throw Error(N(156,n.tag))};function Qd(e,n){return $f(e,n)}function ng(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(e,n,t,r){return new ng(e,n,t,r)}function Na(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tg(e){if(typeof e=="function")return Na(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zs)return 11;if(e===qs)return 14}return 2}function rt(e,n){var t=e.alternate;return t===null?(t=fn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Xi(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")Na(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Bt:return St(t.children,i,l,n);case Hs:o=8,i|=8;break;case Ao:return e=fn(12,t,n,i|2),e.elementType=Ao,e.lanes=l,e;case Bo:return e=fn(13,t,n,i),e.elementType=Bo,e.lanes=l,e;case Fo:return e=fn(19,t,n,i),e.elementType=Fo,e.lanes=l,e;case ef:return Rl(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xu:o=10;break e;case Ju:o=9;break e;case Zs:o=11;break e;case qs:o=14;break e;case Un:o=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return n=fn(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function St(e,n,t,r){return e=fn(7,e,r,n),e.lanes=t,e}function Rl(e,n,t,r){return e=fn(22,e,r,n),e.elementType=ef,e.lanes=t,e.stateNode={isHidden:!1},e}function No(e,n,t){return e=fn(6,e,null,n),e.lanes=t,e}function Eo(e,n,t){return n=fn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function rg(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ao(0),this.expirationTimes=ao(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ao(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ea(e,n,t,r,i,l,o,s,a){return e=new rg(e,n,t,s,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=fn(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},da(l),e}function ig(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:At,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Hd(e){if(!e)return st;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(N(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ke(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(N(171))}if(e.tag===1){var t=e.type;if(Ke(t))return Hf(e,t,n)}return n}function Zd(e,n,t,r,i,l,o,s,a){return e=Ea(t,r,!0,e,i,l,o,s,a),e.context=Hd(null),t=e.current,r=Ge(),i=tt(t),l=Tn(r,i),l.callback=n??null,et(t,l,i),e.current.lanes=i,di(e,i,r),Ye(e,r),e}function Ol(e,n,t,r){var i=n.current,l=Ge(),o=tt(i);return t=Hd(t),n.context===null?n.context=t:n.pendingContext=t,n=Tn(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=et(i,n,o),e!==null&&(xn(e,i,o,l),Hi(e,i,o)),o}function Sl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ru(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ma(e,n){ru(e,n),(e=e.alternate)&&ru(e,n)}function lg(){return null}var qd=typeof reportError=="function"?reportError:function(e){console.error(e)};function La(e){this._internalRoot=e}Ul.prototype.render=La.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(N(409));Ol(e,n,null,null)};Ul.prototype.unmount=La.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Nt(function(){Ol(null,e,null,null)}),n[In]=null}};function Ul(e){this._internalRoot=e}Ul.prototype.unstable_scheduleHydration=function(e){if(e){var n=Cf();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Qn.length&&n!==0&&n<Qn[t].priority;t++);Qn.splice(t,0,e),t===0&&_f(e)}};function za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function iu(){}function og(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var f=Sl(o);l.call(f)}}var o=Zd(n,r,e,0,null,!1,!1,"",iu);return e._reactRootContainer=o,e[In]=o.current,ni(e.nodeType===8?e.parentNode:e),Nt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var f=Sl(a);s.call(f)}}var a=Ea(e,0,!1,null,null,!1,!1,"",iu);return e._reactRootContainer=a,e[In]=a.current,ni(e.nodeType===8?e.parentNode:e),Nt(function(){Ol(n,a,t,r)}),a}function Vl(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var a=Sl(o);s.call(a)}}Ol(n,o,e,i)}else o=og(t,n,e,i,r);return Sl(o)}Sf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Mr(n.pendingLanes);t!==0&&(Ys(n,t|1),Ye(n,$e()),!(q&6)&&(ur=$e()+500,dt()))}break;case 13:Nt(function(){var r=An(e,1);if(r!==null){var i=Ge();xn(r,e,1,i)}}),Ma(e,1)}};Xs=function(e){if(e.tag===13){var n=An(e,134217728);if(n!==null){var t=Ge();xn(n,e,134217728,t)}Ma(e,134217728)}};bf=function(e){if(e.tag===13){var n=tt(e),t=An(e,n);if(t!==null){var r=Ge();xn(t,e,n,r)}Ma(e,n)}};Cf=function(){return ie};jf=function(e,n){var t=ie;try{return ie=e,n()}finally{ie=t}};Wo=function(e,n,t){switch(n){case"input":if(Uo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Tl(r);if(!i)throw Error(N(90));tf(r),Uo(r,i)}}}break;case"textarea":lf(e,t);break;case"select":n=t.value,n!=null&&Kt(e,!!t.multiple,n,!1)}};df=Ca;hf=Nt;var sg={usingClientEntryPoint:!1,Events:[pi,Ut,Tl,uf,ff,Ca]},br={findFiberByHostInstance:vt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ag={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mf(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||lg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Di=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Di.isDisabled&&Di.supportsFiber)try{Ml=Di.inject(ag),_n=Di}catch{}}sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sg;sn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!za(n))throw Error(N(200));return ig(e,n,null,t)};sn.createRoot=function(e,n){if(!za(e))throw Error(N(299));var t=!1,r="",i=qd;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Ea(e,1,!1,null,null,t,!1,r,i),e[In]=n.current,ni(e.nodeType===8?e.parentNode:e),new La(n)};sn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=mf(n),e=e===null?null:e.stateNode,e};sn.flushSync=function(e){return Nt(e)};sn.hydrate=function(e,n,t){if(!Gl(n))throw Error(N(200));return Vl(null,e,n,!0,t)};sn.hydrateRoot=function(e,n,t){if(!za(e))throw Error(N(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=qd;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Zd(n,null,e,1,t??null,i,!1,l,o),e[In]=n.current,ni(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Ul(n)};sn.render=function(e,n,t){if(!Gl(n))throw Error(N(200));return Vl(null,e,n,!1,t)};sn.unmountComponentAtNode=function(e){if(!Gl(e))throw Error(N(40));return e._reactRootContainer?(Nt(function(){Vl(null,null,e,!1,function(){e._reactRootContainer=null,e[In]=null})}),!0):!1};sn.unstable_batchedUpdates=Ca;sn.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Gl(t))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Vl(e,n,t,!1,r)};sn.version="18.3.1-next-f1338f8080-20240426";function Wd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wd)}catch(e){console.error(e)}}Wd(),qu.exports=sn;var cg=qu.exports,Kd,lu=cg;Kd=lu.createRoot,lu.hydrateRoot;const Yd="hasukgo.device.v1",ug="hasukgo",fr="meta",Ns="deviceId";function Xd(){try{if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();if(typeof crypto<"u"&&typeof crypto.getRandomValues=="function"){const e=crypto.getRandomValues(new Uint8Array(16));e[6]=e[6]&15|64,e[8]=e[8]&63|128;const n=[...e].map(t=>t.toString(16).padStart(2,"0")).join("");return`${n.slice(0,8)}-${n.slice(8,12)}-${n.slice(12,16)}-${n.slice(16,20)}-${n.slice(20)}`}}catch{}return`fb-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function Jd(e){const n=e.replace(/[^a-f0-9]/gi,"").toUpperCase(),t=n.slice(0,4)||"0000",r=n.slice(4,8)||"0000";return`HSG-${t}-${r}`}function fg(){try{return localStorage.getItem(Yd)}catch{return null}}function eh(e){try{return localStorage.setItem(Yd,e),!0}catch{return!1}}function Pa(){return new Promise(e=>{try{if(typeof indexedDB>"u")return e(null);const n=indexedDB.open(ug,1);n.onupgradeneeded=()=>{const t=n.result;t.objectStoreNames.contains(fr)||t.createObjectStore(fr)},n.onsuccess=()=>e(n.result),n.onerror=()=>e(null),setTimeout(()=>e(null),1500)}catch{e(null)}})}function dg(e,n){return new Promise(t=>{try{const i=e.transaction(fr,"readonly").objectStore(fr).get(n);i.onsuccess=()=>t(i.result??null),i.onerror=()=>t(null)}catch{t(null)}})}function Ta(e,n,t){return new Promise(r=>{try{const i=e.transaction(fr,"readwrite");i.objectStore(fr).put(t,n),i.oncomplete=()=>r(!0),i.onerror=()=>r(!1),i.onabort=()=>r(!1)}catch{r(!1)}})}function nh(){if(typeof navigator>"u")return"알 수 없음";const e=navigator.userAgent,n=typeof globalThis.Capacitor<"u",t=/Android/i.test(e)?"Android":/iPhone|iPad|iPod/i.test(e)?"iOS":/Windows/i.test(e)?"Windows":/Mac OS X/i.test(e)?"macOS":"기타";if(n)return`${t} 앱`;const r=/KAKAOTALK/i.test(e)?" · 카카오톡 인앱":/Line\//i.test(e)?" · 라인 인앱":/Instagram|FBAN|FBAV/i.test(e)?" · SNS 인앱":"";return`${t} 웹${r}`}let Wt=null;async function hg(){if(Wt)return Wt;const e=fg(),n=await Pa(),t=n?await dg(n,Ns):null;let r=e??t??null,i=!1;r||(r=Xd(),i=!0);const l=eh(r);let o=!1;return n&&(o=await Ta(n,Ns,r)),Wt={id:r,shortCode:Jd(r),platform:nh(),fresh:i,ephemeral:!l&&!o},Wt}async function pg(e){const n=e??Xd();eh(n);const t=await Pa();return t&&await Ta(t,Ns,n),Wt={id:n,shortCode:Jd(n),platform:nh(),fresh:!0,ephemeral:!1},Wt}async function gg(){let e=!1;try{const r="__hasukgo_probe__";localStorage.setItem(r,"1"),e=localStorage.getItem(r)==="1",localStorage.removeItem(r)}catch{e=!1}const n=await Pa();let t=!1;return n&&(t=await Ta(n,"__probe__","1")),{localStorage:e,indexedDb:t}}const nn=120,tn=180,Da=[{id:"classic",name:"전통",tint:null,tintAmount:0,ink:"#12100e",red:"#d8402f",gold:"#e8b53c",white:"#f4ece0",paperTop:"#fbf4e6",paperBottom:"#efe2ca"},{id:"moonlit",name:"달밤",tint:"#1b2b4a",tintAmount:.55,ink:"#0a0e18",red:"#e05a6b",gold:"#cfe0ff",white:"#eaf1ff",paperTop:"#dfe8f7",paperBottom:"#c3d2e8"},{id:"hanji",name:"한지",tint:"#d8c9a8",tintAmount:.62,ink:"#4a3a28",red:"#c2584a",gold:"#b89050",white:"#fdf8ec",paperTop:"#fdf8ec",paperBottom:"#f0e4cc"},{id:"gilt",name:"금박",tint:"#2a2010",tintAmount:.5,ink:"#1a1408",red:"#e0483a",gold:"#ffd66b",white:"#fff6da",paperTop:"#3a2e18",paperBottom:"#241c0e"}],mi=Da[0];function th(e){return Da.find(n=>n.id===e)??mi}let Le=mi.ink,Se=mi.white;function Qr(e,n,t){const r=h=>[parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)],[i,l,o]=r(e),[s,a,f]=r(n),d=(h,p)=>Math.round(h*(1-t)+p*t).toString(16).padStart(2,"0");return`#${d(i,s)}${d(l,a)}${d(o,f)}`}function bl(e,n){const t=/^#?([0-9a-f]{6})$/i.exec(e);if(!t)return e;const r=parseInt(t[1],16),i=n>0?255:0,l=Math.abs(n);return`#${[r>>16&255,r>>8&255,r&255].map(o=>Math.round(o+(i-o)*l).toString(16).padStart(2,"0")).join("")}`}let ne="#e02b1d",H="#f2c21c";const Hr="#1766c8",mg="#2a9d4a",zr="#ef7a20",yg={1:"#f3e2b8",2:"#e6b8c8",3:"#f0c2c8",4:"#b9c6d2",5:"#bfd6c2",6:"#e8c4b4",7:"#efd0a8",8:"#b6c8e0",9:"#f0dca4",10:"#f0c49a",11:"#cdc2e0",12:"#b8c2c8",0:"#f2e0b0"},le=12,oe=12,ze=96,Fe=152;function A(e,n){return`<path d="${e}" fill="${n??Le}"/><path d="${e}" fill="#ffffff" opacity="0.07" transform="translate(0 -1.6)"/>`}function ou(e,n,t,r){const i=oe+Fe;let l=A(`M${e-n/2} ${i} L${e-n*.1} ${t+6} L${e} ${t} L${e+n*.1} ${t+6} L${e+n/2} ${i} Z`);return r&&(l+=A(`M${e} ${t-12} l${n*.34} ${n*.3} l-${n*.34} ${n*.16} l-${n*.34} -${n*.16} Z`,r)),l}function Ne(e,n,t,r,i){let l="";for(let o=0;o<5;o+=1){const s=o/5*Math.PI*2-Math.PI/2,a=e+Math.cos(s)*t*.58,f=n+Math.sin(s)*t*.58;l+=`<circle cx="${a.toFixed(1)}" cy="${f.toFixed(1)}" r="${(t*.5).toFixed(1)}" fill="${r}"/>`,l+=`<path d="M${e.toFixed(1)} ${n.toFixed(1)} L${a.toFixed(1)} ${f.toFixed(1)}" stroke="${bl(r,-.3)}" stroke-width="${(t*.1).toFixed(2)}" opacity="0.55"/>`}l+=`<circle cx="${e}" cy="${n}" r="${(t*.3).toFixed(1)}" fill="${bl(i,-.2)}"/>`,l+=`<circle cx="${e}" cy="${n}" r="${(t*.21).toFixed(1)}" fill="${i}"/>`;for(let o=0;o<5;o+=1){const s=o/5*Math.PI*2;l+=`<circle cx="${(e+Math.cos(s)*t*.2).toFixed(1)}" cy="${(n+Math.sin(s)*t*.2).toFixed(1)}" r="${(t*.055).toFixed(2)}" fill="${Le}" opacity="0.6"/>`}return l}function bn(e,n,t,r,i){return`<ellipse cx="${e}" cy="${n}" rx="${t}" ry="${r}" fill="${i??Le}"/>`}function $g(e){const n=oe+Fe;switch(e){case 1:return ou(38,54,34,H)+ou(84,46,58,H);case 2:return`
        ${A(`M${le} ${n} Q44 96 40 ${oe+16} L52 ${oe+16} Q56 96 ${le+22} ${n} Z`)}
        ${A("M44 74 Q68 66 92 44 L96 54 Q72 76 48 84 Z")}
        ${Ne(88,34,13,ne,H)}
        ${Ne(62,60,11,ne,H)}
        ${Ne(96,74,10,ne,H)}
        ${Ne(34,108,10,ne,H)}`;case 3:return`
        ${A("M30 146 Q34 100 26 60 L38 58 Q46 102 42 146 Z")}
        ${A("M38 82 Q64 76 94 56 L98 66 Q70 88 42 92 Z")}
        ${Ne(84,42,15,ne,H)}
        ${Ne(56,64,13,ne,H)}
        ${Ne(98,84,12,ne,H)}
        ${Ne(34,112,12,ne,H)}
        ${Ne(74,116,11,ne,H)}`;case 4:return[0,1,2].map(t=>{const r=30+t*26;let i=A(`M${r} ${oe+8} q6 60 -2 ${Fe-20} l6 0 q4 -66 -2 -130 Z`);for(let l=0;l<6;l+=1){const o=oe+22+l*19;i+=bn(r-9,o,7.5,4.5)+bn(r+11,o+8,7.5,4.5)}return i}).join("");case 5:return`
        ${A("M36 146 Q22 96 34 44 L44 46 Q34 98 46 146 Z")}
        ${A("M60 146 Q58 92 66 40 L76 44 Q68 96 70 146 Z")}
        ${A("M86 146 Q96 98 92 54 L100 58 Q102 102 96 146 Z")}
        ${Ne(56,52,14,Hr,H)}
        ${Ne(84,86,12,Hr,H)}`;case 6:return`
        ${bn(34,104,24,16)}
        ${bn(88,110,22,15)}
        ${bn(62,128,26,14)}
        ${Ne(58,62,26,ne,H)}
        ${Ne(92,96,17,ne,H)}`;case 7:return[0,1].map(t=>{const r=44+t*30;let i=A(`M${r} ${oe+10} q7 58 -2 ${Fe-24} l6 0 q4 -64 -3 -126 Z`);for(let l=0;l<6;l+=1){const o=oe+24+l*18;i+=bn(r-10,o,8,4.6,ne)+bn(r+12,o+8,8,4.6,ne)}return i}).join("");case 8:return A(`M${le} ${n} C${le+6} ${n-62} 36 ${n-74} 60 ${n-74} C84 ${n-74} ${le+ze-6} ${n-62} ${le+ze} ${n} Z`);case 9:return`
        ${bn(32,112,24,15)}
        ${bn(90,118,22,14)}
        ${bn(62,134,26,12)}
        ${Ne(56,60,22,zr,H)}
        ${Ne(92,90,16,zr,H)}
        ${Ne(28,74,14,zr,H)}`;case 10:return`
        ${A("M60 146 Q58 116 60 96 L68 96 Q70 118 68 146 Z")}
        ${Mo(60,74,30,zr)}
        ${Mo(28,106,20,ne)}
        ${Mo(94,100,20,ne)}`;case 11:return`
        ${A(`M${le} ${n} Q20 100 ${le+6} 76 Q54 78 60 ${n} Z`)}
        ${A(`M${le+ze} ${n} Q100 100 ${le+ze-6} 76 Q66 78 60 ${n} Z`)}
        ${A("M60 118 Q44 80 60 44 Q76 80 60 118 Z")}
        ${[38,60,82].map(t=>Ne(t,32,11,Hr,H)).join("")}`;default:return`
        <rect x="${le}" y="${oe}" width="${ze}" height="${Fe}" fill="${Le}"/>
        ${A(`M${le+6} ${oe} q14 48 4 ${Fe} l10 0 q10 -56 -4 ${-Fe} Z`,Se)}
        ${[0,1,2].map(t=>A(`M${le+14+t*4} ${oe+30+t*16} q-12 32 -${14+t*4} ${58-t*10} l7 3 q10 -30 ${16+t*4} -${58-t*10} Z`,Se)).join("")}`}}function Mo(e,n,t,r){return`<path d="M${e} ${n-t} l${t*.3} ${t*.42} l${t*.62} -${t*.2} l-${t*.22} ${t*.52} l${t*.52} ${t*.1} l-${t*.46} ${t*.4} l${t*.2} ${t*.44} l-${t*.68} -${t*.16} l-${t*.18} ${t*.5} l-${t*.18} -${t*.5} l-${t*.68} ${t*.16} l${t*.2} -${t*.44} l-${t*.46} -${t*.4} l${t*.52} -${t*.1} l-${t*.22} -${t*.52} l${t*.62} ${t*.2} Z" fill="${r}"/>`}function vg(e){switch(e){case 1:return`
        <circle cx="88" cy="38" r="23" fill="${ne}"/>
        <g stroke="${Le}" stroke-width="2.4" stroke-linejoin="round">
          <path d="M22 132 Q38 84 72 90 Q88 94 84 110 Q60 130 26 128 Z" fill="${Se}"/>
          <path d="M72 90 Q62 58 82 46 Q94 42 96 54 Q92 74 84 92 Z" fill="${Se}"/>
          <path d="M92 44 l16 -6 l-10 15 Z" fill="${ne}"/>
          <path d="M38 128 l-4 22 l8 0 l3 -21 Z" fill="${Se}"/>
          <path d="M56 130 l-2 22 l8 0 l1 -21 Z" fill="${Se}"/>
        </g>
        <path d="M84 40 q8 -9 16 -6" stroke="${ne}" stroke-width="5" fill="none" stroke-linecap="round"/>
        <circle cx="88" cy="52" r="3" fill="${Le}"/>`;case 3:return`
        <rect x="${le}" y="${oe+4}" width="${ze}" height="58" fill="${ne}"/>
        <path d="M${le+4} ${oe+34} q13 -17 26 0 q13 17 26 0 q13 -17 26 0 q9 12 14 3"
              stroke="${Le}" stroke-width="6" fill="none" stroke-linecap="round"/>
        <rect x="${le}" y="${oe+62}" width="${ze}" height="11" fill="${Le}"/>
        ${A(`M${le+12} ${oe+73} l0 26 l10 0 l0 -26 Z`)}
        ${A(`M${le+ze-22} ${oe+73} l0 26 l10 0 l0 -26 Z`)}`;case 8:return`<circle cx="60" cy="54" r="27" fill="${Se}" stroke="${Le}" stroke-width="2"/>`;case 11:return`
        ${A("M30 124 Q46 82 80 88 Q96 92 90 108 Q66 126 32 122 Z",ne)}
        ${A("M80 88 Q76 62 94 54 Q104 52 104 62 Q98 78 90 90 Z",ne)}
        ${A("M100 52 l12 -6 l-6 14 Z",H)}
        ${A("M36 120 Q22 134 26 148 l10 -4 Q36 132 44 124 Z",ne)}
        <circle cx="98" cy="60" r="2.6" fill="${Le}"/>`;default:return`
        ${A("M22 64 Q60 30 98 64 Q60 50 22 64 Z",ne)}
        <rect x="57" y="62" width="5" height="28" fill="${Se}"/>
        ${A("M44 92 Q60 82 76 92 L82 146 L38 146 Z",Se)}
        <circle cx="60" cy="82" r="11" fill="${Se}"/>
        ${A("M50 76 Q60 66 70 76 Q60 72 50 76 Z")}`}}function wg(e){const n=e.month;if(e.isGodori){const t=n===2?mg:n===4?H:zr;return`
      ${A("M28 100 Q52 74 82 88 Q96 96 88 108 Q60 124 30 112 Z",t)}
      ${A("M82 88 Q78 70 92 64 Q100 62 100 70 Q96 82 88 92 Z",t)}
      ${A("M96 62 l12 -5 l-7 12 Z",ne)}
      <circle cx="92" cy="72" r="2.6" fill="${Le}"/>
      ${A("M36 112 Q54 126 78 114 Q60 132 34 120 Z")}`}switch(n){case 5:return`
        ${A("M14 92 Q60 62 106 92 L106 104 Q60 76 14 104 Z",H)}
        ${A("M26 100 l0 40 l9 0 l0 -38 Z",H)}
        ${A("M85 100 l0 40 l9 0 l0 -38 Z",H)}`;case 6:return`
        ${A("M48 72 Q24 48 18 74 Q14 96 46 88 Z",H)}
        ${A("M52 72 Q76 48 82 74 Q86 96 54 88 Z",H)}
        ${A("M48 64 l4 34 l-4 0 Z")}
        ${A("M88 116 Q72 100 68 118 Q66 132 88 128 Z",H)}
        ${A("M92 116 Q108 100 112 118 Q114 132 92 128 Z",H)}`;case 7:return`
        ${A("M22 112 Q34 84 62 82 Q94 80 100 104 Q102 128 66 130 Q28 132 22 112 Z",H)}
        ${A("M22 106 l-12 -8 l10 18 Z",H)}
        ${A("M34 128 l-3 18 l8 0 l2 -17 Z",H)}
        ${A("M60 130 l-2 16 l8 0 l1 -16 Z",H)}
        ${A("M88 126 l2 18 l8 -2 l-3 -17 Z",H)}
        <circle cx="36" cy="102" r="3" fill="${Le}"/>`;case 9:return`
        ${A("M30 66 L90 66 L80 100 Q60 112 40 100 Z",ne)}
        ${A("M36 72 L84 72 L78 90 Q60 100 42 90 Z",Se)}
        <rect x="55" y="110" width="10" height="16" fill="${ne}"/>
        ${A("M38 126 L82 126 L82 136 L38 136 Z",Hr)}
        <text x="60" y="88" font-size="15" text-anchor="middle" fill="${Le}" font-family="serif" font-weight="bold">壽</text>`;case 10:return`
        ${A("M30 116 Q44 88 70 88 Q98 88 102 110 Q104 132 70 134 Q34 136 30 116 Z",H)}
        ${A("M34 106 Q20 92 24 74 Q34 78 42 94 Z",H)}
        ${A("M24 74 l-9 -14 l3 -3 l10 13 Z")}
        ${A("M26 72 l9 -13 l4 3 l-9 12 Z")}
        <circle cx="28" cy="92" r="3" fill="${Le}"/>
        ${A("M44 134 l-3 14 l8 0 l2 -13 Z",H)}
        ${A("M88 132 l3 16 l8 -2 l-3 -14 Z",H)}`;default:return`
        ${A("M24 84 Q56 64 88 92 Q58 116 24 84 Z",Se)}
        ${A("M88 92 l20 14 l-26 2 Z",Se)}
        <circle cx="42" cy="86" r="2.6" fill="${Le}"/>`}}function xg(e){const n=e==="cheong"?Hr:e==="bi"?"#9aa1a8":ne,t=e==="hong"?"홍단":e==="cheong"?"청단":"";return`
    <g transform="rotate(-24 60 79)">
      <rect x="16" y="58" width="88" height="42" fill="${n}"/>
      <rect x="16" y="58" width="88" height="4" fill="${Se}" opacity="0.35"/>
      ${t?`<text x="60" y="87" font-size="19" text-anchor="middle" fill="${Se}" font-family="serif" font-weight="bold" letter-spacing="1">${t}</text>`:""}
    </g>`}function kg(){return`
    <rect x="${le+ze-30}" y="${oe+Fe-34}" width="28" height="32" rx="3" fill="${ne}"/>
    <text x="${le+ze-16}" y="${oe+Fe-11}" font-size="21" text-anchor="middle" fill="${Se}" font-family="serif" font-weight="bold">光</text>`}function su(e){return e.isBonus?`
      <rect x="${le+6}" y="${oe+40}" width="${ze-12}" height="56" fill="${H}"/>
      <text x="60" y="${oe+80}" font-size="30" text-anchor="middle" fill="${Le}" font-family="serif" font-weight="bold">${e.piValue}피</text>`:(e.piValue??1)>=2?`
      <rect x="${le+10}" y="${oe+Fe-34}" width="${ze-20}" height="28" fill="${ne}"/>
      <text x="60" y="${oe+Fe-13}" font-size="19" text-anchor="middle" fill="${Se}" font-family="serif" font-weight="bold">쌍피</text>`:""}function Sg(e,n,t){const r=n.tint?Qr(n.red,n.tint,n.tintAmount*.7):n.red;let i=Qr(n.paperTop,yg[e]??"#ffffff",.08);return n.tint&&(i=Qr(i,n.tint,n.tintAmount*.5)),`
  <defs>
    <clipPath id="cl${t}"><rect x="${le}" y="${oe}" width="${ze}" height="${Fe}"/></clipPath>
    <filter id="gr${t}" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>
  <defs>
    <linearGradient id="bd${t}" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0%" stop-color="${bl(r,.18)}"/>
      <stop offset="52%" stop-color="${r}"/>
      <stop offset="100%" stop-color="${bl(r,-.22)}"/>
    </linearGradient>
  </defs>
  <rect width="${nn}" height="${tn}" rx="9" fill="url(#bd${t})"/>
  <rect x="2" y="2" width="${nn-4}" height="${tn-4}" rx="7.5" fill="none"
        stroke="#ffffff" stroke-width="1.2" opacity="0.22"/>
  <rect x="${le-2}" y="${oe-2}" width="${ze+4}" height="${Fe+4}" fill="${n.ink}" opacity="0.55"/>
  <rect x="${le}" y="${oe}" width="${ze}" height="${Fe}" fill="${i}"/>
  <rect x="${le}" y="${oe}" width="${ze}" height="${Fe}" fill="none" stroke="${n.ink}"
        stroke-width="1.1" opacity="0.35"/>`}function bg(e,n){const t=n?.width??nn,r=n?.height??tn,i=th(n?.skin??mi.id);Le=i.ink,Se=i.white,ne=i.red,H=i.gold;const l=`${e.id}-${i.id}`.replace(/[^a-zA-Z0-9-]/g,""),o=e.month===0?"보너스":`${e.month}`;let s="";return e.isBonus?s=su(e):(s=$g(e.month),e.kind==="gwang"?s+=vg(e.month)+kg():e.kind==="yeol"?s+=wg(e):e.kind==="tti"&&e.tti?s+=xg(e.tti):s+=su(e)),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${nn} ${tn}" width="${t}" height="${r}" role="img" aria-label="${e.name}">
  ${Sg(e.month,i,l)}
  <g clip-path="url(#cl${l})">${s}</g>
  <text x="${nn/2}" y="${tn-4}" font-size="11" text-anchor="middle" fill="${Se}" font-family="sans-serif"
        opacity="0.9">${o}</text>
  <rect x="${le}" y="${oe}" width="${ze}" height="${Fe}" filter="url(#gr${l})" opacity="0.085"
        style="mix-blend-mode:multiply"/>
  <rect width="${nn}" height="${tn}" rx="9" filter="url(#gr${l})" opacity="0.045" style="mix-blend-mode:multiply"/>
  <rect x="0.75" y="0.75" width="${nn-1.5}" height="${tn-1.5}" rx="9" fill="none" stroke="${i.ink}"
        stroke-width="1.5" opacity="0.45"/>
</svg>`}function Cl(e,n){return`data:image/svg+xml;utf8,${encodeURIComponent(bg(e,n))}`}function Cg(e){const n=e?.width??nn,t=e?.height??tn,r=th(e?.skin??mi.id),i=r.tint?Qr("#7a2b24",r.tint,r.tintAmount*.8):"#7a2b24",l=r.tint?Qr("#8f342b",r.tint,r.tintAmount*.8):"#8f342b";return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${nn} ${tn}" width="${n}" height="${t}" role="img" aria-label="뒷면">
  <rect width="${nn}" height="${tn}" rx="10" fill="${i}"/>
  <rect x="7" y="7" width="${nn-14}" height="${tn-14}" rx="7" fill="${l}" stroke="${r.gold}" stroke-width="2.5"/>
  <circle cx="${nn/2}" cy="${tn/2}" r="30" fill="none" stroke="${r.gold}" stroke-width="3"/>
  <circle cx="${nn/2}" cy="${tn/2}" r="18" fill="none" stroke="${r.gold}" stroke-width="2"/>
  <path d="M60 60 v60 M30 90 h60" stroke="${r.gold}" stroke-width="2" opacity="0.6"/>
</svg>`}function jg(e){return`data:image/svg+xml;utf8,${encodeURIComponent(Cg(e))}`}const au=[{id:"maru",name:"밤의 마루",vars:{}},{id:"daylight",name:"툇마루 한낮",vars:{"--wood-dark":"#6b5640","--wood":"#8a7157","--wood-light":"#a68d6f","--paper":"#fff8ec","--paper-dim":"#e6dbc8","--lamp":"#ffcf6b","--lamp-dim":"#c9a25a"}},{id:"snow",name:"첫눈 오는 밤",vars:{"--wood-dark":"#1b2233","--wood":"#333f57","--wood-light":"#4c5b78","--paper":"#eef4ff","--paper-dim":"#c2cddf","--lamp":"#a8d0ff","--lamp-dim":"#6f8fb8","--accent":"#5c7fd0"}},{id:"lantern",name:"등불",vars:{"--wood-dark":"#2b1508","--wood":"#5c2f12","--wood-light":"#7d4520","--paper":"#ffeccd","--paper-dim":"#dfbf95","--lamp":"#ffb347","--lamp-dim":"#c97a2a","--accent":"#d4552f"}}];function Ia(e){return au.find(n=>n.id===e)??au[0]}const It=[{id:"cards:hanji",kind:"cards",name:"한지 화패",desc:"누런 한지에 찍어낸 듯한 담백한 패",price:1200},{id:"cards:moonlit",kind:"cards",name:"달밤 화패",desc:"달빛에 담근 푸른 패. 밤에 치기 좋다",price:2200},{id:"cards:gilt",kind:"cards",name:"금박 화패",desc:"어두운 바탕에 금빛. 하숙집에선 과하다는 평",price:3800},{id:"theme:daylight",kind:"theme",name:"툇마루 한낮",desc:"해 드는 대낮의 나무 빛깔로 바꾼다",price:900},{id:"theme:snow",kind:"theme",name:"첫눈 오는 밤",desc:"창밖에 눈이 오는 듯한 푸른 밤",price:1800},{id:"theme:lantern",kind:"theme",name:"등불",desc:"전등 하나만 켜둔 진한 주황빛",price:2800}],_g=It.reduce((e,n)=>e+n.price,0);function On(e){return e.id.split(":")[1]}function Ng(e){return Da.find(n=>n.id===e)?.name??e}const Eg=[{id:"eunseo",order:1,name:"은서",nickname:"옆방",age:22,job:"시각디자인과 2학년",room:"201호",season:"spring",personality:["밝음","덤벙댐","정 많음"],styleLabel:"아직 규칙을 외우는 중. 뭘 낼지 모르겠으면 그냥 낸다",backstory:"통학 두 시간이 싫어 무작정 짐을 쌌다. 버스를 놓쳐 언덕을 걸어 올라온 첫 하숙생.",style:{weights:{pi:1.1},mistakeScale:1.15,greedScale:1.1,inferenceScale:.8,aggressionScale:.7,stopScoreDelta:1},unlock:[],rate:3,reward:{base:26,perStage:5},lines:{matchStart:{low:["어, 안녕! 나 은서. 옆방 살아.","규칙은... 어제 외웠어. 아마도.","살살 해줘. 진짜로."],mid:["오늘은 좀 늘었어. 기대해도 돼.","어제 혼자 연습했다? 마루에서.","자, 앉아 앉아. 방석 여기."],high:["오늘도 같이 칠 거지? 기다렸는데.","네 자리 맡아뒀어. 여기 앉아.","지면 야식. 이기면... 도 야식."]},go:{low:["어어, 고? 고! 맞나? 고!","이거 고 하는 거 맞지? 맞겠지.","몰라, 일단 고!"],mid:["고. 이번엔 계산하고 하는 거야.","여기서 멈추면 아쉽잖아. 고!","손이 좋아. 고 할래."],high:["고. 너 표정 보니까 더 가도 될 것 같아.","고! 놀라는 얼굴 보고 싶어서.","고 할게. 조금만 더 같이 있자는 뜻이야."]},stop:{low:["스톱! 더 가면 나 무너져.","여기서 멈출래. 심장이 쿵쾅거려.","스톱... 맞지? 스톱!"],mid:["스톱. 욕심내다 뻑 나는 거 봤거든.","딱 여기. 오늘은 여기까지가 좋아.","스톱할게. 다음 판이 더 재밌을 거야."],high:["스톱. 오래 끌면 네가 지루해할까 봐.","여기서 스톱. 대신 한 판 더 하자.","스톱! 이겼다 이겼다."]},ppeok:{low:["으악 뻑! 이거 왜 이래!","아 진짜... 방금 건 못 본 걸로.","뻑이다... 나 이거 제일 싫어."],mid:["뻑. 괜찮아, 어차피 내가 가져올 거야.","묶였네. 저거 내 거야 나중에.","뻑 났다. 표정 관리 중."],high:["뻑! 봤지? 너 웃었어 지금.","아 뻑... 웃지 마 좀.","뻑 났는데 왜 기분이 나쁘지 않지."]},sseulVictim:{low:["어? 바닥이 비었어. 그래도 되는 거야?","다 가져갔어... 방금 뭐 한 거야?","잠깐만, 다시 설명해줘."],mid:["쓸었네. 그거 배워야겠다.","아, 그렇게 하는 거구나. 메모.","잘한다 진짜. 얄밉게."],high:["또 쓸어? 나 이제 안 놀라.","멋있어서 봐준다. 이번만.","쓸 때 표정 좀 짓지 마, 심장에 안 좋아."]},win:{low:["이겼다! 나 이겼어! 진짜로?","어... 이긴 거 맞지? 맞지?","와 처음이야 이런 거."],mid:["이겼다! 연습한 보람 있네.","봤지? 나 늘었다니까.","오늘은 내가 설거지 면제야."],high:["이겼다! 근데 네가 봐준 거 아니지?","이겼어. 상으로 내일 편의점 같이 가자.","내가 이겼으니까 오늘 야식은 내가 살게. 이상하지?"]},lose:{low:["졌다... 그래도 재밌었어.","아 아까워! 다음엔 안 져.","한 판만 더, 응? 한 판만."],mid:["졌네. 근데 이번엔 꽤 근접했지?","분하다. 분한데 또 하고 싶다.","다음 판에 두고 보자."],high:["졌지만 기분은 안 나빠. 이상하지.","또 졌네. 너랑 하면 왜 자꾸 지지.","졌으니까 벌칙. 내일도 같이 쳐줘."]},affection:{low:["저기, 이따 마루에 나올 거야?","어... 물어볼 게 있었는데. 아 맞다 그거.","괜찮으면 잠깐 얘기할래?"],mid:["있잖아, 나 요즘 밤이 기다려져.","너랑 있으면 시간이 왜 이렇게 빨라?","이거 너 주려고 사 왔어. 별거 아니야."],high:["나 사실 하고 싶은 말이 있는데.","맞고 말고도 같이 하고 싶은 거 많아.","오늘은 승부 말고 그냥 얘기하자."]},hints:["나 요즘 피만 모아. 진짜야. 눈치 좀 챙겨.","바닥에 광 놔두면 내가 가져간다? 알려주는 거야.","힌트 줄게. 나 계산 못 해. 오래 끌면 네가 이겨."]},events:[{stage:1,scriptId:"eunseo_01",title:"옆방 사람",hasChoice:!1},{stage:2,scriptId:"eunseo_02",title:"하숙집 규칙 세 가지",hasChoice:!1},{stage:3,scriptId:"eunseo_03",title:"은서의 취향",hasChoice:!1},{stage:4,scriptId:"eunseo_04",title:"새벽 두 시의 라면",hasChoice:!0},{stage:5,scriptId:"eunseo_05",title:"빨래 걷기 당번",hasChoice:!0},{stage:6,scriptId:"eunseo_06",title:"편의점 앞 벤치",hasChoice:!0},{stage:7,scriptId:"eunseo_07",title:"과제가 안 풀리는 밤",hasChoice:!1},{stage:8,scriptId:"eunseo_08",title:"은서가 서울에 온 이유",hasChoice:!1},{stage:9,scriptId:"eunseo_09",title:"오해는 짧게",hasChoice:!0},{stage:10,scriptId:"eunseo_10",title:"마지막 판, 첫 마음",hasChoice:!0}],look:{hair:"#6b4630",hairStyle:"bob",skin:"#f7d9c4",outfits:["#f4a7b9","#ffd9a0","#fff3e0"],accent:"#e8657f",prop:"스케치북",face:"round",eyes:"round",bangs:"straight",build:"petite",accessory:"hairpin",wear:["hoodie","tee","dress"],propArt:"sketchbook"}},{id:"hayeong",order:2,name:"하영",nickname:"요리왕",age:24,job:"조리학과 4학년",room:"202호",season:"spring",personality:["차분함","부지런함","은근 승부욕"],styleLabel:"피부터 쌓는다. 화려하진 않은데 정신 차리면 피박",backstory:"졸업 작품으로 낼 식당을 준비 중이다. 열 명분 밥을 지어볼 부엌이 필요했다.",style:{weights:{pi:1.7,tti:.9,gwang:.85},mistakeScale:.95,greedScale:.9,inferenceScale:1.05,aggressionScale:.8,stopScoreDelta:0},unlock:[],rate:4,reward:{base:31,perStage:6},lines:{matchStart:{low:["부엌 정리 끝났어. 한 판 하자.","손 씻고 와. 기름 묻은 손으로 패 만지지 말고.","앉아. 국 데워놨으니까 지면 그거 먹고 가."],mid:["오늘 반찬 잘 됐어. 이기면 하나 더 줄게.","자, 시작하자. 불 다 껐어.","오늘은 좀 길게 갈 생각이야."],high:["네 몫 덜어놨어. 치우면서 먹어.","기다렸어. 앉아.","오늘은 네가 좋아하는 거 했어. 판 끝나고."]},go:{low:["고.","고. 아직 멀었어.","고 할게. 피가 모자라."],mid:["고. 피 다섯 장만 더.","고. 재료 다 못 모았거든.","고. 여기서 끊으면 맛이 안 나."],high:["고. 오늘은 좀 욕심내 볼래.","고. 너랑 더 하고 싶어서라고 하면 웃을래?","고. 이유는 나중에 말해줄게."]},stop:{low:["스톱. 이 정도면 충분해.","스톱. 간 맞았어.","스톱."],mid:["스톱. 더 끓이면 졸아.","여기서 딱. 욕심은 요리도 맞고도 망쳐.","스톱할게. 피박은 확인했고."],high:["스톱. 얼른 끝내고 야식 먹자.","스톱. 오늘은 빨리 끝내고 얘기하고 싶어.","스톱. 대신 설거지는 네가."]},ppeok:{low:["뻑.","묶였네. 상관없어.","뻑이야. 저건 내가 다시 가져올 거고."],mid:["뻑. 냄비 뚜껑 닫아둔 셈 치자.","뻑 났어. 기다리면 돼.","저거 내 거야. 손대지 마."],high:["뻑. 너 지금 웃었지.","뻑 났는데 네가 좋아하네. 얄밉다.","뻑. 그래도 네 앞이라 다행이야."]},sseulVictim:{low:["쓸었네. 잘하네.","바닥 깨끗하다. 부엌도 그렇게 해줘.","인정. 잘했어."],mid:["쓸 줄도 알고. 언제 배웠어?","아까워라. 저거 내 피였는데.","좋아, 다음 판에 돌려받을게."],high:["또 쓸어. 진짜 얄미워.","그거 하지 마. 심장 내려앉아.","잘하는 거 알겠으니까 그만 좀 웃어."]},win:{low:["내가 이겼어. 국 식기 전에 먹어.","이겼네. 설거지는 네 담당.","수고했어. 다음엔 더 잘하겠지."],mid:["이겼다. 오늘 저녁은 내가 정한다.","봤지? 피가 무서운 거야.","이겼어. 상은 네가 주는 거로."],high:["이겼는데 왜 미안하지.","이겼으니까 소원 하나. 내일도 여기 앉아.","이겼다. 근데 오늘은 안 기쁘네. 네가 아쉬워해서."]},lose:{low:["졌네. 잘 쳤어.","인정할게. 오늘은 네가 나았어.","다음엔 안 봐줘."],mid:["졌다. 분한데 밥은 차려줄게.","너 요즘 늘었어. 인정.","한 판 더 하면 결과 다를 텐데."],high:["졌어. 근데 네가 이기는 것도 나쁘지 않네.","졌으니까 오늘은 내가 설거지. 같이 하자.","졌다. 이렇게 지는 건 처음이야."]},affection:{low:["이따 주방 쪽으로 와. 남은 거 있어.","잠깐 손 좀 빌릴 수 있을까.","물어볼 게 있는데, 지금 괜찮아?"],mid:["요리는 혼자 먹으면 맛이 없더라.","네 입맛 이제 대충 알 것 같아.","밥 먹을 사람이 있다는 게 좋아졌어."],high:["나 원래 남 챙기는 사람 아니야. 너 빼고.","이건 네 거야. 다른 사람 주려고 만든 거 아니야.","오늘은 내 얘기 좀 할게. 들어줄래?"]},hints:["나 피 모아. 피만 봐. 그거 하나만 막아도 반은 이겨.","쌍피 바닥에 놓지 마. 나 그거 주우려고 기다려.","내가 스톱 안 하면 피가 모자란 거야. 계산해봐."]},events:[{stage:1,scriptId:"hayeong_01",title:"부엌은 내 구역",hasChoice:!1},{stage:2,scriptId:"hayeong_02",title:"냉장고 칸 배분",hasChoice:!1},{stage:3,scriptId:"hayeong_03",title:"간을 못 맞추는 사람",hasChoice:!1},{stage:4,scriptId:"hayeong_04",title:"장 보러 가는 길",hasChoice:!0},{stage:5,scriptId:"hayeong_05",title:"실습 과제 시식단",hasChoice:!0},{stage:6,scriptId:"hayeong_06",title:"비 오는 날의 부침개",hasChoice:!0},{stage:7,scriptId:"hayeong_07",title:"졸업하면 뭐 할 거야",hasChoice:!1},{stage:8,scriptId:"hayeong_08",title:"하영이 요리를 시작한 날",hasChoice:!1},{stage:9,scriptId:"hayeong_09",title:"누구 몫이었을까",hasChoice:!0},{stage:10,scriptId:"hayeong_10",title:"한 사람을 위한 상",hasChoice:!0}],look:{hair:"#2f2723",hairStyle:"ponytail",skin:"#f3d3b8",outfits:["#a8d5b5","#d7e8c4","#fdf6e3"],accent:"#3e8e5a",prop:"앞치마",face:"oval",eyes:"droopy",bangs:"side",build:"average",accessory:"band",wear:["apron","shirt","hanbok"],propArt:"ladle"}},{id:"jiwoo",order:3,name:"지우",nickname:"밤샘",age:26,job:"미대 대학원생",room:"203호",season:"spring",personality:["야행성","무심함","집요함"],styleLabel:"띠만 본다. 홍단 청단 나오면 눈빛이 달라진다",backstory:"작업실 월세가 밀렸다. 새벽에 불을 켜도 아무도 뭐라 안 하는 방을 찾다 왔다.",style:{weights:{tti:1.8,hongdan:1.4,cheongdan:1.4,chodan:1.2,pi:.8},mistakeScale:.95,greedScale:1.1,inferenceScale:1,aggressionScale:.9,stopScoreDelta:1},unlock:[],rate:6,reward:{base:36,perStage:7},lines:{matchStart:{low:["아. 너구나. 앉아.","지금 몇 시야? ...뭐, 상관없나.","작업 막혔어. 딴짓하기 딱 좋네."],mid:["왔네. 커피 식었는데 마실래?","오늘은 좀 칠 만해. 앉아.","새벽에 제일 잘 보이거든, 패가."],high:["기다렸어. 밤이 길어서.","네 소리 나면 작업 손이 멈춰. 큰일이야.","앉아. 불 좀 줄일게."]},go:{low:["고.","고. 아직 색이 안 찼어.","고. 두 장 더."],mid:["고. 홍단이 보여.","고. 여기서 멈추면 그림이 미완성이야.","고. 나 이거 완성할 거야."],high:["고. 오늘 밤은 길게 쓰고 싶어.","고. 너 놀라는 거 보려고.","고. 이유 물어보지 마."]},stop:{low:["스톱.","됐어. 스톱.","여기까지. 스톱."],mid:["스톱. 색 다 채웠어.","스톱. 더 칠하면 탁해져.","스톱. 완성은 멈출 때 정해지는 거야."],high:["스톱. 얼른 끝내고 딴 얘기 하자.","스톱. 오늘은 너랑 할 얘기가 있어서.","스톱. 미안, 급해졌어."]},ppeok:{low:["뻑.","...묶였네.","저거 내 거였는데."],mid:["뻑. 밑칠 다시 하는 셈 치지.","괜찮아. 저 색은 내가 회수해.","뻑 났다고 그림이 끝나는 건 아니야."],high:["뻑. 웃지 마.","뻑이야. 너 지금 신났지.","뻑. 그래도 네 앞이라 덜 억울하다."]},sseulVictim:{low:["쓸었네.","바닥이 하얘졌어. 캔버스 같다.","잘했어. 인정."],mid:["아깝다. 저기 청단 있었는데.","손 빠르네. 그거 좋은 거야.","다음엔 안 남겨둘게."],high:["또 쓸어. 너 그거 일부러 하지.","그만 좀 잘해. 집중 안 돼.","쓸 때 표정이 제일 좋아. 그건 인정."]},win:{low:["끝. 잘 자.","내가 이겼어. 나 작업하러 갈게.","수고. 다음엔 좀 더 버텨봐."],mid:["이겼다. 오늘 색 잘 나왔어.","띠 모으는 거 무섭지? 이제 알겠지.","이겼으니까 옥상 조명 내가 쓸게."],high:["이겼는데 아쉽네. 판이 끝나서.","이겼어. 근데 안 갈래. 좀 더 있자.","내가 이겼으니 소원. 내일도 새벽에 나와."]},lose:{low:["졌네. 잘 치더라.","...다시 해.","그림이나 그리러 가야겠다."],mid:["졌다. 오늘 네 손이 좋았어.","인정. 근데 다음은 아니야.","지고 나니까 오히려 잠이 깼어."],high:["졌어. 근데 계속 생각날 것 같아, 이 판.","졌다. 너한테 지는 건 왜 덜 분하지.","졌으니까 벌칙. 내 작업 구경하고 가."]},affection:{low:["이거 봐줄래? 아니다, 됐어.","옥상 갈 건데. 같이 갈 사람 없나 해서.","작업 얘기 지루하지 않아?"],mid:["네가 보면 그림이 좀 달라 보여.","요즘 그림에 사람이 들어가. 처음이야.","밤에 누가 있으면 이렇게 다르구나."],high:["이거 너 그린 거야. 보지 마. ...봐도 돼.","나 원래 사람 안 그려.","오늘은 작업 안 할래. 너랑 있을래."]},hints:["나 띠만 봐. 홍단 청단 그거만.","띠 바닥에 놓지 마. 그거 먹으려고 기다리는 거야.","내가 길게 끄는 건 단이 하나 모자라서야."]},events:[{stage:1,scriptId:"jiwoo_01",title:"새벽 세 시의 마루",hasChoice:!1},{stage:2,scriptId:"jiwoo_02",title:"조용히 해달라는 부탁",hasChoice:!1},{stage:3,scriptId:"jiwoo_03",title:"지우의 색",hasChoice:!1},{stage:4,scriptId:"jiwoo_04",title:"옥상에서 본 새벽",hasChoice:!0},{stage:5,scriptId:"jiwoo_05",title:"모델 좀 서줄래",hasChoice:!0},{stage:6,scriptId:"jiwoo_06",title:"24시간 카페 원정",hasChoice:!0},{stage:7,scriptId:"jiwoo_07",title:"그림이 안 그려질 때",hasChoice:!1},{stage:8,scriptId:"jiwoo_08",title:"떨어진 공모전",hasChoice:!1},{stage:9,scriptId:"jiwoo_09",title:"누가 모델이야",hasChoice:!0},{stage:10,scriptId:"jiwoo_10",title:"완성된 그림",hasChoice:!0}],look:{hair:"#1f1b2e",hairStyle:"long",skin:"#efd2bd",outfits:["#5b6b8c","#3d4359","#c9c3e0"],accent:"#7a6fd8",prop:"물감 묻은 소매",face:"slim",eyes:"sleepy",bangs:"curtain",build:"tall",accessory:"none",wear:["smock","hoodie","coat"],propArt:"brush"}},{id:"sua",order:4,name:"수아",nickname:"체대",age:25,job:"체육교육과 4학년",room:"301호",season:"summer",personality:["직진","호승심","뒤끝 없음"],styleLabel:"7점만 넘으면 무조건 고. 멈추는 법을 배운 적이 없다",backstory:"임용 준비를 한 해 더 하기로 했다. 바다가 보이면 아침마다 뛸 것 같아서 왔다고 한다.",style:{weights:{gwang:1.2,yeol:1.2,godori:1.3},mistakeScale:.9,greedScale:1.8,inferenceScale:.95,aggressionScale:1.5,stopScoreDelta:4},unlock:[{tenantId:"eunseo",stage:5}],rate:8,reward:{base:43,perStage:8},lines:{matchStart:{low:["왔어? 몸 풀었어?","승부는 승부야. 봐주는 거 없어.","자, 시작하자. 시간 아까워."],mid:["오늘 컨디션 좋아. 너도 그래야 할 텐데.","훈련 끝나고 바로 왔어. 앉아.","이번엔 오래 갈 각오해."],high:["너랑 하는 게 제일 재밌어. 진짜로.","오늘 하루 종일 이 시간만 기다렸어.","자, 붙자. 살살은 안 해."]},go:{low:["고!","당연히 고지. 왜 물어봐?","고! 여기서 멈추는 건 지는 거야."],mid:["고! 아직 반도 안 왔어.","고. 멈추는 법 안 배웠거든.","고! 더 가자!"],high:["고! 네가 따라오는 게 재밌어서.","고! 오늘 밤 안 끝낼 거야.","고. 이렇게 해야 네가 진심으로 붙잖아."]},stop:{low:["...스톱. 억울한데 스톱.","여기서 끊는다. 다음 판 각오해.","스톱. 오늘은 여기까지만."],mid:["스톱. 이겼으면 됐어.","스톱! 깔끔하게 끝내자.","스톱. 더 가면 욕심이야. 이번만."],high:["스톱. 얼른 끝내고 같이 걷자.","스톱. 오늘은 빨리 끝내고 싶었어.","스톱! 대신 내일 또 하는 거다."]},ppeok:{low:["아 뻑! 짜증나!","뻑? 뻑이라고?","이런 거 진짜 싫어."],mid:["뻑. 괜찮아, 뒤집으면 돼.","묶였네. 근데 나 저거 회수할 거야.","뻑 한 번에 안 무너져."],high:["아 뻑! 야, 웃지 마!","뻑 났다고 좋아하지 마라 진짜.","뻑. 근데 네가 웃으니까 봐준다."]},sseulVictim:{low:["뭐야, 다 가져갔어?","야. 그거 좀 심하지 않아?","쓸었네. 인정은 한다."],mid:["잘하네. 열받게.","좋아, 그게 실력이면 인정.","다음엔 안 당해."],high:["또 쓸어? 너 나 놀리지.","그거 멋있는 거 알고 하는 거지.","쓸 때마다 심박수 올라가. 운동보다 심해."]},win:{low:["이겼다! 역시.","수고. 다음엔 더 붙어보자.","이겼어. 기분 좋다."],mid:["이겼다! 오늘 컨디션 최고!","봤지? 고는 이렇게 하는 거야.","이겼으니까 옥상 내 거."],high:["이겼다! 근데 너 왜 안 분해해?","이겼어. 상으로 내일 같이 뛰자. 새벽에.","이겼는데 네가 웃으니까 이긴 것 같지가 않네."]},lose:{low:["졌네. 깔끔하게 인정.","분하다! 다시!","잘 쳤어. 다음은 내 차례야."],mid:["졌다. 근데 재밌었어.","역시 너랑 해야 재밌지.","한 판 더! 아직 안 끝났어."],high:["졌어. 근데 하나도 안 억울해. 이상하지.","너한테 지는 건 왜 기분이 괜찮지.","졌으니까 벌칙 받을게. 뭐든지."]},affection:{low:["야, 너 내일 시간 있어? 아니 그냥 물어본 거야.","운동 같이 할 사람 구하는데.","뭐 마실래? 사 온 김에."],mid:["너 은근히 끈질겨. 그거 좋은 뜻이야.","같이 뛰면 기록이 잘 나와. 신기하지.","요즘 훈련보다 이 시간이 더 기다려져."],high:["나 원래 말 돌리는 거 못 해.","좋아하는 건 좋아한다고 말하는 성격이야.","오늘은 승부 말고 다른 얘기 하자."]},hints:["나 7점만 넘으면 무조건 고야. 그거 이용해.","고박 노려. 내가 멈추질 않으니까.","광이랑 열끗만 봐. 피는 신경 안 써."]},events:[{stage:1,scriptId:"sua_01",title:"3층에서 내려온 사람",hasChoice:!1},{stage:2,scriptId:"sua_02",title:"새벽 여섯 시의 발소리",hasChoice:!1},{stage:3,scriptId:"sua_03",title:"수아의 승부욕",hasChoice:!1},{stage:4,scriptId:"sua_04",title:"같이 뛸래?",hasChoice:!0},{stage:5,scriptId:"sua_05",title:"여름 옥상, 수박",hasChoice:!0},{stage:6,scriptId:"sua_06",title:"삔 발목",hasChoice:!0},{stage:7,scriptId:"sua_07",title:"임용까지 남은 시간",hasChoice:!1},{stage:8,scriptId:"sua_08",title:"그만둔 선수 생활",hasChoice:!1},{stage:9,scriptId:"sua_09",title:"말 안 한 이유",hasChoice:!0},{stage:10,scriptId:"sua_10",title:"마지막 고",hasChoice:!0}],look:{hair:"#3a2b1f",hairStyle:"short",skin:"#e8c09b",outfits:["#3f7fd0","#e2e8f0","#f5a623"],accent:"#2d6ac9",prop:"손목 테이핑",face:"round",eyes:"sharp",bangs:"wispy",build:"tall",accessory:"none",wear:["jersey","tee","dress"],propArt:"tape"}},{id:"minji",order:5,name:"민지",nickname:"취준",age:26,job:"취업준비생",room:"302호",season:"summer",personality:["계산적","현실적","속정 깊음"],styleLabel:"기대값으로 친다. 스톱 타이밍이 소름 돋게 정확하다",backstory:"삼 년째 취업 준비. 고시원에서 나와야 했고, 알아본 곳 중 여기가 제일 쌌다.",style:{weights:{pi:1.2,tti:1.1,gwang:1.1},mistakeScale:.8,greedScale:.6,inferenceScale:1.25,aggressionScale:.7,stopScoreDelta:-2},unlock:[{tenantId:"hayeong",stage:5}],rate:10,reward:{base:49,perStage:8},lines:{matchStart:{low:["오늘 자소서 세 개 썼어. 머리 좀 식히자.","한 판만. 딱 한 판.","앉아. 시간은 내가 정할게."],mid:["오늘은 좀 오래 해도 돼. 서류 다 냈거든.","너랑 하면 머리가 비워져서 좋아.","자, 시작하자."],high:["하루 종일 이 시간 계산하면서 버텼어.","오늘은 아무 생각 없이 치고 싶어.","앉아. 커피 내려놨어."]},go:{low:["고. 기대값이 아직 플러스야.","고 할게. 계산해봤어.","고."],mid:["고. 상대 피가 다섯 장이거든.","고. 여기서 끊는 게 손해야.","고. 숫자가 그렇게 말해."],high:["고. 오늘은 숫자 말고 기분으로.","고. 판이 끝나는 게 싫어서.","고. 이런 건 처음이야."]},stop:{low:["스톱.","스톱. 여기가 최적이야.","스톱. 더 가면 기대값이 음수야."],mid:["스톱. 정확히 여기.","스톱. 미안한데 계산이 끝났어.","여기서 끊는 게 맞아. 스톱."],high:["스톱. 대신 한 판 더 하자.","스톱. 오늘은 얘기가 더 하고 싶어서.","스톱. 계산은 내일부터 할게."]},ppeok:{low:["뻑. 변수 발생.","뻑이네. 확률상 있을 수 있는 일이야.","예상 범위 안이야."],mid:["뻑. 12% 확률이었는데 걸렸네.","괜찮아. 회수 계획 있어.","변수는 계산에 넣어뒀어."],high:["뻑. 너 앞에서만 이래.","이상하다. 너랑 할 때만 확률이 안 맞아.","뻑. 웃지 마. 계산 흔들려."]},sseulVictim:{low:["쓸었네. 기대값 밖이야.","인정. 잘 봤어.","그건 못 막았다."],mid:["아깝다. 그거 내 계획이었는데.","좋은 수였어. 진심으로.","메모해둘게. 다음엔 안 당해."],high:["또 쓸어. 내 계산이 자꾸 틀려.","너 때문에 통계가 망가져.","잘한다. 얄밉게 잘해."]},win:{low:["이겼어. 오늘 운이 좋았네.","수고했어. 잘 자.","이겼다. 다시 자소서 쓰러 가야지."],mid:["이겼다. 오늘은 좀 기분 좋네.","계산대로야. 기분은 계산 밖이지만.","이겼으니까 오늘은 일찍 잘래."],high:["이겼는데 아쉽다. 판이 끝나서.","이겼어. 근데 안 갈래. 좀 더 있자.","이겼으니까 소원 하나 들어줘. 내일도 나와줘."]},lose:{low:["졌네. 변수는 늘 있으니까.","잘 쳤어. 인정.","다음엔 계산 더 정확히 할게."],mid:["졌다. 근데 기분은 안 나빠.","네가 나보다 잘 봤어. 인정할게.","지는 것도 데이터야."],high:["졌어. 근데 오늘 제일 즐거웠어.","너한테 지면 왜 손해 같지가 않지.","졌으니까 오늘은 네 말 들을게."]},affection:{low:["나 요즘 계획이 다 틀어져. 왜인지 모르겠어.","잠깐 앉아도 돼? 머리가 복잡해서.","이거 남는 거야. 먹어."],mid:["계획에 없던 시간이 제일 좋더라.","너랑 있으면 조급한 게 좀 가라앉아.","나 사실 하루에 이 시간이 제일 기다려져."],high:["내 인생 계획표에 너가 들어왔어.","계산 안 하고 말하는 거 처음이야.","오늘은 아무것도 재지 말고 얘기하자."]},hints:["나는 7점 되면 거의 스톱이야. 그거 계산해.","내가 고를 하면 네 피가 모자란 거야. 확인해봐.","길게 끌면 내가 유리해. 빨리 끝내."]},events:[{stage:1,scriptId:"minji_01",title:"불 켜진 302호",hasChoice:!1},{stage:2,scriptId:"minji_02",title:"공용 프린터 규칙",hasChoice:!1},{stage:3,scriptId:"minji_03",title:"민지의 계산법",hasChoice:!1},{stage:4,scriptId:"minji_04",title:"면접 복장 골라주기",hasChoice:!0},{stage:5,scriptId:"minji_05",title:"탈락 메일이 온 밤",hasChoice:!0},{stage:6,scriptId:"minji_06",title:"편의점 야식 회의",hasChoice:!0},{stage:7,scriptId:"minji_07",title:"부모님 전화",hasChoice:!1},{stage:8,scriptId:"minji_08",title:"포기한 전공",hasChoice:!1},{stage:9,scriptId:"minji_09",title:"합격한 친구",hasChoice:!0},{stage:10,scriptId:"minji_10",title:"계산에 없던 답",hasChoice:!0}],look:{hair:"#463229",hairStyle:"bun",skin:"#f2d5bd",outfits:["#5c6370","#d8dde6","#9aa5b1"],accent:"#4c6ef5",prop:"안경",face:"oval",eyes:"narrow",bangs:"side",build:"average",accessory:"glasses",wear:["blouse","suit","knit"],propArt:"notebook"}},{id:"narae",order:6,name:"나래",nickname:"옥상",age:25,job:"천문학과 대학원생",room:"303호",season:"summer",personality:["몽롱함","신비로움","고집"],styleLabel:"광만 쫓는다. 비광까지 끌어모아 5광을 노린다",backstory:"관측 때문에 밤을 새운다. 도시 불빛이 닿지 않는 곳이 필요했다.",style:{weights:{gwang:2,yeol:1.1,pi:.7,tti:.85},mistakeScale:1,greedScale:1.4,inferenceScale:1,aggressionScale:1,stopScoreDelta:3},unlock:[{tenantId:"jiwoo",stage:5}],rate:13,reward:{base:57,perStage:10},lines:{matchStart:{low:["오늘 구름 없어. 좋은 밤이야.","옥상 갔다 왔어. 손이 차가워.","앉아. 별 보러 가기 전에 한 판."],mid:["오늘 목성 보여. 이따 같이 볼래?","밤이 길어서 좋아.","자, 시작하자. 달이 밝네."],high:["네 생각하면서 별 봤어. 이상하지.","오늘은 판 끝나고 옥상 가자.","기다렸어. 밤이 아까워서."]},go:{low:["고. 아직 별이 모자라.","고.","고. 세 개로는 부족해."],mid:["고. 다섯 개 다 모을 거야.","고. 여기서 멈추면 별자리가 안 돼.","고. 나 욕심 많아."],high:["고. 밤이 더 길었으면 해서.","고. 너랑 더 있고 싶어서 그래.","고. 별은 기다리는 사람한테만 보여."]},stop:{low:["스톱.","됐어. 스톱.","스톱. 오늘은 여기까지."],mid:["스톱. 별자리 완성됐어.","스톱. 구름이 오네.","스톱. 딱 좋은 때야."],high:["스톱. 옥상 가자. 지금.","스톱. 오늘 밤은 다른 데 쓰고 싶어.","스톱. 보여주고 싶은 게 있어."]},ppeok:{low:["뻑. 구름 꼈네.","가려졌어. 기다리면 돼.","뻑."],mid:["뻑. 구름은 지나가는 거야.","괜찮아. 별은 안 사라져.","저거 내가 회수해."],high:["뻑. 너 지금 별처럼 웃었어.","뻑인데 왜 기분이 좋지.","가렸네. 그래도 네가 보여."]},sseulVictim:{low:["다 가져갔네. 하늘이 비었어.","쓸었구나.","잘했어."],mid:["아깝다. 저기 광 있었는데.","손이 빠르네. 유성처럼.","인정. 다음엔 안 놔둘게."],high:["또 쓸어. 너 유성우야?","그거 하지 마. 마음이 텅 비어.","멋있었어. 분한데 멋있었어."]},win:{low:["이겼다. 별 보러 갈게.","끝. 잘 자.","이겼어. 오늘 하늘 맑더라."],mid:["이겼다. 광 다 모았어.","봤지? 이게 오광이야.","이겼으니까 옥상 자리 내 거."],high:["이겼는데 왜 안 기쁘지. 판이 끝나서 그런가.","이겼어. 상으로 옥상 같이 가자.","이겼다. 오늘 별보다 네가 더."]},lose:{low:["졌네. 구름이 많았어.","잘 쳤어.","다음 밤에 또 하자."],mid:["졌다. 광이 하나 모자랐어.","아깝다. 진짜 아까워.","한 판 더 하면 다를 텐데."],high:["졌는데 이상하게 좋아.","너한테 지는 밤도 나쁘지 않네.","졌으니까 소원 들어줄게. 말해."]},affection:{low:["옥상 올라갈 건데. 혼자 가긴 좀 그래서.","이거 망원경 렌즈야. 만져볼래?","밤에 안 자는 사람 반가워."],mid:["누구랑 같이 보는 하늘은 다르더라.","혼자 보던 별인데 이제 네 생각이 나.","옥상 자리 하나 비워뒀어. 네 자리야."],high:["나 사실 별 얘기 들어주는 사람 처음이야.","오늘은 하늘 말고 너 볼래.","이 밤이 안 끝났으면 좋겠어."]},hints:["나 광만 봐. 광 바닥에 놓지 마.","비광도 주워. 나한테는 다섯 번째 별이야.","내가 오래 끄는 건 광이 모자라서야. 광박 노려."]},events:[{stage:1,scriptId:"narae_01",title:"옥상에 사람이 있다",hasChoice:!1},{stage:2,scriptId:"narae_02",title:"옥상 사용 규칙",hasChoice:!1},{stage:3,scriptId:"narae_03",title:"나래가 세는 것",hasChoice:!1},{stage:4,scriptId:"narae_04",title:"망원경 나르기",hasChoice:!0},{stage:5,scriptId:"narae_05",title:"여름 유성우",hasChoice:!0},{stage:6,scriptId:"narae_06",title:"비 오는 날의 옥상",hasChoice:!0},{stage:7,scriptId:"narae_07",title:"연구실에 남는 이유",hasChoice:!1},{stage:8,scriptId:"narae_08",title:"관측이 실패한 밤",hasChoice:!1},{stage:9,scriptId:"narae_09",title:"옥상의 다른 발소리",hasChoice:!0},{stage:10,scriptId:"narae_10",title:"다섯 번째 별",hasChoice:!0}],look:{hair:"#20304a",hairStyle:"wave",skin:"#f0d6c4",outfits:["#2c3e6b","#6b7fb5","#dfe7f5"],accent:"#ffd766",prop:"망원경",face:"slim",eyes:"droopy",bangs:"curtain",build:"petite",accessory:"starpin",wear:["knit","coat","dress"],propArt:"telescope"}},{id:"yerin",order:7,name:"예린",nickname:"회계",age:27,job:"회계법인 1년차",room:"304호",season:"autumn",personality:["꼼꼼함","단정함","의외로 허당"],styleLabel:"박은 절대 안 쓴다. 손해 나는 수를 두지 않는다",backstory:"회사 근처 오피스텔을 두고 이 먼 데로 왔다. 이유는 아직 말하지 않았다.",style:{weights:{pi:1.35,gwang:1.15,yeol:1.15,tti:1.15},mistakeScale:.7,greedScale:.75,inferenceScale:1.3,aggressionScale:.85,stopScoreDelta:-1},unlock:[{tenantId:"sua",stage:5}],rate:16,reward:{base:65,perStage:11},lines:{matchStart:{low:["퇴근했어. 딱 한 시간만.","정산 끝냈어. 이제 이걸 정산할 차례네.","앉으세요. 아, 편하게 해도 돼."],mid:["오늘 야근 없어. 길게 갈 수 있어.","장부 덮고 왔어. 시작하자.","오늘은 좀 이길 것 같은데."],high:["퇴근길 내내 이 생각만 했어.","오늘은 야근 안 했어. 너 때문에.","앉아. 차 내렸어."]},go:{low:["고. 손실 없어.","고 하겠습니다. 아, 반말 반말.","고."],mid:["고. 리스크 확인했어.","고. 최악의 경우도 감당 가능해.","고. 숫자상 문제없어."],high:["고. 이번엔 리스크 좀 져볼래.","고. 이런 거 나답지 않은데.","고. 안 끝냈으면 해서."]},stop:{low:["스톱.","스톱. 여기가 손익분기점이야.","스톱하겠습니다."],mid:["스톱. 광박 확인했고, 마무리할게.","여기서 끊는 게 최선이야. 스톱.","스톱. 회수 완료."],high:["스톱. 대신 차 한 잔 더.","스톱. 오늘은 얘기가 더 좋아서.","스톱. 미안, 급하게 끝냈어."]},ppeok:{low:["뻑. 대손 처리하죠.","뻑이네요. 아, 뻑이네.","장부에 적어둘게."],mid:["뻑. 미수금이라고 생각할게.","회수 가능한 채권이야. 걱정 마.","뻑. 계획엔 있었어."],high:["뻑. 너 앞에서만 이래 진짜.","이상해. 계산이 자꾸 어긋나.","뻑. 웃지 마, 더 틀려."]},sseulVictim:{low:["전액 회수당했네요.","쓸었구나. 잘했어.","깔끔하네. 인정."],mid:["아, 그건 예상 못 했어.","손실 확정. 인정할게.","좋은 수였어. 배웠어."],high:["또 쓸어. 내 장부가 엉망이야.","너 때문에 손익이 안 맞아.","잘하는 거 알겠으니까 그만 좀."]},win:{low:["이겼어요. 아, 이겼어.","수고했어. 잘 자.","정산 끝. 내일 또 출근이네."],mid:["이겼다. 오늘은 흑자야.","박은 안 썼어. 그게 내 원칙이거든.","이겼으니까 세탁기 우선권 내 거."],high:["이겼는데 아쉬워. 벌써 끝나서.","이겼어. 근데 안 일어날래.","이겼으니까 소원. 내일도 기다려줘."]},lose:{low:["졌네요. 아, 졌네.","잘 쳤어. 인정.","다음엔 더 꼼꼼히 볼게."],mid:["졌다. 근데 깔끔하게 졌어.","네가 더 잘 봤어.","재밌었어. 정말로."],high:["졌는데 손해 본 기분이 아니야.","너한테 지는 건 계산에 안 넣었었네.","졌으니까 오늘은 네 말 들을게."]},affection:{low:["저기, 존댓말 아직 어색해? 나는 좀 어색해.","퇴근하고 오면 불 켜져 있는 게 좋더라.","이거 회사에서 받은 건데 남아서."],mid:["나 사실 여기 오면 숨이 좀 쉬어져.","숫자 말고 사람 얘기 하는 게 오랜만이야.","너랑 있으면 퇴근한 기분이 들어."],high:["내 인생에서 계산 안 되는 게 딱 하나 생겼어.","원칙을 깨고 싶어진 건 처음이야.","오늘은 장부 안 볼래. 너만 볼래."]},hints:["나는 박을 절대 안 당해. 그러니까 정공법으로 와.","내가 스톱을 빨리 하는 편이야. 초반에 점수를 벌어.","리스크 없는 수만 둬서 느려. 속도로 눌러."]},events:[{stage:1,scriptId:"yerin_01",title:"가장 늦게 들어오는 사람",hasChoice:!1},{stage:2,scriptId:"yerin_02",title:"공과금 정산의 밤",hasChoice:!1},{stage:3,scriptId:"yerin_03",title:"예린의 원칙",hasChoice:!1},{stage:4,scriptId:"yerin_04",title:"야근 마중",hasChoice:!0},{stage:5,scriptId:"yerin_05",title:"가을 축제 초대권",hasChoice:!0},{stage:6,scriptId:"yerin_06",title:"감기 걸린 회계사",hasChoice:!0},{stage:7,scriptId:"yerin_07",title:"회사를 그만둘까",hasChoice:!1},{stage:8,scriptId:"yerin_08",title:"숫자를 믿게 된 이유",hasChoice:!1},{stage:9,scriptId:"yerin_09",title:"회사 선배의 연락",hasChoice:!0},{stage:10,scriptId:"yerin_10",title:"계산 밖의 항목",hasChoice:!0}],look:{hair:"#33261d",hairStyle:"long",skin:"#f4d8c2",outfits:["#7b8794","#cbd2d9","#b6786a"],accent:"#8b5e3c",prop:"서류 가방",face:"oval",eyes:"sharp",bangs:"side",build:"average",accessory:"earring",wear:["suit","blouse","dress"],propArt:"bag"}},{id:"seyeon",order:8,name:"세연",nickname:"연극",age:24,job:"연극영화과 4학년",room:"305호",season:"autumn",personality:["과장됨","눈치 빠름","외로움 잘 탐"],styleLabel:"표정과 대사로 흔든다. 고를 외쳐도 진짜인지 알 수 없다",backstory:"있던 극단이 해체됐다. 다음 오디션까지만 있겠다고 하고 반년이 지났다.",style:{weights:{tti:1.25,yeol:1.2,godori:1.2,pi:1.05},mistakeScale:.85,greedScale:1.45,inferenceScale:1.15,aggressionScale:1.25,stopScoreDelta:2},unlock:[{tenantId:"minji",stage:5}],rate:20,reward:{base:75,perStage:12},lines:{matchStart:{low:["등장. 오늘의 상대역, 잘 부탁해.","대본 외우다 왔어. 머리 좀 식히자.","자, 1막 시작."],mid:["오늘 내 연기 잘 봐. 어디까지가 진짜일까?","무대 조명은 없지만 분위기는 내야지.","시작하자. 관객은 없지만."],high:["오늘은 연기 안 할게. 진짜로.","너한테는 안 통하더라, 내 연기.","앉아. 오늘 대사는 다 진심이야."]},go:{low:["고! ...일까?","고. 표정 읽지 마.","고야. 놀랐어?"],mid:["고. 근데 내가 진짜 좋은 패일까?","고! 이 대사 연습 많이 했어.","고. 너 지금 흔들렸지."],high:["고. 이번엔 진심이야. 진짜로.","고. 네 앞에선 연기가 안 돼.","고. 판 끝나는 게 싫어서."]},stop:{low:["스톱. 막 내립니다.","스톱! 커튼콜.","여기서 끊을게. 스톱."],mid:["스톱. 좋은 장면은 짧아야 해.","스톱. 여운을 남기는 게 연기야.","스톱. 다음 막을 기대해."],high:["스톱. 대사 말고 그냥 얘기하고 싶어.","스톱. 오늘은 무대 밖에 있고 싶어.","스톱. 연기 그만할래."]},ppeok:{low:["뻑! 이건 대본에 없었는데.","애드리브 들어갑니다.","뻑이네. 연출 실수."],mid:["뻑. 이것도 연기라고 해줄래?","묶였네. 2막에서 회수할게.","뻑. 이 표정 어때? 자연스러워?"],high:["뻑. 지금 표정은 진짜야.","야, 웃지 마. 연기 무너져.","뻑. 네 앞에서만 이래."]},sseulVictim:{low:["무대를 통째로 가져갔네.","쓸었어. 주연 자리 뺏겼다.","인정. 좋은 씬이었어."],mid:["아깝다. 저기 내 소품 있었는데.","그 장면 잘 나왔어. 인정.","다음 막엔 안 뺏겨."],high:["또 쓸어? 너 진짜 주연 하지.","그거 멋있는 거 알고 하는 거지?","심장 떨어지는 줄. 연기 아니야."]},win:{low:["막 내립니다. 박수는?","이겼어. 오늘 공연 끝.","수고했어, 상대역."],mid:["이겼다! 이번 막은 내 거야.","연기 좀 했지? 어디까지 속았어?","이겼으니까 욕실 순번 내 거."],high:["이겼는데 커튼콜이 안 즐겁네.","이겼어. 근데 안 나갈래. 무대에 더 있고 싶어.","이겼으니까 소원. 내일도 내 관객 해줘."]},lose:{low:["졌네. 오늘은 네가 주연.","잘 쳤어. 인정.","2막을 기대해."],mid:["졌다. 근데 좋은 장면이었어.","너 연기 안 하는데 왜 못 읽겠지.","다음 공연에서 보자."],high:["졌어. 근데 하나도 안 억울해.","너한테 지는 건 대본에 있었나 봐.","졌으니까 오늘 대사는 네가 정해."]},affection:{low:["대사 좀 받아줄래? 상대역이 없어서.","나 혼자 연습하면 이상하거든.","관객 한 명만 있어도 다르더라."],mid:["너 볼 때는 연기가 잘 안 돼.","무대 밖의 나도 봐주는 사람은 처음이야.","박수 안 쳐도 돼. 그냥 있어줘."],high:["나 사실 무대 내려오면 되게 조용해.","연기 말고 진짜 나를 보여준 적이 없었어.","오늘은 대본 없이 말할게."]},hints:["내 고는 반은 뻥이야. 점수 세어보면 알아.","표정 보지 마. 바닥을 봐.","내가 흔들 때는 진짜 좋은 패일 때가 적어."]},events:[{stage:1,scriptId:"seyeon_01",title:"복도에서 대사 외우는 사람",hasChoice:!1},{stage:2,scriptId:"seyeon_02",title:"소음 민원",hasChoice:!1},{stage:3,scriptId:"seyeon_03",title:"세연의 연기론",hasChoice:!1},{stage:4,scriptId:"seyeon_04",title:"대사 상대역",hasChoice:!0},{stage:5,scriptId:"seyeon_05",title:"가을 정기공연 티켓",hasChoice:!0},{stage:6,scriptId:"seyeon_06",title:"무대 뒤 도시락",hasChoice:!0},{stage:7,scriptId:"seyeon_07",title:"오디션에서 떨어진 날",hasChoice:!1},{stage:8,scriptId:"seyeon_08",title:"연기를 시작한 이유",hasChoice:!1},{stage:9,scriptId:"seyeon_09",title:"상대역과의 소문",hasChoice:!0},{stage:10,scriptId:"seyeon_10",title:"대본에 없는 대사",hasChoice:!0}],look:{hair:"#5a2230",hairStyle:"wave",skin:"#f6d9c6",outfits:["#b23a55","#f0c6d0","#2b2b3a"],accent:"#d94f6e",prop:"대본",face:"oval",eyes:"round",bangs:"split",build:"average",accessory:"earring",wear:["dress","cardigan","hanbok"],propArt:"script"}},{id:"dohee",order:9,name:"도희",nickname:"선배",age:28,job:"대학원 조교",room:"306호",season:"autumn",personality:["느긋함","짓궂음","통찰력"],styleLabel:"네 손패를 읽는다. 흔들기와 폭탄을 서슴없이 쓴다",backstory:"스물두 살에 갈 데가 없어 왔다. 보증금 없이 받아준 집이 여기뿐이었다.",style:{weights:{gwang:1.25,tti:1.2,yeol:1.2,pi:1.1},mistakeScale:.6,greedScale:1.15,inferenceScale:1.4,aggressionScale:1.6,stopScoreDelta:0},unlock:[{tenantId:"narae",stage:5}],rate:25,reward:{base:85,perStage:14},lines:{matchStart:{low:["오랜만이네, 후배. 앉아.","채점 끝났어. 이제 널 채점할 차례야.","손 좀 보자. 아, 패 말고 손."],mid:["오늘은 네가 뭘 노리는지 맞혀볼게.","앉아. 커피는 내가 샀어.","슬슬 시작할까."],high:["기다렸어. 오늘 좀 늦었네.","선배 노릇 그만하고 싶어지는 밤이야.","앉아. 오늘은 봐줄 생각 없어."]},go:{low:["고.","고 할게. 네 손에 뭐 있는지 알거든.","고. 여유 있어."],mid:["고. 너 방금 망설였지.","고. 네 손에 8월 남았잖아.","고. 아직 안 끝났어."],high:["고. 오늘 밤이 짧아서.","고. 이 판이 끝나면 네가 갈 거잖아.","고. 선배 욕심이라고 해두자."]},stop:{low:["스톱. 정리하자.","여기까지. 스톱.","스톱. 충분해."],mid:["스톱. 네 다음 수가 보여서.","스톱. 더 가면 네가 뒤집어.","스톱. 깔끔한 게 좋아."],high:["스톱. 오늘은 얘기가 하고 싶어서.","스톱. 판보다 네가 궁금해.","스톱. 선배가 먼저 접을게."]},ppeok:{low:["뻑. 그럴 수도 있지.","묶였네. 오래 안 갈 거야.","뻑."],mid:["뻑. 네가 저거 못 먹을 걸 아니까 괜찮아.","회수는 내 몫이지.","뻑. 계산에 있었어."],high:["뻑. 너 앞에서 체면 다 깎이네.","웃지 마. 선배 체면이 있지.","뻑. 오늘 왜 이러지 진짜."]},sseulVictim:{low:["쓸었네. 제법이야.","잘했어, 후배.","인정. 그건 좋은 수였어."],mid:["언제 이렇게 늘었어?","가르친 적 없는데 잘하네.","다음엔 안 놔둘게."],high:["또 쓸어. 이제 내가 배워야겠네.","너한테 쓸릴 줄이야.","잘한다. 얄미울 만큼."]},win:{low:["이겼다. 잘 배웠지?","수고했어. 다음엔 더 붙어봐.","끝. 들어가서 자."],mid:["이겼다. 아직 선배야.","흔들기 맛 좀 봤지?","이겼으니까 내일 조교실 커피는 네가."],high:["이겼는데 아쉽네. 벌써 끝이라서.","이겼어. 근데 안 보낼래.","이겼으니까 소원. 선배 말고 이름으로 불러봐."]},lose:{low:["졌네. 잘 쳤어.","인정. 오늘은 네가 나았어.","다음엔 안 봐줘."],mid:["졌다. 후배한테 지는 날도 오네.","네 수를 못 읽었어. 드문 일이야.","재밌었어. 정말로."],high:["졌어. 근데 하나도 안 분해.","너한테 지는 건 왜 이렇게 기분이 좋지.","졌으니까 오늘은 네가 선배 해."]},affection:{low:["후배, 시간 좀 있어? 아니 그냥.","조교실 커피가 남아서 가져왔어.","요즘 어때. 진짜로 묻는 거야."],mid:["선배 소리 들으면 거리감이 생기더라.","너랑 얘기하면 나이 생각이 안 나.","가끔은 나도 기대고 싶어."],high:["나 선배 노릇 그만하고 싶어졌어.","이름으로 불러줄래? 도희라고.","오늘은 후배 말고 그냥 너랑 있고 싶어."]},hints:["나는 네 손패를 세고 있어. 낸 패를 섞어.","내가 흔들면 진짜야. 그때는 빨리 끝내.","폭탄 맞기 싫으면 같은 월 세 장 안 남기게 유도해."]},events:[{stage:1,scriptId:"dohee_01",title:"같은 과 선배였다",hasChoice:!1},{stage:2,scriptId:"dohee_02",title:"하숙집 최고참의 조언",hasChoice:!1},{stage:3,scriptId:"dohee_03",title:"도희가 읽는 것",hasChoice:!1},{stage:4,scriptId:"dohee_04",title:"조교실 심부름",hasChoice:!0},{stage:5,scriptId:"dohee_05",title:"캠퍼스 벤치, 낙엽",hasChoice:!0},{stage:6,scriptId:"dohee_06",title:"논문 마감 전야",hasChoice:!0},{stage:7,scriptId:"dohee_07",title:"계속 공부할 거냐는 질문",hasChoice:!1},{stage:8,scriptId:"dohee_08",title:"도희가 하숙집에 온 해",hasChoice:!1},{stage:9,scriptId:"dohee_09",title:"선배라는 거리",hasChoice:!0},{stage:10,scriptId:"dohee_10",title:"이름으로 불러줘",hasChoice:!0}],look:{hair:"#241c17",hairStyle:"braid",skin:"#f1d4bb",outfits:["#8c6f4e","#d8c3a5","#4a3f35"],accent:"#b07d3f",prop:"머그컵",face:"round",eyes:"droopy",bangs:"side",build:"average",accessory:"hairpin",wear:["cardigan","knit","hanbok"],propArt:"mug"}},{id:"yoon",order:10,name:"윤",nickname:"장기하숙생",age:29,job:"정체 불명 (하숙집 최장기 거주자)",room:"별채",season:"winter",personality:["조용함","정확함","쓸쓸함"],styleLabel:"판 전체가 보인다. 그리고 네 습관까지 기억한다",backstory:"삼십 년 전 이 집 하숙생. 장부의 퇴실일 칸만 아직 비어 있다.",style:{weights:{gwang:1.3,yeol:1.3,tti:1.3,pi:1.3,godori:1.2},mistakeScale:.3,greedScale:1,inferenceScale:1.5,aggressionScale:1.3,stopScoreDelta:-1},unlock:[{tenantId:"yerin",stage:5},{tenantId:"seyeon",stage:5},{tenantId:"dohee",stage:5}],rate:35,reward:{base:104,perStage:17},lines:{matchStart:{low:["앉아.","이 마루에서 삼십 년 동안 판이 돌았어.","네 차례가 올 줄 알았어."],mid:["오늘은 네가 먼저 내.","많이 늘었네. 누가 가르쳤어?","겨울 판은 길어. 각오해."],high:["기다렸어. 오래.","이 판이 끝나면 할 얘기가 있어.","앉아. 마지막 겨울이야."]},go:{low:["고.","고. 아직이야.","고. 서두르지 마."],mid:["고. 네 손에 뭐가 남았는지 알아.","고. 여기서 끝내면 아무것도 안 남아.","고."],high:["고. 이 밤을 늘리고 싶어서.","고. 끝나는 게 두려운 건 처음이야.","고. 이유는 다 알잖아."]},stop:{low:["스톱.","여기까지.","스톱. 충분해."],mid:["스톱. 네가 뒤집기 전에.","스톱. 다음 판이 더 중요해.","스톱."],high:["스톱. 이제 얘기하자.","스톱. 판은 끝나도 밤은 안 끝나.","스톱. 미안, 급해졌어."]},ppeok:{low:["뻑.","...묶였군.","괜찮아."],mid:["뻑. 삼십 년 만에 처음 같은데.","저건 회수해.","뻑. 드문 일이야."],high:["뻑. 너 앞에서만 이래.","이상하지. 손이 떨렸어.","뻑. 웃어도 돼."]},sseulVictim:{low:["쓸었군.","...제법이야.","잘했어."],mid:["그 수는 못 봤어. 오랜만이야.","너한테 배울 게 생겼네.","다음엔 안 놔둬."],high:["또 쓸어. 내가 지는 게 이렇게 반가울 줄이야.","너는 매번 나를 놀라게 해.","잘했어. 진심으로."]},win:{low:["끝났어. 들어가서 자.","아직 멀었어.","이겼다. 다시 와."],mid:["이겼어. 근데 예전보다 어려웠어.","네가 강해졌다는 뜻이야.","이겼으니 오늘은 여기까지."],high:["이겼는데 하나도 안 기뻐.","이겼어. 그런데 가지 마.","이겼으니 소원 하나. 내일도 와줘."]},lose:{low:["졌군. ...오랜만이야.","잘했어. 진심으로.","다시 해."],mid:["졌다. 삼십 년 만에 처음이야, 이런 기분.","네가 이 판을 가져갔어.","이 마루의 다음 차례는 너야."],high:["졌어. 그리고 기뻐. 이상하지.","누군가한테 지고 싶었던 건 처음이야.","이제 나도 이 집을 떠날 수 있겠네."]},affection:{low:["이 집에 대해 얼마나 알아?","삼십 년이면 긴 시간이야.","네 할머니가 처음 이 마루를 깔던 날을 기억해."],mid:["나는 여기서 계속 누군가를 기다렸어.","겨울은 늘 혼자 났어. 올해는 다르네.","이 집이 나한테 뭐였는지 이제 알 것 같아."],high:["나는 이기려고 여기 있었던 게 아니야.","이 판을 끝내줄 사람을 기다렸어.","오늘 밤이 마지막이어도 괜찮아. 네가 있으니까."]},hints:["네 최근 스무 판을 기억해. 습관을 바꿔.","나는 남은 패를 다 세. 안 보이는 수를 둬.","정공법으로는 안 돼. 흔들기든 폭탄이든 써."]},events:[{stage:1,scriptId:"yoon_01",title:"별채의 불빛",hasChoice:!1},{stage:2,scriptId:"yoon_02",title:"삼십 년의 규칙",hasChoice:!1},{stage:3,scriptId:"yoon_03",title:"윤이 기억하는 것",hasChoice:!1},{stage:4,scriptId:"yoon_04",title:"첫눈 오는 마루",hasChoice:!0},{stage:5,scriptId:"yoon_05",title:"오래된 화투 한 벌",hasChoice:!0},{stage:6,scriptId:"yoon_06",title:"할머니가 남긴 장부",hasChoice:!0},{stage:7,scriptId:"yoon_07",title:"이 집을 떠나지 못한 이유",hasChoice:!1},{stage:8,scriptId:"yoon_08",title:"삼십 년 전 그 판",hasChoice:!1},{stage:9,scriptId:"yoon_09",title:"마지막 하숙생",hasChoice:!0},{stage:10,scriptId:"yoon_10",title:"하숙집의 겨울",hasChoice:!0}],look:{hair:"#15161c",hairStyle:"long",skin:"#ecd8cb",outfits:["#2b2f3a","#6d7280","#c8ccd6"],accent:"#9aa7c7",prop:"낡은 화투갑",face:"slim",eyes:"narrow",bangs:"curtain",build:"tall",accessory:"none",wear:["coat","knit","hanbok"],propArt:"hwatu"}}],Mg={tenants:Eg},Lg={gwang:1,yeol:1,tti:1,pi:1,godori:1,hongdan:1,cheongdan:1,chodan:1};function zg(e,n){const t=(e-1)/9,r=(n-1)/9,i=Math.min(1,t*.6+r*.4);return{mistakeRate:Math.max(0,.5*(1-i)),inference:i,greed:.3+.2*r,stopScore:Math.round(10-3*i),patternLearning:Math.max(0,(i-.8)*5),aggression:.2+.5*i,weights:{...Lg}}}function Pg(e,n){return{...e,...n,weights:{...e.weights,...n.weights??{}}}}const Tg=Mg,En=Tg.tenants;function Pr(e){const n=En.find(t=>t.id===e);if(!n)throw new Error(`unknown tenant: ${e}`);return n}function rh(e){return e<=30?"low":e<=70?"mid":"high"}function Dg(e,n){const t=zg(e.order,n),r=e.style;return Pg(t,{mistakeRate:Ii(t.mistakeRate*(r.mistakeScale??1)),inference:Ii(t.inference*(r.inferenceScale??1)),greed:Ii(t.greed*(r.greedScale??1)),aggression:Ii(t.aggression*(r.aggressionScale??1)),stopScore:Math.max(7,t.stopScore+(r.stopScoreDelta??0)),weights:r.weights})}function Ii(e){return Math.max(0,Math.min(1,e))}function ih(e,n){return e.reward.base+e.reward.perStage*(n-1)}function lh(e){return e.rate*10}function Ji(e,n){return e.unlock.length===0?!0:e.unlock.every(t=>(n[t.tenantId]??0)>=t.stage)}function Ig(e){return e.unlock.length===0?"처음부터 승부 가능":e.unlock.map(n=>`${Pr(n.tenantId).name} ${n.stage}단계 클리어`).join(" + ")}const Ag=`# 세계관 / 프롤로그 / 계절 전환 / 히든 엔딩\r
# 형식 설명은 README 의 "시나리오 스크립트 작성법" 참고\r
\r
=== world | 이 집에 대하여\r
@bg beach morning\r
@bgm title\r
* 버스가 하루 여섯 번 서는 바닷가 마을이다.\r
* 정류장에서 언덕을 오 분쯤 오르면, 잔디 언덕 위에 집이 한 채 서 있다.\r
* 바다 쪽 벽이 통째로 유리인, 방 열 개짜리 이층 별장이다.\r
* 여름이면 이 앞에 외지 차가 줄을 섰다고 한다. 「얼마면 파시겠냐」고.\r
@bg yard evening\r
* 그런데 대문에는 삼십 년 된 나무 간판이 손으로 깎여 걸려 있다. 「하숙」.\r
* 할머니는 이 좋은 집을 혼자 쓰지 않았다. 방을 하나씩 내줬다.\r
* 대학생, 갓 취직한 사람, 한 계절만 머물다 간 사람.\r
* 방 열 개가 비는 날이 거의 없었다고 한다.\r
* 왜 하숙이냐고 물으면 늘 같은 대답이었다.\r
* 「집이 크면 사람이 있어야 해. 안 그러면 집이 먼저 늙는다.」\r
* 나는 방학마다 이 집에 맡겨졌다. 마루에서 밥을 먹고, 마루에서 잠들었다.\r
@bg maru night\r
@bgm sad\r
* 할머니가 돌아가신 건 지난봄이다.\r
* 집은 나에게 남았다. 방 열 개짜리 별장이, 혼자 사는 사람 앞으로.\r
* 반년 동안 이 집에서 나는 소리라고는 내 발소리와, 유리에 부딪는 바람뿐이었다.\r
@bgm none\r
* 그런데 마루에는 아직 방석이 열 개 깔려 있다.\r
* 할머니는 매일 저녁 그걸 펴두고 주무셨다. 손님이 없는 날에도.\r
@bgm title\r
* 그리고 마당 끝 별채에는, 밤마다 불이 켜진다.\r
* 나는 아직 그 방에 누가 사는지 모른다.\r
@end\r
\r
=== prologue | 다시 하숙을 놓는 밤\r
@bg room evening\r
@bgm spring\r
* 삼월. 책상 위에 고지서가 쌓였다.\r
* 재산세, 유리창 열두 장 교체 견적, 보일러, 기름값.\r
* 좋은 집은 가만히 있어도 돈을 먹는다는 걸 반년 만에 배웠다.\r
* 집을 팔라는 전화가 두 번 왔다. 값도 나쁘지 않았다. 두 번 다 끊었다.\r
@bg maru evening\r
* 마루를 쓸다가 방석 밑에서 할머니의 공책을 찾았다.\r
* 하숙 장부였다. 삼십 년 치 이름이 빼곡했다.\r
* 마지막 장에는 이름 대신 이렇게 적혀 있었다.\r
* 「하숙을 놓는 법 — 하나. 방은 깨끗이. 둘. 밥은 같이. 셋. 밤에는 마루에서 한 판.」\r
나 [기본] ...한 판이요?\r
* 공책 옆에는 손때 묻은 화투갑이 놓여 있었다.\r
@bgm none\r
* 나는 그날 밤 하숙 광고를 올렸다.\r
@bgm spring\r
@bg yard evening\r
* 보름 뒤, 짐가방을 끌고 언덕을 올라오는 사람이 보였다.\r
은서 [놀람] 여기 맞죠? 하숙집.\r
나 [기본] 아, 네. 맞아요.\r
은서 [웃음] 다행이다. 버스 놓쳐서 걸어왔어요.\r
은서 [기본] 나 은서. 201호로 신청한 사람.\r
나 방은 치워놨어요.\r
은서 [삐짐] 존댓말 하지 마. 나 너보다 한 살 많은데 그러면 더 어색해.\r
@bg maru night\r
* 짐을 올려놓고 내려오니, 은서가 마루에 앉아 방석을 만지고 있었다.\r
은서 [놀람] 집 진짜 좋다. 여기 하숙 맞아?\r
나 [기본] 할머니가 그렇게 해놓고 가셔서.\r
은서 [기본] 근데 이 방석은 왜 이렇게 많아?\r
나 [기본] 할머니가 펴두시던 거예요. ...펴두던 거야.\r
은서 [놀람] 아.\r
* 은서는 잠깐 말이 없다가, 방석 하나를 내 쪽으로 밀었다.\r
은서 [웃음] 그럼 오늘부터 내가 한 개 쓸게.\r
* 그리고 옆에 놓인 화투갑을 집어 들었다.\r
은서 [기본] 이건 쳐도 돼?\r
나 [놀람] 칠 줄 알아?\r
은서 [웃음] 어제 외웠어.\r
나 [기본] ...나는 오늘 외웠는데.\r
은서 [웃음] 비슷하네. 앉아.\r
@sfx card_shuffle\r
* 그렇게 첫 판이 시작됐다.\r
* 이 마루에서 백 판을 치게 될 거라고는, 그날의 나는 상상도 못 했다.\r
@affection 5\r
@end\r
\r
=== season_summer | 여름이 왔다\r
@bg yard evening\r
@bgm summer\r
* 마당의 나무가 짙어지고, 바다 냄새가 집 안까지 들어왔다.\r
* 방이 다섯 개 찼다. 삼층에도 불이 켜지기 시작했다.\r
하영 [기본] 삼층 애들 슬슬 내려올 거야. 마루 소리가 위까지 들리거든.\r
나 내려오면 좋죠.\r
하영 [웃음] 좋다고만 할 일은 아니야.\r
나 왜요.\r
하영 [기본] 걔들은 봐주는 법을 몰라.\r
@end\r
\r
=== season_autumn | 가을이 왔다\r
@bg beach evening\r
@bgm autumn\r
* 바닷바람이 차가워지고, 마루에는 전기장판이 깔렸다.\r
* 밤이 길어지자 판도 길어졌다. 새벽 두 시에 패 섞는 소리가 났다.\r
* 할머니 공책을 다시 펼쳤다. 가을 칸에 한 줄이 적혀 있었다.\r
* 「가을에는 다들 늦게까지 앉아 있는다. 말리지 말 것.」\r
나 [기본] ...삼십 년 동안 말려본 사람이 없었구나.\r
@end\r
\r
=== season_winter | 겨울이 왔다\r
@bg yard night\r
@bgm winter\r
* 첫눈이 온 날, 별채에 불이 켜졌다.\r
* 마당 끝, 반년 동안 한 번도 열린 적 없다고 생각했던 그 방이었다.\r
* 공책 맨 앞장을 다시 봤다. 입주 순서대로 적힌 이름 중 첫 줄에 이렇게 있었다.\r
* 「별채 · 윤 · 퇴실일 —」\r
* 퇴실일 칸만 삼십 년째 비어 있었다.\r
@bgm none\r
* 별채의 창에는 불빛이 오래 켜져 있었다.\r
@end\r
\r
=== hidden_ending | 마루의 단체 사진\r
@bg maru night\r
@bgm warm\r
* 겨울이 끝나갈 무렵, 마루에 열 개의 방석이 둥글게 깔렸다.\r
은서 [웃음] 다 모인 거 맞지? 한 명도 안 빠졌지?\r
하영 [기본] 국 식어. 빨리 앉아.\r
지우 [기본] 조명 이쪽이 나아. 옮겨.\r
수아 [웃음] 야, 사진은 찍고 붙자. 붙고 나면 표정 관리 안 돼.\r
민지 [기본] 계산해봤는데, 열 명이 다 붙으면 마흔다섯 판이야.\r
나래 [웃음] 그럼 오늘 밤은 안 끝나겠네. 좋아.\r
예린 [기본] 그 전에 정산부터. 포인트 장부 가져올게.\r
세연 [웃음] 자, 다들. 카메라 여기. 1막 시작합니다.\r
도희 [웃음] 후배, 가운데 앉아. 오늘 주인공은 너야.\r
나 [부끄러움] 왜 제가요.\r
윤 [기본] 이 마루에서 백 판을 친 사람이 너니까.\r
* 윤은 낡은 화투갑을 마루 한가운데 놓았다.\r
윤 [웃음] 삼십 년 동안 이 집에서 제일 오래 앉아 있었던 게 나였는데.\r
윤 [기본] 이제 아니네.\r
@sfx camera\r
@cg ending_group\r
* 셔터가 눌렸다.\r
* 사진 속에서 열 사람이 각자 다른 표정으로 웃고 있었고, 그 가운데 내가 있었다.\r
도희 [웃음] 이 사진, 마루에 걸자.\r
나 [기본] 할머니 사진 옆에요?\r
도희 [기본] 응. 나란히.\r
@bgm none\r
* 언젠가 삼십 년 뒤에 누가 이 사진을 볼 것이다.\r
* 그때도 이 마루에 방석이 깔려 있으면 좋겠다고 생각했다.\r
* 하숙집의 밤은 아직 한참 남아 있었다.\r
@point 1000\r
@end\r
`,Bg=`# 도희 (선배) - 가을 / 9번 하숙생\r
\r
=== dohee_01 | 같은 과 선배였다\r
@bg campus evening\r
@bgm autumn\r
@outfit 0\r
* 학과 사무실에서 조교가 고개를 들었다. 아는 얼굴이었다.\r
도희 [웃음] 어? 너 하숙집 아들 맞지?\r
나 [놀람] 선배님이 왜 여기...\r
도희 [기본] 조교야. 그리고 306호.\r
나 [놀람] 같은 집 사는데 몰랐어요?\r
도희 [웃음] 나는 알았지. 네가 몰랐던 거고.\r
* 도희는 서류를 정리하며 덧붙였다.\r
도희 [기본] 너 요즘 마루에서 유명하더라. 1층 2층 다 이겼다고.\r
나 운이 좋았어요.\r
도희 [웃음] 운이었으면 한 번이지, 열 번이 운이겠어?\r
도희 [기본] 오늘 밤에 보자. 3층이 끝났으면 이제 나랑 할 차례야.\r
@affection 10\r
@end\r
\r
=== dohee_02 | 하숙집 최고참의 조언\r
@bg maru night\r
@bgm autumn\r
도희 [기본] 주인집 아들 노릇 힘들지.\r
나 [기본] 조금요.\r
도희 [웃음] 내가 여기 육 년째야. 규칙 만드는 거 몇 번 봤어.\r
나 어떻게 하는 게 좋아요?\r
도희 [진지] 규칙은 약한 사람을 기준으로 만들어야 해.\r
나 왜요?\r
도희 [기본] 강한 사람은 규칙 없어도 알아서 챙기거든.\r
* 도희는 차를 한 모금 마셨다.\r
도희 [기본] 예린이가 만든 공과금 표 있지. 그거 3층 기준이야.\r
도희 [웃음] 3층이 제일 많이 내는데도 3층이 만들었어. 그게 좋은 규칙이야.\r
나 [기본] 기억할게요.\r
도희 [웃음] 선배 노릇 하나 했네.\r
@affection 10\r
@end\r
\r
=== dohee_03 | 도희가 읽는 것\r
@bg maru night\r
@bgm autumn\r
* 도희가 내 손패를 보지도 않고 말했다.\r
도희 [기본] 너 지금 8월 들고 있지.\r
나 [놀람] 어떻게 알았어요?\r
도희 [웃음] 아까 바닥에 8월 깔렸을 때 네가 안 먹었잖아.\r
도희 [기본] 안 먹었다는 건 하나 더 있다는 뜻이야. 나중에 몰아서 먹으려고.\r
나 [놀람] ...그걸 다 보고 있었어요?\r
도희 [기본] 이건 재능이 아니라 습관이야. 논문 심사 육 년 하면 생겨.\r
도희 [웃음] 사람들은 자기가 뭘 숨기는지 반드시 티를 내거든.\r
나 그럼 저는 뭘 티 내는데요.\r
도희 [웃음] 그건 안 알려줄래. 재미없어지니까.\r
@affection 10\r
@end\r
\r
=== dohee_04 | 조교실 심부름\r
@bg campus evening\r
@bgm warm\r
@outfit 1\r
* 도희가 책 상자 세 개를 앞에 두고 한숨을 쉬고 있었다.\r
도희 [기본] 이거 3층 연구실로 옮겨야 하는데.\r
나 엘리베이터 없어요?\r
도희 [웃음] 이 건물엔 없어.\r
@choice\r
- 세 상자 다 옮기기 | +8 | A\r
- 한 상자씩 같이 나르기 | +9 | B\r
@label A\r
나 [기본] 제가 다 옮길게요.\r
도희 [놀람] 세 번 왔다 갔다 해야 하는데.\r
나 그러니까 빨리 시작해야죠.\r
* 세 번째 상자를 옮길 때쯤 다리가 풀렸다.\r
도희 [웃음] 후배, 무리했네.\r
@goto END\r
@label B\r
나 [기본] 한 상자씩 같이 나르죠. 세 번이면 되니까.\r
도희 [기본] 그럼 나도 세 번 올라가야 하잖아.\r
나 같이 올라가면 덜 힘들잖아요.\r
도희 [놀람] ...그건 무슨 논리야.\r
나 선배가 가르쳐준 논리인데요. 규칙은 약한 사람 기준.\r
도희 [웃음] 야. 그거 이럴 때 쓰는 거 아니야.\r
@label END\r
* 마지막 상자를 내려놓고 도희가 말했다.\r
도희 [기본] 나 여기서 육 년 동안 상자 혼자 날랐어.\r
도희 [부끄러움] 같이 나른 건 오늘이 처음이야.\r
@affection 10\r
@end\r
\r
=== dohee_05 | 캠퍼스 벤치, 낙엽\r
@bg campus evening\r
@bgm autumn\r
@outfit 1\r
* 벤치에 낙엽이 쌓여 있었다. 도희가 그 위에 그냥 앉았다.\r
나 [놀람] 옷 더러워지는데요.\r
도희 [웃음] 낙엽은 안 더러워.\r
* 도희는 낙엽 하나를 주워 들었다.\r
도희 [기본] 나 이 벤치에서 육 년 앉았어. 학부 때부터.\r
나 안 질려요?\r
도희 [기본] 매년 다르거든. 같은 나무인데 매년 색이 달라.\r
@choice\r
- 옆에 앉기 | +9 | A\r
- 낙엽 치우고 앉기 | +6 | B\r
@label A\r
* 나는 그냥 낙엽 위에 앉았다.\r
도희 [놀람] 옷 더러워진다며.\r
나 선배가 안 더럽다면서요.\r
도희 [웃음] ...말 잘 듣네.\r
@goto END\r
@label B\r
* 나는 낙엽을 손으로 쓸어내고 앉았다.\r
도희 [삐짐] 굳이.\r
나 선배 옷은 괜찮고 제 옷은 안 괜찮아서요.\r
도희 [웃음] 이기적이네.\r
@label END\r
@bgm warm\r
도희 [기본] 있잖아. 나 이 벤치에 누구랑 같이 앉은 게.\r
나 처음이에요?\r
도희 [부끄러움] ...육 년 만이야.\r
@affection 10\r
@end\r
\r
=== dohee_06 | 논문 마감 전야\r
@bg room night\r
@bgm tense\r
@outfit 1\r
* 306호의 불이 사흘째 꺼지지 않았다.\r
도희 [패배] 서른 시간 남았는데 결론이 안 나와.\r
나 [놀람] 사흘 안 주무셨어요?\r
도희 [기본] 조교 일도 해야 하니까.\r
@choice\r
- 조교 일을 대신 해주기 | +9 | A\r
- 밤새 옆에서 자료 정리 돕기 | +9 | B\r
@label A\r
나 [기본] 조교 일 제가 할게요. 복사랑 출석 정리 정도는 할 수 있어요.\r
도희 [놀람] 그건 학생이 하면 안 되는데.\r
나 그럼 안 한 걸로 하죠.\r
도희 [웃음] ...선배를 공범으로 만드네.\r
@goto END\r
@label B\r
나 [기본] 자료 정리 도울게요. 선배는 쓰기만 하세요.\r
도희 [놀람] 내 논문 주제 알아?\r
나 모르죠. 근데 정렬은 할 수 있잖아요.\r
* 새벽 네 시까지 표 서른 개를 정리했다.\r
도희 [부끄러움] ...너 진짜 안 자네.\r
@label END\r
@bgm warm\r
* 아침 여섯 시. 도희가 엔터를 눌렀다.\r
도희 [기본] 끝났다.\r
도희 [부끄러움] 육 년 동안 마감 밤에 누가 옆에 있었던 건 처음이야.\r
@affection 10\r
@end\r
\r
=== dohee_07 | 계속 공부할 거냐는 질문\r
@bg campus night\r
@bgm sad\r
@outfit 0\r
도희 [기본] 교수님이 박사 갈 거냐고 물으셨어.\r
나 뭐라고 하셨어요?\r
도희 [기본] 생각해보겠다고. 삼 년째 같은 대답이야.\r
나 왜 망설이세요?\r
도희 [패배] 서른이 다 됐거든. 동기들은 다 나갔어.\r
도희 [기본] 조교실에 남아 있으면 가끔 그런 생각 들어. 내가 여기서 굳어가는 건가.\r
* 도희는 웃었지만 눈은 웃지 않았다.\r
도희 [기본] 후배들은 나를 '선배'라고 부르잖아. 그게 편하면서도 좀 무서워.\r
나 왜 무서워요?\r
도희 [패배] 선배는 흔들리면 안 되는 자리니까.\r
@bgm warm\r
나 [기본] 저한테는 흔들려도 되는데요.\r
도희 [놀람] ...뭐?\r
나 저는 선배 소리 안 해도 되니까요. 하숙집에선 그냥 306호잖아요.\r
도희 [부끄러움] ...야. 그런 말 하면 진짜 흔들려.\r
@affection 10\r
@end\r
\r
=== dohee_08 | 도희가 하숙집에 온 해\r
@bg maru night\r
@bgm sad\r
@outfit 0\r
도희 [기본] 나 여기 스물두 살에 왔어.\r
나 [놀람] 육 년이 아니라 칠 년이네요.\r
도희 [웃음] 계산 빠르네.\r
도희 [기본] 그때 집에 일이 좀 있었어. 갈 데가 없었지.\r
도희 [기본] 네 할머니가 보증금 없이 들여보내주셨어. 처음 보는 애한테.\r
나 [놀람] 그런 일이 있었어요?\r
도희 [기본] 그래서 이 집 규칙은 내가 제일 잘 지켜.\r
* 도희는 마루를 한 번 쓸었다.\r
도희 [기본] 이 마루에 처음 앉은 날, 윤이 나한테 한 판 하자고 했어.\r
나 [놀람] 윤이요? 별채의?\r
도희 [기본] 응. 그때 윤이 그러더라. "여기 앉으면 다 하숙생이야"라고.\r
도희 [웃음] 그 한마디에 칠 년 있었네.\r
@affection 10\r
@end\r
\r
=== dohee_09 | 선배라는 거리\r
@bg hallway night\r
@bgm tense\r
@outfit 0\r
* 은서가 복도에서 나를 붙잡고 웃으며 말했다.\r
은서 [웃음] 도희 언니가 너 얘기 자주 해. 되게 많이.\r
* 그날 밤 도희는 평소보다 말수가 적었다.\r
@choice\r
- 왜 제 얘기를 하시냐고 묻기 | +10 | A\r
- 선배라고 안 부르기 | +10 | B\r
@label A\r
나 [기본] 제 얘기 하신다면서요.\r
도희 [놀람] ...은서가 말했구나.\r
나 뭐라고 하셨는데요.\r
도희 [기본] 별말 안 했어. 후배가 일 잘한다고.\r
나 그게 다예요?\r
도희 [부끄러움] ...아니.\r
나 그럼요.\r
도희 [부끄러움] 야. 선배한테 그렇게 캐묻는 거 아니야.\r
@goto END\r
@label B\r
나 [기본] 도희 씨.\r
도희 [놀람] ...뭐?\r
나 선배 말고 그렇게 불러보려고요.\r
도희 [부끄러움] 갑자기 왜.\r
나 선배라고 부르면 거리가 생긴다면서요.\r
도희 [부끄러움] ...그건 내가 한 말인데 왜 네가 써먹어.\r
@label END\r
@bgm warm\r
도희 [기본] 나 선배 노릇 칠 년 했어. 잘하는 줄 알았는데.\r
도희 [부끄러움] 요즘은 그만두고 싶어져.\r
@affection 10\r
@end\r
\r
=== dohee_10 | 이름으로 불러줘\r
@bg maru night\r
@bgm confess\r
@outfit 2\r
* 열 번째 판. 도희는 흔들기도, 폭탄도 쓰지 않았다.\r
나 [놀람] 오늘은 왜 안 쓰세요? 손에 세 장 있잖아요.\r
도희 [웃음] 알아봤네.\r
나 선배가 가르쳐줬잖아요.\r
도희 [기본] 그랬지.\r
@cg dohee_ending\r
* 도희는 패를 내려놓고, 처음으로 먼저 눈을 피했다.\r
도희 [기본] 나 흔들기 잘 써. 폭탄도. 상대 패도 다 읽어.\r
도희 [기본] 근데 그게 다 거리를 두는 방법이었어.\r
도희 [진지] 읽는 사람은 안 읽히거든. 선배도 그래. 가르치는 사람은 안 배워도 되니까.\r
도희 [패배] 칠 년 동안 그렇게 살았어.\r
도희 [부끄러움] 근데 너한테는 다 읽혔어. 처음부터.\r
도희 [부끄러움] 나 너 좋아해.\r
도희 [기본] 승부에서 이겨서 얻는 것도 아니고, 선배가 후배한테 주는 것도 아니야.\r
도희 [웃음] 그냥 마주 앉아 있다 보니 내가 먼저 졌어.\r
@choice\r
- 도희 씨 | +20 | A\r
- 저도 다 읽혔어요 | +20 | B\r
@label A\r
나 [기본] 도희 씨.\r
도희 [놀람] ...\r
나 이름으로 불러달라면서요.\r
도희 [부끄러움] 그건 이겼을 때 소원으로 말한 건데.\r
나 오늘은 제가 이겼잖아요.\r
도희 [웃음] ...아. 그러네.\r
@goto END\r
@label B\r
나 [기본] 저도 다 읽혔어요. 첫날부터요.\r
도희 [놀람] 뭘.\r
나 학과 사무실에서 저 아는 척하셨을 때요. 저 그날부터 신경 쓰였어요.\r
도희 [부끄러움] 그건 그냥 인사였는데.\r
나 선배가 그러셨잖아요. 사람은 숨기는 걸 반드시 티 낸다고.\r
도희 [부끄러움] ...내 말에 내가 걸렸네.\r
@label END\r
@bgm warm\r
도희 [웃음] 그럼 내일부터 선배 소리 금지야.\r
나 학교에서도요?\r
도희 [부끄러움] ...학교에서는 해. 조교 체면이 있지.\r
@affection 20\r
@point 300\r
@end\r
`,Fg=`# 은서 (옆방) - 봄 / 1번 하숙생\r
\r
=== eunseo_01 | 옆방 사람\r
@bg maru night\r
@bgm spring\r
@outfit 0\r
* 첫 판이 끝났다. 이겼다. 규칙도 모르는 사람이 이긴 건 아마 운이었다.\r
은서 [놀람] 어? 너 처음 아니야?\r
나 처음 맞아요. 아니, 맞아.\r
은서 [웃음] 말 놓는 거 어색하지. 나도 어색해. 근데 계속 그러면 더 어색해져.\r
* 은서는 패를 주섬주섬 모으더니 갑자기 손을 내밀었다.\r
은서 [웃음] 다시. 나 은서. 옆방.\r
나 [기본] ...응. 반가워.\r
은서 [기본] 앞으로 밤마다 여기 있을 거니까, 심심하면 나와.\r
나 매일 쳐?\r
은서 [삐짐] 매일은 아니고. 거의 매일.\r
* 그게 무슨 차이인지는 나중에야 알았다.\r
@affection 10\r
@end\r
\r
=== eunseo_02 | 하숙집 규칙 세 가지\r
@bg maru night\r
@bgm spring\r
은서 [기본] 오늘은 규칙 알려줄게. 주인집 아들이 모르면 안 되지.\r
은서 [웃음] 첫째, 돈은 안 건다. 대신 포인트.\r
나 포인트?\r
은서 [기본] 설거지 면제권, 옥상 독점권, 야식 쿠폰. 그런 걸로 바꿔 쓰는 거야.\r
나 생각보다 치열하네.\r
은서 [진지] 치열해. 지난 학기에 세연 언니가 욕실 순번 걸고 3고 했다가 한 달 동안 제일 늦게 씻었어.\r
나 [놀람] 한 달을?\r
은서 [웃음] 둘째, 진 사람은 뒷정리. 셋째...\r
은서 [부끄러움] 셋째는 그냥... 재미로 하는 거니까 너무 진지해지지 말자는 거.\r
나 그건 규칙이라기보단 부탁 같은데.\r
은서 [삐짐] 시끄러워. 그게 제일 중요한 거야.\r
@affection 10\r
@end\r
\r
=== eunseo_03 | 은서의 취향\r
@bg hallway evening\r
@bgm spring\r
* 복도에서 마주친 은서는 손에 스케치북을 들고 있었다.\r
나 그거 과제야?\r
은서 [웃음] 응. 근데 잘 안 돼.\r
나 뭐 그리는데?\r
은서 [부끄러움] ...사람.\r
나 누구?\r
은서 [놀람] 아니 그냥! 사람! 일반적인 사람!\r
* 은서는 스케치북을 등 뒤로 숨겼다.\r
은서 [기본] 나 사실 그림보다 색 고르는 게 더 좋아. 아침 여섯 시 하늘색 같은 거.\r
나 그건 무슨 색인데.\r
은서 [웃음] 회색인데 회색이 아니야. 언젠가 보여줄게.\r
* 아침 여섯 시에 같이 하늘을 보자는 뜻이라는 걸, 그때는 알아듣지 못했다.\r
@affection 10\r
@end\r
\r
=== eunseo_04 | 새벽 두 시의 라면\r
@bg kitchen night\r
@bgm warm\r
@outfit 0\r
* 새벽 두 시. 부엌에 불이 켜져 있었다.\r
은서 [놀람] 어! 너도 배고팠어?\r
나 [기본] 소리 나서 내려왔어.\r
은서 [부끄러움] 나 라면 끓이는 중인데... 하나뿐이야.\r
@choice\r
- 반만 먹자 | +8 | A\r
- 난 괜찮으니까 다 먹어 | +5 | B\r
@label A\r
나 [기본] 반만 먹자. 냄비째로.\r
은서 [웃음] 그럼 젓가락 두 개. 좋아.\r
* 우리는 냄비 하나를 가운데 두고 마주 앉았다.\r
은서 [웃음] 이거 좀 하숙집 같다. 그치?\r
나 원래 하숙집이잖아.\r
은서 [기본] 그게 아니라... 하숙집처럼 느껴진다고.\r
@goto END\r
@label B\r
나 [웃음] 난 괜찮아. 다 먹어.\r
은서 [삐짐] 그럼 왜 내려왔어. 앉아 있기라도 해.\r
* 은서는 결국 면을 반으로 갈라 내 앞에 놓았다.\r
은서 [부끄러움] 혼자 먹으면 맛없단 말이야.\r
@label END\r
@bgm none\r
* 라면은 불었고, 국물은 짰고, 이상하게 오래 기억에 남았다.\r
@affection 10\r
@end\r
\r
=== eunseo_05 | 빨래 걷기 당번\r
@bg rooftop evening\r
@bgm spring\r
@outfit 1\r
* 비가 온다는 소식에 옥상으로 올라갔더니 은서가 이미 빨래를 걷고 있었다.\r
은서 [놀람] 어? 오늘 당번 나 아니었어?\r
나 두 명이면 빠르잖아.\r
은서 [웃음] 그건 맞네.\r
* 바람이 불어 널려 있던 수건 하나가 은서 머리 위로 떨어졌다.\r
은서 [놀람] 으악!\r
@choice\r
- 수건 걷어주기 | +8 | A\r
- 웃음부터 나온다 | +6 | B\r
@label A\r
* 수건을 걷어내자 은서가 눈을 깜빡였다.\r
은서 [부끄러움] ...고마워.\r
나 머리 다 헝클어졌어.\r
은서 [삐짐] 안 봐도 돼!\r
@goto END\r
@label B\r
나 [웃음] 미안. 웃을 상황은 아닌데.\r
은서 [삐짐] 웃지 마! 도와줘!\r
* 그러면서 은서도 웃고 있었다.\r
@label END\r
은서 [기본] 있잖아. 빨래 걷는 거 원래 되게 귀찮은 일인데.\r
은서 [웃음] 오늘은 안 귀찮았어.\r
@affection 10\r
@end\r
\r
=== eunseo_06 | 편의점 앞 벤치\r
@bg cvs night\r
@bgm warm\r
@outfit 1\r
* 야식 쿠폰을 쓰러 간다더니 결국 편의점까지 따라오게 됐다.\r
은서 [웃음] 골라. 오늘 내가 쏜다. 어제 이겼으니까.\r
나 어제 이긴 건 나였는데.\r
은서 [놀람] ...그랬나?\r
@choice\r
- 그래도 얻어먹기 | +6 | A\r
- 내가 살게 | +8 | B\r
@label A\r
나 [웃음] 됐어. 그럼 오늘은 얻어먹을게.\r
은서 [웃음] 좋아! 제일 비싼 거 골라.\r
@goto END\r
@label B\r
나 [기본] 내가 살게. 이긴 사람이 사는 걸로 하자.\r
은서 [놀람] 그게 무슨 규칙이야.\r
나 새로 만든 규칙.\r
은서 [부끄러움] ...하숙집 규칙 넷째네.\r
@label END\r
* 편의점 앞 벤치에 앉아 컵라면 뚜껑을 반쯤 열었다.\r
은서 [기본] 나 서울 와서 제일 많이 앉은 데가 여기야.\r
나 왜?\r
은서 [웃음] 혼자 있어도 안 외로운 데라서. 사람들 지나가니까.\r
은서 [부끄러움] 근데 오늘은 사람 안 봐도 되네.\r
@affection 10\r
@end\r
\r
=== eunseo_07 | 과제가 안 풀리는 밤\r
@bg hallway night\r
@bgm sad\r
@outfit 0\r
* 새벽 한 시. 201호 문틈으로 불빛이 새어나왔다.\r
나 아직 안 자?\r
은서 [패배] 과제가 안 돼.\r
나 뭐가 문제인데.\r
은서 [기본] 교수님이 "네 색이 뭐냐"고 물었어. 근데 나 모르겠어.\r
은서 [패배] 다들 자기 색이 있는데 나만 없는 것 같아.\r
@bgm none\r
* 은서는 스케치북을 무릎에 올려놓은 채 한참 말이 없었다.\r
나 [기본] 아침 여섯 시 하늘색.\r
은서 [놀람] 어?\r
나 저번에 말했잖아. 회색인데 회색이 아닌 색.\r
나 그거 아무나 아는 색 아니야.\r
@bgm warm\r
은서 [부끄러움] ...기억했어?\r
나 그건 기억할 만했어.\r
은서 [웃음] 야. 반칙이야 그거.\r
* 은서는 스케치북을 다시 펴고, 회색 같은 색을 칠하기 시작했다.\r
@affection 10\r
@end\r
\r
=== eunseo_08 | 은서가 서울에 온 이유\r
@bg rooftop night\r
@bgm sad\r
@outfit 0\r
* 옥상 난간에 기대 은서가 먼저 말을 꺼냈다.\r
은서 [기본] 나 사실 재수했어.\r
나 [기본] 그랬구나.\r
은서 [기본] 고향에서는 그림 그리면 밥 못 먹는다고 다들 그랬어.\r
은서 [패배] 아빠랑 크게 싸우고 올라왔어. 일 년 동안 연락 안 했어.\r
* 은서는 잠깐 멈췄다가 웃었다.\r
은서 [웃음] 근데 지난주에 먼저 전화 오셨어. 하숙집 밥 잘 나오냐고.\r
나 뭐라고 했어?\r
은서 [웃음] 하영 언니가 해주는 거 맛있다고. 그리고...\r
은서 [부끄러움] 여기 사람들 괜찮다고 했어.\r
@bgm warm\r
나 [기본] 잘 말했네.\r
은서 [기본] 있잖아. 나 처음 이 마루에 앉았을 때 진짜 무서웠어.\r
은서 [웃음] 근데 지금은 여기가 제일 편해.\r
* 옥상 바람이 찼는데도 은서는 한참 들어가지 않았다.\r
@affection 10\r
@end\r
\r
=== eunseo_09 | 오해는 짧게\r
@bg maru night\r
@bgm tense\r
@outfit 0\r
* 며칠째 은서가 마루에 나오지 않았다.\r
* 물어보니 복도에서 내가 도희 선배와 웃으며 이야기하는 걸 봤다고 했다.\r
은서 [삐짐] 아니야. 그냥 요즘 바빠서 그런 거야.\r
나 [기본] 은서야.\r
은서 [삐짐] 진짜야! 과제가 많다니까.\r
@choice\r
- 그날 무슨 얘기였는지 말해주기 | +10 | A\r
- 바쁜 건 알겠는데 마루엔 나와 | +6 | B\r
@label A\r
나 [기본] 그날 도희 선배랑 한 얘기, 네 얘기였어.\r
은서 [놀람] ...내 얘기?\r
나 네가 요즘 그림 때문에 힘들어하는 것 같다고. 선배가 조교니까 조언 좀 구했어.\r
은서 [부끄러움] 그걸... 왜 네가.\r
나 그러게. 왜 그랬을까.\r
은서 [부끄러움] 야. 그런 식으로 말하지 마.\r
@goto END\r
@label B\r
나 [기본] 바쁜 건 알겠어. 근데 마루엔 나와.\r
은서 [삐짐] 왜.\r
나 방석 하나가 비면 티가 나.\r
은서 [부끄러움] ...그런 말은 어디서 배웠어.\r
@label END\r
@bgm warm\r
은서 [기본] 미안해. 나 혼자 이상한 생각했어.\r
나 무슨 생각?\r
은서 [부끄러움] 말 안 해. 대신 오늘 밤에 나갈게.\r
@affection 10\r
@end\r
\r
=== eunseo_10 | 마지막 판, 첫 마음\r
@bg maru night\r
@bgm confess\r
@outfit 2\r
* 열 번째 판이 끝났다. 은서는 패를 정리하지 않고 가만히 앉아 있었다.\r
은서 [기본] 열 판이네.\r
나 셌어?\r
은서 [웃음] 당연히 셌지. 첫 판부터 다 세고 있었어.\r
* 은서는 스케치북을 꺼내 한 장을 펼쳤다.\r
은서 [부끄러움] 이거. 과제로 낸 그림이야.\r
@cg eunseo_ending\r
* 아침 여섯 시의 하늘 아래, 마루에 두 사람이 마주 앉아 있는 그림이었다.\r
나 [놀람] 이거...\r
은서 [부끄러움] 교수님이 물었잖아. 네 색이 뭐냐고.\r
은서 [기본] 나 그때 대답 못 했는데, 이제 알 것 같아.\r
은서 [웃음] 내 색은 이 마루 불빛 색이야.\r
은서 [부끄러움] 그리고 그 불빛 아래에 네가 있어.\r
* 은서는 스케치북을 무릎에 올려놓고, 고개를 들지 못한 채 말했다.\r
은서 [부끄러움] 나 너 좋아해.\r
은서 [기본] 이긴 사람이 뭐 받는 거 아니야. 그런 거 아니야.\r
은서 [웃음] 그냥 백 번쯤 마주 앉다 보니까 그렇게 됐어.\r
@choice\r
- 나도 같은 마음이야 | +20 | A\r
- 나도 열 판을 다 세고 있었어 | +20 | B\r
@label A\r
나 [웃음] 나도 같은 마음이야.\r
은서 [놀람] 진짜?\r
나 진짜.\r
@goto END\r
@label B\r
나 [기본] 나도 열 판을 다 세고 있었어.\r
은서 [부끄러움] ...야. 그건 반칙이라니까.\r
@label END\r
@bgm warm\r
은서 [웃음] 그럼 내일도 여기 앉는 거지?\r
나 앉아야지. 방석 하나 비면 티 나니까.\r
은서 [부끄러움] 그 말 또 하지 마. 심장에 안 좋아.\r
* 마루의 불은 그날 밤 제일 늦게 꺼졌다.\r
@affection 20\r
@point 300\r
@end\r
`,Rg=`# 하영 (요리왕) - 봄 / 2번 하숙생\r
\r
=== hayeong_01 | 부엌은 내 구역\r
@bg kitchen evening\r
@bgm spring\r
@outfit 0\r
* 부엌에 들어서자 하영이 칼을 든 채 돌아봤다.\r
하영 [기본] 주인집 아들이구나. 소문 들었어.\r
나 소문이요?\r
하영 [웃음] 은서가 밤마다 자랑하더라. 너한테 졌다고.\r
나 [놀람] 그걸 자랑이라고 해요?\r
하영 [기본] 걔는 그래.\r
* 하영은 도마 위 재료를 정리하더니 앞치마를 벗었다.\r
하영 [기본] 나도 한 판 하자. 대신 규칙 하나.\r
나 뭔데요.\r
하영 [진지] 부엌은 내 구역이야. 여기선 내 말이 법이고.\r
하영 [웃음] 마루에서는 네 말이 법이겠지. 그럼 공평하지?\r
@affection 10\r
@end\r
\r
=== hayeong_02 | 냉장고 칸 배분\r
@bg kitchen night\r
@bgm spring\r
하영 [기본] 냉장고 배분표. 이거 네가 관리해야 해.\r
나 이런 것까지 있어요?\r
하영 [진지] 열 명이 한 냉장고 쓰면 전쟁 나. 작년에 두 번 났어.\r
나 무슨 일이 있었길래.\r
하영 [기본] 수아가 남의 닭가슴살을 먹었어. 3주치를.\r
나 [놀람] 3주치를요?\r
하영 [웃음] 그 뒤로 이름표 붙이기가 규칙이 됐지.\r
* 하영은 배분표를 내밀며 덧붙였다.\r
하영 [기본] 그리고 이건 원래 마루 판돈으로 정하는 건데.\r
하영 [웃음] 오늘 이기면 제일 큰 칸 줄게.\r
@affection 10\r
@end\r
\r
=== hayeong_03 | 간을 못 맞추는 사람\r
@bg kitchen evening\r
@bgm warm\r
* 하영이 국자를 내밀었다.\r
하영 [기본] 맛 좀 봐.\r
나 [기본] 음... 좋은데요.\r
하영 [삐짐] 그게 아니라. 뭐가 부족한지 말해야지.\r
나 저는 그런 거 잘 몰라요.\r
하영 [기본] 나도 처음엔 몰랐어. 근데 사람마다 '좋다'고 하는 지점이 달라.\r
하영 [진지] 그걸 알아야 그 사람 음식을 만들 수 있어.\r
나 그럼 제 지점은 뭐예요?\r
하영 [웃음] 아직 몰라. 그래서 계속 먹여보는 거야.\r
* 그날 저녁상에 내 몫만 국그릇이 하나 더 놓여 있었다.\r
@affection 10\r
@end\r
\r
=== hayeong_04 | 장 보러 가는 길\r
@bg street evening\r
@bgm warm\r
@outfit 1\r
* 장바구니가 두 개라 결국 따라나섰다.\r
하영 [기본] 안 와도 됐는데.\r
나 두 개는 무겁잖아요.\r
하영 [기본] 하나는 내 실습 재료고, 하나는 하숙집 거야. 따로 계산해야 해.\r
@choice\r
- 무거운 쪽을 들기 | +8 | A\r
- 실습 재료 쪽을 들기 | +8 | B\r
@label A\r
나 [기본] 무거운 거 주세요.\r
하영 [놀람] ...그냥 가벼운 거 들어도 되는데.\r
나 안 되죠.\r
하영 [부끄러움] 말은 잘하네.\r
@goto END\r
@label B\r
나 [기본] 실습 재료 제가 들게요. 그게 더 중요하잖아요.\r
하영 [놀람] 그걸 어떻게 알았어?\r
나 아까부터 그 봉지만 계속 보고 계셨어요.\r
하영 [부끄러움] ...관찰력 좋네.\r
@label END\r
* 돌아오는 길에 하영은 평소보다 천천히 걸었다.\r
하영 [기본] 나 원래 장 보는 거 혼자 하는 게 편했는데.\r
하영 [웃음] 오늘은 좀 빨리 온 것 같네.\r
@affection 10\r
@end\r
\r
=== hayeong_05 | 실습 과제 시식단\r
@bg kitchen night\r
@bgm warm\r
@outfit 1\r
* 식탁 위에 똑같이 생긴 접시 세 개가 놓여 있었다.\r
하영 [진지] 셋 중에 하나만 과제로 낼 거야. 골라줘.\r
나 [놀람] 저한테요? 다른 분들도 있잖아요.\r
하영 [기본] 다들 맛있다고만 해. 그건 도움이 안 돼.\r
@choice\r
- 제일 예쁜 접시를 고르기 | +6 | A\r
- 셋 다 먹어보고 고르기 | +9 | B\r
@label A\r
나 [기본] 이게 제일 보기 좋은데요.\r
하영 [삐짐] 맛은 안 보고?\r
나 심사위원도 눈으로 먼저 봐요.\r
하영 [놀람] ...그건 맞는 말이네.\r
@goto END\r
@label B\r
* 나는 세 접시를 천천히 다 먹었다.\r
하영 [놀람] 야, 다 먹으면 어떡해.\r
나 [기본] 두 번째 게 제일 좋아요. 처음엔 밍밍한데 나중에 올라와요.\r
하영 [놀람] ...그게 내가 제일 고민한 거야.\r
하영 [부끄러움] 어떻게 알았어.\r
나 아까 그 접시만 두 번 고쳤잖아요.\r
@label END\r
하영 [기본] 너 은근히 사람을 잘 봐.\r
하영 [부끄러움] 그거 좀 무서운데.\r
@affection 10\r
@end\r
\r
=== hayeong_06 | 비 오는 날의 부침개\r
@bg kitchen evening\r
@bgm warm\r
@outfit 1\r
* 창밖에 비가 쏟아지고 부엌에 기름 냄새가 가득했다.\r
하영 [웃음] 비 오면 이거지. 이건 논리가 아니라 본능이야.\r
나 몇 장 부치는 거예요?\r
하영 [기본] 열 장. 하숙생 전원.\r
@choice\r
- 반죽 젓기 돕기 | +8 | A\r
- 그냥 옆에서 기다리기 | +5 | B\r
@label A\r
나 [기본] 제가 저을게요.\r
하영 [기본] 손목 써. 팔 말고.\r
* 한참을 젓다 보니 팔이 저렸다.\r
하영 [웃음] 그봐. 요리는 체력이야.\r
@goto END\r
@label B\r
나 [기본] 저는 먹는 쪽이 더 잘 맞아서요.\r
하영 [삐짐] 뻔뻔하기는.\r
* 그러면서도 하영은 첫 장을 내 앞에 놓았다.\r
@label END\r
* 첫 장은 언제나 부치는 사람 몫이라고 했는데, 그날 첫 장은 내 앞에 있었다.\r
하영 [부끄러움] 왜 봐. 식어.\r
@affection 10\r
@end\r
\r
=== hayeong_07 | 졸업하면 뭐 할 거야\r
@bg maru night\r
@bgm sad\r
@outfit 0\r
* 판이 끝나고도 하영은 일어나지 않았다.\r
하영 [기본] 나 다음 달에 실습 나가.\r
나 어디로요?\r
하영 [기본] 호텔 주방. 새벽 다섯 시 출근이래.\r
하영 [패배] 근데 거기서 1년 버틴 사람이 열에 둘이래.\r
나 무서워요?\r
하영 [기본] 무섭다기보단... 내가 좋아하는 게 맞나 싶어.\r
하영 [패배] 매일 같은 걸 백 번씩 만드는 일이잖아.\r
@bgm warm\r
나 [기본] 여기서도 매일 같은 밥 하시잖아요.\r
하영 [놀람] 그건 다르지.\r
나 뭐가 달라요?\r
하영 [기본] 여기는... 먹을 사람 얼굴을 아니까.\r
* 하영은 말해놓고 스스로 놀란 표정을 지었다.\r
하영 [부끄러움] 아. 답을 내가 말했네.\r
@affection 10\r
@end\r
\r
=== hayeong_08 | 하영이 요리를 시작한 날\r
@bg kitchen night\r
@bgm sad\r
@outfit 0\r
하영 [기본] 나 중학교 때 엄마가 오래 아팠어.\r
나 [기본] ...\r
하영 [기본] 밥을 누가 해야 되는데, 아빠는 늦게 오고. 그래서 내가 했어.\r
하영 [기본] 처음엔 라면만 끓였지. 그러다 계란을 넣고, 파를 넣고.\r
하영 [웃음] 엄마가 그거 먹고 처음으로 두 그릇 먹었어.\r
하영 [기본] 그게 시작이야.\r
나 지금은 어떠세요, 어머님.\r
하영 [웃음] 완치. 지금은 나보다 잘 드셔.\r
@bgm warm\r
하영 [기본] 그때 알았어. 밥은 그냥 밥이 아니더라.\r
하영 [부끄러움] ...왜 이런 얘길 너한테 하고 있지.\r
나 물어봐서요.\r
하영 [기본] 물어본 사람이 네가 처음이야.\r
@affection 10\r
@end\r
\r
=== hayeong_09 | 누구 몫이었을까\r
@bg kitchen night\r
@bgm tense\r
@outfit 0\r
* 식탁 위에 도시락 하나가 놓여 있었다. 이름표는 없었다.\r
수아 [웃음] 오, 이거 내 거지? 하영이가 나 주려고 싼 거 맞지?\r
하영 [놀람] 아니 그건...\r
* 수아는 이미 뚜껑을 열고 있었다.\r
@choice\r
- 내 것 같다고 말하기 | +9 | A\r
- 아무 말 안 하기 | +4 | B\r
@label A\r
나 [기본] 그거 제 것 같은데요.\r
수아 [놀람] 어? 왜?\r
나 어제 제가 좋아한다고 한 반찬만 들어 있어서요.\r
하영 [부끄러움] ...야.\r
수아 [웃음] 아하. 그렇구나. 미안 미안.\r
* 수아는 눈치 없는 척 웃으며 나갔다.\r
하영 [삐짐] 굳이 그렇게 말해야 했어?\r
나 아니면 뺏겼잖아요.\r
하영 [부끄러움] ...그건 그래.\r
@goto END\r
@label B\r
* 나는 아무 말도 하지 않았고, 수아는 도시락을 들고 나갔다.\r
하영 [삐짐] 왜 가만히 있었어.\r
나 제 거라는 보장이 없어서요.\r
하영 [삐짐] 보장? 이름표 없으면 다 네 거야. 이 집에서 나한테는.\r
나 [놀람] 네?\r
하영 [부끄러움] 몰라. 내일 다시 싸줄 테니까 그때는 뺏기지 마.\r
@label END\r
@bgm warm\r
하영 [기본] 나 사람한테 뭐 챙겨주는 거 잘 안 해.\r
하영 [부끄러움] 그러니까 눈치 좀 챙겨.\r
@affection 10\r
@end\r
\r
=== hayeong_10 | 한 사람을 위한 상\r
@bg kitchen night\r
@bgm confess\r
@outfit 2\r
* 열 번째 판이 끝나고, 하영은 부엌으로 가더니 한참 나오지 않았다.\r
* 따라 들어가니 식탁에 상이 차려져 있었다. 자리는 하나였다.\r
나 [놀람] 이게 다 뭐예요?\r
하영 [기본] 앉아.\r
@cg hayeong_ending\r
* 반찬 하나하나가 그동안 내가 "좋다"고 말했던 것들이었다.\r
하영 [기본] 나 예전에 그랬지. 사람마다 좋다고 하는 지점이 다르다고.\r
하영 [웃음] 이게 네 지점이야. 반년 걸려서 알아냈어.\r
나 반년이요?\r
하영 [부끄러움] 매일 조금씩 바꿔서 내놨어. 어떤 날 두 그릇 먹는지 보려고.\r
하영 [진지] 나 요리로 마음 표현하는 거밖에 못 해.\r
하영 [부끄러움] 그러니까 이건 그런 뜻이야.\r
하영 [기본] 승부에서 이겨서 주는 상 아니야. 진작부터 만들고 있었어.\r
@choice\r
- 잘 먹겠습니다 | +20 | A\r
- 저도 같은 마음이에요 | +20 | B\r
@label A\r
나 [웃음] ...잘 먹겠습니다.\r
하영 [놀람] 그게 대답이야?\r
나 제일 확실한 대답인데요.\r
하영 [부끄러움] ...그러네. 인정.\r
@goto END\r
@label B\r
나 [기본] 저도 같은 마음이에요. 반년 전부터.\r
하영 [놀람] 반년 전?\r
나 첫 판에서 국 데워놨다고 하셨을 때부터요.\r
하영 [부끄러움] 그건 그냥 하숙집 밥이었는데.\r
나 저한테는 아니었어요.\r
@label END\r
@bgm warm\r
하영 [웃음] 그럼 내일부터 자리 하나는 계속 비워둘게.\r
하영 [기본] 대신 설거지는 네가.\r
@affection 20\r
@point 300\r
@end\r
`,Og=`# 지우 (밤샘) - 봄 / 3번 하숙생\r
\r
=== jiwoo_01 | 새벽 세 시의 마루\r
@bg maru night\r
@bgm spring\r
@outfit 0\r
* 새벽 세 시. 마루에 불이 켜져 있었다.\r
지우 [기본] 안 자네.\r
나 그쪽도요.\r
지우 [기본] 나는 원래 이 시간이 낮이야.\r
* 지우는 스탠드 하나만 켜놓고 혼자 패를 늘어놓고 있었다.\r
나 [놀람] 혼자 치는 거예요?\r
지우 [기본] 연습. 상대가 없으니까.\r
나 상대 있으면 할래요?\r
* 지우가 처음으로 고개를 들었다.\r
지우 [놀람] ...너 몇 시까지 깨어 있을 수 있어?\r
나 모르겠는데요.\r
지우 [웃음] 그럼 알게 될 거야.\r
@affection 10\r
@end\r
\r
=== jiwoo_02 | 조용히 해달라는 부탁\r
@bg hallway night\r
@bgm spring\r
* 아침에 예린이 복도에서 나를 붙잡았다.\r
예린 [진지] 203호에 좀 전해줘. 새벽에 소리 좀 줄여달라고.\r
나 무슨 소리요?\r
예린 [기본] 캔버스 긁는 소리. 새벽 네 시에.\r
* 지우에게 말을 전하자 지우는 잠깐 생각하더니 고개를 끄덕였다.\r
지우 [기본] 알았어. 옥상 가서 할게.\r
나 그게 더 추울 텐데요.\r
지우 [기본] 상관없어.\r
나 그럼 규칙 하나 만들죠. 새벽 두 시 넘으면 마루에서 하기로.\r
지우 [놀람] 그건 왜.\r
나 옥상은 추우니까요.\r
지우 [부끄러움] ...주인집 아들 노릇 하네.\r
@affection 10\r
@end\r
\r
=== jiwoo_03 | 지우의 색\r
@bg room night\r
@bgm warm\r
@outfit 0\r
* 지우가 캔버스를 마루로 들고 나왔다.\r
지우 [기본] 이거 봐. 무슨 색으로 보여?\r
나 [기본] 파란색이요.\r
지우 [기본] 몇 가지 파랑?\r
나 [놀람] 그게 여러 개예요?\r
지우 [웃음] 여기 일곱 개 들어갔어.\r
나 하나로 보이는데요.\r
지우 [기본] 그게 맞아. 잘 섞이면 하나로 보여.\r
지우 [진지] 나는 그런 걸 만들고 싶어. 여러 개인데 하나인 거.\r
나 어렵겠네요.\r
지우 [기본] 어려워. 그래서 밤을 새는 거고.\r
@affection 10\r
@end\r
\r
=== jiwoo_04 | 옥상에서 본 새벽\r
@bg rooftop night\r
@bgm warm\r
@outfit 1\r
* 지우가 담요 두 장을 들고 옥상으로 올라갔다.\r
지우 [기본] 다섯 시 십오 분. 그때가 제일 예뻐.\r
나 그걸 어떻게 아세요?\r
지우 [기본] 백 번쯤 봤으니까.\r
@choice\r
- 같이 기다리기 | +9 | A\r
- 커피 사 오기 | +7 | B\r
@label A\r
나 [기본] 저도 같이 기다릴게요.\r
지우 [놀람] 한 시간 남았는데.\r
나 한 시간이면 한 판 더 칠 수 있죠.\r
지우 [웃음] ...좋아.\r
@goto END\r
@label B\r
나 [기본] 그럼 커피 사 올게요. 한 시간은 기니까.\r
지우 [기본] 편의점 다녀오면 삼십 분이야.\r
* 돌아왔을 때 지우는 담요를 두 장 다 펴놓고 기다리고 있었다.\r
@label END\r
@bg rooftop morning\r
* 다섯 시 십오 분. 하늘이 회색에서 푸른색으로 넘어갔다.\r
지우 [기본] 저거야. 저 색.\r
나 [놀람] ...진짜 예쁘네요.\r
지우 [부끄러움] 누구랑 같이 본 건 처음이야.\r
@affection 10\r
@end\r
\r
=== jiwoo_05 | 모델 좀 서줄래\r
@bg room night\r
@bgm warm\r
@outfit 1\r
지우 [기본] 부탁이 있는데.\r
나 뭔데요.\r
지우 [부끄러움] 모델. 삼십 분만.\r
나 [놀람] 제가요?\r
지우 [기본] 사람 그리는 과제가 있어. 근데 나 사람 안 그려.\r
@choice\r
- 왜 사람을 안 그리는지 묻기 | +9 | A\r
- 그냥 앉아주기 | +7 | B\r
@label A\r
나 [기본] 왜 사람은 안 그려요?\r
지우 [기본] 사람은 계속 변하잖아. 다 그리기 전에 달라져 있어.\r
나 그럼 변하기 전에 빨리 그리면 되죠.\r
지우 [놀람] ...그건 생각 못 했네.\r
@goto END\r
@label B\r
나 [기본] 알겠어요. 어디 앉으면 돼요?\r
지우 [기본] 거기. 움직이지 마.\r
@label END\r
* 삼십 분이 한 시간이 되고, 한 시간이 두 시간이 됐다.\r
나 [기본] 저 다리 저려요.\r
지우 [놀람] 어? 아. 미안.\r
지우 [부끄러움] 시간 가는 줄 몰랐어. 이런 적 없는데.\r
@affection 10\r
@end\r
\r
=== jiwoo_06 | 24시간 카페 원정\r
@bg street night\r
@bgm warm\r
@outfit 1\r
* 마감 전날, 지우가 화구를 챙기더니 나를 돌아봤다.\r
지우 [기본] 하숙집에선 집중이 안 돼. 카페 갈 건데.\r
나 새벽 두 시에요?\r
지우 [기본] 24시간 하는 데가 있어.\r
@choice\r
- 따라가기 | +9 | A\r
- 택시비만 쥐여주기 | +5 | B\r
@label A\r
나 [기본] 같이 가요. 짐 많잖아요.\r
지우 [놀람] 너 내일 수업 있잖아.\r
나 그쪽도 있잖아요.\r
지우 [웃음] ...그건 그렇네.\r
@goto END\r
@label B\r
나 [기본] 이거 택시비요. 짐 많으니까 타고 가세요.\r
지우 [기본] ...고마워.\r
* 삼십 분 뒤 지우에게서 사진이 한 장 왔다. 카페 창가 자리, 빈 의자 하나가 찍혀 있었다.\r
@label END\r
@bgm sad\r
* 그날 새벽 지우는 결국 그림을 끝냈다.\r
지우 [기본] 다 그렸어. 근데 이상하네.\r
나 뭐가요.\r
지우 [부끄러움] 혼자 그리는 게 원래 제일 편했는데. 오늘은 안 그랬어.\r
@affection 10\r
@end\r
\r
=== jiwoo_07 | 그림이 안 그려질 때\r
@bg maru night\r
@bgm sad\r
@outfit 0\r
* 며칠째 지우의 캔버스가 하얀 채였다.\r
지우 [패배] 안 나와.\r
나 뭐가요?\r
지우 [기본] 색이. 아무것도 안 떠올라.\r
지우 [패배] 이런 적 처음이야. 십 년 동안 한 번도 없었어.\r
나 [기본] 쉬면 되죠.\r
지우 [삐짐] 쉬면 더 안 나와. 그건 내가 알아.\r
@bgm none\r
* 지우는 한참 말이 없다가 아주 작게 말했다.\r
지우 [패배] 무서워. 이대로 끝나는 거면 어떡하지.\r
@bgm warm\r
나 [기본] 그럼 오늘은 그리지 말고 판이나 쳐요.\r
지우 [놀람] 지금?\r
나 색이 안 떠오르면 패라도 보세요. 홍단 청단 다 색이잖아요.\r
지우 [웃음] ...그게 무슨 논리야.\r
* 그래도 지우는 화투갑을 꺼냈고, 그날 밤 세 판을 쳤다.\r
지우 [기본] 야. 방금 빨간색 떠올랐어.\r
@affection 10\r
@end\r
\r
=== jiwoo_08 | 떨어진 공모전\r
@bg rooftop night\r
@bgm sad\r
@outfit 0\r
* 옥상에 지우가 혼자 앉아 있었다. 손에 종이 한 장이 구겨져 있었다.\r
지우 [기본] 떨어졌어. 세 번째야.\r
나 [기본] ...\r
지우 [기본] 심사평에 뭐라고 쓰여 있었는지 알아? "기술은 좋은데 사람이 없다."\r
지우 [패배] 사람이 없대. 내 그림에.\r
* 지우는 종이를 펴서 한참 들여다봤다.\r
지우 [기본] 나 사람 그리는 거 무서워했어. 오래.\r
나 왜요?\r
지우 [기본] 잘못 그리면 그 사람이 아니게 되니까.\r
지우 [패배] 근데 그게 핑계였던 것 같아.\r
@bgm warm\r
나 [기본] 저 그렸잖아요. 저번에.\r
지우 [놀람] 그건...\r
나 그거 저 맞았어요. 다리 저렸던 것까지 똑같았어요.\r
지우 [부끄러움] ...봤어?\r
나 세워놨잖아요, 벽에.\r
지우 [부끄러움] 치웠어야 했는데.\r
@affection 10\r
@end\r
\r
=== jiwoo_09 | 누가 모델이야\r
@bg hallway night\r
@bgm tense\r
@outfit 0\r
* 세연이 지우의 방에서 나오는 걸 봤다. 웃으면서.\r
세연 [웃음] 나 오늘 지우 모델 했어. 나 그림 잘 나온대.\r
* 그날 밤 지우는 평소보다 말이 없었다.\r
@choice\r
- 세연 얘기를 꺼내기 | +9 | A\r
- 그냥 판에 집중하기 | +5 | B\r
@label A\r
나 [기본] 세연 씨 그리셨다면서요.\r
지우 [놀람] ...들었어?\r
나 잘 나왔대요.\r
지우 [기본] 잘 나왔어. 세연이는 표정이 많으니까 그리기 쉬워.\r
지우 [기본] 근데 그건 연습이야.\r
나 연습이요?\r
지우 [부끄러움] 어려운 걸 그리려면 쉬운 걸로 손을 풀어야 해.\r
나 어려운 게 뭔데요.\r
지우 [부끄러움] ...묻지 마.\r
@goto END\r
@label B\r
* 나는 아무 말도 하지 않고 패만 봤다.\r
지우 [삐짐] 야.\r
나 네?\r
지우 [삐짐] 안 물어봐?\r
나 뭘요?\r
지우 [삐짐] ...됐어.\r
* 그날 지우는 일부러 내 패를 두 번이나 놓쳤다.\r
@label END\r
@bgm warm\r
지우 [기본] 하나만 말할게.\r
지우 [부끄러움] 내가 제일 오래 그린 건 세연이가 아니야.\r
@affection 10\r
@end\r
\r
=== jiwoo_10 | 완성된 그림\r
@bg room night\r
@bgm confess\r
@outfit 2\r
* 열 번째 판이 끝나자 지우가 일어섰다.\r
지우 [기본] 보여줄 게 있어.\r
* 방에 들어서자 벽에 큰 캔버스가 세워져 있었다. 천으로 덮여 있었다.\r
지우 [부끄러움] 반년 걸렸어.\r
@cg jiwoo_ending\r
* 천이 걷히자, 새벽 다섯 시 십오 분의 하늘 아래 마루가 있었다.\r
* 그 마루에 두 사람이 마주 앉아 패를 보고 있었다.\r
나 [놀람] 이거...\r
지우 [기본] 사람은 계속 변해서 못 그린다고 했잖아.\r
지우 [기본] 그래서 변하는 걸 다 그렸어. 백 번 봤으니까.\r
지우 [부끄러움] 처음 앉았을 때부터 지금까지.\r
지우 [진지] 공모전 심사평, 사람이 없다고 했지.\r
지우 [웃음] 이제 있어.\r
지우 [부끄러움] 나 너 좋아해. 이기든 지든 상관없이.\r
지우 [기본] 판을 이겨서 얻은 마음이 아니야. 판이 계기였을 뿐이야.\r
@choice\r
- 나도 계속 보고 있었어요 | +20 | A\r
- 이 그림, 제가 가져도 돼요? | +20 | B\r
@label A\r
나 [기본] 저도 계속 보고 있었어요. 백 번쯤.\r
지우 [놀람] ...뭘.\r
나 색 고를 때 눈 가늘어지는 거요.\r
지우 [부끄러움] 야. 그런 걸 왜 봐.\r
@goto END\r
@label B\r
나 [기본] 이 그림 제가 가져도 돼요?\r
지우 [놀람] 왜.\r
나 여기 제가 있으니까요.\r
지우 [부끄러움] ...그런 이유로 그림 달라는 사람 처음이야.\r
지우 [웃음] 줄게. 대신 조건이 있어.\r
나 뭔데요.\r
지우 [부끄러움] 계속 마주 앉아 있어줘. 다음 그림도 그려야 하니까.\r
@label END\r
@bgm warm\r
* 그날 새벽 다섯 시 십오 분에도 우리는 아직 마루에 있었다.\r
@affection 20\r
@point 300\r
@end\r
`,Ug=`# 민지 (취준) - 여름 / 5번 하숙생\r
\r
=== minji_01 | 불 켜진 302호\r
@bg hallway night\r
@bgm summer\r
@outfit 0\r
* 새벽에 물을 마시러 나왔더니 302호에 불이 켜져 있었다.\r
민지 [기본] 문 앞에 서 있으면 더 신경 쓰여.\r
나 [놀람] 아, 죄송해요.\r
민지 [기본] 들어오라는 뜻이야.\r
* 책상에 자소서 창이 여섯 개 떠 있었다.\r
민지 [기본] 주인집 아들이지. 아래층에서 매일 이기고 다닌다며.\r
나 매일은 아니에요.\r
민지 [웃음] 그럼 승률이 얼마인데.\r
나 [놀람] 그걸 왜...\r
민지 [기본] 숫자로 말해야 믿지.\r
민지 [웃음] 한 판 하자. 나 지금 머리 식힐 게 필요해.\r
@affection 10\r
@end\r
\r
=== minji_02 | 공용 프린터 규칙\r
@bg hallway evening\r
@bgm summer\r
민지 [진지] 프린터 규칙 좀 바꿔야 해.\r
나 어떻게요?\r
민지 [기본] 지금은 선착순이잖아. 그럼 새벽에 자소서 뽑는 내가 항상 손해야.\r
나 왜요? 새벽엔 아무도 안 쓰는데.\r
민지 [기본] 토너 때문에. 낮에 다 써버려서 새벽엔 늘 흐릿해.\r
나 [기본] 그럼 마감 있는 사람 우선으로 할까요?\r
민지 [놀람] ...그게 되겠어? 다들 마감 있다고 할 텐데.\r
나 증빙하면 되죠. 원서 접수 마감일 캡처 같은 거로.\r
민지 [웃음] 야. 너 이런 거 잘한다.\r
민지 [기본] 그거 알아? 규칙 만들 줄 아는 사람은 어디 가도 굶진 않아.\r
@affection 10\r
@end\r
\r
=== minji_03 | 민지의 계산법\r
@bg maru night\r
@bgm summer\r
* 민지가 7점에서 정확히 멈췄다.\r
나 [놀람] 왜 여기서 스톱해요? 더 갈 수 있는데.\r
민지 [기본] 네 손에 피가 여섯 장이야. 두 판 더 가면 네가 뒤집어.\r
나 [놀람] 그걸 세고 있었어요?\r
민지 [기본] 처음부터.\r
나 매번요?\r
민지 [웃음] 매번. 그게 내가 가진 유일한 재능이야.\r
* 민지는 패를 모으며 조금 쓴웃음을 지었다.\r
민지 [기본] 근데 인생은 이게 안 통하더라.\r
나 왜요?\r
민지 [기본] 자소서는 몇 점인지 안 알려주잖아. 그냥 떨어졌다고만 해.\r
@affection 10\r
@end\r
\r
=== minji_04 | 면접 복장 골라주기\r
@bg room evening\r
@bgm warm\r
@outfit 1\r
* 민지가 옷 두 벌을 침대에 펼쳐놓고 팔짱을 끼고 있었다.\r
민지 [기본] 둘 중에 뭐가 나아?\r
나 [놀람] 저한테 물으시는 거예요?\r
민지 [기본] 남자 면접관이 세 명 중 둘이래. 표본이 필요해.\r
@choice\r
- 무난한 정장 | +7 | A\r
- 조금 밝은 쪽 | +9 | B\r
@label A\r
나 [기본] 이쪽이요. 무난한 게 안전하죠.\r
민지 [기본] 안전. 그게 맞지.\r
민지 [패배] ...근데 안전하게만 해서 열두 번 떨어졌어.\r
나 [놀람] 아.\r
민지 [웃음] 아니야. 네 말이 맞아. 이걸로 갈게.\r
@goto END\r
@label B\r
나 [기본] 밝은 쪽이요.\r
민지 [놀람] 튀지 않을까?\r
나 열두 번 안전하게 하셨으면 한 번쯤은요.\r
민지 [놀람] ...그 횟수를 왜 네가 알아.\r
나 프린터 뽑을 때마다 세고 있었어요.\r
민지 [부끄러움] 야.\r
@label END\r
민지 [기본] 있잖아. 나 옷 골라달라고 한 사람 네가 처음이야.\r
민지 [부끄러움] 물어볼 사람이 없었던 게 아니라, 묻고 싶은 사람이 없었어.\r
@affection 10\r
@end\r
\r
=== minji_05 | 탈락 메일이 온 밤\r
@bg hallway night\r
@bgm sad\r
@outfit 1\r
* 새벽 한 시. 302호에서 아무 소리도 나지 않았다.\r
* 문을 두드리자 한참 뒤에 열렸다.\r
민지 [패배] 떨어졌어. 최종에서.\r
나 [기본] ...\r
민지 [기본] 괜찮아. 기대값 안에 있었어. 최종 합격률 12%니까.\r
민지 [패배] 근데 왜 계산해도 안 괜찮지.\r
@choice\r
- 아무 말 없이 옆에 앉기 | +9 | A\r
- 오늘은 계산하지 말라고 하기 | +9 | B\r
@label A\r
* 나는 아무 말도 하지 않고 문 앞에 앉았다.\r
* 민지도 말없이 그 옆에 앉았다.\r
* 십 분쯤 지나서 민지가 먼저 입을 열었다.\r
민지 [기본] 왜 아무 말 안 해.\r
나 할 말이 없어서요.\r
민지 [부끄러움] ...그게 제일 낫네.\r
@goto END\r
@label B\r
나 [기본] 오늘은 계산하지 마세요.\r
민지 [삐짐] 계산 안 하면 뭐 해.\r
나 그냥 억울해하세요. 확률 말고요.\r
민지 [놀람] ...그래도 돼?\r
나 12%는 내일 얘기해요.\r
민지 [패배] ...억울해. 진짜 억울해.\r
@label END\r
@bgm warm\r
* 그날 밤 민지는 처음으로 계산 없이 말했다.\r
@affection 10\r
@end\r
\r
=== minji_06 | 편의점 야식 회의\r
@bg cvs night\r
@bgm warm\r
@outfit 1\r
* 민지가 편의점 앞 벤치에 앉아 노트를 펼쳤다.\r
민지 [기본] 회의하자. 의제는 '내가 어디서 잘못했나'야.\r
나 그런 회의는 좀 잔인한데요.\r
민지 [웃음] 원래 회고는 잔인해야 의미가 있어.\r
@choice\r
- 진지하게 같이 분석하기 | +8 | A\r
- 오늘은 회의 폐기하기 | +9 | B\r
@label A\r
나 [기본] 좋아요. 그럼 1번 항목부터.\r
* 우리는 새벽 두 시까지 노트 세 장을 채웠다.\r
민지 [놀람] 야. 너 왜 이렇게 열심히 해.\r
나 회의 소집하셨잖아요.\r
민지 [부끄러움] ...보통은 다들 도망가는데.\r
@goto END\r
@label B\r
나 [기본] 안건 기각이요.\r
민지 [삐짐] 뭐?\r
나 오늘 안건은 '뭐 먹을까'로 바꾸시죠.\r
민지 [놀람] ...진행자 권한 침해인데.\r
나 저 주인집 아들이에요. 하숙집 회의 소집권 있어요.\r
민지 [웃음] 그런 게 어딨어.\r
* 그날의 결론은 삼각김밥 두 개와 컵라면 하나였다.\r
@label END\r
민지 [기본] 있잖아. 오늘 처음으로 하루를 계산 안 하고 끝냈어.\r
민지 [웃음] 나쁘지 않네.\r
@affection 10\r
@end\r
\r
=== minji_07 | 부모님 전화\r
@bg rooftop night\r
@bgm sad\r
@outfit 0\r
* 옥상에서 민지가 전화를 끊는 걸 봤다. 한참 난간만 보고 있었다.\r
민지 [기본] 엄마야. 이번 주도 "언제쯤 될 것 같냐"고.\r
나 뭐라고 하셨어요?\r
민지 [기본] 곧 된다고 했지. 삼 년째 같은 대답이야.\r
민지 [패배] 나도 내가 언제 될지 모르는데.\r
* 민지는 웃으려다 실패했다.\r
민지 [기본] 제일 무서운 게 뭔지 알아? 부모님이 화내는 거 아니야.\r
민지 [패배] "괜찮다"고 하는 거야. 그 말이 제일 무서워.\r
@bgm warm\r
나 [기본] 저희 할머니가 저한테 그 말 자주 하셨어요.\r
민지 [기본] 그래서 어때.\r
나 무섭죠. 근데 그건 저를 믿는다는 뜻이기도 하더라고요.\r
민지 [놀람] ...\r
나 안 믿으면 화를 내죠.\r
민지 [부끄러움] ...너 왜 이렇게 잘 알아.\r
@affection 10\r
@end\r
\r
=== minji_08 | 포기한 전공\r
@bg maru night\r
@bgm sad\r
@outfit 0\r
민지 [기본] 나 원래 국문과 가고 싶었어.\r
나 [놀람] 처음 듣네요.\r
민지 [기본] 아무한테도 말 안 했으니까.\r
민지 [기본] 근데 취업 안 된다고 해서 경영으로 갔어.\r
민지 [패배] 그래놓고 취업을 못 하고 있으니까 좀 웃기지.\r
나 지금도 쓰세요? 글.\r
민지 [놀람] 어떻게 알았어.\r
나 노트 뒷장에 뭐 많이 쓰시더라고요. 회의록 아닌 거요.\r
민지 [부끄러움] ...봤어?\r
나 안 읽었어요. 있다는 것만 봤어요.\r
@bgm warm\r
민지 [기본] 자소서는 천 번 고쳐도 안 늘어.\r
민지 [웃음] 근데 그 뒷장은 한 번에 나와.\r
나 그게 답 아닐까요.\r
민지 [부끄러움] ...너 진짜 계산 없이 그런 말 하지 마.\r
@affection 10\r
@end\r
\r
=== minji_09 | 합격한 친구\r
@bg room night\r
@bgm tense\r
@outfit 0\r
* 민지가 휴대폰을 엎어놓고 있었다.\r
민지 [기본] 동기가 붙었대. 대기업.\r
나 [기본] ...\r
민지 [기본] 축하한다고 보냈어. 진심으로. 진짜 진심으로.\r
민지 [패배] 근데 보내고 나서 삼십 분 동안 화장실에 있었어.\r
@choice\r
- 그래도 축하한 게 대단하다고 말하기 | +9 | A\r
- 질투해도 된다고 말하기 | +10 | B\r
@label A\r
나 [기본] 진심으로 축하한 거, 그거 아무나 못 해요.\r
민지 [삐짐] 위로하지 마.\r
나 위로 아니에요. 저는 못 할 것 같거든요.\r
민지 [놀람] ...\r
@goto END\r
@label B\r
나 [기본] 질투해도 돼요.\r
민지 [놀람] 뭐?\r
나 축하한 것도 진심이고 질투하는 것도 진심이면, 둘 다 진심인 거죠.\r
민지 [패배] ...둘 다 가져도 되는 거야?\r
나 계산 밖의 일이잖아요. 나누지 마세요.\r
민지 [부끄러움] ...너 가끔 무섭다.\r
@label END\r
@bgm warm\r
민지 [기본] 있잖아. 내가 요즘 유일하게 계산 안 하는 시간이 있어.\r
나 언젠데요.\r
민지 [부끄러움] 마루에 앉아 있는 시간.\r
@affection 10\r
@end\r
\r
=== minji_10 | 계산에 없던 답\r
@bg maru night\r
@bgm confess\r
@outfit 2\r
* 열 번째 판. 민지는 7점에서 멈추지 않았다.\r
나 [놀람] 여기서 고요? 계산상 불리한데.\r
민지 [기본] 알아.\r
나 아는데 왜요.\r
민지 [기본] 오늘은 계산 안 하기로 했거든.\r
@cg minji_ending\r
* 민지는 패를 내려놓고 노트 한 장을 꺼냈다. 회의록이 아닌 뒷장이었다.\r
민지 [부끄러움] 이거 읽어줄게. 딱 한 번만 읽고 찢을 거야.\r
민지 [기본] "삼 년 동안 나는 매일 확률을 계산했다.\r
민지 [기본] 합격 확률, 손해 볼 확률, 실망시킬 확률.\r
민지 [기본] 그런데 계산에 안 잡히는 게 하나 생겼다.\r
민지 [부끄러움] 밤 열한 시에 마루에 나가고 싶은 마음."\r
* 민지는 종이를 접었다.\r
민지 [진지] 나 너 좋아해.\r
민지 [기본] 승부에서 이겨서 얻는 것도 아니고, 계산해서 나온 답도 아니야.\r
민지 [웃음] 그냥 계산이 안 되는 항목이라서 인정하기로 했어.\r
@choice\r
- 저도 계산이 안 됐어요 | +20 | A\r
- 그 종이, 찢지 마세요 | +20 | B\r
@label A\r
나 [기본] 저도 계산이 안 됐어요. 한참 전부터.\r
민지 [놀람] 언제부터.\r
나 프린터 규칙 만들 때부터요.\r
민지 [부끄러움] 그건 그냥 행정이었잖아.\r
나 그때부터 매일 새벽에 복도 나갔어요.\r
민지 [부끄러움] ...그건 반칙이지.\r
@goto END\r
@label B\r
나 [기본] 그 종이 찢지 마세요.\r
민지 [놀람] 왜.\r
나 국문과 가고 싶었다면서요. 그거 잘 쓴 글이에요.\r
민지 [놀람] ...\r
나 그리고 저한테 쓴 글이잖아요. 제 거예요.\r
민지 [부끄러움] ...너 진짜 가끔 무섭다니까.\r
@label END\r
@bgm warm\r
민지 [웃음] 그럼 오늘부터 하루에 한 항목은 계산 안 하기로 할게.\r
나 어떤 항목이요?\r
민지 [부끄러움] 너.\r
@affection 20\r
@point 300\r
@end\r
`,Gg=`# 나래 (옥상) - 여름 / 6번 하숙생\r
\r
=== narae_01 | 옥상에 사람이 있다\r
@bg rooftop night\r
@bgm summer\r
@outfit 0\r
* 옥상 문을 열자 어둠 속에서 목소리가 났다.\r
나래 [기본] 불 켜지 마.\r
나 [놀람] 누구세요?\r
나래 [기본] 303호. 나래.\r
* 눈이 어둠에 익자 망원경 옆에 앉은 사람이 보였다.\r
나래 [기본] 삼 분만 기다려. 지금 목성 위성이 지나가.\r
나 [기본] ...네.\r
* 삼 분 동안 아무도 말하지 않았다.\r
나래 [웃음] 됐다. 볼래?\r
* 접안렌즈에 눈을 대자 작은 점 네 개가 나란히 있었다.\r
나 [놀람] 이게 위성이에요?\r
나래 [웃음] 갈릴레이가 사백 년 전에 본 거랑 같은 거야.\r
나래 [기본] 참, 너 주인집 아들이지. 옥상 독점권 걸고 한 판 하자.\r
@affection 10\r
@end\r
\r
=== narae_02 | 옥상 사용 규칙\r
@bg rooftop night\r
@bgm summer\r
나래 [진지] 옥상 규칙 하나 추가하고 싶어.\r
나 뭔데요.\r
나래 [기본] 밤 열 시 이후에 옥상 전등 끄기.\r
나 빨래 걷는 사람이 불편할 텐데요.\r
나래 [기본] 열 시 전에 걷으면 되잖아.\r
나 그건 좀 일방적인데요.\r
나래 [삐짐] ...\r
* 나래는 한참 생각하더니 고개를 끄덕였다.\r
나래 [기본] 그럼 이렇게 하자. 관측하는 날만 미리 표시해두는 거로.\r
나 그건 좋네요.\r
나래 [웃음] 협상이라는 거 처음 해봤어. 나쁘지 않네.\r
나래 [기본] 대신 표시된 날엔 아무도 못 올라와. 너 빼고.\r
@affection 10\r
@end\r
\r
=== narae_03 | 나래가 세는 것\r
@bg rooftop night\r
@bgm warm\r
* 나래가 수첩에 뭔가를 적고 있었다.\r
나 그건 뭐예요?\r
나래 [기본] 관측 일지. 오늘 몇 등급까지 보이는지.\r
나 매일 적으세요?\r
나래 [기본] 칠 년째.\r
나 [놀람] 칠 년이요?\r
나래 [웃음] 대부분은 "흐림"이야. 서울에서 별 보는 건 거의 실패하는 일이거든.\r
나 그럼 왜 계속 해요?\r
나래 [기본] 백 번 흐려도 한 번 맑으면 그게 남으니까.\r
나래 [진지] 실패한 날도 다 적어. 그게 있어야 맑은 날이 맑은 거야.\r
* 나래는 오늘 칸에 "맑음"이라고 적었다.\r
@affection 10\r
@end\r
\r
=== narae_04 | 망원경 나르기\r
@bg street evening\r
@bgm warm\r
@outfit 1\r
* 나래가 커다란 가방을 낑낑대며 들고 있었다.\r
나래 [기본] 이거 팔 킬로야.\r
나 그걸 혼자 옥상까지요?\r
나래 [기본] 늘 그랬는데.\r
@choice\r
- 대신 들어주기 | +8 | A\r
- 같이 나눠 들기 | +9 | B\r
@label A\r
나 [기본] 제가 들게요.\r
나래 [놀람] 무거워.\r
나 팔 킬로라면서요.\r
* 삼 층까지 올라가자 팔이 떨렸다.\r
나래 [웃음] 그봐.\r
@goto END\r
@label B\r
나 [기본] 반씩 나눠 들죠. 삼각대는 제가.\r
나래 [놀람] 그게 되나?\r
나 두 명이니까 되죠.\r
나래 [부끄러움] ...나 칠 년 동안 혼자 들었는데.\r
@label END\r
@bg rooftop night\r
* 망원경을 세우고 나래가 하늘을 맞췄다.\r
나래 [기본] 팔 킬로가 오늘은 안 무거웠어.\r
나 반씩 들어서요?\r
나래 [부끄러움] ...그런 걸로 해두자.\r
@affection 10\r
@end\r
\r
=== narae_05 | 여름 유성우\r
@bg rooftop night\r
@bgm summer\r
@outfit 1\r
* 페르세우스 유성우가 절정인 밤이었다.\r
나래 [웃음] 새벽 세 시부터 네 시 사이. 시간당 육십 개.\r
나 그럼 일 분에 하나요?\r
나래 [기본] 계산상은. 실제로는 절반도 안 보여.\r
@choice\r
- 끝까지 같이 세기 | +9 | A\r
- 소원 빌기 | +8 | B\r
@label A\r
나 [기본] 그럼 같이 세죠. 몇 개나 보이나.\r
나래 [놀람] 한 시간을?\r
나 한 시간이면 두 판 칠 시간인데요.\r
* 우리는 결국 새벽 네 시까지 스물세 개를 셌다.\r
나래 [웃음] 스물셋. 칠 년 중에 제일 많아.\r
나 혼자 셌을 땐 몇 개였는데요.\r
나래 [부끄러움] ...열하나. 중간에 졸아서.\r
@goto END\r
@label B\r
나 [기본] 소원 빌어야죠. 유성우니까.\r
나래 [삐짐] 그거 미신이야. 대기권 진입하는 먼지한테 무슨 소원을 빌어.\r
나 그럼 안 비세요?\r
나래 [부끄러움] ...빌긴 해. 매년.\r
나 뭐라고요?\r
나래 [부끄러움] 안 알려줘. 말하면 안 이뤄져.\r
@label END\r
@bgm warm\r
나래 [기본] 있잖아. 하늘 보는 건 원래 혼자 하는 일이야.\r
나래 [부끄러움] 근데 옆에 사람 있으면 더 잘 보여. 이건 과학이 아니야.\r
@affection 10\r
@end\r
\r
=== narae_06 | 비 오는 날의 옥상\r
@bg rooftop evening\r
@bgm sad\r
@outfit 1\r
* 일주일째 비가 왔다. 나래는 그래도 옥상에 올라갔다.\r
나 [놀람] 비 오는데 왜 올라가세요?\r
나래 [기본] 습관이야.\r
나 별도 안 보이잖아요.\r
나래 [기본] 안 보이는 것도 확인해야 일지를 쓰지.\r
@choice\r
- 우산 들고 따라가기 | +9 | A\r
- 실내에서 기다리기 | +6 | B\r
@label A\r
* 나는 우산을 들고 따라 올라갔다.\r
나래 [놀람] 뭐 해.\r
나 일지 쓰실 동안 우산 들어드릴게요.\r
나래 [부끄러움] 삼 분이면 끝나는데.\r
나 그럼 삼 분 들죠.\r
* 나래는 삼 분이 훨씬 넘도록 하늘만 보고 있었다.\r
@goto END\r
@label B\r
* 나는 계단참에서 기다렸다.\r
* 나래는 십 분 뒤 흠뻑 젖은 채 내려왔다.\r
나 [놀람] 왜 이렇게 오래 계셨어요.\r
나래 [기본] 구름이 걷히나 봤어. 안 걷혔어.\r
나래 [부끄러움] 근데 내려오니까 누가 있네.\r
@label END\r
@bgm warm\r
나래 [기본] 흐린 날은 늘 혼자였는데.\r
나래 [웃음] 오늘 일지에는 "흐림"이라고 안 쓸래.\r
@affection 10\r
@end\r
\r
=== narae_07 | 연구실에 남는 이유\r
@bg campus night\r
@bgm sad\r
@outfit 0\r
* 연구실 앞 벤치에서 나래가 커피를 들고 앉아 있었다.\r
나래 [기본] 나 박사 갈지 말지 정해야 해. 이번 달까지.\r
나 고민되세요?\r
나래 [기본] 천문학으로 밥 먹고 사는 사람, 한국에 몇 명인지 알아?\r
나 몇 명인데요.\r
나래 [패배] 세기가 쉬울 정도야.\r
* 나래는 커피를 한 모금 마셨다.\r
나래 [기본] 교수님이 그러셨어. "나래는 관측이 아니라 기다리는 걸 잘한다"고.\r
나 칭찬 아니에요?\r
나래 [패배] 칭찬인데, 기다리는 걸로는 논문이 안 나와.\r
@bgm warm\r
나 [기본] 칠 년 동안 매일 일지 쓰셨잖아요.\r
나래 [기본] 그건 논문이 아니야.\r
나 칠 년치 데이터인데요.\r
나래 [놀람] ...\r
나 흐린 날도 다 적었다면서요. 그게 데이터죠.\r
나래 [놀람] ...너 방금 내 논문 주제 말한 것 같은데.\r
@affection 10\r
@end\r
\r
=== narae_08 | 관측이 실패한 밤\r
@bg rooftop night\r
@bgm sad\r
@outfit 0\r
* 나래가 망원경 옆에 주저앉아 있었다.\r
나래 [패배] 일 년 기다린 거였어. 오늘 밤 한 번뿐이었고.\r
나 구름 때문에요?\r
나래 [기본] 삼 분. 딱 삼 분 늦게 걷혔어.\r
* 나래는 손에 든 수첩을 덮지도 못하고 있었다.\r
나래 [패배] 나 이럴 때마다 생각해. 왜 이걸 하고 있지.\r
나래 [기본] 아무도 안 알아주고, 대부분 실패하고, 돈도 안 되는데.\r
@bgm none\r
* 한참 침묵이 흘렀다.\r
나래 [기본] 있잖아. 나 사실 사람들이 옥상 올라오는 거 싫어했어.\r
나래 [패배] 실패하는 거 보이니까.\r
@bgm warm\r
나 [기본] 지금은요?\r
나래 [부끄러움] ...지금은 네가 봐줬으면 좋겠어.\r
나래 [기본] 실패한 것도 같이 본 사람이 있으면, 실패가 아닌 것 같아서.\r
@affection 10\r
@end\r
\r
=== narae_09 | 옥상의 다른 발소리\r
@bg rooftop night\r
@bgm tense\r
@outfit 0\r
* 옥상에 올라가니 나래가 도희 선배와 이야기하고 있었다.\r
도희 [웃음] 나래야, 이거 논문 심사 일정. 내가 조교라 먼저 알았어.\r
나래 [기본] 고마워요, 선배.\r
* 도희가 내려간 뒤에도 나래는 한참 말이 없었다.\r
@choice\r
- 무슨 얘기였는지 묻기 | +8 | A\r
- 옥상 표시판 얘기를 꺼내기 | +10 | B\r
@label A\r
나 [기본] 무슨 얘기였어요?\r
나래 [기본] 심사 일정. 다음 주래.\r
나 그런데 표정이 왜 그래요.\r
나래 [패배] ...떨어지면 여기 못 있을 수도 있어.\r
나 [놀람] 하숙집을요?\r
나래 [기본] 학교를.\r
@goto END\r
@label B\r
나 [기본] 오늘 표시판에 관측한다고 안 써 있던데요.\r
나래 [놀람] ...봤어?\r
나 매일 봐요.\r
나래 [부끄러움] 매일?\r
나 표시 있으면 안 올라오려고요. 방해되니까.\r
나래 [부끄러움] ...그럼 왜 오늘은 올라왔어.\r
나 표시가 없었으니까요.\r
나래 [부끄러움] ...너 그거 알아? 나 요즘 일부러 표시 안 해.\r
@label END\r
@bgm warm\r
나래 [기본] 옥상 독점권은 원래 내 건데.\r
나래 [부끄러움] 한 사람은 예외로 하기로 했어. 오래전에.\r
@affection 10\r
@end\r
\r
=== narae_10 | 다섯 번째 별\r
@bg rooftop night\r
@bgm confess\r
@outfit 2\r
* 열 번째 판이 끝났다. 나래는 오광을 모으고도 스톱하지 않았다.\r
나 [놀람] 오광인데 왜 안 멈춰요.\r
나래 [기본] 광이 다섯 개면 다 모은 거잖아.\r
나래 [부끄러움] 근데 하나가 더 있어.\r
@cg narae_ending\r
* 나래는 망원경을 접고, 수첩을 펼쳐 마지막 장을 보여줬다.\r
* 칠 년치 일지의 마지막 장에는 별 등급이 아니라 날짜와 한 줄이 적혀 있었다.\r
나래 [기본] "오늘 옥상에 사람이 있었다."\r
나래 [부끄러움] 그날부터 일지가 바뀌었어. 별 말고 다른 걸 적게 됐어.\r
나래 [진지] 나 광 다섯 개 모으는 사람이잖아.\r
나래 [웃음] 근데 다섯 개를 다 모아도 하나가 비더라.\r
나래 [부끄러움] 나 너 좋아해.\r
나래 [기본] 이겨서 얻은 것도 아니고, 져서 아쉬운 것도 아니야.\r
나래 [기본] 백 번 흐린 밤을 같이 있어준 사람이라서 그래.\r
@choice\r
- 다섯 번째 별이 될게요 | +20 | A\r
- 흐린 날에도 올라올게요 | +20 | B\r
@label A\r
나 [기본] 그럼 제가 다섯 번째 별 할게요.\r
나래 [놀람] 그건 좀 오글거리는데.\r
나 먼저 말 꺼내신 건데요.\r
나래 [부끄러움] ...맞네.\r
@goto END\r
@label B\r
나 [기본] 맑은 날 말고 흐린 날에도 올라올게요.\r
나래 [놀람] 흐린 날은 볼 게 없는데.\r
나 일지 쓰시잖아요. 우산 들어드릴게요.\r
나래 [부끄러움] ...그거 제일 듣고 싶었던 말이야.\r
@label END\r
@bgm warm\r
나래 [웃음] 그럼 표시판 없앨게. 이제 필요 없어.\r
* 그날 일지에는 "맑음"이라고 적혀 있었다. 사실 그날은 흐렸다.\r
@affection 20\r
@point 300\r
@end\r
`,Vg=`# 세연 (연극) - 가을 / 8번 하숙생\r
\r
=== seyeon_01 | 복도에서 대사 외우는 사람\r
@bg hallway night\r
@bgm autumn\r
@outfit 0\r
* 복도에서 누군가 혼자 큰 소리로 말하고 있었다.\r
세연 [진지] "나는 당신을 기다린 적이 없어요. 단 한 번도."\r
* 나를 보더니 갑자기 표정이 바뀌었다.\r
세연 [웃음] 아! 관객이다!\r
나 [놀람] 저 지나가는 길인데요.\r
세연 [웃음] 지나가는 사람도 관객이야. 방금 어땠어?\r
나 무서웠어요.\r
세연 [놀람] 무서웠어? 슬퍼야 하는 장면인데.\r
세연 [삐짐] 아 망했다. 다시 해야겠네.\r
나 [기본] 슬픈 사람이 저렇게 또박또박 말하나요?\r
세연 [놀람] ...\r
세연 [웃음] 야. 너 뭐야. 앉아봐. 한 판 하면서 얘기 좀 하자.\r
@affection 10\r
@end\r
\r
=== seyeon_02 | 소음 민원\r
@bg hallway evening\r
@bgm autumn\r
* 예린이 또 나를 붙잡았다.\r
예린 [진지] 305호. 밤 열한 시에 비명 소리가 나.\r
나 그거 연기 연습이에요.\r
예린 [기본] 나도 알아. 근데 알아도 심장이 떨어져.\r
* 세연에게 말하자 세연은 정색했다.\r
세연 [진지] 연기는 소리를 죽이면 안 돼. 그건 연기가 아니야.\r
나 그럼 시간을 옮기시죠. 열한 시 말고 여덟 시로.\r
세연 [삐짐] 그때는 감정이 안 올라와.\r
나 감정이 안 올라오면 그건 연습이 부족한 거 아니에요?\r
세연 [놀람] ...\r
세연 [웃음] 야. 너 지금 우리 교수님이랑 똑같은 말 했어.\r
세연 [기본] 알았어. 여덟 시로 할게. 대신 조건.\r
나 뭔데요.\r
세연 [웃음] 여덟 시엔 네가 관객이야.\r
@affection 10\r
@end\r
\r
=== seyeon_03 | 세연의 연기론\r
@bg maru night\r
@bgm autumn\r
* 세연이 고를 외쳤다. 세 번 연속으로.\r
나 [기본] 그거 진짜 좋은 패예요?\r
세연 [웃음] 글쎄. 어떻게 보여?\r
나 안 좋아 보여요.\r
세연 [놀람] 왜?\r
나 좋을 때는 말을 안 하시더라고요.\r
세연 [놀람] ...\r
* 세연은 패를 내려놓고 웃음을 터뜨렸다.\r
세연 [웃음] 야! 그거 어떻게 알았어?\r
나 세 판째 보고 있으면 알죠.\r
세연 [기본] 연기의 기본이 뭔지 알아? 관객이 믿게 만드는 거야.\r
세연 [삐짐] 근데 너한테는 안 통하네.\r
세연 [부끄러움] ...그거 좀 기분 이상하다. 나쁘진 않은데.\r
@affection 10\r
@end\r
\r
=== seyeon_04 | 대사 상대역\r
@bg maru evening\r
@bgm warm\r
@outfit 1\r
세연 [기본] 부탁 하나만. 상대역 좀 해줘.\r
나 [놀람] 저 연기 못 해요.\r
세연 [웃음] 못 해도 돼. 읽기만 해.\r
* 대본을 받아드니 두 사람이 마주 앉아 있는 장면이었다.\r
@choice\r
- 진지하게 읽어주기 | +9 | A\r
- 어색해하며 읽기 | +7 | B\r
@label A\r
* 나는 최대한 진지하게 읽었다.\r
세연 [놀람] 야. 너 왜 이렇게 잘해.\r
나 그냥 읽은 건데요.\r
세연 [기본] 그게 제일 어려운 거야. 대부분은 연기하려고 하다 망쳐.\r
세연 [부끄러움] 너는 그냥 말하네.\r
@goto END\r
@label B\r
나 [기본] "나는... 당신을 기다렸습니다."\r
세연 [웃음] 야, 너무 어색해!\r
나 그러니까 못 한다고 했잖아요.\r
세연 [웃음] 아니야. 어색한 게 더 진짜 같아.\r
* 세연은 웃다가 조용해졌다.\r
세연 [기본] 진짜 이러거든, 사람이. 고백할 때.\r
@label END\r
세연 [기본] 있잖아. 나 상대역 많이 해봤는데.\r
세연 [부끄러움] 눈 안 피하는 사람은 네가 처음이야.\r
@affection 10\r
@end\r
\r
=== seyeon_05 | 가을 정기공연 티켓\r
@bg campus evening\r
@bgm autumn\r
@outfit 1\r
* 세연이 티켓 한 장을 내밀었다.\r
세연 [기본] 다음 주 정기공연. 나 주연이야.\r
나 [놀람] 축하해요.\r
세연 [웃음] 축하는 공연 보고 해. 망할 수도 있으니까.\r
* 세연은 티켓을 한 장만 줬다.\r
@choice\r
- 왜 한 장이냐고 묻기 | +9 | A\r
- 그냥 받기 | +6 | B\r
@label A\r
나 [기본] 왜 한 장이에요? 하숙생들 다 부르시지.\r
세연 [기본] ...다 부르면 네가 안 보일 것 같아서.\r
나 [놀람] 네?\r
세연 [부끄러움] 무대에서 객석 보면 다 까맣거든. 근데 한 명만 알고 있으면 찾게 돼.\r
세연 [기본] 그 한 명이 되어줘.\r
@goto END\r
@label B\r
나 [기본] 감사합니다. 꼭 갈게요.\r
세연 [기본] 앞에서 세 번째 줄, 가운데.\r
나 자리까지 정해주세요?\r
세연 [부끄러움] 거기가 무대에서 제일 잘 보이는 자리야.\r
@label END\r
@bgm warm\r
* 공연 당일, 세연은 커튼콜에서 정확히 세 번째 줄을 보고 인사했다.\r
@affection 10\r
@end\r
\r
=== seyeon_06 | 무대 뒤 도시락\r
@bg campus night\r
@bgm warm\r
@outfit 1\r
* 공연 전날 리허설이 새벽까지 이어진다고 했다.\r
@choice\r
- 도시락 싸서 가기 | +9 | A\r
- 연락만 해보기 | +6 | B\r
@label A\r
* 하영에게 부탁해 도시락을 싸서 연습실로 갔다.\r
세연 [놀람] 야! 여기 어떻게 왔어?\r
나 밥 안 드셨을 것 같아서요.\r
세연 [부끄러움] ...나 사실 이틀 굶었어.\r
나 [놀람] 왜요?\r
세연 [기본] 무대 의상이 안 맞아서.\r
나 그럼 더 먹어야죠. 쓰러지면 공연을 못 하잖아요.\r
세연 [웃음] ...논리가 이상한데 맞는 말이네.\r
@goto END\r
@label B\r
* 연락을 하자 한참 뒤에 답이 왔다. "괜찮아."\r
* 그런데 새벽 두 시에 다시 연락이 왔다. "안 괜찮아."\r
세연 [패배] 미안. 아까는 괜찮은 척했어.\r
나 지금 갈게요.\r
세연 [놀람] 지금?\r
나 안 괜찮다면서요.\r
@label END\r
@bgm warm\r
세연 [기본] 있잖아. 나 무대에서는 안 무서운데.\r
세연 [부끄러움] 무대 내려오면 갑자기 무서워져. 아무도 안 보고 있으니까.\r
나 [기본] 지금은 제가 보고 있는데요.\r
세연 [부끄러움] ...그러네.\r
@affection 10\r
@end\r
\r
=== seyeon_07 | 오디션에서 떨어진 날\r
@bg maru night\r
@bgm sad\r
@outfit 0\r
* 세연이 마루에 앉아 아무 표정도 짓지 않고 있었다. 처음 보는 얼굴이었다.\r
세연 [기본] 떨어졌어.\r
나 [기본] ...\r
세연 [기본] 심사평이 뭐였는지 알아? "연기를 너무 잘한다."\r
나 그게 왜 떨어지는 이유예요?\r
세연 [패배] 진짜 같지 않대. 계산한 게 보인대.\r
* 세연은 웃으려다 말았다.\r
세연 [기본] 나 사실 그 말 여러 번 들었어.\r
세연 [패배] 근데 어떻게 하는지 모르겠어. 계산 안 하고 연기하는 법을.\r
@bgm none\r
* 한참 침묵이 흘렀다.\r
@bgm warm\r
나 [기본] 지금 표정이요.\r
세연 [놀람] 어?\r
나 지금 아무 연기도 안 하시잖아요. 그게 제일 좋아요.\r
세연 [놀람] ...이건 그냥 힘 빠진 건데.\r
나 그게 진짜니까요.\r
세연 [부끄러움] ...야. 그런 말 하지 마. 울 것 같잖아.\r
@affection 10\r
@end\r
\r
=== seyeon_08 | 연기를 시작한 이유\r
@bg rooftop night\r
@bgm sad\r
@outfit 0\r
세연 [기본] 나 어릴 때 되게 조용한 애였어.\r
나 [놀람] 상상이 안 되는데요.\r
세연 [웃음] 진짜야. 초등학교 때 별명이 '벙어리'였어.\r
세연 [기본] 부모님이 매일 싸웠거든. 집에서 말을 하면 안 되는 분위기였어.\r
* 세연은 무릎을 끌어안았다.\r
세연 [기본] 그러다 학예회에서 대사 세 줄 있는 역할을 맡았어.\r
세연 [기본] 그때 처음으로 큰 소리로 말해봤어. 근데 아무도 뭐라고 안 하더라.\r
세연 [웃음] 그게 시작이야. 대사는 해도 되는 말이잖아.\r
@bgm warm\r
나 [기본] 지금은 대사 아닌 말도 하시잖아요.\r
세연 [놀람] ...그런가?\r
나 방금 그 얘기, 대본에 없었잖아요.\r
세연 [부끄러움] ...맞네.\r
세연 [기본] 너한테만 그래. 이상하게.\r
@affection 10\r
@end\r
\r
=== seyeon_09 | 상대역과의 소문\r
@bg hallway night\r
@bgm tense\r
@outfit 0\r
* 하숙집에 소문이 돌았다. 세연이 극단 상대역과 사귄다는 이야기였다.\r
* 세연은 부정하지 않았다.\r
@choice\r
- 직접 물어보기 | +10 | A\r
- 소문은 소문이라며 넘기기 | +5 | B\r
@label A\r
나 [기본] 사실이에요?\r
세연 [기본] 뭐가.\r
나 소문이요.\r
세연 [웃음] 아니야.\r
나 그럼 왜 아니라고 안 하셨어요?\r
세연 [기본] ...누가 물어봐주길 기다렸어.\r
나 [놀람] 네?\r
세연 [부끄러움] 소문 나면 신경 쓰는 사람이 있나 보려고. 유치하지.\r
나 유치하네요.\r
세연 [삐짐] 야!\r
나 근데 신경 쓰였어요.\r
세연 [부끄러움] ...그럼 됐어.\r
@goto END\r
@label B\r
나 [기본] 소문은 소문이죠.\r
세연 [삐짐] ...그게 끝이야?\r
나 제가 물어볼 일은 아닌 것 같아서요.\r
세연 [삐짐] 그래. 아니지. 맞아. 아닌 일이지.\r
* 그날 세연은 연습을 하지 않았다.\r
* 다음 날 세연이 먼저 말했다.\r
세연 [기본] 아니야, 그거. 소문.\r
나 [기본] ...네.\r
세연 [삐짐] 안 물어봐서 내가 말했어. 알아둬.\r
@label END\r
@bgm warm\r
세연 [기본] 나 무대에서는 뭐든 말할 수 있는데.\r
세연 [부끄러움] 무대 밖에서는 한마디가 왜 이렇게 어렵지.\r
@affection 10\r
@end\r
\r
=== seyeon_10 | 대본에 없는 대사\r
@bg maru night\r
@bgm confess\r
@outfit 2\r
* 열 번째 판이 끝나고, 세연이 대본을 꺼냈다.\r
세연 [기본] 마지막 장면 읽어줄래? 상대역으로.\r
* 마지막 페이지를 펼치자 한 줄만 적혀 있었다. 나머지는 백지였다.\r
나 [놀람] 이거 대사가 없는데요.\r
세연 [부끄러움] 응. 여기부터는 내가 직접 써야 해.\r
@cg seyeon_ending\r
* 세연은 대본을 덮고, 처음으로 아무 표정도 만들지 않은 채 말했다.\r
세연 [기본] 나 연기 잘한다는 소리 듣고 자랐어. 그게 칭찬인 줄 알았어.\r
세연 [기본] 근데 오디션에서 떨어지고 알았어. 나는 진짜를 보여준 적이 없었구나.\r
세연 [진지] 지금부터 하는 말은 대본에 없어. 연습도 안 했어.\r
세연 [부끄러움] 그래서 되게 어색할 거야.\r
세연 [부끄러움] 나... 너 좋아해.\r
세연 [기본] 열 판 이겨서 얻는 상 같은 거 아니야.\r
세연 [웃음] 그냥 내 연기가 안 통하는 유일한 사람이라서.\r
세연 [부끄러움] 그 앞에서만 진짜가 되더라.\r
@choice\r
- 방금 게 제일 좋은 연기였어요 | +20 | A\r
- 어색해서 더 믿겨요 | +20 | B\r
@label A\r
나 [기본] 방금 게 제일 좋았어요. 지금까지 본 것 중에.\r
세연 [놀람] 그건 연기가 아니었는데.\r
나 그러니까요.\r
세연 [부끄러움] ...야. 그거 치사한 칭찬이야.\r
@goto END\r
@label B\r
나 [기본] 어색했어요. 그래서 믿겨요.\r
세연 [놀람] ...\r
나 아까 그러셨잖아요. 사람은 고백할 때 어색하다고.\r
세연 [부끄러움] 그걸 기억해?\r
나 그날 대본 읽었잖아요. 저도 상대역이었는데요.\r
@label END\r
@bgm warm\r
세연 [웃음] 그럼 다음 장부터는 같이 쓰자. 백지니까.\r
나 저 대사 못 쓰는데요.\r
세연 [웃음] 그냥 말하면 돼. 너는 원래 그러잖아.\r
@affection 20\r
@point 300\r
@end\r
`,Qg=`# 수아 (체대) - 여름 / 4번 하숙생\r
\r
=== sua_01 | 3층에서 내려온 사람\r
@bg maru night\r
@bgm summer\r
@outfit 0\r
* 마루에 앉자마자 쿵쿵거리는 발소리가 계단을 타고 내려왔다.\r
수아 [웃음] 야! 네가 그 주인집 아들이야?\r
나 [놀람] 네.\r
수아 [기본] 1층 애들 다 이겼다며. 3층은 왜 안 와?\r
나 올라가도 되는 거였어요?\r
수아 [웃음] 안 되는 게 어딨어. 앉아.\r
* 수아는 대답을 듣기도 전에 방석을 깔았다.\r
수아 [진지] 미리 말해두는데 나는 안 봐줘.\r
나 알겠습니다.\r
수아 [웃음] 그리고 지면 안 분해하는 사람 싫어. 분해해.\r
나 그건 좀 어려운 부탁인데요.\r
수아 [웃음] 해봐. 그래야 다음에 또 재밌지.\r
@affection 10\r
@end\r
\r
=== sua_02 | 새벽 여섯 시의 발소리\r
@bg hallway morning\r
@bgm summer\r
* 새벽 여섯 시. 계단에서 또 발소리가 났다.\r
나 [기본] 매일 이 시간에 나가세요?\r
수아 [웃음] 어. 십 킬로.\r
나 [놀람] 매일이요?\r
수아 [기본] 매일. 비 오면 팔 킬로.\r
나 그건 그냥 매일인데요.\r
수아 [웃음] 그렇게 되나?\r
* 수아는 신발끈을 묶으며 덧붙였다.\r
수아 [기본] 참, 하숙집 규칙 중에 새벽 소음 있잖아. 나 걸리는 거야?\r
나 6시면 괜찮아요. 5시부터가 문제죠.\r
수아 [부끄러움] ...그럼 어제 4시 반에 나간 건 못 본 걸로 해줘.\r
@affection 10\r
@end\r
\r
=== sua_03 | 수아의 승부욕\r
@bg maru night\r
@bgm summer\r
* 수아가 세 판째 고를 외치고 세 판째 졌다.\r
나 [기본] 왜 매번 고를 하세요?\r
수아 [기본] 멈추면 지는 거니까.\r
나 멈춰서 이기는 경우도 있는데요.\r
수아 [진지] 그건 이긴 게 아니야. 안 진 거지.\r
나 그게 다른 건가요?\r
수아 [기본] 달라. 완전히 달라.\r
* 수아는 패를 모으며 웃었다.\r
수아 [웃음] 나 중학교 때 코치가 그랬어. "수아는 지는 법을 배워야 한다"고.\r
나 배우셨어요?\r
수아 [웃음] 아직. 근데 요즘 좀 배우는 중이야. 너 때문에.\r
@affection 10\r
@end\r
\r
=== sua_04 | 같이 뛸래?\r
@bg street morning\r
@bgm summer\r
@outfit 1\r
* 새벽 여섯 시. 수아가 현관에서 나를 기다리고 있었다.\r
수아 [웃음] 어제 지면 뛰기로 했잖아.\r
나 그런 약속 한 적 없는데요.\r
수아 [웃음] 지금 했어.\r
@choice\r
- 따라 나가기 | +9 | A\r
- 삼 킬로만 협상하기 | +7 | B\r
@label A\r
나 [기본] ...가죠.\r
수아 [놀람] 어? 순순히?\r
나 어차피 안 된다고 해도 끌고 가실 거잖아요.\r
수아 [웃음] 파악 빠르네.\r
@goto END\r
@label B\r
나 [기본] 삼 킬로만요. 십 킬로는 무리예요.\r
수아 [기본] 오 킬로.\r
나 사 킬로.\r
수아 [웃음] 좋아. 협상 잘하네. 회계 언니 같아.\r
@label END\r
* 뛰다가 결국 나는 뒤처졌다.\r
수아 [웃음] 야! 빨리 와!\r
* 그런데 수아는 멀어지다가 되돌아와서 내 옆에 속도를 맞췄다.\r
나 [놀람] 왜 돌아와요.\r
수아 [기본] 혼자 뛰면 십 킬로인데, 같이 뛰면 사 킬로도 괜찮더라.\r
@affection 10\r
@end\r
\r
=== sua_05 | 여름 옥상, 수박\r
@bg rooftop night\r
@bgm summer\r
@outfit 1\r
* 열대야. 옥상에 하숙생들이 반쯤 모여 수박을 잘랐다.\r
수아 [웃음] 씨 뱉기 대회 하자. 멀리 뱉는 사람이 이기는 걸로.\r
예린 [기본] 나는 빠질게. 품위라는 게 있으니까.\r
수아 [웃음] 품위 있는 사람은 다 져.\r
@choice\r
- 참가하기 | +9 | A\r
- 심판 보기 | +6 | B\r
@label A\r
나 [기본] 하죠.\r
* 결과는 수아의 압승이었다.\r
수아 [승리] 봤지? 이게 체대야.\r
나 이게 체대인 건 좀 슬픈데요.\r
수아 [웃음] 야!\r
@goto END\r
@label B\r
나 [기본] 저는 심판 볼게요. 공정하게.\r
수아 [삐짐] 재미없게.\r
* 그런데 심판을 보다 보니 수아가 이겼을 때마다 내 쪽을 돌아봤다.\r
수아 [웃음] 봤어? 방금 봤지?\r
@label END\r
@bgm warm\r
* 사람들이 하나둘 내려가고 옥상에 둘만 남았다.\r
수아 [기본] 나 사실 이런 거 좋아해.\r
나 수박이요?\r
수아 [기본] 아니. 사람 많은 데서 시끄럽게 노는 거.\r
수아 [부끄러움] 근데 끝나고 한 명 남는 게 더 좋아.\r
@affection 10\r
@end\r
\r
=== sua_06 | 삔 발목\r
@bg maru evening\r
@bgm sad\r
@outfit 1\r
* 수아가 마루에 발을 뻗고 앉아 있었다. 발목이 부어 있었다.\r
나 [놀람] 어쩌다 그랬어요?\r
수아 [기본] 별거 아니야. 이틀이면 나아.\r
나 병원은요?\r
수아 [삐짐] 안 가. 가면 쉬라고 할 거잖아.\r
@choice\r
- 억지로라도 데려가기 | +9 | A\r
- 얼음찜질 해주기 | +8 | B\r
@label A\r
나 [기본] 가요. 제가 업고 가든지 할게요.\r
수아 [놀람] 야, 진심이야?\r
나 진심이에요.\r
수아 [부끄러움] ...혼자 갈게. 걸을 수 있어.\r
* 결국 나란히 걸어서 갔고, 전치 2주가 나왔다.\r
@goto END\r
@label B\r
* 나는 아무 말 없이 얼음을 가져와 수건에 쌌다.\r
수아 [놀람] 뭐야.\r
나 병원 안 가신다니까 이거라도요.\r
수아 [부끄러움] ...고마워.\r
@label END\r
@bgm warm\r
수아 [기본] 나 다치면 항상 혼자 처리했어.\r
수아 [기본] 선수 때는 다쳤다고 하면 자리 뺏기니까.\r
수아 [부끄러움] 근데 여기선 안 그래도 되는구나.\r
@affection 10\r
@end\r
\r
=== sua_07 | 임용까지 남은 시간\r
@bg campus evening\r
@bgm sad\r
@outfit 0\r
* 캠퍼스 벤치에서 수아가 책을 덮었다.\r
수아 [기본] 나 내년에 임용 봐.\r
나 준비 잘 되세요?\r
수아 [패배] 몰라. 공부는 뛰는 거랑 다르더라.\r
수아 [기본] 뛰는 건 하면 늘어. 근데 이건 해도 그대로인 것 같아.\r
나 [기본] 그대로는 아닐 거예요.\r
수아 [삐짐] 위로하지 마. 그런 거 싫어.\r
나 위로 아니에요. 사실이에요.\r
수아 [놀람] 뭐가.\r
나 두 달 전엔 그 책 30페이지였는데 지금 200페이지예요.\r
수아 [놀람] ...그걸 어떻게 알아.\r
나 매일 봤으니까요.\r
@bgm warm\r
수아 [부끄러움] 야. 그런 걸 왜 세고 있어.\r
수아 [기본] ...근데 좀 힘 난다.\r
@affection 10\r
@end\r
\r
=== sua_08 | 그만둔 선수 생활\r
@bg rooftop night\r
@bgm sad\r
@outfit 0\r
수아 [기본] 나 고3 때까지 선수였어.\r
나 [기본] 알고 있었어요. 어쩐지 뛰는 게 다르더라고요.\r
수아 [기본] 무릎이 나갔어. 수술하고 반년 쉬고, 돌아가려고 했는데.\r
수아 [패배] 코치가 그러더라. "수아야, 이제 다른 길 봐라."\r
* 수아는 무릎을 한 번 쓸었다.\r
수아 [기본] 그날 처음 울었어. 지고 나서 운 적은 없었는데.\r
나 지금은요?\r
수아 [기본] 지금? 지금은 애들 가르치고 싶어.\r
수아 [웃음] 나 같은 애한테 "다른 길 봐라" 말고 다른 말 해주고 싶어서.\r
@bgm warm\r
나 [기본] 그래서 매일 뛰는 거예요?\r
수아 [부끄러움] ...들켰네.\r
수아 [기본] 그만둔 게 아니라는 걸 나한테 증명하는 거야. 매일 아침.\r
@affection 10\r
@end\r
\r
=== sua_09 | 말 안 한 이유\r
@bg maru night\r
@bgm tense\r
@outfit 0\r
* 수아가 며칠째 마루에 나오지 않았다.\r
* 알고 보니 임용 1차 결과가 나온 날이었다.\r
나 [기본] 왜 말 안 했어요.\r
수아 [삐짐] 말할 게 뭐 있어.\r
나 떨어졌어요?\r
수아 [기본] 붙었어.\r
나 [놀람] 붙었는데 왜 숨어 있어요?\r
@choice\r
- 왜 안 기뻐하는지 묻기 | +10 | A\r
- 축하부터 하기 | +7 | B\r
@label A\r
나 [기본] 붙었는데 왜 안 기뻐해요.\r
수아 [패배] ...2차 떨어지면 더 창피하잖아.\r
수아 [기본] 1차 붙었다고 떠들어놓고 최종에서 떨어지면.\r
나 그럼 떨어지고 나서 창피해해요. 오늘은 기뻐하고.\r
수아 [놀람] 그게 되나?\r
나 됩니다. 순서가 있는 거예요.\r
수아 [웃음] ...너 은근히 말 잘한다.\r
@goto END\r
@label B\r
나 [웃음] 축하해요. 진심으로.\r
수아 [부끄러움] ...아직 아니야.\r
나 오늘 건 오늘 축하하는 거예요.\r
수아 [부끄러움] ...고마워.\r
@label END\r
@bgm warm\r
수아 [기본] 야. 나 원래 자랑 되게 잘하는 사람인데.\r
수아 [부끄러움] 너한테는 왜 이렇게 말하기가 어렵지.\r
@affection 10\r
@end\r
\r
=== sua_10 | 마지막 고\r
@bg maru night\r
@bgm confess\r
@outfit 2\r
* 열 번째 판. 수아는 7점을 넘기고도 한참 패를 보고 있었다.\r
수아 [진지] 나 고 할게.\r
나 그럼 지실 텐데요. 제 패 좋아요.\r
수아 [웃음] 알아.\r
나 아는데 왜요.\r
수아 [기본] 여기서 스톱하면 이 판이 끝나잖아.\r
@cg sua_ending\r
* 마루 불빛 아래에서 수아가 처음으로 천천히 말했다.\r
수아 [기본] 나 멈추는 법을 못 배웠다고 했지.\r
수아 [부끄러움] 근데 요즘 알겠어. 멈추기 싫은 게 있으면 그런 거더라.\r
수아 [진지] 이 판이 끝나는 게 싫어. 열 판이 다 끝나는 게 싫어.\r
수아 [부끄러움] 너 좋아해.\r
수아 [기본] 승부에서 이겨서 얻는 거 말고. 그냥 매일 같이 앉다 보니까 그렇게 됐어.\r
수아 [웃음] 그러니까 나 고 할래. 열한 판째 하자.\r
@choice\r
- 그럼 저도 고 | +20 | A\r
- 스톱하고 새로 시작해요 | +20 | B\r
@label A\r
나 [기본] 그럼 저도 고 할게요.\r
수아 [놀람] 너 이기고 있잖아.\r
나 저도 끝내기 싫어서요.\r
수아 [부끄러움] ...야. 그건 반칙이지.\r
@goto END\r
@label B\r
나 [기본] 스톱할게요. 이 판은 끝내죠.\r
수아 [패배] ...그래.\r
나 대신 내일 새 판을 시작해요. 열한 판째 말고, 첫 판으로.\r
수아 [놀람] 첫 판?\r
나 처음부터 다시 세는 거예요. 이제 다른 관계니까.\r
수아 [부끄러움] ...너 진짜.\r
@label END\r
@bgm warm\r
수아 [웃음] 그럼 내일 여섯 시. 같이 뛰는 걸로 시작하자.\r
나 그건 좀 봐주세요.\r
수아 [웃음] 안 봐줘. 말했잖아.\r
@affection 20\r
@point 300\r
@end\r
`,Hg=`# 예린 (회계) - 가을 / 7번 하숙생\r
\r
=== yerin_01 | 가장 늦게 들어오는 사람\r
@bg yard night\r
@bgm autumn\r
@outfit 0\r
* 밤 열한 시. 대문 소리가 났다.\r
예린 [기본] 아직 안 주무셨네요.\r
나 [놀람] 저한테 존댓말 하세요?\r
예린 [놀람] 아. 죄송해요. 회사 습관이라.\r
나 편하게 하셔도 돼요.\r
예린 [기본] ...노력해볼게. 어려워.\r
* 예린은 구두를 벗고 마루에 앉더니 한숨을 쉬었다.\r
예린 [기본] 여기 앉으면 하루가 끝나는 느낌이야.\r
나 매일 이 시간이에요?\r
예린 [기본] 분기 마감엔 더 늦어.\r
나 그럼 오늘은요?\r
예린 [웃음] 오늘은 마감 아니야. 한 판 칠 시간 정도는 있어.\r
@affection 10\r
@end\r
\r
=== yerin_02 | 공과금 정산의 밤\r
@bg maru night\r
@bgm autumn\r
* 예린이 계산기를 두드리며 종이를 정리하고 있었다.\r
예린 [진지] 이번 달 전기세. 3층이 1층보다 두 배야.\r
나 그건 에어컨 때문이겠죠.\r
예린 [기본] 그럼 두 배 내야지.\r
나 그게 규칙이었어요?\r
예린 [기본] 규칙이 없었으니까 지금 만들자는 거야.\r
* 예린은 표를 내밀었다. 층별 사용량이 깔끔하게 정리돼 있었다.\r
나 [놀람] 이걸 다 직접 하셨어요?\r
예린 [웃음] 이게 내 직업인데.\r
예린 [기본] 그리고 이런 건 명확한 게 서로한테 편해. 억울한 사람이 안 생기니까.\r
나 그럼 이거 마루 규칙에 넣을게요.\r
예린 [부끄러움] ...그렇게 바로 받아들여주는 사람 처음이야.\r
@affection 10\r
@end\r
\r
=== yerin_03 | 예린의 원칙\r
@bg maru night\r
@bgm autumn\r
* 예린은 7점이 되자마자 스톱했다.\r
나 [놀람] 여기서요? 제 광이 하나도 없는데. 광박 노리면 두 배인데요.\r
예린 [기본] 알아.\r
나 아는데 왜 안 해요?\r
예린 [진지] 박은 안 써.\r
나 규칙인데요.\r
예린 [기본] 규칙이긴 한데, 그건 상대가 못 한 걸로 돈을 버는 거잖아.\r
예린 [기본] 나는 내가 한 걸로만 벌고 싶어.\r
나 그럼 손해 아니에요?\r
예린 [웃음] 손해지. 근데 매일 장부 보는 사람이라 그래.\r
예린 [기본] 숫자는 남거든. 어떻게 벌었는지도 같이 남아.\r
@affection 10\r
@end\r
\r
=== yerin_04 | 야근 마중\r
@bg station night\r
@bgm warm\r
@outfit 1\r
* 밤 열두 시. 예린에게서 연락이 왔다. 막차를 놓쳤다고.\r
@choice\r
- 역까지 데리러 가기 | +9 | A\r
- 택시비를 보내주기 | +6 | B\r
@label A\r
* 역 앞에 도착하니 예린이 코트 깃을 세우고 서 있었다.\r
예린 [놀람] 진짜 왔어?\r
나 연락하셨잖아요.\r
예린 [부끄러움] 그냥... 혼잣말처럼 보낸 건데.\r
나 혼잣말은 저한테 안 보내죠.\r
예린 [부끄러움] ...맞네.\r
@goto END\r
@label B\r
* 삼십 분 뒤 예린이 대문으로 들어왔다.\r
예린 [기본] 택시비 보내줘서 고마워. 계좌로 돌려줄게.\r
나 그러실 필요 없는데요.\r
예린 [진지] 아니야. 이런 건 정확해야 해.\r
* 그런데 예린은 마루에 앉고서도 한참 일어나지 않았다.\r
예린 [기본] ...근데 좀 아쉽네.\r
나 뭐가요?\r
예린 [부끄러움] 아니야. 아무것도.\r
@label END\r
@bgm warm\r
* 돌아오는 길, 예린이 작게 말했다.\r
예린 [기본] 나 이 집에 온 지 일 년인데.\r
예린 [부끄러움] 밤에 누가 기다려준 건 오늘이 처음이야.\r
@affection 10\r
@end\r
\r
=== yerin_05 | 가을 축제 초대권\r
@bg festival evening\r
@bgm autumn\r
@outfit 1\r
* 예린이 봉투 하나를 흔들었다.\r
예린 [기본] 회사에서 받은 건데, 대학 축제 초대권이야. 두 장.\r
나 회계법인이 대학 축제 초대권을 왜 줘요?\r
예린 [웃음] 협찬이래. 나는 못 가겠지만.\r
@choice\r
- 같이 가자고 하기 | +9 | A\r
- 다른 하숙생 주라고 하기 | +5 | B\r
@label A\r
나 [기본] 그럼 같이 가시죠.\r
예린 [놀람] 나는 다음 주에 마감이...\r
나 마감은 다음 주잖아요.\r
예린 [부끄러움] ...그러네.\r
@goto END\r
@label B\r
나 [기본] 은서나 수아 주시면 좋아할 것 같은데요.\r
예린 [기본] ...그럴까.\r
* 다음 날 예린은 초대권을 아무한테도 주지 않았다.\r
예린 [삐짐] 잃어버렸어.\r
나 [놀람] 봉투째로요?\r
예린 [부끄러움] ...응.\r
@label END\r
@bgm warm\r
* 그날 밤 축제 불빛이 하숙집 마당까지 들어왔다.\r
예린 [기본] 나 대학 때 축제 한 번도 안 갔어.\r
나 왜요?\r
예린 [기본] 그 시간에 자격증 공부했지.\r
예린 [부끄러움] 근데 요즘 그게 잘한 건가 싶어.\r
@affection 10\r
@end\r
\r
=== yerin_06 | 감기 걸린 회계사\r
@bg hallway night\r
@bgm sad\r
@outfit 1\r
* 304호에서 기침 소리가 났다.\r
나 [기본] 괜찮으세요?\r
예린 [기본] 괜찮아. 내일 출근해야 해서 약 먹고 자면 돼.\r
나 열이 있는 것 같은데요.\r
예린 [기본] 이 정도로 쉬면 마감이 밀려.\r
@choice\r
- 죽 끓여오기 | +8 | A\r
- 팀장한테 연락하라고 설득하기 | +9 | B\r
@label A\r
* 하영에게 부탁해서 죽을 끓여 가져갔다.\r
예린 [놀람] 이거 하영이가?\r
나 제가 부탁했어요.\r
예린 [부끄러움] ...두 사람이 신경 써준 거네.\r
@goto END\r
@label B\r
나 [기본] 팀장님한테 연락하세요. 하루 쉬겠다고.\r
예린 [놀람] 그게 되겠어? 1년차인데.\r
나 안 되면 제가 대신 전화할게요.\r
예린 [놀람] 야. 그건 진짜 큰일 나.\r
* 결국 예린이 직접 연락했고, 하루 휴가를 받았다.\r
예린 [부끄러움] ...말해보니까 되네.\r
@label END\r
@bgm warm\r
예린 [기본] 나 아플 때 누구한테 말해본 적이 없어.\r
예린 [기본] 회사에서는 약한 티 내면 안 되고, 집에서는 걱정하실까 봐.\r
예린 [부끄러움] 근데 이 집에서는 그냥 말하게 되네.\r
@affection 10\r
@end\r
\r
=== yerin_07 | 회사를 그만둘까\r
@bg maru night\r
@bgm sad\r
@outfit 0\r
예린 [기본] 나 요즘 그만둘까 생각해.\r
나 [놀람] 갑자기요?\r
예린 [기본] 갑자기는 아니야. 반년쯤 됐어.\r
나 왜요?\r
예린 [패배] 내가 만드는 숫자가 누구한테 도움이 되는지 모르겠어서.\r
예린 [기본] 그냥 큰 회사가 세금을 덜 내게 도와주는 것 같을 때가 있어.\r
* 예린은 손끝으로 마루를 문질렀다.\r
예린 [패배] 근데 그만두면 이 년 공부가 없어지잖아.\r
@bgm warm\r
나 [기본] 하숙집 공과금 표는요?\r
예린 [놀람] 어?\r
나 그거 만드시고 나서 3층 사람들 억울해하는 거 없어졌어요.\r
나 그것도 예린 씨가 만든 숫자인데요.\r
예린 [놀람] ...그건 그냥 취미였는데.\r
나 도움 된 숫자잖아요.\r
예린 [부끄러움] ...너 진짜 이상한 데서 사람을 붙잡는다.\r
@affection 10\r
@end\r
\r
=== yerin_08 | 숫자를 믿게 된 이유\r
@bg maru night\r
@bgm sad\r
@outfit 0\r
예린 [기본] 나 고등학교 때 아빠 가게가 망했어.\r
나 [기본] ...\r
예린 [기본] 사기였어. 동업자가 장부를 두 개 썼거든.\r
예린 [기본] 아빠는 숫자를 볼 줄 몰랐고, 그냥 믿었어.\r
예린 [패배] 그래서 다 잃었어. 집도.\r
* 예린은 담담하게 말했다.\r
예린 [기본] 그때 정했어. 나는 숫자를 볼 줄 아는 사람이 되겠다고.\r
나 그래서 회계사가 되셨구나.\r
예린 [기본] 응. 근데 웃긴 게 뭔지 알아?\r
예린 [패배] 숫자를 볼 줄 알게 되니까, 사람을 못 믿겠더라.\r
@bgm warm\r
나 [기본] 그럼 이 집 사람들은요?\r
예린 [놀람] 어?\r
나 여기서는 장부 안 보시잖아요.\r
예린 [부끄러움] ...보긴 봐. 공과금.\r
나 그건 나눠 내려고 보는 거죠. 의심해서 보는 게 아니잖아요.\r
예린 [부끄러움] ...맞네.\r
@affection 10\r
@end\r
\r
=== yerin_09 | 회사 선배의 연락\r
@bg yard night\r
@bgm tense\r
@outfit 0\r
* 대문 앞에서 예린이 누군가와 통화하고 있었다.\r
예린 [기본] 네, 선배. ...아니요, 그건 좀. ...생각해볼게요.\r
* 전화를 끊은 예린의 표정이 굳어 있었다.\r
@choice\r
- 무슨 일인지 묻기 | +9 | A\r
- 모른 척하기 | +5 | B\r
@label A\r
나 [기본] 무슨 일 있으세요?\r
예린 [기본] 회사 선배가 이직 제안을 했어. 부산 지사로.\r
나 [놀람] 부산이요?\r
예린 [기본] 연봉은 더 좋아. 그리고 거기가 워라밸이 낫대.\r
나 가실 거예요?\r
예린 [기본] ...모르겠어. 여기 떠날 이유는 없는데.\r
나 이유가 있어야 남는 건가요?\r
예린 [놀람] ...\r
나 남을 이유가 있으면 되는 거 아니에요?\r
예린 [부끄러움] ...그 말 좀 치사하다.\r
@goto END\r
@label B\r
* 나는 아무것도 묻지 않았다.\r
* 예린은 마루에 앉아 한참 나를 보다가 먼저 말했다.\r
예린 [기본] 안 물어봐?\r
나 말씀하시고 싶으면 하실 거라고 생각해서요.\r
예린 [삐짐] ...그런 배려는 가끔 얄미워.\r
예린 [기본] 이직 제안 받았어. 부산.\r
나 [놀람] 아.\r
예린 [기본] 이제 물어봐도 돼.\r
@label END\r
@bgm warm\r
예린 [기본] 회계사가 제일 못 하는 계산이 뭔지 알아?\r
나 뭔데요.\r
예린 [부끄러움] 값을 못 매기는 항목이야. 여기 마루 같은 거.\r
@affection 10\r
@end\r
\r
=== yerin_10 | 계산 밖의 항목\r
@bg maru night\r
@bgm confess\r
@outfit 2\r
* 열 번째 판. 예린은 광박이 성립하는 자리에서 또 스톱하지 않았다.\r
나 [놀람] 이번엔 왜 고예요? 박도 안 쓰시는 분이.\r
예린 [기본] 박은 여전히 안 써.\r
예린 [부끄러움] 근데 오늘은 판이 안 끝났으면 해서.\r
@cg yerin_ending\r
* 예린은 가방에서 종이 한 장을 꺼냈다. 이직 제안서였다.\r
예린 [기본] 이거 오늘 거절했어.\r
나 [놀람] 왜요?\r
예린 [기본] 계산을 해봤거든. 연봉, 집값, 통근 시간, 커리어.\r
예린 [기본] 다 부산이 나았어. 전부 다.\r
예린 [진지] 그런데 계산에 안 들어가는 항목이 하나 있었어.\r
예린 [부끄러움] 밤 열한 시에 대문을 열면 마루에 불이 켜져 있는 거.\r
예린 [부끄러움] 나 너 좋아해.\r
예린 [기본] 승부에서 이겨서 얻은 것도 아니고, 손익을 따진 결과도 아니야.\r
예린 [웃음] 계산이 안 되는 항목이라서, 그냥 인정하기로 했어.\r
@choice\r
- 남을 이유가 되어드릴게요 | +20 | A\r
- 그 항목, 저도 계산 안 돼요 | +20 | B\r
@label A\r
나 [기본] 그럼 제가 남을 이유 할게요.\r
예린 [놀람] 그거 부담스러운 말인데.\r
나 부담 되시면 취소할게요.\r
예린 [부끄러움] ...취소하지 마.\r
@goto END\r
@label B\r
나 [기본] 그 항목, 저도 계산이 안 됐어요.\r
예린 [놀람] 언제부터.\r
나 공과금 표 만드셨을 때부터요.\r
예린 [놀람] 그건 엑셀이었는데.\r
나 억울한 사람 안 생기게 하려고 밤새 만드셨잖아요.\r
예린 [부끄러움] ...그런 걸로 사람을 좋아하는 경우가 있나.\r
@label END\r
@bgm warm\r
예린 [웃음] 그럼 오늘부터 장부에 항목 하나 추가할게.\r
나 뭐라고 쓰실 건데요.\r
예린 [부끄러움] "측정 불가".\r
@affection 20\r
@point 300\r
@end\r
`,Zg=`# 윤 (장기하숙생) - 겨울 / 10번 하숙생 / 최종 히로인\r
\r
=== yoon_01 | 별채의 불빛\r
@bg yard night\r
@bgm winter\r
@outfit 0\r
* 첫눈이 온 날, 별채 문이 열려 있었다.\r
* 안쪽에서 화투 섞는 소리가 났다.\r
윤 [기본] 들어와. 춥다.\r
나 [놀람] 제가 올 걸 아셨어요?\r
윤 [기본] 아홉 명을 다 거쳤으면 올 차례지.\r
* 방 안에는 낡은 화투갑 하나와 방석 두 장뿐이었다.\r
나 여기 사신 지 얼마나 됐어요?\r
윤 [기본] 삼십 년.\r
나 [놀람] 삼십 년이요? 그럼 나이가...\r
윤 [웃음] 그건 묻는 거 아니야.\r
* 윤은 패를 갈랐다. 손놀림이 지금까지 본 누구와도 달랐다.\r
윤 [기본] 앉아. 이 집에서 마지막으로 칠 사람이 너야.\r
나 마지막이요?\r
윤 [기본] 그건 나중에.\r
@affection 10\r
@end\r
\r
=== yoon_02 | 삼십 년의 규칙\r
@bg annex night\r
@bgm winter\r
윤 [기본] 이 집 규칙이 왜 생겼는지 알아?\r
나 할머니 공책에는 「밤에는 마루에서 한 판」이라고만 적혀 있었어요.\r
윤 [기본] 전통이 아니야. 필요해서 생긴 거야.\r
나 무슨 필요요?\r
윤 [기본] 옛날에 이 집에 하숙생이 열둘이었어. 다들 처음 서울 온 애들이었고.\r
윤 [기본] 말도 못 붙이고 각자 방에만 있었지.\r
* 윤은 화투갑을 쓸었다.\r
윤 [기본] 그래서 네 할머니가 마루에 방석을 깔았어. "밤에 여기서 한 판씩 쳐라"고.\r
나 그것 때문에요?\r
윤 [웃음] 판을 치려면 마주 앉아야 하잖아. 마주 앉으면 말을 하게 되고.\r
윤 [기본] 그게 규칙의 이유야. 승부가 목적이 아니었어.\r
@affection 10\r
@end\r
\r
=== yoon_03 | 윤이 기억하는 것\r
@bg annex night\r
@bgm winter\r
* 윤은 내가 낸 패를 보고도 한참 움직이지 않았다.\r
윤 [기본] 너 세 판 전에도 그 자리에서 망설였어.\r
나 [놀람] 세 판 전이요?\r
윤 [기본] 스물세 판 전에도.\r
나 [놀람] 그걸 다 기억해요?\r
윤 [기본] 이 마루에서 삼십 년 동안 판을 봤어. 사람마다 버릇이 있어.\r
윤 [기본] 은서는 좋은 패가 오면 어깨가 올라가. 하영이는 반대로 조용해지고.\r
나 저는요?\r
윤 [웃음] 너는 이길 것 같으면 상대 얼굴을 봐.\r
나 [놀람] ...그런가요?\r
윤 [기본] 그래. 그래서 다들 너한테 진 거야. 얼굴을 보면 봐주게 되거든.\r
@affection 10\r
@end\r
\r
=== yoon_04 | 첫눈 오는 마루\r
@bg maru night\r
@bgm winter\r
@outfit 1\r
* 눈이 마당에 쌓이고 마루 유리문에 성에가 꼈다.\r
윤 [기본] 이 마루가 제일 추운 날이야.\r
나 별채가 더 따뜻하지 않아요?\r
윤 [기본] 따뜻한데, 여기가 좋아.\r
@choice\r
- 왜 마루가 좋은지 묻기 | +9 | A\r
- 전기장판을 가져오기 | +8 | B\r
@label A\r
나 [기본] 왜 마루가 좋으세요?\r
윤 [기본] 소리가 나니까.\r
나 소리요?\r
윤 [기본] 부엌에서 하영이 도마 소리, 3층에서 수아 발소리, 옥상에서 나래 망원경 소리.\r
윤 [기본] 별채는 조용해. 너무 조용해.\r
나 [기본] ...\r
윤 [웃음] 삼십 년 동안 그 소리들을 들었어. 사람은 다 바뀌었는데 소리는 비슷해.\r
@goto END\r
@label B\r
* 나는 방에서 전기장판을 가져와 마루에 깔았다.\r
윤 [놀람] 이런 건 안 해도 되는데.\r
나 추우시다면서요.\r
윤 [기본] ...이 집에서 나한테 뭘 가져다준 사람은 네 할머니 말고 없었어.\r
나 [놀람] 삼십 년 동안요?\r
윤 [기본] 다들 내가 여기 있는 줄도 몰랐으니까.\r
@label END\r
@bgm sad\r
윤 [기본] 나는 여기 오래 있었는데, 오래 있었다는 걸 아는 사람이 없어.\r
윤 [기본] 그게 삼십 년의 뜻이야.\r
@affection 10\r
@end\r
\r
=== yoon_05 | 오래된 화투 한 벌\r
@bg annex night\r
@bgm winter\r
@outfit 1\r
* 윤이 화투갑을 열어 보였다. 모서리가 다 닳아 있었다.\r
윤 [기본] 이거 삼십 년 된 거야.\r
나 [놀람] 아직 쓸 수 있어요?\r
윤 [기본] 쓸 수 있어. 근데 광 하나가 없어.\r
* 확인해보니 정말 한 장이 비어 있었다.\r
나 어디 갔어요?\r
윤 [기본] 누가 가져갔어. 아주 오래전에.\r
@choice\r
- 누가 가져갔는지 묻기 | +10 | A\r
- 새 화투를 사다 주겠다고 하기 | +6 | B\r
@label A\r
나 [기본] 누가요?\r
윤 [기본] 이 집에서 제일 잘 치던 사람.\r
나 할머니요?\r
윤 [웃음] 아니. 네 할머니는 두 번째로 잘 쳤어.\r
나 [놀람] 그럼 누구...\r
윤 [기본] 그건 나중에. 지금 말하면 재미없어.\r
@goto END\r
@label B\r
나 [기본] 새 걸로 하나 사다 드릴까요?\r
윤 [기본] 됐어.\r
나 광이 없으면 판이 안 되잖아요.\r
윤 [기본] 이 한 벌로 삼십 년 쳤어. 없는 채로.\r
윤 [기본] 없는 걸 채우려고 하면 다른 게 돼버려.\r
@label END\r
@bgm sad\r
윤 [기본] 나는 이 한 장을 기다리고 있어.\r
나 돌려받을 수 있어요?\r
윤 [기본] 돌려주러 오면.\r
@affection 10\r
@end\r
\r
=== yoon_06 | 할머니가 남긴 장부\r
@bg kitchen evening\r
@bgm tense\r
@outfit 1\r
* 부엌 찬장 위에서 할머니의 하숙 장부를 한 권 더 찾았다. 제일 오래된 것이었다.\r
* 첫 장에 열두 명의 이름이 있었다. 삼십 년 전의 하숙생들이다.\r
* 그중 한 줄만 연필로 지워져 있었다. 지웠다가 다시 쓴 흔적이었다.\r
도희 [놀람] 뭐 보고 있어?\r
나 [기본] 할머니 장부요. 삼십 년 전 거.\r
도희 [기본] ...그거 나도 본 적 있어.\r
@choice\r
- 무슨 사연이 있는지 묻기 | +10 | A\r
- 더 묻지 않기 | +6 | B\r
@label A\r
나 [기본] 선배, 이 지운 이름 누군지 아세요?\r
도희 [기본] 정확히는 몰라. 윤이 딱 한 번 말한 적이 있어.\r
도희 [기본] 삼십 년 전에 이 집에 화투를 기가 막히게 치던 하숙생이 하나 있었대.\r
도희 [기본] 그 사람이 어느 날 광 한 장을 가지고 나갔다더라. 돌아오겠다고 하고.\r
나 [놀람] 안 돌아왔어요?\r
도희 [진지] 안 돌아왔어.\r
나 그럼 윤은...\r
도희 [기본] 기다리는 거지. 삼십 년째.\r
@goto END\r
@label B\r
* 나는 장부를 덮었다.\r
도희 [기본] 안 물어보는구나.\r
나 윤이 직접 말할 때까지 기다리려고요.\r
도희 [웃음] ...너 그 애랑 비슷하네.\r
나 네?\r
도희 [기본] 아니다. 아무것도.\r
@label END\r
@bgm sad\r
도희 [기본] 하나만 말해줄게. 할머니가 나한테 해준 말이야.\r
도희 [진지] 윤이가 마지막이라고 하면, 그건 진짜 마지막이라는 뜻이야.\r
@affection 10\r
@end\r
\r
=== yoon_07 | 이 집을 떠나지 못한 이유\r
@bg annex night\r
@bgm sad\r
@outfit 0\r
윤 [기본] 공책 봤지.\r
나 [놀람] 어떻게 아셨어요?\r
윤 [웃음] 네가 오늘 내 얼굴을 안 봐.\r
* 윤은 패를 섞다 말고 손을 멈췄다.\r
윤 [기본] 삼십 년 전에 나는 여기 하숙생이었어. 스무 살이었지.\r
윤 [기본] 같은 방을 쓰던 사람이 있었어. 나보다 화투를 잘 쳤어.\r
윤 [기본] 어느 날 그 사람이 판에서 이기고 광 한 장을 가져갔어. "다시 와서 돌려주겠다"고.\r
나 왜 안 돌아왔어요?\r
윤 [패배] 몰라. 삼십 년 동안 모르는 채였어.\r
나 그래서 계속 기다린 거예요?\r
윤 [기본] 처음엔 그랬어.\r
윤 [기본] 그러다 언젠가부터 기다리는 게 습관이 됐어. 왜 기다리는지도 잊고.\r
@bgm none\r
윤 [패배] 나는 이 집에서 삼십 년을 앉아만 있었어.\r
@bgm warm\r
나 [기본] 앉아만 있었던 건 아니잖아요.\r
윤 [놀람] 뭐?\r
나 도희 선배가 그러던데요. 처음 이 집에 왔을 때 윤이 한 판 하자고 했다고.\r
나 "여기 앉으면 다 하숙생이야"라고 했다면서요.\r
윤 [놀람] ...그걸 기억해?\r
나 도희 선배는 그 한마디에 칠 년 있었대요.\r
윤 [부끄러움] ...나는 그냥 한 말이었는데.\r
@affection 10\r
@end\r
\r
=== yoon_08 | 삼십 년 전 그 판\r
@bg annex night\r
@bgm sad\r
@outfit 0\r
윤 [기본] 그날 판 얘기를 해줄게. 아무한테도 안 했어.\r
나 [기본] 네.\r
윤 [기본] 마지막 판이었어. 그 사람이 7점에서 고를 했어. 세 번.\r
윤 [기본] 이상했어. 그럴 패가 아니었거든.\r
나 왜 고를 했을까요?\r
윤 [기본] 나도 그게 궁금해서 삼십 년을 생각했어.\r
* 윤은 빈 자리를 손끝으로 짚었다.\r
윤 [기본] 답은 하나밖에 없더라.\r
윤 [기본] 판을 안 끝내고 싶었던 거야.\r
나 [놀람] ...\r
윤 [패배] 그날 그 사람은 다음 날 떠나기로 되어 있었어. 나만 몰랐고.\r
윤 [기본] 고를 세 번 한 건 밤을 늘리려고 그런 거였어.\r
윤 [패배] 나는 그것도 모르고 이기려고만 했어.\r
@bgm warm\r
윤 [기본] 그래서 광을 가져간 거야. 돌려주러 와야 하니까.\r
윤 [기본] 나한테 다시 만날 이유를 하나 남겨두고 간 거지.\r
나 [기본] 그럼 그 사람도 기다렸겠네요.\r
윤 [놀람] ...\r
@affection 10\r
@end\r
\r
=== yoon_09 | 마지막 하숙생\r
@bg maru night\r
@bgm tense\r
@outfit 0\r
* 마루에 하숙생들이 모여 있었다. 윤이 별채에서 나온 건 처음이라고 했다.\r
은서 [놀람] 어? 저 사람 누구야?\r
도희 [놀람] ...윤이다. 칠 년 만에 처음 봐.\r
윤 [기본] 이 집에 마지막으로 인사하러 왔어.\r
* 사람들이 웅성거렸다.\r
나 [놀람] 마지막이라니요?\r
윤 [기본] 나 이번 겨울에 나가.\r
@choice\r
- 왜 지금이냐고 묻기 | +10 | A\r
- 가지 말라고 하기 | +10 | B\r
@label A\r
나 [기본] 왜 지금이에요? 삼십 년을 기다렸는데.\r
윤 [기본] 기다리는 게 끝났으니까.\r
나 그 사람이 왔어요?\r
윤 [기본] 아니.\r
나 그럼 왜요.\r
윤 [기본] 네가 왔잖아.\r
나 [놀람] ...네?\r
윤 [기본] 이 마루에 백 판을 친 사람이 나온 게 삼십 년 만이야.\r
윤 [웃음] 이제 이 자리에 앉을 사람이 생겼으니까, 나는 가도 돼.\r
@goto END\r
@label B\r
나 [기본] 가지 마세요.\r
윤 [놀람] ...\r
나 아직 판이 안 끝났잖아요. 열 번째 판이 남았어요.\r
윤 [웃음] 그래. 판은 끝내고 가야지.\r
나 그게 아니라...\r
윤 [기본] 알아. 무슨 말인지.\r
윤 [부끄러움] 삼십 년 만에 처음이야. 가지 말라는 말 듣는 거.\r
@label END\r
@bgm sad\r
* 그날 밤 마루에는 방석이 열 개 깔렸다. 처음 있는 일이라고 했다.\r
@affection 10\r
@end\r
\r
=== yoon_10 | 하숙집의 겨울\r
@bg maru night\r
@bgm confess\r
@outfit 2\r
* 열 번째 판. 마지막 판이었다.\r
* 윤은 7점을 넘겼고, 나를 한참 바라봤다.\r
윤 [기본] 삼십 년 전에 그 사람이 여기서 고를 했어. 세 번.\r
윤 [웃음] 이제 그 마음을 알겠어.\r
윤 [진지] 고.\r
나 [놀람] 이기고 있는데요.\r
윤 [기본] 알아. 그래서 고야.\r
* 윤은 가방에서 낡은 화투갑을 꺼내 마루 위에 놓았다.\r
@cg yoon_ending\r
윤 [기본] 이거 네 할머니한테 드리려고 했는데, 너한테 줄게.\r
나 [놀람] 광이 없는 거잖아요.\r
윤 [웃음] 이제 있어.\r
* 갑을 열자 비어 있던 자리에 광 한 장이 꽂혀 있었다. 새것이 아니라, 똑같이 닳은 것이었다.\r
나 [놀람] 이건...\r
윤 [기본] 지난달에 우편으로 왔어. 주소도 이름도 없이.\r
윤 [기본] 삼십 년 만에 돌아온 거야.\r
나 그럼 그 사람은...\r
윤 [기본] 몰라. 만나진 못했어. 앞으로도 못 만날 것 같고.\r
윤 [기본] 근데 이상하게 괜찮아.\r
* 윤은 처음으로 웃었다. 연기가 아닌 웃음이었다.\r
윤 [부끄러움] 삼십 년 동안 나는 돌아오지 않는 걸 기다린다고 생각했어.\r
윤 [기본] 근데 아니었어. 나는 이 마루에 누가 앉는 걸 기다린 거였어.\r
윤 [진지] 그게 너야.\r
윤 [부끄러움] 나 너 좋아해.\r
윤 [기본] 이 판을 이겨서 얻는 것도 아니고, 네가 백 판을 쳐서 받는 상도 아니야.\r
윤 [기본] 겨울에 별채에서 마루 소리를 들으면서, 오늘은 저 사람이 나올까 생각했어.\r
윤 [웃음] 삼십 년 동안 한 번도 안 한 생각이야.\r
@choice\r
- 이 광, 제가 다시 맡을게요 | +20 | A\r
- 그럼 이 판은 제가 고 할게요 | +20 | B\r
- 안 가셨으면 좋겠어요 | +20 | C\r
@label A\r
나 [기본] 이 광, 제가 맡을게요.\r
윤 [놀람] 왜.\r
나 그럼 돌려주러 와야 하잖아요. 저한테.\r
윤 [놀람] ...\r
나 다시 만날 이유를 하나 남겨두는 거예요. 삼십 년 전처럼요.\r
윤 [부끄러움] ...너 그걸 그렇게 쓰는구나.\r
@goto END\r
@label B\r
나 [기본] 그럼 저도 고 할게요.\r
윤 [놀람] 너 지금 이기고 있잖아.\r
나 알아요. 그래서 고예요.\r
윤 [부끄러움] ...같은 말을 하네.\r
나 판을 안 끝내고 싶어서요. 삼십 년 전 그 사람처럼요.\r
@goto END\r
@label C\r
나 [기본] 안 가셨으면 좋겠어요.\r
윤 [기본] 나는 이제 여기 있을 이유가 없어.\r
나 이유가 없으면 못 있는 거예요?\r
윤 [놀람] ...\r
나 여기 앉으면 다 하숙생이라면서요. 윤이 한 말이잖아요.\r
윤 [부끄러움] ...내 말에 내가 걸리네.\r
@label END\r
@bgm warm\r
* 윤은 한참 마루를 바라보다가, 방석을 다시 깔았다.\r
윤 [웃음] 그럼 이번 겨울은 여기서 날게.\r
윤 [기본] 대신 조건이 있어.\r
나 뭔데요.\r
윤 [부끄러움] 매일 밤 한 판. 삼십 년치를 다 못 채워도, 시작은 해야지.\r
* 마당에 눈이 계속 내렸고, 마루의 불은 꺼지지 않았다.\r
@affection 20\r
@point 500\r
@end\r
`,cu=["normal","smile","sulk","surprise","shy","serious","win","lose"],qg={기본:"normal",웃음:"smile",삐짐:"sulk",놀람:"surprise",부끄러움:"shy",진지:"serious",승리:"win",패배:"lose"},Wg=["maru","kitchen","hallway","rooftop","yard","cvs","campus","street","room","annex","festival","station","beach"],Kg=["morning","evening","night"],Yg=["title","spring","summer","autumn","winter","warm","tense","sad","confess","none"],Xg=/^([^\s\[\]]+)\s*(?:\[([^\]]+)\])?\s+(.+)$/;function Jg(e,n="<script>"){const t=[],r=[];let i=null,l=n;const o=e.split(/\r?\n/),s=(f,d)=>{r.push({sceneId:l,line:f,message:d})},a=f=>{i&&(f.kind==="label"&&(i.labels[f.name]=i.steps.length),i.steps.push(f))};for(let f=0;f<o.length;f++){const d=f+1,h=o[f].trim();if(!h||h.startsWith("#"))continue;if(h.startsWith("===")){const m=h.replace(/^=+/,"").trim(),[g,y]=m.split("|").map(v=>v.trim());if(!g){s(d,"씬 id 가 없습니다");continue}l=g,i={id:g,title:y??g,tenantId:g.includes("_")?g.split("_")[0]:null,steps:[],labels:{}},t.push(i);continue}if(!i){s(d,"씬 헤더(=== id | 제목) 보다 먼저 나온 줄입니다");continue}if(h.startsWith("*")){const m=h.slice(1).trim();m?a({kind:"narrate",text:m}):s(d,"빈 나레이션");continue}if(h.startsWith("-")){const m=i.steps[i.steps.length-1];if(!m||m.kind!=="choice"){s(d,"@choice 없이 선택지가 나왔습니다");continue}const g=e1(h.slice(1).trim());g?m.options.push(g):s(d,`선택지 형식 오류: ${h}`);continue}if(h.startsWith("@")){const[m,...g]=h.slice(1).split(/\s+/),y=g.join(" ").trim();switch(m){case"bg":{const[v,k]=g;if(!Wg.includes(v)){s(d,`알 수 없는 배경: ${v}`);break}const _=k??"night";if(!Kg.includes(_)){s(d,`알 수 없는 시간대: ${k}`);break}a({kind:"bg",bg:v,time:_});break}case"bgm":{if(!Yg.includes(y)){s(d,`알 수 없는 BGM: ${y}`);break}a({kind:"bgm",bgm:y});break}case"sfx":y?a({kind:"sfx",sfx:y}):s(d,"sfx 이름이 없습니다");break;case"cg":y?a({kind:"cg",cg:y}):s(d,"cg 이름이 없습니다");break;case"outfit":{const v=Number(y);[0,1,2].includes(v)?a({kind:"outfit",index:v}):s(d,`의상 번호는 0~2: ${y}`);break}case"affection":{const v=Number(y);Number.isNaN(v)?s(d,`호감도 값 오류: ${y}`):a({kind:"affection",delta:v});break}case"point":{const v=Number(y);Number.isNaN(v)?s(d,`포인트 값 오류: ${y}`):a({kind:"point",delta:v});break}case"choice":a({kind:"choice",options:[]});break;case"label":y?a({kind:"label",name:y}):s(d,"라벨 이름이 없습니다");break;case"goto":y?a({kind:"goto",name:y}):s(d,"goto 대상이 없습니다");break;case"end":a({kind:"end"});break;default:s(d,`알 수 없는 지시어: @${m}`)}continue}const p=Xg.exec(h);if(!p){s(d,`해석할 수 없는 줄: ${h}`);continue}const[,$,S,j]=p;let T="normal";if(S){const m=qg[S.trim()];m?T=m:s(d,`알 수 없는 표정: ${S}`)}a({kind:"say",speaker:$,expression:T,text:j})}for(const f of t){for(const d of f.steps)if(d.kind==="goto"&&!(d.name in f.labels)&&r.push({sceneId:f.id,line:0,message:`없는 라벨로 goto: ${d.name}`}),d.kind==="choice"){d.options.length<2&&r.push({sceneId:f.id,line:0,message:"선택지가 2개 미만입니다"});for(const h of d.options)h.goto&&!(h.goto in f.labels)&&r.push({sceneId:f.id,line:0,message:`없는 라벨로 선택지 이동: ${h.goto}`})}f.steps.some(d=>d.kind==="end")||r.push({sceneId:f.id,line:0,message:"@end 가 없습니다"})}return{scenes:t,issues:r}}function e1(e){const n=e.split("|").map(l=>l.trim());if(n.length<2)return null;const t=n[0];if(!t)return null;const r=Number(n[1]);if(Number.isNaN(r))return null;const i=n[2]?n[2]:null;return{text:t,affection:r,goto:i}}function n1(e){return Ql({scene:e,pc:0,view:{bg:"maru",time:"night",bgm:"none",cg:null,outfit:0,speaker:null,expression:"normal",text:"",choices:null,affectionDelta:0,pointDelta:0,sfx:null,done:!1}})}function Ql(e){const n={...e.view,sfx:null};if(n.choices)return{...e,view:n};let t=e.pc;const{steps:r,labels:i}=e.scene;let l=0;for(;t<r.length;){if(l++>1e4){n.done=!0;break}const o=r[t];switch(t++,o.kind){case"bg":n.bg=o.bg,n.time=o.time;break;case"bgm":n.bgm=o.bgm;break;case"sfx":n.sfx=o.sfx;break;case"cg":n.cg=o.cg;break;case"outfit":n.outfit=o.index;break;case"affection":n.affectionDelta+=o.delta;break;case"point":n.pointDelta+=o.delta;break;case"label":break;case"goto":{const s=i[o.name];if(s===void 0)return n.done=!0,{...e,pc:r.length,view:n};t=s;break}case"choice":return n.choices=o.options,{...e,pc:t,view:n};case"say":return n.speaker=o.speaker,n.expression=o.expression,n.text=o.text,{...e,pc:t,view:n};case"narrate":return n.speaker=null,n.expression="normal",n.text=o.text,{...e,pc:t,view:n};case"end":return n.done=!0,n.choices=null,{...e,pc:r.length,view:n}}}return n.done=!0,{...e,pc:t,view:n}}function oh(e,n){const t=e.view.choices;if(!t||n<0||n>=t.length)return e;const r=t[n],i={...e.view,choices:null,affectionDelta:e.view.affectionDelta+r.affection};let l=e.pc;if(r.goto){const o=e.scene.labels[r.goto];o!==void 0&&(l=o)}return Ql({...e,pc:l,view:i})}function t1(e,n=0){let t=e,r=0;for(;!t.view.done&&r++<2e3;)if(t.view.choices){const i=Math.min(n,t.view.choices.length-1);t=oh(t,i)}else t=Ql(t);return t}const r1=Object.assign({"../data/scripts/common.txt":Ag,"../data/scripts/dohee.txt":Bg,"../data/scripts/eunseo.txt":Fg,"../data/scripts/hayeong.txt":Rg,"../data/scripts/jiwoo.txt":Og,"../data/scripts/minji.txt":Ug,"../data/scripts/narae.txt":Gg,"../data/scripts/seyeon.txt":Vg,"../data/scripts/sua.txt":Qg,"../data/scripts/yerin.txt":Hg,"../data/scripts/yoon.txt":Zg}),Es={},uu=[];for(const[e,n]of Object.entries(r1)){const{scenes:t,issues:r}=Jg(n,e);uu.push(...r);for(const i of t)Es[i.id]&&uu.push({sceneId:i.id,line:0,message:`중복된 씬 id (${e})`}),Es[i.id]=i}const i1=Es;function Lo(e){return i1[e]??null}const Aa="hasukgo.save.v1",sh=1,l1={rules:{},allRoutes:!0,bgmVolume:.5,sfxVolume:.7,textSpeed:25};function ui(){const e={};for(const n of En)e[n.id]={affection:0,clearedStage:0,wins:0,losses:0,dating:!1};return{version:sh,deviceId:"",savedAt:0,points:300,tenants:e,seenScenes:[],unlockedCG:[],recentGames:[],settings:{...l1},owned:[],equipped:{cards:"classic",theme:"maru"},stats:{totalGames:0,wins:0,losses:0,bestScore:0,pointsWon:0,pointsLost:0,biggestPot:0}}}function ah(){try{const e=localStorage.getItem(Aa);if(!e)return ui();const n=JSON.parse(e);return jl(n)}catch{return ui()}}function Ba(e){const n={...e,savedAt:Date.now()};try{localStorage.setItem(Aa,JSON.stringify(n))}catch{}s1(n)}const o1="hasukgo",at="meta",Fa="save";function Ra(){return new Promise(e=>{try{if(typeof indexedDB>"u")return e(null);const n=indexedDB.open(o1,1);n.onupgradeneeded=()=>{const t=n.result;t.objectStoreNames.contains(at)||t.createObjectStore(at)},n.onsuccess=()=>e(n.result),n.onerror=()=>e(null),setTimeout(()=>e(null),1500)}catch{e(null)}})}async function s1(e){const n=await Ra();if(n)try{n.transaction(at,"readwrite").objectStore(at).put(JSON.stringify(e),Fa)}catch{}}async function a1(){const e=await Ra();return e?new Promise(n=>{try{const r=e.transaction(at,"readonly").objectStore(at).get(Fa);r.onsuccess=()=>{try{n(r.result?JSON.parse(r.result):null)}catch{n(null)}},r.onerror=()=>n(null)}catch{n(null)}}):null}async function c1(){const e=ah(),n=await a1();if(!n)return{data:e,recovered:!1};if(e.stats.totalGames===0&&e.savedAt===0&&n.stats.totalGames>0){const r=jl(n);return Ba(r),{data:r,recovered:!0}}return(n.savedAt??0)>(e.savedAt??0)?{data:jl(n),recovered:!1}:{data:e,recovered:!1}}function fu(e){const n=jl(e);return Ba(n),n}function u1(){try{localStorage.removeItem(Aa)}catch{}return(async()=>{const e=await Ra();if(e)try{e.transaction(at,"readwrite").objectStore(at).delete(Fa)}catch{}})(),ui()}function jl(e){const n=ui(),t={...n,...e,version:sh,tenants:{...n.tenants,...e.tenants??{}},settings:{...n.settings,...e.settings??{}},stats:{...n.stats,...e.stats??{}},seenScenes:e.seenScenes??[],unlockedCG:e.unlockedCG??[],recentGames:e.recentGames??[],deviceId:e.deviceId??"",savedAt:e.savedAt??0,owned:e.owned??[],equipped:{...n.equipped,...e.equipped??{}}};for(const r of Object.keys(t.tenants))En.some(i=>i.id===r)||delete t.tenants[r];return t}function ch(e){const n={};for(const[t,r]of Object.entries(e.tenants))n[t]=r.clearedStage;return n}function f1(e){const n=e.slice(-20);if(n.length===0)return{goRate:.3,preference:{gwang:.25,yeol:.25,tti:.25,pi:.25},samples:0};const t=n.filter(l=>l.playerWentGo).length/n.length,r={gwang:0,yeol:0,tti:0,pi:0};for(const l of n)r[l.focus]++;const i=n.length;return{goRate:t,preference:{gwang:r.gwang/i,yeol:r.yeol/i,tti:r.tti/i,pi:r.pi/i},samples:n.length}}function d1(e,n,t){const r=e.tenants[n.tenantId];if(!r)return e;const i={...e,tenants:{...e.tenants},recentGames:[...e.recentGames,n].slice(-20),stats:{...e.stats}},l={...r};return i.stats.totalGames++,i.points=Math.max(0,i.points+n.payout),n.payout>0?(i.stats.pointsWon+=n.payout,i.stats.biggestPot=Math.max(i.stats.biggestPot,n.payout)):i.stats.pointsLost+=-n.payout,n.won?(i.stats.wins++,l.wins++,n.stage===l.clearedStage+1&&(l.clearedStage=n.stage,l.affection=Math.min(100,l.affection+10),i.points+=t.reward,n.stage===10&&(l.dating=!0))):(i.stats.losses++,l.losses++),i.stats.bestScore=Math.max(i.stats.bestScore,n.score),i.tenants[n.tenantId]=l,i}function h1(e,n,t){const r=e.seenScenes.includes(n)?e.seenScenes:[...e.seenScenes,n],i=t&&!e.unlockedCG.includes(t)?[...e.unlockedCG,t]:e.unlockedCG;return{...e,seenScenes:r,unlockedCG:i}}function p1(){return Math.min(...En.map(e=>e.rate*10))}function uh(e){return e.points<p1()}const fh=100,Oa=.7;function g1(e){if(e.draw)return 0;const n=e.settlementTotal*e.rate;return e.won?Math.round(n):-Math.round(n*Oa)}function m1(e){return uh(e)?{...e,points:e.points+fh}:e}function y1(e){return En.every(n=>(e.tenants[n.id]?.clearedStage??0)>=10)}const u=120,M=46,b=118,pt=168,ue=196,Me=360,Wn=21;function dh(e){return Math.max(0,Math.min(255,Math.round(e)))}function V(e,n){const t=/^#?([0-9a-f]{6})$/i.exec(e.trim());if(!t)return e;const r=parseInt(t[1],16),i=r>>16&255,l=r>>8&255,o=r&255,s=n>0?255:0,a=Math.abs(n);return`#${[i,l,o].map(d=>dh(d+(s-d)*a)).map(d=>d.toString(16).padStart(2,"0")).join("")}`}function $1(e,n,t){const r=h=>{const p=/^#?([0-9a-f]{6})$/i.exec(h.trim()),$=p?parseInt(p[1],16):0;return[$>>16&255,$>>8&255,$&255]},[i,l,o]=r(e),[s,a,f]=r(n);return`#${[i+(s-i)*t,l+(a-l)*t,o+(f-o)*t].map(h=>dh(h).toString(16).padStart(2,"0")).join("")}`}function v1(e){return $1(V(e.hair,.32),e.accent,.32)}let zo=0;function Ms(){return zo=(zo+1)%1e6,`p${zo.toString(36)}`}const w1={normal:{eye:"open",brow:0,browTilt:0,mouth:"flat",blush:.08,sweat:!1,tear:!1,tilt:0},smile:{eye:"arc",brow:-1,browTilt:-1,mouth:"smile",blush:.3,sweat:!1,tear:!1,tilt:-2},sulk:{eye:"half",brow:2,browTilt:3,mouth:"pout",blush:.2,sweat:!1,tear:!1,tilt:3},surprise:{eye:"wide",brow:-5,browTilt:-2,mouth:"open",blush:.05,sweat:!0,tear:!1,tilt:-1},shy:{eye:"closed",brow:-2,browTilt:2,mouth:"small",blush:.95,sweat:!1,tear:!1,tilt:4},serious:{eye:"open",brow:3,browTilt:-4,mouth:"flat",blush:0,sweat:!1,tear:!1,tilt:0},win:{eye:"arc",brow:-2,browTilt:-2,mouth:"wide",blush:.4,sweat:!1,tear:!1,tilt:-3},lose:{eye:"half",brow:4,browTilt:5,mouth:"wave",blush:.15,sweat:!0,tear:!0,tilt:2}},hh={normal:"기본",smile:"웃음",sulk:"삐짐",surprise:"놀람",shy:"부끄러움",serious:"진지",win:"승리",lose:"패배"},x1={round:{rx:41,cheek:21,jaw:20},oval:{rx:38,cheek:16,jaw:15},slim:{rx:35,cheek:12,jaw:11}},k1={petite:52,average:58,tall:64},S1={round:{h:12,tilt:0,iris:.95,lid:3.4},sharp:{h:10,tilt:-3.6,iris:.86,lid:3.8},droopy:{h:10.5,tilt:3.2,iris:.92,lid:3.2},narrow:{h:7.6,tilt:-1.6,iris:.82,lid:3.4},sleepy:{h:8.6,tilt:1.2,iris:.86,lid:4.2}},Dt="#2a2018";function du(e,n,t,r,i){const l=e,o=u+l*Wn,s=11.5,a=n.eye==="wide"?t.h*1.32:n.eye==="half"?t.h*.52:t.h,f=t.tilt;if(n.eye==="closed"||n.eye==="arc"){const T=n.eye==="arc"?-1:1,m=t.tilt<0?`<path d="M${o+l*(s+1)} ${b-3} l${l*5} -4" stroke="${Dt}" stroke-width="2.6" stroke-linecap="round"/>`:"";return`
      <path d="M${o-l*s} ${b+1} q${l*s} ${T*9} ${l*s*2} ${f*.5}"
            stroke="${Dt}" stroke-width="3.2" fill="none" stroke-linecap="round"/>
      ${m}`}const d=`${o-l*s} ${b+1.5}`,h=`${o+l*s} ${b+f}`,p=`M${d} Q${o} ${b-a} ${h} Q${o} ${b+a*.74} ${d} Z`,$=a*t.iris*.82,S=b-a*.06+(n.eye==="half"?-1:0),j=t.tilt<-2?`<path d="M${o+l*(s-1)} ${b+f-1} l${l*6} -5" stroke="${Dt}" stroke-width="2.8" stroke-linecap="round"/>`:"";return`
    <clipPath id="${i}"><path d="${p}"/></clipPath>
    <path d="${p}" fill="#fdfbf7"/>
    <g clip-path="url(#${i})">
      <circle cx="${o}" cy="${S}" r="${$.toFixed(1)}" fill="${V(r,-.45)}"/>
      <circle cx="${o}" cy="${(S+$*.14).toFixed(1)}" r="${($*.8).toFixed(1)}" fill="${r}"/>
      <circle cx="${o}" cy="${(S+$*.28).toFixed(1)}" r="${($*.42).toFixed(1)}" fill="#1a1410"/>
      <circle cx="${(o-l*$*.34).toFixed(1)}" cy="${(S-$*.42).toFixed(1)}" r="${($*.3).toFixed(1)}" fill="#ffffff"/>
      <circle cx="${(o+l*$*.36).toFixed(1)}" cy="${(S+$*.5).toFixed(1)}" r="${($*.16).toFixed(1)}" fill="#ffffff" opacity="0.75"/>
      <path d="${p}" fill="none" stroke="${Dt}" stroke-width="${t.lid*2}" opacity="0.0"/>
    </g>
    <path d="M${d} Q${o} ${b-a} ${h}" stroke="${Dt}" stroke-width="${t.lid}" fill="none" stroke-linecap="round"/>
    <path d="M${o} ${b+a*.66} Q${o+l*s*.7} ${b+a*.5} ${h}"
          stroke="${Dt}" stroke-width="1.5" fill="none" opacity="0.5" stroke-linecap="round"/>
    ${j}`}function b1(e,n,t){const r=S1[n];return du(-1,e,r,t,Ms())+du(1,e,r,t,Ms())}function C1(e,n){const t=b-19+e.brow,r=e.browTilt,i=17,l=o=>`<path d="M${u+o*Wn-o*i*.55} ${t+r} q${o*i*.5} -5 ${o*i} ${-r*.45}"
                  stroke="${n}" stroke-width="3.4" fill="none" stroke-linecap="round"/>`;return l(-1)+l(1)}function j1(e){const n=b+34,t="#a85a56",r="#8c3f41";switch(e.mouth){case"smile":return`<path d="M${u-9} ${n-1} q9 8 18 0" stroke="${t}" stroke-width="2.8" fill="none" stroke-linecap="round"/>`;case"wide":return`<path d="M${u-11} ${n-2} q11 14 22 0 q-11 4 -22 0z" fill="${r}"/>
              <path d="M${u-8} ${n-1} q8 4 16 0" fill="#ffffff" opacity="0.85"/>`;case"pout":return`<path d="M${u-7} ${n+3} q7 -7 14 0" stroke="${t}" stroke-width="2.8" fill="none" stroke-linecap="round"/>`;case"open":return`<ellipse cx="${u}" cy="${n+2}" rx="6" ry="8.5" fill="${r}"/>
              <ellipse cx="${u}" cy="${n+5}" rx="3.4" ry="4" fill="#c4726e" opacity="0.8"/>`;case"small":return`<path d="M${u-4} ${n} q4 4.5 8 0" stroke="${t}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;case"wave":return`<path d="M${u-10} ${n} q5 -5.5 10 0 q5 5.5 10 0" stroke="${t}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;default:return`<path d="M${u-6} ${n} q6 2.5 12 0" stroke="${t}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`}}function _1(e,n){const t=e.hair,r=V(t,-.3),i=52;switch(e.hairStyle){case"long":return`<path d="M${u-i} ${b-20}
                       C${u-i-12} ${b+90} ${u-n-6} 260 ${u-n-10} ${Me}
                       L${u+n+10} ${Me}
                       C${u+n+6} 260 ${u+i+12} ${b+90} ${u+i} ${b-20} Z" fill="${r}"/>`;case"wave":return`<path d="M${u-i} ${b-20}
                       C${u-i-16} ${b+80} ${u-n-10} 250 ${u-n-14} ${Me}
                       q14 -16 26 0 q14 -18 26 0 q12 -16 24 0 q14 -18 26 0 q12 -16 26 0
                       C${u+n+10} 250 ${u+i+16} ${b+80} ${u+i} ${b-20} Z" fill="${r}"/>`;case"braid":return`<path d="M${u-i} ${b-20} C${u-i-6} ${b+60} ${u-48} 220 ${u-44} 250
                       L${u+44} 250 C${u+48} 220 ${u+i+6} ${b+60} ${u+i} ${b-20} Z" fill="${r}"/>
              <g transform="translate(${u+38} ${b+34}) rotate(10)">
                ${[0,1,2,3,4].map(l=>{const o=l*25,s=14-l*1.2;return`<ellipse cx="0" cy="${o}" rx="${s.toFixed(1)}" ry="16" fill="${l%2?V(t,.1):V(t,-.14)}"/>
                            <path d="M${-s.toFixed(1)} ${o+12} q${s.toFixed(1)} -9 ${(s*2).toFixed(1)} 0"
                                  stroke="${V(t,-.45)}" stroke-width="1.8" fill="none" opacity="0.8"/>`}).join("")}
                <path d="M0 ${4*25+14} l-7 15 h14z" fill="${V(t,-.5)}"/>
                <rect x="-9" y="${4*25+10}" width="18" height="6" rx="3" fill="${e.accent}"/>
              </g>`;case"ponytail":return`<path d="M${u-46} ${b-20} C${u-50} ${b+40} ${u-44} 200 ${u-40} 214
                       L${u+40} 214 C${u+44} 200 ${u+50} ${b+40} ${u+46} ${b-20} Z" fill="${r}"/>
              <path d="M${u+40} ${b-26} C${u+86} ${b+4} ${u+82} ${b+90} ${u+56} ${b+150}
                       C${u+74} ${b+80} ${u+70} ${b+20} ${u+34} ${b+4} Z" fill="${t}"/>`;case"bun":return`<path d="M${u-44} ${b-20} C${u-46} ${b+20} ${u-42} 170 ${u-38} 182
                       L${u+38} 182 C${u+42} 170 ${u+46} ${b+20} ${u+44} ${b-20} Z" fill="${r}"/>
              <circle cx="${u}" cy="${M-22}" r="20" fill="${t}"/>
              <circle cx="${u}" cy="${M-22}" r="20" fill="none" stroke="${r}" stroke-width="2"/>
              <path d="M${u-14} ${M-28} q14 -10 28 0" stroke="${V(t,.3)}" stroke-width="3" fill="none" opacity="0.5"/>`;case"bob":return`<path d="M${u-48} ${b-20} C${u-54} ${b+30} ${u-48} ${b+52} ${u-40} ${b+62}
                       L${u+40} ${b+62} C${u+48} ${b+52} ${u+54} ${b+30} ${u+48} ${b-20} Z" fill="${r}"/>`;default:return`<path d="M${u-44} ${b-24} C${u-48} ${b+6} ${u-44} ${b+18} ${u-38} ${b+24}
                       L${u+38} ${b+24} C${u+44} ${b+18} ${u+48} ${b+6} ${u+44} ${b-24} Z" fill="${r}"/>`}}function N1(e,n){const t=e.hair,r=V(t,.32);return`
    <path d="M${u-n-3} ${b-4}
             C${u-n-5} ${M-8} ${u-n*.66} ${M-16} ${u} ${M-16}
             C${u+n*.66} ${M-16} ${u+n+5} ${M-8} ${u+n+3} ${b-4}
             C${u+n} ${b-30} ${u+n*.5} ${b-40} ${u} ${b-40}
             C${u-n*.5} ${b-40} ${u-n} ${b-30} ${u-n-3} ${b-4} Z" fill="${t}"/>
    <path d="M${u-n*.8} ${M+2} C${u-n*.4} ${M-14} ${u+n*.1} ${M-15} ${u+n*.42} ${M-5}
             C${u+n*.1} ${M-9} ${u-n*.4} ${M-7} ${u-n*.8} ${M+8} Z"
          fill="${r}" opacity="0.3"/>`}function E1(e,n,t){const r=n.hair,i=V(r,.26),l=b-26;switch(e){case"straight":return`<path d="M${u-t-2} ${b-4} C${u-t} ${M-8} ${u-20} ${M-16} ${u} ${M-16}
                       C${u+20} ${M-16} ${u+t} ${M-8} ${u+t+2} ${b-4}
                       C${u+t-4} ${l+2} ${u+20} ${l-4} ${u} ${l-2}
                       C${u-20} ${l-4} ${u-t+4} ${l+2} ${u-t-2} ${b-4} Z" fill="${r}"/>
              <path d="M${u-22} ${M-4} q20 -8 40 2 q-20 -2 -40 -2z" fill="${i}" opacity="0.5"/>`;case"split":return`<path d="M${u-t-2} ${b-2} C${u-t} ${M-8} ${u-18} ${M-16} ${u} ${M-16}
                       C${u+18} ${M-16} ${u+t} ${M-8} ${u+t+2} ${b-2}
                       C${u+t-6} ${l+6} ${u+22} ${l-2} ${u+7} ${M+6}
                       C${u+3} ${M+22} ${u-3} ${M+22} ${u-7} ${M+6}
                       C${u-22} ${l-2} ${u-t+6} ${l+6} ${u-t-2} ${b-2} Z" fill="${r}"/>
              <path d="M${u-26} ${M} q22 -9 44 0 q-22 -1 -44 0z" fill="${i}" opacity="0.45"/>`;case"side":return`<path d="M${u-t-2} ${b+2} C${u-t} ${M-8} ${u-18} ${M-16} ${u} ${M-16}
                       C${u+20} ${M-16} ${u+t} ${M-8} ${u+t+2} ${b+2}
                       C${u+t-8} ${l-6} ${u+10} ${l+8} ${u-14} ${l+4}
                       C${u-26} ${l+2} ${u-t+2} ${l+10} ${u-t-2} ${b+2} Z" fill="${r}"/>
              <path d="M${u-18} ${M-2} C${u+4} ${M-10} ${u+24} ${M+2} ${u+30} ${M+18}
                       C${u+20} ${M+4} ${u+2} ${M+2} ${u-18} ${M+6} Z" fill="${i}" opacity="0.5"/>`;case"curtain":return`<path d="M${u-t-2} ${b+4} C${u-t} ${M-8} ${u-18} ${M-16} ${u} ${M-16}
                       C${u+18} ${M-16} ${u+t} ${M-8} ${u+t+2} ${b+4}
                       C${u+t-2} ${l+14} ${u+26} ${l+4} ${u+14} ${M+2}
                       C${u+8} ${M-6} ${u-8} ${M-6} ${u-14} ${M+2}
                       C${u-26} ${l+4} ${u-t+2} ${l+14} ${u-t-2} ${b+4} Z" fill="${r}"/>
              <path d="M${u-30} ${M+2} C${u-18} ${M-10} ${u+18} ${M-10} ${u+30} ${M+2}
                       C${u+16} ${M-4} ${u-16} ${M-4} ${u-30} ${M+2} Z" fill="${i}" opacity="0.5"/>`;default:{const s=(2*t+4)/6;let a="";for(let f=0;f<6;f+=1)a+=` l${-s.toFixed(1)} ${f%2===0?-16:16}`;return`<path d="M${u-t-2} ${b-14} C${u-t} ${M-12} ${u-18} ${M-20} ${u} ${M-20}
                       C${u+18} ${M-20} ${u+t} ${M-12} ${u+t+2} ${b-14}${a} Z" fill="${r}"/>
              <path d="M${u-16} ${M-8} l12 -9 l7 11 z" fill="${i}" opacity="0.5"/>`}}}function M1(e,n){const t=e.hair,r=V(t,-.14),l=["long","wave","braid","ponytail"].includes(e.hairStyle)?104:e.hairStyle==="bob"?56:26,o=s=>`<path d="M${u+s*(n+1)} ${b-26}
              C${u+s*(n+6)} ${b+l*.35} ${u+s*(n+2)} ${b+l*.8} ${u+s*(n-4)} ${b+l}
              C${u+s*(n-1)} ${b+l*.7} ${u+s*(n-4)} ${b+6} ${u+s*(n-7)} ${b-22} Z"
            fill="${r}"/>`;return o(-1)+o(1)}function L1(e,n,t){const r=n.accent;switch(e){case"glasses":{const i=V(r,-.55),l=o=>`<rect x="${u+o*Wn-15}" y="${b-12}" width="30" height="23" rx="8"
               fill="#dff0ff" fill-opacity="0.16" stroke="${i}" stroke-width="2.4"/>`;return`${l(-1)}${l(1)}
              <path d="M${u-6} ${b-5} q6 -3 12 0" stroke="${i}" stroke-width="2.4" fill="none"/>
              <path d="M${u-Wn-15} ${b-6} l-6 -3 M${u+Wn+15} ${b-6} l6 -3"
                    stroke="${i}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
              <path d="M${u-Wn-11} ${b-8} l9 -2 l-11 9z" fill="#ffffff" opacity="0.3"/>`}case"hairpin":return`<g transform="translate(${u-t+4} ${M+2}) rotate(-18)">
                <rect x="-11" y="-3" width="22" height="6" rx="3" fill="${r}"/>
                <circle cx="-11" cy="0" r="3.4" fill="${V(r,.35)}"/>
              </g>`;case"starpin":return`<g transform="translate(${u+t-6} ${M}) rotate(12)">
                <path d="M0 -9 L2.6 -2.8 L9 -2.8 L3.8 1.2 L5.8 8 L0 4 L-5.8 8 L-3.8 1.2 L-9 -2.8 L-2.6 -2.8 Z" fill="${r}"/>
                <circle cx="0" cy="0" r="2" fill="#fff" opacity="0.7"/>
              </g>`;case"ribbon":return`<g transform="translate(${u+t-10} ${M-4})">
                <path d="M0 0 l-13 -7 v14 z" fill="${r}"/>
                <path d="M0 0 l13 -7 v14 z" fill="${r}"/>
                <circle cx="0" cy="0" r="4" fill="${V(r,-.2)}"/>
              </g>`;case"earring":return`<g fill="${r}">
                <circle cx="${u-t-1}" cy="${b+12}" r="3"/>
                <circle cx="${u+t+1}" cy="${b+12}" r="3"/>
                <path d="M${u+t+1} ${b+14} v7" stroke="${r}" stroke-width="1.6"/>
                <circle cx="${u+t+1}" cy="${b+23}" r="3.2"/>
              </g>`;case"band":return`<path d="M${u-t-4} ${b-14} C${u-t} ${M-14} ${u+t} ${M-14} ${u+t+4} ${b-14}"
                    stroke="${r}" stroke-width="6" fill="none" stroke-linecap="round"/>`;default:return""}}function z1(e){const n=ue-16;return`M${u-18} ${n}
          C${u-46} ${n+4} ${u-e} ${n+16} ${u-e} ${n+46}
          C${u-e} ${n+86} ${u-e*.74} 302 ${u-e*.86} ${Me}
          L${u+e*.86} ${Me}
          C${u+e*.74} 302 ${u+e} ${n+86} ${u+e} ${n+46}
          C${u+e} ${n+16} ${u+46} ${n+4} ${u+18} ${n} Z`}function P1(e,n,t){const r=e-5,i=o=>`<path d="M${u+o*(r-6)} ${ue+8} C${u+o*(r+6)} ${ue+50} ${u+o*(r+3)} ${ue+84} ${u+o*(r-2)} ${ue+108}"
           stroke="${n}" stroke-width="27" fill="none" stroke-linecap="round"/>`,l=o=>`<circle cx="${u+o*(r-2)}" cy="${ue+118}" r="11.5" fill="${t}"/>
     <circle cx="${u+o*(r-2)}" cy="${ue+118}" r="11.5" fill="${V(t,-.12)}" opacity="0.35"/>`;return i(-1)+i(1)+l(-1)+l(1)}function T1(e,n,t,r,i){const l=ue-16,o=V(n,-.22),s=V(n,.2),a=`M${u-17} ${l+1} L${u} ${l+26} L${u+17} ${l+1}`;switch(e){case"hoodie":return`
        <path d="M${u-34} ${l+2} C${u-40} ${l+30} ${u-22} ${l+40} ${u} ${l+40}
                 C${u+22} ${l+40} ${u+40} ${l+30} ${u+34} ${l+2}
                 C${u+20} ${l-10} ${u-20} ${l-10} ${u-34} ${l+2} Z" fill="${o}"/>
        <path d="M${u-24} ${l+8} q24 22 48 0" stroke="${V(n,-.4)}" stroke-width="2" fill="none" opacity="0.6"/>
        <path d="M${u-8} ${l+26} v34" stroke="#f5efe4" stroke-width="3.4" stroke-linecap="round"/>
        <path d="M${u+8} ${l+24} v30" stroke="#f5efe4" stroke-width="3.4" stroke-linecap="round"/>
        <path d="M${u-30} ${l+96} h60" stroke="${o}" stroke-width="2.4" opacity="0.7"/>`;case"tee":return`
        <path d="M${u-19} ${l+2} q19 20 38 0" stroke="${o}" stroke-width="4" fill="none"/>
        <path d="M${u-i+8} ${ue+52} q12 8 22 2" stroke="${o}" stroke-width="3" fill="none"/>
        <path d="M${u+i-8} ${ue+52} q-12 8 -22 2" stroke="${o}" stroke-width="3" fill="none"/>
        <circle cx="${u}" cy="${l+74}" r="15" fill="none" stroke="${t}" stroke-width="3" opacity="0.75"/>`;case"shirt":return`
        <path d="${a}" stroke="none" fill="${V(r,-.05)}"/>
        <path d="M${u-17} ${l} l-13 12 l19 12 l11 -20z" fill="#f6f1e6"/>
        <path d="M${u+17} ${l} l13 12 l-19 12 l-11 -20z" fill="#f6f1e6"/>
        <path d="M${u} ${l+24} v${Me-l-24}" stroke="${o}" stroke-width="2.2"/>
        ${[40,70,100,130].map(f=>`<circle cx="${u}" cy="${l+f}" r="2.6" fill="${s}"/>`).join("")}`;case"apron":return`
        <path d="M${u-17} ${l} l-13 12 l19 12 l11 -20z" fill="#f6f1e6"/>
        <path d="M${u+17} ${l} l13 12 l-19 12 l-11 -20z" fill="#f6f1e6"/>
        <path d="M${u-26} ${l+30} h52 l8 ${Me-l-30} h-68z" fill="${s}"/>
        <path d="M${u-26} ${l+30} l-4 -18 M${u+26} ${l+30} l4 -18"
              stroke="${s}" stroke-width="7" stroke-linecap="round"/>
        <path d="M${u-34} ${l+104} h68" stroke="${t}" stroke-width="8"/>
        <path d="M${u+22} ${l+108} q14 10 8 26" stroke="${t}" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M${u-16} ${l+120} h32 v26 h-32z" fill="${V(s,-.1)}" opacity="0.8"/>`;case"smock":return`
        <path d="${a}" fill="${V(r,-.05)}"/>
        <path d="${a}" stroke="${o}" stroke-width="3.5" fill="none"/>
        <path d="M${u-i+4} ${ue+60} q14 10 26 2" stroke="${o}" stroke-width="6" fill="none"/>
        <path d="M${u+i-4} ${ue+60} q-14 10 -26 2" stroke="${o}" stroke-width="6" fill="none"/>
        ${[[u-26,l+62,5,t],[u+18,l+86,4,V(t,.3)],[u+30,l+48,3,"#e4d7a8"],[u-12,l+116,6,V(t,-.25)],[u+8,l+140,3.5,t]].map(([f,d,h,p])=>`<circle cx="${f}" cy="${d}" r="${h}" fill="${p}" opacity="0.75"/>`).join("")}`;case"jersey":return`
        <path d="M${u-18} ${l+2} q18 8 36 0 v10 q-18 8 -36 0z" fill="${o}"/>
        <path d="M${u} ${l+12} v${Me-l-12}" stroke="${V(n,-.45)}" stroke-width="3"/>
        <path d="M${u-i+2} ${ue+14} C${u-i+10} ${ue+56} ${u-i+8} ${ue+86} ${u-i+4} ${ue+104}"
              stroke="${t}" stroke-width="5" fill="none"/>
        <path d="M${u+i-2} ${ue+14} C${u+i-10} ${ue+56} ${u+i-8} ${ue+86} ${u+i-4} ${ue+104}"
              stroke="${t}" stroke-width="5" fill="none"/>
        <path d="M${u-34} ${l+40} h22" stroke="#ffffff" stroke-width="3.4" opacity="0.85"/>`;case"blouse":return`
        <path d="M${u-20} ${l+2} q20 24 40 0 q-4 16 -20 16 q-16 0 -20 -16z" fill="#f8f3e9"/>
        <path d="M${u-20} ${l+2} q20 24 40 0" stroke="${o}" stroke-width="2.6" fill="none"/>
        <g transform="translate(${u} ${l+22})">
          <path d="M0 0 l-12 -6 v12 z" fill="${t}"/>
          <path d="M0 0 l12 -6 v12 z" fill="${t}"/>
          <circle r="3.6" fill="${V(t,-.25)}"/>
        </g>
        ${[60,92,124].map(f=>`<circle cx="${u}" cy="${l+f}" r="2.4" fill="${s}"/>`).join("")}`;case"knit":return`
        <path d="M${u-22} ${l-4} q22 26 44 0 v14 q-22 22 -44 0z" fill="${s}"/>
        ${[0,1,2,3,4,5].map(f=>`<path d="M${u-22+f*9} ${l-2} q3 12 0 24" stroke="${o}" stroke-width="1.6" fill="none" opacity="0.6"/>`).join("")}
        <path d="M${u-12} ${l+46} q12 18 0 36 q-12 18 0 36" stroke="${o}" stroke-width="2.4" fill="none" opacity="0.5"/>
        <path d="M${u+12} ${l+46} q-12 18 0 36 q12 18 0 36" stroke="${o}" stroke-width="2.4" fill="none" opacity="0.5"/>
        <path d="M${u-i+4} ${ue+96} q14 10 26 2" stroke="${o}" stroke-width="6" fill="none"/>
        <path d="M${u+i-4} ${ue+96} q-14 10 -26 2" stroke="${o}" stroke-width="6" fill="none"/>`;case"suit":{const f=V(n,-.3);return`
        <path d="M${u-16} ${l} L${u} ${l+30} L${u+16} ${l} L${u+12} ${l+88} L${u-12} ${l+88} Z" fill="#f6f1e6"/>
        <path d="M${u-23} ${l-2} L${u-3} ${l+38} L${u-29} ${l+80} L${u-41} ${l+18} Z" fill="${f}"/>
        <path d="M${u+23} ${l-2} L${u+3} ${l+38} L${u+29} ${l+80} L${u+41} ${l+18} Z" fill="${f}"/>
        <path d="M${u-23} ${l-2} L${u-3} ${l+38} M${u+23} ${l-2} L${u+3} ${l+38}"
              stroke="${s}" stroke-width="2"/>
        <g transform="translate(${u} ${l+26})">
          <path d="M0 0 l-12 -7 v14 z" fill="${t}"/>
          <path d="M0 0 l12 -7 v14 z" fill="${t}"/>
          <circle r="3.6" fill="${V(t,-.3)}"/>
        </g>
        <circle cx="${u-1}" cy="${l+104}" r="3" fill="${s}"/>`}case"dress":return`
        <path d="M${u-24} ${l+4} q24 22 48 0 v8 q-24 20 -48 0z" fill="${s}"/>
        <path d="M${u-24} ${l+4} q24 22 48 0" stroke="${o}" stroke-width="2.4" fill="none"/>
        <path d="M${u-i*.92} ${l+104} h${i*1.84}" stroke="${t}" stroke-width="9"/>
        <path d="M${u-i*.9} ${l+120} q${i*.9} 12 ${i*1.8} 0" stroke="${s}" stroke-width="2.4" fill="none" opacity="0.7"/>
        <g transform="translate(${u+26} ${l+108})">
          <path d="M0 0 l-11 -6 v12 z" fill="${V(t,.25)}"/>
          <path d="M0 0 l11 -6 v12 z" fill="${V(t,.25)}"/>
        </g>`;case"cardigan":return`
        <path d="M${u-20} ${l+2} L${u} ${l+30} L${u+20} ${l+2} L${u+16} ${Me} L${u-16} ${Me} Z" fill="#efe6d6"/>
        <path d="M${u-20} ${l+2} L${u-2} ${l+34} L${u-10} ${Me} L${u-30} ${Me} Z" fill="${o}"/>
        <path d="M${u+20} ${l+2} L${u+2} ${l+34} L${u+10} ${Me} L${u+30} ${Me} Z" fill="${o}"/>
        ${[52,84,116,148].map(f=>`<circle cx="${u-14}" cy="${l+f}" r="2.8" fill="${t}"/>`).join("")}
        <path d="M${u-i+4} ${ue+100} q14 10 26 2" stroke="${o}" stroke-width="6" fill="none"/>
        <path d="M${u+i-4} ${ue+100} q-14 10 -26 2" stroke="${o}" stroke-width="6" fill="none"/>`;case"coat":return`
        <path d="M${u-18} ${l+2} L${u} ${l+30} L${u+18} ${l+2}" fill="${V(r,-.08)}"/>
        <path d="M${u-26} ${l-4} L${u-2} ${l+36} L${u-34} ${l+84} L${u-46} ${l+16} Z" fill="${s}"/>
        <path d="M${u+26} ${l-4} L${u+2} ${l+36} L${u+34} ${l+84} L${u+46} ${l+16} Z" fill="${s}"/>
        <path d="M${u} ${l+36} v${Me-l-36}" stroke="${V(n,-.4)}" stroke-width="2.2"/>
        <path d="M${u-i*.94} ${l+110} h${i*1.88}" stroke="${V(n,-.38)}" stroke-width="10"/>
        <rect x="${u-9}" y="${l+104}" width="18" height="16" rx="3" fill="${t}"/>
        ${[[u-13,l+62],[u+13,l+62],[u-13,l+88],[u+13,l+88]].map(([f,d])=>`<circle cx="${f}" cy="${d}" r="3.2" fill="${V(n,-.45)}"/>`).join("")}`;default:return`
        <path d="M${u-30} ${l+4} L${u} ${l+40} L${u+30} ${l+4}
                 L${u+34} ${l+14} L${u} ${l+54} L${u-34} ${l+14} Z" fill="#fbf6ec"/>
        <path d="M${u-30} ${l+4} L${u} ${l+40} L${u+30} ${l+4}" stroke="${o}" stroke-width="2" fill="none"/>
        <path d="M${u-34} ${l+14} L${u} ${l+54} L${u+20} ${l+32} L${u+26} ${l+62} L${u-30} ${l+62} Z" fill="${n}"/>
        <path d="M${u-i} ${l+70} q${i} 16 ${i*2} 0" stroke="${t}" stroke-width="9" fill="none"/>
        <g transform="translate(${u+10} ${l+60})">
          <path d="M0 0 l-14 -8 v16 z" fill="${t}"/>
          <path d="M0 0 l14 -8 v16 z" fill="${t}"/>
          <path d="M-3 6 C-8 40 -4 70 -9 ${Me-l-60}" stroke="${t}" stroke-width="7" fill="none" stroke-linecap="round"/>
          <path d="M6 6 C12 44 8 76 14 ${Me-l-60}" stroke="${V(t,.18)}" stroke-width="7" fill="none" stroke-linecap="round"/>
        </g>`}}function D1(e,n,t){const r=n.accent,i=u-(t-5)+2,l=ue+118,o=a=>a.replace(/fill="[^"]*"/g,'fill="#f4ecdc"').replace(/stroke="[^"]*"/g,'stroke="#f4ecdc"'),s=a=>`<g transform="translate(${i} ${l}) scale(1.18)" stroke-linejoin="round">
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
                 <ellipse cx="0" cy="-14" rx="13" ry="4.5" fill="${V(r,.1)}"/>
                 <path d="M-5 -24 q4 -6 0 -11 M5 -24 q4 -6 0 -11" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.4"/>`);case"hwatu":return s(`<g transform="rotate(-8)">
                   <rect x="-14" y="-22" width="28" height="40" rx="3" fill="#2a2119" stroke="#6b5a3e" stroke-width="2"/>
                   <rect x="-9" y="-16" width="18" height="28" rx="2" fill="#7a2a22"/>
                   <circle cx="0" cy="-2" r="6" fill="#d8b24a"/>
                   <path d="M-14 6 h28" stroke="#6b5a3e" stroke-width="2"/>
                 </g>`);default:return""}}function I1(e){const{tenant:n,expression:t,outfit:r}=e,i=e.width??240,l=e.height??360,o=n.look,s=w1[t],a=x1[o.face],f=a.rx,d=k1[o.build]??65,h=o.skin,p=V(h,-.16),$=o.outfits[r],S=o.wear[r],j=Ms(),T=`M${u-f} ${b-14}
    C${u-f} ${M+2} ${u-f*.6} ${M-2} ${u} ${M-2}
    C${u+f*.6} ${M-2} ${u+f} ${M+2} ${u+f} ${b-14}
    C${u+f} ${b+a.jaw} ${u+a.cheek} ${pt-7} ${u} ${pt}
    C${u-a.cheek} ${pt-7} ${u-f} ${b+a.jaw} ${u-f} ${b-14} Z`,m=s.blush>0?`<ellipse cx="${u-27}" cy="${b+16}" rx="12" ry="6.5" fill="#ff8496" opacity="${(s.blush*.5).toFixed(2)}"/>
         <ellipse cx="${u+27}" cy="${b+16}" rx="12" ry="6.5" fill="#ff8496" opacity="${(s.blush*.5).toFixed(2)}"/>`:"",g=s.sweat?`<path d="M${u+f-6} ${M+16} q8 12 0 17 q-8 -5 0 -17z" fill="#8ecbff" opacity="0.92"/>`:"",y=s.tear?`<path d="M${u-Wn-6} ${b+6} q-3 14 1 22" stroke="#8ecbff" stroke-width="3.2" fill="none" stroke-linecap="round"/>
       <circle cx="${u-Wn-5}" cy="${b+30}" r="3.2" fill="#8ecbff" opacity="0.9"/>`:"";return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 360" width="${i}" height="${l}" role="img" aria-label="${n.name} ${hh[t]}">
  <defs>
    <radialGradient id="${j}s" cx="0.4" cy="0.32" r="0.75">
      <stop offset="0" stop-color="${V(h,.1)}"/>
      <stop offset="1" stop-color="${p}"/>
    </radialGradient>
    <linearGradient id="${j}c" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${V($,.12)}"/>
      <stop offset="1" stop-color="${V($,-.18)}"/>
    </linearGradient>
  </defs>

  ${_1(o,d)}

  <g>
    ${P1(d,V($,-.2),h)}
    <path d="${z1(d)}" fill="url(#${j}c)"/>
    <path d="M${u-13} ${pt-12} h26 v30 h-26z" fill="${h}"/>
    <path d="M${u-13} ${pt-12} h26 v13 q-13 8 -26 0z" fill="${p}" opacity="0.55"/>
    ${T1(S,$,o.accent,h,d)}
  </g>

  <g transform="rotate(${s.tilt} ${u} ${pt})">
    <clipPath id="${j}f"><path d="${T}"/></clipPath>
    <path d="${T}" fill="url(#${j}s)"/>
    <ellipse cx="${u-f+1}" cy="${b+2}" rx="5" ry="8" fill="${V(h,-.06)}"/>
    <ellipse cx="${u+f-1}" cy="${b+2}" rx="5" ry="8" fill="${V(h,-.06)}"/>
    <g clip-path="url(#${j}f)">
      <ellipse cx="${u}" cy="${b-34}" rx="${f+6}" ry="20" fill="${p}" opacity="0.3"/>
      <ellipse cx="${u}" cy="${pt+16}" rx="${a.cheek+6}" ry="12" fill="${p}" opacity="0.22"/>
    </g>
    ${M1(o,f)}
    ${N1(o,f)}
    ${E1(o.bangs,o,f)}
    ${C1(s,V(o.hair,-.25))}
    ${b1(s,o.eyes,v1(o))}
    <path d="M${u-3} ${b+19} q3.5 3.5 7 0" stroke="${V(h,-.32)}" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.75"/>
    ${m}
    ${j1(s)}
    ${L1(o.accessory,o,f)}
    ${g}
    ${y}
  </g>

  ${D1(o.propArt,o,d)}
</svg>`}function Ls(e){return`data:image/svg+xml;utf8,${encodeURIComponent(I1(e))}`}const A1={maru:"하숙집 마루",kitchen:"부엌",hallway:"복도 / 방 앞",rooftop:"옥상",yard:"마당 / 대문",cvs:"동네 편의점 앞",campus:"캠퍼스 벤치",street:"골목길",room:"내 방",annex:"별채",festival:"가을 축제",station:"지하철역 앞",beach:"집 앞 바닷가"},B1={morning:{sky:["#cfe6f7","#fbe6d0"],ground:"#cbb89a",wall:"#efe3d0",wood:"#c9a16b",light:"#fff3d6",haze:.12},evening:{sky:["#f7c08a","#e0798a"],ground:"#9c8467",wall:"#e2cbb2",wood:"#b58553",light:"#ffd9a0",haze:.18},night:{sky:["#1b2440","#2f3a5c"],ground:"#3b3428",wall:"#4a4237",wood:"#6b4f33",light:"#ffd98a",haze:.34}},U=720,te=1280;function F1(e){return`
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
  <rect width="${U}" height="${te}" fill="url(#sky)"/>`}function zs(e){if(e!=="night")return"";let n="";for(let t=0;t<40;t++){const r=t*137%U+7,i=t*61%380+20,l=t%3*.6+.8;n+=`<circle cx="${r}" cy="${i}" r="${l}" fill="#fff" opacity="${.3+t%5*.12}"/>`}return n}function F(e,n){const t=/^#?([0-9a-f]{6})$/i.exec(e);if(!t)return e;const r=parseInt(t[1],16),i=n>0?255:0,l=Math.abs(n);return`#${[r>>16&255,r>>8&255,r&255].map(s=>Math.round(s+(i-s)*l)).map(s=>s.toString(16).padStart(2,"0")).join("")}`}function Cr(e,n,t){const r=d=>{const h=/^#?([0-9a-f]{6})$/i.exec(d),p=h?parseInt(h[1],16):0;return[p>>16&255,p>>8&255,p&255]},[i,l,o]=r(e),[s,a,f]=r(n);return`#${[i+(s-i)*t,l+(a-l)*t,o+(f-o)*t].map(d=>Math.max(0,Math.min(255,Math.round(d))).toString(16).padStart(2,"0")).join("")}`}const ph={morning:{zenith:"#5d9fd6",horizonSky:"#dbeaf4",sun:"#fff6de",sunGlow:.5,seaFar:"#4b86b4",seaNear:"#2f6c99",grassTop:"#9cb85e",grassBottom:"#5d7c33",sand:"#ddcaa8",wallLight:"#f2f0ec",wallDark:"#3f434b",deck:"#9c7550",glassA:"#cfe0ec",glassB:"#48606f",shadow:.28,haze:"#cfe0ef",hazeAmt:.1},evening:{zenith:"#6b5a8e",horizonSky:"#ffb877",sun:"#ffd9a0",sunGlow:.85,seaFar:"#6b7fa0",seaNear:"#2f4059",grassTop:"#a08f4e",grassBottom:"#4e5530",sand:"#c9a97f",wallLight:"#efdcc6",wallDark:"#3b3740",deck:"#8a5f3c",glassA:"#f0c79a",glassB:"#4a3f48",shadow:.4,haze:"#f0b988",hazeAmt:.16},night:{zenith:"#0b1224",horizonSky:"#20304c",sun:"#dce7ff",sunGlow:.35,seaFar:"#14213a",seaNear:"#0a1122",grassTop:"#2b3a2c",grassBottom:"#131d18",sand:"#3a3a3c",wallLight:"#9aa2b0",wallDark:"#1b1e25",deck:"#4a3826",glassA:"#39506b",glassB:"#141b28",shadow:.5,haze:"#0e1526",hazeAmt:.2}};function R1(e){return`
  <defs>
    <linearGradient id="vsky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${e.zenith}"/>
      <stop offset="62%" stop-color="${Cr(e.zenith,e.horizonSky,.55)}"/>
      <stop offset="100%" stop-color="${e.horizonSky}"/>
    </linearGradient>
    <linearGradient id="vsea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${Cr(e.seaFar,e.horizonSky,.35)}"/>
      <stop offset="18%" stop-color="${e.seaFar}"/>
      <stop offset="100%" stop-color="${e.seaNear}"/>
    </linearGradient>
    <linearGradient id="vgrass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${Cr(e.grassTop,e.horizonSky,.28)}"/>
      <stop offset="22%" stop-color="${e.grassTop}"/>
      <stop offset="100%" stop-color="${e.grassBottom}"/>
    </linearGradient>
    <linearGradient id="vsand" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${Cr(e.sand,e.horizonSky,.25)}"/>
      <stop offset="100%" stop-color="${F(e.sand,-.28)}"/>
    </linearGradient>
    <linearGradient id="vwall" x1="0" y1="0" x2="1" y2="0.3">
      <stop offset="0%" stop-color="${F(e.wallLight,.06)}"/>
      <stop offset="70%" stop-color="${e.wallLight}"/>
      <stop offset="100%" stop-color="${F(e.wallLight,-.16)}"/>
    </linearGradient>
    <linearGradient id="vwalld" x1="0" y1="0" x2="1" y2="0.3">
      <stop offset="0%" stop-color="${F(e.wallDark,.14)}"/>
      <stop offset="100%" stop-color="${F(e.wallDark,-.25)}"/>
    </linearGradient>
    <linearGradient id="vglass" x1="0.1" y1="0" x2="0.9" y2="1">
      <stop offset="0%" stop-color="${e.glassA}"/>
      <stop offset="45%" stop-color="${Cr(e.glassA,e.glassB,.7)}"/>
      <stop offset="100%" stop-color="${e.glassB}"/>
    </linearGradient>
    <linearGradient id="vlit" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fff0cc"/>
      <stop offset="55%" stop-color="#ffd489"/>
      <stop offset="100%" stop-color="#d99a45"/>
    </linearGradient>
    <linearGradient id="vdeck" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${F(e.deck,.18)}"/>
      <stop offset="100%" stop-color="${F(e.deck,-.25)}"/>
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
  </defs>`}function gh(e,n){return e==="evening"?{x:104,y:n-52}:{x:545,y:205}}function tr(e,n,t){const{x:r,y:i}=gh(n,t),l=n==="night"?34:46;let o=`<rect width="${U}" height="${t+4}" fill="url(#vsky)"/>`;n==="night"&&(o+=zs(n)),o+=`
    <circle cx="${r}" cy="${i}" r="${l*5}" fill="url(#vsun)" opacity="${e.sunGlow}"/>
    <circle cx="${r}" cy="${i}" r="${l}" fill="${e.sun}" opacity="${n==="night"?.92:.82}"/>`,n==="night"&&(o+=`<circle cx="${r-11}" cy="${i-7}" r="7" fill="#b9c6de" opacity="0.4"/>
            <circle cx="${r+9}" cy="${i+10}" r="5" fill="#b9c6de" opacity="0.3"/>`);const s=n==="night"?"#2b3852":n==="evening"?"#ffd9b0":"#ffffff",a=(f,d,h,p,$)=>`<ellipse cx="${f}" cy="${d}" rx="${h}" ry="${p}" fill="${s}" opacity="${$}" filter="url(#vblur)"/>`;return o+=a(180,150,150,34,.5)+a(300,178,120,26,.32)+a(590,118,130,30,.4)+a(90,252,110,22,.28)+a(430,t-108,215,24,n==="evening"?.5:.26),o}function rr(e,n,t,r){const i=r-t,l=n==="night"?"#cfe0ff":n==="evening"?"#ffd9a8":"#ffffff",{x:o}=gh(n,t);let s=`<rect x="0" y="${t}" width="${U}" height="${i}" fill="url(#vsea)"/>
             <rect x="0" y="${t-2}" width="${U}" height="5" fill="${e.sun}" opacity="0.5" filter="url(#vsoft)"/>`;s+='<g filter="url(#vsoft)">';for(let a=0;a<22;a+=1){const f=a/21,d=t+8+f*(i-10),h=16+f*f*150,p=o-h/2+Math.sin(a*2.7)*(8+f*40);s+=`<rect x="${p.toFixed(0)}" y="${d.toFixed(0)}" width="${h.toFixed(0)}" height="${(2+f*4).toFixed(0)}" rx="2" fill="${l}" opacity="${(.34-f*.2).toFixed(2)}"/>`}s+='</g><g filter="url(#vsoft)">';for(let a=0;a<18;a+=1){const f=a/17,d=t+14+f*(i-16),h=a*191%(U-160)+30,p=40+a%5*46+f*60;s+=`<rect x="${h}" y="${d.toFixed(0)}" width="${p.toFixed(0)}" height="${(1.5+f*2.5).toFixed(1)}" rx="1" fill="${l}" opacity="${(.05+a%3*.035).toFixed(2)}"/>`}return s+"</g>"}function hu(e,n){let t="";for(let r=0;r<90;r+=1){const i=r*83%U,l=te-10-r*37%150,o=26+r*13%40,s=(r%5-2)*7;t+=`<path d="M${i} ${l} q${s/2} ${-o/2} ${s} ${-o}" stroke="${F(e.grassBottom,r%3===0?.3:-.2)}" stroke-width="3" fill="none" stroke-linecap="round"/>`}return`
    <path d="M0 ${n+42} C180 ${n-28} 520 ${n-12} ${U} ${n+48} L${U} ${te} L0 ${te} Z" fill="url(#vgrass)"/>
    <ellipse cx="170" cy="${n+150}" rx="280" ry="90" fill="${F(e.grassBottom,-.35)}" opacity="0.4" filter="url(#vblur2)"/>
    <ellipse cx="610" cy="${n+230}" rx="260" ry="100" fill="${F(e.grassBottom,-.3)}" opacity="0.35" filter="url(#vblur2)"/>
    <ellipse cx="380" cy="${n+96}" rx="320" ry="60" fill="${F(e.grassTop,.25)}" opacity="0.28" filter="url(#vblur2)"/>
    <rect x="0" y="${n-40}" width="${U}" height="${te-n+40}" filter="url(#vblade)" opacity="0.28"
          style="mix-blend-mode:overlay"/>
    <g opacity="0.72" filter="url(#vsoft)">${t}</g>`}function O1(e){let n=`<path d="M0 ${e} C200 ${e-18} 520 ${e+14} ${U} ${e-8} L${U} ${te} L0 ${te} Z" fill="url(#vsand)"/>`;return n+=`<path d="M0 ${e+6} C200 ${e-12} 520 ${e+20} ${U} ${e-2} L${U} ${e+46} C520 ${e+64} 200 ${e+32} 0 ${e+50} Z" fill="#ffffff" opacity="0.38" filter="url(#vsoft)"/>`,n+=`<path d="M0 ${e+74} C200 ${e+56} 520 ${e+88} ${U} ${e+66}" stroke="#ffffff"
                stroke-width="4" fill="none" opacity="0.2"/>`,n+=`<rect x="0" y="${e-20}" width="${U}" height="${te-e+20}" filter="url(#vgrain)" opacity="0.1"
                style="mix-blend-mode:overlay"/>`,n}function Tr(e,n,t,r,i,l=2){const o=i==="night",s=o?"#0d0f13":"#2f333a";let a=`<rect x="${e}" y="${n}" width="${t}" height="${r}" fill="${o?"url(#vlit)":"url(#vglass)"}"/>`;o?a+=`<rect x="${e}" y="${(n+r*.62).toFixed(0)}" width="${t}" height="${(r*.38).toFixed(0)}" fill="#ffe6b0" opacity="0.3"/>
            <rect x="${(e+t*.14).toFixed(0)}" y="${(n+r*.56).toFixed(0)}" width="${(t*.28).toFixed(0)}" height="${(r*.44).toFixed(0)}" fill="#8a5f2c" opacity="0.28"/>`:a+=`<path d="M${e} ${n+r} L${(e+t*.62).toFixed(0)} ${n} L${e+t} ${n} L${(e+t*.38).toFixed(0)} ${n+r} Z" fill="#ffffff" opacity="0.15"/>`;for(let f=1;f<l;f+=1)a+=`<rect x="${(e+t/l*f-2).toFixed(0)}" y="${n}" width="4" height="${r}" fill="${s}" opacity="0.9"/>`;return a+=`<rect x="${e}" y="${n}" width="${t}" height="${r}" fill="none" stroke="${s}" stroke-width="5"/>`,a}function Ua(e,n,t,r){let i=`<rect x="${e}" y="${n}" width="${t}" height="${r}" fill="url(#vdeck)"/>`;for(let l=1;l<26;l+=1){const o=e+t/26*l;i+=`<path d="M${o.toFixed(0)} ${n} L${(o+(o-U/2)*.1).toFixed(0)} ${n+r}" stroke="#00000055" stroke-width="2"/>`}return i+`<rect x="${e}" y="${n}" width="${t}" height="4" fill="#ffffff" opacity="0.12"/>`}function pu(e,n){const t=n==="night",r=t?"#0b0d11":"#23262c",i=t?"#15181e":"#33373e",l=(o,s,a,f,d)=>`<rect x="${o}" y="${s}" width="${a}" height="5" fill="${i}"/>`+[...Array(f).keys()].map(h=>`<rect x="${o+4+h*((a-8)/(f-1))}" y="${s}" width="3" height="${d}" fill="${i}" opacity="0.85"/>`).join("")+`<rect x="${o}" y="${s+d-4}" width="${a}" height="4" fill="${i}"/>`;return`
  <ellipse cx="400" cy="808" rx="330" ry="40" fill="#000000" opacity="${e.shadow}" filter="url(#vblur)"/>

  <!-- 오른쪽 짙은 동 -->
  <path d="M400 556 L520 430 L642 556 L642 800 L400 800 Z" fill="url(#vwalld)"/>
  <path d="M392 562 L520 424 L650 562 L642 574 L520 446 L400 574 Z" fill="${r}"/>
  <path d="M400 574 L520 446 L642 574 L642 596 L520 470 L400 596 Z" fill="#000000" opacity="0.3"/>
  <rect x="400" y="756" width="242" height="44" fill="#000000" opacity="0.26"/>
  <rect x="470" y="470" width="100" height="60" fill="${t?"url(#vlit)":"url(#vglass)"}" stroke="${r}" stroke-width="5"/>
  ${Tr(430,594,182,202,n,3)}

  <!-- 굴뚝 -->
  <rect x="592" y="386" width="34" height="78" fill="${F(e.wallLight,-.08)}"/>
  <rect x="587" y="380" width="44" height="12" rx="3" fill="${r}"/>

  <!-- 왼쪽 흰 동. 살짝 왼쪽에서 본 각도라 측면과 지붕 뒷면이 보인다 -->
  <path d="M302 346 L250 378 L124 524 L176 486 Z" fill="${F(r,.14)}"/>
  <path d="M124 524 L176 486 L176 800 L124 816 Z" fill="${F(e.wallLight,-.46)}"/>
  <path d="M124 524 L176 486 L176 512 L124 550 Z" fill="#000000" opacity="0.3"/>
  <path d="M176 486 L302 352 L428 486 L428 800 L176 800 Z" fill="url(#vwall)"/>
  <rect x="176" y="486" width="252" height="314" filter="url(#vstucco)" opacity="0.13" style="mix-blend-mode:overlay"/>
  <path d="M168 492 L302 346 L436 492 L428 504 L302 368 L176 504 Z" fill="${r}"/>
  <path d="M176 504 L302 368 L428 504 L428 528 L302 394 L176 528 Z" fill="#000000" opacity="0.28"/>
  <rect x="176" y="756" width="252" height="44" fill="#000000" opacity="0.22"/>
  <rect x="277" y="402" width="50" height="46" fill="${t?"url(#vlit)":"url(#vglass)"}" stroke="${r}" stroke-width="4"/>
  ${Tr(200,522,86,76,n,2)}
  ${Tr(318,522,86,76,n,2)}
  ${l(190,600,224,8,38)}
  ${Tr(196,654,208,146,n,3)}
  <rect x="352" y="692" width="56" height="108" fill="${F(e.wallDark,t?.12:0)}" stroke="${r}" stroke-width="4"/>
  <circle cx="362" cy="748" r="4" fill="${t?"#ffd89a":"#c8b48a"}"/>

  <!-- 오른쪽 외부 철제 계단 -->
  <path d="M642 800 L706 800 L706 610 L642 610 Z" fill="${i}" opacity="0.45"/>
  ${[...Array(9).keys()].map(o=>`<rect x="644" y="${618+o*20}" width="60" height="6" fill="${i}"/>`).join("")}
  <path d="M646 806 L702 606 M702 806 L702 602" stroke="${i}" stroke-width="6" fill="none"/>

  <!-- 데크 + 난간 + 데크 밑 옹벽 -->
  ${Ua(96,800,528,58)}
  <rect x="96" y="856" width="528" height="78" fill="${F(e.deck,-.44)}"/>
  ${[...Array(22).keys()].map(o=>`<rect x="${98+o*24}" y="856" width="2" height="78" fill="#00000044"/>`).join("")}
  ${l(96,760,528,18,42)}

  ${t?`<ellipse cx="300" cy="702" rx="255" ry="148" fill="url(#vwarm)"/>
         <ellipse cx="520" cy="690" rx="200" ry="130" fill="url(#vwarm)"/>
         <ellipse cx="360" cy="832" rx="300" ry="58" fill="#ffca7a" opacity="0.13" filter="url(#vblur)"/>`:""}`}function it(e,n){return`
    <rect x="0" y="${n-120}" width="${U}" height="240" fill="${e.haze}" opacity="${e.hazeAmt}"
          filter="url(#vblur2)"/>
    <rect width="${U}" height="${te}" filter="url(#vgrain)" opacity="0.055" style="mix-blend-mode:overlay"/>
    <rect width="${U}" height="${te}" fill="url(#vvig)"/>`}const U1=new Set(["yard","beach","maru","annex","kitchen","hallway","room","rooftop"]),G1=["vsky","vsea","vgrass","vsand","vwall","vwalld","vglass","vlit","vdeck","vsun","vwarm","vvig","vblur","vblur2","vsoft","vgrain","vblade","vstucco","vwin","vfloor"];let Po=0;function V1(e){Po=(Po+1)%1e6;const n=Po.toString(36);let t=e;for(const r of G1)t=t.split(`id="${r}"`).join(`id="${r}${n}"`),t=t.split(`url(#${r})`).join(`url(#${r}${n})`);return t}const _l={top:214,bottom:700,left:112,right:608};function Hl(e,n){return n?e==="night"?{wall:"#6a6448",wallLit:"#8a8058",ceil:"#4e4a38",floor:"#8e8a80",floorDark:"#5d5a52",trim:"#8a6a3c",glow:.9}:e==="evening"?{wall:"#c4b483",wallLit:"#e0cd96",ceil:"#b0a279",floor:"#ded6c6",floorDark:"#a89f8d",trim:"#a9793f",glow:.5}:{wall:"#cfc49a",wallLit:"#e6dcb4",ceil:"#ded6bb",floor:"#ece7db",floorDark:"#c2bcae",trim:"#b08b52",glow:.18}:e==="night"?{wall:"#4b4b50",wallLit:"#6a6a70",ceil:"#3a3a3f",floor:"#6b4f30",floorDark:"#44311d",trim:"#2a2a2e",glow:.9}:e==="evening"?{wall:"#e0d5c6",wallLit:"#f2e2cc",ceil:"#cfc5b8",floor:"#c08f55",floorDark:"#8d6437",trim:"#5a5550",glow:.45}:{wall:"#ece7df",wallLit:"#faf7f2",ceil:"#f2eee8",floor:"#c99a63",floorDark:"#9a7345",trim:"#6b6660",glow:.14}}function Zl(e,n){const{top:t,bottom:r,left:i,right:l}=_l;let o=`
    <rect width="${U}" height="${te}" fill="${e.wall}"/>
    <!-- 천장 -->
    <path d="M0 0 L${U} 0 L${l} ${t} L${i} ${t} Z" fill="${e.ceil}"/>
    <!-- 옆벽 -->
    <path d="M0 0 L${i} ${t} L${i} ${r} L0 ${te} Z" fill="${F(e.wall,-.16)}"/>
    <path d="M${U} 0 L${l} ${t} L${l} ${r} L${U} ${te} Z" fill="${F(e.wall,-.24)}"/>
    <!-- 뒷벽 -->
    <rect x="${i}" y="${t}" width="${l-i}" height="${r-t}" fill="${e.wall}"/>
    <rect x="${i}" y="${t}" width="${l-i}" height="${r-t}" filter="url(#vstucco)"
          opacity="0.13" style="mix-blend-mode:overlay"/>
    <!-- 바닥 -->
    <path d="M${i} ${r} L${l} ${r} L${U+200} ${te} L-200 ${te} Z" fill="${e.floor}"/>`;if(n==="oak"){for(let s=0;s<=14;s+=1){const a=i+(l-i)/14*s,f=-200+(U+400)/14*s;o+=`<path d="M${a.toFixed(0)} ${r} L${f.toFixed(0)} ${te}" stroke="${e.floorDark}" stroke-width="2" opacity="0.5"/>`}for(let s=1;s<=5;s+=1){const a=r+s*s*22;a<te&&(o+=`<path d="M0 ${a.toFixed(0)} h${U}" stroke="${e.floorDark}" stroke-width="1.5" opacity="0.22"/>`)}}else{for(let s=0;s<=10;s+=1){const a=i+(l-i)/10*s,f=-200+(U+400)/10*s;o+=`<path d="M${a.toFixed(0)} ${r} L${f.toFixed(0)} ${te}" stroke="${e.floorDark}" stroke-width="2" opacity="0.35"/>`}for(let s=1;s<=6;s+=1){const a=r+s*s*17;a<te&&(o+=`<path d="M0 ${a.toFixed(0)} h${U}" stroke="${e.floorDark}" stroke-width="2" opacity="0.3"/>`)}}return o+=`<rect x="0" y="${r}" width="${U}" height="${te-r}" fill="${e.floorDark}" opacity="0.2"
                filter="url(#vblur2)"/>`,o+=`<path d="M${i} ${r-10} h${l-i} v10 h-${l-i} Z" fill="${F(e.wall,-.3)}" opacity="0.6"/>`,o}function Q1(e,n){const t=n==="night"||n==="evening",r=t?"#fff0d0":"#ffffff";let i="";for(const l of[70,128])i+=`<rect x="${140+(l-70)*.5}" y="${l}" width="${440-(l-70)}" height="5" rx="2" fill="${r}"
                  opacity="${t?.95:.5}"/>`,t&&(i+=`<rect x="${130+(l-70)*.5}" y="${l-10}" width="${460-(l-70)}" height="26" rx="10" fill="${r}"
                          opacity="0.2" filter="url(#vsoft)"/>`);i+=`<rect x="96" y="176" width="300" height="4" fill="${e.trim}" opacity="0.8"/>`;for(const l of[140,220,300])i+=`<rect x="${l}" y="172" width="14" height="22" rx="4" fill="${e.trim}"/>`,t&&(i+=`<path d="M${l+7} 194 L${l-50} ${_l.bottom} L${l+64} ${_l.bottom} Z" fill="${r}" opacity="0.13" filter="url(#vsoft)"/>`);return i}function mh(e,n,t,r){const i=r==="night"||r==="evening";return`
    <rect x="${e-2}" y="0" width="4" height="${n-t}" fill="#3a3129"/>
    <path d="M${e-t} ${n} a${t} ${t*.92} 0 0 1 ${t*2} 0 Z" fill="${i?"#e8bd72":"#c9a877"}"/>
    ${[-.6,-.2,.2,.6].map(l=>`<path d="M${e+t*l} ${n} q${-t*l*.3} ${-t*.75} 0 ${-t*.92}" stroke="#00000033" stroke-width="2" fill="none"/>`).join("")}
    <ellipse cx="${e}" cy="${n}" rx="${t}" ry="4" fill="${i?"#fff0c8":"#d8cdb8"}"/>
    ${i?`<ellipse cx="${e}" cy="${n+90}" rx="${t*2.4}" ry="${t*1.9}" fill="url(#vwarm)"/>`:""}`}function yh(e,n,t,r,i){return`<path d="M${360-n} ${e} L${360+n} ${e} L${360+t} ${e+r} L${360-t} ${e+r} Z" fill="${i}"/>`}function H1(e,n,t,r){const i=r==="night"?"#4e4c49":r==="evening"?"#9c968c":"#a9a49c",l=F(i,.14);return`
    <ellipse cx="${e+t/2}" cy="${n+96}" rx="${t*.6}" ry="22" fill="#000" opacity="0.28" filter="url(#vsoft)"/>
    <rect x="${e}" y="${n}" width="${t}" height="56" rx="14" fill="${F(i,-.2)}"/>
    <rect x="${e+8}" y="${n+46}" width="${t-16}" height="48" rx="12" fill="${l}"/>
    <rect x="${e+8}" y="${n+46}" width="${t-16}" height="8" rx="4" fill="#ffffff" opacity="0.12"/>
    <rect x="${e-12}" y="${n+16}" width="30" height="80" rx="12" fill="${i}"/>
    <rect x="${e+t-18}" y="${n+16}" width="30" height="80" rx="12" fill="${F(i,-.3)}"/>
    ${[.2,.46,.72].map(o=>`<rect x="${(e+t*o).toFixed(0)}" y="${n+4}" width="44" height="42" rx="12" fill="${F(i,.16)}" transform="rotate(-6 ${(e+t*o+22).toFixed(0)} ${n+25})"/>`).join("")}`}function Z1(e,n,t){const r=t==="night"?"#6b4a28":"#a9763c",i=t==="night"?"#5a3e22":"#8a5c2e",l=(o,s,a)=>`
    <g transform="translate(${o} ${s}) scale(${a})">
      <ellipse cx="0" cy="8" rx="44" ry="14" fill="#000" opacity="0.25" filter="url(#vsoft)"/>
      <path d="M-40 -6 q40 -22 80 0 q-40 16 -80 0z" fill="${i}"/>
      <path d="M-34 -8 q34 -60 68 0 q-34 -30 -68 0z" fill="${F(i,-.18)}"/>
      <path d="M-30 4 l-8 44 M30 4 l8 44 M-14 8 l-4 44 M14 8 l4 44" stroke="${F(i,-.25)}" stroke-width="7" stroke-linecap="round"/>
    </g>`;return`
    ${l(e-96,n-46,.82)}${l(e+4,n-46,.82)}${l(e+104,n-46,.82)}
    <ellipse cx="${e}" cy="${n+96}" rx="235" ry="34" fill="#000" opacity="0.3" filter="url(#vblur)"/>
    <path d="M${e-232} ${n+4} q232 -22 464 0 l-6 28 q-226 20 -452 0z" fill="${r}"/>
    <path d="M${e-232} ${n+4} q232 -22 464 0 l-4 10 q-228 -16 -456 0z" fill="${F(r,.2)}"/>
    <rect x="${e-176}" y="${n+30}" width="20" height="74" rx="6" fill="${F(r,-.25)}"/>
    <rect x="${e+156}" y="${n+30}" width="20" height="74" rx="6" fill="${F(r,-.25)}"/>
    ${l(e-120,n+132,1.06)}${l(e+120,n+132,1.06)}`}function q1(e,n,t,r,i,l){const o=t/2,s=`M${e-o} ${n} L${e-o} ${n-r+o} A${o} ${o} 0 0 1 ${e+o} ${n-r+o} L${e+o} ${n} Z`;return`
    <path d="${s}" fill="${l}"/>
    <path d="${s}" fill="none" stroke="${F(i.wall,-.2)}" stroke-width="14"/>
    <path d="M${e-o+10} ${n} L${e-o+10} ${n-r+o} A${o-10} ${o-10} 0 0 1 ${e+o-10} ${n-r+o}" fill="none" stroke="#000000" stroke-width="16" opacity="0.18"/>`}function jr(e,n,t,r,i,l){let o=`<rect x="${e}" y="${n}" width="${t}" height="${r}" rx="4" fill="${i}"/>`;for(let s=1;s<l;s+=1)o+=`<rect x="${(e+t/l*s-1.5).toFixed(0)}" y="${n+4}" width="3" height="${r-8}" fill="#00000030"/>`;for(let s=0;s<l;s+=1)o+=`<rect x="${(e+t/l*(s+.5)-16).toFixed(0)}" y="${n+r-16}" width="32" height="4" rx="2" fill="#00000044"/>`;return o+`<rect x="${e}" y="${n}" width="${t}" height="5" fill="#ffffff" opacity="0.14"/>`}function W1(e,n){const t=Hl(n,!1),r=n==="night"||n==="evening",i=392,l={x:130,y:248,w:460,h:442};return`
    <defs><clipPath id="vwin"><rect x="${l.x}" y="${l.y}" width="${l.w}" height="${l.h}"/></clipPath></defs>
    ${Zl(t,"oak")}
    <!-- 뒷벽을 통째로 뚫은 슬라이딩 통유리 -->
    <g clip-path="url(#vwin)">
      ${tr(e,n,i)}
      ${rr(e,n,i,640)}
      <rect x="${l.x}" y="612" width="${l.w}" height="${l.y+l.h-612}" fill="${F(e.deck,-.1)}"/>
      <rect x="${l.x}" y="600" width="${l.w}" height="6" fill="${t.trim}" opacity="0.8"/>
      ${[...Array(9).keys()].map(o=>`<rect x="${l.x+18+o*52}" y="600" width="4" height="30" fill="${t.trim}" opacity="0.7"/>`).join("")}
    </g>
    <path d="M${l.x} ${l.y+l.h} L${l.x+250} ${l.y} L${l.x+360} ${l.y} L${l.x+110} ${l.y+l.h} Z" fill="#ffffff" opacity="0.08"/>
    ${[0,1,2,3].map(o=>`<rect x="${l.x+l.w/4*o-4}" y="${l.y}" width="9" height="${l.h}" fill="${t.trim}"/>`).join("")}
    <rect x="${l.x}" y="${l.y}" width="${l.w}" height="${l.h}" fill="none" stroke="${t.trim}" stroke-width="12"/>

    ${Q1(t,n)}
    <!-- 벽등 -->
    <circle cx="656" cy="404" r="26" fill="none" stroke="${t.trim}" stroke-width="7"/>
    <circle cx="656" cy="404" r="11" fill="${r?"#ffe7b4":"#d9d3c8"}"/>
    ${r?'<ellipse cx="656" cy="404" rx="120" ry="150" fill="url(#vwarm)"/>':""}

    <!--
      가구 배치. 화면 아래 28% 는 대화창이 덮으므로 소파·의자는 중간 높이에 두고,
      방석은 대화창 위로 살짝 걸치게 놓는다.
    -->
    ${yh(742,270,430,470,n==="night"?"#857f72":"#efe9dd")}
    ${H1(0,684,330,n)}
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
    ${it(e,i)}`}function K1(e,n){const t=Hl(n,!0),r=n==="night"||n==="evening",i=n==="night"?"#6b4a28":"#a9763c",l=n==="night"?"#b6b0a2":"#f0ebe0";return`
    ${Zl(t,"tile")}
    <!-- 상부장과 열린 선반 -->
    ${jr(132,268,176,118,l,2)}
    ${jr(316,268,100,118,i,1)}
    <rect x="440" y="296" width="150" height="7" rx="3" fill="${i}"/>
    <rect x="440" y="360" width="150" height="7" rx="3" fill="${i}"/>
    ${[458,492,526,558].map((o,s)=>`<rect x="${o}" y="${s%2?268:262}" width="20" height="${s%2?28:34}" rx="4" fill="${["#c9d6cc","#d8cbb4","#b9c4d2","#cdbfa6"][s]}"/>`).join("")}
    <path d="M572 316 q22 -34 44 -6 q-16 30 -44 6z" fill="#5d7c43"/>
    <path d="M596 316 q30 -22 40 10 q-26 16 -40 -10z" fill="#4e6b39"/>
    <!-- 창 -->
    <rect x="440" y="392" width="150" height="86" fill="${r?F(e.seaNear,.2):"#cfe0ec"}" stroke="${t.trim}" stroke-width="7"/>
    <rect x="512" y="392" width="6" height="86" fill="${t.trim}"/>
    <!-- 하부장 + 상판 -->
    <rect x="128" y="486" width="466" height="16" rx="4" fill="${F(l,.06)}"/>
    ${jr(132,502,190,186,l,3)}
    ${jr(330,502,126,186,i,2)}
    ${jr(464,502,126,186,l,2)}
    <rect x="152" y="470" width="86" height="18" rx="4" fill="#2f3338"/>
    <!-- 가전 -->
    <rect x="476" y="416" width="104" height="62" rx="6" fill="#3a3d42"/>
    <rect x="486" y="426" width="62" height="42" rx="4" fill="${r?"#6b5a3a":"#7d8288"}"/>
    <rect x="344" y="432" width="42" height="46" rx="5" fill="#57534c"/>
    <circle cx="365" cy="452" r="10" fill="#8f9aa3"/>
    ${mh(240,300,44,n)}
    ${Z1(368,800,n)}
    ${r?'<ellipse cx="360" cy="700" rx="380" ry="300" fill="url(#vwarm)" opacity="0.65"/>':""}
    ${it(e,300)}`}function Y1(e,n){const t=Hl(n,!0),r=n==="night"||n==="evening",i=F(t.wall,r?.22:-.1);return`
    ${Zl(t,"tile")}
    <!-- 아치 너머 방 -->
    ${q1(360,_l.bottom,216,330,t,i)}
    <rect x="286" y="560" width="148" height="140" fill="${F(i,-.12)}"/>
    <rect x="300" y="470" width="58" height="76" rx="4" fill="${r?"#8a7a4a":"#bcd2c4"}"/>
    <path d="M388 556 q22 -40 46 -8 q-18 34 -46 8z" fill="#4e6b39"/>
    <!-- 왼쪽 플라스터 벽난로 -->
    <rect x="104" y="386" width="152" height="24" rx="6" fill="${F(t.wall,.16)}"/>
    <rect x="116" y="410" width="128" height="290" fill="${F(t.wall,.1)}"/>
    <path d="M140 700 L140 530 A40 40 0 0 1 220 530 L220 700 Z" fill="${F(t.wall,-.55)}"/>
    ${[[158,636],[182,636],[206,636],[170,614],[194,614]].map(([l,o])=>`<ellipse cx="${l}" cy="${o}" rx="11" ry="11" fill="#7a5a34"/>`).join("")}
    <rect x="128" y="330" width="106" height="58" rx="4" fill="${F(t.wall,.24)}"/>
    <!-- 오른쪽 콘솔 -->
    <rect x="436" y="556" width="176" height="144" fill="${F(t.trim,-.1)}"/>
    <rect x="430" y="546" width="188" height="14" rx="4" fill="${F(t.trim,.18)}"/>
    <path d="M486 546 l-14 -62 h60 l-14 62z" fill="${r?"#ffe6b0":"#e6dfd0"}"/>
    <rect x="510" y="512" width="46" height="34" rx="4" fill="#8d3a33"/>
    ${mh(196,264,52,n)}
    ${yh(880,200,300,380,n==="night"?"#6a6252":"#ece4d2")}
    ${r?'<ellipse cx="300" cy="640" rx="360" ry="300" fill="url(#vwarm)" opacity="0.6"/>':""}
    ${it(e,300)}`}function X1(e,n){const t=Hl(n,!0),r=n==="night"||n==="evening",i=380;return`
    <defs><clipPath id="vwin"><rect x="152" y="268" width="228" height="292"/></clipPath></defs>
    ${Zl(t,"oak")}
    <g clip-path="url(#vwin)">
      ${tr(e,n,i)}
      ${rr(e,n,i,560)}
    </g>
    <rect x="152" y="268" width="228" height="292" fill="none" stroke="${t.trim}" stroke-width="12"/>
    <rect x="262" y="268" width="8" height="292" fill="${t.trim}"/>
    <rect x="152" y="410" width="228" height="7" fill="${t.trim}"/>
    <!-- 커튼 -->
    <path d="M132 250 q18 160 0 320 h44 q-16 -160 0 -320z" fill="${F(t.wall,.2)}"/>
    <path d="M400 250 q-18 160 0 320 h-44 q16 -160 0 -320z" fill="${F(t.wall,.2)}"/>
    <!-- 책상 -->
    <rect x="430" y="536" width="176" height="14" rx="4" fill="${t.trim}"/>
    <rect x="442" y="550" width="12" height="150" fill="${F(t.trim,-.2)}"/>
    <rect x="582" y="550" width="12" height="150" fill="${F(t.trim,-.2)}"/>
    <rect x="452" y="486" width="76" height="50" rx="4" fill="#2f3338"/>
    <path d="M556 536 l-10 -44 h40 l-10 44z" fill="${r?"#ffe6b0":"#e6dfd0"}"/>
    <!-- 침대 -->
    <ellipse cx="330" cy="1092" rx="330" ry="52" fill="#000" opacity="0.3" filter="url(#vblur)"/>
    <rect x="60" y="836" width="540" height="40" rx="10" fill="${F(t.trim,-.1)}"/>
    <rect x="40" y="876" width="580" height="180" rx="16" fill="${n==="night"?"#6d6a5e":"#efe9db"}"/>
    <rect x="40" y="876" width="580" height="46" rx="16" fill="${n==="night"?"#82806f":"#fbf7ee"}"/>
    <rect x="90" y="800" width="180" height="70" rx="16" fill="${n==="night"?"#8d8a79":"#fdfaf3"}"/>
    <rect x="300" y="806" width="160" height="64" rx="16" fill="${n==="night"?"#7f7c6c":"#f4efe3"}"/>
    ${r?'<ellipse cx="520" cy="560" rx="260" ry="220" fill="url(#vwarm)" opacity="0.7"/>':""}
    ${it(e,i)}`}function J1(e,n){const t=n==="night"||n==="evening",r=430,i=n==="night"?"#15181e":"#33373e";return`
    ${tr(e,n,r)}
    ${rr(e,n,r,790)}
    <!-- 난간 -->
    <rect x="0" y="690" width="${U}" height="6" fill="${i}"/>
    ${[...Array(13).keys()].map(l=>`<rect x="${12+l*56}" y="690" width="5" height="96" fill="${i}" opacity="0.9"/>`).join("")}
    <rect x="0" y="780" width="${U}" height="6" fill="${i}"/>
    ${Ua(0,786,U,120)}
    <path d="M0 906 L${U} 906 L${U} ${te} L0 ${te} Z" fill="${F(e.deck,-.12)}"/>
    ${[...Array(15).keys()].map(l=>`<path d="M${l*52} 906 L${(l*52-U/2)*1.5+U/2} ${te}" stroke="#00000055" stroke-width="3"/>`).join("")}
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
    ${it(e,r)}`}function em(e,n,t){switch(e){case"yard":return`
        ${tr(n,t,600)}
        ${rr(n,t,600,900)}
        ${pu(n,t)}
        ${hu(n,900)}
        <rect x="286" y="742" width="120" height="34" rx="4" fill="${F(n.deck,-.3)}"/>
        <text x="346" y="766" font-size="21" text-anchor="middle" fill="#f0e2c8" font-family="serif"
              letter-spacing="3">하숙</text>
        ${it(n,600)}`;case"beach":{const i=F(n.grassBottom,t==="night"?-.1:.05);return`
        ${tr(n,t,470)}
        ${rr(n,t,470,812)}
        <!-- 왼쪽 방파제와 등대 -->
        <rect x="0" y="556" width="250" height="16" rx="5" fill="${F(n.wallDark,.16)}" opacity="0.9"/>
        <rect x="236" y="502" width="24" height="62" fill="${F(n.wallLight,-.06)}"/>
        <rect x="233" y="486" width="30" height="18" rx="4" fill="#b8402f"/>
        <circle cx="248" cy="495" r="6" fill="${n.sun}" opacity="${t==="night"?.95:.6}"/>
        <!-- 오른쪽 언덕과 그 위의 집 -->
        <path d="M418 742 C486 664 560 646 640 656 L${U} 668 L${U} 812 L418 812 Z" fill="${i}"/>
        <g transform="translate(452 450) scale(0.3)" opacity="0.96">${pu(n,t)}</g>
        <rect x="400" y="470" width="${U-400}" height="300" fill="${n.haze}" opacity="${(n.hazeAmt*1.6).toFixed(2)}" filter="url(#vblur2)"/>
        ${O1(812)}
        ${it(n,470)}`}case"maru":return W1(n,t);case"kitchen":return K1(n,t);case"hallway":return Y1(n,t);case"room":return X1(n,t);case"rooftop":return J1(n,t);default:{const i=t==="night",l=i?"#0b0d11":"#23262c";return`
        ${tr(n,t,520)}
        ${rr(n,t,520,796)}
        <ellipse cx="372" cy="792" rx="250" ry="34" fill="#000000" opacity="${n.shadow}" filter="url(#vblur)"/>
        <path d="M190 552 L372 404 L554 552 L554 790 L190 790 Z" fill="url(#vwalld)"/>
        <path d="M180 558 L372 396 L564 558 L554 570 L372 420 L190 570 Z" fill="${l}"/>
        <rect x="190" y="552" width="364" height="238" filter="url(#vstucco)" opacity="0.12" style="mix-blend-mode:overlay"/>
        ${Tr(244,606,176,146,t,2)}
        <rect x="452" y="640" width="62" height="150" fill="${F(n.wallDark,i?.12:0)}" stroke="${l}" stroke-width="4"/>
        <circle cx="462" cy="716" r="4" fill="${i?"#ffd89a":"#c8b48a"}"/>
        ${Ua(152,790,440,44)}
        <rect x="152" y="832" width="440" height="52" fill="${F(n.deck,-.44)}"/>
        ${i?'<ellipse cx="332" cy="690" rx="240" ry="150" fill="url(#vwarm)"/>':""}
        ${hu(n,872)}
        ${it(n,520)}`}}}function gu(e,n,t){switch(e){case"yard":case"beach":case"maru":case"annex":case"kitchen":case"hallway":case"room":case"rooftop":return em(e,ph[t],t);case"cvs":return`
        <rect x="0" y="760" width="${U}" height="${te-760}" fill="#6b6b6b"/>
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
        <rect x="0" y="700" width="${U}" height="${te-700}" fill="#5d7a4a"/>
        <rect x="0" y="380" width="${U}" height="330" fill="#8a9c76" opacity="0.5"/>
        <rect x="80" y="300" width="200" height="400" fill="${n.wall}" opacity="0.9"/>
        <rect x="440" y="340" width="200" height="360" fill="${n.wall}" opacity="0.9"/>
        <circle cx="360" cy="520" r="130" fill="#7a4f2a" opacity="0.15"/>
        <circle cx="360" cy="480" r="120" fill="#c9793a" opacity="0.85"/>
        <rect x="350" y="560" width="22" height="150" fill="#5b4330"/>
        <rect x="200" y="840" width="320" height="18" rx="6" fill="${n.wood}"/>
        <rect x="200" y="858" width="320" height="14" rx="4" fill="${n.wood}" opacity="0.8"/>
        <rect x="214" y="872" width="14" height="60" fill="#5a5a5a"/>
        <rect x="492" y="872" width="14" height="60" fill="#5a5a5a"/>`;case"street":return`
        ${zs(t)}
        <rect x="0" y="780" width="${U}" height="${te-780}" fill="#55524c"/>
        <rect x="0" y="360" width="280" height="430" fill="${n.wall}"/>
        <rect x="440" y="320" width="280" height="470" fill="${n.wall}" opacity="0.92"/>
        <rect x="60" y="440" width="70" height="90" fill="#cfe4f2" opacity="0.7"/>
        <rect x="170" y="440" width="70" height="90" fill="#cfe4f2" opacity="0.5"/>
        <rect x="500" y="420" width="70" height="90" fill="#cfe4f2" opacity="0.7"/>
        <rect x="352" y="420" width="16" height="360" fill="#3f3f3f"/>
        <circle cx="360" cy="410" r="30" fill="${n.light}" opacity="0.95"/>
        <ellipse cx="360" cy="470" rx="200" ry="150" fill="url(#lamp)"/>`;case"festival":return`
        ${zs(t)}
        <rect x="0" y="780" width="${U}" height="${te-780}" fill="#4a4a48"/>
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
        <rect x="0" y="800" width="${U}" height="${te-800}" fill="#59575a"/>
        <rect x="0" y="300" width="${U}" height="500" fill="${n.wall}" opacity="0.9"/>
        <rect x="200" y="420" width="320" height="380" rx="8" fill="#2f3a44"/>
        <rect x="230" y="450" width="260" height="60" rx="6" fill="#2f7fbd"/>
        <text x="360" y="494" font-size="34" text-anchor="middle" fill="#ffffff" font-family="sans-serif">역</text>
        <path d="M240 540 h240 M240 600 h240 M240 660 h240" stroke="#59646e" stroke-width="10"/>
        <rect x="60" y="640" width="14" height="160" fill="#3f3f3f"/>
        <circle cx="67" cy="630" r="24" fill="${n.light}" opacity="0.9"/>
        <rect x="646" y="640" width="14" height="160" fill="#3f3f3f"/>
        <circle cx="653" cy="630" r="24" fill="${n.light}" opacity="0.9"/>`}}function nm(e,n){const t=B1[n],r=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${U} ${te}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${A1[e]} ${n}">`;return U1.has(e)?V1(`${r}
  ${R1(ph[n])}
  ${gu(e,t,n)}
</svg>`):`${r}
  ${F1(t)}
  ${gu(e,t,n)}
  <rect width="${U}" height="${te}" fill="#0a0d18" opacity="${t.haze}"/>
</svg>`}function tm(e,n){return`data:image/svg+xml;utf8,${encodeURIComponent(nm(e,n))}`}let ql="classic";function rm(e){ql=e}function Ps(e){return Cl(e,{skin:ql})}function lt({tenant:e,expression:n="normal",outfit:t=0,className:r,style:i}){const l=Ls({tenant:e,expression:n,outfit:t}),o=l;return c.jsx("img",{className:r,style:i,src:o,alt:`${e.name} (${n})`,onError:s=>{const a=s.currentTarget;a.src!==l&&(a.src=l)},draggable:!1})}function Wl({bg:e,time:n}){return c.jsx("div",{className:"bg-layer",style:{backgroundImage:`url("${tm(e,n)}")`}})}function To({card:e,small:n,selectable:t,chosen:r,zone:i,hidden:l,onClick:o}){const s=["card",n?"sm":"",t?"selectable":"",r?"chosen":""].filter(Boolean).join(" ");return c.jsx("img",{className:s,"data-cid":e.id,"data-zone":i??"field","data-month":e.month,style:l?{visibility:"hidden"}:void 0,src:Cl(e,{skin:ql}),alt:e.name,onClick:t?o:void 0,draggable:!1})}function Do({small:e}){return c.jsx("img",{className:`card ${e?"sm":""}`,src:jg({skin:ql}),alt:"뒷면",draggable:!1})}function mu({value:e,max:n,kind:t}){const r=Math.max(0,Math.min(100,e/n*100));return c.jsx("div",{className:`meter ${t??""}`,children:c.jsx("i",{style:{width:`${r}%`}})})}function yu({on:e,onToggle:n}){return c.jsx("button",{className:`switch ${e?"on":""}`,onClick:n,"aria-pressed":e,children:c.jsx("i",{})})}function im(){const e=new Date().getHours();return e<11?"morning":e<18?"evening":"night"}const $h={spring:"봄",summer:"여름",autumn:"가을",winter:"겨울"},lm=[["matchStart","승부 시작"],["go","고"],["stop","스톱"],["ppeok","뻑"],["sseulVictim","쓸 당함"],["win","승리"],["lose","패배"],["affection","호감 이벤트"]];function om({data:e,onBack:n}){const[t,r]=C.useState("profile"),[i,l]=C.useState(En[0]),o=e.tenants[i.id],s=(o?.clearedStage??0)>0||(o?.wins??0)>0;return c.jsx("div",{className:"screen",style:{background:"var(--wood-dark)"},children:c.jsxs("div",{className:"layer",children:[c.jsxs("div",{className:"topbar",children:[c.jsx("button",{className:"iconbtn",onClick:n,"aria-label":"뒤로",children:"←"}),c.jsx("h1",{children:"도감"})]}),c.jsxs("div",{className:"tabs",children:[c.jsx("button",{className:t==="profile"?"active":"",onClick:()=>r("profile"),children:"프로필"}),c.jsx("button",{className:t==="cg"?"active":"",onClick:()=>r("cg"),children:"CG"}),c.jsx("button",{className:t==="lines"?"active":"",onClick:()=>r("lines"),children:"대사"})]}),c.jsx("div",{style:{display:"flex",gap:6,overflowX:"auto",padding:"8px 12px"},children:En.map(a=>c.jsx("button",{className:"btn",style:{padding:"6px 10px",fontSize:12,flex:"0 0 auto",filter:i.id===a.id?"none":"brightness(0.7)"},onClick:()=>l(a),children:a.name},a.id))}),c.jsxs("div",{className:"panel",children:[t==="profile"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"section",style:{display:"flex",gap:12},children:[c.jsx(lt,{tenant:i,expression:"normal",outfit:0,style:{width:96}}),c.jsxs("div",{style:{flex:1,fontSize:13,lineHeight:1.7},children:[c.jsxs("div",{style:{fontSize:18,fontWeight:800},children:[i.name," ",c.jsxs("small",{style:{fontSize:12},children:["“",i.nickname,"”"]})]}),c.jsxs("div",{style:{color:"var(--paper-dim)"},children:[i.age,"세 · ",i.job,c.jsx("br",{}),i.room," · ",$h[i.season],c.jsx("br",{}),i.personality.join(" / ")]})]})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"이 집에 온 이유"}),c.jsx("div",{style:{fontSize:13,lineHeight:1.7,color:"var(--paper)"},children:i.backstory})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"맞고 스타일"}),c.jsx("div",{style:{fontSize:13,lineHeight:1.6},children:i.styleLabel}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"전적"}),c.jsxs("span",{children:[o?.wins??0,"승 ",o?.losses??0,"패"]})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"호감도"}),c.jsxs("span",{children:[o?.affection??0," / 100"]})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"클리어 단계"}),c.jsxs("span",{children:[o?.clearedStage??0," / 10"]})]})]}),c.jsxs("div",{className:"section",children:[c.jsxs("h3",{children:["표정 ",cu.length,"종"]}),c.jsx("div",{className:"expr-grid",children:cu.map(a=>c.jsxs("figure",{children:[c.jsx("img",{src:Ls({tenant:i,expression:a,outfit:0}),alt:a}),c.jsx("figcaption",{children:hh[a]})]},a))})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"의상 3종"}),c.jsx("div",{className:"expr-grid",style:{gridTemplateColumns:"repeat(3, 1fr)"},children:[0,1,2].map(a=>c.jsxs("figure",{children:[c.jsx("img",{src:Ls({tenant:i,expression:"smile",outfit:a}),alt:`의상 ${a}`}),c.jsx("figcaption",{children:["평상복","외출복","특별 이벤트복"][a]})]},a))})]})]}),t==="cg"&&c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"해금 CG"}),c.jsxs("div",{className:"cg-grid",children:[En.map(a=>{const f=`${a.id}_ending`,d=e.unlockedCG.includes(f);return c.jsx("div",{className:`cg-cell ${d?"unlocked":""}`,children:d?c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:800,fontSize:13},children:a.name}),c.jsx("div",{style:{fontSize:10,opacity:.75,marginTop:4},children:a.events[9].title})]}):c.jsx("span",{children:"🔒 10단계 클리어"})},a.id)}),c.jsx("div",{className:`cg-cell ${e.unlockedCG.includes("ending_group")?"unlocked":""}`,children:e.unlockedCG.includes("ending_group")?c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:800,fontSize:13},children:"마루의 단체 사진"}),c.jsx("div",{style:{fontSize:10,opacity:.75,marginTop:4},children:"히든 엔딩"})]}):c.jsx("span",{children:"🔒 전원 10단계"})})]})]}),t==="lines"&&c.jsxs(c.Fragment,{children:[!s&&c.jsxs("div",{className:"empty",children:[i.name,"와(과) 아직 승부한 적이 없습니다.",c.jsx("br",{}),"한 판 이상 치르면 대사가 열립니다."]}),s&&lm.map(([a,f])=>c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:f}),["low","mid","high"].map(d=>{const h=d==="low"||d==="mid"&&(o?.affection??0)>30||d==="high"&&(o?.affection??0)>70;return c.jsxs("div",{style:{marginBottom:8},children:[c.jsx("div",{style:{fontSize:11,color:"var(--lamp-dim)",marginBottom:3},children:{low:"호감 0~30",mid:"호감 31~70",high:"호감 71~100"}[d]}),h?i.lines[a][d].map((p,$)=>c.jsxs("div",{style:{fontSize:12.5,lineHeight:1.6,opacity:.9},children:["· ",p]},$)):c.jsx("div",{style:{fontSize:12,color:"var(--paper-dim)"},children:"🔒 호감도가 더 필요합니다"})]},d)})]},a))]})]})]})})}function sm({data:e,onPick:n,onGallery:t,onShop:r,onSettings:i,onHidden:l,onAllowance:o,allClearedFlag:s}){const a=ch(e),f=im();return c.jsxs("div",{className:"screen",children:[c.jsx(Wl,{bg:"maru",time:f}),c.jsxs("div",{className:"layer",children:[c.jsxs("div",{className:"topbar",children:[c.jsx("h1",{children:"하숙집 마루"}),c.jsxs("span",{className:"points",children:[e.points.toLocaleString()," P"]}),c.jsx("button",{className:"iconbtn",onClick:r,"aria-label":"상점",children:"🏮"}),c.jsx("button",{className:"iconbtn",onClick:t,"aria-label":"도감",children:"📖"}),c.jsx("button",{className:"iconbtn",onClick:i,"aria-label":"설정",children:"⚙"})]}),uh(e)&&c.jsxs("div",{className:"hint-box",children:["포인트가 모자라 승부를 걸 수 없습니다. 포인트는 승부로만 버는 터라 이대로는 진행이 막힙니다.",c.jsxs("button",{className:"btn primary wide",style:{marginTop:10,fontSize:14},onClick:o,children:["할머니 비상금 봉투 찾기 (+",fh,"P)"]})]}),s&&c.jsxs("div",{className:"hint-box",style:{cursor:"pointer"},onClick:l,children:["전원 10단계 클리어! ",c.jsx("strong",{children:"마루의 단체 사진"}),"을 보러 가기 ▸"]}),c.jsx("div",{className:"tenant-list",children:En.map(d=>{const h=e.tenants[d.id]??{affection:0,clearedStage:0,dating:!1},p=Ji(d,a),$=Math.min(10,h.clearedStage+1),S=h.clearedStage>=10,j=lh(d),T=e.points>=j;return c.jsxs("button",{className:`tenant-card ${p?"":"locked"}`,onClick:()=>p&&n(d),disabled:!p,children:[c.jsx(lt,{tenant:d,expression:S?"smile":"normal",outfit:S?2:0}),c.jsxs("div",{className:"tenant-meta",children:[c.jsxs("div",{className:"tenant-name",children:[d.name,c.jsxs("small",{children:[d.nickname," · ",d.age,"세 · ",d.room]}),c.jsx("span",{className:"badge season",children:$h[d.season]}),h.dating&&c.jsx("span",{className:"badge",children:"연애중"})]}),c.jsx("div",{className:"tenant-style",children:d.styleLabel}),p?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"meter-row",children:[c.jsx("span",{style:{width:30},children:"호감"}),c.jsx(mu,{value:h.affection,max:100}),c.jsx("span",{style:{width:28,textAlign:"right"},children:h.affection})]}),c.jsxs("div",{className:"meter-row",children:[c.jsx("span",{style:{width:30},children:"단계"}),c.jsx(mu,{value:h.clearedStage,max:10,kind:"stage"}),c.jsxs("span",{style:{width:28,textAlign:"right"},children:[h.clearedStage,"/10"]})]}),c.jsx("div",{style:{fontSize:10.5,color:"var(--paper-dim)",marginTop:4},children:S?c.jsx(c.Fragment,{children:"모든 단계 클리어 · 커플 모드로 다시 승부"}):c.jsxs(c.Fragment,{children:[$,"단계 · 점당 ",c.jsxs("b",{style:{color:"var(--lamp)"},children:[d.rate,"P"]})," · 클리어 보너스 ",ih(d,$),"P",c.jsx("br",{}),c.jsx("span",{style:{color:T?"var(--paper-dim)":"var(--accent)"},children:T?`최소 ${j.toLocaleString()}P 필요`:`${j.toLocaleString()}P 부족`})]})})]}):c.jsxs("div",{style:{fontSize:11,color:"var(--paper-dim)"},children:["🔒 ",Ig(d)]})]})]},d.id)})})]})]})}const $u={1:"송학",2:"매조",3:"벚꽃",4:"흑싸리",5:"난초",6:"모란",7:"홍싸리",8:"공산",9:"국화",10:"단풍",11:"오동",12:"비"},am={1:[{kind:"gwang",name:"송학 광"},{kind:"tti",tti:"hong",name:"송학 홍단"},{kind:"pi",piValue:1,name:"송학 피"},{kind:"pi",piValue:1,name:"송학 피"}],2:[{kind:"yeol",isGodori:!0,name:"매조 휘파람새"},{kind:"tti",tti:"hong",name:"매조 홍단"},{kind:"pi",piValue:1,name:"매조 피"},{kind:"pi",piValue:1,name:"매조 피"}],3:[{kind:"gwang",name:"벚꽃 광"},{kind:"tti",tti:"hong",name:"벚꽃 홍단"},{kind:"pi",piValue:1,name:"벚꽃 피"},{kind:"pi",piValue:1,name:"벚꽃 피"}],4:[{kind:"yeol",isGodori:!0,name:"흑싸리 두견새"},{kind:"tti",tti:"cho",name:"흑싸리 초단"},{kind:"pi",piValue:1,name:"흑싸리 피"},{kind:"pi",piValue:1,name:"흑싸리 피"}],5:[{kind:"yeol",name:"난초 다리"},{kind:"tti",tti:"cho",name:"난초 초단"},{kind:"pi",piValue:1,name:"난초 피"},{kind:"pi",piValue:1,name:"난초 피"}],6:[{kind:"yeol",name:"모란 나비"},{kind:"tti",tti:"cheong",name:"모란 청단"},{kind:"pi",piValue:1,name:"모란 피"},{kind:"pi",piValue:1,name:"모란 피"}],7:[{kind:"yeol",name:"홍싸리 멧돼지"},{kind:"tti",tti:"cho",name:"홍싸리 초단"},{kind:"pi",piValue:1,name:"홍싸리 피"},{kind:"pi",piValue:1,name:"홍싸리 피"}],8:[{kind:"gwang",name:"공산 광"},{kind:"yeol",isGodori:!0,name:"공산 기러기"},{kind:"pi",piValue:1,name:"공산 피"},{kind:"pi",piValue:1,name:"공산 피"}],9:[{kind:"yeol",isGukjin:!0,name:"국화 국진"},{kind:"tti",tti:"cheong",name:"국화 청단"},{kind:"pi",piValue:1,name:"국화 피"},{kind:"pi",piValue:1,name:"국화 피"}],10:[{kind:"yeol",name:"단풍 사슴"},{kind:"tti",tti:"cheong",name:"단풍 청단"},{kind:"pi",piValue:1,name:"단풍 피"},{kind:"pi",piValue:1,name:"단풍 피"}],11:[{kind:"gwang",name:"오동 광"},{kind:"pi",piValue:2,name:"오동 쌍피"},{kind:"pi",piValue:1,name:"오동 피"},{kind:"pi",piValue:1,name:"오동 피"}],12:[{kind:"gwang",isBiGwang:!0,name:"비광"},{kind:"yeol",name:"비 제비"},{kind:"tti",tti:"bi",name:"비띠"},{kind:"pi",piValue:2,name:"비 쌍피"}]};function vh(){const e=[];for(let n=1;n<=12;n++)am[n].forEach((t,r)=>{e.push({id:`m${n}-${r}`,month:n,kind:t.kind,tti:t.tti,isBiGwang:t.isBiGwang,isGodori:t.isGodori,isGukjin:t.isGukjin,piValue:t.piValue,name:t.name})});return e}function cm(e){const n=[];for(let t=0;t<e.bonusPiCount;t++)n.push({id:`bonus-${t}`,month:0,kind:"pi",piValue:e.bonusPiValue,isBonus:!0,name:`보너스 ${e.bonusPiValue}피`});return n}function um(e){return[...vh(),...cm(e)]}const Ai=e=>e==="pile-me"||e==="pile-opp",Bi=300,vu=1e3,fm=440,dm=220,wu=900,hm=300,xu=1200,Fi=2e3,Ri=.45,pm=1280;function _r(e,n,t=60){const r=e.closest(".fslot")??e,i=r.style.zIndex;r.style.zIndex=String(t);const l=()=>{r.style.zIndex=i};n.addEventListener("finish",l),n.addEventListener("cancel",l)}function gm(e){const n=new Map;return e.querySelectorAll("[data-cid]").forEach(t=>{const r=t.dataset.cid;r&&(n.has(r)||n.set(r,{rect:t.getBoundingClientRect(),el:t,zone:t.dataset.zone??"field"}))}),n}const mm=220;function ym(e,n,t=!0,r,i){const l=C.useRef(null),o=C.useRef(new Map),s=C.useRef(0),a=C.useCallback((f,d)=>{o.current.set(f,d)},[]);return C.useLayoutEffect(()=>{const f=e.current;if(!f)return;const d=gm(f),h=l.current;if(l.current=new Map([...d].map(([k,_])=>[k,{rect:_.rect,zone:_.zone}])),!h||!t||typeof f.animate!="function")return;const p=f.querySelector("[data-deck]")?.getBoundingClientRect()??null,$=f.getBoundingClientRect(),S=[...d.keys()].some(k=>!o.current.has(k)&&!h.has(k)),j=new Map,T=new Map;for(const[k,_]of d){if(o.current.has(k)||h.has(k)||!Ai(_.zone))continue;const w=_.el.dataset.month;for(const[x,L]of d){if(x===k||L.zone!==_.zone||L.el.dataset.month!==w)continue;const z=h.get(x);if(!(!z||z.zone!=="field")){j.set(k,z.rect),T.set(x,Fi*Ri+220);break}}}let m=0,g=0;const y=(k,_)=>{g=Math.max(g,k+_)},v=[];for(const[k,{rect:_,el:w,zone:x}]of d){const L=o.current.get(k);o.current.delete(k);const z=L?{rect:L,zone:"field"}:h.get(k),G=z?.rect??p;if(!G||_.width===0)continue;const X=G.left-_.left,J=G.top-_.top,de=G.width/_.width,De=!z;if(!(De||z.zone!==x)){if(Math.abs(X)<3&&Math.abs(J)<3)continue;w.animate([{transform:`translate(${X.toFixed(1)}px, ${J.toFixed(1)}px)`},{transform:"none"}],{duration:200,easing:"cubic-bezier(.3,0,.2,1)",fill:"backwards"}),y(0,200);continue}if(Math.abs(X)<2&&Math.abs(J)<2&&Math.abs(de-1)<.03)continue;const Oe=`translate(${X.toFixed(1)}px, ${J.toFixed(1)}px) scale(${de.toFixed(3)})`;if(De){const I=$.left+$.width/2-_.width/2-_.left,W=$.top+$.height*.34-_.height/2-_.top,B=`translate(${I.toFixed(1)}px, ${W.toFixed(1)}px)`,O=j.get(k);if(O){const Ce=O.left+O.width/2-_.width/2-_.left,K=O.top+O.height/2-_.height/2-_.top,we=`translate(${Ce.toFixed(1)}px, ${K.toFixed(1)}px)`,Qa=w.animate([{transform:`${Oe} rotateY(90deg)`,offset:0,easing:"cubic-bezier(.25,.9,.3,1)"},{transform:`${B} scale(2.05) rotateY(66deg)`,offset:.18},{transform:`${B} scale(2.2) rotateY(0deg)`,offset:.3,easing:"linear"},{transform:`${B} scale(2.15)`,offset:.36,easing:"cubic-bezier(.75,0,.9,.55)"},{transform:`${we} scale(1.1) rotate(3deg)`,offset:Ri},{transform:`${we} scale(1) rotate(0deg)`,offset:Ri+.06,easing:"ease-out"},{transform:`${we} scale(1)`,offset:.66,easing:"cubic-bezier(.45,0,.2,1)"},{transform:"none",offset:1}],{duration:Fi,fill:"backwards"});_r(w,Qa,80),i?.(O,Fi*Ri),y(0,Fi);continue}const re=w.animate([{transform:`${Oe} rotateY(90deg)`,offset:0,easing:"cubic-bezier(.25,.9,.3,1)"},{transform:`${B} scale(2.05) rotateY(66deg)`,offset:.3},{transform:`${B} scale(2.2) rotateY(0deg)`,offset:.5,easing:"linear"},{transform:`${B} translateY(-5px) scale(2.15)`,offset:.7,easing:"cubic-bezier(.6,0,.9,.5)"},{transform:"none",offset:1,easing:"cubic-bezier(.3,1.35,.45,1)"}],{duration:xu,fill:"backwards"});_r(w,re,80),y(0,xu);continue}if(Ai(x)&&z&&Ai(z.zone)&&z.zone!==x){v.push({el:w,dx:X,dy:J,sc:de});continue}if(Ai(x)){const I=T.get(k),W=I??(S?pm:fm)+m*dm;I===void 0&&(m+=1);const B=w.animate([{transform:Oe,offset:0},{transform:`${Oe} scale(1.24)`,offset:.1,easing:"ease-out"},{transform:`${Oe} scale(1.12)`,offset:.22,easing:"cubic-bezier(.5,0,.5,1)"},{transform:`translate(${(X*.22).toFixed(1)}px, ${(J*.22).toFixed(1)}px) scale(${(de*.55+.45).toFixed(3)})`,offset:.62,easing:"cubic-bezier(.4,0,.5,1)"},{transform:"none",offset:1,easing:"cubic-bezier(.45,0,.2,1)"}],{duration:vu,delay:W,fill:"backwards"});_r(w,B,55),y(W,vu);continue}const E=De?0:X>0?-14:14,R=w.animate([{transform:`${Oe} rotate(${E}deg)${De?" rotateY(88deg)":""}`,offset:0,easing:"cubic-bezier(.22,.9,.3,1)"},{transform:`translate(0,0) scale(1.09) rotate(${E*.18}deg)`,offset:.72},{transform:"none",offset:1,easing:"cubic-bezier(.3,1.6,.4,1)"}],{duration:De?Bi+60:Bi,fill:"backwards"});_r(w,R,45),y(0,De?Bi+60:Bi)}if(v.length){const k=g+hm;v.forEach((_,w)=>{const x=`translate(${_.dx.toFixed(1)}px, ${_.dy.toFixed(1)}px) scale(${_.sc.toFixed(3)})`,L=_.el.animate([{transform:x,offset:0},{transform:`${x} scale(1.9) rotate(-10deg)`,offset:.2,easing:"cubic-bezier(.2,.9,.3,1)"},{transform:`translate(${(_.dx*.45).toFixed(1)}px, ${(_.dy*.45-34).toFixed(1)}px) scale(2)`,offset:.5,easing:"cubic-bezier(.5,0,.4,1)"},{transform:"scale(1.5)",offset:.78,easing:"cubic-bezier(.4,0,.2,1)"},{transform:"none",offset:1}],{duration:wu,delay:k+w*180,fill:"backwards"});_r(_.el,L,70),y(k+w*180,wu)})}if(g>0){const k=g+mm;s.current=performance.now()+k,r?.(k)}},n),{setOrigin:a,busyUntil:s}}function wh(e){let n=e>>>0;const t=()=>{n|=0,n=n+1831565813|0;let i=Math.imul(n^n>>>15,1|n);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return{next:t,int:i=>Math.floor(t()*i),pick:i=>i[Math.floor(t()*i.length)],shuffle:i=>{const l=[...i];for(let o=l.length-1;o>0;o--){const s=Math.floor(t()*(o+1));[l[o],l[s]]=[l[s],l[o]]}return l}}}function $m(){return(Date.now()^Math.floor(Math.random()*4294967295))>>>0}function xh(e,n){const t={gwang:[],yeol:[],tti:[],pi:[]};for(const r of e){if(r.isGukjin&&n){t.pi.push(r);continue}switch(r.kind){case"gwang":t.gwang.push(r);break;case"yeol":t.yeol.push(r);break;case"tti":t.tti.push(r);break;case"pi":t.pi.push(r);break}}return t}function kh(e,n){return e.reduce((t,r)=>r.isGukjin?t+(n?2:0):t+(r.piValue??1),0)}function vm(e,n){const t=e.length;return t>=5?{score:15,label:"오광"}:t===4?{score:4,label:"사광"}:t===3?e.some(i=>i.isBiGwang)&&n.biGwangPenalty?{score:2,label:"비삼광"}:{score:3,label:"삼광"}:{score:0,label:null}}function wm(e,n){const t=[];let r=0;const i=e.filter(a=>a.tti==="hong").length,l=e.filter(a=>a.tti==="cheong").length,o=e.filter(a=>a.tti==="cho").length;i>=3&&(r+=3,t.push("홍단")),l>=3&&(r+=3,t.push("청단")),o>=3&&(r+=3,t.push("초단"));const s=e.length;return n.ttiScoring==="standard"?s>=5&&(r+=s-4,t.push(`띠 ${s}장`)):s>=5&&(r+=5+(s-5),t.push(`띠 ${s}장`)),{score:r,labels:t}}function xm(e){const n=[];let t=0;e.filter(l=>l.isGodori).length>=3&&(t+=5,n.push("고도리"));const i=e.length;return i>=5&&(t+=i-4,n.push(`열끗 ${i}장`)),{score:t,labels:n}}function km(e,n){const t=kh(e,n);return{score:t>=10?t-9:0,count:t}}function Sm(e){const n=new Map;for(const t of e)t.month!==0&&n.set(t.month,(n.get(t.month)??0)+1);for(const[t,r]of n)if(r>=4)return t;return null}function Sh(e){const n=new Map;for(const t of e)t.month!==0&&n.set(t.month,(n.get(t.month)??0)+1);return[...n.entries()].filter(([,t])=>t===3).map(([t])=>t)}function ct(e,n){const t=n.gukjinOption&&e.gukjinUse==="ssangpi",r=xh([...e.captured.gwang,...e.captured.yeol,...e.captured.tti,...e.captured.pi],t),i=vm(r.gwang,n),l=wm(r.tti,n),o=xm(r.yeol),s=km(r.pi,t),a=i.score+l.score+o.score+s.score;return{gwangScore:i.score,gwangLabel:i.label,ttiScore:l.score,ttiLabels:l.labels,yeolScore:o.score,yeolLabels:o.labels,piScore:s.score,piCount:s.count,base:a,chongtong:null}}function bm(e,n,t,r=1){const i=e[n],l=e[n===0?1:0],o=ct(i,t);ct(l,t);const s=[];let a=0,f=1;const d=i.goCount;d>=1&&(a+=1),d>=2&&(a+=1),d>=1&&s.push(`${d}고`),t.goMultiplierFrom3&&d>=3&&(f*=Math.pow(2,d-2),s.push(`고 배수 x${Math.pow(2,d-2)}`));let h=o.base+a;const p=t.gukjinOption&&l.gukjinUse==="ssangpi",$=kh(xh([...l.captured.pi],p).pi,p);return t.piBak&&o.piScore>0&&$<=t.piBakThreshold&&(f*=2,s.push("피박")),t.gwangBak&&o.gwangScore>0&&l.captured.gwang.length===0&&(f*=2,s.push("광박")),t.mengBak&&i.captured.yeol.length>=t.mengBakYeolThreshold&&l.captured.yeol.length===0&&(f*=2,s.push("멍박")),t.heundeulgi&&i.shaken.length>0&&(f*=Math.pow(2,i.shaken.length),s.push(`흔들기 x${Math.pow(2,i.shaken.length)}`)),t.bomb&&i.bombCount>0&&(f*=Math.pow(2,i.bombCount),s.push(`폭탄 x${Math.pow(2,i.bombCount)}`)),t.goBak&&l.goCount>0&&(f*=2,s.push("고박")),r>1&&(f*=r,s.push(`나가리 x${r}`)),h=h*f,{winner:n,breakdown:o,base:o.base,goCount:d,goBonus:a,multiplier:f,reasons:s,total:h}}function Cm(e,n,t,r=1){return{winner:e,breakdown:null,base:10,goCount:0,goBonus:0,multiplier:r,reasons:[`총통 (${n}월)`],total:10*r}}function bh(){return{winner:null,breakdown:null,base:0,goCount:0,goBonus:0,multiplier:1,reasons:["나가리"],total:0}}const Ch={ttiScoring:"standard",ttadakSameMonth:!0,biGwangPenalty:!0,goMultiplierFrom3:!0,piBak:!0,gwangBak:!0,mengBak:!0,goBak:!0,heundeulgi:!0,bomb:!0,chongtong:!0,nagariDouble:!0,bonusPiCount:2,bonusPiValue:2,gukjinOption:!0,minScoreToStop:7,mengBakYeolThreshold:7,piBakThreshold:5},jh=e=>e===0?1:0;function _h(e,n){const t=jh(n);e.players[t].hand.length>0?e.turn=t:e.players[n].hand.length>0?e.turn=n:e.turn=t,e.phase="awaitPlay",e.turnCtx=null}function ku(){return{hand:[],captured:{gwang:[],yeol:[],tti:[],pi:[]},goCount:0,shaken:[],bombCount:0,gukjinUse:"yeol",scoreAtLastGo:0}}function Su(e){return{...e,hand:[...e.hand],captured:{gwang:[...e.captured.gwang],yeol:[...e.captured.yeol],tti:[...e.captured.tti],pi:[...e.captured.pi]},shaken:[...e.shaken]}}function mr(e){return{...e,deck:[...e.deck],field:[...e.field],players:[Su(e.players[0]),Su(e.players[1])],events:[...e.events],ppeokPiles:{...e.ppeokPiles},turnCtx:e.turnCtx?{...e.turnCtx}:null,log:[...e.log]}}function Nh(e,n){for(const t of n){if(t.isGukjin){e.captured.yeol.push(t);continue}switch(t.kind){case"gwang":e.captured.gwang.push(t);break;case"yeol":e.captured.yeol.push(t);break;case"tti":e.captured.tti.push(t);break;case"pi":e.captured.pi.push(t);break}}}function dr(e,n,t){const r=e.players[jh(n)];if(r.captured.pi.length===0){e.log.push(`P${n} ${t} (상대 피 없음)`);return}const l=[...r.captured.pi].sort((o,s)=>(o.piValue??1)-(s.piValue??1))[0];r.captured.pi=r.captured.pi.filter(o=>o.id!==l.id),e.players[n].captured.pi.push(l),e.events.push({type:"steal",player:n,detail:t}),e.log.push(`P${n} ${t} -> 피 1장 상납`)}function jm(e){const n={...Ch,...e?.rules??{}},t=wh(e?.seed??12345);let r=t.shuffle(um(n));const i=(f,d)=>{const h=[],p=[];for(;h.length<f&&r.length>0;){const $=r.shift();if(d&&$.isBonus){p.push($);continue}h.push($)}return p.length&&(r=t.shuffle([...r,...p])),h},l=i(10,!1),o=i(10,!1),s=i(8,!0),a={rules:n,deck:r,field:s,players:[ku(),ku()],turn:e?.firstPlayer??0,phase:"awaitPlay",events:[],ppeokPiles:{},pendingChoice:null,turnCtx:null,settlement:null,roundMultiplier:e?.roundMultiplier??1,turnCount:0,log:[]};if(a.players[0].hand=l,a.players[1].hand=o,n.chongtong)for(const f of[0,1]){const d=Sm(a.players[f].hand);if(d!==null)return a.phase="ended",a.settlement=Cm(f,d,n,a.roundMultiplier),a.events.push({type:"chongtong",player:f,detail:`${d}월`}),a.log.push(`P${f} 총통 (${d}월)`),a}return a}function Ts(e,n){return e.rules.heundeulgi?Sh(e.players[n].hand).filter(t=>!e.players[n].shaken.includes(t)):[]}function bu(e,n,t){if(!Ts(e,n).includes(t))return e;const r=mr(e);return r.players[n].shaken.push(t),r.events.push({type:"heundeulgi",player:n,detail:`${t}월`}),r.log.push(`P${n} 흔들기 (${t}월)`),r}function Ga(e,n){return e.rules.bomb?Sh(e.players[n].hand).filter(t=>e.field.some(r=>r.month===t)):[]}function Ds(e,n){return n===0?[]:e.field.filter(t=>t.month===n)}function Cu(e,n,t=!1){if(e.phase!=="awaitPlay")return e;const r=mr(e),i=r.turn,l=r.players[i],o=l.hand.findIndex(h=>h.id===n);if(o<0)return e;const s=l.hand[o];r.events=[];const a={player:i,playedCard:s,bombCards:[],playedWentToField:!1,fromHandCapture:[],flipCard:null,fromFlipCapture:[],ppeok:!1,bonusFlips:[],stage:"hand"};if(r.turnCtx=a,r.turnCount++,t&&r.rules.bomb&&Ga(r,i).includes(s.month)){const h=l.hand.filter($=>$.month===s.month);l.hand=l.hand.filter($=>$.month!==s.month),a.playedCard=h[0],a.bombCards=h.slice(1),l.bombCount++,r.events.push({type:"bomb",player:i,detail:`${s.month}월`}),r.log.push(`P${i} 폭탄 (${s.month}월)`);const p=r.field.filter($=>$.month===s.month);return r.field=r.field.filter($=>$.month!==s.month),a.fromHandCapture=[...h,...p],delete r.ppeokPiles[s.month],dr(r,i,"폭탄"),Dr(r)}if(l.hand.splice(o,1),s.isBonus){const h=[s];let p=r.deck.shift();for(;p?.isBonus;)h.push(p),p=r.deck.shift();return p&&l.hand.push(p),a.bonusFlips=h,r.events.push({type:"bonus",player:i,detail:`${h.length}장`}),r.log.push(`P${i} 보너스패 ${h.length}장`),l.hand.length===0||r.deck.length===0?Vn(r):(Nh(l,h),r.turnCtx=null,r.phase="awaitPlay",r.turn=i,r)}const f=Ds(r,s.month);if(f.length===0)return r.field.push(s),a.playedWentToField=!0,Dr(r);if(f.length===1)return r.field=r.field.filter(h=>h.id!==f[0].id),a.fromHandCapture=[s,f[0]],Dr(r);if(f.length===2)return r.phase="awaitChoice",r.pendingChoice={played:s,candidates:f,source:"hand"},r;r.field=r.field.filter(h=>h.month!==s.month),a.fromHandCapture=[s,...f];const d=r.ppeokPiles[s.month];return d!==void 0&&(delete r.ppeokPiles[s.month],dr(r,i,d===i?"자뻑 회수":"뻑 회수")),Dr(r)}function ju(e,n){if(e.phase!=="awaitChoice"||!e.pendingChoice||!e.turnCtx)return e;const t=mr(e),r=t.pendingChoice,i=r.candidates.find(l=>l.id===n)??r.candidates[0];return t.field=t.field.filter(l=>l.id!==i.id),t.pendingChoice=null,t.phase="awaitPlay",r.source==="hand"?(t.turnCtx.fromHandCapture=[r.played,i],Dr(t)):(t.turnCtx.fromFlipCapture=[r.played,i],Vn(t))}function Dr(e){const n=e.turnCtx;n.stage="flip";const t=n.player;let r;for(;r=e.deck.shift(),!!r;){if(r.isBonus){n.bonusFlips.push(r);continue}break}if(!r)return n.flipCard=null,Vn(e);const i=r;if(n.flipCard=i,n.fromHandCapture.length===2&&n.fromHandCapture[0].month===i.month&&n.bombCards.length===0&&e.field.every(s=>s.month!==i.month)){e.field.push(...n.fromHandCapture,i),n.fromHandCapture=[],n.ppeok=!0;const s=e.ppeokPiles[i.month];return e.ppeokPiles[i.month]=t,e.events.push({type:s===t?"jappeok":"ppeok",player:t,detail:`${i.month}월`}),e.log.push(`P${t} ${s===t?"자뻑":"뻑"} (${i.month}월)`),Vn(e)}if(n.playedWentToField&&n.playedCard&&n.playedCard.month===i.month){const s=e.field.filter(a=>a.month===i.month);return e.field=e.field.filter(a=>a.month!==i.month),n.fromFlipCapture=[i,...s],n.playedWentToField=!1,e.events.push({type:"jjok",player:t,detail:`${i.month}월`}),e.log.push(`P${t} 쪽 (${i.month}월)`),dr(e,t,"쪽"),Vn(e)}const l=e.field.filter(s=>s.month===i.month);if(l.length===0)return e.field.push(i),Vn(e);if(l.length===1)return e.field=e.field.filter(s=>s.id!==l[0].id),n.fromFlipCapture=[i,l[0]],Vn(e);if(l.length===2)return e.phase="awaitChoice",e.pendingChoice={played:i,candidates:l,source:"deck"},e;e.field=e.field.filter(s=>s.month!==i.month),n.fromFlipCapture=[i,...l];const o=e.ppeokPiles[i.month];return o!==void 0&&(delete e.ppeokPiles[i.month],dr(e,t,o===t?"자뻑 회수":"뻑 회수")),Vn(e)}function Vn(e){const n=e.turnCtx,t=n.player,r=e.players[t],i=[...n.fromHandCapture,...n.fromFlipCapture,...n.bonusFlips];Nh(r,i);const l=n.fromHandCapture.length>=2&&n.fromFlipCapture.length>=2,o=l&&n.fromHandCapture[0].month===n.fromFlipCapture[0].month;if(n.bombCards.length===0&&l&&(!e.rules.ttadakSameMonth||o)){const h=n.fromHandCapture[0].month,p=n.fromHandCapture.length+n.fromFlipCapture.length;e.events.push({type:"ttadak",player:t,detail:o?`${h}월 ${p}장을 한 턴에`:`${p}장을 한 턴에`}),e.log.push(`P${t} 따닥`),dr(e,t,"따닥")}e.field.length===0&&i.length>0&&(e.events.push({type:"sseul",player:t}),e.log.push(`P${t} 쓸`),dr(e,t,"쓸")),n.stage="done";const a=ct(r,e.rules),f=a.base>=e.rules.minScoreToStop&&a.base>r.scoreAtLastGo,d=e.players[0].hand.length===0&&e.players[1].hand.length===0;return f?(e.phase="awaitGoStop",e):d||e.deck.length===0?(e.phase="ended",e.settlement=bh(),e.events.push({type:"nagari",player:t}),e.log.push("나가리"),e):(_h(e,t),e)}function _u(e){if(e.phase!=="awaitGoStop")return e;const n=mr(e),t=n.turn,r=n.players[t];return r.goCount++,r.scoreAtLastGo=ct(r,n.rules).base,n.events.push({type:"go",player:t,detail:`${r.goCount}고`}),n.log.push(`P${t} ${r.goCount}고`),n.players[0].hand.length===0&&n.players[1].hand.length===0||n.deck.length===0?(n.phase="ended",n.settlement=bh(),n.log.push("나가리 (고 후 패 소진)"),n):(_h(n,t),n)}function Nu(e){if(e.phase!=="awaitGoStop")return e;const n=mr(e),t=n.turn;return n.phase="ended",n.settlement=bm(n.players,t,n.rules,n.roundMultiplier),n.events.push({type:"stop",player:t}),n.log.push(`P${t} 스톱 -> ${n.settlement.total}점`),n}function Eu(e,n,t){const r=mr(e);return r.players[n].gukjinUse=t,r}function Eh(e,n){return ct(e.players[n],e.rules).base}const Va={goRate:.3,preference:{gwang:.25,yeol:.25,tti:.25,pi:.25},samples:0};function _m(e,n){const t=n.weights;if(e.kind==="gwang")return(e.isBiGwang?7:10)*t.gwang;if(e.isGukjin)return 4.5*Math.max(t.yeol,t.pi);if(e.kind==="yeol")return(e.isGodori?5.5*t.godori:3)*t.yeol;if(e.kind==="tti"){const r=e.tti==="hong"?t.hongdan:e.tti==="cheong"?t.cheongdan:e.tti==="cho"?t.chodan:.6;return 3.5*t.tti*r}return(e.piValue??1)*1.2*t.pi}function Je(e,n,t,r){const i=e.players[n].captured;let l=_m(t,r);if(t.kind==="gwang"){const o=i.gwang.length;o===2&&(l+=12),o>=3&&(l+=8)}if(t.isGodori&&i.yeol.filter(s=>s.isGodori).length===2&&(l+=10),t.kind==="tti"&&t.tti&&t.tti!=="bi"){const o=i.tti.filter(s=>s.tti===t.tti).length;o===2?l+=9:o===1&&(l+=2)}return t.kind==="pi"&&i.pi.reduce((s,a)=>s+(a.piValue??1),0)>=8&&(l+=3*(t.piValue??1)),t.kind==="yeol"&&i.yeol.length>=4&&(l+=3),l}function Nm(e,n,t,r){const i=r.inference;return Je(e,n,t,r)*i*.45}function Em(e,n,t,r=Va){const i=e.turn,l=i===0?1:0,o=e.players[i].hand;if(o.length===0)return{cardId:"",bomb:!1,score:0};if(t.next()<n.mistakeRate)return{cardId:t.pick(o).id,bomb:!1,score:0};const s=n.aggression>.45?Ga(e,i):[],a=Mm(e,i);let f={cardId:o[0].id,bomb:!1,score:-1/0};for(const d of o){const h=Ds(e,d.month);let p=0;if(h.length===0){p-=Nm(e,l,d,n),p-=Je(e,i,d,n)*.25;const $=Mu(e,i,d.month);p+=$/Math.max(1,a)*6*n.inference}else if(h.length===1){p+=Je(e,i,d,n)+Je(e,i,h[0],n),p+=Je(e,l,h[0],n)*n.inference*.5;const $=Mu(e,i,d.month);p-=$/Math.max(1,a)*9*n.inference}else{const $=[...h].sort((S,j)=>Je(e,i,j,n)-Je(e,i,S,n));p+=Je(e,i,d,n)+Je(e,i,$[0],n),p+=Je(e,l,$[0],n)*n.inference*.5,h.length>=3&&(p+=8)}n.patternLearning>0&&(p-=Lm(d,r)*n.patternLearning*4),p>f.score&&(f={cardId:d.id,bomb:!1,score:p})}for(const d of s){const p=Ds(e,d).reduce(($,S)=>$+Je(e,i,S,n),0)+10*n.aggression;p>f.score&&(f={cardId:e.players[i].hand.find(S=>S.month===d).id,bomb:!0,score:p})}return f}function Mm(e,n){const t=n===0?1:0;return e.deck.length+e.players[t].hand.length}function Mu(e,n,t){if(t===0)return 0;const r=e.players[n].hand.filter(i=>i.month===t).length+e.field.filter(i=>i.month===t).length+[...e.players[0].captured.gwang,...e.players[0].captured.yeol,...e.players[0].captured.tti,...e.players[0].captured.pi,...e.players[1].captured.gwang,...e.players[1].captured.yeol,...e.players[1].captured.tti,...e.players[1].captured.pi].filter(i=>i.month===t).length;return Math.max(0,4-r)}function Lm(e,n){if(n.samples<3)return 0;const t=n.preference;return e.kind==="gwang"?t.gwang:e.kind==="yeol"?t.yeol:e.kind==="tti"?t.tti:t.pi}function zm(e,n,t){const r=e.pendingChoice?.candidates??[];if(r.length===0)return"";if(t.next()<n.mistakeRate)return t.pick(r).id;const i=e.turn;return[...r].sort((l,o)=>Je(e,i,o,n)-Je(e,i,l,n))[0].id}function Pm(e,n,t,r=Va){const i=e.turn,l=i===0?1:0,o=Eh(e,i),s=ct(e.players[l],e.rules).base,a=e.players[i].hand.length;if(t.next()<n.mistakeRate)return{action:t.next()<n.greed?"go":"stop",confidence:.2};if(o>=n.stopScore)return{action:"stop",confidence:.9};if(s>=e.rules.minScoreToStop-2)return{action:"stop",confidence:.85};if(a<=1)return{action:"stop",confidence:.8};const f=a*.55*(.6+n.greed),d=s/Math.max(1,e.rules.minScoreToStop)*(1.4-n.inference),h=(r.goRate-.3)*n.patternLearning;let p=0;if(n.inference>.2){const j=e.players[l].captured,T=j.pi.reduce((g,y)=>g+(y.piValue??1),0),m=ct(e.players[i],e.rules);e.rules.piBak&&T<=e.rules.piBakThreshold+2&&m.piScore>0&&(p+=2.2),e.rules.gwangBak&&j.gwang.length===0&&m.gwangScore>0&&(p+=1.8),p*=n.inference}const $=f+p-d*1.6+h;return{action:$>0?"go":"stop",confidence:Math.min(1,Math.abs($)/3)}}function Tm(e,n){const t=e.turn,r=e.players[t].captured,i=r.yeol.length,l=r.pi.reduce((a,f)=>a+(f.piValue??1),0),o=i>=5?1+(i-5):0,s=l+2>=10?l+2-9:0;return s>o?"ssangpi":o>s?"yeol":n.weights.pi>=n.weights.yeol?"ssangpi":"yeol"}const He=0,mn=1,Is=1550,Lu=420,Dm={jjok:"낸 패가 깔리자마자 뒤집은 패가 같은 월 — 둘 다 가져갑니다",ttadak:"같은 월 네 장을 한 턴에 — 상대 피 한 장을 받습니다",ppeok:"세 장이 묶여 바닥에 남습니다. 나중에 먹는 사람이 임자",jappeok:"내가 깔아둔 뻑을 내가 또 만들었습니다",sseul:"바닥을 싹 비웠습니다 — 상대 피 한 장을 받습니다",bomb:"같은 월을 한 번에 몰아냈습니다",chongtong:"한 월 네 장이 처음부터 손에 있었습니다"},Im={jjok:"쪽!",ttadak:"따닥!",ppeok:"뻑!",jappeok:"자뻑!",sseul:"쓸!",bomb:"폭탄!",heundeulgi:"흔들기!",chongtong:"총통!",go:"고!",stop:"스톱!"};function Am(e,n){for(const t of e){if(t.type==="ppeok"||t.type==="jappeok")return t.player===n?"sulk":"smile";if(t.type==="sseul"||t.type==="ttadak"||t.type==="jjok")return t.player===n?"smile":"surprise";if(t.type==="bomb"||t.type==="heundeulgi")return t.player===n?"serious":"surprise"}return"normal"}function gt(e,n){return e[Math.floor(n()*e.length)]??e[0]}function Bm(e){const{tenant:n,stage:t,affection:r,losingStreak:i}=e,l=rh(r),o=C.useMemo(()=>Dg(n,t),[n,t]),s=C.useMemo(()=>e.seed??$m(),[e.seed]),a=C.useRef(wh(s^2654435769)),f=C.useCallback(()=>a.current.next(),[]),[d,h]=C.useState(()=>jm({rules:e.rules,seed:s,firstPlayer:He})),[p,$]=C.useState(()=>gt(n.lines.matchStart[l],Math.random)),[S,j]=C.useState("normal"),[T,m]=C.useState(null),[g,y]=C.useState(null),[v,k]=C.useState(null),_=C.useRef(0),[w,x]=C.useState(!1),L=C.useRef(0),z=C.useRef([]),G=e.profile??Va,X=C.useCallback((B,O)=>{const re=window.setTimeout(B,O);z.current.push(re)},[]);C.useEffect(()=>()=>{z.current.forEach(clearTimeout),z.current=[]},[]);const J=C.useCallback((B,O,re)=>{L.current++,m({key:L.current,text:B,by:O,detail:re})},[]),de=C.useCallback(B=>{const O=B.events;j(Am(O,mn));for(const K of O){const we=Im[K.type];if(we){J(we,K.player,K.detail??Dm[K.type]);break}}const re=O.find(K=>(K.type==="ppeok"||K.type==="jappeok")&&K.player===mn),Ce=O.find(K=>K.type==="sseul"&&K.player===He);re?$(gt(n.lines.ppeok[l],f)):Ce&&$(gt(n.lines.sseulVictim[l],f))},[J,f,n,l]),De=C.useCallback(B=>{const O=e.busyUntil?.current??0;return Math.max(B,O-performance.now()+B*.35)},[e.busyUntil]);C.useEffect(()=>{if(d.phase==="ended")return;if(!(d.turn===mn)){x(!1);return}if(x(!0),d.phase==="awaitPlay"){X(()=>{let O=d;const re=Ts(O,mn);re.length>0&&f()<o.aggression&&(O=bu(O,mn,re[0]),J("흔들기!",mn)),O=Eu(O,mn,Tm(O,o));const Ce=Em(O,o,a.current,G);if(!Ce.cardId)return;const K=O.players[mn].hand.find(we=>we.id===Ce.cardId);K&&(_.current+=1,k({key:_.current,card:K,bomb:Ce.bomb}),X(()=>{const we=Cu(O,Ce.cardId,Ce.bomb);de(we),k(null),h(we)},Is))},De(Lu));return}if(d.phase==="awaitChoice"){X(()=>{const O=ju(d,zm(d,o,a.current));de(O),h(O)},De(Lu));return}d.phase==="awaitGoStop"&&X(()=>{const O=Pm(d,o,a.current,G),re=O.action==="go"?n.lines.go[l]:n.lines.stop[l],Ce=gt(re,f);y({action:O.action,line:Ce}),j(O.action==="go"?"serious":"win"),X(()=>{y(null);const K=O.action==="go"?_u(d):Nu(d);J(O.action==="go"?"고!":"스톱!",mn),h(K)},1600)},De(500))},[d,o,G,n,l,X,de,J,f,De]),C.useEffect(()=>{if(d.phase!=="ended"||!d.settlement)return;const B=d.settlement.winner;B===mn?($(gt(n.lines.win[l],f)),j("win")):B===He?($(gt(n.lines.lose[l],f)),j("lose")):($("나가리네. 다시 하자."),j("normal"))},[d.phase,d.settlement,n,l,f]);const Xe=C.useCallback((B,O=!1)=>{if(d.turn!==He||d.phase!=="awaitPlay")return;const re=Cu(d,B,O);de(re),h(re)},[d,de]),Oe=C.useCallback(B=>{if(d.phase!=="awaitChoice"||d.turn!==He)return;const O=ju(d,B);de(O),h(O)},[d,de]),E=C.useCallback(B=>{d.phase!=="awaitGoStop"||d.turn!==He||(J(B==="go"?"고!":"스톱!",He),h(B==="go"?_u(d):Nu(d)))},[d,J]),R=C.useCallback(B=>{h(bu(d,He,B)),J("흔들기!",He)},[d,J]),I=C.useCallback(B=>h(Eu(d,He,B)),[d]);return{view:{state:d,line:p,expression:S,shout:T,askGoStop:d.phase==="awaitGoStop"&&d.turn===He,aiGoStop:g,hint:i>=3?gt(n.lines.hints,()=>.5):null,aiThrow:v,myScore:Eh(d,He),oppScore:ct(d.players[mn],d.rules).base,busy:w},play:Xe,choose:Oe,goStop:E,shake:R,setGukjin:I,shakeable:Ts(d,He),bombable:Ga(d,He)}}const mt=0,Fm=1;function Rm(e){const n=[["gwang",e.gwang.length*3],["yeol",e.yeol.length],["tti",e.tti.length],["pi",e.pi.length*.6]];return n.sort((t,r)=>r[1]-t[1]),n[0][0]}function zu({captured:e,side:n,flying:t}){const r=[["광",e.gwang],["띠",e.tti],["열",e.yeol],["피",e.pi]],i=r.reduce((a,[,f])=>a+f.length,0),[l,o]=C.useState(0),s=C.useRef(i);return C.useEffect(()=>{i>s.current&&o(a=>a+1),s.current=i},[i]),c.jsxs("div",{className:`piles ${l?"got":""} ${t?"flying":""}`,children:[c.jsxs("div",{className:"piles-head",children:[n,c.jsx("b",{children:i},l)]}),r.map(([a,f])=>c.jsxs("div",{className:`pile ${f.length===0?"pile-empty":""}`,children:[c.jsx("span",{className:"pile-label",children:a}),c.jsx("div",{className:"pile-cards",children:f.map((d,h)=>c.jsx("img",{className:"pile-card","data-cid":d.id,"data-zone":n==="내 것"?"pile-me":"pile-opp","data-month":d.month,style:{marginLeft:h===0?0:"var(--pile-overlap)"},src:Ps(d),alt:d.name,draggable:!1},d.id))}),f.length>0&&c.jsx("span",{className:"pile-n",children:f.length})]},a))]})}function Om({tenant:e,stage:n,affection:t,rules:r,profile:i,losingStreak:l,points:o,onFinish:s,onQuit:a}){const[f,d]=C.useState(!1),h=C.useRef(0),p=C.useRef(0),{view:$,play:S,choose:j,goStop:T,shake:m,shakeable:g,bombable:y}=Bm({tenant:e,stage:n,affection:t,rules:r,profile:i,losingStreak:l,busyUntil:p}),v=$.state,k=v.players[mt],_=v.players[Fm],[w,x]=C.useState(null),[L,z]=C.useState(!1),[G,X]=C.useState(null),[J,de]=C.useState(0),De=C.useRef(v.deck.length),Xe=C.useRef(null),Oe=ym(Xe,[v.field,v.players,v.deck.length],v.phase!=="ended",P=>{p.current=performance.now()+P,d(!0),window.clearTimeout(h.current),h.current=window.setTimeout(()=>d(!1),P)},(P,Y)=>{window.setTimeout(()=>{W({key:Date.now(),x:P.left+P.width/2,y:P.top+P.height/2,w:P.width,h:P.height}),de(ee=>ee+1)},Y)});C.useEffect(()=>()=>window.clearTimeout(h.current),[]);const[E,R]=C.useState(null),[I,W]=C.useState(null),B=C.useRef(null),O=C.useRef(null),[re,Ce]=C.useState(0),[K,we]=C.useState(null);C.useEffect(()=>{if(v.phase==="ended"){const P=window.setTimeout(()=>z(!0),900);return()=>window.clearTimeout(P)}},[v.phase]),C.useEffect(()=>{v.deck.length<De.current&&de(P=>P+1),De.current=v.deck.length},[v.deck.length]),C.useEffect(()=>{if(J===0)return;const P=window.setTimeout(()=>de(0),420);return()=>window.clearTimeout(P)},[J]);const Lt=v.turn===mt&&!$.busy&&v.phase==="awaitPlay"&&!f&&!E,zt=v.turn===mt&&v.phase==="awaitChoice",Pt=zt?v.pendingChoice:null,Ha=P=>{const Y=Xe.current;if(!Y)return null;const ee=v.field.find(se=>se.month===P.month);if(ee){const se=Y.querySelector(`[data-cid="${ee.id}"]`);if(se)return se.getBoundingClientRect()}const xe=Y.querySelector(".felt");if(!xe)return null;const Q=xe.getBoundingClientRect();return new DOMRect(Q.left+Q.width/2-24,Q.top+Q.height*.62,48,72)},Za=(P,Y)=>{const Q=Xe.current?.querySelector(`.board-hand [data-cid="${P.id}"]`)?.getBoundingClientRect(),se=Ha(P);if(!Q||!se){S(P.id,Y);return}R({card:P,from:Q,to:se,bomb:Y})},Lh=P=>{if(!(!Lt||E)){if(y.includes(P.month)){w===P.id?(Za(P,!0),x(null)):x(P.id);return}Za(P,!1),x(null)}};C.useEffect(()=>{if(!E)return;const P=B.current,Y=Xe.current;if(!P||!Y){S(E.card.id,E.bomb),R(null);return}const ee=Y.getBoundingClientRect(),{from:xe,to:Q}=E,se=ee.left+ee.width/2-xe.width/2-xe.left,ht=ee.top+ee.height*.36-xe.height/2-xe.top,yi=Q.left+Q.width/2-xe.width/2-xe.left,$i=Q.top+Q.height/2-xe.height/2-xe.top,Xl=Q.width/xe.width,Jl=P.animate([{transform:"translate(0,0) scale(1) rotate(0deg)",offset:0,easing:"cubic-bezier(.2,.9,.25,1)"},{transform:`translate(${se}px, ${ht}px) scale(2.5) rotate(-7deg)`,offset:.42},{transform:`translate(${se}px, ${ht-6}px) scale(2.45) rotate(-5deg)`,offset:.6,easing:"cubic-bezier(.7,0,.9,.6)"},{transform:`translate(${yi}px, ${$i}px) scale(${(Xl*1.06).toFixed(3)}) rotate(2deg)`,offset:1}],{duration:560,fill:"forwards"}),eo=window.setTimeout(()=>{W({key:Date.now(),x:Q.left+Q.width/2,y:Q.top+Q.height/2,w:Q.width,h:Q.height}),de(to=>to+1),Oe.setOrigin(E.card.id,Q),S(E.card.id,E.bomb)},545),no=window.setTimeout(()=>R(null),610);return()=>{window.clearTimeout(eo),window.clearTimeout(no),Jl.cancel()}},[E]),C.useEffect(()=>{if(!I)return;const P=window.setTimeout(()=>W(null),620);return()=>window.clearTimeout(P)},[I]),C.useEffect(()=>{const P=$.aiThrow;if(!P)return;const Y=O.current,ee=Xe.current;if(!Y||!ee)return;const xe=ee.querySelectorAll(".opp-hand .ohand-slot"),Q=(xe[xe.length-1]??ee.querySelector(".opp-hand"))?.getBoundingClientRect(),se=Ha(P.card);if(!Q||!se||Q.width===0)return;const ht=ee.getBoundingClientRect(),yi=ht.left+ht.width/2-Q.width/2-Q.left,$i=ht.top+ht.height*.36-Q.height/2-Q.top,Xl=se.left+se.width/2-Q.width/2-Q.left,Jl=se.top+se.height/2-Q.height/2-Q.top;Y.style.left=`${Q.left}px`,Y.style.top=`${Q.top}px`,Y.style.width=`${Q.width}px`,Y.style.height=`${Q.height}px`;const eo=Y.animate([{transform:"translate(0,0) scale(1) rotateY(180deg)",offset:0,easing:"cubic-bezier(.2,.9,.25,1)"},{transform:`translate(${yi}px, ${$i}px) scale(2.4) rotateY(0deg) rotate(6deg)`,offset:.46},{transform:`translate(${yi}px, ${$i-6}px) scale(2.35) rotate(4deg)`,offset:.66,easing:"cubic-bezier(.7,0,.9,.6)"},{transform:`translate(${Xl}px, ${Jl}px) scale(${(se.width/Q.width*1.06).toFixed(3)}) rotate(-2deg)`,offset:1}],{duration:Is,fill:"forwards"}),no=window.setTimeout(()=>{W({key:Date.now(),x:se.left+se.width/2,y:se.top+se.height/2,w:se.width,h:se.height}),de(to=>to+1),Oe.setOrigin(P.card.id,se)},Is-20);return()=>{window.clearTimeout(no),eo.cancel()}},[$.aiThrow?.key]),C.useEffect(()=>{!$.shout||$.shout.by!==mt||["쪽!","따닥!","쓸!","폭탄!","총통!"].includes($.shout.text)&&Ce(P=>P+1)},[$.shout?.key]),C.useEffect(()=>{if(!re)return;const P=window.setTimeout(()=>Ce(0),1100);return()=>window.clearTimeout(P)},[re]),C.useEffect(()=>{const P=$.shout;if(!P||P.by!==mt)return;const ee={"쪽!":["쪽이지롱~","쪽! 한 장 내놔.","어? 쪽이네?"],"따닥!":["따닥이지롱~","따닥! 미안~","네 장 다 내 거."],"쓸!":["싹 쓸었다!","바닥이 비었네~","쓸! 하나 더 받을게."],"폭탄!":["폭탄이다!","한 번에 간다."],"총통!":["총통!","시작부터 네 장이야."]}[P.text];ee&&we({key:P.key,text:ee[Math.floor(Math.random()*ee.length)]})},[$.shout?.key]),C.useEffect(()=>{if(!K)return;const P=window.setTimeout(()=>we(null),2600);return()=>window.clearTimeout(P)},[K]);const Kl=C.useMemo(()=>{const P=new Map;for(const Y of v.field){const ee=P.get(Y.month);ee?ee.push(Y):P.set(Y.month,[Y])}return[...P.entries()].map(([Y,ee])=>({month:Y,cards:ee}))},[v.field]),zh=v.field.length<=8?1:v.field.length<=10?.86:v.field.length<=12?.74:v.field.length<=16?.62:.52,qa=Math.ceil(Kl.length/2),Ph=Kl.slice(0,qa),Th=Kl.slice(qa),Wa=$.myScore*e.rate,Dh=Math.round($.oppScore*e.rate*Oa),Yl=C.useMemo(()=>v.settlement?{won:v.settlement.winner===mt,draw:v.settlement.winner===null,settlement:v.settlement,playerWentGo:k.goCount>0,focus:Rm(k.captured),score:v.settlement.winner===mt?v.settlement.total:0,settlementTotal:v.settlement.total}:null,[v.settlement,k]),Ka=P=>{const Y=v.ppeokPiles[P.month]!==void 0;return c.jsxs("div",{className:`fstack ${Y?"ppeok":""}`,children:[P.cards.map((ee,xe)=>{const Q=zt&&v.pendingChoice?.candidates.some(se=>se.id===ee.id);return c.jsx("div",{className:`fslot ${Q?"candidate":""} ${G===ee.month?"match":""}`,style:{marginLeft:xe===0?0:Y?"var(--ppeok-overlap)":"var(--stack-overlap)",zIndex:xe},children:c.jsx(To,{card:ee,zone:"field",selectable:!!Q,onClick:()=>Q&&j(ee.id)})},ee.id)}),Y&&c.jsxs("span",{className:"fstack-tag",children:["뻑 ",P.cards.length,"장"]})]},P.month)};return c.jsxs("div",{className:"screen match-screen",children:[c.jsx(Wl,{bg:"maru",time:"night"}),c.jsxs("div",{className:"layer board",ref:Xe,children:[c.jsxs("div",{className:`board-opp ${re?"startled":""}`,children:[c.jsx(lt,{tenant:e,expression:re?"surprise":$.expression,outfit:n>=10?2:0}),re>0&&c.jsx("span",{className:"startle-mark",children:"!"}),c.jsxs("div",{className:"chip-body",children:[c.jsxs("div",{className:"chip-name",children:[e.name,_.goCount>0&&c.jsxs("span",{className:"badge",children:[_.goCount,"고"]})]}),c.jsxs("div",{className:"chip-score",children:[$.oppScore,c.jsx("small",{children:"점"})]})]}),c.jsx("button",{className:"iconbtn quit",onClick:a,"aria-label":"나가기",children:"✕"}),c.jsx("div",{className:"speech",children:$.line})]}),c.jsx("div",{className:"board-oppcap",children:c.jsx(zu,{captured:_.captured,side:"상대",flying:f})}),c.jsxs("div",{className:"board-field",children:[c.jsxs("div",{className:"opp-hand","aria-label":`${e.name}의 남은 패 ${_.hand.length}장`,children:[_.hand.map((P,Y)=>c.jsx("div",{className:"ohand-slot",style:{marginLeft:Y===0?0:"var(--ohand-overlap)"},children:c.jsx(Do,{small:!0})},P.id)),c.jsx("span",{className:"ohand-n",children:_.hand.length})]}),c.jsxs("div",{className:`felt ${J?"slam":""} ${zt?"choosing":""}`,style:{"--field-scale":zh},children:[c.jsx("div",{className:"field-row",children:Ph.map(Ka)}),c.jsxs("div",{className:"field-mid",children:[Pt&&c.jsxs("div",{className:"pending",children:[c.jsx(To,{card:Pt.played}),c.jsx("span",{className:"pending-tag",children:Pt.source==="deck"?"뒤집은 패":"낸 패"})]}),c.jsxs("div",{className:"deck","data-deck":"",children:[c.jsx(Do,{}),c.jsx("span",{className:"deck-n",children:v.deck.length})]}),c.jsx("div",{className:"deck-label",children:"남은 패"})]}),c.jsx("div",{className:"field-row",children:Th.map(Ka)})]}),zt&&c.jsxs("div",{className:"felt-notice",children:[Pt?`${$u[Pt.played.month]}(${Pt.played.month}월)이 바닥에 두 장입니다. `:"같은 월이 두 장입니다. ",c.jsx("b",{children:"빛나는 패"})," 중에서 가져올 것을 고르세요."]}),$.hint&&!zt&&c.jsxs("div",{className:"felt-notice hint",children:[e.name,": “",$.hint,"”"]})]}),c.jsx("div",{className:"board-mycap",children:c.jsx(zu,{captured:k.captured,side:"내 것",flying:f})}),c.jsxs("div",{className:"board-side",children:[c.jsxs("div",{className:"scorebox",children:[c.jsxs("div",{className:"scorebox-row",children:[c.jsx("b",{children:$.myScore}),c.jsx("small",{children:"점"}),c.jsx("span",{className:"x",children:"×"}),c.jsx("b",{children:e.rate}),c.jsx("small",{children:"P"})]}),c.jsxs("div",{className:"scorebox-eq",children:["= ",c.jsxs("strong",{children:[Wa.toLocaleString(),"P"]})]}),c.jsxs("div",{className:"scorebox-risk",children:["지면 ",c.jsxs("span",{children:["-",Dh.toLocaleString(),"P"]})]})]}),c.jsx("div",{className:"turnline",children:w&&y.includes(k.hand.find(P=>P.id===w)?.month??0)?"한 번 더 누르면 폭탄":f||E?"":Lt?"낼 패를 고르세요":$.busy?`${e.name}의 차례…`:zt?"가져올 패를 고르세요":""}),g.length>0&&Lt&&c.jsxs("button",{className:"btn shake",onClick:()=>m(g[0]),children:["흔들기 ",$u[g[0]]??g[0]]}),c.jsxs("div",{className:"me-chip",children:[c.jsxs("div",{className:"chip-name",children:["나",k.goCount>0&&c.jsxs("span",{className:"badge",children:[k.goCount,"고"]})]}),c.jsxs("div",{className:"chip-points",children:[o.toLocaleString()," P"]})]})]}),c.jsxs("div",{className:"board-hand",children:[k.hand.map(P=>c.jsx("div",{className:"hand-slot",onPointerDown:()=>Lt&&X(P.month),onPointerEnter:()=>Lt&&X(P.month),onPointerLeave:()=>X(null),onPointerUp:()=>X(null),children:c.jsx(To,{card:P,zone:"hand",selectable:Lt,chosen:w===P.id,hidden:E?.card.id===P.id,onClick:()=>Lh(P)})},P.id)),k.hand.length===0&&c.jsx(Do,{small:!0})]}),E&&c.jsx("img",{ref:B,className:"hero-card",src:Ps(E.card),alt:E.card.name,style:{left:E.from.left,top:E.from.top,width:E.from.width,height:E.from.height},draggable:!1}),c.jsx("img",{ref:O,className:"hero-card ai",style:{display:$.aiThrow?"block":"none"},src:$.aiThrow?Ps($.aiThrow.card):void 0,alt:"",draggable:!1}),I&&c.jsxs("span",{className:"impact",style:{left:I.x,top:I.y},children:[c.jsx("i",{}),c.jsx("i",{}),c.jsx("b",{style:{width:I.w,height:I.h,marginLeft:-I.w/2,marginTop:-I.h/2}})]},I.key),K&&c.jsx("div",{className:"taunt",children:K.text},K.key),$.shout&&c.jsxs("div",{className:"shout",children:[c.jsx("span",{children:$.shout.text}),$.shout.detail&&c.jsx("em",{className:"shout-note",children:$.shout.detail})]},$.shout.key),$.askGoStop&&c.jsxs("div",{className:"gostop-overlay",children:[c.jsx(lt,{tenant:e,expression:"serious",outfit:n>=10?2:0}),c.jsxs("div",{className:"gostop-line",children:[$.myScore,"점입니다. 더 가시겠어요?",c.jsx("br",{}),c.jsxs("strong",{style:{color:"var(--ok)",fontSize:18},children:["지금 스톱하면 +",Wa.toLocaleString(),"P"]}),c.jsx("br",{}),c.jsxs("span",{style:{color:"var(--paper-dim)",fontSize:13},children:["고를 하면 점수가 오르지만, 상대가 이기면 고박으로 두 배를 물어줍니다. 점당 ",e.rate,"P 라 크게 뒤집히면 그만큼 나갑니다."]})]}),c.jsxs("div",{style:{display:"flex",gap:10},children:[c.jsx("button",{className:"btn primary",onClick:()=>T("go"),children:"고"}),c.jsx("button",{className:"btn",onClick:()=>T("stop"),children:"스톱"})]})]}),$.aiGoStop&&c.jsxs("div",{className:"gostop-overlay",children:[c.jsx(lt,{tenant:e,expression:$.aiGoStop.action==="go"?"serious":"win",outfit:n>=10?2:0}),c.jsxs("div",{className:"gostop-line",children:[c.jsx("strong",{style:{color:"var(--lamp)"},children:e.name}),c.jsx("br",{}),$.aiGoStop.line]})]}),L&&Yl&&c.jsx(Um,{tenant:e,outcome:Yl,onNext:()=>s(Yl)})]})]})}function Um({tenant:e,outcome:n,onNext:t}){const r=n.settlement,i=r?.breakdown,l=e.rate;return c.jsxs("div",{className:"result",children:[c.jsx("h2",{style:{color:n.won?"var(--lamp)":n.draw?"var(--paper-dim)":"var(--accent)"},children:n.draw?"나가리":n.won?"승리":"패배"}),r&&c.jsxs("div",{className:"total",children:[r.total,"점"]}),i&&c.jsxs("div",{className:"result-rows",children:[i.gwangScore>0&&c.jsxs("div",{children:[c.jsx("span",{children:i.gwangLabel}),c.jsxs("span",{children:[i.gwangScore,"점"]})]}),i.ttiScore>0&&c.jsxs("div",{children:[c.jsx("span",{children:i.ttiLabels.join(" · ")}),c.jsxs("span",{children:[i.ttiScore,"점"]})]}),i.yeolScore>0&&c.jsxs("div",{children:[c.jsx("span",{children:i.yeolLabels.join(" · ")}),c.jsxs("span",{children:[i.yeolScore,"점"]})]}),i.piScore>0&&c.jsxs("div",{children:[c.jsxs("span",{children:["피 ",i.piCount,"장"]}),c.jsxs("span",{children:[i.piScore,"점"]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"기본"}),c.jsxs("span",{children:[r?.base,"점"]})]}),r&&r.goBonus>0&&c.jsxs("div",{children:[c.jsx("span",{children:"고 가산"}),c.jsxs("span",{children:["+",r.goBonus]})]}),r&&r.multiplier>1&&c.jsxs("div",{children:[c.jsx("span",{children:"배수"}),c.jsxs("span",{children:["x",r.multiplier]})]})]}),r&&c.jsx("div",{style:{fontSize:20,fontWeight:900,color:n.won?"var(--ok)":n.draw?"var(--paper-dim)":"var(--accent)"},children:n.draw?"판돈 없음":n.won?`+${(r.total*l).toLocaleString()}P`:`-${Math.round(r.total*l*Oa).toLocaleString()}P`}),r&&r.reasons.length>0&&c.jsx("div",{className:"reasons",children:r.reasons.map((o,s)=>c.jsx("span",{children:o},s))}),c.jsx("div",{style:{display:"flex",gap:10,alignItems:"center",marginTop:6},children:c.jsx(lt,{tenant:e,expression:n.won?"lose":"win",outfit:0,style:{height:90}})}),c.jsx("button",{className:"btn primary wide",style:{maxWidth:260},onClick:t,children:"계속"})]})}function Pu({scene:e,tenant:n,textSpeed:t,onDone:r,canSkip:i=!0}){const[l,o]=C.useState(()=>n1(e)),[s,a]=C.useState(""),[f,d]=C.useState(!1),h=C.useRef(null),p=l.view;C.useEffect(()=>{if(h.current&&window.clearInterval(h.current),t<=0){a(p.text),d(!1);return}a(""),d(!0);let T=0;return h.current=window.setInterval(()=>{T++,a(p.text.slice(0,T)),T>=p.text.length&&(h.current&&window.clearInterval(h.current),d(!1))},t),()=>{h.current&&window.clearInterval(h.current)}},[p.text,t]);const $=C.useCallback(()=>{const T=t1(l);r({affectionDelta:T.view.affectionDelta,pointDelta:T.view.pointDelta,cg:T.view.cg})},[l,r]),S=C.useCallback(()=>{if(f){h.current&&window.clearInterval(h.current),a(p.text),d(!1);return}if(!p.choices){if(p.done){r({affectionDelta:p.affectionDelta,pointDelta:p.pointDelta,cg:p.cg});return}o(Ql(l))}},[f,p,l,r]);C.useEffect(()=>{p.done&&!p.text&&r({affectionDelta:p.affectionDelta,pointDelta:p.pointDelta,cg:p.cg})},[p,r]);const j=n!==null&&p.speaker===n.name;return c.jsxs("div",{className:"screen",onClick:S,children:[c.jsx(Wl,{bg:p.bg,time:p.time}),c.jsxs("div",{className:"layer",children:[c.jsxs("div",{className:"topbar",onClick:T=>T.stopPropagation(),children:[c.jsx("h1",{children:e.title}),i&&c.jsx("button",{className:"btn ghost",style:{padding:"6px 12px",fontSize:13},onClick:$,children:"건너뛰기"})]}),c.jsxs("div",{className:"vn-stage",children:[n&&!p.cg&&c.jsx(lt,{className:"vn-portrait",tenant:n,expression:j?p.expression:"normal",outfit:p.outfit}),p.cg&&c.jsx("div",{className:"vn-cg",children:c.jsx("div",{className:"vn-cg-inner",children:c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:13,opacity:.8,marginBottom:8},children:"엔딩 CG"}),c.jsx("div",{style:{fontSize:17,fontWeight:800},children:e.title}),c.jsx("div",{style:{fontSize:11,opacity:.6,marginTop:10},children:p.cg})]})})})]}),c.jsxs("div",{className:"vn-box",onClick:T=>T.stopPropagation(),children:[p.speaker&&c.jsx("div",{className:"vn-speaker",children:p.speaker}),c.jsx("div",{className:"vn-text",onClick:S,children:s}),p.choices?c.jsx("div",{className:"vn-choices",children:p.choices.map((T,m)=>c.jsx("button",{className:"btn wide",onClick:()=>o(oh(l,m)),children:T.text},m))}):c.jsx("div",{className:"vn-hint",onClick:S,children:p.done?"탭하여 계속 ▸":"탭 ▾"})]})]})]})}const As="HSG1",Mh="HSG0";function Tu(e){let n="";for(const t of e)n+=String.fromCharCode(t);return btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function Gm(e){const n=e.replace(/-/g,"+").replace(/_/g,"/"),t=n.length%4?"=".repeat(4-n.length%4):"",r=atob(n+t),i=new Uint8Array(r.length);for(let l=0;l<r.length;l++)i[l]=r.charCodeAt(l);return i}function Bs(e){let n=2166136261;for(let t=0;t<e.length;t++)n^=e.charCodeAt(t),n=Math.imul(n,16777619)>>>0;return n.toString(36).toUpperCase().padStart(7,"0")}async function Vm(e){try{if(typeof CompressionStream>"u")return null;const n=new CompressionStream("deflate-raw"),t=new TextEncoder().encode(e),r=new Blob([t.buffer]).stream().pipeThrough(n);return new Uint8Array(await new Response(r).arrayBuffer())}catch{return null}}async function Qm(e){try{if(typeof DecompressionStream>"u")return null;const n=new DecompressionStream("deflate-raw"),t=new Blob([e.buffer]).stream().pipeThrough(n);return new TextDecoder().decode(await new Response(t).arrayBuffer())}catch{return null}}function Nl(e){const n=Object.values(e.tenants).filter(i=>i.clearedStage>0).length,t=Object.values(e.tenants).reduce((i,l)=>i+l.clearedStage,0),r=Object.values(e.tenants).filter(i=>i.dating).length;return`${n}명 진행 · 총 ${t}단계 · 연애 ${r}명 · ${e.points.toLocaleString()}P · ${e.stats.totalGames}판`}async function Hm(e,n){const t={meta:{deviceId:n,createdAt:new Date().toISOString(),summary:Nl(e)},save:e},r=JSON.stringify(t),i=await Vm(r);if(i){const o=Tu(i);return`${As}.${o}.${Bs(o)}`}const l=Tu(new TextEncoder().encode(r));return`${Mh}.${l}.${Bs(l)}`}async function Zm(e){const n=e.trim().replace(/\s+/g,"");if(!n)return{ok:!1,reason:"코드가 비어 있습니다."};const t=n.split(".");if(t.length!==3)return{ok:!1,reason:"코드 형식이 올바르지 않습니다. 앞뒤가 잘리지 않았는지 확인해 주세요."};const[r,i,l]=t;if(r!==As&&r!==Mh)return{ok:!1,reason:"하숙생 맞고 백업 코드가 아닙니다."};if(Bs(i)!==l)return{ok:!1,reason:"코드가 손상됐습니다. 복사할 때 일부가 빠졌을 수 있습니다."};let o=null;try{const d=Gm(i);o=r===As?await Qm(d):new TextDecoder().decode(d)}catch{return{ok:!1,reason:"코드를 읽을 수 없습니다."}}if(!o)return{ok:!1,reason:"이 브라우저에서는 압축된 코드를 풀 수 없습니다. 최신 브라우저에서 시도해 주세요."};let s;try{s=JSON.parse(o)}catch{return{ok:!1,reason:"코드 내용이 올바르지 않습니다."}}if(!s?.save?.tenants||typeof s.save.points!="number")return{ok:!1,reason:"저장 데이터가 들어 있지 않습니다."};const a=ui(),f={...a,...s.save,tenants:{...a.tenants,...s.save.tenants},settings:{...a.settings,...s.save.settings??{}},stats:{...a.stats,...s.save.stats??{}}};return{ok:!0,backup:{meta:s.meta??{deviceId:"(알 수 없음)",createdAt:"",summary:Nl(f)},save:f}}}function qm(e){const n=new Date().toISOString().slice(0,16).replace(/[:T]/g,""),t=new Blob([e],{type:"text/plain;charset=utf-8"}),r=URL.createObjectURL(t),i=document.createElement("a");i.href=r,i.download=`하숙생맞고-백업-${n}.txt`,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}async function Wm(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}try{const n=document.createElement("textarea");n.value=e,n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return n.remove(),t}catch{return!1}}function Km({data:e,device:n,onRestore:t}){const[r,i]=C.useState(""),[l,o]=C.useState(""),[s,a]=C.useState(null),[f,d]=C.useState(null),[h,p]=C.useState(null),[$,S]=C.useState(!1);C.useEffect(()=>{gg().then(p)},[]);const j=C.useCallback(async()=>{const w=await Hm(e,n?.id??"");return i(w),S(!0),w},[e,n]),T=C.useCallback(async()=>{const w=r||await j(),x=await Wm(w);a(x?{kind:"ok",text:"백업 코드를 복사했습니다. 메모장이나 메신저에 붙여넣어 보관하세요."}:{kind:"warn",text:"복사가 막혔습니다. 아래 코드를 길게 눌러 직접 복사해 주세요."})},[r,j]),m=C.useCallback(async()=>{const w=r||await j();qm(w),a({kind:"ok",text:"백업 파일을 저장했습니다."})},[r,j]),g=C.useCallback(async()=>{a(null);const w=await Zm(l);if(!w.ok){d(null),a({kind:"err",text:w.reason});return}d(w.backup)},[l]),y=C.useCallback(async()=>{if(!f)return;const w=fu(f.save),x=await pg(f.save.deviceId||void 0),L=fu({...w,deviceId:x.id});t(L),d(null),o(""),a({kind:"ok",text:"진행도를 복원했습니다."})},[f,t]),v=C.useCallback(w=>{const x=w.target.files?.[0];if(!x)return;const L=new FileReader;L.onload=()=>o(String(L.result??"")),L.readAsText(x),w.target.value=""},[]),k=h&&!h.localStorage&&!h.indexedDb,_=h&&(!h.localStorage||!h.indexedDb)&&!k;return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"이 기기"}),c.jsxs("div",{className:"row",children:[c.jsxs("div",{children:["기기 코드",c.jsx("small",{children:"브라우저마다 따로 발급되는 무작위 번호입니다. 전화번호·기기 일련번호 같은 개인정보는 쓰지도, 보내지도 않습니다."})]}),c.jsx("code",{style:{fontSize:13,color:"var(--lamp)",whiteSpace:"nowrap"},children:n?.shortCode??"…"})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"실행 환경"}),c.jsx("span",{children:n?.platform??"…"})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"저장 상태"}),c.jsx("span",{style:{color:k?"var(--accent)":_?"var(--warn)":"var(--ok)"},children:h?k?"저장 불가":_?"일부만 사용 가능":"정상":"확인 중…"})]}),k&&c.jsx("div",{className:"hint-box",style:{margin:"8px 0 0"},children:"이 브라우저에서는 저장이 막혀 있습니다(사생활 보호 모드일 수 있습니다). 지금 진행한 내용은 창을 닫으면 사라집니다. 일반 창에서 열어 주세요."}),n?.ephemeral&&!k&&c.jsx("div",{className:"hint-box",style:{margin:"8px 0 0"},children:"기기 코드를 저장하지 못했습니다. 새로고침하면 새 기기로 인식될 수 있으니 아래에서 백업 코드를 받아 두세요."})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"진행도 백업"}),c.jsxs("div",{style:{fontSize:12,color:"var(--paper-dim)",lineHeight:1.6,marginBottom:10},children:["지금 진행도: ",c.jsx("b",{style:{color:"var(--paper)"},children:Nl(e)}),c.jsx("br",{}),"백업 코드 하나면 브라우저 데이터를 지웠거나 폰을 바꿔도 그대로 이어서 할 수 있습니다.",c.jsx("br",{}),c.jsx("b",{style:{color:"var(--warn)"},children:"아이폰 사파리"}),"는 홈 화면에 추가하지 않은 사이트의 저장 데이터를 일정 기간 뒤 지웁니다. 웹으로 오래 즐기실 거면 홈 화면에 추가하거나 백업 코드를 받아 두세요."]}),c.jsxs("div",{style:{display:"flex",gap:8},children:[c.jsx("button",{className:"btn primary",style:{flex:1,fontSize:13},onClick:T,children:"코드 복사"}),c.jsx("button",{className:"btn",style:{flex:1,fontSize:13},onClick:m,children:"파일로 저장"})]}),$&&r&&c.jsx("textarea",{readOnly:!0,value:r,onFocus:w=>w.currentTarget.select(),style:{width:"100%",height:76,marginTop:8,fontSize:10.5,lineHeight:1.4,background:"rgba(0,0,0,0.45)",color:"var(--paper-dim)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:8,padding:8,fontFamily:"monospace",userSelect:"text",WebkitUserSelect:"text"}})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"진행도 복원"}),c.jsx("div",{style:{fontSize:12,color:"var(--paper-dim)",lineHeight:1.6,marginBottom:8},children:"다른 기기에서 받은 백업 코드를 붙여넣으세요. 현재 진행도는 덮어써집니다."}),c.jsx("textarea",{value:l,onChange:w=>o(w.target.value),placeholder:"HSG1.로 시작하는 백업 코드를 붙여넣으세요",style:{width:"100%",height:68,fontSize:11,background:"rgba(0,0,0,0.45)",color:"var(--paper)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:8,padding:8,fontFamily:"monospace",userSelect:"text",WebkitUserSelect:"text"}}),c.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[c.jsx("button",{className:"btn",style:{flex:1,fontSize:13},onClick:g,disabled:!l.trim(),children:"코드 확인"}),c.jsxs("label",{className:"btn",style:{flex:1,fontSize:13,textAlign:"center"},children:["파일 선택",c.jsx("input",{type:"file",accept:".txt,text/plain",onChange:v,style:{display:"none"}})]})]}),f&&c.jsxs("div",{style:{marginTop:10,padding:10,borderRadius:10,background:"rgba(63,138,82,0.15)",border:"1px solid rgba(63,138,82,0.5)",fontSize:12,lineHeight:1.6},children:[c.jsx("b",{style:{color:"var(--ok)"},children:"읽을 수 있는 백업입니다."}),c.jsx("br",{}),"불러올 내용: ",f.meta.summary,c.jsx("br",{}),f.meta.createdAt&&c.jsxs("span",{style:{color:"var(--paper-dim)"},children:["만든 날짜: ",new Date(f.meta.createdAt).toLocaleString("ko-KR")]}),c.jsxs("div",{style:{marginTop:8,color:"var(--warn)"},children:["지금 진행도(",Nl(e),")는 사라집니다."]}),c.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[c.jsx("button",{className:"btn primary",style:{flex:1,fontSize:13},onClick:y,children:"덮어쓰고 복원"}),c.jsx("button",{className:"btn ghost",style:{flex:1,fontSize:13},onClick:()=>d(null),children:"취소"})]})]}),s&&c.jsx("div",{style:{marginTop:10,fontSize:12,lineHeight:1.5,color:s.kind==="ok"?"var(--ok)":s.kind==="warn"?"var(--warn)":"var(--accent)"},children:s.text})]})]})}const Ym=[{key:"biGwangPenalty",label:"비삼광 2점",desc:"3광에 비광이 끼면 3점 대신 2점"},{key:"goMultiplierFrom3",label:"3고부터 배수",desc:"고 1·2회는 가산, 3회부터 2배씩"},{key:"piBak",label:"피박",desc:"상대 피가 기준 이하일 때 2배"},{key:"gwangBak",label:"광박",desc:"상대 광이 없을 때 2배"},{key:"mengBak",label:"멍박",desc:"상대 열끗이 없을 때 2배"},{key:"goBak",label:"고박",desc:"고를 외친 쪽이 지면 2배 부담"},{key:"heundeulgi",label:"흔들기",desc:"같은 월 3장 선언 시 2배"},{key:"bomb",label:"폭탄",desc:"같은 월 3장을 한 번에 투하"},{key:"chongtong",label:"총통",desc:"같은 월 4장이면 즉시 승리"},{key:"nagariDouble",label:"나가리 2배",desc:"나가리 다음 판은 2배"},{key:"gukjinOption",label:"국진 선택",desc:"국진을 열끗/쌍피 중 골라 쓴다"}];function Xm({data:e,device:n,onChange:t,onReset:r,onBack:i}){const l={...Ch,...e.settings.rules},o=(a,f)=>{t({...e,settings:{...e.settings,rules:{...e.settings.rules,[a]:f}}})},s=(a,f)=>{t({...e,settings:{...e.settings,[a]:f}})};return c.jsx("div",{className:"screen",style:{background:"var(--wood-dark)"},children:c.jsxs("div",{className:"layer",children:[c.jsxs("div",{className:"topbar",children:[c.jsx("button",{className:"iconbtn",onClick:i,"aria-label":"뒤로",children:"←"}),c.jsx("h1",{children:"설정"})]}),c.jsxs("div",{className:"panel",children:[c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"점수 해석"}),c.jsx("div",{className:"row",children:c.jsxs("div",{children:["띠 점수 방식",c.jsx("small",{children:"기획서 표기(5장 5점)와 한국 온라인 맞고 표준(5장 1점)이 달라 둘 다 넣었습니다. 홍/청/초단 3점은 두 방식 모두 동일합니다."})]})}),c.jsxs("div",{style:{display:"flex",gap:8,marginTop:6},children:[c.jsx("button",{className:`btn ${l.ttiScoring==="standard"?"primary":"ghost"}`,style:{flex:1,fontSize:13},onClick:()=>o("ttiScoring","standard"),children:"표준 (5장 1점)"}),c.jsx("button",{className:`btn ${l.ttiScoring==="specSheet"?"primary":"ghost"}`,style:{flex:1,fontSize:13},onClick:()=>o("ttiScoring","specSheet"),children:"기획서 (5장 5점)"})]})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"규칙 옵션"}),Ym.map(a=>c.jsxs("div",{className:"row",children:[c.jsxs("div",{children:[a.label,c.jsx("small",{children:a.desc})]}),c.jsx(yu,{on:l[a.key],onToggle:()=>o(a.key,!l[a.key])})]},a.key)),c.jsxs("div",{className:"row",children:[c.jsxs("div",{children:["보너스 쌍피",c.jsx("small",{children:"덱에 섞는 보너스패 장수 (0~3)"})]}),c.jsx("div",{style:{display:"flex",gap:4},children:[0,1,2,3].map(a=>c.jsx("button",{className:`btn ${l.bonusPiCount===a?"primary":"ghost"}`,style:{padding:"6px 11px",fontSize:13},onClick:()=>o("bonusPiCount",a),children:a},a))})]}),c.jsxs("div",{className:"row",children:[c.jsxs("div",{children:["스톱 최소 점수",c.jsx("small",{children:"이 점수 이상이어야 고/스톱을 고를 수 있습니다"})]}),c.jsx("div",{style:{display:"flex",gap:4},children:[3,5,7].map(a=>c.jsx("button",{className:`btn ${l.minScoreToStop===a?"primary":"ghost"}`,style:{padding:"6px 11px",fontSize:13},onClick:()=>o("minScoreToStop",a),children:a},a))})]})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"진행"}),c.jsxs("div",{className:"row",children:[c.jsxs("div",{children:["전원 공략 가능 모드",c.jsx("small",{children:"끄면 한 명과 연애를 시작한 뒤 다른 하숙생의 이벤트는 친구 루트로 분기합니다. 켜면 전원 공략 가능합니다."})]}),c.jsx(yu,{on:e.settings.allRoutes,onToggle:()=>s("allRoutes",!e.settings.allRoutes)})]}),c.jsxs("div",{className:"row",children:[c.jsxs("div",{children:["글자 속도",c.jsx("small",{children:"0에 가까울수록 빠릅니다"})]}),c.jsx("div",{style:{display:"flex",gap:4},children:[[0,"즉시"],[15,"빠름"],[25,"보통"],[45,"느림"]].map(([a,f])=>c.jsx("button",{className:`btn ${e.settings.textSpeed===a?"primary":"ghost"}`,style:{padding:"6px 9px",fontSize:12},onClick:()=>s("textSpeed",a),children:f},a))})]})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"기록"}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"총 대국"}),c.jsxs("span",{children:[e.stats.totalGames,"판"]})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"전적"}),c.jsxs("span",{children:[e.stats.wins,"승 ",e.stats.losses,"패"]})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"최고 점수"}),c.jsxs("span",{children:[e.stats.bestScore,"점"]})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"보유 포인트"}),c.jsxs("span",{children:[e.points.toLocaleString()," P"]})]})]}),c.jsx(Km,{data:e,device:n,onRestore:t}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"데이터"}),c.jsxs("div",{className:"row",children:[c.jsxs("div",{children:["처음부터 다시",c.jsx("small",{children:"진행도·호감도·포인트·도감이 모두 지워집니다"})]}),c.jsx("button",{className:"btn",style:{background:"linear-gradient(180deg,#9c3c2c,#6f2a1e)"},onClick:()=>{confirm("정말 모든 진행을 지우시겠습니까? 되돌릴 수 없습니다.")&&r()},children:"초기화"})]})]}),c.jsx("div",{style:{textAlign:"center",fontSize:11,color:"var(--paper-dim)",padding:"8px 0 24px"},children:"하숙생 맞고 · 판돈은 하숙집 포인트이며 현금 환전 기능이 없습니다."})]})]})})}const Du=(()=>{const e=vh();return["송학 광","매조 홍단","공산 광"].map(n=>e.find(t=>t.name===n))})();function Jm({data:e,onChange:n,onBack:t}){const[r,i]=C.useState(null),l=h=>e.owned.includes(h.id),o=h=>h.kind==="cards"?e.equipped.cards===On(h):e.equipped.theme===On(h),s=h=>{if(!l(h)){if(e.points<h.price){i(`${(h.price-e.points).toLocaleString()}P 가 모자랍니다.`);return}n({...e,points:e.points-h.price,owned:[...e.owned,h.id],equipped:h.kind==="cards"?{...e.equipped,cards:On(h)}:{...e.equipped,theme:On(h)}}),i(`${h.name} 을(를) 들였습니다. 바로 적용했어요.`)}},a=(h,p)=>{n({...e,equipped:{...e.equipped,[h]:p}}),i(null)},f=It.filter(l).length,d=It.filter(l).reduce((h,p)=>h+p.price,0);return c.jsx("div",{className:"screen",style:{background:"var(--wood-dark)"},children:c.jsxs("div",{className:"layer",children:[c.jsxs("div",{className:"topbar",children:[c.jsx("button",{className:"iconbtn",onClick:t,"aria-label":"뒤로",children:"←"}),c.jsx("h1",{children:"상점"}),c.jsxs("span",{className:"points",children:[e.points.toLocaleString()," P"]})]}),c.jsxs("div",{className:"panel",children:[c.jsx("div",{className:"section",children:c.jsxs("div",{style:{fontSize:12.5,color:"var(--paper-dim)",lineHeight:1.65},children:["승부에 유리해지는 물건은 팔지 않습니다. 판돈으로 딴 포인트는 겉모습에만 씁니다.",c.jsx("br",{}),"보유 ",f,"/",It.length,"종 · 쓴 포인트 ",d.toLocaleString(),"P /"," ",_g.toLocaleString(),"P"]})}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"화패"}),c.jsx("div",{style:{display:"flex",gap:5,justifyContent:"center",marginBottom:12},children:Du.map(h=>c.jsx("img",{src:Cl(h,{skin:e.equipped.cards}),alt:h.name,style:{width:54,borderRadius:5,boxShadow:"0 3px 8px rgba(0,0,0,.5)"}},h.id))}),c.jsxs("div",{style:{textAlign:"center",fontSize:12,color:"var(--lamp)",marginBottom:10},children:["지금: ",Ng(e.equipped.cards)]}),It.filter(h=>h.kind==="cards").map(h=>c.jsx(Iu,{item:h,owned:l(h),equipped:o(h),points:e.points,onBuy:()=>s(h),onEquip:()=>a("cards",On(h)),preview:c.jsx("img",{src:Cl(Du[0],{skin:On(h)}),alt:"",style:{width:38,borderRadius:4}})},h.id)),e.equipped.cards!=="classic"&&c.jsx("button",{className:"btn ghost wide",style:{marginTop:8,fontSize:13},onClick:()=>a("cards","classic"),children:"기본 화패(전통)로 되돌리기"})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"마루 테마"}),c.jsxs("div",{style:{fontSize:12,color:"var(--lamp)",marginBottom:10},children:["지금: ",Ia(e.equipped.theme).name]}),It.filter(h=>h.kind==="theme").map(h=>c.jsx(Iu,{item:h,owned:l(h),equipped:o(h),points:e.points,onBuy:()=>s(h),onEquip:()=>a("theme",On(h)),preview:c.jsx(e2,{id:On(h)})},h.id)),e.equipped.theme!=="maru"&&c.jsx("button",{className:"btn ghost wide",style:{marginTop:8,fontSize:13},onClick:()=>a("theme","maru"),children:"기본 테마(밤의 마루)로 되돌리기"})]}),r&&c.jsx("div",{className:"hint-box",style:{margin:"0 0 14px"},children:r})]})]})})}function e2({id:e}){const n=Ia(e),t=n.vars["--wood-dark"]??"#2a1f18",r=n.vars["--lamp"]??"#ffd98a",i=n.vars["--wood"]??"#4a3628";return c.jsx("div",{style:{width:38,height:38,borderRadius:8,background:`linear-gradient(140deg, ${t}, ${i})`,border:`2px solid ${r}`,flex:"0 0 auto"}})}function Iu({item:e,owned:n,equipped:t,points:r,onBuy:i,onEquip:l,preview:o}){const s=r>=e.price;return c.jsxs("div",{className:"row",style:{alignItems:"center",gap:10},children:[o,c.jsxs("div",{style:{flex:1,minWidth:0},children:[e.name,c.jsx("small",{children:e.desc})]}),n?t?c.jsx("span",{style:{fontSize:12,color:"var(--ok)",fontWeight:700,flex:"0 0 auto"},children:"사용 중"}):c.jsx("button",{className:"btn",style:{padding:"7px 12px",fontSize:12.5},onClick:l,children:"적용"}):c.jsxs("button",{className:`btn ${s?"primary":""}`,style:{padding:"7px 12px",fontSize:12.5,flex:"0 0 auto"},onClick:i,disabled:!s,children:[e.price.toLocaleString(),"P"]})]})}function n2(e,n,t){const r=rh(n),i=e.lines.matchStart[r],l=i[Math.floor(Math.random()*i.length)];return{id:`__prematch_${e.id}_${t}`,title:`${e.name} · ${t}단계`,tenantId:e.id,steps:[{kind:"bg",bg:"maru",time:"night"},{kind:"narrate",text:`마루에 방석 두 개가 깔렸다. ${t}번째 판이다.`},{kind:"say",speaker:e.name,expression:"smile",text:l},{kind:"end"}],labels:{}}}function t2(){const[e,n]=C.useState(()=>ah()),[t,r]=C.useState(null),[i,l]=C.useState(!1),[o,s]=C.useState(!1),[a,f]=C.useState({name:"title"}),[d,h]=C.useState({}),[p,$]=C.useState(null);C.useEffect(()=>{let w=!0;return(async()=>{const[x,L]=await Promise.all([hg(),c1()]);w&&(r(x),l(L.recovered),n(z=>{const G=L.data.savedAt>=z.savedAt?L.data:z;return G.deviceId===x.id?G:{...G,deviceId:x.id}}),s(!0))})(),()=>{w=!1}},[]),C.useEffect(()=>{rm(e.equipped.cards);const w=Ia(e.equipped.theme),x=document.documentElement;for(const L of["--wood-dark","--wood","--wood-light","--paper","--paper-dim","--lamp","--lamp-dim","--accent"])x.style.removeProperty(L);for(const[L,z]of Object.entries(w.vars))x.style.setProperty(L,z)},[e.equipped.cards,e.equipped.theme]),C.useEffect(()=>{o&&Ba(e)},[e,o]),C.useEffect(()=>{},[]);const S=C.useMemo(()=>f1(e.recentGames),[e.recentGames]),j=C.useMemo(()=>y1(e),[e]),T=C.useCallback(()=>f({name:"home"}),[]),m=C.useCallback(w=>{const x=ch(w),L=[{id:"world",when:!0},{id:"prologue",when:!0},{id:"season_summer",when:Ji(Pr("sua"),x)},{id:"season_autumn",when:Ji(Pr("yerin"),x)},{id:"season_winter",when:Ji(Pr("yoon"),x)}];for(const z of L){if(!z.when||w.seenScenes.includes(z.id))continue;const G=Lo(z.id);if(G)return G}return null},[]),g=C.useCallback(w=>{const x=m(w);f(x?{name:"novel",scene:x,tenant:x.id==="prologue"?Pr("eunseo"):null,after:"home"}:{name:"home"})},[m]),y=C.useCallback(()=>g(e),[g,e]),v=C.useCallback(w=>{const x=e.tenants[w.id],L=lh(w);if(e.points<L){alert(`${w.name}와(과) 붙으려면 ${L.toLocaleString()}P 는 들고 있어야 합니다.
점당 ${w.rate}P 라 크게 지면 그만큼 물어줘야 하거든요.`);return}const z=Math.min(10,(x?.clearedStage??0)+1);f({name:"preMatch",tenant:w,stage:z})},[e]),k=C.useCallback((w,x,L)=>{const z=L.won?ih(w,x):0,G=g1({won:L.won,draw:L.draw,settlementTotal:L.settlementTotal,rate:w.rate}),X=d1(e,{tenantId:w.id,stage:x,won:L.won,payout:G,playerWentGo:L.playerWentGo,focus:L.focus,score:L.score},{reward:z});n(X),h(de=>({...de,[w.id]:L.won?0:(de[w.id]??0)+1}));const J=X.tenants[w.id].clearedStage;L.won&&J===x?$({tenant:w,stage:x}):T()},[e,T]);C.useEffect(()=>{if(!p)return;const{tenant:w,stage:x}=p,L=w.events.find(G=>G.stage===x),z=L?Lo(L.scriptId):null;if($(null),!z){T();return}f({name:"novel",scene:z,tenant:w,after:"home"})},[p,T]);const _=C.useCallback((w,x,L,z)=>{let G=h1(e,w.id,L.cg);if(G={...G,points:Math.max(0,G.points+L.pointDelta)},x&&L.affectionDelta!==0&&G.tenants[x.id]&&(G={...G,tenants:{...G.tenants,[x.id]:{...G.tenants[x.id],affection:Math.max(0,Math.min(100,G.tenants[x.id].affection+L.affectionDelta))}}}),n(G),z==="match"&&x){const X=G.tenants[x.id],J=Math.min(10,(X?.clearedStage??0)+1);f({name:"match",tenant:x,stage:J})}else g(G)},[e,g]);if(a.name==="title")return c.jsx("div",{className:"app",children:c.jsxs("div",{className:"screen title-screen",children:[c.jsx(Wl,{bg:"maru",time:"night"}),c.jsxs("div",{className:"layer title-screen",style:{justifyContent:"center"},children:[c.jsx("div",{className:"title-logo",children:"하숙생 맞고"}),c.jsx("div",{className:"title-sub",children:"밤마다 마루에서, 열 번의 승부"}),c.jsxs("div",{className:"title-menu",children:[c.jsx("button",{className:"btn primary wide",onClick:y,children:e.stats.totalGames>0?"이어하기":"시작하기"}),c.jsx("button",{className:"btn wide",onClick:()=>f({name:"gallery"}),children:"도감"}),c.jsx("button",{className:"btn wide",onClick:()=>f({name:"settings"}),children:"설정"})]}),c.jsx("div",{style:{marginTop:18,display:"flex",gap:2},children:En.slice(0,5).map(w=>c.jsx(lt,{tenant:w,expression:"smile",style:{width:52,opacity:.85}},w.id))})]})]})});if(a.name==="novel")return c.jsx("div",{className:"app",children:c.jsx(Pu,{scene:a.scene,tenant:a.tenant,textSpeed:e.settings.textSpeed,onDone:w=>_(a.scene,a.tenant,w,a.after)},a.scene.id)});if(a.name==="preMatch"){const w=e.tenants[a.tenant.id],x=n2(a.tenant,w?.affection??0,a.stage);return c.jsx("div",{className:"app",children:c.jsx(Pu,{scene:x,tenant:a.tenant,textSpeed:e.settings.textSpeed,onDone:()=>f({name:"match",tenant:a.tenant,stage:a.stage})},x.id)})}if(a.name==="match"){const w=e.tenants[a.tenant.id];return c.jsx("div",{className:"app wide",children:c.jsx(Om,{tenant:a.tenant,stage:a.stage,affection:w?.affection??0,rules:e.settings.rules,profile:S,losingStreak:d[a.tenant.id]??0,points:e.points,onFinish:x=>k(a.tenant,a.stage,x),onQuit:T},`${a.tenant.id}-${a.stage}-${e.stats.totalGames}`)})}return a.name==="shop"?c.jsx("div",{className:"app",children:c.jsx(Jm,{data:e,onChange:n,onBack:()=>f(e.stats.totalGames>0?{name:"home"}:{name:"title"})})}):a.name==="gallery"?c.jsx("div",{className:"app",children:c.jsx(om,{data:e,onBack:()=>f(e.stats.totalGames>0?{name:"home"}:{name:"title"})})}):a.name==="settings"?c.jsx("div",{className:"app",children:c.jsx(Xm,{data:e,device:t,onChange:n,onReset:()=>{n(u1()),f({name:"title"})},onBack:()=>f(e.stats.totalGames>0?{name:"home"}:{name:"title"})})}):c.jsxs("div",{className:"app",children:[i&&c.jsxs("div",{className:"hint-box",style:{position:"absolute",top:60,left:12,right:12,zIndex:20,cursor:"pointer"},onClick:()=>l(!1),children:["브라우저 저장소가 비워져 있어 ",c.jsx("b",{children:"백업 사본에서 진행도를 되살렸습니다."})," 설정 → 진행도 백업에서 코드를 받아 두시면 더 안전합니다. (탭하여 닫기)"]}),c.jsx(sm,{data:e,onPick:v,onGallery:()=>f({name:"gallery"}),onShop:()=>f({name:"shop"}),onSettings:()=>f({name:"settings"}),onAllowance:()=>n(w=>m1(w)),allClearedFlag:j,onHidden:()=>{const w=Lo("hidden_ending");w&&f({name:"novel",scene:w,tenant:null,after:"home"})}})]})}function r2(){const e=()=>{const n=window.visualViewport?.height??window.innerHeight;document.documentElement.style.setProperty("--app-h",`${n}px`)};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",()=>setTimeout(e,200),{passive:!0}),window.visualViewport?.addEventListener("resize",e,{passive:!0}),window.visualViewport?.addEventListener("scroll",e,{passive:!0})}function i2(){let e=0;document.addEventListener("touchstart",n=>{e=n.touches[0]?.clientY??0},{passive:!0}),document.addEventListener("touchmove",n=>{if(n.touches.length>1||(n.touches[0]?.clientY??0)-e<=0)return;let i=n.target;for(;i&&i!==document.body;){const l=getComputedStyle(i);if(/(auto|scroll)/.test(l.overflowY)&&i.scrollHeight>i.clientHeight&&i.scrollTop>0)return;i=i.parentElement}n.cancelable&&n.preventDefault()},{passive:!1})}function l2(){let e=0;document.addEventListener("touchend",n=>{const t=Date.now();t-e<320&&n.cancelable&&n.preventDefault(),e=t},{passive:!1}),document.addEventListener("gesturestart",n=>n.preventDefault())}function o2(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{const e="./";navigator.serviceWorker.register(`${e}sw.js`,{scope:e}).catch(()=>{})})}function s2(){const e=typeof navigator<"u"?navigator.userAgent:"",n=typeof window<"u"&&window.matchMedia?.("(display-mode: standalone)").matches||navigator.standalone===!0;return{inAppBrowser:/KAKAOTALK|Line\/|FBAN|FBAV|Instagram|NAVER|DaumApps/i.test(e),standalone:!!n,isIOS:/iPhone|iPad|iPod/i.test(e),isAndroid:/Android/i.test(e),landscape:typeof window<"u"&&window.innerWidth>window.innerHeight}}function a2(){r2(),i2(),l2(),o2();const e=s2();return document.documentElement.dataset.inapp=String(e.inAppBrowser),document.documentElement.dataset.standalone=String(e.standalone),e}a2();Kd(document.getElementById("root")).render(c.jsx(Xh.StrictMode,{children:c.jsx(t2,{})}));
