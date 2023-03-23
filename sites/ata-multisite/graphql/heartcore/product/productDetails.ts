import { LanguageSite, PageIdentifier } from "@/ui-base/lib/cms/constants";
import { variablesMultiSiteByIdentifier, variablesMultiSiteSlug } from "@/ui-base/lib/cms/_base/tools/common/multiSite";

export function productDetails(slug:string)
{
  return `
    query ProductBySlug($slug: String!) {
        productPage(url: $slug) {
        url
        contentTypeAlias
        name
        productDataSheet{
            url
        }
        productDescription
        productGallery{
            url
        }
        productInstallationMenu{
            url
        }
        productKeyFeatures
        productName
        productPhoto
        {
            url
        }
        productVideos{
            url
        }
        }
    }  
  `
};

export function variables(pageIdentifier:PageIdentifier, languageSite:LanguageSite) {
  let variables = variablesMultiSiteByIdentifier(pageIdentifier, languageSite);
  console.log("variables heartcore model > ", variables);
  return variables;
}

export default function GetModelQuery() {
  return productDetails;
}

export function mapProductData(data, pageIdentifier:PageIdentifier) {
  console.log("variables heartcore mapProductData > ", JSON.stringify(data));
  return data?.productPage;
}