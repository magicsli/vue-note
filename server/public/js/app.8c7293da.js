(function(e){function t(t){for(var n,r,o=t[0],c=t[1],u=t[2],f=0,d=[];f<o.length;f++)r=o[f],s[r]&&d.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},s={app:0},i=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"30bc":function(e,t,a){},"4be9":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("66b9");var n=a("b650"),s=(a("5246"),a("6b41")),i=(a("e7e5"),a("d399")),r=(a("c3a6"),a("ad06")),o=(a("e566"),a("5d26")),c=(a("1f87"),a("510b")),u=(a("77f8"),a("dc0f")),l=(a("0653"),a("34e9")),f=(a("be7f"),a("565f")),d=(a("8a58"),a("e41f")),h=(a("d1cf"),a("ee83")),m=(a("5d17"),a("f9bd")),g=(a("342a"),a("1437")),p=(a("9a83"),a("f564")),v=(a("3647"),a("ea47")),w=(a("cadf"),a("551c"),a("f751"),a("097d"),a("2b0e")),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("base-header",{attrs:{cut:e.getToday}}),a("container",{attrs:{username:e.username,rate:e.rate[2],messageList:e.messageList}}),a("base-footer",{attrs:{rate:e.rate,username:e.username,updateList:e.updateList}}),a("van-popup",{attrs:{"close-on-click-overlay":!1},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("van-cell-group",[a("van-field",{attrs:{required:"",clearable:"",label:"用户名","right-icon":"question-o",placeholder:"请输入用户名"},on:{"click-right-icon":function(t){return e.$toast("用户名由3-15位字母或者数字组成\n 密码由4-10为字母或数字组成")}},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),a("van-field",{attrs:{type:e.isShow?"text":"password",label:"密码",placeholder:"请输入密码","right-icon":e.isShow?"eye-o":"closed-eye",required:""},on:{"click-right-icon":function(t){e.isShow=!e.isShow}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("van-field",{directives:[{name:"show",rawName:"v-show",value:e.isRegister,expression:"isRegister"}],attrs:{type:e.isShow2?"text":"password",label:"确认密码",placeholder:"请再次输入密码","right-icon":e.isShow2?"eye-o":"closed-eye",required:""},on:{"click-right-icon":function(t){e.isShow2=!e.isShow2}},model:{value:e.verifyPassword,callback:function(t){e.verifyPassword=t},expression:"verifyPassword"}})],1),a("div",{staticClass:"button-box"},[a("van-button",{attrs:{type:"primary",size:"large"},on:{click:e.sumbit}},[e._v(e._s(e.isRegister?"注册":"登录"))]),a("span",{on:{click:this.switch}},[e._v(e._s(e.isRegister?"立即登录":"还没有账号"))])],1)],1)],1)},y=[],k=(a("96cf"),a("3b8d")),x=(a("ac6a"),a("55dd"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"basefooter"},[a("van-button",{ref:"button",attrs:{round:"",size:"small",type:"primary"},on:{click:e.handleRotate}},[a("van-icon",{attrs:{name:"plus",size:"24px"}})],1),a("van-circle",{attrs:{color:"#07c160",fill:"#fff",size:"22vw","layer-color":"#ebedf0",text:e.text,rate:e.setRate,speed:100,clockwise:!1,"stroke-width":40},model:{value:e.currentRate,callback:function(t){e.currentRate=t},expression:"currentRate"}}),a("van-popup",{attrs:{position:"right","close-on-click-overlay":!1},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("van-collapse",{staticStyle:{width:"calc(90vw)","margin-right":"calc(5vw)"},attrs:{accordion:""},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("van-collapse-item",{attrs:{title:"设置行程时间",name:"1"}},[a("van-datetime-picker",{attrs:{"show-toolbar":!1,change:e.isChange=!0,type:"time"},model:{value:e.currentTime,callback:function(t){e.currentTime=t},expression:"currentTime"}})],1),a("van-collapse-item",{attrs:{title:"出行日期",name:"2"}},[a("van-datetime-picker",{attrs:{"show-toolbar":!1,change:e.isChange=!0,type:"date","min-date":new Date((new Date).getFullYear(),0,1),"max-date":new Date((new Date).getFullYear(),11,31)},model:{value:e.currentDate,callback:function(t){e.currentDate=t},expression:"currentDate"}})],1)],1),a("van-cell-group",[a("van-field",{staticStyle:{width:"calc(90vw)","margin-right":"calc(5vw)"},attrs:{label:"待办事宜",type:"textarea",placeholder:"不能超过30个字符",rows:"2",autosize:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),a("div",{staticClass:"addbox"},[a("van-button",{staticClass:"time-btn",attrs:{size:"small",type:"danger"},on:{click:e.handleRotate}},[e._v("取消")]),a("van-button",{staticClass:"time-btn",attrs:{size:"small",type:"info"},on:{click:e.incrementMess}},[e._v("添加")])],1)],1)],1)}),T=[],D=(a("456d"),a("bc3a")),_=a.n(D);function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="";return Object.keys(t).forEach(function(e){n+=e+"="+t[e]+"&"}),""===n&&n.substring(0,n.length-1),"GET"===a?_.a.get(e+"?"+n):_.a.post(e,t)}var S=function(e){return L("/login",e,"POST")},R=function(e){return L("/register",e,"POST")},C=function(e){return L("/increment",e,"POST")},O=function(){return L("/auto")},M=function(e){return L("/remove",e)},j=function(e){return L("/changeState",e,"POST")},P={data:function(){return{currentRate:0,show:!1,message:"",currentTime:"12:00",currentDate:new Date,activeName:"12",isChange:!1}},props:{username:String,updateList:Function,rate:Array},methods:{incrementMess:function(){var e=this,t=this.message.trim();if(console.log(t),t&&this.isChange)if(t.length>30)i["a"].fail("输入请不要超过30个字符");else{var a=this.currentDate.getFullYear(),n=this.currentDate.getMonth()+1,s=this.currentDate.getDate(),r=a+"/"+n+"/"+s+"\t"+this.currentTime+":00",o=new Date(r).getTime();if(o<=Date.now())i["a"].fail("行程时间不能小于现在时间");else{var c=this.username;this.handleRotate(),C({username:c,message:t,toTime:o}).then(function(t){var a=0===t.data.code;Object(p["a"])({message:t.data.msg,duration:1e3,background:a?"#07c160":"#c5c5c5"}),e.updateList(t.data.mes)}),this.isChange=!1}}else i["a"].fail("输入不能为空")},handleRotate:function(){this.$refs.button.style.transform=this.show?"rotate(90deg)":"rotate(-90deg)",this.show=!this.show,this.message="",this.currentTime="12:00",this.currentDate=new Date}},computed:{text:function(){return this.currentRate.toFixed(0)+"%"},setRate:function(){var e=this.rate[0]/this.rate[1]*100;return e=isNaN(e)?0:e,e}},watch:{}},z=P,$=(a("ab20"),a("2877")),E=Object($["a"])(z,x,T,!1,null,"2e39b821",null),F=E.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"baseheader"},[a("van-nav-bar",{attrs:{title:e.bool?"全部事宜":"今日事宜","left-text":e.bool?"今天事宜":"全部事宜","left-arrow":""},on:{"click-left":e.onClickLeft,"click-right":e.onClickRight}},[a("van-icon",{attrs:{slot:"right",name:"smile-o",size:"18px"},slot:"right"})],1)],1)},A=[],q={data:function(){return{bool:!0}},props:{cut:Function},methods:{onClickLeft:function(){this.cut(this.bool),this.bool=!this.bool},onClickRight:function(){Object(i["a"])(" 作者: MagicSli \nQQ: 2544510157")}}},Y=q,H=(a("e82f"),Object($["a"])(Y,N,A,!1,null,"b3b87e8e",null)),Z=H.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"container",staticClass:"container"},[a("van-steps",{attrs:{direction:"vertical",active:e.rate},on:{click:function(t){return e.handleUpdate()}}},e._l(e.messageList,function(t){return a("van-step",{key:t.recordTime},[a("van-panel",{class:e._f("getClass")(t),staticStyle:{width:"80%"},attrs:{title:t.message,desc:e._f("getTime")(t.toTime),status:e._f("getState")(t)}},[a("div",{attrs:{slot:"footer"},slot:"footer"},[a("van-button",{attrs:{plain:"",hairline:"",size:"mini",type:"primary"},on:{click:function(a){return e.handleChange(t._id,t)}}},[e._v(e._s(t.state?"未完成":"完成"))]),a("van-button",{attrs:{plain:"",hairline:"",size:"mini",type:"danger"},on:{click:function(a){return e.handleRemove(t._id,t)}}},[e._v("删除")])],1)])],1)}),1)],1)},J=[],Q=(a("c5f6"),a("1fba")),U={props:{messageList:Array,rate:Number,username:String},mounted:function(){new Q["a"](this.$refs.container)},filters:{getTime:function(e){var t=new Date(e),a=t.getMinutes()/10<=1?"0"+t.getMinutes():t.getMinutes();return"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate(),"\t\n            ").concat(t.getHours(),":").concat(a)},getState:function(e){var t=e.state,a=e.toTime;return t?"已完成":a<=Date.now()?"未完成":"待办"},getClass:function(e){var t=e.state,a=e.toTime;return t?"resolve":a<=Date.now()?"reject":"pending"}},methods:{handleRemove:function(e,t){var a=this;M({username:this.username,_id:e}).then(function(e){if(0===e.data.code){var n=a.messageList.indexOf(t);i["a"].loading({mask:!0,duration:800,message:"loading...",onClose:function(){a.messageList.splice(n,1)}})}})},handleChange:function(e,t){var a=j({_id:e,state:!t.state});i["a"].loading({mask:!0,duration:800,message:"loading...",onClose:function(){a.then(function(e){0===e.data.code&&(t.state=!t.state)})}})}}},B=U,I=(a("8cee"),Object($["a"])(B,G,J,!1,null,"d66c3686",null)),K=I.exports,V={name:"app",data:function(){return{show:!1,isShow:!1,isShow2:!1,isRegister:!1,username:"",password:"",verifyPassword:"",messageList:[],waitMessageList:[]}},components:{baseFooter:F,baseHeader:Z,container:K},methods:{switch:function(){this.isRegister=!this.isRegister,this.username="",this.password=""},sumbit:function(){var e=this,t=this.username.trim(),a=this.password.trim();t&&a?/^[a-zA-Z][a-zA-Z0-9]{3,15}$/.test(t)?/^[a-zA-Z0-9]{4,10}$/.test(a)?this.isRegister&&this.verifyPassword!==a?i["a"].fail("两次密码输入不一致"):this.isRegister?R({username:t,password:a}).then(function(t){0===t.data.code&&O().then(function(t){0===t.data.code&&(console.log(123456789),i["a"].loading({mask:!0,duration:800,message:"loading...",onClose:function(){e.messageList=t.data.data.sort(function(e,t){return e.toTime-t.toTime}),e.show=!1}}))})}):S({username:t,password:a}).then(function(t){0===t.data.code&&(e.messageList=t.data.data.sort(function(e,t){return e.toTime-t.toTime}),i["a"].loading({mask:!0,duration:800,message:"loading...",onClose:function(){e.show=!1}}))}):i["a"].fail("密码不能含有非法字符，长度在4-10之间"):i["a"].fail("用户名不正确"):i["a"].fail("用户名与密码不能为空")},auto:function(){var e=this;O().then(function(t){0===t.data.code?(e.messageList=t.data.data.sort(function(e,t){return e.toTime-t.toTime}),e.username=t.data.username):e.show=!0})},updateList:function(e){this.messageList.push(e),this.messageList.sort(function(e,t){return e.toTime-t.toTime})},getToday:function(e){var t=this;i["a"].loading({mask:!0,duration:800,message:"loading...",onClose:function(){var a=[t.messageList,t.waitMessageList];t.waitMessageList=a[0],t.messageList=a[1],e&&(t.messageList=t.waitMessageList.filter(function(e){if(new Date(e.toTime).getDate()===new Date(Date.now()).getDate()&&new Date(e.toTime).getMonth()===new Date(Date.now()).getMonth())return!0}))}})}},computed:{rate:function(){var e=0,t=0,a=new Date(Date.now());a.getDate(),a.getMonth(),a.getHours(),a.getMinutes();return this.messageList.forEach(function(a,n){return a.toTime<Date.now()&&(t=n),a.state&&e++,!0}),console.log(e,t),[e,this.messageList.length,t]}},created:function(){var e=Object(k["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:-1!==document.cookie.indexOf("userid")?this.auto():this.$nextTick(function(){t.show=!0});case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},W=V,X=(a("7faf"),Object($["a"])(W,b,y,!1,null,null,null)),ee=X.exports;w["a"].use(n["a"]).use(s["a"]).use(i["a"]).use(r["a"]).use(o["a"]).use(c["a"]).use(u["a"]).use(l["a"]).use(f["a"]).use(d["a"]).use(h["a"]).use(m["a"]).use(g["a"]).use(p["a"]).use(v["a"]),w["a"].config.productionTip=!1,new w["a"]({render:function(e){return e(ee)}}).$mount("#app")},"7faf":function(e,t,a){"use strict";var n=a("8fba"),s=a.n(n);s.a},"8cee":function(e,t,a){"use strict";var n=a("4be9"),s=a.n(n);s.a},"8fba":function(e,t,a){},ab20:function(e,t,a){"use strict";var n=a("ec3a"),s=a.n(n);s.a},e82f:function(e,t,a){"use strict";var n=a("30bc"),s=a.n(n);s.a},ec3a:function(e,t,a){}});
//# sourceMappingURL=app.8c7293da.js.map