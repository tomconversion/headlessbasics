import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/ui-base/components/ui/button"
import Hero from "@/ui-base/components/ui/hero/Hero"
import FeatureSection, {
  FeaturesProps,
} from "@/ui-base/components/ui/sections/feature-section"
import MediaLogos from "@/ui-base/components/ui/sections/media-logos/MediaLogos"
import LinkIconButton from "../components/link-icon-button"
import StatsCard from "../components/stats-card"
import StoreBanner from "../components/store-banner"
import TestimonialsCard from "../components/testimonials-card"
import { HeroData } from "../graphql/contentful/hero/hero"
import { OurClientData } from "../graphql/contentful/ourclient/ourclient"
import StoriesSection, { StoriesSectionProps } from "@/ui-base/components/ui/sections/stories-section"

interface Props {
  className?: string
  heroData?: HeroData[]
  clientsData?: OurClientData[]
  featuresData?: FeaturesProps
  storiesData?: StoriesSectionProps
}

const Home = (props: Props) => {
  const heroData = props?.heroData?.length > 0 ? props.heroData[0] : false
  const ourClientsData =
    props?.clientsData?.length > 0 ? props.clientsData[0] : false

  return (
    <div className={props.className}>
      {heroData ? (
        <Hero className="relative">
          <Hero.Overlay className="h-[70vh] bg-gray-100 blur-[60px]" />
          <Hero.Content className="z-50 flex w-full max-w-screen-lg shrink-0 grow-0 basis-auto flex-col justify-between p-8 lg:h-[80vh] lg:flex-row">
            <div className="mb-8 flex h-auto w-auto shrink-0 grow-0 basis-auto flex-col items-center lg:mb-0 lg:items-start">
              <h1
                dangerouslySetInnerHTML={{ __html: heroData?.description }}
                className="mb-8 text-center text-5xl font-extrabold !leading-normal md:text-7xl lg:text-left"
              />

              <Link
                href={heroData?.buttonLink.url}
                className={buttonVariants({
                  color: "primary",
                  size: "lg",
                })}
              >
                {heroData?.buttonLink.name}
              </Link>
            </div>
            <Image
              className="bg-transparent"
              alt="image"
              loading="lazy"
              src={heroData?.imageUrl}
              width={320}
              height={589}
            />
          </Hero.Content>
          <Image
            alt="image"
            loading="lazy"
            src="/landify/static/playground_assets/turquoise-circle.svg"
            width={170}
            height={170}
            className="absolute right-[430px] top-[439px] left-auto bottom-auto w-40 object-cover opacity-60 blur-[60px]"
          />
          <Image
            alt="image"
            loading="eager"
            src="/landify/static/playground_assets/purple-circle.svg"
            width={400}
            height={418}
            className="absolute left-auto bottom-auto top-[-100px] right-[-26px] w-[400px] object-cover opacity-40 blur-[60px]"
          />
          <Image
            alt="image"
            loading="lazy"
            src="/landify/static/playground_assets/left.svg"
            width={420}
            height={201}
            className="absolute left-0 right-auto bottom-auto top-[653px] w-[420px] object-cover"
          />
          <Image
            alt="image"
            loading="lazy"
            src="/landify/static/playground_assets/right.svg"
            width={612}
            height={211}
            className="absolute left-auto right-0 bottom-auto top-[441px] w-[612px] object-cover"
          />
        </Hero>
      ) : null}
      {ourClientsData ? (
        <MediaLogos
          clients={ourClientsData.clients}
          className="max-w-screen-lg"
        />
      ) : null}
      <FeatureSection {...props.featuresData} />
      <StoriesSection {...props.storiesData} />
      <div className="home-achievements">
        <div className="home-container14">
          <h2 className="home-text21">
            <span className="home-text22">
              Our 18 years of
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <br></br>
            <span>achievements</span>
          </h2>
          <span className="home-text25">
            <span className="home-text26">
              With our super powers we have reached this
            </span>
          </span>
        </div>
        <div className="home-container15">
          <div className="home-container16">
            <StatsCard
              number="10,000+"
              image_src="/landify/static/playground_assets/01.svg"
              description="Downloads per day"
            ></StatsCard>
            <StatsCard
              number="2 Milion"
              image_src="/landify/static/playground_assets/04.svg"
              description="Users"
            ></StatsCard>
          </div>
          <div className="home-container17">
            <StatsCard number="500+" description="Clients"></StatsCard>
            <StatsCard
              number="140"
              image_src="/landify/static/playground_assets/07.svg"
              description="Countries"
            ></StatsCard>
          </div>
        </div>
      </div>
      <div className="home-feature1">
        <div className="home-container18">
          <Image
            alt="image"
            loading="lazy"
            src="/landify/static/playground_assets/iphonex-1200w.png"
            width={320}
            height={589}
            // image_src="/landify/static/playground_assets/iphonex-1200w.png"
            className="m-4 w-[100px] object-cover md:m-0"
          />
        </div>
        <div className="home-container19">
          <h3 className="Headline3">Headline</h3>
          <span className="home-text28 Lead1">
            <span className="home-text29">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.
            </span>
          </span>
          <LinkIconButton text="Get Started"></LinkIconButton>
        </div>
      </div>
      <div className="home-feature2">
        <div className="home-container20">
          <h2 className="Headline2 home-text30">
            <span className="home-text31">
              Enter the world of all fashion trends
            </span>
          </h2>
          <span className="home-text32 Lead1">
            <span className="home-text33">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.
            </span>
          </span>
        </div>
        <Image
          alt="image"
          loading="lazy"
          width={1000}
          height={400}
          src="https://images.unsplash.com/photo-1535157412991-2ef801c1748b?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
          className="home-image10"
        />
      </div>
      <div className="home-c-t-a">
        <div className="home-container21">
          <div className="home-container22">
            <h2 className="Headline2 home-text34">
              <span className="home-text35">
                Manage your projects from your mobile
              </span>
            </h2>
            <span className="home-text36 Lead1">
              <span className="home-text37">
                Download the app to manage your projects, keep track of the
                progress and complete tasks without procastinating. Stay on
                track and complete on time!
              </span>
            </span>
            <span className="home-text38 Subtitle2">
              <span className="home-text39">Get the App</span>
            </span>
            <StoreBanner></StoreBanner>
          </div>
          <div className="home-container23">
            <Image
              alt="image"
              loading="lazy"
              src="/landify/static/playground_assets/iphonex-1200w.png"
              width={320}
              height={589}
              className="home-image11"
            />
            <Image
              alt="image"
              loading="lazy"
              src="/landify/static/playground_assets/iphonex-1200w.png"
              width={320}
              height={589}
              className="home-image12"
            />
          </div>
        </div>
      </div>
      <div className="home-footer">
        <footer className="home-container24">
          <Image
            alt="image"
            loading="lazy"
            width={320}
            height={589}
            src="/landify/static/playground_assets/logotype-light.svg"
            className="home-image13"
          />
          <div className="home-container25">
            <span className="home-text40">About</span>
            <span className="home-text41">Features</span>
            <span className="home-text42">Pricing</span>
            <span className="home-text43">Careers</span>
            <span className="home-text44">Help</span>
            <span className="home-text45">Privacy Policy</span>
          </div>
          <div className="home-divider2"></div>
          <div className="home-container26">
            <span className="home-text46 Body2">
              © 2020 Landify UI Kit. All rights reserved
            </span>
            <div className="home-container27">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link4"
              >
                <div className="home-container28">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon15"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link5"
              >
                <div className="home-container29">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon17"
                  >
                    <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link6"
              >
                <div className="home-container30">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon19"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link7"
              >
                <div className="home-container31">
                  <svg viewBox="0 0 1024 1024" className="home-icon21">
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
