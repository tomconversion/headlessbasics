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
  },
}

export default nextConfig
