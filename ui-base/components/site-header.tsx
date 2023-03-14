import { GlobalTailwindNavigationMenu } from "./ui/global-navigation"
import StoreBanner from "../../sites/landify/components/store-banner"
import Logo from "./ui/media/logo"

export function SiteHeader({data, siteConfig}) {

  let navItems = [];
  if(data?.data?.navItems){
    navItems = data.data.navItems;
  }else if(data?.navItems){
    navItems = data.navItems;
  }

  if(navItems.length === 0){
    return (<></>);
  }

  return (
    <><div data-role="Header" className="w-full flex flex-col items-center">
    <header className="w-[100%] flex items-center justify-between py-8 px-4 z-50 max-w-screen-lg mx-auto">
      <Logo image={siteConfig.logo} className="w-100 object-cover" />      
      
      <GlobalTailwindNavigationMenu navClasses={"flex flex-row items-start"} navItems={navItems} />
      
      <div className="home-container01">
        <StoreBanner></StoreBanner>
      </div>
    </header>
    
  </div></>
  )
}
