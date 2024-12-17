(this["webpackJsonpwifi-connect-ui"]=this["webpackJsonpwifi-connect-ui"]||[]).push([[0],{1212:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(54),s=n.n(i),r=(n(488),n(489),n(80)),c=n(424),l=n(425),u=n.n(l),m=n(1223),d=n(1221),f=n(475),p=n(33),h=n(81),b=n(1222),g=function(e){var t;return{type:"object",properties:{ssid:{title:"SSID",type:"string",default:null===(t=e[0])||void 0===t?void 0:t.ssid,oneOf:e.map((function(e){return{const:e.ssid,title:e.ssid}}))},identity:{title:"User",type:"string",default:""},passphrase:{title:"Passphrase",type:"string",default:""}},required:["ssid"]}},w=function(e){var t,n,o,i=e.availableNetworks,s=e.onSubmit,c=a.useState({}),l=Object(r.a)(c,2),u=l[0],m=l[1],d=(t=i,n=u.ssid,t.some((function(e){return e.ssid===n&&"enterprise"===e.security})));return a.createElement(p.a,{flexDirection:"column",alignItems:"center",justifyContent:"center",m:4,mt:5},a.createElement(h.a.h3,{align:"center",mb:4},"Hi! Please choose your WiFi from the list"),a.createElement(b.a,{width:["100%","80%","60%","40%"],onFormChange:function(e){var t=e.formData;m(t)},onFormSubmit:function(e){var t=e.formData;return s(t)},value:u,schema:g(i),uiSchema:(o=d,{ssid:{"ui:placeholder":"Select SSID","ui:options":{emphasized:!0}},identity:{"ui:options":{emphasized:!0},"ui:widget":o?void 0:"hidden"},passphrase:{"ui:widget":"password","ui:options":{emphasized:!0}}}),submitButtonProps:{width:"60%",mx:"20%",mt:3,disabled:i.length<=0},submitButtonText:"Connect"}))},y=n(478),v=n(18),E=function(e){var t=e.hasAvailableNetworks,n=e.attemptedConnect,o=e.error;return a.createElement(a.Fragment,null,n&&a.createElement(y.a,{m:2,info:!0},a.createElement(v.d.span,null,"Applying changes... "),a.createElement(v.d.span,null,"Your device will soon be online. If connection is unsuccessful, the Access Point will be back up in a few minutes, and reloading this page will allow you to try again.")),!t&&a.createElement(y.a,{m:2,warning:!0},a.createElement(v.d.span,null,"No wifi networks available.\xa0"),a.createElement(v.d.span,null,"Please ensure there is a network within range and reboot the device.")),!!o&&a.createElement(y.a,{m:2,danger:!0},a.createElement(v.d.span,null,o)))},S=n(1);function k(){var e=Object(c.a)(["\n\tbody {\n\t\tmargin: 0;\n\t\tfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n\t\t\t'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n\t\t\tsans-serif;\n\t\t-webkit-font-smoothing: antialiased;\n\t\t-moz-osx-font-smoothing: grayscale;\n\t}\n\n\tcode {\n\t\tfont-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n\t}\n"]);return k=function(){return e},e}var j=Object(S.createGlobalStyle)(k()),O={font:"Helvetica, sans-serif",monospace:"'Courier New', monospace"},C=function(){var e=o.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],i=o.a.useState(!0),s=Object(r.a)(i,2),c=s[0],l=s[1],p=o.a.useState(""),h=Object(r.a)(p,2),b=h[0],g=h[1],y=o.a.useState([]),v=Object(r.a)(y,2),S=v[0],k=v[1];o.a.useEffect((function(){fetch("/networks").then((function(e){if(200!==e.status)throw new Error(e.statusText);return e.json()})).then(k).catch((function(e){g("Failed to fetch available networks. ".concat(e.message||e))})).finally((function(){l(!1)}))}),[]);return o.a.createElement(m.a,{theme:O},o.a.createElement(j,null),o.a.createElement(d.a,{brand:o.a.createElement("img",{src:u.a,style:{height:30},alt:"logo"})}),o.a.createElement(f.a,null,o.a.createElement(E,{attemptedConnect:n,hasAvailableNetworks:c||S.length>0,error:b}),o.a.createElement(w,{availableNetworks:S,onSubmit:function(e){a(!0),g(""),fetch("/connect",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){if(200!==e.status)throw new Error(e.statusText)})).catch((function(e){g("Failed to connect to the network. ".concat(e.message||e))}))}})))};s.a.render(o.a.createElement(C,null),document.getElementById("root"))},425:function(e,t,n){e.exports=n.p+"static/media/logo.34c0c94e.svg"},483:function(e,t,n){e.exports=n(1212)}},[[483,1,2]]]);