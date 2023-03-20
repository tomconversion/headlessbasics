import { FeaturesProps } from "@/ui-base/components/ui/sections/feature-section"
import { LanguageSite, PageIdentifier } from "../../../constants"
import { variablesNavigationBase } from "../../../_base/graphqlSnippets/navigation/navigation";

export function features(pageIdentifier: PageIdentifier) {
  return `query HomepageComponentsBySlug($slug: String!) {
    homepage(url: $slug) {
      slug: url
      name
      children(where: { contentTypeAlias_ends_with: "dataFolder" }) {
        edges {
          node {
            __typename
            contentTypeAlias
            children(where: { contentTypeAlias_ends_with: "FeatureComponent" }) {
              edges {
                node {
                  name
                  ... on FeatureComponent {
                    __typename
                    headline
                    description
                    cards {
                      ... on FeatureCard{
                        description
                        title
                        image{
                          url
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
  
  `
}

export function variables(pageIdentifier: PageIdentifier, languageSite:LanguageSite)
{
  return variablesNavigationBase(pageIdentifier, languageSite); 
};

export default function GetFeatureQuery() {
  return features
}

export function mapFeaturesData(data: any): FeaturesProps {
  const dataFolderEdges = data?.homepage?.children?.edges?.find(
    (edge) => edge.node.__typename === "DataFolder"
  )?.node

  const featuresNode = dataFolderEdges?.children?.edges?.find(
    (edge) => edge.node.__typename === "FeatureComponent"
  )?.node

  if (!featuresNode) {
    return {}
  }

  const cards = featuresNode.cards.map((card) => ({
    title: card.title,
    description: card.description,
    imageSrc: card.image.url,
  }))

  return {
    data: {
      headline: featuresNode.headline,
      description: featuresNode.description,
      cards,
    },
  }
}
