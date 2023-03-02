import React, { Fragment, Key } from "react"

import { cn } from "@/ui-base/lib/util/utils";

interface LinkItem {
  url?: string
  child?: JSX.Element
  text?: string
}

export type FooterProps = React.HTMLAttributes<HTMLDivElement> & {
  center?: boolean
  data?: {
    title: string
    links: LinkItem[]
  }[]
}

function renderLink(link: LinkItem, index: number) {
  if (link.child) {
    return <Fragment key={index}>{link.child}</Fragment>
  } else {
    return (
      <a key={index} className={cn({ ["link-hover link"]: link.url })}>
        {link.text}
      </a>
    )
  }
}

export type FooterTitleProps = React.HTMLAttributes<HTMLSpanElement>

export const FooterTitle = React.forwardRef<HTMLSpanElement, FooterTitleProps>(
  ({ className, ...props }, ref) => {
    const classes = cn("footer-title", className)

    return <span {...props} className={classes} ref={ref} />
  }
)

const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ data, center, className, ...props }, ref) => {
    const classes = cn("footer", className, {
      "footer-center": center,
    })
    if (data?.length)
      return (
        <div role="contentinfo" {...props} className={classes} ref={ref}>
          {data.map((item, index: Key) => (
            <div key={index}>
              <FooterTitle>{item.title}</FooterTitle>
              {item.links.map(renderLink)}
            </div>
          ))}
        </div>
      )
    return <div role="contentinfo" {...props} className={classes} ref={ref} />
  }
)

Footer.displayName = "Footer"
FooterTitle.displayName = "FooterTitle"

export default Object.assign(Footer, { Title: FooterTitle })
