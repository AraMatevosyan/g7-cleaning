import CommercialCleaningPageView from "../../views/routes/commercial-cleaning";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Commercial Cleaning");

export default function Page() {
  return <CommercialCleaningPageView />;
}
