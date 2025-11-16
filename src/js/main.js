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

function setParkIntro(data) {
    const intro = document.querySelector(".intro");
    intro.innerHTML = `
        <h1>${data.fullName}</h1>
        <p>${data.description}</p>
        `;
}


function setParkInfoLinks(data) {
    const infoEl = document.querySelector(".info");
    const html = data.map(mediaCardTemplate);
    infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}


function enableNavigation() {
    // use a querySelector to get the menu buttons
    const menuButton = document.querySelector("#global-nav-toggle");
    const subMenuToggles = document.querySelectorAll(".global-nav__split-button__toggle");
    // when the main menu button is clicked:
    menuButton.addEventListener("click", (ev) => {
        let target = ev.target;

        // toggle the show class on the global-nav
        document.querySelector(".global-nav").classList.toggle("show");

        // check to see if target is the button or something inside the button
        if (target.tagName != "BUTTON") {
            target = target.closest("button");
        }

        // check to see if we just opened or closed the menu
        if (document.querySelector(".global-nav").classList.contains("show")) {
            target.setAttribute("aria-expanded", true);
        }
        else {
            target.setAttribute("aria-expanded", false);
        }

        console.log("toggle");

    });

    subMenuToggles.forEach((toggle) => {
        //for each submenu toggle
        toggle.addEventListener("click", (ev) => {
            // find the closest li ancestor, then find the submenu inside of that li and toggle the show class
            ev.currentTarget
                .closest("li")
                .querySelector(".global-nav__submenu")
                .classList.toggle("show");
            // toggle the rotat class on the button icon that was clicked
            ev.currentTarget.querySelector(".icon").classList.toggle("rotate");

        });

    });
}

async function init() {
    const parkData = await getParkData();
    const links = getInfoLinks(parkData.images);
    setHeaderFooter(parkData);
    setParkIntro(parkData);
    setParkInfoLinks(links);
    enableNavigation();
}



init();


