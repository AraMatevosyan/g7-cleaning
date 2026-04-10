import GalleryOnePageView from "../../views/routes/gallery-one";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Gallery Page 1");

export default function Page() {
  return <GalleryOnePageView />;
}
