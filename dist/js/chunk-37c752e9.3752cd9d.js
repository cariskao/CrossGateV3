(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37c752e9"],{"1d88":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container py-3"},[t._m(0),s("h2",{staticClass:"page_title mt-4 mb-0"},[t._v("關於 N3DS")]),s("p",{staticClass:"p-3 px-md-5 text-justify"},[t._v("\n    任天堂3DS（日語：ニンテンドー3DS，英語：Nintendo 3DS，簡稱「N3DS」或「3DS」），是任天堂於2011年推出的攜帶型遊戲機，是任天堂DS的後續機種。\n    最大特點是利用了視差障壁技術，讓使用者不需配戴任何特殊眼鏡即可裸視感受到立體3D圖像效果。該平台向下相容任天堂DS和任天堂DSi的軟體。\n    目前任天堂3DS有五個衍生機型，分別是2012年7月發售的大屏幕版本任天堂3DS LL/XL；2013年10月在歐美發售的廉價型號任天堂2DS；\n    2014年10月起在日本發售的新任天堂3DS與新任天堂3DS LL/XL；以及於2017年7月起發售的新任天堂2DS XL。\n    2012年9月28日台灣以及香港地區同步發行繁體中文版的「Nintendo 3DS」以及「Nintendo 3DS XL」。\n    2012年11月1日中國大陸地區由神遊科技發行的簡體中文版「iQue 3DS XL」主機正式公布，12月1日起陸續供貨發售。\n  ")]),t._m(1),s("h1",{staticClass:"page_title my-4"},[t._v("買 N3DS 的理由")]),t._m(2),s("h3",{staticClass:"page_title my-4"},[t._v("\n    相關遊戲特惠中\n  ")]),s("prodSilder",{attrs:{"prod-category":"3DS"}}),s("h3",{staticClass:"page_title my-4"},[t._v("想看更多？")]),s("div",{staticClass:"d-flex justify-content-center py-3"},[s("router-link",{staticClass:"go_crossgate",attrs:{to:"/shopping"}},[t._v("前往 CrossGate "),s("i",{staticClass:"fas fa-caret-right ml-1"})])],1)],1)},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-10"},[e("img",{staticClass:"img-fluid",attrs:{src:s("4c22"),alt:""}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-10"},[e("img",{staticClass:"img-fluid",attrs:{src:s("9a60"),alt:""}})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-6"},[e("ul",{staticClass:"buy-ps4-reason"},[e("li",[e("img",{staticClass:"img-fluid",attrs:{src:s("37cf"),alt:"",width:"50"}}),e("span",[t._v("成為寶可夢大師")])]),e("li",[e("img",{staticClass:"img-fluid",attrs:{src:s("2869"),alt:"",width:"50"}}),e("span",[t._v("裸視 3D 讓你視力歸0")])]),e("li",[e("img",{staticClass:"img-fluid",attrs:{src:s("38d0"),alt:"",width:"50"}}),e("span",[e("del",[t._v("沒..沒事我就買個回憶(誤)")])])])])])])}],r=s("50e0"),n={components:{prodSilder:r["a"]}},c=n,o=s("2877"),d=Object(o["a"])(c,e,i,!1,null,null,null);d.options.__file="n3ds.vue";a["default"]=d.exports},2869:function(t,a,s){t.exports=s.p+"img/Spinda.5bc87982.png"},"37cf":function(t,a,s){t.exports=s.p+"img/fireballmouse.39858e9b.png"},"38d0":function(t,a,s){t.exports=s.p+"img/watermouse.cdcec913.gif"},"4c22":function(t,a,s){t.exports=s.p+"img/N3DS-2.ac02f005.jpg"},"50e0":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p-3"},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[e("img",{attrs:{src:s("f8b2"),alt:"",width:"200"}})]),t.filterData.length>0?e("swiper",{staticClass:"prodSwiper",attrs:{options:t.swiperOption}},[t._l(t.filterData,function(a){return e("swiper-slide",{key:a.id},[e("prodCard",{attrs:{"card-data":a,status:t.status},on:{returnProdID:t.addtoCart}})],1)}),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)},i=[],r=(s("cadf"),s("551c"),s("097d"),s("1157")),n=s.n(r),c=s("7212"),o=s("8e39"),d={name:"prodSilder",components:{swiper:c["swiper"],swiperSlide:c["swiperSlide"],prodCard:o["a"]},props:{prodCategory:{type:String,default:""},searchResult:{type:Array,default:function(){return[]}},searchFilter:{type:String,default:""}},data:function(){return{swiperOption:{slidesPerView:4,slidesPerGroup:4,spaceBetween:10,speed:600,grabCursor:!0,autoplay:{delay:5e3},pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{480:{slidesPerView:1,slidesPerGroup:1,spaceBetween:20},767:{slidesPerView:2,slidesPerGroup:2,spaceBetween:30},992:{slidesPerView:3,slidesPerGroup:3,spaceBetween:30}}},products:[],status:{loadingItem:"",loadingIcon:!1},isLoading:!1}},methods:{getProducts:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("crossgate","/products/all"),a=this;a.isLoading=!0,this.$http.get(t).then(function(t){t.data.success&&(a.products=t.data.products,a.isLoading=!1)})},addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("crossgate","/cart"),e=this;e.status.loadingItem=t;var i=document.querySelector(".prodSwiper");i.swiper.autoplay.stop();var r={product_id:t,qty:a};this.$http.post(s,{data:r}).then(function(t){t.data.success&&(e.$bus.$emit("shopCart:update"),e.status.loadingItem="",i.swiper.autoplay.start(),e.$bus.$emit("message:push","【".concat(t.data.data.product.title,"】\n          ").concat(t.data.data.qty," ").concat(t.data.data.product.unit," \n          ").concat(t.data.message),"success"))})}},created:function(){var t=this;t.getProducts()},updated:function(){n()(".prodSwiper").on("mouseenter",function(){this.swiper.autoplay.stop()}),n()(".prodSwiper").on("mouseleave",function(){this.swiper.autoplay.start()})},computed:{filterData:function(){var t=this;return t.searchFilter||t.searchResult.length?t.searchResult:t.products.filter(function(a){return""===t.prodCategory?a:a.category===t.prodCategory})}},watch:{prodCategory:function(){var t=document.querySelector(".prodSwiper");t.swiper.slideTo(0,600)}}},l=d,p=(s("6ef5"),s("2877")),u=Object(p["a"])(l,e,i,!1,null,"543482ed",null);u.options.__file="prodsilder.vue";a["a"]=u.exports},"6ef5":function(t,a,s){"use strict";var e=s("74de"),i=s.n(e);i.a},"74de":function(t,a,s){},"8e39":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"prod_card"},[s("a",{staticClass:"prod_img",style:"background-image: url('"+t.cardData.imageUrl+"')",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.prodInfo(a)}}},[s("span",{staticClass:"categoryTag",class:t._f("category")(t.cardData.category)},[t._v(t._s(t.cardData.category))])]),s("div",{staticClass:"prod_info"},[s("h3",[t._v(t._s(t.cardData.title))]),s("p",[t._v(t._s(t.cardData.description))])]),s("div",{staticClass:"prod_price"},[s("span",[t._v("原價 "+t._s(t._f("currency")(t.cardData.origin_price)))]),s("h4",[t._v("售價 "+t._s(t._f("currency")(t.cardData.price)))])]),s("div",{staticClass:"prod_card_footer"},[s("div",{staticClass:"row no-gutters"},[s("div",{staticClass:"col-6"},[s("button",{staticClass:"btn btn-block",attrs:{disabled:""!=t.status.loadingItem},on:{click:function(a){return a.preventDefault(),t.prodInfo(a)}}},[t.status.loadingItem===t.cardData.id?s("i",{staticClass:"fas fa-spinner fa-spin mr-1"}):s("i",{staticClass:"fas fa-search mr-1"}),t._v("詳細介紹\n        ")])]),s("div",{staticClass:"col-6"},[s("button",{staticClass:"btn btn-block",attrs:{disabled:""!=t.status.loadingItem},on:{click:function(a){return a.preventDefault(),t.returnProdID(a)}}},[t.status.loadingItem===t.cardData.id?s("i",{staticClass:"fas fa-spinner fa-spin mr-1"}):s("i",{staticClass:"fas fa-cart-plus mr-1"}),t._v("加到購物車\n        ")])])])])])},i=[],r=(s("cadf"),s("551c"),s("097d"),{name:"prodcard",props:{cardData:{type:Object,default:function(){return{}}},status:{type:Object,default:function(){return{}}}},methods:{returnProdID:function(){var t=this;t.$emit("returnProdID",t.cardData.id)},prodInfo:function(){var t=this;t.$router.push("/productDetail/".concat(t.cardData.id))}}}),n=r,c=s("2877"),o=Object(c["a"])(n,e,i,!1,null,null,null);o.options.__file="prodcard.vue";a["a"]=o.exports},"9a60":function(t,a,s){t.exports=s.p+"img/N3DS-3.479864e2.png"},f8b2:function(t,a,s){t.exports=s.p+"img/loading.0f6ddb71.gif"}}]);
//# sourceMappingURL=chunk-37c752e9.3752cd9d.js.map