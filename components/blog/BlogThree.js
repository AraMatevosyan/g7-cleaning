import React, { useEffect } from 'react';
import { BlogThreeData } from '../../data/blog';
import Link from 'next/link';

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
                '<span class="icon-left-arrow"></span>',
                '<span class="icon-right-arrow"></span>'
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
            <section class="blog-one blog-one--blog">
                <div class="container">
                    <div class="section-title text-center">
                        <span class="section-title__tagline">Our Blog</span>
                        <h2 class="section-title__title">Latest News & Articles</h2>
                    </div>
                    <div class="row">
                        {BlogThreeData.map((item, i) => (
                            <div key={i} class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay={item.delay}>
                                <div class="blog-one__single">
                                    <div class="blog-one__single-img">
                                        <img src={item.image} alt={item.alt}  />
                                        <div class="overlay-icon">
                                            <Link href={item.link}><span class="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                    <div class="blog-one__content">
                                        <ul class="meta-info">
                                            <li><span class="icon-user"></span><a href="#">{item.author}</a></li>
                                            <li><span class="icon-wall-clock"></span><a href="#">{item.comment}</a>
                                            </li>
                                        </ul>
                                        <h2><Link href={item.link}>{item.heading}</Link></h2>
                                        <p>{item.description}</p>
                                        <div class="btn-box">
                                            <Link href={item.link}>Read More <span class="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Start Styled Pagination */}
                    <div class="row">
                        <div class="col-xl-12">
                            <ul class="styled-pagination text-center clearfix">
                                <li class="prev"><a href="#"><span class="fa fa-angle-double-left"></span></a></li>
                                <li><a href="#" class="active">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li class="next"><a href="#"><span class="fa fa-angle-double-right"></span></a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Start Styled Pagination */}
                </div>
            </section>
        </>
    )
}

export default BlogOne;
