
// subComponentContent: 
import { getLogger } from "@/ui-base/lib/services/logging/LogConfig";
import { LanguageSite, PageIdentifier } from "../../../constants"
import { variablesMultiSiteSlug } from "../../../_base/tools/common/multiSite";

const log = getLogger("headless.graphql.heartcore.common.multiSite");

export function subComponentContent() {
  return `query SubComponentsBySlug($slug: String!) {
    content(url: $slug) {
      slug:url
      name
      id
      children(where: { contentTypeAlias_ends_with: "dataFolder" }) {
        edges {
          node {
            __typename
            contentTypeAlias
            # Add other fields to retrieve here
            children {
                edges {
                    node{
                        name       
                        id
                        url  
                        __typename            
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

export function variables(slug:string, languageSite:LanguageSite)
{
  log.debug("variables > ", slug, languageSite);
  return variablesMultiSiteSlug(slug, languageSite);
};

export default function GetSubComponentContentQuery() {
  return subComponentContent
}

export function mapSubComponentContentData(data: any, pageIdentifier:PageIdentifier, languageSite:LanguageSite) {
  const childNodes: ChildNode[] = [];
  log.debug("mapSubComponentContentData > ", data, pageIdentifier, languageSite);
  data.content.children.edges.forEach((edge) => {
    const { node } = edge;

    if (node.contentTypeAlias === 'dataFolder') {
      node.children.edges.forEach((childEdge) => {
        const { node: childNode } = childEdge;
        log.trace("mapSubComponentContentData > childNode > ", childNode.name, childNode.id, childNode.url, childNode.__typename);
        childNodes.push(childNode);
      });
    }
  });

  return childNodes;
}
