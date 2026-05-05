import H1 from "@/components/ui/H1";
import { getWordpressContent } from "@/actions/getWordpressContent";
import { SOINS_CONTENT_QUERY } from "@/actions/queries/soinsContentQuery";

import ListeSoins from "@/components/soins/ListeSoins";

export const revalidate = 300;

async function getSoinsPageData() {
   return getWordpressContent({
      query: SOINS_CONTENT_QUERY,
      variables: { id: 65 },
      rootField: "page",
   });
}

export async function generateMetadata() {
   const data = await getSoinsPageData();
   const cleanDescription = (
      data.seo.metaDesc ||
      "Infirmières libérales diplômées d’État et conventionnées pour vos soins sur prescription médicale."
   )
      .replace(/[#*]/g, "")
      .slice(0, 160);

   return {
      title: data.seo.title || `${data.title} - Infirmière 68000`,
      description: cleanDescription,
      openGraph: {
         title: data.seo.title || `${data.title} - Infirmière 68000`,
         description: cleanDescription,
         url: "https://infirmiere68000.fr",
         type: "website",
         siteName: "Infirmière 68000",
      },
   };
}

export default async function SoinsPage() {
   const data = await getSoinsPageData();

   return (
      <section className="wrapper">
         <H1>{data.title}</H1>
         <ListeSoins data={data} />
      </section>
   );
}
