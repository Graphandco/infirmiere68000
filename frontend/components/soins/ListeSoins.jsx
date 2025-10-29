import { marked } from "marked";
import FadeInOnView from "../ui/FadeInOnView";
import Image from "next/image";

export default function ListeSoins({ soins, contentSoins }) {
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
         <FadeInOnView className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {soins.map((soin) => (
               <div key={soin.id}>
                  <h3>{soin?.name}</h3>
               </div>
            ))}
         </FadeInOnView>
      </div>
   );
}
