import { CmsVariants, LanguageSite, PageIdentifier } from "@/ui-base/lib/cms/constants";
import { GetMultiSiteSlugByIdentifier } from "../../tools/urlTools";

export function seo(pageIdentifier:PageIdentifier)
{
  return `
  query PageBySlug($slug: String!) {
    ${pageIdentifier.cmsType}(url: $slug) {
      slug:url
      sEODescription
      sEOTitle
      name
      id
    }
  }`
};

export function variables(pageIdentifier: PageIdentifier, languageSite:LanguageSite)
{
  return {'slug': GetMultiSiteSlugByIdentifier(pageIdentifier, languageSite)};
};

export default function GetSeoQuery() {
  return seo;
}

export function mapSeoData(data, pageIdentifier:PageIdentifier) {
  const result = data[pageIdentifier.cmsType];
  return {seoTitle: result.sEOTitle, seoDescription: result.sEODescription};
}