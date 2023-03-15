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
              ... on Homepage{
                showInSitemap
                showInNavigation
                superAlias
              }
              ... on SubComponentsPage{
               showInSitemap
               showInNavigation
               superAlias
             }
             ... on GridContentPage{
              showInSitemap
              showInNavigation
              superAlias
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
    x.slug = x.url;
    x.url = x.url.replace('/homepage', '');
  });
  nodes = nodes.filter((x) => (!(x.name.indexOf("_") > -1)));
  return nodes;
}