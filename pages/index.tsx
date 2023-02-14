import Head from 'next/head'

import { Layout } from "@/components/layout"

import Home from '@/components/ui/landify/views/home'
import { getDyanmicCmsDataViaCmsSelector } from '@/lib/services/graphqlDataService'
import { siteConfig } from "../config/site"
import { DynamicCmsDataLocations } from '@/lib/cms/constants'

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

export async function getStaticProps({ params }) {

  const slugValue = params && params.slug ? params.slug : [];


  const navItems = (await getDyanmicCmsDataViaCmsSelector(DynamicCmsDataLocations.variants['navigation'])) || []
  const seoItems = (await getDyanmicCmsDataViaCmsSelector(DynamicCmsDataLocations.variants['seo'])) || []
  // const seoItems = (await getAltHomepageNavigation()) || []
  return {
    props: { data:{ navItems, seoItems } },
  }
}