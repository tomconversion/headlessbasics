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
  const result = { slug: CmsVariants.variants.heartcore.slugPrefx + "/" + pageIdentifier.backEndSlug }
  // console.log("HERO VARIABLE --", result)
  return result
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