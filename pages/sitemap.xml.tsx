//pages/sitemap.xml.js

import { collectSitemapNavigationStructure } from "@/ui-base/lib/services/graphqlDataService";

function generateSiteMap(data) {

    data = data.filter((x) =>typeof(x.showInSitemap) !== 'undefined' && x.showInSitemap === true);

    return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       ${data
         .map(({ id, slug, updateDate, url }) => {  
          const date = new Date(updateDate);  
           return `
         <url>
             <loc>${`${process.env.MAIN_DOMAIN}${url}`}</loc>
             <lastmod>${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,'0')}-${date.getDate().toString().padStart(2,'0')}</lastmod>
             <changefreq>always</changefreq>
             <priority>0.5</priority>
         </url>
       `;
         })
         .join('')}
     </urlset>
   `;
  }
  

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const data = await collectSitemapNavigationStructure();  

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(data);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;