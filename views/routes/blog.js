"use client";

import HeaderOne from "../../common/header/HeaderOne";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import BlogThree from "../../components/blog/BlogThree";
import BrandOne from "../../components/brand/BrandTwo";
import FooterOne from "../../common/footer/FooterOne";

export default function BlogPage() {
	return (
		<>
			<HeaderOne />
			<Breadcrumb 
                heading="Blog Page"
                currentPage="Blog" 
            />
			<BlogThree />
			<BrandOne />
			<FooterOne />
		</>
	);
}