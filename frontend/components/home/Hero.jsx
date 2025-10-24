import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeInOnView from "@/components/ui/FadeInOnView";

export default function Hero({ hero }) {
   const { hero_title, hero_description } = hero;

   return (
      <FadeInOnView className="flex flex-col sm:flex-row items-center gap-8">
         <div className="w-[90%] sm:w-[300px] md:w-[400px] lg:w-[550px]">
            <Image
               src="/hero.svg"
               alt="Hero"
               width={550}
               height={550}
               className="w-full h-auto"
            />
         </div>
         {/* <div className="absolute t-O b-0 w-full h-16 bg-black"></div> */}
         <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
               {hero_title}
            </h1>
            <p className="text-black">{hero_description}</p>
            <Link href="/contact">
               <Button>Contactez-nous</Button>
            </Link>
         </div>
      </FadeInOnView>
   );
}
