import { fetchAPIGatewayWrapper } from "../cms/cmsDataQueryGateway"
import { DynamicCmsDataLocations, DynamicDataCmsProperties } from "../cms/constants"
import { mapNavigationData } from "../cms/heartcore/graphqlSnippets/navigation/navigation";

export async function buildPageData(params) {

  const slugValue = params && params.slug ? params.slug : [];

  const navItems = (await getDyanmicCmsDataViaCmsSelector(DynamicCmsDataLocations.variants.navigation)) || [];
  const seoItems = {};
  //const seoItems = (await getDyanmicCmsDataViaCmsSelector(DynamicCmsDataLocations.variants.seo, slugValue)) || []
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
    throw new Error('Failed to fetch API')
  }

  if(json.data !== undefined && json.data !== null) {
    return json.data;
  }else {
    return json;
  }
}


export async function getDyanmicCmsDataViaCmsSelector(lookupDetails: DynamicDataCmsProperties, id?: string) {

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
      queryResult = query(id);
    }else {
      queryResult = query;
    }
  }
  catch(err) {
    console.log("query mnodule import error", err);
  }

  let variables = { variables: {}, preview: false };
  if(queryHasVariables){
    const variableFunc = require(`../cms/${variant}/graphqlSnippets/${snippitLocation}/${snippetFileName}`[lookupDetails.variableFunction]);
    variables ={ variables: variableFunc({ id: id }), preview: false }
  }
  
  // Process the query call
  const data = await fetchAPIGatewayWrapper(queryResult, variables);
  
  //console.log("data", data);

  // Lookup the data mapper function dynamically and process the data.  This is equivalent to filtering the data per CMS.
  let dataMapper = require(`../cms/${variant}/graphqlSnippets/${snippitLocation}/${snippetFileName}`)[dataFunctionMapperName];

  const result = dataMapper(data);

  return await result;
}