import { GetLanguageSiteByCode, GetMainSiteLanguage } from '@/ui-base/lib/cms/heartcore/tools/urlTools';
import { buildPageData } from '@/ui-base/lib/services/graphqlDataService';
import dynamic from 'next/dynamic';
import { GetSite } from '@/ui-base/lib/services/siteContextService';
import fetch from 'isomorphic-unfetch';

interface Props {
  data?: any;
  indexPath: string;
}

// const Homepage = dynamic<Props>(
//   async () => {
//     const siteName = GetSite().name;
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getSiteIndexPage?siteName=${siteName}`);

//     if (res.ok) {
//       const { path } = await res.json();
//       return import(path).then((mod) => mod.IndexPage);
//     } else {
//       throw new Error(await res.text());
//     }
//   },
//   { ssr: true },
// );

const Homepage = dynamic<Props>(
  ({ indexPath }) => {
    return import(indexPath).then((mod) => mod.IndexPage);
  },
  { ssr: true },
);

export default function IndexPage({ data, indexPath }) {
  return <Homepage data={data} indexPath={indexPath} />;
}

export async function getServerSideProps({ req }) {
  const data = await buildPageData('home', false, GetLanguageSiteByCode(GetMainSiteLanguage()), { slug: '' });
  const siteName = GetSite().name;
  const indexPath = `../sites/${siteName}/pages/IndexPage`;

  return {
    props: {
      data,
      indexPath,
    },
  };
}
