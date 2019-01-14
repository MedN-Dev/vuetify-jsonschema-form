!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VJsonschemaForm=t():e.VJsonschemaForm=t()}(this,function(){return function(e){var t={};function r(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(l,o,function(t){return e[t]}.bind(null,o));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([,function(e,t,r){"use strict";function l(e,t,r,l,o,n,i,a){var s,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=r,u._compiled=!0),l&&(u.functional=!0),n&&(u._scopeId="data-v-"+n),i?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=s):o&&(s=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(u.functional){u._injectStyles=s;var c=u.render;u.render=function(e,t){return s.call(t),c(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,s):[s]}return{exports:e,options:u}}r.d(t,"a",function(){return l})},function(e,t,r){},,,,function(e,t,r){"use strict";r.r(t);var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.resolvedSchema?r("property",{attrs:{schema:e.resolvedSchema,"model-root":e.modelWrapper.root,"model-wrapper":e.modelWrapper,options:e.fullOptions,"model-key":"root","parent-key":""},on:{error:function(t){return e.$emit("error",t)}}}):e._e()};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}l._withStripped=!0;var n=r(7),i={cache:{},extendtoken:"$extend",reftoken:"$ref",pathtoken:"#",debug:!1,clone:function(e){var t,r;if(null===e||"object"!==o(e)||"function"==typeof e)return e;for(t in r=e.constructor(),e)r[t]=i.clone(e[t]);return r},findIds:function(e,t){var r,l,n,a;for(l in r=!1,n={},e)a=e[l],null!=e.id&&(r=e.id),r&&"id"!==l&&(n[l]=a),"object"===o(a)&&i.findIds(a,t);if(r)return t[r]=n,n},get_json_pointer:function(e,t){var r,l;"."===(r=(r=e.replace(/\\\//,"#SLASH#").replace(/\//g,".").replace(/#SLASH#/,"/")).replace(new RegExp("^"+i.pathtoken),""))[0]&&(r=r.substr(1,r.length-1));try{i.debug&&console.log("evaluating '"+r+"'"),l=n.getter(r)(t)}catch(e){console.error(e),l=""}return l},replace:function(e,t,r){var l,n,a,s,u,c;for(l in u=[],e)c=e[l],i.debug&&"string"==typeof n&&console.log("checking "+l),null!=c&&null!=c[i.reftoken]?(n=c[i.reftoken],i.debug&&"string"==typeof n&&console.log("checking "+l+" -> "+n),Object.keys(c).length>1&&console.error("json-ref-lite error: object '"+l+"' contains reference as well as other properties..ignoring properties"),Array.isArray(n)?n=i.replace(n,t,r):null!=t[n]?e[l]=t[n]:String(n).match(new RegExp("^"+i.pathtoken))&&(i.debug&&console.log("checking "+n+" pathtoken"),e[l]=i.get_json_pointer(n,r)),null!=(null!=(a=e[l])?a.length:void 0)&&0===(null!=(s=e[l])?s.length:void 0)&&i.debug?u.push(console.log(n+" reference not found")):u.push(void 0)):"object"===o(c)?u.push(i.replace(c,t,r)):u.push(void 0);return u},extend:function(e){var t,r,l,n,a,s;if("object"===o(e)){for(t in l=[],e){if(s=e[t],t===i.extendtoken&&null!=s[i.reftoken]){for(n in r=i.get_json_pointer(s[i.reftoken],e),s)a=s[n],n!==i.reftoken&&(r[n]=a);delete e[t]}"object"===o(s)?l.push(s=i.extend(s)):l.push(void 0)}return l}},resolve:function(e){var t;return t={},i.findIds(e,t),i.debug&&Object.keys(t).length&&console.dir(t),i.replace(e,t,e),e},evaluate:function(e,t,r){var l,n,a;for(l in null==r&&(r=i.evaluateStr),n=i.clone(e))"string"==typeof(a=n[l])&&(e[l]=r(a,t)),"object"===o(a)&&(e[l]=i.evaluate(a,t));return e},evaluateStr:function(e,t){if("string"!=typeof e)return e;if("{"!==e[0]||"}"!==e[e.length-1])return e.replace(/(\{)(.*?)(\})/g,function(e,r,l){var o;if(o="",null==t||null==l)return o;if(null!=t[l]&&"function"==typeof t[l])o=t[l]();else if(null!=t[l])o=t[l];else{try{l=l.replace(new RegExp("^"+i.pathtoken+"/"),"").replace(/\//g,"."),o=n.getter(l)(t)}catch(e){err=e,o=""}null==o&&(o="")}return i.evaluateStr(o,t),o});try{return n.getter(e.replace(/^{/,"").replace(/}$/,""))(t)}catch(e){return null}}},a=i,s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.fullSchema?r("div",{staticClass:"vjsf-property"},[void 0!==e.fullSchema.const?r("div"):"string"===e.fullSchema.type&&["date","date-time"].includes(e.fullSchema.format)?r("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.modelWrapper[e.modelKey],disabled:e.disabled,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(t){e.$set(e.modelWrapper,e.modelKey,t)}},model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[r("v-text-field",{attrs:{slot:"activator",label:e.label,name:e.fullKey,hint:e.fullSchema.description,required:e.required,rules:e.rules,clearable:!e.required,"prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.modelWrapper[e.modelKey],callback:function(t){e.$set(e.modelWrapper,e.modelKey,t)},expression:"modelWrapper[modelKey]"}}),e._v(" "),r("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.modelWrapper[e.modelKey],callback:function(t){e.$set(e.modelWrapper,e.modelKey,t)},expression:"modelWrapper[modelKey]"}},[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),e._v(" "),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.$refs.menu.save(e.modelWrapper[e.modelKey])}}},[e._v("OK")])],1)],1):"hexcolor"===e.fullSchema.format?r("v-input",{attrs:{name:e.fullKey,label:e.label,hint:e.fullSchema.description,required:e.required,rules:e.rules,disabled:e.disabled,"persistent-hint":""}},[e._v("\n      "),r("swatches",{attrs:{disabled:e.disabled,colors:e.options.colors,"trigger-style":{width:"36px",height:"36px"},shapes:"circles"},model:{value:e.modelWrapper[e.modelKey],callback:function(t){e.$set(e.modelWrapper,e.modelKey,t)},expression:"modelWrapper[modelKey]"}})],1):"array"===e.fullSchema.type&&e.fullSchema.items.enum||e.fullSchema.enum?r("v-select",{attrs:{items:"array"===e.fullSchema.type?e.fullSchema.items.enum:e.fullSchema.enum,name:e.fullKey,label:e.label,hint:e.fullSchema.description,"persistent-hint":!e.modelWrapper[e.modelKey],required:e.required,rules:e.rules,disabled:e.disabled,clearable:!e.required,multiple:"array"===e.fullSchema.type},model:{value:e.modelWrapper[e.modelKey],callback:function(t){e.$set(e.modelWrapper,e.modelKey,t)},expression:"modelWrapper[modelKey]"}}):"array"===e.fullSchema.type&&["string","integer","number"].includes(e.fullSchema.items.type)&&e.fullSchema.items.oneOf||["string","integer","number"].includes(e.fullSchema.type)&&e.fullSchema.oneOf?r("v-select",{attrs:{items:("array"===e.fullSchema.type?e.fullSchema.items:e.fullSchema).oneOf.map(function(e){return{value:e.const||e.enum&&e.enum[0],text:e.title}}),name:e.fullKey,label:e.label,hint:e.fullSchema.description,"persistent-hint":!e.modelWrapper[e.modelKey],required:e.required,disabled:e.disabled,rules:e.rules,clearable:!e.required,multiple:"array"===e.fullSchema.type},model:{value:e.modelWrapper[e.modelKey],callback:function(t){e.$set(e.modelWrapper,e.modelKey,t)},expression:"modelWrapper[modelKey]"}}):e.fromUrl||e.fullSchema["x-fromData"]?r("v-select",{attrs:{items:e.selectItems,name:e.fullKey,label:e.label,hint:e.fullSchema.description,"persistent-hint":!e.modelWrapper[e.modelKey],"no-data-text":e.options.noDataMessage,disabled:e.disabled,required:e.required,rules:e.rules,"item-text":e.itemTitle,"item-value":e.itemKey,"return-object":"array"===e.fullSchema.type&&"object"===e.fullSchema.items.type||"object"===e.fullSchema.type,clearable:!e.required,loading:e.loading,multiple:"array"===e.fullSchema.type},model:{value:e.modelWrapper[e.modelKey],callback:function(t){e.$set(e.modelWrapper,e.modelKey,t)},expression:"modelWrapper[modelKey]"}}):e.fromUrlWithQuery?r("v-autocomplete",{attrs:{items:e.selectItems,"search-input":e.q,name:e.fullKey,label:e.label,hint:e.fullSchema.description,"persistent-hint":!e.modelWrapper[e.modelKey],"no-data-text":e.options.noDataMessage,disabled:e.disabled,required:e.required,rules:e.rules,"item-text":e.itemTitle,"item-value":e.itemKey,"return-object":"array"===e.fullSchema.type&&"object"===e.fullSchema.items.type||"object"===e.fullSchema.type,clearable:!e.required,filter:function(){return!0},placeholder:e.options.searchMessage,loading:e.loading,multiple:"array"===e.fullSchema.type},on:{"update:searchInput":function(t){e.q=t}},model:{value:e.modelWrapper[e.modelKey],callback:function(t){e.$set(e.modelWrapper,e.modelKey,t)},expression:"modelWrapper[modelKey]"}}):"string"===e.fullSchema.type&&e.fullSchema.maxLength&&e.fullSchema.maxLength>1e3&&"single-line"!==e.fullSchema["x-display"]?r("v-textarea",{attrs:{name:e.fullKey,label:e.label,hint:e.fullSchema.description,disabled:e.disabled,required:e.required,rules:e.rules,box:""},model:{value:e.modelWrapper[e.modelKey],callback:function(t){e.$set(e.modelWrapper,e.modelKey,t)},expression:"modelWrapper[modelKey]"}}):"string"===e.fullSchema.type?r("v-text-field",{attrs:{name:e.fullKey,label:e.label,hint:e.fullSchema.description,disabled:e.disabled,required:e.required,rules:e.rules},model:{value:e.modelWrapper[e.modelKey],callback:function(t){e.$set(e.modelWrapper,e.modelKey,t)},expression:"modelWrapper[modelKey]"}}):"number"===e.fullSchema.type||"integer"===e.fullSchema.type?r("v-text-field",{attrs:{name:e.fullKey,label:e.label,hint:e.fullSchema.description,min:e.fullSchema.minimum,max:e.fullSchema.maximum,step:"integer"===e.fullSchema.type?1:.01,disabled:e.disabled,required:e.required,rules:e.rules,type:"number"},model:{value:e.modelWrapper[e.modelKey],callback:function(t){e.$set(e.modelWrapper,e.modelKey,e._n(t))},expression:"modelWrapper[modelKey]"}}):"boolean"===e.fullSchema.type?r("v-checkbox",{attrs:{label:e.label,name:e.fullKey,hint:e.fullSchema.description,disabled:e.disabled,required:e.required,rules:e.rules},model:{value:e.modelWrapper[e.modelKey],callback:function(t){e.$set(e.modelWrapper,e.modelKey,t)},expression:"modelWrapper[modelKey]"}}):"array"===e.fullSchema.type&&"string"===e.fullSchema.items.type?r("v-combobox",{attrs:{name:e.fullKey,label:e.label,hint:e.fullSchema.description,"persistent-hint":!e.modelWrapper[e.modelKey],required:e.required,rules:e.rules,disabled:e.disabled,chips:"",multiple:"","append-icon":""},scopedSlots:e._u([{key:"selection",fn:function(t){return[r("v-chip",{attrs:{selected:t.selected,close:""},on:{input:function(r){e.modelWrapper[e.modelKey].splice(e.modelWrapper[e.modelKey].indexOf(t.item))}}},[e._v("\n        "+e._s(t.item)+"\n      ")])]}}]),model:{value:e.modelWrapper[e.modelKey],callback:function(t){e.$set(e.modelWrapper,e.modelKey,t)},expression:"modelWrapper[modelKey]"}}):"object"===e.fullSchema.type?r("div",[e.fullSchema.title?r("v-subheader",{staticClass:"mt-2",style:e.foldable?"cursor:pointer;":"",on:{click:function(t){e.folded=!e.folded}}},[e._v("\n      "+e._s(e.fullSchema.title)+"\n       \n      "),e.foldable&&e.folded?r("v-icon",[e._v("arrow_drop_down")]):e._e(),e._v(" "),e.foldable&&!e.folded?r("v-icon",[e._v("arrow_drop_up")]):e._e()],1):e._e(),e._v(" "),r("v-slide-y-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.foldable||!e.folded,expression:"!foldable || !folded"}]},[e.fullSchema.description?r("p",[e._v(e._s(e.fullSchema.description))]):e._e(),e._v(" "),e._l(e.fullSchema.properties,function(t){return r("property",{key:t.key,attrs:{schema:t,"model-wrapper":e.modelWrapper[e.modelKey],"model-root":e.modelRoot,"model-key":t.key,"parent-key":e.fullKey+".",required:!(!e.fullSchema.required||!e.fullSchema.required.includes(t.key)),options:e.options},on:{error:function(t){return e.$emit("error",t)}}})}),e._v(" "),e._l(e.fullSchema.allOf||[],function(t,l){return r("property",{key:l,attrs:{schema:Object.assign({},t,{type:"object"}),"model-wrapper":e.subModels,"model-root":e.modelRoot,"model-key":"allOf-"+l,"parent-key":e.parentKey,options:e.options},on:{error:function(t){return e.$emit("error",t)}}})}),e._v(" "),e.fullSchema.oneOf?r("v-select",{attrs:{items:e.fullSchema.oneOf,disabled:e.disabled,"item-value":function(t){return e.oneOfConstProp?t.properties[e.oneOfConstProp.key].const:t.title},label:e.oneOfConstProp?e.oneOfConstProp.title||e.oneOfConstProp.key:"Type",required:e.oneOfRequired,clearable:!e.oneOfRequired,rules:e.oneOfRules,"item-text":"title","return-object":""},model:{value:e.currentOneOf,callback:function(t){e.currentOneOf=t},expression:"currentOneOf"}}):e._e(),e._v(" "),e.currentOneOf?[r("property",{attrs:{schema:Object.assign({},e.currentOneOf,{title:null,type:"object"}),"model-wrapper":e.subModels,"model-root":e.modelRoot,"parent-key":e.parentKey,options:e.options,"model-key":"currentOneOf"},on:{error:function(t){return e.$emit("error",t)}}})]:e._e()],2)])],1):"array"===e.fullSchema.type&&Array.isArray(e.fullSchema.items)?r("div",[e.fullSchema.title?r("v-subheader",{staticClass:"mt-2",style:e.foldable?"cursor:pointer;":"",on:{click:function(t){e.folded=!e.folded}}},[e._v("\n      "+e._s(e.fullSchema.title)+"\n       \n      "),e.foldable&&e.folded?r("v-icon",[e._v("arrow_drop_down")]):e._e(),e._v(" "),e.foldable&&!e.folded?r("v-icon",[e._v("arrow_drop_up")]):e._e()],1):e._e(),e._v(" "),r("v-slide-y-transition",[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.foldable||!e.folded,expression:"!foldable || !folded"}]},[e.fullSchema.description?r("p",[e._v(e._s(e.fullSchema.description))]):e._e(),e._v(" "),e._l(e.fullSchema.items,function(t,l){return r("property",{key:l,attrs:{schema:t,"model-wrapper":e.modelWrapper[e.modelKey],"model-root":e.modelRoot,"model-key":l,"parent-key":e.fullKey+".",options:e.options},on:{error:function(t){return e.$emit("error",t)}}})})],2)])],1):"array"===e.fullSchema.type?r("div",[r("v-layout",{staticClass:"mt-2",attrs:{row:""}},[r("v-subheader",[e._v(e._s(e.label))]),e._v(" "),e.fullSchema.description?r("p",[e._v(e._s(e.fullSchema.description))]):e._e(),e._v(" "),e.disabled?e._e():r("v-btn",{attrs:{icon:"",color:"primary"},on:{click:function(t){e.modelWrapper[e.modelKey].push(e.fullSchema.items.default||e.defaultValue(e.fullSchema.items))}}},[r("v-icon",[e._v("add")])],1)],1),e._v(" "),e.modelWrapper[e.modelKey]&&e.modelWrapper[e.modelKey].length?r("v-container",{staticClass:"pt-0 px-2",attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("draggable",{staticStyle:{width:"100%"},attrs:{options:{handle:".handle"}},model:{value:e.modelWrapper[e.modelKey],callback:function(t){e.$set(e.modelWrapper,e.modelKey,t)},expression:"modelWrapper[modelKey]"}},e._l(e.modelWrapper[e.modelKey],function(t,l){return r("v-flex",{key:l,attrs:{xs12:""}},[r("v-card",{staticClass:"array-card"},[r("v-card-text",[r("property",{attrs:{schema:e.fullSchema.items,"model-wrapper":e.modelWrapper[e.modelKey],"model-root":e.modelRoot,"model-key":l,"parent-key":e.fullKey+"."+l+".",options:e.options},on:{error:function(t){return e.$emit("error",t)}}})],1),e._v(" "),e.disabled?e._e():r("v-card-actions",[!1!==e.fullSchema["x-sortable"]?r("v-btn",{staticClass:"handle",attrs:{flat:"",icon:""}},[r("v-icon",[e._v("reorder")])],1):e._e(),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{flat:"",icon:"",color:"warning"},on:{click:function(t){e.modelWrapper[e.modelKey].splice(l,1)}}},[r("v-icon",[e._v("delete")])],1)],1)],1)],1)}))],1)],1):e._e()],1):e.options.debug?r("p",[e._v('Unsupported type "'+e._s(e.fullSchema.type)+'" - '+e._s(e.fullSchema))]):e._e()],1):e._e()};function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},l=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),l.forEach(function(t){c(e,t,r[t])})}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s._withStripped=!0;var d=r(8),p={name:"Property",props:["schema","modelWrapper","modelRoot","modelKey","parentKey","required","options"],data:function(){return{ready:!1,menu:!1,rawSelectItems:null,q:"",currentOneOf:null,fromUrlParams:{},loading:!1,folded:!0,subModels:{}}},computed:{fullSchema:function(){var e=this,t=JSON.parse(JSON.stringify(this.schema));return"object"!==t.type?t:(t.properties=JSON.parse(JSON.stringify(this.objectToArray(t.properties))),t.required=t.required||[],t.dependencies=t.dependencies||{},t.dependencies&&Object.keys(t.dependencies).forEach(function(r){var l=t.dependencies[r];if(e.modelWrapper[e.modelKey]){var o=e.getDeepKey(e.modelWrapper[e.modelKey],r);[null,void 0,!1].includes(o)||Array.isArray(o)&&0===o.length||"object"===f(o)&&0===Object.keys(o).length||(t.required=t.required.concat(l.required||[]),t.properties=t.properties.concat(e.objectToArray(l.properties)),l.oneOf&&(t.oneOf=(t.oneOf||[]).concat(l.oneOf)),l.allOf&&(t.allOf=(t.allOf||[]).concat(l.allOf)))}}),t)},fullKey:function(){return(this.parentKey+this.modelKey).replace("root.","")},label:function(){return this.fullSchema.title||("string"==typeof this.modelKey?this.modelKey:"")},rules:function(){var e=this,t=[];return this.required&&t.push(function(t){return void 0!==t&&null!==t&&""!==t||e.options.requiredMessage}),t},fromUrl:function(){return!(!this.fullSchema["x-fromUrl"]||-1!==this.fullSchema["x-fromUrl"].indexOf("{q}"))},fromUrlWithQuery:function(){return!(!this.fullSchema["x-fromUrl"]||-1===this.fullSchema["x-fromUrl"].indexOf("{q}"))},fromUrlKeys:function(){return this.fullSchema["x-fromUrl"]?d(this.fullSchema["x-fromUrl"],/\{(.*?)\}/g).toArray().filter(function(e){return"q"!==e}):null},selectItems:function(){if(!this.rawSelectItems)return[];if("object"===this.fullSchema.type&&this.fullSchema.properties&&Object.keys(this.fullSchema.properties).length){var e=this.fullSchema.properties.map(function(e){return e.key});return this.rawSelectItems.map(function(t){var r={};return e.forEach(function(e){void 0!==t[e]&&(r[e]=t[e])}),r})}return this.rawSelectItems},itemKey:function(){return this.fullSchema["x-itemKey"]||"key"},itemTitle:function(){return this.fullSchema["x-itemTitle"]||"title"},disabled:function(){return this.options.disableAll},foldable:function(){return this.options.autoFoldObjects&&this.parentKey&&this.fullSchema.title},oneOfConstProp:function(){if(this.fullSchema.oneOf){var e=this.fullSchema.oneOf[0].properties,t=Object.keys(e).find(function(t){return!!e[t].const});if(t)return u({},e[t],{key:t})}},oneOfRequired:function(){var e=this;return!!(this.oneOfConstProp&&this.fullSchema&&this.fullSchema.required&&this.fullSchema.required.find(function(t){return t===e.oneOfConstProp.key}))},oneOfRules:function(){var e=this,t=[];return this.oneOfRequired&&t.push(function(t){return void 0!==t&&null!==t&&""!==t||e.options.requiredMessage}),t}},watch:{q:function(){this.modelWrapper[this.modelKey]&&this.modelWrapper[this.modelKey][this.itemTitle]===this.q||this.getSelectItems()},fullSchema:{handler:function(){this.fullSchema&&JSON.stringify(this.fullSchema)!==this.lastFullSchema&&(this.lastFullSchema=JSON.stringify(this.fullSchema),this.initFromSchema(),this.cleanUpExtraProperties(),this.applySubModels(),this.ready=!0)},immediate:!0},currentOneOf:function(e,t){this.currentOneOf||this.$set(this.subModels,"currentOneOf",{}),this.cleanUpExtraProperties()},subModels:{handler:function(){this.cleanUpExtraProperties(),this.applySubModels()},deep:!0}},methods:{getDeepKey:function(e,t){for(var r=t.split("."),l=0;l<r.length&&![null,void 0].includes(e);l++)e=e[r[l]];return e},objectToArray:function(e){return Object.keys(e||{}).map(function(t){return u({},e[t],{key:t})})},defaultValue:function(e){return"object"!==e.type||e["x-fromUrl"]||e["x-fromData"]?"array"===e.type?[]:null:{}},getSelectItems:function(){var e=this;if(!this.options.httpLib)return this.$emit("error","No http lib found to perform ajax request");var t=this.fullSchema["x-fromUrl"].replace("{q}",this.q||""),r=!0,l=!1,o=void 0;try{for(var n,i=this.fromUrlKeys[Symbol.iterator]();!(r=(n=i.next()).done);r=!0){var a=n.value;if(void 0===this.fromUrlParams[a])return;t=t.replace("{".concat(a,"}"),this.fromUrlParams[a])}}catch(e){l=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(l)throw o}}this.loading=!0,this.options.httpLib.get(t).then(function(r){var l=r.data||r.body,o=e.fullSchema["x-itemsProp"]?l[e.fullSchema["x-itemsProp"]]:l;if(!Array.isArray(o))throw new Error("Result of http fetch ".concat(t," is not an array"));e.rawSelectItems=o,e.loading=!1}).catch(function(t){e.$emit("error",t.message),e.loading=!1})},cleanUpExtraProperties:function(){var e=this;"object"===this.fullSchema.type&&this.fullSchema.properties&&Object.keys(this.fullSchema.properties).length&&this.modelWrapper[this.modelKey]&&Object.keys(this.modelWrapper[this.modelKey]).forEach(function(t){e.fullSchema.properties.find(function(e){return e.key===t})||delete e.modelWrapper[e.modelKey][t]})},applySubModels:function(){var e=this;Object.keys(this.subModels).forEach(function(t){Object.keys(e.subModels[t]).forEach(function(r){e.modelWrapper[e.modelKey][r]!==e.subModels[t][r]&&e.$set(e.modelWrapper[e.modelKey],r,e.subModels[t][r])})})},initFromSchema:function(){var e=this,t=this.modelWrapper[this.modelKey];void 0===t&&(t=this.defaultValue(this.fullSchema),void 0!==this.fullSchema.default&&(t=JSON.parse(JSON.stringify(this.fullSchema.default)))),void 0!==this.fullSchema.const&&(t=this.fullSchema.const),this.fromUrl&&this.getSelectItems(),this.fromUrlWithQuery&&t&&void 0!==t[this.itemTitle]&&(this.rawSelectItems=[t],this.q=t[this.itemTitle]),this.fullSchema["x-fromData"]&&this.$watch("modelRoot."+this.fullSchema["x-fromData"],function(t){e.rawSelectItems=t},{immediate:!0}),this.fromUrlKeys&&this.fromUrlKeys.forEach(function(t){t.startsWith("context.")?e.$watch("options."+t,function(r){e.fromUrlParams[t]=r,e.getSelectItems()},{immediate:!0}):e.$watch("modelRoot."+t,function(r){e.fromUrlParams[t]=r,e.getSelectItems()},{immediate:!0})}),"object"===this.fullSchema.type&&this.fullSchema.allOf&&this.fullSchema.allOf.forEach(function(r,l){e.$set(e.subModels,"allOf-"+l,JSON.parse(JSON.stringify(t)))}),this.currentOneOf=null,"object"===this.fullSchema.type&&this.fullSchema.oneOf&&!this.currentOneOf&&this.oneOfConstProp&&(t&&t[this.oneOfConstProp.key]?this.currentOneOf=this.fullSchema.oneOf.find(function(r){return r.properties[e.oneOfConstProp.key].const===t[e.oneOfConstProp.key]}):this.fullSchema.default&&(this.currentOneOf=this.fullSchema.oneOf.find(function(t){return t.properties[e.oneOfConstProp.key].const===e.fullSchema.default[e.oneOfConstProp.key]}))),this.currentOneOf?this.$set(this.subModels,"currentOneOf",JSON.parse(JSON.stringify(t))):this.$set(this.subModels,"currentOneOf",{}),this.$set(this.modelWrapper,this.modelKey,t)}}},m=(r(9),r(1)),h=Object(m.a)(p,s,[],!1,null,null,null);h.options.__file="lib/Property.vue";var y={swatches:["#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B","#000000"],rowLength:5,swatchSize:36,spacingSize:6},b={name:"VJsonschemaForm",components:{Property:h.exports},props:["schema","model","options"],data:function(){return{modelWrapper:{root:this.model}}},computed:{resolvedSchema:function(){return a.resolve(this.schema)},fullOptions:function(){var e=this.axios||this.$http||this.$axios;return Object.assign({},{debug:!1,httpLib:e,disableAll:!1,colors:y,autoFoldObjects:!1,requiredMessage:"This information is required",noDataMessage:"No matching value found",searchMessage:"Search..."},this.options)}}},v=Object(m.a)(b,l,[],!1,null,null,null);v.options.__file="lib/index.vue";t.default=v.exports},function(e,t,r){"use strict";function l(e){this._maxSize=e,this.clear()}l.prototype.clear=function(){this._size=0,this._values={}},l.prototype.get=function(e){return this._values[e]},l.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),this._values.hasOwnProperty(e)||this._size++,this._values[e]=t};var o=/[^.^\]^[]+|(?=\[\]|\.\.)/g,n=/^\d+$/,i=/^\d/,a=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,s=/^\s*(['"]?)(.*?)(\1)\s*$/,u=!1,c=new l(512),f=new l(512),d=new l(512);try{new Function("")}catch(e){u=!0}function p(e){return c.get(e)||c.set(e,m(e).map(function(e){return e.replace(s,"$2")}))}function m(e){return e.match(o)}function h(e,t,r){return e=e||"","string"==typeof t&&(r=t,t=!1),r=r||"data",e&&"["!==e.charAt(0)&&(e="."+e),t?function(e,t){var r,l=t,o=m(e);return y(o,function(e,t,o,n,i){r=n===i.length-1,l+=(e=t||o?"["+e+"]":"."+e)+(r?")":" || {})")}),new Array(o.length+1).join("(")+l}(e,r):r+e}function y(e,t,r){var l,o,n,i,a=e.length;for(o=0;o<a;o++)(l=e[o])&&(v(l)&&(l='"'+l+'"'),n=!(i=b(l))&&/^\d+$/.test(l),t.call(r,l,i,n,o,e))}function b(e){return"string"==typeof e&&e&&-1!==["'",'"'].indexOf(e.charAt(0))}function v(e){return!b(e)&&(function(e){return e.match(i)&&!e.match(n)}(e)||function(e){return a.test(e)}(e))}e.exports={Cache:l,expr:h,split:m,normalizePath:p,setter:u?function(e){var t=p(e);return function(e,r){return function(e,t,r){var l=0,o=e.length;for(;l<o-1;)t=t[e[l++]];t[e[l]]=r}(t,e,r)}}:function(e){return f.get(e)||f.set(e,new Function("data, value",h(e,"data")+" = value"))},getter:u?function(e,t){var r=p(e);return function(e){return function(e,t,r){var l=0,o=e.length;for(;l<o;){if(null==r&&t)return;r=r[e[l++]]}return r}(r,t,e)}}:function(e,t){var r=e+"_"+t;return d.get(r)||d.set(r,new Function("data","return "+h(e,t,"data")))},join:function(e){return e.reduce(function(e,t){return e+(b(t)||n.test(t)?"["+t+"]":(e?".":"")+t)},"")},forEach:function(e,t,r){y(m(e),t,r)}}},function(e,t,r){"use strict";e.exports=function(e,t){return{input:e,regex:t,next:function(){var e=this.nextRaw();if(e)for(var t=1;t<e.length;t++)if(e[t])return e[t];return null},nextRaw:function(){return this.regex.exec(this.input)},toArray:function(){for(var e=[],t=null;t=this.next();)e.push(t);return e},reset:function(e){return this.regex.lastIndex=e||0}}}},function(e,t,r){"use strict";var l=r(2);r.n(l).a}])});