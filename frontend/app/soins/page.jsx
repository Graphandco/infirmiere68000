import H1 from "@/components/ui/H1";
import { getStrapiCollections } from "@/actions/getStrapiCollections";
import { getStrapiUnique } from "@/actions/getStrapiUnique";
import ListeSoins from "@/components/soins/ListeSoins";

export async function generateMetadata() {
   const contentSoins = await getStrapiUnique({ type: "page-soin" });
   const cleanDescription = (
      contentSoins.meta_description ||
      "Infirmières libérales diplômées d’État et conventionnées pour vos soins sur prescription médicale."
   )
      .replace(/[#*]/g, "")
      .slice(0, 160);

   return {
      title:
         contentSoins.meta_title ||
         `${contentSoins.page_title} - Infirmière 68000`,
      description: cleanDescription,
      openGraph: {
         title:
            contentSoins.meta_title ||
            `${contentSoins.page_title} - Infirmière 68000`,
         description: cleanDescription,
         url: "https://infirmiere68000.fr",
         type: "website",
         siteName: "Infirmière 68000",
      },
   };
}

export default async function SoinsPage() {
   const soins = await getStrapiCollections("soins");
   const contentSoins = await getStrapiUnique({ type: "page-soin" });

   return (
      <section className="wrapper">
         <H1>{contentSoins.page_title}</H1>
         <ListeSoins soins={soins} contentSoins={contentSoins} />
      </section>
   );
}
