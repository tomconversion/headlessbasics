import { NavItemInterface } from "@/ui-base/components/ui/navigation/NavItem"
import { variablesNavigationBase } from "../../../_base/tools/navigation/navigation"
import {
  CmsVariant,
  CmsVariants,
  LanguageSite,
  PageIdentifier,
} from "../../../constants"
import {
  GetHomepageVariant,
  GetMultiSiteSlugByIdentifier,
} from "../../tools/urlTools"

export function navigation(pageIdentifier: PageIdentifier) {
  return `
  query NavigationByParent($slug: String!) {
    homepage(url: $slug) {
      name
      id
      children {
        items {
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
          children {
            items {
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
              children {
                items {
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
        }
      }
    }
  }
  
 `
}

export default function GetNavQuery() {
  return navigation
}

export function variables(
  pageIdentifier: PageIdentifier,
  languageSite: LanguageSite
) {
  return variablesNavigationBase(pageIdentifier, languageSite)
}

export function mapNavigationData(
  data: any,
  pageIdentifier: PageIdentifier,
  languageSite: LanguageSite
): NavItemInterface[] {
  function mapChildItems(items: any[]): NavItemInterface[] {
    return items
      .map((x) => {
        const navItem: NavItemInterface = {
          id: x.id,
          url: x.url.replace(languageSite.homepageSlugPrefix, ""),
          name: x.name.replace("/", ""),
          level: x.level,
          superAlias: x.superAlias,
          showInNavigation: x.showInNavigation,
        }

        if (languageSite.specialSlugPrefix) {
          const valueToRemove = languageSite.specialSlugPrefix.replace(
            /\/+/g,
            ""
          )
          navItem.url = navItem.url.replace(valueToRemove, "")
        }

        if (languageSite.shouldLanguageCodeBeAddedToNav) {
          navItem.url = `/${languageSite.countryCode}/${navItem.url}`
        }

        if (x.children?.items?.length) {
          navItem.children = mapChildItems(x.children.items)
        }

        return navItem
      })
      .filter((x) => !x.name.startsWith("_"))
  }

  let mappedNav: NavItemInterface[] = []

  if (data?.homepage?.children?.items?.length) {
    mappedNav = mapChildItems(data.homepage.children.items)
  }

  return mappedNav
}
