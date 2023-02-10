import { fetchAPI } from "@/lib/services/graphqlDataService"
import { fetchAPIGatewayWrapper } from "../cmsDataQueryGateway"


export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPIGatewayWrapper(
    `
    query PostBySlug($slug: String!) {
      post(url: $slug, preview: true) {
        slug:url
      }
    }`,
    {
      preview: true,
      variables: {
        slug,
      },
    }
  )
  return data.post
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPIGatewayWrapper(`
    {
      allPost {
        edges {
          node {
            slug:url
          }
        }
      }
    }
  `)
  return data.allPost.edges.map((x) => x.node)
}

export async function getGridPage1() {
  const data = await fetchAPIGatewayWrapper(`
  {
    allStaticPage1{
          edges{
            node {
              name
              id
              contentMain
            }
          }
      }
  }
  `)
  return data.allStaticPage1.edges.map((x) => x.node)
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPIGatewayWrapper(
    `
    query ($preview: Boolean) {
      allPost(first: 20, orderBy: [date_DESC], preview: $preview) {
        edges {
          node {
            title:name
            slug:url
            excerpt
            date
            coverImage {
              url(width: 2000, height: 1000, cropMode: CROP, upscale: true)
            }
            author {
              ...on Author{
                name
                picture {
                  url(width: 100, height: 100, cropMode: CROP, upscale: true)
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      preview,
      variables: {
        preview,
      },
    }
  )
  return data.allPost.edges.map((e) => e.node)
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPIGatewayWrapper(
    `
    query PostBySlug($slug: String!, $preview: Boolean!) {
      post(url: $slug, preview: $preview) {
        title:name
        slug:url
        content:bodyText
        date
        ogImage: coverImage {
            url(width: 2000, height: 1000, cropMode: CROP, upscale: true)
        }
        coverImage {
            url(width: 2000, height: 1000, cropMode: CROP, upscale: true)
        }
        author {
          ...on Author {
            name
            picture {
              url(width: 100, height: 100, cropMode: CROP, upscale: true)
            }
          }
        }
      }
      morePosts: allPost(first: 2, where: { NOT: { url: $slug } }, orderBy: [date_DESC], preview: $preview) {
        edges {
          node {
            title:name
            slug:url
            excerpt
            date
            coverImage {
              url(width: 2000, height: 1000, cropMode: CROP, upscale: true)
            }
            author {
              ...on Author {
                name
                picture {
                  url(width: 100, height: 100, cropMode: CROP, upscale: true)
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      preview,
      variables: {
        preview,
        slug: `/${slug.join('/')}/`,
      },
    }
  )
  return {
    post: data.post,
    morePosts: data.morePosts.edges.map((e) => e.node),
  }
}
