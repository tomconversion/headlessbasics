
// subComponentContent: 


import { CmsVariants, PageIdentifier } from "../../../constants"

export function subComponentContent() {
  return `query ComponentCintentBySlug($slug: String!) {
    subComponentsPage(url: $slug) {
      slug:url
      name
      id
    }
  }`
}

export function variables(pageIdentifier: PageIdentifier) {
  let umbracoSlug = CmsVariants.variants.heartcore.slugPrefx + "/" + pageIdentifier.backEndSlug;
  umbracoSlug = umbracoSlug.replace(/\/+/g, '/');
  const result = {'slug': umbracoSlug};
  return result;
}

export default function GetSubComponentContentQuery() {
  return subComponentContent
}

export function mapSubComponentContentData(data: any, pageIdentifier:PageIdentifier) {
  let dynamicContent = {};
  // if (data?.subComponentsPage?.contentBody) {
  //   dynamicContent = data?.subComponentsPage?.contentBody;
  // }
  return dynamicContent;
}
