import { BaseSiteConfig } from "../../ui-base/config/site"

export const siteConfig: BaseSiteConfig = {
  siteTemplate: "landify",                                // This matched the folder within the /sites folder
  name: "Headless Basics by Conversion Digital",
  description: "Get up and running with a basic site quick. Blazingly fast headless.",
  mainNav: [
    {
      title: "Home",
      href: "/"
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
    contextMenu: "/contextMenu",
    dialog: "/dialog",
    dropDown: "/dropDown",
    hoverCard: "/hoverCard",
    input: "/input",
    label: "/label",
    menuBar: "/menuBar",
    popover: "/popover",
    progress: "/progress",
    radioGroup: "/radioGroup",
    scrollArea: "/scrollArea",
    select: "/select",
    separator: "/separator",
    slider: "/slider",
    tabs: "/tabs",
    textarea: "/textarea",
    carousel: "/carousel",
    promotion: "/contentBlocks/promotion",
    ctaSectionTwoColumn: "/contentBlocks/ctaSectionTwoColumn",
    ctaSectionThreeColumn: "/contentBlocks/ctaSectionThreeColumn"
  },
  logo: {
    description: "Next.js",
    image: "/landify/static/playground_assets/logotype-dark.svg",
    width: 100,
    height: 100,
    title: "Next.js"    
  }
}
