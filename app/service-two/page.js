import ServiceTwoPageView from "../../views/routes/service-two";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Service");

export default function Page() {
  return <ServiceTwoPageView />;
}
