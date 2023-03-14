import { CmsVariants, PageIdentifier } from "../../../constants"

export interface OurClientData {
  name: string
  clients: {
    name: string
    logoUrl: string
  }[]
}

export function ourclient() {
  return `
  query GetPageBySlug($slug: String!) {
    homepage(codename: $slug) {
      title
      bodyItems{
        totalCount
        items{
        ... on OurClients {
          __typename
          clients {
            items {
              name
              description
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
  const result = { slug: "homepage" }
  // console.log("ourclient VARIABLE --", result)
  return result
}

export default function GetourClientQuery() {
  return ourclient
}

export function mapOurClientData(data: any): OurClientData[] {
  console.log("CLients DATA --", JSON.stringify(data, null, 2))
  const items = data?.homepage?.bodyItems?.items
  const ourClients = []

  items?.forEach((item: any) => {
    let tempArr = {
      name: item?.name ?? "",
      clients: [],
    }
    if (item.__typename === "OurClients") {
      for (const client of item.clients.items) {
        tempArr.clients.push({
          fileName: client.name,
          name: client.description,
          logoUrl: client.url,
        })
      }
    }
    if (tempArr.clients.length > 0) {
      ourClients.push(tempArr)
    }
  })

  return ourClients
}
