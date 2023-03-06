import { CmsVariants, PageIdentifier } from "../../../constants"

export function dynamicContent() {
  return `query DynamicContentBySlug($slug: String!) {
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

export default function GetDynamicContentQuery() {
  return dynamicContent
}

export function mapDynamicContentData(data: any, pageIdentifier:PageIdentifier) {
  let dynamicContent = {};
  if (data?.dynamicPage?.contentBody) {
    dynamicContent = data?.dynamicPage?.contentBody;
  }
  return dynamicContent;
}
