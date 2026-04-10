import React from 'react';
import QueryImg from '../../public/assets/images/backgrounds/sidebar-support-bg.jpg';

const BlogQuery = () => {
    return (
        <>
            <div className="sidebar__single sidebar__support wow animated fadeInUp" data-wow-delay="0.4s">
                <div className="sidebar__support-bg" style={{backgroundImage: `url(${QueryImg.src})`}}></div>
                <h3 className="sidebar__suppot-title">Have Any Query?</h3>
                <p className="sidebar__suppot-text">Great fruit grass their are first over spirit good whose very subdue</p>
                <div className="sidebar__support-btn-box">
                    <button type="submit" className="thm-btn sidebar__support-btn">
                        <span>Send Message</span>
                        <i className="liquid"></i>
                    </button>
                </div>
            </div>
        </>
    )
}

export default BlogQuery;
