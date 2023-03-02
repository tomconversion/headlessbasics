import React from "react"

import { cn } from "@/ui-base/lib/util/utils";
import { ColorOptions } from "@/ui-base/types/theme";

export type ChatBubbleMessageProps = React.HTMLAttributes<HTMLDivElement> & {
  color?: ColorOptions
}

const ChatBubbleMessage = React.forwardRef<
  HTMLDivElement,
  ChatBubbleMessageProps
>(({ color, className, ...props }, ref) => {
  const classes = cn(
    "chat-bubble",
    {
      [`chat-bubble-${color}`]: color,
    },
    className
  )

  return <div {...props} className={classes} ref={ref} />
})

ChatBubbleMessage.displayName = "ChatBubbleMessage"
export default ChatBubbleMessage
