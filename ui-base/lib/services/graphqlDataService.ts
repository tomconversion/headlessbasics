import { fetchAPIGatewayWrapper } from "../cms/cmsDataQueryGateway"
import { CmsVariant, CmsVariants, DynamicCmsDataLocations, DynamicDataCmsProperties, PageIdentifier, PageVariant } from "../cms/constants"

export async function buildPageData(pageVariant: PageVariant, params?: any) {

  const cmsVariant = process.env.NEXT_PUBLIC_CMS_VARIANT as CmsVariant;
  const cmsVariantSelected = CmsVariants.variants[cmsVariant];
  const pageIdentifier = cmsVariantSelected.pageTypes[pageVariant] as PageIdentifier;
  // let slugValue = CmsVariants.variants[cmsVariant].slugPrefx;
  // if(params !== undefined && params !== null) {
  //   slugValue += params && params.slug ? params.slug : [];
  // }
  
  
  //const pageIdentifier:PageIdentifier = { slug: slugValue, pageVariant: pageVariant };

  const navItems = (await getDyanmicCmsDataViaCmsSelector(DynamicCmsDataLocations.variants.navigation, pageIdentifier)) || [];
  //const seoItems = {};
  const seoItems = (await getDyanmicCmsDataViaCmsSelector(DynamicCmsDataLocations.variants.seo, pageIdentifier)) || []
  const result = {data:{ navItems, seoItems } };
  
  return result;
}


export async function fetchAPI(query, { variables, preview } = { variables: {}, preview: false }, endpoint: string, headers: any = {}) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })
  const json = await res.json()

  if (json.errors) {
    console.error(json.errors)
    throw new Error('fetchAPI in graphqlDataService - Failed to fetch API')
  }

  if(json.data !== undefined && json.data !== null) {
    return json.data;
  }else {
    return json;
  }
}


export async function getDyanmicCmsDataViaCmsSelector(lookupDetails: DynamicDataCmsProperties, pageIdentifier:PageIdentifier) {

  const variant = process.env.NEXT_PUBLIC_CMS_VARIANT;
  const queryHasVariables = lookupDetails.queryHasVariables;
  const queryExport = lookupDetails.snippetExport;
  const snippitLocation = lookupDetails.snippetLocation;
  const snippetFileName = lookupDetails.snippetFileName;
  const dataFunctionMapperName = lookupDetails.dataFunctionMapperName;
  // The following code lookup up a folder and snippet name to get the query
  // example: lib/cms/contentful/graphqlSnippets/navigation/navigation.ts

  let queryResult = undefined;

  try {
    const query = require(`../cms/${variant}/graphqlSnippets/${snippitLocation}/${snippetFileName}`)[queryExport];

    if(queryHasVariables){
      queryResult = query(pageIdentifier);
    }else {
      queryResult = query;
    }
  }
  catch(err) {
    console.log("query mnodule import error", err);
  }

  let variables = { variables: {}, preview: false };
  if(queryHasVariables){
    const variableFunc = require(`../cms/${variant}/graphqlSnippets/${snippitLocation}/${snippetFileName}`)[lookupDetails.variableFunction];
    variables ={ variables: variableFunc(pageIdentifier), preview: false }

  }
  
  // Process the query call
  const data = await fetchAPIGatewayWrapper(queryResult, variables);
  
  // Lookup the data mapper function dynamically and process the data.  This is equivalent to filtering the data per CMS.
  let dataMapper = require(`../cms/${variant}/graphqlSnippets/${snippitLocation}/${snippetFileName}`)[dataFunctionMapperName];

  const result = dataMapper(data);

  return await result;
}