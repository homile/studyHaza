"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[627],{3462:function(n,e,t){t.d(e,{Z:function(){return U}});var i,r=t(168),a=t(6031),s=t(6871),o=t(4165),d=t(5861),l=t(885),c=t(2791),u=t(9434),p=t(1501),x=t(6724),f=t(4897),h=t(3745),m=t(144),j=new Uint8Array(16);function g(){if(!i&&!(i="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(j)}var v=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var Z=function(n){return"string"===typeof n&&v.test(n)},b=[],y=0;y<256;++y)b.push((y+256).toString(16).substr(1));var k=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(b[n[e+0]]+b[n[e+1]]+b[n[e+2]]+b[n[e+3]]+"-"+b[n[e+4]]+b[n[e+5]]+"-"+b[n[e+6]]+b[n[e+7]]+"-"+b[n[e+8]]+b[n[e+9]]+"-"+b[n[e+10]]+b[n[e+11]]+b[n[e+12]]+b[n[e+13]]+b[n[e+14]]+b[n[e+15]]).toLowerCase();if(!Z(t))throw TypeError("Stringified UUID is invalid");return t};var w,C=function(n,e,t){var i=(n=n||{}).random||(n.rng||g)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e){t=t||0;for(var r=0;r<16;++r)e[t+r]=i[r];return e}return k(i)},P=t(184);var S,F,D,N,I,O=function(n){var e=n.setIsWrite,t=(0,s.s0)(),i=(0,c.useRef)(null),r=(0,c.useState)(""),a=(0,l.Z)(r,2),j=a[0],g=a[1],v=(0,c.useState)(""),Z=(0,l.Z)(v,2),b=Z[0],y=Z[1],k=new Date,w=(0,u.v9)((function(n){return n.loginReducer.nickName})),S=(0,c.useState)(!1),F=(0,l.Z)(S,2),D=F[0],N=F[1],I=(0,c.useState)(!1),O=(0,l.Z)(I,2),z=O[0],E=O[1];(0,c.useEffect)((function(){var n=i.current;null===n||void 0===n||n.focus()}),[]);var R=(0,x.hJ)(p.db,"posts"),B=function(){var n=(0,d.Z)((0,o.Z)().mark((function n(){var e;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=C(),n.next=3,(0,x.ET)(R,{board:"community",content:b,dateCreated:k.toLocaleDateString(),id:e,nickName:w,title:j});case 3:t("/community/detail/".concat(e));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(f.F,{children:[(0,P.jsx)("label",{htmlFor:"title",children:"\uc81c\ubaa9"}),(0,P.jsx)("div",{children:(0,P.jsx)("input",{defaultValue:j,onChange:function(n){return g(n.target.value)},id:"community_title",placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",ref:i})}),(0,P.jsx)("hr",{})]}),(0,P.jsxs)(f.F,{height:"350px",children:[(0,P.jsx)("label",{htmlFor:"content",children:"\ub0b4\uc6a9"}),(0,P.jsx)("div",{children:(0,P.jsx)("textarea",{defaultValue:b,onChange:function(n){y(n.target.value)},id:"community_content",placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})})]}),(0,P.jsxs)(V,{children:[(0,P.jsx)(h.DF,{onClick:function(){E(!z)},background:"#B6B6B6",children:"\ucde8\uc18c"}),z&&(0,P.jsx)(m.Z,{isOpen:z,handleModal:function(){g(""),y(""),e(!1)},setIsOpen:E,children:"\ub4f1\ub85d\uc744 \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),(0,P.jsx)(h.DF,{onClick:function(){N(!D)},children:"\uc791\uc131\uc644\ub8cc"}),D&&(0,P.jsx)(m.Z,{isOpen:D,handleModal:B,setIsOpen:N,children:"\ucee4\ubba4\ub2c8\ud2f0 \uae00\uc744 \ub4f1\ub85d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"})]})]})},V=a.ZP.div(w||(w=(0,r.Z)(["\n  display: flex;\n  justify-content: flex-end;\n"]))),z=t(4423),E=t(2403),R=t(7234),B=t(1353),M=function(n){var e=n.setIsWrite,t=n.isEdit,i=(0,s.s0)(),r=(0,c.useRef)(null),a=(0,c.useState)(""),j=(0,l.Z)(a,2),g=j[0],v=j[1],Z=(0,c.useState)(new Date),b=(0,l.Z)(Z,2),y=b[0],k=b[1],w=(0,c.useState)("frontend"),S=(0,l.Z)(w,2),F=S[0],D=S[1],N=(0,c.useState)([]),I=(0,l.Z)(N,2),O=I[0],V=I[1],M=(0,c.useState)(0),U=(0,l.Z)(M,2),L=U[0],H=U[1],_=(0,c.useState)("on"),J=(0,l.Z)(_,2),Y=J[0],A=J[1],$=(0,c.useState)(""),q=(0,l.Z)($,2),G=q[0],K=q[1],Q=new Date,X=(0,u.v9)((function(n){return n.loginReducer.nickName})),nn=(0,c.useState)(!1),en=(0,l.Z)(nn,2),tn=en[0],rn=en[1],an=(0,c.useState)(!1),sn=(0,l.Z)(an,2),on=sn[0],dn=sn[1];(0,c.useEffect)((function(){var n=r.current;null===n||void 0===n||n.focus()}),[]);var ln=(0,x.hJ)(p.db,"posts"),cn=function(){var n=(0,d.Z)((0,o.Z)().mark((function n(){var e;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=C(),n.next=3,(0,x.ET)(ln,{board:"study",content:G,dateCreated:Q.toLocaleDateString(),devStack:O,devType:F,haveHeadCount:0,id:e,nickName:X,onOff:Y,startDate:y.toLocaleDateString(),title:g,totalHeadCount:L});case 3:i("/studyjoin/detail/".concat(e));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(f.F,{children:[(0,P.jsx)("label",{htmlFor:"title",children:"\uc81c\ubaa9"}),(0,P.jsx)("div",{children:(0,P.jsx)("input",{defaultValue:g,onChange:function(n){v(n.target.value)},id:"title",placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",ref:r})})]}),(0,P.jsxs)(T,{children:[(0,P.jsxs)(f.F,{width:"95%",padding:"0 3.3rem",children:[(0,P.jsx)("label",{htmlFor:"title",children:"\uc2dc\uc791\uc77c\uc790"}),(0,P.jsx)(E.F,{startDate:y,setStartDate:k})]}),(0,P.jsxs)(f.F,{children:[(0,P.jsx)("label",{htmlFor:"title",children:"\ubaa8\uc9d1\uad6c\ubd84"}),(0,P.jsx)("div",{children:(0,P.jsx)(z.j,{defaultValue:F,options:B.mY,devTypeOptions:B.mY,setDevType:D,setDevStack:V})})]})]}),(0,P.jsxs)(T,{children:[(0,P.jsxs)(f.F,{width:"95%",children:[(0,P.jsx)("label",{htmlFor:"title",children:"\ubaa8\uc9d1\uc778\uc6d0"}),(0,P.jsxs)("div",{children:[(0,P.jsx)("input",{type:"number",defaultValue:L,onChange:function(n){H(parseInt(n.target.value))},id:"title",placeholder:"ex) 10"}),(0,P.jsx)("span",{children:"\uba85"})]})]}),(0,P.jsxs)(f.F,{children:[(0,P.jsx)("label",{htmlFor:"title",children:"\uc9c4\ud589\ubc29\uc2dd"}),(0,P.jsx)("div",{children:(0,P.jsx)(z.j,{defaultValue:Y,options:B.ji,setOnOff:A})})]})]}),(0,P.jsx)(R.Z,{setDevStack:V,devType:F,devStack:O}),(0,P.jsxs)(f.F,{height:"400px",children:[(0,P.jsx)("label",{htmlFor:"content",children:"\ubaa8\uc9d1 \uc0c1\uc138"}),(0,P.jsx)("div",{children:(0,P.jsx)("textarea",{defaultValue:G,onChange:function(n){K(n.target.value)},id:"content",placeholder:"\ubaa8\uc9d1 \uc0c1\uc138 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})})]}),!t&&(0,P.jsxs)(W,{children:[(0,P.jsx)(h.DF,{onClick:function(){dn(!on)},background:"#B6B6B6",children:"\ucde8\uc18c"}),(0,P.jsx)(h.DF,{onClick:function(){rn(!tn)},children:"\uc791\uc131\uc644\ub8cc"})]}),on&&(0,P.jsx)(m.Z,{isOpen:on,handleModal:function(){v(""),k(new Date),D("frontend"),V([]),H(0),A("on"),K(""),e(!1)},setIsOpen:dn,children:"\ub4f1\ub85d\uc744 \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"}),tn&&(0,P.jsx)(m.Z,{isOpen:tn,handleModal:cn,setIsOpen:rn,children:"\uc2a4\ud130\ub514 \ubaa8\uc9d1 \uae00\uc744 \ub4f1\ub85d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"})]})},T=a.ZP.div(S||(S=(0,r.Z)(["\n  display: flex;\n  margin-top: 1rem;\n  justify-content: space-between;\n"]))),W=a.ZP.div(F||(F=(0,r.Z)(["\n  display: flex;\n  justify-content: flex-end;\n"]))),U=function(n){var e=n.setIsWrite,t=(0,s.TH)().pathname;return(0,P.jsxs)(L,{children:[(0,P.jsx)(_,{children:"/community"===t?"\ucee4\ubba4\ub2c8\ud2f0 \uae00\uc4f0\uae30":"\uc2a4\ud130\ub514 \ub9cc\ub4e4\uae30"}),(0,P.jsx)(H,{community:"/community"===t,children:"/community"===t?(0,P.jsx)(O,{setIsWrite:e}):(0,P.jsx)(M,{setIsWrite:e})})]})},L=a.ZP.div(D||(D=(0,r.Z)(["\n  width: 1000px;\n  margin: 0 auto;\n  background-color: #fff;\n"]))),H=a.ZP.div(N||(N=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: ",";\n  border: 1px solid #e3e3e3;\n  border-radius: 0 0 30px 30px;\n  margin-bottom: 6rem;\n  padding: 49px 55px 0px 55px;\n"])),(function(n){return n.community?"700px":"1230px"})),_=a.ZP.div(I||(I=(0,r.Z)(["\n  display: flex;\n  align-items: flex-end;\n  width: 100%;\n  height: 134px;\n  background-color: #2584f4;\n  border-radius: 30px 30px 0 0;\n  color: white;\n  font-family: 'Pretendard-Bold';\n  font-size: 35px;\n  padding-left: 55px;\n  padding-bottom: 29px;\n"])))},1627:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var i,r,a,s,o,d,l,c,u,p,x,f,h,m,j=t(168),g=t(885),v=t(2791),Z=t(3462),b=t(6031),y=t(184),k=function(n){var e=n.value,t=n.onChange;return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(w,{children:[(0,y.jsx)(C,{children:(0,y.jsx)("i",{className:"fa-solid fa-magnifying-glass fa-fw",value:e,onChange:t})}),(0,y.jsx)("input",{type:"search",id:"search",value:e,contentEditable:!0,onChange:t,autoComplete:"off"})]})})},w=b.ZP.div(i||(i=(0,j.Z)(['\n  position: relative;\n  height: 58px;\n\n  input {\n    width: 400px;\n    height: 58px;\n    background: white;\n    border: 2px solid #dbdbdb;\n    font-size: 1.3rem;\n    float: right;\n    padding-left: 30px;\n    padding-right: 50px;\n    border-radius: 50px;\n\n    &:focus,\n    &:active {\n      border-color: #2584f4;\n    }\n\n    // input type="search" \uc6b0\uce21 x \uc544\uc774\ucf58 \uc0ad\uc81c\n    &::-webkit-search-decoration,\n    &::-webkit-search-cancel-button,\n    &::-webkit-search-results-button,\n    &::-webkit-search-results-decoration {\n      -webkit-appearance: none;\n    }\n  }\n']))),C=b.ZP.span(r||(r=(0,j.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 16px;\n  z-index: 1;\n  font-size: 23px;\n  cursor: pointer;\n  transform: translate(0, -50%);\n"]))),P=t(3745),S=function(n){var e=n.onWriteClick,t=n.posts;return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(F,{children:[(0,y.jsxs)(D,{children:[t.length,"\uac1c\uc758 \uae00"]}),(0,y.jsx)(P.DF,{onClick:e,children:"\uae00\uc4f0\uae30"})]})})},F=b.ZP.div(a||(a=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  border-bottom: 1px solid #000;\n  padding-bottom: 15px;\n"]))),D=b.ZP.span(s||(s=(0,j.Z)(["\n  font-size: 17px;\n  font-family: 'Pretendard-Medium';\n"]))),N=t(4873),I=t(3504),O=t(3458),V=t(1646),z=function(n){var e=n.data;return(0,y.jsx)(R,{to:"/community/detail/".concat(e.id),children:(0,y.jsxs)(E,{children:[(0,y.jsx)("h4",{children:e.title}),(0,y.jsxs)("div",{className:"meta-info",children:[(0,y.jsxs)("span",{className:"user",children:[(0,y.jsx)(O.HL,{src:V})," ",e.nickName]}),(0,y.jsxs)("span",{className:"meta",children:[(0,y.jsx)("em",{children:e.dateCreated}),(0,y.jsxs)("em",{className:"like",children:[(0,y.jsx)("i",{className:"fa-solid fa-heart"}),"202"]})]})]})]})})},E=b.ZP.div(o||(o=(0,j.Z)(["\n  width: 100%;\n  border: 1px solid #ededed;\n  border-radius: 25px;\n  padding: 25px 30px 20px;\n  cursor: pointer;\n  margin-bottom: 12px;\n\n  &:hover {\n    border-color: #999;\n    box-shadow: 0 8px 10px 10px rgba(0, 0, 0, 0.01);\n  }\n\n  h4 {\n    font-size: 21px;\n    font-family: 'Pretendard-Medium';\n  }\n\n  .meta-info {\n    display: flex;\n    justify-content: space-between;\n    font-size: 15px;\n    padding-top: 13px;\n\n    span {\n      display: flex;\n      align-items: center;\n      gap: 4px;\n    }\n    .meta {\n      gap: 15px;\n\n      .like {\n        i {\n          margin-right: 2px;\n          opacity: 0.2;\n        }\n      }\n    }\n  }\n"]))),R=(0,b.ZP)(I.rU)(d||(d=(0,j.Z)(["\n  text-decoration: none;\n  color: black;\n"]))),B=function(n){var e=n.posts;return(0,y.jsx)(y.Fragment,{children:void 0!==e[0]?(0,y.jsx)(M,{children:e.map((function(n,e){return(0,y.jsx)(z,{data:n},e)}))}):(0,y.jsx)(N.Z,{})})},M=b.ZP.div(l||(l=(0,j.Z)(["\n  margin: 25px 0 20px;\n"]))),T=function(n){for(var e=n.postsPerPage,t=n.totalPosts,i=n.paginate,r=[],a=1;a<=Math.ceil(t/e);a++)r.push(a);return(0,y.jsx)("div",{children:(0,y.jsx)(W,{className:"pagination",children:r.map((function(n){return(0,y.jsx)(U,{className:"page-item",children:(0,y.jsx)(L,{onClick:function(){return i(n)},className:"page-link",children:n})},n)}))})})},W=b.ZP.ul(c||(c=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  text-align: center;\n  border-radius: 3px;\n  color: #666;\n  gap: 10px;\n  padding: 1px;\n"]))),U=b.ZP.li(u||(u=(0,j.Z)(["\n  transition: all 0s;\n  cursor: pointer;\n"]))),L=b.ZP.span(p||(p=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 17px;\n  font-family: 'Pretendard-Medium';\n  background: #fff;\n  border: 1px solid #eee;\n  border-radius: 5px;\n  width: 38px;\n  height: 38px;\n\n  &:hover {\n    cursor: pointer;\n    background-color: #ddd;\n  }\n  &:focus::after {\n    color: white;\n    background-color: #000;\n  }\n"])));var H=function(n){var e=n.posts,t=(0,v.useState)(!1),i=(0,g.Z)(t,2),r=i[0],a=i[1],s=(0,v.useState)([]),o=(0,g.Z)(s,2),d=o[0],l=o[1],c=(0,v.useState)(1),u=(0,g.Z)(c,2),p=u[0],x=u[1],f=(0,v.useState)(10),h=(0,g.Z)(f,2),m=h[0],j=(h[1],(0,v.useState)("")),b=(0,g.Z)(j,2),w=b[0],C=b[1],P=d.filter((function(n){return n.title.toUpperCase().includes(w.toUpperCase())}));(0,v.useEffect)((function(){l(e)}),[e]);var F=p*m,D=F-m;return(0,y.jsx)(_,{children:r?(0,y.jsx)(Z.Z,{setIsWrite:a}):(0,y.jsxs)(J,{children:[(0,y.jsxs)(Y,{children:[(0,y.jsx)(A,{children:"\ucee4\ubba4\ub2c8\ud2f0"}),(0,y.jsx)(k,{value:w,onChange:function(n){C(n.target.value)}})]}),(0,y.jsx)(S,{onWriteClick:function(){a(!0)},posts:d}),(0,y.jsx)(B,{posts:function(n){var e=[];return e=null===n||void 0===n?void 0:n.slice(D,F),e}(P)}),(0,y.jsx)(T,{postsPerPage:m,totalPosts:e.length,paginate:x})]})})},_=b.ZP.div(x||(x=(0,j.Z)(["\n  max-width: 1290px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0 0 80px;\n"]))),J=b.ZP.div(f||(f=(0,j.Z)(["\n  width: 100%;\n  min-height: 90vh;\n  padding: 50px 0 25px;\n"]))),Y=b.ZP.div(h||(h=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  gap: 25px;\n"]))),A=b.ZP.h2(m||(m=(0,j.Z)(["\n  font-size: 40px;\n  font-family: 'Pretendard-Bold';\n"])))},1646:function(n,e,t){n.exports=t.p+"static/media/pf_sample.81078f52f1fc4265efcf.png"}}]);
//# sourceMappingURL=627.cb6dfb78.chunk.js.map