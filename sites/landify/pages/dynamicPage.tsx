import { COMPONENT_DYNAMIC_CONTENT } from '@/ui-base/lib/cms/constants';
import { renderDynamicContent } from '@/ui-base/lib/services/dynamicContentRendererService';
import Head from 'next/head'

import { Layout } from "../../../ui-base/components/layout"
import { siteConfig } from "../config/site"


export function DynamicPage({data}) {

  let dynamicPageContent = (<></>);
  let dynamicCmsData = {};
  if(data?.data?.pageComponentData && data?.data?.pageComponentData.hasOwnProperty(COMPONENT_DYNAMIC_CONTENT) && data?.data?.pageComponentData[COMPONENT_DYNAMIC_CONTENT]){
    dynamicCmsData = data?.data?.pageComponentData[COMPONENT_DYNAMIC_CONTENT];
    dynamicPageContent = (<>{renderDynamicContent(data?.data?.pageVariant, dynamicCmsData)}</>);
  }

  return (
    <Layout className={"w-full flex flex-col items-center"} data={data} siteConfig={siteConfig}>
      <Head>
        <title>{`${siteConfig.name} | ${data?.seoItems?.seoTitle}`}</title>
        <meta
          name="description"
          content={`${siteConfig.name} | ${data?.seoItems?.seoDescription}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 id="oneTwo">{data?.data?.pageVariant}</h1>
       {JSON.stringify(dynamicCmsData)}
       Dynamic Page Template
       {dynamicPageContent}

    </Layout>
  )
}

