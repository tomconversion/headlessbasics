import { ExampleCodeJSON } from "@/ui-base/components/ui/code";
import { COMPONENT_SITE_SEARCH } from "../../cms/constants";
import { GetPageComponentData } from "../ecommerce/ecommerceRenderService";
import { useState } from 'react';

export function detectAndRenderSiteSearch(data: any) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  let dataSub = GetPageComponentData(data, COMPONENT_SITE_SEARCH.toLowerCase());
  if (!dataSub) {
    return (<></>);
  } else {

    const handleSearch = async (e) => {
        const query = e.target.value;
        setQuery(query);
      
        // Set the headers for the search API endpoint
        const headers = {
          'Api-Version': '2',
          'Umb-Project-Alias': process.env.UMBRACO_PROJECT_ALIAS,
          'Api-Key': process.env.UMBRACO_API_KEY,
          'Accept-Language': 'en-US'
        };
      
        // Make a request to the search API endpoint with the headers included
        const response = await fetch(`https://cdn.umbraco.io/content/search?term=${query}`, {
          headers: headers
        });
        const data = await response.json();
      
        // Update the results state variable with the search results
        if(data._embedded && data._embedded.content)
            setResults(data._embedded.content);
      };
      
    return (
      <div className='w-full'>
        <h6>{COMPONENT_SITE_SEARCH.toLowerCase()} Details</h6>
        <div className='w-full'>
            <h6>Search Details</h6>
            <div className='w-full break-after-auto py-4'>
                Developer Please Connect up the data to components to complete the page:
                <ExampleCodeJSON language='json'>{dataSub}</ExampleCodeJSON>
            </div>
        </div>


        <div className='w-full break-after-auto py-4'>
          <input type='text' value={query} onChange={handleSearch} placeholder='Search...' />

          {results.map((result) => (
            <div key={result.id}>{result.title}</div>
          ))}
        </div>
      </div>
    );
  }
}


