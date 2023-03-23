import { LanguageSite, PageIdentifier } from "@/ui-base/lib/cms/constants"
import { variablesMultiSiteByIdentifier } from "@/ui-base/lib/cms/_base/tools/common/multiSite"
import { variablesNavigationBase } from "@/ui-base/lib/cms/_base/tools/navigation/navigation"
import { getLogger } from "@/ui-base/lib/services/logging/LogConfig";

const log = getLogger("headless.graphql.kontent.ourclient.ourclient");

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
    homepage_All(where: { _seo : { urlPath : {eq : $slug }} }, limit: 1){
        items{        
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
}    
  `
}

export function variables(pageIdentifier: PageIdentifier, languageSite:LanguageSite) {
  let variables = variablesNavigationBase(pageIdentifier, languageSite);
  log.debug("variables kontent ourclient", variables);
  return variables;
}

export default function GetourClientQuery() {
  return ourclient
}

export function mapOurClientData(data: any, pageIdentifier:PageIdentifier, languageSite:LanguageSite): OurClientData[] {
  const items = data.homepage_All?.items;
  
  log.debug("items kontent mapOurClientData", items)

  const ourClients = [];

  if(items.length === 0 && items[0].bodyItems?.items.length === 0) return ourClients;

  items[0]?.bodyItems?.items.forEach((item: any) => {
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
