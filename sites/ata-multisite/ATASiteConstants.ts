import { DynamicDataCmsProperties } from "@/ui-base/lib/cms/constants"
import { SiteComponents, SiteSettings } from "@/ui-base/lib/interfaces/SiteComponentsInterface"
import { SiteConstantsInterface } from "@/ui-base/lib/interfaces/SiteConstantsInterface"

const ATASiteComponentDataLocations = 
  [
    {
      identifier: "productDetails",
      snippetLocation: "product",
      snippetFileName: "productDetails",
      snippetExport: "productDetails",
      queryIsFunction: true,
      queryHasVariables: true,
      variableFunction: "variables",
      dataFunctionMapperName: "mapProductData",
    },
    // {
    //   identifier: "ourclient",
    //   snippetLocation: "ourclient",
    //   snippetFileName: "ourclient",
    //   snippetExport: "ourclient",
    //   queryIsFunction: true,
    //   queryHasVariables: true,
    //   variableFunction: "variables",
    //   dataFunctionMapperName: "mapOurClientData",
    // },
    // {
    //   identifier: "features",
    //   snippetLocation: "features",
    //   snippetFileName: "features",
    //   snippetExport: "features",
    //   queryIsFunction: true,
    //   queryHasVariables: true,
    //   variableFunction: "variables",
    //   dataFunctionMapperName: "mapFeaturesData",
    // },
  ];

export { ATASiteComponentDataLocations }

export const COMPONENT_HERO: string = "hero"
export const COMPONENT_OUR_CLIENT: string = "ourclient"
export const COMPONENT_FEATURES: string = "features"

export const COMPONENT_PRODUCT_DETAILS: string = "productDetails"

export const ATAFixedLayouts: SiteComponents = {
  layouts: [
    {
      identifier: "home",
      components: [
        // COMPONENT_HERO,
        // COMPONENT_OUR_CLIENT,
        // COMPONENT_FEATURES
      ],
    },
    {
      identifier: "productPage",
      components: [
        COMPONENT_PRODUCT_DETAILS,
      ],
    },
  ]
}

export const ATASiteSettings: SiteSettings = {
  mainSiteLanguage: "us",
  languageSites: [
    {
      countryCode: "us",
      homepageSlugPrefix: "/us-homepage",
      shouldLanguageCodeBeAddedToNav: false
    },
    {
      countryCode: "au",
      homepageSlugPrefix: "/au-homepage",
      shouldLanguageCodeBeAddedToNav: true
    },
  ],
  extraPageTypes: [
    {
      identifier: "homepage",
      frontEndSlug: "",
      backEndSlug: "",
      pageVariant: "homepage",
      cmsType: "homepage",
      isFixedLayout: true
    }
  ],
  ecommerceSettings: {
    hasProducts: true
  }
}