webpackJsonp([2],{WbGS:function(e,t,a){"use strict";function r(e){var t=e.file,a=new FormData;return a.append(t.filename,t.file),Object(K.a)(t.action,{method:"POST",body:a})}function n(e){var t=e.file,a=e.id,r=new FormData;return r.append(t.filename,t.file),r.append("id",a),Object(K.a)(t.action,{method:"POST",body:r})}function s(e){var t=e.page,a=e.find_str,r=new FormData;return r.append("page",t),r.append("limit",N.c),r.append("find_str",a),Object(K.a)("".concat(N.a,"/admin/customer/customer-list"),{method:"POST",body:r})}function c(e){var t=e.page,a=e.find_str,r=new FormData;return r.append("page",t),r.append("limit",N.c),r.append("find_str",a),Object(K.a)("".concat(N.a,"/admin/supplier/supp-list"),{method:"POST",body:r})}function i(e){var t=e.page,a=e.find_str,r=new FormData;return r.append("page",t),r.append("limit",N.c),r.append("find_str",a),Object(K.a)("".concat(N.a,"/admin/site/site-list"),{method:"POST",body:r})}function o(e){var t=e.page,a=e.find_str,r=e.car_type,n=new FormData;return n.append("page",t),n.append("limit",N.c),n.append("find_str",a),n.append("car_type",r),Object(K.a)("".concat(N.a,"/admin/car/car-list"),{method:"POST",body:n})}function u(e){var t=e.page,a=e.find_str,r=new FormData;return r.append("page",t),r.append("limit",N.c),r.append("find_str",a),Object(K.a)("".concat(N.a,"/admin/goods/goods-list"),{method:"POST",body:r})}function p(e){var t=e.form,a=new FormData;return A()(t).forEach(function(e,r){a.append(e,t[e])}),Object(K.a)("".concat(N.a,"/admin/customer/add-customer"),{method:"POST",body:a})}function d(e){var t=e.form,a=new FormData;return A()(t).forEach(function(e,r){a.append(e,t[e])}),Object(K.a)("".concat(N.a,"/admin/customer/modify-customer"),{method:"POST",body:a})}function f(e){var t=e.id,a=new FormData;return a.append("id",t),Object(K.a)("".concat(N.a,"/admin/customer/del-customer"),{method:"POST",body:a})}function l(e){var t=e.form;console.log(2);var a=new FormData;return A()(t).forEach(function(e,r){a.append(e,t[e])}),Object(K.a)("".concat(N.a,"/admin/supplier/add-supp"),{method:"POST",body:a})}function m(e){var t=e.form;console.log(1);var a=new FormData;return A()(t).forEach(function(e,r){a.append(e,t[e])}),Object(K.a)("".concat(N.a,"/admin/supplier/modify-supp"),{method:"POST",body:a})}function x(e){var t=e.id,a=new FormData;return a.append("id",t),Object(K.a)("".concat(N.a,"/admin/supplier/del-supp"),{method:"POST",body:a})}function b(e){var t=e.form,a=e.car_type,r=new FormData;return A()(t).forEach(function(e,a){r.append(e,t[e])}),r.append("car_type",a),Object(K.a)("".concat(N.a,"/admin/car/add-car"),{method:"POST",body:r})}function h(e){var t=e.form,a=e.car_type,r=new FormData;return A()(t).forEach(function(e,a){r.append(e,t[e])}),r.append("car_type",a),Object(K.a)("".concat(N.a,"/admin/car/modify-car"),{method:"POST",body:r})}function y(e){var t=e.id,a=new FormData;return a.append("id",t),Object(K.a)("".concat(N.a,"/admin/car/del-car"),{method:"POST",body:a})}function v(e){var t=e.form,a=new FormData;return A()(t).forEach(function(e,r){a.append(e,t[e])}),Object(K.a)("".concat(N.a,"/admin/site/add-site"),{method:"POST",body:a})}function g(e){var t=e.form,a=new FormData;return A()(t).forEach(function(e,r){a.append(e,t[e])}),Object(K.a)("".concat(N.a,"/admin/site/modify-site"),{method:"POST",body:a})}function k(e){var t=e.id,a=new FormData;return a.append("id",t),Object(K.a)("".concat(N.a,"/admin/site/del-site"),{method:"POST",body:a})}function w(e){var t=e.form,a=new FormData;return A()(t).forEach(function(e,r){a.append(e,t[e])}),Object(K.a)("".concat(N.a,"/admin/goods/add-goods"),{method:"POST",body:a})}function _(e){var t=e.form,a=new FormData;return A()(t).forEach(function(e,r){a.append(e,t[e])}),Object(K.a)("".concat(N.a,"/admin/goods/modify-goods"),{method:"POST",body:a})}function O(e){var t=e.id,a=new FormData;return a.append("id",t),Object(K.a)("".concat(N.a,"/admin/goods/del-goods"),{method:"POST",body:a})}function S(e){var t=e.name,a=new FormData;return a.append("district_name",t),Object(K.a)("".concat(N.a,"/admin/base/district"),{method:"POST",body:a})}function j(e){var t=e.file,a=new FormData;return a.append(t.filename,t.file),Object(K.a)(t.action,{method:"POST",body:a})}function C(e){var t=e.file,a=new FormData;return a.append(t.filename,t.file),Object(K.a)(t.action,{method:"POST",body:a})}function D(e){var t=e.file,a=new FormData;return a.append(t.filename,t.file),Object(K.a)(t.action,{method:"POST",body:a})}function P(e){var t=e.form,a=new FormData;return a.append("json_list",B()(t)),Object(K.a)("".concat(N.a,"/admin/customer/batch-add-cust"),{method:"POST",body:a})}function F(e){var t=e.form,a=new FormData;return a.append("json_list",B()(t)),Object(K.a)("".concat(N.a,"/admin/supplier/batch-add-supplier"),{method:"POST",body:a})}function T(e){var t=e.form,a=new FormData;return a.append("json_list",B()(t)),Object(K.a)("".concat(N.a,"/admin/car/batch-add-car"),{method:"POST",body:a})}function L(e){var t=e.json,a=new FormData;return a.append("json_list",B()(t)),Object(K.a)("".concat(N.a,"/admin/customer/batch-down-cust"),{method:"POST",body:a})}function I(e){var t=e.json,a=new FormData;return a.append("json_list",B()(t)),Object(K.a)("".concat(N.a,"/admin/supplier/batch-down-supplier"),{method:"POST",body:a})}function G(e){var t=e.json,a=new FormData;return a.append("json_list",B()(t)),Object(K.a)("".concat(N.a,"/admin/car/batch-down-car"),{method:"POST",body:a})}function V(e){var t=e.file,a=new FormData;return a.append(t.filename,t.file),Object(K.a)(t.action,{method:"POST",body:a})}function E(e){var t=e.page,a=e.find_str,r=new FormData;return r.append("page",t),r.append("limit",N.c),r.append("find_str",a),Object(K.a)("".concat(N.a,"/admin/logistics/logistics-list"),{method:"POST",body:r})}function H(e){var t=e.page,a=e.find_str,r=new FormData;return r.append("page",t),r.append("limit",N.c),r.append("find_str",a),Object(K.a)("".concat(N.a,"/admin/driver/driver-list"),{method:"POST",body:r})}function M(e){var t=e.form,a=new FormData;return A()(t).forEach(function(e,r){a.append(e,t[e])}),Object(K.a)("".concat(N.a,"/admin/logistics/add-logistics"),{method:"POST",body:a})}function U(e){var t=e.form,a=new FormData;return A()(t).forEach(function(e,r){a.append(e,t[e])}),Object(K.a)("".concat(N.a,"/admin/logistics/modify-logistics"),{method:"POST",body:a})}function q(e){var t=e.id,a=new FormData;return a.append("id",t),Object(K.a)("".concat(N.a,"/admin/customer/del-customer"),{method:"POST",body:a})}function R(e){var t=e.form,a=new FormData;return A()(t).forEach(function(e,r){a.append(e,t[e])}),Object(K.a)("".concat(N.a,"/admin/driver/add-driver"),{method:"POST",body:a})}function Q(e){var t=e.form,a=new FormData;return A()(t).forEach(function(e,r){a.append(e,t[e])}),Object(K.a)("".concat(N.a,"/admin/driver/modify-driver"),{method:"POST",body:a})}function W(e){var t=e.id,a=new FormData;return a.append("id",t),Object(K.a)("".concat(N.a,"/admin/customer/del-customer"),{method:"POST",body:a})}Object.defineProperty(t,"__esModule",{value:!0}),t.postReport=r,t.uploadSingle=n,t.getCustomerList=s,t.getSupplierList=c,t.getSiteList=i,t.getCarList=o,t.getGasList=u,t.insertCustomer=p,t.modifyCustomer=d,t.deleteCustomer=f,t.insertSupplier=l,t.modifySupplier=m,t.deleteSupplier=x,t.insertCar=b,t.modifyCar=h,t.deleteCar=y,t.insertSite=v,t.modifySite=g,t.deleteSite=k,t.insertGas=w,t.modifyGas=_,t.deleteGas=O,t.fetchOptions=S,t.userImport=j,t.suppImport=C,t.vehicleImport=D,t.batchCustomer=P,t.batchSupplier=F,t.batchVehicle=T,t.exportUser=L,t.exportSupp=I,t.exportVehicle=G,t.postmMintainHead=V,t.getLogisticsList=E,t.fetchDirverList=H,t.insertVehicle=M,t.modifyVehicle=U,t.deleteVehicle=q,t.insertDirver=R,t.modifyDirver=Q,t.deleteDirver=W;var z=a("Cenh"),B=a.n(z),J=a("qO4g"),A=a.n(J),K=a("vLgD"),N=a("oiih")},mmtP:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Biqn"),n=a.n(r),s=a("rzQm"),c=a.n(s),i=(a("UQ5M"),a("/qCn")),o=a("En79"),u=a.n(o),p=a("WbGS");t.default={namespace:"maintain",state:{customerlist:[],customerpage:1,customertotal:0,supplierlist:[],supplierpage:1,suppliertotal:0,carlist:[],carpage:1,cartotal:0,editForm:"",imgUrl:"",find_str:"",currentTab:"1",CascaderOptions:[],userChecking:{},supplierChecking:{},vehicleChecking:{},sitelist:[],sitepage:1,sitetotal:0,carbodylist:[],carbodypage:1,carbodytotal:0,carheadlist:[],carheadpage:1,carheadtotal:0,dirverlist:[],dirverpage:1,dirvertotal:0,gaslist:[],gaspage:1,gastotal:0,vehiclelist:[],vehiclepage:1,vehicletotal:0,customerHead:"",supplierHead:""},subscriptions:{setup:function(e){var t=e.dispatch;return e.history.listen(function(e){var a=e.pathname,r=e.query;"/maintain"===a&&(t({type:"fetchCustomer",payload:r}),t({type:"fetchSite",payload:r}),t({type:"fetchSupplier",payload:r}),t({type:"fetchCar",payload:{car_type:"1"}}),t({type:"fetchCar",payload:{car_type:"2"}}),t({type:"fetchGas",payload:r}),t({type:"fetchVehicleList",payload:r}),t({type:"fetchDirverList",payload:r}))})}},effects:{postReport:u.a.mark(function e(t,a){var r,n,s,c,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,s=a.put,e.next=4,n(p.postReport,{file:r});case 4:if(c=e.sent,i=c.data,1!==i.code){e.next=11;break}return e.next=9,s({type:"save",payload:{imgUrl:i.url}});case 9:r.onProgress({percent:100}),r.onSuccess();case 11:case"end":return e.stop()}},e,this)}),uploadSingle:u.a.mark(function e(t,a){var r,n,s,c,o,d,f,l,m,x;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=r.file,s=r.id,c=a.call,o=a.put,d=a.select,e.next=4,c(p.uploadSingle,{file:n,id:s});case 4:if(f=e.sent,l=f.data,-2!==l.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==l.code){e.next=20;break}return i.a.success(l.msg),e.next=12,d(function(e){return e.maintain.gaspage});case 12:return m=e.sent,e.next=15,d(function(e){return e.maintain.find_str});case 15:return x=e.sent,e.next=18,o({type:"fetchGas",payload:{page:m,find_str:x}});case 18:e.next=21;break;case 20:i.a.error(l.msg);case 21:n.onProgress({percent:100}),n.onSuccess();case 23:case"end":return e.stop()}},e,this)}),fetchCustomer:u.a.mark(function e(t,a){var r,n,s,c,i,o,d,f,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=r.page,s=void 0===n?1:n,c=r.find_str,i=void 0===c?"":c,o=a.call,d=a.put,e.next=4,o(p.getCustomerList,{page:s,find_str:i});case 4:if(f=e.sent,l=f.data,1!==l.code){e.next=9;break}return e.next=9,d({type:"save",payload:{customerlist:l.data.list,customerpage:parseInt(s,10),customertotal:parseInt(l.data.count,10),find_str:i}});case 9:case"end":return e.stop()}},e,this)}),fetchSupplier:u.a.mark(function e(t,a){var r,n,s,c,i,o,d,f,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=r.page,s=void 0===n?1:n,c=r.find_str,i=void 0===c?"":c,o=a.call,d=a.put,e.next=4,o(p.getSupplierList,{page:s,find_str:i});case 4:if(f=e.sent,l=f.data,1!==l.code){e.next=9;break}return e.next=9,d({type:"save",payload:{supplierlist:l.data.list,supplierpage:parseInt(s,10),suppliertotal:parseInt(l.data.count,10),find_str:i}});case 9:case"end":return e.stop()}},e,this)}),fetchSite:u.a.mark(function e(t,a){var r,n,s,c,i,o,d,f,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=r.page,s=void 0===n?1:n,c=r.find_str,i=void 0===c?"":c,o=a.call,d=a.put,e.next=4,o(p.getSiteList,{page:s,find_str:i});case 4:if(f=e.sent,l=f.data,1!==l.code){e.next=9;break}return e.next=9,d({type:"save",payload:{sitelist:l.data.list,sitepage:parseInt(s,10),sitetotal:parseInt(l.data.count,10),find_str:i}});case 9:case"end":return e.stop()}},e,this)}),fetchCar:u.a.mark(function e(t,a){var r,n,s,c,i,o,d,f,l,m,x;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=r.page,s=void 0===n?1:n,c=r.find_str,i=void 0===c?"":c,o=r.car_type,d=void 0===o?"1":o,f=a.call,l=a.put,e.next=4,f(p.getCarList,{page:s,find_str:i,car_type:d});case 4:if(m=e.sent,x=m.data,1!==x.code){e.next=14;break}if("1"!==d){e.next=12;break}return e.next=10,l({type:"save",payload:{carheadlist:x.data.list,carheadpage:parseInt(s,10),carheadtotal:parseInt(x.data.count,10),find_str:i}});case 10:e.next=14;break;case 12:return e.next=14,l({type:"save",payload:{carbodylist:x.data.list,carbodypage:parseInt(s,10),carbodytotal:parseInt(x.data.count,10),find_str:i}});case 14:case"end":return e.stop()}},e,this)}),fetchGas:u.a.mark(function e(t,a){var r,n,s,c,i,o,d,f,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=r.page,s=void 0===n?1:n,c=r.find_str,i=void 0===c?"":c,o=a.call,d=a.put,e.next=4,o(p.getGasList,{page:s,find_str:i});case 4:if(f=e.sent,l=f.data,1!==l.code){e.next=9;break}return e.next=9,d({type:"save",payload:{gaslist:l.data.list,gaspage:parseInt(s,10),gastotal:parseInt(l.data.count,10),find_str:i}});case 9:case"end":return e.stop()}},e,this)}),fetchVehicleList:u.a.mark(function e(t,a){var r,n,s,c,i,o,d,f,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=r.page,s=void 0===n?1:n,c=r.find_str,i=void 0===c?"":c,o=a.call,d=a.put,e.next=4,o(p.getLogisticsList,{page:s,find_str:i});case 4:if(f=e.sent,l=f.data,1!==l.code){e.next=9;break}return e.next=9,d({type:"save",payload:{vehiclelist:l.data.list,vehiclepage:parseInt(s,10),vehicletotal:parseInt(l.data.count,10),find_str:i}});case 9:case"end":return e.stop()}},e,this)}),fetchDirverList:u.a.mark(function e(t,a){var r,n,s,c,i,o,d,f,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=r.page,s=void 0===n?1:n,c=r.find_str,i=void 0===c?"":c,o=a.call,d=a.put,e.next=4,o(p.fetchDirverList,{page:s,find_str:i});case 4:if(f=e.sent,l=f.data,1!==l.code){e.next=9;break}return e.next=9,d({type:"save",payload:{dirverlist:l.data.list,dirverpage:parseInt(s,10),dirvertotal:parseInt(l.data.count,10),find_str:i}});case 9:case"end":return e.stop()}},e,this)}),insertCustomer:u.a.mark(function e(t,a){var r,n,s,c,o,d,f;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.form,n=a.call,s=a.put,c=a.select,e.next=4,n(p.insertCustomer,{form:r});case 4:return o=e.sent,d=o.data,e.next=8,c(function(e){return e.maintain.find_str});case 8:if(f=e.sent,-2!==d.code){e.next=11;break}return e.abrupt("return",!1);case 11:if(1!==d.code){e.next=17;break}return i.a.success(d.msg),e.next=15,s({type:"fetchCustomer",payload:{find_str:f}});case 15:e.next=18;break;case 17:i.a.error(d.msg);case 18:case"end":return e.stop()}},e,this)}),modifyCustomer:u.a.mark(function e(t,a){var r,n,s,c,o,d,f;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.form,n=a.call,s=a.put,c=a.select,e.next=4,n(p.modifyCustomer,{form:r});case 4:return o=e.sent,d=o.data,e.next=8,c(function(e){return e.maintain.find_str});case 8:if(f=e.sent,-2!==d.code){e.next=11;break}return e.abrupt("return",!1);case 11:if(1!==d.code){e.next=17;break}return i.a.success(d.msg),e.next=15,s({type:"fetchCustomer",payload:{find_str:f}});case 15:e.next=18;break;case 17:i.a.error(d.msg);case 18:case"end":return e.stop()}},e,this)}),deleteCustomer:u.a.mark(function e(t,a){var r,n,s,c,o,d,f,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,s=a.put,c=a.select,e.next=4,n(p.deleteCustomer,r);case 4:if(o=e.sent,d=o.data,-2!==d.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==d.code){e.next=20;break}return i.a.success(d.msg),e.next=12,c(function(e){return e.maintain.customerpage});case 12:return f=e.sent,e.next=15,c(function(e){return e.maintain.find_str});case 15:return l=e.sent,e.next=18,s({type:"fetchCustomer",payload:{page:f,find_str:l}});case 18:e.next=21;break;case 20:i.a.error(d.msg);case 21:case"end":return e.stop()}},e,this)}),insertSupplier:u.a.mark(function e(t,a){var r,n,s,c,o,d,f;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.form,n=a.call,s=a.put,c=a.select,e.next=4,n(p.insertSupplier,{form:r});case 4:return o=e.sent,d=o.data,e.next=8,c(function(e){return e.maintain.find_str});case 8:if(f=e.sent,-2!==d.code){e.next=11;break}return e.abrupt("return",!1);case 11:if(1!==d.code){e.next=17;break}return i.a.success(d.msg),e.next=15,s({type:"fetchSupplier",payload:{find_str:f}});case 15:e.next=18;break;case 17:i.a.error(d.msg);case 18:case"end":return e.stop()}},e,this)}),modifySupplier:u.a.mark(function e(t,a){var r,n,s,c,o,d,f;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.form,n=a.call,s=a.put,c=a.select,e.next=4,n(p.modifySupplier,{form:r});case 4:return o=e.sent,d=o.data,e.next=8,c(function(e){return e.maintain.find_str});case 8:if(f=e.sent,-2!==d.code){e.next=11;break}return e.abrupt("return",!1);case 11:if(1!==d.code){e.next=17;break}return i.a.success(d.msg),e.next=15,s({type:"fetchSupplier",payload:{find_str:f}});case 15:e.next=18;break;case 17:i.a.error(d.msg);case 18:case"end":return e.stop()}},e,this)}),deleteSupplier:u.a.mark(function e(t,a){var r,n,s,c,o,d,f,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,s=a.put,c=a.select,e.next=4,n(p.deleteSupplier,r);case 4:if(o=e.sent,d=o.data,-2!==d.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==d.code){e.next=20;break}return i.a.success(d.msg),e.next=12,c(function(e){return e.maintain.supplierpage});case 12:return f=e.sent,e.next=15,c(function(e){return e.maintain.find_str});case 15:return l=e.sent,e.next=18,s({type:"fetchSupplier",payload:{page:f,find_str:l}});case 18:e.next=21;break;case 20:i.a.error(d.msg);case 21:case"end":return e.stop()}},e,this)}),insertCar:u.a.mark(function e(t,a){var r,n,s,c,o,d,f,l,m;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=r.form,s=r.car_type,c=a.call,o=a.put,d=a.select,e.next=4,c(p.insertCar,{form:n,car_type:s});case 4:return f=e.sent,l=f.data,e.next=8,d(function(e){return e.maintain.find_str});case 8:if(m=e.sent,-2!==l.code){e.next=11;break}return e.abrupt("return",!1);case 11:if(1!==l.code){e.next=17;break}return i.a.success(l.msg),e.next=15,o({type:"fetchCar",payload:{find_str:m,car_type:s}});case 15:e.next=18;break;case 17:i.a.error(l.msg);case 18:case"end":return e.stop()}},e,this)}),modifyCar:u.a.mark(function e(t,a){var r,n,s,c,o,d,f,l,m;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=r.form,s=r.car_type,c=a.call,o=a.put,d=a.select,e.next=4,c(p.modifyCar,{form:n,car_type:s});case 4:return f=e.sent,l=f.data,e.next=8,d(function(e){return e.maintain.find_str});case 8:if(m=e.sent,-2!==l.code){e.next=11;break}return e.abrupt("return",!1);case 11:if(1!==l.code){e.next=17;break}return i.a.success(l.msg),e.next=15,o({type:"fetchCar",payload:{find_str:m,car_type:s}});case 15:e.next=18;break;case 17:i.a.error(l.msg);case 18:case"end":return e.stop()}},e,this)}),deleteCar:u.a.mark(function e(t,a){var r,n,s,c,o,d,f,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,s=a.put,c=a.select,e.next=4,n(p.deleteCar,r);case 4:if(o=e.sent,d=o.data,-2!==d.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==d.code){e.next=20;break}return i.a.success(d.msg),e.next=12,c(function(e){return e.maintain.carpage});case 12:return f=e.sent,e.next=15,c(function(e){return e.maintain.find_str});case 15:return l=e.sent,e.next=18,s({type:"fetchCar",payload:{page:f,find_str:l}});case 18:e.next=21;break;case 20:i.a.error(d.msg);case 21:case"end":return e.stop()}},e,this)}),insertSite:u.a.mark(function e(t,a){var r,n,s,c,o,d,f;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.form,n=a.call,s=a.put,c=a.select,e.next=4,n(p.insertSite,{form:r});case 4:return o=e.sent,d=o.data,e.next=8,c(function(e){return e.maintain.find_str});case 8:if(f=e.sent,-2!==d.code){e.next=11;break}return e.abrupt("return",!1);case 11:if(1!==d.code){e.next=17;break}return i.a.success(d.msg),e.next=15,s({type:"fetchSite",payload:{find_str:f}});case 15:e.next=18;break;case 17:i.a.error(d.msg);case 18:case"end":return e.stop()}},e,this)}),modifySite:u.a.mark(function e(t,a){var r,n,s,c,o,d,f;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.form,n=a.call,s=a.put,c=a.select,e.next=4,n(p.modifySite,{form:r});case 4:return o=e.sent,d=o.data,e.next=8,c(function(e){return e.maintain.find_str});case 8:if(f=e.sent,-2!==d.code){e.next=11;break}return e.abrupt("return",!1);case 11:if(1!==d.code){e.next=17;break}return i.a.success(d.msg),e.next=15,s({type:"fetchSite",payload:{find_str:f}});case 15:e.next=18;break;case 17:i.a.error(d.msg);case 18:case"end":return e.stop()}},e,this)}),deleteSite:u.a.mark(function e(t,a){var r,n,s,c,o,d,f,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,s=a.put,c=a.select,e.next=4,n(p.deleteSite,r);case 4:if(o=e.sent,d=o.data,-2!==d.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==d.code){e.next=20;break}return i.a.success(d.msg),e.next=12,c(function(e){return e.maintain.customerpage});case 12:return f=e.sent,e.next=15,c(function(e){return e.maintain.find_str});case 15:return l=e.sent,e.next=18,s({type:"fetchSite",payload:{page:f,find_str:l}});case 18:e.next=21;break;case 20:i.a.error(d.msg);case 21:case"end":return e.stop()}},e,this)}),insertGas:u.a.mark(function e(t,a){var r,n,s,c,o,d,f;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.form,n=a.call,s=a.put,c=a.select,e.next=4,n(p.insertGas,{form:r});case 4:return o=e.sent,d=o.data,e.next=8,c(function(e){return e.maintain.find_str});case 8:if(f=e.sent,-2!==d.code){e.next=11;break}return e.abrupt("return",!1);case 11:if(1!==d.code){e.next=17;break}return i.a.success(d.msg),e.next=15,s({type:"fetchGas",payload:{find_str:f}});case 15:e.next=18;break;case 17:i.a.error(d.msg);case 18:case"end":return e.stop()}},e,this)}),modifyGas:u.a.mark(function e(t,a){var r,n,s,c,o,d,f;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.form,n=a.call,s=a.put,c=a.select,e.next=4,n(p.modifyGas,{form:r});case 4:return o=e.sent,d=o.data,e.next=8,c(function(e){return e.maintain.find_str});case 8:if(f=e.sent,-2!==d.code){e.next=11;break}return e.abrupt("return",!1);case 11:if(1!==d.code){e.next=17;break}return i.a.success(d.msg),e.next=15,s({type:"fetchGas",payload:{find_str:f}});case 15:e.next=18;break;case 17:i.a.error(d.msg);case 18:case"end":return e.stop()}},e,this)}),deleteGas:u.a.mark(function e(t,a){var r,n,s,c,o,d,f,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,s=a.put,c=a.select,e.next=4,n(p.deleteGas,r);case 4:if(o=e.sent,d=o.data,-2!==d.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==d.code){e.next=20;break}return i.a.success(d.msg),e.next=12,c(function(e){return e.maintain.customerpage});case 12:return f=e.sent,e.next=15,c(function(e){return e.maintain.find_str});case 15:return l=e.sent,e.next=18,s({type:"fetchGas",payload:{page:f,find_str:l}});case 18:e.next=21;break;case 20:i.a.error(d.msg);case 21:case"end":return e.stop()}},e,this)}),fetchOptions:u.a.mark(function e(t,a){var r,n,s,i,o,d,f,l,m,x,b,h;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.payload,n=r.name,s=void 0===n?"":n,i=r.targetOption,o=a.call,d=a.put,f=a.select,!i){e.next=19;break}return e.next=5,o(p.fetchOptions,{name:s});case 5:if(l=e.sent,m=l.data,-2!==m.code){e.next=9;break}return e.abrupt("return",!1);case 9:if(1!==m.code){e.next=17;break}return i.loading=!1,i.children=m.data.list,e.next=14,f(function(e){return e.maintain.CascaderOptions});case 14:return x=e.sent,e.next=17,d({type:"save",payload:{CascaderOptions:c()(x)}});case 17:e.next=28;break;case 19:return e.next=21,o(p.fetchOptions,{name:s});case 21:if(b=e.sent,h=b.data,-2!==h.code){e.next=25;break}return e.abrupt("return",!1);case 25:if(1!==h.code){e.next=28;break}return e.next=28,d({type:"save",payload:{CascaderOptions:h.data.list}});case 28:case"end":return e.stop()}},e,this)}),userImport:u.a.mark(function e(t,a){var r,n,s,c,o,d,f,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,s=a.put,c=a.select,e.next=4,n(p.userImport,{file:r});case 4:if(o=e.sent,d=o.data,-2!==d.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==d.code){e.next=24;break}return i.a.warning("\u8bf7\u4fee\u6539\u6570\u636e\u540e\u91cd\u65b0\u5bfc\u5165"),e.next=12,c(function(e){return e.maintain.customerpage});case 12:return f=e.sent,e.next=15,c(function(e){return e.maintain.find_str});case 15:return l=e.sent,e.next=18,s({type:"fetchCustomer",payload:{page:f,find_str:l}});case 18:return r.onProgress({percent:100}),r.onSuccess(),e.next=22,s({type:"save",payload:{userChecking:d}});case 22:e.next=25;break;case 24:2===d.code&&i.a.error("\u5168\u90e8\u5bfc\u5165\u6210\u529f");case 25:case"end":return e.stop()}},e,this)}),suppImport:u.a.mark(function e(t,a){var r,n,s,c,o,d,f,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,s=a.put,c=a.select,e.next=4,n(p.suppImport,{file:r});case 4:if(o=e.sent,d=o.data,-2!==d.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==d.code){e.next=24;break}return i.a.warning("\u8bf7\u4fee\u6539\u6570\u636e\u540e\u91cd\u65b0\u5bfc\u5165"),e.next=12,c(function(e){return e.maintain.customerpage});case 12:return f=e.sent,e.next=15,c(function(e){return e.maintain.find_str});case 15:return l=e.sent,e.next=18,s({type:"fetchSupplier",payload:{page:f,find_str:l}});case 18:return r.onProgress({percent:100}),r.onSuccess(),e.next=22,s({type:"save",payload:{supplierChecking:d}});case 22:e.next=25;break;case 24:2===d.code&&i.a.error("\u5168\u90e8\u5bfc\u5165\u6210\u529f");case 25:case"end":return e.stop()}},e,this)}),vehicleImport:u.a.mark(function e(t,a){var r,n,s,c,o,d,f,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,s=a.put,c=a.select,e.next=4,n(p.vehicleImport,{file:r});case 4:if(o=e.sent,d=o.data,-2!==d.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==d.code){e.next=24;break}return i.a.warning("\u8bf7\u4fee\u6539\u6570\u636e\u540e\u91cd\u65b0\u5bfc\u5165"),e.next=12,c(function(e){return e.maintain.customerpage});case 12:return f=e.sent,e.next=15,c(function(e){return e.maintain.find_str});case 15:return l=e.sent,e.next=18,s({type:"fetchCar",payload:{page:f,find_str:l}});case 18:return r.onProgress({percent:100}),r.onSuccess(),e.next=22,s({type:"save",payload:{vehicleChecking:d}});case 22:e.next=25;break;case 24:2===d.code&&i.a.success("\u5168\u90e8\u5bfc\u5165\u6210\u529f");case 25:case"end":return e.stop()}},e,this)}),batchCustomer:u.a.mark(function e(t,a){var r,n,s,c,o,d;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.form,n=a.call,s=a.put,c=a.select,e.next=4,n(p.batchCustomer,{form:r});case 4:if(o=e.sent,d=o.data,-2!==d.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==d.code){e.next=14;break}return 0===d.num.err_num&&0===d.num.repeat_num?i.a.success("\u5168\u90e8\u5bfc\u5165\u6210\u529f"):i.a.warning("\u8bf7\u4fee\u6539\u6570\u636e\u540e\u91cd\u65b0\u5bfc\u5165"),e.next=12,s({type:"save",payload:{userChecking:d}});case 12:e.next=18;break;case 14:if(2!==d.code){e.next=18;break}return i.a.success("\u5168\u90e8\u5bfc\u5165\u6210\u529f"),e.next=18,s({type:"save",payload:{userChecking:d}});case 18:case"end":return e.stop()}},e,this)}),batchSupplier:u.a.mark(function e(t,a){var r,n,s,c,o,d;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.form,n=a.call,s=a.put,c=a.select,e.next=4,n(p.batchSupplier,{form:r});case 4:if(o=e.sent,d=o.data,-2!==d.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==d.code){e.next=14;break}return 0===d.num.err_num&&0===d.num.repeat_num?i.a.success("\u5168\u90e8\u5bfc\u5165\u6210\u529f"):i.a.warning("\u8bf7\u4fee\u6539\u6570\u636e\u540e\u91cd\u65b0\u5bfc\u5165"),e.next=12,s({type:"save",payload:{supplierChecking:d}});case 12:e.next=18;break;case 14:if(2!==d.code){e.next=18;break}return i.a.success("\u5168\u90e8\u5bfc\u5165\u6210\u529f"),e.next=18,s({type:"save",payload:{supplierChecking:d}});case 18:case"end":return e.stop()}},e,this)}),batchVehicle:u.a.mark(function e(t,a){var r,n,s,c,o,d;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.form,n=a.call,s=a.put,c=a.select,e.next=4,n(p.batchVehicle,{form:r});case 4:if(o=e.sent,d=o.data,-2!==d.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==d.code){e.next=14;break}return 0===d.num.err_num&&0===d.num.repeat_num?i.a.success("\u5168\u90e8\u5bfc\u5165\u6210\u529f"):i.a.warning("\u8bf7\u4fee\u6539\u6570\u636e\u540e\u91cd\u65b0\u5bfc\u5165"),e.next=12,s({type:"save",payload:{vehicleChecking:d}});case 12:e.next=18;break;case 14:if(2!==d.code){e.next=18;break}return i.a.success("\u5168\u90e8\u5bfc\u5165\u6210\u529f"),e.next=18,s({type:"save",payload:{vehicleChecking:d}});case 18:case"end":return e.stop()}},e,this)}),exportUser:u.a.mark(function e(t,a){var r,n,s,c,o,d;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.json,n=a.call,s=a.put,c=a.select,e.next=4,n(p.exportUser,{json:r});case 4:if(o=e.sent,d=o.data,-2!==d.code){e.next=8;break}return e.abrupt("return",!1);case 8:1===d.code&&i.a.success("\u6b63\u5728\u5bfc\u51fa\u6587\u4ef6...");case 9:case"end":return e.stop()}},e,this)}),exportSupp:u.a.mark(function e(t,a){var r,n,s,c,o,d;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.json,n=a.call,s=a.put,c=a.select,e.next=4,n(p.exportSupp,{json:r});case 4:if(o=e.sent,d=o.data,-2!==d.code){e.next=8;break}return e.abrupt("return",!1);case 8:1===d.code&&i.a.success("\u6b63\u5728\u5bfc\u51fa\u6587\u4ef6...");case 9:case"end":return e.stop()}},e,this)}),exportVehicle:u.a.mark(function e(t,a){var r,n,s,c,o,d;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.json,n=a.call,s=a.put,c=a.select,e.next=4,n(p.exportVehicle,{json:r});case 4:if(o=e.sent,d=o.data,-2!==d.code){e.next=8;break}return e.abrupt("return",!1);case 8:1===d.code&&i.a.success("\u6b63\u5728\u5bfc\u51fa\u6587\u4ef6...");case 9:case"end":return e.stop()}},e,this)}),postCustomerHead:u.a.mark(function e(t,a){var r,n,s,c,i,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,s=a.put,c=a.select,e.next=4,n(p.postmMintainHead,{file:r});case 4:if(i=e.sent,o=i.data,-2!==o.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==o.code){e.next=11;break}return e.next=11,s({type:"save",payload:{customerHead:o.data.img}});case 11:case"end":return e.stop()}},e,this)}),postSupplierHead:u.a.mark(function e(t,a){var r,n,s,c,i,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,s=a.put,c=a.select,e.next=4,n(p.postmMintainHead,{file:r});case 4:if(i=e.sent,o=i.data,-2!==o.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==o.code){e.next=11;break}return e.next=11,s({type:"save",payload:{supplierHead:o.data.img}});case 11:case"end":return e.stop()}},e,this)}),insertVehicle:u.a.mark(function e(t,a){var r,n,s,c,o,d,f;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.form,n=a.call,s=a.put,c=a.select,e.next=4,n(p.insertVehicle,{form:r});case 4:return o=e.sent,d=o.data,e.next=8,c(function(e){return e.maintain.find_str});case 8:if(f=e.sent,-2!==d.code){e.next=11;break}return e.abrupt("return",!1);case 11:if(1!==d.code){e.next=17;break}return i.a.success(d.msg),e.next=15,s({type:"fetchVehicleList",payload:{find_str:f}});case 15:e.next=18;break;case 17:i.a.error(d.msg);case 18:case"end":return e.stop()}},e,this)}),modifyVehicle:u.a.mark(function e(t,a){var r,n,s,c,o,d,f;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.form,n=a.call,s=a.put,c=a.select,e.next=4,n(p.modifyVehicle,{form:r});case 4:return o=e.sent,d=o.data,e.next=8,c(function(e){return e.maintain.find_str});case 8:if(f=e.sent,-2!==d.code){e.next=11;break}return e.abrupt("return",!1);case 11:if(1!==d.code){e.next=17;break}return i.a.success(d.msg),e.next=15,s({type:"fetchVehicleList",payload:{find_str:f}});case 15:e.next=18;break;case 17:i.a.error(d.msg);case 18:case"end":return e.stop()}},e,this)}),deleteVehicle:u.a.mark(function e(t,a){var r,n,s,c,o,d,f,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,s=a.put,c=a.select,e.next=4,n(p.deleteCustomer,r);case 4:if(o=e.sent,d=o.data,-2!==d.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==d.code){e.next=20;break}return i.a.success(d.msg),e.next=12,c(function(e){return e.maintain.customerpage});case 12:return f=e.sent,e.next=15,c(function(e){return e.maintain.find_str});case 15:return l=e.sent,e.next=18,s({type:"fetchVehicleList",payload:{page:f,find_str:l}});case 18:e.next=21;break;case 20:i.a.error(d.msg);case 21:case"end":return e.stop()}},e,this)}),insertDirver:u.a.mark(function e(t,a){var r,n,s,c,o,d,f;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.form,n=a.call,s=a.put,c=a.select,e.next=4,n(p.insertDirver,{form:r});case 4:return o=e.sent,d=o.data,e.next=8,c(function(e){return e.maintain.find_str});case 8:if(f=e.sent,-2!==d.code){e.next=11;break}return e.abrupt("return",!1);case 11:if(1!==d.code){e.next=17;break}return i.a.success(d.msg),e.next=15,s({type:"fetchDirverList",payload:{find_str:f}});case 15:e.next=18;break;case 17:i.a.error(d.msg);case 18:case"end":return e.stop()}},e,this)}),modifyDirver:u.a.mark(function e(t,a){var r,n,s,c,o,d,f;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload.form,n=a.call,s=a.put,c=a.select,e.next=4,n(p.modifyDirver,{form:r});case 4:return o=e.sent,d=o.data,e.next=8,c(function(e){return e.maintain.find_str});case 8:if(f=e.sent,-2!==d.code){e.next=11;break}return e.abrupt("return",!1);case 11:if(1!==d.code){e.next=17;break}return i.a.success(d.msg),e.next=15,s({type:"fetchDirverList",payload:{find_str:f}});case 15:e.next=18;break;case 17:i.a.error(d.msg);case 18:case"end":return e.stop()}},e,this)}),deleteDirver:u.a.mark(function e(t,a){var r,n,s,c,o,d,f,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,s=a.put,c=a.select,e.next=4,n(p.deleteDirver,r);case 4:if(o=e.sent,d=o.data,-2!==d.code){e.next=8;break}return e.abrupt("return",!1);case 8:if(1!==d.code){e.next=20;break}return i.a.success(d.msg),e.next=12,c(function(e){return e.maintain.customerpage});case 12:return f=e.sent,e.next=15,c(function(e){return e.maintain.find_str});case 15:return l=e.sent,e.next=18,s({type:"fetchDirverList",payload:{page:f,find_str:l}});case 18:e.next=21;break;case 20:i.a.error(d.msg);case 21:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return n()({},e,t.payload)}}}}});