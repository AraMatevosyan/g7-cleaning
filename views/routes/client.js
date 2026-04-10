"use client";

import HeaderOne from "../../common/header/HeaderOne";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import BrandThree from "../../components/brand/BrandThree";
import BrandOne from "../../components/brand/BrandOne";
import CtaOne from "../../components/cta/CtaOne";
import FooterOne from "../../common/footer/FooterOne";

export default function ClientPage() {
	return (
		<>
			<HeaderOne />
			<Breadcrumb 
                heading="Client Page"
                currentPage="Client Page" 
            />
			<BrandThree />
			<BrandOne />
			<CtaOne />
			<FooterOne />
		</>
	);
}