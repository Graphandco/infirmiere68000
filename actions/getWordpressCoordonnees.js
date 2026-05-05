"use server";

import { getWordpressContent } from "@/actions/getWordpressContent";

/**
 * Récupère les coordonnées depuis les options ACF WordPress via GraphQL
 * @returns {Promise<{adresse: string, telephone: string, email: string}>}
 */
export async function getWordpressCoordonnees() {
   const graphqlQuery = `
    query GetCoordonnees {
      coordonnees {
        coordonnes {
          adresse
          email
          telephone
        }
      }
    }
  `;
   const data = await getWordpressContent({ query: graphqlQuery });

   if (!data?.coordonnees?.coordonnes) {
      throw new Error("Les options ACF coordonnees n'ont pas été trouvées");
   }

   return {
      adresse: data.coordonnees.coordonnes.adresse || "",
      telephone: data.coordonnees.coordonnes.telephone || "",
      email: data.coordonnees.coordonnes.email || "",
   };
}
