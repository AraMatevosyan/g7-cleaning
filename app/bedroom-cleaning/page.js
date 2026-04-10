import BedroomCleaningPageView from "../../views/routes/bedroom-cleaning";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Bedroom Cleaning");

export default function Page() {
  return <BedroomCleaningPageView />;
}
