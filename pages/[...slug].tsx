import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../components/umbraco/container'
import PostBody from '../components/umbraco/post-body'
import MoreStories from '../components/umbraco/more-stories'
import Header from '../components/umbraco/header'
import PostHeader from '../components/umbraco/post-header'
import SectionSeparator from '../components/umbraco/section-separator'
import Layout from '../components/umbraco/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../lib/umbraco-heartcore'
import PostTitle from '../components/umbraco/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                {<meta property="og:image" content={post.ogImage.url} />}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data.post,
      morePosts: data.morePosts || [],
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  const posts = await getAllPostsWithSlug()
  return {
    paths: posts.map(({ slug }) => slug),
    fallback: true,
  }
}
