import { DynamicDataCmsProperties } from "./constants"
import { SiteComponents, SiteSettings } from "../interfaces/SiteComponentsInterface";
import { SiteConstantsInterface } from "../interfaces/SiteConstantsInterface";

export class SiteConstants implements SiteConstantsInterface {
    name: string;
    components: SiteComponents;
    componentLocations: DynamicDataCmsProperties[];
    siteSettings: SiteSettings;
  
    constructor(name: string, components: SiteComponents, componentLocations: DynamicDataCmsProperties[], siteSettings: SiteSettings) {
      this.name = name;
      this.components = components;
      this.componentLocations = componentLocations;
      this.siteSettings = siteSettings;
    }
  
    getSiteComponents(): SiteComponents {
      return this.components;
    }
    getComponentLocations(): DynamicDataCmsProperties[]{
      return this.componentLocations;
    }
    getSiteSettings(): SiteSettings{
      return this.siteSettings;
    }
  }