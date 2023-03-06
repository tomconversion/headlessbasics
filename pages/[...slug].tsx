import { DynamicPage as DynamicPageOnSite } from '@/sites/landify/pages/dynamicPage';
import { buildPageData, collectSitemapNavigationStructure, getPageTypeBySlug } from '@/ui-base/lib/services/graphqlDataService'

export default function DynamicPage({data}) {  
    return <DynamicPageOnSite data={data}/>;
}

export async function getStaticProps({ params }) {

  const slugCleanedUp = params.slug.join('/');
  const pageType = await getPageTypeBySlug(params.url); 
  console.log("slugCleanedUp", slugCleanedUp, params.url);
  const data = await buildPageData(pageType, {slug: params.url}); 

  return {
    props: {
      data,
      slug: params.slug
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
      let parts = page.superAlias.split('/');   
      parts = parts.filter((x) => x != '');
      paths.push({
        params: {slug: parts, url: page.url },
      });
    }else {
      let parts = page.url.split('/');    
      parts = parts.filter((x) => x != '');
      paths.push({
         params: {slug: parts, url: page.url },
      });
    }
  });  
  
  // (
    
    
  //   return {
  //   params: {slug: page.url.split('/') },
  // }))

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' }
}

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { slug: ['warranty'] } }, { params: { slug: ['/contact-us'] } }],
//     fallback: false, // can also be true or 'blocking'
//   }
// }
