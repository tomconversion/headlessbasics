import { cn } from "@/ui-base/lib/util/utils"
import React, { forwardRef } from "react"

const BadgeColor = {
  primary: "badge-primary",
  secondary: "badge-secondary",
  accent: "badge-accent",
  ghost: "badge-ghost",
  info: "badge-info",
  success: "badge-success",
  warning: "badge-warning",
  error: "badge-error",
}

const BadgeVariant = {
  outline: "badge-outline",
}

const BadgeSizes = {
  lg: "badge-lg",
  md: "badge-md",
  sm: "badge-sm",
  xs: "badge-xs",
}

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  color?: keyof typeof BadgeColor
  size?: keyof typeof BadgeSizes
  variant?: keyof typeof BadgeVariant
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    { children, className, variant, size, color, ...props },
    ref
  ): JSX.Element => {
    const classes = cn("badge", {
      [BadgeColor[color || "primary"]]: color,
      [BadgeSizes[size || "md"]]: size,
      [BadgeVariant[variant || ""]]: variant,

      [className]: className,
    })

    return (
      <div aria-label="Badge" className={classes} ref={ref} {...props}>
        {children}
      </div>
    )
  }
)

Badge.displayName = "Badge"

export default Badge
