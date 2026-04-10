import React from 'react';
import Link from 'next/link';
import { BlogStandardData } from '../../data/blog';
import BlogSearch from '../widgets/BlogSearch';
import BlogCategory from '../widgets/BlogCategory';
import BlogLatestPost from '../widgets/BlogLatestPost';
import BlogQuery from '../widgets/BlogQuery';
import BlogTags from '../widgets/BlogTags';

const BlogStandard = () => {
    return (
        <>

            <section class="blog-standard">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8 col-lg-7">
                            <div class="blog-standard__left">
                                {BlogStandardData.map((item, i) => (
                                    <div key={i} class="blog-standard__single">
                                        <div class="blog-standard__single-img">
                                            <img src={item.image} alt={item.alt} />
                                            <div class="blog-standard__date">
                                                <p>{item.date}</p>
                                            </div>
                                        </div>
                                        <div class="blog-standard__single-content">
                                            <ul class="meta-info">
                                                <li><span class="icon-user"></span><a href="#">{item.author}</a></li>
                                                <li><span class="icon-wall-clock"></span><a href="#">{item.comment}</a></li>
                                            </ul>
                                            <h2><Link href={item.link}>{item.heading}</Link></h2>
                                            <p>{item.description}</p>
                                            <div class="btn-box">
                                                <Link href={item.link}>Read More <span class="icon-plus"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Start Styled Pagination */}
                                <div class="row">
                                    <div class="col-xl-12">
                                        <ul class="styled-pagination clearfix">
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
                        </div>

                        <div class="col-xl-4 col-lg-5">
                            <div class="sidebar">
                                <BlogSearch />
                                <BlogCategory />
                                <BlogLatestPost />
                                <BlogQuery />
                                <BlogTags />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogStandard;
