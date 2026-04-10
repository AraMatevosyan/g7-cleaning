import React from 'react';
import { ServiceThreeData } from '../../data/service';

const ServiceThree = () => {
    return (
        <section class="services-three" id="service">
            <div class="container">
                <div className="section-title__style2">
                    <div className="section-title">
                        <span className="section-title__tagline">Our Services</span>
                        <h2 className="section-title__title">
                            Professional Cleaning Services <br /> For Every Need
                        </h2>
                    </div>

                    <div className="text-box">
                        <p>
                            From regular housekeeping to deep cleaning and move-in services,
                            G7 Cleaning LLC delivers reliable, high-quality results tailored
                            to your home or business.
                        </p>
                    </div>
                </div>
                <div class="row">
                    {ServiceThreeData.map((item, i) => (
                        <div key={i} class="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay={item.delay}>
                            <div class="services-three__single text-center">
                                <div class="services-three__single-icon">
                                    <span class={item.icon}></span>
                                </div>
                                <div class="services-three__single-content">
                                    <h3>{item.heading}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceThree;
