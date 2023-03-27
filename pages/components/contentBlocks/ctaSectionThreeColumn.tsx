
import Head from 'next/head'
import { Layout } from "@/ui-base/components/layout"
import ExampleCode from '@/ui-base/components/ui/code'
import CTASectionTwoColumn from '@/ui-base/components/ui/sections/ctaSectionTwoColumn';
import CTASectionThreeColumn from '@/ui-base/components/ui/sections/ctaSectionThreeColumn';
import ImageSectionThreeColumn from '@/ui-base/components/ui/sections/imageSectionThreeColumn';
import DynamicThreeColumn, { DynamicColumn } from '@/ui-base/components/ui/sections/dynamicThreeColumn';
import ImageWithOverlay from '@/ui-base/components/ui/media/ImageWithOverlay';
import ButtonDemo from '@/ui-base/components/ui/demo/buttonDemo';
import SelectDemo from '@/ui-base/components/ui/demo/selectDemo';
import { Button } from '@/ui-base/components/ui/button';

const title = "Three Column Section";
const description = "Displays CTA in a three column layout";
const developerNotes = "This is a CTA or promotion component. It uses Next/Image and has lazy loading turned on.";

const promotion1Description = "B&D know that behind your garage door are the things that matter to you most. The things that make your house a home. ​​Thats why we make the strongest and most secure, garage doors, shielding your home from the outside world. ​ Doors that don’t just close ​– they lock shut.";
const promotions = [
  {
    image: "https://picsum.photos/id/1018/1980/600",
    title: "Keeping your home and family safe.",
    description:
      "B&D know that behind your garage door are the things that matter to you most. The things that make your house a home. ​​That’s why we make the strongest and most secure, garage doors, shielding your home from the outside world. ​ Doors that don’t just close ​– they lock shut."
    ,
    buttonText: "View Residential Door range",
    buttonLink: "/garage-doors/residential/",
    width: 450,
    height: 450
  },
  {
    image: "https://picsum.photos/id/1015/1980/600",
    title: "65+ years of Australian innovation.",
    description:
      "B&D invented the roller door in 1956 and we’ve been innovating it ever since. B&D garage doors and automatic openers are designed and tested here in Australia, using premium, custom-designed components which is why we’re Australia’s original and most trusted garage door brand."
    ,
    buttonText: "View Residential Door range",
    buttonLink: "/garage-doors/residential/",
    width: 450,
    height: 450
  },
  {
    image: "https://picsum.photos/id/1019/1980/600",
    title: "Market leading 10-year warranty.",
    description:
      "Tough, reliable and secure. Designed and tested to work in unison, B&D doors and openers will keep your home secure for many years to come. In fact we’re so confident, we back our garage doors and openers with a market leading 10-year warranty."
    ,
    buttonText: "View Residential Door range",
    buttonLink: "/garage-doors/residential/",
    width: 450,
    height: 450
  }
];

const images = [
  {
    image: "https://picsum.photos/id/1018/450/450",
    title: "Keeping your home and family safe.",
    description:
      "B&D know that behind your garage door are the things that matter to you most. The things that make your house a home. ​​That’s why we make the strongest and most secure, garage doors, shielding your home from the outside world. ​ Doors that don’t just close ​– they lock shut."
    ,
    link: "/garage-doors/residential/",
    width: 450,
    height: 450
  },
  {
    image: "https://picsum.photos/id/1015/450/450",
    title: "65+ years of Australian innovation.",
    description:
      "B&D invented the roller door in 1956 and we’ve been innovating it ever since. B&D garage doors and automatic openers are designed and tested here in Australia, using premium, custom-designed components which is why we’re Australia’s original and most trusted garage door brand."
    ,
    link: "/garage-doors/residential/",
    width: 450,
    height: 450
  },
  {
    image: "https://picsum.photos/id/1019/450/450",
    title: "Market leading 10-year warranty.",
    description:
      "Tough, reliable and secure. Designed and tested to work in unison, B&D doors and openers will keep your home secure for many years to come. In fact we’re so confident, we back our garage doors and openers with a market leading 10-year warranty."
    ,
    link: "/garage-doors/residential/",
    width: 450,
    height: 450
  }
];
var data = {};
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
        <div className="w-full divide-y space-y-4">
          <div className='w-full break-after-auto py-4'>Developer Notes: <ExampleCode language='text'>{developerNotes}</ExampleCode></div>
          <div className='w-full break-after-auto py-4'>Sample JSON: <ExampleCode language='json'>{JSON.stringify(promotions)}</ExampleCode></div>
        </div>
      </section>
      {renderComponent()}
    </Layout>
  )
}

const renderComponent = () => {

  let thisImage = images[0];

  return (
    <>
      <section className="container items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h2>Variation 1: Three CTA</h2>
        </div>
      </section>

      <CTASectionThreeColumn
        data={promotions}
      />

      <section className="container items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex flex-col items-start gap-2">
          <h2>Variation 2: Three Images (With Hover overlay)</h2>
        </div>
      </section>

      <ImageSectionThreeColumn
        images={images}
        variation={'captionHover'}
      />

      <section className="container items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex flex-col items-start gap-2">
          <h2>Variation 2: Three Images - With Title</h2>
        </div>
      </section>

      <ImageSectionThreeColumn
        images={images}
        variation={'captionAlways'}
      />

      <section className="container items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex flex-col items-start gap-2">
          <h2>Variation 3: Dynamic Three Column</h2>
        </div>
      </section>

      <DynamicThreeColumn>
         <DynamicColumn> <ImageWithOverlay image={thisImage} variation={'captionAlways'} /></DynamicColumn>
         <DynamicColumn><Button variant={'destructive'}>destructive</Button></DynamicColumn>
         <DynamicColumn><SelectDemo/></DynamicColumn>
      </DynamicThreeColumn>


    </>
  )
}



