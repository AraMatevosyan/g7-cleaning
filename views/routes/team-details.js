"use client";

import HeaderOne from "../../common/header/HeaderOne";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import TeamDetails from "../../components/team/TeamDetails";
import TeamOne from "../../components/team/TeamOne";
import ContactFour from "../../components/contact/ContactFour";
import BrandOne from "../../components/brand/BrandTwo";
import FooterOne from "../../common/footer/FooterOne";

export default function TeamDetailsPage() {
	return (
		<>
			<HeaderOne />
			<Breadcrumb 
                heading="Team Details"
                currentPage="Team Details" 
            />
			<TeamDetails />
			<TeamOne />
			<ContactFour />
			<BrandOne />
			<FooterOne />
		</>
	);
}