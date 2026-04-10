import React from 'react';
import TeamOne from './TeamOne';

const TeamDetails = () => {
    return (
        <>
            <section class="team-details">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5">
                            {/* Start Team Details Img */}
                            <div class="team-details__img js-tilt">
                                <img src="/assets/images/resources/team-detalis-img1.jpg" alt="" />
                            </div>
                            {/* End Team Details Img */}
                        </div>

                        <div class="col-xl-7">
                            {/* Start Team Details Content */}
                            <div class="team-details__content">
                                <div class="title">
                                    <h2>Team Details</h2>
                                </div>
                                <div class="name">
                                    <h6>Name : Md Imran Hossain</h6>
                                </div>
                                <div class="text">
                                    <p>About : Phis are bound to ensue; and equal blame belongs to those who
                                        through weakness of will, which is the same as through.We have the
                                        and industry expertise to develop solutions that can connect.</p>
                                </div>
                                <div class="number">
                                    <p>Call: <a href="tel:180050033333">++019999999</a></p>
                                </div>
                                <div class="social-icon">
                                    <div class="title">
                                        <h6>Follow us:</h6>
                                    </div>
                                    <ul>
                                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Team Details Content */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TeamDetails;