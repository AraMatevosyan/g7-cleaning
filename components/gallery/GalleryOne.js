import React, { useEffect } from 'react';

const GalleryOne = () => {

    useEffect(() => {

      if ($(".masonary-layout").length) {
        $(".masonary-layout").isotope({
          layoutMode: "masonry"
        });
      }

      if ($(".post-filter").length) {
        $(".post-filter li")
          .children(".filter-text")
          .on("click", function () {
            var Self = $(this);
            var selector = Self.parent().attr("data-filter");
            $(".post-filter li").removeClass("active");
            Self.parent().addClass("active");
            $(".filter-layout").isotope({
              filter: selector,
              animationOptions: {
                duration: 500,
                easing: "linear",
                queue: false
              }
            });
            return false;
          });
      }

      if ($(".post-filter.has-dynamic-filters-counter").length) {
        // var allItem = $('.single-filter-item').length;
        var activeFilterItem = $(".post-filter.has-dynamic-filters-counter").find(
          "li"
        );
        activeFilterItem.each(function () {
          var filterElement = $(this).data("filter");
          var count = $(".filter-layout").find(filterElement).length;
          $(this)
            .children(".filter-text")
            .append('<span class="count">(' + count + ")</span>");
        });
      }

      if ($(".img-popup").length) {
        var groups = {};
        $(".img-popup").each(function () {
          var id = parseInt($(this).attr("data-group"), 10);
    
          if (!groups[id]) {
            groups[id] = [];
          }
    
          groups[id].push(this);
        });
    
        $.each(groups, function () {
          $(this).magnificPopup({
            type: "image",
            closeOnContentClick: true,
            closeBtnInside: false,
            gallery: {
              enabled: true
            }
          });
        });
      }
          
    }, []);

    return (
        <>
            <section class="gallery-page">
                <div class="container">
                    <div class="row">
                        {/* Start case-studies-one Top */}
                        <div class="gallery-page__top">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div class="gallery-page__menu-box">
                                    <ul class="project-filter clearfix post-filter has-dynamic-filters-counter">
                                        <li data-filter=".filter-item" class="active"><span class="filter-text">Show All</span></li>
                                        <li data-filter=".house"><span class="filter-text">House</span></li>
                                        <li data-filter=".floor"><span class="filter-text">Floor </span></li>
                                        <li data-filter=".kitchen"><span class="filter-text">Kitchen</span></li>
                                        <li data-filter=".toilet"><span class="filter-text">Toilet</span></li>
                                        <li data-filter=".office"><span class="filter-text">Office</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* End case-studies-one Top */}
                    </div>


                    <div class="row filter-layout masonary-layout">
                        {/* Start Gallery Page Single */}
                        <div class="col-xl-4 col-lg-4 col-md-6 filter-item house office">
                            <div class="gallery-page__single wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div class="gallery-page__single-img">
                                    <img src="/assets/images/gallery/gallery-page-img1.jpg" alt="" />
                                    <div class="gallery-page__single-icon">
                                        <a class="img-popup" href="/assets/images/gallery/gallery-page-img1.jpg"><span class="icon-plus"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Gallery Page Single */}

                        {/* Start Gallery Page Single */}
                        <div class="col-xl-4 col-lg-4 col-md-6 filter-item toilet floor">
                            <div class="gallery-page__single wow fadeInUp" data-wow-delay="200ms"
                                data-wow-duration="1500ms">
                                <div class="gallery-page__single-img">
                                    <img src="/assets/images/gallery/gallery-page-img2.jpg" alt="" />
                                    <div class="gallery-page__single-icon">
                                        <a class="img-popup" href="/assets/images/gallery/gallery-page-img2.jpg"><span class="icon-plus"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Gallery Page Single */}

                        {/* Start Gallery Page Single */}
                        <div class="col-xl-4 col-lg-4 col-md-6 office kitchen filter-item">
                            <div class="gallery-page__single wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div class="gallery-page__single-img">
                                    <img src="/assets/images/gallery/gallery-page-img3.jpg" alt="" />
                                    <div class="gallery-page__single-icon">
                                        <a class="img-popup" href="/assets/images/gallery/gallery-page-img3.jpg"><span class="icon-plus"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Gallery Page Single */}

                        {/* Start Gallery Page Single */}
                        <div class="col-xl-4 col-lg-4 col-md-6 filter-item floor house kitchen">
                            <div class="gallery-page__single wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div class="gallery-page__single-img">
                                    <img src="/assets/images/gallery/gallery-page-img4.jpg" alt="" />
                                    <div class="gallery-page__single-icon">
                                        <a class="img-popup" href="/assets/images/gallery/gallery-page-img4.jpg"><span class="icon-plus"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Gallery Page Single */}

                        {/* Start Gallery Page Single */}
                        <div class="col-xl-4 col-lg-4 col-md-6 filter-item house toilet kitchen">
                            <div class="gallery-page__single wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div class="gallery-page__single-img">
                                    <img src="/assets/images/gallery/gallery-page-img5.jpg" alt="" />
                                    <div class="gallery-page__single-icon">
                                        <a class="img-popup" href="/assets/images/gallery/gallery-page-img5.jpg"><span class="icon-plus"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Gallery Page Single */}

                        {/* Start Gallery Page Single */}
                        <div class="col-xl-4 col-lg-4 col-md-6 filter-item kitchen house floor">
                            <div class="gallery-page__single wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div class="gallery-page__single-img">
                                    <img src="/assets/images/gallery/gallery-page-img6.jpg" alt="" />
                                    <div class="gallery-page__single-icon">
                                        <a class="img-popup" href="/assets/images/gallery/gallery-page-img6.jpg"><span class="icon-plus"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Gallery Page Single */}
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default GalleryOne;