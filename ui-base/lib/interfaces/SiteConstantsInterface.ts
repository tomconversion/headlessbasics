import { DynamicDataCmsProperties } from "../cms/constants";
import { SiteComponents } from "./SiteComponentsInterface";


export interface SiteConstantsInterface {
  name: string;
  getSiteComponents(): SiteComponents;
  getComponentLocations(): DynamicDataCmsProperties[];
}
