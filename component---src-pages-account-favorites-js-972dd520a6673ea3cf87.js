"use strict";(self.webpackChunkgatsby_ecommerce_theme=self.webpackChunkgatsby_ecommerce_theme||[]).push([[885],{1871:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294),i="BreadCrumbs-module--crumb--3257d",s=a(3686),n=function(e){var t=e.crumbs;return t&&"object"!=typeof t&&(t=t.indexOf(">")>-1?t.split(">"):[t]),r.createElement("div",{"data-breadcrumbs":!0,className:"BreadCrumbs-module--breadcrumbs--f7ddc"},t&&t.map((function(e,t){return r.createElement("span",{key:t},t>0&&r.createElement("span",{className:"BreadCrumbs-module--spacer--95034"},r.createElement(s.Z,{symbol:"caret"})),"object"==typeof e&&"link"in e&&r.createElement("a",{className:i,href:e.link},e.label.trim()),"object"==typeof e&&!("link"in e)&&r.createElement("span",{className:i},e.label.trim()),"object"!=typeof e&&r.createElement("span",{className:i},e.trim()))})))}},5170:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),i=function(e){var t=e.children,a=e.visible,i=e.close;return(0,r.useEffect)((function(){return window.addEventListener("keydown",i),function(){return window.removeEventListener("keydown",i)}}),[i]),r.createElement("div",{className:"Modal-module--root--28044 "+(!0===a?"Modal-module--show--dfef9":"Modal-module--hide--d4e8e")},r.createElement("div",{className:"Modal-module--contentContainer--6c522"},t),r.createElement("div",{role:"presentation",onClick:function(){return i()},className:"Modal-module--backdrop--607c2"}))}},7254:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),i=a(1405),s=a(4733),n=a(1817),o=a(2896),l=a(8400),c=a(6269),d="QuickView-module--sectionContainer--a8515",m=function(e){var t=e.close,a=e.buttonTitle,m=void 0===a?"Add to Bag":a,u=(0,l.g)(1,"sample")[0],p=(0,r.useContext)(c.ZP).showNotification,g=(0,r.useState)(u.colorOptions[0]),h=g[0],f=g[1],w=(0,r.useState)(u.sizeOptions[0]),b=w[0],v=w[1];return r.createElement("div",{className:"QuickView-module--root--41109"},r.createElement("div",{className:"QuickView-module--titleContainer--97ccc"},r.createElement("h4",null,"Select Options")),r.createElement("div",{className:"QuickView-module--contentContainer--5ed40"},r.createElement("div",{className:"QuickView-module--productContainer--e899c"},r.createElement("span",{className:"QuickView-module--productName--d8aac"},u.name),r.createElement("div",{className:"QuickView-module--price--6d140"},r.createElement(s.Z,{amount:u.price})),r.createElement("div",{className:"QuickView-module--productImageContainer--18667"},r.createElement("img",{alt:u.alt,src:u.image}))),r.createElement("div",{className:d},r.createElement(o.Z,{swatchList:u.colorOptions,activeSwatch:h,setActiveSwatch:f})),r.createElement("div",{className:d},r.createElement(n.Z,{sizeList:u.sizeOptions,activeSize:b,setActiveSize:v})),r.createElement(i.Z,{onClick:function(){return t(),void p()},fullWidth:!0,level:"primary"},m)))}},1817:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294),i=function(e){var t=e.data,a=e.setActive,i=e.isActive;return r.createElement("div",{className:"BoxOption-module--root--49993 "+(!0===i?"BoxOption-module--isActive--8244a":""),onClick:function(){return a(t)},role:"presentation"},r.createElement("span",{className:"BoxOption-module--option--c986b"},t))},s="SizeList-module--label--44881",n=function(e){var t=e.sizeList,a=e.setActiveSize,n=e.activeSize;return r.createElement("div",{className:"SizeList-module--root--d1877"},r.createElement("div",{className:"SizeList-module--sizeLabelContainer--21099"},r.createElement("span",{className:s},"Size"),r.createElement("span",{className:s+" SizeList-module--guide--b935e"},"Size Guide")),r.createElement("div",{className:"SizeList-module--sizeSelection--45655"},null==t?void 0:t.map((function(e,t){return r.createElement(i,{key:t,data:e,setActive:a,isActive:n===e})}))))}},2896:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),i=function(e){var t=e.data,a=e.setActiveSwatch,i=e.isActive;return r.createElement("button",{className:"Swatch-module--root--b289f "+(!0===i?"Swatch-module--isActive--3d559":""),onClick:function(){return a(t)}},r.createElement("div",{style:{backgroundColor:t.color},className:"Swatch-module--circle--62e5e"}))},s=function(e){var t=e.swatchList,a=e.activeSwatch,s=e.setActiveSwatch;return r.createElement("div",{className:"SwatchList-module--root--8d12e"},r.createElement("span",{className:"SwatchList-module--label--b12be"},"Select Colour: ",a.title),r.createElement("div",{className:"SwatchList-module--swatchSelection--a95b1"},null==t?void 0:t.map((function(e,t){return r.createElement(i,{key:t,data:e,setActiveSwatch:s,isActive:a===e})}))))}},8400:function(e,t,a){a.d(t,{O:function(){return n},g:function(){return s}});var r=a(680),i=JSON.parse('[{"title":"The new standard of Opening and Closing","category":"design","alt":"blog new standard of closing","image":"/blogs/blog1.png","link":"/blog/sample","excerpt":"London-based seasonal British flowers and UK producers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths."},{"title":"Lorem Ipsum is simply dummy text of the printing and typesetting industry.","category":"design","alt":"blog new standard of closing","image":"/blogs/blog2.png","link":"/blog/sample","excerpt":"London-based seasonal British flowers and UK producers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths."},{"title":"It is a long established fact that a reader by the readable","category":"design","alt":"blog new standard of closing","image":"/blogs/blog3.png","link":"/blog/sample","excerpt":"London-basedsonal British flowers and UK producers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths."},{"title":"It is a long establishable","category":"design","alt":"blog new standard of closing","image":"/blogs/blog3.png","link":"/blog/sample","excerpt":"London-based floral designer Flora Fricker champions seasonal British flowers and UK producers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths."},{"title":"It is a long estab the readable","category":"design","alt":"blog new standard of closing","image":"/blogs/blog2.png","link":"/blog/sample","excerpt":"Loproducers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths."},{"title":"The new standard of Opening and Closing","category":"design","alt":"blog new standard of closing","image":"/blogs/blog1.png","link":"/blog/sample","excerpt":"London-based floral tish flowers and UK producers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths."},{"title":"It is a long established fact that a reader by the readable","category":"design","alt":"blog new standard of closing","image":"/blogs/blog2.png","link":"/blog/sample","excerpt":"London-based floral designer Flora Fricker champions seasonal British flowers and UK producers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths."},{"title":"It is a long et a reader by the readable t is a long et a reader by the rea","category":"design","alt":"blog new standard of closing","image":"/blogs/blog2.png","link":"/blog/sample","excerpt":"London-bs and UK producers in her beautiful and sustainable creations. This season, we worked with Flora to style Sunspel stores for Christmas, for which she produced eye-catching sustainably sourced wreaths."}]');function s(e,t){return r.filter((function(e){return e.tags.includes(t)})).slice(0,e)}function n(e){return i.slice(0,e)}},6472:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var r=a(7294),i=a(1082),s=a(1405),n=a(1871),o=a(4954),l=a(1690),c=a(7254),d=function(e){var t=(0,r.useState)(!1),a=t[0],i=t[1],s=e.color,n=e.size,o=e.img,d=e.alt,m=e.showConfirmDialog;return r.createElement("div",{className:"FavoriteCard-module--root--acfce"},r.createElement("div",null,r.createElement("div",{className:"FavoriteCard-module--imageContainer--a9658"},r.createElement("img",{src:o,alt:d})),r.createElement("div",{className:"FavoriteCard-module--metaContainer--ca454"},r.createElement("span",null,"Color: ",s),r.createElement("span",null,"Size: ",n))),r.createElement("div",{className:"FavoriteCard-module--actionContainer--d710f"},r.createElement("span",{role:"presentation",onClick:function(){return i(!0)}},"Edit"),r.createElement("span",{role:"presentation",onClick:m},"Remove")),r.createElement(l.Z,{visible:a,close:function(){return i(!1)}},r.createElement(c.Z,{buttonTitle:"update favorite",close:function(){return i(!1)}})))},m=a(4092),u=a(5170),p=a(1896),g=function(e){var t={color:"Purple Pale",size:"XS",img:"/products/shirt2.jpg",alt:"favorite 2"};!1===(0,p.$D)()&&(0,i.navigate)("/login");var a=(0,r.useState)(!1),l=a[0],c=a[1];return r.createElement(m.Z,null,r.createElement("div",{className:"favorites-module--root--64947"},r.createElement(o.Z,{size:"large"},r.createElement(n.Z,{crumbs:[{link:"/",label:"Home"},{link:"/account/favorites",label:"Favorites"}]}),r.createElement("h1",null,"Favorites"),r.createElement("div",{className:"favorites-module--favoriteListContainer--73d12"},r.createElement(d,Object.assign({showConfirmDialog:function(){return c(!0)}},{color:"Anthracite Melange",size:"XS",img:"/products/shirt1.jpg",alt:"favorite 1"})),r.createElement(d,Object.assign({showConfirmDialog:function(){return c(!0)}},t)),r.createElement(d,Object.assign({showConfirmDialog:function(){return c(!0)}},{color:"Moss Green",size:"S",img:"/products/shirt3.jpg",alt:"favorite 3"})),r.createElement(d,Object.assign({showConfirmDialog:function(){return c(!0)}},t))))),r.createElement(u.Z,{visible:l,close:function(){return c(!1)}},r.createElement("div",{className:"favorites-module--confirmDeleteContainer--4ff29"},r.createElement("h4",null,"Remove from Favorites?"),r.createElement("p",null,"Are you sure you want to remove this from your favorites? You cannot undo this action once you press ",r.createElement("strong",null,"'Delete'")),r.createElement("div",{className:"favorites-module--actionContainer--3755f"},r.createElement(s.Z,{onClick:function(){return c(!1)},level:"primary"},"Delete"),r.createElement(s.Z,{onClick:function(){return c(!1)},level:"secondary"},"Cancel")))))}},680:function(e){e.exports=JSON.parse('[{"productCode":"MJUM8066-GYDZ","name":"Lambswool Crew Neck Jumper","vendor":"Sunspel","price":75,"alt":"lambswool crew neck jumper","image":"/products/pdp1.jpeg","colorOptions":[{"color":"#000000","title":"Anthracite Melange"},{"color":"#4D34AE","title":"Pale Purple"},{"color":"#488266","title":"Green Moss"}],"sizeOptions":["xs","s","m","l","xl"],"wishlist":true,"tags":["sample"],"gallery":[{"image":"/products/pdp1.jpeg","alt":"pdp description 1"},{"image":"/products/pdp2.jpeg","alt":"pdp description 2"},{"image":"/products/pdp3.jpeg","alt":"pdp description 3"},{"image":"/products/pdp4.jpeg","alt":"pdp description 4"}],"description":"This soft lambswool jumper is knitted in Scotland, using yarn from one of the world\'s oldest spinners based in Fife. Once knitted, the garment is washed in Scottish spring water to make it beautifully soft."},{"name":"Classic T-Shirt","price":75,"alt":"classic t-shirt 1","image":"/products/shirt1.jpg","tags":["shirt","men"]},{"name":"Classic T-Shirt","price":75,"alt":"classic t-shirt 2","image":"/products/shirt2.jpg","tags":["shirt","men"]},{"name":"Classic T-Shirt","price":75,"alt":"classic t-shirt 3","image":"/products/shirt3.jpg","tags":["shirt","men"]},{"name":"Relaxed-fit graphic T-shirt","price":13.9,"alt":"relaxed t shirt woman","image":"/products/woman1.jpeg","tags":["woman"],"meta":"+ 2 colors"},{"name":"Relaxed-fit graphic T-shirt","price":15.9,"alt":"relaxed t shirt woman","image":"/products/woman2.jpeg","tags":["woman"]},{"name":"Relaxed-fit graphic T-shirt","price":13.9,"alt":"relaxed t shirt woman","image":"/products/woman3.jpeg","tags":["woman"],"meta":"+ 2 colors"},{"name":"Relaxed-fit graphic T-shirt","price":15.9,"alt":"relaxed t shirt woman","image":"/products/woman4.jpeg","tags":["woman"]},{"name":"Relaxed-fit graphic T-shirt","price":15.9,"alt":"relaxed t shirt woman","image":"/products/woman5.jpeg","tags":["woman"],"originalPrice":31.5},{"name":"Relaxed-fit graphic T-shirt","price":21,"alt":"relaxed t shirt woman","image":"/products/woman6.jpeg","tags":["woman"]},{"name":"Relaxed-fit graphic T-shirt","price":15.9,"alt":"relaxed t shirt woman","image":"/products/woman3.jpeg","tags":["woman"]},{"name":"Relaxed-fit graphic T-shirt","price":15.9,"alt":"relaxed t shirt woman","image":"/products/woman2.jpeg","tags":["woman"],"originalPrice":31.5},{"name":"Relaxed-fit graphic T-shirt","price":21,"alt":"relaxed t shirt woman","image":"/products/woman1.jpeg","tags":["woman"]},{"name":"Camper","price":200,"alt":"Beautiful and comfortable campers","image":"/products/cars/CAMPER2.jpeg","link":"camper","tags":["car"],"gallery":[{"image":"/products/cars/CAMPER1.jpeg","alt":"pdp description 1"},{"image":"/products/cars/CAMPER2.jpeg","alt":"pdp description 1"},{"image":"/products/cars/CAMPER3.jpeg","alt":"pdp description 1"}]},{"name":"Patriot","price":100,"alt":"4x4 SUV","image":"/products/cars/PATRIOT-LEFT.jpeg","link":"patriot","tags":["car"],"gallery":[{"image":"/products/cars/PATRIOT-FRONT-RIGHT.jpeg","alt":"pdp description 1"},{"image":"/products/cars/PATRIOT-LEFT.jpeg","alt":"pdp description 1"},{"image":"/products/cars/PATRIOT-PIT.jpeg","alt":"pdp description 1"}]}]')}}]);
//# sourceMappingURL=component---src-pages-account-favorites-js-972dd520a6673ea3cf87.js.map