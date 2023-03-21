import { LanguageSite, PageIdentifier } from "@/ui-base/lib/cms/constants";
import { variablesMultiSiteSlug } from "../../../_base/tools/common/multiSite";

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

export function variables(urlPath: string, languageSite:LanguageSite) {
  return variablesMultiSiteSlug(urlPath, languageSite);
}

export default function GetModelQuery() {
  return model;
}

export function mapModelData(data, pageIdentifier:PageIdentifier) {
  return data?.content?.contentTypeAlias;
}