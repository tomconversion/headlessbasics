import { LanguageSite } from "../cms/constants";
import { collectSitemapNavigationStructure } from "./graphqlDataService";

export async function collectAllRoutes(languageSite:LanguageSite) {
      
  const data = await collectSitemapNavigationStructure(languageSite);  
  let paths = [];
  data.map((page) => {
    if(page.superAlias && page.superAlias != '')
    {
      let parts = page.superAlias.split('/');   
      parts = parts.filter((x) => x != '');
      paths.push({
        params: {slug: parts },
      });
    }else {
      if(page.url){
        let parts = page.url.split('/');    
        parts = parts.filter((x) => x != '');
        if(parts.length > 0){
          if(parts[0] !== 'global-settings'){   
            paths.push({
              params: {slug: parts },
            });
          }
        }
      }
    }
  });  
  
  // Remove empty slugs as they conflict with the homepage. Also remove any _data folders, as the are not renderable pages
  paths = paths.filter((x) => x.params.slug.length > 0 && x.params.slug[0].indexOf("_") == -1);

  return paths;
  }
  