"use strict";var precacheConfig=[["/static/common-umi.a4a86013.async.js","534e30b0787bac0849838ca04159616d"],["/static/src__layouts__index.ab09be98.async.js","343f6e9b935397247ac905961adee9aa"],["/static/src__pages__account___layout.2cf57ef6.async.js","3a0c04b236f965388e7f0436c104c063"],["/static/src__pages__account__models__analysis.js.9229c253.async.js","c33b0a0e088353777a7ac0dbd72345f1"],["/static/src__pages__account__models__balance.js.989b0216.async.js","913486cd8a4477489410da33b2dd6e58"],["/static/src__pages__admin__page.829ef1e5.async.js","27acf87ef67e14fb35f4a0112854e532"],["/static/src__pages__backstage___layout.a9b2add8.async.js","7f5fe2b3da88d26e990da435be19495e"],["/static/src__pages__backstage__models__backstage.js.7d4fc90f.async.js","66819ff2fc3cc2a7a923cb1d664864b5"],["/static/src__pages__company__models__company.js.ab4fc23c.async.js","4437d09d31ad35f0ff8dab0b9b0399f7"],["/static/src__pages__company__page.ea9b0106.async.js","2dfba4214ede7ad333c11ee0886bff28"],["/static/src__pages__customer__models__customer.js.aa8988ac.async.js","c7fdd02187efd48bb71db391655ef404"],["/static/src__pages__customer__page.bd132217.async.js","5ac70edf8351e2c79aab774c8f6369b5"],["/static/src__pages__index.eb65227a.async.js","46958089d7b5fb57cefcc2e8251546a7"],["/static/src__pages__login__page.632f0131.async.js","d3151ab030e61538fc7043b0296debac"],["/static/src__pages__logistics___layout.b72f7ae6.async.js","971f6a2a1ad9f82e86bc3b2449654299"],["/static/src__pages__logistics__models__logistics.js.e4ed5a2b.async.js","b8484e605572a0b329df59034aa21779"],["/static/src__pages__logistics__models__logisticsDetail.js.e980f622.async.js","42c44919f1fccd25e239a4df68d2ef18"],["/static/src__pages__maintain___layout.2025e821.async.js","7833aeab1efddec2ab2c74877754fdad"],["/static/src__pages__maintain__models__maintain.js.9de8e696.async.js","7347d7298a35db4b5de2f7f76ec2f13b"],["/static/src__pages__order___layout.1211f889.async.js","cf2846b1bfe9d456aca7b9a0e63c1525"],["/static/src__pages__order__models__order.js.1cf1676d.async.js","986b2581e3981d5dbb7bd5fe29519128"],["/static/src__pages__order__models__orderDetail.js.32327c8c.async.js","6405c1402a4d0e9498cafdf5a569cc05"],["/static/src__pages__permission___layout.c1d07a76.async.js","4fc361194d96c70ed17d17d345a8c61a"],["/static/src__pages__permission__models__permission.js.c92a0817.async.js","c21a2c587cc642048081d5170805e9cb"],["/static/src__pages__supplier__models__supplier.js.63b1f093.async.js","fc922784cd67389ed3bae1fbe487fac8"],["/static/src__pages__supplier__page.b75c28cd.async.js","9637343e817dea6da27ea8f3c22da971"],["/static/static/bottom.28d54106.png","28d5410668103285c4c30583784908c3"],["/static/static/dingdanzhaungtai_icon.17128558.png","17128558016fbbc1999609fb49f37f09"],["/static/static/houtai_login_bg.78711d79.png","78711d795a7141cced3d8b98d264fe32"],["/static/static/iconfont.4a6d56a1.svg","4a6d56a118161cf1d730de940c626f08"],["/static/static/index_bg_1.1d8c7183.png","1d8c71832baa6e0313a4ce2bd57f857d"],["/static/static/index_bg_2.582df734.png","582df73435c61f41b7b079cc26196067"],["/static/static/index_bg_3.c64b4631.png","c64b46310c4ac7094af251ed73e96855"],["/static/static/lch_logo.6a9e9e6e.png","6a9e9e6ee7664bff8adfd89894b1edf6"],["/static/static/qianduan_login_bg.b98c0c49.png","b98c0c4974f2790becef189736aede86"],["/static/static/shouye_icon.a4fd0b21.png","a4fd0b21b5b85c32c70a32f9452b359d"],["/static/static/xjln1.f239c604.png","f239c604c4b0ebb77233e0f610f37e51"],["/static/static/yay.44dd3333.jpg","44dd3333d0ce70df3163ee28484ec397"],["/static/static/yundanzhuangtai_icon.c234b892.png","c234b89217370c96de803c6c57255d61"],["/static/umi.e10d8d26.css","e10d8d26f1a38a15496d913a79a3dbe9"],["/static/umi.f9d5148e.js","dd008a8dbb08ea6ff5a7c894a5cb7f17"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,s){var t=new URL(e);return s&&t.pathname.match(s)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],s=new URL(a,self.location),t=createCacheKey(s,hashParamName,c,!1);return[s.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var s=new Request(c,{credentials:"same-origin"});return fetch(s).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});