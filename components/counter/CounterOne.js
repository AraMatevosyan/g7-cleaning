import React from 'react';

const CounterOne = () => {
    return (
        <>
            <section className="counter-one">
                <div className="container">
                    <div className="row">
                        {/* Start Counter One Single */}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1000ms">
                            <div className="counter-one__single">
                                <div className="counter-one__single-inner">
                                    <div className="icon-box">
                                        <span className="icon-certificate-1"></span>
                                    </div>
                                    <div className="text-box">
                                        <h3 className="odometer">500</h3>
                                        <span className="counter-one__letter">K</span>
                                        <span className="counter-one__plus">+</span>
                                        <p className="counter-one__text">Awards Win</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Counter One Single */}

                        {/* Start Counter One Single */}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms" data-wow-duration="1000ms">
                            <div className="counter-one__single">
                                <div className="counter-one__single-inner">
                                    <div className="icon-box">
                                        <span className="icon-rating"></span>
                                    </div>
                                    <div className="text-box">
                                        <h3 className="odometer">1002</h3>
                                        <span className="counter-one__letter">K</span>
                                        <p className="counter-one__text">Completed Project</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Counter One Single */}

                        {/* Start Counter One Single */}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1000ms">
                            <div className="counter-one__single">
                                <div className="counter-one__single-inner">
                                    <div className="icon-box">
                                        <span className="icon-certificate"></span>
                                    </div>
                                    <div className="text-box">
                                        <h3 className="odometer">566</h3>
                                        <span className="counter-one__letter">K</span>
                                        <span className="counter-one__plus">+</span>
                                        <p className="counter-one__text">Happy Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Counter One Single */}

                        {/* Start Counter One Single */}
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="100ms" data-wow-duration="1000ms">
                            <div className="counter-one__single">
                                <div className="counter-one__single-inner">
                                    <div className="icon-box">
                                        <span className="icon-computer"></span>
                                    </div>
                                    <div className="text-box">
                                        <h3 className="odometer">450</h3>
                                        <span className="counter-one__letter">K</span>
                                        <span className="counter-one__plus">+</span>
                                        <p className="counter-one__text">Finish The Job</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Counter One Single */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CounterOne;