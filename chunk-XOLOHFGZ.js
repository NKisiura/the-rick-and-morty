import{b as Ze}from"./chunk-6RRLMYQ5.js";import{a as O,b as q,d as Ye,e as Ke,h as Xe,i as Je,j as Qe}from"./chunk-BUYXJ4OI.js";import{a as de,e as We,k as qe,l as ze}from"./chunk-NIWLSCTU.js";import{$ as x,$b as _,A as Ae,Aa as M,Ba as A,Ca as Pe,Db as u,Eb as a,Fb as C,G as L,Ha as Oe,Ia as v,Ja as ae,Jb as w,Ka as W,L as Ee,Nb as g,O as we,Ob as h,P as Fe,Pb as ke,Qb as Te,X as Ie,Zb as d,_b as je,a as ye,aa as j,ac as Ge,ba as ne,c as ve,ea as ie,eb as s,ec as ce,f as _e,fa as re,fb as y,fc as V,ga as oe,h as J,hc as Be,i as Q,ia as I,ib as le,j as ee,ka as Se,l as H,m as Ce,n as be,o as Ve,oc as Re,p as $,pa as f,pb as G,q as De,qa as b,r as te,ra as se,sa as P,tc as Ue,u as T,ub as ue,uc as He,v as Me,wb as l,xc as $e,yb as Ne,za as xe,zb as E,zc as Le}from"./chunk-4ZLDDYG2.js";import{a as p,b as S}from"./chunk-55KE2TB7.js";var Dt=["*"],Mt=(t,e)=>({"!border-accent !text-accent":t,"sm:!min-w-16 sm:rounded-xl sm:!text-xl":e}),et=(()=>{let e=class e{constructor(){this.isControlButton=v(!1),this.disabled=v(!1),this.active=v(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=b({type:e,selectors:[["pagination-button"]],inputs:{isControlButton:[f.SignalBased,"isControlButton"],disabled:[f.SignalBased,"disabled"],active:[f.SignalBased,"active"]},standalone:!0,features:[V],ngContentSelectors:Dt,decls:2,vars:5,consts:[["type","button",1,"min-w-9","rounded-lg","border","border-blue","py-1","font-primary","text-blue","transition-colors","enabled:hover:border-accent","disabled:opacity-50","sm:min-w-11","sm:px-2","sm:py-1.5","sm:text-lg",3,"ngClass","disabled"]],template:function(r,o){r&1&&(ke(),u(0,"button",0),Te(1),a()),r&2&&l("ngClass",Be(2,Mt,o.active(),o.isControlButton()))("disabled",o.disabled())},dependencies:[We],changeDetection:0});let t=e;return t})();function At(t,e){if(t&1){let i=w();u(0,"pagination-button",7),g("click",function(){M(i);let r=h();return A(r.goToPage(r.page()-4))}),d(1),a()}if(t&2){let i=h();l("disabled",i.isDisabled()),s(),_(" ",i.page()-4," ")}}function Et(t,e){if(t&1){let i=w();u(0,"pagination-button",7),g("click",function(){M(i);let r=h();return A(r.goToPage(r.page()-3))}),d(1),a()}if(t&2){let i=h();l("disabled",i.isDisabled()),s(),_(" ",i.page()-3," ")}}function wt(t,e){if(t&1){let i=w();u(0,"pagination-button",7),g("click",function(){M(i);let r=h();return A(r.goToPage(r.page()-2))}),d(1),a()}if(t&2){let i=h();l("disabled",i.isDisabled()),s(),_(" ",i.page()-2," ")}}function Ft(t,e){if(t&1){let i=w();u(0,"pagination-button",7),g("click",function(){M(i);let r=h();return A(r.goToPage(r.page()-1))}),d(1),a()}if(t&2){let i=h();l("disabled",i.isDisabled()),s(),_(" ",i.page()-1," ")}}function It(t,e){if(t&1){let i=w();u(0,"pagination-button",7),g("click",function(){M(i);let r=h();return A(r.goToPage(r.page()+1))}),d(1),a()}if(t&2){let i=h();l("disabled",i.isDisabled()),s(),_(" ",i.page()+1," ")}}function St(t,e){if(t&1){let i=w();u(0,"pagination-button",7),g("click",function(){M(i);let r=h();return A(r.goToPage(r.page()+2))}),d(1),a()}if(t&2){let i=h();l("disabled",i.isDisabled()),s(),_(" ",i.page()+2," ")}}function xt(t,e){if(t&1){let i=w();u(0,"pagination-button",7),g("click",function(){M(i);let r=h();return A(r.goToPage(r.page()+3))}),d(1),a()}if(t&2){let i=h();l("disabled",i.isDisabled()),s(),_(" ",i.page()+3," ")}}function Pt(t,e){if(t&1){let i=w();u(0,"pagination-button",7),g("click",function(){M(i);let r=h();return A(r.goToPage(r.page()+4))}),d(1),a()}if(t&2){let i=h();l("disabled",i.isDisabled()),s(),_(" ",i.page()+4," ")}}var Fn=(()=>{let e=class e{constructor(){this.firstPageIcon=Qe,this.prevPageIcon=Xe,this.nextPageIcon=Je,this.lastPageIcon=Ye,this.page=v.required(),this.pagesCount=v.required(),this.isDisabled=v(!1),this.pageChange=Oe()}goToPage(n){this.pageChange.emit(n)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=b({type:e,selectors:[["pagination"]],inputs:{page:[f.SignalBased,"page"],pagesCount:[f.SignalBased,"pagesCount"],isDisabled:[f.SignalBased,"isDisabled"]},outputs:{pageChange:"pageChange"},standalone:!0,features:[V],decls:22,vars:25,consts:[[1,"flex","items-center","gap-2","sm:gap-4"],[3,"click","isControlButton","disabled"],[3,"icon"],[1,"font-primary","text-blue","sm:hidden"],[1,"hidden","gap-2","sm:flex"],[3,"disabled"],[3,"active","disabled"],[3,"click","disabled"]],template:function(r,o){r&1&&(u(0,"div",0)(1,"pagination-button",1),g("click",function(){return o.goToPage(1)}),C(2,"fa-icon",2),a(),u(3,"pagination-button",1),g("click",function(){return o.goToPage(o.page()-1)}),C(4,"fa-icon",2),a(),u(5,"div",3),d(6),a(),u(7,"div",4),ue(8,At,2,2,"pagination-button",5)(9,Et,2,2,"pagination-button",5)(10,wt,2,2,"pagination-button",5)(11,Ft,2,2,"pagination-button",5),u(12,"pagination-button",6),d(13),a(),ue(14,It,2,2,"pagination-button",5)(15,St,2,2,"pagination-button",5)(16,xt,2,2,"pagination-button",5)(17,Pt,2,2,"pagination-button",5),a(),u(18,"pagination-button",1),g("click",function(){return o.goToPage(o.page()+1)}),C(19,"fa-icon",2),a(),u(20,"pagination-button",1),g("click",function(){return o.goToPage(o.pagesCount())}),C(21,"fa-icon",2),a()()),r&2&&(s(),l("isControlButton",!0)("disabled",o.page()===1||o.isDisabled()),s(),l("icon",o.firstPageIcon),s(),l("isControlButton",!0)("disabled",o.page()===1||o.isDisabled()),s(),l("icon",o.prevPageIcon),s(2),Ge(" Page ",o.page()," / ",o.pagesCount()," "),s(2),E(8,o.page()===o.pagesCount()&&o.page()-4>0?8:-1),s(),E(9,o.pagesCount()-o.page()<2&&o.page()-3>0?9:-1),s(),E(10,o.page()-2>0?10:-1),s(),E(11,o.page()-1>0?11:-1),s(),l("active",!0)("disabled",o.isDisabled()),s(),_(" ",o.page()," "),s(),E(14,o.page()+1<=o.pagesCount()&&o.page()+1<=o.pagesCount()?14:-1),s(),E(15,o.page()+2<=o.pagesCount()&&o.page()+2<=o.pagesCount()?15:-1),s(),E(16,o.page()<3&&o.page()+3<=o.pagesCount()?16:-1),s(),E(17,o.page()===1&&o.page()+4<=o.pagesCount()?17:-1),s(),l("isControlButton",!0)("disabled",o.page()===o.pagesCount()||o.isDisabled()),s(),l("icon",o.nextPageIcon),s(),l("isControlButton",!0)("disabled",o.page()===o.pagesCount()||o.isDisabled()),s(),l("icon",o.lastPageIcon))},dependencies:[O,et],changeDetection:0});let t=e;return t})();var kn=(()=>{let e=class e{constructor(){this.loadMoreIcon=Ke,this.loadingIcon=q,this.isLoading=v(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=b({type:e,selectors:[["load-more-button"]],inputs:{isLoading:[f.SignalBased,"isLoading"]},standalone:!0,features:[V],decls:3,vars:4,consts:[["type","button",1,"rounded-3xl","border","border-blue","px-4","py-1.5","font-primary","text-blue","transition-colors","hover:bg-blue","hover:text-dark-blue","lg:px-6","lg:py-2","lg:text-lg",3,"disabled"],["size","lg",3,"icon","animation"]],template:function(r,o){r&1&&(u(0,"button",0),C(1,"fa-icon",1),d(2),a()),r&2&&(l("disabled",o.isLoading()),s(),l("icon",o.isLoading()?o.loadingIcon:o.loadMoreIcon)("animation",o.isLoading()?"spin":void 0),s(),_(" ",o.isLoading()?"Loading...":"Show More",`
`))},dependencies:[O],changeDetection:0});let t=e;return t})();var Bn=(()=>{let e=class e{constructor(){this.loadingIcon=q}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=b({type:e,selectors:[["loader"]],standalone:!0,features:[V],decls:3,vars:1,consts:[[1,"flex","justify-center","gap-4","font-primary","text-2xl","text-blue","sm:text-4xl"],["animation","spin",3,"icon"]],template:function(r,o){r&1&&(u(0,"div",0),C(1,"fa-icon",1),d(2,` Loading...
`),a()),r&2&&(s(),l("icon",o.loadingIcon))},dependencies:[O],changeDetection:0});let t=e;return t})();var Wn=(()=>{let e=class e{constructor(){this.errorMessage=v.required()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=b({type:e,selectors:[["error-message"]],inputs:{errorMessage:[f.SignalBased,"errorMessage"]},standalone:!0,features:[V],decls:7,vars:1,consts:[[1,"flex","flex-col","items-center","gap-4","sm:flex-row","sm:items-start","sm:justify-center"],[1,"flex","flex-col","font-primary","text-2xl","text-blue","sm:pt-4","sm:text-3xl","md:gap-2","md:text-4xl"],["ngSrc","assets/pickle-rick.svg","width","260","height","368","alt","pickle-rick",1,"max-w-[150px]"]],template:function(r,o){r&1&&(u(0,"div",0)(1,"div",1)(2,"div"),d(3,"Oops..."),a(),u(4,"div"),d(5),a()(),C(6,"img",2),a()),r&2&&(s(5),je(o.errorMessage()))},dependencies:[qe],changeDetection:0});let t=e;return t})();function Nt(){return t=>new ve(e=>{let i,n,r=new ye;return r.add(t.subscribe({complete:()=>{i&&e.next(n),e.complete()},error:o=>{e.error(o)},next:o=>{n=o,i||(i=Q.schedule(()=>{e.next(n),i=void 0}),r.add(i))}})),r})}function tt(t){return typeof t.ngrxOnStoreInit=="function"}function nt(t){return typeof t.ngrxOnStateInit=="function"}var kt=new I("@ngrx/component-store Initial State"),oi=(()=>{let e=class e{constructor(n){this.destroySubject$=new J(1),this.destroy$=this.destroySubject$.asObservable(),this.stateSubject$=new J(1),this.isInitialized=!1,this.state$=this.select(r=>r),this.state=Ze(this.stateSubject$.pipe(x(this.destroy$)),{requireSync:!1,manualCleanup:!0}),this.\u0275hasProvider=!1,n&&this.initState(n),this.checkProviderForHooks()}ngOnDestroy(){this.stateSubject$.complete(),this.destroySubject$.next()}updater(n){return r=>{let o=!0,c,D=(te(r)?r:$(r)).pipe(Ce(ee),j(()=>this.assertStateIsInitialized()),ne(this.stateSubject$),T(([F,X])=>n(X,F)),j(F=>this.stateSubject$.next(F)),L(F=>o?(c=F,H):De(F)),x(this.destroy$)).subscribe();if(c)throw c;return o=!1,D}}initState(n){be([n],ee).subscribe(r=>{this.isInitialized=!0,this.stateSubject$.next(r)})}setState(n){typeof n!="function"?this.initState(n):this.updater(n)()}patchState(n){let r=typeof n=="function"?n(this.get()):n;this.updater((o,c)=>p(p({},o),c))(r)}get(n){this.assertStateIsInitialized();let r;return this.stateSubject$.pipe(Ee(1)).subscribe(o=>{r=n?n(o):o}),r}select(...n){let{observablesOrSelectorsObject:r,projector:o,config:c}=Tt(n);return(Gt(r,o)?this.stateSubject$:Me(r)).pipe(c.debounce?Nt():it(),o?T(D=>r.length>0&&Array.isArray(D)?o(...D):o(D)):it(),we(c.equal),Ie({refCount:!0,bufferSize:1}),x(this.destroy$))}selectSignal(...n){let r=[...n],o=typeof r[n.length-1]=="object"?r.pop():{},c=r.pop(),m=r,D=m.length===0?()=>c(this.state()):()=>{let F=m.map(X=>X());return c(...F)};return Le(D,o)}effect(n){let r=new _e;return n(r).pipe(x(this.destroy$)).subscribe(),o=>(te(o)?o:$(o)).pipe(x(this.destroy$)).subscribe(m=>{r.next(m)})}checkProviderForHooks(){Q.schedule(()=>{if(Ue()&&(tt(this)||nt(this))&&!this.\u0275hasProvider){let n=[tt(this)?"OnStoreInit":"",nt(this)?"OnStateInit":""].filter(r=>r);console.warn(`@ngrx/component-store: ${this.constructor.name} has the ${n.join(" and ")} lifecycle hook(s) implemented without being provided using the provideComponentStore(${this.constructor.name}) function. To resolve this, provide the component store via provideComponentStore(${this.constructor.name})`)}})}assertStateIsInitialized(){if(!this.isInitialized)throw new Error(`${this.constructor.name} has not been initialized yet. Please make sure it is initialized before updating/getting.`)}};e.\u0275fac=function(r){return new(r||e)(Se(kt,8))},e.\u0275prov=re({token:e,factory:e.\u0275fac});let t=e;return t})();function Tt(t){let e=Array.from(t),n={debounce:!1,equal:(c,m)=>c===m};if(jt(e[e.length-1])&&(n=p(p({},n),e.pop())),e.length===1&&typeof e[0]!="function")return{observablesOrSelectorsObject:e[0],projector:void 0,config:n};let r=e.pop();return{observablesOrSelectorsObject:e,projector:r,config:n}}function jt(t){let e=t;return typeof e.debounce<"u"||typeof e.equal<"u"}function Gt(t,e){return Array.isArray(t)&&t.length===0&&e}function it(){return t=>t}function di(t,e,i){let n=typeof t=="function"?{next:t,error:e,complete:i}:t;return r=>r.pipe(j({next:n.next,complete:n.complete}),L(o=>(n.error(o),H)),n.finalize?Fe(n.finalize):o=>o)}var dt=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(y(le),y(ae))},e.\u0275dir=P({type:e});let t=e;return t})(),Bt=(()=>{let e=class e extends dt{};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=Pe(e)))(o||e)}})(),e.\u0275dir=P({type:e,features:[G]});let t=e;return t})(),ht=new I("");var Rt={provide:ht,useExisting:ie(()=>pt),multi:!0};function Ut(){let t=de()?de().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Ht=new I(""),pt=(()=>{let e=class e extends dt{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Ut())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(y(le),y(ae),y(Ht,8))},e.\u0275dir=P({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&g("input",function(m){return o._handleInput(m.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(m){return o._compositionEnd(m.target.value)})},features:[ce([Rt]),G]});let t=e;return t})();var $t=new I(""),Lt=new I("");function ft(t){return t!=null}function gt(t){return Re(t)?Ve(t):t}function mt(t){let e={};return t.forEach(i=>{e=i!=null?p(p({},e),i):e}),Object.keys(e).length===0?null:e}function yt(t,e){return e.map(i=>i(t))}function Wt(t){return!t.validate}function vt(t){return t.map(e=>Wt(e)?e:i=>e.validate(i))}function qt(t){if(!t)return null;let e=t.filter(ft);return e.length==0?null:function(i){return mt(yt(i,e))}}function _t(t){return t!=null?qt(vt(t)):null}function zt(t){if(!t)return null;let e=t.filter(ft);return e.length==0?null:function(i){let n=yt(i,e).map(gt);return Ae(n).pipe(T(mt))}}function Ct(t){return t!=null?zt(vt(t)):null}function rt(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Zt(t){return t._rawValidators}function Yt(t){return t._rawAsyncValidators}function he(t){return t?Array.isArray(t)?t:[t]:[]}function Z(t,e){return Array.isArray(t)?t.includes(e):t===e}function ot(t,e){let i=he(e);return he(t).forEach(r=>{Z(i,r)||i.push(r)}),i}function st(t,e){return he(e).filter(i=>!Z(t,i))}var Y=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=_t(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ct(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},pe=class extends Y{get formDirective(){return null}get path(){return null}},U=class extends Y{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},fe=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Kt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Pi=S(p({},Kt),{"[class.ng-submitted]":"isSubmitted"}),Oi=(()=>{let e=class e extends fe{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(y(U,2))},e.\u0275dir=P({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&Ne("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[G]});let t=e;return t})();var B="VALID",z="INVALID",k="PENDING",R="DISABLED";function Xt(t){return(K(t)?t.validators:t)||null}function Jt(t){return Array.isArray(t)?_t(t):t||null}function Qt(t,e){return(K(e)?e.asyncValidators:t)||null}function en(t){return Array.isArray(t)?Ct(t):t||null}function K(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var ge=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===B}get invalid(){return this.status===z}get pending(){return this.status==k}get disabled(){return this.status===R}get enabled(){return this.status!==R}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ot(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ot(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(st(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(st(e,this._rawAsyncValidators))}hasValidator(e){return Z(this._rawValidators,e)}hasAsyncValidator(e){return Z(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=k,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=R,this.errors=null,this._forEachChild(n=>{n.disable(S(p({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(S(p({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=B,this._forEachChild(n=>{n.enable(S(p({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(S(p({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===B||this.status===k)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?R:B}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=k,this._hasOwnPendingAsyncValidator=!0;let i=gt(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new W,this.statusChanges=new W}_calculateStatus(){return this._allControlsDisabled()?R:this.errors?z:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(k)?k:this._anyControlsHaveStatus(z)?z:B}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){K(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Jt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=en(this._rawAsyncValidators)}};var bt=new I("CallSetDisabledState",{providedIn:"root",factory:()=>me}),me="always";function tn(t,e){return[...e.path,t]}function nn(t,e,i=me){on(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),sn(t,e),ln(t,e),an(t,e),rn(t,e)}function at(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function rn(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function on(t,e){let i=Zt(t);e.validator!==null?t.setValidators(rt(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=Yt(t);e.asyncValidator!==null?t.setAsyncValidators(rt(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();at(e._rawValidators,r),at(e._rawAsyncValidators,r)}function sn(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Vt(t,e)})}function an(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Vt(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Vt(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function ln(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function un(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function cn(t){return Object.getPrototypeOf(t.constructor)===Bt}function dn(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(o=>{o.constructor===pt?i=o:cn(o)?n=o:r=o}),r||n||i||null}function lt(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function ut(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var hn=class extends ge{constructor(e=null,i,n){super(Xt(i),Qt(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),K(i)&&(i.nonNullable||i.initialValueIsDefault)&&(ut(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){lt(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){lt(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ut(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var pn={provide:U,useExisting:ie(()=>fn)},ct=Promise.resolve(),fn=(()=>{let e=class e extends U{constructor(n,r,o,c,m,D){super(),this._changeDetectorRef=m,this.callSetDisabledState=D,this.control=new hn,this._registered=!1,this.name="",this.update=new W,this._parent=n,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=dn(this,c)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),un(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){nn(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){ct.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,o=r!==0&&$e(r);ct.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?tn(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(y(pe,9),y($t,10),y(Lt,10),y(ht,10),y(He,8),y(bt,8))},e.\u0275dir=P({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[f.None,"disabled","isDisabled"],model:[f.None,"ngModel","model"],options:[f.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[ce([pn]),G,xe]});let t=e;return t})();var gn=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=se({type:e}),e.\u0275inj=oe({});let t=e;return t})();var ki=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:bt,useValue:n.callSetDisabledState??me}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=se({type:e}),e.\u0275inj=oe({imports:[gn]});let t=e;return t})();var mn={skipEmptyString:!0},Bi=(t,e)=>{let i=p(p({},mn),e);return Object.entries(t).reduce((n,[r,o])=>{if(o==null)return n;if(typeof o=="object"||typeof o=="function")throw new Error(`Filter props can be a primitive value only! The type of value in filter "${r}" property is "${typeof o}"`);return o===""&&i?.skipEmptyString?n:n.append(r,o)},new ze)};var Li=t=>{let i=t.split("/").at(-1);if(!i||Number.isNaN(+i))throw new Error("Invalid URL. Cannot extract entity ID.");return+i};export{oi as a,di as b,Bi as c,Li as d,ht as e,pt as f,Oi as g,fn as h,ki as i,Fn as j,kn as k,Bn as l,Wn as m};
