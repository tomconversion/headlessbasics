
import Head from 'next/head'
import { Layout } from "@/components/layout"
import ExampleCode from '@/components/ui/code'
import CTASectionTwoColumn, { CtaTwoColumnVariants, CtaTwoColumnVariant } from '@/components/ui/sections/ctaSectionTwoColumn';


const title = "Two Column Section";
const description = "Displays CTA in a two column layout";
const developerNotes = "This is a CTA or promotion component. It uses Next/Image and has lazy loading turned on.";

const promotion1Description = "B&D know that behind your garage door are the things that matter to you most. The things that make your house a home. ​​Thats why we make the strongest and most secure, garage doors, shielding your home from the outside world. ​ Doors that don’t just close ​– they lock shut.";

const ctaJson = {
  "title": "Residential doors",
  "description": "Learn about B&D residential garage doors, from roller and sectional to the bespoke designer door range. Discover how to make your garage door safer with smart openers and accessories.",
  "image": "https://picsum.photos/id/1018/1900/600",
  "buttonText": "View Residential Door range",
  "buttonLink": "/garage-doors/residential/"
};

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
      <section className="container items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            {title} <br className="hidden sm:inline" /> 
          </h1>
          <h2>{description}</h2>
        </div>
      </section>
      <section className="container items-center gap-6 pt-6 pb-8 md:py-10">
          <div className="w-full divide-y space-y-4">
        <div className='w-full break-after-auto py-4'>Developer Notes: <ExampleCode language='text'>{developerNotes}</ExampleCode></div>
          <div className='w-full break-after-auto py-4'>Sample JSON: <ExampleCode language='json'>{JSON.stringify(ctaJson)}</ExampleCode></div>
        </div>
      </section>
      {renderComponent()}
    </Layout>
  )
}

const renderComponent = () => {
  return (
    <>      
            <section className="container items-center gap-6 pt-6 pb-8 md:py-10">
              <div className="flex max-w-[980px] flex-col items-start gap-2">
                <h2>Variation 1: 1/3 & 2/3</h2>
              </div>
            </section>

            <CTASectionTwoColumn 
            data={{
              title: ctaJson.title,
              description: ctaJson.description,
              image: ctaJson.image,
              buttonText: ctaJson.buttonText,
              buttonLink: ctaJson.buttonLink
            }} 
            variation={"half"}           
            />

            <section className="container items-center gap-6 pt-6 pb-8 md:py-10">
              <div className="flex max-w-[980px] flex-col items-start gap-2">
                <h2>Variation 2: 1/2 & 1/2</h2>
              </div>
            </section>

            <CTASectionTwoColumn 
            data={{
              title: ctaJson.title,
              description: ctaJson.description,
              image: 'https://picsum.photos/id/1015/1980/600',
              buttonText: ctaJson.buttonText,
              buttonLink: ctaJson.buttonLink
            }}
            variation={"twoThirds"}              
            />

          

    </>
  )
}



