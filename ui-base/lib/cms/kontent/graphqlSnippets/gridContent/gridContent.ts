
// DynamicContent:  In Umbraco this is essentially the Umbraco Grid.
// It allows user to create a page with a grid of components.
// The can pick the columns and rows and then add components to the grid.


import { CmsVariants, PageIdentifier } from "../../../constants"

export function gridContent() {
  return `
  query GetGridContent($urlPath: String!) {
      navigationItem_All(where: { _seo : { urlPath : {eq : $urlPath }} }, limit: 1){
          items{
              _system_{
                  id
                  type{
                      _system_{
                          codename
                          name
                      }
                  }
              }
              label
              _seo{
                  urlPath
              }            
          }
      }
  }
  
  `
}

export function variables(urlPath: string) {
  let correctedPath = urlPath.endsWith('/') ? urlPath : urlPath + '/';
  const result = {'urlPath': `/${correctedPath}`};
  console.log("model variables", result);
  return result;
}

export default function GetGridContentQuery() {
  return gridContent
}

export function mapGridContentData(data: any, pageIdentifier:PageIdentifier) {
  console.log("Umbraco mapGridContentData", data);
  let dynamicContent = {};
  if (data?.dynamicPage?.contentBody) {
    dynamicContent = data?.dynamicPage?.contentBody;
  }
  return dynamicContent;
}
