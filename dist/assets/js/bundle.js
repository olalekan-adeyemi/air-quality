(()=>{"use strict";let e=[],t=new Promise((function(t,n){fetch("assets/model/cities.json").then((e=>e.ok?e.json():Promise.reject("Something went wrong"))).then((n=>{e=n.cities,t(e)})).catch((e=>{n(e)}))}));const n=document.querySelector("#cityName"),c=document.querySelector(".aqi-value"),o=document.querySelector(".cigg-value"),i=document.querySelector(".city-value"),r=document.querySelector(".result-details");let a,s;document.addEventListener("DOMContentLoaded",(()=>{t.then((function(e){e.sort(((e,t)=>e.city_name>t.city_name?1:-1)).forEach((e=>{u(e.city_name)}))}))})),n.onchange=function(){a=this.value,s=e.map((e=>e.city_name)).indexOf(a),l(e[s].city_name,e[s].city_aqi,e[s].city_cigg),window.scrollTo(0,800)};const u=e=>{n.innerHTML+=`<option value="${e}">${e}</option>`},l=(e,t,n)=>{r.style.display="block",i.innerHTML=e,c.innerHTML=t,o.innerHTML=n}})();