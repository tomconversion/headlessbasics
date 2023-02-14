import { fetchAPIGatewayWrapper } from "../cms/cmsDataQueryGateway"
import { DynamicDataCmsProperties } from "../cms/constants"


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

  return json.data
}


export async function getDyanmicCmsDataViaCmsSelector(lookupDetails: DynamicDataCmsProperties, id?: string) {

  const variant = process.env.NEXT_PUBLIC_CMS_VARIANT;

  // The following code lookup up a folder and snippet name to get the query
  // example: lib/cms/contentful/graphqlSnippets/navigation/nav.ts
  let queryResult = undefined;
  const query = require(`../cms/${variant}/graphqlSnippets/${lookupDetails.snippetLocation}/${lookupDetails.snippetFileName}`)[lookupDetails.snippetExport];
  if(lookupDetails.queryHasVariables){
    queryResult = query(id);
  }

  let variables = { variables: {}, preview: false };
  if(lookupDetails.queryHasVariables){
    const variableFunc = require(`../cms/${variant}/graphqlSnippets/${lookupDetails.snippetLocation}/${lookupDetails.snippetFileName}`)[lookupDetails.variableFunction]
    variables ={ variables: variableFunc({ id: id }), preview: false }
  }
  
  // Process the query call
  const data = await fetchAPIGatewayWrapper(queryResult, variables);

  // Lookup the data mapper function dynamically and process the data.  This is equivalent to filtering the data per CMS.
  let dataMapper = require(`../cms/${variant}/graphqlSnippets/${lookupDetails.snippetLocation}/${variant}${lookupDetails.dataMapperFileEnding}`)[lookupDetails.dataFunctiopnMapperName];

  return dataMapper(data);
}