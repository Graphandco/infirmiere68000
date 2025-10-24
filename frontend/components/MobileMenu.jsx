"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ isOpen, onClose }) {
   const links = [
      { href: "/", label: "Accueil" },
      { href: "/cabinet", label: "Le cabinet" },
      { href: "/soins", label: "Soins" },
      { href: "/contact", label: "Contact" },
   ];

   return (
      <AnimatePresence>
         {isOpen && (
            <>
               {/* Overlay */}
               <motion.div
                  className="fixed inset-0 bg-black/50 z-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={onClose}
               />

               {/* Menu Panel */}
               <motion.div
                  className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{
                     type: "spring",
                     stiffness: 300,
                     damping: 30,
                  }}
               >
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b">
                     <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                     <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Fermer le menu"
                     >
                        <X size={24} className="text-gray-600" />
                     </button>
                  </div>

                  {/* Navigation Links */}
                  <nav className="p-6">
                     <ul className="space-y-4">
                        {links.map((link, index) => (
                           <motion.li
                              key={link.href}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ 
                                 opacity: 1, 
                                 x: 0,
                                 transition: { delay: index * 0.1 }
                              }}
                              exit={{ opacity: 0, x: 20 }}
                           >
                              <Link
                                 href={link.href}
                                 onClick={onClose}
                                 className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                              >
                                 {link.label}
                              </Link>
                           </motion.li>
                        ))}
                     </ul>
                  </nav>

                  {/* Contact Info */}
                  <motion.div
                     className="absolute bottom-0 left-0 right-0 p-6 border-t bg-gray-50"
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.4 }
                     }}
                     exit={{ opacity: 0, y: 20 }}
                  >
                     <div className="text-center">
                        <p className="text-sm text-gray-600 mb-2">Contact</p>
                        <Link
                           href="tel:0612345678"
                           className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                        >
                           06 12 34 56 78
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">
                           64 Rue Robert Schuman<br />
                           68000 Colmar
                        </p>
                     </div>
                  </motion.div>
               </motion.div>
            </>
         )}
      </AnimatePresence>
   );
}
