import { GetCMSVariant } from "@/ui-base/lib/services/cmsContextService";
import { GetSite } from "@/ui-base/lib/services/siteContextService";
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
    log.debug("mapSitemapData > no language set", nodes.length);
  }

  nodes.map((x) => {
    x.name = x.name.replace('/', '');
    x.slug = x.url;
    GetSite().siteSettings.languageSites.map((y) => {
      x.url = x.url.replace(y.homepageSlugPrefix, '');
    });
  });
  nodes = nodes.filter((x) => (!(x.name.indexOf("_") > -1)));
  return nodes;
}