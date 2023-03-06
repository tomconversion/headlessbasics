import { CmsVariants, PageIdentifier } from "../../../constants"


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
  return `query HomepageComponentsBySlug($slug: String!) {
    homepage(url: $slug) {
      slug:url
      name
      id
      children(where: { contentTypeAlias_ends_with: "dataFolder" }) {
        edges {
          node {
            __typename
            contentTypeAlias
            children(where: { contentTypeAlias_ends_with: "heroComponent" }) {
                edges {
                    node{
                      __typename
                      name
                      ... on HeroComponent{
                        heroImage{
                          url                        
                        }
                        heroDescription
                        buttonLink{
                          name
                          target
                          type
                          udi
                          url
                        }
                      }                    
                    }
                }
            }
          }
        }
      }
    }
  }`
}

export function variables(pageIdentifier: PageIdentifier) {
  let umbracoSlug = CmsVariants.variants.heartcore.slugPrefx + "/" + pageIdentifier.backEndSlug;
  umbracoSlug = umbracoSlug.replaceAll("//", "/");
  const result = {'slug': umbracoSlug};
  return result;
}

export default function GetHeroQuery() {
  return hero
}

export function mapHeroData(data: any, pageIdentifier:PageIdentifier): HeroData[] {
  const heroes: HeroData[] = []

  // Check if the response data is valid and contains the expected structure
  if (data?.homepage?.children?.edges) {
    // Loop through the edges and extract data for each hero component
    data.homepage.children.edges.forEach((edge: any) => {
      const node = edge.node
      if (node.__typename === "DataFolder" && node.children?.edges) {
        node.children.edges.forEach((childEdge: any) => {
          const childNode = childEdge.node
          if (childNode.__typename === "HeroComponent" && childNode.heroImage) {
            // Extract relevant data from the hero component
            const hero: HeroData = {
              name: childNode.name,
              imageUrl: childNode.heroImage.url,
              description: childNode.heroDescription,
              buttonLink: null,
            }
            if (childNode.buttonLink && childNode.buttonLink.length > 0) {
              hero.buttonLink = childNode.buttonLink[0]
            }
            heroes.push(hero)
          }
        })
      }
    })
  }

  return heroes
}
