import React from 'react';

const ContactTwo = () => {
    return (
        <>
            <section class="contact-page-form">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12">
                            <div class="contact-page-form__inner">
                                <div class="section-title text-center">
                                    <span class="section-title__tagline">Contact With Us Now</span>
                                    <h2 class="section-title__title">Feel Free to Write Our <br />Cleaning Experts</h2>
                                </div>
                                <form action="#" class="contact-page-form__form contact-form-validated">
                                    <div class="row">
                                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div class="contact-page-form__input-box">
                                                <input type="text" placeholder="Your name" name="name" />
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div class="contact-page-form__input-box">
                                                <input type="text" placeholder="Phone number" name="phone" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div class="contact-page-form__input-box">
                                                <input type="email" placeholder="Email address" name="email" />
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                            <div class="contact-page-form__input-box">
                                                <input type="text" placeholder="Subject" name="Subject" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <div class="contact-page-form__input-box">
                                                <textarea name="message" placeholder="Write message"></textarea>
                                            </div>
                                            <div class="contact-page-form__btn">
                                                <button class="thm-btn" type="submit" data-loading-text="Please wait...">
                                                    <span>Send Us Message</span>
                                                    <i class="liquid"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactTwo;