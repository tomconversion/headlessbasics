import { GetFeatures, GetImageHero, GetMediaLogos, GetShowcaseNavItems } from "@/sites/showcase/lib/services/showcaseDataService";
import { Layout } from "@/ui-base/components/layout";
import Hero from "@/ui-base/components/ui/hero/Hero";
import FeatureSection from "@/ui-base/components/ui/sections/feature-section";
import MediaLogos from "@/ui-base/components/ui/sections/media-logos/MediaLogos";
import { GetSiteConfig } from "@/ui-base/lib/services/siteContextService";
import Head from "next/head";


export default function SeoPage({ data }) {

  if(!data) {
    data = { data : {}};
  }
  data.data.navItems = GetShowcaseNavItems();
  
  return (
    <Layout
      className={"flex w-full flex-col items-center"}
      data={data}
    >
      <Head>
        <title>{`${GetSiteConfig().name} | ${data?.seoItems?.seoTitle}`}</title>
        <meta
          name="Headless Basics by Conversion Digital | A front end headless start kit for sites, blogs, and ecommerce. Supporting multiple CMS and headless tools."
          content={`${GetSiteConfig().name} | ${data?.seoItems?.seoDescription}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={
        "flex min-h-screen w-full flex-col items-center overflow-hidden"
      }>

        <Hero
          className="min-h-[500px] bg-base-200"
          style={{
            backgroundImage:
              "url(" + GetImageHero() + ")",
          }}
        >
          <Hero.Overlay className="bg-white/60" />
          <Hero.Content className="text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">SEO Basics are included</h1>
              <p className="py-6">
                By seperating the GraphQL queries from the UI components, we can support multiple CMS's. A few smarts are needed to make this work, but it's not too hard.
              </p>
              {/* <Button color="primary">Know More</Button> */}
            </div>
          </Hero.Content>
        </Hero>

        <MediaLogos
          clients={GetMediaLogos()}
          className="max-w-screen-lg"
        />



        <FeatureSection data={GetFeatures()} />

        <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
          <h5 className="my-4 text-2xl font-semibold">Headless Basics Project Progress</h5>
          <span className="text-center"></span>
          <table className="table-compact table w-full">
              <thead>
                <tr>
                    <th className="flex items-center gap-2 normal-case">
                      <span>Feature</span>
                    </th>
                    <th className="normal-case">Category</th>
                    <th className="normal-case">Contentful</th>
                    <th className="normal-case">Kontent</th>
                    <th className="normal-case">Heartcore</th>
                    <th className="normal-case">Sitecore - XM Cloud</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <th className="font-normal">
                      <span className="font-mono lowercase">Robots.txt</span>
                    </th>
                    <td><span className="badge badge-sm badge-ghost w-20">Page</span>  </td>
                    <td><span className="badge badge-sm badge-success w-20">Complete</span></td>
                    <td><span className="badge badge-sm badge-success w-20">Complete</span></td>
                    <td><span className="badge badge-sm badge-success w-20">Complete</span></td>
                    <td><span className="badge badge-sm badge-ghost w-20">In Progress</span></td>
                </tr>
                <tr>
                    <th className="font-normal">
                      <span className="font-mono lowercase">Redirects</span>
                    </th>
                    <td><span className="badge badge-sm badge-ghost w-20">Feature</span>  </td>
                    <td><span className="badge badge-sm badge-success w-20">Complete</span></td>
                    <td><span className="badge badge-sm badge-success w-20">Complete</span></td>
                    <td><span className="badge badge-sm badge-success w-20">Complete</span></td>
                    <td><span className="badge badge-sm badge-ghost w-20">In Progress</span></td>
                </tr>
                <tr>
                    <th className="font-normal">
                      <span className="font-mono lowercase">Aliases</span>
                    </th>
                    <td><span className="badge badge-sm badge-ghost w-20">Feature</span>  </td>
                    <td><span className="badge badge-sm badge-success w-20">Complete</span></td>
                    <td><span className="badge badge-sm badge-success w-20">Complete</span></td>
                    <td><span className="badge badge-sm badge-success w-20">Complete</span></td>
                    <td><span className="badge badge-sm badge-ghost w-20">In Progress</span></td>
                </tr>
                <tr>
                    <th className="font-normal">
                      <span className="font-mono lowercase">SEO Meta Tags</span>
                    </th>
                    <td><span className="badge badge-sm badge-ghost w-20">Feature</span>  </td>
                    <td><span className="badge badge-sm badge-success w-20">Complete</span></td>
                    <td><span className="badge badge-sm badge-success w-20">Complete</span></td>
                    <td><span className="badge badge-sm badge-success w-20">Complete</span></td>
                    <td><span className="badge badge-sm badge-ghost w-20">In Progress</span></td>
                </tr>
                <tr>
                    <th className="font-normal">
                      <span className="font-mono lowercase">SEO - Canonical URLs</span>
                    </th>
                    <td><span className="badge badge-sm badge-ghost w-20">Feature</span>  </td>
                    <td><span className="badge badge-sm badge-ghost w-20">In Progress</span></td>
                    <td><span className="badge badge-sm badge-ghost w-20">In Progress</span></td>
                    <td><span className="badge badge-sm badge-ghost w-20">In Progress</span></td>
                    <td><span className="badge badge-sm badge-ghost w-20">In Progress</span></td>
                </tr>
                <tr>
                    <th className="font-normal">
                      <span className="font-mono lowercase">Grid Page Layout</span>
                    </th>
                    <td><span className="badge badge-sm badge-ghost w-20">Layout</span>  </td>
                    <td><span className="badge badge-sm badge-ghost w-20">NA</span></td>
                    <td><span className="badge badge-sm badge-ghost w-20">NA</span></td>
                    <td><span className="badge badge-sm badge-success w-20">Complete</span></td>
                    <td><span className="badge badge-sm badge-ghost w-20">Not started</span></td>
                </tr>
                <tr>
                    <th className="font-normal">
                      <span className="font-mono lowercase">Inline Editing</span>
                    </th>
                    <td><span className="badge badge-sm badge-ghost w-20">Feature</span>  </td>
                    <td><span className="badge badge-sm badge-ghost w-20">Not started</span></td>
                    <td><span className="badge badge-sm badge-ghost w-20">Not started</span></td>
                    <td><span className="badge badge-sm badge-ghost w-20">Not started</span></td>
                    <td><span className="badge badge-sm badge-ghost w-20">Not started</span></td>
                </tr>
                
              </tbody>
          </table>
        </section>

      </main>
    </Layout>
  )
}
