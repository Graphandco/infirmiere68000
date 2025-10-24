import Image from "next/image";
import Link from "next/link";
export default function Footer() {
   return (
      <footer className="bg-background-light">
         <div className="wrapper py-2">
            <Link
               href="https://graphandco.com"
               target="_blank"
               className="flex gap-2 items-center text-right text-sm hover:text-black transition-colors"
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
      </footer>
   );
}
