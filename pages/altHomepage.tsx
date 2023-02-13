import Container from '../components/umbraco/container'
import Intro from '../components/umbraco/intro'
import Layout from '../components/umbraco/layout'
import Head from 'next/head'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '../components/ui/navigation-menu'

import { getAltHomepageNavigation } from '@/lib/services/graphqlNavigationService'
import { CmsVariants } from '@/lib/cms/constants'

export default function Index({ navItems, preview }) {
  const variant = process.env.NEXT_PUBLIC_CMS_VARIANT;
  const cmsName = CmsVariants.variants[variant].cmsName;
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {cmsName} </title>
        </Head>
        <Container>
          <Intro />
          {renderNavigation(navItems)}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const navItems = (await getAltHomepageNavigation()) || []
  return {
    props: { navItems, preview },
  }
}



function RenderChilden(children: any) {

  return (
    <>
      {/* <div>{JSON.stringify(children)}</div> */}
      <NavigationMenu className="NavigationMenuRoot">
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
      </NavigationMenu>
    </>
  )
}

const renderNavigation = (navItems) => {


  return (
    <>
      <div>{JSON.stringify(navItems)}</div>
      {/* <div>{JSON.stringify(navItems)}</div>
      <div>{JSON.stringify(navItems.length)}</div> */}
      {navItems && RenderChilden(navItems)}
    </>
  )
}



