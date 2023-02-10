import { CmsVariants } from "../cms/constants"


export async function fetchAPI(query, { variables, preview } = { variables: {}, preview: false }, endpoint: string, headers: any = {}) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })
  const json = await res.json()

  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

// async function queryKontentDeliveryAPI(query) {
//     const projectId = "your-project-id";
//     const endpoint = `https://deliver.kontent.ai/${projectId}/graphql`;
  
//     const response = await fetch(endpoint, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ query })
//     });
  
//     const json = await response.json();
  
//     return json.data;
//   }