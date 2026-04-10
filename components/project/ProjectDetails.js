import React, { useEffect } from 'react';

const ProjectDetails = () => {
    useEffect(() => {

        if ($(".projects-detalis__content-carousel").length) {
            $(".projects-detalis__content-carousel").owlCarousel({
              loop: true,
              margin: 30,
              nav: true,
              smartSpeed: 500,
              autoHeight: false,
              autoplay: true,
              dots: true,
              autoplayTimeout: 10000,
              navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right right"></span>'],
              responsive: {
                0: {
                  items: 1
                },
                600: {
                  items: 1
                },
                800: {
                  items: 1
                },
                1024: {
                  items: 1
                },
                1200: {
                  items: 1
                }
              }
            });
        }
      
    }, []);
    return (
        <>
            <section className="projects-detalis">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="projects-detalis__content">
                                <div className="projects-detalis__content-carousel owl-carousel owl-theme">
                                    <div className="single-img">
                                        <img src="/assets/images/resources/projects-detalis-img1.jpg" alt="" />
                                    </div>

                                    <div className="single-img">
                                        <img src="/assets/images/resources/projects-detalis-img2.jpg" alt="" />
                                    </div>
                                </div>

                                <div className="projects-detalis__content-text1">
                                    <h2>Project Description</h2>
                                    <p>It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is that
                                        it has a more-or-less normal distribution of letters, as opposed to using 'Content
                                        here, content here', making it look like readable English. Many desktop publishing
                                        packages and web page editors now use Lorem Ipsum as their default model text, and a
                                        search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                                        versions have evolved over the years, sometimes by accident, sometimes on purpose
                                        (injected humour and the like).</p>
                                </div>

                                <div className="projects-detalis__content-text2">
                                    <h2>Challenges</h2>
                                    <p className="text1">Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                        has roots in a piece of classical Latin literature from 45 BC, making it over 2000
                                        years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
                                        Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                                        Ipsum passage, and going through the cites of the word in classical literature,
                                        discovered the undoubtable source</p>
                                    <ul>
                                        <li><span className="icon-maps-and-flags"></span> It is a long established fact</li>
                                        <li><span className="icon-maps-and-flags"></span> There are many variations of passages
                                        </li>
                                        <li><span className="icon-maps-and-flags"></span> It is a long established</li>
                                        <li><span className="icon-maps-and-flags"></span> Many desktop publishing packages</li>

                                    </ul>
                                    <p className="text2">The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                                        below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
                                        Malorum" by Cicero are also reproduced in their exact original form, accompanied by
                                        English versions from the 1914 translation by H. Rackham.</p>
                                </div>

                                <div className="projects-detalis__content-text3">
                                    <h2>Solutions</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                        suffered alteration in some form, by injected humour, or randomised words which
                                        don't look even slightly believable. If you are going to use a passage of Lorem
                                        Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
                                        text. </p>
                                    <ul>
                                        <li><span className="icon-maps-and-flags"></span> Increasing revenue growth in 2023</li>
                                        <li><span className="icon-maps-and-flags"></span> It is a long established</li>
                                        <li><span className="icon-maps-and-flags"></span> The point of using</li>
                                        <li><span className="icon-maps-and-flags"></span> Many desktop publishing packages</li>
                                        <li><span className="icon-maps-and-flags"></span> There are many variations of passages
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-5">
                            <div className="projects-detalis__sidebar">
                                <div className="projects-detalis__sidebar-single wow animated fadeInUp" data-wow-delay="0.1s">
                                    <div className="title">
                                        <h2>Project Information</h2>
                                    </div>
                                    <div className="projects-detalis__sidebar-project-info">
                                        <div className="text">
                                            <p>It is a long established fact that a reader will be distracted</p>
                                        </div>
                                        <ul>
                                            <li><span>Category</span>Office Cleaning</li>
                                            <li><span>Client</span>Unick Theme</li>
                                            <li><span>Start</span>04.04.2023</li>
                                            <li><span>End</span>01.06.2023</li>
                                            <li><span>Website</span>www.unicktheme.com</li>
                                            <li><span>Rating</span>
                                                <ul className="item-rating">
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                    <li><i className="fas fa-star"></i></li>
                                                </ul>
                                            </li>
                                        </ul>

                                    </div>
                                </div>

                                <div className="projects-detalis__sidebar-single pd-b22 wow animated fadeInUp"
                                    data-wow-delay="0.3s">
                                    <div className="projects-detalis__sidebar-recent-post">
                                        <div className="title">
                                            <h2>Recent Posts</h2>
                                        </div>
                                        <ul className="projects-detalis__sidebar-recent-post-list">
                                            <li>
                                                <div className="post-date"><i className="far fa-clock"></i> 21 June, 2023 </div>
                                                <h4><a href="#">It is a long established fact that a reader </a></h4>
                                            </li>
                                            <li>
                                                <div className="post-date"><i className="far fa-clock"></i> 21 June, 2023</div>
                                                <h4><a href="#">There are many variations of passages</a></h4>
                                            </li>
                                            <li>
                                                <div className="post-date"><i className="far fa-clock"></i> 21 June, 2023 </div>
                                                <h4><a href="#">The standard chunk of Lorem Ipsum used</a></h4>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="projects-detalis__sidebar-discount wow animated fadeInUp" data-wow-delay="0.5s">
                                    <div className="img-box">
                                        <img src="/assets/images/resources/projects-detalis-img3.jpg" alt="" />
                                        <div className="content-box">
                                            <h2><span>50 </span>% Discount</h2>
                                            <h4>Promotion Offer 20 Days</h4>
                                            <div className="btn-box">
                                                <a href="contact.html" className="thm-btn">
                                                    <span>Contact With US</span>
                                                    <div className="liquid"></div>
                                                </a>
                                            </div>
                                        </div>
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

export default ProjectDetails;