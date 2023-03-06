import { DynamicPage as DynamicPageOnSite } from '@/sites/landify/pages/dynamicPage';
import { SUPER_ALIAS } from '@/ui-base/lib/cms/constants';
import { buildPageData, collectSitemapNavigationStructure, getPageTypeBySlug } from '@/ui-base/lib/services/graphqlDataService'
import { collectDynamicPageData } from '@/ui-base/lib/services/pageDataProvider';
import { collectAllRoutes } from '@/ui-base/lib/services/routeProviderService';

export default function DynamicPage({data}) {  
  return <DynamicPageOnSite data={data}/>;
}

export async function getStaticProps({ params }) {
  
  let slugCleanedUp = params.slug.join('/');
  if(slugCleanedUp === 'favicon.ico') return { props: {  } }
  
  const pageDataResult = await collectDynamicPageData(params, slugCleanedUp);
  return {
    props: {
      data: pageDataResult.pageData,
      slug: pageDataResult.selectedSlug
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 100, // In seconds
  }
}


export async function getStaticPaths() {

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  const paths = await collectAllRoutes();
  return { paths, fallback: 'blocking' }
}