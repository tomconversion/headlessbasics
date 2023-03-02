import React from "react"

import { cn } from "@/ui-base/lib/util/utils";

const MaskVariants = {
  squircle: "mask-squircle",
  heart: "mask-heart",
  hexagon: "mask-hexagon",
  hexagon2: "mask-hexagon-2",
  decagon: "mask-decagon",
  pentagon: "mask-pentagon",
  diamond: "mask-diamond",
  square: "mask-square",
  circle: "mask-circle",
  parallelogram: "mask-parallelogram",
  parallelogram2: "mask-parallelogram-2",
  parallelogram3: "mask-parallelogram-3",
  parallelogram4: "mask-parallelogram-4",
  star: "mask-star",
  star2: "mask-star-2",
  triangle: "mask-triangle",
  triangle2: "mask-triangle-2",
  triangle3: "mask-triangle-3",
  triangle4: "mask-triangle-4",
  half1: "mask-half-1",
  half2: "mask-half-2",
}

export type MaskProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  variant?: keyof typeof MaskVariants
}

const Mask = React.forwardRef<HTMLImageElement, MaskProps>(
  ({ src, variant, className, ...props }, ref): JSX.Element => {
    const classes = cn("mask", className, {
      [MaskVariants[variant]]: variant,
    })

    return (
      //   eslint-disable-next-line @next/next/no-img-element
      <img className={classes} src={src} ref={ref} alt={variant} {...props} />
    )
  }
)

Mask.displayName = "Mask"

export default Mask
