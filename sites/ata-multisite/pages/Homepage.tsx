import Head from "next/head"

import { NavItemInterface } from "@/ui-base/components/ui/navigation/NavItem"
import { Layout } from "../../../ui-base/components/layout"
import { buildMegaMenu } from "../components/MegaMenu"
import { siteConfig } from "../config/site"
import Home from "../views/home"

export function Homepage<HomepageProps>({ data }) {
  return (
    <Layout
      className={"flex w-full flex-col items-center"}
      data={data}
      siteConfig={siteConfig}
      isMegamenu={true}
      megaMenuMenu={buildMegaMenu(data?.data?.navItems)}
      // megaMenuMenu={buildMegaMenu(navItems)}
    >
      <Head>
        <title>{`${siteConfig.name} | ${data?.seoItems?.seoTitle}`}</title>
        <meta
          name="description"
          content={`${siteConfig.name} | ${data?.seoItems?.seoDescription}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home
        className={
          "flex min-h-screen w-full flex-col items-center overflow-hidden"
        }
      />
    </Layout>
  )
}
