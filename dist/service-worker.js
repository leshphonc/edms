"use strict";var precacheConfig=[["/static/common-umi.a7009f77.async.js","0b7bf2e136ec2a29a79613fd1a632892"],["/static/src__layouts__index.6141c8b9.async.js","b6364e256820c59fbd3daf4009b6a7a3"],["/static/src__pages__account___layout.349f894b.async.js","16e905d6e2e33b2d2db825950ef3c56c"],["/static/src__pages__account__models__analysis.js.9229c253.async.js","c33b0a0e088353777a7ac0dbd72345f1"],["/static/src__pages__account__models__balance.js.989b0216.async.js","913486cd8a4477489410da33b2dd6e58"],["/static/src__pages__backstage___layout.fc1d83a0.async.js","9ad5d2e751c387679b64943961936e13"],["/static/src__pages__backstage__models__backstage.js.7d4fc90f.async.js","66819ff2fc3cc2a7a923cb1d664864b5"],["/static/src__pages__backstagelogin__page.184a998f.async.js","2104ff29f5e8097434172843bd802c68"],["/static/src__pages__company__models__company.js.755adecc.async.js","4437d09d31ad35f0ff8dab0b9b0399f7"],["/static/src__pages__company__page.b6ecc3d5.async.js","646a3d04f96dac86b9ed078211d36f20"],["/static/src__pages__customer__models__customer.js.aa8988ac.async.js","c7fdd02187efd48bb71db391655ef404"],["/static/src__pages__customer__page.5aafcdde.async.js","d4a23a2e42913cf2ac46305e720581b9"],["/static/src__pages__index.e49b810f.async.js","aef8f819f3e1e76b069d83278c608265"],["/static/src__pages__login__page.35608aa7.async.js","c64b30e3e9ae0e718c36db7e1599e423"],["/static/src__pages__logistics___layout.086c57e2.async.js","ba7b4afd9e67d02b6e58b8ac849968c6"],["/static/src__pages__logistics__models__logistics.js.a636ba3a.async.js","eb43a82cd07b8f254bf3a296885e2da6"],["/static/src__pages__logistics__models__logisticsDetail.js.6f34b121.async.js","97379d2fdefa2963f775cde7827e123a"],["/static/src__pages__maintain___layout.80984e59.async.js","2d9b918027d8a3b251144ce2b3b52827"],["/static/src__pages__maintain__models__maintain.js.9de8e696.async.js","7347d7298a35db4b5de2f7f76ec2f13b"],["/static/src__pages__order___layout.e82b546d.async.js","944d4a7f2ca8b5e7b9d1947c3eff91c9"],["/static/src__pages__order__models__order.js.3ffe4824.async.js","492f2eedd3addfcc23c8875b86ac53fb"],["/static/src__pages__order__models__orderDetail.js.ee52acc4.async.js","d09f4ea2c234608b2f82f14b29becb84"],["/static/src__pages__permission___layout.bf301572.async.js","2f3177ca06c3bb0bfc68d60a894b19ce"],["/static/src__pages__permission__models__permission.js.c92a0817.async.js","c21a2c587cc642048081d5170805e9cb"],["/static/src__pages__supplier__models__supplier.js.63b1f093.async.js","fc922784cd67389ed3bae1fbe487fac8"],["/static/src__pages__supplier__page.24fd1703.async.js","9367bf5b3306f35f75a34bf10c76a20a"],["/static/static/bottom.28d54106.png","28d5410668103285c4c30583784908c3"],["/static/static/dingdanzhaungtai_icon.17128558.png","17128558016fbbc1999609fb49f37f09"],["/static/static/houtai_login_bg.78711d79.png","78711d795a7141cced3d8b98d264fe32"],["/static/static/iconfont.4a6d56a1.svg","4a6d56a118161cf1d730de940c626f08"],["/static/static/index_bg_1.1d8c7183.png","1d8c71832baa6e0313a4ce2bd57f857d"],["/static/static/index_bg_2.582df734.png","582df73435c61f41b7b079cc26196067"],["/static/static/index_bg_3.c64b4631.png","c64b46310c4ac7094af251ed73e96855"],["/static/static/lch_logo.6a9e9e6e.png","6a9e9e6ee7664bff8adfd89894b1edf6"],["/static/static/qianduan_login_bg.b98c0c49.png","b98c0c4974f2790becef189736aede86"],["/static/static/shouye_icon.a4fd0b21.png","a4fd0b21b5b85c32c70a32f9452b359d"],["/static/static/xjln1.f239c604.png","f239c604c4b0ebb77233e0f610f37e51"],["/static/static/yay.44dd3333.jpg","44dd3333d0ce70df3163ee28484ec397"],["/static/static/yundanzhuangtai_icon.c234b892.png","c234b89217370c96de803c6c57255d61"],["/static/umi.7d471ab8.css","7d471ab80ea807ec571fd764dfd04f58"],["/static/umi.c71233ba.js","cc0aa98b2358b009a5451198f5632529"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,s){var t=new URL(e);return s&&t.pathname.match(s)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],s=new URL(a,self.location),t=createCacheKey(s,hashParamName,c,!1);return[s.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var s=new Request(c,{credentials:"same-origin"});return fetch(s).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});