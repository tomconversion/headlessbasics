import { GetDataLocation, LanguageSite } from "../../cms/constants";
import { getDyanmicCmsDataViaCmsSelector } from "../graphqlDataService";
import { getLogger } from "../logging/LogConfig";


const log = getLogger("headless.services.components.pageComponentsDataService");

// [{"name":"US Search","id":"05f9c8db-818d-4d00-b1ba-0401925c4212","url":"/us-homepage/search/_components/us-search/","__typename":"SiteSearch"}]
export async function LoadAllSubComponentData(pageComponentData, SUBCOMPONENT_CONTENT, slug:string, languageSite:LanguageSite) {
    log.debug("LoadAllSubComponentData > ", slug);
    const data = pageComponentData[SUBCOMPONENT_CONTENT];
    if(data?.length && data.length > 0){
      await Promise.all(data.map(async (item) => {
        if(item.__typename){
          log.debug("LoadAllSubComponentData > ", slug, item.__typename.toLowerCase());
          pageComponentData[item.__typename.toLowerCase()] = await getDyanmicCmsDataViaCmsSelector(
            GetDataLocation(item.__typename.toLowerCase()),
            undefined,
            item.id,
            languageSite
          );
          log.debug("LoadAllSubComponentData > ", slug, pageComponentData[item.__typename.toLowerCase()]);
        }
      }));
    }
  }
  