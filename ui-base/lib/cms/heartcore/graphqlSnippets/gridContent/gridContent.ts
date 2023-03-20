
// DynamicContent:  In Umbraco this is essentially the Umbraco Grid.
// It allows user to create a page with a grid of components.
// The can pick the columns and rows and then add components to the grid.


import { CmsVariants, LanguageSite, PageIdentifier } from "../../../constants"
import { GetMultiSiteSlug } from "../../tools/urlTools";

export function gridContent() {
  return `query GridContentBySlug($slug: String!) {
    gridContentPage(url: $slug) {
      slug:url
      name
      id
      contentBody
    }
  }`
}

export function variables(slug:string, languageSite:LanguageSite)
{
  return {'slug': GetMultiSiteSlug(slug, languageSite)};
};

export default function GetGridContentQuery() {
  return gridContent
}

export function mapGridContentData(data: any, pageIdentifier:PageIdentifier, languageSite:LanguageSite) {
  console.log("Umbraco mapGridContentData", data);
  let dynamicContent = {};
  if (data?.gridContentPage?.contentBody) {
    dynamicContent = data?.gridContentPage?.contentBody;
  }
  return dynamicContent;
}
