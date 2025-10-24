import { getStrapiUnique } from "@/actions/getStrapiUnique";
import Hero from "@/components/home/Hero";

export default async function Home() {
   const home = await getStrapiUnique({ type: "home" });

   return (
      <div className="wrapper flex items-center gap-16">
         <Hero hero={home} />
      </div>
   );
}
