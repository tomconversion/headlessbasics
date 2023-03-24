import { LanguageSite, PageIdentifier } from "@/ui-base/lib/cms/constants"
import { variablesMultiSiteByIdentifier } from "@/ui-base/lib/cms/_base/tools/common/multiSite"


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

export function hero(pageIdentifier: PageIdentifier) {
  return `
  query GetPageBySlug($slug: String!) {
    ${pageIdentifier.cmsType}(where: { slug: $slug }, limit: 1) {
      items {
        componentsCollection {
          items {
            ... on HeroComponent {
              __typename
              heroImage {
                url
                title
              }
              heroDescription
              buttonLink {
                name
                target
                type
                url
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
  const result = { slug: "/" }
  return result
}

export default function GetHeroQuery() {
  return hero
}

export function mapHeroData(data: any, pageIdentifier:PageIdentifier, languageSite:LanguageSite): HeroData[] {
  return (
    data?.pageCollection?.items?.map((page: any) => {
      const heroComponent = page?.componentsCollection?.items?.find(
        (item: any) => item.__typename === "HeroComponent"
      )
      return {
        name: "Hero Section",
        imageUrl: heroComponent?.heroImage?.url ?? "",
        description: heroComponent?.heroDescription ?? "",
        buttonLink: heroComponent?.buttonLink ?? null,
      }
    }) ?? []
  )
}
