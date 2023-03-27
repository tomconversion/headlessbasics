import { ExampleCodeJSON } from "@/ui-base/components/ui/code"

// import { GetPageComponentData } from "../pageDataProvider";

export function detectAndRenderProductDetails(data: any) {

  return <></>
}

export function GetPageComponentData(data, field) {
  const fieldName = field.toLowerCase()
  if (
    data?.data?.pageComponentData &&
    data?.data?.pageComponentData.hasOwnProperty(fieldName) &&
    data?.data?.pageComponentData[fieldName]
  ) {
    return data?.data?.pageComponentData[field]
  }
  if (
    data?.pageComponentData &&
    data?.pageComponentData.hasOwnProperty(fieldName) &&
    data?.pageComponentData[fieldName]
  ) {
    return data?.pageComponentData[fieldName]
  }
}

export function detectAndRenderPageComponents(data: any) {
  switch (data?.pageVariant) {
    case "productPage":

    default:
      return <></>
  }
}
