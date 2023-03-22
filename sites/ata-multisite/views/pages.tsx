import Breadcrumbs from "@/ui-base/components/ui/breadcrumbs/Breadcrumbs"


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


        <h6 id="oneTwo">Page Template: {props.data?.data?.pageVariant}</h6>
   </div>
  )
}

export default Pages
