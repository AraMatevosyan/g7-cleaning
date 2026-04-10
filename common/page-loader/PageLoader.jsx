"use client";

import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";

const PageLoader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setIsLoading(false);
        };

        if (document.readyState === "complete") {
            setIsLoading(false);
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);

    return (
        <div className={`page-loader ${!isLoading ? "page-loader--hidden" : ""}`}>
            <div className="page-loader__content">
                <Logo width={200} height={150} color="#fff" />
                <div className="page-loader__dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default PageLoader;
