(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/BeepSound.988833bf.wav"},17:function(e,t,a){"use strict";a.d(t,"a",function(){return n});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function n(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},18:function(e,t,a){"use strict";var n=a(4),r=a(5),i=a(7),s=a(6),m=a(8),c=a(0),l=a.n(c),o=a(2),u=a(12),d=a.n(u),h=0,b=a(13),p=a.n(b),T=function(e){return e<10?"0".concat(e):"".concat(e)},v=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"row mx-auto"},2===e.timerState&&l.a.createElement("audio",{id:"alarm",src:p.a,type:"audio/mp3",autoPlay:!0}),1===e.timerState&&l.a.createElement("audio",{id:"alarm",src:p.a,type:"audio/mp3",autoPlay:!0})),l.a.createElement("div",{className:"timer",style:e.alarmColor},l.a.createElement("div",{className:"timer-wrapper"},l.a.createElement("div",{className:"timer-label"},e.timerType),l.a.createElement("div",{className:"time-counter"},"".concat(T(e.currentTime.get("minutes")),":").concat(T(e.currentTime.get("seconds")))))))},E=a(3),k=a(10),y=a(11);k.b.add(y.c,y.e,y.b);var f=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this))).getButton=e.getButton.bind(Object(o.a)(e)),e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"getButton",value:function(){return l.a.createElement(c.Fragment,null,l.a.createElement("button",{disabled:!this.props.enablePlay,className:"btn-media",onClick:this.props.startTimer},l.a.createElement(E.a,{icon:"play"})),l.a.createElement("button",{className:"btn-media mx-auto",onClick:this.props.stopTimer},l.a.createElement(E.a,{icon:"stop"})),l.a.createElement("button",{className:"btn-media",onClick:this.props.pauseTimer},l.a.createElement(E.a,{icon:"pause"})))}},{key:"render",value:function(){return l.a.createElement("div",{className:"media-container"},this.getButton())}}]),t}(c.Component);k.b.add(y.a,y.d);var g=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement(c.Fragment,null,l.a.createElement("div",{className:"set-timer"},l.a.createElement("h2",{className:"mx-auto"},"SET TIMER")),l.a.createElement("div",{className:"row set-timer"},l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("label",{htmlFor:"sessionID"},"Session Length")),l.a.createElement("div",{className:"col-sm-1"},l.a.createElement("button",{className:"btn-level",onClick:this.props.decrementTimer},l.a.createElement(E.a,{icon:"minus-circle"}))),l.a.createElement("div",{className:"col-sm-1"},l.a.createElement("div",{className:"d-inline",id:"sessionID"},this.props.baseTime.get("minutes"))),l.a.createElement("div",{className:"col-sm-1"},l.a.createElement("button",{className:"btn-level",onClick:this.props.incrementTimer},l.a.createElement(E.a,{icon:"plus-circle"}))),l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("label",{htmlFor:"breakID"},"Break Length")),l.a.createElement("div",{className:"col-sm-1"},l.a.createElement("button",{className:"btn-level",onClick:this.props.decrementBreak},l.a.createElement(E.a,{icon:"minus-circle"}))),l.a.createElement("div",{className:"col-sm-1"},l.a.createElement("div",{className:"d-inline",id:"breakID"},this.props.breakLength)),l.a.createElement("div",{className:"col-sm-1"},l.a.createElement("button",{className:"btn-level",onClick:this.props.incrementBreak},l.a.createElement(E.a,{icon:"plus-circle"})))),l.a.createElement("div",{className:"row set-timer"},l.a.createElement("div",{className:"developer mx-auto"}," Designed and Coded by ",l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/jesussanzdev"},"Jes\xfas Sanz"))))}}]),t}(c.Component),S=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(i.a)(this,Object(s.a)(t).call(this))).state={currentTime:d.a.duration(25,"minutes"),baseTime:d.a.duration(25,"minutes"),breakLength:4,currentBreakLength:4,timerState:h,timerType:"SESSION",enablePlay:!0,timer:null,alarmColor:{color:"rgb(238, 231, 238)"}},e.setBaseTime=e.setBaseTime.bind(Object(o.a)(e)),e.startTimer=e.startTimer.bind(Object(o.a)(e)),e.stopTimer=e.stopTimer.bind(Object(o.a)(e)),e.reduceTimer=e.reduceTimer.bind(Object(o.a)(e)),e.pauseTimer=e.pauseTimer.bind(Object(o.a)(e)),e.completeTimer=e.completeTimer.bind(Object(o.a)(e)),e.decrementTimer=e.decrementTimer.bind(Object(o.a)(e)),e.incrementTimer=e.incrementTimer.bind(Object(o.a)(e)),e.decrementBreak=e.decrementBreak.bind(Object(o.a)(e)),e.incrementBreak=e.incrementBreak.bind(Object(o.a)(e)),e}return Object(m.a)(t,e),Object(r.a)(t,[{key:"setBaseTime",value:function(e){this.setState({baseTime:e,currentTime:e})}},{key:"setBreakLength",value:function(e){this.setState({breakLength:e,currentBreakLength:e})}},{key:"startTimer",value:function(){2===this.state.timerState?this.setState({currentTime:d.a.duration(this.state.currentBreakLength,"minutes"),timerType:"BREAK",timerState:null,timer:setInterval(this.reduceTimer,1e3),enablePlay:!1}):this.setState({timerState:1,timerType:"SESSION",timer:setInterval(this.reduceTimer,1e3),enablePlay:!1})}},{key:"stopTimer",value:function(){this.state.timer&&clearInterval(this.state.timer),this.setState({timerState:h,timer:null,timerType:"SESSION",alarmColor:{color:"rgb(238, 231, 238)"},currentTime:d.a.duration(this.state.baseTime),enablePlay:!0})}},{key:"pauseTimer",value:function(){this.state.timer&&clearInterval(this.state.timer),this.setState({timer:null,enablePlay:!0})}},{key:"reduceTimer",value:function(){if(0!==this.state.currentTime.get("minutes")||0!==this.state.currentTime.get("seconds")){var e=d.a.duration(this.state.currentTime);e.subtract(1,"seconds"),this.warning(e),this.setState({currentTime:e})}else this.completeTimer()}},{key:"completeTimer",value:function(){this.state.timer&&clearInterval(this.state.timer),1===this.state.timerState?(this.setState({timerState:2,timer:null}),this.startTimer()):(this.setState({currentTime:d.a.duration(this.state.baseTime,"minutes"),timerState:1,timer:null}),this.startTimer())}},{key:"decrementTimer",value:function(){var e=this.state.baseTime;e.get("minutes")>1?(e.subtract(1,"minutes"),this.setBaseTime(e)):1===e.get("minutes")&&(e.add(parseInt(58,10),"minutes"),this.setBaseTime(e))}},{key:"incrementTimer",value:function(){var e=this.state.baseTime;59===e.get("minutes")&&e.add(parseInt(1,10),"minutes"),e.add(parseInt(1,10),"minutes"),this.setBaseTime(e)}},{key:"decrementBreak",value:function(){var e=this.state.breakLength;e>1?(e-=1,this.setBreakLength(e)):1===e&&(e=9,this.setBreakLength(e))}},{key:"incrementBreak",value:function(){var e=this.state.breakLength;e<9?(e+=1,this.setBreakLength(e)):9===e&&(e=1,this.setBreakLength(e))}},{key:"warning",value:function(e){e.get("minutes")<1?this.setState({alarmColor:{color:"rgb(255, 150, 150) "}}):this.setState({alarmColor:{color:"rgb(238, 231, 238)"}})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement(v,{currentTime:this.state.currentTime,timerState:this.state.timerState,timerType:this.state.timerType,alarmColor:this.state.alarmColor}),l.a.createElement(f,{enablePlay:this.state.enablePlay,startTimer:this.startTimer,stopTimer:this.stopTimer,pauseTimer:this.pauseTimer,timerState:this.state.timerState}),this.state.timerState===h&&l.a.createElement(g,{baseTime:this.state.baseTime,breakLength:this.state.breakLength,decrementTimer:this.decrementTimer,incrementTimer:this.incrementTimer,decrementBreak:this.decrementBreak,incrementBreak:this.incrementBreak}))}}]),t}(c.Component),O=(a(33),function(){return l.a.createElement("div",{className:"row"},l.a.createElement("h1",{className:"mx-auto"},"POMODORO TIMER"))}),N=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"panel panel-default app-content d-block mx-auto"},l.a.createElement("div",{className:"panel-body"},l.a.createElement(O,null),l.a.createElement(S,null)))}}]),t}(c.Component);t.a=N},19:function(e,t,a){e.exports=a(20)},20:function(e,t,a){"use strict";a.r(t),function(e){a(21);var t=a(0),n=a.n(t),r=a(16),i=a.n(r),s=(a(26),a(18)),m=a(17);e.jQuery=a(15),a(34),i.a.render(n.a.createElement(s.a,null),document.getElementById("root")),m.a()}.call(this,a(9))},26:function(e,t,a){},33:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.6c653e6e.chunk.js.map