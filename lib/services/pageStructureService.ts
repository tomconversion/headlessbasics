// This service will read the constants.ts file and query the GRAPHQL endpoint for the page JSON based on the slug based in the URL
// The page JSON will be used to build the page structure
// The page is for a next.js project and is built using the next.js framework
// The code is typescript and uses the next.js framework
// The API is a GRAPHQL endpoint

// import { Page } from '../types/page';


// export class PageStructureService implements PageStructureService {
//     private constants: PageStructureServiceConstants;
    
//     constructor(constants: PageStructureServiceConstants) {
//         this.constants = constants;
//     }
    
//     public async getPageStructure(page: Page): Promise<PageStructure> {
//         const pageStructure = await this.getPageStructureFromApi(page);
//         return pageStructure;
//     }
    
//     private async getPageStructureFromApi(page: Page): Promise<PageStructure> {
//         const pageStructure = await this.getPageStructureFromApi(page);
//         return pageStructure;
//     }
// }

export async function getData() {
   
    return {};
}
  