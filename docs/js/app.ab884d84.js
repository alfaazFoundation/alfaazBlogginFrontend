(function(t){function e(e){for(var a,o,l=e[0],c=e[1],r=e[2],u=0,f=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,r||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=s[0]))}return t}var a={},n={app:0},i=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e56fd6ad"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.e=function(t){var e=[],s=n[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=n[t]=[e,a]}));e.push(s[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=o(t);var r=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var s=n[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;r.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",r.name="ChunkLoadError",r.type=a,r.request=i,s[1](r)}n[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(s,a,function(e){return t[e]}.bind(null,a));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="https://alfaazfoundation.in/alfaazBlogginFrontend/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=r;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"2bf6":function(t,e,s){"use strict";s("4dd2")},"2c1f":function(t,e,s){t.exports=s.p+"img/sample2.936b3040.jpg"},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=i(t);return s(e)}function i(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="4678"},"4dd2":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],o=(s("4de4"),s("289d")),l=(s("5abe"),s("c1df")),c=s.n(l),r="Alfaaz Foundation";document.title=r;var u={name:"App",components:{}};a["a"].use(o["a"]),a["a"].filter("formatDate",(function(t){if(t)return c()(String(t)).format("MM/DD/YYYY")}));var d=u,f=(s("5c0b"),s("2877")),m=Object(f["a"])(d,n,i,!1,null,null,null),b=m.exports,p=(s("d3b7"),s("3ca3"),s("ddb0"),s("8c4f")),h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("main-page-hero-carousel"),s("blog-list"),s("website-footer")],1)])},j=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns mb0"},[a("div",{staticClass:"column mb0 pb0"},[a("b-carousel",{attrs:{"indicator-style":"is-lines","icon-prev":"menu-left","icon-next":"menu-right","icon-size":"is-large","pause-info":!1}},[a("b-carousel-item",[a("b-image",{attrs:{src:s("cfda"),alt:"The Buefy Logo"}})],1),a("b-carousel-item",[a("figure",{staticClass:"image"},[a("img",{attrs:{src:s("2c1f")}})])]),a("b-carousel-item",[a("figure",{staticClass:"image"},[a("img",{attrs:{src:s("cfda")}})])]),a("b-carousel-item",[a("figure",{staticClass:"image"},[a("img",{attrs:{src:s("2c1f")}})])])],1)],1)])},g=[],C={name:"MainPageHeroCarousel",title:"Pagination / Dynamic bullets",components:{},data:function(){return{carousels:[{text:"Slide 1",color:"primary"},{text:"Slide 2",color:"info"},{text:"Slide 3",color:"success"},{text:"Slide 4",color:"warning"},{text:"Slide 5",color:"danger"}]}}},_=C,y=Object(f["a"])(_,v,g,!1,null,"20a07786",null),k=y.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer has-text-white-ter"},[s("div",{staticClass:"content "},[s("div",{staticClass:"columns has-background-black-ter pt2 pb2"},[t._m(0),s("div",{staticClass:"column is-3"},[t._m(1),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("b-field",[s("b-input",{attrs:{placeholder:"E-mail",type:"email"}})],1)],1)]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("b-field",[s("b-input",{attrs:{placeholder:"Message",type:"textarea"}})],1)],1)]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"field is-grouped is-grouped-right"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-primary"},[s("span",[t._v("Contact Us")]),t._v(" "),s("b-icon",{staticClass:"is-primary",attrs:{icon:"send",size:"is-small"}})],1)])])])])])]),t._m(2)])])},w=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column is-offset-3 is-3 "},[s("div",{staticClass:"columns "},[s("div",{staticClass:"column"},[s("h3",[t._v("Quick Links")])])]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("ul",{staticClass:"has-text-left "},[s("li",[t._v("About Us")]),s("li",{staticClass:"mt1"},[t._v("Blogs")]),s("li",{staticClass:"mt1"},[t._v("Creators")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("h3",[t._v("Write To Us")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns has-background-black-bis",staticStyle:{height:"3rem"}},[s("div",{staticClass:"column is-offset-1 is-10 has-text-right"},[s("p",{staticClass:"mr2"},[t._v(" © 2021 Alfaaz Foundation. All rights reserved. ")])])])}],E={name:"WebsiteFooter"},z=E,$=(s("2bf6"),Object(f["a"])(z,x,w,!1,null,"fe0714ca",null)),O=$.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section has-background-white-bis"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[t._v(" Blog Listasdasdd ")])])])}],L={name:"BlogList"},R=L,A=Object(f["a"])(R,S,P,!1,null,"ef5cd582",null),B=A.exports,N={name:"Home",components:{BlogList:B,WebsiteFooter:O,MainPageHeroCarousel:k}},q=N,F=Object(f["a"])(q,h,j,!1,null,"698ed31f",null),U=F.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section has-background-light",staticStyle:{"min-height":"100vh"}},[s("div",{staticClass:"columns mt3"},[s("div",{staticClass:"column is-4 is-offset-4 box mt5"},[t._m(0),s("h1",{staticClass:"title has-text-primary has-text-centered is-1"},[t._v("Alfaaz Foundation")]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("b-field",{attrs:{label:"Email"}},[s("b-input",{attrs:{placeholder:"Email",type:"email"},model:{value:t.loginRequest.username,callback:function(e){t.$set(t.loginRequest,"username",e)},expression:"loginRequest.username"}})],1)],1)]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("b-field",{attrs:{label:"Password"}},[s("b-input",{attrs:{placeholder:"Password",type:"password"},model:{value:t.loginRequest.password,callback:function(e){t.$set(t.loginRequest,"password",e)},expression:"loginRequest.password"}})],1)],1)]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"field is-grouped is-grouped-centered"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-primary",on:{click:t.loginBiller}},[t._v(" Login ")])])])])]),t._m(1)])])])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column is-12 has-text-centered"},[a("figure",{staticClass:"image is-96x96 is-inline-block "},[a("img",{attrs:{src:s("f6c5")}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column has-text-centered has-text-black "},[s("a",{attrs:{href:"/#/register"}},[t._v("Don't have an account? ")])])])}],T=s("bc3a"),D=s.n(T),V=Object({NODE_ENV:"production",BASE_URL:"https://alfaazfoundation.in/alfaazBlogginFrontend/"}).VUE_APP_API_SERVER,H={name:"Login",mounted:function(){this.axiosInstance=D.a.create({baseURL:V,headers:{"Content-Type":"application/json"}})},data:function(){return{loginRequest:{username:"",password:""}}},methods:{loginBiller:function(){var t=this;this.axiosInstance.post("/api/biller/login",this.$data.loginRequest).then((function(e){console.log(e),localStorage.setItem("token",e.data.token),t.$router.push("/dashboard/add-invoice")})).catch((function(e){console.error(e),t.$buefy.toast.open({duration:3e3,message:"Something went wrong",position:"is-bottom",type:"is-danger"})}))}}},W=H,Y=Object(f["a"])(W,I,M,!1,null,"2bc04758",null),J=Y.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section has-background-light has-full-page-height"},[s("div",{staticClass:"columns mt3"},[s("div",{staticClass:"column is-4 is-offset-4 mt5 box"},[t._m(0),s("h1",{staticClass:"title is-1 has-text-primary has-text-centered"},[t._v("Alfaaz Foundation")]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("b-field",{attrs:{label:"First Name"}},[s("b-input",{attrs:{placeholder:"First Name"},model:{value:t.biller.name.first,callback:function(e){t.$set(t.biller.name,"first",e)},expression:"biller.name.first"}})],1)],1),s("div",{staticClass:"column"},[s("b-field",{attrs:{label:"Last Name"}},[s("b-input",{attrs:{placeholder:"Last Name"},model:{value:t.biller.name.last,callback:function(e){t.$set(t.biller.name,"last",e)},expression:"biller.name.last"}})],1)],1)]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("b-field",{attrs:{label:"Email"}},[s("b-input",{attrs:{placeholder:"Email",type:"email"},model:{value:t.biller.email,callback:function(e){t.$set(t.biller,"email",e)},expression:"biller.email"}})],1)],1)]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("b-field",{attrs:{label:"Password"}},[s("b-input",{attrs:{placeholder:"Password",type:"password"},model:{value:t.biller.password,callback:function(e){t.$set(t.biller,"password",e)},expression:"biller.password"}})],1)],1)]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"field is-grouped is-grouped-centered"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-primary",on:{click:t.registerBiller}},[t._v(" Register ")])])])])]),t._m(1)])])])},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column is-12 has-text-centered"},[a("figure",{staticClass:"image is-96x96 is-inline-block "},[a("img",{attrs:{src:s("f6c5")}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column has-text-centered has-text-black "},[s("a",{attrs:{href:"/#/login"}},[t._v("Already have an account? ")])])])}],K=Object({NODE_ENV:"production",BASE_URL:"https://alfaazfoundation.in/alfaazBlogginFrontend/"}).VUE_APP_API_SERVER,X={name:"Register.vue",mounted:function(){this.axiosInstance=D.a.create({baseURL:K,headers:{"Content-Type":"application/json"}})},data:function(){return{biller:{iban:"",company:"",password:"",email:"",name:{first:"",last:""},address:{street:"",apartmentNumber:"",city:"",postalCode:"",country:"India"}}}},methods:{registerBiller:function(){var t=this;this.axiosInstance.post("/biller",this.$data.biller).then((function(e){console.log(e),t.$buefy.toast.open({duration:3e3,message:"Biller Registered",position:"is-bottom",type:"is-success"}),t.$router.push("/dashboard/biller-list")})).catch((function(e){console.error(e),t.$buefy.toast.open({duration:3e3,message:"Something went wrong",position:"is-bottom",type:"is-danger"})}))}}},Z=X,tt=Object(f["a"])(Z,Q,G,!1,null,"3f74faa5",null),et=tt.exports,st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{attrs:{id:"nav"}},[s("nav-bar")],1),s("router-view")],1)},at=[],nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{shadow:!0}},[a("template",{slot:"brand"},[a("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[a("img",{attrs:{src:s("f6c5"),width:"50%",alt:"AlfaazLogo"}})])],1),t.user.authenticated?a("template",{slot:"end"},[a("b-navbar-item",{attrs:{tag:"div"}},[a("div",{staticClass:"buttons"},[a("a",{staticClass:"button is-dark",on:{click:function(e){return t.logout()}}},[t._v(" Log out ")])])])],1):t._e()],2)},it=[],ot={name:"NavBar",data:function(){return{user:{authenticated:!1}}},mounted:function(){this.checkAuth()},methods:{checkAuth:function(){var t=localStorage.getItem("token");t?(console.log("user is authenticated"),this.user.authenticated=!0):this.user.authenticated=!1},logout:function(){localStorage.removeItem("token"),this.$router.push("/")}}},lt=ot,ct=Object(f["a"])(lt,nt,it,!1,null,"2a03f2b8",null),rt=ct.exports,ut={name:"WebsiteRouter",components:{NavBar:rt}},dt=ut,ft=Object(f["a"])(dt,st,at,!1,null,null,null),mt=ft.exports;a["a"].use(p["a"]);var bt=[{path:"/",component:mt,children:[{path:"/",name:"Home Page",component:U}]},{path:"/login",name:"Login",component:J},{path:"/register",name:"Sign Up",component:et},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],pt=new p["a"]({routes:bt}),ht=pt;s("5363");a["a"].config.productionTip=!1,new a["a"]({router:ht,render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"9c0c":function(t,e,s){},cfda:function(t,e,s){t.exports=s.p+"img/sample.cc1b28c3.jpg"},f6c5:function(t,e,s){t.exports=s.p+"img/alfaazLogoSquare.6e4ab6a8.png"}});
//# sourceMappingURL=app.ab884d84.js.map