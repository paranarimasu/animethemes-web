(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"4m+v":function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var r=t("zLVn"),i=t("nKUr"),s=(t("q1tI"),t("vOnD")),c=t("IP2g"),a=t("89ka"),o=t("5Vy0"),l=t("C+fU"),j=s.d.span.withConfig({displayName:"tag__StyledTag",componentId:"m2207s-0"})(["display:inline-flex;flex-direction:row;align-items:center;",""],Object(a.c)("0.25rem")),d=Object(s.d)(c.a).withConfig({displayName:"tag__StyledTagIcon",componentId:"m2207s-1"})(["color:",";",""],(function(e){return e.theme.colors.primaryLowEmphasis}),(function(e){return e.warning&&Object(s.c)(["color:",";"],(function(e){return e.theme.colors.warningTitle}))}));function m(e){var n=e.icon,t=e.iconProps,s=e.warning,c=e.children,a=Object(r.a)(e,["icon","iconProps","warning","children"]);return Object(i.jsxs)(j,Object.assign({},a,{children:[!!n&&Object(i.jsx)(d,Object.assign({icon:n,fixedWidth:!0,warning:s},t)),!!c&&Object(i.jsx)(o.a,{small:!0,color:l.b.colors.primaryHighEmphasis,children:c})]}))}},Qq1W:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("nKUr"),i=t("4m+v"),s=t("wHSu"),c=t("L+1Y");t("q1tI");function a(e){var n=e.entry;return Object(r.jsxs)(c.b,{row:!0,wrap:!0,gapsBoth:"0.75rem",children:[Object(r.jsx)(i.a,{icon:s.n,children:n.episodes||"—"}),!!n.spoiler&&Object(r.jsx)(i.a,{icon:s.b,warning:!0,children:"SPOILER"}),!!n.nsfw&&Object(r.jsx)(i.a,{icon:s.k,warning:!0,children:"NSFW"})]})}},"W/7f":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("nKUr"),i=t("wHSu"),s=t("4m+v"),c=t("L+1Y");function a(e){var n=e.video;return Object(r.jsxs)(c.b,{row:!0,wrap:!0,gapsBoth:"0.75rem",children:[Object(r.jsxs)(s.a,{title:"Resolution",children:[n.resolution,"p"]}),!!n.nc&&Object(r.jsx)(s.a,{icon:i.s,title:"No Credits"}),!!n.subbed&&Object(r.jsx)(s.a,{icon:i.f,title:"With Subtitles"}),!!n.lyrics&&Object(r.jsx)(s.a,{icon:i.g,title:"With Lyrics"}),!!n.uncen&&Object(r.jsx)(s.a,{icon:i.m,title:"Uncensored"}),!!n.source&&Object(r.jsx)(s.a,{icon:i.h,title:"Source",children:n.source.toUpperCase()}),"None"!==n.overlap&&Object(r.jsx)(s.a,{icon:i.x,title:"Overlap",children:n.overlap.toUpperCase()})]})}},aEzc:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var r=t("nKUr"),i=t("Wbzz"),s=t("IP2g"),c=t("wHSu"),a=t("FT44"),o=t("L+1Y"),l=t("5Vy0"),j=t("ISyE"),d=t("m/zQ"),m=t("aXge"),u=t("jcM5");function b(e){var n=e.anime,t=e.hideThemes,b=void 0!==t&&t,h=Object(u.a)(n).smallCover,g=n.year,f="/year/"+n.year;n.season&&(g=n.season+" "+g,f+="/"+n.season.toLowerCase());var O=Object(r.jsxs)(j.a,{children:[Object(r.jsx)("span",{children:"Anime"}),!!g&&Object(r.jsx)(i.Link,{to:f,children:Object(r.jsx)(l.a,{link:!0,children:g})}),Object(r.jsxs)("span",{children:[n.themes.length," themes"]})]});return Object(r.jsx)(j.b,{title:n.name,description:O,image:h,to:"/anime/"+n.slug,children:!b&&Object(r.jsx)(d.a,{children:Object(r.jsxs)(o.b,{row:!0,wrap:!0,gapsBoth:"0.75rem",children:[n.themes.slice(0,4).filter((function(e){return e.entries.length&&e.entries[0].videos.length})).map((function(e){return Object(r.jsx)(m.a,{to:"/video/"+e.entries[0].videos[0].filename,children:Object(r.jsx)(l.a,{small:!0,block:!0,children:e.slug})},e.id)})),n.themes.length>4&&Object(r.jsx)(a.a,{icon:!0,title:"Show all themes",children:Object(r.jsx)(s.a,{icon:c.j,fixedWidth:!0})})]})})})}},aXge:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var r=t("zLVn"),i=t("nKUr"),s=(t("q1tI"),t("vOnD")),c=t("IP2g"),a=t("wHSu"),o=t("FT44"),l=Object(s.d)(o.a).withConfig({displayName:"play__StyledButtonPlay",componentId:"sc-1xaulno-0"})(["display:flex;flex-direction:row;align-items:center;margin-left:1rem;padding:0 0.5rem 0 0;"]),j=s.d.div.withConfig({displayName:"play__StyledPrefix",componentId:"sc-1xaulno-1"})(["display:inline-flex;justify-content:center;align-items:center;width:2rem;height:2rem;margin-left:-1rem;border-radius:1rem;background-color:",";color:",";"],(function(e){return e.theme.colors.secondaryBackground}),(function(e){return e.theme.colors.primaryBackground[0]})),d=s.d.div.withConfig({displayName:"play__StyledBody",componentId:"sc-1xaulno-2"})(["padding:0.5rem;"]);function m(e){var n=e.children,t=e.playing,s=Object(r.a)(e,["children","playing"]);return Object(i.jsxs)(l,Object.assign({},s,{children:[Object(i.jsx)(j,{children:Object(i.jsx)(c.a,{icon:t?a.e:a.u,spin:t,fixedWidth:!0})}),Object(i.jsx)(d,{children:n})]}))}},f019:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("nKUr"),i=(t("q1tI"),t("xQ4I")),s=t("ISyE");function c(e){var n=e.artist,t=Object(i.a)(n).image,c=Object(r.jsxs)(s.a,{children:[Object(r.jsx)("span",{children:"Artist"}),!!n.performances&&Object(r.jsxs)("span",{children:[n.performances.length," songs"]})]});return Object(r.jsx)(s.b,{title:n.name,description:c,image:t,to:"/artist/"+n.slug})}},sjxK:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return p})),t.d(n,"query",(function(){return v}));t("E9XD");var r=t("nKUr"),i=t("q1tI"),s=t("Wbzz"),c=t("L+1Y"),a=t("vOnD"),o=t("5Vy0"),l=t("RFkb"),j=t("gSOQ"),d=t("W/7f"),m=t("Qq1W"),u=t("B8aR"),b=t("sumR"),h=t("aEzc"),g=t("f019"),f=t("jNNy"),O=t("jcM5"),x=Object(a.d)(c.b).attrs({gapsColumn:"2rem"}).withConfig({displayName:"video__StyledVideoInfo",componentId:"b074nb-0"})(["padding:0 1rem;"]);function p(e){var n=e.data.video,t=n.entries[0],a=t.theme,p=a.anime,v=Object(l.a)().siteName,w=Object(O.a)(p).smallCover;Object(i.useEffect)((function(){a&&w&&(navigator.mediaSession.metadata=new MediaMetadata({title:a.slug+" • "+a.song.title,artist:a.song.performances?a.song.performances.map((function(e){return e.as||e.artist.name})).join(", "):void 0,album:p.name,artwork:[{src:w,sizes:"512x512",type:"image/jpeg"}]}))}),[p,a,w]);var y,I,C,S=a.entries.map((function(e){var t=e.videos.filter((function(e){return e.filename!==n.filename}));return t.length?Object.assign({},e,{videos:t}):null})).filter((function(e){return!!e})),k=t.version?a.song.title+" ("+p.name+" "+a.slug+" V"+t.version+")":a.song.title+" ("+p.name+" "+a.slug+")",L=(y=a.song,I="",C=t.version?" Version "+t.version:"",y.performances&&y.performances.length&&(I=y.performances.reduce((function(e,n,t,r){var i=r.length;return e+=n.as||n.artist.name,t<i-1&&(e+=t===i-2?" & ":", "),e})," by ")),"Watch "+p.name+" "+a.slug+C+": "+y.title+I+" on "+v);return Object(r.jsxs)(x,{children:[Object(r.jsx)(f.a,{title:k,description:L}),Object(r.jsxs)(c.b,{row:!0,alignItems:"center",gapsRow:"1rem",children:[Object(r.jsx)(c.a,{flex:1,children:Object(r.jsxs)(c.b,{justifyContent:"center",gapsColumn:"0.25rem",children:[Object(r.jsx)(o.a,{bold:!0,children:Object(r.jsx)(j.a,{song:a.song})}),Object(r.jsxs)(o.a,{small:!0,maxLines:1,children:[Object(r.jsxs)(o.a,{children:[a.slug," from "]}),Object(r.jsx)(s.Link,{to:"/anime/"+p.slug,children:Object(r.jsx)(o.a,{link:!0,children:p.name})})]})]})}),Object(r.jsxs)(c.b,{row:!0,alignItems:"center",gapsRow:"0.5rem",children:[Object(r.jsxs)(o.a,{small:!0,children:["Version ",t.version||1]}),Object(r.jsx)(m.a,{entry:t}),Object(r.jsx)(o.a,{link:!0,children:"•"}),Object(r.jsx)(d.a,{video:n})]})]}),Object(r.jsxs)(c.b,{row:!0,gapsRow:"2rem",children:[Object(r.jsx)(c.a,{flex:2,children:Object(r.jsxs)(c.b,{gapsColumn:"1rem",children:[Object(r.jsx)(u.a,{variant:"section",children:"Related entries"}),Object(r.jsxs)(c.b,{row:!0,gapsRow:"1rem",children:[Object(r.jsx)(c.a,{flex:1,children:Object(r.jsx)(h.a,{anime:p,hideThemes:!0})}),Object(r.jsx)(c.a,{flex:1,children:Object(r.jsx)(c.b,{gapsColumn:"1rem",children:!!a.song.performances&&a.song.performances.map((function(e){return Object(r.jsx)(g.a,{artist:e.artist},e.artist.name)}))})})]})]})}),Object(r.jsx)(c.a,{flex:1,children:!!S.length&&Object(r.jsxs)(c.b,{gapsColumn:"1rem",alignItems:"flex-end",children:[Object(r.jsx)(u.a,{variant:"section",children:"Other versions"}),S.map((function(e){return Object(r.jsxs)(i.Fragment,{children:[Object(r.jsxs)(c.b,{row:!0,alignItems:"center",gapsRow:"0.5rem",children:[Object(r.jsxs)(o.a,{small:!0,children:["Version ",e.version||1]}),Object(r.jsx)(m.a,{entry:t})]}),e.videos.map((function(e,n){return Object(r.jsx)(b.a,{video:e},n)}))]},e.version)}))]})})]})]})}var v="298751300"},sumR:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("zLVn"),i=t("nKUr"),s=t("aXge"),c=t("W/7f"),a=t("q1tI"),o=t("ptmS");function l(e){var n=e.video,t=Object(r.a)(e,["video"]),l=Object(a.useContext)(o.a).currentVideo;return Object(i.jsx)(s.a,Object.assign({to:"/video/"+n.filename,playing:l&&l.filename===n.filename},t,{children:Object(i.jsx)(c.a,{video:n})}))}}}]);
//# sourceMappingURL=component---src-templates-video-js-b091f2d19f6a31e492e5.js.map