import Image from "next/image";
import FadeInOnView from "../ui/FadeInOnView";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Equipe({ data }) {
   // Trier l'équipe par ordre
   const sortedEquipe = [...data.team].sort((a, b) => a.order - b.order);

   const getImageUrl = (person) => {
      // Si l'image ACF existe, l'utiliser (peut être une URL ou un objet avec url)
      if (person.image) {
         const imageUrl =
            typeof person.image === "string" ? person.image : person.image.url;
         if (imageUrl) {
            return imageUrl;
         }
      }

      // Sinon utiliser le fallback selon le sexe
      return `/${person.sex || "default"}.svg`;
   };

   return (
      <section id="equipe">
         <FadeInOnView className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
            <div className="w-32 sm:w-46 h-auto shrink-0">
               <Image
                  src="/femme2.svg"
                  alt="Notre équipe"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain"
                  unoptimized
               />
            </div>
            <div>
               <div
                  className="prose mb-5"
                  dangerouslySetInnerHTML={{ __html: data.content }}
               />
               {/* <Link href="/contact">
                  <Button size="lg">Contactez-nous</Button>
               </Link> */}
            </div>
         </FadeInOnView>

         <FadeInOnView className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8 md:py-12">
            {sortedEquipe?.map((person) => (
               <div
                  key={person.id}
                  className="h-full flex flex-col items-center sm:flex-row gap-3 md:gap-6 px-2 md:px-4 py-4 rounded-lg bg-white/60 shadow-md text-center sm:text-left"
               >
                  <div className="w-30 h-30 shrink-0">
                     <Image
                        src={getImageUrl(person)}
                        alt={person.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover object-top aspect-square bg-white rounded-full border-4 border-accent"
                        unoptimized
                     />
                  </div>
                  <div className="space-y-1">
                     <div className="md:text-lg font-bold">{person.name}</div>
                     <div
                        className="text-gray-600 text-sm"
                        dangerouslySetInnerHTML={{ __html: person.description }}
                     />
                  </div>
               </div>
            ))}
         </FadeInOnView>

         <FadeInOnView>
            <div
               className="prose mb-10 max-w-full"
               dangerouslySetInnerHTML={{ __html: data.proximity }}
            />
         </FadeInOnView>
      </section>
   );
}
