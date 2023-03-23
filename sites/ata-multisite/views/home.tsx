import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/ui-base/components/ui/button"
import Hero from "@/ui-base/components/ui/hero/Hero"
import FeatureSection, {
  FeaturesProps,
} from "@/ui-base/components/ui/sections/feature-section"
import MediaLogos from "@/ui-base/components/ui/sections/media-logos/MediaLogos"

interface Props {
  className?: string
}

const Home = (props: Props) => {

  return (
    <div className={props.className}>
      This is the homepage.
      <div className="flex flex-col items-center">
        Example Links:
        <Link href="/gate-openers/neoslider-500b">Product Neo Slider</Link>
      </div>
    </div>
  )
}

export default Home
