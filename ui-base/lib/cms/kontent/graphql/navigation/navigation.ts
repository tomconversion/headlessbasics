import { LanguageSite, PageIdentifier } from "../../../constants";
import { GetHomepageVariant, GetMultiSiteSlugByIdentifier } from "../../../heartcore/tools/urlTools";
import { variablesNavigationBase } from "../../../_base/tools/navigation/navigation";

export function navigation(pageIdentifier:PageIdentifier)
{
 return `
 query HomepageByUrlPath($slug: String!) {
  homepage_All(where: { _seo : { urlPath : {eq : $slug }} }, limit: 1){
   items{
     label
     subpages{
       totalCount
       items {
         ... on NavigationItem{
           slug
           content{
             __typename
           }
           _system_{
             id
           }
           _seo{
             title
             description
             keywords
             urlPath
             untitledMultipleChoice{
                 items{
                     _system_{
                         codename
                         name
                     }
                 }
             }
           }
         }
       }
     }
   }
 }
}  
`
};

export function GetNavQuery() {
  return navigation;
}

export function variables(pageIdentifier: PageIdentifier, languageSite:LanguageSite)
{
  console.log("kontent navigation variables", JSON.stringify(variablesNavigationBase(pageIdentifier, languageSite)));
  return variablesNavigationBase(pageIdentifier, languageSite); 
};

export function mapNavigationData(data, pageIdentifier:PageIdentifier, languageSite:LanguageSite) {
  
  let navItems = [];
  data.homepage_All?.items?.map((x) => {
    x.subpages.items.map((y) => {
     const navItem = {
        url: y._seo.urlPath,
        name: y._seo.title,
        id: y._system_.id,
        showInNavigation: y._seo.untitledMultipleChoice.items.filter((x) => x._system_.codename === 'show_in_navigation').length > 0,
      };
     navItems.push(navItem);
    });
  });
  navItems = navItems.filter((x) => typeof(x.url) !== 'undefined' && x.url !== null && x.url !== '');
  return navItems;
}