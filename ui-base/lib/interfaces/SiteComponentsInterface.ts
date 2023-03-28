import { BaseSiteConfig } from "@/ui-base/config/site";
import { CountryCode, LanguageSite, PageIdentifier, PageVariant } from "../cms/constants";

export interface SiteComponents {
  layouts: {
    identifier: PageVariant
    components: string[]
  }[]
}

export interface SiteSettings {
  mainSiteLanguage: CountryCode
  languageSites: LanguageSite[]
  extraPageTypes: PageIdentifier[],
  ecommerceSettings?: EcommerceSettings
  hideStoreButtons: boolean
  siteConfig: BaseSiteConfig,
  deepSearchNavigation? : boolean
  pageSettings?: PageSettings
}

export interface EcommerceSettings {
  hasProducts: boolean
}

export interface PageSettings {
  shouldRenderAllPages: boolean
}
