import Image from "next/image"

import { Button } from "../button"
import Hero from "../hero/Hero"

export default function HeroDemo() {
  return (
    <>
      <h1 className="my-4 text-2xl font-bold">Hero</h1>
      <Hero className="min-h-[400px] bg-base-200">
        <Hero.Overlay className="bg-primary/5" />
        <Hero.Content className="text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <Button color="primary">Get Started</Button>
          </div>
        </Hero.Content>
      </Hero>
      <h1 className="my-4 text-2xl font-bold">Hero with Image</h1>
      <Hero className="min-h-[500px] bg-base-200">
        <Hero.Content className="w-full flex-col-reverse sm:w-11/12 sm:flex-row sm:justify-around">
          <div className="py-4 text-center sm:text-left">
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="max-w-md py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Button color="primary">Get Started</Button>
          </div>
          <Image
            src="https://api.lorem.space/image/album?w=400&h=400"
            alt="Movie Poster"
            width={400}
            height={400}
            className="w-full max-w-sm rounded-lg"
          />
        </Hero.Content>
      </Hero>
      <h1 className="my-4 text-2xl font-bold">Hero with Overlay Image </h1>
      <Hero
        className="min-h-[500px] bg-base-200"
        style={{
          backgroundImage:
            "url(https://api.lorem.space/image/fashion?w=1000&h=800)",
        }}
      >
        <Hero.Overlay className="bg-white/60" />
        <Hero.Content className="text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <Button color="primary">Know More</Button>
          </div>
        </Hero.Content>
      </Hero>
    </>
  )
}
