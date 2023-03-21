import { GetCMS } from "./cmsContextService";
import { CmsVariant, CmsVariants } from "../cms/constants";

export async function fetchAPIGatewayWrapper(query, { variables, preview } = { variables: {}, preview: false }) {
    
    const cmsVariant = GetCMS();

    const headers = {
        'Content-Type': 'application/json'
    };

    if(cmsVariant === 'kontent') {
        const endpoint = `${CmsVariants.variants[cmsVariant].deliveryApiDomain}/${CmsVariants.variants[cmsVariant].projectId}`;
        return await fetchAPI(query, { variables, preview }, endpoint, headers);
    } else if(cmsVariant === 'contentful') {
        const endpoint = `${CmsVariants.variants[cmsVariant].deliveryApiDomain}/${CmsVariants.variants[cmsVariant].deliveryApiUrl}/${CmsVariants.variants[cmsVariant].spaceId}`;
        
        headers["Authorization"] = `Bearer ${CmsVariants.variants[cmsVariant].deliveryApiKey}`;

        return await fetchAPI(query, { variables, preview }, endpoint, headers);
    } else if(cmsVariant === 'heartcore') {
        const endpoint = `${CmsVariants.variants[cmsVariant].deliveryApiDomain}`;

        headers["Api-Key"] = CmsVariants.variants[cmsVariant].deliveryApiKey;
        headers["Umb-Project-Alias"] = CmsVariants.variants[cmsVariant].projectAlias;

        return await fetchAPI(query, { variables, preview }, endpoint, headers);
    }
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