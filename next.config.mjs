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

  const cmsVariant = process.env.NEXT_PUBLIC_CMS_VARIANT;
  let redirectMap = [];

  if(cmsVariant === 'contentful') {
    redirectMap = collectContentfulRedirectMap(redirects);
  }else if(cmsVariant === 'kontent') {

  }else if(cmsVariant === 'heartcore') {
    redirectMap = collectUmbracoRedirectMap(redirects);
  }
  

  return redirectMap;
}

async function fetchRedirects() {

  const query = getQuery();

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

function getQuery(){
  let query = `
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

  if(cmsVariant === 'kontent') {
    query = `
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
  } else if(cmsVariant === 'contentful') {
    query = `
      query{
        redirectCollection{
            items{
                isPermanent
                source
                destination{
                    __typename
                    ... on Page{
                        slug
                        parent{
                            ... on Page{
                                slug  
                                parent{
                                    ... on Page{
                                        slug                               
                                    }
                                }                             
                            }
                        }                                  
                    }
                }
            }
        }
    }
    `;
  }
 return query;
}

function collectUmbracoRedirectMap(redirects){
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

function collectContentfulRedirectMap(redirects) {
  const redirectMap = [];
  redirects.redirectCollection.items.forEach((redirect) => {
    if (redirect?.source && redirect?.destination?.slug) {
      let destination = redirect?.destination?.slug;
      
      // check if destination slug starts with '/'
      if (destination.charAt(0) !== '/') {
        let parentSlug = redirect?.destination?.parent;
        let currentParent = redirect?.destination?.parent;

        // add the final parent slug to the front of destination slug
        destination = `${parentSlug.slug}/${destination}`;

        // loop through parent levels until we find one that starts with '/'
        while (currentParent?.parent && currentParent?.parent?.slug.charAt(0) !== '/') {
          currentParent = currentParent?.parent;
          destination = `${currentParent.slug}/${destination}`;   
        }
      }

      console.log("next.config.mjs redirecting > ", redirect.source, " to > ", destination, " isPermanent > ", redirect.isPermanent);
      redirectMap.push({
        source: redirect.source,
        destination: destination,
        permanent: redirect.isPermanent,
      });
    }
  });
  return redirectMap;
}
