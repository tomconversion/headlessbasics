import Head from "next/head"

import { Layout } from "@/ui-base/components/layout"
import ExampleCode from "@/ui-base/components/ui/code"
import FeatureSection from "@/ui-base/components/ui/sections/feature-section"
import StoriesSection, {
  StoriesSectionProps,
} from "@/ui-base/components/ui/sections/stories-section"

const title = "Feature Section"
const description = "Display a section with a headline and a list of features."
const developerNotes = ""

const data = {}

const exampleJson: StoriesSectionProps = {
  title: "Real Stories from Real Customers",
  description: "Get inspired by these stories.",
  cards: [
    {
      image_src: "/landify/static/playground_assets/logo-4.svg",
      image_alt: "HubSpot",
      image_src1: "/landify/static/playground_assets/quote-mark.svg",
      image_alt1: "quote",
      text: "To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.",
      text1: "Floyd Miles",
      text2: "Vice President, GoPro",
    },
    {
      image_src: "/landify/static/playground_assets/logo-1.svg",
      image_alt: "Airbnb",
      image_src1: "/landify/static/playground_assets/quote-mark.svg",
      image_alt1: "quote",
      text: "I used Landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
      text1: "Jane Cooper",
      text2: "CEO, Airbnb",
    },
    {
      image_src: "/landify/static/playground_assets/logo-2.svg",
      image_alt: "FedEx",
      image_src1: "/landify/static/playground_assets/quote-mark.svg",
      image_alt1: "quote",
      text: "Landify saved our time in designing my company page.",
      text1: "Kristin Watson",
      text2: "Co-Founder, FedEx",
    },
  ],
}

export default function IndexPage() {
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
              {JSON.stringify(exampleJson, null, 2)}
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
        <StoriesSection {...exampleJson} />
      </section>
    </>
  )
}
