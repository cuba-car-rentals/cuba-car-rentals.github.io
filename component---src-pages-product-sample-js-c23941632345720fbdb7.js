"use strict";(self.webpackChunkgatsby_ecommerce_theme=self.webpackChunkgatsby_ecommerce_theme||[]).push([[645],{1871:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l="BreadCrumbs-module--crumb--3257d",r=n(3686),i=function(e){var t=e.crumbs;return t&&"object"!=typeof t&&(t=t.indexOf(">")>-1?t.split(">"):[t]),a.createElement("div",{"data-breadcrumbs":!0,className:"BreadCrumbs-module--breadcrumbs--f7ddc"},t&&t.map((function(e,t){return a.createElement("span",{key:t},t>0&&a.createElement("span",{className:"BreadCrumbs-module--spacer--95034"},a.createElement(r.Z,{symbol:"caret"})),"object"==typeof e&&"link"in e&&a.createElement("a",{className:l,href:e.link},e.label.trim()),"object"==typeof e&&!("link"in e)&&a.createElement("span",{className:l},e.label.trim()),"object"!=typeof e&&a.createElement("span",{className:l},e.trim()))})))}},2827:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(606),r="Gallery-module--imageContainer--ae68e",i=function(e){var t=e.images;return a.createElement("div",{className:"Gallery-module--root--a2a19"},a.createElement("div",{className:"Gallery-module--cardGrid--2cfa9"},null==t?void 0:t.map((function(e,t){return a.createElement("div",{key:t,className:r},a.createElement("img",{alt:e.alt,src:e.image}))}))),a.createElement("div",{className:"Gallery-module--mobileSlider--53cb7"},a.createElement(l.Z,{settings:{slidesToShow:1}},t&&(null==t?void 0:t.map((function(e,t){return a.createElement("div",{key:t,className:r},a.createElement("img",{alt:e.alt,src:e.image}))}))))))}},1336:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),l=n(1405),r=function(e){var t=e.image,n=e.alt,r=e.title,i=e.description,o=e.ctaText,c=e.cta,s=e.bgColor;return a.createElement("div",{className:"Split-module--root--e6335"},a.createElement("div",{className:"Split-module--contentContainer--2f7e4",style:{backgroundColor:s}},a.createElement("div",{className:"Split-module--detailContainer--c1d0e"},a.createElement("h4",null,r),a.createElement("p",null,i),a.createElement(l.Z,{className:"Split-module--button--e8c88",level:"primary",onClick:c},o))),a.createElement("div",{className:"Split-module--imageContainer--9add0"},a.createElement("img",{src:t,alt:n})))}},4578:function(e,t,n){n.r(t);var a=n(7294),l=n(6674),r=n(8748),i=n(2751),o=n(1405),c=n(1871),s=n(4954),m=n(4733),u=n(2827),d=n(3859),p=n(1336),f=n(2896),E=n(4092),v=n(8400),b=n(3686),C=n(3716),y=n(1082),h=n(6269);t.default=function(e){var t=(0,a.useContext)(h.ZP).showNotification,n=(0,v.g)(1,"sample")[0],g=(0,a.useState)(0),N=g[0],Z=g[1],S=(0,a.useState)(!1),w=S[0],k=S[1],z=(0,a.useState)(n.colorOptions[0]),T=z[0],A=z[1],B=(0,a.useState)(n.sizeOptions[0]),q=B[0],j=B[1],G=(0,v.g)(4,"woman");return a.createElement(E.Z,null,a.createElement("div",{className:l.root},a.createElement(s.Z,{size:"large",spacing:"min"},a.createElement(c.Z,{crumbs:[{link:"/",label:"Home"},{label:"Men",link:"/shop"},{label:"Sweater",link:"/shop"},{label:""+n.name}]}),a.createElement("div",{className:l.content},a.createElement("div",{className:l.gallery},a.createElement(u.Z,{images:n.gallery})),a.createElement("div",{className:l.details},a.createElement("h1",null,n.name),a.createElement("span",{className:l.vendor}," by ",n.vendor),a.createElement("div",{className:l.priceContainer},a.createElement(m.Z,{appendZero:!0,amount:n.price})),a.createElement("div",null,a.createElement(f.Z,{swatchList:n.colorOptions,activeSwatch:T,setActiveSwatch:A})),a.createElement("div",{className:l.sizeContainer},a.createElement(d.Z,{sizeList:n.sizeOptions,activeSize:q,setActiveSize:j})),a.createElement("div",{className:l.quantityContainer},a.createElement("span",null,"Quantity"),a.createElement(i.Z,{qty:N,setQty:Z})),a.createElement("div",{className:l.actionContainer},a.createElement("div",{className:l.addToButtonContainer},a.createElement(o.Z,{onClick:function(){return t()},fullWidth:!0,level:"primary"},"Add to Bag")),a.createElement("div",{className:l.wishlistActionContainer,role:"presentation",onClick:function(){return k(!w)}},a.createElement(b.Z,{symbol:"heart"}),a.createElement("div",{className:l.heartFillContainer+" "+(!0===w?l.show:l.hide)},a.createElement(b.Z,{symbol:"heartFill"})))),a.createElement("div",{className:l.description},a.createElement("p",null,n.description),a.createElement("span",null,"Product code: ",n.productCode)),a.createElement("div",{className:l.informationContainer},a.createElement(r.Z,{type:"plus",customStyle:l,title:"composition & care"},a.createElement("p",{className:l.information},n.description)),a.createElement(r.Z,{type:"plus",customStyle:l,title:"delivery & returns"},a.createElement("p",{className:l.information},n.description)),a.createElement(r.Z,{type:"plus",customStyle:l,title:"help"},a.createElement("p",{className:l.information},n.description))))),a.createElement("div",{className:l.suggestionContainer},a.createElement("h2",null,"You may also like"),a.createElement(C.Z,{spacing:!0,showSlider:!0,height:400,columns:4,data:G}))),a.createElement("div",{className:l.attributeContainer},a.createElement(p.Z,{image:"/cloth.png",alt:"attribute description",title:"Sustainability",description:"We design our products to look good and to be used on a daily basis. And our aim is to inspire people to live with few timeless objects made to last. This is why quality over quantity is a cornerstone of our ethos and we have no interest in trends or seasonal collections.",ctaText:"learn more",cta:function(){return(0,y.navigate)("/blog")},bgColor:"var(--standard-light-grey)"}))))}},6674:function(e,t,n){n.r(t),n.d(t,{root:function(){return a},content:function(){return l},gallery:function(){return r},details:function(){return i},priceContainer:function(){return o},vendor:function(){return c},sizeContainer:function(){return s},quantityContainer:function(){return m},actionContainer:function(){return u},addToButtonContainer:function(){return d},wishlistActionContainer:function(){return p},heartFillContainer:function(){return f},description:function(){return E},accordionTitle:function(){return v},informationContainer:function(){return b},information:function(){return C},suggestionContainer:function(){return y},attributeContainer:function(){return h},show:function(){return g},hide:function(){return N}});var a="sample-module--root--7b2d6",l="sample-module--content--1e164",r="sample-module--gallery--fd10b",i="sample-module--details--eaa20",o="sample-module--priceContainer--eeab5",c="sample-module--vendor--de5dc",s="sample-module--sizeContainer--35a2e",m="sample-module--quantityContainer--5fa67",u="sample-module--actionContainer--b94d6",d="sample-module--addToButtonContainer--c7fa2",p="sample-module--wishlistActionContainer--3f7b8",f="sample-module--heartFillContainer--88959",E="sample-module--description--54eb1",v="sample-module--accordionTitle--44f3e",b="sample-module--informationContainer--9cb3e",C="sample-module--information--29ab5",y="sample-module--suggestionContainer--71e7c",h="sample-module--attributeContainer--a650b",g="sample-module--show--2f17f",N="sample-module--hide--94acf"}}]);
//# sourceMappingURL=component---src-pages-product-sample-js-c23941632345720fbdb7.js.map