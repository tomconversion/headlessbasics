import Head from "next/head"

import {
  COMPONENT_FEATURES,
  COMPONENT_HERO,
  COMPONENT_OUR_CLIENT,
  COMPONENT_STORIES,
} from "@/ui-base/lib/cms/constants"
import { Layout } from "../../../ui-base/components/layout"
import { siteConfig } from "../config/site"
import Home from "../views/home"

export function IndexPage({ data }) {
  return (
    <Layout
      className={"flex w-full flex-col items-center"}
      data={data}
      siteConfig={siteConfig}
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
        heroData={data?.data?.pageComponentData[COMPONENT_HERO]}
        clientsData={data?.data?.pageComponentData[COMPONENT_OUR_CLIENT]}
        featuresData={data?.data?.pageComponentData[COMPONENT_FEATURES]}
        storiesData={data?.data?.pageComponentData[COMPONENT_STORIES]}
      />
    </Layout>
  )
}
