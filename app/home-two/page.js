import HomeTwoPageView from "../../views/routes/home-two";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Home Two");

export default function Page() {
  return <HomeTwoPageView />;
}
