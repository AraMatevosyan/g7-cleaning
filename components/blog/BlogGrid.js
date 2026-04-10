import React from 'react';
import Link from 'next/link';
import { BlogGridData } from '../../data/blog';

const BlogGrid = () => {
    return (
        <>
            <section class="blog-one blog-one--blog blog-one--blog--grid">
                <div class="container">
                    <div class="row">
                        {BlogGridData.map((item, i) => (
                            <div key={i} class="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay={item.delay}>
                                <div class="blog-one__single">
                                    <div class="blog-one__single-img">
                                        <img src={item.image} alt={item.alt} />
                                        <div class="overlay-icon">
                                            <Link href={item.link}><span class="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                    <div class="blog-one__content">
                                        <div class="blog-one__content-bg"></div>
                                        <ul class="meta-info">
                                            <li><span class="icon-user"></span><a href="#">{item.author}</a></li>
                                            <li><span class="icon-wall-clock"></span><a href="#">{item.comment}</a>
                                            </li>
                                        </ul>
                                        <h2><Link href={item.link}>{item.heading}</Link></h2>
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

export default BlogGrid;
