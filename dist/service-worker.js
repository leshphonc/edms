"use strict";var precacheConfig=[["/static/common-umi.727999e1.async.js","b92d14d32eb1ecd9057b25dc7f31bfdf"],["/static/src__layouts__index.06a64537.async.js","a3398d27666c326ef9749136696de7da"],["/static/src__pages__account___layout.f7532414.async.js","88656ad2e5913103990be4c7960e61ce"],["/static/src__pages__account__models__analysis.js.7e8e8b7f.async.js","7a834c03363a7f7dd257efbeb76d329a"],["/static/src__pages__account__models__balance.js.7bf88847.async.js","72667058435647529115412ee9712e82"],["/static/src__pages__admin__page.c585d81c.async.js","4836081e0e869004cb9a9262fa8daf3a"],["/static/src__pages__backstage___layout.d72aaa63.async.js","24558fe92e4c0b0d884de1e7e376514c"],["/static/src__pages__backstage__models__backstage.js.cc70e6cd.async.js","1c12eceab281e49ba4fb9894f8f5c3a9"],["/static/src__pages__company__models__company.js.30e1c631.async.js","6d6d06c8ae03657675b41023c51f3268"],["/static/src__pages__company__page.b9fe3934.async.js","424c6ec59b4d01dbd7ac9105332d149c"],["/static/src__pages__customer___layout.39ca5162.async.js","3d0423ac21c7a4cdc8ec29510fe27361"],["/static/src__pages__customer__models__customer.js.97aec545.async.js","1cff24678f9336fb0846dd7809e20e38"],["/static/src__pages__index.b6394b1a.async.js","794fbfe865168591962f016f4669c091"],["/static/src__pages__login__page.dd3df254.async.js","eaf2cba99dd3b4cc0bc4035bb103c3a6"],["/static/src__pages__logistics___layout.a6a82c43.async.js","d626f5515f47244490624e682e49b48d"],["/static/src__pages__logistics__models__logistics.js.8aa03d1a.async.js","6efcd7c5c80ead585a75620bebad84e5"],["/static/src__pages__logistics__models__logisticsDetail.js.f34a37e6.async.js","58d7ba45ff05b50080547b657f5c7349"],["/static/src__pages__maintain___layout.4509c1a3.async.js","fe9b511bf07551de793d6b539c0fbc1b"],["/static/src__pages__maintain__models__maintain.js.16dca714.async.js","1d90e9ac77fe6dd3e068f24f273efd48"],["/static/src__pages__order___layout.580da95f.async.js","97ae19a0ae53ec2b9581034ed54482e9"],["/static/src__pages__order__models__order.js.1e812e98.async.js","5a419a60ac5c84273061824d9ab840c7"],["/static/src__pages__order__models__orderDetail.js.2d983cc1.async.js","93201c14a1c3eb1594dcdcf292b84c7e"],["/static/src__pages__permission___layout.cac42ddd.async.js","0dafb2dc46490241911b901ad8a91fd9"],["/static/src__pages__permission__models__permission.js.dfefbe4c.async.js","706ab3966eac974146e7e9c555609806"],["/static/src__pages__supplier___layout.459b2264.async.js","7704a908bfd7c54fe9215a0736f72267"],["/static/src__pages__supplier__models__supplier.js.59f4364e.async.js","dfc9f2cb23d4d8c400b14521afe3fa76"],["/static/static/bottom.28d54106.png","28d5410668103285c4c30583784908c3"],["/static/static/che.15a60998.svg","15a6099814bfa64342f6c1fc6f1132b4"],["/static/static/dingdanzhaungtai_icon.17128558.png","17128558016fbbc1999609fb49f37f09"],["/static/static/houtai_login_bg.78711d79.png","78711d795a7141cced3d8b98d264fe32"],["/static/static/iconfont.4a6d56a1.svg","4a6d56a118161cf1d730de940c626f08"],["/static/static/index_bg_1.1d8c7183.png","1d8c71832baa6e0313a4ce2bd57f857d"],["/static/static/index_bg_2.582df734.png","582df73435c61f41b7b079cc26196067"],["/static/static/index_bg_3.c64b4631.png","c64b46310c4ac7094af251ed73e96855"],["/static/static/lch_logo.6a9e9e6e.png","6a9e9e6ee7664bff8adfd89894b1edf6"],["/static/static/qianduan_login_bg.b98c0c49.png","b98c0c4974f2790becef189736aede86"],["/static/static/scheduling_now.aca0f37b.gif","aca0f37bc19dba26319ec3c51c3c091b"],["/static/static/settlement.6211b484.gif","6211b484029f64ecd4cd6da52909e258"],["/static/static/shouye_icon.a4fd0b21.png","a4fd0b21b5b85c32c70a32f9452b359d"],["/static/static/xjln1.f239c604.png","f239c604c4b0ebb77233e0f610f37e51"],["/static/static/yay.44dd3333.jpg","44dd3333d0ce70df3163ee28484ec397"],["/static/static/yingkui.46710dda.png","46710dda68851b0ecb071a58b5429ce1"],["/static/static/yundanzhuangtai_icon.c234b892.png","c234b89217370c96de803c6c57255d61"],["/static/umi.9d8f29a4.js","95dbe4f0d2e4778a5fef278e956968fa"],["/static/umi.fbb79704.css","fbb79704cf927ff1ba8a200d43b1503c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,s){var t=new URL(e);return s&&t.pathname.match(s)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],s=new URL(a,self.location),t=createCacheKey(s,hashParamName,c,!1);return[s.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var s=new Request(c,{credentials:"same-origin"});return fetch(s).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});