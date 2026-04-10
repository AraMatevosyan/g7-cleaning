import { buildPageMetadata } from "../lib/metadata";
import Link from "next/link";
import React from "react";

export const metadata = buildPageMetadata("Error Page");

const NotFound = () => (
    <section className="error-page" aria-labelledby="not-found-title">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="error-page__wrapper text-center">
                        <div className="error-page__content">
                            <p>404</p>
                            <h1 id="not-found-title">Oops! Page Not Found</h1>
                            <p>Sorry, but the page you are looking for does not exist.</p>
                            <div className="btn-box">
                                <Link href="/" className="thm-btn">
                                    <span>Go To Home</span>
                                    <div className="liquid"></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default NotFound;
