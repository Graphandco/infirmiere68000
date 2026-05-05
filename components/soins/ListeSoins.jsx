import FadeInOnView from "@/components/ui/FadeInOnView";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ListeSoins({ data }) {
   const soins = data.listeDesSoins?.soins || [];

   return (
      <div>
         <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 md:gap-16 items-center">
            <Image
               src="/infirmiere-soins.svg"
               alt="Infirmière avec accessoires"
               width={500}
               height={500}
               className="w-32 sm:w-46 h-auto object-contain"
            />
            <div className="prose mb-5">
               <div
                  className="mb-5"
                  dangerouslySetInnerHTML={{ __html: data.content }}
               />
               <Link href="/contact">
                  <Button size="lg">Contactez-nous</Button>
               </Link>
               {/* <h3 className="mt-5">
                  Découvrez ci-dessous les différents soins que nous effectuons.
               </h3> */}
            </div>
         </div>
         <FadeInOnView></FadeInOnView>
         <FadeInOnView className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 md:pt-8 pb-8 md:pb-16">
            {soins.map((soin, index) => {
               const image = soin.imageDuSoin?.node;
               return (
                  <div
                     className="h-full flex items-center gap-4 md:gap-8 bg-white/60 py-4 px-4 md:px-8 rounded-lg shadow-md"
                     key={`${soin.nomDuSoin || "soin"}-${index}`}
                  >
                     {image?.sourceUrl && (
                        <Image
                           src={image.sourceUrl}
                           alt={image.altText || soin?.nomDuSoin || "Soin"}
                           width={image.mediaDetails?.width || 80}
                           height={image.mediaDetails?.height || 80}
                           className="h-20 aspect-square object-contain"
                           unoptimized
                        />
                     )}
                     <div className="">{soin?.nomDuSoin}</div>
                  </div>
               );
            })}
         </FadeInOnView>
      </div>
   );
}
