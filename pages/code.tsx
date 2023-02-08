
import Head from 'next/head'
import { Layout } from "@/components/layout"
import ExampleCode from '@/components/ui/code'
import { Html } from 'next/document';

const demoJson = [{}];
const title = "Code";
const description = "";

export default function IndexPage() {
  return (
    <Layout>
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
      <div className='w-full break-after-auto py-4'>Developer Notes: <ExampleCode>This component is simply a background component to render code. It uses the prismjs library.</ExampleCode></div>
        <div className='w-full break-after-auto py-4'>Sample JSON: <ExampleCode>{JSON.stringify(demoJson)}</ExampleCode></div>
        <div className='w-full break-after-auto py-4'>JSON Object Length: <ExampleCode>{JSON.stringify(demoJson.length)}</ExampleCode></div>
        <div className='w-full break-after-auto py-4'>
        <ExampleCode language='jsx'>
        {`
import React from "react";

function ExampleComponent() {
  return (
    <div>
      <h1>Example code</h1>
      <p>This is some example code</p>
    </div>
  );
}

export default ExampleComponent;
`}
        </ExampleCode>
        </div>
      </div>
    </>
  )
}



