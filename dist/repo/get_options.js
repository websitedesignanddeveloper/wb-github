!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.main=t():e.main=t()}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.accessToken=t.apiUrl=void 0,t.apiUrl="https://api.github.com",t.accessToken=VARS.accessToken},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.decodeApiResponse=t.getUrl=void 0;var n=r(0);t.getUrl=function(e){return n.apiUrl+e},t.decodeApiResponse=function(e){return e.response?{response:JSON.parse(e.response),status:e.status}:{response:{},status:e.status}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=r(0),s=httpGet(n.getUrl("/user/repos?per_page=100"),{Authorization:"token "+o.accessToken}),u=n.decodeApiResponse(s),i=u.response;t.default=function(){switch(u.status){case 401:case 500:case 403:case 404:return void notify(u.response.message,"error",3e3)}return JSON.stringify(i.map((function(e){return{name:e.name,description:e.html_url,html_url:e.html_url,owner:e.owner}})))}}])}));