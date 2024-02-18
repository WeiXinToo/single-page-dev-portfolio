(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function m(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=m(t);fetch(t.href,r)}})();const j=[{"img-64rem":"./thumbnail-project-1-large.webp",img:"./thumbnail-project-1-small.webp","project-name":"DESIGN PORTFOLIO",skills:["HTML","CSS"]},{"img-64rem":"./thumbnail-project-2-large.webp",img:"./thumbnail-project-2-small.webp","project-name":"E-LEARNING LANDING PAGE",skills:["HTML","CSS"]},{"img-64rem":"./thumbnail-project-3-large.webp",img:"./thumbnail-project-3-small.webp","project-name":"TODO WEB APP",skills:["HTML","CSS","JAVASCRIPT"]},{"img-64rem":"./thumbnail-project-4-large.webp",img:"./thumbnail-project-4-small.webp","project-name":"ENTERTAINMENT WEB APP",skills:["HTML","CSS","JAVASCRIPT"]},{"img-64rem":"./thumbnail-project-5-large.webp",img:"./thumbnail-project-5-small.webp","project-name":"MEMORY GAME",skills:["HTML","CSS","JAVASCRIPT"]},{"img-64rem":"./thumbnail-project-6-large.webp",img:"./thumbnail-project-6-small.webp","project-name":"ART GALLERY SHOWCASE",skills:["HTML","CSS","JAVASCRIPT"]}];console.log(j);const E=document.querySelector(".js-projects__grid"),g=document.querySelector(".js-form"),o=document.querySelector(".js-name-input"),l=document.querySelector(".js-email-input"),n=document.querySelector(".js-textarea"),d=document.querySelector(".js-name-error"),p=document.querySelector(".js-email-error"),f=document.querySelector(".js-textarea-error"),b=document.querySelector(".js-invalid-logo-name"),y=document.querySelector(".js-invalid-logo-email"),h=document.querySelector(".js-invalid-logo-message"),c=document.querySelector(".js-modal"),L=document.querySelector(".js-close-modal"),C=/^[A-Za-z\s]+$/,T=/^\w+@\w+\.\w+$/;function O(e){return e===""||e===void 0?(d.textContent="This field is required.",o.classList.add("js-input-error"),b.style.visibility="visible",!1):e.match(C)?(d.textContent="",o.classList.remove("js-input-error"),b.style.visibility="hidden",!0):(d.textContent="Sorry, invalid format here",o.classList.add("js-input-error"),b.style.visibility="visible",!1)}function w(e){return e===""||e===void 0?(p.textContent="This field is required.",l.classList.add("js-input-error"),y.style.visibility="visible",!1):e.match(T)?(p.textContent="",l.classList.remove("js-input-error"),y.style.visibility="hidden",!0):(p.textContent="Sorry, invalid format here",l.classList.add("js-input-error"),y.style.visibility="visible",!1)}function A(e){return e===""||e===void 0?(f.textContent="This field is required.",n.classList.add("js-input-error"),h.style.visibility="visible",!1):e.length<20?(f.textContent="Message is too short",n.classList.add("js-input-error"),h.style.visibility="visible",!1):(f.textContent="",n.classList.remove("js-input-error"),h.style.visibility="hidden",!0)}g.addEventListener("submit",e=>{e.preventDefault();let i=o.value,m=l.value,a=n.value;const t=O(i),r=w(m),s=A(a);if(!t||!r||!s)return;let S=new FormData(g);fetch("https://script.google.com/macros/s/AKfycbw2OHnKnOklhaNwuv7u3VtKFsL1G-4VtaybPZljMHpLODiAZgOfN8rlFOizsxFbZ_UU/exec",{method:"POST",body:S}).then(u=>u.text()).then(u=>console.log(u)),c.showModal(),c.style.visibility="visible",o.value="",l.value="",n.value=""});L.addEventListener("click",()=>{c.close(),c.style.visibility="hidden"});let v="";j.forEach(e=>{v+=`
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
        ${e.skills.map(i=>`<p>${i}<p>`).join("&#124;")}
      </div>
    </div>
    
    <div class="projects__buttons">
      <a href="">VIEW PROJECT</a>
      <a href="">VIEW CODE</a>
    </div>
  </div>
  `});E.innerHTML=v;
