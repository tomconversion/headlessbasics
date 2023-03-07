/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "picsum.photos",
      "media.umbraco.io",
      "images.unsplash.com",
      "daisyui.com",
      "images.ctfassets.net",
      "assets-au-01.kc-usercontent.com",
    ],
  },
  experimental: {
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: { subsets: ["latin"] },
      },
    ],
  }, redirects : async () => {
       return await collectRedirectMap();
  }
}

export default nextConfig

async function collectRedirectMap(){
  console.log("next.config.mjs sourcing redirects");
  const redirects = await fetchRedirects();
  console.log("next.config.mjs found the following redirects > ", redirects.allRedirect.edges);
  const redirectMap = [];
  redirects.allRedirect.edges.forEach((redirect) => {
      if(redirect?.node?.source && redirect?.node?.destination?.url)
      {
        let destination = redirect?.node?.destination?.url;
        if(destination){
          destination = destination.replace("/homepage", "");
        }
        if(redirect?.node?.destination?.superAlias && redirect?.node?.destination?.superAlias !== ""){
          destination = redirect?.node?.destination?.superAlias;
        }       
        console.log("next.config.mjs redirecting > ", redirect.node.source, " to > ", destination, " isPermanent > ", redirect.node.isPermanent);
        redirectMap.push({
          source: redirect.node.source,
          destination: destination,
          permanent: redirect.node.isPermanent,
        });
    }
  });
  return redirectMap;
}

async function fetchRedirects() {
  const query = `
  {
    allRedirect{
        edges{
            node{
                source
                destination {
                    url
                    level
                    name
                    ... on Homepage {
                      superAlias
                    }
                    ... on DynamicPage {
                      superAlias
                    }
                    ... on Landing {
                      superAlias
                    }
                }
                name
                isPermanent
            }
        }
    }    
  } 
  `;

  const cmsVariant = process.env.NEXT_PUBLIC_CMS_VARIANT;



  const headers = {
        'Content-Type': 'application/json'
  };

    if(cmsVariant === 'kontent') {
        const endpoint = `${process.env.KONTENT_GRAPHQL_ENDPOINT}/${process.env.KONTENT_PROJECT_ID}`;
        return await fetchAPI(query, endpoint, headers);
    } else if(cmsVariant === 'contentful') {
        const endpoint = `${process.env.CONTENTFUL_GRAPHQL_ENDPOINT}/${process.env.CONTENTFUL_DELIVERY_API_URL}/${process.env.CONTENTFUL_SPACE_ID}`;
        
        headers["Authorization"] = `Bearer ${process.env.CONTENTFUL_DELIVERY_API_KEY}`;

        return await fetchAPI(query, endpoint, headers);
    } else if(cmsVariant === 'heartcore') {
        const endpoint = `${process.env.UMBRACO_GRAPHQL_ENDPOINT}`;

        headers["Api-Key"] = process.env.UMBRACO_API_KEY;
        headers["Umb-Project-Alias"] = process.env.UMBRACO_PROJECT_ALIAS;

        return await fetchAPI(query, endpoint, headers);
    }
 
  const data = await response.json();
  return data.data.allRedirect.edges.map((x) => x.node);
}

export async function fetchAPI(
  query,
  endpoint,
  headers = {}
) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      query,
    }),
  })
  const json = await res.json()

  if (json.errors) {
    console.error(json.errors)
    throw new Error("fetchAPI in graphqlDataService - Failed to fetch API")
  }

  if (json.data !== undefined && json.data !== null) {
    return json.data
  } else {
    return json
  }
}