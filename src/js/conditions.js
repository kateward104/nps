import { getParkData, getParkAlerts } from "./parkService.mjs";
import { alertTemplate } from "./templates.mjs";
import setHeaderFooter from ".setHeaderFooter.mjs";

function setAlerts(alerts) {
    const alertsContainer = document.querySelector(".alerts > ul");
    alertsContainer.innerHTMl = "";
    const html = alerts.map(alertTemplate);
    alertsContainer.insertAdjacentHTMl("beforeend", html.join(""));
}

async function init() {
    const parkData = await getParkData();
    const alerts = await getParkAlerts(parkData.parkCode);
    setHeaderFooter(parkData);
    setAlerts(alerts);
}

init();