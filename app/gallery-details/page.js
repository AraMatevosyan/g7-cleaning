import GalleryDetailsPageView from "../../views/routes/gallery-details";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Gallery Details");

export default function Page() {
  return <GalleryDetailsPageView />;
}
