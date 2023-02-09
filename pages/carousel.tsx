
import Head from 'next/head'
import { Layout } from "@/components/layout"
import ExampleCode from '@/components/ui/code'
import { Checkbox } from '@/components/ui/checkbox';
import Carousel from '@/components/ui/sections/carousel/carousel';
import SimpleSlider from '@/components/ui/sections/carousel/simpleSlider';

const items = [
  {
    src: 'https://picsum.photos/id/1018/800/600',
    alt: 'Image 1'
  },
  {
    src: 'https://picsum.photos/id/1015/800/600',
    alt: 'Image 2'
  },
  {
    src: 'https://picsum.photos/id/1019/800/600',
    alt: 'Image 3'
  }
];
const title = "Carousel";
const description = "This is a media display component";

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
        <div className="flex items-center justify-center max-w-screen">
          <div className="w-64 bg-blue-500 p-4">
            <p className="text-white text-center">This is a constrained div</p>
          </div>
        </div>
        <div className="flex items-center justify-center max-w-screen">
          {renderComponent()}
        </div>
      </section>
    </Layout>
  )
}

const renderComponent = () => {
  return (
    <>
      <SimpleSlider/>
    </>
  )
}



