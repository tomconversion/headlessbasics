
// subComponentContent: 


import { CmsVariants, LanguageSite, PageIdentifier } from "../../../constants"
import { variablesMultiSiteSlug } from "../../../_base/graphqlSnippets/common/multiSite";
import { GetMultiSiteSlug } from "../../tools/urlTools";

export function subComponentContent() {
  return `query ComponentCintentBySlug($slug: String!) {
    subComponentsPage(url: $slug) {
      slug:url
      name
      id
    }
  }`
}

export function variables(slug:string, languageSite:LanguageSite)
{
  return variablesMultiSiteSlug(slug, languageSite);
};

export default function GetSubComponentContentQuery() {
  return subComponentContent
}

export function mapSubComponentContentData(data: any, pageIdentifier:PageIdentifier, languageSite:LanguageSite) {
  let dynamicContent = {};
  // if (data?.subComponentsPage?.contentBody) {
  //   dynamicContent = data?.subComponentsPage?.contentBody;
  // }
  return dynamicContent;
}
