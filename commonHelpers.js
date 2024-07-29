import{S as m,i as a}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",h="45170254-42a85dd1494e2c1786d1d6be2";function g(s){const r=new URLSearchParams({key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${p}?${r}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}const l=document.querySelector(".gallery");function y(s){const r=s.map(({webformatURL:o,largeImageURL:e,tags:t,likes:n,views:u,comments:d,downloads:f})=>`<div class="photo-card">
  <a class="gallery__item" href="${e}">
    <img src="${o}" alt="${t}" height="190px"/>
  </a>
  <div class="info">
    <p class="info-item">
      <b>Likes: <br>${n}</b>
    </p>
    <p class="info-item">
      <b>Views: <br>${u}</b>
    </p>
    <p class="info-item">
      <b>Comments: <br>${d}</b>
    </p>
    <p class="info-item">
      <b>Downloads: <br>${f}</b>
    </p>
  </div>
</div>`).join("");l.insertAdjacentHTML("beforeend",r),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function b(){l.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("hidden")}function c(){document.querySelector(".loader").classList.add("hidden")}const S=document.querySelector("#search-form");document.querySelector(".gallery");S.addEventListener("submit",q);function q(s){s.preventDefault();const r=s.currentTarget.elements.searchQuery;if(!r){a.error({message:"Поле введення не знайдено!",position:"topRight"});return}const i=r.value.trim();if(!i){a.error({message:"Будь ласка, введіть пошуковий запит!",position:"topRight"});return}b(),L(),g(i).then(o=>{if(c(),o.hits.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(o.hits)}).catch(o=>{c(),a.error({message:`Помилка: ${o.message}`,position:"topRight"}),console.log(o)})}
//# sourceMappingURL=commonHelpers.js.map
