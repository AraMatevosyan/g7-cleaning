"use client";

import HeaderOne from "../../common/header/HeaderOne";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import FaqOne from "../../components/faq/FaqOne";
import ContactTwo from "../../components/contact/ContactTwo";
import BrandOne from "../../components/brand/BrandOne";
import FooterOne from "../../common/footer/FooterOne";

export default function FaqPage() {
	return (
		<>
			<HeaderOne />
			<Breadcrumb 
                heading="Faq Page"
                currentPage="Faq" 
            />
			<FaqOne />
			<ContactTwo />
			<BrandOne />
			<FooterOne />
		</>
	);
}