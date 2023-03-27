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
  hideStoreButtons: true,
  siteConfig:{
    siteTemplate: "ata-multisite", // This matched the folder within the /sites folder
    name: "Headless Basics by Conversion Digital",
    description:
      "Get up and running with a basic site quick. Blazingly fast headless.",
    mainNav: [
      {
        title: "Home",
        href: "/",
      },
    ],
    links: {
      twitter: "https://twitter.com/shadcn",
      github: "https://github.com/shadcn/ui",
      docs: "https://ui.shadcn.com",
      accordion: "/components/accordion",
      alert: "/components/alert-dialog",
      subMenu: "/components/subMenu",
      globalNavigation: "/components/globalNavigation",
      avatar: "/components/avatar",
      button: "/components/button",
      checkbox: "/components/checkbox",
      collapsible: "/components/collapsible",
      code: "/components/code",
      contextMenu: "/components/contextMenu",
      dialog: "/components/dialog",
      dropDown: "/components/dropDown",
      hoverCard: "/components/hoverCard",
      input: "/components/input",
      label: "/components/label",
      menuBar: "/components/menuBar",
      popover: "/components/popover",
      progress: "/components/progress",
      radioGroup: "/components/radioGroup",
      scrollArea: "/components/scrollArea",
      select: "/components/select",
      separator: "/components/separator",
      slider: "/components/slider",
      tabs: "/components/tabs",
      textarea: "/components/textarea",
      carousel: "/components/carousel",
      promotion: "/components/contentBlocks/promotion",
      breadcrumb: "/components/breadcrumb",
      cards: "/components/cards",
      badge: "/components/badge",
      chatBubble: "/components/chatBubble",
      countdown: "/components/countdown",
      kbd: "/components/kbd",
      radialProgress: "/components/radialProgress",
      stats: "/components/stats",
      ctaSectionTwoColumn: "/components/contentBlocks/ctaSectionTwoColumn",
      ctaSectionThreeColumn: "/components/contentBlocks/ctaSectionThreeColumn",
      range: "/components/range",
      rating: "/components/rating",
      footer: "/components/footer",
      table: "/components/table",
      mask: "/components/mask",
      hero: "/components/hero",
      mediaLogos: "/components/mediaLogos",
      featureSection: "/components/contentBlocks/featureSection",
    },
    logo: {
      description: "Next.js",
      image: "/landify/static/playground_assets/logotype-dark.svg",
      width: 100,
      height: 100,
      title: "Next.js",
    },
  },
  ecommerceSettings: {
    hasProducts: true,
    
  },
}