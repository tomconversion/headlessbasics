import { GetCMS } from "@/ui-base/lib/services/cmsContextService";
import { getLogger } from "@/ui-base/lib/services/logging/LogConfig";
import { GetSite } from "@/ui-base/lib/services/siteContextService";
import { LanguageSite, PageIdentifier } from "../../../constants";
import { GetMultiSiteSlug, GetMultiSiteSlugByIdentifier } from "../../../heartcore/tools/urlTools";
import { sanitiseForKontent } from "../cms/kontent/kontentTools";

const log = getLogger("headless.graphql.heartcore.common.multiSite");

export function variablesMultiSiteSlug(slug:string, languageSite:LanguageSite)
{
  log.debug("variablesMultiSiteSlug > ", slug, languageSite);
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

export function variablesById(id:String)
{
  const result = {'id': id};
  return result;
};
