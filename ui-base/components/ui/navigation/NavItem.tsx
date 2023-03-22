import { cn } from "@/ui-base/lib/util/utils"
import { filterNavItem } from "./navMegaMenuV1"

export interface NavItemInterface {
  id?: string
  url?: string
  name: string
  level?: number
  superAlias?: string
  children?: NavItemInterface[]
  showInNavigation?: boolean
}

interface NavItemProps extends NavItemInterface {
  nested?: boolean
}

const NavItem = (navItem: NavItemProps) => {
  const { url, name, children } = navItem
  if (!filterNavItem(navItem)) return null

  const hasChildren = children && children.length > 0
  if (hasChildren) {
    return (
      <li className="dropdown-hover dropdown">
        <label tabIndex={0} className="m-1">
          {name}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-right dropdown-content menu rounded-box bg-base-100 p-2 shadow"
        >
          {children.map((item, idx) => (
            <NavItem {...item} key={`${item.id}-${idx}`} nested />
          ))}
        </ul>
      </li>
    )
  }
  return (
    <li className="">
      <a href={url}>{name}</a>
    </li>
  )
}
export default NavItem
