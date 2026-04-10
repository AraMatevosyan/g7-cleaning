import React from 'react';
import Link from 'next/link';

const BlogTags = () => {
    return (
        <>
            <div className="sidebar__single sidebar__tags wow animated fadeInUp" data-wow-delay="0.5s">
                <h3 className="sidebar__title">Tags</h3>
                <div className="sidebar__tags-list">
                    <Link href="/public">Cleaner</Link>
                    <Link href="/public">Office Cleaning</Link>
                    <Link href="/public">Safety</Link>
                    <Link href="/public">Floor Cleaning</Link>
                    <Link href="/public">Covid19</Link>
                    <Link href="/public">Kitchen Cleaning</Link>
                    <Link href="/public">House Cleaning</Link>
                </div>
            </div>
        </>
    )
}

export default BlogTags;
