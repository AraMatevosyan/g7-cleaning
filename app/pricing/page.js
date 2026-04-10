import PricingPageView from "../../views/routes/pricing";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Pricing Page");

export default function Page() {
  return <PricingPageView />;
}
