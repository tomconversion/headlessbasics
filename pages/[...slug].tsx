import { Dynamic } from '@/sites/landify/pages/dynamic';
import { buildPageData, getPageTypeBySlug } from '@/ui-base/lib/services/graphqlDataService'
import { replaceChar } from '@/ui-base/lib/util/utils';

export default function DynamicPage({data}) {  
    return <Dynamic data={data}/>;
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  let firstSlug = slug[0];  
  firstSlug = replaceChar(firstSlug, '/', '');

  if(firstSlug === 'favicon.ico') return { props: {  } }
  // console.log("getServerSideProps > firstSlug", firstSlug);
  const pageType = await getPageTypeBySlug(firstSlug); 
  const data = await buildPageData(pageType, {slug: firstSlug}); 

  return { props: { data: data } }
}

// DynamicPage.getInitialProps = async (context) => {
//   return {  };
// }