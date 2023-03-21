import { StoriesCardProps, StoriesSectionProps } from "@/ui-base/components/ui/sections/stories-section"
import { PageIdentifier } from "@/ui-base/lib/cms/constants"

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
