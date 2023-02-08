import Head from "next/head"
import Link from "next/link"

import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

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
              color: "secondary",
            })}
          >
            GitHub
          </Link>
        </div>
        <div className="border-grey-600 flex gap-4 border-2 border-solid p-2">
          <Link
            href={siteConfig.links.accordion}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "outline",
              color: "primary",
            })}
          >
            Accordion
          </Link>
          <Link
            href={siteConfig.links.alert}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "outline",
              color: "secondary",
            })}
          >
            Alert Dialogue
          </Link>
          <Link
            href={siteConfig.links.subMenu}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "outline",
              color: "secondary",
            })}
          >
            Sub Menu
          </Link>
          <Link
            href={siteConfig.links.globalNavigation}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "outline",
              color: "secondary",
            })}
          >
            Global Navigation
          </Link>
          <Link
            href={siteConfig.links.avatar}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({
              size: "lg",
              variant: "outline",
              color: "secondary",
            })}
          >
            avatar
          </Link>
        </div>
      </section>
    </Layout>
  )
}
