import { buildPageData } from '@/ui-base/lib/services/graphqlDataService'
import { IndexPage as Homepage } from '../sites/landify/IndexPage'

export default function IndexPage({data}) {
    return <Homepage data={data}/>;
}

IndexPage.getInitialProps = async (ctx) => {
  const data = await buildPageData("home", {slug: "/"});  
  return { data };
}