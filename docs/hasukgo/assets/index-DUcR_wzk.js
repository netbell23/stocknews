(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function Ff(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lu={exports:{}},Ll={},iu={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sr=Symbol.for("react.element"),Uf=Symbol.for("react.portal"),Vf=Symbol.for("react.fragment"),Gf=Symbol.for("react.strict_mode"),Hf=Symbol.for("react.profiler"),Wf=Symbol.for("react.provider"),Qf=Symbol.for("react.context"),qf=Symbol.for("react.forward_ref"),Kf=Symbol.for("react.suspense"),Yf=Symbol.for("react.memo"),Xf=Symbol.for("react.lazy"),Ps=Symbol.iterator;function Zf(e){return e===null||typeof e!="object"?null:(e=Ps&&e[Ps]||e["@@iterator"],typeof e=="function"?e:null)}var ou={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},su=Object.assign,au={};function Nt(e,n,t){this.props=e,this.context=n,this.refs=au,this.updater=t||ou}Nt.prototype.isReactComponent={};Nt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Nt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function uu(){}uu.prototype=Nt.prototype;function No(e,n,t){this.props=e,this.context=n,this.refs=au,this.updater=t||ou}var bo=No.prototype=new uu;bo.constructor=No;su(bo,Nt.prototype);bo.isPureReactComponent=!0;var Ds=Array.isArray,cu=Object.prototype.hasOwnProperty,Mo={current:null},fu={key:!0,ref:!0,__self:!0,__source:!0};function du(e,n,t){var r,l={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)cu.call(n,r)&&!fu.hasOwnProperty(r)&&(l[r]=n[r]);var a=arguments.length-2;if(a===1)l.children=t;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];l.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Sr,type:e,key:i,ref:o,props:l,_owner:Mo.current}}function Jf(e,n){return{$$typeof:Sr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Po(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sr}function ed(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Is=/\/+/g;function ni(e,n){return typeof e=="object"&&e!==null&&e.key!=null?ed(""+e.key):n.toString(36)}function Xr(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Sr:case Uf:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+ni(o,0):r,Ds(l)?(t="",e!=null&&(t=e.replace(Is,"$&/")+"/"),Xr(l,n,t,"",function(c){return c})):l!=null&&(Po(l)&&(l=Jf(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Is,"$&/")+"/")+e)),n.push(l)),1;if(o=0,r=r===""?".":r+":",Ds(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+ni(i,a);o+=Xr(i,n,t,s,l)}else if(s=Zf(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+ni(i,a++),o+=Xr(i,n,t,s,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function Mr(e,n,t){if(e==null)return e;var r=[],l=0;return Xr(e,r,"","",function(i){return n.call(t,i,l++)}),r}function nd(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var fe={current:null},Zr={transition:null},td={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:Zr,ReactCurrentOwner:Mo};function hu(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:Mr,forEach:function(e,n,t){Mr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Mr(e,function(){n++}),n},toArray:function(e){return Mr(e,function(n){return n})||[]},only:function(e){if(!Po(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=Nt;L.Fragment=Vf;L.Profiler=Hf;L.PureComponent=No;L.StrictMode=Gf;L.Suspense=Kf;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=td;L.act=hu;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=su({},e.props),l=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=Mo.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in n)cu.call(n,s)&&!fu.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&a!==void 0?a[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Sr,type:e.type,key:l,ref:i,props:r,_owner:o}};L.createContext=function(e){return e={$$typeof:Qf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wf,_context:e},e.Consumer=e};L.createElement=du;L.createFactory=function(e){var n=du.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:qf,render:e}};L.isValidElement=Po;L.lazy=function(e){return{$$typeof:Xf,_payload:{_status:-1,_result:e},_init:nd}};L.memo=function(e,n){return{$$typeof:Yf,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=Zr.transition;Zr.transition={};try{e()}finally{Zr.transition=n}};L.unstable_act=hu;L.useCallback=function(e,n){return fe.current.useCallback(e,n)};L.useContext=function(e){return fe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return fe.current.useDeferredValue(e)};L.useEffect=function(e,n){return fe.current.useEffect(e,n)};L.useId=function(){return fe.current.useId()};L.useImperativeHandle=function(e,n,t){return fe.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return fe.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return fe.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return fe.current.useMemo(e,n)};L.useReducer=function(e,n,t){return fe.current.useReducer(e,n,t)};L.useRef=function(e){return fe.current.useRef(e)};L.useState=function(e){return fe.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return fe.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return fe.current.useTransition()};L.version="18.3.1";iu.exports=L;var E=iu.exports;const rd=Ff(E);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld=E,id=Symbol.for("react.element"),od=Symbol.for("react.fragment"),sd=Object.prototype.hasOwnProperty,ad=ld.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ud={key:!0,ref:!0,__self:!0,__source:!0};function pu(e,n,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)sd.call(n,r)&&!ud.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:id,type:e,key:i,ref:o,props:l,_owner:ad.current}}Ll.Fragment=od;Ll.jsx=pu;Ll.jsxs=pu;lu.exports=Ll;var u=lu.exports,gu={exports:{}},Ne={},mu={exports:{}},yu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(_,N){var z=_.length;_.push(N);e:for(;0<z;){var R=z-1>>>1,A=_[R];if(0<l(A,N))_[R]=N,_[z]=A,z=R;else break e}}function t(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var N=_[0],z=_.pop();if(z!==N){_[0]=z;e:for(var R=0,A=_.length,zn=A>>>1;R<zn;){var Tn=2*(R+1)-1,ei=_[Tn],Ln=Tn+1,br=_[Ln];if(0>l(ei,z))Ln<A&&0>l(br,ei)?(_[R]=br,_[Ln]=z,R=Ln):(_[R]=ei,_[Tn]=z,R=Tn);else if(Ln<A&&0>l(br,z))_[R]=br,_[Ln]=z,R=Ln;else break e}}return N}function l(_,N){var z=_.sortIndex-N.sortIndex;return z!==0?z:_.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],c=[],f=1,m=null,h=3,y=!1,S=!1,w=!1,I=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(_){for(var N=t(c);N!==null;){if(N.callback===null)r(c);else if(N.startTime<=_)r(c),N.sortIndex=N.expirationTime,n(s,N);else break;N=t(c)}}function k(_){if(w=!1,g(_),!S)if(t(s)!==null)S=!0,Dt(j);else{var N=t(c);N!==null&&Nr(k,N.startTime-_)}}function j(_,N){S=!1,w&&(w=!1,p(x),x=-1),y=!0;var z=h;try{for(g(N),m=t(s);m!==null&&(!(m.expirationTime>N)||_&&!$());){var R=m.callback;if(typeof R=="function"){m.callback=null,h=m.priorityLevel;var A=R(m.expirationTime<=N);N=e.unstable_now(),typeof A=="function"?m.callback=A:m===t(s)&&r(s),g(N)}else r(s);m=t(s)}if(m!==null)var zn=!0;else{var Tn=t(c);Tn!==null&&Nr(k,Tn.startTime-N),zn=!1}return zn}finally{m=null,h=z,y=!1}}var b=!1,v=null,x=-1,D=5,P=-1;function $(){return!(e.unstable_now()-P<D)}function he(){if(v!==null){var _=e.unstable_now();P=_;var N=!0;try{N=v(!0,_)}finally{N?pe():(b=!1,v=null)}}else b=!1}var pe;if(typeof d=="function")pe=function(){d(he)};else if(typeof MessageChannel<"u"){var Er=new MessageChannel,Jl=Er.port2;Er.port1.onmessage=he,pe=function(){Jl.postMessage(null)}}else pe=function(){I(he,0)};function Dt(_){v=_,b||(b=!0,pe())}function Nr(_,N){x=I(function(){_(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){S||y||(S=!0,Dt(j))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var z=h;h=N;try{return _()}finally{h=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,N){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var z=h;h=_;try{return N()}finally{h=z}},e.unstable_scheduleCallback=function(_,N,z){var R=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?R+z:R):z=R,_){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=z+A,_={id:f++,callback:N,priorityLevel:_,startTime:z,expirationTime:A,sortIndex:-1},z>R?(_.sortIndex=z,n(c,_),t(s)===null&&_===t(c)&&(w?(p(x),x=-1):w=!0,Nr(k,z-R))):(_.sortIndex=A,n(s,_),S||y||(S=!0,Dt(j))),_},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(_){var N=h;return function(){var z=h;h=N;try{return _.apply(this,arguments)}finally{h=z}}}})(yu);mu.exports=yu;var cd=mu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fd=E,Ee=cd;function C(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vu=new Set,lr={};function Xn(e,n){wt(e,n),wt(e+"Capture",n)}function wt(e,n){for(lr[e]=n,e=0;e<n.length;e++)vu.add(n[e])}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ni=Object.prototype.hasOwnProperty,dd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zs={},Ts={};function hd(e){return Ni.call(Ts,e)?!0:Ni.call(zs,e)?!1:dd.test(e)?Ts[e]=!0:(zs[e]=!0,!1)}function pd(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gd(e,n,t,r){if(n===null||typeof n>"u"||pd(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function de(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];le[n]=new de(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Do=/[\-:]([a-z])/g;function Io(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Do,Io);le[n]=new de(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Do,Io);le[n]=new de(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Do,Io);le[n]=new de(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function zo(e,n,t,r){var l=le.hasOwnProperty(n)?le[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(gd(n,t,l,r)&&(t=null),r||l===null?hd(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var an=fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pr=Symbol.for("react.element"),et=Symbol.for("react.portal"),nt=Symbol.for("react.fragment"),To=Symbol.for("react.strict_mode"),bi=Symbol.for("react.profiler"),wu=Symbol.for("react.provider"),ku=Symbol.for("react.context"),Lo=Symbol.for("react.forward_ref"),Mi=Symbol.for("react.suspense"),Pi=Symbol.for("react.suspense_list"),Bo=Symbol.for("react.memo"),fn=Symbol.for("react.lazy"),xu=Symbol.for("react.offscreen"),Ls=Symbol.iterator;function It(e){return e===null||typeof e!="object"?null:(e=Ls&&e[Ls]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,ti;function Vt(e){if(ti===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ti=n&&n[1]||""}return`
`+ti+e}var ri=!1;function li(e,n){if(!e||ri)return"";ri=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var s=`
`+l[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{ri=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Vt(e):""}function md(e){switch(e.tag){case 5:return Vt(e.type);case 16:return Vt("Lazy");case 13:return Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 2:case 15:return e=li(e.type,!1),e;case 11:return e=li(e.type.render,!1),e;case 1:return e=li(e.type,!0),e;default:return""}}function Di(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nt:return"Fragment";case et:return"Portal";case bi:return"Profiler";case To:return"StrictMode";case Mi:return"Suspense";case Pi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ku:return(e.displayName||"Context")+".Consumer";case wu:return(e._context.displayName||"Context")+".Provider";case Lo:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Bo:return n=e.displayName||null,n!==null?n:Di(e.type)||"Memo";case fn:n=e._payload,e=e._init;try{return Di(e(n))}catch{}}return null}function yd(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Di(n);case 8:return n===To?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function En(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Su(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function vd(e){var n=Su(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Dr(e){e._valueTracker||(e._valueTracker=vd(e))}function Cu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Su(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function cl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ii(e,n){var t=n.checked;return q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Bs(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=En(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function _u(e,n){n=n.checked,n!=null&&zo(e,"checked",n,!1)}function zi(e,n){_u(e,n);var t=En(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ti(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ti(e,n.type,En(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function As(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ti(e,n,t){(n!=="number"||cl(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Gt=Array.isArray;function ht(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+En(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function Li(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(C(91));return q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Rs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(C(92));if(Gt(t)){if(1<t.length)throw Error(C(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:En(t)}}function ju(e,n){var t=En(n.value),r=En(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Os(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function $u(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?$u(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ir,Eu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ir=Ir||document.createElement("div"),Ir.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ir.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ir(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Kt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wd=["Webkit","ms","Moz","O"];Object.keys(Kt).forEach(function(e){wd.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Kt[n]=Kt[e]})});function Nu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Kt.hasOwnProperty(e)&&Kt[e]?(""+n).trim():n+"px"}function bu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=Nu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var kd=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ai(e,n){if(n){if(kd[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(C(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(C(61))}if(n.style!=null&&typeof n.style!="object")throw Error(C(62))}}function Ri(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=null;function Ao(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fi=null,pt=null,gt=null;function Fs(e){if(e=jr(e)){if(typeof Fi!="function")throw Error(C(280));var n=e.stateNode;n&&(n=Fl(n),Fi(e.stateNode,e.type,n))}}function Mu(e){pt?gt?gt.push(e):gt=[e]:pt=e}function Pu(){if(pt){var e=pt,n=gt;if(gt=pt=null,Fs(e),n)for(e=0;e<n.length;e++)Fs(n[e])}}function Du(e,n){return e(n)}function Iu(){}var ii=!1;function zu(e,n,t){if(ii)return e(n,t);ii=!0;try{return Du(e,n,t)}finally{ii=!1,(pt!==null||gt!==null)&&(Iu(),Pu())}}function or(e,n){var t=e.stateNode;if(t===null)return null;var r=Fl(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(C(231,n,typeof t));return t}var Ui=!1;if(rn)try{var zt={};Object.defineProperty(zt,"passive",{get:function(){Ui=!0}}),window.addEventListener("test",zt,zt),window.removeEventListener("test",zt,zt)}catch{Ui=!1}function xd(e,n,t,r,l,i,o,a,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(f){this.onError(f)}}var Yt=!1,fl=null,dl=!1,Vi=null,Sd={onError:function(e){Yt=!0,fl=e}};function Cd(e,n,t,r,l,i,o,a,s){Yt=!1,fl=null,xd.apply(Sd,arguments)}function _d(e,n,t,r,l,i,o,a,s){if(Cd.apply(this,arguments),Yt){if(Yt){var c=fl;Yt=!1,fl=null}else throw Error(C(198));dl||(dl=!0,Vi=c)}}function Zn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Tu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Us(e){if(Zn(e)!==e)throw Error(C(188))}function jd(e){var n=e.alternate;if(!n){if(n=Zn(e),n===null)throw Error(C(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Us(l),e;if(i===r)return Us(l),n;i=i.sibling}throw Error(C(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===t){o=!0,t=l,r=i;break}if(a===r){o=!0,r=l,t=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===t){o=!0,t=i,r=l;break}if(a===r){o=!0,r=i,t=l;break}a=a.sibling}if(!o)throw Error(C(189))}}if(t.alternate!==r)throw Error(C(190))}if(t.tag!==3)throw Error(C(188));return t.stateNode.current===t?e:n}function Lu(e){return e=jd(e),e!==null?Bu(e):null}function Bu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Bu(e);if(n!==null)return n;e=e.sibling}return null}var Au=Ee.unstable_scheduleCallback,Vs=Ee.unstable_cancelCallback,$d=Ee.unstable_shouldYield,Ed=Ee.unstable_requestPaint,Y=Ee.unstable_now,Nd=Ee.unstable_getCurrentPriorityLevel,Ro=Ee.unstable_ImmediatePriority,Ru=Ee.unstable_UserBlockingPriority,hl=Ee.unstable_NormalPriority,bd=Ee.unstable_LowPriority,Ou=Ee.unstable_IdlePriority,Bl=null,Ke=null;function Md(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Bl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:Id,Pd=Math.log,Dd=Math.LN2;function Id(e){return e>>>=0,e===0?32:31-(Pd(e)/Dd|0)|0}var zr=64,Tr=4194304;function Ht(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pl(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var a=o&~l;a!==0?r=Ht(a):(i&=o,i!==0&&(r=Ht(i)))}else o=t&~l,o!==0?r=Ht(o):i!==0&&(r=Ht(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Ue(n),l=1<<t,r|=e[t],n&=~l;return r}function zd(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Td(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ue(i),a=1<<o,s=l[o];s===-1?(!(a&t)||a&r)&&(l[o]=zd(a,n)):s<=n&&(e.expiredLanes|=a),i&=~a}}function Gi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fu(){var e=zr;return zr<<=1,!(zr&4194240)&&(zr=64),e}function oi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Cr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ue(n),e[n]=t}function Ld(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Ue(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function Oo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Ue(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var O=0;function Uu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vu,Fo,Gu,Hu,Wu,Hi=!1,Lr=[],vn=null,wn=null,kn=null,sr=new Map,ar=new Map,hn=[],Bd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gs(e,n){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":sr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ar.delete(n.pointerId)}}function Tt(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=jr(n),n!==null&&Fo(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function Ad(e,n,t,r,l){switch(n){case"focusin":return vn=Tt(vn,e,n,t,r,l),!0;case"dragenter":return wn=Tt(wn,e,n,t,r,l),!0;case"mouseover":return kn=Tt(kn,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return sr.set(i,Tt(sr.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,ar.set(i,Tt(ar.get(i)||null,e,n,t,r,l)),!0}return!1}function Qu(e){var n=Fn(e.target);if(n!==null){var t=Zn(n);if(t!==null){if(n=t.tag,n===13){if(n=Tu(t),n!==null){e.blockedOn=n,Wu(e.priority,function(){Gu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Wi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Oi=r,t.target.dispatchEvent(r),Oi=null}else return n=jr(t),n!==null&&Fo(n),e.blockedOn=t,!1;n.shift()}return!0}function Hs(e,n,t){Jr(e)&&t.delete(n)}function Rd(){Hi=!1,vn!==null&&Jr(vn)&&(vn=null),wn!==null&&Jr(wn)&&(wn=null),kn!==null&&Jr(kn)&&(kn=null),sr.forEach(Hs),ar.forEach(Hs)}function Lt(e,n){e.blockedOn===n&&(e.blockedOn=null,Hi||(Hi=!0,Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority,Rd)))}function ur(e){function n(l){return Lt(l,e)}if(0<Lr.length){Lt(Lr[0],e);for(var t=1;t<Lr.length;t++){var r=Lr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(vn!==null&&Lt(vn,e),wn!==null&&Lt(wn,e),kn!==null&&Lt(kn,e),sr.forEach(n),ar.forEach(n),t=0;t<hn.length;t++)r=hn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<hn.length&&(t=hn[0],t.blockedOn===null);)Qu(t),t.blockedOn===null&&hn.shift()}var mt=an.ReactCurrentBatchConfig,gl=!0;function Od(e,n,t,r){var l=O,i=mt.transition;mt.transition=null;try{O=1,Uo(e,n,t,r)}finally{O=l,mt.transition=i}}function Fd(e,n,t,r){var l=O,i=mt.transition;mt.transition=null;try{O=4,Uo(e,n,t,r)}finally{O=l,mt.transition=i}}function Uo(e,n,t,r){if(gl){var l=Wi(e,n,t,r);if(l===null)mi(e,n,r,ml,t),Gs(e,r);else if(Ad(l,e,n,t,r))r.stopPropagation();else if(Gs(e,r),n&4&&-1<Bd.indexOf(e)){for(;l!==null;){var i=jr(l);if(i!==null&&Vu(i),i=Wi(e,n,t,r),i===null&&mi(e,n,r,ml,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else mi(e,n,r,null,t)}}var ml=null;function Wi(e,n,t,r){if(ml=null,e=Ao(r),e=Fn(e),e!==null)if(n=Zn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Tu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ml=e,null}function qu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nd()){case Ro:return 1;case Ru:return 4;case hl:case bd:return 16;case Ou:return 536870912;default:return 16}default:return 16}}var gn=null,Vo=null,el=null;function Ku(){if(el)return el;var e,n=Vo,t=n.length,r,l="value"in gn?gn.value:gn.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return el=l.slice(e,1<r?1-r:void 0)}function nl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Br(){return!0}function Ws(){return!1}function be(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Br:Ws,this.isPropagationStopped=Ws,this}return q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Br)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Br)},persist:function(){},isPersistent:Br}),n}var bt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=be(bt),_r=q({},bt,{view:0,detail:0}),Ud=be(_r),si,ai,Bt,Al=q({},_r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ho,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bt&&(Bt&&e.type==="mousemove"?(si=e.screenX-Bt.screenX,ai=e.screenY-Bt.screenY):ai=si=0,Bt=e),si)},movementY:function(e){return"movementY"in e?e.movementY:ai}}),Qs=be(Al),Vd=q({},Al,{dataTransfer:0}),Gd=be(Vd),Hd=q({},_r,{relatedTarget:0}),ui=be(Hd),Wd=q({},bt,{animationName:0,elapsedTime:0,pseudoElement:0}),Qd=be(Wd),qd=q({},bt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kd=be(qd),Yd=q({},bt,{data:0}),qs=be(Yd),Xd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Jd[e])?!!n[e]:!1}function Ho(){return eh}var nh=q({},_r,{key:function(e){if(e.key){var n=Xd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=nl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ho,charCode:function(e){return e.type==="keypress"?nl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?nl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),th=be(nh),rh=q({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ks=be(rh),lh=q({},_r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ho}),ih=be(lh),oh=q({},bt,{propertyName:0,elapsedTime:0,pseudoElement:0}),sh=be(oh),ah=q({},Al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uh=be(ah),ch=[9,13,27,32],Wo=rn&&"CompositionEvent"in window,Xt=null;rn&&"documentMode"in document&&(Xt=document.documentMode);var fh=rn&&"TextEvent"in window&&!Xt,Yu=rn&&(!Wo||Xt&&8<Xt&&11>=Xt),Ys=" ",Xs=!1;function Xu(e,n){switch(e){case"keyup":return ch.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tt=!1;function dh(e,n){switch(e){case"compositionend":return Zu(n);case"keypress":return n.which!==32?null:(Xs=!0,Ys);case"textInput":return e=n.data,e===Ys&&Xs?null:e;default:return null}}function hh(e,n){if(tt)return e==="compositionend"||!Wo&&Xu(e,n)?(e=Ku(),el=Vo=gn=null,tt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yu&&n.locale!=="ko"?null:n.data;default:return null}}var ph={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ph[e.type]:n==="textarea"}function Ju(e,n,t,r){Mu(r),n=yl(n,"onChange"),0<n.length&&(t=new Go("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Zt=null,cr=null;function gh(e){cc(e,0)}function Rl(e){var n=it(e);if(Cu(n))return e}function mh(e,n){if(e==="change")return n}var ec=!1;if(rn){var ci;if(rn){var fi="oninput"in document;if(!fi){var Js=document.createElement("div");Js.setAttribute("oninput","return;"),fi=typeof Js.oninput=="function"}ci=fi}else ci=!1;ec=ci&&(!document.documentMode||9<document.documentMode)}function ea(){Zt&&(Zt.detachEvent("onpropertychange",nc),cr=Zt=null)}function nc(e){if(e.propertyName==="value"&&Rl(cr)){var n=[];Ju(n,cr,e,Ao(e)),zu(gh,n)}}function yh(e,n,t){e==="focusin"?(ea(),Zt=n,cr=t,Zt.attachEvent("onpropertychange",nc)):e==="focusout"&&ea()}function vh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Rl(cr)}function wh(e,n){if(e==="click")return Rl(n)}function kh(e,n){if(e==="input"||e==="change")return Rl(n)}function xh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ge=typeof Object.is=="function"?Object.is:xh;function fr(e,n){if(Ge(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Ni.call(n,l)||!Ge(e[l],n[l]))return!1}return!0}function na(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ta(e,n){var t=na(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=na(t)}}function tc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?tc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function rc(){for(var e=window,n=cl();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=cl(e.document)}return n}function Qo(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Sh(e){var n=rc(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&tc(t.ownerDocument.documentElement,t)){if(r!==null&&Qo(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=ta(t,i);var o=ta(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ch=rn&&"documentMode"in document&&11>=document.documentMode,rt=null,Qi=null,Jt=null,qi=!1;function ra(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;qi||rt==null||rt!==cl(r)||(r=rt,"selectionStart"in r&&Qo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jt&&fr(Jt,r)||(Jt=r,r=yl(Qi,"onSelect"),0<r.length&&(n=new Go("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=rt)))}function Ar(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var lt={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionend:Ar("Transition","TransitionEnd")},di={},lc={};rn&&(lc=document.createElement("div").style,"AnimationEvent"in window||(delete lt.animationend.animation,delete lt.animationiteration.animation,delete lt.animationstart.animation),"TransitionEvent"in window||delete lt.transitionend.transition);function Ol(e){if(di[e])return di[e];if(!lt[e])return e;var n=lt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in lc)return di[e]=n[t];return e}var ic=Ol("animationend"),oc=Ol("animationiteration"),sc=Ol("animationstart"),ac=Ol("transitionend"),uc=new Map,la="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,n){uc.set(e,n),Xn(n,[e])}for(var hi=0;hi<la.length;hi++){var pi=la[hi],_h=pi.toLowerCase(),jh=pi[0].toUpperCase()+pi.slice(1);Pn(_h,"on"+jh)}Pn(ic,"onAnimationEnd");Pn(oc,"onAnimationIteration");Pn(sc,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(ac,"onTransitionEnd");wt("onMouseEnter",["mouseout","mouseover"]);wt("onMouseLeave",["mouseout","mouseover"]);wt("onPointerEnter",["pointerout","pointerover"]);wt("onPointerLeave",["pointerout","pointerover"]);Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$h=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wt));function ia(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,_d(r,n,void 0,e),e.currentTarget=null}function cc(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&l.isPropagationStopped())break e;ia(l,a,c),i=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&l.isPropagationStopped())break e;ia(l,a,c),i=s}}}if(dl)throw e=Vi,dl=!1,Vi=null,e}function U(e,n){var t=n[Ji];t===void 0&&(t=n[Ji]=new Set);var r=e+"__bubble";t.has(r)||(fc(n,e,2,!1),t.add(r))}function gi(e,n,t){var r=0;n&&(r|=4),fc(t,e,r,n)}var Rr="_reactListening"+Math.random().toString(36).slice(2);function dr(e){if(!e[Rr]){e[Rr]=!0,vu.forEach(function(t){t!=="selectionchange"&&($h.has(t)||gi(t,!1,e),gi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Rr]||(n[Rr]=!0,gi("selectionchange",!1,n))}}function fc(e,n,t,r){switch(qu(n)){case 1:var l=Od;break;case 4:l=Fd;break;default:l=Uo}t=l.bind(null,n,t,e),l=void 0,!Ui||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function mi(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===l||s.nodeType===8&&s.parentNode===l))return;o=o.return}for(;a!==null;){if(o=Fn(a),o===null)return;if(s=o.tag,s===5||s===6){r=i=o;continue e}a=a.parentNode}}r=r.return}zu(function(){var c=i,f=Ao(t),m=[];e:{var h=uc.get(e);if(h!==void 0){var y=Go,S=e;switch(e){case"keypress":if(nl(t)===0)break e;case"keydown":case"keyup":y=th;break;case"focusin":S="focus",y=ui;break;case"focusout":S="blur",y=ui;break;case"beforeblur":case"afterblur":y=ui;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Gd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=ih;break;case ic:case oc:case sc:y=Qd;break;case ac:y=sh;break;case"scroll":y=Ud;break;case"wheel":y=uh;break;case"copy":case"cut":case"paste":y=Kd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ks}var w=(n&4)!==0,I=!w&&e==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var d=c,g;d!==null;){g=d;var k=g.stateNode;if(g.tag===5&&k!==null&&(g=k,p!==null&&(k=or(d,p),k!=null&&w.push(hr(d,k,g)))),I)break;d=d.return}0<w.length&&(h=new y(h,S,null,t,f),m.push({event:h,listeners:w}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&t!==Oi&&(S=t.relatedTarget||t.fromElement)&&(Fn(S)||S[ln]))break e;if((y||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,y?(S=t.relatedTarget||t.toElement,y=c,S=S?Fn(S):null,S!==null&&(I=Zn(S),S!==I||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=c),y!==S)){if(w=Qs,k="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ks,k="onPointerLeave",p="onPointerEnter",d="pointer"),I=y==null?h:it(y),g=S==null?h:it(S),h=new w(k,d+"leave",y,t,f),h.target=I,h.relatedTarget=g,k=null,Fn(f)===c&&(w=new w(p,d+"enter",S,t,f),w.target=g,w.relatedTarget=I,k=w),I=k,y&&S)n:{for(w=y,p=S,d=0,g=w;g;g=Jn(g))d++;for(g=0,k=p;k;k=Jn(k))g++;for(;0<d-g;)w=Jn(w),d--;for(;0<g-d;)p=Jn(p),g--;for(;d--;){if(w===p||p!==null&&w===p.alternate)break n;w=Jn(w),p=Jn(p)}w=null}else w=null;y!==null&&oa(m,h,y,w,!1),S!==null&&I!==null&&oa(m,I,S,w,!0)}}e:{if(h=c?it(c):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var j=mh;else if(Zs(h))if(ec)j=kh;else{j=vh;var b=yh}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(j=wh);if(j&&(j=j(e,c))){Ju(m,j,t,f);break e}b&&b(e,h,c),e==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Ti(h,"number",h.value)}switch(b=c?it(c):window,e){case"focusin":(Zs(b)||b.contentEditable==="true")&&(rt=b,Qi=c,Jt=null);break;case"focusout":Jt=Qi=rt=null;break;case"mousedown":qi=!0;break;case"contextmenu":case"mouseup":case"dragend":qi=!1,ra(m,t,f);break;case"selectionchange":if(Ch)break;case"keydown":case"keyup":ra(m,t,f)}var v;if(Wo)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else tt?Xu(e,t)&&(x="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(x="onCompositionStart");x&&(Yu&&t.locale!=="ko"&&(tt||x!=="onCompositionStart"?x==="onCompositionEnd"&&tt&&(v=Ku()):(gn=f,Vo="value"in gn?gn.value:gn.textContent,tt=!0)),b=yl(c,x),0<b.length&&(x=new qs(x,e,null,t,f),m.push({event:x,listeners:b}),v?x.data=v:(v=Zu(t),v!==null&&(x.data=v)))),(v=fh?dh(e,t):hh(e,t))&&(c=yl(c,"onBeforeInput"),0<c.length&&(f=new qs("onBeforeInput","beforeinput",null,t,f),m.push({event:f,listeners:c}),f.data=v))}cc(m,n)})}function hr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function yl(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=or(e,t),i!=null&&r.unshift(hr(e,i,l)),i=or(e,n),i!=null&&r.push(hr(e,i,l))),e=e.return}return r}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function oa(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var a=t,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,l?(s=or(t,i),s!=null&&o.unshift(hr(t,s,a))):l||(s=or(t,i),s!=null&&o.push(hr(t,s,a)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Eh=/\r\n?/g,Nh=/\u0000|\uFFFD/g;function sa(e){return(typeof e=="string"?e:""+e).replace(Eh,`
`).replace(Nh,"")}function Or(e,n,t){if(n=sa(n),sa(e)!==n&&t)throw Error(C(425))}function vl(){}var Ki=null,Yi=null;function Xi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zi=typeof setTimeout=="function"?setTimeout:void 0,bh=typeof clearTimeout=="function"?clearTimeout:void 0,aa=typeof Promise=="function"?Promise:void 0,Mh=typeof queueMicrotask=="function"?queueMicrotask:typeof aa<"u"?function(e){return aa.resolve(null).then(e).catch(Ph)}:Zi;function Ph(e){setTimeout(function(){throw e})}function yi(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),ur(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);ur(n)}function xn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ua(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Mt=Math.random().toString(36).slice(2),Qe="__reactFiber$"+Mt,pr="__reactProps$"+Mt,ln="__reactContainer$"+Mt,Ji="__reactEvents$"+Mt,Dh="__reactListeners$"+Mt,Ih="__reactHandles$"+Mt;function Fn(e){var n=e[Qe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[ln]||t[Qe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ua(e);e!==null;){if(t=e[Qe])return t;e=ua(e)}return n}e=t,t=e.parentNode}return null}function jr(e){return e=e[Qe]||e[ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function it(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Fl(e){return e[pr]||null}var eo=[],ot=-1;function Dn(e){return{current:e}}function V(e){0>ot||(e.current=eo[ot],eo[ot]=null,ot--)}function F(e,n){ot++,eo[ot]=e.current,e.current=n}var Nn={},ae=Dn(Nn),ye=Dn(!1),Wn=Nn;function kt(e,n){var t=e.type.contextTypes;if(!t)return Nn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function ve(e){return e=e.childContextTypes,e!=null}function wl(){V(ye),V(ae)}function ca(e,n,t){if(ae.current!==Nn)throw Error(C(168));F(ae,n),F(ye,t)}function dc(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(C(108,yd(e)||"Unknown",l));return q({},t,r)}function kl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Nn,Wn=ae.current,F(ae,e),F(ye,ye.current),!0}function fa(e,n,t){var r=e.stateNode;if(!r)throw Error(C(169));t?(e=dc(e,n,Wn),r.__reactInternalMemoizedMergedChildContext=e,V(ye),V(ae),F(ae,e)):V(ye),F(ye,t)}var Ze=null,Ul=!1,vi=!1;function hc(e){Ze===null?Ze=[e]:Ze.push(e)}function zh(e){Ul=!0,hc(e)}function In(){if(!vi&&Ze!==null){vi=!0;var e=0,n=O;try{var t=Ze;for(O=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Ze=null,Ul=!1}catch(l){throw Ze!==null&&(Ze=Ze.slice(e+1)),Au(Ro,In),l}finally{O=n,vi=!1}}return null}var st=[],at=0,xl=null,Sl=0,Pe=[],De=0,Qn=null,Je=1,en="";function An(e,n){st[at++]=Sl,st[at++]=xl,xl=e,Sl=n}function pc(e,n,t){Pe[De++]=Je,Pe[De++]=en,Pe[De++]=Qn,Qn=e;var r=Je;e=en;var l=32-Ue(r)-1;r&=~(1<<l),t+=1;var i=32-Ue(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Je=1<<32-Ue(n)+l|t<<l|r,en=i+e}else Je=1<<i|t<<l|r,en=e}function qo(e){e.return!==null&&(An(e,1),pc(e,1,0))}function Ko(e){for(;e===xl;)xl=st[--at],st[at]=null,Sl=st[--at],st[at]=null;for(;e===Qn;)Qn=Pe[--De],Pe[De]=null,en=Pe[--De],Pe[De]=null,Je=Pe[--De],Pe[De]=null}var $e=null,je=null,G=!1,Fe=null;function gc(e,n){var t=ze(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function da(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,$e=e,je=xn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,$e=e,je=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Qn!==null?{id:Je,overflow:en}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=ze(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,$e=e,je=null,!0):!1;default:return!1}}function no(e){return(e.mode&1)!==0&&(e.flags&128)===0}function to(e){if(G){var n=je;if(n){var t=n;if(!da(e,n)){if(no(e))throw Error(C(418));n=xn(t.nextSibling);var r=$e;n&&da(e,n)?gc(r,t):(e.flags=e.flags&-4097|2,G=!1,$e=e)}}else{if(no(e))throw Error(C(418));e.flags=e.flags&-4097|2,G=!1,$e=e}}}function ha(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function Fr(e){if(e!==$e)return!1;if(!G)return ha(e),G=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Xi(e.type,e.memoizedProps)),n&&(n=je)){if(no(e))throw mc(),Error(C(418));for(;n;)gc(e,n),n=xn(n.nextSibling)}if(ha(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){je=xn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}je=null}}else je=$e?xn(e.stateNode.nextSibling):null;return!0}function mc(){for(var e=je;e;)e=xn(e.nextSibling)}function xt(){je=$e=null,G=!1}function Yo(e){Fe===null?Fe=[e]:Fe.push(e)}var Th=an.ReactCurrentBatchConfig;function At(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(C(309));var r=t.stateNode}if(!r)throw Error(C(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(C(284));if(!t._owner)throw Error(C(290,e))}return e}function Ur(e,n){throw e=Object.prototype.toString.call(n),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function pa(e){var n=e._init;return n(e._payload)}function yc(e){function n(p,d){if(e){var g=p.deletions;g===null?(p.deletions=[d],p.flags|=16):g.push(d)}}function t(p,d){if(!e)return null;for(;d!==null;)n(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function l(p,d){return p=jn(p,d),p.index=0,p.sibling=null,p}function i(p,d,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<d?(p.flags|=2,d):g):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,d,g,k){return d===null||d.tag!==6?(d=ji(g,p.mode,k),d.return=p,d):(d=l(d,g),d.return=p,d)}function s(p,d,g,k){var j=g.type;return j===nt?f(p,d,g.props.children,k,g.key):d!==null&&(d.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===fn&&pa(j)===d.type)?(k=l(d,g.props),k.ref=At(p,d,g),k.return=p,k):(k=al(g.type,g.key,g.props,null,p.mode,k),k.ref=At(p,d,g),k.return=p,k)}function c(p,d,g,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=$i(g,p.mode,k),d.return=p,d):(d=l(d,g.children||[]),d.return=p,d)}function f(p,d,g,k,j){return d===null||d.tag!==7?(d=Hn(g,p.mode,k,j),d.return=p,d):(d=l(d,g),d.return=p,d)}function m(p,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ji(""+d,p.mode,g),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Pr:return g=al(d.type,d.key,d.props,null,p.mode,g),g.ref=At(p,null,d),g.return=p,g;case et:return d=$i(d,p.mode,g),d.return=p,d;case fn:var k=d._init;return m(p,k(d._payload),g)}if(Gt(d)||It(d))return d=Hn(d,p.mode,g,null),d.return=p,d;Ur(p,d)}return null}function h(p,d,g,k){var j=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return j!==null?null:a(p,d,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Pr:return g.key===j?s(p,d,g,k):null;case et:return g.key===j?c(p,d,g,k):null;case fn:return j=g._init,h(p,d,j(g._payload),k)}if(Gt(g)||It(g))return j!==null?null:f(p,d,g,k,null);Ur(p,g)}return null}function y(p,d,g,k,j){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(g)||null,a(d,p,""+k,j);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Pr:return p=p.get(k.key===null?g:k.key)||null,s(d,p,k,j);case et:return p=p.get(k.key===null?g:k.key)||null,c(d,p,k,j);case fn:var b=k._init;return y(p,d,g,b(k._payload),j)}if(Gt(k)||It(k))return p=p.get(g)||null,f(d,p,k,j,null);Ur(d,k)}return null}function S(p,d,g,k){for(var j=null,b=null,v=d,x=d=0,D=null;v!==null&&x<g.length;x++){v.index>x?(D=v,v=null):D=v.sibling;var P=h(p,v,g[x],k);if(P===null){v===null&&(v=D);break}e&&v&&P.alternate===null&&n(p,v),d=i(P,d,x),b===null?j=P:b.sibling=P,b=P,v=D}if(x===g.length)return t(p,v),G&&An(p,x),j;if(v===null){for(;x<g.length;x++)v=m(p,g[x],k),v!==null&&(d=i(v,d,x),b===null?j=v:b.sibling=v,b=v);return G&&An(p,x),j}for(v=r(p,v);x<g.length;x++)D=y(v,p,x,g[x],k),D!==null&&(e&&D.alternate!==null&&v.delete(D.key===null?x:D.key),d=i(D,d,x),b===null?j=D:b.sibling=D,b=D);return e&&v.forEach(function($){return n(p,$)}),G&&An(p,x),j}function w(p,d,g,k){var j=It(g);if(typeof j!="function")throw Error(C(150));if(g=j.call(g),g==null)throw Error(C(151));for(var b=j=null,v=d,x=d=0,D=null,P=g.next();v!==null&&!P.done;x++,P=g.next()){v.index>x?(D=v,v=null):D=v.sibling;var $=h(p,v,P.value,k);if($===null){v===null&&(v=D);break}e&&v&&$.alternate===null&&n(p,v),d=i($,d,x),b===null?j=$:b.sibling=$,b=$,v=D}if(P.done)return t(p,v),G&&An(p,x),j;if(v===null){for(;!P.done;x++,P=g.next())P=m(p,P.value,k),P!==null&&(d=i(P,d,x),b===null?j=P:b.sibling=P,b=P);return G&&An(p,x),j}for(v=r(p,v);!P.done;x++,P=g.next())P=y(v,p,x,P.value,k),P!==null&&(e&&P.alternate!==null&&v.delete(P.key===null?x:P.key),d=i(P,d,x),b===null?j=P:b.sibling=P,b=P);return e&&v.forEach(function(he){return n(p,he)}),G&&An(p,x),j}function I(p,d,g,k){if(typeof g=="object"&&g!==null&&g.type===nt&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Pr:e:{for(var j=g.key,b=d;b!==null;){if(b.key===j){if(j=g.type,j===nt){if(b.tag===7){t(p,b.sibling),d=l(b,g.props.children),d.return=p,p=d;break e}}else if(b.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===fn&&pa(j)===b.type){t(p,b.sibling),d=l(b,g.props),d.ref=At(p,b,g),d.return=p,p=d;break e}t(p,b);break}else n(p,b);b=b.sibling}g.type===nt?(d=Hn(g.props.children,p.mode,k,g.key),d.return=p,p=d):(k=al(g.type,g.key,g.props,null,p.mode,k),k.ref=At(p,d,g),k.return=p,p=k)}return o(p);case et:e:{for(b=g.key;d!==null;){if(d.key===b)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){t(p,d.sibling),d=l(d,g.children||[]),d.return=p,p=d;break e}else{t(p,d);break}else n(p,d);d=d.sibling}d=$i(g,p.mode,k),d.return=p,p=d}return o(p);case fn:return b=g._init,I(p,d,b(g._payload),k)}if(Gt(g))return S(p,d,g,k);if(It(g))return w(p,d,g,k);Ur(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(t(p,d.sibling),d=l(d,g),d.return=p,p=d):(t(p,d),d=ji(g,p.mode,k),d.return=p,p=d),o(p)):t(p,d)}return I}var St=yc(!0),vc=yc(!1),Cl=Dn(null),_l=null,ut=null,Xo=null;function Zo(){Xo=ut=_l=null}function Jo(e){var n=Cl.current;V(Cl),e._currentValue=n}function ro(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function yt(e,n){_l=e,Xo=ut=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(me=!0),e.firstContext=null)}function Le(e){var n=e._currentValue;if(Xo!==e)if(e={context:e,memoizedValue:n,next:null},ut===null){if(_l===null)throw Error(C(308));ut=e,_l.dependencies={lanes:0,firstContext:e}}else ut=ut.next=e;return n}var Un=null;function es(e){Un===null?Un=[e]:Un.push(e)}function wc(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,es(n)):(t.next=l.next,l.next=t),n.interleaved=t,on(e,r)}function on(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var dn=!1;function ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Sn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,B&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,on(e,t)}return l=r.interleaved,l===null?(n.next=n,es(r)):(n.next=l.next,l.next=n),r.interleaved=n,on(e,t)}function tl(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Oo(e,t)}}function ga(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function jl(e,n,t,r){var l=e.updateQueue;dn=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var s=a,c=s.next;s.next=null,o===null?i=c:o.next=c,o=s;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=s))}if(i!==null){var m=l.baseState;o=0,f=c=s=null,a=i;do{var h=a.lane,y=a.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,w=a;switch(h=n,y=t,w.tag){case 1:if(S=w.payload,typeof S=="function"){m=S.call(y,m,h);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,h=typeof S=="function"?S.call(y,m,h):S,h==null)break e;m=q({},m,h);break e;case 2:dn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[a]:h.push(a))}else y={eventTime:y,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=y,s=m):f=f.next=y,o|=h;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;h=a,a=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(f===null&&(s=m),l.baseState=s,l.firstBaseUpdate=c,l.lastBaseUpdate=f,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);Kn|=o,e.lanes=o,e.memoizedState=m}}function ma(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(C(191,l));l.call(r)}}}var $r={},Ye=Dn($r),gr=Dn($r),mr=Dn($r);function Vn(e){if(e===$r)throw Error(C(174));return e}function ts(e,n){switch(F(mr,n),F(gr,e),F(Ye,$r),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Bi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Bi(n,e)}V(Ye),F(Ye,n)}function Ct(){V(Ye),V(gr),V(mr)}function xc(e){Vn(mr.current);var n=Vn(Ye.current),t=Bi(n,e.type);n!==t&&(F(gr,e),F(Ye,t))}function rs(e){gr.current===e&&(V(Ye),V(gr))}var W=Dn(0);function $l(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var wi=[];function ls(){for(var e=0;e<wi.length;e++)wi[e]._workInProgressVersionPrimary=null;wi.length=0}var rl=an.ReactCurrentDispatcher,ki=an.ReactCurrentBatchConfig,qn=0,Q=null,Z=null,ee=null,El=!1,er=!1,yr=0,Lh=0;function ie(){throw Error(C(321))}function is(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ge(e[t],n[t]))return!1;return!0}function os(e,n,t,r,l,i){if(qn=i,Q=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,rl.current=e===null||e.memoizedState===null?Oh:Fh,e=t(r,l),er){i=0;do{if(er=!1,yr=0,25<=i)throw Error(C(301));i+=1,ee=Z=null,n.updateQueue=null,rl.current=Uh,e=t(r,l)}while(er)}if(rl.current=Nl,n=Z!==null&&Z.next!==null,qn=0,ee=Z=Q=null,El=!1,n)throw Error(C(300));return e}function ss(){var e=yr!==0;return yr=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?Q.memoizedState=ee=e:ee=ee.next=e,ee}function Be(){if(Z===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var n=ee===null?Q.memoizedState:ee.next;if(n!==null)ee=n,Z=e;else{if(e===null)throw Error(C(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ee===null?Q.memoizedState=ee=e:ee=ee.next=e}return ee}function vr(e,n){return typeof n=="function"?n(e):n}function xi(e){var n=Be(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=Z,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,s=null,c=i;do{var f=c.lane;if((qn&f)===f)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=m,o=r):s=s.next=m,Q.lanes|=f,Kn|=f}c=c.next}while(c!==null&&c!==i);s===null?o=r:s.next=a,Ge(r,n.memoizedState)||(me=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,Q.lanes|=i,Kn|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Si(e){var n=Be(),t=n.queue;if(t===null)throw Error(C(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ge(i,n.memoizedState)||(me=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Sc(){}function Cc(e,n){var t=Q,r=Be(),l=n(),i=!Ge(r.memoizedState,l);if(i&&(r.memoizedState=l,me=!0),r=r.queue,as($c.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||ee!==null&&ee.memoizedState.tag&1){if(t.flags|=2048,wr(9,jc.bind(null,t,r,l,n),void 0,null),ne===null)throw Error(C(349));qn&30||_c(t,n,l)}return l}function _c(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function jc(e,n,t,r){n.value=t,n.getSnapshot=r,Ec(n)&&Nc(e)}function $c(e,n,t){return t(function(){Ec(n)&&Nc(e)})}function Ec(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ge(e,t)}catch{return!0}}function Nc(e){var n=on(e,1);n!==null&&Ve(n,e,1,-1)}function ya(e){var n=We();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:e},n.queue=e,e=e.dispatch=Rh.bind(null,Q,e),[n.memoizedState,e]}function wr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=Q.updateQueue,n===null?(n={lastEffect:null,stores:null},Q.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function bc(){return Be().memoizedState}function ll(e,n,t,r){var l=We();Q.flags|=e,l.memoizedState=wr(1|n,t,void 0,r===void 0?null:r)}function Vl(e,n,t,r){var l=Be();r=r===void 0?null:r;var i=void 0;if(Z!==null){var o=Z.memoizedState;if(i=o.destroy,r!==null&&is(r,o.deps)){l.memoizedState=wr(n,t,i,r);return}}Q.flags|=e,l.memoizedState=wr(1|n,t,i,r)}function va(e,n){return ll(8390656,8,e,n)}function as(e,n){return Vl(2048,8,e,n)}function Mc(e,n){return Vl(4,2,e,n)}function Pc(e,n){return Vl(4,4,e,n)}function Dc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ic(e,n,t){return t=t!=null?t.concat([e]):null,Vl(4,4,Dc.bind(null,n,e),t)}function us(){}function zc(e,n){var t=Be();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&is(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Tc(e,n){var t=Be();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&is(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Lc(e,n,t){return qn&21?(Ge(t,n)||(t=Fu(),Q.lanes|=t,Kn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=t)}function Bh(e,n){var t=O;O=t!==0&&4>t?t:4,e(!0);var r=ki.transition;ki.transition={};try{e(!1),n()}finally{O=t,ki.transition=r}}function Bc(){return Be().memoizedState}function Ah(e,n,t){var r=_n(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ac(e))Rc(n,t);else if(t=wc(e,n,t,r),t!==null){var l=ce();Ve(t,e,r,l),Oc(t,n,r)}}function Rh(e,n,t){var r=_n(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ac(e))Rc(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,a=i(o,t);if(l.hasEagerState=!0,l.eagerState=a,Ge(a,o)){var s=n.interleaved;s===null?(l.next=l,es(n)):(l.next=s.next,s.next=l),n.interleaved=l;return}}catch{}finally{}t=wc(e,n,l,r),t!==null&&(l=ce(),Ve(t,e,r,l),Oc(t,n,r))}}function Ac(e){var n=e.alternate;return e===Q||n!==null&&n===Q}function Rc(e,n){er=El=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Oc(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,Oo(e,t)}}var Nl={readContext:Le,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Oh={readContext:Le,useCallback:function(e,n){return We().memoizedState=[e,n===void 0?null:n],e},useContext:Le,useEffect:va,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ll(4194308,4,Dc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ll(4194308,4,e,n)},useInsertionEffect:function(e,n){return ll(4,2,e,n)},useMemo:function(e,n){var t=We();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=We();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Ah.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var n=We();return e={current:e},n.memoizedState=e},useState:ya,useDebugValue:us,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=ya(!1),n=e[0];return e=Bh.bind(null,e[1]),We().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=Q,l=We();if(G){if(t===void 0)throw Error(C(407));t=t()}else{if(t=n(),ne===null)throw Error(C(349));qn&30||_c(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,va($c.bind(null,r,i,e),[e]),r.flags|=2048,wr(9,jc.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=We(),n=ne.identifierPrefix;if(G){var t=en,r=Je;t=(r&~(1<<32-Ue(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=yr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Lh++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Fh={readContext:Le,useCallback:zc,useContext:Le,useEffect:as,useImperativeHandle:Ic,useInsertionEffect:Mc,useLayoutEffect:Pc,useMemo:Tc,useReducer:xi,useRef:bc,useState:function(){return xi(vr)},useDebugValue:us,useDeferredValue:function(e){var n=Be();return Lc(n,Z.memoizedState,e)},useTransition:function(){var e=xi(vr)[0],n=Be().memoizedState;return[e,n]},useMutableSource:Sc,useSyncExternalStore:Cc,useId:Bc,unstable_isNewReconciler:!1},Uh={readContext:Le,useCallback:zc,useContext:Le,useEffect:as,useImperativeHandle:Ic,useInsertionEffect:Mc,useLayoutEffect:Pc,useMemo:Tc,useReducer:Si,useRef:bc,useState:function(){return Si(vr)},useDebugValue:us,useDeferredValue:function(e){var n=Be();return Z===null?n.memoizedState=e:Lc(n,Z.memoizedState,e)},useTransition:function(){var e=Si(vr)[0],n=Be().memoizedState;return[e,n]},useMutableSource:Sc,useSyncExternalStore:Cc,useId:Bc,unstable_isNewReconciler:!1};function Re(e,n){if(e&&e.defaultProps){n=q({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function lo(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:q({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Gl={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=ce(),l=_n(e),i=nn(r,l);i.payload=n,t!=null&&(i.callback=t),n=Sn(e,i,l),n!==null&&(Ve(n,e,l,r),tl(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=ce(),l=_n(e),i=nn(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Sn(e,i,l),n!==null&&(Ve(n,e,l,r),tl(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ce(),r=_n(e),l=nn(t,r);l.tag=2,n!=null&&(l.callback=n),n=Sn(e,l,r),n!==null&&(Ve(n,e,r,t),tl(n,e,r))}};function wa(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!fr(t,r)||!fr(l,i):!0}function Fc(e,n,t){var r=!1,l=Nn,i=n.contextType;return typeof i=="object"&&i!==null?i=Le(i):(l=ve(n)?Wn:ae.current,r=n.contextTypes,i=(r=r!=null)?kt(e,l):Nn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Gl,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function ka(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Gl.enqueueReplaceState(n,n.state,null)}function io(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},ns(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=Le(i):(i=ve(n)?Wn:ae.current,l.context=kt(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(lo(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&Gl.enqueueReplaceState(l,l.state,null),jl(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function _t(e,n){try{var t="",r=n;do t+=md(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function Ci(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function oo(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Vh=typeof WeakMap=="function"?WeakMap:Map;function Uc(e,n,t){t=nn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Ml||(Ml=!0,yo=r),oo(e,n)},t}function Vc(e,n,t){t=nn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){oo(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){oo(e,n),typeof r!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function xa(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Vh;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=rp.bind(null,e,n,t),n.then(e,e))}function Sa(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ca(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=nn(-1,1),n.tag=2,Sn(t,n,1))),t.lanes|=1),e)}var Gh=an.ReactCurrentOwner,me=!1;function ue(e,n,t,r){n.child=e===null?vc(n,null,t,r):St(n,e.child,t,r)}function _a(e,n,t,r,l){t=t.render;var i=n.ref;return yt(n,l),r=os(e,n,t,r,i,l),t=ss(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,sn(e,n,l)):(G&&t&&qo(n),n.flags|=1,ue(e,n,r,l),n.child)}function ja(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!ys(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Gc(e,n,i,r,l)):(e=al(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:fr,t(o,r)&&e.ref===n.ref)return sn(e,n,l)}return n.flags|=1,e=jn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Gc(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(fr(i,r)&&e.ref===n.ref)if(me=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(me=!0);else return n.lanes=e.lanes,sn(e,n,l)}return so(e,n,t,r,l)}function Hc(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(ft,xe),xe|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,F(ft,xe),xe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,F(ft,xe),xe|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,F(ft,xe),xe|=r;return ue(e,n,l,t),n.child}function Wc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function so(e,n,t,r,l){var i=ve(t)?Wn:ae.current;return i=kt(n,i),yt(n,l),t=os(e,n,t,r,i,l),r=ss(),e!==null&&!me?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,sn(e,n,l)):(G&&r&&qo(n),n.flags|=1,ue(e,n,t,l),n.child)}function $a(e,n,t,r,l){if(ve(t)){var i=!0;kl(n)}else i=!1;if(yt(n,l),n.stateNode===null)il(e,n),Fc(n,t,r),io(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var s=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Le(c):(c=ve(t)?Wn:ae.current,c=kt(n,c));var f=t.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==c)&&ka(n,o,r,c),dn=!1;var h=n.memoizedState;o.state=h,jl(n,r,o,l),s=n.memoizedState,a!==r||h!==s||ye.current||dn?(typeof f=="function"&&(lo(n,t,f,r),s=n.memoizedState),(a=dn||wa(n,t,a,r,h,s,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,kc(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:Re(n.type,a),o.props=c,m=n.pendingProps,h=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=Le(s):(s=ve(t)?Wn:ae.current,s=kt(n,s));var y=t.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||h!==s)&&ka(n,o,r,s),dn=!1,h=n.memoizedState,o.state=h,jl(n,r,o,l);var S=n.memoizedState;a!==m||h!==S||ye.current||dn?(typeof y=="function"&&(lo(n,t,y,r),S=n.memoizedState),(c=dn||wa(n,t,c,r,h,S,s)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=S),o.props=r,o.state=S,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return ao(e,n,t,r,i,l)}function ao(e,n,t,r,l,i){Wc(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&fa(n,t,!1),sn(e,n,i);r=n.stateNode,Gh.current=n;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=St(n,e.child,null,i),n.child=St(n,null,a,i)):ue(e,n,a,i),n.memoizedState=r.state,l&&fa(n,t,!0),n.child}function Qc(e){var n=e.stateNode;n.pendingContext?ca(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ca(e,n.context,!1),ts(e,n.containerInfo)}function Ea(e,n,t,r,l){return xt(),Yo(l),n.flags|=256,ue(e,n,t,r),n.child}var uo={dehydrated:null,treeContext:null,retryLane:0};function co(e){return{baseLanes:e,cachePool:null,transitions:null}}function qc(e,n,t){var r=n.pendingProps,l=W.current,i=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),F(W,l&1),e===null)return to(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ql(o,r,0,null),e=Hn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=co(t),n.memoizedState=uo,e):cs(n,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return Hh(e,n,o,r,a,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,a=l.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=jn(l,s),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=jn(a,i):(i=Hn(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?co(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=uo,r}return i=e.child,e=i.sibling,r=jn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function cs(e,n){return n=Ql({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Vr(e,n,t,r){return r!==null&&Yo(r),St(n,e.child,null,t),e=cs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Hh(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=Ci(Error(C(422))),Vr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=Ql({mode:"visible",children:r.children},l,0,null),i=Hn(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&St(n,e.child,null,o),n.child.memoizedState=co(o),n.memoizedState=uo,i);if(!(n.mode&1))return Vr(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(C(419)),r=Ci(i,r,void 0),Vr(e,n,o,r)}if(a=(o&e.childLanes)!==0,me||a){if(r=ne,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,on(e,l),Ve(r,e,l,-1))}return ms(),r=Ci(Error(C(421))),Vr(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=lp.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,je=xn(l.nextSibling),$e=n,G=!0,Fe=null,e!==null&&(Pe[De++]=Je,Pe[De++]=en,Pe[De++]=Qn,Je=e.id,en=e.overflow,Qn=n),n=cs(n,r.children),n.flags|=4096,n)}function Na(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ro(e.return,n,t)}function _i(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function Kc(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(ue(e,n,r.children,t),r=W.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Na(e,t,n);else if(e.tag===19)Na(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(W,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&$l(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),_i(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&$l(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}_i(n,!0,t,null,i);break;case"together":_i(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function il(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function sn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Kn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(C(153));if(n.child!==null){for(e=n.child,t=jn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=jn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Wh(e,n,t){switch(n.tag){case 3:Qc(n),xt();break;case 5:xc(n);break;case 1:ve(n.type)&&kl(n);break;case 4:ts(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;F(Cl,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(F(W,W.current&1),n.flags|=128,null):t&n.child.childLanes?qc(e,n,t):(F(W,W.current&1),e=sn(e,n,t),e!==null?e.sibling:null);F(W,W.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Kc(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),F(W,W.current),r)break;return null;case 22:case 23:return n.lanes=0,Hc(e,n,t)}return sn(e,n,t)}var Yc,fo,Xc,Zc;Yc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};fo=function(){};Xc=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,Vn(Ye.current);var i=null;switch(t){case"input":l=Ii(e,l),r=Ii(e,r),i=[];break;case"select":l=q({},l,{value:void 0}),r=q({},r,{value:void 0}),i=[];break;case"textarea":l=Li(e,l),r=Li(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=vl)}Ai(t,r);var o;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(lr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=l?.[c],r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(i||(i=[]),i.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(lr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&U("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Zc=function(e,n,t,r){t!==r&&(n.flags|=4)};function Rt(e,n){if(!G)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Qh(e,n,t){var r=n.pendingProps;switch(Ko(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(n),null;case 1:return ve(n.type)&&wl(),oe(n),null;case 3:return r=n.stateNode,Ct(),V(ye),V(ae),ls(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Fe!==null&&(ko(Fe),Fe=null))),fo(e,n),oe(n),null;case 5:rs(n);var l=Vn(mr.current);if(t=n.type,e!==null&&n.stateNode!=null)Xc(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(C(166));return oe(n),null}if(e=Vn(Ye.current),Fr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Qe]=n,r[pr]=i,e=(n.mode&1)!==0,t){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(l=0;l<Wt.length;l++)U(Wt[l],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Bs(r,i),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},U("invalid",r);break;case"textarea":Rs(r,i),U("invalid",r)}Ai(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Or(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Or(r.textContent,a,e),l=["children",""+a]):lr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&U("scroll",r)}switch(t){case"input":Dr(r),As(r,i,!0);break;case"textarea":Dr(r),Os(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=vl)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$u(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[Qe]=n,e[pr]=r,Yc(e,n,!1,!1),n.stateNode=e;e:{switch(o=Ri(t,r),t){case"dialog":U("cancel",e),U("close",e),l=r;break;case"iframe":case"object":case"embed":U("load",e),l=r;break;case"video":case"audio":for(l=0;l<Wt.length;l++)U(Wt[l],e);l=r;break;case"source":U("error",e),l=r;break;case"img":case"image":case"link":U("error",e),U("load",e),l=r;break;case"details":U("toggle",e),l=r;break;case"input":Bs(e,r),l=Ii(e,r),U("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=q({},r,{value:void 0}),U("invalid",e);break;case"textarea":Rs(e,r),l=Li(e,r),U("invalid",e);break;default:l=r}Ai(t,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?bu(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Eu(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&ir(e,s):typeof s=="number"&&ir(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(lr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&U("scroll",e):s!=null&&zo(e,i,s,o))}switch(t){case"input":Dr(e),As(e,r,!1);break;case"textarea":Dr(e),Os(e);break;case"option":r.value!=null&&e.setAttribute("value",""+En(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?ht(e,!!r.multiple,i,!1):r.defaultValue!=null&&ht(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=vl)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return oe(n),null;case 6:if(e&&n.stateNode!=null)Zc(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(C(166));if(t=Vn(mr.current),Vn(Ye.current),Fr(n)){if(r=n.stateNode,t=n.memoizedProps,r[Qe]=n,(i=r.nodeValue!==t)&&(e=$e,e!==null))switch(e.tag){case 3:Or(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Or(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Qe]=n,n.stateNode=r}return oe(n),null;case 13:if(V(W),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&je!==null&&n.mode&1&&!(n.flags&128))mc(),xt(),n.flags|=98560,i=!1;else if(i=Fr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[Qe]=n}else xt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;oe(n),i=!1}else Fe!==null&&(ko(Fe),Fe=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||W.current&1?J===0&&(J=3):ms())),n.updateQueue!==null&&(n.flags|=4),oe(n),null);case 4:return Ct(),fo(e,n),e===null&&dr(n.stateNode.containerInfo),oe(n),null;case 10:return Jo(n.type._context),oe(n),null;case 17:return ve(n.type)&&wl(),oe(n),null;case 19:if(V(W),i=n.memoizedState,i===null)return oe(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)Rt(i,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=$l(e),o!==null){for(n.flags|=128,Rt(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return F(W,W.current&1|2),n.child}e=e.sibling}i.tail!==null&&Y()>jt&&(n.flags|=128,r=!0,Rt(i,!1),n.lanes=4194304)}else{if(!r)if(e=$l(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Rt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!G)return oe(n),null}else 2*Y()-i.renderingStartTime>jt&&t!==1073741824&&(n.flags|=128,r=!0,Rt(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Y(),n.sibling=null,t=W.current,F(W,r?t&1|2:t&1),n):(oe(n),null);case 22:case 23:return gs(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?xe&1073741824&&(oe(n),n.subtreeFlags&6&&(n.flags|=8192)):oe(n),null;case 24:return null;case 25:return null}throw Error(C(156,n.tag))}function qh(e,n){switch(Ko(n),n.tag){case 1:return ve(n.type)&&wl(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ct(),V(ye),V(ae),ls(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return rs(n),null;case 13:if(V(W),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(C(340));xt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(W),null;case 4:return Ct(),null;case 10:return Jo(n.type._context),null;case 22:case 23:return gs(),null;case 24:return null;default:return null}}var Gr=!1,se=!1,Kh=typeof WeakSet=="function"?WeakSet:Set,M=null;function ct(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){K(e,n,r)}else t.current=null}function ho(e,n,t){try{t()}catch(r){K(e,n,r)}}var ba=!1;function Yh(e,n){if(Ki=gl,e=rc(),Qo(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,a=-1,s=-1,c=0,f=0,m=e,h=null;n:for(;;){for(var y;m!==t||l!==0&&m.nodeType!==3||(a=o+l),m!==i||r!==0&&m.nodeType!==3||(s=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)h=m,m=y;for(;;){if(m===e)break n;if(h===t&&++c===l&&(a=o),h===i&&++f===r&&(s=o),(y=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=y}t=a===-1||s===-1?null:{start:a,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(Yi={focusedElem:e,selectionRange:t},gl=!1,M=n;M!==null;)if(n=M,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,M=e;else for(;M!==null;){n=M;try{var S=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,I=S.memoizedState,p=n.stateNode,d=p.getSnapshotBeforeUpdate(n.elementType===n.type?w:Re(n.type,w),I);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=n.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(k){K(n,n.return,k)}if(e=n.sibling,e!==null){e.return=n.return,M=e;break}M=n.return}return S=ba,ba=!1,S}function nr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&ho(n,t,i)}l=l.next}while(l!==r)}}function Hl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function po(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Jc(e){var n=e.alternate;n!==null&&(e.alternate=null,Jc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Qe],delete n[pr],delete n[Ji],delete n[Dh],delete n[Ih])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ef(e){return e.tag===5||e.tag===3||e.tag===4}function Ma(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ef(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function go(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=vl));else if(r!==4&&(e=e.child,e!==null))for(go(e,n,t),e=e.sibling;e!==null;)go(e,n,t),e=e.sibling}function mo(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(mo(e,n,t),e=e.sibling;e!==null;)mo(e,n,t),e=e.sibling}var te=null,Oe=!1;function un(e,n,t){for(t=t.child;t!==null;)nf(e,n,t),t=t.sibling}function nf(e,n,t){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Bl,t)}catch{}switch(t.tag){case 5:se||ct(t,n);case 6:var r=te,l=Oe;te=null,un(e,n,t),te=r,Oe=l,te!==null&&(Oe?(e=te,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):te.removeChild(t.stateNode));break;case 18:te!==null&&(Oe?(e=te,t=t.stateNode,e.nodeType===8?yi(e.parentNode,t):e.nodeType===1&&yi(e,t),ur(e)):yi(te,t.stateNode));break;case 4:r=te,l=Oe,te=t.stateNode.containerInfo,Oe=!0,un(e,n,t),te=r,Oe=l;break;case 0:case 11:case 14:case 15:if(!se&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&ho(t,n,o),l=l.next}while(l!==r)}un(e,n,t);break;case 1:if(!se&&(ct(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){K(t,n,a)}un(e,n,t);break;case 21:un(e,n,t);break;case 22:t.mode&1?(se=(r=se)||t.memoizedState!==null,un(e,n,t),se=r):un(e,n,t);break;default:un(e,n,t)}}function Pa(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Kh),n.forEach(function(r){var l=ip.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Ae(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Oe=!1;break e;case 3:te=a.stateNode.containerInfo,Oe=!0;break e;case 4:te=a.stateNode.containerInfo,Oe=!0;break e}a=a.return}if(te===null)throw Error(C(160));nf(i,o,l),te=null,Oe=!1;var s=l.alternate;s!==null&&(s.return=null),l.return=null}catch(c){K(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)tf(n,e),n=n.sibling}function tf(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(n,e),He(e),r&4){try{nr(3,e,e.return),Hl(3,e)}catch(w){K(e,e.return,w)}try{nr(5,e,e.return)}catch(w){K(e,e.return,w)}}break;case 1:Ae(n,e),He(e),r&512&&t!==null&&ct(t,t.return);break;case 5:if(Ae(n,e),He(e),r&512&&t!==null&&ct(t,t.return),e.flags&32){var l=e.stateNode;try{ir(l,"")}catch(w){K(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&_u(l,i),Ri(a,o);var c=Ri(a,i);for(o=0;o<s.length;o+=2){var f=s[o],m=s[o+1];f==="style"?bu(l,m):f==="dangerouslySetInnerHTML"?Eu(l,m):f==="children"?ir(l,m):zo(l,f,m,c)}switch(a){case"input":zi(l,i);break;case"textarea":ju(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?ht(l,!!i.multiple,y,!1):h!==!!i.multiple&&(i.defaultValue!=null?ht(l,!!i.multiple,i.defaultValue,!0):ht(l,!!i.multiple,i.multiple?[]:"",!1))}l[pr]=i}catch(w){K(e,e.return,w)}}break;case 6:if(Ae(n,e),He(e),r&4){if(e.stateNode===null)throw Error(C(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){K(e,e.return,w)}}break;case 3:if(Ae(n,e),He(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{ur(n.containerInfo)}catch(w){K(e,e.return,w)}break;case 4:Ae(n,e),He(e);break;case 13:Ae(n,e),He(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(hs=Y())),r&4&&Pa(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(se=(c=se)||f,Ae(n,e),se=c):Ae(n,e),He(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(M=e,f=e.child;f!==null;){for(m=M=f;M!==null;){switch(h=M,y=h.child,h.tag){case 0:case 11:case 14:case 15:nr(4,h,h.return);break;case 1:ct(h,h.return);var S=h.stateNode;if(typeof S.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,S.props=n.memoizedProps,S.state=n.memoizedState,S.componentWillUnmount()}catch(w){K(r,t,w)}}break;case 5:ct(h,h.return);break;case 22:if(h.memoizedState!==null){Ia(m);continue}}y!==null?(y.return=h,M=y):Ia(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{l=m.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,s=m.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Nu("display",o))}catch(w){K(e,e.return,w)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(w){K(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ae(n,e),He(e),r&4&&Pa(e);break;case 21:break;default:Ae(n,e),He(e)}}function He(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(ef(t)){var r=t;break e}t=t.return}throw Error(C(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(ir(l,""),r.flags&=-33);var i=Ma(e);mo(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ma(e);go(e,a,o);break;default:throw Error(C(161))}}catch(s){K(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Xh(e,n,t){M=e,rf(e)}function rf(e,n,t){for(var r=(e.mode&1)!==0;M!==null;){var l=M,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Gr;if(!o){var a=l.alternate,s=a!==null&&a.memoizedState!==null||se;a=Gr;var c=se;if(Gr=o,(se=s)&&!c)for(M=l;M!==null;)o=M,s=o.child,o.tag===22&&o.memoizedState!==null?za(l):s!==null?(s.return=o,M=s):za(l);for(;i!==null;)M=i,rf(i),i=i.sibling;M=l,Gr=a,se=c}Da(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,M=i):Da(e)}}function Da(e){for(;M!==null;){var n=M;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:se||Hl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!se)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Re(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&ma(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ma(n,o,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&ur(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}se||n.flags&512&&po(n)}catch(h){K(n,n.return,h)}}if(n===e){M=null;break}if(t=n.sibling,t!==null){t.return=n.return,M=t;break}M=n.return}}function Ia(e){for(;M!==null;){var n=M;if(n===e){M=null;break}var t=n.sibling;if(t!==null){t.return=n.return,M=t;break}M=n.return}}function za(e){for(;M!==null;){var n=M;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Hl(4,n)}catch(s){K(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(s){K(n,l,s)}}var i=n.return;try{po(n)}catch(s){K(n,i,s)}break;case 5:var o=n.return;try{po(n)}catch(s){K(n,o,s)}}}catch(s){K(n,n.return,s)}if(n===e){M=null;break}var a=n.sibling;if(a!==null){a.return=n.return,M=a;break}M=n.return}}var Zh=Math.ceil,bl=an.ReactCurrentDispatcher,fs=an.ReactCurrentOwner,Te=an.ReactCurrentBatchConfig,B=0,ne=null,X=null,re=0,xe=0,ft=Dn(0),J=0,kr=null,Kn=0,Wl=0,ds=0,tr=null,ge=null,hs=0,jt=1/0,Xe=null,Ml=!1,yo=null,Cn=null,Hr=!1,mn=null,Pl=0,rr=0,vo=null,ol=-1,sl=0;function ce(){return B&6?Y():ol!==-1?ol:ol=Y()}function _n(e){return e.mode&1?B&2&&re!==0?re&-re:Th.transition!==null?(sl===0&&(sl=Fu()),sl):(e=O,e!==0||(e=window.event,e=e===void 0?16:qu(e.type)),e):1}function Ve(e,n,t,r){if(50<rr)throw rr=0,vo=null,Error(C(185));Cr(e,t,r),(!(B&2)||e!==ne)&&(e===ne&&(!(B&2)&&(Wl|=t),J===4&&pn(e,re)),we(e,r),t===1&&B===0&&!(n.mode&1)&&(jt=Y()+500,Ul&&In()))}function we(e,n){var t=e.callbackNode;Td(e,n);var r=pl(e,e===ne?re:0);if(r===0)t!==null&&Vs(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Vs(t),n===1)e.tag===0?zh(Ta.bind(null,e)):hc(Ta.bind(null,e)),Mh(function(){!(B&6)&&In()}),t=null;else{switch(Uu(r)){case 1:t=Ro;break;case 4:t=Ru;break;case 16:t=hl;break;case 536870912:t=Ou;break;default:t=hl}t=df(t,lf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function lf(e,n){if(ol=-1,sl=0,B&6)throw Error(C(327));var t=e.callbackNode;if(vt()&&e.callbackNode!==t)return null;var r=pl(e,e===ne?re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Dl(e,r);else{n=r;var l=B;B|=2;var i=sf();(ne!==e||re!==n)&&(Xe=null,jt=Y()+500,Gn(e,n));do try{np();break}catch(a){of(e,a)}while(!0);Zo(),bl.current=i,B=l,X!==null?n=0:(ne=null,re=0,n=J)}if(n!==0){if(n===2&&(l=Gi(e),l!==0&&(r=l,n=wo(e,l))),n===1)throw t=kr,Gn(e,0),pn(e,r),we(e,Y()),t;if(n===6)pn(e,r);else{if(l=e.current.alternate,!(r&30)&&!Jh(l)&&(n=Dl(e,r),n===2&&(i=Gi(e),i!==0&&(r=i,n=wo(e,i))),n===1))throw t=kr,Gn(e,0),pn(e,r),we(e,Y()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(C(345));case 2:Rn(e,ge,Xe);break;case 3:if(pn(e,r),(r&130023424)===r&&(n=hs+500-Y(),10<n)){if(pl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Zi(Rn.bind(null,e,ge,Xe),n);break}Rn(e,ge,Xe);break;case 4:if(pn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-Ue(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Zh(r/1960))-r,10<r){e.timeoutHandle=Zi(Rn.bind(null,e,ge,Xe),r);break}Rn(e,ge,Xe);break;case 5:Rn(e,ge,Xe);break;default:throw Error(C(329))}}}return we(e,Y()),e.callbackNode===t?lf.bind(null,e):null}function wo(e,n){var t=tr;return e.current.memoizedState.isDehydrated&&(Gn(e,n).flags|=256),e=Dl(e,n),e!==2&&(n=ge,ge=t,n!==null&&ko(n)),e}function ko(e){ge===null?ge=e:ge.push.apply(ge,e)}function Jh(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!Ge(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function pn(e,n){for(n&=~ds,n&=~Wl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Ue(n),r=1<<t;e[t]=-1,n&=~r}}function Ta(e){if(B&6)throw Error(C(327));vt();var n=pl(e,0);if(!(n&1))return we(e,Y()),null;var t=Dl(e,n);if(e.tag!==0&&t===2){var r=Gi(e);r!==0&&(n=r,t=wo(e,r))}if(t===1)throw t=kr,Gn(e,0),pn(e,n),we(e,Y()),t;if(t===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Rn(e,ge,Xe),we(e,Y()),null}function ps(e,n){var t=B;B|=1;try{return e(n)}finally{B=t,B===0&&(jt=Y()+500,Ul&&In())}}function Yn(e){mn!==null&&mn.tag===0&&!(B&6)&&vt();var n=B;B|=1;var t=Te.transition,r=O;try{if(Te.transition=null,O=1,e)return e()}finally{O=r,Te.transition=t,B=n,!(B&6)&&In()}}function gs(){xe=ft.current,V(ft)}function Gn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,bh(t)),X!==null)for(t=X.return;t!==null;){var r=t;switch(Ko(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wl();break;case 3:Ct(),V(ye),V(ae),ls();break;case 5:rs(r);break;case 4:Ct();break;case 13:V(W);break;case 19:V(W);break;case 10:Jo(r.type._context);break;case 22:case 23:gs()}t=t.return}if(ne=e,X=e=jn(e.current,null),re=xe=n,J=0,kr=null,ds=Wl=Kn=0,ge=tr=null,Un!==null){for(n=0;n<Un.length;n++)if(t=Un[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}Un=null}return e}function of(e,n){do{var t=X;try{if(Zo(),rl.current=Nl,El){for(var r=Q.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}El=!1}if(qn=0,ee=Z=Q=null,er=!1,yr=0,fs.current=null,t===null||t.return===null){J=1,kr=n,X=null;break}e:{var i=e,o=t.return,a=t,s=n;if(n=re,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,f=a,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=Sa(o);if(y!==null){y.flags&=-257,Ca(y,o,a,i,n),y.mode&1&&xa(i,c,n),n=y,s=c;var S=n.updateQueue;if(S===null){var w=new Set;w.add(s),n.updateQueue=w}else S.add(s);break e}else{if(!(n&1)){xa(i,c,n),ms();break e}s=Error(C(426))}}else if(G&&a.mode&1){var I=Sa(o);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Ca(I,o,a,i,n),Yo(_t(s,a));break e}}i=s=_t(s,a),J!==4&&(J=2),tr===null?tr=[i]:tr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var p=Uc(i,s,n);ga(i,p);break e;case 1:a=s;var d=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Cn===null||!Cn.has(g)))){i.flags|=65536,n&=-n,i.lanes|=n;var k=Vc(i,a,n);ga(i,k);break e}}i=i.return}while(i!==null)}uf(t)}catch(j){n=j,X===t&&t!==null&&(X=t=t.return);continue}break}while(!0)}function sf(){var e=bl.current;return bl.current=Nl,e===null?Nl:e}function ms(){(J===0||J===3||J===2)&&(J=4),ne===null||!(Kn&268435455)&&!(Wl&268435455)||pn(ne,re)}function Dl(e,n){var t=B;B|=2;var r=sf();(ne!==e||re!==n)&&(Xe=null,Gn(e,n));do try{ep();break}catch(l){of(e,l)}while(!0);if(Zo(),B=t,bl.current=r,X!==null)throw Error(C(261));return ne=null,re=0,J}function ep(){for(;X!==null;)af(X)}function np(){for(;X!==null&&!$d();)af(X)}function af(e){var n=ff(e.alternate,e,xe);e.memoizedProps=e.pendingProps,n===null?uf(e):X=n,fs.current=null}function uf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=qh(t,n),t!==null){t.flags&=32767,X=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,X=null;return}}else if(t=Qh(t,n,xe),t!==null){X=t;return}if(n=n.sibling,n!==null){X=n;return}X=n=e}while(n!==null);J===0&&(J=5)}function Rn(e,n,t){var r=O,l=Te.transition;try{Te.transition=null,O=1,tp(e,n,t,r)}finally{Te.transition=l,O=r}return null}function tp(e,n,t,r){do vt();while(mn!==null);if(B&6)throw Error(C(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Ld(e,i),e===ne&&(X=ne=null,re=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Hr||(Hr=!0,df(hl,function(){return vt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Te.transition,Te.transition=null;var o=O;O=1;var a=B;B|=4,fs.current=null,Yh(e,t),tf(t,e),Sh(Yi),gl=!!Ki,Yi=Ki=null,e.current=t,Xh(t),Ed(),B=a,O=o,Te.transition=i}else e.current=t;if(Hr&&(Hr=!1,mn=e,Pl=l),i=e.pendingLanes,i===0&&(Cn=null),Md(t.stateNode),we(e,Y()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Ml)throw Ml=!1,e=yo,yo=null,e;return Pl&1&&e.tag!==0&&vt(),i=e.pendingLanes,i&1?e===vo?rr++:(rr=0,vo=e):rr=0,In(),null}function vt(){if(mn!==null){var e=Uu(Pl),n=Te.transition,t=O;try{if(Te.transition=null,O=16>e?16:e,mn===null)var r=!1;else{if(e=mn,mn=null,Pl=0,B&6)throw Error(C(331));var l=B;for(B|=4,M=e.current;M!==null;){var i=M,o=i.child;if(M.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(M=c;M!==null;){var f=M;switch(f.tag){case 0:case 11:case 15:nr(8,f,i)}var m=f.child;if(m!==null)m.return=f,M=m;else for(;M!==null;){f=M;var h=f.sibling,y=f.return;if(Jc(f),f===c){M=null;break}if(h!==null){h.return=y,M=h;break}M=y}}}var S=i.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var I=w.sibling;w.sibling=null,w=I}while(w!==null)}}M=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,M=o;else e:for(;M!==null;){if(i=M,i.flags&2048)switch(i.tag){case 0:case 11:case 15:nr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,M=p;break e}M=i.return}}var d=e.current;for(M=d;M!==null;){o=M;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,M=g;else e:for(o=d;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hl(9,a)}}catch(j){K(a,a.return,j)}if(a===o){M=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,M=k;break e}M=a.return}}if(B=l,In(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Bl,e)}catch{}r=!0}return r}finally{O=t,Te.transition=n}}return!1}function La(e,n,t){n=_t(t,n),n=Uc(e,n,1),e=Sn(e,n,1),n=ce(),e!==null&&(Cr(e,1,n),we(e,n))}function K(e,n,t){if(e.tag===3)La(e,e,t);else for(;n!==null;){if(n.tag===3){La(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cn===null||!Cn.has(r))){e=_t(t,e),e=Vc(n,e,1),n=Sn(n,e,1),e=ce(),n!==null&&(Cr(n,1,e),we(n,e));break}}n=n.return}}function rp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=ce(),e.pingedLanes|=e.suspendedLanes&t,ne===e&&(re&t)===t&&(J===4||J===3&&(re&130023424)===re&&500>Y()-hs?Gn(e,0):ds|=t),we(e,n)}function cf(e,n){n===0&&(e.mode&1?(n=Tr,Tr<<=1,!(Tr&130023424)&&(Tr=4194304)):n=1);var t=ce();e=on(e,n),e!==null&&(Cr(e,n,t),we(e,t))}function lp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),cf(e,t)}function ip(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(n),cf(e,t)}var ff;ff=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ye.current)me=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return me=!1,Wh(e,n,t);me=!!(e.flags&131072)}else me=!1,G&&n.flags&1048576&&pc(n,Sl,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;il(e,n),e=n.pendingProps;var l=kt(n,ae.current);yt(n,t),l=os(null,n,r,e,l,t);var i=ss();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ve(r)?(i=!0,kl(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ns(n),l.updater=Gl,n.stateNode=l,l._reactInternals=n,io(n,r,e,t),n=ao(null,n,r,!0,i,t)):(n.tag=0,G&&i&&qo(n),ue(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(il(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=sp(r),e=Re(r,e),l){case 0:n=so(null,n,r,e,t);break e;case 1:n=$a(null,n,r,e,t);break e;case 11:n=_a(null,n,r,e,t);break e;case 14:n=ja(null,n,r,Re(r.type,e),t);break e}throw Error(C(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Re(r,l),so(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Re(r,l),$a(e,n,r,l,t);case 3:e:{if(Qc(n),e===null)throw Error(C(387));r=n.pendingProps,i=n.memoizedState,l=i.element,kc(e,n),jl(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=_t(Error(C(423)),n),n=Ea(e,n,r,t,l);break e}else if(r!==l){l=_t(Error(C(424)),n),n=Ea(e,n,r,t,l);break e}else for(je=xn(n.stateNode.containerInfo.firstChild),$e=n,G=!0,Fe=null,t=vc(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(xt(),r===l){n=sn(e,n,t);break e}ue(e,n,r,t)}n=n.child}return n;case 5:return xc(n),e===null&&to(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Xi(r,l)?o=null:i!==null&&Xi(r,i)&&(n.flags|=32),Wc(e,n),ue(e,n,o,t),n.child;case 6:return e===null&&to(n),null;case 13:return qc(e,n,t);case 4:return ts(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=St(n,null,r,t):ue(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Re(r,l),_a(e,n,r,l,t);case 7:return ue(e,n,n.pendingProps,t),n.child;case 8:return ue(e,n,n.pendingProps.children,t),n.child;case 12:return ue(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,F(Cl,r._currentValue),r._currentValue=o,i!==null)if(Ge(i.value,o)){if(i.children===l.children&&!ye.current){n=sn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=nn(-1,t&-t),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),ro(i.return,t,n),a.lanes|=t;break}s=s.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(C(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),ro(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ue(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,yt(n,t),l=Le(l),r=r(l),n.flags|=1,ue(e,n,r,t),n.child;case 14:return r=n.type,l=Re(r,n.pendingProps),l=Re(r.type,l),ja(e,n,r,l,t);case 15:return Gc(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Re(r,l),il(e,n),n.tag=1,ve(r)?(e=!0,kl(n)):e=!1,yt(n,t),Fc(n,r,l),io(n,r,l,t),ao(null,n,r,!0,e,t);case 19:return Kc(e,n,t);case 22:return Hc(e,n,t)}throw Error(C(156,n.tag))};function df(e,n){return Au(e,n)}function op(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,n,t,r){return new op(e,n,t,r)}function ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sp(e){if(typeof e=="function")return ys(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Lo)return 11;if(e===Bo)return 14}return 2}function jn(e,n){var t=e.alternate;return t===null?(t=ze(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function al(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")ys(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case nt:return Hn(t.children,l,i,n);case To:o=8,l|=8;break;case bi:return e=ze(12,t,n,l|2),e.elementType=bi,e.lanes=i,e;case Mi:return e=ze(13,t,n,l),e.elementType=Mi,e.lanes=i,e;case Pi:return e=ze(19,t,n,l),e.elementType=Pi,e.lanes=i,e;case xu:return Ql(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wu:o=10;break e;case ku:o=9;break e;case Lo:o=11;break e;case Bo:o=14;break e;case fn:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return n=ze(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function Hn(e,n,t,r){return e=ze(7,e,r,n),e.lanes=t,e}function Ql(e,n,t,r){return e=ze(22,e,r,n),e.elementType=xu,e.lanes=t,e.stateNode={isHidden:!1},e}function ji(e,n,t){return e=ze(6,e,null,n),e.lanes=t,e}function $i(e,n,t){return n=ze(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function ap(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oi(0),this.expirationTimes=oi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function vs(e,n,t,r,l,i,o,a,s){return e=new ap(e,n,t,a,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=ze(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ns(i),e}function up(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:et,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function hf(e){if(!e)return Nn;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(C(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ve(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(C(171))}if(e.tag===1){var t=e.type;if(ve(t))return dc(e,t,n)}return n}function pf(e,n,t,r,l,i,o,a,s){return e=vs(t,r,!0,e,l,i,o,a,s),e.context=hf(null),t=e.current,r=ce(),l=_n(t),i=nn(r,l),i.callback=n??null,Sn(t,i,l),e.current.lanes=l,Cr(e,l,r),we(e,r),e}function ql(e,n,t,r){var l=n.current,i=ce(),o=_n(l);return t=hf(t),n.context===null?n.context=t:n.pendingContext=t,n=nn(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Sn(l,n,o),e!==null&&(Ve(e,l,o,i),tl(e,l,o)),o}function Il(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ba(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ws(e,n){Ba(e,n),(e=e.alternate)&&Ba(e,n)}function cp(){return null}var gf=typeof reportError=="function"?reportError:function(e){console.error(e)};function ks(e){this._internalRoot=e}Kl.prototype.render=ks.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(C(409));ql(e,n,null,null)};Kl.prototype.unmount=ks.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Yn(function(){ql(null,e,null,null)}),n[ln]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Hu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<hn.length&&n!==0&&n<hn[t].priority;t++);hn.splice(t,0,e),t===0&&Qu(e)}};function xs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Aa(){}function fp(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=Il(o);i.call(c)}}var o=pf(n,r,e,0,null,!1,!1,"",Aa);return e._reactRootContainer=o,e[ln]=o.current,dr(e.nodeType===8?e.parentNode:e),Yn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=Il(s);a.call(c)}}var s=vs(e,0,!1,null,null,!1,!1,"",Aa);return e._reactRootContainer=s,e[ln]=s.current,dr(e.nodeType===8?e.parentNode:e),Yn(function(){ql(n,s,t,r)}),s}function Xl(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var s=Il(o);a.call(s)}}ql(n,o,e,l)}else o=fp(t,n,e,l,r);return Il(o)}Vu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ht(n.pendingLanes);t!==0&&(Oo(n,t|1),we(n,Y()),!(B&6)&&(jt=Y()+500,In()))}break;case 13:Yn(function(){var r=on(e,1);if(r!==null){var l=ce();Ve(r,e,1,l)}}),ws(e,1)}};Fo=function(e){if(e.tag===13){var n=on(e,134217728);if(n!==null){var t=ce();Ve(n,e,134217728,t)}ws(e,134217728)}};Gu=function(e){if(e.tag===13){var n=_n(e),t=on(e,n);if(t!==null){var r=ce();Ve(t,e,n,r)}ws(e,n)}};Hu=function(){return O};Wu=function(e,n){var t=O;try{return O=e,n()}finally{O=t}};Fi=function(e,n,t){switch(n){case"input":if(zi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=Fl(r);if(!l)throw Error(C(90));Cu(r),zi(r,l)}}}break;case"textarea":ju(e,t);break;case"select":n=t.value,n!=null&&ht(e,!!t.multiple,n,!1)}};Du=ps;Iu=Yn;var dp={usingClientEntryPoint:!1,Events:[jr,it,Fl,Mu,Pu,ps]},Ot={findFiberByHostInstance:Fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hp={bundleType:Ot.bundleType,version:Ot.version,rendererPackageName:Ot.rendererPackageName,rendererConfig:Ot.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:an.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Lu(e),e===null?null:e.stateNode},findFiberByHostInstance:Ot.findFiberByHostInstance||cp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wr.isDisabled&&Wr.supportsFiber)try{Bl=Wr.inject(hp),Ke=Wr}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dp;Ne.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xs(n))throw Error(C(200));return up(e,n,null,t)};Ne.createRoot=function(e,n){if(!xs(e))throw Error(C(299));var t=!1,r="",l=gf;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=vs(e,1,!1,null,null,t,!1,r,l),e[ln]=n.current,dr(e.nodeType===8?e.parentNode:e),new ks(n)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Lu(n),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Yn(e)};Ne.hydrate=function(e,n,t){if(!Yl(n))throw Error(C(200));return Xl(null,e,n,!0,t)};Ne.hydrateRoot=function(e,n,t){if(!xs(e))throw Error(C(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=gf;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=pf(n,null,e,1,t??null,l,!1,i,o),e[ln]=n.current,dr(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new Kl(n)};Ne.render=function(e,n,t){if(!Yl(n))throw Error(C(200));return Xl(null,e,n,!1,t)};Ne.unmountComponentAtNode=function(e){if(!Yl(e))throw Error(C(40));return e._reactRootContainer?(Yn(function(){Xl(null,null,e,!1,function(){e._reactRootContainer=null,e[ln]=null})}),!0):!1};Ne.unstable_batchedUpdates=ps;Ne.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Yl(t))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Xl(e,n,t,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function mf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mf)}catch(e){console.error(e)}}mf(),gu.exports=Ne;var pp=gu.exports,yf,Ra=pp;yf=Ra.createRoot,Ra.hydrateRoot;const vf="hasukgo.device.v1",gp="hasukgo",$t="meta",xo="deviceId";function wf(){try{if(typeof crypto<"u"&&typeof crypto.randomUUID=="function")return crypto.randomUUID();if(typeof crypto<"u"&&typeof crypto.getRandomValues=="function"){const e=crypto.getRandomValues(new Uint8Array(16));e[6]=e[6]&15|64,e[8]=e[8]&63|128;const n=[...e].map(t=>t.toString(16).padStart(2,"0")).join("");return`${n.slice(0,8)}-${n.slice(8,12)}-${n.slice(12,16)}-${n.slice(16,20)}-${n.slice(20)}`}}catch{}return`fb-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function kf(e){const n=e.replace(/[^a-f0-9]/gi,"").toUpperCase(),t=n.slice(0,4)||"0000",r=n.slice(4,8)||"0000";return`HSG-${t}-${r}`}function mp(){try{return localStorage.getItem(vf)}catch{return null}}function xf(e){try{return localStorage.setItem(vf,e),!0}catch{return!1}}function Ss(){return new Promise(e=>{try{if(typeof indexedDB>"u")return e(null);const n=indexedDB.open(gp,1);n.onupgradeneeded=()=>{const t=n.result;t.objectStoreNames.contains($t)||t.createObjectStore($t)},n.onsuccess=()=>e(n.result),n.onerror=()=>e(null),setTimeout(()=>e(null),1500)}catch{e(null)}})}function yp(e,n){return new Promise(t=>{try{const l=e.transaction($t,"readonly").objectStore($t).get(n);l.onsuccess=()=>t(l.result??null),l.onerror=()=>t(null)}catch{t(null)}})}function Cs(e,n,t){return new Promise(r=>{try{const l=e.transaction($t,"readwrite");l.objectStore($t).put(t,n),l.oncomplete=()=>r(!0),l.onerror=()=>r(!1),l.onabort=()=>r(!1)}catch{r(!1)}})}function Sf(){if(typeof navigator>"u")return"알 수 없음";const e=navigator.userAgent,n=typeof globalThis.Capacitor<"u",t=/Android/i.test(e)?"Android":/iPhone|iPad|iPod/i.test(e)?"iOS":/Windows/i.test(e)?"Windows":/Mac OS X/i.test(e)?"macOS":"기타";if(n)return`${t} 앱`;const r=/KAKAOTALK/i.test(e)?" · 카카오톡 인앱":/Line\//i.test(e)?" · 라인 인앱":/Instagram|FBAN|FBAV/i.test(e)?" · SNS 인앱":"";return`${t} 웹${r}`}let dt=null;async function vp(){if(dt)return dt;const e=mp(),n=await Ss(),t=n?await yp(n,xo):null;let r=e??t??null,l=!1;r||(r=wf(),l=!0);const i=xf(r);let o=!1;return n&&(o=await Cs(n,xo,r)),dt={id:r,shortCode:kf(r),platform:Sf(),fresh:l,ephemeral:!i&&!o},dt}async function wp(e){const n=e??wf();xf(n);const t=await Ss();return t&&await Cs(t,xo,n),dt={id:n,shortCode:kf(n),platform:Sf(),fresh:!0,ephemeral:!1},dt}async function kp(){let e=!1;try{const r="__hasukgo_probe__";localStorage.setItem(r,"1"),e=localStorage.getItem(r)==="1",localStorage.removeItem(r)}catch{e=!1}const n=await Ss();let t=!1;return n&&(t=await Cs(n,"__probe__","1")),{localStorage:e,indexedDb:t}}const xp=[{id:"eunseo",order:1,name:"은서",nickname:"옆방",age:22,job:"시각디자인과 2학년",room:"201호",season:"spring",personality:["밝음","덤벙댐","정 많음"],styleLabel:"아직 규칙을 외우는 중. 뭘 낼지 모르겠으면 그냥 낸다",style:{weights:{pi:1.1},mistakeScale:1.15,greedScale:1.1,inferenceScale:.8,aggressionScale:.7,stopScoreDelta:1},unlock:[],reward:{base:60,perStage:15},entryCost:20,lines:{matchStart:{low:["어, 안녕! 나 은서. 옆방 살아.","규칙은... 어제 외웠어. 아마도.","살살 해줘. 진짜로."],mid:["오늘은 좀 늘었어. 기대해도 돼.","어제 혼자 연습했다? 마루에서.","자, 앉아 앉아. 방석 여기."],high:["오늘도 같이 칠 거지? 기다렸는데.","네 자리 맡아뒀어. 여기 앉아.","지면 야식. 이기면... 도 야식."]},go:{low:["어어, 고? 고! 맞나? 고!","이거 고 하는 거 맞지? 맞겠지.","몰라, 일단 고!"],mid:["고. 이번엔 계산하고 하는 거야.","여기서 멈추면 아쉽잖아. 고!","손이 좋아. 고 할래."],high:["고. 너 표정 보니까 더 가도 될 것 같아.","고! 놀라는 얼굴 보고 싶어서.","고 할게. 조금만 더 같이 있자는 뜻이야."]},stop:{low:["스톱! 더 가면 나 무너져.","여기서 멈출래. 심장이 쿵쾅거려.","스톱... 맞지? 스톱!"],mid:["스톱. 욕심내다 뻑 나는 거 봤거든.","딱 여기. 오늘은 여기까지가 좋아.","스톱할게. 다음 판이 더 재밌을 거야."],high:["스톱. 오래 끌면 네가 지루해할까 봐.","여기서 스톱. 대신 한 판 더 하자.","스톱! 이겼다 이겼다."]},ppeok:{low:["으악 뻑! 이거 왜 이래!","아 진짜... 방금 건 못 본 걸로.","뻑이다... 나 이거 제일 싫어."],mid:["뻑. 괜찮아, 어차피 내가 가져올 거야.","묶였네. 저거 내 거야 나중에.","뻑 났다. 표정 관리 중."],high:["뻑! 봤지? 너 웃었어 지금.","아 뻑... 웃지 마 좀.","뻑 났는데 왜 기분이 나쁘지 않지."]},sseulVictim:{low:["어? 바닥이 비었어. 그래도 되는 거야?","다 가져갔어... 방금 뭐 한 거야?","잠깐만, 다시 설명해줘."],mid:["쓸었네. 그거 배워야겠다.","아, 그렇게 하는 거구나. 메모.","잘한다 진짜. 얄밉게."],high:["또 쓸어? 나 이제 안 놀라.","멋있어서 봐준다. 이번만.","쓸 때 표정 좀 짓지 마, 심장에 안 좋아."]},win:{low:["이겼다! 나 이겼어! 진짜로?","어... 이긴 거 맞지? 맞지?","와 처음이야 이런 거."],mid:["이겼다! 연습한 보람 있네.","봤지? 나 늘었다니까.","오늘은 내가 설거지 면제야."],high:["이겼다! 근데 네가 봐준 거 아니지?","이겼어. 상으로 내일 편의점 같이 가자.","내가 이겼으니까 오늘 야식은 내가 살게. 이상하지?"]},lose:{low:["졌다... 그래도 재밌었어.","아 아까워! 다음엔 안 져.","한 판만 더, 응? 한 판만."],mid:["졌네. 근데 이번엔 꽤 근접했지?","분하다. 분한데 또 하고 싶다.","다음 판에 두고 보자."],high:["졌지만 기분은 안 나빠. 이상하지.","또 졌네. 너랑 하면 왜 자꾸 지지.","졌으니까 벌칙. 내일도 같이 쳐줘."]},affection:{low:["저기, 이따 마루에 나올 거야?","어... 물어볼 게 있었는데. 아 맞다 그거.","괜찮으면 잠깐 얘기할래?"],mid:["있잖아, 나 요즘 밤이 기다려져.","너랑 있으면 시간이 왜 이렇게 빨라?","이거 너 주려고 사 왔어. 별거 아니야."],high:["나 사실 하고 싶은 말이 있는데.","맞고 말고도 같이 하고 싶은 거 많아.","오늘은 승부 말고 그냥 얘기하자."]},hints:["나 요즘 피만 모아. 진짜야. 눈치 좀 챙겨.","바닥에 광 놔두면 내가 가져간다? 알려주는 거야.","힌트 줄게. 나 계산 못 해. 오래 끌면 네가 이겨."]},events:[{stage:1,scriptId:"eunseo_01",title:"옆방 사람",hasChoice:!1},{stage:2,scriptId:"eunseo_02",title:"하숙집 규칙 세 가지",hasChoice:!1},{stage:3,scriptId:"eunseo_03",title:"은서의 취향",hasChoice:!1},{stage:4,scriptId:"eunseo_04",title:"새벽 두 시의 라면",hasChoice:!0},{stage:5,scriptId:"eunseo_05",title:"빨래 걷기 당번",hasChoice:!0},{stage:6,scriptId:"eunseo_06",title:"편의점 앞 벤치",hasChoice:!0},{stage:7,scriptId:"eunseo_07",title:"과제가 안 풀리는 밤",hasChoice:!1},{stage:8,scriptId:"eunseo_08",title:"은서가 서울에 온 이유",hasChoice:!1},{stage:9,scriptId:"eunseo_09",title:"오해는 짧게",hasChoice:!0},{stage:10,scriptId:"eunseo_10",title:"마지막 판, 첫 마음",hasChoice:!0}],look:{hair:"#6b4630",hairStyle:"bob",skin:"#f7d9c4",outfits:["#f4a7b9","#ffd9a0","#fff3e0"],accent:"#e8657f",prop:"스케치북"}},{id:"hayeong",order:2,name:"하영",nickname:"요리왕",age:24,job:"조리학과 4학년",room:"202호",season:"spring",personality:["차분함","부지런함","은근 승부욕"],styleLabel:"피부터 쌓는다. 화려하진 않은데 정신 차리면 피박",style:{weights:{pi:1.7,tti:.9,gwang:.85},mistakeScale:.95,greedScale:.9,inferenceScale:1.05,aggressionScale:.8,stopScoreDelta:0},unlock:[],reward:{base:70,perStage:18},entryCost:25,lines:{matchStart:{low:["부엌 정리 끝났어. 한 판 하자.","손 씻고 와. 기름 묻은 손으로 패 만지지 말고.","앉아. 국 데워놨으니까 지면 그거 먹고 가."],mid:["오늘 반찬 잘 됐어. 이기면 하나 더 줄게.","자, 시작하자. 불 다 껐어.","오늘은 좀 길게 갈 생각이야."],high:["네 몫 덜어놨어. 치우면서 먹어.","기다렸어. 앉아.","오늘은 네가 좋아하는 거 했어. 판 끝나고."]},go:{low:["고.","고. 아직 멀었어.","고 할게. 피가 모자라."],mid:["고. 피 다섯 장만 더.","고. 재료 다 못 모았거든.","고. 여기서 끊으면 맛이 안 나."],high:["고. 오늘은 좀 욕심내 볼래.","고. 너랑 더 하고 싶어서라고 하면 웃을래?","고. 이유는 나중에 말해줄게."]},stop:{low:["스톱. 이 정도면 충분해.","스톱. 간 맞았어.","스톱."],mid:["스톱. 더 끓이면 졸아.","여기서 딱. 욕심은 요리도 맞고도 망쳐.","스톱할게. 피박은 확인했고."],high:["스톱. 얼른 끝내고 야식 먹자.","스톱. 오늘은 빨리 끝내고 얘기하고 싶어.","스톱. 대신 설거지는 네가."]},ppeok:{low:["뻑.","묶였네. 상관없어.","뻑이야. 저건 내가 다시 가져올 거고."],mid:["뻑. 냄비 뚜껑 닫아둔 셈 치자.","뻑 났어. 기다리면 돼.","저거 내 거야. 손대지 마."],high:["뻑. 너 지금 웃었지.","뻑 났는데 네가 좋아하네. 얄밉다.","뻑. 그래도 네 앞이라 다행이야."]},sseulVictim:{low:["쓸었네. 잘하네.","바닥 깨끗하다. 부엌도 그렇게 해줘.","인정. 잘했어."],mid:["쓸 줄도 알고. 언제 배웠어?","아까워라. 저거 내 피였는데.","좋아, 다음 판에 돌려받을게."],high:["또 쓸어. 진짜 얄미워.","그거 하지 마. 심장 내려앉아.","잘하는 거 알겠으니까 그만 좀 웃어."]},win:{low:["내가 이겼어. 국 식기 전에 먹어.","이겼네. 설거지는 네 담당.","수고했어. 다음엔 더 잘하겠지."],mid:["이겼다. 오늘 저녁은 내가 정한다.","봤지? 피가 무서운 거야.","이겼어. 상은 네가 주는 거로."],high:["이겼는데 왜 미안하지.","이겼으니까 소원 하나. 내일도 여기 앉아.","이겼다. 근데 오늘은 안 기쁘네. 네가 아쉬워해서."]},lose:{low:["졌네. 잘 쳤어.","인정할게. 오늘은 네가 나았어.","다음엔 안 봐줘."],mid:["졌다. 분한데 밥은 차려줄게.","너 요즘 늘었어. 인정.","한 판 더 하면 결과 다를 텐데."],high:["졌어. 근데 네가 이기는 것도 나쁘지 않네.","졌으니까 오늘은 내가 설거지. 같이 하자.","졌다. 이렇게 지는 건 처음이야."]},affection:{low:["이따 주방 쪽으로 와. 남은 거 있어.","잠깐 손 좀 빌릴 수 있을까.","물어볼 게 있는데, 지금 괜찮아?"],mid:["요리는 혼자 먹으면 맛이 없더라.","네 입맛 이제 대충 알 것 같아.","밥 먹을 사람이 있다는 게 좋아졌어."],high:["나 원래 남 챙기는 사람 아니야. 너 빼고.","이건 네 거야. 다른 사람 주려고 만든 거 아니야.","오늘은 내 얘기 좀 할게. 들어줄래?"]},hints:["나 피 모아. 피만 봐. 그거 하나만 막아도 반은 이겨.","쌍피 바닥에 놓지 마. 나 그거 주우려고 기다려.","내가 스톱 안 하면 피가 모자란 거야. 계산해봐."]},events:[{stage:1,scriptId:"hayeong_01",title:"부엌은 내 구역",hasChoice:!1},{stage:2,scriptId:"hayeong_02",title:"냉장고 칸 배분",hasChoice:!1},{stage:3,scriptId:"hayeong_03",title:"간을 못 맞추는 사람",hasChoice:!1},{stage:4,scriptId:"hayeong_04",title:"장 보러 가는 길",hasChoice:!0},{stage:5,scriptId:"hayeong_05",title:"실습 과제 시식단",hasChoice:!0},{stage:6,scriptId:"hayeong_06",title:"비 오는 날의 부침개",hasChoice:!0},{stage:7,scriptId:"hayeong_07",title:"졸업하면 뭐 할 거야",hasChoice:!1},{stage:8,scriptId:"hayeong_08",title:"하영이 요리를 시작한 날",hasChoice:!1},{stage:9,scriptId:"hayeong_09",title:"누구 몫이었을까",hasChoice:!0},{stage:10,scriptId:"hayeong_10",title:"한 사람을 위한 상",hasChoice:!0}],look:{hair:"#2f2723",hairStyle:"ponytail",skin:"#f3d3b8",outfits:["#a8d5b5","#d7e8c4","#fdf6e3"],accent:"#3e8e5a",prop:"앞치마"}},{id:"jiwoo",order:3,name:"지우",nickname:"밤샘",age:26,job:"미대 대학원생",room:"203호",season:"spring",personality:["야행성","무심함","집요함"],styleLabel:"띠만 본다. 홍단 청단 나오면 눈빛이 달라진다",style:{weights:{tti:1.8,hongdan:1.4,cheongdan:1.4,chodan:1.2,pi:.8},mistakeScale:.95,greedScale:1.1,inferenceScale:1,aggressionScale:.9,stopScoreDelta:1},unlock:[],reward:{base:80,perStage:20},entryCost:30,lines:{matchStart:{low:["아. 너구나. 앉아.","지금 몇 시야? ...뭐, 상관없나.","작업 막혔어. 딴짓하기 딱 좋네."],mid:["왔네. 커피 식었는데 마실래?","오늘은 좀 칠 만해. 앉아.","새벽에 제일 잘 보이거든, 패가."],high:["기다렸어. 밤이 길어서.","네 소리 나면 작업 손이 멈춰. 큰일이야.","앉아. 불 좀 줄일게."]},go:{low:["고.","고. 아직 색이 안 찼어.","고. 두 장 더."],mid:["고. 홍단이 보여.","고. 여기서 멈추면 그림이 미완성이야.","고. 나 이거 완성할 거야."],high:["고. 오늘 밤은 길게 쓰고 싶어.","고. 너 놀라는 거 보려고.","고. 이유 물어보지 마."]},stop:{low:["스톱.","됐어. 스톱.","여기까지. 스톱."],mid:["스톱. 색 다 채웠어.","스톱. 더 칠하면 탁해져.","스톱. 완성은 멈출 때 정해지는 거야."],high:["스톱. 얼른 끝내고 딴 얘기 하자.","스톱. 오늘은 너랑 할 얘기가 있어서.","스톱. 미안, 급해졌어."]},ppeok:{low:["뻑.","...묶였네.","저거 내 거였는데."],mid:["뻑. 밑칠 다시 하는 셈 치지.","괜찮아. 저 색은 내가 회수해.","뻑 났다고 그림이 끝나는 건 아니야."],high:["뻑. 웃지 마.","뻑이야. 너 지금 신났지.","뻑. 그래도 네 앞이라 덜 억울하다."]},sseulVictim:{low:["쓸었네.","바닥이 하얘졌어. 캔버스 같다.","잘했어. 인정."],mid:["아깝다. 저기 청단 있었는데.","손 빠르네. 그거 좋은 거야.","다음엔 안 남겨둘게."],high:["또 쓸어. 너 그거 일부러 하지.","그만 좀 잘해. 집중 안 돼.","쓸 때 표정이 제일 좋아. 그건 인정."]},win:{low:["끝. 잘 자.","내가 이겼어. 나 작업하러 갈게.","수고. 다음엔 좀 더 버텨봐."],mid:["이겼다. 오늘 색 잘 나왔어.","띠 모으는 거 무섭지? 이제 알겠지.","이겼으니까 옥상 조명 내가 쓸게."],high:["이겼는데 아쉽네. 판이 끝나서.","이겼어. 근데 안 갈래. 좀 더 있자.","내가 이겼으니 소원. 내일도 새벽에 나와."]},lose:{low:["졌네. 잘 치더라.","...다시 해.","그림이나 그리러 가야겠다."],mid:["졌다. 오늘 네 손이 좋았어.","인정. 근데 다음은 아니야.","지고 나니까 오히려 잠이 깼어."],high:["졌어. 근데 계속 생각날 것 같아, 이 판.","졌다. 너한테 지는 건 왜 덜 분하지.","졌으니까 벌칙. 내 작업 구경하고 가."]},affection:{low:["이거 봐줄래? 아니다, 됐어.","옥상 갈 건데. 같이 갈 사람 없나 해서.","작업 얘기 지루하지 않아?"],mid:["네가 보면 그림이 좀 달라 보여.","요즘 그림에 사람이 들어가. 처음이야.","밤에 누가 있으면 이렇게 다르구나."],high:["이거 너 그린 거야. 보지 마. ...봐도 돼.","나 원래 사람 안 그려.","오늘은 작업 안 할래. 너랑 있을래."]},hints:["나 띠만 봐. 홍단 청단 그거만.","띠 바닥에 놓지 마. 그거 먹으려고 기다리는 거야.","내가 길게 끄는 건 단이 하나 모자라서야."]},events:[{stage:1,scriptId:"jiwoo_01",title:"새벽 세 시의 마루",hasChoice:!1},{stage:2,scriptId:"jiwoo_02",title:"조용히 해달라는 부탁",hasChoice:!1},{stage:3,scriptId:"jiwoo_03",title:"지우의 색",hasChoice:!1},{stage:4,scriptId:"jiwoo_04",title:"옥상에서 본 새벽",hasChoice:!0},{stage:5,scriptId:"jiwoo_05",title:"모델 좀 서줄래",hasChoice:!0},{stage:6,scriptId:"jiwoo_06",title:"24시간 카페 원정",hasChoice:!0},{stage:7,scriptId:"jiwoo_07",title:"그림이 안 그려질 때",hasChoice:!1},{stage:8,scriptId:"jiwoo_08",title:"떨어진 공모전",hasChoice:!1},{stage:9,scriptId:"jiwoo_09",title:"누가 모델이야",hasChoice:!0},{stage:10,scriptId:"jiwoo_10",title:"완성된 그림",hasChoice:!0}],look:{hair:"#1f1b2e",hairStyle:"long",skin:"#efd2bd",outfits:["#5b6b8c","#3d4359","#c9c3e0"],accent:"#7a6fd8",prop:"물감 묻은 소매"}},{id:"sua",order:4,name:"수아",nickname:"체대",age:25,job:"체육교육과 4학년",room:"301호",season:"summer",personality:["직진","호승심","뒤끝 없음"],styleLabel:"7점만 넘으면 무조건 고. 멈추는 법을 배운 적이 없다",style:{weights:{gwang:1.2,yeol:1.2,godori:1.3},mistakeScale:.9,greedScale:1.8,inferenceScale:.95,aggressionScale:1.5,stopScoreDelta:4},unlock:[{tenantId:"eunseo",stage:5}],reward:{base:95,perStage:22},entryCost:35,lines:{matchStart:{low:["왔어? 몸 풀었어?","승부는 승부야. 봐주는 거 없어.","자, 시작하자. 시간 아까워."],mid:["오늘 컨디션 좋아. 너도 그래야 할 텐데.","훈련 끝나고 바로 왔어. 앉아.","이번엔 오래 갈 각오해."],high:["너랑 하는 게 제일 재밌어. 진짜로.","오늘 하루 종일 이 시간만 기다렸어.","자, 붙자. 살살은 안 해."]},go:{low:["고!","당연히 고지. 왜 물어봐?","고! 여기서 멈추는 건 지는 거야."],mid:["고! 아직 반도 안 왔어.","고. 멈추는 법 안 배웠거든.","고! 더 가자!"],high:["고! 네가 따라오는 게 재밌어서.","고! 오늘 밤 안 끝낼 거야.","고. 이렇게 해야 네가 진심으로 붙잖아."]},stop:{low:["...스톱. 억울한데 스톱.","여기서 끊는다. 다음 판 각오해.","스톱. 오늘은 여기까지만."],mid:["스톱. 이겼으면 됐어.","스톱! 깔끔하게 끝내자.","스톱. 더 가면 욕심이야. 이번만."],high:["스톱. 얼른 끝내고 같이 걷자.","스톱. 오늘은 빨리 끝내고 싶었어.","스톱! 대신 내일 또 하는 거다."]},ppeok:{low:["아 뻑! 짜증나!","뻑? 뻑이라고?","이런 거 진짜 싫어."],mid:["뻑. 괜찮아, 뒤집으면 돼.","묶였네. 근데 나 저거 회수할 거야.","뻑 한 번에 안 무너져."],high:["아 뻑! 야, 웃지 마!","뻑 났다고 좋아하지 마라 진짜.","뻑. 근데 네가 웃으니까 봐준다."]},sseulVictim:{low:["뭐야, 다 가져갔어?","야. 그거 좀 심하지 않아?","쓸었네. 인정은 한다."],mid:["잘하네. 열받게.","좋아, 그게 실력이면 인정.","다음엔 안 당해."],high:["또 쓸어? 너 나 놀리지.","그거 멋있는 거 알고 하는 거지.","쓸 때마다 심박수 올라가. 운동보다 심해."]},win:{low:["이겼다! 역시.","수고. 다음엔 더 붙어보자.","이겼어. 기분 좋다."],mid:["이겼다! 오늘 컨디션 최고!","봤지? 고는 이렇게 하는 거야.","이겼으니까 옥상 내 거."],high:["이겼다! 근데 너 왜 안 분해해?","이겼어. 상으로 내일 같이 뛰자. 새벽에.","이겼는데 네가 웃으니까 이긴 것 같지가 않네."]},lose:{low:["졌네. 깔끔하게 인정.","분하다! 다시!","잘 쳤어. 다음은 내 차례야."],mid:["졌다. 근데 재밌었어.","역시 너랑 해야 재밌지.","한 판 더! 아직 안 끝났어."],high:["졌어. 근데 하나도 안 억울해. 이상하지.","너한테 지는 건 왜 기분이 괜찮지.","졌으니까 벌칙 받을게. 뭐든지."]},affection:{low:["야, 너 내일 시간 있어? 아니 그냥 물어본 거야.","운동 같이 할 사람 구하는데.","뭐 마실래? 사 온 김에."],mid:["너 은근히 끈질겨. 그거 좋은 뜻이야.","같이 뛰면 기록이 잘 나와. 신기하지.","요즘 훈련보다 이 시간이 더 기다려져."],high:["나 원래 말 돌리는 거 못 해.","좋아하는 건 좋아한다고 말하는 성격이야.","오늘은 승부 말고 다른 얘기 하자."]},hints:["나 7점만 넘으면 무조건 고야. 그거 이용해.","고박 노려. 내가 멈추질 않으니까.","광이랑 열끗만 봐. 피는 신경 안 써."]},events:[{stage:1,scriptId:"sua_01",title:"3층에서 내려온 사람",hasChoice:!1},{stage:2,scriptId:"sua_02",title:"새벽 여섯 시의 발소리",hasChoice:!1},{stage:3,scriptId:"sua_03",title:"수아의 승부욕",hasChoice:!1},{stage:4,scriptId:"sua_04",title:"같이 뛸래?",hasChoice:!0},{stage:5,scriptId:"sua_05",title:"여름 옥상, 수박",hasChoice:!0},{stage:6,scriptId:"sua_06",title:"삔 발목",hasChoice:!0},{stage:7,scriptId:"sua_07",title:"임용까지 남은 시간",hasChoice:!1},{stage:8,scriptId:"sua_08",title:"그만둔 선수 생활",hasChoice:!1},{stage:9,scriptId:"sua_09",title:"말 안 한 이유",hasChoice:!0},{stage:10,scriptId:"sua_10",title:"마지막 고",hasChoice:!0}],look:{hair:"#3a2b1f",hairStyle:"short",skin:"#e8c09b",outfits:["#3f7fd0","#e2e8f0","#f5a623"],accent:"#2d6ac9",prop:"손목 테이핑"}},{id:"minji",order:5,name:"민지",nickname:"취준",age:26,job:"취업준비생",room:"302호",season:"summer",personality:["계산적","현실적","속정 깊음"],styleLabel:"기대값으로 친다. 스톱 타이밍이 소름 돋게 정확하다",style:{weights:{pi:1.2,tti:1.1,gwang:1.1},mistakeScale:.8,greedScale:.6,inferenceScale:1.25,aggressionScale:.7,stopScoreDelta:-2},unlock:[{tenantId:"hayeong",stage:5}],reward:{base:110,perStage:25},entryCost:40,lines:{matchStart:{low:["오늘 자소서 세 개 썼어. 머리 좀 식히자.","한 판만. 딱 한 판.","앉아. 시간은 내가 정할게."],mid:["오늘은 좀 오래 해도 돼. 서류 다 냈거든.","너랑 하면 머리가 비워져서 좋아.","자, 시작하자."],high:["하루 종일 이 시간 계산하면서 버텼어.","오늘은 아무 생각 없이 치고 싶어.","앉아. 커피 내려놨어."]},go:{low:["고. 기대값이 아직 플러스야.","고 할게. 계산해봤어.","고."],mid:["고. 상대 피가 다섯 장이거든.","고. 여기서 끊는 게 손해야.","고. 숫자가 그렇게 말해."],high:["고. 오늘은 숫자 말고 기분으로.","고. 판이 끝나는 게 싫어서.","고. 이런 건 처음이야."]},stop:{low:["스톱.","스톱. 여기가 최적이야.","스톱. 더 가면 기대값이 음수야."],mid:["스톱. 정확히 여기.","스톱. 미안한데 계산이 끝났어.","여기서 끊는 게 맞아. 스톱."],high:["스톱. 대신 한 판 더 하자.","스톱. 오늘은 얘기가 더 하고 싶어서.","스톱. 계산은 내일부터 할게."]},ppeok:{low:["뻑. 변수 발생.","뻑이네. 확률상 있을 수 있는 일이야.","예상 범위 안이야."],mid:["뻑. 12% 확률이었는데 걸렸네.","괜찮아. 회수 계획 있어.","변수는 계산에 넣어뒀어."],high:["뻑. 너 앞에서만 이래.","이상하다. 너랑 할 때만 확률이 안 맞아.","뻑. 웃지 마. 계산 흔들려."]},sseulVictim:{low:["쓸었네. 기대값 밖이야.","인정. 잘 봤어.","그건 못 막았다."],mid:["아깝다. 그거 내 계획이었는데.","좋은 수였어. 진심으로.","메모해둘게. 다음엔 안 당해."],high:["또 쓸어. 내 계산이 자꾸 틀려.","너 때문에 통계가 망가져.","잘한다. 얄밉게 잘해."]},win:{low:["이겼어. 오늘 운이 좋았네.","수고했어. 잘 자.","이겼다. 다시 자소서 쓰러 가야지."],mid:["이겼다. 오늘은 좀 기분 좋네.","계산대로야. 기분은 계산 밖이지만.","이겼으니까 오늘은 일찍 잘래."],high:["이겼는데 아쉽다. 판이 끝나서.","이겼어. 근데 안 갈래. 좀 더 있자.","이겼으니까 소원 하나 들어줘. 내일도 나와줘."]},lose:{low:["졌네. 변수는 늘 있으니까.","잘 쳤어. 인정.","다음엔 계산 더 정확히 할게."],mid:["졌다. 근데 기분은 안 나빠.","네가 나보다 잘 봤어. 인정할게.","지는 것도 데이터야."],high:["졌어. 근데 오늘 제일 즐거웠어.","너한테 지면 왜 손해 같지가 않지.","졌으니까 오늘은 네 말 들을게."]},affection:{low:["나 요즘 계획이 다 틀어져. 왜인지 모르겠어.","잠깐 앉아도 돼? 머리가 복잡해서.","이거 남는 거야. 먹어."],mid:["계획에 없던 시간이 제일 좋더라.","너랑 있으면 조급한 게 좀 가라앉아.","나 사실 하루에 이 시간이 제일 기다려져."],high:["내 인생 계획표에 너가 들어왔어.","계산 안 하고 말하는 거 처음이야.","오늘은 아무것도 재지 말고 얘기하자."]},hints:["나는 7점 되면 거의 스톱이야. 그거 계산해.","내가 고를 하면 네 피가 모자란 거야. 확인해봐.","길게 끌면 내가 유리해. 빨리 끝내."]},events:[{stage:1,scriptId:"minji_01",title:"불 켜진 302호",hasChoice:!1},{stage:2,scriptId:"minji_02",title:"공용 프린터 규칙",hasChoice:!1},{stage:3,scriptId:"minji_03",title:"민지의 계산법",hasChoice:!1},{stage:4,scriptId:"minji_04",title:"면접 복장 골라주기",hasChoice:!0},{stage:5,scriptId:"minji_05",title:"탈락 메일이 온 밤",hasChoice:!0},{stage:6,scriptId:"minji_06",title:"편의점 야식 회의",hasChoice:!0},{stage:7,scriptId:"minji_07",title:"부모님 전화",hasChoice:!1},{stage:8,scriptId:"minji_08",title:"포기한 전공",hasChoice:!1},{stage:9,scriptId:"minji_09",title:"합격한 친구",hasChoice:!0},{stage:10,scriptId:"minji_10",title:"계산에 없던 답",hasChoice:!0}],look:{hair:"#463229",hairStyle:"bun",skin:"#f2d5bd",outfits:["#5c6370","#d8dde6","#9aa5b1"],accent:"#4c6ef5",prop:"안경"}},{id:"narae",order:6,name:"나래",nickname:"옥상",age:25,job:"천문학과 대학원생",room:"303호",season:"summer",personality:["몽롱함","신비로움","고집"],styleLabel:"광만 쫓는다. 비광까지 끌어모아 5광을 노린다",style:{weights:{gwang:2,yeol:1.1,pi:.7,tti:.85},mistakeScale:1,greedScale:1.4,inferenceScale:1,aggressionScale:1,stopScoreDelta:3},unlock:[{tenantId:"jiwoo",stage:5}],reward:{base:125,perStage:28},entryCost:45,lines:{matchStart:{low:["오늘 구름 없어. 좋은 밤이야.","옥상 갔다 왔어. 손이 차가워.","앉아. 별 보러 가기 전에 한 판."],mid:["오늘 목성 보여. 이따 같이 볼래?","밤이 길어서 좋아.","자, 시작하자. 달이 밝네."],high:["네 생각하면서 별 봤어. 이상하지.","오늘은 판 끝나고 옥상 가자.","기다렸어. 밤이 아까워서."]},go:{low:["고. 아직 별이 모자라.","고.","고. 세 개로는 부족해."],mid:["고. 다섯 개 다 모을 거야.","고. 여기서 멈추면 별자리가 안 돼.","고. 나 욕심 많아."],high:["고. 밤이 더 길었으면 해서.","고. 너랑 더 있고 싶어서 그래.","고. 별은 기다리는 사람한테만 보여."]},stop:{low:["스톱.","됐어. 스톱.","스톱. 오늘은 여기까지."],mid:["스톱. 별자리 완성됐어.","스톱. 구름이 오네.","스톱. 딱 좋은 때야."],high:["스톱. 옥상 가자. 지금.","스톱. 오늘 밤은 다른 데 쓰고 싶어.","스톱. 보여주고 싶은 게 있어."]},ppeok:{low:["뻑. 구름 꼈네.","가려졌어. 기다리면 돼.","뻑."],mid:["뻑. 구름은 지나가는 거야.","괜찮아. 별은 안 사라져.","저거 내가 회수해."],high:["뻑. 너 지금 별처럼 웃었어.","뻑인데 왜 기분이 좋지.","가렸네. 그래도 네가 보여."]},sseulVictim:{low:["다 가져갔네. 하늘이 비었어.","쓸었구나.","잘했어."],mid:["아깝다. 저기 광 있었는데.","손이 빠르네. 유성처럼.","인정. 다음엔 안 놔둘게."],high:["또 쓸어. 너 유성우야?","그거 하지 마. 마음이 텅 비어.","멋있었어. 분한데 멋있었어."]},win:{low:["이겼다. 별 보러 갈게.","끝. 잘 자.","이겼어. 오늘 하늘 맑더라."],mid:["이겼다. 광 다 모았어.","봤지? 이게 오광이야.","이겼으니까 옥상 자리 내 거."],high:["이겼는데 왜 안 기쁘지. 판이 끝나서 그런가.","이겼어. 상으로 옥상 같이 가자.","이겼다. 오늘 별보다 네가 더."]},lose:{low:["졌네. 구름이 많았어.","잘 쳤어.","다음 밤에 또 하자."],mid:["졌다. 광이 하나 모자랐어.","아깝다. 진짜 아까워.","한 판 더 하면 다를 텐데."],high:["졌는데 이상하게 좋아.","너한테 지는 밤도 나쁘지 않네.","졌으니까 소원 들어줄게. 말해."]},affection:{low:["옥상 올라갈 건데. 혼자 가긴 좀 그래서.","이거 망원경 렌즈야. 만져볼래?","밤에 안 자는 사람 반가워."],mid:["누구랑 같이 보는 하늘은 다르더라.","혼자 보던 별인데 이제 네 생각이 나.","옥상 자리 하나 비워뒀어. 네 자리야."],high:["나 사실 별 얘기 들어주는 사람 처음이야.","오늘은 하늘 말고 너 볼래.","이 밤이 안 끝났으면 좋겠어."]},hints:["나 광만 봐. 광 바닥에 놓지 마.","비광도 주워. 나한테는 다섯 번째 별이야.","내가 오래 끄는 건 광이 모자라서야. 광박 노려."]},events:[{stage:1,scriptId:"narae_01",title:"옥상에 사람이 있다",hasChoice:!1},{stage:2,scriptId:"narae_02",title:"옥상 사용 규칙",hasChoice:!1},{stage:3,scriptId:"narae_03",title:"나래가 세는 것",hasChoice:!1},{stage:4,scriptId:"narae_04",title:"망원경 나르기",hasChoice:!0},{stage:5,scriptId:"narae_05",title:"여름 유성우",hasChoice:!0},{stage:6,scriptId:"narae_06",title:"비 오는 날의 옥상",hasChoice:!0},{stage:7,scriptId:"narae_07",title:"연구실에 남는 이유",hasChoice:!1},{stage:8,scriptId:"narae_08",title:"관측이 실패한 밤",hasChoice:!1},{stage:9,scriptId:"narae_09",title:"옥상의 다른 발소리",hasChoice:!0},{stage:10,scriptId:"narae_10",title:"다섯 번째 별",hasChoice:!0}],look:{hair:"#20304a",hairStyle:"wave",skin:"#f0d6c4",outfits:["#2c3e6b","#6b7fb5","#dfe7f5"],accent:"#ffd766",prop:"망원경"}},{id:"yerin",order:7,name:"예린",nickname:"회계",age:27,job:"회계법인 1년차",room:"304호",season:"autumn",personality:["꼼꼼함","단정함","의외로 허당"],styleLabel:"박은 절대 안 쓴다. 손해 나는 수를 두지 않는다",style:{weights:{pi:1.35,gwang:1.15,yeol:1.15,tti:1.15},mistakeScale:.7,greedScale:.75,inferenceScale:1.3,aggressionScale:.85,stopScoreDelta:-1},unlock:[{tenantId:"sua",stage:5}],reward:{base:140,perStage:30},entryCost:50,lines:{matchStart:{low:["퇴근했어. 딱 한 시간만.","정산 끝냈어. 이제 이걸 정산할 차례네.","앉으세요. 아, 편하게 해도 돼."],mid:["오늘 야근 없어. 길게 갈 수 있어.","장부 덮고 왔어. 시작하자.","오늘은 좀 이길 것 같은데."],high:["퇴근길 내내 이 생각만 했어.","오늘은 야근 안 했어. 너 때문에.","앉아. 차 내렸어."]},go:{low:["고. 손실 없어.","고 하겠습니다. 아, 반말 반말.","고."],mid:["고. 리스크 확인했어.","고. 최악의 경우도 감당 가능해.","고. 숫자상 문제없어."],high:["고. 이번엔 리스크 좀 져볼래.","고. 이런 거 나답지 않은데.","고. 안 끝냈으면 해서."]},stop:{low:["스톱.","스톱. 여기가 손익분기점이야.","스톱하겠습니다."],mid:["스톱. 광박 확인했고, 마무리할게.","여기서 끊는 게 최선이야. 스톱.","스톱. 회수 완료."],high:["스톱. 대신 차 한 잔 더.","스톱. 오늘은 얘기가 더 좋아서.","스톱. 미안, 급하게 끝냈어."]},ppeok:{low:["뻑. 대손 처리하죠.","뻑이네요. 아, 뻑이네.","장부에 적어둘게."],mid:["뻑. 미수금이라고 생각할게.","회수 가능한 채권이야. 걱정 마.","뻑. 계획엔 있었어."],high:["뻑. 너 앞에서만 이래 진짜.","이상해. 계산이 자꾸 어긋나.","뻑. 웃지 마, 더 틀려."]},sseulVictim:{low:["전액 회수당했네요.","쓸었구나. 잘했어.","깔끔하네. 인정."],mid:["아, 그건 예상 못 했어.","손실 확정. 인정할게.","좋은 수였어. 배웠어."],high:["또 쓸어. 내 장부가 엉망이야.","너 때문에 손익이 안 맞아.","잘하는 거 알겠으니까 그만 좀."]},win:{low:["이겼어요. 아, 이겼어.","수고했어. 잘 자.","정산 끝. 내일 또 출근이네."],mid:["이겼다. 오늘은 흑자야.","박은 안 썼어. 그게 내 원칙이거든.","이겼으니까 세탁기 우선권 내 거."],high:["이겼는데 아쉬워. 벌써 끝나서.","이겼어. 근데 안 일어날래.","이겼으니까 소원. 내일도 기다려줘."]},lose:{low:["졌네요. 아, 졌네.","잘 쳤어. 인정.","다음엔 더 꼼꼼히 볼게."],mid:["졌다. 근데 깔끔하게 졌어.","네가 더 잘 봤어.","재밌었어. 정말로."],high:["졌는데 손해 본 기분이 아니야.","너한테 지는 건 계산에 안 넣었었네.","졌으니까 오늘은 네 말 들을게."]},affection:{low:["저기, 존댓말 아직 어색해? 나는 좀 어색해.","퇴근하고 오면 불 켜져 있는 게 좋더라.","이거 회사에서 받은 건데 남아서."],mid:["나 사실 여기 오면 숨이 좀 쉬어져.","숫자 말고 사람 얘기 하는 게 오랜만이야.","너랑 있으면 퇴근한 기분이 들어."],high:["내 인생에서 계산 안 되는 게 딱 하나 생겼어.","원칙을 깨고 싶어진 건 처음이야.","오늘은 장부 안 볼래. 너만 볼래."]},hints:["나는 박을 절대 안 당해. 그러니까 정공법으로 와.","내가 스톱을 빨리 하는 편이야. 초반에 점수를 벌어.","리스크 없는 수만 둬서 느려. 속도로 눌러."]},events:[{stage:1,scriptId:"yerin_01",title:"가장 늦게 들어오는 사람",hasChoice:!1},{stage:2,scriptId:"yerin_02",title:"공과금 정산의 밤",hasChoice:!1},{stage:3,scriptId:"yerin_03",title:"예린의 원칙",hasChoice:!1},{stage:4,scriptId:"yerin_04",title:"야근 마중",hasChoice:!0},{stage:5,scriptId:"yerin_05",title:"가을 축제 초대권",hasChoice:!0},{stage:6,scriptId:"yerin_06",title:"감기 걸린 회계사",hasChoice:!0},{stage:7,scriptId:"yerin_07",title:"회사를 그만둘까",hasChoice:!1},{stage:8,scriptId:"yerin_08",title:"숫자를 믿게 된 이유",hasChoice:!1},{stage:9,scriptId:"yerin_09",title:"회사 선배의 연락",hasChoice:!0},{stage:10,scriptId:"yerin_10",title:"계산 밖의 항목",hasChoice:!0}],look:{hair:"#33261d",hairStyle:"long",skin:"#f4d8c2",outfits:["#7b8794","#cbd2d9","#b6786a"],accent:"#8b5e3c",prop:"서류 가방"}},{id:"seyeon",order:8,name:"세연",nickname:"연극",age:24,job:"연극영화과 4학년",room:"305호",season:"autumn",personality:["과장됨","눈치 빠름","외로움 잘 탐"],styleLabel:"표정과 대사로 흔든다. 고를 외쳐도 진짜인지 알 수 없다",style:{weights:{tti:1.25,yeol:1.2,godori:1.2,pi:1.05},mistakeScale:.85,greedScale:1.45,inferenceScale:1.15,aggressionScale:1.25,stopScoreDelta:2},unlock:[{tenantId:"minji",stage:5}],reward:{base:155,perStage:32},entryCost:55,lines:{matchStart:{low:["등장. 오늘의 상대역, 잘 부탁해.","대본 외우다 왔어. 머리 좀 식히자.","자, 1막 시작."],mid:["오늘 내 연기 잘 봐. 어디까지가 진짜일까?","무대 조명은 없지만 분위기는 내야지.","시작하자. 관객은 없지만."],high:["오늘은 연기 안 할게. 진짜로.","너한테는 안 통하더라, 내 연기.","앉아. 오늘 대사는 다 진심이야."]},go:{low:["고! ...일까?","고. 표정 읽지 마.","고야. 놀랐어?"],mid:["고. 근데 내가 진짜 좋은 패일까?","고! 이 대사 연습 많이 했어.","고. 너 지금 흔들렸지."],high:["고. 이번엔 진심이야. 진짜로.","고. 네 앞에선 연기가 안 돼.","고. 판 끝나는 게 싫어서."]},stop:{low:["스톱. 막 내립니다.","스톱! 커튼콜.","여기서 끊을게. 스톱."],mid:["스톱. 좋은 장면은 짧아야 해.","스톱. 여운을 남기는 게 연기야.","스톱. 다음 막을 기대해."],high:["스톱. 대사 말고 그냥 얘기하고 싶어.","스톱. 오늘은 무대 밖에 있고 싶어.","스톱. 연기 그만할래."]},ppeok:{low:["뻑! 이건 대본에 없었는데.","애드리브 들어갑니다.","뻑이네. 연출 실수."],mid:["뻑. 이것도 연기라고 해줄래?","묶였네. 2막에서 회수할게.","뻑. 이 표정 어때? 자연스러워?"],high:["뻑. 지금 표정은 진짜야.","야, 웃지 마. 연기 무너져.","뻑. 네 앞에서만 이래."]},sseulVictim:{low:["무대를 통째로 가져갔네.","쓸었어. 주연 자리 뺏겼다.","인정. 좋은 씬이었어."],mid:["아깝다. 저기 내 소품 있었는데.","그 장면 잘 나왔어. 인정.","다음 막엔 안 뺏겨."],high:["또 쓸어? 너 진짜 주연 하지.","그거 멋있는 거 알고 하는 거지?","심장 떨어지는 줄. 연기 아니야."]},win:{low:["막 내립니다. 박수는?","이겼어. 오늘 공연 끝.","수고했어, 상대역."],mid:["이겼다! 이번 막은 내 거야.","연기 좀 했지? 어디까지 속았어?","이겼으니까 욕실 순번 내 거."],high:["이겼는데 커튼콜이 안 즐겁네.","이겼어. 근데 안 나갈래. 무대에 더 있고 싶어.","이겼으니까 소원. 내일도 내 관객 해줘."]},lose:{low:["졌네. 오늘은 네가 주연.","잘 쳤어. 인정.","2막을 기대해."],mid:["졌다. 근데 좋은 장면이었어.","너 연기 안 하는데 왜 못 읽겠지.","다음 공연에서 보자."],high:["졌어. 근데 하나도 안 억울해.","너한테 지는 건 대본에 있었나 봐.","졌으니까 오늘 대사는 네가 정해."]},affection:{low:["대사 좀 받아줄래? 상대역이 없어서.","나 혼자 연습하면 이상하거든.","관객 한 명만 있어도 다르더라."],mid:["너 볼 때는 연기가 잘 안 돼.","무대 밖의 나도 봐주는 사람은 처음이야.","박수 안 쳐도 돼. 그냥 있어줘."],high:["나 사실 무대 내려오면 되게 조용해.","연기 말고 진짜 나를 보여준 적이 없었어.","오늘은 대본 없이 말할게."]},hints:["내 고는 반은 뻥이야. 점수 세어보면 알아.","표정 보지 마. 바닥을 봐.","내가 흔들 때는 진짜 좋은 패일 때가 적어."]},events:[{stage:1,scriptId:"seyeon_01",title:"복도에서 대사 외우는 사람",hasChoice:!1},{stage:2,scriptId:"seyeon_02",title:"소음 민원",hasChoice:!1},{stage:3,scriptId:"seyeon_03",title:"세연의 연기론",hasChoice:!1},{stage:4,scriptId:"seyeon_04",title:"대사 상대역",hasChoice:!0},{stage:5,scriptId:"seyeon_05",title:"가을 정기공연 티켓",hasChoice:!0},{stage:6,scriptId:"seyeon_06",title:"무대 뒤 도시락",hasChoice:!0},{stage:7,scriptId:"seyeon_07",title:"오디션에서 떨어진 날",hasChoice:!1},{stage:8,scriptId:"seyeon_08",title:"연기를 시작한 이유",hasChoice:!1},{stage:9,scriptId:"seyeon_09",title:"상대역과의 소문",hasChoice:!0},{stage:10,scriptId:"seyeon_10",title:"대본에 없는 대사",hasChoice:!0}],look:{hair:"#5a2230",hairStyle:"wave",skin:"#f6d9c6",outfits:["#b23a55","#f0c6d0","#2b2b3a"],accent:"#d94f6e",prop:"대본"}},{id:"dohee",order:9,name:"도희",nickname:"선배",age:28,job:"대학원 조교",room:"306호",season:"autumn",personality:["느긋함","짓궂음","통찰력"],styleLabel:"네 손패를 읽는다. 흔들기와 폭탄을 서슴없이 쓴다",style:{weights:{gwang:1.25,tti:1.2,yeol:1.2,pi:1.1},mistakeScale:.6,greedScale:1.15,inferenceScale:1.4,aggressionScale:1.6,stopScoreDelta:0},unlock:[{tenantId:"narae",stage:5}],reward:{base:175,perStage:35},entryCost:60,lines:{matchStart:{low:["오랜만이네, 후배. 앉아.","채점 끝났어. 이제 널 채점할 차례야.","손 좀 보자. 아, 패 말고 손."],mid:["오늘은 네가 뭘 노리는지 맞혀볼게.","앉아. 커피는 내가 샀어.","슬슬 시작할까."],high:["기다렸어. 오늘 좀 늦었네.","선배 노릇 그만하고 싶어지는 밤이야.","앉아. 오늘은 봐줄 생각 없어."]},go:{low:["고.","고 할게. 네 손에 뭐 있는지 알거든.","고. 여유 있어."],mid:["고. 너 방금 망설였지.","고. 네 손에 8월 남았잖아.","고. 아직 안 끝났어."],high:["고. 오늘 밤이 짧아서.","고. 이 판이 끝나면 네가 갈 거잖아.","고. 선배 욕심이라고 해두자."]},stop:{low:["스톱. 정리하자.","여기까지. 스톱.","스톱. 충분해."],mid:["스톱. 네 다음 수가 보여서.","스톱. 더 가면 네가 뒤집어.","스톱. 깔끔한 게 좋아."],high:["스톱. 오늘은 얘기가 하고 싶어서.","스톱. 판보다 네가 궁금해.","스톱. 선배가 먼저 접을게."]},ppeok:{low:["뻑. 그럴 수도 있지.","묶였네. 오래 안 갈 거야.","뻑."],mid:["뻑. 네가 저거 못 먹을 걸 아니까 괜찮아.","회수는 내 몫이지.","뻑. 계산에 있었어."],high:["뻑. 너 앞에서 체면 다 깎이네.","웃지 마. 선배 체면이 있지.","뻑. 오늘 왜 이러지 진짜."]},sseulVictim:{low:["쓸었네. 제법이야.","잘했어, 후배.","인정. 그건 좋은 수였어."],mid:["언제 이렇게 늘었어?","가르친 적 없는데 잘하네.","다음엔 안 놔둘게."],high:["또 쓸어. 이제 내가 배워야겠네.","너한테 쓸릴 줄이야.","잘한다. 얄미울 만큼."]},win:{low:["이겼다. 잘 배웠지?","수고했어. 다음엔 더 붙어봐.","끝. 들어가서 자."],mid:["이겼다. 아직 선배야.","흔들기 맛 좀 봤지?","이겼으니까 내일 조교실 커피는 네가."],high:["이겼는데 아쉽네. 벌써 끝이라서.","이겼어. 근데 안 보낼래.","이겼으니까 소원. 선배 말고 이름으로 불러봐."]},lose:{low:["졌네. 잘 쳤어.","인정. 오늘은 네가 나았어.","다음엔 안 봐줘."],mid:["졌다. 후배한테 지는 날도 오네.","네 수를 못 읽었어. 드문 일이야.","재밌었어. 정말로."],high:["졌어. 근데 하나도 안 분해.","너한테 지는 건 왜 이렇게 기분이 좋지.","졌으니까 오늘은 네가 선배 해."]},affection:{low:["후배, 시간 좀 있어? 아니 그냥.","조교실 커피가 남아서 가져왔어.","요즘 어때. 진짜로 묻는 거야."],mid:["선배 소리 들으면 거리감이 생기더라.","너랑 얘기하면 나이 생각이 안 나.","가끔은 나도 기대고 싶어."],high:["나 선배 노릇 그만하고 싶어졌어.","이름으로 불러줄래? 도희라고.","오늘은 후배 말고 그냥 너랑 있고 싶어."]},hints:["나는 네 손패를 세고 있어. 낸 패를 섞어.","내가 흔들면 진짜야. 그때는 빨리 끝내.","폭탄 맞기 싫으면 같은 월 세 장 안 남기게 유도해."]},events:[{stage:1,scriptId:"dohee_01",title:"같은 과 선배였다",hasChoice:!1},{stage:2,scriptId:"dohee_02",title:"하숙집 최고참의 조언",hasChoice:!1},{stage:3,scriptId:"dohee_03",title:"도희가 읽는 것",hasChoice:!1},{stage:4,scriptId:"dohee_04",title:"조교실 심부름",hasChoice:!0},{stage:5,scriptId:"dohee_05",title:"캠퍼스 벤치, 낙엽",hasChoice:!0},{stage:6,scriptId:"dohee_06",title:"논문 마감 전야",hasChoice:!0},{stage:7,scriptId:"dohee_07",title:"계속 공부할 거냐는 질문",hasChoice:!1},{stage:8,scriptId:"dohee_08",title:"도희가 하숙집에 온 해",hasChoice:!1},{stage:9,scriptId:"dohee_09",title:"선배라는 거리",hasChoice:!0},{stage:10,scriptId:"dohee_10",title:"이름으로 불러줘",hasChoice:!0}],look:{hair:"#241c17",hairStyle:"braid",skin:"#f1d4bb",outfits:["#8c6f4e","#d8c3a5","#4a3f35"],accent:"#b07d3f",prop:"머그컵"}},{id:"yoon",order:10,name:"윤",nickname:"장기하숙생",age:29,job:"정체 불명 (하숙집 최장기 거주자)",room:"별채",season:"winter",personality:["조용함","정확함","쓸쓸함"],styleLabel:"판 전체가 보인다. 그리고 네 습관까지 기억한다",style:{weights:{gwang:1.3,yeol:1.3,tti:1.3,pi:1.3,godori:1.2},mistakeScale:.3,greedScale:1,inferenceScale:1.5,aggressionScale:1.3,stopScoreDelta:-1},unlock:[{tenantId:"yerin",stage:5},{tenantId:"seyeon",stage:5},{tenantId:"dohee",stage:5}],reward:{base:220,perStage:45},entryCost:80,lines:{matchStart:{low:["앉아.","이 마루에서 삼십 년 동안 판이 돌았어.","네 차례가 올 줄 알았어."],mid:["오늘은 네가 먼저 내.","많이 늘었네. 누가 가르쳤어?","겨울 판은 길어. 각오해."],high:["기다렸어. 오래.","이 판이 끝나면 할 얘기가 있어.","앉아. 마지막 겨울이야."]},go:{low:["고.","고. 아직이야.","고. 서두르지 마."],mid:["고. 네 손에 뭐가 남았는지 알아.","고. 여기서 끝내면 아무것도 안 남아.","고."],high:["고. 이 밤을 늘리고 싶어서.","고. 끝나는 게 두려운 건 처음이야.","고. 이유는 다 알잖아."]},stop:{low:["스톱.","여기까지.","스톱. 충분해."],mid:["스톱. 네가 뒤집기 전에.","스톱. 다음 판이 더 중요해.","스톱."],high:["스톱. 이제 얘기하자.","스톱. 판은 끝나도 밤은 안 끝나.","스톱. 미안, 급해졌어."]},ppeok:{low:["뻑.","...묶였군.","괜찮아."],mid:["뻑. 삼십 년 만에 처음 같은데.","저건 회수해.","뻑. 드문 일이야."],high:["뻑. 너 앞에서만 이래.","이상하지. 손이 떨렸어.","뻑. 웃어도 돼."]},sseulVictim:{low:["쓸었군.","...제법이야.","잘했어."],mid:["그 수는 못 봤어. 오랜만이야.","너한테 배울 게 생겼네.","다음엔 안 놔둬."],high:["또 쓸어. 내가 지는 게 이렇게 반가울 줄이야.","너는 매번 나를 놀라게 해.","잘했어. 진심으로."]},win:{low:["끝났어. 들어가서 자.","아직 멀었어.","이겼다. 다시 와."],mid:["이겼어. 근데 예전보다 어려웠어.","네가 강해졌다는 뜻이야.","이겼으니 오늘은 여기까지."],high:["이겼는데 하나도 안 기뻐.","이겼어. 그런데 가지 마.","이겼으니 소원 하나. 내일도 와줘."]},lose:{low:["졌군. ...오랜만이야.","잘했어. 진심으로.","다시 해."],mid:["졌다. 삼십 년 만에 처음이야, 이런 기분.","네가 이 판을 가져갔어.","이 마루의 다음 차례는 너야."],high:["졌어. 그리고 기뻐. 이상하지.","누군가한테 지고 싶었던 건 처음이야.","이제 나도 이 집을 떠날 수 있겠네."]},affection:{low:["이 집에 대해 얼마나 알아?","삼십 년이면 긴 시간이야.","네 어머니가 처음 이 마루를 깔던 날을 기억해."],mid:["나는 여기서 계속 누군가를 기다렸어.","겨울은 늘 혼자 났어. 올해는 다르네.","이 집이 나한테 뭐였는지 이제 알 것 같아."],high:["나는 이기려고 여기 있었던 게 아니야.","이 판을 끝내줄 사람을 기다렸어.","오늘 밤이 마지막이어도 괜찮아. 네가 있으니까."]},hints:["네 최근 스무 판을 기억해. 습관을 바꿔.","나는 남은 패를 다 세. 안 보이는 수를 둬.","정공법으로는 안 돼. 흔들기든 폭탄이든 써."]},events:[{stage:1,scriptId:"yoon_01",title:"별채의 불빛",hasChoice:!1},{stage:2,scriptId:"yoon_02",title:"삼십 년의 규칙",hasChoice:!1},{stage:3,scriptId:"yoon_03",title:"윤이 기억하는 것",hasChoice:!1},{stage:4,scriptId:"yoon_04",title:"첫눈 오는 마루",hasChoice:!0},{stage:5,scriptId:"yoon_05",title:"오래된 화투 한 벌",hasChoice:!0},{stage:6,scriptId:"yoon_06",title:"어머니가 아는 이름",hasChoice:!0},{stage:7,scriptId:"yoon_07",title:"이 집을 떠나지 못한 이유",hasChoice:!1},{stage:8,scriptId:"yoon_08",title:"삼십 년 전 그 판",hasChoice:!1},{stage:9,scriptId:"yoon_09",title:"마지막 하숙생",hasChoice:!0},{stage:10,scriptId:"yoon_10",title:"하숙집의 겨울",hasChoice:!0}],look:{hair:"#15161c",hairStyle:"long",skin:"#ecd8cb",outfits:["#2b2f3a","#6d7280","#c8ccd6"],accent:"#9aa7c7",prop:"낡은 화투갑"}}],Sp={tenants:xp},Cp={gwang:1,yeol:1,tti:1,pi:1,godori:1,hongdan:1,cheongdan:1,chodan:1};function _p(e,n){const t=(e-1)/9,r=(n-1)/9,l=Math.min(1,t*.6+r*.4);return{mistakeRate:Math.max(0,.5*(1-l)),inference:l,greed:.3+.2*r,stopScore:Math.round(10-3*l),patternLearning:Math.max(0,(l-.8)*5),aggression:.2+.5*l,weights:{...Cp}}}function jp(e,n){return{...e,...n,weights:{...e.weights,...n.weights??{}}}}const $p=Sp,tn=$p.tenants;function Qt(e){const n=tn.find(t=>t.id===e);if(!n)throw new Error(`unknown tenant: ${e}`);return n}function Cf(e){return e<=30?"low":e<=70?"mid":"high"}function Ep(e,n){const t=_p(e.order,n),r=e.style;return jp(t,{mistakeRate:Qr(t.mistakeRate*(r.mistakeScale??1)),inference:Qr(t.inference*(r.inferenceScale??1)),greed:Qr(t.greed*(r.greedScale??1)),aggression:Qr(t.aggression*(r.aggressionScale??1)),stopScore:Math.max(7,t.stopScore+(r.stopScoreDelta??0)),weights:r.weights})}function Qr(e){return Math.max(0,Math.min(1,e))}function _f(e,n){return e.reward.base+e.reward.perStage*(n-1)}function ul(e,n){return e.unlock.length===0?!0:e.unlock.every(t=>(n[t.tenantId]??0)>=t.stage)}function Np(e){return e.unlock.length===0?"처음부터 승부 가능":e.unlock.map(n=>`${Qt(n.tenantId).name} ${n.stage}단계 클리어`).join(" + ")}const bp=`# 프롤로그 / 계절 전환 / 히든 엔딩
# 형식 설명은 README 의 "시나리오 스크립트 작성법" 참고

=== prologue | 개강 첫날 밤
@bg yard evening
@bgm spring
* 삼월. 짐가방을 끌고 대문을 들어서니 마당 흙냄새가 먼저 났다.
* 어머니가 운영하는 하숙집. 나는 이 집에서 나고 자랐고, 올해부터 다시 이 집에서 산다.
어머니 [웃음] 왔니. 방은 치워놨다.
나 네. 근데 마루에 왜 이렇게 방석이 많아요?
어머니 [기본] 아. 그거.
@bg maru evening
어머니 [기본] 우리 집 하숙생들은 밤마다 마루에서 화투를 친다.
나 [놀람] ...네?
어머니 [웃음] 삼십 년 된 전통이야. 돈은 안 걸어. 대신 설거지 면제권이니 옥상 독점권이니 하는 걸 걸지.
어머니 [기본] 그거 관리하는 게 올해부터 네 일이다.
나 그런 일이 왜 제 일이에요.
어머니 [웃음] 주인집 아들이니까.
* 어머니는 그 말만 남기고 안채로 들어갔다.
@bgm none
* 마루에 혼자 남아 방석을 개고 있는데, 등 뒤에서 발소리가 났다.
@bgm spring
@bg maru night
은서 [놀람] 어? 누구세요?
나 [기본] 아, 저는...
은서 [웃음] 아! 주인집 아들! 아주머니가 오늘 온다고 했어.
은서 [기본] 나 은서야. 201호. 네 옆방.
나 아, 네. 안녕하세요.
은서 [삐짐] 존댓말 하지 마. 나 너보다 한 살 많은데 그러면 더 어색해.
* 은서는 방석 두 개를 나란히 깔더니, 낡은 화투갑을 꺼냈다.
은서 [웃음] 근데 마침 잘됐다. 나 오늘 상대가 없었거든.
나 [놀람] 저... 저는 규칙도 잘 모르는데요.
은서 [웃음] 나도 어제 외웠어. 비슷하네.
@sfx card_shuffle
* 그렇게 첫 판이 시작됐다.
* 이 마루에서 백 판쯤 치게 될 거라고는, 그날의 나는 상상도 못 했다.
@affection 5
@end

=== season_summer | 여름이 왔다
@bg yard evening
@bgm summer
* 마당의 나무가 짙어지고, 마루에 깔린 방석이 하나 더 늘었다.
* 3층 하숙생들이 슬슬 마루로 내려오기 시작했다.
어머니 [웃음] 이제 3층 애들도 붙자고 할 거야. 각오해라.
나 각오 같은 건 왜 해요.
어머니 [기본] 걔들은 봐주는 법을 모르거든.
@end

=== season_autumn | 가을이 왔다
@bg campus evening
@bgm autumn
* 캠퍼스 벤치에 낙엽이 쌓이고, 하숙집 마루에는 전기장판이 깔렸다.
* 밤이 길어지자 판도 길어졌다.
어머니 [기본] 요즘은 새벽까지 하더라.
나 제가 말려야 하나요?
어머니 [웃음] 삼십 년 동안 말려본 사람이 없다.
@end

=== season_winter | 겨울이 왔다
@bg yard night
@bgm winter
* 첫눈이 온 날, 별채에 불이 켜졌다.
* 마당 끝, 아무도 쓰지 않는다고 알고 있던 그 방이었다.
나 [놀람] 어머니. 별채에 누구 살아요?
어머니 [진지] ...윤이.
나 윤이요?
어머니 [기본] 내가 이 집을 물려받았을 때부터 있었어.
나 [놀람] 그게 몇 년 전인데요.
어머니 [기본] 삼십 년.
* 어머니는 더 말하지 않았다.
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
어머니 [웃음] 이 사진, 마루에 걸어두자.
어머니 [기본] 삼십 년 뒤에 누가 보겠지.
@bgm none
* 하숙집의 밤은 아직 한참 남아 있었다.
@point 1000
@end
`,Mp=`# 도희 (선배) - 가을 / 9번 하숙생

=== dohee_01 | 같은 과 선배였다
@bg campus evening
@bgm autumn
@outfit 0
* 학과 사무실에서 조교가 고개를 들었다. 아는 얼굴이었다.
도희 [웃음] 어? 너 하숙집 아들 맞지?
나 [놀람] 선배님이 왜 여기...
도희 [기본] 조교야. 그리고 306호.
나 [놀람] 같은 집 사는데 몰랐어요?
도희 [웃음] 나는 알았지. 네가 몰랐던 거고.
* 도희는 서류를 정리하며 덧붙였다.
도희 [기본] 너 요즘 마루에서 유명하더라. 1층 2층 다 이겼다고.
나 운이 좋았어요.
도희 [웃음] 운이었으면 한 번이지, 열 번이 운이겠어?
도희 [기본] 오늘 밤에 보자. 3층이 끝났으면 이제 나랑 할 차례야.
@affection 10
@end

=== dohee_02 | 하숙집 최고참의 조언
@bg maru night
@bgm autumn
도희 [기본] 주인집 아들 노릇 힘들지.
나 [기본] 조금요.
도희 [웃음] 내가 여기 육 년째야. 규칙 만드는 거 몇 번 봤어.
나 어떻게 하는 게 좋아요?
도희 [진지] 규칙은 약한 사람을 기준으로 만들어야 해.
나 왜요?
도희 [기본] 강한 사람은 규칙 없어도 알아서 챙기거든.
* 도희는 차를 한 모금 마셨다.
도희 [기본] 예린이가 만든 공과금 표 있지. 그거 3층 기준이야.
도희 [웃음] 3층이 제일 많이 내는데도 3층이 만들었어. 그게 좋은 규칙이야.
나 [기본] 기억할게요.
도희 [웃음] 선배 노릇 하나 했네.
@affection 10
@end

=== dohee_03 | 도희가 읽는 것
@bg maru night
@bgm autumn
* 도희가 내 손패를 보지도 않고 말했다.
도희 [기본] 너 지금 8월 들고 있지.
나 [놀람] 어떻게 알았어요?
도희 [웃음] 아까 바닥에 8월 깔렸을 때 네가 안 먹었잖아.
도희 [기본] 안 먹었다는 건 하나 더 있다는 뜻이야. 나중에 몰아서 먹으려고.
나 [놀람] ...그걸 다 보고 있었어요?
도희 [기본] 이건 재능이 아니라 습관이야. 논문 심사 육 년 하면 생겨.
도희 [웃음] 사람들은 자기가 뭘 숨기는지 반드시 티를 내거든.
나 그럼 저는 뭘 티 내는데요.
도희 [웃음] 그건 안 알려줄래. 재미없어지니까.
@affection 10
@end

=== dohee_04 | 조교실 심부름
@bg campus evening
@bgm warm
@outfit 1
* 도희가 책 상자 세 개를 앞에 두고 한숨을 쉬고 있었다.
도희 [기본] 이거 3층 연구실로 옮겨야 하는데.
나 엘리베이터 없어요?
도희 [웃음] 이 건물엔 없어.
@choice
- 세 상자 다 옮기기 | +8 | A
- 한 상자씩 같이 나르기 | +9 | B
@label A
나 [기본] 제가 다 옮길게요.
도희 [놀람] 세 번 왔다 갔다 해야 하는데.
나 그러니까 빨리 시작해야죠.
* 세 번째 상자를 옮길 때쯤 다리가 풀렸다.
도희 [웃음] 후배, 무리했네.
@goto END
@label B
나 [기본] 한 상자씩 같이 나르죠. 세 번이면 되니까.
도희 [기본] 그럼 나도 세 번 올라가야 하잖아.
나 같이 올라가면 덜 힘들잖아요.
도희 [놀람] ...그건 무슨 논리야.
나 선배가 가르쳐준 논리인데요. 규칙은 약한 사람 기준.
도희 [웃음] 야. 그거 이럴 때 쓰는 거 아니야.
@label END
* 마지막 상자를 내려놓고 도희가 말했다.
도희 [기본] 나 여기서 육 년 동안 상자 혼자 날랐어.
도희 [부끄러움] 같이 나른 건 오늘이 처음이야.
@affection 10
@end

=== dohee_05 | 캠퍼스 벤치, 낙엽
@bg campus evening
@bgm autumn
@outfit 1
* 벤치에 낙엽이 쌓여 있었다. 도희가 그 위에 그냥 앉았다.
나 [놀람] 옷 더러워지는데요.
도희 [웃음] 낙엽은 안 더러워.
* 도희는 낙엽 하나를 주워 들었다.
도희 [기본] 나 이 벤치에서 육 년 앉았어. 학부 때부터.
나 안 질려요?
도희 [기본] 매년 다르거든. 같은 나무인데 매년 색이 달라.
@choice
- 옆에 앉기 | +9 | A
- 낙엽 치우고 앉기 | +6 | B
@label A
* 나는 그냥 낙엽 위에 앉았다.
도희 [놀람] 옷 더러워진다며.
나 선배가 안 더럽다면서요.
도희 [웃음] ...말 잘 듣네.
@goto END
@label B
* 나는 낙엽을 손으로 쓸어내고 앉았다.
도희 [삐짐] 굳이.
나 선배 옷은 괜찮고 제 옷은 안 괜찮아서요.
도희 [웃음] 이기적이네.
@label END
@bgm warm
도희 [기본] 있잖아. 나 이 벤치에 누구랑 같이 앉은 게.
나 처음이에요?
도희 [부끄러움] ...육 년 만이야.
@affection 10
@end

=== dohee_06 | 논문 마감 전야
@bg room night
@bgm tense
@outfit 1
* 306호의 불이 사흘째 꺼지지 않았다.
도희 [패배] 서른 시간 남았는데 결론이 안 나와.
나 [놀람] 사흘 안 주무셨어요?
도희 [기본] 조교 일도 해야 하니까.
@choice
- 조교 일을 대신 해주기 | +9 | A
- 밤새 옆에서 자료 정리 돕기 | +9 | B
@label A
나 [기본] 조교 일 제가 할게요. 복사랑 출석 정리 정도는 할 수 있어요.
도희 [놀람] 그건 학생이 하면 안 되는데.
나 그럼 안 한 걸로 하죠.
도희 [웃음] ...선배를 공범으로 만드네.
@goto END
@label B
나 [기본] 자료 정리 도울게요. 선배는 쓰기만 하세요.
도희 [놀람] 내 논문 주제 알아?
나 모르죠. 근데 정렬은 할 수 있잖아요.
* 새벽 네 시까지 표 서른 개를 정리했다.
도희 [부끄러움] ...너 진짜 안 자네.
@label END
@bgm warm
* 아침 여섯 시. 도희가 엔터를 눌렀다.
도희 [기본] 끝났다.
도희 [부끄러움] 육 년 동안 마감 밤에 누가 옆에 있었던 건 처음이야.
@affection 10
@end

=== dohee_07 | 계속 공부할 거냐는 질문
@bg campus night
@bgm sad
@outfit 0
도희 [기본] 교수님이 박사 갈 거냐고 물으셨어.
나 뭐라고 하셨어요?
도희 [기본] 생각해보겠다고. 삼 년째 같은 대답이야.
나 왜 망설이세요?
도희 [패배] 서른이 다 됐거든. 동기들은 다 나갔어.
도희 [기본] 조교실에 남아 있으면 가끔 그런 생각 들어. 내가 여기서 굳어가는 건가.
* 도희는 웃었지만 눈은 웃지 않았다.
도희 [기본] 후배들은 나를 '선배'라고 부르잖아. 그게 편하면서도 좀 무서워.
나 왜 무서워요?
도희 [패배] 선배는 흔들리면 안 되는 자리니까.
@bgm warm
나 [기본] 저한테는 흔들려도 되는데요.
도희 [놀람] ...뭐?
나 저는 선배 소리 안 해도 되니까요. 하숙집에선 그냥 306호잖아요.
도희 [부끄러움] ...야. 그런 말 하면 진짜 흔들려.
@affection 10
@end

=== dohee_08 | 도희가 하숙집에 온 해
@bg maru night
@bgm sad
@outfit 0
도희 [기본] 나 여기 스물두 살에 왔어.
나 [놀람] 육 년이 아니라 칠 년이네요.
도희 [웃음] 계산 빠르네.
도희 [기본] 그때 집에 일이 좀 있었어. 갈 데가 없었지.
도희 [기본] 네 어머니가 보증금 없이 들여보내주셨어. 처음 보는 애한테.
나 [놀람] 그런 일이 있었어요?
도희 [기본] 그래서 이 집 규칙은 내가 제일 잘 지켜.
* 도희는 마루를 한 번 쓸었다.
도희 [기본] 이 마루에 처음 앉은 날, 윤이 나한테 한 판 하자고 했어.
나 [놀람] 윤이요? 별채의?
도희 [기본] 응. 그때 윤이 그러더라. "여기 앉으면 다 하숙생이야"라고.
도희 [웃음] 그 한마디에 칠 년 있었네.
@affection 10
@end

=== dohee_09 | 선배라는 거리
@bg hallway night
@bgm tense
@outfit 0
* 은서가 복도에서 나를 붙잡고 웃으며 말했다.
은서 [웃음] 도희 언니가 너 얘기 자주 해. 되게 많이.
* 그날 밤 도희는 평소보다 말수가 적었다.
@choice
- 왜 제 얘기를 하시냐고 묻기 | +10 | A
- 선배라고 안 부르기 | +10 | B
@label A
나 [기본] 제 얘기 하신다면서요.
도희 [놀람] ...은서가 말했구나.
나 뭐라고 하셨는데요.
도희 [기본] 별말 안 했어. 후배가 일 잘한다고.
나 그게 다예요?
도희 [부끄러움] ...아니.
나 그럼요.
도희 [부끄러움] 야. 선배한테 그렇게 캐묻는 거 아니야.
@goto END
@label B
나 [기본] 도희 씨.
도희 [놀람] ...뭐?
나 선배 말고 그렇게 불러보려고요.
도희 [부끄러움] 갑자기 왜.
나 선배라고 부르면 거리가 생긴다면서요.
도희 [부끄러움] ...그건 내가 한 말인데 왜 네가 써먹어.
@label END
@bgm warm
도희 [기본] 나 선배 노릇 칠 년 했어. 잘하는 줄 알았는데.
도희 [부끄러움] 요즘은 그만두고 싶어져.
@affection 10
@end

=== dohee_10 | 이름으로 불러줘
@bg maru night
@bgm confess
@outfit 2
* 열 번째 판. 도희는 흔들기도, 폭탄도 쓰지 않았다.
나 [놀람] 오늘은 왜 안 쓰세요? 손에 세 장 있잖아요.
도희 [웃음] 알아봤네.
나 선배가 가르쳐줬잖아요.
도희 [기본] 그랬지.
@cg dohee_ending
* 도희는 패를 내려놓고, 처음으로 먼저 눈을 피했다.
도희 [기본] 나 흔들기 잘 써. 폭탄도. 상대 패도 다 읽어.
도희 [기본] 근데 그게 다 거리를 두는 방법이었어.
도희 [진지] 읽는 사람은 안 읽히거든. 선배도 그래. 가르치는 사람은 안 배워도 되니까.
도희 [패배] 칠 년 동안 그렇게 살았어.
도희 [부끄러움] 근데 너한테는 다 읽혔어. 처음부터.
도희 [부끄러움] 나 너 좋아해.
도희 [기본] 승부에서 이겨서 얻는 것도 아니고, 선배가 후배한테 주는 것도 아니야.
도희 [웃음] 그냥 마주 앉아 있다 보니 내가 먼저 졌어.
@choice
- 도희 씨 | +20 | A
- 저도 다 읽혔어요 | +20 | B
@label A
나 [기본] 도희 씨.
도희 [놀람] ...
나 이름으로 불러달라면서요.
도희 [부끄러움] 그건 이겼을 때 소원으로 말한 건데.
나 오늘은 제가 이겼잖아요.
도희 [웃음] ...아. 그러네.
@goto END
@label B
나 [기본] 저도 다 읽혔어요. 첫날부터요.
도희 [놀람] 뭘.
나 학과 사무실에서 저 아는 척하셨을 때요. 저 그날부터 신경 쓰였어요.
도희 [부끄러움] 그건 그냥 인사였는데.
나 선배가 그러셨잖아요. 사람은 숨기는 걸 반드시 티 낸다고.
도희 [부끄러움] ...내 말에 내가 걸렸네.
@label END
@bgm warm
도희 [웃음] 그럼 내일부터 선배 소리 금지야.
나 학교에서도요?
도희 [부끄러움] ...학교에서는 해. 조교 체면이 있지.
@affection 20
@point 300
@end
`,Pp=`# 은서 (옆방) - 봄 / 1번 하숙생

=== eunseo_01 | 옆방 사람
@bg maru night
@bgm spring
@outfit 0
* 첫 판이 끝났다. 이겼다. 규칙도 모르는 사람이 이긴 건 아마 운이었다.
은서 [놀람] 어? 너 처음 아니야?
나 처음 맞아요. 아니, 맞아.
은서 [웃음] 말 놓는 거 어색하지. 나도 어색해. 근데 계속 그러면 더 어색해져.
* 은서는 패를 주섬주섬 모으더니 갑자기 손을 내밀었다.
은서 [웃음] 다시. 나 은서. 옆방.
나 [기본] ...응. 반가워.
은서 [기본] 앞으로 밤마다 여기 있을 거니까, 심심하면 나와.
나 매일 쳐?
은서 [삐짐] 매일은 아니고. 거의 매일.
* 그게 무슨 차이인지는 나중에야 알았다.
@affection 10
@end

=== eunseo_02 | 하숙집 규칙 세 가지
@bg maru night
@bgm spring
은서 [기본] 오늘은 규칙 알려줄게. 주인집 아들이 모르면 안 되지.
은서 [웃음] 첫째, 돈은 안 건다. 대신 포인트.
나 포인트?
은서 [기본] 설거지 면제권, 옥상 독점권, 야식 쿠폰. 그런 걸로 바꿔 쓰는 거야.
나 생각보다 치열하네.
은서 [진지] 치열해. 지난 학기에 세연 언니가 욕실 순번 걸고 3고 했다가 한 달 동안 제일 늦게 씻었어.
나 [놀람] 한 달을?
은서 [웃음] 둘째, 진 사람은 뒷정리. 셋째...
은서 [부끄러움] 셋째는 그냥... 재미로 하는 거니까 너무 진지해지지 말자는 거.
나 그건 규칙이라기보단 부탁 같은데.
은서 [삐짐] 시끄러워. 그게 제일 중요한 거야.
@affection 10
@end

=== eunseo_03 | 은서의 취향
@bg hallway evening
@bgm spring
* 복도에서 마주친 은서는 손에 스케치북을 들고 있었다.
나 그거 과제야?
은서 [웃음] 응. 근데 잘 안 돼.
나 뭐 그리는데?
은서 [부끄러움] ...사람.
나 누구?
은서 [놀람] 아니 그냥! 사람! 일반적인 사람!
* 은서는 스케치북을 등 뒤로 숨겼다.
은서 [기본] 나 사실 그림보다 색 고르는 게 더 좋아. 아침 여섯 시 하늘색 같은 거.
나 그건 무슨 색인데.
은서 [웃음] 회색인데 회색이 아니야. 언젠가 보여줄게.
* 아침 여섯 시에 같이 하늘을 보자는 뜻이라는 걸, 그때는 알아듣지 못했다.
@affection 10
@end

=== eunseo_04 | 새벽 두 시의 라면
@bg kitchen night
@bgm warm
@outfit 0
* 새벽 두 시. 부엌에 불이 켜져 있었다.
은서 [놀람] 어! 너도 배고팠어?
나 [기본] 소리 나서 내려왔어.
은서 [부끄러움] 나 라면 끓이는 중인데... 하나뿐이야.
@choice
- 반만 먹자 | +8 | A
- 난 괜찮으니까 다 먹어 | +5 | B
@label A
나 [기본] 반만 먹자. 냄비째로.
은서 [웃음] 그럼 젓가락 두 개. 좋아.
* 우리는 냄비 하나를 가운데 두고 마주 앉았다.
은서 [웃음] 이거 좀 하숙집 같다. 그치?
나 원래 하숙집이잖아.
은서 [기본] 그게 아니라... 하숙집처럼 느껴진다고.
@goto END
@label B
나 [웃음] 난 괜찮아. 다 먹어.
은서 [삐짐] 그럼 왜 내려왔어. 앉아 있기라도 해.
* 은서는 결국 면을 반으로 갈라 내 앞에 놓았다.
은서 [부끄러움] 혼자 먹으면 맛없단 말이야.
@label END
@bgm none
* 라면은 불었고, 국물은 짰고, 이상하게 오래 기억에 남았다.
@affection 10
@end

=== eunseo_05 | 빨래 걷기 당번
@bg rooftop evening
@bgm spring
@outfit 1
* 비가 온다는 소식에 옥상으로 올라갔더니 은서가 이미 빨래를 걷고 있었다.
은서 [놀람] 어? 오늘 당번 나 아니었어?
나 두 명이면 빠르잖아.
은서 [웃음] 그건 맞네.
* 바람이 불어 널려 있던 수건 하나가 은서 머리 위로 떨어졌다.
은서 [놀람] 으악!
@choice
- 수건 걷어주기 | +8 | A
- 웃음부터 나온다 | +6 | B
@label A
* 수건을 걷어내자 은서가 눈을 깜빡였다.
은서 [부끄러움] ...고마워.
나 머리 다 헝클어졌어.
은서 [삐짐] 안 봐도 돼!
@goto END
@label B
나 [웃음] 미안. 웃을 상황은 아닌데.
은서 [삐짐] 웃지 마! 도와줘!
* 그러면서 은서도 웃고 있었다.
@label END
은서 [기본] 있잖아. 빨래 걷는 거 원래 되게 귀찮은 일인데.
은서 [웃음] 오늘은 안 귀찮았어.
@affection 10
@end

=== eunseo_06 | 편의점 앞 벤치
@bg cvs night
@bgm warm
@outfit 1
* 야식 쿠폰을 쓰러 간다더니 결국 편의점까지 따라오게 됐다.
은서 [웃음] 골라. 오늘 내가 쏜다. 어제 이겼으니까.
나 어제 이긴 건 나였는데.
은서 [놀람] ...그랬나?
@choice
- 그래도 얻어먹기 | +6 | A
- 내가 살게 | +8 | B
@label A
나 [웃음] 됐어. 그럼 오늘은 얻어먹을게.
은서 [웃음] 좋아! 제일 비싼 거 골라.
@goto END
@label B
나 [기본] 내가 살게. 이긴 사람이 사는 걸로 하자.
은서 [놀람] 그게 무슨 규칙이야.
나 새로 만든 규칙.
은서 [부끄러움] ...하숙집 규칙 넷째네.
@label END
* 편의점 앞 벤치에 앉아 컵라면 뚜껑을 반쯤 열었다.
은서 [기본] 나 서울 와서 제일 많이 앉은 데가 여기야.
나 왜?
은서 [웃음] 혼자 있어도 안 외로운 데라서. 사람들 지나가니까.
은서 [부끄러움] 근데 오늘은 사람 안 봐도 되네.
@affection 10
@end

=== eunseo_07 | 과제가 안 풀리는 밤
@bg hallway night
@bgm sad
@outfit 0
* 새벽 한 시. 201호 문틈으로 불빛이 새어나왔다.
나 아직 안 자?
은서 [패배] 과제가 안 돼.
나 뭐가 문제인데.
은서 [기본] 교수님이 "네 색이 뭐냐"고 물었어. 근데 나 모르겠어.
은서 [패배] 다들 자기 색이 있는데 나만 없는 것 같아.
@bgm none
* 은서는 스케치북을 무릎에 올려놓은 채 한참 말이 없었다.
나 [기본] 아침 여섯 시 하늘색.
은서 [놀람] 어?
나 저번에 말했잖아. 회색인데 회색이 아닌 색.
나 그거 아무나 아는 색 아니야.
@bgm warm
은서 [부끄러움] ...기억했어?
나 그건 기억할 만했어.
은서 [웃음] 야. 반칙이야 그거.
* 은서는 스케치북을 다시 펴고, 회색 같은 색을 칠하기 시작했다.
@affection 10
@end

=== eunseo_08 | 은서가 서울에 온 이유
@bg rooftop night
@bgm sad
@outfit 0
* 옥상 난간에 기대 은서가 먼저 말을 꺼냈다.
은서 [기본] 나 사실 재수했어.
나 [기본] 그랬구나.
은서 [기본] 고향에서는 그림 그리면 밥 못 먹는다고 다들 그랬어.
은서 [패배] 아빠랑 크게 싸우고 올라왔어. 일 년 동안 연락 안 했어.
* 은서는 잠깐 멈췄다가 웃었다.
은서 [웃음] 근데 지난주에 먼저 전화 오셨어. 하숙집 밥 잘 나오냐고.
나 뭐라고 했어?
은서 [웃음] 하영 언니가 해주는 거 맛있다고. 그리고...
은서 [부끄러움] 여기 사람들 괜찮다고 했어.
@bgm warm
나 [기본] 잘 말했네.
은서 [기본] 있잖아. 나 처음 이 마루에 앉았을 때 진짜 무서웠어.
은서 [웃음] 근데 지금은 여기가 제일 편해.
* 옥상 바람이 찼는데도 은서는 한참 들어가지 않았다.
@affection 10
@end

=== eunseo_09 | 오해는 짧게
@bg maru night
@bgm tense
@outfit 0
* 며칠째 은서가 마루에 나오지 않았다.
* 물어보니 복도에서 내가 도희 선배와 웃으며 이야기하는 걸 봤다고 했다.
은서 [삐짐] 아니야. 그냥 요즘 바빠서 그런 거야.
나 [기본] 은서야.
은서 [삐짐] 진짜야! 과제가 많다니까.
@choice
- 그날 무슨 얘기였는지 말해주기 | +10 | A
- 바쁜 건 알겠는데 마루엔 나와 | +6 | B
@label A
나 [기본] 그날 도희 선배랑 한 얘기, 네 얘기였어.
은서 [놀람] ...내 얘기?
나 네가 요즘 그림 때문에 힘들어하는 것 같다고. 선배가 조교니까 조언 좀 구했어.
은서 [부끄러움] 그걸... 왜 네가.
나 그러게. 왜 그랬을까.
은서 [부끄러움] 야. 그런 식으로 말하지 마.
@goto END
@label B
나 [기본] 바쁜 건 알겠어. 근데 마루엔 나와.
은서 [삐짐] 왜.
나 방석 하나가 비면 티가 나.
은서 [부끄러움] ...그런 말은 어디서 배웠어.
@label END
@bgm warm
은서 [기본] 미안해. 나 혼자 이상한 생각했어.
나 무슨 생각?
은서 [부끄러움] 말 안 해. 대신 오늘 밤에 나갈게.
@affection 10
@end

=== eunseo_10 | 마지막 판, 첫 마음
@bg maru night
@bgm confess
@outfit 2
* 열 번째 판이 끝났다. 은서는 패를 정리하지 않고 가만히 앉아 있었다.
은서 [기본] 열 판이네.
나 셌어?
은서 [웃음] 당연히 셌지. 첫 판부터 다 세고 있었어.
* 은서는 스케치북을 꺼내 한 장을 펼쳤다.
은서 [부끄러움] 이거. 과제로 낸 그림이야.
@cg eunseo_ending
* 아침 여섯 시의 하늘 아래, 마루에 두 사람이 마주 앉아 있는 그림이었다.
나 [놀람] 이거...
은서 [부끄러움] 교수님이 물었잖아. 네 색이 뭐냐고.
은서 [기본] 나 그때 대답 못 했는데, 이제 알 것 같아.
은서 [웃음] 내 색은 이 마루 불빛 색이야.
은서 [부끄러움] 그리고 그 불빛 아래에 네가 있어.
* 은서는 스케치북을 무릎에 올려놓고, 고개를 들지 못한 채 말했다.
은서 [부끄러움] 나 너 좋아해.
은서 [기본] 이긴 사람이 뭐 받는 거 아니야. 그런 거 아니야.
은서 [웃음] 그냥 백 번쯤 마주 앉다 보니까 그렇게 됐어.
@choice
- 나도 같은 마음이야 | +20 | A
- 나도 열 판을 다 세고 있었어 | +20 | B
@label A
나 [웃음] 나도 같은 마음이야.
은서 [놀람] 진짜?
나 진짜.
@goto END
@label B
나 [기본] 나도 열 판을 다 세고 있었어.
은서 [부끄러움] ...야. 그건 반칙이라니까.
@label END
@bgm warm
은서 [웃음] 그럼 내일도 여기 앉는 거지?
나 앉아야지. 방석 하나 비면 티 나니까.
은서 [부끄러움] 그 말 또 하지 마. 심장에 안 좋아.
* 마루의 불은 그날 밤 제일 늦게 꺼졌다.
@affection 20
@point 300
@end
`,Dp=`# 하영 (요리왕) - 봄 / 2번 하숙생

=== hayeong_01 | 부엌은 내 구역
@bg kitchen evening
@bgm spring
@outfit 0
* 부엌에 들어서자 하영이 칼을 든 채 돌아봤다.
하영 [기본] 주인집 아들이구나. 소문 들었어.
나 소문이요?
하영 [웃음] 은서가 밤마다 자랑하더라. 너한테 졌다고.
나 [놀람] 그걸 자랑이라고 해요?
하영 [기본] 걔는 그래.
* 하영은 도마 위 재료를 정리하더니 앞치마를 벗었다.
하영 [기본] 나도 한 판 하자. 대신 규칙 하나.
나 뭔데요.
하영 [진지] 부엌은 내 구역이야. 여기선 내 말이 법이고.
하영 [웃음] 마루에서는 네 말이 법이겠지. 그럼 공평하지?
@affection 10
@end

=== hayeong_02 | 냉장고 칸 배분
@bg kitchen night
@bgm spring
하영 [기본] 냉장고 배분표. 이거 네가 관리해야 해.
나 이런 것까지 있어요?
하영 [진지] 열 명이 한 냉장고 쓰면 전쟁 나. 작년에 두 번 났어.
나 무슨 일이 있었길래.
하영 [기본] 수아가 남의 닭가슴살을 먹었어. 3주치를.
나 [놀람] 3주치를요?
하영 [웃음] 그 뒤로 이름표 붙이기가 규칙이 됐지.
* 하영은 배분표를 내밀며 덧붙였다.
하영 [기본] 그리고 이건 원래 마루 판돈으로 정하는 건데.
하영 [웃음] 오늘 이기면 제일 큰 칸 줄게.
@affection 10
@end

=== hayeong_03 | 간을 못 맞추는 사람
@bg kitchen evening
@bgm warm
* 하영이 국자를 내밀었다.
하영 [기본] 맛 좀 봐.
나 [기본] 음... 좋은데요.
하영 [삐짐] 그게 아니라. 뭐가 부족한지 말해야지.
나 저는 그런 거 잘 몰라요.
하영 [기본] 나도 처음엔 몰랐어. 근데 사람마다 '좋다'고 하는 지점이 달라.
하영 [진지] 그걸 알아야 그 사람 음식을 만들 수 있어.
나 그럼 제 지점은 뭐예요?
하영 [웃음] 아직 몰라. 그래서 계속 먹여보는 거야.
* 그날 저녁상에 내 몫만 국그릇이 하나 더 놓여 있었다.
@affection 10
@end

=== hayeong_04 | 장 보러 가는 길
@bg street evening
@bgm warm
@outfit 1
* 장바구니가 두 개라 결국 따라나섰다.
하영 [기본] 안 와도 됐는데.
나 두 개는 무겁잖아요.
하영 [기본] 하나는 내 실습 재료고, 하나는 하숙집 거야. 따로 계산해야 해.
@choice
- 무거운 쪽을 들기 | +8 | A
- 실습 재료 쪽을 들기 | +8 | B
@label A
나 [기본] 무거운 거 주세요.
하영 [놀람] ...그냥 가벼운 거 들어도 되는데.
나 안 되죠.
하영 [부끄러움] 말은 잘하네.
@goto END
@label B
나 [기본] 실습 재료 제가 들게요. 그게 더 중요하잖아요.
하영 [놀람] 그걸 어떻게 알았어?
나 아까부터 그 봉지만 계속 보고 계셨어요.
하영 [부끄러움] ...관찰력 좋네.
@label END
* 돌아오는 길에 하영은 평소보다 천천히 걸었다.
하영 [기본] 나 원래 장 보는 거 혼자 하는 게 편했는데.
하영 [웃음] 오늘은 좀 빨리 온 것 같네.
@affection 10
@end

=== hayeong_05 | 실습 과제 시식단
@bg kitchen night
@bgm warm
@outfit 1
* 식탁 위에 똑같이 생긴 접시 세 개가 놓여 있었다.
하영 [진지] 셋 중에 하나만 과제로 낼 거야. 골라줘.
나 [놀람] 저한테요? 다른 분들도 있잖아요.
하영 [기본] 다들 맛있다고만 해. 그건 도움이 안 돼.
@choice
- 제일 예쁜 접시를 고르기 | +6 | A
- 셋 다 먹어보고 고르기 | +9 | B
@label A
나 [기본] 이게 제일 보기 좋은데요.
하영 [삐짐] 맛은 안 보고?
나 심사위원도 눈으로 먼저 봐요.
하영 [놀람] ...그건 맞는 말이네.
@goto END
@label B
* 나는 세 접시를 천천히 다 먹었다.
하영 [놀람] 야, 다 먹으면 어떡해.
나 [기본] 두 번째 게 제일 좋아요. 처음엔 밍밍한데 나중에 올라와요.
하영 [놀람] ...그게 내가 제일 고민한 거야.
하영 [부끄러움] 어떻게 알았어.
나 아까 그 접시만 두 번 고쳤잖아요.
@label END
하영 [기본] 너 은근히 사람을 잘 봐.
하영 [부끄러움] 그거 좀 무서운데.
@affection 10
@end

=== hayeong_06 | 비 오는 날의 부침개
@bg kitchen evening
@bgm warm
@outfit 1
* 창밖에 비가 쏟아지고 부엌에 기름 냄새가 가득했다.
하영 [웃음] 비 오면 이거지. 이건 논리가 아니라 본능이야.
나 몇 장 부치는 거예요?
하영 [기본] 열 장. 하숙생 전원.
@choice
- 반죽 젓기 돕기 | +8 | A
- 그냥 옆에서 기다리기 | +5 | B
@label A
나 [기본] 제가 저을게요.
하영 [기본] 손목 써. 팔 말고.
* 한참을 젓다 보니 팔이 저렸다.
하영 [웃음] 그봐. 요리는 체력이야.
@goto END
@label B
나 [기본] 저는 먹는 쪽이 더 잘 맞아서요.
하영 [삐짐] 뻔뻔하기는.
* 그러면서도 하영은 첫 장을 내 앞에 놓았다.
@label END
* 첫 장은 언제나 부치는 사람 몫이라고 했는데, 그날 첫 장은 내 앞에 있었다.
하영 [부끄러움] 왜 봐. 식어.
@affection 10
@end

=== hayeong_07 | 졸업하면 뭐 할 거야
@bg maru night
@bgm sad
@outfit 0
* 판이 끝나고도 하영은 일어나지 않았다.
하영 [기본] 나 다음 달에 실습 나가.
나 어디로요?
하영 [기본] 호텔 주방. 새벽 다섯 시 출근이래.
하영 [패배] 근데 거기서 1년 버틴 사람이 열에 둘이래.
나 무서워요?
하영 [기본] 무섭다기보단... 내가 좋아하는 게 맞나 싶어.
하영 [패배] 매일 같은 걸 백 번씩 만드는 일이잖아.
@bgm warm
나 [기본] 여기서도 매일 같은 밥 하시잖아요.
하영 [놀람] 그건 다르지.
나 뭐가 달라요?
하영 [기본] 여기는... 먹을 사람 얼굴을 아니까.
* 하영은 말해놓고 스스로 놀란 표정을 지었다.
하영 [부끄러움] 아. 답을 내가 말했네.
@affection 10
@end

=== hayeong_08 | 하영이 요리를 시작한 날
@bg kitchen night
@bgm sad
@outfit 0
하영 [기본] 나 중학교 때 엄마가 오래 아팠어.
나 [기본] ...
하영 [기본] 밥을 누가 해야 되는데, 아빠는 늦게 오고. 그래서 내가 했어.
하영 [기본] 처음엔 라면만 끓였지. 그러다 계란을 넣고, 파를 넣고.
하영 [웃음] 엄마가 그거 먹고 처음으로 두 그릇 먹었어.
하영 [기본] 그게 시작이야.
나 지금은 어떠세요, 어머님.
하영 [웃음] 완치. 지금은 나보다 잘 드셔.
@bgm warm
하영 [기본] 그때 알았어. 밥은 그냥 밥이 아니더라.
하영 [부끄러움] ...왜 이런 얘길 너한테 하고 있지.
나 물어봐서요.
하영 [기본] 물어본 사람이 네가 처음이야.
@affection 10
@end

=== hayeong_09 | 누구 몫이었을까
@bg kitchen night
@bgm tense
@outfit 0
* 식탁 위에 도시락 하나가 놓여 있었다. 이름표는 없었다.
수아 [웃음] 오, 이거 내 거지? 하영이가 나 주려고 싼 거 맞지?
하영 [놀람] 아니 그건...
* 수아는 이미 뚜껑을 열고 있었다.
@choice
- 내 것 같다고 말하기 | +9 | A
- 아무 말 안 하기 | +4 | B
@label A
나 [기본] 그거 제 것 같은데요.
수아 [놀람] 어? 왜?
나 어제 제가 좋아한다고 한 반찬만 들어 있어서요.
하영 [부끄러움] ...야.
수아 [웃음] 아하. 그렇구나. 미안 미안.
* 수아는 눈치 없는 척 웃으며 나갔다.
하영 [삐짐] 굳이 그렇게 말해야 했어?
나 아니면 뺏겼잖아요.
하영 [부끄러움] ...그건 그래.
@goto END
@label B
* 나는 아무 말도 하지 않았고, 수아는 도시락을 들고 나갔다.
하영 [삐짐] 왜 가만히 있었어.
나 제 거라는 보장이 없어서요.
하영 [삐짐] 보장? 이름표 없으면 다 네 거야. 이 집에서 나한테는.
나 [놀람] 네?
하영 [부끄러움] 몰라. 내일 다시 싸줄 테니까 그때는 뺏기지 마.
@label END
@bgm warm
하영 [기본] 나 사람한테 뭐 챙겨주는 거 잘 안 해.
하영 [부끄러움] 그러니까 눈치 좀 챙겨.
@affection 10
@end

=== hayeong_10 | 한 사람을 위한 상
@bg kitchen night
@bgm confess
@outfit 2
* 열 번째 판이 끝나고, 하영은 부엌으로 가더니 한참 나오지 않았다.
* 따라 들어가니 식탁에 상이 차려져 있었다. 자리는 하나였다.
나 [놀람] 이게 다 뭐예요?
하영 [기본] 앉아.
@cg hayeong_ending
* 반찬 하나하나가 그동안 내가 "좋다"고 말했던 것들이었다.
하영 [기본] 나 예전에 그랬지. 사람마다 좋다고 하는 지점이 다르다고.
하영 [웃음] 이게 네 지점이야. 반년 걸려서 알아냈어.
나 반년이요?
하영 [부끄러움] 매일 조금씩 바꿔서 내놨어. 어떤 날 두 그릇 먹는지 보려고.
하영 [진지] 나 요리로 마음 표현하는 거밖에 못 해.
하영 [부끄러움] 그러니까 이건 그런 뜻이야.
하영 [기본] 승부에서 이겨서 주는 상 아니야. 진작부터 만들고 있었어.
@choice
- 잘 먹겠습니다 | +20 | A
- 저도 같은 마음이에요 | +20 | B
@label A
나 [웃음] ...잘 먹겠습니다.
하영 [놀람] 그게 대답이야?
나 제일 확실한 대답인데요.
하영 [부끄러움] ...그러네. 인정.
@goto END
@label B
나 [기본] 저도 같은 마음이에요. 반년 전부터.
하영 [놀람] 반년 전?
나 첫 판에서 국 데워놨다고 하셨을 때부터요.
하영 [부끄러움] 그건 그냥 하숙집 밥이었는데.
나 저한테는 아니었어요.
@label END
@bgm warm
하영 [웃음] 그럼 내일부터 자리 하나는 계속 비워둘게.
하영 [기본] 대신 설거지는 네가.
@affection 20
@point 300
@end
`,Ip=`# 지우 (밤샘) - 봄 / 3번 하숙생

=== jiwoo_01 | 새벽 세 시의 마루
@bg maru night
@bgm spring
@outfit 0
* 새벽 세 시. 마루에 불이 켜져 있었다.
지우 [기본] 안 자네.
나 그쪽도요.
지우 [기본] 나는 원래 이 시간이 낮이야.
* 지우는 스탠드 하나만 켜놓고 혼자 패를 늘어놓고 있었다.
나 [놀람] 혼자 치는 거예요?
지우 [기본] 연습. 상대가 없으니까.
나 상대 있으면 할래요?
* 지우가 처음으로 고개를 들었다.
지우 [놀람] ...너 몇 시까지 깨어 있을 수 있어?
나 모르겠는데요.
지우 [웃음] 그럼 알게 될 거야.
@affection 10
@end

=== jiwoo_02 | 조용히 해달라는 부탁
@bg hallway night
@bgm spring
* 아침에 예린이 복도에서 나를 붙잡았다.
예린 [진지] 203호에 좀 전해줘. 새벽에 소리 좀 줄여달라고.
나 무슨 소리요?
예린 [기본] 캔버스 긁는 소리. 새벽 네 시에.
* 지우에게 말을 전하자 지우는 잠깐 생각하더니 고개를 끄덕였다.
지우 [기본] 알았어. 옥상 가서 할게.
나 그게 더 추울 텐데요.
지우 [기본] 상관없어.
나 그럼 규칙 하나 만들죠. 새벽 두 시 넘으면 마루에서 하기로.
지우 [놀람] 그건 왜.
나 옥상은 추우니까요.
지우 [부끄러움] ...주인집 아들 노릇 하네.
@affection 10
@end

=== jiwoo_03 | 지우의 색
@bg room night
@bgm warm
@outfit 0
* 지우가 캔버스를 마루로 들고 나왔다.
지우 [기본] 이거 봐. 무슨 색으로 보여?
나 [기본] 파란색이요.
지우 [기본] 몇 가지 파랑?
나 [놀람] 그게 여러 개예요?
지우 [웃음] 여기 일곱 개 들어갔어.
나 하나로 보이는데요.
지우 [기본] 그게 맞아. 잘 섞이면 하나로 보여.
지우 [진지] 나는 그런 걸 만들고 싶어. 여러 개인데 하나인 거.
나 어렵겠네요.
지우 [기본] 어려워. 그래서 밤을 새는 거고.
@affection 10
@end

=== jiwoo_04 | 옥상에서 본 새벽
@bg rooftop night
@bgm warm
@outfit 1
* 지우가 담요 두 장을 들고 옥상으로 올라갔다.
지우 [기본] 다섯 시 십오 분. 그때가 제일 예뻐.
나 그걸 어떻게 아세요?
지우 [기본] 백 번쯤 봤으니까.
@choice
- 같이 기다리기 | +9 | A
- 커피 사 오기 | +7 | B
@label A
나 [기본] 저도 같이 기다릴게요.
지우 [놀람] 한 시간 남았는데.
나 한 시간이면 한 판 더 칠 수 있죠.
지우 [웃음] ...좋아.
@goto END
@label B
나 [기본] 그럼 커피 사 올게요. 한 시간은 기니까.
지우 [기본] 편의점 다녀오면 삼십 분이야.
* 돌아왔을 때 지우는 담요를 두 장 다 펴놓고 기다리고 있었다.
@label END
@bg rooftop morning
* 다섯 시 십오 분. 하늘이 회색에서 푸른색으로 넘어갔다.
지우 [기본] 저거야. 저 색.
나 [놀람] ...진짜 예쁘네요.
지우 [부끄러움] 누구랑 같이 본 건 처음이야.
@affection 10
@end

=== jiwoo_05 | 모델 좀 서줄래
@bg room night
@bgm warm
@outfit 1
지우 [기본] 부탁이 있는데.
나 뭔데요.
지우 [부끄러움] 모델. 삼십 분만.
나 [놀람] 제가요?
지우 [기본] 사람 그리는 과제가 있어. 근데 나 사람 안 그려.
@choice
- 왜 사람을 안 그리는지 묻기 | +9 | A
- 그냥 앉아주기 | +7 | B
@label A
나 [기본] 왜 사람은 안 그려요?
지우 [기본] 사람은 계속 변하잖아. 다 그리기 전에 달라져 있어.
나 그럼 변하기 전에 빨리 그리면 되죠.
지우 [놀람] ...그건 생각 못 했네.
@goto END
@label B
나 [기본] 알겠어요. 어디 앉으면 돼요?
지우 [기본] 거기. 움직이지 마.
@label END
* 삼십 분이 한 시간이 되고, 한 시간이 두 시간이 됐다.
나 [기본] 저 다리 저려요.
지우 [놀람] 어? 아. 미안.
지우 [부끄러움] 시간 가는 줄 몰랐어. 이런 적 없는데.
@affection 10
@end

=== jiwoo_06 | 24시간 카페 원정
@bg street night
@bgm warm
@outfit 1
* 마감 전날, 지우가 화구를 챙기더니 나를 돌아봤다.
지우 [기본] 하숙집에선 집중이 안 돼. 카페 갈 건데.
나 새벽 두 시에요?
지우 [기본] 24시간 하는 데가 있어.
@choice
- 따라가기 | +9 | A
- 택시비만 쥐여주기 | +5 | B
@label A
나 [기본] 같이 가요. 짐 많잖아요.
지우 [놀람] 너 내일 수업 있잖아.
나 그쪽도 있잖아요.
지우 [웃음] ...그건 그렇네.
@goto END
@label B
나 [기본] 이거 택시비요. 짐 많으니까 타고 가세요.
지우 [기본] ...고마워.
* 삼십 분 뒤 지우에게서 사진이 한 장 왔다. 카페 창가 자리, 빈 의자 하나가 찍혀 있었다.
@label END
@bgm sad
* 그날 새벽 지우는 결국 그림을 끝냈다.
지우 [기본] 다 그렸어. 근데 이상하네.
나 뭐가요.
지우 [부끄러움] 혼자 그리는 게 원래 제일 편했는데. 오늘은 안 그랬어.
@affection 10
@end

=== jiwoo_07 | 그림이 안 그려질 때
@bg maru night
@bgm sad
@outfit 0
* 며칠째 지우의 캔버스가 하얀 채였다.
지우 [패배] 안 나와.
나 뭐가요?
지우 [기본] 색이. 아무것도 안 떠올라.
지우 [패배] 이런 적 처음이야. 십 년 동안 한 번도 없었어.
나 [기본] 쉬면 되죠.
지우 [삐짐] 쉬면 더 안 나와. 그건 내가 알아.
@bgm none
* 지우는 한참 말이 없다가 아주 작게 말했다.
지우 [패배] 무서워. 이대로 끝나는 거면 어떡하지.
@bgm warm
나 [기본] 그럼 오늘은 그리지 말고 판이나 쳐요.
지우 [놀람] 지금?
나 색이 안 떠오르면 패라도 보세요. 홍단 청단 다 색이잖아요.
지우 [웃음] ...그게 무슨 논리야.
* 그래도 지우는 화투갑을 꺼냈고, 그날 밤 세 판을 쳤다.
지우 [기본] 야. 방금 빨간색 떠올랐어.
@affection 10
@end

=== jiwoo_08 | 떨어진 공모전
@bg rooftop night
@bgm sad
@outfit 0
* 옥상에 지우가 혼자 앉아 있었다. 손에 종이 한 장이 구겨져 있었다.
지우 [기본] 떨어졌어. 세 번째야.
나 [기본] ...
지우 [기본] 심사평에 뭐라고 쓰여 있었는지 알아? "기술은 좋은데 사람이 없다."
지우 [패배] 사람이 없대. 내 그림에.
* 지우는 종이를 펴서 한참 들여다봤다.
지우 [기본] 나 사람 그리는 거 무서워했어. 오래.
나 왜요?
지우 [기본] 잘못 그리면 그 사람이 아니게 되니까.
지우 [패배] 근데 그게 핑계였던 것 같아.
@bgm warm
나 [기본] 저 그렸잖아요. 저번에.
지우 [놀람] 그건...
나 그거 저 맞았어요. 다리 저렸던 것까지 똑같았어요.
지우 [부끄러움] ...봤어?
나 세워놨잖아요, 벽에.
지우 [부끄러움] 치웠어야 했는데.
@affection 10
@end

=== jiwoo_09 | 누가 모델이야
@bg hallway night
@bgm tense
@outfit 0
* 세연이 지우의 방에서 나오는 걸 봤다. 웃으면서.
세연 [웃음] 나 오늘 지우 모델 했어. 나 그림 잘 나온대.
* 그날 밤 지우는 평소보다 말이 없었다.
@choice
- 세연 얘기를 꺼내기 | +9 | A
- 그냥 판에 집중하기 | +5 | B
@label A
나 [기본] 세연 씨 그리셨다면서요.
지우 [놀람] ...들었어?
나 잘 나왔대요.
지우 [기본] 잘 나왔어. 세연이는 표정이 많으니까 그리기 쉬워.
지우 [기본] 근데 그건 연습이야.
나 연습이요?
지우 [부끄러움] 어려운 걸 그리려면 쉬운 걸로 손을 풀어야 해.
나 어려운 게 뭔데요.
지우 [부끄러움] ...묻지 마.
@goto END
@label B
* 나는 아무 말도 하지 않고 패만 봤다.
지우 [삐짐] 야.
나 네?
지우 [삐짐] 안 물어봐?
나 뭘요?
지우 [삐짐] ...됐어.
* 그날 지우는 일부러 내 패를 두 번이나 놓쳤다.
@label END
@bgm warm
지우 [기본] 하나만 말할게.
지우 [부끄러움] 내가 제일 오래 그린 건 세연이가 아니야.
@affection 10
@end

=== jiwoo_10 | 완성된 그림
@bg room night
@bgm confess
@outfit 2
* 열 번째 판이 끝나자 지우가 일어섰다.
지우 [기본] 보여줄 게 있어.
* 방에 들어서자 벽에 큰 캔버스가 세워져 있었다. 천으로 덮여 있었다.
지우 [부끄러움] 반년 걸렸어.
@cg jiwoo_ending
* 천이 걷히자, 새벽 다섯 시 십오 분의 하늘 아래 마루가 있었다.
* 그 마루에 두 사람이 마주 앉아 패를 보고 있었다.
나 [놀람] 이거...
지우 [기본] 사람은 계속 변해서 못 그린다고 했잖아.
지우 [기본] 그래서 변하는 걸 다 그렸어. 백 번 봤으니까.
지우 [부끄러움] 처음 앉았을 때부터 지금까지.
지우 [진지] 공모전 심사평, 사람이 없다고 했지.
지우 [웃음] 이제 있어.
지우 [부끄러움] 나 너 좋아해. 이기든 지든 상관없이.
지우 [기본] 판을 이겨서 얻은 마음이 아니야. 판이 계기였을 뿐이야.
@choice
- 나도 계속 보고 있었어요 | +20 | A
- 이 그림, 제가 가져도 돼요? | +20 | B
@label A
나 [기본] 저도 계속 보고 있었어요. 백 번쯤.
지우 [놀람] ...뭘.
나 색 고를 때 눈 가늘어지는 거요.
지우 [부끄러움] 야. 그런 걸 왜 봐.
@goto END
@label B
나 [기본] 이 그림 제가 가져도 돼요?
지우 [놀람] 왜.
나 여기 제가 있으니까요.
지우 [부끄러움] ...그런 이유로 그림 달라는 사람 처음이야.
지우 [웃음] 줄게. 대신 조건이 있어.
나 뭔데요.
지우 [부끄러움] 계속 마주 앉아 있어줘. 다음 그림도 그려야 하니까.
@label END
@bgm warm
* 그날 새벽 다섯 시 십오 분에도 우리는 아직 마루에 있었다.
@affection 20
@point 300
@end
`,zp=`# 민지 (취준) - 여름 / 5번 하숙생

=== minji_01 | 불 켜진 302호
@bg hallway night
@bgm summer
@outfit 0
* 새벽에 물을 마시러 나왔더니 302호에 불이 켜져 있었다.
민지 [기본] 문 앞에 서 있으면 더 신경 쓰여.
나 [놀람] 아, 죄송해요.
민지 [기본] 들어오라는 뜻이야.
* 책상에 자소서 창이 여섯 개 떠 있었다.
민지 [기본] 주인집 아들이지. 아래층에서 매일 이기고 다닌다며.
나 매일은 아니에요.
민지 [웃음] 그럼 승률이 얼마인데.
나 [놀람] 그걸 왜...
민지 [기본] 숫자로 말해야 믿지.
민지 [웃음] 한 판 하자. 나 지금 머리 식힐 게 필요해.
@affection 10
@end

=== minji_02 | 공용 프린터 규칙
@bg hallway evening
@bgm summer
민지 [진지] 프린터 규칙 좀 바꿔야 해.
나 어떻게요?
민지 [기본] 지금은 선착순이잖아. 그럼 새벽에 자소서 뽑는 내가 항상 손해야.
나 왜요? 새벽엔 아무도 안 쓰는데.
민지 [기본] 토너 때문에. 낮에 다 써버려서 새벽엔 늘 흐릿해.
나 [기본] 그럼 마감 있는 사람 우선으로 할까요?
민지 [놀람] ...그게 되겠어? 다들 마감 있다고 할 텐데.
나 증빙하면 되죠. 원서 접수 마감일 캡처 같은 거로.
민지 [웃음] 야. 너 이런 거 잘한다.
민지 [기본] 그거 알아? 규칙 만들 줄 아는 사람은 어디 가도 굶진 않아.
@affection 10
@end

=== minji_03 | 민지의 계산법
@bg maru night
@bgm summer
* 민지가 7점에서 정확히 멈췄다.
나 [놀람] 왜 여기서 스톱해요? 더 갈 수 있는데.
민지 [기본] 네 손에 피가 여섯 장이야. 두 판 더 가면 네가 뒤집어.
나 [놀람] 그걸 세고 있었어요?
민지 [기본] 처음부터.
나 매번요?
민지 [웃음] 매번. 그게 내가 가진 유일한 재능이야.
* 민지는 패를 모으며 조금 쓴웃음을 지었다.
민지 [기본] 근데 인생은 이게 안 통하더라.
나 왜요?
민지 [기본] 자소서는 몇 점인지 안 알려주잖아. 그냥 떨어졌다고만 해.
@affection 10
@end

=== minji_04 | 면접 복장 골라주기
@bg room evening
@bgm warm
@outfit 1
* 민지가 옷 두 벌을 침대에 펼쳐놓고 팔짱을 끼고 있었다.
민지 [기본] 둘 중에 뭐가 나아?
나 [놀람] 저한테 물으시는 거예요?
민지 [기본] 남자 면접관이 세 명 중 둘이래. 표본이 필요해.
@choice
- 무난한 정장 | +7 | A
- 조금 밝은 쪽 | +9 | B
@label A
나 [기본] 이쪽이요. 무난한 게 안전하죠.
민지 [기본] 안전. 그게 맞지.
민지 [패배] ...근데 안전하게만 해서 열두 번 떨어졌어.
나 [놀람] 아.
민지 [웃음] 아니야. 네 말이 맞아. 이걸로 갈게.
@goto END
@label B
나 [기본] 밝은 쪽이요.
민지 [놀람] 튀지 않을까?
나 열두 번 안전하게 하셨으면 한 번쯤은요.
민지 [놀람] ...그 횟수를 왜 네가 알아.
나 프린터 뽑을 때마다 세고 있었어요.
민지 [부끄러움] 야.
@label END
민지 [기본] 있잖아. 나 옷 골라달라고 한 사람 네가 처음이야.
민지 [부끄러움] 물어볼 사람이 없었던 게 아니라, 묻고 싶은 사람이 없었어.
@affection 10
@end

=== minji_05 | 탈락 메일이 온 밤
@bg hallway night
@bgm sad
@outfit 1
* 새벽 한 시. 302호에서 아무 소리도 나지 않았다.
* 문을 두드리자 한참 뒤에 열렸다.
민지 [패배] 떨어졌어. 최종에서.
나 [기본] ...
민지 [기본] 괜찮아. 기대값 안에 있었어. 최종 합격률 12%니까.
민지 [패배] 근데 왜 계산해도 안 괜찮지.
@choice
- 아무 말 없이 옆에 앉기 | +9 | A
- 오늘은 계산하지 말라고 하기 | +9 | B
@label A
* 나는 아무 말도 하지 않고 문 앞에 앉았다.
* 민지도 말없이 그 옆에 앉았다.
* 십 분쯤 지나서 민지가 먼저 입을 열었다.
민지 [기본] 왜 아무 말 안 해.
나 할 말이 없어서요.
민지 [부끄러움] ...그게 제일 낫네.
@goto END
@label B
나 [기본] 오늘은 계산하지 마세요.
민지 [삐짐] 계산 안 하면 뭐 해.
나 그냥 억울해하세요. 확률 말고요.
민지 [놀람] ...그래도 돼?
나 12%는 내일 얘기해요.
민지 [패배] ...억울해. 진짜 억울해.
@label END
@bgm warm
* 그날 밤 민지는 처음으로 계산 없이 말했다.
@affection 10
@end

=== minji_06 | 편의점 야식 회의
@bg cvs night
@bgm warm
@outfit 1
* 민지가 편의점 앞 벤치에 앉아 노트를 펼쳤다.
민지 [기본] 회의하자. 의제는 '내가 어디서 잘못했나'야.
나 그런 회의는 좀 잔인한데요.
민지 [웃음] 원래 회고는 잔인해야 의미가 있어.
@choice
- 진지하게 같이 분석하기 | +8 | A
- 오늘은 회의 폐기하기 | +9 | B
@label A
나 [기본] 좋아요. 그럼 1번 항목부터.
* 우리는 새벽 두 시까지 노트 세 장을 채웠다.
민지 [놀람] 야. 너 왜 이렇게 열심히 해.
나 회의 소집하셨잖아요.
민지 [부끄러움] ...보통은 다들 도망가는데.
@goto END
@label B
나 [기본] 안건 기각이요.
민지 [삐짐] 뭐?
나 오늘 안건은 '뭐 먹을까'로 바꾸시죠.
민지 [놀람] ...진행자 권한 침해인데.
나 저 주인집 아들이에요. 하숙집 회의 소집권 있어요.
민지 [웃음] 그런 게 어딨어.
* 그날의 결론은 삼각김밥 두 개와 컵라면 하나였다.
@label END
민지 [기본] 있잖아. 오늘 처음으로 하루를 계산 안 하고 끝냈어.
민지 [웃음] 나쁘지 않네.
@affection 10
@end

=== minji_07 | 부모님 전화
@bg rooftop night
@bgm sad
@outfit 0
* 옥상에서 민지가 전화를 끊는 걸 봤다. 한참 난간만 보고 있었다.
민지 [기본] 엄마야. 이번 주도 "언제쯤 될 것 같냐"고.
나 뭐라고 하셨어요?
민지 [기본] 곧 된다고 했지. 삼 년째 같은 대답이야.
민지 [패배] 나도 내가 언제 될지 모르는데.
* 민지는 웃으려다 실패했다.
민지 [기본] 제일 무서운 게 뭔지 알아? 부모님이 화내는 거 아니야.
민지 [패배] "괜찮다"고 하는 거야. 그 말이 제일 무서워.
@bgm warm
나 [기본] 저희 어머니는 저한테 그 말 자주 하시는데요.
민지 [기본] 그래서 어때.
나 무섭죠. 근데 그건 어머니가 저를 믿는다는 뜻이기도 하더라고요.
민지 [놀람] ...
나 안 믿으면 화를 내죠.
민지 [부끄러움] ...너 왜 이렇게 잘 알아.
@affection 10
@end

=== minji_08 | 포기한 전공
@bg maru night
@bgm sad
@outfit 0
민지 [기본] 나 원래 국문과 가고 싶었어.
나 [놀람] 처음 듣네요.
민지 [기본] 아무한테도 말 안 했으니까.
민지 [기본] 근데 취업 안 된다고 해서 경영으로 갔어.
민지 [패배] 그래놓고 취업을 못 하고 있으니까 좀 웃기지.
나 지금도 쓰세요? 글.
민지 [놀람] 어떻게 알았어.
나 노트 뒷장에 뭐 많이 쓰시더라고요. 회의록 아닌 거요.
민지 [부끄러움] ...봤어?
나 안 읽었어요. 있다는 것만 봤어요.
@bgm warm
민지 [기본] 자소서는 천 번 고쳐도 안 늘어.
민지 [웃음] 근데 그 뒷장은 한 번에 나와.
나 그게 답 아닐까요.
민지 [부끄러움] ...너 진짜 계산 없이 그런 말 하지 마.
@affection 10
@end

=== minji_09 | 합격한 친구
@bg room night
@bgm tense
@outfit 0
* 민지가 휴대폰을 엎어놓고 있었다.
민지 [기본] 동기가 붙었대. 대기업.
나 [기본] ...
민지 [기본] 축하한다고 보냈어. 진심으로. 진짜 진심으로.
민지 [패배] 근데 보내고 나서 삼십 분 동안 화장실에 있었어.
@choice
- 그래도 축하한 게 대단하다고 말하기 | +9 | A
- 질투해도 된다고 말하기 | +10 | B
@label A
나 [기본] 진심으로 축하한 거, 그거 아무나 못 해요.
민지 [삐짐] 위로하지 마.
나 위로 아니에요. 저는 못 할 것 같거든요.
민지 [놀람] ...
@goto END
@label B
나 [기본] 질투해도 돼요.
민지 [놀람] 뭐?
나 축하한 것도 진심이고 질투하는 것도 진심이면, 둘 다 진심인 거죠.
민지 [패배] ...둘 다 가져도 되는 거야?
나 계산 밖의 일이잖아요. 나누지 마세요.
민지 [부끄러움] ...너 가끔 무섭다.
@label END
@bgm warm
민지 [기본] 있잖아. 내가 요즘 유일하게 계산 안 하는 시간이 있어.
나 언젠데요.
민지 [부끄러움] 마루에 앉아 있는 시간.
@affection 10
@end

=== minji_10 | 계산에 없던 답
@bg maru night
@bgm confess
@outfit 2
* 열 번째 판. 민지는 7점에서 멈추지 않았다.
나 [놀람] 여기서 고요? 계산상 불리한데.
민지 [기본] 알아.
나 아는데 왜요.
민지 [기본] 오늘은 계산 안 하기로 했거든.
@cg minji_ending
* 민지는 패를 내려놓고 노트 한 장을 꺼냈다. 회의록이 아닌 뒷장이었다.
민지 [부끄러움] 이거 읽어줄게. 딱 한 번만 읽고 찢을 거야.
민지 [기본] "삼 년 동안 나는 매일 확률을 계산했다.
민지 [기본] 합격 확률, 손해 볼 확률, 실망시킬 확률.
민지 [기본] 그런데 계산에 안 잡히는 게 하나 생겼다.
민지 [부끄러움] 밤 열한 시에 마루에 나가고 싶은 마음."
* 민지는 종이를 접었다.
민지 [진지] 나 너 좋아해.
민지 [기본] 승부에서 이겨서 얻는 것도 아니고, 계산해서 나온 답도 아니야.
민지 [웃음] 그냥 계산이 안 되는 항목이라서 인정하기로 했어.
@choice
- 저도 계산이 안 됐어요 | +20 | A
- 그 종이, 찢지 마세요 | +20 | B
@label A
나 [기본] 저도 계산이 안 됐어요. 한참 전부터.
민지 [놀람] 언제부터.
나 프린터 규칙 만들 때부터요.
민지 [부끄러움] 그건 그냥 행정이었잖아.
나 그때부터 매일 새벽에 복도 나갔어요.
민지 [부끄러움] ...그건 반칙이지.
@goto END
@label B
나 [기본] 그 종이 찢지 마세요.
민지 [놀람] 왜.
나 국문과 가고 싶었다면서요. 그거 잘 쓴 글이에요.
민지 [놀람] ...
나 그리고 저한테 쓴 글이잖아요. 제 거예요.
민지 [부끄러움] ...너 진짜 가끔 무섭다니까.
@label END
@bgm warm
민지 [웃음] 그럼 오늘부터 하루에 한 항목은 계산 안 하기로 할게.
나 어떤 항목이요?
민지 [부끄러움] 너.
@affection 20
@point 300
@end
`,Tp=`# 나래 (옥상) - 여름 / 6번 하숙생

=== narae_01 | 옥상에 사람이 있다
@bg rooftop night
@bgm summer
@outfit 0
* 옥상 문을 열자 어둠 속에서 목소리가 났다.
나래 [기본] 불 켜지 마.
나 [놀람] 누구세요?
나래 [기본] 303호. 나래.
* 눈이 어둠에 익자 망원경 옆에 앉은 사람이 보였다.
나래 [기본] 삼 분만 기다려. 지금 목성 위성이 지나가.
나 [기본] ...네.
* 삼 분 동안 아무도 말하지 않았다.
나래 [웃음] 됐다. 볼래?
* 접안렌즈에 눈을 대자 작은 점 네 개가 나란히 있었다.
나 [놀람] 이게 위성이에요?
나래 [웃음] 갈릴레이가 사백 년 전에 본 거랑 같은 거야.
나래 [기본] 참, 너 주인집 아들이지. 옥상 독점권 걸고 한 판 하자.
@affection 10
@end

=== narae_02 | 옥상 사용 규칙
@bg rooftop night
@bgm summer
나래 [진지] 옥상 규칙 하나 추가하고 싶어.
나 뭔데요.
나래 [기본] 밤 열 시 이후에 옥상 전등 끄기.
나 빨래 걷는 사람이 불편할 텐데요.
나래 [기본] 열 시 전에 걷으면 되잖아.
나 그건 좀 일방적인데요.
나래 [삐짐] ...
* 나래는 한참 생각하더니 고개를 끄덕였다.
나래 [기본] 그럼 이렇게 하자. 관측하는 날만 미리 표시해두는 거로.
나 그건 좋네요.
나래 [웃음] 협상이라는 거 처음 해봤어. 나쁘지 않네.
나래 [기본] 대신 표시된 날엔 아무도 못 올라와. 너 빼고.
@affection 10
@end

=== narae_03 | 나래가 세는 것
@bg rooftop night
@bgm warm
* 나래가 수첩에 뭔가를 적고 있었다.
나 그건 뭐예요?
나래 [기본] 관측 일지. 오늘 몇 등급까지 보이는지.
나 매일 적으세요?
나래 [기본] 칠 년째.
나 [놀람] 칠 년이요?
나래 [웃음] 대부분은 "흐림"이야. 서울에서 별 보는 건 거의 실패하는 일이거든.
나 그럼 왜 계속 해요?
나래 [기본] 백 번 흐려도 한 번 맑으면 그게 남으니까.
나래 [진지] 실패한 날도 다 적어. 그게 있어야 맑은 날이 맑은 거야.
* 나래는 오늘 칸에 "맑음"이라고 적었다.
@affection 10
@end

=== narae_04 | 망원경 나르기
@bg street evening
@bgm warm
@outfit 1
* 나래가 커다란 가방을 낑낑대며 들고 있었다.
나래 [기본] 이거 팔 킬로야.
나 그걸 혼자 옥상까지요?
나래 [기본] 늘 그랬는데.
@choice
- 대신 들어주기 | +8 | A
- 같이 나눠 들기 | +9 | B
@label A
나 [기본] 제가 들게요.
나래 [놀람] 무거워.
나 팔 킬로라면서요.
* 삼 층까지 올라가자 팔이 떨렸다.
나래 [웃음] 그봐.
@goto END
@label B
나 [기본] 반씩 나눠 들죠. 삼각대는 제가.
나래 [놀람] 그게 되나?
나 두 명이니까 되죠.
나래 [부끄러움] ...나 칠 년 동안 혼자 들었는데.
@label END
@bg rooftop night
* 망원경을 세우고 나래가 하늘을 맞췄다.
나래 [기본] 팔 킬로가 오늘은 안 무거웠어.
나 반씩 들어서요?
나래 [부끄러움] ...그런 걸로 해두자.
@affection 10
@end

=== narae_05 | 여름 유성우
@bg rooftop night
@bgm summer
@outfit 1
* 페르세우스 유성우가 절정인 밤이었다.
나래 [웃음] 새벽 세 시부터 네 시 사이. 시간당 육십 개.
나 그럼 일 분에 하나요?
나래 [기본] 계산상은. 실제로는 절반도 안 보여.
@choice
- 끝까지 같이 세기 | +9 | A
- 소원 빌기 | +8 | B
@label A
나 [기본] 그럼 같이 세죠. 몇 개나 보이나.
나래 [놀람] 한 시간을?
나 한 시간이면 두 판 칠 시간인데요.
* 우리는 결국 새벽 네 시까지 스물세 개를 셌다.
나래 [웃음] 스물셋. 칠 년 중에 제일 많아.
나 혼자 셌을 땐 몇 개였는데요.
나래 [부끄러움] ...열하나. 중간에 졸아서.
@goto END
@label B
나 [기본] 소원 빌어야죠. 유성우니까.
나래 [삐짐] 그거 미신이야. 대기권 진입하는 먼지한테 무슨 소원을 빌어.
나 그럼 안 비세요?
나래 [부끄러움] ...빌긴 해. 매년.
나 뭐라고요?
나래 [부끄러움] 안 알려줘. 말하면 안 이뤄져.
@label END
@bgm warm
나래 [기본] 있잖아. 하늘 보는 건 원래 혼자 하는 일이야.
나래 [부끄러움] 근데 옆에 사람 있으면 더 잘 보여. 이건 과학이 아니야.
@affection 10
@end

=== narae_06 | 비 오는 날의 옥상
@bg rooftop evening
@bgm sad
@outfit 1
* 일주일째 비가 왔다. 나래는 그래도 옥상에 올라갔다.
나 [놀람] 비 오는데 왜 올라가세요?
나래 [기본] 습관이야.
나 별도 안 보이잖아요.
나래 [기본] 안 보이는 것도 확인해야 일지를 쓰지.
@choice
- 우산 들고 따라가기 | +9 | A
- 실내에서 기다리기 | +6 | B
@label A
* 나는 우산을 들고 따라 올라갔다.
나래 [놀람] 뭐 해.
나 일지 쓰실 동안 우산 들어드릴게요.
나래 [부끄러움] 삼 분이면 끝나는데.
나 그럼 삼 분 들죠.
* 나래는 삼 분이 훨씬 넘도록 하늘만 보고 있었다.
@goto END
@label B
* 나는 계단참에서 기다렸다.
* 나래는 십 분 뒤 흠뻑 젖은 채 내려왔다.
나 [놀람] 왜 이렇게 오래 계셨어요.
나래 [기본] 구름이 걷히나 봤어. 안 걷혔어.
나래 [부끄러움] 근데 내려오니까 누가 있네.
@label END
@bgm warm
나래 [기본] 흐린 날은 늘 혼자였는데.
나래 [웃음] 오늘 일지에는 "흐림"이라고 안 쓸래.
@affection 10
@end

=== narae_07 | 연구실에 남는 이유
@bg campus night
@bgm sad
@outfit 0
* 연구실 앞 벤치에서 나래가 커피를 들고 앉아 있었다.
나래 [기본] 나 박사 갈지 말지 정해야 해. 이번 달까지.
나 고민되세요?
나래 [기본] 천문학으로 밥 먹고 사는 사람, 한국에 몇 명인지 알아?
나 몇 명인데요.
나래 [패배] 세기가 쉬울 정도야.
* 나래는 커피를 한 모금 마셨다.
나래 [기본] 교수님이 그러셨어. "나래는 관측이 아니라 기다리는 걸 잘한다"고.
나 칭찬 아니에요?
나래 [패배] 칭찬인데, 기다리는 걸로는 논문이 안 나와.
@bgm warm
나 [기본] 칠 년 동안 매일 일지 쓰셨잖아요.
나래 [기본] 그건 논문이 아니야.
나 칠 년치 데이터인데요.
나래 [놀람] ...
나 흐린 날도 다 적었다면서요. 그게 데이터죠.
나래 [놀람] ...너 방금 내 논문 주제 말한 것 같은데.
@affection 10
@end

=== narae_08 | 관측이 실패한 밤
@bg rooftop night
@bgm sad
@outfit 0
* 나래가 망원경 옆에 주저앉아 있었다.
나래 [패배] 일 년 기다린 거였어. 오늘 밤 한 번뿐이었고.
나 구름 때문에요?
나래 [기본] 삼 분. 딱 삼 분 늦게 걷혔어.
* 나래는 손에 든 수첩을 덮지도 못하고 있었다.
나래 [패배] 나 이럴 때마다 생각해. 왜 이걸 하고 있지.
나래 [기본] 아무도 안 알아주고, 대부분 실패하고, 돈도 안 되는데.
@bgm none
* 한참 침묵이 흘렀다.
나래 [기본] 있잖아. 나 사실 사람들이 옥상 올라오는 거 싫어했어.
나래 [패배] 실패하는 거 보이니까.
@bgm warm
나 [기본] 지금은요?
나래 [부끄러움] ...지금은 네가 봐줬으면 좋겠어.
나래 [기본] 실패한 것도 같이 본 사람이 있으면, 실패가 아닌 것 같아서.
@affection 10
@end

=== narae_09 | 옥상의 다른 발소리
@bg rooftop night
@bgm tense
@outfit 0
* 옥상에 올라가니 나래가 도희 선배와 이야기하고 있었다.
도희 [웃음] 나래야, 이거 논문 심사 일정. 내가 조교라 먼저 알았어.
나래 [기본] 고마워요, 선배.
* 도희가 내려간 뒤에도 나래는 한참 말이 없었다.
@choice
- 무슨 얘기였는지 묻기 | +8 | A
- 옥상 표시판 얘기를 꺼내기 | +10 | B
@label A
나 [기본] 무슨 얘기였어요?
나래 [기본] 심사 일정. 다음 주래.
나 그런데 표정이 왜 그래요.
나래 [패배] ...떨어지면 여기 못 있을 수도 있어.
나 [놀람] 하숙집을요?
나래 [기본] 학교를.
@goto END
@label B
나 [기본] 오늘 표시판에 관측한다고 안 써 있던데요.
나래 [놀람] ...봤어?
나 매일 봐요.
나래 [부끄러움] 매일?
나 표시 있으면 안 올라오려고요. 방해되니까.
나래 [부끄러움] ...그럼 왜 오늘은 올라왔어.
나 표시가 없었으니까요.
나래 [부끄러움] ...너 그거 알아? 나 요즘 일부러 표시 안 해.
@label END
@bgm warm
나래 [기본] 옥상 독점권은 원래 내 건데.
나래 [부끄러움] 한 사람은 예외로 하기로 했어. 오래전에.
@affection 10
@end

=== narae_10 | 다섯 번째 별
@bg rooftop night
@bgm confess
@outfit 2
* 열 번째 판이 끝났다. 나래는 오광을 모으고도 스톱하지 않았다.
나 [놀람] 오광인데 왜 안 멈춰요.
나래 [기본] 광이 다섯 개면 다 모은 거잖아.
나래 [부끄러움] 근데 하나가 더 있어.
@cg narae_ending
* 나래는 망원경을 접고, 수첩을 펼쳐 마지막 장을 보여줬다.
* 칠 년치 일지의 마지막 장에는 별 등급이 아니라 날짜와 한 줄이 적혀 있었다.
나래 [기본] "오늘 옥상에 사람이 있었다."
나래 [부끄러움] 그날부터 일지가 바뀌었어. 별 말고 다른 걸 적게 됐어.
나래 [진지] 나 광 다섯 개 모으는 사람이잖아.
나래 [웃음] 근데 다섯 개를 다 모아도 하나가 비더라.
나래 [부끄러움] 나 너 좋아해.
나래 [기본] 이겨서 얻은 것도 아니고, 져서 아쉬운 것도 아니야.
나래 [기본] 백 번 흐린 밤을 같이 있어준 사람이라서 그래.
@choice
- 다섯 번째 별이 될게요 | +20 | A
- 흐린 날에도 올라올게요 | +20 | B
@label A
나 [기본] 그럼 제가 다섯 번째 별 할게요.
나래 [놀람] 그건 좀 오글거리는데.
나 먼저 말 꺼내신 건데요.
나래 [부끄러움] ...맞네.
@goto END
@label B
나 [기본] 맑은 날 말고 흐린 날에도 올라올게요.
나래 [놀람] 흐린 날은 볼 게 없는데.
나 일지 쓰시잖아요. 우산 들어드릴게요.
나래 [부끄러움] ...그거 제일 듣고 싶었던 말이야.
@label END
@bgm warm
나래 [웃음] 그럼 표시판 없앨게. 이제 필요 없어.
* 그날 일지에는 "맑음"이라고 적혀 있었다. 사실 그날은 흐렸다.
@affection 20
@point 300
@end
`,Lp=`# 세연 (연극) - 가을 / 8번 하숙생

=== seyeon_01 | 복도에서 대사 외우는 사람
@bg hallway night
@bgm autumn
@outfit 0
* 복도에서 누군가 혼자 큰 소리로 말하고 있었다.
세연 [진지] "나는 당신을 기다린 적이 없어요. 단 한 번도."
* 나를 보더니 갑자기 표정이 바뀌었다.
세연 [웃음] 아! 관객이다!
나 [놀람] 저 지나가는 길인데요.
세연 [웃음] 지나가는 사람도 관객이야. 방금 어땠어?
나 무서웠어요.
세연 [놀람] 무서웠어? 슬퍼야 하는 장면인데.
세연 [삐짐] 아 망했다. 다시 해야겠네.
나 [기본] 슬픈 사람이 저렇게 또박또박 말하나요?
세연 [놀람] ...
세연 [웃음] 야. 너 뭐야. 앉아봐. 한 판 하면서 얘기 좀 하자.
@affection 10
@end

=== seyeon_02 | 소음 민원
@bg hallway evening
@bgm autumn
* 예린이 또 나를 붙잡았다.
예린 [진지] 305호. 밤 열한 시에 비명 소리가 나.
나 그거 연기 연습이에요.
예린 [기본] 나도 알아. 근데 알아도 심장이 떨어져.
* 세연에게 말하자 세연은 정색했다.
세연 [진지] 연기는 소리를 죽이면 안 돼. 그건 연기가 아니야.
나 그럼 시간을 옮기시죠. 열한 시 말고 여덟 시로.
세연 [삐짐] 그때는 감정이 안 올라와.
나 감정이 안 올라오면 그건 연습이 부족한 거 아니에요?
세연 [놀람] ...
세연 [웃음] 야. 너 지금 우리 교수님이랑 똑같은 말 했어.
세연 [기본] 알았어. 여덟 시로 할게. 대신 조건.
나 뭔데요.
세연 [웃음] 여덟 시엔 네가 관객이야.
@affection 10
@end

=== seyeon_03 | 세연의 연기론
@bg maru night
@bgm autumn
* 세연이 고를 외쳤다. 세 번 연속으로.
나 [기본] 그거 진짜 좋은 패예요?
세연 [웃음] 글쎄. 어떻게 보여?
나 안 좋아 보여요.
세연 [놀람] 왜?
나 좋을 때는 말을 안 하시더라고요.
세연 [놀람] ...
* 세연은 패를 내려놓고 웃음을 터뜨렸다.
세연 [웃음] 야! 그거 어떻게 알았어?
나 세 판째 보고 있으면 알죠.
세연 [기본] 연기의 기본이 뭔지 알아? 관객이 믿게 만드는 거야.
세연 [삐짐] 근데 너한테는 안 통하네.
세연 [부끄러움] ...그거 좀 기분 이상하다. 나쁘진 않은데.
@affection 10
@end

=== seyeon_04 | 대사 상대역
@bg maru evening
@bgm warm
@outfit 1
세연 [기본] 부탁 하나만. 상대역 좀 해줘.
나 [놀람] 저 연기 못 해요.
세연 [웃음] 못 해도 돼. 읽기만 해.
* 대본을 받아드니 두 사람이 마주 앉아 있는 장면이었다.
@choice
- 진지하게 읽어주기 | +9 | A
- 어색해하며 읽기 | +7 | B
@label A
* 나는 최대한 진지하게 읽었다.
세연 [놀람] 야. 너 왜 이렇게 잘해.
나 그냥 읽은 건데요.
세연 [기본] 그게 제일 어려운 거야. 대부분은 연기하려고 하다 망쳐.
세연 [부끄러움] 너는 그냥 말하네.
@goto END
@label B
나 [기본] "나는... 당신을 기다렸습니다."
세연 [웃음] 야, 너무 어색해!
나 그러니까 못 한다고 했잖아요.
세연 [웃음] 아니야. 어색한 게 더 진짜 같아.
* 세연은 웃다가 조용해졌다.
세연 [기본] 진짜 이러거든, 사람이. 고백할 때.
@label END
세연 [기본] 있잖아. 나 상대역 많이 해봤는데.
세연 [부끄러움] 눈 안 피하는 사람은 네가 처음이야.
@affection 10
@end

=== seyeon_05 | 가을 정기공연 티켓
@bg campus evening
@bgm autumn
@outfit 1
* 세연이 티켓 한 장을 내밀었다.
세연 [기본] 다음 주 정기공연. 나 주연이야.
나 [놀람] 축하해요.
세연 [웃음] 축하는 공연 보고 해. 망할 수도 있으니까.
* 세연은 티켓을 한 장만 줬다.
@choice
- 왜 한 장이냐고 묻기 | +9 | A
- 그냥 받기 | +6 | B
@label A
나 [기본] 왜 한 장이에요? 하숙생들 다 부르시지.
세연 [기본] ...다 부르면 네가 안 보일 것 같아서.
나 [놀람] 네?
세연 [부끄러움] 무대에서 객석 보면 다 까맣거든. 근데 한 명만 알고 있으면 찾게 돼.
세연 [기본] 그 한 명이 되어줘.
@goto END
@label B
나 [기본] 감사합니다. 꼭 갈게요.
세연 [기본] 앞에서 세 번째 줄, 가운데.
나 자리까지 정해주세요?
세연 [부끄러움] 거기가 무대에서 제일 잘 보이는 자리야.
@label END
@bgm warm
* 공연 당일, 세연은 커튼콜에서 정확히 세 번째 줄을 보고 인사했다.
@affection 10
@end

=== seyeon_06 | 무대 뒤 도시락
@bg campus night
@bgm warm
@outfit 1
* 공연 전날 리허설이 새벽까지 이어진다고 했다.
@choice
- 도시락 싸서 가기 | +9 | A
- 연락만 해보기 | +6 | B
@label A
* 하영에게 부탁해 도시락을 싸서 연습실로 갔다.
세연 [놀람] 야! 여기 어떻게 왔어?
나 밥 안 드셨을 것 같아서요.
세연 [부끄러움] ...나 사실 이틀 굶었어.
나 [놀람] 왜요?
세연 [기본] 무대 의상이 안 맞아서.
나 그럼 더 먹어야죠. 쓰러지면 공연을 못 하잖아요.
세연 [웃음] ...논리가 이상한데 맞는 말이네.
@goto END
@label B
* 연락을 하자 한참 뒤에 답이 왔다. "괜찮아."
* 그런데 새벽 두 시에 다시 연락이 왔다. "안 괜찮아."
세연 [패배] 미안. 아까는 괜찮은 척했어.
나 지금 갈게요.
세연 [놀람] 지금?
나 안 괜찮다면서요.
@label END
@bgm warm
세연 [기본] 있잖아. 나 무대에서는 안 무서운데.
세연 [부끄러움] 무대 내려오면 갑자기 무서워져. 아무도 안 보고 있으니까.
나 [기본] 지금은 제가 보고 있는데요.
세연 [부끄러움] ...그러네.
@affection 10
@end

=== seyeon_07 | 오디션에서 떨어진 날
@bg maru night
@bgm sad
@outfit 0
* 세연이 마루에 앉아 아무 표정도 짓지 않고 있었다. 처음 보는 얼굴이었다.
세연 [기본] 떨어졌어.
나 [기본] ...
세연 [기본] 심사평이 뭐였는지 알아? "연기를 너무 잘한다."
나 그게 왜 떨어지는 이유예요?
세연 [패배] 진짜 같지 않대. 계산한 게 보인대.
* 세연은 웃으려다 말았다.
세연 [기본] 나 사실 그 말 여러 번 들었어.
세연 [패배] 근데 어떻게 하는지 모르겠어. 계산 안 하고 연기하는 법을.
@bgm none
* 한참 침묵이 흘렀다.
@bgm warm
나 [기본] 지금 표정이요.
세연 [놀람] 어?
나 지금 아무 연기도 안 하시잖아요. 그게 제일 좋아요.
세연 [놀람] ...이건 그냥 힘 빠진 건데.
나 그게 진짜니까요.
세연 [부끄러움] ...야. 그런 말 하지 마. 울 것 같잖아.
@affection 10
@end

=== seyeon_08 | 연기를 시작한 이유
@bg rooftop night
@bgm sad
@outfit 0
세연 [기본] 나 어릴 때 되게 조용한 애였어.
나 [놀람] 상상이 안 되는데요.
세연 [웃음] 진짜야. 초등학교 때 별명이 '벙어리'였어.
세연 [기본] 부모님이 매일 싸웠거든. 집에서 말을 하면 안 되는 분위기였어.
* 세연은 무릎을 끌어안았다.
세연 [기본] 그러다 학예회에서 대사 세 줄 있는 역할을 맡았어.
세연 [기본] 그때 처음으로 큰 소리로 말해봤어. 근데 아무도 뭐라고 안 하더라.
세연 [웃음] 그게 시작이야. 대사는 해도 되는 말이잖아.
@bgm warm
나 [기본] 지금은 대사 아닌 말도 하시잖아요.
세연 [놀람] ...그런가?
나 방금 그 얘기, 대본에 없었잖아요.
세연 [부끄러움] ...맞네.
세연 [기본] 너한테만 그래. 이상하게.
@affection 10
@end

=== seyeon_09 | 상대역과의 소문
@bg hallway night
@bgm tense
@outfit 0
* 하숙집에 소문이 돌았다. 세연이 극단 상대역과 사귄다는 이야기였다.
* 세연은 부정하지 않았다.
@choice
- 직접 물어보기 | +10 | A
- 소문은 소문이라며 넘기기 | +5 | B
@label A
나 [기본] 사실이에요?
세연 [기본] 뭐가.
나 소문이요.
세연 [웃음] 아니야.
나 그럼 왜 아니라고 안 하셨어요?
세연 [기본] ...누가 물어봐주길 기다렸어.
나 [놀람] 네?
세연 [부끄러움] 소문 나면 신경 쓰는 사람이 있나 보려고. 유치하지.
나 유치하네요.
세연 [삐짐] 야!
나 근데 신경 쓰였어요.
세연 [부끄러움] ...그럼 됐어.
@goto END
@label B
나 [기본] 소문은 소문이죠.
세연 [삐짐] ...그게 끝이야?
나 제가 물어볼 일은 아닌 것 같아서요.
세연 [삐짐] 그래. 아니지. 맞아. 아닌 일이지.
* 그날 세연은 연습을 하지 않았다.
* 다음 날 세연이 먼저 말했다.
세연 [기본] 아니야, 그거. 소문.
나 [기본] ...네.
세연 [삐짐] 안 물어봐서 내가 말했어. 알아둬.
@label END
@bgm warm
세연 [기본] 나 무대에서는 뭐든 말할 수 있는데.
세연 [부끄러움] 무대 밖에서는 한마디가 왜 이렇게 어렵지.
@affection 10
@end

=== seyeon_10 | 대본에 없는 대사
@bg maru night
@bgm confess
@outfit 2
* 열 번째 판이 끝나고, 세연이 대본을 꺼냈다.
세연 [기본] 마지막 장면 읽어줄래? 상대역으로.
* 마지막 페이지를 펼치자 한 줄만 적혀 있었다. 나머지는 백지였다.
나 [놀람] 이거 대사가 없는데요.
세연 [부끄러움] 응. 여기부터는 내가 직접 써야 해.
@cg seyeon_ending
* 세연은 대본을 덮고, 처음으로 아무 표정도 만들지 않은 채 말했다.
세연 [기본] 나 연기 잘한다는 소리 듣고 자랐어. 그게 칭찬인 줄 알았어.
세연 [기본] 근데 오디션에서 떨어지고 알았어. 나는 진짜를 보여준 적이 없었구나.
세연 [진지] 지금부터 하는 말은 대본에 없어. 연습도 안 했어.
세연 [부끄러움] 그래서 되게 어색할 거야.
세연 [부끄러움] 나... 너 좋아해.
세연 [기본] 열 판 이겨서 얻는 상 같은 거 아니야.
세연 [웃음] 그냥 내 연기가 안 통하는 유일한 사람이라서.
세연 [부끄러움] 그 앞에서만 진짜가 되더라.
@choice
- 방금 게 제일 좋은 연기였어요 | +20 | A
- 어색해서 더 믿겨요 | +20 | B
@label A
나 [기본] 방금 게 제일 좋았어요. 지금까지 본 것 중에.
세연 [놀람] 그건 연기가 아니었는데.
나 그러니까요.
세연 [부끄러움] ...야. 그거 치사한 칭찬이야.
@goto END
@label B
나 [기본] 어색했어요. 그래서 믿겨요.
세연 [놀람] ...
나 아까 그러셨잖아요. 사람은 고백할 때 어색하다고.
세연 [부끄러움] 그걸 기억해?
나 그날 대본 읽었잖아요. 저도 상대역이었는데요.
@label END
@bgm warm
세연 [웃음] 그럼 다음 장부터는 같이 쓰자. 백지니까.
나 저 대사 못 쓰는데요.
세연 [웃음] 그냥 말하면 돼. 너는 원래 그러잖아.
@affection 20
@point 300
@end
`,Bp=`# 수아 (체대) - 여름 / 4번 하숙생

=== sua_01 | 3층에서 내려온 사람
@bg maru night
@bgm summer
@outfit 0
* 마루에 앉자마자 쿵쿵거리는 발소리가 계단을 타고 내려왔다.
수아 [웃음] 야! 네가 그 주인집 아들이야?
나 [놀람] 네.
수아 [기본] 1층 애들 다 이겼다며. 3층은 왜 안 와?
나 올라가도 되는 거였어요?
수아 [웃음] 안 되는 게 어딨어. 앉아.
* 수아는 대답을 듣기도 전에 방석을 깔았다.
수아 [진지] 미리 말해두는데 나는 안 봐줘.
나 알겠습니다.
수아 [웃음] 그리고 지면 안 분해하는 사람 싫어. 분해해.
나 그건 좀 어려운 부탁인데요.
수아 [웃음] 해봐. 그래야 다음에 또 재밌지.
@affection 10
@end

=== sua_02 | 새벽 여섯 시의 발소리
@bg hallway morning
@bgm summer
* 새벽 여섯 시. 계단에서 또 발소리가 났다.
나 [기본] 매일 이 시간에 나가세요?
수아 [웃음] 어. 십 킬로.
나 [놀람] 매일이요?
수아 [기본] 매일. 비 오면 팔 킬로.
나 그건 그냥 매일인데요.
수아 [웃음] 그렇게 되나?
* 수아는 신발끈을 묶으며 덧붙였다.
수아 [기본] 참, 하숙집 규칙 중에 새벽 소음 있잖아. 나 걸리는 거야?
나 6시면 괜찮아요. 5시부터가 문제죠.
수아 [부끄러움] ...그럼 어제 4시 반에 나간 건 못 본 걸로 해줘.
@affection 10
@end

=== sua_03 | 수아의 승부욕
@bg maru night
@bgm summer
* 수아가 세 판째 고를 외치고 세 판째 졌다.
나 [기본] 왜 매번 고를 하세요?
수아 [기본] 멈추면 지는 거니까.
나 멈춰서 이기는 경우도 있는데요.
수아 [진지] 그건 이긴 게 아니야. 안 진 거지.
나 그게 다른 건가요?
수아 [기본] 달라. 완전히 달라.
* 수아는 패를 모으며 웃었다.
수아 [웃음] 나 중학교 때 코치가 그랬어. "수아는 지는 법을 배워야 한다"고.
나 배우셨어요?
수아 [웃음] 아직. 근데 요즘 좀 배우는 중이야. 너 때문에.
@affection 10
@end

=== sua_04 | 같이 뛸래?
@bg street morning
@bgm summer
@outfit 1
* 새벽 여섯 시. 수아가 현관에서 나를 기다리고 있었다.
수아 [웃음] 어제 지면 뛰기로 했잖아.
나 그런 약속 한 적 없는데요.
수아 [웃음] 지금 했어.
@choice
- 따라 나가기 | +9 | A
- 삼 킬로만 협상하기 | +7 | B
@label A
나 [기본] ...가죠.
수아 [놀람] 어? 순순히?
나 어차피 안 된다고 해도 끌고 가실 거잖아요.
수아 [웃음] 파악 빠르네.
@goto END
@label B
나 [기본] 삼 킬로만요. 십 킬로는 무리예요.
수아 [기본] 오 킬로.
나 사 킬로.
수아 [웃음] 좋아. 협상 잘하네. 회계 언니 같아.
@label END
* 뛰다가 결국 나는 뒤처졌다.
수아 [웃음] 야! 빨리 와!
* 그런데 수아는 멀어지다가 되돌아와서 내 옆에 속도를 맞췄다.
나 [놀람] 왜 돌아와요.
수아 [기본] 혼자 뛰면 십 킬로인데, 같이 뛰면 사 킬로도 괜찮더라.
@affection 10
@end

=== sua_05 | 여름 옥상, 수박
@bg rooftop night
@bgm summer
@outfit 1
* 열대야. 옥상에 하숙생들이 반쯤 모여 수박을 잘랐다.
수아 [웃음] 씨 뱉기 대회 하자. 멀리 뱉는 사람이 이기는 걸로.
예린 [기본] 나는 빠질게. 품위라는 게 있으니까.
수아 [웃음] 품위 있는 사람은 다 져.
@choice
- 참가하기 | +9 | A
- 심판 보기 | +6 | B
@label A
나 [기본] 하죠.
* 결과는 수아의 압승이었다.
수아 [승리] 봤지? 이게 체대야.
나 이게 체대인 건 좀 슬픈데요.
수아 [웃음] 야!
@goto END
@label B
나 [기본] 저는 심판 볼게요. 공정하게.
수아 [삐짐] 재미없게.
* 그런데 심판을 보다 보니 수아가 이겼을 때마다 내 쪽을 돌아봤다.
수아 [웃음] 봤어? 방금 봤지?
@label END
@bgm warm
* 사람들이 하나둘 내려가고 옥상에 둘만 남았다.
수아 [기본] 나 사실 이런 거 좋아해.
나 수박이요?
수아 [기본] 아니. 사람 많은 데서 시끄럽게 노는 거.
수아 [부끄러움] 근데 끝나고 한 명 남는 게 더 좋아.
@affection 10
@end

=== sua_06 | 삔 발목
@bg maru evening
@bgm sad
@outfit 1
* 수아가 마루에 발을 뻗고 앉아 있었다. 발목이 부어 있었다.
나 [놀람] 어쩌다 그랬어요?
수아 [기본] 별거 아니야. 이틀이면 나아.
나 병원은요?
수아 [삐짐] 안 가. 가면 쉬라고 할 거잖아.
@choice
- 억지로라도 데려가기 | +9 | A
- 얼음찜질 해주기 | +8 | B
@label A
나 [기본] 가요. 제가 업고 가든지 할게요.
수아 [놀람] 야, 진심이야?
나 진심이에요.
수아 [부끄러움] ...혼자 갈게. 걸을 수 있어.
* 결국 나란히 걸어서 갔고, 전치 2주가 나왔다.
@goto END
@label B
* 나는 아무 말 없이 얼음을 가져와 수건에 쌌다.
수아 [놀람] 뭐야.
나 병원 안 가신다니까 이거라도요.
수아 [부끄러움] ...고마워.
@label END
@bgm warm
수아 [기본] 나 다치면 항상 혼자 처리했어.
수아 [기본] 선수 때는 다쳤다고 하면 자리 뺏기니까.
수아 [부끄러움] 근데 여기선 안 그래도 되는구나.
@affection 10
@end

=== sua_07 | 임용까지 남은 시간
@bg campus evening
@bgm sad
@outfit 0
* 캠퍼스 벤치에서 수아가 책을 덮었다.
수아 [기본] 나 내년에 임용 봐.
나 준비 잘 되세요?
수아 [패배] 몰라. 공부는 뛰는 거랑 다르더라.
수아 [기본] 뛰는 건 하면 늘어. 근데 이건 해도 그대로인 것 같아.
나 [기본] 그대로는 아닐 거예요.
수아 [삐짐] 위로하지 마. 그런 거 싫어.
나 위로 아니에요. 사실이에요.
수아 [놀람] 뭐가.
나 두 달 전엔 그 책 30페이지였는데 지금 200페이지예요.
수아 [놀람] ...그걸 어떻게 알아.
나 매일 봤으니까요.
@bgm warm
수아 [부끄러움] 야. 그런 걸 왜 세고 있어.
수아 [기본] ...근데 좀 힘 난다.
@affection 10
@end

=== sua_08 | 그만둔 선수 생활
@bg rooftop night
@bgm sad
@outfit 0
수아 [기본] 나 고3 때까지 선수였어.
나 [기본] 알고 있었어요. 어쩐지 뛰는 게 다르더라고요.
수아 [기본] 무릎이 나갔어. 수술하고 반년 쉬고, 돌아가려고 했는데.
수아 [패배] 코치가 그러더라. "수아야, 이제 다른 길 봐라."
* 수아는 무릎을 한 번 쓸었다.
수아 [기본] 그날 처음 울었어. 지고 나서 운 적은 없었는데.
나 지금은요?
수아 [기본] 지금? 지금은 애들 가르치고 싶어.
수아 [웃음] 나 같은 애한테 "다른 길 봐라" 말고 다른 말 해주고 싶어서.
@bgm warm
나 [기본] 그래서 매일 뛰는 거예요?
수아 [부끄러움] ...들켰네.
수아 [기본] 그만둔 게 아니라는 걸 나한테 증명하는 거야. 매일 아침.
@affection 10
@end

=== sua_09 | 말 안 한 이유
@bg maru night
@bgm tense
@outfit 0
* 수아가 며칠째 마루에 나오지 않았다.
* 알고 보니 임용 1차 결과가 나온 날이었다.
나 [기본] 왜 말 안 했어요.
수아 [삐짐] 말할 게 뭐 있어.
나 떨어졌어요?
수아 [기본] 붙었어.
나 [놀람] 붙었는데 왜 숨어 있어요?
@choice
- 왜 안 기뻐하는지 묻기 | +10 | A
- 축하부터 하기 | +7 | B
@label A
나 [기본] 붙었는데 왜 안 기뻐해요.
수아 [패배] ...2차 떨어지면 더 창피하잖아.
수아 [기본] 1차 붙었다고 떠들어놓고 최종에서 떨어지면.
나 그럼 떨어지고 나서 창피해해요. 오늘은 기뻐하고.
수아 [놀람] 그게 되나?
나 됩니다. 순서가 있는 거예요.
수아 [웃음] ...너 은근히 말 잘한다.
@goto END
@label B
나 [웃음] 축하해요. 진심으로.
수아 [부끄러움] ...아직 아니야.
나 오늘 건 오늘 축하하는 거예요.
수아 [부끄러움] ...고마워.
@label END
@bgm warm
수아 [기본] 야. 나 원래 자랑 되게 잘하는 사람인데.
수아 [부끄러움] 너한테는 왜 이렇게 말하기가 어렵지.
@affection 10
@end

=== sua_10 | 마지막 고
@bg maru night
@bgm confess
@outfit 2
* 열 번째 판. 수아는 7점을 넘기고도 한참 패를 보고 있었다.
수아 [진지] 나 고 할게.
나 그럼 지실 텐데요. 제 패 좋아요.
수아 [웃음] 알아.
나 아는데 왜요.
수아 [기본] 여기서 스톱하면 이 판이 끝나잖아.
@cg sua_ending
* 마루 불빛 아래에서 수아가 처음으로 천천히 말했다.
수아 [기본] 나 멈추는 법을 못 배웠다고 했지.
수아 [부끄러움] 근데 요즘 알겠어. 멈추기 싫은 게 있으면 그런 거더라.
수아 [진지] 이 판이 끝나는 게 싫어. 열 판이 다 끝나는 게 싫어.
수아 [부끄러움] 너 좋아해.
수아 [기본] 승부에서 이겨서 얻는 거 말고. 그냥 매일 같이 앉다 보니까 그렇게 됐어.
수아 [웃음] 그러니까 나 고 할래. 열한 판째 하자.
@choice
- 그럼 저도 고 | +20 | A
- 스톱하고 새로 시작해요 | +20 | B
@label A
나 [기본] 그럼 저도 고 할게요.
수아 [놀람] 너 이기고 있잖아.
나 저도 끝내기 싫어서요.
수아 [부끄러움] ...야. 그건 반칙이지.
@goto END
@label B
나 [기본] 스톱할게요. 이 판은 끝내죠.
수아 [패배] ...그래.
나 대신 내일 새 판을 시작해요. 열한 판째 말고, 첫 판으로.
수아 [놀람] 첫 판?
나 처음부터 다시 세는 거예요. 이제 다른 관계니까.
수아 [부끄러움] ...너 진짜.
@label END
@bgm warm
수아 [웃음] 그럼 내일 여섯 시. 같이 뛰는 걸로 시작하자.
나 그건 좀 봐주세요.
수아 [웃음] 안 봐줘. 말했잖아.
@affection 20
@point 300
@end
`,Ap=`# 예린 (회계) - 가을 / 7번 하숙생

=== yerin_01 | 가장 늦게 들어오는 사람
@bg yard night
@bgm autumn
@outfit 0
* 밤 열한 시. 대문 소리가 났다.
예린 [기본] 아직 안 주무셨네요.
나 [놀람] 저한테 존댓말 하세요?
예린 [놀람] 아. 죄송해요. 회사 습관이라.
나 편하게 하셔도 돼요.
예린 [기본] ...노력해볼게. 어려워.
* 예린은 구두를 벗고 마루에 앉더니 한숨을 쉬었다.
예린 [기본] 여기 앉으면 하루가 끝나는 느낌이야.
나 매일 이 시간이에요?
예린 [기본] 분기 마감엔 더 늦어.
나 그럼 오늘은요?
예린 [웃음] 오늘은 마감 아니야. 한 판 칠 시간 정도는 있어.
@affection 10
@end

=== yerin_02 | 공과금 정산의 밤
@bg maru night
@bgm autumn
* 예린이 계산기를 두드리며 종이를 정리하고 있었다.
예린 [진지] 이번 달 전기세. 3층이 1층보다 두 배야.
나 그건 에어컨 때문이겠죠.
예린 [기본] 그럼 두 배 내야지.
나 그게 규칙이었어요?
예린 [기본] 규칙이 없었으니까 지금 만들자는 거야.
* 예린은 표를 내밀었다. 층별 사용량이 깔끔하게 정리돼 있었다.
나 [놀람] 이걸 다 직접 하셨어요?
예린 [웃음] 이게 내 직업인데.
예린 [기본] 그리고 이런 건 명확한 게 서로한테 편해. 억울한 사람이 안 생기니까.
나 그럼 이거 마루 규칙에 넣을게요.
예린 [부끄러움] ...그렇게 바로 받아들여주는 사람 처음이야.
@affection 10
@end

=== yerin_03 | 예린의 원칙
@bg maru night
@bgm autumn
* 예린은 7점이 되자마자 스톱했다.
나 [놀람] 여기서요? 제 광이 하나도 없는데. 광박 노리면 두 배인데요.
예린 [기본] 알아.
나 아는데 왜 안 해요?
예린 [진지] 박은 안 써.
나 규칙인데요.
예린 [기본] 규칙이긴 한데, 그건 상대가 못 한 걸로 돈을 버는 거잖아.
예린 [기본] 나는 내가 한 걸로만 벌고 싶어.
나 그럼 손해 아니에요?
예린 [웃음] 손해지. 근데 매일 장부 보는 사람이라 그래.
예린 [기본] 숫자는 남거든. 어떻게 벌었는지도 같이 남아.
@affection 10
@end

=== yerin_04 | 야근 마중
@bg station night
@bgm warm
@outfit 1
* 밤 열두 시. 예린에게서 연락이 왔다. 막차를 놓쳤다고.
@choice
- 역까지 데리러 가기 | +9 | A
- 택시비를 보내주기 | +6 | B
@label A
* 역 앞에 도착하니 예린이 코트 깃을 세우고 서 있었다.
예린 [놀람] 진짜 왔어?
나 연락하셨잖아요.
예린 [부끄러움] 그냥... 혼잣말처럼 보낸 건데.
나 혼잣말은 저한테 안 보내죠.
예린 [부끄러움] ...맞네.
@goto END
@label B
* 삼십 분 뒤 예린이 대문으로 들어왔다.
예린 [기본] 택시비 보내줘서 고마워. 계좌로 돌려줄게.
나 그러실 필요 없는데요.
예린 [진지] 아니야. 이런 건 정확해야 해.
* 그런데 예린은 마루에 앉고서도 한참 일어나지 않았다.
예린 [기본] ...근데 좀 아쉽네.
나 뭐가요?
예린 [부끄러움] 아니야. 아무것도.
@label END
@bgm warm
* 돌아오는 길, 예린이 작게 말했다.
예린 [기본] 나 이 집에 온 지 일 년인데.
예린 [부끄러움] 밤에 누가 기다려준 건 오늘이 처음이야.
@affection 10
@end

=== yerin_05 | 가을 축제 초대권
@bg festival evening
@bgm autumn
@outfit 1
* 예린이 봉투 하나를 흔들었다.
예린 [기본] 회사에서 받은 건데, 대학 축제 초대권이야. 두 장.
나 회계법인이 대학 축제 초대권을 왜 줘요?
예린 [웃음] 협찬이래. 나는 못 가겠지만.
@choice
- 같이 가자고 하기 | +9 | A
- 다른 하숙생 주라고 하기 | +5 | B
@label A
나 [기본] 그럼 같이 가시죠.
예린 [놀람] 나는 다음 주에 마감이...
나 마감은 다음 주잖아요.
예린 [부끄러움] ...그러네.
@goto END
@label B
나 [기본] 은서나 수아 주시면 좋아할 것 같은데요.
예린 [기본] ...그럴까.
* 다음 날 예린은 초대권을 아무한테도 주지 않았다.
예린 [삐짐] 잃어버렸어.
나 [놀람] 봉투째로요?
예린 [부끄러움] ...응.
@label END
@bgm warm
* 그날 밤 축제 불빛이 하숙집 마당까지 들어왔다.
예린 [기본] 나 대학 때 축제 한 번도 안 갔어.
나 왜요?
예린 [기본] 그 시간에 자격증 공부했지.
예린 [부끄러움] 근데 요즘 그게 잘한 건가 싶어.
@affection 10
@end

=== yerin_06 | 감기 걸린 회계사
@bg hallway night
@bgm sad
@outfit 1
* 304호에서 기침 소리가 났다.
나 [기본] 괜찮으세요?
예린 [기본] 괜찮아. 내일 출근해야 해서 약 먹고 자면 돼.
나 열이 있는 것 같은데요.
예린 [기본] 이 정도로 쉬면 마감이 밀려.
@choice
- 죽 끓여오기 | +8 | A
- 팀장한테 연락하라고 설득하기 | +9 | B
@label A
* 하영에게 부탁해서 죽을 끓여 가져갔다.
예린 [놀람] 이거 하영이가?
나 제가 부탁했어요.
예린 [부끄러움] ...두 사람이 신경 써준 거네.
@goto END
@label B
나 [기본] 팀장님한테 연락하세요. 하루 쉬겠다고.
예린 [놀람] 그게 되겠어? 1년차인데.
나 안 되면 제가 대신 전화할게요.
예린 [놀람] 야. 그건 진짜 큰일 나.
* 결국 예린이 직접 연락했고, 하루 휴가를 받았다.
예린 [부끄러움] ...말해보니까 되네.
@label END
@bgm warm
예린 [기본] 나 아플 때 누구한테 말해본 적이 없어.
예린 [기본] 회사에서는 약한 티 내면 안 되고, 집에서는 걱정하실까 봐.
예린 [부끄러움] 근데 이 집에서는 그냥 말하게 되네.
@affection 10
@end

=== yerin_07 | 회사를 그만둘까
@bg maru night
@bgm sad
@outfit 0
예린 [기본] 나 요즘 그만둘까 생각해.
나 [놀람] 갑자기요?
예린 [기본] 갑자기는 아니야. 반년쯤 됐어.
나 왜요?
예린 [패배] 내가 만드는 숫자가 누구한테 도움이 되는지 모르겠어서.
예린 [기본] 그냥 큰 회사가 세금을 덜 내게 도와주는 것 같을 때가 있어.
* 예린은 손끝으로 마루를 문질렀다.
예린 [패배] 근데 그만두면 이 년 공부가 없어지잖아.
@bgm warm
나 [기본] 하숙집 공과금 표는요?
예린 [놀람] 어?
나 그거 만드시고 나서 3층 사람들 억울해하는 거 없어졌어요.
나 그것도 예린 씨가 만든 숫자인데요.
예린 [놀람] ...그건 그냥 취미였는데.
나 도움 된 숫자잖아요.
예린 [부끄러움] ...너 진짜 이상한 데서 사람을 붙잡는다.
@affection 10
@end

=== yerin_08 | 숫자를 믿게 된 이유
@bg maru night
@bgm sad
@outfit 0
예린 [기본] 나 고등학교 때 아빠 가게가 망했어.
나 [기본] ...
예린 [기본] 사기였어. 동업자가 장부를 두 개 썼거든.
예린 [기본] 아빠는 숫자를 볼 줄 몰랐고, 그냥 믿었어.
예린 [패배] 그래서 다 잃었어. 집도.
* 예린은 담담하게 말했다.
예린 [기본] 그때 정했어. 나는 숫자를 볼 줄 아는 사람이 되겠다고.
나 그래서 회계사가 되셨구나.
예린 [기본] 응. 근데 웃긴 게 뭔지 알아?
예린 [패배] 숫자를 볼 줄 알게 되니까, 사람을 못 믿겠더라.
@bgm warm
나 [기본] 그럼 이 집 사람들은요?
예린 [놀람] 어?
나 여기서는 장부 안 보시잖아요.
예린 [부끄러움] ...보긴 봐. 공과금.
나 그건 나눠 내려고 보는 거죠. 의심해서 보는 게 아니잖아요.
예린 [부끄러움] ...맞네.
@affection 10
@end

=== yerin_09 | 회사 선배의 연락
@bg yard night
@bgm tense
@outfit 0
* 대문 앞에서 예린이 누군가와 통화하고 있었다.
예린 [기본] 네, 선배. ...아니요, 그건 좀. ...생각해볼게요.
* 전화를 끊은 예린의 표정이 굳어 있었다.
@choice
- 무슨 일인지 묻기 | +9 | A
- 모른 척하기 | +5 | B
@label A
나 [기본] 무슨 일 있으세요?
예린 [기본] 회사 선배가 이직 제안을 했어. 부산 지사로.
나 [놀람] 부산이요?
예린 [기본] 연봉은 더 좋아. 그리고 거기가 워라밸이 낫대.
나 가실 거예요?
예린 [기본] ...모르겠어. 여기 떠날 이유는 없는데.
나 이유가 있어야 남는 건가요?
예린 [놀람] ...
나 남을 이유가 있으면 되는 거 아니에요?
예린 [부끄러움] ...그 말 좀 치사하다.
@goto END
@label B
* 나는 아무것도 묻지 않았다.
* 예린은 마루에 앉아 한참 나를 보다가 먼저 말했다.
예린 [기본] 안 물어봐?
나 말씀하시고 싶으면 하실 거라고 생각해서요.
예린 [삐짐] ...그런 배려는 가끔 얄미워.
예린 [기본] 이직 제안 받았어. 부산.
나 [놀람] 아.
예린 [기본] 이제 물어봐도 돼.
@label END
@bgm warm
예린 [기본] 회계사가 제일 못 하는 계산이 뭔지 알아?
나 뭔데요.
예린 [부끄러움] 값을 못 매기는 항목이야. 여기 마루 같은 거.
@affection 10
@end

=== yerin_10 | 계산 밖의 항목
@bg maru night
@bgm confess
@outfit 2
* 열 번째 판. 예린은 광박이 성립하는 자리에서 또 스톱하지 않았다.
나 [놀람] 이번엔 왜 고예요? 박도 안 쓰시는 분이.
예린 [기본] 박은 여전히 안 써.
예린 [부끄러움] 근데 오늘은 판이 안 끝났으면 해서.
@cg yerin_ending
* 예린은 가방에서 종이 한 장을 꺼냈다. 이직 제안서였다.
예린 [기본] 이거 오늘 거절했어.
나 [놀람] 왜요?
예린 [기본] 계산을 해봤거든. 연봉, 집값, 통근 시간, 커리어.
예린 [기본] 다 부산이 나았어. 전부 다.
예린 [진지] 그런데 계산에 안 들어가는 항목이 하나 있었어.
예린 [부끄러움] 밤 열한 시에 대문을 열면 마루에 불이 켜져 있는 거.
예린 [부끄러움] 나 너 좋아해.
예린 [기본] 승부에서 이겨서 얻은 것도 아니고, 손익을 따진 결과도 아니야.
예린 [웃음] 계산이 안 되는 항목이라서, 그냥 인정하기로 했어.
@choice
- 남을 이유가 되어드릴게요 | +20 | A
- 그 항목, 저도 계산 안 돼요 | +20 | B
@label A
나 [기본] 그럼 제가 남을 이유 할게요.
예린 [놀람] 그거 부담스러운 말인데.
나 부담 되시면 취소할게요.
예린 [부끄러움] ...취소하지 마.
@goto END
@label B
나 [기본] 그 항목, 저도 계산이 안 됐어요.
예린 [놀람] 언제부터.
나 공과금 표 만드셨을 때부터요.
예린 [놀람] 그건 엑셀이었는데.
나 억울한 사람 안 생기게 하려고 밤새 만드셨잖아요.
예린 [부끄러움] ...그런 걸로 사람을 좋아하는 경우가 있나.
@label END
@bgm warm
예린 [웃음] 그럼 오늘부터 장부에 항목 하나 추가할게.
나 뭐라고 쓰실 건데요.
예린 [부끄러움] "측정 불가".
@affection 20
@point 300
@end
`,Rp=`# 윤 (장기하숙생) - 겨울 / 10번 하숙생 / 최종 히로인

=== yoon_01 | 별채의 불빛
@bg yard night
@bgm winter
@outfit 0
* 첫눈이 온 날, 별채 문이 열려 있었다.
* 안쪽에서 화투 섞는 소리가 났다.
윤 [기본] 들어와. 춥다.
나 [놀람] 제가 올 걸 아셨어요?
윤 [기본] 아홉 명을 다 거쳤으면 올 차례지.
* 방 안에는 낡은 화투갑 하나와 방석 두 장뿐이었다.
나 여기 사신 지 얼마나 됐어요?
윤 [기본] 삼십 년.
나 [놀람] 삼십 년이요? 그럼 나이가...
윤 [웃음] 그건 묻는 거 아니야.
* 윤은 패를 갈랐다. 손놀림이 지금까지 본 누구와도 달랐다.
윤 [기본] 앉아. 이 집에서 마지막으로 칠 사람이 너야.
나 마지막이요?
윤 [기본] 그건 나중에.
@affection 10
@end

=== yoon_02 | 삼십 년의 규칙
@bg annex night
@bgm winter
윤 [기본] 이 집 규칙이 왜 생겼는지 알아?
나 어머니가 삼십 년 된 전통이라고만 하셨어요.
윤 [기본] 전통이 아니야. 필요해서 생긴 거야.
나 무슨 필요요?
윤 [기본] 옛날에 이 집에 하숙생이 열둘이었어. 다들 처음 서울 온 애들이었고.
윤 [기본] 말도 못 붙이고 각자 방에만 있었지.
* 윤은 화투갑을 쓸었다.
윤 [기본] 그래서 네 어머니가 마루에 방석을 깔았어. "밤에 여기서 한 판씩 쳐라"고.
나 그것 때문에요?
윤 [웃음] 판을 치려면 마주 앉아야 하잖아. 마주 앉으면 말을 하게 되고.
윤 [기본] 그게 규칙의 이유야. 승부가 목적이 아니었어.
@affection 10
@end

=== yoon_03 | 윤이 기억하는 것
@bg annex night
@bgm winter
* 윤은 내가 낸 패를 보고도 한참 움직이지 않았다.
윤 [기본] 너 세 판 전에도 그 자리에서 망설였어.
나 [놀람] 세 판 전이요?
윤 [기본] 스물세 판 전에도.
나 [놀람] 그걸 다 기억해요?
윤 [기본] 이 마루에서 삼십 년 동안 판을 봤어. 사람마다 버릇이 있어.
윤 [기본] 은서는 좋은 패가 오면 어깨가 올라가. 하영이는 반대로 조용해지고.
나 저는요?
윤 [웃음] 너는 이길 것 같으면 상대 얼굴을 봐.
나 [놀람] ...그런가요?
윤 [기본] 그래. 그래서 다들 너한테 진 거야. 얼굴을 보면 봐주게 되거든.
@affection 10
@end

=== yoon_04 | 첫눈 오는 마루
@bg maru night
@bgm winter
@outfit 1
* 눈이 마당에 쌓이고 마루 유리문에 성에가 꼈다.
윤 [기본] 이 마루가 제일 추운 날이야.
나 별채가 더 따뜻하지 않아요?
윤 [기본] 따뜻한데, 여기가 좋아.
@choice
- 왜 마루가 좋은지 묻기 | +9 | A
- 전기장판을 가져오기 | +8 | B
@label A
나 [기본] 왜 마루가 좋으세요?
윤 [기본] 소리가 나니까.
나 소리요?
윤 [기본] 부엌에서 하영이 도마 소리, 3층에서 수아 발소리, 옥상에서 나래 망원경 소리.
윤 [기본] 별채는 조용해. 너무 조용해.
나 [기본] ...
윤 [웃음] 삼십 년 동안 그 소리들을 들었어. 사람은 다 바뀌었는데 소리는 비슷해.
@goto END
@label B
* 나는 방에서 전기장판을 가져와 마루에 깔았다.
윤 [놀람] 이런 건 안 해도 되는데.
나 추우시다면서요.
윤 [기본] ...이 집에서 나한테 뭘 가져다준 사람은 네 어머니 말고 없었어.
나 [놀람] 삼십 년 동안요?
윤 [기본] 다들 내가 여기 있는 줄도 몰랐으니까.
@label END
@bgm sad
윤 [기본] 나는 여기 오래 있었는데, 오래 있었다는 걸 아는 사람이 없어.
윤 [기본] 그게 삼십 년의 뜻이야.
@affection 10
@end

=== yoon_05 | 오래된 화투 한 벌
@bg annex night
@bgm winter
@outfit 1
* 윤이 화투갑을 열어 보였다. 모서리가 다 닳아 있었다.
윤 [기본] 이거 삼십 년 된 거야.
나 [놀람] 아직 쓸 수 있어요?
윤 [기본] 쓸 수 있어. 근데 광 하나가 없어.
* 확인해보니 정말 한 장이 비어 있었다.
나 어디 갔어요?
윤 [기본] 누가 가져갔어. 아주 오래전에.
@choice
- 누가 가져갔는지 묻기 | +10 | A
- 새 화투를 사다 주겠다고 하기 | +6 | B
@label A
나 [기본] 누가요?
윤 [기본] 이 집에서 제일 잘 치던 사람.
나 어머니요?
윤 [웃음] 아니. 네 어머니는 두 번째로 잘 쳤어.
나 [놀람] 그럼 누구...
윤 [기본] 그건 나중에. 지금 말하면 재미없어.
@goto END
@label B
나 [기본] 새 걸로 하나 사다 드릴까요?
윤 [기본] 됐어.
나 광이 없으면 판이 안 되잖아요.
윤 [기본] 이 한 벌로 삼십 년 쳤어. 없는 채로.
윤 [기본] 없는 걸 채우려고 하면 다른 게 돼버려.
@label END
@bgm sad
윤 [기본] 나는 이 한 장을 기다리고 있어.
나 돌려받을 수 있어요?
윤 [기본] 돌려주러 오면.
@affection 10
@end

=== yoon_06 | 어머니가 아는 이름
@bg kitchen evening
@bgm tense
@outfit 1
* 어머니에게 윤 이야기를 꺼냈다.
어머니 [놀람] 윤이랑 쳤어?
나 네. 왜요?
어머니 [진지] ...그 애가 먼저 앉자고 했니?
나 네.
* 어머니는 한참 말이 없었다.
@choice
- 무슨 사연이 있는지 묻기 | +10 | A
- 더 묻지 않기 | +6 | B
@label A
나 [기본] 무슨 일이 있었어요?
어머니 [기본] 삼십 년 전에 이 집에 하숙생이 하나 있었어. 화투를 기가 막히게 쳤지.
어머니 [기본] 그 사람이 어느 날 광 한 장을 가지고 나갔어. 돌아오겠다고 하고.
나 [놀람] 안 돌아왔어요?
어머니 [진지] 안 돌아왔어.
나 그럼 윤은...
어머니 [기본] 윤이는 그 사람을 기다리는 거야. 삼십 년째.
@goto END
@label B
* 나는 더 묻지 않았다.
어머니 [기본] 안 물어보는구나.
나 윤이 직접 말할 때까지 기다리려고요.
어머니 [웃음] ...너 그 애랑 비슷하네.
나 네?
어머니 [기본] 아니다. 아무것도.
@label END
@bgm sad
어머니 [기본] 하나만 말해줄게.
어머니 [진지] 윤이가 마지막이라고 하면, 그건 진짜 마지막이라는 뜻이야.
@affection 10
@end

=== yoon_07 | 이 집을 떠나지 못한 이유
@bg annex night
@bgm sad
@outfit 0
윤 [기본] 어머니한테 들었지.
나 [놀람] 어떻게 아셨어요?
윤 [웃음] 네가 오늘 내 얼굴을 안 봐.
* 윤은 패를 섞다 말고 손을 멈췄다.
윤 [기본] 삼십 년 전에 나는 여기 하숙생이었어. 스무 살이었지.
윤 [기본] 같은 방을 쓰던 사람이 있었어. 나보다 화투를 잘 쳤어.
윤 [기본] 어느 날 그 사람이 판에서 이기고 광 한 장을 가져갔어. "다시 와서 돌려주겠다"고.
나 왜 안 돌아왔어요?
윤 [패배] 몰라. 삼십 년 동안 모르는 채였어.
나 그래서 계속 기다린 거예요?
윤 [기본] 처음엔 그랬어.
윤 [기본] 그러다 언젠가부터 기다리는 게 습관이 됐어. 왜 기다리는지도 잊고.
@bgm none
윤 [패배] 나는 이 집에서 삼십 년을 앉아만 있었어.
@bgm warm
나 [기본] 앉아만 있었던 건 아니잖아요.
윤 [놀람] 뭐?
나 도희 선배가 그러던데요. 처음 이 집에 왔을 때 윤이 한 판 하자고 했다고.
나 "여기 앉으면 다 하숙생이야"라고 했다면서요.
윤 [놀람] ...그걸 기억해?
나 도희 선배는 그 한마디에 칠 년 있었대요.
윤 [부끄러움] ...나는 그냥 한 말이었는데.
@affection 10
@end

=== yoon_08 | 삼십 년 전 그 판
@bg annex night
@bgm sad
@outfit 0
윤 [기본] 그날 판 얘기를 해줄게. 아무한테도 안 했어.
나 [기본] 네.
윤 [기본] 마지막 판이었어. 그 사람이 7점에서 고를 했어. 세 번.
윤 [기본] 이상했어. 그럴 패가 아니었거든.
나 왜 고를 했을까요?
윤 [기본] 나도 그게 궁금해서 삼십 년을 생각했어.
* 윤은 빈 자리를 손끝으로 짚었다.
윤 [기본] 답은 하나밖에 없더라.
윤 [기본] 판을 안 끝내고 싶었던 거야.
나 [놀람] ...
윤 [패배] 그날 그 사람은 다음 날 떠나기로 되어 있었어. 나만 몰랐고.
윤 [기본] 고를 세 번 한 건 밤을 늘리려고 그런 거였어.
윤 [패배] 나는 그것도 모르고 이기려고만 했어.
@bgm warm
윤 [기본] 그래서 광을 가져간 거야. 돌려주러 와야 하니까.
윤 [기본] 나한테 다시 만날 이유를 하나 남겨두고 간 거지.
나 [기본] 그럼 그 사람도 기다렸겠네요.
윤 [놀람] ...
@affection 10
@end

=== yoon_09 | 마지막 하숙생
@bg maru night
@bgm tense
@outfit 0
* 마루에 하숙생들이 모여 있었다. 윤이 별채에서 나온 건 처음이라고 했다.
은서 [놀람] 어? 저 사람 누구야?
도희 [놀람] ...윤이다. 칠 년 만에 처음 봐.
윤 [기본] 이 집에 마지막으로 인사하러 왔어.
* 사람들이 웅성거렸다.
나 [놀람] 마지막이라니요?
윤 [기본] 나 이번 겨울에 나가.
@choice
- 왜 지금이냐고 묻기 | +10 | A
- 가지 말라고 하기 | +10 | B
@label A
나 [기본] 왜 지금이에요? 삼십 년을 기다렸는데.
윤 [기본] 기다리는 게 끝났으니까.
나 그 사람이 왔어요?
윤 [기본] 아니.
나 그럼 왜요.
윤 [기본] 네가 왔잖아.
나 [놀람] ...네?
윤 [기본] 이 마루에 백 판을 친 사람이 나온 게 삼십 년 만이야.
윤 [웃음] 이제 이 자리에 앉을 사람이 생겼으니까, 나는 가도 돼.
@goto END
@label B
나 [기본] 가지 마세요.
윤 [놀람] ...
나 아직 판이 안 끝났잖아요. 열 번째 판이 남았어요.
윤 [웃음] 그래. 판은 끝내고 가야지.
나 그게 아니라...
윤 [기본] 알아. 무슨 말인지.
윤 [부끄러움] 삼십 년 만에 처음이야. 가지 말라는 말 듣는 거.
@label END
@bgm sad
* 그날 밤 마루에는 방석이 열 개 깔렸다. 처음 있는 일이라고 했다.
@affection 10
@end

=== yoon_10 | 하숙집의 겨울
@bg maru night
@bgm confess
@outfit 2
* 열 번째 판. 마지막 판이었다.
* 윤은 7점을 넘겼고, 나를 한참 바라봤다.
윤 [기본] 삼십 년 전에 그 사람이 여기서 고를 했어. 세 번.
윤 [웃음] 이제 그 마음을 알겠어.
윤 [진지] 고.
나 [놀람] 이기고 있는데요.
윤 [기본] 알아. 그래서 고야.
* 윤은 가방에서 낡은 화투갑을 꺼내 마루 위에 놓았다.
@cg yoon_ending
윤 [기본] 이거 네 어머니한테 드리려고 했는데, 너한테 줄게.
나 [놀람] 광이 없는 거잖아요.
윤 [웃음] 이제 있어.
* 갑을 열자 비어 있던 자리에 광 한 장이 꽂혀 있었다. 새것이 아니라, 똑같이 닳은 것이었다.
나 [놀람] 이건...
윤 [기본] 지난달에 우편으로 왔어. 주소도 이름도 없이.
윤 [기본] 삼십 년 만에 돌아온 거야.
나 그럼 그 사람은...
윤 [기본] 몰라. 만나진 못했어. 앞으로도 못 만날 것 같고.
윤 [기본] 근데 이상하게 괜찮아.
* 윤은 처음으로 웃었다. 연기가 아닌 웃음이었다.
윤 [부끄러움] 삼십 년 동안 나는 돌아오지 않는 걸 기다린다고 생각했어.
윤 [기본] 근데 아니었어. 나는 이 마루에 누가 앉는 걸 기다린 거였어.
윤 [진지] 그게 너야.
윤 [부끄러움] 나 너 좋아해.
윤 [기본] 이 판을 이겨서 얻는 것도 아니고, 네가 백 판을 쳐서 받는 상도 아니야.
윤 [기본] 겨울에 별채에서 마루 소리를 들으면서, 오늘은 저 사람이 나올까 생각했어.
윤 [웃음] 삼십 년 동안 한 번도 안 한 생각이야.
@choice
- 이 광, 제가 다시 맡을게요 | +20 | A
- 그럼 이 판은 제가 고 할게요 | +20 | B
- 안 가셨으면 좋겠어요 | +20 | C
@label A
나 [기본] 이 광, 제가 맡을게요.
윤 [놀람] 왜.
나 그럼 돌려주러 와야 하잖아요. 저한테.
윤 [놀람] ...
나 다시 만날 이유를 하나 남겨두는 거예요. 삼십 년 전처럼요.
윤 [부끄러움] ...너 그걸 그렇게 쓰는구나.
@goto END
@label B
나 [기본] 그럼 저도 고 할게요.
윤 [놀람] 너 지금 이기고 있잖아.
나 알아요. 그래서 고예요.
윤 [부끄러움] ...같은 말을 하네.
나 판을 안 끝내고 싶어서요. 삼십 년 전 그 사람처럼요.
@goto END
@label C
나 [기본] 안 가셨으면 좋겠어요.
윤 [기본] 나는 이제 여기 있을 이유가 없어.
나 이유가 없으면 못 있는 거예요?
윤 [놀람] ...
나 여기 앉으면 다 하숙생이라면서요. 윤이 한 말이잖아요.
윤 [부끄러움] ...내 말에 내가 걸리네.
@label END
@bgm warm
* 윤은 한참 마루를 바라보다가, 방석을 다시 깔았다.
윤 [웃음] 그럼 이번 겨울은 여기서 날게.
윤 [기본] 대신 조건이 있어.
나 뭔데요.
윤 [부끄러움] 매일 밤 한 판. 삼십 년치를 다 못 채워도, 시작은 해야지.
* 마당에 눈이 계속 내렸고, 마루의 불은 꺼지지 않았다.
@affection 20
@point 500
@end
`,Oa=["normal","smile","sulk","surprise","shy","serious","win","lose"],Op={기본:"normal",웃음:"smile",삐짐:"sulk",놀람:"surprise",부끄러움:"shy",진지:"serious",승리:"win",패배:"lose"},Fp=["maru","kitchen","hallway","rooftop","yard","cvs","campus","street","room","annex","festival","station"],Up=["morning","evening","night"],Vp=["title","spring","summer","autumn","winter","warm","tense","sad","confess","none"],Gp=/^([^\s\[\]]+)\s*(?:\[([^\]]+)\])?\s+(.+)$/;function Hp(e,n="<script>"){const t=[],r=[];let l=null,i=n;const o=e.split(/\r?\n/),a=(c,f)=>{r.push({sceneId:i,line:c,message:f})},s=c=>{l&&(c.kind==="label"&&(l.labels[c.name]=l.steps.length),l.steps.push(c))};for(let c=0;c<o.length;c++){const f=c+1,m=o[c].trim();if(!m||m.startsWith("#"))continue;if(m.startsWith("===")){const p=m.replace(/^=+/,"").trim(),[d,g]=p.split("|").map(k=>k.trim());if(!d){a(f,"씬 id 가 없습니다");continue}i=d,l={id:d,title:g??d,tenantId:d.includes("_")?d.split("_")[0]:null,steps:[],labels:{}},t.push(l);continue}if(!l){a(f,"씬 헤더(=== id | 제목) 보다 먼저 나온 줄입니다");continue}if(m.startsWith("*")){const p=m.slice(1).trim();p?s({kind:"narrate",text:p}):a(f,"빈 나레이션");continue}if(m.startsWith("-")){const p=l.steps[l.steps.length-1];if(!p||p.kind!=="choice"){a(f,"@choice 없이 선택지가 나왔습니다");continue}const d=Wp(m.slice(1).trim());d?p.options.push(d):a(f,`선택지 형식 오류: ${m}`);continue}if(m.startsWith("@")){const[p,...d]=m.slice(1).split(/\s+/),g=d.join(" ").trim();switch(p){case"bg":{const[k,j]=d;if(!Fp.includes(k)){a(f,`알 수 없는 배경: ${k}`);break}const b=j??"night";if(!Up.includes(b)){a(f,`알 수 없는 시간대: ${j}`);break}s({kind:"bg",bg:k,time:b});break}case"bgm":{if(!Vp.includes(g)){a(f,`알 수 없는 BGM: ${g}`);break}s({kind:"bgm",bgm:g});break}case"sfx":g?s({kind:"sfx",sfx:g}):a(f,"sfx 이름이 없습니다");break;case"cg":g?s({kind:"cg",cg:g}):a(f,"cg 이름이 없습니다");break;case"outfit":{const k=Number(g);[0,1,2].includes(k)?s({kind:"outfit",index:k}):a(f,`의상 번호는 0~2: ${g}`);break}case"affection":{const k=Number(g);Number.isNaN(k)?a(f,`호감도 값 오류: ${g}`):s({kind:"affection",delta:k});break}case"point":{const k=Number(g);Number.isNaN(k)?a(f,`포인트 값 오류: ${g}`):s({kind:"point",delta:k});break}case"choice":s({kind:"choice",options:[]});break;case"label":g?s({kind:"label",name:g}):a(f,"라벨 이름이 없습니다");break;case"goto":g?s({kind:"goto",name:g}):a(f,"goto 대상이 없습니다");break;case"end":s({kind:"end"});break;default:a(f,`알 수 없는 지시어: @${p}`)}continue}const h=Gp.exec(m);if(!h){a(f,`해석할 수 없는 줄: ${m}`);continue}const[,y,S,w]=h;let I="normal";if(S){const p=Op[S.trim()];p?I=p:a(f,`알 수 없는 표정: ${S}`)}s({kind:"say",speaker:y,expression:I,text:w})}for(const c of t){for(const f of c.steps)if(f.kind==="goto"&&!(f.name in c.labels)&&r.push({sceneId:c.id,line:0,message:`없는 라벨로 goto: ${f.name}`}),f.kind==="choice"){f.options.length<2&&r.push({sceneId:c.id,line:0,message:"선택지가 2개 미만입니다"});for(const m of f.options)m.goto&&!(m.goto in c.labels)&&r.push({sceneId:c.id,line:0,message:`없는 라벨로 선택지 이동: ${m.goto}`})}c.steps.some(f=>f.kind==="end")||r.push({sceneId:c.id,line:0,message:"@end 가 없습니다"})}return{scenes:t,issues:r}}function Wp(e){const n=e.split("|").map(i=>i.trim());if(n.length<2)return null;const t=n[0];if(!t)return null;const r=Number(n[1]);if(Number.isNaN(r))return null;const l=n[2]?n[2]:null;return{text:t,affection:r,goto:l}}function Qp(e){return _s({scene:e,pc:0,view:{bg:"maru",time:"night",bgm:"none",cg:null,outfit:0,speaker:null,expression:"normal",text:"",choices:null,affectionDelta:0,pointDelta:0,sfx:null,done:!1}})}function _s(e){const n={...e.view,sfx:null};if(n.choices)return{...e,view:n};let t=e.pc;const{steps:r,labels:l}=e.scene;let i=0;for(;t<r.length;){if(i++>1e4){n.done=!0;break}const o=r[t];switch(t++,o.kind){case"bg":n.bg=o.bg,n.time=o.time;break;case"bgm":n.bgm=o.bgm;break;case"sfx":n.sfx=o.sfx;break;case"cg":n.cg=o.cg;break;case"outfit":n.outfit=o.index;break;case"affection":n.affectionDelta+=o.delta;break;case"point":n.pointDelta+=o.delta;break;case"label":break;case"goto":{const a=l[o.name];if(a===void 0)return n.done=!0,{...e,pc:r.length,view:n};t=a;break}case"choice":return n.choices=o.options,{...e,pc:t,view:n};case"say":return n.speaker=o.speaker,n.expression=o.expression,n.text=o.text,{...e,pc:t,view:n};case"narrate":return n.speaker=null,n.expression="normal",n.text=o.text,{...e,pc:t,view:n};case"end":return n.done=!0,n.choices=null,{...e,pc:r.length,view:n}}}return n.done=!0,{...e,pc:t,view:n}}function qp(e,n){const t=e.view.choices;if(!t||n<0||n>=t.length)return e;const r=t[n],l={...e.view,choices:null,affectionDelta:e.view.affectionDelta+r.affection};let i=e.pc;if(r.goto){const o=e.scene.labels[r.goto];o!==void 0&&(i=o)}return _s({...e,pc:i,view:l})}const Kp=Object.assign({"../data/scripts/common.txt":bp,"../data/scripts/dohee.txt":Mp,"../data/scripts/eunseo.txt":Pp,"../data/scripts/hayeong.txt":Dp,"../data/scripts/jiwoo.txt":Ip,"../data/scripts/minji.txt":zp,"../data/scripts/narae.txt":Tp,"../data/scripts/seyeon.txt":Lp,"../data/scripts/sua.txt":Bp,"../data/scripts/yerin.txt":Ap,"../data/scripts/yoon.txt":Rp}),So={},Fa=[];for(const[e,n]of Object.entries(Kp)){const{scenes:t,issues:r}=Hp(n,e);Fa.push(...r);for(const l of t)So[l.id]&&Fa.push({sceneId:l.id,line:0,message:`중복된 씬 id (${e})`}),So[l.id]=l}const Yp=So;function Ei(e){return Yp[e]??null}const js="hasukgo.save.v1",jf=1,Xp={rules:{},allRoutes:!0,bgmVolume:.5,sfxVolume:.7,textSpeed:25};function xr(){const e={};for(const n of tn)e[n.id]={affection:0,clearedStage:0,wins:0,losses:0,dating:!1};return{version:jf,deviceId:"",savedAt:0,points:300,tenants:e,seenScenes:[],unlockedCG:[],recentGames:[],settings:{...Xp},stats:{totalGames:0,wins:0,losses:0,bestScore:0}}}function $f(){try{const e=localStorage.getItem(js);if(!e)return xr();const n=JSON.parse(e);return zl(n)}catch{return xr()}}function $s(e){const n={...e,savedAt:Date.now()};try{localStorage.setItem(js,JSON.stringify(n))}catch{}Jp(n)}const Zp="hasukgo",bn="meta",Es="save";function Ns(){return new Promise(e=>{try{if(typeof indexedDB>"u")return e(null);const n=indexedDB.open(Zp,1);n.onupgradeneeded=()=>{const t=n.result;t.objectStoreNames.contains(bn)||t.createObjectStore(bn)},n.onsuccess=()=>e(n.result),n.onerror=()=>e(null),setTimeout(()=>e(null),1500)}catch{e(null)}})}async function Jp(e){const n=await Ns();if(n)try{n.transaction(bn,"readwrite").objectStore(bn).put(JSON.stringify(e),Es)}catch{}}async function e0(){const e=await Ns();return e?new Promise(n=>{try{const r=e.transaction(bn,"readonly").objectStore(bn).get(Es);r.onsuccess=()=>{try{n(r.result?JSON.parse(r.result):null)}catch{n(null)}},r.onerror=()=>n(null)}catch{n(null)}}):null}async function n0(){const e=$f(),n=await e0();if(!n)return{data:e,recovered:!1};if(e.stats.totalGames===0&&e.savedAt===0&&n.stats.totalGames>0){const r=zl(n);return $s(r),{data:r,recovered:!0}}return(n.savedAt??0)>(e.savedAt??0)?{data:zl(n),recovered:!1}:{data:e,recovered:!1}}function Ua(e){const n=zl(e);return $s(n),n}function t0(){try{localStorage.removeItem(js)}catch{}return(async()=>{const e=await Ns();if(e)try{e.transaction(bn,"readwrite").objectStore(bn).delete(Es)}catch{}})(),xr()}function zl(e){const n=xr(),t={...n,...e,version:jf,tenants:{...n.tenants,...e.tenants??{}},settings:{...n.settings,...e.settings??{}},stats:{...n.stats,...e.stats??{}},seenScenes:e.seenScenes??[],unlockedCG:e.unlockedCG??[],recentGames:e.recentGames??[],deviceId:e.deviceId??"",savedAt:e.savedAt??0};for(const r of Object.keys(t.tenants))tn.some(l=>l.id===r)||delete t.tenants[r];return t}function Ef(e){const n={};for(const[t,r]of Object.entries(e.tenants))n[t]=r.clearedStage;return n}function r0(e){const n=e.slice(-20);if(n.length===0)return{goRate:.3,preference:{gwang:.25,yeol:.25,tti:.25,pi:.25},samples:0};const t=n.filter(i=>i.playerWentGo).length/n.length,r={gwang:0,yeol:0,tti:0,pi:0};for(const i of n)r[i.focus]++;const l=n.length;return{goRate:t,preference:{gwang:r.gwang/l,yeol:r.yeol/l,tti:r.tti/l,pi:r.pi/l},samples:n.length}}function l0(e,n,t){const r=e.tenants[n.tenantId];if(!r)return e;const l={...e,tenants:{...e.tenants},recentGames:[...e.recentGames,n].slice(-20),stats:{...e.stats}},i={...r};return l.stats.totalGames++,n.won?(l.stats.wins++,i.wins++,n.stage===i.clearedStage+1&&(i.clearedStage=n.stage,i.affection=Math.min(100,i.affection+10),l.points+=t.reward,n.stage===10&&(i.dating=!0))):(l.stats.losses++,i.losses++),l.stats.bestScore=Math.max(l.stats.bestScore,n.score),l.points=Math.max(0,l.points-t.entryCost),l.tenants[n.tenantId]=i,l}function i0(e,n,t){const r=e.seenScenes.includes(n)?e.seenScenes:[...e.seenScenes,n],l=t&&!e.unlockedCG.includes(t)?[...e.unlockedCG,t]:e.unlockedCG;return{...e,seenScenes:r,unlockedCG:l}}function o0(e){return tn.every(n=>(e.tenants[n.id]?.clearedStage??0)>=10)}const s0={normal:{eye:"open",brow:0,browTilt:0,mouth:"flat",blush:0,sweat:!1,tear:!1},smile:{eye:"arc",brow:-1,browTilt:-1,mouth:"smile",blush:.25,sweat:!1,tear:!1},sulk:{eye:"half",brow:2,browTilt:3,mouth:"pout",blush:.15,sweat:!1,tear:!1},surprise:{eye:"wide",brow:-4,browTilt:-2,mouth:"open",blush:0,sweat:!0,tear:!1},shy:{eye:"closed",brow:-2,browTilt:2,mouth:"small",blush:.9,sweat:!1,tear:!1},serious:{eye:"open",brow:2,browTilt:-3,mouth:"flat",blush:0,sweat:!1,tear:!1},win:{eye:"arc",brow:-2,browTilt:-2,mouth:"wide",blush:.35,sweat:!1,tear:!1},lose:{eye:"half",brow:3,browTilt:4,mouth:"wave",blush:.1,sweat:!0,tear:!0}},Nf={normal:"기본",smile:"웃음",sulk:"삐짐",surprise:"놀람",shy:"부끄러움",serious:"진지",win:"승리",lose:"패배"};function a0(e,n){const i="#2a2320";switch(e.eye){case"closed":return`
        <path d="M79 104 q9 7 18 0" stroke="${i}" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M123 104 q9 7 18 0" stroke="${i}" stroke-width="3" fill="none" stroke-linecap="round"/>`;case"arc":return`
        <path d="M79 107 q9 -9 18 0" stroke="${i}" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M123 107 q9 -9 18 0" stroke="${i}" stroke-width="3" fill="none" stroke-linecap="round"/>`;case"wide":return`
        <ellipse cx="88" cy="104" rx="8" ry="10" fill="#fff"/>
        <ellipse cx="132" cy="104" rx="8" ry="10" fill="#fff"/>
        <circle cx="88" cy="104" r="5.5" fill="${i}"/>
        <circle cx="132" cy="104" r="5.5" fill="${i}"/>
        <circle cx="86" cy="102" r="1.8" fill="#fff"/>
        <circle cx="130" cy="102" r="1.8" fill="#fff"/>`;case"half":return`
        <ellipse cx="88" cy="104" rx="7.5" ry="5" fill="#fff"/>
        <ellipse cx="132" cy="104" rx="7.5" ry="5" fill="#fff"/>
        <circle cx="88" cy="105" r="4.5" fill="${i}"/>
        <circle cx="132" cy="105" r="4.5" fill="${i}"/>
        <path d="M80 101 h16" stroke="${i}" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M124 101 h16" stroke="${i}" stroke-width="2.5" stroke-linecap="round"/>`;default:return`
        <ellipse cx="88" cy="104" rx="7.5" ry="9" fill="#fff"/>
        <ellipse cx="132" cy="104" rx="7.5" ry="9" fill="#fff"/>
        <circle cx="88" cy="104" r="5" fill="${n}"/>
        <circle cx="132" cy="104" r="5" fill="${n}"/>
        <circle cx="88" cy="104" r="2.4" fill="${i}"/>
        <circle cx="132" cy="104" r="2.4" fill="${i}"/>
        <circle cx="86" cy="101" r="1.6" fill="#fff"/>
        <circle cx="130" cy="101" r="1.6" fill="#fff"/>`}}function u0(e){const r="#8a4a46";switch(e.mouth){case"smile":return`<path d="M102 126 q8 7 16 0" stroke="${r}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;case"wide":return`<path d="M100 124 q10 12 20 0 q-10 5 -20 0z" fill="${r}"/>`;case"pout":return`<path d="M103 128 q7 -6 14 0" stroke="${r}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;case"open":return`<ellipse cx="110" cy="127" rx="5" ry="7" fill="${r}"/>`;case"small":return`<path d="M106 126 q4 4 8 0" stroke="${r}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;case"wave":return`<path d="M101 126 q4.5 -5 9 0 q4.5 5 9 0" stroke="${r}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;default:return`<path d="M104 126 h12" stroke="${r}" stroke-width="2.4" stroke-linecap="round"/>`}}function c0(e){const n="#3a2b22",t=88+e.brow,r=e.browTilt;return`
    <path d="M79 ${t+r} q9 -4 18 ${-r*.5}" stroke="${n}" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M141 ${t+r} q-9 -4 -18 ${-r*.5}" stroke="${n}" stroke-width="3" fill="none" stroke-linecap="round"/>`}function f0(e){const n=e.look.hair;switch(e.look.hairStyle){case"long":return`<path d="M62 100 q-6 90 4 150 h108 q10 -60 4 -150z" fill="${n}" opacity="0.95"/>`;case"wave":return`<path d="M62 100 q-10 70 2 120 q10 -12 16 4 q10 -14 18 2 h36 q8 -16 18 -2 q6 -16 16 -4 q12 -50 2 -120z" fill="${n}" opacity="0.95"/>`;case"braid":return`<path d="M64 100 q-6 60 0 100 h92 q6 -40 0 -100z" fill="${n}" opacity="0.95"/>
              <path d="M148 150 q14 30 8 70" stroke="${n}" stroke-width="13" fill="none" stroke-linecap="round"/>`;case"ponytail":return`<path d="M66 100 q-4 40 0 70 h88 q4 -30 0 -70z" fill="${n}" opacity="0.95"/>
              <path d="M150 105 q28 30 16 90" stroke="${n}" stroke-width="15" fill="none" stroke-linecap="round"/>`;case"bun":return`<path d="M68 100 q-2 36 0 60 h84 q2 -24 0 -60z" fill="${n}" opacity="0.95"/>
              <circle cx="110" cy="52" r="17" fill="${n}"/>`;case"bob":return`<path d="M64 98 q-4 46 2 74 h88 q6 -28 2 -74z" fill="${n}" opacity="0.95"/>`;default:return`<path d="M70 96 q-2 30 0 46 h80 q2 -16 0 -46z" fill="${n}" opacity="0.95"/>`}}function d0(e){return`
    <path d="M68 92 q6 -40 42 -40 q36 0 42 40 q-14 -20 -42 -20 q-28 0 -42 20z" fill="${e.look.hair}"/>
    <path d="M74 88 q14 -16 30 -14 q-16 6 -22 22z" fill="#ffffff" opacity="0.14"/>`}function h0(e,n){const t=e.look.outfits[n],r=e.look.accent,l=n===2?'<path d="M96 160 l14 22 l14 -22 l10 6 l-24 30 l-24 -30z" fill="#ffffff" opacity="0.85"/>':n===1?'<path d="M96 160 l14 16 l14 -16 v14 h-28z" fill="#ffffff" opacity="0.7"/>':'<path d="M98 160 h24 v10 h-24z" fill="#ffffff" opacity="0.5"/>',i=n===2?`<path d="M70 250 q40 26 80 0 l16 70 h-112z" fill="${t}"/>`:`<path d="M74 250 h72 l10 70 h-92z" fill="${t}"/>`;return`
    <path d="M84 158 q26 -12 52 0 l16 14 q10 10 8 26 l-6 56 h-88 l-6 -56 q-2 -16 8 -26z" fill="${t}"/>
    ${l}
    ${i}
    <rect x="74" y="246" width="72" height="8" rx="4" fill="${r}"/>
    <path d="M70 176 q-12 34 -8 66" stroke="${t}" stroke-width="18" fill="none" stroke-linecap="round"/>
    <path d="M150 176 q12 34 8 66" stroke="${t}" stroke-width="18" fill="none" stroke-linecap="round"/>
    <circle cx="63" cy="246" r="9" fill="${e.look.skin}"/>
    <circle cx="157" cy="246" r="9" fill="${e.look.skin}"/>`}function p0(e){const{tenant:n,expression:t,outfit:r}=e,l=e.width??220,i=e.height??330,o=s0[t],a=n.look.skin,s=o.blush>0?`<ellipse cx="82" cy="117" rx="11" ry="6" fill="#ff8a9a" opacity="${(o.blush*.55).toFixed(2)}"/>
         <ellipse cx="138" cy="117" rx="11" ry="6" fill="#ff8a9a" opacity="${(o.blush*.55).toFixed(2)}"/>`:"",c=o.sweat?'<path d="M154 78 q7 10 0 15 q-7 -5 0 -15z" fill="#8ecbff" opacity="0.9"/>':"",f=o.tear?'<path d="M88 112 q-2 12 1 18" stroke="#8ecbff" stroke-width="3" fill="none" stroke-linecap="round"/>':"";return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 330" width="${l}" height="${i}" role="img" aria-label="${n.name} ${Nf[t]}">
  ${f0(n)}
  ${h0(n,r)}
  <path d="M100 140 h20 v26 h-20z" fill="${a}"/>
  <ellipse cx="110" cy="104" rx="44" ry="50" fill="${a}"/>
  <ellipse cx="66" cy="108" rx="6" ry="9" fill="${a}"/>
  <ellipse cx="154" cy="108" rx="6" ry="9" fill="${a}"/>
  ${d0(n)}
  ${c0(o)}
  ${a0(o,n.look.accent)}
  ${s}
  ${u0(o)}
  ${c}
  ${f}
</svg>`}function Co(e){return`data:image/svg+xml;utf8,${encodeURIComponent(p0(e))}`}const g0={maru:"하숙집 마루",kitchen:"부엌",hallway:"복도 / 방 앞",rooftop:"옥상",yard:"마당 / 대문",cvs:"동네 편의점 앞",campus:"캠퍼스 벤치",street:"골목길",room:"내 방",annex:"별채",festival:"가을 축제",station:"지하철역 앞"},m0={morning:{sky:["#cfe6f7","#fbe6d0"],ground:"#cbb89a",wall:"#efe3d0",wood:"#c9a16b",light:"#fff3d6",haze:.12},evening:{sky:["#f7c08a","#e0798a"],ground:"#9c8467",wall:"#e2cbb2",wood:"#b58553",light:"#ffd9a0",haze:.18},night:{sky:["#1b2440","#2f3a5c"],ground:"#3b3428",wall:"#4a4237",wood:"#6b4f33",light:"#ffd98a",haze:.34}},H=720,Se=1280;function y0(e){return`
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
  <rect width="${H}" height="${Se}" fill="url(#sky)"/>`}function Ft(e){if(e!=="night")return"";let n="";for(let t=0;t<40;t++){const r=t*137%H+7,l=t*61%380+20,i=t%3*.6+.8;n+=`<circle cx="${r}" cy="${l}" r="${i}" fill="#fff" opacity="${.3+t%5*.12}"/>`}return n}function qr(e,n){let t=`<rect x="0" y="${n}" width="${H}" height="${Se-n}" fill="${e.wood}"/>`;for(let r=0;r<=8;r++){const l=H/8*r;t+=`<path d="M${l} ${n} L${l*.75+90} ${Se}" stroke="#00000022" stroke-width="3"/>`}return t+=`<rect x="0" y="${n}" width="${H}" height="10" fill="#00000033"/>`,t}function v0(e,n,t){switch(e){case"maru":return`
        <rect x="0" y="380" width="${H}" height="360" fill="${n.wall}"/>
        <rect x="60" y="420" width="220" height="280" rx="6" fill="#00000018" stroke="${n.wood}" stroke-width="8"/>
        <rect x="440" y="420" width="220" height="280" rx="6" fill="#00000018" stroke="${n.wood}" stroke-width="8"/>
        <circle cx="360" cy="330" r="46" fill="${n.light}" opacity="0.9"/>
        <rect x="356" y="180" width="8" height="110" fill="#00000055"/>
        <ellipse cx="360" cy="360" rx="300" ry="120" fill="url(#lamp)"/>
        ${qr(n,740)}
        <ellipse cx="250" cy="980" rx="120" ry="42" fill="#b5493f" opacity="0.85"/>
        <ellipse cx="480" cy="1050" rx="120" ry="42" fill="#3f6bb5" opacity="0.85"/>`;case"kitchen":return`
        <rect x="0" y="300" width="${H}" height="480" fill="${n.wall}"/>
        <rect x="40" y="620" width="640" height="140" rx="10" fill="#cfd6d8"/>
        <rect x="90" y="640" width="180" height="90" rx="8" fill="#8d979c"/>
        <circle cx="430" cy="686" r="34" fill="#4a4f52"/>
        <circle cx="530" cy="686" r="34" fill="#4a4f52"/>
        <rect x="120" y="380" width="480" height="18" rx="6" fill="${n.wood}"/>
        <rect x="180" y="398" width="24" height="70" fill="#9aa3a8"/>
        <rect x="260" y="398" width="24" height="90" fill="#9aa3a8"/>
        <rect x="340" y="398" width="24" height="60" fill="#9aa3a8"/>
        ${qr(n,780)}`;case"hallway":return`
        <rect x="0" y="240" width="${H}" height="600" fill="${n.wall}"/>
        <rect x="60" y="360" width="180" height="440" rx="4" fill="${n.wood}"/>
        <rect x="480" y="360" width="180" height="440" rx="4" fill="${n.wood}"/>
        <circle cx="222" cy="600" r="9" fill="#d8c07a"/>
        <circle cx="498" cy="600" r="9" fill="#d8c07a"/>
        <rect x="120" y="400" width="60" height="34" rx="4" fill="#ffffff" opacity="0.7"/>
        <rect x="540" y="400" width="60" height="34" rx="4" fill="#ffffff" opacity="0.7"/>
        <ellipse cx="360" cy="300" rx="240" ry="120" fill="url(#lamp)"/>
        ${qr(n,840)}`;case"rooftop":return`
        ${Ft(t)}
        <rect x="0" y="700" width="${H}" height="${Se-700}" fill="${n.ground}"/>
        <rect x="0" y="660" width="${H}" height="50" fill="${n.wall}"/>
        <rect x="0" y="640" width="${H}" height="24" fill="#8f9aa3"/>
        <path d="M60 640 v-90 M200 640 v-90 M340 640 v-90 M480 640 v-90 M620 640 v-90" stroke="#8f9aa3" stroke-width="7"/>
        <path d="M40 560 h640" stroke="#b9c3ca" stroke-width="6"/>
        <rect x="90" y="520" width="90" height="42" rx="6" fill="#dfe6ea" opacity="0.85"/>
        <rect x="240" y="516" width="70" height="48" rx="6" fill="#e8d7c2" opacity="0.85"/>
        <rect x="520" y="700" width="120" height="180" rx="8" fill="${n.wall}"/>`;case"yard":return`
        ${Ft(t)}
        <rect x="0" y="720" width="${H}" height="${Se-720}" fill="${n.ground}"/>
        <rect x="80" y="380" width="560" height="350" fill="${n.wall}"/>
        <rect x="280" y="470" width="160" height="260" rx="6" fill="${n.wood}"/>
        <circle cx="420" cy="600" r="10" fill="#d8c07a"/>
        <rect x="270" y="430" width="180" height="44" rx="6" fill="#5a4432"/>
        <text x="360" y="462" font-size="26" text-anchor="middle" fill="#f0e2c8" font-family="serif">하숙</text>
        <circle cx="120" cy="640" r="70" fill="#4a6b3f" opacity="0.8"/>
        <rect x="112" y="640" width="16" height="90" fill="#5b4330"/>
        <circle cx="600" cy="620" r="55" fill="#4a6b3f" opacity="0.8"/>
        <rect x="594" y="620" width="14" height="110" fill="#5b4330"/>`;case"cvs":return`
        <rect x="0" y="760" width="${H}" height="${Se-760}" fill="#6b6b6b"/>
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
        <rect x="0" y="700" width="${H}" height="${Se-700}" fill="#5d7a4a"/>
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
        ${Ft(t)}
        <rect x="0" y="780" width="${H}" height="${Se-780}" fill="#55524c"/>
        <rect x="0" y="360" width="280" height="430" fill="${n.wall}"/>
        <rect x="440" y="320" width="280" height="470" fill="${n.wall}" opacity="0.92"/>
        <rect x="60" y="440" width="70" height="90" fill="#cfe4f2" opacity="0.7"/>
        <rect x="170" y="440" width="70" height="90" fill="#cfe4f2" opacity="0.5"/>
        <rect x="500" y="420" width="70" height="90" fill="#cfe4f2" opacity="0.7"/>
        <rect x="352" y="420" width="16" height="360" fill="#3f3f3f"/>
        <circle cx="360" cy="410" r="30" fill="${n.light}" opacity="0.95"/>
        <ellipse cx="360" cy="470" rx="200" ry="150" fill="url(#lamp)"/>`;case"room":return`
        <rect x="0" y="260" width="${H}" height="560" fill="${n.wall}"/>
        <rect x="80" y="330" width="240" height="200" rx="6" fill="#6f8fb0" opacity="0.6" stroke="${n.wood}" stroke-width="10"/>
        <rect x="420" y="360" width="230" height="170" rx="6" fill="${n.wood}"/>
        <rect x="440" y="382" width="190" height="16" fill="#00000022"/>
        <rect x="440" y="416" width="190" height="16" fill="#00000022"/>
        <rect x="440" y="450" width="190" height="16" fill="#00000022"/>
        <rect x="120" y="640" width="280" height="140" rx="10" fill="#d8cdbb"/>
        <rect x="140" y="600" width="120" height="50" rx="10" fill="#f0e8db"/>
        ${qr(n,820)}`;case"annex":return`
        ${Ft(t)}
        <rect x="0" y="760" width="${H}" height="${Se-760}" fill="${n.ground}"/>
        <rect x="140" y="400" width="440" height="370" fill="${n.wall}"/>
        <path d="M110 400 L360 270 L610 400z" fill="#4a3a2c"/>
        <rect x="230" y="500" width="260" height="200" rx="4" fill="${n.light}" opacity="0.5" stroke="${n.wood}" stroke-width="10"/>
        <path d="M360 500 v200 M230 600 h260" stroke="${n.wood}" stroke-width="8"/>
        <ellipse cx="360" cy="600" rx="260" ry="200" fill="url(#lamp)"/>`;case"festival":return`
        ${Ft(t)}
        <rect x="0" y="780" width="${H}" height="${Se-780}" fill="#4a4a48"/>
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
        <rect x="0" y="800" width="${H}" height="${Se-800}" fill="#59575a"/>
        <rect x="0" y="300" width="${H}" height="500" fill="${n.wall}" opacity="0.9"/>
        <rect x="200" y="420" width="320" height="380" rx="8" fill="#2f3a44"/>
        <rect x="230" y="450" width="260" height="60" rx="6" fill="#2f7fbd"/>
        <text x="360" y="494" font-size="34" text-anchor="middle" fill="#ffffff" font-family="sans-serif">역</text>
        <path d="M240 540 h240 M240 600 h240 M240 660 h240" stroke="#59646e" stroke-width="10"/>
        <rect x="60" y="640" width="14" height="160" fill="#3f3f3f"/>
        <circle cx="67" cy="630" r="24" fill="${n.light}" opacity="0.9"/>
        <rect x="646" y="640" width="14" height="160" fill="#3f3f3f"/>
        <circle cx="653" cy="630" r="24" fill="${n.light}" opacity="0.9"/>`}}function w0(e,n){const t=m0[n];return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${H} ${Se}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${g0[e]} ${n}">
  ${y0(t)}
  ${v0(e,t,n)}
  <rect width="${H}" height="${Se}" fill="#0a0d18" opacity="${t.haze}"/>
</svg>`}function k0(e,n){return`data:image/svg+xml;utf8,${encodeURIComponent(w0(e,n))}`}const bf={1:"송학",2:"매조",3:"벚꽃",4:"흑싸리",5:"난초",6:"모란",7:"홍싸리",8:"공산",9:"국화",10:"단풍",11:"오동",12:"비"},x0={1:[{kind:"gwang",name:"송학 광"},{kind:"tti",tti:"hong",name:"송학 홍단"},{kind:"pi",piValue:1,name:"송학 피"},{kind:"pi",piValue:1,name:"송학 피"}],2:[{kind:"yeol",isGodori:!0,name:"매조 휘파람새"},{kind:"tti",tti:"hong",name:"매조 홍단"},{kind:"pi",piValue:1,name:"매조 피"},{kind:"pi",piValue:1,name:"매조 피"}],3:[{kind:"gwang",name:"벚꽃 광"},{kind:"tti",tti:"hong",name:"벚꽃 홍단"},{kind:"pi",piValue:1,name:"벚꽃 피"},{kind:"pi",piValue:1,name:"벚꽃 피"}],4:[{kind:"yeol",isGodori:!0,name:"흑싸리 두견새"},{kind:"tti",tti:"cho",name:"흑싸리 초단"},{kind:"pi",piValue:1,name:"흑싸리 피"},{kind:"pi",piValue:1,name:"흑싸리 피"}],5:[{kind:"yeol",name:"난초 다리"},{kind:"tti",tti:"cho",name:"난초 초단"},{kind:"pi",piValue:1,name:"난초 피"},{kind:"pi",piValue:1,name:"난초 피"}],6:[{kind:"yeol",name:"모란 나비"},{kind:"tti",tti:"cheong",name:"모란 청단"},{kind:"pi",piValue:1,name:"모란 피"},{kind:"pi",piValue:1,name:"모란 피"}],7:[{kind:"yeol",name:"홍싸리 멧돼지"},{kind:"tti",tti:"cho",name:"홍싸리 초단"},{kind:"pi",piValue:1,name:"홍싸리 피"},{kind:"pi",piValue:1,name:"홍싸리 피"}],8:[{kind:"gwang",name:"공산 광"},{kind:"yeol",isGodori:!0,name:"공산 기러기"},{kind:"pi",piValue:1,name:"공산 피"},{kind:"pi",piValue:1,name:"공산 피"}],9:[{kind:"yeol",isGukjin:!0,name:"국화 국진"},{kind:"tti",tti:"cheong",name:"국화 청단"},{kind:"pi",piValue:1,name:"국화 피"},{kind:"pi",piValue:1,name:"국화 피"}],10:[{kind:"yeol",name:"단풍 사슴"},{kind:"tti",tti:"cheong",name:"단풍 청단"},{kind:"pi",piValue:1,name:"단풍 피"},{kind:"pi",piValue:1,name:"단풍 피"}],11:[{kind:"gwang",name:"오동 광"},{kind:"pi",piValue:2,name:"오동 쌍피"},{kind:"pi",piValue:1,name:"오동 피"},{kind:"pi",piValue:1,name:"오동 피"}],12:[{kind:"gwang",isBiGwang:!0,name:"비광"},{kind:"yeol",name:"비 제비"},{kind:"tti",tti:"bi",name:"비띠"},{kind:"pi",piValue:2,name:"비 쌍피"}]};function S0(){const e=[];for(let n=1;n<=12;n++)x0[n].forEach((t,r)=>{e.push({id:`m${n}-${r}`,month:n,kind:t.kind,tti:t.tti,isBiGwang:t.isBiGwang,isGodori:t.isGodori,isGukjin:t.isGukjin,piValue:t.piValue,name:t.name})});return e}function C0(e){const n=[];for(let t=0;t<e.bonusPiCount;t++)n.push({id:`bonus-${t}`,month:0,kind:"pi",piValue:e.bonusPiValue,isBonus:!0,name:`보너스 ${e.bonusPiValue}피`});return n}function _0(e){return[...S0(),...C0(e)]}const Ce=120,_e=180,Va={1:["#1c1c22","#2b2b34"],2:["#2a1f2e","#3d2c42"],3:["#2e2026","#452f38"],4:["#1f2a22","#2d3d31"],5:["#1d2630","#2b3845"],6:["#2b1f2d","#40304a"],7:["#2e211d","#453129"],8:["#1a2230","#283348"],9:["#2d2a1c","#443f28"],10:["#2f2018","#4a3122"],11:["#231f2c","#352f45"],12:["#1b2228","#2a343c"],0:["#2a2420","#3d352e"]},T="#12100e",yn="#d8402f",qe="#e8b53c",Ie="#f4ece0",Kr="#3f8a52",j0="#3f6fb5";function $0(e){const[n,t]=Va[e]??Va[0];return`
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${n}"/>
      <stop offset="100%" stop-color="${t}"/>
    </linearGradient>
    <linearGradient id="paper" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fbf4e6"/>
      <stop offset="100%" stop-color="#efe2ca"/>
    </linearGradient>
  </defs>
  <rect width="${Ce}" height="${_e}" rx="10" fill="url(#paper)"/>
  <rect x="5" y="5" width="${Ce-10}" height="${_e-10}" rx="7" fill="url(#bg)"/>
  <rect x="5" y="5" width="${Ce-10}" height="${_e-10}" rx="7" fill="none" stroke="${T}" stroke-width="3"/>`}function E0(){return`
  <rect x="14" y="14" width="34" height="40" rx="5" fill="${yn}" stroke="${T}" stroke-width="2.5"/>
  <text x="31" y="43" font-size="24" text-anchor="middle" fill="${Ie}" font-family="serif" font-weight="bold">光</text>`}function N0(e){const n=e==="cheong"?j0:e==="cho"?"#c4483a":e==="bi"?"#8a8f96":yn,t=e==="hong"?"홍단":e==="cheong"?"청단":"";return`
  <rect x="20" y="66" width="80" height="48" rx="6" fill="${n}" stroke="${T}" stroke-width="3"/>
  ${t?`<text x="60" y="98" font-size="22" text-anchor="middle" fill="${Ie}" font-family="serif" font-weight="bold">${t}</text>`:`<path d="M32 90 h56" stroke="${Ie}" stroke-width="4" opacity="0.5"/>`}`}function b0(e){switch(e){case 1:return`<path d="M60 150 v-40" stroke="#5b4330" stroke-width="7"/>
              <path d="M60 116 l-26 18 M60 116 l26 18 M60 132 l-20 16 M60 132 l20 16" stroke="${Kr}" stroke-width="7" stroke-linecap="round"/>`;case 2:return`<path d="M44 158 q14 -36 34 -50" stroke="#5b4330" stroke-width="6" fill="none"/>
              <circle cx="80" cy="106" r="9" fill="#f2a0b4" stroke="${T}" stroke-width="2"/>
              <circle cx="62" cy="126" r="8" fill="#f2a0b4" stroke="${T}" stroke-width="2"/>`;case 3:return`<path d="M44 158 q16 -34 36 -46" stroke="#5b4330" stroke-width="6" fill="none"/>
              <circle cx="82" cy="112" r="10" fill="#f8c3d4" stroke="${T}" stroke-width="2"/>
              <circle cx="58" cy="130" r="9" fill="#f8c3d4" stroke="${T}" stroke-width="2"/>
              <circle cx="96" cy="136" r="7" fill="#f8c3d4" stroke="${T}" stroke-width="2"/>`;case 4:return`<path d="M60 158 q-4 -40 0 -54" stroke="#2f4a35" stroke-width="6" fill="none"/>
              <path d="M60 120 q-22 -8 -28 8 M60 132 q22 -8 28 8 M60 144 q-20 -6 -26 8" stroke="#2f4a35" stroke-width="6" stroke-linecap="round"/>`;case 5:return`<path d="M60 158 q-26 -34 -8 -58 M60 158 q26 -34 8 -58" stroke="${Kr}" stroke-width="6" fill="none" stroke-linecap="round"/>
              <circle cx="60" cy="98" r="7" fill="#f0e08a" stroke="${T}" stroke-width="2"/>`;case 6:return`<path d="M60 158 v-26" stroke="${Kr}" stroke-width="6"/>
              <circle cx="60" cy="122" r="17" fill="#c9457a" stroke="${T}" stroke-width="2.5"/>
              <circle cx="60" cy="122" r="7" fill="${qe}"/>`;case 7:return`<path d="M60 158 q-4 -40 0 -54" stroke="#7a3a2c" stroke-width="6" fill="none"/>
              <path d="M60 120 q-22 -8 -28 8 M60 132 q22 -8 28 8" stroke="#a8503a" stroke-width="6" stroke-linecap="round"/>`;case 8:return`<path d="M16 158 q44 -34 88 0z" fill="#4a4030" stroke="${T}" stroke-width="2.5"/>`;case 9:return`<path d="M60 158 v-24" stroke="${Kr}" stroke-width="6"/>
              <circle cx="60" cy="124" r="16" fill="${qe}" stroke="${T}" stroke-width="2.5"/>
              <circle cx="60" cy="124" r="6" fill="#b8801f"/>`;case 10:return`<path d="M60 158 v-22" stroke="#7a3a2c" stroke-width="6"/>
              <path d="M60 136 l-22 -14 l10 22 l-16 2 l28 12 l28 -12 l-16 -2 l10 -22z" fill="#c9553a" stroke="${T}" stroke-width="2.5"/>`;case 11:return`<path d="M60 158 v-32" stroke="#5b4330" stroke-width="6"/>
              <ellipse cx="42" cy="118" rx="18" ry="13" fill="#6f7f4a" stroke="${T}" stroke-width="2.5"/>
              <ellipse cx="80" cy="112" rx="18" ry="13" fill="#6f7f4a" stroke="${T}" stroke-width="2.5"/>`;case 12:return'<path d="M60 96 q-24 30 -18 62 M60 96 q24 30 18 62" stroke="#4a5b3a" stroke-width="5" fill="none"/>';default:return""}}function M0(e){if(e.isGodori)return`<path d="M40 104 q20 -18 40 -4 q10 8 2 18 q-20 14 -42 4z" fill="${T}"/>
            <path d="M80 100 l14 -6 l-10 12z" fill="${qe}"/>
            <circle cx="70" cy="104" r="3" fill="${Ie}"/>
            <path d="M46 118 q14 14 32 8" stroke="${T}" stroke-width="4" fill="none"/>`;switch(e.month){case 5:return`<path d="M18 116 h84" stroke="#8a5a32" stroke-width="9"/>
              <path d="M30 116 v22 M60 116 v22 M90 116 v22" stroke="#8a5a32" stroke-width="6"/>`;case 6:return`<path d="M60 112 q-26 -22 -32 2 q-4 20 32 14z" fill="#e3a23c" stroke="${T}" stroke-width="2.5"/>
              <path d="M60 112 q26 -22 32 2 q4 20 -32 14z" fill="#e3a23c" stroke="${T}" stroke-width="2.5"/>
              <rect x="57" y="100" width="6" height="34" rx="3" fill="${T}"/>`;case 7:return`<ellipse cx="60" cy="116" rx="30" ry="18" fill="#4a3a2c" stroke="${T}" stroke-width="2.5"/>
              <path d="M32 112 l-12 -6 l10 14z" fill="#4a3a2c"/>
              <circle cx="40" cy="110" r="3" fill="${Ie}"/>`;case 9:return`<path d="M38 96 h44 l-6 24 q-16 10 -32 0z" fill="${Ie}" stroke="${T}" stroke-width="3"/>
              <rect x="56" y="120" width="8" height="14" fill="${Ie}" stroke="${T}" stroke-width="2.5"/>
              <rect x="42" y="134" width="36" height="7" rx="3" fill="${Ie}" stroke="${T}" stroke-width="2.5"/>
              <text x="60" y="114" font-size="15" text-anchor="middle" fill="${yn}" font-family="serif" font-weight="bold">壽</text>`;case 10:return`<ellipse cx="62" cy="120" rx="26" ry="16" fill="#a5703c" stroke="${T}" stroke-width="2.5"/>
              <path d="M40 112 q-8 -10 -4 -18" stroke="#a5703c" stroke-width="7" fill="none" stroke-linecap="round"/>
              <path d="M36 96 l-8 -10 M36 96 l8 -10" stroke="#6f4a26" stroke-width="4" stroke-linecap="round"/>
              <circle cx="34" cy="100" r="3" fill="${T}"/>`;case 12:return`<path d="M34 100 q26 -14 52 6 q-22 22 -52 -6z" fill="#2b3340" stroke="${T}" stroke-width="2.5"/>
              <path d="M86 106 l14 10 l-18 0z" fill="#2b3340"/>`;default:return`<circle cx="60" cy="116" r="20" fill="#6f5a3c" stroke="${T}" stroke-width="2.5"/>`}}function P0(e){switch(e.month){case 1:return`<path d="M46 130 q18 -30 38 -18 q8 6 0 14 q-14 12 -34 8z" fill="${Ie}" stroke="${T}" stroke-width="3"/>
              <path d="M84 112 l14 -8 l-10 14z" fill="${yn}"/>
              <path d="M54 138 v16 M66 138 v16" stroke="${T}" stroke-width="4"/>
              <circle cx="78" cy="116" r="3" fill="${T}"/>`;case 3:return`<rect x="22" y="96" width="76" height="30" rx="4" fill="${Ie}" stroke="${T}" stroke-width="3"/>
              <path d="M22 106 h76 M22 116 h76" stroke="${yn}" stroke-width="5"/>
              <path d="M40 126 v16 M80 126 v16" stroke="${T}" stroke-width="4"/>`;case 8:return`<circle cx="60" cy="108" r="26" fill="${yn}" stroke="${T}" stroke-width="3"/>`;case 11:return`<path d="M40 128 q22 -34 46 -16 q10 8 0 18 q-20 12 -46 -2z" fill="${qe}" stroke="${T}" stroke-width="3"/>
              <path d="M86 110 l16 -10 l-10 18z" fill="${yn}"/>
              <path d="M44 132 q-14 12 -6 24 q10 -6 14 -18z" fill="${qe}" stroke="${T}" stroke-width="2.5"/>`;case 12:return`<path d="M26 92 q34 -26 68 0z" fill="${T}"/>
              <path d="M60 92 v46" stroke="${T}" stroke-width="4"/>
              <circle cx="60" cy="142" r="9" fill="#5a4a3a" stroke="${T}" stroke-width="2.5"/>
              <path d="M52 152 h16 v14 h-16z" fill="#5a4a3a" stroke="${T}" stroke-width="2.5"/>`;default:return""}}function Ga(e){const n=(e.piValue??1)>=2;return e.isBonus?`<rect x="22" y="70" width="76" height="60" rx="8" fill="${qe}" stroke="${T}" stroke-width="3"/>
            <text x="60" y="110" font-size="30" text-anchor="middle" fill="${T}" font-family="serif" font-weight="bold">${e.piValue}피</text>`:n?`<rect x="24" y="74" width="72" height="34" rx="6" fill="${yn}" stroke="${T}" stroke-width="3"/>
            <text x="60" y="100" font-size="20" text-anchor="middle" fill="${Ie}" font-family="serif" font-weight="bold">쌍피</text>`:""}function D0(e,n){const t=Ce,r=_e,l=e.month===0?"보너스":`${e.month}월 ${bf[e.month]}`;let i="";return e.isBonus?i=Ga(e):(i=b0(e.month),e.kind==="gwang"?i+=P0(e)+E0():e.kind==="yeol"?i+=M0(e):e.kind==="tti"&&e.tti?i+=N0(e.tti):i+=Ga(e)),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Ce} ${_e}" width="${t}" height="${r}" role="img" aria-label="${e.name}">
  ${$0(e.month)}
  ${i}
  <rect x="5" y="${_e-30}" width="${Ce-10}" height="25" fill="#00000055"/>
  <text x="${Ce/2}" y="${_e-12}" font-size="12" text-anchor="middle" fill="${Ie}" font-family="sans-serif">${l}</text>
</svg>`}function I0(e,n){return`data:image/svg+xml;utf8,${encodeURIComponent(D0(e))}`}function z0(e){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Ce} ${_e}" width="${Ce}" height="${_e}" role="img" aria-label="뒷면">
  <rect width="${Ce}" height="${_e}" rx="10" fill="#7a2b24"/>
  <rect x="7" y="7" width="${Ce-14}" height="${_e-14}" rx="7" fill="#8f342b" stroke="${qe}" stroke-width="2.5"/>
  <circle cx="${Ce/2}" cy="${_e/2}" r="30" fill="none" stroke="${qe}" stroke-width="3"/>
  <circle cx="${Ce/2}" cy="${_e/2}" r="18" fill="none" stroke="${qe}" stroke-width="2"/>
  <path d="M60 60 v60 M30 90 h60" stroke="${qe}" stroke-width="2" opacity="0.6"/>
</svg>`}function T0(e){return`data:image/svg+xml;utf8,${encodeURIComponent(z0())}`}function $n({tenant:e,expression:n="normal",outfit:t=0,className:r,style:l}){const i=Co({tenant:e,expression:n,outfit:t}),o=i;return u.jsx("img",{className:r,style:l,src:o,alt:`${e.name} (${n})`,onError:a=>{const s=a.currentTarget;s.src!==i&&(s.src=i)},draggable:!1})}function Zl({bg:e,time:n}){return u.jsx("div",{className:"bg-layer",style:{backgroundImage:`url("${k0(e,n)}")`}})}function Yr({card:e,small:n,selectable:t,chosen:r,onClick:l}){const i=["card",n?"sm":"",t?"selectable":"",r?"chosen":""].filter(Boolean).join(" ");return u.jsx("img",{className:i,src:I0(e),alt:e.name,onClick:t?l:void 0,draggable:!1})}function L0({small:e}){return u.jsx("img",{className:`card ${e?"sm":""}`,src:T0(),alt:"뒷면",draggable:!1})}function Ha({value:e,max:n,kind:t}){const r=Math.max(0,Math.min(100,e/n*100));return u.jsx("div",{className:`meter ${t??""}`,children:u.jsx("i",{style:{width:`${r}%`}})})}function Wa({on:e,onToggle:n}){return u.jsx("button",{className:`switch ${e?"on":""}`,onClick:n,"aria-pressed":e,children:u.jsx("i",{})})}function B0(){const e=new Date().getHours();return e<11?"morning":e<18?"evening":"night"}const Mf={spring:"봄",summer:"여름",autumn:"가을",winter:"겨울"},A0=[["matchStart","승부 시작"],["go","고"],["stop","스톱"],["ppeok","뻑"],["sseulVictim","쓸 당함"],["win","승리"],["lose","패배"],["affection","호감 이벤트"]];function R0({data:e,onBack:n}){const[t,r]=E.useState("profile"),[l,i]=E.useState(tn[0]),o=e.tenants[l.id],a=(o?.clearedStage??0)>0||(o?.wins??0)>0;return u.jsx("div",{className:"screen",style:{background:"var(--wood-dark)"},children:u.jsxs("div",{className:"layer",children:[u.jsxs("div",{className:"topbar",children:[u.jsx("button",{className:"iconbtn",onClick:n,"aria-label":"뒤로",children:"←"}),u.jsx("h1",{children:"도감"})]}),u.jsxs("div",{className:"tabs",children:[u.jsx("button",{className:t==="profile"?"active":"",onClick:()=>r("profile"),children:"프로필"}),u.jsx("button",{className:t==="cg"?"active":"",onClick:()=>r("cg"),children:"CG"}),u.jsx("button",{className:t==="lines"?"active":"",onClick:()=>r("lines"),children:"대사"})]}),u.jsx("div",{style:{display:"flex",gap:6,overflowX:"auto",padding:"8px 12px"},children:tn.map(s=>u.jsx("button",{className:"btn",style:{padding:"6px 10px",fontSize:12,flex:"0 0 auto",filter:l.id===s.id?"none":"brightness(0.7)"},onClick:()=>i(s),children:s.name},s.id))}),u.jsxs("div",{className:"panel",children:[t==="profile"&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"section",style:{display:"flex",gap:12},children:[u.jsx($n,{tenant:l,expression:"normal",outfit:0,style:{width:96}}),u.jsxs("div",{style:{flex:1,fontSize:13,lineHeight:1.7},children:[u.jsxs("div",{style:{fontSize:18,fontWeight:800},children:[l.name," ",u.jsxs("small",{style:{fontSize:12},children:["“",l.nickname,"”"]})]}),u.jsxs("div",{style:{color:"var(--paper-dim)"},children:[l.age,"세 · ",l.job,u.jsx("br",{}),l.room," · ",Mf[l.season],u.jsx("br",{}),l.personality.join(" / ")]})]})]}),u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"맞고 스타일"}),u.jsx("div",{style:{fontSize:13,lineHeight:1.6},children:l.styleLabel}),u.jsxs("div",{className:"row",children:[u.jsx("span",{children:"전적"}),u.jsxs("span",{children:[o?.wins??0,"승 ",o?.losses??0,"패"]})]}),u.jsxs("div",{className:"row",children:[u.jsx("span",{children:"호감도"}),u.jsxs("span",{children:[o?.affection??0," / 100"]})]}),u.jsxs("div",{className:"row",children:[u.jsx("span",{children:"클리어 단계"}),u.jsxs("span",{children:[o?.clearedStage??0," / 10"]})]})]}),u.jsxs("div",{className:"section",children:[u.jsxs("h3",{children:["표정 ",Oa.length,"종"]}),u.jsx("div",{className:"expr-grid",children:Oa.map(s=>u.jsxs("figure",{children:[u.jsx("img",{src:Co({tenant:l,expression:s,outfit:0}),alt:s}),u.jsx("figcaption",{children:Nf[s]})]},s))})]}),u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"의상 3종"}),u.jsx("div",{className:"expr-grid",style:{gridTemplateColumns:"repeat(3, 1fr)"},children:[0,1,2].map(s=>u.jsxs("figure",{children:[u.jsx("img",{src:Co({tenant:l,expression:"smile",outfit:s}),alt:`의상 ${s}`}),u.jsx("figcaption",{children:["평상복","외출복","특별 이벤트복"][s]})]},s))})]})]}),t==="cg"&&u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"해금 CG"}),u.jsxs("div",{className:"cg-grid",children:[tn.map(s=>{const c=`${s.id}_ending`,f=e.unlockedCG.includes(c);return u.jsx("div",{className:`cg-cell ${f?"unlocked":""}`,children:f?u.jsxs("div",{children:[u.jsx("div",{style:{fontWeight:800,fontSize:13},children:s.name}),u.jsx("div",{style:{fontSize:10,opacity:.75,marginTop:4},children:s.events[9].title})]}):u.jsx("span",{children:"🔒 10단계 클리어"})},s.id)}),u.jsx("div",{className:`cg-cell ${e.unlockedCG.includes("ending_group")?"unlocked":""}`,children:e.unlockedCG.includes("ending_group")?u.jsxs("div",{children:[u.jsx("div",{style:{fontWeight:800,fontSize:13},children:"마루의 단체 사진"}),u.jsx("div",{style:{fontSize:10,opacity:.75,marginTop:4},children:"히든 엔딩"})]}):u.jsx("span",{children:"🔒 전원 10단계"})})]})]}),t==="lines"&&u.jsxs(u.Fragment,{children:[!a&&u.jsxs("div",{className:"empty",children:[l.name,"와(과) 아직 승부한 적이 없습니다.",u.jsx("br",{}),"한 판 이상 치르면 대사가 열립니다."]}),a&&A0.map(([s,c])=>u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:c}),["low","mid","high"].map(f=>{const m=f==="low"||f==="mid"&&(o?.affection??0)>30||f==="high"&&(o?.affection??0)>70;return u.jsxs("div",{style:{marginBottom:8},children:[u.jsx("div",{style:{fontSize:11,color:"var(--lamp-dim)",marginBottom:3},children:{low:"호감 0~30",mid:"호감 31~70",high:"호감 71~100"}[f]}),m?l.lines[s][f].map((h,y)=>u.jsxs("div",{style:{fontSize:12.5,lineHeight:1.6,opacity:.9},children:["· ",h]},y)):u.jsx("div",{style:{fontSize:12,color:"var(--paper-dim)"},children:"🔒 호감도가 더 필요합니다"})]},f)})]},s))]})]})]})})}function O0({data:e,onPick:n,onGallery:t,onSettings:r,onHidden:l,allClearedFlag:i}){const o=Ef(e),a=B0();return u.jsxs("div",{className:"screen",children:[u.jsx(Zl,{bg:"maru",time:a}),u.jsxs("div",{className:"layer",children:[u.jsxs("div",{className:"topbar",children:[u.jsx("h1",{children:"하숙집 마루"}),u.jsxs("span",{className:"points",children:[e.points.toLocaleString()," P"]}),u.jsx("button",{className:"iconbtn",onClick:t,"aria-label":"도감",children:"📖"}),u.jsx("button",{className:"iconbtn",onClick:r,"aria-label":"설정",children:"⚙"})]}),i&&u.jsxs("div",{className:"hint-box",style:{cursor:"pointer"},onClick:l,children:["전원 10단계 클리어! ",u.jsx("strong",{children:"마루의 단체 사진"}),"을 보러 가기 ▸"]}),u.jsx("div",{className:"tenant-list",children:tn.map(s=>{const c=e.tenants[s.id]??{affection:0,clearedStage:0,dating:!1},f=ul(s,o),m=Math.min(10,c.clearedStage+1),h=c.clearedStage>=10,y=e.points>=s.entryCost;return u.jsxs("button",{className:`tenant-card ${f?"":"locked"}`,onClick:()=>f&&n(s),disabled:!f,children:[u.jsx($n,{tenant:s,expression:h?"smile":"normal",outfit:h?2:0}),u.jsxs("div",{className:"tenant-meta",children:[u.jsxs("div",{className:"tenant-name",children:[s.name,u.jsxs("small",{children:[s.nickname," · ",s.age,"세 · ",s.room]}),u.jsx("span",{className:"badge season",children:Mf[s.season]}),c.dating&&u.jsx("span",{className:"badge",children:"연애중"})]}),u.jsx("div",{className:"tenant-style",children:s.styleLabel}),f?u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"meter-row",children:[u.jsx("span",{style:{width:30},children:"호감"}),u.jsx(Ha,{value:c.affection,max:100}),u.jsx("span",{style:{width:28,textAlign:"right"},children:c.affection})]}),u.jsxs("div",{className:"meter-row",children:[u.jsx("span",{style:{width:30},children:"단계"}),u.jsx(Ha,{value:c.clearedStage,max:10,kind:"stage"}),u.jsxs("span",{style:{width:28,textAlign:"right"},children:[c.clearedStage,"/10"]})]}),u.jsx("div",{style:{fontSize:10.5,color:"var(--paper-dim)",marginTop:4},children:h?u.jsx(u.Fragment,{children:"모든 단계 클리어 · 커플 모드로 다시 승부"}):u.jsxs(u.Fragment,{children:[m,"단계 · 참가비"," ",u.jsxs("b",{style:{color:y?"var(--lamp)":"var(--accent)"},children:[s.entryCost,"P"]})," ","· 승리 보상 ",_f(s,m),"P"]})})]}):u.jsxs("div",{style:{fontSize:11,color:"var(--paper-dim)"},children:["🔒 ",Np(s)]})]})]},s.id)})})]})]})}function Pf(e){let n=e>>>0;const t=()=>{n|=0,n=n+1831565813|0;let l=Math.imul(n^n>>>15,1|n);return l=l+Math.imul(l^l>>>7,61|l)^l,((l^l>>>14)>>>0)/4294967296};return{next:t,int:l=>Math.floor(t()*l),pick:l=>l[Math.floor(t()*l.length)],shuffle:l=>{const i=[...l];for(let o=i.length-1;o>0;o--){const a=Math.floor(t()*(o+1));[i[o],i[a]]=[i[a],i[o]]}return i}}}function F0(){return(Date.now()^Math.floor(Math.random()*4294967295))>>>0}function Df(e,n){const t={gwang:[],yeol:[],tti:[],pi:[]};for(const r of e){if(r.isGukjin&&n){t.pi.push(r);continue}switch(r.kind){case"gwang":t.gwang.push(r);break;case"yeol":t.yeol.push(r);break;case"tti":t.tti.push(r);break;case"pi":t.pi.push(r);break}}return t}function If(e,n){return e.reduce((t,r)=>r.isGukjin?t+(n?2:0):t+(r.piValue??1),0)}function U0(e,n){const t=e.length;return t>=5?{score:15,label:"오광"}:t===4?{score:4,label:"사광"}:t===3?e.some(l=>l.isBiGwang)&&n.biGwangPenalty?{score:2,label:"비삼광"}:{score:3,label:"삼광"}:{score:0,label:null}}function V0(e,n){const t=[];let r=0;const l=e.filter(s=>s.tti==="hong").length,i=e.filter(s=>s.tti==="cheong").length,o=e.filter(s=>s.tti==="cho").length;l>=3&&(r+=3,t.push("홍단")),i>=3&&(r+=3,t.push("청단")),o>=3&&(r+=3,t.push("초단"));const a=e.length;return n.ttiScoring==="standard"?a>=5&&(r+=a-4,t.push(`띠 ${a}장`)):a>=5&&(r+=5+(a-5),t.push(`띠 ${a}장`)),{score:r,labels:t}}function G0(e){const n=[];let t=0;e.filter(i=>i.isGodori).length>=3&&(t+=5,n.push("고도리"));const l=e.length;return l>=5&&(t+=l-4,n.push(`열끗 ${l}장`)),{score:t,labels:n}}function H0(e,n){const t=If(e,n);return{score:t>=10?t-9:0,count:t}}function W0(e){const n=new Map;for(const t of e)t.month!==0&&n.set(t.month,(n.get(t.month)??0)+1);for(const[t,r]of n)if(r>=4)return t;return null}function zf(e){const n=new Map;for(const t of e)t.month!==0&&n.set(t.month,(n.get(t.month)??0)+1);return[...n.entries()].filter(([,t])=>t===3).map(([t])=>t)}function Mn(e,n){const t=n.gukjinOption&&e.gukjinUse==="ssangpi",r=Df([...e.captured.gwang,...e.captured.yeol,...e.captured.tti,...e.captured.pi],t),l=U0(r.gwang,n),i=V0(r.tti,n),o=G0(r.yeol),a=H0(r.pi,t),s=l.score+i.score+o.score+a.score;return{gwangScore:l.score,gwangLabel:l.label,ttiScore:i.score,ttiLabels:i.labels,yeolScore:o.score,yeolLabels:o.labels,piScore:a.score,piCount:a.count,base:s,chongtong:null}}function Q0(e,n,t,r=1){const l=e[n],i=e[n===0?1:0],o=Mn(l,t);Mn(i,t);const a=[];let s=0,c=1;const f=l.goCount;f>=1&&(s+=1),f>=2&&(s+=1),f>=1&&a.push(`${f}고`),t.goMultiplierFrom3&&f>=3&&(c*=Math.pow(2,f-2),a.push(`고 배수 x${Math.pow(2,f-2)}`));let m=o.base+s;const h=t.gukjinOption&&i.gukjinUse==="ssangpi",y=If(Df([...i.captured.pi],h).pi,h);return t.piBak&&o.piScore>0&&y<=t.piBakThreshold&&(c*=2,a.push("피박")),t.gwangBak&&o.gwangScore>0&&i.captured.gwang.length===0&&(c*=2,a.push("광박")),t.mengBak&&l.captured.yeol.length>=t.mengBakYeolThreshold&&i.captured.yeol.length===0&&(c*=2,a.push("멍박")),t.heundeulgi&&l.shaken.length>0&&(c*=Math.pow(2,l.shaken.length),a.push(`흔들기 x${Math.pow(2,l.shaken.length)}`)),t.bomb&&l.bombCount>0&&(c*=Math.pow(2,l.bombCount),a.push(`폭탄 x${Math.pow(2,l.bombCount)}`)),t.goBak&&i.goCount>0&&(c*=2,a.push("고박")),r>1&&(c*=r,a.push(`나가리 x${r}`)),m=m*c,{winner:n,breakdown:o,base:o.base,goCount:f,goBonus:s,multiplier:c,reasons:a,total:m}}function q0(e,n,t,r=1){return{winner:e,breakdown:null,base:10,goCount:0,goBonus:0,multiplier:r,reasons:[`총통 (${n}월)`],total:10*r}}function Tf(){return{winner:null,breakdown:null,base:0,goCount:0,goBonus:0,multiplier:1,reasons:["나가리"],total:0}}const Lf={ttiScoring:"standard",biGwangPenalty:!0,goMultiplierFrom3:!0,piBak:!0,gwangBak:!0,mengBak:!0,goBak:!0,heundeulgi:!0,bomb:!0,chongtong:!0,nagariDouble:!0,bonusPiCount:2,bonusPiValue:2,gukjinOption:!0,minScoreToStop:7,mengBakYeolThreshold:7,piBakThreshold:5},Bf=e=>e===0?1:0;function Af(e,n){const t=Bf(n);e.players[t].hand.length>0?e.turn=t:e.players[n].hand.length>0?e.turn=n:e.turn=t,e.phase="awaitPlay",e.turnCtx=null}function Qa(){return{hand:[],captured:{gwang:[],yeol:[],tti:[],pi:[]},goCount:0,shaken:[],bombCount:0,gukjinUse:"yeol",scoreAtLastGo:0}}function qa(e){return{...e,hand:[...e.hand],captured:{gwang:[...e.captured.gwang],yeol:[...e.captured.yeol],tti:[...e.captured.tti],pi:[...e.captured.pi]},shaken:[...e.shaken]}}function Pt(e){return{...e,deck:[...e.deck],field:[...e.field],players:[qa(e.players[0]),qa(e.players[1])],events:[...e.events],ppeokPiles:{...e.ppeokPiles},turnCtx:e.turnCtx?{...e.turnCtx}:null,log:[...e.log]}}function K0(e,n){for(const t of n){if(t.isGukjin){e.captured.yeol.push(t);continue}switch(t.kind){case"gwang":e.captured.gwang.push(t);break;case"yeol":e.captured.yeol.push(t);break;case"tti":e.captured.tti.push(t);break;case"pi":e.captured.pi.push(t);break}}}function Et(e,n,t){const r=e.players[Bf(n)];if(r.captured.pi.length===0){e.log.push(`P${n} ${t} (상대 피 없음)`);return}const i=[...r.captured.pi].sort((o,a)=>(o.piValue??1)-(a.piValue??1))[0];r.captured.pi=r.captured.pi.filter(o=>o.id!==i.id),e.players[n].captured.pi.push(i),e.events.push({type:"steal",player:n,detail:t}),e.log.push(`P${n} ${t} -> 피 1장 상납`)}function Y0(e){const n={...Lf,...e?.rules??{}},t=Pf(e?.seed??12345);let r=t.shuffle(_0(n));const l=(c,f)=>{const m=[],h=[];for(;m.length<c&&r.length>0;){const y=r.shift();if(f&&y.isBonus){h.push(y);continue}m.push(y)}return h.length&&(r=t.shuffle([...r,...h])),m},i=l(10,!1),o=l(10,!1),a=l(8,!0),s={rules:n,deck:r,field:a,players:[Qa(),Qa()],turn:e?.firstPlayer??0,phase:"awaitPlay",events:[],ppeokPiles:{},pendingChoice:null,turnCtx:null,settlement:null,roundMultiplier:e?.roundMultiplier??1,turnCount:0,log:[]};if(s.players[0].hand=i,s.players[1].hand=o,n.chongtong)for(const c of[0,1]){const f=W0(s.players[c].hand);if(f!==null)return s.phase="ended",s.settlement=q0(c,f,n,s.roundMultiplier),s.events.push({type:"chongtong",player:c,detail:`${f}월`}),s.log.push(`P${c} 총통 (${f}월)`),s}return s}function _o(e,n){return e.rules.heundeulgi?zf(e.players[n].hand).filter(t=>!e.players[n].shaken.includes(t)):[]}function Ka(e,n,t){if(!_o(e,n).includes(t))return e;const r=Pt(e);return r.players[n].shaken.push(t),r.events.push({type:"heundeulgi",player:n,detail:`${t}월`}),r.log.push(`P${n} 흔들기 (${t}월)`),r}function bs(e,n){return e.rules.bomb?zf(e.players[n].hand).filter(t=>e.field.some(r=>r.month===t)):[]}function jo(e,n){return n===0?[]:e.field.filter(t=>t.month===n)}function Ya(e,n,t=!1){if(e.phase!=="awaitPlay")return e;const r=Pt(e),l=r.turn,i=r.players[l],o=i.hand.findIndex(m=>m.id===n);if(o<0)return e;const a=i.hand[o];r.events=[];const s={player:l,playedCard:a,bombCards:[],playedWentToField:!1,fromHandCapture:[],flipCard:null,fromFlipCapture:[],ppeok:!1,bonusFlips:[],stage:"hand"};if(r.turnCtx=s,r.turnCount++,t&&r.rules.bomb&&bs(r,l).includes(a.month)){const m=i.hand.filter(y=>y.month===a.month);i.hand=i.hand.filter(y=>y.month!==a.month),s.playedCard=m[0],s.bombCards=m.slice(1),i.bombCount++,r.events.push({type:"bomb",player:l,detail:`${a.month}월`}),r.log.push(`P${l} 폭탄 (${a.month}월)`);const h=r.field.filter(y=>y.month===a.month);return r.field=r.field.filter(y=>y.month!==a.month),s.fromHandCapture=[...m,...h],delete r.ppeokPiles[a.month],Et(r,l,"폭탄"),qt(r)}i.hand.splice(o,1);const c=jo(r,a.month);if(c.length===0)return r.field.push(a),s.playedWentToField=!0,qt(r);if(c.length===1)return r.field=r.field.filter(m=>m.id!==c[0].id),s.fromHandCapture=[a,c[0]],qt(r);if(c.length===2)return r.phase="awaitChoice",r.pendingChoice={played:a,candidates:c,source:"hand"},r;r.field=r.field.filter(m=>m.month!==a.month),s.fromHandCapture=[a,...c];const f=r.ppeokPiles[a.month];return f!==void 0&&(delete r.ppeokPiles[a.month],Et(r,l,f===l?"자뻑 회수":"뻑 회수")),qt(r)}function Xa(e,n){if(e.phase!=="awaitChoice"||!e.pendingChoice||!e.turnCtx)return e;const t=Pt(e),r=t.pendingChoice,l=r.candidates.find(i=>i.id===n)??r.candidates[0];return t.field=t.field.filter(i=>i.id!==l.id),t.pendingChoice=null,t.phase="awaitPlay",r.source==="hand"?(t.turnCtx.fromHandCapture=[r.played,l],qt(t)):(t.turnCtx.fromFlipCapture=[r.played,l],On(t))}function qt(e){const n=e.turnCtx;n.stage="flip";const t=n.player;let r;for(;r=e.deck.shift(),!!r;){if(r.isBonus){n.bonusFlips.push(r);continue}break}if(!r)return n.flipCard=null,On(e);const l=r;if(n.flipCard=l,n.fromHandCapture.length===2&&n.fromHandCapture[0].month===l.month&&n.bombCards.length===0&&e.field.every(a=>a.month!==l.month)){e.field.push(...n.fromHandCapture,l),n.fromHandCapture=[],n.ppeok=!0;const a=e.ppeokPiles[l.month];return e.ppeokPiles[l.month]=t,e.events.push({type:a===t?"jappeok":"ppeok",player:t,detail:`${l.month}월`}),e.log.push(`P${t} ${a===t?"자뻑":"뻑"} (${l.month}월)`),On(e)}if(n.playedWentToField&&n.playedCard&&n.playedCard.month===l.month){const a=e.field.filter(s=>s.month===l.month);return e.field=e.field.filter(s=>s.month!==l.month),n.fromFlipCapture=[l,...a],n.playedWentToField=!1,e.events.push({type:"jjok",player:t,detail:`${l.month}월`}),e.log.push(`P${t} 쪽 (${l.month}월)`),Et(e,t,"쪽"),On(e)}const i=e.field.filter(a=>a.month===l.month);if(i.length===0)return e.field.push(l),On(e);if(i.length===1)return e.field=e.field.filter(a=>a.id!==i[0].id),n.fromFlipCapture=[l,i[0]],On(e);if(i.length===2)return e.phase="awaitChoice",e.pendingChoice={played:l,candidates:i,source:"deck"},e;e.field=e.field.filter(a=>a.month!==l.month),n.fromFlipCapture=[l,...i];const o=e.ppeokPiles[l.month];return o!==void 0&&(delete e.ppeokPiles[l.month],Et(e,t,o===t?"자뻑 회수":"뻑 회수")),On(e)}function On(e){const n=e.turnCtx,t=n.player,r=e.players[t],l=[...n.fromHandCapture,...n.fromFlipCapture,...n.bonusFlips];K0(r,l),n.bombCards.length===0&&n.fromHandCapture.length>=2&&n.fromFlipCapture.length>=2&&(e.events.push({type:"ttadak",player:t}),e.log.push(`P${t} 따닥`),Et(e,t,"따닥")),e.field.length===0&&l.length>0&&(e.events.push({type:"sseul",player:t}),e.log.push(`P${t} 쓸`),Et(e,t,"쓸")),n.stage="done";const o=Mn(r,e.rules),a=o.base>=e.rules.minScoreToStop&&o.base>r.scoreAtLastGo,s=e.players[0].hand.length===0&&e.players[1].hand.length===0;return a?(e.phase="awaitGoStop",e):s||e.deck.length===0?(e.phase="ended",e.settlement=Tf(),e.events.push({type:"nagari",player:t}),e.log.push("나가리"),e):(Af(e,t),e)}function Za(e){if(e.phase!=="awaitGoStop")return e;const n=Pt(e),t=n.turn,r=n.players[t];return r.goCount++,r.scoreAtLastGo=Mn(r,n.rules).base,n.events.push({type:"go",player:t,detail:`${r.goCount}고`}),n.log.push(`P${t} ${r.goCount}고`),n.players[0].hand.length===0&&n.players[1].hand.length===0||n.deck.length===0?(n.phase="ended",n.settlement=Tf(),n.log.push("나가리 (고 후 패 소진)"),n):(Af(n,t),n)}function Ja(e){if(e.phase!=="awaitGoStop")return e;const n=Pt(e),t=n.turn;return n.phase="ended",n.settlement=Q0(n.players,t,n.rules,n.roundMultiplier),n.events.push({type:"stop",player:t}),n.log.push(`P${t} 스톱 -> ${n.settlement.total}점`),n}function eu(e,n,t){const r=Pt(e);return r.players[n].gukjinUse=t,r}function Rf(e,n){return Mn(e.players[n],e.rules).base}const Ms={goRate:.3,preference:{gwang:.25,yeol:.25,tti:.25,pi:.25},samples:0};function X0(e,n){const t=n.weights;if(e.kind==="gwang")return(e.isBiGwang?7:10)*t.gwang;if(e.isGukjin)return 4.5*Math.max(t.yeol,t.pi);if(e.kind==="yeol")return(e.isGodori?5.5*t.godori:3)*t.yeol;if(e.kind==="tti"){const r=e.tti==="hong"?t.hongdan:e.tti==="cheong"?t.cheongdan:e.tti==="cho"?t.chodan:.6;return 3.5*t.tti*r}return(e.piValue??1)*1.2*t.pi}function ke(e,n,t,r){const l=e.players[n].captured;let i=X0(t,r);if(t.kind==="gwang"){const o=l.gwang.length;o===2&&(i+=12),o>=3&&(i+=8)}if(t.isGodori&&l.yeol.filter(a=>a.isGodori).length===2&&(i+=10),t.kind==="tti"&&t.tti&&t.tti!=="bi"){const o=l.tti.filter(a=>a.tti===t.tti).length;o===2?i+=9:o===1&&(i+=2)}return t.kind==="pi"&&l.pi.reduce((a,s)=>a+(s.piValue??1),0)>=8&&(i+=3*(t.piValue??1)),t.kind==="yeol"&&l.yeol.length>=4&&(i+=3),i}function Z0(e,n,t,r){const l=r.inference;return ke(e,n,t,r)*l*.45}function J0(e,n,t,r=Ms){const l=e.turn,i=l===0?1:0,o=e.players[l].hand;if(o.length===0)return{cardId:"",bomb:!1,score:0};if(t.next()<n.mistakeRate)return{cardId:t.pick(o).id,bomb:!1,score:0};const a=n.aggression>.45?bs(e,l):[],s=eg(e,l);let c={cardId:o[0].id,bomb:!1,score:-1/0};for(const f of o){const m=jo(e,f.month);let h=0;if(m.length===0){h-=Z0(e,i,f,n),h-=ke(e,l,f,n)*.25;const y=nu(e,l,f.month);h+=y/Math.max(1,s)*6*n.inference}else if(m.length===1){h+=ke(e,l,f,n)+ke(e,l,m[0],n),h+=ke(e,i,m[0],n)*n.inference*.5;const y=nu(e,l,f.month);h-=y/Math.max(1,s)*9*n.inference}else{const y=[...m].sort((S,w)=>ke(e,l,w,n)-ke(e,l,S,n));h+=ke(e,l,f,n)+ke(e,l,y[0],n),h+=ke(e,i,y[0],n)*n.inference*.5,m.length>=3&&(h+=8)}n.patternLearning>0&&(h-=ng(f,r)*n.patternLearning*4),h>c.score&&(c={cardId:f.id,bomb:!1,score:h})}for(const f of a){const h=jo(e,f).reduce((y,S)=>y+ke(e,l,S,n),0)+10*n.aggression;h>c.score&&(c={cardId:e.players[l].hand.find(S=>S.month===f).id,bomb:!0,score:h})}return c}function eg(e,n){const t=n===0?1:0;return e.deck.length+e.players[t].hand.length}function nu(e,n,t){if(t===0)return 0;const r=e.players[n].hand.filter(l=>l.month===t).length+e.field.filter(l=>l.month===t).length+[...e.players[0].captured.gwang,...e.players[0].captured.yeol,...e.players[0].captured.tti,...e.players[0].captured.pi,...e.players[1].captured.gwang,...e.players[1].captured.yeol,...e.players[1].captured.tti,...e.players[1].captured.pi].filter(l=>l.month===t).length;return Math.max(0,4-r)}function ng(e,n){if(n.samples<3)return 0;const t=n.preference;return e.kind==="gwang"?t.gwang:e.kind==="yeol"?t.yeol:e.kind==="tti"?t.tti:t.pi}function tg(e,n,t){const r=e.pendingChoice?.candidates??[];if(r.length===0)return"";if(t.next()<n.mistakeRate)return t.pick(r).id;const l=e.turn;return[...r].sort((i,o)=>ke(e,l,o,n)-ke(e,l,i,n))[0].id}function rg(e,n,t,r=Ms){const l=e.turn,i=l===0?1:0,o=Rf(e,l),a=Mn(e.players[i],e.rules).base,s=e.players[l].hand.length;if(t.next()<n.mistakeRate)return{action:t.next()<n.greed?"go":"stop",confidence:.2};if(o>=n.stopScore)return{action:"stop",confidence:.9};if(a>=e.rules.minScoreToStop-2)return{action:"stop",confidence:.85};if(s<=1)return{action:"stop",confidence:.8};const c=s*.55*(.6+n.greed),f=a/Math.max(1,e.rules.minScoreToStop)*(1.4-n.inference),m=(r.goRate-.3)*n.patternLearning;let h=0;if(n.inference>.2){const w=e.players[i].captured,I=w.pi.reduce((d,g)=>d+(g.piValue??1),0),p=Mn(e.players[l],e.rules);e.rules.piBak&&I<=e.rules.piBakThreshold+2&&p.piScore>0&&(h+=2.2),e.rules.gwangBak&&w.gwang.length===0&&p.gwangScore>0&&(h+=1.8),h*=n.inference}const y=c+h-f*1.6+m;return{action:y>0?"go":"stop",confidence:Math.min(1,Math.abs(y)/3)}}function lg(e,n){const t=e.turn,r=e.players[t].captured,l=r.yeol.length,i=r.pi.reduce((s,c)=>s+(c.piValue??1),0),o=l>=5?1+(l-5):0,a=i+2>=10?i+2-9:0;return a>o?"ssangpi":o>a?"yeol":n.weights.pi>=n.weights.yeol?"ssangpi":"yeol"}const Me=0,cn=1,ig={jjok:"쪽!",ttadak:"따닥!",ppeok:"뻑!",jappeok:"자뻑!",sseul:"쓸!",bomb:"폭탄!",heundeulgi:"흔들기!",chongtong:"총통!",go:"고!",stop:"스톱!"};function og(e,n){for(const t of e){if(t.type==="ppeok"||t.type==="jappeok")return t.player===n?"sulk":"smile";if(t.type==="sseul"||t.type==="ttadak"||t.type==="jjok")return t.player===n?"smile":"surprise";if(t.type==="bomb"||t.type==="heundeulgi")return t.player===n?"serious":"surprise"}return"normal"}function Bn(e,n){return e[Math.floor(n()*e.length)]??e[0]}function sg(e){const{tenant:n,stage:t,affection:r,losingStreak:l}=e,i=Cf(r),o=E.useMemo(()=>Ep(n,t),[n,t]),a=E.useMemo(()=>e.seed??F0(),[e.seed]),s=E.useRef(Pf(a^2654435769)),c=E.useCallback(()=>s.current.next(),[]),[f,m]=E.useState(()=>Y0({rules:e.rules,seed:a,firstPlayer:Me})),[h,y]=E.useState(()=>Bn(n.lines.matchStart[i],Math.random)),[S,w]=E.useState("normal"),[I,p]=E.useState(null),[d,g]=E.useState(null),[k,j]=E.useState(!1),b=E.useRef(0),v=E.useRef([]),x=e.profile??Ms,D=E.useCallback((_,N)=>{const z=window.setTimeout(_,N);v.current.push(z)},[]);E.useEffect(()=>()=>{v.current.forEach(clearTimeout),v.current=[]},[]);const P=E.useCallback(_=>{b.current++,p({key:b.current,text:_})},[]),$=E.useCallback(_=>{const N=_.events;w(og(N,cn));for(const A of N){const zn=ig[A.type];if(zn){P(zn);break}}const z=N.find(A=>(A.type==="ppeok"||A.type==="jappeok")&&A.player===cn),R=N.find(A=>A.type==="sseul"&&A.player===Me);z?y(Bn(n.lines.ppeok[i],c)):R&&y(Bn(n.lines.sseulVictim[i],c))},[P,c,n,i]);E.useEffect(()=>{if(f.phase==="ended")return;if(!(f.turn===cn)){j(!1);return}if(j(!0),f.phase==="awaitPlay"){D(()=>{let N=f;const z=_o(N,cn);z.length>0&&c()<o.aggression&&(N=Ka(N,cn,z[0]),P("흔들기!")),N=eu(N,cn,lg(N,o));const R=J0(N,o,s.current,x);if(!R.cardId)return;const A=Ya(N,R.cardId,R.bomb);$(A),m(A)},620);return}if(f.phase==="awaitChoice"){D(()=>{const N=Xa(f,tg(f,o,s.current));$(N),m(N)},420);return}f.phase==="awaitGoStop"&&D(()=>{const N=rg(f,o,s.current,x),z=N.action==="go"?n.lines.go[i]:n.lines.stop[i],R=Bn(z,c);g({action:N.action,line:R}),w(N.action==="go"?"serious":"win"),D(()=>{g(null);const A=N.action==="go"?Za(f):Ja(f);P(N.action==="go"?"고!":"스톱!"),m(A)},1600)},500)},[f,o,x,n,i,D,$,P,c]),E.useEffect(()=>{if(f.phase!=="ended"||!f.settlement)return;const _=f.settlement.winner;_===cn?(y(Bn(n.lines.win[i],c)),w("win")):_===Me?(y(Bn(n.lines.lose[i],c)),w("lose")):(y("나가리네. 다시 하자."),w("normal"))},[f.phase,f.settlement,n,i,c]);const he=E.useCallback((_,N=!1)=>{if(f.turn!==Me||f.phase!=="awaitPlay")return;const z=Ya(f,_,N);$(z),m(z)},[f,$]),pe=E.useCallback(_=>{if(f.phase!=="awaitChoice"||f.turn!==Me)return;const N=Xa(f,_);$(N),m(N)},[f,$]),Er=E.useCallback(_=>{f.phase!=="awaitGoStop"||f.turn!==Me||(P(_==="go"?"고!":"스톱!"),m(_==="go"?Za(f):Ja(f)))},[f,P]),Jl=E.useCallback(_=>{m(Ka(f,Me,_)),P("흔들기!")},[f,P]),Dt=E.useCallback(_=>m(eu(f,Me,_)),[f]);return{view:{state:f,line:h,expression:S,shout:I,askGoStop:f.phase==="awaitGoStop"&&f.turn===Me,aiGoStop:d,hint:l>=3?Bn(n.lines.hints,()=>.5):null,myScore:Rf(f,Me),oppScore:Mn(f.players[cn],f.rules).base,busy:k},play:he,choose:pe,goStop:Er,shake:Jl,setGukjin:Dt,shakeable:_o(f,Me),bombable:bs(f,Me)}}const Ut=0,ag=1;function ug(e){const n=[["gwang",e.gwang.length*3],["yeol",e.yeol.length],["tti",e.tti.length],["pi",e.pi.length*.6]];return n.sort((t,r)=>r[1]-t[1]),n[0][0]}function cg({tenant:e,stage:n,affection:t,rules:r,profile:l,losingStreak:i,onFinish:o,onQuit:a}){const{view:s,play:c,choose:f,goStop:m,shake:h,shakeable:y,bombable:S}=sg({tenant:e,stage:n,affection:t,rules:r,profile:l,losingStreak:i}),w=s.state,I=w.players[Ut],p=w.players[ag],[d,g]=E.useState(null),[k,j]=E.useState(!1);E.useEffect(()=>{if(w.phase==="ended"){const $=window.setTimeout(()=>j(!0),900);return()=>window.clearTimeout($)}},[w.phase]);const v=w.turn===Ut&&!s.busy&&w.phase==="awaitPlay",x=w.turn===Ut&&w.phase==="awaitChoice",D=$=>{if(v){if(S.includes($.month)){d===$.id?(c($.id,!0),g(null)):g($.id);return}c($.id),g(null)}},P=E.useMemo(()=>w.settlement?{won:w.settlement.winner===Ut,draw:w.settlement.winner===null,settlement:w.settlement,playerWentGo:I.goCount>0,focus:ug(I.captured),score:w.settlement.winner===Ut?w.settlement.total:0}:null,[w.settlement,I]);return u.jsxs("div",{className:"screen",children:[u.jsx(Zl,{bg:"maru",time:"night"}),u.jsxs("div",{className:"layer match",children:[u.jsxs("div",{className:"opp-panel",children:[u.jsx($n,{tenant:e,expression:s.expression,outfit:n>=10?2:0}),u.jsxs("div",{style:{flex:1},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:4},children:[u.jsx("strong",{style:{fontSize:14},children:e.name}),u.jsxs("span",{className:"score-chip",children:[s.oppScore,"점"]}),p.goCount>0&&u.jsxs("span",{className:"badge",children:[p.goCount,"고"]}),u.jsx("button",{className:"iconbtn",style:{marginLeft:"auto"},onClick:a,"aria-label":"나가기",children:"✕"})]}),u.jsx("div",{className:"opp-line",children:s.line})]})]}),u.jsxs("div",{className:"captured",children:[u.jsx("span",{className:"tag",children:"상대"}),[...p.captured.gwang,...p.captured.yeol,...p.captured.tti,...p.captured.pi].map($=>u.jsx(Yr,{card:$,small:!0},$.id))]}),u.jsxs("div",{className:"field",children:[x&&u.jsx("div",{className:"hint-box",style:{margin:"0 0 6px"},children:"같은 월이 두 장입니다. 가져올 패를 고르세요."}),u.jsx("div",{className:"card-row",children:w.field.map($=>{const he=x&&w.pendingChoice?.candidates.some(pe=>pe.id===$.id);return u.jsx(Yr,{card:$,selectable:!!he,chosen:!1,onClick:()=>he&&f($.id)},$.id)})}),u.jsxs("div",{style:{textAlign:"center",fontSize:11,color:"var(--paper-dim)"},children:["바닥 ",w.field.length,"장 · 남은 패 ",w.deck.length,"장",Object.keys(w.ppeokPiles).length>0&&` · 뻑 ${Object.keys(w.ppeokPiles).map($=>`${$}월`).join(", ")}`]})]}),u.jsxs("div",{className:"captured",children:[u.jsx("span",{className:"tag",children:"내 것"}),[...I.captured.gwang,...I.captured.yeol,...I.captured.tti,...I.captured.pi].map($=>u.jsx(Yr,{card:$,small:!0},$.id))]}),s.hint&&u.jsxs("div",{className:"hint-box",children:[e.name,": “",s.hint,"”"]}),u.jsxs("div",{className:"hand",children:[I.hand.map($=>u.jsx(Yr,{card:$,selectable:v,chosen:d===$.id,onClick:()=>D($)},$.id)),I.hand.length===0&&u.jsx(L0,{small:!0})]}),u.jsxs("div",{className:"action-bar",children:[u.jsxs("div",{style:{flex:1,fontSize:12},children:[u.jsxs("div",{children:["내 점수 ",u.jsx("strong",{style:{color:"var(--lamp)",fontSize:16},children:s.myScore}),I.goCount>0&&u.jsxs("span",{className:"badge",children:[I.goCount,"고"]})]}),u.jsx("div",{style:{color:"var(--paper-dim)",fontSize:11},children:d&&S.includes(I.hand.find($=>$.id===d)?.month??0)?"한 번 더 누르면 폭탄":v?"낼 패를 고르세요":s.busy?`${e.name}의 차례…`:""})]}),y.length>0&&v&&u.jsxs("button",{className:"btn",onClick:()=>h(y[0]),children:["흔들기 ",bf[y[0]]??y[0]]})]}),s.shout&&u.jsx("div",{className:"shout",children:u.jsx("span",{children:s.shout.text})},s.shout.key),s.askGoStop&&u.jsxs("div",{className:"gostop-overlay",children:[u.jsx($n,{tenant:e,expression:"serious",outfit:n>=10?2:0}),u.jsxs("div",{className:"gostop-line",children:[s.myScore,"점입니다. 더 가시겠어요?",u.jsx("br",{}),u.jsx("span",{style:{color:"var(--paper-dim)",fontSize:13},children:"고를 하면 점수가 오르지만, 상대가 이기면 고박으로 두 배를 물어줍니다."})]}),u.jsxs("div",{style:{display:"flex",gap:10},children:[u.jsx("button",{className:"btn primary",onClick:()=>m("go"),children:"고"}),u.jsx("button",{className:"btn",onClick:()=>m("stop"),children:"스톱"})]})]}),s.aiGoStop&&u.jsxs("div",{className:"gostop-overlay",children:[u.jsx($n,{tenant:e,expression:s.aiGoStop.action==="go"?"serious":"win",outfit:n>=10?2:0}),u.jsxs("div",{className:"gostop-line",children:[u.jsx("strong",{style:{color:"var(--lamp)"},children:e.name}),u.jsx("br",{}),s.aiGoStop.line]})]}),k&&P&&u.jsx(fg,{tenant:e,outcome:P,onNext:()=>o(P)})]})]})}function fg({tenant:e,outcome:n,onNext:t}){const r=n.settlement,l=r?.breakdown;return u.jsxs("div",{className:"result",children:[u.jsx("h2",{style:{color:n.won?"var(--lamp)":n.draw?"var(--paper-dim)":"var(--accent)"},children:n.draw?"나가리":n.won?"승리":"패배"}),r&&u.jsxs("div",{className:"total",children:[r.total,"점"]}),l&&u.jsxs("div",{className:"result-rows",children:[l.gwangScore>0&&u.jsxs("div",{children:[u.jsx("span",{children:l.gwangLabel}),u.jsxs("span",{children:[l.gwangScore,"점"]})]}),l.ttiScore>0&&u.jsxs("div",{children:[u.jsx("span",{children:l.ttiLabels.join(" · ")}),u.jsxs("span",{children:[l.ttiScore,"점"]})]}),l.yeolScore>0&&u.jsxs("div",{children:[u.jsx("span",{children:l.yeolLabels.join(" · ")}),u.jsxs("span",{children:[l.yeolScore,"점"]})]}),l.piScore>0&&u.jsxs("div",{children:[u.jsxs("span",{children:["피 ",l.piCount,"장"]}),u.jsxs("span",{children:[l.piScore,"점"]})]}),u.jsxs("div",{children:[u.jsx("span",{children:"기본"}),u.jsxs("span",{children:[r?.base,"점"]})]}),r&&r.goBonus>0&&u.jsxs("div",{children:[u.jsx("span",{children:"고 가산"}),u.jsxs("span",{children:["+",r.goBonus]})]}),r&&r.multiplier>1&&u.jsxs("div",{children:[u.jsx("span",{children:"배수"}),u.jsxs("span",{children:["x",r.multiplier]})]})]}),r&&r.reasons.length>0&&u.jsx("div",{className:"reasons",children:r.reasons.map((i,o)=>u.jsx("span",{children:i},o))}),u.jsx("div",{style:{display:"flex",gap:10,alignItems:"center",marginTop:6},children:u.jsx($n,{tenant:e,expression:n.won?"lose":"win",outfit:0,style:{height:90}})}),u.jsx("button",{className:"btn primary wide",style:{maxWidth:260},onClick:t,children:"계속"})]})}function tu({scene:e,tenant:n,textSpeed:t,onDone:r,onSkip:l}){const[i,o]=E.useState(()=>Qp(e)),[a,s]=E.useState(""),[c,f]=E.useState(!1),m=E.useRef(null),h=i.view;E.useEffect(()=>{if(m.current&&window.clearInterval(m.current),t<=0){s(h.text),f(!1);return}s(""),f(!0);let w=0;return m.current=window.setInterval(()=>{w++,s(h.text.slice(0,w)),w>=h.text.length&&(m.current&&window.clearInterval(m.current),f(!1))},t),()=>{m.current&&window.clearInterval(m.current)}},[h.text,t]);const y=E.useCallback(()=>{if(c){m.current&&window.clearInterval(m.current),s(h.text),f(!1);return}if(!h.choices){if(h.done){r({affectionDelta:h.affectionDelta,pointDelta:h.pointDelta,cg:h.cg});return}o(_s(i))}},[c,h,i,r]);E.useEffect(()=>{h.done&&!h.text&&r({affectionDelta:h.affectionDelta,pointDelta:h.pointDelta,cg:h.cg})},[h,r]);const S=n!==null&&h.speaker===n.name;return u.jsxs("div",{className:"screen",onClick:y,children:[u.jsx(Zl,{bg:h.bg,time:h.time}),u.jsxs("div",{className:"layer",children:[u.jsxs("div",{className:"topbar",onClick:w=>w.stopPropagation(),children:[u.jsx("h1",{children:e.title}),l&&u.jsx("button",{className:"btn ghost",style:{padding:"6px 12px",fontSize:13},onClick:l,children:"건너뛰기"})]}),u.jsxs("div",{className:"vn-stage",children:[n&&!h.cg&&u.jsx($n,{className:"vn-portrait",tenant:n,expression:S?h.expression:"normal",outfit:h.outfit}),h.cg&&u.jsx("div",{className:"vn-cg",children:u.jsx("div",{className:"vn-cg-inner",children:u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:13,opacity:.8,marginBottom:8},children:"엔딩 CG"}),u.jsx("div",{style:{fontSize:17,fontWeight:800},children:e.title}),u.jsx("div",{style:{fontSize:11,opacity:.6,marginTop:10},children:h.cg})]})})})]}),u.jsxs("div",{className:"vn-box",onClick:w=>w.stopPropagation(),children:[h.speaker&&u.jsx("div",{className:"vn-speaker",children:h.speaker}),u.jsx("div",{className:"vn-text",onClick:y,children:a}),h.choices?u.jsx("div",{className:"vn-choices",children:h.choices.map((w,I)=>u.jsx("button",{className:"btn wide",onClick:()=>o(qp(i,I)),children:w.text},I))}):u.jsx("div",{className:"vn-hint",onClick:y,children:h.done?"탭하여 계속 ▸":"탭 ▾"})]})]})]})}const $o="HSG1",Of="HSG0";function ru(e){let n="";for(const t of e)n+=String.fromCharCode(t);return btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function dg(e){const n=e.replace(/-/g,"+").replace(/_/g,"/"),t=n.length%4?"=".repeat(4-n.length%4):"",r=atob(n+t),l=new Uint8Array(r.length);for(let i=0;i<r.length;i++)l[i]=r.charCodeAt(i);return l}function Eo(e){let n=2166136261;for(let t=0;t<e.length;t++)n^=e.charCodeAt(t),n=Math.imul(n,16777619)>>>0;return n.toString(36).toUpperCase().padStart(7,"0")}async function hg(e){try{if(typeof CompressionStream>"u")return null;const n=new CompressionStream("deflate-raw"),t=new TextEncoder().encode(e),r=new Blob([t.buffer]).stream().pipeThrough(n);return new Uint8Array(await new Response(r).arrayBuffer())}catch{return null}}async function pg(e){try{if(typeof DecompressionStream>"u")return null;const n=new DecompressionStream("deflate-raw"),t=new Blob([e.buffer]).stream().pipeThrough(n);return new TextDecoder().decode(await new Response(t).arrayBuffer())}catch{return null}}function Tl(e){const n=Object.values(e.tenants).filter(l=>l.clearedStage>0).length,t=Object.values(e.tenants).reduce((l,i)=>l+i.clearedStage,0),r=Object.values(e.tenants).filter(l=>l.dating).length;return`${n}명 진행 · 총 ${t}단계 · 연애 ${r}명 · ${e.points.toLocaleString()}P · ${e.stats.totalGames}판`}async function gg(e,n){const t={meta:{deviceId:n,createdAt:new Date().toISOString(),summary:Tl(e)},save:e},r=JSON.stringify(t),l=await hg(r);if(l){const o=ru(l);return`${$o}.${o}.${Eo(o)}`}const i=ru(new TextEncoder().encode(r));return`${Of}.${i}.${Eo(i)}`}async function mg(e){const n=e.trim().replace(/\s+/g,"");if(!n)return{ok:!1,reason:"코드가 비어 있습니다."};const t=n.split(".");if(t.length!==3)return{ok:!1,reason:"코드 형식이 올바르지 않습니다. 앞뒤가 잘리지 않았는지 확인해 주세요."};const[r,l,i]=t;if(r!==$o&&r!==Of)return{ok:!1,reason:"하숙생 맞고 백업 코드가 아닙니다."};if(Eo(l)!==i)return{ok:!1,reason:"코드가 손상됐습니다. 복사할 때 일부가 빠졌을 수 있습니다."};let o=null;try{const f=dg(l);o=r===$o?await pg(f):new TextDecoder().decode(f)}catch{return{ok:!1,reason:"코드를 읽을 수 없습니다."}}if(!o)return{ok:!1,reason:"이 브라우저에서는 압축된 코드를 풀 수 없습니다. 최신 브라우저에서 시도해 주세요."};let a;try{a=JSON.parse(o)}catch{return{ok:!1,reason:"코드 내용이 올바르지 않습니다."}}if(!a?.save?.tenants||typeof a.save.points!="number")return{ok:!1,reason:"저장 데이터가 들어 있지 않습니다."};const s=xr(),c={...s,...a.save,tenants:{...s.tenants,...a.save.tenants},settings:{...s.settings,...a.save.settings??{}},stats:{...s.stats,...a.save.stats??{}}};return{ok:!0,backup:{meta:a.meta??{deviceId:"(알 수 없음)",createdAt:"",summary:Tl(c)},save:c}}}function yg(e){const n=new Date().toISOString().slice(0,16).replace(/[:T]/g,""),t=new Blob([e],{type:"text/plain;charset=utf-8"}),r=URL.createObjectURL(t),l=document.createElement("a");l.href=r,l.download=`하숙생맞고-백업-${n}.txt`,document.body.appendChild(l),l.click(),l.remove(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}async function vg(e){try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(e),!0}catch{}try{const n=document.createElement("textarea");n.value=e,n.style.position="fixed",n.style.opacity="0",document.body.appendChild(n),n.select();const t=document.execCommand("copy");return n.remove(),t}catch{return!1}}function wg({data:e,device:n,onRestore:t}){const[r,l]=E.useState(""),[i,o]=E.useState(""),[a,s]=E.useState(null),[c,f]=E.useState(null),[m,h]=E.useState(null),[y,S]=E.useState(!1);E.useEffect(()=>{kp().then(h)},[]);const w=E.useCallback(async()=>{const v=await gg(e,n?.id??"");return l(v),S(!0),v},[e,n]),I=E.useCallback(async()=>{const v=r||await w(),x=await vg(v);s(x?{kind:"ok",text:"백업 코드를 복사했습니다. 메모장이나 메신저에 붙여넣어 보관하세요."}:{kind:"warn",text:"복사가 막혔습니다. 아래 코드를 길게 눌러 직접 복사해 주세요."})},[r,w]),p=E.useCallback(async()=>{const v=r||await w();yg(v),s({kind:"ok",text:"백업 파일을 저장했습니다."})},[r,w]),d=E.useCallback(async()=>{s(null);const v=await mg(i);if(!v.ok){f(null),s({kind:"err",text:v.reason});return}f(v.backup)},[i]),g=E.useCallback(async()=>{if(!c)return;const v=Ua(c.save),x=await wp(c.save.deviceId||void 0),D=Ua({...v,deviceId:x.id});t(D),f(null),o(""),s({kind:"ok",text:"진행도를 복원했습니다."})},[c,t]),k=E.useCallback(v=>{const x=v.target.files?.[0];if(!x)return;const D=new FileReader;D.onload=()=>o(String(D.result??"")),D.readAsText(x),v.target.value=""},[]),j=m&&!m.localStorage&&!m.indexedDb,b=m&&(!m.localStorage||!m.indexedDb)&&!j;return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"이 기기"}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{children:["기기 코드",u.jsx("small",{children:"브라우저마다 따로 발급되는 무작위 번호입니다. 전화번호·기기 일련번호 같은 개인정보는 쓰지도, 보내지도 않습니다."})]}),u.jsx("code",{style:{fontSize:13,color:"var(--lamp)",whiteSpace:"nowrap"},children:n?.shortCode??"…"})]}),u.jsxs("div",{className:"row",children:[u.jsx("span",{children:"실행 환경"}),u.jsx("span",{children:n?.platform??"…"})]}),u.jsxs("div",{className:"row",children:[u.jsx("span",{children:"저장 상태"}),u.jsx("span",{style:{color:j?"var(--accent)":b?"var(--warn)":"var(--ok)"},children:m?j?"저장 불가":b?"일부만 사용 가능":"정상":"확인 중…"})]}),j&&u.jsx("div",{className:"hint-box",style:{margin:"8px 0 0"},children:"이 브라우저에서는 저장이 막혀 있습니다(사생활 보호 모드일 수 있습니다). 지금 진행한 내용은 창을 닫으면 사라집니다. 일반 창에서 열어 주세요."}),n?.ephemeral&&!j&&u.jsx("div",{className:"hint-box",style:{margin:"8px 0 0"},children:"기기 코드를 저장하지 못했습니다. 새로고침하면 새 기기로 인식될 수 있으니 아래에서 백업 코드를 받아 두세요."})]}),u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"진행도 백업"}),u.jsxs("div",{style:{fontSize:12,color:"var(--paper-dim)",lineHeight:1.6,marginBottom:10},children:["지금 진행도: ",u.jsx("b",{style:{color:"var(--paper)"},children:Tl(e)}),u.jsx("br",{}),"백업 코드 하나면 브라우저 데이터를 지웠거나 폰을 바꿔도 그대로 이어서 할 수 있습니다.",u.jsx("br",{}),u.jsx("b",{style:{color:"var(--warn)"},children:"아이폰 사파리"}),"는 홈 화면에 추가하지 않은 사이트의 저장 데이터를 일정 기간 뒤 지웁니다. 웹으로 오래 즐기실 거면 홈 화면에 추가하거나 백업 코드를 받아 두세요."]}),u.jsxs("div",{style:{display:"flex",gap:8},children:[u.jsx("button",{className:"btn primary",style:{flex:1,fontSize:13},onClick:I,children:"코드 복사"}),u.jsx("button",{className:"btn",style:{flex:1,fontSize:13},onClick:p,children:"파일로 저장"})]}),y&&r&&u.jsx("textarea",{readOnly:!0,value:r,onFocus:v=>v.currentTarget.select(),style:{width:"100%",height:76,marginTop:8,fontSize:10.5,lineHeight:1.4,background:"rgba(0,0,0,0.45)",color:"var(--paper-dim)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:8,padding:8,fontFamily:"monospace",userSelect:"text",WebkitUserSelect:"text"}})]}),u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"진행도 복원"}),u.jsx("div",{style:{fontSize:12,color:"var(--paper-dim)",lineHeight:1.6,marginBottom:8},children:"다른 기기에서 받은 백업 코드를 붙여넣으세요. 현재 진행도는 덮어써집니다."}),u.jsx("textarea",{value:i,onChange:v=>o(v.target.value),placeholder:"HSG1.로 시작하는 백업 코드를 붙여넣으세요",style:{width:"100%",height:68,fontSize:11,background:"rgba(0,0,0,0.45)",color:"var(--paper)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:8,padding:8,fontFamily:"monospace",userSelect:"text",WebkitUserSelect:"text"}}),u.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[u.jsx("button",{className:"btn",style:{flex:1,fontSize:13},onClick:d,disabled:!i.trim(),children:"코드 확인"}),u.jsxs("label",{className:"btn",style:{flex:1,fontSize:13,textAlign:"center"},children:["파일 선택",u.jsx("input",{type:"file",accept:".txt,text/plain",onChange:k,style:{display:"none"}})]})]}),c&&u.jsxs("div",{style:{marginTop:10,padding:10,borderRadius:10,background:"rgba(63,138,82,0.15)",border:"1px solid rgba(63,138,82,0.5)",fontSize:12,lineHeight:1.6},children:[u.jsx("b",{style:{color:"var(--ok)"},children:"읽을 수 있는 백업입니다."}),u.jsx("br",{}),"불러올 내용: ",c.meta.summary,u.jsx("br",{}),c.meta.createdAt&&u.jsxs("span",{style:{color:"var(--paper-dim)"},children:["만든 날짜: ",new Date(c.meta.createdAt).toLocaleString("ko-KR")]}),u.jsxs("div",{style:{marginTop:8,color:"var(--warn)"},children:["지금 진행도(",Tl(e),")는 사라집니다."]}),u.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[u.jsx("button",{className:"btn primary",style:{flex:1,fontSize:13},onClick:g,children:"덮어쓰고 복원"}),u.jsx("button",{className:"btn ghost",style:{flex:1,fontSize:13},onClick:()=>f(null),children:"취소"})]})]}),a&&u.jsx("div",{style:{marginTop:10,fontSize:12,lineHeight:1.5,color:a.kind==="ok"?"var(--ok)":a.kind==="warn"?"var(--warn)":"var(--accent)"},children:a.text})]})]})}const kg=[{key:"biGwangPenalty",label:"비삼광 2점",desc:"3광에 비광이 끼면 3점 대신 2점"},{key:"goMultiplierFrom3",label:"3고부터 배수",desc:"고 1·2회는 가산, 3회부터 2배씩"},{key:"piBak",label:"피박",desc:"상대 피가 기준 이하일 때 2배"},{key:"gwangBak",label:"광박",desc:"상대 광이 없을 때 2배"},{key:"mengBak",label:"멍박",desc:"상대 열끗이 없을 때 2배"},{key:"goBak",label:"고박",desc:"고를 외친 쪽이 지면 2배 부담"},{key:"heundeulgi",label:"흔들기",desc:"같은 월 3장 선언 시 2배"},{key:"bomb",label:"폭탄",desc:"같은 월 3장을 한 번에 투하"},{key:"chongtong",label:"총통",desc:"같은 월 4장이면 즉시 승리"},{key:"nagariDouble",label:"나가리 2배",desc:"나가리 다음 판은 2배"},{key:"gukjinOption",label:"국진 선택",desc:"국진을 열끗/쌍피 중 골라 쓴다"}];function xg({data:e,device:n,onChange:t,onReset:r,onBack:l}){const i={...Lf,...e.settings.rules},o=(s,c)=>{t({...e,settings:{...e.settings,rules:{...e.settings.rules,[s]:c}}})},a=(s,c)=>{t({...e,settings:{...e.settings,[s]:c}})};return u.jsx("div",{className:"screen",style:{background:"var(--wood-dark)"},children:u.jsxs("div",{className:"layer",children:[u.jsxs("div",{className:"topbar",children:[u.jsx("button",{className:"iconbtn",onClick:l,"aria-label":"뒤로",children:"←"}),u.jsx("h1",{children:"설정"})]}),u.jsxs("div",{className:"panel",children:[u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"점수 해석"}),u.jsx("div",{className:"row",children:u.jsxs("div",{children:["띠 점수 방식",u.jsx("small",{children:"기획서 표기(5장 5점)와 한국 온라인 맞고 표준(5장 1점)이 달라 둘 다 넣었습니다. 홍/청/초단 3점은 두 방식 모두 동일합니다."})]})}),u.jsxs("div",{style:{display:"flex",gap:8,marginTop:6},children:[u.jsx("button",{className:`btn ${i.ttiScoring==="standard"?"primary":"ghost"}`,style:{flex:1,fontSize:13},onClick:()=>o("ttiScoring","standard"),children:"표준 (5장 1점)"}),u.jsx("button",{className:`btn ${i.ttiScoring==="specSheet"?"primary":"ghost"}`,style:{flex:1,fontSize:13},onClick:()=>o("ttiScoring","specSheet"),children:"기획서 (5장 5점)"})]})]}),u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"규칙 옵션"}),kg.map(s=>u.jsxs("div",{className:"row",children:[u.jsxs("div",{children:[s.label,u.jsx("small",{children:s.desc})]}),u.jsx(Wa,{on:i[s.key],onToggle:()=>o(s.key,!i[s.key])})]},s.key)),u.jsxs("div",{className:"row",children:[u.jsxs("div",{children:["보너스 쌍피",u.jsx("small",{children:"덱에 섞는 보너스패 장수 (0~3)"})]}),u.jsx("div",{style:{display:"flex",gap:4},children:[0,1,2,3].map(s=>u.jsx("button",{className:`btn ${i.bonusPiCount===s?"primary":"ghost"}`,style:{padding:"6px 11px",fontSize:13},onClick:()=>o("bonusPiCount",s),children:s},s))})]}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{children:["스톱 최소 점수",u.jsx("small",{children:"이 점수 이상이어야 고/스톱을 고를 수 있습니다"})]}),u.jsx("div",{style:{display:"flex",gap:4},children:[3,5,7].map(s=>u.jsx("button",{className:`btn ${i.minScoreToStop===s?"primary":"ghost"}`,style:{padding:"6px 11px",fontSize:13},onClick:()=>o("minScoreToStop",s),children:s},s))})]})]}),u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"진행"}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{children:["전원 공략 가능 모드",u.jsx("small",{children:"끄면 한 명과 연애를 시작한 뒤 다른 하숙생의 이벤트는 친구 루트로 분기합니다. 켜면 전원 공략 가능합니다."})]}),u.jsx(Wa,{on:e.settings.allRoutes,onToggle:()=>a("allRoutes",!e.settings.allRoutes)})]}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{children:["글자 속도",u.jsx("small",{children:"0에 가까울수록 빠릅니다"})]}),u.jsx("div",{style:{display:"flex",gap:4},children:[[0,"즉시"],[15,"빠름"],[25,"보통"],[45,"느림"]].map(([s,c])=>u.jsx("button",{className:`btn ${e.settings.textSpeed===s?"primary":"ghost"}`,style:{padding:"6px 9px",fontSize:12},onClick:()=>a("textSpeed",s),children:c},s))})]})]}),u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"기록"}),u.jsxs("div",{className:"row",children:[u.jsx("span",{children:"총 대국"}),u.jsxs("span",{children:[e.stats.totalGames,"판"]})]}),u.jsxs("div",{className:"row",children:[u.jsx("span",{children:"전적"}),u.jsxs("span",{children:[e.stats.wins,"승 ",e.stats.losses,"패"]})]}),u.jsxs("div",{className:"row",children:[u.jsx("span",{children:"최고 점수"}),u.jsxs("span",{children:[e.stats.bestScore,"점"]})]}),u.jsxs("div",{className:"row",children:[u.jsx("span",{children:"보유 포인트"}),u.jsxs("span",{children:[e.points.toLocaleString()," P"]})]})]}),u.jsx(wg,{data:e,device:n,onRestore:t}),u.jsxs("div",{className:"section",children:[u.jsx("h3",{children:"데이터"}),u.jsxs("div",{className:"row",children:[u.jsxs("div",{children:["처음부터 다시",u.jsx("small",{children:"진행도·호감도·포인트·도감이 모두 지워집니다"})]}),u.jsx("button",{className:"btn",style:{background:"linear-gradient(180deg,#9c3c2c,#6f2a1e)"},onClick:()=>{confirm("정말 모든 진행을 지우시겠습니까? 되돌릴 수 없습니다.")&&r()},children:"초기화"})]})]}),u.jsx("div",{style:{textAlign:"center",fontSize:11,color:"var(--paper-dim)",padding:"8px 0 24px"},children:"하숙생 맞고 · 판돈은 하숙집 포인트이며 현금 환전 기능이 없습니다."})]})]})})}function Sg(e,n,t){const r=Cf(n),l=e.lines.matchStart[r],i=l[Math.floor(Math.random()*l.length)];return{id:`__prematch_${e.id}_${t}`,title:`${e.name} · ${t}단계`,tenantId:e.id,steps:[{kind:"bg",bg:"maru",time:"night"},{kind:"narrate",text:`마루에 방석 두 개가 깔렸다. ${t}번째 판이다.`},{kind:"say",speaker:e.name,expression:"smile",text:i},{kind:"end"}],labels:{}}}function Cg(){const[e,n]=E.useState(()=>$f()),[t,r]=E.useState(null),[l,i]=E.useState(!1),[o,a]=E.useState(!1),[s,c]=E.useState({name:"title"}),[f,m]=E.useState({}),[h,y]=E.useState(null);E.useEffect(()=>{let v=!0;return(async()=>{const[x,D]=await Promise.all([vp(),n0()]);v&&(r(x),i(D.recovered),n(P=>{const $=D.data.savedAt>=P.savedAt?D.data:P;return $.deviceId===x.id?$:{...$,deviceId:x.id}}),a(!0))})(),()=>{v=!1}},[]),E.useEffect(()=>{o&&$s(e)},[e,o]),E.useEffect(()=>{},[]);const S=E.useMemo(()=>r0(e.recentGames),[e.recentGames]),w=E.useMemo(()=>o0(e),[e]),I=E.useCallback(()=>c({name:"home"}),[]),p=E.useCallback(v=>{const x=Ef(v),D=[{id:"prologue",when:!0},{id:"season_summer",when:ul(Qt("sua"),x)},{id:"season_autumn",when:ul(Qt("yerin"),x)},{id:"season_winter",when:ul(Qt("yoon"),x)}];for(const P of D){if(!P.when||v.seenScenes.includes(P.id))continue;const $=Ei(P.id);if($)return $}return null},[]),d=E.useCallback(v=>{const x=p(v);c(x?{name:"novel",scene:x,tenant:x.id==="prologue"?Qt("eunseo"):null,after:"home"}:{name:"home"})},[p]),g=E.useCallback(()=>d(e),[d,e]),k=E.useCallback(v=>{const x=e.tenants[v.id];if(e.points<v.entryCost){alert(`포인트가 모자랍니다. 참가비 ${v.entryCost}P 가 필요합니다.`);return}const D=Math.min(10,(x?.clearedStage??0)+1);c({name:"preMatch",tenant:v,stage:D})},[e]),j=E.useCallback((v,x,D)=>{const P=D.won?_f(v,x):0,$=l0(e,{tenantId:v.id,stage:x,won:D.won,playerWentGo:D.playerWentGo,focus:D.focus,score:D.score},{reward:P,entryCost:v.entryCost});n($),m(pe=>({...pe,[v.id]:D.won?0:(pe[v.id]??0)+1}));const he=$.tenants[v.id].clearedStage;D.won&&he===x?y({tenant:v,stage:x}):I()},[e,I]);E.useEffect(()=>{if(!h)return;const{tenant:v,stage:x}=h,D=v.events.find($=>$.stage===x),P=D?Ei(D.scriptId):null;if(y(null),!P){I();return}c({name:"novel",scene:P,tenant:v,after:"home"})},[h,I]);const b=E.useCallback((v,x,D,P)=>{let $=i0(e,v.id,D.cg);if($={...$,points:Math.max(0,$.points+D.pointDelta)},x&&D.affectionDelta!==0&&$.tenants[x.id]&&($={...$,tenants:{...$.tenants,[x.id]:{...$.tenants[x.id],affection:Math.max(0,Math.min(100,$.tenants[x.id].affection+D.affectionDelta))}}}),n($),P==="match"&&x){const he=$.tenants[x.id],pe=Math.min(10,(he?.clearedStage??0)+1);c({name:"match",tenant:x,stage:pe})}else d($)},[e,d]);if(s.name==="title")return u.jsx("div",{className:"app",children:u.jsxs("div",{className:"screen title-screen",children:[u.jsx(Zl,{bg:"maru",time:"night"}),u.jsxs("div",{className:"layer title-screen",style:{justifyContent:"center"},children:[u.jsx("div",{className:"title-logo",children:"하숙생 맞고"}),u.jsx("div",{className:"title-sub",children:"밤마다 마루에서, 열 번의 승부"}),u.jsxs("div",{className:"title-menu",children:[u.jsx("button",{className:"btn primary wide",onClick:g,children:e.stats.totalGames>0?"이어하기":"시작하기"}),u.jsx("button",{className:"btn wide",onClick:()=>c({name:"gallery"}),children:"도감"}),u.jsx("button",{className:"btn wide",onClick:()=>c({name:"settings"}),children:"설정"})]}),u.jsx("div",{style:{marginTop:18,display:"flex",gap:2},children:tn.slice(0,5).map(v=>u.jsx($n,{tenant:v,expression:"smile",style:{width:52,opacity:.85}},v.id))})]})]})});if(s.name==="novel")return u.jsx("div",{className:"app",children:u.jsx(tu,{scene:s.scene,tenant:s.tenant,textSpeed:e.settings.textSpeed,onDone:v=>b(s.scene,s.tenant,v,s.after),onSkip:()=>b(s.scene,s.tenant,{affectionDelta:0,pointDelta:0,cg:null},s.after)},s.scene.id)});if(s.name==="preMatch"){const v=e.tenants[s.tenant.id],x=Sg(s.tenant,v?.affection??0,s.stage);return u.jsx("div",{className:"app",children:u.jsx(tu,{scene:x,tenant:s.tenant,textSpeed:e.settings.textSpeed,onDone:()=>c({name:"match",tenant:s.tenant,stage:s.stage}),onSkip:()=>c({name:"match",tenant:s.tenant,stage:s.stage})},x.id)})}if(s.name==="match"){const v=e.tenants[s.tenant.id];return u.jsx("div",{className:"app",children:u.jsx(cg,{tenant:s.tenant,stage:s.stage,affection:v?.affection??0,rules:e.settings.rules,profile:S,losingStreak:f[s.tenant.id]??0,onFinish:x=>j(s.tenant,s.stage,x),onQuit:I},`${s.tenant.id}-${s.stage}-${e.stats.totalGames}`)})}return s.name==="gallery"?u.jsx("div",{className:"app",children:u.jsx(R0,{data:e,onBack:()=>c(e.stats.totalGames>0?{name:"home"}:{name:"title"})})}):s.name==="settings"?u.jsx("div",{className:"app",children:u.jsx(xg,{data:e,device:t,onChange:n,onReset:()=>{n(t0()),c({name:"title"})},onBack:()=>c(e.stats.totalGames>0?{name:"home"}:{name:"title"})})}):u.jsxs("div",{className:"app",children:[l&&u.jsxs("div",{className:"hint-box",style:{position:"absolute",top:60,left:12,right:12,zIndex:20,cursor:"pointer"},onClick:()=>i(!1),children:["브라우저 저장소가 비워져 있어 ",u.jsx("b",{children:"백업 사본에서 진행도를 되살렸습니다."})," 설정 → 진행도 백업에서 코드를 받아 두시면 더 안전합니다. (탭하여 닫기)"]}),u.jsx(O0,{data:e,onPick:k,onGallery:()=>c({name:"gallery"}),onSettings:()=>c({name:"settings"}),allClearedFlag:w,onHidden:()=>{const v=Ei("hidden_ending");v&&c({name:"novel",scene:v,tenant:null,after:"home"})}})]})}function _g(){const e=()=>{const n=window.visualViewport?.height??window.innerHeight;document.documentElement.style.setProperty("--app-h",`${n}px`)};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",()=>setTimeout(e,200),{passive:!0}),window.visualViewport?.addEventListener("resize",e,{passive:!0}),window.visualViewport?.addEventListener("scroll",e,{passive:!0})}function jg(){let e=0;document.addEventListener("touchstart",n=>{e=n.touches[0]?.clientY??0},{passive:!0}),document.addEventListener("touchmove",n=>{if(n.touches.length>1||(n.touches[0]?.clientY??0)-e<=0)return;let l=n.target;for(;l&&l!==document.body;){const i=getComputedStyle(l);if(/(auto|scroll)/.test(i.overflowY)&&l.scrollHeight>l.clientHeight&&l.scrollTop>0)return;l=l.parentElement}n.cancelable&&n.preventDefault()},{passive:!1})}function $g(){let e=0;document.addEventListener("touchend",n=>{const t=Date.now();t-e<320&&n.cancelable&&n.preventDefault(),e=t},{passive:!1}),document.addEventListener("gesturestart",n=>n.preventDefault())}function Eg(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{const e="./";navigator.serviceWorker.register(`${e}sw.js`,{scope:e}).catch(()=>{})})}function Ng(){const e=typeof navigator<"u"?navigator.userAgent:"",n=typeof window<"u"&&window.matchMedia?.("(display-mode: standalone)").matches||navigator.standalone===!0;return{inAppBrowser:/KAKAOTALK|Line\/|FBAN|FBAV|Instagram|NAVER|DaumApps/i.test(e),standalone:!!n,isIOS:/iPhone|iPad|iPod/i.test(e),isAndroid:/Android/i.test(e),landscape:typeof window<"u"&&window.innerWidth>window.innerHeight}}function bg(){_g(),jg(),$g(),Eg();const e=Ng();return document.documentElement.dataset.inapp=String(e.inAppBrowser),document.documentElement.dataset.standalone=String(e.standalone),e}bg();yf(document.getElementById("root")).render(u.jsx(rd.StrictMode,{children:u.jsx(Cg,{})}));
