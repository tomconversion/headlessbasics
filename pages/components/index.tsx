import Head from "next/head"
import Link from "next/link"
import { BackpackIcon, StarFilledIcon } from "@radix-ui/react-icons"
import { Label } from "@radix-ui/react-label"

import { Layout } from "@/ui-base/components/layout"
import { buttonVariants } from "@/ui-base/components/ui/button"
import { GetSiteConfig } from "@/ui-base/lib/services/siteContextService"
import { GetImageHero, GetShowcaseNavItems } from "../../sites/showcase/lib/services/showcaseDataService"
import Hero from "@/ui-base/components/ui/hero/Hero"

export default function ComponentIndex() {

  const siteConfig = GetSiteConfig()

  const sections = [
    {
      title: "Menus, Navigation, Buttons, Helpers",
      links: [
        {
          title: "Sub Menu",
          href: siteConfig.links.subMenu,
          icon: <BackpackIcon />,
        },
        {
          title: "Global Navigation",
          href: siteConfig.links.globalNavigation,
          icon: <BackpackIcon />,
        },
        {
          title: "Menu Bar",
          href: siteConfig.links.menuBar,
          icon: <BackpackIcon />,
        },
        {
          title: "Drop Down Menu",
          href: siteConfig.links.dropDown,
          icon: <BackpackIcon />,
        },
        {
          title: "Collapsible",
          href: siteConfig.links.collapsible,
          icon: <BackpackIcon />,
        },
        {
          title: "Context Menu",
          href: siteConfig.links.contextMenu,
          icon: <BackpackIcon />,
        },
        {
          title: "Accordion",
          href: siteConfig.links.accordion,
          icon: <BackpackIcon />,
        },
        {
          title: "Button",
          href: siteConfig.links.button,
          icon: <BackpackIcon />,
        },
        {
          title: "Tabs",
          href: siteConfig.links.tabs,
          icon: <BackpackIcon />,
        },
        {
          title: "Breadcrumb",
          href: siteConfig.links.breadcrumb,
          icon: <StarFilledIcon />,
        },
        {
          title: "Footer",
          href: siteConfig.links.footer,
          icon: <StarFilledIcon />,
        },
        {
          title: "Hero",
          href: siteConfig.links.hero,
          icon: <StarFilledIcon />,
        },
      ],
    },
    {
      title: "Modals, Hover",
      links: [
        {
          title: "Cards",
          href: siteConfig.links.cards,
          icon: <StarFilledIcon />,
        },
        {
          title: "Dialog",
          href: siteConfig.links.dialog,
        },
        {
          title: "Hover Card",
          href: siteConfig.links.hoverCard,
        },
        {
          title: "Popover",
          href: siteConfig.links.popover,
        },
        {
          title: "Alert Dialogue",
          href: siteConfig.links.alert,
        },
      ],
    },
    {
      title: "Data Display",
      links: [
        {
          title: "Badge",
          href: siteConfig.links.badge,
          icon: <StarFilledIcon />,
        },
        {
          title: "Countdown",
          href: siteConfig.links.countdown,
          icon: <StarFilledIcon />,
        },
        {
          title: "Kbd",
          href: siteConfig.links.kbd,
          icon: <StarFilledIcon />,
        },
        {
          title: "Stats",
          href: siteConfig.links.stats,
          icon: <StarFilledIcon />,
        },
        {
          title: "Table",
          href: siteConfig.links.table,
          icon: <StarFilledIcon />,
        },
      ],
    },
    {
      title: "User Input Components",
      links: [
        {
          title: "Input",
          href: siteConfig.links.input,
          icon: <BackpackIcon />,
        },
        {
          title: "Radio Group",
          href: siteConfig.links.radioGroup,
          icon: <BackpackIcon />,
        },
        {
          title: "Checkbox",
          href: siteConfig.links.checkbox,
          icon: <BackpackIcon />,
        },
        {
          title: "Select",
          href: siteConfig.links.select,
          icon: <BackpackIcon />,
        },
        {
          title: "Text Area",
          href: siteConfig.links.textarea,
          icon: <BackpackIcon />,
        },
        {
          title: "Chat Bubble",
          href: siteConfig.links.chatBubble,
          icon: <StarFilledIcon />,
        },
        {
          title: "Range",
          href: siteConfig.links.range,
          icon: <StarFilledIcon />,
        },
        {
          title: "Rating",
          href: siteConfig.links.rating,
          icon: <StarFilledIcon />,
        },
      ],
    },
    {
      title: "User Account",
      links: [
        {
          title: "Avatar",
          href: siteConfig.links.avatar,
          icon: <BackpackIcon />,
        },
        {
          title: "Mask",
          href: siteConfig.links.mask,
          icon: <StarFilledIcon />,
        },
      ],
    },
    {
      title: "Loaders, Indicators",
      links: [
        {
          title: "Progress",
          href: siteConfig.links.progress,
          icon: <BackpackIcon />,
        },
        {
          title: "Radial Progress",
          href: siteConfig.links.radialProgress,
          icon: <StarFilledIcon />,
        },
      ],
    },
    {
      title: "Interactive",
      links: [
        {
          title: "Scroll Area",
          href: siteConfig.links.scrollArea,
          icon: <BackpackIcon />,
        },
        {
          title: "Slider",
          href: siteConfig.links.slider,
          icon: <BackpackIcon />,
        },
      ],
    },
    {
      title: "Text Formatting",
      links: [
        {
          title: "Label",
          href: siteConfig.links.label,
          icon: <BackpackIcon />,
        },
        {
          title: "Code Area",
          href: siteConfig.links.code,
          icon: <BackpackIcon />,
        },
      ],
    },
    {
      title: "Structures",
      links: [
        {
          title: "Separator",
          href: siteConfig.links.separator,
          icon: <BackpackIcon />,
        },
      ],
    },
    {
      title: "Media Display",
      links: [
        {
          title: "Carousel",
          href: siteConfig.links.carousel,
        },

        {
          title: "Media Logos",
          href: siteConfig.links.mediaLogos,
        },
      ],
    },
    {
      title: "CTA / Promotions",
      links: [
        {
          title: "CTA / Promotions",
          href: siteConfig.links.promotion,
        },
        {
          title: "Two Column Section",
          href: siteConfig.links.ctaSectionTwoColumn,
        },
        {
          title: "Three Column Section",
          href: siteConfig.links.ctaSectionThreeColumn,
        },
        {
          title: "Feature Section",
          href: siteConfig.links.featureSection,
        },
        {
          title : "Stories Section",
          href : siteConfig.links.storiesSection,
        },
      ],
    },
  ]

  let data = { data : {navItems : GetShowcaseNavItems() } };

  return (

    <Layout
      className={"flex w-full flex-col items-center"}
      data={data}
    >
      <Head>
        <title>{`${GetSiteConfig().name}`}</title>
        <meta
          name="Headless Basics by Conversion Digital | A front end headless start kit for sites, blogs, and ecommerce. Supporting multiple CMS and headless tools."
          content={`${GetSiteConfig().name} `}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={
          "flex min-h-screen w-full flex-col items-center overflow-hidden"
        }>

      <Hero
        className="min-h-[500px] bg-base-200"
        style={{
          backgroundImage:
            "url("+GetImageHero()+")",
        }}
      >
        <Hero.Overlay className="bg-white/60" />
        <Hero.Content className="text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Component Library</h1>
            <p className="py-6">
              This component library contains a collection of components that can be used to build a website or application. 
              The library is based on Tailwind CSS and React.
              As new websites are built and new components are needed, they will be added to this library.
            </p>
            {/* <Button color="primary">Know More</Button> */}
          </div>
        </Hero.Content>
      </Hero>
          
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex gap-4">
          {/* <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg", color: "primary" })}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({
              size: "lg",
              color: "primary",
            })}
          >
            GitHub
          </Link> */}
        </div>

        {sections.map((section) => (
          <div
            key={section.title}
            className="border-grey-600 flex gap-4 border-2 border-solid p-2"
          >
            <div className="min-w-[300px]">
              <Label className="">{section.title}</Label>
            </div>
            <div className="flex flex-wrap gap-2">
              {section.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  target="_self"
                  rel="noreferrer"
                  className={buttonVariants({
                    size: "lg",
                    variant: "outline",
                    color: "primary",
                  })}
                >
                  {link.title} <span className="ml-2">{link.icon}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section  className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div>
            References:
            <ul className="text-blue-600 visited:text-purple-600 hover:text-blue-800">
              <li>
                <a className="" href="https://github.com/shadcn/ui">
                  {" "}
                  Shadcn UI (Radix UI Components)
                  <BackpackIcon className="inline" />
                </a>{" "}
              </li>
              <li>
                <a href="https://www.radix-ui.com/"> Radix UI</a>
              </li>
              <li>
                <a href="https://daisyui.com/">
                  {" "}
                  Daisy UI
                  <StarFilledIcon className="inline" />
                </a>
              </li>
            </ul>
          </div>
      </section>

      </main>
    </Layout>


  )
}
