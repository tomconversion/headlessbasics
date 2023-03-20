import { CmsVariant, CmsVariants, LanguageSite, PageIdentifier } from "../../../constants";
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
  // Regadless of the page type, we always want to get the homepage for navigation purposes
  if(pageIdentifier.cmsType === 'homepage')
  {
    return {'slug': GetMultiSiteSlugByIdentifier(pageIdentifier, languageSite)};
  }else {
    return {'slug': GetMultiSiteSlugByIdentifier(GetHomepageVariant(), languageSite)}; // Get the homepage (not the current page
  }  
};

export function mapNavigationData(data : any, pageIdentifier:PageIdentifier) {
  
  let mappedNav = [];

  if(data?.homepage?.children?.items?.length > 0){
    mappedNav = data.homepage.children.items.map((x) => {    
      x.name = x.name.replace('/', '');
      x.slug = x.name;
      x.url = x.url.replace('/us-homepage', '');
      x.url = x.url.replace('/au-homepage', '/au');
      return x;
    });
  }

  mappedNav = mappedNav.filter((x) => !x.name.startsWith("_"));

  return mappedNav;
}