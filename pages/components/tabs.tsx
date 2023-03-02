
import Head from 'next/head'
import { Layout } from "@/ui-base/components/layout"
import ExampleCode from '@/ui-base/components/ui/code'
import { Tabs } from '@/ui-base/components/ui/tabs';
import TabsDemo from '@/ui-base/components/ui/demo/tabsDemo';
import { GetSiteConfig } from '@/ui-base/config/site';

// Use the following variable to control the technical template contents
const demoJson = [{}];
const title = "Tabs";
const description = "This is a navigation component.";
var data = {};
export default function IndexPage() {
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
            {title} <br className="hidden sm:inline" /> 
          </h1>
          <h2>{description}</h2>
        </div>
        <div className="full-width">
          {renderComponent()}
        </div>
      </section>
    </Layout>
  )
}

const renderComponent = () => {
  return (
    <>
      <div className="w-full space-y-4">
      <div className='w-full break-after-auto py-4'>Developer Notes: <ExampleCode language='text'>...</ExampleCode></div>
        {/* <div className='w-full break-after-auto py-4'>Sample JSON: <ExampleCode language='text'>{JSON.stringify(demoJson)}</ExampleCode></div> */}
        {/* <div className='w-full break-after-auto py-4'>JSON Object Length: <ExampleCode language='text'>{JSON.stringify(demoJson.length)}</ExampleCode></div> */}
        <div className='w-full demoBackground'>
          <div><TabsDemo/></div>
        </div>
      </div>
    </>
  )
}