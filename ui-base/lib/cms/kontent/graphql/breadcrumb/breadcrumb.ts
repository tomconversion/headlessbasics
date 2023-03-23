import { CmsVariants, LanguageSite, PageIdentifier } from "@/ui-base/lib/cms/constants";
import { variablesMultiSiteSlug } from "../../../_base/tools/common/multiSite";

export function breadcrumb()
{
  return `          

  query GetBreadcrumbs($slug: String!) {
    navigationItem_All(where: { _seo : { urlPath : {eq : $slug }} }, limit: 1){
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

export function variables(urlPath: string, languageSite:LanguageSite) {
  log.debug("breadcrumb kontent variables: " + JSON.stringify(variablesMultiSiteSlug(urlPath, languageSite)))
  return variablesMultiSiteSlug(urlPath, languageSite);
}

export default function GetBreadcrumbQuery() {
  return breadcrumb;
}

export function mapBreadcrumbData(data, pageIdentifier:PageIdentifier, languageSite:LanguageSite) {
  log.debug("breadcrumb kontent mapBreadcrumbData: " + JSON.stringify(data));
  if(data.navigationItem_All.items.length == 0){ 
    return [];
  }
  return mapBreadcrumbStructure(data.navigationItem_All.items);
}

export function mapBreadcrumbStructure(data) {
    
  let nodes = [];

  addNode(data);

  const breadcrumb = {
    heading: "Breadcrumb : Default",
    links: []
  };

  
  function addNode(content) {

    content.forEach(item => {
      if(item && item._seo && item._seo.urlPath){
        nodes.push(cleanupSingleLevel(item));
      }
    });
    // nodes.push(cleanupSingleLevel(content));
    
    if(Array.isArray(content)){
      content.forEach(element => {
        if(element && element._seo.parents.items && element._seo.parents.items.length > 0){
          element._seo.parents.items.forEach(item => {

            if(item.__typename && item.__typename == "Homepage"){
              nodes.push({ label: "Home", urlPath: "/" });
            }else if(item.__typename && item.__typename == "NavigationItem"){
              nodes.push({ label: item.label, urlPath: item._seo.urlPath });
            }else if(item.forEach && item.length > 0) {
              item.forEach(innerItem => {
                  addNode(innerItem);
                }
              );
            }            
          });
          //addNode();
        }
      });
    }
  }
    
  for(var i=nodes.length-1; i>-1; i--){
    let current = nodes[i];
    let link = "";

    if(current.url)
      link = current.url;  

    let currentName = "";
    if(current.label){
      currentName = current.label;
    }

    breadcrumb.links.push({
      href: link,
      text: currentName
    });
  }

  return breadcrumb;
}

export function cleanupSingleLevel(data) {  
  
  if(data.name){
    data.name = data.name.replace('/', '');
  }else if(data.navigationTitle){
    data.name = data.navigationTitle;
  }else if(data.labal){
    data.name = data.labal;
  }

  if(data._seo?.urlPath){
    data.slug = data._seo.urlPath;
    data.url = data._seo.urlPath;  
  }

  return data;
}