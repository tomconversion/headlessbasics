import dynamic from 'next/dynamic';
import React from 'react';
import { getLogger } from './logging/LogConfig';

const log = getLogger("headless.services.pageToSiteContextService");

export interface PageDataProps {
  data?: any;
}

export function getDynamicHomepages(HomepageProps: PageDataProps, siteName: string) {
  let DynamicIndexPage = null;
  if (siteName === 'landify') {
    DynamicIndexPage = dynamic<PageDataProps>(() => import('../../../sites/landify/pages/Homepage').then((module) => module.Homepage), { ssr: true });
  } else if (siteName === 'multisite') {
    DynamicIndexPage = dynamic<PageDataProps>(() => import('../../../sites/multisite/pages/Homepage').then((module) => module.Homepage), { ssr: true });
  } else if (siteName === 'showcase') {
    DynamicIndexPage = dynamic<PageDataProps>(() => import('../../../sites/showcase/pages/Homepage').then((module) => module.Homepage), { ssr: true });
  }

  const DynamicHomepage = React.memo((props: PageDataProps) => {
    if (DynamicIndexPage) {
      return <DynamicIndexPage data={props.data} />;
    }
    return null;
  });

  return DynamicHomepage;
}


export function getAllPages(HomepageProps: PageDataProps, siteName: string) {
  let DynamicIndexPage = null;
  if (siteName === 'landify') {
    DynamicIndexPage = dynamic<PageDataProps>(() => import('../../../sites/landify/pages/AllPages').then((module) => module.AllPages), { ssr: true });
  } else if (siteName === 'multisite') {
    DynamicIndexPage = dynamic<PageDataProps>(() => import('../../../sites/multisite/pages/AllPages').then((module) => module.AllPages), { ssr: true });
  }

  const AllPages = React.memo((props: PageDataProps) => {
    if (DynamicIndexPage) {
      return <DynamicIndexPage data={props.data} />;
    }
    return null;
  });

  return AllPages;
}