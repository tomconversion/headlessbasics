

interface Props {
  className?: string
}

const Home = (props: Props) => {

  return (
    <div className={props.className}>
      This is the homepage.
    </div>
  )
}

export default Home
