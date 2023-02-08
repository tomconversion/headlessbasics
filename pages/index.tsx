import Head from "next/head"
import Link from "next/link"

import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import LabelDemo from "@/components/ui/demo/labelDemo"
import { Label } from "../components/ui/label"

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
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Beautifully designed components <br className="hidden sm:inline" />
            built with Radix UI and Tailwind CSS.
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Accessible and customizable components that you can copy and paste
            into your apps. Free. Open Source. And Next.js 13 Ready.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
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
          </Link>
        </div>



        {/* Menus, Navigation, Buttons, Helpers */}
        <div className="border-grey-600 flex gap-4 border-2 border-solid p-2">
          <div className="min-w-[300px]">
            <Label className="">
              Menus, Navigation, Buttons, Helpers
            </Label>
          </div>

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
            Global Navigation
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
            Menu Bar
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
            Drop Down Menu
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
            collapsible
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
            Context Menu
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
            Accordion
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
            button
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
            Tabs
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
            Input
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
            Radio Group
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
            checkbox
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
            select
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
            Text Area
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
            avatar
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
            Progress
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
            Scroll Area
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
            Slider
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
            Label
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
            Code Area
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
            Seperator
          </Link>

         

        </div>

      </section>
    </Layout>
  )
}
