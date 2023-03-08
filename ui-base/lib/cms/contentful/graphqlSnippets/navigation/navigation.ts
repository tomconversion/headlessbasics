export const navigation = `
{
  pageCollection
	{
    items
      {
    navigationTitle
    slug
    showInNavigation
    isHomepage
    sys{
        id
            }
        }
    }
}
`;

export function GetNavQuery() {
  return navigation;
}

export function mapNavigationData(data) {
  let navItems = data.pageCollection.items;
  navItems.map((x) => {
    x.url = x.slug;
    x.name = x.navigationTitle;
    x.id = x.sys.id;
  });
  return navItems;
}