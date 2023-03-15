
// subComponentContent: 


import { CmsVariants, PageIdentifier } from "../../../constants"

export function subComponentContent() {
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
  const result = {'urlPath': `/${urlPath}`};
  return result;
};

export default function GetSubComponentContentQuery() {
  return subComponentContent
}

export function mapSubComponentContentData(data: any, pageIdentifier:PageIdentifier) {
 return data?.pageCollection?.items[0];
}
