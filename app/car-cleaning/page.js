import CarCleaningPageView from "../../views/routes/car-cleaning";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Car Cleaning");

export default function Page() {
  return <CarCleaningPageView />;
}
