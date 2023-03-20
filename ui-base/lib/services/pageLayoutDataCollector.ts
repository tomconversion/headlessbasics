import {
  SUBCOMPONENT_CONTENT,
  COMPONENT_GRID_CONTENT,
  DynamicCmsDataLocations,
  FixedLayouts,
  PageIdentifier,
  PageVariant,
  LanguageSite,
} from "../cms/constants"
import { getDyanmicCmsDataViaCmsSelector } from "./graphqlDataService"

/*
    The purpose of this function is to gather the required data from the GraphQL layer for a particular page.
    We need to support two page layout types. 
    1) Fixed Layout -   These pages have a pre-determined layout as per a design. The data they try to collect is fixed.
    2) Dynamic Layout - These pages have multiple components as determined by the data passed in. 
                        Usually a single field in the CMS will contain multiple references.  We need to loop over the references and collect all the data for display.


     On top of the page layout types we have common data that all pages will require. 
     We need to support two types of common data. 
     1) Individual Page Data       - This is unique to each page. Each page can have Meta Data, Breadcrumbs, Redirects, Structured DAta.
     2) Global Data          - This is commmon to all pages. Includes Naviation, Footer
*/

export async function collectAllPageData(pageIdentifier: PageIdentifier, pageVariant: PageVariant, slug: string, languageSite: LanguageSite) {
  
  console.log(`${slug}  > collectAllPageData > pageIdentifier > ${JSON.stringify(pageIdentifier)} pageVariant ${pageVariant} `);

  // Global Data - Nav items are Global Data required by each page
  const navItems =
    (await getDyanmicCmsDataViaCmsSelector(
      DynamicCmsDataLocations.variants.navigation,
      pageIdentifier,
      undefined, // Slug is undefined, as we are doing the lookup based on page type
      languageSite
    )) || [];
  
    console.log(`${slug}  > collectAllPageData > navItems > ${navItems}`);

  // Individual Page Data
  const seoItems =
    (await getDyanmicCmsDataViaCmsSelector(
      DynamicCmsDataLocations.variants.seo,
      pageIdentifier,
      undefined, // Slug is undefined, as we are doing the lookup based on page type
      languageSite
    )) || [];

    console.log(`${slug}  > collectAllPageData > seoItems > ${seoItems}`);

    const breadcrumbItems =
    (await getDyanmicCmsDataViaCmsSelector(
      DynamicCmsDataLocations.variants.breadcrumb,
      undefined, 
      slug,
      languageSite
    )) || [];   

    console.log(`${slug}  > collectAllPageData > breadcrumbItems > ${JSON.stringify(breadcrumbItems)}`);

    let pageComponentData:any = {};

    if(pageIdentifier.isFixedLayout){
      pageComponentData = await collectFixedLayoutPageComponentData(pageVariant, pageIdentifier, slug, languageSite);
    } else{
      pageComponentData = await collectDynamicLayoutPageComponentData(pageVariant, pageIdentifier, slug, languageSite);
    }

    console.log(`${slug} > collectAllPageData > completed lookup`);

    const finalPageData = { navItems, seoItems, pageComponentData, pageVariant, breadcrumbItems };

    console.log(`${slug} > collectAllPageData > finalPageData > ${JSON.stringify(finalPageData)}`);

    return finalPageData;
}

// export async function collectFixedLayoutPageComponentData(pageIdentifier: PageIdentifier, pageVariant: PageVariant) {

//   const pageComponentData:any = {};

//   pageComponentData.heroItems = {};
//   if(pageVariant == "home"){
//     pageComponentData.heroItems = (await getDyanmicCmsDataViaCmsSelector(
//       DynamicCmsDataLocations.variants.hero,
//       pageIdentifier,
//       undefined // Slug is undefined, as we are doing the lookup based on page type
//     )) || [];
//   }

//   return pageComponentData;
// }

export async function collectFixedLayoutPageComponentData(pageVariant: PageVariant, pageIdentifier: PageIdentifier, slug:string, languageSite: LanguageSite) {
  const pageComponentData: Record<string, unknown> = {};
  console.log(`${slug}  > collectFixedLayoutPageComponentData`);
  // get the fixed layout for the current page variant
  const layout = FixedLayouts.layouts.find(
    (layout) => layout.identifier === pageVariant
  )

  // if no matching layout found, return empty pageComponentData
  if (!layout) {
    console.log(
      "collectFixedLayoutPageComponentData no matching layout",
      pageVariant
    )
    return pageComponentData
  }

  console.log(`${slug}  > collectFixedLayoutPageComponentData > About to iterate over layout.components > ${layout.components}`);

  // iterate over the components in the layout and add corresponding property to pageComponentData
  for (const component of layout.components) {
    const lowerCaseMatchName = component.toLowerCase();
    pageComponentData[lowerCaseMatchName] = await getDyanmicCmsDataViaCmsSelector(
      DynamicCmsDataLocations.variants[lowerCaseMatchName],
      pageIdentifier,
      undefined,
      languageSite
    );
  }
  console.log("collectFixedLayoutPageComponentData", pageVariant);
  return pageComponentData;
}

export async function collectDynamicLayoutPageComponentData(pageVariant: PageVariant, pageIdentifier: PageIdentifier, slug, languageSite: LanguageSite) {
  const pageComponentData: Record<string, unknown> = {};
  
  console.log(`${slug}  > collectDynamicLayoutPageComponentData`);

  if(pageVariant == "subComponentsPage"){
    pageComponentData[SUBCOMPONENT_CONTENT] = await getDyanmicCmsDataViaCmsSelector(
      DynamicCmsDataLocations.variants[SUBCOMPONENT_CONTENT],
      undefined,
      slug,
      languageSite
    );
  }

  console.log(`${slug}  > collectDynamicLayoutPageComponentData > pageComponentData[SUBCOMPONENT_CONTENT] > ${JSON.stringify(pageComponentData[SUBCOMPONENT_CONTENT])}`);
  
  if(pageVariant == "gridContentPage"){
    pageComponentData[COMPONENT_GRID_CONTENT] = await getDyanmicCmsDataViaCmsSelector(
      DynamicCmsDataLocations.variants[COMPONENT_GRID_CONTENT],
      undefined,
      slug,
      languageSite
    );
    console.log(`${slug}  > collectDynamicLayoutPageComponentData >   pageComponentData[COMPONENT_GRID_CONTENT] > ${JSON.stringify(pageComponentData[COMPONENT_GRID_CONTENT])}`);
  }
  return pageComponentData;
}
