import { CmsVariants, LanguageSite, PageIdentifier } from "@/ui-base/lib/cms/constants";

export function model(urlPath:string)
{
  return `  
        query GetModel($urlPath: String!) {
            navigationItem_All(where: { _seo : { urlPath : {eq : $urlPath }} }, limit: 1){
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

export function variables(urlPath: string) {
  let correctedPath = urlPath.endsWith('/') ? urlPath : urlPath + '/';
  const result = {'urlPath': `/${correctedPath}`};
  console.log("model variables", result);
  return result;
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