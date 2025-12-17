import Image from "next/image";
import FadeInOnView from "@/components/ui/FadeInOnView";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import H2 from "../ui/H2";

export default function Presentation({ pageData }) {
   const presentationImage = pageData.acf?.presentation_image;

   return (
      <section id="presentation" className="my-10 md:my-15 lg:my-25">
         <div className="wrapper ">
            <FadeInOnView className="max-w-[800px]">
               <H2>{pageData.acf.presentation_title}</H2>
            </FadeInOnView>
            <FadeInOnView className="flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-10 md:gap-20">
               <div>
                  <div
                     className="prose mb-5"
                     dangerouslySetInnerHTML={{ __html: pageData.content }}
                  />
                  {/* <Link href="/soins">
                     <Button size="lg">Découvrez nos soins</Button>
                  </Link> */}
               </div>

               <div className="w-[200px] lg:w-[300px]">
                  {presentationImage?.url && (
                     <Image
                        src={presentationImage.url}
                        alt={presentationImage.alt || "Image de présentation"}
                        width={presentationImage.width || 500}
                        height={presentationImage.height || 500}
                        className="w-full h-auto"
                     />
                  )}
               </div>
            </FadeInOnView>
         </div>
      </section>
   );
}
