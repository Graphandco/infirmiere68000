import H2 from "@/components/ui/H2";
import { marked } from "marked";
import FadeInOnView from "../ui/FadeInOnView";

export default function ListeSoins({ soins, contentSoins }) {
   return (
      <div>
         {/* <H2>Liste des soins</H2> */}
         <div
            className="prose mb-5"
            dangerouslySetInnerHTML={{
               __html: marked.parse(contentSoins.soins_description || ""),
            }}
         />
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
