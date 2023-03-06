import { CmsVariants, PageIdentifier } from "../../../constants"

export interface OurClientData {
  name: string
  clients: {
    name: string
    logoUrl: string
  }[]
}

export function ourclient() {
  return `query HomepageComponentsBySlug($slug: String!) {
    homepage(url: $slug) {
      slug: url
      name
      children(where: { contentTypeAlias_ends_with: "dataFolder" }) {
        edges {
          node {
            __typename
            contentTypeAlias
            children(where: { contentTypeAlias_ends_with: "OurClients" }) {
              edges {
                node {
                  name
                  ... on OurClients {
                    __typename
                    clientLogo {
                      media {
                        name
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
    }
  }
  `
}

export function variables(pageIdentifier: PageIdentifier) {
  const result = {
    slug:
      CmsVariants.variants.heartcore.slugPrefx +
      "/" +
      pageIdentifier.backEndSlug,
  }
  // console.log("ourclient VARIABLE --", result)
  return result
}

export default function GetourClientQuery() {
  return ourclient
}

export function mapOurClientData(data): OurClientData[] {
  const result = []
  const sectionNode = data?.homepage?.children?.edges?.[0]?.node

  if (!sectionNode || sectionNode.__typename !== "DataFolder") {
    throw new Error("Invalid data format: Our clients section not found.")
  }

  const sections = sectionNode?.children?.edges

  for (const section of sections) {
    if (section.node.__typename === "OurClients") {
      const clients = section.node.clientLogo?.map((client) => {
        return {
          name: client.media.name,
          logoUrl: client.media.url,
        }
      })

      if (clients.length > 0) {
        result.push({
          name: section.node.name,
          clients: clients,
        })
      }
    }
  }

  return result
}
