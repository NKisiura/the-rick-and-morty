import{c as v,e as C,f as x,n as t}from"./chunk-DUXSHKKQ.js";import{Bb as f,Hb as g,Ka as a,_a as c,db as d,eb as s,fb as r,gb as n,hb as u,oa as m,zb as p}from"./chunk-7XFWTFYN.js";import"./chunk-35PI25VP.js";var E=(e,o)=>o.route;function A(e,o){if(e&1&&(r(0,"a",6),p(1),n()),e&2){let l=o.$implicit;c("routerLink",l.route)("routerLinkActive","font-bold bg-accent !text-dark-blue"),a(),f(" ",l.label," ")}}var h=(()=>{let o=class o{constructor(){this.APP_ROUTES=t,this.tabs=[{route:t.CHARACTERS,label:t.CHARACTERS},{route:t.EPISODES,label:t.EPISODES},{route:t.LOCATIONS,label:t.LOCATIONS}]}};o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=m({type:o,selectors:[["ng-component"]],standalone:!0,features:[g],decls:11,vars:0,consts:[[1,"py-4","lg:py-6"],[1,"container"],[1,"flex","flex-col","gap-4","lg:gap-6"],[1,"flex","flex-col","items-center","gap-4","lg:gap-6"],[1,"font-decorative","text-5xl","text-primary","sm:text-6xl"],[1,"flex","gap-2","rounded-lg","border","border-light-blue","bg-light-blue/10","p-2","sm:gap-4","lg:gap-6"],[1,"rounded-md","border","border-transparent","px-2","py-1","font-primary","text-sm","capitalize","text-primary","transition-colors","hover:border-accent","sm:px-4","sm:text-base","lg:px-6",3,"routerLink","routerLinkActive"]],template:function(i,b){i&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),p(5," Favourite "),n(),r(6,"div",5),d(7,A,2,3,"a",6,E),n()(),r(9,"div"),u(10,"router-outlet"),n()()()()),i&2&&(a(7),s(b.tabs))},dependencies:[C,x,v],changeDetection:0});let e=o;return e})();var F=[{path:"",component:h,children:[{path:t.CHARACTERS,loadComponent:()=>import("./chunk-BGJ42MIW.js").then(e=>e.FavouriteCharacterListComponent)},{path:t.EPISODES,loadComponent:()=>import("./chunk-W53PPZDS.js").then(e=>e.FavouriteEpisodeListComponent)},{path:t.LOCATIONS,loadComponent:()=>import("./chunk-3CNYXZJL.js").then(e=>e.FavouriteLocationListComponent)},{path:"",redirectTo:t.CHARACTERS,pathMatch:"full"}]}];export{F as favouritesRoutes};
