import { PageVariant } from "./constants";

export interface SiteComponents {
  layouts: {
    identifier: PageVariant;
    components: string[];
  }[];
}
