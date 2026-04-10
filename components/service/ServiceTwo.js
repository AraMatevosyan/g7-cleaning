import React from 'react';
import Link from 'next/link';
import { ServiceTwoData } from '../../data/service';

const ServiceTwo = () => {
    return (
        <>
            <section class="service-two">
                <div class="container">
                    <div class="section-title__style2">
                        <div class="section-title">
                            <span class="section-title__tagline">Our Services</span>
                            <h2 class="section-title__title">We Provide Best Service</h2>
                        </div>
                        <div class="text-box">
                            <p>will reenergize your ome and enhance your life. From everyday housekeeping to routine
                                cleanings, our professional this to members can provide you.</p>
                        </div>
                    </div>
                    <div class="row">
                        {ServiceTwoData.map((item, i) => (
                          <div key={i} class="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay={item.delay} data-wow-duration={item.duration}>
                              <div class="service-two__single">
                                  <div class="service-two__single-img">
                                      <div class="service-two__single-img-inner">
                                          <img class="parallax-img" src={item.image} alt={item.alt} />
                                      </div>
                                      <div class="icon-box">
                                          <span class={item.icon}></span>
                                      </div>
                                  </div>
                                  <div class="service-two__single-content text-center">
                                      <h2><Link href={item.link}>{item.heading}</Link></h2>
                                      <p>{item.description}</p>
                                  </div>
                              </div>
                          </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceTwo;
