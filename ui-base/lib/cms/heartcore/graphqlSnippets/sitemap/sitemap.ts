import { PageIdentifier } from "../../../constants";

const sitemap = `
  {
    allContent {
      edges{
          node {
              id
              level
              name
              url
              sortOrder
              updateDate
              __typename
              ... on DynamicPage{
               showInSitemap
               showInNavigation
             }
             ... on Landing{
               showInSitemap
               showInNavigation
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
  let nodes = data.allContent.edges.map((x) => x.node);  
  nodes.map((x) => {
    x.name = x.name.replace('/', '');
    x.slug = x.name;
    x.url = x.url.replace('/homepage', '');
  });
  nodes = nodes.filter((x) => !x.name.startsWith("_") && typeof(x.showInSitemap) !== 'undefined' && x.showInSitemap === true);
  return nodes;
}