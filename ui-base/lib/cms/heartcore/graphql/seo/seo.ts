import { CmsVariants, LanguageSite, PageIdentifier } from "@/ui-base/lib/cms/constants";
import { getLogger } from "@/ui-base/lib/services/logging/LogConfig";
import { variablesMultiSiteByIdentifier } from "../../../_base/tools/common/multiSite";
import { GetMultiSiteSlugByIdentifier } from "../../tools/urlTools";

const log = getLogger("headless.graphql.heartcore.seo.seo");

export function seo(pageIdentifier:PageIdentifier)
{
  
  let query= `
  query PageBySlug($slug: String!) {
    ${pageIdentifier.cmsType}(url: $slug) {
      slug:url
      sEODescription
      sEOTitle
      name
      id
    }
  }`
  return query;
};

export function variables(pageIdentifier: PageIdentifier, languageSite:LanguageSite)
{
  const variables = variablesMultiSiteByIdentifier(pageIdentifier, languageSite);
  return variables;
};

export default function GetSeoQuery() {
  return seo;
}

export function mapSeoData(data, pageIdentifier:PageIdentifier, languageSite:LanguageSite) {
  log.debug("heartcore mapSeoData", JSON.stringify(data));
  const result = data[pageIdentifier.cmsType];
  return {seoTitle: result.sEOTitle, seoDescription: result.sEODescription};
}