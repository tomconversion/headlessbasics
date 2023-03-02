import { useState } from "react"

import Rating from "../rating"

export default function RatingDemo() {
  const [rating1, setRating1] = useState(2)
  const [rating2, setRating2] = useState(3)
  const [rating3, setRating3] = useState(1)
  const [rating4, setRating4] = useState(0)
  const [rating5, setRating5] = useState(5)

  return (
    <>
      <h1 className="my-4 text-2xl font-bold">Rating : default</h1>

      <Rating value={rating1} onChange={setRating1} className="py-4">
        <Rating.Item name="rating-1" className="mask mask-star" />
        <Rating.Item name="rating-1" className="mask mask-star" />
        <Rating.Item name="rating-1" className="mask mask-star" />
        <Rating.Item name="rating-1" className="mask mask-star" />
        <Rating.Item name="rating-1" className="mask mask-star" />
      </Rating>

      <h1 className="my-4 text-2xl font-bold">Rating : colors</h1>

      <Rating value={rating2} onChange={setRating2} className="py-4">
        <Rating.Item
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <Rating.Item
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <Rating.Item
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <Rating.Item
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <Rating.Item
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
      </Rating>

      <h1 className="my-4 text-2xl font-bold">Rating : mask heart</h1>

      <Rating value={rating3} onChange={setRating3} className="space-x-1 py-4">
        <Rating.Item name="rating-3" className="mask mask-heart bg-red-400" />
        <Rating.Item name="rating-3" className="mask mask-heart bg-red-400" />
        <Rating.Item name="rating-3" className="mask mask-heart bg-red-400" />
        <Rating.Item name="rating-3" className="mask mask-heart bg-red-400" />
        <Rating.Item name="rating-3" className="mask mask-heart bg-red-400" />
      </Rating>

      <h1 className="my-4 text-2xl font-bold">Rating : hidden</h1>

      <Rating value={rating4} onChange={setRating4} size="lg" className="py-4">
        <Rating.Item name="rating-9" className="mask mask-star" />
        <Rating.Item name="rating-9" className="mask mask-star" />
        <Rating.Item name="rating-9" className="mask mask-star" />
        <Rating.Item name="rating-9" className="mask mask-star" />
        <Rating.Item name="rating-9" className="mask mask-star" />
      </Rating>

      <h1 className="my-4 text-2xl font-bold">Rating : half</h1>
      <Rating
        value={rating5}
        onChange={setRating5}
        size="lg"
        half
        className="py-4"
      >
        <Rating.Item
          name="rating-10"
          className="mask mask-half-1 mask-star-2 bg-green-500"
        />
        <Rating.Item
          name="rating-10"
          className="mask mask-half-2 mask-star-2 bg-green-500"
        />
        <Rating.Item
          name="rating-10"
          className="mask mask-half-1 mask-star-2 bg-green-500"
        />
        <Rating.Item
          name="rating-10"
          className="mask mask-half-2 mask-star-2 bg-green-500"
        />

        <Rating.Item
          name="rating-10"
          className="mask mask-half-1 mask-star-2 bg-green-500"
        />
        <Rating.Item
          name="rating-10"
          className="mask mask-half-2 mask-star-2 bg-green-500"
        />

        <Rating.Item
          name="rating-10"
          className="mask mask-half-1 mask-star-2 bg-green-500"
        />
        <Rating.Item
          name="rating-10"
          className="mask mask-half-2 mask-star-2 bg-green-500"
        />

        <Rating.Item
          name="rating-10"
          className="mask mask-half-1 mask-star-2 bg-green-500"
        />
        <Rating.Item
          name="rating-10"
          className="mask mask-half-2 mask-star-2 bg-green-500"
        />
      </Rating>
    </>
  )
}
