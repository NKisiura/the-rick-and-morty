import{a as ee}from"./chunk-YNW56KSJ.js";import{a as J,c as V}from"./chunk-5IP64JJY.js";import"./chunk-OLQBKCZU.js";import{a as Z}from"./chunk-O5AGI4DW.js";import"./chunk-UBLMH3VJ.js";import{a as G,b as T,f as K,j as Q,r as X,s as Y}from"./chunk-N77CJIUJ.js";import{a as z,b as H}from"./chunk-VZYJC24G.js";import"./chunk-SELDRIOR.js";import{e as W,n as $}from"./chunk-DUXSHKKQ.js";import{Ab as O,Bb as g,Ca as b,Cb as k,E as w,Ea as F,Gb as M,Hb as j,Jb as I,Ka as i,Ya as v,_ as E,_a as p,aa as S,bb as s,db as B,ea as P,eb as N,fb as c,gb as l,hb as _,jc as q,ka as f,na as A,oa as R,ob as m,qc as U,zb as d}from"./chunk-7XFWTFYN.js";import{a as y,b as C}from"./chunk-35PI25VP.js";var ae={characterLoading:!1,character:null,characterError:null,episodesLoading:!1,episodes:null,episodesError:null},D=(()=>{let t=class t extends G{constructor(){super(ae),this.charactersApiService=f(J),this.episodesApiService=f(Z),this.character=this.selectSignal(({character:r})=>r),this.characterLoading=this.selectSignal(({characterLoading:r})=>r),this.characterError=this.selectSignal(({characterError:r})=>r),this.episodes=this.selectSignal(({episodes:r})=>r),this.episodesLoading=this.selectSignal(({episodesLoading:r})=>r),this.episodesError=this.selectSignal(({episodesError:r})=>r),this.characterWithEpisodesByIdRequested=this.effect(r=>r.pipe(S(()=>this.patchState({characterLoading:!0})),E(a=>this.charactersApiService.getCharacterById(a).pipe(T(o=>{this.characterByIdSucceeded(o),this.characterEpisodesByIdListRequested(o.episodeIds)},({error:o})=>{this.characterByIdFailed(o)}))))),this.characterEpisodesByIdListRequested=this.effect(r=>r.pipe(S(()=>this.patchState({episodesLoading:!0})),E(a=>this.episodesApiService.getEpisodesByIdList(a).pipe(T(o=>{this.characterEpisodesSucceeded(o)},({error:o})=>{this.characterEpisodesFailed(o)}))))),this.characterByIdSucceeded=this.updater((r,a)=>C(y({},r),{characterLoading:!1,character:a,characterError:null})),this.characterByIdFailed=this.updater((r,a)=>C(y({},r),{characterLoading:!1,character:null,characterError:a})),this.characterEpisodesSucceeded=this.updater((r,a)=>C(y({},r),{episodesLoading:!1,episodes:a,episodesError:null})),this.characterEpisodesFailed=this.updater((r,a)=>C(y({},r),{episodesLoading:!1,episodes:null,episodesError:a}))}};t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=P({token:t,factory:t.\u0275fac});let e=t;return e})();var oe=(e,t)=>t.id,te=(e,t)=>[e,t];function ne(e,t){e&1&&_(0,"loader")}function ce(e,t){e&1&&(c(0,"character-property-wrapper",11),d(1),l()),e&2&&(p("propertyName","status"),i(),g(" ",t," "))}function pe(e,t){e&1&&(c(0,"character-property-wrapper",11),d(1),l()),e&2&&(p("propertyName","species"),i(),g(" ",t," "))}function se(e,t){e&1&&(c(0,"character-property-wrapper",11),d(1),l()),e&2&&(p("propertyName","gender"),i(),g(" ",t," "))}function le(e,t){e&1&&(c(0,"character-property-wrapper",11),d(1),l()),e&2&&(p("propertyName","type"),i(),g(" ",t," "))}function de(e,t){if(e&1&&(c(0,"character-property-wrapper",11),d(1),l()),e&2){let n=t;p("propertyName","episodes amount"),i(),k(" ",n," ",n>1?"Episodes":"Episode"," ")}}function he(e,t){if(e&1&&(c(0,"character-property-wrapper",11)(1,"a",12),d(2),l()()),e&2){let n=m(),r=m();p("propertyName","origin location"),i(),p("routerLink",I(4,te,r.APP_ROUTES.LOCATIONS,t))("relativeTo",null),i(),g(" ",n.origin.name," ")}}function me(e,t){if(e&1&&(c(0,"character-property-wrapper",11)(1,"a",12),d(2),l()()),e&2){let n=m(),r=m();p("propertyName","last location"),i(),p("routerLink",I(4,te,r.APP_ROUTES.LOCATIONS,t))("relativeTo",null),i(),g(" ",n.location.name," ")}}function ge(e,t){if(e&1&&(c(0,"div",4),_(1,"entity-favourite-toggle",6)(2,"img",7),c(3,"div",8)(4,"h1",9),d(5),l(),c(6,"div",10),v(7,ce,2,2,"character-property-wrapper",11)(8,pe,2,2,"character-property-wrapper",11)(9,se,2,2,"character-property-wrapper",11)(10,le,2,2,"character-property-wrapper",11)(11,de,2,3,"character-property-wrapper",11)(12,he,3,7,"character-property-wrapper",11)(13,me,3,7,"character-property-wrapper",11),l()()()),e&2){let n,r,a,o,u,x,L,h=t,re=m();i(),p("entityId",h.id)("entityType",re.EntityType.CHARACTER),i(),p("ngSrc",h.image),i(3),g(" ",h.name," "),i(2),s(7,(n=h.status)?7:-1,n),i(),s(8,(r=h.species)?8:-1,r),i(),s(9,(a=h.gender)?9:-1,a),i(),s(10,(o=h.type)?10:-1,o),i(),s(11,(u=h.episodeIds.length)?11:-1,u),i(),s(12,(x=h.origin.id)?12:-1,x),i(),s(13,(L=h.location.id)?13:-1,L)}}function fe(e,t){if(e&1&&_(0,"error-message",5),e&2){let n=m();p("errorMessage",n.characterError().error)}}function _e(e,t){e&1&&_(0,"loader")}function ue(e,t){if(e&1&&_(0,"episode-card",16),e&2){let n=t.$implicit;p("episode",n)}}function xe(e,t){if(e&1&&(c(0,"div",3)(1,"h2",13),d(2," Episodes with "),c(3,"span",14),d(4),l()(),c(5,"div",15),B(6,ue,1,1,"episode-card",16,oe),l()()),e&2){let n,r=m();i(4),O((n=r.character())==null?null:n.name),i(2),N(t)}}function ye(e,t){if(e&1&&_(0,"error-message",5),e&2){let n=m();p("errorMessage",n.characterEpisodesError().error)}}var ze=(()=>{let t=class t{constructor(){this.destroyRef=f(b),this.characterDetailsStore=f(D),this.title=f(U),this.APP_ROUTES=$,this.EntityType=K,this.characterId=F.required({transform:r=>+r}),this.character=this.characterDetailsStore.character,this.characterLoading=this.characterDetailsStore.characterLoading,this.characterError=this.characterDetailsStore.characterError,this.characterEpisodes=this.characterDetailsStore.episodes,this.characterEpisodesLoading=this.characterDetailsStore.episodesLoading,this.characterEpisodesError=this.characterDetailsStore.episodesError,H(this.character).pipe(w(Boolean),z(this.destroyRef)).subscribe(({name:r})=>{this.title.setTitle(`${r} - Character`)})}ngOnInit(){this.characterDetailsStore.characterWithEpisodesByIdRequested(this.characterId())}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=R({type:t,selectors:[["ng-component"]],inputs:{characterId:[A.SignalBased,"characterId"]},standalone:!0,features:[M([D]),j],decls:11,vars:6,consts:[[1,"py-4","lg:py-6"],[1,"container"],[1,"flex","flex-col","gap-8","lg:gap-16"],[1,"flex","flex-col","gap-4","lg:gap-6"],[1,"relative","flex","flex-col","gap-4","rounded-xl","bg-light-blue/10","p-4","md:flex-row","lg:gap-6","lg:p-6"],[3,"errorMessage"],[1,"absolute","left-6","top-6","lg:left-8","lg:top-8",3,"entityId","entityType"],["width","400","height","400","alt","character image",1,"max-h-[400px]","w-full","rounded-lg","object-cover","md:max-w-[300px]","lg:max-w-[350px]","xl:max-w-[400px]",3,"ngSrc"],[1,"flex","flex-col","gap-4","md:flex-grow","lg:gap-6"],[1,"font-primary","text-3xl","font-bold","text-primary","sm:text-4xl","lg:text-5xl","xl:text-6xl"],[1,"grid","grid-cols-1","gap-4","sm:grid-cols-2","lg:gap-6"],[3,"propertyName"],[1,"underline","decoration-blue","underline-offset-2","transition-colors","hover:text-blue",3,"routerLink","relativeTo"],[1,"text-center","font-decorative","text-3xl","text-primary","sm:text-4xl","lg:text-5xl"],[1,"text-accent"],[1,"grid","grid-cols-1","gap-4","sm:grid-cols-2","lg:grid-cols-3","lg:gap-6","2xl:grid-cols-4"],[3,"episode"]],template:function(a,o){if(a&1&&(c(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),v(4,ne,1,0,"loader")(5,ge,14,11,"div",4)(6,fe,1,1,"error-message",5),l(),c(7,"div",3),v(8,_e,1,0,"loader")(9,xe,8,1,"div",3)(10,ye,1,1,"error-message",5),l()()()()),a&2){let u,x;i(4),s(4,o.characterLoading()?4:-1),i(),s(5,(u=o.character())?5:-1,u),i(),s(6,o.characterError()&&!o.characterLoading()?6:-1),i(2),s(8,o.characterEpisodesLoading()?8:-1),i(),s(9,(x=o.characterEpisodes())?9:-1,x),i(),s(10,o.characterEpisodesError()&&!o.characterEpisodesLoading()?10:-1)}},dependencies:[q,W,X,Y,V,ee,Q],changeDetection:0});let e=t;return e})();export{ze as CharacterDetailsPageComponent};
