"use client";

import HeaderOne from "../../common/header/HeaderOne";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import TestimonialTwo from "../../components/testimonial/TestimonialTwo";
import BrandTwo from "../../components/brand/BrandTwo";
import FooterOne from "../../common/footer/FooterOne";

export default function TestimonialPage() {
	return (
		<>
			<HeaderOne />
			<Breadcrumb 
                heading="Testimonial Page"
                currentPage="Testimonial" 
            />
			<TestimonialTwo />
			<BrandTwo />
			<FooterOne />
		</>
	);
}