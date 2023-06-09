// export const EXAMPLE_PATH = 'cms-umbraco-heartcore'
// export const CMS_NAME = 'Umbraco Heartcore'
// export const CMS_URL = 'https://umbraco.com/heartcore'

// Need to add the folowing to env.local  CMS_VARIANT=heartcore

export const HOME_OG_IMAGE_URL =
  "https://og-image.vercel.app/Next.js%20Blog%20Example%20with%20**Umbraco%20Heartcore**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https://media.umbraco.io/demo-headless/8d8a349dde73ca6/u_heartcore_heart_lockup_tagline_dark.svg"

export const SUPER_ALIAS = "SUPER-ALIAS::"

export interface CmsSettings {
  variant?: CmsProperties
}

export interface CmsProperties {
  cmsName?: string
  deliveryApiDomain?: string
  deliveryApiUrl?: string
  deliveryApiKey?: string
  cmsUrl?: string
  projectAlias?: string
  projectId?: string
  pageTypes: {
    home: PageIdentifier
    dynamic: PageIdentifier
  }
}

export interface LanguageSite {
  countryCode: CountryCode,
  homepageSlugPrefix: string,
  specialSlugPrefix?: string,                // Needed for heartcore and potentially other CMSs
  shouldLanguageCodeBeAddedToNav: boolean
}


export interface PageTypes {
  home: string
  dynamic: string
  landing: string
}

export interface PageIdentifier {
  identifier: string
  backEndSlug: string
  frontEndSlug: string
  pageVariant: PageVariant
  cmsType: string
  isFixedLayout: boolean
  components?: Components
  slugPrefix?: string
}

export type CmsVariant = "heartcore" | "contentful" | "kontent"

export type CountryCode = "us" | "au"

export type PageVariant = "homepage" |"home" | "gridContentPage" | "subComponentsPage" | "productPage"

const CmsVariants = {
  variants: {
    heartcore: {
      cmsName: "Umbraco Heartcore",
      deliveryApiDomain: process.env.UMBRACO_GRAPHQL_ENDPOINT,
      deliveryApiUrl: "w-1/3",
      cmsUrl: "https://umbraco.com/heartcore",
      deliveryApiKey: process.env.UMBRACO_API_KEY,
      contentApiKey: "",
      previewApiKey: "",
      projectAlias: process.env.UMBRACO_PROJECT_ALIAS,
      pageTypes: {
        home: {
          frontEndSlug: "",
          backEndSlug: "",
          pageVariant: "Home",
          cmsType: "homepage",
          isFixedLayout: true,
          components: ["Hero", "OurClients"],
        },
        gridContentPage: {
          frontEndSlug: null,
          backEndSlug: null,
          pageVariant: "gridContentPage",
          cmsType: "gridContentPage",
          isFixedLayout: false,
        },
        subComponentsPage: {
          frontEndSlug: null,
          backEndSlug: null,
          pageVariant: "subComponentsPage",
          cmsType: "subComponentsPage",
          isFixedLayout: false,
        },
        productPage: {
          frontEndSlug: null,
          backEndSlug: null,
          pageVariant: "productPage",
          cmsType: "productPage",
          isFixedLayout: true,
        }
      },
    },
    kontent: {
      cmsName: "Kentico Kontent",
      deliveryApiDomain: process.env.KONTENT_GRAPHQL_ENDPOINT,
      deliveryApiUrl: "w-1/3",
      cmsUrl: "https://umbraco.com/heartcore",
      deliveryApiKey: process.env.UMBRACO_API_KEY,
      contentApiKey: "",
      previewApiKey: process.env.KONTENT_PREVIEW_API_KEY,
      projectAlias: "",
      projectId: process.env.KONTENT_PROJECT_ID,
      pageTypes: {
        home: {
          frontEndSlug: "/",
          backEndSlug: "/",
          pageVariant: "Home",
          cmsType: "homepage",
          isFixedLayout: true,
        },
        dynamic: {
          frontEndSlug: null,
          backEndSlug: null,
          pageVariant: "dynamic",
          cmsType: "navigation_item",
          isFixedLayout: false,
        },
        landing: {
          frontEndSlug: null,
          backEndSlug: null,
          pageVariant: "landing",
          cmsType: "staticPage",
          isFixedLayout: true,
        },
        productPage: {
          frontEndSlug: null,
          backEndSlug: null,
          pageVariant: "productPage",
          cmsType: "productPage",
          isFixedLayout: false,
        }
      },
    },
    contentful: {
      cmsName: "Contentful",
      deliveryApiDomain: process.env.CONTENTFUL_GRAPHQL_ENDPOINT,
      deliveryApiUrl: process.env.CONTENTFUL_DELIVERY_API_URL,
      cmsUrl: "https://app.contentful.com/spaces/3j9y7hnidlox",
      deliveryApiKey: process.env.CONTENTFUL_DELIVERY_API_KEY,
      contentApiKey: "",
      previewApiKey: process.env.CONTENTFUL_PREVIEW_API_KEY,
      projectAlias: "contentful-CD",
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      environmentId: process.env.CONTENTFUL_ENVIRONMENT,
      pageTypes: {
        home: {
          frontEndSlug: "/",
          backEndSlug: "/",
          pageVariant: "Home",
          cmsType: "pageCollection",
          isFixedLayout: true,
        },
        dynamic: {
          frontEndSlug: null,
          backEndSlug: null,
          pageVariant: "dynamic",
          cmsType: "pageCollection",
          isFixedLayout: false,
        },
        productPage: {
          frontEndSlug: null,
          backEndSlug: null,
          pageVariant: "productPage",
          cmsType: "productPage",
          isFixedLayout: false,
        }
      },
    },
  },
}
export { CmsVariants }

