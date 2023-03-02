import React from "react"
import { BaseSiteConfig } from "../config/site"
import { SiteHeader } from "./site-header"

interface LayoutProps {
  children: React.ReactNode,
  className?: string,
  data: any,
  siteConfig: BaseSiteConfig
}

export function Layout({ children, className, data, siteConfig }: LayoutProps) {
  return (
    <div>
      <div className={className}><SiteHeader data={data} siteConfig={siteConfig}/></div>
      <main>{children}</main>
    </div>
  )
}
