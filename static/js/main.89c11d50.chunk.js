(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{154:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(45),s=a.n(c),i=(a(58),a(9)),l=a(10),o=a(12),m=a(11),u=a(46),d=a(48),p=a.n(d),h=a(49),v=a.n(h),b=a(28),y=a.n(b),g=a(50),f=a.n(g),E=a(51),N=a.n(E),w=a(52),S=a.n(w),j="c17ed5bdc28b8f728c431b00dbd45bfa",x="bb5f6e757d923edbbe90f2c818ac0ac3",C=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"search-box"},r.a.createElement("div",{className:"search"},r.a.createElement("h1",{className:"formH1"},"Weather Up"),r.a.createElement("form",{onSubmit:this.props.submit},r.a.createElement("input",{className:"search-bar",type:"text",value:this.props.value,placeholder:"Search...",onChange:this.props.change}),r.a.createElement("button",{className:"formBtn"},"Search")))))}}]),a}(n.Component),I=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).dateBuilderTime=function(e){var t=e.getHours(),a=e.getMinutes(),n=e.getSeconds();return e.toDateString(),e.toLocaleDateString(),e.toLocaleString(),e.toString(),a<10&&(a="0"+a),n<10&&(n="0"+n),t<10&&(t="0"+t),"".concat(t," : ").concat(a," : ").concat(n)},e.Calender=function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate(),n=["January","February","March","April","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return"".concat(t,", ").concat(a," ").concat(n," ").concat(r,"  ")},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.weather,t=e.city,a=e.sunrise,n=e.sunset,c=e.temp,s=e.pressure,i=e.wind,l=e.cloud,o=e.visibility,m=e.humidity,u=e.feel,d=e.main,h=e.err,b=null,g=null;if(!h&&t){var E=new Date(1e3*a).toLocaleTimeString(),w=new Date(1e3*n).toLocaleTimeString();b=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"resultDiv"},r.a.createElement("div",{className:"resultIcon"},r.a.createElement("h4",{className:"resultH4"},"Real feel ",u),r.a.createElement("div",{className:"feelImg"}),r.a.createElement("h4",{className:"resultH4"},"Humidity ",m," %"),r.a.createElement("div",{className:"humidityImg"}),r.a.createElement("h4",{className:"resultH4"},"Clouds ",l," %"),r.a.createElement("div",{className:"cloudImg"}),r.a.createElement("h4",{className:"resultH4"},"Wind ",i," m/s"),r.a.createElement("div",{className:"windImg"})),r.a.createElement("div",{className:"resultCity"},r.a.createElement("div",{className:"calender"},this.Calender(new Date)),r.a.createElement("div",{className:"resultDate"},this.dateBuilderTime(new Date)),r.a.createElement("h3",{className:"resultCityH3"},t),r.a.createElement("div",{className:"divTemp"},r.a.createElement("div",{className:"resultTempIcon"}),r.a.createElement("h2",{className:"resultTempH2"},c," \xb0C")),r.a.createElement("h3",{className:"mainH3"},d)),r.a.createElement("div",{className:"resultIcon2"},r.a.createElement("h4",{className:"resultH4"},"Pressure ",s," hPa"),r.a.createElement("div",{className:"pressureImg"}),r.a.createElement("h4",{className:"resultH4"},"Visibility ",o," km"),r.a.createElement("div",{className:"visibilityImg"}),r.a.createElement("h4",{className:"resultH4"},"Sunrise ",E),r.a.createElement("div",{className:"sunriseImg"}),r.a.createElement("h4",{className:"resultH4"},"Sunset ",w),r.a.createElement("div",{className:"sunsetImg"}))));var j=document.querySelector("#root");j.style.backgroundImage="url(".concat("Rain"===d?p.a:"Clear"===d&&c>-5?v.a:"Snow"===d||c<-5?y.a:"Mist"===d?f.a:"Clouds"===d?N.a:S.a,")")}else g=r.a.createElement("div",{className:"errors"},"Is not in the database: ",t);return r.a.createElement("div",{className:"result"},h?g:b)}}]),a}(n.Component),D=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:"",date:"",city:"",sunrise:"",sunset:"",temp:"",pressure:"",wind:"",cloud:"",visibility:"",humidity:"",feel:"",main:"",latitude:"",longitude:"",err:!1,day1:"",day2:"",day3:"",day4:"",day5:"",temp1:"",temp2:"",temp3:"",temp4:"",temp5:""},e.handleInputChange=function(t){e.setState({value:t.target.value})},e.handleCitySubmit=function(t){t.preventDefault();var a="https://api.openweathermap.org/data/2.5/weather?q=".concat(e.state.value,"&APPID=").concat(j,"&units=metric");fetch(a).then((function(e){if(e.ok)return e;throw Error("Nie uda\u0142o si\u0119")})).then((function(e){return e.json()})).then((function(t){var a=(new Date).toLocaleTimeString();e.setState((function(e){return{err:!1,date:a,sunrise:t.sys.sunrise,sunset:t.sys.sunset,temp:t.main.temp,pressure:t.main.pressure,wind:t.wind.speed,cloud:t.clouds.all,visibility:t.visibility,humidity:t.main.humidity,feel:t.main.feels_like,main:t.weather[0].main,city:e.value}}))})).catch((function(t){console.log(t),e.setState((function(e){return{err:!0,city:e.value}}))}));var n="https://api.openweathermap.org/data/2.5/forecast?q=".concat(e.state.value,"&APPID=").concat(x);fetch(n).then((function(e){if(e.ok)return e;throw Error("Nie uda\u0142o si\u0119 z air")})).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState((function(e){return{err:!1,day1:t.list[9].dt_txt,day2:t.list[15].dt_txt,day3:t.list[23].dt_txt,day4:t.list[31].dt_txt,day5:t.list[39].dt_txt,temp1:t.list[7].main.temp,temp2:t.list[15].main.temp,temp3:t.list[23].main.temp,temp4:t.list[31].main.temp,temp5:t.list[39].main.temp,city:e.value}}))})).catch((function(t){console.log(t),e.setState((function(e){return{err:!0,city:e.value}}))}))},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("main",{className:"main"},r.a.createElement(C,{value:this.state.value,change:this.handleInputChange,submit:this.handleCitySubmit}),r.a.createElement(I,{weather:this.state})),r.a.createElement("div",{className:"sectionSecond"},r.a.createElement("div",{className:"chartApp"},r.a.createElement(O,{weatherDay:this.state}))))}}]),a}(n.Component),O=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.weatherDay,t=e.city,a=e.day1,n=e.day2,c=e.day3,s=e.day4,i=e.day5,l=e.temp1,o=e.temp2,m=e.temp3,d=e.temp4,p=e.temp5,h=e.err,v=null,b=null,y=(l-273.15).toFixed(2),g=(o-273.15).toFixed(2),f=(m-273.15).toFixed(2),E=(d-273.15).toFixed(2),N=(p-273.15).toFixed(2);return!h&&t?v=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"chartLine"},r.a.createElement(u.a,{data:{labels:["".concat(a),"".concat(n),"".concat(c),"".concat(s),"".concat(i)],datasets:[{label:"weather forecast",data:["".concat(y),"".concat(g),"".concat(f),"".concat(E),"".concat(N)],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:2}]}}))):b=r.a.createElement("div",null),r.a.createElement("div",{className:"chartReturn"},h?b:v)}}]),a}(n.Component),k=D;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},28:function(e,t,a){e.exports=a.p+"static/media/snow.813907df.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/rain.32f461b5.jpg"},49:function(e,t,a){e.exports=a.p+"static/media/sun.509c6848.jpg"},50:function(e,t,a){e.exports=a.p+"static/media/mist.6e6b261c.jpg"},51:function(e,t,a){e.exports=a.p+"static/media/cl.98030622.jpg"},52:function(e,t,a){e.exports=a.p+"static/media/cloud.154ab046.jpg"},53:function(e,t,a){e.exports=a(154)},58:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.89c11d50.chunk.js.map