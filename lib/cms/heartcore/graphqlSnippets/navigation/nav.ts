const nav = `
  {
    allHomepage1{
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

export {nav};

export default function GetNavQuery() {
  return nav;
}