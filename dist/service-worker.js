"use strict";var precacheConfig=[["/static/common-umi.c61dac54.async.js","ca3e1651fa0651f29b9e67d1fd56ca86"],["/static/src__layouts__index.d36031f6.async.js","daa461d15f9e968adeae525045429d11"],["/static/src__pages__account___layout.ed25a7b2.async.js","0d1423f664cb1d3e7c1821d542eff206"],["/static/src__pages__account__models__analysis.js.9f60f177.async.js","badfa732dccffef673524d1e4e0cc02a"],["/static/src__pages__account__models__balance.js.0a518450.async.js","13b6490bd8b95ebdc0de52f911434d62"],["/static/src__pages__admin__page.532f8989.async.js","888f9a83e9bfccb9cc288f97bdd16eb7"],["/static/src__pages__backstage___layout.9540fd81.async.js","a85c4e171cdb1a1b59a1c63f94160078"],["/static/src__pages__backstage__models__backstage.js.cc70e6cd.async.js","1c12eceab281e49ba4fb9894f8f5c3a9"],["/static/src__pages__company__models__company.js.30e1c631.async.js","6d6d06c8ae03657675b41023c51f3268"],["/static/src__pages__company__page.ec02b8ea.async.js","637c2995cde74bf743d5dba334200f7f"],["/static/src__pages__customer___layout.e218ddfc.async.js","1b295bb22b1bdfbec5f264238d52b750"],["/static/src__pages__customer__models__customer.js.3082b93c.async.js","8c3788c93af4e3d31b2b10446c107bcd"],["/static/src__pages__index.11067288.async.js","81c12a3c2f63f9cc054f19059a18546c"],["/static/src__pages__login__page.2f01aa33.async.js","00373a9715a758a15269a6ed0f30d5b5"],["/static/src__pages__logistics___layout.5eeeba03.async.js","319bbf5d1008116a6f6bcf20d812c159"],["/static/src__pages__logistics__models__logistics.js.c2d236cd.async.js","280fee168da007353428c722592f1364"],["/static/src__pages__logistics__models__logisticsDetail.js.2cead45c.async.js","6cef4217181d3d235831c26e5bb1abf8"],["/static/src__pages__maintain___layout.ea4799f7.async.js","e092126a55f74dc0761a88860176d084"],["/static/src__pages__maintain__models__maintain.js.d338ecf4.async.js","57c6b1c88d75c561895d65f1172c5541"],["/static/src__pages__order___layout.33768fcf.async.js","1c7fd468b020a2f5c74c218a53269038"],["/static/src__pages__order__models__order.js.1abf1619.async.js","8eb885dedb8d88914ef28481ae52ea15"],["/static/src__pages__order__models__orderDetail.js.db604638.async.js","a1ee55529f815843ce983bc91ac40cd0"],["/static/src__pages__permission___layout.b495694b.async.js","529c820671ac0dd2ca02fb010b82f1b4"],["/static/src__pages__permission__models__permission.js.dfefbe4c.async.js","706ab3966eac974146e7e9c555609806"],["/static/src__pages__supplier___layout.de8f269c.async.js","55ab572ad917595e13788581a1bc20ae"],["/static/src__pages__supplier__models__supplier.js.1176ea97.async.js","32a704891facaf44f570a5af9529625a"],["/static/static/bottom.28d54106.png","28d5410668103285c4c30583784908c3"],["/static/static/che.15a60998.svg","15a6099814bfa64342f6c1fc6f1132b4"],["/static/static/dingdanzhaungtai_icon.17128558.png","17128558016fbbc1999609fb49f37f09"],["/static/static/houtai_login_bg.78711d79.png","78711d795a7141cced3d8b98d264fe32"],["/static/static/iconfont.4a6d56a1.svg","4a6d56a118161cf1d730de940c626f08"],["/static/static/index_bg_1.1d8c7183.png","1d8c71832baa6e0313a4ce2bd57f857d"],["/static/static/index_bg_2.582df734.png","582df73435c61f41b7b079cc26196067"],["/static/static/index_bg_3.c64b4631.png","c64b46310c4ac7094af251ed73e96855"],["/static/static/lch_logo.6a9e9e6e.png","6a9e9e6ee7664bff8adfd89894b1edf6"],["/static/static/qianduan_login_bg.b98c0c49.png","b98c0c4974f2790becef189736aede86"],["/static/static/scheduling_now.aca0f37b.gif","aca0f37bc19dba26319ec3c51c3c091b"],["/static/static/settlement.6211b484.gif","6211b484029f64ecd4cd6da52909e258"],["/static/static/shouye_icon.a4fd0b21.png","a4fd0b21b5b85c32c70a32f9452b359d"],["/static/static/xjln1.f239c604.png","f239c604c4b0ebb77233e0f610f37e51"],["/static/static/yay.44dd3333.jpg","44dd3333d0ce70df3163ee28484ec397"],["/static/static/yingkui.46710dda.png","46710dda68851b0ecb071a58b5429ce1"],["/static/static/yundanzhuangtai_icon.c234b892.png","c234b89217370c96de803c6c57255d61"],["/static/umi.3b7d0d0d.js","6d913fc88301ff8830c18947efebc570"],["/static/umi.ec742955.css","ec742955602a16319a74d5d7f3d318dd"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,s){var t=new URL(e);return s&&t.pathname.match(s)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],s=new URL(a,self.location),t=createCacheKey(s,hashParamName,c,!1);return[s.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var s=new Request(c,{credentials:"same-origin"});return fetch(s).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});