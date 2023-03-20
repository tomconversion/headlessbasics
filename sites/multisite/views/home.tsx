import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/ui-base/components/ui/button"
import Hero from "@/ui-base/components/ui/hero/Hero"
import MediaLogos from "@/ui-base/components/ui/sections/media-logos/MediaLogos"
import { HeroData } from "@/ui-base/lib/cms/heartcore/graphqlSnippets/hero/hero"
import { OurClientData } from "@/ui-base/lib/cms/heartcore/graphqlSnippets/ourclient/ourclient"


interface Props {
  className?: string
  heroData?: HeroData[]
  clientsData?: OurClientData[]
}

const Home = (props: Props) => {
  // const heroData = props?.heroData?.length > 0 ? props.heroData[0] : false
  // const ourClientsData =
  //   props?.clientsData?.length > 0 ? props.clientsData[0] : false

  return (
    <div className={props.className}>

      <div className="home-footer">
        
      </div>
    </div>
  )
}

export default Home
