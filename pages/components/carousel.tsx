
import Head from 'next/head'
import { Layout } from "@/ui-base/components/layout"
import ExampleCode from '@/ui-base/components/ui/code'
import Carousel from '@/ui-base/components/ui/sections/carousel/carousel';

const items = [
  {
    src: 'https://picsum.photos/id/1018/1980/600',
    alt: 'Image 1'
  },
  {
    src: 'https://picsum.photos/id/1015/1980/600',
    alt: 'Image 2'
  },
  {
    src: 'https://picsum.photos/id/1019/1980/600',
    alt: 'Image 3'
  }
];
const title = "Carousel";
const description = "This is a media display component";

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
      <section className="container items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            {title} <br className="hidden sm:inline" /> 
          </h1>
          <h2>{description}</h2>
        </div>
        
        {renderComponent()}
      </section>
    </Layout>
  )
}

const renderComponent = () => {
  return (
    <>
      
      <div className="w-full divide-y space-y-4">
      <div className='w-full break-after-auto py-4'>Developer Notes: <ExampleCode language='text'>...</ExampleCode></div>
        <div className='w-full break-after-auto py-4'>Sample JSON: <ExampleCode language='text'>{JSON.stringify(items)}</ExampleCode></div>
        {/* <div className='w-full break-after-auto py-4'>JSON Object Length: <ExampleCode language='text'>{JSON.stringify(items.length)}</ExampleCode></div> */}
        <div className='w-full break-after-auto py-4'>
        <Carousel items={items}/>
        </div>
      </div>

    </>
  )
}