const DynamicCmsDataLocations:DynamicDataCmsProperties[] = [
    {
      identifier: "navigation",
      snippetLocation: "navigation",
      snippetFileName: "navigation",
      snippetExport: "navigation",
      queryIsFunction: true,
      queryHasVariables: true,
      variableFunction: "variables",
      dataFunctionMapperName: "mapNavigationData",
    },    
    {
      identifier: "navigationChildren",
      snippetLocation: "navigationChildren",
      snippetFileName: "navigationChildren",
      snippetExport: "navigationChildren",
      queryIsFunction: true,
      queryHasVariables: true,
      variableFunction: "variables",
      dataFunctionMapperName: "mapNavigationData",
    },
    {
      identifier: "sitemap",
      snippetLocation: "sitemap",
      snippetFileName: "sitemap",
      snippetExport: "sitemap",
      queryIsFunction: false,
      queryHasVariables: false,
      variableFunction: "variables",
      dataFunctionMapperName: "mapSitemapData",
    },
    {
      identifier: "seo",
      snippetLocation: "seo",
      snippetFileName: "seo",
      snippetExport: "seo",
      queryIsFunction: true,
      queryHasVariables: true,
      variableFunction: "variables",
      dataFunctionMapperName: "mapSeoData",
    },
    {
      identifier: "breadcrumb",
      snippetLocation: "breadcrumb",
      snippetFileName: "breadcrumb",
      snippetExport: "breadcrumb",
      queryIsFunction: true,
      queryHasVariables: true,
      variableFunction: "variables",
      dataFunctionMapperName: "mapBreadcrumbData",
    },
    {
      identifier: "model",
      snippetLocation: "model",
      snippetFileName: "model",
      snippetExport: "model",
      queryIsFunction: true,
      queryHasVariables: true,
      variableFunction: "variables",
      dataFunctionMapperName: "mapModelData",
    },
    {
      identifier: "subComponentContent",
      snippetLocation: "subComponentContent",
      snippetFileName: "subComponentContent",
      snippetExport: "subComponentContent",
      queryIsFunction: true,
      queryHasVariables: true,
      variableFunction: "variables",
      dataFunctionMapperName: "mapSubComponentContentData",
    },
    {
      identifier: "gridContent",
      snippetLocation: "gridContent",
      snippetFileName: "gridContent",
      snippetExport: "gridContent",
      queryIsFunction: true,
      queryHasVariables: true,
      variableFunction: "variables",
      dataFunctionMapperName: "mapGridContentData",
    },
    {
      identifier: "redirects",
      snippetLocation: "redirects",
      snippetFileName: "redirects",
      snippetExport: "redirects",
      queryIsFunction: false,
      queryHasVariables: false,
      variableFunction: "variables",
      dataFunctionMapperName: "mapRedirectsData",
    },
    {
      identifier: "robotsTxt",
      snippetLocation: "robotsTxt",
      snippetFileName: "robotsTxt",
      snippetExport: "robotsTxt",
      queryIsFunction: true,
      queryHasVariables: true,
      variableFunction: "variables",
      dataFunctionMapperName: "mapRobotsTxtData",
    },
    {
      identifier: "sitesearch",
      snippetLocation: "sitesearch",
      snippetFileName: "sitesearch",
      snippetExport: "sitesearch",
      queryIsFunction: true,
      queryHasVariables: true,
      variableFunction: "variables",
      dataFunctionMapperName: "mapSiteSearchData",
    }
    ];

export { DynamicCmsDataLocations }

export function GetDataLocation(lowerCaseMatchName){
  const componentLocation = DynamicCmsDataLocations.find(
    (componentLocation) => componentLocation.identifier === lowerCaseMatchName
  )
  return componentLocation;
}

export type DynamicCmsDataVariant = "navigation" | "page"

export interface DynamicDataCmsProperties {
  identifier: string
  snippetLocation: string
  snippetFileName: string
  snippetExport: string
  variableFunction: string
  dataFunctionMapperName: string
  // dataMapperFileEnding: string,
  queryIsFunction: boolean
  queryHasVariables: boolean
}

export const COMPONENT_DYNAMIC_CONTENT: FlexibleComponents = "dynamicContent"
export const COMPONENT_GRID_CONTENT: FlexibleComponents = "gridContent"
export const SUBCOMPONENT_CONTENT: FlexibleComponents = "subComponentContent"

export const COMPONENT_SITE_SEARCH: string = "siteSearch"

export interface Components {
  layouts: {
    identifier: PageVariant
    components: FlexibleComponents[]
  }[]
}

export type FlexibleComponents =
  | "dynamicContent"
  | "subComponentContent"
  | "gridContent"
