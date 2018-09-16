webpackJsonp([9],{GbnL:function(e,t,r){"use strict";function a(e){var t=e.page,r=e.order_status,a=e.find_str,n=new FormData;return n.append("page",t),n.append("limit",8),n.append("order_status",r),n.append("find_str",a),Object(b.a)("".concat(v.a,"/home/order/order-list"),{method:"POST",body:n})}function n(){return Object(b.a)("".concat(v.a,"/home/select/customer"),{method:"POST"})}function o(e){var t=e.customer_id,r=new FormData;return r.append("customer_id",t),Object(b.a)("".concat(v.a,"/home/select/site"),{method:"POST",body:r})}function c(){return Object(b.a)("".concat(v.a,"/home/select/supplier"),{method:"POST"})}function d(e){var t=e.supplier_id,r=new FormData;return r.append("supplier_id",t),Object(b.a)("".concat(v.a,"/home/select/goods"),{method:"POST",body:r})}function s(e){var t=e.values,r=new FormData;return O()(t).forEach(function(e,a){r.append(e,t[e])}),Object(b.a)("".concat(v.a,"/home/order/add-order"),{method:"POST",body:r})}function u(e){var t=e.id,r=new FormData;return r.append("id",t),Object(b.a)("".concat(v.a,"/home/order/order-info"),{method:"POST",body:r})}function i(e){var t=e.form,r=new FormData;return O()(t).forEach(function(e,a){r.append(e,t[e])}),Object(b.a)("".concat(v.a,"/home/order/modify-order"),{method:"POST",body:r})}function p(e){var t=e.form,r=new FormData;return O()(t).forEach(function(e,a){r.append(e,t[e])}),Object(b.a)("".concat(v.a,"/home/order/confirm-order"),{method:"POST",body:r})}function f(e){var t=e.id,r=new FormData;return r.append("id",t),Object(b.a)("".concat(v.a,"/home/order/pay"),{method:"POST",body:r})}function l(e){var t=e.id,r=new FormData;return r.append("id",t),Object(b.a)("".concat(v.a,"/home/order/cancel-order"),{method:"POST",body:r})}function m(e){var t=new FormData;return O()(e).forEach(function(r,a){t.append(r,e[r])}),Object(b.a)("".concat(v.a,"/home/order/settled"),{method:"POST",body:t})}Object.defineProperty(t,"__esModule",{value:!0}),t.getOrderList=a,t.fetchCustom=n,t.fetchSite=o,t.fetchSupplier=c,t.fetchGoods=d,t.addOrder=s,t.orderInfo=u,t.modifyOrder=i,t.confirmOrder=p,t.doPay=f,t.cancelOrder=l,t.doResult=m;var h=r("oXS2"),O=r.n(h),b=r("vLgD"),v=r("oiih")},Nm8I:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("irdN"),n=r.n(a),o=(r("UQ5M"),r("/qCn")),c=r("zIwb"),d=r.n(c),s=r("GbnL"),u=r("7xWd");r.n(u);t.default={namespace:"order",state:{list:[],page:1,total:0,order_status:0,currentTab:"quanbu",customOption:[],siteOption:[],supplierOption:[],goodsOption:[],statusNum:{},currentOrder:{},currentIndex:0},subscriptions:{setup:function(e){var t=e.dispatch;return e.history.listen(function(e){var r=e.pathname,a=e.query;"/order"===r&&(t({type:"fetch",payload:a}),t({type:"save",payload:{currentTab:"quanbu"}})),"/order/doOrder"===r&&t({type:"fetchSelect",payload:a})})}},effects:{fetch:d.a.mark(function e(t,r){var a,n,o,c,u,i,p,f,l,m,h,O,b;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload,n=a.page,o=void 0===n?1:n,c=a.order_status,u=void 0===c?"":c,i=a.find_str,p=void 0===i?"":i,f=r.call,l=r.put,m=r.select,e.next=4,f(s.getOrderList,{page:o,order_status:u,find_str:p});case 4:return h=e.sent,O=h.data,e.next=8,m(function(e){return e.currentIndex});case 8:if(b=e.sent,1!==O.code){e.next=12;break}return e.next=12,l({type:"save",payload:{list:O.data.list,total:parseInt(O.data.count,10),page:parseInt(o,10),order_status:u,find_str:p,statusNum:O.data.status_num,currentOrder:O.data.list[b],currentIndex:0}});case 12:case"end":return e.stop()}},e,this)}),fetchSelect:d.a.mark(function e(t,r){var a,n,o,c,u;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,o=r.put,e.next=4,n(s.fetchCustom);case 4:return c=e.sent,e.next=7,n(s.fetchSupplier);case 7:if(u=e.sent,1!==c.data.code||1!==u.data.code){e.next=11;break}return e.next=11,o({type:"save",payload:{customOption:c.data.data.list,supplierOption:u.data.data.list}});case 11:case"end":return e.stop()}},e,this)}),fetchSite:d.a.mark(function e(t,r){var a,n,o,c,u;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload.customer_id,n=r.call,o=r.put,e.next=4,n(s.fetchSite,{customer_id:a});case 4:if(c=e.sent,u=c.data,1!==u.code){e.next=9;break}return e.next=9,o({type:"save",payload:{siteOption:u.data.list}});case 9:case"end":return e.stop()}},e,this)}),fetchGoods:d.a.mark(function e(t,r){var a,n,o,c,u;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload.supplier_id,n=r.call,o=r.put,e.next=4,n(s.fetchGoods,{supplier_id:a});case 4:if(c=e.sent,u=c.data,1!==u.code){e.next=9;break}return e.next=9,o({type:"save",payload:{goodsOption:u.data.list}});case 9:case"end":return e.stop()}},e,this)}),addOrder:d.a.mark(function e(t,r){var a,n,c,i,p;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload.values,n=r.call,c=r.put,e.next=4,n(s.addOrder,{values:a});case 4:if(i=e.sent,p=i.data,-1!==p.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==p.code){e.next=14;break}return o.a.success(p.msg),e.next=12,c(u.routerRedux.push({pathname:"/order"}));case 12:e.next=15;break;case 14:o.a.error(p.msg);case 15:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return n()({},e,t.payload)}}}}});