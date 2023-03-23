import { getLogger } from "@/ui-base/lib/services/logging/LogConfig";
import { LanguageSite, PageIdentifier } from "../../../constants";
import { variablesNavigationBase } from "../../../_base/tools/navigation/navigation";

const log = getLogger("headless.graphql.contentful.navigation.navigation");

export function navigation(pageIdentifier: PageIdentifier) {
 return `
  {
    pageCollection
    {
      items
        {
      navigationTitle
      slug
      urlPath
      showInNavigation
      isHomepage
      sys{
          id
              }
          }
      }
  }
`
};

export function variables(pageIdentifier: PageIdentifier, languageSite: LanguageSite) {
  return {"slug": "home"};
  //return variablesNavigationBase(pageIdentifier, languageSite);
};


export function GetNavQuery() {
  return navigation
}

export function mapNavigationData(data, pageIdentifier: PageIdentifier, languageSite: LanguageSite) {
  log.debug("mapNavigationData contentful", JSON.stringify(data));
  let navItems = data.pageCollection.items
  navItems.map((x) => {
    x.url = x.urlPath;
    x.name = x.navigationTitle;
    x.id = x.sys.id;
  });
  navItems = navItems.filter((x) => typeof (x.url) !== 'undefined' && x.url !== null && x.url !== '');
  return navItems;
}
