import { LanguageSite, PageIdentifier } from "@/ui-base/lib/cms/constants"
import { variablesNavigationBase } from "../../../_base/tools/navigation/navigation"

export interface HeroData {
  name: string
  imageUrl: string
  description: string
  buttonLink: {
    name: string
    target: string | null
    type: string
    udi: string
    url: string
  } | null
}

export function hero() {
  return `
  query GetPageBySlug($slug: String!) {
    homepage_All(where: { _seo : { urlPath : {eq : $slug }} }, limit: 1){
      items{ 
        title
        bodyItems{
          totalCount
          items{
              ... on HeroSection {
              __typename
              title
              content
              image{
                  items{
                      url
                      description
                  }
              }
              actions {
                  items{
                      label
                      navigationItem{
                          ... on NavigationItem{
                              slug
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
}

export function variables(pageIdentifier: PageIdentifier, languageSite:LanguageSite) {
  return variablesNavigationBase(pageIdentifier, languageSite); 
}

export default function GetHeroQuery() {
  return hero
}

export function mapHeroData(data: any, pageIdentifier:PageIdentifier, languageSite:LanguageSite): HeroData[] {
  
  const items = data?.homepage_All?.items
  const heroData: HeroData[] = []

  if(items.length === 0 && items.bodyItems?.items.length === 0) return heroData;

  console.log("kontent hero items", JSON.stringify(items));

  items[0]?.bodyItems?.items?.forEach((item: any) => {

    console.log("kontent hero mapHeroData", item);

    if (item.__typename === "HeroSection") {
      const heroItem: HeroData = {
        name: item.title,
        imageUrl: item.image.items[0].url,
        description: item.content,
        buttonLink:
          item.actions.items.length > 0
            ? {
                name: item.actions.items[0].label,
                target: null,
                type: "",
                udi: "",
                url: `/${item.actions.items[0].navigationItem.slug}`,
              }
            : null,
      }
      heroData.push(heroItem)
    }
  })

  return heroData;
}
