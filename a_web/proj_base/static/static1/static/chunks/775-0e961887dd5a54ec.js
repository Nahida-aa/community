"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[775],{77210:function(e,t,n){n.r(t),n.d(t,{BaseWritingProvider:function(){return g},useAutoSaver:function(){return h},useBaseWritingAtom:function(){return x},useBaseWritingContext:function(){return S},useResetAutoSaverData:function(){return w}});var r=n(71590),a=n(63488),o=n(55322),u=n(36183),i=n(58704),s=n(96859),c=n(13830),l=n(44598),d=n(17653),y=n(191),f=n(35103);let p=(0,a.createContext)(null),g=e=>{let[t,n]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=()=>{n(!0)};return window.addEventListener(c.i.EditDataUpdate,e),()=>{window.removeEventListener(c.i.EditDataUpdate,e)}},[]),(0,l.y)(t),(0,r.jsx)(v,{children:(0,r.jsx)(p.Provider,{value:e.atom,children:e.children})})},m=(0,a.createContext)({reset(e,t){}}),v=e=>{let{children:t}=e;return(0,a.useEffect)(()=>{let e=(0,y.P2)(e=>{let t=e.data,n=t.id||("categoryId"in t?"new-post":"new-note"),r=(0,f.E)("auto-save-".concat(n));localStorage.setItem(r,JSON.stringify(t))},300);return window.addEventListener(c.i.EditDataUpdate,e),()=>{window.removeEventListener(c.i.EditDataUpdate,e)}},[]),(0,r.jsx)(m.Provider,{value:(0,a.useMemo)(()=>({reset(e,t){let n=t||("note"===e?"new-note":"new-post");t=(0,f.E)("auto-save-".concat(n)),localStorage.removeItem(t)}}),[]),children:t})},w=()=>(0,a.useContext)(m).reset,h=e=>{let[t,n]=e,{present:o}=(0,s.Vu)(),[u,c]=(0,d.N)();return(0,a.useEffect)(()=>{let e=t.id||("categoryId"in t?"new-post":"new-note"),a=(0,f.E)("auto-save-".concat(e)),s=localStorage.getItem(a);if(!s)return;let c=JSON.parse(s);c&&setTimeout(()=>{o({title:"存在为保存的数据，需要恢复吗？",content:e=>{let{dismiss:t}=e;return(0,r.jsx)("div",{className:"flex justify-end",children:(0,r.jsx)(i.Sn,{onClick:()=>{t(),n(c),u(),localStorage.removeItem(a)},children:"恢复"})})}})},100)},[null==t?void 0:t.id,u,o]),[c]},S=()=>(0,a.useContext)(p),x=e=>{let t=S();return(0,u.useAtom)((0,a.useMemo)(()=>(0,u.atom)(n=>n(t)[e],(n,r,a)=>{r(t,t=>(0,o.Uy)(t,t=>{t[e]=a}))}),[t,e]))}},993:function(e,t,n){n.r(t),n.d(t,{RootPortal:function(){return c}});var r=n(17664),a=n(13373),o=n(63488),u=n(76877);let i=()=>{let e=(0,o.useContext)(s);return u.S_?e.to||document.body:null},s=(0,o.createContext)({to:void 0});s.Provider;let c=e=>{let t=(0,a.O)(),n=i();return t?(0,r.createPortal)(e.children,e.to||n||document.body):null}},13830:function(e,t,n){var r,a;n.d(t,{i:function(){return r}}),(a=r||(r={})).EditDataUpdate="editDataUpdate",a.Publish="Publish",a.Refetch="Refetch",a.SocketConnected="SocketConnected",a.SocketDisconnected="SocketDisconnected"},44598:function(e,t,n){let r;n.d(t,{y:function(){return s}});var a=n(63488),o=n(97270);let u=!1,i=[],s=function(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,a.useId)();(0,a.useEffect)(()=>{if(!e)return;r=window.location.href,i.push(t);let n=e=>{e.currentTarget.href!==window.location.href&&(c()||e.preventDefault(),r=window.location.href)},a=[],o=()=>{a.forEach(e=>{e.removeEventListener("click",n)})},u=new MutationObserver(()=>{o(),(a=Array.from(document.querySelectorAll("a[href]"))).forEach(e=>{e.addEventListener("click",n)})});return u.observe(document.body,{childList:!0,subtree:!0}),addEventListener("beforeunload",c),()=>{removeEventListener("beforeunload",c),o(),u.disconnect(),i.splice(i.indexOf(t),1)}},[e,t])},c=e=>{if(u)return!0;let t="Discard unsaved changes?";return e?(e.returnValue=t,t):confirm(t)};s.Provider=e=>{let{children:t}=e,n=(0,o.useRouter)();return(0,a.useEffect)(()=>{r=window.location.href}),(0,a.useEffect)(()=>{let e;function t(){for(var t=arguments.length,a=Array(t),o=0;o<t;o++)a[o]=arguments[o];s.ensureSafeNavigation(()=>{e(...a),r=window.location.href},()=>{n.replace(r,{scroll:!1})})}addEventListener("popstate",t);let a=window.addEventListener;return window.addEventListener=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];"popstate"===n[0]?(e=n[1],window.addEventListener=a):a(...n)},a("popstate",e=>{e.preventDefault()}),()=>{window.addEventListener=a,removeEventListener("popstate",t)}},[]),t},s.forceRoute=async e=>{try{u=!0,await e()}finally{u=!1}},s.ensureSafeNavigation=(e,t)=>{0===i.length||c()?e():null==t||t()}},17653:function(e,t,n){n.d(t,{N:function(){return a}});var r=n(63488);let a=()=>{let[e,t]=(0,r.useState)(0);return[(0,r.useCallback)(()=>t(e=>++e),[]),e]}},13373:function(e,t,n){n.d(t,{O:function(){return a},Q:function(){return o}});var r=n(63488);let a=()=>{let[e,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{t(!0)},[]),e},o=()=>{let[e,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{(0,r.startTransition)(()=>{t(!0)})},[]),e}},10826:function(e,t,n){var r,a;function o(e,t){let n=e;switch(e){case"/notes/":n+=t.id,t.password&&(n+="?password=".concat(t.password));break;case"/posts/":n+="".concat(t.category,"/").concat(t.slug);break;case"/posts":case"/timeline":n+="?".concat(new URLSearchParams(t).toString());break;case"/notes/topics/":case"/categories/":case"/":n+=t.slug;break;case"":n="/";break;case"/projects/":n+=t.id}return n}n.d(t,{Z:function(){return r},n:function(){return o}}),(a=r||(r={})).Home="",a.Posts="/posts",a.Post="/posts/",a.Notes="/notes",a.Note="/notes/",a.NoteTopics="/notes/topics",a.NoteTopic="/notes/topics/",a.Timelime="/timeline",a.Login="/login",a.Page="/",a.Categories="/categories",a.Category="/categories/",a.Projects="/projects",a.Project="/projects/",a.Says="/says",a.Friends="/friends",a.Thinking="/thinking",a.PageDeletd="/common/deleted"},77879:function(e,t,n){n.d(t,{S8:function(){return d},so:function(){return p},yk:function(){return f},yu:function(){return g}});var r=n(31463),a=n(62741),o=n(55322),u=n(97270),i=n(96491),s=n(29494),c=n(58168),l=n(35262);let d={byState:e=>(0,l.k)({queryKey:["comment","admin",e.toString()],queryFn:async t=>{let{pageParam:n}=t;return await s.x1.proxy.comments.get({params:{page:n,size:20,state:0|e}})}})},y=()=>(0,u.useSearchParams)().get("tab")||i.N$.Unread,f=e=>{let t=(0,r.useQueryClient)(),n=y();return(0,a.useMutation)({mutationKey:["comment","updateState"],mutationFn:async e=>{let{id:t,state:n}=e;return s.x1.proxy.comments(t).patch({data:{state:n}})},onMutate:async e=>{let{id:r}=e;t.setQueryData(d.byState(n).queryKey,(0,o.Uy)(e=>{null==e||e.pages.forEach(e=>{e.data=e.data.filter(e=>e.id!==r)})}))},onSuccess:function(){for(var t,n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];null==e||null===(t=e.onSuccess)||void 0===t||t.apply(null,r),c.A.success("操作成功")},onError:()=>{c.A.error("操作失败")}})},p=e=>{let t=(0,r.useQueryClient)(),n=y();return(0,a.useMutation)({mutationKey:["comment","delete"],mutationFn:async e=>{let{id:t}=e;return s.x1.proxy.comments(t).delete()},onMutate:async e=>{let{id:r}=e;t.setQueryData(d.byState(n).queryKey,(0,o.Uy)(e=>{null==e||e.pages.forEach(e=>{e.data=e.data.filter(e=>e.id!==r)})}))},onSuccess:function(){for(var t,n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];c.A.success("删除成功"),null==e||null===(t=e.onSuccess)||void 0===t||t.apply(null,r)},onError:()=>{c.A.error("删除失败")}})},g=()=>{let e=(0,r.useQueryClient)(),t=y();return(0,a.useMutation)({mutationKey:["comment","reply"],mutationFn:async e=>{let{id:t,content:n}=e;return s.x1.proxy.comments.master.reply(t).post({data:{text:n}})},onMutate(n){let{id:r}=n;e.setQueryData(d.byState(t).queryKey,(0,o.Uy)(e=>{null==e||e.pages.forEach(e=>{e.data=e.data.filter(e=>e.id!==r)})}))},onSuccess:e=>{c.A.success("回复成功")},onError:()=>{e.invalidateQueries({queryKey:d.byState(t).queryKey}),c.A.error("回复失败")}})}},52160:function(e,t,n){n.d(t,{D:function(){return y},o:function(){return d}});var r=n(14873),a=n(29494),o=n(35262),u=n(69646),i=n(77879),s=n(17145),c=n(10826),l=n(30354);let d={aggregation:{root:()=>(0,o.k)({queryKey:["aggregation"],queryFn:async()=>a.x1.aggregate.getAggregateData("shiro").then(e=>e.$serialized),gcTime:6e5,meta:{forceHydration:!0},staleTime:u.sk?6e5:void 0})},note:s.JP,post:l.v_,page:{bySlug:e=>(0,o.k)({queryKey:["page",e],meta:{hydrationRoutePath:(0,c.n)(c.Z.Page,{slug:e})},queryFn:async e=>{let{queryKey:t}=e,[,n]=t;return(await a.x1.page.getBySlug(n)).$serialized}})},activity:{presence:e=>(0,o.k)({queryKey:["activity","presence",e],queryFn:async()=>{let t=await a.x1.activity.getPresence(e);return(0,r.$k)(t),t}})}},y={post:l.e3,note:s.oj,comment:i.S8}},17145:function(e,t,n){n.d(t,{E2:function(){return p},JP:function(){return y},oj:function(){return f},vA:function(){return g}});var r=n(62741),a=n(87313),o=n.n(a),u=n(77210),i=n(191),s=n(29494),c=n(10826),l=n(58168),d=n(35262);let y={byNid:(e,t)=>(0,d.k)({queryKey:["note",e],meta:{hydrationRoutePath:(0,c.n)(c.Z.Note,{id:e}),shouldHydration:e=>{let t=null==e?void 0:e.data;return!(null!=t&&t.publicAt&&o()(null==t?void 0:t.publicAt).isAfter(new Date))}},queryFn:async e=>{let{queryKey:n}=e,[,r]=n;return"latest"===r?(await s.x1.note.getLatest()).$serialized:{...await s.x1.note.getNoteById(+n[1],t)}}})},f={paginate:e=>(0,d.k)({queryKey:["noteAdmin","paginate",e],queryFn:async t=>{let{pageParam:n}=t;return(await s.x1.note.getList(null!=n?n:e)).$serialized}}),allTopic:()=>(0,d.k)({queryKey:["noteAdmin","allTopic"],queryFn:async()=>(await s.x1.topic.getAll()).$serialized.data}),getNote:e=>(0,d.k)({queryKey:["noteAdmin","getNote",e],queryFn:async()=>(await s.x1.note.getNoteById(e)).$serialized})},p=()=>{let e=(0,u.useResetAutoSaverData)();return(0,r.useMutation)({mutationFn:e=>{let t=(0,i.Xh)(e);for(let e of["id","nid","modified","topic"])delete t[e];return s.x1.note.proxy.post({data:t})},onSuccess:()=>{l.A.success("创建成功"),e("note")}})},g=()=>{let e=(0,u.useResetAutoSaverData)();return(0,r.useMutation)({mutationFn:e=>{let{id:t}=e,n=(0,i.Xh)(e);for(let e of["id","nid","modified","topic"])delete n[e];return s.x1.note.proxy(t).put({data:n})},onSuccess:t=>{let{id:n}=t;l.A.success("更新成功"),e("note",n)}})}},30354:function(e,t,n){n.d(t,{e3:function(){return d},fj:function(){return y},jy:function(){return f},v_:function(){return l}});var r=n(62741),a=n(77210),o=n(191),u=n(29494),i=n(10826),s=n(58168),c=n(35262);let l={bySlug:(e,t)=>(0,c.k)({queryKey:["post",e,t],meta:{hydrationRoutePath:(0,i.n)(i.Z.Post,{category:e,slug:t})},queryFn:async e=>{let{queryKey:t}=e,[,n,r]=t;return(await u.x1.post.getPost(n,r)).$serialized}})},d={paginate:e=>(0,c.k)({queryKey:["postAdmin","paginate",e],queryFn:async t=>{let{pageParam:n}=t;return(await u.x1.post.getList(null!=n?n:e)).$serialized}}),allCategories:()=>(0,c.k)({queryKey:["postAdmin","allCategories"],queryFn:async()=>(await u.x1.category.getAllCategories()).$serialized}),getPost:e=>(0,c.k)({queryKey:["postAdmin","getPost",e],queryFn:async()=>{var t;let n=await u.x1.post.getPost(e);return{...n.$serialized,relatedId:(null===(t=n.related)||void 0===t?void 0:t.map(e=>e.id))||[]}}}),getAllTags:()=>(0,c.k)({queryKey:["postAdmin","getAllTags"],queryFn:async()=>{let{data:e}=await u.x1.proxy.categories.get({params:{type:"Tag"}});return e.map(e=>({label:"".concat(e.name," (").concat(e.count,")"),value:e.name,key:e.name}))}}),getRelatedList:()=>(0,c.k)({queryKey:["postAdmin","getRelatedList"],queryFn:async e=>{let{pageParam:t}=e;return u.x1.proxy.posts.get({params:{page:t||1,size:50,select:"id title _id slug category categoryId"}})}})},y=()=>{let e=(0,a.useResetAutoSaverData)();return(0,r.useMutation)({mutationFn:e=>{let t=(0,o.Xh)(e);for(let e of["id","related","modified","category"])delete t[e];return u.x1.post.proxy.post({data:t})},onSuccess:()=>{s.A.success("创建成功"),e("post")}})},f=()=>{let e=(0,a.useResetAutoSaverData)();return(0,r.useMutation)({mutationFn:e=>{let{id:t}=e,n=(0,o.Xh)(e);for(let e of["id","related","modified","category"])delete n[e];return u.x1.post.proxy(t).put({data:n})},onSuccess:t=>{let{id:n}=t;s.A.success("更新成功"),e("post",n)}})}},35262:function(e,t,n){n.d(t,{k:function(){return r}});let r=e=>e}}]);