import Link from "next/link"


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
