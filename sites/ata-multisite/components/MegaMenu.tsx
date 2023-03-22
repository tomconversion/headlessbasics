import { NavMegaMenuV1 } from "@/ui-base/components/ui/navigation/navMegaMenuV1"

export function buildMegaMenu(navItems) {
  return (
    <>
      <div data-role="Header" className="flex w-full flex-col items-center">
        <header className="z-50 mx-auto flex w-[100%] max-w-screen-xl items-center justify-between py-8 px-4">
          <div className="home-container01"></div>
          <NavMegaMenuV1 navItems={navItems} />
        </header>
      </div>
    </>
  )
}
