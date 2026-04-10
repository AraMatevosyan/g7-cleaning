import HouseCleaningPageView from "../../views/routes/house-cleaning";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("House Cleaning");

export default function Page() {
  return <HouseCleaningPageView />;
}
