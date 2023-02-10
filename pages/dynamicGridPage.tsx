import Container from '../components/umbraco/container'
import Intro from '../components/umbraco/intro'
import Layout from '../components/umbraco/layout'
import Head from 'next/head'
import Flex from '@/lib/cms/heartcore/umbraco-heartcore-grid'
import { getGridPage1 } from '@/lib/cms/heartcore/umbraco-heartcore'


export default function Index({ navItems, preview }) {

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example</title>
        </Head>
        <Container>
          <Intro />
          {renderGridItems(navItems)}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const navItems = (await getGridPage1()) || []
  return {
    props: { navItems, preview },
  }
}

function renderGrid(contentMain: any) {
  return (
    <>
      <div>{JSON.stringify(contentMain)}</div>
      <Flex name={contentMain.name} sections={contentMain.sections}></Flex>
    </>
  )
}

const renderGridItems = (navItems) => {
  return (
    <>
      <div>{JSON.stringify(navItems)}</div>
      <div>{JSON.stringify(navItems.length)}</div>
      {navItems.map((item: any) => {

        // <hr>{JSON.stringify(item)}</hr>
        return (
          <>           
            {renderGrid(item.contentMain)}
          </>
        );
      }
      )
      }
    </>
  )
}




