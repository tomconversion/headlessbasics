

export function mapNavigationData(data) {
    let navItems = data.pageCollection.items;
    navItems.map((x) => {
      // x.slug = x.slug.replace('/', '');
      x.name = x.navigationTitle;
      // x.id = x._system_.id;
    });
    return navItems;
}