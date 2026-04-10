import BlogGridPageView from "../../views/routes/blog-grid";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Blog Grid");

export default function Page() {
  return <BlogGridPageView />;
}
