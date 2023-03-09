import { collectSitemapNavigationStructure } from "./graphqlDataService";

export async function collectAllRoutes() {
      
  const data = await collectSitemapNavigationStructure();  

  // console.log("collectAllRoutes data", JSON.stringify(data));

  // Get the paths we want to pre-render based on posts

  let paths = [];

  data.map((page) => {
    if(page.superAlias && page.superAlias != '')
    {
      let parts = page.superAlias.split('/');   
      parts = parts.filter((x) => x != '');
      // console.log("collectAllRoutes super alias", parts);
      paths.push({
        params: {slug: parts },
      });
    }else {

      // console.log("collectAllRoutes page", JSON.stringify(page));
      // console.log("collectAllRoutes page.url", JSON.stringify(page.url));

      if(page.url){
        let parts = page.url.split('/');    
        parts = parts.filter((x) => x != '');
        // console.log("collectAllRoutes parts", parts);
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
  