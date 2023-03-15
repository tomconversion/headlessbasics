//pages/sitemap.xml.js

import { collectRobotsTxtData, collectSitemapNavigationStructure } from "@/ui-base/lib/services/graphqlDataService";

function generateRobotsTxt(data) {
  console.log("generateRobotsTxt ", data);
    return `${data}`;
  }
  

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const data = await collectRobotsTxtData();  

  // We generate the XML sitemap with the posts data
  const sitemap = generateRobotsTxt(data);

  res.setHeader('Content-Type', 'text/plain');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;


