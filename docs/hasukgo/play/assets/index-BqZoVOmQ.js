(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();function xf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Lu={exports:{}},Yi={},zu={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=Symbol.for("react.element"),Sf=Symbol.for("react.portal"),Cf=Symbol.for("react.fragment"),bf=Symbol.for("react.strict_mode"),jf=Symbol.for("react.profiler"),_f=Symbol.for("react.provider"),Nf=Symbol.for("react.context"),Ef=Symbol.for("react.forward_ref"),Mf=Symbol.for("react.suspense"),Pf=Symbol.for("react.memo"),Lf=Symbol.for("react.lazy"),Ys=Symbol.iterator;function zf(e){return e===null||typeof e!="object"?null:(e=Ys&&e[Ys]||e["@@iterator"],typeof e=="function"?e:null)}var Du={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Iu=Object.assign,Tu={};function qt(e,n,t){this.props=e,this.context=n,this.refs=Tu,this.updater=t||Du}qt.prototype.isReactComponent={};qt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};qt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Au(){}Au.prototype=qt.prototype;function qo(e,n,t){this.props=e,this.context=n,this.refs=Tu,this.updater=t||Du}var Wo=qo.prototype=new Au;Wo.constructor=qo;Iu(Wo,qt.prototype);Wo.isPureReactComponent=!0;var Xs=Array.isArray,Bu=Object.prototype.hasOwnProperty,Qo={current:null},Ru={key:!0,ref:!0,__self:!0,__source:!0};function Ou(e,n,t){var r,i={},l=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(l=""+n.key),n)Bu.call(n,r)&&!Ru.hasOwnProperty(r)&&(i[r]=n[r]);var s=arguments.length-2;if(s===1)i.children=t;else if(1<s){for(var a=Array(s),d=0;d<s;d++)a[d]=arguments[d+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Br,type:e,key:l,ref:o,props:i,_owner:Qo.current}}function Df(e,n){return{$$typeof:Br,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ko(e){return typeof e=="object"&&e!==null&&e.$$typeof===Br}function If(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Js=/\/+/g;function yl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?If(""+e.key):n.toString(36)}function ci(e,n,t,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Br:case Sf:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+yl(o,0):r,Xs(i)?(t="",e!=null&&(t=e.replace(Js,"$&/")+"/"),ci(i,n,t,"",function(d){return d})):i!=null&&(Ko(i)&&(i=Df(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Js,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",Xs(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+yl(l,s);o+=ci(l,n,t,a,i)}else if(a=zf(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+yl(l,s++),o+=ci(l,n,t,a,i);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Gr(e,n,t){if(e==null)return e;var r=[],i=0;return ci(e,r,"","",function(l){return n.call(t,l,i++)}),r}function Tf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},di={transition:null},Af={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:di,ReactCurrentOwner:Qo};function Fu(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:Gr,forEach:function(e,n,t){Gr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Gr(e,function(){n++}),n},toArray:function(e){return Gr(e,function(n){return n})||[]},only:function(e){if(!Ko(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=qt;F.Fragment=Cf;F.Profiler=jf;F.PureComponent=qo;F.StrictMode=bf;F.Suspense=Mf;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Af;F.act=Fu;F.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Iu({},e.props),i=e.key,l=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,o=Qo.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in n)Bu.call(n,a)&&!Ru.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&s!==void 0?s[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){s=Array(a);for(var d=0;d<a;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Br,type:e.type,key:i,ref:l,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:Nf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_f,_context:e},e.Consumer=e};F.createElement=Ou;F.createFactory=function(e){var n=Ou.bind(null,e);return n.type=e,n};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Ef,render:e}};F.isValidElement=Ko;F.lazy=function(e){return{$$typeof:Lf,_payload:{_status:-1,_result:e},_init:Tf}};F.memo=function(e,n){return{$$typeof:Pf,type:e,compare:n===void 0?null:n}};F.startTransition=function(e){var n=di.transition;di.transition={};try{e()}finally{di.transition=n}};F.unstable_act=Fu;F.useCallback=function(e,n){return ve.current.useCallback(e,n)};F.useContext=function(e){return ve.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};F.useEffect=function(e,n){return ve.current.useEffect(e,n)};F.useId=function(){return ve.current.useId()};F.useImperativeHandle=function(e,n,t){return ve.current.useImperativeHandle(e,n,t)};F.useInsertionEffect=function(e,n){return ve.current.useInsertionEffect(e,n)};F.useLayoutEffect=function(e,n){return ve.current.useLayoutEffect(e,n)};F.useMemo=function(e,n){return ve.current.useMemo(e,n)};F.useReducer=function(e,n,t){return ve.current.useReducer(e,n,t)};F.useRef=function(e){return ve.current.useRef(e)};F.useState=function(e){return ve.current.useState(e)};F.useSyncExternalStore=function(e,n,t){return ve.current.useSyncExternalStore(e,n,t)};F.useTransition=function(){return ve.current.useTransition()};F.version="18.3.1";zu.exports=F;var P=zu.exports;const Bf=xf(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf=P,Of=Symbol.for("react.element"),Ff=Symbol.for("react.fragment"),Uf=Object.prototype.hasOwnProperty,Vf=Rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gf={key:!0,ref:!0,__self:!0,__source:!0};function Uu(e,n,t){var r,i={},l=null,o=null;t!==void 0&&(l=""+t),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)Uf.call(n,r)&&!Gf.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:Of,type:e,key:l,ref:o,props:i,_owner:Vf.current}}Yi.Fragment=Ff;Yi.jsx=Uu;Yi.jsxs=Uu;Lu.exports=Yi;var u=Lu.exports,Vu={exports:{}},Ie={},Gu={exports:{}},Hu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,b){var T=_.length;_.push(b);e:for(;0<T;){var O=T-1>>>1,U=_[O];if(0<i(U,b))_[O]=b,_[T]=U,T=O;else break e}}function t(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var b=_[0],T=_.pop();if(T!==b){_[0]=T;e:for(var O=0,U=_.length,ln=U>>>1;O<ln;){var Hn=2*(O+1)-1,ml=_[Hn],qn=Hn+1,Vr=_[qn];if(0>i(ml,T))qn<U&&0>i(Vr,ml)?(_[O]=Vr,_[qn]=T,O=qn):(_[O]=ml,_[Hn]=T,O=Hn);else if(qn<U&&0>i(Vr,T))_[O]=Vr,_[qn]=T,O=qn;else break e}}return b}function i(_,b){var T=_.sortIndex-b.sortIndex;return T!==0?T:_.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],d=[],f=1,h=null,g=3,v=!1,x=!1,C=!1,N=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(_){for(var b=t(d);b!==null;){if(b.callback===null)r(d);else if(b.startTime<=_)r(d),b.sortIndex=b.expirationTime,n(a,b);else break;b=t(d)}}function $(_){if(C=!1,y(_),!x)if(t(a)!==null)x=!0,Gn(E);else{var b=t(d);b!==null&&yn($,b.startTime-_)}}function E(_,b){x=!1,C&&(C=!1,m(S),S=-1),v=!0;var T=g;try{for(y(b),h=t(a);h!==null&&(!(h.expirationTime>b)||_&&!A());){var O=h.callback;if(typeof O=="function"){h.callback=null,g=h.priorityLevel;var U=O(h.expirationTime<=b);b=e.unstable_now(),typeof U=="function"?h.callback=U:h===t(a)&&r(a),y(b)}else r(a);h=t(a)}if(h!==null)var ln=!0;else{var Hn=t(d);Hn!==null&&yn($,Hn.startTime-b),ln=!1}return ln}finally{h=null,g=T,v=!1}}var L=!1,w=null,S=-1,z=5,I=-1;function A(){return!(e.unstable_now()-I<z)}function ge(){if(w!==null){var _=e.unstable_now();I=_;var b=!0;try{b=w(!0,_)}finally{b?je():(L=!1,w=null)}}else L=!1}var je;if(typeof p=="function")je=function(){p(ge)};else if(typeof MessageChannel<"u"){var rn=new MessageChannel,ft=rn.port2;rn.port1.onmessage=ge,je=function(){ft.postMessage(null)}}else je=function(){N(ge,0)};function Gn(_){w=_,L||(L=!0,je())}function yn(_,b){S=N(function(){_(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,Gn(E))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var b=3;break;default:b=g}var T=g;g=b;try{return _()}finally{g=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,b){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var T=g;g=_;try{return b()}finally{g=T}},e.unstable_scheduleCallback=function(_,b,T){var O=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?O+T:O):T=O,_){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=T+U,_={id:f++,callback:b,priorityLevel:_,startTime:T,expirationTime:U,sortIndex:-1},T>O?(_.sortIndex=T,n(d,_),t(a)===null&&_===t(d)&&(C?(m(S),S=-1):C=!0,yn($,T-O))):(_.sortIndex=U,n(a,_),x||v||(x=!0,Gn(E))),_},e.unstable_shouldYield=A,e.unstable_wrapCallback=function(_){var b=g;return function(){var T=g;g=b;try{return _.apply(this,arguments)}finally{g=T}}}})(Hu);Gu.exports=Hu;var Hf=Gu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf=P,De=Hf;function j(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qu=new Set,$r={};function ut(e,n){At(e,n),At(e+"Capture",n)}function At(e,n){for($r[e]=n,e=0;e<n.length;e++)qu.add(n[e])}var fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hl=Object.prototype.hasOwnProperty,Wf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ea={},na={};function Qf(e){return Hl.call(na,e)?!0:Hl.call(ea,e)?!1:Wf.test(e)?na[e]=!0:(ea[e]=!0,!1)}function Kf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zf(e,n,t,r){if(n===null||typeof n>"u"||Kf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function we(e,n,t,r,i,l,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=o}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ce[n]=new we(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zo=/[\-:]([a-z])/g;function Yo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Zo,Yo);ce[n]=new we(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Zo,Yo);ce[n]=new we(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Zo,Yo);ce[n]=new we(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xo(e,n,t,r){var i=ce.hasOwnProperty(n)?ce[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Zf(n,t,i,r)&&(t=null),r||i===null?Qf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var mn=qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hr=Symbol.for("react.element"),vt=Symbol.for("react.portal"),wt=Symbol.for("react.fragment"),Jo=Symbol.for("react.strict_mode"),ql=Symbol.for("react.profiler"),Wu=Symbol.for("react.provider"),Qu=Symbol.for("react.context"),es=Symbol.for("react.forward_ref"),Wl=Symbol.for("react.suspense"),Ql=Symbol.for("react.suspense_list"),ns=Symbol.for("react.memo"),kn=Symbol.for("react.lazy"),Ku=Symbol.for("react.offscreen"),ta=Symbol.iterator;function Zt(e){return e===null||typeof e!="object"?null:(e=ta&&e[ta]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,vl;function lr(e){if(vl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);vl=n&&n[1]||""}return`
`+vl+e}var wl=!1;function $l(e,n){if(!e||wl)return"";wl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(d){var r=d}Reflect.construct(e,[],n)}else{try{n.call()}catch(d){r=d}e.call(n.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{wl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?lr(e):""}function Yf(e){switch(e.tag){case 5:return lr(e.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return e=$l(e.type,!1),e;case 11:return e=$l(e.type.render,!1),e;case 1:return e=$l(e.type,!0),e;default:return""}}function Kl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wt:return"Fragment";case vt:return"Portal";case ql:return"Profiler";case Jo:return"StrictMode";case Wl:return"Suspense";case Ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qu:return(e.displayName||"Context")+".Consumer";case Wu:return(e._context.displayName||"Context")+".Provider";case es:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ns:return n=e.displayName||null,n!==null?n:Kl(e.type)||"Memo";case kn:n=e._payload,e=e._init;try{return Kl(e(n))}catch{}}return null}function Xf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kl(n);case 8:return n===Jo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function An(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jf(e){var n=Zu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function qr(e){e._valueTracker||(e._valueTracker=Jf(e))}function Yu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Zu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zl(e,n){var t=n.checked;return J({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ra(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=An(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Xu(e,n){n=n.checked,n!=null&&Xo(e,"checked",n,!1)}function Yl(e,n){Xu(e,n);var t=An(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Xl(e,n.type,t):n.hasOwnProperty("defaultValue")&&Xl(e,n.type,An(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ia(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Xl(e,n,t){(n!=="number"||Si(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var or=Array.isArray;function Pt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+An(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Jl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(j(91));return J({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function la(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(j(92));if(or(t)){if(1<t.length)throw Error(j(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:An(t)}}function Ju(e,n){var t=An(n.value),r=An(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function oa(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ec(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ec(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wr,nc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Wr=Wr||document.createElement("div"),Wr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function kr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eh=["Webkit","ms","Moz","O"];Object.keys(dr).forEach(function(e){eh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),dr[n]=dr[e]})});function tc(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||dr.hasOwnProperty(e)&&dr[e]?(""+n).trim():n+"px"}function rc(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=tc(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var nh=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function no(e,n){if(n){if(nh[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(j(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(j(61))}if(n.style!=null&&typeof n.style!="object")throw Error(j(62))}}function to(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ro=null;function ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var io=null,Lt=null,zt=null;function sa(e){if(e=Fr(e)){if(typeof io!="function")throw Error(j(280));var n=e.stateNode;n&&(n=tl(n),io(e.stateNode,e.type,n))}}function ic(e){Lt?zt?zt.push(e):zt=[e]:Lt=e}function lc(){if(Lt){var e=Lt,n=zt;if(zt=Lt=null,sa(e),n)for(e=0;e<n.length;e++)sa(n[e])}}function oc(e,n){return e(n)}function sc(){}var kl=!1;function ac(e,n,t){if(kl)return e(n,t);kl=!0;try{return oc(e,n,t)}finally{kl=!1,(Lt!==null||zt!==null)&&(sc(),lc())}}function xr(e,n){var t=e.stateNode;if(t===null)return null;var r=tl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(j(231,n,typeof t));return t}var lo=!1;if(fn)try{var Yt={};Object.defineProperty(Yt,"passive",{get:function(){lo=!0}}),window.addEventListener("test",Yt,Yt),window.removeEventListener("test",Yt,Yt)}catch{lo=!1}function th(e,n,t,r,i,l,o,s,a){var d=Array.prototype.slice.call(arguments,3);try{n.apply(t,d)}catch(f){this.onError(f)}}var fr=!1,Ci=null,bi=!1,oo=null,rh={onError:function(e){fr=!0,Ci=e}};function ih(e,n,t,r,i,l,o,s,a){fr=!1,Ci=null,th.apply(rh,arguments)}function lh(e,n,t,r,i,l,o,s,a){if(ih.apply(this,arguments),fr){if(fr){var d=Ci;fr=!1,Ci=null}else throw Error(j(198));bi||(bi=!0,oo=d)}}function ct(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function uc(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function aa(e){if(ct(e)!==e)throw Error(j(188))}function oh(e){var n=e.alternate;if(!n){if(n=ct(e),n===null)throw Error(j(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return aa(i),e;if(l===r)return aa(i),n;l=l.sibling}throw Error(j(188))}if(t.return!==r.return)t=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===t){o=!0,t=i,r=l;break}if(s===r){o=!0,r=i,t=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===t){o=!0,t=l,r=i;break}if(s===r){o=!0,r=l,t=i;break}s=s.sibling}if(!o)throw Error(j(189))}}if(t.alternate!==r)throw Error(j(190))}if(t.tag!==3)throw Error(j(188));return t.stateNode.current===t?e:n}function cc(e){return e=oh(e),e!==null?dc(e):null}function dc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=dc(e);if(n!==null)return n;e=e.sibling}return null}var fc=De.unstable_scheduleCallback,ua=De.unstable_cancelCallback,sh=De.unstable_shouldYield,ah=De.unstable_requestPaint,ne=De.unstable_now,uh=De.unstable_getCurrentPriorityLevel,rs=De.unstable_ImmediatePriority,hc=De.unstable_UserBlockingPriority,ji=De.unstable_NormalPriority,ch=De.unstable_LowPriority,pc=De.unstable_IdlePriority,Xi=null,en=null;function dh(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Xi,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:ph,fh=Math.log,hh=Math.LN2;function ph(e){return e>>>=0,e===0?32:31-(fh(e)/hh|0)|0}var Qr=64,Kr=4194304;function sr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _i(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=t&268435455;if(o!==0){var s=o&~i;s!==0?r=sr(s):(l&=o,l!==0&&(r=sr(l)))}else o=t&~i,o!==0?r=sr(o):l!==0&&(r=sr(l));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,l=n&-n,i>=l||i===16&&(l&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Qe(n),i=1<<t,r|=e[t],n&=~i;return r}function gh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mh(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Qe(l),s=1<<o,a=i[o];a===-1?(!(s&t)||s&r)&&(i[o]=gh(s,n)):a<=n&&(e.expiredLanes|=s),l&=~s}}function so(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gc(){var e=Qr;return Qr<<=1,!(Qr&4194240)&&(Qr=64),e}function xl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Rr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Qe(n),e[n]=t}function yh(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Qe(t),l=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~l}}function is(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Qe(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var H=0;function mc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yc,ls,vc,wc,$c,ao=!1,Zr=[],Nn=null,En=null,Mn=null,Sr=new Map,Cr=new Map,Sn=[],vh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ca(e,n){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":Sr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cr.delete(n.pointerId)}}function Xt(e,n,t,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},n!==null&&(n=Fr(n),n!==null&&ls(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function wh(e,n,t,r,i){switch(n){case"focusin":return Nn=Xt(Nn,e,n,t,r,i),!0;case"dragenter":return En=Xt(En,e,n,t,r,i),!0;case"mouseover":return Mn=Xt(Mn,e,n,t,r,i),!0;case"pointerover":var l=i.pointerId;return Sr.set(l,Xt(Sr.get(l)||null,e,n,t,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Cr.set(l,Xt(Cr.get(l)||null,e,n,t,r,i)),!0}return!1}function kc(e){var n=Xn(e.target);if(n!==null){var t=ct(n);if(t!==null){if(n=t.tag,n===13){if(n=uc(t),n!==null){e.blockedOn=n,$c(e.priority,function(){vc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=uo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ro=r,t.target.dispatchEvent(r),ro=null}else return n=Fr(t),n!==null&&ls(n),e.blockedOn=t,!1;n.shift()}return!0}function da(e,n,t){fi(e)&&t.delete(n)}function $h(){ao=!1,Nn!==null&&fi(Nn)&&(Nn=null),En!==null&&fi(En)&&(En=null),Mn!==null&&fi(Mn)&&(Mn=null),Sr.forEach(da),Cr.forEach(da)}function Jt(e,n){e.blockedOn===n&&(e.blockedOn=null,ao||(ao=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,$h)))}function br(e){function n(i){return Jt(i,e)}if(0<Zr.length){Jt(Zr[0],e);for(var t=1;t<Zr.length;t++){var r=Zr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Nn!==null&&Jt(Nn,e),En!==null&&Jt(En,e),Mn!==null&&Jt(Mn,e),Sr.forEach(n),Cr.forEach(n),t=0;t<Sn.length;t++)r=Sn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Sn.length&&(t=Sn[0],t.blockedOn===null);)kc(t),t.blockedOn===null&&Sn.shift()}var Dt=mn.ReactCurrentBatchConfig,Ni=!0;function kh(e,n,t,r){var i=H,l=Dt.transition;Dt.transition=null;try{H=1,os(e,n,t,r)}finally{H=i,Dt.transition=l}}function xh(e,n,t,r){var i=H,l=Dt.transition;Dt.transition=null;try{H=4,os(e,n,t,r)}finally{H=i,Dt.transition=l}}function os(e,n,t,r){if(Ni){var i=uo(e,n,t,r);if(i===null)Ll(e,n,r,Ei,t),ca(e,r);else if(wh(i,e,n,t,r))r.stopPropagation();else if(ca(e,r),n&4&&-1<vh.indexOf(e)){for(;i!==null;){var l=Fr(i);if(l!==null&&yc(l),l=uo(e,n,t,r),l===null&&Ll(e,n,r,Ei,t),l===i)break;i=l}i!==null&&r.stopPropagation()}else Ll(e,n,r,null,t)}}var Ei=null;function uo(e,n,t,r){if(Ei=null,e=ts(r),e=Xn(e),e!==null)if(n=ct(e),n===null)e=null;else if(t=n.tag,t===13){if(e=uc(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ei=e,null}function xc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uh()){case rs:return 1;case hc:return 4;case ji:case ch:return 16;case pc:return 536870912;default:return 16}default:return 16}}var bn=null,ss=null,hi=null;function Sc(){if(hi)return hi;var e,n=ss,t=n.length,r,i="value"in bn?bn.value:bn.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[l-r];r++);return hi=i.slice(e,1<r?1-r:void 0)}function pi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Yr(){return!0}function fa(){return!1}function Te(e){function n(t,r,i,l,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Yr:fa,this.isPropagationStopped=fa,this}return J(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Yr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Yr)},persist:function(){},isPersistent:Yr}),n}var Wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},as=Te(Wt),Or=J({},Wt,{view:0,detail:0}),Sh=Te(Or),Sl,Cl,er,Ji=J({},Or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==er&&(er&&e.type==="mousemove"?(Sl=e.screenX-er.screenX,Cl=e.screenY-er.screenY):Cl=Sl=0,er=e),Sl)},movementY:function(e){return"movementY"in e?e.movementY:Cl}}),ha=Te(Ji),Ch=J({},Ji,{dataTransfer:0}),bh=Te(Ch),jh=J({},Or,{relatedTarget:0}),bl=Te(jh),_h=J({},Wt,{animationName:0,elapsedTime:0,pseudoElement:0}),Nh=Te(_h),Eh=J({},Wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mh=Te(Eh),Ph=J({},Wt,{data:0}),pa=Te(Ph),Lh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ih(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Dh[e])?!!n[e]:!1}function us(){return Ih}var Th=J({},Or,{key:function(e){if(e.key){var n=Lh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:us,charCode:function(e){return e.type==="keypress"?pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ah=Te(Th),Bh=J({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ga=Te(Bh),Rh=J({},Or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:us}),Oh=Te(Rh),Fh=J({},Wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uh=Te(Fh),Vh=J({},Ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gh=Te(Vh),Hh=[9,13,27,32],cs=fn&&"CompositionEvent"in window,hr=null;fn&&"documentMode"in document&&(hr=document.documentMode);var qh=fn&&"TextEvent"in window&&!hr,Cc=fn&&(!cs||hr&&8<hr&&11>=hr),ma=" ",ya=!1;function bc(e,n){switch(e){case"keyup":return Hh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $t=!1;function Wh(e,n){switch(e){case"compositionend":return jc(n);case"keypress":return n.which!==32?null:(ya=!0,ma);case"textInput":return e=n.data,e===ma&&ya?null:e;default:return null}}function Qh(e,n){if($t)return e==="compositionend"||!cs&&bc(e,n)?(e=Sc(),hi=ss=bn=null,$t=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cc&&n.locale!=="ko"?null:n.data;default:return null}}var Kh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function va(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Kh[e.type]:n==="textarea"}function _c(e,n,t,r){ic(r),n=Mi(n,"onChange"),0<n.length&&(t=new as("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var pr=null,jr=null;function Zh(e){Bc(e,0)}function el(e){var n=St(e);if(Yu(n))return e}function Yh(e,n){if(e==="change")return n}var Nc=!1;if(fn){var jl;if(fn){var _l="oninput"in document;if(!_l){var wa=document.createElement("div");wa.setAttribute("oninput","return;"),_l=typeof wa.oninput=="function"}jl=_l}else jl=!1;Nc=jl&&(!document.documentMode||9<document.documentMode)}function $a(){pr&&(pr.detachEvent("onpropertychange",Ec),jr=pr=null)}function Ec(e){if(e.propertyName==="value"&&el(jr)){var n=[];_c(n,jr,e,ts(e)),ac(Zh,n)}}function Xh(e,n,t){e==="focusin"?($a(),pr=n,jr=t,pr.attachEvent("onpropertychange",Ec)):e==="focusout"&&$a()}function Jh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(jr)}function ep(e,n){if(e==="click")return el(n)}function np(e,n){if(e==="input"||e==="change")return el(n)}function tp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ze=typeof Object.is=="function"?Object.is:tp;function _r(e,n){if(Ze(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Hl.call(n,i)||!Ze(e[i],n[i]))return!1}return!0}function ka(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xa(e,n){var t=ka(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ka(t)}}function Mc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Mc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Pc(){for(var e=window,n=Si();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Si(e.document)}return n}function ds(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function rp(e){var n=Pc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Mc(t.ownerDocument.documentElement,t)){if(r!==null&&ds(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=xa(t,l);var o=xa(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ip=fn&&"documentMode"in document&&11>=document.documentMode,kt=null,co=null,gr=null,fo=!1;function Sa(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;fo||kt==null||kt!==Si(r)||(r=kt,"selectionStart"in r&&ds(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gr&&_r(gr,r)||(gr=r,r=Mi(co,"onSelect"),0<r.length&&(n=new as("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=kt)))}function Xr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var xt={animationend:Xr("Animation","AnimationEnd"),animationiteration:Xr("Animation","AnimationIteration"),animationstart:Xr("Animation","AnimationStart"),transitionend:Xr("Transition","TransitionEnd")},Nl={},Lc={};fn&&(Lc=document.createElement("div").style,"AnimationEvent"in window||(delete xt.animationend.animation,delete xt.animationiteration.animation,delete xt.animationstart.animation),"TransitionEvent"in window||delete xt.transitionend.transition);function nl(e){if(Nl[e])return Nl[e];if(!xt[e])return e;var n=xt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Lc)return Nl[e]=n[t];return e}var zc=nl("animationend"),Dc=nl("animationiteration"),Ic=nl("animationstart"),Tc=nl("transitionend"),Ac=new Map,Ca="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(e,n){Ac.set(e,n),ut(n,[e])}for(var El=0;El<Ca.length;El++){var Ml=Ca[El],lp=Ml.toLowerCase(),op=Ml[0].toUpperCase()+Ml.slice(1);Fn(lp,"on"+op)}Fn(zc,"onAnimationEnd");Fn(Dc,"onAnimationIteration");Fn(Ic,"onAnimationStart");Fn("dblclick","onDoubleClick");Fn("focusin","onFocus");Fn("focusout","onBlur");Fn(Tc,"onTransitionEnd");At("onMouseEnter",["mouseout","mouseover"]);At("onMouseLeave",["mouseout","mouseover"]);At("onPointerEnter",["pointerout","pointerover"]);At("onPointerLeave",["pointerout","pointerover"]);ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sp=new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));function ba(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,lh(r,n,void 0,e),e.currentTarget=null}function Bc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var l=void 0;if(n)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,d=s.currentTarget;if(s=s.listener,a!==l&&i.isPropagationStopped())break e;ba(i,s,d),l=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,d=s.currentTarget,s=s.listener,a!==l&&i.isPropagationStopped())break e;ba(i,s,d),l=a}}}if(bi)throw e=oo,bi=!1,oo=null,e}function W(e,n){var t=n[yo];t===void 0&&(t=n[yo]=new Set);var r=e+"__bubble";t.has(r)||(Rc(n,e,2,!1),t.add(r))}function Pl(e,n,t){var r=0;n&&(r|=4),Rc(t,e,r,n)}var Jr="_reactListening"+Math.random().toString(36).slice(2);function Nr(e){if(!e[Jr]){e[Jr]=!0,qu.forEach(function(t){t!=="selectionchange"&&(sp.has(t)||Pl(t,!1,e),Pl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jr]||(n[Jr]=!0,Pl("selectionchange",!1,n))}}function Rc(e,n,t,r){switch(xc(n)){case 1:var i=kh;break;case 4:i=xh;break;default:i=os}t=i.bind(null,n,t,e),i=void 0,!lo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Ll(e,n,t,r,i){var l=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Xn(s),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}s=s.parentNode}}r=r.return}ac(function(){var d=l,f=ts(t),h=[];e:{var g=Ac.get(e);if(g!==void 0){var v=as,x=e;switch(e){case"keypress":if(pi(t)===0)break e;case"keydown":case"keyup":v=Ah;break;case"focusin":x="focus",v=bl;break;case"focusout":x="blur",v=bl;break;case"beforeblur":case"afterblur":v=bl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ha;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=bh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Oh;break;case zc:case Dc:case Ic:v=Nh;break;case Tc:v=Uh;break;case"scroll":v=Sh;break;case"wheel":v=Gh;break;case"copy":case"cut":case"paste":v=Mh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ga}var C=(n&4)!==0,N=!C&&e==="scroll",m=C?g!==null?g+"Capture":null:g;C=[];for(var p=d,y;p!==null;){y=p;var $=y.stateNode;if(y.tag===5&&$!==null&&(y=$,m!==null&&($=xr(p,m),$!=null&&C.push(Er(p,$,y)))),N)break;p=p.return}0<C.length&&(g=new v(g,x,null,t,f),h.push({event:g,listeners:C}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&t!==ro&&(x=t.relatedTarget||t.fromElement)&&(Xn(x)||x[hn]))break e;if((v||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,v?(x=t.relatedTarget||t.toElement,v=d,x=x?Xn(x):null,x!==null&&(N=ct(x),x!==N||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=d),v!==x)){if(C=ha,$="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(C=ga,$="onPointerLeave",m="onPointerEnter",p="pointer"),N=v==null?g:St(v),y=x==null?g:St(x),g=new C($,p+"leave",v,t,f),g.target=N,g.relatedTarget=y,$=null,Xn(f)===d&&(C=new C(m,p+"enter",x,t,f),C.target=y,C.relatedTarget=N,$=C),N=$,v&&x)n:{for(C=v,m=x,p=0,y=C;y;y=ht(y))p++;for(y=0,$=m;$;$=ht($))y++;for(;0<p-y;)C=ht(C),p--;for(;0<y-p;)m=ht(m),y--;for(;p--;){if(C===m||m!==null&&C===m.alternate)break n;C=ht(C),m=ht(m)}C=null}else C=null;v!==null&&ja(h,g,v,C,!1),x!==null&&N!==null&&ja(h,N,x,C,!0)}}e:{if(g=d?St(d):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var E=Yh;else if(va(g))if(Nc)E=np;else{E=Jh;var L=Xh}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=ep);if(E&&(E=E(e,d))){_c(h,E,t,f);break e}L&&L(e,g,d),e==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&Xl(g,"number",g.value)}switch(L=d?St(d):window,e){case"focusin":(va(L)||L.contentEditable==="true")&&(kt=L,co=d,gr=null);break;case"focusout":gr=co=kt=null;break;case"mousedown":fo=!0;break;case"contextmenu":case"mouseup":case"dragend":fo=!1,Sa(h,t,f);break;case"selectionchange":if(ip)break;case"keydown":case"keyup":Sa(h,t,f)}var w;if(cs)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else $t?bc(e,t)&&(S="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(Cc&&t.locale!=="ko"&&($t||S!=="onCompositionStart"?S==="onCompositionEnd"&&$t&&(w=Sc()):(bn=f,ss="value"in bn?bn.value:bn.textContent,$t=!0)),L=Mi(d,S),0<L.length&&(S=new pa(S,e,null,t,f),h.push({event:S,listeners:L}),w?S.data=w:(w=jc(t),w!==null&&(S.data=w)))),(w=qh?Wh(e,t):Qh(e,t))&&(d=Mi(d,"onBeforeInput"),0<d.length&&(f=new pa("onBeforeInput","beforeinput",null,t,f),h.push({event:f,listeners:d}),f.data=w))}Bc(h,n)})}function Er(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Mi(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=xr(e,t),l!=null&&r.unshift(Er(e,l,i)),l=xr(e,n),l!=null&&r.push(Er(e,l,i))),e=e.return}return r}function ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ja(e,n,t,r,i){for(var l=n._reactName,o=[];t!==null&&t!==r;){var s=t,a=s.alternate,d=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&d!==null&&(s=d,i?(a=xr(t,l),a!=null&&o.unshift(Er(t,a,s))):i||(a=xr(t,l),a!=null&&o.push(Er(t,a,s)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var ap=/\r\n?/g,up=/\u0000|\uFFFD/g;function _a(e){return(typeof e=="string"?e:""+e).replace(ap,`
`).replace(up,"")}function ei(e,n,t){if(n=_a(n),_a(e)!==n&&t)throw Error(j(425))}function Pi(){}var ho=null,po=null;function go(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var mo=typeof setTimeout=="function"?setTimeout:void 0,cp=typeof clearTimeout=="function"?clearTimeout:void 0,Na=typeof Promise=="function"?Promise:void 0,dp=typeof queueMicrotask=="function"?queueMicrotask:typeof Na<"u"?function(e){return Na.resolve(null).then(e).catch(fp)}:mo;function fp(e){setTimeout(function(){throw e})}function zl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),br(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);br(n)}function Pn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ea(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Qt=Math.random().toString(36).slice(2),Je="__reactFiber$"+Qt,Mr="__reactProps$"+Qt,hn="__reactContainer$"+Qt,yo="__reactEvents$"+Qt,hp="__reactListeners$"+Qt,pp="__reactHandles$"+Qt;function Xn(e){var n=e[Je];if(n)return n;for(var t=e.parentNode;t;){if(n=t[hn]||t[Je]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ea(e);e!==null;){if(t=e[Je])return t;e=Ea(e)}return n}e=t,t=e.parentNode}return null}function Fr(e){return e=e[Je]||e[hn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function St(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function tl(e){return e[Mr]||null}var vo=[],Ct=-1;function Un(e){return{current:e}}function K(e){0>Ct||(e.current=vo[Ct],vo[Ct]=null,Ct--)}function q(e,n){Ct++,vo[Ct]=e.current,e.current=n}var Bn={},pe=Un(Bn),Se=Un(!1),rt=Bn;function Bt(e,n){var t=e.type.contextTypes;if(!t)return Bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=n[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ce(e){return e=e.childContextTypes,e!=null}function Li(){K(Se),K(pe)}function Ma(e,n,t){if(pe.current!==Bn)throw Error(j(168));q(pe,n),q(Se,t)}function Oc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(j(108,Xf(e)||"Unknown",i));return J({},t,r)}function zi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bn,rt=pe.current,q(pe,e),q(Se,Se.current),!0}function Pa(e,n,t){var r=e.stateNode;if(!r)throw Error(j(169));t?(e=Oc(e,n,rt),r.__reactInternalMemoizedMergedChildContext=e,K(Se),K(pe),q(pe,e)):K(Se),q(Se,t)}var sn=null,rl=!1,Dl=!1;function Fc(e){sn===null?sn=[e]:sn.push(e)}function gp(e){rl=!0,Fc(e)}function Vn(){if(!Dl&&sn!==null){Dl=!0;var e=0,n=H;try{var t=sn;for(H=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}sn=null,rl=!1}catch(i){throw sn!==null&&(sn=sn.slice(e+1)),fc(rs,Vn),i}finally{H=n,Dl=!1}}return null}var bt=[],jt=0,Di=null,Ii=0,Be=[],Re=0,it=null,an=1,un="";function Kn(e,n){bt[jt++]=Ii,bt[jt++]=Di,Di=e,Ii=n}function Uc(e,n,t){Be[Re++]=an,Be[Re++]=un,Be[Re++]=it,it=e;var r=an;e=un;var i=32-Qe(r)-1;r&=~(1<<i),t+=1;var l=32-Qe(n)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,an=1<<32-Qe(n)+i|t<<i|r,un=l+e}else an=1<<l|t<<i|r,un=e}function fs(e){e.return!==null&&(Kn(e,1),Uc(e,1,0))}function hs(e){for(;e===Di;)Di=bt[--jt],bt[jt]=null,Ii=bt[--jt],bt[jt]=null;for(;e===it;)it=Be[--Re],Be[Re]=null,un=Be[--Re],Be[Re]=null,an=Be[--Re],Be[Re]=null}var ze=null,Le=null,Z=!1,We=null;function Vc(e,n){var t=Oe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function La(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ze=e,Le=Pn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ze=e,Le=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=it!==null?{id:an,overflow:un}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Oe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ze=e,Le=null,!0):!1;default:return!1}}function wo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $o(e){if(Z){var n=Le;if(n){var t=n;if(!La(e,n)){if(wo(e))throw Error(j(418));n=Pn(t.nextSibling);var r=ze;n&&La(e,n)?Vc(r,t):(e.flags=e.flags&-4097|2,Z=!1,ze=e)}}else{if(wo(e))throw Error(j(418));e.flags=e.flags&-4097|2,Z=!1,ze=e}}}function za(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ze=e}function ni(e){if(e!==ze)return!1;if(!Z)return za(e),Z=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!go(e.type,e.memoizedProps)),n&&(n=Le)){if(wo(e))throw Gc(),Error(j(418));for(;n;)Vc(e,n),n=Pn(n.nextSibling)}if(za(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Le=Pn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Le=null}}else Le=ze?Pn(e.stateNode.nextSibling):null;return!0}function Gc(){for(var e=Le;e;)e=Pn(e.nextSibling)}function Rt(){Le=ze=null,Z=!1}function ps(e){We===null?We=[e]:We.push(e)}var mp=mn.ReactCurrentBatchConfig;function nr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(j(309));var r=t.stateNode}if(!r)throw Error(j(147,e));var i=r,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(o){var s=i.refs;o===null?delete s[l]:s[l]=o},n._stringRef=l,n)}if(typeof e!="string")throw Error(j(284));if(!t._owner)throw Error(j(290,e))}return e}function ti(e,n){throw e=Object.prototype.toString.call(n),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Da(e){var n=e._init;return n(e._payload)}function Hc(e){function n(m,p){if(e){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function t(m,p){if(!e)return null;for(;p!==null;)n(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=In(m,p),m.index=0,m.sibling=null,m}function l(m,p,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,p,y,$){return p===null||p.tag!==6?(p=Fl(y,m.mode,$),p.return=m,p):(p=i(p,y),p.return=m,p)}function a(m,p,y,$){var E=y.type;return E===wt?f(m,p,y.props.children,$,y.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===kn&&Da(E)===p.type)?($=i(p,y.props),$.ref=nr(m,p,y),$.return=m,$):($=ki(y.type,y.key,y.props,null,m.mode,$),$.ref=nr(m,p,y),$.return=m,$)}function d(m,p,y,$){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Ul(y,m.mode,$),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function f(m,p,y,$,E){return p===null||p.tag!==7?(p=tt(y,m.mode,$,E),p.return=m,p):(p=i(p,y),p.return=m,p)}function h(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Fl(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Hr:return y=ki(p.type,p.key,p.props,null,m.mode,y),y.ref=nr(m,null,p),y.return=m,y;case vt:return p=Ul(p,m.mode,y),p.return=m,p;case kn:var $=p._init;return h(m,$(p._payload),y)}if(or(p)||Zt(p))return p=tt(p,m.mode,y,null),p.return=m,p;ti(m,p)}return null}function g(m,p,y,$){var E=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:s(m,p,""+y,$);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Hr:return y.key===E?a(m,p,y,$):null;case vt:return y.key===E?d(m,p,y,$):null;case kn:return E=y._init,g(m,p,E(y._payload),$)}if(or(y)||Zt(y))return E!==null?null:f(m,p,y,$,null);ti(m,y)}return null}function v(m,p,y,$,E){if(typeof $=="string"&&$!==""||typeof $=="number")return m=m.get(y)||null,s(p,m,""+$,E);if(typeof $=="object"&&$!==null){switch($.$$typeof){case Hr:return m=m.get($.key===null?y:$.key)||null,a(p,m,$,E);case vt:return m=m.get($.key===null?y:$.key)||null,d(p,m,$,E);case kn:var L=$._init;return v(m,p,y,L($._payload),E)}if(or($)||Zt($))return m=m.get(y)||null,f(p,m,$,E,null);ti(p,$)}return null}function x(m,p,y,$){for(var E=null,L=null,w=p,S=p=0,z=null;w!==null&&S<y.length;S++){w.index>S?(z=w,w=null):z=w.sibling;var I=g(m,w,y[S],$);if(I===null){w===null&&(w=z);break}e&&w&&I.alternate===null&&n(m,w),p=l(I,p,S),L===null?E=I:L.sibling=I,L=I,w=z}if(S===y.length)return t(m,w),Z&&Kn(m,S),E;if(w===null){for(;S<y.length;S++)w=h(m,y[S],$),w!==null&&(p=l(w,p,S),L===null?E=w:L.sibling=w,L=w);return Z&&Kn(m,S),E}for(w=r(m,w);S<y.length;S++)z=v(w,m,S,y[S],$),z!==null&&(e&&z.alternate!==null&&w.delete(z.key===null?S:z.key),p=l(z,p,S),L===null?E=z:L.sibling=z,L=z);return e&&w.forEach(function(A){return n(m,A)}),Z&&Kn(m,S),E}function C(m,p,y,$){var E=Zt(y);if(typeof E!="function")throw Error(j(150));if(y=E.call(y),y==null)throw Error(j(151));for(var L=E=null,w=p,S=p=0,z=null,I=y.next();w!==null&&!I.done;S++,I=y.next()){w.index>S?(z=w,w=null):z=w.sibling;var A=g(m,w,I.value,$);if(A===null){w===null&&(w=z);break}e&&w&&A.alternate===null&&n(m,w),p=l(A,p,S),L===null?E=A:L.sibling=A,L=A,w=z}if(I.done)return t(m,w),Z&&Kn(m,S),E;if(w===null){for(;!I.done;S++,I=y.next())I=h(m,I.value,$),I!==null&&(p=l(I,p,S),L===null?E=I:L.sibling=I,L=I);return Z&&Kn(m,S),E}for(w=r(m,w);!I.done;S++,I=y.next())I=v(w,m,S,I.value,$),I!==null&&(e&&I.alternate!==null&&w.delete(I.key===null?S:I.key),p=l(I,p,S),L===null?E=I:L.sibling=I,L=I);return e&&w.forEach(function(ge){return n(m,ge)}),Z&&Kn(m,S),E}function N(m,p,y,$){if(typeof y=="object"&&y!==null&&y.type===wt&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Hr:e:{for(var E=y.key,L=p;L!==null;){if(L.key===E){if(E=y.type,E===wt){if(L.tag===7){t(m,L.sibling),p=i(L,y.props.children),p.return=m,m=p;break e}}else if(L.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===kn&&Da(E)===L.type){t(m,L.sibling),p=i(L,y.props),p.ref=nr(m,L,y),p.return=m,m=p;break e}t(m,L);break}else n(m,L);L=L.sibling}y.type===wt?(p=tt(y.props.children,m.mode,$,y.key),p.return=m,m=p):($=ki(y.type,y.key,y.props,null,m.mode,$),$.ref=nr(m,p,y),$.return=m,m=$)}return o(m);case vt:e:{for(L=y.key;p!==null;){if(p.key===L)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){t(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{t(m,p);break}else n(m,p);p=p.sibling}p=Ul(y,m.mode,$),p.return=m,m=p}return o(m);case kn:return L=y._init,N(m,p,L(y._payload),$)}if(or(y))return x(m,p,y,$);if(Zt(y))return C(m,p,y,$);ti(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(t(m,p.sibling),p=i(p,y),p.return=m,m=p):(t(m,p),p=Fl(y,m.mode,$),p.return=m,m=p),o(m)):t(m,p)}return N}var Ot=Hc(!0),qc=Hc(!1),Ti=Un(null),Ai=null,_t=null,gs=null;function ms(){gs=_t=Ai=null}function ys(e){var n=Ti.current;K(Ti),e._currentValue=n}function ko(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function It(e,n){Ai=e,gs=_t=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(xe=!0),e.firstContext=null)}function Ue(e){var n=e._currentValue;if(gs!==e)if(e={context:e,memoizedValue:n,next:null},_t===null){if(Ai===null)throw Error(j(308));_t=e,Ai.dependencies={lanes:0,firstContext:e}}else _t=_t.next=e;return n}var Jn=null;function vs(e){Jn===null?Jn=[e]:Jn.push(e)}function Wc(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,vs(n)):(t.next=i.next,i.next=t),n.interleaved=t,pn(e,r)}function pn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var xn=!1;function ws(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Ln(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,pn(e,t)}return i=r.interleaved,i===null?(n.next=n,vs(r)):(n.next=i.next,i.next=n),r.interleaved=n,pn(e,t)}function gi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,is(e,t)}}function Ia(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Bi(e,n,t,r){var i=e.updateQueue;xn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,d=a.next;a.next=null,o===null?l=d:o.next=d,o=a;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==o&&(s===null?f.firstBaseUpdate=d:s.next=d,f.lastBaseUpdate=a))}if(l!==null){var h=i.baseState;o=0,f=d=a=null,s=l;do{var g=s.lane,v=s.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,C=s;switch(g=n,v=t,C.tag){case 1:if(x=C.payload,typeof x=="function"){h=x.call(v,h,g);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=C.payload,g=typeof x=="function"?x.call(v,h,g):x,g==null)break e;h=J({},h,g);break e;case 2:xn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else v={eventTime:v,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(d=f=v,a=h):f=f.next=v,o|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(a=h),i.baseState=a,i.firstBaseUpdate=d,i.lastBaseUpdate=f,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else l===null&&(i.shared.lanes=0);ot|=o,e.lanes=o,e.memoizedState=h}}function Ta(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var Ur={},nn=Un(Ur),Pr=Un(Ur),Lr=Un(Ur);function et(e){if(e===Ur)throw Error(j(174));return e}function $s(e,n){switch(q(Lr,n),q(Pr,e),q(nn,Ur),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:eo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=eo(n,e)}K(nn),q(nn,n)}function Ft(){K(nn),K(Pr),K(Lr)}function Kc(e){et(Lr.current);var n=et(nn.current),t=eo(n,e.type);n!==t&&(q(Pr,e),q(nn,t))}function ks(e){Pr.current===e&&(K(nn),K(Pr))}var Y=Un(0);function Ri(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Il=[];function xs(){for(var e=0;e<Il.length;e++)Il[e]._workInProgressVersionPrimary=null;Il.length=0}var mi=mn.ReactCurrentDispatcher,Tl=mn.ReactCurrentBatchConfig,lt=0,X=null,re=null,le=null,Oi=!1,mr=!1,zr=0,yp=0;function de(){throw Error(j(321))}function Ss(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ze(e[t],n[t]))return!1;return!0}function Cs(e,n,t,r,i,l){if(lt=l,X=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,mi.current=e===null||e.memoizedState===null?kp:xp,e=t(r,i),mr){l=0;do{if(mr=!1,zr=0,25<=l)throw Error(j(301));l+=1,le=re=null,n.updateQueue=null,mi.current=Sp,e=t(r,i)}while(mr)}if(mi.current=Fi,n=re!==null&&re.next!==null,lt=0,le=re=X=null,Oi=!1,n)throw Error(j(300));return e}function bs(){var e=zr!==0;return zr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?X.memoizedState=le=e:le=le.next=e,le}function Ve(){if(re===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var n=le===null?X.memoizedState:le.next;if(n!==null)le=n,re=e;else{if(e===null)throw Error(j(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},le===null?X.memoizedState=le=e:le=le.next=e}return le}function Dr(e,n){return typeof n=="function"?n(e):n}function Al(e){var n=Ve(),t=n.queue;if(t===null)throw Error(j(311));t.lastRenderedReducer=e;var r=re,i=r.baseQueue,l=t.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,a=null,d=l;do{var f=d.lane;if((lt&f)===f)a!==null&&(a=a.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};a===null?(s=a=h,o=r):a=a.next=h,X.lanes|=f,ot|=f}d=d.next}while(d!==null&&d!==l);a===null?o=r:a.next=s,Ze(r,n.memoizedState)||(xe=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do l=i.lane,X.lanes|=l,ot|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Bl(e){var n=Ve(),t=n.queue;if(t===null)throw Error(j(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Ze(l,n.memoizedState)||(xe=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,r]}function Zc(){}function Yc(e,n){var t=X,r=Ve(),i=n(),l=!Ze(r.memoizedState,i);if(l&&(r.memoizedState=i,xe=!0),r=r.queue,js(ed.bind(null,t,r,e),[e]),r.getSnapshot!==n||l||le!==null&&le.memoizedState.tag&1){if(t.flags|=2048,Ir(9,Jc.bind(null,t,r,i,n),void 0,null),oe===null)throw Error(j(349));lt&30||Xc(t,n,i)}return i}function Xc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Jc(e,n,t,r){n.value=t,n.getSnapshot=r,nd(n)&&td(e)}function ed(e,n,t){return t(function(){nd(n)&&td(e)})}function nd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ze(e,t)}catch{return!0}}function td(e){var n=pn(e,1);n!==null&&Ke(n,e,1,-1)}function Aa(e){var n=Xe();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:e},n.queue=e,e=e.dispatch=$p.bind(null,X,e),[n.memoizedState,e]}function Ir(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=X.updateQueue,n===null?(n={lastEffect:null,stores:null},X.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function rd(){return Ve().memoizedState}function yi(e,n,t,r){var i=Xe();X.flags|=e,i.memoizedState=Ir(1|n,t,void 0,r===void 0?null:r)}function il(e,n,t,r){var i=Ve();r=r===void 0?null:r;var l=void 0;if(re!==null){var o=re.memoizedState;if(l=o.destroy,r!==null&&Ss(r,o.deps)){i.memoizedState=Ir(n,t,l,r);return}}X.flags|=e,i.memoizedState=Ir(1|n,t,l,r)}function Ba(e,n){return yi(8390656,8,e,n)}function js(e,n){return il(2048,8,e,n)}function id(e,n){return il(4,2,e,n)}function ld(e,n){return il(4,4,e,n)}function od(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function sd(e,n,t){return t=t!=null?t.concat([e]):null,il(4,4,od.bind(null,n,e),t)}function _s(){}function ad(e,n){var t=Ve();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ss(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function ud(e,n){var t=Ve();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ss(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function cd(e,n,t){return lt&21?(Ze(t,n)||(t=gc(),X.lanes|=t,ot|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=t)}function vp(e,n){var t=H;H=t!==0&&4>t?t:4,e(!0);var r=Tl.transition;Tl.transition={};try{e(!1),n()}finally{H=t,Tl.transition=r}}function dd(){return Ve().memoizedState}function wp(e,n,t){var r=Dn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},fd(e))hd(n,t);else if(t=Wc(e,n,t,r),t!==null){var i=ye();Ke(t,e,r,i),pd(t,n,r)}}function $p(e,n,t){var r=Dn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(fd(e))hd(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,s=l(o,t);if(i.hasEagerState=!0,i.eagerState=s,Ze(s,o)){var a=n.interleaved;a===null?(i.next=i,vs(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=Wc(e,n,i,r),t!==null&&(i=ye(),Ke(t,e,r,i),pd(t,n,r))}}function fd(e){var n=e.alternate;return e===X||n!==null&&n===X}function hd(e,n){mr=Oi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function pd(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,is(e,t)}}var Fi={readContext:Ue,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},kp={readContext:Ue,useCallback:function(e,n){return Xe().memoizedState=[e,n===void 0?null:n],e},useContext:Ue,useEffect:Ba,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,yi(4194308,4,od.bind(null,n,e),t)},useLayoutEffect:function(e,n){return yi(4194308,4,e,n)},useInsertionEffect:function(e,n){return yi(4,2,e,n)},useMemo:function(e,n){var t=Xe();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Xe();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=wp.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var n=Xe();return e={current:e},n.memoizedState=e},useState:Aa,useDebugValue:_s,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=Aa(!1),n=e[0];return e=vp.bind(null,e[1]),Xe().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=X,i=Xe();if(Z){if(t===void 0)throw Error(j(407));t=t()}else{if(t=n(),oe===null)throw Error(j(349));lt&30||Xc(r,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,Ba(ed.bind(null,r,l,e),[e]),r.flags|=2048,Ir(9,Jc.bind(null,r,l,t,n),void 0,null),t},useId:function(){var e=Xe(),n=oe.identifierPrefix;if(Z){var t=un,r=an;t=(r&~(1<<32-Qe(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=zr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=yp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},xp={readContext:Ue,useCallback:ad,useContext:Ue,useEffect:js,useImperativeHandle:sd,useInsertionEffect:id,useLayoutEffect:ld,useMemo:ud,useReducer:Al,useRef:rd,useState:function(){return Al(Dr)},useDebugValue:_s,useDeferredValue:function(e){var n=Ve();return cd(n,re.memoizedState,e)},useTransition:function(){var e=Al(Dr)[0],n=Ve().memoizedState;return[e,n]},useMutableSource:Zc,useSyncExternalStore:Yc,useId:dd,unstable_isNewReconciler:!1},Sp={readContext:Ue,useCallback:ad,useContext:Ue,useEffect:js,useImperativeHandle:sd,useInsertionEffect:id,useLayoutEffect:ld,useMemo:ud,useReducer:Bl,useRef:rd,useState:function(){return Bl(Dr)},useDebugValue:_s,useDeferredValue:function(e){var n=Ve();return re===null?n.memoizedState=e:cd(n,re.memoizedState,e)},useTransition:function(){var e=Bl(Dr)[0],n=Ve().memoizedState;return[e,n]},useMutableSource:Zc,useSyncExternalStore:Yc,useId:dd,unstable_isNewReconciler:!1};function He(e,n){if(e&&e.defaultProps){n=J({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function xo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:J({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ll={isMounted:function(e){return(e=e._reactInternals)?ct(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ye(),i=Dn(e),l=dn(r,i);l.payload=n,t!=null&&(l.callback=t),n=Ln(e,l,i),n!==null&&(Ke(n,e,i,r),gi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ye(),i=Dn(e),l=dn(r,i);l.tag=1,l.payload=n,t!=null&&(l.callback=t),n=Ln(e,l,i),n!==null&&(Ke(n,e,i,r),gi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ye(),r=Dn(e),i=dn(t,r);i.tag=2,n!=null&&(i.callback=n),n=Ln(e,i,r),n!==null&&(Ke(n,e,r,t),gi(n,e,r))}};function Ra(e,n,t,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):n.prototype&&n.prototype.isPureReactComponent?!_r(t,r)||!_r(i,l):!0}function gd(e,n,t){var r=!1,i=Bn,l=n.contextType;return typeof l=="object"&&l!==null?l=Ue(l):(i=Ce(n)?rt:pe.current,r=n.contextTypes,l=(r=r!=null)?Bt(e,i):Bn),n=new n(t,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ll,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),n}function Oa(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ll.enqueueReplaceState(n,n.state,null)}function So(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},ws(e);var l=n.contextType;typeof l=="object"&&l!==null?i.context=Ue(l):(l=Ce(n)?rt:pe.current,i.context=Bt(e,l)),i.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(xo(e,n,l,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&ll.enqueueReplaceState(i,i.state,null),Bi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ut(e,n){try{var t="",r=n;do t+=Yf(r),r=r.return;while(r);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:i,digest:null}}function Rl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Co(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Cp=typeof WeakMap=="function"?WeakMap:Map;function md(e,n,t){t=dn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Vi||(Vi=!0,Do=r),Co(e,n)},t}function yd(e,n,t){t=dn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Co(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Co(e,n),typeof r!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Fa(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Cp;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=Bp.bind(null,e,n,t),n.then(e,e))}function Ua(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Va(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=dn(-1,1),n.tag=2,Ln(t,n,1))),t.lanes|=1),e)}var bp=mn.ReactCurrentOwner,xe=!1;function me(e,n,t,r){n.child=e===null?qc(n,null,t,r):Ot(n,e.child,t,r)}function Ga(e,n,t,r,i){t=t.render;var l=n.ref;return It(n,i),r=Cs(e,n,t,r,l,i),t=bs(),e!==null&&!xe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,gn(e,n,i)):(Z&&t&&fs(n),n.flags|=1,me(e,n,r,i),n.child)}function Ha(e,n,t,r,i){if(e===null){var l=t.type;return typeof l=="function"&&!Is(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=l,vd(e,n,l,r,i)):(e=ki(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:_r,t(o,r)&&e.ref===n.ref)return gn(e,n,i)}return n.flags|=1,e=In(l,r),e.ref=n.ref,e.return=n,n.child=e}function vd(e,n,t,r,i){if(e!==null){var l=e.memoizedProps;if(_r(l,r)&&e.ref===n.ref)if(xe=!1,n.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(xe=!0);else return n.lanes=e.lanes,gn(e,n,i)}return bo(e,n,t,r,i)}function wd(e,n,t){var r=n.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Et,Ne),Ne|=t;else{if(!(t&1073741824))return e=l!==null?l.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,q(Et,Ne),Ne|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:t,q(Et,Ne),Ne|=r}else l!==null?(r=l.baseLanes|t,n.memoizedState=null):r=t,q(Et,Ne),Ne|=r;return me(e,n,i,t),n.child}function $d(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function bo(e,n,t,r,i){var l=Ce(t)?rt:pe.current;return l=Bt(n,l),It(n,i),t=Cs(e,n,t,r,l,i),r=bs(),e!==null&&!xe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,gn(e,n,i)):(Z&&r&&fs(n),n.flags|=1,me(e,n,t,i),n.child)}function qa(e,n,t,r,i){if(Ce(t)){var l=!0;zi(n)}else l=!1;if(It(n,i),n.stateNode===null)vi(e,n),gd(n,t,r),So(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,s=n.memoizedProps;o.props=s;var a=o.context,d=t.contextType;typeof d=="object"&&d!==null?d=Ue(d):(d=Ce(t)?rt:pe.current,d=Bt(n,d));var f=t.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==d)&&Oa(n,o,r,d),xn=!1;var g=n.memoizedState;o.state=g,Bi(n,r,o,i),a=n.memoizedState,s!==r||g!==a||Se.current||xn?(typeof f=="function"&&(xo(n,t,f,r),a=n.memoizedState),(s=xn||Ra(n,t,s,r,g,a,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),o.props=r,o.state=a,o.context=d,r=s):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Qc(e,n),s=n.memoizedProps,d=n.type===n.elementType?s:He(n.type,s),o.props=d,h=n.pendingProps,g=o.context,a=t.contextType,typeof a=="object"&&a!==null?a=Ue(a):(a=Ce(t)?rt:pe.current,a=Bt(n,a));var v=t.getDerivedStateFromProps;(f=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||g!==a)&&Oa(n,o,r,a),xn=!1,g=n.memoizedState,o.state=g,Bi(n,r,o,i);var x=n.memoizedState;s!==h||g!==x||Se.current||xn?(typeof v=="function"&&(xo(n,t,v,r),x=n.memoizedState),(d=xn||Ra(n,t,d,r,g,x,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,a)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),o.props=r,o.state=x,o.context=a,r=d):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return jo(e,n,t,r,l,i)}function jo(e,n,t,r,i,l){$d(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&Pa(n,t,!1),gn(e,n,l);r=n.stateNode,bp.current=n;var s=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=Ot(n,e.child,null,l),n.child=Ot(n,null,s,l)):me(e,n,s,l),n.memoizedState=r.state,i&&Pa(n,t,!0),n.child}function kd(e){var n=e.stateNode;n.pendingContext?Ma(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ma(e,n.context,!1),$s(e,n.containerInfo)}function Wa(e,n,t,r,i){return Rt(),ps(i),n.flags|=256,me(e,n,t,r),n.child}var _o={dehydrated:null,treeContext:null,retryLane:0};function No(e){return{baseLanes:e,cachePool:null,transitions:null}}function xd(e,n,t){var r=n.pendingProps,i=Y.current,l=!1,o=(n.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),q(Y,i&1),e===null)return $o(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,l?(r=n.mode,l=n.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=al(o,r,0,null),e=tt(e,r,t,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=No(t),n.memoizedState=_o,e):Ns(n,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return jp(e,n,o,r,s,i,t);if(l){l=r.fallback,o=n.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=In(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=In(s,l):(l=tt(l,o,t,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,r=l,l=n.child,o=e.child.memoizedState,o=o===null?No(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~t,n.memoizedState=_o,r}return l=e.child,e=l.sibling,r=In(l,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ns(e,n){return n=al({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function ri(e,n,t,r){return r!==null&&ps(r),Ot(n,e.child,null,t),e=Ns(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function jp(e,n,t,r,i,l,o){if(t)return n.flags&256?(n.flags&=-257,r=Rl(Error(j(422))),ri(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=r.fallback,i=n.mode,r=al({mode:"visible",children:r.children},i,0,null),l=tt(l,i,o,null),l.flags|=2,r.return=n,l.return=n,r.sibling=l,n.child=r,n.mode&1&&Ot(n,e.child,null,o),n.child.memoizedState=No(o),n.memoizedState=_o,l);if(!(n.mode&1))return ri(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(j(419)),r=Rl(l,r,void 0),ri(e,n,o,r)}if(s=(o&e.childLanes)!==0,xe||s){if(r=oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,pn(e,i),Ke(r,e,i,-1))}return Ds(),r=Rl(Error(j(421))),ri(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=Rp.bind(null,e),i._reactRetry=n,null):(e=l.treeContext,Le=Pn(i.nextSibling),ze=n,Z=!0,We=null,e!==null&&(Be[Re++]=an,Be[Re++]=un,Be[Re++]=it,an=e.id,un=e.overflow,it=n),n=Ns(n,r.children),n.flags|=4096,n)}function Qa(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ko(e.return,n,t)}function Ol(e,n,t,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=i)}function Sd(e,n,t){var r=n.pendingProps,i=r.revealOrder,l=r.tail;if(me(e,n,r.children,t),r=Y.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qa(e,t,n);else if(e.tag===19)Qa(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(Y,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Ri(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Ol(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Ri(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Ol(n,!0,t,null,l);break;case"together":Ol(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function vi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function gn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ot|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(j(153));if(n.child!==null){for(e=n.child,t=In(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=In(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function _p(e,n,t){switch(n.tag){case 3:kd(n),Rt();break;case 5:Kc(n);break;case 1:Ce(n.type)&&zi(n);break;case 4:$s(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;q(Ti,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(q(Y,Y.current&1),n.flags|=128,null):t&n.child.childLanes?xd(e,n,t):(q(Y,Y.current&1),e=gn(e,n,t),e!==null?e.sibling:null);q(Y,Y.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Sd(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(Y,Y.current),r)break;return null;case 22:case 23:return n.lanes=0,wd(e,n,t)}return gn(e,n,t)}var Cd,Eo,bd,jd;Cd=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Eo=function(){};bd=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,et(nn.current);var l=null;switch(t){case"input":i=Zl(e,i),r=Zl(e,r),l=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),l=[];break;case"textarea":i=Jl(e,i),r=Jl(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Pi)}no(t,r);var o;t=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var s=i[d];for(o in s)s.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&($r.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in r){var a=r[d];if(s=i?.[d],r.hasOwnProperty(d)&&a!==s&&(a!=null||s!=null))if(d==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(t||(t={}),t[o]=a[o])}else t||(l||(l=[]),l.push(d,t)),t=a;else d==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(d,a)):d==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(d,""+a):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&($r.hasOwnProperty(d)?(a!=null&&d==="onScroll"&&W("scroll",e),l||s===a||(l=[])):(l=l||[]).push(d,a))}t&&(l=l||[]).push("style",t);var d=l;(n.updateQueue=d)&&(n.flags|=4)}};jd=function(e,n,t,r){t!==r&&(n.flags|=4)};function tr(e,n){if(!Z)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Np(e,n,t){var r=n.pendingProps;switch(hs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(n),null;case 1:return Ce(n.type)&&Li(),fe(n),null;case 3:return r=n.stateNode,Ft(),K(Se),K(pe),xs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ni(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,We!==null&&(Ao(We),We=null))),Eo(e,n),fe(n),null;case 5:ks(n);var i=et(Lr.current);if(t=n.type,e!==null&&n.stateNode!=null)bd(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(j(166));return fe(n),null}if(e=et(nn.current),ni(n)){r=n.stateNode,t=n.type;var l=n.memoizedProps;switch(r[Je]=n,r[Mr]=l,e=(n.mode&1)!==0,t){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<ar.length;i++)W(ar[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":ra(r,l),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},W("invalid",r);break;case"textarea":la(r,l),W("invalid",r)}no(t,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&ei(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&ei(r.textContent,s,e),i=["children",""+s]):$r.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&W("scroll",r)}switch(t){case"input":qr(r),ia(r,l,!0);break;case"textarea":qr(r),oa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Pi)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ec(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Je]=n,e[Mr]=r,Cd(e,n,!1,!1),n.stateNode=e;e:{switch(o=to(t,r),t){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<ar.length;i++)W(ar[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":ra(e,r),i=Zl(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),W("invalid",e);break;case"textarea":la(e,r),i=Jl(e,r),W("invalid",e);break;default:i=r}no(t,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?rc(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&nc(e,a)):l==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&kr(e,a):typeof a=="number"&&kr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&($r.hasOwnProperty(l)?a!=null&&l==="onScroll"&&W("scroll",e):a!=null&&Xo(e,l,a,o))}switch(t){case"input":qr(e),ia(e,r,!1);break;case"textarea":qr(e),oa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+An(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Pt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Pt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Pi)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return fe(n),null;case 6:if(e&&n.stateNode!=null)jd(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(j(166));if(t=et(Lr.current),et(nn.current),ni(n)){if(r=n.stateNode,t=n.memoizedProps,r[Je]=n,(l=r.nodeValue!==t)&&(e=ze,e!==null))switch(e.tag){case 3:ei(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ei(r.nodeValue,t,(e.mode&1)!==0)}l&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Je]=n,n.stateNode=r}return fe(n),null;case 13:if(K(Y),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Le!==null&&n.mode&1&&!(n.flags&128))Gc(),Rt(),n.flags|=98560,l=!1;else if(l=ni(n),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(j(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(j(317));l[Je]=n}else Rt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;fe(n),l=!1}else We!==null&&(Ao(We),We=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Y.current&1?ie===0&&(ie=3):Ds())),n.updateQueue!==null&&(n.flags|=4),fe(n),null);case 4:return Ft(),Eo(e,n),e===null&&Nr(n.stateNode.containerInfo),fe(n),null;case 10:return ys(n.type._context),fe(n),null;case 17:return Ce(n.type)&&Li(),fe(n),null;case 19:if(K(Y),l=n.memoizedState,l===null)return fe(n),null;if(r=(n.flags&128)!==0,o=l.rendering,o===null)if(r)tr(l,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Ri(e),o!==null){for(n.flags|=128,tr(l,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)l=t,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return q(Y,Y.current&1|2),n.child}e=e.sibling}l.tail!==null&&ne()>Vt&&(n.flags|=128,r=!0,tr(l,!1),n.lanes=4194304)}else{if(!r)if(e=Ri(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),tr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Z)return fe(n),null}else 2*ne()-l.renderingStartTime>Vt&&t!==1073741824&&(n.flags|=128,r=!0,tr(l,!1),n.lanes=4194304);l.isBackwards?(o.sibling=n.child,n.child=o):(t=l.last,t!==null?t.sibling=o:n.child=o,l.last=o)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=ne(),n.sibling=null,t=Y.current,q(Y,r?t&1|2:t&1),n):(fe(n),null);case 22:case 23:return zs(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Ne&1073741824&&(fe(n),n.subtreeFlags&6&&(n.flags|=8192)):fe(n),null;case 24:return null;case 25:return null}throw Error(j(156,n.tag))}function Ep(e,n){switch(hs(n),n.tag){case 1:return Ce(n.type)&&Li(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ft(),K(Se),K(pe),xs(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ks(n),null;case 13:if(K(Y),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(j(340));Rt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return K(Y),null;case 4:return Ft(),null;case 10:return ys(n.type._context),null;case 22:case 23:return zs(),null;case 24:return null;default:return null}}var ii=!1,he=!1,Mp=typeof WeakSet=="function"?WeakSet:Set,D=null;function Nt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ee(e,n,r)}else t.current=null}function Mo(e,n,t){try{t()}catch(r){ee(e,n,r)}}var Ka=!1;function Pp(e,n){if(ho=Ni,e=Pc(),ds(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,s=-1,a=-1,d=0,f=0,h=e,g=null;n:for(;;){for(var v;h!==t||i!==0&&h.nodeType!==3||(s=o+i),h!==l||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(v=h.firstChild)!==null;)g=h,h=v;for(;;){if(h===e)break n;if(g===t&&++d===i&&(s=o),g===l&&++f===r&&(a=o),(v=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=v}t=s===-1||a===-1?null:{start:s,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(po={focusedElem:e,selectionRange:t},Ni=!1,D=n;D!==null;)if(n=D,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,D=e;else for(;D!==null;){n=D;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var C=x.memoizedProps,N=x.memoizedState,m=n.stateNode,p=m.getSnapshotBeforeUpdate(n.elementType===n.type?C:He(n.type,C),N);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch($){ee(n,n.return,$)}if(e=n.sibling,e!==null){e.return=n.return,D=e;break}D=n.return}return x=Ka,Ka=!1,x}function yr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Mo(n,t,l)}i=i.next}while(i!==r)}}function ol(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Po(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function _d(e){var n=e.alternate;n!==null&&(e.alternate=null,_d(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Je],delete n[Mr],delete n[yo],delete n[hp],delete n[pp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nd(e){return e.tag===5||e.tag===3||e.tag===4}function Za(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Pi));else if(r!==4&&(e=e.child,e!==null))for(Lo(e,n,t),e=e.sibling;e!==null;)Lo(e,n,t),e=e.sibling}function zo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(zo(e,n,t),e=e.sibling;e!==null;)zo(e,n,t),e=e.sibling}var se=null,qe=!1;function vn(e,n,t){for(t=t.child;t!==null;)Ed(e,n,t),t=t.sibling}function Ed(e,n,t){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Xi,t)}catch{}switch(t.tag){case 5:he||Nt(t,n);case 6:var r=se,i=qe;se=null,vn(e,n,t),se=r,qe=i,se!==null&&(qe?(e=se,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):se.removeChild(t.stateNode));break;case 18:se!==null&&(qe?(e=se,t=t.stateNode,e.nodeType===8?zl(e.parentNode,t):e.nodeType===1&&zl(e,t),br(e)):zl(se,t.stateNode));break;case 4:r=se,i=qe,se=t.stateNode.containerInfo,qe=!0,vn(e,n,t),se=r,qe=i;break;case 0:case 11:case 14:case 15:if(!he&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Mo(t,n,o),i=i.next}while(i!==r)}vn(e,n,t);break;case 1:if(!he&&(Nt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){ee(t,n,s)}vn(e,n,t);break;case 21:vn(e,n,t);break;case 22:t.mode&1?(he=(r=he)||t.memoizedState!==null,vn(e,n,t),he=r):vn(e,n,t);break;default:vn(e,n,t)}}function Ya(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Mp),n.forEach(function(r){var i=Op.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function Ge(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var l=e,o=n,s=o;e:for(;s!==null;){switch(s.tag){case 5:se=s.stateNode,qe=!1;break e;case 3:se=s.stateNode.containerInfo,qe=!0;break e;case 4:se=s.stateNode.containerInfo,qe=!0;break e}s=s.return}if(se===null)throw Error(j(160));Ed(l,o,i),se=null,qe=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(d){ee(i,n,d)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Md(n,e),n=n.sibling}function Md(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(n,e),Ye(e),r&4){try{yr(3,e,e.return),ol(3,e)}catch(C){ee(e,e.return,C)}try{yr(5,e,e.return)}catch(C){ee(e,e.return,C)}}break;case 1:Ge(n,e),Ye(e),r&512&&t!==null&&Nt(t,t.return);break;case 5:if(Ge(n,e),Ye(e),r&512&&t!==null&&Nt(t,t.return),e.flags&32){var i=e.stateNode;try{kr(i,"")}catch(C){ee(e,e.return,C)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=t!==null?t.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Xu(i,l),to(s,o);var d=to(s,l);for(o=0;o<a.length;o+=2){var f=a[o],h=a[o+1];f==="style"?rc(i,h):f==="dangerouslySetInnerHTML"?nc(i,h):f==="children"?kr(i,h):Xo(i,f,h,d)}switch(s){case"input":Yl(i,l);break;case"textarea":Ju(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?Pt(i,!!l.multiple,v,!1):g!==!!l.multiple&&(l.defaultValue!=null?Pt(i,!!l.multiple,l.defaultValue,!0):Pt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Mr]=l}catch(C){ee(e,e.return,C)}}break;case 6:if(Ge(n,e),Ye(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(C){ee(e,e.return,C)}}break;case 3:if(Ge(n,e),Ye(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{br(n.containerInfo)}catch(C){ee(e,e.return,C)}break;case 4:Ge(n,e),Ye(e);break;case 13:Ge(n,e),Ye(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Ps=ne())),r&4&&Ya(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(he=(d=he)||f,Ge(n,e),he=d):Ge(n,e),Ye(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(D=e,f=e.child;f!==null;){for(h=D=f;D!==null;){switch(g=D,v=g.child,g.tag){case 0:case 11:case 14:case 15:yr(4,g,g.return);break;case 1:Nt(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(C){ee(r,t,C)}}break;case 5:Nt(g,g.return);break;case 22:if(g.memoizedState!==null){Ja(h);continue}}v!==null?(v.return=g,D=v):Ja(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,d?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=tc("display",o))}catch(C){ee(e,e.return,C)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(C){ee(e,e.return,C)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ge(n,e),Ye(e),r&4&&Ya(e);break;case 21:break;default:Ge(n,e),Ye(e)}}function Ye(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Nd(t)){var r=t;break e}t=t.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(kr(i,""),r.flags&=-33);var l=Za(e);zo(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Za(e);Lo(e,s,o);break;default:throw Error(j(161))}}catch(a){ee(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Lp(e,n,t){D=e,Pd(e)}function Pd(e,n,t){for(var r=(e.mode&1)!==0;D!==null;){var i=D,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ii;if(!o){var s=i.alternate,a=s!==null&&s.memoizedState!==null||he;s=ii;var d=he;if(ii=o,(he=a)&&!d)for(D=i;D!==null;)o=D,a=o.child,o.tag===22&&o.memoizedState!==null?eu(i):a!==null?(a.return=o,D=a):eu(i);for(;l!==null;)D=l,Pd(l),l=l.sibling;D=i,ii=s,he=d}Xa(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,D=l):Xa(e)}}function Xa(e){for(;D!==null;){var n=D;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:he||ol(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!he)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:He(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Ta(n,l,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ta(n,o,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var d=n.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&br(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}he||n.flags&512&&Po(n)}catch(g){ee(n,n.return,g)}}if(n===e){D=null;break}if(t=n.sibling,t!==null){t.return=n.return,D=t;break}D=n.return}}function Ja(e){for(;D!==null;){var n=D;if(n===e){D=null;break}var t=n.sibling;if(t!==null){t.return=n.return,D=t;break}D=n.return}}function eu(e){for(;D!==null;){var n=D;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ol(4,n)}catch(a){ee(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){ee(n,i,a)}}var l=n.return;try{Po(n)}catch(a){ee(n,l,a)}break;case 5:var o=n.return;try{Po(n)}catch(a){ee(n,o,a)}}}catch(a){ee(n,n.return,a)}if(n===e){D=null;break}var s=n.sibling;if(s!==null){s.return=n.return,D=s;break}D=n.return}}var zp=Math.ceil,Ui=mn.ReactCurrentDispatcher,Es=mn.ReactCurrentOwner,Fe=mn.ReactCurrentBatchConfig,V=0,oe=null,te=null,ue=0,Ne=0,Et=Un(0),ie=0,Tr=null,ot=0,sl=0,Ms=0,vr=null,ke=null,Ps=0,Vt=1/0,on=null,Vi=!1,Do=null,zn=null,li=!1,jn=null,Gi=0,wr=0,Io=null,wi=-1,$i=0;function ye(){return V&6?ne():wi!==-1?wi:wi=ne()}function Dn(e){return e.mode&1?V&2&&ue!==0?ue&-ue:mp.transition!==null?($i===0&&($i=gc()),$i):(e=H,e!==0||(e=window.event,e=e===void 0?16:xc(e.type)),e):1}function Ke(e,n,t,r){if(50<wr)throw wr=0,Io=null,Error(j(185));Rr(e,t,r),(!(V&2)||e!==oe)&&(e===oe&&(!(V&2)&&(sl|=t),ie===4&&Cn(e,ue)),be(e,r),t===1&&V===0&&!(n.mode&1)&&(Vt=ne()+500,rl&&Vn()))}function be(e,n){var t=e.callbackNode;mh(e,n);var r=_i(e,e===oe?ue:0);if(r===0)t!==null&&ua(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&ua(t),n===1)e.tag===0?gp(nu.bind(null,e)):Fc(nu.bind(null,e)),dp(function(){!(V&6)&&Vn()}),t=null;else{switch(mc(r)){case 1:t=rs;break;case 4:t=hc;break;case 16:t=ji;break;case 536870912:t=pc;break;default:t=ji}t=Rd(t,Ld.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ld(e,n){if(wi=-1,$i=0,V&6)throw Error(j(327));var t=e.callbackNode;if(Tt()&&e.callbackNode!==t)return null;var r=_i(e,e===oe?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Hi(e,r);else{n=r;var i=V;V|=2;var l=Dd();(oe!==e||ue!==n)&&(on=null,Vt=ne()+500,nt(e,n));do try{Tp();break}catch(s){zd(e,s)}while(!0);ms(),Ui.current=l,V=i,te!==null?n=0:(oe=null,ue=0,n=ie)}if(n!==0){if(n===2&&(i=so(e),i!==0&&(r=i,n=To(e,i))),n===1)throw t=Tr,nt(e,0),Cn(e,r),be(e,ne()),t;if(n===6)Cn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Dp(i)&&(n=Hi(e,r),n===2&&(l=so(e),l!==0&&(r=l,n=To(e,l))),n===1))throw t=Tr,nt(e,0),Cn(e,r),be(e,ne()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(j(345));case 2:Zn(e,ke,on);break;case 3:if(Cn(e,r),(r&130023424)===r&&(n=Ps+500-ne(),10<n)){if(_i(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=mo(Zn.bind(null,e,ke,on),n);break}Zn(e,ke,on);break;case 4:if(Cn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-Qe(r);l=1<<o,o=n[o],o>i&&(i=o),r&=~l}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zp(r/1960))-r,10<r){e.timeoutHandle=mo(Zn.bind(null,e,ke,on),r);break}Zn(e,ke,on);break;case 5:Zn(e,ke,on);break;default:throw Error(j(329))}}}return be(e,ne()),e.callbackNode===t?Ld.bind(null,e):null}function To(e,n){var t=vr;return e.current.memoizedState.isDehydrated&&(nt(e,n).flags|=256),e=Hi(e,n),e!==2&&(n=ke,ke=t,n!==null&&Ao(n)),e}function Ao(e){ke===null?ke=e:ke.push.apply(ke,e)}function Dp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],l=i.getSnapshot;i=i.value;try{if(!Ze(l(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Cn(e,n){for(n&=~Ms,n&=~sl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Qe(n),r=1<<t;e[t]=-1,n&=~r}}function nu(e){if(V&6)throw Error(j(327));Tt();var n=_i(e,0);if(!(n&1))return be(e,ne()),null;var t=Hi(e,n);if(e.tag!==0&&t===2){var r=so(e);r!==0&&(n=r,t=To(e,r))}if(t===1)throw t=Tr,nt(e,0),Cn(e,n),be(e,ne()),t;if(t===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Zn(e,ke,on),be(e,ne()),null}function Ls(e,n){var t=V;V|=1;try{return e(n)}finally{V=t,V===0&&(Vt=ne()+500,rl&&Vn())}}function st(e){jn!==null&&jn.tag===0&&!(V&6)&&Tt();var n=V;V|=1;var t=Fe.transition,r=H;try{if(Fe.transition=null,H=1,e)return e()}finally{H=r,Fe.transition=t,V=n,!(V&6)&&Vn()}}function zs(){Ne=Et.current,K(Et)}function nt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,cp(t)),te!==null)for(t=te.return;t!==null;){var r=t;switch(hs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Li();break;case 3:Ft(),K(Se),K(pe),xs();break;case 5:ks(r);break;case 4:Ft();break;case 13:K(Y);break;case 19:K(Y);break;case 10:ys(r.type._context);break;case 22:case 23:zs()}t=t.return}if(oe=e,te=e=In(e.current,null),ue=Ne=n,ie=0,Tr=null,Ms=sl=ot=0,ke=vr=null,Jn!==null){for(n=0;n<Jn.length;n++)if(t=Jn[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,l=t.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}t.pending=r}Jn=null}return e}function zd(e,n){do{var t=te;try{if(ms(),mi.current=Fi,Oi){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Oi=!1}if(lt=0,le=re=X=null,mr=!1,zr=0,Es.current=null,t===null||t.return===null){ie=1,Tr=n,te=null;break}e:{var l=e,o=t.return,s=t,a=n;if(n=ue,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var d=a,f=s,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Ua(o);if(v!==null){v.flags&=-257,Va(v,o,s,l,n),v.mode&1&&Fa(l,d,n),n=v,a=d;var x=n.updateQueue;if(x===null){var C=new Set;C.add(a),n.updateQueue=C}else x.add(a);break e}else{if(!(n&1)){Fa(l,d,n),Ds();break e}a=Error(j(426))}}else if(Z&&s.mode&1){var N=Ua(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Va(N,o,s,l,n),ps(Ut(a,s));break e}}l=a=Ut(a,s),ie!==4&&(ie=2),vr===null?vr=[l]:vr.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var m=md(l,a,n);Ia(l,m);break e;case 1:s=a;var p=l.type,y=l.stateNode;if(!(l.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(zn===null||!zn.has(y)))){l.flags|=65536,n&=-n,l.lanes|=n;var $=yd(l,s,n);Ia(l,$);break e}}l=l.return}while(l!==null)}Td(t)}catch(E){n=E,te===t&&t!==null&&(te=t=t.return);continue}break}while(!0)}function Dd(){var e=Ui.current;return Ui.current=Fi,e===null?Fi:e}function Ds(){(ie===0||ie===3||ie===2)&&(ie=4),oe===null||!(ot&268435455)&&!(sl&268435455)||Cn(oe,ue)}function Hi(e,n){var t=V;V|=2;var r=Dd();(oe!==e||ue!==n)&&(on=null,nt(e,n));do try{Ip();break}catch(i){zd(e,i)}while(!0);if(ms(),V=t,Ui.current=r,te!==null)throw Error(j(261));return oe=null,ue=0,ie}function Ip(){for(;te!==null;)Id(te)}function Tp(){for(;te!==null&&!sh();)Id(te)}function Id(e){var n=Bd(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,n===null?Td(e):te=n,Es.current=null}function Td(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Ep(t,n),t!==null){t.flags&=32767,te=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,te=null;return}}else if(t=Np(t,n,Ne),t!==null){te=t;return}if(n=n.sibling,n!==null){te=n;return}te=n=e}while(n!==null);ie===0&&(ie=5)}function Zn(e,n,t){var r=H,i=Fe.transition;try{Fe.transition=null,H=1,Ap(e,n,t,r)}finally{Fe.transition=i,H=r}return null}function Ap(e,n,t,r){do Tt();while(jn!==null);if(V&6)throw Error(j(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(yh(e,l),e===oe&&(te=oe=null,ue=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||li||(li=!0,Rd(ji,function(){return Tt(),null})),l=(t.flags&15990)!==0,t.subtreeFlags&15990||l){l=Fe.transition,Fe.transition=null;var o=H;H=1;var s=V;V|=4,Es.current=null,Pp(e,t),Md(t,e),rp(po),Ni=!!ho,po=ho=null,e.current=t,Lp(t),ah(),V=s,H=o,Fe.transition=l}else e.current=t;if(li&&(li=!1,jn=e,Gi=i),l=e.pendingLanes,l===0&&(zn=null),dh(t.stateNode),be(e,ne()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vi)throw Vi=!1,e=Do,Do=null,e;return Gi&1&&e.tag!==0&&Tt(),l=e.pendingLanes,l&1?e===Io?wr++:(wr=0,Io=e):wr=0,Vn(),null}function Tt(){if(jn!==null){var e=mc(Gi),n=Fe.transition,t=H;try{if(Fe.transition=null,H=16>e?16:e,jn===null)var r=!1;else{if(e=jn,jn=null,Gi=0,V&6)throw Error(j(331));var i=V;for(V|=4,D=e.current;D!==null;){var l=D,o=l.child;if(D.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var d=s[a];for(D=d;D!==null;){var f=D;switch(f.tag){case 0:case 11:case 15:yr(8,f,l)}var h=f.child;if(h!==null)h.return=f,D=h;else for(;D!==null;){f=D;var g=f.sibling,v=f.return;if(_d(f),f===d){D=null;break}if(g!==null){g.return=v,D=g;break}D=v}}}var x=l.alternate;if(x!==null){var C=x.child;if(C!==null){x.child=null;do{var N=C.sibling;C.sibling=null,C=N}while(C!==null)}}D=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,D=o;else e:for(;D!==null;){if(l=D,l.flags&2048)switch(l.tag){case 0:case 11:case 15:yr(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,D=m;break e}D=l.return}}var p=e.current;for(D=p;D!==null;){o=D;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,D=y;else e:for(o=p;D!==null;){if(s=D,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ol(9,s)}}catch(E){ee(s,s.return,E)}if(s===o){D=null;break e}var $=s.sibling;if($!==null){$.return=s.return,D=$;break e}D=s.return}}if(V=i,Vn(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Xi,e)}catch{}r=!0}return r}finally{H=t,Fe.transition=n}}return!1}function tu(e,n,t){n=Ut(t,n),n=md(e,n,1),e=Ln(e,n,1),n=ye(),e!==null&&(Rr(e,1,n),be(e,n))}function ee(e,n,t){if(e.tag===3)tu(e,e,t);else for(;n!==null;){if(n.tag===3){tu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zn===null||!zn.has(r))){e=Ut(t,e),e=yd(n,e,1),n=Ln(n,e,1),e=ye(),n!==null&&(Rr(n,1,e),be(n,e));break}}n=n.return}}function Bp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ye(),e.pingedLanes|=e.suspendedLanes&t,oe===e&&(ue&t)===t&&(ie===4||ie===3&&(ue&130023424)===ue&&500>ne()-Ps?nt(e,0):Ms|=t),be(e,n)}function Ad(e,n){n===0&&(e.mode&1?(n=Kr,Kr<<=1,!(Kr&130023424)&&(Kr=4194304)):n=1);var t=ye();e=pn(e,n),e!==null&&(Rr(e,n,t),be(e,t))}function Rp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ad(e,t)}function Op(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(n),Ad(e,t)}var Bd;Bd=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Se.current)xe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return xe=!1,_p(e,n,t);xe=!!(e.flags&131072)}else xe=!1,Z&&n.flags&1048576&&Uc(n,Ii,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;vi(e,n),e=n.pendingProps;var i=Bt(n,pe.current);It(n,t),i=Cs(null,n,r,e,i,t);var l=bs();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ce(r)?(l=!0,zi(n)):l=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ws(n),i.updater=ll,n.stateNode=i,i._reactInternals=n,So(n,r,e,t),n=jo(null,n,r,!0,l,t)):(n.tag=0,Z&&l&&fs(n),me(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(vi(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=Up(r),e=He(r,e),i){case 0:n=bo(null,n,r,e,t);break e;case 1:n=qa(null,n,r,e,t);break e;case 11:n=Ga(null,n,r,e,t);break e;case 14:n=Ha(null,n,r,He(r.type,e),t);break e}throw Error(j(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:He(r,i),bo(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:He(r,i),qa(e,n,r,i,t);case 3:e:{if(kd(n),e===null)throw Error(j(387));r=n.pendingProps,l=n.memoizedState,i=l.element,Qc(e,n),Bi(n,r,null,t);var o=n.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){i=Ut(Error(j(423)),n),n=Wa(e,n,r,t,i);break e}else if(r!==i){i=Ut(Error(j(424)),n),n=Wa(e,n,r,t,i);break e}else for(Le=Pn(n.stateNode.containerInfo.firstChild),ze=n,Z=!0,We=null,t=qc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Rt(),r===i){n=gn(e,n,t);break e}me(e,n,r,t)}n=n.child}return n;case 5:return Kc(n),e===null&&$o(n),r=n.type,i=n.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,go(r,i)?o=null:l!==null&&go(r,l)&&(n.flags|=32),$d(e,n),me(e,n,o,t),n.child;case 6:return e===null&&$o(n),null;case 13:return xd(e,n,t);case 4:return $s(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ot(n,null,r,t):me(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:He(r,i),Ga(e,n,r,i,t);case 7:return me(e,n,n.pendingProps,t),n.child;case 8:return me(e,n,n.pendingProps.children,t),n.child;case 12:return me(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,l=n.memoizedProps,o=i.value,q(Ti,r._currentValue),r._currentValue=o,l!==null)if(Ze(l.value,o)){if(l.children===i.children&&!Se.current){n=gn(e,n,t);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=dn(-1,t&-t),a.tag=2;var d=l.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?a.next=a:(a.next=f.next,f.next=a),d.pending=a}}l.lanes|=t,a=l.alternate,a!==null&&(a.lanes|=t),ko(l.return,t,n),s.lanes|=t;break}a=a.next}}else if(l.tag===10)o=l.type===n.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(j(341));o.lanes|=t,s=o.alternate,s!==null&&(s.lanes|=t),ko(o,t,n),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===n){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}me(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,It(n,t),i=Ue(i),r=r(i),n.flags|=1,me(e,n,r,t),n.child;case 14:return r=n.type,i=He(r,n.pendingProps),i=He(r.type,i),Ha(e,n,r,i,t);case 15:return vd(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:He(r,i),vi(e,n),n.tag=1,Ce(r)?(e=!0,zi(n)):e=!1,It(n,t),gd(n,r,i),So(n,r,i,t),jo(null,n,r,!0,e,t);case 19:return Sd(e,n,t);case 22:return wd(e,n,t)}throw Error(j(156,n.tag))};function Rd(e,n){return fc(e,n)}function Fp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,n,t,r){return new Fp(e,n,t,r)}function Is(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Up(e){if(typeof e=="function")return Is(e)?1:0;if(e!=null){if(e=e.$$typeof,e===es)return 11;if(e===ns)return 14}return 2}function In(e,n){var t=e.alternate;return t===null?(t=Oe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ki(e,n,t,r,i,l){var o=2;if(r=e,typeof e=="function")Is(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case wt:return tt(t.children,i,l,n);case Jo:o=8,i|=8;break;case ql:return e=Oe(12,t,n,i|2),e.elementType=ql,e.lanes=l,e;case Wl:return e=Oe(13,t,n,i),e.elementType=Wl,e.lanes=l,e;case Ql:return e=Oe(19,t,n,i),e.elementType=Ql,e.lanes=l,e;case Ku:return al(t,i,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wu:o=10;break e;case Qu:o=9;break e;case es:o=11;break e;case ns:o=14;break e;case kn:o=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return n=Oe(o,t,n,i),n.elementType=e,n.type=r,n.lanes=l,n}function tt(e,n,t,r){return e=Oe(7,e,r,n),e.lanes=t,e}function al(e,n,t,r){return e=Oe(22,e,r,n),e.elementType=Ku,e.lanes=t,e.stateNode={isHidden:!1},e}function Fl(e,n,t){return e=Oe(6,e,null,n),e.lanes=t,e}function Ul(e,n,t){return n=Oe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Vp(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xl(0),this.expirationTimes=xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ts(e,n,t,r,i,l,o,s,a){return e=new Vp(e,n,t,s,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Oe(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ws(l),e}function Gp(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Od(e){if(!e)return Bn;e=e._reactInternals;e:{if(ct(e)!==e||e.tag!==1)throw Error(j(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ce(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(j(171))}if(e.tag===1){var t=e.type;if(Ce(t))return Oc(e,t,n)}return n}function Fd(e,n,t,r,i,l,o,s,a){return e=Ts(t,r,!0,e,i,l,o,s,a),e.context=Od(null),t=e.current,r=ye(),i=Dn(t),l=dn(r,i),l.callback=n??null,Ln(t,l,i),e.current.lanes=i,Rr(e,i,r),be(e,r),e}function ul(e,n,t,r){var i=n.current,l=ye(),o=Dn(i);return t=Od(t),n.context===null?n.context=t:n.pendingContext=t,n=dn(l,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Ln(i,n,o),e!==null&&(Ke(e,i,o,l),gi(e,i,o)),o}function qi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ru(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function As(e,n){ru(e,n),(e=e.alternate)&&ru(e,n)}function Hp(){return null}var Ud=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bs(e){this._internalRoot=e}cl.prototype.render=Bs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(j(409));ul(e,n,null,null)};cl.prototype.unmount=Bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;st(function(){ul(null,e,null,null)}),n[hn]=null}};function cl(e){this._internalRoot=e}cl.prototype.unstable_scheduleHydration=function(e){if(e){var n=wc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Sn.length&&n!==0&&n<Sn[t].priority;t++);Sn.splice(t,0,e),t===0&&kc(e)}};function Rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function iu(){}function qp(e,n,t,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var d=qi(o);l.call(d)}}var o=Fd(n,r,e,0,null,!1,!1,"",iu);return e._reactRootContainer=o,e[hn]=o.current,Nr(e.nodeType===8?e.parentNode:e),st(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var d=qi(a);s.call(d)}}var a=Ts(e,0,!1,null,null,!1,!1,"",iu);return e._reactRootContainer=a,e[hn]=a.current,Nr(e.nodeType===8?e.parentNode:e),st(function(){ul(n,a,t,r)}),a}function fl(e,n,t,r,i){var l=t._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var a=qi(o);s.call(a)}}ul(n,o,e,i)}else o=qp(t,n,e,i,r);return qi(o)}yc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=sr(n.pendingLanes);t!==0&&(is(n,t|1),be(n,ne()),!(V&6)&&(Vt=ne()+500,Vn()))}break;case 13:st(function(){var r=pn(e,1);if(r!==null){var i=ye();Ke(r,e,1,i)}}),As(e,1)}};ls=function(e){if(e.tag===13){var n=pn(e,134217728);if(n!==null){var t=ye();Ke(n,e,134217728,t)}As(e,134217728)}};vc=function(e){if(e.tag===13){var n=Dn(e),t=pn(e,n);if(t!==null){var r=ye();Ke(t,e,n,r)}As(e,n)}};wc=function(){return H};$c=function(e,n){var t=H;try{return H=e,n()}finally{H=t}};io=function(e,n,t){switch(n){case"input":if(Yl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=tl(r);if(!i)throw Error(j(90));Yu(r),Yl(r,i)}}}break;case"textarea":Ju(e,t);break;case"select":n=t.value,n!=null&&Pt(e,!!t.multiple,n,!1)}};oc=Ls;sc=st;var Wp={usingClientEntryPoint:!1,Events:[Fr,St,tl,ic,lc,Ls]},rr={findFiberByHostInstance:Xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qp={bundleType:rr.bundleType,version:rr.version,rendererPackageName:rr.rendererPackageName,rendererConfig:rr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cc(e),e===null?null:e.stateNode},findFiberByHostInstance:rr.findFiberByHostInstance||Hp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oi.isDisabled&&oi.supportsFiber)try{Xi=oi.inject(Qp),en=oi}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wp;Ie.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rs(n))throw Error(j(200));return Gp(e,n,null,t)};Ie.createRoot=function(e,n){if(!Rs(e))throw Error(j(299));var t=!1,r="",i=Ud;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Ts(e,1,!1,null,null,t,!1,r,i),e[hn]=n.current,Nr(e.nodeType===8?e.parentNode:e),new Bs(n)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=cc(n),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return st(e)};Ie.hydrate=function(e,n,t){if(!dl(n))throw Error(j(200));return fl(null,e,n,!0,t)};Ie.hydrateRoot=function(e,n,t){if(!Rs(e))throw Error(j(405));var r=t!=null&&t.hydratedSources||null,i=!1,l="",o=Ud;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Fd(n,null,e,1,t??null,i,!1,l,o),e[hn]=n.current,Nr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new cl(n)};Ie.render=function(e,n,t){if(!dl(n))throw Error(j(200));return fl(null,e,n,!1,t)};Ie.unmountComponentAtNode=function(e){if(!dl(e))throw Error(j(40));return e._reactRootContainer?(st(function(){fl(null,null,e,!1,function(){e._reactRootContainer=null,e[hn]=null})}),!0):!1};Ie.unstable_batchedUpdates=Ls;Ie.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!dl(t))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return fl(e,n,t,!1,r)};Ie.version="18.3.1-next-f1338f8080-20240426";function Vd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vd)}catch(e){console.error(e)}}Vd(),Vu.exports=Ie;var Kp=Vu.exports,Gd,lu=Kp;Gd=lu.createRoot,lu.hydrateRoot;const Hd="hasukgo.device.v1",Zp="hasukgo",Gt="meta",Bo="deviceId";function qd(){try{if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();if(typeof crypto<"u"&&typeof crypto.getRandomValues=="function"){const e=crypto.getRandomValues(new Uint8Array(16));e[6]=e[6]&15|64,e[8]=e[8]&63|128;const n=[...e].map(t=>t.toString(16).padStart(2,"0")).join("");return`${n.slice(0,8)}-${n.slice(8,12)}-${n.slice(12,16)}-${n.slice(16,20)}-${n.slice(20)}`}}catch{}return`fb-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function Wd(e){const n=e.replace(/[^a-f0-9]/gi,"").toUpperCase(),t=n.slice(0,4)||"0000",r=n.slice(4,8)||"0000";return`HSG-${t}-${r}`}function Yp(){try{return localStorage.getItem(Hd)}catch{return null}}function Qd(e){try{return localStorage.setItem(Hd,e),!0}catch{return!1}}function Os(){return new Promise(e=>{try{if(typeof indexedDB>"u")return e(null);const n=indexedDB.open(Zp,1);n.onupgradeneeded=()=>{const t=n.result;t.objectStoreNames.contains(Gt)||t.createObjectStore(Gt)},n.onsuccess=()=>e(n.result),n.onerror=()=>e(null),setTimeout(()=>e(null),1500)}catch{e(null)}})}function Xp(e,n){return new Promise(t=>{try{const i=e.transaction(Gt,"readonly").objectStore(Gt).get(n);i.onsuccess=()=>t(i.result??null),i.onerror=()=>t(null)}catch{t(null)}})}function Fs(e,n,t){return new Promise(r=>{try{const i=e.transaction(Gt,"readwrite");i.objectStore(Gt).put(t,n),i.oncomplete=()=>r(!0),i.onerror=()=>r(!1),i.onabort=()=>r(!1)}catch{r(!1)}})}function Kd(){if(typeof navigator>"u")return"알 수 없음";const e=navigator.userAgent,n=typeof globalThis.Capacitor<"u",t=/Android/i.test(e)?"Android":/iPhone|iPad|iPod/i.test(e)?"iOS":/Windows/i.test(e)?"Windows":/Mac OS X/i.test(e)?"macOS":"기타";if(n)return`${t} 앱`;const r=/KAKAOTALK/i.test(e)?" · 카카오톡 인앱":/Line\//i.test(e)?" · 라인 인앱":/Instagram|FBAN|FBAV/i.test(e)?" · SNS 인앱":"";return`${t} 웹${r}`}let Mt=null;async function Jp(){if(Mt)return Mt;const e=Yp(),n=await Os(),t=n?await Xp(n,Bo):null;let r=e??t??null,i=!1;r||(r=qd(),i=!0);const l=Qd(r);let o=!1;return n&&(o=await Fs(n,Bo,r)),Mt={id:r,shortCode:Wd(r),platform:Kd(),fresh:i,ephemeral:!l&&!o},Mt}async function e0(e){const n=e??qd();Qd(n);const t=await Os();return t&&await Fs(t,Bo,n),Mt={id:n,shortCode:Wd(n),platform:Kd(),fresh:!0,ephemeral:!1},Mt}async function n0(){let e=!1;try{const r="__hasukgo_probe__";localStorage.setItem(r,"1"),e=localStorage.getItem(r)==="1",localStorage.removeItem(r)}catch{e=!1}const n=await Os();let t=!1;return n&&(t=await Fs(n,"__probe__","1")),{localStorage:e,indexedDb:t}}const Zd={1:"송학",2:"매조",3:"벚꽃",4:"흑싸리",5:"난초",6:"모란",7:"홍싸리",8:"공산",9:"국화",10:"단풍",11:"오동",12:"비"},t0={1:[{kind:"gwang",name:"송학 광"},{kind:"tti",tti:"hong",name:"송학 홍단"},{kind:"pi",piValue:1,name:"송학 피"},{kind:"pi",piValue:1,name:"송학 피"}],2:[{kind:"yeol",isGodori:!0,name:"매조 휘파람새"},{kind:"tti",tti:"hong",name:"매조 홍단"},{kind:"pi",piValue:1,name:"매조 피"},{kind:"pi",piValue:1,name:"매조 피"}],3:[{kind:"gwang",name:"벚꽃 광"},{kind:"tti",tti:"hong",name:"벚꽃 홍단"},{kind:"pi",piValue:1,name:"벚꽃 피"},{kind:"pi",piValue:1,name:"벚꽃 피"}],4:[{kind:"yeol",isGodori:!0,name:"흑싸리 두견새"},{kind:"tti",tti:"cho",name:"흑싸리 초단"},{kind:"pi",piValue:1,name:"흑싸리 피"},{kind:"pi",piValue:1,name:"흑싸리 피"}],5:[{kind:"yeol",name:"난초 다리"},{kind:"tti",tti:"cho",name:"난초 초단"},{kind:"pi",piValue:1,name:"난초 피"},{kind:"pi",piValue:1,name:"난초 피"}],6:[{kind:"yeol",name:"모란 나비"},{kind:"tti",tti:"cheong",name:"모란 청단"},{kind:"pi",piValue:1,name:"모란 피"},{kind:"pi",piValue:1,name:"모란 피"}],7:[{kind:"yeol",name:"홍싸리 멧돼지"},{kind:"tti",tti:"cho",name:"홍싸리 초단"},{kind:"pi",piValue:1,name:"홍싸리 피"},{kind:"pi",piValue:1,name:"홍싸리 피"}],8:[{kind:"gwang",name:"공산 광"},{kind:"yeol",isGodori:!0,name:"공산 기러기"},{kind:"pi",piValue:1,name:"공산 피"},{kind:"pi",piValue:1,name:"공산 피"}],9:[{kind:"yeol",isGukjin:!0,name:"국화 국진"},{kind:"tti",tti:"cheong",name:"국화 청단"},{kind:"pi",piValue:1,name:"국화 피"},{kind:"pi",piValue:1,name:"국화 피"}],10:[{kind:"yeol",name:"단풍 사슴"},{kind:"tti",tti:"cheong",name:"단풍 청단"},{kind:"pi",piValue:1,name:"단풍 피"},{kind:"pi",piValue:1,name:"단풍 피"}],11:[{kind:"gwang",name:"오동 광"},{kind:"pi",piValue:2,name:"오동 쌍피"},{kind:"pi",piValue:1,name:"오동 피"},{kind:"pi",piValue:1,name:"오동 피"}],12:[{kind:"gwang",isBiGwang:!0,name:"비광"},{kind:"yeol",name:"비 제비"},{kind:"tti",tti:"bi",name:"비띠"},{kind:"pi",piValue:2,name:"비 쌍피"}]};function Yd(){const e=[];for(let n=1;n<=12;n++)t0[n].forEach((t,r)=>{e.push({id:`m${n}-${r}`,month:n,kind:t.kind,tti:t.tti,isBiGwang:t.isBiGwang,isGodori:t.isGodori,isGukjin:t.isGukjin,piValue:t.piValue,name:t.name})});return e}function r0(e){const n=[];for(let t=0;t<e.bonusPiCount;t++)n.push({id:`bonus-${t}`,month:0,kind:"pi",piValue:e.bonusPiValue,isBonus:!0,name:`보너스 ${e.bonusPiValue}피`});return n}function i0(e){return[...Yd(),...r0(e)]}const Ee=120,Me=180,ou={1:["#1c1c22","#2b2b34"],2:["#2a1f2e","#3d2c42"],3:["#2e2026","#452f38"],4:["#1f2a22","#2d3d31"],5:["#1d2630","#2b3845"],6:["#2b1f2d","#40304a"],7:["#2e211d","#453129"],8:["#1a2230","#283348"],9:["#2d2a1c","#443f28"],10:["#2f2018","#4a3122"],11:["#231f2c","#352f45"],12:["#1b2228","#2a343c"],0:["#2a2420","#3d352e"]},Us=[{id:"classic",name:"전통",tint:null,tintAmount:0,ink:"#12100e",red:"#d8402f",gold:"#e8b53c",white:"#f4ece0",paperTop:"#fbf4e6",paperBottom:"#efe2ca"},{id:"moonlit",name:"달밤",tint:"#1b2b4a",tintAmount:.55,ink:"#0a0e18",red:"#e05a6b",gold:"#cfe0ff",white:"#eaf1ff",paperTop:"#dfe8f7",paperBottom:"#c3d2e8"},{id:"hanji",name:"한지",tint:"#d8c9a8",tintAmount:.62,ink:"#4a3a28",red:"#c2584a",gold:"#b89050",white:"#fdf8ec",paperTop:"#fdf8ec",paperBottom:"#f0e4cc"},{id:"gilt",name:"금박",tint:"#2a2010",tintAmount:.5,ink:"#1a1408",red:"#e0483a",gold:"#ffd66b",white:"#fff6da",paperTop:"#3a2e18",paperBottom:"#241c0e"}],dt=Us[0];function Xd(e){return Us.find(n=>n.id===e)??dt}let R=dt.ink,cn=dt.red,at=dt.gold,Pe=dt.white;const si="#3f8a52",l0="#3f6fb5";function Wi(e,n,t){const r=h=>[parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)],[i,l,o]=r(e),[s,a,d]=r(n),f=(h,g)=>Math.round(h*(1-t)+g*t).toString(16).padStart(2,"0");return`#${f(i,s)}${f(l,a)}${f(o,d)}`}function o0(e,n,t){let[r,i]=ou[e]??ou[0];return n.tint&&(r=Wi(r,n.tint,n.tintAmount),i=Wi(i,n.tint,n.tintAmount)),`
  <defs>
    <linearGradient id="bg${t}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${r}"/>
      <stop offset="100%" stop-color="${i}"/>
    </linearGradient>
    <linearGradient id="paper${t}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${n.paperTop}"/>
      <stop offset="100%" stop-color="${n.paperBottom}"/>
    </linearGradient>
  </defs>
  <rect width="${Ee}" height="${Me}" rx="10" fill="url(#paper${t})"/>
  <rect x="5" y="5" width="${Ee-10}" height="${Me-10}" rx="7" fill="url(#bg${t})"/>
  <rect x="5" y="5" width="${Ee-10}" height="${Me-10}" rx="7" fill="none" stroke="${n.ink}" stroke-width="3"/>`}function s0(){return`
  <rect x="14" y="14" width="34" height="40" rx="5" fill="${cn}" stroke="${R}" stroke-width="2.5"/>
  <text x="31" y="43" font-size="24" text-anchor="middle" fill="${Pe}" font-family="serif" font-weight="bold">光</text>`}function a0(e){const n=e==="cheong"?l0:e==="cho"?"#c4483a":e==="bi"?"#8a8f96":cn,t=e==="hong"?"홍단":e==="cheong"?"청단":"";return`
  <rect x="20" y="66" width="80" height="48" rx="6" fill="${n}" stroke="${R}" stroke-width="3"/>
  ${t?`<text x="60" y="98" font-size="22" text-anchor="middle" fill="${Pe}" font-family="serif" font-weight="bold">${t}</text>`:`<path d="M32 90 h56" stroke="${Pe}" stroke-width="4" opacity="0.5"/>`}`}function u0(e){switch(e){case 1:return`<path d="M60 150 v-40" stroke="#5b4330" stroke-width="7"/>
              <path d="M60 116 l-26 18 M60 116 l26 18 M60 132 l-20 16 M60 132 l20 16" stroke="${si}" stroke-width="7" stroke-linecap="round"/>`;case 2:return`<path d="M44 158 q14 -36 34 -50" stroke="#5b4330" stroke-width="6" fill="none"/>
              <circle cx="80" cy="106" r="9" fill="#f2a0b4" stroke="${R}" stroke-width="2"/>
              <circle cx="62" cy="126" r="8" fill="#f2a0b4" stroke="${R}" stroke-width="2"/>`;case 3:return`<path d="M44 158 q16 -34 36 -46" stroke="#5b4330" stroke-width="6" fill="none"/>
              <circle cx="82" cy="112" r="10" fill="#f8c3d4" stroke="${R}" stroke-width="2"/>
              <circle cx="58" cy="130" r="9" fill="#f8c3d4" stroke="${R}" stroke-width="2"/>
              <circle cx="96" cy="136" r="7" fill="#f8c3d4" stroke="${R}" stroke-width="2"/>`;case 4:return`<path d="M60 158 q-4 -40 0 -54" stroke="#2f4a35" stroke-width="6" fill="none"/>
              <path d="M60 120 q-22 -8 -28 8 M60 132 q22 -8 28 8 M60 144 q-20 -6 -26 8" stroke="#2f4a35" stroke-width="6" stroke-linecap="round"/>`;case 5:return`<path d="M60 158 q-26 -34 -8 -58 M60 158 q26 -34 8 -58" stroke="${si}" stroke-width="6" fill="none" stroke-linecap="round"/>
              <circle cx="60" cy="98" r="7" fill="#f0e08a" stroke="${R}" stroke-width="2"/>`;case 6:return`<path d="M60 158 v-26" stroke="${si}" stroke-width="6"/>
              <circle cx="60" cy="122" r="17" fill="#c9457a" stroke="${R}" stroke-width="2.5"/>
              <circle cx="60" cy="122" r="7" fill="${at}"/>`;case 7:return`<path d="M60 158 q-4 -40 0 -54" stroke="#7a3a2c" stroke-width="6" fill="none"/>
              <path d="M60 120 q-22 -8 -28 8 M60 132 q22 -8 28 8" stroke="#a8503a" stroke-width="6" stroke-linecap="round"/>`;case 8:return`<path d="M16 158 q44 -34 88 0z" fill="#4a4030" stroke="${R}" stroke-width="2.5"/>`;case 9:return`<path d="M60 158 v-24" stroke="${si}" stroke-width="6"/>
              <circle cx="60" cy="124" r="16" fill="${at}" stroke="${R}" stroke-width="2.5"/>
              <circle cx="60" cy="124" r="6" fill="#b8801f"/>`;case 10:return`<path d="M60 158 v-22" stroke="#7a3a2c" stroke-width="6"/>
              <path d="M60 136 l-22 -14 l10 22 l-16 2 l28 12 l28 -12 l-16 -2 l10 -22z" fill="#c9553a" stroke="${R}" stroke-width="2.5"/>`;case 11:return`<path d="M60 158 v-32" stroke="#5b4330" stroke-width="6"/>
              <ellipse cx="42" cy="118" rx="18" ry="13" fill="#6f7f4a" stroke="${R}" stroke-width="2.5"/>
              <ellipse cx="80" cy="112" rx="18" ry="13" fill="#6f7f4a" stroke="${R}" stroke-width="2.5"/>`;case 12:return'<path d="M60 96 q-24 30 -18 62 M60 96 q24 30 18 62" stroke="#4a5b3a" stroke-width="5" fill="none"/>';default:return""}}function c0(e){if(e.isGodori)return`<path d="M40 104 q20 -18 40 -4 q10 8 2 18 q-20 14 -42 4z" fill="${R}"/>
            <path d="M80 100 l14 -6 l-10 12z" fill="${at}"/>
            <circle cx="70" cy="104" r="3" fill="${Pe}"/>
            <path d="M46 118 q14 14 32 8" stroke="${R}" stroke-width="4" fill="none"/>`;switch(e.month){case 5:return`<path d="M18 116 h84" stroke="#8a5a32" stroke-width="9"/>
              <path d="M30 116 v22 M60 116 v22 M90 116 v22" stroke="#8a5a32" stroke-width="6"/>`;case 6:return`<path d="M60 112 q-26 -22 -32 2 q-4 20 32 14z" fill="#e3a23c" stroke="${R}" stroke-width="2.5"/>
              <path d="M60 112 q26 -22 32 2 q4 20 -32 14z" fill="#e3a23c" stroke="${R}" stroke-width="2.5"/>
              <rect x="57" y="100" width="6" height="34" rx="3" fill="${R}"/>`;case 7:return`<ellipse cx="60" cy="116" rx="30" ry="18" fill="#4a3a2c" stroke="${R}" stroke-width="2.5"/>
              <path d="M32 112 l-12 -6 l10 14z" fill="#4a3a2c"/>
              <circle cx="40" cy="110" r="3" fill="${Pe}"/>`;case 9:return`<path d="M38 96 h44 l-6 24 q-16 10 -32 0z" fill="${Pe}" stroke="${R}" stroke-width="3"/>
              <rect x="56" y="120" width="8" height="14" fill="${Pe}" stroke="${R}" stroke-width="2.5"/>
              <rect x="42" y="134" width="36" height="7" rx="3" fill="${Pe}" stroke="${R}" stroke-width="2.5"/>
              <text x="60" y="114" font-size="15" text-anchor="middle" fill="${cn}" font-family="serif" font-weight="bold">壽</text>`;case 10:return`<ellipse cx="62" cy="120" rx="26" ry="16" fill="#a5703c" stroke="${R}" stroke-width="2.5"/>
              <path d="M40 112 q-8 -10 -4 -18" stroke="#a5703c" stroke-width="7" fill="none" stroke-linecap="round"/>
              <path d="M36 96 l-8 -10 M36 96 l8 -10" stroke="#6f4a26" stroke-width="4" stroke-linecap="round"/>
              <circle cx="34" cy="100" r="3" fill="${R}"/>`;case 12:return`<path d="M34 100 q26 -14 52 6 q-22 22 -52 -6z" fill="#2b3340" stroke="${R}" stroke-width="2.5"/>
              <path d="M86 106 l14 10 l-18 0z" fill="#2b3340"/>`;default:return`<circle cx="60" cy="116" r="20" fill="#6f5a3c" stroke="${R}" stroke-width="2.5"/>`}}function d0(e){switch(e.month){case 1:return`<path d="M46 130 q18 -30 38 -18 q8 6 0 14 q-14 12 -34 8z" fill="${Pe}" stroke="${R}" stroke-width="3"/>
              <path d="M84 112 l14 -8 l-10 14z" fill="${cn}"/>
              <path d="M54 138 v16 M66 138 v16" stroke="${R}" stroke-width="4"/>
              <circle cx="78" cy="116" r="3" fill="${R}"/>`;case 3:return`<rect x="22" y="96" width="76" height="30" rx="4" fill="${Pe}" stroke="${R}" stroke-width="3"/>
              <path d="M22 106 h76 M22 116 h76" stroke="${cn}" stroke-width="5"/>
              <path d="M40 126 v16 M80 126 v16" stroke="${R}" stroke-width="4"/>`;case 8:return`<circle cx="60" cy="108" r="26" fill="${cn}" stroke="${R}" stroke-width="3"/>`;case 11:return`<path d="M40 128 q22 -34 46 -16 q10 8 0 18 q-20 12 -46 -2z" fill="${at}" stroke="${R}" stroke-width="3"/>
              <path d="M86 110 l16 -10 l-10 18z" fill="${cn}"/>
              <path d="M44 132 q-14 12 -6 24 q10 -6 14 -18z" fill="${at}" stroke="${R}" stroke-width="2.5"/>`;case 12:return`<path d="M26 92 q34 -26 68 0z" fill="${R}"/>
              <path d="M60 92 v46" stroke="${R}" stroke-width="4"/>
              <circle cx="60" cy="142" r="9" fill="#5a4a3a" stroke="${R}" stroke-width="2.5"/>
              <path d="M52 152 h16 v14 h-16z" fill="#5a4a3a" stroke="${R}" stroke-width="2.5"/>`;default:return""}}function su(e){const n=(e.piValue??1)>=2;return e.isBonus?`<rect x="22" y="70" width="76" height="60" rx="8" fill="${at}" stroke="${R}" stroke-width="3"/>
            <text x="60" y="110" font-size="30" text-anchor="middle" fill="${R}" font-family="serif" font-weight="bold">${e.piValue}피</text>`:n?`<rect x="24" y="74" width="72" height="34" rx="6" fill="${cn}" stroke="${R}" stroke-width="3"/>
            <text x="60" y="100" font-size="20" text-anchor="middle" fill="${Pe}" font-family="serif" font-weight="bold">쌍피</text>`:""}function f0(e,n){const t=n?.width??Ee,r=n?.height??Me,i=Xd(n?.skin??dt.id);R=i.ink,cn=i.red,at=i.gold,Pe=i.white;const l=`${e.id}-${i.id}`.replace(/[^a-zA-Z0-9-]/g,""),o=e.month===0?"보너스":`${e.month}월 ${Zd[e.month]}`;let s="";return e.isBonus?s=su(e):(s=u0(e.month),e.kind==="gwang"?s+=d0(e)+s0():e.kind==="yeol"?s+=c0(e):e.kind==="tti"&&e.tti?s+=a0(e.tti):s+=su(e)),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Ee} ${Me}" width="${t}" height="${r}" role="img" aria-label="${e.name}">
  ${o0(e.month,i,l)}
  ${s}
  <rect x="5" y="${Me-30}" width="${Ee-10}" height="25" fill="#00000055"/>
  <text x="${Ee/2}" y="${Me-12}" font-size="12" text-anchor="middle" fill="${Pe}" font-family="sans-serif">${o}</text>
</svg>`}function Qi(e,n){return`data:image/svg+xml;utf8,${encodeURIComponent(f0(e,n))}`}function h0(e){const n=e?.width??Ee,t=e?.height??Me,r=Xd(e?.skin??dt.id),i=r.tint?Wi("#7a2b24",r.tint,r.tintAmount*.8):"#7a2b24",l=r.tint?Wi("#8f342b",r.tint,r.tintAmount*.8):"#8f342b";return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Ee} ${Me}" width="${n}" height="${t}" role="img" aria-label="뒷면">
  <rect width="${Ee}" height="${Me}" rx="10" fill="${i}"/>
  <rect x="7" y="7" width="${Ee-14}" height="${Me-14}" rx="7" fill="${l}" stroke="${r.gold}" stroke-width="2.5"/>
  <circle cx="${Ee/2}" cy="${Me/2}" r="30" fill="none" stroke="${r.gold}" stroke-width="3"/>
  <circle cx="${Ee/2}" cy="${Me/2}" r="18" fill="none" stroke="${r.gold}" stroke-width="2"/>
  <path d="M60 60 v60 M30 90 h60" stroke="${r.gold}" stroke-width="2" opacity="0.6"/>
</svg>`}function p0(e){return`data:image/svg+xml;utf8,${encodeURIComponent(h0(e))}`}const au=[{id:"maru",name:"밤의 마루",vars:{}},{id:"daylight",name:"툇마루 한낮",vars:{"--wood-dark":"#6b5640","--wood":"#8a7157","--wood-light":"#a68d6f","--paper":"#fff8ec","--paper-dim":"#e6dbc8","--lamp":"#ffcf6b","--lamp-dim":"#c9a25a"}},{id:"snow",name:"첫눈 오는 밤",vars:{"--wood-dark":"#1b2233","--wood":"#333f57","--wood-light":"#4c5b78","--paper":"#eef4ff","--paper-dim":"#c2cddf","--lamp":"#a8d0ff","--lamp-dim":"#6f8fb8","--accent":"#5c7fd0"}},{id:"lantern",name:"등불",vars:{"--wood-dark":"#2b1508","--wood":"#5c2f12","--wood-light":"#7d4520","--paper":"#ffeccd","--paper-dim":"#dfbf95","--lamp":"#ffb347","--lamp-dim":"#c97a2a","--accent":"#d4552f"}}];function Vs(e){return au.find(n=>n.id===e)??au[0]}const yt=[{id:"cards:hanji",kind:"cards",name:"한지 화패",desc:"누런 한지에 찍어낸 듯한 담백한 패",price:1200},{id:"cards:moonlit",kind:"cards",name:"달밤 화패",desc:"달빛에 담근 푸른 패. 밤에 치기 좋다",price:2200},{id:"cards:gilt",kind:"cards",name:"금박 화패",desc:"어두운 바탕에 금빛. 하숙집에선 과하다는 평",price:3800},{id:"theme:daylight",kind:"theme",name:"툇마루 한낮",desc:"해 드는 대낮의 나무 빛깔로 바꾼다",price:900},{id:"theme:snow",kind:"theme",name:"첫눈 오는 밤",desc:"창밖에 눈이 오는 듯한 푸른 밤",price:1800},{id:"theme:lantern",kind:"theme",name:"등불",desc:"전등 하나만 켜둔 진한 주황빛",price:2800}],g0=yt.reduce((e,n)=>e+n.price,0);function wn(e){return e.id.split(":")[1]}function m0(e){return Us.find(n=>n.id===e)?.name??e}const y0=[{id:"eunseo",order:1,name:"은서",nickname:"옆방",age:22,job:"시각디자인과 2학년",room:"201호",season:"spring",personality:["밝음","덤벙댐","정 많음"],styleLabel:"아직 규칙을 외우는 중. 뭘 낼지 모르겠으면 그냥 낸다",backstory:"통학 두 시간이 싫어 무작정 짐을 쌌다. 버스를 놓쳐 언덕을 걸어 올라온 첫 하숙생.",style:{weights:{pi:1.1},mistakeScale:1.15,greedScale:1.1,inferenceScale:.8,aggressionScale:.7,stopScoreDelta:1},unlock:[],rate:3,reward:{base:26,perStage:5},lines:{matchStart:{low:["어, 안녕! 나 은서. 옆방 살아.","규칙은... 어제 외웠어. 아마도.","살살 해줘. 진짜로."],mid:["오늘은 좀 늘었어. 기대해도 돼.","어제 혼자 연습했다? 마루에서.","자, 앉아 앉아. 방석 여기."],high:["오늘도 같이 칠 거지? 기다렸는데.","네 자리 맡아뒀어. 여기 앉아.","지면 야식. 이기면... 도 야식."]},go:{low:["어어, 고? 고! 맞나? 고!","이거 고 하는 거 맞지? 맞겠지.","몰라, 일단 고!"],mid:["고. 이번엔 계산하고 하는 거야.","여기서 멈추면 아쉽잖아. 고!","손이 좋아. 고 할래."],high:["고. 너 표정 보니까 더 가도 될 것 같아.","고! 놀라는 얼굴 보고 싶어서.","고 할게. 조금만 더 같이 있자는 뜻이야."]},stop:{low:["스톱! 더 가면 나 무너져.","여기서 멈출래. 심장이 쿵쾅거려.","스톱... 맞지? 스톱!"],mid:["스톱. 욕심내다 뻑 나는 거 봤거든.","딱 여기. 오늘은 여기까지가 좋아.","스톱할게. 다음 판이 더 재밌을 거야."],high:["스톱. 오래 끌면 네가 지루해할까 봐.","여기서 스톱. 대신 한 판 더 하자.","스톱! 이겼다 이겼다."]},ppeok:{low:["으악 뻑! 이거 왜 이래!","아 진짜... 방금 건 못 본 걸로.","뻑이다... 나 이거 제일 싫어."],mid:["뻑. 괜찮아, 어차피 내가 가져올 거야.","묶였네. 저거 내 거야 나중에.","뻑 났다. 표정 관리 중."],high:["뻑! 봤지? 너 웃었어 지금.","아 뻑... 웃지 마 좀.","뻑 났는데 왜 기분이 나쁘지 않지."]},sseulVictim:{low:["어? 바닥이 비었어. 그래도 되는 거야?","다 가져갔어... 방금 뭐 한 거야?","잠깐만, 다시 설명해줘."],mid:["쓸었네. 그거 배워야겠다.","아, 그렇게 하는 거구나. 메모.","잘한다 진짜. 얄밉게."],high:["또 쓸어? 나 이제 안 놀라.","멋있어서 봐준다. 이번만.","쓸 때 표정 좀 짓지 마, 심장에 안 좋아."]},win:{low:["이겼다! 나 이겼어! 진짜로?","어... 이긴 거 맞지? 맞지?","와 처음이야 이런 거."],mid:["이겼다! 연습한 보람 있네.","봤지? 나 늘었다니까.","오늘은 내가 설거지 면제야."],high:["이겼다! 근데 네가 봐준 거 아니지?","이겼어. 상으로 내일 편의점 같이 가자.","내가 이겼으니까 오늘 야식은 내가 살게. 이상하지?"]},lose:{low:["졌다... 그래도 재밌었어.","아 아까워! 다음엔 안 져.","한 판만 더, 응? 한 판만."],mid:["졌네. 근데 이번엔 꽤 근접했지?","분하다. 분한데 또 하고 싶다.","다음 판에 두고 보자."],high:["졌지만 기분은 안 나빠. 이상하지.","또 졌네. 너랑 하면 왜 자꾸 지지.","졌으니까 벌칙. 내일도 같이 쳐줘."]},affection:{low:["저기, 이따 마루에 나올 거야?","어... 물어볼 게 있었는데. 아 맞다 그거.","괜찮으면 잠깐 얘기할래?"],mid:["있잖아, 나 요즘 밤이 기다려져.","너랑 있으면 시간이 왜 이렇게 빨라?","이거 너 주려고 사 왔어. 별거 아니야."],high:["나 사실 하고 싶은 말이 있는데.","맞고 말고도 같이 하고 싶은 거 많아.","오늘은 승부 말고 그냥 얘기하자."]},hints:["나 요즘 피만 모아. 진짜야. 눈치 좀 챙겨.","바닥에 광 놔두면 내가 가져간다? 알려주는 거야.","힌트 줄게. 나 계산 못 해. 오래 끌면 네가 이겨."]},events:[{stage:1,scriptId:"eunseo_01",title:"옆방 사람",hasChoice:!1},{stage:2,scriptId:"eunseo_02",title:"하숙집 규칙 세 가지",hasChoice:!1},{stage:3,scriptId:"eunseo_03",title:"은서의 취향",hasChoice:!1},{stage:4,scriptId:"eunseo_04",title:"새벽 두 시의 라면",hasChoice:!0},{stage:5,scriptId:"eunseo_05",title:"빨래 걷기 당번",hasChoice:!0},{stage:6,scriptId:"eunseo_06",title:"편의점 앞 벤치",hasChoice:!0},{stage:7,scriptId:"eunseo_07",title:"과제가 안 풀리는 밤",hasChoice:!1},{stage:8,scriptId:"eunseo_08",title:"은서가 서울에 온 이유",hasChoice:!1},{stage:9,scriptId:"eunseo_09",title:"오해는 짧게",hasChoice:!0},{stage:10,scriptId:"eunseo_10",title:"마지막 판, 첫 마음",hasChoice:!0}],look:{hair:"#6b4630",hairStyle:"bob",skin:"#f7d9c4",outfits:["#f4a7b9","#ffd9a0","#fff3e0"],accent:"#e8657f",prop:"스케치북",face:"round",eyes:"round",bangs:"straight",build:"petite",accessory:"hairpin",wear:["hoodie","tee","dress"],propArt:"sketchbook"}},{id:"hayeong",order:2,name:"하영",nickname:"요리왕",age:24,job:"조리학과 4학년",room:"202호",season:"spring",personality:["차분함","부지런함","은근 승부욕"],styleLabel:"피부터 쌓는다. 화려하진 않은데 정신 차리면 피박",backstory:"졸업 작품으로 낼 식당을 준비 중이다. 열 명분 밥을 지어볼 부엌이 필요했다.",style:{weights:{pi:1.7,tti:.9,gwang:.85},mistakeScale:.95,greedScale:.9,inferenceScale:1.05,aggressionScale:.8,stopScoreDelta:0},unlock:[],rate:4,reward:{base:31,perStage:6},lines:{matchStart:{low:["부엌 정리 끝났어. 한 판 하자.","손 씻고 와. 기름 묻은 손으로 패 만지지 말고.","앉아. 국 데워놨으니까 지면 그거 먹고 가."],mid:["오늘 반찬 잘 됐어. 이기면 하나 더 줄게.","자, 시작하자. 불 다 껐어.","오늘은 좀 길게 갈 생각이야."],high:["네 몫 덜어놨어. 치우면서 먹어.","기다렸어. 앉아.","오늘은 네가 좋아하는 거 했어. 판 끝나고."]},go:{low:["고.","고. 아직 멀었어.","고 할게. 피가 모자라."],mid:["고. 피 다섯 장만 더.","고. 재료 다 못 모았거든.","고. 여기서 끊으면 맛이 안 나."],high:["고. 오늘은 좀 욕심내 볼래.","고. 너랑 더 하고 싶어서라고 하면 웃을래?","고. 이유는 나중에 말해줄게."]},stop:{low:["스톱. 이 정도면 충분해.","스톱. 간 맞았어.","스톱."],mid:["스톱. 더 끓이면 졸아.","여기서 딱. 욕심은 요리도 맞고도 망쳐.","스톱할게. 피박은 확인했고."],high:["스톱. 얼른 끝내고 야식 먹자.","스톱. 오늘은 빨리 끝내고 얘기하고 싶어.","스톱. 대신 설거지는 네가."]},ppeok:{low:["뻑.","묶였네. 상관없어.","뻑이야. 저건 내가 다시 가져올 거고."],mid:["뻑. 냄비 뚜껑 닫아둔 셈 치자.","뻑 났어. 기다리면 돼.","저거 내 거야. 손대지 마."],high:["뻑. 너 지금 웃었지.","뻑 났는데 네가 좋아하네. 얄밉다.","뻑. 그래도 네 앞이라 다행이야."]},sseulVictim:{low:["쓸었네. 잘하네.","바닥 깨끗하다. 부엌도 그렇게 해줘.","인정. 잘했어."],mid:["쓸 줄도 알고. 언제 배웠어?","아까워라. 저거 내 피였는데.","좋아, 다음 판에 돌려받을게."],high:["또 쓸어. 진짜 얄미워.","그거 하지 마. 심장 내려앉아.","잘하는 거 알겠으니까 그만 좀 웃어."]},win:{low:["내가 이겼어. 국 식기 전에 먹어.","이겼네. 설거지는 네 담당.","수고했어. 다음엔 더 잘하겠지."],mid:["이겼다. 오늘 저녁은 내가 정한다.","봤지? 피가 무서운 거야.","이겼어. 상은 네가 주는 거로."],high:["이겼는데 왜 미안하지.","이겼으니까 소원 하나. 내일도 여기 앉아.","이겼다. 근데 오늘은 안 기쁘네. 네가 아쉬워해서."]},lose:{low:["졌네. 잘 쳤어.","인정할게. 오늘은 네가 나았어.","다음엔 안 봐줘."],mid:["졌다. 분한데 밥은 차려줄게.","너 요즘 늘었어. 인정.","한 판 더 하면 결과 다를 텐데."],high:["졌어. 근데 네가 이기는 것도 나쁘지 않네.","졌으니까 오늘은 내가 설거지. 같이 하자.","졌다. 이렇게 지는 건 처음이야."]},affection:{low:["이따 주방 쪽으로 와. 남은 거 있어.","잠깐 손 좀 빌릴 수 있을까.","물어볼 게 있는데, 지금 괜찮아?"],mid:["요리는 혼자 먹으면 맛이 없더라.","네 입맛 이제 대충 알 것 같아.","밥 먹을 사람이 있다는 게 좋아졌어."],high:["나 원래 남 챙기는 사람 아니야. 너 빼고.","이건 네 거야. 다른 사람 주려고 만든 거 아니야.","오늘은 내 얘기 좀 할게. 들어줄래?"]},hints:["나 피 모아. 피만 봐. 그거 하나만 막아도 반은 이겨.","쌍피 바닥에 놓지 마. 나 그거 주우려고 기다려.","내가 스톱 안 하면 피가 모자란 거야. 계산해봐."]},events:[{stage:1,scriptId:"hayeong_01",title:"부엌은 내 구역",hasChoice:!1},{stage:2,scriptId:"hayeong_02",title:"냉장고 칸 배분",hasChoice:!1},{stage:3,scriptId:"hayeong_03",title:"간을 못 맞추는 사람",hasChoice:!1},{stage:4,scriptId:"hayeong_04",title:"장 보러 가는 길",hasChoice:!0},{stage:5,scriptId:"hayeong_05",title:"실습 과제 시식단",hasChoice:!0},{stage:6,scriptId:"hayeong_06",title:"비 오는 날의 부침개",hasChoice:!0},{stage:7,scriptId:"hayeong_07",title:"졸업하면 뭐 할 거야",hasChoice:!1},{stage:8,scriptId:"hayeong_08",title:"하영이 요리를 시작한 날",hasChoice:!1},{stage:9,scriptId:"hayeong_09",title:"누구 몫이었을까",hasChoice:!0},{stage:10,scriptId:"hayeong_10",title:"한 사람을 위한 상",hasChoice:!0}],look:{hair:"#2f2723",hairStyle:"ponytail",skin:"#f3d3b8",outfits:["#a8d5b5","#d7e8c4","#fdf6e3"],accent:"#3e8e5a",prop:"앞치마",face:"oval",eyes:"droopy",bangs:"side",build:"average",accessory:"band",wear:["apron","shirt","hanbok"],propArt:"ladle"}},{id:"jiwoo",order:3,name:"지우",nickname:"밤샘",age:26,job:"미대 대학원생",room:"203호",season:"spring",personality:["야행성","무심함","집요함"],styleLabel:"띠만 본다. 홍단 청단 나오면 눈빛이 달라진다",backstory:"작업실 월세가 밀렸다. 새벽에 불을 켜도 아무도 뭐라 안 하는 방을 찾다 왔다.",style:{weights:{tti:1.8,hongdan:1.4,cheongdan:1.4,chodan:1.2,pi:.8},mistakeScale:.95,greedScale:1.1,inferenceScale:1,aggressionScale:.9,stopScoreDelta:1},unlock:[],rate:6,reward:{base:36,perStage:7},lines:{matchStart:{low:["아. 너구나. 앉아.","지금 몇 시야? ...뭐, 상관없나.","작업 막혔어. 딴짓하기 딱 좋네."],mid:["왔네. 커피 식었는데 마실래?","오늘은 좀 칠 만해. 앉아.","새벽에 제일 잘 보이거든, 패가."],high:["기다렸어. 밤이 길어서.","네 소리 나면 작업 손이 멈춰. 큰일이야.","앉아. 불 좀 줄일게."]},go:{low:["고.","고. 아직 색이 안 찼어.","고. 두 장 더."],mid:["고. 홍단이 보여.","고. 여기서 멈추면 그림이 미완성이야.","고. 나 이거 완성할 거야."],high:["고. 오늘 밤은 길게 쓰고 싶어.","고. 너 놀라는 거 보려고.","고. 이유 물어보지 마."]},stop:{low:["스톱.","됐어. 스톱.","여기까지. 스톱."],mid:["스톱. 색 다 채웠어.","스톱. 더 칠하면 탁해져.","스톱. 완성은 멈출 때 정해지는 거야."],high:["스톱. 얼른 끝내고 딴 얘기 하자.","스톱. 오늘은 너랑 할 얘기가 있어서.","스톱. 미안, 급해졌어."]},ppeok:{low:["뻑.","...묶였네.","저거 내 거였는데."],mid:["뻑. 밑칠 다시 하는 셈 치지.","괜찮아. 저 색은 내가 회수해.","뻑 났다고 그림이 끝나는 건 아니야."],high:["뻑. 웃지 마.","뻑이야. 너 지금 신났지.","뻑. 그래도 네 앞이라 덜 억울하다."]},sseulVictim:{low:["쓸었네.","바닥이 하얘졌어. 캔버스 같다.","잘했어. 인정."],mid:["아깝다. 저기 청단 있었는데.","손 빠르네. 그거 좋은 거야.","다음엔 안 남겨둘게."],high:["또 쓸어. 너 그거 일부러 하지.","그만 좀 잘해. 집중 안 돼.","쓸 때 표정이 제일 좋아. 그건 인정."]},win:{low:["끝. 잘 자.","내가 이겼어. 나 작업하러 갈게.","수고. 다음엔 좀 더 버텨봐."],mid:["이겼다. 오늘 색 잘 나왔어.","띠 모으는 거 무섭지? 이제 알겠지.","이겼으니까 옥상 조명 내가 쓸게."],high:["이겼는데 아쉽네. 판이 끝나서.","이겼어. 근데 안 갈래. 좀 더 있자.","내가 이겼으니 소원. 내일도 새벽에 나와."]},lose:{low:["졌네. 잘 치더라.","...다시 해.","그림이나 그리러 가야겠다."],mid:["졌다. 오늘 네 손이 좋았어.","인정. 근데 다음은 아니야.","지고 나니까 오히려 잠이 깼어."],high:["졌어. 근데 계속 생각날 것 같아, 이 판.","졌다. 너한테 지는 건 왜 덜 분하지.","졌으니까 벌칙. 내 작업 구경하고 가."]},affection:{low:["이거 봐줄래? 아니다, 됐어.","옥상 갈 건데. 같이 갈 사람 없나 해서.","작업 얘기 지루하지 않아?"],mid:["네가 보면 그림이 좀 달라 보여.","요즘 그림에 사람이 들어가. 처음이야.","밤에 누가 있으면 이렇게 다르구나."],high:["이거 너 그린 거야. 보지 마. ...봐도 돼.","나 원래 사람 안 그려.","오늘은 작업 안 할래. 너랑 있을래."]},hints:["나 띠만 봐. 홍단 청단 그거만.","띠 바닥에 놓지 마. 그거 먹으려고 기다리는 거야.","내가 길게 끄는 건 단이 하나 모자라서야."]},events:[{stage:1,scriptId:"jiwoo_01",title:"새벽 세 시의 마루",hasChoice:!1},{stage:2,scriptId:"jiwoo_02",title:"조용히 해달라는 부탁",hasChoice:!1},{stage:3,scriptId:"jiwoo_03",title:"지우의 색",hasChoice:!1},{stage:4,scriptId:"jiwoo_04",title:"옥상에서 본 새벽",hasChoice:!0},{stage:5,scriptId:"jiwoo_05",title:"모델 좀 서줄래",hasChoice:!0},{stage:6,scriptId:"jiwoo_06",title:"24시간 카페 원정",hasChoice:!0},{stage:7,scriptId:"jiwoo_07",title:"그림이 안 그려질 때",hasChoice:!1},{stage:8,scriptId:"jiwoo_08",title:"떨어진 공모전",hasChoice:!1},{stage:9,scriptId:"jiwoo_09",title:"누가 모델이야",hasChoice:!0},{stage:10,scriptId:"jiwoo_10",title:"완성된 그림",hasChoice:!0}],look:{hair:"#1f1b2e",hairStyle:"long",skin:"#efd2bd",outfits:["#5b6b8c","#3d4359","#c9c3e0"],accent:"#7a6fd8",prop:"물감 묻은 소매",face:"slim",eyes:"sleepy",bangs:"curtain",build:"tall",accessory:"none",wear:["smock","hoodie","coat"],propArt:"brush"}},{id:"sua",order:4,name:"수아",nickname:"체대",age:25,job:"체육교육과 4학년",room:"301호",season:"summer",personality:["직진","호승심","뒤끝 없음"],styleLabel:"7점만 넘으면 무조건 고. 멈추는 법을 배운 적이 없다",backstory:"임용 준비를 한 해 더 하기로 했다. 바다가 보이면 아침마다 뛸 것 같아서 왔다고 한다.",style:{weights:{gwang:1.2,yeol:1.2,godori:1.3},mistakeScale:.9,greedScale:1.8,inferenceScale:.95,aggressionScale:1.5,stopScoreDelta:4},unlock:[{tenantId:"eunseo",stage:5}],rate:8,reward:{base:43,perStage:8},lines:{matchStart:{low:["왔어? 몸 풀었어?","승부는 승부야. 봐주는 거 없어.","자, 시작하자. 시간 아까워."],mid:["오늘 컨디션 좋아. 너도 그래야 할 텐데.","훈련 끝나고 바로 왔어. 앉아.","이번엔 오래 갈 각오해."],high:["너랑 하는 게 제일 재밌어. 진짜로.","오늘 하루 종일 이 시간만 기다렸어.","자, 붙자. 살살은 안 해."]},go:{low:["고!","당연히 고지. 왜 물어봐?","고! 여기서 멈추는 건 지는 거야."],mid:["고! 아직 반도 안 왔어.","고. 멈추는 법 안 배웠거든.","고! 더 가자!"],high:["고! 네가 따라오는 게 재밌어서.","고! 오늘 밤 안 끝낼 거야.","고. 이렇게 해야 네가 진심으로 붙잖아."]},stop:{low:["...스톱. 억울한데 스톱.","여기서 끊는다. 다음 판 각오해.","스톱. 오늘은 여기까지만."],mid:["스톱. 이겼으면 됐어.","스톱! 깔끔하게 끝내자.","스톱. 더 가면 욕심이야. 이번만."],high:["스톱. 얼른 끝내고 같이 걷자.","스톱. 오늘은 빨리 끝내고 싶었어.","스톱! 대신 내일 또 하는 거다."]},ppeok:{low:["아 뻑! 짜증나!","뻑? 뻑이라고?","이런 거 진짜 싫어."],mid:["뻑. 괜찮아, 뒤집으면 돼.","묶였네. 근데 나 저거 회수할 거야.","뻑 한 번에 안 무너져."],high:["아 뻑! 야, 웃지 마!","뻑 났다고 좋아하지 마라 진짜.","뻑. 근데 네가 웃으니까 봐준다."]},sseulVictim:{low:["뭐야, 다 가져갔어?","야. 그거 좀 심하지 않아?","쓸었네. 인정은 한다."],mid:["잘하네. 열받게.","좋아, 그게 실력이면 인정.","다음엔 안 당해."],high:["또 쓸어? 너 나 놀리지.","그거 멋있는 거 알고 하는 거지.","쓸 때마다 심박수 올라가. 운동보다 심해."]},win:{low:["이겼다! 역시.","수고. 다음엔 더 붙어보자.","이겼어. 기분 좋다."],mid:["이겼다! 오늘 컨디션 최고!","봤지? 고는 이렇게 하는 거야.","이겼으니까 옥상 내 거."],high:["이겼다! 근데 너 왜 안 분해해?","이겼어. 상으로 내일 같이 뛰자. 새벽에.","이겼는데 네가 웃으니까 이긴 것 같지가 않네."]},lose:{low:["졌네. 깔끔하게 인정.","분하다! 다시!","잘 쳤어. 다음은 내 차례야."],mid:["졌다. 근데 재밌었어.","역시 너랑 해야 재밌지.","한 판 더! 아직 안 끝났어."],high:["졌어. 근데 하나도 안 억울해. 이상하지.","너한테 지는 건 왜 기분이 괜찮지.","졌으니까 벌칙 받을게. 뭐든지."]},affection:{low:["야, 너 내일 시간 있어? 아니 그냥 물어본 거야.","운동 같이 할 사람 구하는데.","뭐 마실래? 사 온 김에."],mid:["너 은근히 끈질겨. 그거 좋은 뜻이야.","같이 뛰면 기록이 잘 나와. 신기하지.","요즘 훈련보다 이 시간이 더 기다려져."],high:["나 원래 말 돌리는 거 못 해.","좋아하는 건 좋아한다고 말하는 성격이야.","오늘은 승부 말고 다른 얘기 하자."]},hints:["나 7점만 넘으면 무조건 고야. 그거 이용해.","고박 노려. 내가 멈추질 않으니까.","광이랑 열끗만 봐. 피는 신경 안 써."]},events:[{stage:1,scriptId:"sua_01",title:"3층에서 내려온 사람",hasChoice:!1},{stage:2,scriptId:"sua_02",title:"새벽 여섯 시의 발소리",hasChoice:!1},{stage:3,scriptId:"sua_03",title:"수아의 승부욕",hasChoice:!1},{stage:4,scriptId:"sua_04",title:"같이 뛸래?",hasChoice:!0},{stage:5,scriptId:"sua_05",title:"여름 옥상, 수박",hasChoice:!0},{stage:6,scriptId:"sua_06",title:"삔 발목",hasChoice:!0},{stage:7,scriptId:"sua_07",title:"임용까지 남은 시간",hasChoice:!1},{stage:8,scriptId:"sua_08",title:"그만둔 선수 생활",hasChoice:!1},{stage:9,scriptId:"sua_09",title:"말 안 한 이유",hasChoice:!0},{stage:10,scriptId:"sua_10",title:"마지막 고",hasChoice:!0}],look:{hair:"#3a2b1f",hairStyle:"short",skin:"#e8c09b",outfits:["#3f7fd0","#e2e8f0","#f5a623"],accent:"#2d6ac9",prop:"손목 테이핑",face:"round",eyes:"sharp",bangs:"wispy",build:"tall",accessory:"none",wear:["jersey","tee","dress"],propArt:"tape"}},{id:"minji",order:5,name:"민지",nickname:"취준",age:26,job:"취업준비생",room:"302호",season:"summer",personality:["계산적","현실적","속정 깊음"],styleLabel:"기대값으로 친다. 스톱 타이밍이 소름 돋게 정확하다",backstory:"삼 년째 취업 준비. 고시원에서 나와야 했고, 알아본 곳 중 여기가 제일 쌌다.",style:{weights:{pi:1.2,tti:1.1,gwang:1.1},mistakeScale:.8,greedScale:.6,inferenceScale:1.25,aggressionScale:.7,stopScoreDelta:-2},unlock:[{tenantId:"hayeong",stage:5}],rate:10,reward:{base:49,perStage:8},lines:{matchStart:{low:["오늘 자소서 세 개 썼어. 머리 좀 식히자.","한 판만. 딱 한 판.","앉아. 시간은 내가 정할게."],mid:["오늘은 좀 오래 해도 돼. 서류 다 냈거든.","너랑 하면 머리가 비워져서 좋아.","자, 시작하자."],high:["하루 종일 이 시간 계산하면서 버텼어.","오늘은 아무 생각 없이 치고 싶어.","앉아. 커피 내려놨어."]},go:{low:["고. 기대값이 아직 플러스야.","고 할게. 계산해봤어.","고."],mid:["고. 상대 피가 다섯 장이거든.","고. 여기서 끊는 게 손해야.","고. 숫자가 그렇게 말해."],high:["고. 오늘은 숫자 말고 기분으로.","고. 판이 끝나는 게 싫어서.","고. 이런 건 처음이야."]},stop:{low:["스톱.","스톱. 여기가 최적이야.","스톱. 더 가면 기대값이 음수야."],mid:["스톱. 정확히 여기.","스톱. 미안한데 계산이 끝났어.","여기서 끊는 게 맞아. 스톱."],high:["스톱. 대신 한 판 더 하자.","스톱. 오늘은 얘기가 더 하고 싶어서.","스톱. 계산은 내일부터 할게."]},ppeok:{low:["뻑. 변수 발생.","뻑이네. 확률상 있을 수 있는 일이야.","예상 범위 안이야."],mid:["뻑. 12% 확률이었는데 걸렸네.","괜찮아. 회수 계획 있어.","변수는 계산에 넣어뒀어."],high:["뻑. 너 앞에서만 이래.","이상하다. 너랑 할 때만 확률이 안 맞아.","뻑. 웃지 마. 계산 흔들려."]},sseulVictim:{low:["쓸었네. 기대값 밖이야.","인정. 잘 봤어.","그건 못 막았다."],mid:["아깝다. 그거 내 계획이었는데.","좋은 수였어. 진심으로.","메모해둘게. 다음엔 안 당해."],high:["또 쓸어. 내 계산이 자꾸 틀려.","너 때문에 통계가 망가져.","잘한다. 얄밉게 잘해."]},win:{low:["이겼어. 오늘 운이 좋았네.","수고했어. 잘 자.","이겼다. 다시 자소서 쓰러 가야지."],mid:["이겼다. 오늘은 좀 기분 좋네.","계산대로야. 기분은 계산 밖이지만.","이겼으니까 오늘은 일찍 잘래."],high:["이겼는데 아쉽다. 판이 끝나서.","이겼어. 근데 안 갈래. 좀 더 있자.","이겼으니까 소원 하나 들어줘. 내일도 나와줘."]},lose:{low:["졌네. 변수는 늘 있으니까.","잘 쳤어. 인정.","다음엔 계산 더 정확히 할게."],mid:["졌다. 근데 기분은 안 나빠.","네가 나보다 잘 봤어. 인정할게.","지는 것도 데이터야."],high:["졌어. 근데 오늘 제일 즐거웠어.","너한테 지면 왜 손해 같지가 않지.","졌으니까 오늘은 네 말 들을게."]},affection:{low:["나 요즘 계획이 다 틀어져. 왜인지 모르겠어.","잠깐 앉아도 돼? 머리가 복잡해서.","이거 남는 거야. 먹어."],mid:["계획에 없던 시간이 제일 좋더라.","너랑 있으면 조급한 게 좀 가라앉아.","나 사실 하루에 이 시간이 제일 기다려져."],high:["내 인생 계획표에 너가 들어왔어.","계산 안 하고 말하는 거 처음이야.","오늘은 아무것도 재지 말고 얘기하자."]},hints:["나는 7점 되면 거의 스톱이야. 그거 계산해.","내가 고를 하면 네 피가 모자란 거야. 확인해봐.","길게 끌면 내가 유리해. 빨리 끝내."]},events:[{stage:1,scriptId:"minji_01",title:"불 켜진 302호",hasChoice:!1},{stage:2,scriptId:"minji_02",title:"공용 프린터 규칙",hasChoice:!1},{stage:3,scriptId:"minji_03",title:"민지의 계산법",hasChoice:!1},{stage:4,scriptId:"minji_04",title:"면접 복장 골라주기",hasChoice:!0},{stage:5,scriptId:"minji_05",title:"탈락 메일이 온 밤",hasChoice:!0},{stage:6,scriptId:"minji_06",title:"편의점 야식 회의",hasChoice:!0},{stage:7,scriptId:"minji_07",title:"부모님 전화",hasChoice:!1},{stage:8,scriptId:"minji_08",title:"포기한 전공",hasChoice:!1},{stage:9,scriptId:"minji_09",title:"합격한 친구",hasChoice:!0},{stage:10,scriptId:"minji_10",title:"계산에 없던 답",hasChoice:!0}],look:{hair:"#463229",hairStyle:"bun",skin:"#f2d5bd",outfits:["#5c6370","#d8dde6","#9aa5b1"],accent:"#4c6ef5",prop:"안경",face:"oval",eyes:"narrow",bangs:"side",build:"average",accessory:"glasses",wear:["blouse","suit","knit"],propArt:"notebook"}},{id:"narae",order:6,name:"나래",nickname:"옥상",age:25,job:"천문학과 대학원생",room:"303호",season:"summer",personality:["몽롱함","신비로움","고집"],styleLabel:"광만 쫓는다. 비광까지 끌어모아 5광을 노린다",backstory:"관측 때문에 밤을 새운다. 도시 불빛이 닿지 않는 곳이 필요했다.",style:{weights:{gwang:2,yeol:1.1,pi:.7,tti:.85},mistakeScale:1,greedScale:1.4,inferenceScale:1,aggressionScale:1,stopScoreDelta:3},unlock:[{tenantId:"jiwoo",stage:5}],rate:13,reward:{base:57,perStage:10},lines:{matchStart:{low:["오늘 구름 없어. 좋은 밤이야.","옥상 갔다 왔어. 손이 차가워.","앉아. 별 보러 가기 전에 한 판."],mid:["오늘 목성 보여. 이따 같이 볼래?","밤이 길어서 좋아.","자, 시작하자. 달이 밝네."],high:["네 생각하면서 별 봤어. 이상하지.","오늘은 판 끝나고 옥상 가자.","기다렸어. 밤이 아까워서."]},go:{low:["고. 아직 별이 모자라.","고.","고. 세 개로는 부족해."],mid:["고. 다섯 개 다 모을 거야.","고. 여기서 멈추면 별자리가 안 돼.","고. 나 욕심 많아."],high:["고. 밤이 더 길었으면 해서.","고. 너랑 더 있고 싶어서 그래.","고. 별은 기다리는 사람한테만 보여."]},stop:{low:["스톱.","됐어. 스톱.","스톱. 오늘은 여기까지."],mid:["스톱. 별자리 완성됐어.","스톱. 구름이 오네.","스톱. 딱 좋은 때야."],high:["스톱. 옥상 가자. 지금.","스톱. 오늘 밤은 다른 데 쓰고 싶어.","스톱. 보여주고 싶은 게 있어."]},ppeok:{low:["뻑. 구름 꼈네.","가려졌어. 기다리면 돼.","뻑."],mid:["뻑. 구름은 지나가는 거야.","괜찮아. 별은 안 사라져.","저거 내가 회수해."],high:["뻑. 너 지금 별처럼 웃었어.","뻑인데 왜 기분이 좋지.","가렸네. 그래도 네가 보여."]},sseulVictim:{low:["다 가져갔네. 하늘이 비었어.","쓸었구나.","잘했어."],mid:["아깝다. 저기 광 있었는데.","손이 빠르네. 유성처럼.","인정. 다음엔 안 놔둘게."],high:["또 쓸어. 너 유성우야?","그거 하지 마. 마음이 텅 비어.","멋있었어. 분한데 멋있었어."]},win:{low:["이겼다. 별 보러 갈게.","끝. 잘 자.","이겼어. 오늘 하늘 맑더라."],mid:["이겼다. 광 다 모았어.","봤지? 이게 오광이야.","이겼으니까 옥상 자리 내 거."],high:["이겼는데 왜 안 기쁘지. 판이 끝나서 그런가.","이겼어. 상으로 옥상 같이 가자.","이겼다. 오늘 별보다 네가 더."]},lose:{low:["졌네. 구름이 많았어.","잘 쳤어.","다음 밤에 또 하자."],mid:["졌다. 광이 하나 모자랐어.","아깝다. 진짜 아까워.","한 판 더 하면 다를 텐데."],high:["졌는데 이상하게 좋아.","너한테 지는 밤도 나쁘지 않네.","졌으니까 소원 들어줄게. 말해."]},affection:{low:["옥상 올라갈 건데. 혼자 가긴 좀 그래서.","이거 망원경 렌즈야. 만져볼래?","밤에 안 자는 사람 반가워."],mid:["누구랑 같이 보는 하늘은 다르더라.","혼자 보던 별인데 이제 네 생각이 나.","옥상 자리 하나 비워뒀어. 네 자리야."],high:["나 사실 별 얘기 들어주는 사람 처음이야.","오늘은 하늘 말고 너 볼래.","이 밤이 안 끝났으면 좋겠어."]},hints:["나 광만 봐. 광 바닥에 놓지 마.","비광도 주워. 나한테는 다섯 번째 별이야.","내가 오래 끄는 건 광이 모자라서야. 광박 노려."]},events:[{stage:1,scriptId:"narae_01",title:"옥상에 사람이 있다",hasChoice:!1},{stage:2,scriptId:"narae_02",title:"옥상 사용 규칙",hasChoice:!1},{stage:3,scriptId:"narae_03",title:"나래가 세는 것",hasChoice:!1},{stage:4,scriptId:"narae_04",title:"망원경 나르기",hasChoice:!0},{stage:5,scriptId:"narae_05",title:"여름 유성우",hasChoice:!0},{stage:6,scriptId:"narae_06",title:"비 오는 날의 옥상",hasChoice:!0},{stage:7,scriptId:"narae_07",title:"연구실에 남는 이유",hasChoice:!1},{stage:8,scriptId:"narae_08",title:"관측이 실패한 밤",hasChoice:!1},{stage:9,scriptId:"narae_09",title:"옥상의 다른 발소리",hasChoice:!0},{stage:10,scriptId:"narae_10",title:"다섯 번째 별",hasChoice:!0}],look:{hair:"#20304a",hairStyle:"wave",skin:"#f0d6c4",outfits:["#2c3e6b","#6b7fb5","#dfe7f5"],accent:"#ffd766",prop:"망원경",face:"slim",eyes:"droopy",bangs:"curtain",build:"petite",accessory:"starpin",wear:["knit","coat","dress"],propArt:"telescope"}},{id:"yerin",order:7,name:"예린",nickname:"회계",age:27,job:"회계법인 1년차",room:"304호",season:"autumn",personality:["꼼꼼함","단정함","의외로 허당"],styleLabel:"박은 절대 안 쓴다. 손해 나는 수를 두지 않는다",backstory:"회사 근처 오피스텔을 두고 이 먼 데로 왔다. 이유는 아직 말하지 않았다.",style:{weights:{pi:1.35,gwang:1.15,yeol:1.15,tti:1.15},mistakeScale:.7,greedScale:.75,inferenceScale:1.3,aggressionScale:.85,stopScoreDelta:-1},unlock:[{tenantId:"sua",stage:5}],rate:16,reward:{base:65,perStage:11},lines:{matchStart:{low:["퇴근했어. 딱 한 시간만.","정산 끝냈어. 이제 이걸 정산할 차례네.","앉으세요. 아, 편하게 해도 돼."],mid:["오늘 야근 없어. 길게 갈 수 있어.","장부 덮고 왔어. 시작하자.","오늘은 좀 이길 것 같은데."],high:["퇴근길 내내 이 생각만 했어.","오늘은 야근 안 했어. 너 때문에.","앉아. 차 내렸어."]},go:{low:["고. 손실 없어.","고 하겠습니다. 아, 반말 반말.","고."],mid:["고. 리스크 확인했어.","고. 최악의 경우도 감당 가능해.","고. 숫자상 문제없어."],high:["고. 이번엔 리스크 좀 져볼래.","고. 이런 거 나답지 않은데.","고. 안 끝냈으면 해서."]},stop:{low:["스톱.","스톱. 여기가 손익분기점이야.","스톱하겠습니다."],mid:["스톱. 광박 확인했고, 마무리할게.","여기서 끊는 게 최선이야. 스톱.","스톱. 회수 완료."],high:["스톱. 대신 차 한 잔 더.","스톱. 오늘은 얘기가 더 좋아서.","스톱. 미안, 급하게 끝냈어."]},ppeok:{low:["뻑. 대손 처리하죠.","뻑이네요. 아, 뻑이네.","장부에 적어둘게."],mid:["뻑. 미수금이라고 생각할게.","회수 가능한 채권이야. 걱정 마.","뻑. 계획엔 있었어."],high:["뻑. 너 앞에서만 이래 진짜.","이상해. 계산이 자꾸 어긋나.","뻑. 웃지 마, 더 틀려."]},sseulVictim:{low:["전액 회수당했네요.","쓸었구나. 잘했어.","깔끔하네. 인정."],mid:["아, 그건 예상 못 했어.","손실 확정. 인정할게.","좋은 수였어. 배웠어."],high:["또 쓸어. 내 장부가 엉망이야.","너 때문에 손익이 안 맞아.","잘하는 거 알겠으니까 그만 좀."]},win:{low:["이겼어요. 아, 이겼어.","수고했어. 잘 자.","정산 끝. 내일 또 출근이네."],mid:["이겼다. 오늘은 흑자야.","박은 안 썼어. 그게 내 원칙이거든.","이겼으니까 세탁기 우선권 내 거."],high:["이겼는데 아쉬워. 벌써 끝나서.","이겼어. 근데 안 일어날래.","이겼으니까 소원. 내일도 기다려줘."]},lose:{low:["졌네요. 아, 졌네.","잘 쳤어. 인정.","다음엔 더 꼼꼼히 볼게."],mid:["졌다. 근데 깔끔하게 졌어.","네가 더 잘 봤어.","재밌었어. 정말로."],high:["졌는데 손해 본 기분이 아니야.","너한테 지는 건 계산에 안 넣었었네.","졌으니까 오늘은 네 말 들을게."]},affection:{low:["저기, 존댓말 아직 어색해? 나는 좀 어색해.","퇴근하고 오면 불 켜져 있는 게 좋더라.","이거 회사에서 받은 건데 남아서."],mid:["나 사실 여기 오면 숨이 좀 쉬어져.","숫자 말고 사람 얘기 하는 게 오랜만이야.","너랑 있으면 퇴근한 기분이 들어."],high:["내 인생에서 계산 안 되는 게 딱 하나 생겼어.","원칙을 깨고 싶어진 건 처음이야.","오늘은 장부 안 볼래. 너만 볼래."]},hints:["나는 박을 절대 안 당해. 그러니까 정공법으로 와.","내가 스톱을 빨리 하는 편이야. 초반에 점수를 벌어.","리스크 없는 수만 둬서 느려. 속도로 눌러."]},events:[{stage:1,scriptId:"yerin_01",title:"가장 늦게 들어오는 사람",hasChoice:!1},{stage:2,scriptId:"yerin_02",title:"공과금 정산의 밤",hasChoice:!1},{stage:3,scriptId:"yerin_03",title:"예린의 원칙",hasChoice:!1},{stage:4,scriptId:"yerin_04",title:"야근 마중",hasChoice:!0},{stage:5,scriptId:"yerin_05",title:"가을 축제 초대권",hasChoice:!0},{stage:6,scriptId:"yerin_06",title:"감기 걸린 회계사",hasChoice:!0},{stage:7,scriptId:"yerin_07",title:"회사를 그만둘까",hasChoice:!1},{stage:8,scriptId:"yerin_08",title:"숫자를 믿게 된 이유",hasChoice:!1},{stage:9,scriptId:"yerin_09",title:"회사 선배의 연락",hasChoice:!0},{stage:10,scriptId:"yerin_10",title:"계산 밖의 항목",hasChoice:!0}],look:{hair:"#33261d",hairStyle:"long",skin:"#f4d8c2",outfits:["#7b8794","#cbd2d9","#b6786a"],accent:"#8b5e3c",prop:"서류 가방",face:"oval",eyes:"sharp",bangs:"side",build:"average",accessory:"earring",wear:["suit","blouse","dress"],propArt:"bag"}},{id:"seyeon",order:8,name:"세연",nickname:"연극",age:24,job:"연극영화과 4학년",room:"305호",season:"autumn",personality:["과장됨","눈치 빠름","외로움 잘 탐"],styleLabel:"표정과 대사로 흔든다. 고를 외쳐도 진짜인지 알 수 없다",backstory:"있던 극단이 해체됐다. 다음 오디션까지만 있겠다고 하고 반년이 지났다.",style:{weights:{tti:1.25,yeol:1.2,godori:1.2,pi:1.05},mistakeScale:.85,greedScale:1.45,inferenceScale:1.15,aggressionScale:1.25,stopScoreDelta:2},unlock:[{tenantId:"minji",stage:5}],rate:20,reward:{base:75,perStage:12},lines:{matchStart:{low:["등장. 오늘의 상대역, 잘 부탁해.","대본 외우다 왔어. 머리 좀 식히자.","자, 1막 시작."],mid:["오늘 내 연기 잘 봐. 어디까지가 진짜일까?","무대 조명은 없지만 분위기는 내야지.","시작하자. 관객은 없지만."],high:["오늘은 연기 안 할게. 진짜로.","너한테는 안 통하더라, 내 연기.","앉아. 오늘 대사는 다 진심이야."]},go:{low:["고! ...일까?","고. 표정 읽지 마.","고야. 놀랐어?"],mid:["고. 근데 내가 진짜 좋은 패일까?","고! 이 대사 연습 많이 했어.","고. 너 지금 흔들렸지."],high:["고. 이번엔 진심이야. 진짜로.","고. 네 앞에선 연기가 안 돼.","고. 판 끝나는 게 싫어서."]},stop:{low:["스톱. 막 내립니다.","스톱! 커튼콜.","여기서 끊을게. 스톱."],mid:["스톱. 좋은 장면은 짧아야 해.","스톱. 여운을 남기는 게 연기야.","스톱. 다음 막을 기대해."],high:["스톱. 대사 말고 그냥 얘기하고 싶어.","스톱. 오늘은 무대 밖에 있고 싶어.","스톱. 연기 그만할래."]},ppeok:{low:["뻑! 이건 대본에 없었는데.","애드리브 들어갑니다.","뻑이네. 연출 실수."],mid:["뻑. 이것도 연기라고 해줄래?","묶였네. 2막에서 회수할게.","뻑. 이 표정 어때? 자연스러워?"],high:["뻑. 지금 표정은 진짜야.","야, 웃지 마. 연기 무너져.","뻑. 네 앞에서만 이래."]},sseulVictim:{low:["무대를 통째로 가져갔네.","쓸었어. 주연 자리 뺏겼다.","인정. 좋은 씬이었어."],mid:["아깝다. 저기 내 소품 있었는데.","그 장면 잘 나왔어. 인정.","다음 막엔 안 뺏겨."],high:["또 쓸어? 너 진짜 주연 하지.","그거 멋있는 거 알고 하는 거지?","심장 떨어지는 줄. 연기 아니야."]},win:{low:["막 내립니다. 박수는?","이겼어. 오늘 공연 끝.","수고했어, 상대역."],mid:["이겼다! 이번 막은 내 거야.","연기 좀 했지? 어디까지 속았어?","이겼으니까 욕실 순번 내 거."],high:["이겼는데 커튼콜이 안 즐겁네.","이겼어. 근데 안 나갈래. 무대에 더 있고 싶어.","이겼으니까 소원. 내일도 내 관객 해줘."]},lose:{low:["졌네. 오늘은 네가 주연.","잘 쳤어. 인정.","2막을 기대해."],mid:["졌다. 근데 좋은 장면이었어.","너 연기 안 하는데 왜 못 읽겠지.","다음 공연에서 보자."],high:["졌어. 근데 하나도 안 억울해.","너한테 지는 건 대본에 있었나 봐.","졌으니까 오늘 대사는 네가 정해."]},affection:{low:["대사 좀 받아줄래? 상대역이 없어서.","나 혼자 연습하면 이상하거든.","관객 한 명만 있어도 다르더라."],mid:["너 볼 때는 연기가 잘 안 돼.","무대 밖의 나도 봐주는 사람은 처음이야.","박수 안 쳐도 돼. 그냥 있어줘."],high:["나 사실 무대 내려오면 되게 조용해.","연기 말고 진짜 나를 보여준 적이 없었어.","오늘은 대본 없이 말할게."]},hints:["내 고는 반은 뻥이야. 점수 세어보면 알아.","표정 보지 마. 바닥을 봐.","내가 흔들 때는 진짜 좋은 패일 때가 적어."]},events:[{stage:1,scriptId:"seyeon_01",title:"복도에서 대사 외우는 사람",hasChoice:!1},{stage:2,scriptId:"seyeon_02",title:"소음 민원",hasChoice:!1},{stage:3,scriptId:"seyeon_03",title:"세연의 연기론",hasChoice:!1},{stage:4,scriptId:"seyeon_04",title:"대사 상대역",hasChoice:!0},{stage:5,scriptId:"seyeon_05",title:"가을 정기공연 티켓",hasChoice:!0},{stage:6,scriptId:"seyeon_06",title:"무대 뒤 도시락",hasChoice:!0},{stage:7,scriptId:"seyeon_07",title:"오디션에서 떨어진 날",hasChoice:!1},{stage:8,scriptId:"seyeon_08",title:"연기를 시작한 이유",hasChoice:!1},{stage:9,scriptId:"seyeon_09",title:"상대역과의 소문",hasChoice:!0},{stage:10,scriptId:"seyeon_10",title:"대본에 없는 대사",hasChoice:!0}],look:{hair:"#5a2230",hairStyle:"wave",skin:"#f6d9c6",outfits:["#b23a55","#f0c6d0","#2b2b3a"],accent:"#d94f6e",prop:"대본",face:"oval",eyes:"round",bangs:"split",build:"average",accessory:"earring",wear:["dress","cardigan","hanbok"],propArt:"script"}},{id:"dohee",order:9,name:"도희",nickname:"선배",age:28,job:"대학원 조교",room:"306호",season:"autumn",personality:["느긋함","짓궂음","통찰력"],styleLabel:"네 손패를 읽는다. 흔들기와 폭탄을 서슴없이 쓴다",backstory:"스물두 살에 갈 데가 없어 왔다. 보증금 없이 받아준 집이 여기뿐이었다.",style:{weights:{gwang:1.25,tti:1.2,yeol:1.2,pi:1.1},mistakeScale:.6,greedScale:1.15,inferenceScale:1.4,aggressionScale:1.6,stopScoreDelta:0},unlock:[{tenantId:"narae",stage:5}],rate:25,reward:{base:85,perStage:14},lines:{matchStart:{low:["오랜만이네, 후배. 앉아.","채점 끝났어. 이제 널 채점할 차례야.","손 좀 보자. 아, 패 말고 손."],mid:["오늘은 네가 뭘 노리는지 맞혀볼게.","앉아. 커피는 내가 샀어.","슬슬 시작할까."],high:["기다렸어. 오늘 좀 늦었네.","선배 노릇 그만하고 싶어지는 밤이야.","앉아. 오늘은 봐줄 생각 없어."]},go:{low:["고.","고 할게. 네 손에 뭐 있는지 알거든.","고. 여유 있어."],mid:["고. 너 방금 망설였지.","고. 네 손에 8월 남았잖아.","고. 아직 안 끝났어."],high:["고. 오늘 밤이 짧아서.","고. 이 판이 끝나면 네가 갈 거잖아.","고. 선배 욕심이라고 해두자."]},stop:{low:["스톱. 정리하자.","여기까지. 스톱.","스톱. 충분해."],mid:["스톱. 네 다음 수가 보여서.","스톱. 더 가면 네가 뒤집어.","스톱. 깔끔한 게 좋아."],high:["스톱. 오늘은 얘기가 하고 싶어서.","스톱. 판보다 네가 궁금해.","스톱. 선배가 먼저 접을게."]},ppeok:{low:["뻑. 그럴 수도 있지.","묶였네. 오래 안 갈 거야.","뻑."],mid:["뻑. 네가 저거 못 먹을 걸 아니까 괜찮아.","회수는 내 몫이지.","뻑. 계산에 있었어."],high:["뻑. 너 앞에서 체면 다 깎이네.","웃지 마. 선배 체면이 있지.","뻑. 오늘 왜 이러지 진짜."]},sseulVictim:{low:["쓸었네. 제법이야.","잘했어, 후배.","인정. 그건 좋은 수였어."],mid:["언제 이렇게 늘었어?","가르친 적 없는데 잘하네.","다음엔 안 놔둘게."],high:["또 쓸어. 이제 내가 배워야겠네.","너한테 쓸릴 줄이야.","잘한다. 얄미울 만큼."]},win:{low:["이겼다. 잘 배웠지?","수고했어. 다음엔 더 붙어봐.","끝. 들어가서 자."],mid:["이겼다. 아직 선배야.","흔들기 맛 좀 봤지?","이겼으니까 내일 조교실 커피는 네가."],high:["이겼는데 아쉽네. 벌써 끝이라서.","이겼어. 근데 안 보낼래.","이겼으니까 소원. 선배 말고 이름으로 불러봐."]},lose:{low:["졌네. 잘 쳤어.","인정. 오늘은 네가 나았어.","다음엔 안 봐줘."],mid:["졌다. 후배한테 지는 날도 오네.","네 수를 못 읽었어. 드문 일이야.","재밌었어. 정말로."],high:["졌어. 근데 하나도 안 분해.","너한테 지는 건 왜 이렇게 기분이 좋지.","졌으니까 오늘은 네가 선배 해."]},affection:{low:["후배, 시간 좀 있어? 아니 그냥.","조교실 커피가 남아서 가져왔어.","요즘 어때. 진짜로 묻는 거야."],mid:["선배 소리 들으면 거리감이 생기더라.","너랑 얘기하면 나이 생각이 안 나.","가끔은 나도 기대고 싶어."],high:["나 선배 노릇 그만하고 싶어졌어.","이름으로 불러줄래? 도희라고.","오늘은 후배 말고 그냥 너랑 있고 싶어."]},hints:["나는 네 손패를 세고 있어. 낸 패를 섞어.","내가 흔들면 진짜야. 그때는 빨리 끝내.","폭탄 맞기 싫으면 같은 월 세 장 안 남기게 유도해."]},events:[{stage:1,scriptId:"dohee_01",title:"같은 과 선배였다",hasChoice:!1},{stage:2,scriptId:"dohee_02",title:"하숙집 최고참의 조언",hasChoice:!1},{stage:3,scriptId:"dohee_03",title:"도희가 읽는 것",hasChoice:!1},{stage:4,scriptId:"dohee_04",title:"조교실 심부름",hasChoice:!0},{stage:5,scriptId:"dohee_05",title:"캠퍼스 벤치, 낙엽",hasChoice:!0},{stage:6,scriptId:"dohee_06",title:"논문 마감 전야",hasChoice:!0},{stage:7,scriptId:"dohee_07",title:"계속 공부할 거냐는 질문",hasChoice:!1},{stage:8,scriptId:"dohee_08",title:"도희가 하숙집에 온 해",hasChoice:!1},{stage:9,scriptId:"dohee_09",title:"선배라는 거리",hasChoice:!0},{stage:10,scriptId:"dohee_10",title:"이름으로 불러줘",hasChoice:!0}],look:{hair:"#241c17",hairStyle:"braid",skin:"#f1d4bb",outfits:["#8c6f4e","#d8c3a5","#4a3f35"],accent:"#b07d3f",prop:"머그컵",face:"round",eyes:"droopy",bangs:"side",build:"average",accessory:"hairpin",wear:["cardigan","knit","hanbok"],propArt:"mug"}},{id:"yoon",order:10,name:"윤",nickname:"장기하숙생",age:29,job:"정체 불명 (하숙집 최장기 거주자)",room:"별채",season:"winter",personality:["조용함","정확함","쓸쓸함"],styleLabel:"판 전체가 보인다. 그리고 네 습관까지 기억한다",backstory:"삼십 년 전 이 집 하숙생. 장부의 퇴실일 칸만 아직 비어 있다.",style:{weights:{gwang:1.3,yeol:1.3,tti:1.3,pi:1.3,godori:1.2},mistakeScale:.3,greedScale:1,inferenceScale:1.5,aggressionScale:1.3,stopScoreDelta:-1},unlock:[{tenantId:"yerin",stage:5},{tenantId:"seyeon",stage:5},{tenantId:"dohee",stage:5}],rate:35,reward:{base:104,perStage:17},lines:{matchStart:{low:["앉아.","이 마루에서 삼십 년 동안 판이 돌았어.","네 차례가 올 줄 알았어."],mid:["오늘은 네가 먼저 내.","많이 늘었네. 누가 가르쳤어?","겨울 판은 길어. 각오해."],high:["기다렸어. 오래.","이 판이 끝나면 할 얘기가 있어.","앉아. 마지막 겨울이야."]},go:{low:["고.","고. 아직이야.","고. 서두르지 마."],mid:["고. 네 손에 뭐가 남았는지 알아.","고. 여기서 끝내면 아무것도 안 남아.","고."],high:["고. 이 밤을 늘리고 싶어서.","고. 끝나는 게 두려운 건 처음이야.","고. 이유는 다 알잖아."]},stop:{low:["스톱.","여기까지.","스톱. 충분해."],mid:["스톱. 네가 뒤집기 전에.","스톱. 다음 판이 더 중요해.","스톱."],high:["스톱. 이제 얘기하자.","스톱. 판은 끝나도 밤은 안 끝나.","스톱. 미안, 급해졌어."]},ppeok:{low:["뻑.","...묶였군.","괜찮아."],mid:["뻑. 삼십 년 만에 처음 같은데.","저건 회수해.","뻑. 드문 일이야."],high:["뻑. 너 앞에서만 이래.","이상하지. 손이 떨렸어.","뻑. 웃어도 돼."]},sseulVictim:{low:["쓸었군.","...제법이야.","잘했어."],mid:["그 수는 못 봤어. 오랜만이야.","너한테 배울 게 생겼네.","다음엔 안 놔둬."],high:["또 쓸어. 내가 지는 게 이렇게 반가울 줄이야.","너는 매번 나를 놀라게 해.","잘했어. 진심으로."]},win:{low:["끝났어. 들어가서 자.","아직 멀었어.","이겼다. 다시 와."],mid:["이겼어. 근데 예전보다 어려웠어.","네가 강해졌다는 뜻이야.","이겼으니 오늘은 여기까지."],high:["이겼는데 하나도 안 기뻐.","이겼어. 그런데 가지 마.","이겼으니 소원 하나. 내일도 와줘."]},lose:{low:["졌군. ...오랜만이야.","잘했어. 진심으로.","다시 해."],mid:["졌다. 삼십 년 만에 처음이야, 이런 기분.","네가 이 판을 가져갔어.","이 마루의 다음 차례는 너야."],high:["졌어. 그리고 기뻐. 이상하지.","누군가한테 지고 싶었던 건 처음이야.","이제 나도 이 집을 떠날 수 있겠네."]},affection:{low:["이 집에 대해 얼마나 알아?","삼십 년이면 긴 시간이야.","네 할머니가 처음 이 마루를 깔던 날을 기억해."],mid:["나는 여기서 계속 누군가를 기다렸어.","겨울은 늘 혼자 났어. 올해는 다르네.","이 집이 나한테 뭐였는지 이제 알 것 같아."],high:["나는 이기려고 여기 있었던 게 아니야.","이 판을 끝내줄 사람을 기다렸어.","오늘 밤이 마지막이어도 괜찮아. 네가 있으니까."]},hints:["네 최근 스무 판을 기억해. 습관을 바꿔.","나는 남은 패를 다 세. 안 보이는 수를 둬.","정공법으로는 안 돼. 흔들기든 폭탄이든 써."]},events:[{stage:1,scriptId:"yoon_01",title:"별채의 불빛",hasChoice:!1},{stage:2,scriptId:"yoon_02",title:"삼십 년의 규칙",hasChoice:!1},{stage:3,scriptId:"yoon_03",title:"윤이 기억하는 것",hasChoice:!1},{stage:4,scriptId:"yoon_04",title:"첫눈 오는 마루",hasChoice:!0},{stage:5,scriptId:"yoon_05",title:"오래된 화투 한 벌",hasChoice:!0},{stage:6,scriptId:"yoon_06",title:"할머니가 남긴 장부",hasChoice:!0},{stage:7,scriptId:"yoon_07",title:"이 집을 떠나지 못한 이유",hasChoice:!1},{stage:8,scriptId:"yoon_08",title:"삼십 년 전 그 판",hasChoice:!1},{stage:9,scriptId:"yoon_09",title:"마지막 하숙생",hasChoice:!0},{stage:10,scriptId:"yoon_10",title:"하숙집의 겨울",hasChoice:!0}],look:{hair:"#15161c",hairStyle:"long",skin:"#ecd8cb",outfits:["#2b2f3a","#6d7280","#c8ccd6"],accent:"#9aa7c7",prop:"낡은 화투갑",face:"slim",eyes:"narrow",bangs:"curtain",build:"tall",accessory:"none",wear:["coat","knit","hanbok"],propArt:"hwatu"}}],v0={tenants:y0},w0={gwang:1,yeol:1,tti:1,pi:1,godori:1,hongdan:1,cheongdan:1,chodan:1};function $0(e,n){const t=(e-1)/9,r=(n-1)/9,i=Math.min(1,t*.6+r*.4);return{mistakeRate:Math.max(0,.5*(1-i)),inference:i,greed:.3+.2*r,stopScore:Math.round(10-3*i),patternLearning:Math.max(0,(i-.8)*5),aggression:.2+.5*i,weights:{...w0}}}function k0(e,n){return{...e,...n,weights:{...e.weights,...n.weights??{}}}}const x0=v0,tn=x0.tenants;function ur(e){const n=tn.find(t=>t.id===e);if(!n)throw new Error(`unknown tenant: ${e}`);return n}function Jd(e){return e<=30?"low":e<=70?"mid":"high"}function S0(e,n){const t=$0(e.order,n),r=e.style;return k0(t,{mistakeRate:ai(t.mistakeRate*(r.mistakeScale??1)),inference:ai(t.inference*(r.inferenceScale??1)),greed:ai(t.greed*(r.greedScale??1)),aggression:ai(t.aggression*(r.aggressionScale??1)),stopScore:Math.max(7,t.stopScore+(r.stopScoreDelta??0)),weights:r.weights})}function ai(e){return Math.max(0,Math.min(1,e))}function ef(e,n){return e.reward.base+e.reward.perStage*(n-1)}function nf(e){return e.rate*10}function xi(e,n){return e.unlock.length===0?!0:e.unlock.every(t=>(n[t.tenantId]??0)>=t.stage)}function C0(e){return e.unlock.length===0?"처음부터 승부 가능":e.unlock.map(n=>`${ur(n.tenantId).name} ${n.stage}단계 클리어`).join(" + ")}const b0=`# 세계관 / 프롤로그 / 계절 전환 / 히든 엔딩
# 형식 설명은 README 의 "시나리오 스크립트 작성법" 참고

=== world | 이 집에 대하여
@bg beach morning
@bgm title
* 버스가 하루 여섯 번 서는 바닷가 마을이다.
* 정류장에서 언덕을 오 분쯤 오르면, 바다를 등지고 선 이층 목조 집이 하나 있다.
* 대문에는 삼십 년 된 나무 간판이 걸려 있다. 「하숙」.
@bg yard evening
* 할머니는 이 집에서 삼십 년 동안 하숙을 쳤다.
* 대학생, 갓 취직한 사람, 한 계절만 머물다 간 사람.
* 방 열 개가 비는 날이 거의 없었다고 한다.
* 나는 방학마다 이 집에 맡겨졌다. 마루에서 밥을 먹고, 마루에서 잠들었다.
@bg maru night
@bgm sad
* 할머니가 돌아가신 건 지난봄이다.
* 집은 나에게 남았다. 방 열 개짜리 이층집이, 혼자 사는 사람 앞으로.
* 반년 동안 이 집에서 나는 소리라고는 내 발소리뿐이었다.
@bgm none
* 그런데 마루에는 아직 방석이 열 개 깔려 있다.
* 할머니는 매일 저녁 그걸 펴두고 주무셨다. 손님이 없는 날에도.
@bgm title
* 그리고 마당 끝 별채에는, 밤마다 불이 켜진다.
* 나는 아직 그 방에 누가 사는지 모른다.
@end

=== prologue | 다시 하숙을 놓는 밤
@bg room evening
@bgm spring
* 삼월. 책상 위에 고지서가 쌓였다.
* 지붕 수리비, 재산세, 기름값. 혼자 벌어서 감당할 금액이 아니었다.
* 집을 팔라는 전화가 두 번 왔다. 두 번 다 끊었다.
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
은서 [기본] 이거 왜 이렇게 많아?
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
* 겨울이 끝나갈 무렵, 마루에 열 개의 방석이 둥글게 깔렸다.
은서 [웃음] 다 모인 거 맞지? 한 명도 안 빠졌지?
하영 [기본] 국 식어. 빨리 앉아.
지우 [기본] 조명 이쪽이 나아. 옮겨.
수아 [웃음] 야, 사진은 찍고 붙자. 붙고 나면 표정 관리 안 돼.
민지 [기본] 계산해봤는데, 열 명이 다 붙으면 마흔다섯 판이야.
나래 [웃음] 그럼 오늘 밤은 안 끝나겠네. 좋아.
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
`,j0=`# 도희 (선배) - 가을 / 9번 하숙생\r
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
`,_0=`# 은서 (옆방) - 봄 / 1번 하숙생\r
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
`,N0=`# 하영 (요리왕) - 봄 / 2번 하숙생\r
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
`,E0=`# 지우 (밤샘) - 봄 / 3번 하숙생\r
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
`,M0=`# 민지 (취준) - 여름 / 5번 하숙생\r
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
`,P0=`# 나래 (옥상) - 여름 / 6번 하숙생\r
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
`,L0=`# 세연 (연극) - 가을 / 8번 하숙생\r
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
`,z0=`# 수아 (체대) - 여름 / 4번 하숙생\r
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
`,D0=`# 예린 (회계) - 가을 / 7번 하숙생\r
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
`,I0=`# 윤 (장기하숙생) - 겨울 / 10번 하숙생 / 최종 히로인\r
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
`,uu=["normal","smile","sulk","surprise","shy","serious","win","lose"],T0={기본:"normal",웃음:"smile",삐짐:"sulk",놀람:"surprise",부끄러움:"shy",진지:"serious",승리:"win",패배:"lose"},A0=["maru","kitchen","hallway","rooftop","yard","cvs","campus","street","room","annex","festival","station","beach"],B0=["morning","evening","night"],R0=["title","spring","summer","autumn","winter","warm","tense","sad","confess","none"],O0=/^([^\s\[\]]+)\s*(?:\[([^\]]+)\])?\s+(.+)$/;function F0(e,n="<script>"){const t=[],r=[];let i=null,l=n;const o=e.split(/\r?\n/),s=(d,f)=>{r.push({sceneId:l,line:d,message:f})},a=d=>{i&&(d.kind==="label"&&(i.labels[d.name]=i.steps.length),i.steps.push(d))};for(let d=0;d<o.length;d++){const f=d+1,h=o[d].trim();if(!h||h.startsWith("#"))continue;if(h.startsWith("===")){const m=h.replace(/^=+/,"").trim(),[p,y]=m.split("|").map($=>$.trim());if(!p){s(f,"씬 id 가 없습니다");continue}l=p,i={id:p,title:y??p,tenantId:p.includes("_")?p.split("_")[0]:null,steps:[],labels:{}},t.push(i);continue}if(!i){s(f,"씬 헤더(=== id | 제목) 보다 먼저 나온 줄입니다");continue}if(h.startsWith("*")){const m=h.slice(1).trim();m?a({kind:"narrate",text:m}):s(f,"빈 나레이션");continue}if(h.startsWith("-")){const m=i.steps[i.steps.length-1];if(!m||m.kind!=="choice"){s(f,"@choice 없이 선택지가 나왔습니다");continue}const p=U0(h.slice(1).trim());p?m.options.push(p):s(f,`선택지 형식 오류: ${h}`);continue}if(h.startsWith("@")){const[m,...p]=h.slice(1).split(/\s+/),y=p.join(" ").trim();switch(m){case"bg":{const[$,E]=p;if(!A0.includes($)){s(f,`알 수 없는 배경: ${$}`);break}const L=E??"night";if(!B0.includes(L)){s(f,`알 수 없는 시간대: ${E}`);break}a({kind:"bg",bg:$,time:L});break}case"bgm":{if(!R0.includes(y)){s(f,`알 수 없는 BGM: ${y}`);break}a({kind:"bgm",bgm:y});break}case"sfx":y?a({kind:"sfx",sfx:y}):s(f,"sfx 이름이 없습니다");break;case"cg":y?a({kind:"cg",cg:y}):s(f,"cg 이름이 없습니다");break;case"outfit":{const $=Number(y);[0,1,2].includes($)?a({kind:"outfit",index:$}):s(f,`의상 번호는 0~2: ${y}`);break}case"affection":{const $=Number(y);Number.isNaN($)?s(f,`호감도 값 오류: ${y}`):a({kind:"affection",delta:$});break}case"point":{const $=Number(y);Number.isNaN($)?s(f,`포인트 값 오류: ${y}`):a({kind:"point",delta:$});break}case"choice":a({kind:"choice",options:[]});break;case"label":y?a({kind:"label",name:y}):s(f,"라벨 이름이 없습니다");break;case"goto":y?a({kind:"goto",name:y}):s(f,"goto 대상이 없습니다");break;case"end":a({kind:"end"});break;default:s(f,`알 수 없는 지시어: @${m}`)}continue}const g=O0.exec(h);if(!g){s(f,`해석할 수 없는 줄: ${h}`);continue}const[,v,x,C]=g;let N="normal";if(x){const m=T0[x.trim()];m?N=m:s(f,`알 수 없는 표정: ${x}`)}a({kind:"say",speaker:v,expression:N,text:C})}for(const d of t){for(const f of d.steps)if(f.kind==="goto"&&!(f.name in d.labels)&&r.push({sceneId:d.id,line:0,message:`없는 라벨로 goto: ${f.name}`}),f.kind==="choice"){f.options.length<2&&r.push({sceneId:d.id,line:0,message:"선택지가 2개 미만입니다"});for(const h of f.options)h.goto&&!(h.goto in d.labels)&&r.push({sceneId:d.id,line:0,message:`없는 라벨로 선택지 이동: ${h.goto}`})}d.steps.some(f=>f.kind==="end")||r.push({sceneId:d.id,line:0,message:"@end 가 없습니다"})}return{scenes:t,issues:r}}function U0(e){const n=e.split("|").map(l=>l.trim());if(n.length<2)return null;const t=n[0];if(!t)return null;const r=Number(n[1]);if(Number.isNaN(r))return null;const i=n[2]?n[2]:null;return{text:t,affection:r,goto:i}}function V0(e){return hl({scene:e,pc:0,view:{bg:"maru",time:"night",bgm:"none",cg:null,outfit:0,speaker:null,expression:"normal",text:"",choices:null,affectionDelta:0,pointDelta:0,sfx:null,done:!1}})}function hl(e){const n={...e.view,sfx:null};if(n.choices)return{...e,view:n};let t=e.pc;const{steps:r,labels:i}=e.scene;let l=0;for(;t<r.length;){if(l++>1e4){n.done=!0;break}const o=r[t];switch(t++,o.kind){case"bg":n.bg=o.bg,n.time=o.time;break;case"bgm":n.bgm=o.bgm;break;case"sfx":n.sfx=o.sfx;break;case"cg":n.cg=o.cg;break;case"outfit":n.outfit=o.index;break;case"affection":n.affectionDelta+=o.delta;break;case"point":n.pointDelta+=o.delta;break;case"label":break;case"goto":{const s=i[o.name];if(s===void 0)return n.done=!0,{...e,pc:r.length,view:n};t=s;break}case"choice":return n.choices=o.options,{...e,pc:t,view:n};case"say":return n.speaker=o.speaker,n.expression=o.expression,n.text=o.text,{...e,pc:t,view:n};case"narrate":return n.speaker=null,n.expression="normal",n.text=o.text,{...e,pc:t,view:n};case"end":return n.done=!0,n.choices=null,{...e,pc:r.length,view:n}}}return n.done=!0,{...e,pc:t,view:n}}function tf(e,n){const t=e.view.choices;if(!t||n<0||n>=t.length)return e;const r=t[n],i={...e.view,choices:null,affectionDelta:e.view.affectionDelta+r.affection};let l=e.pc;if(r.goto){const o=e.scene.labels[r.goto];o!==void 0&&(l=o)}return hl({...e,pc:l,view:i})}function G0(e,n=0){let t=e,r=0;for(;!t.view.done&&r++<2e3;)if(t.view.choices){const i=Math.min(n,t.view.choices.length-1);t=tf(t,i)}else t=hl(t);return t}const H0=Object.assign({"../data/scripts/common.txt":b0,"../data/scripts/dohee.txt":j0,"../data/scripts/eunseo.txt":_0,"../data/scripts/hayeong.txt":N0,"../data/scripts/jiwoo.txt":E0,"../data/scripts/minji.txt":M0,"../data/scripts/narae.txt":P0,"../data/scripts/seyeon.txt":L0,"../data/scripts/sua.txt":z0,"../data/scripts/yerin.txt":D0,"../data/scripts/yoon.txt":I0}),Ro={},cu=[];for(const[e,n]of Object.entries(H0)){const{scenes:t,issues:r}=F0(n,e);cu.push(...r);for(const i of t)Ro[i.id]&&cu.push({sceneId:i.id,line:0,message:`중복된 씬 id (${e})`}),Ro[i.id]=i}const q0=Ro;function Vl(e){return q0[e]??null}const Gs="hasukgo.save.v1",rf=1,W0={rules:{},allRoutes:!0,bgmVolume:.5,sfxVolume:.7,textSpeed:25};function Ar(){const e={};for(const n of tn)e[n.id]={affection:0,clearedStage:0,wins:0,losses:0,dating:!1};return{version:rf,deviceId:"",savedAt:0,points:300,tenants:e,seenScenes:[],unlockedCG:[],recentGames:[],settings:{...W0},owned:[],equipped:{cards:"classic",theme:"maru"},stats:{totalGames:0,wins:0,losses:0,bestScore:0,pointsWon:0,pointsLost:0,biggestPot:0}}}function lf(){try{const e=localStorage.getItem(Gs);if(!e)return Ar();const n=JSON.parse(e);return Ki(n)}catch{return Ar()}}function Hs(e){const n={...e,savedAt:Date.now()};try{localStorage.setItem(Gs,JSON.stringify(n))}catch{}K0(n)}const Q0="hasukgo",Rn="meta",qs="save";function Ws(){return new Promise(e=>{try{if(typeof indexedDB>"u")return e(null);const n=indexedDB.open(Q0,1);n.onupgradeneeded=()=>{const t=n.result;t.objectStoreNames.contains(Rn)||t.createObjectStore(Rn)},n.onsuccess=()=>e(n.result),n.onerror=()=>e(null),setTimeout(()=>e(null),1500)}catch{e(null)}})}async function K0(e){const n=await Ws();if(n)try{n.transaction(Rn,"readwrite").objectStore(Rn).put(JSON.stringify(e),qs)}catch{}}async function Z0(){const e=await Ws();return e?new Promise(n=>{try{const r=e.transaction(Rn,"readonly").objectStore(Rn).get(qs);r.onsuccess=()=>{try{n(r.result?JSON.parse(r.result):null)}catch{n(null)}},r.onerror=()=>n(null)}catch{n(null)}}):null}async function Y0(){const e=lf(),n=await Z0();if(!n)return{data:e,recovered:!1};if(e.stats.totalGames===0&&e.savedAt===0&&n.stats.totalGames>0){const r=Ki(n);return Hs(r),{data:r,recovered:!0}}return(n.savedAt??0)>(e.savedAt??0)?{data:Ki(n),recovered:!1}:{data:e,recovered:!1}}function du(e){const n=Ki(e);return Hs(n),n}function X0(){try{localStorage.removeItem(Gs)}catch{}return(async()=>{const e=await Ws();if(e)try{e.transaction(Rn,"readwrite").objectStore(Rn).delete(qs)}catch{}})(),Ar()}function Ki(e){const n=Ar(),t={...n,...e,version:rf,tenants:{...n.tenants,...e.tenants??{}},settings:{...n.settings,...e.settings??{}},stats:{...n.stats,...e.stats??{}},seenScenes:e.seenScenes??[],unlockedCG:e.unlockedCG??[],recentGames:e.recentGames??[],deviceId:e.deviceId??"",savedAt:e.savedAt??0,owned:e.owned??[],equipped:{...n.equipped,...e.equipped??{}}};for(const r of Object.keys(t.tenants))tn.some(i=>i.id===r)||delete t.tenants[r];return t}function of(e){const n={};for(const[t,r]of Object.entries(e.tenants))n[t]=r.clearedStage;return n}function J0(e){const n=e.slice(-20);if(n.length===0)return{goRate:.3,preference:{gwang:.25,yeol:.25,tti:.25,pi:.25},samples:0};const t=n.filter(l=>l.playerWentGo).length/n.length,r={gwang:0,yeol:0,tti:0,pi:0};for(const l of n)r[l.focus]++;const i=n.length;return{goRate:t,preference:{gwang:r.gwang/i,yeol:r.yeol/i,tti:r.tti/i,pi:r.pi/i},samples:n.length}}function eg(e,n,t){const r=e.tenants[n.tenantId];if(!r)return e;const i={...e,tenants:{...e.tenants},recentGames:[...e.recentGames,n].slice(-20),stats:{...e.stats}},l={...r};return i.stats.totalGames++,i.points=Math.max(0,i.points+n.payout),n.payout>0?(i.stats.pointsWon+=n.payout,i.stats.biggestPot=Math.max(i.stats.biggestPot,n.payout)):i.stats.pointsLost+=-n.payout,n.won?(i.stats.wins++,l.wins++,n.stage===l.clearedStage+1&&(l.clearedStage=n.stage,l.affection=Math.min(100,l.affection+10),i.points+=t.reward,n.stage===10&&(l.dating=!0))):(i.stats.losses++,l.losses++),i.stats.bestScore=Math.max(i.stats.bestScore,n.score),i.tenants[n.tenantId]=l,i}function ng(e,n,t){const r=e.seenScenes.includes(n)?e.seenScenes:[...e.seenScenes,n],i=t&&!e.unlockedCG.includes(t)?[...e.unlockedCG,t]:e.unlockedCG;return{...e,seenScenes:r,unlockedCG:i}}function tg(){return Math.min(...tn.map(e=>e.rate*10))}function sf(e){return e.points<tg()}const af=100,Qs=.7;function rg(e){if(e.draw)return 0;const n=e.settlementTotal*e.rate;return e.won?Math.round(n):-Math.round(n*Qs)}function ig(e){return sf(e)?{...e,points:e.points+af}:e}function lg(e){return tn.every(n=>(e.tenants[n.id]?.clearedStage??0)>=10)}const c=120,M=46,k=118,Wn=168,Q=196,ae=360,_n=21;function uf(e){return Math.max(0,Math.min(255,Math.round(e)))}function B(e,n){const t=/^#?([0-9a-f]{6})$/i.exec(e.trim());if(!t)return e;const r=parseInt(t[1],16),i=r>>16&255,l=r>>8&255,o=r&255,s=n>0?255:0,a=Math.abs(n);return`#${[i,l,o].map(f=>uf(f+(s-f)*a)).map(f=>f.toString(16).padStart(2,"0")).join("")}`}function og(e,n,t){const r=h=>{const g=/^#?([0-9a-f]{6})$/i.exec(h.trim()),v=g?parseInt(g[1],16):0;return[v>>16&255,v>>8&255,v&255]},[i,l,o]=r(e),[s,a,d]=r(n);return`#${[i+(s-i)*t,l+(a-l)*t,o+(d-o)*t].map(h=>uf(h).toString(16).padStart(2,"0")).join("")}`}function sg(e){return og(B(e.hair,.32),e.accent,.32)}let Gl=0;function Oo(){return Gl=(Gl+1)%1e6,`p${Gl.toString(36)}`}const ag={normal:{eye:"open",brow:0,browTilt:0,mouth:"flat",blush:.08,sweat:!1,tear:!1,tilt:0},smile:{eye:"arc",brow:-1,browTilt:-1,mouth:"smile",blush:.3,sweat:!1,tear:!1,tilt:-2},sulk:{eye:"half",brow:2,browTilt:3,mouth:"pout",blush:.2,sweat:!1,tear:!1,tilt:3},surprise:{eye:"wide",brow:-5,browTilt:-2,mouth:"open",blush:.05,sweat:!0,tear:!1,tilt:-1},shy:{eye:"closed",brow:-2,browTilt:2,mouth:"small",blush:.95,sweat:!1,tear:!1,tilt:4},serious:{eye:"open",brow:3,browTilt:-4,mouth:"flat",blush:0,sweat:!1,tear:!1,tilt:0},win:{eye:"arc",brow:-2,browTilt:-2,mouth:"wide",blush:.4,sweat:!1,tear:!1,tilt:-3},lose:{eye:"half",brow:4,browTilt:5,mouth:"wave",blush:.15,sweat:!0,tear:!0,tilt:2}},cf={normal:"기본",smile:"웃음",sulk:"삐짐",surprise:"놀람",shy:"부끄러움",serious:"진지",win:"승리",lose:"패배"},ug={round:{rx:41,cheek:21,jaw:20},oval:{rx:38,cheek:16,jaw:15},slim:{rx:35,cheek:12,jaw:11}},cg={petite:52,average:58,tall:64},dg={round:{h:12,tilt:0,iris:.95,lid:3.4},sharp:{h:10,tilt:-3.6,iris:.86,lid:3.8},droopy:{h:10.5,tilt:3.2,iris:.92,lid:3.2},narrow:{h:7.6,tilt:-1.6,iris:.82,lid:3.4},sleepy:{h:8.6,tilt:1.2,iris:.86,lid:4.2}},pt="#2a2018";function fu(e,n,t,r,i){const l=e,o=c+l*_n,s=11.5,a=n.eye==="wide"?t.h*1.32:n.eye==="half"?t.h*.52:t.h,d=t.tilt;if(n.eye==="closed"||n.eye==="arc"){const N=n.eye==="arc"?-1:1,m=t.tilt<0?`<path d="M${o+l*(s+1)} ${k-3} l${l*5} -4" stroke="${pt}" stroke-width="2.6" stroke-linecap="round"/>`:"";return`
      <path d="M${o-l*s} ${k+1} q${l*s} ${N*9} ${l*s*2} ${d*.5}"
            stroke="${pt}" stroke-width="3.2" fill="none" stroke-linecap="round"/>
      ${m}`}const f=`${o-l*s} ${k+1.5}`,h=`${o+l*s} ${k+d}`,g=`M${f} Q${o} ${k-a} ${h} Q${o} ${k+a*.74} ${f} Z`,v=a*t.iris*.82,x=k-a*.06+(n.eye==="half"?-1:0),C=t.tilt<-2?`<path d="M${o+l*(s-1)} ${k+d-1} l${l*6} -5" stroke="${pt}" stroke-width="2.8" stroke-linecap="round"/>`:"";return`
    <clipPath id="${i}"><path d="${g}"/></clipPath>
    <path d="${g}" fill="#fdfbf7"/>
    <g clip-path="url(#${i})">
      <circle cx="${o}" cy="${x}" r="${v.toFixed(1)}" fill="${B(r,-.45)}"/>
      <circle cx="${o}" cy="${(x+v*.14).toFixed(1)}" r="${(v*.8).toFixed(1)}" fill="${r}"/>
      <circle cx="${o}" cy="${(x+v*.28).toFixed(1)}" r="${(v*.42).toFixed(1)}" fill="#1a1410"/>
      <circle cx="${(o-l*v*.34).toFixed(1)}" cy="${(x-v*.42).toFixed(1)}" r="${(v*.3).toFixed(1)}" fill="#ffffff"/>
      <circle cx="${(o+l*v*.36).toFixed(1)}" cy="${(x+v*.5).toFixed(1)}" r="${(v*.16).toFixed(1)}" fill="#ffffff" opacity="0.75"/>
      <path d="${g}" fill="none" stroke="${pt}" stroke-width="${t.lid*2}" opacity="0.0"/>
    </g>
    <path d="M${f} Q${o} ${k-a} ${h}" stroke="${pt}" stroke-width="${t.lid}" fill="none" stroke-linecap="round"/>
    <path d="M${o} ${k+a*.66} Q${o+l*s*.7} ${k+a*.5} ${h}"
          stroke="${pt}" stroke-width="1.5" fill="none" opacity="0.5" stroke-linecap="round"/>
    ${C}`}function fg(e,n,t){const r=dg[n];return fu(-1,e,r,t,Oo())+fu(1,e,r,t,Oo())}function hg(e,n){const t=k-19+e.brow,r=e.browTilt,i=17,l=o=>`<path d="M${c+o*_n-o*i*.55} ${t+r} q${o*i*.5} -5 ${o*i} ${-r*.45}"
                  stroke="${n}" stroke-width="3.4" fill="none" stroke-linecap="round"/>`;return l(-1)+l(1)}function pg(e){const n=k+34,t="#a85a56",r="#8c3f41";switch(e.mouth){case"smile":return`<path d="M${c-9} ${n-1} q9 8 18 0" stroke="${t}" stroke-width="2.8" fill="none" stroke-linecap="round"/>`;case"wide":return`<path d="M${c-11} ${n-2} q11 14 22 0 q-11 4 -22 0z" fill="${r}"/>
              <path d="M${c-8} ${n-1} q8 4 16 0" fill="#ffffff" opacity="0.85"/>`;case"pout":return`<path d="M${c-7} ${n+3} q7 -7 14 0" stroke="${t}" stroke-width="2.8" fill="none" stroke-linecap="round"/>`;case"open":return`<ellipse cx="${c}" cy="${n+2}" rx="6" ry="8.5" fill="${r}"/>
              <ellipse cx="${c}" cy="${n+5}" rx="3.4" ry="4" fill="#c4726e" opacity="0.8"/>`;case"small":return`<path d="M${c-4} ${n} q4 4.5 8 0" stroke="${t}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;case"wave":return`<path d="M${c-10} ${n} q5 -5.5 10 0 q5 5.5 10 0" stroke="${t}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;default:return`<path d="M${c-6} ${n} q6 2.5 12 0" stroke="${t}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`}}function gg(e,n){const t=e.hair,r=B(t,-.3),i=52;switch(e.hairStyle){case"long":return`<path d="M${c-i} ${k-20}
                       C${c-i-12} ${k+90} ${c-n-6} 260 ${c-n-10} ${ae}
                       L${c+n+10} ${ae}
                       C${c+n+6} 260 ${c+i+12} ${k+90} ${c+i} ${k-20} Z" fill="${r}"/>`;case"wave":return`<path d="M${c-i} ${k-20}
                       C${c-i-16} ${k+80} ${c-n-10} 250 ${c-n-14} ${ae}
                       q14 -16 26 0 q14 -18 26 0 q12 -16 24 0 q14 -18 26 0 q12 -16 26 0
                       C${c+n+10} 250 ${c+i+16} ${k+80} ${c+i} ${k-20} Z" fill="${r}"/>`;case"braid":return`<path d="M${c-i} ${k-20} C${c-i-6} ${k+60} ${c-48} 220 ${c-44} 250
                       L${c+44} 250 C${c+48} 220 ${c+i+6} ${k+60} ${c+i} ${k-20} Z" fill="${r}"/>
              <g transform="translate(${c+38} ${k+34}) rotate(10)">
                ${[0,1,2,3,4].map(l=>{const o=l*25,s=14-l*1.2;return`<ellipse cx="0" cy="${o}" rx="${s.toFixed(1)}" ry="16" fill="${l%2?B(t,.1):B(t,-.14)}"/>
                            <path d="M${-s.toFixed(1)} ${o+12} q${s.toFixed(1)} -9 ${(s*2).toFixed(1)} 0"
                                  stroke="${B(t,-.45)}" stroke-width="1.8" fill="none" opacity="0.8"/>`}).join("")}
                <path d="M0 ${4*25+14} l-7 15 h14z" fill="${B(t,-.5)}"/>
                <rect x="-9" y="${4*25+10}" width="18" height="6" rx="3" fill="${e.accent}"/>
              </g>`;case"ponytail":return`<path d="M${c-46} ${k-20} C${c-50} ${k+40} ${c-44} 200 ${c-40} 214
                       L${c+40} 214 C${c+44} 200 ${c+50} ${k+40} ${c+46} ${k-20} Z" fill="${r}"/>
              <path d="M${c+40} ${k-26} C${c+86} ${k+4} ${c+82} ${k+90} ${c+56} ${k+150}
                       C${c+74} ${k+80} ${c+70} ${k+20} ${c+34} ${k+4} Z" fill="${t}"/>`;case"bun":return`<path d="M${c-44} ${k-20} C${c-46} ${k+20} ${c-42} 170 ${c-38} 182
                       L${c+38} 182 C${c+42} 170 ${c+46} ${k+20} ${c+44} ${k-20} Z" fill="${r}"/>
              <circle cx="${c}" cy="${M-22}" r="20" fill="${t}"/>
              <circle cx="${c}" cy="${M-22}" r="20" fill="none" stroke="${r}" stroke-width="2"/>
              <path d="M${c-14} ${M-28} q14 -10 28 0" stroke="${B(t,.3)}" stroke-width="3" fill="none" opacity="0.5"/>`;case"bob":return`<path d="M${c-48} ${k-20} C${c-54} ${k+30} ${c-48} ${k+52} ${c-40} ${k+62}
                       L${c+40} ${k+62} C${c+48} ${k+52} ${c+54} ${k+30} ${c+48} ${k-20} Z" fill="${r}"/>`;default:return`<path d="M${c-44} ${k-24} C${c-48} ${k+6} ${c-44} ${k+18} ${c-38} ${k+24}
                       L${c+38} ${k+24} C${c+44} ${k+18} ${c+48} ${k+6} ${c+44} ${k-24} Z" fill="${r}"/>`}}function mg(e,n){const t=e.hair,r=B(t,.32);return`
    <path d="M${c-n-3} ${k-4}
             C${c-n-5} ${M-8} ${c-n*.66} ${M-16} ${c} ${M-16}
             C${c+n*.66} ${M-16} ${c+n+5} ${M-8} ${c+n+3} ${k-4}
             C${c+n} ${k-30} ${c+n*.5} ${k-40} ${c} ${k-40}
             C${c-n*.5} ${k-40} ${c-n} ${k-30} ${c-n-3} ${k-4} Z" fill="${t}"/>
    <path d="M${c-n*.8} ${M+2} C${c-n*.4} ${M-14} ${c+n*.1} ${M-15} ${c+n*.42} ${M-5}
             C${c+n*.1} ${M-9} ${c-n*.4} ${M-7} ${c-n*.8} ${M+8} Z"
          fill="${r}" opacity="0.3"/>`}function yg(e,n,t){const r=n.hair,i=B(r,.26),l=k-26;switch(e){case"straight":return`<path d="M${c-t-2} ${k-4} C${c-t} ${M-8} ${c-20} ${M-16} ${c} ${M-16}
                       C${c+20} ${M-16} ${c+t} ${M-8} ${c+t+2} ${k-4}
                       C${c+t-4} ${l+2} ${c+20} ${l-4} ${c} ${l-2}
                       C${c-20} ${l-4} ${c-t+4} ${l+2} ${c-t-2} ${k-4} Z" fill="${r}"/>
              <path d="M${c-22} ${M-4} q20 -8 40 2 q-20 -2 -40 -2z" fill="${i}" opacity="0.5"/>`;case"split":return`<path d="M${c-t-2} ${k-2} C${c-t} ${M-8} ${c-18} ${M-16} ${c} ${M-16}
                       C${c+18} ${M-16} ${c+t} ${M-8} ${c+t+2} ${k-2}
                       C${c+t-6} ${l+6} ${c+22} ${l-2} ${c+7} ${M+6}
                       C${c+3} ${M+22} ${c-3} ${M+22} ${c-7} ${M+6}
                       C${c-22} ${l-2} ${c-t+6} ${l+6} ${c-t-2} ${k-2} Z" fill="${r}"/>
              <path d="M${c-26} ${M} q22 -9 44 0 q-22 -1 -44 0z" fill="${i}" opacity="0.45"/>`;case"side":return`<path d="M${c-t-2} ${k+2} C${c-t} ${M-8} ${c-18} ${M-16} ${c} ${M-16}
                       C${c+20} ${M-16} ${c+t} ${M-8} ${c+t+2} ${k+2}
                       C${c+t-8} ${l-6} ${c+10} ${l+8} ${c-14} ${l+4}
                       C${c-26} ${l+2} ${c-t+2} ${l+10} ${c-t-2} ${k+2} Z" fill="${r}"/>
              <path d="M${c-18} ${M-2} C${c+4} ${M-10} ${c+24} ${M+2} ${c+30} ${M+18}
                       C${c+20} ${M+4} ${c+2} ${M+2} ${c-18} ${M+6} Z" fill="${i}" opacity="0.5"/>`;case"curtain":return`<path d="M${c-t-2} ${k+4} C${c-t} ${M-8} ${c-18} ${M-16} ${c} ${M-16}
                       C${c+18} ${M-16} ${c+t} ${M-8} ${c+t+2} ${k+4}
                       C${c+t-2} ${l+14} ${c+26} ${l+4} ${c+14} ${M+2}
                       C${c+8} ${M-6} ${c-8} ${M-6} ${c-14} ${M+2}
                       C${c-26} ${l+4} ${c-t+2} ${l+14} ${c-t-2} ${k+4} Z" fill="${r}"/>
              <path d="M${c-30} ${M+2} C${c-18} ${M-10} ${c+18} ${M-10} ${c+30} ${M+2}
                       C${c+16} ${M-4} ${c-16} ${M-4} ${c-30} ${M+2} Z" fill="${i}" opacity="0.5"/>`;default:{const s=(2*t+4)/6;let a="";for(let d=0;d<6;d+=1)a+=` l${-s.toFixed(1)} ${d%2===0?-16:16}`;return`<path d="M${c-t-2} ${k-14} C${c-t} ${M-12} ${c-18} ${M-20} ${c} ${M-20}
                       C${c+18} ${M-20} ${c+t} ${M-12} ${c+t+2} ${k-14}${a} Z" fill="${r}"/>
              <path d="M${c-16} ${M-8} l12 -9 l7 11 z" fill="${i}" opacity="0.5"/>`}}}function vg(e,n){const t=e.hair,r=B(t,-.14),l=["long","wave","braid","ponytail"].includes(e.hairStyle)?104:e.hairStyle==="bob"?56:26,o=s=>`<path d="M${c+s*(n+1)} ${k-26}
              C${c+s*(n+6)} ${k+l*.35} ${c+s*(n+2)} ${k+l*.8} ${c+s*(n-4)} ${k+l}
              C${c+s*(n-1)} ${k+l*.7} ${c+s*(n-4)} ${k+6} ${c+s*(n-7)} ${k-22} Z"
            fill="${r}"/>`;return o(-1)+o(1)}function wg(e,n,t){const r=n.accent;switch(e){case"glasses":{const i=B(r,-.55),l=o=>`<rect x="${c+o*_n-15}" y="${k-12}" width="30" height="23" rx="8"
               fill="#dff0ff" fill-opacity="0.16" stroke="${i}" stroke-width="2.4"/>`;return`${l(-1)}${l(1)}
              <path d="M${c-6} ${k-5} q6 -3 12 0" stroke="${i}" stroke-width="2.4" fill="none"/>
              <path d="M${c-_n-15} ${k-6} l-6 -3 M${c+_n+15} ${k-6} l6 -3"
                    stroke="${i}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
              <path d="M${c-_n-11} ${k-8} l9 -2 l-11 9z" fill="#ffffff" opacity="0.3"/>`}case"hairpin":return`<g transform="translate(${c-t+4} ${M+2}) rotate(-18)">
                <rect x="-11" y="-3" width="22" height="6" rx="3" fill="${r}"/>
                <circle cx="-11" cy="0" r="3.4" fill="${B(r,.35)}"/>
              </g>`;case"starpin":return`<g transform="translate(${c+t-6} ${M}) rotate(12)">
                <path d="M0 -9 L2.6 -2.8 L9 -2.8 L3.8 1.2 L5.8 8 L0 4 L-5.8 8 L-3.8 1.2 L-9 -2.8 L-2.6 -2.8 Z" fill="${r}"/>
                <circle cx="0" cy="0" r="2" fill="#fff" opacity="0.7"/>
              </g>`;case"ribbon":return`<g transform="translate(${c+t-10} ${M-4})">
                <path d="M0 0 l-13 -7 v14 z" fill="${r}"/>
                <path d="M0 0 l13 -7 v14 z" fill="${r}"/>
                <circle cx="0" cy="0" r="4" fill="${B(r,-.2)}"/>
              </g>`;case"earring":return`<g fill="${r}">
                <circle cx="${c-t-1}" cy="${k+12}" r="3"/>
                <circle cx="${c+t+1}" cy="${k+12}" r="3"/>
                <path d="M${c+t+1} ${k+14} v7" stroke="${r}" stroke-width="1.6"/>
                <circle cx="${c+t+1}" cy="${k+23}" r="3.2"/>
              </g>`;case"band":return`<path d="M${c-t-4} ${k-14} C${c-t} ${M-14} ${c+t} ${M-14} ${c+t+4} ${k-14}"
                    stroke="${r}" stroke-width="6" fill="none" stroke-linecap="round"/>`;default:return""}}function $g(e){const n=Q-16;return`M${c-18} ${n}
          C${c-46} ${n+4} ${c-e} ${n+16} ${c-e} ${n+46}
          C${c-e} ${n+86} ${c-e*.74} 302 ${c-e*.86} ${ae}
          L${c+e*.86} ${ae}
          C${c+e*.74} 302 ${c+e} ${n+86} ${c+e} ${n+46}
          C${c+e} ${n+16} ${c+46} ${n+4} ${c+18} ${n} Z`}function kg(e,n,t){const r=e-5,i=o=>`<path d="M${c+o*(r-6)} ${Q+8} C${c+o*(r+6)} ${Q+50} ${c+o*(r+3)} ${Q+84} ${c+o*(r-2)} ${Q+108}"
           stroke="${n}" stroke-width="27" fill="none" stroke-linecap="round"/>`,l=o=>`<circle cx="${c+o*(r-2)}" cy="${Q+118}" r="11.5" fill="${t}"/>
     <circle cx="${c+o*(r-2)}" cy="${Q+118}" r="11.5" fill="${B(t,-.12)}" opacity="0.35"/>`;return i(-1)+i(1)+l(-1)+l(1)}function xg(e,n,t,r,i){const l=Q-16,o=B(n,-.22),s=B(n,.2),a=`M${c-17} ${l+1} L${c} ${l+26} L${c+17} ${l+1}`;switch(e){case"hoodie":return`
        <path d="M${c-34} ${l+2} C${c-40} ${l+30} ${c-22} ${l+40} ${c} ${l+40}
                 C${c+22} ${l+40} ${c+40} ${l+30} ${c+34} ${l+2}
                 C${c+20} ${l-10} ${c-20} ${l-10} ${c-34} ${l+2} Z" fill="${o}"/>
        <path d="M${c-24} ${l+8} q24 22 48 0" stroke="${B(n,-.4)}" stroke-width="2" fill="none" opacity="0.6"/>
        <path d="M${c-8} ${l+26} v34" stroke="#f5efe4" stroke-width="3.4" stroke-linecap="round"/>
        <path d="M${c+8} ${l+24} v30" stroke="#f5efe4" stroke-width="3.4" stroke-linecap="round"/>
        <path d="M${c-30} ${l+96} h60" stroke="${o}" stroke-width="2.4" opacity="0.7"/>`;case"tee":return`
        <path d="M${c-19} ${l+2} q19 20 38 0" stroke="${o}" stroke-width="4" fill="none"/>
        <path d="M${c-i+8} ${Q+52} q12 8 22 2" stroke="${o}" stroke-width="3" fill="none"/>
        <path d="M${c+i-8} ${Q+52} q-12 8 -22 2" stroke="${o}" stroke-width="3" fill="none"/>
        <circle cx="${c}" cy="${l+74}" r="15" fill="none" stroke="${t}" stroke-width="3" opacity="0.75"/>`;case"shirt":return`
        <path d="${a}" stroke="none" fill="${B(r,-.05)}"/>
        <path d="M${c-17} ${l} l-13 12 l19 12 l11 -20z" fill="#f6f1e6"/>
        <path d="M${c+17} ${l} l13 12 l-19 12 l-11 -20z" fill="#f6f1e6"/>
        <path d="M${c} ${l+24} v${ae-l-24}" stroke="${o}" stroke-width="2.2"/>
        ${[40,70,100,130].map(d=>`<circle cx="${c}" cy="${l+d}" r="2.6" fill="${s}"/>`).join("")}`;case"apron":return`
        <path d="M${c-17} ${l} l-13 12 l19 12 l11 -20z" fill="#f6f1e6"/>
        <path d="M${c+17} ${l} l13 12 l-19 12 l-11 -20z" fill="#f6f1e6"/>
        <path d="M${c-26} ${l+30} h52 l8 ${ae-l-30} h-68z" fill="${s}"/>
        <path d="M${c-26} ${l+30} l-4 -18 M${c+26} ${l+30} l4 -18"
              stroke="${s}" stroke-width="7" stroke-linecap="round"/>
        <path d="M${c-34} ${l+104} h68" stroke="${t}" stroke-width="8"/>
        <path d="M${c+22} ${l+108} q14 10 8 26" stroke="${t}" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M${c-16} ${l+120} h32 v26 h-32z" fill="${B(s,-.1)}" opacity="0.8"/>`;case"smock":return`
        <path d="${a}" fill="${B(r,-.05)}"/>
        <path d="${a}" stroke="${o}" stroke-width="3.5" fill="none"/>
        <path d="M${c-i+4} ${Q+60} q14 10 26 2" stroke="${o}" stroke-width="6" fill="none"/>
        <path d="M${c+i-4} ${Q+60} q-14 10 -26 2" stroke="${o}" stroke-width="6" fill="none"/>
        ${[[c-26,l+62,5,t],[c+18,l+86,4,B(t,.3)],[c+30,l+48,3,"#e4d7a8"],[c-12,l+116,6,B(t,-.25)],[c+8,l+140,3.5,t]].map(([d,f,h,g])=>`<circle cx="${d}" cy="${f}" r="${h}" fill="${g}" opacity="0.75"/>`).join("")}`;case"jersey":return`
        <path d="M${c-18} ${l+2} q18 8 36 0 v10 q-18 8 -36 0z" fill="${o}"/>
        <path d="M${c} ${l+12} v${ae-l-12}" stroke="${B(n,-.45)}" stroke-width="3"/>
        <path d="M${c-i+2} ${Q+14} C${c-i+10} ${Q+56} ${c-i+8} ${Q+86} ${c-i+4} ${Q+104}"
              stroke="${t}" stroke-width="5" fill="none"/>
        <path d="M${c+i-2} ${Q+14} C${c+i-10} ${Q+56} ${c+i-8} ${Q+86} ${c+i-4} ${Q+104}"
              stroke="${t}" stroke-width="5" fill="none"/>
        <path d="M${c-34} ${l+40} h22" stroke="#ffffff" stroke-width="3.4" opacity="0.85"/>`;case"blouse":return`
        <path d="M${c-20} ${l+2} q20 24 40 0 q-4 16 -20 16 q-16 0 -20 -16z" fill="#f8f3e9"/>
        <path d="M${c-20} ${l+2} q20 24 40 0" stroke="${o}" stroke-width="2.6" fill="none"/>
        <g transform="translate(${c} ${l+22})">
          <path d="M0 0 l-12 -6 v12 z" fill="${t}"/>
          <path d="M0 0 l12 -6 v12 z" fill="${t}"/>
          <circle r="3.6" fill="${B(t,-.25)}"/>
        </g>
        ${[60,92,124].map(d=>`<circle cx="${c}" cy="${l+d}" r="2.4" fill="${s}"/>`).join("")}`;case"knit":return`
        <path d="M${c-22} ${l-4} q22 26 44 0 v14 q-22 22 -44 0z" fill="${s}"/>
        ${[0,1,2,3,4,5].map(d=>`<path d="M${c-22+d*9} ${l-2} q3 12 0 24" stroke="${o}" stroke-width="1.6" fill="none" opacity="0.6"/>`).join("")}
        <path d="M${c-12} ${l+46} q12 18 0 36 q-12 18 0 36" stroke="${o}" stroke-width="2.4" fill="none" opacity="0.5"/>
        <path d="M${c+12} ${l+46} q-12 18 0 36 q12 18 0 36" stroke="${o}" stroke-width="2.4" fill="none" opacity="0.5"/>
        <path d="M${c-i+4} ${Q+96} q14 10 26 2" stroke="${o}" stroke-width="6" fill="none"/>
        <path d="M${c+i-4} ${Q+96} q-14 10 -26 2" stroke="${o}" stroke-width="6" fill="none"/>`;case"suit":{const d=B(n,-.3);return`
        <path d="M${c-16} ${l} L${c} ${l+30} L${c+16} ${l} L${c+12} ${l+88} L${c-12} ${l+88} Z" fill="#f6f1e6"/>
        <path d="M${c-23} ${l-2} L${c-3} ${l+38} L${c-29} ${l+80} L${c-41} ${l+18} Z" fill="${d}"/>
        <path d="M${c+23} ${l-2} L${c+3} ${l+38} L${c+29} ${l+80} L${c+41} ${l+18} Z" fill="${d}"/>
        <path d="M${c-23} ${l-2} L${c-3} ${l+38} M${c+23} ${l-2} L${c+3} ${l+38}"
              stroke="${s}" stroke-width="2"/>
        <g transform="translate(${c} ${l+26})">
          <path d="M0 0 l-12 -7 v14 z" fill="${t}"/>
          <path d="M0 0 l12 -7 v14 z" fill="${t}"/>
          <circle r="3.6" fill="${B(t,-.3)}"/>
        </g>
        <circle cx="${c-1}" cy="${l+104}" r="3" fill="${s}"/>`}case"dress":return`
        <path d="M${c-24} ${l+4} q24 22 48 0 v8 q-24 20 -48 0z" fill="${s}"/>
        <path d="M${c-24} ${l+4} q24 22 48 0" stroke="${o}" stroke-width="2.4" fill="none"/>
        <path d="M${c-i*.92} ${l+104} h${i*1.84}" stroke="${t}" stroke-width="9"/>
        <path d="M${c-i*.9} ${l+120} q${i*.9} 12 ${i*1.8} 0" stroke="${s}" stroke-width="2.4" fill="none" opacity="0.7"/>
        <g transform="translate(${c+26} ${l+108})">
          <path d="M0 0 l-11 -6 v12 z" fill="${B(t,.25)}"/>
          <path d="M0 0 l11 -6 v12 z" fill="${B(t,.25)}"/>
        </g>`;case"cardigan":return`
        <path d="M${c-20} ${l+2} L${c} ${l+30} L${c+20} ${l+2} L${c+16} ${ae} L${c-16} ${ae} Z" fill="#efe6d6"/>
        <path d="M${c-20} ${l+2} L${c-2} ${l+34} L${c-10} ${ae} L${c-30} ${ae} Z" fill="${o}"/>
        <path d="M${c+20} ${l+2} L${c+2} ${l+34} L${c+10} ${ae} L${c+30} ${ae} Z" fill="${o}"/>
        ${[52,84,116,148].map(d=>`<circle cx="${c-14}" cy="${l+d}" r="2.8" fill="${t}"/>`).join("")}
        <path d="M${c-i+4} ${Q+100} q14 10 26 2" stroke="${o}" stroke-width="6" fill="none"/>
        <path d="M${c+i-4} ${Q+100} q-14 10 -26 2" stroke="${o}" stroke-width="6" fill="none"/>`;case"coat":return`
        <path d="M${c-18} ${l+2} L${c} ${l+30} L${c+18} ${l+2}" fill="${B(r,-.08)}"/>
        <path d="M${c-26} ${l-4} L${c-2} ${l+36} L${c-34} ${l+84} L${c-46} ${l+16} Z" fill="${s}"/>
        <path d="M${c+26} ${l-4} L${c+2} ${l+36} L${c+34} ${l+84} L${c+46} ${l+16} Z" fill="${s}"/>
        <path d="M${c} ${l+36} v${ae-l-36}" stroke="${B(n,-.4)}" stroke-width="2.2"/>
        <path d="M${c-i*.94} ${l+110} h${i*1.88}" stroke="${B(n,-.38)}" stroke-width="10"/>
        <rect x="${c-9}" y="${l+104}" width="18" height="16" rx="3" fill="${t}"/>
        ${[[c-13,l+62],[c+13,l+62],[c-13,l+88],[c+13,l+88]].map(([d,f])=>`<circle cx="${d}" cy="${f}" r="3.2" fill="${B(n,-.45)}"/>`).join("")}`;default:return`
        <path d="M${c-30} ${l+4} L${c} ${l+40} L${c+30} ${l+4}
                 L${c+34} ${l+14} L${c} ${l+54} L${c-34} ${l+14} Z" fill="#fbf6ec"/>
        <path d="M${c-30} ${l+4} L${c} ${l+40} L${c+30} ${l+4}" stroke="${o}" stroke-width="2" fill="none"/>
        <path d="M${c-34} ${l+14} L${c} ${l+54} L${c+20} ${l+32} L${c+26} ${l+62} L${c-30} ${l+62} Z" fill="${n}"/>
        <path d="M${c-i} ${l+70} q${i} 16 ${i*2} 0" stroke="${t}" stroke-width="9" fill="none"/>
        <g transform="translate(${c+10} ${l+60})">
          <path d="M0 0 l-14 -8 v16 z" fill="${t}"/>
          <path d="M0 0 l14 -8 v16 z" fill="${t}"/>
          <path d="M-3 6 C-8 40 -4 70 -9 ${ae-l-60}" stroke="${t}" stroke-width="7" fill="none" stroke-linecap="round"/>
          <path d="M6 6 C12 44 8 76 14 ${ae-l-60}" stroke="${B(t,.18)}" stroke-width="7" fill="none" stroke-linecap="round"/>
        </g>`}}function Sg(e,n,t){const r=n.accent,i=c-(t-5)+2,l=Q+118,o=a=>a.replace(/fill="[^"]*"/g,'fill="#f4ecdc"').replace(/stroke="[^"]*"/g,'stroke="#f4ecdc"'),s=a=>`<g transform="translate(${i} ${l}) scale(1.18)" stroke-linejoin="round">
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
                 <ellipse cx="0" cy="-14" rx="13" ry="4.5" fill="${B(r,.1)}"/>
                 <path d="M-5 -24 q4 -6 0 -11 M5 -24 q4 -6 0 -11" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.4"/>`);case"hwatu":return s(`<g transform="rotate(-8)">
                   <rect x="-14" y="-22" width="28" height="40" rx="3" fill="#2a2119" stroke="#6b5a3e" stroke-width="2"/>
                   <rect x="-9" y="-16" width="18" height="28" rx="2" fill="#7a2a22"/>
                   <circle cx="0" cy="-2" r="6" fill="#d8b24a"/>
                   <path d="M-14 6 h28" stroke="#6b5a3e" stroke-width="2"/>
                 </g>`);default:return""}}function Cg(e){const{tenant:n,expression:t,outfit:r}=e,i=e.width??240,l=e.height??360,o=n.look,s=ag[t],a=ug[o.face],d=a.rx,f=cg[o.build]??65,h=o.skin,g=B(h,-.16),v=o.outfits[r],x=o.wear[r],C=Oo(),N=`M${c-d} ${k-14}
    C${c-d} ${M+2} ${c-d*.6} ${M-2} ${c} ${M-2}
    C${c+d*.6} ${M-2} ${c+d} ${M+2} ${c+d} ${k-14}
    C${c+d} ${k+a.jaw} ${c+a.cheek} ${Wn-7} ${c} ${Wn}
    C${c-a.cheek} ${Wn-7} ${c-d} ${k+a.jaw} ${c-d} ${k-14} Z`,m=s.blush>0?`<ellipse cx="${c-27}" cy="${k+16}" rx="12" ry="6.5" fill="#ff8496" opacity="${(s.blush*.5).toFixed(2)}"/>
         <ellipse cx="${c+27}" cy="${k+16}" rx="12" ry="6.5" fill="#ff8496" opacity="${(s.blush*.5).toFixed(2)}"/>`:"",p=s.sweat?`<path d="M${c+d-6} ${M+16} q8 12 0 17 q-8 -5 0 -17z" fill="#8ecbff" opacity="0.92"/>`:"",y=s.tear?`<path d="M${c-_n-6} ${k+6} q-3 14 1 22" stroke="#8ecbff" stroke-width="3.2" fill="none" stroke-linecap="round"/>
       <circle cx="${c-_n-5}" cy="${k+30}" r="3.2" fill="#8ecbff" opacity="0.9"/>`:"";return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 360" width="${i}" height="${l}" role="img" aria-label="${n.name} ${cf[t]}">
  <defs>
    <radialGradient id="${C}s" cx="0.4" cy="0.32" r="0.75">
      <stop offset="0" stop-color="${B(h,.1)}"/>
      <stop offset="1" stop-color="${g}"/>
    </radialGradient>
    <linearGradient id="${C}c" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${B(v,.12)}"/>
      <stop offset="1" stop-color="${B(v,-.18)}"/>
    </linearGradient>
  </defs>

  ${gg(o,f)}

  <g>
    ${kg(f,B(v,-.2),h)}
    <path d="${$g(f)}" fill="url(#${C}c)"/>
    <path d="M${c-13} ${Wn-12} h26 v30 h-26z" fill="${h}"/>
    <path d="M${c-13} ${Wn-12} h26 v13 q-13 8 -26 0z" fill="${g}" opacity="0.55"/>
    ${xg(x,v,o.accent,h,f)}
  </g>

  <g transform="rotate(${s.tilt} ${c} ${Wn})">
    <clipPath id="${C}f"><path d="${N}"/></clipPath>
    <path d="${N}" fill="url(#${C}s)"/>
    <ellipse cx="${c-d+1}" cy="${k+2}" rx="5" ry="8" fill="${B(h,-.06)}"/>
    <ellipse cx="${c+d-1}" cy="${k+2}" rx="5" ry="8" fill="${B(h,-.06)}"/>
    <g clip-path="url(#${C}f)">
      <ellipse cx="${c}" cy="${k-34}" rx="${d+6}" ry="20" fill="${g}" opacity="0.3"/>
      <ellipse cx="${c}" cy="${Wn+16}" rx="${a.cheek+6}" ry="12" fill="${g}" opacity="0.22"/>
    </g>
    ${vg(o,d)}
    ${mg(o,d)}
    ${yg(o.bangs,o,d)}
    ${hg(s,B(o.hair,-.25))}
    ${fg(s,o.eyes,sg(o))}
    <path d="M${c-3} ${k+19} q3.5 3.5 7 0" stroke="${B(h,-.32)}" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.75"/>
    ${m}
    ${pg(s)}
    ${wg(o.accessory,o,d)}
    ${p}
    ${y}
  </g>

  ${Sg(o.propArt,o,f)}
</svg>`}function Fo(e){return`data:image/svg+xml;utf8,${encodeURIComponent(Cg(e))}`}const bg={maru:"하숙집 마루",kitchen:"부엌",hallway:"복도 / 방 앞",rooftop:"옥상",yard:"마당 / 대문",cvs:"동네 편의점 앞",campus:"캠퍼스 벤치",street:"골목길",room:"내 방",annex:"별채",festival:"가을 축제",station:"지하철역 앞",beach:"집 앞 바닷가"},jg={morning:{sky:["#cfe6f7","#fbe6d0"],ground:"#cbb89a",wall:"#efe3d0",wood:"#c9a16b",light:"#fff3d6",haze:.12},evening:{sky:["#f7c08a","#e0798a"],ground:"#9c8467",wall:"#e2cbb2",wood:"#b58553",light:"#ffd9a0",haze:.18},night:{sky:["#1b2440","#2f3a5c"],ground:"#3b3428",wall:"#4a4237",wood:"#6b4f33",light:"#ffd98a",haze:.34}},G=720,$e=1280;function _g(e){return`
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
  <rect width="${G}" height="${$e}" fill="url(#sky)"/>`}function gt(e){if(e!=="night")return"";let n="";for(let t=0;t<40;t++){const r=t*137%G+7,i=t*61%380+20,l=t%3*.6+.8;n+=`<circle cx="${r}" cy="${i}" r="${l}" fill="#fff" opacity="${.3+t%5*.12}"/>`}return n}function ui(e,n){let t=`<rect x="0" y="${n}" width="${G}" height="${$e-n}" fill="${e.wood}"/>`;for(let r=0;r<=8;r++){const i=G/8*r;t+=`<path d="M${i} ${n} L${i*.75+90} ${$e}" stroke="#00000022" stroke-width="3"/>`}return t+=`<rect x="0" y="${n}" width="${G}" height="10" fill="#00000033"/>`,t}function mt(e,n){const t=/^#?([0-9a-f]{6})$/i.exec(e);if(!t)return e;const r=parseInt(t[1],16),i=n>0?255:0,l=Math.abs(n);return`#${[r>>16&255,r>>8&255,r&255].map(s=>Math.round(s+(i-s)*l)).map(s=>s.toString(16).padStart(2,"0")).join("")}`}function hu(e,n,t){const r=n==="night"?"#16233d":n==="evening"?"#3f5f84":"#5f95c4",i=n==="night"?"#0f1a2e":n==="evening"?"#2f4867":"#4a7fb0",l=n==="night"?e.light:"#ffffff";let o=`<rect x="0" y="${t}" width="${G}" height="${880-t}" fill="${r}"/>
             <rect x="0" y="${t+(880-t)*.55}" width="${G}" height="${(880-t)*.45}" fill="${i}"/>
             <rect x="0" y="${t-3}" width="${G}" height="6" fill="${l}" opacity="0.28"/>`;for(let s=0;s<16;s+=1){const a=t+24+s*((880-t-24)/16),d=s*157%(G-180)+40,f=60+s%4*34;o+=`<path d="M${d} ${a} h${f}" stroke="${l}" stroke-width="3" opacity="${(.05+s%3*.045).toFixed(2)}"/>`}return o}function Ng(e,n,t){switch(e){case"maru":return`
        <rect x="0" y="380" width="${G}" height="360" fill="${n.wall}"/>
        <rect x="60" y="420" width="220" height="280" rx="6" fill="#00000018" stroke="${n.wood}" stroke-width="8"/>
        <rect x="440" y="420" width="220" height="280" rx="6" fill="#00000018" stroke="${n.wood}" stroke-width="8"/>
        <circle cx="360" cy="330" r="46" fill="${n.light}" opacity="0.9"/>
        <rect x="356" y="180" width="8" height="110" fill="#00000055"/>
        <ellipse cx="360" cy="360" rx="300" ry="120" fill="url(#lamp)"/>
        ${ui(n,740)}
        <ellipse cx="250" cy="980" rx="120" ry="42" fill="#b5493f" opacity="0.85"/>
        <ellipse cx="480" cy="1050" rx="120" ry="42" fill="#3f6bb5" opacity="0.85"/>`;case"kitchen":return`
        <rect x="0" y="300" width="${G}" height="480" fill="${n.wall}"/>
        <rect x="40" y="620" width="640" height="140" rx="10" fill="#cfd6d8"/>
        <rect x="90" y="640" width="180" height="90" rx="8" fill="#8d979c"/>
        <circle cx="430" cy="686" r="34" fill="#4a4f52"/>
        <circle cx="530" cy="686" r="34" fill="#4a4f52"/>
        <rect x="120" y="380" width="480" height="18" rx="6" fill="${n.wood}"/>
        <rect x="180" y="398" width="24" height="70" fill="#9aa3a8"/>
        <rect x="260" y="398" width="24" height="90" fill="#9aa3a8"/>
        <rect x="340" y="398" width="24" height="60" fill="#9aa3a8"/>
        ${ui(n,780)}`;case"hallway":return`
        <rect x="0" y="240" width="${G}" height="600" fill="${n.wall}"/>
        <rect x="60" y="360" width="180" height="440" rx="4" fill="${n.wood}"/>
        <rect x="480" y="360" width="180" height="440" rx="4" fill="${n.wood}"/>
        <circle cx="222" cy="600" r="9" fill="#d8c07a"/>
        <circle cx="498" cy="600" r="9" fill="#d8c07a"/>
        <rect x="120" y="400" width="60" height="34" rx="4" fill="#ffffff" opacity="0.7"/>
        <rect x="540" y="400" width="60" height="34" rx="4" fill="#ffffff" opacity="0.7"/>
        <ellipse cx="360" cy="300" rx="240" ry="120" fill="url(#lamp)"/>
        ${ui(n,840)}`;case"rooftop":return`
        ${gt(t)}
        <rect x="0" y="700" width="${G}" height="${$e-700}" fill="${n.ground}"/>
        <rect x="0" y="660" width="${G}" height="50" fill="${n.wall}"/>
        <rect x="0" y="640" width="${G}" height="24" fill="#8f9aa3"/>
        <path d="M60 640 v-90 M200 640 v-90 M340 640 v-90 M480 640 v-90 M620 640 v-90" stroke="#8f9aa3" stroke-width="7"/>
        <path d="M40 560 h640" stroke="#b9c3ca" stroke-width="6"/>
        <rect x="90" y="520" width="90" height="42" rx="6" fill="#dfe6ea" opacity="0.85"/>
        <rect x="240" y="516" width="70" height="48" rx="6" fill="#e8d7c2" opacity="0.85"/>
        <rect x="520" y="700" width="120" height="180" rx="8" fill="${n.wall}"/>`;case"yard":return`
        ${gt(t)}
        ${hu(n,t,560)}
        <rect x="0" y="840" width="${G}" height="${$e-840}" fill="${n.ground}"/>
        <path d="M0 840 h${G} v40 h-${G}z" fill="#00000022"/>
        <rect x="150" y="330" width="440" height="230" fill="${n.wall}"/>
        <rect x="150" y="560" width="440" height="280" fill="${mt(n.wall,-.1)}"/>
        <path d="M120 330 L370 190 L620 330 Z" fill="${mt(n.wood,-.25)}"/>
        <path d="M120 330 h500 v22 h-500z" fill="${mt(n.wood,-.4)}"/>
        <rect x="200" y="390" width="90" height="100" rx="4" fill="${n.light}" opacity="${t==="night"?.85:.45}"/>
        <rect x="450" y="390" width="90" height="100" rx="4" fill="${n.light}" opacity="${t==="night"?.55:.4}"/>
        <path d="M245 390 v100 M200 440 h90 M495 390 v100 M450 440 h90" stroke="${mt(n.wood,-.3)}" stroke-width="5"/>
        <rect x="140" y="548" width="460" height="18" fill="${n.wood}"/>
        <rect x="330" y="620" width="120" height="220" rx="4" fill="${n.wood}"/>
        <circle cx="425" cy="740" r="9" fill="#d8c07a"/>
        <rect x="170" y="640" width="110" height="110" rx="4" fill="${n.light}" opacity="${t==="night"?.8:.4}"/>
        <rect x="120" y="828" width="520" height="16" fill="${n.wood}"/>
        <path d="M130 844 v36 M250 844 v36 M370 844 v36 M490 844 v36 M630 844 v36" stroke="${mt(n.wood,-.3)}" stroke-width="9"/>
        <rect x="300" y="570" width="180" height="42" rx="6" fill="#5a4432"/>
        <text x="390" y="602" font-size="26" text-anchor="middle" fill="#f0e2c8" font-family="serif">하숙</text>
        <path d="M640 840 q18 -120 6 -190 q30 40 44 -10 q10 70 -6 200z" fill="#4a6b3f" opacity="0.85"/>
        <circle cx="80" cy="760" r="58" fill="#4a6b3f" opacity="0.8"/>
        <rect x="72" y="760" width="16" height="90" fill="#5b4330"/>`;case"cvs":return`
        <rect x="0" y="760" width="${G}" height="${$e-760}" fill="#6b6b6b"/>
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
        <rect x="0" y="700" width="${G}" height="${$e-700}" fill="#5d7a4a"/>
        <rect x="0" y="380" width="${G}" height="330" fill="#8a9c76" opacity="0.5"/>
        <rect x="80" y="300" width="200" height="400" fill="${n.wall}" opacity="0.9"/>
        <rect x="440" y="340" width="200" height="360" fill="${n.wall}" opacity="0.9"/>
        <circle cx="360" cy="520" r="130" fill="#7a4f2a" opacity="0.15"/>
        <circle cx="360" cy="480" r="120" fill="#c9793a" opacity="0.85"/>
        <rect x="350" y="560" width="22" height="150" fill="#5b4330"/>
        <rect x="200" y="840" width="320" height="18" rx="6" fill="${n.wood}"/>
        <rect x="200" y="858" width="320" height="14" rx="4" fill="${n.wood}" opacity="0.8"/>
        <rect x="214" y="872" width="14" height="60" fill="#5a5a5a"/>
        <rect x="492" y="872" width="14" height="60" fill="#5a5a5a"/>`;case"street":return`
        ${gt(t)}
        <rect x="0" y="780" width="${G}" height="${$e-780}" fill="#55524c"/>
        <rect x="0" y="360" width="280" height="430" fill="${n.wall}"/>
        <rect x="440" y="320" width="280" height="470" fill="${n.wall}" opacity="0.92"/>
        <rect x="60" y="440" width="70" height="90" fill="#cfe4f2" opacity="0.7"/>
        <rect x="170" y="440" width="70" height="90" fill="#cfe4f2" opacity="0.5"/>
        <rect x="500" y="420" width="70" height="90" fill="#cfe4f2" opacity="0.7"/>
        <rect x="352" y="420" width="16" height="360" fill="#3f3f3f"/>
        <circle cx="360" cy="410" r="30" fill="${n.light}" opacity="0.95"/>
        <ellipse cx="360" cy="470" rx="200" ry="150" fill="url(#lamp)"/>`;case"room":return`
        <rect x="0" y="260" width="${G}" height="560" fill="${n.wall}"/>
        <rect x="80" y="330" width="240" height="200" rx="6" fill="#6f8fb0" opacity="0.6" stroke="${n.wood}" stroke-width="10"/>
        <rect x="420" y="360" width="230" height="170" rx="6" fill="${n.wood}"/>
        <rect x="440" y="382" width="190" height="16" fill="#00000022"/>
        <rect x="440" y="416" width="190" height="16" fill="#00000022"/>
        <rect x="440" y="450" width="190" height="16" fill="#00000022"/>
        <rect x="120" y="640" width="280" height="140" rx="10" fill="#d8cdbb"/>
        <rect x="140" y="600" width="120" height="50" rx="10" fill="#f0e8db"/>
        ${ui(n,820)}`;case"annex":return`
        ${gt(t)}
        <rect x="0" y="760" width="${G}" height="${$e-760}" fill="${n.ground}"/>
        <rect x="140" y="400" width="440" height="370" fill="${n.wall}"/>
        <path d="M110 400 L360 270 L610 400z" fill="#4a3a2c"/>
        <rect x="230" y="500" width="260" height="200" rx="4" fill="${n.light}" opacity="0.5" stroke="${n.wood}" stroke-width="10"/>
        <path d="M360 500 v200 M230 600 h260" stroke="${n.wood}" stroke-width="8"/>
        <ellipse cx="360" cy="600" rx="260" ry="200" fill="url(#lamp)"/>`;case"festival":return`
        ${gt(t)}
        <rect x="0" y="780" width="${G}" height="${$e-780}" fill="#4a4a48"/>
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
        <rect x="0" y="800" width="${G}" height="${$e-800}" fill="#59575a"/>
        <rect x="0" y="300" width="${G}" height="500" fill="${n.wall}" opacity="0.9"/>
        <rect x="200" y="420" width="320" height="380" rx="8" fill="#2f3a44"/>
        <rect x="230" y="450" width="260" height="60" rx="6" fill="#2f7fbd"/>
        <text x="360" y="494" font-size="34" text-anchor="middle" fill="#ffffff" font-family="sans-serif">역</text>
        <path d="M240 540 h240 M240 600 h240 M240 660 h240" stroke="#59646e" stroke-width="10"/>
        <rect x="60" y="640" width="14" height="160" fill="#3f3f3f"/>
        <circle cx="67" cy="630" r="24" fill="${n.light}" opacity="0.9"/>
        <rect x="646" y="640" width="14" height="160" fill="#3f3f3f"/>
        <circle cx="653" cy="630" r="24" fill="${n.light}" opacity="0.9"/>`;case"beach":return`
        ${gt(t)}
        ${hu(n,t,470)}
        <rect x="0" y="790" width="${G}" height="${$e-790}" fill="${mt(n.ground,.18)}"/>
        <path d="M0 790 q180 26 360 0 q180 -26 360 0 v26 q-180 26 -360 0 q-180 -26 -360 0z" fill="#ffffff" opacity="0.5"/>
        <path d="M0 872 q180 22 360 0 q180 -22 360 0" stroke="#ffffff" stroke-width="5" fill="none" opacity="0.3"/>
        <rect x="70" y="560" width="230" height="16" rx="6" fill="#6f6a63" opacity="0.8"/>
        <rect x="286" y="516" width="22" height="62" fill="#e8e2d6"/>
        <rect x="284" y="500" width="26" height="18" rx="4" fill="#c4463c"/>
        <circle cx="297" cy="509" r="5" fill="${n.light}" opacity="0.95"/>
        <path d="M520 820 l24 -54 l24 54z" fill="#5b4330" opacity="0.7"/>
        <path d="M120 960 l40 -16 l40 16 l-40 14z" fill="#6f6a63" opacity="0.55"/>`}}function Eg(e,n){const t=jg[n];return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${G} ${$e}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${bg[e]} ${n}">
  ${_g(t)}
  ${Ng(e,t,n)}
  <rect width="${G}" height="${$e}" fill="#0a0d18" opacity="${t.haze}"/>
</svg>`}function Mg(e,n){return`data:image/svg+xml;utf8,${encodeURIComponent(Eg(e,n))}`}let pl="classic";function Pg(e){pl=e}function Lg(e){return Qi(e,{skin:pl})}function Tn({tenant:e,expression:n="normal",outfit:t=0,className:r,style:i}){const l=Fo({tenant:e,expression:n,outfit:t}),o=l;return u.jsx("img",{className:r,style:i,src:o,alt:`${e.name} (${n})`,onError:s=>{const a=s.currentTarget;a.src!==l&&(a.src=l)},draggable:!1})}function gl({bg:e,time:n}){return u.jsx("div",{className:"bg-layer",style:{backgroundImage:`url("${Mg(e,n)}")`}})}function pu({card:e,small:n,selectable:t,chosen:r,onClick:i}){const l=["card",n?"sm":"",t?"selectable":"",r?"chosen":""].filter(Boolean).join(" ");return u.jsx("img",{className:l,src:Qi(e,{skin:pl}),alt:e.name,onClick:t?i:void 0,draggable:!1})}function gu({small:e}){return u.jsx("img",{className:`card ${e?"sm":""}`,src:p0({skin:pl}),alt:"뒷면",draggable:!1})}function mu({value:e,max:n,kind:t}){const r=Math.max(0,Math.min(100,e/n*100));return u.jsx("div",{className:`meter ${t??""}`,children:u.jsx("i",{style:{width:`${r}%`}})})}function yu({on:e,onToggle:n}){return u.jsx("button",{className:`switch ${e?"on":""}`,onClick:n,"aria-pressed":e,children:u.jsx("i",{})})}function zg(){const e=new Date().getHours();return e<11?"morning":e<18?"evening":"night"}const df={spring:"봄",summer:"여름",autumn:"가을",winter:"겨울"},Dg=[["matchStart","승부 시작"],["go","고"],["stop","스톱"],["ppeok","뻑"],["sseulVictim","쓸 당함"],["win","승리"],["lose","패배"],["affection","호감 이벤트"]];function Ig({data:e,onBack:n}){const[t,r]=P.useState("profile"),[i,l]=P.useState(tn[0]),o=e.tenants[i.id],s=(o?.clearedStage??0)>0||(o?.wins??0)>0;return u.jsx("div",{className:"screen",style:{background:"var(--wood-dark)"},children:u.jsxs("div",{className:"layer",children:[u.jsxs("div",{className:"topbar",children:[u.jsx("button",{className:"iconbtn",onClick:n,"aria-label":"뒤로",children:"←"}),u.jsx("h1",{children:"도감"})]}),u.jsxs("div",{className:"tabs",children:[u.jsx("button",{className:t==="profile"?"active":"",onClick:()=>r("profile"),children:"프로필"}),u.jsx("button",{className:t==="cg"?"active":"",onClick:()=>r("cg"),children:"CG"}),u.jsx("button",{className:t==="lines"?"active":"",onClick:()=>r("lines"),children:"대사"})]}),u.jsx("div",{style:{display:"flex",gap:6,overflowX:"auto",padding:"8px 12px"},children:tn.map(a=>u.jsx("button",{className:"btn",style:{padding:"6px 10px",fontSize:12,flex:"0 0 auto",filter:i.id===a.id?"none":"brightness(0.7)"},onClick:()=>l(a),children:a.name},a.id))}),u.jsxs("div",{className:"panel",children:[t==="profile"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"section",style:{display:"flex",gap:12},children:[u.jsx(Tn,{tenant:i,expression:"normal",outfit:0,style:{width:96}}),u.jsxs("div",{style:{flex:1,fontSize:13,lineHeight:1.7},children:[u.jsxs("div",{style:{fontSize:18,fontWeight:800},children:[i.name," ",u.jsxs("small",{style:{fontSize:12},children:["“",i.nickname,"”"]})]}),u.jsxs("div",{style:{color:"var(--paper-dim)"},children:[i.age,"세 · ",i.job,u.jsx("br",{}),i.room," · ",df[i.season],u.jsx("br",{}),i.personality.join(" / ")]})]})]}),u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"이 집에 온 이유"}),u.jsx("div",{style:{fontSize:13,lineHeight:1.7,color:"var(--paper)"},children:i.backstory})]}),u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"맞고 스타일"}),u.jsx("div",{style:{fontSize:13,lineHeight:1.6},children:i.styleLabel}),u.jsxs("div",{className:"row",children:[u.jsx("span",{children:"전적"}),u.jsxs("span",{children:[o?.wins??0,"승 ",o?.losses??0,"패"]})]}),u.jsxs("div",{className:"row",children:[u.jsx("span",{children:"호감도"}),u.jsxs("span",{children:[o?.affection??0," / 100"]})]}),u.jsxs("div",{className:"row",children:[u.jsx("span",{children:"클리어 단계"}),u.jsxs("span",{children:[o?.clearedStage??0," / 10"]})]})]}),u.jsxs("div",{className:"section",children:[u.jsxs("h3",{children:["표정 ",uu.length,"종"]}),u.jsx("div",{className:"expr-grid",children:uu.map(a=>u.jsxs("figure",{children:[u.jsx("img",{src:Fo({tenant:i,expression:a,outfit:0}),alt:a}),u.jsx("figcaption",{children:cf[a]})]},a))})]}),u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"의상 3종"}),u.jsx("div",{className:"expr-grid",style:{gridTemplateColumns:"repeat(3, 1fr)"},children:[0,1,2].map(a=>u.jsxs("figure",{children:[u.jsx("img",{src:Fo({tenant:i,expression:"smile",outfit:a}),alt:`의상 ${a}`}),u.jsx("figcaption",{children:["평상복","외출복","특별 이벤트복"][a]})]},a))})]})]}),t==="cg"&&u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"해금 CG"}),u.jsxs("div",{className:"cg-grid",children:[tn.map(a=>{const d=`${a.id}_ending`,f=e.unlockedCG.includes(d);return u.jsx("div",{className:`cg-cell ${f?"unlocked":""}`,children:f?u.jsxs("div",{children:[u.jsx("div",{style:{fontWeight:800,fontSize:13},children:a.name}),u.jsx("div",{style:{fontSize:10,opacity:.75,marginTop:4},children:a.events[9].title})]}):u.jsx("span",{children:"🔒 10단계 클리어"})},a.id)}),u.jsx("div",{className:`cg-cell ${e.unlockedCG.includes("ending_group")?"unlocked":""}`,children:e.unlockedCG.includes("ending_group")?u.jsxs("div",{children:[u.jsx("div",{style:{fontWeight:800,fontSize:13},children:"마루의 단체 사진"}),u.jsx("div",{style:{fontSize:10,opacity:.75,marginTop:4},children:"히든 엔딩"})]}):u.jsx("span",{children:"🔒 전원 10단계"})})]})]}),t==="lines"&&u.jsxs(u.Fragment,{children:[!s&&u.jsxs("div",{className:"empty",children:[i.name,"와(과) 아직 승부한 적이 없습니다.",u.jsx("br",{}),"한 판 이상 치르면 대사가 열립니다."]}),s&&Dg.map(([a,d])=>u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:d}),["low","mid","high"].map(f=>{const h=f==="low"||f==="mid"&&(o?.affection??0)>30||f==="high"&&(o?.affection??0)>70;return u.jsxs("div",{style:{marginBottom:8},children:[u.jsx("div",{style:{fontSize:11,color:"var(--lamp-dim)",marginBottom:3},children:{low:"호감 0~30",mid:"호감 31~70",high:"호감 71~100"}[f]}),h?i.lines[a][f].map((g,v)=>u.jsxs("div",{style:{fontSize:12.5,lineHeight:1.6,opacity:.9},children:["· ",g]},v)):u.jsx("div",{style:{fontSize:12,color:"var(--paper-dim)"},children:"🔒 호감도가 더 필요합니다"})]},f)})]},a))]})]})]})})}function Tg({data:e,onPick:n,onGallery:t,onShop:r,onSettings:i,onHidden:l,onAllowance:o,allClearedFlag:s}){const a=of(e),d=zg();return u.jsxs("div",{className:"screen",children:[u.jsx(gl,{bg:"maru",time:d}),u.jsxs("div",{className:"layer",children:[u.jsxs("div",{className:"topbar",children:[u.jsx("h1",{children:"하숙집 마루"}),u.jsxs("span",{className:"points",children:[e.points.toLocaleString()," P"]}),u.jsx("button",{className:"iconbtn",onClick:r,"aria-label":"상점",children:"🏮"}),u.jsx("button",{className:"iconbtn",onClick:t,"aria-label":"도감",children:"📖"}),u.jsx("button",{className:"iconbtn",onClick:i,"aria-label":"설정",children:"⚙"})]}),sf(e)&&u.jsxs("div",{className:"hint-box",children:["포인트가 모자라 승부를 걸 수 없습니다. 포인트는 승부로만 버는 터라 이대로는 진행이 막힙니다.",u.jsxs("button",{className:"btn primary wide",style:{marginTop:10,fontSize:14},onClick:o,children:["할머니 비상금 봉투 찾기 (+",af,"P)"]})]}),s&&u.jsxs("div",{className:"hint-box",style:{cursor:"pointer"},onClick:l,children:["전원 10단계 클리어! ",u.jsx("strong",{children:"마루의 단체 사진"}),"을 보러 가기 ▸"]}),u.jsx("div",{className:"tenant-list",children:tn.map(f=>{const h=e.tenants[f.id]??{affection:0,clearedStage:0,dating:!1},g=xi(f,a),v=Math.min(10,h.clearedStage+1),x=h.clearedStage>=10,C=nf(f),N=e.points>=C;return u.jsxs("button",{className:`tenant-card ${g?"":"locked"}`,onClick:()=>g&&n(f),disabled:!g,children:[u.jsx(Tn,{tenant:f,expression:x?"smile":"normal",outfit:x?2:0}),u.jsxs("div",{className:"tenant-meta",children:[u.jsxs("div",{className:"tenant-name",children:[f.name,u.jsxs("small",{children:[f.nickname," · ",f.age,"세 · ",f.room]}),u.jsx("span",{className:"badge season",children:df[f.season]}),h.dating&&u.jsx("span",{className:"badge",children:"연애중"})]}),u.jsx("div",{className:"tenant-style",children:f.styleLabel}),g?u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"meter-row",children:[u.jsx("span",{style:{width:30},children:"호감"}),u.jsx(mu,{value:h.affection,max:100}),u.jsx("span",{style:{width:28,textAlign:"right"},children:h.affection})]}),u.jsxs("div",{className:"meter-row",children:[u.jsx("span",{style:{width:30},children:"단계"}),u.jsx(mu,{value:h.clearedStage,max:10,kind:"stage"}),u.jsxs("span",{style:{width:28,textAlign:"right"},children:[h.clearedStage,"/10"]})]}),u.jsx("div",{style:{fontSize:10.5,color:"var(--paper-dim)",marginTop:4},children:x?u.jsx(u.Fragment,{children:"모든 단계 클리어 · 커플 모드로 다시 승부"}):u.jsxs(u.Fragment,{children:[v,"단계 · 점당 ",u.jsxs("b",{style:{color:"var(--lamp)"},children:[f.rate,"P"]})," · 클리어 보너스 ",ef(f,v),"P",u.jsx("br",{}),u.jsx("span",{style:{color:N?"var(--paper-dim)":"var(--accent)"},children:N?`최소 ${C.toLocaleString()}P 필요`:`${C.toLocaleString()}P 부족`})]})})]}):u.jsxs("div",{style:{fontSize:11,color:"var(--paper-dim)"},children:["🔒 ",C0(f)]})]})]},f.id)})})]})]})}function ff(e){let n=e>>>0;const t=()=>{n|=0,n=n+1831565813|0;let i=Math.imul(n^n>>>15,1|n);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296};return{next:t,int:i=>Math.floor(t()*i),pick:i=>i[Math.floor(t()*i.length)],shuffle:i=>{const l=[...i];for(let o=l.length-1;o>0;o--){const s=Math.floor(t()*(o+1));[l[o],l[s]]=[l[s],l[o]]}return l}}}function Ag(){return(Date.now()^Math.floor(Math.random()*4294967295))>>>0}function hf(e,n){const t={gwang:[],yeol:[],tti:[],pi:[]};for(const r of e){if(r.isGukjin&&n){t.pi.push(r);continue}switch(r.kind){case"gwang":t.gwang.push(r);break;case"yeol":t.yeol.push(r);break;case"tti":t.tti.push(r);break;case"pi":t.pi.push(r);break}}return t}function pf(e,n){return e.reduce((t,r)=>r.isGukjin?t+(n?2:0):t+(r.piValue??1),0)}function Bg(e,n){const t=e.length;return t>=5?{score:15,label:"오광"}:t===4?{score:4,label:"사광"}:t===3?e.some(i=>i.isBiGwang)&&n.biGwangPenalty?{score:2,label:"비삼광"}:{score:3,label:"삼광"}:{score:0,label:null}}function Rg(e,n){const t=[];let r=0;const i=e.filter(a=>a.tti==="hong").length,l=e.filter(a=>a.tti==="cheong").length,o=e.filter(a=>a.tti==="cho").length;i>=3&&(r+=3,t.push("홍단")),l>=3&&(r+=3,t.push("청단")),o>=3&&(r+=3,t.push("초단"));const s=e.length;return n.ttiScoring==="standard"?s>=5&&(r+=s-4,t.push(`띠 ${s}장`)):s>=5&&(r+=5+(s-5),t.push(`띠 ${s}장`)),{score:r,labels:t}}function Og(e){const n=[];let t=0;e.filter(l=>l.isGodori).length>=3&&(t+=5,n.push("고도리"));const i=e.length;return i>=5&&(t+=i-4,n.push(`열끗 ${i}장`)),{score:t,labels:n}}function Fg(e,n){const t=pf(e,n);return{score:t>=10?t-9:0,count:t}}function Ug(e){const n=new Map;for(const t of e)t.month!==0&&n.set(t.month,(n.get(t.month)??0)+1);for(const[t,r]of n)if(r>=4)return t;return null}function gf(e){const n=new Map;for(const t of e)t.month!==0&&n.set(t.month,(n.get(t.month)??0)+1);return[...n.entries()].filter(([,t])=>t===3).map(([t])=>t)}function On(e,n){const t=n.gukjinOption&&e.gukjinUse==="ssangpi",r=hf([...e.captured.gwang,...e.captured.yeol,...e.captured.tti,...e.captured.pi],t),i=Bg(r.gwang,n),l=Rg(r.tti,n),o=Og(r.yeol),s=Fg(r.pi,t),a=i.score+l.score+o.score+s.score;return{gwangScore:i.score,gwangLabel:i.label,ttiScore:l.score,ttiLabels:l.labels,yeolScore:o.score,yeolLabels:o.labels,piScore:s.score,piCount:s.count,base:a,chongtong:null}}function Vg(e,n,t,r=1){const i=e[n],l=e[n===0?1:0],o=On(i,t);On(l,t);const s=[];let a=0,d=1;const f=i.goCount;f>=1&&(a+=1),f>=2&&(a+=1),f>=1&&s.push(`${f}고`),t.goMultiplierFrom3&&f>=3&&(d*=Math.pow(2,f-2),s.push(`고 배수 x${Math.pow(2,f-2)}`));let h=o.base+a;const g=t.gukjinOption&&l.gukjinUse==="ssangpi",v=pf(hf([...l.captured.pi],g).pi,g);return t.piBak&&o.piScore>0&&v<=t.piBakThreshold&&(d*=2,s.push("피박")),t.gwangBak&&o.gwangScore>0&&l.captured.gwang.length===0&&(d*=2,s.push("광박")),t.mengBak&&i.captured.yeol.length>=t.mengBakYeolThreshold&&l.captured.yeol.length===0&&(d*=2,s.push("멍박")),t.heundeulgi&&i.shaken.length>0&&(d*=Math.pow(2,i.shaken.length),s.push(`흔들기 x${Math.pow(2,i.shaken.length)}`)),t.bomb&&i.bombCount>0&&(d*=Math.pow(2,i.bombCount),s.push(`폭탄 x${Math.pow(2,i.bombCount)}`)),t.goBak&&l.goCount>0&&(d*=2,s.push("고박")),r>1&&(d*=r,s.push(`나가리 x${r}`)),h=h*d,{winner:n,breakdown:o,base:o.base,goCount:f,goBonus:a,multiplier:d,reasons:s,total:h}}function Gg(e,n,t,r=1){return{winner:e,breakdown:null,base:10,goCount:0,goBonus:0,multiplier:r,reasons:[`총통 (${n}월)`],total:10*r}}function mf(){return{winner:null,breakdown:null,base:0,goCount:0,goBonus:0,multiplier:1,reasons:["나가리"],total:0}}const yf={ttiScoring:"standard",biGwangPenalty:!0,goMultiplierFrom3:!0,piBak:!0,gwangBak:!0,mengBak:!0,goBak:!0,heundeulgi:!0,bomb:!0,chongtong:!0,nagariDouble:!0,bonusPiCount:2,bonusPiValue:2,gukjinOption:!0,minScoreToStop:7,mengBakYeolThreshold:7,piBakThreshold:5},vf=e=>e===0?1:0;function wf(e,n){const t=vf(n);e.players[t].hand.length>0?e.turn=t:e.players[n].hand.length>0?e.turn=n:e.turn=t,e.phase="awaitPlay",e.turnCtx=null}function vu(){return{hand:[],captured:{gwang:[],yeol:[],tti:[],pi:[]},goCount:0,shaken:[],bombCount:0,gukjinUse:"yeol",scoreAtLastGo:0}}function wu(e){return{...e,hand:[...e.hand],captured:{gwang:[...e.captured.gwang],yeol:[...e.captured.yeol],tti:[...e.captured.tti],pi:[...e.captured.pi]},shaken:[...e.shaken]}}function Kt(e){return{...e,deck:[...e.deck],field:[...e.field],players:[wu(e.players[0]),wu(e.players[1])],events:[...e.events],ppeokPiles:{...e.ppeokPiles},turnCtx:e.turnCtx?{...e.turnCtx}:null,log:[...e.log]}}function Hg(e,n){for(const t of n){if(t.isGukjin){e.captured.yeol.push(t);continue}switch(t.kind){case"gwang":e.captured.gwang.push(t);break;case"yeol":e.captured.yeol.push(t);break;case"tti":e.captured.tti.push(t);break;case"pi":e.captured.pi.push(t);break}}}function Ht(e,n,t){const r=e.players[vf(n)];if(r.captured.pi.length===0){e.log.push(`P${n} ${t} (상대 피 없음)`);return}const l=[...r.captured.pi].sort((o,s)=>(o.piValue??1)-(s.piValue??1))[0];r.captured.pi=r.captured.pi.filter(o=>o.id!==l.id),e.players[n].captured.pi.push(l),e.events.push({type:"steal",player:n,detail:t}),e.log.push(`P${n} ${t} -> 피 1장 상납`)}function qg(e){const n={...yf,...e?.rules??{}},t=ff(e?.seed??12345);let r=t.shuffle(i0(n));const i=(d,f)=>{const h=[],g=[];for(;h.length<d&&r.length>0;){const v=r.shift();if(f&&v.isBonus){g.push(v);continue}h.push(v)}return g.length&&(r=t.shuffle([...r,...g])),h},l=i(10,!1),o=i(10,!1),s=i(8,!0),a={rules:n,deck:r,field:s,players:[vu(),vu()],turn:e?.firstPlayer??0,phase:"awaitPlay",events:[],ppeokPiles:{},pendingChoice:null,turnCtx:null,settlement:null,roundMultiplier:e?.roundMultiplier??1,turnCount:0,log:[]};if(a.players[0].hand=l,a.players[1].hand=o,n.chongtong)for(const d of[0,1]){const f=Ug(a.players[d].hand);if(f!==null)return a.phase="ended",a.settlement=Gg(d,f,n,a.roundMultiplier),a.events.push({type:"chongtong",player:d,detail:`${f}월`}),a.log.push(`P${d} 총통 (${f}월)`),a}return a}function Uo(e,n){return e.rules.heundeulgi?gf(e.players[n].hand).filter(t=>!e.players[n].shaken.includes(t)):[]}function $u(e,n,t){if(!Uo(e,n).includes(t))return e;const r=Kt(e);return r.players[n].shaken.push(t),r.events.push({type:"heundeulgi",player:n,detail:`${t}월`}),r.log.push(`P${n} 흔들기 (${t}월)`),r}function Ks(e,n){return e.rules.bomb?gf(e.players[n].hand).filter(t=>e.field.some(r=>r.month===t)):[]}function Vo(e,n){return n===0?[]:e.field.filter(t=>t.month===n)}function ku(e,n,t=!1){if(e.phase!=="awaitPlay")return e;const r=Kt(e),i=r.turn,l=r.players[i],o=l.hand.findIndex(h=>h.id===n);if(o<0)return e;const s=l.hand[o];r.events=[];const a={player:i,playedCard:s,bombCards:[],playedWentToField:!1,fromHandCapture:[],flipCard:null,fromFlipCapture:[],ppeok:!1,bonusFlips:[],stage:"hand"};if(r.turnCtx=a,r.turnCount++,t&&r.rules.bomb&&Ks(r,i).includes(s.month)){const h=l.hand.filter(v=>v.month===s.month);l.hand=l.hand.filter(v=>v.month!==s.month),a.playedCard=h[0],a.bombCards=h.slice(1),l.bombCount++,r.events.push({type:"bomb",player:i,detail:`${s.month}월`}),r.log.push(`P${i} 폭탄 (${s.month}월)`);const g=r.field.filter(v=>v.month===s.month);return r.field=r.field.filter(v=>v.month!==s.month),a.fromHandCapture=[...h,...g],delete r.ppeokPiles[s.month],Ht(r,i,"폭탄"),cr(r)}l.hand.splice(o,1);const d=Vo(r,s.month);if(d.length===0)return r.field.push(s),a.playedWentToField=!0,cr(r);if(d.length===1)return r.field=r.field.filter(h=>h.id!==d[0].id),a.fromHandCapture=[s,d[0]],cr(r);if(d.length===2)return r.phase="awaitChoice",r.pendingChoice={played:s,candidates:d,source:"hand"},r;r.field=r.field.filter(h=>h.month!==s.month),a.fromHandCapture=[s,...d];const f=r.ppeokPiles[s.month];return f!==void 0&&(delete r.ppeokPiles[s.month],Ht(r,i,f===i?"자뻑 회수":"뻑 회수")),cr(r)}function xu(e,n){if(e.phase!=="awaitChoice"||!e.pendingChoice||!e.turnCtx)return e;const t=Kt(e),r=t.pendingChoice,i=r.candidates.find(l=>l.id===n)??r.candidates[0];return t.field=t.field.filter(l=>l.id!==i.id),t.pendingChoice=null,t.phase="awaitPlay",r.source==="hand"?(t.turnCtx.fromHandCapture=[r.played,i],cr(t)):(t.turnCtx.fromFlipCapture=[r.played,i],Yn(t))}function cr(e){const n=e.turnCtx;n.stage="flip";const t=n.player;let r;for(;r=e.deck.shift(),!!r;){if(r.isBonus){n.bonusFlips.push(r);continue}break}if(!r)return n.flipCard=null,Yn(e);const i=r;if(n.flipCard=i,n.fromHandCapture.length===2&&n.fromHandCapture[0].month===i.month&&n.bombCards.length===0&&e.field.every(s=>s.month!==i.month)){e.field.push(...n.fromHandCapture,i),n.fromHandCapture=[],n.ppeok=!0;const s=e.ppeokPiles[i.month];return e.ppeokPiles[i.month]=t,e.events.push({type:s===t?"jappeok":"ppeok",player:t,detail:`${i.month}월`}),e.log.push(`P${t} ${s===t?"자뻑":"뻑"} (${i.month}월)`),Yn(e)}if(n.playedWentToField&&n.playedCard&&n.playedCard.month===i.month){const s=e.field.filter(a=>a.month===i.month);return e.field=e.field.filter(a=>a.month!==i.month),n.fromFlipCapture=[i,...s],n.playedWentToField=!1,e.events.push({type:"jjok",player:t,detail:`${i.month}월`}),e.log.push(`P${t} 쪽 (${i.month}월)`),Ht(e,t,"쪽"),Yn(e)}const l=e.field.filter(s=>s.month===i.month);if(l.length===0)return e.field.push(i),Yn(e);if(l.length===1)return e.field=e.field.filter(s=>s.id!==l[0].id),n.fromFlipCapture=[i,l[0]],Yn(e);if(l.length===2)return e.phase="awaitChoice",e.pendingChoice={played:i,candidates:l,source:"deck"},e;e.field=e.field.filter(s=>s.month!==i.month),n.fromFlipCapture=[i,...l];const o=e.ppeokPiles[i.month];return o!==void 0&&(delete e.ppeokPiles[i.month],Ht(e,t,o===t?"자뻑 회수":"뻑 회수")),Yn(e)}function Yn(e){const n=e.turnCtx,t=n.player,r=e.players[t],i=[...n.fromHandCapture,...n.fromFlipCapture,...n.bonusFlips];Hg(r,i),n.bombCards.length===0&&n.fromHandCapture.length>=2&&n.fromFlipCapture.length>=2&&(e.events.push({type:"ttadak",player:t}),e.log.push(`P${t} 따닥`),Ht(e,t,"따닥")),e.field.length===0&&i.length>0&&(e.events.push({type:"sseul",player:t}),e.log.push(`P${t} 쓸`),Ht(e,t,"쓸")),n.stage="done";const o=On(r,e.rules),s=o.base>=e.rules.minScoreToStop&&o.base>r.scoreAtLastGo,a=e.players[0].hand.length===0&&e.players[1].hand.length===0;return s?(e.phase="awaitGoStop",e):a||e.deck.length===0?(e.phase="ended",e.settlement=mf(),e.events.push({type:"nagari",player:t}),e.log.push("나가리"),e):(wf(e,t),e)}function Su(e){if(e.phase!=="awaitGoStop")return e;const n=Kt(e),t=n.turn,r=n.players[t];return r.goCount++,r.scoreAtLastGo=On(r,n.rules).base,n.events.push({type:"go",player:t,detail:`${r.goCount}고`}),n.log.push(`P${t} ${r.goCount}고`),n.players[0].hand.length===0&&n.players[1].hand.length===0||n.deck.length===0?(n.phase="ended",n.settlement=mf(),n.log.push("나가리 (고 후 패 소진)"),n):(wf(n,t),n)}function Cu(e){if(e.phase!=="awaitGoStop")return e;const n=Kt(e),t=n.turn;return n.phase="ended",n.settlement=Vg(n.players,t,n.rules,n.roundMultiplier),n.events.push({type:"stop",player:t}),n.log.push(`P${t} 스톱 -> ${n.settlement.total}점`),n}function bu(e,n,t){const r=Kt(e);return r.players[n].gukjinUse=t,r}function $f(e,n){return On(e.players[n],e.rules).base}const Zs={goRate:.3,preference:{gwang:.25,yeol:.25,tti:.25,pi:.25},samples:0};function Wg(e,n){const t=n.weights;if(e.kind==="gwang")return(e.isBiGwang?7:10)*t.gwang;if(e.isGukjin)return 4.5*Math.max(t.yeol,t.pi);if(e.kind==="yeol")return(e.isGodori?5.5*t.godori:3)*t.yeol;if(e.kind==="tti"){const r=e.tti==="hong"?t.hongdan:e.tti==="cheong"?t.cheongdan:e.tti==="cho"?t.chodan:.6;return 3.5*t.tti*r}return(e.piValue??1)*1.2*t.pi}function _e(e,n,t,r){const i=e.players[n].captured;let l=Wg(t,r);if(t.kind==="gwang"){const o=i.gwang.length;o===2&&(l+=12),o>=3&&(l+=8)}if(t.isGodori&&i.yeol.filter(s=>s.isGodori).length===2&&(l+=10),t.kind==="tti"&&t.tti&&t.tti!=="bi"){const o=i.tti.filter(s=>s.tti===t.tti).length;o===2?l+=9:o===1&&(l+=2)}return t.kind==="pi"&&i.pi.reduce((s,a)=>s+(a.piValue??1),0)>=8&&(l+=3*(t.piValue??1)),t.kind==="yeol"&&i.yeol.length>=4&&(l+=3),l}function Qg(e,n,t,r){const i=r.inference;return _e(e,n,t,r)*i*.45}function Kg(e,n,t,r=Zs){const i=e.turn,l=i===0?1:0,o=e.players[i].hand;if(o.length===0)return{cardId:"",bomb:!1,score:0};if(t.next()<n.mistakeRate)return{cardId:t.pick(o).id,bomb:!1,score:0};const s=n.aggression>.45?Ks(e,i):[],a=Zg(e,i);let d={cardId:o[0].id,bomb:!1,score:-1/0};for(const f of o){const h=Vo(e,f.month);let g=0;if(h.length===0){g-=Qg(e,l,f,n),g-=_e(e,i,f,n)*.25;const v=ju(e,i,f.month);g+=v/Math.max(1,a)*6*n.inference}else if(h.length===1){g+=_e(e,i,f,n)+_e(e,i,h[0],n),g+=_e(e,l,h[0],n)*n.inference*.5;const v=ju(e,i,f.month);g-=v/Math.max(1,a)*9*n.inference}else{const v=[...h].sort((x,C)=>_e(e,i,C,n)-_e(e,i,x,n));g+=_e(e,i,f,n)+_e(e,i,v[0],n),g+=_e(e,l,v[0],n)*n.inference*.5,h.length>=3&&(g+=8)}n.patternLearning>0&&(g-=Yg(f,r)*n.patternLearning*4),g>d.score&&(d={cardId:f.id,bomb:!1,score:g})}for(const f of s){const g=Vo(e,f).reduce((v,x)=>v+_e(e,i,x,n),0)+10*n.aggression;g>d.score&&(d={cardId:e.players[i].hand.find(x=>x.month===f).id,bomb:!0,score:g})}return d}function Zg(e,n){const t=n===0?1:0;return e.deck.length+e.players[t].hand.length}function ju(e,n,t){if(t===0)return 0;const r=e.players[n].hand.filter(i=>i.month===t).length+e.field.filter(i=>i.month===t).length+[...e.players[0].captured.gwang,...e.players[0].captured.yeol,...e.players[0].captured.tti,...e.players[0].captured.pi,...e.players[1].captured.gwang,...e.players[1].captured.yeol,...e.players[1].captured.tti,...e.players[1].captured.pi].filter(i=>i.month===t).length;return Math.max(0,4-r)}function Yg(e,n){if(n.samples<3)return 0;const t=n.preference;return e.kind==="gwang"?t.gwang:e.kind==="yeol"?t.yeol:e.kind==="tti"?t.tti:t.pi}function Xg(e,n,t){const r=e.pendingChoice?.candidates??[];if(r.length===0)return"";if(t.next()<n.mistakeRate)return t.pick(r).id;const i=e.turn;return[...r].sort((l,o)=>_e(e,i,o,n)-_e(e,i,l,n))[0].id}function Jg(e,n,t,r=Zs){const i=e.turn,l=i===0?1:0,o=$f(e,i),s=On(e.players[l],e.rules).base,a=e.players[i].hand.length;if(t.next()<n.mistakeRate)return{action:t.next()<n.greed?"go":"stop",confidence:.2};if(o>=n.stopScore)return{action:"stop",confidence:.9};if(s>=e.rules.minScoreToStop-2)return{action:"stop",confidence:.85};if(a<=1)return{action:"stop",confidence:.8};const d=a*.55*(.6+n.greed),f=s/Math.max(1,e.rules.minScoreToStop)*(1.4-n.inference),h=(r.goRate-.3)*n.patternLearning;let g=0;if(n.inference>.2){const C=e.players[l].captured,N=C.pi.reduce((p,y)=>p+(y.piValue??1),0),m=On(e.players[i],e.rules);e.rules.piBak&&N<=e.rules.piBakThreshold+2&&m.piScore>0&&(g+=2.2),e.rules.gwangBak&&C.gwang.length===0&&m.gwangScore>0&&(g+=1.8),g*=n.inference}const v=d+g-f*1.6+h;return{action:v>0?"go":"stop",confidence:Math.min(1,Math.abs(v)/3)}}function em(e,n){const t=e.turn,r=e.players[t].captured,i=r.yeol.length,l=r.pi.reduce((a,d)=>a+(d.piValue??1),0),o=i>=5?1+(i-5):0,s=l+2>=10?l+2-9:0;return s>o?"ssangpi":o>s?"yeol":n.weights.pi>=n.weights.yeol?"ssangpi":"yeol"}const Ae=0,$n=1,nm={jjok:"쪽!",ttadak:"따닥!",ppeok:"뻑!",jappeok:"자뻑!",sseul:"쓸!",bomb:"폭탄!",heundeulgi:"흔들기!",chongtong:"총통!",go:"고!",stop:"스톱!"};function tm(e,n){for(const t of e){if(t.type==="ppeok"||t.type==="jappeok")return t.player===n?"sulk":"smile";if(t.type==="sseul"||t.type==="ttadak"||t.type==="jjok")return t.player===n?"smile":"surprise";if(t.type==="bomb"||t.type==="heundeulgi")return t.player===n?"serious":"surprise"}return"normal"}function Qn(e,n){return e[Math.floor(n()*e.length)]??e[0]}function rm(e){const{tenant:n,stage:t,affection:r,losingStreak:i}=e,l=Jd(r),o=P.useMemo(()=>S0(n,t),[n,t]),s=P.useMemo(()=>e.seed??Ag(),[e.seed]),a=P.useRef(ff(s^2654435769)),d=P.useCallback(()=>a.current.next(),[]),[f,h]=P.useState(()=>qg({rules:e.rules,seed:s,firstPlayer:Ae})),[g,v]=P.useState(()=>Qn(n.lines.matchStart[l],Math.random)),[x,C]=P.useState("normal"),[N,m]=P.useState(null),[p,y]=P.useState(null),[$,E]=P.useState(!1),L=P.useRef(0),w=P.useRef([]),S=e.profile??Zs,z=P.useCallback((_,b)=>{const T=window.setTimeout(_,b);w.current.push(T)},[]);P.useEffect(()=>()=>{w.current.forEach(clearTimeout),w.current=[]},[]);const I=P.useCallback(_=>{L.current++,m({key:L.current,text:_})},[]),A=P.useCallback(_=>{const b=_.events;C(tm(b,$n));for(const U of b){const ln=nm[U.type];if(ln){I(ln);break}}const T=b.find(U=>(U.type==="ppeok"||U.type==="jappeok")&&U.player===$n),O=b.find(U=>U.type==="sseul"&&U.player===Ae);T?v(Qn(n.lines.ppeok[l],d)):O&&v(Qn(n.lines.sseulVictim[l],d))},[I,d,n,l]);P.useEffect(()=>{if(f.phase==="ended")return;if(!(f.turn===$n)){E(!1);return}if(E(!0),f.phase==="awaitPlay"){z(()=>{let b=f;const T=Uo(b,$n);T.length>0&&d()<o.aggression&&(b=$u(b,$n,T[0]),I("흔들기!")),b=bu(b,$n,em(b,o));const O=Kg(b,o,a.current,S);if(!O.cardId)return;const U=ku(b,O.cardId,O.bomb);A(U),h(U)},620);return}if(f.phase==="awaitChoice"){z(()=>{const b=xu(f,Xg(f,o,a.current));A(b),h(b)},420);return}f.phase==="awaitGoStop"&&z(()=>{const b=Jg(f,o,a.current,S),T=b.action==="go"?n.lines.go[l]:n.lines.stop[l],O=Qn(T,d);y({action:b.action,line:O}),C(b.action==="go"?"serious":"win"),z(()=>{y(null);const U=b.action==="go"?Su(f):Cu(f);I(b.action==="go"?"고!":"스톱!"),h(U)},1600)},500)},[f,o,S,n,l,z,A,I,d]),P.useEffect(()=>{if(f.phase!=="ended"||!f.settlement)return;const _=f.settlement.winner;_===$n?(v(Qn(n.lines.win[l],d)),C("win")):_===Ae?(v(Qn(n.lines.lose[l],d)),C("lose")):(v("나가리네. 다시 하자."),C("normal"))},[f.phase,f.settlement,n,l,d]);const ge=P.useCallback((_,b=!1)=>{if(f.turn!==Ae||f.phase!=="awaitPlay")return;const T=ku(f,_,b);A(T),h(T)},[f,A]),je=P.useCallback(_=>{if(f.phase!=="awaitChoice"||f.turn!==Ae)return;const b=xu(f,_);A(b),h(b)},[f,A]),rn=P.useCallback(_=>{f.phase!=="awaitGoStop"||f.turn!==Ae||(I(_==="go"?"고!":"스톱!"),h(_==="go"?Su(f):Cu(f)))},[f,I]),ft=P.useCallback(_=>{h($u(f,Ae,_)),I("흔들기!")},[f,I]),Gn=P.useCallback(_=>h(bu(f,Ae,_)),[f]);return{view:{state:f,line:g,expression:x,shout:N,askGoStop:f.phase==="awaitGoStop"&&f.turn===Ae,aiGoStop:p,hint:i>=3?Qn(n.lines.hints,()=>.5):null,myScore:$f(f,Ae),oppScore:On(f.players[$n],f.rules).base,busy:$},play:ge,choose:je,goStop:rn,shake:ft,setGukjin:Gn,shakeable:Uo(f,Ae),bombable:Ks(f,Ae)}}const ir=0,im=1;function lm(e){const n=[["gwang",e.gwang.length*3],["yeol",e.yeol.length],["tti",e.tti.length],["pi",e.pi.length*.6]];return n.sort((t,r)=>r[1]-t[1]),n[0][0]}function _u({captured:e,side:n}){const t=[["광",e.gwang],["띠",e.tti],["열",e.yeol],["피",e.pi]],r=t.reduce((i,[,l])=>i+l.length,0);return u.jsxs("div",{className:"piles",children:[u.jsxs("div",{className:"piles-head",children:[n,u.jsx("b",{children:r})]}),t.map(([i,l])=>u.jsxs("div",{className:`pile ${l.length===0?"pile-empty":""}`,children:[u.jsx("span",{className:"pile-label",children:i}),u.jsx("div",{className:"pile-cards",children:l.map((o,s)=>u.jsx("img",{className:"pile-card",style:{marginLeft:s===0?0:"var(--pile-overlap)"},src:Lg(o),alt:o.name,draggable:!1},o.id))}),l.length>0&&u.jsx("span",{className:"pile-n",children:l.length})]},i))]})}function om({tenant:e,stage:n,affection:t,rules:r,profile:i,losingStreak:l,points:o,onFinish:s,onQuit:a}){const{view:d,play:f,choose:h,goStop:g,shake:v,shakeable:x,bombable:C}=rm({tenant:e,stage:n,affection:t,rules:r,profile:i,losingStreak:l}),N=d.state,m=N.players[ir],p=N.players[im],[y,$]=P.useState(null),[E,L]=P.useState(!1);P.useEffect(()=>{if(N.phase==="ended"){const b=window.setTimeout(()=>L(!0),900);return()=>window.clearTimeout(b)}},[N.phase]);const S=N.turn===ir&&!d.busy&&N.phase==="awaitPlay",z=N.turn===ir&&N.phase==="awaitChoice",I=b=>{if(S){if(C.includes(b.month)){y===b.id?(f(b.id,!0),$(null)):$(b.id);return}f(b.id),$(null)}},A=P.useMemo(()=>{const b=new Map;for(const T of N.field){const O=b.get(T.month);O?O.push(T):b.set(T.month,[T])}return[...b.entries()].map(([T,O])=>({month:T,cards:O}))},[N.field]),ge=Math.ceil(A.length/2),je=A.slice(0,ge),rn=A.slice(ge),ft=d.myScore*e.rate,Gn=Math.round(d.oppScore*e.rate*Qs),yn=P.useMemo(()=>N.settlement?{won:N.settlement.winner===ir,draw:N.settlement.winner===null,settlement:N.settlement,playerWentGo:m.goCount>0,focus:lm(m.captured),score:N.settlement.winner===ir?N.settlement.total:0,settlementTotal:N.settlement.total}:null,[N.settlement,m]),_=b=>u.jsxs("div",{className:"fstack",children:[b.cards.map((T,O)=>{const U=z&&N.pendingChoice?.candidates.some(ln=>ln.id===T.id);return u.jsx("div",{className:"fslot",style:{marginLeft:O===0?0:"var(--stack-overlap)",zIndex:O},children:u.jsx(pu,{card:T,selectable:!!U,onClick:()=>U&&h(T.id)})},T.id)}),N.ppeokPiles[b.month]!==void 0&&u.jsx("span",{className:"fstack-tag",children:"뻑"})]},b.month);return u.jsxs("div",{className:"screen match-screen",children:[u.jsx(gl,{bg:"maru",time:"night"}),u.jsxs("div",{className:"layer board",children:[u.jsxs("div",{className:"board-opp",children:[u.jsx(Tn,{tenant:e,expression:d.expression,outfit:n>=10?2:0}),u.jsxs("div",{className:"chip-body",children:[u.jsxs("div",{className:"chip-name",children:[e.name,p.goCount>0&&u.jsxs("span",{className:"badge",children:[p.goCount,"고"]})]}),u.jsxs("div",{className:"chip-score",children:[d.oppScore,u.jsx("small",{children:"점"})]})]}),u.jsx("button",{className:"iconbtn quit",onClick:a,"aria-label":"나가기",children:"✕"}),u.jsx("div",{className:"speech",children:d.line})]}),u.jsx("div",{className:"board-oppcap",children:u.jsx(_u,{captured:p.captured,side:"상대"})}),u.jsxs("div",{className:"board-field",children:[u.jsxs("div",{className:"felt",children:[u.jsx("div",{className:"field-row",children:je.map(_)}),u.jsxs("div",{className:"field-mid",children:[u.jsxs("div",{className:"deck",children:[u.jsx(gu,{}),u.jsx("span",{className:"deck-n",children:N.deck.length})]}),u.jsx("div",{className:"deck-label",children:"남은 패"})]}),u.jsx("div",{className:"field-row",children:rn.map(_)})]}),z&&u.jsx("div",{className:"felt-notice",children:"같은 월이 두 장입니다. 가져올 패를 고르세요."}),d.hint&&!z&&u.jsxs("div",{className:"felt-notice hint",children:[e.name,": “",d.hint,"”"]})]}),u.jsx("div",{className:"board-mycap",children:u.jsx(_u,{captured:m.captured,side:"내 것"})}),u.jsxs("div",{className:"board-side",children:[u.jsxs("div",{className:"scorebox",children:[u.jsxs("div",{className:"scorebox-row",children:[u.jsx("b",{children:d.myScore}),u.jsx("small",{children:"점"}),u.jsx("span",{className:"x",children:"×"}),u.jsx("b",{children:e.rate}),u.jsx("small",{children:"P"})]}),u.jsxs("div",{className:"scorebox-eq",children:["= ",u.jsxs("strong",{children:[ft.toLocaleString(),"P"]})]}),u.jsxs("div",{className:"scorebox-risk",children:["지면 ",u.jsxs("span",{children:["-",Gn.toLocaleString(),"P"]})]})]}),u.jsx("div",{className:"turnline",children:y&&C.includes(m.hand.find(b=>b.id===y)?.month??0)?"한 번 더 누르면 폭탄":S?"낼 패를 고르세요":d.busy?`${e.name}의 차례…`:z?"가져올 패를 고르세요":""}),x.length>0&&S&&u.jsxs("button",{className:"btn shake",onClick:()=>v(x[0]),children:["흔들기 ",Zd[x[0]]??x[0]]}),u.jsxs("div",{className:"me-chip",children:[u.jsxs("div",{className:"chip-name",children:["나",m.goCount>0&&u.jsxs("span",{className:"badge",children:[m.goCount,"고"]})]}),u.jsxs("div",{className:"chip-points",children:[o.toLocaleString()," P"]})]})]}),u.jsxs("div",{className:"board-hand",children:[m.hand.map(b=>u.jsx(pu,{card:b,selectable:S,chosen:y===b.id,onClick:()=>I(b)},b.id)),m.hand.length===0&&u.jsx(gu,{small:!0})]}),d.shout&&u.jsx("div",{className:"shout",children:u.jsx("span",{children:d.shout.text})},d.shout.key),d.askGoStop&&u.jsxs("div",{className:"gostop-overlay",children:[u.jsx(Tn,{tenant:e,expression:"serious",outfit:n>=10?2:0}),u.jsxs("div",{className:"gostop-line",children:[d.myScore,"점입니다. 더 가시겠어요?",u.jsx("br",{}),u.jsxs("strong",{style:{color:"var(--ok)",fontSize:18},children:["지금 스톱하면 +",ft.toLocaleString(),"P"]}),u.jsx("br",{}),u.jsxs("span",{style:{color:"var(--paper-dim)",fontSize:13},children:["고를 하면 점수가 오르지만, 상대가 이기면 고박으로 두 배를 물어줍니다. 점당 ",e.rate,"P 라 크게 뒤집히면 그만큼 나갑니다."]})]}),u.jsxs("div",{style:{display:"flex",gap:10},children:[u.jsx("button",{className:"btn primary",onClick:()=>g("go"),children:"고"}),u.jsx("button",{className:"btn",onClick:()=>g("stop"),children:"스톱"})]})]}),d.aiGoStop&&u.jsxs("div",{className:"gostop-overlay",children:[u.jsx(Tn,{tenant:e,expression:d.aiGoStop.action==="go"?"serious":"win",outfit:n>=10?2:0}),u.jsxs("div",{className:"gostop-line",children:[u.jsx("strong",{style:{color:"var(--lamp)"},children:e.name}),u.jsx("br",{}),d.aiGoStop.line]})]}),E&&yn&&u.jsx(sm,{tenant:e,outcome:yn,onNext:()=>s(yn)})]})]})}function sm({tenant:e,outcome:n,onNext:t}){const r=n.settlement,i=r?.breakdown,l=e.rate;return u.jsxs("div",{className:"result",children:[u.jsx("h2",{style:{color:n.won?"var(--lamp)":n.draw?"var(--paper-dim)":"var(--accent)"},children:n.draw?"나가리":n.won?"승리":"패배"}),r&&u.jsxs("div",{className:"total",children:[r.total,"점"]}),i&&u.jsxs("div",{className:"result-rows",children:[i.gwangScore>0&&u.jsxs("div",{children:[u.jsx("span",{children:i.gwangLabel}),u.jsxs("span",{children:[i.gwangScore,"점"]})]}),i.ttiScore>0&&u.jsxs("div",{children:[u.jsx("span",{children:i.ttiLabels.join(" · ")}),u.jsxs("span",{children:[i.ttiScore,"점"]})]}),i.yeolScore>0&&u.jsxs("div",{children:[u.jsx("span",{children:i.yeolLabels.join(" · ")}),u.jsxs("span",{children:[i.yeolScore,"점"]})]}),i.piScore>0&&u.jsxs("div",{children:[u.jsxs("span",{children:["피 ",i.piCount,"장"]}),u.jsxs("span",{children:[i.piScore,"점"]})]}),u.jsxs("div",{children:[u.jsx("span",{children:"기본"}),u.jsxs("span",{children:[r?.base,"점"]})]}),r&&r.goBonus>0&&u.jsxs("div",{children:[u.jsx("span",{children:"고 가산"}),u.jsxs("span",{children:["+",r.goBonus]})]}),r&&r.multiplier>1&&u.jsxs("div",{children:[u.jsx("span",{children:"배수"}),u.jsxs("span",{children:["x",r.multiplier]})]})]}),r&&u.jsx("div",{style:{fontSize:20,fontWeight:900,color:n.won?"var(--ok)":n.draw?"var(--paper-dim)":"var(--accent)"},children:n.draw?"판돈 없음":n.won?`+${(r.total*l).toLocaleString()}P`:`-${Math.round(r.total*l*Qs).toLocaleString()}P`}),r&&r.reasons.length>0&&u.jsx("div",{className:"reasons",children:r.reasons.map((o,s)=>u.jsx("span",{children:o},s))}),u.jsx("div",{style:{display:"flex",gap:10,alignItems:"center",marginTop:6},children:u.jsx(Tn,{tenant:e,expression:n.won?"lose":"win",outfit:0,style:{height:90}})}),u.jsx("button",{className:"btn primary wide",style:{maxWidth:260},onClick:t,children:"계속"})]})}function Nu({scene:e,tenant:n,textSpeed:t,onDone:r,canSkip:i=!0}){const[l,o]=P.useState(()=>V0(e)),[s,a]=P.useState(""),[d,f]=P.useState(!1),h=P.useRef(null),g=l.view;P.useEffect(()=>{if(h.current&&window.clearInterval(h.current),t<=0){a(g.text),f(!1);return}a(""),f(!0);let N=0;return h.current=window.setInterval(()=>{N++,a(g.text.slice(0,N)),N>=g.text.length&&(h.current&&window.clearInterval(h.current),f(!1))},t),()=>{h.current&&window.clearInterval(h.current)}},[g.text,t]);const v=P.useCallback(()=>{const N=G0(l);r({affectionDelta:N.view.affectionDelta,pointDelta:N.view.pointDelta,cg:N.view.cg})},[l,r]),x=P.useCallback(()=>{if(d){h.current&&window.clearInterval(h.current),a(g.text),f(!1);return}if(!g.choices){if(g.done){r({affectionDelta:g.affectionDelta,pointDelta:g.pointDelta,cg:g.cg});return}o(hl(l))}},[d,g,l,r]);P.useEffect(()=>{g.done&&!g.text&&r({affectionDelta:g.affectionDelta,pointDelta:g.pointDelta,cg:g.cg})},[g,r]);const C=n!==null&&g.speaker===n.name;return u.jsxs("div",{className:"screen",onClick:x,children:[u.jsx(gl,{bg:g.bg,time:g.time}),u.jsxs("div",{className:"layer",children:[u.jsxs("div",{className:"topbar",onClick:N=>N.stopPropagation(),children:[u.jsx("h1",{children:e.title}),i&&u.jsx("button",{className:"btn ghost",style:{padding:"6px 12px",fontSize:13},onClick:v,children:"건너뛰기"})]}),u.jsxs("div",{className:"vn-stage",children:[n&&!g.cg&&u.jsx(Tn,{className:"vn-portrait",tenant:n,expression:C?g.expression:"normal",outfit:g.outfit}),g.cg&&u.jsx("div",{className:"vn-cg",children:u.jsx("div",{className:"vn-cg-inner",children:u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:13,opacity:.8,marginBottom:8},children:"엔딩 CG"}),u.jsx("div",{style:{fontSize:17,fontWeight:800},children:e.title}),u.jsx("div",{style:{fontSize:11,opacity:.6,marginTop:10},children:g.cg})]})})})]}),u.jsxs("div",{className:"vn-box",onClick:N=>N.stopPropagation(),children:[g.speaker&&u.jsx("div",{className:"vn-speaker",children:g.speaker}),u.jsx("div",{className:"vn-text",onClick:x,children:s}),g.choices?u.jsx("div",{className:"vn-choices",children:g.choices.map((N,m)=>u.jsx("button",{className:"btn wide",onClick:()=>o(tf(l,m)),children:N.text},m))}):u.jsx("div",{className:"vn-hint",onClick:x,children:g.done?"탭하여 계속 ▸":"탭 ▾"})]})]})]})}const Go="HSG1",kf="HSG0";function Eu(e){let n="";for(const t of e)n+=String.fromCharCode(t);return btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function am(e){const n=e.replace(/-/g,"+").replace(/_/g,"/"),t=n.length%4?"=".repeat(4-n.length%4):"",r=atob(n+t),i=new Uint8Array(r.length);for(let l=0;l<r.length;l++)i[l]=r.charCodeAt(l);return i}function Ho(e){let n=2166136261;for(let t=0;t<e.length;t++)n^=e.charCodeAt(t),n=Math.imul(n,16777619)>>>0;return n.toString(36).toUpperCase().padStart(7,"0")}async function um(e){try{if(typeof CompressionStream>"u")return null;const n=new CompressionStream("deflate-raw"),t=new TextEncoder().encode(e),r=new Blob([t.buffer]).stream().pipeThrough(n);return new Uint8Array(await new Response(r).arrayBuffer())}catch{return null}}async function cm(e){try{if(typeof DecompressionStream>"u")return null;const n=new DecompressionStream("deflate-raw"),t=new Blob([e.buffer]).stream().pipeThrough(n);return new TextDecoder().decode(await new Response(t).arrayBuffer())}catch{return null}}function Zi(e){const n=Object.values(e.tenants).filter(i=>i.clearedStage>0).length,t=Object.values(e.tenants).reduce((i,l)=>i+l.clearedStage,0),r=Object.values(e.tenants).filter(i=>i.dating).length;return`${n}명 진행 · 총 ${t}단계 · 연애 ${r}명 · ${e.points.toLocaleString()}P · ${e.stats.totalGames}판`}async function dm(e,n){const t={meta:{deviceId:n,createdAt:new Date().toISOString(),summary:Zi(e)},save:e},r=JSON.stringify(t),i=await um(r);if(i){const o=Eu(i);return`${Go}.${o}.${Ho(o)}`}const l=Eu(new TextEncoder().encode(r));return`${kf}.${l}.${Ho(l)}`}async function fm(e){const n=e.trim().replace(/\s+/g,"");if(!n)return{ok:!1,reason:"코드가 비어 있습니다."};const t=n.split(".");if(t.length!==3)return{ok:!1,reason:"코드 형식이 올바르지 않습니다. 앞뒤가 잘리지 않았는지 확인해 주세요."};const[r,i,l]=t;if(r!==Go&&r!==kf)return{ok:!1,reason:"하숙생 맞고 백업 코드가 아닙니다."};if(Ho(i)!==l)return{ok:!1,reason:"코드가 손상됐습니다. 복사할 때 일부가 빠졌을 수 있습니다."};let o=null;try{const f=am(i);o=r===Go?await cm(f):new TextDecoder().decode(f)}catch{return{ok:!1,reason:"코드를 읽을 수 없습니다."}}if(!o)return{ok:!1,reason:"이 브라우저에서는 압축된 코드를 풀 수 없습니다. 최신 브라우저에서 시도해 주세요."};let s;try{s=JSON.parse(o)}catch{return{ok:!1,reason:"코드 내용이 올바르지 않습니다."}}if(!s?.save?.tenants||typeof s.save.points!="number")return{ok:!1,reason:"저장 데이터가 들어 있지 않습니다."};const a=Ar(),d={...a,...s.save,tenants:{...a.tenants,...s.save.tenants},settings:{...a.settings,...s.save.settings??{}},stats:{...a.stats,...s.save.stats??{}}};return{ok:!0,backup:{meta:s.meta??{deviceId:"(알 수 없음)",createdAt:"",summary:Zi(d)},save:d}}}function hm(e){const n=new Date().toISOString().slice(0,16).replace(/[:T]/g,""),t=new Blob([e],{type:"text/plain;charset=utf-8"}),r=URL.createObjectURL(t),i=document.createElement("a");i.href=r,i.download=`하숙생맞고-백업-${n}.txt`,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}async function pm(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}try{const n=document.createElement("textarea");n.value=e,n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return n.remove(),t}catch{return!1}}function gm({data:e,device:n,onRestore:t}){const[r,i]=P.useState(""),[l,o]=P.useState(""),[s,a]=P.useState(null),[d,f]=P.useState(null),[h,g]=P.useState(null),[v,x]=P.useState(!1);P.useEffect(()=>{n0().then(g)},[]);const C=P.useCallback(async()=>{const w=await dm(e,n?.id??"");return i(w),x(!0),w},[e,n]),N=P.useCallback(async()=>{const w=r||await C(),S=await pm(w);a(S?{kind:"ok",text:"백업 코드를 복사했습니다. 메모장이나 메신저에 붙여넣어 보관하세요."}:{kind:"warn",text:"복사가 막혔습니다. 아래 코드를 길게 눌러 직접 복사해 주세요."})},[r,C]),m=P.useCallback(async()=>{const w=r||await C();hm(w),a({kind:"ok",text:"백업 파일을 저장했습니다."})},[r,C]),p=P.useCallback(async()=>{a(null);const w=await fm(l);if(!w.ok){f(null),a({kind:"err",text:w.reason});return}f(w.backup)},[l]),y=P.useCallback(async()=>{if(!d)return;const w=du(d.save),S=await e0(d.save.deviceId||void 0),z=du({...w,deviceId:S.id});t(z),f(null),o(""),a({kind:"ok",text:"진행도를 복원했습니다."})},[d,t]),$=P.useCallback(w=>{const S=w.target.files?.[0];if(!S)return;const z=new FileReader;z.onload=()=>o(String(z.result??"")),z.readAsText(S),w.target.value=""},[]),E=h&&!h.localStorage&&!h.indexedDb,L=h&&(!h.localStorage||!h.indexedDb)&&!E;return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"이 기기"}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{children:["기기 코드",u.jsx("small",{children:"브라우저마다 따로 발급되는 무작위 번호입니다. 전화번호·기기 일련번호 같은 개인정보는 쓰지도, 보내지도 않습니다."})]}),u.jsx("code",{style:{fontSize:13,color:"var(--lamp)",whiteSpace:"nowrap"},children:n?.shortCode??"…"})]}),u.jsxs("div",{className:"row",children:[u.jsx("span",{children:"실행 환경"}),u.jsx("span",{children:n?.platform??"…"})]}),u.jsxs("div",{className:"row",children:[u.jsx("span",{children:"저장 상태"}),u.jsx("span",{style:{color:E?"var(--accent)":L?"var(--warn)":"var(--ok)"},children:h?E?"저장 불가":L?"일부만 사용 가능":"정상":"확인 중…"})]}),E&&u.jsx("div",{className:"hint-box",style:{margin:"8px 0 0"},children:"이 브라우저에서는 저장이 막혀 있습니다(사생활 보호 모드일 수 있습니다). 지금 진행한 내용은 창을 닫으면 사라집니다. 일반 창에서 열어 주세요."}),n?.ephemeral&&!E&&u.jsx("div",{className:"hint-box",style:{margin:"8px 0 0"},children:"기기 코드를 저장하지 못했습니다. 새로고침하면 새 기기로 인식될 수 있으니 아래에서 백업 코드를 받아 두세요."})]}),u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"진행도 백업"}),u.jsxs("div",{style:{fontSize:12,color:"var(--paper-dim)",lineHeight:1.6,marginBottom:10},children:["지금 진행도: ",u.jsx("b",{style:{color:"var(--paper)"},children:Zi(e)}),u.jsx("br",{}),"백업 코드 하나면 브라우저 데이터를 지웠거나 폰을 바꿔도 그대로 이어서 할 수 있습니다.",u.jsx("br",{}),u.jsx("b",{style:{color:"var(--warn)"},children:"아이폰 사파리"}),"는 홈 화면에 추가하지 않은 사이트의 저장 데이터를 일정 기간 뒤 지웁니다. 웹으로 오래 즐기실 거면 홈 화면에 추가하거나 백업 코드를 받아 두세요."]}),u.jsxs("div",{style:{display:"flex",gap:8},children:[u.jsx("button",{className:"btn primary",style:{flex:1,fontSize:13},onClick:N,children:"코드 복사"}),u.jsx("button",{className:"btn",style:{flex:1,fontSize:13},onClick:m,children:"파일로 저장"})]}),v&&r&&u.jsx("textarea",{readOnly:!0,value:r,onFocus:w=>w.currentTarget.select(),style:{width:"100%",height:76,marginTop:8,fontSize:10.5,lineHeight:1.4,background:"rgba(0,0,0,0.45)",color:"var(--paper-dim)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:8,padding:8,fontFamily:"monospace",userSelect:"text",WebkitUserSelect:"text"}})]}),u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"진행도 복원"}),u.jsx("div",{style:{fontSize:12,color:"var(--paper-dim)",lineHeight:1.6,marginBottom:8},children:"다른 기기에서 받은 백업 코드를 붙여넣으세요. 현재 진행도는 덮어써집니다."}),u.jsx("textarea",{value:l,onChange:w=>o(w.target.value),placeholder:"HSG1.로 시작하는 백업 코드를 붙여넣으세요",style:{width:"100%",height:68,fontSize:11,background:"rgba(0,0,0,0.45)",color:"var(--paper)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:8,padding:8,fontFamily:"monospace",userSelect:"text",WebkitUserSelect:"text"}}),u.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[u.jsx("button",{className:"btn",style:{flex:1,fontSize:13},onClick:p,disabled:!l.trim(),children:"코드 확인"}),u.jsxs("label",{className:"btn",style:{flex:1,fontSize:13,textAlign:"center"},children:["파일 선택",u.jsx("input",{type:"file",accept:".txt,text/plain",onChange:$,style:{display:"none"}})]})]}),d&&u.jsxs("div",{style:{marginTop:10,padding:10,borderRadius:10,background:"rgba(63,138,82,0.15)",border:"1px solid rgba(63,138,82,0.5)",fontSize:12,lineHeight:1.6},children:[u.jsx("b",{style:{color:"var(--ok)"},children:"읽을 수 있는 백업입니다."}),u.jsx("br",{}),"불러올 내용: ",d.meta.summary,u.jsx("br",{}),d.meta.createdAt&&u.jsxs("span",{style:{color:"var(--paper-dim)"},children:["만든 날짜: ",new Date(d.meta.createdAt).toLocaleString("ko-KR")]}),u.jsxs("div",{style:{marginTop:8,color:"var(--warn)"},children:["지금 진행도(",Zi(e),")는 사라집니다."]}),u.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[u.jsx("button",{className:"btn primary",style:{flex:1,fontSize:13},onClick:y,children:"덮어쓰고 복원"}),u.jsx("button",{className:"btn ghost",style:{flex:1,fontSize:13},onClick:()=>f(null),children:"취소"})]})]}),s&&u.jsx("div",{style:{marginTop:10,fontSize:12,lineHeight:1.5,color:s.kind==="ok"?"var(--ok)":s.kind==="warn"?"var(--warn)":"var(--accent)"},children:s.text})]})]})}const mm=[{key:"biGwangPenalty",label:"비삼광 2점",desc:"3광에 비광이 끼면 3점 대신 2점"},{key:"goMultiplierFrom3",label:"3고부터 배수",desc:"고 1·2회는 가산, 3회부터 2배씩"},{key:"piBak",label:"피박",desc:"상대 피가 기준 이하일 때 2배"},{key:"gwangBak",label:"광박",desc:"상대 광이 없을 때 2배"},{key:"mengBak",label:"멍박",desc:"상대 열끗이 없을 때 2배"},{key:"goBak",label:"고박",desc:"고를 외친 쪽이 지면 2배 부담"},{key:"heundeulgi",label:"흔들기",desc:"같은 월 3장 선언 시 2배"},{key:"bomb",label:"폭탄",desc:"같은 월 3장을 한 번에 투하"},{key:"chongtong",label:"총통",desc:"같은 월 4장이면 즉시 승리"},{key:"nagariDouble",label:"나가리 2배",desc:"나가리 다음 판은 2배"},{key:"gukjinOption",label:"국진 선택",desc:"국진을 열끗/쌍피 중 골라 쓴다"}];function ym({data:e,device:n,onChange:t,onReset:r,onBack:i}){const l={...yf,...e.settings.rules},o=(a,d)=>{t({...e,settings:{...e.settings,rules:{...e.settings.rules,[a]:d}}})},s=(a,d)=>{t({...e,settings:{...e.settings,[a]:d}})};return u.jsx("div",{className:"screen",style:{background:"var(--wood-dark)"},children:u.jsxs("div",{className:"layer",children:[u.jsxs("div",{className:"topbar",children:[u.jsx("button",{className:"iconbtn",onClick:i,"aria-label":"뒤로",children:"←"}),u.jsx("h1",{children:"설정"})]}),u.jsxs("div",{className:"panel",children:[u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"점수 해석"}),u.jsx("div",{className:"row",children:u.jsxs("div",{children:["띠 점수 방식",u.jsx("small",{children:"기획서 표기(5장 5점)와 한국 온라인 맞고 표준(5장 1점)이 달라 둘 다 넣었습니다. 홍/청/초단 3점은 두 방식 모두 동일합니다."})]})}),u.jsxs("div",{style:{display:"flex",gap:8,marginTop:6},children:[u.jsx("button",{className:`btn ${l.ttiScoring==="standard"?"primary":"ghost"}`,style:{flex:1,fontSize:13},onClick:()=>o("ttiScoring","standard"),children:"표준 (5장 1점)"}),u.jsx("button",{className:`btn ${l.ttiScoring==="specSheet"?"primary":"ghost"}`,style:{flex:1,fontSize:13},onClick:()=>o("ttiScoring","specSheet"),children:"기획서 (5장 5점)"})]})]}),u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"규칙 옵션"}),mm.map(a=>u.jsxs("div",{className:"row",children:[u.jsxs("div",{children:[a.label,u.jsx("small",{children:a.desc})]}),u.jsx(yu,{on:l[a.key],onToggle:()=>o(a.key,!l[a.key])})]},a.key)),u.jsxs("div",{className:"row",children:[u.jsxs("div",{children:["보너스 쌍피",u.jsx("small",{children:"덱에 섞는 보너스패 장수 (0~3)"})]}),u.jsx("div",{style:{display:"flex",gap:4},children:[0,1,2,3].map(a=>u.jsx("button",{className:`btn ${l.bonusPiCount===a?"primary":"ghost"}`,style:{padding:"6px 11px",fontSize:13},onClick:()=>o("bonusPiCount",a),children:a},a))})]}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{children:["스톱 최소 점수",u.jsx("small",{children:"이 점수 이상이어야 고/스톱을 고를 수 있습니다"})]}),u.jsx("div",{style:{display:"flex",gap:4},children:[3,5,7].map(a=>u.jsx("button",{className:`btn ${l.minScoreToStop===a?"primary":"ghost"}`,style:{padding:"6px 11px",fontSize:13},onClick:()=>o("minScoreToStop",a),children:a},a))})]})]}),u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"진행"}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{children:["전원 공략 가능 모드",u.jsx("small",{children:"끄면 한 명과 연애를 시작한 뒤 다른 하숙생의 이벤트는 친구 루트로 분기합니다. 켜면 전원 공략 가능합니다."})]}),u.jsx(yu,{on:e.settings.allRoutes,onToggle:()=>s("allRoutes",!e.settings.allRoutes)})]}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{children:["글자 속도",u.jsx("small",{children:"0에 가까울수록 빠릅니다"})]}),u.jsx("div",{style:{display:"flex",gap:4},children:[[0,"즉시"],[15,"빠름"],[25,"보통"],[45,"느림"]].map(([a,d])=>u.jsx("button",{className:`btn ${e.settings.textSpeed===a?"primary":"ghost"}`,style:{padding:"6px 9px",fontSize:12},onClick:()=>s("textSpeed",a),children:d},a))})]})]}),u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"기록"}),u.jsxs("div",{className:"row",children:[u.jsx("span",{children:"총 대국"}),u.jsxs("span",{children:[e.stats.totalGames,"판"]})]}),u.jsxs("div",{className:"row",children:[u.jsx("span",{children:"전적"}),u.jsxs("span",{children:[e.stats.wins,"승 ",e.stats.losses,"패"]})]}),u.jsxs("div",{className:"row",children:[u.jsx("span",{children:"최고 점수"}),u.jsxs("span",{children:[e.stats.bestScore,"점"]})]}),u.jsxs("div",{className:"row",children:[u.jsx("span",{children:"보유 포인트"}),u.jsxs("span",{children:[e.points.toLocaleString()," P"]})]})]}),u.jsx(gm,{data:e,device:n,onRestore:t}),u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"데이터"}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{children:["처음부터 다시",u.jsx("small",{children:"진행도·호감도·포인트·도감이 모두 지워집니다"})]}),u.jsx("button",{className:"btn",style:{background:"linear-gradient(180deg,#9c3c2c,#6f2a1e)"},onClick:()=>{confirm("정말 모든 진행을 지우시겠습니까? 되돌릴 수 없습니다.")&&r()},children:"초기화"})]})]}),u.jsx("div",{style:{textAlign:"center",fontSize:11,color:"var(--paper-dim)",padding:"8px 0 24px"},children:"하숙생 맞고 · 판돈은 하숙집 포인트이며 현금 환전 기능이 없습니다."})]})]})})}const Mu=(()=>{const e=Yd();return["송학 광","매조 홍단","공산 광"].map(n=>e.find(t=>t.name===n))})();function vm({data:e,onChange:n,onBack:t}){const[r,i]=P.useState(null),l=h=>e.owned.includes(h.id),o=h=>h.kind==="cards"?e.equipped.cards===wn(h):e.equipped.theme===wn(h),s=h=>{if(!l(h)){if(e.points<h.price){i(`${(h.price-e.points).toLocaleString()}P 가 모자랍니다.`);return}n({...e,points:e.points-h.price,owned:[...e.owned,h.id],equipped:h.kind==="cards"?{...e.equipped,cards:wn(h)}:{...e.equipped,theme:wn(h)}}),i(`${h.name} 을(를) 들였습니다. 바로 적용했어요.`)}},a=(h,g)=>{n({...e,equipped:{...e.equipped,[h]:g}}),i(null)},d=yt.filter(l).length,f=yt.filter(l).reduce((h,g)=>h+g.price,0);return u.jsx("div",{className:"screen",style:{background:"var(--wood-dark)"},children:u.jsxs("div",{className:"layer",children:[u.jsxs("div",{className:"topbar",children:[u.jsx("button",{className:"iconbtn",onClick:t,"aria-label":"뒤로",children:"←"}),u.jsx("h1",{children:"상점"}),u.jsxs("span",{className:"points",children:[e.points.toLocaleString()," P"]})]}),u.jsxs("div",{className:"panel",children:[u.jsx("div",{className:"section",children:u.jsxs("div",{style:{fontSize:12.5,color:"var(--paper-dim)",lineHeight:1.65},children:["승부에 유리해지는 물건은 팔지 않습니다. 판돈으로 딴 포인트는 겉모습에만 씁니다.",u.jsx("br",{}),"보유 ",d,"/",yt.length,"종 · 쓴 포인트 ",f.toLocaleString(),"P /"," ",g0.toLocaleString(),"P"]})}),u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"화패"}),u.jsx("div",{style:{display:"flex",gap:5,justifyContent:"center",marginBottom:12},children:Mu.map(h=>u.jsx("img",{src:Qi(h,{skin:e.equipped.cards}),alt:h.name,style:{width:54,borderRadius:5,boxShadow:"0 3px 8px rgba(0,0,0,.5)"}},h.id))}),u.jsxs("div",{style:{textAlign:"center",fontSize:12,color:"var(--lamp)",marginBottom:10},children:["지금: ",m0(e.equipped.cards)]}),yt.filter(h=>h.kind==="cards").map(h=>u.jsx(Pu,{item:h,owned:l(h),equipped:o(h),points:e.points,onBuy:()=>s(h),onEquip:()=>a("cards",wn(h)),preview:u.jsx("img",{src:Qi(Mu[0],{skin:wn(h)}),alt:"",style:{width:38,borderRadius:4}})},h.id)),e.equipped.cards!=="classic"&&u.jsx("button",{className:"btn ghost wide",style:{marginTop:8,fontSize:13},onClick:()=>a("cards","classic"),children:"기본 화패(전통)로 되돌리기"})]}),u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"마루 테마"}),u.jsxs("div",{style:{fontSize:12,color:"var(--lamp)",marginBottom:10},children:["지금: ",Vs(e.equipped.theme).name]}),yt.filter(h=>h.kind==="theme").map(h=>u.jsx(Pu,{item:h,owned:l(h),equipped:o(h),points:e.points,onBuy:()=>s(h),onEquip:()=>a("theme",wn(h)),preview:u.jsx(wm,{id:wn(h)})},h.id)),e.equipped.theme!=="maru"&&u.jsx("button",{className:"btn ghost wide",style:{marginTop:8,fontSize:13},onClick:()=>a("theme","maru"),children:"기본 테마(밤의 마루)로 되돌리기"})]}),r&&u.jsx("div",{className:"hint-box",style:{margin:"0 0 14px"},children:r})]})]})})}function wm({id:e}){const n=Vs(e),t=n.vars["--wood-dark"]??"#2a1f18",r=n.vars["--lamp"]??"#ffd98a",i=n.vars["--wood"]??"#4a3628";return u.jsx("div",{style:{width:38,height:38,borderRadius:8,background:`linear-gradient(140deg, ${t}, ${i})`,border:`2px solid ${r}`,flex:"0 0 auto"}})}function Pu({item:e,owned:n,equipped:t,points:r,onBuy:i,onEquip:l,preview:o}){const s=r>=e.price;return u.jsxs("div",{className:"row",style:{alignItems:"center",gap:10},children:[o,u.jsxs("div",{style:{flex:1,minWidth:0},children:[e.name,u.jsx("small",{children:e.desc})]}),n?t?u.jsx("span",{style:{fontSize:12,color:"var(--ok)",fontWeight:700,flex:"0 0 auto"},children:"사용 중"}):u.jsx("button",{className:"btn",style:{padding:"7px 12px",fontSize:12.5},onClick:l,children:"적용"}):u.jsxs("button",{className:`btn ${s?"primary":""}`,style:{padding:"7px 12px",fontSize:12.5,flex:"0 0 auto"},onClick:i,disabled:!s,children:[e.price.toLocaleString(),"P"]})]})}function $m(e,n,t){const r=Jd(n),i=e.lines.matchStart[r],l=i[Math.floor(Math.random()*i.length)];return{id:`__prematch_${e.id}_${t}`,title:`${e.name} · ${t}단계`,tenantId:e.id,steps:[{kind:"bg",bg:"maru",time:"night"},{kind:"narrate",text:`마루에 방석 두 개가 깔렸다. ${t}번째 판이다.`},{kind:"say",speaker:e.name,expression:"smile",text:l},{kind:"end"}],labels:{}}}function km(){const[e,n]=P.useState(()=>lf()),[t,r]=P.useState(null),[i,l]=P.useState(!1),[o,s]=P.useState(!1),[a,d]=P.useState({name:"title"}),[f,h]=P.useState({}),[g,v]=P.useState(null);P.useEffect(()=>{let w=!0;return(async()=>{const[S,z]=await Promise.all([Jp(),Y0()]);w&&(r(S),l(z.recovered),n(I=>{const A=z.data.savedAt>=I.savedAt?z.data:I;return A.deviceId===S.id?A:{...A,deviceId:S.id}}),s(!0))})(),()=>{w=!1}},[]),P.useEffect(()=>{Pg(e.equipped.cards);const w=Vs(e.equipped.theme),S=document.documentElement;for(const z of["--wood-dark","--wood","--wood-light","--paper","--paper-dim","--lamp","--lamp-dim","--accent"])S.style.removeProperty(z);for(const[z,I]of Object.entries(w.vars))S.style.setProperty(z,I)},[e.equipped.cards,e.equipped.theme]),P.useEffect(()=>{o&&Hs(e)},[e,o]),P.useEffect(()=>{},[]);const x=P.useMemo(()=>J0(e.recentGames),[e.recentGames]),C=P.useMemo(()=>lg(e),[e]),N=P.useCallback(()=>d({name:"home"}),[]),m=P.useCallback(w=>{const S=of(w),z=[{id:"world",when:!0},{id:"prologue",when:!0},{id:"season_summer",when:xi(ur("sua"),S)},{id:"season_autumn",when:xi(ur("yerin"),S)},{id:"season_winter",when:xi(ur("yoon"),S)}];for(const I of z){if(!I.when||w.seenScenes.includes(I.id))continue;const A=Vl(I.id);if(A)return A}return null},[]),p=P.useCallback(w=>{const S=m(w);d(S?{name:"novel",scene:S,tenant:S.id==="prologue"?ur("eunseo"):null,after:"home"}:{name:"home"})},[m]),y=P.useCallback(()=>p(e),[p,e]),$=P.useCallback(w=>{const S=e.tenants[w.id],z=nf(w);if(e.points<z){alert(`${w.name}와(과) 붙으려면 ${z.toLocaleString()}P 는 들고 있어야 합니다.
점당 ${w.rate}P 라 크게 지면 그만큼 물어줘야 하거든요.`);return}const I=Math.min(10,(S?.clearedStage??0)+1);d({name:"preMatch",tenant:w,stage:I})},[e]),E=P.useCallback((w,S,z)=>{const I=z.won?ef(w,S):0,A=rg({won:z.won,draw:z.draw,settlementTotal:z.settlementTotal,rate:w.rate}),ge=eg(e,{tenantId:w.id,stage:S,won:z.won,payout:A,playerWentGo:z.playerWentGo,focus:z.focus,score:z.score},{reward:I});n(ge),h(rn=>({...rn,[w.id]:z.won?0:(rn[w.id]??0)+1}));const je=ge.tenants[w.id].clearedStage;z.won&&je===S?v({tenant:w,stage:S}):N()},[e,N]);P.useEffect(()=>{if(!g)return;const{tenant:w,stage:S}=g,z=w.events.find(A=>A.stage===S),I=z?Vl(z.scriptId):null;if(v(null),!I){N();return}d({name:"novel",scene:I,tenant:w,after:"home"})},[g,N]);const L=P.useCallback((w,S,z,I)=>{let A=ng(e,w.id,z.cg);if(A={...A,points:Math.max(0,A.points+z.pointDelta)},S&&z.affectionDelta!==0&&A.tenants[S.id]&&(A={...A,tenants:{...A.tenants,[S.id]:{...A.tenants[S.id],affection:Math.max(0,Math.min(100,A.tenants[S.id].affection+z.affectionDelta))}}}),n(A),I==="match"&&S){const ge=A.tenants[S.id],je=Math.min(10,(ge?.clearedStage??0)+1);d({name:"match",tenant:S,stage:je})}else p(A)},[e,p]);if(a.name==="title")return u.jsx("div",{className:"app",children:u.jsxs("div",{className:"screen title-screen",children:[u.jsx(gl,{bg:"maru",time:"night"}),u.jsxs("div",{className:"layer title-screen",style:{justifyContent:"center"},children:[u.jsx("div",{className:"title-logo",children:"하숙생 맞고"}),u.jsx("div",{className:"title-sub",children:"밤마다 마루에서, 열 번의 승부"}),u.jsxs("div",{className:"title-menu",children:[u.jsx("button",{className:"btn primary wide",onClick:y,children:e.stats.totalGames>0?"이어하기":"시작하기"}),u.jsx("button",{className:"btn wide",onClick:()=>d({name:"gallery"}),children:"도감"}),u.jsx("button",{className:"btn wide",onClick:()=>d({name:"settings"}),children:"설정"})]}),u.jsx("div",{style:{marginTop:18,display:"flex",gap:2},children:tn.slice(0,5).map(w=>u.jsx(Tn,{tenant:w,expression:"smile",style:{width:52,opacity:.85}},w.id))})]})]})});if(a.name==="novel")return u.jsx("div",{className:"app",children:u.jsx(Nu,{scene:a.scene,tenant:a.tenant,textSpeed:e.settings.textSpeed,onDone:w=>L(a.scene,a.tenant,w,a.after)},a.scene.id)});if(a.name==="preMatch"){const w=e.tenants[a.tenant.id],S=$m(a.tenant,w?.affection??0,a.stage);return u.jsx("div",{className:"app",children:u.jsx(Nu,{scene:S,tenant:a.tenant,textSpeed:e.settings.textSpeed,onDone:()=>d({name:"match",tenant:a.tenant,stage:a.stage})},S.id)})}if(a.name==="match"){const w=e.tenants[a.tenant.id];return u.jsx("div",{className:"app wide",children:u.jsx(om,{tenant:a.tenant,stage:a.stage,affection:w?.affection??0,rules:e.settings.rules,profile:x,losingStreak:f[a.tenant.id]??0,points:e.points,onFinish:S=>E(a.tenant,a.stage,S),onQuit:N},`${a.tenant.id}-${a.stage}-${e.stats.totalGames}`)})}return a.name==="shop"?u.jsx("div",{className:"app",children:u.jsx(vm,{data:e,onChange:n,onBack:()=>d(e.stats.totalGames>0?{name:"home"}:{name:"title"})})}):a.name==="gallery"?u.jsx("div",{className:"app",children:u.jsx(Ig,{data:e,onBack:()=>d(e.stats.totalGames>0?{name:"home"}:{name:"title"})})}):a.name==="settings"?u.jsx("div",{className:"app",children:u.jsx(ym,{data:e,device:t,onChange:n,onReset:()=>{n(X0()),d({name:"title"})},onBack:()=>d(e.stats.totalGames>0?{name:"home"}:{name:"title"})})}):u.jsxs("div",{className:"app",children:[i&&u.jsxs("div",{className:"hint-box",style:{position:"absolute",top:60,left:12,right:12,zIndex:20,cursor:"pointer"},onClick:()=>l(!1),children:["브라우저 저장소가 비워져 있어 ",u.jsx("b",{children:"백업 사본에서 진행도를 되살렸습니다."})," 설정 → 진행도 백업에서 코드를 받아 두시면 더 안전합니다. (탭하여 닫기)"]}),u.jsx(Tg,{data:e,onPick:$,onGallery:()=>d({name:"gallery"}),onShop:()=>d({name:"shop"}),onSettings:()=>d({name:"settings"}),onAllowance:()=>n(w=>ig(w)),allClearedFlag:C,onHidden:()=>{const w=Vl("hidden_ending");w&&d({name:"novel",scene:w,tenant:null,after:"home"})}})]})}function xm(){const e=()=>{const n=window.visualViewport?.height??window.innerHeight;document.documentElement.style.setProperty("--app-h",`${n}px`)};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",()=>setTimeout(e,200),{passive:!0}),window.visualViewport?.addEventListener("resize",e,{passive:!0}),window.visualViewport?.addEventListener("scroll",e,{passive:!0})}function Sm(){let e=0;document.addEventListener("touchstart",n=>{e=n.touches[0]?.clientY??0},{passive:!0}),document.addEventListener("touchmove",n=>{if(n.touches.length>1||(n.touches[0]?.clientY??0)-e<=0)return;let i=n.target;for(;i&&i!==document.body;){const l=getComputedStyle(i);if(/(auto|scroll)/.test(l.overflowY)&&i.scrollHeight>i.clientHeight&&i.scrollTop>0)return;i=i.parentElement}n.cancelable&&n.preventDefault()},{passive:!1})}function Cm(){let e=0;document.addEventListener("touchend",n=>{const t=Date.now();t-e<320&&n.cancelable&&n.preventDefault(),e=t},{passive:!1}),document.addEventListener("gesturestart",n=>n.preventDefault())}function bm(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{const e="./";navigator.serviceWorker.register(`${e}sw.js`,{scope:e}).catch(()=>{})})}function jm(){const e=typeof navigator<"u"?navigator.userAgent:"",n=typeof window<"u"&&window.matchMedia?.("(display-mode: standalone)").matches||navigator.standalone===!0;return{inAppBrowser:/KAKAOTALK|Line\/|FBAN|FBAV|Instagram|NAVER|DaumApps/i.test(e),standalone:!!n,isIOS:/iPhone|iPad|iPod/i.test(e),isAndroid:/Android/i.test(e),landscape:typeof window<"u"&&window.innerWidth>window.innerHeight}}function _m(){xm(),Sm(),Cm(),bm();const e=jm();return document.documentElement.dataset.inapp=String(e.inAppBrowser),document.documentElement.dataset.standalone=String(e.standalone),e}_m();Gd(document.getElementById("root")).render(u.jsx(Bf.StrictMode,{children:u.jsx(km,{})}));
