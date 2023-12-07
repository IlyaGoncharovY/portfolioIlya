"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[870],{958:(e,n,t)=>{t.d(n,{D:()=>c});var r,a=t(168),i=(t(7313),t(2151)),o=t(6417);const s=i.ZP.h2(r||(r=(0,a.Z)(["\n  color: #9bc2c2;\n"]))),c=e=>{let{title:n}=e;return(0,o.jsx)(s,{children:n})}},5659:(e,n,t)=>{t.d(n,{Y:()=>c});var r,a=t(168),i=(t(7313),t(2151)),o=t(6417);const s=i.ZP.button(r||(r=(0,a.Z)(["\n  background-color: #9bc2c2;\n  color: white;\n  font-weight: bold;\n  //width: 120px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  padding: 20px;\n"]))),c=e=>{let{title:n,type:t,disabled:r,onClickNavigate:a,onClickDownload:i}=e;return(0,o.jsx)(s,{type:t,disabled:r,onClick:a||i,children:n})}},6054:(e,n,t)=>{t.d(n,{T:()=>r});const r=e=>{window.location.href=e}},4300:(e,n,t)=>{t.d(n,{O6:()=>u,_r:()=>d,uS:()=>l,wX:()=>p});var r,a,i,o,s=t(168),c=t(2151);const l=c.ZP.div(r||(r=(0,s.Z)(["\n  height: 100vh;\n  scroll-snap-align: center;\n"]))),d=c.ZP.div(a||(a=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),u=c.ZP.div(i||(i=(0,s.Z)(["\n  flex: 1;\n"]))),p=c.ZP.h1(o||(o=(0,s.Z)(["\n  font-size: 74px;\n"])))},4870:(e,n,t)=>{t.r(n),t.d(n,{default:()=>N});var r=t(7313),a=t(4871),i=t(5659),o=t(958),s=t(6054),c=t(5819),l=t(7158),d=t(238),u=t(7462),p=t(5825);function A(e,n,t){const a=(0,d.A)((e=>e.size)),i=(0,d.A)((e=>e.viewport)),o="number"===typeof e?e:a.width*i.dpr,s="number"===typeof n?n:a.height*i.dpr,c=("number"===typeof e?t:e)||{},{samples:l=0,depth:u,...A}=c,f=r.useMemo((()=>{const e=new p.WebGLRenderTarget(o,s,{minFilter:p.LinearFilter,magFilter:p.LinearFilter,type:p.HalfFloatType,...A});return u&&(e.depthTexture=new p.DepthTexture(o,s,p.FloatType)),e.samples=l,e}),[]);return r.useLayoutEffect((()=>{f.setSize(o,s),l&&(f.samples=l)}),[l,f,o,s]),r.useEffect((()=>()=>f.dispose()),[]),f}const f=r.forwardRef(((e,n)=>{let{children:t,compute:a,width:i,height:o,samples:s=8,renderPriority:c=0,eventPriority:l=0,frames:f=1/0,stencilBuffer:m=!1,depthBuffer:x=!0,generateMipmaps:g=!1,...v}=e;const{size:y,viewport:w}=(0,d.A)(),b=A((i||y.width)*w.dpr,(o||y.height)*w.dpr,{samples:s,stencilBuffer:m,depthBuffer:x,generateMipmaps:g}),[j]=r.useState((()=>new p.Scene)),Z=r.useCallback(((e,n,t)=>{var r,a;let i=null==(r=b.texture)?void 0:r.__r3f.parent;for(;i&&!(i instanceof p.Object3D);)i=i.__r3f.parent;if(!i)return!1;t.raycaster.camera||t.events.compute(e,t,null==(a=t.previousRoot)?void 0:a.getState());const[o]=t.raycaster.intersectObject(i);if(!o)return!1;const s=o.uv;if(!s)return!1;n.raycaster.setFromCamera(n.pointer.set(2*s.x-1,2*s.y-1),n.camera)}),[]);return r.useImperativeHandle(n,(()=>b.texture),[b]),r.createElement(r.Fragment,null,(0,d.g)(r.createElement(h,{renderPriority:c,frames:f,fbo:b},t,r.createElement("group",{onPointerOver:()=>null})),j,{events:{compute:a||Z,priority:l}}),r.createElement("primitive",(0,u.Z)({object:b.texture},v)))}));function h(e){let n,{frames:t,renderPriority:a,children:i,fbo:o}=e,s=0;return(0,d.C)((e=>{(t===1/0||s<t)&&(n=e.gl.autoClear,e.gl.autoClear=!0,e.gl.setRenderTarget(o),e.gl.render(e.scene,e.camera),e.gl.setRenderTarget(null),e.gl.autoClear=n,s++)}),a),r.createElement(r.Fragment,null,i)}const m=function(e){return function(n){e.forEach((function(e){"function"===typeof e?e(n):null!=e&&(e.current=n)}))}},x=r.forwardRef(((e,n)=>{let{envMap:t,resolution:a=256,frames:i=1/0,makeDefault:o,children:s,...c}=e;const l=(0,d.A)((e=>{let{set:n}=e;return n})),p=(0,d.A)((e=>{let{camera:n}=e;return n})),f=(0,d.A)((e=>{let{size:n}=e;return n})),h=r.useRef(null),x=r.useRef(null),g=A(a);r.useLayoutEffect((()=>{c.manual||(h.current.aspect=f.width/f.height)}),[f,c]),r.useLayoutEffect((()=>{h.current.updateProjectionMatrix()}));let v=0,y=null;const w="function"===typeof s;return(0,d.C)((e=>{w&&(i===1/0||v<i)&&(x.current.visible=!1,e.gl.setRenderTarget(g),y=e.scene.background,t&&(e.scene.background=t),e.gl.render(e.scene,h.current),e.scene.background=y,e.gl.setRenderTarget(null),x.current.visible=!0,v++)})),r.useLayoutEffect((()=>{if(o){const e=p;return l((()=>({camera:h.current}))),()=>l((()=>({camera:e})))}}),[h,o,l]),r.createElement(r.Fragment,null,r.createElement("perspectiveCamera",(0,u.Z)({ref:m([h,n])},c),!w&&s),r.createElement("group",{ref:x},w&&s(g.texture)))}));var g=t(1120);const v=r.forwardRef(((e,n)=>{let{sdfGlyphSize:a=64,anchorX:i="center",anchorY:o="middle",font:s,fontSize:c=1,children:l,characters:p,onSync:A,...f}=e;const{Text:h,preloadFont:m}=(0,g.Rq)((async()=>t.e(109).then(t.bind(t,109))),[]),x=(0,d.A)((e=>{let{invalidate:n}=e;return n})),[v]=r.useState((()=>new h)),[y,w]=r.useMemo((()=>{const e=[];let n="";return r.Children.forEach(l,(t=>{"string"===typeof t||"number"===typeof t?n+=t:e.push(t)})),[e,n]}),[l]);return(0,g.Rq)((()=>new Promise((e=>m({font:s,characters:p},e)))),["troika-text",s,p]),r.useLayoutEffect((()=>{v.sync((()=>{x(),A&&A(v)}))})),r.useEffect((()=>()=>v.dispose()),[v]),r.createElement("primitive",(0,u.Z)({object:v,ref:n,font:s,text:w,anchorX:i,anchorY:o,fontSize:c,sdfGlyphSize:a},f),y)}));var y=t(6417);const w=()=>{const e=(0,r.useRef)(null);return(0,d.C)((n=>{e.current&&(e.current.position.x=1.1*Math.sin(n.clock.elapsedTime))})),(0,y.jsxs)("mesh",{children:[(0,y.jsx)("boxGeometry",{}),(0,y.jsx)("meshStandardMaterial",{children:(0,y.jsxs)(f,{attach:"map",children:[(0,y.jsx)(x,{makeDefault:!0,position:[0,0,5]}),(0,y.jsx)("color",{attach:"background",args:["#7aec66"]}),(0,y.jsx)(v,{fontSize:2.5,color:"#ce5427",position:[0,0,1],ref:e,children:"hello"})]})})]})},b=()=>(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(c.Xz,{camera:{fov:25,position:[5,5,5]},children:[(0,y.jsx)(l.z,{enableZoom:!1,autoRotate:!0}),(0,y.jsx)("ambientLight",{intensity:1}),(0,y.jsx)("directionalLight",{position:[3,2,1]}),(0,y.jsx)(w,{})]})});var j,Z,E,P,F,S,R,C,k=t(168),T=t(2151),X=t(4300);const z=(0,T.ZP)(X.uS)(j||(j=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),I=(0,T.ZP)(X._r)(Z||(Z=(0,k.Z)(["\n  height: 100vh;\n  scroll-snap-align: center;\n  width: 1400px;\n"]))),M=(0,T.ZP)(X.O6)(E||(E=(0,k.Z)(["\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),B=(0,T.ZP)(X.wX)(P||(P=(0,k.Z)(["\n  @media only screen and (max-width: 768px) {\n    font-size: 60px;\n  }\n"]))),D=T.ZP.div(F||(F=(0,k.Z)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n\n  @media only screen and (max-width: 768px) {\n    align-items: center;\n    text-align: center;\n  }\n"]))),Q=T.ZP.div(S||(S=(0,k.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"]))),L=T.ZP.img(R||(R=(0,k.Z)(["\n  height: 5px;\n"]))),O=T.ZP.p(C||(C=(0,k.Z)(["\n  font-size: 24px;\n  color: #737d81;\n  @media only screen and (max-width: 768px) {\n    font-size: 24px;\n    color: #737d81;\n    padding: 5px;\n  }\n"]))),N=()=>(0,y.jsx)(z,{id:"about",children:(0,y.jsxs)(I,{children:[(0,y.jsx)(M,{children:(0,y.jsx)(b,{})}),(0,y.jsxs)(D,{children:[(0,y.jsx)(B,{children:"About Me"}),(0,y.jsxs)(Q,{children:[(0,y.jsx)(L,{src:"".concat(a)}),(0,y.jsx)(o.D,{title:"My name is Ilya."})]}),(0,y.jsx)(O,{children:"I am well versed in the language, every day I develop my own projects or study new language features."}),(0,y.jsx)(i.Y,{title:"Sea are works",onClickNavigate:()=>(0,s.T)("https://github.com/IlyaGoncharovY")})]})]})})},4871:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAACDBAMAAACHPmKGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUxpcZUI/2kE/48F/64P/5oQ/poG/58P/5EA/44B/pQD/XcP/4sO7Ltm95wt8dR8/ztAafAAAAAIdFJOUwATn36r/FPcc0SqEgAAA+9JREFUeNrt3E9P02AAx/EuJpy3YLjbRS5ecFNIDBcQxXjFhkBCopDMizf+LBJfQJ+dJT7P5OhC14M3Yww3b0SuHjz4FnwL2vbpRsFAeJ62OMz344Yzrt14fn2ep0/bp44DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXCO1UtdeqWnV2iiYmJho2djY2JhuTjc3ms3oZ3nqMdd169HrVq2at+gbrvtwYbRtbbUXF9uXsx3zBjIvr0Z7YT4KJUceY43DPS9U5ZPpX5pvJFm23++eWaGUSgjhi1PvVVdM6KdIvo16r1ToteenratJ5d5uvxsGMlql1L+YEvKcx1X+mtnPFcNP1mEK/7xlkven79OLKv3NdamJ9L/tCl7zky+QPPUjeinih5LJ1iBFEKruct02kfXt1eTjzmxmI0Vc+M9zFpGXfav5lxHJn2EkIvM5QuqNpbc8aZfI+HZfb1vRejph2PH9wIetMIi2bF0Hu8t3rRqsGd17xDkrCjS/qN1KG8Xw63ObCrI76Jh0rROSMs2RRrz7MezfercsAplJakeaglDIu8eVKcnuknkvMvZEN1jpaqJdBSmIxX7PcNDC6DI8MG+zxldU3JvT2BTYhZwEsjdnHMjLpJpJOo6CpQ3NpnEgD0Z9BHJ9xYEsm7ZZY0+H/QdKSKRnOhQZe00g5XUn0X7WjmEgN/WeAYVXUiBqySoQlBbIs6r5ThaBjFCvTiAl1xDTQF4Nx/ocNylqrH5SQ6T5WH1W6FN3gS/2j1GAo0wgQkjjQIaHd8XaTxTgh8zUEF++swgkXXrtNwrwPcgcP/GFcSCBnx7H6nz8hQKsZmpI9PxguNs7OzwXIvaR3/FR5sB5fCWGaSD32e0t+jDv6XHIpmM9DiGXMgaGOw4Dw5EKZM7m/BRFV9pIfW/K4uAigZQXyFvTE1Q3Vmiyygxkyfiik10CKTOQx8bXLT6izSqxT9+fMr7IQV8nRyTF1w5p04VEvfpK9qAxrVf+epE9l2F+FVDSiWQC4ZxI7tMhMhOI+XVyTuV2/9RpFRIpIBCZTgqyaLEcZ91LZyOIwZkR5DyYNZyjZdFiRW3Wne5gfohSnYACzSdM5ofoa98PrCbsOONfVtNGS/lhSJHm0gkDX6XzQ3qbdlPaKuufvH6SCEPEYoYfSf0IvXd2FSROpL2iumEYJj+QU1/FRanU50n7+wa0Ggvtbc/rE0gRgXQ9z+u1Xft56sldNFrNhtt+8+0QBXDdev7ba8ShRC66m4dbdxvx/TwQi8ujXv+7nKZbrRe5w7BXrdSiZzVV+w9VNMep/cNiBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwLn+ABXLlptIfUlPAAAAAElFTkSuQmCC"}}]);