import{d as v}from"./event.C5jlCmtE.js";const f=(a,e,r)=>r==="prev"?e-1:r==="next"?e+1:a?.findIndex(t=>t.children[0].dataset.page===r)+1,b=document.querySelectorAll('[data-id="w-pagination"]');Array.from(b).forEach(a=>{const e=a,r=Number(e.dataset.totalPages);let t=Number(e.dataset.currentPage);a.addEventListener("click",o=>{const n=o.target;if(n.nodeName==="BUTTON"&&!n.dataset.active&&!n.disabled){const s=a.querySelector('[data-page="prev"]'),c=a.querySelector('[data-page="next"]'),p=a.querySelector("[data-active]"),l=t,g=Array.from(e.children).filter(u=>{const i=u.children[0];return i.dataset.page&&!["prev","next"].includes(i.dataset.page)});t=f(g,t,n.dataset.page||""),p?.removeAttribute("data-active"),e.dataset.currentPage=String(t);const d=g.find((u,i)=>i+1===t)?.children[0];d&&(d.dataset.active="true"),s&&c&&(s.disabled=t===1,c.disabled=t===r),v("paginate",{page:t,direction:l>t?"prev":"next",...d?.dataset.page&&{label:d?.dataset.page},target:a,trusted:o.isTrusted})}})});
