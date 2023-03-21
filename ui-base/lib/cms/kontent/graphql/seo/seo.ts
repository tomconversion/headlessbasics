import { LanguageSite, PageIdentifier } from "@/ui-base/lib/cms/constants"
import { variablesMultiSiteByIdentifier } from "../../../_base/tools/common/multiSite";

export function seo(pageIdentifier: PageIdentifier) {
  return `
  query GetSeo($slug: String!) {
      navigationItem_All(where: { _seo : { urlPath : {eq : $slug }} }, limit: 1){
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

export function variables(pageIdentifier:PageIdentifier, languageSite:LanguageSite)
{
  return variablesMultiSiteByIdentifier(pageIdentifier, languageSite);
};

export default function GetSeoQuery() {
  return seo
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
