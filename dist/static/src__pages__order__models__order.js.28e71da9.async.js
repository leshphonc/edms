webpackJsonp([7],{GbnL:function(e,t,a){"use strict";function r(e){var t=e.page,a=e.order_status,r=e.find_str,n=new FormData;return n.append("page",t),n.append("limit",b.b),n.append("order_status",a),n.append("find_str",r),Object(O.a)("".concat(b.a,"/home/order/order-list"),{method:"POST",body:n})}function n(){return Object(O.a)("".concat(b.a,"/home/select/customer"),{method:"POST"})}function o(e){var t=e.customer_id,a=new FormData;return a.append("customer_id",t),Object(O.a)("".concat(b.a,"/home/select/site"),{method:"POST",body:a})}function d(){return Object(O.a)("".concat(b.a,"/home/select/supplier"),{method:"POST"})}function c(e){var t=e.supplier_id,a=new FormData;return a.append("supplier_id",t),Object(O.a)("".concat(b.a,"/home/select/goods"),{method:"POST",body:a})}function s(e){var t=e.form,a=new FormData;return h()(t).forEach(function(e,r){a.append(e,t[e])}),Object(O.a)("".concat(b.a,"/home/order/add-order"),{method:"POST",body:a})}function i(e){var t=e.id,a=new FormData;return a.append("id",t),Object(O.a)("".concat(b.a,"/home/order/order-info"),{method:"POST",body:a})}function u(e){var t=new FormData;return h()(e).forEach(function(a,r){t.append(a,e[a])}),Object(O.a)("".concat(b.a,"/home/order/modify-order"),{method:"POST",body:t})}function p(e){var t=e.id,a=new FormData;return a.append("id",t),Object(O.a)("".concat(b.a,"/home/order/pay"),{method:"POST",body:a})}function f(e){var t=e.id,a=new FormData;return a.append("id",t),Object(O.a)("".concat(b.a,"/home/order/cancel-order"),{method:"POST",body:a})}function l(e){var t=new FormData;return h()(e).forEach(function(a,r){t.append(a,e[a])}),Object(O.a)("".concat(b.a,"/home/order/settled"),{method:"POST",body:t})}Object.defineProperty(t,"__esModule",{value:!0}),t.getOrderList=r,t.fetchCustom=n,t.fetchSite=o,t.fetchSupplier=d,t.fetchGoods=c,t.addOrder=s,t.orderInfo=i,t.modifyOrder=u,t.doPay=p,t.cancelOrder=f,t.doResult=l;var m=a("oXS2"),h=a.n(m),O=a("vLgD"),b=a("oiih")},Nm8I:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("irdN"),n=a.n(r),o=(a("UQ5M"),a("/qCn")),d=a("zIwb"),c=a.n(d),s=a("GbnL"),i=a("7xWd");a.n(i);t.default={namespace:"order",state:{list:[],page:1,total:0,order_status:0,currentTab:"quanbu",customOption:[],siteOption:[],supplierOption:[],goodsOption:[]},subscriptions:{setup:function(e){var t=e.dispatch;return e.history.listen(function(e){var a=e.pathname,r=e.query;"/order"===a&&t({type:"fetch",payload:r}),"/order/doOrder"===a&&t({type:"fetchSelect",payload:r})})}},effects:{fetch:c.a.mark(function e(t,a){var r,n,o,d,i,u,p,f,l,m,h;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=r.page,o=void 0===n?1:n,d=r.order_status,i=void 0===d?"":d,u=r.find_str,p=void 0===u?"":u,f=a.call,l=a.put,e.next=4,f(s.getOrderList,{page:o,order_status:i,find_str:p});case 4:if(m=e.sent,h=m.data,1!==h.code){e.next=9;break}return e.next=9,l({type:"save",payload:{list:h.data.list,total:parseInt(h.data.count,10),page:parseInt(o,10),order_status:i,find_str:p}});case 9:case"end":return e.stop()}},e,this)}),fetchSelect:c.a.mark(function e(t,a){var r,n,o,d,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,o=a.put,e.next=4,n(s.fetchCustom);case 4:return d=e.sent,e.next=7,n(s.fetchSupplier);case 7:if(i=e.sent,1!==d.data.code||1!==i.data.code){e.next=12;break}return e.next=12,o({type:"save",payload:{customOption:d.data.data.list,supplierOption:i.data.data.list}});case 12:case"end":return e.stop()}},e,this)}),fetchSite:c.a.mark(function e(t,a){var r,n,o,d,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.customer_id,n=a.call,o=a.put,e.next=4,n(s.fetchSite,{customer_id:r});case 4:if(d=e.sent,i=d.data,1!==i.code){e.next=9;break}return e.next=9,o({type:"save",payload:{siteOption:i.data.list}});case 9:case"end":return e.stop()}},e,this)}),fetchGoods:c.a.mark(function e(t,a){var r,n,o,d,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.supplier_id,n=a.call,o=a.put,e.next=4,n(s.fetchGoods,{supplier_id:r});case 4:if(d=e.sent,i=d.data,1!==i.code){e.next=9;break}return e.next=9,o({type:"save",payload:{goodsOption:i.data.list}});case 9:case"end":return e.stop()}},e,this)}),addOrder:c.a.mark(function e(t,a){var r,n,d,u,p;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,d=a.put,e.next=4,n(s.addOrder,{form:r});case 4:if(u=e.sent,p=u.data,-1!==p.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==p.code){e.next=14;break}return o.a.success(p.msg),e.next=12,d(i.routerRedux.push({pathname:"/order"}));case 12:e.next=15;break;case 14:o.a.error(p.msg);case 15:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return n()({},e,t.payload)}}}}});