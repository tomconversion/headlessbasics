import React from "react"
import { SiteHeader } from "./site-header"

interface LayoutProps {
  children: React.ReactNode,
  className?: string
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div>
      <div className={className}><SiteHeader /></div>
      <main>{children}</main>
    </div>
  )
}
