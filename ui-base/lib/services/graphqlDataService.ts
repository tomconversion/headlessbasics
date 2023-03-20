import { fetchAPIGatewayWrapper } from "../cms/cmsDataQueryGateway"
import {
  CmsVariant,
  CmsVariants,
  DynamicCmsDataLocations,
  DynamicDataCmsProperties,
  LanguageSite,
  PageIdentifier,
  PageVariant,
} from "../cms/constants"
import { collectAllPageData } from "./pageLayoutDataCollector"

export async function buildPageData(pageVariant: PageVariant, isDynamic:Boolean, site:LanguageSite, params?: any) {

  const cmsVariant = process.env.NEXT_PUBLIC_CMS_VARIANT as CmsVariant;
  const cmsVariantSelected = CmsVariants.variants[cmsVariant];
  // console.log( "buildPageData > cmsVariantSelected > ", cmsVariantSelected);
  console.log( "buildPageData > pageVariant > ", pageVariant);
  console.log( "buildPageData > params > ", params);
  console.log( "buildPageData > isDynamic > ", isDynamic);
  const pageIdentifier = cmsVariantSelected.pageTypes[
    pageVariant
  ] as PageIdentifier
  console.log( "buildPageData > pageIdentifier > ", pageIdentifier);

  // We set the back end slug here for all dynamic pages.
  if(isDynamic && typeof params !== "undefined" && typeof params.slug !== "undefined") {
    pageIdentifier.backEndSlug = params && params.slug ? params.slug : "";
  }

  const result = { data: await collectAllPageData(pageIdentifier, pageVariant, params.slug, site) }

  return result
}

export async function getDyanmicCmsDataViaCmsSelector(
  lookupDetails: DynamicDataCmsProperties,
  pageIdentifier?: PageIdentifier,
  slug?: string,
  languageSite?: LanguageSite
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

    if (queryHasVariables && typeof pageIdentifier !== "undefined") {
      queryResult = query(pageIdentifier, languageSite)
    } else if (queryHasVariables && typeof slug !== "undefined") {
      queryResult = query(slug, languageSite)
    } else {
      queryResult = query
    }
    // console.log("query --", queryResult)
  } catch (err) {
    console.log("query module import error", err)
  }

  let variables = { variables: {}, preview: false }
  if (queryHasVariables) {
    const variableFunc =
      require(`../cms/${variant}/graphqlSnippets/${snippitLocation}/${snippetFileName}`)[
        lookupDetails.variableFunction
      ]

    // console.log("inside variable sender pageIdentifier", pageIdentifier);

    if (typeof pageIdentifier !== "undefined") {
      variables = { variables: variableFunc(pageIdentifier, languageSite), preview: false }
    } else if (typeof slug !== "undefined") {
      variables = { variables: variableFunc(slug, languageSite), preview: false }
    }

    // console.log("variables --", variables)
  }

  // Process the query call
  const data = await fetchAPIGatewayWrapper(queryResult, variables)

  // console.log("data ---> ", JSON.stringify(data, null, 2))

  // Lookup the data mapper function dynamically and process the data.  This is equivalent to filtering the data per CMS.
  let dataMapper =
    require(`../cms/${variant}/graphqlSnippets/${snippitLocation}/${snippetFileName}`)[
      dataFunctionMapperName
    ]

  const result = dataMapper(data, pageIdentifier, languageSite)

  return await result
}

export async function getPageTypeBySlug(slug: string, languageSite:LanguageSite) {
  const pageType =
  (await getDyanmicCmsDataViaCmsSelector(
    DynamicCmsDataLocations.variants.model,
    undefined, 
    slug,
    languageSite
  )) || undefined;
  console.log("graphqlDataService > getPageTypeBySlug > pageType > ", pageType);
  return pageType;
}

export async function collectSitemapNavigationStructure(languageSite:LanguageSite) {

  const cmsVariant = process.env.NEXT_PUBLIC_CMS_VARIANT as CmsVariant
  const cmsVariantSelected = CmsVariants.variants[cmsVariant]

  const navItems =
  (await getDyanmicCmsDataViaCmsSelector(
    DynamicCmsDataLocations.variants.sitemap,
    undefined,
    undefined // Slug is undefined, as we are doing the lookup based on page type
    ,
    languageSite
  )) || [];

  return navItems
}

export async function collectRobotsTxtData() {

  const cmsVariant = process.env.NEXT_PUBLIC_CMS_VARIANT as CmsVariant
  const cmsVariantSelected = CmsVariants.variants[cmsVariant]

  const navItems =
  (await getDyanmicCmsDataViaCmsSelector(
    DynamicCmsDataLocations.variants.robotsTxt,
    undefined,
    "robots.txt",
    undefined
  )) || [];

  return navItems
}