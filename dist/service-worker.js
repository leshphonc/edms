"use strict";var precacheConfig=[["/static/common-umi.89050fe1.async.js","832e6b9a3df08bebfc411ede312dbf8e"],["/static/src__layouts__index.0853a77e.async.js","886f30f56ba0f7c4836b33b507d68a01"],["/static/src__pages__account___layout.57a41d74.async.js","92946cbbdebfe3858fa9b70298c5d0e4"],["/static/src__pages__account__models__analysis.js.13ae9f76.async.js","4becebbafea9f43540777e6476b1dbdd"],["/static/src__pages__account__models__balance.js.16c4822d.async.js","a019dc9d14bd9f5da16778804f2efd5f"],["/static/src__pages__admin__page.bb1e3962.async.js","c3bb7f501a53a61141cb9b6bb03a25c4"],["/static/src__pages__backstage___layout.264e9b78.async.js","bcbff0303b31b664baade4ba500f9bf3"],["/static/src__pages__backstage__models__backstage.js.ce154d61.async.js","25fbba5d02723751c3a5c0c80f06ef80"],["/static/src__pages__company__models__company.js.a87a373a.async.js","2aa31dba784e9d5f7d7d5a930055c1b0"],["/static/src__pages__company__page.52bbb784.async.js","987b0095826e02f22c18e4900150a73b"],["/static/src__pages__customer__models__customer.js.6dd1f8ce.async.js","48c6f6b9d4ac26444fa2218a454b4b25"],["/static/src__pages__customer__page.08bc80b8.async.js","58467f946b270e91174ae149dbc481ce"],["/static/src__pages__index.dcb0c1a5.async.js","5006ddc710b66d2084ec407e18537c87"],["/static/src__pages__login__page.719f0740.async.js","7132aeb02ccd75b33c95d0777310823a"],["/static/src__pages__logistics___layout.a0a6616a.async.js","bbac99fb7d817f60077d84119873f10d"],["/static/src__pages__logistics__models__logistics.js.1aba8761.async.js","06c351ce49feae92bea827ac2538ee91"],["/static/src__pages__logistics__models__logisticsDetail.js.34b626fb.async.js","2b1410f6697548831a767c2a0dbe77e6"],["/static/src__pages__maintain___layout.929ae9bd.async.js","c225e44a6a56480db01d9ca442b4a49b"],["/static/src__pages__maintain__models__maintain.js.9c6b69fe.async.js","85ff8b5d9e319cf9cfb46ae2dc643166"],["/static/src__pages__order___layout.d8f2a183.async.js","8e38bc34c1d4fc4cadc127e8f202f297"],["/static/src__pages__order__models__order.js.c19052dd.async.js","426e6b778cce8cff809c1958cc739443"],["/static/src__pages__order__models__orderDetail.js.c71389f5.async.js","c4c5589efb897e38b2a604354225a162"],["/static/src__pages__permission___layout.9bf1075f.async.js","8225f949dda9f7e6f84f3affdbffa2d3"],["/static/src__pages__permission__models__permission.js.ae4b3c14.async.js","b47f4076781eb862a178f6dcd61c895d"],["/static/src__pages__supplier__models__supplier.js.aab69b01.async.js","3ce78e897fefd657b8c0723bf42ad342"],["/static/src__pages__supplier__page.1bd46312.async.js","841843938e1a1253ed2c966fe689d21d"],["/static/static/bottom.28d54106.png","28d5410668103285c4c30583784908c3"],["/static/static/dingdanzhaungtai_icon.17128558.png","17128558016fbbc1999609fb49f37f09"],["/static/static/houtai_login_bg.78711d79.png","78711d795a7141cced3d8b98d264fe32"],["/static/static/iconfont.4a6d56a1.svg","4a6d56a118161cf1d730de940c626f08"],["/static/static/index_bg_1.1d8c7183.png","1d8c71832baa6e0313a4ce2bd57f857d"],["/static/static/index_bg_2.582df734.png","582df73435c61f41b7b079cc26196067"],["/static/static/index_bg_3.c64b4631.png","c64b46310c4ac7094af251ed73e96855"],["/static/static/lch_logo.6a9e9e6e.png","6a9e9e6ee7664bff8adfd89894b1edf6"],["/static/static/qianduan_login_bg.b98c0c49.png","b98c0c4974f2790becef189736aede86"],["/static/static/shouye_icon.a4fd0b21.png","a4fd0b21b5b85c32c70a32f9452b359d"],["/static/static/xjln1.f239c604.png","f239c604c4b0ebb77233e0f610f37e51"],["/static/static/yay.44dd3333.jpg","44dd3333d0ce70df3163ee28484ec397"],["/static/static/yingkui.46710dda.png","46710dda68851b0ecb071a58b5429ce1"],["/static/static/yundanzhuangtai_icon.c234b892.png","c234b89217370c96de803c6c57255d61"],["/static/umi.47cc1ff5.js","8c53232575388bc523d23805c7b394e3"],["/static/umi.7dd29d39.css","7dd29d39c6c0472ad7cf013f4594a6ef"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,s){var t=new URL(e);return s&&t.pathname.match(s)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],s=new URL(a,self.location),t=createCacheKey(s,hashParamName,c,!1);return[s.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var s=new Request(c,{credentials:"same-origin"});return fetch(s).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});