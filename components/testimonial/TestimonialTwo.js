import React, { useEffect } from 'react';
import { TestimonialTwoData } from '../../data/testimonial';

const TestimonialTwo = () => {

    useEffect(() => {

        if ($(".testimonial-two__carousel").length) {
            $(".testimonial-two__carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            smartSpeed: 500,
            autoHeight: false,
            autoplay: true,
            dots: true,
            autoplayTimeout: 10000,
            navText: [
                '<span class="icon-left-arrow"></span>',
                '<span class="icon-right-arrow"></span>'
            ],
            responsive: {
                0: {
                items: 1
                },
                600: {
                items: 1
                },
                800: {
                items: 2
                },
                1024: {
                items: 2
                },
                1200: {
                items: 3
                }
            }
            });
        }
          
    }, []);

    return (
        <>
            <section class="testimonial-two">
                <div class="shape1 wow slideInRight" data-wow-delay="500ms">
                    <img src="/assets/images/shapes/shape-1.png" alt="" />
                </div>
                <div class="container">
                    <div class="section-title__style2">
                        <div class="section-title">
                            <span class="section-title__tagline">Testimonials</span>
                            <h2 class="section-title__title">Clients Feedback About Their <br /> Experience With Us</h2>
                        </div>
                        <div class="text-box">
                            <p>will reenergize your ome and enhance your life. From everyday housekeeping to routine
                                cleanings, our professional this to members can provide you.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="testimonial-two__carousel owl-carousel owl-theme owl-dot-style1">
                                {TestimonialTwoData.map((item, i) => (
                                    <div key={i} class="testimonial-two__single text-center">
                                        <div class="testimonial-two__single-content">
                                            <div class="icon">
                                                <i class="fas fa-quote-left"></i>
                                            </div>
                                            <p>{item.description}</p>
                                            <div class="rating">
                                                <ul>
                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                    <li><i class="fa fa-star" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="testimonial-two__single-thumb">
                                            <img src={item.image} alt={item.alt} />
                                        </div>
                                        <div class="title-box">
                                            <h2>{item.name}</h2>
                                            <span>{item.position}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonialTwo;
