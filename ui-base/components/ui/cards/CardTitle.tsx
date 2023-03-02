import React, { ElementType } from "react"

import { cn } from "@/ui-base/lib/util/utils";

export type CardTitleProps = React.HTMLAttributes<HTMLDivElement> & {
  tag?: ElementType
}

const CardTitle = React.forwardRef<HTMLElement, CardTitleProps>(
  ({ className, tag = "div", ...props }, ref) => {
    const Tag = tag

    return <Tag ref={ref} className={cn("card-title", className)} {...props} />
  }
)

CardTitle.displayName = "CardTitle"
export default CardTitle
