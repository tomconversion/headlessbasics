import { GetSiteConfig } from "@/ui-base/lib/services/siteContextService"
import Head from "next/head"

import { Layout } from "../../../ui-base/components/layout"
import Home from '../views/home'


export function Homepage({ data }) {
  return (
    <Layout
      className={"flex w-full flex-col items-center"}
      data={data}
    >
      <Head>
        <title>{`${GetSiteConfig().name} | ${data?.seoItems?.seoTitle}`}</title>
        <meta
          name="description"
          content={`${GetSiteConfig().name} | ${data?.seoItems?.seoDescription}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home
        className={
          "flex min-h-screen w-full flex-col items-center overflow-hidden"
        }
        data={data?.data}
      />
    </Layout>
  )
}
