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


export function mapStoriesData(data: any): StoriesSectionProps {
  const stories = data.homepage.bodyItems.items
  // console.log("stories", stories);
  
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
