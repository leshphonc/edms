webpackJsonp([11],{GbnL:function(e,t,r){"use strict";function a(e){var t=e.page,r=e.order_status,a=e.find_str,n=e.order_type,o=e.stime,d=e.etime,c=e.time_type,s=new FormData;return s.append("page",t),s.append("limit",8),s.append("order_status",r),s.append("find_str",a),s.append("order_type",n),s.append("stime",o),s.append("etime",d),s.append("time_type",c),Object(v.a)("".concat(b.a,"/home/order/order-list"),{method:"POST",body:s})}function n(){return Object(v.a)("".concat(b.a,"/home/select/customer"),{method:"POST"})}function o(){return Object(v.a)("".concat(b.a,"/home/select/site"),{method:"POST"})}function d(){return Object(v.a)("".concat(b.a,"/home/select/supplier"),{method:"POST"})}function c(){return Object(v.a)("".concat(b.a,"/home/select/goods"),{method:"POST"})}function s(e){var t=e.values,r=new FormData;return O()(t).forEach(function(e,a){r.append(e,t[e])}),Object(v.a)("".concat(b.a,"/home/order/add-order"),{method:"POST",body:r})}function i(e){var t=e.id,r=new FormData;return r.append("id",t),Object(v.a)("".concat(b.a,"/home/order/order-info"),{method:"POST",body:r})}function p(e){var t=e.form,r=new FormData;return O()(t).forEach(function(e,a){r.append(e,t[e])}),Object(v.a)("".concat(b.a,"/home/order/modify-order"),{method:"POST",body:r})}function u(e){var t=e.form,r=new FormData;return O()(t).forEach(function(e,a){r.append(e,t[e])}),Object(v.a)("".concat(b.a,"/home/order/confirm-order"),{method:"POST",body:r})}function m(e){var t=e.id,r=new FormData;return r.append("id",t),Object(v.a)("".concat(b.a,"/home/order/pay"),{method:"POST",body:r})}function f(e){var t=e.id,r=new FormData;return r.append("id",t),Object(v.a)("".concat(b.a,"/home/order/cancel-order"),{method:"POST",body:r})}function l(e){var t=new FormData;return O()(e).forEach(function(r,a){t.append(r,e[r])}),Object(v.a)("".concat(b.a,"/home/order/settled"),{method:"POST",body:t})}function h(e){var t=e.id,r=new FormData;return r.append("id",t),Object(v.a)("".concat(b.a,"/home/order/delete-order"),{method:"POST",body:r})}function _(e){var t=e.purchase_price,r=e.deliver_price,a=e.price,n=e.distance,o=e.saler_num,d=new FormData;return d.append("purchase_price",t),d.append("deliver_price",r),d.append("saler_price",a),d.append("distance",n),d.append("saler_num",o),Object(v.a)("".concat(b.a,"/home/order/saler-model"),{method:"POST",body:d})}Object.defineProperty(t,"__esModule",{value:!0}),t.getOrderList=a,t.fetchCustom=n,t.fetchSite=o,t.fetchSupplier=d,t.fetchGoods=c,t.addOrder=s,t.orderInfo=i,t.modifyOrder=p,t.confirmOrder=u,t.doPay=m,t.cancelOrder=f,t.doResult=l,t.delOrder=h,t.getModalPrice=_;var y=r("qO4g"),O=r.n(y),v=r("vLgD"),b=r("oiih")},Nm8I:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Biqn"),n=r.n(a),o=(r("UQ5M"),r("/qCn")),d=r("En79"),c=r.n(d),s=r("GbnL");t.default={namespace:"order",state:{list:[],page:1,total:0,order_type:"3",order_status:"",currentTab:"icon-icon-test3",find_str:"",statusNum:{},currentOrder:{},currentIndex:0,customOption:[],siteOption:[],supplierOption:[],goodsOption:[],modal_price:0,stime:"",etime:"",time_type:"1"},subscriptions:{setup:function(e){e.dispatch;return e.history.listen(function(e){e.pathname,e.query})}},effects:{fetch:c.a.mark(function e(t,r){var a,n,o,d,i,p,u,m,f,l,h,_,y,O,v,b,x,w,g,S,P;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload,n=a.page,o=void 0===n?"1":n,d=a.order_type,i=void 0===d?"3":d,p=a.order_status,u=void 0===p?"":p,m=a.find_str,f=void 0===m?"":m,l=a.stime,h=void 0===l?"":l,_=a.etime,y=void 0===_?"":_,O=a.time_type,v=void 0===O?"1":O,b=r.call,x=r.put,w=r.select,e.next=4,b(s.getOrderList,{page:o,order_type:i,order_status:u,find_str:f,stime:h,etime:y,time_type:v});case 4:return g=e.sent,S=g.data,e.next=8,w(function(e){return e.order.currentIndex});case 8:if(P=e.sent,1!==S.code){e.next=14;break}return e.next=12,x({type:"save",payload:{page:parseInt(o,10),order_type:i,order_status:u,find_str:f,list:S.data.list,total:parseInt(S.data.count,10),currentOrder:S.data.list[P]?S.data.list[P]:{},statusNum:S.data.status_num,stime:h,etime:y,time_type:v}});case 12:return e.next=14,x({type:"home/save",payload:{currentOrder:S.data.list[P]?S.data.list[P]:{},order_type:i,find_str:f,stime:h,etime:y,time_type:v}});case 14:case"end":return e.stop()}},e,this)}),fetchSelect:c.a.mark(function e(t,r){var a,n,o,d,i,p,u;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,o=r.put,e.next=4,n(s.fetchCustom);case 4:return d=e.sent,e.next=7,n(s.fetchSupplier);case 7:return i=e.sent,e.next=10,n(s.fetchSite);case 10:return p=e.sent,e.next=13,n(s.fetchGoods);case 13:if(u=e.sent,1!==d.data.code||1!==i.data.code||1!==p.data.code||1!==u.data.code){e.next=17;break}return e.next=17,o({type:"save",payload:{customOption:d.data.data.list,supplierOption:i.data.data.list,siteOption:p.data.data.list,goodsOption:u.data.data.list}});case 17:case"end":return e.stop()}},e,this)}),fetchSite:c.a.mark(function e(t,r){var a,n,o,d,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload.customer_id,n=r.call,o=r.put,e.next=4,n(s.fetchSite,{customer_id:a});case 4:if(d=e.sent,i=d.data,1!==i.code){e.next=9;break}return e.next=9,o({type:"save",payload:{siteOption:i.data.list}});case 9:case"end":return e.stop()}},e,this)}),fetchGoods:c.a.mark(function e(t,r){var a,n,o,d,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload.supplier_id,n=r.call,o=r.put,e.next=4,n(s.fetchGoods,{supplier_id:a});case 4:if(d=e.sent,i=d.data,1!==i.code){e.next=9;break}return e.next=9,o({type:"save",payload:{goodsOption:i.data.list}});case 9:case"end":return e.stop()}},e,this)}),addOrder:c.a.mark(function e(t,r){var a,n,d,i,p;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload.values,n=r.call,d=r.put,e.next=4,n(s.addOrder,{values:a});case 4:if(i=e.sent,p=i.data,-1!==p.code){e.next=8;break}return e.abrupt("return",!1);case 8:1===p.code?o.a.success(p.msg):o.a.error(p.msg);case 9:case"end":return e.stop()}},e,this)}),delOrder:c.a.mark(function e(t,r){var a,n,d,i,p,u,m,f,l;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload.id,n=r.call,d=r.put,i=r.select,e.next=4,n(s.delOrder,{id:a});case 4:return p=e.sent,u=p.data,e.next=8,i(function(e){return e.order.find_str});case 8:return m=e.sent,e.next=11,i(function(e){return e.order.order_type});case 11:return f=e.sent,e.next=14,i(function(e){return e.order.order_status});case 14:if(l=e.sent,-1!==u.code){e.next=17;break}return e.abrupt("return",!1);case 17:if(1!==u.code){e.next=23;break}return o.a.success(u.msg),e.next=21,d({type:"order/fetch",payload:{find_str:m,order_status:l,order_type:f}});case 21:e.next=24;break;case 23:o.a.error(u.msg);case 24:case"end":return e.stop()}},e,this)}),getModalPrice:c.a.mark(function e(t,r){var a,n,d,i,p,u,m,f,l,h,_;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload,n=a.purchase_price,d=a.deliver_price,i=a.price,p=a.distance,u=a.saler_num,m=r.call,f=r.put,l=r.select,e.next=4,m(s.getModalPrice,{purchase_price:n,deliver_price:d,price:i,distance:p,saler_num:u});case 4:if(h=e.sent,_=h.data,-1!==_.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==_.code){e.next=13;break}return e.next=11,f({type:"save",payload:{modal_price:_.model_price}});case 11:e.next=14;break;case 13:o.a.error(_.msg);case 14:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return n()({},e,t.payload)}}}}});