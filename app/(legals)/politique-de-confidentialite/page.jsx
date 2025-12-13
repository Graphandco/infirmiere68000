import { getWordpressContent } from "@/actions/getWordpressContent";
import H1 from "@/components/ui/H1";

export const revalidate = Number(process.env.REVALIDATE_TIME) || 300;

export async function generateMetadata() {
   return {
      title: "Politique de confidentialité - Infirmière 68000",
      description:
         "Politique de confidentialité d'Infirmière 68000. Comment nous protégeons et utilisons vos données personnelles.",
      robots: {
         index: false,
         follow: false,
      },
   };
}

export default async function PolitiqueDeConfidentialite() {
   const data = await getWordpressContent({ id: 95, type: "page" });

   return (
      <section className="wrapper pt-10 pb-20">
         <H1>{data.title}</H1>

         <div
            className="prose mt-15"
            dangerouslySetInnerHTML={{
               __html: data.content,
            }}
         />
      </section>
   );
}
