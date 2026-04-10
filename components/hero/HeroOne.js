"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import BackgroundOne from '../../public/assets/images/backgrounds/main-slider-v1-img1.jpg';
import BackgroundTwo from '../../public/assets/images/backgrounds/main-slider-v1-img2.jpg';
import BackgroundThree from '../../public/assets/images/backgrounds/main-slider-v1-img3.jpg';

const heroSlides = [
    {
        id: 1,
        background: BackgroundOne,
        tagline: "G7 Cleaning",
        title: [
            "Professional Cleaning",
            "You Can Trust",
        ],
        description: [
            "Reliable residential and commercial cleaning services.",
            "We make your space spotless so you can enjoy your time stress-free.",
        ],
    },
    {
        id: 2,
        background: BackgroundTwo,
        tagline: "G7 Cleaning",
        title: [
            "Clean Space,",
            "Clear Mind",
        ],
        description: [
            "From deep cleaning to regular maintenance — we handle it all.",
            "Experienced team, top-quality results, every time.",
        ],
    },
    {
        id: 3,
        background: BackgroundThree,
        tagline: "G7 Cleaning",
        title: [
            "We Don’t Just Clean —",
            "We Care",
        ],
        description: [
            "Attention to detail and customer satisfaction are our priorities.",
            "Book your cleaning today and feel the difference.",
        ],
    },
];

const HeroOne = () => {

    useEffect(() => {

        if ($('.main-slider-one__carousel').length) {
            $('.main-slider-one__carousel').owlCarousel({
              animateOut: 'fadeOut',
              animateIn: 'fadeIn',
              loop: true,
              margin: 0,
              dots: false,
              nav: true,
              singleItem: true,
              smartSpeed: 500,
              autoplay: true,
              autoplayTimeout: 9000,
              navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right right"></span>'],
              responsive: {
                0: {
                  items: 1
                },
                600: {
                  items: 1
                },
                1024: {
                  items: 1
                }
              }
            });
        }
            
    }, []);

    return (
        <>
            <section className="main-slider-one">
                <div className="main-slider-one__carousel owl-carousel owl-theme">
                    {heroSlides.map((slide) => (
                        <div key={slide.id} className="main-slider-one__single">
                            <div className="top-shape"></div>
                            <div className="bottom-shape"></div>
                            <div
                                className="image-layer"
                                style={{ backgroundImage: `url(${slide.background.src})` }}
                            ></div>
                            <div className="container">
                                <div className="main-slider-one__content">
                                    <div className="tagline">
                                        <p>{slide.tagline}</p>
                                    </div>
                                    <div className="title">
                                        <h2>
                                            {slide.title[0]} <br /> {slide.title[1]}
                                        </h2>
                                    </div>
                                    <div className="text">
                                        <p>
                                            {slide.description[0]} <br />
                                            {slide.description[1]}
                                        </p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="/#service" className="thm-btn">
                                            <span>Discover Now</span>
                                            <div className="liquid"></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default HeroOne;
