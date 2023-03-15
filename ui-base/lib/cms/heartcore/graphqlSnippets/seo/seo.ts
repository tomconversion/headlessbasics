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
  let umbracoSlug = CmsVariants.variants.heartcore.slugPrefx + "/" + pageIdentifier.backEndSlug;
  umbracoSlug = umbracoSlug.replace(/\/+/g, '/');
  const result = {'slug': umbracoSlug};
  return result;
};

export default function GetSeoQuery() {
  return seo;
}

export function mapSeoData(data, pageIdentifier:PageIdentifier) {
  const result = data[pageIdentifier.cmsType];
  return {seoTitle: result.sEOTitle, seoDescription: result.sEODescription};
}