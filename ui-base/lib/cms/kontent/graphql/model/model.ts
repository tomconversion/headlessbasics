import { CmsVariants, LanguageSite, PageIdentifier } from "@/ui-base/lib/cms/constants";
import { json } from "stream/consumers";
import { sanitiseForKontent } from "../../../_base/tools/cms/kontent/kontentTools";
import { variablesMultiSiteSlug } from "../../../_base/tools/common/multiSite";

export function model(urlPath:string)
{
  return `  
        query GetModel($slug: String!) {
            navigationItem_All(where: { _seo : { urlPath : {eq : $slug }} }, limit: 1){
                items{
                    _system_{
                        id
                        type{
                            _system_{
                                codename
                                name
                            }
                        }
                    }
                    label
                    _seo{
                        urlPath
                    }            
                }
            }
          }
        `
};

export function variables(urlPath: string, languageSite:LanguageSite) {
  console.log("kontent model variables", JSON.stringify(variablesMultiSiteSlug(urlPath, languageSite)));
  return variablesMultiSiteSlug(urlPath, languageSite);
}

export default function GetModelQuery() {
  return model;
}

export function mapModelData(data, pageIdentifier:PageIdentifier, languageSite:LanguageSite) {
  console.log("mapModelData Kontent", data);
  const typeNameIniitial = data?.navigationItem_All?.items[0]._system_?.type?._system_?.codename;
  if(typeNameIniitial == 'navigation_item'){
    return CmsVariants.variants.contentful.pageTypes.dynamic.pageVariant;
  }
}