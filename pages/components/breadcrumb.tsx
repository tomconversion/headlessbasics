import Head from "next/head"

import { Layout } from "@/ui-base/components/layout"
import ExampleCode from "@/ui-base/components/ui/code"
import BreadcrumbDemo from "@/ui-base/components/ui/demo/breadcrumbdemo"

const demoJson = {
  links: [
    {
      href: "#home",
      icon: "HomeIcon",
      text: "Home",
    },
    {
      href: "#docs",
      icon: "FileIcon",
      text: "Documents",
    },
    {
      href: "#docs/add",
      icon: "AddFileIcon",
      text: "Add Document",
    },
  ],
  iconObject: {
    HomeIcon: "<HomeIcon className='mr-2 h-4 w-4 stroke-current'/>",
    FileIcon: "<svg className='mr-2 h-4 w-4 stroke-current'>...</svg>",
    AddFileIcon: "<>...</>",
  },
}

const title = "Breadcrumb"
const description = ""

export default function BreadcrumbPage() {
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
        <div className="full-width">{renderComponent()}</div>
      </section>
    </Layout>
  )
}

const renderComponent = () => {
  return (
    <>
      <div className="w-full space-y-4 divide-y">
        <div className="w-full break-after-auto py-4">
          Developer Notes: <ExampleCode language="text">...</ExampleCode>
        </div>
        <div className="w-full break-after-auto py-4">
          Sample JSON:{" "}
          <ExampleCode language="text">
            {JSON.stringify(demoJson, null, 2)}
          </ExampleCode>
        </div>
        <div className="w-full break-after-auto py-4">
          JSON Object Length:{" "}
          <ExampleCode language="text">
            {JSON.stringify(Object.keys(demoJson).length)}
          </ExampleCode>
        </div>
        <div className="w-full break-after-auto py-4">
          <BreadcrumbDemo />
        </div>
      </div>
    </>
  )
}
