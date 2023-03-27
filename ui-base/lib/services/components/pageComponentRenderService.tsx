import { detectAndRenderProductDetails } from "../ecommerce/ecommerceRenderService";
import { getLogger } from "../logging/LogConfig";
import { detectAndRenderSiteSearch } from "../search/searchRenderService";

const log = getLogger("headless.services.components.pageComponentRenderService");

export function renderComponentContent(data:any) {

  let productRendering = detectAndRenderProductDetails(data);
  let siteSearch = detectAndRenderSiteSearch(data);

  return (
    <>
    {productRendering}
    {siteSearch}
    </>
  );
}