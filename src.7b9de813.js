parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"u2QS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.logger=exports.delay=void 0;var e=function(e){return new Promise(function(o){setTimeout(function(){o(e)},e)})};exports.delay=e;var o=function(e){return console.log("Resolved after ".concat(e," ms"))};exports.logger=o;
},{}],"n9ff":[function(require,module,exports) {
"use strict";function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function t(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach(function(e){r(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.logger1=exports.toggleUserState=exports.users=void 0;var n=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}];exports.users=n;var o=function(e,r){return new Promise(function(n){n(e.map(function(e){return e.name===r?t(t({},e),{},{active:!e.active}):e}))})};exports.toggleUserState=o;var c=function(e){return console.table(e)};exports.logger1=c,o(n,"Mango").then(c),o(n,"Lux").then(c);
},{}],"T9OW":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.logError=exports.logSuccess=exports.makeTransaction=exports.randomIntegerFromInterval=void 0;var r=function(r,o){return Math.floor(Math.random()*(o-r+1)+r)};exports.randomIntegerFromInterval=r;var o=function(r){var o=r.transaction,t=r.time;console.log("Transaction ".concat(o.id," processed in ").concat(t," ms"))};exports.logSuccess=o;var t=function(r){var o=r.id;console.warn("Error processing transaction ".concat(o,". Please try again later."))};exports.logError=t;var n=function(o){var t=r(200,500);return new Promise(function(r,n){setTimeout(function(){Math.random()>.3&&r({transaction:o,time:t}),n(o)},t)})};exports.makeTransaction=n;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./js/task1"),r=require("./js/task2"),t=require("./js/task3");(0,e.delay)(2e3).then(e.logger),(0,e.delay)(1e3).then(e.logger),(0,e.delay)(1500).then(e.logger),(0,r.toggleUserState)(r.users,"Mango").then(r.logger1),(0,r.toggleUserState)(r.users,"Lux").then(r.logger1),(0,t.makeTransaction)({id:70,amount:150}).then(t.logSuccess).catch(t.logError),(0,t.makeTransaction)({id:71,amount:230}).then(t.logSuccess).catch(t.logError),(0,t.makeTransaction)({id:72,amount:75}).then(t.logSuccess).catch(t.logError),(0,t.makeTransaction)({id:73,amount:100}).then(t.logSuccess).catch(t.logError);
},{"./js/task1":"u2QS","./js/task2":"n9ff","./js/task3":"T9OW"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-promisification/src.7b9de813.js.map