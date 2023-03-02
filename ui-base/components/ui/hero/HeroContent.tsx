import React from "react"

import { cn } from "@/ui-base/lib/util/utils";

export type HeroContentProps = React.HTMLAttributes<HTMLDivElement>

const HeroContent = React.forwardRef<HTMLDivElement, HeroContentProps>(
  ({ className, children, ...props }, ref): JSX.Element => {
    return (
      <div ref={ref} className={cn("hero-content", className)}  {...props}>
        {children}
      </div>
    )
  }
)

HeroContent.displayName = "HeroContent"

export default HeroContent
