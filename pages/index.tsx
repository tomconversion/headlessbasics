import Head from 'next/head'

import { Layout } from "@/components/layout"

import Home from '@/components/ui/landify/views/home'

export default function IndexPage() {
  return (
    <Layout className={"w-full flex flex-col items-center"}>
      <Head>
        <title>Next.js</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home className={"w-full min-h-screen flex flex-col items-center overflow-hidden"} />
    </Layout>
  )
}
