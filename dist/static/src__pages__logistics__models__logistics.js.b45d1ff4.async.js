webpackJsonp([6],{fSis:function(e,t,a){"use strict";function n(e){var t=e.page,a=e.deliver_status,n=e.find_str,r=new FormData;return r.append("page",t),r.append("limit",k.c),r.append("deliver_status",a),r.append("find_str",n),Object(w.a)("".concat(k.a,"/home/logistics/deliver-list"),{method:"POST",body:r})}function r(e){var t=e.page,a=e.find_str,n=e.stime,r=e.etime,i=new FormData;return i.append("page",t),i.append("limit",k.c),i.append("find_str",a),i.append("stime",n?n.format("YYYY-MM-DD"):""),i.append("etime",r?r.format("YYYY-MM-DD"):""),Object(w.a)("".concat(k.a,"/home/logistics/deliver-fee"),{method:"POST",body:i})}function i(e){var t=e.id,a=new FormData;return a.append("id",t),Object(w.a)("".concat(k.a,"/home/logistics/deliver-info"),{method:"POST",body:a})}function c(e){var t=e.id,a=new FormData;return a.append("id",t),Object(w.a)("".concat(k.a,"/home/logistics/cancel-dispatch"),{method:"POST",body:a})}function o(e){var t=e.id,a=new FormData;return a.append("id",t),Object(w.a)("".concat(k.a,"/home/logistics/recv"),{method:"POST",body:a})}function s(e){var t=e.id,a=new FormData;return a.append("id",t),Object(w.a)("".concat(k.a,"/home/logistics/refuse"),{method:"POST",body:a})}function d(){return Object(w.a)("".concat(k.a,"/home/select/logistics-company"),{method:"POST"})}function p(e){var t=e.logistic_company,a=new FormData;return a.append("logistic_company",t),Object(w.a)("".concat(k.a,"/home/select/car"),{method:"POST",body:a})}function u(e){var t=e.form,a=new FormData;return O()(t).forEach(function(e,n){a.append(e,t[e])}),Object(w.a)("".concat(k.a,"/home/logistics/dispatch"),{method:"POST",body:a})}function l(e){var t=e.file,a=e.id,n=e.load_type,r=e.num,i=e.load_time,c=new FormData;return c.append(t.filename,t.file),c.append("id",a),c.append("load_type",n),c.append("load_time",i),c.append("num",r),Object(w.a)(t.action,{method:"POST",body:c})}function m(e){var t=e.file,a=e.id,n=e.load_type,r=e.num,i=e.unload_time,c=new FormData;return c.append(t.filename,t.file),c.append("id",a),c.append("load_type",n),c.append("unload_time",i),c.append("num",r),Object(w.a)(t.action,{method:"POST",body:c})}function f(e){var t=e.id,a=e.load_num,n=e.unload_num,r=new FormData;return r.append("id",t),r.append("load_num",a),r.append("unload_num",n),Object(w.a)("".concat(k.a,"/home/logistics/confirm-bill"),{method:"POST",body:r})}function v(e){var t=e.page,a=e.find_str,n=e.stime,r=e.etime,i=e.conversion,c=new FormData;return c.append("page",t),c.append("limit",k.c),c.append("find_str",a),i?(c.append("stime",n),c.append("etime",r)):(c.append("stime",n?n.format("YYYY-MM-DD"):""),c.append("etime",r?r.format("YYYY-MM-DD"):"")),Object(w.a)("".concat(k.a,"/home/logistics/deliver-account"),{method:"POST",body:c})}function b(e){var t=e.page,a=e.find_str,n=e.stime,r=e.etime,i=e.conversion,c=e.id,o=new FormData;return o.append("page",t),o.append("limit",k.c),o.append("find_str",a),o.append("id",c),i?(o.append("stime",n),o.append("etime",r)):(o.append("stime",n?n.format("YYYY-MM-DD"):""),o.append("etime",r?r.format("YYYY-MM-DD"):"")),Object(w.a)("".concat(k.a,"/home/logistics/deliver-account-detailed"),{method:"POST",body:o})}function g(e){var t=e.page,a=e.find_str,n=(e.stime,e.etime,new FormData);return n.append("page",t),n.append("limit",k.c),n.append("find_str",a),Object(w.a)("".concat(k.a,"/home/logistics/deliver-account-log"),{method:"POST",body:n})}function y(e){var t=e.id,a=new FormData;return a.append("id",t),Object(w.a)("".concat(k.a,"/home/logistics/confirm-deliver-account"),{method:"POST",body:a})}function h(e){var t=e.id,a=new FormData;return a.append("id",t),Object(w.a)("".concat(k.a,"/home/logistics/delete-deliver-account"),{method:"POST",body:a})}function D(){return Object(w.a)("".concat(k.a,"/home/select/logistics-company"),{method:"POST"})}function x(e){var t=e.find_str,a=e.stime,n=e.etime,r=new FormData;return r.append("find_str",t),r.append("stime",a?a.format("YYYY-MM-DD"):""),r.append("etime",n?n.format("YYYY-MM-DD"):""),Object(w.a)("".concat(k.a,"/home/logistics/deliver-account-num"),{method:"POST",body:r})}Object.defineProperty(t,"__esModule",{value:!0}),t.getDeliverList=n,t.getDeliverFee=r,t.getDetail=i,t.cancelDispatch=c,t.acceptOrder=o,t.refuseOrder=s,t.getCompanyOption=d,t.getCarOption=p,t.doDispatch=u,t.uploadPound=l,t.uploadUnPound=m,t.confirmBill=f,t.getBalanceData=v,t.balanceDetailedFetch=b,t.getBalanceHistoryData=g,t.confirmAccount=y,t.deleteAccount=h,t.getLogisticsCompany=D,t.accountNum=x;var _=a("oXS2"),O=a.n(_),w=a("vLgD"),k=a("oiih")},siDj:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("irdN"),r=a.n(n),i=(a("UQ5M"),a("/qCn")),c=a("zIwb"),o=a.n(c),s=a("fSis");t.default={namespace:"logistics",state:{list:[],page:1,total:0,list2:[],page2:1,total2:0,deliver_status:"",find_str:"",currentTab:"quanbu",stime:"",etime:"",statusNum:{},balanceList:[],balancePage:1,balanceTotal:0,balanceDetailedList:[],balanceDetailedPage:1,balanceDetailedTotal:0,balanceHistoryList:[],balanceHistoryPage:1,balanceHistoryTotal:0,companyOption:[],companyDetail:{},currentLogistics:{},currentIndex:0},subscriptions:{setup:function(e){var t=e.dispatch;return e.history.listen(function(e){var a=e.pathname,n=e.query;"/logistics"===a&&(t({type:"getDeliverList",payload:n}),t({type:"getDeliverFee",payload:n}),t({type:"save",payload:{currentTab:"quanbu"}}))})}},effects:{getDeliverList:o.a.mark(function e(t,a){var n,r,i,c,d,p,u,l,m,f,v;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=n.page,i=void 0===r?1:r,c=n.deliver_status,d=void 0===c?"":c,p=n.find_str,u=void 0===p?"":p,l=a.call,m=a.put,e.next=4,l(s.getDeliverList,{page:i,deliver_status:d,find_str:u});case 4:if(f=e.sent,v=f.data,1!==v.code){e.next=9;break}return e.next=9,m({type:"save",payload:{list:v.data.list,page:parseInt(i,10),total:parseInt(v.data.count,10),deliver_status:d,find_str:u,statusNum:v.data.status_num,currentLogistics:v.data.list[0],currentIndex:0}});case 9:case"end":return e.stop()}},e,this)}),getDeliverFee:o.a.mark(function e(t,a){var n,r,i,c,d,p,u,l,m,f,v,b,g;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=n.page,i=void 0===r?1:r,c=n.find_str,d=void 0===c?"":c,p=n.stime,u=void 0===p?"":p,l=n.etime,m=void 0===l?"":l,f=a.call,v=a.put,e.next=4,f(s.getDeliverFee,{page:i,find_str:d,stime:u,etime:m});case 4:if(b=e.sent,g=b.data,1!==g.code){e.next=9;break}return e.next=9,v({type:"save",payload:{list2:g.data.list,page2:parseInt(i,10),total2:parseInt(g.data.count,10),stime:u,etime:m,find_str:d}});case 9:case"end":return e.stop()}},e,this)}),cancelDispatch:o.a.mark(function e(t,a){var n,r,c,d,p;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,c=a.put,e.next=4,r(s.cancelDispatch,n);case 4:if(d=e.sent,p=d.data,-1!==p.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==p.code){e.next=14;break}return i.a.success(p.msg),e.next=12,c({type:"getDeliverList",payload:{page:1}});case 12:e.next=15;break;case 14:i.a.error(p.msg);case 15:case"end":return e.stop()}},e,this)}),acceptOrder:o.a.mark(function e(t,a){var n,r,c,d,p;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,c=a.put,e.next=4,r(s.acceptOrder,n);case 4:if(d=e.sent,p=d.data,-1!==p.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==p.code){e.next=14;break}return i.a.success(p.msg),e.next=12,c({type:"getDeliverList",payload:{page:1}});case 12:e.next=15;break;case 14:i.a.error(p.msg);case 15:case"end":return e.stop()}},e,this)}),refuseOrder:o.a.mark(function e(t,a){var n,r,c,d,p;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,c=a.put,e.next=4,r(s.refuseOrder,n);case 4:if(d=e.sent,p=d.data,-1!==p.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==p.code){e.next=14;break}return i.a.success(p.msg),e.next=12,c({type:"getDeliverList",payload:{page:1}});case 12:e.next=15;break;case 14:i.a.error(p.msg);case 15:case"end":return e.stop()}},e,this)}),balanceFetch:o.a.mark(function e(t,a){var n,r,i,c,d,p,u,l,m,f,v,b;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=n.page,i=void 0===r?1:r,c=n.find_str,d=void 0===c?"":c,p=n.stime,u=n.etime,l=n.conversion,m=a.call,f=a.put,e.next=4,m(s.getBalanceData,{page:i,find_str:d,stime:p,etime:u,conversion:l});case 4:if(v=e.sent,b=v.data,1!==b.code){e.next=9;break}return e.next=9,f({type:"save",payload:{balanceList:b.data.list,balancePage:parseInt(i,10),balanceTotal:parseInt(b.data.count,10),find_str:d}});case 9:case"end":return e.stop()}},e,this)}),balanceDetailedFetch:o.a.mark(function e(t,a){var n,r,i,c,d,p,u,l,m,f,v,b,g;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=n.page,i=void 0===r?1:r,c=n.find_str,d=void 0===c?"":c,p=n.stime,u=n.etime,l=n.conversion,m=n.id,f=a.call,v=a.put,e.next=4,f(s.balanceDetailedFetch,{page:i,find_str:d,stime:p,etime:u,conversion:l,id:m});case 4:if(b=e.sent,g=b.data,1!==g.code){e.next=9;break}return e.next=9,v({type:"save",payload:{balanceDetailedList:g.data.list,balanceDetailedPage:parseInt(i,10),balanceDetailedTotal:parseInt(g.data.count,10),find_str:d}});case 9:case"end":return e.stop()}},e,this)}),balanceHistoryFetch:o.a.mark(function e(t,a){var n,r,i,c,d,p,u,l,m,f,v;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=n.page,i=void 0===r?1:r,c=n.find_str,d=void 0===c?"":c,p=n.stime,u=n.etime,l=a.call,m=a.put,e.next=4,l(s.getBalanceHistoryData,{page:i,find_str:d,stime:p,etime:u});case 4:if(f=e.sent,v=f.data,1!==v.code){e.next=9;break}return e.next=9,m({type:"save",payload:{balanceHistoryList:v.data.list,balanceHistoryPage:parseInt(i,10),balanceHistoryTotal:parseInt(v.data.count,10),find_str:d}});case 9:case"end":return e.stop()}},e,this)}),confirmAccount:o.a.mark(function e(t,a){var n,r,c,d,p;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload.id,r=a.call,c=a.put,e.next=4,r(s.confirmAccount,{id:n});case 4:if(d=e.sent,p=d.data,-1!==p.code){e.next=8;break}return e.abrupt("return",!1);case 8:1===p.code?i.a.success(p.msg):i.a.error(p.msg);case 9:case"end":return e.stop()}},e,this)}),deleteAccount:o.a.mark(function e(t,a){var n,r,c,d,p;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload.id,r=a.call,c=a.put,e.next=4,r(s.deleteAccount,{id:n});case 4:if(d=e.sent,p=d.data,-1!==p.code){e.next=8;break}return e.abrupt("return",!1);case 8:1===p.code?i.a.success(p.msg):i.a.error(p.msg);case 9:case"end":return e.stop()}},e,this)}),getLogisticsCompany:o.a.mark(function e(t,a){var n,r,i,c,d;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,i=a.put,e.next=4,r(s.getLogisticsCompany);case 4:if(c=e.sent,d=c.data,-1!==d.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==d.code){e.next=11;break}return e.next=11,i({type:"save",payload:{companyOption:d.data.list}});case 11:case"end":return e.stop()}},e,this)}),accountNum:o.a.mark(function e(t,a){var n,r,i,c,d,p,u,l,m;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.payload,r=n.find_str,i=void 0===r?"":r,c=n.stime,d=n.etime,p=a.call,u=a.put,e.next=4,p(s.accountNum,{find_str:i,stime:c,etime:d});case 4:if(l=e.sent,m=l.data,-1!==m.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==m.code){e.next=11;break}return e.next=11,u({type:"save",payload:{companyDetail:m.data.list}});case 11:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return r()({},e,t.payload)}}}}});