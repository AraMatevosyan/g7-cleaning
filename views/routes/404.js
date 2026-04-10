"use client";

import HeaderOne from "../../common/header/HeaderOne";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import ErrorContent from "../../components/error/ErrorContent";
import FooterOne from "../../common/footer/FooterOne";

export default function ErrorPage() {
	return (
		<>
			<HeaderOne />
			<Breadcrumb 
                heading="Error Page"
                currentPage="404" 
            />
			<ErrorContent />
			<FooterOne />
		</>
	);
}