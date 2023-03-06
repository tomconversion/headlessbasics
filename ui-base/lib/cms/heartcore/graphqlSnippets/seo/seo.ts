import { CmsVariants, PageIdentifier } from "@/ui-base/lib/cms/constants";

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

export function variables(pageIdentifier:PageIdentifier)
{
  const result = {'slug': CmsVariants.variants.heartcore.slugPrefx + "/" + pageIdentifier.backEndSlug};
  return result;
};

export default function GetSeoQuery() {
  return seo;
}

export function mapSeoData(data, pageIdentifier:PageIdentifier) {
  const result = data[pageIdentifier.cmsType];
  return {seoTitle: result.sEOTitle, seoDescription: result.sEODescription};
}