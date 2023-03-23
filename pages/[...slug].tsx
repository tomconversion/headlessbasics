import { GetLanguageSiteByCode, GetMainSiteLanguage } from '@/ui-base/lib/cms/heartcore/tools/urlTools';
import { getLogger, log } from '@/ui-base/lib/services/logging/LogConfig';
import { collectDynamicPageData } from '@/ui-base/lib/services/pageDataProvider';
import { getAllPages } from '@/ui-base/lib/services/pageToSiteContextService';
import { collectAllRoutes } from '@/ui-base/lib/services/routeProviderService';
import { GetSite } from '@/ui-base/lib/services/siteContextService';

export default function AllPagesHandler({data}) {  
  const AllPages = getAllPages(data, GetSite().name);
  return <AllPages data={data}/>;
}

const log = getLogger("headless.pages.slug");

export async function getStaticProps({ params }) {
  
  let slugCleanedUp = params.slug.join('/');
  if(slugCleanedUp === 'favicon.ico') return { props: {  } }
  
  let languageSite;
  
  if(GetSite().siteSettings.languageSites.findIndex(x => slugCleanedUp.startsWith(x.countryCode)) > -1){
    languageSite = GetSite().siteSettings.languageSites.find(x => slugCleanedUp.startsWith(x.countryCode));
    slugCleanedUp = slugCleanedUp.replace(languageSite.homepageSlugPrefix, '/').replace(languageSite.countryCode, '');
  }else {
    languageSite = GetLanguageSiteByCode(GetMainSiteLanguage());
  } 

  log.debug('languageSite', languageSite, slugCleanedUp);

  const pageDataResult = await collectDynamicPageData(params, slugCleanedUp, languageSite);
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

  log.debug(`getStaticPaths ${GetMainSiteLanguage()} paths`, paths.length)

  return { paths, fallback: 'blocking' }
}