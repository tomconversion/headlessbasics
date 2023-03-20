import { CmsVariants, LanguageSite, PageIdentifier } from "@/ui-base/lib/cms/constants";
import { GetMultiSiteSlug } from "../../tools/urlTools";

export function breadcrumb()
{
  return `  
  query ParentPageTypeBySlug($slug: String!) {
    content(url: $slug) {
      url
      contentTypeAlias
      name
      ... on Homepage {
        superAlias
      }
      ... on SubComponentsPage {
        superAlias
      }
      ... on GridContentPage {
        superAlias
      }
      parent {
        url
        contentTypeAlias
        name
        ... on Homepage {
          superAlias
        }
        ... on SubComponentsPage {
          superAlias
        }
        ... on GridContentPage {
          superAlias
        }
        parent {
          url
          contentTypeAlias
          name
          ... on Homepage {
            superAlias
          }
          ... on SubComponentsPage {
            superAlias
          }
          ... on GridContentPage {
            superAlias
          }
          parent {
            url
            contentTypeAlias
            name
            ... on Homepage {
              superAlias
            }
            ... on SubComponentsPage {
              superAlias
            }
            ... on GridContentPage {
              superAlias
            }
          }
        }
      }
    }
  }
   
  `
};

export function variables(slug:string, languageSite:LanguageSite)
{
  return {'slug': GetMultiSiteSlug(slug, languageSite)};
};

export default function GetBreadcrumbQuery() {
  return breadcrumb;
}

export function mapBreadcrumbData(data, pageIdentifier:PageIdentifier, languageSite:LanguageSite) {
    
  return mapBreadcrumbStructure(data.content);
}

export function mapBreadcrumbStructure(data) {
    
  let nodes = [];

  addNode(data);

  const breadcrumb = {
    heading: "Breadcrumb : Default",
    links: []
  };

  
  function addNode(content) {
    nodes.push(cleanupSingleLevel(content));
    if (content.parent) {
      addNode(content.parent);
    }
  }
    
  for(var i=nodes.length-1; i>-1; i--){
    let current = nodes[i];
    let link = current.slug.replace('/us-homepage', '');
    link = current.slug.replace('/au-homepage', '/au');
    if(current.urlPath)
      link = current.urlPath;  
    if(current.superAlias){
      link = current.superAlias;
    }
    breadcrumb.links.push({
      href: link,
      text: current.name
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

  if(data.urlPath){
    data.slug = data.urlPath;
  }else if(data.url){
    data.slug = data.url;
    data.url = data.url.replace('/us-homepage', '');  
    data.url = data.url.replace('/au-homepage', '/au');  
  }else if(data._seo?.urlPath){
    data.slug = data._seo.urlPath;
    data.url = data._seo.urlPath;  
  }

  return data;
}