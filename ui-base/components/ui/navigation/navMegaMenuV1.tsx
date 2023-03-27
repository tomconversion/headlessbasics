import Image from "next/image"
import Link from "next/link"

import { getLogger } from "@/ui-base/lib/services/logging/LogConfig"
import NavItem, { NavItemInterface } from "./NavItem"

interface NavigationProps {
  navItems: NavItemInterface[]
  className?: string
}

export const filterNavItem = (navItem: NavItemInterface) => {
  if (
    typeof navItem.url !== "undefined" &&
    typeof navItem.showInNavigation !== "undefined" &&
    navItem.showInNavigation === true
  ) {
    return true
  }
  return false
}

const log = getLogger("headless.components.navMegaMenuV1")

// render a tailwind navigation menu
const NavMegaMenuV1 = ({ navItems, className }: NavigationProps) => {
  if (typeof navItems === "undefined") {
    return <></>
  }

  return (
    <div className={`navbar justify-between bg-base-100 ${className}`}>
      <div className="navbar-start max-w-max">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
          >
            {navItems.map(
              (navItem: any, index) => (
                log.debug("navItem", navItem),
                (<NavItem {...navItem} key={`${navItem.id}-${index}`} />)
              )
            )}
          </ul>
        </div>
        <a className="btn-ghost btn text-xl normal-case">ATA Automation</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item, index) => (
            <NavItem {...item} key={`${item.id}-${index}`} />
          ))}
        </ul>
      </div>
      <div className="navbar-end dropdown max-w-max">
        <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
          <div className="w-10 rounded-full">
            <Image
              alt="International Sites"
              src="/multisite/images/global/world-97864_960_720.png"
              width={100}
              height={100}
            />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
        >
          <li className="min-h-full w-full">
            <label
              tabIndex={0}
              className="btn-ghost btn-circle avatar btn w-full"
            >
              <div className="flex">
                <Link href={"/au"}>
                  <div className="w-100 rounded-full">
                    <Image
                      alt="International Sites"
                      src="/multisite/images/global/australia-28586_960_720.png"
                      width={100}
                      height={100}
                    />
                  </div>
                </Link>
                <Link href={"/"}>
                  <div className="w-100 rounded-full">
                    <Image
                      alt="International Sites"
                      src="/multisite/images/global/usa-1960922_960_720.jpg"
                      width={100}
                      height={100}
                    />
                  </div>
                </Link>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </div>
  )
}

export { NavMegaMenuV1 }
