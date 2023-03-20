
// DynamicContent:  In Umbraco this is essentially the Umbraco Grid.
// It allows user to create a page with a grid of components.
// The can pick the columns and rows and then add components to the grid.


import { CmsVariants, LanguageSite, PageIdentifier } from "../../../constants"
import { variablesMultiSiteSlug } from "../../../_base/graphqlSnippets/common/multiSite";

export function gridContent() {
  return `
  query GetGridContent($slug: String!) {
      navigationItem_All(where: { _seo : { urlPath : {eq : $slug }} }, limit: 1){
          items{
              _system_{
                  id
                  type{
                      _system_{
                          codename
                          name
                      }
                  }
              }
              label
              _seo{
                  urlPath
              }            
          }
      }
  }
  
  `
}

export function variables(urlPath: string, languageSite:LanguageSite) {
  return variablesMultiSiteSlug(urlPath, languageSite);
}

export default function GetGridContentQuery() {
  return gridContent
}

export function mapGridContentData(data: any, pageIdentifier:PageIdentifier, languageSite:LanguageSite) {
  console.log("Umbraco mapGridContentData", data);
  let dynamicContent = {};
  if (data?.dynamicPage?.contentBody) {
    dynamicContent = data?.dynamicPage?.contentBody;
  }
  return dynamicContent;
}
