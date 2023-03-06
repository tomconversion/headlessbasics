import { buildPageData, collectSitemapNavigationStructure, getPageTypeBySlug } from "./graphqlDataService";

export async function collectDynamicPageData(params, slugCleanedUp) {
      
    let selectedSlug = slugCleanedUp;

    const sitemapStructure = await collectSitemapNavigationStructure();
    const match = sitemapStructure.find(
      (page) => page.superAlias === "/" + slugCleanedUp
    );
  
    if(typeof(match) !== 'undefined'){ // We have a super alias match
      selectedSlug = match.url;
    }
  
    const pageType = await getPageTypeBySlug(selectedSlug);
    const pageData = await buildPageData(pageType, {slug: selectedSlug}); 

    return { pageData, selectedSlug};
}
    