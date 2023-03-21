import { ATAFixedLayouts, ATASiteComponentDataLocations, ATASiteSettings } from "@/sites/ata-multisite/ATASiteConstants";
import { LandifyFixedLayouts, LandifySiteComponentDataLocations, LandifySiteSettings } from "@/sites/landify/LandifySiteConstants";
import { MultiSiteConstants, MultiSiteFixedLayouts, MultisiteSiteSettings } from "@/sites/multisite/MultiSiteConstants";
import { SiteConstants } from "../cms/SiteConstants";

export function GetSite(){
    if(process.env.NEXT_PUBLIC_SITE_NAME == "landify"){
        return new SiteConstants("landify", LandifyFixedLayouts, LandifySiteComponentDataLocations, LandifySiteSettings);
    }else if(process.env.NEXT_PUBLIC_SITE_NAME == "multisite"){
        return new SiteConstants("multisite", MultiSiteFixedLayouts, MultiSiteConstants, MultisiteSiteSettings);
    }else if(process.env.NEXT_PUBLIC_SITE_NAME == "ata-multisite"){
        return new SiteConstants("ata-multisite", ATAFixedLayouts, ATASiteComponentDataLocations, ATASiteSettings);
    }
}