import { CmsVariants, PageIdentifier } from "@/ui-base/lib/cms/constants";
import { mapBreadcrumbStructure } from "../../../contentful/tools/urlTools";

export function breadcrumb()
{
  return `          

  query GetBreadcrumbs($urlPath: String!) {
    navigationItem_All(where: { _seo : { urlPath : {eq : $urlPath }} }, limit: 1){
        items{
            _system_{
                id
            }
            label
            _seo{
                urlPath
                parents{
                    totalCount
                    items{
                        __typename
                        ... on NavigationItem{
                            label
                            _seo{
                                urlPath
                            }
                        }
                    }
                }
            }            
        }
    }
}
  `
};

export function variables(slug:string)
{
  let kontentSlug = CmsVariants.variants.kontent.slugPrefx + "/" + slug;
  kontentSlug = kontentSlug.replace(/\/+/g, '/');
  const result = {'urlPath': kontentSlug};
  return result;
};


export default function GetBreadcrumbQuery() {
  return breadcrumb;
}

export function mapBreadcrumbData(data, pageIdentifier:PageIdentifier) {
  console.log("mapBreadcrumbData: " + JSON.stringify(data));
  if(data.navigationItem_All.items.length == 0){ 
    return [];
  }
  return mapBreadcrumbStructure(data.navigationItem_All);
}