
// subComponentContent: 


import { CmsVariants, LanguageSite, PageIdentifier } from "../../../constants"

export function subComponentContent() {
  return `
  query GetSubComponentContent($urlPath: String!) {
      navigationItem_All(where: { _seo : { urlPath : {eq : $urlPath }} }, limit: 1){
          items{
              ... on NavigationItem{
                  content{
                      __typename
                  }
              }            
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

export default function GetSubComponentContentQuery() {
  return subComponentContent
}

export function mapSubComponentContentData(data, pageIdentifier:PageIdentifier, languageSite:LanguageSite) {
  console.log("mapSubComponentContentData Kontent", data);
  if(data?.navigationItem_All?.items[0]?.content){
    return data?.navigationItem_All?.items[0]?.content;
  }else {
    return {};
  }
}
