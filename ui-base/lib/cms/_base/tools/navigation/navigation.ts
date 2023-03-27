import { GetCMS } from "@/ui-base/lib/services/cmsContextService";
import { CmsVariant, CmsVariants, LanguageSite, PageIdentifier } from "../../../constants";
import { GetHomepageVariant, GetMultiSiteSlugByIdentifier } from "../../../heartcore/tools/urlTools";
import { sanitiseForKontent } from "../cms/kontent/kontentTools";



export function variablesNavigationBase(pageIdentifier: PageIdentifier, languageSite:LanguageSite)
{
  // Regadless of the page type, we always want to get the homepage for navigation purposes
  let result;
  if(pageIdentifier.cmsType === 'homepage')
  {
    result = {'slug': GetMultiSiteSlugByIdentifier(pageIdentifier, languageSite)};
  }else {
    result = {'slug': GetMultiSiteSlugByIdentifier(GetHomepageVariant(), languageSite)}; // Get the homepage (not the current page
  }  
  if(GetCMS() == "kontent"){
    result = sanitiseForKontent(result);
  }
  return result;
};

export function variablesById(id: string)
{
  let result = {'id': id};
  return result;
};

