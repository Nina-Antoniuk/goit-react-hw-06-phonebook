(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={listItem:"ContactsListElement_listItem__9YxUn",name:"ContactsListElement_name__AuqZk",deleteBtn:"ContactsListElement_deleteBtn__1w8vX"}},13:function(e,t,n){e.exports={form:"Form_form__23AAo",button:"Form_button__2afyY",input:"Form_input__csZFl",deleteBtn:"Form_deleteBtn__2ZiOg"}},16:function(e,t,n){e.exports={list:"Contacts_list__2s7wn"}},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(8),s=n.n(r),o=n(3),i=(n(29),n(30),n(14)),l=n(13),b=n.n(l),u=n(5),d=n(4),j=n(33),m=Object(d.b)("contacts/add",(function(e){return{payload:Object(u.a)(Object(u.a)({},e),{},{id:Object(j.a)()})}})),O=Object(d.b)("contacts/delete"),p=Object(d.b)("contacts/filter"),f=n(1);var h=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),l=s[0],u=s[1],d=Object(o.b)(),j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":u(a);break;default:console.log("oops")}},O=function(){c(""),u("")};return Object(f.jsxs)("form",{className:b.a.form,onSubmit:function(e){e.preventDefault(),d(m({name:n,number:l})),O()},children:[Object(f.jsx)("label",{className:"label",htmlFor:"nameId",children:"Name"}),Object(f.jsx)("input",{id:"nameId",className:"input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off",value:n,onChange:j}),Object(f.jsx)("label",{className:"label",htmlFor:"numberId",children:"Number"}),Object(f.jsx)("input",{id:"numberId",className:"input",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435,  \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,autoComplete:"off",value:l,onChange:j}),Object(f.jsx)("button",{className:b.a.button,type:"submit",children:"Add contact"})]})},x=function(e){return e.filter},_=function(e){var t=function(e){return e.contacts}(e),n=x(e).toLocaleLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))};var v=function(){var e=Object(o.c)(x),t=Object(o.b)(),n=Object(j.a)();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("label",{className:"label",htmlFor:n,children:"Find contacts by name"}),Object(f.jsx)("input",{id:n,className:"input",name:"filter",type:"text",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0438\u0449\u0438\u0442\u0435",autoComplete:"off",value:e,onChange:function(e){t(p(e.target.value))}})]})},C=n(16),N=n.n(C),y=n(10),g=n.n(y);var k=function(e){var t=e.id,n=e.name,a=e.number,c=e.onClick;return Object(f.jsxs)("li",{className:g.a.listItem,id:t,children:[Object(f.jsxs)("span",{className:g.a.name,children:[n,":"]})," ",a,Object(f.jsx)("button",{className:g.a.deleteBtn,type:"button",onClick:c,children:"Delete"})]})};var w=function(){var e=Object(o.c)(_),t=Object(o.b)();return Object(f.jsx)("ul",{className:N.a.list,children:e.map((function(e){return Object(f.jsx)(k,{id:e.id,name:e.name,number:e.number,onClick:function(e){return t(O(e.target.parentNode.id))}},e.id)}))})};var A,F=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsx)("h2",{children:"Phonebook"}),Object(f.jsx)(h,{})]}),Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(v,{}),Object(f.jsx)(w,{})]})]})},I=n(6),B=n(17),L=n(2),Z=Object(d.c)([],(A={},Object(I.a)(A,m.type,(function(e,t){return[].concat(Object(B.a)(e),[t.payload])})),Object(I.a)(A,O.type,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),A)),z=Object(d.c)("",Object(I.a)({},p.type,(function(e,t){return t.payload}))),E=Object(L.b)({contacts:Z,filter:z}),S=Object(d.a)({reducer:E});s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(o.a,{store:S,children:Object(f.jsx)(F,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.593c4c68.chunk.js.map