import Kbd from "../kbd"

export default function KbdDemo() {
  return (
    <div>
      <h1 className="my-4 font-bold"> Default </h1>
      <Kbd>A</Kbd>
      <h1 className="my-4 font-bold">Kbd sizes</h1>
      <div className="flex items-center gap-2">
        <Kbd size="lg">Shift</Kbd>
        <Kbd size="md">Shift</Kbd>
        <Kbd size="sm">Shift</Kbd>
        <Kbd size="xs">Shift</Kbd>
      </div>
      <h1 className="my-4 font-bold">In text</h1>
      <span>
        Press <Kbd>F</Kbd> to pay respects.
      </span>
      <h1 className="my-4 font-bold">Key combination</h1>
      <span>
        Press <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy.
      </span>
      <h1 className="my-4 font-bold">Function Keys</h1>
      <span>
        <Kbd>⌘</Kbd> <Kbd>⌥</Kbd> <Kbd>⇧</Kbd> <Kbd>⌃</Kbd>
      </span>
      <h1 className="my-4 font-bold">Arrow Keys</h1>
      <div className="max-w-sm">
        <div className="flex justify-center">
          <Kbd>▲</Kbd>
        </div>
        <div className="flex justify-center gap-12">
          <Kbd>◀︎</Kbd>
          <Kbd>▶︎</Kbd>
        </div>
        <div className="flex justify-center">
          <Kbd>▼</Kbd>
        </div>
      </div>
    </div>
  )
}
