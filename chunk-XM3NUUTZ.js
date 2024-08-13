import{e as E,n as g}from"./chunk-NEX2WLXG.js";import{k as x}from"./chunk-NIWLSCTU.js";import{$b as w,Ab as S,Bb as C,Cb as y,Db as r,Eb as i,Fb as a,Ia as b,Zb as o,eb as d,fc as c,gc as L,pa as h,qa as l,ub as v,wb as m,zb as k}from"./chunk-4ZLDDYG2.js";import"./chunk-55KE2TB7.js";var T=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l({type:e,selectors:[["greeting-section"]],standalone:!0,features:[c],decls:11,vars:0,consts:[[1,"relative"],[1,"relative","flex","flex-col","items-center","gap-2","overflow-hidden","rounded-xl","border","border-blue","bg-greeting-section-background-pattern","p-4","!pb-0","md:gap-4","md:p-6","lg:p-10","xl:p-14"],[1,"select-none","text-center","font-decorative","text-3xl","text-primary","sm:text-4xl","md:text-5xl","xl:text-6xl"],[1,"text-accent"],["ngSrc","assets/home-greeting-section-car.png","priority","","width","617","height","312","alt","rick-car",1,"w-full","max-w-[350px]","sm:max-w-[420px]","md:max-w-[500px]","lg:max-w-[550px]","xl:max-w-[617px]"],["ngSrc","assets/home-greeting-section-planet-green.png","width","207","height","207","alt","planet-green",1,"absolute","-left-20","bottom-20","hidden","lg:block","xl:bottom-28"],["ngSrc","assets/home-greeting-section-planet-pink.png","width","183","height","183","alt","planet-pink",1,"absolute","right-0","top-0","hidden","-translate-y-1/2","translate-x-1/2","scale-75","lg:block","xl:scale-100"],["ngSrc","assets/home-greeting-section-palent-blue.png","width","332","height","333","alt","planet-blue",1,"absolute","-bottom-28","-right-24","hidden","scale-[60%]","lg:block","xl:-bottom-24","xl:-right-16","xl:scale-100"]],template:function(n,u){n&1&&(r(0,"div",0)(1,"div",1)(2,"h1",2),o(3," Portal to "),r(4,"span",3),o(5,"Rick and Morty"),i(),o(6," multivers "),i(),a(7,"img",4)(8,"img",5)(9,"img",6),i(),a(10,"img",7),i())},dependencies:[x],changeDetection:0});let t=e;return t})();var I=t=>[t];function N(t,e){if(t&1&&(r(0,"div",0),a(1,"img",1),r(2,"div",2)(3,"div",3),o(4),i(),r(5,"a",4)(6,"span",5),o(7," Go To Page "),i(),a(8,"span",6),i()()()),t&2){let p=e;d(),m("ngSrc",p.imageSrc),d(3),w(" ",p.cardName," "),d(),m("routerLink",L(4,I,p.link))("relativeTo",null)}}var F=(()=>{let e=class e{constructor(){this.pageLinkCard=b.required()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l({type:e,selectors:[["page-link-card"]],inputs:{pageLinkCard:[h.SignalBased,"pageLinkCard"]},standalone:!0,features:[c],decls:1,vars:1,consts:[[1,"relative","flex","h-[270px]","items-end","overflow-hidden","rounded-xl","border","border-blue","bg-page-link-card-bg-pattern","p-4","sm:h-[275px]","md:h-[330px]","lg:h-[290px]","lg:p-6","xl:h-[365px]","2xl:h-[445px]"],["width","400","height","400","alt","",1,"absolute","left-0","top-0","h-full","w-full","object-cover","object-center",3,"ngSrc"],[1,"relative","flex","flex-col","items-start","gap-4"],[1,"select-none","font-decorative","text-2xl","text-primary","md:text-3xl"],[1,"group","relative","inline-flex",3,"routerLink","relativeTo"],[1,"relative","z-10","rounded-bl-lg","rounded-br-sm","rounded-tl-sm","rounded-tr-lg","border","border-accent","bg-dark-blue","px-6","py-1.5","font-primary","text-sm","font-medium","text-accent","sm:text-base"],[1,"absolute","left-0","top-0","h-full","w-full","bg-accent","blur-sm","transition-[filter]","group-hover:blur"]],template:function(n,u){if(n&1&&v(0,N,9,6,"div",0),n&2){let f;k(0,(f=u.pageLinkCard())?0:-1,f)}},dependencies:[x,E],changeDetection:0});let t=e;return t})();function M(t,e){if(t&1&&a(0,"page-link-card",5),t&2){let p=e.$implicit;m("pageLinkCard",p)}}var P=(()=>{let e=class e{constructor(){this.pageLinkCards=[{cardName:"Characters",imageSrc:"assets/home-characters-card-bg.png",link:g.CHARACTERS},{cardName:"Episodes",imageSrc:"assets/home-episodes-card-bg.png",link:g.EPISODES},{cardName:"Locations",imageSrc:"assets/home-locations-card-bg.png",link:g.LOCATIONS},{cardName:"Favourites",imageSrc:"assets/home-favourites-card-bg.png",link:g.FAVOURITES}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=l({type:e,selectors:[["app-home"]],standalone:!0,features:[c],decls:8,vars:0,consts:[[1,"overflow-hidden","py-4","lg:py-6"],[1,"container"],[1,"flex","flex-col","gap-4","lg:gap-6"],[1,"grid","grid-cols-1","gap-4","sm:grid-cols-2","lg:grid-cols-3","lg:gap-6"],[1,"col-span-2","hidden","overflow-hidden","rounded-xl","border","border-blue","bg-decorative-card-bg","bg-cover","bg-center","bg-no-repeat","lg:block"],[3,"pageLinkCard"]],template:function(n,u){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),a(3,"greeting-section"),r(4,"div",3),a(5,"div",4),C(6,M,1,1,"page-link-card",5,S),i()()()()),n&2&&(d(6),y(u.pageLinkCards))},dependencies:[T,F],changeDetection:0});let t=e;return t})();var Q=[{path:"",component:P}];export{Q as homeRoutes};