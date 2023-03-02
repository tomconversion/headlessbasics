import { ImageInputProps } from "../components/ui/interface/Images"
import { NavItem } from "../types/nav"
import { siteConfig } from "@/landify/config/site"

export interface BaseSiteConfig {
  siteTemplate: string,                     // This matched the folder within the /sites folder
  logo: ImageInputProps
  name: string
  description: string
  mainNav: NavItem[]
  links: any
}

export function GetSiteConfig():BaseSiteConfig{
  return siteConfig;
}
