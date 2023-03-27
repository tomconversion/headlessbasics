import IndexPage from "@/pages/components"

import Hero from "@/ui-base/components/ui/hero/Hero"
import { GetSiteConfig } from "@/ui-base/lib/services/siteContextService"
import Head from "next/head"
import { Layout } from "../../../ui-base/components/layout"

export function Homepage({ data }) {
  return (
    <Layout
      className={"flex w-full flex-col items-center"}
      data={data}
    >
      <Head>
        <title>{`${GetSiteConfig().name} | ${data?.seoItems?.seoTitle}`}</title>
        <meta
          name="Headless Basics by Conversion Digital | A front end headless start kit for sites, blogs, and ecommerce. Supporting multiple CMS and headless tools."
          content={`${GetSiteConfig().name} | ${data?.seoItems?.seoDescription}`}
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
            "url(https://api.lorem.space/image/fashion?w=1000&h=800)",
        }}
      >
        <Hero.Overlay className="bg-white/60" />
        <Hero.Content className="text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to Headless Basics</h1>
            <p className="py-6">
              Headless basics is a site framework built on Next.JS, Tailwind CSS, Typescript and React.
              The aim of the project is to provide the building blocks to create a headless site that can be hosted by multiple CMS's.
            </p>
            {/* <Button color="primary">Know More</Button> */}
          </div>
        </Hero.Content>
      </Hero>

      </main>
    </Layout>
  )
}
