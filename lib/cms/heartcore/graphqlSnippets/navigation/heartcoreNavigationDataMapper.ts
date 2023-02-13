

export function mapNavigationDataHeartcore(data) {
    let nodes = data.allHomepage1.edges.map((x) => x.node)
    console.log(nodes);
    const mappedNav =  nodes[0].children.items;
    mappedNav.map((x) => {
      x.name = x.name.replace('/', '');
      x.slug = x.name;
    });
    return mappedNav;
}