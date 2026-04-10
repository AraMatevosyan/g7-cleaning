import React from 'react';
import Link from 'next/link';
import {SITE_CONFIG} from "../../shared/config/site";

const AboutOne = () => {
    return (
        <>
            <section className="about-one pd-120-0-120" id="about">
                <div className="about-one__img2 wow slideInRight" data-wow-delay="500ms">
                    <img className="float-bob-x" src="/assets/images/about/about-v1-img2.png" alt="About" />
                </div>
                <div className="container">
                    <div className="row">
                        {/* Start About One Img */}
                        <div className="col-xl-6">
                            <div className="about-one__img clearfix">
                                <div className="about-one__img-inner">
                                    <img src="/assets/images/about/about-v1-img1.jpg" alt="About" />
                                </div>
                                <div className="experince-box">
                                    <h2>10 +Years Experince</h2>
                                </div>
                            </div>
                        </div>
                        {/* End About One Img */}

                        {/* Start About One Content */}
                        <div className="col-xl-6">
                            <div className="about-one__content">
                                <div className="section-title">
                                    <span className="section-title__tagline">About G7 Cleaning</span>
                                    <h2 className="section-title__title">
                                        Reliable Cleaning Services <br /> You Can Count On
                                    </h2>
                                </div>

                                <div className="about-one__content-inner">
                                    <p className="about-one__content-text1">
                                        At G7 Cleaning LLC, we believe a clean space means a better life.
                                        Our mission is simple — to make your home or workplace spotless,
                                        comfortable, and stress-free.
                                    </p>

                                    <p className="about-one__content-text2">
                                        Whether you need regular housekeeping or a deep cleaning service,
                                        our experienced team delivers consistent, high-quality results.
                                        We pay attention to every detail so you don’t have to.
                                    </p>

                                    <div className="about-one__content-list">
                                        <ul>
                                            <li>
                                                <p>Residential & commercial cleaning services</p>
                                            </li>
                                            <li>
                                                <p>Trusted, trained, and detail-oriented team</p>
                                            </li>
                                            <li>
                                                <p>Flexible scheduling to fit your needs</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="about-one__content-btn">
                                        <Link href={SITE_CONFIG.phone.href} className="thm-btn">
                                            <span>get a quote</span>
                                            <div className="liquid"></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End About One Content */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutOne;
