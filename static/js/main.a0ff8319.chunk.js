(this["webpackJsonpreact_clock-hooks"]=this["webpackJsonpreact_clock-hooks"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(4),o=c.n(n),a=c(5),i=c(6),s=c(8),r=c(7),l=c(1),u=c.n(l),d=c(3),m=c(0),k=function(e){var t=e.clockName,c=Object(l.useState)(new Date),n=Object(d.a)(c,2),o=n[0],a=n[1],i=Object(l.useState)(t),s=Object(d.a)(i,2),r=s[0],u=s[1];return Object(l.useEffect)((function(){var e=window.setInterval((function(){a(new Date),console.info((new Date).toUTCString().slice(-12,-4))}),1e3);return function(){window.clearInterval(e)}}),[]),Object(l.useEffect)((function(){r!==t&&(console.debug("Renamed to ".concat(t)),u(t))}),[t]),Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:t}),Object(m.jsx)("span",{children:" time is "}),Object(m.jsx)("span",{className:"Clock__time",children:o.toUTCString().slice(-12,-4)})]})};c(14);function h(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var j=function(e){Object(s.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={hasClock:!0,clockName:"Clock-0"},e.timer=void 0,e.addClock=function(){e.setState({hasClock:!0})},e.hideClock=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.timerId=function(){e.setState({clockName:h()})},e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.addClock),document.addEventListener("contextmenu",this.hideClock),this.timer=window.setInterval(this.timerId,3300)}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timer),document.removeEventListener("click",this.addClock),document.removeEventListener("contextmenu",this.hideClock)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,c=e.clockName;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),t&&Object(m.jsx)(k,{clockName:c})]})}}]),c}(u.a.Component);o.a.render(Object(m.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a0ff8319.chunk.js.map