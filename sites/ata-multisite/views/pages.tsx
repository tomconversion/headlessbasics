

interface Props {
  className?: string
}

const Pages = (props: Props) => {

  return (
    <div className={props.className}>
      This is a sub page.
    </div>
  )
}

export default Pages
