import Image from "next/image";
import { marked } from "marked";
import H2 from "@/components/ui/H2";
import FadeInOnView from "@/components/ui/FadeInOnView";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Presentation({ presentation }) {
   const { presentation_title, presentation_description, presentation_image } =
      presentation;
   console.log(presentation_description);
   return (
      <section id="presentation" className="my-10 md:my-15 lg:my-25">
         <div className="wrapper ">
            <FadeInOnView className="max-w-[800px]">
               <H2>{presentation_title}</H2>
            </FadeInOnView>
            <FadeInOnView className="flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-10 md:gap-20">
               <div>
                  <div
                     className="prose mb-5"
                     dangerouslySetInnerHTML={{
                        __html: marked.parse(presentation_description || ""),
                     }}
                  />
                  <Link href="/soins">
                     <Button size="lg">Découvrez nos soins</Button>
                  </Link>
               </div>

               <div className="w-[200px] lg:w-[300px]">
                  <Image
                     src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${presentation_image?.url}`}
                     alt={presentation_title}
                     width={500}
                     height={500}
                     className="w-full h-auto"
                  />
               </div>
            </FadeInOnView>
         </div>
      </section>
   );
}
