import React from 'react';
import Link from 'next/link';
import {SITE_CONFIG} from "../../shared/config/site";
import menu_data from "../header/menu-data";
import {ScrollToTopHandler} from "../../utils/utils";
import Logo from "../Logo/Logo";

const socialLinks = [
    { id: 1, href: SITE_CONFIG.social.facebook, iconClassName: "icon-facebook" },
    { id: 2, href: SITE_CONFIG.social.instagram, iconClassName: "icon-instagram" },
    { id: 3, href: SITE_CONFIG.social.twitter, iconClassName: "icon-twitter" },
];

function FooterLinkList({ links }) {
    return (
        <ul className="footer-widget__links-list" role="list">
            {links.map((item) => (
                <li key={item.id} className="footer-widget__links-list-item">
                    <Link href={item.link}>{item.title}</Link>
                </li>
            ))}
        </ul>
    );
}

const FooterOne = () => (
    <footer className="footer-one">
        <div className="footer-one__bg" style={{backgroundImage: `url(/assets/images/backgrounds/footer-v1-bg.webp)`}}></div>
        <div className="footer-one__top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="footer-one__top-wrapper">
                            <div className="row">
                                <div className="col-xl-8 col-lg-8 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
                                    <section className="footer-widget__column footer-widget__about" aria-labelledby="footer-about-title">
                                        <div className="footer-widget__about-logo">
                                            <Link onClick={ScrollToTopHandler} href="/" aria-label="G7 Cleaning home page">
                                                <Logo width={200} height={150} color="#fff"/>
                                            </Link>
                                        </div>
                                        <h2 id="footer-about-title" className="visually-hidden">About G7 Cleaning</h2>
                                        <p className="footer-widget__about-text">
                                            We take care of your home or business with professional
                                            cleaning services you can trust. Enjoy a clean, fresh space without the stress.
                                        </p>

                                        <div className="social-link" aria-label="Footer social links">
                                            <ul role="list">
                                                {socialLinks.map((item) => (
                                                    <li key={item.id}>
                                                        <a
                                                            href={item.href}
                                                            aria-label={`Visit our ${item.iconClassName.replace("icon-", "")} page`}
                                                        >
                                                            <span className={item.iconClassName} aria-hidden="true"></span>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                    </section>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
                                    <nav className="footer-widget__column footer-widget__links mar-l" aria-labelledby="footer-links-title">
                                        <h2 id="footer-links-title" className="footer-widget__title">Useful Links</h2>
                                        <FooterLinkList links={menu_data} />
                                    </nav>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="footer-one__bottom">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="footer-one__bottom-inner">
                            <div className="footer-one__bottom-text">
                                <p className="copyright">
                                    © {new Date().getFullYear()} G7 Cleaning LLC | All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)

export default FooterOne;
