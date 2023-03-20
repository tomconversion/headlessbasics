import { DynamicDataCmsProperties } from "@/ui-base/lib/cms/constants"
import { SiteComponents } from "@/ui-base/lib/cms/SiteComponents"
import { SiteConstantsInterface } from "@/ui-base/lib/cms/SiteConstantsInterface"

const LandifySiteComponentDataLocations = 
  [
    {
      snippetLocation: "hero",
      snippetFileName: "hero",
      snippetExport: "hero",
      queryIsFunction: true,
      queryHasVariables: true,
      variableFunction: "variables",
      dataFunctionMapperName: "mapHeroData",
    },
    {
      snippetLocation: "ourclient",
      snippetFileName: "ourclient",
      snippetExport: "ourclient",
      queryIsFunction: true,
      queryHasVariables: true,
      variableFunction: "variables",
      dataFunctionMapperName: "mapOurClientData",
    },
    {
      snippetLocation: "features",
      snippetFileName: "features",
      snippetExport: "features",
      queryIsFunction: true,
      queryHasVariables: true,
      variableFunction: "variables",
      dataFunctionMapperName: "mapFeaturesData",
    },
  ];

export { LandifySiteComponentDataLocations }

export const COMPONENT_HERO: string = "hero"
export const COMPONENT_OUR_CLIENT: string = "ourclient"
export const COMPONENT_FEATURES: string = "features"

export const LandifyFixedLayouts: SiteComponents = {
  layouts: [
    {
      identifier: "home",
      components: [
        COMPONENT_HERO,
        COMPONENT_OUR_CLIENT,
        COMPONENT_FEATURES
      ],
    },
  ],
}