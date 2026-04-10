import HomeThreePageView from "../../views/routes/home-three";
import { buildPageMetadata } from "../../lib/metadata";

export const metadata = buildPageMetadata("Home Three");

export default function Page() {
  return <HomeThreePageView />;
}
