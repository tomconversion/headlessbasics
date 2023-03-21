import { GetCMS } from "@/ui-base/lib/services/cmsContextService";
import { GetSite } from "@/ui-base/lib/services/siteContextService";
import { CmsVariant, CmsVariants, CountryCode, LanguageSite, PageIdentifier } from "../../constants";

export function GetMultiSiteSlugByIdentifier(pageIdentifier:PageIdentifier, languageSite:LanguageSite){
    let prefix = languageSite.homepageSlugPrefix;
    
    let slug = prefix + "/" + pageIdentifier.backEndSlug;
    
    if(GetCMS() == "heartcore"){
        slug = `${languageSite.specialSlugPrefix}/${slug}`;
    }

    slug = slug.replace(/\/+/g, '/');

    return slug;
}

export function GetMultiSiteSlug(slug:string, languageSite:LanguageSite){
    let prefix = languageSite.homepageSlugPrefix;
    
    let slug2 = prefix + "/" + slug;

    if(GetCMS() == "heartcore"){
        slug2 = `${languageSite.specialSlugPrefix}/${slug}`;
    }

    slug2 = slug2.replace(/\/+/g, '/');

    return slug2;
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