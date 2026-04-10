import BlogStandardPageView from "../../views/routes/blog-standard";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Blog Standard");

export default function Page() {
  return <BlogStandardPageView />;
}
