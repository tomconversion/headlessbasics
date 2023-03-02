import { buildPageData, getPageTypeBySlug } from '@/ui-base/lib/services/graphqlDataService'
import { IndexPage as Homepage } from '../sites/landify/IndexPage'
import { useRouter } from 'next/router';

export default function DynamicPage({data}) {
    return <Homepage data={data}/>;
}

DynamicPage.getInitialProps = async ({ query: { slug } }) => {
//   const router = useRouter();
//   const { slug } = router.query;
  const firstSlug = slug[0];

  const pageType = await getPageTypeBySlug(firstSlug);
  const data = await buildPageData(pageType, {slug: firstSlug}); 
  
  return { data };
}