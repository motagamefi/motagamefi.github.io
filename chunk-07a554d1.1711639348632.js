(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07a554d1"],{"24e2":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("error-content",{attrs:{code:"401",desc:"Oh~~您没有浏览这个页面的权限~",src:t.src}})},c=[],o=n("3026"),s=n.n(o),a=n("d7fb"),i={name:"error_401",components:{errorContent:a["a"]},data:function(){return{src:s.a}}},u=i,l=n("2877"),d=Object(l["a"])(u,r,c,!1,null,null,null);e["default"]=d.exports},3026:function(t,e,n){t.exports=n.p+"img/error-401.98bba5b1.svg"},6969:function(t,e,n){},d7fb:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error-page"},[n("div",{staticClass:"content-con"},[n("img",{attrs:{src:t.src,alt:t.code}}),n("div",{staticClass:"text-con"},[n("h4",[t._v(t._s(t.code))]),n("h5",[t._v(t._s(t.desc))])]),n("back-btn-group",{staticClass:"back-btn-group"})],1)])},c=[],o=(n("6969"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Button",{attrs:{size:"large",type:"text"},on:{click:t.backHome}},[t._v("返回首页")])],1)}),s=[],a={name:"backBtnGroup",data:function(){return{second:5,timer:null}},methods:{backHome:function(){this.$router.replace({name:this.$config.homeName})},backPrev:function(){this.$router.go(-1)}},mounted:function(){},beforeDestroy:function(){clearInterval(this.timer)}},i=a,u=n("2877"),l=Object(u["a"])(i,o,s,!1,null,null,null),d=l.exports,f={name:"error_content",components:{backBtnGroup:d},props:{code:String,desc:String,src:String}},p=f,b=Object(u["a"])(p,r,c,!1,null,null,null);e["a"]=b.exports}}]);