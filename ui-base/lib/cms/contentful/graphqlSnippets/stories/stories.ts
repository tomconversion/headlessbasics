import {
  StoriesCardProps,
  StoriesSectionProps,
} from "@/ui-base/components/ui/sections/stories-section"
import { PageIdentifier } from "../../../constants"

export function stories(pageIdentifier: PageIdentifier) {
  return `query GetPageBySlug($slug: String!) {
      ${pageIdentifier.cmsType}(where: { slug: $slug }, limit: 1) {
        items {
          componentsCollection {
            items {
              ... on ComponentStories {
                __typename
                internalName
                title
                description
                cardsCollection {
                  items {
                    image {
                      url
                      title
                    }
                    image1 {
                      url
                      title
                    }
                    text
                    text1
                    text2
                  }
                }
              }
            }
          }
        }
      }
    }
  `
}

export function variables(pageIdentifier: PageIdentifier) {
  // const result = { slug: pageIdentifier.backEndSlug }
  const result = { slug: "/" }
  // console.log("ourclient VARIABLE --", result)
  return result
}

export default function GetourClientQuery() {
  return stories
}

// {
//   pageCollection: {
//     items: [
//       {
//         componentsCollection: {
//           items: [
//             {},
//             {},
//             {},
//             {
//               __typename: "ComponentStories",
//               internalName: "Stories Section - 1",
//               title: "Real Stories from Real Customers",
//               description: "Get inspired by these stories.",
//               cardsCollection: {
//                 items: [
//                   {
//                     image: {
//                       url: "https://images.ctfassets.net/3j9y7hnidlox/1gFzIL2XXSv5x1S0C5OlLv/bda8df2be25714e705fbb48e05e026d7/Hubspot.svg",
//                       title: "Hubspot",
//                     },
//                     image1: {
//                       url: "https://images.ctfassets.net/3j9y7hnidlox/1rcwyojjQLGYm2i1YubXWN/dddd561486a23703df149ac0e3d7349e/quote-mark.svg",
//                       title: "quote",
//                     },
//                     text: "To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.",
//                     text1: "Floyd Miles",
//                     text2: "Vice President, GoPro",
//                   },
//                   {
//                     image: {
//                       url: "https://images.ctfassets.net/3j9y7hnidlox/26P7kwZYjm4NvVgiTY4dMa/a576af60edd4b8d6965e8a3eadbebb47/Airbnb.svg",
//                       title: "Airbnb",
//                     },
//                     image1: {
//                       url: "https://images.ctfassets.net/3j9y7hnidlox/1rcwyojjQLGYm2i1YubXWN/dddd561486a23703df149ac0e3d7349e/quote-mark.svg",
//                       title: "quote",
//                     },
//                     text: "I used Landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
//                     text1: "Jane Cooper",
//                     text2: "CEO, Airbnb",
//                   },
//                   {
//                     image: {
//                       url: "https://images.ctfassets.net/3j9y7hnidlox/73C9qiIpJPLf85zjJ4cXv0/f670f233662f5583b0845e0963668d26/FedEx.svg",
//                       title: "FedEx",
//                     },
//                     image1: {
//                       url: "https://images.ctfassets.net/3j9y7hnidlox/1rcwyojjQLGYm2i1YubXWN/dddd561486a23703df149ac0e3d7349e/quote-mark.svg",
//                       title: "quote",
//                     },
//                     text: "Landify saved our time in designing my company page.",
//                     text1: "Kristin Watson",
//                     text2: "Co-Founder, FedEx",
//                   },
//                 ],
//               },
//             },
//           ],
//         },
//       },
//     ]
//   }
// }

export function mapStoriesData(contentfulData: any): StoriesSectionProps {
  const stories =
    contentfulData.pageCollection.items[0].componentsCollection.items
  const storiesSection = stories.find(
    (item: any) => item.__typename === "ComponentStories"
  )
  const cards: StoriesCardProps[] = storiesSection.cardsCollection.items.map(
    (item: any) => {
      return {
        image_src: item.image.url,
        image_alt: item.image.title,
        image_src1: item.image1.url,
        image_alt1: item.image1.title,
        text: item.text,
        text1: item.text1,
        text2: item.text2,
      }
    }
  )
  return {
    title: storiesSection.title,
    description: storiesSection.description,
    cards,
  }
}
