"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[817],{7684:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(7462),r=n(7294),i=n(6010),l=n(8425),c=n(8596),s=n(5281),o=n(9960),m=n(4996),d=n(5999);function u(e){return r.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function b(e){var t=e.children,n=e.href,a="breadcrumbs__link";return e.isLast?r.createElement("span",{className:a,itemProp:"name"},t):n?r.createElement(o.Z,{className:a,href:n,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:a},t)}function h(e){var t=e.children,n=e.active,l=e.index,c=e.addMicrodata;return r.createElement("li",(0,a.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function f(){var e=(0,m.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.Z,{"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,i.Z)("breadcrumbs__link",v.breadcrumbsItemLink),href:e},r.createElement(u,{className:v.breadcrumbHomeIcon})))}function g(){var e=(0,l.s1)(),t=(0,c.Ns)();return e?r.createElement("nav",{className:(0,i.Z)(s.k.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,d.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(f,null),e.map((function(t,n){var a=n===e.length-1;return r.createElement(h,{key:n,active:a,index:n,addMicrodata:!!t.href},r.createElement(b,{href:t.href,isLast:a},t.label))})))):null}},4228:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var a=n(7294),r=n(1944),i=n(8425),l=n(4996),c=n(6010),s=n(9960),o=n(3919),m=n(5999),d="cardContainer_fWXF",u="cardTitle_rnsV",v="cardDescription_PWke";function b(e){var t=e.href,n=e.children;return a.createElement(s.Z,{href:t,className:(0,c.Z)("card padding--lg",d)},n)}function h(e){var t=e.href,n=e.icon,r=e.title,i=e.description;return a.createElement(b,{href:t},a.createElement("h2",{className:(0,c.Z)("text--truncate",u),title:r},n," ",r),i&&a.createElement("p",{className:(0,c.Z)("text--truncate",v),title:i},i))}function f(e){var t=e.item,n=(0,i.Wl)(t);return n?a.createElement(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t,n=e.item,r=(0,o.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=n.docId)?t:void 0);return a.createElement(h,{href:n.href,icon:r,title:n.label,description:null==l?void 0:l.description})}function p(e){var t=e.item;switch(t.type){case"link":return a.createElement(g,{item:t});case"category":return a.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function E(e){var t=e.items,n=e.className;return a.createElement("section",{className:(0,c.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,i.Wl)(e)}))}(t).map((function(e,t){return a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(p,{key:t,item:e}))})))}var Z=n(49),N=n(3120),k=n(4364),L=n(7684),_=n(2503),T="generatedIndexPage_vN6x",y="list_eTzJ",x="title_kItE";function I(e){var t=e.categoryGeneratedIndex;return a.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.Z)(t.image)})}function w(e){var t=e.categoryGeneratedIndex,n=(0,i.jA)();return a.createElement(a.Fragment,null,a.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.Z)(t.image)}),a.createElement("div",{className:T},a.createElement(N.Z,null),a.createElement(L.Z,null),a.createElement(k.Z,null),a.createElement("header",null,a.createElement(_.Z,{as:"h1",className:x},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("article",{className:"margin-top--lg"},a.createElement(E,{items:n.items,className:y})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(Z.Z,{previous:t.navigation.previous,next:t.navigation.next}))))}function V(e){return a.createElement(a.Fragment,null,a.createElement(I,e),a.createElement(w,e))}},49:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),r=n(7294),i=n(5999),l=n(2244);function c(e){var t=e.previous,n=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(l.Z,(0,a.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&r.createElement(l.Z,(0,a.Z)({},n,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4364:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(6010),i=n(5999),l=n(4477),c=n(5281);function s(e){var t=e.className,n=(0,l.E)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,c.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},3120:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7294),r=n(6010),i=n(2263),l=n(9960),c=n(5999),s=n(143),o=n(373),m=n(5281),d=n(4477);var u={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return a.createElement(t,e)}function b(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(l.Z,{to:n,onClick:r},a.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,n=e.className,l=e.versionMetadata,c=(0,i.Z)().siteConfig.title,d=(0,s.gA)({failfast:!0}).pluginId,u=(0,o.J)(d).savePreferredVersionName,h=(0,s.Jo)(d),f=h.latestDocSuggestion,g=h.latestVersionSuggestion,p=null!=f?f:(t=g).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,r.Z)(n,m.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:c,versionMetadata:l})),a.createElement("div",{className:"margin-top--md"},a.createElement(b,{versionLabel:g.label,to:p.path,onClick:function(){return u(g.name)}})))}function f(e){var t=e.className,n=(0,d.E)();return n.banner?a.createElement(h,{className:t,versionMetadata:n}):null}},2503:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),r=n(3366),i=n(7294),l=n(6010),c=n(5999),s=n(6668),o="anchorWithStickyNavbar_LWe7",m="anchorWithHideOnScrollNavbar_WYt5",d=["as","id"];function u(e){var t=e.as,n=e.id,u=(0,r.Z)(e,d),v=(0,s.L)().navbar.hideOnScroll;return"h1"!==t&&n?i.createElement(t,(0,a.Z)({},u,{className:(0,l.Z)("anchor",v?m:o),id:n}),u.children,i.createElement("a",{className:"hash-link",href:"#"+n,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,(0,a.Z)({},u,{id:void 0}))}},2244:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(6010),i=n(9960);function l(e){var t=e.permalink,n=e.title,l=e.subLabel,c=e.isNext;return a.createElement(i.Z,{className:(0,r.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}}}]);