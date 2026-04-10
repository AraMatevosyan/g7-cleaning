import React from 'react';
import {SITE_CONFIG} from "../../shared/config/site";

const contactItems = [
    {
        id: 1,
        delay: "0.1s",
        duration: "1500ms",
        iconClassName: "fa fa-map-marker",
        title: "Our Location",
        lines: [
            { type: "text", content: SITE_CONFIG.address },
        ],
    },
    {
        id: 2,
        delay: "0.3s",
        duration: "1500ms",
        iconClassName: "icon-email",
        title: "Email Address",
        lines: [
            { type: "link", href: SITE_CONFIG.email.href, content: SITE_CONFIG.email.address },
        ],
    },
    {
        id: 3,
        delay: "0.5s",
        duration: "1500ms",
        iconClassName: "fa fa-phone",
        title: "Phone Number",
        lines: [
            { type: "link", href: SITE_CONFIG.phone.href, content: SITE_CONFIG.phone.number },
        ],
    },
];

function ContactLine({ line }) {
    if (line.type === "link") {
        return (
            <p>
                <a href={line.href}>{line.content}</a>
            </p>
        );
    }

    return <p>{line.content}</p>;
}

const ContactInfo = () => {
    return (
        <section className="contact-box" id="contact">
            <div className="container">
                <div className="row">
                    {contactItems.map((item) => (
                        <div
                            key={item.id}
                            className="col-xl-4 col-lg-4 wow fadeInUp"
                            data-wow-delay={item.delay}
                            data-wow-duration={item.duration}
                        >
                            <div className="contact-box__single text-center">
                                <div className="contact-box__single-icon">
                                    <span className={item.iconClassName}></span>
                                </div>
                                <div className="contact-box__single-text">
                                    <h2>{item.title}</h2>
                                    {item.lines.map((line, index) => (
                                        <ContactLine key={`${item.id}-${index}`} line={line} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ContactInfo;
