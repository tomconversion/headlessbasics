

export function mapNavigationData(data) {
    let navItems = data.homepage_All.items[0].subpages.items;
    navItems.map((x) => {
      x.slug = x.slug.replace('/', '');
      x.name = x.slug;
      x.id = x._system_.id;
    });
    return navItems;
}