import { fetchAPIGatewayWrapper } from "../cms/cmsDataQueryGateway"
import { fetchAPI } from "./graphqlDataService"

export async function getAltHomepageNavigation() {
    const data = await fetchAPIGatewayWrapper(`
    {
      allHomepage1{
        edges{
          node {
            name
            id
            children{
              items{
                name
                id
                level
              }
            }
          }
        }
      }
  }
    `)
    return data.allHomepage1.edges.map((x) => x.node)
  }