import { getParkData } from "./parkService.mjs";

const data = getParkData();



function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title:>${IntersectionObserver.name}</a>
    <p class="hero-banner__subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}

function setHeaderInfo(data) {
    // insert data into disclaimer section
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;
    //update the title of the site. Notice that we can select things in the head just like in the body with querySelector
    document.querySelector("head > title").textContent = data.fullName;
    // set the banner image
    document.querySelector(".hero-banner > img").src = data.images[0].url;
    // use the template function above to set the rest of the park specific info in the header
    document.querySelector(".hero-banner_content").innerHTML = parkInfoTemplate(data)
}

function setParkIntro(data) {
    const intro = document.querySelector(".intro");
    intro.innerHTML = `
        <h1>${data.fullName}</h1>
        <p>${data.description}</p>
        `;
    // intro.querySelector("h1").textContent = data.fullName;
    // intro.querySelector("p").textContent = data.description;
}

function mediaCardTemplate(info) {
    return `<div class="media-card">
        <a href = "${info.link}"> 
        <img src = "${info.image}" alt = "${info.name}" class ="media-card__img">
        <h3 class="media-card__title">${info.name}</h3>
        </a>
        <p>${info.description}</p>
        </div>
    `;
    // image, headline, and paragraph
}


const parkInfoLinks = [
    {
        name: "Current Conditions &#x203A;",
        link: "conditions.html",
        image: data.images[2].url,
        description:
            "See what conditions to expect in the park before leaving on your trip!"
    },
    {
        name: "Fees and Passes &#x203A;",
        link: "fees.html",
        image: data.images[3].url,
        description: "Learn about the fees and passes that are available."
    },
    {
        name: "Visitor Centers &#x203A;",
        link: "visitor_centers.html",
        image: data.images[9].url,
        description: "Learn about the visitor centers in the park."
    }
];

function setParkInfoLinks(data) {
    const infoSection = document.querySelector(".info");
    const cards = data.map(mediaCardTemplate);
    infoSection.innerHTML = cards.join("\n");
}

function getMailingAddresses(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
    return mailing;
}

function getVoicePhone(numbers) {
    const voice = numbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
}

function footerTemplate(info) {
    const mailing = getMailingAddresses(info.addresses);
    const voice = getVoicePhone(info.contacts.phoneNumbers);

    return `<section class="contact">
        <h3>Contact Info</h3>
        <h4>Mailing Address:</h4>
        <div><p>${mailing.line1}<p>
        <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
        <h4>Phone:</h4>
        <p>${voice}</p>
        </section>`;
}

function setParkFooter(data) {
    const footerEl = document.querySelector("#park-footer");
    footerEl.innerHTML = footerTemplate(data);
    /* output Mailing address and the voice phone number */
}





setHeaderInfo(data);
setParkIntro(data);
setParkFooter(data);
setParkInfoLinks(parkInfoLinks);




// Practice output --- console.log(mediaCardTemplate(sampleCard));