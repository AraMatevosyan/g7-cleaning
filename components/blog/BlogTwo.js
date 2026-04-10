import React from 'react';
import Link from 'next/link';
import { BlogTwoData } from '../../data/blog';

const BlogTwo = () => {
    return (
        <>
            <section className="blog-one blog-one--two pd-120-0-120">
                <div className="container">
                    <div className="section-title__style2">
                        <div className="section-title">
                            <span className="section-title__tagline">Our Blog</span>
                            <h2 className="section-title__title">Latest News & Articles</h2>
                        </div>
                        <div className="text-box">
                            <p>will reenergize your ome and enhance your life. From everyday housekeeping to routine
                                cleanings, our professional this to members can provide you.</p>
                        </div>
                    </div>
                    <div className="row">
                        {BlogTwoData.map((item, i) => (
                            <div key={i} className="col-xl-4 col-lg-4">
                                <div className="blog-one__single">
                                    <div className="blog-one__single-img">
                                        <img src={item.image} alt={item.alt} />
                                        <div className="overlay-icon">
                                            <Link href={item.link}><span className="icon-plus"></span></Link>
                                        </div>
                                    </div>
                                    <div className="blog-one__content">
                                        <h2><Link href={item.link}>{item.heading}</Link></h2>
                                        <p>{item.description}</p>
                                        <div className="btn-box">
                                            <Link href={item.link}>Read More <span className="icon-plus"></span></Link>
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

export default BlogTwo;
