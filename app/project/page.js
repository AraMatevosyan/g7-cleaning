import ProjectPageView from "../../views/routes/project";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Projects Page");

export default function Page() {
  return <ProjectPageView />;
}
