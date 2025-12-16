import "../css/style.css";
import "../css/home.css";

/*
/ - Go to the root of the system. (C://)
./ - Current directory
../ - Parent directory
no slash - Current directory
*/

import { getParkData, getInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";
// import { enableNavigation } from "./navigation.mjs";

function setParkIntro(data) {
    const introEl = document.querySelector(".intro")
    if (!introEl) return // stop if the element doesn’t exist

    introEl.innerHTML = `
    <h1>${data.fullName}</h1>
    <p>${data.description}</p>
  `
}

function setParkInfoLinks(data) {
    const infoEl = document.querySelector(".info")
    if (!infoEl) return // stop if the element doesn’t exist

    const html = data.map(mediaCardTemplate)
    infoEl.insertAdjacentHTML("afterbegin", html.join(""))
}


async function init() {
    const parkData = await getParkData();
    const links = getInfoLinks(parkData.images);
    setHeaderFooter(parkData);
    setParkIntro(parkData);
    setParkInfoLinks(links);
    /*enableNavigation();*/ /*I am not sure why this is breaking my css*/
}



init();


