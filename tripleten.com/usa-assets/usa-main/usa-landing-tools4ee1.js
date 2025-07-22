(function(){"use strict";const Q=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),b=(...e)=>{var t;(t=window.PRACTICUM_PARAMS)!=null&&t.isDevMode&&console.log(...e)},P=["gclid","fbclid","msclkid"],R={"Software Engineer":"se","Data Scientist":"ds","Quality Assurance":"qa","BI Analyst":"bi","Cyber Security Analyst":"csa","UX/UI Designer":"uxui","I’m not sure yet":"main"};Object.keys(R).reduce((e,t)=>(e[R[t]]=t,e),{});const V="us-lead-form",X=30*24*60*60*1e3,C=393545;let I=null;const Y=async()=>{try{return await(await fetch("/api/landing/users/me/",{headers:{"x-client-id":V}})).json()}catch(e){return b(`Can'not get me: ${e}`),{}}},J=async()=>(I||(I=Y()),I);function u(e,t,n=!1){try{if(n){window.localStorage.setItem(e,JSON.stringify(t));return}if(typeof t=="string"){window.localStorage.setItem(e,t);return}window.localStorage.setItem(e,t==null?void 0:t.toString());return}catch(r){b(r)}}function m(e,t="",n=!1){try{if(n)return JSON.parse(window.localStorage.getItem(e)||"");const r=window.localStorage.getItem(e);return r===null?t:r}catch(r){b(r)}return t}const Z=(e,t,n=X,r="-time")=>{const a=m(e),i=`${e}${r}`,s=m(i),o=Date.now();if(a&&s){const d=o-Number(s);n<d&&(typeof t=="string"?u(e,t):u(e,t,!0),u(i,`${o}`))}else typeof t=="string"?u(e,t):u(e,t,!0),u(i,`${o}`);return m(e,"")};function k(e,t=""){try{return e()}catch(n){b(n)}return t}const ee=e=>{try{const n=new URL(location.href).search.split(/[?&]/).map(r=>r.split("=")).reduce((r,a)=>(r[a[0]]=a[1],r),{});return{...e,...n}}catch(t){console.log(t)}return e||{}},te="0S9V7R9M47";function ne(){const e=document.cookie.match(/(?:^|;)\s*_conv_v=([^;]*)/)||[];return e[1]?decodeURIComponent(e[1]):"N/A"}function O(){const e=document.cookie.match(/(?:^|;)\s*_ga=([^;]*)/)||[],t=e?decodeURIComponent(e[1]).match(/\d+\.\d+$/):null;if(t)return t[0]}function re(){const e=new RegExp(`_ga_${te}=GS\\d\\.\\d\\.(.+?)(?:;|$)`),t=document.cookie.match(e),n=t==null?void 0:t[1].split(".");return n&&n.shift()||"N/A"}function E(){return m("ga_session_id","N/A")}function ie(){const e=E(),t=re();e!==t&&Z("ga_session_id",t,0,"_timestamp")}const oe=async()=>{var a;const e=m("last-utm",{},!0),t=m("first-utm",{},!0),n=ee(e);Object.keys(t).forEach(i=>{n[`first_${i}`]=t[i]}),window.PRACTICUM_PARAMS.utm=e,n.profession=(a=window.PRACTICUM_PARAMS)==null?void 0:a.profession,n.device=Q?"mobile":"desktop",n.referrer=m("referrer","N/A"),n.firstReferrer=m("first-referrer","N/A"),n.timezone=k(()=>Intl.DateTimeFormat().resolvedOptions().timeZone,"N/A"),n.browserLanguage=k(()=>navigator.language||navigator.languages[0],"N/A"),n.timestamp=m("first-entrance",""),n.utmSessionTimestamp=m("last-utm-time",""),n.firstUtmSessionTimestamp=m("first-utm-time",""),n.firstLanding=m("first-landing"),n.ttp=m("ttp"),n.ttclid=m("ttclid"),n.userAgent=navigator.userAgent,n.convertExperiment=ne(),P.forEach(i=>{n[i]=m(i,"")});const r=await J();if(n.ip=r.ip||"",n.tf_name){const i=decodeURI(n.tf_name).split(" "),s=i.shift();s&&(n.first_name=s);const o=i.join(" ");o&&(n.last_name=o)}else if(r){const{firstName:i,lastName:s}=r;n.first_name=i||"",n.last_name=s||"",n.full_name=`${i||""} ${s||""}`.trim()}if(n.tf_email)n.email=decodeURI(n.tf_email);else if(r){const{email:i}=r;n.email=i||""}n.tf_phone&&(n.phone="+"+decodeURI(n.tf_phone).replace(/\D/g,"")),console.log(n),window.PRACTICUM_PARAMS.params=n},ae=`<div class="practicum-bigmarker-form-header-container">
    <span class="practicum-bigmarker-form-header-text">
        Find out how Practicum starts tech careers at our free webinar
    </span>
</div>
`,se=`.bigmarker-widget-form-list-name {
    display: none;
}

.bigmarker-widget-form-title {
    display: none;
}

.bigmarker-widget-out-box {
    max-width: none !important;
    padding: 0px;
}

.bigmarker-widget-box {
    background: transparent !important;
    border: none !important;
    padding: 0px !important;
}

.bigmarker-widget-form-list {
    margin: 8px 0px 0px !important;
    padding: 0px !important;
}

.bigmarker-widget-form-list-select {
    width: 360px !important;
    border-radius: 12px !important;
    background: transparent !important;
}

.bigmarker-widget-form-list-select::after {
    content: url('data:image/svg+xml;utf8,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.29289 4.79289C2.68342 4.40237 3.31658 4.40237 3.70711 4.79289L8 9.08579L12.2929 4.79289C12.6834 4.40237 13.3166 4.40237 13.7071 4.79289C14.0976 5.18342 14.0976 5.81658 13.7071 6.20711L8 11.9142L2.29289 6.20711C1.90237 5.81658 1.90237 5.18342 2.29289 4.79289Z" fill="black" fill-opacity="0.83"/></svg>');
    position: absolute;
    right: 0;
    line-height: 40px;
    font-size: 40px;
    width: 40px;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
    z-index: 4;
}

.bigmarker-widget-form-list-box {
    margin-bottom: 0px !important;
}

.bigmarker-widget-form-list-btn {
    margin-top: 24px;
    background: transparent !important;
    padding: 0px !important;
}

.bigmarker-widget-box select,
.bigmarker-widget-box select option,
.bigmarker-widget-box input {
    border: 1px solid rgba(0, 0, 0, 0.08) !important;
    border-radius: 12px !important;
    width: 360px !important;
    height: 50px !important;
    padding: 14px 40px 14px 12px !important;
    background: white !important;

    font-family: 'SuisseIntl', Arial, sans-serif !important;
    font-style: normal !important;
    font-weight: 400 !important;
    font-size: 16px !important;
    line-height: 20px !important;
}

.bigmarker-widget-form-list-btn input,
.bigmarker-widget-form-registered-btn a {
    padding: 20px 12px !important;
    font-family: 'SuisseIntl', Arial, sans-serif !important;
    font-weight: 700 !important;
    font-size: 20px !important;
    height: 60px !important;
    cursor: pointer;
}

.practicum-bigmarker-container .bigmarker-widget-form-registered-btn a {
    padding: 0px 12px !important;
    border-radius: 12px !important;
    line-height: 60px !important;
}

.bigmarker-widget-form-list-input {
    position: relative;
}

.bigmarker-widget-form-list-input::after {
    content: '*';
    position: absolute;
    top: 14px;
    right: 0;
    line-height: 36px;
    width: 40px;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    font-size: 32px;
}

.practicum-bigmarker-form-header-container {
    max-width: 800px;
    margin: 0px auto 32px;
    text-align: center;
}

.practicum-bigmarker-form-header-text,
.bigmarker-widget-form-registered {
    font-family: 'SuisseIntl', Arial, sans-serif !important;
    font-size: 56px !important;
    font-weight: 700 !important;
    line-height: 56px !important;
    letter-spacing: 0em !important;
    text-align: center !important;
    color: black !important;
    /* white-space: nowrap !important; */
}

.practicum-bigmarker-form-header-image {
    vertical-align: bottom;
}

.practicum-bigmarker-container .register_form form.register_member {
    width: 360px;
    margin: 0px auto;
}

.practicum-bigmarker-container .registration_confirm_page {
    text-align: center;
    padding: 0px 32px;
    margin: 0px auto;
}

.practicum-bigmarker-container .registration_confirm_page div:not(:first-child) {
    max-width: 420px;
    margin: auto;
}

.bigmarker-widget-form-registered-title {
    font-family: 'Suisse Intl', Arial, sans-serif !important;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 24px !important;
    line-height: 28px !important;
}

.bigmarker-widget-form-registered-check {
    display: none !important;
}

.bigmarker-widget-form-registered-text {
    font-family: 'Suisse Intl', Arial, sans-serif !important;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
}

.bigmarker-widget-form-registered-text p:not(:first-child) {
    display: none !important;
}
`,ce="https://hook.us1.make.com/khae9kdi7wddf977r95og89ulwd4wcfi?id=reczwT5VVXIcmLHYb",me=()=>{const e={new_member_full_name:"Your full name",new_member_email:"Your e-mail",conference_registration_pre_conference_responses_attributes_3_response:"Phone Number"},t=()=>{const n=document.querySelector("#registration_sub_conference_id");if(!n){window.setTimeout(t,1e3);return}window.setTimeout(()=>{n.value=n.options[1]?n.options[1].value:n.options[0].value},500),Object.entries(e).forEach(([i,s])=>{const o=document.querySelector(`#${i}`);o&&o.setAttribute("placeholder",s)});const r=document.querySelector(".practicum-bigmarker-container");if(r){const i=document.createElement("style");i.innerHTML=se,r.prepend(i);const s=r.querySelector(".register_form");if(s){const o=document.createElement("div");o.innerHTML=ae,s.prepend(o)}r.style.display="block"}const{bm_jQuery:a}=window;a&&a.ajaxPrefilter(i=>{var l,h;if(!((l=i.url)!=null&&l.startsWith("https://www.bigmarker.com/register/register_member_for_conference")))return;const s=i.data;if(!s)return;const o={};for(const[f,p]of s.entries())typeof p=="string"&&(o[f]=p);const d={...(h=window.PRACTICUM_PARAMS)==null?void 0:h.params};Object.keys(o).sort().forEach(f=>{const p=o[f];if(f.endsWith("[question]")&&p==="Phone number"){const _=f.replace("[question]","[response]");d.phone=o[_];return}if(f.endsWith("[email]")){d.email=p;return}if(f.endsWith("[full_name]")){d.full_name=p;return}});try{fetch(ce,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},mode:"cors",body:JSON.stringify(d)})}catch(f){console.log(f)}})};window.addEventListener("load",t)},y=(e,t,n)=>{n&&(e[t]=n)},de=(e={})=>{const{utm:t,params:n={}}=window.PRACTICUM_PARAMS||{},{gaid:r,gclid:a,convertExperiment:i}=n,s=window.location.pathname,o={...t,...e,landing:s};return y(o,"gaid",r),y(o,"convertExperiment",i),y(o,"referrer",document.referrer),P.forEach(l=>{y(o,l,n[l])}),{utmTerm:`${r}_${a}_${s}`+o.utm_term?`_${o.utm_term}`:"",params:o}},fe=(e,t)=>{if(!e)return"";const n=new URL(e);for(const[r,a]of Object.entries(t))a&&n.searchParams.set(r,a.toString());return n.href},le=e=>{const{params:{form_position:t,...n},utmTerm:r}=de();document.querySelectorAll("a").forEach(i=>{try{const s=i.href&&new URL(i.href).host;if(!e.includes(s)||i.href.includes("#"))return;i.setAttribute("href",fe(i.href,i.href.includes("calendly")?{...n,utm_term:r}:n)),console.log(`ADD PARAMS SUCCESS, LINK: ${i.href}`)}catch(s){b(`ADD PARAMS ERROR, LINK: ${i.href} ${s}`)}})},pe=()=>{var e;return(e=window.dataLayer)!=null&&e.push?O()!==void 0:!1},ge=()=>{var t;if(!((t=window.PRACTICUM_PARAMS)!=null&&t.params))return;const e=O();e&&(window.PRACTICUM_PARAMS.params.gaid=e),window.PRACTICUM_PARAMS.params.gaSessionId=E(),window.PRACTICUM_PARAMS.params.gaSessionIdTimestamp=m("ga_session_id_timestamp",""),le(window.PRACTICUM_PARAMS.domainsToDecorate||[])};var x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ue(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function be(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var $=be,we=typeof x=="object"&&x&&x.Object===Object&&x,he=we,_e=he,Se=typeof self=="object"&&self&&self.Object===Object&&self,ye=_e||Se||Function("return this")(),U=ye,xe=U,Te=function(){return xe.Date.now()},Ae=Te,Ie=/\s/;function ve(e){for(var t=e.length;t--&&Ie.test(e.charAt(t)););return t}var Me=ve,Pe=Me,Re=/^\s+/;function Ce(e){return e&&e.slice(0,Pe(e)+1).replace(Re,"")}var ke=Ce,Oe=U,Ee=Oe.Symbol,j=Ee,L=j,N=Object.prototype,$e=N.hasOwnProperty,Ue=N.toString,w=L?L.toStringTag:void 0;function je(e){var t=$e.call(e,w),n=e[w];try{e[w]=void 0;var r=!0}catch{}var a=Ue.call(e);return r&&(t?e[w]=n:delete e[w]),a}var Le=je,Ne=Object.prototype,De=Ne.toString;function Ge(e){return De.call(e)}var We=Ge,D=j,qe=Le,Fe=We,Be="[object Null]",ze="[object Undefined]",G=D?D.toStringTag:void 0;function He(e){return e==null?e===void 0?ze:Be:G&&G in Object(e)?qe(e):Fe(e)}var Ke=He;function Qe(e){return e!=null&&typeof e=="object"}var Ve=Qe,Xe=Ke,Ye=Ve,Je="[object Symbol]";function Ze(e){return typeof e=="symbol"||Ye(e)&&Xe(e)==Je}var et=Ze,tt=ke,W=$,nt=et,q=0/0,rt=/^[-+]0x[0-9a-f]+$/i,it=/^0b[01]+$/i,ot=/^0o[0-7]+$/i,at=parseInt;function st(e){if(typeof e=="number")return e;if(nt(e))return q;if(W(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=W(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=tt(e);var n=it.test(e);return n||ot.test(e)?at(e.slice(2),n?2:8):rt.test(e)?q:+e}var ct=st,mt=$,v=Ae,F=ct,dt="Expected a function",ft=Math.max,lt=Math.min;function pt(e,t,n){var r,a,i,s,o,d,l=0,h=!1,f=!1,p=!0;if(typeof e!="function")throw new TypeError(dt);t=F(t)||0,mt(n)&&(h=!!n.leading,f="maxWait"in n,i=f?ft(F(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p);function _(c){var g=r,S=a;return r=a=void 0,l=c,s=e.apply(S,g),s}function ht(c){return l=c,o=setTimeout(A,t),h?_(c):s}function _t(c){var g=c-d,S=c-l,K=t-g;return f?lt(K,i-S):K}function z(c){var g=c-d,S=c-l;return d===void 0||g>=t||g<0||f&&S>=i}function A(){var c=v();if(z(c))return H(c);o=setTimeout(A,_t(c))}function H(c){return o=void 0,p&&r?_(c):(r=a=void 0,s)}function St(){o!==void 0&&clearTimeout(o),l=0,r=d=a=o=void 0}function yt(){return o===void 0?s:H(v())}function M(){var c=v(),g=z(c);if(r=arguments,a=this,d=c,g){if(o===void 0)return ht(d);if(f)return clearTimeout(o),o=setTimeout(A,t),_(d)}return o===void 0&&(o=setTimeout(A,t)),s}return M.cancel=St,M.flush=yt,M}var gt=pt;const ut=ue(gt)(e=>{bt()<-100&&e()},17),bt=(()=>{let e,t,n,r;function a(){e=null,r=0}return a(),()=>(t=window.scrollY,e!==null&&(r=t-e),e=t,clearTimeout(n),n=setTimeout(a,50),r)})();window.PRACTICUM_PARAMS={profession:"",afterLoginRedirectUrls:{se:"home/web",ds:"home/data-scientist",qa:"home/qa-engineer-us",bi:"home/bi-analyst",sql:"home/sql101"},isDevMode:new URLSearchParams(window.location.search).get("isDevMode")!==null,domainsToDecorate:["tripleten.blog","calendly.com","typeform.com","form.typeform.com","y-data.typeform.com"],...window.PRACTICUM_PARAMS,utm:{},params:{}};const T=1e3;window.PRACTICUM_PARAMS.useBigmarkerWidget&&me(),(async()=>await oe())(),setTimeout(async function e(){pe()?(ie(),ge()):setTimeout(e,T)},T);let B=!1;const wt={"/se/":"Software Engineering","/software-engineer/":"Software Engineering","/bi/":"BI Analysis","/ds/":"Data Science","/data-science/":"Data Science","/qa/":"QA Engineering","/qa-engineer/":"QA Engineering","/test-dev-usa/se-gsc/":"Test Testing","/cs/":"Cyber Security Analyst","/cybersecurity/":"Cyber Security Analyst","/uxui/":"UX/UI Designer","/uxui-design/":"UX/UI Designer"};setTimeout(async function e(){const t=window.gsc,n=window.PRACTICUM_PARAMS;if(!t){setTimeout(e,T);return}if(t("params",{landingProfession:wt[window.location.pathname]||"Software Engineering"}),"ontouchstart"in window&&n.gscMobileWidget!==null){const r=()=>{var a;B||(t("show",n.gscMobileWidget??C),B=!0,(a=window.dataLayer)==null||a.push({event:"gscMobileWidgetTriggered",element_id:n.gscMobileWidget??C}))};window.addEventListener("scroll",()=>{ut(r)})}},T)})();
