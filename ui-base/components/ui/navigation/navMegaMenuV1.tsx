import Image from "next/image"
import Link from "next/link"

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

// render a tailwind navigation menu
const NavMegaMenuV1 = ({ navItems }: NavigationProps) => {
  if (typeof navItems === "undefined") {
    return <></>
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
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
            {navItems.map((navItem: any, index) => (
              <NavItem {...navItem} key={`${navItem.id}-${index}`} />
            ))}
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
      <div className="navbar-end dropdown">
        <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
          <div className="w-10 rounded-full">
            <Image
              alt="International Sites"
              src="/ata-multisite/images/global/world-97864_960_720.png"
              width={100}
              height={100}
            />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export { NavMegaMenuV1 }
