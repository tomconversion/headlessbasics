import { DynamicDataCmsProperties } from "./constants";
import { SiteComponents } from "./SiteComponents";


export interface SiteConstantsInterface {
  name: string;
  getSiteComponents(): SiteComponents;
  getComponentLocations(): DynamicDataCmsProperties[];
}
