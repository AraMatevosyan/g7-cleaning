import ContactPageView from "../../views/routes/contact";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Contact Page");

export default function Page() {
  return <ContactPageView />;
}
