import { CmsVariant, CmsVariants, LanguageSite, PageIdentifier } from "../../../constants";
import { GetHomepageVariant, GetMultiSiteSlugByIdentifier } from "../../../heartcore/tools/urlTools";



export function variablesNavigationBase(pageIdentifier: PageIdentifier, languageSite:LanguageSite)
{
  // Regadless of the page type, we always want to get the homepage for navigation purposes
  if(pageIdentifier.cmsType === 'homepage')
  {
    return {'slug': GetMultiSiteSlugByIdentifier(pageIdentifier, languageSite)};
  }else {
    return {'slug': GetMultiSiteSlugByIdentifier(GetHomepageVariant(), languageSite)}; // Get the homepage (not the current page
  }  
};

