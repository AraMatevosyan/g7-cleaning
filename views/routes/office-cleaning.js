"use client";

import HeaderOne from "../../common/header/HeaderOne";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import OfficeCleaning from "../../components/service/OfficeCleaning";
import BrandOne from "../../components/brand/BrandTwo";
import FooterOne from "../../common/footer/FooterOne";

export default function OfficeCleaningPage() {
	return (
		<>
			<HeaderOne />
			<Breadcrumb 
                heading="Office Cleaning"
                currentPage="Office Cleaning" 
            />
			<OfficeCleaning />
			<BrandOne />
			<FooterOne />
		</>
	);
}