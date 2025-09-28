// parkInfoTemplate
export function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner__title:>${IntersectionObserver.name}</a>
    <p class="hero-banner__subtitle">
        <span>${info.designation}</span>
        <span>${info.states}</span>
    </p>`;
}


// mediaCardTemplate
export function mediaCardTemplate(info) {
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

function getMailingAddresses(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
    return mailing;
}

function getVoicePhone(numbers) {
    const voice = numbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
}


// footerTemplate
export function footerTemplate(info) {
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