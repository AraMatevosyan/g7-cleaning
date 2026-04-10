import BlogDetailsPageView from "../../views/routes/blog-details";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Blog Details Page");

export default function Page() {
  return <BlogDetailsPageView />;
}
