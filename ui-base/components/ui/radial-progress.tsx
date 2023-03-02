import React, { forwardRef } from "react"

import { cn } from "@/ui-base/lib/util/utils";
import { ColorOptions } from "@/ui-base/types/theme";

export type RadialProgressProps = React.HTMLAttributes<HTMLDivElement> & {
  value: number
  size?: string
  thickness?: string
  color?: ColorOptions
}

const RadialProgress = forwardRef<HTMLDivElement, RadialProgressProps>(
  (
    {
      value,
      size = "4rem",
      thickness = "4px",
      color,
      className,
      children,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = cn("radial-progress", className, {
      [`text-${color}`]: color,
    })

    const displayedValue = Math.min(100, Math.max(0, value))
    const progressStyle: Record<string, string | number> = {
      "--value": displayedValue,
      "--size": size,
      "--thickness": thickness,
    }

    return (
      <div
        role="progressbar"
        aria-valuenow={displayedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        className={classes}
        style={progressStyle}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

RadialProgress.displayName = "RadialProgress"

export default RadialProgress
