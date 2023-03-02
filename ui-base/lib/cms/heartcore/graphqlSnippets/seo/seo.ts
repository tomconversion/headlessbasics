import { PageIdentifier } from "@/ui-base/lib/cms/constants";

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
  const result = {'slug': pageIdentifier.backEndSlug};
  console.log("SEO VARIABLE --", result);
  return result;
};

export default function GetSeoQuery() {
  return seo;
}

export function mapSeoData(data) {
  const result = data.homepage;
  return {seoTitle: data.homepage.sEOTitle, seoDescription: data.homepage.sEODescription};
}