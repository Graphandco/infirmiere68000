import { GLOBAL_PAGE_FIELDS } from "@/actions/queries/globalContentQuery";

export const HOMEPAGE_CONTENT_QUERY = `
  query GetHomepageContent($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      ${GLOBAL_PAGE_FIELDS}
      homepage {
        descriptionDuHero
        titreDeLaPresentation
        imageDuHero {
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
        imagePresentation {
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
`;
