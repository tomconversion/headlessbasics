import React, { forwardRef } from "react"

import { cn } from "@/ui-base/lib/util/utils";
import ChatBubbleAvatar from "./ChatBubbleAvatar"
import ChatBubbleFooter from "./ChatBubbleFooter"
import { ChatBubbleHeader, ChatBubbleTime } from "./ChatBubbleHeader"
import ChatBubbleMessage from "./ChatBubbleMessage"

export type ChatBubbleProps = React.HTMLAttributes<HTMLDivElement> & {
  end?: boolean
}

const ChatBubble = forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ end = false, color, className, children, ...props }, ref): JSX.Element => (
    <div
      {...props}
      className={cn(
        "chat",
        {
          "chat-start": !end,
          "chat-end": end,
        },
        className
      )}
      ref={ref}
    >
      {children}
    </div>
  )
)

ChatBubble.displayName = "ChatBubble"

export default Object.assign(ChatBubble, {
  Header: ChatBubbleHeader,
  Time: ChatBubbleTime,
  Avatar: ChatBubbleAvatar,
  Message: ChatBubbleMessage,
  Footer: ChatBubbleFooter,
})
