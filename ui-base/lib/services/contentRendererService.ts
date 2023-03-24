import {
  CmsVariant,
  CmsVariants,
  DynamicCmsDataLocations,
  DynamicDataCmsProperties,
  GetDataLocation,
  PageIdentifier,
  PageVariant,
} from "../cms/constants"
import { GetCMS, GetCMSVariant } from "./cmsContextService";
import { getLogger } from "./logging/LogConfig";

const log = getLogger("headless.contentRendererService");

export function renderSubComponentContent(pageVariant: PageVariant, data:any) {

  const cmsVariant = GetCMS();
  const cmsVariantSelected = CmsVariants.variants[cmsVariant]
  const pageIdentifier = cmsVariantSelected.pageTypes[
    pageVariant
  ] as PageIdentifier

  const result = render(
    GetDataLocation("subComponentContent"),
    pageIdentifier,
    data
  );

  return result
}

export function renderGridComponentContent(pageVariant: PageVariant, data:any) {

  const cmsVariant = GetCMS();
  const cmsVariantSelected = GetCMSVariant();
  const pageIdentifier = cmsVariantSelected.pageTypes[
    pageVariant
  ] as PageIdentifier;

  const result = render(
    GetDataLocation("gridContent"),
    pageIdentifier,
    data
  );

  return result
}

export function render(
  lookupDetails: DynamicDataCmsProperties,
  pageIdentifier?: PageIdentifier,
  _data?: any
) {
  const variant = process.env.NEXT_PUBLIC_CMS_VARIANT
  const queryHasVariables = lookupDetails.queryHasVariables;
  const queryExport = lookupDetails.snippetExport
  const snippitLocation = lookupDetails.snippetLocation
  const snippetFileName = lookupDetails.snippetFileName
  const dataFunctionMapperName = lookupDetails.dataFunctionMapperName
  // The following code lookup up a folder and snippet name to get the query
  // example: lib/cms/contentful/graphqlSnippets/navigation/navigation.ts

  let queryResult = undefined;

  try {
    const query =
      require(`../cms/${variant}/content/${snippetFileName}`)[
        queryExport
      ]

    if (queryHasVariables) {
      queryResult = query(_data)
    }
  } catch (err) {
    log.debug("function render", _data, `../cms/${variant}/content/${snippetFileName}`);
    log.debug("query module import error", err);
  }

  return queryResult;
}
