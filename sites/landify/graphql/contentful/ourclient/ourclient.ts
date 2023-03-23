import { LanguageSite, PageIdentifier } from "@/ui-base/lib/cms/constants"
import { variablesMultiSiteByIdentifier } from "@/ui-base/lib/cms/_base/tools/common/multiSite"


export interface OurClientData {
  name: string
  clients: {
    name: string
    logoUrl: string
  }[]
}

export function ourclient(pageIdentifier: PageIdentifier) {
  return `query GetPageBySlug($slug: String!) {
        ${pageIdentifier.cmsType}(where: { slug: $slug }, limit: 1) {
          items {
            componentsCollection {
            items {
              ... on OurClients {
                __typename
                internalName
                clientsCollection {
                  items {
                    fileName
                    title
                    url
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
  const result = { slug: "/" }
  // log.debug("ourclient VARIABLE --", result)
  return result
}

export default function GetourClientQuery() {
  return ourclient
}

export function mapOurClientData(data: any): OurClientData[] {
  const { items } = data.pageCollection.items[0].componentsCollection
  const ourClients = []

  for (const component of items) {
    let tempArr = {
      name: component.internalName,
      clients: [],
    }
    if (component.__typename === "OurClients" && component.clientsCollection) {
      for (const client of component.clientsCollection.items) {
        tempArr.clients.push({
          fileName: client.fileName,
          name: client.title,
          logoUrl: client.url,
        })
      }
    }
    if (tempArr.clients.length > 0) {
      ourClients.push(tempArr)
    }
  }
  return ourClients
}
