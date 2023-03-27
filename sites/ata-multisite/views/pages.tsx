import Breadcrumbs from "@/ui-base/components/ui/breadcrumbs/Breadcrumbs"
import { renderComponentContent } from "@/ui-base/lib/services/components/pageComponentRenderService"


interface Props {
  className?: string
  data: any
}

const Pages = (props: Props) => {

  return (
   <div className={props.className}>
       
        <div className='w-full'>
          <Breadcrumbs data={props.data?.data?.breadcrumbItems} />
        </div>
        {/* {JSON.stringify(dynamicCmsData)} */}       
        {/* {subComponentContent}
        {gridPageContent} */}

        {renderComponentContent(props.data?.data)}

        <h6 id="oneTwo">Page Template: {props.data?.data?.pageVariant}</h6>
   </div>
  )
}

export default Pages
