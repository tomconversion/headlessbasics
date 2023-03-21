import { StoriesCardProps, StoriesSectionProps } from "@/ui-base/components/ui/sections/stories-section"
import { PageIdentifier } from "@/ui-base/lib/cms/constants"


export function stories(pageIdentifier: PageIdentifier) {
  return `query MyQuery {
    homepage(codename: "homepage") {
      bodyItems {
        totalCount
        items {
          ... on StoriesSection{
            __typename
            title
            description
            cards {
              items {
                text
                text1
                text2
                image {
                  url
                  description
                }
                image1{
                  url
                  description
                }
              }
            }
          }
        }
      }
    }
  }`
}

export function variables(pageIdentifier: PageIdentifier) {
  // const result = { slug: pageIdentifier.backEndSlug }
  const result = { slug: "homepage" }
  // console.log("ourclient VARIABLE --", result)
  return result
}

export default function GetourClientQuery() {
  return stories
}

// {
//   homepage: {
//     bodyItems: {
//       totalCount: 4,
//       items: [
//         {},
//         {},
//         {},
//         {
//           __typename: "StoriesSection",
//           title: "Real Stories from Real Customers",
//           description: "Get inspired by these stories.",
//           cards: {
//             items: [
//               {
//                 text: "To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.",
//                 text1: "Floyd Miles",
//                 text2: "Vice President, GoPro",
//                 image: {
//                   url: "https://assets-au-01.kc-usercontent.com:443/42bb4688-b828-0269-2832-a1f8434e1cee/f870c36a-2168-4f5e-a45b-fd6086b0c74f/Hubspot.svg",
//                   description: "HubSpot"
//                 },
//                 image1: {
//                   url: "https://assets-au-01.kc-usercontent.com:443/42bb4688-b828-0269-2832-a1f8434e1cee/94f60643-f8b6-4d00-9fe9-4b0ffb2a4a55/quote-mark.svg",
//                   description: "quote"
//                 }
//               },
//               {
//                 text: "Landify saved our time in designing my company page.",
//                 text1: "Kristin Watson",
//                 text2: "Co-Founder, FedEx",
//                 image: {
//                   url: "https://assets-au-01.kc-usercontent.com:443/42bb4688-b828-0269-2832-a1f8434e1cee/25e5178d-c3d7-4382-8e55-38bedf4f4152/FedEx.svg",
//                   description: "FedEX"
//                 },
//                 image1: {
//                   url: "https://assets-au-01.kc-usercontent.com:443/42bb4688-b828-0269-2832-a1f8434e1cee/94f60643-f8b6-4d00-9fe9-4b0ffb2a4a55/quote-mark.svg",
//                   description: "quote"
//                 }
//               },
//               {
//                 text: "I used Landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
//                 text1: "Jane Cooper",
//                 text2: "CEO, Airbnb",
//                 image: {
//                   url: "https://assets-au-01.kc-usercontent.com:443/42bb4688-b828-0269-2832-a1f8434e1cee/3f915d48-2ca7-4953-a684-e085b757b2b6/Airbnb.svg",
//                   description: "Airbnb"
//                 },
//                 image1: {
//                   url: "https://assets-au-01.kc-usercontent.com:443/42bb4688-b828-0269-2832-a1f8434e1cee/94f60643-f8b6-4d00-9fe9-4b0ffb2a4a55/quote-mark.svg",
//                   description: "quote"
//                 }
//               }
//             ]
//           }
//         }
//       ]
//     }
//   }
// }

export function mapStoriesData(data: any): StoriesSectionProps {
  const stories = data.homepage.bodyItems.items
  console.log("stories", stories);
  
  const storiesSection = stories.find(
    (item: any) => item.__typename === "StoriesSection"
  )

  const cards: StoriesCardProps[] = storiesSection?.cards?.items?.map(
    (card: any) => ({
      text: card.text,
      text1: card.text1,
      text2: card.text2,
      image_src: card.image.url,
      image_alt: card.image.description,
      image_src1: card.image1.url,
      image_alt1: card.image1.description,
    })
  )
  return {
    title: storiesSection.title,
    description: storiesSection.description,
    cards,
  }
}
