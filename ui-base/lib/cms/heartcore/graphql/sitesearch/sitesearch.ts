import { getLogger } from "@/ui-base/lib/services/logging/LogConfig";
import { LanguageSite, PageIdentifier } from "../../../constants";
import { variablesById } from "../../../_base/tools/common/multiSite";

const log = getLogger("headless.heartcore.graphql.sitesearch");

export function sitesearch(pageIdentifier:PageIdentifier)
{
  return `
  query SiteSearchById($id: ID!) {
    siteSearch(id: $id) {
       url
       contentTypeAlias
       name
       shouldBoostNameMatch
    }
}
 `
};

export default function GetNsitesearchQuery() {
  return sitesearch;
}

export function variables(id: string, languageSite:LanguageSite)
{
  return variablesById(id); 
};

export function mapSiteSearchData(data : any, pageIdentifier:PageIdentifier, languageSite:LanguageSite) {
  return data?.siteSearch;
}