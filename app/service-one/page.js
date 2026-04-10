import ServiceOnePageView from "../../views/routes/service-one";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Service");

export default function Page() {
  return <ServiceOnePageView />;
}
