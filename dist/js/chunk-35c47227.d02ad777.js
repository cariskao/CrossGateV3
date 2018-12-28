(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35c47227"],{"2e1b":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[e("img",{attrs:{src:s("f8b2"),alt:"",width:"200"}})]),t.product.id?e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"prodImg"},[e("img",{attrs:{src:t.product.imageUrl,alt:""}})])]),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"prodInfo addCartblock"},[e("h2",[t._v(t._s(t.product.title))]),e("div",{staticClass:"prodPrice"},[e("del",[t._v("原價 "+t._s(t._f("currency")(t.product.origin_price)))]),e("h4",[t._v("特價 "+t._s(t._f("currency")(t.product.price)))])]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.product.buyNum,expression:"product.buyNum"}],staticClass:"form-control mb-3",on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){var a="_value"in t?t._value:t.value;return a});t.$set(t.product,"buyNum",a.target.multiple?s:s[0])}}},t._l(10,function(a){return e("option",{key:a,domProps:{value:a}},[t._v("\n            選購 "+t._s(a)+" "+t._s(t.product.unit)+"\n          ")])}),0),e("p",{staticClass:"text-right text-main font-weight-bold mb-1"},[t._v("小計 "+t._s(t._f("currency")(t.product.buyNum*t.product.price)))]),e("button",{staticClass:"addTocardBtn",attrs:{type:"button",disabled:t.status.loadingIcon},on:{click:function(a){t.addtoCart(t.product.id,t.product.buyNum)}}},[t.status.loadingIcon?e("i",{staticClass:"fas fa-spinner fa-spin mr-1"}):t._e(),t._v("放入購物車\n        ")])])])]):t._e(),e("div",{staticClass:"row"},[t.product.id?e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"prodInfo"},[e("h3",[t._v("產品描述")]),e("p",[t._v(t._s(t.product.description)),e("em",{staticClass:"blockquote-footer text-right"},[t._v(t._s(t.product.content))])])])]):t._e(),t.product.id?e("div",{staticClass:"col-md-12"},[e("h3",{staticClass:"page_title my-3"},[t._v("同類別遊戲")]),e("prodSilder",{attrs:{"prod-category":t.product.category}})],1):t._e(),t._m(0)])],1)},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"prodInfo"},[s("h3",[t._v("消費者權益")]),s("ul",{staticClass:"prodNotice"},[s("li",[t._v("退款必須滿足兩個條件，分別是『遊戲時數低於2小時』與『購入沒有超過14天』。")]),s("li",[t._v("若只有『稍微』超過退款條件，或是有非常合理的理由( 遊戲有致命BUG、官方伺服器停止營運等等 )，我們就會同意退款。")]),s("li",[t._v("退款的遊戲數量沒有上限，但是請注意，若我們發現您濫用退款機制，就會以個案駁回您的退款要求，甚至降低您未來的退款成功率。")]),s("li",[t._v("退款成功後，將於7個工作天內將款項退回給您。")])]),s("em",{staticClass:"blockquote-footer subSlogan"},[t._v("以上數點，我們保有最終解釋權，如無法接受，請勿購買本產品。")])])])}],o=s("50e0"),i={components:{prodSilder:o["a"]},data:function(){return{productID:"",product:{},status:{loadingIcon:!1},isLoading:!1}},methods:{getProduct:function(t){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("crossgate","/product/").concat(t),s=this;s.isLoading=!0,this.$http.get(a).then(function(t){s.product=t.data.product,s.$set(s.product,"buyNum",1),s.isLoading=!1})},addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("crossgate","/cart"),e=this,r={product_id:t,qty:a};e.status.loadingIcon=!0,e.$http.post(s,{data:r}).then(function(t){t.data.success&&(e.$bus.$emit("shopCart:update"),e.$bus.$emit("message:push","【".concat(t.data.data.product.title,"】").concat(t.data.data.qty," ").concat(t.data.data.product.unit," ").concat(t.data.message),"success")),e.status.loadingIcon=!1})}},created:function(){var t=this;t.productID=t.$route.params.prodId,t.getProduct(t.productID)},watch:{"$route.params.prodId":function(){var t=this;t.productID=t.$route.params.prodId,t.getProduct(t.productID)}}},c=i,n=s("2877"),d=Object(n["a"])(c,e,r,!1,null,null,null);d.options.__file="productDetail.vue";a["default"]=d.exports},"50e0":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p-3"},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[e("img",{attrs:{src:s("f8b2"),alt:"",width:"200"}})]),t.filterData.length>0?e("swiper",{staticClass:"prodSwiper",attrs:{options:t.swiperOption}},[t._l(t.filterData,function(a){return e("swiper-slide",{key:a.id},[e("prodCard",{attrs:{"card-data":a,status:t.status},on:{returnProdID:t.addtoCart}})],1)}),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)},r=[],o=(s("cadf"),s("551c"),s("097d"),s("1157")),i=s.n(o),c=s("7212"),n=s("8e39"),d={name:"prodSilder",components:{swiper:c["swiper"],swiperSlide:c["swiperSlide"],prodCard:n["a"]},props:{prodCategory:{type:String,default:""},searchResult:{type:Array,default:function(){return[]}},searchFilter:{type:String,default:""}},data:function(){return{swiperOption:{slidesPerView:4,slidesPerGroup:4,spaceBetween:10,speed:600,grabCursor:!0,autoplay:{delay:5e3},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{480:{slidesPerView:1,slidesPerGroup:1,spaceBetween:20},767:{slidesPerView:2,slidesPerGroup:2,spaceBetween:30},992:{slidesPerView:3,slidesPerGroup:3,spaceBetween:30}}},products:[],status:{loadingItem:"",loadingIcon:!1},isLoading:!1}},methods:{getProducts:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("crossgate","/products/all"),a=this;a.isLoading=!0,this.$http.get(t).then(function(t){t.data.success&&(a.products=t.data.products,a.isLoading=!1)})},addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("crossgate","/cart"),e=this;e.status.loadingItem=t;var r=document.querySelector(".prodSwiper");r.swiper.autoplay.stop();var o={product_id:t,qty:a};this.$http.post(s,{data:o}).then(function(t){t.data.success&&(e.$bus.$emit("shopCart:update"),e.status.loadingItem="",r.swiper.autoplay.start(),e.$bus.$emit("message:push","【".concat(t.data.data.product.title,"】\n          ").concat(t.data.data.qty," ").concat(t.data.data.product.unit," \n          ").concat(t.data.message),"success"))})}},created:function(){var t=this;t.getProducts()},updated:function(){i()(".prodSwiper").on("mouseenter",function(){this.swiper.autoplay.stop()}),i()(".prodSwiper").on("mouseleave",function(){this.swiper.autoplay.start()})},computed:{filterData:function(){var t=this;return t.searchFilter||t.searchResult.length?t.searchResult:t.products.filter(function(a){return""===t.prodCategory?a:a.category===t.prodCategory})}},watch:{prodCategory:function(){var t=document.querySelector(".prodSwiper");t.swiper.slideTo(0,600)}}},u=d,p=(s("6ef5"),s("2877")),l=Object(p["a"])(u,e,r,!1,null,"543482ed",null);l.options.__file="prodsilder.vue";a["a"]=l.exports},"6ef5":function(t,a,s){"use strict";var e=s("74de"),r=s.n(e);r.a},"74de":function(t,a,s){},"8e39":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"prod_card"},[s("a",{staticClass:"prod_img",style:"background-image: url('"+t.cardData.imageUrl+"')",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.prodInfo(a)}}},[s("span",{staticClass:"categoryTag",class:t._f("category")(t.cardData.category)},[t._v(t._s(t.cardData.category))])]),s("div",{staticClass:"prod_info"},[s("h3",[t._v(t._s(t.cardData.title))]),s("p",[t._v(t._s(t.cardData.description))])]),s("div",{staticClass:"prod_price"},[s("span",[t._v("原價 "+t._s(t._f("currency")(t.cardData.origin_price)))]),s("h4",[t._v("售價 "+t._s(t._f("currency")(t.cardData.price)))])]),s("div",{staticClass:"prod_card_footer"},[s("div",{staticClass:"row no-gutters"},[s("div",{staticClass:"col-6"},[s("button",{staticClass:"btn btn-block",attrs:{disabled:""!=t.status.loadingItem},on:{click:function(a){return a.preventDefault(),t.prodInfo(a)}}},[t.status.loadingItem===t.cardData.id?s("i",{staticClass:"fas fa-spinner fa-spin mr-1"}):s("i",{staticClass:"fas fa-search mr-1"}),t._v("詳細介紹\n        ")])]),s("div",{staticClass:"col-6"},[s("button",{staticClass:"btn btn-block",attrs:{disabled:""!=t.status.loadingItem},on:{click:function(a){return a.preventDefault(),t.returnProdID(a)}}},[t.status.loadingItem===t.cardData.id?s("i",{staticClass:"fas fa-spinner fa-spin mr-1"}):s("i",{staticClass:"fas fa-cart-plus mr-1"}),t._v("加到購物車\n        ")])])])])])},r=[],o=(s("cadf"),s("551c"),s("097d"),{name:"prodcard",props:{cardData:{type:Object,default:function(){return{}}},status:{type:Object,default:function(){return{}}}},methods:{returnProdID:function(){var t=this;t.$emit("returnProdID",t.cardData.id)},prodInfo:function(){var t=this;t.$router.push("/productDetail/".concat(t.cardData.id))}}}),i=o,c=s("2877"),n=Object(c["a"])(i,e,r,!1,null,null,null);n.options.__file="prodcard.vue";a["a"]=n.exports},f8b2:function(t,a,s){t.exports=s.p+"img/loading.0f6ddb71.gif"}}]);
//# sourceMappingURL=chunk-35c47227.d02ad777.js.map