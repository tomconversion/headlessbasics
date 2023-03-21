import { LandifyFixedLayouts, LandifySiteComponentDataLocations } from "@/sites/landify/LandifySiteConstants";
import { MultiSiteConstants, MultiSiteFixedLayouts } from "@/sites/multisite/MultiSiteConstants";
import { CmsVariant } from "../cms/constants";
import { SiteConstants } from "../cms/SiteConstants";

export function GetSite(){
    if(process.env.NEXT_PUBLIC_SITE_NAME == "landify"){
        return new SiteConstants("landify", LandifyFixedLayouts, LandifySiteComponentDataLocations);
    }else if(process.env.NEXT_PUBLIC_SITE_NAME == "multisite"){
        return new SiteConstants("multisite", MultiSiteFixedLayouts, MultiSiteConstants);
    }
}