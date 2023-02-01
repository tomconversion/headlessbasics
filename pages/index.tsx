import Container from '../components/umbraco/container'
import MoreStories from '../components/umbraco/more-stories'
import HeroPost from '../components/umbraco/hero-post'
import Intro from '../components/umbraco/intro'
import Layout from '../components/umbraco/layout'
import { getAllPostsForHome } from '../lib/umbraco-heartcore'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ posts, preview }) {
  const heroPost = posts[0]
  const morePosts = posts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPostsForHome(preview)) || []
  return {
    props: { posts, preview },
  }
}
