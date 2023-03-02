import Head from "next/head"

import { Layout } from "@/ui-base/components/layout"
import { AccordionDemo } from "@/ui-base/components/ui/demo/accordiondemo"
import { GetSiteConfig } from "@/ui-base/config/site"

export default function IndexPage() {
  var data = {};
  return (
    <Layout siteConfig={GetSiteConfig()} data={data}>
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
            Accordion Demo <br className="hidden sm:inline" />
          </h1>
        </div>
        <div className="flex gap-4">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            
          </h2>
        <AccordionDemo/>
        </div>

      </section>
    </Layout>
  )
}
