import { NavMegaMenuV1 } from "@/ui-base/components/ui/navigation/navMegaMenuV1"
import StickyNav from "./StickyNavigation"

export function buildMegaMenu(navItems) {
  return (
    <>
      <div data-role="Header" className="flex w-full flex-col items-center">
        <header className="flex w-full max-w-screen-xl flex-col items-center px-4">
          <StickyNav />
          <NavMegaMenuV1 navItems={navItems} className="pt-0"/>
        </header>
      </div>
    </>
  )
}
