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

export function mapSeoData(data) {
  let nodes = data.allHomepage1.edges.map((x) => x.node);
  const mappedNav =  nodes[0].children.items;
  mappedNav.map((x) => {
    x.name = x.name.replace('/', '');
    x.slug = x.name;
  });
  return mappedNav;
}