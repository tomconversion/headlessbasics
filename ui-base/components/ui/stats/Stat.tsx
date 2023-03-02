import React, { forwardRef } from "react"

import { cn } from "@/ui-base/lib/util/utils";

const StatItemVariant = {
  title: "stat-title",
  value: "stat-value",
  desc: "stat-desc",
  figure: "stat-figure",
}

export type StatProps = React.HTMLAttributes<HTMLDivElement>

const Stat = forwardRef<HTMLDivElement, StatProps>(
  ({ className, ...props }, ref): JSX.Element => {
    const classes = cn("stat", className)

    return <div {...props} className={classes} ref={ref} />
  }
)

export type StatItemProps = React.HTMLAttributes<HTMLDivElement> & {
  variant: "title" | "value" | "desc" | "figure"
}

export const StatItem = React.forwardRef<HTMLDivElement, StatItemProps>(
  ({ variant, className, ...props }, ref): JSX.Element => {
    const classes = cn(className, {
      [StatItemVariant[variant]]: variant,
    })

    return <div {...props} className={classes} ref={ref} />
  }
)

Stat.displayName = "Stat"
StatItem.displayName = "StatItem"

export default Object.assign(Stat, { Item: StatItem })
