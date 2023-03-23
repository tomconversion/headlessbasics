import { getLogger } from "@/ui-base/lib/services/logging/LogConfig";
import { LanguageSite, PageIdentifier } from "../../../constants";

const log = getLogger("headless.graphql.heartcore.common.multiSite");

const sitemap = `
{
  navigationItem_All{
     items{
         _system_{
             lastModified
         }
         ... on NavigationItem{
              _seo{
                    urlPath
                    untitledMultipleChoice{
                        items{
                            _system_{
                                codename
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

export function mapSitemapData(data : any, pageIdentifier:PageIdentifier, languageSite:LanguageSite) {
  let nodes = data.navigationItem_All.items;  
  nodes.map((x) => {
    x.url = x._seo.urlPath;
    x.slug = x._seo.urlPath;
    x.updateDate = x._system_.lastModified;
    x.showInSitemap = true;
    if(x._seo.untitledMultipleChoice.items.length > 0){
      x.showInSitemap = x._seo.untitledMultipleChoice.items.find((y) => y._system_.codename === "hide_in_sitemap") ? false : true;
    }
  });
  // nodes = nodes.filter((x) => (!(x.seoTitle.indexOf("_") > -1)));
  // nodes = nodes.filter((x) => (!(x.seoTitle.indexOf("global-settings") > -1)));
  log.debug("graphqlDataService > kontent > mapSitemapData > nodes > ", nodes);
  return nodes;
}