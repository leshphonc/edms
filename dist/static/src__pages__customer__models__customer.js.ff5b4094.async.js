webpackJsonp([24],{"+3K8":function(t,e,a){"use strict";function n(t){var e=t.page,a=t.find_str,n=new FormData;return n.append("page",e),n.append("limit",l.b),n.append("find_str",a),Object(f.a)("".concat(l.a,"/home/customer/sales-contract-list"),{method:"POST",body:n})}function r(t){var e=t.page,a=t.find_str,n=t.stime,r=t.etime,c=new FormData;return c.append("page",e),c.append("limit",l.b),c.append("find_str",a),c.append("start_date",n),c.append("end_date",r),Object(f.a)("".concat(l.a,"/home/customer/sales-performance"),{method:"POST",body:c})}function c(){return Object(f.a)("".concat(l.a,"/home/select/customer"),{method:"POST"})}function s(t){var e=t.id,a=t.stime,n=t.etime,r=new FormData;return r.append("customer_id",e),r.append("start_date",a),r.append("end_date",n),Object(f.a)("".concat(l.a,"/home/customer/add-contract"),{method:"POST",body:r})}function o(){return Object(f.a)("".concat(l.a,"/home/company/company-info"),{method:"POST"})}Object.defineProperty(e,"__esModule",{value:!0});var i=a("irdN"),d=a.n(i),p=(a("UQ5M"),a("/qCn")),u=a("zIwb"),m=a.n(u),f=a("vLgD"),l=a("oiih");e.default={namespace:"customer",state:{contractList:[],contractPage:1,contractTotal:0,detailList:[],detailPage:1,detailTotal:0,find_str:"",stime:"",etime:"",customOption:[],company:{}},subscriptions:{setup:function(t){t.dispatch;return t.history.listen(function(t){t.pathname,t.query})}},effects:{salesContractFetch:m.a.mark(function t(e,a){var r,c,s,o,i,d,p,u,f;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.payload,c=r.page,s=void 0===c?1:c,o=r.find_str,i=void 0===o?"":o,d=a.call,p=a.put,t.next=4,d(n,{page:s,find_str:i});case 4:if(u=t.sent,f=u.data,-1!==f.code){t.next=8;break}return t.abrupt("return",!1);case 8:return t.next=10,p({type:"save",payload:{contractList:f.data.list,contractPage:parseInt(s,10),contractTotal:parseInt(f.data.count,10),find_str:i}});case 10:case"end":return t.stop()}},t,this)}),salesDetailFetch:m.a.mark(function t(e,a){var n,c,s,o,i,d,p,u,f,l,h,v,y;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload,c=n.page,s=void 0===c?1:c,o=n.find_str,i=void 0===o?"":o,d=n.stime,p=void 0===d?"":d,u=n.etime,f=void 0===u?"":u,l=a.call,h=a.put,t.next=4,l(r,{page:s,find_str:i,stime:p,etime:f});case 4:if(v=t.sent,y=v.data,-1!==y.code){t.next=8;break}return t.abrupt("return",!1);case 8:return t.next=10,h({type:"save",payload:{detailList:y.data.list,detailPage:parseInt(s,10),detailTotal:parseInt(y.data.count,10),find_str:i,stime:p,etime:f}});case 10:case"end":return t.stop()}},t,this)}),fetchOptions:m.a.mark(function t(e,a){var n,r,s,o,i;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,s=a.put,t.next=4,r(c);case 4:if(o=t.sent,i=o.data,-1!==i.code){t.next=8;break}return t.abrupt("return",!1);case 8:return t.next=10,s({type:"save",payload:{customOption:i.data.list}});case 10:case"end":return t.stop()}},t,this)}),addCustomerContract:m.a.mark(function t(e,a){var n,r,c,o,i,d,u,f;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload,r=n.id,c=n.stime,o=n.etime,i=a.call,d=a.put,t.next=4,i(s,{id:r,stime:c,etime:o});case 4:if(u=t.sent,f=u.data,-1!==f.code){t.next=8;break}return t.abrupt("return",!1);case 8:1===f.code?p.a.success(f.msg):p.a.error(f.msg);case 9:case"end":return t.stop()}},t,this)}),fetchCompany:m.a.mark(function t(e,a){var n,r,c,s,i;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,c=a.put,t.next=4,r(o);case 4:if(s=t.sent,i=s.data,-1!==i.code){t.next=8;break}return t.abrupt("return",!1);case 8:return t.next=10,c({type:"save",payload:{company:i.data.info}});case 10:case"end":return t.stop()}},t,this)})},reducers:{save:function(t,e){return d()({},t,e.payload)}}}}});