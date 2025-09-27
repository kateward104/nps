import { getParkData } from "./parkService.mjs";

const parkData = getParkData();


const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

document.title = parkData.fullName;

const img = document.querySelector(".hero-banner img")
img.src = parkData.images[0].url;

function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title:>${IntersectionObserver.name}</a>
    <p class="hero-banner__subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}
