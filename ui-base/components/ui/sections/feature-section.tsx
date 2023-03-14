import Image from "next/image"

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
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl md:text-5xl">
          {data.headline}
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center sm:mb-16 sm:text-lg">
          {data.description}
        </p>
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3">
          {data.cards.map((feature, index) => (
            <FeatureCard
              key={index}
              imageSrc={feature.imageSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div className="feature-card-container">
      <Image
        alt={props.title}
        src={props.imageSrc}
        className="feature-card-image"
        width={props?.width ?? 100}
        height={props?.height ?? 100}
      />
      <h5 className="feature-card-text Headline5">{props.title}</h5>
      <span className="feature-card-text1">{props.description}</span>
    </div>
  )
}

export default Object.assign(FeatureSection, { FeatureCard })
