import { PageIdentifier } from "@/ui-base/lib/cms/constants";

export function seo(pageIdentifier:PageIdentifier)
{
  return `
  query GetSeo($urlPath: String!) {
    navigationItem_All(where: { _seo : { urlPath : {eq : $urlPath }} }, limit: 1){
        items{
            _system_{
                id
            }
            label
            _seo{
                urlPath
                title
                description
            }            
        }
    }
}
  `
};

export function variables(pageIdentifier:PageIdentifier)
{
  console.log("pageIdentifier.backEndSlug: " + pageIdentifier.backEndSlug + "")
  let correctedPath = pageIdentifier.backEndSlug.endsWith('/') ? pageIdentifier.backEndSlug : pageIdentifier.backEndSlug + '/';
  const result = {'urlPath': `/${correctedPath}`};
  console.log("seo variables", result);
  return result;
};

export default function GetSeoQuery() {
  return seo;
}

export function mapSeoData(data) {
  if(data.navigationItem_All.items.length == 0){
    return {seoTitle: "", seoDescription: ""};
  }
  const result = data.navigationItem_All.items[0];
  let seoTitle = result._seo.title;
  let seoDescription = result._seo.description;
  return {seoTitle: seoTitle, seoDescription: seoDescription};
}