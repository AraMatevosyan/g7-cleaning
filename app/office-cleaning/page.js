import OfficeCleaningPageView from "../../views/routes/office-cleaning";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Office Cleaning");

export default function Page() {
  return <OfficeCleaningPageView />;
}
