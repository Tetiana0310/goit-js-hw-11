import{S as m,i as a}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",h="45170254-42a85dd1494e2c1786d1d6be2";function y(n){const s=new URLSearchParams({key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${p}?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}const l=document.querySelector(".gallery");function g(n){const s=n.map(({webformatURL:r,largeImageURL:e,tags:t,likes:i,views:u,comments:d,downloads:f})=>`<div class="photo-card">
  <a class="gallery__item" href="${e}">
    <img src="${r}" alt="${t}" height="190px"/>
  </a>
  <div class="info">
    <p class="info-item">
      <b>Likes: <br>${i}</b>
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
</div>`).join("");l.insertAdjacentHTML("beforeend",s),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function b(){l.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("hidden")}function c(){document.querySelector(".loader").classList.add("hidden")}const q=document.querySelector("#search-form");document.querySelector(".gallery");q.addEventListener("submit",S);function S(n){n.preventDefault();const o=n.currentTarget.elements.searchQuery.value.trim();if(!o){a.error({message:"Please, enter you request",position:"topRight"});return}b(),L(),y(o).then(r=>{if(c(),r.hits.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(r.hits)}).catch(r=>{c(),a.error({message:`Error: ${r.message}`,position:"topRight"}),console.log(r)})}
//# sourceMappingURL=commonHelpers.js.map
