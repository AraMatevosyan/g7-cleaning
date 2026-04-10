import ClientPageView from "../../views/routes/client";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Client Page");

export default function Page() {
  return <ClientPageView />;
}
