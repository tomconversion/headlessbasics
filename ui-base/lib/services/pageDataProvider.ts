import { LanguageSite } from "../cms/constants";
import { buildPageData, collectSitemapNavigationStructure, getPageTypeBySlug } from "./graphqlDataService";

export async function collectDynamicPageData(params, slugCleanedUp, languageSite:LanguageSite) {
      
    let selectedSlug = slugCleanedUp;

    const sitemapStructure = await collectSitemapNavigationStructure(languageSite);
    const match = sitemapStructure.find(
      (page) => page.superAlias === "/" + slugCleanedUp
    );
  
    if(typeof(match) !== 'undefined'){ // We have a super alias match
      selectedSlug = match.url;
    }
    
    const pageType = await getPageTypeBySlug(selectedSlug, languageSite);
    console.log("collectDynamicPageData > pageType > ", pageType);
    const pageData = await buildPageData(pageType, true, languageSite, {slug: selectedSlug}); 

    return { pageData, selectedSlug};
}

export function GetPageComponentData(data, field){
  const fieldName = field.toLowerCase();
  if(data?.data?.pageComponentData && data?.data?.pageComponentData.hasOwnProperty(fieldName) && data?.data?.pageComponentData[field]){
      return data?.data?.pageComponentData[field];
  }
}