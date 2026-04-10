import React, { useEffect } from "react";
import Link from "next/link";
import BackgroundOne from '../../public/assets/images/backgrounds/main-slider-v3-img1.jpg';
import BackgroundTwo from '../../public/assets/images/backgrounds/main-slider-v3-img2.jpg';
import BackgroundThree from '../../public/assets/images/backgrounds/main-slider-v1-img3.jpg';

const HeroThree = () => {

    useEffect(() => {

        if ($('.main-slider-three__carousel').length) {
            $('.main-slider-three__carousel').owlCarousel({
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
            <section className="main-slider-three">
                <div className="main-slider-three__carousel owl-carousel owl-theme">
                    {/* Start Main Slider Three Single */}
                    <div className="main-slider-three__single">
                        <div className="shape1"></div>
                        <div className="image-layer" style={{backgroundImage: `url(${BackgroundOne.src})`}}></div>
                        <div className="container">
                            <div className="main-slider-three__content text-center">
                                <div className="tagline">
                                    <p>Welcome to Washup.</p>
                                </div>
                                <div className="title">
                                    <h2>Best Residential Service <br /> Tcial For Clean. </h2>
                                </div>
                                <div className="text">
                                    <p>We will help you to feel better and enjoy every single day of <br /> may be the fastest
                                        growing health.</p>
                                </div>
                                <div className="btn-box">
                                    <Link href="/contact" className="thm-btn">
                                        <span>Discover Now</span>
                                        <div className="liquid"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Main Slider Three Single */}

                    {/* Start Main Slider Three Single */}
                    <div className="main-slider-three__single">
                        <div className="shape1"></div>
                        <div className="image-layer" style={{backgroundImage: `url(${BackgroundTwo.src})`}}></div>
                        <div className="container">
                            <div className="main-slider-three__content text-center">
                                <div className="tagline">
                                    <p>Welcome to Washup.</p>
                                </div>
                                <div className="title">
                                    <h2>Best Residential Service <br /> Tcial For Clean. </h2>
                                </div>
                                <div className="text">
                                    <p>We will help you to feel better and enjoy every single day of <br /> may be the fastest
                                        growing health.</p>
                                </div>
                                <div className="btn-box">
                                    <Link href="/contact" className="thm-btn">
                                        <span>Discover Now</span>
                                        <div className="liquid"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Main Slider Three Single */}

                    {/* Start Main Slider Three Single */}
                    <div className="main-slider-three__single">
                        <div className="shape1"></div>
                        <div className="image-layer" style={{backgroundImage: `url(${BackgroundThree.src})`}}></div>
                        <div className="container">
                            <div className="main-slider-three__content text-center">
                                <div className="tagline">
                                    <p>Welcome to Washup.</p>
                                </div>
                                <div className="title">
                                    <h2>Best Residential Service <br /> Tcial For Clean. </h2>
                                </div>
                                <div className="text">
                                    <p>We will help you to feel better and enjoy every single day of <br /> may be the fastest
                                        growing health.</p>
                                </div>
                                <div className="btn-box">
                                    <Link href="/contact" className="thm-btn">
                                        <span>Discover Now</span>
                                        <div className="liquid"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Main Slider Three Single */}
                </div>

                <div className="bubbleContainer">
                    <div className="bubble-1"></div>
                    <div className="bubble-2"></div>
                    <div className="bubble-3"></div>
                    <div className="bubble-4"></div>
                    <div className="bubble-5"></div>
                    <div className="bubble-6"></div>
                    <div className="bubble-7"></div>
                    <div className="bubble-8"></div>
                    <div className="bubble-9"></div>
                    <div className="bubble-10"></div>
                    <div className="bubble-11"></div>
                    <div className="bubble-12"></div>
                    <div className="bubble-13"></div>
                    <div className="bubble-14"></div>
                    <div className="bubble-15"></div>
                </div>
            </section>
        </>
    )
}

export default HeroThree;
