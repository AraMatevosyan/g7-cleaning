"use client"

import React, { useEffect } from 'react';

const ContactFour = () => {
    useEffect(() => {

        $('select').niceSelect();
      
    }, []);
    return (
        <>
            <section class="contact-one contact-one--team-details pd-120-0-120">
                <div class="container">
                    <div class="row">
                        {/* Start Contact One Form Box */}
                        <div class="col-xl-12">
                            <div class="contact-one__form-box">
                                <div class="section-title text-center">
                                    <span class="section-title__tagline">Contact With Us</span>
                                    <h2 class="section-title__title">Write A Message</h2>
                                </div>
                                <form id="contact-form" name="contact_form" class="default-form2" action="#" method="post">
                                    <div class="row">
                                        <div class="col-xl-6 col-lg-6 col-md-6">
                                            <div class="input-box">
                                                <input type="text" name="form_name" value="" placeholder="Your Name" required="" />
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6">
                                            <div class="input-box">
                                                <input type="email" name="form_email" value="" placeholder="Your Email" required="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-6 col-lg-6 col-md-6">
                                            <div class="input-box">
                                                <input type="text" name="form_phone" value="" placeholder="Your Phone" />
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6">
                                            <div class="input-box">
                                                <div class="select-box">
                                                    <select class="selectmenu wide">
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

                                    <div class="row">
                                        <div class="col-xl-6 col-lg-6 col-md-6">
                                            <div class="input-box">
                                                <input type="text" name="form_subject" value="" placeholder="Office address" />
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6">
                                            <div class="input-box">
                                                <input type="text" name="form_subject" value="" placeholder="Select Date" id="datepicker" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-12 text-center">
                                            <div class="button-box">
                                                <input id="form_botcheck" name="form_botcheck" class="form-control" type="hidden" value="" />
                                                <button class="thm-btn" type="submit" data-loading-text="Please wait...">
                                                    <span>Confirm Appointment</span>
                                                    <i class="liquid"></i>
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

export default ContactFour;
