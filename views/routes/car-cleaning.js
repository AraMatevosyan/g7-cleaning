"use client";

import HeaderOne from "../../common/header/HeaderOne";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import CarCleaning from "../../components/service/CarCleaning";
import BrandOne from "../../components/brand/BrandTwo";
import FooterOne from "../../common/footer/FooterOne";

export default function FocusEmergencyPage() {
	return (
		<>
			<HeaderOne />
			<Breadcrumb 
                heading="Car Cleaning"
                currentPage="Car Cleaning" 
            />
			<CarCleaning />
			<BrandOne />
			<FooterOne />
		</>
	);
}