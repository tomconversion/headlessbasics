import { PageIdentifier } from "@/ui-base/lib/cms/constants";

export function seo(pageIdentifier:PageIdentifier)
{
  return `
  query GetPageBySlug($slug: String!) {
    ${pageIdentifier.cmsType}(where: {slug: $slug}, limit: 1) {
      items {
        seoTitle
        seoDescription
        navigationTitle
        showInNavigation
        urlPath
      }
    }
  }  
  `
};

export function variables(pageIdentifier:PageIdentifier)
{
  const result = {'slug': pageIdentifier.backEndSlug};
  return result;
};

export default function GetSeoQuery() {
  return seo;
}

export function mapSeoData(data) {
  const result = data.pageCollection.items;
  let seoTitle = "";
  let seoDescription = "";
  if(result.length > 0)
  {
    
    seoTitle = result[0].seoTitle;
    seoDescription = result[0].seoDescription;
  }
  return {seoTitle: seoTitle, seoDescription: seoDescription};
}