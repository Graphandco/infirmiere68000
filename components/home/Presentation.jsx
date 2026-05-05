import Image from "next/image";
import FadeInOnView from "@/components/ui/FadeInOnView";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import H2 from "../ui/H2";

export default function Presentation({ pageData }) {
   const presentationImage = pageData.homepage?.imagePresentation?.node;

   return (
      <section id="presentation" className="my-10 md:my-15 lg:my-25">
         <div className="wrapper ">
            <FadeInOnView className="max-w-[800px]">
               <H2>{pageData.homepage?.titreDeLaPresentation || ""}</H2>
            </FadeInOnView>
            <FadeInOnView className="flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-10 md:gap-20">
               <div>
                  <div
                     className="prose mb-5"
                     dangerouslySetInnerHTML={{ __html: pageData.content }}
                  />
                  <Link href="/cabinet">
                     <Button size="lg">Découvrez notre équipe</Button>
                  </Link>
               </div>

               <div className="w-[200px] lg:w-[300px]">
                  {presentationImage?.sourceUrl && (
                     <Image
                        src={presentationImage.sourceUrl}
                        alt={presentationImage.altText || "Image de présentation"}
                        width={presentationImage.mediaDetails?.width || 500}
                        height={presentationImage.mediaDetails?.height || 500}
                        className="w-full h-auto"
                     />
                  )}
               </div>
            </FadeInOnView>
         </div>
      </section>
   );
}
