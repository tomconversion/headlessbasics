
// DynamicContent:  In Umbraco this is essentially the Umbraco Grid.
// It allows user to create a page with a grid of components.
// The can pick the columns and rows and then add components to the grid.


import { CmsVariants, PageIdentifier } from "../../../constants"

export function gridContent() {
  return `query GridContentBySlug($slug: String!) {
    dynamicPage(url: $slug) {
      slug:url
      name
      id
      contentBody
    }
  }`
}

export function variables(pageIdentifier: PageIdentifier) {
  let umbracoSlug = CmsVariants.variants.heartcore.slugPrefx + "/" + pageIdentifier.backEndSlug;
  umbracoSlug = umbracoSlug.replace(/\/+/g, '/');
  const result = {'slug': umbracoSlug};
  return result;
}

export default function GetGridContentQuery() {
  return gridContent
}

export function mapGridContentData(data: any, pageIdentifier:PageIdentifier) {
  let dynamicContent = {};
  if (data?.dynamicPage?.contentBody) {
    dynamicContent = data?.dynamicPage?.contentBody;
  }
  return dynamicContent;
}
