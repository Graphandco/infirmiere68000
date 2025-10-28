import { getStrapiCollectionBySlug } from "@/actions/getStrapiCollections";
import { marked } from "marked";
import H1 from "@/components/ui/H1";

export async function generateMetadata() {
   return {
      title: "Politique de confidentialité | Elsass Compta",
      description:
         "Politique de confidentialité d'Elsass Compta. Comment nous protégeons et utilisons vos données personnelles.",
      robots: {
         index: false,
         follow: false,
      },
   };
}

export default async function PolitiqueDeConfidentialite() {
   const politique = await getStrapiCollectionBySlug(
      "legals",
      "politique-de-confidentialite"
   );

   return (
      <section className="wrapper pt-10 pb-20">
         <H1>{politique.title}</H1>

         <div
            className="prose mt-15"
            dangerouslySetInnerHTML={{
               __html: marked.parse(politique.content || ""),
            }}
         />
      </section>
   );
}
