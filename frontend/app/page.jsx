import { getStrapiUnique } from "@/actions/getStrapiUnique";
import Hero from "@/components/home/Hero";
import Presentation from "@/components/home/Presentation";

export async function generateMetadata() {
   const home = await getStrapiUnique({ type: "home" });
   const cleanDescription = (
      home.meta_description ||
      "Infirmières libérales diplômées d’État et conventionnées pour vos soins sur prescription médicale."
   )
      .replace(/[#*]/g, "")
      .slice(0, 160);

   return {
      title:
         home.meta_title ||
         "Cabinet de soins médicaux à Colmar - Infirmière 68000",
      description: cleanDescription,
      openGraph: {
         title:
            home.meta_title ||
            "Cabinet de soins médicaux à Colmar - Infirmière 68000",
         description: cleanDescription,
         url: "https://infirmiere68000.fr",
         type: "website",
         siteName: "Infirmière 68000",
      },
   };
}

export default async function Home() {
   const home = await getStrapiUnique({ type: "home" });

   return (
      <>
         <Hero hero={home} />
         <Presentation presentation={home} />
      </>
   );
}
