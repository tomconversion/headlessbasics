import { LanguageSite, PageIdentifier } from "../../../constants";
import { GetMultiSiteSlug, GetMultiSiteSlugByIdentifier } from "../../../heartcore/tools/urlTools";

export function variablesMultiSiteSlug(slug:string, languageSite:LanguageSite)
{
  return {'slug': GetMultiSiteSlug(slug, languageSite)};
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
