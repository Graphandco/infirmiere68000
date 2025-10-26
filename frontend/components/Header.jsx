"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import { Menu, Phone } from "lucide-react";

export default function Header({ coords }) {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   const handleMenuClose = () => {
      setIsMenuOpen(false);
   };

   const links = [
      { href: "/", label: "Accueil" },
      { href: "/cabinet", label: "Le cabinet" },
      { href: "/soins", label: "Soins" },
      { href: "/contact", label: "Contact" },
   ];

   return (
      <header className="mb-4 sm:mb-8 md:mb-12 lg:mb-16">
         <div className="fixed h-10 top-0 left-0 w-full flex items-center justify-between md:hidden bg-black text-white px-4">
            <Link
               href={`tel:${coords.telephone}`}
               className="flex items-center gap-2"
            >
               <Phone size={18} className="cursor-pointer" />
               <span className="text-sm">{coords.telephone}</span>
            </Link>
            <button
               onClick={handleMenuToggle}
               className="p-1 hover:bg-white/10 rounded transition-colors"
               aria-label="Ouvrir le menu"
            >
               <Menu size={24} className="cursor-pointer" />
            </button>
         </div>
         <MobileMenu
            isOpen={isMenuOpen}
            onClose={handleMenuClose}
            links={links}
         />
         <div className="wrapper mt-10 md:mt-0 py-4 grid  md:grid-cols-[1fr_auto_1fr] items-center">
            <div>
               <Link href="/" className="flex items-center gap-2">
                  <Image src="/logo.svg" alt="Logo" width={55} height={55} />
                  <div className="uppercase grid">
                     <span className="text-lg font-bold leading-none">
                        Infirmière
                     </span>
                     <span className="opacity-50 font-semibold leading-none">
                        Colmar
                     </span>
                  </div>
               </Link>
            </div>
            <Navbar links={links} />
            <div className="hidden md:flex flex-col items-end text-black text-sm">
               <span>64 Rue Robert Schuman</span>
               <span>68000 Colmar</span>
               <Link href="tel:0612345678">06 12 34 56 78</Link>
            </div>
         </div>
      </header>
   );
}
