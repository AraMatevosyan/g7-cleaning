import React from 'react';

const BlogSearch = () => {
    return (
        <>
            <div className="sidebar__single sidebar__search wow animated fadeInUp" data-wow-delay="0.1s">
                <form action="#" className="sidebar__search-form">
                    <input type="search" placeholder="Search here" />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
        </>
    )
}

export default BlogSearch;