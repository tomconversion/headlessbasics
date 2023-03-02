import { PageIdentifier } from "@/lib/cms/constants"

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
  return `query GetHeroCollectionBySlug($slug: String!) {
    heroComponentCollection(where: { slug: $slug }, limit: 1) {
      items {
        slug
        heroDescription
        heroImage {
          url
        }
        buttonLink {
          name
          target
          type
          url
        }
      }
    }
  }`
}

export function variables(pageIdentifier: PageIdentifier) {
  const result = { slug: pageIdentifier.backEndSlug }
  // console.log("HERO VARIABLE --", result)
  return result
}

export default function GetHeroQuery() {
  return hero
}

export function mapHeroData(data: any): HeroData[] {
  const heroes: HeroData[] = []
  if (data.heroComponentCollection.items.length > 0) {
    data.heroComponentCollection.items.forEach((hero: any) => {
      heroes.push({
        name: hero?.slug,
        imageUrl: hero?.heroImage.url,
        description: hero?.heroDescription,
        buttonLink: hero?.buttonLink,
      })
    })
  }

  return heroes
}
