(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[27],{602:function(e,t,a){},608:function(e,t,a){"use strict";a.r(t);a(303);var n=a(304),l=(a(296),a(298)),r=(a(297),a(299)),i=a(46),s=a.n(i),c=a(72),o=a(89),m=(a(169),a(114)),d=a(0),p=a.n(d),E=a(620),u=(a(465),a(602),a(283)),y=m.a.Title;t.default=function(e){var t=e.location,a=Object(d.useState)(null),i=Object(o.a)(a,2),m=i[0],f=i[1],h=Object(d.useState)(0),b=Object(o.a)(h,2),g=b[0],w=b[1];Object(d.useEffect)((function(){(function(){var e=Object(c.a)(s.a.mark((function e(){var a,n,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.O)();case 2:a=e.sent,n=a.data,(l=n.filter((function(e){return e.id===t.state.id})))&&f(l[0]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(d.useEffect)((function(){!function(){var e=0;m&&m.flows.map((function(t){var a=t.alloted_quantity;return t.kit.products.map((function(t){return e+=a*t.quantity*t.product.priceperunit,null})),null})),w(e)}()}),[m]);var v=["","one ","two ","three ","four ","five ","six ","seven ","eight ","nine ","ten ","eleven ","twelve ","thirteen ","fourteen ","fifteen ","sixteen ","seventeen ","eighteen ","nineteen "],k=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];return m?p.a.createElement("div",{className:"container-docket"},p.a.createElement("div",{className:"header-docket"},p.a.createElement("div",{className:"logo-docket"},p.a.createElement("img",{src:"/home-logo.png",alt:"Yantraksh"})),p.a.createElement("div",{className:"heading-docket"},p.a.createElement(y,{level:2,style:{fontWeight:"bold"}},"DELIVERY CHALLAN"))),p.a.createElement("hr",null),p.a.createElement(l.a,{className:"meta-docket"},p.a.createElement(r.a,{span:12,className:"left"},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:22},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Transaction No. : "),p.a.createElement("p",{style:{display:"inline"}},m.transaction_no))),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:22},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Transaction Date : "),p.a.createElement("p",{style:{display:"inline"}},m.dispatch_date.slice(0,10)))),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:22},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Dispatch Date : "),p.a.createElement("p",{style:{display:"inline"}},m.dispatch_date.slice(0,10)))),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:22},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Transaction Type : Allot"))),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:22},p.a.createElement("p",{style:{display:"inline",fontWeight:"bold"}},"KIT ID : \xa0",m.flows.map((function(e,t){return t===m.flows.length-1?e.kit.kit_name.slice(3):e.kit.kit_name.slice(3)+"/"})))))),p.a.createElement(r.a,{span:5}),p.a.createElement(r.a,{span:7,className:"right",style:{fontFamily:"Arial, Helvetica, sans-serif"}},p.a.createElement("p",null,"[ \xa0] Original for Consignee ",p.a.createElement("br",null)," [ \xa0] Duplicate for Transporter ",p.a.createElement("br",null),"[ \xa0] Triplicate for Consignor"))),p.a.createElement("div",{className:"main-data-docket"},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:12},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:10},p.a.createElement("p",{style:{fontWeight:"bold"}},"Sender's Name : ")),p.a.createElement(r.a,{span:12,style:{wordWrap:"break-word"}},m.send_from_warehouse.name))),p.a.createElement(r.a,{span:12},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:10},p.a.createElement("p",{style:{fontWeight:"bold"}},"Receiver's Name : ")),p.a.createElement(r.a,{span:12,style:{wordWrap:"break-word"}},m.flows[0].flow.sender_client.client_name)))),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:12},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:10},p.a.createElement("p",{style:{fontWeight:"bold"}},"Sender's Address : ")),p.a.createElement(r.a,{span:12,style:{wordWrap:"break-word"}},m.send_from_warehouse.address+", "+m.send_from_warehouse.city+", "+m.send_from_warehouse.state+", "+m.send_from_warehouse.pincode))),p.a.createElement(r.a,{span:12},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:10},p.a.createElement("p",{style:{fontWeight:"bold"}},"Receiver's Address : ")),p.a.createElement(r.a,{span:12,style:{wordWrap:"break-word"}},m.flows[0].flow.sender_client.client_shipping_address+", "+m.flows[0].flow.sender_client.client_shipping_city+", "+m.flows[0].flow.sender_client.client_shipping_state+", "+m.flows[0].flow.sender_client.client_shipping_pincode)))),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:12},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:10},p.a.createElement("p",{style:{fontWeight:"bold"}},"GST : ")),p.a.createElement(r.a,{span:12,style:{wordWrap:"break-word"}},m.send_from_warehouse.gst))),p.a.createElement(r.a,{span:12},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:10},p.a.createElement("p",{style:{fontWeight:"bold"}},"GST : ")),p.a.createElement(r.a,{span:12,style:{wordWrap:"break-word"}},m.flows[0].flow.sender_client.client_gst))))),p.a.createElement(l.a,{className:"table-docket"},p.a.createElement(E.a,{bordered:!0,size:"sm"},p.a.createElement("thead",null,p.a.createElement("tr",null,p.a.createElement("th",null,"Kit ID"),p.a.createElement("th",null,"Kit Name"),p.a.createElement("th",null,"Quantity"),p.a.createElement("th",null,"HSN/SAC"),p.a.createElement("th",null,"Product Code"),p.a.createElement("th",null,"Product Name"),p.a.createElement("th",null,"Product Use Qty"))),p.a.createElement("tbody",null,m.flows.map((function(e){return p.a.createElement("tr",null,p.a.createElement("td",null,e.kit.kit_name),p.a.createElement("td",null,e.kit.kit_info),p.a.createElement("td",null,e.alloted_quantity),p.a.createElement("td",null,e.kit.products.map((function(e){return p.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},p.a.createElement("p",null,e.product.hsn_code))}))),p.a.createElement("td",null,e.kit.products.map((function(e){return p.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},p.a.createElement("p",null,e.product.short_code))}))),p.a.createElement("td",null,e.kit.products.map((function(e){return p.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},p.a.createElement("p",null,e.product.name))}))),p.a.createElement("td",null,e.kit.products.map((function(t){return p.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},p.a.createElement("p",null,t.quantity*e.alloted_quantity))}))))}))))),p.a.createElement(l.a,{className:"final-docket"},p.a.createElement(r.a,{span:12},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:8},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Amount in Words : ")),p.a.createElement(r.a,{span:16},p.a.createElement("p",{style:{display:"inline",wordWrap:"break-word",textTransform:"capitalize"}},String.fromCharCode(8377)+" "+function(e){if((e=e.toString()).length>9)return"overflow";var t=("000000000"+e).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);if(t){var a="";return a+=0!=t[1]?(v[Number(t[1])]||k[t[1][0]]+" "+v[t[1][1]])+"crore ":"",a+=0!=t[2]?(v[Number(t[2])]||k[t[2][0]]+" "+v[t[2][1]])+"lakh ":"",a+=0!=t[3]?(v[Number(t[3])]||k[t[3][0]]+" "+v[t[3][1]])+"thousand ":"",a+=0!=t[4]?(v[Number(t[4])]||k[t[4][0]]+" "+v[t[4][1]])+"hundred ":"",a+=0!=t[5]?(""!=a?"and ":"")+(v[Number(t[5])]||k[t[5][0]]+" "+v[t[5][1]])+"only ":""}}(g)+"Only.")),p.a.createElement("br",null)),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:24},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"SO No. : "),p.a.createElement("p",{style:{display:"inline"}},m.sales_order.id))),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:24},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Transporter Name : "),p.a.createElement("p",{style:{display:"inline",wordWrap:"break-word"}},m.transport_by.name))),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:24},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Driver Name : "),p.a.createElement("p",{style:{display:"inline",wordWrap:"break-word"}},m.driver_name))),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:24},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Driver No. : "),p.a.createElement("p",{style:{display:"inline",wordWrap:"break-word"}},m.driver_number)))),p.a.createElement(r.a,{span:12},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:24},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Grand Total : "),p.a.createElement("p",{style:{fontWeight:"bold",display:"inline",wordWrap:"break-word"}},String.fromCharCode(8377)+" "+g))),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:24},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Creation Date : "),p.a.createElement("p",{style:{display:"inline",wordWrap:"break-word"}},(new Date).getDate().toString()+"/"+(new Date).getMonth().toString()+"/"+(new Date).getFullYear().toString()))),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:24},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Vehicle No. : "),p.a.createElement("p",{style:{display:"inline",wordWrap:"break-word"}},m.vehicle_number))))),p.a.createElement("hr",null),p.a.createElement("table",{style:{pageBreakInside:"avoid"}},p.a.createElement("div",{className:"declaration"},p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Declaration : "),p.a.createElement("p",{style:{display:"inline"}},"The packaging products given on hire shall always remain the property of Yantraksh Logistics Private Limited and shall not be used for the purpose otherwise agreed upon. The same shall be returned at the address notified by Yantraksh Logistics Private Limited."),p.a.createElement("br",null),p.a.createElement("p",{style:{fontWeight:"bold",display:"inline"}},"Note : "),p.a.createElement("p",{style:{display:"inline"}}," ","No E-Way Bill is required for Empty Cargo Containers. Refer, Rule 14 of Central Goods and Services Tax (Second Amendment) Rules, 2018."))),p.a.createElement("hr",null),p.a.createElement("table",{style:{pageBreakInside:"avoid",width:"90vw"}},p.a.createElement("div",{className:"footer"},p.a.createElement(l.a,null,p.a.createElement(r.a,{span:1}),p.a.createElement(r.a,{span:11,style:{fontWeight:"bold"}},"For Sending Location :"),p.a.createElement(r.a,{span:6}),p.a.createElement(r.a,{span:6,style:{fontWeight:"bold"}},"For Receiving Location :")),p.a.createElement("br",null)," ",p.a.createElement("br",null),p.a.createElement("br",null),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:1}),p.a.createElement(r.a,{span:11,style:{fontWeight:"bold"}},"Authorized Signature"),p.a.createElement(r.a,{span:6}),p.a.createElement(r.a,{span:6,style:{fontWeight:"bold"}},"Authorized Signature")),p.a.createElement(l.a,null,p.a.createElement(r.a,{span:1}),p.a.createElement(r.a,{span:11},"(Company Seal & Signature)"),p.a.createElement(r.a,{span:6}),p.a.createElement(r.a,{span:6},"(Company Seal & Signature)")),p.a.createElement("br",null)," ",p.a.createElement("br",null),p.a.createElement("div",{style:{display:"flex",justifyContent:"Center",alignItems:"center",flexDirection:"column",padding:"0",margin:"0"}},p.a.createElement("p",{style:{fontSize:"26px",color:"#034efc"}},"Yantraksh Logistics Private Limited"),p.a.createElement("p",null,"CIN No: U74999GJ2018PTC105552"))))):p.a.createElement(n.a,{spinning:!0,style:{position:"absolute",marginLeft:"49vw",marginTop:"49vh"}})}}}]);
//# sourceMappingURL=27.e41b303b.chunk.js.map