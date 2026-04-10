"use client";

import React, { useEffect } from "react";

const tabItems = [
    {
        id: "reliable",
        label: "Reliable Service",
        isActive: true,
    },
    {
        id: "flexible",
        label: "Flexible Scheduling",
    },
    {
        id: "quality",
        label: "High Quality",
    },
    {
        id: "trusted",
        label: "Trusted Team",
    },
];

const tabContentMap = {
    reliable: {
        title: ["Dependable Cleaning", "Every Time"],
        description:
            "At G7 Cleaning LLC, we believe consistency matters. Our team shows up on time, follows your instructions, and delivers the kind of results you can count on.",
        listItems: [
            "On-time and dependable service",
            "Consistent cleaning quality on every visit",
            "Clear communication and easy booking",
            "Attention to detail in every room",
            "Residential and commercial cleaning available",
            "Service tailored to your needs",
        ],
        image: "/assets/images/resources/tab-v1-img.jpg",
    },

    flexible: {
        title: ["Cleaning That Fits", "Your Schedule"],
        description:
            "Whether you need a one-time service, recurring cleaning, move-in or move-out support, we offer flexible scheduling options designed around your routine.",
        listItems: [
            "Weekly, bi-weekly, and monthly services",
            "One-time and recurring cleaning options",
            "Move-in and move-out cleaning available",
            "Hourly cleaning for custom requests",
            "Convenient booking process",
            "Service plans for homes and apartments",
        ],
        image: "/assets/images/resources/tab-v2-img.jpg",
    },

    quality: {
        title: ["Detailed Cleaning", "With Real Care"],
        description:
            "We focus on the details that make a real difference. From kitchens and bathrooms to floors and surfaces, our cleaners work carefully to leave your space fresh and spotless.",
        listItems: [
            "Deep cleaning for extra attention",
            "Thorough bathroom and kitchen cleaning",
            "Vacuuming and mopping floors",
            "Careful surface and dust removal",
            "Post-construction cleaning available",
            "Custom priorities based on your needs",
        ],
        image: "/assets/images/resources/tab-v4-img.jpg",
    },

    trusted: {
        title: ["A Team You Can", "Feel Good About"],
        description:
            "We understand that inviting someone into your home or business requires trust. That’s why we focus on professionalism, respect, and customer satisfaction from start to finish.",
        listItems: [
            "Professional and respectful cleaners",
            "Safe and effective cleaning products",
            "Great care for your home and belongings",
            "Friendly customer-focused service",
            "Ideal for recurring maintenance cleaning",
            "Committed to your satisfaction",
        ],
        image: "/assets/images/resources/tab-v3-img.jpg",
    },
};

const WhyChooseUsOne = () => {
    useEffect(() => {
        const tabsBox = $(".tabs-box");

        if (tabsBox.length) {
            $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
                e.preventDefault();

                const target = $($(this).attr("data-tab"));

                if (target.is(":visible")) {
                    return false;
                }

                target
                    .parents(".tabs-box")
                    .find(".tab-buttons .tab-btn")
                    .removeClass("active-btn");

                $(this).addClass("active-btn");

                target
                    .parents(".tabs-box")
                    .find(".tabs-content .tab")
                    .fadeOut(0)
                    .removeClass("active-tab");

                target.fadeIn(300).addClass("active-tab");
            });
        }

        if ($(".video-popup").length) {
            $(".video-popup").magnificPopup({
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: true,
                fixedContentPos: false,
            });
        }

        return () => {
            $(".tabs-box .tab-buttons .tab-btn").off("click");
        };
    }, []);

    return (
        <section className="tab-one pd-120-0-120 clearfix" id="why-choose-us">
            <div className="container">
                <div className="section-title text-center">
                    <span className="section-title__tagline">Why Choose Us</span>
                    <h2 className="section-title__title">
                        The Cleaning Service You Can Trust
                    </h2>
                </div>

                <div className="tab-one__tabs tabs-box">
                        <ul className="tab-buttons clearfix" role="list">
                            {tabItems.map((tab) => (
                                <li
                                    key={tab.id}
                                data-tab={`#${tab.id}`}
                                className={`tab-btn ${tab.isActive ? "active-btn" : ""}`.trim()}
                            >
                                <span>{tab.label}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="tabs-content">
                        {tabItems.map((tab) => {
                            const content = tabContentMap[tab.id];

                            return (
                                <div
                                    key={tab.id}
                                    className={`tab ${tab.isActive ? "active-tab" : ""}`.trim()}
                                    id={tab.id}
                                    style={{ display: tab.isActive ? "block" : "none" }}
                                >
                                    <div className="row clearfix">
                                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                            <div className="tab-one__content">
                                                <div className="title">
                                                    <h3>
                                                        {content.title[0]} <br /> {content.title[1]}
                                                    </h3>
                                                </div>

                                                <div className="text">
                                                    <p>{content.description}</p>
                                                </div>

                                                <ul className="tab-one__content-list" role="list">
                                                    {content.listItems.map((item, index) => (
                                                        <li key={`${tab.id}-${index}`}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                            <div className="tab-one__img">
                                                <img src={content.image} alt={`${tab.label} cleaning service illustration`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsOne;
