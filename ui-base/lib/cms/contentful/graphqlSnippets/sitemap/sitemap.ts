import { PageIdentifier } from "../../../constants";
import { urlBuilder } from "../../tools/urlTools";

const sitemap = `
{
  pageCollection{
      items{
          showInSitemap
          slug
          seoTitle
          sys{
              publishedAt
          }
          ... on Page{
                  slug
                  parent{
                      ... on Page{
                          slug  
                          parent{
                              ... on Page{
                                  slug   
                                  parent{
                                      ... on Page{
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
}  
`;

export {sitemap};

export default function GetSitemapQuery() {
  return sitemap;
}

export function mapSitemapData(data : any, pageIdentifier:PageIdentifier) {
  let nodes = data.pageCollection.items;  
  nodes.map((x) => {
    x.url = urlBuilder(x);
    x.updateDate = x.sys.publishedAt;
  });
  nodes = nodes.filter((x) => (!(x.seoTitle.indexOf("_") > -1)));
  nodes = nodes.filter((x) => (!(x.seoTitle.indexOf("global-settings") > -1)));
  return nodes;
}