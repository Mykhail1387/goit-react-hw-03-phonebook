(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={form:"ContactForm_form__FRxc0",spanText:"ContactForm_spanText__2-n8h",btn:"ContactForm_btn__1fZfo"}},10:function(t,e,n){t.exports={list:"elementListContacts_list__3FcF9",btn:"elementListContacts_btn__3-_KL"}},11:function(t,e,n){t.exports={wrap:"filter_wrap__phPDZ",text:"filter_text__3ECOa"}},16:function(t,e,n){t.exports=n(29)},29:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(13),r=n.n(o),l=n(15),s=n(3),i=n(5),u=n(6),m=n(8),p=n(7),f=n(9),h=n(4),d=n(1),b=n.n(d),C=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(m.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(c)))).state={name:"",number:""},n.handleChange=function(t){var e=t.target,a=e.name,c=e.value;n.setState(Object(h.a)({},a,c))},n.handleSubmit=function(t){t.preventDefault(),n.props.onAddContact(Object(s.a)({},n.state)),n.reset()},n.reset=function(){n.setState({name:"",number:""})},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:b.a.form,onSubmit:this.handleSubmit},c.a.createElement("span",{className:b.a.spanText},"Name"),c.a.createElement("label",null,c.a.createElement("input",{type:"text",name:"name",value:e,onChange:this.handleChange,autoComplete:"off"})),c.a.createElement("span",{className:b.a.spanText},"Number"),c.a.createElement("label",null,c.a.createElement("input",{type:"text",name:"number",value:n,onChange:this.handleChange,autoComplete:"off",minLength:5})),c.a.createElement("button",{className:b.a.btn,type:"submit"},"add contact")))}}]),e}(a.Component),g=n(10),E=n.n(g),v=function(t){var e=t.propsListContacts,n=t.onDeleteContact;return c.a.createElement(c.a.Fragment,null,e.map((function(t){return c.a.createElement("li",{className:E.a.list,key:t.id},t.name,": ",t.number,c.a.createElement("button",{className:E.a.btn,type:"button",onClick:function(){return n(t.id)}},"delete"))})))},_=function(t){var e=t.listContacts,n=t.onDeleteContact;return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",null,c.a.createElement(v,{propsListContacts:e,onDeleteContact:n})))},y=n(11),F=n.n(y),O=function(t){var e=t.value,n=t.onchangeFilter;return c.a.createElement("div",{className:F.a.wrap},c.a.createElement("span",{className:F.a.text},"Find contacts by name: "),c.a.createElement("input",{type:"text",value:e,onChange:n}))},x=n(14),j=n.n(x),S=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(m.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.changeFilter=function(t){n.setState({filter:t.target.value})},n.addListWithContactForm=function(t){var e=Object(s.a)({},t,{id:j.a.generate()});n.state.contacts.map((function(t){return t.name})).includes(t.name)?alert("".concat(t.name," is already in contacts")):0===t.name.length?alert("Fields must be filled!"):n.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[e])}}))},n.deleteContact=function(t){n.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},n}return Object(f.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(e,n);return c.a.createElement("div",null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(C,{propContacts:e,onAddContact:this.addListWithContactForm}),c.a.createElement("h2",null,"Contacts"),e.length>=2?c.a.createElement(O,{value:n,onchangeFilter:this.changeFilter}):null,c.a.createElement(_,{listContacts:a,onDeleteContact:this.deleteContact}))}}]),e}(a.Component);r.a.render(c.a.createElement(S,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8cc6c828.chunk.js.map