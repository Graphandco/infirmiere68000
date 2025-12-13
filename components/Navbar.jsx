"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function Navbar({ links }) {
   const pathname = usePathname();
   const [hoveredIndex, setHoveredIndex] = useState(null);
   const [isInitialized, setIsInitialized] = useState(false);
   const linkRefs = useRef([]);

   // Trouver l'index du lien actif
   const activeIndex = links.findIndex((link) => pathname === link.href);

   // Initialiser après le premier rendu
   useEffect(() => {
      setIsInitialized(true);
   }, []);

   // Déterminer l'index de la barre (hover ou actif)
   let barIndex = 0;

   if (hoveredIndex !== null) {
      // Si un élément est survolé, suivre cet élément
      barIndex = hoveredIndex;
   } else if (isInitialized && activeIndex >= 0) {
      // Si un lien est actif, se positionner sur ce lien
      barIndex = activeIndex;
   } else {
      // Par défaut, se positionner sur le premier lien
      barIndex = 0;
   }

   return (
      <nav className="relative hidden md:flex justify-between gap-1 bg-white rounded-full overflow-hidden">
         {/* Fond animé */}
         <motion.div
            className="absolute inset-y-0 rounded-full z-0 bg-accent"
            initial={false}
            animate={{
               x:
                  barIndex >= 0
                     ? linkRefs.current[barIndex]?.offsetLeft || 0
                     : 0,
               width:
                  barIndex >= 0
                     ? linkRefs.current[barIndex]?.offsetWidth || 0
                     : 0,
            }}
            transition={{
               type: "spring",
               stiffness: 300,
               damping: 30,
            }}
         />

         {links.map((link, index) => {
            const isActive = pathname === link.href;
            const isHovered = hoveredIndex === index;

            return (
               <Link
                  key={link.href}
                  href={link.href}
                  ref={(el) => (linkRefs.current[index] = el)}
                  className={`relative px-3 py-2 transition-colors duration-200 z-10 ${
                     isActive
                        ? "text-black"
                        : isHovered
                          ? "text-black"
                          : "text-black"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
               >
                  {link.label}
               </Link>
            );
         })}
      </nav>
   );
}
