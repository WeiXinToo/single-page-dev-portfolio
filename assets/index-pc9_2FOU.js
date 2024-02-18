(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function m(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=m(t);fetch(t.href,s)}})();const j=[{"img-64rem":"./src/assets/images/thumbnail-project-1-large.webp",img:"./src/assets/images/thumbnail-project-1-small.webp","project-name":"DESIGN PORTFOLIO",skills:["HTML","CSS"]},{"img-64rem":"./src/assets/images/thumbnail-project-2-large.webp",img:"./src/assets/images/thumbnail-project-2-small.webp","project-name":"E-LEARNING LANDING PAGE",skills:["HTML","CSS"]},{"img-64rem":"./src/assets/images/thumbnail-project-3-large.webp",img:"./src/assets/images/thumbnail-project-3-small.webp","project-name":"TODO WEB APP",skills:["HTML","CSS","JAVASCRIPT"]},{"img-64rem":"./src/assets/images/thumbnail-project-4-large.webp",img:"./src/assets/images/thumbnail-project-4-small.webp","project-name":"ENTERTAINMENT WEB APP",skills:["HTML","CSS","JAVASCRIPT"]},{"img-64rem":"./src/assets/images/thumbnail-project-5-large.webp",img:"./src/assets/images/thumbnail-project-5-small.webp","project-name":"MEMORY GAME",skills:["HTML","CSS","JAVASCRIPT"]},{"img-64rem":"./src/assets/images/thumbnail-project-6-large.webp",img:"./src/assets/images/thumbnail-project-6-small.webp","project-name":"ART GALLERY SHOWCASE",skills:["HTML","CSS","JAVASCRIPT"]}];console.log(j);const E=document.querySelector(".js-projects__grid"),h=document.querySelector(".js-form"),o=document.querySelector(".js-name-input"),l=document.querySelector(".js-email-input"),a=document.querySelector(".js-textarea"),d=document.querySelector(".js-name-error"),p=document.querySelector(".js-email-error"),g=document.querySelector(".js-textarea-error"),f=document.querySelector(".js-invalid-logo-name"),b=document.querySelector(".js-invalid-logo-email"),y=document.querySelector(".js-invalid-logo-message"),c=document.querySelector(".js-modal"),L=document.querySelector(".js-close-modal"),C=/^[A-Za-z\s]+$/,T=/^\w+@\w+\.\w+$/;function O(e){return e===""||e===void 0?(d.textContent="This field is required.",o.classList.add("js-input-error"),f.style.visibility="visible",!1):e.match(C)?(d.textContent="",o.classList.remove("js-input-error"),f.style.visibility="hidden",!0):(d.textContent="Sorry, invalid format here",o.classList.add("js-input-error"),f.style.visibility="visible",!1)}function w(e){return e===""||e===void 0?(p.textContent="This field is required.",l.classList.add("js-input-error"),b.style.visibility="visible",!1):e.match(T)?(p.textContent="",l.classList.remove("js-input-error"),b.style.visibility="hidden",!0):(p.textContent="Sorry, invalid format here",l.classList.add("js-input-error"),b.style.visibility="visible",!1)}function A(e){return e===""||e===void 0?(g.textContent="This field is required.",a.classList.add("js-input-error"),y.style.visibility="visible",!1):e.length<20?(g.textContent="Message is too short",a.classList.add("js-input-error"),y.style.visibility="visible",!1):(g.textContent="",a.classList.remove("js-input-error"),y.style.visibility="hidden",!0)}h.addEventListener("submit",e=>{e.preventDefault();let r=o.value,m=l.value,n=a.value;const t=O(r),s=w(m),i=A(n);if(!t||!s||!i)return;let S=new FormData(h);fetch("https://script.google.com/macros/s/AKfycbw2OHnKnOklhaNwuv7u3VtKFsL1G-4VtaybPZljMHpLODiAZgOfN8rlFOizsxFbZ_UU/exec",{method:"POST",body:S}).then(u=>u.text()).then(u=>console.log(u)),c.showModal(),c.style.visibility="visible",o.value="",l.value="",a.value=""});L.addEventListener("click",()=>{c.close(),c.style.visibility="hidden"});let v="";j.forEach(e=>{v+=`
  <div class="projects__card">
    <div tabindex="0" class="projects__overlay">
      <picture>
        <source media="(min-width: 64rem)" srcset="${e["img-64rem"]}">
        <img src="${e.img}" alt="project1" width="1080" height="800">
      </picture>
      <div class="overlay__buttons">
        <a href="">VIEW PROJECT</a>
        <a href="">VIEW CODE</a>
      </div>
    </div>
    <div class="project__info">
      <h3>${e["project-name"]}</h3>
      <div class="projects__skills">
        ${e.skills.map(r=>`<p>${r}<p>`).join("&#124;")}
      </div>
    </div>
    
    <div class="projects__buttons">
      <a href="">VIEW PROJECT</a>
      <a href="">VIEW CODE</a>
    </div>
  </div>
  `});E.innerHTML=v;
