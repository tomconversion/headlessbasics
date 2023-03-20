import { FeaturesProps } from "@/ui-base/components/ui/sections/feature-section"
import { LanguageSite, PageIdentifier } from "../../../constants"

export function features(pageIdentifier: PageIdentifier) {
  return `
  query MyQuery {
    homepage(codename: "homepage") {
      bodyItems {
        totalCount
        items {
          ... on FeaturesSection {
            __typename
            title
            subtitle {
              html
            }
            features {
              items {
                title
                content {
                  html
                }
                image {
                  items {
                    height
                    name
                    url
                    width
                  }
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

export function variables(pageIdentifier: PageIdentifier, languageSite:LanguageSite) {
  // const result = { slug: pageIdentifier.backEndSlug }
  const result = { slug: "homepage" }
  // console.log("Feature VARIABLE --", result)
  return result
}

export default function GetFeatureQuery() {
  return features
}

export function mapFeaturesData(data: any, pageIdentifier:PageIdentifier, languageSite:LanguageSite): FeaturesProps {
  console.log("data", JSON.stringify(data, null, 2))
  const section = data.homepage.bodyItems.items.find(
    (item: any) => item.__typename === "FeaturesSection"
  )
  if (!section) {
    return { data: { headline: "", description: "", cards: [] } }
  }

  return {
    data: {
      headline: section.title,
      description: section.subtitle.html,
      cards: section.features.items.map((feature: any) => ({
        imageSrc: feature.image.items[0].url,
        title: feature.title,
        description: feature.content.html,
        width: feature.image.items[0].width,
        height: feature.image.items[0].height,
      })),
    },
  }
}
