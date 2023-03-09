import { CmsVariants, PageIdentifier } from "@/ui-base/lib/cms/constants";
import { mapBreadcrumbStructure } from "../../../contentful/tools/urlTools";

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
          ... on DynamicPage {
            superAlias
          }
          ... on Landing {
            superAlias
          }
          parent {
            url
            contentTypeAlias
            name
            ... on Homepage {
              superAlias
            }
            ... on DynamicPage {
              superAlias
            }
            ... on Landing {
              superAlias
            }
            parent {
              url
              contentTypeAlias
              name
              ... on Homepage {
                superAlias
              }
              ... on DynamicPage {
                superAlias
              }
              ... on Landing {
                superAlias
              }
              parent {
                url
                contentTypeAlias
                name
                ... on Homepage {
                  superAlias
                }
                ... on DynamicPage {
                  superAlias
                }
                ... on Landing {
                  superAlias
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
  let umbracoSlug = CmsVariants.variants.heartcore.slugPrefx + "/" + slug;
  umbracoSlug = umbracoSlug.replace(/\/+/g, '/');
  const result = {'slug': umbracoSlug};
  return result;
};

export default function GetBreadcrumbQuery() {
  return breadcrumb;
}

export function mapBreadcrumbData(data, pageIdentifier:PageIdentifier) {
    
  return mapBreadcrumbStructure(data.content);


  // let nodes = [];

  // function addNode(content) {
  //   nodes.push(cleanupSingleLevel(content));
  //   if (content.parent) {
  //     addNode(content.parent);
  //   }
  // }

  // addNode(data.content);

  // const breadcrumb = {
  //   heading: "Breadcrumb : Default",
  //   links: []
  // };
  
  // for(var i=nodes.length-1; i>-1; i--){
  //   let current = nodes[i];
  //   let link = current.slug.replace('/homepage', '');
  //   if(current.superAlias){
  //     link = current.superAlias;
  //   }
  //   breadcrumb.links.push({
  //     href: link,
  //     text: current.name
  //   });
  // }

  // return breadcrumb;
}

// export function cleanupSingleLevel(data) {
//   data.name = data.name.replace('/', '');
//   data.slug = data.url;
//   data.url = data.url.replace('/homepage', '');  
//   return data;
// }