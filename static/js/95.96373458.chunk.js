"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[95],{3786:(e,n,r)=>{r.d(n,{Y:()=>d});var t,a=r(168),o=(r(2791),r(5867)),i=r(184);const s=o.ZP.button(t||(t=(0,a.Z)(["\n  background-color: #9bc2c2;\n  color: white;\n  font-weight: bold;\n  //width: 120px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  padding: 20px;\n"]))),d=e=>{let{title:n,type:r,disabled:t,onClickNavigate:a,onClickDownload:o}=e;return(0,i.jsx)(s,{type:r,disabled:t,onClick:a||o,children:n})}},5739:(e,n,r)=>{r.d(n,{O6:()=>h,_r:()=>c,uS:()=>l,wX:()=>p});var t,a,o,i,s=r(168),d=r(5867);const l=d.ZP.div(t||(t=(0,s.Z)(["\n  height: 100vh;\n  scroll-snap-align: center;\n"]))),c=d.ZP.div(a||(a=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),h=d.ZP.div(o||(o=(0,s.Z)(["\n  flex: 1;\n"]))),p=d.ZP.h1(i||(i=(0,s.Z)(["\n  font-size: 74px;\n"])))},95:(e,n,r)=>{r.r(n),r.d(n,{Contact:()=>M,default:()=>z});var t=r(2791),a=r(9025),o=r(184);const i=()=>(0,o.jsxs)(a.ComposableMap,{projection:"geoAzimuthalEqualArea",projectionConfig:{rotate:[-10,-52,0],center:[5,5],scale:1100},style:{width:"100%",height:"100%"},children:[(0,o.jsx)(a.Geographies,{geography:"/features.json",fill:"#9bc2c2",stroke:"#FFFFFF",strokeWidth:.5,children:e=>{let{geographies:n}=e;return n.map((e=>(0,o.jsx)(a.Geography,{geography:e},e.rsmKey)))}}),(0,o.jsx)(a.Annotation,{subject:[37.6176,55.7558],dx:-90,dy:-30,connectorProps:{stroke:"#e3d2ce",strokeWidth:2,strokeLinecap:"round"},children:(0,o.jsx)("text",{x:"-8",textAnchor:"end",alignmentBaseline:"middle",fill:"white",children:"Moscow"})})]});var s,d,l,c,h=r(8007),p=r(1830),m=r.n(p),x=r(5705),u=r(4050),g=r(3786),y=r(168),f=r(5867);const b=f.ZP.h1(s||(s=(0,y.Z)(["\n  font-weight: 200;\n"]))),Z=f.ZP.form(d||(d=(0,y.Z)(["\n  width: 500px;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n\n  @media only screen and (max-width: 768px) {\n    width: 300px;\n  }\n"]))),j=f.ZP.input(l||(l=(0,y.Z)(["\n  padding: 20px;\n  background-color: #a7aaad;\n  border: none;\n  border-radius: 5px;\n"]))),v=f.ZP.textarea(c||(c=(0,y.Z)(["\n  padding: 20px;\n  background-color: #a7aaad;\n  border: none;\n  border-radius: 5px;\n"]))),_=()=>{const[e,n]=(0,t.useState)("Send Message"),r=(0,x.TA)({initialValues:{from_name:"",to_name:"Ilya",reply_to:"",message:""},onSubmit:e=>{try{u.lW("service_lngxx9k","template_mvzunqb",e,"fja6XHP7FsoUigGZo").then((()=>{m().fire({icon:"success",title:"your message has been sent",timer:1500}),n("Send Email"),r.setSubmitting(!1),r.resetForm()}))}catch{m().fire({icon:"error",title:"Oops...",text:"Something went wrong!"}),n("Send Email"),r.setSubmitting(!1)}},validationSchema:h.Ry({from_name:h.Z_().required("* Name field is required"),reply_to:h.Z_().email("Invalid email address").required("* Email field is required"),message:h.Z_().required("* Message field is required")})});return(0,o.jsxs)(Z,{onSubmit:r.handleSubmit,children:[(0,o.jsx)(b,{children:"Contact Us"}),(0,o.jsx)(j,{placeholder:"Name",id:"from_name",name:"from_name",type:"text",onChange:r.handleChange,value:r.values.from_name}),r.touched.from_name&&r.errors.from_name&&(0,o.jsx)("div",{style:{color:"red",opacity:.8},children:r.errors.from_name}),(0,o.jsx)(j,{placeholder:"Email",id:"reply_to",name:"reply_to",type:"email",onChange:r.handleChange,value:r.values.reply_to}),r.touched.reply_to&&r.errors.reply_to&&(0,o.jsx)("div",{style:{color:"red",opacity:.8},children:r.errors.reply_to}),(0,o.jsx)(v,{placeholder:"Message",rows:10,id:"message",name:"message",onChange:r.handleChange,value:r.values.message}),r.touched.message&&r.errors.message&&(0,o.jsx)("div",{style:{color:"red",opacity:.8},children:r.errors.message}),(0,o.jsx)(g.Y,{type:"submit",disabled:r.isSubmitting,title:"".concat(e)})]})};var w,k,C,P,S=r(5739);const q=(0,f.ZP)(S.uS)(w||(w=(0,y.Z)(["\n"]))),F=(0,f.ZP)(S._r)(k||(k=(0,y.Z)(["\n  width: 100%;\n  height: 100%;\n  gap: 50px\n"]))),A=(0,f.ZP)(S.O6)(C||(C=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  \n  @media only screen and (max-width: 768px) {\n    justify-content: center;\n  }\n"]))),E=f.ZP.div(P||(P=(0,y.Z)(["\n  flex: 1;\n  //padding: 50px;\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),M=()=>(0,o.jsx)(q,{id:"contact",children:(0,o.jsxs)(F,{children:[(0,o.jsx)(A,{children:(0,o.jsx)(_,{})}),(0,o.jsx)(E,{children:(0,o.jsx)(i,{})})]})}),z=M}}]);
//# sourceMappingURL=95.96373458.chunk.js.map