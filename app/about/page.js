import AboutPageView from "../../views/routes/about";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("About");

export default function Page() {
  return <AboutPageView />;
}
