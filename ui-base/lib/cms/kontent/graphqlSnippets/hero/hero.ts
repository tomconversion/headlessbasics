import { LanguageSite, PageIdentifier } from "@/ui-base/lib/cms/constants"

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
    homepage(codename: $slug) {
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
  `
}

export function variables(pageIdentifier: PageIdentifier) {
  // const result = { slug: pageIdentifier.backEndSlug }
  const result = { slug: "homepage" }
  // console.log("HERO VARIABLE --", result)
  return result
}

export default function GetHeroQuery() {
  return hero
}

export function mapHeroData(data: any, pageIdentifier:PageIdentifier, languageSite:LanguageSite): HeroData[] {
  const items = data?.homepage?.bodyItems?.items
  const heroData: HeroData[] = []

  items?.forEach((item: any) => {
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

  return heroData
}
