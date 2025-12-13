import Hero from "@/components/home/Hero";
import Presentation from "@/components/home/Presentation";
import { getWordpressContent } from "@/actions/getWordpressContent";

export const revalidate = Number(process.env.REVALIDATE_TIME) || 300;

export async function generateMetadata() {
   const pageData = await getWordpressContent({ id: 2, type: "page" });
   const cleanDescription = (
      pageData.seo.metaDesc ||
      "Infirmières libérales diplômées d’État et conventionnées pour vos soins sur prescription médicale."
   )
      .replace(/[#*]/g, "")
      .slice(0, 160);

   return {
      title:
         pageData.seo.title ||
         "Cabinet de soins médicaux à Colmar - Infirmière 68000",
      description: cleanDescription,
      openGraph: {
         title:
            pageData.seo.title ||
            "Cabinet de soins médicaux à Colmar - Infirmière 68000",
         description: cleanDescription,
         url: "https://infirmiere68000.fr",
         type: "website",
         siteName: "Infirmière 68000",
      },
   };
}

export default async function Home() {
   const pageData = await getWordpressContent({ id: 2, type: "page" });

   return (
      <>
         <Hero pageData={pageData} />
         <Presentation pageData={pageData} />
      </>
   );
}
