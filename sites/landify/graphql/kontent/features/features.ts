import { FeaturesProps } from "@/ui-base/components/ui/sections/feature-section"
import { LanguageSite, PageIdentifier } from "@/ui-base/lib/cms/constants"
import { variablesMultiSiteByIdentifier } from "@/ui-base/lib/cms/_base/tools/common/multiSite"


export function features(pageIdentifier: PageIdentifier) {
  return `
  query GetPageBySlug($slug: String!) {
    homepage_All(where: { _seo : { urlPath : {eq : $slug }} }, limit: 1){
        items{        
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
}
  `
}

export function variables(pageIdentifier: PageIdentifier, languageSite:LanguageSite) {
  return variablesMultiSiteByIdentifier(pageIdentifier, languageSite);
}

export default function GetFeatureQuery() {
  return features
}

export function mapFeaturesData(data: any, pageIdentifier:PageIdentifier, languageSite:LanguageSite): FeaturesProps {
  const items = data.homepage_All?.items;

  if(items.length === 0 && items[0].bodyItems?.items.length === 0) return { data: { headline: "", description: "", cards: [] }};

  let section;
  items[0]?.bodyItems?.items?.forEach((item: any) => {
    if (item.__typename === "FeaturesSection") {
      section = item;
    }
  });
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
