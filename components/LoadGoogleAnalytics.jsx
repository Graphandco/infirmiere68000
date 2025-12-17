"use client";

import { useEffect } from "react";

export default function LoadGoogleAnalytics() {
   useEffect(() => {
      const loadScript = () => {
         // Vérifier si GA n'est pas déjà chargé
         if (
            document.querySelector(
               'script[src*="googletagmanager.com/gtag/js"]'
            )
         ) {
            return;
         }

         // Injecte le script principal
         const script = document.createElement("script");
         script.src =
            "https://www.googletagmanager.com/gtag/js?id=G-CGZ47TK0BW";
         script.async = true;
         script.onload = () => {
            // Configure GA après chargement
            window.dataLayer = window.dataLayer || [];
            function gtag() {
               window.dataLayer.push(arguments);
            }
            window.gtag = gtag;
            gtag("js", new Date());
            gtag("config", "G-CGZ47TK0BW");
         };
         script.onerror = () => {
            console.warn("Failed to load Google Analytics script");
         };
         document.head.appendChild(script);
      };

      // Attendre que la page soit complètement chargée
      if (document.readyState === "complete") {
         loadScript();
      } else {
         window.addEventListener("load", loadScript, { once: true });
      }
   }, []);

   return null;
}
