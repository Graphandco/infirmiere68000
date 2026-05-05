export const GLOBAL_PAGE_FIELDS = `
  title
  content(format: RENDERED)
  seo: seo {
    title
    metaDesc
    metaRobotsNoindex
  }
`;

export function getGlobalContentQuery(type) {
   return `
    query GetContent($id: ID!) {
      ${type}(id: $id, idType: DATABASE_ID) {
        ${GLOBAL_PAGE_FIELDS}
      }
    }
  `;
}
