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

export function seo(pageType : string)
{
  return `
  query PageBySlug($slug: String!) {
    ${pageType}(url: $slug) {
      slug:url
      sEODescription
      sEOTitle
      name
      id
    }
  }`
};

export function variables({ slug }: { slug; })
{
  return {slug}
};

export default function GetSeoQuery() {
  return seo;
}