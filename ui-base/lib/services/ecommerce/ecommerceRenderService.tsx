import { COMPONENT_PRODUCT_DETAILS } from "@/sites/ata-multisite/ATASiteConstants";
import ExampleCode, { ExampleCodeJSON } from "@/ui-base/components/ui/code";
// import { GetPageComponentData } from "../pageDataProvider";

export function detectAndRenderProductDetails(data: any) {
    if (data?.pageVariant === 'productPage') {
        let productData = GetPageComponentData(data, COMPONENT_PRODUCT_DETAILS);

        return (
            <div className='w-full'>
                <h6>Product Details</h6>
                <div className='w-full break-after-auto py-4'>
                    Developer Please Connect up the data to components to complete the page:
                    <ExampleCodeJSON language='json'>{productData}</ExampleCodeJSON>
                </div>
            </div>
        );
    }
    return (<></>)
}

export function GetPageComponentData(data, field) {
    const fieldName = field.toLowerCase();
    if (data?.data?.pageComponentData && data?.data?.pageComponentData.hasOwnProperty(fieldName) && data?.data?.pageComponentData[fieldName]) {
        return data?.data?.pageComponentData[field];
    }
    if (data?.pageComponentData && data?.pageComponentData.hasOwnProperty(fieldName) && data?.pageComponentData[fieldName]) {
        return data?.pageComponentData[fieldName];
    }
}
