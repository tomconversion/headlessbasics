import { Button } from "../button"
import Card from "../cards/Card"

export default function CardDemo() {
  return (
    <>
      <h1 className="my-4 text-lg font-semibold">Card</h1>
      <Card className=" max-w-md shadow">
        <Card.Image
          src={"https://picsum.photos/id/1018/500/300"}
          alt="Card Title"
          width={500}
          height={500}
        />
        <Card.Body>
          <Card.Title tag={"h2"}>Card Title!</Card.Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec aliquam tincidunt, nunc elit aliquam mauris, quis
            aliquet nisl nunc eget lorem.
          </p>
          <Card.Actions className="justify-end">
            <Button color="primary">CTA Button</Button>
          </Card.Actions>
        </Card.Body>
      </Card>
      <h1 className="my-6 text-lg font-semibold">
        Compact card (less padding for Card.Body)
      </h1>
      <Card compact className=" max-w-md shadow">
        <Card.Image
          width={500}
          height={354}
          src="https://picsum.photos/id/237/500/354"
          alt="Card Title"
        />
        <Card.Body>
          <Card.Title tag={"h2"}>Card Title!</Card.Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec aliquam tincidunt, nunc elit aliquam mauris, quis
            aliquet nisl nunc eget lorem.
          </p>
          <Card.Actions className="justify-end">
            <Button color="primary">CTA Button</Button>
          </Card.Actions>
        </Card.Body>
      </Card>

      <h1 className="my-4 text-lg font-semibold">
        Card with image overlay ( full-image )
      </h1>
      <Card imageFull className="max-w-md shadow">
        <Card.Image
          width={500}
          height={354}
          src="https://picsum.photos/id/237/500/354"
          alt="Card Title"
        />
        <Card.Body>
          <Card.Title tag={"h2"}>Card Title!</Card.Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec aliquam tincidunt, nunc elit aliquam mauris, quis
            aliquet nisl nunc eget lorem.
          </p>
          <Card.Actions className="justify-end">
            <Button color="primary">CTA Button</Button>
          </Card.Actions>
        </Card.Body>
      </Card>

      <h1 className="my-4 text-lg font-semibold">Card with no image</h1>
      <Card className="max-w-md">
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec aliquam tincidunt, nunc elit aliquam mauris, quis
            aliquet nisl nunc eget lorem. Sed euismod, nisl nec aliquam
            tincidunt, nunc elit aliquam mauris, quis aliquet nisl nunc eget
            lorem.
          </p>
          <Card.Actions>
            <Button>Button</Button>
          </Card.Actions>
        </Card.Body>
      </Card>

      <h1 className="my-6 text-lg font-semibold">
        Responsive card (vertical on small screen, horizontal on large screen)
      </h1>
      <Card side="lg" className="max-w-max">
        <Card.Image
          width={500}
          height={354}
          src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
          alt="Album"
        />
        <Card.Body>
          <Card.Title>New album is released!</Card.Title>
          <p>Click the button to listen on Spotiwhy app.</p>
          <Card.Actions className="justify-end">
            <Button>Listen</Button>
          </Card.Actions>
        </Card.Body>
      </Card>

      <h1 className="my-4 text-lg font-semibold">Card with image on side</h1>
      <Card side>
        <Card.Image
          className="h-full"
          src="https://picsum.photos/id/1019/1080/480"
          width={1080}
          height={480}
          alt="Card Image"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, nisl nec aliquam tincidunt, nunc elit aliquam mauris, quis
            aliquet nisl nunc eget lorem. Sed euismod, nisl nec aliquam
            tincidunt, nunc elit aliquam mauris, quis aliquet nisl nunc eget
            lorem.
          </p>
          <Card.Actions>
            <Button>Button</Button>
          </Card.Actions>
        </Card.Body>
      </Card>
    </>
  )
}
