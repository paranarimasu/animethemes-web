(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"4m+v":function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var r=t("zLVn"),i=t("nKUr"),s=(t("q1tI"),t("vOnD")),c=t("IP2g"),a=t("89ka"),o=t("5Vy0"),l=t("C+fU"),d=s.d.span.withConfig({displayName:"tag__StyledTag",componentId:"m2207s-0"})(["display:inline-flex;flex-direction:row;align-items:center;",""],Object(a.c)("0.25rem")),j=Object(s.d)(c.a).withConfig({displayName:"tag__StyledTagIcon",componentId:"m2207s-1"})(["color:",";",""],(function(e){return e.theme.colors.primaryLowEmphasis}),(function(e){return e.warning&&Object(s.c)(["color:",";"],(function(e){return e.theme.colors.warningTitle}))}));function m(e){var n=e.icon,t=e.iconProps,s=e.warning,c=e.children,a=Object(r.a)(e,["icon","iconProps","warning","children"]);return Object(i.jsxs)(d,Object.assign({},a,{children:[!!n&&Object(i.jsx)(j,Object.assign({icon:n,fixedWidth:!0,warning:s},t)),!!c&&Object(i.jsx)(o.a,{small:!0,color:l.b.colors.primaryHighEmphasis,children:c})]}))}},ISyE:function(e,n,t){"use strict";t.d(n,"b",(function(){return h})),t.d(n,"a",(function(){return f}));var r=t("zLVn"),i=t("nKUr"),s=(t("q1tI"),t("Wbzz")),c=t("5Vy0"),a=t("vOnD"),o=t("4Fil"),l=t("89ka"),d=t("C+fU"),j=Object(a.d)(o.a).withConfig({displayName:"searchResult__StyledSearchResultCard",componentId:"gogu5j-0"})(["display:flex;flex-direction:row;align-items:center;padding:0 1rem 0 0;"]),m=a.d.img.withConfig({displayName:"searchResult__StyledCover",componentId:"gogu5j-1"})(["width:48px;height:64px;object-fit:cover;"]),u=a.d.div.withConfig({displayName:"searchResult__StyledBody",componentId:"gogu5j-2"})(["flex:1;display:flex;flex-direction:column;justify-content:center;","   padding:0 1rem;"],Object(l.b)("0.25rem")),b=a.d.div.withConfig({displayName:"searchResult__StyledChildren",componentId:"gogu5j-3"})(["@media (max-width:720px){display:none;}"]);function h(e){var n=e.title,t=e.description,a=e.image,o=e.to,l=e.children,h=Object(r.a)(e,["title","description","image","to","children"]),f=Object(i.jsxs)(j,Object.assign({},h,{children:[Object(i.jsx)(m,{alt:"Cover",src:a}),Object(i.jsxs)(u,{children:[Object(i.jsx)(c.a,{bold:!0,color:d.b.colors.secondaryTitle,maxLines:2,children:n}),Object(i.jsx)(c.a,{small:!0,maxLines:1,children:t})]}),Object(i.jsx)(b,{children:l})]}));return o?Object(i.jsx)(s.Link,{to:o,children:f}):f}function f(e){return e.children.filter((function(e){return!!e})).map((function(e,n,t){var r=t.length;return Object(i.jsxs)(c.a,{color:d.b.colors.primaryMediumEmphasis,children:[Object(i.jsx)("span",{children:e}),n<r-1&&Object(i.jsx)("span",{color:d.b.colors.primaryMediumEmphasis,children:" • "})]})}))}},Qq1W:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("nKUr"),i=t("4m+v"),s=t("wHSu"),c=t("L+1Y");t("q1tI");function a(e){var n=e.entry;return Object(r.jsxs)(c.b,{row:!0,wrap:!0,gapsBoth:"0.75rem",children:[Object(r.jsx)(i.a,{icon:s.n,children:n.episodes||"—"}),!!n.spoiler&&Object(r.jsx)(i.a,{icon:s.b,warning:!0,children:"SPOILER"}),!!n.nsfw&&Object(r.jsx)(i.a,{icon:s.k,warning:!0,children:"NSFW"})]})}},"W/7f":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("nKUr"),i=t("wHSu"),s=t("4m+v"),c=t("L+1Y");function a(e){var n=e.video;return Object(r.jsxs)(c.b,{row:!0,wrap:!0,gapsBoth:"0.75rem",children:[Object(r.jsxs)(s.a,{title:"Resolution",children:[n.resolution,"p"]}),!!n.nc&&Object(r.jsx)(s.a,{icon:i.s,title:"No Credits"}),!!n.subbed&&Object(r.jsx)(s.a,{icon:i.f,title:"With Subtitles"}),!!n.lyrics&&Object(r.jsx)(s.a,{icon:i.g,title:"With Lyrics"}),!!n.uncen&&Object(r.jsx)(s.a,{icon:i.m,title:"Uncensored"}),!!n.source&&Object(r.jsx)(s.a,{icon:i.h,title:"Source",children:n.source.toUpperCase()}),"None"!==n.overlap&&Object(r.jsx)(s.a,{icon:i.x,title:"Overlap",children:n.overlap.toUpperCase()})]})}},aEzc:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r=t("nKUr"),i=t("Wbzz"),s=t("IP2g"),c=t("wHSu"),a=t("FT44"),o=t("L+1Y"),l=t("5Vy0"),d=t("IgWi"),j=t("ISyE"),m=t("m/zQ"),u=t("aXge");function b(e){var n=e.anime,t=e.hideThemes,b=void 0!==t&&t,h=Object(d.a)(n).image,f=n.year,g="/year/"+n.year;n.season&&(f=n.season+" "+f,g+="/"+n.season.toLowerCase());var p=Object(r.jsxs)(j.a,{children:[Object(r.jsx)("span",{children:"Anime"}),!!f&&Object(r.jsx)(i.Link,{to:g,children:Object(r.jsx)(l.a,{link:!0,children:f})}),Object(r.jsxs)("span",{children:[n.themes.length," themes"]})]});return Object(r.jsx)(j.b,{title:n.name,description:p,image:h,to:"/anime/"+n.slug,children:!b&&Object(r.jsx)(m.a,{children:Object(r.jsxs)(o.b,{row:!0,wrap:!0,gapsBoth:"0.75rem",children:[n.themes.slice(0,4).filter((function(e){return e.entries.length&&e.entries[0].videos.length})).map((function(e){return Object(r.jsx)(u.a,{to:"/video/"+e.entries[0].videos[0].filename,children:Object(r.jsx)(l.a,{small:!0,block:!0,children:e.slug})},e.id)})),n.themes.length>4&&Object(r.jsx)(a.a,{icon:!0,title:"Show all themes",children:Object(r.jsx)(s.a,{icon:c.j,fixedWidth:!0})})]})})})}},aXge:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var r=t("zLVn"),i=t("nKUr"),s=(t("q1tI"),t("vOnD")),c=t("IP2g"),a=t("wHSu"),o=t("FT44"),l=Object(s.d)(o.a).withConfig({displayName:"play__StyledButtonPlay",componentId:"sc-1xaulno-0"})(["display:flex;flex-direction:row;align-items:center;margin-left:1rem;padding:0 0.5rem 0 0;"]),d=s.d.div.withConfig({displayName:"play__StyledPrefix",componentId:"sc-1xaulno-1"})(["display:inline-flex;justify-content:center;align-items:center;width:2rem;height:2rem;margin-left:-1rem;border-radius:1rem;background-color:",";color:",";"],(function(e){return e.theme.colors.secondaryBackground}),(function(e){return e.theme.colors.primaryBackground[0]})),j=s.d.div.withConfig({displayName:"play__StyledBody",componentId:"sc-1xaulno-2"})(["padding:0.5rem;"]);function m(e){var n=e.children,t=e.playing,s=Object(r.a)(e,["children","playing"]);return Object(i.jsxs)(l,Object.assign({},s,{children:[Object(i.jsx)(d,{children:Object(i.jsx)(c.a,{icon:t?a.e:a.u,spin:t,fixedWidth:!0})}),Object(i.jsx)(j,{children:n})]}))}},f019:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("nKUr"),i=(t("q1tI"),t("xQ4I")),s=t("ISyE");function c(e){var n=e.artist,t=Object(i.a)(n).image,c=Object(r.jsxs)(s.a,{children:[Object(r.jsx)("span",{children:"Artist"}),!!n.performances&&Object(r.jsxs)("span",{children:[n.performances.length," songs"]})]});return Object(r.jsx)(s.b,{title:n.name,description:c,image:t,to:"/artist/"+n.slug})}},gSOQ:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("nKUr"),i=t("5Vy0"),s=t("Wbzz"),c=t("C+fU");function a(e){var n=e.song;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{color:c.b.colors.secondaryTitle,children:n.title}),!!n.performances&&!!n.performances.length&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{small:!0,color:c.b.colors.primaryMediumEmphasis,children:" by "}),n.performances.map((function(e,t){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s.Link,{to:"/artist/"+e.artist.slug,children:Object(r.jsx)(i.a,{link:!0,children:e.as||e.artist.name},e.as||e.artist.name)}),t<n.performances.length-1&&Object(r.jsx)(i.a,{small:!0,color:c.b.colors.primaryMediumEmphasis,children:t===n.performances.length-2?" & ":", "})]})}))]})]})}},sjxK:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return v})),t.d(n,"query",(function(){return y}));var r=t("nKUr"),i=t("Wbzz"),s=t("L+1Y"),c=t("vOnD"),a=t("5Vy0"),o=t("IgWi"),l=t("RFkb"),d=t("gSOQ"),j=t("W/7f"),m=t("Qq1W"),u=t("q1tI"),b=t.n(u),h=t("B8aR"),f=t("sumR"),g=t("aEzc"),p=t("f019"),x=t("jNNy"),O=Object(c.d)(s.b).attrs({gapsColumn:"2rem"}).withConfig({displayName:"video__StyledVideoInfo",componentId:"b074nb-0"})(["padding:0 1rem;"]);function v(e){var n=e.data.video,t=n.entries[0],c=t.theme,v=c.anime,y=Object(l.a)().siteName,w=Object(o.a)(v).image;Object(u.useEffect)((function(){c&&w&&(navigator.mediaSession.metadata=new MediaMetadata({title:c.slug+" • "+c.song.title,artist:c.song.performances?c.song.performances.map((function(e){return e.as||e.artist.name})).join(", "):void 0,album:v.name,artwork:[{src:w,sizes:"512x512",type:"image/jpeg"}]}))}),[v,c,w]);var I,C,S,L=c.entries.map((function(e){var t=e.videos.filter((function(e){return e.filename!==n.filename}));return t.length?Object.assign({},e,{videos:t}):null})).filter((function(e){return!!e})),_=t.version?c.song.title+" ("+v.name+" "+c.slug+" V"+t.version+")":c.song.title+" ("+v.name+" "+c.slug+")",k=(I=c.song,C="",S=t.version?" Version "+t.version:"",I.performances&&I.performances.length&&(C=" by ",I.performances.map((function(e,n){C+=e.as||e.artist.name,n<I.performances.length-1&&(C+=n===I.performances.length-2?", and ":", ")}))),"Watch "+v.name+" "+c.slug+S+": "+I.title+C+" on "+y);return Object(r.jsxs)(O,{children:[Object(r.jsx)(x.a,{title:_,description:k}),Object(r.jsxs)(s.b,{row:!0,alignItems:"center",gapsRow:"1rem",children:[Object(r.jsx)(s.a,{flex:1,children:Object(r.jsxs)(s.b,{justifyContent:"center",gapsColumn:"0.25rem",children:[Object(r.jsx)(a.a,{bold:!0,children:Object(r.jsx)(d.a,{song:c.song})}),Object(r.jsxs)(a.a,{small:!0,maxLines:1,children:[Object(r.jsxs)(a.a,{children:[c.slug," from "]}),Object(r.jsx)(i.Link,{to:"/anime/"+v.slug,children:Object(r.jsx)(a.a,{link:!0,children:v.name})})]})]})}),Object(r.jsxs)(s.b,{row:!0,alignItems:"center",gapsRow:"0.5rem",children:[Object(r.jsxs)(a.a,{small:!0,children:["Version ",t.version||1]}),Object(r.jsx)(m.a,{entry:t}),Object(r.jsx)(a.a,{link:!0,children:"•"}),Object(r.jsx)(j.a,{video:n})]})]}),Object(r.jsxs)(s.b,{row:!0,gapsRow:"2rem",children:[Object(r.jsx)(s.a,{flex:2,children:Object(r.jsxs)(s.b,{gapsColumn:"1rem",children:[Object(r.jsx)(h.a,{variant:"section",children:"Related entries"}),Object(r.jsxs)(s.b,{row:!0,gapsRow:"1rem",children:[Object(r.jsx)(s.a,{flex:1,children:Object(r.jsx)(g.a,{anime:v,hideThemes:!0})}),Object(r.jsx)(s.a,{flex:1,children:Object(r.jsx)(s.b,{gapsColumn:"1rem",children:!!c.song.performances&&c.song.performances.map((function(e){return Object(r.jsx)(p.a,{artist:e.artist},e.artist.name)}))})})]})]})}),Object(r.jsx)(s.a,{flex:1,children:!!L.length&&Object(r.jsxs)(s.b,{gapsColumn:"1rem",alignItems:"flex-end",children:[Object(r.jsx)(h.a,{variant:"section",children:"Other versions"}),L.map((function(e){return Object(r.jsxs)(b.a.Fragment,{children:[Object(r.jsxs)(s.b,{row:!0,alignItems:"center",gapsRow:"0.5rem",children:[Object(r.jsxs)(a.a,{small:!0,children:["Version ",e.version||1]}),Object(r.jsx)(m.a,{entry:t})]}),e.videos.map((function(e,n){return Object(r.jsx)(f.a,{video:e},n)}))]},e.version)}))]})})]})]})}var y="3937745839"},sumR:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("zLVn"),i=t("nKUr"),s=t("aXge"),c=t("W/7f"),a=t("q1tI"),o=t("ptmS");function l(e){var n=e.video,t=Object(r.a)(e,["video"]),l=Object(a.useContext)(o.a).currentVideo;return Object(i.jsx)(s.a,Object.assign({to:"/video/"+n.filename,playing:l&&l.filename===n.filename},t,{children:Object(i.jsx)(c.a,{video:n})}))}},xQ4I:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("7L65"),i=t("q1tI");function s(e){var n=Object(i.useState)(null),t=n[0],s=n[1];return Object(i.useEffect)((function(){var n=!1;return Object(r.a)(e.name).then((function(e){n||s(e.image)})),function(){n=!0}}),[e]),{image:t}}}}]);
//# sourceMappingURL=component---src-templates-video-js-5343e81d0d0f5d2ed7ee.js.map