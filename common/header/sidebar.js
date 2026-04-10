"use client"

import Link from 'next/link';
import React, {useEffect} from 'react';
import MobileMenus from './mobile-menus';
import {SITE_CONFIG} from "../../shared/config/site";
import {ScrollToTopHandler} from "../../utils/utils";
import Logo from "../Logo/Logo";

const Sidebar = ({isActive, setIsActive}) => {
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1200 && isActive) {
                setIsActive(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isActive, setIsActive]);

    useEffect(() => {
        document.body.style.overflow = isActive ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isActive]);

    return (
        <>
            <div className="tt-offcanvas-wrapper">
                <div className={`tt-offcanvas ${isActive ? "opened" : ""}`}>
                    <div className="tt-offcanvas-close" onClick={() => setIsActive(false)}>
                        <span><i className="fas fa-times"></i></span>
                    </div>

                        <div className="logo-box">
                            <Link onClick={ScrollToTopHandler} href="/">
                                <Logo color='#fff' />
                            </Link>
                        </div>
                        <div className="mobile-nav__container"></div>


                        <div className={`tt-mobile-menu mean-container d-xl-none`}>
                            <div className="mean-bar">
                                <MobileMenus onClose={() => setIsActive(false)}/>
                            </div>
                        </div>

                        <div className="mobile-nav__container"></div>

                        <ul className="mobile-nav__contact list-unstyled">
                            <li>
                                <i className="fa fa-envelope"></i>
                                <a href={SITE_CONFIG.email.href}>{SITE_CONFIG.email.address}</a>
                            </li>
                            <li>
                                <i className="fa fa-phone-alt"></i>
                                <a href={SITE_CONFIG.phone.href}>{SITE_CONFIG.phone.number}</a>
                            </li>
                        </ul>
                        <div className="mobile-nav__top">
                            <div className="mobile-nav__social">
                                <a href={SITE_CONFIG.social.twitter} className="fab fa-twitter"></a>
                                <a href={SITE_CONFIG.social.facebook} className="fab fa-facebook-square"></a>
                                <a href={SITE_CONFIG.social.instagram} className="fab fa-instagram"></a>
                            </div>
                        </div>
                </div>
            </div>

            <div className={`body-overlay ${isActive ? "opened"  : ""}`} onClick={() => setIsActive(false)}></div>
        </>
    );
};

export default Sidebar;
