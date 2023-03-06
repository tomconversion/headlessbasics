import { CmsVariants, PageIdentifier } from "@/ui-base/lib/cms/constants";

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
  const umbracoSlug = CmsVariants.variants.heartcore.slugPrefx + "/" + slug;
  const result = {'slug': umbracoSlug};
  return result;
};

export default function GetModelQuery() {
  return model;
}

export function mapModelData(data, pageIdentifier:PageIdentifier) {
  console.log("mapModelData", data);
  return data?.content?.contentTypeAlias;
}