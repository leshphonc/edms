"use strict";var precacheConfig=[["/static/common-umi.c61dac54.async.js","ca3e1651fa0651f29b9e67d1fd56ca86"],["/static/src__layouts__index.d36031f6.async.js","daa461d15f9e968adeae525045429d11"],["/static/src__pages__account___layout.ed25a7b2.async.js","0d1423f664cb1d3e7c1821d542eff206"],["/static/src__pages__account__models__analysis.js.9f60f177.async.js","badfa732dccffef673524d1e4e0cc02a"],["/static/src__pages__account__models__balance.js.0a518450.async.js","13b6490bd8b95ebdc0de52f911434d62"],["/static/src__pages__admin__page.532f8989.async.js","888f9a83e9bfccb9cc288f97bdd16eb7"],["/static/src__pages__backstage___layout.9540fd81.async.js","a85c4e171cdb1a1b59a1c63f94160078"],["/static/src__pages__backstage__models__backstage.js.cc70e6cd.async.js","1c12eceab281e49ba4fb9894f8f5c3a9"],["/static/src__pages__company__models__company.js.30e1c631.async.js","6d6d06c8ae03657675b41023c51f3268"],["/static/src__pages__company__page.ec02b8ea.async.js","637c2995cde74bf743d5dba334200f7f"],["/static/src__pages__customer___layout.e218ddfc.async.js","1b295bb22b1bdfbec5f264238d52b750"],["/static/src__pages__customer__models__customer.js.3082b93c.async.js","8c3788c93af4e3d31b2b10446c107bcd"],["/static/src__pages__index.11067288.async.js","81c12a3c2f63f9cc054f19059a18546c"],["/static/src__pages__login__page.2f01aa33.async.js","00373a9715a758a15269a6ed0f30d5b5"],["/static/src__pages__logistics___layout.5eeeba03.async.js","319bbf5d1008116a6f6bcf20d812c159"],["/static/src__pages__logistics__models__logistics.js.c2d236cd.async.js","280fee168da007353428c722592f1364"],["/static/src__pages__logistics__models__logisticsDetail.js.2cead45c.async.js","6cef4217181d3d235831c26e5bb1abf8"],["/static/src__pages__maintain___layout.ea4799f7.async.js","e092126a55f74dc0761a88860176d084"],["/static/src__pages__maintain__models__maintain.js.d338ecf4.async.js","57c6b1c88d75c561895d65f1172c5541"],["/static/src__pages__order___layout.158ca429.async.js","c5ca59ec6fcdb6560e7fca36db5073f1"],["/static/src__pages__order__models__order.js.a9b70d1a.async.js","d4f225161761822e21dff0defa64880a"],["/static/src__pages__order__models__orderDetail.js.27f3319b.async.js","bd3239bcd8a0ac184cbb74e24847c3dd"],["/static/src__pages__permission___layout.b495694b.async.js","529c820671ac0dd2ca02fb010b82f1b4"],["/static/src__pages__permission__models__permission.js.dfefbe4c.async.js","706ab3966eac974146e7e9c555609806"],["/static/src__pages__supplier___layout.de8f269c.async.js","55ab572ad917595e13788581a1bc20ae"],["/static/src__pages__supplier__models__supplier.js.1176ea97.async.js","32a704891facaf44f570a5af9529625a"],["/static/static/bottom.28d54106.png","28d5410668103285c4c30583784908c3"],["/static/static/che.15a60998.svg","15a6099814bfa64342f6c1fc6f1132b4"],["/static/static/dingdanzhaungtai_icon.17128558.png","17128558016fbbc1999609fb49f37f09"],["/static/static/houtai_login_bg.78711d79.png","78711d795a7141cced3d8b98d264fe32"],["/static/static/iconfont.4a6d56a1.svg","4a6d56a118161cf1d730de940c626f08"],["/static/static/index_bg_1.1d8c7183.png","1d8c71832baa6e0313a4ce2bd57f857d"],["/static/static/index_bg_2.582df734.png","582df73435c61f41b7b079cc26196067"],["/static/static/index_bg_3.c64b4631.png","c64b46310c4ac7094af251ed73e96855"],["/static/static/lch_logo.6a9e9e6e.png","6a9e9e6ee7664bff8adfd89894b1edf6"],["/static/static/qianduan_login_bg.b98c0c49.png","b98c0c4974f2790becef189736aede86"],["/static/static/scheduling_now.aca0f37b.gif","aca0f37bc19dba26319ec3c51c3c091b"],["/static/static/settlement.6211b484.gif","6211b484029f64ecd4cd6da52909e258"],["/static/static/shouye_icon.a4fd0b21.png","a4fd0b21b5b85c32c70a32f9452b359d"],["/static/static/xjln1.f239c604.png","f239c604c4b0ebb77233e0f610f37e51"],["/static/static/yay.44dd3333.jpg","44dd3333d0ce70df3163ee28484ec397"],["/static/static/yingkui.46710dda.png","46710dda68851b0ecb071a58b5429ce1"],["/static/static/yundanzhuangtai_icon.c234b892.png","c234b89217370c96de803c6c57255d61"],["/static/umi.118729b4.css","118729b4ca9ab9950f8eecce5e6cc9c7"],["/static/umi.8817807e.js","b77ad03c3f5c086eb54ed6777e3b2f40"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=c),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(c){return new Response(c,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,c,a,s){var t=new URL(e);return s&&t.pathname.match(s)||(t.search+=(t.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(a)),t.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var a=new URL(c).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return c.every(function(c){return!c.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],a=e[1],s=new URL(c,self.location),t=createCacheKey(s,hashParamName,a,!1);return[s.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var s=new Request(a,{credentials:"same-origin"});return fetch(s).then(function(c){if(!c.ok)throw new Error("Request for "+a+" returned a response with status "+c.status);return cleanResponse(c).then(function(c){return e.put(a,c)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!c.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var c,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(c=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),c=urlsToCacheKeys.has(a));0,c&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(c){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,c),fetch(e.request)}))}});