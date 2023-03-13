import { buildPageData } from '@/ui-base/lib/services/graphqlDataService'
import { IndexPage as Homepage } from '../sites/landify/pages/Index'

export default function IndexPage({ data }) {
  return <Homepage data={data} />
}

export async function getStaticProps({ params }) {

  const data = await buildPageData("home", false, {slug: ""}); 
  
  return {
    props: {
      data
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 100, // In seconds
  }
}
