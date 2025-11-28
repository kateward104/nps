
function mainMenuHandler(ev) {
    document.querySelector(".global-nav").classList.toggle("show");
    if (document.querySelector(".global-nav").classList.contiains("show")) {
        ev.target.setAttribute("aria-expanded", true);
    }
    else {
        ev.target.setAttribute("aria-expanded", false);
    }

    console.log("toggle");
}



function subMenuHandler(ev) {
    ev.currentTarget
        .closest("li")
        .querySelector(".global-nav__submenu")
        .classList.toggle("show");
    // toggle the rotat class on the button icon that was clicked
    ev.currentTarget.querySelector(".icon").classList.toggle("rotate");
}


export default function enableNavigation() {
    // use a querySelector to get the menu buttons
    const menuButton = document.querySelector("#global-nav-toggle");
    const subMenuToggles = document.querySelectorAll(".global-nav__split-button__toggle");
    // when the main menu button is clicked:

    menuButton.addEventListener("click", mainMenuHandler);
    subMenuToggles.forEach((toggle) => {
        toggle.addEventListener("click", subMenuHandler);
    });
}
