import React from "react"

import { cn } from "@/ui-base/lib/util/utils";

export type ChatBubbleHeaderProps = React.HTMLAttributes<HTMLDivElement> & {}

const ChatBubbleHeader = React.forwardRef<
  HTMLDivElement,
  ChatBubbleHeaderProps
>(({ className, ...props }, ref) => (
  <div {...props} className={cn("chat-header", className)} ref={ref} />
))

export type ChatBubbleTimeProps = React.TimeHTMLAttributes<HTMLTimeElement>

const ChatBubbleTime = React.forwardRef<HTMLTimeElement, ChatBubbleTimeProps>(
  ({ className, ...props }, ref) => (
    <time
      {...props}
      className={cn("text-xs opacity-50", className)}
      ref={ref}
    />
  )
)

ChatBubbleHeader.displayName = "ChatBubbleHeader"
ChatBubbleTime.displayName = "ChatBubbleTime"

export { ChatBubbleHeader, ChatBubbleTime }
