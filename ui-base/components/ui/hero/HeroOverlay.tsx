import React from "react"

import { cn } from "@/ui-base/lib/util/utils";

export type HeroOverlayProps = React.HTMLAttributes<HTMLDivElement>
const HeroOverlay = React.forwardRef<HTMLDivElement, HeroOverlayProps>(
  ({ className, children, ...props }, ref): JSX.Element => {
    return (
      <div ref={ref} className={cn("hero-overlay", className)} {...props}>
        {children}
      </div>
    )
  }
)

HeroOverlay.displayName = "HeroOverlay"

export default HeroOverlay
