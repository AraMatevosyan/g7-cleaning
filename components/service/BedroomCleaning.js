import React from 'react';
import Link from 'next/link';

const BedroomCleaning = () => {
    return (
        <>
            <section class="service-details">
                <div class="container">
                    <div class="service-details__top">
                        <div class="row">
                            <div class="col-xl-4 col-lg-8 order-2">
                                <div class="service-details__sidebar">
                                    <h2 class="service-details__sidebar-title">All Service</h2>
                                    <ul class="service-details__sidebar-list">
                                        <li class="service-details__sidebar-list-item"><Link href="/public" class="active">Bedroom Cleaning</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/window-cleaning">Window Cleaning</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/office-cleaning">Office Cleaning</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/commercial-cleaning">Commercial Cleaning</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/house-cleaning">House Cleaning</Link></li>
                                        <li class="service-details__sidebar-list-item"><Link href="/car-cleaning">Car Cleaning</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-xl-8 order-1">
                                <div class="service-details__top-img">
                                    <img src="/assets/images/resources/service-details-img1.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="service-details__bottom">
                        <h2 class="service-details__bottom-title">Bedroom Cleaning</h2>
                        <div class="service-details__bottom-text1">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or rando
                                mised words which don't look even slightly believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't anything this
                                embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                                tend to repeat predefined chunks as necessary, making
                                this the first true generator on the Internet. It uses a dictio words, combined with a
                                handful of </p>
                        </div>
                        <div class="service-details__bottom-text2">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or rando
                                mised words which don't look even slightly believable. If you are going to use a passage.
                            </p>
                        </div>
                        <div class="service-details__bottom-text3">
                            <div class="row">
                                <div class="col-xl-4 col-lg-5">
                                    <div class="img-box">
                                        <img src="/assets/images/resources/service-details-img2.jpg" alt="" />
                                    </div>
                                </div>
                                <div class="col-xl-8 col-lg-7">
                                    <div class="content-box">
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                            have suffered
                                            mised words which don't look even slightly believable. If you are going to use a
                                            passage of Lorem
                                            embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
                                            Internet tend to
                                            this the first true generator on the Internet. It uses a dictio words, combined
                                            with a handful ofrem
                                            Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free
                                            from repetiti
                                            njected humor, sure there isn’t anything embarrassing hidden in the middle of
                                            the text. All the
                                            orem Ipsum generators on the Internet tend to repeat predefine</p>

                                        <ul>
                                            <li><span class="icon-plus"></span> Mbarrassing hidden in the middle of text</li>
                                            <li><span class="icon-plus"></span> Mbarrassing hidden in the middle of text</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BedroomCleaning;
