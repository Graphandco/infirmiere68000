import { getStrapiUnique } from "@/actions/getStrapiUnique";
import Coordonnees from "@/components/contact/Coordonnees";
import H1 from "@/components/ui/H1";
import ContactForm from "@/components/contact/ContactForm";
import Image from "next/image";
export default async function ContactPage() {
   const contacts = await getStrapiUnique({ type: "coordonnee" });
   return (
      <>
         <section>
            <div className="wrapper">
               <H1>Contactez-nous</H1>
            </div>
         </section>
         <section>
            <Coordonnees contacts={contacts} />
         </section>
         <section className="wrapper py-6 sm:py-8 md:py-16">
            <div className="block sm:flex gap-20 items-end">
               <Image
                  src="/infirmiere-debout.svg"
                  alt="Contact"
                  width={1000}
                  height={1000}
                  className="hidden sm:block h-[600px] w-auto"
               />
               <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-3">
                     Ou écrivez-nous via notre formulaire
                  </h2>
                  <ContactForm />
               </div>
            </div>
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.4151617039615!2d7.325631599999991!3d48.08293059999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791642bd43ab10d%3A0xaaeb69309477ad42!2sLe%20Clos%20Des%20Etoiles!5e0!3m2!1sfr!2sus!4v1761248049881!5m2!1sfr!2sus"
               width="100%"
               height="450"
               allowFullScreen
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               className="rounded-xl filter hue-rotate-110 mt-12"
            ></iframe>
         </section>
      </>
   );
}
