import Head from "next/head"
import Link from "next/link"

import { Layout } from "@/components/layout"
import { Button, buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import LabelDemo from "@/components/ui/demo/labelDemo"
import { Label } from "../components/ui/label"
import { BackpackIcon, StarFilledIcon } from "@radix-ui/react-icons"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Next.js</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tighter">
            <br className="hidden sm:inline" />
            Tailwind CSS Based Component Library
          </h2>
          <p className="max-w-[1080px] min-w-[500px]">
            References: 
            <ul className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
              <li><a className="" href='https://github.com/shadcn/ui'> Shadcn UI (Radix UI Components)<BackpackIcon className="inline"  /></a> </li>
              <li><a href='https://www.radix-ui.com/'> Radix UI</a></li>
              <li><a href='https://daisyui.com/'> Daisy UI<StarFilledIcon className="inline"  /></a></li>
            </ul>
          </p>
        </div>
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



        {/* Menus, Navigation, Buttons, Helpers */}
        <div className="border-grey-600 flex gap-4 border-2 border-solid p-2">
          <div className="min-w-[300px]">
            <Label className="">
              Menus, Navigation, Buttons, Helpers
            </Label>
          </div>

          <Button>
            Sub Menu
            <BackpackIcon  />
          </Button>

          <Link
            href={siteConfig.links.subMenu}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            Sub Menu
            <BackpackIcon  />
          </Link>

          <Link
            href={siteConfig.links.globalNavigation}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            Global Navigation<BackpackIcon  />
          </Link>

          <Link
            href={siteConfig.links.menuBar}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            Menu Bar<BackpackIcon  />
          </Link>

          <Link
            href={siteConfig.links.dropDown}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            Drop Down Menu<BackpackIcon  />
          </Link>
          <Link
            href={siteConfig.links.collapsible}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            collapsible<BackpackIcon  />
          </Link>

          <Link
            href={siteConfig.links.contextMenu}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            Context Menu<BackpackIcon  />
          </Link>

          <Link
            href={siteConfig.links.accordion}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            Accordion<BackpackIcon  />
          </Link>

          <Link
            href={siteConfig.links.button}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            button<BackpackIcon  />
          </Link>

          <Link
            href={siteConfig.links.tabs}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            Tabs<BackpackIcon  />
          </Link>
        </div>


        {/* Modals, Hover */}
        <div className="border-grey-600 flex gap-4 border-2 border-solid p-2">
          <div className="min-w-[300px]">
            <Label>
              Modals, Hover
            </Label>
          </div>

          <Link
            href={siteConfig.links.dialog}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            Dialog
          </Link>

          <Link
            href={siteConfig.links.hoverCard}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            Hover Card
          </Link>

          <Link
            href={siteConfig.links.popover}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            Popover
          </Link>

          <Link
            href={siteConfig.links.alert}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            Alert Dialogue
          </Link>

        </div>

        {/* User Input Components */}
        <div className="border-grey-600 flex gap-4 border-2 border-solid p-2">
          <div className="min-w-[300px]">
            <Label>
              User Input Components
            </Label>
          </div>

          <Link
            href={siteConfig.links.input}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            Input<BackpackIcon  />
          </Link>




          <Link
            href={siteConfig.links.radioGroup}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            Radio Group<BackpackIcon  />
          </Link>

          <Link
            href={siteConfig.links.checkbox}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            checkbox<BackpackIcon  />
          </Link>

          
          <Link
            href={siteConfig.links.select}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            select<BackpackIcon  />
          </Link>
          
          <Link
            href={siteConfig.links.textarea}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            Text Area<BackpackIcon  />
          </Link>

        </div>


        {/* User Account */}
        <div className="border-grey-600 flex gap-4 border-2 border-solid p-2">
          <div className="min-w-[300px]">
            <Label>
              User Account
            </Label>
          </div>

          <Link
            href={siteConfig.links.avatar}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            avatar<BackpackIcon  />
          </Link>

        </div>

        {/* Loaders, Indicators */}
        <div className="border-grey-600 flex gap-4 border-2 border-solid p-2">
          <div className="min-w-[300px]">
            <Label>
              Loaders, Indicators
            </Label>
          </div>

          <Link
            href={siteConfig.links.progress}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            Progress<BackpackIcon  />
          </Link>

        </div>

        {/* Interactive */}
        <div className="border-grey-600 flex gap-4 border-2 border-solid p-2">
          <div className="min-w-[300px]">
            <Label>
              Interactive
            </Label>
          </div>

          <Link
            href={siteConfig.links.scrollArea}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            Scroll Area<BackpackIcon  />
          </Link>

          <Link
            href={siteConfig.links.slider}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            Slider<BackpackIcon  />
          </Link>

        </div>

        {/* Text Formatting */}
        <div className="border-grey-600 flex gap-4 border-2 border-solid p-2">
          <div className="min-w-[300px]">
            <Label>
              Text Formatting
            </Label>
          </div>

          <Link
            href={siteConfig.links.label}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            Label<BackpackIcon  />
          </Link>

          <Link
            href={siteConfig.links.code}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            Code Area<BackpackIcon  />
          </Link>

        </div>

        {/* Structures */}
        <div className="border-grey-600 flex gap-4 border-2 border-solid p-2">
          <div className="min-w-[300px]">
            <Label>
            Structures
            </Label>
          </div>

          <Link
            href={siteConfig.links.separator}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            Seperator<BackpackIcon  />
          </Link>

         

        </div>

                {/* Media Display */}
                <div className="border-grey-600 flex gap-4 border-2 border-solid p-2">
          <div className="min-w-[300px]">
            <Label>
            Media Display
            </Label>
          </div>

          <Link
            href={siteConfig.links.carousel}
            target="_self"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "default",
              color: "primary",
            })}
          >
            Carousel
          </Link>

         

        </div>

      </section>
    </Layout>
  )
}
