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
    const cmsVariant = process.env.NEXT_PUBLIC_CMS_VARIANT as CmsVariant;
    const match = CmsVariants.variants[cmsVariant].languageSites.filter((x) => x.countryCode === code);
    if(match.length > 0){
        return match[0] as LanguageSite;
    }
    return undefined;
}

export function GetMainSiteLanguage():CountryCode{
    const cmsVariant = process.env.NEXT_PUBLIC_CMS_VARIANT as CmsVariant;
    return CmsVariants.variants[cmsVariant].mainSiteLanguage as CountryCode;
}

export function GetHomepageVariant():PageIdentifier{
    const cmsVariant = process.env.NEXT_PUBLIC_CMS_VARIANT as CmsVariant;    
    const cmsVariantSelected = CmsVariants.variants[cmsVariant];
    const pageIdentifier = cmsVariantSelected.pageTypes[
      "home"
    ] as PageIdentifier;
    return pageIdentifier;
}