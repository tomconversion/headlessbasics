import { LanguageSite, PageIdentifier } from "../../../constants";

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

export function mapSitemapData(data : any, pageIdentifier:PageIdentifier, languageSite:LanguageSite) {
  let nodes = data.allContent.edges.map((x) => x.node); 
  
  // Filter out the nodes based on matching the language site prefix in the url
  if(typeof(languageSite) !== 'undefined' && languageSite !== null && languageSite.homepageSlugPrefix !== null && languageSite.homepageSlugPrefix !== '')
  {;
    nodes = nodes.filter((x) => x.url.indexOf(languageSite.homepageSlugPrefix) > -1);
  }else {
    console.log("mapSitemapData > no language set", nodes.length);
  }

  nodes.map((x) => {
    x.name = x.name.replace('/', '');
    x.slug = x.url;
    x.url = x.url.replace('/us-homepage', '');
    x.url = x.url.replace('/au-homepage', '/au');
  });
  nodes = nodes.filter((x) => (!(x.name.indexOf("_") > -1)));
  return nodes;
}