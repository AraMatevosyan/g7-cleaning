"use client";

import React, { useState, useEffect } from 'react';
import NavMenu from './NavMenu';
import Sidebar from './sidebar';
import Link from 'next/link';
import {SITE_CONFIG} from "../../shared/config/site";
import {ScrollToTopHandler} from "../../utils/utils";
import Logo from "../Logo/Logo";

const HeaderOne = () => {
    useEffect(() => {

        $('select').niceSelect();

        if ($("#polyglot-language-options").length) {
            $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
              effect: 'slide',
              animSpeed: 500,
              testMode: true,
              onChange: function (evt) {
                alert("The selected language is: " + evt.selectedItem);
              }
        
            });
        }
            
    }, []);
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <header className="main-header clearfix">
                <div className="main-header__top clearfix">
                    <div className="container clearfix">
                        <div className="main-header__top-inner clearfix">
                            <div className="main-header__top-left">
                                <ul className="main-header__top-address">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-email"></span>
                                        </div>
                                        <div className="text">
                                            <p><a href={SITE_CONFIG.email.href}>{SITE_CONFIG.email.address}</a></p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-wall-clock"></span>
                                        </div>
                                        <div className="text">
                                            <p>Sun - Fri: 8.00am - 10.00pm</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="main-header__top-right">
                                <div className="main-header__top-right-social">
                                    <a href={SITE_CONFIG.social.facebook}><i className="fab fa-facebook"></i></a>
                                    <a href={SITE_CONFIG.social.twitter}><i className="fab fa-twitter"></i></a>
                                    <a href={SITE_CONFIG.social.pinterest}><i className="fab fa-pinterest-p"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="main-menu clearfix">
                    <div className="container clearfix">
                        <div className="main-menu-wrapper clearfix">
                            <div className="main-menu-wrapper__left">
                                <div className="main-menu-wrapper__logo">
                                    <Link onClick={ScrollToTopHandler} href="/">
                                        <Logo />
                                    </Link>
                                </div>
                            </div>
                            <div className="main-menu-wrapper__right">
                                <div className="main-menu-wrapper__main-menu">
                                    <a onClick={() => setIsActive(true)} className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                                    <NavMenu />
                                </div>
                                <Link href={SITE_CONFIG.phone.href} className="thm-btn main-header__btn">
                                    <span>Contact Us</span>
                                    <div className="liquid"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <Sidebar isActive={isActive} setIsActive={setIsActive} />

            <div className="body-overlay"></div>
        </>
    )
}

export default HeaderOne;
