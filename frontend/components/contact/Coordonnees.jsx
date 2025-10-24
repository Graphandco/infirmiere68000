import Link from "next/link";
import Image from "next/image";
export default function Coordonnees({ contacts }) {
   const { adresse, ville, telephone, email } = contacts;
   return (
      <div className="grid sm:grid-cols-2">
         <Link
            href={`tel:${telephone}`}
            className="flex justify-center items-center gap-4 bg-accent p-4 group"
         >
            <Image
               className="w-[50px] md:w-[100px] group-hover:scale-110 group-hover:rotate-8 transition-all"
               src="phone.svg"
               alt="Téléphone"
               width={100}
               height={100}
            />
            <div className="flex flex-col group-hover:scale-90 transition-all">
               <span className="uppercase text-xl font-bold">Téléphone</span>
               <span>{telephone}</span>
            </div>
         </Link>
         <Link
            href={`mailto:${email}`}
            className="flex justify-center items-center gap-4 bg-accent/70 p-4 group"
         >
            <Image
               className="w-[50px] md:w-[100px] group-hover:scale-110 group-hover:-rotate-8 transition-all"
               src="email.svg"
               alt="Email"
               width={100}
               height={100}
            />
            <div className="flex flex-col group-hover:scale-90 transition-all">
               <span className="uppercase text-xl font-bold">E-mail</span>
               <span>{email}</span>
            </div>
         </Link>
      </div>
   );
}
