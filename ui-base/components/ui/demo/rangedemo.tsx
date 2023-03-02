import Range from "../range"

export default function RangeDemo() {
  return (
    <>
      <h1 className="my-4 text-2xl font-bold">Range Default</h1>
      <div className="flex max-w-sm flex-col gap-4 py-6">
        <Range />
      </div>
      <h1 className="my-4 text-2xl font-bold">Range : steps </h1>
      <div className="flex max-w-sm flex-col gap-4 py-6">
        <Range step={25} />
      </div>
      <h1 className="my-4 text-2xl font-bold">Range : colors</h1>
      <div className="flex max-w-sm flex-col gap-4 py-6">
        <Range defaultValue="20" color="primary" />
        <Range defaultValue="30" color="secondary" />
        <Range defaultValue="40" color="accent" />
        <Range defaultValue="50" color="success" />
        <Range defaultValue="60" color="warning" />
        <Range defaultValue="70" color="info" />
        <Range defaultValue="80" color="error" />
      </div>
      <h1 className="my-4 text-2xl font-bold">Range : sizes</h1>
      <div className="flex max-w-sm flex-col gap-4 py-6">
        <Range defaultValue="40" size="xs" />
        <Range defaultValue="50" size="sm" />
        <Range defaultValue="60" size="md" />
        <Range defaultValue="70" size="lg" />
      </div>
    </>
  )
}
