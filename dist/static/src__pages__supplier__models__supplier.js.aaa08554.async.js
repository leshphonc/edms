webpackJsonp([23],{"0gZ2":function(t,e,a){"use strict";function n(t){var e=t.page,a=t.find_str,n=new FormData;return n.append("page",e),n.append("limit",m.b),n.append("find_str",a),Object(f.a)("".concat(m.a,"/home/customer/sales-contract-list"),{method:"POST",body:n})}function r(t){var e=t.page,a=t.find_str,n=t.stime,r=t.etime,c=new FormData;return c.append("page",e),c.append("limit",m.b),c.append("find_str",a),c.append("start_date",n),c.append("end_date",r),Object(f.a)("".concat(m.a,"/home/customer/sales-performance"),{method:"POST",body:c})}function c(){return Object(f.a)("".concat(m.a,"/home/select/customer"),{method:"POST"})}function s(t){var e=t.id,a=t.stime,n=t.etime,r=new FormData;return r.append("suppliers_id",e),r.append("start_date",a),r.append("end_date",n),Object(f.a)("".concat(m.a,"/home/supplier/add-contract"),{method:"POST",body:r})}function i(){return Object(f.a)("".concat(m.a,"/home/company/company-info"),{method:"POST"})}Object.defineProperty(e,"__esModule",{value:!0});var o=a("irdN"),p=a.n(o),d=(a("UQ5M"),a("/qCn")),u=a("zIwb"),l=a.n(u),f=a("vLgD"),m=a("oiih");e.default={namespace:"supplier",state:{contractList:[],contractPage:1,contractTotal:0,detailList:[],detailPage:1,detailTotal:0,find_str:"",stime:"",etime:"",company:{},supplierOption:[]},subscriptions:{setup:function(t){t.dispatch;return t.history.listen(function(t){t.pathname,t.query})}},effects:{purchaseContractFetch:l.a.mark(function t(e,a){var r,c,s,i,o,p,d,u,f;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.payload,c=r.page,s=void 0===c?1:c,i=r.find_str,o=void 0===i?"":i,p=a.call,d=a.put,t.next=4,p(n,{page:s,find_str:o});case 4:if(u=t.sent,f=u.data,-1!==f.code){t.next=8;break}return t.abrupt("return",!1);case 8:return t.next=10,d({type:"save",payload:{contractList:f.data.list,contractPage:parseInt(s,10),contractTotal:parseInt(f.data.count,10),find_str:o}});case 10:case"end":return t.stop()}},t,this)}),purchaseDetailFetch:l.a.mark(function t(e,a){var n,c,s,i,o,p,d,u,f,m,h,v,y;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload,c=n.page,s=void 0===c?1:c,i=n.find_str,o=void 0===i?"":i,p=n.stime,d=void 0===p?"":p,u=n.etime,f=void 0===u?"":u,m=a.call,h=a.put,t.next=4,m(r,{page:s,find_str:o,stime:d,etime:f});case 4:if(v=t.sent,y=v.data,-1!==y.code){t.next=8;break}return t.abrupt("return",!1);case 8:return t.next=10,h({type:"save",payload:{detailList:y.data.list,detailPage:parseInt(s,10),detailTotal:parseInt(y.data.count,10),find_str:o,stime:d,etime:f}});case 10:case"end":return t.stop()}},t,this)}),fetchOptions:l.a.mark(function t(e,a){var n,r,s,i,o;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,s=a.put,t.next=4,r(c);case 4:if(i=t.sent,o=i.data,-1!==o.code){t.next=8;break}return t.abrupt("return",!1);case 8:return t.next=10,s({type:"save",payload:{supplierOption:o.data.list}});case 10:case"end":return t.stop()}},t,this)}),addSupplierContract:l.a.mark(function t(e,a){var n,r,c,i,o,p,u,f;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload,r=n.id,c=n.stime,i=n.etime,o=a.call,p=a.put,t.next=4,o(s,{id:r,stime:c,etime:i});case 4:if(u=t.sent,f=u.data,-1!==f.code){t.next=8;break}return t.abrupt("return",!1);case 8:1===f.code?d.a.success(f.msg):d.a.error(f.msg);case 9:case"end":return t.stop()}},t,this)}),fetchCompany:l.a.mark(function t(e,a){var n,r,c,s,o;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.payload,r=a.call,c=a.put,t.next=4,r(i);case 4:if(s=t.sent,o=s.data,-1!==o.code){t.next=8;break}return t.abrupt("return",!1);case 8:return t.next=10,c({type:"save",payload:{company:o.data.info}});case 10:case"end":return t.stop()}},t,this)})},reducers:{save:function(t,e){return p()({},t,e.payload)}}}}});