import BlogListPageView from "../../views/routes/blog-list";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Blog List");

export default function Page() {
  return <BlogListPageView />;
}
