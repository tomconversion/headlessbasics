import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    hoverCard: string
    dropDown: string
    dialog: string
    code: string
    collapsible: string
    twitter: string
    github: string
    docs: string
    accordion: string
    alert: string
    subMenu: string
    globalNavigation: string
    avatar: string
    button: string
    checkbox: string
    contextMenu: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
    accordion: "/accordion",
    alert: "/alert-dialog",
    subMenu: "/subMenu",
    globalNavigation: "/globalNavigation",
    avatar: "/avatar",
    button: "/button",
    checkbox: "/checkbox",
    collapsible: "/collapsible",
    code: "/code",
    contextMenu : "/contextMenu",
    dialog: "/dialog",
    dropDown : "/dropDown",
    hoverCard : "/hoverCard"
  },
}
