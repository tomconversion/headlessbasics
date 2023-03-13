export const navigation = `
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
  return navigation;
}

export function mapNavigationData(data) {
  let navItems = data.homepage_All.items[0].subpages.items;
  navItems.map((x) => {
    x.url = x.slug.replace('/', '');
    x.name = x.slug;
    x.id = x._system_.id;
  });
  return navItems;
}