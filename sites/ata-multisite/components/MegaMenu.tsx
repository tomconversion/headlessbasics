import { NavMegaMenuV1 } from "@/ui-base/components/ui/navigation/navMegaMenuV1";

export function buildMegaMenu(navItems){
    return(
      <><div data-role="Header" className="w-full flex flex-col items-center">
        <header className="w-[100%] flex items-center justify-between py-8 px-4 z-50 max-w-screen-lg mx-auto">
          <div className="home-container01">          
          </div>
          <NavMegaMenuV1 navClasses={"flex flex-row items-start"} navItems={navItems}/>  
        </header>  
      </div></>
    )
}