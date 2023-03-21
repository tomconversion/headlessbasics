import { is } from "date-fns/locale"
import React from "react"
import { BaseSiteConfig } from "../config/site"
import { SiteHeader } from "./site-header"

interface LayoutProps {
  children: React.ReactNode,
  className?: string,
  data: any,
  siteConfig: BaseSiteConfig,
  isMegamenu?: boolean,
  megaMenuMenu?: any
}

export function Layout({ children, className, data, siteConfig, isMegamenu, megaMenuMenu }: LayoutProps) {
  return (
    <div>
      <div className={className}><SiteHeader data={data} siteConfig={siteConfig} isMegamenu={isMegamenu} megaMenuMenu={megaMenuMenu}/></div>
      <main>{children}</main>
    </div>
  )
}
