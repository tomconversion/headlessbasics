import { DynamicPage as DynamicPageOnSite } from '@/sites/landify/pages/dynamicPage';
import { SUPER_ALIAS } from '@/ui-base/lib/cms/constants';
import { buildPageData, collectSitemapNavigationStructure, getPageTypeBySlug } from '@/ui-base/lib/services/graphqlDataService'

export default function DynamicPage({data}) {  
  return <DynamicPageOnSite data={data}/>;
}

export async function getStaticProps({ params }) {
  
  let slugCleanedUp = params.slug.join('/');
  if(slugCleanedUp === 'favicon.ico') return { props: {  } }
  let selectedSlug = slugCleanedUp;

  const sitemapStructure = await collectSitemapNavigationStructure();
  const match = sitemapStructure.find(
    (page) => page.superAlias === "/" + slugCleanedUp
  );

  if(typeof(match) !== 'undefined'){ // We have a super alias match
    selectedSlug = match.url;
  }

  const pageType = await getPageTypeBySlug(selectedSlug);
  const data = await buildPageData(pageType, {slug: selectedSlug}); 
  //const data = {};
  return {
    props: {
      data,
      slug: selectedSlug
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 100, // In seconds
  }
}


export async function getStaticPaths() {
  
  const data = await collectSitemapNavigationStructure();  

  // Get the paths we want to pre-render based on posts

  let paths = [];

  data.map((page) => {
    if(page.superAlias && page.superAlias != '')
    {
      // page.superAlias = SUPER_ALIAS + page.superAlias;
      let parts = page.superAlias.split('/');   
      parts = parts.filter((x) => x != '');
      paths.push({
        params: {slug: parts },
      });
    }else {
      let parts = page.url.split('/');    
      parts = parts.filter((x) => x != '');
      paths.push({
         params: {slug: parts },
      });
    }
  });  
  
  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' }
}