"use client"

import React, { useEffect } from 'react';
import { FaqOneData } from '../../data/faq';

const FAQ_GROUP_NAME = "faq-one-accrodion-1";
const FAQ_SECTION_IMAGE = "/assets/images/resources/faq-img.webp";

const FaqOne = () => {

    useEffect(() => {

      const accordionGroups = $(".accrodion-grp");

      if (!accordionGroups.length) {
        return;
      }

      accordionGroups.each(function () {
        const accordionName = $(this).data("grp-name");
        const group = $(this);
        const accordions = group.find(".accrodion");

        group.addClass(accordionName);
        group.find(".accrodion .accrodion-content").hide();
        group.find(".accrodion.active .accrodion-content").show();

        accordions.each(function () {
          $(this)
            .find(".accrodion-title")
            .on("click", function () {
              const accordionItem = $(this).parent();
              const accordionSelector = `.accrodion-grp.${accordionName} .accrodion`;

              if (accordionItem.hasClass("active")) {
                return;
              }

              $(accordionSelector).removeClass("active");
              $(`${accordionSelector} .accrodion-content`).slideUp();
              accordionItem.addClass("active");
              accordionItem.find(".accrodion-content").slideDown();
            });
        });
      });
          
    }, []);

    return (
        <>
            <section className="faq-one pd-120-0-120" id="faq">
                <div className="container">
                    <div className="section-title__style2">
                        <div className="section-title">
                            <span className="section-title__tagline">Frequently Asked Questions</span>
                            <h2 className="section-title__title">
                                Got Questions? We’ve Got Answers
                            </h2>
                        </div>

                        <div className="text-box">
                            <p>
                                Find answers to the most common questions about our cleaning services,
                                pricing, and booking process. If you need more details, feel free to contact us anytime.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="faq-one__content">
                                <div className="faq-one__faq">
                                    <div className="accrodion-grp faq-one-accrodion" data-grp-name={FAQ_GROUP_NAME}>
                                        {FaqOneData.map((item) => (
                                            <article
                                                key={item.id}
                                                className={`accrodion wow fadeInUp ${item.open || ""}`.trim()}
                                                data-wow-delay={item.delay}
                                                data-wow-duration={item.duration}
                                            >
                                                <div className="accrodion-title">
                                                    <div className="accrodion-title-inner">
                                                        <div className="icon">
                                                            <span className="icon-maps-and-flags" aria-hidden="true"></span>
                                                        </div>
                                                        <div className="text">
                                                            <h4>{item.heading}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accrodion-content">
                                                    <div className="inner">
                                                        <div className="img-box">
                                                            <img src={item.image} alt={`${item.heading} illustration`} />
                                                        </div>
                                                        <div className="text">
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="faq-one__img">
                                <img src={FAQ_SECTION_IMAGE} alt="Customer support and cleaning consultation illustration" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FaqOne;
