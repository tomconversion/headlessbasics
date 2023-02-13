import { fetchAPI } from "../services/graphqlDataService";
import { CmsVariant, CmsVariants } from "./constants";

export async function fetchAPIGatewayWrapper(query, { variables, preview } = { variables: {}, preview: false }) {
    
    const cmsVariant = process.env.NEXT_PUBLIC_CMS_VARIANT as CmsVariant;

    const headers = {
        'Content-Type': 'application/json'
    };

    if(cmsVariant === 'kontent') {
        const endpoint = `${CmsVariants.variants[cmsVariant].deliveryApiDomain}/${CmsVariants.variants[cmsVariant].projectId}`;
        return await fetchAPI(query, { variables, preview }, endpoint, headers);
    } else if(cmsVariant === 'heartcore') {
        const endpoint = `${CmsVariants.variants[cmsVariant].deliveryApiDomain}`;

        headers["Api-Key"] = CmsVariants.variants[cmsVariant].deliveryApiKey;
        headers["Umb-Project-Alias"] = CmsVariants.variants[cmsVariant].projectAlias;

        return await fetchAPI(query, { variables, preview }, endpoint, headers);
    }
}