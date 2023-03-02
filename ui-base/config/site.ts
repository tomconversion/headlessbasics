import { ImageInputProps } from "../components/ui/interface/Images"
import { NavItem } from "../types/nav"

export interface BaseSiteConfig {
  siteTemplate: string,                     // This matched the folder within the /sites folder
  logo: ImageInputProps
  name: string
  description: string
  mainNav: NavItem[]
  links: {

  }
}

