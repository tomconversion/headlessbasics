import React, { ReactElement } from "react"

import { cn } from "@/ui-base/lib/util/utils";

const RatingSizes = {
  lg: "rating-lg",
  md: "rating-md",
  sm: "rating-sm",
  xs: "rating-xs",
}

export type RatingProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> & {
  size?: keyof typeof RatingSizes
  half?: boolean
  hidden?: boolean
  value: number
  onChange?: (newRating: number) => void
}

const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    { children, size, half, hidden, className, value, onChange, ...props },
    ref
  ): JSX.Element => {
    const classes = cn("rating", className, {
      [RatingSizes[size]]: size,
      "rating-half": half,
      "rating-hidden": hidden || value === 0,
    })

    return (
      <div aria-label="Rating" {...props} ref={ref} className={classes}>
        {value === 0 && (
          <RatingItem className={cn(classes, "hidden")} checked readOnly />
        )}
        {React.Children.map(children, (child, index) => {
          const childComponent = child as ReactElement<RatingItemProps>
          return React.cloneElement(childComponent, {
            key: index + value,
            checked: value === index + 1,
            readOnly: onChange == null,
            onChange: () => {
              onChange?.(index + 1)
            },
          })
        })}
      </div>
    )
  }
)

export type RatingItemProps = React.InputHTMLAttributes<HTMLInputElement>

export const RatingItem = ({ ...props }: RatingItemProps): JSX.Element => {
  return <input {...props} type="checkbox" />
}

RatingItem.displayName = "RatingItem"
Rating.displayName = "Rating"

export default Object.assign(Rating, { Item: RatingItem })
