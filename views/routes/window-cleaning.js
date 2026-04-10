"use client";

import HeaderOne from "../../common/header/HeaderOne";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import WindowCleaning from "../../components/service/WindowCleaning";
import BrandOne from "../../components/brand/BrandTwo";
import FooterOne from "../../common/footer/FooterOne";

export default function WindowCleaningPage() {
	return (
		<>
			<HeaderOne />
			<Breadcrumb 
                heading="Window Cleaning"
                currentPage="Window Cleaning" 
            />
			<WindowCleaning />
			<BrandOne />
			<FooterOne />
		</>
	);
}