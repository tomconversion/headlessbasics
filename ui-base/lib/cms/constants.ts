// export const EXAMPLE_PATH = 'cms-umbraco-heartcore'
// export const CMS_NAME = 'Umbraco Heartcore'
// export const CMS_URL = 'https://umbraco.com/heartcore'

// Need to add the folowing to env.local  CMS_VARIANT=heartcore


export const HOME_OG_IMAGE_URL =
  'https://og-image.vercel.app/Next.js%20Blog%20Example%20with%20**Umbraco%20Heartcore**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https://media.umbraco.io/demo-headless/8d8a349dde73ca6/u_heartcore_heart_lockup_tagline_dark.svg'

export interface CmsSettings {
  variant?: CmsProperties
}

export interface CmsProperties {
  cmsName?: string,
  deliveryApiDomain?: string,
  deliveryApiUrl?: string,
  deliveryApiKey?: string,
  cmsUrl?: string,
  projectAlias?: string,
  projectId?: string,
  slugPrefix?: string,
  pageTypes: {
    home: PageIdentifier,
    dynamic: PageIdentifier,
    landing: PageIdentifier
  }
}

export interface PageTypes {
  home: string,
  dynamic: string,
  landing: string,
}

export interface PageIdentifier {
  backEndSlug: string,
  frontEndSlug: string,
  pageVariant: PageVariant,
  cmsType: string
}

export type CmsVariant =
  | "heartcore"
  | "contentful"
  | "kontent"

export type PageVariant =
  | "home"
  | "dynamic"
  | "landing"

const CmsVariants = {
  variants: {
    heartcore: {
      cmsName: "Umbraco Heartcore",
      deliveryApiDomain: "https://graphql.umbraco.io",
      deliveryApiUrl: "w-1/3",
      cmsUrl: "https://umbraco.com/heartcore",
      deliveryApiKey: process.env.UMBRACO_API_KEY,
      contentApiKey: '',
      previewApiKey: '',
      projectAlias: process.env.UMBRACO_PROJECT_ALIAS,
      slugPrefx: "/homepage",
      pageTypes: {
        home: {
          frontEndSlug: '/',
          backEndSlug: '/homepage',
          pageVariant: "Home",
          cmsType: "homepage"
        },
        dynamic: {
          frontEndSlug: null,
          backEndSlug: null,
          pageVariant: "dynamic",
          cmsType: "staticPage1"
        },
        landing: {
          frontEndSlug: null,
          backEndSlug: null,
          pageVariant: "landing",
          cmsType: "staticPage"
        }
      }
    },
    kontent: {
      cmsName: "Kentico Kontent",
      deliveryApiDomain: "https://graphql.kontent.ai",
      deliveryApiUrl: "w-1/3",
      cmsUrl: "https://umbraco.com/heartcore",
      deliveryApiKey: process.env.UMBRACO_API_KEY,
      contentApiKey: '',
      previewApiKey: process.env.KONTENT_PREVIEW_API_KEY,
      projectAlias: '',
      projectId: process.env.KONTENT_PROJECT_ID,
      slugPrefx: "homepage",
      pageTypes: {
        home: {
          frontEndSlug: '/',
          backEndSlug: 'homepage',
          pageVariant: "Home",
          cmsType: "homepage"
        },
        dynamic: {
          frontEndSlug: null,
          backEndSlug: null,
          pageVariant: "dynamic",
          cmsType: "staticPage1"
        },
        landing: {
          frontEndSlug: null,
          backEndSlug: null,
          pageVariant: "landing",
          cmsType: "staticPage"
        }
      }
    },
    contentful: {
      cmsName: "Contentful",
      deliveryApiDomain: "https://graphql.contentful.com",
      deliveryApiUrl: "/content/v1/spaces/",
      cmsUrl: "https://app.contentful.com/spaces/3j9y7hnidlox",
      deliveryApiKey: process.env.CONTENTFUL_DELIVERY_API_KEY,
      contentApiKey: '',
      previewApiKey: process.env.CONTENTFUL_PREVIEW_API_KEY,
      projectAlias: 'contentful-CD',
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      environmentId: process.env.CONTENTFUL_ENVIRONMENT,
      slugPrefx: "",
      pageTypes: {
        home: {
          frontEndSlug: '/',
          backEndSlug: '/',
          pageVariant: "Home",
          cmsType: "pageCollection"
        },
        dynamic: {
          frontEndSlug: null,
          backEndSlug: null,
          pageVariant: "dynamic",
          cmsType: "dynamicPage"
        },
        landing: {
          frontEndSlug: null,
          backEndSlug: null,
          pageVariant: "landing",
          cmsType: "landing"
        }
      }
    }
  }

}
export { CmsVariants };



const DynamicCmsDataLocations = {
  variants: {
    navigation: {
      snippetLocation: "navigation",
      snippetFileName: "navigation",
      snippetExport: "navigation",
      queryIsFunction: false,
      queryHasVariables: false,
      variableFunction: "variables",
      dataFunctionMapperName: "mapNavigationData"
    },
    seo: {
      snippetLocation: "seo",
      snippetFileName: "seo",
      snippetExport: "seo",
      queryIsFunction: true,
      queryHasVariables: true,
      variableFunction: "variables",
      dataFunctionMapperName: "mapSeoData"
    }
  }
}
export { DynamicCmsDataLocations };

export type DynamicCmsDataVariant =
  | "navigation"
  | "page"

export interface DynamicDataCmsProperties {
  snippetLocation: string,
  snippetFileName: string,
  snippetExport: string,
  variableFunction: string,
  dataFunctionMapperName: string,
  // dataMapperFileEnding: string,
  queryIsFunction: boolean,
  queryHasVariables: boolean,
}