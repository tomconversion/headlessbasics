
import Head from 'next/head'

import { Layout } from "@/ui-base/components/layout"
import { GlobalTailwindNavigationMenu } from '@/ui-base/components/ui/global-navigation';


const demoNav = [{"name":"Static","id":"2249abfe-5710-489e-bcbc-43223cad1427","level":2},{"name":"DyanmicGrid","id":"d40d46bb-2165-4f4e-bd65-78d7282c0ca1","level":2},{"name":"Static2","id":"0309a2ec-d20f-4304-b80e-94cfba4d09a5","level":2},{"name":"FlexExample","id":"63c5d7e3-74db-43d6-84ce-d71b48012d5f","level":2}];
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
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Global Navigation <br className="hidden sm:inline" /> 
          </h1>
          <h2>The burger menu on mobile will open and close the navigation</h2>
        </div>
        <div className="full-width">
          {renderNavigation()}
        </div>
      </section>
    </Layout>
  )
}






const renderNavigation = () => {
  return (
    <>
      {/* <div className='w-full'>{JSON.stringify(demoNav)}</div>
      <div className='w-full break-after-auto'>{JSON.stringify(demoNav.length)}</div> */}

      {/* <GlobalTailwindNavigationMenu menu={undefined}/> */}

    </>
  )
}



