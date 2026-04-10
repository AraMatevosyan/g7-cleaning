import React from 'react';
import Link from 'next/link';

const BlogCategory = () => {
    return (
        <>
            <div className="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
                <h3 className="sidebar__title">Categories</h3>
                <ul className="sidebar__category-list list-unstyled">
                    <li><Link href="/blog-details">House Cleaning <span>(12)</span></Link></li>
                    <li className="active"><Link href="/blog-details">Apartment Cleaning<span>(10)</span></Link></li>
                    <li><Link href="/blog-details">Carpet Cleaning <span>(20)</span></Link></li>
                    <li><Link href="/blog-details">Commercial Cleaning<span>(30)</span></Link></li>
                    <li><Link href="/blog-details">Window Cleaning<span>(15)</span></Link></li>
                </ul>
            </div>
        </>
    )
}

export default BlogCategory;