import FaqPageView from "../../views/routes/faq";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Faq Page");

export default function Page() {
  return <FaqPageView />;
}
