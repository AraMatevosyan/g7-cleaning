import GalleryTwoPageView from "../../views/routes/gallery-two";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Gallery Page 2");

export default function Page() {
  return <GalleryTwoPageView />;
}
