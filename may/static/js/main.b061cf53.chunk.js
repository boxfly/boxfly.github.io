(this["webpackJsonpeasy-build-app"]=this["webpackJsonpeasy-build-app"]||[]).push([[0],{7:function(e,t,a){e.exports=a(8)},8:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(1),r=a(0),l=a.n(r),u=a(6),s=a.n(u),i=a(13),o=function(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],u=Object(r.useRef)(""),s=Object(r.useState)(""),i=Object(c.a)(s,2),o=i[0],m=i[1],E=Object(r.useState)(!1),v=Object(c.a)(E,2),p=v[0],g=v[1],j={name:a,setName:n,dateRef:u,msg:o,setMsg:m,msgModel:p,setMsgModel:g};return l.a.createElement("div",{className:"container"},l.a.createElement("header",{className:"ui-header ui-header-positive ui-border-b"},l.a.createElement("i",{className:"ui-icon-return"}),l.a.createElement("h1",null,"\u79ef\u5206app"),l.a.createElement("button",{className:"ui-btn"},"\u4e3b\u9875")),l.a.createElement("section",{className:"ui-container"},l.a.createElement("ul",{className:"ui-row ui-whitespace"},l.a.createElement("li",{className:"ui-col ui-col-100"},l.a.createElement("section",{id:"tab"},l.a.createElement("div",{className:"demo-item"},l.a.createElement("div",{className:"demo-block"},l.a.createElement("div",{className:"ui-tab",id:"tab1"},l.a.createElement("ul",{className:"ui-tab-nav ui-border-b"},l.a.createElement("li",{className:"current"},"\u65b0\u8bb0\u5f55"),l.a.createElement("li",null,"\u5168\u90e8\u8bb0\u5f55")),l.a.createElement("ul",{className:"ui-tab-content"},l.a.createElement(f.Provider,{value:j},l.a.createElement("li",null,l.a.createElement(d,null)),l.a.createElement("li",null,l.a.createElement(b,null))))))))))),l.a.createElement("footer",{className:"ui-footer ui-footer-btn"},l.a.createElement("ul",{className:"ui-tiled ui-border-t"},l.a.createElement("li",null,l.a.createElement("div",null,"\u8bb0\u65f6app")),l.a.createElement("li",null,l.a.createElement("div",null,"\u968f\u673aapp")),l.a.createElement("li",null,l.a.createElement("div",null,"\u94fe\u63a5\u6536\u85cf")))),l.a.createElement("div",{className:p?"ui-dialog show":"ui-dialog"},l.a.createElement("div",{className:"ui-dialog-cnt"},l.a.createElement("div",{className:"ui-dialog-bd"},l.a.createElement("p",null," ",o)),l.a.createElement("div",{className:"ui-dialog-ft"},l.a.createElement("button",{type:"button","data-role":"button",onClick:function(){g(!1)}},"\u786e\u5b9a")))))};function m(e){for(var t=Object(r.useContext)(f).dateRef,a=Object(r.useState)((new Date).getFullYear()),n=Object(c.a)(a,2),u=n[0],s=n[1],i=Object(r.useRef)((new Date).getFullYear()),o=Object(r.useState)([]),m=Object(c.a)(o,2),d=m[0],b=m[1],E=Object(r.useState)((new Date).getMonth()+1),v=Object(c.a)(E,2),p=v[0],g=v[1],j=Object(r.useRef)((new Date).getMonth()+1),O=Object(r.useState)([]),N=Object(c.a)(O,2),h=N[0],x=N[1],C=Object(r.useState)((new Date).getDate()),M=Object(c.a)(C,2),w=M[0],y=M[1],S=Object(r.useState)([]),_=Object(c.a)(S,2),k=_[0],D=_[1],R=[],I=(new Date).getFullYear(),T=[],W={28:[],29:[],30:[],31:[]},Y=I-5;Y<I+5;Y++)R.push(Y);for(Y=1;Y<=12;Y++)T.push(Y);for(Y=1;Y<=31;Y++)W[28].push(Y),W[29].push(Y),W[30].push(Y),W[31].push(Y);W[28].splice(28),W[29].splice(29),W[30].splice(30),Object(r.useEffect)((function(){b(R),x(T),D(W[3]),A(),t.current="".concat(u,"-").concat(p,"-").concat(w)}),[]);var A=function(){var e=new Date(i.current,j.current,0).getDate();D(W[e])};return l.a.createElement("div",{className:"data-group"},l.a.createElement("div",{className:"ui-select"},l.a.createElement("select",{value:u,onChange:function(e){var a=e.target.options[e.target.selectedIndex];i.current=a.value,s(a.value),t.current="".concat(a.value,"-").concat(p,"-").concat(w),A()}},d.map((function(e,t){return l.a.createElement("option",{key:"op"+t,index:t,value:e},e)}))),"\u5e74"),l.a.createElement("div",{className:"ui-select"},l.a.createElement("select",{value:p,onChange:function(e){var a=e.target.options[e.target.selectedIndex];j.current=a.value,g(a.value),t.current="".concat(u,"-").concat(a.value,"-").concat(w),A()}},h.map((function(e,t){return l.a.createElement("option",{key:"op"+t,index:t,value:e},e)}))),"\u6708"),l.a.createElement("div",{className:"ui-select"},l.a.createElement("select",{value:w,onChange:function(e){var a=e.target.options[e.target.selectedIndex];y(a.value),t.current="".concat(u,"-").concat(p,"-").concat(a.value)}},k.map((function(e,t){return l.a.createElement("option",{key:"op"+t,index:t,value:e},e)}))),"\u65e5"))}function d(e){var t=l.a.useContext(f),a=(t.name,t.setName,t.dateRef),n=(t.msg,t.setMsg),r=(t.msgModel,t.setMsgModel),u=l.a.useState(""),s=Object(c.a)(u,2),i=s[0],o=s[1],d=l.a.useState(""),b=Object(c.a)(d,2),v=b[0],p=b[1],g=l.a.useState(1),j=Object(c.a)(g,2),O=j[0],N=j[1],h=l.a.useState(""),x=Object(c.a)(h,2),C=x[0],M=x[1];l.a.useEffect((function(){w()}),[]);var w=function(){E.search("x_records_traget").then((function(e){p(e[0].id),o(e[0].attributes.target)}))},y=function(e){console.log(e),n(e),r(!0),setTimeout((function(){r(!1)}),2e3)};return l.a.createElement(f.Consumer,null,(function(e){return l.a.createElement("div",{className:"ui-form ui-border-t"},l.a.createElement("textarea",{className:"app-traget",value:i,onChange:function(e){!function(e){o(e.target.value)}(e)}}," "),l.a.createElement("div",{className:"ui-form ui-border-t"},l.a.createElement("div",{className:"ui-border-label"},l.a.createElement("label",null,"\u65e5\u671f:")," ",l.a.createElement("div",{className:"ui-select-group"}," ",l.a.createElement(m,null)," "))),l.a.createElement("div",{className:"ui-form ui-border-label"}," \u5206\u6570:",l.a.createElement("input",{value:O,onChange:function(e){!function(e){N(e.target.value)}(e)},className:"item-score",type:"number"})," "),"\u8bb0\u5f55: ",l.a.createElement("textarea",{className:"item-desc",value:C,onChange:function(e){!function(e){M(e.target.value)}(e)}}," "),l.a.createElement("button",{className:"ui-btn ui-btn-primary",onClick:function(){console.log(i,O,C,a.current),C.length>0?(E.createObj("x_records_score",{date:a.current,score:parseInt(O),desc:C}).then((function(e){M(""),y("\u6210\u529f\u6dfb\u52a0\u4e0e\u66f4\u65b0\u63cf\u8ff0")})),E.updateObj("x_records_traget",v,{target:i}).then((function(e){}))):E.updateObj("x_records_traget",v,{target:i}).then((function(e){y("\u6682\u65e0\u65b0\u5185\u5bb9,\u53ea\u66f4\u65b0\u76ee\u6807")}))}},"\u66f4\u65b0(update)"),l.a.createElement("br",null))}))}function b(e){var t=Object(r.useContext)(f),a=(t.name,t.setName,t.msg,t.setMsg),u=(t.msgModel,t.setMsgModel),s=Object(r.useRef)(0),i=Object(r.useState)(0),o=Object(c.a)(i,2),m=(o[0],o[1]),d=Object(r.useState)([]),b=Object(c.a)(d,2),v=b[0],p=b[1];Object(r.useEffect)((function(){g()}),[]);var g=function(){E.search("x_records_score").then((function(e){p(e),e.map((function(e,t){s.current+=e.attributes.score})),console.log(s.current,99),m(s.current)}))},j=function(e){console.log(e),a(e),u(!0),setTimeout((function(){u(!1)}),2e3)};return l.a.createElement(f.Consumer,null,(function(e){return l.a.createElement("div",null,l.a.createElement("button",{className:"ui-btn ui-btn-primary",onClick:function(){g()}},"\u52a0\u8f7d(load)"),"\u603b\u5171 ",v.length," \u6761\u8bb0\u5f55,\u83b7\u5f97  ",s.current," \u5206",l.a.createElement("br",null),l.a.createElement("hr",null),v.map((function(e,t){return l.a.createElement("div",{key:t,className:"list-item"},e.attributes.date,"  \u83b7\u5f97",l.a.createElement("span",null,e.attributes.score),"\u5206, \u8bb0\u5f55\u5982\u4e0b:  ",l.a.createElement("br",null),l.a.createElement("textarea",{value:e.attributes.desc,onChange:function(e){!function(e,t){var a=Object(n.a)(v);a[t].attributes.desc=e.target.value,p(a)}(e,t)}},"  "),l.a.createElement("button",{className:"ui-btn ui-btn-primary",onClick:function(){!function(e){var t=v[e];E.updateObj("x_records_score",t.id,{desc:t.attributes.desc}).then((function(e){j("\u6210\u529f\u66f4\u65b0")}))}(t)}},"\u66f4\u65b0"),l.a.createElement("button",{className:"ui-btn ui-btn-danger",onClick:function(){!function(e,t){E.delObj("x_records_score",e).then((function(e){j("\u6210\u529f\u5220\u9664");var a=Object(n.a)(v);a.splice(t,1),p(a)}))}(e.id,t)}},"\u5220\u9664"))})))}))}var f=Object(r.createContext)({});s.a.render(l.a.createElement(o,null),document.getElementById("example")),i.init("MW9UfmNmX0phVCcw2YCPQmye-MdYXbMMI","XslNotJgRdIcWVdNlTTWtCAv");var E={createObj:function(e,t){var a=new(i.Object.extend(e));for(var n in t)a.set(n,t[n]);return a.save()},updateObj:function(e,t,a){var n=i.Object.createWithoutData(e,t);for(var c in a)n.set(c,a[c]);return n.save()},search:function(e,t,a,n,c){t=t||0,a=a||20;var r=new i.Query(e);return r.skip(t),r.limit(a),n&&r.equalTo(n,c),r.addAscending("id"),r.addDescending("createdAt"),r.find()},delObj:function(e,t){return i.Object.createWithoutData(e,t).destroy()}}}},[[7,1,2]]]);
//# sourceMappingURL=main.b061cf53.chunk.js.map