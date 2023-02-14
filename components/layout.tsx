import React from "react"
import { SiteHeader } from "./site-header"

interface LayoutProps {
  children: React.ReactNode,
  className?: string,
  data: any
}

export function Layout({ children, className, data }: LayoutProps) {
  return (
    <div>
      <div className={className}><SiteHeader data={data} /></div>
      <main>{children}</main>
    </div>
  )
}
