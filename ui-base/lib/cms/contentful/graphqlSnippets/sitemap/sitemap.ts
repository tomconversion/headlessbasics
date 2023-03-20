import { LanguageSite, PageIdentifier } from "../../../constants";
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
            urlPath                               
          }
      }
  }
}  
`;

export {sitemap};

export default function GetSitemapQuery() {
  return sitemap;
}

export function mapSitemapData(data : any, pageIdentifier:PageIdentifier, languageSite:LanguageSite) {
  let nodes = data.pageCollection.items;  
  nodes.map((x) => {
    x.url = x.urlPath;
    x.slug = x.urlPath;
    x.updateDate = x.sys.publishedAt;
  });
  nodes = nodes.filter((x) => (!(x.seoTitle.indexOf("_") > -1)));
  nodes = nodes.filter((x) => (!(x.seoTitle.indexOf("global-settings") > -1)));
  return nodes;
}