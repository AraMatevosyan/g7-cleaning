import WindowCleaningPageView from "../../views/routes/window-cleaning";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Window Cleaning");

export default function Page() {
  return <WindowCleaningPageView />;
}
