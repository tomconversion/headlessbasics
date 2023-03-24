import Breadcrumbs from "@/ui-base/components/ui/breadcrumbs/Breadcrumbs"
import {
  detectAndRenderPageComponents,
  detectAndRenderProductDetails,
} from "@/ui-base/lib/services/ecommerce/ecommerceRenderService"

interface Props {
  className?: string
  data: any
}

const Pages = (props: Props) => {
  let productRendering = detectAndRenderProductDetails(props.data?.data)

  return (
    <div className={props.className}>
      <div className="w-full">
        <Breadcrumbs data={props.data?.data?.breadcrumbItems} />
      </div>
      {/* {JSON.stringify(dynamicCmsData)} */}
      {/* {subComponentContent}
        {gridPageContent} */}

      {productRendering}

      <h6 id="oneTwo">Page Template: {props.data?.data?.pageVariant}</h6>
      {detectAndRenderPageComponents(props.data?.data)}
    </div>
  )
}

export default Pages
