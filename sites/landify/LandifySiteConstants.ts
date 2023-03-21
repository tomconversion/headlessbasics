import { DynamicDataCmsProperties } from "@/ui-base/lib/cms/constants"
import { SiteComponents } from "@/ui-base/lib/interfaces/SiteComponentsInterface"
import { SiteConstantsInterface } from "@/ui-base/lib/interfaces/SiteConstantsInterface"

const LandifySiteComponentDataLocations = 
  [
    {
      identifier: "hero",
      snippetLocation: "hero",
      snippetFileName: "hero",
      snippetExport: "hero",
      queryIsFunction: true,
      queryHasVariables: true,
      variableFunction: "variables",
      dataFunctionMapperName: "mapHeroData",
    },
    {
      identifier: "ourclient",
      snippetLocation: "ourclient",
      snippetFileName: "ourclient",
      snippetExport: "ourclient",
      queryIsFunction: true,
      queryHasVariables: true,
      variableFunction: "variables",
      dataFunctionMapperName: "mapOurClientData",
    },
    {
      identifier: "features",
      snippetLocation: "features",
      snippetFileName: "features",
      snippetExport: "features",
      queryIsFunction: true,
      queryHasVariables: true,
      variableFunction: "variables",
      dataFunctionMapperName: "mapFeaturesData",
    },
    {
      identifier: "stories",
      snippetLocation: "stories",
      snippetFileName: "stories",
      snippetExport: "stories",
      queryIsFunction: true,
      queryHasVariables: true,
      variableFunction: "variables",
      dataFunctionMapperName: "mapStoriesData",
    }
  ];

export { LandifySiteComponentDataLocations }

export const COMPONENT_HERO: string = "hero"
export const COMPONENT_OUR_CLIENT: string = "ourclient"
export const COMPONENT_FEATURES: string = "features"
export const COMPONENT_STORIES: string = "stories"

export const LandifyFixedLayouts: SiteComponents = {
  layouts: [
    {
      identifier: "home",
      components: [
        COMPONENT_HERO,
        COMPONENT_OUR_CLIENT,
        COMPONENT_FEATURES,
        COMPONENT_STORIES,
      ],
    },
  ],
}