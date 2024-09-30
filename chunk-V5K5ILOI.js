import{a as Z}from"./chunk-IJDNZOMX.js";import{a as G,c as Q}from"./chunk-Z7OZQTSG.js";import"./chunk-PYAA7663.js";import{a as Y}from"./chunk-RJOGWNFP.js";import"./chunk-DNTDIB4D.js";import{a as H,b as T,f as J,j as K,r as V,s as X}from"./chunk-LETE22YY.js";import{a as $,b as z}from"./chunk-EUUAAR3L.js";import"./chunk-6KRU7EG5.js";import{e as U,n as W}from"./chunk-66XNF6FV.js";import{Ba as F,D as w,Db as k,Eb as M,Gb as I,Ha as i,Va as E,Xa as p,Y as S,_ as v,_a as s,ab as B,bb as R,ca as P,cb as c,db as l,eb as f,gc as j,ia as _,la as A,lb as m,ma as b,nc as q,wb as d,xb as N,yb as g,zb as O}from"./chunk-SN7ESOYK.js";import{a as C,b as y}from"./chunk-35PI25VP.js";var ie={characterLoading:!1,character:null,characterError:null,episodesLoading:!1,episodes:null,episodesError:null},L=(()=>{let t=class t extends H{constructor(){super(ie),this.charactersApiService=_(G),this.episodesApiService=_(Y),this.character=this.selectSignal(({character:r})=>r),this.characterLoading=this.selectSignal(({characterLoading:r})=>r),this.characterError=this.selectSignal(({characterError:r})=>r),this.episodes=this.selectSignal(({episodes:r})=>r),this.episodesLoading=this.selectSignal(({episodesLoading:r})=>r),this.episodesError=this.selectSignal(({episodesError:r})=>r),this.characterWithEpisodesByIdRequested=this.effect(r=>r.pipe(v(()=>this.patchState({characterLoading:!0})),S(a=>this.charactersApiService.getCharacterById(a).pipe(T(o=>{this.characterByIdSucceeded(o),this.characterEpisodesByIdListRequested(o.episodeIds)},({error:o})=>{this.characterByIdFailed(o)}))))),this.characterEpisodesByIdListRequested=this.effect(r=>r.pipe(v(()=>this.patchState({episodesLoading:!0})),S(a=>this.episodesApiService.getEpisodesByIdList(a).pipe(T(o=>{this.characterEpisodesSucceeded(o)},({error:o})=>{this.characterEpisodesFailed(o)}))))),this.characterByIdSucceeded=this.updater((r,a)=>y(C({},r),{characterLoading:!1,character:a,characterError:null})),this.characterByIdFailed=this.updater((r,a)=>y(C({},r),{characterLoading:!1,character:null,characterError:a})),this.characterEpisodesSucceeded=this.updater((r,a)=>y(C({},r),{episodesLoading:!1,episodes:a,episodesError:null})),this.characterEpisodesFailed=this.updater((r,a)=>y(C({},r),{episodesLoading:!1,episodes:null,episodesError:a}))}};t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=P({token:t,factory:t.\u0275fac});let e=t;return e})();var ae=(e,t)=>t.id,ee=(e,t)=>[e,t];function oe(e,t){e&1&&f(0,"loader")}function ne(e,t){e&1&&(c(0,"character-property-wrapper",11),d(1),l()),e&2&&(p("propertyName","status"),i(),g(" ",t," "))}function ce(e,t){e&1&&(c(0,"character-property-wrapper",11),d(1),l()),e&2&&(p("propertyName","species"),i(),g(" ",t," "))}function pe(e,t){e&1&&(c(0,"character-property-wrapper",11),d(1),l()),e&2&&(p("propertyName","gender"),i(),g(" ",t," "))}function se(e,t){e&1&&(c(0,"character-property-wrapper",11),d(1),l()),e&2&&(p("propertyName","type"),i(),g(" ",t," "))}function le(e,t){if(e&1&&(c(0,"character-property-wrapper",11),d(1),l()),e&2){let n=t;p("propertyName","episodes amount"),i(),O(" ",n," ",n>1?"Episodes":"Episode"," ")}}function de(e,t){if(e&1&&(c(0,"character-property-wrapper",11)(1,"a",12),d(2),l()()),e&2){let n=m(),r=m();p("propertyName","origin location"),i(),p("routerLink",I(4,ee,r.APP_ROUTES.LOCATIONS,t))("relativeTo",null),i(),g(" ",n.origin.name," ")}}function he(e,t){if(e&1&&(c(0,"character-property-wrapper",11)(1,"a",12),d(2),l()()),e&2){let n=m(),r=m();p("propertyName","last location"),i(),p("routerLink",I(4,ee,r.APP_ROUTES.LOCATIONS,t))("relativeTo",null),i(),g(" ",n.location.name," ")}}function me(e,t){if(e&1&&(c(0,"div",4),f(1,"entity-favourite-toggle",6)(2,"img",7),c(3,"div",8)(4,"h1",9),d(5),l(),c(6,"div",10),E(7,ne,2,2,"character-property-wrapper",11)(8,ce,2,2,"character-property-wrapper",11)(9,pe,2,2,"character-property-wrapper",11)(10,se,2,2,"character-property-wrapper",11)(11,le,2,3,"character-property-wrapper",11)(12,de,3,7,"character-property-wrapper",11)(13,he,3,7,"character-property-wrapper",11),l()()()),e&2){let n,r,a,o,u,x,D,h=t,te=m();i(),p("entityId",h.id)("entityType",te.EntityType.CHARACTER),i(),p("ngSrc",h.image),i(3),g(" ",h.name," "),i(2),s(7,(n=h.status)?7:-1,n),i(),s(8,(r=h.species)?8:-1,r),i(),s(9,(a=h.gender)?9:-1,a),i(),s(10,(o=h.type)?10:-1,o),i(),s(11,(u=h.episodeIds.length)?11:-1,u),i(),s(12,(x=h.origin.id)?12:-1,x),i(),s(13,(D=h.location.id)?13:-1,D)}}function ge(e,t){if(e&1&&f(0,"error-message",5),e&2){let n=m();p("errorMessage",n.characterError().error)}}function fe(e,t){e&1&&f(0,"loader")}function _e(e,t){if(e&1&&f(0,"episode-card",16),e&2){let n=t.$implicit;p("episode",n)}}function ue(e,t){if(e&1&&(c(0,"div",3)(1,"h2",13),d(2," Episodes with "),c(3,"span",14),d(4),l()(),c(5,"div",15),B(6,_e,1,1,"episode-card",16,ae),l()()),e&2){let n,r=m();i(4),N((n=r.character())==null?null:n.name),i(2),R(t)}}function xe(e,t){if(e&1&&f(0,"error-message",5),e&2){let n=m();p("errorMessage",n.characterEpisodesError().error)}}var $e=(()=>{let t=class t{constructor(){this.characterDetailsStore=_(L),this.title=_(q),this.APP_ROUTES=W,this.EntityType=J,this.characterId=F.required({transform:r=>+r}),this.character=this.characterDetailsStore.character,this.characterLoading=this.characterDetailsStore.characterLoading,this.characterError=this.characterDetailsStore.characterError,this.characterEpisodes=this.characterDetailsStore.episodes,this.characterEpisodesLoading=this.characterDetailsStore.episodesLoading,this.characterEpisodesError=this.characterDetailsStore.episodesError,z(this.character).pipe(w(Boolean),v(({name:r})=>{this.title.setTitle(`${r} - Character`)}),$()).subscribe()}ngOnInit(){this.characterDetailsStore.characterWithEpisodesByIdRequested(this.characterId())}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=b({type:t,selectors:[["ng-component"]],inputs:{characterId:[A.SignalBased,"characterId"]},standalone:!0,features:[k([L]),M],decls:11,vars:6,consts:[[1,"py-4","lg:py-6"],[1,"container"],[1,"flex","flex-col","gap-8","lg:gap-16"],[1,"flex","flex-col","gap-4","lg:gap-6"],[1,"relative","flex","flex-col","gap-4","rounded-xl","bg-light-blue/10","p-4","md:flex-row","lg:gap-6","lg:p-6"],[3,"errorMessage"],[1,"absolute","left-6","top-6","lg:left-8","lg:top-8",3,"entityId","entityType"],["width","400","height","400","alt","character image",1,"max-h-[400px]","w-full","rounded-lg","object-cover","md:max-w-[300px]","lg:max-w-[350px]","xl:max-w-[400px]",3,"ngSrc"],[1,"flex","flex-col","gap-4","md:flex-grow","lg:gap-6"],[1,"font-primary","text-3xl","font-bold","text-primary","sm:text-4xl","lg:text-5xl","xl:text-6xl"],[1,"grid","grid-cols-1","gap-4","sm:grid-cols-2","lg:gap-6"],[3,"propertyName"],[1,"underline","decoration-blue","underline-offset-2","transition-colors","hover:text-blue",3,"routerLink","relativeTo"],[1,"text-center","font-decorative","text-3xl","text-primary","sm:text-4xl","lg:text-5xl"],[1,"text-accent"],[1,"grid","grid-cols-1","gap-4","sm:grid-cols-2","lg:grid-cols-3","lg:gap-6","2xl:grid-cols-4"],[3,"episode"]],template:function(a,o){if(a&1&&(c(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),E(4,oe,1,0,"loader")(5,me,14,11,"div",4)(6,ge,1,1,"error-message",5),l(),c(7,"div",3),E(8,fe,1,0,"loader")(9,ue,8,1,"div",3)(10,xe,1,1,"error-message",5),l()()()()),a&2){let u,x;i(4),s(4,o.characterLoading()?4:-1),i(),s(5,(u=o.character())?5:-1,u),i(),s(6,o.characterError()&&!o.characterLoading()?6:-1),i(2),s(8,o.characterEpisodesLoading()?8:-1),i(),s(9,(x=o.characterEpisodes())?9:-1,x),i(),s(10,o.characterEpisodesError()&&!o.characterEpisodesLoading()?10:-1)}},dependencies:[j,U,V,X,Q,Z,K],changeDetection:0});let e=t;return e})();export{$e as CharacterDetailsPageComponent};
