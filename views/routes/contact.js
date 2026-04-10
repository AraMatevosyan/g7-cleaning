"use client";

import HeaderOne from "../../common/header/HeaderOne";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactThree from "../../components/contact/ContactThree";
import ContactMap from "../../components/contact/ContactMap";
import FooterOne from "../../common/footer/FooterOne";

export default function ContactPage() {
	return (
		<>
			<HeaderOne />
			<Breadcrumb 
                heading="Contact Page"
                currentPage="Contact" 
            />
			<ContactInfo />
			<ContactThree />
			<ContactMap />
			<FooterOne />
		</>
	);
}