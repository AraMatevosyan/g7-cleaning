import TeamPageView from "../../views/routes/team";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Team Page");

export default function Page() {
  return <TeamPageView />;
}
