import React, { useEffect } from 'react';
import { BlogOneData } from '../../data/blog';

const BlogOne = () => {

    useEffect(() => {

        if ($(".blog-one__carousel").length) {
            $(".blog-one__carousel").owlCarousel({
              loop: true,
              margin: 30,
              nav: false,
              smartSpeed: 500,
              autoHeight: false,
              autoplay: true,
              dots: true,
              autoplayTimeout: 10000,
              navText: [
                '<span className="icon-left-arrow"></span>',
                '<span className="icon-right-arrow"></span>'
              ],
              responsive: {
                0: {
                  items: 1
                },
                600: {
                  items: 1
                },
                800: {
                  items: 2
                },
                1024: {
                  items: 3
                },
                1200: {
                  items: 3
                }
              }
            });
        }
          
    }, []);

    return (
        <>
            <section className="blog-one pd-120-0-120">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="section-title__tagline">Our Blog</span>
                        <h2 className="section-title__title">Latest News & Articles</h2>
                    </div>
                    <div className="row">
                        {BlogOneData.map((item, i) => (
                            <div key={i} className="col-xl-4 col-lg-4">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={item.image} alt={item.alt} />
                                        <div className="overlay-icon">
                                            <a href={item.link}><span className="icon-plus"></span></a>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <h2><a href={item.link}>{item.heading}</a></h2>
                                        <p>{item.description}</p>
                                        <div className="btn-box">
                                            <a href={item.link}>{item.btn} <span className="icon-plus"></span></a>
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

export default BlogOne;
