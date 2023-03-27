import { Layout } from "@/ui-base/components/layout"
import AlertDialogDemo from "@/ui-base/components/ui/demo/alert-dialog-demo";
import Head from "next/head"

export default function IndexPage() {
  var data = {};
  return (
    <Layout data={data}>
      <Head>
        <title>Next.js</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Alert Dialog <br className="hidden sm:inline" />
          </h1>
        </div>
        <div className="flex gap-4">
          <AlertDialogDemo/>
        </div>
      </section>
    </Layout>
  )
}
