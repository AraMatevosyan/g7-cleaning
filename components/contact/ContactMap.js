import React from 'react';
import {SITE_CONFIG} from "../../shared/config/site";

const ContactMap = () => {
    const address = SITE_CONFIG.address;

    return (
        <section class="contact-page-google-map">
            <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                class="contact-page-google-map__one" allowfullscreen></iframe>
        </section>
    )
}

export default ContactMap;
