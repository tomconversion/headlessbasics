import { PageIdentifier } from "../../../constants";

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
              url
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

export function mapNavigationData(data : any, pageIdentifier:PageIdentifier) {
  let nodes = data.allHomepage.edges.map((x) => x.node);
  let mappedNav =  nodes[0].children.items;
  mappedNav.map((x) => {
    x.name = x.name.replace('/', '');
    x.slug = x.name;
    x.url = x.url.replace('/homepage', '');
  });
  mappedNav = mappedNav.filter((x) => !x.name.startsWith("_"));
  return mappedNav;
}