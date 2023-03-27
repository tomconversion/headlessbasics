
import Head from 'next/head'
import { Layout } from "@/ui-base/components/layout"
import CollapsibleDemo from '@/ui-base/components/ui/demo/collapsibleDemo';
import ExampleCode from '@/ui-base/components/ui/code';

const demoJson = [{}];
const title = "Collapsible";
const description = "Click on the icon on the right hand side to open and close.";

export default function IndexPage() {
  var data = {};
  return (
    <Layout data={data}>
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
      <div className="w-full divide-y space-y-4">
      <div className='w-full break-after-auto py-4'>Developer Notes: <ExampleCode language='text'>...</ExampleCode></div>
        {/* <div className='w-full break-after-auto py-4'>Sample JSON: <ExampleCode language='text'>{JSON.stringify(demoJson)}</ExampleCode></div> */}
        {/* <div className='w-full break-after-auto py-4'>JSON Object Length: <ExampleCode language='text'>{JSON.stringify(demoJson.length)}</ExampleCode></div> */}
        <div className='w-full break-after-auto py-4'>
          <CollapsibleDemo/>
        </div>
      </div>
    </>
  )
}