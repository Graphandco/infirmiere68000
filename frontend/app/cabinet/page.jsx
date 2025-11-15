import { getStrapiCollections } from "@/actions/getStrapiCollections";
import { getStrapiUnique } from "@/actions/getStrapiUnique";
import H1 from "@/components/ui/H1";
import Equipe from "@/components/cabinet/Equipe";

export async function generateMetadata() {
   const cabinet = await getStrapiUnique({ type: "cabinet" });
   const cleanDescription = (
      cabinet.meta_description ||
      "Infirmières libérales diplômées d’État et conventionnées pour vos soins sur prescription médicale."
   )
      .replace(/[#*]/g, "")
      .slice(0, 160);

   return {
      title: cabinet.meta_title || `${cabinet.page_title} - Infirmière 68000`,
      description: cleanDescription,
      openGraph: {
         title:
            cabinet.meta_title || `${cabinet.page_title} - Infirmière 68000`,
         description: cleanDescription,
         url: "https://infirmiere68000.fr",
         type: "website",
         siteName: "Infirmière 68000",
      },
   };
}

export default async function CabinetPage() {
   const equipe = await getStrapiCollections("equipes");
   const cabinet = await getStrapiUnique({ type: "cabinet" });

   return (
      <section className="wrapper">
         <H1>{cabinet.page_title}</H1>
         <Equipe equipe={equipe} cabinet={cabinet} />
      </section>
   );
}
