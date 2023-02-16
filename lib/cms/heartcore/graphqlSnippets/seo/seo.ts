// const seo = `
// query PageBySlug($slug: String!) {
//   staticPage(url: $slug) {
//     slug:url
//     sEODescription
//     sEOTitle
//     name
//     id
//   }
// }`;

import { PageIdentifier } from "@/lib/cms/constants";

export function seo(pageIdentifier:PageIdentifier)
{
  return `
  query PageBySlug($slug: String!) {
    ${pageIdentifier.pageVariantMatchToCmsType}(url: $slug) {
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
  const result = {'slug': pageIdentifier.slug};
  console.log("SEO VARIABLE --", result);
  return result;
};

export default function GetSeoQuery() {
  return seo;
}

export function mapSeoData(data) {
  return data.homepage;
}