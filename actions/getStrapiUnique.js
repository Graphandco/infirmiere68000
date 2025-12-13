"use server";

const REVALIDATE_TIME = Number(process.env.REVALIDATE_TIME) || 300;

export async function getStrapiUnique({ type }) {
   let url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/${type}?populate=*`;

   const res = await fetch(url, { next: { revalidate: REVALIDATE_TIME } });

   if (!res.ok) {
      throw new Error("Erreur lors de la récupération de l'élément");
   }

   const json = await res.json();

   if (type) {
      return json.data;
   }
}
