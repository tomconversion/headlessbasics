export const navigation = `
{
  pageCollection
	{
    items
      {
        navigationTitle
        ... on Page{
          slug
          urlPath                               
        }
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
    x.url = x.urlPath;
    x.name = x.navigationTitle;
    x.id = x.sys.id;
  });
  navItems = navItems.filter((x) => typeof(x.url) !== 'undefined' && x.url !== null && x.url !== '');
  return navItems;
}