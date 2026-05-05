import Hero from "@/components/home/Hero";
import Presentation from "@/components/home/Presentation";
import { getWordpressContent } from "@/actions/getWordpressContent";
import { HOMEPAGE_CONTENT_QUERY } from "@/actions/queries/homepageContentQuery";

export const revalidate = 300;

async function getHomePageData() {
   return getWordpressContent({
      query: HOMEPAGE_CONTENT_QUERY,
      variables: { id: 2 },
      rootField: "page",
   });
}

export async function generateMetadata() {
   const pageData = await getHomePageData();
   const cleanDescription = (
      pageData.seo.metaDesc ||
      "Infirmières libérales diplômées d’État et conventionnées pour vos soins sur prescription médicale."
   )
      .replace(/[#*]/g, "")
      .slice(0, 160);

   return {
      title:
         pageData.seo.title ||
         "Cabinet de soins infirmiers à Colmar - Infirmière 68000",
      description: cleanDescription,
      openGraph: {
         title:
            pageData.seo.title ||
            "Cabinet de soins infirmiers à Colmar - Infirmière 68000",
         description: cleanDescription,
         url: "https://infirmiere68000.fr",
         type: "website",
         siteName: "Infirmière 68000",
      },
   };
}

export default async function Home() {
   const pageData = await getHomePageData();

   return (
      <>
         <Hero pageData={pageData} />
         <Presentation pageData={pageData} />
      </>
   );
}
