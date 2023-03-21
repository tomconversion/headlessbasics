import { GetCMS } from "@/ui-base/lib/services/cmsContextService";
import { GetSite } from "@/ui-base/lib/services/siteContextService";
import { CmsVariant, CmsVariants, CountryCode, LanguageSite, PageIdentifier } from "../../constants";

export function GetMultiSiteSlugByIdentifier(pageIdentifier:PageIdentifier, languageSite:LanguageSite){
    let prefix = languageSite.homepageSlugPrefix;
    
    let umbracoSlug = prefix + "/" + pageIdentifier.backEndSlug;
    umbracoSlug = umbracoSlug.replace(/\/+/g, '/');

    return umbracoSlug;
}

export function GetMultiSiteSlug(slug:string, languageSite:LanguageSite){
    let prefix = languageSite.homepageSlugPrefix;
    
    let umbracoSlug = prefix + "/" + slug;
    umbracoSlug = umbracoSlug.replace(/\/+/g, '/');

    return umbracoSlug;
}

export function GetLanguageSiteByCode(code:CountryCode):LanguageSite{
    const cmsVariant = GetCMS();
    const match = GetSite().siteSettings.languageSites.filter((x) => x.countryCode === code);
    if(match.length > 0){
        return match[0] as LanguageSite;
    }
    return undefined;
}

export function GetMainSiteLanguage():CountryCode{
    const cmsVariant = GetCMS();
    return GetSite().siteSettings.mainSiteLanguage as CountryCode;
}

export function GetHomepageVariant():PageIdentifier{
    const cmsVariant = GetCMS();
    const cmsVariantSelected = CmsVariants.variants[cmsVariant];
    const pageIdentifier = cmsVariantSelected.pageTypes[
      "home"
    ] as PageIdentifier;
    return pageIdentifier;
}