import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeInOnView from "@/components/ui/FadeInOnView";
import { Mail, Phone } from "lucide-react";

export default function Hero({ hero }) {
   const { hero_title, hero_description, hero_image } = hero;

   return (
      <FadeInOnView className="wrapper flex flex-col sm:flex-row items-center gap-5 sm:gap-10 md:gap-20">
         <div className="w-[90%] sm:w-[300px] md:w-[400px] lg:w-[450px] mx-auto">
            <Image
               src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${hero_image?.url}`}
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
            <div className="flex items-center gap-4">
               <Link href="tel:0618216902">
                  <Button size="lg">
                     <Phone size={20} /> 06 18 21 69 02
                  </Button>
               </Link>
               <Link href="/contact">
                  <Button variant="outline" size="lg">
                     <Mail size={20} /> Nous écrire
                  </Button>
               </Link>
            </div>
         </div>
      </FadeInOnView>
   );
}
