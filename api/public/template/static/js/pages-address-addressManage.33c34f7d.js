(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-addressManage"],{1183:function(t,a,e){"use strict";e("7a82");var n=e("ee27").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=n(e("f3f3"));e("a9e3"),e("ac1f"),e("00b4");var i=n(e("a8ec")),o=e("26cb"),d={data:function(){return{addressData:{name:"",cellphone:"",location:"选择地址",address:"",latitude:"",longitude:"",house:"",default:!1}}},onLoad:function(t){this.loginCheck();var a="新增收货地址";"edit"===t.type&&(a="编辑收货地址"),t.data&&(this.addressData=JSON.parse(t.data)),t.sid&&(this.addressData.good_indent_id=Number(t.sid)),this.manageType=t.type,uni.setNavigationBarTitle({title:a})},methods:(0,s.default)((0,s.default)({},(0,o.mapMutations)(["loginCheck"])),{},{switchChange:function(t){this.addressData.default=t.detail},chooseLocation:function(){var t=this;t.addressData.latitude?uni.chooseLocation({latitude:t.addressData.latitude,longitude:t.addressData.longitude,success:function(a){t.addressData.location=a.name,t.addressData.address=a.address,t.addressData.latitude=a.latitude,t.addressData.longitude=a.longitude},fail:function(t){}}):uni.chooseLocation({success:function(a){t.addressData.location=a.name,t.addressData.address=a.address,t.addressData.latitude=a.latitude,t.addressData.longitude=a.longitude},fail:function(t){}})},confirm:function(){var t=this,a=this.addressData;a.name?/(^1[3|4|5|7|8|9][0-9]{9}$)/.test(a.cellphone)?a.location?a.house?(a.cellphone=Number(a.cellphone),a.id?i.default.edit(a,(function(a){t.$api.prePage().refreshList(),t.$api.msg("地址".concat("edit"==t.manageType?"修改":"添加","成功")),setTimeout((function(){uni.navigateBack()}),1e3)})):i.default.create(a,(function(a){t.$api.prePage().refreshList(),t.$api.msg("地址".concat("edit"==t.manageType?"修改":"添加","成功")),setTimeout((function(){uni.navigateBack()}),1e3)}))):this.$api.msg("请填写门牌号信息"):this.$api.msg("请在地图选择所在位置"):this.$api.msg("请输入正确的手机号码"):this.$api.msg("请填写收货人姓名")}})};a.default=d},"56d71":function(t,a,e){"use strict";e.r(a);var n=e("1183"),s=e.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=s.a},a28d:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return s})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){return n}));var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"row b-b"},[e("v-uni-text",{staticClass:"tit"},[t._v("联系人")]),e("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"收货人姓名","placeholder-class":"placeholder"},model:{value:t.addressData.name,callback:function(a){t.$set(t.addressData,"name",a)},expression:"addressData.name"}})],1),e("v-uni-view",{staticClass:"row b-b"},[e("v-uni-text",{staticClass:"tit"},[t._v("手机号")]),e("v-uni-input",{staticClass:"input",attrs:{type:"number",placeholder:"收货人手机号码","placeholder-class":"placeholder",maxlength:"11"},model:{value:t.addressData.cellphone,callback:function(a){t.$set(t.addressData,"cellphone",a)},expression:"addressData.cellphone"}})],1),e("v-uni-view",{staticClass:"row b-b"},[e("v-uni-text",{staticClass:"tit"},[t._v("地址")]),e("v-uni-text",{staticClass:"input",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.chooseLocation.apply(void 0,arguments)}}},[t._v(t._s(t.addressData.location)),t.addressData.address?[t._v("("+t._s(t.addressData.address)+")")]:t._e()],2),e("v-uni-text",{staticClass:"yticon icon-shouhuodizhi"})],1),e("v-uni-view",{staticClass:"row b-b"},[e("v-uni-text",{staticClass:"tit"},[t._v("门牌号")]),e("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"楼号、门牌","placeholder-class":"placeholder"},model:{value:t.addressData.house,callback:function(a){t.$set(t.addressData,"house",a)},expression:"addressData.house"}})],1),e("v-uni-button",{staticClass:"add-btn",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.confirm.apply(void 0,arguments)}}},[t._v("提交")])],1)},i=[]},a8ec:function(t,a,e){"use strict";e("7a82");var n=e("ee27").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=n(e("c290")),i={getList:function(t,a,e){s.default.setGetMessage("shipping",t,"加载中",(function(t){a(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},create:function(t,a,e){s.default.setPostMessage("shipping",t,"处理中",(function(t){a(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},edit:function(t,a,e){s.default.setPostMessage("shipping/"+t.id,t,"处理中",(function(t){a(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},destroy:function(t,a,e){s.default.setPostMessage("shipping/destroy/"+t,{},"处理中",(function(t){a(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},freight:function(t,a,e,n){s.default.setPost("shipping/freight/"+t,a,(function(t){e(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},defaultSet:function(t,a,e){s.default.setPostMessage("shipping/default/set",t,"处理中",(function(t){a(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}};a.default=i},c317:function(t,a,e){"use strict";e.r(a);var n=e("a28d"),s=e("56d71");for(var i in s)["default"].indexOf(i)<0&&function(t){e.d(a,t,(function(){return s[t]}))}(i);e("dac6");var o,d=e("f0c5"),u=Object(d["a"])(s["default"],n["b"],n["c"],!1,null,"40288f8d",null,!1,n["a"],o);a["default"]=u.exports},cdeb:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 边框颜色 */uni-page-body[data-v-40288f8d]{background:#f8f8f8;padding-top:%?16?%}.row[data-v-40288f8d]{display:flex;align-items:center;position:relative;padding:0 %?30?%;height:%?110?%;background:#fff}.row .tit[data-v-40288f8d]{flex-shrink:0;width:%?120?%;font-size:%?30?%;color:#303133}.row .input[data-v-40288f8d]{flex:1;font-size:%?30?%;color:#303133}.row .icon-shouhuodizhi[data-v-40288f8d]{font-size:%?36?%;color:#909399}.default-row[data-v-40288f8d]{margin-top:%?16?%}.default-row .tit[data-v-40288f8d]{flex:1}.default-row uni-switch[data-v-40288f8d]{-webkit-transform:translateX(%?16?%) scale(.9);transform:translateX(%?16?%) scale(.9)}.add-btn[data-v-40288f8d]{display:flex;align-items:center;justify-content:center;width:%?690?%;height:%?80?%;margin:%?60?% auto;font-size:%?32?%;color:#fff;background-color:#fa436a;border-radius:%?10?%;box-shadow:1px 2px 5px rgba(219,63,96,.4)}body.?%PAGE?%[data-v-40288f8d]{background:#f8f8f8}',""]),t.exports=a},dac6:function(t,a,e){"use strict";var n=e("dce7"),s=e.n(n);s.a},dce7:function(t,a,e){var n=e("cdeb");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=e("4f06").default;s("a256778c",n,!0,{sourceMap:!1,shadowMode:!1})}}]);