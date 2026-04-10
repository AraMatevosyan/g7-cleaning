import ProjectDetailsPageView from "../../views/routes/project-details";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Projects Details");

export default function Page() {
  return <ProjectDetailsPageView />;
}
