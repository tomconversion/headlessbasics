import { siteConfig } from "../config/site"
import { GlobalTailwindNavigationMenu } from "./ui/global-navigation"
import StoreBanner from "./ui/landify/components/store-banner"
import Logo from "./ui/media/logo"

export function SiteHeader({data}) {
  return (
    <><div data-role="Header" className="w-full flex flex-col items-center">
    <header className="w-[100%] flex items-center justify-between py-8 px-4 z-50 max-w-screen-lg mx-auto">
      <Logo image={siteConfig.logo} className="w-100 object-cover" />      
      
      <GlobalTailwindNavigationMenu navClasses={"flex flex-row items-start"} navItems={data.navItems} />
      
      <div className="home-container01">
        <StoreBanner></StoreBanner>
      </div>
    </header>
    
  </div></>
  )
}
