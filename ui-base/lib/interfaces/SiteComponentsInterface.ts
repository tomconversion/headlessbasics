import { PageVariant } from "../cms/constants";

export interface SiteComponents {
  layouts: {
    identifier: PageVariant;
    components: string[];
  }[];
}
