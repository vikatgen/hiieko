(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{154:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return l.default}}),t.regex=t.ref=t.len=t.req=void 0;var r,l=(r=n(159))&&r.__esModule?r:{default:r};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===o(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=d;t.len=function(e){return Array.isArray(e)?e.length:"object"===o(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,n){return"function"==typeof e?e.call(t,n):n[e]};t.regex=function(e,t){return(0,l.default)({type:e},(function(e){return!d(e)||t.test(e)}))}},156:function(e,t,n){var content=n(182);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("4bed6fb2",content,!0,{sourceMap:!1})},157:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return k.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return S.default}}),t.helpers=void 0;var l=E(n(158)),o=E(n(161)),d=E(n(162)),f=E(n(163)),c=E(n(164)),m=E(n(165)),v=E(n(166)),x=E(n(167)),h=E(n(168)),y=E(n(169)),_=E(n(170)),w=E(n(171)),C=E(n(172)),k=E(n(173)),j=E(n(174)),P=E(n(175)),O=E(n(176)),$=E(n(177)),A=E(n(178)),M=E(n(179)),S=E(n(180)),T=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=L();if(t&&t.has(e))return t.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var desc=l?Object.getOwnPropertyDescriptor(e,o):null;desc&&(desc.get||desc.set)?Object.defineProperty(n,o,desc):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(154));function L(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return L=function(){return e},e}function E(e){return e&&e.__esModule?e:{default:e}}t.helpers=T},158:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(154).regex)("alpha",/^[a-zA-Z]*$/);t.default=r},159:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="web"===e.env.BUILD?n(160).withParams:n(101).withParams;t.default=r}).call(this,n(100))},160:function(e,t,n){"use strict";(function(e){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var r="undefined"!=typeof window?window:void 0!==e?e:{},l=r.vuelidate?r.vuelidate.withParams:function(e,t){return"object"===n(e)&&void 0!==t?t:e((function(){}))};t.withParams=l}).call(this,n(25))},161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(154).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=r},162:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(154).regex)("numeric",/^[0-9]*$/);t.default=r},163:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(154);t.default=function(e,t){return(0,r.withParams)({type:"between",min:e,max:t},(function(n){return!(0,r.req)(n)||(!/\s/.test(n)||n instanceof Date)&&+e<=+n&&+t>=+n}))}},164:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(154).regex)("email",/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/);t.default=r},165:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(154),l=(0,r.withParams)({type:"ipAddress"},(function(e){if(!(0,r.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(o)}));t.default=l;var o=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(154);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},(function(t){if(!(0,r.req)(t))return!0;if("string"!=typeof t)return!1;var n="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==n&&(6===n.length||8===n.length)&&n.every(l)}))};var l=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(154);t.default=function(e){return(0,r.withParams)({type:"maxLength",max:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)<=e}))}},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(154);t.default=function(e){return(0,r.withParams)({type:"minLength",min:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)>=e}))}},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(154),l=(0,r.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,r.req)(e.trim()):(0,r.req)(e)}));t.default=l},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(154);t.default=function(e){return(0,r.withParams)({type:"requiredIf",prop:e},(function(t,n){return!(0,r.ref)(e,this,n)||(0,r.req)(t)}))}},171:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(154);t.default=function(e){return(0,r.withParams)({type:"requiredUnless",prop:e},(function(t,n){return!!(0,r.ref)(e,this,n)||(0,r.req)(t)}))}},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(154);t.default=function(e){return(0,r.withParams)({type:"sameAs",eq:e},(function(t,n){return t===(0,r.ref)(e,this,n)}))}},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(154).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=r},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(154);t.default=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.withParams)({type:"or"},(function(){for(var e=this,n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t.length>0&&t.reduce((function(t,n){return t||n.apply(e,r)}),!1)}))}},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(154);t.default=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.withParams)({type:"and"},(function(){for(var e=this,n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t.length>0&&t.reduce((function(t,n){return t&&n.apply(e,r)}),!0)}))}},176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(154);t.default=function(e){return(0,r.withParams)({type:"not"},(function(t,n){return!(0,r.req)(t)||!e.call(this,t,n)}))}},177:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(154);t.default=function(e){return(0,r.withParams)({type:"minValue",min:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(154);t.default=function(e){return(0,r.withParams)({type:"maxValue",max:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(154).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=r},180:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(0,n(154).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=r},181:function(e,t,n){"use strict";var r=n(156);n.n(r).a},182:function(e,t,n){(t=n(36)(!1)).push([e.i,"#scrollSection[data-v-2257ebd0]::-webkit-scrollbar{display:none;width:0;height:0}#scrollSection[data-v-2257ebd0]{scrollbar-width:none;-ms-overflow-style:none}input[data-v-2257ebd0],textarea[data-v-2257ebd0]{border:1px solid #f7fafc;box-shadow:none}input[data-v-2257ebd0]:focus:invalid,textarea[data-v-2257ebd0]:focus:invalid{border:1px solid #f56565}input[data-v-2257ebd0]:focus:-moz-ui-invalid,textarea[data-v-2257ebd0]:focus:-moz-ui-invalid{border:1px solid #f56565}input[data-v-2257ebd0]:valid,textarea[data-v-2257ebd0]:valid{border:1px solid #6fc085}form button[data-v-2257ebd0]:disabled{background-color:#edf2f7;pointer-events:none}",""]),e.exports=t},183:function(e,t,n){"use strict";n.r(t);var r={props:[],data:function(){return{isOpen:!1}},methods:{toggle:function(){this.isOpen=!this.isOpen}}},l=n(13),o=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"px-4 border-b border-green-700 bg-white z-10 sticky top-0 bottom-0"},[n("div",{staticClass:"py-4 flex items-center justify-between"},[n("div",{staticClass:"lg:inline-block"},[n("n-link",{staticClass:"cursor-pointer",attrs:{to:"/"}},[n("img",{attrs:{src:"/hiieko_logo.png",alt:"Hiieko logo"}})])],1),e._v(" "),n("div",{staticClass:"flex"},[n("button",{staticClass:"focus:outline-none cursor-pointer",attrs:{type:"button"},on:{click:e.toggle}},[e.isOpen?n("svg",{staticClass:"w-4 h-4 fill-current text-green-700",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14.483 14.47"}},[n("path",{attrs:{id:"cross-24-512",d:"M15.79,3.232a.557.557,0,0,1,0,.785L11.464,8.339a.558.558,0,0,0,0,.786l4.324,4.323a.558.558,0,0,1,0,.786L14.213,15.8a.561.561,0,0,1-.787,0L9.1,11.481a.559.559,0,0,0-.787,0L3.991,15.8a.559.559,0,0,1-.787,0L1.631,14.229a.558.558,0,0,1,0-.786L5.959,9.122a.558.558,0,0,0,0-.786L1.635,4.012a.557.557,0,0,1,0-.786l1.574-1.57a.56.56,0,0,1,.787,0L8.318,5.979a.558.558,0,0,0,.787,0l4.326-4.32a.56.56,0,0,1,.787,0Z",transform:"translate(-1.469 -1.495)"}})]):n("svg",{staticClass:"w-5 h-5 fill-current text-green-700",attrs:{id:"hamburger",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 15"}},[n("path",{attrs:{id:"bars",d:"M.857,63H23.143A.843.843,0,0,0,24,62.16v-1.3A.857.857,0,0,0,23.143,60H.857A.857.857,0,0,0,0,60.857v1.3A.843.843,0,0,0,.857,63Z",transform:"translate(0 -60)",fill:"#116d3b"}}),e._v(" "),n("path",{attrs:{id:"bars-2","data-name":"bars",d:"M.857,63H23.143A.843.843,0,0,0,24,62.16v-1.3A.857.857,0,0,0,23.143,60H.857A.857.857,0,0,0,0,60.857v1.3A.843.843,0,0,0,.857,63Z",transform:"translate(0 -54)",fill:"#116d3b"}}),e._v(" "),n("path",{attrs:{id:"bars-3","data-name":"bars",d:"M.857,63H23.143A.843.843,0,0,0,24,62.16v-1.3A.857.857,0,0,0,23.143,60H.857A.857.857,0,0,0,0,60.857v1.3A.843.843,0,0,0,.857,63Z",transform:"translate(0 -48)",fill:"#116d3b"}})])])])]),e._v(" "),n("nav",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],staticClass:"transition ease-in-out duration-300 sm:text-center lg:flex lg:w-11/12 lg:max-w-5xl lg:mx-auto lg:mb-8 sm:mb-8"},[n("div",{staticClass:"lg:flex sm:flex sm:justify-around lg:w-1/2 lg:justify-start lg:pt-10"},[n("div",{staticClass:"py-6 lg:py-0 pl-6 lg:text-left sm:text-left lg:w-1/2"},[n("span",{staticClass:"text-blue-700 font-sans font-bold"},[e._v("Avaleht")]),e._v(" "),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#meist",offset:-55},expression:"{ el: '#meist', offset: -55 }"}],staticClass:"mt-4 block font-sans text-blue-700 hover:text-blue-500",attrs:{href:"#meist"},on:{click:e.toggle}},[e._v("Meist")]),e._v(" "),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#teenused",offset:-55},expression:"{ el: '#teenused', offset: -55 }"}],staticClass:"block mt-4 font-sans text-blue-700 hover:text-blue-500",attrs:{href:"/#teenused"},on:{click:e.toggle}},[e._v("Teenused")]),e._v(" "),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#tehtudTood",offset:-55},expression:"{ el: '#tehtudTood', offset: -55 }"}],staticClass:"block mt-4 mb-6 font-sans text-blue-700 hover:text-blue-500",attrs:{href:"/#tehtudTood"},on:{click:e.toggle}},[e._v("Tehtud Tööd")]),e._v(" "),n("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#kontaktForm",offset:-150},expression:"{ el: '#kontaktForm', offset: -150 }"}],staticClass:"px-4 py-2 rounded-lg font-sans text-blue-700 border border-blue-700 hover:text-blue-500 uppercase",attrs:{href:"/#contactForm"},on:{click:e.toggle}},[e._v("Kontakt")])]),e._v(" "),n("div",{staticClass:"py-8 lg:py-0 pl-6 lg:text-left sm:text-left"},[n("span",{staticClass:"text-blue-700 font-sans font-bold"},[e._v("Lisainfo")]),e._v(" "),n("n-link",{staticClass:"block mt-4 font-sans text-blue-700 hover:text-blue-500",attrs:{to:"/toopakkumised"}},[e._v("Tööpakkumised")]),e._v(" "),n("n-link",{staticClass:"block mt-4 font-sans text-blue-700 hover:text-blue-500",attrs:{to:"/kontaktid"}},[e._v("Tallinna osakond")]),e._v(" "),n("n-link",{staticClass:"block mt-4 font-sans text-blue-700 hover:text-blue-500",attrs:{to:"/kontaktid"}},[e._v("Tartu osakond")]),e._v(" "),n("n-link",{staticClass:"block mt-4 font-sans text-blue-700 hover:text-blue-500",attrs:{to:"/privacy"}},[e._v("Privaatsussätted")])],1)]),e._v(" "),e._m(0)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"lg:flex lg:justify-end hidden lg:visible"},[t("div",{staticClass:"lg:shadow"},[t("img",{attrs:{src:"/google-image-tallinn.png",alt:"Tallinna kontori asukoht"}})])])}],!1,null,null,null).exports,d=n(157),f={components:{HeaderNav:o},data:function(){return{form:{nimi:null,email:null,message:null}}},validations:{form:{nimi:{required:d.required,minLength:Object(d.minLength)(2)},email:{required:d.required,email:d.email},message:{required:d.required,minLength:Object(d.minLength)(15)}}},methods:{submitForm:function(){this.$v.form.$invalid?console.log("Invalid form"):console.log("Form Submitted",this.form)}}},c=(n(181),Object(l.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("HeaderNav"),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),n("section",{staticClass:"px-4 py-16 md:px-0 md:max-w-lg md:mx-auto",attrs:{id:"tehtudTood"}},[n("div",{staticClass:"sm:w-2/3 md:w-full sm:mx-auto"},[n("nuxt-link",{staticClass:"block py-4 text-center border border-green-500 rounded-lg hover:border-blue-700 text-green-500 hover:text-blue-700 uppercase font-sans font-bold",attrs:{to:"tehtud-tood"}},[e._v("Tutvu meie tehtud töödega")])],1)]),e._v(" "),n("section",{staticClass:"lg:flex lg:flex-row-reverse lg:max-w-5xl lg:mx-auto lg:mt-8",attrs:{id:"kontaktForm"}},[n("section",{staticClass:"px-4 mb-24 lg:w-2/3 lg:border-solid lg:border-2 lg:border-green-500 lg:rounded-lg lg:py-4 lg:px-8 lg:ml-8"},[n("div",{staticClass:"sm:w-5/6 lg:w-full sm:mx-auto"},[n("h3",{staticClass:"mb-4 font-sans font-bold text-center text-blue-700 text-2xl uppercase"},[e._v("Kirjuta meile")]),e._v(" "),n("form",{staticClass:"md:max-w-lg md:mx-auto lg:max-w-full",attrs:{name:"contactForm",method:"POST",action:"/success",netlify:"","netlify-honeypot":"bot-field",novalidate:""}},[n("input",{attrs:{type:"hidden",name:"form-name",value:"contactForm"}}),e._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.form.nimi.$model,expression:"$v.form.nimi.$model"}],staticClass:"appearance-none bg-gray-100 rounded-lg w-full py-4 px-3 text-gray-700 leading-tight font-sans focus:outline-none placeholder-gray-700",attrs:{type:"text",name:"nimi",placeholder:"Teie nimi",required:""},domProps:{value:e.$v.form.nimi.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.nimi,"$model",t.target.value)}}}),e._v(" "),e.$v.form.nimi.$error?n("p",{staticClass:"text-sm text-red-400 pl-4"},[e._v("Palun sisetage enda nimi!")]):e._e()]),e._v(" "),n("div",{staticClass:"my-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"appearance-none bg-gray-100 rounded-lg w-full py-4 px-3 text-gray-700 leading-tight font-sans focus:outline-none placeholder-gray-700",attrs:{type:"email",name:"email",placeholder:"Teie emaili aadress",required:""},domProps:{value:e.form.email},on:{change:e.$v.form.email.$touch,input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e._v(" "),e.$v.form.email.$error?n("p",{staticClass:"text-sm text-red-400 pl-4"},[e._v("Palun sisetage õige emaili aadress!")]):e._e()]),e._v(" "),n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.$v.form.message.$model,expression:"$v.form.message.$model"}],staticClass:"appearance-none bg-gray-100 rounded-lg w-full py-4 px-3 text-gray-700 leading-tight font-sans focus:outline-none placeholder-gray-700",attrs:{type:"textarea",name:"message",rows:"8",placeholder:"Lisage rohkem infot",required:""},domProps:{value:e.$v.form.message.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.form.message,"$model",t.target.value)}}}),e._v(" "),e.$v.form.message.$error?n("p",{staticClass:"text-sm text-red-400 pl-4"},[e._v("Sisestage täpne lisainfo.")]):e._e()]),e._v(" "),n("button",{staticClass:"mt-4 py-4 px-16 rounded-lg bg-green-500 text-white uppercase font-sans font-bold cursor-pointer hover:bg-green-600 shadow-md hover:shadow-none",attrs:{type:"submit",value:"Saada sõnum",disabled:e.$v.form.$invalid}},[e._v("Saada")])])])]),e._v(" "),e._m(4)])],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"px-4 py-8 bg-repeat border-b border-solid border-gray-200 md:flex md:flex-row-reverse",staticStyle:{background:"url('/hero-bg.svg')"}},[n("div",{staticClass:"md:flex md:flex-row-reverse md:max-w-3xl md:mx-auto lg:max-w-5xl lg:mx-auto lg:items-center"},[n("div",{staticClass:"pb-8 flex justify-center md:w-1/2"},[n("img",{staticClass:"relative lg:w-full",attrs:{src:"hero-svg.svg",alt:"Hero image"}})]),e._v(" "),n("div",{staticClass:"sm:block sm:text-center md:text-left md:w-1/2"},[n("h1",{staticClass:"mb-6 font-sans font-light text-4xl capitalize lg:text-5xl sm:w-4/5"},[e._v("Ehitiste tehnosüsteemid & automaatika")]),e._v(" "),n("p",{staticClass:"inline-block px-6 rounded-lg font-sans font-light bg-white border border-gray-200"},[n("span",{staticClass:"opacity-75 text-sm sm:text-base"},[e._v("Projekteerimine")]),e._v(" "),n("span",{staticClass:"opacity-75 text-sm sm:text-base"},[e._v("/")]),e._v(" "),n("span",{staticClass:"opacity-75 text-sm sm:text-base"},[e._v(" Paigaldus")]),e._v(" "),n("span",{staticClass:"opacity-75 text-sm sm:text-base"},[e._v("/")]),e._v(" "),n("span",{staticClass:"opacity-75 text-sm sm:text-base"},[e._v(" Hooldus")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"px-4 py-16 text-sm md:text-base md:flex md:max-w-3xl md:mx-auto lg:max-w-5xl",attrs:{id:"meist"}},[t("div",{staticClass:"mb-8 md:w-1/2 md:pr-4"},[t("h3",{staticClass:"mb-4 font-sans font-bold text-center text-blue-700 md:text-left"},[this._v("Kogemused aastast 1994")]),this._v(" "),t("p",{staticClass:"opacity-75 font-sans font-light sm:w-2/3 md:w-full md:text-left sm:mx-auto sm:text-center"},[this._v("AS HIIEKO on 1994. aastal loodud erakapitalil põhinev ehituslikke tehnosüsteeme ja automaatikat projekteeriv, paigaldav ja hooldav firma. Oleme professionaalne ja usaldusväärne partner tsiviil – ja tööstusehituses.")])]),this._v(" "),t("div",{staticClass:"md:w-1/2 md:pl-4"},[t("h3",{staticClass:"mb-4 font-sans font-bold text-center text-blue-700 md:text-left"},[this._v("Esimesed Eestis")]),this._v(" "),t("p",{staticClass:"opacity-75 font-sans font-light sm:w-2/3 sm:mx-auto sm:text-center md:text-left md:w-full"},[this._v("Esimese ehitusettevõttena Eestis sertifitseeriti 1997. aastal AS Hiieko kvaliteedisüsteem ISO 9002 kvaliteedijuhtimisstandardi alusel. Aastal 2001 sertifitseeriti kvaliteedisüsteem aga ISO 9001 standardi alusel.")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"py-8 lg:max-w-5xl lg:mx-auto"},[n("div",{staticClass:"px-4"},[n("h3",{staticClass:"mb-4 font-sans font-bold text-center text-green-600 text-2xl"},[e._v("H.I.I.E.K.O")])]),e._v(" "),n("div",{staticClass:"flex overflow-x-auto py-8 px-4 lg:px-0 lg:overflow-hidden lg:mx-auto",attrs:{id:"scrollSection"}},[n("div",{staticClass:"flex lg:flex-wrap lg:justify-center"},[n("div",{staticClass:"flex-col w-64 items-center border-2 border-green-500 rounded-lg p-4 mr-4 lg:mb-8"},[n("div",{staticClass:"flex justify-center items-center -mt-10"},[n("h4",{staticClass:"px-6 py-2 bg-white text-blue-700 font-sans font-bold"},[e._v("Humaansus")])]),e._v(" "),n("div",{staticClass:"flex items-center font-sans font-light h-full"},[n("p",{staticClass:"text-center py-8 text-blue-700"},[e._v("Töötame inimestele ideaalselt sobiva keskkonna loomise nimel ning peame lugu oma töötajatest, klientidest ja partneritest.")])])]),e._v(" "),n("div",{staticClass:"flex-col w-64 items-center border-2 border-green-500 rounded-lg p-4 mr-4 lg:mb-8"},[n("div",{staticClass:"flex justify-center items-center -mt-10"},[n("h4",{staticClass:"px-6 py-2 bg-white text-blue-700 font-sans font-bold"},[e._v("Inspiratsioon")])]),e._v(" "),n("div",{staticClass:"flex items-center h-full"},[n("p",{staticClass:"text-center font-sans font-light py-8 text-blue-700"},[e._v("Leiame parimad lahendused sõltuvalt kliendi või partneri ainulaadsest vajadusest.")])])]),e._v(" "),n("div",{staticClass:"flex-col w-64 items-center border-2 border-green-500 rounded-lg p-4 mr-4 lg:mb-8"},[n("div",{staticClass:"flex justify-center items-center -mt-10"},[n("h4",{staticClass:"px-6 py-2 bg-white text-blue-700 font-sans font-bold"},[e._v("Innovaatilisus")])]),e._v(" "),n("div",{staticClass:"flex items-center h-full"},[n("p",{staticClass:"text-center py-8 font-sans font-light text-blue-700"},[e._v("Arendame ühteaegu nii ettevõtet kui meie töötajaid, et pakkuda tõeliselt kaasaegset teenust.")])])]),e._v(" "),n("div",{staticClass:"flex-col w-64 items-center border-2 border-green-500 rounded-lg p-4 mr-4"},[n("div",{staticClass:"flex justify-center items-center -mt-10"},[n("h4",{staticClass:"px-6 py-2 bg-white text-blue-700 font-sans font-bold"},[e._v("Eeskujulikkus")])]),e._v(" "),n("div",{staticClass:"flex items-center h-full"},[n("p",{staticClass:"text-center py-8 font-sans font-light text-blue-700"},[e._v("Meie töö tulemused on alati kvaliteetsed ja usaldusväärsed.")])])]),e._v(" "),n("div",{staticClass:"flex-col w-64 items-center border-2 border-green-500 rounded-lg p-4 mr-4"},[n("div",{staticClass:"flex justify-center items-center -mt-10"},[n("h4",{staticClass:"px-6 py-2 bg-white text-blue-700 font-sans font-bold"},[e._v("Kompetentsus")])]),e._v(" "),n("div",{staticClass:"flex items-center h-full"},[n("p",{staticClass:"text-center py-8 font-sans font-light text-blue-700"},[e._v("Iga meie töötaja on oma ala asjatundja, seepärast on ka terve ettevõte tippspetsialist keskkonnatehnika alal.")])])]),e._v(" "),n("div",{staticClass:"flex-col w-64 items-center border-2 border-green-500 rounded-lg p-4 mr-4"},[n("div",{staticClass:"flex justify-center items-center -mt-10"},[n("h4",{staticClass:"px-6 py-2 bg-white text-blue-700 font-sans font-bold"},[e._v("Operatiivsus")])]),e._v(" "),n("div",{staticClass:"flex items-center h-full"},[n("p",{staticClass:"text-center py-8 font-sans font-light text-blue-700"},[e._v("Peame alati kinni lubadustest ega hiline tähtaegadega.")])])])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"px-4 py-10 bg-repeat border-b border-t border-gray-200",staticStyle:{background:"url('/hero-bg.svg')"},attrs:{id:"teenused"}},[n("div",{staticClass:"mb-8 lg:mb-0"},[n("h3",{staticClass:"mb-4 lg:mb-0 font-sans font-bold text-center text-green-600 text-2xl"},[e._v("Ehitiste tehnosüsteemid")])]),e._v(" "),n("div",{staticClass:"py-8 lg:py-4 lg:max-w-5xl lg:mx-auto"},[n("div",{staticClass:"lg:flex"},[n("div",{staticClass:"flex flex-col min-w-full items-center border-2 border-green-500 rounded-lg p-4 bg-white sm:w-2/3 sm:mx-auto md:max-w-md lg:w-1/3 lg:h-56 lg:my-16"},[n("div",{staticClass:"flex items-center -mt-10"},[n("h4",{staticClass:"px-6 py-2 bg-white text-white text-center bg-green-500 rounded-lg font-sans font-bold w-64"},[e._v("Kavandamine ja projekteerimine")])]),e._v(" "),n("div",{staticClass:"flex items-center h-full"},[n("p",{staticClass:"text-center font-sans font-light py-8 text-blue-700"},[e._v("Meie eksperdid tutvustavad Teile oma nägemust soovitud süsteemi võimalikest lahendustest, võttes arvesse Teie erisoove ja ruumilisi võimalusi.")])])]),e._v(" "),n("div",{staticClass:"flex flex-col min-w-full items-center border-2 border-green-500 rounded-lg p-4 my-16 bg-white sm:w-2/3 sm:mx-auto md:max-w-md lg:w-1/3 lg:mx-4 lg:h-56"},[n("div",{staticClass:"flex items-center -mt-10"},[n("h4",{staticClass:"px-6 py-2 bg-white text-white text-center bg-green-500 rounded-lg font-sans font-bold w-64"},[e._v("Paigaldamine ja seadistamine")])]),e._v(" "),n("div",{staticClass:"flex items-center h-full"},[n("p",{staticClass:"text-center font-sans font-light py-8 text-blue-700"},[e._v("Pikaajalise kogemusega spetsialistid paigaldavad Teie soovitud lahenduse ning seavad selle töökorda, jälgides, et kõik normid ja nõuded oleksid täidetud.")])])]),e._v(" "),n("div",{staticClass:"flex flex-col min-w-full items-center border-2 border-green-500 rounded-lg p-4 my-16 bg-white sm:w-2/3 sm:mx-auto md:max-w-md lg:w-1/3 lg:h-56"},[n("div",{staticClass:"flex items-center -mt-10"},[n("h4",{staticClass:"px-6 py-4 bg-white text-white text-center bg-green-500 rounded-lg font-sans font-bold w-64"},[e._v("Hooldus ja remont")])]),e._v(" "),n("div",{staticClass:"flex items-center h-full bg-white"},[n("p",{staticClass:"text-center font-sans font-light py-8 text-blue-700"},[e._v("Meie tehnikud tagavad tehnosüsteemide pika eluea ja parandavad aja jooksul tekkinud rikkeid.")])])])]),e._v(" "),n("div",{staticClass:"sm:w-2/3 sm:mx-auto lg:flex lg:w-full lg:flex-wrap lg:justify-center"},[n("div",{staticClass:"mb-4 block bg-green-500 text-center rounded-lg py-4 lg:mx-1 lg:flex lg:px-6"},[n("span",{staticClass:"text-white font-sans"},[e._v("Õhuniisutus -ja kuivatussüsteemid")])]),e._v(" "),n("div",{staticClass:"mb-4 block bg-green-500 text-center rounded-lg py-4 lg:mx-1 lg:flex lg:px-6"},[n("span",{staticClass:"text-white font-sans"},[e._v("Kesktolmuimejate süsteemid")])]),e._v(" "),n("div",{staticClass:"mb-4 block bg-green-500 text-center rounded-lg py-4 lg:mx-1 lg:flex lg:px-6"},[n("span",{staticClass:"text-white font-sans"},[e._v("Veevarustus ja äravoolusüsteemid")])]),e._v(" "),n("div",{staticClass:"mb-4 block bg-green-500 text-center rounded-lg py-4 lg:mx-1 lg:flex lg:px-6"},[n("span",{staticClass:"text-white font-sans"},[e._v("Küttesüsteemid")])]),e._v(" "),n("div",{staticClass:"mb-4 block bg-green-500 text-center rounded-lg py-4 lg:mx-1 lg:flex lg:px-6"},[n("span",{staticClass:"text-white font-sans"},[e._v("Jahutussüsteemid")])]),e._v(" "),n("div",{staticClass:"mb-4 block bg-green-500 text-center rounded-lg py-4 lg:mx-1 lg:flex lg:px-6"},[n("span",{staticClass:"text-white font-sans"},[e._v("Automaatikasüsteemid")])]),e._v(" "),n("div",{staticClass:"mb-4 block bg-green-500 text-center rounded-lg py-4 lg:mx-1 lg:flex lg:px-6"},[n("span",{staticClass:"text-white font-sans"},[e._v("Ventilatsioonisüsteemid")])])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"mb-16 px-4 md:flex md:w-11/12 md:mx-auto lg:flex-col lg:w-1/3 lg:pr-8"},[n("div",{staticClass:"block mb-16 sm:w-5/6 sm:mx-auto md:w-1/2 md:pr-8 lg:pr-0 md:border-r md:border-solid md:border-green-500 lg:border-none lg:w-full"},[n("h3",{staticClass:"mb-8 text-blue-700 font-sans font-bold uppercase text-xl"},[e._v("Tallinna osakond")]),e._v(" "),n("div",{staticClass:"flex justify-between mb-4"},[n("span",{staticClass:"text-blue-700 font-sans font-normal uppercase"},[e._v("Aadress")]),e._v(" "),n("p",{staticClass:"text-blue-700 font-sans font-light"},[e._v("Pirni 12, 10617 TALLINN")])]),e._v(" "),n("div",{staticClass:"flex justify-between mb-4"},[n("span",{staticClass:"text-blue-700 font-sans font-normal uppercase"},[e._v("Telefon")]),e._v(" "),n("a",{staticClass:"text-blue-700 font-sans font-light",attrs:{href:"tel:+3726711300"}},[e._v("+372 6 711 300")])])]),e._v(" "),n("div",{staticClass:"block mb-8 md:mb-16 sm:w-5/6 sm:mx-auto md:w-1/2 md:pl-8 lg:pl-0 lg:w-full"},[n("h3",{staticClass:"mb-8 text-blue-700 font-sans font-bold uppercase text-xl"},[e._v("Tartu osakond")]),e._v(" "),n("div",{staticClass:"flex justify-between mb-4"},[n("span",{staticClass:"text-blue-700 font-sans font-normal uppercase"},[e._v("Aadress")]),e._v(" "),n("p",{staticClass:"text-blue-700 font-sans font-light"},[e._v("Pikk 20, 50113 TARTU")])]),e._v(" "),n("div",{staticClass:"flex justify-between mb-2"},[n("span",{staticClass:"text-blue-700 font-sans font-normal uppercase"},[e._v("Telefon")]),e._v(" "),n("a",{staticClass:"text-blue-700 font-sans font-light",attrs:{href:"tel:+3727366637"}},[e._v("+372 7 366 637")])]),e._v(" "),n("div",{staticClass:"block text-right"},[n("a",{staticClass:"text-blue-700 font-sans font-light",attrs:{href:"tel:+37253090927"}},[e._v("+372 53 090 927")])])]),e._v(" "),n("div",{staticClass:"border-t border-gray-100 md:hidden lg:block"},[n("div",{staticClass:"pt-4 flex justify-between"},[n("span",{staticClass:"flex text-blue-700 font-sans font-normal uppercase"},[e._v("E-post")]),e._v(" "),n("a",{staticClass:"flex text-blue-700 font-sans font-light",attrs:{href:"mailto:hiieko@hiieko.ee"}},[e._v("hiieko@hiieko.ee")])])])])}],!1,null,"2257ebd0",null));t.default=c.exports}}]);