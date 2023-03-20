import { GetLanguageSiteByCode, GetMainSiteLanguage } from '@/ui-base/lib/cms/heartcore/tools/urlTools';
import { buildPageData } from '@/ui-base/lib/services/graphqlDataService'
// import { IndexPage as Homepage } from '../sites/multisite/pages/Index'
import dynamic from 'next/dynamic';
import { GetSite } from '@/ui-base/lib/services/siteContextService';

interface Props {
  data?: any
}

const Homepage = dynamic<Props>(
  () => {
    const name = `../sites/${GetSite().name}/pages/IndexPage`
    return import(name).then((mod) => mod.IndexPage);
  },
  { ssr: true }
);

export default function IndexPage({ data }) {
  return <Homepage data={data} />
}

export async function getStaticProps({ params }) {

  const data = await buildPageData("home", false, GetLanguageSiteByCode(GetMainSiteLanguage()), {slug: ""}); 
  
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
