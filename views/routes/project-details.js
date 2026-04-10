"use client";

import HeaderOne from "../../common/header/HeaderOne";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import ProjectDetails from "../../components/project/ProjectDetails";
import BrandOne from "../../components/brand/BrandTwo";
import FooterOne from "../../common/footer/FooterOne";

export default function ProjectDetailsPage() {
	return (
		<>
			<HeaderOne />
			<Breadcrumb 
                heading="Projects Details"
                currentPage="Projects Details" 
            />
			<ProjectDetails />
			<BrandOne />
			<FooterOne />
		</>
	);
}