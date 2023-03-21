import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/ui-base/components/ui/button"
import MediaLogos from "@/ui-base/components/ui/sections/media-logos/MediaLogos"


interface Props {
  className?: string
  data?: any
}

const Home = (props: Props) => {


  return (
    <div className={props.className}>

      <div className="home-footer">
        Multi-Site Home Page
      </div>
    </div>
  )
}

export default Home
