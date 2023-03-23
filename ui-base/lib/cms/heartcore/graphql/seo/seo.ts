import { CmsVariants, LanguageSite, PageIdentifier } from "@/ui-base/lib/cms/constants";
import { variablesMultiSiteByIdentifier } from "../../../_base/tools/common/multiSite";
import { GetMultiSiteSlugByIdentifier } from "../../tools/urlTools";

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
  console.log("heartcore seo variables", JSON.stringify(variables));
  return variables;
};

export default function GetSeoQuery() {
  return seo;
}

export function mapSeoData(data, pageIdentifier:PageIdentifier, languageSite:LanguageSite) {
  console.log("heartcore mapSeoData", JSON.stringify(data));
  const result = data[pageIdentifier.cmsType];
  return {seoTitle: result.sEOTitle, seoDescription: result.sEODescription};
}