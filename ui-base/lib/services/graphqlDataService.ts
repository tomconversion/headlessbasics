import { fetchAPIGatewayWrapper } from "../cms/cmsDataQueryGateway"
import {
  CmsVariant,
  CmsVariants,
  DynamicCmsDataLocations,
  DynamicDataCmsProperties,
  PageIdentifier,
  PageVariant,
} from "../cms/constants"

export async function buildPageData(pageVariant: PageVariant, params?: any) {
  const cmsVariant = process.env.NEXT_PUBLIC_CMS_VARIANT as CmsVariant
  const cmsVariantSelected = CmsVariants.variants[cmsVariant]
  const pageIdentifier = cmsVariantSelected.pageTypes[
    pageVariant
  ] as PageIdentifier
  // let slugValue = CmsVariants.variants[cmsVariant].slugPrefx;
  if(typeof params !== "undefined" && typeof params.slug !== "undefined") {
    pageIdentifier.backEndSlug = params && params.slug ? params.slug : [];
  }

  //const pageIdentifier:PageIdentifier = { slug: slugValue, pageVariant: pageVariant };

  console.log("pageIdentifier", pageIdentifier);

  const navItems =
    (await getDyanmicCmsDataViaCmsSelector(
      DynamicCmsDataLocations.variants.navigation,
      pageIdentifier,
      undefined // Slug is undefined, as we are doing the lookup based on page type
    )) || [];
  
  console.log("navitems", navItems);
  const seoItems =
    (await getDyanmicCmsDataViaCmsSelector(
      DynamicCmsDataLocations.variants.seo,
      pageIdentifier, 
      undefined // Slug is undefined, as we are doing the lookup based on page type
    )) || [];

  console.log("seoItems", seoItems);
  const heroItems =
    (await getDyanmicCmsDataViaCmsSelector(
      DynamicCmsDataLocations.variants.hero,
      pageIdentifier,
      undefined // Slug is undefined, as we are doing the lookup based on page type
    )) || [];

    console.log("heroItems", heroItems);

  const result = { data: { navItems, seoItems, heroItems } }

  return result
}

export async function fetchAPI(
  query,
  { variables, preview } = { variables: {}, preview: false },
  endpoint: string,
  headers: any = {}
) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })
  const json = await res.json()

  if (json.errors) {
    console.error(json.errors)
    throw new Error("fetchAPI in graphqlDataService - Failed to fetch API")
  }

  if (json.data !== undefined && json.data !== null) {
    return json.data
  } else {
    return json
  }
}

export async function getDyanmicCmsDataViaCmsSelector(
  lookupDetails: DynamicDataCmsProperties,
  pageIdentifier?: PageIdentifier,
  slug?: string
) {
  const variant = process.env.NEXT_PUBLIC_CMS_VARIANT
  const queryHasVariables = lookupDetails.queryHasVariables
  const queryExport = lookupDetails.snippetExport
  const snippitLocation = lookupDetails.snippetLocation
  const snippetFileName = lookupDetails.snippetFileName
  const dataFunctionMapperName = lookupDetails.dataFunctionMapperName
  // The following code lookup up a folder and snippet name to get the query
  // example: lib/cms/contentful/graphqlSnippets/navigation/navigation.ts

  let queryResult = undefined

  try {
    const query =
      require(`../cms/${variant}/graphqlSnippets/${snippitLocation}/${snippetFileName}`)[
        queryExport
      ]

    if (queryHasVariables && typeof pageIdentifier !== 'undefined') {
      queryResult = query(pageIdentifier)
    } else if (queryHasVariables && typeof slug !== 'undefined') {
      queryResult = query(slug)
    } else {
      queryResult = query
    }
    console.log("query --", queryResult)
  } catch (err) {
    console.log("query mnodule import error", err)
  }

  let variables = { variables: {}, preview: false }
  if (queryHasVariables) {
    const variableFunc =
      require(`../cms/${variant}/graphqlSnippets/${snippitLocation}/${snippetFileName}`)[
        lookupDetails.variableFunction
      ]

      console.log("inside variable sender pageIdentifier", pageIdentifier);

    if(typeof pageIdentifier !== 'undefined'){
      variables = { variables: variableFunc(pageIdentifier), preview: false }
    } else if(typeof slug !== 'undefined'){
      variables = { variables: variableFunc(slug), preview: false }
    }
    
    console.log("variables --", variables)
  }

  // Process the query call
  const data = await fetchAPIGatewayWrapper(queryResult, variables)

  console.log("data -- ", data)

  // Lookup the data mapper function dynamically and process the data.  This is equivalent to filtering the data per CMS.
  let dataMapper =
    require(`../cms/${variant}/graphqlSnippets/${snippitLocation}/${snippetFileName}`)[
      dataFunctionMapperName
    ]

  const result = dataMapper(data, pageIdentifier)

  return await result
}

export async function getPageTypeBySlug(slug: string){
  const pageType =
  (await getDyanmicCmsDataViaCmsSelector(
    DynamicCmsDataLocations.variants.model,
    undefined, slug
  )) || []

  return pageType;
}