import{a as W,b as G}from"./chunk-Z7OZQTSG.js";import"./chunk-PYAA7663.js";import{a as K}from"./chunk-RJOGWNFP.js";import"./chunk-DNTDIB4D.js";import{a as $,b as E,f as U,j as z,r as H,s as J}from"./chunk-LETE22YY.js";import{a as j,b as O}from"./chunk-EUUAAR3L.js";import"./chunk-6KRU7EG5.js";import"./chunk-66XNF6FV.js";import{Ba as B,D,Db as P,Eb as A,Ha as o,Jb as k,Kb as q,Va as y,Xa as u,Y as v,_ as f,_a as p,ab as F,bb as M,ca as L,cb as n,db as d,eb as l,ec as w,ia as c,la as T,lb as x,ma as b,nc as R,wb as h,yb as C}from"./chunk-SN7ESOYK.js";import{a as m,b as g}from"./chunk-35PI25VP.js";var Q={episodeLoading:!1,episode:null,episodeError:null,charactersLoading:!1,characters:null,charactersError:null},S=(()=>{let i=class i extends ${constructor(){super(Q),this.episodesApiService=c(K),this.charactersApiService=c(W),this.episode=this.selectSignal(({episode:e})=>e),this.episodeLoading=this.selectSignal(({episodeLoading:e})=>e),this.episodeError=this.selectSignal(({episodeError:e})=>e),this.characters=this.selectSignal(({characters:e})=>e),this.charactersLoading=this.selectSignal(({charactersLoading:e})=>e),this.charactersError=this.selectSignal(({charactersError:e})=>e),this.episodeWithCharactersByIdRequested=this.effect(e=>e.pipe(f(()=>this.patchState({episodeLoading:!0})),v(r=>this.episodesApiService.getEpisodeById(r).pipe(E(a=>{this.episodeByIdSucceeded(a),this.episodeCharactersByIdListRequested(a.characterIds)},({error:a})=>{this.episodeByIdFailed(a)}))))),this.episodeCharactersByIdListRequested=this.effect(e=>e.pipe(f(()=>this.patchState({charactersLoading:!0})),v(r=>this.charactersApiService.getCharactersByIdList(r).pipe(E(a=>{this.episodeCharactersSucceeded(a)},({error:a})=>{this.episodeCharactersFailed(a)}))))),this.episodeByIdSucceeded=this.updater((e,r)=>g(m({},e),{episodeLoading:!1,episode:r,episodeError:null})),this.episodeByIdFailed=this.updater((e,r)=>g(m({},e),{episodeLoading:!1,episode:null,episodeError:r})),this.episodeCharactersSucceeded=this.updater((e,r)=>g(m({},e),{charactersLoading:!1,characters:r,charactersError:null})),this.episodeCharactersFailed=this.updater((e,r)=>g(m({},e),{charactersLoading:!1,characters:null,charactersError:r}))}};i.\u0275fac=function(r){return new(r||i)},i.\u0275prov=L({token:i,factory:i.\u0275fac});let t=i;return t})();var V=(t,i)=>i.id;function X(t,i){t&1&&l(0,"loader")}function Y(t,i){if(t&1&&(n(0,"div",4),l(1,"entity-favourite-toggle",6),n(2,"div",7),h(3),d(),n(4,"h1",8),h(5),d(),n(6,"div")(7,"div",9),h(8,"Air Date:"),d(),n(9,"div",10),h(10),k(11,"date"),d()()()),t&2){let s=i,e=x();o(),u("entityId",s.id)("entityType",e.EntityType.EPISODE),o(2),C(" ",s.episode," "),o(2),C(" ",s.name," "),o(5),C(" ",q(11,5,s.airDate,e.dateFormat)," ")}}function Z(t,i){if(t&1&&l(0,"error-message",5),t&2){let s=x();u("errorMessage",s.episodeError().error)}}function ee(t,i){t&1&&l(0,"loader")}function te(t,i){if(t&1&&l(0,"character-card",13),t&2){let s=i.$implicit;u("character",s)}}function ie(t,i){t&1&&(n(0,"div",3)(1,"h2",11),h(2," Characters in this episode "),d(),n(3,"div",12),F(4,te,1,1,"character-card",13,V),d()()),t&2&&(o(4),M(i))}function re(t,i){if(t&1&&l(0,"error-message",5),t&2){let s=x();u("errorMessage",s.episodeCharactersError().error)}}var De=(()=>{let i=class i{constructor(){this.episodeDetailsStore=c(S),this.title=c(R),this.EntityType=U,this.dateFormat="MMMM d, y",this.episodeId=B.required({transform:e=>+e}),this.episode=this.episodeDetailsStore.episode,this.episodeLoading=this.episodeDetailsStore.episodeLoading,this.episodeError=this.episodeDetailsStore.episodeError,this.episodeCharacters=this.episodeDetailsStore.characters,this.episodeCharactersLoading=this.episodeDetailsStore.charactersLoading,this.episodeCharactersError=this.episodeDetailsStore.charactersError,O(this.episode).pipe(D(Boolean),f(({name:e})=>{this.title.setTitle(`${e} - Episode`)}),j()).subscribe()}ngOnInit(){this.episodeDetailsStore.episodeWithCharactersByIdRequested(this.episodeId())}};i.\u0275fac=function(r){return new(r||i)},i.\u0275cmp=b({type:i,selectors:[["ng-component"]],inputs:{episodeId:[T.SignalBased,"episodeId"]},standalone:!0,features:[P([S]),A],decls:11,vars:6,consts:[[1,"py-4","lg:py-6"],[1,"container"],[1,"flex","flex-col","gap-8","lg:gap-16"],[1,"flex","flex-col","gap-4","lg:gap-6"],[1,"relative","flex","flex-col","items-start","gap-2","rounded-xl","bg-light-blue/10","p-4","font-primary","text-primary","lg:gap-4","lg:p-6"],[3,"errorMessage"],[1,"absolute","right-4","top-4","lg:right-6","lg:top-6",3,"entityId","entityType"],[1,"rounded-lg","bg-accent","px-2","py-0.5","text-sm","text-dark-blue","lg:px-3","lg:text-base"],[1,"w-full","break-words","text-3xl","font-bold","sm:text-4xl","lg:text-5xl","xl:text-6xl"],[1,"font-light","text-blue","lg:text-lg"],[1,"text-lg","lg:text-xl"],[1,"text-center","font-decorative","text-3xl","text-primary","sm:text-4xl","lg:text-5xl"],[1,"grid","grid-cols-1","gap-4","lg:grid-cols-2","lg:gap-6"],[3,"character"]],template:function(r,a){if(r&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),y(4,X,1,0,"loader")(5,Y,12,8,"div",4)(6,Z,1,1,"error-message",5),d(),n(7,"div",3),y(8,ee,1,0,"loader")(9,ie,6,0,"div",3)(10,re,1,1,"error-message",5),d()()()()),r&2){let _,I;o(4),p(4,a.episodeLoading()?4:-1),o(),p(5,(_=a.episode())?5:-1,_),o(),p(6,a.episodeError()&&!a.episodeLoading()?6:-1),o(2),p(8,a.episodeCharactersLoading()?8:-1),o(),p(9,(I=a.episodeCharacters())?9:-1,I),o(),p(10,a.episodeCharactersError()&&!a.episodeCharactersLoading()?10:-1)}},dependencies:[w,H,J,G,z],changeDetection:0});let t=i;return t})();export{De as EpisodeDetailsPageComponent};
