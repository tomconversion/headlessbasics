export function GetShowcaseNavItems() {
    return [
        { "name": "Components", "id": "8d024a83-5e71-464b-8bbf-e56aea49ab10", "level": 2, "url": "/components/", "superAlias": "", "showInNavigation": true, "slug": "Warranty" }, 
        { "name": "CMSs", "id": "552d92d4-7d1a-4dad-838a-4acce8356c35", "level": 2, "url": "/components/showcase/cms/", "superAlias": "", "showInNavigation": true, "slug": "Architecture" }, 
        { "name": "SEO", "id": "d16cb62f-1611-47fe-9330-98e99ffcc8fd", "level": 2, "url": "/components/showcase/seo/", "superAlias": "", "showInNavigation": true, "slug": "Blog" }, 
        // { "name": "Pricing", "id": "e666c1e5-2089-4282-bd0b-6a2fbd39ab08", "level": 2, "url": "/pricing/", "superAlias": "", "showInNavigation": true, "slug": "Pricing" }, 
        // { "name": "About Us", "id": "4a7bb5ba-7ceb-44fe-b9f6-7049a3b05805", "level": 2, "url": "/about-us/", "superAlias": "", "showInNavigation": true, "slug": "About Us" }, 
        // { "name": "Contact Us", "id": "2d0383cd-b9c1-41f9-bf09-60bf104963ae", "level": 2, "url": "/contact-us/", "superAlias": "", "showInNavigation": false, "slug": "Contact Us" }, 
        // { "name": "Accessories", "id": "e0d32eb3-246b-4ecf-a08e-ff0098dc6efe", "level": 2, "url": "/accessories/", "superAlias": "", "showInNavigation": true, "slug": "Accessories" }, 
        // { "name": "Gate Openers", "id": "651e98ba-5271-4ed1-9781-a9e2f1e9356d", "level": 2, "url": "/gate-openers/", "superAlias": "", "showInNavigation": false, "slug": "Gate Openers" }
    ];
}

export function GetMediaLogos(){
    return [
        {"name":"Next.JS","logoUrl":"/showcase/nextjs.png"},
        {"name":"TailwindCSS","logoUrl":"/showcase/tailwind-css-logo-vector.png"},
        {"name":"React","logoUrl":"/showcase/react.jpg"},
        {"name":"Typescript","logoUrl":"/showcase/typescript.png"}
    ];
}

export function GetImageHero(){
  const images = [
    '/showcase/fashion/fashion1.jpg',
    '/showcase/fashion/fashion2.jpg',
    '/showcase/fashion/fashion3.jpg',
    '/showcase/fashion/fashion4.jpg',
    '/showcase/fashion/fashion5.jpg',
    '/showcase/fashion/fashion6.jpg',
    '/showcase/fashion/fashion7.jpg',
    '/showcase/fashion/fashion8.jpg'
  ];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}


export function GetFeatures(){
    const exampleJson = {
        headline: "Headless Features",
        description:
          "The basic are taken care of so you can concentrate on the complex bits.",
        cards: [
          {
            imageSrc: "/landify/static/playground_assets/02.svg",
            title: "Flexibility",
            description:
              "Avoid vendor lockin. Headless Basics seeks to abstract the data layer from the presentation layer. Want to switch CMS providers down the track? No problem.",
          },
          {
            imageSrc: "/landify/static/playground_assets/03.svg",
            title: "User friendly",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
          },
          {
            imageSrc: "/landify/static/playground_assets/04.svg",
            title: "Multiple layouts",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
          },
          {
            imageSrc: "/landify/static/playground_assets/05.svg",
            title: "Better components",
            description:
              "We aren't trying to re-invent the wheel. Our components are sourced from multiple libraries and based on TailwindCSS.",
          },
          {
            imageSrc: "/landify/static/playground_assets/06.svg",
            title: "Sub-Component based layouts",
            description:
              "Support for modelling your page data via Sub-Component and having them neatly placed on the page.",
          },
          {
            imageSrc: "/landify/static/playground_assets/01.svg",
            title: "Support for Grid based layouts",
            description:
              "Support for common CMS grad patterns such as Rows and Columns.",
          },
        ],
      }
    return exampleJson;
}

export function GetCTAData(){
  const promotions = [
    {
      image: "/showcase/components.jpg",
      title: "Component Library",
      description:
        "Over 50 components and component variations and growing. You can see them all in action in our live demo component library."
      ,
      buttonText: "See our components",
      buttonLink: "/components/",
      width: 450,
      height: 650
    },
    {
      image: "/showcase/cms.jpg",
      title: "3 Supported CMSs and growing.",
      description:
        "We have started out supporting 3 of the most popular CMSs. We are looking to add more in the future."
      ,
      buttonText: "Find out more",
      buttonLink: "/cms/",
      width: 450,
      height: 650
    },
    {
      image: "/showcase/seo.jpg",
      title: "SEO Basics",
      description:
        "We have built in support for the most common SEO features such as meta tags, sitemap generation, robots.txt, redirects and aliases."
      ,
      buttonText: "Find out more",
      buttonLink: "/seo",
      width: 450,
      height: 650
    }
  ];
  return promotions;
}


export function GetToggleList(){
  const exampleJson = [{
      feature: "sitemap.xml",
      isDone: true,      
    },
    {
      feature: "Server Side Redirect",
      isDone: true,      
    },
    {
      feature: "sitemap.xml",
      isDone: true,      
    }
  ]
  return exampleJson;
}