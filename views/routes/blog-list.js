"use client";

import HeaderOne from "../../common/header/HeaderOne";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import BlogList from "../../components/blog/BlogList";
import BrandOne from "../../components/brand/BrandOne";
import FooterOne from "../../common/footer/FooterOne";

export default function BlogListPage() {
	return (
		<>
			<HeaderOne />
			<Breadcrumb 
                heading="Blog List"
                currentPage="Blog List" 
            />
			<BlogList />
			<BrandOne />
			<FooterOne />
		</>
	);
}