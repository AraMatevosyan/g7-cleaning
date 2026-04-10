import TeamDetailsPageView from "../../views/routes/team-details";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Team Details");

export default function Page() {
  return <TeamDetailsPageView />;
}
