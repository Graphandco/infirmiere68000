import FadeInOnView from "../ui/FadeInOnView";
import Image from "next/image";

export default function ListeSoins({ data }) {
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
            <div
               className="prose mb-5"
               dangerouslySetInnerHTML={{ __html: data.content }}
            />
         </div>
         <FadeInOnView className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8 md:py-16">
            {data.soins.map((soin) => {
               return (
                  <div
                     className="h-full flex items-center gap-4 md:gap-8 bg-white/60 py-4 px-4 md:px-8 rounded-lg shadow-md"
                     key={soin.id}
                  >
                     {soin.image && (
                        <Image
                           src={soin.image.url}
                           alt={soin?.name}
                           width={80}
                           height={80}
                           className="h-20 aspect-square object-contain"
                           unoptimized
                        />
                     )}
                     <div className="">{soin?.name}</div>
                  </div>
               );
            })}
         </FadeInOnView>
      </div>
   );
}
