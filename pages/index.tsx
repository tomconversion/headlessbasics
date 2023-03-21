import { GetLanguageSiteByCode, GetMainSiteLanguage } from '@/ui-base/lib/cms/heartcore/tools/urlTools';
import { buildPageData } from '@/ui-base/lib/services/graphqlDataService';
import { GetSite } from '@/ui-base/lib/services/siteContextService';
import React from 'react';
import { getDynamicHomepages } from '@/ui-base/lib/services/pageToSiteContextService';

export default function IndexPage({ data }) {
  const DynamicHomepage = getDynamicHomepages(data, GetSite().name);

  return <DynamicHomepage data={data} />;
}

export async function getServerSideProps({ req }) {
  const data = await buildPageData('home', false, GetLanguageSiteByCode(GetMainSiteLanguage()), { slug: '' });

  return {
    props: {
      data,
    },
  };
}
