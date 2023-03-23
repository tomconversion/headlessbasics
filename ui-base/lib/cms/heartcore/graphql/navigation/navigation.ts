import { CmsVariant, CmsVariants, LanguageSite, PageIdentifier } from "../../../constants";
import { variablesNavigationBase } from "../../../_base/tools/navigation/navigation";
import { GetHomepageVariant, GetMultiSiteSlugByIdentifier } from "../../tools/urlTools";

export function navigation(pageIdentifier:PageIdentifier)
{
  return `
  query NavigationByParent($slug: String!) {
    homepage(url: $slug) {
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
  return navigation;
}

export function variables(pageIdentifier: PageIdentifier, languageSite:LanguageSite)
{
  return variablesNavigationBase(pageIdentifier, languageSite); 
};

export function mapNavigationData(data : any, pageIdentifier:PageIdentifier, languageSite:LanguageSite) {
  
  let mappedNav = [];

  if(data?.homepage?.children?.items?.length > 0){
    mappedNav = data.homepage.children.items.map((x) => {          
      return processNavItem(x, languageSite);
    });
  }

  mappedNav = mappedNav.filter((x) => !x.name.startsWith("_"));

  return mappedNav;
}

export function processNavItem(x: any, languageSite: LanguageSite) {
  
  x.name = x.name.replace('/', '');
  x.slug = x.name;
  x.url = x.url.replace(languageSite.homepageSlugPrefix, '');

  
  if(languageSite.specialSlugPrefix){
    const valueToRemove = languageSite.specialSlugPrefix.replace(/\/+/g, '');
    console.log("languageSite.specialSlugPrefix value", valueToRemove, x.url);
    x.url = x.url.replace(valueToRemove, '');
  }
  

  if(languageSite.shouldLanguageCodeBeAddedToNav){
    x.url = `/${languageSite.countryCode}/${x.url}`;
  }
  console.log("processNavItem", x.url);
  return x;
}
