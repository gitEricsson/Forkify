var e,t,n,r,i,a,o,s,c,d,l,u,p,h,f,g,m,_,v,y=globalThis;function b(e){return e&&e.__esModule?e.default:e}var w={},k={},S=function(e){return e&&e.Math===Math&&e};k=S("object"==typeof globalThis&&globalThis)||S("object"==typeof window&&window)||S("object"==typeof self&&self)||S("object"==typeof y&&y)||S("object"==typeof k&&k)||function(){return this}()||Function("return this")();var E={},L={};E=!(L=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var $={},F={};F=!L(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var P=Function.prototype.call;$=F?P.bind(P):function(){return P.apply(P,arguments)};var H={}.propertyIsEnumerable,M=Object.getOwnPropertyDescriptor;a=M&&!H.call({1:2},1)?function(e){var t=M(this,e);return!!t&&t.enumerable}:H;var O={};O=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var I={},q={},j={},x=Function.prototype,A=x.call,C=F&&x.bind.bind(A,A),T={},R=(j=F?C:function(e){return function(){return A.apply(e,arguments)}})({}.toString),W=j("".slice);T=function(e){return W(R(e),8,-1)};var N=Object,D=j("".split);q=L(function(){return!N("z").propertyIsEnumerable(0)})?function(e){return"String"===T(e)?D(e,""):N(e)}:N;var U={},z={};z=function(e){return null==e};var B=TypeError;U=function(e){if(z(e))throw new B("Can't call method on "+e);return e},I=function(e){return q(U(e))};var G={},J={},K={},Q={},Y="object"==typeof document&&document.all;Q=void 0===Y&&void 0!==Y?function(e){return"function"==typeof e||e===Y}:function(e){return"function"==typeof e},K=function(e){return"object"==typeof e?null!==e:Q(e)};var V={},X={};X=function(e,t){var n;return arguments.length<2?(n=k[e],Q(n)?n:void 0):k[e]&&k[e][t]};var Z={};Z=j({}.isPrototypeOf);var ee={},et={},en={},er={};er="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ei=k.process,ea=k.Deno,eo=ei&&ei.versions||ea&&ea.version,es=eo&&eo.v8;es&&(s=(o=es.split("."))[0]>0&&o[0]<4?1:+(o[0]+o[1])),!s&&er&&(!(o=er.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=er.match(/Chrome\/(\d+)/))&&(s=+o[1]),en=s;var ec=k.String;ee=(et=!!Object.getOwnPropertySymbols&&!L(function(){var e=Symbol("symbol detection");return!ec(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&en&&en<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ed=Object;V=ee?function(e){return"symbol"==typeof e}:function(e){var t=X("Symbol");return Q(t)&&Z(t.prototype,ed(e))};var el={},eu={},ep={},eh=String;ep=function(e){try{return eh(e)}catch(e){return"Object"}};var ef=TypeError;eu=function(e){if(Q(e))return e;throw new ef(ep(e)+" is not a function")},el=function(e,t){var n=e[t];return z(n)?void 0:eu(n)};var eg={},em=TypeError;eg=function(e,t){var n,r;if("string"===t&&Q(n=e.toString)&&!K(r=$(n,e))||Q(n=e.valueOf)&&!K(r=$(n,e))||"string"!==t&&Q(n=e.toString)&&!K(r=$(n,e)))return r;throw new em("Can't convert object to primitive value")};var e_={},ev={},ey={};ey=!1;var eb={},ew=Object.defineProperty;eb=function(e,t){try{ew(k,e,{value:t,configurable:!0,writable:!0})}catch(n){k[e]=t}return t};var ek="__core-js_shared__",eS=ev=k[ek]||eb(ek,{});(eS.versions||(eS.versions=[])).push({version:"3.36.1",mode:ey?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE",source:"https://github.com/zloirock/core-js"}),e_=function(e,t){return ev[e]||(ev[e]=t||{})};var eE={},eL={},e$=Object;eL=function(e){return e$(U(e))};var eF=j({}.hasOwnProperty);eE=Object.hasOwn||function(e,t){return eF(eL(e),t)};var eP={},eH=0,eM=Math.random(),eO=j(1..toString);eP=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eO(++eH+eM,36)};var eI=k.Symbol,eq=e_("wks"),ej=ee?eI.for||eI:eI&&eI.withoutSetter||eP,ex=TypeError,eA=(eE(eq,e="toPrimitive")||(eq[e]=et&&eE(eI,e)?eI[e]:ej("Symbol."+e)),eq[e]);J=function(e,t){if(!K(e)||V(e))return e;var n,r=el(e,eA);if(r){if(void 0===t&&(t="default"),n=$(r,e,t),!K(n)||V(n))return n;throw new ex("Can't convert object to primitive value")}return void 0===t&&(t="number"),eg(e,t)},G=function(e){var t=J(e,"string");return V(t)?t:t+""};var eC={},eT={},eR=k.document,eW=K(eR)&&K(eR.createElement);eT=function(e){return eW?eR.createElement(e):{}},eC=!E&&!L(function(){return 7!==Object.defineProperty(eT("div"),"a",{get:function(){return 7}}).a});var eN=Object.getOwnPropertyDescriptor;i=E?eN:function(e,t){if(e=I(e),t=G(t),eC)try{return eN(e,t)}catch(e){}if(eE(e,t))return O(!$(a,e,t),e[t])};var eD={},eU={};eU=E&&L(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var ez={},eB=String,eG=TypeError;ez=function(e){if(K(e))return e;throw new eG(eB(e)+" is not an object")};var eJ=TypeError,eK=Object.defineProperty,eQ=Object.getOwnPropertyDescriptor,eY="enumerable",eV="configurable",eX="writable";c=E?eU?function(e,t,n){if(ez(e),t=G(t),ez(n),"function"==typeof e&&"prototype"===t&&"value"in n&&eX in n&&!n[eX]){var r=eQ(e,t);r&&r[eX]&&(e[t]=n.value,n={configurable:eV in n?n[eV]:r[eV],enumerable:eY in n?n[eY]:r[eY],writable:!1})}return eK(e,t,n)}:eK:function(e,t,n){if(ez(e),t=G(t),ez(n),eC)try{return eK(e,t,n)}catch(e){}if("get"in n||"set"in n)throw new eJ("Accessors not supported");return"value"in n&&(e[t]=n.value),e},eD=E?function(e,t,n){return c(e,t,O(1,n))}:function(e,t,n){return e[t]=n,e};var eZ={},e0={},e1=Function.prototype,e2=E&&Object.getOwnPropertyDescriptor,e4=eE(e1,"name")&&(!E||E&&e2(e1,"name").configurable),e3={},e7=j(Function.toString);Q(ev.inspectSource)||(ev.inspectSource=function(e){return e7(e)}),e3=ev.inspectSource;var e5={},e8={},e9=k.WeakMap;e8=Q(e9)&&/native code/.test(String(e9));var e6={},te=e_("keys");e6=function(e){return te[e]||(te[e]=eP(e))};var tt={};tt={};var tn="Object already initialized",tr=k.TypeError,ti=k.WeakMap;if(e8||ev.state){var ta=ev.state||(ev.state=new ti);ta.get=ta.get,ta.has=ta.has,ta.set=ta.set,d=function(e,t){if(ta.has(e))throw new tr(tn);return t.facade=e,ta.set(e,t),t},l=function(e){return ta.get(e)||{}},u=function(e){return ta.has(e)}}else{var to=e6("state");tt[to]=!0,d=function(e,t){if(eE(e,to))throw new tr(tn);return t.facade=e,eD(e,to,t),t},l=function(e){return eE(e,to)?e[to]:{}},u=function(e){return eE(e,to)}}var ts=(e5={set:d,get:l,has:u,enforce:function(e){return u(e)?l(e):d(e,{})},getterFor:function(e){return function(t){var n;if(!K(t)||(n=l(t)).type!==e)throw new tr("Incompatible receiver, "+e+" required");return n}}}).enforce,tc=e5.get,tl=String,tu=Object.defineProperty,tp=j("".slice),th=j("".replace),tf=j([].join),tg=E&&!L(function(){return 8!==tu(function(){},"length",{value:8}).length}),tm=String(String).split("String"),t_=e0=function(e,t,n){"Symbol("===tp(tl(t),0,7)&&(t="["+th(tl(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!eE(e,"name")||e4&&e.name!==t)&&(E?tu(e,"name",{value:t,configurable:!0}):e.name=t),tg&&n&&eE(n,"arity")&&e.length!==n.arity&&tu(e,"length",{value:n.arity});try{n&&eE(n,"constructor")&&n.constructor?E&&tu(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=ts(e);return eE(r,"source")||(r.source=tf(tm,"string"==typeof t?t:"")),e};Function.prototype.toString=t_(function(){return Q(this)&&tc(this).source||e3(this)},"toString"),eZ=function(e,t,n,r){r||(r={});var i=r.enumerable,a=void 0!==r.name?r.name:t;if(Q(n)&&e0(n,a,r),r.global)i?e[t]=n:eb(t,n);else{try{r.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=n:c(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var tv={},ty={},tb={},tw={},tk={},tS={},tE=Math.ceil,tL=Math.floor;tS=Math.trunc||function(e){var t=+e;return(t>0?tL:tE)(t)},tk=function(e){var t=+e;return t!=t||0===t?0:tS(t)};var t$=Math.max,tF=Math.min;tw=function(e,t){var n=tk(e);return n<0?t$(n+t,0):tF(n,t)};var tP={},tH={},tM=Math.min;tH=function(e){var t=tk(e);return t>0?tM(t,9007199254740991):0},tP=function(e){return tH(e.length)};var tO=function(e){return function(t,n,r){var i,a=I(t),o=tP(a);if(0===o)return!e&&-1;var s=tw(r,o);if(e&&n!=n){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===n)return e||s||0;return!e&&-1}},tI={includes:tO(!0),indexOf:tO(!1)}.indexOf,tq=j([].push);tb=function(e,t){var n,r=I(e),i=0,a=[];for(n in r)!eE(tt,n)&&eE(r,n)&&tq(a,n);for(;t.length>i;)eE(r,n=t[i++])&&(~tI(a,n)||tq(a,n));return a};var tj=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return tb(e,tj)},h=Object.getOwnPropertySymbols;var tx=j([].concat);ty=X("Reflect","ownKeys")||function(e){var t=p(ez(e));return h?tx(t,h(e)):t},tv=function(e,t,n){for(var r=ty(t),a=0;a<r.length;a++){var o=r[a];eE(e,o)||n&&eE(n,o)||c(e,o,i(t,o))}};var tA={},tC=/#|\.prototype\./,tT=function(e,t){var n=tW[tR(e)];return n===tD||n!==tN&&(Q(t)?L(t):!!t)},tR=tT.normalize=function(e){return String(e).replace(tC,".").toLowerCase()},tW=tT.data={},tN=tT.NATIVE="N",tD=tT.POLYFILL="P";tA=tT,w=function(e,t){var n,r,a,o,s,c=e.target,d=e.global,l=e.stat;if(n=d?k:l?k[c]||eb(c,{}):k[c]&&k[c].prototype)for(r in t){if(o=t[r],a=e.dontCallGetSet?(s=i(n,r))&&s.value:n[r],!tA(d?r:c+(l?".":"#")+r,e.forced)&&void 0!==a){if(typeof o==typeof a)continue;tv(o,a)}(e.sham||a&&a.sham)&&eD(o,"sham",!0),eZ(n,r,o,e)}};var tU={},tz={},tB=Function.prototype,tG=tB.apply,tJ=tB.call;tz="object"==typeof Reflect&&Reflect.apply||(F?tJ.bind(tG):function(){return tJ.apply(tG,arguments)});var tK={},tQ={},tY=(tQ=function(e){if("Function"===T(e))return j(e)})(tQ.bind);tK=function(e,t){return eu(e),void 0===t?e:F?tY(e,t):function(){return e.apply(t,arguments)}};var tV={};tV=X("document","documentElement");var tX={};tX=j([].slice);var tZ={},t0=TypeError;tZ=function(e,t){if(e<t)throw new t0("Not enough arguments");return e};var t1={};t1=/(?:ipad|iphone|ipod).*applewebkit/i.test(er);var t2={};t2="process"===T(k.process);var t4=k.setImmediate,t3=k.clearImmediate,t7=k.process,t5=k.Dispatch,t8=k.Function,t9=k.MessageChannel,t6=k.String,ne=0,nt={},nn="onreadystatechange";L(function(){f=k.location});var nr=function(e){if(eE(nt,e)){var t=nt[e];delete nt[e],t()}},ni=function(e){return function(){nr(e)}},na=function(e){nr(e.data)},no=function(e){k.postMessage(t6(e),f.protocol+"//"+f.host)};t4&&t3||(t4=function(e){tZ(arguments.length,1);var t=Q(e)?e:t8(e),n=tX(arguments,1);return nt[++ne]=function(){tz(t,void 0,n)},g(ne),ne},t3=function(e){delete nt[e]},t2?g=function(e){t7.nextTick(ni(e))}:t5&&t5.now?g=function(e){t5.now(ni(e))}:t9&&!t1?(_=(m=new t9).port2,m.port1.onmessage=na,g=tK(_.postMessage,_)):k.addEventListener&&Q(k.postMessage)&&!k.importScripts&&f&&"file:"!==f.protocol&&!L(no)?(g=no,k.addEventListener("message",na,!1)):g=nn in eT("script")?function(e){tV.appendChild(eT("script"))[nn]=function(){tV.removeChild(this),nr(e)}}:function(e){setTimeout(ni(e),0)});var ns=(tU={set:t4,clear:t3}).clear;w({global:!0,bind:!0,enumerable:!0,forced:k.clearImmediate!==ns},{clearImmediate:ns});var nc=tU.set,nd={},nl={};nl="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var nu=k.Function,np=/MSIE .\./.test(er)||nl&&((t=k.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));nd=function(e,t){var n=t?2:1;return np?function(r,i){var a=tZ(arguments.length,1)>n,o=Q(r)?r:nu(r),s=a?tX(arguments,n):[],c=a?function(){tz(o,this,s)}:o;return t?e(c,i):e(c)}:e};var nh=k.setImmediate?nd(nc,!1):nc;w({global:!0,bind:!0,enumerable:!0,forced:k.setImmediate!==nh},{setImmediate:nh});var nf=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function d(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,n){return e[t]=n}}function l(e,n,r,a){var o,s,c=Object.create((n&&n.prototype instanceof m?n:m).prototype);return i(c,"_invoke",{value:(o=new F(a||[]),s=p,function(n,i){if(s===h)throw Error("Generator is already running");if(s===f){if("throw"===n)throw i;return H()}for(o.method=n,o.arg=i;;){var a=o.delegate;if(a){var c=function e(n,r){var i=r.method,a=n.iterator[i];if(a===t)return r.delegate=null,"throw"===i&&n.iterator.return&&(r.method="return",r.arg=t,e(n,r),"throw"===r.method)||"return"!==i&&(r.method="throw",r.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var o=u(a,n.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var s=o.arg;return s?s.done?(r[n.resultName]=s.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):s:(r.method="throw",r.arg=TypeError("iterator result is not an object"),r.delegate=null,g)}(a,o);if(c){if(c===g)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===p)throw s=f,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=h;var d=u(e,r,o);if("normal"===d.type){if(s=o.done?f:"suspendedYield",d.arg===g)continue;return{value:d.arg,done:o.done}}"throw"===d.type&&(s=f,o.method="throw",o.arg=d.arg)}})}),c}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",h="executing",f="completed",g={};function m(){}function _(){}function v(){}var y={};d(y,o,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(P([])));w&&w!==n&&r.call(w,o)&&(y=w);var k=v.prototype=m.prototype=Object.create(y);function S(e){["next","throw","return"].forEach(function(t){d(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var n;i(this,"_invoke",{value:function(i,a){function o(){return new t(function(n,o){!function n(i,a,o,s){var c=u(e[i],e,a);if("throw"===c.type)s(c.arg);else{var d=c.arg,l=d.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then(function(e){n("next",e,o,s)},function(e){n("throw",e,o,s)}):t.resolve(l).then(function(e){d.value=e,o(d)},function(e){return n("throw",e,o,s)})}}(i,a,n,o)})}return n=n?n.then(o,o):o()}})}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function F(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function P(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:H}}function H(){return{value:t,done:!0}}return _.prototype=v,i(k,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:_,configurable:!0}),_.displayName=d(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===_||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,d(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},S(E.prototype),d(E.prototype,s,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new E(l(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then(function(e){return e.done?e.value:o.next()})},S(k),d(k,c,"Generator"),d(k,o,function(){return this}),d(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=P,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),d=r.call(o,"finallyLoc");if(c&&d){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(d){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),$(n),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;$(n)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:P(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=nf}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=nf:Function("r","regeneratorRuntime = r")(nf)}const ng="https://forkify-api.herokuapp.com/api/v2/recipes/",nm="a74b70e1-6a90-4510-a0ac-564aaee32e84",n_=function(e){return new Promise(function(t,n){setTimeout(function(){n(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})},nv=async function(e,t){try{let n=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),r=await Promise.race([n,n_(20)]),i=await r.json();if(!r.ok)throw Error(`${i.message} (${r.status})`);return i}catch(e){throw e}},ny=async function(e){try{let t=await Promise.all(e.map(e=>fetch(e))),n=await Promise.all(t.map(e=>e.json()));if(!t[0].ok)throw Error(`${n.message} (${t.status})`);return n}catch(e){throw e}},nb=async function(e,t){try{let n=fetch(e,{method:"POST",headers:{"Content-Type":"application/json","x-app-id":"671df85c","x-app-key":"200386756533a25759fa7042ebf7cfb3","x-remote-user-id":"0"},body:JSON.stringify(t)}),r=await Promise.race([n,n_(20)]),i=await r.json();if(!r.ok)throw Error(`${i.message} (${r.status})`);return i}catch(e){throw e}},nw={recipe:{},search:{query:"",results:[],resultsPerPage:[],resultsRecipes:[],page:1,noOfResultsPerPage:10},bookmarks:[],ingredientsList:[],mealPlan:{sunday:[],monday:[],tuesday:[],wednesday:[],thursday:[],friday:[],saturday:[]}},nk=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,nutrients:{calories:0,totalFat:0,saturatedFat:0,cholesterol:0,sodium:0,potassium:0,totalCarbohydrates:0,dietaryFibers:0,sugars:0,protein:0,phosphorus:0},planSet:{},...t.key&&{key:t.key}}},nS=function(e,t){localStorage.setItem(e,JSON.stringify(t))},nE=async function(e){try{let t=await nv(`${ng}${e}?key=${nm}`);nw.recipe=nk(t),nw.bookmarks.some(t=>t.id===e)?nw.recipe.bookmarked=!0:nw.recipe.bookmarked=!1}catch(e){throw e}},nL=function(e){e.forEach(e=>{Object.keys(nw.mealPlan).forEach(t=>{nw.mealPlan[t].some(t=>t.id===e.id)?e.planSet[t]=!0:e.planSet[t]=!1})})},n$=async function(e){try{idsArray=e.map(e=>`${ng}${e}?key=${nm}`);let t=await ny(idsArray);nw.search.resultsRecipes=t.map(e=>{let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,image:t.image_url,...t.key&&{key:t.key},cookingTime:t.cooking_time,noOfIngredients:t.ingredients.length,planSet:{}}}),nL(nw.search.resultsRecipes)}catch(e){throw e}},nF=async function(e){try{nw.search.query=e;let t=await nv(`${ng}?search=${e}&key=${nm}`);nw.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,planSet:{},...e.key&&{key:e.key}})),nL(nw.search.results),nw.search.page=1}catch(e){throw e}},nP=async function(){try{let e=nw.recipe.ingredients.map(e=>`${e.quantity} ${e.unit} ${e.description}`).join(", "),t={query:`${e}`,num_servings:nw.recipe.servings,timezone:"WEST AFRICA"};(await nb("https://trackapi.nutritionix.com/v2/natural/nutrients",t)).foods.forEach(e=>{let t=nw.recipe.nutrients;t.calories+=e.nf_calories,t.totalFat+=e.nf_total_fat,t.saturatedFat+=e.nf_saturated_fat,t.cholesterol+=e.nf_cholesterol,t.sodium+=e.nf_sodium,t.potassium+=e.nf_potassium,t.totalCarbohydrates+=e.nf_total_carbohydrate,t.dietaryFibers+=e.nf_dietary_fiber,t.sugars+=e.nf_sugars,t.protein+=e.nf_protein,t.phosphorus+=e.nf_p})}catch(e){throw e}},nH=function(e=nw.search.page){nw.search.page=e,nw.search.resultsRecipes=[];let t=(e-1)*nw.search.noOfResultsPerPage,n=e*nw.search.noOfResultsPerPage;return nw.search.resultsPerPage=nw.search.results.slice(t,n),nw.search.resultsPerPage},nM=function(e,t){"default"===t&&(nw.search.resultsRecipes=nw.search.resultsPerPage),("cookingTime"===t||"noOfIngredients"===t)&&(nw.search.resultsRecipes=e.slice().sort((e,n)=>n[t]-e[t]))},nO=function(e){nw.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/nw.recipe.servings}),Object.keys(nw.recipe.nutrients).forEach(t=>{nw.recipe.nutrients[t]=nw.recipe.nutrients[t]*nw.recipe.servings/e}),nw.recipe.servings=e},nI=(e,t,n,r)=>{e.forEach(e=>{t===e.id&&(e.planSet[n]=r)})},nq=function(e,t){nw.mealPlan[t].push(e),nI(nw.search.resultsRecipes,e.id,t,!0),nI(nw.search.results,e.id,t,!0),nS("mealPlan",nw.mealPlan)},nj=function(e,t){let n=nw.mealPlan[t].findIndex(t=>t.id===e);nw.mealPlan[t].splice(n,1),nI(nw.search.resultsRecipes,e,t,!1),nI(nw.search.results,e,t,!1),nS("mealPlan",nw.mealPlan)},nx=function(e){return(0!==nw.search.resultsRecipes.length?nw.search.resultsRecipes:nw.search.resultsPerPage).find(t=>t.id===e)},nA=function(e){e.forEach((e,t)=>{let n=Date.now()+(1e5*Math.random()).toFixed()+Math.floor(new Date().valueOf()*Math.random());e.id=n;let r=JSON.parse(JSON.stringify(e));nw.ingredientsList.push(r)}),nS("ingredients",nw.ingredientsList)},nC=function(e){let t=nw.ingredientsList.findIndex(t=>t.id===e.dataset.id);nw.ingredientsList.splice(t,1),nS("ingredients",nw.ingredientsList)},nT=function(){nw.ingredientsList=[],nS("ingredients",nw.ingredientsList)},nR=function(e){nw.bookmarks.push(e),e.id===nw.recipe.id&&(nw.recipe.bookmarked=!0),nS("bookmarks",nw.bookmarks)},nW=function(e){let t=nw.bookmarks.findIndex(t=>t.id===e);nw.bookmarks.splice(t,1),e===nw.recipe.id&&(nw.recipe.bookmarked=!1),nS("bookmarks",nw.bookmarks)};!function(){let e=localStorage.getItem("bookmarks"),t=localStorage.getItem("ingredients"),n=localStorage.getItem("mealPlan");e&&(nw.bookmarks=JSON.parse(e)),t&&(nw.ingredientsList=JSON.parse(t)),n&&(nw.mealPlan=JSON.parse(n))}();const nN=async function(e,t){try{let n=t.map(e=>{let t=e.map(e=>e.value.trim());if(""===t[1]&&""===t[2])return;let[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}}).filter(e=>void 0!==e),r={title:e.title,publisher:e.publisher,source_url:e.sourceUrl,image_url:e.image,servings:+e.servings,cooking_time:+e.cookingTime,ingredients:n},i=await nv(`${ng}?key=${nm}`,r);nw.recipe=nk(i),nR(nw.recipe)}catch(e){throw e}};var nD={};nD=new URL("icons.ab2cc15d.svg",import.meta.url).toString();class nU{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e,t=!1){this._data=e;let n=this._generateMarkup(),r=Array.from((t?n:document.createRange().createContextualFragment(n)).querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let n=i[t];e.isEqualNode(n)||e.firstChild?.nodeValue.trim()===""||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach(e=>{n.setAttribute(e.name,e.value)})})}_clear(){this._parentElement.innerHTML=""}closeWindow(){this._window.classList.contains("hidden")||this._window.classList.add("hidden"),(!(window.innerWidth<750)||document.querySelector(".search-results").classList.contains("hidden"))&&this._overlay.classList.add("hidden")}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}addHandlerRender(e){window.addEventListener("load",e)}renderSpinner(){let e=`
      <div class="spinner">
              <svg>
                <use href="${b(nD)}#icon-loader"></use>
              </svg>
            </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`<div class="error">
      <div>
        <svg>
          <use href="${b(nD)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`<div class="message">
      <div>
        <svg>
          <use href="${b(nD)}#icon-smile"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var nz={};nz=new URL("shopping-cart-add.c5352031.svg",import.meta.url).toString(),(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,i=num.split(" ");if(i[0]&&(n=i[0]),i[1]&&(r=i[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var a=n.split("/");this.numerator=a[0],this.denominator=a[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(n=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},r=function(e,t){if(!t)return Math.round(e);var n=Math.pow(10,t);return Math.round(e*n)/n},function(){if(n(this.denominator)){var e=r(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(n(this.numerator)){var e=r(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(r.forEach(function(e){var t=i.indexOf(e);t>=0&&(n.push(e),i.splice(t,1))}),0===n.length)?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},v=Fraction;class nB extends nU{_parentElement=document.querySelector(".recipe__view");_errorMessage="We could not find that recipe. Please try another one!";_message="";_loading=!1;addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}_addHandlerMultiPurpose(e,t,n){this._parentElement.addEventListener("click",(function(r){return e(r,t,n)}).bind(this))}addHandlerUpdateServingsWrap(e){this._addHandlerMultiPurpose(this._addHandlerUpdateServings,e)}addHandlerAddIngredientsWrap(e,t){this._addHandlerMultiPurpose(this._addHandlerAddIngredients,e,t)}addHandlerAddBookmarkWrap(e){this._addHandlerMultiPurpose(this._addHandlerAddBookmark,e)}addHandlerNutritionDataWrap(e){this._addHandlerMultiPurpose(this._addHandlerNutritionData.bind(this),e)}_addHandlerUpdateServings(e,t){let n=e.target.closest(".btn--update-servings");if(!n)return;let{updateTo:r}=n.dataset;+r>0&&t(+r)}_addHandlerAddIngredients(e,t,n){n(),e.target.closest(".btn--ingredients")&&t()}_addHandlerAddBookmark(e,t){e.target.closest(".btn--bookmark")&&t()}nutrientDataNotLoading(){this._loading=!1}_addHandlerNutritionData(e,t){e.target.closest(".nutrition__btn")&&(this._loading||(this._loading=!0,document.querySelector(".arrow-down").classList.add("hide"),document.querySelector(".spin").classList.remove("hide"),t()))}removeButton(){this._parentElement.querySelector(".nutrition__btn").classList.add("hide")}showNutrientData(){this._parentElement.querySelector(".nutrition").classList.remove("hide")}nutrientDataIsHidden(){return this._parentElement.querySelector(".nutrition").classList.contains("hide")}_round(e,t){let n=Math.pow(10,t||0);return Math.round(e*n)/n}_generateMarkup(){return`<figure class="recipe__fig">
    <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${b(nD)}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${b(nD)}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
          <svg>
            <use href="${b(nD)}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
          <svg>
            <use href="${b(nD)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
    <svg>
      <use href="${b(nD)}#icon-user"></use>
    </svg>
  </div>
  <div>
    <button class="btn--round btn--ingredients">
      <svg class="">
        <use href="${b(nz)}#icon-shopping-add"></use>
      </svg>
    </button>
    </div>
    <div>
    <button class="btn--round btn--bookmark">
      <svg class="">
        <use href="${b(nD)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
      </svg>
    </button>
    </div>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
    ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
    </ul>
    
    <button class="btn--small nutrition__btn">
      <span>Nutrition detail</span>
      <svg class="arrow-down">
        <use href="${b(nD)}#icon-arrow-down"></use>
      </svg>
      <svg class="spin hide">
        <use href="${b(nD)}#icon-loader"></use>
      </svg>
    </button>

    <div class="nutrition hide">
    <h2 class="heading--2">Recipe Nutrition Detail</h2>
    <ul class="nutrition-data">
      <p>* &asymp;Amount Per Serving</p> 
        <li>
        <h4>Calories</h4>  
        <span>${this._round(this._data.nutrients.calories,1)}</span>
        </li>

        <li>
        <h4>Total Fat</h4>  
        <span>${this._round(this._data.nutrients.totalFat,1)} g</span>
        </li>

            <ul>
            <li>
            <span>Saturated Fat</span>  
            <span>${this._round(this._data.nutrients.saturatedFat,1)} g</span>
            </li>

            <li>
            <span>Other Fats(Trans, Monosaturated, Polyunsaturated)</span> 
            <span>${this._round(this._data.nutrients.totalFat-this._data.nutrients.saturatedFat,1)} g</span>
            </li>
            </ul>

        <li>
        <h4>Cholesterol</h4>  
        <span>${this._round(this._data.nutrients.cholesterol,1)} mg</span>
        </li>

        <li>
        <h4>Sodium</h4>  
        <span>${this._round(this._data.nutrients.sodium,1)} mg</span>
        </li>

        <li>
        <h4>Potassium</h4>  
        <span>${this._round(this._data.nutrients.potassium,1)} mg</span>
        </li>

        <li>
        <h4>Total Carbohydrates</h4>  
        <span>${this._round(this._data.nutrients.totalCarbohydrates,1)} g</span>
        </li>

            <ul>
            <li>
            <span>Dietary Fiber</span> 
            <span>${this._round(this._data.nutrients.dietaryFibers,1)} g</span>
            </li>

            <li>
            <span>Sugars</span>
            <span>${this._round(this._data.nutrients.sugars,1)} g</span>
            </li>
            </ul>

       <li>
       <h4>Protein</h4>  
       <span>${this._round(this._data.nutrients.protein,1)} g</span>
       </li>

       <li>
       <h4>Phosphorus</h4>  
       <span>${this._round(this._data.nutrients.phosphorus,1)} mg</span>
       </li>      
    </ul>
  </div>
</div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this._data.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${b(nD)}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>
    `}_generateMarkupIngredient(e){return`
        <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${b(nD)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${e.quantity?new v(e.quantity).toString():""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${e.unit}</span>
          ${e.description}
        </div>
      </li>
        `}}var nG=new nB;class nJ{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var nK=new nJ,nQ=new class extends nU{_generateMarkup(){let e=window.location.hash.slice(1);return`
    <li class="preview" data-id="${this._data.id}">
  <a class="preview__link ${this._data.id===e?"preview__link--active":""}"  href="#${this._data.id}">
  <figure class="preview__fig">
  <img src="${this._data.image}" alt=${this._data.title}/>
  </figure>
  <div class="preview__data">
  <h4 class="preview__title">${this._data.title}</h4>
  <p class="preview__publisher">${this._data.publisher}</p>
  <div class="preview__user-generated ${this._data.key?"":"hidden"}">
  <svg>
  <use href="${b(nD)}#icon-user"></use>
  </svg>
  </div>
</div>
  </a>
<div class="preview__day-select hidden">
  <button class="preview__day-select-wrapper week ${this._data.planSet.sunday?"active":""}">
    <span class="week" id="sunday">S</span>
 </button>
 <button class="preview__day-select-wrapper week ${this._data.planSet.monday?"active":""}">
    <span class="week" id="monday">M</span>
 </button>
 <button class="preview__day-select-wrapper week ${this._data.planSet.tuesday?"active":""}">
    <span class="week" id="tuesday">T</span>
 </button>
 <button class="preview__day-select-wrapper week ${this._data.planSet.wednesday?"active":""}">
    <span class="week" id="wednesday">W</span> 
 </button>
 <button class="preview__day-select-wrapper week ${this._data.planSet.thursday?"active":""}">
    <span class="week" id="thursday">T</span>
 </button>
 <button class="preview__day-select-wrapper week ${this._data.planSet.friday?"active":""}">
    <span class="week" id="friday">F</span>
 </button>
 <button class="preview__day-select-wrapper week ${this._data.planSet.saturday?"active":""}">
    <span class="week" id="saturday">S</span>
 </button>
</div>
</li>
  `}};class nY extends nU{_parentElement=document.querySelector(".results");_overlay=document.querySelector(".overlay");_menuButton=document.querySelector(".menu__btn");_btnClose=document.querySelector(".btn--close-search-results");_window=document.querySelector(".search-results");_errorMessage="No recipes found for your query! Please try again :)";_message="";constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}_toggleDaySelect(e){document.querySelectorAll(".preview").forEach(t=>{t===e.target.closest(".preview")&&t.querySelector(".preview__day-select").classList.toggle("hidden")})}previewToUpdate(e){let t=[...this._parentElement.querySelectorAll(".preview")].find(t=>t.dataset.id===e),n=t?.querySelector(".preview__day-select").classList.contains("hidden");return{elem:t,weekIsHidden:n}}addHandlerDaySelect(e,t){let n=e.target.closest(".preview"),r=n.dataset.id,i=n.querySelector(".preview__title").textContent,a=e.target.closest(".preview__day-select-wrapper"),o=a.firstElementChild.id;a.classList.toggle("active"),t({id:r,title:i},o,null)}addHandlerWeek(e){this._parentElement.addEventListener("click",(function(t){if(t.target.classList.contains("week")){this.addHandlerDaySelect(t,e);return}this._toggleDaySelect(t)}).bind(this))}_addHandlerShowWindow(){this._menuButton.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.closeWindow.bind(this)),this._overlay.addEventListener("click",this.closeWindow.bind(this))}_generateMarkup(){return this._data.map(e=>nQ.render(e,!1)).join("")}}var nV=new nY;class nX extends nU{_parentElement=document.querySelector(".sort__icon__container");_sortIcon=document.querySelector(".sort__icon");_sortForm=document.querySelector(".sort__form");_formSelect=document.querySelector(".form__input--sort");constructor(){super(),this._addHandlerShowFilter()}_toggleForm(){this._sortForm.classList.toggle("hidden")}renderIcon(){this._sortIcon.classList.remove("hidden"),this._formSelect.value="default"}_addHandlerShowFilter(){this._sortIcon.addEventListener("click",this._toggleForm.bind(this))}addHandlerChange(e){this._sortForm.addEventListener("change",(function(t){t.preventDefault();let n=this._formSelect.value;this._toggleForm(),e(n)}).bind(this))}}var nZ=new nX;class n0 extends nU{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let n=t.target.closest(".btn--inline");n&&e(+n.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.noOfResultsPerPage);return 1===e&&t>1?`
      ${Array(t).fill(0).map((t,n)=>`      
        <button data-goto="${n+1}" class="btn--inline pagination__btn--prev  ${n+1===e?"pagination__link--active":""}">
        <span>${n+1}</span>
      </button>`).join("")}


        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
        <svg class="search__icon">
          <use href="${b(nD)}#icon-arrow-right"></use>
        </svg>
      </button>`:e===t&&t>1?`
      <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${b(nD)}#icon-arrow-left"></use>
      </svg>
    </button>
    
    
    ${Array(t).fill(0).map((t,n)=>`      
      <button data-goto="${n+1}" class="btn--inline pagination__btn--prev ${n+1===e?"pagination__link--active":""}">
      <span>${n+1}</span>
    </button>`).join("")}`:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${b(nD)}#icon-arrow-left"></use>
        </svg>
      </button>

    ${Array(t).fill(0).map((t,n)=>`      
      <button data-goto="${n+1}" class="btn--inline pagination__btn--prev  ${n+1===e?"pagination__link--active":""}">
      <span>${n+1}</span>
    </button>`).join("")}
    
      <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
      <svg class="search__icon">
        <use href="${b(nD)}#icon-arrow-right"></use>
      </svg>
    </button>`:""}}var n1=new n0;class n2 extends nU{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";_generateMarkup(){return this._data.map(e=>nQ.render(e,!1)).join("")}}var n4=new n2;class n3 extends nU{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.closeWindow.bind(this)),this._overlay.addEventListener("click",this.closeWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this._parentElement)]),[...document.querySelectorAll(".ingredient")].map((e,t)=>[...document.querySelectorAll(`.ingredient-${t+1}`)]))}).bind(this))}_generateMarkup(){}}var n7=new n3;class n5 extends nU{_parentElement="";_errorMessage="All meals have been cleared for this day";_message="";_window=document.querySelector(".meal-plan");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--meal-plan");_mealPlanWindow=document.querySelector(".meal-plan-window");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._overlay.addEventListener("click",this.closeWindow.bind(this)),window.addEventListener("hashchange",this.closeWindow.bind(this))}addHandlerRemoveMeal(e){this._mealPlanWindow.addEventListener("click",(function(t){t.target.classList.contains("btn--delete-meal")&&e(null,t.target.closest("ul").classList[0].split("-")[0],t.target.closest(".preview-meal-plan").dataset.id,!0)}).bind(this))}setParentElement(e){this._parentElement=document.querySelector(`.${e}-list`)}_generateMarkup(){return this._data.map(this._generateMarkupIngredients).join("")}_generateMarkupIngredients(e){return`
    <li class="preview-meal-plan" data-id="${e.id}">
    <a
      class="preview-meal-plan__link"
      href="#${e.id}"
    >
      <span class="preview-meal-plan__title">${e.title}</span
      >
    </a>

    <div class="btn--delete-meal">
      <svg class="btn--delete-meal">
        <use
          class="btn--delete-meal"
          href="${b(nD)}#icon-delete"
        ></use>
      </svg>
    </div>
  </li>
    `}}var n8=new n5;class n9 extends nU{_parentElement=document.querySelector(".ingredients__list");_errorMessage="No saved ingredient yet. Find a nice recipe and cart it's ingredients :)";_message="";_ingredientsContainerList=document.querySelector(".recipe");_ingredientsList=document.querySelector(".ingredients");_btnOpen=document.querySelector(".nav__btn--ingredients");_btnClose=document.querySelector(".close-list__icon");_mainIngredientList=document.querySelector(".ingredients__list");_btnDeleteAll=document.querySelector(".delete__all--icon");constructor(){super(),this._addHandlerIngredients()}closeList(){this._ingredientsContainerList.classList.add("overflow"),this._ingredientsList.setAttribute("id","slide-out"),this._ingredientsList.classList.add("hidden")}_toggleList(){let e="slide-in"===this._ingredientsList.id;this._ingredientsContainerList.classList.toggle("overflow"),this._ingredientsList.setAttribute("id",e?"slide-out":"slide-in"),this._ingredientsList.classList.toggle("hidden")}_addHandlerIngredients(){this._btnOpen.addEventListener("click",this._toggleList.bind(this)),this._btnClose.addEventListener("click",this._toggleList.bind(this))}addHandlerRemoveIngredients(e){this._mainIngredientList.addEventListener("click",(function(t){document.querySelectorAll(".shopping__item").forEach(n=>{n.querySelectorAll(".remove__ingredient").forEach(r=>{r===t.target&&e(n,!0)})})}).bind(this))}addHandlerRemoveAllIngredients(e){this._btnDeleteAll.addEventListener("click",e)}_generateMarkup(){return this._data.map(this._generateMarkupIngredients).join("")}_generateMarkupIngredients(e){return`
    <li class="shopping__item" data-id="${e.id}">
    <div 
    <p class="ingredients__description--container">
    <svg>
    <use href="${b(nD)}#icon-dot"></use>
</svg>
      <p class="ingredients__description">
                ${e.quantity?new v(e.quantity).toString():""} ${e.unit} ${e.description}
     </p>
     </div>
       <div>
          <svg class="remove__ingredient">
              <use class="remove__ingredient" href="${b(nD)}#icon-minus-circle"></use>
          </svg>
      </div>
    </li>
    `}}var n6=new n9;class re extends nU{_parentElement=document.querySelector(".add-Field__container");_addFieldIcon=document.querySelector(".add-Field__icon");_ingredients=document.querySelectorAll(".ingredient");_addFieldCount=this._ingredients.length;constructor(){super(),this._addHandlerClick()}_addHandlerClick(){this._addFieldIcon.addEventListener("click",this._addFieldLimit.bind(this))}_hideAddIcon(){this._parentElement.classList.add("hide")}_addFieldLimit(){this._addFieldCount++;let e=this._generateMarkup();if(this._parentElement.insertAdjacentHTML("beforebegin",e),10===this._addFieldCount){this._hideAddIcon();return}}_generateMarkup(){return`
    <label class="ingredient" >Ingredient ${this._addFieldCount}</label>
    <input 
     type="number" 
     class="ingredient-${this._addFieldCount}" 
     placeholder="Quantity" 
    />
    <input 
     type="text" 
     class="ingredient-${this._addFieldCount}" 
     placeholder="Unit" 
    />
    <input
      type="text"
      class="ingredient-${this._addFieldCount}"
      placeholder="Description"
    />`}}new re;var rt=new class extends nU{_parentElement="";_weekIsHidden="";_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";setParentElement(e){this._parentElement=e}weekIsHidden(e){this._weekIsHidden=e}_generateMarkup(){let e=document.createDocumentFragment();e.appendChild(this._generateMarkupSec("preview__link"));let t=this._generateMarkupSec("preview__day-select");return this._weekIsHidden||t.classList.remove("hidden"),e.appendChild(t),e}_generateMarkupSec(e){return document.createRange().createContextualFragment(nQ.render(this._data,!1)).querySelector(`.${e}`)}};class rn extends nU{_parentElement=document.querySelector(".recipe__view");_nutrientDataIsHidden="";_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";setParentElement(e){this._parentElement=e}nutrientDataIsHidden(e){this._nutrientDataIsHidden=e}_generateMarkup(){let e=document.createRange().createContextualFragment(nG.render(this._data,!1));return this._nutrientDataIsHidden||(e.querySelector(".nutrition__btn").classList.add("hide"),e.querySelector(".nutrition").classList.remove("hide")),e}}var rr=new rn;const ri=async function(){try{let e=window.location.hash.slice(1);if(!e)return;nG.renderSpinner(),n6.closeList(),nV.update(0!==nw.search.resultsRecipes.length?nw.search.resultsRecipes:nw.search.resultsPerPage),n4.update(nw.bookmarks),await nE(e),nG.render(nw.recipe)}catch(e){nG.renderError()}},ra=async function(){try{nV.renderSpinner();let e=nK.getQuery();if(!e)return;window.innerWidth<900&&nV.toggleWindow(),await nF(e),nV.render(nH()),nZ.renderIcon(),n1.render(nw.search)}catch(e){nV.renderError("Search couldn't complete! Kindly check your connection and try again :)")}},ro=async function(){try{await nP(),nG.nutrientDataNotLoading(),nG.update(nw.recipe),nG.removeButton(),nG.showNutrientData()}catch(e){nV.renderError("Search couldn't complete! Kindly check your connection and try again :)")}},rs=async function(e){try{nV.renderSpinner(),await n$(nH().map(e=>e.id)),nM(nw.search.resultsRecipes,e),nV.render(nw.search.resultsRecipes)}catch(e){nG.renderError()}},rc=function(e,t,n,r=!1){r||(nx(e.id).planSet[t]?nj(e.id,t):nq(e,t)),r&&(nj(n,t),(nw.search.resultsPerPage.length||nw.search.resultsRecipes.length)&&nV.previewToUpdate(n).elem&&(rt.setParentElement(nV.previewToUpdate(n).elem),rt.weekIsHidden(nV.previewToUpdate(n).weekIsHidden),nx(n),rt.update(nx(n),!0))),n8.setParentElement(t),n8.render(nw.mealPlan[t])},rd=function(e,t=!1){t?nC(e):nA(nw.recipe.ingredients),n6.render(nw.ingredientsList)},rl=async function(e,t){try{n7.renderSpinner(),await nN(e,t),nG.render(nw.recipe),n7.renderMessage(),n4.render(nw.bookmarks),window.history.pushState(null,"",`#${nw.recipe.id}`),setTimeout(function(){n7.toggleWindow()},2500)}catch(e){n7.renderError(e.message)}};n6.addHandlerRender(function(){nw.ingredientsList.length&&n6.render(nw.ingredientsList)}),n8.addHandlerRender(function(){Object.keys(nw.mealPlan).forEach(e=>{nw.mealPlan[e].length&&(n8.setParentElement(e),n8.render(nw.mealPlan[e]))})}),n4.addHandlerRender(function(){n4.render(nw.bookmarks)}),nG.addHandlerRender(ri),nG.addHandlerUpdateServingsWrap(function(e){nO(e),rr.nutrientDataIsHidden(nG.nutrientDataIsHidden()),rr.update(nw.recipe,!0)}),nG.addHandlerAddIngredientsWrap(rd,function(){n6.closeList()}),nG.addHandlerAddBookmarkWrap(function(){nw.recipe.bookmarked?nW(nw.recipe.id):nR(nw.recipe),nG.update(nw.recipe),n4.render(nw.bookmarks)}),nG.addHandlerNutritionDataWrap(ro),n6.addHandlerRemoveIngredients(rd),n6.addHandlerRemoveAllIngredients(function(){nw.ingredientsList.length&&(nT(),n6.render(nw.ingredientsList))}),nV.addHandlerWeek(rc),n8.addHandlerRemoveMeal(rc),nK.addHandlerSearch(ra),nZ.addHandlerChange(rs),n1.addHandlerClick(function(e){nV.render(nH(e)),nM("","default"),nZ.renderIcon(),n1.render(nw.search)}),n7.addHandlerUpload(rl);
//# sourceMappingURL=index.9dab7e8b.js.map
