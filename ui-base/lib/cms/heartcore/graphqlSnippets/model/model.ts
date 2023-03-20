import { CmsVariants, LanguageSite, PageIdentifier } from "@/ui-base/lib/cms/constants";
import { replaceString } from "@/ui-base/lib/util/utils";
import { GetMultiSiteSlug } from "../../tools/urlTools";

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

export function variables(slug:string, languageSite:LanguageSite)
{
  return {'slug': GetMultiSiteSlug(slug, languageSite)};
};

export default function GetModelQuery() {
  return model;
}

export function mapModelData(data, pageIdentifier:PageIdentifier) {
  return data?.content?.contentTypeAlias;
}