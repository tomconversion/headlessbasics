import RadialProgress from "../radial-progress"

export default function RadialProgressDemo() {
  return (
    <>
      <h1 className="my-4 text-2xl font-bold">Radial Progress</h1>
      <div className="flex items-center space-x-6 py-6">
        <RadialProgress value={25} />
        <RadialProgress value={50} />
        <RadialProgress value={75} />
        <RadialProgress value={100} />
      </div>
      <h1 className="my-4 text-2xl font-bold">Custom size, thickness </h1>
      <div className="flex items-center gap-4 py-6">
        <RadialProgress value={70} size="12rem" thickness="2px">
          70%
        </RadialProgress>
        <RadialProgress value={80} size="12rem" thickness="2rem">
          80%
        </RadialProgress>
      </div>
      <h1 className="my-4 text-2xl font-bold">Custom color</h1>
      <div className="flex items-center gap-4 py-6">
        <RadialProgress value={70} color="primary">
          70%
        </RadialProgress>
        <RadialProgress value={80} color="secondary">
          80%
        </RadialProgress>
        <RadialProgress value={90} color="success">
          90%
        </RadialProgress>
        <RadialProgress value={100} color="error">
          100%
        </RadialProgress>
      </div>
    </>
  )
}
