import Image from "next/image"

interface TestimonialsCardProps {
  image_src?: string
  image_alt?: string
  image_src1?: string
  image_alt1?: string
  text?: string
  text1?: string
  text2?: string
}

export interface StoriesSectionProps {
  title: string
  description: string
  card1: TestimonialsCardProps
  card2: TestimonialsCardProps
  card3: TestimonialsCardProps
}

export default function StoriesSection(props: StoriesSectionProps) {
  return (
    <div className="flex w-full flex-row items-center justify-center bg-[#d5fafcff] py-12 px-8">
      <div className="flex max-w-screen-lg flex-col flex-wrap items-center justify-center md:flex-row">
        <div className="relative flex shrink-0 grow-0 basis-auto flex-col items-center md:items-start">
          <Image
            alt="image"
            loading="lazy"
            src="/landify/static/playground_assets/quote-mark.svg"
            width={15}
            height={13}
            className="m-4 w-[100px] object-cover md:m-0"
          />
          <h1 className="z-50 max-w-lg text-center font-['Inter'] text-4xl font-extrabold !leading-normal md:text-left md:text-5xl">
            {props.title}
          </h1>
          <span>{props.description}</span>
          <div className="home-container10 mt-8 flex w-[350px] flex-col items-center justify-center self-end">
            <TestimonialsCard {...props.card1} />
          </div>
        </div>
        <div className="ml-0 flex shrink-0 grow-0 basis-auto flex-col items-center lg:ml-8 lg:items-start">
          <div className="flex w-[350px] flex-col items-start">
            <TestimonialsCard {...props.card2} />
          </div>
          <div className="mt-8 flex w-[350px] flex-col items-start lg:w-[300px]">
            <TestimonialsCard {...props.card3} />
          </div>
        </div>
      </div>
    </div>
  )
}

const TestimonialsCard = (props: TestimonialsCardProps) => {
  return (
    <div className="flex w-full shrink-0 grow-0 basis-auto flex-col items-start rounded-lg bg-white p-8 shadow-[0px_10px_20px_0px_rgba(41,41,42,0.07)]">
      <Image
        alt={props.image_alt}
        src={props.image_src}
        width={15}
        height={15}
        className="mb-8 w-[100px] object-cover"
      />
      <div className="flex h-auto w-full shrink-0 grow-0 basis-auto flex-row items-start justify-start">
        <Image
          alt={props.image_alt1}
          src={props.image_src1}
          width={15}
          height={15}
          className="right-auto bottom-auto left-[46px] top-[81px] w-4 object-cover"
        />
        <div className="flex flex-col items-start justify-start">
          <span className="mb-8 text-lg font-normal normal-case text-['Inter'] no-underline">
            {props.text}
          </span>
          <span className="text-lg font-bold normal-case text-['Inter'] no-underline">
            {props.text1}
          </span>
          <span className="text-sm font-medium normal-case text-['Inter'] text-gray-700 no-underline">
            {props.text2}
          </span>
        </div>
      </div>
    </div>
  )
}
