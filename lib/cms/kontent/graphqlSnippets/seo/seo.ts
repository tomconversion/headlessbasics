import { PageIdentifier } from "@/lib/cms/constants";

export function seo(pageIdentifier:PageIdentifier)
{
  return `
  query GetPageBySlug($slug: String!) {
    homepage(codename: $slug) {
      title
      _seo{
          description
          title          
      }      
    }
  } 
  `
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
  let seoTitle = result._seo.title;
  let seoDescription = result._seo.description;
  return {seoTitle: seoTitle, seoDescription: seoDescription};
}