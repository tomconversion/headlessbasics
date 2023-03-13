import { CmsVariants, PageIdentifier } from "@/ui-base/lib/cms/constants";
import { replaceString } from "@/ui-base/lib/util/utils";

export function model(slug:string)
{
  return `
  query PageTypeBySlug($slug: String!) {
    content(url: $slug) {
       url
       contentTypeAlias
       name
    }
}`
};

export function variables(slug:string)
{
  let umbracoSlug = CmsVariants.variants.heartcore.slugPrefx + "/" + slug;
  umbracoSlug = umbracoSlug.replace(/\/+/g, '/');
  const result = {'slug': umbracoSlug};
  return result;
};

export default function GetModelQuery() {
  return model;
}

export function mapModelData(data, pageIdentifier:PageIdentifier) {
  return data?.content?.contentTypeAlias;
}