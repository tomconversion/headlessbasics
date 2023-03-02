import React, { forwardRef, useMemo } from "react"

import { cn, isNumeric } from "@/ui-base/lib/util/utils";

const RangeSizes = {
  lg: "range-lg",
  md: "range-md",
  sm: "range-sm",
  xs: "range-xs",
}

const RangeColors = {
  primary: "range-primary",
  secondary: "range-secondary",
  accent: "range-accent",
  success: "range-success",
  warning: "range-warning",
  info: "range-info",
  error: "range-error",
}

export type RangeProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  color?: keyof typeof RangeColors
  size?: keyof typeof RangeSizes
}

const Range = forwardRef<HTMLInputElement, RangeProps>(
  ({ color, size, step, className, ...props }, ref): JSX.Element => {
    const classes = cn("range", className, {
      [RangeSizes[size]]: size,
      [RangeColors[color]]: color,
    })

    const numSteps = useMemo(() => {
      const safeStep = Math.max(1, Number(step))
      return Math.ceil(100 / safeStep) ?? 1
    }, [step])

    return (
      <>
        <input
          ref={ref}
          type="range"
          step={step}
          className={classes}
          {...props}
        />
        {isNumeric(step) && (
          <div className="flex w-full justify-between px-2 text-xs">
            {[...Array(numSteps + 1)].map((_, i) => {
              return <span key={i}>|</span>
            })}
          </div>
        )}
      </>
    )
  }
)

Range.displayName = "Range"

export default Range
