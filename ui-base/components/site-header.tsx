import { GlobalTailwindNavigationMenu } from "./ui/global-navigation"
import StoreBanner from "../../sites/landify/components/store-banner"
import Logo from "./ui/media/logo"
import { NavMegaMenuV1 } from "./ui/navigation/navMegaMenuV1";

export function SiteHeader({data, siteConfig, isMegamenu = false, megaMenuMenu}) {

  let navItems = [];
  if(data?.data?.navItems){
    navItems = data.data.navItems;
  }else if(data?.navItems){
    navItems = data.navItems;
  }

  if(navItems.length === 0){
    return (<></>);
  }

  if(isMegamenu && megaMenuMenu){
    return buildMegaMenu(navItems, megaMenuMenu);
  }else{
    
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
}

function buildMegaMenu(navItems, megaMenuMenu){
    return (<>{megaMenuMenu}</>
      // <><div data-role="Header" className="w-full flex flex-col items-center">
      //   <header className="w-[100%] flex items-center justify-between py-8 px-4 z-50 max-w-screen-lg mx-auto">
      //     <div className="home-container01">          
      //     </div>
      //     <NavMegaMenuV1 navClasses={"flex flex-row items-start"} navItems={navItems}/>  
      //   </header>  
      // </div></>
    )
}
