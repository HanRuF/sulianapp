webpackJsonp([341],{"15+r":function(t,e,n){var i=n("w9rq");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("45065613",i,!0,{})},bC80:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("mvHQ"),a=n.n(i),r=n("Pexp"),s=n("Tg7E"),l={components:{cTitle:r.a},data:function(){return{language:{},trainNumber:[],jsonInfo:[],time:"",allTime:"",week:"",a:0,Obtain:"",popupVisible:!1,times:[],airlines:[],startAirports:[],endAirports:[]}},methods:{initTime:function(){var t=this.jsonInfo.date,e=new Date(Date.parse(t.replace(/-/g,"/"))).getTime(),n=new Date;n.setTime(e);var i=n.getFullYear(),a=n.getMonth()+1,r=n.getDate();a<10&&(a="0"+a),r<10&&(r="0"+r),this.allTime=i+"-"+a+"-"+r,this.time=a+"-"+r;var s=n.getDay();this.week=this.getWeek(s)},getYestoday:function(){var t=this.jsonInfo.date,e=new Date(Date.parse(t.replace(/-/g,"/"))).getTime()-864e5,n=new Date;n.setTime(e);var i=n.getFullYear(),a=n.getMonth()+1,r=n.getDate();a<10&&(a="0"+a),r<10&&(r="0"+r),this.allTime=i+"-"+a+"-"+r,this.time=a+"-"+r;var s=n.getDay();this.week=this.getWeek(s),this.jsonInfo.date=this.allTime,this.getData(this.allTime)},getNextday:function(){var t=this.jsonInfo.date,e=new Date(Date.parse(t.replace(/-/g,"/"))).getTime()+864e5,n=new Date;n.setTime(e);var i=n.getFullYear(),a=n.getMonth()+1,r=n.getDate();a<10&&(a="0"+a),r<10&&(r="0"+r),this.allTime=i+"-"+a+"-"+r,this.time=a+"-"+r;var s=n.getDay();this.week=this.getWeek(s),this.jsonInfo.date=this.allTime,this.getData(this.allTime)},getWeek:function(t){return 0==t&&(this.week="周日"),1==t&&(this.week="周一"),2==t&&(this.week="周二"),3==t&&(this.week="周三"),4==t&&(this.week="周四"),5==t&&(this.week="周五"),6==t&&(this.week="周六"),this.week},initLang:function(){sessionStorage.languageService?this.language=JSON.parse(sessionStorage.languageService).trainSearchResults:this.language=this.$store.state.service.languageService.trainSearchResults},getData:function(t){var e=this,n={date:t,fromStation:this.jsonInfo.fromStation,toStation:this.jsonInfo.toStation};$http.get("plugin.train.api.goods.trainLinesForASC",n,"查询中").then(function(t){if(1==t.result){var i={};i.data=t.data,i.json=n,localStorage.setItem("trainTicket",a()(i)),e.trainNumber=t.data.trainline}else s.MessageBox.alert(t.msg)},function(t){s.MessageBox.alert(t)})},toOrder:function(t){this.$router.push(this.fun.getUrl("trainFlightPrice",{id:t}))},chooseColor:function(t){for(var e=document.getElementById("trainSearchResults").getElementsByClassName("m-footer")[0].getElementsByTagName("li"),n=0;n<e.length;n++)e[n].className="";t.currentTarget.className="active","active"==e[1].className&&(this.popupVisible=!this.popupVisible),"active"==e[2].className&&this.sorting()},filterStyle:function(t){for(var e=document.getElementById("flyTime").getElementsByTagName("li"),n=0;n<e.length;n++)e[n].className="";t.currentTarget.className="fliterActive"},filterStyle2:function(t){for(var e=document.getElementById("airline").getElementsByTagName("li"),n=0;n<e.length;n++)e[n].className="";t.currentTarget.className="fliterActive"},filterStyle3:function(t){for(var e=document.getElementById("startAirport").getElementsByTagName("li"),n=0;n<e.length;n++)e[n].className="";t.currentTarget.className="fliterActive"},filterStyle4:function(t){for(var e=document.getElementById("endAirport").getElementsByTagName("li"),n=0;n<e.length;n++)e[n].className="";t.currentTarget.className="fliterActive"},popDisplay:function(){this.popupVisible=!this.popupVisible},reseted:function(){for(var t=document.getElementById("trainSearchResults").getElementsByClassName("content")[0].getElementsByTagName("li"),e=0;e<t.length;e++)t[e].className=""},confirm:function(){},sorting:function(){var t=document.getElementById("trainSearchResults").getElementsByClassName("flight")[0],e=t.getElementsByTagName("li"),n=this.a;n++,this.a=n;for(var i=[],a=0;a<e.length;a++)i[a]=e[a];i.sort(function(t,e){var i=parseInt(t.getElementsByClassName("sortNum")[0].innerHTML),a=parseInt(e.getElementsByClassName("sortNum")[0].innerHTML);return n%2!=0?i-a:a-i});for(a=0;a<i.length;a++)t.appendChild(i[a])}},computed:{getLangState:function(){return this.$store.state.service.languageService}},watch:{getLangState:function(t){this.language=t?JSON.parse(sessionStorage.languageService).trainSearchResults:this.$store.state.service.languageService.trainSearchResults}},mounted:function(){this.initLang()},activated:function(){if(this.$store.commit("onload"),localStorage.getItem("trainTicket")){var t=JSON.parse(localStorage.getItem("trainTicket"));this.trainNumber=t.data.trainline,this.jsonInfo=t.json,this.initTime()}else this.$router.go(-1)}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"trainSearchResults"+t.$store.state.service.lang,attrs:{id:"trainSearchResults"}},[n("c-title",{attrs:{hide:!1,text:t.jsonInfo.fromStation+" - "+t.jsonInfo.toStation}}),t._v(" "),n("div",{staticStyle:{height:"40px"}}),t._v(" "),n("div",{staticClass:"date"},[n("div",{staticClass:"left",on:{click:t.getYestoday}},["ch"==t.$store.state.service.lang?n("i",{staticClass:"fa fa-angle-left"}):n("i",{staticClass:"iconfont icon-right1"}),t._v(" "),n("span",[t._v("\n\t\t\t\t"+t._s(t.language.yestoday)+"\n\t\t\t")])]),t._v(" "),n("div",{staticClass:"center"},[n("i",{staticClass:"iconfont icon-rili"}),t._v(" "),n("span",{attrs:{id:"lang0"}},[t._v(t._s(t.time))]),t._v(" "),n("span",{attrs:{id:"week"}},[t._v(t._s(t.week))])]),t._v(" "),n("div",{staticClass:"right",on:{click:t.getNextday}},["ch"==t.$store.state.service.lang?n("i",{staticClass:"fa fa-angle-right"}):n("i",{staticClass:"iconfont icon-left11"}),t._v(" "),n("span",[t._v("\n\t\t\t\t"+t._s(t.language.nextDay)+"\n\t\t\t")])])]),t._v(" "),n("ul",{staticClass:"flight"},t._l(t.trainNumber,function(e,i){return n("li",{key:i,staticClass:"list",on:{click:function(e){return t.toOrder(i)}}},[n("div",{staticClass:"top"},[t._e(),t._v(" "),n("div",{staticClass:"flightNum"},[n("div",{staticClass:"time"},[n("span",{staticClass:"fromTime"},[t._v(t._s(e.startTime))]),t._v(" "),n("span",{staticClass:"addone"},[t._v(t._s(e.trainNumber))]),t._v(" "),n("span",{staticClass:"toTime"},[t._v(t._s(e.endTime))])]),t._v(" "),n("p",[n("span",{staticClass:"fromAddr"},[t._v(t._s(e.currentStartStationName))]),t._v(" "),n("span",{staticClass:"during"},[t._v(t._s(t._f("trainRunTime")(e.runTime)))]),t._v(" "),n("span",{staticClass:"toAddr"},[t._v(t._s(e.currentEndStationName))])])]),t._v(" "),e.min_price?n("div",{staticClass:"price"},[n("p",[n("span",[t._v("¥")]),t._v(" "),n("span",{staticClass:"sortNum"},[t._v(t._s(e.min_price))]),t._v(" "),n("small",[t._v("起")])])]):t._e()]),t._v(" "),n("div",{staticClass:"bottom_add"},[n("div",{staticClass:"addr"},[t._l(e.trainSeats.trainSeat,function(e){return[n("span",[t._v(t._s(e.seatName))]),t._v(" "),n("span",[t._v("("+t._s(e.remainderTrainTickets)+")")])]})],2)])])}),0),t._v(" "),t._e(),t._v(" "),n("mt-popup",{attrs:{position:"bottom"},model:{value:t.popupVisible,callback:function(e){t.popupVisible=e},expression:"popupVisible"}},[n("div",{staticClass:"pop"},[n("p",[n("span",{staticClass:"left",on:{click:t.popDisplay}},[t._v(t._s(t.language.cancel))]),t._v(" "),n("span",{on:{click:t.reseted}},[t._v(t._s(t.language.reseted))]),t._v(" "),n("span",{staticClass:"right"},[t._v(t._s(t.language.confirm))])]),t._v(" "),n("div",{staticClass:"content"},[n("p",[t._v(t._s(t.language.flyTime))]),t._v(" "),n("ul",{attrs:{id:"flyTime"}},t._l(t.times,function(e,i){return n("li",{key:i,on:{click:function(e){return t.filterStyle(e)}}},[t._v(t._s(e.flyTime))])}),0),t._v(" "),n("p",[t._v(t._s(t.language.airline))]),t._v(" "),n("ul",{attrs:{id:"airline"}},t._l(t.airlines,function(e,i){return n("li",{key:i,on:{click:function(e){return t.filterStyle2(e)}}},[t._v(" "+t._s(e.line))])}),0),t._v(" "),n("p",[t._v(t._s(t.language.startPort))]),t._v(" "),n("ul",{attrs:{id:"startAirport"}},t._l(t.startAirports,function(e,i){return n("li",{key:i,on:{click:function(e){return t.filterStyle3(e)}}},[t._v(t._s(e.port))])}),0),t._v(" "),n("p",[t._v(t._s(t.language.endPort))]),t._v(" "),n("ul",{attrs:{id:"endAirport"}},t._l(t.endAirports,function(e,i){return n("li",{key:i,on:{click:function(e){return t.filterStyle4(e)}}},[t._v(t._s(e.port))])}),0)])])])],1)},staticRenderFns:[]};var c=n("VU/8")(l,o,!1,function(t){n("15+r")},"data-v-6b1c0639",null);e.default=c.exports},w9rq:function(t,e,n){var i=n("kxFB");(t.exports=n("FZ+f")(!1)).push([t.i,"\n.active[data-v-6b1c0639] {\n  color: #1BBA9E;\n}\n.fliterActive[data-v-6b1c0639] {\n  background: #1BBA9E;\n  color: #fff;\n}\n*[data-v-6b1c0639] {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.trainSearchResultsch .date[data-v-6b1c0639] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0 0.875rem;\n  background: #fff;\n  overflow: hidden;\n  height: 2.8125rem;\n  line-height: 2.8125rem;\n  color: #f15353;\n  font-size: 14px;\n}\n.trainSearchResultsch .date .left i[data-v-6b1c0639] {\n    font-size: 24px;\n    float: left;\n    line-height: 2.8125rem;\n    color: #f15353;\n    margin-right: 0.625rem;\n}\n.trainSearchResultsch .date .left span[data-v-6b1c0639] {\n    float: right;\n    text-align: right;\n    line-height: 2.8125rem;\n}\n.trainSearchResultsch .date .left span b[data-v-6b1c0639] {\n      font-weight: normal;\n      font-size: 16px;\n}\n.trainSearchResultsch .date .center[data-v-6b1c0639] {\n    width: 7.5rem;\n    height: 1.625rem;\n    line-height: 1.625rem;\n    margin-top: 0.625rem;\n    border-radius: 0.25rem;\n    float: left;\n    border: solid 0.0625rem #f15353;\n}\n.trainSearchResultsch .date .right[data-v-6b1c0639] {\n    float: left;\n    text-align: right;\n}\n.trainSearchResultsch .date .right i[data-v-6b1c0639] {\n      font-size: 24px;\n      float: right;\n      line-height: 2.8125rem;\n      color: #f15353;\n      margin-left: 0.625rem;\n}\n.trainSearchResultsch .date .right span[data-v-6b1c0639] {\n      float: left;\n      text-align: right;\n      line-height: 2.8125rem;\n}\n.trainSearchResultsch .date .right span b[data-v-6b1c0639] {\n        font-weight: normal;\n        font-size: 16px;\n}\n.trainSearchResultsch .flight[data-v-6b1c0639] {\n  margin-bottom: 0.3125rem;\n}\n.trainSearchResultsch .flight a[data-v-6b1c0639] {\n    color: #333;\n}\n.trainSearchResultsch .flight .list[data-v-6b1c0639] {\n    margin: 0.375rem 0;\n}\n.trainSearchResultsch .flight .list .top[data-v-6b1c0639] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      padding: 0.625rem 0.875rem;\n      height: 5.625rem;\n      background: #fff;\n}\n.trainSearchResultsch .flight .list .top h4[data-v-6b1c0639] {\n        font-weight: normal;\n        text-align: left;\n        color: #49c6b0;\n}\n.trainSearchResultsch .flight .list .top .flightNum[data-v-6b1c0639] {\n        width: 68%;\n        float: left;\n}\n.trainSearchResultsch .flight .list .top .flightNum .time[data-v-6b1c0639] {\n          clear: both;\n          padding: 0.875rem 0 0;\n          line-height: 2.25rem;\n          overflow: hidden;\n          font-size: 20px;\n          background: url("+i(n("ilJb"))+") no-repeat 50% 1.75rem;\n          background-size: 3rem;\n          position: relative;\n}\n.trainSearchResultsch .flight .list .top .flightNum .time .fromTime[data-v-6b1c0639] {\n            float: left;\n            width: 6.25rem;\n            text-align: left;\n}\n.trainSearchResultsch .flight .list .top .flightNum .time .toTime[data-v-6b1c0639] {\n            float: right;\n            width: 6.25rem;\n            text-align: right;\n}\n.trainSearchResultsch .flight .list .top .flightNum .time .addone[data-v-6b1c0639] {\n            color: #333;\n            line-height: 18px;\n            font-size: 10px;\n            position: absolute;\n            top: 0.625rem;\n            left: 50%;\n            -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n}\n.trainSearchResultsch .flight .list .top .flightNum p[data-v-6b1c0639] {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          line-height: 1.125rem;\n          font-size: 12px;\n          color: #8c8c8c;\n          position: relative;\n}\n.trainSearchResultsch .flight .list .top .flightNum p .fromAddr[data-v-6b1c0639] {\n            float: left;\n            width: 6.25rem;\n            text-align: left;\n}\n.trainSearchResultsch .flight .list .top .flightNum p .toAddr[data-v-6b1c0639] {\n            float: right;\n            width: 6.25rem;\n            text-align: right;\n}\n.trainSearchResultsch .flight .list .top .flightNum p .during[data-v-6b1c0639] {\n            position: absolute;\n            top: -0.625rem;\n            left: 50%;\n            -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n}\n.trainSearchResultsch .flight .list .top .price[data-v-6b1c0639] {\n        width: 25%;\n        float: left;\n        text-align: right;\n}\n.trainSearchResultsch .flight .list .top .price p[data-v-6b1c0639] {\n          line-height: 4.25rem;\n          text-align: right;\n          font-size: 20px;\n          color: #f15353;\n}\n.trainSearchResultsch .flight .list .top .price p span[data-v-6b1c0639]:first-child {\n            font-size: 14px;\n}\n.trainSearchResultsch .flight .list .top .price p small[data-v-6b1c0639] {\n            font-size: 12px;\n            color: #8c8c8c;\n}\n.trainSearchResultsch .flight .list .bottom_add[data-v-6b1c0639] {\n      background: #fff;\n      height: 2.5rem;\n      line-height: 2.5rem;\n      font-size: 14px;\n      padding: 0 0.875rem;\n      text-align: left;\n      position: relative;\n}\n.trainSearchResultsch .flight .list .bottom_add .circle[data-v-6b1c0639] {\n        width: 1.25rem;\n        height: 1.25rem;\n        display: inline-block;\n        border-radius: 50%;\n        background: #eee;\n        position: absolute;\n}\n.trainSearchResultsch .flight .list .bottom_add .left[data-v-6b1c0639] {\n        top: -0.625rem;\n        left: -0.625rem;\n}\n.trainSearchResultsch .flight .list .bottom_add .right[data-v-6b1c0639] {\n        right: -0.625rem;\n        top: -0.625rem;\n}\n.trainSearchResultsch .flight .list .bottom_add .addr[data-v-6b1c0639] {\n        border-top: solid 0.0625rem #ebebeb;\n        color: #8c8c8c;\n}\n.trainSearchResultsch .flight .list .bottom_add .addr span[data-v-6b1c0639] {\n          padding: 0 0.125rem;\n}\n.trainSearchResultsch .m-footer[data-v-6b1c0639] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 2.5rem;\n  line-height: 2.5rem;\n  background: #fff;\n}\n.trainSearchResultsch .m-footer li[data-v-6b1c0639] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    width: 50%;\n    float: left;\n}\n.trainSearchResultsch .pop p[data-v-6b1c0639] {\n  text-align: center;\n  height: 2.5rem;\n  line-height: 2.5rem;\n  padding: 0 0.9375rem;\n  background: #F3F5F7;\n}\n.trainSearchResultsch .pop p .left[data-v-6b1c0639] {\n    float: left;\n}\n.trainSearchResultsch .pop p .right[data-v-6b1c0639] {\n    float: right;\n    color: #1BBA9E;\n}\n.trainSearchResultsch .pop .content[data-v-6b1c0639] {\n  margin-bottom: 0.625rem;\n}\n.trainSearchResultsch .pop .content p[data-v-6b1c0639] {\n    height: 1.5625rem;\n    line-height: 1.5625rem;\n    color: #999999;\n    font-size: 12px;\n    text-align: left;\n    background: #fff;\n}\n.trainSearchResultsch .pop .content ul[data-v-6b1c0639] {\n    overflow: hidden;\n    padding: 0 0.9375rem;\n    margin-bottom: 0.625rem;\n}\n.trainSearchResultsch .pop .content ul li[data-v-6b1c0639] {\n      height: 1.625rem;\n      line-height: 1.625rem;\n      border: 0.0625rem solid #ccc;\n      border-radius: 0.375rem;\n      padding: 0 1.125rem;\n      display: inline-block;\n      float: left;\n      margin-right: 0.625rem;\n      margin-top: 0.625rem;\n}\n.trainSearchResultswei .time[data-v-6b1c0639] {\n  padding: 0.9375rem;\n  background: #fff;\n  overflow: hidden;\n  height: 4.0625rem;\n  background: #1BBA9E;\n  color: #fff;\n}\n.trainSearchResultswei .time .left[data-v-6b1c0639] {\n    width: 22%;\n    float: right;\n    margin-left: 3%;\n}\n.trainSearchResultswei .time .left i[data-v-6b1c0639] {\n      float: right;\n      line-height: 2.1875rem;\n      color: #55E6CD;\n}\n.trainSearchResultswei .time .left span[data-v-6b1c0639] {\n      float: left;\n      text-align: left;\n      line-height: 2.125rem;\n}\n.trainSearchResultswei .time .center[data-v-6b1c0639] {\n    width: 50%;\n    height: 2.1875rem;\n    line-height: 2.1875rem;\n    border-radius: 0.3125rem;\n    float: right;\n    background: #158D78;\n}\n.trainSearchResultswei .time .right[data-v-6b1c0639] {\n    width: 22%;\n    float: right;\n    margin-right: 3%;\n}\n.trainSearchResultswei .time .right i[data-v-6b1c0639] {\n      float: left;\n      line-height: 2.1875rem;\n      color: #55E6CD;\n}\n.trainSearchResultswei .time .right span[data-v-6b1c0639] {\n      float: right;\n      text-align: right;\n      line-height: 2.125rem;\n}\n.trainSearchResultswei .flight[data-v-6b1c0639] {\n  margin-bottom: 4.375rem;\n}\n.trainSearchResultswei .flight a[data-v-6b1c0639] {\n    color: #333;\n}\n.trainSearchResultswei .flight li[data-v-6b1c0639] {\n    padding: 0 0.9375rem;\n    margin: 0.625rem 0;\n}\n.trainSearchResultswei .flight li .top[data-v-6b1c0639] {\n      height: 5.625rem;\n      background: #fff;\n      border-bottom: 0.0625rem dotted #ccc;\n      border-radius: 0.375rem;\n      padding: 0.3125rem 0.9375rem;\n}\n.trainSearchResultswei .flight li .top h4[data-v-6b1c0639] {\n        font-weight: normal;\n        text-align: right;\n        color: #49c6b0;\n}\n.trainSearchResultswei .flight li .top .flightNum[data-v-6b1c0639] {\n        width: 75%;\n        float: right;\n}\n.trainSearchResultswei .flight li .top .flightNum div[data-v-6b1c0639] {\n          height: 2.1875rem;\n          line-height: 2.1875rem;\n          overflow: hidden;\n          font-size: 18px;\n          background: url("+i(n("ilJb"))+") no-repeat 50% 0.8125rem;\n          position: relative;\n}\n.trainSearchResultswei .flight li .top .flightNum div .fromTime[data-v-6b1c0639] {\n            float: left;\n}\n.trainSearchResultswei .flight li .top .flightNum div .toTime[data-v-6b1c0639] {\n            float: right;\n}\n.trainSearchResultswei .flight li .top .flightNum div .addone[data-v-6b1c0639] {\n            font-size: 10px;\n            position: absolute;\n            top: -0.625rem;\n            left: 50%;\n            -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n}\n.trainSearchResultswei .flight li .top .flightNum p[data-v-6b1c0639] {\n          padding: 0 0.9375rem;\n          font-size: 13px;\n          position: relative;\n}\n.trainSearchResultswei .flight li .top .flightNum p .fromAddr[data-v-6b1c0639] {\n            float: left;\n}\n.trainSearchResultswei .flight li .top .flightNum p .toAddr[data-v-6b1c0639] {\n            float: right;\n}\n.trainSearchResultswei .flight li .top .flightNum p .during[data-v-6b1c0639] {\n            position: absolute;\n            top: -0.625rem;\n            left: 50%;\n            -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n}\n.trainSearchResultswei .flight li .top .price[data-v-6b1c0639] {\n        width: 25%;\n        float: right;\n        text-align: left;\n}\n.trainSearchResultswei .flight li .top .price p[data-v-6b1c0639] {\n          line-height: 2.1875rem;\n          font-size: 16px;\n          color: #FF951B;\n}\n.trainSearchResultswei .flight li .bottom_add[data-v-6b1c0639] {\n      background: #fff;\n      height: 1.875rem;\n      line-height: 1.875rem;\n      border-radius: 0.375rem;\n      position: relative;\n}\n.trainSearchResultswei .flight li .bottom_add .circle[data-v-6b1c0639] {\n        width: 1.25rem;\n        height: 1.25rem;\n        display: inline-block;\n        border-radius: 50%;\n        background: #eee;\n        position: absolute;\n}\n.trainSearchResultswei .flight li .bottom_add .left[data-v-6b1c0639] {\n        top: -0.625rem;\n        left: -0.625rem;\n}\n.trainSearchResultswei .flight li .bottom_add .right[data-v-6b1c0639] {\n        right: -0.625rem;\n        top: -0.625rem;\n}\n.trainSearchResultswei .flight li .bottom_add .addr span[data-v-6b1c0639] {\n        font-size: 12px;\n}\n.trainSearchResultswei .flight li .bottom_add .addr span[data-v-6b1c0639]:nth-child(2n) {\n        padding-left: 0.4375rem;\n}\n.trainSearchResultswei .m-footer[data-v-6b1c0639] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 2.5rem;\n  line-height: 2.5rem;\n  background: #fff;\n}\n.trainSearchResultswei .m-footer li[data-v-6b1c0639] {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    width: 33.3%;\n    float: left;\n}\n.trainSearchResultswei .pop p[data-v-6b1c0639] {\n  text-align: center;\n  height: 2.5rem;\n  line-height: 2.5rem;\n  padding: 0 0.9375rem;\n  background: #F3F5F7;\n}\n.trainSearchResultswei .pop p .left[data-v-6b1c0639] {\n    float: right;\n}\n.trainSearchResultswei .pop p .right[data-v-6b1c0639] {\n    float: left;\n    color: #1BBA9E;\n}\n.trainSearchResultswei .pop .content[data-v-6b1c0639] {\n  margin-bottom: 0.625rem;\n}\n.trainSearchResultswei .pop .content p[data-v-6b1c0639] {\n    height: 1.5625rem;\n    line-height: 1.5625rem;\n    color: #999999;\n    font-size: 12px;\n    text-align: right;\n    background: #fff;\n}\n.trainSearchResultswei .pop .content ul[data-v-6b1c0639] {\n    overflow: hidden;\n    padding: 0 0.9375rem;\n    margin-bottom: 0.625rem;\n}\n.trainSearchResultswei .pop .content ul li[data-v-6b1c0639] {\n      height: 1.625rem;\n      line-height: 1.625rem;\n      border: 0.0625rem solid #ccc;\n      border-radius: 0.375rem;\n      padding: 0 1.125rem;\n      display: inline-block;\n      float: right;\n      margin-right: 0.625rem;\n      margin-top: 0.625rem;\n}\n",""])}});