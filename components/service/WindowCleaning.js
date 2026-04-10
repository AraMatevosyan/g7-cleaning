import React from 'react';
import Link from 'next/link';

const WindowCleaning = () => {
    return (
        <>
            <section className="service-details">
                <div className="container">
                    <div className="service-details__top">
                        <div className="row">
                            <div className="col-xl-4 col-lg-8 order-2">
                                <div className="service-details__sidebar">
                                    <h2 className="service-details__sidebar-title">All Service</h2>
                                    <ul className="service-details__sidebar-list">
                                        <li className="service-details__sidebar-list-item"><Link href="/bedroom-cleaning">Bedroom Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/public" className="active">Window Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/office-cleaning">Office Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/commercial-cleaning">Commercial Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/house-cleaning">House Cleaning</Link></li>
                                        <li className="service-details__sidebar-list-item"><Link href="/car-cleaning">Car Cleaning</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-8 order-1">
                                <div className="service-details__top-img">
                                    <img src="/assets/images/resources/service-details-img3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="service-details__bottom">
                        <h2 className="service-details__bottom-title">Window Cleaning</h2>
                        <div className="service-details__bottom-text1">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or rando
                                mised words which don't look even slightly believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't anything this
                                embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                                tend to repeat predefined chunks as necessary, making
                                this the first true generator on the Internet. It uses a dictio words, combined with a
                                handful of </p>
                        </div>
                        <div className="service-details__bottom-text2">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or rando
                                mised words which don't look even slightly believable. If you are going to use a passage.
                            </p>
                        </div>
                        <div className="service-details__bottom-text3">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5">
                                    <div className="img-box">
                                        <img src="/assets/images/resources/service-details-img2.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-7">
                                    <div className="content-box">
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
                                            <li><span className="icon-plus"></span> Mbarrassing hidden in the middle of text</li>
                                            <li><span className="icon-plus"></span> Mbarrassing hidden in the middle of text</li>
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

export default WindowCleaning;
