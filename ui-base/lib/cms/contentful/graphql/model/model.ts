import { CmsVariants, LanguageSite, PageIdentifier } from "@/ui-base/lib/cms/constants";
import { getLogger } from "@/ui-base/lib/services/logging/LogConfig";
import { variablesMultiSiteSlug } from "../../../_base/tools/common/multiSite";

const log = getLogger("headless.graphql.heartcore.common.multiSite");

export function model(urlPath:string)
{
  return `
  query GetPageByLongSlug($slug: String!) {
    pageCollection(where: { urlPath : $slug }, limit: 1) {
        items{   
            __typename         
            ... on Page{
                seoTitle
            }
        }
    }
}`
};

export function variables(urlPath: string, languageSite:LanguageSite) {
  log.debug("variables contentful model", urlPath, variablesMultiSiteSlug(urlPath, languageSite));
  return variablesMultiSiteSlug(urlPath, languageSite);
}

export default function GetModelQuery() {
  return model;
}

export function mapModelData(data, pageIdentifier:PageIdentifier, languageSite:LanguageSite) {
  log.debug("mapModelData", data);
  const typeNameIniitial = data?.pageCollection?.items[0].__typename;
  if(typeNameIniitial == 'Page'){
    return CmsVariants.variants.contentful.pageTypes.dynamic.pageVariant;
  }
}