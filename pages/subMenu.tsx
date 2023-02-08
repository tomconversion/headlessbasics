
import Head from 'next/head'
import Link from "next/link"

import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { json } from 'stream/consumers'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import NavigationMenuDemo from '@/components/ui/demo/subNavigationDemo'

const demoNav = [{"name":"Static","id":"2249abfe-5710-489e-bcbc-43223cad1427","level":2},{"name":"DyanmicGrid","id":"d40d46bb-2165-4f4e-bd65-78d7282c0ca1","level":2},{"name":"Static2","id":"0309a2ec-d20f-4304-b80e-94cfba4d09a5","level":2},{"name":"FlexExample","id":"63c5d7e3-74db-43d6-84ce-d71b48012d5f","level":2}];

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
            Sub Navigation <br className="hidden sm:inline" /> 
          </h1>
          <h2>This is not mobile reponsive to a burger menu</h2>
        </div>
        <div className="full-width">
          {renderNavigation()}
        </div>
      </section>
    </Layout>
  )
}


function RenderChilden(children: any) {

  return (
    <>
      {/* <div>{JSON.stringify(children)}</div> */}
      {/* <NavigationMenu className="NavigationMenuRoot">
      <NavigationMenuList className="NavigationMenuList">
        {children.map((item: any) => {
          return (
            <NavigationMenuItem key={item.id}>
              <NavigationMenuLink className="NavigationMenuLink" href="https://github.com/radix-ui">
                {item.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        }
        )}
        </NavigationMenuList>
      </NavigationMenu> */}
      <NavigationMenuDemo />
    </>
  )
}

const renderNavigation = () => {
  return (
    <>
      <div className='w-full'>{JSON.stringify(demoNav)}</div>
      <div className='w-full break-after-auto'>{JSON.stringify(demoNav.length)}</div>
      <hr></hr>
      <br></br>
      <br></br>
      <br></br>
      {RenderChilden(demoNav)}
    </>
  )
}



