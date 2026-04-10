import React from 'react'
import { BrandOneData } from '../../data/brand';
import { Swiper, SwiperSlide } from "swiper/react";

const BrandOne = () => {
    return (
        <>
            <section className="brand-one brand-one--one">
                <div className="container">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={5}
                        autoplay={{delay:   5000}}
                        breakpoints={{
                            "0": {
                                spaceBetween: 30,
                                slidesPerView: 1
                            },
                            375: {
                                spaceBetween: 30,
                                slidesPerView: 2
                            },
                            575: {
                                spaceBetween: 30,
                                slidesPerView: 2
                            },
                            767: {
                                spaceBetween: 50,
                                slidesPerView: 3
                            },
                            991: {
                                spaceBetween: 50,
                                slidesPerView: 4
                            },
                            1199: {
                                spaceBetween: 30,
                                slidesPerView: 5
                            }
                        }} className="thm-swiper__slider swiper-container">
                        <div className="swiper-wrapper">
                            {BrandOneData.map((item, i) => (
                                <SwiperSlide key={i} className="swiper-slide">
                                    <a href={item.link}><img src={item.image} alt={item.alt} /></a>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default BrandOne;
