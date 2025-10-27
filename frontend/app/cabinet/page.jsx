import { getStrapiCollections } from "@/actions/getStrapiCollections";
import { getStrapiUnique } from "@/actions/getStrapiUnique";
import H1 from "@/components/ui/H1";
import Equipe from "@/components/cabinet/Equipe";

export default async function CabinetPage() {
   const equipe = await getStrapiCollections("equipes");
   const cabinet = await getStrapiUnique({ type: "cabinet" });

   return (
      <section className="wrapper">
         <H1>Le cabinet</H1>
         <Equipe equipe={equipe} cabinet={cabinet} />
      </section>
   );
}
