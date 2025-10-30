import { marked } from "marked";
import FadeInOnView from "../ui/FadeInOnView";
import Image from "next/image";

export default function ListeSoins({ soins, contentSoins }) {
   // console.log(soins);
   return (
      <div>
         <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
            <Image
               src="/stethoscope.svg"
               alt="Stethoscope"
               width={500}
               height={500}
               className="w-40 h-auto object-contain"
            />
            <div
               className="prose mb-5"
               dangerouslySetInnerHTML={{
                  __html: marked.parse(contentSoins.soins_description || ""),
               }}
            />
         </div>
         <FadeInOnView className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:py-8 md:py-16">
            {soins.map((soin) => (
               <div
                  className="h-full flex flex-col items-center justify-between gap-4 bg-white/60 p-4 rounded-lg shadow-md"
                  key={soin.id}
               >
                  <div className="text-center">{soin?.name}</div>
                  <Image
                     src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${soin?.image?.url}`}
                     alt={soin?.name}
                     width={50}
                     height={50}
                     className="w-30 aspect-square object-contain"
                  />
               </div>
            ))}
         </FadeInOnView>
      </div>
   );
}
