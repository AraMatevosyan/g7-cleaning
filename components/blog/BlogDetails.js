import React from 'react';
import Link from 'next/link';
import BlogSearch from '../widgets/BlogSearch';
import BlogCategory from '../widgets/BlogCategory';
import BlogLatestPost from '../widgets/BlogLatestPost';
import BlogQuery from '../widgets/BlogQuery';
import BlogTags from '../widgets/BlogTags';

const BlogDetails = () => {
    return (
        <>
            <section class="blog-details">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8 col-lg-7">
                            <div class="blog-details__left">
                                <div class="blog-details__img">
                                    <img src="/assets/images/blog/blog-details-img-1.jpg" alt="" />
                                    <div class="blog-details__date">
                                        <p>10 <br /> Oct</p>
                                    </div>
                                </div>
                                <div class="blog-details__content">
                                    <ul class="blog-details__meta list-unstyled">
                                        <li><Link href="/blog-details"><i class="fa fa-comments"></i><span>(2)</span></Link></li>
                                        <li><Link href="/blog-details"><i class="fa fa-thumbs-up"></i><span>(2)</span></Link></li>
                                    </ul>
                                    <h3 class="blog-details__title">Top tips for kitchen cleaning</h3>
                                    <p class="blog-details__text-1">Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                        reprehenderit in voluptat velit esse cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat cupidatat none proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum. Sed ut is a perspiciatis unde omnis iste natus error sit
                                        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                                        illo inventore veritatis equasi architecto beatae vitae dicta sunt explicabo. Nemo
                                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                        consequuntur magni doloreeos qui ratione voluptatem sequi nesciunt. </p>
                                    <p class="blog-details__text-2">Excepteur sint occaecat cupidatat none proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum. Sed ut is a perspiciatis unde
                                        omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                                        aperiam, eaque ipsa quae ab illo inventore veritatis </p>
                                </div>
                                <div class="blog-details__content-two">
                                    <div class="blog-details__content-two-img">
                                        <img src="/assets/images/blog/blog-details-img-2.jpg" alt="" />
                                    </div>
                                    <div class="blog-details__content-two-details">
                                        <h3 class="blog-details__content-two-title">Top tips for house cleaning</h3>
                                        <p class="blog-details__content-two-text-1">Labore et dolore magna aliqua. Ut enim
                                            ad minim veniam, quis nexercitatiullamco laboris nisi ut aliquip ex ea commodo
                                            consequat. Duis aute irure dolreprehenderit in voluptate velit esse cillum
                                            dolore eu fugiat nulla pariatur. Excepteur sint </p>
                                        <p class="blog-details__content-two-text-2">Ut enim ad minim veniam, quis nostrud
                                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                            irure dolor in reprehenderit in voluptate </p>
                                        <ul class="blog-details__content-two-points">
                                            <li>Living so moveth won fish waters thing grass tree does not fresh there.</li>
                                            <li>Beast itself doesn't signs they are so together signs for the called.</li>
                                            <li>Male divide sixth cattle evening all shall over green may seasons said.</li>
                                            <li>Divided lights wherein wishing land bring deep abundantly also may.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="blog-details__bottom">
                                    <p class="blog-details__tags">
                                        <span>Tags</span>
                                        <a href="#">Cleaning</a>
                                        <a href="#">Business</a>
                                    </p>
                                    <div class="blog-details__social-list">
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-facebook"></i></a>
                                        <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                        <a href="#"><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div class="author-one">
                                    <div class="author-one__image">
                                        <img src="/assets/images/blog/author-1-1.jpg" alt="" />
                                    </div>
                                    <div class="author-one__content">
                                        <h3>Hover Cameron</h3>
                                        <p>Lorem ipsum is simply free text by copytyping refreshing. Neque porro est qui
                                            dolorem ipsum quia quaed veritatis et quasi architecto.</p>
                                    </div>
                                </div>
                                <div class="comment-one">
                                    <h3 class="comment-one__title">2 Comments</h3>
                                    <div class="comment-one__single">
                                        <div class="comment-one__image">
                                            <img src="/assets/images/blog/comment-1-1.jpg" alt="" />
                                        </div>
                                        <div class="comment-one__content">
                                            <h3>Suren Sumi</h3>
                                            <p>It has survived not only five centuries, but also the leap into electronic
                                                typesetting unchanged. It was popularised in the sheets containing lorem
                                                ipsum is simply free text.</p>
                                            <span>February 03. 2021</span>
                                            <Link href="/blog-details" class="comment-one__btn">Reply</Link>
                                        </div>
                                    </div>
                                    <div class="comment-one__single">
                                        <div class="comment-one__image">
                                            <img src="/assets/images/blog/comment-1-2.jpg" alt="" />
                                        </div>
                                        <div class="comment-one__content">
                                            <h3>Jessica Brown</h3>
                                            <p>It has survived not only five centuries, but also the leap into electronic
                                                typesetting unchanged. It was popularised in the sheets containing lorem
                                                ipsum is simply free text.</p>
                                            <span>February 03. 2021</span>
                                            <a href="blog-details.html" class="comment-one__btn">Reply</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="comment-form">
                                    <h3 class="comment-form__title">Leave A Reply</h3>
                                    <form action="#" class="comment-one__form contact-form-validated"
                                        novalidate="novalidate">
                                        <div class="row">
                                            <div class="col-xl-12">
                                                <div class="comment-form__input-box">
                                                    <input type="text" placeholder="Your Name" name="name" />
                                                </div>
                                            </div>
                                            <div class="col-xl-12">
                                                <div class="comment-form__input-box">
                                                    <input type="email" placeholder="Email Address" name="email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xl-12">
                                                <div class="comment-form__input-box comment-form__textarea">
                                                    <textarea name="message" placeholder="Write a Message"></textarea>
                                                </div>
                                                <div class="comment-form__btn-box">

                                                    <button class="thm-btn comment-form__btn" type="submit"
                                                        data-loading-text="Please wait...">
                                                        <span>Post Comment</span>
                                                        <i class="liquid"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
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

export default BlogDetails;