# Headless Basics
Headless Basics - Next.JS Starter Kit that supports component based page structures across multiple Content Management Systems. Data seperation is maintained between GraphQL and presentation.

## Showcase Site
[Check out our showcase site]{https://showcase-steel.vercel.app/)

## Installation
To install and run the application, follow these steps:

1. Clone the repository using git clone `https://github.com/tomconversion/headlessbasics.git`
2. Navigate to the project directory using `cd headlessbasics`
3. Install pnpm globally if you haven't already done so using `npm install -g pnpm`
4. Install the dependencies using `pnpm install`
5. Start the development server using `pnpm run dev`
6. Open your browser and go to `http://localhost:3000` to access the API documentation

## Aims
1. Provide a site starter kit that uses a component library that is not tightly coupled to the GraphQL API layer.
2. Provide a site starter kit that has all the SEO features baked in from the start.
3. Provide a site starter kit that can work across multiple CMSs. Limit [Vendor Lock-In](https://itnext.io/avoid-headless-cms-vendor-lock-in-migrating-from-contentful-to-kontent-a95c579b0266)
4. Provide a content model that can work across multiple CMSs. <sub>This is a big aim, its early days, so this could well prove too difficult. </sub>

## Supported CMSs
1. Umbraco Heartcore  (Started - Look in the code)
2. Contentful         (Started - Look in the code)
3. Kentico Kontent    (Started - Look in the code)
4. Sitecore XM Cloud  (Coming Soon )

## Contributing
If you'd like to contribute to Headless Basics, feel free to submit a pull request with your changes. Please make sure to follow the existing code style and include tests for any new functionality.

## License
Headless Basics is licensed under the MIT License. See LICENSE for more information.
