(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3212],{48598:function(e,t,n){Promise.resolve().then(n.bind(n,79516))},79516:function(e,t,n){"use strict";n.r(t);var r=n(71590),u=n(63488),o=n(23964),i=n(85876),l=n(58704),c=n(85716);t.default=e=>{let{error:t,reset:n}=e;return((0,u.useEffect)(()=>{console.error("error",t)},[t]),(0,c.N)(t)&&404===(0,c.r)(t))?(0,r.jsx)("div",{className:"flex min-h-[calc(100vh-10rem)] flex-col center",children:(0,r.jsx)(o.i,{})}):(0,r.jsx)(i.J,{children:(0,r.jsxs)("div",{className:"flex min-h-[calc(100vh-10rem)] flex-col center",children:[(0,r.jsxs)("h2",{className:"mb-5",children:[(0,r.jsx)("p",{children:"服务端渲染页面时出现了错误，可能是 Next.js 服务访问 API 超时。请刷新重试。"}),(0,r.jsxs)("p",{children:["多次出现错误请联系开发者 ",(0,r.jsx)("a",{href:"mailto:i@innei.in",children:"Innei"}),"，谢谢！"]})]}),(0,r.jsx)(l.Sn,{variant:"primary",onClick:()=>location.reload(),children:"刷新"})]})})}},14873:function(e,t,n){"use strict";n.d(t,{$k:function(){return m},MD:function(){return l},Px:function(){return c},bv:function(){return f},ju:function(){return a},ts:function(){return s},up:function(){return i}});var r=n(55322),u=n(36183),o=n(86990);let i=(0,u.atom)({process:null,media:null}),l=e=>o.e.set(i,t=>({...t,process:e})),c=e=>o.e.set(i,t=>({...t,media:e})),s=(0,u.atom)({}),a=e=>{o.e.set(s,t=>({...t,[e.identity]:e}))},f=e=>{o.e.set(s,t=>(0,r.Uy)(t,t=>{delete t[e]}))},m=e=>o.e.set(s,e||{})},62719:function(e,t,n){"use strict";n.d(t,{Wt:function(){return x},aO:function(){return H},XP:function(){return l},Gq:function(){return s},pq:function(){return c},j8:function(){return a},DH:function(){return f.DH},dD:function(){return _},Y:function(){return f.Y},jN:function(){return N},Qb:function(){return w},Yu:function(){return j},Sj:function(){return M}});var r=n(63488),u=n(36183),o=n(35588),i=n(14873);let l=()=>(0,u.useAtomValue)(i.up),c=e=>(0,u.useAtomValue)((0,r.useMemo)(()=>(0,o.selectAtom)(i.ts,t=>t[e]),[e])),s=e=>(0,u.useAtomValue)((0,r.useMemo)(()=>(0,o.selectAtom)(i.ts,t=>Object.values(t).filter(t=>t.roomName===e).map(e=>e.identity)),[e])),a=e=>(0,u.useAtomValue)((0,r.useMemo)(()=>(0,o.selectAtom)(i.ts,t=>Object.values(t).filter(t=>t.roomName===e).length),[e]));var f=n(33534),m=n(85997),d=n(55874),h=n(76877),v=n(35103),p=n(54592);let A=(0,m.kP)("1234567890abcdefghijklmnopqrstuvwxyz")(8),g=(0,v.E)("web-session"),x=()=>h.S_?localStorage.getItem(g)||(localStorage.setItem(g,A),A):"",j=()=>{let e=(0,d.aF)(),t=(0,f.Y)(),n=(0,f.DH)();return(0,r.useMemo)(()=>{let r=x();return n?t?"owner-".concat(t.id):r:e&&e.isSignedIn?e.user.id.toLowerCase():r},[t,n,e])},w=()=>(0,u.useAtomValue)(p.Kf);var V=n(33157),b=n(13205),y=n(86836);let k=()=>{let e=(0,b.useAggregationSelector)(e=>e.url);return{adminUrl:(0,u.useAtomValue)(y._k),...e}},N=()=>{let{adminUrl:e}=k();return(0,r.useCallback)(t=>{if(!e)return"";let n=new URL(e.replace(/\/$/,"")),r=(0,V.LP)();return r&&n.searchParams.set("token",r),"".concat(n.protocol,"//").concat(n.host).concat(n.pathname).concat(t||"").concat(n.search)},[e])};var S=n(86990),E=n(8057);let M=e=>(0,u.useAtomValue)((0,o.selectAtom)(E.q,(0,r.useCallback)(t=>e(t),[]))),_=()=>M((0,r.useCallback)(e=>D(e),[])),D=e=>(e.sm||e.md||!e.sm)&&!e.lg,H=()=>S.e.get(E.q)},85876:function(e,t,n){"use strict";n.d(t,{J:function(){return i}});var r=n(71590),u=n(29318),o=n(62784);let i=e=>{let{children:t,className:n}=e;return(0,r.jsxs)("div",{className:(0,u.Y2)("mx-auto mt-14 max-w-3xl px-2 lg:mt-[80px] lg:px-0 2xl:max-w-4xl","[&_header.prose]:mb-[80px]",n),children:[t,(0,r.jsx)(o.HeaderHideBg,{})]})}},62784:function(e,t,n){"use strict";n.r(t),n.d(t,{HeaderHideBg:function(){return i},useHideHeaderBgInRoute:function(){return o},useSetHeaderMetaInfo:function(){return u.n2}});var r=n(63488),u=n(34601);let o=()=>{let e=(0,u.dK)();(0,r.useEffect)(()=>(e(!1),()=>{e(!0)}),[])},i=()=>(o(),null)},34601:function(e,t,n){"use strict";n.d(t,{BA:function(){return p},Ij:function(){return j},bV:function(){return h},dK:function(){return d},iK:function(){return V},n2:function(){return x},xl:function(){return g}});var r=n(63488),u=n(36183),o=n(62719),i=n(86990),l=n(98731);let c=(0,u.atom)(""),s=(0,u.atom)(""),a=(0,u.atom)(""),f=(0,u.atom)(!0),m=()=>(0,u.useAtomValue)(f),d=()=>(0,u.useSetAtom)(f),h=()=>1-p(),v=()=>h()>0,p=()=>{let e=(0,o.dD)(),t=m()||e;return(0,l.nZ)(e=>t?e>=50?1:Math.floor(e/50*100)/100:0,[t])},A=(0,u.atom)(e=>{let t=e(c),n=e(s);return""!==t&&""!==n}),g=()=>{let e=v();return(0,u.useAtomValue)(A)&&!e},x=()=>((0,r.useEffect)(()=>()=>{i.e.set(c,""),i.e.set(s,""),i.e.set(a,"")},[]),e=>{let{title:t,description:n,slug:r}=e;i.e.set(c,t),i.e.set(s,n),r&&i.e.set(a,r)}),j=()=>({title:(0,u.useAtomValue)(c),description:(0,u.useAtomValue)(s),slug:(0,u.useAtomValue)(a)}),w=(0,u.atom)(e=>{let t=e(c),n=e(s);return""!==t&&""!==n}),V=()=>(0,u.useAtomValue)(w)},85716:function(e,t,n){"use strict";n.d(t,{N:function(){return r},r:function(){return u}});let r=e=>e.message.startsWith("Request failed with status code"),u=e=>parseInt(e.message.split(" ").pop()||"")},191:function(e,t,n){"use strict";n.d(t,{Ds:function(){return u},P2:function(){return o},TS:function(){return a},TV:function(){return s},U2:function(){return m},UP:function(){return c},Xh:function(){return l},jj:function(){return d},mN:function(){return f},o8:function(){return i}});var r=void 0;let u=function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){for(var u=arguments.length,o=Array(u),i=0;i<u;i++)o[i]=arguments[i];let l=this,c=r&&void 0===n;void 0!==n&&clearTimeout(n),n=setTimeout(()=>{n=void 0,r||e.apply(l,o)},t),c&&e.apply(l,o)}},o=function(e,t){let n,u,o,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=()=>{n=void 0,void 0!==u&&(e.apply(r,u),u=void 0,o=Date.now(),n=setTimeout(l,t))};return function(){for(var r=arguments.length,c=Array(r),s=0;s<r;s++)c[s]=arguments[s];let a=Date.now();void 0===o&&!1===i.leading&&(o=a);let f=t-(a-(null!=o?o:0));f<=0||f>t?(void 0!==n&&clearTimeout(n),e.apply(this,c),o=a,n=setTimeout(l,t)):!1!==i.trailing&&(u=c,void 0===n&&(n=setTimeout(l,f)))}},i=e=>void 0===e,l=e=>{if(Array.isArray(e))return e.map(l);if("object"!=typeof e||null===e)return e;{let t={};for(let n in e)t[n]=l(e[n]);return t}},c=e=>e[Math.floor(Math.random()*e.length)],s=e=>{let t=[...e];for(let e=0;e<t.length;e++){let n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}return t},a=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r={};for(let e of t)for(let t in e)r[t]=e[t];return r};function f(e,t){let n=new Set;return e.filter(e=>{let r=t(e);return!n.has(r)&&(n.add(r),!0)})}function m(e,t){let n=t.split("."),r=e;for(let e of n)if(void 0===(r=r[e]))break;return r}let d=e=>Array.from(new Set(e))},35103:function(e,t,n){"use strict";n.d(t,{E:function(){return r}});let r=e=>"@".concat("shiro","/").concat(e)},98731:function(e,t,n){"use strict";n.d(t,{D3:function(){return v},ic:function(){return w},pp:function(){return g},zY:function(){return j},Vt:function(){return A},nZ:function(){return x}});var r=n(71590),u=n(63488),o=n(8585),i=n(36183),l=n(86990);let c=(0,i.atom)(!1),s=e=>l.e.set(c,e);var a=n(35588);let f=e=>{let t=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(0,i.useAtomValue)((0,a.selectAtom)(e,(0,u.useCallback)(e=>t(e),n)))};return t.__atom=e,t};var m=n(191);let d=(0,i.atom)(0),h=(0,i.atom)(null),v=e=>{let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p,{}),t]})},p=()=>{let e=(0,i.useSetAtom)(d),t=(0,i.useSetAtom)(h),n=(0,u.useRef)(0),r=(0,u.useRef)(!1);return(0,o.L)(()=>{let o=(0,m.P2)(()=>{r.current||(s(!0),r.current=!0);let o=document.documentElement.scrollTop;t(n.current-o>0?"up":"down"),n.current=o,(0,u.startTransition)(()=>{e(n.current)})},16,{leading:!1});return window.addEventListener("scroll",o),o(),()=>{window.removeEventListener("scroll",o)}},[]),null},A=()=>(0,i.useAtomValue)(d),g=()=>(0,i.useAtomValue)(h),x=f(d),j=f(h),w=e=>(0,i.useAtomValue)((0,u.useMemo)(()=>(0,i.atom)(t=>{let n=t(d),r=t(h);return n>e&&"up"===r}),[e]))},8585:function(e,t,n){"use strict";n.d(t,{L:function(){return u}});var r=n(63488);let u="undefined"!=typeof window?r.useLayoutEffect:r.useEffect}},function(e){e.O(0,[3595,9805,3623,5874,5322,5268,7849,759,9013,1744],function(){return e(e.s=48598)}),_N_E=e.O()}]);