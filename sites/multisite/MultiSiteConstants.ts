import { DynamicDataCmsProperties } from "@/ui-base/lib/cms/constants"
import { SiteComponents } from "@/ui-base/lib/interfaces/SiteComponentsInterface"
import { SiteConstantsInterface } from "@/ui-base/lib/interfaces/SiteConstantsInterface"

const MultiSiteConstants = 
  [

  ];

export { MultiSiteConstants }

// export const COMPONENT_HERO: string = "hero"
// export const COMPONENT_OUR_CLIENT: string = "ourclient"
// export const COMPONENT_FEATURES: string = "features"

export const MultiSiteFixedLayouts: SiteComponents = {
  layouts: [
    {
      identifier: "home",
      components: [
        // COMPONENT_HERO,
        // COMPONENT_OUR_CLIENT,
        // COMPONENT_FEATURES
      ],
    },
  ],
}