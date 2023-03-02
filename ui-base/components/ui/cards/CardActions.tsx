import React from "react"

import { cn } from "@/ui-base/lib/util/utils";

export type CardActionsProps = React.HTMLAttributes<HTMLDivElement>

const CardActions = React.forwardRef<HTMLDivElement, CardActionsProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("card-actions", className)} {...props} />
  )
)

CardActions.displayName = "CardActions"

export default CardActions
