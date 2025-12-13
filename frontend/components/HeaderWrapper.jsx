import Header from "./Header";
import { getWordpressCoordonnees } from "@/actions/getWordpressContent";

export default async function HeaderWrapper() {
   const coords = await getWordpressCoordonnees();

   return <Header coords={coords} />;
}
