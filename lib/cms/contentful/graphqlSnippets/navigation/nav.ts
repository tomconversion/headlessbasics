export const nav = `
{
  pageCollection
	{
    items
      {
    navigationTitle
    slug
    showInNavigation
    isHomepage
    subPagesCollection{
      items{
        sys{
          id
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