import {
  StoriesCardProps,
  StoriesSectionProps,
} from "@/ui-base/components/ui/sections/stories-section"
import { variablesMultiSiteByIdentifier } from "@/ui-base/lib/cms/_base/tools/common/multiSite"
import { LanguageSite, PageIdentifier } from "@/ui-base/lib/cms/constants"
import { getLogger } from "@/ui-base/lib/services/logging/LogConfig"

const log = getLogger("headless.graphql.heartcore.stories.stories");

export function stories(pageIdentifier: PageIdentifier) {
  return `query HomepageComponentsBySlug($slug: String!) {
    homepage(url: $slug) {
      slug: url
      name
      children(where: { contentTypeAlias_ends_with: "dataFolder" }) {
        edges {
          node {
            __typename
            contentTypeAlias
            children(where: { contentTypeAlias_ends_with: "StoriesSection" }) {
              edges {
                node {
                  name
                  ... on StoriesSection {
                    __typename
                    title
                    description
                    cards {
                      ... on StoriesCard{
                        text
                        text1
                        text2
                        image{
                          media {
                            url
                            name
                          }
                        }
                        image1{
                          media {
                            url
                            name
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }`
}

export function variables(
  pageIdentifier: PageIdentifier,
  languageSite: LanguageSite
) {
  return variablesMultiSiteByIdentifier(pageIdentifier, languageSite)
}

export default function GetourClientQuery() {
  return stories
}

export function mapStoriesData(data: any): StoriesSectionProps {

  const stories = data.homepage.children.edges[0].node.children.edges

  const storiesSection = stories.find(
    (item: any) => item.node.__typename === "StoriesSection"
  )?.node

  log.debug("storiesSection", JSON.stringify(storiesSection, null, 2))


  const cards: StoriesCardProps[] = storiesSection?.cards?.map(
    (card: any) => ({
      text: card.text,
      text1: card.text1,
      text2: card.text2,
      image_src: card.image.media.url,
      image_alt: card.image.media.name,
      image_src1: card.image1.media.url,
      image_alt1: card.image1.media.name,
    })
  )
  return {
    title: storiesSection.title,
    description: storiesSection.description,
    cards,
  }
}
