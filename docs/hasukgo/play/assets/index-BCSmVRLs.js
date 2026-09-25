(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function c0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nd={exports:{}},Tl={},td={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $i=Symbol.for("react.element"),u0=Symbol.for("react.portal"),d0=Symbol.for("react.fragment"),f0=Symbol.for("react.strict_mode"),h0=Symbol.for("react.profiler"),p0=Symbol.for("react.provider"),g0=Symbol.for("react.context"),m0=Symbol.for("react.forward_ref"),y0=Symbol.for("react.suspense"),$0=Symbol.for("react.memo"),w0=Symbol.for("react.lazy"),dc=Symbol.iterator;function v0(e){return e===null||typeof e!="object"?null:(e=dc&&e[dc]||e["@@iterator"],typeof e=="function"?e:null)}var rd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},id=Object.assign,ld={};function wr(e,n,t){this.props=e,this.context=n,this.refs=ld,this.updater=t||rd}wr.prototype.isReactComponent={};wr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function od(){}od.prototype=wr.prototype;function Zs(e,n,t){this.props=e,this.context=n,this.refs=ld,this.updater=t||rd}var Qs=Zs.prototype=new od;Qs.constructor=Zs;id(Qs,wr.prototype);Qs.isPureReactComponent=!0;var fc=Array.isArray,sd=Object.prototype.hasOwnProperty,Ws={current:null},ad={key:!0,ref:!0,__self:!0,__source:!0};function cd(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)sd.call(n,r)&&!ad.hasOwnProperty(r)&&(i[r]=n[r]);var s=arguments.length-2;if(s===1)i.children=t;else if(1<s){for(var a=Array(s),d=0;d<s;d++)a[d]=arguments[d+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:$i,type:e,key:l,ref:o,props:i,_owner:Ws.current}}function x0(e,n){return{$$typeof:$i,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function qs(e){return typeof e=="object"&&e!==null&&e.$$typeof===$i}function k0(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var hc=/\/+/g;function uo(e,n){return typeof e=="object"&&e!==null&&e.key!=null?k0(""+e.key):n.toString(36)}function Yi(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case $i:case u0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+uo(o,0):r,fc(i)?(t="",e!=null&&(t=e.replace(hc,"$&/")+"/"),Yi(i,n,t,"",function(d){return d})):i!=null&&(qs(i)&&(i=x0(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(hc,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",fc(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+uo(l,s);o+=Yi(l,n,t,a,i)}else if(a=v0(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+uo(l,s++),o+=Yi(l,n,t,a,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Ni(e,n,t){if(e==null)return e;var r=[],i=0;return Yi(e,r,"","",function(l){return n.call(t,l,i++)}),r}function b0(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},Xi={transition:null},S0={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:Xi,ReactCurrentOwner:Ws};function ud(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:Ni,forEach:function(e,n,t){Ni(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ni(e,function(){n++}),n},toArray:function(e){return Ni(e,function(n){return n})||[]},only:function(e){if(!qs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=wr;J.Fragment=d0;J.Profiler=h0;J.PureComponent=Zs;J.StrictMode=f0;J.Suspense=y0;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=S0;J.act=ud;J.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=id({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=Ws.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)sd.call(n,a)&&!ad.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var d=0;d<a;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:$i,type:e.type,key:i,ref:l,props:r,_owner:o}};J.createContext=function(e){return e={$$typeof:g0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:p0,_context:e},e.Consumer=e};J.createElement=cd;J.createFactory=function(e){var n=cd.bind(null,e);return n.type=e,n};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:m0,render:e}};J.isValidElement=qs;J.lazy=function(e){return{$$typeof:w0,_payload:{_status:-1,_result:e},_init:b0}};J.memo=function(e,n){return{$$typeof:$0,type:e,compare:n===void 0?null:n}};J.startTransition=function(e){var n=Xi.transition;Xi.transition={};try{e()}finally{Xi.transition=n}};J.unstable_act=ud;J.useCallback=function(e,n){return We.current.useCallback(e,n)};J.useContext=function(e){return We.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return We.current.useDeferredValue(e)};J.useEffect=function(e,n){return We.current.useEffect(e,n)};J.useId=function(){return We.current.useId()};J.useImperativeHandle=function(e,n,t){return We.current.useImperativeHandle(e,n,t)};J.useInsertionEffect=function(e,n){return We.current.useInsertionEffect(e,n)};J.useLayoutEffect=function(e,n){return We.current.useLayoutEffect(e,n)};J.useMemo=function(e,n){return We.current.useMemo(e,n)};J.useReducer=function(e,n,t){return We.current.useReducer(e,n,t)};J.useRef=function(e){return We.current.useRef(e)};J.useState=function(e){return We.current.useState(e)};J.useSyncExternalStore=function(e,n,t){return We.current.useSyncExternalStore(e,n,t)};J.useTransition=function(){return We.current.useTransition()};J.version="18.3.1";td.exports=J;var x=td.exports;const _0=c0(x);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0=x,j0=Symbol.for("react.element"),N0=Symbol.for("react.fragment"),E0=Object.prototype.hasOwnProperty,M0=C0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,L0={key:!0,ref:!0,__self:!0,__source:!0};function dd(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)E0.call(n,r)&&!L0.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:j0,type:e,key:l,ref:o,props:i,_owner:M0.current}}Tl.Fragment=N0;Tl.jsx=dd;Tl.jsxs=dd;nd.exports=Tl;var c=nd.exports,fd={exports:{}},un={},hd={exports:{}},pd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,Z){var B=E.length;E.push(Z);e:for(;0<B;){var oe=B-1>>>1,fe=E[oe];if(0<i(fe,Z))E[oe]=Z,E[B]=fe,B=oe;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var Z=E[0],B=E.pop();if(B!==Z){E[0]=B;e:for(var oe=0,fe=E.length,Cn=fe>>>1;oe<Cn;){var K=2*(oe+1)-1,G=E[K],ne=K+1,Ne=E[ne];if(0>i(G,B))ne<fe&&0>i(Ne,G)?(E[oe]=Ne,E[ne]=B,oe=ne):(E[oe]=G,E[K]=B,oe=K);else if(ne<fe&&0>i(Ne,B))E[oe]=Ne,E[ne]=B,oe=ne;else break e}}return Z}function i(E,Z){var B=E.sortIndex-Z.sortIndex;return B!==0?B:E.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],d=[],f=1,h=null,p=3,$=!1,v=!1,k=!1,F=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(E){for(var Z=t(d);Z!==null;){if(Z.callback===null)r(d);else if(Z.startTime<=E)r(d),Z.sortIndex=Z.expirationTime,n(a,Z);else break;Z=t(d)}}function w(E){if(k=!1,y(E),!v)if(t(a)!==null)v=!0,le(N);else{var Z=t(d);Z!==null&&be(w,Z.startTime-E)}}function N(E,Z){v=!1,k&&(k=!1,m(S),S=-1),$=!0;var B=p;try{for(y(Z),h=t(a);h!==null&&(!(h.expirationTime>Z)||E&&!I());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,p=h.priorityLevel;var fe=oe(h.expirationTime<=Z);Z=e.unstable_now(),typeof fe=="function"?h.callback=fe:h===t(a)&&r(a),y(Z)}else r(a);h=t(a)}if(h!==null)var Cn=!0;else{var K=t(d);K!==null&&be(w,K.startTime-Z),Cn=!1}return Cn}finally{h=null,p=B,$=!1}}var L=!1,_=null,S=-1,A=5,C=-1;function I(){return!(e.unstable_now()-C<A)}function T(){if(_!==null){var E=e.unstable_now();C=E;var Z=!0;try{Z=_(!0,E)}finally{Z?Q():(L=!1,_=null)}}else L=!1}var Q;if(typeof g=="function")Q=function(){g(T)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,ae=V.port2;V.port1.onmessage=T,Q=function(){ae.postMessage(null)}}else Q=function(){F(T,0)};function le(E){_=E,L||(L=!0,Q())}function be(E,Z){S=F(function(){E(e.unstable_now())},Z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){v||$||(v=!0,le(N))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var Z=3;break;default:Z=p}var B=p;p=Z;try{return E()}finally{p=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,Z){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var B=p;p=E;try{return Z()}finally{p=B}},e.unstable_scheduleCallback=function(E,Z,B){var oe=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?oe+B:oe):B=oe,E){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=B+fe,E={id:f++,callback:Z,priorityLevel:E,startTime:B,expirationTime:fe,sortIndex:-1},B>oe?(E.sortIndex=B,n(d,E),t(a)===null&&E===t(d)&&(k?(m(S),S=-1):k=!0,be(w,B-oe))):(E.sortIndex=fe,n(a,E),v||$||(v=!0,le(N))),E},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(E){var Z=p;return function(){var B=p;p=Z;try{return E.apply(this,arguments)}finally{p=B}}}})(pd);hd.exports=pd;var D0=hd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0=x,cn=D0;function M(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gd=new Set,ei={};function Pt(e,n){ur(e,n),ur(e+"Capture",n)}function ur(e,n){for(ei[e]=n,e=0;e<n.length;e++)gd.add(n[e])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Go=Object.prototype.hasOwnProperty,I0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pc={},gc={};function z0(e){return Go.call(gc,e)?!0:Go.call(pc,e)?!1:I0.test(e)?gc[e]=!0:(pc[e]=!0,!1)}function P0(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T0(e,n,t,r){if(n===null||typeof n>"u"||P0(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function qe(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Be[n]=new qe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ks=/[\-:]([a-z])/g;function Ys(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ks,Ys);Be[n]=new qe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ks,Ys);Be[n]=new qe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ks,Ys);Be[n]=new qe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xs(e,n,t,r){var i=Be.hasOwnProperty(n)?Be[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(T0(n,t,i,r)&&(t=null),r||i===null?z0(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Vn=A0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ei=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),Ut=Symbol.for("react.fragment"),Js=Symbol.for("react.strict_mode"),Uo=Symbol.for("react.profiler"),md=Symbol.for("react.provider"),yd=Symbol.for("react.context"),ea=Symbol.for("react.forward_ref"),Vo=Symbol.for("react.suspense"),Ho=Symbol.for("react.suspense_list"),na=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),$d=Symbol.for("react.offscreen"),mc=Symbol.iterator;function Sr(e){return e===null||typeof e!="object"?null:(e=mc&&e[mc]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,fo;function Pr(e){if(fo===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);fo=n&&n[1]||""}return`
`+fo+e}var ho=!1;function po(e,n){if(!e||ho)return"";ho=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{ho=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Pr(e):""}function B0(e){switch(e.tag){case 5:return Pr(e.type);case 16:return Pr("Lazy");case 13:return Pr("Suspense");case 19:return Pr("SuspenseList");case 0:case 2:case 15:return e=po(e.type,!1),e;case 11:return e=po(e.type.render,!1),e;case 1:return e=po(e.type,!0),e;default:return""}}function Zo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ut:return"Fragment";case Gt:return"Portal";case Uo:return"Profiler";case Js:return"StrictMode";case Vo:return"Suspense";case Ho:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yd:return(e.displayName||"Context")+".Consumer";case md:return(e._context.displayName||"Context")+".Provider";case ea:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case na:return n=e.displayName||null,n!==null?n:Zo(e.type)||"Memo";case qn:n=e._payload,e=e._init;try{return Zo(e(n))}catch{}}return null}function R0(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zo(n);case 8:return n===Js?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function F0(e){var n=wd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Mi(e){e._valueTracker||(e._valueTracker=F0(e))}function vd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=wd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function cl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qo(e,n){var t=n.checked;return ve({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function yc(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=ft(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function xd(e,n){n=n.checked,n!=null&&Xs(e,"checked",n,!1)}function Wo(e,n){xd(e,n);var t=ft(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?qo(e,n.type,t):n.hasOwnProperty("defaultValue")&&qo(e,n.type,ft(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function $c(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function qo(e,n,t){(n!=="number"||cl(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Tr=Array.isArray;function nr(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+ft(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Ko(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(M(91));return ve({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(M(92));if(Tr(t)){if(1<t.length)throw Error(M(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ft(t)}}function kd(e,n){var t=ft(n.value),r=ft(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function vc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function bd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?bd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Li,Sd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Li=Li||document.createElement("div"),Li.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Li.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ni(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O0=["Webkit","ms","Moz","O"];Object.keys(Vr).forEach(function(e){O0.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Vr[n]=Vr[e]})});function _d(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Vr.hasOwnProperty(e)&&Vr[e]?(""+n).trim():n+"px"}function Cd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=_d(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var G0=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xo(e,n){if(n){if(G0[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(M(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(M(61))}if(n.style!=null&&typeof n.style!="object")throw Error(M(62))}}function Jo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var es=null;function ta(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ns=null,tr=null,rr=null;function xc(e){if(e=xi(e)){if(typeof ns!="function")throw Error(M(280));var n=e.stateNode;n&&(n=Gl(n),ns(e.stateNode,e.type,n))}}function jd(e){tr?rr?rr.push(e):rr=[e]:tr=e}function Nd(){if(tr){var e=tr,n=rr;if(rr=tr=null,xc(e),n)for(e=0;e<n.length;e++)xc(n[e])}}function Ed(e,n){return e(n)}function Md(){}var go=!1;function Ld(e,n,t){if(go)return e(n,t);go=!0;try{return Ed(e,n,t)}finally{go=!1,(tr!==null||rr!==null)&&(Md(),Nd())}}function ti(e,n){var t=e.stateNode;if(t===null)return null;var r=Gl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(M(231,n,typeof t));return t}var ts=!1;if(Fn)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){ts=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{ts=!1}function U0(e,n,t,r,i,l,o,s,a){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(f){this.onError(f)}}var Hr=!1,ul=null,dl=!1,rs=null,V0={onError:function(e){Hr=!0,ul=e}};function H0(e,n,t,r,i,l,o,s,a){Hr=!1,ul=null,U0.apply(V0,arguments)}function Z0(e,n,t,r,i,l,o,s,a){if(H0.apply(this,arguments),Hr){if(Hr){var d=ul;Hr=!1,ul=null}else throw Error(M(198));dl||(dl=!0,rs=d)}}function Tt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Dd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function kc(e){if(Tt(e)!==e)throw Error(M(188))}function Q0(e){var n=e.alternate;if(!n){if(n=Tt(e),n===null)throw Error(M(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return kc(i),e;if(l===r)return kc(i),n;l=l.sibling}throw Error(M(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===t){o=!0,t=i,r=l;break}if(s===r){o=!0,r=i,t=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===t){o=!0,t=l,r=i;break}if(s===r){o=!0,r=l,t=i;break}s=s.sibling}if(!o)throw Error(M(189))}}if(t.alternate!==r)throw Error(M(190))}if(t.tag!==3)throw Error(M(188));return t.stateNode.current===t?e:n}function Ad(e){return e=Q0(e),e!==null?Id(e):null}function Id(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Id(e);if(n!==null)return n;e=e.sibling}return null}var zd=cn.unstable_scheduleCallback,bc=cn.unstable_cancelCallback,W0=cn.unstable_shouldYield,q0=cn.unstable_requestPaint,Se=cn.unstable_now,K0=cn.unstable_getCurrentPriorityLevel,ra=cn.unstable_ImmediatePriority,Pd=cn.unstable_UserBlockingPriority,fl=cn.unstable_NormalPriority,Y0=cn.unstable_LowPriority,Td=cn.unstable_IdlePriority,Bl=null,Ln=null;function X0(e){if(Ln&&typeof Ln.onCommitFiberRoot=="function")try{Ln.onCommitFiberRoot(Bl,e,void 0,(e.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:np,J0=Math.log,ep=Math.LN2;function np(e){return e>>>=0,e===0?32:31-(J0(e)/ep|0)|0}var Di=64,Ai=4194304;function Br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hl(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~i;s!==0?r=Br(s):(l&=o,l!==0&&(r=Br(l)))}else o=t&~i,o!==0?r=Br(o):l!==0&&(r=Br(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-bn(n),i=1<<t,r|=e[t],n&=~i;return r}function tp(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rp(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-bn(l),s=1<<o,a=i[o];a===-1?(!(s&t)||s&r)&&(i[o]=tp(s,n)):a<=n&&(e.expiredLanes|=s),l&=~s}}function is(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bd(){var e=Di;return Di<<=1,!(Di&4194240)&&(Di=64),e}function mo(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function wi(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-bn(n),e[n]=t}function ip(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-bn(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function ia(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-bn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var ue=0;function Rd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fd,la,Od,Gd,Ud,ls=!1,Ii=[],rt=null,it=null,lt=null,ri=new Map,ii=new Map,Xn=[],lp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(e,n){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":it=null;break;case"mouseover":case"mouseout":lt=null;break;case"pointerover":case"pointerout":ri.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ii.delete(n.pointerId)}}function Cr(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=xi(n),n!==null&&la(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function op(e,n,t,r,i){switch(n){case"focusin":return rt=Cr(rt,e,n,t,r,i),!0;case"dragenter":return it=Cr(it,e,n,t,r,i),!0;case"mouseover":return lt=Cr(lt,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return ri.set(l,Cr(ri.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,ii.set(l,Cr(ii.get(l)||null,e,n,t,r,i)),!0}return!1}function Vd(e){var n=_t(e.target);if(n!==null){var t=Tt(n);if(t!==null){if(n=t.tag,n===13){if(n=Dd(t),n!==null){e.blockedOn=n,Ud(e.priority,function(){Od(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ji(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=os(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);es=r,t.target.dispatchEvent(r),es=null}else return n=xi(t),n!==null&&la(n),e.blockedOn=t,!1;n.shift()}return!0}function _c(e,n,t){Ji(e)&&t.delete(n)}function sp(){ls=!1,rt!==null&&Ji(rt)&&(rt=null),it!==null&&Ji(it)&&(it=null),lt!==null&&Ji(lt)&&(lt=null),ri.forEach(_c),ii.forEach(_c)}function jr(e,n){e.blockedOn===n&&(e.blockedOn=null,ls||(ls=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,sp)))}function li(e){function n(i){return jr(i,e)}if(0<Ii.length){jr(Ii[0],e);for(var t=1;t<Ii.length;t++){var r=Ii[t];r.blockedOn===e&&(r.blockedOn=null)}}for(rt!==null&&jr(rt,e),it!==null&&jr(it,e),lt!==null&&jr(lt,e),ri.forEach(n),ii.forEach(n),t=0;t<Xn.length;t++)r=Xn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Xn.length&&(t=Xn[0],t.blockedOn===null);)Vd(t),t.blockedOn===null&&Xn.shift()}var ir=Vn.ReactCurrentBatchConfig,pl=!0;function ap(e,n,t,r){var i=ue,l=ir.transition;ir.transition=null;try{ue=1,oa(e,n,t,r)}finally{ue=i,ir.transition=l}}function cp(e,n,t,r){var i=ue,l=ir.transition;ir.transition=null;try{ue=4,oa(e,n,t,r)}finally{ue=i,ir.transition=l}}function oa(e,n,t,r){if(pl){var i=os(e,n,t,r);if(i===null)Co(e,n,r,gl,t),Sc(e,r);else if(op(i,e,n,t,r))r.stopPropagation();else if(Sc(e,r),n&4&&-1<lp.indexOf(e)){for(;i!==null;){var l=xi(i);if(l!==null&&Fd(l),l=os(e,n,t,r),l===null&&Co(e,n,r,gl,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else Co(e,n,r,null,t)}}var gl=null;function os(e,n,t,r){if(gl=null,e=ta(r),e=_t(e),e!==null)if(n=Tt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Dd(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return gl=e,null}function Hd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(K0()){case ra:return 1;case Pd:return 4;case fl:case Y0:return 16;case Td:return 536870912;default:return 16}default:return 16}}var et=null,sa=null,el=null;function Zd(){if(el)return el;var e,n=sa,t=n.length,r,i="value"in et?et.value:et.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return el=i.slice(e,1<r?1-r:void 0)}function nl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function zi(){return!0}function Cc(){return!1}function dn(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?zi:Cc,this.isPropagationStopped=Cc,this}return ve(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=zi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=zi)},persist:function(){},isPersistent:zi}),n}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},aa=dn(vr),vi=ve({},vr,{view:0,detail:0}),up=dn(vi),yo,$o,Nr,Rl=ve({},vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ca,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nr&&(Nr&&e.type==="mousemove"?(yo=e.screenX-Nr.screenX,$o=e.screenY-Nr.screenY):$o=yo=0,Nr=e),yo)},movementY:function(e){return"movementY"in e?e.movementY:$o}}),jc=dn(Rl),dp=ve({},Rl,{dataTransfer:0}),fp=dn(dp),hp=ve({},vi,{relatedTarget:0}),wo=dn(hp),pp=ve({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),gp=dn(pp),mp=ve({},vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yp=dn(mp),$p=ve({},vr,{data:0}),Nc=dn($p),wp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=xp[e])?!!n[e]:!1}function ca(){return kp}var bp=ve({},vi,{key:function(e){if(e.key){var n=wp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ca,charCode:function(e){return e.type==="keypress"?nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sp=dn(bp),_p=ve({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ec=dn(_p),Cp=ve({},vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ca}),jp=dn(Cp),Np=ve({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ep=dn(Np),Mp=ve({},Rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lp=dn(Mp),Dp=[9,13,27,32],ua=Fn&&"CompositionEvent"in window,Zr=null;Fn&&"documentMode"in document&&(Zr=document.documentMode);var Ap=Fn&&"TextEvent"in window&&!Zr,Qd=Fn&&(!ua||Zr&&8<Zr&&11>=Zr),Mc=" ",Lc=!1;function Wd(e,n){switch(e){case"keyup":return Dp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vt=!1;function Ip(e,n){switch(e){case"compositionend":return qd(n);case"keypress":return n.which!==32?null:(Lc=!0,Mc);case"textInput":return e=n.data,e===Mc&&Lc?null:e;default:return null}}function zp(e,n){if(Vt)return e==="compositionend"||!ua&&Wd(e,n)?(e=Zd(),el=sa=et=null,Vt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qd&&n.locale!=="ko"?null:n.data;default:return null}}var Pp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Pp[e.type]:n==="textarea"}function Kd(e,n,t,r){jd(r),n=ml(n,"onChange"),0<n.length&&(t=new aa("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Qr=null,oi=null;function Tp(e){af(e,0)}function Fl(e){var n=Qt(e);if(vd(n))return e}function Bp(e,n){if(e==="change")return n}var Yd=!1;if(Fn){var vo;if(Fn){var xo="oninput"in document;if(!xo){var Ac=document.createElement("div");Ac.setAttribute("oninput","return;"),xo=typeof Ac.oninput=="function"}vo=xo}else vo=!1;Yd=vo&&(!document.documentMode||9<document.documentMode)}function Ic(){Qr&&(Qr.detachEvent("onpropertychange",Xd),oi=Qr=null)}function Xd(e){if(e.propertyName==="value"&&Fl(oi)){var n=[];Kd(n,oi,e,ta(e)),Ld(Tp,n)}}function Rp(e,n,t){e==="focusin"?(Ic(),Qr=n,oi=t,Qr.attachEvent("onpropertychange",Xd)):e==="focusout"&&Ic()}function Fp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fl(oi)}function Op(e,n){if(e==="click")return Fl(n)}function Gp(e,n){if(e==="input"||e==="change")return Fl(n)}function Up(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var _n=typeof Object.is=="function"?Object.is:Up;function si(e,n){if(_n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Go.call(n,i)||!_n(e[i],n[i]))return!1}return!0}function zc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pc(e,n){var t=zc(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=zc(t)}}function Jd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Jd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ef(){for(var e=window,n=cl();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=cl(e.document)}return n}function da(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Vp(e){var n=ef(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Jd(t.ownerDocument.documentElement,t)){if(r!==null&&da(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=Pc(t,l);var o=Pc(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hp=Fn&&"documentMode"in document&&11>=document.documentMode,Ht=null,ss=null,Wr=null,as=!1;function Tc(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;as||Ht==null||Ht!==cl(r)||(r=Ht,"selectionStart"in r&&da(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&si(Wr,r)||(Wr=r,r=ml(ss,"onSelect"),0<r.length&&(n=new aa("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Ht)))}function Pi(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Zt={animationend:Pi("Animation","AnimationEnd"),animationiteration:Pi("Animation","AnimationIteration"),animationstart:Pi("Animation","AnimationStart"),transitionend:Pi("Transition","TransitionEnd")},ko={},nf={};Fn&&(nf=document.createElement("div").style,"AnimationEvent"in window||(delete Zt.animationend.animation,delete Zt.animationiteration.animation,delete Zt.animationstart.animation),"TransitionEvent"in window||delete Zt.transitionend.transition);function Ol(e){if(ko[e])return ko[e];if(!Zt[e])return e;var n=Zt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in nf)return ko[e]=n[t];return e}var tf=Ol("animationend"),rf=Ol("animationiteration"),lf=Ol("animationstart"),of=Ol("transitionend"),sf=new Map,Bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,n){sf.set(e,n),Pt(n,[e])}for(var bo=0;bo<Bc.length;bo++){var So=Bc[bo],Zp=So.toLowerCase(),Qp=So[0].toUpperCase()+So.slice(1);mt(Zp,"on"+Qp)}mt(tf,"onAnimationEnd");mt(rf,"onAnimationIteration");mt(lf,"onAnimationStart");mt("dblclick","onDoubleClick");mt("focusin","onFocus");mt("focusout","onBlur");mt(of,"onTransitionEnd");ur("onMouseEnter",["mouseout","mouseover"]);ur("onMouseLeave",["mouseout","mouseover"]);ur("onPointerEnter",["pointerout","pointerover"]);ur("onPointerLeave",["pointerout","pointerover"]);Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function Rc(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Z0(r,n,void 0,e),e.currentTarget=null}function af(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,d=s.currentTarget;if(s=s.listener,a!==l&&i.isPropagationStopped())break e;Rc(i,s,d),l=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,d=s.currentTarget,s=s.listener,a!==l&&i.isPropagationStopped())break e;Rc(i,s,d),l=a}}}if(dl)throw e=rs,dl=!1,rs=null,e}function he(e,n){var t=n[hs];t===void 0&&(t=n[hs]=new Set);var r=e+"__bubble";t.has(r)||(cf(n,e,2,!1),t.add(r))}function _o(e,n,t){var r=0;n&&(r|=4),cf(t,e,r,n)}var Ti="_reactListening"+Math.random().toString(36).slice(2);function ai(e){if(!e[Ti]){e[Ti]=!0,gd.forEach(function(t){t!=="selectionchange"&&(Wp.has(t)||_o(t,!1,e),_o(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ti]||(n[Ti]=!0,_o("selectionchange",!1,n))}}function cf(e,n,t,r){switch(Hd(n)){case 1:var i=ap;break;case 4:i=cp;break;default:i=oa}t=i.bind(null,n,t,e),i=void 0,!ts||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Co(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;s!==null;){if(o=_t(s),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}s=s.parentNode}}r=r.return}Ld(function(){var d=l,f=ta(t),h=[];e:{var p=sf.get(e);if(p!==void 0){var $=aa,v=e;switch(e){case"keypress":if(nl(t)===0)break e;case"keydown":case"keyup":$=Sp;break;case"focusin":v="focus",$=wo;break;case"focusout":v="blur",$=wo;break;case"beforeblur":case"afterblur":$=wo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=jc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=fp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=jp;break;case tf:case rf:case lf:$=gp;break;case of:$=Ep;break;case"scroll":$=up;break;case"wheel":$=Lp;break;case"copy":case"cut":case"paste":$=yp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Ec}var k=(n&4)!==0,F=!k&&e==="scroll",m=k?p!==null?p+"Capture":null:p;k=[];for(var g=d,y;g!==null;){y=g;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,m!==null&&(w=ti(g,m),w!=null&&k.push(ci(g,w,y)))),F)break;g=g.return}0<k.length&&(p=new $(p,v,null,t,f),h.push({event:p,listeners:k}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",$=e==="mouseout"||e==="pointerout",p&&t!==es&&(v=t.relatedTarget||t.fromElement)&&(_t(v)||v[On]))break e;if(($||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,$?(v=t.relatedTarget||t.toElement,$=d,v=v?_t(v):null,v!==null&&(F=Tt(v),v!==F||v.tag!==5&&v.tag!==6)&&(v=null)):($=null,v=d),$!==v)){if(k=jc,w="onMouseLeave",m="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(k=Ec,w="onPointerLeave",m="onPointerEnter",g="pointer"),F=$==null?p:Qt($),y=v==null?p:Qt(v),p=new k(w,g+"leave",$,t,f),p.target=F,p.relatedTarget=y,w=null,_t(f)===d&&(k=new k(m,g+"enter",v,t,f),k.target=y,k.relatedTarget=F,w=k),F=w,$&&v)n:{for(k=$,m=v,g=0,y=k;y;y=Rt(y))g++;for(y=0,w=m;w;w=Rt(w))y++;for(;0<g-y;)k=Rt(k),g--;for(;0<y-g;)m=Rt(m),y--;for(;g--;){if(k===m||m!==null&&k===m.alternate)break n;k=Rt(k),m=Rt(m)}k=null}else k=null;$!==null&&Fc(h,p,$,k,!1),v!==null&&F!==null&&Fc(h,F,v,k,!0)}}e:{if(p=d?Qt(d):window,$=p.nodeName&&p.nodeName.toLowerCase(),$==="select"||$==="input"&&p.type==="file")var N=Bp;else if(Dc(p))if(Yd)N=Gp;else{N=Fp;var L=Rp}else($=p.nodeName)&&$.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(N=Op);if(N&&(N=N(e,d))){Kd(h,N,t,f);break e}L&&L(e,p,d),e==="focusout"&&(L=p._wrapperState)&&L.controlled&&p.type==="number"&&qo(p,"number",p.value)}switch(L=d?Qt(d):window,e){case"focusin":(Dc(L)||L.contentEditable==="true")&&(Ht=L,ss=d,Wr=null);break;case"focusout":Wr=ss=Ht=null;break;case"mousedown":as=!0;break;case"contextmenu":case"mouseup":case"dragend":as=!1,Tc(h,t,f);break;case"selectionchange":if(Hp)break;case"keydown":case"keyup":Tc(h,t,f)}var _;if(ua)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Vt?Wd(e,t)&&(S="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(Qd&&t.locale!=="ko"&&(Vt||S!=="onCompositionStart"?S==="onCompositionEnd"&&Vt&&(_=Zd()):(et=f,sa="value"in et?et.value:et.textContent,Vt=!0)),L=ml(d,S),0<L.length&&(S=new Nc(S,e,null,t,f),h.push({event:S,listeners:L}),_?S.data=_:(_=qd(t),_!==null&&(S.data=_)))),(_=Ap?Ip(e,t):zp(e,t))&&(d=ml(d,"onBeforeInput"),0<d.length&&(f=new Nc("onBeforeInput","beforeinput",null,t,f),h.push({event:f,listeners:d}),f.data=_))}af(h,n)})}function ci(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ml(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=ti(e,t),l!=null&&r.unshift(ci(e,l,i)),l=ti(e,n),l!=null&&r.push(ci(e,l,i))),e=e.return}return r}function Rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fc(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var s=t,a=s.alternate,d=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&d!==null&&(s=d,i?(a=ti(t,l),a!=null&&o.unshift(ci(t,a,s))):i||(a=ti(t,l),a!=null&&o.push(ci(t,a,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var qp=/\r\n?/g,Kp=/\u0000|\uFFFD/g;function Oc(e){return(typeof e=="string"?e:""+e).replace(qp,`
`).replace(Kp,"")}function Bi(e,n,t){if(n=Oc(n),Oc(e)!==n&&t)throw Error(M(425))}function yl(){}var cs=null,us=null;function ds(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var fs=typeof setTimeout=="function"?setTimeout:void 0,Yp=typeof clearTimeout=="function"?clearTimeout:void 0,Gc=typeof Promise=="function"?Promise:void 0,Xp=typeof queueMicrotask=="function"?queueMicrotask:typeof Gc<"u"?function(e){return Gc.resolve(null).then(e).catch(Jp)}:fs;function Jp(e){setTimeout(function(){throw e})}function jo(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),li(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);li(n)}function ot(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Uc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var xr=Math.random().toString(36).slice(2),Mn="__reactFiber$"+xr,ui="__reactProps$"+xr,On="__reactContainer$"+xr,hs="__reactEvents$"+xr,eg="__reactListeners$"+xr,ng="__reactHandles$"+xr;function _t(e){var n=e[Mn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[On]||t[Mn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Uc(e);e!==null;){if(t=e[Mn])return t;e=Uc(e)}return n}e=t,t=e.parentNode}return null}function xi(e){return e=e[Mn]||e[On],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Gl(e){return e[ui]||null}var ps=[],Wt=-1;function yt(e){return{current:e}}function ge(e){0>Wt||(e.current=ps[Wt],ps[Wt]=null,Wt--)}function de(e,n){Wt++,ps[Wt]=e.current,e.current=n}var ht={},Ue=yt(ht),en=yt(!1),Lt=ht;function dr(e,n){var t=e.type.contextTypes;if(!t)return ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function nn(e){return e=e.childContextTypes,e!=null}function $l(){ge(en),ge(Ue)}function Vc(e,n,t){if(Ue.current!==ht)throw Error(M(168));de(Ue,n),de(en,t)}function uf(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(M(108,R0(e)||"Unknown",i));return ve({},t,r)}function wl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ht,Lt=Ue.current,de(Ue,e),de(en,en.current),!0}function Hc(e,n,t){var r=e.stateNode;if(!r)throw Error(M(169));t?(e=uf(e,n,Lt),r.__reactInternalMemoizedMergedChildContext=e,ge(en),ge(Ue),de(Ue,e)):ge(en),de(en,t)}var zn=null,Ul=!1,No=!1;function df(e){zn===null?zn=[e]:zn.push(e)}function tg(e){Ul=!0,df(e)}function $t(){if(!No&&zn!==null){No=!0;var e=0,n=ue;try{var t=zn;for(ue=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}zn=null,Ul=!1}catch(i){throw zn!==null&&(zn=zn.slice(e+1)),zd(ra,$t),i}finally{ue=n,No=!1}}return null}var qt=[],Kt=0,vl=null,xl=0,fn=[],hn=0,Dt=null,Pn=1,Tn="";function kt(e,n){qt[Kt++]=xl,qt[Kt++]=vl,vl=e,xl=n}function ff(e,n,t){fn[hn++]=Pn,fn[hn++]=Tn,fn[hn++]=Dt,Dt=e;var r=Pn;e=Tn;var i=32-bn(r)-1;r&=~(1<<i),t+=1;var l=32-bn(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pn=1<<32-bn(n)+i|t<<i|r,Tn=l+e}else Pn=1<<l|t<<i|r,Tn=e}function fa(e){e.return!==null&&(kt(e,1),ff(e,1,0))}function ha(e){for(;e===vl;)vl=qt[--Kt],qt[Kt]=null,xl=qt[--Kt],qt[Kt]=null;for(;e===Dt;)Dt=fn[--hn],fn[hn]=null,Tn=fn[--hn],fn[hn]=null,Pn=fn[--hn],fn[hn]=null}var an=null,sn=null,me=!1,kn=null;function hf(e,n){var t=pn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Zc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,an=e,sn=ot(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,an=e,sn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Dt!==null?{id:Pn,overflow:Tn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=pn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,an=e,sn=null,!0):!1;default:return!1}}function gs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ms(e){if(me){var n=sn;if(n){var t=n;if(!Zc(e,n)){if(gs(e))throw Error(M(418));n=ot(t.nextSibling);var r=an;n&&Zc(e,n)?hf(r,t):(e.flags=e.flags&-4097|2,me=!1,an=e)}}else{if(gs(e))throw Error(M(418));e.flags=e.flags&-4097|2,me=!1,an=e}}}function Qc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;an=e}function Ri(e){if(e!==an)return!1;if(!me)return Qc(e),me=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ds(e.type,e.memoizedProps)),n&&(n=sn)){if(gs(e))throw pf(),Error(M(418));for(;n;)hf(e,n),n=ot(n.nextSibling)}if(Qc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){sn=ot(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}sn=null}}else sn=an?ot(e.stateNode.nextSibling):null;return!0}function pf(){for(var e=sn;e;)e=ot(e.nextSibling)}function fr(){sn=an=null,me=!1}function pa(e){kn===null?kn=[e]:kn.push(e)}var rg=Vn.ReactCurrentBatchConfig;function Er(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(M(309));var r=t.stateNode}if(!r)throw Error(M(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(M(284));if(!t._owner)throw Error(M(290,e))}return e}function Fi(e,n){throw e=Object.prototype.toString.call(n),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Wc(e){var n=e._init;return n(e._payload)}function gf(e){function n(m,g){if(e){var y=m.deletions;y===null?(m.deletions=[g],m.flags|=16):y.push(g)}}function t(m,g){if(!e)return null;for(;g!==null;)n(m,g),g=g.sibling;return null}function r(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function i(m,g){return m=ut(m,g),m.index=0,m.sibling=null,m}function l(m,g,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<g?(m.flags|=2,g):y):(m.flags|=2,g)):(m.flags|=1048576,g)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,g,y,w){return g===null||g.tag!==6?(g=zo(y,m.mode,w),g.return=m,g):(g=i(g,y),g.return=m,g)}function a(m,g,y,w){var N=y.type;return N===Ut?f(m,g,y.props.children,w,y.key):g!==null&&(g.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===qn&&Wc(N)===g.type)?(w=i(g,y.props),w.ref=Er(m,g,y),w.return=m,w):(w=al(y.type,y.key,y.props,null,m.mode,w),w.ref=Er(m,g,y),w.return=m,w)}function d(m,g,y,w){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Po(y,m.mode,w),g.return=m,g):(g=i(g,y.children||[]),g.return=m,g)}function f(m,g,y,w,N){return g===null||g.tag!==7?(g=Mt(y,m.mode,w,N),g.return=m,g):(g=i(g,y),g.return=m,g)}function h(m,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=zo(""+g,m.mode,y),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ei:return y=al(g.type,g.key,g.props,null,m.mode,y),y.ref=Er(m,null,g),y.return=m,y;case Gt:return g=Po(g,m.mode,y),g.return=m,g;case qn:var w=g._init;return h(m,w(g._payload),y)}if(Tr(g)||Sr(g))return g=Mt(g,m.mode,y,null),g.return=m,g;Fi(m,g)}return null}function p(m,g,y,w){var N=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return N!==null?null:s(m,g,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ei:return y.key===N?a(m,g,y,w):null;case Gt:return y.key===N?d(m,g,y,w):null;case qn:return N=y._init,p(m,g,N(y._payload),w)}if(Tr(y)||Sr(y))return N!==null?null:f(m,g,y,w,null);Fi(m,y)}return null}function $(m,g,y,w,N){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(y)||null,s(g,m,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ei:return m=m.get(w.key===null?y:w.key)||null,a(g,m,w,N);case Gt:return m=m.get(w.key===null?y:w.key)||null,d(g,m,w,N);case qn:var L=w._init;return $(m,g,y,L(w._payload),N)}if(Tr(w)||Sr(w))return m=m.get(y)||null,f(g,m,w,N,null);Fi(g,w)}return null}function v(m,g,y,w){for(var N=null,L=null,_=g,S=g=0,A=null;_!==null&&S<y.length;S++){_.index>S?(A=_,_=null):A=_.sibling;var C=p(m,_,y[S],w);if(C===null){_===null&&(_=A);break}e&&_&&C.alternate===null&&n(m,_),g=l(C,g,S),L===null?N=C:L.sibling=C,L=C,_=A}if(S===y.length)return t(m,_),me&&kt(m,S),N;if(_===null){for(;S<y.length;S++)_=h(m,y[S],w),_!==null&&(g=l(_,g,S),L===null?N=_:L.sibling=_,L=_);return me&&kt(m,S),N}for(_=r(m,_);S<y.length;S++)A=$(_,m,S,y[S],w),A!==null&&(e&&A.alternate!==null&&_.delete(A.key===null?S:A.key),g=l(A,g,S),L===null?N=A:L.sibling=A,L=A);return e&&_.forEach(function(I){return n(m,I)}),me&&kt(m,S),N}function k(m,g,y,w){var N=Sr(y);if(typeof N!="function")throw Error(M(150));if(y=N.call(y),y==null)throw Error(M(151));for(var L=N=null,_=g,S=g=0,A=null,C=y.next();_!==null&&!C.done;S++,C=y.next()){_.index>S?(A=_,_=null):A=_.sibling;var I=p(m,_,C.value,w);if(I===null){_===null&&(_=A);break}e&&_&&I.alternate===null&&n(m,_),g=l(I,g,S),L===null?N=I:L.sibling=I,L=I,_=A}if(C.done)return t(m,_),me&&kt(m,S),N;if(_===null){for(;!C.done;S++,C=y.next())C=h(m,C.value,w),C!==null&&(g=l(C,g,S),L===null?N=C:L.sibling=C,L=C);return me&&kt(m,S),N}for(_=r(m,_);!C.done;S++,C=y.next())C=$(_,m,S,C.value,w),C!==null&&(e&&C.alternate!==null&&_.delete(C.key===null?S:C.key),g=l(C,g,S),L===null?N=C:L.sibling=C,L=C);return e&&_.forEach(function(T){return n(m,T)}),me&&kt(m,S),N}function F(m,g,y,w){if(typeof y=="object"&&y!==null&&y.type===Ut&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ei:e:{for(var N=y.key,L=g;L!==null;){if(L.key===N){if(N=y.type,N===Ut){if(L.tag===7){t(m,L.sibling),g=i(L,y.props.children),g.return=m,m=g;break e}}else if(L.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===qn&&Wc(N)===L.type){t(m,L.sibling),g=i(L,y.props),g.ref=Er(m,L,y),g.return=m,m=g;break e}t(m,L);break}else n(m,L);L=L.sibling}y.type===Ut?(g=Mt(y.props.children,m.mode,w,y.key),g.return=m,m=g):(w=al(y.type,y.key,y.props,null,m.mode,w),w.ref=Er(m,g,y),w.return=m,m=w)}return o(m);case Gt:e:{for(L=y.key;g!==null;){if(g.key===L)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){t(m,g.sibling),g=i(g,y.children||[]),g.return=m,m=g;break e}else{t(m,g);break}else n(m,g);g=g.sibling}g=Po(y,m.mode,w),g.return=m,m=g}return o(m);case qn:return L=y._init,F(m,g,L(y._payload),w)}if(Tr(y))return v(m,g,y,w);if(Sr(y))return k(m,g,y,w);Fi(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(t(m,g.sibling),g=i(g,y),g.return=m,m=g):(t(m,g),g=zo(y,m.mode,w),g.return=m,m=g),o(m)):t(m,g)}return F}var hr=gf(!0),mf=gf(!1),kl=yt(null),bl=null,Yt=null,ga=null;function ma(){ga=Yt=bl=null}function ya(e){var n=kl.current;ge(kl),e._currentValue=n}function ys(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function lr(e,n){bl=e,ga=Yt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Je=!0),e.firstContext=null)}function mn(e){var n=e._currentValue;if(ga!==e)if(e={context:e,memoizedValue:n,next:null},Yt===null){if(bl===null)throw Error(M(308));Yt=e,bl.dependencies={lanes:0,firstContext:e}}else Yt=Yt.next=e;return n}var Ct=null;function $a(e){Ct===null?Ct=[e]:Ct.push(e)}function yf(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,$a(n)):(t.next=i.next,i.next=t),n.interleaved=t,Gn(e,r)}function Gn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Kn=!1;function wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $f(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function st(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Gn(e,t)}return i=r.interleaved,i===null?(n.next=n,$a(r)):(n.next=i.next,i.next=n),r.interleaved=n,Gn(e,t)}function tl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ia(e,t)}}function qc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Sl(e,n,t,r){var i=e.updateQueue;Kn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,d=a.next;a.next=null,o===null?l=d:o.next=d,o=a;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==o&&(s===null?f.firstBaseUpdate=d:s.next=d,f.lastBaseUpdate=a))}if(l!==null){var h=i.baseState;o=0,f=d=a=null,s=l;do{var p=s.lane,$=s.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:$,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,k=s;switch(p=n,$=t,k.tag){case 1:if(v=k.payload,typeof v=="function"){h=v.call($,h,p);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,p=typeof v=="function"?v.call($,h,p):v,p==null)break e;h=ve({},h,p);break e;case 2:Kn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[s]:p.push(s))}else $={eventTime:$,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(d=f=$,a=h):f=f.next=$,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(f===null&&(a=h),i.baseState=a,i.firstBaseUpdate=d,i.lastBaseUpdate=f,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);It|=o,e.lanes=o,e.memoizedState=h}}function Kc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var ki={},Dn=yt(ki),di=yt(ki),fi=yt(ki);function jt(e){if(e===ki)throw Error(M(174));return e}function va(e,n){switch(de(fi,n),de(di,e),de(Dn,ki),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Yo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Yo(n,e)}ge(Dn),de(Dn,n)}function pr(){ge(Dn),ge(di),ge(fi)}function wf(e){jt(fi.current);var n=jt(Dn.current),t=Yo(n,e.type);n!==t&&(de(di,e),de(Dn,t))}function xa(e){di.current===e&&(ge(Dn),ge(di))}var $e=yt(0);function _l(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Eo=[];function ka(){for(var e=0;e<Eo.length;e++)Eo[e]._workInProgressVersionPrimary=null;Eo.length=0}var rl=Vn.ReactCurrentDispatcher,Mo=Vn.ReactCurrentBatchConfig,At=0,we=null,Ee=null,De=null,Cl=!1,qr=!1,hi=0,ig=0;function Fe(){throw Error(M(321))}function ba(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!_n(e[t],n[t]))return!1;return!0}function Sa(e,n,t,r,i,l){if(At=l,we=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,rl.current=e===null||e.memoizedState===null?ag:cg,e=t(r,i),qr){l=0;do{if(qr=!1,hi=0,25<=l)throw Error(M(301));l+=1,De=Ee=null,n.updateQueue=null,rl.current=ug,e=t(r,i)}while(qr)}if(rl.current=jl,n=Ee!==null&&Ee.next!==null,At=0,De=Ee=we=null,Cl=!1,n)throw Error(M(300));return e}function _a(){var e=hi!==0;return hi=0,e}function En(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?we.memoizedState=De=e:De=De.next=e,De}function yn(){if(Ee===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var n=De===null?we.memoizedState:De.next;if(n!==null)De=n,Ee=e;else{if(e===null)throw Error(M(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},De===null?we.memoizedState=De=e:De=De.next=e}return De}function pi(e,n){return typeof n=="function"?n(e):n}function Lo(e){var n=yn(),t=n.queue;if(t===null)throw Error(M(311));t.lastRenderedReducer=e;var r=Ee,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,a=null,d=l;do{var f=d.lane;if((At&f)===f)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(s=a=h,o=r):a=a.next=h,we.lanes|=f,It|=f}d=d.next}while(d!==null&&d!==l);a===null?o=r:a.next=s,_n(r,n.memoizedState)||(Je=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,we.lanes|=l,It|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Do(e){var n=yn(),t=n.queue;if(t===null)throw Error(M(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);_n(l,n.memoizedState)||(Je=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function vf(){}function xf(e,n){var t=we,r=yn(),i=n(),l=!_n(r.memoizedState,i);if(l&&(r.memoizedState=i,Je=!0),r=r.queue,Ca(Sf.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||De!==null&&De.memoizedState.tag&1){if(t.flags|=2048,gi(9,bf.bind(null,t,r,i,n),void 0,null),Ae===null)throw Error(M(349));At&30||kf(t,n,i)}return i}function kf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=we.updateQueue,n===null?(n={lastEffect:null,stores:null},we.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function bf(e,n,t,r){n.value=t,n.getSnapshot=r,_f(n)&&Cf(e)}function Sf(e,n,t){return t(function(){_f(n)&&Cf(e)})}function _f(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!_n(e,t)}catch{return!0}}function Cf(e){var n=Gn(e,1);n!==null&&Sn(n,e,1,-1)}function Yc(e){var n=En();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pi,lastRenderedState:e},n.queue=e,e=e.dispatch=sg.bind(null,we,e),[n.memoizedState,e]}function gi(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=we.updateQueue,n===null?(n={lastEffect:null,stores:null},we.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function jf(){return yn().memoizedState}function il(e,n,t,r){var i=En();we.flags|=e,i.memoizedState=gi(1|n,t,void 0,r===void 0?null:r)}function Vl(e,n,t,r){var i=yn();r=r===void 0?null:r;var l=void 0;if(Ee!==null){var o=Ee.memoizedState;if(l=o.destroy,r!==null&&ba(r,o.deps)){i.memoizedState=gi(n,t,l,r);return}}we.flags|=e,i.memoizedState=gi(1|n,t,l,r)}function Xc(e,n){return il(8390656,8,e,n)}function Ca(e,n){return Vl(2048,8,e,n)}function Nf(e,n){return Vl(4,2,e,n)}function Ef(e,n){return Vl(4,4,e,n)}function Mf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Lf(e,n,t){return t=t!=null?t.concat([e]):null,Vl(4,4,Mf.bind(null,n,e),t)}function ja(){}function Df(e,n){var t=yn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ba(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Af(e,n){var t=yn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&ba(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function If(e,n,t){return At&21?(_n(t,n)||(t=Bd(),we.lanes|=t,It|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=t)}function lg(e,n){var t=ue;ue=t!==0&&4>t?t:4,e(!0);var r=Mo.transition;Mo.transition={};try{e(!1),n()}finally{ue=t,Mo.transition=r}}function zf(){return yn().memoizedState}function og(e,n,t){var r=ct(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Pf(e))Tf(n,t);else if(t=yf(e,n,t,r),t!==null){var i=Qe();Sn(t,e,r,i),Bf(t,n,r)}}function sg(e,n,t){var r=ct(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Pf(e))Tf(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,s=l(o,t);if(i.hasEagerState=!0,i.eagerState=s,_n(s,o)){var a=n.interleaved;a===null?(i.next=i,$a(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=yf(e,n,i,r),t!==null&&(i=Qe(),Sn(t,e,r,i),Bf(t,n,r))}}function Pf(e){var n=e.alternate;return e===we||n!==null&&n===we}function Tf(e,n){qr=Cl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Bf(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ia(e,t)}}var jl={readContext:mn,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},ag={readContext:mn,useCallback:function(e,n){return En().memoizedState=[e,n===void 0?null:n],e},useContext:mn,useEffect:Xc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,il(4194308,4,Mf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return il(4194308,4,e,n)},useInsertionEffect:function(e,n){return il(4,2,e,n)},useMemo:function(e,n){var t=En();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=En();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=og.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var n=En();return e={current:e},n.memoizedState=e},useState:Yc,useDebugValue:ja,useDeferredValue:function(e){return En().memoizedState=e},useTransition:function(){var e=Yc(!1),n=e[0];return e=lg.bind(null,e[1]),En().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=we,i=En();if(me){if(t===void 0)throw Error(M(407));t=t()}else{if(t=n(),Ae===null)throw Error(M(349));At&30||kf(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Xc(Sf.bind(null,r,l,e),[e]),r.flags|=2048,gi(9,bf.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=En(),n=Ae.identifierPrefix;if(me){var t=Tn,r=Pn;t=(r&~(1<<32-bn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=hi++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=ig++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},cg={readContext:mn,useCallback:Df,useContext:mn,useEffect:Ca,useImperativeHandle:Lf,useInsertionEffect:Nf,useLayoutEffect:Ef,useMemo:Af,useReducer:Lo,useRef:jf,useState:function(){return Lo(pi)},useDebugValue:ja,useDeferredValue:function(e){var n=yn();return If(n,Ee.memoizedState,e)},useTransition:function(){var e=Lo(pi)[0],n=yn().memoizedState;return[e,n]},useMutableSource:vf,useSyncExternalStore:xf,useId:zf,unstable_isNewReconciler:!1},ug={readContext:mn,useCallback:Df,useContext:mn,useEffect:Ca,useImperativeHandle:Lf,useInsertionEffect:Nf,useLayoutEffect:Ef,useMemo:Af,useReducer:Do,useRef:jf,useState:function(){return Do(pi)},useDebugValue:ja,useDeferredValue:function(e){var n=yn();return Ee===null?n.memoizedState=e:If(n,Ee.memoizedState,e)},useTransition:function(){var e=Do(pi)[0],n=yn().memoizedState;return[e,n]},useMutableSource:vf,useSyncExternalStore:xf,useId:zf,unstable_isNewReconciler:!1};function vn(e,n){if(e&&e.defaultProps){n=ve({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function $s(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:ve({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Hl={isMounted:function(e){return(e=e._reactInternals)?Tt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Qe(),i=ct(e),l=Bn(r,i);l.payload=n,t!=null&&(l.callback=t),n=st(e,l,i),n!==null&&(Sn(n,e,i,r),tl(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Qe(),i=ct(e),l=Bn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=st(e,l,i),n!==null&&(Sn(n,e,i,r),tl(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Qe(),r=ct(e),i=Bn(t,r);i.tag=2,n!=null&&(i.callback=n),n=st(e,i,r),n!==null&&(Sn(n,e,r,t),tl(n,e,r))}};function Jc(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!si(t,r)||!si(i,l):!0}function Rf(e,n,t){var r=!1,i=ht,l=n.contextType;return typeof l=="object"&&l!==null?l=mn(l):(i=nn(n)?Lt:Ue.current,r=n.contextTypes,l=(r=r!=null)?dr(e,i):ht),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Hl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function eu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Hl.enqueueReplaceState(n,n.state,null)}function ws(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},wa(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=mn(l):(l=nn(n)?Lt:Ue.current,i.context=dr(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&($s(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Hl.enqueueReplaceState(i,i.state,null),Sl(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function gr(e,n){try{var t="",r=n;do t+=B0(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function Ao(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function vs(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var dg=typeof WeakMap=="function"?WeakMap:Map;function Ff(e,n,t){t=Bn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){El||(El=!0,Ms=r),vs(e,n)},t}function Of(e,n,t){t=Bn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){vs(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){vs(e,n),typeof r!="function"&&(at===null?at=new Set([this]):at.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function nu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new dg;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=_g.bind(null,e,n,t),n.then(e,e))}function tu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ru(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Bn(-1,1),n.tag=2,st(t,n,1))),t.lanes|=1),e)}var fg=Vn.ReactCurrentOwner,Je=!1;function He(e,n,t,r){n.child=e===null?mf(n,null,t,r):hr(n,e.child,t,r)}function iu(e,n,t,r,i){t=t.render;var l=n.ref;return lr(n,i),r=Sa(e,n,t,r,l,i),t=_a(),e!==null&&!Je?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Un(e,n,i)):(me&&t&&fa(n),n.flags|=1,He(e,n,r,i),n.child)}function lu(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!za(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,Gf(e,n,l,r,i)):(e=al(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:si,t(o,r)&&e.ref===n.ref)return Un(e,n,i)}return n.flags|=1,e=ut(l,r),e.ref=n.ref,e.return=n,n.child=e}function Gf(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(si(l,r)&&e.ref===n.ref)if(Je=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Je=!0);else return n.lanes=e.lanes,Un(e,n,i)}return xs(e,n,t,r,i)}function Uf(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Jt,on),on|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,de(Jt,on),on|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,de(Jt,on),on|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,de(Jt,on),on|=r;return He(e,n,i,t),n.child}function Vf(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function xs(e,n,t,r,i){var l=nn(t)?Lt:Ue.current;return l=dr(n,l),lr(n,i),t=Sa(e,n,t,r,l,i),r=_a(),e!==null&&!Je?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Un(e,n,i)):(me&&r&&fa(n),n.flags|=1,He(e,n,t,i),n.child)}function ou(e,n,t,r,i){if(nn(t)){var l=!0;wl(n)}else l=!1;if(lr(n,i),n.stateNode===null)ll(e,n),Rf(n,t,r),ws(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var a=o.context,d=t.contextType;typeof d=="object"&&d!==null?d=mn(d):(d=nn(t)?Lt:Ue.current,d=dr(n,d));var f=t.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==d)&&eu(n,o,r,d),Kn=!1;var p=n.memoizedState;o.state=p,Sl(n,r,o,i),a=n.memoizedState,s!==r||p!==a||en.current||Kn?(typeof f=="function"&&($s(n,t,f,r),a=n.memoizedState),(s=Kn||Jc(n,t,s,r,p,a,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,$f(e,n),s=n.memoizedProps,d=n.type===n.elementType?s:vn(n.type,s),o.props=d,h=n.pendingProps,p=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=mn(a):(a=nn(t)?Lt:Ue.current,a=dr(n,a));var $=t.getDerivedStateFromProps;(f=typeof $=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||p!==a)&&eu(n,o,r,a),Kn=!1,p=n.memoizedState,o.state=p,Sl(n,r,o,i);var v=n.memoizedState;s!==h||p!==v||en.current||Kn?(typeof $=="function"&&($s(n,t,$,r),v=n.memoizedState),(d=Kn||Jc(n,t,d,r,p,v,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=v),o.props=r,o.state=v,o.context=a,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return ks(e,n,t,r,l,i)}function ks(e,n,t,r,i,l){Vf(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Hc(n,t,!1),Un(e,n,l);r=n.stateNode,fg.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=hr(n,e.child,null,l),n.child=hr(n,null,s,l)):He(e,n,s,l),n.memoizedState=r.state,i&&Hc(n,t,!0),n.child}function Hf(e){var n=e.stateNode;n.pendingContext?Vc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Vc(e,n.context,!1),va(e,n.containerInfo)}function su(e,n,t,r,i){return fr(),pa(i),n.flags|=256,He(e,n,t,r),n.child}var bs={dehydrated:null,treeContext:null,retryLane:0};function Ss(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zf(e,n,t){var r=n.pendingProps,i=$e.current,l=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),de($e,i&1),e===null)return ms(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Wl(o,r,0,null),e=Mt(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Ss(t),n.memoizedState=bs,e):Na(n,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return hg(e,n,o,r,s,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=ut(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=ut(s,l):(l=Mt(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?Ss(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=bs,r}return l=e.child,e=l.sibling,r=ut(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Na(e,n){return n=Wl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Oi(e,n,t,r){return r!==null&&pa(r),hr(n,e.child,null,t),e=Na(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function hg(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=Ao(Error(M(422))),Oi(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=Wl({mode:"visible",children:r.children},i,0,null),l=Mt(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&hr(n,e.child,null,o),n.child.memoizedState=Ss(o),n.memoizedState=bs,l);if(!(n.mode&1))return Oi(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(M(419)),r=Ao(l,r,void 0),Oi(e,n,o,r)}if(s=(o&e.childLanes)!==0,Je||s){if(r=Ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Gn(e,i),Sn(r,e,i,-1))}return Ia(),r=Ao(Error(M(421))),Oi(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Cg.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,sn=ot(i.nextSibling),an=n,me=!0,kn=null,e!==null&&(fn[hn++]=Pn,fn[hn++]=Tn,fn[hn++]=Dt,Pn=e.id,Tn=e.overflow,Dt=n),n=Na(n,r.children),n.flags|=4096,n)}function au(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ys(e.return,n,t)}function Io(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function Qf(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(He(e,n,r.children,t),r=$e.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&au(e,t,n);else if(e.tag===19)au(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de($e,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&_l(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Io(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&_l(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Io(n,!0,t,null,l);break;case"together":Io(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ll(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Un(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),It|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(M(153));if(n.child!==null){for(e=n.child,t=ut(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=ut(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function pg(e,n,t){switch(n.tag){case 3:Hf(n),fr();break;case 5:wf(n);break;case 1:nn(n.type)&&wl(n);break;case 4:va(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;de(kl,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(de($e,$e.current&1),n.flags|=128,null):t&n.child.childLanes?Zf(e,n,t):(de($e,$e.current&1),e=Un(e,n,t),e!==null?e.sibling:null);de($e,$e.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Qf(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de($e,$e.current),r)break;return null;case 22:case 23:return n.lanes=0,Uf(e,n,t)}return Un(e,n,t)}var Wf,_s,qf,Kf;Wf=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};_s=function(){};qf=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,jt(Dn.current);var l=null;switch(t){case"input":i=Qo(e,i),r=Qo(e,r),l=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),l=[];break;case"textarea":i=Ko(e,i),r=Ko(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=yl)}Xo(t,r);var o;t=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ei.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var a=r[d];if(s=i?.[d],r.hasOwnProperty(d)&&a!==s&&(a!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(l||(l=[]),l.push(d,t)),t=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ei.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&he("scroll",e),l||s===a||(l=[])):(l=l||[]).push(d,a))}t&&(l=l||[]).push("style",t);var d=l;(n.updateQueue=d)&&(n.flags|=4)}};Kf=function(e,n,t,r){t!==r&&(n.flags|=4)};function Mr(e,n){if(!me)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function gg(e,n,t){var r=n.pendingProps;switch(ha(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(n),null;case 1:return nn(n.type)&&$l(),Oe(n),null;case 3:return r=n.stateNode,pr(),ge(en),ge(Ue),ka(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ri(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,kn!==null&&(As(kn),kn=null))),_s(e,n),Oe(n),null;case 5:xa(n);var i=jt(fi.current);if(t=n.type,e!==null&&n.stateNode!=null)qf(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(M(166));return Oe(n),null}if(e=jt(Dn.current),Ri(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Mn]=n,r[ui]=l,e=(n.mode&1)!==0,t){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<Rr.length;i++)he(Rr[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":yc(r,l),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},he("invalid",r);break;case"textarea":wc(r,l),he("invalid",r)}Xo(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Bi(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Bi(r.textContent,s,e),i=["children",""+s]):ei.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&he("scroll",r)}switch(t){case"input":Mi(r),$c(r,l,!0);break;case"textarea":Mi(r),vc(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=yl)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bd(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Mn]=n,e[ui]=r,Wf(e,n,!1,!1),n.stateNode=e;e:{switch(o=Jo(t,r),t){case"dialog":he("cancel",e),he("close",e),i=r;break;case"iframe":case"object":case"embed":he("load",e),i=r;break;case"video":case"audio":for(i=0;i<Rr.length;i++)he(Rr[i],e);i=r;break;case"source":he("error",e),i=r;break;case"img":case"image":case"link":he("error",e),he("load",e),i=r;break;case"details":he("toggle",e),i=r;break;case"input":yc(e,r),i=Qo(e,r),he("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),he("invalid",e);break;case"textarea":wc(e,r),i=Ko(e,r),he("invalid",e);break;default:i=r}Xo(t,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?Cd(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Sd(e,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&ni(e,a):typeof a=="number"&&ni(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ei.hasOwnProperty(l)?a!=null&&l==="onScroll"&&he("scroll",e):a!=null&&Xs(e,l,a,o))}switch(t){case"input":Mi(e),$c(e,r,!1);break;case"textarea":Mi(e),vc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ft(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?nr(e,!!r.multiple,l,!1):r.defaultValue!=null&&nr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=yl)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Oe(n),null;case 6:if(e&&n.stateNode!=null)Kf(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(M(166));if(t=jt(fi.current),jt(Dn.current),Ri(n)){if(r=n.stateNode,t=n.memoizedProps,r[Mn]=n,(l=r.nodeValue!==t)&&(e=an,e!==null))switch(e.tag){case 3:Bi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bi(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Mn]=n,n.stateNode=r}return Oe(n),null;case 13:if(ge($e),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&sn!==null&&n.mode&1&&!(n.flags&128))pf(),fr(),n.flags|=98560,l=!1;else if(l=Ri(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(M(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(M(317));l[Mn]=n}else fr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Oe(n),l=!1}else kn!==null&&(As(kn),kn=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||$e.current&1?Me===0&&(Me=3):Ia())),n.updateQueue!==null&&(n.flags|=4),Oe(n),null);case 4:return pr(),_s(e,n),e===null&&ai(n.stateNode.containerInfo),Oe(n),null;case 10:return ya(n.type._context),Oe(n),null;case 17:return nn(n.type)&&$l(),Oe(n),null;case 19:if(ge($e),l=n.memoizedState,l===null)return Oe(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)Mr(l,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=_l(e),o!==null){for(n.flags|=128,Mr(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return de($e,$e.current&1|2),n.child}e=e.sibling}l.tail!==null&&Se()>mr&&(n.flags|=128,r=!0,Mr(l,!1),n.lanes=4194304)}else{if(!r)if(e=_l(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Mr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!me)return Oe(n),null}else 2*Se()-l.renderingStartTime>mr&&t!==1073741824&&(n.flags|=128,r=!0,Mr(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Se(),n.sibling=null,t=$e.current,de($e,r?t&1|2:t&1),n):(Oe(n),null);case 22:case 23:return Aa(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?on&1073741824&&(Oe(n),n.subtreeFlags&6&&(n.flags|=8192)):Oe(n),null;case 24:return null;case 25:return null}throw Error(M(156,n.tag))}function mg(e,n){switch(ha(n),n.tag){case 1:return nn(n.type)&&$l(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return pr(),ge(en),ge(Ue),ka(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return xa(n),null;case 13:if(ge($e),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(M(340));fr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ge($e),null;case 4:return pr(),null;case 10:return ya(n.type._context),null;case 22:case 23:return Aa(),null;case 24:return null;default:return null}}var Gi=!1,Ge=!1,yg=typeof WeakSet=="function"?WeakSet:Set,z=null;function Xt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){xe(e,n,r)}else t.current=null}function Cs(e,n,t){try{t()}catch(r){xe(e,n,r)}}var cu=!1;function $g(e,n){if(cs=pl,e=ef(),da(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,s=-1,a=-1,d=0,f=0,h=e,p=null;n:for(;;){for(var $;h!==t||i!==0&&h.nodeType!==3||(s=o+i),h!==l||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),($=h.firstChild)!==null;)p=h,h=$;for(;;){if(h===e)break n;if(p===t&&++d===i&&(s=o),p===l&&++f===r&&(a=o),($=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=$}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(us={focusedElem:e,selectionRange:t},pl=!1,z=n;z!==null;)if(n=z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,z=e;else for(;z!==null;){n=z;try{var v=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,F=v.memoizedState,m=n.stateNode,g=m.getSnapshotBeforeUpdate(n.elementType===n.type?k:vn(n.type,k),F);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(w){xe(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,z=e;break}z=n.return}return v=cu,cu=!1,v}function Kr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Cs(n,t,l)}i=i.next}while(i!==r)}}function Zl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function js(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Yf(e){var n=e.alternate;n!==null&&(e.alternate=null,Yf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Mn],delete n[ui],delete n[hs],delete n[eg],delete n[ng])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xf(e){return e.tag===5||e.tag===3||e.tag===4}function uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ns(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=yl));else if(r!==4&&(e=e.child,e!==null))for(Ns(e,n,t),e=e.sibling;e!==null;)Ns(e,n,t),e=e.sibling}function Es(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Es(e,n,t),e=e.sibling;e!==null;)Es(e,n,t),e=e.sibling}var Ie=null,xn=!1;function Zn(e,n,t){for(t=t.child;t!==null;)Jf(e,n,t),t=t.sibling}function Jf(e,n,t){if(Ln&&typeof Ln.onCommitFiberUnmount=="function")try{Ln.onCommitFiberUnmount(Bl,t)}catch{}switch(t.tag){case 5:Ge||Xt(t,n);case 6:var r=Ie,i=xn;Ie=null,Zn(e,n,t),Ie=r,xn=i,Ie!==null&&(xn?(e=Ie,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ie.removeChild(t.stateNode));break;case 18:Ie!==null&&(xn?(e=Ie,t=t.stateNode,e.nodeType===8?jo(e.parentNode,t):e.nodeType===1&&jo(e,t),li(e)):jo(Ie,t.stateNode));break;case 4:r=Ie,i=xn,Ie=t.stateNode.containerInfo,xn=!0,Zn(e,n,t),Ie=r,xn=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Cs(t,n,o),i=i.next}while(i!==r)}Zn(e,n,t);break;case 1:if(!Ge&&(Xt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){xe(t,n,s)}Zn(e,n,t);break;case 21:Zn(e,n,t);break;case 22:t.mode&1?(Ge=(r=Ge)||t.memoizedState!==null,Zn(e,n,t),Ge=r):Zn(e,n,t);break;default:Zn(e,n,t)}}function du(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new yg),n.forEach(function(r){var i=jg.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function $n(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:Ie=s.stateNode,xn=!1;break e;case 3:Ie=s.stateNode.containerInfo,xn=!0;break e;case 4:Ie=s.stateNode.containerInfo,xn=!0;break e}s=s.return}if(Ie===null)throw Error(M(160));Jf(l,o,i),Ie=null,xn=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(d){xe(i,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)eh(n,e),n=n.sibling}function eh(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($n(n,e),jn(e),r&4){try{Kr(3,e,e.return),Zl(3,e)}catch(k){xe(e,e.return,k)}try{Kr(5,e,e.return)}catch(k){xe(e,e.return,k)}}break;case 1:$n(n,e),jn(e),r&512&&t!==null&&Xt(t,t.return);break;case 5:if($n(n,e),jn(e),r&512&&t!==null&&Xt(t,t.return),e.flags&32){var i=e.stateNode;try{ni(i,"")}catch(k){xe(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&xd(i,l),Jo(s,o);var d=Jo(s,l);for(o=0;o<a.length;o+=2){var f=a[o],h=a[o+1];f==="style"?Cd(i,h):f==="dangerouslySetInnerHTML"?Sd(i,h):f==="children"?ni(i,h):Xs(i,f,h,d)}switch(s){case"input":Wo(i,l);break;case"textarea":kd(i,l);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var $=l.value;$!=null?nr(i,!!l.multiple,$,!1):p!==!!l.multiple&&(l.defaultValue!=null?nr(i,!!l.multiple,l.defaultValue,!0):nr(i,!!l.multiple,l.multiple?[]:"",!1))}i[ui]=l}catch(k){xe(e,e.return,k)}}break;case 6:if($n(n,e),jn(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(k){xe(e,e.return,k)}}break;case 3:if($n(n,e),jn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{li(n.containerInfo)}catch(k){xe(e,e.return,k)}break;case 4:$n(n,e),jn(e);break;case 13:$n(n,e),jn(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(La=Se())),r&4&&du(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(Ge=(d=Ge)||f,$n(n,e),Ge=d):$n(n,e),jn(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(z=e,f=e.child;f!==null;){for(h=z=f;z!==null;){switch(p=z,$=p.child,p.tag){case 0:case 11:case 14:case 15:Kr(4,p,p.return);break;case 1:Xt(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,v.props=n.memoizedProps,v.state=n.memoizedState,v.componentWillUnmount()}catch(k){xe(r,t,k)}}break;case 5:Xt(p,p.return);break;case 22:if(p.memoizedState!==null){hu(h);continue}}$!==null?($.return=p,z=$):hu(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,d?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=_d("display",o))}catch(k){xe(e,e.return,k)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(k){xe(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:$n(n,e),jn(e),r&4&&du(e);break;case 21:break;default:$n(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Xf(t)){var r=t;break e}t=t.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ni(i,""),r.flags&=-33);var l=uu(e);Es(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=uu(e);Ns(e,s,o);break;default:throw Error(M(161))}}catch(a){xe(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function wg(e,n,t){z=e,nh(e)}function nh(e,n,t){for(var r=(e.mode&1)!==0;z!==null;){var i=z,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Gi;if(!o){var s=i.alternate,a=s!==null&&s.memoizedState!==null||Ge;s=Gi;var d=Ge;if(Gi=o,(Ge=a)&&!d)for(z=i;z!==null;)o=z,a=o.child,o.tag===22&&o.memoizedState!==null?pu(i):a!==null?(a.return=o,z=a):pu(i);for(;l!==null;)z=l,nh(l),l=l.sibling;z=i,Gi=s,Ge=d}fu(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,z=l):fu(e)}}function fu(e){for(;z!==null;){var n=z;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ge||Zl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ge)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:vn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Kc(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Kc(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&li(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Ge||n.flags&512&&js(n)}catch(p){xe(n,n.return,p)}}if(n===e){z=null;break}if(t=n.sibling,t!==null){t.return=n.return,z=t;break}z=n.return}}function hu(e){for(;z!==null;){var n=z;if(n===e){z=null;break}var t=n.sibling;if(t!==null){t.return=n.return,z=t;break}z=n.return}}function pu(e){for(;z!==null;){var n=z;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Zl(4,n)}catch(a){xe(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){xe(n,i,a)}}var l=n.return;try{js(n)}catch(a){xe(n,l,a)}break;case 5:var o=n.return;try{js(n)}catch(a){xe(n,o,a)}}}catch(a){xe(n,n.return,a)}if(n===e){z=null;break}var s=n.sibling;if(s!==null){s.return=n.return,z=s;break}z=n.return}}var vg=Math.ceil,Nl=Vn.ReactCurrentDispatcher,Ea=Vn.ReactCurrentOwner,gn=Vn.ReactCurrentBatchConfig,ie=0,Ae=null,je=null,Te=0,on=0,Jt=yt(0),Me=0,mi=null,It=0,Ql=0,Ma=0,Yr=null,Ke=null,La=0,mr=1/0,In=null,El=!1,Ms=null,at=null,Ui=!1,nt=null,Ml=0,Xr=0,Ls=null,ol=-1,sl=0;function Qe(){return ie&6?Se():ol!==-1?ol:ol=Se()}function ct(e){return e.mode&1?ie&2&&Te!==0?Te&-Te:rg.transition!==null?(sl===0&&(sl=Bd()),sl):(e=ue,e!==0||(e=window.event,e=e===void 0?16:Hd(e.type)),e):1}function Sn(e,n,t,r){if(50<Xr)throw Xr=0,Ls=null,Error(M(185));wi(e,t,r),(!(ie&2)||e!==Ae)&&(e===Ae&&(!(ie&2)&&(Ql|=t),Me===4&&Jn(e,Te)),tn(e,r),t===1&&ie===0&&!(n.mode&1)&&(mr=Se()+500,Ul&&$t()))}function tn(e,n){var t=e.callbackNode;rp(e,n);var r=hl(e,e===Ae?Te:0);if(r===0)t!==null&&bc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&bc(t),n===1)e.tag===0?tg(gu.bind(null,e)):df(gu.bind(null,e)),Xp(function(){!(ie&6)&&$t()}),t=null;else{switch(Rd(r)){case 1:t=ra;break;case 4:t=Pd;break;case 16:t=fl;break;case 536870912:t=Td;break;default:t=fl}t=ch(t,th.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function th(e,n){if(ol=-1,sl=0,ie&6)throw Error(M(327));var t=e.callbackNode;if(or()&&e.callbackNode!==t)return null;var r=hl(e,e===Ae?Te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ll(e,r);else{n=r;var i=ie;ie|=2;var l=ih();(Ae!==e||Te!==n)&&(In=null,mr=Se()+500,Et(e,n));do try{bg();break}catch(s){rh(e,s)}while(!0);ma(),Nl.current=l,ie=i,je!==null?n=0:(Ae=null,Te=0,n=Me)}if(n!==0){if(n===2&&(i=is(e),i!==0&&(r=i,n=Ds(e,i))),n===1)throw t=mi,Et(e,0),Jn(e,r),tn(e,Se()),t;if(n===6)Jn(e,r);else{if(i=e.current.alternate,!(r&30)&&!xg(i)&&(n=Ll(e,r),n===2&&(l=is(e),l!==0&&(r=l,n=Ds(e,l))),n===1))throw t=mi,Et(e,0),Jn(e,r),tn(e,Se()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(M(345));case 2:bt(e,Ke,In);break;case 3:if(Jn(e,r),(r&130023424)===r&&(n=La+500-Se(),10<n)){if(hl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=fs(bt.bind(null,e,Ke,In),n);break}bt(e,Ke,In);break;case 4:if(Jn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-bn(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vg(r/1960))-r,10<r){e.timeoutHandle=fs(bt.bind(null,e,Ke,In),r);break}bt(e,Ke,In);break;case 5:bt(e,Ke,In);break;default:throw Error(M(329))}}}return tn(e,Se()),e.callbackNode===t?th.bind(null,e):null}function Ds(e,n){var t=Yr;return e.current.memoizedState.isDehydrated&&(Et(e,n).flags|=256),e=Ll(e,n),e!==2&&(n=Ke,Ke=t,n!==null&&As(n)),e}function As(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function xg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!_n(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Jn(e,n){for(n&=~Ma,n&=~Ql,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-bn(n),r=1<<t;e[t]=-1,n&=~r}}function gu(e){if(ie&6)throw Error(M(327));or();var n=hl(e,0);if(!(n&1))return tn(e,Se()),null;var t=Ll(e,n);if(e.tag!==0&&t===2){var r=is(e);r!==0&&(n=r,t=Ds(e,r))}if(t===1)throw t=mi,Et(e,0),Jn(e,n),tn(e,Se()),t;if(t===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,bt(e,Ke,In),tn(e,Se()),null}function Da(e,n){var t=ie;ie|=1;try{return e(n)}finally{ie=t,ie===0&&(mr=Se()+500,Ul&&$t())}}function zt(e){nt!==null&&nt.tag===0&&!(ie&6)&&or();var n=ie;ie|=1;var t=gn.transition,r=ue;try{if(gn.transition=null,ue=1,e)return e()}finally{ue=r,gn.transition=t,ie=n,!(ie&6)&&$t()}}function Aa(){on=Jt.current,ge(Jt)}function Et(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Yp(t)),je!==null)for(t=je.return;t!==null;){var r=t;switch(ha(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$l();break;case 3:pr(),ge(en),ge(Ue),ka();break;case 5:xa(r);break;case 4:pr();break;case 13:ge($e);break;case 19:ge($e);break;case 10:ya(r.type._context);break;case 22:case 23:Aa()}t=t.return}if(Ae=e,je=e=ut(e.current,null),Te=on=n,Me=0,mi=null,Ma=Ql=It=0,Ke=Yr=null,Ct!==null){for(n=0;n<Ct.length;n++)if(t=Ct[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}Ct=null}return e}function rh(e,n){do{var t=je;try{if(ma(),rl.current=jl,Cl){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cl=!1}if(At=0,De=Ee=we=null,qr=!1,hi=0,Ea.current=null,t===null||t.return===null){Me=1,mi=n,je=null;break}e:{var l=e,o=t.return,s=t,a=n;if(n=Te,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,f=s,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var $=tu(o);if($!==null){$.flags&=-257,ru($,o,s,l,n),$.mode&1&&nu(l,d,n),n=$,a=d;var v=n.updateQueue;if(v===null){var k=new Set;k.add(a),n.updateQueue=k}else v.add(a);break e}else{if(!(n&1)){nu(l,d,n),Ia();break e}a=Error(M(426))}}else if(me&&s.mode&1){var F=tu(o);if(F!==null){!(F.flags&65536)&&(F.flags|=256),ru(F,o,s,l,n),pa(gr(a,s));break e}}l=a=gr(a,s),Me!==4&&(Me=2),Yr===null?Yr=[l]:Yr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var m=Ff(l,a,n);qc(l,m);break e;case 1:s=a;var g=l.type,y=l.stateNode;if(!(l.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(at===null||!at.has(y)))){l.flags|=65536,n&=-n,l.lanes|=n;var w=Of(l,s,n);qc(l,w);break e}}l=l.return}while(l!==null)}oh(t)}catch(N){n=N,je===t&&t!==null&&(je=t=t.return);continue}break}while(!0)}function ih(){var e=Nl.current;return Nl.current=jl,e===null?jl:e}function Ia(){(Me===0||Me===3||Me===2)&&(Me=4),Ae===null||!(It&268435455)&&!(Ql&268435455)||Jn(Ae,Te)}function Ll(e,n){var t=ie;ie|=2;var r=ih();(Ae!==e||Te!==n)&&(In=null,Et(e,n));do try{kg();break}catch(i){rh(e,i)}while(!0);if(ma(),ie=t,Nl.current=r,je!==null)throw Error(M(261));return Ae=null,Te=0,Me}function kg(){for(;je!==null;)lh(je)}function bg(){for(;je!==null&&!W0();)lh(je)}function lh(e){var n=ah(e.alternate,e,on);e.memoizedProps=e.pendingProps,n===null?oh(e):je=n,Ea.current=null}function oh(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=mg(t,n),t!==null){t.flags&=32767,je=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,je=null;return}}else if(t=gg(t,n,on),t!==null){je=t;return}if(n=n.sibling,n!==null){je=n;return}je=n=e}while(n!==null);Me===0&&(Me=5)}function bt(e,n,t){var r=ue,i=gn.transition;try{gn.transition=null,ue=1,Sg(e,n,t,r)}finally{gn.transition=i,ue=r}return null}function Sg(e,n,t,r){do or();while(nt!==null);if(ie&6)throw Error(M(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(ip(e,l),e===Ae&&(je=Ae=null,Te=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ui||(Ui=!0,ch(fl,function(){return or(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=gn.transition,gn.transition=null;var o=ue;ue=1;var s=ie;ie|=4,Ea.current=null,$g(e,t),eh(t,e),Vp(us),pl=!!cs,us=cs=null,e.current=t,wg(t),q0(),ie=s,ue=o,gn.transition=l}else e.current=t;if(Ui&&(Ui=!1,nt=e,Ml=i),l=e.pendingLanes,l===0&&(at=null),X0(t.stateNode),tn(e,Se()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(El)throw El=!1,e=Ms,Ms=null,e;return Ml&1&&e.tag!==0&&or(),l=e.pendingLanes,l&1?e===Ls?Xr++:(Xr=0,Ls=e):Xr=0,$t(),null}function or(){if(nt!==null){var e=Rd(Ml),n=gn.transition,t=ue;try{if(gn.transition=null,ue=16>e?16:e,nt===null)var r=!1;else{if(e=nt,nt=null,Ml=0,ie&6)throw Error(M(331));var i=ie;for(ie|=4,z=e.current;z!==null;){var l=z,o=l.child;if(z.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var d=s[a];for(z=d;z!==null;){var f=z;switch(f.tag){case 0:case 11:case 15:Kr(8,f,l)}var h=f.child;if(h!==null)h.return=f,z=h;else for(;z!==null;){f=z;var p=f.sibling,$=f.return;if(Yf(f),f===d){z=null;break}if(p!==null){p.return=$,z=p;break}z=$}}}var v=l.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var F=k.sibling;k.sibling=null,k=F}while(k!==null)}}z=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,z=o;else e:for(;z!==null;){if(l=z,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Kr(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,z=m;break e}z=l.return}}var g=e.current;for(z=g;z!==null;){o=z;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,z=y;else e:for(o=g;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Zl(9,s)}}catch(N){xe(s,s.return,N)}if(s===o){z=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,z=w;break e}z=s.return}}if(ie=i,$t(),Ln&&typeof Ln.onPostCommitFiberRoot=="function")try{Ln.onPostCommitFiberRoot(Bl,e)}catch{}r=!0}return r}finally{ue=t,gn.transition=n}}return!1}function mu(e,n,t){n=gr(t,n),n=Ff(e,n,1),e=st(e,n,1),n=Qe(),e!==null&&(wi(e,1,n),tn(e,n))}function xe(e,n,t){if(e.tag===3)mu(e,e,t);else for(;n!==null;){if(n.tag===3){mu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(at===null||!at.has(r))){e=gr(t,e),e=Of(n,e,1),n=st(n,e,1),e=Qe(),n!==null&&(wi(n,1,e),tn(n,e));break}}n=n.return}}function _g(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Qe(),e.pingedLanes|=e.suspendedLanes&t,Ae===e&&(Te&t)===t&&(Me===4||Me===3&&(Te&130023424)===Te&&500>Se()-La?Et(e,0):Ma|=t),tn(e,n)}function sh(e,n){n===0&&(e.mode&1?(n=Ai,Ai<<=1,!(Ai&130023424)&&(Ai=4194304)):n=1);var t=Qe();e=Gn(e,n),e!==null&&(wi(e,n,t),tn(e,t))}function Cg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),sh(e,t)}function jg(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(n),sh(e,t)}var ah;ah=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||en.current)Je=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Je=!1,pg(e,n,t);Je=!!(e.flags&131072)}else Je=!1,me&&n.flags&1048576&&ff(n,xl,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ll(e,n),e=n.pendingProps;var i=dr(n,Ue.current);lr(n,t),i=Sa(null,n,r,e,i,t);var l=_a();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,nn(r)?(l=!0,wl(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wa(n),i.updater=Hl,n.stateNode=i,i._reactInternals=n,ws(n,r,e,t),n=ks(null,n,r,!0,l,t)):(n.tag=0,me&&l&&fa(n),He(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ll(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Eg(r),e=vn(r,e),i){case 0:n=xs(null,n,r,e,t);break e;case 1:n=ou(null,n,r,e,t);break e;case 11:n=iu(null,n,r,e,t);break e;case 14:n=lu(null,n,r,vn(r.type,e),t);break e}throw Error(M(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:vn(r,i),xs(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:vn(r,i),ou(e,n,r,i,t);case 3:e:{if(Hf(n),e===null)throw Error(M(387));r=n.pendingProps,l=n.memoizedState,i=l.element,$f(e,n),Sl(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=gr(Error(M(423)),n),n=su(e,n,r,t,i);break e}else if(r!==i){i=gr(Error(M(424)),n),n=su(e,n,r,t,i);break e}else for(sn=ot(n.stateNode.containerInfo.firstChild),an=n,me=!0,kn=null,t=mf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(fr(),r===i){n=Un(e,n,t);break e}He(e,n,r,t)}n=n.child}return n;case 5:return wf(n),e===null&&ms(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,ds(r,i)?o=null:l!==null&&ds(r,l)&&(n.flags|=32),Vf(e,n),He(e,n,o,t),n.child;case 6:return e===null&&ms(n),null;case 13:return Zf(e,n,t);case 4:return va(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=hr(n,null,r,t):He(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:vn(r,i),iu(e,n,r,i,t);case 7:return He(e,n,n.pendingProps,t),n.child;case 8:return He(e,n,n.pendingProps.children,t),n.child;case 12:return He(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,de(kl,r._currentValue),r._currentValue=o,l!==null)if(_n(l.value,o)){if(l.children===i.children&&!en.current){n=Un(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Bn(-1,t&-t),a.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?a.next=a:(a.next=f.next,f.next=a),d.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),ys(l.return,t,n),s.lanes|=t;break}a=a.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(M(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),ys(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}He(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,lr(n,t),i=mn(i),r=r(i),n.flags|=1,He(e,n,r,t),n.child;case 14:return r=n.type,i=vn(r,n.pendingProps),i=vn(r.type,i),lu(e,n,r,i,t);case 15:return Gf(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:vn(r,i),ll(e,n),n.tag=1,nn(r)?(e=!0,wl(n)):e=!1,lr(n,t),Rf(n,r,i),ws(n,r,i,t),ks(null,n,r,!0,e,t);case 19:return Qf(e,n,t);case 22:return Uf(e,n,t)}throw Error(M(156,n.tag))};function ch(e,n){return zd(e,n)}function Ng(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(e,n,t,r){return new Ng(e,n,t,r)}function za(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Eg(e){if(typeof e=="function")return za(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ea)return 11;if(e===na)return 14}return 2}function ut(e,n){var t=e.alternate;return t===null?(t=pn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function al(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")za(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ut:return Mt(t.children,i,l,n);case Js:o=8,i|=8;break;case Uo:return e=pn(12,t,n,i|2),e.elementType=Uo,e.lanes=l,e;case Vo:return e=pn(13,t,n,i),e.elementType=Vo,e.lanes=l,e;case Ho:return e=pn(19,t,n,i),e.elementType=Ho,e.lanes=l,e;case $d:return Wl(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case md:o=10;break e;case yd:o=9;break e;case ea:o=11;break e;case na:o=14;break e;case qn:o=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return n=pn(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function Mt(e,n,t,r){return e=pn(7,e,r,n),e.lanes=t,e}function Wl(e,n,t,r){return e=pn(22,e,r,n),e.elementType=$d,e.lanes=t,e.stateNode={isHidden:!1},e}function zo(e,n,t){return e=pn(6,e,null,n),e.lanes=t,e}function Po(e,n,t){return n=pn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Mg(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mo(0),this.expirationTimes=mo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pa(e,n,t,r,i,l,o,s,a){return e=new Mg(e,n,t,s,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=pn(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},wa(l),e}function Lg(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function uh(e){if(!e)return ht;e=e._reactInternals;e:{if(Tt(e)!==e||e.tag!==1)throw Error(M(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(nn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(M(171))}if(e.tag===1){var t=e.type;if(nn(t))return uf(e,t,n)}return n}function dh(e,n,t,r,i,l,o,s,a){return e=Pa(t,r,!0,e,i,l,o,s,a),e.context=uh(null),t=e.current,r=Qe(),i=ct(t),l=Bn(r,i),l.callback=n??null,st(t,l,i),e.current.lanes=i,wi(e,i,r),tn(e,r),e}function ql(e,n,t,r){var i=n.current,l=Qe(),o=ct(i);return t=uh(t),n.context===null?n.context=t:n.pendingContext=t,n=Bn(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=st(i,n,o),e!==null&&(Sn(e,i,o,l),tl(e,i,o)),o}function Dl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ta(e,n){yu(e,n),(e=e.alternate)&&yu(e,n)}function Dg(){return null}var fh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ba(e){this._internalRoot=e}Kl.prototype.render=Ba.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(M(409));ql(e,n,null,null)};Kl.prototype.unmount=Ba.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;zt(function(){ql(null,e,null,null)}),n[On]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Gd();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Xn.length&&n!==0&&n<Xn[t].priority;t++);Xn.splice(t,0,e),t===0&&Vd(e)}};function Ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $u(){}function Ag(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var d=Dl(o);l.call(d)}}var o=dh(n,r,e,0,null,!1,!1,"",$u);return e._reactRootContainer=o,e[On]=o.current,ai(e.nodeType===8?e.parentNode:e),zt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=Dl(a);s.call(d)}}var a=Pa(e,0,!1,null,null,!1,!1,"",$u);return e._reactRootContainer=a,e[On]=a.current,ai(e.nodeType===8?e.parentNode:e),zt(function(){ql(n,a,t,r)}),a}function Xl(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var a=Dl(o);s.call(a)}}ql(n,o,e,i)}else o=Ag(t,n,e,i,r);return Dl(o)}Fd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Br(n.pendingLanes);t!==0&&(ia(n,t|1),tn(n,Se()),!(ie&6)&&(mr=Se()+500,$t()))}break;case 13:zt(function(){var r=Gn(e,1);if(r!==null){var i=Qe();Sn(r,e,1,i)}}),Ta(e,1)}};la=function(e){if(e.tag===13){var n=Gn(e,134217728);if(n!==null){var t=Qe();Sn(n,e,134217728,t)}Ta(e,134217728)}};Od=function(e){if(e.tag===13){var n=ct(e),t=Gn(e,n);if(t!==null){var r=Qe();Sn(t,e,n,r)}Ta(e,n)}};Gd=function(){return ue};Ud=function(e,n){var t=ue;try{return ue=e,n()}finally{ue=t}};ns=function(e,n,t){switch(n){case"input":if(Wo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Gl(r);if(!i)throw Error(M(90));vd(r),Wo(r,i)}}}break;case"textarea":kd(e,t);break;case"select":n=t.value,n!=null&&nr(e,!!t.multiple,n,!1)}};Ed=Da;Md=zt;var Ig={usingClientEntryPoint:!1,Events:[xi,Qt,Gl,jd,Nd,Da]},Lr={findFiberByHostInstance:_t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zg={bundleType:Lr.bundleType,version:Lr.version,rendererPackageName:Lr.rendererPackageName,rendererConfig:Lr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ad(e),e===null?null:e.stateNode},findFiberByHostInstance:Lr.findFiberByHostInstance||Dg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vi.isDisabled&&Vi.supportsFiber)try{Bl=Vi.inject(zg),Ln=Vi}catch{}}un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ig;un.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ra(n))throw Error(M(200));return Lg(e,n,null,t)};un.createRoot=function(e,n){if(!Ra(e))throw Error(M(299));var t=!1,r="",i=fh;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Pa(e,1,!1,null,null,t,!1,r,i),e[On]=n.current,ai(e.nodeType===8?e.parentNode:e),new Ba(n)};un.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=Ad(n),e=e===null?null:e.stateNode,e};un.flushSync=function(e){return zt(e)};un.hydrate=function(e,n,t){if(!Yl(n))throw Error(M(200));return Xl(null,e,n,!0,t)};un.hydrateRoot=function(e,n,t){if(!Ra(e))throw Error(M(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=fh;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=dh(n,null,e,1,t??null,i,!1,l,o),e[On]=n.current,ai(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new Kl(n)};un.render=function(e,n,t){if(!Yl(n))throw Error(M(200));return Xl(null,e,n,!1,t)};un.unmountComponentAtNode=function(e){if(!Yl(e))throw Error(M(40));return e._reactRootContainer?(zt(function(){Xl(null,null,e,!1,function(){e._reactRootContainer=null,e[On]=null})}),!0):!1};un.unstable_batchedUpdates=Da;un.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Yl(t))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Xl(e,n,t,!1,r)};un.version="18.3.1-next-f1338f8080-20240426";function hh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hh)}catch(e){console.error(e)}}hh(),fd.exports=un;var Pg=fd.exports,ph,wu=Pg;ph=wu.createRoot,wu.hydrateRoot;const gh="hasukgo.device.v1",Tg="hasukgo",yr="meta",Is="deviceId";function mh(){try{if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();if(typeof crypto<"u"&&typeof crypto.getRandomValues=="function"){const e=crypto.getRandomValues(new Uint8Array(16));e[6]=e[6]&15|64,e[8]=e[8]&63|128;const n=[...e].map(t=>t.toString(16).padStart(2,"0")).join("");return`${n.slice(0,8)}-${n.slice(8,12)}-${n.slice(12,16)}-${n.slice(16,20)}-${n.slice(20)}`}}catch{}return`fb-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function yh(e){const n=e.replace(/[^a-f0-9]/gi,"").toUpperCase(),t=n.slice(0,4)||"0000",r=n.slice(4,8)||"0000";return`HSG-${t}-${r}`}function Bg(){try{return localStorage.getItem(gh)}catch{return null}}function $h(e){try{return localStorage.setItem(gh,e),!0}catch{return!1}}function Fa(){return new Promise(e=>{try{if(typeof indexedDB>"u")return e(null);const n=indexedDB.open(Tg,1);n.onupgradeneeded=()=>{const t=n.result;t.objectStoreNames.contains(yr)||t.createObjectStore(yr)},n.onsuccess=()=>e(n.result),n.onerror=()=>e(null),setTimeout(()=>e(null),1500)}catch{e(null)}})}function Rg(e,n){return new Promise(t=>{try{const i=e.transaction(yr,"readonly").objectStore(yr).get(n);i.onsuccess=()=>t(i.result??null),i.onerror=()=>t(null)}catch{t(null)}})}function Oa(e,n,t){return new Promise(r=>{try{const i=e.transaction(yr,"readwrite");i.objectStore(yr).put(t,n),i.oncomplete=()=>r(!0),i.onerror=()=>r(!1),i.onabort=()=>r(!1)}catch{r(!1)}})}function wh(){if(typeof navigator>"u")return"알 수 없음";const e=navigator.userAgent,n=typeof globalThis.Capacitor<"u",t=/Android/i.test(e)?"Android":/iPhone|iPad|iPod/i.test(e)?"iOS":/Windows/i.test(e)?"Windows":/Mac OS X/i.test(e)?"macOS":"기타";if(n)return`${t} 앱`;const r=/KAKAOTALK/i.test(e)?" · 카카오톡 인앱":/Line\//i.test(e)?" · 라인 인앱":/Instagram|FBAN|FBAV/i.test(e)?" · SNS 인앱":"";return`${t} 웹${r}`}let er=null;async function Fg(){if(er)return er;const e=Bg(),n=await Fa(),t=n?await Rg(n,Is):null;let r=e??t??null,i=!1;r||(r=mh(),i=!0);const l=$h(r);let o=!1;return n&&(o=await Oa(n,Is,r)),er={id:r,shortCode:yh(r),platform:wh(),fresh:i,ephemeral:!l&&!o},er}async function Og(e){const n=e??mh();$h(n);const t=await Fa();return t&&await Oa(t,Is,n),er={id:n,shortCode:yh(n),platform:wh(),fresh:!0,ephemeral:!1},er}async function Gg(){let e=!1;try{const r="__hasukgo_probe__";localStorage.setItem(r,"1"),e=localStorage.getItem(r)==="1",localStorage.removeItem(r)}catch{e=!1}const n=await Fa();let t=!1;return n&&(t=await Oa(n,"__probe__","1")),{localStorage:e,indexedDb:t}}const Ye=120,Xe=180,Ga=[{id:"classic",name:"전통",tint:null,tintAmount:0,ink:"#12100e",red:"#d8402f",gold:"#e8b53c",white:"#f4ece0",paperTop:"#fbf4e6",paperBottom:"#efe2ca"},{id:"moonlit",name:"달밤",tint:"#1b2b4a",tintAmount:.55,ink:"#0a0e18",red:"#e05a6b",gold:"#cfe0ff",white:"#eaf1ff",paperTop:"#dfe8f7",paperBottom:"#c3d2e8"},{id:"hanji",name:"한지",tint:"#d8c9a8",tintAmount:.62,ink:"#4a3a28",red:"#c2584a",gold:"#b89050",white:"#fdf8ec",paperTop:"#fdf8ec",paperBottom:"#f0e4cc"},{id:"gilt",name:"금박",tint:"#2a2010",tintAmount:.5,ink:"#1a1408",red:"#e0483a",gold:"#ffd66b",white:"#fff6da",paperTop:"#3a2e18",paperBottom:"#241c0e"}],bi=Ga[0];function vh(e){return Ga.find(n=>n.id===e)??bi}let ke=bi.ink,Ce=bi.white;function Jr(e,n,t){const r=h=>[parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)],[i,l,o]=r(e),[s,a,d]=r(n),f=(h,p)=>Math.round(h*(1-t)+p*t).toString(16).padStart(2,"0");return`#${f(i,s)}${f(l,a)}${f(o,d)}`}function Nt(e,n){const t=/^#?([0-9a-f]{6})$/i.exec(e);if(!t)return e;const r=parseInt(t[1],16),i=n>0?255:0,l=Math.abs(n);return`#${[r>>16&255,r>>8&255,r&255].map(o=>Math.round(o+(i-o)*l).toString(16).padStart(2,"0")).join("")}`}let se="#e02b1d",X="#f2c21c";const St="#1766c8",Ug="#2a9d4a",Fr="#ef7a20",Vg={1:"#f3e2b8",2:"#e6b8c8",3:"#f0c2c8",4:"#b9c6d2",5:"#bfd6c2",6:"#e8c4b4",7:"#efd0a8",8:"#b6c8e0",9:"#f0dca4",10:"#f0c49a",11:"#cdc2e0",12:"#b8c2c8",0:"#f2e0b0"};let xh="";const ee=12,re=12,ye=96,Pe=152;function P(e,n){const r=n?n??ke:`url(#ik${xh})`;return`<path d="${e}" fill="${r}"/><path d="${e}" fill="#ffffff" opacity="0.07" transform="translate(0 -1.6)"/>`}function vu(e,n,t,r){const i=re+Pe;let l=P(`M${e-n/2} ${i} L${e-n*.1} ${t+6} L${e} ${t} L${e+n*.1} ${t+6} L${e+n/2} ${i} Z`);return r&&(l+=P(`M${e} ${t-12} l${n*.34} ${n*.3} l-${n*.34} ${n*.16} l-${n*.34} -${n*.16} Z`,r)),l}function Le(e,n,t,r,i){let l="";for(let o=0;o<5;o+=1){const s=o/5*Math.PI*2-Math.PI/2,a=e+Math.cos(s)*t*.58,d=n+Math.sin(s)*t*.58;l+=`<circle cx="${a.toFixed(1)}" cy="${d.toFixed(1)}" r="${(t*.5).toFixed(1)}" fill="${r}"/>`,l+=`<path d="M${e.toFixed(1)} ${n.toFixed(1)} L${a.toFixed(1)} ${d.toFixed(1)}" stroke="${Nt(r,-.3)}" stroke-width="${(t*.1).toFixed(2)}" opacity="0.55"/>`}l+=`<circle cx="${e}" cy="${n}" r="${(t*.3).toFixed(1)}" fill="${Nt(i,-.2)}"/>`,l+=`<circle cx="${e}" cy="${n}" r="${(t*.21).toFixed(1)}" fill="${i}"/>`;for(let o=0;o<5;o+=1){const s=o/5*Math.PI*2;l+=`<circle cx="${(e+Math.cos(s)*t*.2).toFixed(1)}" cy="${(n+Math.sin(s)*t*.2).toFixed(1)}" r="${(t*.055).toFixed(2)}" fill="${ke}" opacity="0.6"/>`}return l}function Nn(e,n,t,r,i){return`<ellipse cx="${e}" cy="${n}" rx="${t}" ry="${r}" fill="${i??ke}"/>`}function Hg(e){const n=re+Pe;switch(e){case 1:return vu(38,54,34,X)+vu(84,46,58,X);case 2:return`
        ${P(`M${ee+4} ${n} C30 118 34 78 30 ${re+10} L44 ${re+10} C48 80 44 120 ${ee+20} ${n} Z`)}
        ${P("M38 62 C58 52 80 36 96 26 L102 38 C84 50 62 66 44 76 Z")}
        ${P("M40 100 C58 98 76 104 92 114 L88 124 C72 116 56 110 40 112 Z")}
        ${Le(98,30,15,se,ke)}
        ${Le(60,60,13,se,ke)}
        ${Le(92,118,12,se,ke)}`;case 3:return`
        <rect x="${ee}" y="${re}" width="${ye}" height="44" fill="${se}"/>
        ${[0,1,2,3].map(t=>`<rect x="${ee+8+t*23}" y="${re}" width="11" height="44" fill="${Ce}" opacity="0.92"/>`).join("")}
        <rect x="${ee}" y="${re}" width="${ye}" height="44" fill="none" stroke="${ke}" stroke-width="2.4"/>
        <rect x="${ee}" y="${re+44}" width="${ye}" height="5" fill="${ke}"/>
        ${P(`M${ee+16} ${re+49} l9 0 l0 15 l-9 0 Z`)}
        ${P(`M${ee+ye-25} ${re+49} l9 0 l0 15 l-9 0 Z`)}
        ${P("M56 146 C54 124 58 106 56 92 L68 92 C70 108 66 126 68 146 Z")}
        ${Le(38,86,15,se,X)}
        ${Le(84,84,15,se,X)}
        ${Le(61,112,16,se,X)}
        ${Le(98,116,12,se,X)}
        ${Le(26,120,12,se,X)}`;case 4:return[0,1,2].map(t=>{const r=30+t*26;let i=P(`M${r} ${re+8} q6 60 -2 ${Pe-20} l6 0 q4 -66 -2 -130 Z`);for(let l=0;l<6;l+=1){const o=re+22+l*19;i+=Nn(r-9,o,7.5,4.5)+Nn(r+11,o+8,7.5,4.5)}return i}).join("");case 5:return`
        ${P("M36 146 Q22 96 34 44 L44 46 Q34 98 46 146 Z")}
        ${P("M60 146 Q58 92 66 40 L76 44 Q68 96 70 146 Z")}
        ${P("M86 146 Q96 98 92 54 L100 58 Q102 102 96 146 Z")}
        ${Le(56,52,14,St,X)}
        ${Le(84,86,12,St,X)}`;case 6:return`
        ${Nn(34,104,24,16)}
        ${Nn(88,110,22,15)}
        ${Nn(62,128,26,14)}
        ${Le(58,62,26,se,X)}
        ${Le(92,96,17,se,X)}`;case 7:{let t=P(`M57 ${n} C55 132 56 124 58 118 L67 118 C69 124 70 132 68 ${n} Z`);for(let r=0;r<5;r+=1){const i=(r-2)/2,l=62+i*36,o=104-Math.abs(i)*6,s=i*34;t+=`<g transform="rotate(${s.toFixed(1)} ${l} ${o})">`;for(let a=0;a<4;a+=1){const d=o-12-a*15;t+=Nn(l-8,d,8.5,4.6,se)+Nn(l+8,d-6,8.5,4.6,se)}t+=`<rect x="${(l-1.6).toFixed(1)}" y="${(o-62).toFixed(1)}" width="3.2" height="62" fill="${Nt(se,-.45)}"/></g>`}return t}case 8:return P(`M${ee} ${n} C${ee+6} ${n-62} 36 ${n-74} 60 ${n-74} C84 ${n-74} ${ee+ye-6} ${n-62} ${ee+ye} ${n} Z`);case 9:return`
        ${Nn(32,112,24,15)}
        ${Nn(90,118,22,14)}
        ${Nn(62,134,26,12)}
        ${Le(56,60,22,Fr,X)}
        ${Le(92,90,16,Fr,X)}
        ${Le(28,74,14,Fr,X)}`;case 10:return`
        ${P("M60 146 Q58 116 60 96 L68 96 Q70 118 68 146 Z")}
        ${To(60,74,30,Fr)}
        ${To(28,106,20,se)}
        ${To(94,100,20,se)}`;case 11:return`
        ${P(`M${ee} ${n} Q20 100 ${ee+6} 76 Q54 78 60 ${n} Z`)}
        ${P(`M${ee+ye} ${n} Q100 100 ${ee+ye-6} 76 Q66 78 60 ${n} Z`)}
        ${P("M60 118 Q44 80 60 44 Q76 80 60 118 Z")}
        ${Le(60,34,16,St,X)}
        ${Le(36,46,11,St,X)}
        ${Le(86,46,11,St,X)}`;default:return`
        <rect x="${ee}" y="${re}" width="${ye}" height="${Pe}" fill="${ke}"/>
        ${P(`M${ee+6} ${re} q14 48 4 ${Pe} l10 0 q10 -56 -4 ${-Pe} Z`,Ce)}
        ${[0,1,2].map(t=>P(`M${ee+14+t*4} ${re+30+t*16} q-12 32 -${14+t*4} ${58-t*10} l7 3 q10 -30 ${16+t*4} -${58-t*10} Z`,Ce)).join("")}`}}function To(e,n,t,r){return`<path d="M${e} ${n-t} l${t*.3} ${t*.42} l${t*.62} -${t*.2} l-${t*.22} ${t*.52} l${t*.52} ${t*.1} l-${t*.46} ${t*.4} l${t*.2} ${t*.44} l-${t*.68} -${t*.16} l-${t*.18} ${t*.5} l-${t*.18} -${t*.5} l-${t*.68} ${t*.16} l${t*.2} -${t*.44} l-${t*.46} -${t*.4} l${t*.52} -${t*.1} l-${t*.22} -${t*.52} l${t*.62} ${t*.2} Z" fill="${r}"/>`}function Zg(e){switch(e){case 1:return`
        <circle cx="88" cy="38" r="23" fill="${se}"/>
        <g stroke="${ke}" stroke-width="2.4" stroke-linejoin="round">
          <path d="M22 132 Q38 84 72 90 Q88 94 84 110 Q60 130 26 128 Z" fill="${Ce}"/>
          <path d="M72 90 Q62 58 82 46 Q94 42 96 54 Q92 74 84 92 Z" fill="${Ce}"/>
          <path d="M92 44 l16 -6 l-10 15 Z" fill="${se}"/>
          <path d="M38 128 l-4 22 l8 0 l3 -21 Z" fill="${Ce}"/>
          <path d="M56 130 l-2 22 l8 0 l1 -21 Z" fill="${Ce}"/>
        </g>
        <path d="M84 40 q8 -9 16 -6" stroke="${se}" stroke-width="5" fill="none" stroke-linecap="round"/>
        <circle cx="88" cy="52" r="3" fill="${ke}"/>`;case 3:return`
        <rect x="${ee}" y="${re+4}" width="${ye}" height="58" fill="${se}"/>
        <path d="M${ee+4} ${re+34} q13 -17 26 0 q13 17 26 0 q13 -17 26 0 q9 12 14 3"
              stroke="${ke}" stroke-width="6" fill="none" stroke-linecap="round"/>
        <rect x="${ee}" y="${re+62}" width="${ye}" height="11" fill="${ke}"/>
        ${P(`M${ee+12} ${re+73} l0 26 l10 0 l0 -26 Z`)}
        ${P(`M${ee+ye-22} ${re+73} l0 26 l10 0 l0 -26 Z`)}`;case 8:return`<circle cx="60" cy="54" r="27" fill="${Ce}" stroke="${ke}" stroke-width="2"/>`;case 11:return`
        ${P("M30 124 Q46 82 80 88 Q96 92 90 108 Q66 126 32 122 Z",se)}
        ${P("M80 88 Q76 62 94 54 Q104 52 104 62 Q98 78 90 90 Z",se)}
        ${P("M100 52 l12 -6 l-6 14 Z",X)}
        ${P("M36 120 Q22 134 26 148 l10 -4 Q36 132 44 124 Z",se)}
        <circle cx="98" cy="60" r="2.6" fill="${ke}"/>`;default:return`
        ${P("M22 64 Q60 30 98 64 Q60 50 22 64 Z",se)}
        <rect x="57" y="62" width="5" height="28" fill="${Ce}"/>
        ${P("M44 92 Q60 82 76 92 L82 146 L38 146 Z",Ce)}
        <circle cx="60" cy="82" r="11" fill="${Ce}"/>
        ${P("M50 76 Q60 66 70 76 Q60 72 50 76 Z")}`}}function Qg(e){const n=e.month;if(e.isGodori){const t=n===2?Ug:n===4?X:Fr;return`
      ${P("M28 100 Q52 74 82 88 Q96 96 88 108 Q60 124 30 112 Z",t)}
      ${P("M82 88 Q78 70 92 64 Q100 62 100 70 Q96 82 88 92 Z",t)}
      ${P("M96 62 l12 -5 l-7 12 Z",se)}
      <circle cx="92" cy="72" r="2.6" fill="${ke}"/>
      ${P("M36 112 Q54 126 78 114 Q60 132 34 120 Z")}`}switch(n){case 5:return`
        ${P("M14 92 Q60 62 106 92 L106 104 Q60 76 14 104 Z",X)}
        ${P("M26 100 l0 40 l9 0 l0 -38 Z",X)}
        ${P("M85 100 l0 40 l9 0 l0 -38 Z",X)}`;case 6:return`
        ${P("M48 72 Q24 48 18 74 Q14 96 46 88 Z",X)}
        ${P("M52 72 Q76 48 82 74 Q86 96 54 88 Z",X)}
        ${P("M48 64 l4 34 l-4 0 Z")}
        ${P("M88 116 Q72 100 68 118 Q66 132 88 128 Z",X)}
        ${P("M92 116 Q108 100 112 118 Q114 132 92 128 Z",X)}`;case 7:return`
        ${P("M22 112 Q34 84 62 82 Q94 80 100 104 Q102 128 66 130 Q28 132 22 112 Z",X)}
        ${P("M22 106 l-12 -8 l10 18 Z",X)}
        ${P("M34 128 l-3 18 l8 0 l2 -17 Z",X)}
        ${P("M60 130 l-2 16 l8 0 l1 -16 Z",X)}
        ${P("M88 126 l2 18 l8 -2 l-3 -17 Z",X)}
        <circle cx="36" cy="102" r="3" fill="${ke}"/>`;case 9:return`
        ${P("M30 66 L90 66 L80 100 Q60 112 40 100 Z",se)}
        ${P("M36 72 L84 72 L78 90 Q60 100 42 90 Z",Ce)}
        <rect x="55" y="110" width="10" height="16" fill="${se}"/>
        ${P("M38 126 L82 126 L82 136 L38 136 Z",St)}
        <text x="60" y="88" font-size="15" text-anchor="middle" fill="${ke}" font-family="serif" font-weight="bold">壽</text>`;case 10:return`
        ${P("M30 116 Q44 88 70 88 Q98 88 102 110 Q104 132 70 134 Q34 136 30 116 Z",X)}
        ${P("M34 106 Q20 92 24 74 Q34 78 42 94 Z",X)}
        ${P("M24 74 l-9 -14 l3 -3 l10 13 Z")}
        ${P("M26 72 l9 -13 l4 3 l-9 12 Z")}
        <circle cx="28" cy="92" r="3" fill="${ke}"/>
        ${P("M44 134 l-3 14 l8 0 l2 -13 Z",X)}
        ${P("M88 132 l3 16 l8 -2 l-3 -14 Z",X)}`;default:return`
        ${P("M24 84 Q56 64 88 92 Q58 116 24 84 Z",Ce)}
        ${P("M88 92 l20 14 l-26 2 Z",Ce)}
        <circle cx="42" cy="86" r="2.6" fill="${ke}"/>`}}function Wg(e){const n=e==="cheong"?St:e==="bi"?"#9aa1a8":se,t=e==="hong"?"홍단":e==="cheong"?"청단":"";return`
    <g transform="rotate(-24 60 79)">
      <rect x="16" y="58" width="88" height="42" fill="${n}"/>
      <rect x="16" y="58" width="88" height="4" fill="${Ce}" opacity="0.35"/>
      ${t?`<text x="60" y="87" font-size="19" text-anchor="middle" fill="${Ce}" font-family="serif" font-weight="bold" letter-spacing="1">${t}</text>`:""}
    </g>`}function qg(){return`
    <rect x="${ee+ye-30}" y="${re+Pe-34}" width="28" height="32" rx="3" fill="${se}"/>
    <text x="${ee+ye-16}" y="${re+Pe-11}" font-size="21" text-anchor="middle" fill="${Ce}" font-family="serif" font-weight="bold">光</text>`}function xu(e){return e.isBonus?`
      <rect x="${ee+6}" y="${re+40}" width="${ye-12}" height="56" fill="${X}"/>
      <text x="60" y="${re+80}" font-size="30" text-anchor="middle" fill="${ke}" font-family="serif" font-weight="bold">${e.piValue}피</text>`:(e.piValue??1)>=2?`
      <rect x="${ee+10}" y="${re+Pe-34}" width="${ye-20}" height="28" fill="${se}"/>
      <text x="60" y="${re+Pe-13}" font-size="19" text-anchor="middle" fill="${Ce}" font-family="serif" font-weight="bold">쌍피</text>`:""}function Kg(e,n,t){const r=n.tint?Jr(n.red,n.tint,n.tintAmount*.7):n.red;let i=Jr(n.paperTop,Vg[e]??"#ffffff",.08);return n.tint&&(i=Jr(i,n.tint,n.tintAmount*.5)),`
  <defs>
    <clipPath id="cl${t}"><rect x="${ee}" y="${re}" width="${ye}" height="${Pe}"/></clipPath>
    <filter id="gr${t}" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>
  <defs>
    <linearGradient id="bd${t}" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0%" stop-color="${Nt(r,.18)}"/>
      <stop offset="52%" stop-color="${r}"/>
      <stop offset="100%" stop-color="${Nt(r,-.22)}"/>
    </linearGradient>
  </defs>
  <defs>
    <linearGradient id="ik${t}" x1="0" y1="0" x2="0.25" y2="1">
      <stop offset="0%" stop-color="${Nt(n.ink,.2)}"/>
      <stop offset="45%" stop-color="${n.ink}"/>
      <stop offset="100%" stop-color="${Nt(n.ink,-.35)}"/>
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
  <rect width="${Ye}" height="${Xe}" rx="9" fill="url(#bd${t})"/>
  <rect x="2" y="2" width="${Ye-4}" height="${Xe-4}" rx="7.5" fill="none"
        stroke="#ffffff" stroke-width="1.2" opacity="0.22"/>
  <!-- 종이가 테두리보다 살짝 눌려 들어간 느낌 -->
  <rect x="${ee-2.5}" y="${re-2.5}" width="${ye+5}" height="${Pe+5}" rx="1.5"
        fill="${n.ink}" opacity="0.55"/>
  <rect x="${ee-1}" y="${re-1}" width="${ye+2}" height="${Pe+2}" rx="1"
        fill="none" stroke="#ffffff" stroke-width="0.9" opacity="0.18"/>
  <rect x="${ee}" y="${re}" width="${ye}" height="${Pe}" fill="${i}"/>
  <rect x="${ee}" y="${re}" width="${ye}" height="${Pe}" fill="url(#vg${t})"/>
  <rect x="${ee}" y="${re}" width="${ye}" height="${Pe}" fill="none" stroke="${n.ink}"
        stroke-width="1.1" opacity="0.35"/>`}function Yg(e,n){const t=n?.width??Ye,r=n?.height??Xe,i=vh(n?.skin??bi.id);ke=i.ink,Ce=i.white,se=i.red,X=i.gold;const l=`${e.id}-${i.id}`.replace(/[^a-zA-Z0-9-]/g,"");xh=l;const o=e.month===0?"보너스":`${e.month}`;let s="";return e.isBonus?s=xu(e):(s=Hg(e.month),e.kind==="gwang"?s+=Zg(e.month)+qg():e.kind==="yeol"?s+=Qg(e):e.kind==="tti"&&e.tti?s+=Wg(e.tti):s+=xu(e)),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Ye} ${Xe}" width="${t}" height="${r}" role="img" aria-label="${e.name}">
  ${Kg(e.month,i,l)}
  <g clip-path="url(#cl${l})">${s}</g>
  <text x="${Ye/2}" y="${Xe-3.5}" font-size="14" font-weight="700" text-anchor="middle" fill="${Ce}"
        font-family="sans-serif" opacity="0.95">${o}</text>
  <rect x="${ee}" y="${re}" width="${ye}" height="${Pe}" filter="url(#gr${l})" opacity="0.085"
        style="mix-blend-mode:multiply"/>
  <rect width="${Ye}" height="${Xe}" rx="9" filter="url(#gr${l})" opacity="0.045" style="mix-blend-mode:multiply"/>
  <rect width="${Ye}" height="${Xe}" rx="9" fill="url(#gl${l})" style="pointer-events:none"/>
  <rect x="0.75" y="0.75" width="${Ye-1.5}" height="${Xe-1.5}" rx="9" fill="none" stroke="${i.ink}"
        stroke-width="1.5" opacity="0.45"/>
</svg>`}function Al(e,n){return`data:image/svg+xml;utf8,${encodeURIComponent(Yg(e,n))}`}function Xg(e){const n=e?.width??Ye,t=e?.height??Xe,r=vh(e?.skin??bi.id),i=r.tint?Jr("#7a2b24",r.tint,r.tintAmount*.8):"#7a2b24",l=r.tint?Jr("#8f342b",r.tint,r.tintAmount*.8):"#8f342b";return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Ye} ${Xe}" width="${n}" height="${t}" role="img" aria-label="뒷면">
  <rect width="${Ye}" height="${Xe}" rx="10" fill="${i}"/>
  <rect x="7" y="7" width="${Ye-14}" height="${Xe-14}" rx="7" fill="${l}" stroke="${r.gold}" stroke-width="2.5"/>
  <circle cx="${Ye/2}" cy="${Xe/2}" r="30" fill="none" stroke="${r.gold}" stroke-width="3"/>
  <circle cx="${Ye/2}" cy="${Xe/2}" r="18" fill="none" stroke="${r.gold}" stroke-width="2"/>
  <path d="M60 60 v60 M30 90 h60" stroke="${r.gold}" stroke-width="2" opacity="0.6"/>
</svg>`}function Jg(e){return`data:image/svg+xml;utf8,${encodeURIComponent(Xg(e))}`}const ku=[{id:"maru",name:"밤의 마루",vars:{}},{id:"daylight",name:"툇마루 한낮",vars:{"--wood-dark":"#6b5640","--wood":"#8a7157","--wood-light":"#a68d6f","--paper":"#fff8ec","--paper-dim":"#e6dbc8","--lamp":"#ffcf6b","--lamp-dim":"#c9a25a"}},{id:"snow",name:"첫눈 오는 밤",vars:{"--wood-dark":"#1b2233","--wood":"#333f57","--wood-light":"#4c5b78","--paper":"#eef4ff","--paper-dim":"#c2cddf","--lamp":"#a8d0ff","--lamp-dim":"#6f8fb8","--accent":"#5c7fd0"}},{id:"lantern",name:"등불",vars:{"--wood-dark":"#2b1508","--wood":"#5c2f12","--wood-light":"#7d4520","--paper":"#ffeccd","--paper-dim":"#dfbf95","--lamp":"#ffb347","--lamp-dim":"#c97a2a","--accent":"#d4552f"}}];function Ua(e){return ku.find(n=>n.id===e)??ku[0]}const Ot=[{id:"cards:hanji",kind:"cards",name:"한지 화패",desc:"누런 한지에 찍어낸 듯한 담백한 패",price:1200},{id:"cards:moonlit",kind:"cards",name:"달밤 화패",desc:"달빛에 담근 푸른 패. 밤에 치기 좋다",price:2200},{id:"cards:gilt",kind:"cards",name:"금박 화패",desc:"어두운 바탕에 금빛. 하숙집에선 과하다는 평",price:3800},{id:"theme:daylight",kind:"theme",name:"툇마루 한낮",desc:"해 드는 대낮의 나무 빛깔로 바꾼다",price:900},{id:"theme:snow",kind:"theme",name:"첫눈 오는 밤",desc:"창밖에 눈이 오는 듯한 푸른 밤",price:1800},{id:"theme:lantern",kind:"theme",name:"등불",desc:"전등 하나만 켜둔 진한 주황빛",price:2800}],em=Ot.reduce((e,n)=>e+n.price,0);function Qn(e){return e.id.split(":")[1]}function nm(e){return Ga.find(n=>n.id===e)?.name??e}const tm=[{id:"eunseo",order:1,name:"은서",nickname:"옆방",age:22,job:"시각디자인과 2학년",room:"201호",season:"spring",personality:["밝음","덤벙댐","정 많음"],styleLabel:"아직 규칙을 외우는 중. 뭘 낼지 모르겠으면 그냥 낸다",backstory:"통학 두 시간이 싫어 무작정 짐을 쌌다. 버스를 놓쳐 언덕을 걸어 올라온 첫 하숙생.",style:{weights:{pi:1.1},mistakeScale:1.15,greedScale:1.1,inferenceScale:.8,aggressionScale:.7,stopScoreDelta:1},unlock:[],rate:3,reward:{base:26,perStage:5},lines:{matchStart:{low:["어, 안녕! 나 은서. 옆방 살아.","규칙은... 어제 외웠어. 아마도.","살살 해줘. 진짜로."],mid:["오늘은 좀 늘었어. 기대해도 돼.","어제 혼자 연습했다? 마루에서.","자, 앉아 앉아. 방석 여기."],high:["오늘도 같이 칠 거지? 기다렸는데.","네 자리 맡아뒀어. 여기 앉아.","지면 야식. 이기면... 도 야식."]},go:{low:["어어, 고? 고! 맞나? 고!","이거 고 하는 거 맞지? 맞겠지.","몰라, 일단 고!"],mid:["고. 이번엔 계산하고 하는 거야.","여기서 멈추면 아쉽잖아. 고!","손이 좋아. 고 할래."],high:["고. 너 표정 보니까 더 가도 될 것 같아.","고! 놀라는 얼굴 보고 싶어서.","고 할게. 조금만 더 같이 있자는 뜻이야."]},stop:{low:["스톱! 더 가면 나 무너져.","여기서 멈출래. 심장이 쿵쾅거려.","스톱... 맞지? 스톱!"],mid:["스톱. 욕심내다 뻑 나는 거 봤거든.","딱 여기. 오늘은 여기까지가 좋아.","스톱할게. 다음 판이 더 재밌을 거야."],high:["스톱. 오래 끌면 네가 지루해할까 봐.","여기서 스톱. 대신 한 판 더 하자.","스톱! 이겼다 이겼다."]},ppeok:{low:["으악 뻑! 이거 왜 이래!","아 진짜... 방금 건 못 본 걸로.","뻑이다... 나 이거 제일 싫어."],mid:["뻑. 괜찮아, 어차피 내가 가져올 거야.","묶였네. 저거 내 거야 나중에.","뻑 났다. 표정 관리 중."],high:["뻑! 봤지? 너 웃었어 지금.","아 뻑... 웃지 마 좀.","뻑 났는데 왜 기분이 나쁘지 않지."]},sseulVictim:{low:["어? 바닥이 비었어. 그래도 되는 거야?","다 가져갔어... 방금 뭐 한 거야?","잠깐만, 다시 설명해줘."],mid:["쓸었네. 그거 배워야겠다.","아, 그렇게 하는 거구나. 메모.","잘한다 진짜. 얄밉게."],high:["또 쓸어? 나 이제 안 놀라.","멋있어서 봐준다. 이번만.","쓸 때 표정 좀 짓지 마, 심장에 안 좋아."]},win:{low:["이겼다! 나 이겼어! 진짜로?","어... 이긴 거 맞지? 맞지?","와 처음이야 이런 거."],mid:["이겼다! 연습한 보람 있네.","봤지? 나 늘었다니까.","오늘은 내가 설거지 면제야."],high:["이겼다! 근데 네가 봐준 거 아니지?","이겼어. 상으로 내일 편의점 같이 가자.","내가 이겼으니까 오늘 야식은 내가 살게. 이상하지?"]},lose:{low:["졌다... 그래도 재밌었어.","아 아까워! 다음엔 안 져.","한 판만 더, 응? 한 판만."],mid:["졌네. 근데 이번엔 꽤 근접했지?","분하다. 분한데 또 하고 싶다.","다음 판에 두고 보자."],high:["졌지만 기분은 안 나빠. 이상하지.","또 졌네. 너랑 하면 왜 자꾸 지지.","졌으니까 벌칙. 내일도 같이 쳐줘."]},affection:{low:["저기, 이따 마루에 나올 거야?","어... 물어볼 게 있었는데. 아 맞다 그거.","괜찮으면 잠깐 얘기할래?"],mid:["있잖아, 나 요즘 밤이 기다려져.","너랑 있으면 시간이 왜 이렇게 빨라?","이거 너 주려고 사 왔어. 별거 아니야."],high:["나 사실 하고 싶은 말이 있는데.","맞고 말고도 같이 하고 싶은 거 많아.","오늘은 승부 말고 그냥 얘기하자."]},hints:["나 요즘 피만 모아. 진짜야. 눈치 좀 챙겨.","바닥에 광 놔두면 내가 가져간다? 알려주는 거야.","힌트 줄게. 나 계산 못 해. 오래 끌면 네가 이겨."]},events:[{stage:1,scriptId:"eunseo_01",title:"옆방 사람",hasChoice:!1},{stage:2,scriptId:"eunseo_02",title:"하숙집 규칙 세 가지",hasChoice:!1},{stage:3,scriptId:"eunseo_03",title:"은서의 취향",hasChoice:!1},{stage:4,scriptId:"eunseo_04",title:"새벽 두 시의 라면",hasChoice:!0},{stage:5,scriptId:"eunseo_05",title:"빨래 걷기 당번",hasChoice:!0},{stage:6,scriptId:"eunseo_06",title:"편의점 앞 벤치",hasChoice:!0},{stage:7,scriptId:"eunseo_07",title:"과제가 안 풀리는 밤",hasChoice:!1},{stage:8,scriptId:"eunseo_08",title:"은서가 서울에 온 이유",hasChoice:!1},{stage:9,scriptId:"eunseo_09",title:"오해는 짧게",hasChoice:!0},{stage:10,scriptId:"eunseo_10",title:"마지막 판, 첫 마음",hasChoice:!0}],look:{hair:"#6b4630",hairStyle:"bob",skin:"#f7d9c4",outfits:["#f4a7b9","#ffd9a0","#fff3e0"],accent:"#e8657f",prop:"스케치북",face:"round",eyes:"round",bangs:"straight",build:"petite",accessory:"hairpin",wear:["hoodie","tee","dress"],propArt:"sketchbook"}},{id:"hayeong",order:2,name:"하영",nickname:"요리왕",age:24,job:"조리학과 4학년",room:"202호",season:"spring",personality:["차분함","부지런함","은근 승부욕"],styleLabel:"피부터 쌓는다. 화려하진 않은데 정신 차리면 피박",backstory:"졸업 작품으로 낼 식당을 준비 중이다. 열 명분 밥을 지어볼 부엌이 필요했다.",style:{weights:{pi:1.7,tti:.9,gwang:.85},mistakeScale:.95,greedScale:.9,inferenceScale:1.05,aggressionScale:.8,stopScoreDelta:0},unlock:[],rate:4,reward:{base:28,perStage:5},lines:{matchStart:{low:["부엌 정리 끝났어. 한 판 하자.","손 씻고 와. 기름 묻은 손으로 패 만지지 말고.","앉아. 국 데워놨으니까 지면 그거 먹고 가."],mid:["오늘 반찬 잘 됐어. 이기면 하나 더 줄게.","자, 시작하자. 불 다 껐어.","오늘은 좀 길게 갈 생각이야."],high:["네 몫 덜어놨어. 치우면서 먹어.","기다렸어. 앉아.","오늘은 네가 좋아하는 거 했어. 판 끝나고."]},go:{low:["고.","고. 아직 멀었어.","고 할게. 피가 모자라."],mid:["고. 피 다섯 장만 더.","고. 재료 다 못 모았거든.","고. 여기서 끊으면 맛이 안 나."],high:["고. 오늘은 좀 욕심내 볼래.","고. 너랑 더 하고 싶어서라고 하면 웃을래?","고. 이유는 나중에 말해줄게."]},stop:{low:["스톱. 이 정도면 충분해.","스톱. 간 맞았어.","스톱."],mid:["스톱. 더 끓이면 졸아.","여기서 딱. 욕심은 요리도 맞고도 망쳐.","스톱할게. 피박은 확인했고."],high:["스톱. 얼른 끝내고 야식 먹자.","스톱. 오늘은 빨리 끝내고 얘기하고 싶어.","스톱. 대신 설거지는 네가."]},ppeok:{low:["뻑.","묶였네. 상관없어.","뻑이야. 저건 내가 다시 가져올 거고."],mid:["뻑. 냄비 뚜껑 닫아둔 셈 치자.","뻑 났어. 기다리면 돼.","저거 내 거야. 손대지 마."],high:["뻑. 너 지금 웃었지.","뻑 났는데 네가 좋아하네. 얄밉다.","뻑. 그래도 네 앞이라 다행이야."]},sseulVictim:{low:["쓸었네. 잘하네.","바닥 깨끗하다. 부엌도 그렇게 해줘.","인정. 잘했어."],mid:["쓸 줄도 알고. 언제 배웠어?","아까워라. 저거 내 피였는데.","좋아, 다음 판에 돌려받을게."],high:["또 쓸어. 진짜 얄미워.","그거 하지 마. 심장 내려앉아.","잘하는 거 알겠으니까 그만 좀 웃어."]},win:{low:["내가 이겼어. 국 식기 전에 먹어.","이겼네. 설거지는 네 담당.","수고했어. 다음엔 더 잘하겠지."],mid:["이겼다. 오늘 저녁은 내가 정한다.","봤지? 피가 무서운 거야.","이겼어. 상은 네가 주는 거로."],high:["이겼는데 왜 미안하지.","이겼으니까 소원 하나. 내일도 여기 앉아.","이겼다. 근데 오늘은 안 기쁘네. 네가 아쉬워해서."]},lose:{low:["졌네. 잘 쳤어.","인정할게. 오늘은 네가 나았어.","다음엔 안 봐줘."],mid:["졌다. 분한데 밥은 차려줄게.","너 요즘 늘었어. 인정.","한 판 더 하면 결과 다를 텐데."],high:["졌어. 근데 네가 이기는 것도 나쁘지 않네.","졌으니까 오늘은 내가 설거지. 같이 하자.","졌다. 이렇게 지는 건 처음이야."]},affection:{low:["이따 주방 쪽으로 와. 남은 거 있어.","잠깐 손 좀 빌릴 수 있을까.","물어볼 게 있는데, 지금 괜찮아?"],mid:["요리는 혼자 먹으면 맛이 없더라.","네 입맛 이제 대충 알 것 같아.","밥 먹을 사람이 있다는 게 좋아졌어."],high:["나 원래 남 챙기는 사람 아니야. 너 빼고.","이건 네 거야. 다른 사람 주려고 만든 거 아니야.","오늘은 내 얘기 좀 할게. 들어줄래?"]},hints:["나 피 모아. 피만 봐. 그거 하나만 막아도 반은 이겨.","쌍피 바닥에 놓지 마. 나 그거 주우려고 기다려.","내가 스톱 안 하면 피가 모자란 거야. 계산해봐."]},events:[{stage:1,scriptId:"hayeong_01",title:"부엌은 내 구역",hasChoice:!1},{stage:2,scriptId:"hayeong_02",title:"냉장고 칸 배분",hasChoice:!1},{stage:3,scriptId:"hayeong_03",title:"간을 못 맞추는 사람",hasChoice:!1},{stage:4,scriptId:"hayeong_04",title:"장 보러 가는 길",hasChoice:!0},{stage:5,scriptId:"hayeong_05",title:"실습 과제 시식단",hasChoice:!0},{stage:6,scriptId:"hayeong_06",title:"비 오는 날의 부침개",hasChoice:!0},{stage:7,scriptId:"hayeong_07",title:"졸업하면 뭐 할 거야",hasChoice:!1},{stage:8,scriptId:"hayeong_08",title:"하영이 요리를 시작한 날",hasChoice:!1},{stage:9,scriptId:"hayeong_09",title:"누구 몫이었을까",hasChoice:!0},{stage:10,scriptId:"hayeong_10",title:"한 사람을 위한 상",hasChoice:!0}],look:{hair:"#2f2723",hairStyle:"ponytail",skin:"#f3d3b8",outfits:["#a8d5b5","#d7e8c4","#fdf6e3"],accent:"#3e8e5a",prop:"앞치마",face:"oval",eyes:"droopy",bangs:"side",build:"average",accessory:"band",wear:["apron","shirt","hanbok"],propArt:"ladle"}},{id:"jiwoo",order:3,name:"지우",nickname:"밤샘",age:26,job:"미대 대학원생",room:"203호",season:"spring",personality:["야행성","무심함","집요함"],styleLabel:"띠만 본다. 홍단 청단 나오면 눈빛이 달라진다",backstory:"작업실 월세가 밀렸다. 새벽에 불을 켜도 아무도 뭐라 안 하는 방을 찾다 왔다.",style:{weights:{tti:1.8,hongdan:1.4,cheongdan:1.4,chodan:1.2,pi:.8},mistakeScale:.95,greedScale:1.1,inferenceScale:1,aggressionScale:.9,stopScoreDelta:1},unlock:[],rate:5,reward:{base:31,perStage:6},lines:{matchStart:{low:["아. 너구나. 앉아.","지금 몇 시야? ...뭐, 상관없나.","작업 막혔어. 딴짓하기 딱 좋네."],mid:["왔네. 커피 식었는데 마실래?","오늘은 좀 칠 만해. 앉아.","새벽에 제일 잘 보이거든, 패가."],high:["기다렸어. 밤이 길어서.","네 소리 나면 작업 손이 멈춰. 큰일이야.","앉아. 불 좀 줄일게."]},go:{low:["고.","고. 아직 색이 안 찼어.","고. 두 장 더."],mid:["고. 홍단이 보여.","고. 여기서 멈추면 그림이 미완성이야.","고. 나 이거 완성할 거야."],high:["고. 오늘 밤은 길게 쓰고 싶어.","고. 너 놀라는 거 보려고.","고. 이유 물어보지 마."]},stop:{low:["스톱.","됐어. 스톱.","여기까지. 스톱."],mid:["스톱. 색 다 채웠어.","스톱. 더 칠하면 탁해져.","스톱. 완성은 멈출 때 정해지는 거야."],high:["스톱. 얼른 끝내고 딴 얘기 하자.","스톱. 오늘은 너랑 할 얘기가 있어서.","스톱. 미안, 급해졌어."]},ppeok:{low:["뻑.","...묶였네.","저거 내 거였는데."],mid:["뻑. 밑칠 다시 하는 셈 치지.","괜찮아. 저 색은 내가 회수해.","뻑 났다고 그림이 끝나는 건 아니야."],high:["뻑. 웃지 마.","뻑이야. 너 지금 신났지.","뻑. 그래도 네 앞이라 덜 억울하다."]},sseulVictim:{low:["쓸었네.","바닥이 하얘졌어. 캔버스 같다.","잘했어. 인정."],mid:["아깝다. 저기 청단 있었는데.","손 빠르네. 그거 좋은 거야.","다음엔 안 남겨둘게."],high:["또 쓸어. 너 그거 일부러 하지.","그만 좀 잘해. 집중 안 돼.","쓸 때 표정이 제일 좋아. 그건 인정."]},win:{low:["끝. 잘 자.","내가 이겼어. 나 작업하러 갈게.","수고. 다음엔 좀 더 버텨봐."],mid:["이겼다. 오늘 색 잘 나왔어.","띠 모으는 거 무섭지? 이제 알겠지.","이겼으니까 옥상 조명 내가 쓸게."],high:["이겼는데 아쉽네. 판이 끝나서.","이겼어. 근데 안 갈래. 좀 더 있자.","내가 이겼으니 소원. 내일도 새벽에 나와."]},lose:{low:["졌네. 잘 치더라.","...다시 해.","그림이나 그리러 가야겠다."],mid:["졌다. 오늘 네 손이 좋았어.","인정. 근데 다음은 아니야.","지고 나니까 오히려 잠이 깼어."],high:["졌어. 근데 계속 생각날 것 같아, 이 판.","졌다. 너한테 지는 건 왜 덜 분하지.","졌으니까 벌칙. 내 작업 구경하고 가."]},affection:{low:["이거 봐줄래? 아니다, 됐어.","옥상 갈 건데. 같이 갈 사람 없나 해서.","작업 얘기 지루하지 않아?"],mid:["네가 보면 그림이 좀 달라 보여.","요즘 그림에 사람이 들어가. 처음이야.","밤에 누가 있으면 이렇게 다르구나."],high:["이거 너 그린 거야. 보지 마. ...봐도 돼.","나 원래 사람 안 그려.","오늘은 작업 안 할래. 너랑 있을래."]},hints:["나 띠만 봐. 홍단 청단 그거만.","띠 바닥에 놓지 마. 그거 먹으려고 기다리는 거야.","내가 길게 끄는 건 단이 하나 모자라서야."]},events:[{stage:1,scriptId:"jiwoo_01",title:"새벽 세 시의 마루",hasChoice:!1},{stage:2,scriptId:"jiwoo_02",title:"조용히 해달라는 부탁",hasChoice:!1},{stage:3,scriptId:"jiwoo_03",title:"지우의 색",hasChoice:!1},{stage:4,scriptId:"jiwoo_04",title:"옥상에서 본 새벽",hasChoice:!0},{stage:5,scriptId:"jiwoo_05",title:"모델 좀 서줄래",hasChoice:!0},{stage:6,scriptId:"jiwoo_06",title:"24시간 카페 원정",hasChoice:!0},{stage:7,scriptId:"jiwoo_07",title:"그림이 안 그려질 때",hasChoice:!1},{stage:8,scriptId:"jiwoo_08",title:"떨어진 공모전",hasChoice:!1},{stage:9,scriptId:"jiwoo_09",title:"누가 모델이야",hasChoice:!0},{stage:10,scriptId:"jiwoo_10",title:"완성된 그림",hasChoice:!0}],look:{hair:"#1f1b2e",hairStyle:"long",skin:"#efd2bd",outfits:["#5b6b8c","#3d4359","#c9c3e0"],accent:"#7a6fd8",prop:"물감 묻은 소매",face:"slim",eyes:"sleepy",bangs:"curtain",build:"tall",accessory:"none",wear:["smock","hoodie","coat"],propArt:"brush"}},{id:"sea",order:4,name:"세아",nickname:"새벽",age:22,job:"운동처방학과 2학년",room:"204호",season:"spring",personality:["씩씩함","직진","뒤끝 없음"],styleLabel:"손이 먼저 나간다. 생각하기 전에 내고, 피를 쓸어간다",backstory:"새벽 다섯 시에 달리려고 들어왔다. 기숙사는 문이 안 열렸다.",style:{weights:{pi:1.6,tti:.9,yeol:.9,gwang:.8},mistakeScale:1.2,greedScale:1.3,inferenceScale:.85,aggressionScale:1.3,stopScoreDelta:2},unlock:[{tenantId:"hayeong",stage:5}],rate:6,reward:{base:33,perStage:6},lines:{matchStart:{low:["한 판만요! 삼 분이면 끝나요.","저 지금 뛰고 와서 손이 뜨거워요.","빨리 해요. 저 여섯 시에 또 나가야 돼요."],mid:["오늘도 한 판 해요. 이제 규칙 다 외웠어요.","제가 요즘 좀 늘었거든요?","준비운동 끝났어요. 시작해요."],high:["같이 뛰는 건 싫다면서 이건 왜 매일 해요?","오늘은 좀 오래 해요. 지면 억울하니까.","앉아 있는 게 이렇게 재밌을 줄 몰랐어요."]},go:{low:["고! 아직 안 끝났어요.","고. 여기서 멈추면 재미없잖아요.","고요. 더 가요."],mid:["고. 숨 아직 안 찼어요.","고. 저 원래 끝까지 가는 사람이에요.","고! 더 벌어요."],high:["고. 판 끝나면 올라가야 되잖아요.","고. 조금만 더 있어요.","고요. 오늘은 좀 길게 가고 싶어요."]},stop:{low:["스톱. 저 시간 없어요.","여기서 끊을게요.","스톱이요. 다음에 또 해요."],mid:["스톱. 이 정도면 됐어요.","욕심부리다 놓치는 거 봤거든요.","스톱할게요. 깔끔하게."],high:["스톱. 오래 끌면 선배가 피곤하잖아요.","여기까지. 내일 또 하면 되죠.","스톱이요. 내일도 있으니까."]},ppeok:{low:["어? 이게 왜 이렇게 돼요?","뻑이요? 아 진짜.","제가 또 뭘 잘못한 거예요?"],mid:["뻑. 알고도 밟았어요.","아 이거 알면서 냈는데.","뻑이네요. 빨리 낸 값이죠."],high:["뻑. 급하게 낸 제 탓이에요.","웃지 마세요. 저도 알아요.","뻑이요. 이럴 때 좀 잡아주면 안 돼요?"]},sseulVictim:{low:["어어, 제 피 다 가져가요?","그거 제 거였는데요!","아 진짜 너무하시네요."],mid:["쓸었네요. 깔끔하시다.","제 피 돌려주세요.","이건 좀 아픈데요."],high:["쓸어가면서 웃지 마세요.","다음 판에 그대로 돌려받을 거예요.","제 거 가져간 만큼 내일 같이 뛰어요."]},win:{low:["이겼다! 저 이겼어요!","어? 제가 이겼어요?","와 오늘 될 것 같더라니."],mid:["이겼어요. 봤죠?","제가 늘었다니까요.","오늘 컨디션 좋아요."],high:["이겼어요. 근데 왜 안 아쉬워하세요.","봐주신 거 아니죠?","이겼는데 왜 제가 더 기분 좋지."]},lose:{low:["졌다. 한 판 더요!","에이. 다시 해요.","졌어요. 인정."],mid:["졌네요. 다음엔 안 져요.","아깝다. 진짜 아깝다.","한 판만 더 해요. 네?"],high:["졌는데 왜 웃음이 나지.","져도 괜찮네요. 이상하다.","다음 판은 제가 이길 거예요. 진짜로."]},affection:{low:["저 원래 낯 안 가려요.","선배는 말 좀 느리게 해요.","여기 사람 사는 것 같아서 좋아요."],mid:["같이 뛰자고는 안 할게요. 밤에 이거나 해요.","저 요즘 알람 안 맞춰도 깨요.","이 시간이 제일 좋아요."],high:["저 달리기보다 이게 더 좋아졌어요.","새벽에 나갈 때 마루 불 켜놓고 가요. 선배 보라고.","숨차는 게 달려서인 줄 알았어요."]},hints:["저 피만 봐요. 피 바닥에 두면 다 가져가요.","제가 빨리 내는 건 계산을 안 해서예요. 천천히 생각하세요.","저 고를 자주 질러요. 기다렸다가 뒤집으세요."]},events:[{stage:1,scriptId:"sea_01",title:"새벽 다섯 시의 발소리",hasChoice:!1},{stage:2,scriptId:"sea_02",title:"기숙사 문은 여섯 시에 열린다",hasChoice:!1},{stage:3,scriptId:"sea_03",title:"페이스 조절",hasChoice:!0},{stage:4,scriptId:"sea_04",title:"무릎",hasChoice:!0},{stage:5,scriptId:"sea_05",title:"같이 뛸래요?",hasChoice:!0},{stage:6,scriptId:"sea_06",title:"기록이 안 줄어요",hasChoice:!0},{stage:7,scriptId:"sea_07",title:"비 오는 날의 러닝머신",hasChoice:!1},{stage:8,scriptId:"sea_08",title:"대회 전날",hasChoice:!0},{stage:9,scriptId:"sea_09",title:"완주",hasChoice:!1},{stage:10,scriptId:"sea_10",title:"결승선",hasChoice:!0}],look:{hair:"#3a2a20",hairStyle:"ponytail",skin:"#f4d9c6",outfits:["#9fd8c0","#e8f2ec","#d8e6dd"],accent:"#5fc39a",prop:"물병",face:"round",eyes:"round",bangs:"wispy",build:"average",accessory:"band",wear:["hoodie","jersey","tee"],propArt:"tape"}},{id:"sua",order:5,name:"수아",nickname:"체대",age:25,job:"체육교육과 4학년",room:"301호",season:"summer",personality:["직진","호승심","뒤끝 없음"],styleLabel:"7점만 넘으면 무조건 고. 멈추는 법을 배운 적이 없다",backstory:"임용 준비를 한 해 더 하기로 했다. 바다가 보이면 아침마다 뛸 것 같아서 왔다고 한다.",style:{weights:{gwang:1.2,yeol:1.2,godori:1.3},mistakeScale:.9,greedScale:1.8,inferenceScale:.95,aggressionScale:1.5,stopScoreDelta:4},unlock:[{tenantId:"eunseo",stage:5}],rate:7,reward:{base:36,perStage:6},lines:{matchStart:{low:["왔어? 몸 풀었어?","승부는 승부야. 봐주는 거 없어.","자, 시작하자. 시간 아까워."],mid:["오늘 컨디션 좋아. 너도 그래야 할 텐데.","훈련 끝나고 바로 왔어. 앉아.","이번엔 오래 갈 각오해."],high:["너랑 하는 게 제일 재밌어. 진짜로.","오늘 하루 종일 이 시간만 기다렸어.","자, 붙자. 살살은 안 해."]},go:{low:["고!","당연히 고지. 왜 물어봐?","고! 여기서 멈추는 건 지는 거야."],mid:["고! 아직 반도 안 왔어.","고. 멈추는 법 안 배웠거든.","고! 더 가자!"],high:["고! 네가 따라오는 게 재밌어서.","고! 오늘 밤 안 끝낼 거야.","고. 이렇게 해야 네가 진심으로 붙잖아."]},stop:{low:["...스톱. 억울한데 스톱.","여기서 끊는다. 다음 판 각오해.","스톱. 오늘은 여기까지만."],mid:["스톱. 이겼으면 됐어.","스톱! 깔끔하게 끝내자.","스톱. 더 가면 욕심이야. 이번만."],high:["스톱. 얼른 끝내고 같이 걷자.","스톱. 오늘은 빨리 끝내고 싶었어.","스톱! 대신 내일 또 하는 거다."]},ppeok:{low:["아 뻑! 짜증나!","뻑? 뻑이라고?","이런 거 진짜 싫어."],mid:["뻑. 괜찮아, 뒤집으면 돼.","묶였네. 근데 나 저거 회수할 거야.","뻑 한 번에 안 무너져."],high:["아 뻑! 야, 웃지 마!","뻑 났다고 좋아하지 마라 진짜.","뻑. 근데 네가 웃으니까 봐준다."]},sseulVictim:{low:["뭐야, 다 가져갔어?","야. 그거 좀 심하지 않아?","쓸었네. 인정은 한다."],mid:["잘하네. 열받게.","좋아, 그게 실력이면 인정.","다음엔 안 당해."],high:["또 쓸어? 너 나 놀리지.","그거 멋있는 거 알고 하는 거지.","쓸 때마다 심박수 올라가. 운동보다 심해."]},win:{low:["이겼다! 역시.","수고. 다음엔 더 붙어보자.","이겼어. 기분 좋다."],mid:["이겼다! 오늘 컨디션 최고!","봤지? 고는 이렇게 하는 거야.","이겼으니까 옥상 내 거."],high:["이겼다! 근데 너 왜 안 분해해?","이겼어. 상으로 내일 같이 뛰자. 새벽에.","이겼는데 네가 웃으니까 이긴 것 같지가 않네."]},lose:{low:["졌네. 깔끔하게 인정.","분하다! 다시!","잘 쳤어. 다음은 내 차례야."],mid:["졌다. 근데 재밌었어.","역시 너랑 해야 재밌지.","한 판 더! 아직 안 끝났어."],high:["졌어. 근데 하나도 안 억울해. 이상하지.","너한테 지는 건 왜 기분이 괜찮지.","졌으니까 벌칙 받을게. 뭐든지."]},affection:{low:["야, 너 내일 시간 있어? 아니 그냥 물어본 거야.","운동 같이 할 사람 구하는데.","뭐 마실래? 사 온 김에."],mid:["너 은근히 끈질겨. 그거 좋은 뜻이야.","같이 뛰면 기록이 잘 나와. 신기하지.","요즘 훈련보다 이 시간이 더 기다려져."],high:["나 원래 말 돌리는 거 못 해.","좋아하는 건 좋아한다고 말하는 성격이야.","오늘은 승부 말고 다른 얘기 하자."]},hints:["나 7점만 넘으면 무조건 고야. 그거 이용해.","고박 노려. 내가 멈추질 않으니까.","광이랑 열끗만 봐. 피는 신경 안 써."]},events:[{stage:1,scriptId:"sua_01",title:"3층에서 내려온 사람",hasChoice:!1},{stage:2,scriptId:"sua_02",title:"새벽 여섯 시의 발소리",hasChoice:!1},{stage:3,scriptId:"sua_03",title:"수아의 승부욕",hasChoice:!1},{stage:4,scriptId:"sua_04",title:"같이 뛸래?",hasChoice:!0},{stage:5,scriptId:"sua_05",title:"여름 옥상, 수박",hasChoice:!0},{stage:6,scriptId:"sua_06",title:"삔 발목",hasChoice:!0},{stage:7,scriptId:"sua_07",title:"임용까지 남은 시간",hasChoice:!1},{stage:8,scriptId:"sua_08",title:"그만둔 선수 생활",hasChoice:!1},{stage:9,scriptId:"sua_09",title:"말 안 한 이유",hasChoice:!0},{stage:10,scriptId:"sua_10",title:"마지막 고",hasChoice:!0}],look:{hair:"#3a2b1f",hairStyle:"short",skin:"#e8c09b",outfits:["#3f7fd0","#e2e8f0","#f5a623"],accent:"#2d6ac9",prop:"손목 테이핑",face:"round",eyes:"sharp",bangs:"wispy",build:"tall",accessory:"none",wear:["jersey","tee","dress"],propArt:"tape"}},{id:"minji",order:6,name:"민지",nickname:"취준",age:26,job:"취업준비생",room:"302호",season:"summer",personality:["계산적","현실적","속정 깊음"],styleLabel:"기대값으로 친다. 스톱 타이밍이 소름 돋게 정확하다",backstory:"삼 년째 취업 준비. 고시원에서 나와야 했고, 알아본 곳 중 여기가 제일 쌌다.",style:{weights:{pi:1.2,tti:1.1,gwang:1.1},mistakeScale:.8,greedScale:.6,inferenceScale:1.25,aggressionScale:.7,stopScoreDelta:-2},unlock:[{tenantId:"hayeong",stage:5}],rate:9,reward:{base:41,perStage:7},lines:{matchStart:{low:["오늘 자소서 세 개 썼어. 머리 좀 식히자.","한 판만. 딱 한 판.","앉아. 시간은 내가 정할게."],mid:["오늘은 좀 오래 해도 돼. 서류 다 냈거든.","너랑 하면 머리가 비워져서 좋아.","자, 시작하자."],high:["하루 종일 이 시간 계산하면서 버텼어.","오늘은 아무 생각 없이 치고 싶어.","앉아. 커피 내려놨어."]},go:{low:["고. 기대값이 아직 플러스야.","고 할게. 계산해봤어.","고."],mid:["고. 상대 피가 다섯 장이거든.","고. 여기서 끊는 게 손해야.","고. 숫자가 그렇게 말해."],high:["고. 오늘은 숫자 말고 기분으로.","고. 판이 끝나는 게 싫어서.","고. 이런 건 처음이야."]},stop:{low:["스톱.","스톱. 여기가 최적이야.","스톱. 더 가면 기대값이 음수야."],mid:["스톱. 정확히 여기.","스톱. 미안한데 계산이 끝났어.","여기서 끊는 게 맞아. 스톱."],high:["스톱. 대신 한 판 더 하자.","스톱. 오늘은 얘기가 더 하고 싶어서.","스톱. 계산은 내일부터 할게."]},ppeok:{low:["뻑. 변수 발생.","뻑이네. 확률상 있을 수 있는 일이야.","예상 범위 안이야."],mid:["뻑. 12% 확률이었는데 걸렸네.","괜찮아. 회수 계획 있어.","변수는 계산에 넣어뒀어."],high:["뻑. 너 앞에서만 이래.","이상하다. 너랑 할 때만 확률이 안 맞아.","뻑. 웃지 마. 계산 흔들려."]},sseulVictim:{low:["쓸었네. 기대값 밖이야.","인정. 잘 봤어.","그건 못 막았다."],mid:["아깝다. 그거 내 계획이었는데.","좋은 수였어. 진심으로.","메모해둘게. 다음엔 안 당해."],high:["또 쓸어. 내 계산이 자꾸 틀려.","너 때문에 통계가 망가져.","잘한다. 얄밉게 잘해."]},win:{low:["이겼어. 오늘 운이 좋았네.","수고했어. 잘 자.","이겼다. 다시 자소서 쓰러 가야지."],mid:["이겼다. 오늘은 좀 기분 좋네.","계산대로야. 기분은 계산 밖이지만.","이겼으니까 오늘은 일찍 잘래."],high:["이겼는데 아쉽다. 판이 끝나서.","이겼어. 근데 안 갈래. 좀 더 있자.","이겼으니까 소원 하나 들어줘. 내일도 나와줘."]},lose:{low:["졌네. 변수는 늘 있으니까.","잘 쳤어. 인정.","다음엔 계산 더 정확히 할게."],mid:["졌다. 근데 기분은 안 나빠.","네가 나보다 잘 봤어. 인정할게.","지는 것도 데이터야."],high:["졌어. 근데 오늘 제일 즐거웠어.","너한테 지면 왜 손해 같지가 않지.","졌으니까 오늘은 네 말 들을게."]},affection:{low:["나 요즘 계획이 다 틀어져. 왜인지 모르겠어.","잠깐 앉아도 돼? 머리가 복잡해서.","이거 남는 거야. 먹어."],mid:["계획에 없던 시간이 제일 좋더라.","너랑 있으면 조급한 게 좀 가라앉아.","나 사실 하루에 이 시간이 제일 기다려져."],high:["내 인생 계획표에 너가 들어왔어.","계산 안 하고 말하는 거 처음이야.","오늘은 아무것도 재지 말고 얘기하자."]},hints:["나는 7점 되면 거의 스톱이야. 그거 계산해.","내가 고를 하면 네 피가 모자란 거야. 확인해봐.","길게 끌면 내가 유리해. 빨리 끝내."]},events:[{stage:1,scriptId:"minji_01",title:"불 켜진 302호",hasChoice:!1},{stage:2,scriptId:"minji_02",title:"공용 프린터 규칙",hasChoice:!1},{stage:3,scriptId:"minji_03",title:"민지의 계산법",hasChoice:!1},{stage:4,scriptId:"minji_04",title:"면접 복장 골라주기",hasChoice:!0},{stage:5,scriptId:"minji_05",title:"탈락 메일이 온 밤",hasChoice:!0},{stage:6,scriptId:"minji_06",title:"편의점 야식 회의",hasChoice:!0},{stage:7,scriptId:"minji_07",title:"부모님 전화",hasChoice:!1},{stage:8,scriptId:"minji_08",title:"포기한 전공",hasChoice:!1},{stage:9,scriptId:"minji_09",title:"합격한 친구",hasChoice:!0},{stage:10,scriptId:"minji_10",title:"계산에 없던 답",hasChoice:!0}],look:{hair:"#463229",hairStyle:"bun",skin:"#f2d5bd",outfits:["#5c6370","#d8dde6","#9aa5b1"],accent:"#4c6ef5",prop:"안경",face:"oval",eyes:"narrow",bangs:"side",build:"average",accessory:"glasses",wear:["blouse","suit","knit"],propArt:"notebook"}},{id:"gaeun",order:7,name:"가은",nickname:"합주실",age:22,job:"실용음악과 2학년",room:"205호",season:"summer",personality:["밝음","감수성","은근한 고집"],styleLabel:"박자대로 낸다. 띠를 차곡차곡 모아 단을 만든다",backstory:"밤에 노래를 불러도 뭐라 하지 않는 집을 찾아 왔다.",style:{weights:{tti:1.7,hongdan:1.4,cheongdan:1.3,chodan:1.3,pi:.9,gwang:.9},mistakeScale:1,greedScale:1,inferenceScale:1.05,aggressionScale:.9,stopScoreDelta:0},unlock:[{tenantId:"sua",stage:5}],rate:11,reward:{base:46,perStage:8},lines:{matchStart:{low:["안녕하세요. 저 노래하는 가은이에요.","한 판 해요. 저 이거 처음이에요.","시끄러웠으면 미리 죄송해요."],mid:["오늘도 한 곡, 아니 한 판 해요.","합주 끝나고 오는 길이에요.","손 풀고 왔어요. 시작해요."],high:["오늘은 이기고 노래 들려드릴게요.","이 시간 기다렸어요.","먼저 와 계셨네요. 좋다."]},go:{low:["고. 아직 한 소절 남았어요.","고요.","고. 여기서 끊으면 어색해요."],mid:["고. 단 하나만 더 맞추면 돼요.","고. 후렴 전에 멈추는 노래 봤어요?","고. 조금만 더."],high:["고. 끝내기 아까워서요.","고. 오늘은 길게 가요.","고. 아직 하고 싶은 말이 남았어요."]},stop:{low:["스톱. 여기가 끝이에요.","스톱할게요.","여기서 마칠게요."],mid:["스톱. 끝은 깔끔해야 돼요.","여운 남기고 끊는 게 좋아요.","스톱. 딱 여기."],high:["스톱. 오늘은 여기까지가 예뻐요.","여기서 멈추는 게 제일 좋아요.","스톱. 다음 소절은 내일 해요."]},ppeok:{low:["어, 이거 뻑이에요?","박자 놓쳤다.","아 틀렸어요."],mid:["뻑. 한 박자 빨랐네요.","음정은 맞는데 박자가 틀렸어요.","뻑이요. 다시 세어볼게요."],high:["뻑. 선배 보느라 놓쳤어요.","박자 놓친 거 처음이에요. 진짜로.","뻑이네요. 웃지 마세요."]},sseulVictim:{low:["다 가져가셨어요...","제 띠 어디 갔어요?","아 이건 좀."],mid:["쓸렸네요. 잘하시네요.","모아둔 거 한 번에 가시네요.","다시 모으면 돼요."],high:["쓸어가셔도 돼요. 대신 노래 들어주세요.","제 거 가져가신 만큼 오래 앉아 계세요.","괜찮아요. 또 모으면 되니까."]},win:{low:["이겼어요! 저 이겨본 거 처음이에요.","어떡해 이겼다.","이게 되네요?"],mid:["이겼어요. 오늘 소리도 잘 나오더라니.","기분 좋다.","이겼으니까 한 곡 불러도 돼요?"],high:["이겼어요. 오늘 노래는 선배 거예요.","이기면 들려주기로 했잖아요.","이겼는데 왜 이렇게 떨리지."]},lose:{low:["졌어요. 그래도 재밌었어요.","아쉽다.","다음엔 잘할게요."],mid:["졌네요. 연습이 부족했어요.","한 판 더 하고 싶은데.","져도 기분은 안 나빠요."],high:["졌는데 왜 안 아쉽지.","져서 더 오래 앉아 있게 됐네요. 잘됐다.","다음엔 안 져요. 들어주세요."]},affection:{low:["밤에 소리 나면 말해주세요. 줄일게요.","여기 벽이 두꺼워서 좋아요.","이 집 조용해서 오히려 노래가 잘 돼요."],mid:["제 노래 처음 끝까지 들은 사람이에요.","합주실보다 여기가 편해요.","요즘 가사가 잘 써져요. 왜인지 알아요?"],high:["다음 곡은 이 마루 얘기예요.","무대에서보다 여기서 부를 때가 좋아요.","선배 앞에서 부를 때만 목이 안 떨려요."]},hints:["저 띠만 모아요. 홍단 청단 초단 나오면 먼저 가져가세요.","제가 단 하나 남았을 때 고를 질러요. 그때 끊으면 돼요.","띠 아닌 건 잘 안 봐요. 광이랑 열끗은 편하게 가져가세요."]},events:[{stage:1,scriptId:"gaeun_01",title:"벽 너머의 노래",hasChoice:!1},{stage:2,scriptId:"gaeun_02",title:"가사가 안 써져요",hasChoice:!1},{stage:3,scriptId:"gaeun_03",title:"합주실 열쇠",hasChoice:!0},{stage:4,scriptId:"gaeun_04",title:"음이탈",hasChoice:!0},{stage:5,scriptId:"gaeun_05",title:"버스킹 구경",hasChoice:!0},{stage:6,scriptId:"gaeun_06",title:"녹음 파일",hasChoice:!0},{stage:7,scriptId:"gaeun_07",title:"목이 안 나오는 날",hasChoice:!1},{stage:8,scriptId:"gaeun_08",title:"첫 공연 초대",hasChoice:!0},{stage:9,scriptId:"gaeun_09",title:"객석 맨 뒷줄",hasChoice:!1},{stage:10,scriptId:"gaeun_10",title:"마지막 곡",hasChoice:!0}],look:{hair:"#5a3a24",hairStyle:"wave",skin:"#f5dccb",outfits:["#f2d67a","#fff3cf","#e8c95e"],accent:"#ffb347",prop:"마이크",face:"oval",eyes:"round",bangs:"curtain",build:"average",accessory:"ribbon",wear:["knit","cardigan","dress"],propArt:"script"}},{id:"narae",order:8,name:"나래",nickname:"옥상",age:25,job:"천문학과 대학원생",room:"303호",season:"summer",personality:["몽롱함","신비로움","고집"],styleLabel:"광만 쫓는다. 비광까지 끌어모아 5광을 노린다",backstory:"관측 때문에 밤을 새운다. 도시 불빛이 닿지 않는 곳이 필요했다.",style:{weights:{gwang:2,yeol:1.1,pi:.7,tti:.85},mistakeScale:1,greedScale:1.4,inferenceScale:1,aggressionScale:1,stopScoreDelta:3},unlock:[{tenantId:"jiwoo",stage:5}],rate:13,reward:{base:50,perStage:9},lines:{matchStart:{low:["오늘 구름 없어. 좋은 밤이야.","옥상 갔다 왔어. 손이 차가워.","앉아. 별 보러 가기 전에 한 판."],mid:["오늘 목성 보여. 이따 같이 볼래?","밤이 길어서 좋아.","자, 시작하자. 달이 밝네."],high:["네 생각하면서 별 봤어. 이상하지.","오늘은 판 끝나고 옥상 가자.","기다렸어. 밤이 아까워서."]},go:{low:["고. 아직 별이 모자라.","고.","고. 세 개로는 부족해."],mid:["고. 다섯 개 다 모을 거야.","고. 여기서 멈추면 별자리가 안 돼.","고. 나 욕심 많아."],high:["고. 밤이 더 길었으면 해서.","고. 너랑 더 있고 싶어서 그래.","고. 별은 기다리는 사람한테만 보여."]},stop:{low:["스톱.","됐어. 스톱.","스톱. 오늘은 여기까지."],mid:["스톱. 별자리 완성됐어.","스톱. 구름이 오네.","스톱. 딱 좋은 때야."],high:["스톱. 옥상 가자. 지금.","스톱. 오늘 밤은 다른 데 쓰고 싶어.","스톱. 보여주고 싶은 게 있어."]},ppeok:{low:["뻑. 구름 꼈네.","가려졌어. 기다리면 돼.","뻑."],mid:["뻑. 구름은 지나가는 거야.","괜찮아. 별은 안 사라져.","저거 내가 회수해."],high:["뻑. 너 지금 별처럼 웃었어.","뻑인데 왜 기분이 좋지.","가렸네. 그래도 네가 보여."]},sseulVictim:{low:["다 가져갔네. 하늘이 비었어.","쓸었구나.","잘했어."],mid:["아깝다. 저기 광 있었는데.","손이 빠르네. 유성처럼.","인정. 다음엔 안 놔둘게."],high:["또 쓸어. 너 유성우야?","그거 하지 마. 마음이 텅 비어.","멋있었어. 분한데 멋있었어."]},win:{low:["이겼다. 별 보러 갈게.","끝. 잘 자.","이겼어. 오늘 하늘 맑더라."],mid:["이겼다. 광 다 모았어.","봤지? 이게 오광이야.","이겼으니까 옥상 자리 내 거."],high:["이겼는데 왜 안 기쁘지. 판이 끝나서 그런가.","이겼어. 상으로 옥상 같이 가자.","이겼다. 오늘 별보다 네가 더."]},lose:{low:["졌네. 구름이 많았어.","잘 쳤어.","다음 밤에 또 하자."],mid:["졌다. 광이 하나 모자랐어.","아깝다. 진짜 아까워.","한 판 더 하면 다를 텐데."],high:["졌는데 이상하게 좋아.","너한테 지는 밤도 나쁘지 않네.","졌으니까 소원 들어줄게. 말해."]},affection:{low:["옥상 올라갈 건데. 혼자 가긴 좀 그래서.","이거 망원경 렌즈야. 만져볼래?","밤에 안 자는 사람 반가워."],mid:["누구랑 같이 보는 하늘은 다르더라.","혼자 보던 별인데 이제 네 생각이 나.","옥상 자리 하나 비워뒀어. 네 자리야."],high:["나 사실 별 얘기 들어주는 사람 처음이야.","오늘은 하늘 말고 너 볼래.","이 밤이 안 끝났으면 좋겠어."]},hints:["나 광만 봐. 광 바닥에 놓지 마.","비광도 주워. 나한테는 다섯 번째 별이야.","내가 오래 끄는 건 광이 모자라서야. 광박 노려."]},events:[{stage:1,scriptId:"narae_01",title:"옥상에 사람이 있다",hasChoice:!1},{stage:2,scriptId:"narae_02",title:"옥상 사용 규칙",hasChoice:!1},{stage:3,scriptId:"narae_03",title:"나래가 세는 것",hasChoice:!1},{stage:4,scriptId:"narae_04",title:"망원경 나르기",hasChoice:!0},{stage:5,scriptId:"narae_05",title:"여름 유성우",hasChoice:!0},{stage:6,scriptId:"narae_06",title:"비 오는 날의 옥상",hasChoice:!0},{stage:7,scriptId:"narae_07",title:"연구실에 남는 이유",hasChoice:!1},{stage:8,scriptId:"narae_08",title:"관측이 실패한 밤",hasChoice:!1},{stage:9,scriptId:"narae_09",title:"옥상의 다른 발소리",hasChoice:!0},{stage:10,scriptId:"narae_10",title:"다섯 번째 별",hasChoice:!0}],look:{hair:"#20304a",hairStyle:"wave",skin:"#f0d6c4",outfits:["#2c3e6b","#6b7fb5","#dfe7f5"],accent:"#ffd766",prop:"망원경",face:"slim",eyes:"droopy",bangs:"curtain",build:"petite",accessory:"starpin",wear:["knit","coat","dress"],propArt:"telescope"}},{id:"yerin",order:9,name:"예린",nickname:"회계",age:27,job:"회계법인 1년차",room:"304호",season:"autumn",personality:["꼼꼼함","단정함","의외로 허당"],styleLabel:"박은 절대 안 쓴다. 손해 나는 수를 두지 않는다",backstory:"회사 근처 오피스텔을 두고 이 먼 데로 왔다. 이유는 아직 말하지 않았다.",style:{weights:{pi:1.35,gwang:1.15,yeol:1.15,tti:1.15},mistakeScale:.7,greedScale:.75,inferenceScale:1.3,aggressionScale:.85,stopScoreDelta:-1},unlock:[{tenantId:"sua",stage:5}],rate:15,reward:{base:55,perStage:10},lines:{matchStart:{low:["퇴근했어. 딱 한 시간만.","정산 끝냈어. 이제 이걸 정산할 차례네.","앉으세요. 아, 편하게 해도 돼."],mid:["오늘 야근 없어. 길게 갈 수 있어.","장부 덮고 왔어. 시작하자.","오늘은 좀 이길 것 같은데."],high:["퇴근길 내내 이 생각만 했어.","오늘은 야근 안 했어. 너 때문에.","앉아. 차 내렸어."]},go:{low:["고. 손실 없어.","고 하겠습니다. 아, 반말 반말.","고."],mid:["고. 리스크 확인했어.","고. 최악의 경우도 감당 가능해.","고. 숫자상 문제없어."],high:["고. 이번엔 리스크 좀 져볼래.","고. 이런 거 나답지 않은데.","고. 안 끝냈으면 해서."]},stop:{low:["스톱.","스톱. 여기가 손익분기점이야.","스톱하겠습니다."],mid:["스톱. 광박 확인했고, 마무리할게.","여기서 끊는 게 최선이야. 스톱.","스톱. 회수 완료."],high:["스톱. 대신 차 한 잔 더.","스톱. 오늘은 얘기가 더 좋아서.","스톱. 미안, 급하게 끝냈어."]},ppeok:{low:["뻑. 대손 처리하죠.","뻑이네요. 아, 뻑이네.","장부에 적어둘게."],mid:["뻑. 미수금이라고 생각할게.","회수 가능한 채권이야. 걱정 마.","뻑. 계획엔 있었어."],high:["뻑. 너 앞에서만 이래 진짜.","이상해. 계산이 자꾸 어긋나.","뻑. 웃지 마, 더 틀려."]},sseulVictim:{low:["전액 회수당했네요.","쓸었구나. 잘했어.","깔끔하네. 인정."],mid:["아, 그건 예상 못 했어.","손실 확정. 인정할게.","좋은 수였어. 배웠어."],high:["또 쓸어. 내 장부가 엉망이야.","너 때문에 손익이 안 맞아.","잘하는 거 알겠으니까 그만 좀."]},win:{low:["이겼어요. 아, 이겼어.","수고했어. 잘 자.","정산 끝. 내일 또 출근이네."],mid:["이겼다. 오늘은 흑자야.","박은 안 썼어. 그게 내 원칙이거든.","이겼으니까 세탁기 우선권 내 거."],high:["이겼는데 아쉬워. 벌써 끝나서.","이겼어. 근데 안 일어날래.","이겼으니까 소원. 내일도 기다려줘."]},lose:{low:["졌네요. 아, 졌네.","잘 쳤어. 인정.","다음엔 더 꼼꼼히 볼게."],mid:["졌다. 근데 깔끔하게 졌어.","네가 더 잘 봤어.","재밌었어. 정말로."],high:["졌는데 손해 본 기분이 아니야.","너한테 지는 건 계산에 안 넣었었네.","졌으니까 오늘은 네 말 들을게."]},affection:{low:["저기, 존댓말 아직 어색해? 나는 좀 어색해.","퇴근하고 오면 불 켜져 있는 게 좋더라.","이거 회사에서 받은 건데 남아서."],mid:["나 사실 여기 오면 숨이 좀 쉬어져.","숫자 말고 사람 얘기 하는 게 오랜만이야.","너랑 있으면 퇴근한 기분이 들어."],high:["내 인생에서 계산 안 되는 게 딱 하나 생겼어.","원칙을 깨고 싶어진 건 처음이야.","오늘은 장부 안 볼래. 너만 볼래."]},hints:["나는 박을 절대 안 당해. 그러니까 정공법으로 와.","내가 스톱을 빨리 하는 편이야. 초반에 점수를 벌어.","리스크 없는 수만 둬서 느려. 속도로 눌러."]},events:[{stage:1,scriptId:"yerin_01",title:"가장 늦게 들어오는 사람",hasChoice:!1},{stage:2,scriptId:"yerin_02",title:"공과금 정산의 밤",hasChoice:!1},{stage:3,scriptId:"yerin_03",title:"예린의 원칙",hasChoice:!1},{stage:4,scriptId:"yerin_04",title:"야근 마중",hasChoice:!0},{stage:5,scriptId:"yerin_05",title:"가을 축제 초대권",hasChoice:!0},{stage:6,scriptId:"yerin_06",title:"감기 걸린 회계사",hasChoice:!0},{stage:7,scriptId:"yerin_07",title:"회사를 그만둘까",hasChoice:!1},{stage:8,scriptId:"yerin_08",title:"숫자를 믿게 된 이유",hasChoice:!1},{stage:9,scriptId:"yerin_09",title:"회사 선배의 연락",hasChoice:!0},{stage:10,scriptId:"yerin_10",title:"계산 밖의 항목",hasChoice:!0}],look:{hair:"#33261d",hairStyle:"long",skin:"#f4d8c2",outfits:["#7b8794","#cbd2d9","#b6786a"],accent:"#8b5e3c",prop:"서류 가방",face:"oval",eyes:"sharp",bangs:"side",build:"average",accessory:"earring",wear:["suit","blouse","dress"],propArt:"bag"}},{id:"harin",order:10,name:"하린",nickname:"설계실",age:23,job:"건축공학과 4학년",room:"206호",season:"autumn",personality:["똑똑함","엉뚱함","야식 사랑"],styleLabel:"남은 패를 센다. 내가 뭘 들고 있는지 계산해서 막는다",backstory:"졸업설계 때문에 밤을 새운다. 도면 펼 책상이 큰 방이 필요했다.",style:{weights:{gwang:1.2,yeol:1.2,tti:1.1,pi:1},mistakeScale:.75,greedScale:.9,inferenceScale:1.35,aggressionScale:1.1,stopScoreDelta:-1},unlock:[{tenantId:"narae",stage:5}],rate:18,reward:{base:63,perStage:11},lines:{matchStart:{low:["한 판 하자. 나 하린. 206호.","도면 그만 보고 싶어서 내려왔어.","앉아. 금방 끝내줄게."],mid:["오늘은 몇 수 앞까지 보이는지 보자.","너 패 돌아가는 거 이제 좀 알겠어.","시작하자. 계산 끝났어."],high:["오늘은 계산 안 하고 그냥 둘래.","너랑 두면 이상하게 수가 안 세져.","내려오길 잘했다."]},go:{low:["고. 아직 변수가 남았어.","고.","고. 계산상 이게 맞아."],mid:["고. 네 손에 뭐 있는지 대충 알거든.","고. 확률이 나한테 있어.","고. 여기서 접는 건 손해야."],high:["고. 계산은 안 했어. 그냥 더 있고 싶어서.","고. 오늘은 좀 비효율적으로 갈래.","고. 이유는 묻지 마."]},stop:{low:["스톱. 기대값이 꺾였어.","여기가 최적이야.","스톱. 더 가면 손해."],mid:["스톱. 숫자가 그만하래.","여기서 끊는 게 정답이야.","스톱. 미련 없어."],high:["스톱. 너 피곤해 보여서.","여기까지 하자. 내일 또 있잖아.","스톱. 오늘은 숫자 말고 네 얼굴 봤어."]},ppeok:{low:["뻑. 변수를 하나 빠뜨렸네.","계산 밖이야.","이건 못 봤어."],mid:["뻑. 확률 낮은 쪽이 나왔어.","이래서 설계는 여유를 둬야 해.","뻑이네. 인정."],high:["뻑. 너 보느라 한 줄 빠뜨렸어.","웃지 마. 나도 틀릴 때 있어.","뻑. 이번 건 진짜 몰랐어."]},sseulVictim:{low:["쓸어갔네. 분포가 이상하다.","그건 예상 못 했어.","다음엔 막을게."],mid:["쓸. 네가 그걸 들고 있을 확률은 낮았는데.","설계가 틀렸네.","좋아. 데이터 하나 늘었어."],high:["쓸어가면서 그렇게 웃으면 반칙이야.","기록해둘게. 복수용으로.","괜찮아. 어차피 야식 네가 사잖아."]},win:{low:["이겼다. 계산대로.","예상 범위 안이야.","이겼네."],mid:["이겼어. 세 수 전에 정해진 거야.","너 패턴이 있어. 알려줄까?","이겼다. 오늘 머리 잘 돌아가네."],high:["이겼는데 별로 안 기쁘네. 이상하다.","이겼으니까 야식 사줄게.","이겼어. 근데 판 끝나는 게 아쉽다."]},lose:{low:["졌어. 어디서 틀렸지.","다시 계산해볼게.","졌네. 분하다."],mid:["졌어. 네가 나보다 한 수 앞섰어.","인정. 오늘은 네가 맞았어.","복기하자. 어디서 갈렸는지."],high:["졌는데 기분이 나쁘지가 않아. 왜지.","너한테 지는 건 좀 괜찮네.","졌으니까 오늘 야식은 내가 살게."]},affection:{low:["나 밤에 도면 펴놔도 되지?","이 집 책상이 커서 왔어.","말 시켜도 돼. 어차피 집중 안 돼."],mid:["졸업설계 주제 바꿨어. 하숙집으로.","네 방 창문 크기 재도 돼?","혼자 밤새우는 것보다 낫다."],high:["설계 모형에 마루를 넣었어. 방석 열 개까지.","도면에 사람 그려 넣은 거 처음이야.","밤새우는 이유가 도면이 아니게 됐어."]},hints:["나 계산 잘해. 같은 월 세 장 이상 있으면 흔들어서 흔들어.","내가 안 내는 월이 있으면 그건 너 노리는 거야.","나 스톱이 빨라. 점수 빨리 올려서 먼저 끊어."]},events:[{stage:1,scriptId:"harin_01",title:"206호는 불이 안 꺼진다",hasChoice:!1},{stage:2,scriptId:"harin_02",title:"도면 위의 밥그릇",hasChoice:!1},{stage:3,scriptId:"harin_03",title:"야식 원정대",hasChoice:!0},{stage:4,scriptId:"harin_04",title:"설계 반려",hasChoice:!0},{stage:5,scriptId:"harin_05",title:"모형 만들기",hasChoice:!0},{stage:6,scriptId:"harin_06",title:"치수 재도 돼?",hasChoice:!0},{stage:7,scriptId:"harin_07",title:"밤샘 사흘째",hasChoice:!1},{stage:8,scriptId:"harin_08",title:"최종 심사 전날",hasChoice:!0},{stage:9,scriptId:"harin_09",title:"모형 속 마루",hasChoice:!1},{stage:10,scriptId:"harin_10",title:"사람이 사는 집",hasChoice:!0}],look:{hair:"#2e2432",hairStyle:"bun",skin:"#f2d8c8",outfits:["#b39ddb","#ede7f6","#9575cd"],accent:"#7e57c2",prop:"샤프",face:"oval",eyes:"sharp",bangs:"wispy",build:"tall",accessory:"hairpin",wear:["hoodie","shirt","coat"],propArt:"notebook"}},{id:"seyeon",order:11,name:"세연",nickname:"연극",age:24,job:"연극영화과 4학년",room:"305호",season:"autumn",personality:["과장됨","눈치 빠름","외로움 잘 탐"],styleLabel:"표정과 대사로 흔든다. 고를 외쳐도 진짜인지 알 수 없다",backstory:"있던 극단이 해체됐다. 다음 오디션까지만 있겠다고 하고 반년이 지났다.",style:{weights:{tti:1.25,yeol:1.2,godori:1.2,pi:1.05},mistakeScale:.85,greedScale:1.45,inferenceScale:1.15,aggressionScale:1.25,stopScoreDelta:2},unlock:[{tenantId:"minji",stage:5}],rate:21,reward:{base:70,perStage:12},lines:{matchStart:{low:["등장. 오늘의 상대역, 잘 부탁해.","대본 외우다 왔어. 머리 좀 식히자.","자, 1막 시작."],mid:["오늘 내 연기 잘 봐. 어디까지가 진짜일까?","무대 조명은 없지만 분위기는 내야지.","시작하자. 관객은 없지만."],high:["오늘은 연기 안 할게. 진짜로.","너한테는 안 통하더라, 내 연기.","앉아. 오늘 대사는 다 진심이야."]},go:{low:["고! ...일까?","고. 표정 읽지 마.","고야. 놀랐어?"],mid:["고. 근데 내가 진짜 좋은 패일까?","고! 이 대사 연습 많이 했어.","고. 너 지금 흔들렸지."],high:["고. 이번엔 진심이야. 진짜로.","고. 네 앞에선 연기가 안 돼.","고. 판 끝나는 게 싫어서."]},stop:{low:["스톱. 막 내립니다.","스톱! 커튼콜.","여기서 끊을게. 스톱."],mid:["스톱. 좋은 장면은 짧아야 해.","스톱. 여운을 남기는 게 연기야.","스톱. 다음 막을 기대해."],high:["스톱. 대사 말고 그냥 얘기하고 싶어.","스톱. 오늘은 무대 밖에 있고 싶어.","스톱. 연기 그만할래."]},ppeok:{low:["뻑! 이건 대본에 없었는데.","애드리브 들어갑니다.","뻑이네. 연출 실수."],mid:["뻑. 이것도 연기라고 해줄래?","묶였네. 2막에서 회수할게.","뻑. 이 표정 어때? 자연스러워?"],high:["뻑. 지금 표정은 진짜야.","야, 웃지 마. 연기 무너져.","뻑. 네 앞에서만 이래."]},sseulVictim:{low:["무대를 통째로 가져갔네.","쓸었어. 주연 자리 뺏겼다.","인정. 좋은 씬이었어."],mid:["아깝다. 저기 내 소품 있었는데.","그 장면 잘 나왔어. 인정.","다음 막엔 안 뺏겨."],high:["또 쓸어? 너 진짜 주연 하지.","그거 멋있는 거 알고 하는 거지?","심장 떨어지는 줄. 연기 아니야."]},win:{low:["막 내립니다. 박수는?","이겼어. 오늘 공연 끝.","수고했어, 상대역."],mid:["이겼다! 이번 막은 내 거야.","연기 좀 했지? 어디까지 속았어?","이겼으니까 욕실 순번 내 거."],high:["이겼는데 커튼콜이 안 즐겁네.","이겼어. 근데 안 나갈래. 무대에 더 있고 싶어.","이겼으니까 소원. 내일도 내 관객 해줘."]},lose:{low:["졌네. 오늘은 네가 주연.","잘 쳤어. 인정.","2막을 기대해."],mid:["졌다. 근데 좋은 장면이었어.","너 연기 안 하는데 왜 못 읽겠지.","다음 공연에서 보자."],high:["졌어. 근데 하나도 안 억울해.","너한테 지는 건 대본에 있었나 봐.","졌으니까 오늘 대사는 네가 정해."]},affection:{low:["대사 좀 받아줄래? 상대역이 없어서.","나 혼자 연습하면 이상하거든.","관객 한 명만 있어도 다르더라."],mid:["너 볼 때는 연기가 잘 안 돼.","무대 밖의 나도 봐주는 사람은 처음이야.","박수 안 쳐도 돼. 그냥 있어줘."],high:["나 사실 무대 내려오면 되게 조용해.","연기 말고 진짜 나를 보여준 적이 없었어.","오늘은 대본 없이 말할게."]},hints:["내 고는 반은 뻥이야. 점수 세어보면 알아.","표정 보지 마. 바닥을 봐.","내가 흔들 때는 진짜 좋은 패일 때가 적어."]},events:[{stage:1,scriptId:"seyeon_01",title:"복도에서 대사 외우는 사람",hasChoice:!1},{stage:2,scriptId:"seyeon_02",title:"소음 민원",hasChoice:!1},{stage:3,scriptId:"seyeon_03",title:"세연의 연기론",hasChoice:!1},{stage:4,scriptId:"seyeon_04",title:"대사 상대역",hasChoice:!0},{stage:5,scriptId:"seyeon_05",title:"가을 정기공연 티켓",hasChoice:!0},{stage:6,scriptId:"seyeon_06",title:"무대 뒤 도시락",hasChoice:!0},{stage:7,scriptId:"seyeon_07",title:"오디션에서 떨어진 날",hasChoice:!1},{stage:8,scriptId:"seyeon_08",title:"연기를 시작한 이유",hasChoice:!1},{stage:9,scriptId:"seyeon_09",title:"상대역과의 소문",hasChoice:!0},{stage:10,scriptId:"seyeon_10",title:"대본에 없는 대사",hasChoice:!0}],look:{hair:"#5a2230",hairStyle:"wave",skin:"#f6d9c6",outfits:["#b23a55","#f0c6d0","#2b2b3a"],accent:"#d94f6e",prop:"대본",face:"oval",eyes:"round",bangs:"split",build:"average",accessory:"earring",wear:["dress","cardigan","hanbok"],propArt:"script"}},{id:"dabin",order:12,name:"다빈",nickname:"다락",age:22,job:"아동학과 3학년",room:"307호",season:"autumn",personality:["조용함","다정함","겁 많음"],styleLabel:"위험하면 일찍 접는다. 작게, 여러 번 이긴다",backstory:"실습 나가는 유치원이 가까워서 왔다. 사실은 혼자가 무서웠다.",style:{weights:{pi:1.2,tti:1.1,yeol:1,gwang:.9},mistakeScale:.85,greedScale:.45,inferenceScale:1.2,aggressionScale:.6,stopScoreDelta:-3},unlock:[{tenantId:"yerin",stage:5}],rate:25,reward:{base:80,perStage:13},lines:{matchStart:{low:["아, 안녕하세요... 다빈이에요.","한 판... 해도 될까요?","저 잘 못해요. 미리 말씀드려요."],mid:["오늘도 한 판 해요. 기다렸어요.","이 시간이 제일 편해요.","천천히 해요. 급할 것 없잖아요."],high:["오늘도 같이 있어주실 거죠?","먼저 와 계셨네요. 좋다.","한 판 해요. 오래 걸려도 괜찮아요."]},go:{low:["고... 해도 될까요?","고요. 조금만 더.","고... 무섭지만 해볼게요."],mid:["고. 오늘은 용기 내볼래요.","고요. 여기서 접으면 아쉬워서.","고. 한 번만 더."],high:["고. 판 끝나면 올라가야 하잖아요.","고요. 조금만 더 있고 싶어요.","고. 오늘은 안 무서워요."]},stop:{low:["스톱이요. 무서워서요.","여기서 멈출게요.","스톱... 죄송해요."],mid:["스톱. 욕심 안 부릴래요.","이 정도면 충분해요.","스톱할게요. 작게 이기는 게 좋아요."],high:["스톱. 늦으면 안 되잖아요.","여기까지 해요. 내일도 있으니까.","스톱이요. 오늘은 안 아쉬워요."]},ppeok:{low:["어떡해, 뻑이에요?","제가 또 잘못했어요...","죄송해요. 이거 어떻게 해요."],mid:["뻑이네요. 조심한다고 했는데.","아... 이건 예상 못 했어요.","뻑. 괜찮아요, 아직 안 끝났으니까."],high:["뻑. 웃지 마세요, 부끄러워요.","이럴 때 좀 알려주시지.","뻑이요. 그래도 오늘은 안 울어요."]},sseulVictim:{low:["아... 다 가져가시는구나.","제 피...","괜찮아요. 괜찮아요."],mid:["쓸렸네요. 잘하시네요.","이럴 줄 알았으면 일찍 접을걸.","다시 모으면 되죠."],high:["쓸어가셔도 돼요. 대신 더 오래 앉아 계세요.","제 거 가져가신 거 기억할 거예요.","괜찮아요. 같이 있는 게 더 좋으니까."]},win:{low:["어? 제가 이겼어요?","이겼다... 진짜요?","이겨도 되는 건가요?"],mid:["이겼어요. 조심한 보람이 있네요.","작게 이겼어요. 그게 제 방식이에요.","이겼다. 기분 좋아요."],high:["이겼어요. 근데 하나도 안 기뻐요, 끝나니까.","이겼으니까 한 판 더 해요. 네?","이겼는데 왜 아쉽지."]},lose:{low:["졌어요. 그럴 줄 알았어요.","역시 저는 안 되나 봐요.","졌네요. 죄송해요."],mid:["졌어요. 그래도 재밌었어요.","다음엔 조금 더 버텨볼게요.","졌지만 괜찮아요."],high:["졌어요. 근데 하나도 안 분해요.","지는 것도 나쁘지 않네요.","져도 같이 있었으니까 됐어요."]},affection:{low:["밤에 복도 불 좀 켜두면 안 될까요.","저 사실 혼자 있는 거 무서워해요.","여기 사람 소리 나서 좋아요."],mid:["아이들한테 이 집 얘기 했어요.","요즘 복도 불 없어도 괜찮아요.","마루에 불 켜져 있으면 안심이 돼요."],high:["무서운 게 없어졌어요. 이유는 아시죠.","다락 창문에서 마루 불빛이 보여요. 그거 보고 자요.","혼자가 무서웠던 게 아니었나 봐요."]},hints:["저 겁이 많아서 빨리 접어요. 점수 천천히 올려도 돼요.","제가 고를 안 하니까 길게 끌면 유리해요.","저는 피를 모아요. 쌍피 먼저 가져가세요."]},events:[{stage:1,scriptId:"dabin_01",title:"삼층 끝 방에 불이 켜졌다",hasChoice:!1},{stage:2,scriptId:"dabin_02",title:"복도 등",hasChoice:!1},{stage:3,scriptId:"dabin_03",title:"유치원 실습",hasChoice:!0},{stage:4,scriptId:"dabin_04",title:"아이가 그린 집",hasChoice:!0},{stage:5,scriptId:"dabin_05",title:"무서운 밤",hasChoice:!0},{stage:6,scriptId:"dabin_06",title:"그림책 읽어주기",hasChoice:!0},{stage:7,scriptId:"dabin_07",title:"가을 운동회",hasChoice:!1},{stage:8,scriptId:"dabin_08",title:"실습 마지막 날",hasChoice:!0},{stage:9,scriptId:"dabin_09",title:"다락 창문",hasChoice:!1},{stage:10,scriptId:"dabin_10",title:"불빛",hasChoice:!0}],look:{hair:"#4a3324",hairStyle:"bun",skin:"#f7e0cf",outfits:["#fbf3e4","#f0e2c8","#e8d5b0"],accent:"#a8d5ba",prop:"그림책",face:"round",eyes:"droopy",bangs:"split",build:"petite",accessory:"none",wear:["knit","cardigan","dress"],propArt:"sketchbook"}},{id:"dohee",order:13,name:"도희",nickname:"선배",age:28,job:"대학원 조교",room:"306호",season:"autumn",personality:["느긋함","짓궂음","통찰력"],styleLabel:"네 손패를 읽는다. 흔들기와 폭탄을 서슴없이 쓴다",backstory:"스물두 살에 갈 데가 없어 왔다. 보증금 없이 받아준 집이 여기뿐이었다.",style:{weights:{gwang:1.25,tti:1.2,yeol:1.2,pi:1.1},mistakeScale:.6,greedScale:1.15,inferenceScale:1.4,aggressionScale:1.6,stopScoreDelta:0},unlock:[{tenantId:"narae",stage:5}],rate:29,reward:{base:89,perStage:15},lines:{matchStart:{low:["오랜만이네, 후배. 앉아.","채점 끝났어. 이제 널 채점할 차례야.","손 좀 보자. 아, 패 말고 손."],mid:["오늘은 네가 뭘 노리는지 맞혀볼게.","앉아. 커피는 내가 샀어.","슬슬 시작할까."],high:["기다렸어. 오늘 좀 늦었네.","선배 노릇 그만하고 싶어지는 밤이야.","앉아. 오늘은 봐줄 생각 없어."]},go:{low:["고.","고 할게. 네 손에 뭐 있는지 알거든.","고. 여유 있어."],mid:["고. 너 방금 망설였지.","고. 네 손에 8월 남았잖아.","고. 아직 안 끝났어."],high:["고. 오늘 밤이 짧아서.","고. 이 판이 끝나면 네가 갈 거잖아.","고. 선배 욕심이라고 해두자."]},stop:{low:["스톱. 정리하자.","여기까지. 스톱.","스톱. 충분해."],mid:["스톱. 네 다음 수가 보여서.","스톱. 더 가면 네가 뒤집어.","스톱. 깔끔한 게 좋아."],high:["스톱. 오늘은 얘기가 하고 싶어서.","스톱. 판보다 네가 궁금해.","스톱. 선배가 먼저 접을게."]},ppeok:{low:["뻑. 그럴 수도 있지.","묶였네. 오래 안 갈 거야.","뻑."],mid:["뻑. 네가 저거 못 먹을 걸 아니까 괜찮아.","회수는 내 몫이지.","뻑. 계산에 있었어."],high:["뻑. 너 앞에서 체면 다 깎이네.","웃지 마. 선배 체면이 있지.","뻑. 오늘 왜 이러지 진짜."]},sseulVictim:{low:["쓸었네. 제법이야.","잘했어, 후배.","인정. 그건 좋은 수였어."],mid:["언제 이렇게 늘었어?","가르친 적 없는데 잘하네.","다음엔 안 놔둘게."],high:["또 쓸어. 이제 내가 배워야겠네.","너한테 쓸릴 줄이야.","잘한다. 얄미울 만큼."]},win:{low:["이겼다. 잘 배웠지?","수고했어. 다음엔 더 붙어봐.","끝. 들어가서 자."],mid:["이겼다. 아직 선배야.","흔들기 맛 좀 봤지?","이겼으니까 내일 조교실 커피는 네가."],high:["이겼는데 아쉽네. 벌써 끝이라서.","이겼어. 근데 안 보낼래.","이겼으니까 소원. 선배 말고 이름으로 불러봐."]},lose:{low:["졌네. 잘 쳤어.","인정. 오늘은 네가 나았어.","다음엔 안 봐줘."],mid:["졌다. 후배한테 지는 날도 오네.","네 수를 못 읽었어. 드문 일이야.","재밌었어. 정말로."],high:["졌어. 근데 하나도 안 분해.","너한테 지는 건 왜 이렇게 기분이 좋지.","졌으니까 오늘은 네가 선배 해."]},affection:{low:["후배, 시간 좀 있어? 아니 그냥.","조교실 커피가 남아서 가져왔어.","요즘 어때. 진짜로 묻는 거야."],mid:["선배 소리 들으면 거리감이 생기더라.","너랑 얘기하면 나이 생각이 안 나.","가끔은 나도 기대고 싶어."],high:["나 선배 노릇 그만하고 싶어졌어.","이름으로 불러줄래? 도희라고.","오늘은 후배 말고 그냥 너랑 있고 싶어."]},hints:["나는 네 손패를 세고 있어. 낸 패를 섞어.","내가 흔들면 진짜야. 그때는 빨리 끝내.","폭탄 맞기 싫으면 같은 월 세 장 안 남기게 유도해."]},events:[{stage:1,scriptId:"dohee_01",title:"같은 과 선배였다",hasChoice:!1},{stage:2,scriptId:"dohee_02",title:"하숙집 최고참의 조언",hasChoice:!1},{stage:3,scriptId:"dohee_03",title:"도희가 읽는 것",hasChoice:!1},{stage:4,scriptId:"dohee_04",title:"조교실 심부름",hasChoice:!0},{stage:5,scriptId:"dohee_05",title:"캠퍼스 벤치, 낙엽",hasChoice:!0},{stage:6,scriptId:"dohee_06",title:"논문 마감 전야",hasChoice:!0},{stage:7,scriptId:"dohee_07",title:"계속 공부할 거냐는 질문",hasChoice:!1},{stage:8,scriptId:"dohee_08",title:"도희가 하숙집에 온 해",hasChoice:!1},{stage:9,scriptId:"dohee_09",title:"선배라는 거리",hasChoice:!0},{stage:10,scriptId:"dohee_10",title:"이름으로 불러줘",hasChoice:!0}],look:{hair:"#241c17",hairStyle:"braid",skin:"#f1d4bb",outfits:["#8c6f4e","#d8c3a5","#4a3f35"],accent:"#b07d3f",prop:"머그컵",face:"round",eyes:"droopy",bangs:"side",build:"average",accessory:"hairpin",wear:["cardigan","knit","hanbok"],propArt:"mug"}},{id:"nayun",order:14,name:"나윤",nickname:"밤번",age:23,job:"간호학과 4학년",room:"308호",season:"winter",personality:["차분함","관찰력","속마음을 안 보임"],styleLabel:"상대를 본다. 내가 뭘 노리는지 먼저 알아챈다",backstory:"야간 실습이 끝나면 새벽이다. 그 시간에 불 켜진 집이 여기뿐이었다.",style:{weights:{yeol:1.3,godori:1.5,tti:1.1,pi:1,gwang:1},mistakeScale:.65,greedScale:.7,inferenceScale:1.45,aggressionScale:.9,stopScoreDelta:-2},unlock:[{tenantId:"seyeon",stage:5}],rate:32,reward:{base:97,perStage:16},lines:{matchStart:{low:["한 판 할래요? 저 방금 실습 끝났어요.","안 자고 뭐 해요. 앉아요.","새벽에 깨어 있는 사람끼리 해요."],mid:["오늘도 하네요. 이 시간에.","얼굴 보니까 오늘 잘 안 풀렸죠.","앉아요. 한 판만."],high:["기다렸어요. 오늘 좀 늦었네요.","이 시간이 하루 중에 제일 좋아요.","한 판 해요. 얘기는 그다음에."]},go:{low:["고.","고요. 아직 볼 게 남았어요.","고. 지금 접기엔 일러요."],mid:["고. 당신 손에 뭐가 없는지 알겠거든요.","고. 아직 안 위험해요.","고요."],high:["고. 판이 길어야 오래 앉아 있잖아요.","고. 오늘은 안 재고 갈래요.","고요. 이유는 알 거예요."]},stop:{low:["스톱. 여기가 끝이에요.","스톱할게요.","더 가면 위험해요."],mid:["스톱. 당신이 뒤집을 패를 들고 있어요.","여기서 끊는 게 맞아요.","스톱. 욕심은 사고로 이어져요."],high:["스톱. 당신 피곤해 보여요.","오늘은 여기까지. 좀 자요.","스톱이요. 내일도 여기 있을 거니까."]},ppeok:{low:["뻑이네요.","이건 못 읽었어요.","뻑. 드물게 틀렸네요."],mid:["뻑. 당신이 그걸 들고 있을 줄은.","읽었는데도 낼 게 없었어요.","뻑이요. 어쩔 수 없었어요."],high:["뻑. 당신 보느라 놓쳤어요.","이런 실수 잘 안 하는데.","뻑. 오늘은 좀 흐트러졌네요."]},sseulVictim:{low:["쓸었네요.","그건 예상했어요. 못 막았을 뿐이에요.","잘하시네요."],mid:["쓸. 제가 흘린 거예요.","알면서 내줬어요. 다음을 위해서.","괜찮아요. 판은 길어요."],high:["쓸어가는 얼굴이 제일 좋네요.","그거 가져가려고 기다린 거 다 알아요.","괜찮아요. 그거 보려고 흘렸어요."]},win:{low:["이겼어요.","이겼네요. 운도 있었어요.","끝났어요."],mid:["이겼어요. 세 수 전부터 보였어요.","당신 패는 읽기 쉬워요.","이겼어요. 오늘은 여기까지."],high:["이겼는데 왜 아쉽죠.","이겼으니까 좀 더 앉아 있어요.","이겼어요. 근데 끝내기 싫네요."]},lose:{low:["졌어요. 인정할게요.","제가 못 읽었네요.","졌어요. 다음엔 안 그래요."],mid:["졌어요. 오늘은 당신이 안 읽혔어요.","이럴 때가 있어야 재밌죠.","졌네요. 기분 나쁘진 않아요."],high:["졌어요. 일부러는 아니에요. 진짜로.","당신한테 지는 건 괜찮아요.","졌는데 왜 웃고 있지."]},affection:{low:["새벽에 불 켜져 있어서 들어왔어요.","저 말수 적은 거 신경 쓰지 마세요.","여기 조용해서 좋아요."],mid:["당신 피곤할 때 표정이 있어요. 알아요?","오늘은 물 한 잔 떠다 놨어요.","저 원래 사람 잘 안 봐요. 이상하네요."],high:["실습 끝나고 돌아올 데가 생겼어요.","새벽에 불 켜두는 사람이 저만이 아니라서 좋아요.","읽히는 건 저도 마찬가지였나 봐요."]},hints:["저 추론이 세요. 같은 월 두 장 들고 있으면 안 내는 게 나아요.","제가 안 내는 월은 당신이 노리는 월이에요.","저 고도리를 모아요. 새 나오면 먼저 가져가세요."]},events:[{stage:1,scriptId:"nayun_01",title:"새벽 세 시의 불빛",hasChoice:!1},{stage:2,scriptId:"nayun_02",title:"물 한 잔",hasChoice:!1},{stage:3,scriptId:"nayun_03",title:"야간 실습",hasChoice:!0},{stage:4,scriptId:"nayun_04",title:"손이 떨리는 날",hasChoice:!0},{stage:5,scriptId:"nayun_05",title:"환자 이야기",hasChoice:!0},{stage:6,scriptId:"nayun_06",title:"국가고시 D-100",hasChoice:!0},{stage:7,scriptId:"nayun_07",title:"잠 못 드는 밤",hasChoice:!1},{stage:8,scriptId:"nayun_08",title:"면접 전날",hasChoice:!0},{stage:9,scriptId:"nayun_09",title:"첫 출근",hasChoice:!1},{stage:10,scriptId:"nayun_10",title:"돌아올 데",hasChoice:!0}],look:{hair:"#241c18",hairStyle:"straight",skin:"#f3dbc9",outfits:["#b8cbe8","#eaf1fb","#8fa9cc"],accent:"#6f93c9",prop:"차트",face:"oval",eyes:"narrow",bangs:"side",build:"average",accessory:"earring",wear:["knit","blouse","coat"],propArt:"mug"}},{id:"yoon",order:15,name:"윤",nickname:"장기하숙생",age:29,job:"정체 불명 (하숙집 최장기 거주자)",room:"별채",season:"winter",personality:["조용함","정확함","쓸쓸함"],styleLabel:"판 전체가 보인다. 그리고 네 습관까지 기억한다",backstory:"삼십 년 전 이 집 하숙생. 장부의 퇴실일 칸만 아직 비어 있다.",style:{weights:{gwang:1.3,yeol:1.3,tti:1.3,pi:1.3,godori:1.2},mistakeScale:.3,greedScale:1,inferenceScale:1.5,aggressionScale:1.3,stopScoreDelta:-1},unlock:[{tenantId:"yerin",stage:5},{tenantId:"seyeon",stage:5},{tenantId:"dohee",stage:5}],rate:35,reward:{base:104,perStage:17},lines:{matchStart:{low:["앉아.","이 마루에서 삼십 년 동안 판이 돌았어.","네 차례가 올 줄 알았어."],mid:["오늘은 네가 먼저 내.","많이 늘었네. 누가 가르쳤어?","겨울 판은 길어. 각오해."],high:["기다렸어. 오래.","이 판이 끝나면 할 얘기가 있어.","앉아. 마지막 겨울이야."]},go:{low:["고.","고. 아직이야.","고. 서두르지 마."],mid:["고. 네 손에 뭐가 남았는지 알아.","고. 여기서 끝내면 아무것도 안 남아.","고."],high:["고. 이 밤을 늘리고 싶어서.","고. 끝나는 게 두려운 건 처음이야.","고. 이유는 다 알잖아."]},stop:{low:["스톱.","여기까지.","스톱. 충분해."],mid:["스톱. 네가 뒤집기 전에.","스톱. 다음 판이 더 중요해.","스톱."],high:["스톱. 이제 얘기하자.","스톱. 판은 끝나도 밤은 안 끝나.","스톱. 미안, 급해졌어."]},ppeok:{low:["뻑.","...묶였군.","괜찮아."],mid:["뻑. 삼십 년 만에 처음 같은데.","저건 회수해.","뻑. 드문 일이야."],high:["뻑. 너 앞에서만 이래.","이상하지. 손이 떨렸어.","뻑. 웃어도 돼."]},sseulVictim:{low:["쓸었군.","...제법이야.","잘했어."],mid:["그 수는 못 봤어. 오랜만이야.","너한테 배울 게 생겼네.","다음엔 안 놔둬."],high:["또 쓸어. 내가 지는 게 이렇게 반가울 줄이야.","너는 매번 나를 놀라게 해.","잘했어. 진심으로."]},win:{low:["끝났어. 들어가서 자.","아직 멀었어.","이겼다. 다시 와."],mid:["이겼어. 근데 예전보다 어려웠어.","네가 강해졌다는 뜻이야.","이겼으니 오늘은 여기까지."],high:["이겼는데 하나도 안 기뻐.","이겼어. 그런데 가지 마.","이겼으니 소원 하나. 내일도 와줘."]},lose:{low:["졌군. ...오랜만이야.","잘했어. 진심으로.","다시 해."],mid:["졌다. 삼십 년 만에 처음이야, 이런 기분.","네가 이 판을 가져갔어.","이 마루의 다음 차례는 너야."],high:["졌어. 그리고 기뻐. 이상하지.","누군가한테 지고 싶었던 건 처음이야.","이제 나도 이 집을 떠날 수 있겠네."]},affection:{low:["이 집에 대해 얼마나 알아?","삼십 년이면 긴 시간이야.","네 할머니가 처음 이 마루를 깔던 날을 기억해."],mid:["나는 여기서 계속 누군가를 기다렸어.","겨울은 늘 혼자 났어. 올해는 다르네.","이 집이 나한테 뭐였는지 이제 알 것 같아."],high:["나는 이기려고 여기 있었던 게 아니야.","이 판을 끝내줄 사람을 기다렸어.","오늘 밤이 마지막이어도 괜찮아. 네가 있으니까."]},hints:["네 최근 스무 판을 기억해. 습관을 바꿔.","나는 남은 패를 다 세. 안 보이는 수를 둬.","정공법으로는 안 돼. 흔들기든 폭탄이든 써."]},events:[{stage:1,scriptId:"yoon_01",title:"별채의 불빛",hasChoice:!1},{stage:2,scriptId:"yoon_02",title:"삼십 년의 규칙",hasChoice:!1},{stage:3,scriptId:"yoon_03",title:"윤이 기억하는 것",hasChoice:!1},{stage:4,scriptId:"yoon_04",title:"첫눈 오는 마루",hasChoice:!0},{stage:5,scriptId:"yoon_05",title:"오래된 화투 한 벌",hasChoice:!0},{stage:6,scriptId:"yoon_06",title:"할머니가 남긴 장부",hasChoice:!0},{stage:7,scriptId:"yoon_07",title:"이 집을 떠나지 못한 이유",hasChoice:!1},{stage:8,scriptId:"yoon_08",title:"삼십 년 전 그 판",hasChoice:!1},{stage:9,scriptId:"yoon_09",title:"마지막 하숙생",hasChoice:!0},{stage:10,scriptId:"yoon_10",title:"하숙집의 겨울",hasChoice:!0}],look:{hair:"#15161c",hairStyle:"long",skin:"#ecd8cb",outfits:["#2b2f3a","#6d7280","#c8ccd6"],accent:"#9aa7c7",prop:"낡은 화투갑",face:"slim",eyes:"narrow",bangs:"curtain",build:"tall",accessory:"none",wear:["coat","knit","hanbok"],propArt:"hwatu"}}],rm={tenants:tm},im={gwang:1,yeol:1,tti:1,pi:1,godori:1,hongdan:1,cheongdan:1,chodan:1},lm=10;function om(e,n,t=lm){const r=t>1?(e-1)/(t-1):0,i=(n-1)/9,l=Math.min(1,.5*r+.5*i);return{mistakeRate:.7*Math.pow(1-l,.7),inference:l,greed:.8-.68*l,stopScore:Math.round(11-4*l),patternLearning:Math.max(0,(l-.8)*5),aggression:.2+.5*l,weights:{...im}}}function sm(e,n){return{...e,...n,weights:{...e.weights,...n.weights??{}}}}const am=rm,Ze=am.tenants;function Or(e){const n=Ze.find(t=>t.id===e);if(!n)throw new Error(`unknown tenant: ${e}`);return n}function Va(e){return e<=30?"low":e<=70?"mid":"high"}const cm=.55,bu=e=>1+((e??1)-1)*cm;function um(e,n){const t=om(e.order,n,Ze.length),r=e.style;return sm(t,{mistakeRate:Hi(t.mistakeRate*bu(r.mistakeScale)),inference:Hi(t.inference*bu(r.inferenceScale)),greed:Hi(t.greed*(r.greedScale??1)),aggression:Hi(t.aggression*(r.aggressionScale??1)),stopScore:Math.max(7,t.stopScore+(r.stopScoreDelta??0)),weights:r.weights})}function Hi(e){return Math.max(0,Math.min(1,e))}function kh(e,n){return e.reward.base+e.reward.perStage*(n-1)}function bh(e){return e.rate*10}function sr(e,n){return e.unlock.length===0?!0:e.unlock.every(t=>(n[t.tenantId]??0)>=t.stage)}function Su(e){return e.unlock.length===0?"처음부터 승부 가능":e.unlock.map(n=>`${Or(n.tenantId).name} ${n.stage}단계 클리어`).join(" + ")}const dm=`# 세계관 / 프롤로그 / 계절 전환 / 히든 엔딩
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
은서 [놀람] 여기 맞죠? 하숙집.
나 [기본] 아, 네. 맞아요.
은서 [웃음] 다행이다. 버스 놓쳐서 걸어왔어요.
은서 [기본] 나 은서. 201호로 신청한 사람.
나 방은 치워놨어요.
은서 [삐짐] 존댓말 하지 마. 나 너보다 한 살 많은데 그러면 더 어색해.
@bg maru night
* 짐을 올려놓고 내려오니, 은서가 마루에 앉아 방석을 만지고 있었다.
은서 [놀람] 집 진짜 좋다. 여기 하숙 맞아?
나 [기본] 할머니가 그렇게 해놓고 가셔서.
은서 [기본] 근데 이 방석은 왜 이렇게 많아?
나 [기본] 할머니가 펴두시던 거예요. ...펴두던 거야.
은서 [놀람] 아.
* 은서는 잠깐 말이 없다가, 방석 하나를 내 쪽으로 밀었다.
은서 [웃음] 그럼 오늘부터 내가 한 개 쓸게.
* 그리고 옆에 놓인 화투갑을 집어 들었다.
은서 [기본] 이건 쳐도 돼?
나 [놀람] 칠 줄 알아?
은서 [웃음] 어제 외웠어.
나 [기본] ...나는 오늘 외웠는데.
은서 [웃음] 비슷하네. 앉아.
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
하영 [기본] 삼층 애들 슬슬 내려올 거야. 마루 소리가 위까지 들리거든.
나 내려오면 좋죠.
하영 [웃음] 좋다고만 할 일은 아니야.
나 왜요.
하영 [기본] 걔들은 봐주는 법을 몰라.
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
* 「별채 · 윤 · 퇴실일 —」
* 퇴실일 칸만 삼십 년째 비어 있었다.
@bgm none
* 별채의 창에는 불빛이 오래 켜져 있었다.
@end

=== hidden_ending | 마루의 단체 사진
@bg maru night
@bgm warm
* 겨울이 끝나갈 무렵, 마루에 열다섯 개의 방석이 둥글게 깔렸다.
* 닫혀 있던 이층 뒤쪽과 삼층 끝 방이 다 열린 건 그해가 처음이었다.
은서 [웃음] 다 모인 거 맞지? 한 명도 안 빠졌지?
하영 [기본] 국 식어. 빨리 앉아.
지우 [기본] 조명 이쪽이 나아. 옮겨.
세아 [웃음] 저 방석 더 가져올게요! 다섯 개 모자라요.
수아 [웃음] 야, 사진은 찍고 붙자. 붙고 나면 표정 관리 안 돼.
민지 [기본] 계산해봤는데, 열다섯 명이 다 붙으면 백다섯 판이야.
가은 [웃음] 그럼 제가 배경음악 할게요. 백다섯 곡은 좀 무린가.
나래 [웃음] 그럼 오늘 밤은 안 끝나겠네. 좋아.
하린 [기본] 방석 간격 좀 맞추자. 원이 찌그러졌어.
다빈 [부끄러움] 저... 가운데는 좀 부담스러운데요.
나윤 [기본] 다들 물 한 잔씩은 떠다 놨어요. 밤 길어질 테니까.
예린 [기본] 그 전에 정산부터. 포인트 장부 가져올게.
세연 [웃음] 자, 다들. 카메라 여기. 1막 시작합니다.
도희 [웃음] 후배, 가운데 앉아. 오늘 주인공은 너야.
나 [부끄러움] 왜 제가요.
윤 [기본] 이 마루에서 백 판을 친 사람이 너니까.
* 윤은 낡은 화투갑을 마루 한가운데 놓았다.
윤 [웃음] 삼십 년 동안 이 집에서 제일 오래 앉아 있었던 게 나였는데.
윤 [기본] 이제 아니네.
@sfx camera
@cg ending_group
* 셔터가 눌렸다.
* 사진 속에서 열 사람이 각자 다른 표정으로 웃고 있었고, 그 가운데 내가 있었다.
도희 [웃음] 이 사진, 마루에 걸자.
나 [기본] 할머니 사진 옆에요?
도희 [기본] 응. 나란히.
@bgm none
* 언젠가 삼십 년 뒤에 누가 이 사진을 볼 것이다.
* 그때도 이 마루에 방석이 깔려 있으면 좋겠다고 생각했다.
* 하숙집의 밤은 아직 한참 남아 있었다.
@point 1000
@end
`,fm=`# 다빈 (다락) - 가을 / 12번 하숙생

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
`,hm=`# 도희 (선배) - 가을 / 9번 하숙생\r
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
`,pm=`# 은서 (옆방) - 봄 / 1번 하숙생\r
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
`,gm=`# 가은 (합주실) - 봄 / 7번 하숙생

=== gaeun_01 | 벽 너머의 노래
@bg hallway night
@bgm summer
@outfit 0
* 밤 열한 시. 205호 쪽에서 아주 작은 노랫소리가 났다.
* 문을 두드리자 소리가 뚝 끊겼다.
가은 [놀람] 어, 시끄러웠어요? 죄송해요. 바로 끌게요.
나 [기본] 아니요. 안 시끄러웠어요.
가은 [놀람] ...네?
나 [기본] 잘 들려서 왔어요.
* 가은은 문을 조금 더 열었다. 방 안에 기타가 두 대 서 있었다.
가은 [기본] 저 실용음악과 가은이에요. 오늘 들어왔어요.
가은 [삐짐] 전에 살던 데서는 매일 항의가 들어왔어요.
나 [기본] 여기는 벽이 두꺼워요. 할머니가 일부러 그렇게 지으셨대요.
가은 [놀람] 일부러요?
나 [기본] 「사람이 사는 집은 소리가 나야 한다」고요.
가은 [웃음] ...저 그 말 가사로 써도 돼요?
* 그날 밤 가은은 마루로 내려와 한 판을 두고 갔다.
@affection 10
@end

=== gaeun_02 | 가사가 안 써져요
@bg maru night
@bgm summer
* 가은은 패를 낼 때마다 손가락으로 무릎을 두드렸다. 하나, 둘, 셋, 넷.
나 [놀람] 박자 세는 거예요?
가은 [웃음] 아, 습관이에요. 뭘 해도 박자를 세요.
나 [기본] 고스톱에 박자가 있어요?
가은 [기본] 있어요. 선배는 네 박자마다 한 번씩 오래 생각해요.
나 [놀람] ...진짜요?
가은 [웃음] 진짜요. 그래서 그때 노리면 돼요.
* 그러더니 가은은 한숨을 쉬었다.
가은 [삐짐] 근데 요즘 가사가 안 써져요. 멜로디는 나오는데요.
나 [기본] 왜요?
가은 [기본] 쓸 말이 없어서요. 겪은 게 없으면 못 쓰거든요.
@affection 10
@end

=== gaeun_03 | 합주실 열쇠
@bg campus evening
@bgm summer
* 가은이 학교 합주실 열쇠를 잃어버렸다며 마루에 주저앉았다.
가은 [삐짐] 내일 합주인데 저 때문에 다 못 하게 생겼어요.
나 [기본] 다시 만들면 안 돼요?
가은 [기본] 관리실이 아홉 시에 닫아요. 지금 여덟 시 사십 분이에요.
* 버스로는 삼십 분 거리였다.
@choice
- 지금 나가면 아슬아슬해요. 같이 가요 | +15 | A
- 여기서 합주하면 되죠 | +15 | B
@label A
나 [기본] 지금 나가면 아슬아슬해요. 같이 가요.
가은 [놀람] 같이요?
* 버스를 놓치고, 다음 버스를 타고, 관리실 문 닫기 이 분 전에 도착했다.
가은 [웃음] 이 분이요. 이 분 남았어요!
나 [기본] 뛰느라 숨차서 말도 안 나와요.
가은 [웃음] 이것도 가사로 쓸래요.
@goto END
@label B
나 [기본] 여기서 합주하면 되죠. 마루 넓어요.
가은 [놀람] 여기서요? 다섯 명인데요.
나 [기본] 방이 열다섯 개인 집이에요. 다섯 명쯤이야.
가은 [웃음] ...선배 진짜 이상한 사람이에요.
* 다음 날 마루에서 합주가 있었다. 동네 사람이 둘 구경 왔다.
@label END
가은 [웃음] 오늘은 가사가 좀 써질 것 같아요.
@affection 15
@end

=== gaeun_04 | 음이탈
@bg room night
@bgm sad
* 가은이 녹음 파일을 들려주다가 갑자기 껐다.
가은 [삐짐] 아니에요. 안 들려드릴래요.
나 [기본] 왜요.
가은 [기본] 마지막에 음이탈 났어요.
* 가은은 무릎을 끌어안았다.
가은 [기본] 저 고음이 원래 안 돼요. 근데 그걸 인정하기가 싫어서 자꾸 질러요.
나 [기본] 고 같네요.
가은 [놀람] 네?
나 [기본] 이길 것 같으면 한 번 더 가는 거요. 그러다 뒤집히고.
가은 [웃음] ...맞네요. 저 고스톱에서도 그러잖아요.
가은 [기본] 근데 멈추면 그 노래가 심심해져요.
나 [기본] 심심한 게 나을 때도 있어요.
@choice
- 안 지르는 버전도 한 번 들려주세요 | +15 | A
- 터져도 괜찮은 자리에서 질러요 | +15 | B
@label A
나 [기본] 안 지르는 버전도 한 번 들려주세요.
가은 [삐짐] 그건 재미없다니까요.
나 [기본] 들어보고 판단할게요.
* 가은은 한 옥타브 낮춰 불렀다. 음이탈은 없었다.
가은 [놀람] ...이것도 괜찮네요?
@goto END
@label B
나 [기본] 터져도 괜찮은 자리에서 질러요. 여기 같은 데요.
가은 [놀람] 여기서요?
나 [기본] 여기서 터지면 아무도 모르잖아요. 저밖에.
가은 [부끄러움] ...선배가 제일 문제인데요.
@label END
가은 [기본] ...그건 좀 생각해볼게요.
@affection 15
@end

=== gaeun_05 | 버스킹 구경
@bg street evening
@bgm summer
@outfit 1
* 주말 저녁, 가은이 역 앞에서 버스킹을 한다고 했다.
가은 [부끄러움] 오실 거예요? 사람 별로 없을 텐데.
@choice
- 맨 앞줄에서 볼게요 | +20 | A
- 맨 뒷줄에서 볼게요 | +20 | B
@label A
나 [기본] 맨 앞줄에서 볼게요.
가은 [놀람] 앞줄이요? 그럼 더 떨리는데.
나 [기본] 그럼 뒤로 갈까요?
가은 [부끄러움] ...아니요. 앞줄로 와요.
@goto END
@label B
나 [기본] 맨 뒷줄에서 볼게요.
가은 [놀람] 왜 뒤예요?
나 [기본] 목소리가 끝까지 가는지 보려고요.
가은 [부끄러움] ...그거 제일 알고 싶었던 건데.
@label END
* 그날 가은은 세 곡을 불렀다. 마지막 곡에서 고음이 깨끗하게 올라갔다.
가은 [웃음] 들었어요? 안 터졌어요!
나 [기본] 들었어요.
가은 [부끄러움] 오늘은 안 지를 수 있었어요. 급하지가 않아서.
@affection 20
@end

=== gaeun_06 | 녹음 파일
@bg maru night
@bgm summer
* 가은이 새 녹음 파일을 마루에서 틀었다. 처음 듣는 곡이었다.
나 [놀람] 이거 새 곡이에요?
가은 [기본] 네. 가사가 써졌어요.
* 가사는 벽이 두꺼운 집과, 밤에도 꺼지지 않는 마루의 불에 대한 것이었다.
나 [기본] 이거...
@choice
- 제목이 뭐예요? | +15 | A
- 한 번 더 틀어주세요 | +15 | B
@label A
나 [기본] 제목이 뭐예요?
가은 [부끄러움] 아직 없어요. 붙이면 확실해지잖아요.
나 [기본] 확실해지면 안 돼요?
가은 [삐짐] ...안 돼요. 아직은.
@goto END
@label B
나 [기본] 한 번 더 틀어주세요.
가은 [놀람] 두 번 들을 만한 거 아니에요.
나 [기본] 제가 판단할게요.
* 두 번째로 들을 때 가은은 창밖만 보고 있었다.
@label END
가은 [부끄러움] 아무 말도 하지 마세요.
가은 [기본] 제가 겪은 걸 쓴다고 했잖아요. 그냥 그렇게 된 거예요.
* 가은은 재생을 끄고 패를 돌렸다.
가은 [웃음] 한 판 해요. 오늘은 띠 다 가져갈 거예요.
@affection 15
@end

=== gaeun_07 | 목이 안 나오는 날
@bg kitchen night
@bgm sad
* 가은이 부엌에서 꿀물을 타고 있었다. 목소리가 갈라져 있었다.
가은 [기본] 감기요. 공연 일주일 남았는데.
나 [기본] 연습 쉬어야죠.
가은 [삐짐] 쉬면 더 안 나와요.
나 [기본] 그건 아닐걸요.
* 가은은 대답 대신 꿀물을 한 모금 마셨다.
가은 [기본] 선배는 왜 항상 쉬라고 해요.
나 [기본] 쉬는 걸 아무도 안 알려주니까요.
가은 [놀람] ...
가은 [부끄러움] 그럼 오늘은 노래 말고 이거만 할래요. 한 판.
* 그날 가은은 말을 거의 하지 않았다. 대신 오래 앉아 있었다.
@affection 15
@end

=== gaeun_08 | 첫 공연 초대
@bg maru night
@bgm tense
@outfit 1
* 공연 전날, 가은이 티켓 한 장을 내밀었다.
가은 [부끄러움] 한 장밖에 없어요. 가족석이라서.
나 [놀람] 가족석이요?
가은 [기본] 네. 원래 부모님 드리는 건데.
* 가은은 잠깐 말을 멈췄다.
가은 [기본] 저희 집은 제가 노래하는 거 아직 몰라요.
@choice
- 그 자리는 제가 앉을게요 | +20 | A
- 언젠가 부모님이 앉으실 자리예요 | +20 | B
@label A
나 [기본] 그 자리는 제가 앉을게요.
가은 [부끄러움] ...고맙습니다.
나 [기본] 대신 끝나고 부모님께 전화 한 통 해요.
가은 [기본] ...생각해볼게요.
@goto END
@label B
나 [기본] 언젠가 부모님이 앉으실 자리예요.
가은 [놀람] 그럼 내일은요?
나 [기본] 내일은 제가 대신 앉아 있을게요. 자리 데워놓는 셈 치고요.
가은 [부끄러움] ...그런 말 어디서 배웠어요.
@label END
가은 [웃음] 내일 첫 곡은 선배가 아는 곡이에요.
@affection 20
@end

=== gaeun_09 | 객석 맨 뒷줄
@bg festival night
@bgm warm
* 공연장 가족석은 맨 앞이 아니라 맨 뒷줄이었다.
* 무대에서 가은이 객석을 한 번 훑었다. 그리고 정확히 뒷줄을 봤다.
가은 [웃음] ...찾았다.
* 가은은 예정에 없던 말을 마이크에 대고 했다.
가은 [기본] 이 곡은 벽이 두꺼운 집 얘기예요.
가은 [기본] 밤에 노래해도 아무도 조용히 하라고 안 하는 집이요.
* 세 번째 곡에서 고음이 올라갔다. 깨끗하게.
* 공연이 끝나고 가은은 뛰어와서 아무 말도 안 하고 서 있었다.
가은 [부끄러움] ...뭐라고 말해야 할지 모르겠어요.
나 [기본] 안 해도 돼요.
가은 [웃음] 그럼 한 판 해요. 집에 가서.
@affection 15
@end

=== gaeun_10 | 마지막 곡
@bg maru night
@bgm confess
@outfit 2
* 열 번째 판이 끝났다. 가은은 띠를 다 모으고도 고를 부르지 않았다.
나 [놀람] 초단까지 다 모았는데 스톱이에요?
가은 [웃음] 네. 여기가 제일 예쁜 자리예요.
@cg gaeun_ending
* 가은은 기타를 들고 와 마루에 앉았다.
가은 [기본] 마지막 곡 아직 안 들려드렸죠.
가은 [부끄러움] 가사가 너무 뻔해서 못 들려드렸어요.
* 가은은 한 소절만 불렀다. 「불이 켜져 있어서 들어갔다」
가은 [기본] 저 노래 부를 때 제일 무서운 게 뭔지 아세요?
나 [기본] ...
가은 [기본] 끝나고 아무도 없는 거요.
가은 [부끄러움] 근데 요즘은 안 무서워요. 뒷줄에 누가 있는 거 아니까.
가은 [기본] 저 좋아해요. 선배.
가은 [웃음] 이겨서 하는 말도 아니고, 노래가 잘돼서 하는 말도 아니에요.
가은 [기본] 제일 안 좋았던 날에 옆에 있어준 사람이라서 그래요.
@choice
- 앞으로도 뒷줄에 있을게요 | +20 | A
- 이젠 앞줄에서 들을래요 | +20 | B
@label A
나 [기본] 앞으로도 뒷줄에 있을게요.
가은 [놀람] 앞줄로 와도 되는데.
나 [기본] 끝까지 소리가 가는지 봐야죠.
가은 [부끄러움] ...그 말 처음 들었을 때부터 좋았어요.
@goto END
@label B
나 [기본] 이젠 앞줄에서 들을래요.
가은 [놀람] 떨린다니까요.
나 [기본] 떨리면 저 보고 부르면 되죠.
가은 [부끄러움] ...그러면 더 떨려요.
@label END
@bgm warm
가은 [웃음] 그럼 다음 곡 제목은 정했어요. 「방 열다섯 개」요.
* 그날 마루에서는 밤늦게까지 소리가 났다. 아무도 조용히 하라고 하지 않았다.
@affection 20
@point 300
@end
`,mm=`# 하린 (설계실) - 여름 / 10번 하숙생

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
`,ym=`# 하영 (요리왕) - 봄 / 2번 하숙생\r
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
`,$m=`# 지우 (밤샘) - 봄 / 3번 하숙생\r
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
`,wm=`# 민지 (취준) - 여름 / 5번 하숙생\r
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
`,vm=`# 나래 (옥상) - 여름 / 6번 하숙생\r
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
`,xm=`# 나윤 (밤번) - 가을 / 14번 하숙생

=== nayun_01 | 새벽 세 시의 불빛
@bg maru night
@bgm winter
@outfit 0
* 새벽 세 시. 현관문이 아주 조용히 열렸다.
* 실습복 위에 코트만 걸친 사람이 신발을 벗고 있었다.
나윤 [기본] 안 자고 뭐 해요.
나 [놀람] 그건 제가 할 말인데요.
나윤 [기본] 저는 일하고 온 거고요.
* 나윤은 308호라고 했다. 간호학과 사학년, 야간 실습 중이라고.
나윤 [기본] 여기로 온 이유가 있어요.
나 [기본] 뭔데요.
나윤 [기본] 새벽 세 시에 불 켜진 집이 여기밖에 없었어요.
* 나윤은 코트를 벗어 걸고 마루에 앉았다.
나윤 [기본] 매일 지나다니면서 봤어요. 저 집은 누가 안 자나 했죠.
나 [웃음] 접니다.
나윤 [웃음] 알아요. 이제.
나윤 [기본] 한 판 해요. 저 이 시간엔 잠이 안 와요.
@affection 10
@end

=== nayun_02 | 물 한 잔
@bg kitchen night
@bgm winter
* 다음 날 마루에 앉으니 물 한 잔이 놓여 있었다.
나윤 [기본] 마셔요. 밤에 물 안 마시면 다음 날 머리 아파요.
나 [놀람] 이런 것도 봐요?
나윤 [기본] 직업이에요.
* 나윤은 패를 내면서도 내 쪽을 한 번씩 봤다. 패가 아니라 얼굴을.
나 [기본] 왜 자꾸 보세요.
나윤 [기본] 오늘 잘 안 풀렸죠.
나 [놀람] ...어떻게 알아요.
나윤 [기본] 눈썹이요. 안 풀린 날은 눈썹 사이가 좁아져요.
* 그 말이 맞았다. 그날은 온종일 일이 꼬였다.
나윤 [기본] 사람 얼굴 보는 게 일이라서요. 미안해요.
나 [기본] 미안할 일은 아니죠.
나윤 [웃음] 그럼 다행이고요.
@affection 10
@end

=== nayun_03 | 야간 실습
@bg maru night
@bgm winter
* 나윤이 평소보다 두 시간 늦게 들어왔다.
나윤 [기본] 오늘은 좀 길었어요.
나 [기본] 무슨 일 있었어요?
나윤 [기본] ...있었어요.
* 나윤은 그 이상 말하지 않았다. 대신 패를 돌렸다.
@choice
- 안 물어볼게요 | +15 | A
- 말하고 싶으면 들을게요 | +15 | B
@label A
나 [기본] 안 물어볼게요.
나윤 [놀람] ...
나윤 [기본] 보통은 다 물어보던데.
나 [기본] 말 안 하는 것도 이유가 있으니까요.
나윤 [기본] ...고마워요. 그게 제일 편해요.
@goto END
@label B
나 [기본] 말하고 싶으면 들을게요. 안 하고 싶으면 안 해도 되고요.
나윤 [기본] 그 두 번째가 중요하네요.
나 [기본] 네. 그게 중요하죠.
나윤 [웃음] ...선택지를 주는 사람은 오랜만이에요.
@label END
* 그날 나윤은 평소보다 오래 앉아 있었다. 말은 거의 하지 않았다.
@affection 15
@end

=== nayun_04 | 손이 떨리는 날
@bg room night
@bgm sad
* 나윤이 마루에서 주사기 연습 키트를 꺼내놓고 있었다.
나윤 [기본] 오늘 처음으로 사람한테 놨어요.
나 [기본] 잘됐어요?
나윤 [기본] 잘됐어요. 근데 손이 떨렸어요.
* 나윤은 자기 손을 펴보였다. 지금도 아주 조금 떨리고 있었다.
나윤 [기본] 환자분이 그걸 봤어요. 그리고 웃으시더라고요.
나윤 [기본] 「처음이시구나」 하고요.
나 [기본] 뭐라고 하셨어요?
나윤 [기본] 아무 말도 못 했어요. 죄송하다고만 했어요.
* 나윤은 키트를 접었다.
나윤 [기본] 사람 아프게 하는 일을 배우는 게 이렇게 어려운 줄 몰랐어요.
나 [기본] 안 떨리게 되면 그건 그것대로 무섭겠네요.
@choice
- 떨리는 게 잘못은 아니에요 | +15 | A
- 그 환자분은 왜 웃으셨을까요 | +15 | B
@label A
나 [기본] 떨리는 게 잘못은 아니에요.
나윤 [기본] 환자 입장에서는 잘못이죠.
나 [기본] 환자분은 안 그러셨잖아요. 웃으셨다면서요.
나윤 [놀람] ...
@goto END
@label B
나 [기본] 그 환자분은 왜 웃으셨을까요.
나윤 [기본] 글쎄요. 서툰 게 우스워서겠죠.
나 [기본] 아니면 무서워하는 사람을 알아본 걸 수도 있고요.
나윤 [놀람] ...그렇게는 생각 안 해봤어요.
@label END
나윤 [놀람] ...
나윤 [기본] 그 말 오래 생각할 것 같아요.
@affection 15
@end

=== nayun_05 | 환자 이야기
@bg maru night
@bgm winter
@outfit 1
* 나윤이 처음으로 먼저 말을 꺼냈다.
나윤 [기본] 요 며칠 계속 생각나는 분이 있어요.
나윤 [기본] 밤마다 못 주무시는 분인데, 제가 회진 돌면 꼭 깨어 계셨어요.
나윤 [기본] 그분이 저한테 물으셨어요. 「밤에 안 자면 뭐 해요?」
@choice
- 뭐라고 답하셨어요? | +20 | A
- 그분한테는 밤이 길겠네요 | +20 | B
@label A
나 [기본] 뭐라고 답하셨어요?
나윤 [부끄러움] 「집에 가서 화투 쳐요」 했어요.
나 [놀람] 진짜요?
나윤 [웃음] 그랬더니 웃으시더라고요. 사흘 만에 처음 웃으셨대요.
나윤 [기본] 그 얘기 하려고 오늘 기다렸어요.
@goto END
@label B
나 [기본] 그분한테는 밤이 길겠네요.
나윤 [놀람] ...그렇게 말한 사람은 처음이에요.
나윤 [기본] 다들 「잠이 안 오시냐」고만 물어요.
나윤 [부끄러움] 밤이 길다는 걸 아는 사람이 있으니까 좀 낫네요.
@label END
나윤 [웃음] 오늘은 이겨야겠어요. 기분 좋게 자려면.
@affection 20
@end

=== nayun_06 | 국가고시 D-100
@bg room night
@bgm tense
* 달력에 빨간 동그라미가 쳐져 있었다.
나윤 [기본] 백 일 남았어요.
나 [기본] 공부는요?
나윤 [기본] 하고 있죠. 근데 실습이랑 같이 하니까 하루가 모자라요.
* 나윤의 책상에는 문제집이 세 권 펼쳐져 있었다.
나윤 [기본] 이 시험 떨어지면 일 년이에요.
나 [기본] 그럼 마루 안 내려와도 돼요. 공부하세요.
나윤 [놀람] ...쫓아내는 거예요?
나 [기본] 아니요. 부담 갖지 말라고요.
나윤 [기본] 부담 아니에요.
나윤 [부끄러움] 여기 앉아 있는 삼십 분이 제일 잘 쉬는 시간이에요.
나윤 [기본] 그거 빼면 하루가 더 길어져요.
@choice
- 그럼 삼십 분은 비워둘게요 | +15 | A
- 공부는 여기서 해도 돼요 | +15 | B
@label A
나 [기본] 그럼 삼십 분은 비워둘게요. 매일.
나윤 [놀람] 매일이요?
나 [기본] 어차피 안 자잖아요, 저도.
나윤 [부끄러움] ...그 삼십 분 때문에 백 일을 버틸 것 같네요.
@goto END
@label B
나 [기본] 공부는 여기서 해도 돼요. 마루 넓어요.
나윤 [기본] 소리 나면 방해될 텐데요.
나 [기본] 소리 나는 게 낫죠. 이 집은 원래 그래요.
나윤 [웃음] ...그 말 할머니한테 배웠죠.
@label END
@affection 15
@end

=== nayun_07 | 잠 못 드는 밤
@bg hallway night
@bgm sad
* 새벽 네 시, 복도에서 나윤과 마주쳤다. 둘 다 잠이 안 온 밤이었다.
나윤 [기본] 오늘은 마루에 안 계시길래.
나 [기본] 올라가려다 못 자고 있었어요.
나윤 [기본] 무슨 일 있어요?
* 이번에는 내가 말하지 않았다. 나윤은 더 묻지 않았다.
나윤 [기본] 앉아요. 여기 계단도 앉을 만해요.
* 두 사람은 계단에 나란히 앉았다.
나윤 [기본] 저 환자분들한테 항상 하는 말이 있어요.
나윤 [기본] 「안 주무셔도 돼요. 누워만 계세요.」
나윤 [기본] 자라고 하면 더 못 자거든요.
나 [기본] 지금 저한테 하는 말이죠.
나윤 [웃음] 네.
* 그날 아침 해가 뜰 때까지 두 사람은 계단에 앉아 있었다.
@affection 15
@end

=== nayun_08 | 면접 전날
@bg maru night
@bgm tense
@outfit 1
* 시험이 끝나고, 나윤은 병원 면접을 앞두고 있었다.
나윤 [기본] 내일 면접이에요. 세 군데 중에 한 군데.
나 [기본] 어디로 가고 싶어요?
나윤 [기본] ...그게 문제예요. 제일 좋은 데가 여기서 두 시간이에요.
* 나윤은 처음으로 패를 오래 들고 있었다.
나윤 [기본] 두 시간이면 여기서 못 살아요.
@choice
- 좋은 데로 가세요 | +20 | A
- 두 시간이면 못 오는 거리는 아니에요 | +20 | B
@label A
나 [기본] 좋은 데로 가세요.
나윤 [놀람] ...그렇게 쉽게 말해요?
나 [기본] 쉽게 말한 거 아니에요. 세 번 생각하고 말한 거예요.
나윤 [기본] ...
나윤 [부끄러움] 그럼 세 번째 생각은 뭐였어요?
나 [기본] 그래도 오면 좋겠다는 거요.
@goto END
@label B
나 [기본] 두 시간이면 못 오는 거리는 아니에요.
나윤 [기본] 매일은 못 와요.
나 [기본] 매일 안 와도 돼요. 불은 켜놓을 테니까.
나윤 [부끄러움] ...그런 말 하면 결정을 못 하잖아요.
@label END
나윤 [웃음] 오늘은 일찍 잘게요. 처음으로요.
@affection 20
@end

=== nayun_09 | 첫 출근
@bg station morning
@bgm warm
* 나윤은 가까운 병원을 골랐다. 버스로 이십 분 거리였다.
나 [놀람] 두 시간짜리 안 가시고요?
나윤 [기본] 갔으면 좋았을 수도 있죠.
나윤 [기본] 근데 제가 왜 그 집을 골랐는지 생각해봤어요.
나 [기본] 왜요?
나윤 [기본] 새벽 세 시에 불 켜진 집이라서요.
나윤 [부끄러움] 그 이유가 아직 안 없어졌더라고요.
* 나윤은 첫 출근 가방을 고쳐 멨다.
나윤 [기본] 오늘부터 삼교대예요. 밤번이 제일 많아요.
나윤 [웃음] 그러니까 불은 계속 켜두세요.
@affection 15
@end

=== nayun_10 | 돌아올 데
@bg maru night
@bgm confess
@outfit 2
* 열 번째 판이 끝났다. 나윤은 이길 수 있는 자리에서 스톱을 불렀다.
나 [놀람] 고 하면 더 벌었을 텐데요.
나윤 [기본] 알아요. 세 수 전부터 보였어요.
@cg nayun_ending
* 나윤은 가방에서 수첩을 꺼냈다. 실습 때 쓰던 인계장이었다.
나윤 [기본] 이거 환자 상태 적는 거예요. 매일 밤 적어요.
* 맨 뒷장에는 환자 이름이 아니라 다른 것이 적혀 있었다.
나윤 [기본] 「03:10 귀가. 마루 점등 확인.」
나윤 [부끄러움] 반년 치예요. 하루도 안 빠졌어요.
나 [놀람] 이걸 매일...
나윤 [기본] 저 사람 상태 보는 게 일이잖아요.
나윤 [기본] 근데 제 상태를 봐주는 사람은 없었어요. 여기 오기 전까지는요.
나윤 [기본] 눈썹 사이가 좁아졌다고 말해주는 사람이 필요했나 봐요.
나윤 [부끄러움] 저 좋아해요.
나윤 [기본] 이겨서 하는 말이면 오늘 스톱 안 했어요.
나윤 [기본] 새벽 세 시에 켜져 있던 불이라서 그래요. 그게 전부예요.
@choice
- 밤번인 날에도 켜둘게요 | +20 | A
- 이제 제 상태도 봐주세요 | +20 | B
@label A
나 [기본] 밤번인 날에도 켜둘게요.
나윤 [놀람] 삼교대라 불규칙해요.
나 [기본] 그럼 그냥 계속 켜두면 되죠.
나윤 [부끄러움] ...전기세 많이 나와요.
나 [웃음] 할머니도 그렇게 하셨대요.
@goto END
@label B
나 [기본] 이제 제 상태도 봐주세요.
나윤 [놀람] 이미 보고 있었는데요.
나 [기본] 그럼 말도 해주세요. 속으로만 말고요.
나윤 [부끄러움] ...그건 좀 어려운데.
나 [기본] 반년치 적어놨잖아요. 읽어주면 되죠.
@label END
@bgm warm
나윤 [웃음] 그럼 오늘 인계 시작할게요. 「환자 상태 양호」.
* 그날 밤 마루의 불은 끝내 꺼지지 않았다. 두 사람 다 거기 있었기 때문이다.
@affection 20
@point 300
@end
`,km=`# 세아 (새벽) - 봄 / 4번 하숙생

=== sea_01 | 새벽 다섯 시의 발소리
@bg hallway night
@bgm spring
@outfit 0
* 새벽에 복도에서 발소리가 났다. 규칙적이고, 아주 가벼웠다.
* 문을 열자 운동화 끈을 묶는 사람이 있었다.
세아 [놀람] 어! 깨셨어요? 죄송해요.
나 [기본] 지금 다섯 시인데요.
세아 [웃음] 네. 나가려고요.
나 [놀람] 이 시간에요?
세아 [기본] 여섯 시에 나가면 해가 뜨잖아요. 그럼 사람이 많아요.
* 세아는 일어서면서 이름을 말했다. 204호, 세아.
세아 [기본] 저 여기 오늘 들어왔어요. 인사 못 드렸죠.
나 [기본] 기숙사 안 쓰고요?
세아 [삐짐] 기숙사는 다섯 시에 문을 안 열어줘요. 그게 말이 돼요?
* 그게 이사 온 이유의 전부라고 했다.
세아 [웃음] 아, 주인집 분이시구나. 그럼 한 판 해요. 삼 분이면 끝나죠?
나 [놀람] 삼 분이요?
세아 [웃음] 저 뭐든 빨리 해요.
@affection 10
@end

=== sea_02 | 기숙사 문은 여섯 시에 열린다
@bg maru night
@bgm spring
* 세아는 패를 세 장씩 집어 던지듯 냈다.
나 [놀람] 너무 빨리 내는 거 아니에요?
세아 [기본] 고민한다고 좋은 패가 나와요?
나 [기본] 보통은 그렇죠.
세아 [삐짐] ...그런가.
* 그러더니 다음 판에는 정말로 삼 초쯤 생각했다. 그리고 똑같이 던졌다.
나 [웃음] 생각한 거 맞아요?
세아 [웃음] 했어요! 했는데 답이 똑같았어요.
* 결국 그날은 세아가 졌다.
세아 [기본] 근데 이거 재밌네요.
세아 [웃음] 달리기랑 비슷해요. 시작하면 끝까지 가야 되잖아요.
나 [기본] 고스톱은 중간에 멈출 수 있어요. 스톱이라고.
세아 [놀람] 아. 그런 게 있었어요?
@affection 10
@end

=== sea_03 | 페이스 조절
@bg yard morning
@bgm spring
* 아침에 마당에서 세아가 무릎을 짚고 숨을 골랐다.
세아 [기본] 오늘 이십 분 만에 십 킬로 뛰려다가 팔 킬로에서 멈췄어요.
나 [기본] 무리한 거 아니에요?
세아 [삐짐] 무리 아니에요. 그냥... 페이스를 못 잡은 거예요.
* 세아는 늘 처음부터 전력으로 뛰고, 끝에 가서 걷는다고 했다.
세아 [기본] 코치 선생님이 그랬어요. 너는 스톱을 모른다고.
나 [놀람] 고스톱에서도 그러시던데요.
세아 [놀람] ...어?
@choice
- 한 판 쉬어가는 것도 실력이에요 | +15 | A
- 끝까지 가는 게 세아 씨답죠 | +15 | B
@label A
나 [기본] 한 판 쉬어가는 것도 실력이에요.
세아 [삐짐] 그거 코치 선생님이랑 똑같은 말이에요.
나 [웃음] 두 사람이 같은 말 하면 맞는 말일 확률이 높죠.
세아 [기본] ...생각해볼게요. 생각만.
@goto END
@label B
나 [기본] 끝까지 가는 게 세아 씨답죠.
세아 [웃음] 그쵸? 저도 그렇게 생각해요.
나 [기본] 대신 다음 날 못 뛰잖아요.
세아 [삐짐] 그건 또 그러네.
@label END
* 그날 저녁 세아는 처음으로 스톱을 불렀다. 칠 점에서.
세아 [기본] 이거 은근히 어렵네요. 멈추는 거.
@affection 15
@end

=== sea_04 | 무릎
@bg room night
@bgm sad
* 세아가 사흘째 새벽에 나가지 않았다.
나 [기본] 오늘도 안 뛰어요?
세아 [기본] 네.
* 짧은 대답이었다. 세아한테서 짧은 대답이 나오는 건 처음이었다.
나 [놀람] 무릎이에요?
세아 [기본] ...어떻게 알았어요.
* 세아는 무릎에 얼음팩을 올려두고 있었다.
세아 [기본] 작년에도 한 번 이랬어요. 두 달 쉬었고요.
세아 [삐짐] 그때 기록이 다 날아갔어요.
나 [기본] 지금은 어때요.
세아 [기본] 지금은... 쉬면 낫는대요. 근데 쉬는 게 제일 어려워요.
@choice
- 쉬는 것도 훈련이에요 | +15 | A
- 그럼 앉아서 할 수 있는 걸 해요 | +15 | B
@label A
나 [기본] 쉬는 것도 훈련이에요.
세아 [삐짐] 그건 안 쉬는 사람들이 하는 말이에요.
나 [기본] 저는 매일 쉬는데요.
세아 [웃음] ...아, 그건 설득력 있네요.
@goto END
@label B
나 [기본] 그럼 앉아서 할 수 있는 걸 해요.
세아 [놀람] 앉아서요?
나 [기본] 마루에 방석 있잖아요. 무릎 안 쓰는 거로.
세아 [웃음] ...그거 좋은데요.
@label END
* 그날 밤 세아는 마루로 내려왔다. 무릎에 얼음팩을 올린 채로.
세아 [웃음] 이건 앉아서 하는 거니까 괜찮죠?
@affection 15
@end

=== sea_05 | 같이 뛸래요?
@bg yard morning
@bgm spring
@outfit 1
* 무릎이 나은 날 아침, 세아가 현관에서 기다리고 있었다.
세아 [웃음] 오늘부터 다시 뛰어요. 같이 갈래요?
나 [놀람] 저는 오 분도 못 뛰어요.
세아 [웃음] 알아요. 그래서 물어본 거예요.
@choice
- 오 분만 따라가볼게요 | +20 | A
- 마당에서 기다릴게요 | +20 | B
@label A
나 [기본] 오 분만 따라가볼게요.
세아 [놀람] 진짜요?
* 정확히 사 분 삼십 초 만에 나는 멈췄다.
세아 [웃음] 기록 좋은데요? 삼십 초 남기고 포기한 건 처음 봐요.
나 [삐짐] 칭찬 맞아요?
세아 [웃음] 칭찬이에요. 진짜로.
@goto END
@label B
나 [기본] 마당에서 기다릴게요.
세아 [기본] 그럼 재미없잖아요.
나 [기본] 돌아왔을 때 사람이 있는 거랑 없는 거는 다르죠.
세아 [놀람] ...
세아 [부끄러움] 그건 좀, 반칙인데요.
@label END
* 그날부터 세아는 나갈 때 마루 쪽을 한 번 보고 나갔다.
세아 [웃음] 다녀올게요.
@affection 20
@end

=== sea_06 | 기록이 안 줄어요
@bg street evening
@bgm spring
* 저녁에 편의점 앞에서 세아를 만났다. 음료수를 두 개 들고 있었다.
세아 [기본] 한 개는 선배 거예요.
나 [기본] 오늘 기록은요.
세아 [삐짐] 똑같아요. 두 달째 똑같아요.
* 세아는 초 단위로 적어둔 수첩을 보여줬다. 정말로 거의 같은 숫자였다.
세아 [기본] 열심히 하는데 안 줄어요. 이런 건 처음이에요.
나 [기본] 고스톱도 그래요. 어느 순간부터 안 늘어요.
세아 [놀람] 그럼 어떡해요?
나 [기본] 다른 걸 배우죠. 저는 그때 스톱을 배웠어요.
세아 [기본] ...또 스톱이네.
@choice
- 중간에 한 번 늦춰보세요 | +15 | A
- 기록 말고 다른 걸 적어보세요 | +15 | B
@label A
나 [기본] 중간에 한 번 늦춰보세요. 삼 킬로쯤에서요.
세아 [놀람] 늦추면 기록이 더 느려지죠.
나 [기본] 마지막에 더 빨라질 수도 있고요.
세아 [기본] ...해본 적은 없네요.
@goto END
@label B
나 [기본] 기록 말고 다른 걸 적어보세요.
세아 [놀람] 뭘요?
나 [기본] 그날 뭘 봤는지요. 숫자만 적으면 숫자만 보여요.
세아 [기본] ...수첩이 아깝긴 했어요.
@label END
세아 [웃음] 알았어요. 이번엔 진짜 생각해볼게요.
@affection 15
@end

=== sea_07 | 비 오는 날의 러닝머신
@bg annex night
@bgm spring
* 비가 사흘 내렸다. 세아는 별채 창고에서 먼지 쌓인 러닝머신을 찾아냈다.
세아 [웃음] 이거 돌아가요! 할머니 거였나 봐요.
나 [기본] 십 년은 넘었을 거예요.
* 세아는 삼십 분을 뛰고 내려왔다. 기계는 계속 삐걱거렸다.
세아 [기본] 이상하네요. 밖에서 뛰는 거랑 다르게 하나도 안 재밌어요.
나 [기본] 왜요?
세아 [기본] 풍경이 안 바뀌잖아요. 아무리 뛰어도 제자리예요.
* 세아는 수건으로 얼굴을 닦으며 웃었다.
세아 [웃음] 근데 여기서 뛰면 마루가 보여요. 그건 좋아요.
나 [놀람] 마루가요?
세아 [부끄러움] ...아무것도 아니에요. 한 판 해요.
@affection 15
@end

=== sea_08 | 대회 전날
@bg maru night
@bgm tense
@outfit 1
* 대회 전날 밤, 세아는 잠이 오지 않는다며 마루로 내려왔다.
세아 [기본] 내일 오천 미터 뛰어요.
나 [기본] 긴장돼요?
세아 [기본] 아니요. 긴장은 안 돼요.
세아 [삐짐] 근데 무서워요. 그게 다른 거래요.
* 세아는 처음으로 패를 오래 들여다봤다.
세아 [기본] 만약에 또 무릎이 아프면 어떡하죠.
@choice
- 그럼 그때 멈추면 돼요 | +20 | A
- 아프면 제가 데리러 갈게요 | +20 | B
@label A
나 [기본] 그럼 그때 멈추면 돼요.
세아 [놀람] 대회 중간에요?
나 [기본] 네. 스톱은 지는 게 아니에요.
세아 [기본] ...이제 그 말 좀 알 것 같아요.
@goto END
@label B
나 [기본] 아프면 제가 데리러 갈게요.
세아 [놀람] 거기 두 시간 걸려요.
나 [기본] 두 시간 걸려서 가면 되죠.
세아 [부끄러움] ...진짜 그러면 반칙이라니까요.
@label END
세아 [웃음] 오늘은 일찍 잘래요. 고마워요.
@affection 20
@end

=== sea_09 | 완주
@bg station evening
@bgm warm
* 대회가 끝나고 세아는 기차역에서 전화를 걸어왔다.
세아 [웃음] 완주했어요!
나 [기본] 기록은요?
세아 [웃음] 자기 최고 기록이요. 이십 초 줄었어요.
나 [놀람] 두 달 동안 안 줄던 게요?
세아 [기본] 중간에 한 번 늦췄거든요. 삼 킬로 지점에서.
세아 [웃음] 그랬더니 마지막에 더 빨라졌어요. 진짜 신기해요.
* 세아는 잠깐 말을 멈췄다.
세아 [부끄러움] 그 생각 누가 알려줬는지 아세요?
나 [기본] ...
세아 [웃음] 오늘 늦게 들어가요. 기다려줄 거죠?
@affection 15
@end

=== sea_10 | 결승선
@bg yard morning
@bgm confess
@outfit 2
* 열 번째 판이 끝났다. 세아는 이번에도 고를 부르지 않았다.
나 [놀람] 세아 씨가 스톱을 하네요.
세아 [기본] 저 이제 스톱 잘해요.
@cg sea_ending
* 세아는 수첩을 꺼내 마지막 장을 펼쳤다. 기록이 아니라 문장이 적혀 있었다.
세아 [기본] 「오늘도 마루에 불이 켜져 있었다.」
세아 [부끄러움] 두 달 전부터 기록 말고 이걸 적고 있었어요.
나 [놀람] 매일이요?
세아 [기본] 매일이요. 불 안 켜져 있던 날은 하루도 없었어요.
세아 [기본] 저 달리는 거 좋아해요. 근데 달리는 건 혼자 하는 거잖아요.
세아 [부끄러움] 돌아올 데가 있으니까 더 멀리 갈 수 있더라고요.
세아 [기본] 저 좋아해요. 선배.
세아 [웃음] 이겨서 말하는 것도 아니고, 져서 말하는 것도 아니에요.
세아 [기본] 매일 새벽에 불 켜놓고 기다려준 사람이라서 그래요.
@choice
- 결승선에서 기다릴게요 | +20 | A
- 다음엔 진짜 끝까지 따라갈게요 | +20 | B
@label A
나 [기본] 그럼 결승선에서 기다릴게요.
세아 [놀람] 두 시간 걸린다니까요.
나 [기본] 두 시간 걸려서 가면 된다고 했잖아요.
세아 [부끄러움] ...기억하고 있었네요.
@goto END
@label B
나 [기본] 다음엔 진짜 끝까지 따라갈게요.
세아 [웃음] 오 분도 못 뛰면서요?
나 [기본] 페이스 조절하면 되죠. 배웠어요.
세아 [부끄러움] ...그거 제가 알려준 건데.
@label END
@bgm warm
세아 [웃음] 그럼 내일 다섯 시예요. 늦지 마세요.
* 다음 날 새벽, 마루의 불은 꺼져 있었다. 두 사람 다 밖에 있었기 때문이다.
@affection 20
@point 300
@end
`,bm=`# 세연 (연극) - 가을 / 8번 하숙생\r
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
`,Sm=`# 수아 (체대) - 여름 / 4번 하숙생\r
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
`,_m=`# 예린 (회계) - 가을 / 7번 하숙생\r
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
`,Cm=`# 윤 (장기하숙생) - 겨울 / 10번 하숙생 / 최종 히로인\r
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
`,_u=["normal","smile","sulk","surprise","shy","serious","win","lose"],jm={기본:"normal",웃음:"smile",삐짐:"sulk",놀람:"surprise",부끄러움:"shy",진지:"serious",승리:"win",패배:"lose"},Nm=["maru","kitchen","hallway","rooftop","yard","cvs","campus","street","room","annex","festival","station","beach"],Em=["morning","evening","night"],Mm=["title","spring","summer","autumn","winter","warm","tense","sad","confess","none"],Lm=/^([^\s\[\]]+)\s*(?:\[([^\]]+)\])?\s+(.+)$/;function Dm(e,n="<script>"){const t=[],r=[];let i=null,l=n;const o=e.split(/\r?\n/),s=(d,f)=>{r.push({sceneId:l,line:d,message:f})},a=d=>{i&&(d.kind==="label"&&(i.labels[d.name]=i.steps.length),i.steps.push(d))};for(let d=0;d<o.length;d++){const f=d+1,h=o[d].trim();if(!h||h.startsWith("#"))continue;if(h.startsWith("===")){const m=h.replace(/^=+/,"").trim(),[g,y]=m.split("|").map(w=>w.trim());if(!g){s(f,"씬 id 가 없습니다");continue}l=g,i={id:g,title:y??g,tenantId:g.includes("_")?g.split("_")[0]:null,steps:[],labels:{}},t.push(i);continue}if(!i){s(f,"씬 헤더(=== id | 제목) 보다 먼저 나온 줄입니다");continue}if(h.startsWith("*")){const m=h.slice(1).trim();m?a({kind:"narrate",text:m}):s(f,"빈 나레이션");continue}if(h.startsWith("-")){const m=i.steps[i.steps.length-1];if(!m||m.kind!=="choice"){s(f,"@choice 없이 선택지가 나왔습니다");continue}const g=Am(h.slice(1).trim());g?m.options.push(g):s(f,`선택지 형식 오류: ${h}`);continue}if(h.startsWith("@")){const[m,...g]=h.slice(1).split(/\s+/),y=g.join(" ").trim();switch(m){case"bg":{const[w,N]=g;if(!Nm.includes(w)){s(f,`알 수 없는 배경: ${w}`);break}const L=N??"night";if(!Em.includes(L)){s(f,`알 수 없는 시간대: ${N}`);break}a({kind:"bg",bg:w,time:L});break}case"bgm":{if(!Mm.includes(y)){s(f,`알 수 없는 BGM: ${y}`);break}a({kind:"bgm",bgm:y});break}case"sfx":y?a({kind:"sfx",sfx:y}):s(f,"sfx 이름이 없습니다");break;case"cg":y?a({kind:"cg",cg:y}):s(f,"cg 이름이 없습니다");break;case"outfit":{const w=Number(y);[0,1,2].includes(w)?a({kind:"outfit",index:w}):s(f,`의상 번호는 0~2: ${y}`);break}case"affection":{const w=Number(y);Number.isNaN(w)?s(f,`호감도 값 오류: ${y}`):a({kind:"affection",delta:w});break}case"point":{const w=Number(y);Number.isNaN(w)?s(f,`포인트 값 오류: ${y}`):a({kind:"point",delta:w});break}case"choice":a({kind:"choice",options:[]});break;case"label":y?a({kind:"label",name:y}):s(f,"라벨 이름이 없습니다");break;case"goto":y?a({kind:"goto",name:y}):s(f,"goto 대상이 없습니다");break;case"end":a({kind:"end"});break;default:s(f,`알 수 없는 지시어: @${m}`)}continue}const p=Lm.exec(h);if(!p){s(f,`해석할 수 없는 줄: ${h}`);continue}const[,$,v,k]=p;let F="normal";if(v){const m=jm[v.trim()];m?F=m:s(f,`알 수 없는 표정: ${v}`)}a({kind:"say",speaker:$,expression:F,text:k})}for(const d of t){for(const f of d.steps)if(f.kind==="goto"&&!(f.name in d.labels)&&r.push({sceneId:d.id,line:0,message:`없는 라벨로 goto: ${f.name}`}),f.kind==="choice"){f.options.length<2&&r.push({sceneId:d.id,line:0,message:"선택지가 2개 미만입니다"});for(const h of f.options)h.goto&&!(h.goto in d.labels)&&r.push({sceneId:d.id,line:0,message:`없는 라벨로 선택지 이동: ${h.goto}`})}d.steps.some(f=>f.kind==="end")||r.push({sceneId:d.id,line:0,message:"@end 가 없습니다"})}return{scenes:t,issues:r}}function Am(e){const n=e.split("|").map(l=>l.trim());if(n.length<2)return null;const t=n[0];if(!t)return null;const r=Number(n[1]);if(Number.isNaN(r))return null;const i=n[2]?n[2]:null;return{text:t,affection:r,goto:i}}function Im(e){return Jl({scene:e,pc:0,view:{bg:"maru",time:"night",bgm:"none",cg:null,outfit:0,speaker:null,expression:"normal",text:"",choices:null,affectionDelta:0,pointDelta:0,sfx:null,done:!1}})}function Jl(e){const n={...e.view,sfx:null};if(n.choices)return{...e,view:n};let t=e.pc;const{steps:r,labels:i}=e.scene;let l=0;for(;t<r.length;){if(l++>1e4){n.done=!0;break}const o=r[t];switch(t++,o.kind){case"bg":n.bg=o.bg,n.time=o.time;break;case"bgm":n.bgm=o.bgm;break;case"sfx":n.sfx=o.sfx;break;case"cg":n.cg=o.cg;break;case"outfit":n.outfit=o.index;break;case"affection":n.affectionDelta+=o.delta;break;case"point":n.pointDelta+=o.delta;break;case"label":break;case"goto":{const s=i[o.name];if(s===void 0)return n.done=!0,{...e,pc:r.length,view:n};t=s;break}case"choice":return n.choices=o.options,{...e,pc:t,view:n};case"say":return n.speaker=o.speaker,n.expression=o.expression,n.text=o.text,{...e,pc:t,view:n};case"narrate":return n.speaker=null,n.expression="normal",n.text=o.text,{...e,pc:t,view:n};case"end":return n.done=!0,n.choices=null,{...e,pc:r.length,view:n}}}return n.done=!0,{...e,pc:t,view:n}}function Sh(e,n){const t=e.view.choices;if(!t||n<0||n>=t.length)return e;const r=t[n],i={...e.view,choices:null,affectionDelta:e.view.affectionDelta+r.affection};let l=e.pc;if(r.goto){const o=e.scene.labels[r.goto];o!==void 0&&(l=o)}return Jl({...e,pc:l,view:i})}function zm(e,n=0){let t=e,r=0;for(;!t.view.done&&r++<2e3;)if(t.view.choices){const i=Math.min(n,t.view.choices.length-1);t=Sh(t,i)}else t=Jl(t);return t}const Pm=Object.assign({"../data/scripts/common.txt":dm,"../data/scripts/dabin.txt":fm,"../data/scripts/dohee.txt":hm,"../data/scripts/eunseo.txt":pm,"../data/scripts/gaeun.txt":gm,"../data/scripts/harin.txt":mm,"../data/scripts/hayeong.txt":ym,"../data/scripts/jiwoo.txt":$m,"../data/scripts/minji.txt":wm,"../data/scripts/narae.txt":vm,"../data/scripts/nayun.txt":xm,"../data/scripts/sea.txt":km,"../data/scripts/seyeon.txt":bm,"../data/scripts/sua.txt":Sm,"../data/scripts/yerin.txt":_m,"../data/scripts/yoon.txt":Cm}),zs={},Cu=[];for(const[e,n]of Object.entries(Pm)){const{scenes:t,issues:r}=Dm(n,e);Cu.push(...r);for(const i of t)zs[i.id]&&Cu.push({sceneId:i.id,line:0,message:`중복된 씬 id (${e})`}),zs[i.id]=i}const Tm=zs;function Bo(e){return Tm[e]??null}const Ha="hasukgo.save.v1",_h=1,Bm={rules:{},allRoutes:!0,bgmVolume:.5,sfxVolume:.7,textSpeed:25};function yi(){const e={};for(const n of Ze)e[n.id]={affection:0,clearedStage:0,wins:0,losses:0,dating:!1};return{version:_h,deviceId:"",savedAt:0,points:300,tenants:e,seenScenes:[],unlockedCG:[],recentGames:[],settings:{...Bm},owned:[],equipped:{cards:"classic",theme:"maru"},stats:{totalGames:0,wins:0,losses:0,bestScore:0,pointsWon:0,pointsLost:0,biggestPot:0}}}function Ch(){try{const e=localStorage.getItem(Ha);if(!e)return yi();const n=JSON.parse(e);return Il(n)}catch{return yi()}}function Za(e){const n={...e,savedAt:Date.now()};try{localStorage.setItem(Ha,JSON.stringify(n))}catch{}Fm(n)}const Rm="hasukgo",pt="meta",Qa="save";function Wa(){return new Promise(e=>{try{if(typeof indexedDB>"u")return e(null);const n=indexedDB.open(Rm,1);n.onupgradeneeded=()=>{const t=n.result;t.objectStoreNames.contains(pt)||t.createObjectStore(pt)},n.onsuccess=()=>e(n.result),n.onerror=()=>e(null),setTimeout(()=>e(null),1500)}catch{e(null)}})}async function Fm(e){const n=await Wa();if(n)try{n.transaction(pt,"readwrite").objectStore(pt).put(JSON.stringify(e),Qa)}catch{}}async function Om(){const e=await Wa();return e?new Promise(n=>{try{const r=e.transaction(pt,"readonly").objectStore(pt).get(Qa);r.onsuccess=()=>{try{n(r.result?JSON.parse(r.result):null)}catch{n(null)}},r.onerror=()=>n(null)}catch{n(null)}}):null}async function Gm(){const e=Ch(),n=await Om();if(!n)return{data:e,recovered:!1};if(e.stats.totalGames===0&&e.savedAt===0&&n.stats.totalGames>0){const r=Il(n);return Za(r),{data:r,recovered:!0}}return(n.savedAt??0)>(e.savedAt??0)?{data:Il(n),recovered:!1}:{data:e,recovered:!1}}function ju(e){const n=Il(e);return Za(n),n}function Um(){try{localStorage.removeItem(Ha)}catch{}return(async()=>{const e=await Wa();if(e)try{e.transaction(pt,"readwrite").objectStore(pt).delete(Qa)}catch{}})(),yi()}function Il(e){const n=yi(),t={...n,...e,version:_h,tenants:{...n.tenants,...e.tenants??{}},settings:{...n.settings,...e.settings??{}},stats:{...n.stats,...e.stats??{}},seenScenes:e.seenScenes??[],unlockedCG:e.unlockedCG??[],recentGames:e.recentGames??[],deviceId:e.deviceId??"",savedAt:e.savedAt??0,owned:e.owned??[],equipped:{...n.equipped,...e.equipped??{}}};for(const r of Object.keys(t.tenants))Ze.some(i=>i.id===r)||delete t.tenants[r];return t}function jh(e){const n={};for(const[t,r]of Object.entries(e.tenants))n[t]=r.clearedStage;return n}function Vm(e){const n=e.slice(-20);if(n.length===0)return{goRate:.3,preference:{gwang:.25,yeol:.25,tti:.25,pi:.25},samples:0};const t=n.filter(l=>l.playerWentGo).length/n.length,r={gwang:0,yeol:0,tti:0,pi:0};for(const l of n)r[l.focus]++;const i=n.length;return{goRate:t,preference:{gwang:r.gwang/i,yeol:r.yeol/i,tti:r.tti/i,pi:r.pi/i},samples:n.length}}function Hm(e,n,t){const r=e.tenants[n.tenantId];if(!r)return e;const i={...e,tenants:{...e.tenants},recentGames:[...e.recentGames,n].slice(-20),stats:{...e.stats}},l={...r};return i.stats.totalGames++,i.points=Math.max(0,i.points+n.payout),n.payout>0?(i.stats.pointsWon+=n.payout,i.stats.biggestPot=Math.max(i.stats.biggestPot,n.payout)):i.stats.pointsLost+=-n.payout,n.won?(i.stats.wins++,l.wins++,n.stage===l.clearedStage+1&&(l.clearedStage=n.stage,l.affection=Math.min(100,l.affection+10),i.points+=t.reward,n.stage===10&&(l.dating=!0))):(i.stats.losses++,l.losses++),i.stats.bestScore=Math.max(i.stats.bestScore,n.score),i.tenants[n.tenantId]=l,i}function Zm(e,n,t){const r=e.seenScenes.includes(n)?e.seenScenes:[...e.seenScenes,n],i=t&&!e.unlockedCG.includes(t)?[...e.unlockedCG,t]:e.unlockedCG;return{...e,seenScenes:r,unlockedCG:i}}function Qm(){return Math.min(...Ze.map(e=>e.rate*10))}function Nh(e){return e.points<Qm()}const Eh=100,qa=.7;function Wm(e){if(e.draw)return 0;const n=e.settlementTotal*e.rate;return e.won?Math.round(n):-Math.round(n*qa)}function qm(e){return Nh(e)?{...e,points:e.points+Eh}:e}function Km(e){return Ze.every(n=>(e.tenants[n.id]?.clearedStage??0)>=10)}const u=120,D=46,b=118,vt=168,pe=196,ze=360,tt=21;function Mh(e){return Math.max(0,Math.min(255,Math.round(e)))}function W(e,n){const t=/^#?([0-9a-f]{6})$/i.exec(e.trim());if(!t)return e;const r=parseInt(t[1],16),i=r>>16&255,l=r>>8&255,o=r&255,s=n>0?255:0,a=Math.abs(n);return`#${[i,l,o].map(f=>Mh(f+(s-f)*a)).map(f=>f.toString(16).padStart(2,"0")).join("")}`}function Ym(e,n,t){const r=h=>{const p=/^#?([0-9a-f]{6})$/i.exec(h.trim()),$=p?parseInt(p[1],16):0;return[$>>16&255,$>>8&255,$&255]},[i,l,o]=r(e),[s,a,d]=r(n);return`#${[i+(s-i)*t,l+(a-l)*t,o+(d-o)*t].map(h=>Mh(h).toString(16).padStart(2,"0")).join("")}`}function Xm(e){return Ym(W(e.hair,.32),e.accent,.32)}let Ro=0;function Ps(){return Ro=(Ro+1)%1e6,`p${Ro.toString(36)}`}const Jm={normal:{eye:"open",brow:0,browTilt:0,mouth:"flat",blush:.08,sweat:!1,tear:!1,tilt:0},smile:{eye:"arc",brow:-1,browTilt:-1,mouth:"smile",blush:.3,sweat:!1,tear:!1,tilt:-2},sulk:{eye:"half",brow:2,browTilt:3,mouth:"pout",blush:.2,sweat:!1,tear:!1,tilt:3},surprise:{eye:"wide",brow:-5,browTilt:-2,mouth:"open",blush:.05,sweat:!0,tear:!1,tilt:-1},shy:{eye:"closed",brow:-2,browTilt:2,mouth:"small",blush:.95,sweat:!1,tear:!1,tilt:4},serious:{eye:"open",brow:3,browTilt:-4,mouth:"flat",blush:0,sweat:!1,tear:!1,tilt:0},win:{eye:"arc",brow:-2,browTilt:-2,mouth:"wide",blush:.4,sweat:!1,tear:!1,tilt:-3},lose:{eye:"half",brow:4,browTilt:5,mouth:"wave",blush:.15,sweat:!0,tear:!0,tilt:2}},Lh={normal:"기본",smile:"웃음",sulk:"삐짐",surprise:"놀람",shy:"부끄러움",serious:"진지",win:"승리",lose:"패배"},e1={round:{rx:41,cheek:21,jaw:20},oval:{rx:38,cheek:16,jaw:15},slim:{rx:35,cheek:12,jaw:11}},n1={petite:52,average:58,tall:64},t1={round:{h:12,tilt:0,iris:.95,lid:3.4},sharp:{h:10,tilt:-3.6,iris:.86,lid:3.8},droopy:{h:10.5,tilt:3.2,iris:.92,lid:3.2},narrow:{h:7.6,tilt:-1.6,iris:.82,lid:3.4},sleepy:{h:8.6,tilt:1.2,iris:.86,lid:4.2}},Ft="#2a2018";function Nu(e,n,t,r,i){const l=e,o=u+l*tt,s=11.5,a=n.eye==="wide"?t.h*1.32:n.eye==="half"?t.h*.52:t.h,d=t.tilt;if(n.eye==="closed"||n.eye==="arc"){const F=n.eye==="arc"?-1:1,m=t.tilt<0?`<path d="M${o+l*(s+1)} ${b-3} l${l*5} -4" stroke="${Ft}" stroke-width="2.6" stroke-linecap="round"/>`:"";return`
      <path d="M${o-l*s} ${b+1} q${l*s} ${F*9} ${l*s*2} ${d*.5}"
            stroke="${Ft}" stroke-width="3.2" fill="none" stroke-linecap="round"/>
      ${m}`}const f=`${o-l*s} ${b+1.5}`,h=`${o+l*s} ${b+d}`,p=`M${f} Q${o} ${b-a} ${h} Q${o} ${b+a*.74} ${f} Z`,$=a*t.iris*.82,v=b-a*.06+(n.eye==="half"?-1:0),k=t.tilt<-2?`<path d="M${o+l*(s-1)} ${b+d-1} l${l*6} -5" stroke="${Ft}" stroke-width="2.8" stroke-linecap="round"/>`:"";return`
    <clipPath id="${i}"><path d="${p}"/></clipPath>
    <path d="${p}" fill="#fdfbf7"/>
    <g clip-path="url(#${i})">
      <circle cx="${o}" cy="${v}" r="${$.toFixed(1)}" fill="${W(r,-.45)}"/>
      <circle cx="${o}" cy="${(v+$*.14).toFixed(1)}" r="${($*.8).toFixed(1)}" fill="${r}"/>
      <circle cx="${o}" cy="${(v+$*.28).toFixed(1)}" r="${($*.42).toFixed(1)}" fill="#1a1410"/>
      <circle cx="${(o-l*$*.34).toFixed(1)}" cy="${(v-$*.42).toFixed(1)}" r="${($*.3).toFixed(1)}" fill="#ffffff"/>
      <circle cx="${(o+l*$*.36).toFixed(1)}" cy="${(v+$*.5).toFixed(1)}" r="${($*.16).toFixed(1)}" fill="#ffffff" opacity="0.75"/>
      <path d="${p}" fill="none" stroke="${Ft}" stroke-width="${t.lid*2}" opacity="0.0"/>
    </g>
    <path d="M${f} Q${o} ${b-a} ${h}" stroke="${Ft}" stroke-width="${t.lid}" fill="none" stroke-linecap="round"/>
    <path d="M${o} ${b+a*.66} Q${o+l*s*.7} ${b+a*.5} ${h}"
          stroke="${Ft}" stroke-width="1.5" fill="none" opacity="0.5" stroke-linecap="round"/>
    ${k}`}function r1(e,n,t){const r=t1[n];return Nu(-1,e,r,t,Ps())+Nu(1,e,r,t,Ps())}function i1(e,n){const t=b-19+e.brow,r=e.browTilt,i=17,l=o=>`<path d="M${u+o*tt-o*i*.55} ${t+r} q${o*i*.5} -5 ${o*i} ${-r*.45}"
                  stroke="${n}" stroke-width="3.4" fill="none" stroke-linecap="round"/>`;return l(-1)+l(1)}function l1(e){const n=b+34,t="#a85a56",r="#8c3f41";switch(e.mouth){case"smile":return`<path d="M${u-9} ${n-1} q9 8 18 0" stroke="${t}" stroke-width="2.8" fill="none" stroke-linecap="round"/>`;case"wide":return`<path d="M${u-11} ${n-2} q11 14 22 0 q-11 4 -22 0z" fill="${r}"/>
              <path d="M${u-8} ${n-1} q8 4 16 0" fill="#ffffff" opacity="0.85"/>`;case"pout":return`<path d="M${u-7} ${n+3} q7 -7 14 0" stroke="${t}" stroke-width="2.8" fill="none" stroke-linecap="round"/>`;case"open":return`<ellipse cx="${u}" cy="${n+2}" rx="6" ry="8.5" fill="${r}"/>
              <ellipse cx="${u}" cy="${n+5}" rx="3.4" ry="4" fill="#c4726e" opacity="0.8"/>`;case"small":return`<path d="M${u-4} ${n} q4 4.5 8 0" stroke="${t}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;case"wave":return`<path d="M${u-10} ${n} q5 -5.5 10 0 q5 5.5 10 0" stroke="${t}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;default:return`<path d="M${u-6} ${n} q6 2.5 12 0" stroke="${t}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`}}function o1(e,n){const t=e.hair,r=W(t,-.3),i=52;switch(e.hairStyle){case"long":return`<path d="M${u-i} ${b-20}
                       C${u-i-12} ${b+90} ${u-n-6} 260 ${u-n-10} ${ze}
                       L${u+n+10} ${ze}
                       C${u+n+6} 260 ${u+i+12} ${b+90} ${u+i} ${b-20} Z" fill="${r}"/>`;case"wave":return`<path d="M${u-i} ${b-20}
                       C${u-i-16} ${b+80} ${u-n-10} 250 ${u-n-14} ${ze}
                       q14 -16 26 0 q14 -18 26 0 q12 -16 24 0 q14 -18 26 0 q12 -16 26 0
                       C${u+n+10} 250 ${u+i+16} ${b+80} ${u+i} ${b-20} Z" fill="${r}"/>`;case"braid":return`<path d="M${u-i} ${b-20} C${u-i-6} ${b+60} ${u-48} 220 ${u-44} 250
                       L${u+44} 250 C${u+48} 220 ${u+i+6} ${b+60} ${u+i} ${b-20} Z" fill="${r}"/>
              <g transform="translate(${u+38} ${b+34}) rotate(10)">
                ${[0,1,2,3,4].map(l=>{const o=l*25,s=14-l*1.2;return`<ellipse cx="0" cy="${o}" rx="${s.toFixed(1)}" ry="16" fill="${l%2?W(t,.1):W(t,-.14)}"/>
                            <path d="M${-s.toFixed(1)} ${o+12} q${s.toFixed(1)} -9 ${(s*2).toFixed(1)} 0"
                                  stroke="${W(t,-.45)}" stroke-width="1.8" fill="none" opacity="0.8"/>`}).join("")}
                <path d="M0 ${4*25+14} l-7 15 h14z" fill="${W(t,-.5)}"/>
                <rect x="-9" y="${4*25+10}" width="18" height="6" rx="3" fill="${e.accent}"/>
              </g>`;case"ponytail":return`<path d="M${u-46} ${b-20} C${u-50} ${b+40} ${u-44} 200 ${u-40} 214
                       L${u+40} 214 C${u+44} 200 ${u+50} ${b+40} ${u+46} ${b-20} Z" fill="${r}"/>
              <path d="M${u+40} ${b-26} C${u+86} ${b+4} ${u+82} ${b+90} ${u+56} ${b+150}
                       C${u+74} ${b+80} ${u+70} ${b+20} ${u+34} ${b+4} Z" fill="${t}"/>`;case"bun":return`<path d="M${u-44} ${b-20} C${u-46} ${b+20} ${u-42} 170 ${u-38} 182
                       L${u+38} 182 C${u+42} 170 ${u+46} ${b+20} ${u+44} ${b-20} Z" fill="${r}"/>
              <circle cx="${u}" cy="${D-22}" r="20" fill="${t}"/>
              <circle cx="${u}" cy="${D-22}" r="20" fill="none" stroke="${r}" stroke-width="2"/>
              <path d="M${u-14} ${D-28} q14 -10 28 0" stroke="${W(t,.3)}" stroke-width="3" fill="none" opacity="0.5"/>`;case"bob":return`<path d="M${u-48} ${b-20} C${u-54} ${b+30} ${u-48} ${b+52} ${u-40} ${b+62}
                       L${u+40} ${b+62} C${u+48} ${b+52} ${u+54} ${b+30} ${u+48} ${b-20} Z" fill="${r}"/>`;default:return`<path d="M${u-44} ${b-24} C${u-48} ${b+6} ${u-44} ${b+18} ${u-38} ${b+24}
                       L${u+38} ${b+24} C${u+44} ${b+18} ${u+48} ${b+6} ${u+44} ${b-24} Z" fill="${r}"/>`}}function s1(e,n){const t=e.hair,r=W(t,.32);return`
    <path d="M${u-n-3} ${b-4}
             C${u-n-5} ${D-8} ${u-n*.66} ${D-16} ${u} ${D-16}
             C${u+n*.66} ${D-16} ${u+n+5} ${D-8} ${u+n+3} ${b-4}
             C${u+n} ${b-30} ${u+n*.5} ${b-40} ${u} ${b-40}
             C${u-n*.5} ${b-40} ${u-n} ${b-30} ${u-n-3} ${b-4} Z" fill="${t}"/>
    <path d="M${u-n*.8} ${D+2} C${u-n*.4} ${D-14} ${u+n*.1} ${D-15} ${u+n*.42} ${D-5}
             C${u+n*.1} ${D-9} ${u-n*.4} ${D-7} ${u-n*.8} ${D+8} Z"
          fill="${r}" opacity="0.3"/>`}function a1(e,n,t){const r=n.hair,i=W(r,.26),l=b-26;switch(e){case"straight":return`<path d="M${u-t-2} ${b-4} C${u-t} ${D-8} ${u-20} ${D-16} ${u} ${D-16}
                       C${u+20} ${D-16} ${u+t} ${D-8} ${u+t+2} ${b-4}
                       C${u+t-4} ${l+2} ${u+20} ${l-4} ${u} ${l-2}
                       C${u-20} ${l-4} ${u-t+4} ${l+2} ${u-t-2} ${b-4} Z" fill="${r}"/>
              <path d="M${u-22} ${D-4} q20 -8 40 2 q-20 -2 -40 -2z" fill="${i}" opacity="0.5"/>`;case"split":return`<path d="M${u-t-2} ${b-2} C${u-t} ${D-8} ${u-18} ${D-16} ${u} ${D-16}
                       C${u+18} ${D-16} ${u+t} ${D-8} ${u+t+2} ${b-2}
                       C${u+t-6} ${l+6} ${u+22} ${l-2} ${u+7} ${D+6}
                       C${u+3} ${D+22} ${u-3} ${D+22} ${u-7} ${D+6}
                       C${u-22} ${l-2} ${u-t+6} ${l+6} ${u-t-2} ${b-2} Z" fill="${r}"/>
              <path d="M${u-26} ${D} q22 -9 44 0 q-22 -1 -44 0z" fill="${i}" opacity="0.45"/>`;case"side":return`<path d="M${u-t-2} ${b+2} C${u-t} ${D-8} ${u-18} ${D-16} ${u} ${D-16}
                       C${u+20} ${D-16} ${u+t} ${D-8} ${u+t+2} ${b+2}
                       C${u+t-8} ${l-6} ${u+10} ${l+8} ${u-14} ${l+4}
                       C${u-26} ${l+2} ${u-t+2} ${l+10} ${u-t-2} ${b+2} Z" fill="${r}"/>
              <path d="M${u-18} ${D-2} C${u+4} ${D-10} ${u+24} ${D+2} ${u+30} ${D+18}
                       C${u+20} ${D+4} ${u+2} ${D+2} ${u-18} ${D+6} Z" fill="${i}" opacity="0.5"/>`;case"curtain":return`<path d="M${u-t-2} ${b+4} C${u-t} ${D-8} ${u-18} ${D-16} ${u} ${D-16}
                       C${u+18} ${D-16} ${u+t} ${D-8} ${u+t+2} ${b+4}
                       C${u+t-2} ${l+14} ${u+26} ${l+4} ${u+14} ${D+2}
                       C${u+8} ${D-6} ${u-8} ${D-6} ${u-14} ${D+2}
                       C${u-26} ${l+4} ${u-t+2} ${l+14} ${u-t-2} ${b+4} Z" fill="${r}"/>
              <path d="M${u-30} ${D+2} C${u-18} ${D-10} ${u+18} ${D-10} ${u+30} ${D+2}
                       C${u+16} ${D-4} ${u-16} ${D-4} ${u-30} ${D+2} Z" fill="${i}" opacity="0.5"/>`;default:{const s=(2*t+4)/6;let a="";for(let d=0;d<6;d+=1)a+=` l${-s.toFixed(1)} ${d%2===0?-16:16}`;return`<path d="M${u-t-2} ${b-14} C${u-t} ${D-12} ${u-18} ${D-20} ${u} ${D-20}
                       C${u+18} ${D-20} ${u+t} ${D-12} ${u+t+2} ${b-14}${a} Z" fill="${r}"/>
              <path d="M${u-16} ${D-8} l12 -9 l7 11 z" fill="${i}" opacity="0.5"/>`}}}function c1(e,n){const t=e.hair,r=W(t,-.14),l=["long","wave","braid","ponytail"].includes(e.hairStyle)?104:e.hairStyle==="bob"?56:26,o=s=>`<path d="M${u+s*(n+1)} ${b-26}
              C${u+s*(n+6)} ${b+l*.35} ${u+s*(n+2)} ${b+l*.8} ${u+s*(n-4)} ${b+l}
              C${u+s*(n-1)} ${b+l*.7} ${u+s*(n-4)} ${b+6} ${u+s*(n-7)} ${b-22} Z"
            fill="${r}"/>`;return o(-1)+o(1)}function u1(e,n,t){const r=n.accent;switch(e){case"glasses":{const i=W(r,-.55),l=o=>`<rect x="${u+o*tt-15}" y="${b-12}" width="30" height="23" rx="8"
               fill="#dff0ff" fill-opacity="0.16" stroke="${i}" stroke-width="2.4"/>`;return`${l(-1)}${l(1)}
              <path d="M${u-6} ${b-5} q6 -3 12 0" stroke="${i}" stroke-width="2.4" fill="none"/>
              <path d="M${u-tt-15} ${b-6} l-6 -3 M${u+tt+15} ${b-6} l6 -3"
                    stroke="${i}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
              <path d="M${u-tt-11} ${b-8} l9 -2 l-11 9z" fill="#ffffff" opacity="0.3"/>`}case"hairpin":return`<g transform="translate(${u-t+4} ${D+2}) rotate(-18)">
                <rect x="-11" y="-3" width="22" height="6" rx="3" fill="${r}"/>
                <circle cx="-11" cy="0" r="3.4" fill="${W(r,.35)}"/>
              </g>`;case"starpin":return`<g transform="translate(${u+t-6} ${D}) rotate(12)">
                <path d="M0 -9 L2.6 -2.8 L9 -2.8 L3.8 1.2 L5.8 8 L0 4 L-5.8 8 L-3.8 1.2 L-9 -2.8 L-2.6 -2.8 Z" fill="${r}"/>
                <circle cx="0" cy="0" r="2" fill="#fff" opacity="0.7"/>
              </g>`;case"ribbon":return`<g transform="translate(${u+t-10} ${D-4})">
                <path d="M0 0 l-13 -7 v14 z" fill="${r}"/>
                <path d="M0 0 l13 -7 v14 z" fill="${r}"/>
                <circle cx="0" cy="0" r="4" fill="${W(r,-.2)}"/>
              </g>`;case"earring":return`<g fill="${r}">
                <circle cx="${u-t-1}" cy="${b+12}" r="3"/>
                <circle cx="${u+t+1}" cy="${b+12}" r="3"/>
                <path d="M${u+t+1} ${b+14} v7" stroke="${r}" stroke-width="1.6"/>
                <circle cx="${u+t+1}" cy="${b+23}" r="3.2"/>
              </g>`;case"band":return`<path d="M${u-t-4} ${b-14} C${u-t} ${D-14} ${u+t} ${D-14} ${u+t+4} ${b-14}"
                    stroke="${r}" stroke-width="6" fill="none" stroke-linecap="round"/>`;default:return""}}function d1(e){const n=pe-16;return`M${u-18} ${n}
          C${u-46} ${n+4} ${u-e} ${n+16} ${u-e} ${n+46}
          C${u-e} ${n+86} ${u-e*.74} 302 ${u-e*.86} ${ze}
          L${u+e*.86} ${ze}
          C${u+e*.74} 302 ${u+e} ${n+86} ${u+e} ${n+46}
          C${u+e} ${n+16} ${u+46} ${n+4} ${u+18} ${n} Z`}function f1(e,n,t){const r=e-5,i=o=>`<path d="M${u+o*(r-6)} ${pe+8} C${u+o*(r+6)} ${pe+50} ${u+o*(r+3)} ${pe+84} ${u+o*(r-2)} ${pe+108}"
           stroke="${n}" stroke-width="27" fill="none" stroke-linecap="round"/>`,l=o=>`<circle cx="${u+o*(r-2)}" cy="${pe+118}" r="11.5" fill="${t}"/>
     <circle cx="${u+o*(r-2)}" cy="${pe+118}" r="11.5" fill="${W(t,-.12)}" opacity="0.35"/>`;return i(-1)+i(1)+l(-1)+l(1)}function h1(e,n,t,r,i){const l=pe-16,o=W(n,-.22),s=W(n,.2),a=`M${u-17} ${l+1} L${u} ${l+26} L${u+17} ${l+1}`;switch(e){case"hoodie":return`
        <path d="M${u-34} ${l+2} C${u-40} ${l+30} ${u-22} ${l+40} ${u} ${l+40}
                 C${u+22} ${l+40} ${u+40} ${l+30} ${u+34} ${l+2}
                 C${u+20} ${l-10} ${u-20} ${l-10} ${u-34} ${l+2} Z" fill="${o}"/>
        <path d="M${u-24} ${l+8} q24 22 48 0" stroke="${W(n,-.4)}" stroke-width="2" fill="none" opacity="0.6"/>
        <path d="M${u-8} ${l+26} v34" stroke="#f5efe4" stroke-width="3.4" stroke-linecap="round"/>
        <path d="M${u+8} ${l+24} v30" stroke="#f5efe4" stroke-width="3.4" stroke-linecap="round"/>
        <path d="M${u-30} ${l+96} h60" stroke="${o}" stroke-width="2.4" opacity="0.7"/>`;case"tee":return`
        <path d="M${u-19} ${l+2} q19 20 38 0" stroke="${o}" stroke-width="4" fill="none"/>
        <path d="M${u-i+8} ${pe+52} q12 8 22 2" stroke="${o}" stroke-width="3" fill="none"/>
        <path d="M${u+i-8} ${pe+52} q-12 8 -22 2" stroke="${o}" stroke-width="3" fill="none"/>
        <circle cx="${u}" cy="${l+74}" r="15" fill="none" stroke="${t}" stroke-width="3" opacity="0.75"/>`;case"shirt":return`
        <path d="${a}" stroke="none" fill="${W(r,-.05)}"/>
        <path d="M${u-17} ${l} l-13 12 l19 12 l11 -20z" fill="#f6f1e6"/>
        <path d="M${u+17} ${l} l13 12 l-19 12 l-11 -20z" fill="#f6f1e6"/>
        <path d="M${u} ${l+24} v${ze-l-24}" stroke="${o}" stroke-width="2.2"/>
        ${[40,70,100,130].map(d=>`<circle cx="${u}" cy="${l+d}" r="2.6" fill="${s}"/>`).join("")}`;case"apron":return`
        <path d="M${u-17} ${l} l-13 12 l19 12 l11 -20z" fill="#f6f1e6"/>
        <path d="M${u+17} ${l} l13 12 l-19 12 l-11 -20z" fill="#f6f1e6"/>
        <path d="M${u-26} ${l+30} h52 l8 ${ze-l-30} h-68z" fill="${s}"/>
        <path d="M${u-26} ${l+30} l-4 -18 M${u+26} ${l+30} l4 -18"
              stroke="${s}" stroke-width="7" stroke-linecap="round"/>
        <path d="M${u-34} ${l+104} h68" stroke="${t}" stroke-width="8"/>
        <path d="M${u+22} ${l+108} q14 10 8 26" stroke="${t}" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M${u-16} ${l+120} h32 v26 h-32z" fill="${W(s,-.1)}" opacity="0.8"/>`;case"smock":return`
        <path d="${a}" fill="${W(r,-.05)}"/>
        <path d="${a}" stroke="${o}" stroke-width="3.5" fill="none"/>
        <path d="M${u-i+4} ${pe+60} q14 10 26 2" stroke="${o}" stroke-width="6" fill="none"/>
        <path d="M${u+i-4} ${pe+60} q-14 10 -26 2" stroke="${o}" stroke-width="6" fill="none"/>
        ${[[u-26,l+62,5,t],[u+18,l+86,4,W(t,.3)],[u+30,l+48,3,"#e4d7a8"],[u-12,l+116,6,W(t,-.25)],[u+8,l+140,3.5,t]].map(([d,f,h,p])=>`<circle cx="${d}" cy="${f}" r="${h}" fill="${p}" opacity="0.75"/>`).join("")}`;case"jersey":return`
        <path d="M${u-18} ${l+2} q18 8 36 0 v10 q-18 8 -36 0z" fill="${o}"/>
        <path d="M${u} ${l+12} v${ze-l-12}" stroke="${W(n,-.45)}" stroke-width="3"/>
        <path d="M${u-i+2} ${pe+14} C${u-i+10} ${pe+56} ${u-i+8} ${pe+86} ${u-i+4} ${pe+104}"
              stroke="${t}" stroke-width="5" fill="none"/>
        <path d="M${u+i-2} ${pe+14} C${u+i-10} ${pe+56} ${u+i-8} ${pe+86} ${u+i-4} ${pe+104}"
              stroke="${t}" stroke-width="5" fill="none"/>
        <path d="M${u-34} ${l+40} h22" stroke="#ffffff" stroke-width="3.4" opacity="0.85"/>`;case"blouse":return`
        <path d="M${u-20} ${l+2} q20 24 40 0 q-4 16 -20 16 q-16 0 -20 -16z" fill="#f8f3e9"/>
        <path d="M${u-20} ${l+2} q20 24 40 0" stroke="${o}" stroke-width="2.6" fill="none"/>
        <g transform="translate(${u} ${l+22})">
          <path d="M0 0 l-12 -6 v12 z" fill="${t}"/>
          <path d="M0 0 l12 -6 v12 z" fill="${t}"/>
          <circle r="3.6" fill="${W(t,-.25)}"/>
        </g>
        ${[60,92,124].map(d=>`<circle cx="${u}" cy="${l+d}" r="2.4" fill="${s}"/>`).join("")}`;case"knit":return`
        <path d="M${u-22} ${l-4} q22 26 44 0 v14 q-22 22 -44 0z" fill="${s}"/>
        ${[0,1,2,3,4,5].map(d=>`<path d="M${u-22+d*9} ${l-2} q3 12 0 24" stroke="${o}" stroke-width="1.6" fill="none" opacity="0.6"/>`).join("")}
        <path d="M${u-12} ${l+46} q12 18 0 36 q-12 18 0 36" stroke="${o}" stroke-width="2.4" fill="none" opacity="0.5"/>
        <path d="M${u+12} ${l+46} q-12 18 0 36 q12 18 0 36" stroke="${o}" stroke-width="2.4" fill="none" opacity="0.5"/>
        <path d="M${u-i+4} ${pe+96} q14 10 26 2" stroke="${o}" stroke-width="6" fill="none"/>
        <path d="M${u+i-4} ${pe+96} q-14 10 -26 2" stroke="${o}" stroke-width="6" fill="none"/>`;case"suit":{const d=W(n,-.3);return`
        <path d="M${u-16} ${l} L${u} ${l+30} L${u+16} ${l} L${u+12} ${l+88} L${u-12} ${l+88} Z" fill="#f6f1e6"/>
        <path d="M${u-23} ${l-2} L${u-3} ${l+38} L${u-29} ${l+80} L${u-41} ${l+18} Z" fill="${d}"/>
        <path d="M${u+23} ${l-2} L${u+3} ${l+38} L${u+29} ${l+80} L${u+41} ${l+18} Z" fill="${d}"/>
        <path d="M${u-23} ${l-2} L${u-3} ${l+38} M${u+23} ${l-2} L${u+3} ${l+38}"
              stroke="${s}" stroke-width="2"/>
        <g transform="translate(${u} ${l+26})">
          <path d="M0 0 l-12 -7 v14 z" fill="${t}"/>
          <path d="M0 0 l12 -7 v14 z" fill="${t}"/>
          <circle r="3.6" fill="${W(t,-.3)}"/>
        </g>
        <circle cx="${u-1}" cy="${l+104}" r="3" fill="${s}"/>`}case"dress":return`
        <path d="M${u-24} ${l+4} q24 22 48 0 v8 q-24 20 -48 0z" fill="${s}"/>
        <path d="M${u-24} ${l+4} q24 22 48 0" stroke="${o}" stroke-width="2.4" fill="none"/>
        <path d="M${u-i*.92} ${l+104} h${i*1.84}" stroke="${t}" stroke-width="9"/>
        <path d="M${u-i*.9} ${l+120} q${i*.9} 12 ${i*1.8} 0" stroke="${s}" stroke-width="2.4" fill="none" opacity="0.7"/>
        <g transform="translate(${u+26} ${l+108})">
          <path d="M0 0 l-11 -6 v12 z" fill="${W(t,.25)}"/>
          <path d="M0 0 l11 -6 v12 z" fill="${W(t,.25)}"/>
        </g>`;case"cardigan":return`
        <path d="M${u-20} ${l+2} L${u} ${l+30} L${u+20} ${l+2} L${u+16} ${ze} L${u-16} ${ze} Z" fill="#efe6d6"/>
        <path d="M${u-20} ${l+2} L${u-2} ${l+34} L${u-10} ${ze} L${u-30} ${ze} Z" fill="${o}"/>
        <path d="M${u+20} ${l+2} L${u+2} ${l+34} L${u+10} ${ze} L${u+30} ${ze} Z" fill="${o}"/>
        ${[52,84,116,148].map(d=>`<circle cx="${u-14}" cy="${l+d}" r="2.8" fill="${t}"/>`).join("")}
        <path d="M${u-i+4} ${pe+100} q14 10 26 2" stroke="${o}" stroke-width="6" fill="none"/>
        <path d="M${u+i-4} ${pe+100} q-14 10 -26 2" stroke="${o}" stroke-width="6" fill="none"/>`;case"coat":return`
        <path d="M${u-18} ${l+2} L${u} ${l+30} L${u+18} ${l+2}" fill="${W(r,-.08)}"/>
        <path d="M${u-26} ${l-4} L${u-2} ${l+36} L${u-34} ${l+84} L${u-46} ${l+16} Z" fill="${s}"/>
        <path d="M${u+26} ${l-4} L${u+2} ${l+36} L${u+34} ${l+84} L${u+46} ${l+16} Z" fill="${s}"/>
        <path d="M${u} ${l+36} v${ze-l-36}" stroke="${W(n,-.4)}" stroke-width="2.2"/>
        <path d="M${u-i*.94} ${l+110} h${i*1.88}" stroke="${W(n,-.38)}" stroke-width="10"/>
        <rect x="${u-9}" y="${l+104}" width="18" height="16" rx="3" fill="${t}"/>
        ${[[u-13,l+62],[u+13,l+62],[u-13,l+88],[u+13,l+88]].map(([d,f])=>`<circle cx="${d}" cy="${f}" r="3.2" fill="${W(n,-.45)}"/>`).join("")}`;default:return`
        <path d="M${u-30} ${l+4} L${u} ${l+40} L${u+30} ${l+4}
                 L${u+34} ${l+14} L${u} ${l+54} L${u-34} ${l+14} Z" fill="#fbf6ec"/>
        <path d="M${u-30} ${l+4} L${u} ${l+40} L${u+30} ${l+4}" stroke="${o}" stroke-width="2" fill="none"/>
        <path d="M${u-34} ${l+14} L${u} ${l+54} L${u+20} ${l+32} L${u+26} ${l+62} L${u-30} ${l+62} Z" fill="${n}"/>
        <path d="M${u-i} ${l+70} q${i} 16 ${i*2} 0" stroke="${t}" stroke-width="9" fill="none"/>
        <g transform="translate(${u+10} ${l+60})">
          <path d="M0 0 l-14 -8 v16 z" fill="${t}"/>
          <path d="M0 0 l14 -8 v16 z" fill="${t}"/>
          <path d="M-3 6 C-8 40 -4 70 -9 ${ze-l-60}" stroke="${t}" stroke-width="7" fill="none" stroke-linecap="round"/>
          <path d="M6 6 C12 44 8 76 14 ${ze-l-60}" stroke="${W(t,.18)}" stroke-width="7" fill="none" stroke-linecap="round"/>
        </g>`}}function p1(e,n,t){const r=n.accent,i=u-(t-5)+2,l=pe+118,o=a=>a.replace(/fill="[^"]*"/g,'fill="#f4ecdc"').replace(/stroke="[^"]*"/g,'stroke="#f4ecdc"'),s=a=>`<g transform="translate(${i} ${l}) scale(1.18)" stroke-linejoin="round">
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
                 <ellipse cx="0" cy="-14" rx="13" ry="4.5" fill="${W(r,.1)}"/>
                 <path d="M-5 -24 q4 -6 0 -11 M5 -24 q4 -6 0 -11" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.4"/>`);case"hwatu":return s(`<g transform="rotate(-8)">
                   <rect x="-14" y="-22" width="28" height="40" rx="3" fill="#2a2119" stroke="#6b5a3e" stroke-width="2"/>
                   <rect x="-9" y="-16" width="18" height="28" rx="2" fill="#7a2a22"/>
                   <circle cx="0" cy="-2" r="6" fill="#d8b24a"/>
                   <path d="M-14 6 h28" stroke="#6b5a3e" stroke-width="2"/>
                 </g>`);default:return""}}function g1(e){const{tenant:n,expression:t,outfit:r}=e,i=e.width??240,l=e.height??360,o=n.look,s=Jm[t],a=e1[o.face],d=a.rx,f=n1[o.build]??65,h=o.skin,p=W(h,-.16),$=o.outfits[r],v=o.wear[r],k=Ps(),F=`M${u-d} ${b-14}
    C${u-d} ${D+2} ${u-d*.6} ${D-2} ${u} ${D-2}
    C${u+d*.6} ${D-2} ${u+d} ${D+2} ${u+d} ${b-14}
    C${u+d} ${b+a.jaw} ${u+a.cheek} ${vt-7} ${u} ${vt}
    C${u-a.cheek} ${vt-7} ${u-d} ${b+a.jaw} ${u-d} ${b-14} Z`,m=s.blush>0?`<ellipse cx="${u-27}" cy="${b+16}" rx="12" ry="6.5" fill="#ff8496" opacity="${(s.blush*.5).toFixed(2)}"/>
         <ellipse cx="${u+27}" cy="${b+16}" rx="12" ry="6.5" fill="#ff8496" opacity="${(s.blush*.5).toFixed(2)}"/>`:"",g=s.sweat?`<path d="M${u+d-6} ${D+16} q8 12 0 17 q-8 -5 0 -17z" fill="#8ecbff" opacity="0.92"/>`:"",y=s.tear?`<path d="M${u-tt-6} ${b+6} q-3 14 1 22" stroke="#8ecbff" stroke-width="3.2" fill="none" stroke-linecap="round"/>
       <circle cx="${u-tt-5}" cy="${b+30}" r="3.2" fill="#8ecbff" opacity="0.9"/>`:"";return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 360" width="${i}" height="${l}" role="img" aria-label="${n.name} ${Lh[t]}">
  <defs>
    <radialGradient id="${k}s" cx="0.4" cy="0.32" r="0.75">
      <stop offset="0" stop-color="${W(h,.1)}"/>
      <stop offset="1" stop-color="${p}"/>
    </radialGradient>
    <linearGradient id="${k}c" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${W($,.12)}"/>
      <stop offset="1" stop-color="${W($,-.18)}"/>
    </linearGradient>
  </defs>

  ${o1(o,f)}

  <g>
    ${f1(f,W($,-.2),h)}
    <path d="${d1(f)}" fill="url(#${k}c)"/>
    <path d="M${u-13} ${vt-12} h26 v30 h-26z" fill="${h}"/>
    <path d="M${u-13} ${vt-12} h26 v13 q-13 8 -26 0z" fill="${p}" opacity="0.55"/>
    ${h1(v,$,o.accent,h,f)}
  </g>

  <g transform="rotate(${s.tilt} ${u} ${vt})">
    <clipPath id="${k}f"><path d="${F}"/></clipPath>
    <path d="${F}" fill="url(#${k}s)"/>
    <ellipse cx="${u-d+1}" cy="${b+2}" rx="5" ry="8" fill="${W(h,-.06)}"/>
    <ellipse cx="${u+d-1}" cy="${b+2}" rx="5" ry="8" fill="${W(h,-.06)}"/>
    <g clip-path="url(#${k}f)">
      <ellipse cx="${u}" cy="${b-34}" rx="${d+6}" ry="20" fill="${p}" opacity="0.3"/>
      <ellipse cx="${u}" cy="${vt+16}" rx="${a.cheek+6}" ry="12" fill="${p}" opacity="0.22"/>
    </g>
    ${c1(o,d)}
    ${s1(o,d)}
    ${a1(o.bangs,o,d)}
    ${i1(s,W(o.hair,-.25))}
    ${r1(s,o.eyes,Xm(o))}
    <path d="M${u-3} ${b+19} q3.5 3.5 7 0" stroke="${W(h,-.32)}" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.75"/>
    ${m}
    ${l1(s)}
    ${u1(o.accessory,o,d)}
    ${g}
    ${y}
  </g>

  ${p1(o.propArt,o,f)}
</svg>`}function Ts(e){return`data:image/svg+xml;utf8,${encodeURIComponent(g1(e))}`}const m1={maru:"하숙집 마루",kitchen:"부엌",hallway:"복도 / 방 앞",rooftop:"옥상",yard:"마당 / 대문",cvs:"동네 편의점 앞",campus:"캠퍼스 벤치",street:"골목길",room:"내 방",annex:"별채",festival:"가을 축제",station:"지하철역 앞",beach:"집 앞 바닷가"},y1={morning:{sky:["#cfe6f7","#fbe6d0"],ground:"#cbb89a",wall:"#efe3d0",wood:"#c9a16b",light:"#fff3d6",haze:.12},evening:{sky:["#f7c08a","#e0798a"],ground:"#9c8467",wall:"#e2cbb2",wood:"#b58553",light:"#ffd9a0",haze:.18},night:{sky:["#1b2440","#2f3a5c"],ground:"#3b3428",wall:"#4a4237",wood:"#6b4f33",light:"#ffd98a",haze:.34}},H=720,ce=1280;function $1(e){return`
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
  <rect width="${H}" height="${ce}" fill="url(#sky)"/>`}function Bs(e){if(e!=="night")return"";let n="";for(let t=0;t<40;t++){const r=t*137%H+7,i=t*61%380+20,l=t%3*.6+.8;n+=`<circle cx="${r}" cy="${i}" r="${l}" fill="#fff" opacity="${.3+t%5*.12}"/>`}return n}function O(e,n){const t=/^#?([0-9a-f]{6})$/i.exec(e);if(!t)return e;const r=parseInt(t[1],16),i=n>0?255:0,l=Math.abs(n);return`#${[r>>16&255,r>>8&255,r&255].map(s=>Math.round(s+(i-s)*l)).map(s=>s.toString(16).padStart(2,"0")).join("")}`}function Dr(e,n,t){const r=f=>{const h=/^#?([0-9a-f]{6})$/i.exec(f),p=h?parseInt(h[1],16):0;return[p>>16&255,p>>8&255,p&255]},[i,l,o]=r(e),[s,a,d]=r(n);return`#${[i+(s-i)*t,l+(a-l)*t,o+(d-o)*t].map(f=>Math.max(0,Math.min(255,Math.round(f))).toString(16).padStart(2,"0")).join("")}`}const Dh={morning:{zenith:"#5d9fd6",horizonSky:"#dbeaf4",sun:"#fff6de",sunGlow:.5,seaFar:"#4b86b4",seaNear:"#2f6c99",grassTop:"#9cb85e",grassBottom:"#5d7c33",sand:"#ddcaa8",wallLight:"#f2f0ec",wallDark:"#3f434b",deck:"#9c7550",glassA:"#cfe0ec",glassB:"#48606f",shadow:.28,haze:"#cfe0ef",hazeAmt:.1},evening:{zenith:"#6b5a8e",horizonSky:"#ffb877",sun:"#ffd9a0",sunGlow:.85,seaFar:"#6b7fa0",seaNear:"#2f4059",grassTop:"#a08f4e",grassBottom:"#4e5530",sand:"#c9a97f",wallLight:"#efdcc6",wallDark:"#3b3740",deck:"#8a5f3c",glassA:"#f0c79a",glassB:"#4a3f48",shadow:.4,haze:"#f0b988",hazeAmt:.16},night:{zenith:"#0b1224",horizonSky:"#20304c",sun:"#dce7ff",sunGlow:.35,seaFar:"#14213a",seaNear:"#0a1122",grassTop:"#2b3a2c",grassBottom:"#131d18",sand:"#3a3a3c",wallLight:"#9aa2b0",wallDark:"#1b1e25",deck:"#4a3826",glassA:"#39506b",glassB:"#141b28",shadow:.5,haze:"#0e1526",hazeAmt:.2}};function w1(e){return`
  <defs>
    <linearGradient id="vsky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${e.zenith}"/>
      <stop offset="62%" stop-color="${Dr(e.zenith,e.horizonSky,.55)}"/>
      <stop offset="100%" stop-color="${e.horizonSky}"/>
    </linearGradient>
    <linearGradient id="vsea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${Dr(e.seaFar,e.horizonSky,.35)}"/>
      <stop offset="18%" stop-color="${e.seaFar}"/>
      <stop offset="100%" stop-color="${e.seaNear}"/>
    </linearGradient>
    <linearGradient id="vgrass" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${Dr(e.grassTop,e.horizonSky,.28)}"/>
      <stop offset="22%" stop-color="${e.grassTop}"/>
      <stop offset="100%" stop-color="${e.grassBottom}"/>
    </linearGradient>
    <linearGradient id="vsand" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${Dr(e.sand,e.horizonSky,.25)}"/>
      <stop offset="100%" stop-color="${O(e.sand,-.28)}"/>
    </linearGradient>
    <linearGradient id="vwall" x1="0" y1="0" x2="1" y2="0.3">
      <stop offset="0%" stop-color="${O(e.wallLight,.06)}"/>
      <stop offset="70%" stop-color="${e.wallLight}"/>
      <stop offset="100%" stop-color="${O(e.wallLight,-.16)}"/>
    </linearGradient>
    <linearGradient id="vwalld" x1="0" y1="0" x2="1" y2="0.3">
      <stop offset="0%" stop-color="${O(e.wallDark,.14)}"/>
      <stop offset="100%" stop-color="${O(e.wallDark,-.25)}"/>
    </linearGradient>
    <linearGradient id="vglass" x1="0.1" y1="0" x2="0.9" y2="1">
      <stop offset="0%" stop-color="${e.glassA}"/>
      <stop offset="45%" stop-color="${Dr(e.glassA,e.glassB,.7)}"/>
      <stop offset="100%" stop-color="${e.glassB}"/>
    </linearGradient>
    <linearGradient id="vlit" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fff0cc"/>
      <stop offset="55%" stop-color="#ffd489"/>
      <stop offset="100%" stop-color="#d99a45"/>
    </linearGradient>
    <linearGradient id="vdeck" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${O(e.deck,.18)}"/>
      <stop offset="100%" stop-color="${O(e.deck,-.25)}"/>
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
  </defs>`}function Ah(e,n){return e==="evening"?{x:104,y:n-52}:{x:545,y:205}}function ar(e,n,t){const{x:r,y:i}=Ah(n,t),l=n==="night"?34:46;let o=`<rect width="${H}" height="${t+4}" fill="url(#vsky)"/>`;n==="night"&&(o+=Bs(n)),o+=`
    <circle cx="${r}" cy="${i}" r="${l*5}" fill="url(#vsun)" opacity="${e.sunGlow}"/>
    <circle cx="${r}" cy="${i}" r="${l}" fill="${e.sun}" opacity="${n==="night"?.92:.82}"/>`,n==="night"&&(o+=`<circle cx="${r-11}" cy="${i-7}" r="7" fill="#b9c6de" opacity="0.4"/>
            <circle cx="${r+9}" cy="${i+10}" r="5" fill="#b9c6de" opacity="0.3"/>`);const s=n==="night"?"#2b3852":n==="evening"?"#ffd9b0":"#ffffff",a=(d,f,h,p,$)=>`<ellipse cx="${d}" cy="${f}" rx="${h}" ry="${p}" fill="${s}" opacity="${$}" filter="url(#vblur)"/>`;return o+=a(180,150,150,34,.5)+a(300,178,120,26,.32)+a(590,118,130,30,.4)+a(90,252,110,22,.28)+a(430,t-108,215,24,n==="evening"?.5:.26),o}function cr(e,n,t,r){const i=r-t,l=n==="night"?"#cfe0ff":n==="evening"?"#ffd9a8":"#ffffff",{x:o}=Ah(n,t);let s=`<rect x="0" y="${t}" width="${H}" height="${i}" fill="url(#vsea)"/>
             <rect x="0" y="${t-2}" width="${H}" height="5" fill="${e.sun}" opacity="0.5" filter="url(#vsoft)"/>`;s+='<g filter="url(#vsoft)">';for(let a=0;a<22;a+=1){const d=a/21,f=t+8+d*(i-10),h=16+d*d*150,p=o-h/2+Math.sin(a*2.7)*(8+d*40);s+=`<rect x="${p.toFixed(0)}" y="${f.toFixed(0)}" width="${h.toFixed(0)}" height="${(2+d*4).toFixed(0)}" rx="2" fill="${l}" opacity="${(.34-d*.2).toFixed(2)}"/>`}s+='</g><g filter="url(#vsoft)">';for(let a=0;a<18;a+=1){const d=a/17,f=t+14+d*(i-16),h=a*191%(H-160)+30,p=40+a%5*46+d*60;s+=`<rect x="${h}" y="${f.toFixed(0)}" width="${p.toFixed(0)}" height="${(1.5+d*2.5).toFixed(1)}" rx="1" fill="${l}" opacity="${(.05+a%3*.035).toFixed(2)}"/>`}return s+"</g>"}function Eu(e,n){let t="";for(let r=0;r<90;r+=1){const i=r*83%H,l=ce-10-r*37%150,o=26+r*13%40,s=(r%5-2)*7;t+=`<path d="M${i} ${l} q${s/2} ${-o/2} ${s} ${-o}" stroke="${O(e.grassBottom,r%3===0?.3:-.2)}" stroke-width="3" fill="none" stroke-linecap="round"/>`}return`
    <path d="M0 ${n+42} C180 ${n-28} 520 ${n-12} ${H} ${n+48} L${H} ${ce} L0 ${ce} Z" fill="url(#vgrass)"/>
    <ellipse cx="170" cy="${n+150}" rx="280" ry="90" fill="${O(e.grassBottom,-.35)}" opacity="0.4" filter="url(#vblur2)"/>
    <ellipse cx="610" cy="${n+230}" rx="260" ry="100" fill="${O(e.grassBottom,-.3)}" opacity="0.35" filter="url(#vblur2)"/>
    <ellipse cx="380" cy="${n+96}" rx="320" ry="60" fill="${O(e.grassTop,.25)}" opacity="0.28" filter="url(#vblur2)"/>
    <rect x="0" y="${n-40}" width="${H}" height="${ce-n+40}" filter="url(#vblade)" opacity="0.28"
          style="mix-blend-mode:overlay"/>
    <g opacity="0.72" filter="url(#vsoft)">${t}</g>`}function v1(e){let n=`<path d="M0 ${e} C200 ${e-18} 520 ${e+14} ${H} ${e-8} L${H} ${ce} L0 ${ce} Z" fill="url(#vsand)"/>`;return n+=`<path d="M0 ${e+6} C200 ${e-12} 520 ${e+20} ${H} ${e-2} L${H} ${e+46} C520 ${e+64} 200 ${e+32} 0 ${e+50} Z" fill="#ffffff" opacity="0.38" filter="url(#vsoft)"/>`,n+=`<path d="M0 ${e+74} C200 ${e+56} 520 ${e+88} ${H} ${e+66}" stroke="#ffffff"
                stroke-width="4" fill="none" opacity="0.2"/>`,n+=`<rect x="0" y="${e-20}" width="${H}" height="${ce-e+20}" filter="url(#vgrain)" opacity="0.1"
                style="mix-blend-mode:overlay"/>`,n}function Gr(e,n,t,r,i,l=2){const o=i==="night",s=o?"#0d0f13":"#2f333a";let a=`<rect x="${e}" y="${n}" width="${t}" height="${r}" fill="${o?"url(#vlit)":"url(#vglass)"}"/>`;o?a+=`<rect x="${e}" y="${(n+r*.62).toFixed(0)}" width="${t}" height="${(r*.38).toFixed(0)}" fill="#ffe6b0" opacity="0.3"/>
            <rect x="${(e+t*.14).toFixed(0)}" y="${(n+r*.56).toFixed(0)}" width="${(t*.28).toFixed(0)}" height="${(r*.44).toFixed(0)}" fill="#8a5f2c" opacity="0.28"/>`:a+=`<path d="M${e} ${n+r} L${(e+t*.62).toFixed(0)} ${n} L${e+t} ${n} L${(e+t*.38).toFixed(0)} ${n+r} Z" fill="#ffffff" opacity="0.15"/>`;for(let d=1;d<l;d+=1)a+=`<rect x="${(e+t/l*d-2).toFixed(0)}" y="${n}" width="4" height="${r}" fill="${s}" opacity="0.9"/>`;return a+=`<rect x="${e}" y="${n}" width="${t}" height="${r}" fill="none" stroke="${s}" stroke-width="5"/>`,a}function Ka(e,n,t,r){let i=`<rect x="${e}" y="${n}" width="${t}" height="${r}" fill="url(#vdeck)"/>`;for(let l=1;l<26;l+=1){const o=e+t/26*l;i+=`<path d="M${o.toFixed(0)} ${n} L${(o+(o-H/2)*.1).toFixed(0)} ${n+r}" stroke="#00000055" stroke-width="2"/>`}return i+`<rect x="${e}" y="${n}" width="${t}" height="4" fill="#ffffff" opacity="0.12"/>`}function Mu(e,n){const t=n==="night",r=t?"#0b0d11":"#23262c",i=t?"#15181e":"#33373e",l=(o,s,a,d,f)=>`<rect x="${o}" y="${s}" width="${a}" height="5" fill="${i}"/>`+[...Array(d).keys()].map(h=>`<rect x="${o+4+h*((a-8)/(d-1))}" y="${s}" width="3" height="${f}" fill="${i}" opacity="0.85"/>`).join("")+`<rect x="${o}" y="${s+f-4}" width="${a}" height="4" fill="${i}"/>`;return`
  <ellipse cx="400" cy="808" rx="330" ry="40" fill="#000000" opacity="${e.shadow}" filter="url(#vblur)"/>

  <!-- 오른쪽 짙은 동 -->
  <path d="M400 556 L520 430 L642 556 L642 800 L400 800 Z" fill="url(#vwalld)"/>
  <path d="M392 562 L520 424 L650 562 L642 574 L520 446 L400 574 Z" fill="${r}"/>
  <path d="M400 574 L520 446 L642 574 L642 596 L520 470 L400 596 Z" fill="#000000" opacity="0.3"/>
  <rect x="400" y="756" width="242" height="44" fill="#000000" opacity="0.26"/>
  <rect x="470" y="470" width="100" height="60" fill="${t?"url(#vlit)":"url(#vglass)"}" stroke="${r}" stroke-width="5"/>
  ${Gr(430,594,182,202,n,3)}

  <!-- 굴뚝 -->
  <rect x="592" y="386" width="34" height="78" fill="${O(e.wallLight,-.08)}"/>
  <rect x="587" y="380" width="44" height="12" rx="3" fill="${r}"/>

  <!-- 왼쪽 흰 동. 살짝 왼쪽에서 본 각도라 측면과 지붕 뒷면이 보인다 -->
  <path d="M302 346 L250 378 L124 524 L176 486 Z" fill="${O(r,.14)}"/>
  <path d="M124 524 L176 486 L176 800 L124 816 Z" fill="${O(e.wallLight,-.46)}"/>
  <path d="M124 524 L176 486 L176 512 L124 550 Z" fill="#000000" opacity="0.3"/>
  <path d="M176 486 L302 352 L428 486 L428 800 L176 800 Z" fill="url(#vwall)"/>
  <rect x="176" y="486" width="252" height="314" filter="url(#vstucco)" opacity="0.13" style="mix-blend-mode:overlay"/>
  <path d="M168 492 L302 346 L436 492 L428 504 L302 368 L176 504 Z" fill="${r}"/>
  <path d="M176 504 L302 368 L428 504 L428 528 L302 394 L176 528 Z" fill="#000000" opacity="0.28"/>
  <rect x="176" y="756" width="252" height="44" fill="#000000" opacity="0.22"/>
  <rect x="277" y="402" width="50" height="46" fill="${t?"url(#vlit)":"url(#vglass)"}" stroke="${r}" stroke-width="4"/>
  ${Gr(200,522,86,76,n,2)}
  ${Gr(318,522,86,76,n,2)}
  ${l(190,600,224,8,38)}
  ${Gr(196,654,208,146,n,3)}
  <rect x="352" y="692" width="56" height="108" fill="${O(e.wallDark,t?.12:0)}" stroke="${r}" stroke-width="4"/>
  <circle cx="362" cy="748" r="4" fill="${t?"#ffd89a":"#c8b48a"}"/>

  <!-- 오른쪽 외부 철제 계단 -->
  <path d="M642 800 L706 800 L706 610 L642 610 Z" fill="${i}" opacity="0.45"/>
  ${[...Array(9).keys()].map(o=>`<rect x="644" y="${618+o*20}" width="60" height="6" fill="${i}"/>`).join("")}
  <path d="M646 806 L702 606 M702 806 L702 602" stroke="${i}" stroke-width="6" fill="none"/>

  <!-- 데크 + 난간 + 데크 밑 옹벽 -->
  ${Ka(96,800,528,58)}
  <rect x="96" y="856" width="528" height="78" fill="${O(e.deck,-.44)}"/>
  ${[...Array(22).keys()].map(o=>`<rect x="${98+o*24}" y="856" width="2" height="78" fill="#00000044"/>`).join("")}
  ${l(96,760,528,18,42)}

  ${t?`<ellipse cx="300" cy="702" rx="255" ry="148" fill="url(#vwarm)"/>
         <ellipse cx="520" cy="690" rx="200" ry="130" fill="url(#vwarm)"/>
         <ellipse cx="360" cy="832" rx="300" ry="58" fill="#ffca7a" opacity="0.13" filter="url(#vblur)"/>`:""}`}function dt(e,n){return`
    <rect x="0" y="${n-120}" width="${H}" height="240" fill="${e.haze}" opacity="${e.hazeAmt}"
          filter="url(#vblur2)"/>
    <rect width="${H}" height="${ce}" filter="url(#vgrain)" opacity="0.055" style="mix-blend-mode:overlay"/>
    <rect width="${H}" height="${ce}" fill="url(#vvig)"/>`}const x1=new Set(["yard","beach","maru","annex","kitchen","hallway","room","rooftop"]),k1=["vsky","vsea","vgrass","vsand","vwall","vwalld","vglass","vlit","vdeck","vsun","vwarm","vvig","vblur","vblur2","vsoft","vgrain","vblade","vstucco","vwin","vfloor"];let Fo=0;function b1(e){Fo=(Fo+1)%1e6;const n=Fo.toString(36);let t=e;for(const r of k1)t=t.split(`id="${r}"`).join(`id="${r}${n}"`),t=t.split(`url(#${r})`).join(`url(#${r}${n})`);return t}const zl={top:214,bottom:700,left:112,right:608};function eo(e,n){return n?e==="night"?{wall:"#6a6448",wallLit:"#8a8058",ceil:"#4e4a38",floor:"#8e8a80",floorDark:"#5d5a52",trim:"#8a6a3c",glow:.9}:e==="evening"?{wall:"#c4b483",wallLit:"#e0cd96",ceil:"#b0a279",floor:"#ded6c6",floorDark:"#a89f8d",trim:"#a9793f",glow:.5}:{wall:"#cfc49a",wallLit:"#e6dcb4",ceil:"#ded6bb",floor:"#ece7db",floorDark:"#c2bcae",trim:"#b08b52",glow:.18}:e==="night"?{wall:"#4b4b50",wallLit:"#6a6a70",ceil:"#3a3a3f",floor:"#6b4f30",floorDark:"#44311d",trim:"#2a2a2e",glow:.9}:e==="evening"?{wall:"#e0d5c6",wallLit:"#f2e2cc",ceil:"#cfc5b8",floor:"#c08f55",floorDark:"#8d6437",trim:"#5a5550",glow:.45}:{wall:"#ece7df",wallLit:"#faf7f2",ceil:"#f2eee8",floor:"#c99a63",floorDark:"#9a7345",trim:"#6b6660",glow:.14}}function no(e,n){const{top:t,bottom:r,left:i,right:l}=zl;let o=`
    <rect width="${H}" height="${ce}" fill="${e.wall}"/>
    <!-- 천장 -->
    <path d="M0 0 L${H} 0 L${l} ${t} L${i} ${t} Z" fill="${e.ceil}"/>
    <!-- 옆벽 -->
    <path d="M0 0 L${i} ${t} L${i} ${r} L0 ${ce} Z" fill="${O(e.wall,-.16)}"/>
    <path d="M${H} 0 L${l} ${t} L${l} ${r} L${H} ${ce} Z" fill="${O(e.wall,-.24)}"/>
    <!-- 뒷벽 -->
    <rect x="${i}" y="${t}" width="${l-i}" height="${r-t}" fill="${e.wall}"/>
    <rect x="${i}" y="${t}" width="${l-i}" height="${r-t}" filter="url(#vstucco)"
          opacity="0.13" style="mix-blend-mode:overlay"/>
    <!-- 바닥 -->
    <path d="M${i} ${r} L${l} ${r} L${H+200} ${ce} L-200 ${ce} Z" fill="${e.floor}"/>`;if(n==="oak"){for(let s=0;s<=14;s+=1){const a=i+(l-i)/14*s,d=-200+(H+400)/14*s;o+=`<path d="M${a.toFixed(0)} ${r} L${d.toFixed(0)} ${ce}" stroke="${e.floorDark}" stroke-width="2" opacity="0.5"/>`}for(let s=1;s<=5;s+=1){const a=r+s*s*22;a<ce&&(o+=`<path d="M0 ${a.toFixed(0)} h${H}" stroke="${e.floorDark}" stroke-width="1.5" opacity="0.22"/>`)}}else{for(let s=0;s<=10;s+=1){const a=i+(l-i)/10*s,d=-200+(H+400)/10*s;o+=`<path d="M${a.toFixed(0)} ${r} L${d.toFixed(0)} ${ce}" stroke="${e.floorDark}" stroke-width="2" opacity="0.35"/>`}for(let s=1;s<=6;s+=1){const a=r+s*s*17;a<ce&&(o+=`<path d="M0 ${a.toFixed(0)} h${H}" stroke="${e.floorDark}" stroke-width="2" opacity="0.3"/>`)}}return o+=`<rect x="0" y="${r}" width="${H}" height="${ce-r}" fill="${e.floorDark}" opacity="0.2"
                filter="url(#vblur2)"/>`,o+=`<path d="M${i} ${r-10} h${l-i} v10 h-${l-i} Z" fill="${O(e.wall,-.3)}" opacity="0.6"/>`,o}function S1(e,n){const t=n==="night"||n==="evening",r=t?"#fff0d0":"#ffffff";let i="";for(const l of[70,128])i+=`<rect x="${140+(l-70)*.5}" y="${l}" width="${440-(l-70)}" height="5" rx="2" fill="${r}"
                  opacity="${t?.95:.5}"/>`,t&&(i+=`<rect x="${130+(l-70)*.5}" y="${l-10}" width="${460-(l-70)}" height="26" rx="10" fill="${r}"
                          opacity="0.2" filter="url(#vsoft)"/>`);i+=`<rect x="96" y="176" width="300" height="4" fill="${e.trim}" opacity="0.8"/>`;for(const l of[140,220,300])i+=`<rect x="${l}" y="172" width="14" height="22" rx="4" fill="${e.trim}"/>`,t&&(i+=`<path d="M${l+7} 194 L${l-50} ${zl.bottom} L${l+64} ${zl.bottom} Z" fill="${r}" opacity="0.13" filter="url(#vsoft)"/>`);return i}function Ih(e,n,t,r){const i=r==="night"||r==="evening";return`
    <rect x="${e-2}" y="0" width="4" height="${n-t}" fill="#3a3129"/>
    <path d="M${e-t} ${n} a${t} ${t*.92} 0 0 1 ${t*2} 0 Z" fill="${i?"#e8bd72":"#c9a877"}"/>
    ${[-.6,-.2,.2,.6].map(l=>`<path d="M${e+t*l} ${n} q${-t*l*.3} ${-t*.75} 0 ${-t*.92}" stroke="#00000033" stroke-width="2" fill="none"/>`).join("")}
    <ellipse cx="${e}" cy="${n}" rx="${t}" ry="4" fill="${i?"#fff0c8":"#d8cdb8"}"/>
    ${i?`<ellipse cx="${e}" cy="${n+90}" rx="${t*2.4}" ry="${t*1.9}" fill="url(#vwarm)"/>`:""}`}function zh(e,n,t,r,i){return`<path d="M${360-n} ${e} L${360+n} ${e} L${360+t} ${e+r} L${360-t} ${e+r} Z" fill="${i}"/>`}function _1(e,n,t,r){const i=r==="night"?"#4e4c49":r==="evening"?"#9c968c":"#a9a49c",l=O(i,.14);return`
    <ellipse cx="${e+t/2}" cy="${n+96}" rx="${t*.6}" ry="22" fill="#000" opacity="0.28" filter="url(#vsoft)"/>
    <rect x="${e}" y="${n}" width="${t}" height="56" rx="14" fill="${O(i,-.2)}"/>
    <rect x="${e+8}" y="${n+46}" width="${t-16}" height="48" rx="12" fill="${l}"/>
    <rect x="${e+8}" y="${n+46}" width="${t-16}" height="8" rx="4" fill="#ffffff" opacity="0.12"/>
    <rect x="${e-12}" y="${n+16}" width="30" height="80" rx="12" fill="${i}"/>
    <rect x="${e+t-18}" y="${n+16}" width="30" height="80" rx="12" fill="${O(i,-.3)}"/>
    ${[.2,.46,.72].map(o=>`<rect x="${(e+t*o).toFixed(0)}" y="${n+4}" width="44" height="42" rx="12" fill="${O(i,.16)}" transform="rotate(-6 ${(e+t*o+22).toFixed(0)} ${n+25})"/>`).join("")}`}function C1(e,n,t){const r=t==="night"?"#6b4a28":"#a9763c",i=t==="night"?"#5a3e22":"#8a5c2e",l=(o,s,a)=>`
    <g transform="translate(${o} ${s}) scale(${a})">
      <ellipse cx="0" cy="8" rx="44" ry="14" fill="#000" opacity="0.25" filter="url(#vsoft)"/>
      <path d="M-40 -6 q40 -22 80 0 q-40 16 -80 0z" fill="${i}"/>
      <path d="M-34 -8 q34 -60 68 0 q-34 -30 -68 0z" fill="${O(i,-.18)}"/>
      <path d="M-30 4 l-8 44 M30 4 l8 44 M-14 8 l-4 44 M14 8 l4 44" stroke="${O(i,-.25)}" stroke-width="7" stroke-linecap="round"/>
    </g>`;return`
    ${l(e-96,n-46,.82)}${l(e+4,n-46,.82)}${l(e+104,n-46,.82)}
    <ellipse cx="${e}" cy="${n+96}" rx="235" ry="34" fill="#000" opacity="0.3" filter="url(#vblur)"/>
    <path d="M${e-232} ${n+4} q232 -22 464 0 l-6 28 q-226 20 -452 0z" fill="${r}"/>
    <path d="M${e-232} ${n+4} q232 -22 464 0 l-4 10 q-228 -16 -456 0z" fill="${O(r,.2)}"/>
    <rect x="${e-176}" y="${n+30}" width="20" height="74" rx="6" fill="${O(r,-.25)}"/>
    <rect x="${e+156}" y="${n+30}" width="20" height="74" rx="6" fill="${O(r,-.25)}"/>
    ${l(e-120,n+132,1.06)}${l(e+120,n+132,1.06)}`}function j1(e,n,t,r,i,l){const o=t/2,s=`M${e-o} ${n} L${e-o} ${n-r+o} A${o} ${o} 0 0 1 ${e+o} ${n-r+o} L${e+o} ${n} Z`;return`
    <path d="${s}" fill="${l}"/>
    <path d="${s}" fill="none" stroke="${O(i.wall,-.2)}" stroke-width="14"/>
    <path d="M${e-o+10} ${n} L${e-o+10} ${n-r+o} A${o-10} ${o-10} 0 0 1 ${e+o-10} ${n-r+o}" fill="none" stroke="#000000" stroke-width="16" opacity="0.18"/>`}function Ar(e,n,t,r,i,l){let o=`<rect x="${e}" y="${n}" width="${t}" height="${r}" rx="4" fill="${i}"/>`;for(let s=1;s<l;s+=1)o+=`<rect x="${(e+t/l*s-1.5).toFixed(0)}" y="${n+4}" width="3" height="${r-8}" fill="#00000030"/>`;for(let s=0;s<l;s+=1)o+=`<rect x="${(e+t/l*(s+.5)-16).toFixed(0)}" y="${n+r-16}" width="32" height="4" rx="2" fill="#00000044"/>`;return o+`<rect x="${e}" y="${n}" width="${t}" height="5" fill="#ffffff" opacity="0.14"/>`}function N1(e,n){const t=eo(n,!1),r=n==="night"||n==="evening",i=392,l={x:130,y:248,w:460,h:442};return`
    <defs><clipPath id="vwin"><rect x="${l.x}" y="${l.y}" width="${l.w}" height="${l.h}"/></clipPath></defs>
    ${no(t,"oak")}
    <!-- 뒷벽을 통째로 뚫은 슬라이딩 통유리 -->
    <g clip-path="url(#vwin)">
      ${ar(e,n,i)}
      ${cr(e,n,i,640)}
      <rect x="${l.x}" y="612" width="${l.w}" height="${l.y+l.h-612}" fill="${O(e.deck,-.1)}"/>
      <rect x="${l.x}" y="600" width="${l.w}" height="6" fill="${t.trim}" opacity="0.8"/>
      ${[...Array(9).keys()].map(o=>`<rect x="${l.x+18+o*52}" y="600" width="4" height="30" fill="${t.trim}" opacity="0.7"/>`).join("")}
    </g>
    <path d="M${l.x} ${l.y+l.h} L${l.x+250} ${l.y} L${l.x+360} ${l.y} L${l.x+110} ${l.y+l.h} Z" fill="#ffffff" opacity="0.08"/>
    ${[0,1,2,3].map(o=>`<rect x="${l.x+l.w/4*o-4}" y="${l.y}" width="9" height="${l.h}" fill="${t.trim}"/>`).join("")}
    <rect x="${l.x}" y="${l.y}" width="${l.w}" height="${l.h}" fill="none" stroke="${t.trim}" stroke-width="12"/>

    ${S1(t,n)}
    <!-- 벽등 -->
    <circle cx="656" cy="404" r="26" fill="none" stroke="${t.trim}" stroke-width="7"/>
    <circle cx="656" cy="404" r="11" fill="${r?"#ffe7b4":"#d9d3c8"}"/>
    ${r?'<ellipse cx="656" cy="404" rx="120" ry="150" fill="url(#vwarm)"/>':""}

    <!--
      가구 배치. 화면 아래 28% 는 대화창이 덮으므로 소파·의자는 중간 높이에 두고,
      방석은 대화창 위로 살짝 걸치게 놓는다.
    -->
    ${zh(742,270,430,470,n==="night"?"#857f72":"#efe9dd")}
    ${_1(0,684,330,n)}
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
    ${dt(e,i)}`}function E1(e,n){const t=eo(n,!0),r=n==="night"||n==="evening",i=n==="night"?"#6b4a28":"#a9763c",l=n==="night"?"#b6b0a2":"#f0ebe0";return`
    ${no(t,"tile")}
    <!-- 상부장과 열린 선반 -->
    ${Ar(132,268,176,118,l,2)}
    ${Ar(316,268,100,118,i,1)}
    <rect x="440" y="296" width="150" height="7" rx="3" fill="${i}"/>
    <rect x="440" y="360" width="150" height="7" rx="3" fill="${i}"/>
    ${[458,492,526,558].map((o,s)=>`<rect x="${o}" y="${s%2?268:262}" width="20" height="${s%2?28:34}" rx="4" fill="${["#c9d6cc","#d8cbb4","#b9c4d2","#cdbfa6"][s]}"/>`).join("")}
    <path d="M572 316 q22 -34 44 -6 q-16 30 -44 6z" fill="#5d7c43"/>
    <path d="M596 316 q30 -22 40 10 q-26 16 -40 -10z" fill="#4e6b39"/>
    <!-- 창 -->
    <rect x="440" y="392" width="150" height="86" fill="${r?O(e.seaNear,.2):"#cfe0ec"}" stroke="${t.trim}" stroke-width="7"/>
    <rect x="512" y="392" width="6" height="86" fill="${t.trim}"/>
    <!-- 하부장 + 상판 -->
    <rect x="128" y="486" width="466" height="16" rx="4" fill="${O(l,.06)}"/>
    ${Ar(132,502,190,186,l,3)}
    ${Ar(330,502,126,186,i,2)}
    ${Ar(464,502,126,186,l,2)}
    <rect x="152" y="470" width="86" height="18" rx="4" fill="#2f3338"/>
    <!-- 가전 -->
    <rect x="476" y="416" width="104" height="62" rx="6" fill="#3a3d42"/>
    <rect x="486" y="426" width="62" height="42" rx="4" fill="${r?"#6b5a3a":"#7d8288"}"/>
    <rect x="344" y="432" width="42" height="46" rx="5" fill="#57534c"/>
    <circle cx="365" cy="452" r="10" fill="#8f9aa3"/>
    ${Ih(240,300,44,n)}
    ${C1(368,800,n)}
    ${r?'<ellipse cx="360" cy="700" rx="380" ry="300" fill="url(#vwarm)" opacity="0.65"/>':""}
    ${dt(e,300)}`}function M1(e,n){const t=eo(n,!0),r=n==="night"||n==="evening",i=O(t.wall,r?.22:-.1);return`
    ${no(t,"tile")}
    <!-- 아치 너머 방 -->
    ${j1(360,zl.bottom,216,330,t,i)}
    <rect x="286" y="560" width="148" height="140" fill="${O(i,-.12)}"/>
    <rect x="300" y="470" width="58" height="76" rx="4" fill="${r?"#8a7a4a":"#bcd2c4"}"/>
    <path d="M388 556 q22 -40 46 -8 q-18 34 -46 8z" fill="#4e6b39"/>
    <!-- 왼쪽 플라스터 벽난로 -->
    <rect x="104" y="386" width="152" height="24" rx="6" fill="${O(t.wall,.16)}"/>
    <rect x="116" y="410" width="128" height="290" fill="${O(t.wall,.1)}"/>
    <path d="M140 700 L140 530 A40 40 0 0 1 220 530 L220 700 Z" fill="${O(t.wall,-.55)}"/>
    ${[[158,636],[182,636],[206,636],[170,614],[194,614]].map(([l,o])=>`<ellipse cx="${l}" cy="${o}" rx="11" ry="11" fill="#7a5a34"/>`).join("")}
    <rect x="128" y="330" width="106" height="58" rx="4" fill="${O(t.wall,.24)}"/>
    <!-- 오른쪽 콘솔 -->
    <rect x="436" y="556" width="176" height="144" fill="${O(t.trim,-.1)}"/>
    <rect x="430" y="546" width="188" height="14" rx="4" fill="${O(t.trim,.18)}"/>
    <path d="M486 546 l-14 -62 h60 l-14 62z" fill="${r?"#ffe6b0":"#e6dfd0"}"/>
    <rect x="510" y="512" width="46" height="34" rx="4" fill="#8d3a33"/>
    ${Ih(196,264,52,n)}
    ${zh(880,200,300,380,n==="night"?"#6a6252":"#ece4d2")}
    ${r?'<ellipse cx="300" cy="640" rx="360" ry="300" fill="url(#vwarm)" opacity="0.6"/>':""}
    ${dt(e,300)}`}function L1(e,n){const t=eo(n,!0),r=n==="night"||n==="evening",i=380;return`
    <defs><clipPath id="vwin"><rect x="152" y="268" width="228" height="292"/></clipPath></defs>
    ${no(t,"oak")}
    <g clip-path="url(#vwin)">
      ${ar(e,n,i)}
      ${cr(e,n,i,560)}
    </g>
    <rect x="152" y="268" width="228" height="292" fill="none" stroke="${t.trim}" stroke-width="12"/>
    <rect x="262" y="268" width="8" height="292" fill="${t.trim}"/>
    <rect x="152" y="410" width="228" height="7" fill="${t.trim}"/>
    <!-- 커튼 -->
    <path d="M132 250 q18 160 0 320 h44 q-16 -160 0 -320z" fill="${O(t.wall,.2)}"/>
    <path d="M400 250 q-18 160 0 320 h-44 q16 -160 0 -320z" fill="${O(t.wall,.2)}"/>
    <!-- 책상 -->
    <rect x="430" y="536" width="176" height="14" rx="4" fill="${t.trim}"/>
    <rect x="442" y="550" width="12" height="150" fill="${O(t.trim,-.2)}"/>
    <rect x="582" y="550" width="12" height="150" fill="${O(t.trim,-.2)}"/>
    <rect x="452" y="486" width="76" height="50" rx="4" fill="#2f3338"/>
    <path d="M556 536 l-10 -44 h40 l-10 44z" fill="${r?"#ffe6b0":"#e6dfd0"}"/>
    <!-- 침대 -->
    <ellipse cx="330" cy="1092" rx="330" ry="52" fill="#000" opacity="0.3" filter="url(#vblur)"/>
    <rect x="60" y="836" width="540" height="40" rx="10" fill="${O(t.trim,-.1)}"/>
    <rect x="40" y="876" width="580" height="180" rx="16" fill="${n==="night"?"#6d6a5e":"#efe9db"}"/>
    <rect x="40" y="876" width="580" height="46" rx="16" fill="${n==="night"?"#82806f":"#fbf7ee"}"/>
    <rect x="90" y="800" width="180" height="70" rx="16" fill="${n==="night"?"#8d8a79":"#fdfaf3"}"/>
    <rect x="300" y="806" width="160" height="64" rx="16" fill="${n==="night"?"#7f7c6c":"#f4efe3"}"/>
    ${r?'<ellipse cx="520" cy="560" rx="260" ry="220" fill="url(#vwarm)" opacity="0.7"/>':""}
    ${dt(e,i)}`}function D1(e,n){const t=n==="night"||n==="evening",r=430,i=n==="night"?"#15181e":"#33373e";return`
    ${ar(e,n,r)}
    ${cr(e,n,r,790)}
    <!-- 난간 -->
    <rect x="0" y="690" width="${H}" height="6" fill="${i}"/>
    ${[...Array(13).keys()].map(l=>`<rect x="${12+l*56}" y="690" width="5" height="96" fill="${i}" opacity="0.9"/>`).join("")}
    <rect x="0" y="780" width="${H}" height="6" fill="${i}"/>
    ${Ka(0,786,H,120)}
    <path d="M0 906 L${H} 906 L${H} ${ce} L0 ${ce} Z" fill="${O(e.deck,-.12)}"/>
    ${[...Array(15).keys()].map(l=>`<path d="M${l*52} 906 L${(l*52-H/2)*1.5+H/2} ${ce}" stroke="#00000055" stroke-width="3"/>`).join("")}
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
    ${dt(e,r)}`}function A1(e,n,t){switch(e){case"yard":return`
        ${ar(n,t,600)}
        ${cr(n,t,600,900)}
        ${Mu(n,t)}
        ${Eu(n,900)}
        <rect x="286" y="742" width="120" height="34" rx="4" fill="${O(n.deck,-.3)}"/>
        <text x="346" y="766" font-size="21" text-anchor="middle" fill="#f0e2c8" font-family="serif"
              letter-spacing="3">하숙</text>
        ${dt(n,600)}`;case"beach":{const i=O(n.grassBottom,t==="night"?-.1:.05);return`
        ${ar(n,t,470)}
        ${cr(n,t,470,812)}
        <!-- 왼쪽 방파제와 등대 -->
        <rect x="0" y="556" width="250" height="16" rx="5" fill="${O(n.wallDark,.16)}" opacity="0.9"/>
        <rect x="236" y="502" width="24" height="62" fill="${O(n.wallLight,-.06)}"/>
        <rect x="233" y="486" width="30" height="18" rx="4" fill="#b8402f"/>
        <circle cx="248" cy="495" r="6" fill="${n.sun}" opacity="${t==="night"?.95:.6}"/>
        <!-- 오른쪽 언덕과 그 위의 집 -->
        <path d="M418 742 C486 664 560 646 640 656 L${H} 668 L${H} 812 L418 812 Z" fill="${i}"/>
        <g transform="translate(452 450) scale(0.3)" opacity="0.96">${Mu(n,t)}</g>
        <rect x="400" y="470" width="${H-400}" height="300" fill="${n.haze}" opacity="${(n.hazeAmt*1.6).toFixed(2)}" filter="url(#vblur2)"/>
        ${v1(812)}
        ${dt(n,470)}`}case"maru":return N1(n,t);case"kitchen":return E1(n,t);case"hallway":return M1(n,t);case"room":return L1(n,t);case"rooftop":return D1(n,t);default:{const i=t==="night",l=i?"#0b0d11":"#23262c";return`
        ${ar(n,t,520)}
        ${cr(n,t,520,796)}
        <ellipse cx="372" cy="792" rx="250" ry="34" fill="#000000" opacity="${n.shadow}" filter="url(#vblur)"/>
        <path d="M190 552 L372 404 L554 552 L554 790 L190 790 Z" fill="url(#vwalld)"/>
        <path d="M180 558 L372 396 L564 558 L554 570 L372 420 L190 570 Z" fill="${l}"/>
        <rect x="190" y="552" width="364" height="238" filter="url(#vstucco)" opacity="0.12" style="mix-blend-mode:overlay"/>
        ${Gr(244,606,176,146,t,2)}
        <rect x="452" y="640" width="62" height="150" fill="${O(n.wallDark,i?.12:0)}" stroke="${l}" stroke-width="4"/>
        <circle cx="462" cy="716" r="4" fill="${i?"#ffd89a":"#c8b48a"}"/>
        ${Ka(152,790,440,44)}
        <rect x="152" y="832" width="440" height="52" fill="${O(n.deck,-.44)}"/>
        ${i?'<ellipse cx="332" cy="690" rx="240" ry="150" fill="url(#vwarm)"/>':""}
        ${Eu(n,872)}
        ${dt(n,520)}`}}}function Lu(e,n,t){switch(e){case"yard":case"beach":case"maru":case"annex":case"kitchen":case"hallway":case"room":case"rooftop":return A1(e,Dh[t],t);case"cvs":return`
        <rect x="0" y="760" width="${H}" height="${ce-760}" fill="#6b6b6b"/>
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
        <rect x="0" y="700" width="${H}" height="${ce-700}" fill="#5d7a4a"/>
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
        ${Bs(t)}
        <rect x="0" y="780" width="${H}" height="${ce-780}" fill="#55524c"/>
        <rect x="0" y="360" width="280" height="430" fill="${n.wall}"/>
        <rect x="440" y="320" width="280" height="470" fill="${n.wall}" opacity="0.92"/>
        <rect x="60" y="440" width="70" height="90" fill="#cfe4f2" opacity="0.7"/>
        <rect x="170" y="440" width="70" height="90" fill="#cfe4f2" opacity="0.5"/>
        <rect x="500" y="420" width="70" height="90" fill="#cfe4f2" opacity="0.7"/>
        <rect x="352" y="420" width="16" height="360" fill="#3f3f3f"/>
        <circle cx="360" cy="410" r="30" fill="${n.light}" opacity="0.95"/>
        <ellipse cx="360" cy="470" rx="200" ry="150" fill="url(#lamp)"/>`;case"festival":return`
        ${Bs(t)}
        <rect x="0" y="780" width="${H}" height="${ce-780}" fill="#4a4a48"/>
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
        <rect x="0" y="800" width="${H}" height="${ce-800}" fill="#59575a"/>
        <rect x="0" y="300" width="${H}" height="500" fill="${n.wall}" opacity="0.9"/>
        <rect x="200" y="420" width="320" height="380" rx="8" fill="#2f3a44"/>
        <rect x="230" y="450" width="260" height="60" rx="6" fill="#2f7fbd"/>
        <text x="360" y="494" font-size="34" text-anchor="middle" fill="#ffffff" font-family="sans-serif">역</text>
        <path d="M240 540 h240 M240 600 h240 M240 660 h240" stroke="#59646e" stroke-width="10"/>
        <rect x="60" y="640" width="14" height="160" fill="#3f3f3f"/>
        <circle cx="67" cy="630" r="24" fill="${n.light}" opacity="0.9"/>
        <rect x="646" y="640" width="14" height="160" fill="#3f3f3f"/>
        <circle cx="653" cy="630" r="24" fill="${n.light}" opacity="0.9"/>`}}function I1(e,n){const t=y1[n],r=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${H} ${ce}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${m1[e]} ${n}">`;return x1.has(e)?b1(`${r}
  ${w1(Dh[n])}
  ${Lu(e,t,n)}
</svg>`):`${r}
  ${$1(t)}
  ${Lu(e,t,n)}
  <rect width="${H}" height="${ce}" fill="#0a0d18" opacity="${t.haze}"/>
</svg>`}function z1(e,n){return`data:image/svg+xml;utf8,${encodeURIComponent(I1(e,n))}`}const Ph=new Set(["dabin.webp","dabin_face.webp","dabin_face_smile.webp","dabin_face_surprise.webp","dabin_smile.webp","dabin_surprise.webp","dohee.webp","dohee_face.webp","dohee_face_smile.webp","dohee_face_surprise.webp","dohee_smile.webp","dohee_surprise.webp","eunseo.webp","eunseo_face.webp","eunseo_face_smile.webp","eunseo_face_surprise.webp","eunseo_smile.webp","eunseo_surprise.webp","gaeun.webp","gaeun_face.webp","gaeun_face_smile.webp","gaeun_face_surprise.webp","gaeun_smile.webp","gaeun_surprise.webp","harin.webp","harin_face.webp","harin_face_smile.webp","harin_face_surprise.webp","harin_smile.webp","harin_surprise.webp","hayeong.webp","hayeong_face.webp","hayeong_face_smile.webp","hayeong_face_surprise.webp","hayeong_smile.webp","hayeong_surprise.webp","jiwoo.webp","jiwoo_face.webp","jiwoo_face_smile.webp","jiwoo_face_surprise.webp","jiwoo_smile.webp","jiwoo_surprise.webp","minji.webp","minji_face.webp","minji_face_smile.webp","minji_face_surprise.webp","minji_smile.webp","minji_surprise.webp","narae.webp","narae_face.webp","narae_face_smile.webp","narae_face_surprise.webp","narae_smile.webp","narae_surprise.webp","nayun.webp","nayun_face.webp","nayun_face_smile.webp","nayun_face_surprise.webp","nayun_smile.webp","nayun_surprise.webp","sea.webp","sea_face.webp","sea_face_smile.webp","sea_face_surprise.webp","sea_smile.webp","sea_surprise.webp","seyeon.webp","seyeon_face.webp","seyeon_face_smile.webp","seyeon_face_surprise.webp","seyeon_smile.webp","seyeon_surprise.webp","sua.webp","sua_face.webp","sua_face_smile.webp","sua_face_surprise.webp","sua_smile.webp","sua_surprise.webp","yerin.webp","yerin_face.webp","yerin_face_smile.webp","yerin_face_surprise.webp","yerin_smile.webp","yerin_surprise.webp","yoon.webp","yoon_face.webp","yoon_face_smile.webp","yoon_face_surprise.webp","yoon_smile.webp","yoon_surprise.webp"]),P1=new Set(["title.webp"]),T1="./";function Th(e,n){return`${T1}art/${e}/${n}`}const B1={smile:["smile"],win:["win","smile"],shy:["shy","smile"],surprise:["surprise"],lose:["lose","surprise"],sulk:["sulk","surprise"],serious:["serious"]};function to(e,n,t){const r=n==="face"?"_face":"",l=[...(t&&t!=="normal"?B1[t]??[t]:[]).map(o=>`${e}${r}_${o}.webp`),`${e}${r}.webp`,n==="face"?`${e}.webp`:null].filter(o=>o!==null);for(const o of l)if(Ph.has(o))return Th("char",o);return null}function R1(e){return Ph.has(`${e}.webp`)}function F1(e){const n=`${e}.webp`;return P1.has(n)?Th("key",n):null}let ro="classic";function O1(e){ro=e}function Ya({className:e=""}){return c.jsxs("div",{className:`glogo ${e}`,children:[c.jsxs("svg",{className:"glogo-house",viewBox:"0 0 40 34","aria-hidden":"true",children:[c.jsx("path",{d:"M20 2 L38 15 L34 15 L34 32 L6 32 L6 15 L2 15 Z",fill:"#f2c341",stroke:"#3a1206",strokeWidth:"2.6",strokeLinejoin:"round"}),c.jsx("rect",{x:"14",y:"19",width:"12",height:"13",fill:"#b8321f",stroke:"#3a1206",strokeWidth:"2"})]}),c.jsx("span",{className:"glogo-a","data-text":"하숙생",children:"하숙생"}),c.jsx("span",{className:"glogo-b","data-text":"맞고",children:"맞고"}),c.jsxs("svg",{className:"glogo-seal",viewBox:"0 0 26 26","aria-hidden":"true",children:[c.jsx("rect",{x:"1.5",y:"1.5",width:"23",height:"23",rx:"3",fill:"#c9301f",stroke:"#3a1206",strokeWidth:"2.4"}),c.jsx("text",{x:"13",y:"19",fontSize:"15",textAnchor:"middle",fill:"#ffe9c0",fontFamily:"serif",fontWeight:"bold",children:"光"})]})]})}function Rs(e){return Al(e,{skin:ro})}function Rn({tenant:e,expression:n="normal",outfit:t=0,shot:r="full",className:i,style:l}){const o=Ts({tenant:e,expression:n,outfit:t}),s=to(e.id,r,n);return c.jsx("img",{className:`${i??""} ${s?"is-photo":"is-drawn"}`.trim(),style:l,src:s??o,alt:`${e.name} (${n})`,onError:a=>{const d=a.currentTarget;d.src!==o&&(d.src=o)},draggable:!1})}function Xa({src:e,dim:n=.55}){return c.jsx("div",{className:"photo-bed",style:{backgroundImage:`url("${e}")`,"--bed-dim":n}})}function Si({bg:e,time:n}){return c.jsx("div",{className:"bg-layer",style:{backgroundImage:`url("${z1(e,n)}")`}})}function Zi({card:e,small:n,selectable:t,chosen:r,zone:i,hidden:l,onClick:o}){const s=["card",n?"sm":"",t?"selectable":"",r?"chosen":""].filter(Boolean).join(" ");return c.jsx("img",{className:s,"data-cid":e.id,"data-zone":i??"field","data-month":e.month,style:l?{visibility:"hidden"}:void 0,src:Al(e,{skin:ro}),alt:e.name,onClick:t?o:void 0,draggable:!1})}function Oo({small:e}){return c.jsx("img",{className:`card ${e?"sm":""}`,src:Jg({skin:ro}),alt:"뒷면",draggable:!1})}function Du({value:e,max:n,kind:t}){const r=Math.max(0,Math.min(100,e/n*100));return c.jsx("div",{className:`meter ${t??""}`,children:c.jsx("i",{style:{width:`${r}%`}})})}function Au({on:e,onToggle:n}){return c.jsx("button",{className:`switch ${e?"on":""}`,onClick:n,"aria-pressed":e,children:c.jsx("i",{})})}function G1(){const e=new Date().getHours();return e<11?"morning":e<18?"evening":"night"}const Bh={spring:"봄",summer:"여름",autumn:"가을",winter:"겨울"},U1=[["matchStart","승부 시작"],["go","고"],["stop","스톱"],["ppeok","뻑"],["sseulVictim","쓸 당함"],["win","승리"],["lose","패배"],["affection","호감 이벤트"]];function V1({data:e,onBack:n}){const[t,r]=x.useState("profile"),[i,l]=x.useState(Ze[0]),o=e.tenants[i.id],s=(o?.clearedStage??0)>0||(o?.wins??0)>0;return c.jsx("div",{className:"screen",style:{background:"var(--wood-dark)"},children:c.jsxs("div",{className:"layer",children:[c.jsxs("div",{className:"topbar",children:[c.jsx("button",{className:"iconbtn",onClick:n,"aria-label":"뒤로",children:"←"}),c.jsx("h1",{children:"도감"})]}),c.jsxs("div",{className:"tabs",children:[c.jsx("button",{className:t==="profile"?"active":"",onClick:()=>r("profile"),children:"프로필"}),c.jsx("button",{className:t==="cg"?"active":"",onClick:()=>r("cg"),children:"CG"}),c.jsx("button",{className:t==="lines"?"active":"",onClick:()=>r("lines"),children:"대사"})]}),c.jsx("div",{style:{display:"flex",gap:6,overflowX:"auto",padding:"8px 12px"},children:Ze.map(a=>c.jsx("button",{className:"btn",style:{padding:"6px 10px",fontSize:12,flex:"0 0 auto",filter:i.id===a.id?"none":"brightness(0.7)"},onClick:()=>l(a),children:a.name},a.id))}),c.jsxs("div",{className:"panel",children:[t==="profile"&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"section",style:{display:"flex",gap:12},children:[c.jsx(Rn,{tenant:i,expression:"normal",outfit:0,style:{width:96}}),c.jsxs("div",{style:{flex:1,fontSize:13,lineHeight:1.7},children:[c.jsxs("div",{style:{fontSize:18,fontWeight:800},children:[i.name," ",c.jsxs("small",{style:{fontSize:12},children:["“",i.nickname,"”"]})]}),c.jsxs("div",{style:{color:"var(--paper-dim)"},children:[i.age,"세 · ",i.job,c.jsx("br",{}),i.room," · ",Bh[i.season],c.jsx("br",{}),i.personality.join(" / ")]})]})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"이 집에 온 이유"}),c.jsx("div",{style:{fontSize:13,lineHeight:1.7,color:"var(--paper)"},children:i.backstory})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"맞고 스타일"}),c.jsx("div",{style:{fontSize:13,lineHeight:1.6},children:i.styleLabel}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"전적"}),c.jsxs("span",{children:[o?.wins??0,"승 ",o?.losses??0,"패"]})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"호감도"}),c.jsxs("span",{children:[o?.affection??0," / 100"]})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"클리어 단계"}),c.jsxs("span",{children:[o?.clearedStage??0," / 10"]})]})]}),c.jsxs("div",{className:"section",children:[c.jsxs("h3",{children:["표정 ",_u.length,"종"]}),c.jsx("div",{className:"expr-grid",children:_u.map(a=>c.jsxs("figure",{children:[c.jsx("img",{src:Ts({tenant:i,expression:a,outfit:0}),alt:a}),c.jsx("figcaption",{children:Lh[a]})]},a))})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"의상 3종"}),c.jsx("div",{className:"expr-grid",style:{gridTemplateColumns:"repeat(3, 1fr)"},children:[0,1,2].map(a=>c.jsxs("figure",{children:[c.jsx("img",{src:Ts({tenant:i,expression:"smile",outfit:a}),alt:`의상 ${a}`}),c.jsx("figcaption",{children:["평상복","외출복","특별 이벤트복"][a]})]},a))})]})]}),t==="cg"&&c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"해금 CG"}),c.jsxs("div",{className:"cg-grid",children:[Ze.map(a=>{const d=`${a.id}_ending`,f=e.unlockedCG.includes(d);return c.jsx("div",{className:`cg-cell ${f?"unlocked":""}`,children:f?c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:800,fontSize:13},children:a.name}),c.jsx("div",{style:{fontSize:10,opacity:.75,marginTop:4},children:a.events[9].title})]}):c.jsx("span",{children:"🔒 10단계 클리어"})},a.id)}),c.jsx("div",{className:`cg-cell ${e.unlockedCG.includes("ending_group")?"unlocked":""}`,children:e.unlockedCG.includes("ending_group")?c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:800,fontSize:13},children:"마루의 단체 사진"}),c.jsx("div",{style:{fontSize:10,opacity:.75,marginTop:4},children:"히든 엔딩"})]}):c.jsx("span",{children:"🔒 전원 10단계"})})]})]}),t==="lines"&&c.jsxs(c.Fragment,{children:[!s&&c.jsxs("div",{className:"empty",children:[i.name,"와(과) 아직 승부한 적이 없습니다.",c.jsx("br",{}),"한 판 이상 치르면 대사가 열립니다."]}),s&&U1.map(([a,d])=>c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:d}),["low","mid","high"].map(f=>{const h=f==="low"||f==="mid"&&(o?.affection??0)>30||f==="high"&&(o?.affection??0)>70;return c.jsxs("div",{style:{marginBottom:8},children:[c.jsx("div",{style:{fontSize:11,color:"var(--lamp-dim)",marginBottom:3},children:{low:"호감 0~30",mid:"호감 31~70",high:"호감 71~100"}[f]}),h?i.lines[a][f].map((p,$)=>c.jsxs("div",{style:{fontSize:12.5,lineHeight:1.6,opacity:.9},children:["· ",p]},$)):c.jsx("div",{style:{fontSize:12,color:"var(--paper-dim)"},children:"🔒 호감도가 더 필요합니다"})]},f)})]},a))]})]})]})})}const Iu={affection:0,clearedStage:0,dating:!1};function H1({data:e,onPick:n,onGallery:t,onShop:r,onSettings:i,onHidden:l,onAllowance:o,allClearedFlag:s}){const a=jh(e),d=G1(),f=x.useMemo(()=>{const _=Ze.filter(S=>sr(S,a));return(_.find(S=>(e.tenants[S.id]?.clearedStage??0)<10)??_[0]??Ze[0]).id},[]),[h,p]=x.useState(f),$=Ze.find(_=>_.id===h)??Ze[0],v=e.tenants[$.id]??Iu,k=sr($,a),F=v.clearedStage>=10,m=Math.min(10,v.clearedStage+1),g=bh($),y=e.points>=g,w=Va(v.affection),N=x.useMemo(()=>{const _=$.lines.matchStart[w];return _[($.order+v.clearedStage)%_.length]},[$,w,v.clearedStage]),L=k?to($.id,"full"):null;return c.jsxs("div",{className:"screen",children:[L?c.jsx(Xa,{src:L}):c.jsx(Si,{bg:"maru",time:d}),c.jsxs("div",{className:"layer lobby",children:[c.jsxs("div",{className:"rail",children:[c.jsx(Ya,{className:"rail-logo"}),c.jsxs("span",{className:"purse",children:[c.jsx("i",{"aria-hidden":"true",children:"🪙"}),e.points.toLocaleString()]}),c.jsx("button",{className:"iconbtn",onClick:r,"aria-label":"상점",children:"🏮"}),c.jsx("button",{className:"iconbtn",onClick:t,"aria-label":"도감",children:"📖"}),c.jsx("button",{className:"iconbtn",onClick:i,"aria-label":"설정",children:"⚙"})]}),Nh(e)&&c.jsxs("div",{className:"hint-box",children:["포인트가 모자라 승부를 걸 수 없습니다. 포인트는 승부로만 버는 터라 이대로는 진행이 막힙니다.",c.jsxs("button",{className:"btn primary wide",style:{marginTop:10,fontSize:14},onClick:o,children:["할머니 비상금 봉투 찾기 (+",Eh,"P)"]})]}),s&&c.jsxs("div",{className:"hint-box",style:{cursor:"pointer"},onClick:l,children:["전원 10단계 클리어! ",c.jsx("strong",{children:"마루의 단체 사진"}),"을 보러 가기 ▸"]}),c.jsxs("div",{className:"stage-wrap",children:[c.jsxs("div",{className:"bubble",children:[c.jsxs("span",{className:"bubble-who",children:["♡ ",$.name]}),k?N:Su($)]},$.id),c.jsx(Rn,{className:`stage-face ${k?"":"locked"}`,tenant:$,expression:k&&F?"smile":"normal",outfit:F?2:0}),c.jsxs("div",{className:"plate",children:[c.jsxs("div",{className:"plate-name",children:[$.name,c.jsx("span",{className:"badge season",children:Bh[$.season]}),v.dating&&c.jsx("span",{className:"badge",children:"연애중"})]}),c.jsxs("div",{className:"plate-sub",children:[$.nickname," · ",$.age,"세 · ",$.job," · ",$.room]}),c.jsx("div",{className:"plate-style",children:$.styleLabel}),k?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"meter-row",children:[c.jsx("span",{style:{width:30},children:"호감"}),c.jsx(Du,{value:v.affection,max:100}),c.jsx("span",{style:{width:34,textAlign:"right"},children:v.affection})]}),c.jsxs("div",{className:"meter-row",children:[c.jsx("span",{style:{width:30},children:"단계"}),c.jsx(Du,{value:v.clearedStage,max:10,kind:"stage"}),c.jsxs("span",{style:{width:34,textAlign:"right"},children:[v.clearedStage,"/10"]})]}),c.jsx("div",{className:"plate-terms",children:F?c.jsx(c.Fragment,{children:"모든 단계 클리어 · 커플 모드로 다시 승부"}):c.jsxs(c.Fragment,{children:[c.jsxs("b",{children:[m,"단계"]})," · 점당 ",c.jsxs("b",{className:"lamp",children:[$.rate,"P"]})," · 클리어 보너스"," ",c.jsxs("b",{className:"lamp",children:[kh($,m),"P"]}),c.jsx("span",{className:`stake ${y?"":"short"}`,children:y?`최소 ${g.toLocaleString()}P 필요`:`${g.toLocaleString()}P 부족`})]})})]}):c.jsx("div",{className:"plate-terms",children:c.jsxs("span",{className:"short",children:["🔒 ",Su($)]})})]})]}),c.jsx("button",{className:"btn gold wide sit",disabled:!k,onClick:()=>k&&n($),children:F?"한 판 더 두기":`${m}단계 · 한 판 두기`}),c.jsx("div",{className:"roster",role:"tablist","aria-label":"하숙생",children:Ze.map(_=>{const S=e.tenants[_.id]??Iu,A=sr(_,a);return c.jsxs("button",{role:"tab","aria-selected":_.id===h,className:`chip ${_.id===h?"on":""} ${A?"":"locked"}`,onClick:()=>p(_.id),children:[c.jsxs("span",{className:"chip-shot",children:[c.jsx(Rn,{tenant:_,expression:"normal",outfit:S.clearedStage>=10?2:0}),!A&&c.jsx("i",{className:"chip-lock",children:"🔒"}),A&&c.jsxs("em",{className:"chip-stage",children:[S.clearedStage,"/10"]})]}),c.jsx("b",{children:A?`♡ ${_.name}`:"???"}),c.jsx("small",{children:A?_.nickname:"잠김"})]},_.id)})})]})]})}const zu={1:"송학",2:"매조",3:"벚꽃",4:"흑싸리",5:"난초",6:"모란",7:"홍싸리",8:"공산",9:"국화",10:"단풍",11:"오동",12:"비"},Z1={1:[{kind:"gwang",name:"송학 광"},{kind:"tti",tti:"hong",name:"송학 홍단"},{kind:"pi",piValue:1,name:"송학 피"},{kind:"pi",piValue:1,name:"송학 피"}],2:[{kind:"yeol",isGodori:!0,name:"매조 휘파람새"},{kind:"tti",tti:"hong",name:"매조 홍단"},{kind:"pi",piValue:1,name:"매조 피"},{kind:"pi",piValue:1,name:"매조 피"}],3:[{kind:"gwang",name:"벚꽃 광"},{kind:"tti",tti:"hong",name:"벚꽃 홍단"},{kind:"pi",piValue:1,name:"벚꽃 피"},{kind:"pi",piValue:1,name:"벚꽃 피"}],4:[{kind:"yeol",isGodori:!0,name:"흑싸리 두견새"},{kind:"tti",tti:"cho",name:"흑싸리 초단"},{kind:"pi",piValue:1,name:"흑싸리 피"},{kind:"pi",piValue:1,name:"흑싸리 피"}],5:[{kind:"yeol",name:"난초 다리"},{kind:"tti",tti:"cho",name:"난초 초단"},{kind:"pi",piValue:1,name:"난초 피"},{kind:"pi",piValue:1,name:"난초 피"}],6:[{kind:"yeol",name:"모란 나비"},{kind:"tti",tti:"cheong",name:"모란 청단"},{kind:"pi",piValue:1,name:"모란 피"},{kind:"pi",piValue:1,name:"모란 피"}],7:[{kind:"yeol",name:"홍싸리 멧돼지"},{kind:"tti",tti:"cho",name:"홍싸리 초단"},{kind:"pi",piValue:1,name:"홍싸리 피"},{kind:"pi",piValue:1,name:"홍싸리 피"}],8:[{kind:"gwang",name:"공산 광"},{kind:"yeol",isGodori:!0,name:"공산 기러기"},{kind:"pi",piValue:1,name:"공산 피"},{kind:"pi",piValue:1,name:"공산 피"}],9:[{kind:"yeol",isGukjin:!0,name:"국화 국진"},{kind:"tti",tti:"cheong",name:"국화 청단"},{kind:"pi",piValue:1,name:"국화 피"},{kind:"pi",piValue:1,name:"국화 피"}],10:[{kind:"yeol",name:"단풍 사슴"},{kind:"tti",tti:"cheong",name:"단풍 청단"},{kind:"pi",piValue:1,name:"단풍 피"},{kind:"pi",piValue:1,name:"단풍 피"}],11:[{kind:"gwang",name:"오동 광"},{kind:"pi",piValue:2,name:"오동 쌍피"},{kind:"pi",piValue:1,name:"오동 피"},{kind:"pi",piValue:1,name:"오동 피"}],12:[{kind:"gwang",isBiGwang:!0,name:"비광"},{kind:"yeol",name:"비 제비"},{kind:"tti",tti:"bi",name:"비띠"},{kind:"pi",piValue:2,name:"비 쌍피"}]};function Rh(){const e=[];for(let n=1;n<=12;n++)Z1[n].forEach((t,r)=>{e.push({id:`m${n}-${r}`,month:n,kind:t.kind,tti:t.tti,isBiGwang:t.isBiGwang,isGodori:t.isGodori,isGukjin:t.isGukjin,piValue:t.piValue,name:t.name})});return e}function Q1(e){const n=[];for(let t=0;t<e.bonusPiCount;t++)n.push({id:`bonus-${t}`,month:0,kind:"pi",piValue:e.bonusPiValue,isBonus:!0,name:`보너스 ${e.bonusPiValue}피`});return n}function W1(e){return[...Rh(),...Q1(e)]}function Fh(e,n){const t={gwang:[],yeol:[],tti:[],pi:[]};for(const r of e){if(r.isGukjin&&n){t.pi.push(r);continue}switch(r.kind){case"gwang":t.gwang.push(r);break;case"yeol":t.yeol.push(r);break;case"tti":t.tti.push(r);break;case"pi":t.pi.push(r);break}}return t}function Oh(e,n){return e.reduce((t,r)=>r.isGukjin?t+(n?2:0):t+(r.piValue??1),0)}function q1(e,n){const t=e.length;return t>=5?{score:15,label:"오광"}:t===4?{score:4,label:"사광"}:t===3?e.some(i=>i.isBiGwang)&&n.biGwangPenalty?{score:2,label:"비삼광"}:{score:3,label:"삼광"}:{score:0,label:null}}function K1(e,n){const t=[];let r=0;const i=e.filter(a=>a.tti==="hong").length,l=e.filter(a=>a.tti==="cheong").length,o=e.filter(a=>a.tti==="cho").length;i>=3&&(r+=3,t.push("홍단")),l>=3&&(r+=3,t.push("청단")),o>=3&&(r+=3,t.push("초단"));const s=e.length;return n.ttiScoring==="standard"?s>=5&&(r+=s-4,t.push(`띠 ${s}장`)):s>=5&&(r+=5+(s-5),t.push(`띠 ${s}장`)),{score:r,labels:t}}function Y1(e){const n=[];let t=0;e.filter(l=>l.isGodori).length>=3&&(t+=5,n.push("고도리"));const i=e.length;return i>=5&&(t+=i-4,n.push(`열끗 ${i}장`)),{score:t,labels:n}}function X1(e,n){const t=Oh(e,n);return{score:t>=10?t-9:0,count:t}}function J1(e){const n=new Map;for(const t of e)t.month!==0&&n.set(t.month,(n.get(t.month)??0)+1);for(const[t,r]of n)if(r>=4)return t;return null}function Gh(e){const n=new Map;for(const t of e)t.month!==0&&n.set(t.month,(n.get(t.month)??0)+1);return[...n.entries()].filter(([,t])=>t===3).map(([t])=>t)}function gt(e,n){const t=n.gukjinOption&&e.gukjinUse==="ssangpi",r=Fh([...e.captured.gwang,...e.captured.yeol,...e.captured.tti,...e.captured.pi],t),i=q1(r.gwang,n),l=K1(r.tti,n),o=Y1(r.yeol),s=X1(r.pi,t),a=i.score+l.score+o.score+s.score;return{gwangScore:i.score,gwangLabel:i.label,ttiScore:l.score,ttiLabels:l.labels,yeolScore:o.score,yeolLabels:o.labels,piScore:s.score,piCount:s.count,base:a,chongtong:null}}function e2(e,n,t,r=1){const i=e[n],l=e[n===0?1:0],o=gt(i,t);gt(l,t);const s=[];let a=0,d=1;const f=i.goCount;f>=1&&(a+=1),f>=2&&(a+=1),f>=1&&s.push(`${f}고`),t.goMultiplierFrom3&&f>=3&&(d*=Math.pow(2,f-2),s.push(`고 배수 x${Math.pow(2,f-2)}`));let h=o.base+a;const p=t.gukjinOption&&l.gukjinUse==="ssangpi",$=Oh(Fh([...l.captured.pi],p).pi,p);return t.piBak&&o.piScore>0&&$<=t.piBakThreshold&&(d*=2,s.push("피박")),t.gwangBak&&o.gwangScore>0&&l.captured.gwang.length===0&&(d*=2,s.push("광박")),t.mengBak&&i.captured.yeol.length>=t.mengBakYeolThreshold&&l.captured.yeol.length===0&&(d*=2,s.push("멍박")),t.heundeulgi&&i.shaken.length>0&&(d*=Math.pow(2,i.shaken.length),s.push(`흔들기 x${Math.pow(2,i.shaken.length)}`)),t.bomb&&i.bombCount>0&&(d*=Math.pow(2,i.bombCount),s.push(`폭탄 x${Math.pow(2,i.bombCount)}`)),t.goBak&&l.goCount>0&&(d*=2,s.push("고박")),r>1&&(d*=r,s.push(`나가리 x${r}`)),h=h*d,{winner:n,breakdown:o,base:o.base,goCount:f,goBonus:a,multiplier:d,reasons:s,total:h}}function n2(e,n,t,r=1){return{winner:e,breakdown:null,base:10,goCount:0,goBonus:0,multiplier:r,reasons:[`총통 (${n}월)`],total:10*r}}function Uh(){return{winner:null,breakdown:null,base:0,goCount:0,goBonus:0,multiplier:1,reasons:["나가리"],total:0}}const Qi=e=>e==="pile-me"||e==="pile-opp";function t2(e){return[...e].sort((n,t)=>{const r=n.forcedWait??1/0,i=t.forcedWait??1/0;return r!==i?r-i:n.fromX-t.fromX})}const Wi=300,Pu=940,r2=420,i2=165,Tu=900,Bu=300,Ru=1200,qi=2e3,Ki=.45,l2=1280;function Ir(e,n=0){return 40+Math.round(e/5)+n}const o2=0,s2=2,a2=4,Fu=6;function zr(e,n,t=60){const r=e.closest(".fslot")??e,i=r.style.zIndex;r.style.zIndex=String(t);const l=()=>{r.style.zIndex=i};n.addEventListener("finish",l),n.addEventListener("cancel",l)}function c2(e){const n=new Map;return e.querySelectorAll("[data-cid]").forEach(t=>{const r=t.dataset.cid;r&&(n.has(r)||n.set(r,{rect:t.getBoundingClientRect(),el:t,zone:t.dataset.zone??"field"}))}),n}const u2=220;function d2(e,n,t=!0,r,i){const l=x.useRef(null),o=x.useRef(new Map),s=x.useRef(0),a=x.useCallback((d,f)=>{o.current.set(d,f)},[]);return x.useLayoutEffect(()=>{const d=e.current;if(!d)return;const f=c2(d),h=l.current;if(l.current=new Map([...f].map(([S,A])=>[S,{rect:A.rect,zone:A.zone}])),!h||!t||typeof d.animate!="function")return;const p=d.querySelector("[data-deck]")?.getBoundingClientRect()??null,$=d.getBoundingClientRect(),v=[...f.keys()].some(S=>!o.current.has(S)&&!h.has(S)),k=new Map,F=new Map;for(const[S,A]of f){if(o.current.has(S)||h.has(S)||!Qi(A.zone))continue;const C=A.el.dataset.month;for(const[I,T]of f){if(I===S||T.zone!==A.zone||T.el.dataset.month!==C)continue;const Q=h.get(I);if(!(!Q||Q.zone!=="field")){k.set(S,Q.rect),F.set(I,qi*Ki+220);break}}}let m=0,g=0;const y=(S,A)=>{g=Math.max(g,S+A)},w=[],N=[];for(const[S,{rect:A,el:C,zone:I}]of f){const T=o.current.get(S);o.current.delete(S);const Q=T?{rect:T,zone:"field"}:h.get(S),V=Q?.rect??p;if(!V||A.width===0)continue;const ae=V.left-A.left,le=V.top-A.top,be=V.width/A.width,E=!Q;if(!(E||Q.zone!==I)){if(Math.abs(ae)<3&&Math.abs(le)<3)continue;C.animate([{transform:`translate(${ae.toFixed(1)}px, ${le.toFixed(1)}px)`},{transform:"none"}],{duration:200,easing:"cubic-bezier(.3,0,.2,1)",fill:"backwards"}),y(0,200);continue}if(Math.abs(ae)<2&&Math.abs(le)<2&&Math.abs(be-1)<.03)continue;const B=`translate(${ae.toFixed(1)}px, ${le.toFixed(1)}px) scale(${be.toFixed(3)})`;if(E){const Cn=$.left+$.width/2-A.width/2-A.left,K=$.top+$.height*.34-A.height/2-A.top,G=`translate(${Cn.toFixed(1)}px, ${K.toFixed(1)}px)`,ne=k.get(S);if(ne){const _e=ne.left+ne.width/2-A.width/2-A.left,Re=ne.top+ne.height/2-A.height/2-A.top,rn=`translate(${_e.toFixed(1)}px, ${Re.toFixed(1)}px)`,Hn=C.animate([{transform:`${B} rotateY(90deg)`,offset:0,easing:"cubic-bezier(.25,.9,.3,1)"},{transform:`${G} scale(2.05) rotateY(66deg)`,offset:.18},{transform:`${G} scale(2.2) rotateY(0deg)`,offset:.3,easing:"linear"},{transform:`${G} scale(2.15)`,offset:.36,easing:"cubic-bezier(.75,0,.9,.55)"},{transform:`${rn} scale(1.1) rotate(3deg)`,offset:Ki},{transform:`${rn} scale(1) rotate(0deg)`,offset:Ki+.06,easing:"ease-out"},{transform:`${rn} scale(1)`,offset:.66,easing:"cubic-bezier(.45,0,.2,1)"},{transform:"none",offset:1}],{duration:qi,fill:"backwards"});zr(C,Hn,Ir(0,Fu)),i?.(ne,qi*Ki),y(0,qi);continue}const Ne=C.animate([{transform:`${B} rotateY(90deg)`,offset:0,easing:"cubic-bezier(.25,.9,.3,1)"},{transform:`${G} scale(2.05) rotateY(66deg)`,offset:.3},{transform:`${G} scale(2.2) rotateY(0deg)`,offset:.5,easing:"linear"},{transform:`${G} translateY(-5px) scale(2.15)`,offset:.7,easing:"cubic-bezier(.6,0,.9,.5)"},{transform:"none",offset:1,easing:"cubic-bezier(.3,1.35,.45,1)"}],{duration:Ru,fill:"backwards"});zr(C,Ne,Ir(0,Fu)),y(0,Ru);continue}if(Qi(I)&&Q&&Qi(Q.zone)&&Q.zone!==I){w.push({el:C,dx:ae,dy:le,sc:be});continue}if(Qi(I)){N.push({el:C,start:B,dx:ae,dy:le,sc:be,fromX:V.left,forcedWait:F.get(S)});continue}const oe=E?0:ae>0?-14:14,fe=C.animate([{transform:`${B} rotate(${oe}deg)${E?" rotateY(88deg)":""}`,offset:0,easing:"cubic-bezier(.22,.9,.3,1)"},{transform:`translate(0,0) scale(1.09) rotate(${oe*.18}deg)`,offset:.72},{transform:"none",offset:1,easing:"cubic-bezier(.3,1.6,.4,1)"}],{duration:E?Wi+60:Wi,fill:"backwards"});zr(C,fe,Ir(0,o2)),y(0,E?Wi+60:Wi)}const L=t2(N.map(S=>({forcedWait:S.forcedWait,fromX:S.fromX,card:S}))),_=v?l2:r2;if(L.forEach(({card:S},A)=>{const C=S.forcedWait??_+m*i2;S.forcedWait===void 0?m+=1:m=Math.max(m,A+1);const{start:I,dx:T,dy:Q,sc:V,el:ae}=S,le=ae.animate([{transform:I,offset:0},{transform:`${I} scale(1.24)`,offset:.1,easing:"ease-out"},{transform:`${I} scale(1.12)`,offset:.22,easing:"cubic-bezier(.5,0,.5,1)"},{transform:`translate(${(T*.22).toFixed(1)}px, ${(Q*.22).toFixed(1)}px) scale(${(V*.55+.45).toFixed(3)})`,offset:.62,easing:"cubic-bezier(.4,0,.5,1)"},{transform:"none",offset:1,easing:"cubic-bezier(.45,0,.2,1)"}],{duration:Pu,delay:C,fill:"backwards"});zr(ae,le,Ir(C,s2)),y(C,Pu)}),w.length){const S=g+Bu;w.forEach((A,C)=>{const I=`translate(${A.dx.toFixed(1)}px, ${A.dy.toFixed(1)}px) scale(${A.sc.toFixed(3)})`,T=A.el.animate([{transform:I,offset:0},{transform:`${I} scale(1.9) rotate(-10deg)`,offset:.2,easing:"cubic-bezier(.2,.9,.3,1)"},{transform:`translate(${(A.dx*.45).toFixed(1)}px, ${(A.dy*.45-34).toFixed(1)}px) scale(2)`,offset:.5,easing:"cubic-bezier(.5,0,.4,1)"},{transform:"scale(1.5)",offset:.78,easing:"cubic-bezier(.4,0,.2,1)"},{transform:"none",offset:1}],{duration:Tu,delay:S+C*180,fill:"backwards"});zr(A.el,T,Ir(S+C*Bu,a2)),y(S+C*180,Tu)})}if(g>0){const S=g+u2;s.current=performance.now()+S,r?.(S)}},n),{setOrigin:a,busyUntil:s}}function Vh(e){let n=e>>>0;const t=()=>{n|=0,n=n+1831565813|0;let i=Math.imul(n^n>>>15,1|n);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return{next:t,int:i=>Math.floor(t()*i),pick:i=>i[Math.floor(t()*i.length)],shuffle:i=>{const l=[...i];for(let o=l.length-1;o>0;o--){const s=Math.floor(t()*(o+1));[l[o],l[s]]=[l[s],l[o]]}return l}}}function f2(){return(Date.now()^Math.floor(Math.random()*4294967295))>>>0}const Hh={ttiScoring:"standard",ttadakSameMonth:!0,biGwangPenalty:!0,goMultiplierFrom3:!0,piBak:!0,gwangBak:!0,mengBak:!0,goBak:!0,heundeulgi:!0,bomb:!0,chongtong:!0,nagariDouble:!0,bonusPiCount:2,bonusPiValue:2,gukjinOption:!0,minScoreToStop:7,mengBakYeolThreshold:7,piBakThreshold:5},Zh=e=>e===0?1:0;function Qh(e,n){const t=Zh(n);e.players[t].hand.length>0?e.turn=t:e.players[n].hand.length>0?e.turn=n:e.turn=t,e.phase="awaitPlay",e.turnCtx=null}function Ou(){return{hand:[],captured:{gwang:[],yeol:[],tti:[],pi:[]},goCount:0,shaken:[],bombCount:0,gukjinUse:"yeol",scoreAtLastGo:0}}function Gu(e){return{...e,hand:[...e.hand],captured:{gwang:[...e.captured.gwang],yeol:[...e.captured.yeol],tti:[...e.captured.tti],pi:[...e.captured.pi]},shaken:[...e.shaken]}}function kr(e){return{...e,deck:[...e.deck],field:[...e.field],players:[Gu(e.players[0]),Gu(e.players[1])],events:[...e.events],ppeokPiles:{...e.ppeokPiles},turnCtx:e.turnCtx?{...e.turnCtx}:null,log:[...e.log]}}function Wh(e,n){for(const t of n){if(t.isGukjin){e.captured.yeol.push(t);continue}switch(t.kind){case"gwang":e.captured.gwang.push(t);break;case"yeol":e.captured.yeol.push(t);break;case"tti":e.captured.tti.push(t);break;case"pi":e.captured.pi.push(t);break}}}function $r(e,n,t){const r=e.players[Zh(n)];if(r.captured.pi.length===0){e.log.push(`P${n} ${t} (상대 피 없음)`);return}const l=[...r.captured.pi].sort((o,s)=>(o.piValue??1)-(s.piValue??1))[0];r.captured.pi=r.captured.pi.filter(o=>o.id!==l.id),e.players[n].captured.pi.push(l),e.events.push({type:"steal",player:n,detail:t}),e.log.push(`P${n} ${t} -> 피 1장 상납`)}function h2(e){const n={...Hh,...e?.rules??{}},t=Vh(e?.seed??12345);let r=t.shuffle(W1(n));const i=(d,f)=>{const h=[],p=[];for(;h.length<d&&r.length>0;){const $=r.shift();if(f&&$.isBonus){p.push($);continue}h.push($)}return p.length&&(r=t.shuffle([...r,...p])),h},l=i(10,!1),o=i(10,!1),s=i(8,!0),a={rules:n,deck:r,field:s,players:[Ou(),Ou()],turn:e?.firstPlayer??0,phase:"awaitPlay",events:[],ppeokPiles:{},pendingChoice:null,turnCtx:null,settlement:null,roundMultiplier:e?.roundMultiplier??1,turnCount:0,log:[]};if(a.players[0].hand=l,a.players[1].hand=o,n.chongtong)for(const d of[0,1]){const f=J1(a.players[d].hand);if(f!==null)return a.phase="ended",a.settlement=n2(d,f,n,a.roundMultiplier),a.events.push({type:"chongtong",player:d,detail:`${f}월`}),a.log.push(`P${d} 총통 (${f}월)`),a}return a}function Fs(e,n){return e.rules.heundeulgi?Gh(e.players[n].hand).filter(t=>!e.players[n].shaken.includes(t)):[]}function Uu(e,n,t){if(!Fs(e,n).includes(t))return e;const r=kr(e);return r.players[n].shaken.push(t),r.events.push({type:"heundeulgi",player:n,detail:`${t}월`}),r.log.push(`P${n} 흔들기 (${t}월)`),r}function Ja(e,n){return e.rules.bomb?Gh(e.players[n].hand).filter(t=>e.field.some(r=>r.month===t)):[]}function Os(e,n){return n===0?[]:e.field.filter(t=>t.month===n)}function Vu(e,n,t=!1){if(e.phase!=="awaitPlay")return e;const r=kr(e),i=r.turn,l=r.players[i],o=l.hand.findIndex(h=>h.id===n);if(o<0)return e;const s=l.hand[o];r.events=[];const a={player:i,playedCard:s,bombCards:[],playedWentToField:!1,fromHandCapture:[],flipCard:null,fromFlipCapture:[],ppeok:!1,bonusFlips:[],stage:"hand"};if(r.turnCtx=a,r.turnCount++,t&&r.rules.bomb&&Ja(r,i).includes(s.month)){const h=l.hand.filter($=>$.month===s.month);l.hand=l.hand.filter($=>$.month!==s.month),a.playedCard=h[0],a.bombCards=h.slice(1),l.bombCount++,r.events.push({type:"bomb",player:i,detail:`${s.month}월`}),r.log.push(`P${i} 폭탄 (${s.month}월)`);const p=r.field.filter($=>$.month===s.month);return r.field=r.field.filter($=>$.month!==s.month),a.fromHandCapture=[...h,...p],delete r.ppeokPiles[s.month],$r(r,i,"폭탄"),Ur(r)}if(l.hand.splice(o,1),s.isBonus){const h=[s];let p=r.deck.shift();for(;p?.isBonus;)h.push(p),p=r.deck.shift();return p&&l.hand.push(p),a.bonusFlips=h,r.events.push({type:"bonus",player:i,detail:`${h.length}장`}),r.log.push(`P${i} 보너스패 ${h.length}장`),l.hand.length===0||r.deck.length===0?Yn(r):(Wh(l,h),r.turnCtx=null,r.phase="awaitPlay",r.turn=i,r)}const d=Os(r,s.month);if(d.length===0)return r.field.push(s),a.playedWentToField=!0,Ur(r);if(d.length===1)return r.field=r.field.filter(h=>h.id!==d[0].id),a.fromHandCapture=[s,d[0]],Ur(r);if(d.length===2)return r.phase="awaitChoice",r.pendingChoice={played:s,candidates:d,source:"hand"},r;r.field=r.field.filter(h=>h.month!==s.month),a.fromHandCapture=[s,...d];const f=r.ppeokPiles[s.month];return f!==void 0&&(delete r.ppeokPiles[s.month],$r(r,i,f===i?"자뻑 회수":"뻑 회수")),Ur(r)}function Hu(e,n){if(e.phase!=="awaitChoice"||!e.pendingChoice||!e.turnCtx)return e;const t=kr(e),r=t.pendingChoice,i=r.candidates.find(l=>l.id===n)??r.candidates[0];return t.field=t.field.filter(l=>l.id!==i.id),t.pendingChoice=null,t.phase="awaitPlay",r.source==="hand"?(t.turnCtx.fromHandCapture=[r.played,i],Ur(t)):(t.turnCtx.fromFlipCapture=[r.played,i],Yn(t))}function Ur(e){const n=e.turnCtx;n.stage="flip";const t=n.player;let r;for(;r=e.deck.shift(),!!r;){if(r.isBonus){n.bonusFlips.push(r);continue}break}if(!r)return n.flipCard=null,Yn(e);const i=r;if(n.flipCard=i,n.fromHandCapture.length===2&&n.fromHandCapture[0].month===i.month&&n.bombCards.length===0&&e.field.every(s=>s.month!==i.month)){e.field.push(...n.fromHandCapture,i),n.fromHandCapture=[],n.ppeok=!0;const s=e.ppeokPiles[i.month];return e.ppeokPiles[i.month]=t,e.events.push({type:s===t?"jappeok":"ppeok",player:t,detail:`${i.month}월`}),e.log.push(`P${t} ${s===t?"자뻑":"뻑"} (${i.month}월)`),Yn(e)}if(n.playedWentToField&&n.playedCard&&n.playedCard.month===i.month){const s=e.field.filter(a=>a.month===i.month);return e.field=e.field.filter(a=>a.month!==i.month),n.fromFlipCapture=[i,...s],n.playedWentToField=!1,e.events.push({type:"jjok",player:t,detail:`${i.month}월`}),e.log.push(`P${t} 쪽 (${i.month}월)`),$r(e,t,"쪽"),Yn(e)}const l=e.field.filter(s=>s.month===i.month);if(l.length===0)return e.field.push(i),Yn(e);if(l.length===1)return e.field=e.field.filter(s=>s.id!==l[0].id),n.fromFlipCapture=[i,l[0]],Yn(e);if(l.length===2)return e.phase="awaitChoice",e.pendingChoice={played:i,candidates:l,source:"deck"},e;e.field=e.field.filter(s=>s.month!==i.month),n.fromFlipCapture=[i,...l];const o=e.ppeokPiles[i.month];return o!==void 0&&(delete e.ppeokPiles[i.month],$r(e,t,o===t?"자뻑 회수":"뻑 회수")),Yn(e)}function Yn(e){const n=e.turnCtx,t=n.player,r=e.players[t],i=[...n.fromHandCapture,...n.fromFlipCapture,...n.bonusFlips];Wh(r,i);const l=n.fromHandCapture.length>=2&&n.fromFlipCapture.length>=2,o=l&&n.fromHandCapture[0].month===n.fromFlipCapture[0].month;if(n.bombCards.length===0&&l&&(!e.rules.ttadakSameMonth||o)){const h=n.fromHandCapture[0].month,p=n.fromHandCapture.length+n.fromFlipCapture.length;e.events.push({type:"ttadak",player:t,detail:o?`${h}월 ${p}장을 한 턴에`:`${p}장을 한 턴에`}),e.log.push(`P${t} 따닥`),$r(e,t,"따닥")}e.field.length===0&&i.length>0&&(e.events.push({type:"sseul",player:t}),e.log.push(`P${t} 쓸`),$r(e,t,"쓸")),n.stage="done";const a=gt(r,e.rules),d=a.base>=e.rules.minScoreToStop&&a.base>r.scoreAtLastGo,f=e.players[0].hand.length===0&&e.players[1].hand.length===0;return d?(e.phase="awaitGoStop",e):f||e.deck.length===0?(e.phase="ended",e.settlement=Uh(),e.events.push({type:"nagari",player:t}),e.log.push("나가리"),e):(Qh(e,t),e)}function Zu(e){if(e.phase!=="awaitGoStop")return e;const n=kr(e),t=n.turn,r=n.players[t];return r.goCount++,r.scoreAtLastGo=gt(r,n.rules).base,n.events.push({type:"go",player:t,detail:`${r.goCount}고`}),n.log.push(`P${t} ${r.goCount}고`),n.players[0].hand.length===0&&n.players[1].hand.length===0||n.deck.length===0?(n.phase="ended",n.settlement=Uh(),n.log.push("나가리 (고 후 패 소진)"),n):(Qh(n,t),n)}function Qu(e){if(e.phase!=="awaitGoStop")return e;const n=kr(e),t=n.turn;return n.phase="ended",n.settlement=e2(n.players,t,n.rules,n.roundMultiplier),n.events.push({type:"stop",player:t}),n.log.push(`P${t} 스톱 -> ${n.settlement.total}점`),n}function Wu(e,n,t){const r=kr(e);return r.players[n].gukjinUse=t,r}function qh(e,n){return gt(e.players[n],e.rules).base}const ec={goRate:.3,preference:{gwang:.25,yeol:.25,tti:.25,pi:.25},samples:0};function p2(e,n){const t=n.weights;if(e.kind==="gwang")return(e.isBiGwang?7:10)*t.gwang;if(e.isGukjin)return 4.5*Math.max(t.yeol,t.pi);if(e.kind==="yeol")return(e.isGodori?5.5*t.godori:3)*t.yeol;if(e.kind==="tti"){const r=e.tti==="hong"?t.hongdan:e.tti==="cheong"?t.cheongdan:e.tti==="cho"?t.chodan:.6;return 3.5*t.tti*r}return(e.piValue??1)*1.2*t.pi}function ln(e,n,t,r){const i=e.players[n].captured;let l=p2(t,r);if(t.kind==="gwang"){const o=i.gwang.length;o===2&&(l+=12),o>=3&&(l+=8)}if(t.isGodori&&i.yeol.filter(s=>s.isGodori).length===2&&(l+=10),t.kind==="tti"&&t.tti&&t.tti!=="bi"){const o=i.tti.filter(s=>s.tti===t.tti).length;o===2?l+=9:o===1&&(l+=2)}return t.kind==="pi"&&i.pi.reduce((s,a)=>s+(a.piValue??1),0)>=8&&(l+=3*(t.piValue??1)),t.kind==="yeol"&&i.yeol.length>=4&&(l+=3),l}function g2(e,n,t,r){const i=r.inference;if(i<=0)return 0;const l=ln(e,n,t,r),o=Kh(e,n===0?1:0),s=Gs(e,n===0?1:0,t.month),a=o===0?0:s/o*e.players[n].hand.length;return l*i*Math.min(1,a)*.8}function m2(e,n,t,r=ec){const i=e.turn,l=i===0?1:0,o=e.players[i].hand;if(o.length===0)return{cardId:"",bomb:!1,score:0};if(t.next()<n.mistakeRate)return{cardId:t.pick(o).id,bomb:!1,score:0};const s=n.aggression>.45?Ja(e,i):[],a=Kh(e,i);let d={cardId:o[0].id,bomb:!1,score:-1/0};for(const f of o){const h=Os(e,f.month);let p=0;if(h.length===0){p-=g2(e,l,f,n),p-=ln(e,i,f,n)*.25;const $=Gs(e,i,f.month);p+=$/Math.max(1,a)*3*n.inference}else if(h.length===1){p+=ln(e,i,f,n)+ln(e,i,h[0],n),p+=ln(e,l,h[0],n)*n.inference*.5;const $=Gs(e,i,f.month),v=e.deck.length===0?0:Math.min(1,$/Math.max(1,a));p-=v*2.5*n.inference}else{const $=[...h].sort((v,k)=>ln(e,i,k,n)-ln(e,i,v,n));p+=ln(e,i,f,n)+ln(e,i,$[0],n),p+=ln(e,l,$[0],n)*n.inference*.5,h.length>=3&&(p+=8)}n.patternLearning>0&&(p-=y2(f,r)*n.patternLearning*4),p>d.score&&(d={cardId:f.id,bomb:!1,score:p})}for(const f of s){const p=Os(e,f).reduce(($,v)=>$+ln(e,i,v,n),0)+10*n.aggression;p>d.score&&(d={cardId:e.players[i].hand.find(v=>v.month===f).id,bomb:!0,score:p})}return d}function Kh(e,n){const t=n===0?1:0;return e.deck.length+e.players[t].hand.length}function Gs(e,n,t){if(t===0)return 0;const r=e.players[n].hand.filter(i=>i.month===t).length+e.field.filter(i=>i.month===t).length+[...e.players[0].captured.gwang,...e.players[0].captured.yeol,...e.players[0].captured.tti,...e.players[0].captured.pi,...e.players[1].captured.gwang,...e.players[1].captured.yeol,...e.players[1].captured.tti,...e.players[1].captured.pi].filter(i=>i.month===t).length;return Math.max(0,4-r)}function y2(e,n){if(n.samples<3)return 0;const t=n.preference;return e.kind==="gwang"?t.gwang:e.kind==="yeol"?t.yeol:e.kind==="tti"?t.tti:t.pi}function $2(e,n,t){const r=e.pendingChoice?.candidates??[];if(r.length===0)return"";if(t.next()<n.mistakeRate)return t.pick(r).id;const i=e.turn;return[...r].sort((l,o)=>ln(e,i,o,n)-ln(e,i,l,n))[0].id}function w2(e,n,t,r=ec){const i=e.turn,l=i===0?1:0,o=qh(e,i),s=gt(e.players[l],e.rules).base,a=e.players[i].hand.length;if(t.next()<n.mistakeRate)return{action:t.next()<n.greed?"go":"stop",confidence:.2};if(a<=1)return{action:"stop",confidence:.85};if(o>=n.stopScore)return{action:"stop",confidence:.9};const d=Math.min(4.5,.6+a*.5)*(.7+.7*n.greed),f=e.players[l].hand.length,h=Math.max(0,e.rules.minScoreToStop-s),p=e.players[l].captured,$=p.pi.reduce((w,N)=>w+(N.piValue??1),0);let v=0;p.gwang.length>=2&&(v+=.16),p.yeol.filter(w=>w.isGodori).length>=2&&(v+=.1);for(const w of["hong","cheong","cho"])p.tti.filter(N=>N.tti===w).length>=2&&(v+=.1);$>=8&&(v+=.12);const F=v2(.06+f/10*Math.max(0,1-h/9)*1.1+v)*(o*(e.rules.goBak?2:1)+3),m=(r.goRate-.3)*n.patternLearning,g=d-F*n.inference+m;return{action:g>0?"go":"stop",confidence:Math.min(1,Math.abs(g)/3)}}function v2(e){return Math.max(0,Math.min(1,e))}function x2(e,n){const t=e.turn,r=e.players[t].captured,i=r.yeol.length,l=r.pi.reduce((a,d)=>a+(d.piValue??1),0),o=i>=5?1+(i-5):0,s=l+2>=10?l+2-9:0;return s>o?"ssangpi":o>s?"yeol":n.weights.pi>=n.weights.yeol?"ssangpi":"yeol"}const Ve=0,wn=1,Us=1550,qu=420,k2={jjok:"낸 패가 깔리자마자 뒤집은 패가 같은 월 — 둘 다 가져갑니다",ttadak:"같은 월 네 장을 한 턴에 — 상대 피 한 장을 받습니다",ppeok:"세 장이 묶여 바닥에 남습니다. 나중에 먹는 사람이 임자",jappeok:"내가 깔아둔 뻑을 내가 또 만들었습니다",sseul:"바닥을 싹 비웠습니다 — 상대 피 한 장을 받습니다",bomb:"같은 월을 한 번에 몰아냈습니다",chongtong:"한 월 네 장이 처음부터 손에 있었습니다"},b2={jjok:"쪽!",ttadak:"따닥!",ppeok:"뻑!",jappeok:"자뻑!",sseul:"쓸!",bomb:"폭탄!",heundeulgi:"흔들기!",chongtong:"총통!",go:"고!",stop:"스톱!"},S2=new Set(["ppeok","jappeok","jjok","ttadak","sseul"]),_2=980;function C2(e,n){for(const t of e){if(t.type==="ppeok"||t.type==="jappeok")return t.player===n?"sulk":"smile";if(t.type==="sseul"||t.type==="ttadak"||t.type==="jjok")return t.player===n?"smile":"surprise";if(t.type==="bomb"||t.type==="heundeulgi")return t.player===n?"serious":"surprise"}return"normal"}function xt(e,n){return e[Math.floor(n()*e.length)]??e[0]}function j2(e){const{tenant:n,stage:t,affection:r,losingStreak:i}=e,l=Va(r),o=x.useMemo(()=>um(n,t),[n,t]),s=x.useMemo(()=>e.seed??f2(),[e.seed]),a=x.useRef(Vh(s^2654435769)),d=x.useCallback(()=>a.current.next(),[]),[f,h]=x.useState(()=>h2({rules:e.rules,seed:s,firstPlayer:Ve})),[p,$]=x.useState(()=>xt(n.lines.matchStart[l],Math.random)),[v,k]=x.useState("normal"),[F,m]=x.useState(null),[g,y]=x.useState(null),[w,N]=x.useState(null),L=x.useRef(0),[_,S]=x.useState(!1),[A,C]=x.useState(!1),I=x.useRef(0),T=x.useRef([]),Q=e.profile??ec,V=x.useCallback((K,G)=>{const ne=window.setTimeout(K,G);T.current.push(ne)},[]);x.useEffect(()=>()=>{T.current.forEach(clearTimeout),T.current=[]},[]);const ae=x.useCallback((K,G,ne)=>{I.current++,m({key:I.current,text:K,by:G,detail:ne})},[]),le=x.useCallback(K=>{const G=K.events;k(C2(G,wn));for(const _e of G){const Re=b2[_e.type];if(Re){const rn=()=>ae(Re,_e.player,_e.detail??k2[_e.type]);S2.has(_e.type)?V(rn,_2):rn();break}}const ne=G.find(_e=>(_e.type==="ppeok"||_e.type==="jappeok")&&_e.player===wn),Ne=G.find(_e=>_e.type==="sseul"&&_e.player===Ve);ne?$(xt(n.lines.ppeok[l],d)):Ne&&$(xt(n.lines.sseulVictim[l],d))},[ae,V,d,n,l]),be=x.useCallback(K=>{const G=e.busyUntil?.current??0;return Math.max(K,G-performance.now()+K*.35)},[e.busyUntil]);x.useEffect(()=>{if(!(f.phase==="awaitGoStop"&&f.turn===Ve)){C(!1);return}C(!1);const G=window.setTimeout(()=>C(!0),be(260));return()=>window.clearTimeout(G)},[f,be]),x.useEffect(()=>{if(f.phase==="ended")return;if(!(f.turn===wn)){S(!1);return}if(S(!0),f.phase==="awaitPlay"){V(()=>{let G=f;const ne=Fs(G,wn);ne.length>0&&d()<o.aggression&&(G=Uu(G,wn,ne[0]),ae("흔들기!",wn)),G=Wu(G,wn,x2(G,o));const Ne=m2(G,o,a.current,Q);if(!Ne.cardId)return;const _e=G.players[wn].hand.find(Re=>Re.id===Ne.cardId);_e&&(L.current+=1,N({key:L.current,card:_e,bomb:Ne.bomb}),V(()=>{const Re=Vu(G,Ne.cardId,Ne.bomb);le(Re),N(null),h(Re)},Us))},be(qu));return}if(f.phase==="awaitChoice"){V(()=>{const G=Hu(f,$2(f,o,a.current));le(G),h(G)},be(qu));return}f.phase==="awaitGoStop"&&V(()=>{const G=w2(f,o,a.current,Q),ne=G.action==="go"?n.lines.go[l]:n.lines.stop[l],Ne=xt(ne,d);y({action:G.action,line:Ne}),k(G.action==="go"?"serious":"win"),V(()=>{y(null);const _e=G.action==="go"?Zu(f):Qu(f);ae(G.action==="go"?"고!":"스톱!",wn),h(_e)},1600)},be(500))},[f,o,Q,n,l,V,le,ae,d,be]),x.useEffect(()=>{if(f.phase!=="ended"||!f.settlement)return;const K=f.settlement.winner;K===wn?($(xt(n.lines.win[l],d)),k("win")):K===Ve?($(xt(n.lines.lose[l],d)),k("lose")):($("나가리네. 다시 하자."),k("normal"))},[f.phase,f.settlement,n,l,d]);const E=x.useCallback((K,G=!1)=>{if(f.turn!==Ve||f.phase!=="awaitPlay")return;const ne=Vu(f,K,G);le(ne),h(ne)},[f,le]),Z=x.useCallback(K=>{if(f.phase!=="awaitChoice"||f.turn!==Ve)return;const G=Hu(f,K);le(G),h(G)},[f,le]),B=x.useCallback(K=>{f.phase!=="awaitGoStop"||f.turn!==Ve||(ae(K==="go"?"고!":"스톱!",Ve),h(K==="go"?Zu(f):Qu(f)))},[f,ae]),oe=x.useCallback(K=>{h(Uu(f,Ve,K)),ae("흔들기!",Ve)},[f,ae]),fe=x.useCallback(K=>h(Wu(f,Ve,K)),[f]);return{view:{state:f,line:p,expression:v,shout:F,askGoStop:f.phase==="awaitGoStop"&&f.turn===Ve&&A,aiGoStop:g,hint:i>=3?xt(n.lines.hints,()=>.5):null,aiThrow:w,myScore:qh(f,Ve),oppScore:gt(f.players[wn],f.rules).base,busy:_},play:E,choose:Z,goStop:B,shake:oe,setGukjin:fe,shakeable:Fs(f,Ve),bombable:Ja(f,Ve)}}const Wn=0,N2=980,E2=900;function M2(e,n){return n.length>e.length?N2:0}const L2=1;function D2(e){const n=[["gwang",e.gwang.length*3],["yeol",e.yeol.length],["tti",e.tti.length],["pi",e.pi.length*.6]];return n.sort((t,r)=>r[1]-t[1]),n[0][0]}function Ku({captured:e,side:n,flying:t,stagedId:r}){const i=[["광",e.gwang],["띠",e.tti],["열",e.yeol],["피",e.pi]],l=i.reduce((d,[,f])=>d+f.length,0),[o,s]=x.useState(0),a=x.useRef(l);return x.useEffect(()=>{l>a.current&&s(d=>d+1),a.current=l},[l]),c.jsxs("div",{className:`piles ${o?"got":""} ${t?"flying":""}`,children:[c.jsxs("div",{className:"piles-head",children:[n,c.jsx("b",{children:l},o)]}),i.map(([d,f])=>c.jsxs("div",{className:`pile ${f.length===0?"pile-empty":""}`,children:[c.jsx("span",{className:"pile-label",children:d}),c.jsx("div",{className:"pile-cards",children:f.map((h,p)=>c.jsx("img",{className:"pile-card","data-cid":h.id,"data-zone":n==="내 것"?"pile-me":"pile-opp","data-month":h.month,style:{marginLeft:p===0?0:"var(--pile-overlap)",visibility:h.id===r?"hidden":void 0},src:Rs(h),alt:h.name,draggable:!1},h.id))}),f.length>0&&c.jsx("span",{className:"pile-n",children:f.length})]},d))]})}function A2({tenant:e,stage:n,affection:t,rules:r,profile:i,losingStreak:l,points:o,onFinish:s,onQuit:a}){const[d,f]=x.useState(!1),h=x.useRef(0),p=x.useRef(0),{view:$,play:v,choose:k,goStop:F,shake:m,shakeable:g,bombable:y}=j2({tenant:e,stage:n,affection:t,rules:r,profile:i,losingStreak:l,busyUntil:p}),w=$.state,N=w.players[Wn],L=w.players[L2],[_,S]=x.useState(null),[A,C]=x.useState(!1),[I,T]=x.useState(null),[Q,V]=x.useState(0),ae=x.useRef(w.deck.length),le=x.useRef(null),be=d2(le,[w.field,w.players,w.deck.length],w.phase!=="ended",j=>{p.current=performance.now()+j,f(!0),window.clearTimeout(h.current),h.current=window.setTimeout(()=>f(!1),j)},(j,U)=>{window.setTimeout(()=>{oe({key:Date.now(),x:j.left+j.width/2,y:j.top+j.height/2,w:j.width,h:j.height}),V(te=>te+1)},U)});x.useEffect(()=>()=>window.clearTimeout(h.current),[]);const[E,Z]=x.useState(null),[B,oe]=x.useState(null),fe=x.useRef(null),Cn=x.useRef(null),[K,G]=x.useState(0),[ne,Ne]=x.useState(null);x.useEffect(()=>{if(w.phase==="ended"){const j=window.setTimeout(()=>C(!0),900);return()=>window.clearTimeout(j)}},[w.phase]),x.useEffect(()=>{w.deck.length<ae.current&&V(j=>j+1),ae.current=w.deck.length},[w.deck.length]),x.useEffect(()=>{if(Q===0)return;const j=window.setTimeout(()=>V(0),420);return()=>window.clearTimeout(j)},[Q]);const Re=w.turn===Wn&&!$.busy&&w.phase==="awaitPlay"&&!d&&!E,rn=w.turn===Wn&&w.phase==="awaitChoice",Hn=rn?w.pendingChoice:null,nc=j=>{const U=le.current;if(!U)return null;const te=w.field.find(Y=>Y.month===j.month);if(te){const Y=U.querySelector(`[data-cid="${te.id}"]`);if(Y)return Y.getBoundingClientRect()}const q=U.querySelector(".felt");if(!q)return null;const R=q.getBoundingClientRect();return new DOMRect(R.left+R.width/2-24,R.top+R.height*.62,48,72)},tc=(j,U)=>{const R=le.current?.querySelector(`.board-hand [data-cid="${j.id}"]`)?.getBoundingClientRect(),Y=nc(j);if(!R||!Y){v(j.id,U);return}Z({card:j,from:R,to:Y,bomb:U})},Jh=j=>{if(!(!Re||E)){if(y.includes(j.month)){_===j.id?(tc(j,!0),S(null)):S(j.id);return}tc(j,!1),S(null)}};x.useEffect(()=>{if(!E)return;const j=fe.current,U=le.current;if(!j||!U){v(E.card.id,E.bomb),Z(null);return}const te=U.getBoundingClientRect(),{from:q,to:R}=E,Y=te.left+te.width/2-q.width/2-q.left,An=te.top+te.height*.36-q.height/2-q.top,Ci=R.left+R.width/2-q.width/2-q.left,ji=R.top+R.height/2-q.height/2-q.top,lo=R.width/q.width,oo=j.animate([{transform:"translate(0,0) scale(1) rotate(0deg)",offset:0,easing:"cubic-bezier(.2,.9,.25,1)"},{transform:`translate(${Y}px, ${An}px) scale(2.5) rotate(-7deg)`,offset:.42},{transform:`translate(${Y}px, ${An-6}px) scale(2.45) rotate(-5deg)`,offset:.6,easing:"cubic-bezier(.7,0,.9,.6)"},{transform:`translate(${Ci}px, ${ji}px) scale(${(lo*1.06).toFixed(3)}) rotate(2deg)`,offset:1}],{duration:560,fill:"forwards"}),so=window.setTimeout(()=>{oe({key:Date.now(),x:R.left+R.width/2,y:R.top+R.height/2,w:R.width,h:R.height}),V(co=>co+1),be.setOrigin(E.card.id,R),v(E.card.id,E.bomb)},545),ao=window.setTimeout(()=>Z(null),610);return()=>{window.clearTimeout(so),window.clearTimeout(ao),oo.cancel()}},[E]),x.useEffect(()=>{if(!B)return;const j=window.setTimeout(()=>oe(null),620);return()=>window.clearTimeout(j)},[B]),x.useEffect(()=>{const j=$.aiThrow;if(!j)return;const U=Cn.current,te=le.current;if(!U||!te)return;const q=te.querySelectorAll(".opp-hand .ohand-slot"),R=(q[q.length-1]??te.querySelector(".opp-hand"))?.getBoundingClientRect(),Y=nc(j.card);if(!R||!Y||R.width===0)return;const An=te.getBoundingClientRect(),Ci=An.left+An.width/2-R.width/2-R.left,ji=An.top+An.height*.36-R.height/2-R.top,lo=Y.left+Y.width/2-R.width/2-R.left,oo=Y.top+Y.height/2-R.height/2-R.top;U.style.left=`${R.left}px`,U.style.top=`${R.top}px`,U.style.width=`${R.width}px`,U.style.height=`${R.height}px`;const so=U.animate([{transform:"translate(0,0) scale(1) rotateY(180deg)",offset:0,easing:"cubic-bezier(.2,.9,.25,1)"},{transform:`translate(${Ci}px, ${ji}px) scale(2.4) rotateY(0deg) rotate(6deg)`,offset:.46},{transform:`translate(${Ci}px, ${ji-6}px) scale(2.35) rotate(4deg)`,offset:.66,easing:"cubic-bezier(.7,0,.9,.6)"},{transform:`translate(${lo}px, ${oo}px) scale(${(Y.width/R.width*1.06).toFixed(3)}) rotate(-2deg)`,offset:1}],{duration:Us,fill:"forwards"}),ao=window.setTimeout(()=>{oe({key:Date.now(),x:Y.left+Y.width/2,y:Y.top+Y.height/2,w:Y.width,h:Y.height}),V(co=>co+1),be.setOrigin(j.card.id,Y)},Us-20);return()=>{window.clearTimeout(ao),so.cancel()}},[$.aiThrow?.key]),x.useEffect(()=>{!$.shout||$.shout.by!==Wn||["쪽!","따닥!","쓸!","폭탄!","총통!"].includes($.shout.text)&&G(j=>j+1)},[$.shout?.key]),x.useEffect(()=>{if(!K)return;const j=window.setTimeout(()=>G(0),1100);return()=>window.clearTimeout(j)},[K]),x.useEffect(()=>{const j=$.shout;if(!j||j.by!==Wn)return;const te={"쪽!":["쪽이지롱~","쪽! 한 장 내놔.","어? 쪽이네?"],"따닥!":["따닥이지롱~","따닥! 미안~","네 장 다 내 거."],"쓸!":["싹 쓸었다!","바닥이 비었네~","쓸! 하나 더 받을게."],"폭탄!":["폭탄이다!","한 번에 간다."],"총통!":["총통!","시작부터 네 장이야."]}[j.text];te&&Ne({key:j.key,text:te[Math.floor(Math.random()*te.length)]})},[$.shout?.key]),x.useEffect(()=>{if(!ne)return;const j=window.setTimeout(()=>Ne(null),2600);return()=>window.clearTimeout(j)},[ne]);const rc=14,wt=rc/2,ic=x.useMemo(()=>{const j=Math.floor(wt/2),U=[];for(let q=0;q<wt;q+=1){const R=j+Math.ceil(q/2)*(q%2===0?1:0),Y=q===0?j:q%2===1?j-Math.ceil(q/2):R;Y>=0&&Y<wt&&!U.includes(Y)&&U.push(Y)}for(let q=0;q<wt;q+=1)U.includes(q)||U.push(q);const te=[];for(const q of U)te.push(q),te.push(wt+q);return te},[]),e0=x.useRef(new Map),lc=x.useMemo(()=>{const j=new Map;for(const R of w.field){const Y=j.get(R.month);Y?Y.push(R):j.set(R.month,[R])}const U=e0.current;for(const R of[...U.keys()])j.has(R)||U.delete(R);const te=new Set(U.values());for(const R of j.keys()){if(U.has(R))continue;const Y=ic.find(An=>!te.has(An))??0;U.set(R,Y),te.add(Y)}const q=Array.from({length:rc},()=>null);for(const[R,Y]of j)q[U.get(R)]={month:R,cards:Y};return q},[w.field,ic]),n0=w.field.length<=8?1:w.field.length<=10?.86:w.field.length<=12?.74:w.field.length<=16?.62:.52,t0=lc.slice(0,wt),r0=lc.slice(wt),oc=$.myScore*e.rate,i0=Math.round($.oppScore*e.rate*qa),io=x.useMemo(()=>w.settlement?{won:w.settlement.winner===Wn,draw:w.settlement.winner===null,settlement:w.settlement,playerWentGo:N.goCount>0,focus:D2(N.captured),score:w.settlement.winner===Wn?w.settlement.total:0,settlementTotal:w.settlement.total}:null,[w.settlement,N]),br=Object.keys(w.ppeokPiles).sort().join(","),[Bt,l0]=x.useState(br);x.useEffect(()=>{if(Bt===br)return;const j=window.setTimeout(()=>l0(br),M2(Bt,br));return()=>window.clearTimeout(j)},[br,Bt]);const o0=x.useMemo(()=>new Set(Bt?Bt.split(",").map(Number):[]),[Bt]),[_i,sc]=x.useState(null),ac=x.useRef(new Set);x.useLayoutEffect(()=>{const U=[...N.captured.pi,...L.captured.pi].filter(q=>q.isBonus).find(q=>!ac.current.has(q.id));if(!U)return;ac.current.add(U.id),sc(U);const te=window.setTimeout(()=>sc(null),E2);return()=>window.clearTimeout(te)},[N.captured.pi,L.captured.pi]);const cc=(j,U)=>j?s0(j):c.jsx("div",{className:"fslot-empty"},`empty-${U}`),s0=j=>{const U=o0.has(j.month);return c.jsxs("div",{className:`fstack ${U?"ppeok":""}`,children:[j.cards.map((te,q)=>{const R=rn&&w.pendingChoice?.candidates.some(Y=>Y.id===te.id);return c.jsx("div",{className:`fslot ${R?"candidate":""} ${I===te.month?"match":""}`,style:{marginLeft:q===0?0:U?"var(--ppeok-overlap)":"var(--stack-overlap)",zIndex:q},children:c.jsx(Zi,{card:te,zone:"field",selectable:!!R,onClick:()=>R&&k(te.id)})},te.id)}),U&&c.jsxs("span",{className:"fstack-tag",children:["뻑 ",j.cards.length,"장"]})]},j.month)},uc=to(e.id,"full"),a0=x.useMemo(()=>{const j=gt(w.players[Wn],w.rules),U=[];return j.gwangScore>0&&U.push({label:"광",score:j.gwangScore,note:j.gwangLabel??void 0}),j.ttiScore>0&&U.push({label:"띠",score:j.ttiScore,note:j.ttiLabels.join(" · ")||void 0}),j.yeolScore>0&&U.push({label:"열",score:j.yeolScore,note:j.yeolLabels.join(" · ")||void 0}),j.piScore>0&&U.push({label:"피",score:j.piScore,note:`${j.piCount}장`}),U},[w]);return c.jsxs("div",{className:"screen match-screen",children:[uc?c.jsx(Xa,{src:uc,dim:.62}):c.jsx(Si,{bg:"maru",time:"night"}),c.jsxs("div",{className:"layer board",ref:le,children:[c.jsxs("div",{className:`board-opp ${K?"startled":""} ${R1(e.id)?"has-photo":""}`,children:[c.jsx(Rn,{tenant:e,expression:K?"surprise":$.expression,outfit:n>=10?2:0}),K>0&&c.jsx("span",{className:"startle-mark",children:"!"}),c.jsxs("div",{className:"chip-body",children:[c.jsxs("div",{className:"chip-name",children:[e.name,L.goCount>0&&c.jsxs("span",{className:"badge",children:[L.goCount,"고"]})]}),c.jsxs("div",{className:"chip-score",children:[$.oppScore,c.jsx("small",{children:"점"})]})]}),c.jsx("button",{className:"iconbtn quit",onClick:a,"aria-label":"나가기",children:"✕"}),c.jsx("div",{className:"speech",children:$.line})]}),c.jsx("div",{className:"board-oppcap",children:c.jsx(Ku,{captured:L.captured,side:"상대",flying:d,stagedId:_i?.id})}),c.jsxs("div",{className:"board-field",children:[c.jsxs("div",{className:"opp-hand","aria-label":`${e.name}의 남은 패 ${L.hand.length}장`,children:[L.hand.map((j,U)=>c.jsx("div",{className:"ohand-slot",style:{marginLeft:U===0?0:"var(--ohand-overlap)"},children:c.jsx(Oo,{small:!0})},j.id)),c.jsx("span",{className:"ohand-n",children:L.hand.length})]}),c.jsxs("div",{className:`felt ${Q?"slam":""} ${rn?"choosing":""}`,style:{"--field-scale":n0},children:[c.jsx("div",{className:"field-row",children:t0.map(cc)}),c.jsxs("div",{className:"field-mid",children:[Hn&&c.jsxs("div",{className:"pending",children:[c.jsx(Zi,{card:Hn.played}),c.jsx("span",{className:"pending-tag",children:Hn.source==="deck"?"뒤집은 패":"낸 패"})]}),_i&&c.jsxs("div",{className:"pending bonus",children:[c.jsx(Zi,{card:_i}),c.jsx("span",{className:"pending-tag",children:"보너스"})]}),c.jsxs("div",{className:"deck","data-deck":"",children:[c.jsx(Oo,{}),c.jsx("span",{className:"deck-n",children:w.deck.length})]}),c.jsx("div",{className:"deck-label",children:"남은 패"})]}),c.jsx("div",{className:"field-row",children:r0.map(cc)})]}),rn&&c.jsxs("div",{className:"felt-notice",children:[Hn?`${zu[Hn.played.month]}(${Hn.played.month}월)이 바닥에 두 장입니다. `:"같은 월이 두 장입니다. ",c.jsx("b",{children:"빛나는 패"})," 중에서 가져올 것을 고르세요."]}),$.hint&&!rn&&c.jsxs("div",{className:"felt-notice hint",children:[e.name,": “",$.hint,"”"]})]}),c.jsx("div",{className:"board-mycap",children:c.jsx(Ku,{captured:N.captured,side:"내 것",flying:d,stagedId:_i?.id})}),c.jsxs("div",{className:"board-side",children:[c.jsxs("div",{className:"scorebox",children:[c.jsxs("div",{className:"scorebox-row",children:[c.jsx("b",{children:$.myScore}),c.jsx("small",{children:"점"}),c.jsx("span",{className:"x",children:"×"}),c.jsx("b",{children:e.rate}),c.jsx("small",{children:"P"})]}),c.jsxs("div",{className:"scorebox-eq",children:["= ",c.jsxs("strong",{children:[oc.toLocaleString(),"P"]})]}),c.jsxs("div",{className:"scorebox-risk",children:["지면 ",c.jsxs("span",{children:["-",i0.toLocaleString(),"P"]})]})]}),c.jsx("div",{className:"turnline",children:_&&y.includes(N.hand.find(j=>j.id===_)?.month??0)?"한 번 더 누르면 폭탄":d||E?"":Re?"낼 패를 고르세요":$.busy?`${e.name}의 차례…`:rn?"가져올 패를 고르세요":""}),g.length>0&&Re&&c.jsxs("button",{className:"btn shake",onClick:()=>m(g[0]),children:["흔들기 ",zu[g[0]]??g[0]]}),c.jsxs("div",{className:"me-chip",children:[c.jsxs("div",{className:"chip-name",children:["나",N.goCount>0&&c.jsxs("span",{className:"badge",children:[N.goCount,"고"]})]}),c.jsxs("div",{className:"chip-points",children:[o.toLocaleString()," P"]})]})]}),c.jsxs("div",{className:"board-hand",children:[N.hand.map(j=>c.jsx("div",{className:"hand-slot",onPointerDown:()=>Re&&T(j.month),onPointerEnter:()=>Re&&T(j.month),onPointerLeave:()=>T(null),onPointerUp:()=>T(null),children:c.jsx(Zi,{card:j,zone:"hand",selectable:Re,chosen:_===j.id,hidden:E?.card.id===j.id,onClick:()=>Jh(j)})},j.id)),N.hand.length===0&&c.jsx(Oo,{small:!0})]}),E&&c.jsx("img",{ref:fe,className:"hero-card",src:Rs(E.card),alt:E.card.name,style:{left:E.from.left,top:E.from.top,width:E.from.width,height:E.from.height},draggable:!1}),c.jsx("img",{ref:Cn,className:"hero-card ai",style:{display:$.aiThrow?"block":"none"},src:$.aiThrow?Rs($.aiThrow.card):void 0,alt:"",draggable:!1}),B&&c.jsxs("span",{className:"impact",style:{left:B.x,top:B.y},children:[c.jsx("i",{}),c.jsx("i",{}),c.jsx("b",{style:{width:B.w,height:B.h,marginLeft:-B.w/2,marginTop:-B.h/2}})]},B.key),ne&&c.jsx("div",{className:"taunt",children:ne.text},ne.key),$.shout&&c.jsxs("div",{className:"shout",children:[c.jsx("span",{children:$.shout.text}),$.shout.detail&&c.jsx("em",{className:"shout-note",children:$.shout.detail})]},$.shout.key),$.askGoStop&&c.jsxs("div",{className:"gostop-overlay",children:[c.jsx(Rn,{tenant:e,expression:"serious",outfit:n>=10?2:0}),c.jsxs("div",{className:"gostop-line",children:[$.myScore,"점입니다. 더 가시겠어요?",c.jsx("div",{className:"gostop-tally",children:a0.map(j=>c.jsxs("span",{children:[c.jsx("em",{children:j.label}),c.jsx("b",{children:j.score}),c.jsx("small",{children:"점"}),j.note&&c.jsx("i",{children:j.note})]},j.label))}),c.jsxs("strong",{style:{color:"var(--ok)",fontSize:18},children:["지금 스톱하면 +",oc.toLocaleString(),"P"]}),c.jsx("br",{}),c.jsxs("span",{style:{color:"var(--paper-dim)",fontSize:13},children:["고를 하면 점수가 오르지만, 상대가 이기면 고박으로 두 배를 물어줍니다. 점당 ",e.rate,"P 라 크게 뒤집히면 그만큼 나갑니다."]})]}),c.jsxs("div",{className:"gostop-btns",children:[c.jsx("button",{className:"btn gold go",onClick:()=>F("go"),children:"고"}),c.jsx("button",{className:"btn stop",onClick:()=>F("stop"),children:"스톱"})]})]}),$.aiGoStop&&c.jsxs("div",{className:"gostop-overlay",children:[c.jsx(Rn,{tenant:e,expression:$.aiGoStop.action==="go"?"serious":"win",outfit:n>=10?2:0}),c.jsxs("div",{className:"gostop-line",children:[c.jsx("strong",{style:{color:"var(--lamp)"},children:e.name}),c.jsx("br",{}),$.aiGoStop.line]})]}),A&&io&&c.jsx(I2,{tenant:e,outcome:io,onNext:()=>s(io)})]})]})}function I2({tenant:e,outcome:n,onNext:t}){const r=n.settlement,i=r?.breakdown,l=e.rate;return c.jsxs("div",{className:"result",children:[c.jsx("h2",{style:{color:n.won?"var(--lamp)":n.draw?"var(--paper-dim)":"var(--accent)"},children:n.draw?"나가리":n.won?"승리":"패배"}),r&&c.jsxs("div",{className:"total",children:[r.total,"점"]}),i&&c.jsxs("div",{className:"result-rows",children:[i.gwangScore>0&&c.jsxs("div",{children:[c.jsx("span",{children:i.gwangLabel}),c.jsxs("span",{children:[i.gwangScore,"점"]})]}),i.ttiScore>0&&c.jsxs("div",{children:[c.jsx("span",{children:i.ttiLabels.join(" · ")}),c.jsxs("span",{children:[i.ttiScore,"점"]})]}),i.yeolScore>0&&c.jsxs("div",{children:[c.jsx("span",{children:i.yeolLabels.join(" · ")}),c.jsxs("span",{children:[i.yeolScore,"점"]})]}),i.piScore>0&&c.jsxs("div",{children:[c.jsxs("span",{children:["피 ",i.piCount,"장"]}),c.jsxs("span",{children:[i.piScore,"점"]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"기본"}),c.jsxs("span",{children:[r?.base,"점"]})]}),r&&r.goBonus>0&&c.jsxs("div",{children:[c.jsx("span",{children:"고 가산"}),c.jsxs("span",{children:["+",r.goBonus]})]}),r&&r.multiplier>1&&c.jsxs("div",{children:[c.jsx("span",{children:"배수"}),c.jsxs("span",{children:["x",r.multiplier]})]})]}),r&&c.jsx("div",{style:{fontSize:20,fontWeight:900,color:n.won?"var(--ok)":n.draw?"var(--paper-dim)":"var(--accent)"},children:n.draw?"판돈 없음":n.won?`+${(r.total*l).toLocaleString()}P`:`-${Math.round(r.total*l*qa).toLocaleString()}P`}),r&&r.reasons.length>0&&c.jsx("div",{className:"reasons",children:r.reasons.map((o,s)=>c.jsx("span",{children:o},s))}),c.jsx("div",{style:{display:"flex",gap:10,alignItems:"center",marginTop:6},children:c.jsx(Rn,{tenant:e,expression:n.won?"lose":"win",outfit:0,style:{height:90}})}),c.jsx("button",{className:"btn primary wide",style:{maxWidth:260},onClick:t,children:"계속"})]})}function Yu({scene:e,tenant:n,textSpeed:t,onDone:r,canSkip:i=!0}){const[l,o]=x.useState(()=>Im(e)),[s,a]=x.useState(""),[d,f]=x.useState(!1),h=x.useRef(null),p=l.view;x.useEffect(()=>{if(h.current&&window.clearInterval(h.current),t<=0){a(p.text),f(!1);return}a(""),f(!0);let m=0;return h.current=window.setInterval(()=>{m++,a(p.text.slice(0,m)),m>=p.text.length&&(h.current&&window.clearInterval(h.current),f(!1))},t),()=>{h.current&&window.clearInterval(h.current)}},[p.text,t]);const $=x.useCallback(()=>{const m=zm(l);r({affectionDelta:m.view.affectionDelta,pointDelta:m.view.pointDelta,cg:m.view.cg})},[l,r]),v=x.useCallback(()=>{if(d){h.current&&window.clearInterval(h.current),a(p.text),f(!1);return}if(!p.choices){if(p.done){r({affectionDelta:p.affectionDelta,pointDelta:p.pointDelta,cg:p.cg});return}o(Jl(l))}},[d,p,l,r]);x.useEffect(()=>{p.done&&!p.text&&r({affectionDelta:p.affectionDelta,pointDelta:p.pointDelta,cg:p.cg})},[p,r]);const k=n!==null&&p.speaker===n.name,F=n&&!p.cg?to(n.id,"full",k?p.expression:"normal"):null;return c.jsxs("div",{className:`screen novel-screen ${F?"photo":""}`,onClick:v,children:[F?c.jsx(Xa,{src:F,dim:.5}):c.jsx(Si,{bg:p.bg,time:p.time}),c.jsxs("div",{className:"layer",children:[c.jsxs("div",{className:"topbar",onClick:m=>m.stopPropagation(),children:[c.jsx("h1",{children:e.title}),i&&c.jsx("button",{className:"btn ghost",style:{padding:"6px 12px",fontSize:13},onClick:$,children:"건너뛰기"})]}),c.jsxs("div",{className:"vn-stage",children:[n&&!p.cg&&c.jsx(Rn,{className:"vn-portrait",tenant:n,expression:k?p.expression:"normal",outfit:p.outfit}),p.cg&&c.jsx("div",{className:"vn-cg",children:c.jsx("div",{className:"vn-cg-inner",children:c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:13,opacity:.8,marginBottom:8},children:"엔딩 CG"}),c.jsx("div",{style:{fontSize:17,fontWeight:800},children:e.title}),c.jsx("div",{style:{fontSize:11,opacity:.6,marginTop:10},children:p.cg})]})})})]}),c.jsxs("div",{className:"vn-box",onClick:m=>m.stopPropagation(),children:[p.speaker&&c.jsx("div",{className:"vn-speaker",children:p.speaker}),c.jsx("div",{className:"vn-text",onClick:v,children:s}),p.choices?c.jsx("div",{className:"vn-choices",children:p.choices.map((m,g)=>c.jsx("button",{className:"btn wide",onClick:()=>o(Sh(l,g)),children:m.text},g))}):c.jsx("div",{className:"vn-hint",onClick:v,children:p.done?"탭하여 계속 ▸":"탭 ▾"})]})]})]})}const Yh="hasukgo.adult.v1";function z2(){try{return localStorage.getItem(Yh)==="1"}catch{return!1}}function P2(){try{localStorage.setItem(Yh,"1")}catch{}}function T2({onEnter:e}){return c.jsxs("div",{className:"screen",children:[c.jsx(Si,{bg:"maru",time:"night"}),c.jsx("div",{className:"title-vignette"}),c.jsxs("div",{className:"layer gate-layer",children:[c.jsx(Ya,{className:"gate-logo"}),c.jsx("div",{className:"gate-badge",children:"청소년 이용불가"}),c.jsxs("div",{className:"gate-box",children:[c.jsx("p",{children:"이 게임은 만 18세 이상만 이용할 수 있습니다."}),c.jsxs("ul",{children:[c.jsx("li",{children:"등장인물은 전원 성인(22~29세)이며, 인물 일러스트에 선정적 표현이 있습니다."}),c.jsxs("li",{children:["화투(고스톱)를 소재로 하지만 판돈은 ",c.jsx("b",{children:"하숙집 포인트"}),"입니다 — 현금 결제·환전 기능이 전혀 없습니다."]})]})]}),c.jsx("button",{className:"btn gold wide",onClick:()=>{P2(),e()},children:"만 18세 이상입니다 · 들어가기"}),c.jsx("a",{className:"gate-out",href:"https://www.google.com",rel:"noreferrer",children:"나가기"})]})]})}const Vs="HSG1",Xh="HSG0";function Xu(e){let n="";for(const t of e)n+=String.fromCharCode(t);return btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function B2(e){const n=e.replace(/-/g,"+").replace(/_/g,"/"),t=n.length%4?"=".repeat(4-n.length%4):"",r=atob(n+t),i=new Uint8Array(r.length);for(let l=0;l<r.length;l++)i[l]=r.charCodeAt(l);return i}function Hs(e){let n=2166136261;for(let t=0;t<e.length;t++)n^=e.charCodeAt(t),n=Math.imul(n,16777619)>>>0;return n.toString(36).toUpperCase().padStart(7,"0")}async function R2(e){try{if(typeof CompressionStream>"u")return null;const n=new CompressionStream("deflate-raw"),t=new TextEncoder().encode(e),r=new Blob([t.buffer]).stream().pipeThrough(n);return new Uint8Array(await new Response(r).arrayBuffer())}catch{return null}}async function F2(e){try{if(typeof DecompressionStream>"u")return null;const n=new DecompressionStream("deflate-raw"),t=new Blob([e.buffer]).stream().pipeThrough(n);return new TextDecoder().decode(await new Response(t).arrayBuffer())}catch{return null}}function Pl(e){const n=Object.values(e.tenants).filter(i=>i.clearedStage>0).length,t=Object.values(e.tenants).reduce((i,l)=>i+l.clearedStage,0),r=Object.values(e.tenants).filter(i=>i.dating).length;return`${n}명 진행 · 총 ${t}단계 · 연애 ${r}명 · ${e.points.toLocaleString()}P · ${e.stats.totalGames}판`}async function O2(e,n){const t={meta:{deviceId:n,createdAt:new Date().toISOString(),summary:Pl(e)},save:e},r=JSON.stringify(t),i=await R2(r);if(i){const o=Xu(i);return`${Vs}.${o}.${Hs(o)}`}const l=Xu(new TextEncoder().encode(r));return`${Xh}.${l}.${Hs(l)}`}async function G2(e){const n=e.trim().replace(/\s+/g,"");if(!n)return{ok:!1,reason:"코드가 비어 있습니다."};const t=n.split(".");if(t.length!==3)return{ok:!1,reason:"코드 형식이 올바르지 않습니다. 앞뒤가 잘리지 않았는지 확인해 주세요."};const[r,i,l]=t;if(r!==Vs&&r!==Xh)return{ok:!1,reason:"하숙생 맞고 백업 코드가 아닙니다."};if(Hs(i)!==l)return{ok:!1,reason:"코드가 손상됐습니다. 복사할 때 일부가 빠졌을 수 있습니다."};let o=null;try{const f=B2(i);o=r===Vs?await F2(f):new TextDecoder().decode(f)}catch{return{ok:!1,reason:"코드를 읽을 수 없습니다."}}if(!o)return{ok:!1,reason:"이 브라우저에서는 압축된 코드를 풀 수 없습니다. 최신 브라우저에서 시도해 주세요."};let s;try{s=JSON.parse(o)}catch{return{ok:!1,reason:"코드 내용이 올바르지 않습니다."}}if(!s?.save?.tenants||typeof s.save.points!="number")return{ok:!1,reason:"저장 데이터가 들어 있지 않습니다."};const a=yi(),d={...a,...s.save,tenants:{...a.tenants,...s.save.tenants},settings:{...a.settings,...s.save.settings??{}},stats:{...a.stats,...s.save.stats??{}}};return{ok:!0,backup:{meta:s.meta??{deviceId:"(알 수 없음)",createdAt:"",summary:Pl(d)},save:d}}}function U2(e){const n=new Date().toISOString().slice(0,16).replace(/[:T]/g,""),t=new Blob([e],{type:"text/plain;charset=utf-8"}),r=URL.createObjectURL(t),i=document.createElement("a");i.href=r,i.download=`하숙생맞고-백업-${n}.txt`,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}async function V2(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}try{const n=document.createElement("textarea");n.value=e,n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return n.remove(),t}catch{return!1}}function H2({data:e,device:n,onRestore:t}){const[r,i]=x.useState(""),[l,o]=x.useState(""),[s,a]=x.useState(null),[d,f]=x.useState(null),[h,p]=x.useState(null),[$,v]=x.useState(!1);x.useEffect(()=>{Gg().then(p)},[]);const k=x.useCallback(async()=>{const _=await O2(e,n?.id??"");return i(_),v(!0),_},[e,n]),F=x.useCallback(async()=>{const _=r||await k(),S=await V2(_);a(S?{kind:"ok",text:"백업 코드를 복사했습니다. 메모장이나 메신저에 붙여넣어 보관하세요."}:{kind:"warn",text:"복사가 막혔습니다. 아래 코드를 길게 눌러 직접 복사해 주세요."})},[r,k]),m=x.useCallback(async()=>{const _=r||await k();U2(_),a({kind:"ok",text:"백업 파일을 저장했습니다."})},[r,k]),g=x.useCallback(async()=>{a(null);const _=await G2(l);if(!_.ok){f(null),a({kind:"err",text:_.reason});return}f(_.backup)},[l]),y=x.useCallback(async()=>{if(!d)return;const _=ju(d.save),S=await Og(d.save.deviceId||void 0),A=ju({..._,deviceId:S.id});t(A),f(null),o(""),a({kind:"ok",text:"진행도를 복원했습니다."})},[d,t]),w=x.useCallback(_=>{const S=_.target.files?.[0];if(!S)return;const A=new FileReader;A.onload=()=>o(String(A.result??"")),A.readAsText(S),_.target.value=""},[]),N=h&&!h.localStorage&&!h.indexedDb,L=h&&(!h.localStorage||!h.indexedDb)&&!N;return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"이 기기"}),c.jsxs("div",{className:"row",children:[c.jsxs("div",{children:["기기 코드",c.jsx("small",{children:"브라우저마다 따로 발급되는 무작위 번호입니다. 전화번호·기기 일련번호 같은 개인정보는 쓰지도, 보내지도 않습니다."})]}),c.jsx("code",{style:{fontSize:13,color:"var(--lamp)",whiteSpace:"nowrap"},children:n?.shortCode??"…"})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"실행 환경"}),c.jsx("span",{children:n?.platform??"…"})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"저장 상태"}),c.jsx("span",{style:{color:N?"var(--accent)":L?"var(--warn)":"var(--ok)"},children:h?N?"저장 불가":L?"일부만 사용 가능":"정상":"확인 중…"})]}),N&&c.jsx("div",{className:"hint-box",style:{margin:"8px 0 0"},children:"이 브라우저에서는 저장이 막혀 있습니다(사생활 보호 모드일 수 있습니다). 지금 진행한 내용은 창을 닫으면 사라집니다. 일반 창에서 열어 주세요."}),n?.ephemeral&&!N&&c.jsx("div",{className:"hint-box",style:{margin:"8px 0 0"},children:"기기 코드를 저장하지 못했습니다. 새로고침하면 새 기기로 인식될 수 있으니 아래에서 백업 코드를 받아 두세요."})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"진행도 백업"}),c.jsxs("div",{style:{fontSize:12,color:"var(--paper-dim)",lineHeight:1.6,marginBottom:10},children:["지금 진행도: ",c.jsx("b",{style:{color:"var(--paper)"},children:Pl(e)}),c.jsx("br",{}),"백업 코드 하나면 브라우저 데이터를 지웠거나 폰을 바꿔도 그대로 이어서 할 수 있습니다.",c.jsx("br",{}),c.jsx("b",{style:{color:"var(--warn)"},children:"아이폰 사파리"}),"는 홈 화면에 추가하지 않은 사이트의 저장 데이터를 일정 기간 뒤 지웁니다. 웹으로 오래 즐기실 거면 홈 화면에 추가하거나 백업 코드를 받아 두세요."]}),c.jsxs("div",{style:{display:"flex",gap:8},children:[c.jsx("button",{className:"btn primary",style:{flex:1,fontSize:13},onClick:F,children:"코드 복사"}),c.jsx("button",{className:"btn",style:{flex:1,fontSize:13},onClick:m,children:"파일로 저장"})]}),$&&r&&c.jsx("textarea",{readOnly:!0,value:r,onFocus:_=>_.currentTarget.select(),style:{width:"100%",height:76,marginTop:8,fontSize:10.5,lineHeight:1.4,background:"rgba(0,0,0,0.45)",color:"var(--paper-dim)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:8,padding:8,fontFamily:"monospace",userSelect:"text",WebkitUserSelect:"text"}})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"진행도 복원"}),c.jsx("div",{style:{fontSize:12,color:"var(--paper-dim)",lineHeight:1.6,marginBottom:8},children:"다른 기기에서 받은 백업 코드를 붙여넣으세요. 현재 진행도는 덮어써집니다."}),c.jsx("textarea",{value:l,onChange:_=>o(_.target.value),placeholder:"HSG1.로 시작하는 백업 코드를 붙여넣으세요",style:{width:"100%",height:68,fontSize:11,background:"rgba(0,0,0,0.45)",color:"var(--paper)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:8,padding:8,fontFamily:"monospace",userSelect:"text",WebkitUserSelect:"text"}}),c.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[c.jsx("button",{className:"btn",style:{flex:1,fontSize:13},onClick:g,disabled:!l.trim(),children:"코드 확인"}),c.jsxs("label",{className:"btn",style:{flex:1,fontSize:13,textAlign:"center"},children:["파일 선택",c.jsx("input",{type:"file",accept:".txt,text/plain",onChange:w,style:{display:"none"}})]})]}),d&&c.jsxs("div",{style:{marginTop:10,padding:10,borderRadius:10,background:"rgba(63,138,82,0.15)",border:"1px solid rgba(63,138,82,0.5)",fontSize:12,lineHeight:1.6},children:[c.jsx("b",{style:{color:"var(--ok)"},children:"읽을 수 있는 백업입니다."}),c.jsx("br",{}),"불러올 내용: ",d.meta.summary,c.jsx("br",{}),d.meta.createdAt&&c.jsxs("span",{style:{color:"var(--paper-dim)"},children:["만든 날짜: ",new Date(d.meta.createdAt).toLocaleString("ko-KR")]}),c.jsxs("div",{style:{marginTop:8,color:"var(--warn)"},children:["지금 진행도(",Pl(e),")는 사라집니다."]}),c.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[c.jsx("button",{className:"btn primary",style:{flex:1,fontSize:13},onClick:y,children:"덮어쓰고 복원"}),c.jsx("button",{className:"btn ghost",style:{flex:1,fontSize:13},onClick:()=>f(null),children:"취소"})]})]}),s&&c.jsx("div",{style:{marginTop:10,fontSize:12,lineHeight:1.5,color:s.kind==="ok"?"var(--ok)":s.kind==="warn"?"var(--warn)":"var(--accent)"},children:s.text})]})]})}const Z2=[{key:"biGwangPenalty",label:"비삼광 2점",desc:"3광에 비광이 끼면 3점 대신 2점"},{key:"goMultiplierFrom3",label:"3고부터 배수",desc:"고 1·2회는 가산, 3회부터 2배씩"},{key:"piBak",label:"피박",desc:"상대 피가 기준 이하일 때 2배"},{key:"gwangBak",label:"광박",desc:"상대 광이 없을 때 2배"},{key:"mengBak",label:"멍박",desc:"상대 열끗이 없을 때 2배"},{key:"goBak",label:"고박",desc:"고를 외친 쪽이 지면 2배 부담"},{key:"heundeulgi",label:"흔들기",desc:"같은 월 3장 선언 시 2배"},{key:"bomb",label:"폭탄",desc:"같은 월 3장을 한 번에 투하"},{key:"chongtong",label:"총통",desc:"같은 월 4장이면 즉시 승리"},{key:"nagariDouble",label:"나가리 2배",desc:"나가리 다음 판은 2배"},{key:"gukjinOption",label:"국진 선택",desc:"국진을 열끗/쌍피 중 골라 쓴다"}];function Q2({data:e,device:n,onChange:t,onReset:r,onBack:i}){const l={...Hh,...e.settings.rules},o=(a,d)=>{t({...e,settings:{...e.settings,rules:{...e.settings.rules,[a]:d}}})},s=(a,d)=>{t({...e,settings:{...e.settings,[a]:d}})};return c.jsx("div",{className:"screen",style:{background:"var(--wood-dark)"},children:c.jsxs("div",{className:"layer",children:[c.jsxs("div",{className:"topbar",children:[c.jsx("button",{className:"iconbtn",onClick:i,"aria-label":"뒤로",children:"←"}),c.jsx("h1",{children:"설정"})]}),c.jsxs("div",{className:"panel",children:[c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"점수 해석"}),c.jsx("div",{className:"row",children:c.jsxs("div",{children:["띠 점수 방식",c.jsx("small",{children:"기획서 표기(5장 5점)와 한국 온라인 맞고 표준(5장 1점)이 달라 둘 다 넣었습니다. 홍/청/초단 3점은 두 방식 모두 동일합니다."})]})}),c.jsxs("div",{style:{display:"flex",gap:8,marginTop:6},children:[c.jsx("button",{className:`btn ${l.ttiScoring==="standard"?"primary":"ghost"}`,style:{flex:1,fontSize:13},onClick:()=>o("ttiScoring","standard"),children:"표준 (5장 1점)"}),c.jsx("button",{className:`btn ${l.ttiScoring==="specSheet"?"primary":"ghost"}`,style:{flex:1,fontSize:13},onClick:()=>o("ttiScoring","specSheet"),children:"기획서 (5장 5점)"})]})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"규칙 옵션"}),Z2.map(a=>c.jsxs("div",{className:"row",children:[c.jsxs("div",{children:[a.label,c.jsx("small",{children:a.desc})]}),c.jsx(Au,{on:l[a.key],onToggle:()=>o(a.key,!l[a.key])})]},a.key)),c.jsxs("div",{className:"row",children:[c.jsxs("div",{children:["보너스 쌍피",c.jsx("small",{children:"덱에 섞는 보너스패 장수 (0~3)"})]}),c.jsx("div",{style:{display:"flex",gap:4},children:[0,1,2,3].map(a=>c.jsx("button",{className:`btn ${l.bonusPiCount===a?"primary":"ghost"}`,style:{padding:"6px 11px",fontSize:13},onClick:()=>o("bonusPiCount",a),children:a},a))})]}),c.jsxs("div",{className:"row",children:[c.jsxs("div",{children:["스톱 최소 점수",c.jsx("small",{children:"이 점수 이상이어야 고/스톱을 고를 수 있습니다"})]}),c.jsx("div",{style:{display:"flex",gap:4},children:[3,5,7].map(a=>c.jsx("button",{className:`btn ${l.minScoreToStop===a?"primary":"ghost"}`,style:{padding:"6px 11px",fontSize:13},onClick:()=>o("minScoreToStop",a),children:a},a))})]})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"진행"}),c.jsxs("div",{className:"row",children:[c.jsxs("div",{children:["전원 공략 가능 모드",c.jsx("small",{children:"끄면 한 명과 연애를 시작한 뒤 다른 하숙생의 이벤트는 친구 루트로 분기합니다. 켜면 전원 공략 가능합니다."})]}),c.jsx(Au,{on:e.settings.allRoutes,onToggle:()=>s("allRoutes",!e.settings.allRoutes)})]}),c.jsxs("div",{className:"row",children:[c.jsxs("div",{children:["글자 속도",c.jsx("small",{children:"0에 가까울수록 빠릅니다"})]}),c.jsx("div",{style:{display:"flex",gap:4},children:[[0,"즉시"],[15,"빠름"],[25,"보통"],[45,"느림"]].map(([a,d])=>c.jsx("button",{className:`btn ${e.settings.textSpeed===a?"primary":"ghost"}`,style:{padding:"6px 9px",fontSize:12},onClick:()=>s("textSpeed",a),children:d},a))})]})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"기록"}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"총 대국"}),c.jsxs("span",{children:[e.stats.totalGames,"판"]})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"전적"}),c.jsxs("span",{children:[e.stats.wins,"승 ",e.stats.losses,"패"]})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"최고 점수"}),c.jsxs("span",{children:[e.stats.bestScore,"점"]})]}),c.jsxs("div",{className:"row",children:[c.jsx("span",{children:"보유 포인트"}),c.jsxs("span",{children:[e.points.toLocaleString()," P"]})]})]}),c.jsx(H2,{data:e,device:n,onRestore:t}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"데이터"}),c.jsxs("div",{className:"row",children:[c.jsxs("div",{children:["처음부터 다시",c.jsx("small",{children:"진행도·호감도·포인트·도감이 모두 지워집니다"})]}),c.jsx("button",{className:"btn",style:{background:"linear-gradient(180deg,#9c3c2c,#6f2a1e)"},onClick:()=>{confirm("정말 모든 진행을 지우시겠습니까? 되돌릴 수 없습니다.")&&r()},children:"초기화"})]})]}),c.jsx("div",{style:{textAlign:"center",fontSize:11,color:"var(--paper-dim)",padding:"8px 0 24px"},children:"하숙생 맞고 · 판돈은 하숙집 포인트이며 현금 환전 기능이 없습니다."})]})]})})}const Ju=(()=>{const e=Rh();return["송학 광","매조 홍단","공산 광"].map(n=>e.find(t=>t.name===n))})();function W2({data:e,onChange:n,onBack:t}){const[r,i]=x.useState(null),l=h=>e.owned.includes(h.id),o=h=>h.kind==="cards"?e.equipped.cards===Qn(h):e.equipped.theme===Qn(h),s=h=>{if(!l(h)){if(e.points<h.price){i(`${(h.price-e.points).toLocaleString()}P 가 모자랍니다.`);return}n({...e,points:e.points-h.price,owned:[...e.owned,h.id],equipped:h.kind==="cards"?{...e.equipped,cards:Qn(h)}:{...e.equipped,theme:Qn(h)}}),i(`${h.name} 을(를) 들였습니다. 바로 적용했어요.`)}},a=(h,p)=>{n({...e,equipped:{...e.equipped,[h]:p}}),i(null)},d=Ot.filter(l).length,f=Ot.filter(l).reduce((h,p)=>h+p.price,0);return c.jsx("div",{className:"screen",style:{background:"var(--wood-dark)"},children:c.jsxs("div",{className:"layer",children:[c.jsxs("div",{className:"topbar",children:[c.jsx("button",{className:"iconbtn",onClick:t,"aria-label":"뒤로",children:"←"}),c.jsx("h1",{children:"상점"}),c.jsxs("span",{className:"points",children:[e.points.toLocaleString()," P"]})]}),c.jsxs("div",{className:"panel",children:[c.jsx("div",{className:"section",children:c.jsxs("div",{style:{fontSize:12.5,color:"var(--paper-dim)",lineHeight:1.65},children:["승부에 유리해지는 물건은 팔지 않습니다. 판돈으로 딴 포인트는 겉모습에만 씁니다.",c.jsx("br",{}),"보유 ",d,"/",Ot.length,"종 · 쓴 포인트 ",f.toLocaleString(),"P /"," ",em.toLocaleString(),"P"]})}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"화패"}),c.jsx("div",{style:{display:"flex",gap:5,justifyContent:"center",marginBottom:12},children:Ju.map(h=>c.jsx("img",{src:Al(h,{skin:e.equipped.cards}),alt:h.name,style:{width:54,borderRadius:5,boxShadow:"0 3px 8px rgba(0,0,0,.5)"}},h.id))}),c.jsxs("div",{style:{textAlign:"center",fontSize:12,color:"var(--lamp)",marginBottom:10},children:["지금: ",nm(e.equipped.cards)]}),Ot.filter(h=>h.kind==="cards").map(h=>c.jsx(ed,{item:h,owned:l(h),equipped:o(h),points:e.points,onBuy:()=>s(h),onEquip:()=>a("cards",Qn(h)),preview:c.jsx("img",{src:Al(Ju[0],{skin:Qn(h)}),alt:"",style:{width:38,borderRadius:4}})},h.id)),e.equipped.cards!=="classic"&&c.jsx("button",{className:"btn ghost wide",style:{marginTop:8,fontSize:13},onClick:()=>a("cards","classic"),children:"기본 화패(전통)로 되돌리기"})]}),c.jsxs("div",{className:"section",children:[c.jsx("h3",{children:"마루 테마"}),c.jsxs("div",{style:{fontSize:12,color:"var(--lamp)",marginBottom:10},children:["지금: ",Ua(e.equipped.theme).name]}),Ot.filter(h=>h.kind==="theme").map(h=>c.jsx(ed,{item:h,owned:l(h),equipped:o(h),points:e.points,onBuy:()=>s(h),onEquip:()=>a("theme",Qn(h)),preview:c.jsx(q2,{id:Qn(h)})},h.id)),e.equipped.theme!=="maru"&&c.jsx("button",{className:"btn ghost wide",style:{marginTop:8,fontSize:13},onClick:()=>a("theme","maru"),children:"기본 테마(밤의 마루)로 되돌리기"})]}),r&&c.jsx("div",{className:"hint-box",style:{margin:"0 0 14px"},children:r})]})]})})}function q2({id:e}){const n=Ua(e),t=n.vars["--wood-dark"]??"#2a1f18",r=n.vars["--lamp"]??"#ffd98a",i=n.vars["--wood"]??"#4a3628";return c.jsx("div",{style:{width:38,height:38,borderRadius:8,background:`linear-gradient(140deg, ${t}, ${i})`,border:`2px solid ${r}`,flex:"0 0 auto"}})}function ed({item:e,owned:n,equipped:t,points:r,onBuy:i,onEquip:l,preview:o}){const s=r>=e.price;return c.jsxs("div",{className:"row",style:{alignItems:"center",gap:10},children:[o,c.jsxs("div",{style:{flex:1,minWidth:0},children:[e.name,c.jsx("small",{children:e.desc})]}),n?t?c.jsx("span",{style:{fontSize:12,color:"var(--ok)",fontWeight:700,flex:"0 0 auto"},children:"사용 중"}):c.jsx("button",{className:"btn",style:{padding:"7px 12px",fontSize:12.5},onClick:l,children:"적용"}):c.jsxs("button",{className:`btn ${s?"primary":""}`,style:{padding:"7px 12px",fontSize:12.5,flex:"0 0 auto"},onClick:i,disabled:!s,children:[e.price.toLocaleString(),"P"]})]})}function K2(e,n,t){const r=Va(n),i=e.lines.matchStart[r],l=i[Math.floor(Math.random()*i.length)];return{id:`__prematch_${e.id}_${t}`,title:`${e.name} · ${t}단계`,tenantId:e.id,steps:[{kind:"bg",bg:"maru",time:"night"},{kind:"narrate",text:`마루에 방석 두 개가 깔렸다. ${t}번째 판이다.`},{kind:"say",speaker:e.name,expression:"smile",text:l},{kind:"end"}],labels:{}}}function Y2(){const[e,n]=x.useState(()=>Ch()),[t,r]=x.useState(null),[i,l]=x.useState(!1),[o,s]=x.useState(!1),[a,d]=x.useState({name:"title"}),[f,h]=x.useState(()=>z2()),[p,$]=x.useState({}),[v,k]=x.useState(null);x.useEffect(()=>{let C=!0;return(async()=>{const[I,T]=await Promise.all([Fg(),Gm()]);C&&(r(I),l(T.recovered),n(Q=>{const V=T.data.savedAt>=Q.savedAt?T.data:Q;return V.deviceId===I.id?V:{...V,deviceId:I.id}}),s(!0))})(),()=>{C=!1}},[]),x.useEffect(()=>{O1(e.equipped.cards);const C=Ua(e.equipped.theme),I=document.documentElement;for(const T of["--wood-dark","--wood","--wood-light","--paper","--paper-dim","--lamp","--lamp-dim","--accent"])I.style.removeProperty(T);for(const[T,Q]of Object.entries(C.vars))I.style.setProperty(T,Q)},[e.equipped.cards,e.equipped.theme]),x.useEffect(()=>{o&&Za(e)},[e,o]),x.useEffect(()=>{},[]);const F=x.useMemo(()=>Vm(e.recentGames),[e.recentGames]),m=x.useMemo(()=>Km(e),[e]),g=x.useCallback(()=>d({name:"home"}),[]),y=x.useCallback(C=>{const I=jh(C),T=[{id:"world",when:!0},{id:"prologue",when:!0},{id:"season_summer",when:sr(Or("sua"),I)},{id:"season_autumn",when:sr(Or("yerin"),I)},{id:"season_winter",when:sr(Or("yoon"),I)}];for(const Q of T){if(!Q.when||C.seenScenes.includes(Q.id))continue;const V=Bo(Q.id);if(V)return V}return null},[]),w=x.useCallback(C=>{const I=y(C);d(I?{name:"novel",scene:I,tenant:I.id==="prologue"?Or("eunseo"):null,after:"home"}:{name:"home"})},[y]),N=x.useCallback(()=>w(e),[w,e]),L=x.useCallback(C=>{const I=e.tenants[C.id],T=bh(C);if(e.points<T){alert(`${C.name}와(과) 붙으려면 ${T.toLocaleString()}P 는 들고 있어야 합니다.
점당 ${C.rate}P 라 크게 지면 그만큼 물어줘야 하거든요.`);return}const Q=Math.min(10,(I?.clearedStage??0)+1);d({name:"preMatch",tenant:C,stage:Q})},[e]),_=x.useCallback((C,I,T)=>{const Q=T.won?kh(C,I):0,V=Wm({won:T.won,draw:T.draw,settlementTotal:T.settlementTotal,rate:C.rate}),ae=Hm(e,{tenantId:C.id,stage:I,won:T.won,payout:V,playerWentGo:T.playerWentGo,focus:T.focus,score:T.score},{reward:Q});n(ae),$(be=>({...be,[C.id]:T.won?0:(be[C.id]??0)+1}));const le=ae.tenants[C.id].clearedStage;T.won&&le===I?k({tenant:C,stage:I}):g()},[e,g]);x.useEffect(()=>{if(!v)return;const{tenant:C,stage:I}=v,T=C.events.find(V=>V.stage===I),Q=T?Bo(T.scriptId):null;if(k(null),!Q){g();return}d({name:"novel",scene:Q,tenant:C,after:"home"})},[v,g]);const S=x.useCallback((C,I,T,Q)=>{let V=Zm(e,C.id,T.cg);if(V={...V,points:Math.max(0,V.points+T.pointDelta)},I&&T.affectionDelta!==0&&V.tenants[I.id]&&(V={...V,tenants:{...V.tenants,[I.id]:{...V.tenants[I.id],affection:Math.max(0,Math.min(100,V.tenants[I.id].affection+T.affectionDelta))}}}),n(V),Q==="match"&&I){const ae=V.tenants[I.id],le=Math.min(10,(ae?.clearedStage??0)+1);d({name:"match",tenant:I,stage:le})}else w(V)},[e,w]);if(!f)return c.jsx("div",{className:"app",children:c.jsx(T2,{onEnter:()=>h(!0)})});const A=F1("title");if(a.name==="title")return c.jsx("div",{className:"app",children:c.jsxs("div",{className:"screen title-screen",children:[c.jsx(Si,{bg:"maru",time:"night"}),c.jsx("div",{className:"title-vignette"}),c.jsxs("div",{className:"layer title-layer",children:[A?c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"title-key-bed",style:{backgroundImage:`url("${A}")`}}),c.jsx("img",{className:"title-key",src:A,alt:"하숙생 맞고",draggable:!1})]}):c.jsxs(c.Fragment,{children:[c.jsx(Ya,{className:"title-logo"}),c.jsx("div",{className:"title-sub",children:"밤마다 마루에서, 열 번의 승부"}),c.jsx("div",{className:"title-cast",children:Ze.slice(0,7).map((C,I)=>c.jsx(Rn,{tenant:C,expression:"smile",className:"title-face",style:{zIndex:I===3?9:8-Math.abs(3-I)}},C.id))})]}),c.jsxs("div",{className:"title-menu",children:[c.jsxs("button",{className:"btn primary wide gold",onClick:N,children:["▶ ",e.stats.totalGames>0?"이어하기":"게임 시작"]}),c.jsxs("div",{className:"title-subrow",children:[c.jsx("button",{className:"btn wide",onClick:()=>d({name:"gallery"}),children:"📖 도감"}),c.jsx("button",{className:"btn wide",onClick:()=>d({name:"settings"}),children:"⚙ 설정"})]})]})]})]})});if(a.name==="novel")return c.jsx("div",{className:"app wide",children:c.jsx(Yu,{scene:a.scene,tenant:a.tenant,textSpeed:e.settings.textSpeed,onDone:C=>S(a.scene,a.tenant,C,a.after)},a.scene.id)});if(a.name==="preMatch"){const C=e.tenants[a.tenant.id],I=K2(a.tenant,C?.affection??0,a.stage);return c.jsx("div",{className:"app wide",children:c.jsx(Yu,{scene:I,tenant:a.tenant,textSpeed:e.settings.textSpeed,onDone:()=>d({name:"match",tenant:a.tenant,stage:a.stage})},I.id)})}if(a.name==="match"){const C=e.tenants[a.tenant.id];return c.jsx("div",{className:"app wide",children:c.jsx(A2,{tenant:a.tenant,stage:a.stage,affection:C?.affection??0,rules:e.settings.rules,profile:F,losingStreak:p[a.tenant.id]??0,points:e.points,onFinish:I=>_(a.tenant,a.stage,I),onQuit:g},`${a.tenant.id}-${a.stage}-${e.stats.totalGames}`)})}return a.name==="shop"?c.jsx("div",{className:"app",children:c.jsx(W2,{data:e,onChange:n,onBack:()=>d(e.stats.totalGames>0?{name:"home"}:{name:"title"})})}):a.name==="gallery"?c.jsx("div",{className:"app",children:c.jsx(V1,{data:e,onBack:()=>d(e.stats.totalGames>0?{name:"home"}:{name:"title"})})}):a.name==="settings"?c.jsx("div",{className:"app",children:c.jsx(Q2,{data:e,device:t,onChange:n,onReset:()=>{n(Um()),d({name:"title"})},onBack:()=>d(e.stats.totalGames>0?{name:"home"}:{name:"title"})})}):c.jsxs("div",{className:"app",children:[i&&c.jsxs("div",{className:"hint-box",style:{position:"absolute",top:60,left:12,right:12,zIndex:20,cursor:"pointer"},onClick:()=>l(!1),children:["브라우저 저장소가 비워져 있어 ",c.jsx("b",{children:"백업 사본에서 진행도를 되살렸습니다."})," 설정 → 진행도 백업에서 코드를 받아 두시면 더 안전합니다. (탭하여 닫기)"]}),c.jsx(H1,{data:e,onPick:L,onGallery:()=>d({name:"gallery"}),onShop:()=>d({name:"shop"}),onSettings:()=>d({name:"settings"}),onAllowance:()=>n(C=>qm(C)),allClearedFlag:m,onHidden:()=>{const C=Bo("hidden_ending");C&&d({name:"novel",scene:C,tenant:null,after:"home"})}})]})}function X2(){let e=-1;const n=()=>{const t=Math.round(window.visualViewport?.height??window.innerHeight);t===e||t<=0||(e=t,document.documentElement.style.setProperty("--app-h",`${t}px`))};n(),typeof ResizeObserver<"u"&&new ResizeObserver(n).observe(document.documentElement),window.addEventListener("resize",n,{passive:!0}),window.addEventListener("orientationchange",()=>setTimeout(n,200),{passive:!0}),window.visualViewport?.addEventListener("resize",n,{passive:!0}),window.visualViewport?.addEventListener("scroll",n,{passive:!0})}function J2(){let e=0;document.addEventListener("touchstart",n=>{e=n.touches[0]?.clientY??0},{passive:!0}),document.addEventListener("touchmove",n=>{if(n.touches.length>1||(n.touches[0]?.clientY??0)-e<=0)return;let i=n.target;for(;i&&i!==document.body;){const l=getComputedStyle(i);if(/(auto|scroll)/.test(l.overflowY)&&i.scrollHeight>i.clientHeight&&i.scrollTop>0)return;i=i.parentElement}n.cancelable&&n.preventDefault()},{passive:!1})}function ey(){let e=0;document.addEventListener("touchend",n=>{const t=Date.now();t-e<320&&n.cancelable&&n.preventDefault(),e=t},{passive:!1}),document.addEventListener("gesturestart",n=>n.preventDefault())}function ny(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{const e="./";navigator.serviceWorker.register(`${e}sw.js`,{scope:e}).catch(()=>{})})}function ty(){const e=typeof navigator<"u"?navigator.userAgent:"",n=typeof window<"u"&&window.matchMedia?.("(display-mode: standalone)").matches||navigator.standalone===!0;return{inAppBrowser:/KAKAOTALK|Line\/|FBAN|FBAV|Instagram|NAVER|DaumApps/i.test(e),standalone:!!n,isIOS:/iPhone|iPad|iPod/i.test(e),isAndroid:/Android/i.test(e),landscape:typeof window<"u"&&window.innerWidth>window.innerHeight}}function ry(){X2(),J2(),ey(),ny();const e=ty();return document.documentElement.dataset.inapp=String(e.inAppBrowser),document.documentElement.dataset.standalone=String(e.standalone),e}ry();ph(document.getElementById("root")).render(c.jsx(_0.StrictMode,{children:c.jsx(Y2,{})}));
