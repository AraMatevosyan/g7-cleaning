"use client"

import React, { useEffect } from 'react';
import BackgroundOne from '../../public/assets/images/backgrounds/contact-v1-bg.jpg';

const ContactOne = () => {
    useEffect(() => {

        $('select').niceSelect();
      
    }, []);
    return (
        <>
        
        <section className="contact-one pd-120-0-120">
            <div className="contact-one__bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%" style={{backgroundImage: `url(${BackgroundOne.src})`}}>
            </div>
            <div className="contact-one__img wow slideInRight" data-wow-delay="500ms" data-wow-duration="2500ms"><img src="/assets/images/resources/contact-v1-img1.png" alt="" /></div>
            <div className="container">
                <div className="row">
                    {/* Start Contact One Form Box */}
                    <div className="col-xl-8">
                        <div className="contact-one__form-box">
                            <div className="section-title">
                                <span className="section-title__tagline">Contact With Us</span>
                                <h2 className="section-title__title">Write A Message</h2>
                            </div>
                            <form id="contact-form" name="contact_form" className="default-form2" action="assets/inc/sendmail.php" method="post">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="text" name="form_name" value="" placeholder="Your Name" required="" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="email" name="form_email" value="" placeholder="Your Email" required="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="text" name="form_phone" value="" placeholder="Your Phone" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <div className="select-box">
                                                <select className="selectmenu wide">
                                                    <option selected="selected">Select Category</option>
                                                    <option>Bedroom Cleaning</option>
                                                    <option>Window Cleaning</option>
                                                    <option>Office Cleaning</option>
                                                    <option>Commercial Cleaning</option>
                                                    <option>House Cleaning</option>
                                                    <option>Car Cleaning</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="text" name="form_subject" value="" placeholder="Office address" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="text" name="form_subject" value="" placeholder="Select Date" id="datepicker" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-6 text-center">
                                        <div className="button-box">
                                            <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" value="" />
                                            <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                                <span>Confirm Appointment</span>
                                                <i className="liquid"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                    {/* End Contact One Form Box */}
                </div>
            </div>
        </section>

        </>
    )
}

export default ContactOne;
