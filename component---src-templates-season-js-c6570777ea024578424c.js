(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"8VZ4":function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var i=t("zLVn"),r=t("nKUr"),c=(t("q1tI"),t("vOnD")),a=t("CRzS"),s=t("89ka"),o=c.d.div.withConfig({displayName:"switcher__StyledSwitcher",componentId:"sc-7tfmzq-0"})(["display:flex;flex-direction:row;background-color:",";border-radius:1rem;",""],a.a,Object(s.c)("0.5rem"));function d(e){var n=e.children,t=Object(i.a)(e,["children"]);return Object(r.jsx)(o,Object.assign({},t,{children:n}))}},ISyE:function(e,n,t){"use strict";t.d(n,"b",(function(){return f})),t.d(n,"a",(function(){return y}));var i=t("zLVn"),r=t("nKUr"),c=(t("q1tI"),t("Wbzz")),a=t("5Vy0"),s=t("vOnD"),o=t("4Fil"),d=t("89ka"),l=t("C+fU"),j=Object(s.d)(o.a).withConfig({displayName:"searchResult__StyledSearchResultCard",componentId:"gogu5j-0"})(["display:flex;flex-direction:row;align-items:center;padding:0 1rem 0 0;"]),u=s.d.img.withConfig({displayName:"searchResult__StyledCover",componentId:"gogu5j-1"})(["width:48px;height:64px;object-fit:cover;"]),h=s.d.div.withConfig({displayName:"searchResult__StyledBody",componentId:"gogu5j-2"})(["flex:1;display:flex;flex-direction:column;justify-content:center;","   padding:0 1rem;"],Object(d.b)("0.25rem")),m=s.d.div.withConfig({displayName:"searchResult__StyledChildren",componentId:"gogu5j-3"})(["@media (max-width:720px){display:none;}"]),b=Object(s.d)(c.Link).withConfig({displayName:"searchResult__StyledLink",componentId:"gogu5j-4"})(["display:block;"]);function f(e){var n=e.title,t=e.description,c=e.image,s=e.to,o=e.children,d=Object(i.a)(e,["title","description","image","to","children"]),f=Object(r.jsxs)(j,Object.assign({},d,{children:[Object(r.jsx)(u,{alt:"Cover",src:c}),Object(r.jsxs)(h,{children:[Object(r.jsx)(a.a,{bold:!0,color:l.b.colors.secondaryTitle,maxLines:2,children:n}),Object(r.jsx)(a.a,{small:!0,maxLines:1,children:t})]}),Object(r.jsx)(m,{children:o})]}));return s?Object(r.jsx)(b,{to:s,children:f}):f}function y(e){return e.children.filter((function(e){return!!e})).map((function(e,n,t){var i=t.length;return Object(r.jsxs)(a.a,{color:l.b.colors.primaryMediumEmphasis,children:[Object(r.jsx)("span",{children:e}),n<i-1&&Object(r.jsx)("span",{color:l.b.colors.primaryMediumEmphasis,children:" • "})]})}))}},aEzc:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var i=t("nKUr"),r=t("Wbzz"),c=t("IP2g"),a=t("wHSu"),s=t("FT44"),o=t("L+1Y"),d=t("5Vy0"),l=t("IgWi"),j=t("ISyE"),u=t("m/zQ"),h=t("aXge");function m(e){var n=e.anime,t=e.hideThemes,m=void 0!==t&&t,b=Object(l.a)(n).image,f=n.year,y="/year/"+n.year;n.season&&(f=n.season+" "+f,y+="/"+n.season.toLowerCase());var x=Object(i.jsxs)(j.a,{children:[Object(i.jsx)("span",{children:"Anime"}),!!f&&Object(i.jsx)(r.Link,{to:y,children:Object(i.jsx)(d.a,{link:!0,children:f})}),Object(i.jsxs)("span",{children:[n.themes.length," themes"]})]});return Object(i.jsx)(j.b,{title:n.name,description:x,image:b,to:"/anime/"+n.slug,children:!m&&Object(i.jsx)(u.a,{children:Object(i.jsxs)(o.b,{row:!0,wrap:!0,gapsBoth:"0.75rem",children:[n.themes.slice(0,4).filter((function(e){return e.entries.length&&e.entries[0].videos.length})).map((function(e){return Object(i.jsx)(h.a,{to:"/video/"+e.entries[0].videos[0].filename,children:Object(i.jsx)(d.a,{small:!0,block:!0,children:e.slug})},e.id)})),n.themes.length>4&&Object(i.jsx)(s.a,{icon:!0,title:"Show all themes",children:Object(i.jsx)(c.a,{icon:a.j,fixedWidth:!0})})]})})})}},aXge:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var i=t("zLVn"),r=t("nKUr"),c=(t("q1tI"),t("vOnD")),a=t("IP2g"),s=t("wHSu"),o=t("FT44"),d=Object(c.d)(o.a).withConfig({displayName:"play__StyledButtonPlay",componentId:"sc-1xaulno-0"})(["display:flex;flex-direction:row;align-items:center;margin-left:1rem;padding:0 0.5rem 0 0;"]),l=c.d.div.withConfig({displayName:"play__StyledPrefix",componentId:"sc-1xaulno-1"})(["display:inline-flex;justify-content:center;align-items:center;width:2rem;height:2rem;margin-left:-1rem;border-radius:1rem;background-color:",";color:",";"],(function(e){return e.theme.colors.secondaryBackground}),(function(e){return e.theme.colors.primaryBackground[0]})),j=c.d.div.withConfig({displayName:"play__StyledBody",componentId:"sc-1xaulno-2"})(["padding:0.5rem;"]);function u(e){var n=e.children,t=e.playing,c=Object(i.a)(e,["children","playing"]);return Object(r.jsxs)(d,Object.assign({},c,{children:[Object(r.jsx)(l,{children:Object(r.jsx)(a.a,{icon:t?s.e:s.u,spin:t,fixedWidth:!0})}),Object(r.jsx)(j,{children:n})]}))}},k1zg:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var i=t("nKUr"),r=t("L+1Y"),c=t("8VZ4"),a=t("FT44");t("q1tI");function s(e){var n=e.year,t=e.season,s=e.seasonList;return Object(i.jsx)(r.b,{row:!0,justifyContent:"center",children:Object(i.jsx)(c.a,{children:s.map((function(e){return Object(i.jsx)(a.a,{to:"/year/"+n+"/"+e.toLowerCase(),active:e===t,children:e},e)}))})})}},ptqJ:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u})),t.d(n,"query",(function(){return h}));var i=t("nKUr"),r=(t("q1tI"),t("vOnD")),c=t("aEzc"),a=t("B8aR"),s=t("89ka"),o=t("jNNy"),d=t("wZWF"),l=t("k1zg"),j=r.d.div.withConfig({displayName:"season__StyledPage",componentId:"sc-176dksm-0"})(["",""],Object(s.b)());function u(e){var n=e.data.allAnime,t=e.pageContext,r=t.year,s=t.season,u=t.seasonList,h=s+" "+r+" Anime",m=n.nodes;return Object(i.jsxs)(j,{children:[Object(i.jsx)(o.a,{title:h}),Object(i.jsx)(d.a,{year:r}),Object(i.jsx)(l.a,{year:r,season:s,seasonList:u}),Object(i.jsx)(a.a,{variant:"section",children:"Anime from "+s+" of "+r}),m.map((function(e){return Object(i.jsx)(c.a,{anime:e},e.slug)}))]})}var h="3504889211"},wZWF:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var i=t("nKUr"),r=t("Wbzz"),c=t("FT44"),a=t("B8aR"),s=t("vOnD"),o=t("L+1Y"),d=s.d.div.withConfig({displayName:"year__StyledYear",componentId:"sc-1veyjiv-0"})(["flex:1;display:flex;margin:0 1rem;"]),l=Object(s.d)(d).withConfig({displayName:"year__StyledYearPrevious",componentId:"sc-1veyjiv-1"})(["justify-content:flex-end;"]),j=Object(s.d)(d).withConfig({displayName:"year__StyledYearNext",componentId:"sc-1veyjiv-2"})(["justify-content:flex-start;"]);function u(e){var n=e.year,t=Object(r.useStaticQuery)("2288602340").allAnime.groupedByYear.map((function(e){return+e.year})),s=t.indexOf(n)>0?t[t.indexOf(n)-1]:null,d=t.indexOf(n)<t.length-1?t[t.indexOf(n)+1]:null;return Object(i.jsxs)(o.b,{row:!0,alignItems:"center",children:[Object(i.jsx)(l,{children:s&&Object(i.jsx)(r.Link,{to:"/year/"+s,children:Object(i.jsx)(c.a,{silent:!0,children:s})})}),Object(i.jsx)(c.a,{to:"/year",silent:!0,children:Object(i.jsx)(a.a,{children:n})}),Object(i.jsx)(j,{children:d&&Object(i.jsx)(r.Link,{to:"/year/"+d,children:Object(i.jsx)(c.a,{silent:!0,children:d})})})]})}}}]);
//# sourceMappingURL=component---src-templates-season-js-c6570777ea024578424c.js.map