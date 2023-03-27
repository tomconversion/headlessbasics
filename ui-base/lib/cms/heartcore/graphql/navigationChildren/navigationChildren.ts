import { CmsVariant, CmsVariants, LanguageSite, PageIdentifier } from "../../../constants";
import { variablesById, variablesNavigationBase } from "../../../_base/tools/navigation/navigation";
import { GetHomepageVariant, GetMultiSiteSlugByIdentifier } from "../../tools/urlTools";
import { processNavItem } from "../navigation/navigation";

export function navigationChildren(pageIdentifier:PageIdentifier)
{
  return `
  query GetNavigationChildrenById($id: ID!) {
    content(id: $id) {
          name
          id
          children{
            items{
              name
              id
              level
              url
              ... on Homepage {
                superAlias
                showInNavigation
              }
              ... on SubComponentsPage {
                superAlias
                showInNavigation
              }
              ... on GridContentPage {
                superAlias
                showInNavigation
              }
            }
          }
    }
}
 `
};

export default function GetNavQuery() {
  return navigationChildren;
}

export function variables(id: string, languageSite:LanguageSite)
{
  return variablesById(id); 
};

export function mapNavigationData(data : any, pageIdentifier:PageIdentifier, languageSite:LanguageSite) {
  
  let mappedNav = [];

  if(data?.content?.children?.items?.length > 0){
    mappedNav = data.content.children.items.map((x) => {    
      return processNavItem(x, languageSite);
    });
  }

  mappedNav = mappedNav.filter((x) => !x.name.startsWith("_"));

  return mappedNav;
}