import {
  CmsVariant,
  CmsVariants,
  DynamicCmsDataLocations,
  DynamicDataCmsProperties,
  PageIdentifier,
  PageVariant,
} from "../cms/constants"

export function renderDynamicContent(pageVariant: PageVariant, data:any) {

  const cmsVariant = process.env.NEXT_PUBLIC_CMS_VARIANT as CmsVariant
  const cmsVariantSelected = CmsVariants.variants[cmsVariant]
  const pageIdentifier = cmsVariantSelected.pageTypes[
    pageVariant
  ] as PageIdentifier

  const result = render(
    DynamicCmsDataLocations.variants.dynamicContent,
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
      require(`../cms/${variant}/dynamicContent/${snippitLocation}/${snippetFileName}`)[
        queryExport
      ]

    if (queryHasVariables) {
      queryResult = query(_data)
    }
  } catch (err) {
    console.log("query mnodule import error", err)
  }

  return queryResult;
}
