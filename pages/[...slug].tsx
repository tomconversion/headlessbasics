import { GetLanguageSiteByCode, GetMainSiteLanguage } from '@/ui-base/lib/cms/heartcore/tools/urlTools';
import { collectDynamicPageData } from '@/ui-base/lib/services/pageDataProvider';
import { getAllPages } from '@/ui-base/lib/services/pageToSiteContextService';
import { collectAllRoutes } from '@/ui-base/lib/services/routeProviderService';
import { GetSite } from '@/ui-base/lib/services/siteContextService';

export default function AllPagesHandler({data}) {  
  const AllPages = getAllPages(data, GetSite().name);
  return <AllPages data={data}/>;
}

export async function getStaticProps({ params }) {
  
  let slugCleanedUp = params.slug.join('/');
  if(slugCleanedUp === 'favicon.ico') return { props: {  } }
  
  const pageDataResult = await collectDynamicPageData(params, slugCleanedUp, GetLanguageSiteByCode(GetMainSiteLanguage()));
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
  const paths = await collectAllRoutes(GetLanguageSiteByCode(GetMainSiteLanguage()));

  console.log(`getStaticPaths ${GetMainSiteLanguage()} paths`, paths.length)

  return { paths, fallback: 'blocking' }
}