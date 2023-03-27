import Breadcrumbs from '@/ui-base/components/ui/breadcrumbs/Breadcrumbs';
import { SUBCOMPONENT_CONTENT, COMPONENT_GRID_CONTENT } from '@/ui-base/lib/cms/constants';
import { renderGridComponentContent, renderSubComponentContent } from '@/ui-base/lib/services/contentRendererService';
import { GetSiteConfig } from '@/ui-base/lib/services/siteContextService';
import Head from 'next/head'

import { Layout } from "../../../ui-base/components/layout"


export function AllPages({ data }) {

  let subComponentContent = (<></>);
  let subComponentCmsData = {};
  if(data?.data?.pageComponentData && data?.data?.pageComponentData.hasOwnProperty(SUBCOMPONENT_CONTENT) && data?.data?.pageComponentData[SUBCOMPONENT_CONTENT]){
    subComponentCmsData = data?.data?.pageComponentData[SUBCOMPONENT_CONTENT];
    subComponentContent = (<>{renderSubComponentContent(data?.data?.pageVariant, subComponentCmsData)}</>);
  }

  let gridPageContent = (<></>);
  let gridCmsData = {};
  if(data?.data?.pageComponentData && data?.data?.pageComponentData.hasOwnProperty(COMPONENT_GRID_CONTENT) && data?.data?.pageComponentData[COMPONENT_GRID_CONTENT]){
    gridCmsData = data?.data?.pageComponentData[COMPONENT_GRID_CONTENT];
    gridPageContent = (<>{renderGridComponentContent(data?.data?.pageVariant, gridCmsData)}</>);
  }

  return (
    <Layout className={"flex w-full flex-col items-center"} data={data}>
      <Head>
        <title>{`${GetSiteConfig().name} | ${data?.seoItems?.seoTitle}`}</title>
        <meta
          name="description"
          content={`${GetSiteConfig().name} | ${data?.seoItems?.seoDescription}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <h1 id="oneTwo">Page Template: {data?.data?.pageVariant}</h1>
        <div className='w-full'>
          <Breadcrumbs data={data?.data?.breadcrumbItems} />
        </div>
        {/* {JSON.stringify(dynamicCmsData)} */}       
        {subComponentContent}
        {gridPageContent}
      </div>
    </Layout>
  )
}

