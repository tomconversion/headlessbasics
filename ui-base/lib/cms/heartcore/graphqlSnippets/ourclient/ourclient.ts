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

export function mapOurClientData(data): OurClientData {
  const sectionNode = data?.homepage?.children?.edges?.[0]?.node

  if (!sectionNode || sectionNode.__typename !== "DataFolder") {
    throw new Error("Invalid data format: Our clients section not found.")
  }

  const sectionName = sectionNode?.children?.edges?.[0]?.node?.name
  if (!sectionName) {
    throw new Error("Invalid data format: Our clients section name not found.")
  }

  const clients = sectionNode?.children?.edges?.[0]?.node?.clientLogo?.map(
    ({ media }) => ({
      name: media?.name,
      logoUrl: media?.url,
    })
  )

  if (!clients?.length) {
    throw new Error(
      "Invalid data format: No clients found in the our clients section."
    )
  }

  return {
    name: sectionName,
    clients,
  }
}
