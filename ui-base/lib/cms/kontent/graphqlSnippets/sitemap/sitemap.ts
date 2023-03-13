import { PageIdentifier } from "../../../constants";
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

export function mapSitemapData(data : any, pageIdentifier:PageIdentifier) {
  let nodes = data.navigationItem_All.items;  
  nodes.map((x) => {
    x.url = x._seo.urlPath;
    x.slug = x._seo.urlPath;
    x.updateDate = x._system_.lastModified;
  });
  // nodes = nodes.filter((x) => (!(x.seoTitle.indexOf("_") > -1)));
  // nodes = nodes.filter((x) => (!(x.seoTitle.indexOf("global-settings") > -1)));
  return nodes;
}