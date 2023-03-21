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
  let variables = variablesMultiSiteSlug(urlPath, languageSite);
  console.log("variables heartcore model > ", variables);
  return variables;
}

export default function GetModelQuery() {
  return model;
}

export function mapModelData(data, pageIdentifier:PageIdentifier) {
  console.log("variables heartcore mapModelData > ", JSON.stringify(data));
  return data?.content?.contentTypeAlias;
}