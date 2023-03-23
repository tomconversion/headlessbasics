
// Brid Content


import { getLogger } from "@/ui-base/lib/services/logging/LogConfig";
import { CmsVariants, LanguageSite, PageIdentifier } from "../../../constants"

const log = getLogger("headless.graphql.heartcore.common.multiSite");

export function gridContent() {
  return `
  query GetPageByLongSlug($slug: String!) {
      pageCollection(where: { urlPath : $slug }, limit: 1) {
          items{   
              __typename         
              ... on Page{
                  seoTitle
              }
          }
      }
  }`
}

export function variables(urlPath:string, pageIdentifier:PageIdentifier, languageSite:LanguageSite)
{
  log.debug("variables", `/${urlPath}`);
  const result = {'urlPath': `/${urlPath}`};
  return result;
};

export default function GetGridContentQuery() {
  return gridContent
}

export function mapGridContentData(data: any, pageIdentifier:PageIdentifier, languageSite:LanguageSite) {
  return data?.pageCollection?.items[0];
}
