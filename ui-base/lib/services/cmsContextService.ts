import { CmsVariant, CmsVariants } from "../cms/constants";

export function GetCMS(){
    const cmsVariant = process.env.NEXT_PUBLIC_CMS_VARIANT as CmsVariant;
    return cmsVariant;
}

export function GetCMSVariant(){
    return CmsVariants.variants[GetCMS()];
}