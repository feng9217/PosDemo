webpackJsonp([1],{"/cEK":function(t,s,a){"use strict";var o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("leftNavi"),t._v(" "),a("div",{staticClass:"main"},[a("keep-alive",[a("router-view")],1)],1)],1)},e=[],n={render:o,staticRenderFns:e};s.a=n},"0Mfc":function(t,s){},"78xb":function(t,s){},AP6l:function(t,s,a){"use strict";var o=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"left-navi"},[a("ul",[a("li",[a("i",{staticClass:"icon iconfont icon-goumai"}),t._v(" "),a("p",[t._v("收银")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-31dianpu"}),t._v(" "),a("p",[t._v("店铺")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-hanbao"}),t._v(" "),a("p",[t._v("商品")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-huiyuanqia"}),t._v(" "),a("p",[t._v("会员")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-gongnengjianyi"}),t._v(" "),a("p",[t._v("统计")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-zuanshi"}),t._v(" "),a("p",[t._v("设置")])])])])}],n={render:o,staticRenderFns:e};s.a=n},"F/oR":function(t,s){},JCsD:function(t,s,a){"use strict";function o(){return c.a.get("http://jspang.com/DemoApi/oftenGoods.php").then(function(t){return i.a.resolve(t)}).catch(function(t){console.log(t)})}function e(){return c.a.get("http://jspang.com/DemoApi/typeGoods.php").then(function(t){return i.a.resolve(t)}).catch(function(t){console.log(t)})}s.a=o,s.b=e;var n=a("//Fk"),i=a.n(n),l=a("mtWM"),c=a.n(l)},M93x:function(t,s,a){"use strict";function o(t){a("78xb")}var e=a("xJD8"),n=a("/cEK"),i=a("VU/8"),l=o,c=i(e.a,n.a,!1,l,null,null);s.a=c.exports},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=a("7+uW"),e=a("M93x"),n=a("YaEn"),i=a("zL8q"),l=a.n(i),c=a("tvR6");a.n(c);o.default.config.productionTip=!1,o.default.use(l.a),new o.default({el:"#app",render:function(t){return t(e.a)},router:n.a})},QOmK:function(t,s,a){"use strict";function o(t){a("F/oR")}var e=a("YySA"),n=a("UVkn"),i=a("VU/8"),l=o,c=i(e.a,n.a,!1,l,null,null);s.a=c.exports},UVkn:function(t,s,a){"use strict";var o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"pos"},[a("el-row",[a("el-col",{ref:"orderList",staticClass:"pos-order",attrs:{span:7,id:"order-list"}},[a("el-tabs",[a("el-tab-pane",{attrs:{label:"点餐"}},[a("el-table",{staticStyle:{},attrs:{border:"",data:t.tableData}},[a("el-table-column",{attrs:{prop:"goodsName",label:"商品名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"count",label:"数量",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"单价",width:"70"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(s){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.deleteGoodsItem(s.row)}}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.addOrderList(s.row)}}},[t._v("增加")])]}}])})],1),t._v(" "),a("div",{staticClass:"total"},[a("small",[t._v("数量:")]),t._v(t._s(t.totalCount)+"\n            "),a("small",[t._v("金额:")]),t._v(t._s(t.totalMoney)+"元\n          ")]),t._v(" "),a("div",{staticClass:"btn-zone"},[a("el-button",{attrs:{type:"warning"},on:{click:t.postOrder}},[t._v("挂单")]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:t.deleteAllGoods}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{type:"success"},on:{click:t.checkOut}},[t._v("结账")])],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"挂单"}},[a("div",[a("ul",t._l(t.postData,function(s){return a("li",[a("el-table",{staticStyle:{},attrs:{border:"",data:s}},[a("el-table-column",{attrs:{prop:"goodsName",label:"商品名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"count",label:"数量",width:"80",fixed:"right"}})],1),t._v(" "),a("div",{staticClass:"total"},[a("small",[t._v("数量:")]),t._v(t._s(s.count)+"\n                  "),a("small",[t._v("单号:")]),t._v(t._s(s.index)+"\n                ")])],1)}))]),t._v(" "),a("div",{staticClass:"btn-zone"},[a("el-button",{attrs:{type:"danger"},on:{click:t.clearOrderList}},[t._v("删除")])],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:"外卖"}},[t._v("\n          外卖\n        ")])],1)],1),t._v(" "),a("el-col",{attrs:{span:17}},[a("div",{staticClass:"popular-goods"},[a("div",{staticClass:"title"},[t._v("热门商品")]),t._v(" "),a("div",{staticClass:"popular-goods-list"},[a("ul",t._l(t.popularGoods,function(s){return a("li",{on:{click:function(a){t.addOrderList(s)}}},[a("span",[t._v(t._s(s.goodsName))]),t._v(" "),a("span",{staticClass:"per-price"},[t._v(t._s(s.price))])])}))])]),t._v(" "),a("div",{staticClass:"goods-type"},[a("el-tabs",[a("el-tab-pane",{attrs:{label:"汉堡"}},[a("div",[a("ul",{staticClass:"cook-list"},t._l(t.type0Goods,function(s){return a("li",{on:{click:function(a){t.addOrderList(s)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),a("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}))])]),t._v(" "),a("el-tab-pane",{attrs:{label:"小食"}},[a("div",[a("ul",{staticClass:"cook-list"},t._l(t.type1Goods,function(s){return a("li",{on:{click:function(a){t.addOrderList(s)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),a("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}))])]),t._v(" "),a("el-tab-pane",{attrs:{label:"饮品"}},[a("div",[a("ul",{staticClass:"cook-list"},t._l(t.type2Goods,function(s){return a("li",{on:{click:function(a){t.addOrderList(s)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),a("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}))])]),t._v(" "),a("el-tab-pane",{attrs:{label:"套餐"}},[a("div",[a("ul",{staticClass:"cook-list"},t._l(t.type3Goods,function(s){return a("li",{on:{click:function(a){t.addOrderList(s)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),a("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}))])])],1)],1)])],1)],1)},e=[],n={render:o,staticRenderFns:e};s.a=n},UWFm:function(t,s,a){"use strict";s.a={}},YaEn:function(t,s,a){"use strict";var o=a("7+uW"),e=a("/ocq"),n=a("QOmK");o.default.use(e.a),s.a=new e.a({routes:[{path:"/",name:"Pos",component:n.a}]})},YcAy:function(t,s,a){"use strict";function o(t){a("0Mfc")}var e=a("UWFm"),n=a("AP6l"),i=a("VU/8"),l=o,c=i(e.a,n.a,!1,l,"data-v-321d497f",null);s.a=c.exports},YySA:function(t,s,a){"use strict";var o=a("d7EF"),e=a.n(o),n=a("JCsD");s.a={name:"Pos",data:function(){return{tableData:[],popularGoods:[],type0Goods:[],type1Goods:[],type2Goods:[],type3Goods:[],totalCount:0,totalMoney:0,postData:[],orderIndex:1}},created:function(){this._getPopularData(),this._getTypeGoods()},mounted:function(){this._getHeight()},methods:{_getHeight:function(){var t=document.body.clientHeight;document.getElementById("order-list").style.height=t+"px"},_getPopularData:function(){var t=this;Object(n.a)().then(function(s){if(200!==s.status)return console.log("获取数据错误");t.popularGoods=s.data})},_getTypeGoods:function(){var t=this;Object(n.b)().then(function(s){if(200!==s.status)return console.log("获取数据错误");var a=e()(s.data,4);t.type0Goods=a[0],t.type1Goods=a[1],t.type2Goods=a[2],t.type3Goods=a[3]})},addOrderList:function(t){this.totalCount=0,this.totalMoney=0;for(var s=!1,a=0;a<this.tableData.length;a++)this.tableData[a].goodsId===t.goodsId&&(s=!0);if(s){this.tableData.filter(function(s){return s.goodsId===t.goodsId})[0].count++}else{var o={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(o)}this.getTotal()},deleteGoodsItem:function(t){this.tableData=this.tableData.filter(function(s){return s.goodsId!==t.goodsId}),this.getTotal()},getTotal:function(){var t=this;this.totalCount=0,this.totalMoney=0,this.tableData&&this.tableData.forEach(function(s){t.totalCount+=s.count,t.totalMoney=t.totalMoney+s.price*s.count})},deleteAllGoods:function(){this.tableData=[],this.totalCount=0,this.totalMoney=0},checkOut:function(){0===this.totalCount?this.$message({message:"plz order sth before commit",type:"warning"}):(this.tableData=[],this.totalCount=0,this.totalMoney=0,this.$message({message:"订单提交成功 OvO",type:"success"}))},postOrder:function(){0===this.totalCount?this.$message({message:"plz order sth before postOrder",type:"warning"}):(this.tableData.count=this.totalCount,this.tableData.index=this.orderIndex,this.postData.push(this.tableData),this.orderIndex++,console.log(this.postData),this.tableData=[],this.totalCount=0,this.totalMoney=0,this.$message({message:"挂单成功 OvO",type:"success"}))},clearOrderList:function(){this.postData=[],this.orderIndex=1}}}},tvR6:function(t,s){},xJD8:function(t,s,a){"use strict";var o=a("YcAy");s.a={name:"app",components:{leftNavi:o.a}}}},["NHnr"]);
//# sourceMappingURL=app.80eb9607070a09867f03.js.map