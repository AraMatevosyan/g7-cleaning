"use client";

import HeaderOne from "../../common/header/HeaderOne";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import ServiceThree from "../../components/service/ServiceThree";
import BrandOne from "../../components/brand/BrandOne";
import CtaOne from "../../components/cta/CtaOne";
import FooterOne from "../../common/footer/FooterOne";

export default function ServicePageOne() {
	return (
		<>
			<HeaderOne />
			<Breadcrumb 
                heading="Service Page 2"
                currentPage="Service" 
            />
			<ServiceThree />
			<BrandOne />
			<CtaOne />
			<FooterOne />
		</>
	);
}