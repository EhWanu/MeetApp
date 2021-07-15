(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{200:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){},356:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(65),c=n.n(o),i=(n(200),n(18)),s=n(25),u=n(19),l=n(20),h=(n(201),n(202),n(6)),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showHideDetails:!1},e.handleShowButton=function(){!0===e.state.showHideDetails?e.setState({showHideDetails:!1}):e.setState({showHideDetails:!0})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(h.jsxs)("div",{className:"event",onClick:function(){return e.handleShowButton()},children:[Object(h.jsx)("h1",{className:"eventName",children:t.summary}),Object(h.jsx)("p",{className:"eventLocation",children:t.location}),this.state.showHideDetails&&Object(h.jsxs)("div",{className:"eventDetails",children:[Object(h.jsx)("h2",{children:"About event:"}),Object(h.jsx)("p",{children:t.description})]}),Object(h.jsx)("button",{className:"showDetailsButton",onClick:function(){return e.handleShowButton()},children:this.state.showHideDetails?"Hide Details":"Show Details"})]})}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(h.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(h.jsx)("li",{className:"eventItem",children:Object(h.jsx)(d,{event:e})},e.id)}))})}}]),n}(a.Component),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Alert",children:Object(h.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),v=p,m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t,0)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)("h1",{className:"eventTitle"}),Object(h.jsx)("label",{children:"Choose your nearest city"}),Object(h.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,placeholder:"Search for a city",onFocus:function(){e.setState({showSuggestions:!0})},onClick:function(){e.setState({showSuggestions:!0})}}),Object(h.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(h.jsx)("b",{children:"See all cities"})})]}),Object(h.jsx)(v,{text:this.state.infoText})]})}}]),n}(a.Component),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color="red",a}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Alert",children:Object(h.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={eventCount:32},e.handleEventInputChanged=function(t){var n=t.target.value;return n<1||n>32?e.setState({eventCount:"",errorText:"Select number between 1 and 32"}):void e.setState({eventCount:n,errorText:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"numberOfEvents",children:[Object(h.jsx)("label",{children:"Number of Events"}),Object(h.jsx)("input",{type:"number",name:"numberOfEvents",className:"numberOfEventsInput",value:this.state.eventCount,onChange:this.handleEventInputChanged}),Object(h.jsx)(j,{text:this.state.errorText})]})}}]),n}(a.Component),g=n(189),w=n(33),y=n.n(w),O=n(74),x=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],k=n(118),S=n.n(k),T=n(75),C=n.n(T),N=function(){var e=Object(O.a)(y.a.mark((function e(){var t,n,a,r,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return C.a.done(),e.abrupt("return",x);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),C.a.done(),e.abrupt("return",{events:JSON.parse(t).events,locations:E(JSON.parse(t).events)});case 8:return e.next=10,I();case 10:if(!(n=e.sent)){e.next=20;break}return Z(),a="https://gtujk48fb7.execute-api.us-east-2.amazonaws.com/dev/api/get-events/"+n,e.next=16,S.a.get(a);case 16:return(r=e.sent).data&&(o=E(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),C.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(e){var t=e.map((function(e){return e.location}));return Object(g.a)(new Set(t))},Z=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},D=function(){var e=Object(O.a)(y.a.mark((function e(t){var n,a,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(),n=encodeURIComponent(t),e.next=4,fetch("https://gtujk48fb7.execute-api.us-east-2.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 4:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(O.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",!n.error);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(O.a)(y.a.mark((function e(){var t,n,a,r,o,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("access_token");case 2:if(t=e.sent,e.t0=t,!e.t0){e.next=8;break}return e.next=7,A(t);case 7:e.t0=e.sent;case 8:if(n=e.t0,t&&n){e.next=23;break}return e.next=12,localStorage.removeItem("access_token");case 12:return a=new URLSearchParams(window.location.search),e.next=15,a.get("code");case 15:if(r=e.sent){e.next=22;break}return e.next=19,S.a.get("https://gtujk48fb7.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 19:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 22:return e.abrupt("return",r&&D(r));case 23:return e.abrupt("return",t);case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color="yellow",a}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Alert",children:Object(h.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),B=n(357),J=n(361),L=n(362),M=n(185),q=n(186),R=n(78),H=n(190),U=n(21),F=n(364),z=n(180),Y=n(93),_=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(U.a)(n,2),o=r[0],c=r[1];Object(a.useEffect)((function(){c((function(){return i()}))}),[t]);var i=function(){var e=t.map((function(e){return{eventSummary:e.summary}}));return["React","JavaScript","Node","jQuery","AngularJS"].map((function(t){var n=t,a=e.filter((function(e){return e.eventSummary.split(" ").includes(n)})).length;return{name:n,value:a}})).filter((function(e){return e.value>=1}))},s=["#fffff","#552c0c","#7f4514","#b98f68","#fffff"];return Object(h.jsx)(B.a,{height:400,width:"90%",children:Object(h.jsx)(F.a,{width:400,height:400,children:Object(h.jsx)(z.a,{data:o,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#fffff",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")},children:o.map((function(e,t){return Object(h.jsx)(Y.a,{fill:s[t]},"cell-".concat(t))}))})})})},P=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[]},e.updateEvents=function(t){N().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:a})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,navigator.onLine?this.setState({infoText:""}):this.setState({infoText:"You are in offline mode"}),N().then((function(t){e.mounted&&e.setState({events:t,locations:E(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state.events;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(W,{text:this.state.infoText}),Object(h.jsx)("h1",{className:"eventTitle",children:"MeetApp"}),Object(h.jsx)(m,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(h.jsx)(b,{updateEvents:this.updateEvents}),Object(h.jsx)("h1",{className:"chartLabel",children:"Events in each city"}),Object(h.jsxs)("div",{className:"data-vis-wrapper",children:[Object(h.jsx)(_,{events:e}),Object(h.jsx)(B.a,{height:400,children:Object(h.jsxs)(J.a,{margin:{top:30,right:30,bottom:5,left:0},children:[Object(h.jsx)(L.a,{}),Object(h.jsx)(M.a,{type:"category",dataKey:"city",name:"city"}),Object(h.jsx)(q.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),Object(h.jsx)(R.a,{cursor:{strokeDasharray:"3 3"}}),Object(h.jsx)(H.a,{data:this.getData(),fill:"#fffff"})]})})]}),Object(h.jsx)(f,{events:this.state.events})]})}}]),n}(a.Component),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,365)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))},X=n(187);c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetapp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetapp","/service-worker.js");G?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):K(t,e)}))}}(),X.config("06fa315d0e5b49e78979fafe64fc3703").install(),V()}},[[356,1,2]]]);
//# sourceMappingURL=main.35e496f7.chunk.js.map