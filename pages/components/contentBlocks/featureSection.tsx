import Head from "next/head"

import { Layout } from "@/ui-base/components/layout"
import ExampleCode from "@/ui-base/components/ui/code"
import FeatureSection from "@/ui-base/components/ui/sections/feature-section"
import { GetSiteConfig } from "@/ui-base/config/site"

const title = "Feature Section"
const description = "Display a section with a headline and a list of features."
const developerNotes = ""

const data = {}

const exampleJson = {
  headline: "Tailor-made features",
  description:
    "Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.",
  cards: [
    {
      imageSrc: "/landify/static/playground_assets/02.svg",
      title: "Flexibility",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    },
    {
      imageSrc: "/landify/static/playground_assets/03.svg",
      title: "User friendly",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    },
    {
      imageSrc: "/landify/static/playground_assets/04.svg",
      title: "Multiple layouts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    },
    {
      imageSrc: "/landify/static/playground_assets/05.svg",
      title: "Better components",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    },
    {
      imageSrc: "/landify/static/playground_assets/06.svg",
      title: "Well organized",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    },
    {
      imageSrc: "/landify/static/playground_assets/01.svg",
      title: "Robust workflow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    },
  ],
}

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
      <section className="container items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            {title} <br className="hidden sm:inline" />
          </h1>
          <h2>{description}</h2>
        </div>
      </section>
      <section className="container items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="w-full space-y-4 divide-y">
          <div className="w-full break-after-auto py-4">
            Developer Notes:{" "}
            <ExampleCode language="text">{developerNotes}</ExampleCode>
          </div>
          <div className="w-full break-after-auto py-4">
            Sample JSON:{" "}
            <ExampleCode language="json">
              {JSON.stringify(exampleJson)}
            </ExampleCode>
          </div>
        </div>
      </section>
      {renderComponent()}
    </Layout>
  )
}

const renderComponent = () => {
  return (
    <>
      <section className="container flex flex-col justify-start gap-6">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h2>Variation 1</h2>
        </div>
        <FeatureSection data={exampleJson} />
      </section>
    </>
  )
}
