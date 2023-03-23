import { COMPONENT_PRODUCT_DETAILS } from "@/sites/ata-multisite/ATASiteConstants";
import { GetPageComponentData } from "../pageDataProvider";

export function detectAndRenderProductDetails(data: any) {
    
    let productData = GetPageComponentData(data, COMPONENT_PRODUCT_DETAILS);    
    
    if(data?.pageVariant === 'productPage'){
        return (
            <div className='w-full'>
                <h6>Product Details</h6>
                Sample JSON:{" "}
            </div>
        )
    }
}