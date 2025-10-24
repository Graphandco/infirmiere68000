import { getStrapiUnique } from "@/actions/getStrapiUnique";
import Header from "./Header";

export default async function HeaderWrapper() {
   const coords = await getStrapiUnique({ type: "coordonnee" });
   return <Header coords={coords} />;
}
