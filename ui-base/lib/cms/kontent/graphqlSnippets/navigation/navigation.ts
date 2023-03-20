import { LanguageSite, PageIdentifier } from "../../../constants";
import { GetHomepageVariant, GetMultiSiteSlugByIdentifier } from "../../../heartcore/tools/urlTools";

export const navigation = `
{
  homepage_All{
    items{
      title
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
`;

export function GetNavQuery() {
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