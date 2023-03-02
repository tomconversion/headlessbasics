import { cn } from "@/ui-base/lib/util/utils"
import React, { Key, ReactElement } from "react"

import BreadcrumbsItem, { BreadcrumbsItemProps } from "./BreadcrumbsItem"

export type BreadcrumbsProps = React.HTMLAttributes<HTMLDivElement> & {
  data?: {
    links?: {
      href: string
      text: string
      icon?: string
    }[]
    iconObject?: {
      [key: string]: ReactElement
    }
  }
  children?:
    | ReactElement<BreadcrumbsItemProps>
    | ReactElement<BreadcrumbsItemProps>[]
  innerRef?: React.Ref<HTMLUListElement>
  innerProps?: React.HTMLAttributes<HTMLUListElement>
}

const Breadcrumbs = React.forwardRef<HTMLDivElement, BreadcrumbsProps>(
  (
    { children, data, className, innerProps, innerRef, ...props },
    ref
  ): JSX.Element => {
    const classes = cn("breadcrumbs", "text-sm", className)

    return (
      <div
        role="navigation"
        aria-label="Breadcrumbs"
        className={classes}
        ref={ref}
        {...props}
      >
        <ul {...innerProps} ref={innerRef}>
          {data?.links
            ? data.links?.map((item: any, idx: Key) => (
                <BreadcrumbsItem key={idx} href={item.href}>
                  {item.icon && data.iconObject[item.icon]}
                  {item.text}
                </BreadcrumbsItem>
              ))
            : children}
        </ul>
      </div>
    )
  }
)

Breadcrumbs.displayName = "Breadcrumbs"

export default Object.assign(Breadcrumbs, { Item: BreadcrumbsItem })
