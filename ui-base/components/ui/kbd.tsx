import React, { forwardRef } from "react"

import { cn } from "@/ui-base/lib/util/utils";

export type KbdProps = React.HTMLAttributes<HTMLElement> & {
  size?: "lg" | "md" | "sm" | "xs"
}

const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ children, size, className, ...props }, ref): JSX.Element => {
    const classes = cn("kbd", className, {
      [`kbd-${size}`]: size,
    })

    return (
      <kbd {...props} className={classes} ref={ref}>
        {children}
      </kbd>
    )
  }
)

Kbd.displayName = "Kbd"

export default Kbd
