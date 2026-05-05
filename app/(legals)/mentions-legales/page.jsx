import H1 from "@/components/ui/H1";
import { getWordpressContent } from "@/actions/getWordpressContent";
import { getGlobalContentQuery } from "@/actions/queries/globalContentQuery";

export const revalidate = 300;

export async function generateMetadata() {
   return {
      title: "Mentions légales - Infirmière 68000",
      description:
         "Mentions légales d'Infirmière 68000, cabinet de soins médicaux à Colmar. Informations légales et réglementaires.",
      robots: {
         index: false,
         follow: false,
      },
   };
}

export default async function MentionsLegales() {
   const data = await getWordpressContent({
      query: getGlobalContentQuery("page"),
      variables: { id: 93 },
      rootField: "page",
   });

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
