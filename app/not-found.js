import { buildPageMetadata } from "../lib/metadata";
import Link from "next/link";
import React from "react";

export const metadata = buildPageMetadata("Error Page");

const NotFound = () => (
    <section className="error-page">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="error-page__wrapper text-center">
                        <div className="error-page__content">
                            <h2>404</h2>
                            <h3>Opps! Page Not Found</h3>
                            <p>Sorry, but the page you are looking for does not exist.</p>
                            <div className="btn-box">
                                <Link href="/" class="thm-btn">
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
