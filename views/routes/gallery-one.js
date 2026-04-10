"use client";

import HeaderOne from "../../common/header/HeaderOne";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import GalleryOne from "../../components/gallery/GalleryOne";
import CtaOne from "../../components/cta/CtaOne";
import FooterOne from "../../common/footer/FooterOne";

export default function GalleryOnePage() {
	return (
		<>
			<HeaderOne />
			<Breadcrumb 
                heading="Gallery Page 1"
                currentPage="Gallery" 
            />
			<GalleryOne />
			<CtaOne />
			<FooterOne />
		</>
	);
}