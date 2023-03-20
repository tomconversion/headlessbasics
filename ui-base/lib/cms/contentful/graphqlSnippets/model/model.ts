import { CmsVariants, LanguageSite, PageIdentifier } from "@/ui-base/lib/cms/constants";

export function model(urlPath:string)
{
  return `
  query GetPageByLongSlug($urlPath: String!) {
    pageCollection(where: { urlPath : $urlPath }, limit: 1) {
        items{   
            __typename         
            ... on Page{
                seoTitle
            }
        }
    }
}`
};

export function variables(urlPath:string, pageIdentifier:PageIdentifier, languageSite:LanguageSite)
{
  console.log("variables", `/${urlPath}`);
  const result = {'urlPath': `/${urlPath}`};
  return result;
};

export default function GetModelQuery() {
  return model;
}

export function mapModelData(data, pageIdentifier:PageIdentifier, languageSite:LanguageSite) {
  console.log("mapModelData", data);
  const typeNameIniitial = data?.pageCollection?.items[0].__typename;
  if(typeNameIniitial == 'Page'){
    return CmsVariants.variants.contentful.pageTypes.dynamic.pageVariant;
  }
}