import { FeaturesProps } from "@/ui-base/components/ui/sections/feature-section"
import { LanguageSite, PageIdentifier } from "@/ui-base/lib/cms/constants"
import { variablesMultiSiteByIdentifier } from "@/ui-base/lib/cms/_base/tools/common/multiSite"


export function features(pageIdentifier: PageIdentifier) {
  return `query GetPageBySlug($slug: String!) {
      ${pageIdentifier.cmsType}(where: { slug: $slug }, limit: 1) {
        items {
          componentsCollection {
            items {
              ... on Features {
                __typename
                internalName
                headline
                description
                cardsCollection{
                  items {
                    title
                    description
                    url
                    width
                    height
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
  return result
}

export default function GetourClientQuery() {
  return features
}

export function mapFeaturesData(contentfulData: any): FeaturesProps {
  const features =
    contentfulData?.pageCollection?.items[0]?.componentsCollection?.items.find(
      (item: any) => item.__typename === "Features"
    )

  const cards =
    features?.cardsCollection?.items?.map((card: any) => ({
      imageSrc: card?.url ?? "",
      title: card?.title ?? "",
      description: card?.description ?? "",
      width: card?.width ?? undefined,
      height: card?.height ?? undefined,
    })) ?? []

  return {
    data: {
      headline: features?.headline ?? "",
      description: features?.description ?? "",
      cards,
    },
  }
}
