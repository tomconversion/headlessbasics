import Image from "next/image"

import { parseText } from "@/ui-base/lib/util/utils"

interface FeatureCardProps {
  imageSrc: string
  title: string
  description: string
  width?: number
  height?: number
}

export interface FeaturesProps {
  data?: {
    headline: string
    description: string
    cards: FeatureCardProps[]
  }
}

const FeatureSection = ({ data }: FeaturesProps) => {
  log.debug("data", data)

  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl md:text-5xl">
          {data.headline}
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center sm:mb-16 sm:text-lg">
          {parseText(data.description).text}
        </p>
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3">
          {data.cards.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div className="relative m-2 flex max-w-sm flex-col items-center">
      <Image
        className="object-contain"
        alt={props.title}
        src={props.imageSrc}
        width={props?.width ?? 32}
        height={props?.height ?? 32}
      />
      <h5 className="my-4 text-2xl font-semibold">{props.title}</h5>
      <span className="text-center">{parseText(props.description).text}</span>
    </div>
  )
}

export default Object.assign(FeatureSection, { FeatureCard })
