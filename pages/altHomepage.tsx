import Container from '../components/umbraco/container'
import MoreStories from '../components/umbraco/more-stories'
import HeroPost from '../components/umbraco/hero-post'
import Intro from '../components/umbraco/intro'
import Layout from '../components/umbraco/layout'
import { getAltHomepageNavigation } from '../lib/umbraco-heartcore'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import { json } from 'stream/consumers'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '../components/ui/navigation-menu'
import NavigationMenuDemo from '../components/ui/demo/navigationdemo'

export default function Index({ navItems, preview }) {

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
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

// function RenderChild(child: any): any {
//   if (!child.level || child.level < 2) {
//     return null;
//   }
//   return (
//     <div key={child.id}>
//       <h2>{child.name}</h2>
//       {child.children && RenderGrandChild(child.children)}
//     </div>
//   );
// }

function RenderGrandChild(grandChildren: any): any {
  return grandChildren.map((grandChild: any) => {
    return (
      <div key={grandChild.id}>
        <h3>{grandChild.name}</h3>
        {grandChild.children && RenderGreatGrandChild(grandChild.children)}
      </div>
    );
  });
}

function RenderGreatGrandChild(greatGrandChildren: any): any {
  return greatGrandChildren.map((greatGrandChild: any) => {
    return (
      <div key={greatGrandChild.id}>
        <h4>{greatGrandChild.name}</h4>
      </div>
    );
  });
}

// function renderNavigation(navItems: any): any {
//   return navItems.map((item: any) => {
//     return (
//       <div key={item.id}>
//         {item.children && Array.isArray(item.children.items) && RenderChild(item.children.items)}
//       </div>
//     );
//   });
// }

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
      {/* <div>{JSON.stringify(navItems)}</div>
      <div>{JSON.stringify(navItems.length)}</div> */}
      {navItems.map((item: any) => {
        // <hr>{JSON.stringify(item)}</hr>
        return (
          <>           
            {item.children && Array.isArray(item.children.items) && RenderChilden(item.children.items)}
          </>
        );
      }
      )
      }
    </>
  )
}


// return (
//   { item.children && Array.isArray(item.children.items) && RenderChilden(item.children.items) }
// )



