export const nav = `
{
  homepage_All{
    items{
      title
      subpages{
        totalCount
        items {
          ... on NavigationItem{
            slug
            content{
              __typename
            }
            _system_{
              id
            }
            _seo{
              title
              description
              keywords
            }
          }
        }
      }
    }
  }
}
`;

export function GetNavQuery() {
  return nav;
}