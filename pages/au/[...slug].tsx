import { DynamicPage as DynamicPageOnSite } from '@/sites/ata-multisite/pages/dynamicPage';
import { GetLanguageSiteByCode } from '@/ui-base/lib/cms/heartcore/tools/urlTools';
import { buildPageData, collectSitemapNavigationStructure, getPageTypeBySlug } from '@/ui-base/lib/services/graphqlDataService'
import { collectDynamicPageData } from '@/ui-base/lib/services/pageDataProvider';
import { collectAllRoutes } from '@/ui-base/lib/services/routeProviderService';

export default function DynamicPage({data}) {  
  return <DynamicPageOnSite data={data}/>;
}

export async function getStaticProps({ params }) {
  
  let slugCleanedUp = params.slug.join('/');
  if(slugCleanedUp === 'favicon.ico') return { props: {  } }
  
  const pageDataResult = await collectDynamicPageData(params, slugCleanedUp, GetLanguageSiteByCode("au"));
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
  const paths = await collectAllRoutes(GetLanguageSiteByCode("au"));

  console.log("getStaticPaths AU paths", paths.length);

  // Remove the first path as it conflicts with the homepage
  paths.shift();

  // Filter our the /au from the params array for each path
  paths.forEach((path, index) => {
    paths[index].params.slug.shift();
    //console.log("paths[index].params.slug", paths[index].params.slug, "index", index, "path", path);
  });
      
  return { paths, fallback: 'blocking' }
}