import Image from "next/image";
import Link from "next/link";
export default function Footer() {
   return (
      <footer className="bg-background-light">
         <div className="wrapper py-2">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2">
               <div className="flex flex-wrap gap-x-2 justify-center md:justify-start md:text-left items-center text-sm text-gray-600 transition-colors">
                  <Link href="/mentions-legales" className="hover:text-black">
                     Mentions légales
                  </Link>
                  <Link
                     href="/politique-de-confidentialite"
                     className="hover:text-black "
                  >
                     Politique de confidentialité
                  </Link>
               </div>
               <Link
                  href="https://graphandco.com"
                  target="_blank"
                  className="flex gap-2 items-center text-right text-gray-600 text-sm hover:text-black transition-colors"
               >
                  <Image
                     src="/logo-graphandco.svg"
                     alt="Graph and Co"
                     width={20}
                     height={20}
                  />
                  Graph and Co - {new Date().getFullYear()} &copy;
               </Link>
            </div>
         </div>
      </footer>
   );
}
