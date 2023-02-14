const navigation = `
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

export {navigation};

export default function GetNavQuery() {
  return navigation;
}