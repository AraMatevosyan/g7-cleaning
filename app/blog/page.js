import BlogPageView from "../../views/routes/blog";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Blog Page");

export default function Page() {
  return <BlogPageView />;
}
