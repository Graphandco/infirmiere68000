import H1 from "@/components/ui/H1";
import { getStrapiCollections } from "@/actions/getStrapiCollections";
import { getStrapiUnique } from "@/actions/getStrapiUnique";
import ListeSoins from "@/components/soins/ListeSoins";

export default async function SoinsPage() {
   const soins = await getStrapiCollections("soins");
   const contentSoins = await getStrapiUnique({ type: "page-soin" });

   return (
      <section className="wrapper">
         <H1>Nos soins</H1>
         <ListeSoins soins={soins} contentSoins={contentSoins} />
      </section>
   );
}
