import { collectSitemapNavigationStructure } from "./graphqlDataService";

export async function collectAllRoutes() {
      
  const data = await collectSitemapNavigationStructure();  

  // Get the paths we want to pre-render based on posts

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
      let parts = page.url.split('/');    
      parts = parts.filter((x) => x != '');
      paths.push({
         params: {slug: parts },
      });
    }
  });  
  
  // Remove empty slugs as they conflict with the homepage. Also remove any _data folders, as the are not renderable pages
  paths = paths.filter((x) => x.params.slug.length > 0 && x.params.slug[0].indexOf("_") == -1);

  return paths;
  }
  