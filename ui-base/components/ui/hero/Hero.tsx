import React from "react"

import { cn } from "@/ui-base/lib/util/utils";
import HeroContent from "./HeroContent"
import HeroOverlay from "./HeroOverlay"

export type HeroProps = React.HTMLAttributes<HTMLDivElement>

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ className, children, ...props }, ref): JSX.Element => {
    return (
      <div ref={ref} role="banner" className={cn("hero", className)} {...props}>
        {children}
      </div>
    )
  }
)

Hero.displayName = "Hero"

export default Object.assign(Hero, {
  Content: HeroContent,
  Overlay: HeroOverlay,
})
