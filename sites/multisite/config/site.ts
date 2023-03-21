import { BaseSiteConfig } from "../../../ui-base/config/site"

export const siteConfig: BaseSiteConfig = {
  siteTemplate: "ata-multisite", 
  name: "Automatic Technology",
  description:
    "Smart Simple Secure",
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
    accordion: "/components/accordion",
    alert: "/components/alert-dialog",
    subMenu: "/components/subMenu",
    globalNavigation: "/components/globalNavigation",
    avatar: "/components/avatar",
    button: "/components/button",
    checkbox: "/components/checkbox",
    collapsible: "/components/collapsible",
    code: "/components/code",
    contextMenu: "/components/contextMenu",
    dialog: "/components/dialog",
    dropDown: "/components/dropDown",
    hoverCard: "/components/hoverCard",
    input: "/components/input",
    label: "/components/label",
    menuBar: "/components/menuBar",
    popover: "/components/popover",
    progress: "/components/progress",
    radioGroup: "/components/radioGroup",
    scrollArea: "/components/scrollArea",
    select: "/components/select",
    separator: "/components/separator",
    slider: "/components/slider",
    tabs: "/components/tabs",
    textarea: "/components/textarea",
    carousel: "/components/carousel",
    promotion: "/components/contentBlocks/promotion",
    breadcrumb: "/components/breadcrumb",
    cards: "/components/cards",
    badge: "/components/badge",
    chatBubble: "/components/chatBubble",
    countdown: "/components/countdown",
    kbd: "/components/kbd",
    radialProgress: "/components/radialProgress",
    stats: "/components/stats",
    ctaSectionTwoColumn: "/components/contentBlocks/ctaSectionTwoColumn",
    ctaSectionThreeColumn: "/components/contentBlocks/ctaSectionThreeColumn",
    range: "/components/range",
    rating: "/components/rating",
    footer: "/components/footer",
    table: "/components/table",
    mask: "/components/mask",
    hero: "/components/hero",
    mediaLogos: "/components/mediaLogos",
  },
  logo: {
    description: "Next.js",
    image: "/multisite/static/playground_assets/logotype-dark.svg",
    width: 100,
    height: 100,
    title: "Next.js",
  }
}
