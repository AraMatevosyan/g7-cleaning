"use client";

import HeaderOne from "../../common/header/HeaderOne";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import HouseCleaning from "../../components/service/HouseCleaning";
import BrandOne from "../../components/brand/BrandTwo";
import FooterOne from "../../common/footer/FooterOne";

export default function BusinessOptionsPage() {
	return (
		<>
			<HeaderOne />
			<Breadcrumb 
                heading="House Cleaning"
                currentPage="House Cleaning" 
            />
			<HouseCleaning />
			<BrandOne />
			<FooterOne />
		</>
	);
}