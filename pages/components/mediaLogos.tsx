import Head from "next/head"

import { Layout } from "@/ui-base/components/layout"
import ExampleCode from "@/ui-base/components/ui/code"
import CTASectionTwoColumn from "@/ui-base/components/ui/sections/ctaSectionTwoColumn"
import MediaLogos from "@/ui-base/components/ui/sections/media-logos/MediaLogos"

const title = "Media Logos"
const description = "Display clients logo in a grid."
const developerNotes = ""

const data = {}

const exampleJson: {
  name: string
  logoUrl: string
}[] = [
  {
    name: "Airbnb",
    logoUrl:
      "https://media.umbraco.io/danny-conversion-digital-sandbox-heartcore/zfll00wy/logo-1.svg",
  },
  {
    name: "HubSpot",
    logoUrl:
      "https://media.umbraco.io/danny-conversion-digital-sandbox-heartcore/cnrdfkfr/logo-4.svg",
  },
  {
    name: "Google",
    logoUrl:
      "https://media.umbraco.io/danny-conversion-digital-sandbox-heartcore/ukfcvqw1/logo-3.svg",
  },
  {
    name: "Microsoft",
    logoUrl:
      "https://media.umbraco.io/danny-conversion-digital-sandbox-heartcore/k33jnswg/logo-5.svg",
  },
  {
    name: "Walmart",
    logoUrl:
      "https://media.umbraco.io/danny-conversion-digital-sandbox-heartcore/rw3hhccg/logo-6.svg",
  },
]

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
        <MediaLogos clients={exampleJson} />
      </section>
    </>
  )
}
