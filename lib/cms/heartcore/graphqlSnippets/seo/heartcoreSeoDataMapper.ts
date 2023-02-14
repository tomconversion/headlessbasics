

export function mapSeoData(data) {
    let nodes = data.allHomepage1.edges.map((x) => x.node);
    const mappedNav =  nodes[0].children.items;
    mappedNav.map((x) => {
      x.name = x.name.replace('/', '');
      x.slug = x.name;
    });
    return mappedNav;
}