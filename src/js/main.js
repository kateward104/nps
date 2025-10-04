import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

function setParkIntro(data) {
    const intro = document.querySelector(".intro");
    intro.innerHTML = `
        <h1>${data.fullName}</h1>
        <p>${data.description}</p>
        `;
    // intro.querySelector("h1").textContent = data.fullName;
    // intro.querySelector("p").textContent = data.description;
}


function setParkInfoLinks(data) {
    const infoSection = document.querySelector(".info");
    const cards = data.map(mediaCardTemplate);
    infoSection.innerHTML = cards.join("\n");
}


async function init() {
    const parkData = await getParkData();
    const links = getInfoLinks(parkData.images);
    setHeaderFooter(parkData);
    setParkIntro(parkData);
    setParkInfoLinks(parkInfoLinks);
}

init();


