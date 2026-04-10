import TestimonialPageView from "../../views/routes/testimonial";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Testimonial Page");

export default function Page() {
  return <TestimonialPageView />;
}
