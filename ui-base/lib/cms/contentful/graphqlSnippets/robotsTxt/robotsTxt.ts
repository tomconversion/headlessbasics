export function robotsTxt(name:String)
{
  return `
    query GetRobotsTxt($name: String!) {
      snippetCollection(where : { name :  $name }) {
        items{
            name
            snippetCode
        }
      }
  }`
};

export function variables(name:String)
{
  const result = {'name': name};
  return result;
};

export default function GetRobotsTxt() {
  return robotsTxt;
}

export function mapRobotsTxtData(data) {
  
  return data.snippetCollection.items[0].snippetCode;
}