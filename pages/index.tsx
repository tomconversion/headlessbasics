import Head from 'next/head'

import { Layout } from "@/components/layout"

import Home from '@/components/ui/landify/views/home'
import { buildPageData } from '@/lib/services/graphqlDataService'
import { siteConfig } from "../config/site"


export default function IndexPage({data}) {
  return (
    <Layout className={"w-full flex flex-col items-center"} data={data}>
      <Head>
        <title>${siteConfig.name} | </title>
        <meta
          name="description"
          content={`A Next.js basic website for delivering headless websites from multiple Headless CMSs.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home className={"w-full min-h-screen flex flex-col items-center overflow-hidden"} />
    </Layout>
  )
}

export async function getStaticProps() {
  // const req = preview ? previewData.req : null;
  // const slug = req ? req.url.substring(1) : null;
  //const { params } = context;
  //console.log("getStaticProps params = ", params);
  const result = await buildPageData("home", {slug: "/"});  
  return {
    props: result,
  }
}