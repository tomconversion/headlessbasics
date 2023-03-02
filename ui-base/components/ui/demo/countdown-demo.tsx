import { useEffect, useState } from "react"

import Countdown from "../countdown"

export default function CountdownDemo() {
  const [value, setValue] = useState<number>(124)

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((v) => (v <= 0 ? 124 : v - 1))
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [value])
  return (
    <div>
      <h1 className="my-4 font-bold"> Default </h1>
      <div>
        <Countdown className="text-2xl" value={value} />
      </div>
      <h1 className="my-4 font-bold">Clock</h1>
      <span className="font-mono text-2xl">
        <Countdown value={10} />:
        <Countdown value={24} />:
        <Countdown value={value} />
      </span>
      <h1 className="my-4 font-bold">With Labels</h1>

      <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
        <div className="flex flex-col">
          <Countdown className="font-mono text-5xl" value={15} />
          days
        </div>
        <div className="flex flex-col">
          <Countdown className="font-mono text-5xl" value={10} />
          hours
        </div>
        <div className="flex flex-col">
          <Countdown className="font-mono text-5xl" value={24} />
          min
        </div>
        <div className="flex flex-col">
          <Countdown className="font-mono text-5xl" value={value} />
          sec
        </div>
      </div>
      <h1 className="my-4 font-bold">With Boxes</h1>

      <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
        <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <Countdown className="font-mono text-5xl" value={15} />
          days
        </div>
        <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <Countdown className="font-mono text-5xl" value={10} />
          hours
        </div>
        <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <Countdown className="font-mono text-5xl" value={24} />
          min
        </div>
        <div className="rounded-box flex flex-col bg-neutral p-2 text-neutral-content">
          <Countdown className="font-mono text-5xl" value={value} />
          sec
        </div>
      </div>
    </div>
  )
}
