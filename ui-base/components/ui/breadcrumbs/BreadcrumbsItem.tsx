import React from "react"

export type BreadcrumbsItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  href?: string
  icon?: React.ReactNode
}

const BreadcrumbsItem = React.forwardRef<HTMLLIElement, BreadcrumbsItemProps>(
  ({ children, href, icon, ...props }, ref): JSX.Element => {
    return (
      <li role="link" {...props} ref={ref}>
        {href ? <a href={href}>{children}</a> : children}
      </li>
    )
  }
)

BreadcrumbsItem.displayName = "BreadcrumbsItem"

export default BreadcrumbsItem
