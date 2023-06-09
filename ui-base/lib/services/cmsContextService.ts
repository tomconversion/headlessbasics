import { CmsVariant, CmsVariants, PageIdentifier } from "../cms/constants";
import { getLogger } from "./logging/LogConfig";
import { GetSite } from "./siteContextService";

const log = getLogger("headless.cmsContextService");

export function GetCMS(){
    const cmsVariant = process.env.NEXT_PUBLIC_CMS_VARIANT as CmsVariant;
    return cmsVariant;
}

export function GetCMSVariant(){
    return CmsVariants.variants[GetCMS()];
}

export function GetPageIdentifier(pageVariant):PageIdentifier{
    const pageIdentifier = GetCMSVariant().pageTypes[
        pageVariant
      ] as PageIdentifier;

    if(pageIdentifier === undefined){
        log.debug("GetPageIdentifier > pageIdentifier > ", pageIdentifier, pageVariant);
        let matches = GetSite().siteSettings.extraPageTypes.filter((x) => x.pageVariant === pageVariant);
        if(matches.length > 0){
            return matches[0];
        }
    }

    return pageIdentifier;
}