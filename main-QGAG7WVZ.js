import"./chunk-QRLX3UNX.js";import{a as $,c as P2}from"./chunk-EUUAAR3L.js";import{a as R2,c as w2,h as q2}from"./chunk-6KRU7EG5.js";import{a as K,c as V2,d as x2,e as g2,f as N2,g as S2,h as y2,i as A2,j as k2,n as x}from"./chunk-66XNF6FV.js";import{$ as a2,$a as h1,B as R,D as w,Da as s1,Eb as k,Fa as m1,Fb as B,H as K1,Ha as m,Ia as l2,La as f2,M as t1,N as $1,O as U,Pa as s2,Rb as b1,S as Y1,T as J1,U as Q1,Ub as C2,Va as q,W as X1,Wa as m2,Xa as u,Y as c2,Ya as _,Z as e2,_ as V,_a as h2,a as I1,ab as z1,bb as v1,c as j,ca as L,cb as p,cc as u2,db as v,eb as d,f as S,fa as o,fc as M2,g as N,gc as d2,ha as C,ia as f,ib as z2,ic as W,j as D1,ja as o1,ka as l1,kb as p1,kc as b2,l as j1,lb as A,lc as H2,m as G1,ma as y,mc as L2,p as U1,pa as f1,q as B1,qb as C1,rb as u1,sb as M1,t as G,ta as i2,tb as v2,u as W1,ua as r2,ub as p2,va as n2,wa as t2,wb as O,yb as d1,za as o2}from"./chunk-SN7ESOYK.js";import{a as l,b as M}from"./chunk-35PI25VP.js";var _2=[{path:x.HOME,title:"Home",loadChildren:()=>import("./chunk-ZCR7NNEQ.js").then(c=>c.homeRoutes)},{path:x.CHARACTERS,title:"Characters",loadChildren:()=>import("./chunk-T4RL5MHS.js").then(c=>c.charactersRoutes)},{path:x.EPISODES,title:"Episodes",loadChildren:()=>import("./chunk-QL5ELLYN.js").then(c=>c.episodesRoutes)},{path:x.LOCATIONS,title:"Locations",loadChildren:()=>import("./chunk-JBX46PSH.js").then(c=>c.locationsRoutes)},{path:x.FAVOURITES,title:"Favourites",loadChildren:()=>import("./chunk-5444CEA7.js").then(c=>c.favouritesRoutes)},{path:"",redirectTo:x.HOME,pathMatch:"full"},{path:"**",loadComponent:()=>import("./chunk-UOTPU4BS.js").then(c=>c.PageNotFoundComponent)}];var O2=(c,e)=>{let r=`${k2}/${c.url}`,a=c.clone({url:r});return e(a)};var N3=new W(()=>({})),S3={skipRetry:!1,retryCount:2,delay:1e3,retryCodes:[429,500,502,504]},E2=(c,e)=>{let{skipRetry:r,retryCount:a,delay:i,retryCodes:n}=l(l({},S3),c.context.get(N3));return r?e(c):e(c).pipe(J1({count:a,delay:t=>n.includes(t.status)?R(i):B1(()=>t)}))};var x1={};function k3(c,e){if(x1[c]=(x1[c]||0)+1,typeof e=="function")return H1(c,(...a)=>M(l({},e(...a)),{type:c}));switch(e?e._as:"empty"){case"empty":return H1(c,()=>({type:c}));case"props":return H1(c,a=>M(l({},a),{type:c}));default:throw new Error("Unexpected config.")}}function P3(){return{_as:"props",_p:void 0}}function H1(c,e){return Object.defineProperty(e,"type",{value:c,writable:!1})}function A1(c){return c.charAt(0).toUpperCase()+c.substring(1)}function R3(c){return c.charAt(0).toLowerCase()+c.substring(1)}function k1(c){let{source:e,events:r}=c;return Object.keys(r).reduce((a,i)=>M(l({},a),{[w3(i)]:k3(q3(e,i),r[i])}),{})}function F(){return P3()}function w3(c){return c.trim().split(" ").map((e,r)=>r===0?R3(e):A1(e)).join("")}function q3(c,e){return`[${c}] ${e}`}var c3="@ngrx/store/init",P=(()=>{let e=class e extends N{constructor(){super({type:c3})}next(a){if(typeof a=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof a>"u")throw new TypeError("Actions must be objects");if(typeof a.type>"u")throw new TypeError("Actions must have a type property");super.next(a)}complete(){}ngOnDestroy(){super.complete()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=L({token:e,factory:e.\u0275fac});let c=e;return c})(),_3=[P],e3=new o("@ngrx/store Internal Root Guard"),Z2=new o("@ngrx/store Internal Initial State"),P1=new o("@ngrx/store Initial State"),a3=new o("@ngrx/store Reducer Factory"),F2=new o("@ngrx/store Internal Reducer Factory Provider"),i3=new o("@ngrx/store Initial Reducers"),L1=new o("@ngrx/store Internal Initial Reducers"),T2=new o("@ngrx/store Store Features"),I2=new o("@ngrx/store Internal Store Reducers"),V1=new o("@ngrx/store Internal Feature Reducers"),D2=new o("@ngrx/store Internal Feature Configs"),r3=new o("@ngrx/store Internal Store Features"),j2=new o("@ngrx/store Internal Feature Reducers Token"),n3=new o("@ngrx/store Feature Reducers"),G2=new o("@ngrx/store User Provided Meta Reducers"),Y=new o("@ngrx/store Meta Reducers"),U2=new o("@ngrx/store Internal Resolved Meta Reducers"),B2=new o("@ngrx/store User Runtime Checks Config"),W2=new o("@ngrx/store Internal User Runtime Checks Config"),E=new o("@ngrx/store Internal Runtime Checks"),R1=new o("@ngrx/store Check if Action types are unique"),g1=new o("@ngrx/store Root Store Provider"),K2=new o("@ngrx/store Feature State Provider");function w1(c,e={}){let r=Object.keys(c),a={};for(let n=0;n<r.length;n++){let t=r[n];typeof c[t]=="function"&&(a[t]=c[t])}let i=Object.keys(a);return function(t,h){t=t===void 0?e:t;let z=!1,b={};for(let s=0;s<i.length;s++){let H=i[s],n1=a[H],F1=t[H],T1=n1(F1,h);b[H]=T1,z=z||T1!==F1}return z?b:t}}function O3(c,e){return Object.keys(c).filter(r=>r!==e).reduce((r,a)=>Object.assign(r,{[a]:c[a]}),{})}function t3(...c){return function(e){if(c.length===0)return e;let r=c[c.length-1];return c.slice(0,-1).reduceRight((i,n)=>n(i),r(e))}}function o3(c,e){return Array.isArray(e)&&e.length>0&&(c=t3.apply(null,[...e,c])),(r,a)=>{let i=c(r);return(n,t)=>(n=n===void 0?a:n,i(n,t))}}function E3(c){let e=Array.isArray(c)&&c.length>0?t3(...c):r=>r;return(r,a)=>(r=e(r),(i,n)=>(i=i===void 0?a:i,r(i,n)))}var Z=class extends j{},J=class extends P{},Z3="@ngrx/store/update-reducers",Q=(()=>{let e=class e extends N{get currentReducers(){return this.reducers}constructor(a,i,n,t){super(t(n,i)),this.dispatcher=a,this.initialState=i,this.reducers=n,this.reducerFactory=t}addFeature(a){this.addFeatures([a])}addFeatures(a){let i=a.reduce((n,{reducers:t,reducerFactory:h,metaReducers:z,initialState:b,key:s})=>{let H=typeof t=="function"?E3(z)(t,b):o3(h,z)(t,b);return n[s]=H,n},{});this.addReducers(i)}removeFeature(a){this.removeFeatures([a])}removeFeatures(a){this.removeReducers(a.map(i=>i.key))}addReducer(a,i){this.addReducers({[a]:i})}addReducers(a){this.reducers=l(l({},this.reducers),a),this.updateReducers(Object.keys(a))}removeReducer(a){this.removeReducers([a])}removeReducers(a){a.forEach(i=>{this.reducers=O3(this.reducers,i)}),this.updateReducers(a)}updateReducers(a){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:Z3,features:a})}ngOnDestroy(){this.complete()}};e.\u0275fac=function(i){return new(i||e)(C(J),C(P1),C(i3),C(a3))},e.\u0275prov=L({token:e,factory:e.\u0275fac});let c=e;return c})(),F3=[Q,{provide:Z,useExisting:Q},{provide:J,useExisting:P}],q1=(()=>{let e=class e extends S{ngOnDestroy(){this.complete()}};e.\u0275fac=(()=>{let a;return function(n){return(a||(a=t2(e)))(n||e)}})(),e.\u0275prov=L({token:e,factory:e.\u0275fac});let c=e;return c})(),T3=[q1],X=class extends j{},$2=(()=>{let e=class e extends N{constructor(a,i,n,t){super(t);let z=a.pipe(G1(D1)).pipe(a2(i)),b={state:t},s=z.pipe(Q1(I3,b));this.stateSubscription=s.subscribe(({state:H,action:n1})=>{this.next(H),n.next(n1)}),this.state=P2(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}};e.INIT=c3,e.\u0275fac=function(i){return new(i||e)(C(P),C(Z),C(q1),C(P1))},e.\u0275prov=L({token:e,factory:e.\u0275fac});let c=e;return c})();function I3(c={state:void 0},[e,r]){let{state:a}=c;return{state:r(a,e),action:e}}var D3=[$2,{provide:X,useExisting:$2}],g=(()=>{let e=class e extends j{constructor(a,i,n){super(),this.actionsObserver=i,this.reducerManager=n,this.source=a,this.state=a.state}select(a,...i){return G3.call(null,a,...i)(this)}selectSignal(a,i){return C2(()=>a(this.state()),i)}lift(a){let i=new e(this,this.actionsObserver,this.reducerManager);return i.operator=a,i}dispatch(a){this.actionsObserver.next(a)}next(a){this.actionsObserver.next(a)}error(a){this.actionsObserver.error(a)}complete(){this.actionsObserver.complete()}addReducer(a,i){this.reducerManager.addReducer(a,i)}removeReducer(a){this.reducerManager.removeReducer(a)}};e.\u0275fac=function(i){return new(i||e)(C(X),C(P),C(Q))},e.\u0275prov=L({token:e,factory:e.\u0275fac});let c=e;return c})(),j3=[g];function G3(c,e,...r){return function(i){let n;if(typeof c=="string"){let t=[e,...r].filter(Boolean);n=i.pipe(Y1(c,...t))}else if(typeof c=="function")n=i.pipe(G(t=>c(t,e)));else throw new TypeError(`Unexpected type '${typeof c}' in select operator, expected 'string' or 'function'`);return n.pipe($1())}}var _1="https://ngrx.io/guide/store/configuration/runtime-checks";function Y2(c){return c===void 0}function J2(c){return c===null}function l3(c){return Array.isArray(c)}function U3(c){return typeof c=="string"}function B3(c){return typeof c=="boolean"}function W3(c){return typeof c=="number"}function f3(c){return typeof c=="object"&&c!==null}function K3(c){return f3(c)&&!l3(c)}function s3(c){if(!K3(c))return!1;let e=Object.getPrototypeOf(c);return e===Object.prototype||e===null}function N1(c){return typeof c=="function"}function $3(c){return N1(c)&&c.hasOwnProperty("\u0275cmp")}function Y3(c,e){return Object.prototype.hasOwnProperty.call(c,e)}var J3=!1;function Q3(){return J3}function Q2(c,e){return c===e}function X3(c,e,r){for(let a=0;a<c.length;a++)if(!r(c[a],e[a]))return!0;return!1}function m3(c,e=Q2,r=Q2){let a=null,i=null,n;function t(){a=null,i=null}function h(s=void 0){n={result:s}}function z(){n=void 0}function b(){if(n!==void 0)return n.result;if(!a)return i=c.apply(null,arguments),a=arguments,i;if(!X3(arguments,a,e))return i;let s=c.apply(null,arguments);return a=arguments,r(i,s)?i:(i=s,s)}return{memoized:b,reset:t,setResult:h,clearResult:z}}function e1(...c){return e4(m3)(...c)}function c4(c,e,r,a){if(r===void 0){let n=e.map(t=>t(c));return a.memoized.apply(null,n)}let i=e.map(n=>n(c,r));return a.memoized.apply(null,[...i,r])}function e4(c,e={stateFn:c4}){return function(...r){let a=r;if(Array.isArray(a[0])){let[s,...H]=a;a=[...s,...H]}else a.length===1&&i4(a[0])&&(a=r4(a[0]));let i=a.slice(0,a.length-1),n=a[a.length-1],t=i.filter(s=>s.release&&typeof s.release=="function"),h=c(function(...s){return n.apply(null,s)}),z=m3(function(s,H){return e.stateFn.apply(null,[s,i,H,h])});function b(){z.reset(),h.reset(),t.forEach(s=>s.release())}return Object.assign(z.memoized,{release:b,projector:h.memoized,setResult:z.setResult,clearResult:z.clearResult})}}function a4(c){return e1(e=>{let r=e[c];return!Q3()&&b1()&&!(c in e)&&console.warn(`@ngrx/store: The feature name "${c}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${c}', ...) or StoreModule.forFeature('${c}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),r},e=>e)}function i4(c){return!!c&&typeof c=="object"&&Object.values(c).every(e=>typeof e=="function")}function r4(c){let e=Object.values(c),r=Object.keys(c),a=(...i)=>r.reduce((n,t,h)=>M(l({},n),{[t]:i[h]}),{});return[...e,a]}function h3(c){let{name:e,reducer:r,extraSelectors:a}=c,i=a4(e),n=n4(i,r),t=l({[`select${A1(e)}State`]:i},n),h=a?a(t):{};return l(l({name:e,reducer:r},t),h)}function n4(c,e){let r=t4(e);return(s3(r)?Object.keys(r):[]).reduce((i,n)=>M(l({},i),{[`select${A1(n)}`]:e1(c,t=>t?.[n])}),{})}function t4(c){return c(void 0,{type:"@ngrx/feature/init"})}function o4(c){return c instanceof o?f(c):c}function l4(c,e){return e.map((r,a)=>{if(c[a]instanceof o){let i=f(c[a]);return{key:r.key,reducerFactory:i.reducerFactory?i.reducerFactory:w1,metaReducers:i.metaReducers?i.metaReducers:[],initialState:i.initialState}}return r})}function f4(c){return c.map(e=>e instanceof o?f(e):e)}function z3(c){return typeof c=="function"?c():c}function s4(c,e){return c.concat(e)}function m4(){if(f(g,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function h4(c,e){return function(r,a){let i=e.action(a)?S1(a):a,n=c(r,i);return e.state()?S1(n):n}}function S1(c){Object.freeze(c);let e=N1(c);return Object.getOwnPropertyNames(c).forEach(r=>{if(!r.startsWith("\u0275")&&Y3(c,r)&&(!e||r!=="caller"&&r!=="callee"&&r!=="arguments")){let a=c[r];(f3(a)||N1(a))&&!Object.isFrozen(a)&&S1(a)}}),c}function z4(c,e){return function(r,a){if(e.action(a)){let n=y1(a);X2(n,"action")}let i=c(r,a);if(e.state()){let n=y1(i);X2(n,"state")}return i}}function y1(c,e=[]){return(Y2(c)||J2(c))&&e.length===0?{path:["root"],value:c}:Object.keys(c).reduce((a,i)=>{if(a)return a;let n=c[i];return $3(n)?a:Y2(n)||J2(n)||W3(n)||B3(n)||U3(n)||l3(n)?!1:s3(n)?y1(n,[...e,i]):{path:[...e,i],value:n}},!1)}function X2(c,e){if(c===!1)return;let r=c.path.join("."),a=new Error(`Detected unserializable ${e} at "${r}". ${_1}#strict${e}serializability`);throw a.value=c.value,a.unserializablePath=r,a}function v4(c,e){return function(r,a){if(e.action(a)&&!f2.isInAngularZone())throw new Error(`Action '${a.type}' running outside NgZone. ${_1}#strictactionwithinngzone`);return c(r,a)}}function p4(c){return b1()?l({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},c):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function C4({strictActionSerializability:c,strictStateSerializability:e}){return r=>c||e?z4(r,{action:a=>c&&!O1(a),state:()=>e}):r}function u4({strictActionImmutability:c,strictStateImmutability:e}){return r=>c||e?h4(r,{action:a=>c&&!O1(a),state:()=>e}):r}function O1(c){return c.type.startsWith("@ngrx")}function M4({strictActionWithinNgZone:c}){return e=>c?v4(e,{action:r=>c&&!O1(r)}):e}function d4(c){return[{provide:W2,useValue:c},{provide:B2,useFactory:b4,deps:[W2]},{provide:E,deps:[B2],useFactory:p4},{provide:Y,multi:!0,deps:[E],useFactory:u4},{provide:Y,multi:!0,deps:[E],useFactory:C4},{provide:Y,multi:!0,deps:[E],useFactory:M4}]}function v3(){return[{provide:R1,multi:!0,deps:[E],useFactory:H4}]}function b4(c){return c}function H4(c){if(!c.strictActionTypeUniqueness)return;let e=Object.entries(x1).filter(([,r])=>r>1).map(([r])=>r);if(e.length)throw new Error(`Action types are registered more than once, ${e.map(r=>`"${r}"`).join(", ")}. ${_1}#strictactiontypeuniqueness`)}function p3(c,e,r={}){return f1([...S4(c,e,r),N4])}function L4(c={},e={}){return[{provide:e3,useFactory:m4},{provide:Z2,useValue:e.initialState},{provide:P1,useFactory:z3,deps:[Z2]},{provide:L1,useValue:c},{provide:I2,useExisting:c instanceof o?c:L1},{provide:i3,deps:[L1,[new o1(I2)]],useFactory:o4},{provide:G2,useValue:e.metaReducers?e.metaReducers:[]},{provide:U2,deps:[Y,G2],useFactory:s4},{provide:F2,useValue:e.reducerFactory?e.reducerFactory:w1},{provide:a3,deps:[F2,U2],useFactory:o3},_3,F3,T3,D3,j3,d4(e.runtimeChecks),v3()]}function V4(){f(P),f(Z),f(q1),f(g),f(e3,{optional:!0}),f(R1,{optional:!0})}var x4=[{provide:g1,useFactory:V4},{provide:l1,multi:!0,useFactory(){return()=>f(g1)}}];function C3(c,e){return f1([...L4(c,e),x4])}function g4(){f(g1);let c=f(r3),e=f(n3),r=f(Q);f(R1,{optional:!0});let a=c.map((i,n)=>{let h=e.shift()[n];return M(l({},i),{reducers:h,initialState:z3(i.initialState)})});r.addFeatures(a)}var N4=[{provide:K2,useFactory:g4},{provide:l1,multi:!0,useFactory(){return()=>f(K2)}}];function S4(c,e,r={}){return[{provide:D2,multi:!0,useValue:c instanceof Object?{}:r},{provide:T2,multi:!0,useValue:{key:c instanceof Object?c.name:c,reducerFactory:!(r instanceof o)&&r.reducerFactory?r.reducerFactory:w1,metaReducers:!(r instanceof o)&&r.metaReducers?r.metaReducers:[],initialState:!(r instanceof o)&&r.initialState?r.initialState:void 0}},{provide:r3,deps:[D2,T2],useFactory:l4},{provide:V1,multi:!0,useValue:c instanceof Object?c.reducer:e},{provide:j2,multi:!0,useExisting:e instanceof o?e:V1},{provide:n3,multi:!0,deps:[V1,[new o1(j2)]],useFactory:f4},v3()]}function T(...c){let e=c.pop(),r=c.map(a=>a.type);return{reducer:e,types:r}}function u3(c,...e){let r=new Map;for(let a of e)for(let i of a.types){let n=r.get(i);if(n){let t=(h,z)=>a.reducer(n(h,z),z);r.set(i,t)}else r.set(i,a.reducer)}return function(a=c,i){let n=r.get(i.type);return n?n(a,i):a}}var I=k1({source:"Http Request",events:{"Loading Start":F(),"Loading End":F()}}),D=k1({source:"Lazy Navigation",events:{"Lazy Module Loading Start":F(),"Lazy Module Loading End":F()}}),y4={httpRequestLoading:!1,lazyNavigationLoading:!1},A4=u3(y4,T(I.loadingStart,c=>M(l({},c),{httpRequestLoading:!0})),T(I.loadingEnd,c=>M(l({},c),{httpRequestLoading:!1})),T(D.lazyModuleLoadingStart,c=>M(l({},c),{lazyNavigationLoading:!0})),T(D.lazyModuleLoadingEnd,c=>M(l({},c),{lazyNavigationLoading:!1}))),a1=h3({name:"app",reducer:A4,extraSelectors:({selectHttpRequestLoading:c,selectLazyNavigationLoading:e})=>({selectHttpOrLazyNavigationLoading:e1(c,e,(r,a)=>r||a)})});var k4=new W(()=>!1),i1=0,M3=(c,e)=>{let r=f(g);return c.context.get(k4)?e(c):(i1++,i1===1&&r.dispatch(I.loadingStart()),e(c).pipe(U(()=>{i1--,i1===0&&r.dispatch(I.loadingEnd())})))};var d3={production:!0,providers:[]};var b3={providers:[S2(_2,y2(),A2()),b2(H2([O2,M3,E2])),C3(),p3(a1),d3.providers]};var H3={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};var E1=c=>[c];function P4(c,e){if(c&1&&(p(0,"li")(1,"a",12),O(2),v()()),c&2){let r=e.$implicit;m(),u("routerLink",B(3,E1,r))("routerLinkActive","before:!w-full"),m(),d1(" ",r," ")}}function R4(c,e){if(c&1){let r=z2();p(0,"li")(1,"a",16),p1("click",function(){r2(r);let i=A(2);return n2(i.toggleMobileMenu())}),O(2),v()()}if(c&2){let r=e.$implicit;m(),u("routerLink",B(3,E1,r))("routerLinkActive","before:!w-full"),m(),d1(" ",r," ")}}function w4(c,e){if(c&1&&(p(0,"div",11)(1,"div",1)(2,"div",13)(3,"ul",14),z1(4,R4,3,5,"li",null,h1),v(),p(6,"a",15)(7,"span",7),d(8,"fa-icon",8),O(9," NKisiura "),v()()()()()),c&2){let r=A();m(4),v1(r.headerLinks),m(2),u("href",r.githubLink,m1),m(2),u("icon",r.githubIcon)}}var L3=(()=>{let e=class e{constructor(){this.githubLink="https://github.com/NKisiura",this.githubIcon=H3,this.barsIcon=w2,this.closeIcon=q2,this.APP_ROUTES=x,this.headerLinks=[this.APP_ROUTES.CHARACTERS,this.APP_ROUTES.EPISODES,this.APP_ROUTES.LOCATIONS,this.APP_ROUTES.FAVOURITES],this.isMobileMenuOpen=!1}toggleMobileMenu(){this.isMobileMenuOpen=!this.isMobileMenuOpen}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=y({type:e,selectors:[["app-header"]],standalone:!0,features:[k],decls:15,vars:7,consts:[[1,"relative","flex","h-header-height","items-center","bg-app-background","bg-app-background-pattern","bg-repeat","font-primary","text-primary"],[1,"container"],[1,"flex","items-center","justify-between"],[3,"routerLink"],["ngSrc","assets/logo.svg","priority","","width","164","height","50","alt","Rick And Morty Logo"],[1,"hidden","gap-16","lg:flex"],["target","_blank",1,"relative","hidden","before:absolute","before:bottom-0","before:h-0.5","before:w-0","before:rounded-xl","before:bg-accent","before:transition-[width]","before:content-['']","before:hover:w-full","lg:inline",3,"href"],[1,"flex","gap-1"],[3,"icon"],["type","button",1,"lg:hidden",3,"click"],["size","2xl",3,"icon"],[1,"absolute","top-full","w-full","bg-app-background","bg-app-background-pattern","bg-repeat","py-4","lg:hidden"],[1,"relative","capitalize","before:absolute","before:bottom-0","before:h-0.5","before:w-0","before:rounded-xl","before:bg-accent","before:transition-[width]","before:content-['']","before:hover:w-full",3,"routerLink","routerLinkActive"],[1,"flex","flex-col","items-start","gap-8"],[1,"flex","flex-col","gap-4"],["target","_blank",1,"relative","before:absolute","before:bottom-0","before:h-0.5","before:w-0","before:rounded-xl","before:bg-accent","before:transition-[width]","before:content-['']","before:hover:w-full",3,"href"],[1,"relative","capitalize","before:absolute","before:bottom-0","before:h-0.5","before:w-0","before:rounded-xl","before:bg-accent","before:transition-[width]","before:content-['']","before:hover:w-full",3,"click","routerLink","routerLinkActive"]],template:function(i,n){i&1&&(p(0,"header",0)(1,"div",1)(2,"div",2)(3,"a",3),d(4,"img",4),v(),p(5,"ul",5),z1(6,P4,3,5,"li",null,h1),v(),p(8,"a",6)(9,"span",7),d(10,"fa-icon",8),O(11," NKisiura "),v()(),p(12,"button",9),p1("click",function(){return n.toggleMobileMenu()}),d(13,"fa-icon",10),v()()(),q(14,w4,10,2,"div",11),v()),i&2&&(m(3),u("routerLink",B(5,E1,n.APP_ROUTES.HOME)),m(3),v1(n.headerLinks),m(2),u("href",n.githubLink,m1),m(2),u("icon",n.githubIcon),m(3),u("icon",n.isMobileMenuOpen?n.closeIcon:n.barsIcon),m(),h2(14,n.isMobileMenuOpen?14:-1))},dependencies:[g2,N2,d2,R2],changeDetection:0});let c=e;return c})();var q4=["progressbar"],_4=["progressbarWrapper"];function O4(c,e){if(c&1&&d(0,"div",7),c&2){let r=A();_("box-shadow","0 0 10px "+r.color+", 0 0 5px "+r.color)}}function E4(c,e){if(c&1&&(p(0,"div",8),d(1,"div",9),v()),c&2){let r=A();m(),_("border-top-color",r.color)("border-left-color",r.color)}}var Z1=class{get snapshot(){return this._state.value}get isStarted(){return this.snapshot.active}constructor(e,r){this._onDestroyCallback=r,this._started=new S,this.started=this._started.pipe(w(()=>!this.isStarted)),this._completed=new S,this.completed=this._completed.pipe(w(()=>this.isStarted)),this._trickling=new S,this._worker=I1.EMPTY,this._state=new N({active:!1,value:0}),this._config=new N(e),this.state=this._state.asObservable(),this.config=this._config.asObservable(),this._worker=W1([this._trickling,this._config]).pipe(K1(([a,i])=>R(a?i.debounceTime:0)),c2(([a,i])=>a?this.onTrickling(i):this.onComplete(i))).subscribe()}start(){this._started.next(),this._trickling.next(!0)}complete(){this._trickling.next(!1)}inc(e){let r=this.snapshot.value;this.isStarted?(typeof e!="number"&&(e=this._config.value.trickleFunc(r)),this.set(r+e)):this.start()}set(e){this.setState({value:this.clamp(e),active:!0})}setConfig(e){this._config.next(l(l({},this._config.value),e))}destroy(){this._worker.unsubscribe(),this._trickling.complete(),this._state.complete(),this._config.complete(),this._started.complete(),this._completed.complete(),this._onDestroyCallback()}setState(e){this._state.next(l(l({},this.snapshot),e))}clamp(e){return Math.max(this._config.value.min,Math.min(this._config.value.max,e))}onTrickling(e){return this.isStarted||this.set(this._config.value.min),R(0,e.trickleSpeed).pipe(V(()=>this.inc()))}onComplete(e){return this._completed.next(),this.isStarted?U1({}).pipe(V(()=>this.setState({value:100})),t1(e.speed*1.7),V(()=>this.setState({active:!1})),t1(e.speed),U(()=>this.setState({value:0})),e2(this._started)):j1}},Z4=new o("ngProgressConfig"),V3={min:8,max:100,speed:200,debounceTime:0,trickleSpeed:300,fixed:!0,meteor:!0,thick:!1,spinner:!0,ease:"linear",color:"#1B95E0",direction:"ltr+",spinnerPosition:"right",trickleFunc:c=>c>=0&&c<20?10:c>=20&&c<50?4:c>=50&&c<80?2:c>=80&&c<99?.5:0},F4=(()=>{let e=class e{constructor(a){this._instances=new Map,this.config=a?l(l({},V3),a):V3}ref(a="root",i){if(this._instances.has(a)){let n=this._instances.get(a);return i&&n.setConfig(l(l({},this.config),i)),n}else{let n=new Z1(l(l({},this.config),i),this.deleteInstance(a));return this._instances.set(a,n).get(a)}}destroyAll(){this._instances.forEach(a=>a.destroy())}deleteInstance(a){return()=>{this._instances.delete(a)}}};e.\u0275fac=function(i){return new(i||e)(C(Z4,8))},e.\u0275prov=L({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})(),r1=(()=>{let e=class e{get isStarted(){return this.progressRef?.isStarted}constructor(a){this._ngProgress=a,this.id="root",this.min=this._ngProgress.config.min,this.max=this._ngProgress.config.max,this.ease=this._ngProgress.config.ease,this.color=this._ngProgress.config.color,this.speed=this._ngProgress.config.speed,this.thick=this._ngProgress.config.thick,this.fixed=this._ngProgress.config.fixed,this.meteor=this._ngProgress.config.meteor,this.spinner=this._ngProgress.config.spinner,this.trickleSpeed=this._ngProgress.config.trickleSpeed,this.debounceTime=this._ngProgress.config.debounceTime,this.trickleFunc=this._ngProgress.config.trickleFunc,this.spinnerPosition=this._ngProgress.config.spinnerPosition,this.direction=this._ngProgress.config.direction,this.started=new s1,this.completed=new s1}ngOnChanges(){this.progressRef?.setConfig({max:this.max>0&&this.max<=100?this.max:100,min:this.min<100&&this.min>=0?this.min:0,speed:this.speed,trickleSpeed:this.trickleSpeed,trickleFunc:this.trickleFunc,debounceTime:this.debounceTime})}ngOnInit(){this.progressRef=this._ngProgress.ref(this.id,{max:this.max,min:this.min,speed:this.speed,trickleSpeed:this.trickleSpeed,debounceTime:this.debounceTime});let a=this.progressElement.nativeElement,i=this.progressWrapperElement.nativeElement;this._state=this.progressRef.state.pipe(V(n=>{a.style.transform=`translate3d(${n.value}%,0,0)`,n.active?(a.style.transition=`all ${this.speed}ms ${this.ease}`,i.setAttribute("active","true")):(a.style.transition="none",i.setAttribute("active","false"))})).subscribe(),this.started.observed&&(this._started=this.progressRef.started.subscribe(()=>this.started.emit())),this.completed.observed&&(this._completed=this.progressRef.completed.subscribe(()=>this.completed.emit()))}ngOnDestroy(){this._state?.unsubscribe(),this._started?.unsubscribe(),this._completed?.unsubscribe(),this.progressRef?.destroy()}start(){this.progressRef.start()}complete(){this.progressRef.complete()}inc(a){this.progressRef.inc(a)}set(a){this.progressRef.set(a)}};e.\u0275fac=function(i){return new(i||e)(l2(F4))},e.\u0275cmp=y({type:e,selectors:[["ng-progress"]],viewQuery:function(i,n){if(i&1&&(C1(q4,7),C1(_4,7)),i&2){let t;u1(t=M1())&&(n.progressElement=t.first),u1(t=M1())&&(n.progressWrapperElement=t.first)}},hostAttrs:["role","progressbar"],hostVars:4,hostBindings:function(i,n){i&2&&m2("spinnerPosition",n.spinnerPosition)("direction",n.direction)("thick",n.thick)("fixed",n.fixed)},inputs:{id:"id",min:"min",max:"max",ease:"ease",color:"color",speed:"speed",thick:"thick",fixed:"fixed",meteor:"meteor",spinner:"spinner",trickleSpeed:"trickleSpeed",debounceTime:"debounceTime",trickleFunc:"trickleFunc",spinnerPosition:"spinnerPosition",direction:"direction"},outputs:{started:"started",completed:"completed"},standalone:!0,features:[i2,k],decls:7,vars:6,consts:[["progressbarWrapper",""],["progressbar",""],[1,"ng-progress-bar"],[1,"ng-bar-placeholder"],[1,"ng-bar"],["class","ng-meteor",3,"boxShadow",4,"ngIf"],["class","ng-spinner",4,"ngIf"],[1,"ng-meteor"],[1,"ng-spinner"],[1,"ng-spinner-icon"]],template:function(i,n){i&1&&(p(0,"div",2,0)(2,"div",3)(3,"div",4,1),q(5,O4,1,2,"div",5),v()(),q(6,E4,2,4,"div",6),v()),i&2&&(_("transition","opacity "+n.speed+"ms "+n.ease),m(3),_("background-color",n.color),m(2),u("ngIf",n.meteor),m(),u("ngIf",n.spinner))},dependencies:[M2,u2],styles:['[_nghost-%COMP%]{z-index:999999;pointer-events:none}[fixed=true][_nghost-%COMP%]   .ng-progress-bar[_ngcontent-%COMP%], [fixed=true][_nghost-%COMP%]   .ng-spinner[_ngcontent-%COMP%]{position:fixed}[fixed=true][_nghost-%COMP%]   .ng-spinner[_ngcontent-%COMP%]{top:15px}[fixed=true][spinnerPosition=left][_nghost-%COMP%]   .ng-spinner[_ngcontent-%COMP%]{left:15px}[fixed=true][spinnerPosition=right][_nghost-%COMP%]   .ng-spinner[_ngcontent-%COMP%]{right:15px}[thick=true][_nghost-%COMP%]   .ng-spinner-icon[_ngcontent-%COMP%]{width:24px;height:24px;border-width:3px}[thick=true][_nghost-%COMP%]   .ng-bar-placeholder[_ngcontent-%COMP%]{height:3px!important}[direction="ltr+"][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%], [direction=ltr-][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%]{transform:rotate(3deg)}[direction="ltr+"][thick=true][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%], [direction=ltr-][thick=true][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%]{transform:rotate(4deg)}[direction="ltr+"][_nghost-%COMP%]   .ng-bar[_ngcontent-%COMP%], [direction="rtl+"][_nghost-%COMP%]   .ng-bar[_ngcontent-%COMP%]{margin-left:-100%}[direction="ltr+"][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%], [direction="rtl+"][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%]{right:0}[direction="ltr+"][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%], [direction=rtl-][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%]{top:-3px}[direction="ltr+"][thick=true][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%], [direction=rtl-][thick=true][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%]{top:-4px}[direction=ltr-][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%], [direction="rtl+"][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%]{bottom:-3px}[direction=ltr-][thick=true][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%], [direction="rtl+"][thick=true][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%]{bottom:-4px}[direction=ltr-][_nghost-%COMP%]   .ng-bar-placeholder[_ngcontent-%COMP%], [direction="rtl+"][_nghost-%COMP%]   .ng-bar-placeholder[_ngcontent-%COMP%]{transform:rotate(180deg)}[direction=ltr-][_nghost-%COMP%]   .ng-spinner-icon[_ngcontent-%COMP%], [direction="rtl+"][_nghost-%COMP%]   .ng-spinner-icon[_ngcontent-%COMP%]{animation-directionection:reverse}[direction="rtl+"][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%], [direction=rtl-][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%]{transform:rotate(-3deg)}[direction="rtl+"][thick=true][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%], [direction=rtl-][thick=true][_nghost-%COMP%]   .ng-meteor[_ngcontent-%COMP%]{transform:rotate(-4deg)}[spinnerPosition=left][_nghost-%COMP%]   .ng-spinner[_ngcontent-%COMP%]{left:10px}[spinnerPosition=right][_nghost-%COMP%]   .ng-spinner[_ngcontent-%COMP%]{right:10px}.ng-progress-bar[_ngcontent-%COMP%]{position:relative;z-index:999999;top:0;left:0;width:100%;transform:scale(1);filter:alpha(opacity=0);opacity:0}.ng-progress-bar[active=true][_ngcontent-%COMP%]{filter:alpha(opacity=100);opacity:1;transition:none}.ng-bar-placeholder[_ngcontent-%COMP%]{position:absolute;height:2px;width:100%}.ng-bar[_ngcontent-%COMP%]{width:100%;height:100%;transform:translate(-100%,0,0)}.ng-meteor[_ngcontent-%COMP%]{display:block;position:absolute;width:100px;height:100%;opacity:1}.ng-spinner[_ngcontent-%COMP%]{position:absolute;display:block;z-index:1031;top:10px}.ng-spinner-icon[_ngcontent-%COMP%]{width:18px;height:18px;box-sizing:border-box;animation:_ngcontent-%COMP%_spinner-animation .25s linear infinite;border:2px solid transparent;border-radius:50%}@keyframes _ngcontent-%COMP%_spinner-animation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}'],changeDetection:0});let c=e;return c})();var x3=(()=>{let e=class e{constructor(){this.store=f(g),this.router=f(x2),this.routeConfigLoadEventTypes=[K.RouteConfigLoadStart,K.RouteConfigLoadEnd]}initLazyNavigationLoadingTracking(){this.router.events.pipe(w(a=>this.isRouteConfigLoadEvent(a)),G(a=>this.defineActionToDispatch(a)),V(a=>this.store.dispatch(a())),$()).subscribe()}isRouteConfigLoadEvent(a){return this.routeConfigLoadEventTypes.includes(a.type)}defineActionToDispatch(a){return a.type===K.RouteConfigLoadStart?D.lazyModuleLoadingStart:D.lazyModuleLoadingEnd}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=L({token:e,factory:e.\u0275fac,providedIn:"root"});let c=e;return c})();var g3=(()=>{let e=class e{constructor(){this.destroyRef=f(o2),this.store=f(g),this.lazyNavigationTracker=f(x3),this.progressbar=s2(r1),this.httpOrLazyNavigationLoading$=this.store.select(a1.selectHttpOrLazyNavigationLoading),this.lazyNavigationTracker.initLazyNavigationLoadingTracking()}ngAfterViewInit(){this.initProgressbar()}initProgressbar(){this.httpOrLazyNavigationLoading$.pipe(X1(1),V(a=>{let i=this.progressbar();i&&(a?i.start():i.complete())}),$(this.destroyRef)).subscribe()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=y({type:e,selectors:[["app-root"]],viewQuery:function(i,n){i&1&&v2(n.progressbar,r1,5),i&2&&p2()},standalone:!0,features:[k],decls:6,vars:2,consts:[[3,"color","spinner"],[1,"flex","min-h-screen","flex-col"],[1,"sticky","top-0","z-20"],[1,"flex-grow"]],template:function(i,n){i&1&&(d(0,"ng-progress",0),p(1,"div",1)(2,"div",2),d(3,"app-header"),v(),p(4,"div",3),d(5,"router-outlet"),v()()),i&2&&u("color","#bfde42")("spinner",!1)},dependencies:[V2,L3,r1],changeDetection:0});let c=e;return c})();L2(g3,b3).catch(c=>console.error(c));