(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function pE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var S_={exports:{}},iu={},M_={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ba=Symbol.for("react.element"),mE=Symbol.for("react.portal"),gE=Symbol.for("react.fragment"),vE=Symbol.for("react.strict_mode"),_E=Symbol.for("react.profiler"),xE=Symbol.for("react.provider"),yE=Symbol.for("react.context"),SE=Symbol.for("react.forward_ref"),ME=Symbol.for("react.suspense"),EE=Symbol.for("react.memo"),TE=Symbol.for("react.lazy"),Qm=Symbol.iterator;function wE(t){return t===null||typeof t!="object"?null:(t=Qm&&t[Qm]||t["@@iterator"],typeof t=="function"?t:null)}var E_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T_=Object.assign,w_={};function yo(t,e,n){this.props=t,this.context=e,this.refs=w_,this.updater=n||E_}yo.prototype.isReactComponent={};yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function A_(){}A_.prototype=yo.prototype;function fp(t,e,n){this.props=t,this.context=e,this.refs=w_,this.updater=n||E_}var dp=fp.prototype=new A_;dp.constructor=fp;T_(dp,yo.prototype);dp.isPureReactComponent=!0;var Jm=Array.isArray,b_=Object.prototype.hasOwnProperty,hp={current:null},C_={key:!0,ref:!0,__self:!0,__source:!0};function R_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)b_.call(e,i)&&!C_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ba,type:t,key:s,ref:o,props:r,_owner:hp.current}}function AE(t,e){return{$$typeof:Ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ba}function bE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var eg=/\/+/g;function Pu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bE(""+t.key):e.toString(36)}function Xl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ba:case mE:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Pu(o,0):i,Jm(r)?(n="",t!=null&&(n=t.replace(eg,"$&/")+"/"),Xl(r,e,n,"",function(c){return c})):r!=null&&(pp(r)&&(r=AE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(eg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Jm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Pu(s,a);o+=Xl(s,e,n,l,r)}else if(l=wE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Pu(s,a++),o+=Xl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function el(t,e,n){if(t==null)return t;var i=[],r=0;return Xl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function CE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var hn={current:null},Yl={transition:null},RE={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:Yl,ReactCurrentOwner:hp};function P_(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:el,forEach:function(t,e,n){el(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return el(t,function(){e++}),e},toArray:function(t){return el(t,function(e){return e})||[]},only:function(t){if(!pp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=yo;We.Fragment=gE;We.Profiler=_E;We.PureComponent=fp;We.StrictMode=vE;We.Suspense=ME;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RE;We.act=P_;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=T_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)b_.call(e,l)&&!C_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ba,type:t.type,key:r,ref:s,props:i,_owner:o}};We.createContext=function(t){return t={$$typeof:yE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xE,_context:t},t.Consumer=t};We.createElement=R_;We.createFactory=function(t){var e=R_.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:SE,render:t}};We.isValidElement=pp;We.lazy=function(t){return{$$typeof:TE,_payload:{_status:-1,_result:t},_init:CE}};We.memo=function(t,e){return{$$typeof:EE,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=Yl.transition;Yl.transition={};try{t()}finally{Yl.transition=e}};We.unstable_act=P_;We.useCallback=function(t,e){return hn.current.useCallback(t,e)};We.useContext=function(t){return hn.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return hn.current.useDeferredValue(t)};We.useEffect=function(t,e){return hn.current.useEffect(t,e)};We.useId=function(){return hn.current.useId()};We.useImperativeHandle=function(t,e,n){return hn.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return hn.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return hn.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return hn.current.useMemo(t,e)};We.useReducer=function(t,e,n){return hn.current.useReducer(t,e,n)};We.useRef=function(t){return hn.current.useRef(t)};We.useState=function(t){return hn.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return hn.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return hn.current.useTransition()};We.version="18.3.1";M_.exports=We;var de=M_.exports;const PE=pE(de);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DE=de,LE=Symbol.for("react.element"),IE=Symbol.for("react.fragment"),NE=Object.prototype.hasOwnProperty,UE=DE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,FE={key:!0,ref:!0,__self:!0,__source:!0};function D_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)NE.call(e,i)&&!FE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:LE,type:t,key:s,ref:o,props:r,_owner:UE.current}}iu.Fragment=IE;iu.jsx=D_;iu.jsxs=D_;S_.exports=iu;var V=S_.exports,td={},L_={exports:{}},Ln={},I_={exports:{}},N_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,Y){var J=N.length;N.push(Y);e:for(;0<J;){var ee=J-1>>>1,re=N[ee];if(0<r(re,Y))N[ee]=Y,N[J]=re,J=ee;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var Y=N[0],J=N.pop();if(J!==Y){N[0]=J;e:for(var ee=0,re=N.length,Le=re>>>1;ee<Le;){var Ye=2*(ee+1)-1,Qe=N[Ye],Q=Ye+1,se=N[Q];if(0>r(Qe,J))Q<re&&0>r(se,Qe)?(N[ee]=se,N[Q]=J,ee=Q):(N[ee]=Qe,N[Ye]=J,ee=Ye);else if(Q<re&&0>r(se,J))N[ee]=se,N[Q]=J,ee=Q;else break e}}return Y}function r(N,Y){var J=N.sortIndex-Y.sortIndex;return J!==0?J:N.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,g=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=N)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function M(N){if(y=!1,x(N),!g)if(n(l)!==null)g=!0,B(T);else{var Y=n(c);Y!==null&&k(M,Y.startTime-N)}}function T(N,Y){g=!1,y&&(y=!1,h(S),S=-1),p=!0;var J=f;try{for(x(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||N&&!P());){var ee=d.callback;if(typeof ee=="function"){d.callback=null,f=d.priorityLevel;var re=ee(d.expirationTime<=Y);Y=t.unstable_now(),typeof re=="function"?d.callback=re:d===n(l)&&i(l),x(Y)}else i(l);d=n(l)}if(d!==null)var Le=!0;else{var Ye=n(c);Ye!==null&&k(M,Ye.startTime-Y),Le=!1}return Le}finally{d=null,f=J,p=!1}}var b=!1,C=null,S=-1,w=5,L=-1;function P(){return!(t.unstable_now()-L<w)}function O(){if(C!==null){var N=t.unstable_now();L=N;var Y=!0;try{Y=C(!0,N)}finally{Y?z():(b=!1,C=null)}}else b=!1}var z;if(typeof _=="function")z=function(){_(O)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,H=W.port2;W.port1.onmessage=O,z=function(){H.postMessage(null)}}else z=function(){v(O,0)};function B(N){C=N,b||(b=!0,z())}function k(N,Y){S=v(function(){N(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,B(T))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var J=f;f=Y;try{return N()}finally{f=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,Y){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var J=f;f=N;try{return Y()}finally{f=J}},t.unstable_scheduleCallback=function(N,Y,J){var ee=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ee+J:ee):J=ee,N){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=J+re,N={id:u++,callback:Y,priorityLevel:N,startTime:J,expirationTime:re,sortIndex:-1},J>ee?(N.sortIndex=J,e(c,N),n(l)===null&&N===n(c)&&(y?(h(S),S=-1):y=!0,k(M,J-ee))):(N.sortIndex=re,e(l,N),g||p||(g=!0,B(T))),N},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(N){var Y=f;return function(){var J=f;f=Y;try{return N.apply(this,arguments)}finally{f=J}}}})(N_);I_.exports=N_;var OE=I_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kE=de,Dn=OE;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var U_=new Set,ma={};function gs(t,e){so(t,e),so(t+"Capture",e)}function so(t,e){for(ma[t]=e,t=0;t<e.length;t++)U_.add(e[t])}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nd=Object.prototype.hasOwnProperty,BE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tg={},ng={};function VE(t){return nd.call(ng,t)?!0:nd.call(tg,t)?!1:BE.test(t)?ng[t]=!0:(tg[t]=!0,!1)}function zE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function HE(t,e,n,i){if(e===null||typeof e>"u"||zE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Zt[t]=new pn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Zt[e]=new pn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Zt[t]=new pn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Zt[t]=new pn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Zt[t]=new pn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Zt[t]=new pn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Zt[t]=new pn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Zt[t]=new pn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Zt[t]=new pn(t,5,!1,t.toLowerCase(),null,!1,!1)});var mp=/[\-:]([a-z])/g;function gp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mp,gp);Zt[e]=new pn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mp,gp);Zt[e]=new pn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mp,gp);Zt[e]=new pn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Zt[t]=new pn(t,1,!1,t.toLowerCase(),null,!1,!1)});Zt.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Zt[t]=new pn(t,1,!1,t.toLowerCase(),null,!0,!0)});function vp(t,e,n,i){var r=Zt.hasOwnProperty(e)?Zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(HE(e,n,r,i)&&(n=null),i||r===null?VE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ji=kE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tl=Symbol.for("react.element"),Fs=Symbol.for("react.portal"),Os=Symbol.for("react.fragment"),_p=Symbol.for("react.strict_mode"),id=Symbol.for("react.profiler"),F_=Symbol.for("react.provider"),O_=Symbol.for("react.context"),xp=Symbol.for("react.forward_ref"),rd=Symbol.for("react.suspense"),sd=Symbol.for("react.suspense_list"),yp=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),k_=Symbol.for("react.offscreen"),ig=Symbol.iterator;function Po(t){return t===null||typeof t!="object"?null:(t=ig&&t[ig]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,Du;function Yo(t){if(Du===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Du=e&&e[1]||""}return`
`+Du+t}var Lu=!1;function Iu(t,e){if(!t||Lu)return"";Lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Yo(t):""}function GE(t){switch(t.tag){case 5:return Yo(t.type);case 16:return Yo("Lazy");case 13:return Yo("Suspense");case 19:return Yo("SuspenseList");case 0:case 2:case 15:return t=Iu(t.type,!1),t;case 11:return t=Iu(t.type.render,!1),t;case 1:return t=Iu(t.type,!0),t;default:return""}}function od(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Os:return"Fragment";case Fs:return"Portal";case id:return"Profiler";case _p:return"StrictMode";case rd:return"Suspense";case sd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case O_:return(t.displayName||"Context")+".Consumer";case F_:return(t._context.displayName||"Context")+".Provider";case xp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yp:return e=t.displayName||null,e!==null?e:od(t.type)||"Memo";case fr:e=t._payload,t=t._init;try{return od(t(e))}catch{}}return null}function WE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return od(e);case 8:return e===_p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function B_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jE(t){var e=B_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function nl(t){t._valueTracker||(t._valueTracker=jE(t))}function V_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=B_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function vc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ad(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function z_(t,e){e=e.checked,e!=null&&vp(t,"checked",e,!1)}function ld(t,e){z_(t,e);var n=Cr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cd(t,e.type,n):e.hasOwnProperty("defaultValue")&&cd(t,e.type,Cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function cd(t,e,n){(e!=="number"||vc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $o=Array.isArray;function Zs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Cr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ud(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function og(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if($o(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cr(n)}}function H_(t,e){var n=Cr(e.value),i=Cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ag(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function G_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?G_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var il,W_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(il=il||document.createElement("div"),il.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=il.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ga(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},XE=["Webkit","ms","Moz","O"];Object.keys(ta).forEach(function(t){XE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ta[e]=ta[t]})});function j_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ta.hasOwnProperty(t)&&ta[t]?(""+e).trim():e+"px"}function X_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=j_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var YE=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dd(t,e){if(e){if(YE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function hd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pd=null;function Sp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var md=null,Qs=null,Js=null;function lg(t){if(t=Ha(t)){if(typeof md!="function")throw Error(te(280));var e=t.stateNode;e&&(e=lu(e),md(t.stateNode,t.type,e))}}function Y_(t){Qs?Js?Js.push(t):Js=[t]:Qs=t}function $_(){if(Qs){var t=Qs,e=Js;if(Js=Qs=null,lg(t),e)for(t=0;t<e.length;t++)lg(e[t])}}function q_(t,e){return t(e)}function K_(){}var Nu=!1;function Z_(t,e,n){if(Nu)return t(e,n);Nu=!0;try{return q_(t,e,n)}finally{Nu=!1,(Qs!==null||Js!==null)&&(K_(),$_())}}function va(t,e){var n=t.stateNode;if(n===null)return null;var i=lu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var gd=!1;if(Yi)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){gd=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{gd=!1}function $E(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var na=!1,_c=null,xc=!1,vd=null,qE={onError:function(t){na=!0,_c=t}};function KE(t,e,n,i,r,s,o,a,l){na=!1,_c=null,$E.apply(qE,arguments)}function ZE(t,e,n,i,r,s,o,a,l){if(KE.apply(this,arguments),na){if(na){var c=_c;na=!1,_c=null}else throw Error(te(198));xc||(xc=!0,vd=c)}}function vs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Q_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cg(t){if(vs(t)!==t)throw Error(te(188))}function QE(t){var e=t.alternate;if(!e){if(e=vs(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return cg(r),t;if(s===i)return cg(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function J_(t){return t=QE(t),t!==null?ex(t):null}function ex(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ex(t);if(e!==null)return e;t=t.sibling}return null}var tx=Dn.unstable_scheduleCallback,ug=Dn.unstable_cancelCallback,JE=Dn.unstable_shouldYield,eT=Dn.unstable_requestPaint,Ct=Dn.unstable_now,tT=Dn.unstable_getCurrentPriorityLevel,Mp=Dn.unstable_ImmediatePriority,nx=Dn.unstable_UserBlockingPriority,yc=Dn.unstable_NormalPriority,nT=Dn.unstable_LowPriority,ix=Dn.unstable_IdlePriority,ru=null,Ti=null;function iT(t){if(Ti&&typeof Ti.onCommitFiberRoot=="function")try{Ti.onCommitFiberRoot(ru,t,void 0,(t.current.flags&128)===128)}catch{}}var oi=Math.clz32?Math.clz32:oT,rT=Math.log,sT=Math.LN2;function oT(t){return t>>>=0,t===0?32:31-(rT(t)/sT|0)|0}var rl=64,sl=4194304;function qo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=qo(a):(s&=o,s!==0&&(i=qo(s)))}else o=n&~r,o!==0?i=qo(o):s!==0&&(i=qo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-oi(e),r=1<<n,i|=t[n],e&=~r;return i}function aT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lT(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-oi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=aT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _d(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rx(){var t=rl;return rl<<=1,!(rl&4194240)&&(rl=64),t}function Uu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-oi(e),t[e]=n}function cT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-oi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ep(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-oi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function sx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ox,Tp,ax,lx,cx,xd=!1,ol=[],yr=null,Sr=null,Mr=null,_a=new Map,xa=new Map,hr=[],uT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fg(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":_a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(e.pointerId)}}function Lo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ha(e),e!==null&&Tp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function fT(t,e,n,i,r){switch(e){case"focusin":return yr=Lo(yr,t,e,n,i,r),!0;case"dragenter":return Sr=Lo(Sr,t,e,n,i,r),!0;case"mouseover":return Mr=Lo(Mr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return _a.set(s,Lo(_a.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,xa.set(s,Lo(xa.get(s)||null,t,e,n,i,r)),!0}return!1}function ux(t){var e=Qr(t.target);if(e!==null){var n=vs(e);if(n!==null){if(e=n.tag,e===13){if(e=Q_(n),e!==null){t.blockedOn=e,cx(t.priority,function(){ax(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function $l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);pd=i,n.target.dispatchEvent(i),pd=null}else return e=Ha(n),e!==null&&Tp(e),t.blockedOn=n,!1;e.shift()}return!0}function dg(t,e,n){$l(t)&&n.delete(e)}function dT(){xd=!1,yr!==null&&$l(yr)&&(yr=null),Sr!==null&&$l(Sr)&&(Sr=null),Mr!==null&&$l(Mr)&&(Mr=null),_a.forEach(dg),xa.forEach(dg)}function Io(t,e){t.blockedOn===e&&(t.blockedOn=null,xd||(xd=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,dT)))}function ya(t){function e(r){return Io(r,t)}if(0<ol.length){Io(ol[0],t);for(var n=1;n<ol.length;n++){var i=ol[n];i.blockedOn===t&&(i.blockedOn=null)}}for(yr!==null&&Io(yr,t),Sr!==null&&Io(Sr,t),Mr!==null&&Io(Mr,t),_a.forEach(e),xa.forEach(e),n=0;n<hr.length;n++)i=hr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)ux(n),n.blockedOn===null&&hr.shift()}var eo=Ji.ReactCurrentBatchConfig,Mc=!0;function hT(t,e,n,i){var r=ot,s=eo.transition;eo.transition=null;try{ot=1,wp(t,e,n,i)}finally{ot=r,eo.transition=s}}function pT(t,e,n,i){var r=ot,s=eo.transition;eo.transition=null;try{ot=4,wp(t,e,n,i)}finally{ot=r,eo.transition=s}}function wp(t,e,n,i){if(Mc){var r=yd(t,e,n,i);if(r===null)ju(t,e,i,Ec,n),fg(t,i);else if(fT(r,t,e,n,i))i.stopPropagation();else if(fg(t,i),e&4&&-1<uT.indexOf(t)){for(;r!==null;){var s=Ha(r);if(s!==null&&ox(s),s=yd(t,e,n,i),s===null&&ju(t,e,i,Ec,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ju(t,e,i,null,n)}}var Ec=null;function yd(t,e,n,i){if(Ec=null,t=Sp(i),t=Qr(t),t!==null)if(e=vs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Q_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ec=t,null}function fx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tT()){case Mp:return 1;case nx:return 4;case yc:case nT:return 16;case ix:return 536870912;default:return 16}default:return 16}}var gr=null,Ap=null,ql=null;function dx(){if(ql)return ql;var t,e=Ap,n=e.length,i,r="value"in gr?gr.value:gr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ql=r.slice(t,1<i?1-i:void 0)}function Kl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function hg(){return!1}function In(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?al:hg,this.isPropagationStopped=hg,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),e}var So={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bp=In(So),za=Mt({},So,{view:0,detail:0}),mT=In(za),Fu,Ou,No,su=Mt({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==No&&(No&&t.type==="mousemove"?(Fu=t.screenX-No.screenX,Ou=t.screenY-No.screenY):Ou=Fu=0,No=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:Ou}}),pg=In(su),gT=Mt({},su,{dataTransfer:0}),vT=In(gT),_T=Mt({},za,{relatedTarget:0}),ku=In(_T),xT=Mt({},So,{animationName:0,elapsedTime:0,pseudoElement:0}),yT=In(xT),ST=Mt({},So,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),MT=In(ST),ET=Mt({},So,{data:0}),mg=In(ET),TT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=AT[t])?!!e[t]:!1}function Cp(){return bT}var CT=Mt({},za,{key:function(t){if(t.key){var e=TT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Kl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cp,charCode:function(t){return t.type==="keypress"?Kl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),RT=In(CT),PT=Mt({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gg=In(PT),DT=Mt({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cp}),LT=In(DT),IT=Mt({},So,{propertyName:0,elapsedTime:0,pseudoElement:0}),NT=In(IT),UT=Mt({},su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),FT=In(UT),OT=[9,13,27,32],Rp=Yi&&"CompositionEvent"in window,ia=null;Yi&&"documentMode"in document&&(ia=document.documentMode);var kT=Yi&&"TextEvent"in window&&!ia,hx=Yi&&(!Rp||ia&&8<ia&&11>=ia),vg=" ",_g=!1;function px(t,e){switch(t){case"keyup":return OT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ks=!1;function BT(t,e){switch(t){case"compositionend":return mx(e);case"keypress":return e.which!==32?null:(_g=!0,vg);case"textInput":return t=e.data,t===vg&&_g?null:t;default:return null}}function VT(t,e){if(ks)return t==="compositionend"||!Rp&&px(t,e)?(t=dx(),ql=Ap=gr=null,ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hx&&e.locale!=="ko"?null:e.data;default:return null}}var zT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zT[t.type]:e==="textarea"}function gx(t,e,n,i){Y_(i),e=Tc(e,"onChange"),0<e.length&&(n=new bp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ra=null,Sa=null;function HT(t){bx(t,0)}function ou(t){var e=zs(t);if(V_(e))return t}function GT(t,e){if(t==="change")return e}var vx=!1;if(Yi){var Bu;if(Yi){var Vu="oninput"in document;if(!Vu){var yg=document.createElement("div");yg.setAttribute("oninput","return;"),Vu=typeof yg.oninput=="function"}Bu=Vu}else Bu=!1;vx=Bu&&(!document.documentMode||9<document.documentMode)}function Sg(){ra&&(ra.detachEvent("onpropertychange",_x),Sa=ra=null)}function _x(t){if(t.propertyName==="value"&&ou(Sa)){var e=[];gx(e,Sa,t,Sp(t)),Z_(HT,e)}}function WT(t,e,n){t==="focusin"?(Sg(),ra=e,Sa=n,ra.attachEvent("onpropertychange",_x)):t==="focusout"&&Sg()}function jT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ou(Sa)}function XT(t,e){if(t==="click")return ou(e)}function YT(t,e){if(t==="input"||t==="change")return ou(e)}function $T(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var di=typeof Object.is=="function"?Object.is:$T;function Ma(t,e){if(di(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!nd.call(e,r)||!di(t[r],e[r]))return!1}return!0}function Mg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Eg(t,e){var n=Mg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mg(n)}}function xx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yx(){for(var t=window,e=vc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vc(t.document)}return e}function Pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qT(t){var e=yx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xx(n.ownerDocument.documentElement,n)){if(i!==null&&Pp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Eg(n,s);var o=Eg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var KT=Yi&&"documentMode"in document&&11>=document.documentMode,Bs=null,Sd=null,sa=null,Md=!1;function Tg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Md||Bs==null||Bs!==vc(i)||(i=Bs,"selectionStart"in i&&Pp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),sa&&Ma(sa,i)||(sa=i,i=Tc(Sd,"onSelect"),0<i.length&&(e=new bp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Bs)))}function ll(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vs={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},zu={},Sx={};Yi&&(Sx=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function au(t){if(zu[t])return zu[t];if(!Vs[t])return t;var e=Vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Sx)return zu[t]=e[n];return t}var Mx=au("animationend"),Ex=au("animationiteration"),Tx=au("animationstart"),wx=au("transitionend"),Ax=new Map,wg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,e){Ax.set(t,e),gs(e,[t])}for(var Hu=0;Hu<wg.length;Hu++){var Gu=wg[Hu],ZT=Gu.toLowerCase(),QT=Gu[0].toUpperCase()+Gu.slice(1);Ir(ZT,"on"+QT)}Ir(Mx,"onAnimationEnd");Ir(Ex,"onAnimationIteration");Ir(Tx,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(wx,"onTransitionEnd");so("onMouseEnter",["mouseout","mouseover"]);so("onMouseLeave",["mouseout","mouseover"]);so("onPointerEnter",["pointerout","pointerover"]);so("onPointerLeave",["pointerout","pointerover"]);gs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gs("onBeforeInput",["compositionend","keypress","textInput","paste"]);gs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ko));function Ag(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ZE(i,e,void 0,t),t.currentTarget=null}function bx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ag(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ag(r,a,c),s=l}}}if(xc)throw t=vd,xc=!1,vd=null,t}function ht(t,e){var n=e[bd];n===void 0&&(n=e[bd]=new Set);var i=t+"__bubble";n.has(i)||(Cx(e,t,2,!1),n.add(i))}function Wu(t,e,n){var i=0;e&&(i|=4),Cx(n,t,i,e)}var cl="_reactListening"+Math.random().toString(36).slice(2);function Ea(t){if(!t[cl]){t[cl]=!0,U_.forEach(function(n){n!=="selectionchange"&&(JT.has(n)||Wu(n,!1,t),Wu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[cl]||(e[cl]=!0,Wu("selectionchange",!1,e))}}function Cx(t,e,n,i){switch(fx(e)){case 1:var r=hT;break;case 4:r=pT;break;default:r=wp}n=r.bind(null,e,n,t),r=void 0,!gd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ju(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Qr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Z_(function(){var c=s,u=Sp(n),d=[];e:{var f=Ax.get(t);if(f!==void 0){var p=bp,g=t;switch(t){case"keypress":if(Kl(n)===0)break e;case"keydown":case"keyup":p=RT;break;case"focusin":g="focus",p=ku;break;case"focusout":g="blur",p=ku;break;case"beforeblur":case"afterblur":p=ku;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=pg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=vT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=LT;break;case Mx:case Ex:case Tx:p=yT;break;case wx:p=NT;break;case"scroll":p=mT;break;case"wheel":p=FT;break;case"copy":case"cut":case"paste":p=MT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=gg}var y=(e&4)!==0,v=!y&&t==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var _=c,x;_!==null;){x=_;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,h!==null&&(M=va(_,h),M!=null&&y.push(Ta(_,M,x)))),v)break;_=_.return}0<y.length&&(f=new p(f,g,null,n,u),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==pd&&(g=n.relatedTarget||n.fromElement)&&(Qr(g)||g[$i]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Qr(g):null,g!==null&&(v=vs(g),g!==v||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(y=pg,M="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=gg,M="onPointerLeave",h="onPointerEnter",_="pointer"),v=p==null?f:zs(p),x=g==null?f:zs(g),f=new y(M,_+"leave",p,n,u),f.target=v,f.relatedTarget=x,M=null,Qr(u)===c&&(y=new y(h,_+"enter",g,n,u),y.target=x,y.relatedTarget=v,M=y),v=M,p&&g)t:{for(y=p,h=g,_=0,x=y;x;x=ys(x))_++;for(x=0,M=h;M;M=ys(M))x++;for(;0<_-x;)y=ys(y),_--;for(;0<x-_;)h=ys(h),x--;for(;_--;){if(y===h||h!==null&&y===h.alternate)break t;y=ys(y),h=ys(h)}y=null}else y=null;p!==null&&bg(d,f,p,y,!1),g!==null&&v!==null&&bg(d,v,g,y,!0)}}e:{if(f=c?zs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=GT;else if(xg(f))if(vx)T=YT;else{T=jT;var b=WT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=XT);if(T&&(T=T(t,c))){gx(d,T,n,u);break e}b&&b(t,f,c),t==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&cd(f,"number",f.value)}switch(b=c?zs(c):window,t){case"focusin":(xg(b)||b.contentEditable==="true")&&(Bs=b,Sd=c,sa=null);break;case"focusout":sa=Sd=Bs=null;break;case"mousedown":Md=!0;break;case"contextmenu":case"mouseup":case"dragend":Md=!1,Tg(d,n,u);break;case"selectionchange":if(KT)break;case"keydown":case"keyup":Tg(d,n,u)}var C;if(Rp)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else ks?px(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(hx&&n.locale!=="ko"&&(ks||S!=="onCompositionStart"?S==="onCompositionEnd"&&ks&&(C=dx()):(gr=u,Ap="value"in gr?gr.value:gr.textContent,ks=!0)),b=Tc(c,S),0<b.length&&(S=new mg(S,t,null,n,u),d.push({event:S,listeners:b}),C?S.data=C:(C=mx(n),C!==null&&(S.data=C)))),(C=kT?BT(t,n):VT(t,n))&&(c=Tc(c,"onBeforeInput"),0<c.length&&(u=new mg("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=C))}bx(d,e)})}function Ta(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=va(t,n),s!=null&&i.unshift(Ta(t,s,r)),s=va(t,e),s!=null&&i.push(Ta(t,s,r))),t=t.return}return i}function ys(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=va(n,s),l!=null&&o.unshift(Ta(n,l,a))):r||(l=va(n,s),l!=null&&o.push(Ta(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var e1=/\r\n?/g,t1=/\u0000|\uFFFD/g;function Cg(t){return(typeof t=="string"?t:""+t).replace(e1,`
`).replace(t1,"")}function ul(t,e,n){if(e=Cg(e),Cg(t)!==e&&n)throw Error(te(425))}function wc(){}var Ed=null,Td=null;function wd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ad=typeof setTimeout=="function"?setTimeout:void 0,n1=typeof clearTimeout=="function"?clearTimeout:void 0,Rg=typeof Promise=="function"?Promise:void 0,i1=typeof queueMicrotask=="function"?queueMicrotask:typeof Rg<"u"?function(t){return Rg.resolve(null).then(t).catch(r1)}:Ad;function r1(t){setTimeout(function(){throw t})}function Xu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ya(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ya(e)}function Er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Pg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Mo=Math.random().toString(36).slice(2),Mi="__reactFiber$"+Mo,wa="__reactProps$"+Mo,$i="__reactContainer$"+Mo,bd="__reactEvents$"+Mo,s1="__reactListeners$"+Mo,o1="__reactHandles$"+Mo;function Qr(t){var e=t[Mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$i]||n[Mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Pg(t);t!==null;){if(n=t[Mi])return n;t=Pg(t)}return e}t=n,n=t.parentNode}return null}function Ha(t){return t=t[Mi]||t[$i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function lu(t){return t[wa]||null}var Cd=[],Hs=-1;function Nr(t){return{current:t}}function pt(t){0>Hs||(t.current=Cd[Hs],Cd[Hs]=null,Hs--)}function ft(t,e){Hs++,Cd[Hs]=t.current,t.current=e}var Rr={},sn=Nr(Rr),_n=Nr(!1),us=Rr;function oo(t,e){var n=t.type.contextTypes;if(!n)return Rr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function xn(t){return t=t.childContextTypes,t!=null}function Ac(){pt(_n),pt(sn)}function Dg(t,e,n){if(sn.current!==Rr)throw Error(te(168));ft(sn,e),ft(_n,n)}function Rx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,WE(t)||"Unknown",r));return Mt({},n,i)}function bc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,us=sn.current,ft(sn,t),ft(_n,_n.current),!0}function Lg(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=Rx(t,e,us),i.__reactInternalMemoizedMergedChildContext=t,pt(_n),pt(sn),ft(sn,t)):pt(_n),ft(_n,n)}var Vi=null,cu=!1,Yu=!1;function Px(t){Vi===null?Vi=[t]:Vi.push(t)}function a1(t){cu=!0,Px(t)}function Ur(){if(!Yu&&Vi!==null){Yu=!0;var t=0,e=ot;try{var n=Vi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Vi=null,cu=!1}catch(r){throw Vi!==null&&(Vi=Vi.slice(t+1)),tx(Mp,Ur),r}finally{ot=e,Yu=!1}}return null}var Gs=[],Ws=0,Cc=null,Rc=0,Fn=[],On=0,fs=null,Hi=1,Gi="";function Xr(t,e){Gs[Ws++]=Rc,Gs[Ws++]=Cc,Cc=t,Rc=e}function Dx(t,e,n){Fn[On++]=Hi,Fn[On++]=Gi,Fn[On++]=fs,fs=t;var i=Hi;t=Gi;var r=32-oi(i)-1;i&=~(1<<r),n+=1;var s=32-oi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Hi=1<<32-oi(e)+r|n<<r|i,Gi=s+t}else Hi=1<<s|n<<r|i,Gi=t}function Dp(t){t.return!==null&&(Xr(t,1),Dx(t,1,0))}function Lp(t){for(;t===Cc;)Cc=Gs[--Ws],Gs[Ws]=null,Rc=Gs[--Ws],Gs[Ws]=null;for(;t===fs;)fs=Fn[--On],Fn[On]=null,Gi=Fn[--On],Fn[On]=null,Hi=Fn[--On],Fn[On]=null}var Rn=null,bn=null,mt=!1,ni=null;function Lx(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ig(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,bn=Er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fs!==null?{id:Hi,overflow:Gi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,bn=null,!0):!1;default:return!1}}function Rd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pd(t){if(mt){var e=bn;if(e){var n=e;if(!Ig(t,e)){if(Rd(t))throw Error(te(418));e=Er(n.nextSibling);var i=Rn;e&&Ig(t,e)?Lx(i,n):(t.flags=t.flags&-4097|2,mt=!1,Rn=t)}}else{if(Rd(t))throw Error(te(418));t.flags=t.flags&-4097|2,mt=!1,Rn=t}}}function Ng(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function fl(t){if(t!==Rn)return!1;if(!mt)return Ng(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wd(t.type,t.memoizedProps)),e&&(e=bn)){if(Rd(t))throw Ix(),Error(te(418));for(;e;)Lx(t,e),e=Er(e.nextSibling)}if(Ng(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bn=Er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bn=null}}else bn=Rn?Er(t.stateNode.nextSibling):null;return!0}function Ix(){for(var t=bn;t;)t=Er(t.nextSibling)}function ao(){bn=Rn=null,mt=!1}function Ip(t){ni===null?ni=[t]:ni.push(t)}var l1=Ji.ReactCurrentBatchConfig;function Uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function dl(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ug(t){var e=t._init;return e(t._payload)}function Nx(t){function e(h,_){if(t){var x=h.deletions;x===null?(h.deletions=[_],h.flags|=16):x.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=br(h,_),h.index=0,h.sibling=null,h}function s(h,_,x){return h.index=x,t?(x=h.alternate,x!==null?(x=x.index,x<_?(h.flags|=2,_):x):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,_,x,M){return _===null||_.tag!==6?(_=ef(x,h.mode,M),_.return=h,_):(_=r(_,x),_.return=h,_)}function l(h,_,x,M){var T=x.type;return T===Os?u(h,_,x.props.children,M,x.key):_!==null&&(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===fr&&Ug(T)===_.type)?(M=r(_,x.props),M.ref=Uo(h,_,x),M.return=h,M):(M=ic(x.type,x.key,x.props,null,h.mode,M),M.ref=Uo(h,_,x),M.return=h,M)}function c(h,_,x,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=tf(x,h.mode,M),_.return=h,_):(_=r(_,x.children||[]),_.return=h,_)}function u(h,_,x,M,T){return _===null||_.tag!==7?(_=os(x,h.mode,M,T),_.return=h,_):(_=r(_,x),_.return=h,_)}function d(h,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=ef(""+_,h.mode,x),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case tl:return x=ic(_.type,_.key,_.props,null,h.mode,x),x.ref=Uo(h,null,_),x.return=h,x;case Fs:return _=tf(_,h.mode,x),_.return=h,_;case fr:var M=_._init;return d(h,M(_._payload),x)}if($o(_)||Po(_))return _=os(_,h.mode,x,null),_.return=h,_;dl(h,_)}return null}function f(h,_,x,M){var T=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:a(h,_,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case tl:return x.key===T?l(h,_,x,M):null;case Fs:return x.key===T?c(h,_,x,M):null;case fr:return T=x._init,f(h,_,T(x._payload),M)}if($o(x)||Po(x))return T!==null?null:u(h,_,x,M,null);dl(h,x)}return null}function p(h,_,x,M,T){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(x)||null,a(_,h,""+M,T);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case tl:return h=h.get(M.key===null?x:M.key)||null,l(_,h,M,T);case Fs:return h=h.get(M.key===null?x:M.key)||null,c(_,h,M,T);case fr:var b=M._init;return p(h,_,x,b(M._payload),T)}if($o(M)||Po(M))return h=h.get(x)||null,u(_,h,M,T,null);dl(_,M)}return null}function g(h,_,x,M){for(var T=null,b=null,C=_,S=_=0,w=null;C!==null&&S<x.length;S++){C.index>S?(w=C,C=null):w=C.sibling;var L=f(h,C,x[S],M);if(L===null){C===null&&(C=w);break}t&&C&&L.alternate===null&&e(h,C),_=s(L,_,S),b===null?T=L:b.sibling=L,b=L,C=w}if(S===x.length)return n(h,C),mt&&Xr(h,S),T;if(C===null){for(;S<x.length;S++)C=d(h,x[S],M),C!==null&&(_=s(C,_,S),b===null?T=C:b.sibling=C,b=C);return mt&&Xr(h,S),T}for(C=i(h,C);S<x.length;S++)w=p(C,h,S,x[S],M),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?S:w.key),_=s(w,_,S),b===null?T=w:b.sibling=w,b=w);return t&&C.forEach(function(P){return e(h,P)}),mt&&Xr(h,S),T}function y(h,_,x,M){var T=Po(x);if(typeof T!="function")throw Error(te(150));if(x=T.call(x),x==null)throw Error(te(151));for(var b=T=null,C=_,S=_=0,w=null,L=x.next();C!==null&&!L.done;S++,L=x.next()){C.index>S?(w=C,C=null):w=C.sibling;var P=f(h,C,L.value,M);if(P===null){C===null&&(C=w);break}t&&C&&P.alternate===null&&e(h,C),_=s(P,_,S),b===null?T=P:b.sibling=P,b=P,C=w}if(L.done)return n(h,C),mt&&Xr(h,S),T;if(C===null){for(;!L.done;S++,L=x.next())L=d(h,L.value,M),L!==null&&(_=s(L,_,S),b===null?T=L:b.sibling=L,b=L);return mt&&Xr(h,S),T}for(C=i(h,C);!L.done;S++,L=x.next())L=p(C,h,S,L.value,M),L!==null&&(t&&L.alternate!==null&&C.delete(L.key===null?S:L.key),_=s(L,_,S),b===null?T=L:b.sibling=L,b=L);return t&&C.forEach(function(O){return e(h,O)}),mt&&Xr(h,S),T}function v(h,_,x,M){if(typeof x=="object"&&x!==null&&x.type===Os&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case tl:e:{for(var T=x.key,b=_;b!==null;){if(b.key===T){if(T=x.type,T===Os){if(b.tag===7){n(h,b.sibling),_=r(b,x.props.children),_.return=h,h=_;break e}}else if(b.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===fr&&Ug(T)===b.type){n(h,b.sibling),_=r(b,x.props),_.ref=Uo(h,b,x),_.return=h,h=_;break e}n(h,b);break}else e(h,b);b=b.sibling}x.type===Os?(_=os(x.props.children,h.mode,M,x.key),_.return=h,h=_):(M=ic(x.type,x.key,x.props,null,h.mode,M),M.ref=Uo(h,_,x),M.return=h,h=M)}return o(h);case Fs:e:{for(b=x.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(h,_.sibling),_=r(_,x.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=tf(x,h.mode,M),_.return=h,h=_}return o(h);case fr:return b=x._init,v(h,_,b(x._payload),M)}if($o(x))return g(h,_,x,M);if(Po(x))return y(h,_,x,M);dl(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,x),_.return=h,h=_):(n(h,_),_=ef(x,h.mode,M),_.return=h,h=_),o(h)):n(h,_)}return v}var lo=Nx(!0),Ux=Nx(!1),Pc=Nr(null),Dc=null,js=null,Np=null;function Up(){Np=js=Dc=null}function Fp(t){var e=Pc.current;pt(Pc),t._currentValue=e}function Dd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function to(t,e){Dc=t,Np=js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vn=!0),t.firstContext=null)}function jn(t){var e=t._currentValue;if(Np!==t)if(t={context:t,memoizedValue:e,next:null},js===null){if(Dc===null)throw Error(te(308));js=t,Dc.dependencies={lanes:0,firstContext:t}}else js=js.next=t;return e}var Jr=null;function Op(t){Jr===null?Jr=[t]:Jr.push(t)}function Fx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Op(e)):(n.next=r.next,r.next=n),e.interleaved=n,qi(t,i)}function qi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function kp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ox(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,qi(t,n)}return r=i.interleaved,r===null?(e.next=e,Op(i)):(e.next=r.next,r.next=e),i.interleaved=e,qi(t,n)}function Zl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ep(t,n)}}function Fg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Lc(t,e,n,i){var r=t.updateQueue;dr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(f=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=Mt({},d,f);break e;case 2:dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);hs|=o,t.lanes=o,t.memoizedState=d}}function Og(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Ga={},wi=Nr(Ga),Aa=Nr(Ga),ba=Nr(Ga);function es(t){if(t===Ga)throw Error(te(174));return t}function Bp(t,e){switch(ft(ba,e),ft(Aa,t),ft(wi,Ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fd(e,t)}pt(wi),ft(wi,e)}function co(){pt(wi),pt(Aa),pt(ba)}function kx(t){es(ba.current);var e=es(wi.current),n=fd(e,t.type);e!==n&&(ft(Aa,t),ft(wi,n))}function Vp(t){Aa.current===t&&(pt(wi),pt(Aa))}var _t=Nr(0);function Ic(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $u=[];function zp(){for(var t=0;t<$u.length;t++)$u[t]._workInProgressVersionPrimary=null;$u.length=0}var Ql=Ji.ReactCurrentDispatcher,qu=Ji.ReactCurrentBatchConfig,ds=0,St=null,Ft=null,Ht=null,Nc=!1,oa=!1,Ca=0,c1=0;function Jt(){throw Error(te(321))}function Hp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!di(t[n],e[n]))return!1;return!0}function Gp(t,e,n,i,r,s){if(ds=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ql.current=t===null||t.memoizedState===null?h1:p1,t=n(i,r),oa){s=0;do{if(oa=!1,Ca=0,25<=s)throw Error(te(301));s+=1,Ht=Ft=null,e.updateQueue=null,Ql.current=m1,t=n(i,r)}while(oa)}if(Ql.current=Uc,e=Ft!==null&&Ft.next!==null,ds=0,Ht=Ft=St=null,Nc=!1,e)throw Error(te(300));return t}function Wp(){var t=Ca!==0;return Ca=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?St.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Xn(){if(Ft===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var e=Ht===null?St.memoizedState:Ht.next;if(e!==null)Ht=e,Ft=t;else{if(t===null)throw Error(te(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Ht===null?St.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function Ra(t,e){return typeof e=="function"?e(t):e}function Ku(t){var e=Xn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ds&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,St.lanes|=u,hs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,di(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,hs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Zu(t){var e=Xn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);di(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Bx(){}function Vx(t,e){var n=St,i=Xn(),r=e(),s=!di(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,jp(Gx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,Pa(9,Hx.bind(null,n,i,r,e),void 0,null),Gt===null)throw Error(te(349));ds&30||zx(n,e,r)}return r}function zx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Hx(t,e,n,i){e.value=n,e.getSnapshot=i,Wx(e)&&jx(t)}function Gx(t,e,n){return n(function(){Wx(e)&&jx(t)})}function Wx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!di(t,n)}catch{return!0}}function jx(t){var e=qi(t,1);e!==null&&ai(e,t,1,-1)}function kg(t){var e=_i();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},e.queue=t,t=t.dispatch=d1.bind(null,St,t),[e.memoizedState,t]}function Pa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Xx(){return Xn().memoizedState}function Jl(t,e,n,i){var r=_i();St.flags|=t,r.memoizedState=Pa(1|e,n,void 0,i===void 0?null:i)}function uu(t,e,n,i){var r=Xn();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var o=Ft.memoizedState;if(s=o.destroy,i!==null&&Hp(i,o.deps)){r.memoizedState=Pa(e,n,s,i);return}}St.flags|=t,r.memoizedState=Pa(1|e,n,s,i)}function Bg(t,e){return Jl(8390656,8,t,e)}function jp(t,e){return uu(2048,8,t,e)}function Yx(t,e){return uu(4,2,t,e)}function $x(t,e){return uu(4,4,t,e)}function qx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Kx(t,e,n){return n=n!=null?n.concat([t]):null,uu(4,4,qx.bind(null,e,t),n)}function Xp(){}function Zx(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Qx(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Jx(t,e,n){return ds&21?(di(n,e)||(n=rx(),St.lanes|=n,hs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vn=!0),t.memoizedState=n)}function u1(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=qu.transition;qu.transition={};try{t(!1),e()}finally{ot=n,qu.transition=i}}function ey(){return Xn().memoizedState}function f1(t,e,n){var i=Ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ty(t))ny(e,n);else if(n=Fx(t,e,n,i),n!==null){var r=fn();ai(n,t,i,r),iy(n,e,i)}}function d1(t,e,n){var i=Ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ty(t))ny(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,di(a,o)){var l=e.interleaved;l===null?(r.next=r,Op(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Fx(t,e,r,i),n!==null&&(r=fn(),ai(n,t,i,r),iy(n,e,i))}}function ty(t){var e=t.alternate;return t===St||e!==null&&e===St}function ny(t,e){oa=Nc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function iy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ep(t,n)}}var Uc={readContext:jn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},h1={readContext:jn,useCallback:function(t,e){return _i().memoizedState=[t,e===void 0?null:e],t},useContext:jn,useEffect:Bg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jl(4194308,4,qx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jl(4,2,t,e)},useMemo:function(t,e){var n=_i();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=_i();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=f1.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=_i();return t={current:t},e.memoizedState=t},useState:kg,useDebugValue:Xp,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=kg(!1),e=t[0];return t=u1.bind(null,t[1]),_i().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=_i();if(mt){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Gt===null)throw Error(te(349));ds&30||zx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Bg(Gx.bind(null,i,s,t),[t]),i.flags|=2048,Pa(9,Hx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=_i(),e=Gt.identifierPrefix;if(mt){var n=Gi,i=Hi;n=(i&~(1<<32-oi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=c1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},p1={readContext:jn,useCallback:Zx,useContext:jn,useEffect:jp,useImperativeHandle:Kx,useInsertionEffect:Yx,useLayoutEffect:$x,useMemo:Qx,useReducer:Ku,useRef:Xx,useState:function(){return Ku(Ra)},useDebugValue:Xp,useDeferredValue:function(t){var e=Xn();return Jx(e,Ft.memoizedState,t)},useTransition:function(){var t=Ku(Ra)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:Bx,useSyncExternalStore:Vx,useId:ey,unstable_isNewReconciler:!1},m1={readContext:jn,useCallback:Zx,useContext:jn,useEffect:jp,useImperativeHandle:Kx,useInsertionEffect:Yx,useLayoutEffect:$x,useMemo:Qx,useReducer:Zu,useRef:Xx,useState:function(){return Zu(Ra)},useDebugValue:Xp,useDeferredValue:function(t){var e=Xn();return Ft===null?e.memoizedState=t:Jx(e,Ft.memoizedState,t)},useTransition:function(){var t=Zu(Ra)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:Bx,useSyncExternalStore:Vx,useId:ey,unstable_isNewReconciler:!1};function ei(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ld(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fu={isMounted:function(t){return(t=t._reactInternals)?vs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fn(),r=Ar(t),s=Wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,r),e!==null&&(ai(e,t,r,i),Zl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fn(),r=Ar(t),s=Wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,r),e!==null&&(ai(e,t,r,i),Zl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),i=Ar(t),r=Wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Tr(t,r,i),e!==null&&(ai(e,t,i,n),Zl(e,t,i))}};function Vg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ma(n,i)||!Ma(r,s):!0}function ry(t,e,n){var i=!1,r=Rr,s=e.contextType;return typeof s=="object"&&s!==null?s=jn(s):(r=xn(e)?us:sn.current,i=e.contextTypes,s=(i=i!=null)?oo(t,r):Rr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function zg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&fu.enqueueReplaceState(e,e.state,null)}function Id(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},kp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=jn(s):(s=xn(e)?us:sn.current,r.context=oo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ld(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&fu.enqueueReplaceState(r,r.state,null),Lc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function uo(t,e){try{var n="",i=e;do n+=GE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Qu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var g1=typeof WeakMap=="function"?WeakMap:Map;function sy(t,e,n){n=Wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Oc||(Oc=!0,Wd=i),Nd(t,e)},n}function oy(t,e,n){n=Wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Nd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Nd(t,e),typeof i!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new g1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=P1.bind(null,t,e,n),e.then(t,t))}function Gg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wi(-1,1),e.tag=2,Tr(n,e,1))),n.lanes|=1),t)}var v1=Ji.ReactCurrentOwner,vn=!1;function an(t,e,n,i){e.child=t===null?Ux(e,null,n,i):lo(e,t.child,n,i)}function jg(t,e,n,i,r){n=n.render;var s=e.ref;return to(e,r),i=Gp(t,e,n,i,s,r),n=Wp(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ki(t,e,r)):(mt&&n&&Dp(e),e.flags|=1,an(t,e,i,r),e.child)}function Xg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!em(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ay(t,e,s,i,r)):(t=ic(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ma,n(o,i)&&t.ref===e.ref)return Ki(t,e,r)}return e.flags|=1,t=br(s,i),t.ref=e.ref,t.return=e,e.child=t}function ay(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ma(s,i)&&t.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(vn=!0);else return e.lanes=t.lanes,Ki(t,e,r)}return Ud(t,e,n,i,r)}function ly(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(Ys,An),An|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(Ys,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(Ys,An),An|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(Ys,An),An|=i;return an(t,e,r,n),e.child}function cy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ud(t,e,n,i,r){var s=xn(n)?us:sn.current;return s=oo(e,s),to(e,r),n=Gp(t,e,n,i,s,r),i=Wp(),t!==null&&!vn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ki(t,e,r)):(mt&&i&&Dp(e),e.flags|=1,an(t,e,n,r),e.child)}function Yg(t,e,n,i,r){if(xn(n)){var s=!0;bc(e)}else s=!1;if(to(e,r),e.stateNode===null)ec(t,e),ry(e,n,i),Id(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=jn(c):(c=xn(n)?us:sn.current,c=oo(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&zg(e,o,i,c),dr=!1;var f=e.memoizedState;o.state=f,Lc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||_n.current||dr?(typeof u=="function"&&(Ld(e,n,u,i),l=e.memoizedState),(a=dr||Vg(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ox(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ei(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=jn(l):(l=xn(n)?us:sn.current,l=oo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&zg(e,o,i,l),dr=!1,f=e.memoizedState,o.state=f,Lc(e,i,o,r);var g=e.memoizedState;a!==d||f!==g||_n.current||dr?(typeof p=="function"&&(Ld(e,n,p,i),g=e.memoizedState),(c=dr||Vg(e,n,c,i,f,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Fd(t,e,n,i,s,r)}function Fd(t,e,n,i,r,s){cy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Lg(e,n,!1),Ki(t,e,s);i=e.stateNode,v1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=lo(e,t.child,null,s),e.child=lo(e,null,a,s)):an(t,e,a,s),e.memoizedState=i.state,r&&Lg(e,n,!0),e.child}function uy(t){var e=t.stateNode;e.pendingContext?Dg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dg(t,e.context,!1),Bp(t,e.containerInfo)}function $g(t,e,n,i,r){return ao(),Ip(r),e.flags|=256,an(t,e,n,i),e.child}var Od={dehydrated:null,treeContext:null,retryLane:0};function kd(t){return{baseLanes:t,cachePool:null,transitions:null}}function fy(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(_t,r&1),t===null)return Pd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pu(o,i,0,null),t=os(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kd(n),e.memoizedState=Od,t):Yp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return _1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=br(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=br(a,s):(s=os(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?kd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Od,i}return s=t.child,t=s.sibling,i=br(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Yp(t,e){return e=pu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function hl(t,e,n,i){return i!==null&&Ip(i),lo(e,t.child,null,n),t=Yp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Qu(Error(te(422))),hl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=pu({mode:"visible",children:i.children},r,0,null),s=os(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&lo(e,t.child,null,o),e.child.memoizedState=kd(o),e.memoizedState=Od,s);if(!(e.mode&1))return hl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Qu(s,i,void 0),hl(t,e,o,i)}if(a=(o&t.childLanes)!==0,vn||a){if(i=Gt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,qi(t,r),ai(i,t,r,-1))}return Jp(),i=Qu(Error(te(421))),hl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=D1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,bn=Er(r.nextSibling),Rn=e,mt=!0,ni=null,t!==null&&(Fn[On++]=Hi,Fn[On++]=Gi,Fn[On++]=fs,Hi=t.id,Gi=t.overflow,fs=e),e=Yp(e,i.children),e.flags|=4096,e)}function qg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Dd(t.return,e,n)}function Ju(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function dy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(an(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qg(t,n,e);else if(t.tag===19)qg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ic(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ju(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ic(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ju(e,!0,n,null,s);break;case"together":Ju(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ec(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ki(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function x1(t,e,n){switch(e.tag){case 3:uy(e),ao();break;case 5:kx(e);break;case 1:xn(e.type)&&bc(e);break;case 4:Bp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(Pc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?fy(t,e,n):(ft(_t,_t.current&1),t=Ki(t,e,n),t!==null?t.sibling:null);ft(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return dy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,ly(t,e,n)}return Ki(t,e,n)}var hy,Bd,py,my;hy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bd=function(){};py=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,es(wi.current);var s=null;switch(n){case"input":r=ad(t,r),i=ad(t,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=ud(t,r),i=ud(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=wc)}dd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ma.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ma.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};my=function(t,e,n,i){n!==i&&(e.flags|=4)};function Fo(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function y1(t,e,n){var i=e.pendingProps;switch(Lp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return xn(e.type)&&Ac(),en(e),null;case 3:return i=e.stateNode,co(),pt(_n),pt(sn),zp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ni!==null&&(Yd(ni),ni=null))),Bd(t,e),en(e),null;case 5:Vp(e);var r=es(ba.current);if(n=e.type,t!==null&&e.stateNode!=null)py(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return en(e),null}if(t=es(wi.current),fl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Mi]=e,i[wa]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<Ko.length;r++)ht(Ko[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":rg(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":og(i,s),ht("invalid",i)}dd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ul(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ul(i.textContent,a,t),r=["children",""+a]):ma.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ht("scroll",i)}switch(n){case"input":nl(i),sg(i,s,!0);break;case"textarea":nl(i),ag(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=wc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=G_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Mi]=e,t[wa]=i,hy(t,e,!1,!1),e.stateNode=t;e:{switch(o=hd(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ko.length;r++)ht(Ko[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":rg(t,i),r=ad(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),ht("invalid",t);break;case"textarea":og(t,i),r=ud(t,i),ht("invalid",t);break;default:r=i}dd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?X_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&W_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ga(t,l):typeof l=="number"&&ga(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",t):l!=null&&vp(t,s,l,o))}switch(n){case"input":nl(t),sg(t,i,!1);break;case"textarea":nl(t),ag(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Cr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Zs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Zs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=wc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)my(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=es(ba.current),es(wi.current),fl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Mi]=e,(s=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:ul(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ul(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Mi]=e,e.stateNode=i}return en(e),null;case 13:if(pt(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&bn!==null&&e.mode&1&&!(e.flags&128))Ix(),ao(),e.flags|=98560,s=!1;else if(s=fl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Mi]=e}else ao(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else ni!==null&&(Yd(ni),ni=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?Ot===0&&(Ot=3):Jp())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return co(),Bd(t,e),t===null&&Ea(e.stateNode.containerInfo),en(e),null;case 10:return Fp(e.type._context),en(e),null;case 17:return xn(e.type)&&Ac(),en(e),null;case 19:if(pt(_t),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Fo(s,!1);else{if(Ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ic(t),o!==null){for(e.flags|=128,Fo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ct()>fo&&(e.flags|=128,i=!0,Fo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ic(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!mt)return en(e),null}else 2*Ct()-s.renderingStartTime>fo&&n!==1073741824&&(e.flags|=128,i=!0,Fo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,n=_t.current,ft(_t,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return Qp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function S1(t,e){switch(Lp(e),e.tag){case 1:return xn(e.type)&&Ac(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return co(),pt(_n),pt(sn),zp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vp(e),null;case 13:if(pt(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));ao()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(_t),null;case 4:return co(),null;case 10:return Fp(e.type._context),null;case 22:case 23:return Qp(),null;case 24:return null;default:return null}}var pl=!1,rn=!1,M1=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function Vd(t,e,n){try{n()}catch(i){wt(t,e,i)}}var Kg=!1;function E1(t,e){if(Ed=Mc,t=yx(),Pp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Td={focusedElem:t,selectionRange:n},Mc=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,v=g.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:ei(e.type,y),v);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(M){wt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return g=Kg,Kg=!1,g}function aa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Vd(e,n,s)}r=r.next}while(r!==i)}}function du(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function zd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gy(t){var e=t.alternate;e!==null&&(t.alternate=null,gy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mi],delete e[wa],delete e[bd],delete e[s1],delete e[o1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vy(t){return t.tag===5||t.tag===3||t.tag===4}function Zg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wc));else if(i!==4&&(t=t.child,t!==null))for(Hd(t,e,n),t=t.sibling;t!==null;)Hd(t,e,n),t=t.sibling}function Gd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Gd(t,e,n),t=t.sibling;t!==null;)Gd(t,e,n),t=t.sibling}var Xt=null,ti=!1;function nr(t,e,n){for(n=n.child;n!==null;)_y(t,e,n),n=n.sibling}function _y(t,e,n){if(Ti&&typeof Ti.onCommitFiberUnmount=="function")try{Ti.onCommitFiberUnmount(ru,n)}catch{}switch(n.tag){case 5:rn||Xs(n,e);case 6:var i=Xt,r=ti;Xt=null,nr(t,e,n),Xt=i,ti=r,Xt!==null&&(ti?(t=Xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xt.removeChild(n.stateNode));break;case 18:Xt!==null&&(ti?(t=Xt,n=n.stateNode,t.nodeType===8?Xu(t.parentNode,n):t.nodeType===1&&Xu(t,n),ya(t)):Xu(Xt,n.stateNode));break;case 4:i=Xt,r=ti,Xt=n.stateNode.containerInfo,ti=!0,nr(t,e,n),Xt=i,ti=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vd(n,e,o),r=r.next}while(r!==i)}nr(t,e,n);break;case 1:if(!rn&&(Xs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}nr(t,e,n);break;case 21:nr(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,nr(t,e,n),rn=i):nr(t,e,n);break;default:nr(t,e,n)}}function Qg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new M1),e.forEach(function(i){var r=L1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xt=a.stateNode,ti=!1;break e;case 3:Xt=a.stateNode.containerInfo,ti=!0;break e;case 4:Xt=a.stateNode.containerInfo,ti=!0;break e}a=a.return}if(Xt===null)throw Error(te(160));_y(s,o,r),Xt=null,ti=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xy(e,t),e=e.sibling}function xy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),mi(t),i&4){try{aa(3,t,t.return),du(3,t)}catch(y){wt(t,t.return,y)}try{aa(5,t,t.return)}catch(y){wt(t,t.return,y)}}break;case 1:$n(e,t),mi(t),i&512&&n!==null&&Xs(n,n.return);break;case 5:if($n(e,t),mi(t),i&512&&n!==null&&Xs(n,n.return),t.flags&32){var r=t.stateNode;try{ga(r,"")}catch(y){wt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&z_(r,s),hd(a,o);var c=hd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?X_(r,d):u==="dangerouslySetInnerHTML"?W_(r,d):u==="children"?ga(r,d):vp(r,u,d,c)}switch(a){case"input":ld(r,s);break;case"textarea":H_(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Zs(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Zs(r,!!s.multiple,s.defaultValue,!0):Zs(r,!!s.multiple,s.multiple?[]:"",!1))}r[wa]=s}catch(y){wt(t,t.return,y)}}break;case 6:if($n(e,t),mi(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){wt(t,t.return,y)}}break;case 3:if($n(e,t),mi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ya(e.containerInfo)}catch(y){wt(t,t.return,y)}break;case 4:$n(e,t),mi(t);break;case 13:$n(e,t),mi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Kp=Ct())),i&4&&Qg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(c=rn)||u,$n(e,t),rn=c):$n(e,t),mi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(_e=t,u=t.child;u!==null;){for(d=_e=u;_e!==null;){switch(f=_e,p=f.child,f.tag){case 0:case 11:case 14:case 15:aa(4,f,f.return);break;case 1:Xs(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){wt(i,n,y)}}break;case 5:Xs(f,f.return);break;case 22:if(f.memoizedState!==null){e0(d);continue}}p!==null?(p.return=f,_e=p):e0(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=j_("display",o))}catch(y){wt(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){wt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:$n(e,t),mi(t),i&4&&Qg(t);break;case 21:break;default:$n(e,t),mi(t)}}function mi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vy(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ga(r,""),i.flags&=-33);var s=Zg(t);Gd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Zg(t);Hd(t,a,o);break;default:throw Error(te(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function T1(t,e,n){_e=t,yy(t)}function yy(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||pl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||rn;a=pl;var c=rn;if(pl=o,(rn=l)&&!c)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?t0(r):l!==null?(l.return=o,_e=l):t0(r);for(;s!==null;)_e=s,yy(s),s=s.sibling;_e=r,pl=a,rn=c}Jg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):Jg(t)}}function Jg(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||du(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Og(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Og(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ya(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}rn||e.flags&512&&zd(e)}catch(f){wt(e,e.return,f)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function e0(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function t0(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{du(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{zd(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{zd(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var w1=Math.ceil,Fc=Ji.ReactCurrentDispatcher,$p=Ji.ReactCurrentOwner,Hn=Ji.ReactCurrentBatchConfig,qe=0,Gt=null,It=null,Kt=0,An=0,Ys=Nr(0),Ot=0,Da=null,hs=0,hu=0,qp=0,la=null,gn=null,Kp=0,fo=1/0,Bi=null,Oc=!1,Wd=null,wr=null,ml=!1,vr=null,kc=0,ca=0,jd=null,tc=-1,nc=0;function fn(){return qe&6?Ct():tc!==-1?tc:tc=Ct()}function Ar(t){return t.mode&1?qe&2&&Kt!==0?Kt&-Kt:l1.transition!==null?(nc===0&&(nc=rx()),nc):(t=ot,t!==0||(t=window.event,t=t===void 0?16:fx(t.type)),t):1}function ai(t,e,n,i){if(50<ca)throw ca=0,jd=null,Error(te(185));Va(t,n,i),(!(qe&2)||t!==Gt)&&(t===Gt&&(!(qe&2)&&(hu|=n),Ot===4&&pr(t,Kt)),yn(t,i),n===1&&qe===0&&!(e.mode&1)&&(fo=Ct()+500,cu&&Ur()))}function yn(t,e){var n=t.callbackNode;lT(t,e);var i=Sc(t,t===Gt?Kt:0);if(i===0)n!==null&&ug(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ug(n),e===1)t.tag===0?a1(n0.bind(null,t)):Px(n0.bind(null,t)),i1(function(){!(qe&6)&&Ur()}),n=null;else{switch(sx(i)){case 1:n=Mp;break;case 4:n=nx;break;case 16:n=yc;break;case 536870912:n=ix;break;default:n=yc}n=Cy(n,Sy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Sy(t,e){if(tc=-1,nc=0,qe&6)throw Error(te(327));var n=t.callbackNode;if(no()&&t.callbackNode!==n)return null;var i=Sc(t,t===Gt?Kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Bc(t,i);else{e=i;var r=qe;qe|=2;var s=Ey();(Gt!==t||Kt!==e)&&(Bi=null,fo=Ct()+500,ss(t,e));do try{C1();break}catch(a){My(t,a)}while(!0);Up(),Fc.current=s,qe=r,It!==null?e=0:(Gt=null,Kt=0,e=Ot)}if(e!==0){if(e===2&&(r=_d(t),r!==0&&(i=r,e=Xd(t,r))),e===1)throw n=Da,ss(t,0),pr(t,i),yn(t,Ct()),n;if(e===6)pr(t,i);else{if(r=t.current.alternate,!(i&30)&&!A1(r)&&(e=Bc(t,i),e===2&&(s=_d(t),s!==0&&(i=s,e=Xd(t,s))),e===1))throw n=Da,ss(t,0),pr(t,i),yn(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Yr(t,gn,Bi);break;case 3:if(pr(t,i),(i&130023424)===i&&(e=Kp+500-Ct(),10<e)){if(Sc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ad(Yr.bind(null,t,gn,Bi),e);break}Yr(t,gn,Bi);break;case 4:if(pr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-oi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*w1(i/1960))-i,10<i){t.timeoutHandle=Ad(Yr.bind(null,t,gn,Bi),i);break}Yr(t,gn,Bi);break;case 5:Yr(t,gn,Bi);break;default:throw Error(te(329))}}}return yn(t,Ct()),t.callbackNode===n?Sy.bind(null,t):null}function Xd(t,e){var n=la;return t.current.memoizedState.isDehydrated&&(ss(t,e).flags|=256),t=Bc(t,e),t!==2&&(e=gn,gn=n,e!==null&&Yd(e)),t}function Yd(t){gn===null?gn=t:gn.push.apply(gn,t)}function A1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!di(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(t,e){for(e&=~qp,e&=~hu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-oi(e),i=1<<n;t[n]=-1,e&=~i}}function n0(t){if(qe&6)throw Error(te(327));no();var e=Sc(t,0);if(!(e&1))return yn(t,Ct()),null;var n=Bc(t,e);if(t.tag!==0&&n===2){var i=_d(t);i!==0&&(e=i,n=Xd(t,i))}if(n===1)throw n=Da,ss(t,0),pr(t,e),yn(t,Ct()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yr(t,gn,Bi),yn(t,Ct()),null}function Zp(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(fo=Ct()+500,cu&&Ur())}}function ps(t){vr!==null&&vr.tag===0&&!(qe&6)&&no();var e=qe;qe|=1;var n=Hn.transition,i=ot;try{if(Hn.transition=null,ot=1,t)return t()}finally{ot=i,Hn.transition=n,qe=e,!(qe&6)&&Ur()}}function Qp(){An=Ys.current,pt(Ys)}function ss(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,n1(n)),It!==null)for(n=It.return;n!==null;){var i=n;switch(Lp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ac();break;case 3:co(),pt(_n),pt(sn),zp();break;case 5:Vp(i);break;case 4:co();break;case 13:pt(_t);break;case 19:pt(_t);break;case 10:Fp(i.type._context);break;case 22:case 23:Qp()}n=n.return}if(Gt=t,It=t=br(t.current,null),Kt=An=e,Ot=0,Da=null,qp=hu=hs=0,gn=la=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Jr=null}return t}function My(t,e){do{var n=It;try{if(Up(),Ql.current=Uc,Nc){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Nc=!1}if(ds=0,Ht=Ft=St=null,oa=!1,Ca=0,$p.current=null,n===null||n.return===null){Ot=1,Da=e,It=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Gg(o);if(p!==null){p.flags&=-257,Wg(p,o,a,s,e),p.mode&1&&Hg(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){Hg(s,c,e),Jp();break e}l=Error(te(426))}}else if(mt&&a.mode&1){var v=Gg(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Wg(v,o,a,s,e),Ip(uo(l,a));break e}}s=l=uo(l,a),Ot!==4&&(Ot=2),la===null?la=[s]:la.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=sy(s,l,e);Fg(s,h);break e;case 1:a=l;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(wr===null||!wr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=oy(s,a,e);Fg(s,M);break e}}s=s.return}while(s!==null)}wy(n)}catch(T){e=T,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function Ey(){var t=Fc.current;return Fc.current=Uc,t===null?Uc:t}function Jp(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Gt===null||!(hs&268435455)&&!(hu&268435455)||pr(Gt,Kt)}function Bc(t,e){var n=qe;qe|=2;var i=Ey();(Gt!==t||Kt!==e)&&(Bi=null,ss(t,e));do try{b1();break}catch(r){My(t,r)}while(!0);if(Up(),qe=n,Fc.current=i,It!==null)throw Error(te(261));return Gt=null,Kt=0,Ot}function b1(){for(;It!==null;)Ty(It)}function C1(){for(;It!==null&&!JE();)Ty(It)}function Ty(t){var e=by(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?wy(t):It=e,$p.current=null}function wy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=S1(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ot=6,It=null;return}}else if(n=y1(n,e,An),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);Ot===0&&(Ot=5)}function Yr(t,e,n){var i=ot,r=Hn.transition;try{Hn.transition=null,ot=1,R1(t,e,n,i)}finally{Hn.transition=r,ot=i}return null}function R1(t,e,n,i){do no();while(vr!==null);if(qe&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(cT(t,s),t===Gt&&(It=Gt=null,Kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ml||(ml=!0,Cy(yc,function(){return no(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var o=ot;ot=1;var a=qe;qe|=4,$p.current=null,E1(t,n),xy(n,t),qT(Td),Mc=!!Ed,Td=Ed=null,t.current=n,T1(n),eT(),qe=a,ot=o,Hn.transition=s}else t.current=n;if(ml&&(ml=!1,vr=t,kc=r),s=t.pendingLanes,s===0&&(wr=null),iT(n.stateNode),yn(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Oc)throw Oc=!1,t=Wd,Wd=null,t;return kc&1&&t.tag!==0&&no(),s=t.pendingLanes,s&1?t===jd?ca++:(ca=0,jd=t):ca=0,Ur(),null}function no(){if(vr!==null){var t=sx(kc),e=Hn.transition,n=ot;try{if(Hn.transition=null,ot=16>t?16:t,vr===null)var i=!1;else{if(t=vr,vr=null,kc=0,qe&6)throw Error(te(331));var r=qe;for(qe|=4,_e=t.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(_e=c;_e!==null;){var u=_e;switch(u.tag){case 0:case 11:case 15:aa(8,u,s)}var d=u.child;if(d!==null)d.return=u,_e=d;else for(;_e!==null;){u=_e;var f=u.sibling,p=u.return;if(gy(u),u===c){_e=null;break}if(f!==null){f.return=p,_e=f;break}_e=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var v=y.sibling;y.sibling=null,y=v}while(y!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:aa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,_e=h;break e}_e=s.return}}var _=t.current;for(_e=_;_e!==null;){o=_e;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,_e=x;else e:for(o=_;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:du(9,a)}}catch(T){wt(a,a.return,T)}if(a===o){_e=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,_e=M;break e}_e=a.return}}if(qe=r,Ur(),Ti&&typeof Ti.onPostCommitFiberRoot=="function")try{Ti.onPostCommitFiberRoot(ru,t)}catch{}i=!0}return i}finally{ot=n,Hn.transition=e}}return!1}function i0(t,e,n){e=uo(n,e),e=sy(t,e,1),t=Tr(t,e,1),e=fn(),t!==null&&(Va(t,1,e),yn(t,e))}function wt(t,e,n){if(t.tag===3)i0(t,t,n);else for(;e!==null;){if(e.tag===3){i0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(wr===null||!wr.has(i))){t=uo(n,t),t=oy(e,t,1),e=Tr(e,t,1),t=fn(),e!==null&&(Va(e,1,t),yn(e,t));break}}e=e.return}}function P1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=fn(),t.pingedLanes|=t.suspendedLanes&n,Gt===t&&(Kt&n)===n&&(Ot===4||Ot===3&&(Kt&130023424)===Kt&&500>Ct()-Kp?ss(t,0):qp|=n),yn(t,e)}function Ay(t,e){e===0&&(t.mode&1?(e=sl,sl<<=1,!(sl&130023424)&&(sl=4194304)):e=1);var n=fn();t=qi(t,e),t!==null&&(Va(t,e,n),yn(t,n))}function D1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Ay(t,n)}function L1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),Ay(t,n)}var by;by=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_n.current)vn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vn=!1,x1(t,e,n);vn=!!(t.flags&131072)}else vn=!1,mt&&e.flags&1048576&&Dx(e,Rc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ec(t,e),t=e.pendingProps;var r=oo(e,sn.current);to(e,n),r=Gp(null,e,i,t,r,n);var s=Wp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,bc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,kp(e),r.updater=fu,e.stateNode=r,r._reactInternals=e,Id(e,i,t,n),e=Fd(null,e,i,!0,s,n)):(e.tag=0,mt&&s&&Dp(e),an(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ec(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=N1(i),t=ei(i,t),r){case 0:e=Ud(null,e,i,t,n);break e;case 1:e=Yg(null,e,i,t,n);break e;case 11:e=jg(null,e,i,t,n);break e;case 14:e=Xg(null,e,i,ei(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Ud(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Yg(t,e,i,r,n);case 3:e:{if(uy(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ox(t,e),Lc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=uo(Error(te(423)),e),e=$g(t,e,i,n,r);break e}else if(i!==r){r=uo(Error(te(424)),e),e=$g(t,e,i,n,r);break e}else for(bn=Er(e.stateNode.containerInfo.firstChild),Rn=e,mt=!0,ni=null,n=Ux(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ao(),i===r){e=Ki(t,e,n);break e}an(t,e,i,n)}e=e.child}return e;case 5:return kx(e),t===null&&Pd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,wd(i,r)?o=null:s!==null&&wd(i,s)&&(e.flags|=32),cy(t,e),an(t,e,o,n),e.child;case 6:return t===null&&Pd(e),null;case 13:return fy(t,e,n);case 4:return Bp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=lo(e,null,i,n):an(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),jg(t,e,i,r,n);case 7:return an(t,e,e.pendingProps,n),e.child;case 8:return an(t,e,e.pendingProps.children,n),e.child;case 12:return an(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(Pc,i._currentValue),i._currentValue=o,s!==null)if(di(s.value,o)){if(s.children===r.children&&!_n.current){e=Ki(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Dd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Dd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}an(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,to(e,n),r=jn(r),i=i(r),e.flags|=1,an(t,e,i,n),e.child;case 14:return i=e.type,r=ei(i,e.pendingProps),r=ei(i.type,r),Xg(t,e,i,r,n);case 15:return ay(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),ec(t,e),e.tag=1,xn(i)?(t=!0,bc(e)):t=!1,to(e,n),ry(e,i,r),Id(e,i,r,n),Fd(null,e,i,!0,t,n);case 19:return dy(t,e,n);case 22:return ly(t,e,n)}throw Error(te(156,e.tag))};function Cy(t,e){return tx(t,e)}function I1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new I1(t,e,n,i)}function em(t){return t=t.prototype,!(!t||!t.isReactComponent)}function N1(t){if(typeof t=="function")return em(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xp)return 11;if(t===yp)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ic(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")em(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Os:return os(n.children,r,s,e);case _p:o=8,r|=8;break;case id:return t=Bn(12,n,e,r|2),t.elementType=id,t.lanes=s,t;case rd:return t=Bn(13,n,e,r),t.elementType=rd,t.lanes=s,t;case sd:return t=Bn(19,n,e,r),t.elementType=sd,t.lanes=s,t;case k_:return pu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F_:o=10;break e;case O_:o=9;break e;case xp:o=11;break e;case yp:o=14;break e;case fr:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function os(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function pu(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=k_,t.lanes=n,t.stateNode={isHidden:!1},t}function ef(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function tf(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function U1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uu(0),this.expirationTimes=Uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function tm(t,e,n,i,r,s,o,a,l){return t=new U1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kp(s),t}function F1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ry(t){if(!t)return Rr;t=t._reactInternals;e:{if(vs(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(xn(n))return Rx(t,n,e)}return e}function Py(t,e,n,i,r,s,o,a,l){return t=tm(n,i,!0,t,r,s,o,a,l),t.context=Ry(null),n=t.current,i=fn(),r=Ar(n),s=Wi(i,r),s.callback=e??null,Tr(n,s,r),t.current.lanes=r,Va(t,r,i),yn(t,i),t}function mu(t,e,n,i){var r=e.current,s=fn(),o=Ar(r);return n=Ry(n),e.context===null?e.context=n:e.pendingContext=n,e=Wi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Tr(r,e,o),t!==null&&(ai(t,r,o,s),Zl(t,r,o)),o}function Vc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function r0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nm(t,e){r0(t,e),(t=t.alternate)&&r0(t,e)}function O1(){return null}var Dy=typeof reportError=="function"?reportError:function(t){console.error(t)};function im(t){this._internalRoot=t}gu.prototype.render=im.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));mu(t,e,null,null)};gu.prototype.unmount=im.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ps(function(){mu(null,t,null,null)}),e[$i]=null}};function gu(t){this._internalRoot=t}gu.prototype.unstable_scheduleHydration=function(t){if(t){var e=lx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hr.length&&e!==0&&e<hr[n].priority;n++);hr.splice(n,0,t),n===0&&ux(t)}};function rm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function s0(){}function k1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Vc(o);s.call(c)}}var o=Py(e,i,t,0,null,!1,!1,"",s0);return t._reactRootContainer=o,t[$i]=o.current,Ea(t.nodeType===8?t.parentNode:t),ps(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Vc(l);a.call(c)}}var l=tm(t,0,!1,null,null,!1,!1,"",s0);return t._reactRootContainer=l,t[$i]=l.current,Ea(t.nodeType===8?t.parentNode:t),ps(function(){mu(e,l,n,i)}),l}function _u(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Vc(o);a.call(l)}}mu(e,o,t,r)}else o=k1(n,e,t,r,i);return Vc(o)}ox=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qo(e.pendingLanes);n!==0&&(Ep(e,n|1),yn(e,Ct()),!(qe&6)&&(fo=Ct()+500,Ur()))}break;case 13:ps(function(){var i=qi(t,1);if(i!==null){var r=fn();ai(i,t,1,r)}}),nm(t,1)}};Tp=function(t){if(t.tag===13){var e=qi(t,134217728);if(e!==null){var n=fn();ai(e,t,134217728,n)}nm(t,134217728)}};ax=function(t){if(t.tag===13){var e=Ar(t),n=qi(t,e);if(n!==null){var i=fn();ai(n,t,e,i)}nm(t,e)}};lx=function(){return ot};cx=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};md=function(t,e,n){switch(e){case"input":if(ld(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=lu(i);if(!r)throw Error(te(90));V_(i),ld(i,r)}}}break;case"textarea":H_(t,n);break;case"select":e=n.value,e!=null&&Zs(t,!!n.multiple,e,!1)}};q_=Zp;K_=ps;var B1={usingClientEntryPoint:!1,Events:[Ha,zs,lu,Y_,$_,Zp]},Oo={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},V1={bundleType:Oo.bundleType,version:Oo.version,rendererPackageName:Oo.rendererPackageName,rendererConfig:Oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=J_(t),t===null?null:t.stateNode},findFiberByHostInstance:Oo.findFiberByHostInstance||O1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{ru=gl.inject(V1),Ti=gl}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B1;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rm(e))throw Error(te(200));return F1(t,e,null,n)};Ln.createRoot=function(t,e){if(!rm(t))throw Error(te(299));var n=!1,i="",r=Dy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=tm(t,1,!1,null,null,n,!1,i,r),t[$i]=e.current,Ea(t.nodeType===8?t.parentNode:t),new im(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=J_(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return ps(t)};Ln.hydrate=function(t,e,n){if(!vu(e))throw Error(te(200));return _u(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!rm(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Dy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Py(e,null,t,1,n??null,r,!1,s,o),t[$i]=e.current,Ea(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new gu(e)};Ln.render=function(t,e,n){if(!vu(e))throw Error(te(200));return _u(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!vu(t))throw Error(te(40));return t._reactRootContainer?(ps(function(){_u(null,null,t,!1,function(){t._reactRootContainer=null,t[$i]=null})}),!0):!1};Ln.unstable_batchedUpdates=Zp;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!vu(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return _u(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function Ly(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ly)}catch(t){console.error(t)}}Ly(),L_.exports=Ln;var z1=L_.exports,o0=z1;td.createRoot=o0.createRoot,td.hydrateRoot=o0.hydrateRoot;const Iy=de.createContext({});function H1(t){const e=de.useRef(null);return e.current===null&&(e.current=t()),e.current}const G1=typeof window<"u",W1=G1?de.useLayoutEffect:de.useEffect,sm=de.createContext(null);function om(t,e){t.indexOf(e)===-1&&t.push(e)}function zc(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Ci=(t,e,n)=>n>e?e:n<t?t:n;let am=()=>{};const Pr={},Ny=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function Uy(t){return typeof t=="object"&&t!==null}const Fy=t=>/^0[^.\s]+$/u.test(t);function Oy(t){let e;return()=>(e===void 0&&(e=t()),e)}const Gn=t=>t,j1=(t,e)=>n=>e(t(n)),Wa=(...t)=>t.reduce(j1),La=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i};class lm{constructor(){this.subscriptions=[]}add(e){return om(this.subscriptions,e),()=>zc(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Pn=t=>t*1e3,Vn=t=>t/1e3;function ky(t,e){return e?t*(1e3/e):0}const By=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,X1=1e-7,Y1=12;function $1(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=By(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>X1&&++a<Y1);return o}function ja(t,e,n,i){if(t===e&&n===i)return Gn;const r=s=>$1(s,0,1,t,n);return s=>s===0||s===1?s:By(r(s),e,i)}const Vy=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,zy=t=>e=>1-t(1-e),Hy=ja(.33,1.53,.69,.99),cm=zy(Hy),Gy=Vy(cm),Wy=t=>t>=1?1:(t*=2)<1?.5*cm(t):.5*(2-Math.pow(2,-10*(t-1))),um=t=>1-Math.sin(Math.acos(t)),jy=zy(um),Xy=Vy(um),q1=ja(.42,0,1,1),K1=ja(0,0,.58,1),Yy=ja(.42,0,.58,1),Z1=t=>Array.isArray(t)&&typeof t[0]!="number",$y=t=>Array.isArray(t)&&typeof t[0]=="number",Q1={linear:Gn,easeIn:q1,easeInOut:Yy,easeOut:K1,circIn:um,circInOut:Xy,circOut:jy,backIn:cm,backInOut:Gy,backOut:Hy,anticipate:Wy},J1=t=>typeof t=="string",a0=t=>{if($y(t)){am(t.length===4);const[e,n,i,r]=t;return ja(e,n,i,r)}else if(J1(t))return Q1[t];return t},vl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function ew(t,e){let n=new Set,i=new Set,r=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(u){o.has(u)&&(c.schedule(u),t()),u(a)}const c={schedule:(u,d=!1,f=!1)=>{const g=f&&r?n:i;return d&&o.add(u),g.add(u),u},cancel:u=>{i.delete(u),o.delete(u)},process:u=>{if(a=u,r){s=!0;return}r=!0;const d=n;n=i,i=d,n.forEach(l),n.clear(),r=!1,s&&(s=!1,c.process(u))}};return c}const tw=40;function qy(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=vl.reduce((x,M)=>(x[M]=ew(s),x),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:d,preRender:f,render:p,postRender:g}=o,y=()=>{const x=Pr.useManualTiming,M=x?r.timestamp:performance.now();n=!1,x||(r.delta=i?1e3/60:Math.max(Math.min(M-r.timestamp,tw),1)),r.timestamp=M,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),d.process(r),f.process(r),p.process(r),g.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(y))},v=()=>{n=!0,i=!0,r.isProcessing||t(y)};return{schedule:vl.reduce((x,M)=>{const T=o[M];return x[M]=(b,C=!1,S=!1)=>(n||v(),T.schedule(b,C,S)),x},{}),cancel:x=>{for(let M=0;M<vl.length;M++)o[vl[M]].cancel(x)},state:r,steps:o}}const{schedule:dt,cancel:Dr,state:Yt,steps:nf}=qy(typeof requestAnimationFrame<"u"?requestAnimationFrame:Gn,!0);let rc;function nw(){rc=void 0}const cn={now:()=>(rc===void 0&&cn.set(Yt.isProcessing||Pr.useManualTiming?Yt.timestamp:performance.now()),rc),set:t=>{rc=t,queueMicrotask(nw)}},Ky=t=>e=>typeof e=="string"&&e.startsWith(t),Zy=Ky("--"),iw=Ky("var(--"),fm=t=>iw(t)?rw.test(t.split("/*")[0].trim()):!1,rw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function l0(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Eo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ia={...Eo,transform:t=>Ci(0,1,t)},_l={...Eo,default:1},ua=t=>Math.round(t*1e5)/1e5,dm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function sw(t){return t==null}const ow=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,hm=(t,e)=>n=>!!(typeof n=="string"&&ow.test(n)&&n.startsWith(t)||e&&!sw(n)&&Object.prototype.hasOwnProperty.call(n,e)),Qy=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(dm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},aw=t=>Ci(0,255,t),rf={...Eo,transform:t=>Math.round(aw(t))},ts={test:hm("rgb","red"),parse:Qy("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+rf.transform(t)+", "+rf.transform(e)+", "+rf.transform(n)+", "+ua(Ia.transform(i))+")"};function lw(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const $d={test:hm("#"),parse:lw,transform:ts.transform},Xa=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),cr=Xa("deg"),Ai=Xa("%"),ye=Xa("px"),cw=Xa("vh"),uw=Xa("vw"),c0={...Ai,parse:t=>Ai.parse(t)/100,transform:t=>Ai.transform(t*100)},$s={test:hm("hsl","hue"),parse:Qy("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ai.transform(ua(e))+", "+Ai.transform(ua(n))+", "+ua(Ia.transform(i))+")"},Lt={test:t=>ts.test(t)||$d.test(t)||$s.test(t),parse:t=>ts.test(t)?ts.parse(t):$s.test(t)?$s.parse(t):$d.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ts.transform(t):$s.transform(t),getAnimatableNone:t=>{const e=Lt.parse(t);return e.alpha=0,Lt.transform(e)}},fw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function dw(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(dm))==null?void 0:e.length)||0)+(((n=t.match(fw))==null?void 0:n.length)||0)>0}const Jy="number",eS="color",hw="var",pw="var(",u0="${}",mw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ho(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(mw,l=>(Lt.test(l)?(i.color.push(s),r.push(eS),n.push(Lt.parse(l))):l.startsWith(pw)?(i.var.push(s),r.push(hw),n.push(l)):(i.number.push(s),r.push(Jy),n.push(parseFloat(l))),++s,u0)).split(u0);return{values:n,split:a,indexes:i,types:r}}function gw(t){return ho(t).values}function tS({split:t,types:e}){const n=t.length;return i=>{let r="";for(let s=0;s<n;s++)if(r+=t[s],i[s]!==void 0){const o=e[s];o===Jy?r+=ua(i[s]):o===eS?r+=Lt.transform(i[s]):r+=i[s]}return r}}function vw(t){return tS(ho(t))}const _w=t=>typeof t=="number"?0:Lt.test(t)?Lt.getAnimatableNone(t):t,xw=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:_w(t);function yw(t){const e=ho(t);return tS(e)(e.values.map((i,r)=>xw(i,e.split[r])))}const li={test:dw,parse:gw,createTransformer:vw,getAnimatableNone:yw};function sf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Sw({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=sf(l,a,t+1/3),s=sf(l,a,t),o=sf(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Hc(t,e){return n=>n>0?e:t}const xt=(t,e,n)=>t+(e-t)*n,of=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},Mw=[$d,ts,$s],Ew=t=>Mw.find(e=>e.test(t));function f0(t){const e=Ew(t);if(!e)return!1;let n=e.parse(t);return e===$s&&(n=Sw(n)),n}const d0=(t,e)=>{const n=f0(t),i=f0(e);if(!n||!i)return Hc(t,e);const r={...n};return s=>(r.red=of(n.red,i.red,s),r.green=of(n.green,i.green,s),r.blue=of(n.blue,i.blue,s),r.alpha=xt(n.alpha,i.alpha,s),ts.transform(r))},qd=new Set(["none","hidden"]);function Tw(t,e){return qd.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function ww(t,e){return n=>xt(t,e,n)}function pm(t){return typeof t=="number"?ww:typeof t=="string"?fm(t)?Hc:Lt.test(t)?d0:Cw:Array.isArray(t)?nS:typeof t=="object"?Lt.test(t)?d0:Aw:Hc}function nS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>pm(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function Aw(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=pm(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function bw(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}const Cw=(t,e)=>{const n=li.createTransformer(e),i=ho(t),r=ho(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?qd.has(t)&&!r.values.length||qd.has(e)&&!i.values.length?Tw(t,e):Wa(nS(bw(i,r),r.values),n):Hc(t,e)};function iS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?xt(t,e,n):pm(t)(t,e)}const Rw=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>dt.update(e,n),stop:()=>Dr(e),now:()=>Yt.isProcessing?Yt.timestamp:cn.now()}},rS=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Gc=2e4;function mm(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Gc;)e+=n,i=t.next(e);return e>=Gc?1/0:e}function Pw(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(mm(i),Gc);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:Vn(r)}}const Tt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Kd(t,e){return t*Math.sqrt(1-e*e)}const Dw=12;function Lw(t,e,n){let i=n;for(let r=1;r<Dw;r++)i=i-t(i)/e(i);return i}const af=.001;function Iw({duration:t=Tt.duration,bounce:e=Tt.bounce,velocity:n=Tt.velocity,mass:i=Tt.mass}){let r,s,o=1-e;o=Ci(Tt.minDamping,Tt.maxDamping,o),t=Ci(Tt.minDuration,Tt.maxDuration,Vn(t)),o<1?(r=c=>{const u=c*o,d=u*t,f=u-n,p=Kd(c,o),g=Math.exp(-d);return af-f/p*g},s=c=>{const d=c*o*t,f=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,g=Math.exp(-d),y=Kd(Math.pow(c,2),o);return(-r(c)+af>0?-1:1)*((f-p)*g)/y}):(r=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-af+u*d},s=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=Lw(r,s,a);if(t=Pn(t),isNaN(l))return{stiffness:Tt.stiffness,damping:Tt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const Nw=["duration","bounce"],Uw=["stiffness","damping","mass"];function h0(t,e){return e.some(n=>t[n]!==void 0)}function Fw(t){let e={velocity:Tt.velocity,stiffness:Tt.stiffness,damping:Tt.damping,mass:Tt.mass,isResolvedFromDuration:!1,...t};if(!h0(t,Uw)&&h0(t,Nw))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Ci(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:Tt.mass,stiffness:r,damping:s}}else{const n=Iw({...t,velocity:0});e={...e,...n,mass:Tt.mass},e.isResolvedFromDuration=!0}return e}function Wc(t=Tt.visualDuration,e=Tt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=Fw({...n,velocity:-Vn(n.velocity||0)}),g=f||0,y=c/(2*Math.sqrt(l*u)),v=o-s,h=Vn(Math.sqrt(l/u)),_=Math.abs(v)<5;i||(i=_?Tt.restSpeed.granular:Tt.restSpeed.default),r||(r=_?Tt.restDelta.granular:Tt.restDelta.default);let x,M,T,b,C,S;if(y<1)T=Kd(h,y),b=(g+y*h*v)/T,x=L=>{const P=Math.exp(-y*h*L);return o-P*(b*Math.sin(T*L)+v*Math.cos(T*L))},C=y*h*b+v*T,S=y*h*v-b*T,M=L=>Math.exp(-y*h*L)*(C*Math.sin(T*L)+S*Math.cos(T*L));else if(y===1){x=P=>o-Math.exp(-h*P)*(v+(g+h*v)*P);const L=g+h*v;M=P=>Math.exp(-h*P)*(h*L*P-g)}else{const L=h*Math.sqrt(y*y-1);x=W=>{const H=Math.exp(-y*h*W),B=Math.min(L*W,300);return o-H*((g+y*h*v)*Math.sinh(B)+L*v*Math.cosh(B))/L};const P=(g+y*h*v)/L,O=y*h*P-v*L,z=y*h*v-P*L;M=W=>{const H=Math.exp(-y*h*W),B=Math.min(L*W,300);return H*(O*Math.sinh(B)+z*Math.cosh(B))}}const w={calculatedDuration:p&&d||null,velocity:L=>Pn(M(L)),next:L=>{if(!p&&y<1){const O=Math.exp(-y*h*L),z=Math.sin(T*L),W=Math.cos(T*L),H=o-O*(b*z+v*W),B=Pn(O*(C*z+S*W));return a.done=Math.abs(B)<=i&&Math.abs(o-H)<=r,a.value=a.done?o:H,a}const P=x(L);if(p)a.done=L>=d;else{const O=Pn(M(L));a.done=Math.abs(O)<=i&&Math.abs(o-P)<=r}return a.value=a.done?o:P,a},toString:()=>{const L=Math.min(mm(w),Gc),P=rS(O=>w.next(L*O).value,L,30);return L+"ms "+P},toTransition:()=>{}};return w}Wc.applyToOptions=t=>{const e=Pw(t,100,Wc);return t.ease=e.ease,t.duration=Pn(e.duration),t.type="keyframes",t};const Ow=5;function sS(t,e,n){const i=Math.max(e-Ow,0);return ky(n-t(i),e-i)}function Zd({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],f={done:!1,value:d},p=S=>a!==void 0&&S<a||l!==void 0&&S>l,g=S=>a===void 0?l:l===void 0||Math.abs(a-S)<Math.abs(l-S)?a:l;let y=n*e;const v=d+y,h=o===void 0?v:o(v);h!==v&&(y=h-d);const _=S=>-y*Math.exp(-S/i),x=S=>h+_(S),M=S=>{const w=_(S),L=x(S);f.done=Math.abs(w)<=c,f.value=f.done?h:L};let T,b;const C=S=>{p(f.value)&&(T=S,b=Wc({keyframes:[f.value,g(f.value)],velocity:sS(x,S,f.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return C(0),{calculatedDuration:null,next:S=>{let w=!1;return!b&&T===void 0&&(w=!0,M(S),C(S)),T!==void 0&&S>=T?b.next(S-T):(!w&&M(S),f)}}}function kw(t,e,n){const i=[],r=n||Pr.mix||iS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Gn:e;a=Wa(l,a)}i.push(a)}return i}function Bw(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(am(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=kw(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const f=La(t[d],t[d+1],u);return a[d](f)};return n?u=>c(Ci(t[0],t[s-1],u)):c}function Vw(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=La(0,e,i);t.push(xt(n,1,r))}}function zw(t){const e=[0];return Vw(e,t.length-1),e}function Hw(t,e){return t.map(n=>n*e)}function Gw(t,e){return t.map(()=>e||Yy).splice(0,t.length-1)}function fa({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=Z1(i)?i.map(a0):a0(i),s={done:!1,value:e[0]},o=Hw(n&&n.length===e.length?n:zw(e),t),a=Bw(o,e,{ease:Array.isArray(r)?r:Gw(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const Ww=t=>t!==null;function xu(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter(Ww),a=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}const jw={decay:Zd,inertia:Zd,tween:fa,keyframes:fa,spring:Wc};function oS(t){typeof t.type=="string"&&(t.type=jw[t.type])}class gm{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const Xw=t=>t/100;class jc extends gm{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==cn.now()&&this.tick(cn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;oS(e);const{type:n=fa,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=n||fa;l!==fa&&typeof a[0]!="number"&&(this.mixKeyframes=Wa(Xw,iS(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=mm(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:u,repeat:d,repeatType:f,repeatDelay:p,type:g,onUpdate:y,finalKeyframe:v}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const h=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?h<0:h>r;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let x=this.currentTime,M=i;if(d){const S=Math.min(this.currentTime,r)/a;let w=Math.floor(S),L=S%1;!L&&S>=1&&(L=1),L===1&&w--,w=Math.min(w,d+1),!!(w%2)&&(f==="reverse"?(L=1-L,p&&(L-=p/a)):f==="mirror"&&(M=o)),x=Ci(0,1,L)*a}let T;_?(this.delayState.value=u[0],T=this.delayState):T=M.next(x),s&&!_&&(T.value=s(T.value));let{done:b}=T;!_&&l!==null&&(b=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&b);return C&&g!==Zd&&(T.value=xu(u,this.options,v,this.speed)),y&&y(T.value),C&&this.finish(),T}then(e,n){return this.finished.then(e,n)}get duration(){return Vn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Vn(e)}get time(){return Vn(this.currentTime)}set time(e){e=Pn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return sS(i=>this.generator.next(i).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(cn.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=Vn(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:e=Rw,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(cn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function Yw(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const ns=t=>t*180/Math.PI,Qd=t=>{const e=ns(Math.atan2(t[1],t[0]));return Jd(e)},$w={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Qd,rotateZ:Qd,skewX:t=>ns(Math.atan(t[1])),skewY:t=>ns(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Jd=t=>(t=t%360,t<0&&(t+=360),t),p0=Qd,m0=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),g0=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),qw={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:m0,scaleY:g0,scale:t=>(m0(t)+g0(t))/2,rotateX:t=>Jd(ns(Math.atan2(t[6],t[5]))),rotateY:t=>Jd(ns(Math.atan2(-t[2],t[0]))),rotateZ:p0,rotate:p0,skewX:t=>ns(Math.atan(t[4])),skewY:t=>ns(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function eh(t){return t.includes("scale")?1:0}function th(t,e){if(!t||t==="none")return eh(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=qw,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=$w,r=a}if(!r)return eh(e);const s=i[e],o=r[1].split(",").map(Zw);return typeof s=="function"?s(o):o[s]}const Kw=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return th(n,e)};function Zw(t){return parseFloat(t.trim())}const To=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],wo=new Set(To),v0=t=>t===Eo||t===ye,Qw=new Set(["x","y","z"]),Jw=To.filter(t=>!Qw.has(t));function eA(t){const e=[];return Jw.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const _r={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:i})=>{const r=t.max-t.min;return i==="border-box"?r:r-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>th(e,"x"),y:(t,{transform:e})=>th(e,"y")};_r.translateX=_r.x;_r.translateY=_r.y;const as=new Set;let nh=!1,ih=!1,rh=!1;function aS(){if(ih){const t=Array.from(as).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=eA(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))==null||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}ih=!1,nh=!1,as.forEach(t=>t.complete(rh)),as.clear()}function lS(){as.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(ih=!0)})}function tA(){rh=!0,lS(),aS(),rh=!1}class vm{constructor(e,n,i,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(as.add(this),nh||(nh=!0,dt.read(lS),dt.resolveKeyframes(aS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r==null?void 0:r.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const a=i.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}Yw(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),as.delete(this)}cancel(){this.state==="scheduled"&&(as.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const nA=t=>t.startsWith("--");function cS(t,e,n){nA(e)?t.style.setProperty(e,n):t.style[e]=n}const iA={};function uS(t,e){const n=Oy(t);return()=>iA[e]??n()}const rA=uS(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),fS=uS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Zo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,_0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Zo([0,.65,.55,1]),circOut:Zo([.55,0,1,.45]),backIn:Zo([.31,.01,.66,-.59]),backOut:Zo([.33,1.53,.69,.99])};function dS(t,e){if(t)return typeof t=="function"?fS()?rS(t,e):"ease-out":$y(t)?Zo(t):Array.isArray(t)?t.map(n=>dS(n,e)||_0.easeOut):_0[t]}function sA(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[e]:n};l&&(u.offset=l);const d=dS(a,r);Array.isArray(d)&&(u.easing=d);const f={delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(f.pseudoElement=c),t.animate(u,f)}function hS(t){return typeof t=="function"&&"applyToOptions"in t}function oA({type:t,...e}){return hS(t)&&fS()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class pS extends gm{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,am(typeof e.type!="string");const c=oA(e);this.animation=sA(n,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const u=xu(r,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(u),cS(n,i,u),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,i,r;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((r=(i=this.animation).commitStyles)==null||r.call(i))}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return Vn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Vn(e)}get time(){return Vn(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Pn(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:i,observe:r}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&rA()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),i&&(this.animation.rangeEnd=i),Gn):r(this)}}const mS={anticipate:Wy,backInOut:Gy,circInOut:Xy};function aA(t){return t in mS}function lA(t){typeof t.ease=="string"&&aA(t.ease)&&(t.ease=mS[t.ease])}const lf=10;class cA extends pS{constructor(e){lA(e),oS(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new jc({...o,autoplay:!1}),l=Math.max(lf,cn.now()-this.startTime),c=Ci(0,lf,l-lf),u=a.sample(l).value,{name:d}=this.options;s&&d&&cS(s,d,u),n.setWithVelocity(a.sample(Math.max(0,l-c)).value,u,c),a.stop()}}const x0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(li.test(t)||t==="0")&&!t.startsWith("url("));function uA(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function fA(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=x0(r,e),a=x0(s,e);return!o||!a?!1:uA(t)||(n==="spring"||hS(n))&&i}function sh(t){t.duration=0,t.type="keyframes"}const gS=new Set(["opacity","clipPath","filter","transform"]),dA=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function hA(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&dA.test(t[e]))return!0;return!1}const pA=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),mA=Oy(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function gA(t){var d;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:o,keyframes:a}=t;if(!(((d=e==null?void 0:e.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=e.owner.getProps();return mA()&&n&&(gS.has(n)||pA.has(n)&&hA(a))&&(n!=="transform"||!u)&&!c&&!i&&r!=="mirror"&&s!==0&&o!=="inertia"}const vA=40;class _A extends gm{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:u,...d}){var g;super(),this.stop=()=>{var y,v;this._animation&&(this._animation.stop(),(y=this.stopTimeline)==null||y.call(this)),(v=this.keyframeResolver)==null||v.cancel()},this.createdAt=cn.now();const f={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:c,element:u,...d},p=(u==null?void 0:u.KeyframeResolver)||vm;this.keyframeResolver=new p(a,(y,v,h)=>this.onKeyframesResolved(y,v,f,!h),l,c,u),(g=this.keyframeResolver)==null||g.scheduleResolve()}onKeyframesResolved(e,n,i,r){var h,_;this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:u}=i;this.resolvedAt=cn.now();let d=!0;fA(e,s,o,a)||(d=!1,(Pr.instantAnimations||!l)&&(u==null||u(xu(e,i,n))),e[0]=e[e.length-1],sh(i),i.repeat=0);const p={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>vA?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},g=d&&!c&&gA(p),y=(_=(h=p.motionValue)==null?void 0:h.owner)==null?void 0:_.current;let v;if(g)try{v=new cA({...p,element:y})}catch{v=new jc(p)}else v=new jc(p);v.finished.then(()=>{this.notifyFinished()}).catch(Gn),this.pendingTimeline&&(this.stopTimeline=v.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=v}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),tA()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function vS(t,e,n,i=0,r=1){const s=Array.from(t).sort((c,u)=>c.sortNodePosition(u)).indexOf(e),o=t.size,a=(o-1)*i;return typeof n=="function"?n(s,o):r===1?s*i:a-s*i}const xA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function yA(t){const e=xA.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function _S(t,e,n=1){const[i,r]=yA(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return Ny(o)?parseFloat(o):o}return fm(r)?_S(r,e,n+1):r}const SA={type:"spring",stiffness:500,damping:25,restSpeed:10},MA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),EA={type:"keyframes",duration:.8},TA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},wA=(t,{keyframes:e})=>e.length>2?EA:wo.has(t)?t.startsWith("scale")?MA(e[1]):SA:TA;function xS(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...i}=t;return{...e,...i}}return t}function _m(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?xS(n,t):n}const AA=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function bA(t){for(const e in t)if(!AA.has(e))return!0;return!1}const xm=(t,e,n,i={},r,s)=>o=>{const a=_m(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Pn(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};bA(a)||Object.assign(u,wA(t,u)),u.duration&&(u.duration=Pn(u.duration)),u.repeatDelay&&(u.repeatDelay=Pn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(sh(u),u.delay===0&&(d=!0)),(Pr.instantAnimations||Pr.skipAnimations||r!=null&&r.shouldSkipAnimations)&&(d=!0,sh(u),u.delay=0),u.allowFlatten=!a.type&&!a.ease,d&&!s&&e.get()!==void 0){const f=xu(u.keyframes,a);if(f!==void 0){dt.update(()=>{u.onUpdate(f),u.onComplete()});return}}return a.isSync?new jc(u):new _A(u)};function y0(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function ym(t,e,n,i){if(typeof e=="function"){const[r,s]=y0(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=y0(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function ls(t,e,n){const i=t.getProps();return ym(i,e,n!==void 0?n:i.custom,t)}const yS=new Set(["width","height","top","left","right","bottom",...To]),S0=30,CA=t=>!isNaN(parseFloat(t));class RA{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var s;const r=cn.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=cn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=CA(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new lm);const i=this.events[e].add(n);return e==="change"?()=>{i(),dt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=cn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>S0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,S0);return ky(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function po(t,e){return new RA(t,e)}const oh=t=>Array.isArray(t);function PA(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,po(n))}function DA(t){return oh(t)?t[t.length-1]||0:t}function LA(t,e){const n=ls(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=DA(s[o]);PA(t,o,a)}}const $t=t=>!!(t&&t.getVelocity);function IA(t){return!!($t(t)&&t.add)}function ah(t,e){const n=t.getValue("willChange");if(IA(n))return n.add(e);if(!n&&Pr.WillChange){const i=new Pr.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function Sm(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const NA="framerAppearId",SS="data-"+Sm(NA);function MS(t){return t.props[SS]}function UA({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function ES(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s,transitionEnd:o,...a}=e;const l=t.getDefaultTransition();s=s?xS(s,l):l;const c=s==null?void 0:s.reduceMotion;i&&(s=i);const u=[],d=r&&t.animationState&&t.animationState.getState()[r];for(const f in a){const p=t.getValue(f,t.latestValues[f]??null),g=a[f];if(g===void 0||d&&UA(d,f))continue;const y={delay:n,..._m(s||{},f)},v=p.get();if(v!==void 0&&!p.isAnimating&&!Array.isArray(g)&&g===v&&!y.velocity)continue;let h=!1;if(window.MotionHandoffAnimation){const M=MS(t);if(M){const T=window.MotionHandoffAnimation(M,f,dt);T!==null&&(y.startTime=T,h=!0)}}ah(t,f);const _=c??t.shouldReduceMotion;p.start(xm(f,p,g,_&&yS.has(f)?{type:!1}:y,t,h));const x=p.animation;x&&u.push(x)}if(o){const f=()=>dt.update(()=>{o&&LA(t,o)});u.length?Promise.all(u).then(f):f()}return u}function lh(t,e,n={}){var l;const i=ls(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(ES(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=r;return FA(t,e,c,u,d,f,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[c,u]=a==="beforeChildren"?[s,o]:[o,s];return c().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function FA(t,e,n=0,i=0,r=0,s=1,o){const a=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),a.push(lh(l,e,{...o,delay:n+(typeof i=="function"?0:i)+vS(t.variantChildren,l,i,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function OA(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>lh(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=lh(t,e,n);else{const r=typeof e=="function"?ls(t,e,n.custom):e;i=Promise.all(ES(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const kA={test:t=>t==="auto",parse:t=>t},TS=t=>e=>e.test(t),wS=[Eo,ye,Ai,cr,uw,cw,kA],M0=t=>wS.find(TS(t));function BA(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Fy(t):!0}const VA=new Set(["brightness","contrast","saturate","opacity"]);function zA(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(dm)||[];if(!i)return t;const r=n.replace(i,"");let s=VA.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const HA=/\b([a-z-]*)\(.*?\)/gu,ch={...li,getAnimatableNone:t=>{const e=t.match(HA);return e?e.map(zA).join(" "):t}},uh={...li,getAnimatableNone:t=>{const e=li.parse(t);return li.createTransformer(t)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},E0={...Eo,transform:Math.round},GA={rotate:cr,rotateX:cr,rotateY:cr,rotateZ:cr,scale:_l,scaleX:_l,scaleY:_l,scaleZ:_l,skew:cr,skewX:cr,skewY:cr,distance:ye,translateX:ye,translateY:ye,translateZ:ye,x:ye,y:ye,z:ye,perspective:ye,transformPerspective:ye,opacity:Ia,originX:c0,originY:c0,originZ:ye},Mm={borderWidth:ye,borderTopWidth:ye,borderRightWidth:ye,borderBottomWidth:ye,borderLeftWidth:ye,borderRadius:ye,borderTopLeftRadius:ye,borderTopRightRadius:ye,borderBottomRightRadius:ye,borderBottomLeftRadius:ye,width:ye,maxWidth:ye,height:ye,maxHeight:ye,top:ye,right:ye,bottom:ye,left:ye,inset:ye,insetBlock:ye,insetBlockStart:ye,insetBlockEnd:ye,insetInline:ye,insetInlineStart:ye,insetInlineEnd:ye,padding:ye,paddingTop:ye,paddingRight:ye,paddingBottom:ye,paddingLeft:ye,paddingBlock:ye,paddingBlockStart:ye,paddingBlockEnd:ye,paddingInline:ye,paddingInlineStart:ye,paddingInlineEnd:ye,margin:ye,marginTop:ye,marginRight:ye,marginBottom:ye,marginLeft:ye,marginBlock:ye,marginBlockStart:ye,marginBlockEnd:ye,marginInline:ye,marginInlineStart:ye,marginInlineEnd:ye,fontSize:ye,backgroundPositionX:ye,backgroundPositionY:ye,...GA,zIndex:E0,fillOpacity:Ia,strokeOpacity:Ia,numOctaves:E0},WA={...Mm,color:Lt,backgroundColor:Lt,outlineColor:Lt,fill:Lt,stroke:Lt,borderColor:Lt,borderTopColor:Lt,borderRightColor:Lt,borderBottomColor:Lt,borderLeftColor:Lt,filter:ch,WebkitFilter:ch,mask:uh,WebkitMask:uh},AS=t=>WA[t],jA=new Set([ch,uh]);function bS(t,e){let n=AS(t);return jA.has(n)||(n=li),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const XA=new Set(["auto","none","0"]);function YA(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!XA.has(s)&&ho(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=bS(n,r)}class $A extends vm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<e.length;u++){let d=e[u];if(typeof d=="string"&&(d=d.trim(),fm(d))){const f=_S(d,n.current);f!==void 0&&(e[u]=f),u===e.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!yS.has(i)||e.length!==2)return;const[r,s]=e,o=M0(r),a=M0(s),l=l0(r),c=l0(s);if(l!==c&&_r[i]){this.needsMeasurement=!0;return}if(o!==a)if(v0(o)&&v0(a))for(let u=0;u<e.length;u++){const d=e[u];typeof d=="string"&&(e[u]=parseFloat(d))}else _r[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||BA(e[r]))&&i.push(r);i.length&&YA(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=_r[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const s=i.length-1,o=i[s];i[s]=_r[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function CS(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let i=document;const r=(n==null?void 0:n[t])??i.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(i=>i!=null)}const RS=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function qA(t){return Uy(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Em}=qy(queueMicrotask,!1),Jn={x:!1,y:!1};function PS(){return Jn.x||Jn.y}function KA(t){return t==="x"||t==="y"?Jn[t]?null:(Jn[t]=!0,()=>{Jn[t]=!1}):Jn.x||Jn.y?null:(Jn.x=Jn.y=!0,()=>{Jn.x=Jn.y=!1})}function DS(t,e){const n=CS(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function ZA(t){return!(t.pointerType==="touch"||PS())}function QA(t,e,n={}){const[i,r,s]=DS(t,n);return i.forEach(o=>{let a=!1,l=!1,c;const u=()=>{o.removeEventListener("pointerleave",g)},d=v=>{c&&(c(v),c=void 0),u()},f=v=>{a=!1,window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f),l&&(l=!1,d(v))},p=()=>{a=!0,window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",f,r)},g=v=>{if(v.pointerType!=="touch"){if(a){l=!0;return}d(v)}},y=v=>{if(!ZA(v))return;l=!1;const h=e(o,v);typeof h=="function"&&(c=h,o.addEventListener("pointerleave",g,r))};o.addEventListener("pointerenter",y,r),o.addEventListener("pointerdown",p,r)}),s}const LS=(t,e)=>e?t===e?!0:LS(t,e.parentElement):!1,Tm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,JA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function eb(t){return JA.has(t.tagName)||t.isContentEditable===!0}const tb=new Set(["INPUT","SELECT","TEXTAREA"]);function nb(t){return tb.has(t.tagName)||t.isContentEditable===!0}const sc=new WeakSet;function T0(t){return e=>{e.key==="Enter"&&t(e)}}function cf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const ib=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=T0(()=>{if(sc.has(n))return;cf(n,"down");const r=T0(()=>{cf(n,"up")}),s=()=>cf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function w0(t){return Tm(t)&&!PS()}const A0=new WeakSet;function rb(t,e,n={}){const[i,r,s]=DS(t,n),o=a=>{const l=a.currentTarget;if(!w0(a)||A0.has(a))return;sc.add(l),n.stopPropagation&&A0.add(a);const c=e(l,a),u=(p,g)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",f),sc.has(l)&&sc.delete(l),w0(p)&&typeof c=="function"&&c(p,{success:g})},d=p=>{u(p,l===window||l===document||n.useGlobalTarget||LS(l,p.target))},f=p=>{u(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",f,r)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),qA(a)&&(a.addEventListener("focus",c=>ib(c,r)),!eb(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function wm(t){return Uy(t)&&"ownerSVGElement"in t}const oc=new WeakMap;let ur;const IS=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:wm(i)&&"getBBox"in i?i.getBBox()[e]:i[n],sb=IS("inline","width","offsetWidth"),ob=IS("block","height","offsetHeight");function ab({target:t,borderBoxSize:e}){var n;(n=oc.get(t))==null||n.forEach(i=>{i(t,{get width(){return sb(t,e)},get height(){return ob(t,e)}})})}function lb(t){t.forEach(ab)}function cb(){typeof ResizeObserver>"u"||(ur=new ResizeObserver(lb))}function ub(t,e){ur||cb();const n=CS(t);return n.forEach(i=>{let r=oc.get(i);r||(r=new Set,oc.set(i,r)),r.add(e),ur==null||ur.observe(i)}),()=>{n.forEach(i=>{const r=oc.get(i);r==null||r.delete(e),r!=null&&r.size||ur==null||ur.unobserve(i)})}}const ac=new Set;let qs;function fb(){qs=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};ac.forEach(e=>e(t))},window.addEventListener("resize",qs)}function db(t){return ac.add(t),qs||fb(),()=>{ac.delete(t),!ac.size&&typeof qs=="function"&&(window.removeEventListener("resize",qs),qs=void 0)}}function b0(t,e){return typeof t=="function"?db(t):ub(t,e)}function hb(t){return wm(t)&&t.tagName==="svg"}const pb=[...wS,Lt,li],mb=t=>pb.find(TS(t)),C0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ks=()=>({x:C0(),y:C0()}),R0=()=>({min:0,max:0}),Ut=()=>({x:R0(),y:R0()}),gb=new WeakMap;function yu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Na(t){return typeof t=="string"||Array.isArray(t)}const Am=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],bm=["initial",...Am];function Su(t){return yu(t.animate)||bm.some(e=>Na(t[e]))}function NS(t){return!!(Su(t)||t.variants)}function vb(t,e,n){for(const i in e){const r=e[i],s=n[i];if($t(r))t.addValue(i,r);else if($t(s))t.addValue(i,po(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,po(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const fh={current:null},US={current:!1},_b=typeof window<"u";function xb(){if(US.current=!0,!!_b)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>fh.current=t.matches;t.addEventListener("change",e),e()}else fh.current=!1}const P0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Xc={};function FS(t){Xc=t}function yb(){return Xc}class Sb{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=vm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=cn.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,dt.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Su(n),this.isVariantNode=NS(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const g=f[p];c[p]!==void 0&&$t(g)&&g.set(c[p])}}mount(e){var n,i;if(this.hasBeenMounted)for(const r in this.initialValues)(n=this.values.get(r))==null||n.jump(this.initialValues[r]),this.latestValues[r]=this.initialValues[r];this.current=e,gb.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(US.current||xb(),this.shouldReduceMotion=fh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Dr(this.notifyUpdate),Dr(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&gS.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:c,duration:u}=n.accelerate,d=new pS({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:Pn(u)}),f=o(d);this.valueSubscriptions.set(e,()=>{f(),d.cancel()});return}const i=wo.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&dt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Xc){const n=Xc[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ut()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<P0.length;i++){const r=P0[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=vb(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=po(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(Ny(i)||Fy(i))?i=parseFloat(i):!mb(i)&&li.test(n)&&(i=bS(e,n)),this.setBaseTarget(e,$t(i)?i.get():i)),$t(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const o=ym(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(i=o[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!$t(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new lm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Em.render(this.render)}}class OS extends Sb{constructor(){super(...arguments),this.KeyframeResolver=$A}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const i=e.style;return i?i[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;$t(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Fr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function kS({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function Mb({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function Eb(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function uf(t){return t===void 0||t===1}function dh({scale:t,scaleX:e,scaleY:n}){return!uf(t)||!uf(e)||!uf(n)}function $r(t){return dh(t)||BS(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function BS(t){return D0(t.x)||D0(t.y)}function D0(t){return t&&t!=="0%"}function Yc(t,e,n){const i=t-n,r=e*i;return n+r}function L0(t,e,n,i,r){return r!==void 0&&(t=Yc(t,r,i)),Yc(t,n,i)+e}function hh(t,e=0,n=1,i,r){t.min=L0(t.min,e,n,i,r),t.max=L0(t.max,e,n,i,r)}function VS(t,{x:e,y:n}){hh(t.x,e.translate,e.scale,e.originPoint),hh(t.y,n.translate,n.scale,n.originPoint)}const I0=.999999999999,N0=1.0000000000001;function Tb(t,e,n,i=!1){var a;const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let l=0;l<r;l++){s=n[l],o=s.projectionDelta;const{visualElement:c}=s.options;c&&c.props.style&&c.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(yi(t.x,-s.scroll.offset.x),yi(t.y,-s.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,VS(t,o)),i&&$r(s.latestValues)&&lc(t,s.latestValues,(a=s.layout)==null?void 0:a.layoutBox))}e.x<N0&&e.x>I0&&(e.x=1),e.y<N0&&e.y>I0&&(e.y=1)}function yi(t,e){t.min+=e,t.max+=e}function U0(t,e,n,i,r=.5){const s=xt(t.min,t.max,r);hh(t,e,n,s,i)}function F0(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function lc(t,e,n){const i=n??t;U0(t.x,F0(e.x,i.x),e.scaleX,e.scale,e.originX),U0(t.y,F0(e.y,i.y),e.scaleY,e.scale,e.originY)}function zS(t,e){return kS(Eb(t.getBoundingClientRect(),e))}function wb(t,e,n){const i=zS(t,n),{scroll:r}=e;return r&&(yi(i.x,r.offset.x),yi(i.y,r.offset.y)),i}const Ab={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},bb=To.length;function Cb(t,e,n){let i="",r=!0;for(let s=0;s<bb;s++){const o=To[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number")l=a===(o.startsWith("scale")?1:0);else{const c=parseFloat(a);l=o.startsWith("scale")?c===1:c===0}if(!l||n){const c=RS(a,Mm[o]);if(!l){r=!1;const u=Ab[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Cm(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(wo.has(l)){o=!0;continue}else if(Zy(l)){r[l]=c;continue}else{const u=RS(c,Mm[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=Cb(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}function HS(t,{style:e,vars:n},i,r){const s=t.style;let o;for(o in e)s[o]=e[o];r==null||r.applyProjectionStyles(s,i);for(o in n)s.setProperty(o,n[o])}function O0(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const ko={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(ye.test(t))t=parseFloat(t);else return t;const n=O0(t,e.target.x),i=O0(t,e.target.y);return`${n}% ${i}%`}},Rb={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=li.parse(t);if(r.length>5)return i;const s=li.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=xt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}},ph={borderRadius:{...ko,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ko,borderTopRightRadius:ko,borderBottomLeftRadius:ko,borderBottomRightRadius:ko,boxShadow:Rb};function GS(t,{layout:e,layoutId:n}){return wo.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!ph[t]||t==="opacity")}function Rm(t,e,n){var o;const i=t.style,r=e==null?void 0:e.style,s={};if(!i)return s;for(const a in i)($t(i[a])||r&&$t(r[a])||GS(a,t)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function Pb(t){return window.getComputedStyle(t)}class Db extends OS{constructor(){super(...arguments),this.type="html",this.renderInstance=HS}readValueFromInstance(e,n){var i;if(wo.has(n))return(i=this.projection)!=null&&i.isProjecting?eh(n):Kw(e,n);{const r=Pb(e),s=(Zy(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return zS(e,n)}build(e,n,i){Cm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Rm(e,n,i)}}const Lb={offset:"stroke-dashoffset",array:"stroke-dasharray"},Ib={offset:"strokeDashoffset",array:"strokeDasharray"};function Nb(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?Lb:Ib;t[s.offset]=`${-i}`,t[s.array]=`${e} ${n}`}const Ub=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function WS(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,c,u){if(Cm(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:f}=t;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),f.transform&&(f.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete d.transformBox);for(const p of Ub)d[p]!==void 0&&(f[p]=d[p],delete d[p]);e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),r!==void 0&&Nb(d,r,s,o,!1)}const jS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),XS=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Fb(t,e,n,i){HS(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(jS.has(r)?r:Sm(r),e.attrs[r])}function YS(t,e,n){const i=Rm(t,e,n);for(const r in t)if($t(t[r])||$t(e[r])){const s=To.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}class Ob extends OS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ut}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(wo.has(n)){const i=AS(n);return i&&i.default||0}return n=jS.has(n)?n:Sm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return YS(e,n,i)}build(e,n,i){WS(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){Fb(e,n,i,r)}mount(e){this.isSVGTag=XS(e.tagName),super.mount(e)}}const kb=bm.length;function $S(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?$S(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<kb;n++){const i=bm[n],r=t.props[i];(Na(r)||r===!1)&&(e[i]=r)}return e}function qS(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const Bb=[...Am].reverse(),Vb=Am.length;function zb(t){return e=>Promise.all(e.map(({animation:n,options:i})=>OA(t,n,i)))}function Hb(t){let e=zb(t),n=k0(),i=!0,r=!1;const s=c=>(u,d)=>{var p;const f=ls(t,d,c==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);if(f){const{transition:g,transitionEnd:y,...v}=f;u={...u,...v,...y}}return u};function o(c){e=c(t)}function a(c){const{props:u}=t,d=$S(t.parent)||{},f=[],p=new Set;let g={},y=1/0;for(let h=0;h<Vb;h++){const _=Bb[h],x=n[_],M=u[_]!==void 0?u[_]:d[_],T=Na(M),b=_===c?x.isActive:null;b===!1&&(y=h);let C=M===d[_]&&M!==u[_]&&T;if(C&&(i||r)&&t.manuallyAnimateOnMount&&(C=!1),x.protectedKeys={...g},!x.isActive&&b===null||!M&&!x.prevProp||yu(M)||typeof M=="boolean")continue;if(_==="exit"&&x.isActive&&b!==!0){x.prevResolvedValues&&(g={...g,...x.prevResolvedValues});continue}const S=Gb(x.prevProp,M);let w=S||_===c&&x.isActive&&!C&&T||h>y&&T,L=!1;const P=Array.isArray(M)?M:[M];let O=P.reduce(s(_),{});b===!1&&(O={});const{prevResolvedValues:z={}}=x,W={...z,...O},H=N=>{w=!0,p.has(N)&&(L=!0,p.delete(N)),x.needsAnimating[N]=!0;const Y=t.getValue(N);Y&&(Y.liveStyle=!1)};for(const N in W){const Y=O[N],J=z[N];if(g.hasOwnProperty(N))continue;let ee=!1;oh(Y)&&oh(J)?ee=!qS(Y,J):ee=Y!==J,ee?Y!=null?H(N):p.add(N):Y!==void 0&&p.has(N)?H(N):x.protectedKeys[N]=!0}x.prevProp=M,x.prevResolvedValues=O,x.isActive&&(g={...g,...O}),(i||r)&&t.blockInitialAnimation&&(w=!1);const B=C&&S;w&&(!B||L)&&f.push(...P.map(N=>{const Y={type:_};if(typeof N=="string"&&(i||r)&&!B&&t.manuallyAnimateOnMount&&t.parent){const{parent:J}=t,ee=ls(J,N);if(J.enteringChildren&&ee){const{delayChildren:re}=ee.transition||{};Y.delay=vS(J.enteringChildren,t,re)}}return{animation:N,options:Y}}))}if(p.size){const h={};if(typeof u.initial!="boolean"){const _=ls(t,Array.isArray(u.initial)?u.initial[0]:u.initial);_&&_.transition&&(h.transition=_.transition)}p.forEach(_=>{const x=t.getBaseTarget(_),M=t.getValue(_);M&&(M.liveStyle=!0),h[_]=x??null}),f.push({animation:h})}let v=!!f.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(v=!1),i=!1,r=!1,v?e(f):Promise.resolve()}function l(c,u){var f;if(n[c].isActive===u)return Promise.resolve();(f=t.variantChildren)==null||f.forEach(p=>{var g;return(g=p.animationState)==null?void 0:g.setActive(c,u)}),n[c].isActive=u;const d=a(c);for(const p in n)n[p].protectedKeys={};return d}return{animateChanges:a,setActive:l,setAnimateFunction:o,getState:()=>n,reset:()=>{n=k0(),r=!0}}}function Gb(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!qS(e,t):!1}function Br(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function k0(){return{animate:Br(!0),whileInView:Br(),whileHover:Br(),whileTap:Br(),whileDrag:Br(),whileFocus:Br(),exit:Br()}}function mh(t,e){t.min=e.min,t.max=e.max}function qn(t,e){mh(t.x,e.x),mh(t.y,e.y)}function B0(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const KS=1e-4,Wb=1-KS,jb=1+KS,ZS=.01,Xb=0-ZS,Yb=0+ZS;function un(t){return t.max-t.min}function $b(t,e,n){return Math.abs(t-e)<=n}function V0(t,e,n,i=.5){t.origin=i,t.originPoint=xt(e.min,e.max,t.origin),t.scale=un(n)/un(e),t.translate=xt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=Wb&&t.scale<=jb||isNaN(t.scale))&&(t.scale=1),(t.translate>=Xb&&t.translate<=Yb||isNaN(t.translate))&&(t.translate=0)}function da(t,e,n,i){V0(t.x,e.x,n.x,i?i.originX:void 0),V0(t.y,e.y,n.y,i?i.originY:void 0)}function z0(t,e,n){t.min=n.min+e.min,t.max=t.min+un(e)}function qb(t,e,n){z0(t.x,e.x,n.x),z0(t.y,e.y,n.y)}function H0(t,e,n){t.min=e.min-n.min,t.max=t.min+un(e)}function $c(t,e,n){H0(t.x,e.x,n.x),H0(t.y,e.y,n.y)}function G0(t,e,n,i,r){return t-=e,t=Yc(t,1/n,i),r!==void 0&&(t=Yc(t,1/r,i)),t}function Kb(t,e=0,n=1,i=.5,r,s=t,o=t){if(Ai.test(e)&&(e=parseFloat(e),e=xt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=xt(s.min,s.max,i);t===s&&(a-=e),t.min=G0(t.min,e,n,a,r),t.max=G0(t.max,e,n,a,r)}function W0(t,e,[n,i,r],s,o){Kb(t,e[n],e[i],e[r],e.scale,s,o)}const Zb=["x","scaleX","originX"],Qb=["y","scaleY","originY"];function j0(t,e,n,i){W0(t.x,e,Zb,n?n.x:void 0,i?i.x:void 0),W0(t.y,e,Qb,n?n.y:void 0,i?i.y:void 0)}function X0(t){return t.translate===0&&t.scale===1}function QS(t){return X0(t.x)&&X0(t.y)}function Y0(t,e){return t.min===e.min&&t.max===e.max}function Jb(t,e){return Y0(t.x,e.x)&&Y0(t.y,e.y)}function $0(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function JS(t,e){return $0(t.x,e.x)&&$0(t.y,e.y)}function q0(t){return un(t.x)/un(t.y)}function K0(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function xi(t){return[t("x"),t("y")]}function eC(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:f,skewX:p,skewY:g}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotateX(${d}deg) `),f&&(i+=`rotateY(${f}deg) `),p&&(i+=`skewX(${p}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const eM=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],tC=eM.length,Z0=t=>typeof t=="string"?parseFloat(t):t,Q0=t=>typeof t=="number"||ye.test(t);function nC(t,e,n,i,r,s){r?(t.opacity=xt(0,n.opacity??1,iC(i)),t.opacityExit=xt(e.opacity??1,0,rC(i))):s&&(t.opacity=xt(e.opacity??1,n.opacity??1,i));for(let o=0;o<tC;o++){const a=eM[o];let l=J0(e,a),c=J0(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Q0(l)===Q0(c)?(t[a]=Math.max(xt(Z0(l),Z0(c),i),0),(Ai.test(c)||Ai.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=xt(e.rotate||0,n.rotate||0,i))}function J0(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const iC=tM(0,.5,jy),rC=tM(.5,.95,Gn);function tM(t,e,n){return i=>i<t?0:i>e?1:n(La(t,e,i))}function sC(t,e,n){const i=$t(t)?t:po(t);return i.start(xm("",i,e,n)),i.animation}function Ua(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const oC=(t,e)=>t.depth-e.depth;class aC{constructor(){this.children=[],this.isDirty=!1}add(e){om(this.children,e),this.isDirty=!0}remove(e){zc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(oC),this.isDirty=!1,this.children.forEach(e)}}function lC(t,e){const n=cn.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Dr(i),t(s-e))};return dt.setup(i,!0),()=>Dr(i)}function cc(t){return $t(t)?t.get():t}class cC{constructor(){this.members=[]}add(e){om(this.members,e);for(let n=this.members.length-1;n>=0;n--){const i=this.members[n];if(i===e||i===this.lead||i===this.prevLead)continue;const r=i.instance;(!r||r.isConnected===!1)&&!i.snapshot&&(zc(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(zc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let i=this.members.indexOf(e)-1;i>=0;i--){const r=this.members[i];if(r.isPresent!==!1&&((n=r.instance)==null?void 0:n.isConnected)!==!1)return this.promote(r),!0}return!1}promote(e,n){var r;const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:s}=i.options,{layoutDependency:o}=e.options;(s===void 0||s!==o)&&(e.resumeFrom=i,n&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),(r=e.root)!=null&&r.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,i,r,s,o;(i=(n=e.options).onExitComplete)==null||i.call(n),(o=(r=e.resumingFrom)==null?void 0:(s=r.options).onExitComplete)==null||o.call(s)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const uc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ff=["","X","Y","Z"],uC=1e3;let fC=0;function df(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function nM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=MS(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",dt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&nM(i)}function iM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=fC++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(pC),this.nodes.forEach(xC),this.nodes.forEach(yC),this.nodes.forEach(mC)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new aC)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new lm),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=wm(o)&&!hb(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let u,d=0;const f=()=>this.root.updateBlockedByResize=!1;dt.read(()=>{d=window.innerWidth}),t(o,()=>{const p=window.innerWidth;p!==d&&(d=p,this.root.updateBlockedByResize=!0,u&&u(),u=lC(f,250),uc.hasAnimatedSinceResize&&(uc.hasAnimatedSinceResize=!1,this.nodes.forEach(nv)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:f,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||c.getDefaultTransition()||wC,{onLayoutAnimationStart:y,onLayoutAnimationComplete:v}=c.getProps(),h=!this.targetLayout||!JS(this.targetLayout,p),_=!d&&f;if(this.options.layoutRoot||this.resumeFrom||_||d&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const x={..._m(g,"layout"),onPlay:y,onComplete:v};(c.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x),this.setAnimationOrigin(u,_)}else d||nv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Dr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(SC),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&nM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,(typeof d.latestValues.x=="string"||typeof d.latestValues.y=="string")&&(d.isLayoutDirty=!0),d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ev);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(tv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(vC),this.nodes.forEach(_C),this.nodes.forEach(dC),this.nodes.forEach(hC)):this.nodes.forEach(tv),this.clearAllSnapshots();const a=cn.now();Yt.delta=Ci(0,1e3/60,a-Yt.timestamp),Yt.timestamp=a,Yt.isProcessing=!0,nf.update.process(Yt),nf.preRender.process(Yt),nf.render.process(Yt),Yt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Em.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(gC),this.sharedNodes.forEach(MC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,dt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){dt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!un(this.snapshot.measuredBox.x)&&!un(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Ut()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!QS(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||$r(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),AC(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return Ut();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(bC))){const{scroll:u}=this.root;u&&(yi(a.x,u.offset.x),yi(a.y,u.offset.y))}return a}removeElementScroll(o){var l;const a=Ut();if(qn(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:f}=u;u!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&qn(a,o),yi(a.x,d.offset.x),yi(a.y,d.offset.y))}return a}applyTransform(o,a=!1,l){var u,d;const c=l||Ut();qn(c,o);for(let f=0;f<this.path.length;f++){const p=this.path[f];!a&&p.options.layoutScroll&&p.scroll&&p!==p.root&&(yi(c.x,-p.scroll.offset.x),yi(c.y,-p.scroll.offset.y)),$r(p.latestValues)&&lc(c,p.latestValues,(u=p.layout)==null?void 0:u.layoutBox)}return $r(this.latestValues)&&lc(c,this.latestValues,(d=this.layout)==null?void 0:d.layoutBox),c}removeTransform(o){var l;const a=Ut();qn(a,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!$r(u.latestValues))continue;let d;u.instance&&(dh(u.latestValues)&&u.updateSnapshot(),d=Ut(),qn(d,u.measurePageBox())),j0(a,u.latestValues,(l=u.snapshot)==null?void 0:l.layoutBox,d)}return $r(this.latestValues)&&j0(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Yt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var p;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:d}=this.options;if(!this.layout||!(u||d))return;this.resolvedRelativeTargetAt=Yt.timestamp;const f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ut(),this.targetWithTransforms=Ut()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),qb(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):qn(this.target,this.layout.layoutBox),VS(this.target,this.targetDelta)):qn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||dh(this.parent.latestValues)||BS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ut(),this.relativeTargetOrigin=Ut(),$c(this.relativeTargetOrigin,a,l),qn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var g;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(g=this.parent)!=null&&g.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Yt.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;qn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,f=this.treeScale.y;Tb(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Ut());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(B0(this.prevProjectionDelta.x,this.projectionDelta.x),B0(this.prevProjectionDelta.y,this.projectionDelta.y)),da(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==f||!K0(this.projectionDelta.x,this.prevProjectionDelta.x)||!K0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ks(),this.projectionDelta=Ks(),this.projectionDeltaWithTransform=Ks()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=Ks();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=Ut(),p=l?l.source:void 0,g=this.layout?this.layout.source:void 0,y=p!==g,v=this.getStack(),h=!v||v.members.length<=1,_=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(TC));this.animationProgress=0;let x;this.mixTargetDelta=M=>{const T=M/1e3;iv(d.x,o.x,T),iv(d.y,o.y,T),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&($c(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),EC(this.relativeTarget,this.relativeTargetOrigin,f,T),x&&Jb(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=Ut()),qn(x,this.relativeTarget)),y&&(this.animationValues=u,nC(u,c,this.latestValues,T,_,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Dr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=dt.update(()=>{uc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=po(0)),this.motionValue.jump(0,!1),this.currentAnimation=sC(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),o.onUpdate&&o.onUpdate(u)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(uC),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&rM(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||Ut();const d=un(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=un(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}qn(a,l),lc(a,u),da(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new cC),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&df("z",o,c,this.animationValues);for(let u=0;u<ff.length;u++)df(`rotate${ff[u]}`,o,c,this.animationValues),df(`skew${ff[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=cc(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=cc(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!$r(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let d=eC(this.projectionDeltaWithTransform,this.treeScale,u);l&&(d=l(u,d)),o.transform=d;const{x:f,y:p}=this.projectionDelta;o.transformOrigin=`${f.origin*100}% ${p.origin*100}% 0`,c.animationValues?o.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:o.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const g in ph){if(u[g]===void 0)continue;const{correct:y,applyTo:v,isCSSVariable:h}=ph[g],_=d==="none"?u[g]:y(u[g],c);if(v){const x=v.length;for(let M=0;M<x;M++)o[v[M]]=_}else h?this.options.visualElement.renderState.vars[g]=_:o[g]=_}this.options.layoutId&&(o.pointerEvents=c===this?cc(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(ev),this.root.sharedNodes.clear()}}}function dC(t){t.updateLayout()}function hC(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;if(s==="size")xi(d=>{const f=o?e.measuredBox[d]:e.layoutBox[d],p=un(f);f.min=i[d].min,f.max=f.min+p});else if(s==="x"||s==="y"){const d=s==="x"?"y":"x";mh(o?e.measuredBox[d]:e.layoutBox[d],i[d])}else rM(s,e.layoutBox,i)&&xi(d=>{const f=o?e.measuredBox[d]:e.layoutBox[d],p=un(i[d]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=Ks();da(a,i,e.layoutBox);const l=Ks();o?da(l,t.applyTransform(r,!0),e.measuredBox):da(l,i,e.layoutBox);const c=!QS(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:p}=d;if(f&&p){const g=Ut();$c(g,e.layoutBox,f.layoutBox);const y=Ut();$c(y,i,p.layoutBox),JS(g,y)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=g,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function pC(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function mC(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function gC(t){t.clearSnapshot()}function ev(t){t.clearMeasurements()}function tv(t){t.isLayoutDirty=!1}function vC(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function _C(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function nv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function xC(t){t.resolveTargetDelta()}function yC(t){t.calcProjection()}function SC(t){t.resetSkewAndRotation()}function MC(t){t.removeLeadSnapshot()}function iv(t,e,n){t.translate=xt(e.translate,0,n),t.scale=xt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function rv(t,e,n,i){t.min=xt(e.min,n.min,i),t.max=xt(e.max,n.max,i)}function EC(t,e,n,i){rv(t.x,e.x,n.x,i),rv(t.y,e.y,n.y,i)}function TC(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const wC={duration:.45,ease:[.4,0,.1,1]},sv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),ov=sv("applewebkit/")&&!sv("chrome/")?Math.round:Gn;function av(t){t.min=ov(t.min),t.max=ov(t.max)}function AC(t){av(t.x),av(t.y)}function rM(t,e,n){return t==="position"||t==="preserve-aspect"&&!$b(q0(e),q0(n),.2)}function bC(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const CC=iM({attachResizeListener:(t,e)=>Ua(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),hf={current:void 0},sM=iM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!hf.current){const t=new CC({});t.mount(window),t.setOptions({layoutScroll:!0}),hf.current=t}return hf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),oM=de.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function RC(t=!0){const e=de.useContext(sm);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=de.useId();de.useEffect(()=>{if(t)return r(s)},[t]);const o=de.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const aM=de.createContext({strict:!1}),lv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let cv=!1;function PC(){if(cv)return;const t={};for(const e in lv)t[e]={isEnabled:n=>lv[e].some(i=>!!n[i])};FS(t),cv=!0}function lM(){return PC(),yb()}function DC(t){const e=lM();for(const n in t)e[n]={...e[n],...t[n]};FS(e)}const LC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function qc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||LC.has(t)}let cM=t=>!qc(t);function IC(t){typeof t=="function"&&(cM=e=>e.startsWith("on")?!qc(e):t(e))}try{IC(require("@emotion/is-prop-valid").default)}catch{}function NC(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||$t(t[r])||(cM(r)||n===!0&&qc(r)||!e&&!qc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}const Mu=de.createContext({});function UC(t,e){if(Su(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Na(n)?n:void 0,animate:Na(i)?i:void 0}}return t.inherit!==!1?e:{}}function FC(t){const{initial:e,animate:n}=UC(t,de.useContext(Mu));return de.useMemo(()=>({initial:e,animate:n}),[uv(e),uv(n)])}function uv(t){return Array.isArray(t)?t.join(" "):t}const Pm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function uM(t,e,n){for(const i in e)!$t(e[i])&&!GS(i,n)&&(t[i]=e[i])}function OC({transformTemplate:t},e){return de.useMemo(()=>{const n=Pm();return Cm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function kC(t,e){const n=t.style||{},i={};return uM(i,n,t),Object.assign(i,OC(t,e)),i}function BC(t,e){const n={},i=kC(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const fM=()=>({...Pm(),attrs:{}});function VC(t,e,n,i){const r=de.useMemo(()=>{const s=fM();return WS(s,e,XS(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};uM(s,t.style,t),r.style={...s,...r.style}}return r}const zC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Dm(t){return typeof t!="string"||t.includes("-")?!1:!!(zC.indexOf(t)>-1||/[A-Z]/u.test(t))}function HC(t,e,n,{latestValues:i},r,s=!1,o){const l=(o??Dm(t)?VC:BC)(e,i,r,t),c=NC(e,typeof t=="string",s),u=t!==de.Fragment?{...c,...l,ref:n}:{},{children:d}=e,f=de.useMemo(()=>$t(d)?d.get():d,[d]);return de.createElement(t,{...u,children:f})}function GC({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:WC(n,i,r,t),renderState:e()}}function WC(t,e,n,i){const r={},s=i(t,{});for(const f in s)r[f]=cc(s[f]);let{initial:o,animate:a}=t;const l=Su(t),c=NS(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!yu(d)){const f=Array.isArray(d)?d:[d];for(let p=0;p<f.length;p++){const g=ym(t,f[p]);if(g){const{transitionEnd:y,transition:v,...h}=g;for(const _ in h){let x=h[_];if(Array.isArray(x)){const M=u?x.length-1:0;x=x[M]}x!==null&&(r[_]=x)}for(const _ in y)r[_]=y[_]}}}return r}const dM=t=>(e,n)=>{const i=de.useContext(Mu),r=de.useContext(sm),s=()=>GC(t,e,i,r);return n?s():H1(s)},jC=dM({scrapeMotionValuesFromProps:Rm,createRenderState:Pm}),XC=dM({scrapeMotionValuesFromProps:YS,createRenderState:fM}),YC=Symbol.for("motionComponentSymbol");function $C(t,e,n){const i=de.useRef(n);de.useInsertionEffect(()=>{i.current=n});const r=de.useRef(null);return de.useCallback(s=>{var a;s&&((a=t.onMount)==null||a.call(t,s));const o=i.current;if(typeof o=="function")if(s){const l=o(s);typeof l=="function"&&(r.current=l)}else r.current?(r.current(),r.current=null):o(s);else o&&(o.current=s);e&&(s?e.mount(s):e.unmount())},[e])}const hM=de.createContext({});function Us(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function qC(t,e,n,i,r,s){var x,M;const{visualElement:o}=de.useContext(Mu),a=de.useContext(aM),l=de.useContext(sm),c=de.useContext(oM),u=c.reducedMotion,d=c.skipAnimations,f=de.useRef(null),p=de.useRef(!1);i=i||a.renderer,!f.current&&i&&(f.current=i(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:s}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));const g=f.current,y=de.useContext(hM);g&&!g.projection&&r&&(g.type==="html"||g.type==="svg")&&KC(f.current,n,r,y);const v=de.useRef(!1);de.useInsertionEffect(()=>{g&&v.current&&g.update(n,l)});const h=n[SS],_=de.useRef(!!h&&typeof window<"u"&&!((x=window.MotionHandoffIsComplete)!=null&&x.call(window,h))&&((M=window.MotionHasOptimisedAnimation)==null?void 0:M.call(window,h)));return W1(()=>{p.current=!0,g&&(v.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),_.current&&g.animationState&&g.animationState.animateChanges())}),de.useEffect(()=>{g&&(!_.current&&g.animationState&&g.animationState.animateChanges(),_.current&&(queueMicrotask(()=>{var T;(T=window.MotionHandoffMarkAsComplete)==null||T.call(window,h)}),_.current=!1),g.enteringChildren=void 0)}),g}function KC(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:pM(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Us(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:u,layoutScroll:l,layoutRoot:c})}function pM(t){if(t)return t.options.allowProjection!==!1?t.projection:pM(t.parent)}function pf(t,{forwardMotionProps:e=!1,type:n}={},i,r){i&&DC(i);const s=n?n==="svg":Dm(t),o=s?XC:jC;function a(c,u){let d;const f={...de.useContext(oM),...c,layoutId:ZC(c)},{isStatic:p}=f,g=FC(c),y=o(c,p);if(!p&&typeof window<"u"){QC();const v=JC(f);d=v.MeasureLayout,g.visualElement=qC(t,y,f,r,v.ProjectionNode,s)}return V.jsxs(Mu.Provider,{value:g,children:[d&&g.visualElement?V.jsx(d,{visualElement:g.visualElement,...f}):null,HC(t,c,$C(y,g.visualElement,u),y,p,e,s)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=de.forwardRef(a);return l[YC]=t,l}function ZC({layoutId:t}){const e=de.useContext(Iy).id;return e&&t!==void 0?e+"-"+t:t}function QC(t,e){de.useContext(aM).strict}function JC(t){const e=lM(),{drag:n,layout:i}=e;if(!n&&!i)return{};const r={...n,...i};return{MeasureLayout:n!=null&&n.isEnabled(t)||i!=null&&i.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function eR(t,e){if(typeof Proxy>"u")return pf;const n=new Map,i=(s,o)=>pf(s,o,t,e),r=(s,o)=>i(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?i:(n.has(o)||n.set(o,pf(o,void 0,t,e)),n.get(o))})}const tR=(t,e)=>e.isSVG??Dm(t)?new Ob(e):new Db(e,{allowProjection:t!==de.Fragment});class nR extends Fr{constructor(e){super(e),e.animationState||(e.animationState=Hb(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();yu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let iR=0;class rR extends Fr{constructor(){super(...arguments),this.id=iR++,this.isExitComplete=!1}update(){var s;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;if(e&&i===!1){if(this.isExitComplete){const{initial:o,custom:a}=this.node.getProps();if(typeof o=="string"){const l=ls(this.node,o,a);if(l){const{transition:c,transitionEnd:u,...d}=l;for(const f in d)(s=this.node.getValue(f))==null||s.jump(d[f])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const sR={animation:{Feature:nR},exit:{Feature:rR}};function Ya(t){return{point:{x:t.pageX,y:t.pageY}}}const oR=t=>e=>Tm(e)&&t(e,Ya(e));function ha(t,e,n,i){return Ua(t,e,oR(n),i)}const mM=({current:t})=>t?t.ownerDocument.defaultView:null,fv=(t,e)=>Math.abs(t-e);function aR(t,e){const n=fv(t.x,e.x),i=fv(t.y,e.y);return Math.sqrt(n**2+i**2)}const dv=new Set(["auto","scroll"]);class gM{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=p=>{this.handleScroll(p.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=xl(this.lastRawMoveEventInfo,this.transformPagePoint));const p=mf(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,y=aR(p.offset,{x:0,y:0})>=this.distanceThreshold;if(!g&&!y)return;const{point:v}=p,{timestamp:h}=Yt;this.history.push({...v,timestamp:h});const{onStart:_,onMove:x}=this.handlers;g||(_&&_(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,p)},this.handlePointerMove=(p,g)=>{this.lastMoveEvent=p,this.lastRawMoveEventInfo=g,this.lastMoveEventInfo=xl(g,this.transformPagePoint),dt.update(this.updatePoint,!0)},this.handlePointerUp=(p,g)=>{this.end();const{onEnd:y,onSessionEnd:v,resumeAnimation:h}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&h&&h(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const _=mf(p.type==="pointercancel"?this.lastMoveEventInfo:xl(g,this.transformPagePoint),this.history);this.startEvent&&y&&y(p,_),v&&v(p,_)},!Tm(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=r||window;const l=Ya(e),c=xl(l,this.transformPagePoint),{point:u}=c,{timestamp:d}=Yt;this.history=[{...u,timestamp:d}];const{onSessionStart:f}=n;f&&f(e,mf(c,this.history)),this.removeListeners=Wa(ha(this.contextWindow,"pointermove",this.handlePointerMove),ha(this.contextWindow,"pointerup",this.handlePointerUp),ha(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(e){let n=e.parentElement;for(;n;){const i=getComputedStyle(n);(dv.has(i.overflowX)||dv.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const i=e===window,r=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:r.x-n.x,y:r.y-n.y};s.x===0&&s.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,r),dt.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Dr(this.updatePoint)}}function xl(t,e){return e?{point:e(t.point)}:t}function hv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function mf({point:t},e){return{point:t,delta:hv(t,vM(e)),offset:hv(t,lR(e)),velocity:cR(e,.1)}}function lR(t){return t[0]}function vM(t){return t[t.length-1]}function cR(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=vM(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Pn(e)));)n--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&r.timestamp-i.timestamp>Pn(e)*2&&(i=t[1]);const s=Vn(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function uR(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?xt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?xt(n,t,i.max):Math.min(t,n)),t}function pv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function fR(t,{top:e,left:n,bottom:i,right:r}){return{x:pv(t.x,n,r),y:pv(t.y,e,i)}}function mv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function dR(t,e){return{x:mv(t.x,e.x),y:mv(t.y,e.y)}}function hR(t,e){let n=.5;const i=un(t),r=un(e);return r>i?n=La(e.min,e.max-i,t.min):i>r&&(n=La(t.min,t.max-r,e.min)),Ci(0,1,n)}function pR(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const gh=.35;function mR(t=gh){return t===!1?t=0:t===!0&&(t=gh),{x:gv(t,"left","right"),y:gv(t,"top","bottom")}}function gv(t,e,n){return{min:vv(t,e),max:vv(t,n)}}function vv(t,e){return typeof t=="number"?t:t[e]||0}const gR=new WeakMap;class vR{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ut(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=d=>{n&&this.snapToCursor(Ya(d).point),this.stopAnimation()},o=(d,f)=>{const{drag:p,dragPropagation:g,onDragStart:y}=this.getProps();if(p&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=KA(p),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),xi(h=>{let _=this.getAxisMotionValue(h).get()||0;if(Ai.test(_)){const{projection:x}=this.visualElement;if(x&&x.layout){const M=x.layout.layoutBox[h];M&&(_=un(M)*(parseFloat(_)/100))}}this.originPoint[h]=_}),y&&dt.update(()=>y(d,f),!1,!0),ah(this.visualElement,"transform");const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},a=(d,f)=>{this.latestPointerEvent=d,this.latestPanInfo=f;const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:y,onDrag:v}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:h}=f;if(g&&this.currentDirection===null){this.currentDirection=xR(h),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,h),this.updateAxis("y",f.point,h),this.visualElement.render(),v&&dt.update(()=>v(d,f),!1,!0)},l=(d,f)=>{this.latestPointerEvent=d,this.latestPanInfo=f,this.stop(d,f),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:d}=this.getProps();(d||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:u}=this.getProps();this.panSession=new gM(e,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:i,contextWindow:mM(this.visualElement),element:this.visualElement.current})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&dt.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!yl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=uR(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;e&&Us(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=fR(i.layoutBox,e):this.constraints=!1,this.elastic=mR(n),r!==this.constraints&&!Us(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&xi(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=pR(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Us(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=wb(i,r.root,this.visualElement.getTransformPagePoint());let o=dR(r.layout.layoutBox,s);if(n){const a=n(Mb(o));this.hasMutatedConstraints=!!a,a&&(o=kS(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=xi(u=>{if(!yl(u,n,this.currentDirection))return;let d=l&&l[u]||{};(o===!0||o===u)&&(d={min:0,max:0});const f=r?200:1e6,p=r?40:1e7,g={type:"inertia",velocity:i?e[u]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return ah(this.visualElement,e),i.start(xm(e,i,0,n,this.visualElement,!1))}stopAnimation(){xi(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){xi(n=>{const{drag:i}=this.getProps();if(!yl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n],l=s.get()||0;s.set(e[n]-xt(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Us(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};xi(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=hR({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),xi(o=>{if(!yl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(xt(l,c,r[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;gR.set(this.visualElement,this);const e=this.visualElement.current,n=ha(e,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps(),f=c.target,p=f!==e&&nb(f);u&&d&&!p&&this.start(c)});let i;const r=()=>{const{dragConstraints:c}=this.getProps();Us(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),i||(i=_R(e,c.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),dt.read(r);const a=Ua(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(xi(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=c[d].translate,f.set(f.get()+c[d].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),l&&l(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=gh,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function _v(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function _R(t,e,n){const i=b0(t,_v(n)),r=b0(e,_v(n));return()=>{i(),r()}}function yl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function xR(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class yR extends Fr{constructor(e){super(e),this.removeGroupControls=Gn,this.removeListeners=Gn,this.controls=new vR(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Gn}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const gf=t=>(e,n)=>{t&&dt.update(()=>t(e,n),!1,!0)};class SR extends Fr{constructor(){super(...arguments),this.removePointerDownListener=Gn}onPointerDown(e){this.session=new gM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:mM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:gf(e),onStart:gf(n),onMove:gf(i),onEnd:(s,o)=>{delete this.session,r&&dt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=ha(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let vf=!1;class MR extends de.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),vf&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),uc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,{projection:o}=i;return o&&(o.isPresent=s,e.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),vf=!0,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||dt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Em.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;vf=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function _M(t){const[e,n]=RC(),i=de.useContext(Iy);return V.jsx(MR,{...t,layoutGroup:i,switchLayoutGroup:de.useContext(hM),isPresent:e,safeToRemove:n})}const ER={pan:{Feature:SR},drag:{Feature:yR,ProjectionNode:sM,MeasureLayout:_M}};function xv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&dt.postRender(()=>s(e,Ya(e)))}class TR extends Fr{mount(){const{current:e}=this.node;e&&(this.unmount=QA(e,(n,i)=>(xv(this.node,i,"Start"),r=>xv(this.node,r,"End"))))}unmount(){}}class wR extends Fr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Wa(Ua(this.node.current,"focus",()=>this.onFocus()),Ua(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function yv(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&dt.postRender(()=>s(e,Ya(e)))}class AR extends Fr{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=rb(e,(r,s)=>(yv(this.node,s,"Start"),(o,{success:a})=>yv(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const vh=new WeakMap,_f=new WeakMap,bR=t=>{const e=vh.get(t.target);e&&e(t)},CR=t=>{t.forEach(bR)};function RR({root:t,...e}){const n=t||document;_f.has(n)||_f.set(n,{});const i=_f.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(CR,{root:t,...e})),i[r]}function PR(t,e,n){const i=RR(e);return vh.set(t,n),i.observe(t),()=>{vh.delete(t),i.unobserve(t)}}const DR={some:0,all:1};class LR extends Fr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:DR[r]},a=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(c)};this.stopObserver=PR(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(IR(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function IR({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const NR={inView:{Feature:LR},tap:{Feature:AR},focus:{Feature:wR},hover:{Feature:TR}},UR={layout:{ProjectionNode:sM,MeasureLayout:_M}},FR={...sR,...NR,...ER,...UR},yt=eR(FR,tR),pa=t=>`/${t}`,ln={name:"Houssam Salek",title:"Backend & Full-Stack Developer",bio:"Computer Science student at EMSI passionate about backend engineering and full-stack development. I build clean, maintainable systems that solve real problems — from secure APIs to responsive web apps.",email:"houssam.salek@edu-emsi.ma",github:"https://github.com/SHoussam",linkedin:"https://www.linkedin.com/in/houssam-salek",whatsapp:{number:"212694294897",message:"Hi, I saw your portfolio and would like to chat!"}},OR=[{title:"Backend",icon:"Server",description:"Server-side logic, APIs, and secure data operations.",items:[{name:"PHP"},{name:"Laravel"},{name:"Node.js"},{name:"Bash"},{name:"Python"}]},{title:"Frontend",icon:"Monitor",description:"Building responsive, accessible, and modern interfaces.",items:[{name:"React"},{name:"JavaScript"},{name:"TypeScript"},{name:"HTML/CSS"},{name:"Tailwind CSS"}]},{title:"Databases",icon:"Database",description:"Data modeling, queries, and secure persistence.",items:[{name:"MySQL"},{name:"PDO"},{name:"SQL"}]},{title:"Tools",icon:"Wrench",description:"Daily environment for shipping and collaboration.",items:[{name:"Git & GitHub"},{name:"Linux"},{name:"Docker"},{name:"Vite"},{name:"VS Code"}]}],kR=[{title:"Aim Trainer — Browser Shooting Game",description:"Interactive browser-based aim training game designed to test reaction speed, precision, and hand-eye coordination with dynamic targets and score tracking.",technologies:["HTML","CSS","JavaScript","Game Logic"],github:"https://github.com/dororo911/Aim.git",live:"https://houssamsalek.me/Aim/",image:pa("img/aime.png"),featured:!0},{title:"Lahek Library — Web App",description:"PHP/MySQL library management app with authentication, role-based access control, and secure CRUD via PDO.",technologies:["PHP","MySQL","PDO","Laravel","JavaScript"],github:"https://github.com/dororo911/LahekLibrary.git",live:null,image:pa("img/php.png"),featured:!0},{title:"Media Library CLI (C++)",description:"C++ console application with OOP, multi-role authentication, and file-backed persistence for a media library.",technologies:["C++","OOP","STL","File I/O"],github:"https://github.com/dororo911/Media-Library-CLI-C-.git",live:null,image:pa("img/c++.png"),featured:!0}],BR=[{title:"Backend & Databases",description:"Server-side logic, data modeling, and secure CRUD.",items:["PHP","MySQL","PDO","Bash","Linux"]},{title:"Frontend",description:"Building responsive, accessible interfaces.",items:["React","JavaScript","TypeScript","HTML","CSS"]},{date:"2023 — Present",title:"EMSI — Ingénierie Informatique & Réseaux",description:"Coursework in software engineering, web development, systems programming, and applied academic projects.",type:"education"}],xf=[{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"experience",label:"Experience"},{id:"looking-for",label:"Looking For"},{id:"contact",label:"Contact"}];function VR(){const[t,e]=de.useState(""),[n,i]=de.useState(!1),[r,s]=de.useState("down"),o=de.useRef(0),a=pa("img/HSB.png");de.useEffect(()=>{const c=()=>{const u=window.scrollY;u>o.current+2?s("down"):u<o.current-2&&s("up"),o.current=u;const d=document.getElementById("hero");if(d){const y=d.offsetTop+d.offsetHeight;i(window.scrollY+80>=y)}else i(window.scrollY>200);const f=xf.map(y=>document.getElementById(y.id)),p=window.scrollY+180;let g="";for(let y=f.length-1;y>=0;y--){const v=f[y];if(v&&v.offsetTop<=p){g=xf[y].id;break}}e(g)};return window.addEventListener("scroll",c,{passive:!0}),c(),()=>window.removeEventListener("scroll",c)},[]);const l=c=>{const u=document.getElementById(c);if(!u)return;const f=u.getBoundingClientRect().top+window.scrollY-86;window.scrollTo({top:f,behavior:"smooth"})};return V.jsxs(V.Fragment,{children:[V.jsx(yt.header,{initial:{y:-80,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5,ease:"easeOut"},className:"fixed top-3 left-3 sm:left-4 z-[80]",children:V.jsx(yt.button,{type:"button",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"flex items-center rounded-xl border border-white/20 bg-[#0B1425]/72 backdrop-blur-xl px-2 py-1.5 shadow-[0_12px_24px_rgba(0,0,0,0.38)]","aria-label":"Scroll to top",whileHover:{scale:1.03},whileTap:{scale:.98},children:V.jsx(yt.img,{src:a,alt:"HSB Logo",className:"w-9 h-9 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]",initial:{opacity:0,scale:.92},animate:{opacity:1,scale:1,y:[0,-2,0]},transition:{opacity:{duration:.35,ease:"easeOut"},scale:{duration:.35,ease:"easeOut"},y:{duration:2.8,ease:"easeInOut",repeat:1/0}}})})}),V.jsx(yt.nav,{initial:!1,animate:n?{y:0,opacity:1,scale:1}:r==="up"?{y:34,opacity:0,scale:.94}:{y:14,opacity:0,scale:.98},transition:n?{type:"spring",stiffness:300,damping:28}:r==="up"?{duration:.45,ease:[.22,1,.36,1]}:{duration:.25,ease:"easeOut"},className:`fixed inset-x-0 bottom-5 z-[70] flex justify-center px-3 sm:px-4 ${n?"pointer-events-auto":"pointer-events-none"}`,"aria-label":"Primary navigation",children:V.jsx("div",{className:"w-max max-w-[94vw] rounded-full border border-white/15 bg-[#0B1425]/75 backdrop-blur-2xl shadow-[0_18px_36px_rgba(0,0,0,0.42)] px-2 py-2",children:V.jsx("div",{className:"flex items-center gap-1 md:gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",children:xf.map(c=>V.jsxs("div",{className:"relative shrink-0",children:[V.jsx("button",{onClick:()=>l(c.id),className:`relative z-10 px-3 sm:px-4 md:px-5 py-2.5 rounded-full text-[13px] sm:text-sm font-semibold whitespace-nowrap transition-colors ${t===c.id?"text-white":"text-white/65 hover:text-white"}`,children:c.label}),t===c.id&&V.jsx(yt.span,{layoutId:"activeBottomNav",className:"absolute inset-0 rounded-full border border-primary/40 bg-gradient-to-r from-primary/28 to-accent/20 shadow-[0_0_0_1px_rgba(145,106,255,0.16),0_8px_18px_rgba(109,65,255,0.28)]",transition:{type:"spring",stiffness:360,damping:30}})]},c.id))})})})]})}/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zR=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HR=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=t=>{const e=HR(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GR=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},WR=de.createContext({}),jR=()=>de.useContext(WR),XR=de.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>{const{size:c=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f="currentColor",className:p=""}=jR()??{},g=i??d?Number(n??u)*24/Number(e??c):n??u;return de.createElement("svg",{ref:l,...yf,width:e??c??yf.width,height:e??c??yf.height,stroke:t??f,strokeWidth:g,className:xM("lucide",p,r),...!s&&!GR(a)&&{"aria-hidden":"true"},...a},[...o.map(([y,v])=>de.createElement(y,v)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=(t,e)=>{const n=de.forwardRef(({className:i,...r},s)=>de.createElement(XR,{ref:s,iconNode:e,className:xM(`lucide-${zR(Sv(t))}`,`lucide-${t}`,i),...r}));return n.displayName=Sv(t),n};/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YR=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],$R=Wt("book-open",YR);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qR=[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],yM=Wt("briefcase-business",qR);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KR=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],ZR=Wt("briefcase",KR);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QR=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Eu=Wt("code-xml",QR);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JR=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],e2=Wt("database",JR);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],SM=Wt("external-link",t2);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],MM=Wt("graduation-cap",n2);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],r2=Wt("heart",i2);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Lm=Wt("mail",s2);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],a2=Wt("map-pin",o2);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],c2=Wt("message-circle",l2);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],f2=Wt("monitor",u2);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]],h2=Wt("rocket",d2);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],m2=Wt("send",p2);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],EM=Wt("server",g2);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],TM=Wt("target",v2);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],x2=Wt("users",_2);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],S2=Wt("wrench",y2);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Im="183",M2=0,Mv=1,E2=2,fc=1,T2=2,Qo=3,Lr=0,Sn=1,zi=2,ji=0,io=1,_h=2,Ev=3,Tv=4,w2=5,Kr=100,A2=101,b2=102,C2=103,R2=104,P2=200,D2=201,L2=202,I2=203,xh=204,yh=205,N2=206,U2=207,F2=208,O2=209,k2=210,B2=211,V2=212,z2=213,H2=214,Sh=0,Mh=1,Eh=2,mo=3,Th=4,wh=5,Ah=6,bh=7,wM=0,G2=1,W2=2,bi=0,AM=1,bM=2,CM=3,RM=4,PM=5,DM=6,LM=7,IM=300,ms=301,go=302,Sf=303,Mf=304,Tu=306,Ch=1e3,Cn=1001,Rh=1002,qt=1003,j2=1004,Sl=1005,Nt=1006,Ef=1007,is=1008,kn=1009,NM=1010,UM=1011,Fa=1012,Nm=1013,Ri=1014,si=1015,Pi=1016,Um=1017,Fm=1018,Oa=1020,FM=35902,OM=35899,kM=1021,BM=1022,zn=1023,Zi=1026,rs=1027,VM=1028,Om=1029,vo=1030,km=1031,Bm=1033,dc=33776,hc=33777,pc=33778,mc=33779,Ph=35840,Dh=35841,Lh=35842,Ih=35843,Nh=36196,Uh=37492,Fh=37496,Oh=37488,kh=37489,Bh=37490,Vh=37491,zh=37808,Hh=37809,Gh=37810,Wh=37811,jh=37812,Xh=37813,Yh=37814,$h=37815,qh=37816,Kh=37817,Zh=37818,Qh=37819,Jh=37820,ep=37821,tp=36492,np=36494,ip=36495,rp=36283,sp=36284,op=36285,ap=36286,X2=3200,Y2=0,$2=1,mr="",Un="srgb",_o="srgb-linear",Kc="linear",st="srgb",Ss=7680,wv=519,q2=512,K2=513,Z2=514,Vm=515,Q2=516,J2=517,zm=518,eP=519,Av=35044,bv="300 es",Ei=2e3,Zc=2001;function tP(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Qc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function nP(){const t=Qc("canvas");return t.style.display="block",t}const Cv={};function Rv(...t){const e="THREE."+t.shift();console.log(e,...t)}function zM(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ne(...t){t=zM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ze(...t){t=zM(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Jc(...t){const e=t.join(" ");e in Cv||(Cv[e]=!0,Ne(...t))}function iP(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const rP={[Sh]:Mh,[Eh]:Ah,[Th]:bh,[mo]:wh,[Mh]:Sh,[Ah]:Eh,[bh]:Th,[wh]:mo};class Ao{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tf=Math.PI/180,lp=180/Math.PI;function $a(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Xe(t,e,n){return Math.max(e,Math.min(n,t))}function sP(t,e){return(t%e+e)%e}function wf(t,e,n){return(1-n)*t+n*e}function Bo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(e=0,n=0){Oe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(d!==y||l!==f||c!==p||u!==g){let v=l*f+c*p+u*g+d*y;v<0&&(f=-f,p=-p,g=-g,y=-y,v=-v);let h=1-a;if(v<.9995){const _=Math.acos(v),x=Math.sin(_);h=Math.sin(h*_)/x,a=Math.sin(a*_)/x,l=l*h+f*a,c=c*h+p*a,u=u*h+g*a,d=d*h+y*a}else{l=l*h+f*a,c=c*h+p*a,u=u*h+g*a,d=d*h+y*a;const _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*d+l*p-c*f,e[n+1]=l*g+u*f+c*d-a*p,e[n+2]=c*g+u*p+a*f-l*d,e[n+3]=u*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Pv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Pv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Af.copy(this).projectOnVector(e),this.sub(Af)}reflect(e){return this.sub(Af.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Af=new X,Pv=new bo;class Ve{constructor(e,n,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],y=r[0],v=r[3],h=r[6],_=r[1],x=r[4],M=r[7],T=r[2],b=r[5],C=r[8];return s[0]=o*y+a*_+l*T,s[3]=o*v+a*x+l*b,s[6]=o*h+a*M+l*C,s[1]=c*y+u*_+d*T,s[4]=c*v+u*x+d*b,s[7]=c*h+u*M+d*C,s[2]=f*y+p*_+g*T,s[5]=f*v+p*x+g*b,s[8]=f*h+p*M+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=n*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(bf.makeScale(e,n)),this}rotate(e){return this.premultiply(bf.makeRotation(-e)),this}translate(e,n){return this.premultiply(bf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bf=new Ve,Dv=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lv=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oP(){const t={enabled:!0,workingColorSpace:_o,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=ro(r.r),r.g=ro(r.g),r.b=ro(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===mr?Kc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Jc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Jc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[_o]:{primaries:e,whitePoint:i,transfer:Kc,toXYZ:Dv,fromXYZ:Lv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:i,transfer:st,toXYZ:Dv,fromXYZ:Lv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),t}const $e=oP();function Xi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ro(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ms;class aP{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ms===void 0&&(Ms=Qc("canvas")),Ms.width=e.width,Ms.height=e.height;const r=Ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ms}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Qc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Xi(n[i]/255)*255):n[i]=Xi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lP=0;class Hm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lP++}),this.uuid=$a(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Cf(r[o].image)):s.push(Cf(r[o]))}else s=Cf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Cf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?aP.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let cP=0;const Rf=new X;class dn extends Ao{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=Cn,r=Cn,s=Nt,o=is,a=zn,l=kn,c=dn.DEFAULT_ANISOTROPY,u=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cP++}),this.uuid=$a(),this.name="",this.source=new Hm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rf).x}get height(){return this.source.getSize(Rf).y}get depth(){return this.source.getSize(Rf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ne(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==IM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ch:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ch:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=IM;dn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],y=l[2],v=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-v)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+v)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,M=(p+1)/2,T=(h+1)/2,b=(u+f)/4,C=(d+y)/4,S=(g+v)/4;return x>M&&x>T?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=b/i,s=C/i):M>T?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=S/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=C/s,r=S/s),this.set(i,r,s,n),this}let _=Math.sqrt((v-g)*(v-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(v-g)/_,this.y=(d-y)/_,this.z=(f-u)/_,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this.w=Xe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this.w=Xe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uP extends Ao{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new dn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Hm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends uP{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class HM extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fP extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rt{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,g,y,v){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,y,v)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,y,v){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=y,h[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Es.setFromMatrixColumn(e,0).length(),s=1/Es.setFromMatrixColumn(e,1).length(),o=1/Es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,g=a*u,y=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,y=c*d;n[0]=f+y*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,y=c*d;n[0]=f-y*a,n[4]=-o*d,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,g=a*u,y=a*d;n[0]=l*u,n[4]=g*c-p,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*u,n[4]=y-f*d,n[8]=g*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+g,n[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+y,n[5]=o*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=a*u,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dP,e,hP)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),ir.crossVectors(i,Tn),ir.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),ir.crossVectors(i,Tn)),ir.normalize(),Ml.crossVectors(Tn,ir),r[0]=ir.x,r[4]=Ml.x,r[8]=Tn.x,r[1]=ir.y,r[5]=Ml.y,r[9]=Tn.y,r[2]=ir.z,r[6]=Ml.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],y=i[6],v=i[10],h=i[14],_=i[3],x=i[7],M=i[11],T=i[15],b=r[0],C=r[4],S=r[8],w=r[12],L=r[1],P=r[5],O=r[9],z=r[13],W=r[2],H=r[6],B=r[10],k=r[14],N=r[3],Y=r[7],J=r[11],ee=r[15];return s[0]=o*b+a*L+l*W+c*N,s[4]=o*C+a*P+l*H+c*Y,s[8]=o*S+a*O+l*B+c*J,s[12]=o*w+a*z+l*k+c*ee,s[1]=u*b+d*L+f*W+p*N,s[5]=u*C+d*P+f*H+p*Y,s[9]=u*S+d*O+f*B+p*J,s[13]=u*w+d*z+f*k+p*ee,s[2]=g*b+y*L+v*W+h*N,s[6]=g*C+y*P+v*H+h*Y,s[10]=g*S+y*O+v*B+h*J,s[14]=g*w+y*z+v*k+h*ee,s[3]=_*b+x*L+M*W+T*N,s[7]=_*C+x*P+M*H+T*Y,s[11]=_*S+x*O+M*B+T*J,s[15]=_*w+x*z+M*k+T*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],y=e[7],v=e[11],h=e[15],_=l*p-c*f,x=a*p-c*d,M=a*f-l*d,T=o*p-c*u,b=o*f-l*u,C=o*d-a*u;return n*(y*_-v*x+h*M)-i*(g*_-v*T+h*b)+r*(g*x-y*T+h*C)-s*(g*M-y*b+v*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],y=e[13],v=e[14],h=e[15],_=n*a-i*o,x=n*l-r*o,M=n*c-s*o,T=i*l-r*a,b=i*c-s*a,C=r*c-s*l,S=u*y-d*g,w=u*v-f*g,L=u*h-p*g,P=d*v-f*y,O=d*h-p*y,z=f*h-p*v,W=_*z-x*O+M*P+T*L-b*w+C*S;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/W;return e[0]=(a*z-l*O+c*P)*H,e[1]=(r*O-i*z-s*P)*H,e[2]=(y*C-v*b+h*T)*H,e[3]=(f*b-d*C-p*T)*H,e[4]=(l*L-o*z-c*w)*H,e[5]=(n*z-r*L+s*w)*H,e[6]=(v*M-g*C-h*x)*H,e[7]=(u*C-f*M+p*x)*H,e[8]=(o*O-a*L+c*S)*H,e[9]=(i*L-n*O-s*S)*H,e[10]=(g*b-y*M+h*_)*H,e[11]=(d*M-u*b-p*_)*H,e[12]=(a*w-o*P-l*S)*H,e[13]=(n*P-i*w+r*S)*H,e[14]=(y*x-g*T-v*_)*H,e[15]=(u*T-d*x+f*_)*H,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,g=s*d,y=o*u,v=o*d,h=a*d,_=l*c,x=l*u,M=l*d,T=i.x,b=i.y,C=i.z;return r[0]=(1-(y+h))*T,r[1]=(p+M)*T,r[2]=(g-x)*T,r[3]=0,r[4]=(p-M)*b,r[5]=(1-(f+h))*b,r[6]=(v+_)*b,r[7]=0,r[8]=(g+x)*C,r[9]=(v-_)*C,r[10]=(1-(f+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Es.set(r[0],r[1],r[2]).length();const a=Es.set(r[4],r[5],r[6]).length(),l=Es.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Kn.copy(this);const c=1/o,u=1/a,d=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=d,Kn.elements[9]*=d,Kn.elements[10]*=d,n.setFromRotationMatrix(Kn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Ei,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let g,y;if(l)g=s/(o-s),y=o*s/(o-s);else if(a===Ei)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Zc)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,y;if(l)g=1/(o-s),y=o/(o-s);else if(a===Ei)g=-2/(o-s),y=-(o+s)/(o-s);else if(a===Zc)g=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Es=new X,Kn=new Rt,dP=new X(0,0,0),hP=new X(1,1,1),ir=new X,Ml=new X,Tn=new X,Iv=new Rt,Nv=new bo;class Qi{constructor(e=0,n=0,i=0,r=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Iv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Iv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Nv.setFromEuler(this),this.setFromQuaternion(Nv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class GM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pP=0;const Uv=new X,Ts=new bo,Ni=new Rt,El=new X,Vo=new X,mP=new X,gP=new bo,Fv=new X(1,0,0),Ov=new X(0,1,0),kv=new X(0,0,1),Bv={type:"added"},vP={type:"removed"},ws={type:"childadded",child:null},Pf={type:"childremoved",child:null};class Mn extends Ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pP++}),this.uuid=$a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new X,n=new Qi,i=new bo,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Ve}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new GM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Fv,e)}rotateY(e){return this.rotateOnAxis(Ov,e)}rotateZ(e){return this.rotateOnAxis(kv,e)}translateOnAxis(e,n){return Uv.copy(e).applyQuaternion(this.quaternion),this.position.add(Uv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Fv,e)}translateY(e){return this.translateOnAxis(Ov,e)}translateZ(e){return this.translateOnAxis(kv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?El.copy(e):El.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Vo,El,this.up):Ni.lookAt(El,Vo,this.up),this.quaternion.setFromRotationMatrix(Ni),r&&(Ni.extractRotation(r.matrixWorld),Ts.setFromRotationMatrix(Ni),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bv),ws.child=e,this.dispatchEvent(ws),ws.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(vP),Pf.child=e,this.dispatchEvent(Pf),Pf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bv),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,mP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,gP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Mn.DEFAULT_UP=new X(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tl extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _P={type:"move"};class Df{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const v=n.getJointPose(y,i),h=this._getHandJoint(c,y);v!==null&&(h.matrix.fromArray(v.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=v.radius),h.visible=v!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_P)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Tl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const WM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},wl={h:0,s:0,l:0};function Lf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=sP(e,1),n=Xe(n,0,1),i=Xe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Lf(o,s,e+1/3),this.g=Lf(o,s,e),this.b=Lf(o,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,n=Un){function i(s){s!==void 0&&parseFloat(s)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ne("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Un){const i=WM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return $e.workingToColorSpace(nn.copy(this),e),Math.round(Xe(nn.r*255,0,255))*65536+Math.round(Xe(nn.g*255,0,255))*256+Math.round(Xe(nn.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=$e.workingColorSpace){return $e.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Un){$e.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==Un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+n,rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(rr),e.getHSL(wl);const i=wf(rr.h,wl.h,n),r=wf(rr.s,wl.s,n),s=wf(rr.l,wl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new tt;tt.NAMES=WM;class Vv extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Zn=new X,Ui=new X,If=new X,Fi=new X,As=new X,bs=new X,zv=new X,Nf=new X,Uf=new X,Ff=new X,Of=new At,kf=new At,Bf=new At;class ri{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Zn.subVectors(e,n),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Zn.subVectors(r,n),Ui.subVectors(i,n),If.subVectors(e,n);const o=Zn.dot(Zn),a=Zn.dot(Ui),l=Zn.dot(If),c=Ui.dot(Ui),u=Ui.dot(If),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Of.setScalar(0),kf.setScalar(0),Bf.setScalar(0),Of.fromBufferAttribute(e,n),kf.fromBufferAttribute(e,i),Bf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Of,s.x),o.addScaledVector(kf,s.y),o.addScaledVector(Bf,s.z),o}static isFrontFacing(e,n,i,r){return Zn.subVectors(i,n),Ui.subVectors(e,n),Zn.cross(Ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),Zn.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;As.subVectors(r,i),bs.subVectors(s,i),Nf.subVectors(e,i);const l=As.dot(Nf),c=bs.dot(Nf);if(l<=0&&c<=0)return n.copy(i);Uf.subVectors(e,r);const u=As.dot(Uf),d=bs.dot(Uf);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(As,o);Ff.subVectors(e,s);const p=As.dot(Ff),g=bs.dot(Ff);if(g>=0&&p<=g)return n.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(bs,a);const v=u*g-p*d;if(v<=0&&d-u>=0&&p-g>=0)return zv.subVectors(s,r),a=(d-u)/(d-u+(p-g)),n.copy(r).addScaledVector(zv,a);const h=1/(v+y+f);return o=y*h,a=f*h,n.copy(i).addScaledVector(As,o).addScaledVector(bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qa{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(s,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Al.copy(i.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),bl.subVectors(this.max,zo),Cs.subVectors(e.a,zo),Rs.subVectors(e.b,zo),Ps.subVectors(e.c,zo),sr.subVectors(Rs,Cs),or.subVectors(Ps,Rs),Vr.subVectors(Cs,Ps);let n=[0,-sr.z,sr.y,0,-or.z,or.y,0,-Vr.z,Vr.y,sr.z,0,-sr.x,or.z,0,-or.x,Vr.z,0,-Vr.x,-sr.y,sr.x,0,-or.y,or.x,0,-Vr.y,Vr.x,0];return!Vf(n,Cs,Rs,Ps,bl)||(n=[1,0,0,0,1,0,0,0,1],!Vf(n,Cs,Rs,Ps,bl))?!1:(Cl.crossVectors(sr,or),n=[Cl.x,Cl.y,Cl.z],Vf(n,Cs,Rs,Ps,bl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oi=[new X,new X,new X,new X,new X,new X,new X,new X],Qn=new X,Al=new qa,Cs=new X,Rs=new X,Ps=new X,sr=new X,or=new X,Vr=new X,zo=new X,bl=new X,Cl=new X,zr=new X;function Vf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){zr.fromArray(t,s);const a=r.x*Math.abs(zr.x)+r.y*Math.abs(zr.y)+r.z*Math.abs(zr.z),l=e.dot(zr),c=n.dot(zr),u=i.dot(zr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Dt=new X,Rl=new Oe;let xP=0;class ui{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xP++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Av,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Rl.fromBufferAttribute(this,n),Rl.applyMatrix3(e),this.setXY(n,Rl.x,Rl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Bo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=mn(n,this.array),i=mn(i,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Av&&(e.usage=this.usage),e}}class jM extends ui{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class XM extends ui{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class fi extends ui{constructor(e,n,i){super(new Float32Array(e),n,i)}}const yP=new qa,Ho=new X,zf=new X;class wu{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):yP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const n=Ho.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ho,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(zf)),this.expandByPoint(Ho.copy(e.center).sub(zf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let SP=0;const Nn=new Rt,Hf=new Mn,Ds=new X,wn=new qa,Go=new qa,zt=new X;class hi extends Ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SP++}),this.uuid=$a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tP(e)?XM:jM)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,n,i){return Nn.makeTranslation(e,n,i),this.applyMatrix4(Nn),this}scale(e,n,i){return Nn.makeScale(e,n,i),this.applyMatrix4(Nn),this}lookAt(e){return Hf.lookAt(e),Hf.updateMatrix(),this.applyMatrix4(Hf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Go.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(wn.min,Go.min),wn.expandByPoint(zt),zt.addVectors(wn.max,Go.max),wn.expandByPoint(zt)):(wn.expandByPoint(Go.min),wn.expandByPoint(Go.max))}wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(e,c),zt.add(Ds)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new X,l[S]=new X;const c=new X,u=new X,d=new X,f=new Oe,p=new Oe,g=new Oe,y=new X,v=new X;function h(S,w,L){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,L),f.fromBufferAttribute(s,S),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,L),u.sub(c),d.sub(c),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),v.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),a[S].add(y),a[w].add(y),a[L].add(y),l[S].add(v),l[w].add(v),l[L].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let S=0,w=_.length;S<w;++S){const L=_[S],P=L.start,O=L.count;for(let z=P,W=P+O;z<W;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new X,M=new X,T=new X,b=new X;function C(S){T.fromBufferAttribute(r,S),b.copy(T);const w=a[S];x.copy(w),x.sub(T.multiplyScalar(T.dot(w))).normalize(),M.crossVectors(b,w);const P=M.dot(l[S])<0?-1:1;o.setXYZW(S,x.x,x.y,x.z,P)}for(let S=0,w=_.length;S<w;++S){const L=_[S],P=L.start,O=L.count;for(let z=P,W=P+O;z<W;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,d=new X;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),y=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,v),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,v),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let y=0,v=l.length;y<v;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new ui(f,u,d)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new hi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let MP=0;class Ka extends Ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MP++}),this.uuid=$a(),this.name="",this.type="Material",this.blending=io,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=yh,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ne(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ne(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(i.blending=this.blending),this.side!==Lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xh&&(i.blendSrc=this.blendSrc),this.blendDst!==yh&&(i.blendDst=this.blendDst),this.blendEquation!==Kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==mo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ki=new X,Gf=new X,Pl=new X,ar=new X,Wf=new X,Dl=new X,jf=new X;class YM{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Gf.copy(e).add(n).multiplyScalar(.5),Pl.copy(n).sub(e).normalize(),ar.copy(this.origin).sub(Gf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Pl),a=ar.dot(this.direction),l=-ar.dot(Pl),c=ar.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const y=1/u;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Gf).addScaledVector(Pl,f),p}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),r=ki.dot(ki)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,i,r,s){Wf.subVectors(n,e),Dl.subVectors(i,e),jf.crossVectors(Wf,Dl);let o=this.direction.dot(jf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ar.subVectors(this.origin,e);const l=a*this.direction.dot(Dl.crossVectors(ar,Dl));if(l<0)return null;const c=a*this.direction.dot(Wf.cross(ar));if(c<0||l+c>o)return null;const u=-a*ar.dot(jf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $M extends Ka{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=wM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hv=new Rt,Hr=new YM,Ll=new wu,Gv=new X,Il=new X,Nl=new X,Ul=new X,Xf=new X,Fl=new X,Wv=new X,Ol=new X;class Wn extends Mn{constructor(e=new hi,n=new $M){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Fl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Xf.fromBufferAttribute(d,e),o?Fl.addScaledVector(Xf,u):Fl.addScaledVector(Xf.sub(n),u))}n.add(Fl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ll.copy(i.boundingSphere),Ll.applyMatrix4(s),Hr.copy(e.ray).recast(e.near),!(Ll.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(Ll,Gv)===null||Hr.origin.distanceToSquared(Gv)>(e.far-e.near)**2))&&(Hv.copy(s).invert(),Hr.copy(e.ray).applyMatrix4(Hv),!(i.boundingBox!==null&&Hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Hr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const v=f[g],h=o[v.materialIndex],_=Math.max(v.start,p.start),x=Math.min(a.count,Math.min(v.start+v.count,p.start+p.count));for(let M=_,T=x;M<T;M+=3){const b=a.getX(M),C=a.getX(M+1),S=a.getX(M+2);r=kl(this,h,e,i,c,u,d,b,C,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let v=g,h=y;v<h;v+=3){const _=a.getX(v),x=a.getX(v+1),M=a.getX(v+2);r=kl(this,o,e,i,c,u,d,_,x,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const v=f[g],h=o[v.materialIndex],_=Math.max(v.start,p.start),x=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let M=_,T=x;M<T;M+=3){const b=M,C=M+1,S=M+2;r=kl(this,h,e,i,c,u,d,b,C,S),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let v=g,h=y;v<h;v+=3){const _=v,x=v+1,M=v+2;r=kl(this,o,e,i,c,u,d,_,x,M),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function EP(t,e,n,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Lr,a),l===null)return null;Ol.copy(a),Ol.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ol);return c<n.near||c>n.far?null:{distance:c,point:Ol.clone(),object:t}}function kl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Il),t.getVertexPosition(l,Nl),t.getVertexPosition(c,Ul);const u=EP(t,e,n,i,Il,Nl,Ul,Wv);if(u){const d=new X;ri.getBarycoord(Wv,Il,Nl,Ul,d),r&&(u.uv=ri.getInterpolatedAttribute(r,a,l,c,d,new Oe)),s&&(u.uv1=ri.getInterpolatedAttribute(s,a,l,c,d,new Oe)),o&&(u.normal=ri.getInterpolatedAttribute(o,a,l,c,d,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new X,materialIndex:0};ri.getNormal(Il,Nl,Ul,f.normal),u.face=f,u.barycoord=d}return u}class qM extends dn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=qt,u=qt,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yf=new X,TP=new X,wP=new Ve;class qr{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Yf.subVectors(i,n).cross(TP.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Yf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||wP.getNormalMatrix(e),r=this.coplanarPoint(Yf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new wu,AP=new Oe(.5,.5),Bl=new X;class KM{constructor(e=new qr,n=new qr,i=new qr,r=new qr,s=new qr,o=new qr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],p=s[7],g=s[8],y=s[9],v=s[10],h=s[11],_=s[12],x=s[13],M=s[14],T=s[15];if(r[0].setComponents(c-o,p-u,h-g,T-_).normalize(),r[1].setComponents(c+o,p+u,h+g,T+_).normalize(),r[2].setComponents(c+a,p+d,h+y,T+x).normalize(),r[3].setComponents(c-a,p-d,h-y,T-x).normalize(),i)r[4].setComponents(l,f,v,M).normalize(),r[5].setComponents(c-l,p-f,h-v,T-M).normalize();else if(r[4].setComponents(c-l,p-f,h-v,T-M).normalize(),n===Ei)r[5].setComponents(c+l,p+f,h+v,T+M).normalize();else if(n===Zc)r[5].setComponents(l,f,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){Gr.center.set(0,0,0);const n=AP.distanceTo(e.center);return Gr.radius=.7071067811865476+n,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Bl.x=r.normal.x>0?e.max.x:e.min.x,Bl.y=r.normal.y>0?e.max.y:e.min.y,Bl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bP extends Ka{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const eu=new X,tu=new X,jv=new Rt,Wo=new YM,Vl=new wu,$f=new X,Xv=new X;class CP extends Mn{constructor(e=new hi,n=new bP){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)eu.fromBufferAttribute(n,r-1),tu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=eu.distanceTo(tu);e.setAttribute("lineDistance",new fi(i,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vl.copy(i.boundingSphere),Vl.applyMatrix4(r),Vl.radius+=s,e.ray.intersectsSphere(Vl)===!1)return;jv.copy(r).invert(),Wo.copy(e.ray).applyMatrix4(jv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=p,v=g-1;y<v;y+=c){const h=u.getX(y),_=u.getX(y+1),x=zl(this,e,Wo,l,h,_,y);x&&n.push(x)}if(this.isLineLoop){const y=u.getX(g-1),v=u.getX(p),h=zl(this,e,Wo,l,y,v,g-1);h&&n.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=p,v=g-1;y<v;y+=c){const h=zl(this,e,Wo,l,y,y+1,y);h&&n.push(h)}if(this.isLineLoop){const y=zl(this,e,Wo,l,g-1,p,g-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(eu.fromBufferAttribute(a,r),tu.fromBufferAttribute(a,s),n.distanceSqToSegment(eu,tu,$f,Xv)>i)return;$f.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo($f);if(!(c<e.near||c>e.far))return{distance:c,point:Xv.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const Yv=new X,$v=new X;class RP extends CP{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Yv.fromBufferAttribute(n,r),$v.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Yv.distanceTo($v);e.setAttribute("lineDistance",new fi(i,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ZM extends dn{constructor(e=[],n=ms,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ka extends dn{constructor(e,n,i=Ri,r,s,o,a=qt,l=qt,c,u=Zi,d=1){if(u!==Zi&&u!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class PP extends ka{constructor(e,n=Ri,i=ms,r,s,o=qt,a=qt,l,c=Zi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class QM extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Za extends hi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new fi(c,3)),this.setAttribute("normal",new fi(u,3)),this.setAttribute("uv",new fi(d,2));function g(y,v,h,_,x,M,T,b,C,S,w){const L=M/C,P=T/S,O=M/2,z=T/2,W=b/2,H=C+1,B=S+1;let k=0,N=0;const Y=new X;for(let J=0;J<B;J++){const ee=J*P-z;for(let re=0;re<H;re++){const Le=re*L-O;Y[y]=Le*_,Y[v]=ee*x,Y[h]=W,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[v]=0,Y[h]=b>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(re/C),d.push(1-J/S),k+=1}}for(let J=0;J<S;J++)for(let ee=0;ee<C;ee++){const re=f+ee+H*J,Le=f+ee+H*(J+1),Ye=f+(ee+1)+H*(J+1),Qe=f+(ee+1)+H*J;l.push(re,Le,Qe),l.push(Le,Ye,Qe),N+=6}a.addGroup(p,N,w),p+=N,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class cs extends hi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],g=[],y=[],v=[];for(let h=0;h<u;h++){const _=h*f-o;for(let x=0;x<c;x++){const M=x*d-s;g.push(M,-_,0),y.push(0,0,1),v.push(x/a),v.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const x=_+c*h,M=_+c*(h+1),T=_+1+c*(h+1),b=_+1+c*h;p.push(x,M,b),p.push(M,T,b)}this.setIndex(p),this.setAttribute("position",new fi(g,3)),this.setAttribute("normal",new fi(y,3)),this.setAttribute("uv",new fi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.widthSegments,e.heightSegments)}}function xo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=xo(t[n]);for(const r in i)e[r]=i[r]}return e}function DP(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function JM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const LP={clone:xo,merge:on};var IP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Ka{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IP,this.fragmentShader=NP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=DP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Jo extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class UP extends Ka{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=X2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FP extends Ka{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hl=new X,Gl=new bo,gi=new X;class nu extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hl,Gl,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Gl,gi.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Hl,Gl,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Gl,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const lr=new X,qv=new Oe,Kv=new Oe;class ii extends nu{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=lp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lp*2*Math.atan(Math.tan(Tf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,n){return this.getViewBounds(e,qv,Kv),n.subVectors(Kv,qv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Tf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class eE extends nu{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ls=-90,Is=1;class OP extends Mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ii(Ls,Is,e,n);r.layers=this.layers,this.add(r);const s=new ii(Ls,Is,e,n);s.layers=this.layers,this.add(s);const o=new ii(Ls,Is,e,n);o.layers=this.layers,this.add(o);const a=new ii(Ls,Is,e,n);a.layers=this.layers,this.add(a);const l=new ii(Ls,Is,e,n);l.layers=this.layers,this.add(l);const c=new ii(Ls,Is,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class kP extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class BP{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ne("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Zv(t,e,n,i){const r=VP(i);switch(n){case kM:return t*e;case VM:return t*e/r.components*r.byteLength;case Om:return t*e/r.components*r.byteLength;case vo:return t*e*2/r.components*r.byteLength;case km:return t*e*2/r.components*r.byteLength;case BM:return t*e*3/r.components*r.byteLength;case zn:return t*e*4/r.components*r.byteLength;case Bm:return t*e*4/r.components*r.byteLength;case dc:case hc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case pc:case mc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dh:case Ih:return Math.max(t,16)*Math.max(e,8)/4;case Ph:case Lh:return Math.max(t,8)*Math.max(e,8)/2;case Nh:case Uh:case Oh:case kh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Fh:case Bh:case Vh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case jh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $h:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case qh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ep:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case tp:case np:case ip:return Math.ceil(t/4)*Math.ceil(e/4)*16;case rp:case sp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case op:case ap:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function VP(t){switch(t){case kn:case NM:return{byteLength:1,components:1};case Fa:case UM:case Pi:return{byteLength:2,components:1};case Um:case Fm:return{byteLength:2,components:4};case Ri:case Nm:case si:return{byteLength:4,components:1};case FM:case OM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Im}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Im);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tE(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function zP(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],y=d[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const y=d[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var HP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,WP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$P=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ZP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,t3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,n3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,i3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,r3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,l3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,c3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,u3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,f3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,d3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,h3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,p3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_3="gl_FragColor = linearToOutputTexel( gl_FragColor );",x3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,S3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,M3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,w3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,P3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,N3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,U3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,V3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,z3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,H3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,G3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Z3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iD=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,oD=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,vD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_D=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ED=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,TD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ID=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ND=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UD=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$D=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ZD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_L=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:HP,alphahash_pars_fragment:GP,alphamap_fragment:WP,alphamap_pars_fragment:jP,alphatest_fragment:XP,alphatest_pars_fragment:YP,aomap_fragment:$P,aomap_pars_fragment:qP,batching_pars_vertex:KP,batching_vertex:ZP,begin_vertex:QP,beginnormal_vertex:JP,bsdfs:e3,iridescence_fragment:t3,bumpmap_pars_fragment:n3,clipping_planes_fragment:i3,clipping_planes_pars_fragment:r3,clipping_planes_pars_vertex:s3,clipping_planes_vertex:o3,color_fragment:a3,color_pars_fragment:l3,color_pars_vertex:c3,color_vertex:u3,common:f3,cube_uv_reflection_fragment:d3,defaultnormal_vertex:h3,displacementmap_pars_vertex:p3,displacementmap_vertex:m3,emissivemap_fragment:g3,emissivemap_pars_fragment:v3,colorspace_fragment:_3,colorspace_pars_fragment:x3,envmap_fragment:y3,envmap_common_pars_fragment:S3,envmap_pars_fragment:M3,envmap_pars_vertex:E3,envmap_physical_pars_fragment:N3,envmap_vertex:T3,fog_vertex:w3,fog_pars_vertex:A3,fog_fragment:b3,fog_pars_fragment:C3,gradientmap_pars_fragment:R3,lightmap_pars_fragment:P3,lights_lambert_fragment:D3,lights_lambert_pars_fragment:L3,lights_pars_begin:I3,lights_toon_fragment:U3,lights_toon_pars_fragment:F3,lights_phong_fragment:O3,lights_phong_pars_fragment:k3,lights_physical_fragment:B3,lights_physical_pars_fragment:V3,lights_fragment_begin:z3,lights_fragment_maps:H3,lights_fragment_end:G3,logdepthbuf_fragment:W3,logdepthbuf_pars_fragment:j3,logdepthbuf_pars_vertex:X3,logdepthbuf_vertex:Y3,map_fragment:$3,map_pars_fragment:q3,map_particle_fragment:K3,map_particle_pars_fragment:Z3,metalnessmap_fragment:Q3,metalnessmap_pars_fragment:J3,morphinstance_vertex:eD,morphcolor_vertex:tD,morphnormal_vertex:nD,morphtarget_pars_vertex:iD,morphtarget_vertex:rD,normal_fragment_begin:sD,normal_fragment_maps:oD,normal_pars_fragment:aD,normal_pars_vertex:lD,normal_vertex:cD,normalmap_pars_fragment:uD,clearcoat_normal_fragment_begin:fD,clearcoat_normal_fragment_maps:dD,clearcoat_pars_fragment:hD,iridescence_pars_fragment:pD,opaque_fragment:mD,packing:gD,premultiplied_alpha_fragment:vD,project_vertex:_D,dithering_fragment:xD,dithering_pars_fragment:yD,roughnessmap_fragment:SD,roughnessmap_pars_fragment:MD,shadowmap_pars_fragment:ED,shadowmap_pars_vertex:TD,shadowmap_vertex:wD,shadowmask_pars_fragment:AD,skinbase_vertex:bD,skinning_pars_vertex:CD,skinning_vertex:RD,skinnormal_vertex:PD,specularmap_fragment:DD,specularmap_pars_fragment:LD,tonemapping_fragment:ID,tonemapping_pars_fragment:ND,transmission_fragment:UD,transmission_pars_fragment:FD,uv_pars_fragment:OD,uv_pars_vertex:kD,uv_vertex:BD,worldpos_vertex:VD,background_vert:zD,background_frag:HD,backgroundCube_vert:GD,backgroundCube_frag:WD,cube_vert:jD,cube_frag:XD,depth_vert:YD,depth_frag:$D,distance_vert:qD,distance_frag:KD,equirect_vert:ZD,equirect_frag:QD,linedashed_vert:JD,linedashed_frag:eL,meshbasic_vert:tL,meshbasic_frag:nL,meshlambert_vert:iL,meshlambert_frag:rL,meshmatcap_vert:sL,meshmatcap_frag:oL,meshnormal_vert:aL,meshnormal_frag:lL,meshphong_vert:cL,meshphong_frag:uL,meshphysical_vert:fL,meshphysical_frag:dL,meshtoon_vert:hL,meshtoon_frag:pL,points_vert:mL,points_frag:gL,shadow_vert:vL,shadow_frag:_L,sprite_vert:xL,sprite_frag:yL},fe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Si={basic:{uniforms:on([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:on([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:on([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:on([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:on([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new tt(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:on([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:on([fe.points,fe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:on([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:on([fe.common,fe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:on([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:on([fe.sprite,fe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:on([fe.common,fe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:on([fe.lights,fe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Si.physical={uniforms:on([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Wl={r:0,b:0,g:0},Wr=new Qi,SL=new Rt;function ML(t,e,n,i,r,s){const o=new tt(0);let a=r===!0?0:1,l,c,u=null,d=0,f=null;function p(_){let x=_.isScene===!0?_.background:null;if(x&&x.isTexture){const M=_.backgroundBlurriness>0;x=e.get(x,M)}return x}function g(_){let x=!1;const M=p(_);M===null?v(o,a):M&&M.isColor&&(v(M,1),x=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(_,x){const M=p(x);M&&(M.isCubeTexture||M.mapping===Tu)?(c===void 0&&(c=new Wn(new Za(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:xo(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Wr.copy(x.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(SL.makeRotationFromEuler(Wr)),c.material.toneMapped=$e.getTransfer(M.colorSpace)!==st,(u!==M||d!==M.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Wn(new cs(2,2),new Di({name:"BackgroundMaterial",uniforms:xo(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=$e.getTransfer(M.colorSpace)!==st,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,f=t.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function v(_,x){_.getRGB(Wl,JM(t)),n.buffers.color.setClear(Wl.r,Wl.g,Wl.b,x,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),a=x,v(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,v(o,a)},render:g,addToRenderList:y,dispose:h}}function EL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(P,O,z,W,H){let B=!1;const k=d(P,W,z,O);s!==k&&(s=k,c(s.object)),B=p(P,W,z,H),B&&g(P,W,z,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,M(P,O,z,W),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function u(P){return t.deleteVertexArray(P)}function d(P,O,z,W){const H=W.wireframe===!0;let B=i[O.id];B===void 0&&(B={},i[O.id]=B);const k=P.isInstancedMesh===!0?P.id:0;let N=B[k];N===void 0&&(N={},B[k]=N);let Y=N[z.id];Y===void 0&&(Y={},N[z.id]=Y);let J=Y[H];return J===void 0&&(J=f(l()),Y[H]=J),J}function f(P){const O=[],z=[],W=[];for(let H=0;H<n;H++)O[H]=0,z[H]=0,W[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:W,object:P,attributes:{},index:null}}function p(P,O,z,W){const H=s.attributes,B=O.attributes;let k=0;const N=z.getAttributes();for(const Y in N)if(N[Y].location>=0){const ee=H[Y];let re=B[Y];if(re===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),ee===void 0||ee.attribute!==re||re&&ee.data!==re.data)return!0;k++}return s.attributesNum!==k||s.index!==W}function g(P,O,z,W){const H={},B=O.attributes;let k=0;const N=z.getAttributes();for(const Y in N)if(N[Y].location>=0){let ee=B[Y];ee===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor));const re={};re.attribute=ee,ee&&ee.data&&(re.data=ee.data),H[Y]=re,k++}s.attributes=H,s.attributesNum=k,s.index=W}function y(){const P=s.newAttributes;for(let O=0,z=P.length;O<z;O++)P[O]=0}function v(P){h(P,0)}function h(P,O){const z=s.newAttributes,W=s.enabledAttributes,H=s.attributeDivisors;z[P]=1,W[P]===0&&(t.enableVertexAttribArray(P),W[P]=1),H[P]!==O&&(t.vertexAttribDivisor(P,O),H[P]=O)}function _(){const P=s.newAttributes,O=s.enabledAttributes;for(let z=0,W=O.length;z<W;z++)O[z]!==P[z]&&(t.disableVertexAttribArray(z),O[z]=0)}function x(P,O,z,W,H,B,k){k===!0?t.vertexAttribIPointer(P,O,z,H,B):t.vertexAttribPointer(P,O,z,W,H,B)}function M(P,O,z,W){y();const H=W.attributes,B=z.getAttributes(),k=O.defaultAttributeValues;for(const N in B){const Y=B[N];if(Y.location>=0){let J=H[N];if(J===void 0&&(N==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),N==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){const ee=J.normalized,re=J.itemSize,Le=e.get(J);if(Le===void 0)continue;const Ye=Le.buffer,Qe=Le.type,Q=Le.bytesPerElement,se=Qe===t.INT||Qe===t.UNSIGNED_INT||J.gpuType===Nm;if(J.isInterleavedBufferAttribute){const oe=J.data,Fe=oe.stride,De=J.offset;if(oe.isInstancedInterleavedBuffer){for(let Ie=0;Ie<Y.locationSize;Ie++)h(Y.location+Ie,oe.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ie=0;Ie<Y.locationSize;Ie++)v(Y.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let Ie=0;Ie<Y.locationSize;Ie++)x(Y.location+Ie,re/Y.locationSize,Qe,ee,Fe*Q,(De+re/Y.locationSize*Ie)*Q,se)}else{if(J.isInstancedBufferAttribute){for(let oe=0;oe<Y.locationSize;oe++)h(Y.location+oe,J.meshPerAttribute);P.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let oe=0;oe<Y.locationSize;oe++)v(Y.location+oe);t.bindBuffer(t.ARRAY_BUFFER,Ye);for(let oe=0;oe<Y.locationSize;oe++)x(Y.location+oe,re/Y.locationSize,Qe,ee,re*Q,re/Y.locationSize*oe*Q,se)}}else if(k!==void 0){const ee=k[N];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(Y.location,ee);break;case 3:t.vertexAttrib3fv(Y.location,ee);break;case 4:t.vertexAttrib4fv(Y.location,ee);break;default:t.vertexAttrib1fv(Y.location,ee)}}}}_()}function T(){w();for(const P in i){const O=i[P];for(const z in O){const W=O[z];for(const H in W){const B=W[H];for(const k in B)u(B[k].object),delete B[k];delete W[H]}}delete i[P]}}function b(P){if(i[P.id]===void 0)return;const O=i[P.id];for(const z in O){const W=O[z];for(const H in W){const B=W[H];for(const k in B)u(B[k].object),delete B[k];delete W[H]}}delete i[P.id]}function C(P){for(const O in i){const z=i[O];for(const W in z){const H=z[W];if(H[P.id]===void 0)continue;const B=H[P.id];for(const k in B)u(B[k].object),delete B[k];delete H[P.id]}}}function S(P){for(const O in i){const z=i[O],W=P.isInstancedMesh===!0?P.id:0,H=z[W];if(H!==void 0){for(const B in H){const k=H[B];for(const N in k)u(k[N].object),delete k[N];delete H[B]}delete z[W],Object.keys(z).length===0&&delete i[O]}}}function w(){L(),o=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:v,disableUnusedAttributes:_}}function TL(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*f[y];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wL(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==zn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const S=C===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==kn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==si&&!S)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ne("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),b=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:v,maxAttributes:h,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:M,maxSamples:T,samples:b}}function AL(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new qr,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,y=d.clipIntersection,v=d.clipShadows,h=t.get(d);if(!r||g===null||g.length===0||s&&!v)s?u(null):c();else{const _=s?0:i,x=_*4;let M=h.clippingState||null;l.value=M,M=u(g,f,x,p);for(let T=0;T!==x;++T)M[T]=n[T];h.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){const y=d!==null?d.length:0;let v=null;if(y!==0){if(v=l.value,g!==!0||v===null){const h=p+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(v===null||v.length<h)&&(v=new Float32Array(h));for(let x=0,M=p;x!==y;++x,M+=4)o.copy(d[x]).applyMatrix4(_,a),o.normal.toArray(v,M),v[M+3]=o.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,v}}const xr=4,Qv=[.125,.215,.35,.446,.526,.582],Zr=20,bL=256,jo=new eE,Jv=new tt;let qf=null,Kf=0,Zf=0,Qf=!1;const CL=new X;class e_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=CL}=s;qf=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qf,Kf,Zf),this._renderer.xr.enabled=Qf,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ms||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qf=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Zf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:Pi,format:zn,colorSpace:_o,depthBuffer:!1},r=t_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t_(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=RL(s)),this._blurMaterial=DL(s,e,n),this._ggxMaterial=PL(s,e,n)}return r}_compileMaterial(e){const n=new Wn(new hi,e);this._renderer.compile(n,jo)}_sceneToCubeUV(e,n,i,r,s){const l=new ii(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Jv),d.toneMapping=bi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wn(new Za,new $M({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,v=y.material;let h=!1;const _=e.background;_?_.isColor&&(v.color.copy(_),e.background=null,h=!0):(v.color.copy(Jv),h=!0);for(let x=0;x<6;x++){const M=x%3;M===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):M===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const T=this._cubeSize;Ns(r,M*T,x>2?T:0,T,T),d.setRenderTarget(r),h&&d.render(y,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=_}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ms||e.mapping===go;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=i_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ns(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,jo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,p=d*f,{_lodMax:g}=this,y=this._sizeLods[i],v=3*y*(i>g-xr?i-g+xr:0),h=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,Ns(s,v,h,3*y,2*y),r.setRenderTarget(s),r.render(a,jo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Ns(e,v,h,3*y,2*y),r.setRenderTarget(e),r.render(a,jo)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Zr-1),y=s/g,v=isFinite(s)?1+Math.floor(u*y):Zr;v>Zr&&Ne(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Zr}`);const h=[];let _=0;for(let C=0;C<Zr;++C){const S=C/y,w=Math.exp(-S*S/2);h.push(w),C===0?_+=w:C<v&&(_+=2*w)}for(let C=0;C<h.length;C++)h[C]=h[C]/_;f.envMap.value=e.texture,f.samples.value=v,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const M=this._sizeLods[r],T=3*M*(r>x-xr?r-x+xr:0),b=4*(this._cubeSize-M);Ns(n,T,b,3*M,2*M),l.setRenderTarget(n),l.render(d,jo)}}function RL(t){const e=[],n=[],i=[];let r=t;const s=t-xr+1+Qv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-xr?l=Qv[o-t+xr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,y=3,v=2,h=1,_=new Float32Array(y*g*p),x=new Float32Array(v*g*p),M=new Float32Array(h*g*p);for(let b=0;b<p;b++){const C=b%3*2/3-1,S=b>2?0:-1,w=[C,S,0,C+2/3,S,0,C+2/3,S+1,0,C,S,0,C+2/3,S+1,0,C,S+1,0];_.set(w,y*g*b),x.set(f,v*g*b);const L=[b,b,b,b,b,b];M.set(L,h*g*b)}const T=new hi;T.setAttribute("position",new ui(_,y)),T.setAttribute("uv",new ui(x,v)),T.setAttribute("faceIndex",new ui(M,h)),i.push(new Wn(T,null)),r>xr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function t_(t,e,n){const i=new ci(t,e,n);return i.texture.mapping=Tu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ns(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function PL(t,e,n){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Au(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function DL(t,e,n){const i=new Float32Array(Zr),r=new X(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function n_(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function i_(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Au(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class nE extends ci{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ZM(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Za(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:ji});s.uniforms.tEquirect.value=n;const o=new Wn(r,s),a=n.minFilter;return n.minFilter===is&&(n.minFilter=Nt),new OP(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function LL(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?o(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===Sf||p===Mf)if(e.has(f)){const g=e.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const y=new nE(g.height);return y.fromEquirectangularTexture(t,f),e.set(f,y),f.addEventListener("dispose",c),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const p=f.mapping,g=p===Sf||p===Mf,y=p===ms||p===go;if(g||y){let v=n.get(f);const h=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new e_(t)),v=g?i.fromEquirectangular(f,v):i.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,n.set(f,v),v.texture;if(v!==void 0)return v.texture;{const _=f.image;return g&&_&&_.height>0||y&&_&&l(_)?(i===null&&(i=new e_(t)),v=g?i.fromEquirectangular(f):i.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,n.set(f,v),f.addEventListener("dispose",u),v.texture):null}}}return f}function a(f,p){return p===Sf?f.mapping=ms:p===Mf&&(f.mapping=go),f}function l(f){let p=0;const g=6;for(let y=0;y<g;y++)f[y]!==void 0&&p++;return p===g}function c(f){const p=f.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const g=n.get(p);g!==void 0&&(n.delete(p),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function IL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Jc("WebGLRenderer: "+i+" extension not supported."),r}}}function NL(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let y=0;if(g===void 0)return;if(p!==null){const _=p.array;y=p.version;for(let x=0,M=_.length;x<M;x+=3){const T=_[x+0],b=_[x+1],C=_[x+2];f.push(T,b,b,C,C,T)}}else{const _=g.array;y=g.version;for(let x=0,M=_.length/3-1;x<M;x+=3){const T=x+0,b=x+1,C=x+2;f.push(T,b,b,C,C,T)}}const v=new(g.count>=65535?XM:jM)(f,1);v.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,v)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function UL(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,f*o,g),n.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let v=0;for(let h=0;h<g;h++)v+=p[h];n.update(v,i,1)}function d(f,p,g,y){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],y[h]);else{v.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,y,0,g);let h=0;for(let _=0;_<g;_++)h+=p[_]*y[_];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function FL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Ze("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function OL(t,e,n){const i=new WeakMap,r=new At;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let L=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",L)};var p=L;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),v===!0&&(M=3);let T=a.attributes.position.count*M,b=1;T>e.maxTextureSize&&(b=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*b*4*d),S=new HM(C,T,b,d);S.type=si,S.needsUpdate=!0;const w=M*4;for(let P=0;P<d;P++){const O=h[P],z=_[P],W=x[P],H=T*b*4*P;for(let B=0;B<O.count;B++){const k=B*w;g===!0&&(r.fromBufferAttribute(O,B),C[H+k+0]=r.x,C[H+k+1]=r.y,C[H+k+2]=r.z,C[H+k+3]=0),y===!0&&(r.fromBufferAttribute(z,B),C[H+k+4]=r.x,C[H+k+5]=r.y,C[H+k+6]=r.z,C[H+k+7]=0),v===!0&&(r.fromBufferAttribute(W,B),C[H+k+8]=r.x,C[H+k+9]=r.y,C[H+k+10]=r.z,C[H+k+11]=W.itemSize===4?r.w:1)}}f={count:d,texture:S,size:new Oe(T,b)},i.set(a,f),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let v=0;v<c.length;v++)g+=c[v];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function kL(t,e,n,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const BL={[AM]:"LINEAR_TONE_MAPPING",[bM]:"REINHARD_TONE_MAPPING",[CM]:"CINEON_TONE_MAPPING",[RM]:"ACES_FILMIC_TONE_MAPPING",[DM]:"AGX_TONE_MAPPING",[LM]:"NEUTRAL_TONE_MAPPING",[PM]:"CUSTOM_TONE_MAPPING"};function VL(t,e,n,i,r){const s=new ci(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),o=new ci(e,n,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),a=new hi;a.setAttribute("position",new fi([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new fi([0,2,0,0,2,0],2));const l=new Jo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Wn(a,l),u=new eE(-1,1,1,-1,0,1);let d=null,f=null,p=!1,g,y=null,v=[],h=!1;this.setSize=function(_,x){s.setSize(_,x),o.setSize(_,x);for(let M=0;M<v.length;M++){const T=v[M];T.setSize&&T.setSize(_,x)}},this.setEffects=function(_){v=_,h=v.length>0&&v[0].isRenderPass===!0;const x=s.width,M=s.height;for(let T=0;T<v.length;T++){const b=v[T];b.setSize&&b.setSize(x,M)}},this.begin=function(_,x){if(p||_.toneMapping===bi&&v.length===0)return!1;if(y=x,x!==null){const M=x.width,T=x.height;(s.width!==M||s.height!==T)&&this.setSize(M,T)}return h===!1&&_.setRenderTarget(s),g=_.toneMapping,_.toneMapping=bi,!0},this.hasRenderPass=function(){return h},this.end=function(_,x){_.toneMapping=g,p=!0;let M=s,T=o;for(let b=0;b<v.length;b++){const C=v[b];if(C.enabled!==!1&&(C.render(_,T,M,x),C.needsSwap!==!1)){const S=M;M=T,T=S}}if(d!==_.outputColorSpace||f!==_.toneMapping){d=_.outputColorSpace,f=_.toneMapping,l.defines={},$e.getTransfer(d)===st&&(l.defines.SRGB_TRANSFER="");const b=BL[f];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(y),_.render(c,u),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const iE=new dn,cp=new ka(1,1),rE=new HM,sE=new fP,oE=new ZM,r_=[],s_=[],o_=new Float32Array(16),a_=new Float32Array(9),l_=new Float32Array(4);function Co(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=r_[r];if(s===void 0&&(s=new Float32Array(r),r_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bu(t,e){let n=s_[e];n===void 0&&(n=new Int32Array(e),s_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function zL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function HL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function GL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function WL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function jL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;l_.set(i),t.uniformMatrix2fv(this.addr,!1,l_),Bt(n,i)}}function XL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;a_.set(i),t.uniformMatrix3fv(this.addr,!1,a_),Bt(n,i)}}function YL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;o_.set(i),t.uniformMatrix4fv(this.addr,!1,o_),Bt(n,i)}}function $L(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function qL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function KL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function ZL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function QL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function JL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function eI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function tI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function nI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(cp.compareFunction=n.isReversedDepthBuffer()?zm:Vm,s=cp):s=iE,n.setTexture2D(e||s,r)}function iI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||sE,r)}function rI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||oE,r)}function sI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||rE,r)}function oI(t){switch(t){case 5126:return zL;case 35664:return HL;case 35665:return GL;case 35666:return WL;case 35674:return jL;case 35675:return XL;case 35676:return YL;case 5124:case 35670:return $L;case 35667:case 35671:return qL;case 35668:case 35672:return KL;case 35669:case 35673:return ZL;case 5125:return QL;case 36294:return JL;case 36295:return eI;case 36296:return tI;case 35678:case 36198:case 36298:case 36306:case 35682:return nI;case 35679:case 36299:case 36307:return iI;case 35680:case 36300:case 36308:case 36293:return rI;case 36289:case 36303:case 36311:case 36292:return sI}}function aI(t,e){t.uniform1fv(this.addr,e)}function lI(t,e){const n=Co(e,this.size,2);t.uniform2fv(this.addr,n)}function cI(t,e){const n=Co(e,this.size,3);t.uniform3fv(this.addr,n)}function uI(t,e){const n=Co(e,this.size,4);t.uniform4fv(this.addr,n)}function fI(t,e){const n=Co(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function dI(t,e){const n=Co(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function hI(t,e){const n=Co(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function pI(t,e){t.uniform1iv(this.addr,e)}function mI(t,e){t.uniform2iv(this.addr,e)}function gI(t,e){t.uniform3iv(this.addr,e)}function vI(t,e){t.uniform4iv(this.addr,e)}function _I(t,e){t.uniform1uiv(this.addr,e)}function xI(t,e){t.uniform2uiv(this.addr,e)}function yI(t,e){t.uniform3uiv(this.addr,e)}function SI(t,e){t.uniform4uiv(this.addr,e)}function MI(t,e,n){const i=this.cache,r=e.length,s=bu(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=cp:o=iE;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function EI(t,e,n){const i=this.cache,r=e.length,s=bu(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||sE,s[o])}function TI(t,e,n){const i=this.cache,r=e.length,s=bu(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||oE,s[o])}function wI(t,e,n){const i=this.cache,r=e.length,s=bu(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||rE,s[o])}function AI(t){switch(t){case 5126:return aI;case 35664:return lI;case 35665:return cI;case 35666:return uI;case 35674:return fI;case 35675:return dI;case 35676:return hI;case 5124:case 35670:return pI;case 35667:case 35671:return mI;case 35668:case 35672:return gI;case 35669:case 35673:return vI;case 5125:return _I;case 36294:return xI;case 36295:return yI;case 36296:return SI;case 35678:case 36198:case 36298:case 36306:case 35682:return MI;case 35679:case 36299:case 36307:return EI;case 35680:case 36300:case 36308:case 36293:return TI;case 36289:case 36303:case 36311:case 36292:return wI}}class bI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=oI(n.type)}}class CI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=AI(n.type)}}class RI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Jf=/(\w+)(\])?(\[|\.)?/g;function c_(t,e){t.seq.push(e),t.map[e.id]=e}function PI(t,e,n){const i=t.name,r=i.length;for(Jf.lastIndex=0;;){const s=Jf.exec(i),o=Jf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){c_(n,c===void 0?new bI(a,t,e):new CI(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new RI(a),c_(n,d)),n=d}}}class gc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);PI(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function u_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const DI=37297;let LI=0;function II(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const f_=new Ve;function NI(t){$e._getMatrix(f_,$e.workingColorSpace,t);const e=`mat3( ${f_.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case Kc:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function d_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+II(t.getShaderSource(e),a)}else return s}function UI(t,e){const n=NI(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const FI={[AM]:"Linear",[bM]:"Reinhard",[CM]:"Cineon",[RM]:"ACESFilmic",[DM]:"AgX",[LM]:"Neutral",[PM]:"Custom"};function OI(t,e){const n=FI[e];return n===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const jl=new X;function kI(){$e.getLuminanceCoefficients(jl);const t=jl.x.toFixed(4),e=jl.y.toFixed(4),n=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function VI(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function zI(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ea(t){return t!==""}function h_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function p_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HI=/^[ \t]*#include +<([\w\d./]+)>/gm;function up(t){return t.replace(HI,WI)}const GI=new Map;function WI(t,e){let n=ze[e];if(n===void 0){const i=GI.get(e);if(i!==void 0)n=ze[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return up(n)}const jI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m_(t){return t.replace(jI,XI)}function XI(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function g_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const YI={[fc]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function $I(t){return YI[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qI={[ms]:"ENVMAP_TYPE_CUBE",[go]:"ENVMAP_TYPE_CUBE",[Tu]:"ENVMAP_TYPE_CUBE_UV"};function KI(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":qI[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const ZI={[go]:"ENVMAP_MODE_REFRACTION"};function QI(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":ZI[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const JI={[wM]:"ENVMAP_BLENDING_MULTIPLY",[G2]:"ENVMAP_BLENDING_MIX",[W2]:"ENVMAP_BLENDING_ADD"};function eN(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":JI[t.combine]||"ENVMAP_BLENDING_NONE"}function tN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function nN(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=$I(n),c=KI(n),u=QI(n),d=eN(n),f=tN(n),p=BI(n),g=VI(s),y=r.createProgram();let v,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ea).join(`
`),v.length>0&&(v+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ea).join(`
`),h.length>0&&(h+=`
`)):(v=[g_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),h=[g_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==bi?"#define TONE_MAPPING":"",n.toneMapping!==bi?ze.tonemapping_pars_fragment:"",n.toneMapping!==bi?OI("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,UI("linearToOutputTexel",n.outputColorSpace),kI(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ea).join(`
`)),o=up(o),o=h_(o,n),o=p_(o,n),a=up(a),a=h_(a,n),a=p_(a,n),o=m_(o),a=m_(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,h=["#define varying in",n.glslVersion===bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=_+v+o,M=_+h+a,T=u_(r,r.VERTEX_SHADER,x),b=u_(r,r.FRAGMENT_SHADER,M);r.attachShader(y,T),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(P){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(y)||"",z=r.getShaderInfoLog(T)||"",W=r.getShaderInfoLog(b)||"",H=O.trim(),B=z.trim(),k=W.trim();let N=!0,Y=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(N=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,T,b);else{const J=d_(r,T,"vertex"),ee=d_(r,b,"fragment");Ze("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+J+`
`+ee)}else H!==""?Ne("WebGLProgram: Program Info Log:",H):(B===""||k==="")&&(Y=!1);Y&&(P.diagnostics={runnable:N,programLog:H,vertexShader:{log:B,prefix:v},fragmentShader:{log:k,prefix:h}})}r.deleteShader(T),r.deleteShader(b),S=new gc(r,y),w=zI(r,y)}let S;this.getUniforms=function(){return S===void 0&&C(this),S};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(y,DI)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=LI++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=b,this}let iN=0;class rN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new sN(e),n.set(e,i)),i}}class sN{constructor(e){this.id=iN++,this.code=e,this.usedTimes=0}}function oN(t,e,n,i,r,s){const o=new GM,a=new rN,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function y(S,w,L,P,O){const z=P.fog,W=O.geometry,H=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?P.environment:null,B=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,k=e.get(S.envMap||H,B),N=k&&k.mapping===Tu?k.image.height:null,Y=p[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&Ne("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const J=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ee=J!==void 0?J.length:0;let re=0;W.morphAttributes.position!==void 0&&(re=1),W.morphAttributes.normal!==void 0&&(re=2),W.morphAttributes.color!==void 0&&(re=3);let Le,Ye,Qe,Q;if(Y){const rt=Si[Y];Le=rt.vertexShader,Ye=rt.fragmentShader}else Le=S.vertexShader,Ye=S.fragmentShader,a.update(S),Qe=a.getVertexShaderID(S),Q=a.getFragmentShaderID(S);const se=t.getRenderTarget(),oe=t.state.buffers.depth.getReversed(),Fe=O.isInstancedMesh===!0,De=O.isBatchedMesh===!0,Ie=!!S.map,Pt=!!S.matcap,je=!!k,Je=!!S.aoMap,nt=!!S.lightMap,Be=!!S.bumpMap,gt=!!S.normalMap,D=!!S.displacementMap,vt=!!S.emissiveMap,et=!!S.metalnessMap,it=!!S.roughnessMap,Se=S.anisotropy>0,A=S.clearcoat>0,m=S.dispersion>0,R=S.iridescence>0,F=S.sheen>0,K=S.transmission>0,$=Se&&!!S.anisotropyMap,he=A&&!!S.clearcoatMap,ae=A&&!!S.clearcoatNormalMap,Te=A&&!!S.clearcoatRoughnessMap,Pe=R&&!!S.iridescenceMap,ne=R&&!!S.iridescenceThicknessMap,le=F&&!!S.sheenColorMap,Me=F&&!!S.sheenRoughnessMap,we=!!S.specularMap,ge=!!S.specularColorMap,He=!!S.specularIntensityMap,I=K&&!!S.transmissionMap,ue=K&&!!S.thicknessMap,ce=!!S.gradientMap,xe=!!S.alphaMap,ie=S.alphaTest>0,Z=!!S.alphaHash,Ee=!!S.extensions;let Ue=bi;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ue=t.toneMapping);const ut={shaderID:Y,shaderType:S.type,shaderName:S.name,vertexShader:Le,fragmentShader:Ye,defines:S.defines,customVertexShaderID:Qe,customFragmentShaderID:Q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:De,batchingColor:De&&O._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&O.instanceColor!==null,instancingMorph:Fe&&O.morphTexture!==null,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:_o,alphaToCoverage:!!S.alphaToCoverage,map:Ie,matcap:Pt,envMap:je,envMapMode:je&&k.mapping,envMapCubeUVHeight:N,aoMap:Je,lightMap:nt,bumpMap:Be,normalMap:gt,displacementMap:D,emissiveMap:vt,normalMapObjectSpace:gt&&S.normalMapType===$2,normalMapTangentSpace:gt&&S.normalMapType===Y2,metalnessMap:et,roughnessMap:it,anisotropy:Se,anisotropyMap:$,clearcoat:A,clearcoatMap:he,clearcoatNormalMap:ae,clearcoatRoughnessMap:Te,dispersion:m,iridescence:R,iridescenceMap:Pe,iridescenceThicknessMap:ne,sheen:F,sheenColorMap:le,sheenRoughnessMap:Me,specularMap:we,specularColorMap:ge,specularIntensityMap:He,transmission:K,transmissionMap:I,thicknessMap:ue,gradientMap:ce,opaque:S.transparent===!1&&S.blending===io&&S.alphaToCoverage===!1,alphaMap:xe,alphaTest:ie,alphaHash:Z,combine:S.combine,mapUv:Ie&&g(S.map.channel),aoMapUv:Je&&g(S.aoMap.channel),lightMapUv:nt&&g(S.lightMap.channel),bumpMapUv:Be&&g(S.bumpMap.channel),normalMapUv:gt&&g(S.normalMap.channel),displacementMapUv:D&&g(S.displacementMap.channel),emissiveMapUv:vt&&g(S.emissiveMap.channel),metalnessMapUv:et&&g(S.metalnessMap.channel),roughnessMapUv:it&&g(S.roughnessMap.channel),anisotropyMapUv:$&&g(S.anisotropyMap.channel),clearcoatMapUv:he&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:le&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(S.sheenRoughnessMap.channel),specularMapUv:we&&g(S.specularMap.channel),specularColorMapUv:ge&&g(S.specularColorMap.channel),specularIntensityMapUv:He&&g(S.specularIntensityMap.channel),transmissionMapUv:I&&g(S.transmissionMap.channel),thicknessMapUv:ue&&g(S.thicknessMap.channel),alphaMapUv:xe&&g(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(gt||Se),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(Ie||xe),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||W.attributes.normal===void 0&&gt===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:oe,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ie&&S.map.isVideoTexture===!0&&$e.getTransfer(S.map.colorSpace)===st,decodeVideoTextureEmissive:vt&&S.emissiveMap.isVideoTexture===!0&&$e.getTransfer(S.emissiveMap.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===zi,flipSided:S.side===Sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ee&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&S.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function v(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)w.push(L),w.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(h(w,S),_(w,S),w.push(t.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function h(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function _(S,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),S.push(o.mask)}function x(S){const w=p[S.type];let L;if(w){const P=Si[w];L=LP.clone(P.uniforms)}else L=S.uniforms;return L}function M(S,w){let L=u.get(w);return L!==void 0?++L.usedTimes:(L=new nN(t,w,S,r),c.push(L),u.set(w,L)),L}function T(S){if(--S.usedTimes===0){const w=c.indexOf(S);c[w]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function b(S){a.remove(S)}function C(){a.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:x,acquireProgram:M,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:C}}function aN(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function lN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function v_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function __(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,g,y,v,h){let _=t[e];return _===void 0?(_={id:f.id,object:f,geometry:p,material:g,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:v,group:h},t[e]=_):(_.id=f.id,_.object=f,_.geometry=p,_.material=g,_.materialVariant=o(f),_.groupOrder=y,_.renderOrder=f.renderOrder,_.z=v,_.group=h),e++,_}function l(f,p,g,y,v,h){const _=a(f,p,g,y,v,h);g.transmission>0?i.push(_):g.transparent===!0?r.push(_):n.push(_)}function c(f,p,g,y,v,h){const _=a(f,p,g,y,v,h);g.transmission>0?i.unshift(_):g.transparent===!0?r.unshift(_):n.unshift(_)}function u(f,p){n.length>1&&n.sort(f||lN),i.length>1&&i.sort(p||v_),r.length>1&&r.sort(p||v_)}function d(){for(let f=e,p=t.length;f<p;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function cN(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new __,t.set(i,[o])):r>=s.length?(o=new __,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function uN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new tt};break;case"SpotLight":n={position:new X,direction:new X,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function fN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let dN=0;function hN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function pN(t){const e=new uN,n=fN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new Rt,o=new Rt;function a(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,y=0,v=0,h=0,_=0,x=0,M=0,T=0,b=0,C=0;c.sort(hN);for(let w=0,L=c.length;w<L;w++){const P=c[w],O=P.color,z=P.intensity,W=P.distance;let H=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===vo?H=P.shadow.map.texture:H=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=O.r*z,d+=O.g*z,f+=O.b*z;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],z);C++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const k=P.shadow,N=n.get(P);N.shadowIntensity=k.intensity,N.shadowBias=k.bias,N.shadowNormalBias=k.normalBias,N.shadowRadius=k.radius,N.shadowMapSize=k.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=P.shadow.matrix,_++}i.directional[p]=B,p++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(O).multiplyScalar(z),B.distance=W,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[y]=B;const k=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,k.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[y]=k.matrix,P.castShadow){const N=n.get(P);N.shadowIntensity=k.intensity,N.shadowBias=k.bias,N.shadowNormalBias=k.normalBias,N.shadowRadius=k.radius,N.shadowMapSize=k.mapSize,i.spotShadow[y]=N,i.spotShadowMap[y]=H,M++}y++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(O).multiplyScalar(z),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=B,v++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const k=P.shadow,N=n.get(P);N.shadowIntensity=k.intensity,N.shadowBias=k.bias,N.shadowNormalBias=k.normalBias,N.shadowRadius=k.radius,N.shadowMapSize=k.mapSize,N.shadowCameraNear=k.camera.near,N.shadowCameraFar=k.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=P.shadow.matrix,x++}i.point[g]=B,g++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(z),B.groundColor.copy(P.groundColor).multiplyScalar(z),i.hemi[h]=B,h++}}v>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==p||S.pointLength!==g||S.spotLength!==y||S.rectAreaLength!==v||S.hemiLength!==h||S.numDirectionalShadows!==_||S.numPointShadows!==x||S.numSpotShadows!==M||S.numSpotMaps!==T||S.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=v,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,S.directionalLength=p,S.pointLength=g,S.spotLength=y,S.rectAreaLength=v,S.hemiLength=h,S.numDirectionalShadows=_,S.numPointShadows=x,S.numSpotShadows=M,S.numSpotMaps=T,S.numLightProbes=C,i.version=dN++)}function l(c,u){let d=0,f=0,p=0,g=0,y=0;const v=u.matrixWorldInverse;for(let h=0,_=c.length;h<_;h++){const x=c[h];if(x.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),d++}else if(x.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(v),p++}else if(x.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(v),o.identity(),s.copy(x.matrixWorld),s.premultiply(v),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(v),f++}else if(x.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(v),y++}}}return{setup:a,setupView:l,state:i}}function x_(t){const e=new pN(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function mN(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new x_(t),e.set(r,[a])):s>=o.length?(a=new x_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const gN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_N=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],xN=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],y_=new Rt,Xo=new X,ed=new X;function yN(t,e,n){let i=new KM;const r=new Oe,s=new Oe,o=new At,a=new UP,l=new FP,c={},u=n.maxTextureSize,d={[Lr]:Sn,[Sn]:Lr,[zi]:zi},f=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:gN,fragmentShader:vN}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new hi;g.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Wn(g,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let h=this.type;this.render=function(b,C,S){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||b.length===0)return;this.type===T2&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=fc);const w=t.getRenderTarget(),L=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),O=t.state;O.setBlending(ji),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=h!==this.type;z&&C.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(H=>H.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,H=b.length;W<H;W++){const B=b[W],k=B.shadow;if(k===void 0){Ne("WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const N=k.getFrameExtents();r.multiply(N),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/N.x),r.x=s.x*N.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/N.y),r.y=s.y*N.y,k.mapSize.y=s.y));const Y=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Y,k.map===null||z===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Qo){if(B.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new ci(r.x,r.y,{format:vo,type:Pi,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),k.map.texture.name=B.name+".shadowMap",k.map.depthTexture=new ka(r.x,r.y,si),k.map.depthTexture.name=B.name+".shadowMapDepth",k.map.depthTexture.format=Zi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=qt,k.map.depthTexture.magFilter=qt}else B.isPointLight?(k.map=new nE(r.x),k.map.depthTexture=new PP(r.x,Ri)):(k.map=new ci(r.x,r.y),k.map.depthTexture=new ka(r.x,r.y,Ri)),k.map.depthTexture.name=B.name+".shadowMap",k.map.depthTexture.format=Zi,this.type===fc?(k.map.depthTexture.compareFunction=Y?zm:Vm,k.map.depthTexture.minFilter=Nt,k.map.depthTexture.magFilter=Nt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=qt,k.map.depthTexture.magFilter=qt);k.camera.updateProjectionMatrix()}const J=k.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<J;ee++){if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,ee),t.clear();else{ee===0&&(t.setRenderTarget(k.map),t.clear());const re=k.getViewport(ee);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),O.viewport(o)}if(B.isPointLight){const re=k.camera,Le=k.matrix,Ye=B.distance||re.far;Ye!==re.far&&(re.far=Ye,re.updateProjectionMatrix()),Xo.setFromMatrixPosition(B.matrixWorld),re.position.copy(Xo),ed.copy(re.position),ed.add(_N[ee]),re.up.copy(xN[ee]),re.lookAt(ed),re.updateMatrixWorld(),Le.makeTranslation(-Xo.x,-Xo.y,-Xo.z),y_.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),k._frustum.setFromProjectionMatrix(y_,re.coordinateSystem,re.reversedDepth)}else k.updateMatrices(B);i=k.getFrustum(),M(C,S,k.camera,B,this.type)}k.isPointLightShadow!==!0&&this.type===Qo&&_(k,S),k.needsUpdate=!1}h=this.type,v.needsUpdate=!1,t.setRenderTarget(w,L,P)};function _(b,C){const S=e.update(y);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ci(r.x,r.y,{format:vo,type:Pi})),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(C,null,S,f,y,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(C,null,S,p,y,null)}function x(b,C,S,w){let L=null;const P=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)L=P;else if(L=S.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=L.uuid,z=C.uuid;let W=c[O];W===void 0&&(W={},c[O]=W);let H=W[z];H===void 0&&(H=L.clone(),W[z]=H,C.addEventListener("dispose",T)),L=H}if(L.visible=C.visible,L.wireframe=C.wireframe,w===Qo?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:d[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,S.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const O=t.properties.get(L);O.light=S}return L}function M(b,C,S,w,L){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===Qo)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const z=e.update(b),W=b.material;if(Array.isArray(W)){const H=z.groups;for(let B=0,k=H.length;B<k;B++){const N=H[B],Y=W[N.materialIndex];if(Y&&Y.visible){const J=x(b,Y,w,L);b.onBeforeShadow(t,b,C,S,z,J,N),t.renderBufferDirect(S,null,z,J,b,N),b.onAfterShadow(t,b,C,S,z,J,N)}}}else if(W.visible){const H=x(b,W,w,L);b.onBeforeShadow(t,b,C,S,z,H,null),t.renderBufferDirect(S,null,z,H,b,null),b.onAfterShadow(t,b,C,S,z,H,null)}}const O=b.children;for(let z=0,W=O.length;z<W;z++)M(O[z],C,S,w,L)}function T(b){b.target.removeEventListener("dispose",T);for(const S in c){const w=c[S],L=b.target.uuid;L in w&&(w[L].dispose(),delete w[L])}}}function SN(t,e){function n(){let I=!1;const ue=new At;let ce=null;const xe=new At(0,0,0,0);return{setMask:function(ie){ce!==ie&&!I&&(t.colorMask(ie,ie,ie,ie),ce=ie)},setLocked:function(ie){I=ie},setClear:function(ie,Z,Ee,Ue,ut){ut===!0&&(ie*=Ue,Z*=Ue,Ee*=Ue),ue.set(ie,Z,Ee,Ue),xe.equals(ue)===!1&&(t.clearColor(ie,Z,Ee,Ue),xe.copy(ue))},reset:function(){I=!1,ce=null,xe.set(-1,0,0,0)}}}function i(){let I=!1,ue=!1,ce=null,xe=null,ie=null;return{setReversed:function(Z){if(ue!==Z){const Ee=e.get("EXT_clip_control");Z?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),ue=Z;const Ue=ie;ie=null,this.setClear(Ue)}},getReversed:function(){return ue},setTest:function(Z){Z?se(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(Z){ce!==Z&&!I&&(t.depthMask(Z),ce=Z)},setFunc:function(Z){if(ue&&(Z=rP[Z]),xe!==Z){switch(Z){case Sh:t.depthFunc(t.NEVER);break;case Mh:t.depthFunc(t.ALWAYS);break;case Eh:t.depthFunc(t.LESS);break;case mo:t.depthFunc(t.LEQUAL);break;case Th:t.depthFunc(t.EQUAL);break;case wh:t.depthFunc(t.GEQUAL);break;case Ah:t.depthFunc(t.GREATER);break;case bh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=Z}},setLocked:function(Z){I=Z},setClear:function(Z){ie!==Z&&(ie=Z,ue&&(Z=1-Z),t.clearDepth(Z))},reset:function(){I=!1,ce=null,xe=null,ie=null,ue=!1}}}function r(){let I=!1,ue=null,ce=null,xe=null,ie=null,Z=null,Ee=null,Ue=null,ut=null;return{setTest:function(rt){I||(rt?se(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(rt){ue!==rt&&!I&&(t.stencilMask(rt),ue=rt)},setFunc:function(rt,Li,Ii){(ce!==rt||xe!==Li||ie!==Ii)&&(t.stencilFunc(rt,Li,Ii),ce=rt,xe=Li,ie=Ii)},setOp:function(rt,Li,Ii){(Z!==rt||Ee!==Li||Ue!==Ii)&&(t.stencilOp(rt,Li,Ii),Z=rt,Ee=Li,Ue=Ii)},setLocked:function(rt){I=rt},setClear:function(rt){ut!==rt&&(t.clearStencil(rt),ut=rt)},reset:function(){I=!1,ue=null,ce=null,xe=null,ie=null,Z=null,Ee=null,Ue=null,ut=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],g=null,y=!1,v=null,h=null,_=null,x=null,M=null,T=null,b=null,C=new tt(0,0,0),S=0,w=!1,L=null,P=null,O=null,z=null,W=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,k=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(N)[1]),B=k>=1):N.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),B=k>=2);let Y=null,J={};const ee=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),Le=new At().fromArray(ee),Ye=new At().fromArray(re);function Qe(I,ue,ce,xe){const ie=new Uint8Array(4),Z=t.createTexture();t.bindTexture(I,Z),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<ce;Ee++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(ue+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return Z}const Q={};Q[t.TEXTURE_2D]=Qe(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=Qe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=Qe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=Qe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(t.DEPTH_TEST),o.setFunc(mo),Be(!1),gt(Mv),se(t.CULL_FACE),Je(ji);function se(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function oe(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function Fe(I,ue){return d[I]!==ue?(t.bindFramebuffer(I,ue),d[I]=ue,I===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ue),I===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function De(I,ue){let ce=p,xe=!1;if(I){ce=f.get(ue),ce===void 0&&(ce=[],f.set(ue,ce));const ie=I.textures;if(ce.length!==ie.length||ce[0]!==t.COLOR_ATTACHMENT0){for(let Z=0,Ee=ie.length;Z<Ee;Z++)ce[Z]=t.COLOR_ATTACHMENT0+Z;ce.length=ie.length,xe=!0}}else ce[0]!==t.BACK&&(ce[0]=t.BACK,xe=!0);xe&&t.drawBuffers(ce)}function Ie(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const Pt={[Kr]:t.FUNC_ADD,[A2]:t.FUNC_SUBTRACT,[b2]:t.FUNC_REVERSE_SUBTRACT};Pt[C2]=t.MIN,Pt[R2]=t.MAX;const je={[P2]:t.ZERO,[D2]:t.ONE,[L2]:t.SRC_COLOR,[xh]:t.SRC_ALPHA,[k2]:t.SRC_ALPHA_SATURATE,[F2]:t.DST_COLOR,[N2]:t.DST_ALPHA,[I2]:t.ONE_MINUS_SRC_COLOR,[yh]:t.ONE_MINUS_SRC_ALPHA,[O2]:t.ONE_MINUS_DST_COLOR,[U2]:t.ONE_MINUS_DST_ALPHA,[B2]:t.CONSTANT_COLOR,[V2]:t.ONE_MINUS_CONSTANT_COLOR,[z2]:t.CONSTANT_ALPHA,[H2]:t.ONE_MINUS_CONSTANT_ALPHA};function Je(I,ue,ce,xe,ie,Z,Ee,Ue,ut,rt){if(I===ji){y===!0&&(oe(t.BLEND),y=!1);return}if(y===!1&&(se(t.BLEND),y=!0),I!==w2){if(I!==v||rt!==w){if((h!==Kr||M!==Kr)&&(t.blendEquation(t.FUNC_ADD),h=Kr,M=Kr),rt)switch(I){case io:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _h:t.blendFunc(t.ONE,t.ONE);break;case Ev:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tv:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ze("WebGLState: Invalid blending: ",I);break}else switch(I){case io:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _h:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Ev:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tv:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",I);break}_=null,x=null,T=null,b=null,C.set(0,0,0),S=0,v=I,w=rt}return}ie=ie||ue,Z=Z||ce,Ee=Ee||xe,(ue!==h||ie!==M)&&(t.blendEquationSeparate(Pt[ue],Pt[ie]),h=ue,M=ie),(ce!==_||xe!==x||Z!==T||Ee!==b)&&(t.blendFuncSeparate(je[ce],je[xe],je[Z],je[Ee]),_=ce,x=xe,T=Z,b=Ee),(Ue.equals(C)===!1||ut!==S)&&(t.blendColor(Ue.r,Ue.g,Ue.b,ut),C.copy(Ue),S=ut),v=I,w=!1}function nt(I,ue){I.side===zi?oe(t.CULL_FACE):se(t.CULL_FACE);let ce=I.side===Sn;ue&&(ce=!ce),Be(ce),I.blending===io&&I.transparent===!1?Je(ji):Je(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const xe=I.stencilWrite;a.setTest(xe),xe&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),vt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(I){L!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),L=I)}function gt(I){I!==M2?(se(t.CULL_FACE),I!==P&&(I===Mv?t.cullFace(t.BACK):I===E2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),P=I}function D(I){I!==O&&(B&&t.lineWidth(I),O=I)}function vt(I,ue,ce){I?(se(t.POLYGON_OFFSET_FILL),(z!==ue||W!==ce)&&(z=ue,W=ce,o.getReversed()&&(ue=-ue),t.polygonOffset(ue,ce))):oe(t.POLYGON_OFFSET_FILL)}function et(I){I?se(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function it(I){I===void 0&&(I=t.TEXTURE0+H-1),Y!==I&&(t.activeTexture(I),Y=I)}function Se(I,ue,ce){ce===void 0&&(Y===null?ce=t.TEXTURE0+H-1:ce=Y);let xe=J[ce];xe===void 0&&(xe={type:void 0,texture:void 0},J[ce]=xe),(xe.type!==I||xe.texture!==ue)&&(Y!==ce&&(t.activeTexture(ce),Y=ce),t.bindTexture(I,ue||Q[I]),xe.type=I,xe.texture=ue)}function A(){const I=J[Y];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function m(){try{t.compressedTexImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function F(){try{t.texSubImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function K(){try{t.texSubImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function he(){try{t.compressedTexSubImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function ae(){try{t.texStorage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function Te(){try{t.texStorage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function Pe(){try{t.texImage2D(...arguments)}catch(I){Ze("WebGLState:",I)}}function ne(){try{t.texImage3D(...arguments)}catch(I){Ze("WebGLState:",I)}}function le(I){Le.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Le.copy(I))}function Me(I){Ye.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Ye.copy(I))}function we(I,ue){let ce=c.get(ue);ce===void 0&&(ce=new WeakMap,c.set(ue,ce));let xe=ce.get(I);xe===void 0&&(xe=t.getUniformBlockIndex(ue,I.name),ce.set(I,xe))}function ge(I,ue){const xe=c.get(ue).get(I);l.get(ue)!==xe&&(t.uniformBlockBinding(ue,xe,I.__bindingPointIndex),l.set(ue,xe))}function He(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},Y=null,J={},d={},f=new WeakMap,p=[],g=null,y=!1,v=null,h=null,_=null,x=null,M=null,T=null,b=null,C=new tt(0,0,0),S=0,w=!1,L=null,P=null,O=null,z=null,W=null,Le.set(0,0,t.canvas.width,t.canvas.height),Ye.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:oe,bindFramebuffer:Fe,drawBuffers:De,useProgram:Ie,setBlending:Je,setMaterial:nt,setFlipSided:Be,setCullFace:gt,setLineWidth:D,setPolygonOffset:vt,setScissorTest:et,activeTexture:it,bindTexture:Se,unbindTexture:A,compressedTexImage2D:m,compressedTexImage3D:R,texImage2D:Pe,texImage3D:ne,updateUBOMapping:we,uniformBlockBinding:ge,texStorage2D:ae,texStorage3D:Te,texSubImage2D:F,texSubImage3D:K,compressedTexSubImage2D:$,compressedTexSubImage3D:he,scissor:le,viewport:Me,reset:He}}function MN(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,m){return p?new OffscreenCanvas(A,m):Qc("canvas")}function y(A,m,R){let F=1;const K=Se(A);if((K.width>R||K.height>R)&&(F=R/Math.max(K.width,K.height)),F<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(F*K.width),he=Math.floor(F*K.height);d===void 0&&(d=g($,he));const ae=m?g($,he):d;return ae.width=$,ae.height=he,ae.getContext("2d").drawImage(A,0,0,$,he),Ne("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+$+"x"+he+")."),ae}else return"data"in A&&Ne("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function v(A){return A.generateMipmaps}function h(A){t.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(A,m,R,F,K=!1){if(A!==null){if(t[A]!==void 0)return t[A];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=m;if(m===t.RED&&(R===t.FLOAT&&($=t.R32F),R===t.HALF_FLOAT&&($=t.R16F),R===t.UNSIGNED_BYTE&&($=t.R8)),m===t.RED_INTEGER&&(R===t.UNSIGNED_BYTE&&($=t.R8UI),R===t.UNSIGNED_SHORT&&($=t.R16UI),R===t.UNSIGNED_INT&&($=t.R32UI),R===t.BYTE&&($=t.R8I),R===t.SHORT&&($=t.R16I),R===t.INT&&($=t.R32I)),m===t.RG&&(R===t.FLOAT&&($=t.RG32F),R===t.HALF_FLOAT&&($=t.RG16F),R===t.UNSIGNED_BYTE&&($=t.RG8)),m===t.RG_INTEGER&&(R===t.UNSIGNED_BYTE&&($=t.RG8UI),R===t.UNSIGNED_SHORT&&($=t.RG16UI),R===t.UNSIGNED_INT&&($=t.RG32UI),R===t.BYTE&&($=t.RG8I),R===t.SHORT&&($=t.RG16I),R===t.INT&&($=t.RG32I)),m===t.RGB_INTEGER&&(R===t.UNSIGNED_BYTE&&($=t.RGB8UI),R===t.UNSIGNED_SHORT&&($=t.RGB16UI),R===t.UNSIGNED_INT&&($=t.RGB32UI),R===t.BYTE&&($=t.RGB8I),R===t.SHORT&&($=t.RGB16I),R===t.INT&&($=t.RGB32I)),m===t.RGBA_INTEGER&&(R===t.UNSIGNED_BYTE&&($=t.RGBA8UI),R===t.UNSIGNED_SHORT&&($=t.RGBA16UI),R===t.UNSIGNED_INT&&($=t.RGBA32UI),R===t.BYTE&&($=t.RGBA8I),R===t.SHORT&&($=t.RGBA16I),R===t.INT&&($=t.RGBA32I)),m===t.RGB&&(R===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),R===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),m===t.RGBA){const he=K?Kc:$e.getTransfer(F);R===t.FLOAT&&($=t.RGBA32F),R===t.HALF_FLOAT&&($=t.RGBA16F),R===t.UNSIGNED_BYTE&&($=he===st?t.SRGB8_ALPHA8:t.RGBA8),R===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),R===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function M(A,m){let R;return A?m===null||m===Ri||m===Oa?R=t.DEPTH24_STENCIL8:m===si?R=t.DEPTH32F_STENCIL8:m===Fa&&(R=t.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Ri||m===Oa?R=t.DEPTH_COMPONENT24:m===si?R=t.DEPTH_COMPONENT32F:m===Fa&&(R=t.DEPTH_COMPONENT16),R}function T(A,m){return v(A)===!0||A.isFramebufferTexture&&A.minFilter!==qt&&A.minFilter!==Nt?Math.log2(Math.max(m.width,m.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?m.mipmaps.length:1}function b(A){const m=A.target;m.removeEventListener("dispose",b),S(m),m.isVideoTexture&&u.delete(m)}function C(A){const m=A.target;m.removeEventListener("dispose",C),L(m)}function S(A){const m=i.get(A);if(m.__webglInit===void 0)return;const R=A.source,F=f.get(R);if(F){const K=F[m.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(A),Object.keys(F).length===0&&f.delete(R)}i.remove(A)}function w(A){const m=i.get(A);t.deleteTexture(m.__webglTexture);const R=A.source,F=f.get(R);delete F[m.__cacheKey],o.memory.textures--}function L(A){const m=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(m.__webglFramebuffer[F]))for(let K=0;K<m.__webglFramebuffer[F].length;K++)t.deleteFramebuffer(m.__webglFramebuffer[F][K]);else t.deleteFramebuffer(m.__webglFramebuffer[F]);m.__webglDepthbuffer&&t.deleteRenderbuffer(m.__webglDepthbuffer[F])}else{if(Array.isArray(m.__webglFramebuffer))for(let F=0;F<m.__webglFramebuffer.length;F++)t.deleteFramebuffer(m.__webglFramebuffer[F]);else t.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&t.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&t.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let F=0;F<m.__webglColorRenderbuffer.length;F++)m.__webglColorRenderbuffer[F]&&t.deleteRenderbuffer(m.__webglColorRenderbuffer[F]);m.__webglDepthRenderbuffer&&t.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const R=A.textures;for(let F=0,K=R.length;F<K;F++){const $=i.get(R[F]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(R[F])}i.remove(A)}let P=0;function O(){P=0}function z(){const A=P;return A>=r.maxTextures&&Ne("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A}function W(A){const m=[];return m.push(A.wrapS),m.push(A.wrapT),m.push(A.wrapR||0),m.push(A.magFilter),m.push(A.minFilter),m.push(A.anisotropy),m.push(A.internalFormat),m.push(A.format),m.push(A.type),m.push(A.generateMipmaps),m.push(A.premultiplyAlpha),m.push(A.flipY),m.push(A.unpackAlignment),m.push(A.colorSpace),m.join()}function H(A,m){const R=i.get(A);if(A.isVideoTexture&&et(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&R.__version!==A.version){const F=A.image;if(F===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(R,A,m);return}}else A.isExternalTexture&&(R.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,R.__webglTexture,t.TEXTURE0+m)}function B(A,m){const R=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&R.__version!==A.version){Q(R,A,m);return}else A.isExternalTexture&&(R.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,R.__webglTexture,t.TEXTURE0+m)}function k(A,m){const R=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&R.__version!==A.version){Q(R,A,m);return}n.bindTexture(t.TEXTURE_3D,R.__webglTexture,t.TEXTURE0+m)}function N(A,m){const R=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&R.__version!==A.version){se(R,A,m);return}n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+m)}const Y={[Ch]:t.REPEAT,[Cn]:t.CLAMP_TO_EDGE,[Rh]:t.MIRRORED_REPEAT},J={[qt]:t.NEAREST,[j2]:t.NEAREST_MIPMAP_NEAREST,[Sl]:t.NEAREST_MIPMAP_LINEAR,[Nt]:t.LINEAR,[Ef]:t.LINEAR_MIPMAP_NEAREST,[is]:t.LINEAR_MIPMAP_LINEAR},ee={[q2]:t.NEVER,[eP]:t.ALWAYS,[K2]:t.LESS,[Vm]:t.LEQUAL,[Z2]:t.EQUAL,[zm]:t.GEQUAL,[Q2]:t.GREATER,[J2]:t.NOTEQUAL};function re(A,m){if(m.type===si&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Nt||m.magFilter===Ef||m.magFilter===Sl||m.magFilter===is||m.minFilter===Nt||m.minFilter===Ef||m.minFilter===Sl||m.minFilter===is)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,Y[m.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,Y[m.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,Y[m.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,J[m.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,J[m.minFilter]),m.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,ee[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===qt||m.minFilter!==Sl&&m.minFilter!==is||m.type===si&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function Le(A,m){let R=!1;A.__webglInit===void 0&&(A.__webglInit=!0,m.addEventListener("dispose",b));const F=m.source;let K=f.get(F);K===void 0&&(K={},f.set(F,K));const $=W(m);if($!==A.__cacheKey){K[$]===void 0&&(K[$]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,R=!0),K[$].usedTimes++;const he=K[A.__cacheKey];he!==void 0&&(K[A.__cacheKey].usedTimes--,he.usedTimes===0&&w(m)),A.__cacheKey=$,A.__webglTexture=K[$].texture}return R}function Ye(A,m,R){return Math.floor(Math.floor(A/R)/m)}function Qe(A,m,R,F){const $=A.updateRanges;if($.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,m.width,m.height,R,F,m.data);else{$.sort((ne,le)=>ne.start-le.start);let he=0;for(let ne=1;ne<$.length;ne++){const le=$[he],Me=$[ne],we=le.start+le.count,ge=Ye(Me.start,m.width,4),He=Ye(le.start,m.width,4);Me.start<=we+1&&ge===He&&Ye(Me.start+Me.count-1,m.width,4)===ge?le.count=Math.max(le.count,Me.start+Me.count-le.start):(++he,$[he]=Me)}$.length=he+1;const ae=t.getParameter(t.UNPACK_ROW_LENGTH),Te=t.getParameter(t.UNPACK_SKIP_PIXELS),Pe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,m.width);for(let ne=0,le=$.length;ne<le;ne++){const Me=$[ne],we=Math.floor(Me.start/4),ge=Math.ceil(Me.count/4),He=we%m.width,I=Math.floor(we/m.width),ue=ge,ce=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,He),t.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,He,I,ue,ce,R,F,m.data)}A.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ae),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(t.UNPACK_SKIP_ROWS,Pe)}}function Q(A,m,R){let F=t.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(F=t.TEXTURE_2D_ARRAY),m.isData3DTexture&&(F=t.TEXTURE_3D);const K=Le(A,m),$=m.source;n.bindTexture(F,A.__webglTexture,t.TEXTURE0+R);const he=i.get($);if($.version!==he.__version||K===!0){n.activeTexture(t.TEXTURE0+R);const ae=$e.getPrimaries($e.workingColorSpace),Te=m.colorSpace===mr?null:$e.getPrimaries(m.colorSpace),Pe=m.colorSpace===mr||ae===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ne=y(m.image,!1,r.maxTextureSize);ne=it(m,ne);const le=s.convert(m.format,m.colorSpace),Me=s.convert(m.type);let we=x(m.internalFormat,le,Me,m.colorSpace,m.isVideoTexture);re(F,m);let ge;const He=m.mipmaps,I=m.isVideoTexture!==!0,ue=he.__version===void 0||K===!0,ce=$.dataReady,xe=T(m,ne);if(m.isDepthTexture)we=M(m.format===rs,m.type),ue&&(I?n.texStorage2D(t.TEXTURE_2D,1,we,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,we,ne.width,ne.height,0,le,Me,null));else if(m.isDataTexture)if(He.length>0){I&&ue&&n.texStorage2D(t.TEXTURE_2D,xe,we,He[0].width,He[0].height);for(let ie=0,Z=He.length;ie<Z;ie++)ge=He[ie],I?ce&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ge.width,ge.height,le,Me,ge.data):n.texImage2D(t.TEXTURE_2D,ie,we,ge.width,ge.height,0,le,Me,ge.data);m.generateMipmaps=!1}else I?(ue&&n.texStorage2D(t.TEXTURE_2D,xe,we,ne.width,ne.height),ce&&Qe(m,ne,le,Me)):n.texImage2D(t.TEXTURE_2D,0,we,ne.width,ne.height,0,le,Me,ne.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){I&&ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,we,He[0].width,He[0].height,ne.depth);for(let ie=0,Z=He.length;ie<Z;ie++)if(ge=He[ie],m.format!==zn)if(le!==null)if(I){if(ce)if(m.layerUpdates.size>0){const Ee=Zv(ge.width,ge.height,m.format,m.type);for(const Ue of m.layerUpdates){const ut=ge.data.subarray(Ue*Ee/ge.data.BYTES_PER_ELEMENT,(Ue+1)*Ee/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,Ue,ge.width,ge.height,1,le,ut)}m.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ge.width,ge.height,ne.depth,le,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,we,ge.width,ge.height,ne.depth,0,ge.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ce&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,ge.width,ge.height,ne.depth,le,Me,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,we,ge.width,ge.height,ne.depth,0,le,Me,ge.data)}else{I&&ue&&n.texStorage2D(t.TEXTURE_2D,xe,we,He[0].width,He[0].height);for(let ie=0,Z=He.length;ie<Z;ie++)ge=He[ie],m.format!==zn?le!==null?I?ce&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,ge.width,ge.height,le,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,we,ge.width,ge.height,0,ge.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ce&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ge.width,ge.height,le,Me,ge.data):n.texImage2D(t.TEXTURE_2D,ie,we,ge.width,ge.height,0,le,Me,ge.data)}else if(m.isDataArrayTexture)if(I){if(ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,we,ne.width,ne.height,ne.depth),ce)if(m.layerUpdates.size>0){const ie=Zv(ne.width,ne.height,m.format,m.type);for(const Z of m.layerUpdates){const Ee=ne.data.subarray(Z*ie/ne.data.BYTES_PER_ELEMENT,(Z+1)*ie/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,le,Me,Ee)}m.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,le,Me,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,we,ne.width,ne.height,ne.depth,0,le,Me,ne.data);else if(m.isData3DTexture)I?(ue&&n.texStorage3D(t.TEXTURE_3D,xe,we,ne.width,ne.height,ne.depth),ce&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,le,Me,ne.data)):n.texImage3D(t.TEXTURE_3D,0,we,ne.width,ne.height,ne.depth,0,le,Me,ne.data);else if(m.isFramebufferTexture){if(ue)if(I)n.texStorage2D(t.TEXTURE_2D,xe,we,ne.width,ne.height);else{let ie=ne.width,Z=ne.height;for(let Ee=0;Ee<xe;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,we,ie,Z,0,le,Me,null),ie>>=1,Z>>=1}}else if(He.length>0){if(I&&ue){const ie=Se(He[0]);n.texStorage2D(t.TEXTURE_2D,xe,we,ie.width,ie.height)}for(let ie=0,Z=He.length;ie<Z;ie++)ge=He[ie],I?ce&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,le,Me,ge):n.texImage2D(t.TEXTURE_2D,ie,we,le,Me,ge);m.generateMipmaps=!1}else if(I){if(ue){const ie=Se(ne);n.texStorage2D(t.TEXTURE_2D,xe,we,ie.width,ie.height)}ce&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le,Me,ne)}else n.texImage2D(t.TEXTURE_2D,0,we,le,Me,ne);v(m)&&h(F),he.__version=$.version,m.onUpdate&&m.onUpdate(m)}A.__version=m.version}function se(A,m,R){if(m.image.length!==6)return;const F=Le(A,m),K=m.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+R);const $=i.get(K);if(K.version!==$.__version||F===!0){n.activeTexture(t.TEXTURE0+R);const he=$e.getPrimaries($e.workingColorSpace),ae=m.colorSpace===mr?null:$e.getPrimaries(m.colorSpace),Te=m.colorSpace===mr||he===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Pe=m.isCompressedTexture||m.image[0].isCompressedTexture,ne=m.image[0]&&m.image[0].isDataTexture,le=[];for(let Z=0;Z<6;Z++)!Pe&&!ne?le[Z]=y(m.image[Z],!0,r.maxCubemapSize):le[Z]=ne?m.image[Z].image:m.image[Z],le[Z]=it(m,le[Z]);const Me=le[0],we=s.convert(m.format,m.colorSpace),ge=s.convert(m.type),He=x(m.internalFormat,we,ge,m.colorSpace),I=m.isVideoTexture!==!0,ue=$.__version===void 0||F===!0,ce=K.dataReady;let xe=T(m,Me);re(t.TEXTURE_CUBE_MAP,m);let ie;if(Pe){I&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,He,Me.width,Me.height);for(let Z=0;Z<6;Z++){ie=le[Z].mipmaps;for(let Ee=0;Ee<ie.length;Ee++){const Ue=ie[Ee];m.format!==zn?we!==null?I?ce&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,0,0,Ue.width,Ue.height,we,Ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,He,Ue.width,Ue.height,0,Ue.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,0,0,Ue.width,Ue.height,we,ge,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,He,Ue.width,Ue.height,0,we,ge,Ue.data)}}}else{if(ie=m.mipmaps,I&&ue){ie.length>0&&xe++;const Z=Se(le[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,He,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){I?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,le[Z].width,le[Z].height,we,ge,le[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,le[Z].width,le[Z].height,0,we,ge,le[Z].data);for(let Ee=0;Ee<ie.length;Ee++){const ut=ie[Ee].image[Z].image;I?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,0,0,ut.width,ut.height,we,ge,ut.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,He,ut.width,ut.height,0,we,ge,ut.data)}}else{I?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,we,ge,le[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,we,ge,le[Z]);for(let Ee=0;Ee<ie.length;Ee++){const Ue=ie[Ee];I?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,0,0,we,ge,Ue.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,He,we,ge,Ue.image[Z])}}}v(m)&&h(t.TEXTURE_CUBE_MAP),$.__version=K.version,m.onUpdate&&m.onUpdate(m)}A.__version=m.version}function oe(A,m,R,F,K,$){const he=s.convert(R.format,R.colorSpace),ae=s.convert(R.type),Te=x(R.internalFormat,he,ae,R.colorSpace),Pe=i.get(m),ne=i.get(R);if(ne.__renderTarget=m,!Pe.__hasExternalTextures){const le=Math.max(1,m.width>>$),Me=Math.max(1,m.height>>$);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,$,Te,le,Me,m.depth,0,he,ae,null):n.texImage2D(K,$,Te,le,Me,0,he,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),vt(m)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,F,K,ne.__webglTexture,0,D(m)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,F,K,ne.__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(A,m,R){if(t.bindRenderbuffer(t.RENDERBUFFER,A),m.depthBuffer){const F=m.depthTexture,K=F&&F.isDepthTexture?F.type:null,$=M(m.stencilBuffer,K),he=m.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;vt(m)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D(m),$,m.width,m.height):R?t.renderbufferStorageMultisample(t.RENDERBUFFER,D(m),$,m.width,m.height):t.renderbufferStorage(t.RENDERBUFFER,$,m.width,m.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,A)}else{const F=m.textures;for(let K=0;K<F.length;K++){const $=F[K],he=s.convert($.format,$.colorSpace),ae=s.convert($.type),Te=x($.internalFormat,he,ae,$.colorSpace);vt(m)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D(m),Te,m.width,m.height):R?t.renderbufferStorageMultisample(t.RENDERBUFFER,D(m),Te,m.width,m.height):t.renderbufferStorage(t.RENDERBUFFER,Te,m.width,m.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function De(A,m,R){const F=m.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(m.depthTexture);if(K.__renderTarget=m,(!K.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),F){if(K.__webglInit===void 0&&(K.__webglInit=!0,m.depthTexture.addEventListener("dispose",b)),K.__webglTexture===void 0){K.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),re(t.TEXTURE_CUBE_MAP,m.depthTexture);const Pe=s.convert(m.depthTexture.format),ne=s.convert(m.depthTexture.type);let le;m.depthTexture.format===Zi?le=t.DEPTH_COMPONENT24:m.depthTexture.format===rs&&(le=t.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,le,m.width,m.height,0,Pe,ne,null)}}else H(m.depthTexture,0);const $=K.__webglTexture,he=D(m),ae=F?t.TEXTURE_CUBE_MAP_POSITIVE_X+R:t.TEXTURE_2D,Te=m.depthTexture.format===rs?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(m.depthTexture.format===Zi)vt(m)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Te,ae,$,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,Te,ae,$,0);else if(m.depthTexture.format===rs)vt(m)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Te,ae,$,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,Te,ae,$,0);else throw new Error("Unknown depthTexture format")}function Ie(A){const m=i.get(A),R=A.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==A.depthTexture){const F=A.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),F){const K=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,F.removeEventListener("dispose",K)};F.addEventListener("dispose",K),m.__depthDisposeCallback=K}m.__boundDepthTexture=F}if(A.depthTexture&&!m.__autoAllocateDepthBuffer)if(R)for(let F=0;F<6;F++)De(m.__webglFramebuffer[F],A,F);else{const F=A.texture.mipmaps;F&&F.length>0?De(m.__webglFramebuffer[0],A,0):De(m.__webglFramebuffer,A,0)}else if(R){m.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer[F]),m.__webglDepthbuffer[F]===void 0)m.__webglDepthbuffer[F]=t.createRenderbuffer(),Fe(m.__webglDepthbuffer[F],A,!1);else{const K=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=m.__webglDepthbuffer[F];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,$)}}else{const F=A.texture.mipmaps;if(F&&F.length>0?n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=t.createRenderbuffer(),Fe(m.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=m.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,$)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pt(A,m,R){const F=i.get(A);m!==void 0&&oe(F.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),R!==void 0&&Ie(A)}function je(A){const m=A.texture,R=i.get(A),F=i.get(m);A.addEventListener("dispose",C);const K=A.textures,$=A.isWebGLCubeRenderTarget===!0,he=K.length>1;if(he||(F.__webglTexture===void 0&&(F.__webglTexture=t.createTexture()),F.__version=m.version,o.memory.textures++),$){R.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(m.mipmaps&&m.mipmaps.length>0){R.__webglFramebuffer[ae]=[];for(let Te=0;Te<m.mipmaps.length;Te++)R.__webglFramebuffer[ae][Te]=t.createFramebuffer()}else R.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){R.__webglFramebuffer=[];for(let ae=0;ae<m.mipmaps.length;ae++)R.__webglFramebuffer[ae]=t.createFramebuffer()}else R.__webglFramebuffer=t.createFramebuffer();if(he)for(let ae=0,Te=K.length;ae<Te;ae++){const Pe=i.get(K[ae]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&vt(A)===!1){R.__webglMultisampledFramebuffer=t.createFramebuffer(),R.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let ae=0;ae<K.length;ae++){const Te=K[ae];R.__webglColorRenderbuffer[ae]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,R.__webglColorRenderbuffer[ae]);const Pe=s.convert(Te.format,Te.colorSpace),ne=s.convert(Te.type),le=x(Te.internalFormat,Pe,ne,Te.colorSpace,A.isXRRenderTarget===!0),Me=D(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,le,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ae,t.RENDERBUFFER,R.__webglColorRenderbuffer[ae])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(R.__webglDepthRenderbuffer=t.createRenderbuffer(),Fe(R.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture),re(t.TEXTURE_CUBE_MAP,m);for(let ae=0;ae<6;ae++)if(m.mipmaps&&m.mipmaps.length>0)for(let Te=0;Te<m.mipmaps.length;Te++)oe(R.__webglFramebuffer[ae][Te],A,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te);else oe(R.__webglFramebuffer[ae],A,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);v(m)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){for(let ae=0,Te=K.length;ae<Te;ae++){const Pe=K[ae],ne=i.get(Pe);let le=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,ne.__webglTexture),re(le,Pe),oe(R.__webglFramebuffer,A,Pe,t.COLOR_ATTACHMENT0+ae,le,0),v(Pe)&&h(le)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ae=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ae,F.__webglTexture),re(ae,m),m.mipmaps&&m.mipmaps.length>0)for(let Te=0;Te<m.mipmaps.length;Te++)oe(R.__webglFramebuffer[Te],A,m,t.COLOR_ATTACHMENT0,ae,Te);else oe(R.__webglFramebuffer,A,m,t.COLOR_ATTACHMENT0,ae,0);v(m)&&h(ae),n.unbindTexture()}A.depthBuffer&&Ie(A)}function Je(A){const m=A.textures;for(let R=0,F=m.length;R<F;R++){const K=m[R];if(v(K)){const $=_(A),he=i.get(K).__webglTexture;n.bindTexture($,he),h($),n.unbindTexture()}}}const nt=[],Be=[];function gt(A){if(A.samples>0){if(vt(A)===!1){const m=A.textures,R=A.width,F=A.height;let K=t.COLOR_BUFFER_BIT;const $=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(A),ae=m.length>1;if(ae)for(let Pe=0;Pe<m.length;Pe++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const Te=A.texture.mipmaps;Te&&Te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Pe=0;Pe<m.length;Pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),ae){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[Pe]);const ne=i.get(m[Pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ne,0)}t.blitFramebuffer(0,0,R,F,0,0,R,F,K,t.NEAREST),l===!0&&(nt.length=0,Be.length=0,nt.push(t.COLOR_ATTACHMENT0+Pe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(nt.push($),Be.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Be)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,nt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ae)for(let Pe=0;Pe<m.length;Pe++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,he.__webglColorRenderbuffer[Pe]);const ne=i.get(m[Pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,ne,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const m=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[m])}}}function D(A){return Math.min(r.maxSamples,A.samples)}function vt(A){const m=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function et(A){const m=o.render.frame;u.get(A)!==m&&(u.set(A,m),A.update())}function it(A,m){const R=A.colorSpace,F=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||R!==_o&&R!==mr&&($e.getTransfer(R)===st?(F!==zn||K!==kn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",R)),m}function Se(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=O,this.setTexture2D=H,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=N,this.rebindTextures=Pt,this.setupRenderTarget=je,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function EN(t,e){function n(i,r=mr){let s;const o=$e.getTransfer(r);if(i===kn)return t.UNSIGNED_BYTE;if(i===Um)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Fm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===FM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===OM)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===NM)return t.BYTE;if(i===UM)return t.SHORT;if(i===Fa)return t.UNSIGNED_SHORT;if(i===Nm)return t.INT;if(i===Ri)return t.UNSIGNED_INT;if(i===si)return t.FLOAT;if(i===Pi)return t.HALF_FLOAT;if(i===kM)return t.ALPHA;if(i===BM)return t.RGB;if(i===zn)return t.RGBA;if(i===Zi)return t.DEPTH_COMPONENT;if(i===rs)return t.DEPTH_STENCIL;if(i===VM)return t.RED;if(i===Om)return t.RED_INTEGER;if(i===vo)return t.RG;if(i===km)return t.RG_INTEGER;if(i===Bm)return t.RGBA_INTEGER;if(i===dc||i===hc||i===pc||i===mc)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===dc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===dc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ph||i===Dh||i===Lh||i===Ih)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ph)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Lh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ih)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nh||i===Uh||i===Fh||i===Oh||i===kh||i===Bh||i===Vh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Nh||i===Uh)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Fh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Oh)return s.COMPRESSED_R11_EAC;if(i===kh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Bh)return s.COMPRESSED_RG11_EAC;if(i===Vh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===zh||i===Hh||i===Gh||i===Wh||i===jh||i===Xh||i===Yh||i===$h||i===qh||i===Kh||i===Zh||i===Qh||i===Jh||i===ep)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===zh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$h)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ep)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tp||i===np||i===ip)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===tp)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===np)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ip)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rp||i===sp||i===op||i===ap)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===rp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===op)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ap)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Oa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const TN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class AN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new QM(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Di({vertexShader:TN,fragmentShader:wN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Wn(new cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bN extends Ao{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const y=typeof XRWebGLBinding<"u",v=new AN,h={},_=n.getContextAttributes();let x=null,M=null;const T=[],b=[],C=new Oe;let S=null;const w=new ii;w.viewport=new At;const L=new ii;L.viewport=new At;const P=[w,L],O=new kP;let z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let se=T[Q];return se===void 0&&(se=new Df,T[Q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Q){let se=T[Q];return se===void 0&&(se=new Df,T[Q]=se),se.getGripSpace()},this.getHand=function(Q){let se=T[Q];return se===void 0&&(se=new Df,T[Q]=se),se.getHandSpace()};function H(Q){const se=b.indexOf(Q.inputSource);if(se===-1)return;const oe=T[se];oe!==void 0&&(oe.update(Q.inputSource,Q.frame,c||o),oe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function B(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",k);for(let Q=0;Q<T.length;Q++){const se=b[Q];se!==null&&(b[Q]=null,T[Q].disconnect(se))}z=null,W=null,v.reset();for(const Q in h)delete h[Q];e.setRenderTarget(x),p=null,f=null,d=null,r=null,M=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",B),r.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Fe=null,De=null;_.depth&&(De=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=_.stencil?rs:Zi,Fe=_.stencil?Oa:Ri);const Ie={colorFormat:n.RGBA8,depthFormat:De,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ie),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new ci(f.textureWidth,f.textureHeight,{format:zn,type:kn,depthTexture:new ka(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const oe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new ci(p.framebufferWidth,p.framebufferHeight,{format:zn,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Qe.setContext(r),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function k(Q){for(let se=0;se<Q.removed.length;se++){const oe=Q.removed[se],Fe=b.indexOf(oe);Fe>=0&&(b[Fe]=null,T[Fe].disconnect(oe))}for(let se=0;se<Q.added.length;se++){const oe=Q.added[se];let Fe=b.indexOf(oe);if(Fe===-1){for(let Ie=0;Ie<T.length;Ie++)if(Ie>=b.length){b.push(oe),Fe=Ie;break}else if(b[Ie]===null){b[Ie]=oe,Fe=Ie;break}if(Fe===-1)break}const De=T[Fe];De&&De.connect(oe)}}const N=new X,Y=new X;function J(Q,se,oe){N.setFromMatrixPosition(se.matrixWorld),Y.setFromMatrixPosition(oe.matrixWorld);const Fe=N.distanceTo(Y),De=se.projectionMatrix.elements,Ie=oe.projectionMatrix.elements,Pt=De[14]/(De[10]-1),je=De[14]/(De[10]+1),Je=(De[9]+1)/De[5],nt=(De[9]-1)/De[5],Be=(De[8]-1)/De[0],gt=(Ie[8]+1)/Ie[0],D=Pt*Be,vt=Pt*gt,et=Fe/(-Be+gt),it=et*-Be;if(se.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(it),Q.translateZ(et),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),De[10]===-1)Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Se=Pt+et,A=je+et,m=D-it,R=vt+(Fe-it),F=Je*je/A*Se,K=nt*je/A*Se;Q.projectionMatrix.makePerspective(m,R,F,K,Se,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ee(Q,se){se===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(se.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let se=Q.near,oe=Q.far;v.texture!==null&&(v.depthNear>0&&(se=v.depthNear),v.depthFar>0&&(oe=v.depthFar)),O.near=L.near=w.near=se,O.far=L.far=w.far=oe,(z!==O.near||W!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),z=O.near,W=O.far),O.layers.mask=Q.layers.mask|6,w.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;const Fe=Q.parent,De=O.cameras;ee(O,Fe);for(let Ie=0;Ie<De.length;Ie++)ee(De[Ie],Fe);De.length===2?J(O,w,L):O.projectionMatrix.copy(w.projectionMatrix),re(Q,O,Fe)};function re(Q,se,oe){oe===null?Q.matrix.copy(se.matrixWorld):(Q.matrix.copy(oe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(se.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=lp*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(O)},this.getCameraTexture=function(Q){return h[Q]};let Le=null;function Ye(Q,se){if(u=se.getViewerPose(c||o),g=se,u!==null){const oe=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Fe=!1;oe.length!==O.cameras.length&&(O.cameras.length=0,Fe=!0);for(let je=0;je<oe.length;je++){const Je=oe[je];let nt=null;if(p!==null)nt=p.getViewport(Je);else{const gt=d.getViewSubImage(f,Je);nt=gt.viewport,je===0&&(e.setRenderTargetTextures(M,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(M))}let Be=P[je];Be===void 0&&(Be=new ii,Be.layers.enable(je),Be.viewport=new At,P[je]=Be),Be.matrix.fromArray(Je.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Je.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(nt.x,nt.y,nt.width,nt.height),je===0&&(O.matrix.copy(Be.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Fe===!0&&O.cameras.push(Be)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const je=d.getDepthInformation(oe[0]);je&&je.isValid&&je.texture&&v.init(je,r.renderState)}if(De&&De.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let je=0;je<oe.length;je++){const Je=oe[je].camera;if(Je){let nt=h[Je];nt||(nt=new QM,h[Je]=nt);const Be=d.getCameraImage(Je);nt.sourceTexture=Be}}}}for(let oe=0;oe<T.length;oe++){const Fe=b[oe],De=T[oe];Fe!==null&&De!==void 0&&De.update(Fe,se,c||o)}Le&&Le(Q,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const Qe=new tE;Qe.setAnimationLoop(Ye),this.setAnimationLoop=function(Q){Le=Q},this.dispose=function(){}}}const jr=new Qi,CN=new Rt;function RN(t,e){function n(v,h){v.matrixAutoUpdate===!0&&v.updateMatrix(),h.value.copy(v.matrix)}function i(v,h){h.color.getRGB(v.fogColor.value,JM(t)),h.isFog?(v.fogNear.value=h.near,v.fogFar.value=h.far):h.isFogExp2&&(v.fogDensity.value=h.density)}function r(v,h,_,x,M){h.isMeshBasicMaterial?s(v,h):h.isMeshLambertMaterial?(s(v,h),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(v,h),d(v,h)):h.isMeshPhongMaterial?(s(v,h),u(v,h),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(v,h),f(v,h),h.isMeshPhysicalMaterial&&p(v,h,M)):h.isMeshMatcapMaterial?(s(v,h),g(v,h)):h.isMeshDepthMaterial?s(v,h):h.isMeshDistanceMaterial?(s(v,h),y(v,h)):h.isMeshNormalMaterial?s(v,h):h.isLineBasicMaterial?(o(v,h),h.isLineDashedMaterial&&a(v,h)):h.isPointsMaterial?l(v,h,_,x):h.isSpriteMaterial?c(v,h):h.isShadowMaterial?(v.color.value.copy(h.color),v.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(v,h){v.opacity.value=h.opacity,h.color&&v.diffuse.value.copy(h.color),h.emissive&&v.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.bumpMap&&(v.bumpMap.value=h.bumpMap,n(h.bumpMap,v.bumpMapTransform),v.bumpScale.value=h.bumpScale,h.side===Sn&&(v.bumpScale.value*=-1)),h.normalMap&&(v.normalMap.value=h.normalMap,n(h.normalMap,v.normalMapTransform),v.normalScale.value.copy(h.normalScale),h.side===Sn&&v.normalScale.value.negate()),h.displacementMap&&(v.displacementMap.value=h.displacementMap,n(h.displacementMap,v.displacementMapTransform),v.displacementScale.value=h.displacementScale,v.displacementBias.value=h.displacementBias),h.emissiveMap&&(v.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,v.emissiveMapTransform)),h.specularMap&&(v.specularMap.value=h.specularMap,n(h.specularMap,v.specularMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest);const _=e.get(h),x=_.envMap,M=_.envMapRotation;x&&(v.envMap.value=x,jr.copy(M),jr.x*=-1,jr.y*=-1,jr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),v.envMapRotation.value.setFromMatrix4(CN.makeRotationFromEuler(jr)),v.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=h.reflectivity,v.ior.value=h.ior,v.refractionRatio.value=h.refractionRatio),h.lightMap&&(v.lightMap.value=h.lightMap,v.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,v.lightMapTransform)),h.aoMap&&(v.aoMap.value=h.aoMap,v.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,v.aoMapTransform))}function o(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform))}function a(v,h){v.dashSize.value=h.dashSize,v.totalSize.value=h.dashSize+h.gapSize,v.scale.value=h.scale}function l(v,h,_,x){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.size.value=h.size*_,v.scale.value=x*.5,h.map&&(v.map.value=h.map,n(h.map,v.uvTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function c(v,h){v.diffuse.value.copy(h.color),v.opacity.value=h.opacity,v.rotation.value=h.rotation,h.map&&(v.map.value=h.map,n(h.map,v.mapTransform)),h.alphaMap&&(v.alphaMap.value=h.alphaMap,n(h.alphaMap,v.alphaMapTransform)),h.alphaTest>0&&(v.alphaTest.value=h.alphaTest)}function u(v,h){v.specular.value.copy(h.specular),v.shininess.value=Math.max(h.shininess,1e-4)}function d(v,h){h.gradientMap&&(v.gradientMap.value=h.gradientMap)}function f(v,h){v.metalness.value=h.metalness,h.metalnessMap&&(v.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,v.metalnessMapTransform)),v.roughness.value=h.roughness,h.roughnessMap&&(v.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,v.roughnessMapTransform)),h.envMap&&(v.envMapIntensity.value=h.envMapIntensity)}function p(v,h,_){v.ior.value=h.ior,h.sheen>0&&(v.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),v.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(v.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,v.sheenColorMapTransform)),h.sheenRoughnessMap&&(v.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,v.sheenRoughnessMapTransform))),h.clearcoat>0&&(v.clearcoat.value=h.clearcoat,v.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(v.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,v.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(v.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sn&&v.clearcoatNormalScale.value.negate())),h.dispersion>0&&(v.dispersion.value=h.dispersion),h.iridescence>0&&(v.iridescence.value=h.iridescence,v.iridescenceIOR.value=h.iridescenceIOR,v.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(v.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,v.iridescenceMapTransform)),h.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),h.transmission>0&&(v.transmission.value=h.transmission,v.transmissionSamplerMap.value=_.texture,v.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(v.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,v.transmissionMapTransform)),v.thickness.value=h.thickness,h.thicknessMap&&(v.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=h.attenuationDistance,v.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(v.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(v.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=h.specularIntensity,v.specularColor.value.copy(h.specularColor),h.specularColorMap&&(v.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,v.specularColorMapTransform)),h.specularIntensityMap&&(v.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,v.specularIntensityMapTransform))}function g(v,h){h.matcap&&(v.matcap.value=h.matcap)}function y(v,h){const _=e.get(h).light;v.referencePosition.value.setFromMatrixPosition(_.matrixWorld),v.nearDistance.value=_.shadow.camera.near,v.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function PN(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const M=x.program;i.uniformBlockBinding(_,M)}function c(_,x){let M=r[_.id];M===void 0&&(g(_),M=u(_),r[_.id]=M,_.addEventListener("dispose",v));const T=x.program;i.updateUBOMapping(_,T);const b=e.render.frame;s[_.id]!==b&&(f(_),s[_.id]=b)}function u(_){const x=d();_.__bindingPointIndex=x;const M=t.createBuffer(),T=_.__size,b=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,T,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,M),M}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const x=r[_.id],M=_.uniforms,T=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let b=0,C=M.length;b<C;b++){const S=Array.isArray(M[b])?M[b]:[M[b]];for(let w=0,L=S.length;w<L;w++){const P=S[w];if(p(P,b,w,T)===!0){const O=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let H=0;H<z.length;H++){const B=z[H],k=y(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,O+W,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,W),W+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,x,M,T){const b=_.value,C=x+"_"+M;if(T[C]===void 0)return typeof b=="number"||typeof b=="boolean"?T[C]=b:T[C]=b.clone(),!0;{const S=T[C];if(typeof b=="number"||typeof b=="boolean"){if(S!==b)return T[C]=b,!0}else if(S.equals(b)===!1)return S.copy(b),!0}return!1}function g(_){const x=_.uniforms;let M=0;const T=16;for(let C=0,S=x.length;C<S;C++){const w=Array.isArray(x[C])?x[C]:[x[C]];for(let L=0,P=w.length;L<P;L++){const O=w[L],z=Array.isArray(O.value)?O.value:[O.value];for(let W=0,H=z.length;W<H;W++){const B=z[W],k=y(B),N=M%T,Y=N%k.boundary,J=N+Y;M+=Y,J!==0&&T-J<k.storage&&(M+=T-J),O.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=k.storage}}}const b=M%T;return b>0&&(M+=T-b),_.__size=M,_.__cache={},this}function y(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ne("WebGLRenderer: Unsupported uniform value type.",_),x}function v(_){const x=_.target;x.removeEventListener("dispose",v);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}const DN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let vi=null;function LN(){return vi===null&&(vi=new qM(DN,16,16,vo,Pi),vi.name="DFG_LUT",vi.minFilter=Nt,vi.magFilter=Nt,vi.wrapS=Cn,vi.wrapT=Cn,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}class IN{constructor(e={}){const{canvas:n=nP(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=kn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const y=p,v=new Set([Bm,km,Om]),h=new Set([kn,Ri,Fa,Oa,Um,Fm]),_=new Uint32Array(4),x=new Int32Array(4);let M=null,T=null;const b=[],C=[];let S=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let L=!1;this._outputColorSpace=Un;let P=0,O=0,z=null,W=-1,H=null;const B=new At,k=new At;let N=null;const Y=new tt(0);let J=0,ee=n.width,re=n.height,Le=1,Ye=null,Qe=null;const Q=new At(0,0,ee,re),se=new At(0,0,ee,re);let oe=!1;const Fe=new KM;let De=!1,Ie=!1;const Pt=new Rt,je=new X,Je=new At,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function gt(){return z===null?Le:1}let D=i;function vt(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Im}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",Ue,!1),n.addEventListener("webglcontextcreationerror",ut,!1),D===null){const U="webgl2";if(D=vt(U,E),D===null)throw vt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ze("WebGLRenderer: "+E.message),E}let et,it,Se,A,m,R,F,K,$,he,ae,Te,Pe,ne,le,Me,we,ge,He,I,ue,ce,xe;function ie(){et=new IL(D),et.init(),ue=new EN(D,et),it=new wL(D,et,e,ue),Se=new SN(D,et),it.reversedDepthBuffer&&f&&Se.buffers.depth.setReversed(!0),A=new FL(D),m=new aN,R=new MN(D,et,Se,m,it,ue,A),F=new LL(w),K=new zP(D),ce=new EL(D,K),$=new NL(D,K,A,ce),he=new kL(D,$,K,ce,A),ge=new OL(D,it,R),le=new AL(m),ae=new oN(w,F,et,it,ce,le),Te=new RN(w,m),Pe=new cN,ne=new mN(et),we=new ML(w,F,Se,he,g,l),Me=new yN(w,he,it),xe=new PN(D,A,it,Se),He=new TL(D,et,A),I=new UL(D,et,A),A.programs=ae.programs,w.capabilities=it,w.extensions=et,w.properties=m,w.renderLists=Pe,w.shadowMap=Me,w.state=Se,w.info=A}ie(),y!==kn&&(S=new VL(y,n.width,n.height,r,s));const Z=new bN(w,D);this.xr=Z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=et.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=et.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(E){E!==void 0&&(Le=E,this.setSize(ee,re,!1))},this.getSize=function(E){return E.set(ee,re)},this.setSize=function(E,U,q=!0){if(Z.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=E,re=U,n.width=Math.floor(E*Le),n.height=Math.floor(U*Le),q===!0&&(n.style.width=E+"px",n.style.height=U+"px"),S!==null&&S.setSize(n.width,n.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(ee*Le,re*Le).floor()},this.setDrawingBufferSize=function(E,U,q){ee=E,re=U,Le=q,n.width=Math.floor(E*q),n.height=Math.floor(U*q),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(y===kn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(B)},this.getViewport=function(E){return E.copy(Q)},this.setViewport=function(E,U,q,j){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,U,q,j),Se.viewport(B.copy(Q).multiplyScalar(Le).round())},this.getScissor=function(E){return E.copy(se)},this.setScissor=function(E,U,q,j){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,U,q,j),Se.scissor(k.copy(se).multiplyScalar(Le).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(E){Se.setScissorTest(oe=E)},this.setOpaqueSort=function(E){Ye=E},this.setTransparentSort=function(E){Qe=E},this.getClearColor=function(E){return E.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,q=!0){let j=0;if(E){let G=!1;if(z!==null){const pe=z.texture.format;G=v.has(pe)}if(G){const pe=z.texture.type,ve=h.has(pe),me=we.getClearColor(),Ae=we.getClearAlpha(),Ce=me.r,ke=me.g,Ge=me.b;ve?(_[0]=Ce,_[1]=ke,_[2]=Ge,_[3]=Ae,D.clearBufferuiv(D.COLOR,0,_)):(x[0]=Ce,x[1]=ke,x[2]=Ge,x[3]=Ae,D.clearBufferiv(D.COLOR,0,x))}else j|=D.COLOR_BUFFER_BIT}U&&(j|=D.DEPTH_BUFFER_BIT),q&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",Ue,!1),n.removeEventListener("webglcontextcreationerror",ut,!1),we.dispose(),Pe.dispose(),ne.dispose(),m.dispose(),F.dispose(),he.dispose(),ce.dispose(),xe.dispose(),ae.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Wm),Z.removeEventListener("sessionend",jm),Or.stop()};function Ee(E){E.preventDefault(),Rv("WebGLRenderer: Context Lost."),L=!0}function Ue(){Rv("WebGLRenderer: Context Restored."),L=!1;const E=A.autoReset,U=Me.enabled,q=Me.autoUpdate,j=Me.needsUpdate,G=Me.type;ie(),A.autoReset=E,Me.enabled=U,Me.autoUpdate=q,Me.needsUpdate=j,Me.type=G}function ut(E){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function rt(E){const U=E.target;U.removeEventListener("dispose",rt),Li(U)}function Li(E){Ii(E),m.remove(E)}function Ii(E){const U=m.get(E).programs;U!==void 0&&(U.forEach(function(q){ae.releaseProgram(q)}),E.isShaderMaterial&&ae.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,q,j,G,pe){U===null&&(U=nt);const ve=G.isMesh&&G.matrixWorld.determinant()<0,me=lE(E,U,q,j,G);Se.setMaterial(j,ve);let Ae=q.index,Ce=1;if(j.wireframe===!0){if(Ae=$.getWireframeAttribute(q),Ae===void 0)return;Ce=2}const ke=q.drawRange,Ge=q.attributes.position;let Re=ke.start*Ce,at=(ke.start+ke.count)*Ce;pe!==null&&(Re=Math.max(Re,pe.start*Ce),at=Math.min(at,(pe.start+pe.count)*Ce)),Ae!==null?(Re=Math.max(Re,0),at=Math.min(at,Ae.count)):Ge!=null&&(Re=Math.max(Re,0),at=Math.min(at,Ge.count));const bt=at-Re;if(bt<0||bt===1/0)return;ce.setup(G,j,me,q,Ae);let Et,lt=He;if(Ae!==null&&(Et=K.get(Ae),lt=I,lt.setIndex(Et)),G.isMesh)j.wireframe===!0?(Se.setLineWidth(j.wireframeLinewidth*gt()),lt.setMode(D.LINES)):lt.setMode(D.TRIANGLES);else if(G.isLine){let Qt=j.linewidth;Qt===void 0&&(Qt=1),Se.setLineWidth(Qt*gt()),G.isLineSegments?lt.setMode(D.LINES):G.isLineLoop?lt.setMode(D.LINE_LOOP):lt.setMode(D.LINE_STRIP)}else G.isPoints?lt.setMode(D.POINTS):G.isSprite&&lt.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Jc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Qt=G._multiDrawStarts,be=G._multiDrawCounts,En=G._multiDrawCount,Ke=Ae?K.get(Ae).bytesPerElement:1,Yn=m.get(j).currentProgram.getUniforms();for(let pi=0;pi<En;pi++)Yn.setValue(D,"_gl_DrawID",pi),lt.render(Qt[pi]/Ke,be[pi])}else if(G.isInstancedMesh)lt.renderInstances(Re,bt,G.count);else if(q.isInstancedBufferGeometry){const Qt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,be=Math.min(q.instanceCount,Qt);lt.renderInstances(Re,bt,be)}else lt.render(Re,bt)};function Gm(E,U,q){E.transparent===!0&&E.side===zi&&E.forceSinglePass===!1?(E.side=Sn,E.needsUpdate=!0,Ja(E,U,q),E.side=Lr,E.needsUpdate=!0,Ja(E,U,q),E.side=zi):Ja(E,U,q)}this.compile=function(E,U,q=null){q===null&&(q=E),T=ne.get(q),T.init(U),C.push(T),q.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),E!==q&&E.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights();const j=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const pe=G.material;if(pe)if(Array.isArray(pe))for(let ve=0;ve<pe.length;ve++){const me=pe[ve];Gm(me,q,G),j.add(me)}else Gm(pe,q,G),j.add(pe)}),T=C.pop(),j},this.compileAsync=function(E,U,q=null){const j=this.compile(E,U,q);return new Promise(G=>{function pe(){if(j.forEach(function(ve){m.get(ve).currentProgram.isReady()&&j.delete(ve)}),j.size===0){G(E);return}setTimeout(pe,10)}et.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Cu=null;function aE(E){Cu&&Cu(E)}function Wm(){Or.stop()}function jm(){Or.start()}const Or=new tE;Or.setAnimationLoop(aE),typeof self<"u"&&Or.setContext(self),this.setAnimationLoop=function(E){Cu=E,Z.setAnimationLoop(E),E===null?Or.stop():Or.start()},Z.addEventListener("sessionstart",Wm),Z.addEventListener("sessionend",jm),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const q=Z.enabled===!0&&Z.isPresenting===!0,j=S!==null&&(z===null||q)&&S.begin(w,z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(U),U=Z.getCamera()),E.isScene===!0&&E.onBeforeRender(w,E,U,z),T=ne.get(E,C.length),T.init(U),C.push(T),Pt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Fe.setFromProjectionMatrix(Pt,Ei,U.reversedDepth),Ie=this.localClippingEnabled,De=le.init(this.clippingPlanes,Ie),M=Pe.get(E,b.length),M.init(),b.push(M),Z.enabled===!0&&Z.isPresenting===!0){const ve=w.xr.getDepthSensingMesh();ve!==null&&Ru(ve,U,-1/0,w.sortObjects)}Ru(E,U,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(Ye,Qe),Be=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Be&&we.addToRenderList(M,E),this.info.render.frame++,De===!0&&le.beginShadows();const G=T.state.shadowsArray;if(Me.render(G,E,U),De===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&S.hasRenderPass())===!1){const ve=M.opaque,me=M.transmissive;if(T.setupLights(),U.isArrayCamera){const Ae=U.cameras;if(me.length>0)for(let Ce=0,ke=Ae.length;Ce<ke;Ce++){const Ge=Ae[Ce];Ym(ve,me,E,Ge)}Be&&we.render(E);for(let Ce=0,ke=Ae.length;Ce<ke;Ce++){const Ge=Ae[Ce];Xm(M,E,Ge,Ge.viewport)}}else me.length>0&&Ym(ve,me,E,U),Be&&we.render(E),Xm(M,E,U)}z!==null&&O===0&&(R.updateMultisampleRenderTarget(z),R.updateRenderTargetMipmap(z)),j&&S.end(w),E.isScene===!0&&E.onAfterRender(w,E,U),ce.resetDefaultState(),W=-1,H=null,C.pop(),C.length>0?(T=C[C.length-1],De===!0&&le.setGlobalState(w.clippingPlanes,T.state.camera)):T=null,b.pop(),b.length>0?M=b[b.length-1]:M=null};function Ru(E,U,q,j){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Fe.intersectsSprite(E)){j&&Je.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pt);const ve=he.update(E),me=E.material;me.visible&&M.push(E,ve,me,q,Je.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Fe.intersectsObject(E))){const ve=he.update(E),me=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Je.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Je.copy(ve.boundingSphere.center)),Je.applyMatrix4(E.matrixWorld).applyMatrix4(Pt)),Array.isArray(me)){const Ae=ve.groups;for(let Ce=0,ke=Ae.length;Ce<ke;Ce++){const Ge=Ae[Ce],Re=me[Ge.materialIndex];Re&&Re.visible&&M.push(E,ve,Re,q,Je.z,Ge)}}else me.visible&&M.push(E,ve,me,q,Je.z,null)}}const pe=E.children;for(let ve=0,me=pe.length;ve<me;ve++)Ru(pe[ve],U,q,j)}function Xm(E,U,q,j){const{opaque:G,transmissive:pe,transparent:ve}=E;T.setupLightsView(q),De===!0&&le.setGlobalState(w.clippingPlanes,q),j&&Se.viewport(B.copy(j)),G.length>0&&Qa(G,U,q),pe.length>0&&Qa(pe,U,q),ve.length>0&&Qa(ve,U,q),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Ym(E,U,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[j.id]===void 0){const Re=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[j.id]=new ci(1,1,{generateMipmaps:!0,type:Re?Pi:kn,minFilter:is,samples:Math.max(4,it.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const pe=T.state.transmissionRenderTarget[j.id],ve=j.viewport||B;pe.setSize(ve.z*w.transmissionResolutionScale,ve.w*w.transmissionResolutionScale);const me=w.getRenderTarget(),Ae=w.getActiveCubeFace(),Ce=w.getActiveMipmapLevel();w.setRenderTarget(pe),w.getClearColor(Y),J=w.getClearAlpha(),J<1&&w.setClearColor(16777215,.5),w.clear(),Be&&we.render(q);const ke=w.toneMapping;w.toneMapping=bi;const Ge=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),T.setupLightsView(j),De===!0&&le.setGlobalState(w.clippingPlanes,j),Qa(E,q,j),R.updateMultisampleRenderTarget(pe),R.updateRenderTargetMipmap(pe),et.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let at=0,bt=U.length;at<bt;at++){const Et=U[at],{object:lt,geometry:Qt,material:be,group:En}=Et;if(be.side===zi&&lt.layers.test(j.layers)){const Ke=be.side;be.side=Sn,be.needsUpdate=!0,$m(lt,q,j,Qt,be,En),be.side=Ke,be.needsUpdate=!0,Re=!0}}Re===!0&&(R.updateMultisampleRenderTarget(pe),R.updateRenderTargetMipmap(pe))}w.setRenderTarget(me,Ae,Ce),w.setClearColor(Y,J),Ge!==void 0&&(j.viewport=Ge),w.toneMapping=ke}function Qa(E,U,q){const j=U.isScene===!0?U.overrideMaterial:null;for(let G=0,pe=E.length;G<pe;G++){const ve=E[G],{object:me,geometry:Ae,group:Ce}=ve;let ke=ve.material;ke.allowOverride===!0&&j!==null&&(ke=j),me.layers.test(q.layers)&&$m(me,U,q,Ae,ke,Ce)}}function $m(E,U,q,j,G,pe){E.onBeforeRender(w,U,q,j,G,pe),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(w,U,q,j,E,pe),G.transparent===!0&&G.side===zi&&G.forceSinglePass===!1?(G.side=Sn,G.needsUpdate=!0,w.renderBufferDirect(q,U,j,G,E,pe),G.side=Lr,G.needsUpdate=!0,w.renderBufferDirect(q,U,j,G,E,pe),G.side=zi):w.renderBufferDirect(q,U,j,G,E,pe),E.onAfterRender(w,U,q,j,G,pe)}function Ja(E,U,q){U.isScene!==!0&&(U=nt);const j=m.get(E),G=T.state.lights,pe=T.state.shadowsArray,ve=G.state.version,me=ae.getParameters(E,G.state,pe,U,q),Ae=ae.getProgramCacheKey(me);let Ce=j.programs;j.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,j.fog=U.fog;const ke=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;j.envMap=F.get(E.envMap||j.environment,ke),j.envMapRotation=j.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ce===void 0&&(E.addEventListener("dispose",rt),Ce=new Map,j.programs=Ce);let Ge=Ce.get(Ae);if(Ge!==void 0){if(j.currentProgram===Ge&&j.lightsStateVersion===ve)return Km(E,me),Ge}else me.uniforms=ae.getUniforms(E),E.onBeforeCompile(me,w),Ge=ae.acquireProgram(me,Ae),Ce.set(Ae,Ge),j.uniforms=me.uniforms;const Re=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Re.clippingPlanes=le.uniform),Km(E,me),j.needsLights=uE(E),j.lightsStateVersion=ve,j.needsLights&&(Re.ambientLightColor.value=G.state.ambient,Re.lightProbe.value=G.state.probe,Re.directionalLights.value=G.state.directional,Re.directionalLightShadows.value=G.state.directionalShadow,Re.spotLights.value=G.state.spot,Re.spotLightShadows.value=G.state.spotShadow,Re.rectAreaLights.value=G.state.rectArea,Re.ltc_1.value=G.state.rectAreaLTC1,Re.ltc_2.value=G.state.rectAreaLTC2,Re.pointLights.value=G.state.point,Re.pointLightShadows.value=G.state.pointShadow,Re.hemisphereLights.value=G.state.hemi,Re.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Re.spotLightMatrix.value=G.state.spotLightMatrix,Re.spotLightMap.value=G.state.spotLightMap,Re.pointShadowMatrix.value=G.state.pointShadowMatrix),j.currentProgram=Ge,j.uniformsList=null,Ge}function qm(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=gc.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Km(E,U){const q=m.get(E);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function lE(E,U,q,j,G){U.isScene!==!0&&(U=nt),R.resetTextureUnits();const pe=U.fog,ve=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?U.environment:null,me=z===null?w.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:_o,Ae=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ce=F.get(j.envMap||ve,Ae),ke=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ge=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Re=!!q.morphAttributes.position,at=!!q.morphAttributes.normal,bt=!!q.morphAttributes.color;let Et=bi;j.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Et=w.toneMapping);const lt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Qt=lt!==void 0?lt.length:0,be=m.get(j),En=T.state.lights;if(De===!0&&(Ie===!0||E!==H)){const Vt=E===H&&j.id===W;le.setState(j,E,Vt)}let Ke=!1;j.version===be.__version?(be.needsLights&&be.lightsStateVersion!==En.state.version||be.outputColorSpace!==me||G.isBatchedMesh&&be.batching===!1||!G.isBatchedMesh&&be.batching===!0||G.isBatchedMesh&&be.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&be.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&be.instancing===!1||!G.isInstancedMesh&&be.instancing===!0||G.isSkinnedMesh&&be.skinning===!1||!G.isSkinnedMesh&&be.skinning===!0||G.isInstancedMesh&&be.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&be.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&be.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&be.instancingMorph===!1&&G.morphTexture!==null||be.envMap!==Ce||j.fog===!0&&be.fog!==pe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==le.numPlanes||be.numIntersection!==le.numIntersection)||be.vertexAlphas!==ke||be.vertexTangents!==Ge||be.morphTargets!==Re||be.morphNormals!==at||be.morphColors!==bt||be.toneMapping!==Et||be.morphTargetsCount!==Qt)&&(Ke=!0):(Ke=!0,be.__version=j.version);let Yn=be.currentProgram;Ke===!0&&(Yn=Ja(j,U,G));let pi=!1,kr=!1,_s=!1;const ct=Yn.getUniforms(),jt=be.uniforms;if(Se.useProgram(Yn.program)&&(pi=!0,kr=!0,_s=!0),j.id!==W&&(W=j.id,kr=!0),pi||H!==E){Se.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ct.setValue(D,"projectionMatrix",E.projectionMatrix),ct.setValue(D,"viewMatrix",E.matrixWorldInverse);const tr=ct.map.cameraPosition;tr!==void 0&&tr.setValue(D,je.setFromMatrixPosition(E.matrixWorld)),it.logarithmicDepthBuffer&&ct.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ct.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),H!==E&&(H=E,kr=!0,_s=!0)}if(be.needsLights&&(En.state.directionalShadowMap.length>0&&ct.setValue(D,"directionalShadowMap",En.state.directionalShadowMap,R),En.state.spotShadowMap.length>0&&ct.setValue(D,"spotShadowMap",En.state.spotShadowMap,R),En.state.pointShadowMap.length>0&&ct.setValue(D,"pointShadowMap",En.state.pointShadowMap,R)),G.isSkinnedMesh){ct.setOptional(D,G,"bindMatrix"),ct.setOptional(D,G,"bindMatrixInverse");const Vt=G.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),ct.setValue(D,"boneTexture",Vt.boneTexture,R))}G.isBatchedMesh&&(ct.setOptional(D,G,"batchingTexture"),ct.setValue(D,"batchingTexture",G._matricesTexture,R),ct.setOptional(D,G,"batchingIdTexture"),ct.setValue(D,"batchingIdTexture",G._indirectTexture,R),ct.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&ct.setValue(D,"batchingColorTexture",G._colorsTexture,R));const er=q.morphAttributes;if((er.position!==void 0||er.normal!==void 0||er.color!==void 0)&&ge.update(G,q,Yn),(kr||be.receiveShadow!==G.receiveShadow)&&(be.receiveShadow=G.receiveShadow,ct.setValue(D,"receiveShadow",G.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&U.environment!==null&&(jt.envMapIntensity.value=U.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=LN()),kr&&(ct.setValue(D,"toneMappingExposure",w.toneMappingExposure),be.needsLights&&cE(jt,_s),pe&&j.fog===!0&&Te.refreshFogUniforms(jt,pe),Te.refreshMaterialUniforms(jt,j,Le,re,T.state.transmissionRenderTarget[E.id]),gc.upload(D,qm(be),jt,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(gc.upload(D,qm(be),jt,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ct.setValue(D,"center",G.center),ct.setValue(D,"modelViewMatrix",G.modelViewMatrix),ct.setValue(D,"normalMatrix",G.normalMatrix),ct.setValue(D,"modelMatrix",G.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Vt=j.uniformsGroups;for(let tr=0,xs=Vt.length;tr<xs;tr++){const Zm=Vt[tr];xe.update(Zm,Yn),xe.bind(Zm,Yn)}}return Yn}function cE(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function uE(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(E,U,q){const j=m.get(E);j.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),m.get(E.texture).__webglTexture=U,m.get(E.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:q,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const q=m.get(E);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0};const fE=D.createFramebuffer();this.setRenderTarget=function(E,U=0,q=0){z=E,P=U,O=q;let j=null,G=!1,pe=!1;if(E){const me=m.get(E);if(me.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(D.FRAMEBUFFER,me.__webglFramebuffer),B.copy(E.viewport),k.copy(E.scissor),N=E.scissorTest,Se.viewport(B),Se.scissor(k),Se.setScissorTest(N),W=-1;return}else if(me.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(me.__hasExternalTextures)R.rebindTextures(E,m.get(E.texture).__webglTexture,m.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ke=E.depthTexture;if(me.__boundDepthTexture!==ke){if(ke!==null&&m.has(ke)&&(E.width!==ke.image.width||E.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(pe=!0);const Ce=m.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ce[U])?j=Ce[U][q]:j=Ce[U],G=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?j=m.get(E).__webglMultisampledFramebuffer:Array.isArray(Ce)?j=Ce[q]:j=Ce,B.copy(E.viewport),k.copy(E.scissor),N=E.scissorTest}else B.copy(Q).multiplyScalar(Le).floor(),k.copy(se).multiplyScalar(Le).floor(),N=oe;if(q!==0&&(j=fE),Se.bindFramebuffer(D.FRAMEBUFFER,j)&&Se.drawBuffers(E,j),Se.viewport(B),Se.scissor(k),Se.setScissorTest(N),G){const me=m.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,q)}else if(pe){const me=U;for(let Ae=0;Ae<E.textures.length;Ae++){const Ce=m.get(E.textures[Ae]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ae,Ce.__webglTexture,q,me)}}else if(E!==null&&q!==0){const me=m.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,me.__webglTexture,q)}W=-1},this.readRenderTargetPixels=function(E,U,q,j,G,pe,ve,me=0){if(!(E&&E.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=m.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae){Se.bindFramebuffer(D.FRAMEBUFFER,Ae);try{const Ce=E.textures[me],ke=Ce.format,Ge=Ce.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!it.textureFormatReadable(ke)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Ge)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-j&&q>=0&&q<=E.height-G&&D.readPixels(U,q,j,G,ue.convert(ke),ue.convert(Ge),pe)}finally{const Ce=z!==null?m.get(z).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(E,U,q,j,G,pe,ve,me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=m.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae)if(U>=0&&U<=E.width-j&&q>=0&&q<=E.height-G){Se.bindFramebuffer(D.FRAMEBUFFER,Ae);const Ce=E.textures[me],ke=Ce.format,Ge=Ce.type;if(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me),!it.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.bufferData(D.PIXEL_PACK_BUFFER,pe.byteLength,D.STREAM_READ),D.readPixels(U,q,j,G,ue.convert(ke),ue.convert(Ge),0);const at=z!==null?m.get(z).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,at);const bt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await iP(D,bt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pe),D.deleteBuffer(Re),D.deleteSync(bt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,q=0){const j=Math.pow(2,-q),G=Math.floor(E.image.width*j),pe=Math.floor(E.image.height*j),ve=U!==null?U.x:0,me=U!==null?U.y:0;R.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,ve,me,G,pe),Se.unbindTexture()};const dE=D.createFramebuffer(),hE=D.createFramebuffer();this.copyTextureToTexture=function(E,U,q=null,j=null,G=0,pe=0){let ve,me,Ae,Ce,ke,Ge,Re,at,bt;const Et=E.isCompressedTexture?E.mipmaps[pe]:E.image;if(q!==null)ve=q.max.x-q.min.x,me=q.max.y-q.min.y,Ae=q.isBox3?q.max.z-q.min.z:1,Ce=q.min.x,ke=q.min.y,Ge=q.isBox3?q.min.z:0;else{const jt=Math.pow(2,-G);ve=Math.floor(Et.width*jt),me=Math.floor(Et.height*jt),E.isDataArrayTexture?Ae=Et.depth:E.isData3DTexture?Ae=Math.floor(Et.depth*jt):Ae=1,Ce=0,ke=0,Ge=0}j!==null?(Re=j.x,at=j.y,bt=j.z):(Re=0,at=0,bt=0);const lt=ue.convert(U.format),Qt=ue.convert(U.type);let be;U.isData3DTexture?(R.setTexture3D(U,0),be=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),be=D.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),be=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const En=D.getParameter(D.UNPACK_ROW_LENGTH),Ke=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Yn=D.getParameter(D.UNPACK_SKIP_PIXELS),pi=D.getParameter(D.UNPACK_SKIP_ROWS),kr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Et.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Et.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),D.pixelStorei(D.UNPACK_SKIP_ROWS,ke),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge);const _s=E.isDataArrayTexture||E.isData3DTexture,ct=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const jt=m.get(E),er=m.get(U),Vt=m.get(jt.__renderTarget),tr=m.get(er.__renderTarget);Se.bindFramebuffer(D.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let xs=0;xs<Ae;xs++)_s&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,m.get(E).__webglTexture,G,Ge+xs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,m.get(U).__webglTexture,pe,bt+xs)),D.blitFramebuffer(Ce,ke,ve,me,Re,at,ve,me,D.DEPTH_BUFFER_BIT,D.NEAREST);Se.bindFramebuffer(D.READ_FRAMEBUFFER,null),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||m.has(E)){const jt=m.get(E),er=m.get(U);Se.bindFramebuffer(D.READ_FRAMEBUFFER,dE),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,hE);for(let Vt=0;Vt<Ae;Vt++)_s?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,jt.__webglTexture,G,Ge+Vt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,jt.__webglTexture,G),ct?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,er.__webglTexture,pe,bt+Vt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,er.__webglTexture,pe),G!==0?D.blitFramebuffer(Ce,ke,ve,me,Re,at,ve,me,D.COLOR_BUFFER_BIT,D.NEAREST):ct?D.copyTexSubImage3D(be,pe,Re,at,bt+Vt,Ce,ke,ve,me):D.copyTexSubImage2D(be,pe,Re,at,Ce,ke,ve,me);Se.bindFramebuffer(D.READ_FRAMEBUFFER,null),Se.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ct?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(be,pe,Re,at,bt,ve,me,Ae,lt,Qt,Et.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(be,pe,Re,at,bt,ve,me,Ae,lt,Et.data):D.texSubImage3D(be,pe,Re,at,bt,ve,me,Ae,lt,Qt,Et):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,pe,Re,at,ve,me,lt,Qt,Et.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,pe,Re,at,Et.width,Et.height,lt,Et.data):D.texSubImage2D(D.TEXTURE_2D,pe,Re,at,ve,me,lt,Qt,Et);D.pixelStorei(D.UNPACK_ROW_LENGTH,En),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ke),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Yn),D.pixelStorei(D.UNPACK_SKIP_ROWS,pi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,kr),pe===0&&U.generateMipmaps&&D.generateMipmap(be),Se.unbindTexture()},this.initRenderTarget=function(E){m.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Se.unbindTexture()},this.resetState=function(){P=0,O=0,z=null,Se.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),n.unpackColorSpace=$e._getUnpackColorSpace()}}function NN({mouseForce:t=20,cursorSize:e=100,isViscous:n=!1,viscous:i=30,iterationsViscous:r=32,iterationsPoisson:s=32,dt:o=.014,BFECC:a=!0,resolution:l=.5,isBounce:c=!1,colors:u=["#5227FF","#FF9FFC","#B19EEF"],style:d={},className:f="",autoDemo:p=!0,autoSpeed:g=.5,autoIntensity:y=2.2,takeoverDuration:v=.25,autoResumeDelay:h=1e3,autoRampDuration:_=.6}){const x=de.useRef(null),M=de.useRef(null),T=de.useRef(null),b=de.useRef(null),C=de.useRef(null),S=de.useRef(!0),w=de.useRef(null);return de.useEffect(()=>{if(!x.current)return;function L(A){let m;Array.isArray(A)&&A.length>0?A.length===1?m=[A[0],A[0]]:m=A:m=["#ffffff","#ffffff"];const R=m.length,F=new Uint8Array(R*4);for(let $=0;$<R;$++){const he=new tt(m[$]);F[$*4+0]=Math.round(he.r*255),F[$*4+1]=Math.round(he.g*255),F[$*4+2]=Math.round(he.b*255),F[$*4+3]=255}const K=new qM(F,R,1,zn);return K.magFilter=Nt,K.minFilter=Nt,K.wrapS=Cn,K.wrapT=Cn,K.generateMipmaps=!1,K.needsUpdate=!0,K}const P=L(u),O=new At(0,0,0,0);class z{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(m){this.container=m,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new IN({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new tt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new BP,this.clock.start()}resize(){if(!this.container)return;const m=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(m.width)),this.height=Math.max(1,Math.floor(m.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const W=new z;class H{constructor(){this.mouseMoved=!1,this.coords=new Oe,this.coords_old=new Oe,this.diff=new Oe,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new Oe,this.takeoverTo=new Oe,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(m){this.container=m,this.docTarget=m.ownerDocument||null;const R=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);R&&(this.listenerTarget=R,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(m,R){if(!this.container)return!1;const F=this.container.getBoundingClientRect();return F.width===0||F.height===0?!1:m>=F.left&&m<=F.right&&R>=F.top&&R<=F.bottom}updateHoverState(m,R){return this.isHoverInside=this.isPointInside(m,R),this.isHoverInside}setCoords(m,R){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const F=this.container.getBoundingClientRect();if(F.width===0||F.height===0)return;const K=(m-F.left)/F.width,$=(R-F.top)/F.height;this.coords.set(K*2-1,-($*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(m,R){this.coords.set(m,R),this.mouseMoved=!0}onDocumentMouseMove(m){if(this.updateHoverState(m.clientX,m.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const R=this.container.getBoundingClientRect();if(R.width===0||R.height===0)return;const F=(m.clientX-R.left)/R.width,K=(m.clientY-R.top)/R.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(F*2-1,-(K*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(m.clientX,m.clientY),this.hasUserControl=!0}}onDocumentTouchStart(m){if(m.touches.length!==1)return;const R=m.touches[0];this.updateHoverState(R.clientX,R.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(R.clientX,R.clientY),this.hasUserControl=!0)}onDocumentTouchMove(m){if(m.touches.length!==1)return;const R=m.touches[0];this.updateHoverState(R.clientX,R.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(R.clientX,R.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const m=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(m>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const R=m*m*(3-2*m);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,R)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const B=new H;class k{constructor(m,R,F){this.mouse=m,this.manager=R,this.enabled=F.enabled,this.speed=F.speed,this.resumeDelay=F.resumeDelay||3e3,this.rampDurationMs=(F.rampDuration||0)*1e3,this.active=!1,this.current=new Oe(0,0),this.target=new Oe,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new Oe,this.pickNewTarget()}pickNewTarget(){const m=Math.random;this.target.set((m()*2-1)*(1-this.margin),(m()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const m=performance.now();if(m-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=m,this.activationTime=m),!this.active)return;this.mouse.isAutoActive=!0;let F=(m-this.lastTime)/1e3;this.lastTime=m,F>.2&&(F=.016);const K=this._tmpDir.subVectors(this.target,this.current),$=K.length();if($<.01){this.pickNewTarget();return}K.normalize();let he=1;if(this.rampDurationMs>0){const Pe=Math.min(1,(m-this.activationTime)/this.rampDurationMs);he=Pe*Pe*(3-2*Pe)}const ae=this.speed*F*he,Te=Math.min(ae,$);this.current.addScaledVector(K,Te),this.mouse.setNormalized(this.current.x,this.current.y)}}const N=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,Y=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,J=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,ee=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy;
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,re=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,Le=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Ye=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Qe=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,Q=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,se=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class oe{constructor(m){var R;this.props=m||{},this.uniforms=(R=this.props.material)==null?void 0:R.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Vv,this.camera=new nu,this.uniforms&&(this.material=new Jo(this.props.material),this.geometry=new cs(2,2),this.plane=new Wn(this.geometry,this.material),this.scene.add(this.plane))}update(){W.renderer.setRenderTarget(this.props.output||null),W.renderer.render(this.scene,this.camera),W.renderer.setRenderTarget(null)}}class Fe extends oe{constructor(m){super({material:{vertexShader:N,fragmentShader:ee,uniforms:{boundarySpace:{value:m.cellScale},px:{value:m.cellScale},fboSize:{value:m.fboSize},velocity:{value:m.src.texture},dt:{value:m.dt},isBFECC:{value:!0}}},output:m.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const m=new hi,R=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);m.setAttribute("position",new ui(R,3));const F=new Jo({vertexShader:Y,fragmentShader:ee,uniforms:this.uniforms});this.line=new RP(m,F),this.scene.add(this.line)}update({dt:m,isBounce:R,BFECC:F}){this.uniforms.dt.value=m,this.line.visible=R,this.uniforms.isBFECC.value=F,super.update()}}class De extends oe{constructor(m){super({output:m.dst}),this.init(m)}init(m){super.init();const R=new cs(1,1),F=new Jo({vertexShader:J,fragmentShader:Ye,blending:_h,depthWrite:!1,uniforms:{px:{value:m.cellScale},force:{value:new Oe(0,0)},center:{value:new Oe(0,0)},scale:{value:new Oe(m.cursor_size,m.cursor_size)}}});this.mouse=new Wn(R,F),this.scene.add(this.mouse)}update(m){const R=B.diff.x/2*m.mouse_force,F=B.diff.y/2*m.mouse_force,K=m.cursor_size*m.cellScale.x,$=m.cursor_size*m.cellScale.y,he=Math.min(Math.max(B.coords.x,-1+K+m.cellScale.x*2),1-K-m.cellScale.x*2),ae=Math.min(Math.max(B.coords.y,-1+$+m.cellScale.y*2),1-$-m.cellScale.y*2),Te=this.mouse.material.uniforms;Te.force.value.set(R,F),Te.center.value.set(he,ae),Te.scale.value.set(m.cursor_size,m.cursor_size),super.update()}}class Ie extends oe{constructor(m){super({material:{vertexShader:N,fragmentShader:se,uniforms:{boundarySpace:{value:m.boundarySpace},velocity:{value:m.src.texture},velocity_new:{value:m.dst_.texture},v:{value:m.viscous},px:{value:m.cellScale},dt:{value:m.dt}}},output:m.dst,output0:m.dst_,output1:m.dst}),this.init()}update({viscous:m,iterations:R,dt:F}){let K,$;this.uniforms.v.value=m;for(let he=0;he<R;he++)he%2===0?(K=this.props.output0,$=this.props.output1):(K=this.props.output1,$=this.props.output0),this.uniforms.velocity_new.value=K.texture,this.props.output=$,this.uniforms.dt.value=F,super.update();return $}}class Pt extends oe{constructor(m){super({material:{vertexShader:N,fragmentShader:Le,uniforms:{boundarySpace:{value:m.boundarySpace},velocity:{value:m.src.texture},px:{value:m.cellScale},dt:{value:m.dt}}},output:m.dst}),this.init()}update({vel:m}){this.uniforms.velocity.value=m.texture,super.update()}}class je extends oe{constructor(m){super({material:{vertexShader:N,fragmentShader:Qe,uniforms:{boundarySpace:{value:m.boundarySpace},pressure:{value:m.dst_.texture},divergence:{value:m.src.texture},px:{value:m.cellScale}}},output:m.dst,output0:m.dst_,output1:m.dst}),this.init()}update({iterations:m}){let R,F;for(let K=0;K<m;K++)K%2===0?(R=this.props.output0,F=this.props.output1):(R=this.props.output1,F=this.props.output0),this.uniforms.pressure.value=R.texture,this.props.output=F,super.update();return F}}class Je extends oe{constructor(m){super({material:{vertexShader:N,fragmentShader:Q,uniforms:{boundarySpace:{value:m.boundarySpace},pressure:{value:m.src_p.texture},velocity:{value:m.src_v.texture},px:{value:m.cellScale},dt:{value:m.dt}}},output:m.dst}),this.init()}update({vel:m,pressure:R}){this.uniforms.velocity.value=m.texture,this.uniforms.pressure.value=R.texture,super.update()}}class nt{constructor(m){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...m},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new Oe,this.cellScale=new Oe,this.boundarySpace=new Oe,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Pi:si}createAllFBO(){const R={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Nt,magFilter:Nt,wrapS:Cn,wrapT:Cn};for(let F in this.fbos)this.fbos[F]=new ci(this.fboSize.x,this.fboSize.y,R)}createShaderPass(){this.advection=new Fe({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new De({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new Ie({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Pt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new je({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Je({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const m=Math.max(1,Math.round(this.options.resolution*W.width)),R=Math.max(1,Math.round(this.options.resolution*W.height)),F=1/m,K=1/R;this.cellScale.set(F,K),this.fboSize.set(m,R)}resize(){this.calcSize();for(let m in this.fbos)this.fbos[m].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let m=this.fbos.vel_1;this.options.isViscous&&(m=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:m});const R=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:m,pressure:R})}}class Be{constructor(){this.init()}init(){this.simulation=new nt,this.scene=new Vv,this.camera=new nu,this.output=new Wn(new cs(2,2),new Jo({vertexShader:N,fragmentShader:re,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new Oe},palette:{value:P},bgColor:{value:O}}})),this.scene.add(this.output)}resize(){this.simulation.resize()}render(){W.renderer.setRenderTarget(null),W.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class gt{constructor(m){this.props=m,W.init(m.$wrapper),B.init(m.$wrapper),B.autoIntensity=m.autoIntensity,B.takeoverDuration=m.takeoverDuration,this.lastUserInteraction=performance.now(),B.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new k(B,this,{enabled:m.autoDemo,speed:m.autoSpeed,resumeDelay:m.autoResumeDelay,rampDuration:m.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():S.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(W.renderer.domElement),this.output=new Be}resize(){W.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),B.update(),W.update(),this.output.update()}loop(){this.running&&(this.render(),b.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,b.current&&(cancelAnimationFrame(b.current),b.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),B.dispose(),W.renderer){const m=W.renderer.domElement;m&&m.parentNode&&m.parentNode.removeChild(m),W.renderer.dispose(),W.renderer.forceContextLoss()}}catch{}}}const D=x.current;D.style.position=D.style.position||"relative",D.style.overflow=D.style.overflow||"hidden";const vt=new gt({$wrapper:D,autoDemo:p,autoSpeed:g,autoIntensity:y,takeoverDuration:v,autoResumeDelay:h,autoRampDuration:_});M.current=vt,(()=>{var R;if(!M.current)return;const A=(R=M.current.output)==null?void 0:R.simulation;if(!A)return;const m=A.options.resolution;Object.assign(A.options,{mouse_force:t,cursor_size:e,isViscous:n,viscous:i,iterations_viscous:r,iterations_poisson:s,dt:o,BFECC:a,resolution:l,isBounce:c}),l!==m&&A.resize()})(),vt.start();const it=new IntersectionObserver(A=>{const m=A[0],R=m.isIntersecting&&m.intersectionRatio>0;S.current=R,M.current&&(R&&!document.hidden?M.current.start():M.current.pause())},{threshold:[0,.01,.1]});it.observe(D),C.current=it;const Se=new ResizeObserver(()=>{M.current&&(w.current&&cancelAnimationFrame(w.current),w.current=requestAnimationFrame(()=>{M.current&&M.current.resize()}))});return Se.observe(D),T.current=Se,()=>{if(b.current&&cancelAnimationFrame(b.current),T.current)try{T.current.disconnect()}catch{}if(C.current)try{C.current.disconnect()}catch{}M.current&&M.current.dispose(),M.current=null}},[a,e,o,c,n,s,r,t,l,i,u,p,g,y,v,h,_]),de.useEffect(()=>{var z;const L=M.current;if(!L)return;const P=(z=L.output)==null?void 0:z.simulation;if(!P)return;const O=P.options.resolution;Object.assign(P.options,{mouse_force:t,cursor_size:e,isViscous:n,viscous:i,iterations_viscous:r,iterations_poisson:s,dt:o,BFECC:a,resolution:l,isBounce:c}),L.autoDriver&&(L.autoDriver.enabled=p,L.autoDriver.speed=g,L.autoDriver.resumeDelay=h,L.autoDriver.rampDurationMs=_*1e3,L.autoDriver.mouse&&(L.autoDriver.mouse.autoIntensity=y,L.autoDriver.mouse.takeoverDuration=v)),l!==O&&P.resize()},[t,e,n,i,r,s,o,a,l,c,p,g,y,v,h,_]),V.jsx("div",{ref:x,className:`liquid-ether-container ${f||""}`,style:d})}const UN={colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:20,cursorSize:100,isViscous:!0,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6,style:{width:"100%",height:"100%"}};class FN extends de.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}render(){return this.state.hasError?V.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-accent/10"}):this.props.children}}function ON(){return V.jsxs("section",{id:"hero",className:"relative w-full min-h-screen flex items-center justify-center overflow-hidden",children:[V.jsx(FN,{children:V.jsx("div",{className:"absolute inset-0 w-full h-full",children:V.jsx(NN,{...UN})})}),V.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark z-[1]"}),V.jsxs("div",{className:"relative z-[2] max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[V.jsxs(yt.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.6},className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-8",children:[V.jsx("span",{className:"w-2 h-2 rounded-full bg-green-400 animate-pulse"}),V.jsx("span",{className:"text-sm font-medium text-white/70",children:"Open to internship opportunities"})]}),V.jsxs(yt.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:.3,duration:.7},className:"text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4",children:[V.jsxs("span",{className:"text-white",children:[ln.name.split(" ")[0]," "]}),V.jsx("span",{className:"text-gradient",children:ln.name.split(" ")[1]})]}),V.jsx(yt.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5,duration:.6},className:"text-lg sm:text-xl md:text-2xl font-medium text-white/70 mb-4",children:ln.title}),V.jsxs(yt.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8,duration:.6},className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[V.jsxs("a",{href:"#projects",className:"btn-primary group",children:[V.jsx(SM,{size:18}),"View Projects"]}),V.jsxs("a",{href:"#contact",className:"btn-outline group",children:[V.jsx(Lm,{size:18}),"Contact Me"]})]})]}),V.jsx(yt.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5,duration:1},className:"absolute bottom-8 left-1/2 -translate-x-1/2 z-[2]"})]})}function Ro({title:t,subtitle:e,align:n="center"}){return V.jsxs(yt.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.6},className:`mb-16 ${n==="center"?"text-center":"text-left"}`,children:[V.jsx("h2",{className:"text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4",children:t}),e&&V.jsx("p",{className:"text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed",children:e}),V.jsxs("div",{className:`mt-6 flex gap-1.5 ${n==="center"?"justify-center":""}`,children:[V.jsx("span",{className:"w-8 h-1 rounded-full bg-primary"}),V.jsx("span",{className:"w-3 h-1 rounded-full bg-accent/60"}),V.jsx("span",{className:"w-1.5 h-1 rounded-full bg-lavender/40"})]})]})}const kN=[{icon:Eu,label:"Backend-First",desc:"PHP, Laravel, MySQL"},{icon:MM,label:"CS Student",desc:"EMSI Engineering"},{icon:a2,label:"Morocco",desc:"Tanger-Tetouan"}],BN={hidden:{opacity:0,y:30},visible:t=>({opacity:1,y:0,transition:{delay:t*.15,duration:.5}})};function VN(){return V.jsxs("section",{id:"about",className:"section-padding max-w-6xl mx-auto",children:[V.jsx(Ro,{title:"About Me",subtitle:"A quick look at who I am and what drives me"}),V.jsxs("div",{className:"grid md:grid-cols-5 gap-8 items-start",children:[V.jsxs(yt.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.6},className:"md:col-span-3 space-y-5",children:[V.jsx("p",{className:"text-white/70 text-base sm:text-lg leading-relaxed",children:ln.bio}),V.jsx("p",{className:"text-white/50 text-base leading-relaxed",children:"I care about writing clean, tested, and maintainable code. Whether it's designing a database schema, building a REST API, or crafting a responsive frontend — I focus on quality and real-world impact."}),V.jsx("p",{className:"text-white/50 text-base leading-relaxed",children:"When I'm not coding, you'll find me exploring Linux, reading about system architecture, or contributing to open-source projects."})]}),V.jsx("div",{className:"md:col-span-2 space-y-4",children:kN.map((t,e)=>V.jsxs(yt.div,{custom:e,variants:BN,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-60px"},className:"glass-card glow-border p-4 flex items-center gap-4 group hover:bg-surface-light/80 transition-all duration-300",children:[V.jsx("div",{className:"w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors",children:V.jsx(t.icon,{size:20,className:"text-primary"})}),V.jsxs("div",{children:[V.jsx("p",{className:"text-white font-semibold text-sm",children:t.label}),V.jsx("p",{className:"text-white/40 text-xs",children:t.desc})]})]},t.label))})]})]})}const zN={Server:EM,Monitor:f2,Database:e2,Wrench:S2},HN={hidden:{},visible:{transition:{staggerChildren:.12}}},GN={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.5}}};function WN(){return V.jsxs("section",{id:"skills",className:"section-padding max-w-6xl mx-auto",children:[V.jsx(Ro,{title:"Skills",subtitle:"Technologies I use to build reliable software"}),V.jsx(yt.div,{variants:HN,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},className:"grid sm:grid-cols-2 gap-6",children:OR.map(t=>{const e=zN[t.icon]||EM;return V.jsxs(yt.div,{variants:GN,className:"glass-card glow-border p-6 group hover:bg-surface-light/80 transition-all duration-300",children:[V.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[V.jsx("div",{className:"w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors",children:V.jsx(e,{size:20,className:"text-primary"})}),V.jsxs("div",{children:[V.jsx("h3",{className:"text-white font-bold text-lg",children:t.title}),V.jsx("p",{className:"text-white/40 text-xs",children:t.description})]})]}),V.jsx("div",{className:"space-y-3.5 mt-5",children:t.items.map(n=>V.jsx("div",{children:V.jsx("div",{className:"flex items-center mb-1.5",children:V.jsx("span",{className:"text-white/70 text-sm font-medium",children:n.name})})},n.name))})]},t.title)})})]})}const jN={hidden:{},visible:{transition:{staggerChildren:.15}}},XN={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.6}}};function YN(){return V.jsxs("section",{id:"projects",className:"section-padding max-w-6xl mx-auto",children:[V.jsx(Ro,{title:"Featured Projects",subtitle:"Real-world applications showcasing backend architecture, clean code, and modern tools"}),V.jsx(yt.div,{variants:jN,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},className:"grid md:grid-cols-2 lg:grid-cols-3 gap-6",children:kR.map(t=>V.jsxs(yt.div,{variants:XN,className:"group relative glass-card overflow-hidden rounded-2xl border border-surface-border hover:border-primary/40 transition-all duration-500",children:[V.jsxs("div",{className:"relative h-48 overflow-hidden",children:[V.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent z-10"}),V.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-700",loading:"lazy"}),V.jsx("div",{className:"absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500 z-[5]"})]}),V.jsxs("div",{className:"p-6 relative",children:[V.jsx("h3",{className:"text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300",children:t.title}),V.jsx("p",{className:"text-white/40 text-sm leading-relaxed mb-4",children:t.description}),V.jsx("div",{className:"flex flex-wrap gap-1.5 mb-5",children:t.technologies.map(e=>V.jsx("span",{className:"px-2 py-0.5 text-xs font-mono text-lavender/80 bg-lavender/5 border border-lavender/15 rounded",children:e},e))}),V.jsxs("div",{className:"flex gap-3",children:[t.github&&V.jsxs("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white/70 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300",children:[V.jsx(Eu,{size:14}),"Code"]}),t.live&&V.jsxs("a",{href:t.live,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-primary/80 hover:bg-primary border border-primary/50 rounded-lg transition-all duration-300 hover:shadow-glow",children:[V.jsx(SM,{size:14}),"Live Demo"]})]})]}),V.jsx("div",{className:"absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"})]},t.title))})]})}const $N={goal:TM,education:MM};function qN(){return V.jsxs("section",{id:"experience",className:"section-padding max-w-4xl mx-auto",children:[V.jsx(Ro,{title:"Education & Experience",subtitle:"My academic path and professional goals"}),V.jsxs("div",{className:"relative",children:[V.jsx("div",{className:"absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-lavender/30 to-transparent"}),V.jsx("div",{className:"space-y-8",children:BR.map((t,e)=>{const n=$N[t.type]||TM;return V.jsxs(yt.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.5,delay:e*.15},className:"relative pl-16 md:pl-20",children:[V.jsx("div",{className:"absolute left-[14px] md:left-[22px] top-1 w-8 h-8 rounded-full bg-surface border-2 border-primary/50 flex items-center justify-center z-10",children:V.jsx(n,{size:14,className:"text-primary"})}),V.jsxs("div",{className:"glass-card glow-border p-5 md:p-6 hover:bg-surface-light/80 transition-all duration-300",children:[V.jsx("span",{className:"text-xs font-mono text-accent/70 tracking-wide uppercase",children:t.date}),V.jsx("h3",{className:"text-white font-bold text-base md:text-lg mt-1 mb-2",children:t.title}),V.jsx("p",{className:"text-white/40 text-sm leading-relaxed",children:t.description})]})]},t.title)})})]})]})}const KN=[{icon:ZR,title:"PFA Internship",description:"A backend or full-stack internship where I can contribute to production-grade systems and learn from experienced engineers."},{icon:h2,title:"Real-World Impact",description:"Projects that ship to real users — building APIs, dashboards, or tools that solve actual problems."},{icon:x2,title:"Team Collaboration",description:"Working with a team that values code quality, communication, and continuous learning."},{icon:$R,title:"Growth & Mentorship",description:"An environment where I can deepen my backend skills, explore DevOps practices, and grow as a software engineer."}],ZN={hidden:{},visible:{transition:{staggerChildren:.12}}},QN={hidden:{opacity:0,y:25},visible:{opacity:1,y:0,transition:{duration:.5}}};function JN(){return V.jsxs("section",{id:"looking-for",className:"section-padding max-w-6xl mx-auto",children:[V.jsx(Ro,{title:"What I'm Looking For",subtitle:"The kind of opportunities and environments where I thrive"}),V.jsx(yt.div,{variants:ZN,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-80px"},className:"grid sm:grid-cols-2 gap-5",children:KN.map(t=>V.jsxs(yt.div,{variants:QN,className:"glass-card glow-border p-6 group hover:bg-surface-light/80 transition-all duration-300",children:[V.jsx("div",{className:"w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors",children:V.jsx(t.icon,{size:20,className:"text-primary"})}),V.jsx("h3",{className:"text-white font-bold text-base mb-2",children:t.title}),V.jsx("p",{className:"text-white/40 text-sm leading-relaxed",children:t.description})]},t.title))})]})}function eU(){const[t,e]=de.useState(""),n=s=>{s.preventDefault();const o=new FormData(s.currentTarget),a=o.get("name"),l=o.get("email"),c=o.get("message"),u=encodeURIComponent(`Portfolio message from ${a}`),d=encodeURIComponent(`From: ${a} (${l})

${c}`);window.location.href=`mailto:${ln.email}?subject=${u}&body=${d}`,e("Opening your email app..."),s.currentTarget.reset()},i=`https://wa.me/${ln.whatsapp.number}?text=${encodeURIComponent(ln.whatsapp.message)}`,r=[{icon:Eu,href:ln.github,label:"GitHub"},{icon:yM,href:ln.linkedin,label:"LinkedIn"},{icon:c2,href:i,label:"WhatsApp"},{icon:Lm,href:`mailto:${ln.email}`,label:"Email"}];return V.jsxs("section",{id:"contact",className:"section-padding max-w-5xl mx-auto",children:[V.jsx(Ro,{title:"Get In Touch",subtitle:"Have a project in mind or want to connect? I'd love to hear from you"}),V.jsxs("div",{className:"grid md:grid-cols-5 gap-8",children:[V.jsxs(yt.div,{initial:{opacity:0,x:-30},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.5},className:"md:col-span-2 space-y-4",children:[V.jsx("p",{className:"text-white/50 text-sm leading-relaxed mb-6",children:"Whether it's a job opportunity, a collaboration, or just a friendly hello — feel free to reach out through any channel."}),r.map(s=>V.jsxs("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:"glass-card glow-border p-4 flex items-center gap-4 group hover:bg-surface-light/80 transition-all duration-300 block",children:[V.jsx("div",{className:"w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors",children:V.jsx(s.icon,{size:18,className:"text-primary"})}),V.jsxs("div",{children:[V.jsx("p",{className:"text-white font-semibold text-sm",children:s.label}),V.jsx("p",{className:"text-white/30 text-xs truncate max-w-[200px]",children:s.label==="Email"?ln.email:s.label==="WhatsApp"?"Send a message":s.href.replace("https://","")})]})]},s.label))]}),V.jsxs(yt.form,{onSubmit:n,initial:{opacity:0,x:30},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.5},className:"md:col-span-3 glass-card glow-border p-6 md:p-8 space-y-5",children:[V.jsxs("div",{className:"grid sm:grid-cols-2 gap-5",children:[V.jsxs("div",{children:[V.jsx("label",{htmlFor:"contact-name",className:"block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider",children:"Name"}),V.jsx("input",{id:"contact-name",name:"name",type:"text",required:!0,placeholder:"Your name",className:"w-full bg-dark-200 border border-surface-border rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"})]}),V.jsxs("div",{children:[V.jsx("label",{htmlFor:"contact-email",className:"block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider",children:"Email"}),V.jsx("input",{id:"contact-email",name:"email",type:"email",required:!0,placeholder:"you@example.com",className:"w-full bg-dark-200 border border-surface-border rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"})]})]}),V.jsxs("div",{children:[V.jsx("label",{htmlFor:"contact-message",className:"block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider",children:"Message"}),V.jsx("textarea",{id:"contact-message",name:"message",required:!0,rows:5,placeholder:"Tell me about your project or opportunity...",className:"w-full bg-dark-200 border border-surface-border rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300 resize-none"})]}),V.jsxs("div",{className:"flex items-center gap-4",children:[V.jsxs("button",{type:"submit",className:"btn-primary",children:[V.jsx(m2,{size:16}),"Send Message"]}),t&&V.jsx("span",{className:"text-xs text-accent/70 animate-fade-in",children:t})]})]})]})]})}function tU(){const t=new Date().getFullYear(),e=pa("img/HSB.png"),n=[{icon:Eu,href:ln.github,label:"GitHub"},{icon:yM,href:ln.linkedin,label:"LinkedIn"},{icon:Lm,href:`mailto:${ln.email}`,label:"Email"}];return V.jsx("footer",{className:"border-t border-surface-border bg-dark/70 backdrop-blur-sm",children:V.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10",children:[V.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-6",children:[V.jsxs("div",{className:"text-center md:text-left",children:[V.jsx(yt.img,{src:e,alt:"HSB Logo",className:"w-9 h-9 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.35)] mx-auto md:mx-0",initial:{opacity:0,scale:.92},whileInView:{opacity:1,scale:1,y:[0,-2,0]},viewport:{once:!0},transition:{opacity:{duration:.35,ease:"easeOut"},scale:{duration:.35,ease:"easeOut"},y:{duration:2.8,ease:"easeInOut",repeat:1/0}}}),V.jsx("p",{className:"text-white/30 text-xs mt-1",children:"Built with React, Tailwind & Framer Motion"})]}),V.jsx("div",{className:"flex items-center gap-3",children:n.map(i=>V.jsx("a",{href:i.href,target:i.href.startsWith("mailto:")?void 0:"_blank",rel:i.href.startsWith("mailto:")?void 0:"noopener noreferrer","aria-label":i.label,className:"w-9 h-9 rounded-lg bg-white/5 border border-surface-border flex items-center justify-center text-white/40 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300",children:V.jsx(i.icon,{size:16})},i.href))})]}),V.jsx("div",{className:"mt-8 pt-6 border-t border-surface-border/50 text-center",children:V.jsxs("p",{className:"text-white/25 text-xs flex items-center justify-center gap-1",children:["© ",t," ",ln.name,". Made with",V.jsx(r2,{size:12,className:"text-accent/50 fill-accent/50"}),"in Morocco"]})})]})})}function nU(){const[t,e]=de.useState("down"),n=de.useRef(0),i=de.useRef(!1);return de.useEffect(()=>{const r=()=>{i.current||(i.current=!0,window.requestAnimationFrame(()=>{const s=window.scrollY;s<n.current-2?e("up"):s>n.current+2&&e("down"),n.current=s,i.current=!1}))};return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]),V.jsxs(V.Fragment,{children:[V.jsx(VR,{}),V.jsxs("div",{className:`page-scroll-shell ${t==="up"?"page-scroll-shell--reverse":""}`,children:[V.jsx(ON,{}),V.jsxs("main",{children:[V.jsx(VN,{}),V.jsx(WN,{}),V.jsx(YN,{}),V.jsx(qN,{}),V.jsx(JN,{}),V.jsx(eU,{})]}),V.jsx(tU,{})]})]})}td.createRoot(document.getElementById("root")).render(V.jsx(PE.StrictMode,{children:V.jsx(nU,{})}));
