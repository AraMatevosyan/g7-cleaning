import React from 'react';
import {SITE_CONFIG} from "../../shared/config/site";

const ContactMap = () => {
    const address = SITE_CONFIG.address;

    return (
        <section className="contact-page-google-map">
            <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                className="contact-page-google-map__one"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map showing G7 Cleaning service location"
            ></iframe>
        </section>
    )
}

export default ContactMap;
