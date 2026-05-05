import { GLOBAL_PAGE_FIELDS } from "@/actions/queries/globalContentQuery";

export const CABINET_CONTENT_QUERY = `
  query GetCabinetContent($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      ${GLOBAL_PAGE_FIELDS}
      leCabinet {
        texteDeProximite
        membresDeLequipe {
          nom
          description
          order
          sexe
          image {
            node {
              id
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;
