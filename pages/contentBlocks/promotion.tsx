
import Head from 'next/head'
import { Layout } from "@/components/layout"
import ExampleCode from '@/components/ui/code'
import { Checkbox } from '@/components/ui/checkbox';
import Carousel from '@/components/ui/sections/carousel/carousel';
import SimpleSlider from '@/components/ui/sections/carousel/simpleSlider';
import { Promotion, PromotionsTable } from '@/components/ui/sections/promotion/promotionBlock';


const title = "CTA / Promotion Block";
const description = "This component display and image, Description and body text";
const developerNotes = "This is a CTA or promotion component. It uses Next/Image and has lazy loading turned on.";

const promotion1Description = "B&D know that behind your garage door are the things that matter to you most. The things that make your house a home. ​​Thats why we make the strongest and most secure, garage doors, shielding your home from the outside world. ​ Doors that don’t just close ​– they lock shut.";

const promotions = [
  {
  imgSrc: "https://picsum.photos/id/1018/1980/600",
  title: "Keeping your home and family safe.",
  description:
  "B&D know that behind your garage door are the things that matter to you most. The things that make your house a home. ​​That’s why we make the strongest and most secure, garage doors, shielding your home from the outside world. ​ Doors that don’t just close ​– they lock shut."
  },
  {
  imgSrc: "https://picsum.photos/id/1015/1980/600",
  title: "65+ years of Australian innovation.",
  description:
  "B&D invented the roller door in 1956 and we’ve been innovating it ever since. B&D garage doors and automatic openers are designed and tested here in Australia, using premium, custom-designed components which is why we’re Australia’s original and most trusted garage door brand."
  },
  {
  imgSrc: "https://picsum.photos/id/1019/1980/600",
  title: "Market leading 10-year warranty.",
  description:
  "Tough, reliable and secure. Designed and tested to work in unison, B&D doors and openers will keep your home secure for many years to come. In fact we’re so confident, we back our garage doors and openers with a market leading 10-year warranty."
  }
  ];

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
        
        {renderComponent()}
      </section>
    </Layout>
  )
}

const renderComponent = () => {
  return (
    <>
      
      <div className="w-full divide-y space-y-4">
      <div className='w-full break-after-auto py-4'>Developer Notes: <ExampleCode language='text'>{developerNotes}</ExampleCode></div>
        <div className='w-full break-after-auto py-4'>Sample JSON: <ExampleCode language='text'>{JSON.stringify(promotions)}</ExampleCode></div>
        {/* <div className='w-full break-after-auto py-4'>JSON Object Length: <ExampleCode language='text'>{JSON.stringify(items.length)}</ExampleCode></div> */}
        <div>
            <Promotion title='Garage Doors' description={promotion1Description} imgSrc='https://picsum.photos/id/1018/1980/600'/>
            <Promotion title='Garage Doors' description={promotion1Description} imgSrc='https://picsum.photos/id/1018/1980/600' buttonText={'Find out more'}/>
        </div>
        <div className='w-full break-after-auto py-4'>
            <PromotionsTable promotions={promotions} />
        </div>
      </div>

    </>
  )
}



