import Link from 'next/link';
import React from 'react';
import { FeaturesOneData } from '../../data/features';
import BackgroundOne from '../../public/assets/images/features/features-v1-img1.jpg';

const FeaturesOne = () => {
    return (
        <>
            <section className="features-one">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="section-title__style2">
                                <div className="section-title">
                                    <span className="section-title__tagline">Our Features</span>
                                    <h2 className="section-title__title">We have best features <br /> to clean service.</h2>
                                </div>
                                <div className="text-box">
                                    <p>will reenergize your ome and enhance your life. From everyday housekeeping to routine
                                        cleanings, our professional this to members can provide you.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {FeaturesOneData.map((item, i) => (
                            <div key={i} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp animated animated" data-wow-delay={item.delay} data-wow-duration={item.duration}>
                                <div className="features-one__single">
                                    <div className="layer-outer" style={{backgroundImage: `url(${BackgroundOne.src})`}}></div>
                                    <div className="features-one__single-inner">
                                        <div className="icon-box">
                                            <span className={item.icon}></span>
                                        </div>
                                        <div className="content-box">
                                            <h2><Link href={item.link}>{item.heading}</Link></h2>
                                            <p>{item.description}</p>
                                            <div className="btn-box">
                                                <Link href={item.link}>Read More <span className="icon-plus"></span></Link>
                                            </div>
                                        </div>
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

export default FeaturesOne;
