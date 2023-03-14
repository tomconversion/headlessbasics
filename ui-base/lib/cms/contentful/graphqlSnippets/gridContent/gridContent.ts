
// Brid Content


import { CmsVariants, PageIdentifier } from "../../../constants"

export function gridContent() {
  return `
  query GetPageByLongSlug($urlPath: String!) {
      pageCollection(where: { urlPath : $urlPath }, limit: 1) {
          items{   
              __typename         
              ... on Page{
                  seoTitle
              }
          }
      }
  }`
}

export function variables(urlPath:string)
{
  console.log("variables", `/${urlPath}`);
  const result = {'urlPath': `/${urlPath}`};
  return result;
};

export default function GetGridContentQuery() {
  return gridContent
}

export function mapGridContentData(data: any, pageIdentifier:PageIdentifier) {
  return data?.pageCollection?.items[0];
}
