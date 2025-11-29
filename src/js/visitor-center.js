import setHeaderFooter from "./setHeaderFooter.mjs";
import { getParkData, getParkVisitorCenterDetails } from parkService.mjs
import "../css/style.css";


function getParam(param) {
    const search = location.search
    const params = new URLSearchParams(search)
    return params.get(param)
}

async function init() {
    const parkData = await getParkData();
    const id = getParam("id");
    const centerDetails = getParkVisitorCenterDetails(id);
    setHeaderFooter(parkData);
}



document.querySelector(".vc-header").insertAdjacentHTML("beforeend", pageTitleTemplate(data.name));

const galleryHTML = listTemplate(data.images, vcImageTemplate);
document.querySelector(".vc-gallery").insertAdjacentHTML("beforeend", galleryHTML);



init();


