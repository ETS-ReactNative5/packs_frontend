(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[5],{286:function(e,t,r){"use strict";r.d(t,"Q",(function(){return c})),r.d(t,"R",(function(){return a})),r.d(t,"f",(function(){return u})),r.d(t,"d",(function(){return o})),r.d(t,"ab",(function(){return i})),r.d(t,"l",(function(){return d})),r.d(t,"nb",(function(){return s})),r.d(t,"K",(function(){return f})),r.d(t,"mb",(function(){return m})),r.d(t,"x",(function(){return l})),r.d(t,"i",(function(){return _})),r.d(t,"H",(function(){return b})),r.d(t,"gb",(function(){return h})),r.d(t,"hb",(function(){return p})),r.d(t,"fb",(function(){return v})),r.d(t,"u",(function(){return O})),r.d(t,"p",(function(){return j})),r.d(t,"O",(function(){return T})),r.d(t,"A",(function(){return E})),r.d(t,"vb",(function(){return y})),r.d(t,"wb",(function(){return w})),r.d(t,"q",(function(){return k})),r.d(t,"P",(function(){return g})),r.d(t,"B",(function(){return G})),r.d(t,"xb",(function(){return P})),r.d(t,"yb",(function(){return S})),r.d(t,"D",(function(){return x})),r.d(t,"Z",(function(){return C})),r.d(t,"n",(function(){return A})),r.d(t,"M",(function(){return D})),r.d(t,"y",(function(){return H})),r.d(t,"qb",(function(){return q})),r.d(t,"S",(function(){return L})),r.d(t,"g",(function(){return M})),r.d(t,"F",(function(){return F})),r.d(t,"T",(function(){return N})),r.d(t,"U",(function(){return R})),r.d(t,"V",(function(){return J})),r.d(t,"s",(function(){return K})),r.d(t,"k",(function(){return z})),r.d(t,"J",(function(){return B})),r.d(t,"kb",(function(){return I})),r.d(t,"lb",(function(){return U})),r.d(t,"w",(function(){return Q})),r.d(t,"cb",(function(){return V})),r.d(t,"c",(function(){return W})),r.d(t,"C",(function(){return X})),r.d(t,"X",(function(){return Y})),r.d(t,"r",(function(){return Z})),r.d(t,"h",(function(){return $})),r.d(t,"G",(function(){return ee})),r.d(t,"db",(function(){return te})),r.d(t,"t",(function(){return re})),r.d(t,"e",(function(){return ne})),r.d(t,"E",(function(){return ce})),r.d(t,"bb",(function(){return ae})),r.d(t,"o",(function(){return ue})),r.d(t,"N",(function(){return oe})),r.d(t,"rb",(function(){return ie})),r.d(t,"ub",(function(){return de})),r.d(t,"z",(function(){return se})),r.d(t,"ob",(function(){return fe})),r.d(t,"m",(function(){return me})),r.d(t,"L",(function(){return le})),r.d(t,"pb",(function(){return _e})),r.d(t,"a",(function(){return be})),r.d(t,"b",(function(){return he})),r.d(t,"eb",(function(){return pe})),r.d(t,"W",(function(){return ve})),r.d(t,"tb",(function(){return Oe})),r.d(t,"Y",(function(){return je})),r.d(t,"sb",(function(){return Te})),r.d(t,"j",(function(){return Ee})),r.d(t,"jb",(function(){return ye})),r.d(t,"I",(function(){return we})),r.d(t,"ib",(function(){return ke})),r.d(t,"v",(function(){return ge}));var n=r(288),c=function(e){var t=e.username,r=e.password;return Object(n.a)("/api/token/",{method:"POST",data:{username:t,password:r},secure:!1})},a=function(){return Object(n.a)("/user/meta/")},u=function(e){var t=e.username,r=e.email,c=e.password,a=e.first_name,u=e.last_name;return Object(n.a)("/create-employee/",{method:"POST",data:{username:t,email:r,password:c,first_name:a,last_name:u},secure:!1})},o=function(e){var t=e.username,r=e.email,c=e.password,a=e.first_name,u=e.last_name;return Object(n.a)("/create-client/",{method:"POST",data:{username:t,email:r,password:c,first_name:a,last_name:u},secure:!1})},i=function(){return Object(n.a)("/clients/",{method:"GET",secure:!0})},d=function(e){return Object(n.a)("/create-product/",{method:"POST",data:e,secure:!0,headers:{"Content-Type":"multipart/form-data  boundary="+Math.random().toString().substr(2)}})},s=function(){return Object(n.a)("/products/",{method:"GET",secure:!0})},f=function(e,t){return console.log(document),Object(n.a)("/edit-product/".concat(e,"/"),{method:"PATCH",secure:!0,data:t,headers:{"Content-Type":"multipart/form-data  boundary="+Math.random().toString().substr(2)}})},m=function(e){return Object(n.a)("/edit-product/".concat(e),{method:"GET",secure:!0})},l=function(e){return Object(n.a)("/edit-product/".concat(e),{method:"DELETE",secure:!0})},_=function(e){var t=e.kit_name,r=e.kit_info,c=e.components_per_kit,a=e.kit_client,u=e.kit_type,o=e.products;return Object(n.a)("/create-kit/",{method:"POST",secure:!0,data:{kit_name:t,kit_info:r,components_per_kit:c,kit_client:a,kit_type:u,products:o}})},b=function(e,t){var r=t.kit_name,c=t.kit_info,a=t.components_per_kit,u=t.kit_client,o=t.kit_type,i=t.products;return Object(n.a)("/edit-kit/".concat(e,"/"),{method:"PATCH",secure:!0,data:{kit_name:r,kit_info:c,components_per_kit:a,kit_client:u,kit_type:o,products:i}})},h=function(){return Object(n.a)("/kits/",{method:"GET",secure:!0})},p=function(){return Object(n.a)("/client-kits/",{method:"GET",secure:!0})},v=function(e){return Object(n.a)("/edit-kit/".concat(e,"/"),{method:"GET",secure:!0})},O=function(e){return Object(n.a)("/edit-kit/".concat(e),{method:"DELETE",secure:!0})},j=function(e){var t=e.name,r=e.street,c=e.city,a=e.pincode,u=e.state,o=e.contact_person_name,i=e.contact_person_no,d=e.email,s=e.type,f=e.payment_terms,m=e.pan,l=e.gst,_=e.code,b=e.remarks,h=e.beneficiary_name,p=e.account_no,v=e.bank_name,O=e.ifsc;return Object(n.a)("/create-vendor/",{method:"POST",data:{name:t,street:r,city:c,pincode:a,state:u,contact_person_name:o,contact_person_no:i,email:d,type:s,payment_terms:f,pan:m,gst:l,code:_,remarks:b,beneficiary_name:h,account_no:p,bank_name:v,ifsc:O},secure:!0})},T=function(e,t){var r=t.name,c=t.street,a=t.city,u=t.pincode,o=t.state,i=t.contact_person_name,d=t.contact_person_no,s=t.email,f=t.type,m=t.payment_terms,l=t.pan,_=t.gst,b=t.code,h=t.remarks,p=t.beneficiary_name,v=t.account_no,O=t.bank_name,j=t.ifsc;return Object(n.a)("/edit-vendor/".concat(e,"/"),{method:"PATCH",data:{name:r,street:c,city:a,pincode:u,state:o,contact_person_name:i,contact_person_no:d,email:s,type:f,payment_terms:m,pan:l,gst:_,code:b,remarks:h,beneficiary_name:p,account_no:v,bank_name:O,ifsc:j},secure:!0})},E=function(e){return Object(n.a)("/edit-vendor/".concat(e,"/"),{method:"DELETE",secure:!0})},y=function(e){return Object(n.a)("/edit-vendor/".concat(e,"/"),{method:"GET",secure:!0})},w=function(){return Object(n.a)("/vendors/",{method:"GET",secure:!0})},k=function(e){return Object(n.a)("/create-warehouse/",{method:"POST",secure:!0,data:e,headers:{"Content-Type":"multipart/form-data  boundary="+Math.random().toString().substr(2)}})},g=function(e,t){return Object(n.a)("/edit-warehouse/".concat(e,"/"),{method:"PATCH",secure:!0,data:t,headers:{"Content-Type":"multipart/form-data  boundary="+Math.random().toString().substr(2)}})},G=function(e){return Object(n.a)("/edit-warehouse/".concat(e,"/"),{method:"DELETE",secure:!0})},P=function(e){return Object(n.a)("/edit-warehouse/".concat(e,"/"),{method:"GET",secure:!0})},S=function(){return Object(n.a)("/warehouse/",{method:"GET",secure:!0})},x=function(e,t){return Object(n.a)("/client-profile/".concat(e,"/"),{method:"PATCH",secure:!0,data:t,headers:{"Content-Type":"multipart/form-data  boundary="+Math.random().toString().substr(2)}})},C=function(e){return Object(n.a)("/client-profile/".concat(e),{method:"GET",secure:!0})},A=function(e){var t=e.name,r=e.city,c=e.address,a=e.emitter,u=e.pan,o=e.gst;return Object(n.a)("/create-receiverclient/",{method:"POST",data:{name:t,city:r,address:c,emitter:a,pan:u,gst:o},secure:!0})},D=function(e,t){var r=t.name,c=t.city,a=t.address,u=t.emitter,o=t.pan,i=t.gst;return Object(n.a)("/edit-receiverclient/".concat(e,"/"),{method:"PATCH",data:{name:r,city:c,address:a,emitter:u,pan:o,gst:i},secure:!0})},H=function(e){return Object(n.a)("/edit-receiverclient/".concat(e,"/"),{method:"DELETE",secure:!0})},q=function(e){return Object(n.a)("/edit-receiverclient/".concat(e,"/"),{method:"GET",secure:!0})},L=function(e){return Object(n.a)("/receiverclients/",{method:"GET",secure:!0})},M=function(e){var t=e.flow_name,r=e.flow_info,c=e.flow_type,a=e.flow_days,u=e.sender_client,o=e.receiver_client,i=e.kits;return Object(n.a)("/create-flow/",{method:"POST",secure:!0,data:{flow_name:t,flow_info:r,flow_type:c,flow_days:a,sender_client:u,receiver_client:o,kits:i}})},F=function(e,t){var r=t.flow_name,c=t.flow_info,a=t.flow_type,u=t.flow_days,o=t.sender_client,i=t.receiver_client,d=t.kits;return Object(n.a)("/edit-flow/".concat(e,"/"),{method:"PATCH",secure:!0,data:{flow_name:r,flow_info:c,flow_type:a,flow_days:u,sender_client:o,receiver_client:i,kits:d}})},N=function(e){return Object(n.a)("/edit-flow/".concat(e,"/"),{method:"GET",secure:!0})},R=function(){return Object(n.a)("/flows/",{method:"GET",secure:!0})},J=function(){return Object(n.a)("/client-flows/",{method:"GET",secure:!0})},K=function(e){return Object(n.a)("/edit-flow/".concat(e,"/"),{method:"DELETE",secure:!0})},z=function(e){var t=e.delivery_required_on,r=e.flows;return Object(n.a)("/create-mrequets/",{method:"POST",data:{delivery_required_on:t,flows:r},secure:!0})},B=function(e,t){var r=t.delivery_required_on,c=t.flows;return Object(n.a)("/edit-mrequets/".concat(e,"/"),{method:"PATCH",data:{delivery_required_on:r,flows:c},secure:!0})},I=function(e){return Object(n.a)("/edit-mrequets/".concat(e,"/"),{method:"GET",secure:!0})},U=function(){return Object(n.a)("/mrequets/",{method:"GET",secure:!0})},Q=function(e){return Object(n.a)("/edit-mrequets/".concat(e,"/"),{method:"DELETE",secure:!0})},V=function(){return Object(n.a)("/allmrequest/",{method:"GET",secure:!0})},W=function(e){var t=e.transaction_no,r=e.dispatch_date,c=e.send_from_warehouse,a=e.sales_order,u=e.flows,o=e.is_delivered,i=e.model,d=e.driver_name,s=e.driver_number,f=e.lr_number,m=e.vehicle_number,l=e.freight_charges,_=e.vehicle_type,b=e.transport_by,h=e.expected_delivery,p=e.remarks;return Object(n.a)("/create-allotment/",{method:"POST",data:{transaction_no:t,dispatch_date:r,send_from_warehouse:c,sales_order:a,flows:u,is_delivered:o,model:i,driver_name:d,driver_number:s,lr_number:f,vehicle_number:m,freight_charges:l,vehicle_type:_,transport_by:b,expected_delivery:h,remarks:p},secure:"true"})},X=function(e,t){var r=t.dispatch_date,c=t.send_from_warehouse,a=t.sales_order,u=t.flows,o=t.model,i=t.driver_name,d=t.driver_number,s=t.lr_number,f=t.vehicle_number,m=t.freight_charges,l=t.vehicle_type,_=t.transport_by,b=t.expected_delivery,h=t.remarks;return Object(n.a)("/edit-allotment/".concat(e,"/"),{method:"PATCH",data:{dispatch_date:r,send_from_warehouse:c,sales_order:a,flows:u,model:o,driver_name:i,driver_number:d,lr_number:s,vehicle_number:f,freight_charges:m,vehicle_type:l,transport_by:_,expected_delivery:b,remarks:h},secure:!0})},Y=function(e){return Object(n.a)("/allotments/",{method:"GET",secure:!0,params:{id:e}})},Z=function(e){return Object(n.a)("/edit-allotment/".concat(e,"/"),{methood:"DELETE",secure:!0})},$=function(e){return Object(n.a)("/create-grn/",{method:"POST",secure:!0,data:e})},ee=function(e,t){return Object(n.a)("/edit-grn/".concat(e,"/"),{method:"PATCH",secure:!0,data:t})},te=function(e){return Object(n.a)("/edit-grn/".concat(e,"/"),{method:"GET",secure:!0})},re=function(e){return Object(n.a)("/edit-grn/".concat(e,"/"),{method:"DELETE",secure:!0})},ne=function(e){return Object(n.a)("/create-delivered/",{method:"POST",data:e,secure:!0})},ce=function(e,t){return Object(n.a)("/edit-delivered/".concat(e,"/"),{method:"PATCH",data:t,secure:!0})},ae=function(e){return Object(n.a)("/edit-delivered/".concat(e,"/"),{method:"GET",secure:!0})},ue=function(e){return Object(n.a)("/create-return/",{method:"POST",data:e,secure:"true"})},oe=function(e,t){var r=t.transaction_no,c=t.transaction_date,a=t.transaction_type,u=t.flow,o=t.kits,i=t.driver_name,d=t.driver_number,s=t.lr_number,f=t.vehicle_number,m=t.freight_charges,l=t.vehicle_type,_=t.transport_by,b=t.warehouse,h=t.receiver_client,p=t.remarks;return Object(n.a)("/edit-return/".concat(e,"/"),{method:"PATCH",data:{transaction_no:r,transaction_date:c,transaction_type:a,flow:u,kits:o,driver_name:i,driver_number:d,lr_number:s,vehicle_number:f,freight_charges:m,vehicle_type:l,transport_by:_,warehouse:b,receiver_client:h,remarks:p},secure:"true"})},ie=function(e){return Object(n.a)("/edit-return/".concat(e,"/"),{method:"GET",secure:!0})},de=function(){return Object(n.a)("/return-table/",{method:"GET",secure:!0})},se=function(e){return Object(n.a)("/edit-return/".concat(e,"/"),{method:"DELETE",secure:!0})},fe=function(){return Object(n.a)("/r-flows/",{method:"GET",secure:!0})},me=function(e){var t=e.returndocket,r=e.delivered,c=e.items;e.document;return Object(n.a)("/create-received/",{method:"POST",data:{returndocket:t,delivered:r,items:c},secure:!0})},le=function(e,t){var r=t.returndocket,c=t.delivered,a=t.items;return Object(n.a)("/edit-received/".concat(e,"/"),{method:"PATCH",data:{returndocket:r,delivered:c,items:a},secure:!0})},_e=function(e){return Object(n.a)("/edit-received/".concat(e,"/"),{method:"GET",secure:!0})},be=function(e){return Object(n.a)("/delivered/",{method:"GET",secure:!0})},he=function(){return Object(n.a)("/received/",{})},pe=function(e){return Object(n.a)("/grn-barcodes/".concat(e,"/"),{method:"GET",secure:!0})},ve=function(e){var t=e.cname,r=e.to,c=e.from;return Object(n.a)("/allotment-reports/",{method:"GET",secure:!0,params:{cname:t,to:r,from:c}})},Oe=function(e){var t=e.cname,r=e.to,c=e.from;return Object(n.a)("/return-reports/",{method:"GET",secure:!0,params:{cname:t,to:r,from:c}})},je=function(e){return Object(n.a)("/allotments-delivered/",{method:"GET",secure:!0,params:{id:e}})},Te=function(e){return Object(n.a)("/return-docket/",{method:"GET",secure:!0,params:{id:e}})},Ee=function(e){return Object(n.a)("/create-leads/",{method:"POST",secure:!0,data:e})},ye=function(){return Object(n.a)("/leads/",{method:"GET",secure:!0})},we=function(e,t){return Object(n.a)("/edit-leads/".concat(e,"/"),{method:"PATCH",secure:!0,data:t})},ke=function(e){return Object(n.a)("/edit-leads/".concat(e,"/"),{method:"GET",secure:!0})},ge=function(e){return Object(n.a)("/edit-leads/".concat(e,"/"),{method:"DELETE",secure:!0,data:data})}},288:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(37),c=r(325),a=r(46),u=r.n(a),o=r(73),i=r(392),d=r(393),s=r.n(d),f=r(308),m=r(307),l=r(309);s.a.defaults.baseURL=m.a;var _=function(){var e=Object(o.a)(u.a.mark((function e(){var t,r,n,c,a,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.a)(),e.next=3,t.get(f.a,null);case 3:return r=e.sent,e.next=6,t.get(f.b,null);case 6:if(n=e.sent,r&&n){e.next=9;break}throw Error("No user found");case 9:if(c=i(r),!(new Date(1e3*parseInt(c.exp,10))>new Date)){e.next=12;break}return e.abrupt("return",r);case 12:return e.next=14,s.a.post("/api/token/refresh/",{refresh:n});case 14:return a=e.sent,o=a.data.access,e.next=18,t.set(f.a,o);case 18:return e.abrupt("return",o);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(u.a.mark((function e(t){var r,a,o,i,d,f,m,l,b,h,p,v,O,j,T,E,y=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=y.length>1&&void 0!==y[1]?y[1]:{},a=r.onSuccess,o=void 0===a?function(e){return e}:a,i=r.onFailure,d=void 0===i?function(e){return e}:i,f=r.secure,m=void 0===f||f,r.defaultData,l=r.headers,b=Object(c.a)(r,["onSuccess","onFailure","secure","defaultData","headers"]),e.prev=2,e.t0=s.a,e.t1=t,e.t2=n.a,e.t3=n.a,e.t4=n.a,e.t5={},!m){e.next=18;break}return e.t7="Bearer ",e.next=13,_();case 13:e.t8=e.sent,e.t9=e.t7.concat.call(e.t7,e.t8),e.t6={Authorization:e.t9},e.next=19;break;case 18:e.t6={};case 19:return e.t10=e.t6,e.t11=(0,e.t4)(e.t5,e.t10),e.t12=l,e.t13=(0,e.t3)(e.t11,e.t12),e.t14={headers:e.t13},e.t15=b,e.t16=(0,e.t2)(e.t14,e.t15),e.next=28,(0,e.t0)(e.t1,e.t16);case 28:return h=e.sent,p=h.data,v=h.status,e.next=32,o(p);case 32:return console.log(p),e.abrupt("return",{data:p,status:v,error:void 0,loading:!1});case 36:if(e.prev=36,e.t17=e.catch(2),!e.t17.response){e.next=43;break}return O=e.t17.response,j=O.data,T=O.status,e.next=42,d(j);case 42:return e.abrupt("return",{data:void 0,status:T,error:j,loading:!1});case 43:if(!e.t17.request){e.next=46;break}return E={message:"error in request setup"},e.abrupt("return",{data:void 0,status:0,error:E,loading:!1});case 46:throw Error(e.t17);case 47:case"end":return e.stop()}}),e,null,[[2,36]])})));return function(t){return e.apply(this,arguments)}}()},307:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n="http://packsdev.ap-south-1.elasticbeanstalk.com"},308:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c}));var n="ACCESS_TOKEN",c="REFRESH_TOKEN"},309:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return n}));var n=function(){return window?window.storage:e.storage}}).call(this,r(47))}}]);
//# sourceMappingURL=5.30832048.chunk.js.map