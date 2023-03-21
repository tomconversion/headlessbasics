import { DynamicDataCmsProperties } from "./constants"
import { SiteComponents } from "../interfaces/SiteComponentsInterface";
import { SiteConstantsInterface } from "../interfaces/SiteConstantsInterface";

export class SiteConstants implements SiteConstantsInterface {
    name: string;
    components: SiteComponents;
    componentLocations: DynamicDataCmsProperties[];
  
    constructor(name: string, components: SiteComponents, componentLocations: DynamicDataCmsProperties[]) {
      this.name = name;
      this.components = components;
      this.componentLocations = componentLocations;
    }
  
    getSiteComponents(): SiteComponents {
      return this.components;
    }
    getComponentLocations(): DynamicDataCmsProperties[]{
      return this.componentLocations;
    }
  }