import { fetchAPIGatewayWrapper } from "../cms/cmsDataQueryGateway"
import { mapNavigationDataContentful } from "../cms/contentful/graphqlSnippets/navigation/contentfulNavigationDataMapper";
import { mapNavigationDataHeartcore } from "../cms/heartcore/graphqlSnippets/navigation/heartcoreNavigationDataMapper";
import { mapNavigationDataKontent } from "../cms/kontent/graphqlSnippets/navigation/kontentNavigationDataMapper";

export async function getAltHomepageNavigation() {

    const variant = process.env.NEXT_PUBLIC_CMS_VARIANT;
    let navQuery = require(`../cms/${variant}/graphqlSnippets/navigation/nav`).nav;
    
    const data = await fetchAPIGatewayWrapper(navQuery);
  
    if(variant === 'kontent'){
      return mapNavigationDataKontent(data);
    }else if(variant === 'heartcore'){
      return mapNavigationDataHeartcore(data);
    }else if(variant === 'contentful'){
      return mapNavigationDataContentful(data);
    } else {
      return data;
    }
}