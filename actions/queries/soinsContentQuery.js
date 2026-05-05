import { GLOBAL_PAGE_FIELDS } from "@/actions/queries/globalContentQuery";

export const SOINS_CONTENT_QUERY = `
  query GetSoinsContent($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      ${GLOBAL_PAGE_FIELDS}
      listeDesSoins {
        soins {
          nomDuSoin
          imageDuSoin {
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
