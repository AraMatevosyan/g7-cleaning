"use client";

import HeaderOne from "../../common/header/HeaderOne";
import Breadcrumb from "../../common/breadcrumb/Breadcrumb";
import GalleryTwo from "../../components/gallery/GalleryTwo";
import CtaOne from "../../components/cta/CtaOne";
import FooterOne from "../../common/footer/FooterOne";

export default function GalleryOnePage() {
	return (
		<>
			<HeaderOne />
			<Breadcrumb 
                heading="Gallery Page 2"
                currentPage="Gallery" 
            />
			<GalleryTwo />
			<CtaOne />
			<FooterOne />
		</>
	);
}