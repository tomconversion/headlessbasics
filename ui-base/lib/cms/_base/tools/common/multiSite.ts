import { GetCMS } from "@/ui-base/lib/services/cmsContextService";
import { GetSite } from "@/ui-base/lib/services/siteContextService";
import { LanguageSite, PageIdentifier } from "../../../constants";
import { GetMultiSiteSlug, GetMultiSiteSlugByIdentifier } from "../../../heartcore/tools/urlTools";
import { sanitiseForKontent } from "../cms/kontent/kontentTools";

export function variablesMultiSiteSlug(slug:string, languageSite:LanguageSite)
{
  console.log("variablesMultiSiteSlug > ", slug, languageSite);
  let result = {'slug': GetMultiSiteSlug(slug, languageSite)};
  if(GetCMS() == "kontent"){
    result = sanitiseForKontent(result);
  }
  return result;
};

export function variablesMultiSiteByIdentifier(pageIdentifier: PageIdentifier, languageSite:LanguageSite)
{
  return {'slug': GetMultiSiteSlugByIdentifier(pageIdentifier, languageSite)};
};

export function variablesByName(name:String)
{
  const result = {'name': name};
  return result;
};
