import{c as l,d as h}from"./chunk-N77CJIUJ.js";import{m as f}from"./chunk-DUXSHKKQ.js";import{ea as p,ka as n,mc as c,u as o}from"./chunk-7XFWTFYN.js";import{a as m,b as s}from"./chunk-35PI25VP.js";var e=class a{static fromDTO(t){return{id:t.id,name:t.name,airDate:new Date(t.air_date),episode:t.episode,characterIds:t.characters.map(h),url:t.url,created:new Date(t.created)}}static fromDTOList(t){return t.map(a.fromDTO)}};var E=(()=>{let t=class t{constructor(){this.httpClient=n(c),this.URL=f}getEpisodeById(i){return this.httpClient.get(`${this.URL}/${i}`).pipe(o(e.fromDTO))}getEpisodesByIdList(i){return this.httpClient.get(`${this.URL}/${i.join(",")}`).pipe(o(r=>Array.isArray(r)?e.fromDTOList(r):[e.fromDTO(r)]))}getEpisodesByFilter(i){return this.httpClient.get(this.URL,{params:l(i)}).pipe(o(r=>s(m({},r),{results:e.fromDTOList(r.results)})))}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"});let a=t;return a})();export{E as a};
