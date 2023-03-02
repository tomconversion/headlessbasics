const navigation = `
  {
    allHomepage{
      edges{
        node {
          name
          id
          children{
            items{
              name
              id
              level
            }
          }
        }
      }
    }
  }  
`;

export {navigation};

export default function GetNavQuery() {
  return navigation;
}

export function mapNavigationData(data : any) {
  let nodes = data.allHomepage.edges.map((x) => x.node);
  const mappedNav =  nodes[0].children.items;
  mappedNav.map((x) => {
    x.name = x.name.replace('/', '');
    x.slug = x.name;
  });
  return mappedNav;
}