import {
  CountryCode,
  LanguageSite,
  PageIdentifier,
  PageVariant,
} from "../cms/constants"

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
}

export interface EcommerceSettings {
  hasProducts: boolean
}
