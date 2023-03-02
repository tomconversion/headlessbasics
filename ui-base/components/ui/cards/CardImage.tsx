import React from "react"
import Image, { ImageProps } from "next/image"

const CardImage: React.FC<ImageProps> = ({ alt, ...rest }) => {
  return (
    <figure>
      <Image alt={alt} {...rest} />
    </figure>
  )
}

CardImage.displayName = "CardImage"

export default CardImage
