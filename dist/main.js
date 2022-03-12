(()=>{"use strict";function e(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function t(t){e(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function n(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}class r{constructor(e,t,n,r,i,o,a,s,d,c,u,l){this.longitude=e,this.latitude=t,this.description=n,this.temperature=r,this.humidity=i,this.windSpeed=o,this.cloudPercentage=a,this.name=s,this.country=d,this.icon=c,this.offset=u,this.feelsLike=l,this.forecast}getTemperature(){return(Math.round(100*(this.temperature-273.15))/100).toFixed(0)}getFeelsLike(){return(Math.round(100*(this.feelsLike-273.15))/100).toFixed(0)}getLongitude(){return this.longitude}getLatitude(){return this.latitude}getDescription(){return this.description}getHumidity(){return this.humidity}getWindSpeed(){return this.windSpeed}getCloudPercentage(){return this.cloudPercentage}getCity(){return this.name}getCountry(){return this.country}setForecast(e){this.forecast=e}getForecast(){return this.forecast.slice(1)}getIcon(){return"http://openweathermap.org/img/wn/"+this.icon+"@2x.png"}getCurrentDay(){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(1e3*this.datetime).getDay()]}getCurrentTime(){const r=function(r){return e(1,arguments),t(1e3*n(r))}(this.datetime+this.offset).toUTCString();let i=r.slice(17,19),o="am";return i>11&&(o="pm"),i>12&&(i-=12),i+":"+r.slice(20,22)+" "+o}isNight(){return"n"==this.icon.slice(-1)}setDt(e){this.datetime=e}}class i{constructor(e,t,n,r,i,o){this.temperature=e,this.description=t,this.windSpeed=n,this.cloudPercentage=r,this.icon=i,this.datetime=o}getTemperature(){return(Math.round(100*(this.temperature-273.15))/100).toFixed(0)}getDescription(){return this.description}getWindSpeed(){return this.windSpeed}getCloudPercentage(){return this.cloudPercentage}getCurrentDay(){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(1e3*this.datetime).getDay()]}getCurrentTime(){let e=new Date(1e3*this.dt);return e.getHours()+":0"+e.getMinutes()}getIcon(){return"http://openweathermap.org/img/wn/"+this.icon+"@2x.png"}}async function o(e){try{const t=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&APPID=2721941ff1d23996817409883d4be5dd",{mode:"cors"});!function(e){let t=e.coord.lat,n=e.coord.lon,o=e.weather[0].description,a=e.main.temp,s=e.main.humidity,d=e.wind.speed,c=e.clouds.all,u=e.name,l=e.sys.country,g=e.weather[0].icon,m=e.timezone,h=e.main.feels_like;!async function(e,t,n){try{const r=await fetch("https://api.openweathermap.org/data/2.5/onecall?lon="+t+"&lat="+e+"&APPID=2721941ff1d23996817409883d4be5dd",{mode:"cors"});!function(e,t){let n=[],r=e.current.dt;for(let t of e.daily){let e=t.temp.day,r=t.weather[0].description,o=t.wind_speed,a=t.clouds,s=t.weather[0].icon,d=t.dt,c=new i(e,r,o,a,s,d);n.push(c)}t.setForecast(n),t.setDt(r),function(e){document.getElementById("content"),document.getElementById("forecast");const t=document.getElementById("descDiv"),n=document.getElementById("temp"),r=document.getElementById("windSpeed"),i=document.getElementById("name"),o=document.getElementById("icon");t.textContent=e.getTemperature()+" ° C",n.innerHTML=`Feels like: <br> <i class="fa-solid fa-temperature-high"></i> ${e.getFeelsLike()} ° C`,r.innerHTML=`Wind speed: <br> <i class="fa-solid fa-wind"></i>  ${e.getWindSpeed()} km/h`,i.textContent=e.getCity()+", "+e.getCountry(),o.src=e.getIcon(),document.getElementById("dayName").textContent=e.getCurrentDay()+", "+e.getCurrentTime()}(t),function(e){const t=document.getElementById("forecast");t.innerHTML="";for(let n of e.getForecast()){let e=document.createElement("div");e.classList.add("forecast-day");let r=document.createElement("div");r.textContent=n.getCurrentDay();let i=document.createElement("div"),o=document.createElement("img");o.src=n.getIcon(),i.append(o);let a=document.createElement("div");a.textContent=n.getTemperature()+"° C",e.append(r,i,a),t.appendChild(e)}}(t)}(await r.json(),n)}catch(e){console.log("Something went wrong: 2"+e)}}(t,n,new r(t,n,o,a,s,d,c,u,l,g,m,h))}(await t.json())}catch(e){console.log("Something went wrong: "+e)}}document.getElementById("inputs").addEventListener("submit",(e=>{e.preventDefault(),o(document.getElementById("city-input").value)})),o("Frankfurt")})();