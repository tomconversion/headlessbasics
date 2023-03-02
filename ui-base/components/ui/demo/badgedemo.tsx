import Badge from "../badge"

export default function BadgeDemo() {
  return (
    <>
      <h1 className="my-4 font-bold">Default</h1>
      <Badge>Badge</Badge>
      <h1 className="my-4 font-bold">Badge with color </h1>
      <div className="flex items-center gap-1">
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="accent">Accent</Badge>
        <Badge color="ghost">Ghost</Badge>
      </div>
      <h1 className="my-4 font-bold">Outline Badge</h1>
      <div className="flex items-center gap-1">
        <Badge variant="outline">neutral</Badge>
        <Badge color="primary" variant="outline">
          primary
        </Badge>
        <Badge color="secondary" variant="outline">
          secondary
        </Badge>
        <Badge color="accent" variant="outline">
          accent
        </Badge>
      </div>
      <h1 className="my-4 font-bold">Badge with size</h1>
      <div className="flex items-center gap-1">
        <Badge size="lg">987,654</Badge>
        <Badge size="md">987,654</Badge>
        <Badge size="sm">987,654</Badge>
        <Badge size="xs">987,654</Badge>
      </div>
      <h1 className="my-4 font-bold">Empty Badge</h1>
      <div className="flex items-center gap-1">
        <Badge size="lg"></Badge>
        <Badge size="md"></Badge>
        <Badge size="sm"></Badge>
        <Badge size="xs"></Badge>
      </div>
      {/* Badge in a text */}
      <h1 className="my-4 font-bold">Badge in a text</h1>
      <h2 className="text-xl">
        Heading
        <Badge size="lg">NEW</Badge>
      </h2>
      <h3 className="text-lg">
        Heading
        <Badge size="md">NEW</Badge>
      </h3>
      <h4 className="text-base">
        Heading
        <Badge size="sm">NEW</Badge>
      </h4>
      <h5 className="text-sm">
        Heading
        <Badge size="xs">NEW</Badge>
      </h5>
      {/* Badge in a button */}
      <h1 className="my-4 font-bold">Badge in a button</h1>
      <div className="flex items-center gap-1">
        <button className="btn gap-2">
          Inbox
          <Badge size="lg">+99</Badge>
        </button>
        <button className="btn gap-2">
          Inbox
          <Badge size="md">+99</Badge>
        </button>
      </div>
    </>
  )
}
