(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06a65220"],{7966:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=F;var n=s(r("d887")),a=s(r("e409")),i=s(r("f754")),o=s(r("7f64")),l=s(r("8476"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return m(e)||p(e,t)||d(e,t)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0)if(r.push(o.value),t&&r.length===t)break}catch(s){a=!0,i=s}finally{try{n||null==l["return"]||l["return"]()}finally{if(a)throw i}}return r}}function m(e){if(Array.isArray(e))return e}var h={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1},v=/^([^\x00-\x1F\x7F-\x9F\cX]+)<(.+)>$/i,g=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,_=/^[a-z\d]+$/,b=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,y=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,x=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,q=254;function w(e){var t=e.match(/^"(.+)"$/i),r=t?t[1]:e;if(!r.trim())return!1;var n=/[\.";<>]/.test(r);if(n){if(!t)return!1;var a=r.split('"').length===r.split('\\"').length;if(!a)return!1}return!0}function F(e,t){if((0,n.default)(e),t=(0,a.default)(t,h),t.require_display_name||t.allow_display_name){var r=e.match(v);if(r){var s,c=u(r,3);if(s=c[1],e=c[2],s.endsWith(" ")&&(s=s.substr(0,s.length-1)),!w(s))return!1}else if(t.require_display_name)return!1}if(!t.ignore_max_length&&e.length>q)return!1;var d=e.split("@"),f=d.pop(),p=d.join("@"),m=f.toLowerCase();if(t.domain_specific_validation&&("gmail.com"===m||"googlemail.com"===m)){p=p.toLowerCase();var F=p.split("+")[0];if(!(0,i.default)(F.replace(".",""),{min:6,max:30}))return!1;for(var C=F.split("."),E=0;E<C.length;E++)if(!_.test(C[E]))return!1}if(!1===t.ignore_max_length&&(!(0,i.default)(p,{max:64})||!(0,i.default)(f,{max:254})))return!1;if(!(0,o.default)(f,{require_tld:t.require_tld})){if(!t.allow_ip_domain)return!1;if(!(0,l.default)(f)){if(!f.startsWith("[")||!f.endsWith("]"))return!1;var S=f.substr(1,f.length-2);if(0===S.length||!(0,l.default)(S))return!1}}if('"'===p[0])return p=p.slice(1,p.length-1),t.allow_utf8_local_part?x.test(p):b.test(p);for(var P=t.allow_utf8_local_part?y:g,k=p.split("."),$=0;$<k.length;$++)if(!P.test(k[$]))return!1;return!t.blacklisted_chars||-1===p.search(new RegExp("[".concat(t.blacklisted_chars,"]+"),"g"))}e.exports=t.default,e.exports.default=t.default},"7f64":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n=i(r("d887")),a=i(r("e409"));function i(e){return e&&e.__esModule?e:{default:e}}var o={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1};function l(e,t){(0,n.default)(e),t=(0,a.default)(t,o),t.allow_trailing_dot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));var r=e.split("."),i=r[r.length-1];if(t.require_tld){if(r.length<2)return!1;if(!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(i))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(i))return!1}return!(!t.allow_numeric_tld&&/^\d+$/.test(i))&&r.every((function(e){return!(e.length>63)&&(!!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(e)&&(!/[\uff01-\uff5e]/.test(e)&&(!/^-|-$/.test(e)&&!(!t.allow_underscores&&/_/.test(e)))))}))}e.exports=t.default,e.exports.default=t.default},8476:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var n=a(r("d887"));function a(e){return e&&e.__esModule?e:{default:e}}var i=/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,o=/^[0-9A-F]{1,4}$/i;function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if((0,n.default)(e),t=String(t),!t)return l(e,4)||l(e,6);if("4"===t){if(!i.test(e))return!1;var r=e.split(".").sort((function(e,t){return e-t}));return r[3]<=255}if("6"===t){var a=[e];if(e.includes("%")){if(a=e.split("%"),2!==a.length)return!1;if(!a[0].includes(":"))return!1;if(""===a[1])return!1}var s=a[0].split(":"),u=!1,c=l(s[s.length-1],4),d=c?7:8;if(s.length>d)return!1;if("::"===e)return!0;"::"===e.substr(0,2)?(s.shift(),s.shift(),u=!0):"::"===e.substr(e.length-2)&&(s.pop(),s.pop(),u=!0);for(var f=0;f<s.length;++f)if(""===s[f]&&f>0&&f<s.length-1){if(u)return!1;u=!0}else if(c&&f===s.length-1);else if(!o.test(s[f]))return!1;return u?s.length>=1:s.length===d}return!1}e.exports=t.default,e.exports.default=t.default},b0d7:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=this,r=t.$createElement,n=t._self._c||r;return n("div",{staticClass:"q-pa-md row"},[n("div",{staticClass:"col-md-6"},[n("q-card",{staticClass:"my-card q-ma-sm",attrs:{square:"",flat:"",bordered:""}},[n("q-card-section",{attrs:{align:"center"}},[n("h5",[t._v("Register Form Cleaner")])]),n("q-input",{ref:"username",attrs:{label:"username",placeholder:"",hint:"",rules:[function(e){return!!e||"Please fill username cleaner "}]},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("q-input",{ref:"name",attrs:{label:"name",placeholder:"",hint:"",rules:[function(e){return!!e||"Please fill username cleaner "}]},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("q-input",{ref:"email",attrs:{label:"email",placeholder:"Enter cleaner's Email",hint:"",rules:[function(e){return!!e||"Please Enter Your Email"},function(t){return e.validationEmail(t)||"Error Format"}]},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("q-input",{ref:"password",attrs:{label:"password",placeholder:"Enter your Password",hint:"",rules:[function(e){return!!e||"Please Enter Your Password"}]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("q-card-section",{staticStyle:{"justify-content":"right"}},[n("div",{staticClass:"q-pa-md q-gutter-sm"},[n("q-btn",{attrs:{color:"primary",label:"Register"},on:{click:t.register}})],1)])],1)],1),n("div",{staticClass:"col-md-6"},[n("q-card",{staticClass:"my-card q-ma-sm",attrs:{square:"",flat:"",bordered:""}},[n("q-separator"),n("q-card-actions",{attrs:{vertical:""}},[n("div",{staticClass:"q-pa-md"},[n("q-table",{attrs:{title:"Table",data:t.data,columns:t.columns,"row-key":"id",pagination:t.pagination,loading:t.loading,filter:t.filter,"binary-state-sort":"","table-style":"height:400px"},on:{"update:pagination":function(e){t.pagination=e},request:t.onRequest},scopedSlots:t._u([{key:"top-right",fn:function(){return[n("q-input",{attrs:{borderless:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0}])})],1)])],1)],1),n("q-card",{staticClass:"my-card q-ma-sm",attrs:{flat:"",bordered:"",square:""}},[n("p",[t._v("Profile Admin")]),n("table",{staticClass:"positionadmin"},[n("tr",[n("td",[t._v("ID:")]),n("td",[t._v("S4675")])]),n("tr",[n("td",[t._v("Name:")]),n("td",[t._v("Aiman Hakim")])]),n("tr",[n("td",[t._v("Email:")]),n("td",[t._v("yusoff@gmail.com")])]),n("tr"),n("tr",[n("td",[t._v("Last Login :")]),n("td",[t._v("-----")])]),n("tr",[n("td",[n("div",{staticClass:"q-pa-md q-gutter-sm"},[n("q-btn",{attrs:{label:"Update",color:"primary"},on:{click:function(e){t.update=!0}}}),n("q-dialog",{model:{value:t.update,callback:function(e){t.update=e},expression:"update"}},[n("q-card",{staticStyle:{width:"700px","max-width":"80vw"}},[n("q-card-section",[n("div",{staticClass:"text-h6"},[t._v("Update Password")])]),n("q-card-section",{staticClass:"q-pt-none"},[n("q-input",{ref:"password",attrs:{outlined:"",label:"password",placeholder:"Enter your  Confirtmatio Password",hint:"",rules:[function(e){return!!e||"Please Enter Your Password"}]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("q-card-section",[n("q-input",{ref:"confirmationpass",attrs:{outlined:"",label:"password",placeholder:"Enter your Confirmation Password",hint:"",rules:[function(e){return!!e||"Please Enter Your Password"}]},model:{value:t.confirmationpass,callback:function(e){t.confirmationpass=e},expression:"confirmationpass"}})],1),n("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"right"}},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK"}})],1)],1)],1)],1)])])])]),n("div",{staticClass:"col-md-6"}),n("q-separator")],1)},a=[],i=(r("99af"),r("4de4"),r("4160"),r("caad"),r("fb6a"),r("a434"),r("b0c0"),r("2532"),r("159b"),r("2909")),o=r("7966"),l=r.n(o),s={name:"usermanagement",data:function(){return{filter:"",loading:!1,username:"",name:"",email:"",password:"",confirmationpass:"",update:!1,pagination:{sortBy:"name",descending:!1,page:1,rowsPerPage:3,rowsNumber:10},columns:[{name:"User",align:"center",label:"No",field:"userId"},{name:"id",align:"center",label:"Username",field:"id"},{name:"title",align:"center",label:"Name",field:"title"},{name:"completed",label:"Email",field:"completed"}],data:[],original:[{}]}},mounted:function(){this.onRequest({pagination:this.pagination,filter:void 0})},methods:{onRequest:function(e){var t=this,r=e.pagination,n=r.page,a=r.rowsPerPage,o=r.sortBy,l=r.descending,s=e.filter;this.loading=!0,this.$store.dispatch("cleaner/display").then((function(e){t.original=e.data,console.log(e.data),setTimeout((function(){var e;t.pagination.rowsNumber=t.getRowsNumberCount(s);var r=0===a?t.pagination.rowsNumber:a,u=(n-1)*a,c=t.fetchFromServer(u,r,s,o,l);(e=t.data).splice.apply(e,[0,t.data.length].concat(Object(i["a"])(c))),t.pagination.page=n,t.pagination.rowsPerPage=a,t.pagination.sortBy=o,t.pagination.descending=l,t.loading=!1}),1500).catch((function(e){t.$q.notify({message:e.response.data.error,color:"negative",icon:"error",position:"top"})}))}))},fetchFromServer:function(e,t,r,n,a){var i=r?this.original.filter((function(e){return e.Name.includes(r)})):this.original.slice();if(n){var o="desc"===n?a?function(e,t){return e.name>t.name?-1:e.name<t.name?1:0}:function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}:a?function(e,t){return parseFloat(t[n])-parseFloat(e[n])}:function(e,t){return parseFloat(e[n])-parseFloat(t[n])};i.sort(o)}return i.slice(e,e+t)},getRowsNumberCount:function(e){if(!e)return this.original.length;var t=0;return this.original.forEach((function(r){r.Name.includes(e)&&++t})),t},validationEmail:function(e){return l()(e)},register:function(){var e=this,t={username:this.username,name:this.name,email:this.email,password:this.password};this.$store.dispatch("cleaner/insertdata",t).then((function(){e.$q.notify({message:"Register Successful",color:"blue",icon:"check_circle",position:"top"})})).catch((function(t){e.$q.notify({message:t.response.data.error,color:"negative",icon:"error",position:"top"})})),console.log(t)}}},u=s,c=r("2877"),d=r("f09f"),f=r("a370"),p=r("27f9"),m=r("9c40"),h=r("eb85"),v=r("5530"),g=r("2b0e"),_=r("99b6"),b=r("87e8"),y=r("dde5"),x=g["a"].extend({name:"QCardActions",mixins:[b["a"],_["a"]],props:{vertical:Boolean},computed:{classes:function(){return"q-card__actions--".concat(!0===this.vertical?"vert column":"horiz row"," ").concat(this.alignClass)}},render:function(e){return e("div",{staticClass:"q-card__actions",class:this.classes,on:Object(v["a"])({},this.qListeners)},Object(y["c"])(this,"default"))}}),q=r("eaac"),w=r("0016"),F=r("24e8"),C=r("9e62"),E=r("d728");function S(e){if(!1===e)return 0;if(!0===e||void 0===e)return 1;var t=parseInt(e,10);return isNaN(t)?0:t}function P(e){var t=e.__qclosepopup;void 0!==t&&(e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup)}var k={name:"close-popup",bind:function(e,t,r){var n=t.value;void 0!==e.__qclosepopup&&(P(e),e.__qclosepopup_destroyed=!0);var a={depth:S(n),handler:function(e){0!==a.depth&&setTimeout((function(){Object(C["b"])(r.componentInstance||r.context,e,a.depth)}))},handlerKey:function(e){!0===Object(E["a"])(e,13)&&a.handler(e)}};e.__qclosepopup=a,e.addEventListener("click",a.handler),e.addEventListener("keyup",a.handlerKey)},update:function(e,t){var r=t.value,n=t.oldValue;void 0!==e.__qclosepopup&&r!==n&&(e.__qclosepopup.depth=S(r))},unbind:function(e){void 0===e.__qclosepopup_destroyed?P(e):delete e.__qclosepopup_destroyed}},$=r("93dc"),j=r.n($),O=Object(c["a"])(u,n,a,!1,null,"aab4a4dc",null);t["default"]=O.exports;j()(O,"components",{QCard:d["a"],QCardSection:f["a"],QInput:p["a"],QBtn:m["a"],QSeparator:h["a"],QCardActions:x,QTable:q["a"],QIcon:w["a"],QDialog:F["a"]}),j()(O,"directives",{ClosePopup:k})},d887:function(e,t,r){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function a(e){var t="string"===typeof e||e instanceof String;if(!t){var r=n(e);throw null===e?r="null":"object"===r&&(r=e.constructor.name),new TypeError("Expected a string but received a ".concat(r))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a,e.exports=t.default,e.exports.default=t.default},e409:function(e,t,r){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;for(var r in t)"undefined"===typeof e[r]&&(e[r]=t[r]);return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default,e.exports.default=t.default},f754:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var n=a(r("d887"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function o(e,t){var r,a;(0,n.default)(e),"object"===i(t)?(r=t.min||0,a=t.max):(r=arguments[1],a=arguments[2]);var o=encodeURI(e).split(/%..|./).length-1;return o>=r&&("undefined"===typeof a||o<=a)}e.exports=t.default,e.exports.default=t.default}}]);
//# sourceMappingURL=chunk-06a65220.523ceab7.js.map